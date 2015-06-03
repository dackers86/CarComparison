module.exports = function (grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    watch: {
      sass: {
        files: ['client/sass/**/*.{scss,sass}','client/sass/_components/**/*.{scss,sass}'],
        tasks: ['compass']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/stylesheets/main.css': 'client/sass/main.scss'
        }
      }
    }
});

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');


  // Default task(s).
  grunt.registerTask('default', ['compass', 'watch']);
};
	
