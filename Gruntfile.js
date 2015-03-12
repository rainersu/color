
module.exports = function(grunt) {"use strict";

grunt.initConfig({
	pkg   : grunt.file.readJSON("package.json"),
	jsdoc : {
		dist : {
			src     : [ 'src/**/*.js', 'README.md' ],
			options : {
				destination : 'doc',
				template    : "node_modules/jaguarjs-jsdoc",
				configure   : "doc.json"
			}
		}
	}
});

require("load-grunt-tasks")(grunt);

grunt.registerTask('default', [ 'jsdoc:dist' ]);

};
