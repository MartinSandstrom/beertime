
angular.module('beerTime').controller('LoginCtrl', ['$scope', 'LoginService', '$location', function($scope, LoginService, $location) {


	var ref = new Firebase('https://beertime.firebaseio.com/data');

	if(ref.getAuth()) {
		$location.path('scoreboard');
	}

	$scope.logIn = function() {

		var isLoggedIn = LoginService.logInPrompt(ref);
		if(isLoggedIn) {
				$location.path('scoreboard');
		} else {
				console.log('failed to login');
		}
	}
}]);
