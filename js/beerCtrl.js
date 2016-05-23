
angular.module('beerTime').controller('BeerCtrl', ['$scope', 'LoginService', '$location', '$firebaseArray', function($scope, LoginService, $location, $firebaseArray) {
	var ref = new Firebase('https://beertime.firebaseio.com/data');
	var users = $firebaseArray(ref);


	var auth = ref.getAuth();
	if(!auth) {
		$location.path('/');
	}

	$scope.addBeer = function(type) {
		if(!auth){
			logInPrompt();
			return;
		}
		var user;

		if(auth.provider === 'google') {
			user = {
				userName: auth.google.displayName,
				id: auth.google.id,
				imageURL: auth.google.profileImageURL,
			};
		}

		if(isInList(user.id)){
			if(type === 'beer') addBeer(user.id);
			else if(type === 'wine') addWine(user.id);
		} else {
			user.total = 1;
			if(type === 'beer') {
				user.beer = 1;
				user.wine = 0;
			}
			else if(type === 'wine') {
				user.beer = 0;
				user.wine = 1;
			}
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

	function addWine(id) {
		angular.forEach(users, (function(key){
				if(key.id === id) {
					key.wine = key.wine + 1;
					key.total = key.total + 1;
					users.$save(key).then(function(ref) {
					});
				}
		}));
	}

	function addBeer(id) {
		angular.forEach(users, (function(key){
				if(key.id === id) {
					key.beer = key.beer + 1;
					key.total = key.total + 1;
					users.$save(key).then(function(ref) {
					});
				}
		}));
	}
}]);
