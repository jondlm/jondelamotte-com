'use strict';

jonApp.controller('IndexCtrl', IndexCtrl);

function IndexCtrl($scope, lastFmFactory, $http, $location) {
  $scope.posts = [];
  $scope.orderProp = 'created';
  $scope.reverse = true;

  init();

  function init() {
    console.dir($location.path());
    if ($location.path() === '/music') {
      $scope.songs = lastFmFactory.query();
    }

    if($location.path() === '/blog') {
      $http.get('blog/posts.json')
        .success(function(data){
          $scope.posts = data;
        })
        .error(function(wtfIsThis){
          console.log(wtfIsThis);
        });
    }
  }
}