
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
          public: {
            cwd: 'public/',
            src: '**',
            dest: 'build/',
            expand: true
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy:public']);

};
