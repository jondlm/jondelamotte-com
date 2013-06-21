'use strict';

jonApp.controller('BlogEntryCtrl', BlogEntryCtrl);

function BlogEntryCtrl ($scope, $routeParams, $http) {
  $scope.content = '';
  $scope.name = '';
  $scope.poopsmith = function(){console.log('poopsmith in da house')};

  $scope.afterPartialLoaded = function() {
    loadDisqus($routeParams.postName);
  };

  if ($routeParams.postName) {
    $http.get('/blog/' + $routeParams.postName)
      .success(function(html){
        $scope.name = $routeParams.postName;
        $scope.content = html;
      })
      .error(function(wtfIsThis){
        console.log(wtfIsThis);
      });
  }
}


function loadDisqus(currentPageId) {
  window.disqus_shortname = 'jondelamotte';
  window.disqus_identifier = currentPageId;
  window.disqus_url = 'http://jondelamotte.com/index.html#/blog/' + currentPageId;

  (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
}