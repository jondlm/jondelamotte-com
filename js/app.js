'use strict';

var jonApp = angular.module('jonApp', []);

jonApp.config(function ($routeProvider) {

  $routeProvider
    .when('/music', {
      controller: 'IndexCtrl',
      templateUrl: 'partial/music.html'
    })
    .when('/about', {
      controller: 'IndexCtrl',
      templateUrl: 'partial/about.html'
    })
    .when ('/contact', {
      controller: 'IndexCtrl',
      templateUrl: 'partial/contact.html'
    })
    .otherwise( {redirectTo: '/'} );

});