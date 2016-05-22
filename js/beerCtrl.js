
angular.module('beerTime').controller('BeerCtrl', ['$scope', 'LoginService', '$location', '$firebaseArray', function($scope, LoginService, $location, $firebaseArray) {
	var ref = new Firebase('https://beertime.firebaseio.com/data');
	var users = $firebaseArray(ref);


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
		if(isInList(user.id)){
			addBeer(user.id);
		} else {
			user.total = 1;
			users.$add(user);
		}
	};

	function isInList(id) {
		var returnValue = false;
		angular.forEach(users, (function(key){
			if(key.id === id) {
				returnValue = true;
			}
		}));
		return returnValue;
	}

	function addBeer(id) {
		angular.forEach(users, (function(key){
				if(key.id === id) {
					key.total = key.total + 1;
					users.$save(key).then(function(ref) {
					});
				}
		}));
	}
}]);
