'use strict';

jonApp.controller('IndexCtrl', IndexCtrl);

function IndexCtrl($scope, lastFmFactory, $http, $routeParams) {
  $scope.hello = 'Hey there friend.';
  $scope.posts = [];

  $scope

  init();

  function init() {
    $scope.songs = lastFmFactory.query();

    $http.get('blog/posts.json')
      .success(function(data){
        $scope.posts = data;
      })
      .error(function(wtfIsThis){
        console.log(wtfIsThis);
      });
  }
  
}
