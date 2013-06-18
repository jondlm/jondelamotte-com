'use strict';

var jonApp = angular.module('jonApp', ['ngResource']);

jonApp.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
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
    .when('/blog', {
      controller: 'IndexCtrl',
      templateUrl: 'blog/test.html'
      // templateUrl: 'partial/blog.html'
    })
    .otherwise( {redirectTo: '/'} );

});