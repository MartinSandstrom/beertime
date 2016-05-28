angular.module('beerTime').factory('LoginService', ['$location', function($location){
	return {
		logInPrompt: function(ref, provider) {
			return ref.authWithOAuthPopup(provider, function(error, authData) {
				if (error) {
					alert(error);
					this.logInRedirect(ref, provider);


					console.log("Login Failed!", error);
				} else {
					$location.path('beer');
				}
			});
		},
		logInRedirect: function(ref, provider) {
			ref.authWithOAuthRedirect(provider, function(error, authData) {
				if (error) {
					console.log("Login Failed!", error);
				} else {
					$location.path('beer');
				}
			});
		}
	};
}]);
