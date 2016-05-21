var app = angular.module('sampleApp', ['firebase']);

app.controller('SampleCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase('https://beertime.firebaseio.com/data');
  // download the data into a local object

	$scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };
}]);
