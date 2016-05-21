
angular.module('beerTime').controller('ScoreBoardCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

	var ref = new Firebase('https://beertime.firebaseio.com/data');

	$scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
		var auth = ref.getAuth();
		if(!auth){
			logInPrompt();
			return;
		}
		var userName = auth.google.displayName;
		var id = auth.google.id;
    $scope.messages.$add({
      number: $scope.newMessageText,
			user: userName,
			id: id
    });
  };
}]);
