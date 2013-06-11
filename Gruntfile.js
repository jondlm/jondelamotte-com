module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      options: {
        sourceMap: 'js/source-map.js'
      },
      main: {
        files: {
          'js/main.min.js': ['js/main.js']
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