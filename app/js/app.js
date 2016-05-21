angular.module('beerTime', ['firebase', 'ngRoute'])
  .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
      })
      .when('/scoreboard', {
          templateUrl: 'views/scoreboard.html',
          controller: 'ScoreBoardCtrl'
      })
			.when('/beer', {
				templateUrl: 'views/beers.html',
				controller: 'BeerCtrl'
			})
      .otherwise({
          redirectTo: '/'
      });
  })
