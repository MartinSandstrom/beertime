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
      .otherwise({
          redirectTo: '/'
      });
  })
