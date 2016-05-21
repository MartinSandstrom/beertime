
var app = angular.module('beerTime', ['firebase']);

app.controller('SampleCtrl', ['$scope', '$firebaseArray', 'AuthService', function($scope, $firebaseArray, AuthService) {


	var ref = new Firebase('https://beertime.firebaseio.com/data');


	function logInPrompt(){
		ref.authWithOAuthPopup("google", function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				AuthService.setAuthData(authData);
				console.log("Authenticated successfully with payload:", authData);
			}
		});
	}

	logInPrompt();

	$scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
		var auth = ref.getAuth();
		if(!auth){
			logInPrompt();
			return;
		}
		console.log(auth);
		var userName = auth.google.displayName;
		var id = auth.google.id;
    $scope.messages.$add({
      text: $scope.newMessageText,
			user: userName,
			id: id
    });
  };
}]);
