'use strict';

jonApp.factory('lastFmFactory', lastFmFactory);

function lastFmFactory($resource) {
  return $resource(
    'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jondlm&api_key=8a1f0fc68c0f252d3d0fa202020d5f76&format=json',
    {},
    { query: {method: 'GET'} }
  );
}
/*
function lastFmFactory($http) {

  var songs = [];

  $http({ 
    method: 'GET',
    url: 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jondlm&api_key=8a1f0fc68c0f252d3d0fa202020d5f76&format=json'
    })
    .success(function (data, status, headers, config) {
      songs = data.recenttracks.track;
    })
    .error(function (data, status, headers, config){
      console.log('Error connecting to Last.fm'); // TODO: replace this with $log, or some sort of dependency injected logger
    });

  var factory = {};

  factory.getSongs = function () {
    return songs;
  };

  return factory;
}
*/