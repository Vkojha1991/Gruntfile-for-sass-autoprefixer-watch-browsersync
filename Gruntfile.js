module.exports = function(grunt) {

    /* Project configuration. */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
          /* Task : sass to css */ 
          sass: {                               
            dist: {                         
              options: {
                  style: 'compressed',
                  sourcemap: true,
                  precision:8
              },
              files: {                         
                'assets/css/app.css': 'sass/app.scss'
              }
            }
          },  

          /* Task : browser readable css */ 
          autoprefixer: {
              options: {
                  browsers: ['last 6 versions', 'ie 8', 'ie 9']
              },
              dist: {
                  files: {
                      'assets/css/app.css': 'assets/css/app.css'
                  }
              },
          },

          /* Task : Watch all the task */ 
          watch: {
              all: {
                  files: ['sass/*.scss', 'sass/**/*.scss', 'assets/css/*.css', 'assets/js/*.js', '../anajit/src/assets/css/app23.css'],
                  tasks: ['sass','autoprefixer'],
              }
          },


          /* Task : Reload Browser */

           browserSync: {
              dev: {
                   bsFiles: {
                      src : [
                          './assets/css/*.css',
                          './index.html',
                          './assets/js/*.js'
                      ]
                  },
                  options: {
                      watchTask: true,
                      server: '../html'
                  }
              }
          }
    });

    
    /* Load the plugins */
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    /* Default task(s). */
    grunt.registerTask('default', ['browserSync','watch']);

};