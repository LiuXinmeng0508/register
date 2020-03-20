module.exports = function(grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './baidu.html',
          dest: 'dist/baidu.min.html'
        }
      },
      cssmin: {
        'baidu.min.css': 'baidu.css'
      },
      uglify: {
        release:{
          files: {
            'js/baidu.min.js': 'js/baidu.js'
          }
        }       
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['htmlmin']); 
    grunt.registerTask('css',['cssmin']);
    grunt.registerTask('js',['uglify:release'])
  };
  