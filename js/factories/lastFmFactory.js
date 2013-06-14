'use strict';

jonApp.factory('lastFmFactory', lastFmFactory);

function lastFmFactory($http) {
  var songs = [
    {name: 'Sing for me baby'},
    {name: 'Another song about nothing'},
    {name: 'Greerson, son!'}
  ];

  var factory = {};

  factory.getSongs = function () {
    return songs;
  };

  return factory;
}