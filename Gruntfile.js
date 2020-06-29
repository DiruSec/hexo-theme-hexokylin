module.exports = function(grunt){
  grunt.initConfig({
    gitclone: {
      fontawesome: {
        options: {
          repository: 'https://github.com/FortAwesome/Font-Awesome.git',
          directory: 'tmp/fontawesome'
        },
      },
      fancybox: {
        options: {
          repository: 'https://github.com/fancyapps/fancyBox.git',
          directory: 'tmp/fancybox'
        }
      },
      highlightjs: {
        options: {
          repository: 'https://github.com/highlightjs/cdn-release.git',
          directory: 'tmp/highlightjs'
        },
      },
      pacejs: {
        options: {
          repository: 'https://github.com/HubSpot/pace.git',
          directory: 'tmp/pacejs'
        },
      }
    },
    copy: {
      fontawesome: {
        expand: true,
        cwd: 'tmp/fontawesome/fonts/',
        src: ['**'],
        dest: 'source/css/fonts/'
      },
      fontawesomecss: {
        expand: true,
        cwd: 'tmp/fontawesome/css/',
        src: ['fontawesome.min.css'],
        dest: 'source/css/fonts/'
      },
      fancybox: {
        expand: true,
        cwd: 'tmp/fancybox/source/',
        src: ['**'],
        dest: 'source/fancybox/'
      },
      highlightjs: {
        expand: true,
        cwd: 'tmp/highlightjs/build/',
        src: ['highlight.min.js', 'styles/monokai.min.css'],
        dest: 'source/highlightjs/'
      },
      pacejs: {
        expand: true,
        cwd: 'tmp/pacejs/',
        src: ['pace.min.js', 'themes/blue/pace-theme-flash.css'],
        dest: 'source/pacejs/'
      }
    },
    _clean: {
      tmp: ['tmp'],
      fontawesome: ['source/css/fonts'],
      fancybox: ['source/fancybox']
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.renameTask('clean', '_clean');

  grunt.registerTask('pacejs', ['gitclone:pacejs', 'copy:pacejs', '_clean:tmp']);
  grunt.registerTask('highlightjs', ['gitclone:highlightjs', 'copy:highlightjs', '_clean:tmp']);
  grunt.registerTask('fontawesome', ['gitclone:fontawesome', 'copy:fontawesome', 'copy:fontawesomecss', '_clean:tmp']);
  grunt.registerTask('fancybox', ['gitclone:fancybox', 'copy:fancybox', '_clean:tmp']);
  grunt.registerTask('default', ['gitclone', 'copy', '_clean:tmp']);
  grunt.registerTask('clean', ['_clean']);
};