'use strict';

jonApp.factory('lastFmFactory', lastFmFactory);

function lastFmFactory($resource) {
  return $resource(
    'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jondlm&api_key=8a1f0fc68c0f252d3d0fa202020d5f76&format=json',
    {},
    { query: {method: 'GET'} }
  );
}