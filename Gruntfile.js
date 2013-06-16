// Just run `grunt` in the command line once you have run `npm install`
// You can also run `grunt watch` to watch specific files

module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      options: {
        sourceMap: 'source-map.js',
        banner: '// By: Jon de la Motte\n' + 
                '// On: ' + new Date() + '\n' +
                '// \n' +
                '// 3rd party libraries:\n' +
                '//   Angular.js - v1.5.1 - angularjs.org\n' +
                '//   Foundation.js - v4.2.2 - foundation.zurb.com\n' +
                '//   Moment.js - v2.0.0 - momentjs.com\n'
      },
      main: {
        files: {
          'app/js/package.min.js': [
            'app/js/vendor/angular.js',
            'app/js/vendor/foundation.min.js',
            'app/js/vendor/moment.js',
            'app/js/vendor/mixpanel.js'
          ]
        }
      }
    },
    watch: { // TODO fix the watch, structure has changed from when I wrote this
      scripts: {
        files: ['app/js/main.js'],
        tasks: ['default']
      }
    }
  });

  // Load the plugins via NPM
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['uglify']);

};