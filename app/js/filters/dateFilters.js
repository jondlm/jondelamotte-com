// This filter module is for filtering dates. Hehe.

angular.module('dateFilters', [])
  .filter('utcFromNow', function(){
    return function(input) {
      return moment
              .utc(input, 'DD MMM YYYY, hh:mm')
              .local()
              .fromNow();
    };
  })
  .filter('fromNow', function(){
    return function(input) {
      return moment(input).fromNow();
    };
  });