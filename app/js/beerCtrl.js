
angular.module('beerTime').controller('BeerCtrl', ['$scope', 'LoginService', '$location', '$firebaseArray', function ($scope, LoginService, $location, $firebaseArray) {

	'use strict';
	var ref = new Firebase('https://beertime.firebaseio.com/data');
	var users = $firebaseArray(ref);
	var auth = ref.getAuth();

	if (!auth) {
		$location.path('/login');
	}

	$scope.addBeer = function (type) {
		if (!auth){
			return;
		}

		var provider = auth.provider;
		var userId = auth[provider].id;


		if (isInList(userId)){
			addDrink(type, userId);
		} else {
			var user = createNewUser(type);
			addDrink(type, user.id);
		}
	};

	function createNewUser(type) {
		var user = {
			beer: 0,
			wine: 0,
			total: 1,
			timestamp: new Date().getTime()
		};
		user[type] = user[type] + 1;
		var provider = auth.provider;
		user.userName = auth[provider].displayName;
		user.id = auth[provider].id;
		user.imageURL = auth[provider].profileImageURL;
		users.$add(user);
		return user;
	}

	function isInList(id) {
		var returnValue = false;
		angular.forEach(users, (function(key){
			if(key.id === id) {
				returnValue = true;
			}
		}));
		return returnValue;
	}

	function addDrink(type, id){
		var now = new Date().getTime();
		angular.forEach(users, (function(key){
			if(key.id === id) {
				var fiveMinutesLate = key.timestamp + (5 * 60 * 1000);
				if(key.userName.toUpperCase().indexOf('ARVID') === -1 && now < fiveMinutesLate) {
					swal("Oops...", "Slow down the drinking, only Arvid can drink that fast!", "error");
					return false;
				}
				key.total = key.total + 1;
				key[type] = key[type] + 1;
				key.timestamp = new Date().getTime();
				users.$save(key).then(function(){
					swal("Drink registrated");
				});
			}
		}));
	}

}]);
