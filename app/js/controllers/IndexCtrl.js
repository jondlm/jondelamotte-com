'use strict';

jonApp.controller('IndexCtrl', IndexCtrl);


function IndexCtrl($scope, lastFmFactory) {
  $scope.hello = 'Hey there friend.';

  init();

  function init() {
    $scope.songs = lastFmFactory.query();
    // $scope.songs.success(function(){
    //   debugger;
    // });
  }
  
}
