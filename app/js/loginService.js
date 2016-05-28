angular.module('beerTime').factory('LoginService', ['$location', function($location){
	return {
		logInPrompt: function(ref, provider) {
			return ref.authWithOAuthPopup(provider, function(error, authData) {
				if (error) {
					console.log(error);
					if (error.toString().indexOf('TRANSPORT_UNAVAILABLE') > -1) {
						ref.authWithOAuthRedirect(provider, function(error, authData) {
							if (error) {
								console.log("Login Failed!", error);
							} else {
								$location.path('beer');
							}
						});
					}
					console.log("Login Failed!", error);
				} else {
					//$location.path('beer');
				}
			});
		}
	};
}]);
