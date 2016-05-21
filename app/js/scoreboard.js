
angular.module('beerTime').controller('ScoreBoardCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

	var ref = new Firebase('https://beertime.firebaseio.com/data');
	$scope.messages = $firebaseArray(ref);
	
}]);
