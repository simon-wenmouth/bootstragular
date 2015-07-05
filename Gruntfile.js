
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
          },
          ng: {
            cwd: 'bower_components/angular/',
            src: 'angular*',
            dest: 'build/js/',
            expand: true
          },
          ngRoute: {
            cwd: 'bower_components/angular-route/',
            src: 'angular-route*',
            dest: 'build/js/',
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
        },
        concat: {
            options: {
                separator: ';',
                sourceMap: true
            },
            ngApp: {
                src:[
                    'app/app.js',
                    'app/app.routes.js',
                    'app/controllers/home.js'
                ],
                dest:'build/js/app.js'
            }
        },
        ngtemplates: {
            app: {
                cwd: 'app',
                src: '**/*.html',
                dest: 'build/js/app.templates.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', [
        'copy:public',
        'less:development',
        'copy:bootstrap',
        'copy:ng',
        'copy:ngRoute',
        'concat:ngApp',
        'ngtemplates:app']);

};
