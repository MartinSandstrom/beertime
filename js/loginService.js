angular.module('beerTime').factory('LoginService', ['$location', function($location){
	return {
		logInPrompt: function(ref, provider) {
			return ref.authWithOAuthPopup(provider, function(error, authData) {
				if (error) {
					alert('innan allt skit');
					if (error.toString().indexOf('TRANSPORT_UNAVAILABLE') > -1) {
						alert('inne');
						alert(error);
						this.logInRedirect(ref, provider);
					}

					alert('ute');
					alert(error);
					console.log("Login Failed!", error);
				} else {
					$location.path('beer');
				}
			});
		},
		logInRedirect: function(ref, provider) {
			ref.authWithOAuthRedirect(provider, function(error, authData) {
				if (error) {
					alert(error);
					console.log("Login Failed!", error);
				} else {
					$location.path('beer');
				}
			});
		}
	};
}]);
