'use strict';

jonApp.controller('BlogEntryCtrl', BlogEntryCtrl);

function BlogEntryCtrl ($scope, $routeParams, $http) {
  $scope.content = '';
  $scope.name = '';

  if ($routeParams.postName) {
    $http.get('blog/' + $routeParams.postName)
      .success(function(html){
        console.log(html); // DEBUG
        $scope.name = $routeParams.postName;
        $scope.content = html;
      })
      .error(function(wtfIsThis){
        console.log(wtfIsThis);
      });
  }
}