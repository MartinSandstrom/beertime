angular.module("beerTime",["firebase","ngRoute"]).config(function($routeProvider){$routeProvider.when("/",{templateUrl:"views/landingpage.html",controller:""}).when("/scoreboard",{templateUrl:"views/scoreboard.html",controller:"ScoreBoardCtrl"}).when("/beer",{templateUrl:"views/beers.html",controller:"BeerCtrl"}).otherwise({redirectTo:"/"})}),angular.module("beerTime").controller("BeerCtrl",["$scope","LoginService","$location","$firebaseArray",function($scope,LoginService,$location,$firebaseArray){function createNewUser(type){var user={beer:0,wine:0,total:1};return user[type]=user[type]+1,"google"===auth.provider?(user.userName=auth.google.displayName,user.id=auth.google.id,user.imageURL=auth.google.profileImageURL):"github"===auth.provider,users.$add(user),user}function isInList(id){var returnValue=!1;return angular.forEach(users,function(key){key.id===id&&(returnValue=!0)}),returnValue}function addDrink(type,id){angular.forEach(users,function(key){key.id===id&&(key.total=key.total+1,key[type]=key[type]+1,users.$save(key))})}var ref=new Firebase("https://beertime.firebaseio.com/data"),users=$firebaseArray(ref),auth=ref.getAuth();auth||$location.path("/"),$scope.addBeer=function(type){if(!auth)return void logInPrompt();var userId=auth.google.id;if(isInList(userId))addDrink(type,userId);else{var user=createNewUser(type);addDrink(type,user.id)}}}]),angular.module("beerTime").controller("LoginCtrl",["$scope","LoginService","$location",function($scope,LoginService,$location){var ref=new Firebase("https://beertime.firebaseio.com/data");ref.getAuth()&&$location.path("scoreboard"),$scope.logIn=function(){LoginService.logInPrompt(ref)}}]),angular.module("beerTime").factory("LoginService",["$location",function($location){return{logInPrompt:function(ref){return ref.authWithOAuthPopup("google",function(error,authData){error?console.log("Login Failed!",error):console.log("login success")})}}}]),angular.module("beerTime").controller("ScoreBoardCtrl",["$scope","$firebaseArray","$location",function($scope,$firebaseArray,$location){var ref=new Firebase("https://beertime.firebaseio.com/data"),auth=ref.getAuth();auth||$location.path("/"),$scope.users=$firebaseArray(ref)}]);