
module.exports = function(grunt) {

    grunt.initConfig({
        gitinfo: {},
        pkg: grunt.file.readJSON('package.json'),
        copy: {
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
          },
          build: {
            cwd: 'build/',
            src: [
                'css/**',
                'fonts/**'
            ],
            dest: 'dist/<%= gitinfo.local.branch.current.shortSHA %>/',
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
        },
        uglify: {
            build: {
                options: {
                    sourceMap: true
                },
                files: {
                    "dist/<%= gitinfo.local.branch.current.shortSHA %>/js/app.js": [
                        'build/js/angular.js',
                        'build/js/angular-route.js',
                        'build/js/app.js',
                        'build/js/app.templates.js'
                    ]
                }
            }
        },
        preprocess: {
            build: {
                options: {
                    context: {
                        DEVELOP: true
                    }
                },
                src: 'public/index.html',
                dest: 'build/index.html'
            },
            dist: {
                options: {
                    context: {
                        RELEASE: true,
                        SHA: "<%= gitinfo.local.branch.current.shortSHA %>"
                    }
                },
                src: 'public/index.html',
                dest: 'dist/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-gitinfo');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-preprocess');

    grunt.registerTask('default', [
        'gitinfo',
        'less:development',
        'copy:bootstrap',
        'copy:ng',
        'copy:ngRoute',
        'concat:ngApp',
        'ngtemplates:app',
        'preprocess:build']);

    grunt.registerTask('dist', [
        'default',
        'copy:build',
        'uglify:build',
        'preprocess:dist']);

};
