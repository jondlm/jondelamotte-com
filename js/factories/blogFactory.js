'use strict';

jonApp.factory('blogFactory', blogFactory);

function blogFactory() {

  var factory = {};

  var blogPosts = [];

  factory.getBlogPosts = function () {
    return blogPosts;
  };

  return factory;
}