
angular.module('beerTime').controller('BeerCtrl', ['$scope', 'LoginService', '$location', '$firebaseArray', function($scope, LoginService, $location, $firebaseArray) {
	var ref = new Firebase('https://beertime.firebaseio.com/data');
	var userObj = $firebaseArray(ref);


	var auth = ref.getAuth();
	if(!auth) {
		$location.path('/');
	}

	$scope.addBeer = function() {
		if(!auth){
			logInPrompt();
			return;
		}
		var user = {
			userName: auth.google.displayName,
			id: auth.google.id,
		};
		userObj.$add(user);
	};
}]);
