
angular.module('beerTime').controller('ScoreBoardCtrl', ['$scope', '$firebaseArray', '$location', function($scope, $firebaseArray, $location) {

	var ref = new Firebase('https://beertime.firebaseio.com/data');
	$scope.users = $firebaseArray(ref);
}]);
