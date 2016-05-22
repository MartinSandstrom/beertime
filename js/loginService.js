angular.module('beerTime').factory('LoginService', ['$location', function($location){
	return {
		logInPrompt: function(ref) {
			return ref.authWithOAuthPopup("google", function(error, authData) {
				if (error) {
					console.log("Login Failed!", error);
				} else {
					console.log('login success');
				}
			});
		}
	}
}]);
