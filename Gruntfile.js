
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
          public: {
            cwd: 'public/',
            src: '**',
            dest: 'build/',
            expand: true
          },
          bootstrap: {
            cwd: 'bower_components/bootstrap/fonts/',
            src: '**',
            dest: 'build/fonts/',
            expand: true
          }
        },
        less: {
            development: {
                options: {
                    paths: ["less/", "bower_components/bootstrap/less/"]
                },
                files: {
                    "build/css/theme.css": "less/theme.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['copy:public', 'less:development', 'copy:bootstrap']);

};
