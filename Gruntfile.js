module.exports = function(grunt) {
  grunt.initConfig({
    jasmine: {
      test: {
        src: 'lib/*.js',
        options: {
          vendor: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
          ],
          specs: 'spec/*-spec.js',
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jasmine');
};
