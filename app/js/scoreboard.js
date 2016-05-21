
angular.module('beerTime').controller('ScoreBoardCtrl', ['$scope', '$firebaseArray', '$location', function($scope, $firebaseArray, $location) {

	var ref = new Firebase('https://beertime.firebaseio.com/data');

	var auth = ref.getAuth();
	if(!auth) {
		$location.path('/');
	}

	$scope.messages = $firebaseArray(ref);

}]);
