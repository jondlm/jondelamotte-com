'use strict';

jonApp.controller('IndexCtrl', IndexCtrl);


function IndexCtrl($scope, lastFmFactory) {
  $scope.songs = [];
  $scope.hello = 'Hey there friend.';

  init();

  function init() {
    $scope.songs = lastFmFactory.getSongs();
  }
  
}
