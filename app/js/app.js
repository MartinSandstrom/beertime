
angular.module('beerTime', ['firebase', 'ngRoute'])
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/landingpage.html',
		controller: ''
	})
	.when('/scoreboard', {
		templateUrl: 'views/scoreboard.html',
		controller: 'ScoreBoardCtrl'
	})
	.when('/beer', {
		templateUrl: 'views/beers.html',
		controller: 'BeerCtrl'
	})
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LoginCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
})
