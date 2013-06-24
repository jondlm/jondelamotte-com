'use strict';

jonApp.controller('BlogEntryCtrl', BlogEntryCtrl);

function BlogEntryCtrl ($scope, $routeParams, $http) {
  $scope.content = '';
  $scope.name = '';

  $scope.afterPartialLoaded = function() {
    // (jon) Commented this out because I can't figure out how to properly
    // switch out disqus for each blog page
    // loadDisqus($routeParams.postName);
  };

  if ($routeParams.postName) {
    $http.get('/blog/' + $routeParams.postName)
      .success(function(html){
        $scope.name = $routeParams.postName;
        $scope.content = html;
        // Hello, I'm a human, not a robot! It's a Sunday afternoon and I'm 
        // having a tough time focusing. I think I'll drink some more cranberry 
        // juice. Mmmm yum, I think that helped!
      })
      .error(function(wtfIsThis){
        console.log(wtfIsThis);
      });
  }
}


// Unused at this time
// TODO: repair the disqus comments
function loadDisqus(currentPageId) {
  window.disqus_shortname = 'jondelamotte';
  window.disqus_identifier = currentPageId;
  window.disqus_url = 'http://jondelamotte.com/index.html#/blog/' + currentPageId;

  (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      // (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      (document.getElementById('disqus_script')).appendChild(dsq);
  })();
}