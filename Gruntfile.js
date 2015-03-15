
module.exports = function(grunt) {"use strict";

grunt.initConfig({
	pkg     : grunt.file.readJSON("package.json"),
	jsdoc   : {
		dist   : {
			src     : [ 'src_doc/**/*.js', 'README.md' ],
			options : {
				destination : 'doc',
				template    : "node_modules/jaguarjs-jsdoc",
				configure   : "doc.json"
			}
		}
	},
	connect : {
		server : {
			options : {
				port        : 0,
				hostname    : '*',
				base        : 'doc',
				keepalive   : true,
				open        : true
			}
		}
	}
});

require("load-grunt-tasks")(grunt);

grunt.registerTask('default', [ 'jsdoc' ]);
grunt.registerTask('dist',    [ 'jsdoc' , 'connect' ]);

};
