const sass = require('node-sass');
//const sass=require('sass')

module.exports = function (grunt) {
    //configuration
    grunt.initConfig({
        //pass in option to plugins,references to files etc
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/script.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'build/style.css'
            }

        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            build: {
            
                files: [{
                    src: 'css/sass/styles.scss',
                    dest: 'css/styles.css'

                }]
            }
        },
        uglify: {
    
            build: {
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js'

                }]

            }

        }

    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');



    //register tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);

    /*   grunt.register('run', function () {
           console.log("I am running");
       });
   
       grunt.register('sleep ', function () {
           console.log("I am sleeping");
       });
   
       grunt.registerTask('Allep', ['run', 'sleep']
   
       );*/
};