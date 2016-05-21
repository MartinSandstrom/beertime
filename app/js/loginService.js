angular.module('beerTime').factory('LoginService', function(){
	return {
		logInPrompt: function() {
			ref.authWithOAuthPopup("google", function(error, authData) {
				if (error) {
					console.log("Login Failed!", error);
					return false;
				} else {
					AuthService.setAuthData(authData);
					return true;
				}
			});
		}
	}
});
