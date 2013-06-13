// Just run `grunt` in the command line once you have run `npm install`
// You can also run `grunt watch` to watch specific files

module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      options: {
        sourceMap: 'js/source-map.js',
        banner: '// By: Jon de la Motte\n' + 
                '// On: ' + new Date() + '\n' +
                '// \n' +
                '// 3rd party libraries:\n' +
                '//   Moment.js - v2.0.0 - momentjs.com\n\n'
      },
      main: {
        files: {
          'js/package.min.js': ['js/moment.js', 'js/main.js' ]
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/main.js'],
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