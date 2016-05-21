
angular.module('beerTime').controller('LoginCtrl', ['$scope', 'LoginService', '$location', function($scope, LoginService, $location) {


	var ref = new Firebase('https://beertime.firebaseio.com/data');

	if(ref.getAuth()) {
		$location.path('scoreboard');
	}

	$scope.logIn = function() {
		LoginService.logInPrompt(ref);
	}
}]);
