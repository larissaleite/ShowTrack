angular.module('showTrack', ['ngCookies', 'ngResource', 'ngRoute'])
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
	  .when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'MainCtrl'
	  })
	  .when('/login', {
	    templateUrl: 'views/login.html',
	    controller: 'LoginCtrl'
	  })
	  .when('/signup', {
	    templateUrl: 'views/signup.html',
	    controller: 'SignupCtrl'
	  })
	  .otherwise({
	    redirectTo: '/'
	  });

  });