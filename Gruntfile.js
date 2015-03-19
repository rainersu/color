module.exports = function(grunt) {"use strict";

var pkg = grunt.file.readJSON("package.json"),
	MOD_SRC_PATH = 'src',
	MOD_DST_PATH = 'dist',
	DOC_SRC_PATH = 'doc',
	MOD_NAME = pkg.name + '-' + pkg.version,
	DOC_DST_PATH = MOD_DST_PATH + '/' + DOC_SRC_PATH,
	MOD_SRC_FILE = MOD_DST_PATH + '/' + MOD_NAME + '.js',
	MOD_MIN_FILE = MOD_DST_PATH + '/' + MOD_NAME + '.min.js'; 
	

grunt.initConfig({
	pkg     : pkg,
	umd     : {
		mod: {
			options: {
				src : MOD_SRC_FILE,
			    dest: MOD_SRC_FILE
			}
		}
	},
	uglify  : {
		mod : {
			options : {
				beautify : true,
				preserveComments : false
			},
			files   : [{
				src : MOD_SRC_FILE,
			    dest: MOD_SRC_FILE
			}]
		},
		min : {
			options : {
				report : 'gzip'
			},
			files   : [{
				src : MOD_SRC_FILE,
			    dest: MOD_MIN_FILE
			}]
		}
	},
    clean   : {
        doc : {
            src: DOC_DST_PATH
		},
		mod : {
			src: MOD_DST_PATH + '/*.js'
		}
	},
	jsdoc   : {
		doc : {
			src     : [ DOC_SRC_PATH + '/**/*.js', 'README.md' ],
			options : {
				verbose     : true,
				destination : DOC_DST_PATH,
				template    : "node_modules/jaguarjs-jsdoc",
				configure   : "doc.json"
			}
		}
	},
	connect : {
		doc : {
			options : {
				hostname    : '*',
				port        : 8001,
				base        : DOC_DST_PATH,
				keepalive   : true,
				open        : true
                /*,middleware  : function (connect, options) {
                    return [
						require('connect-livereload')(),
						connect.static(path.resolve('' + options.base))
                    ];
                }*/
			}
		}
	},
	compile : {
	}
});

require("load-grunt-tasks")(grunt);

grunt.registerTask('compile', function() {
	var out = '';
	grunt.file.read(MOD_SRC_PATH + '/var/index.js').split(/[\[\]]/)[1].replace(/[^-a-z0-9_,]+/ig, '').split(',').map(function (n) {
		return MOD_SRC_PATH + '/var/' + n + '.js'; 
	}).concat(grunt.file.read(MOD_SRC_PATH + '/index.js').match(/requirejs\(\[([^\]]+)\]/)[1].match(/\w+/g).map(function (n) {
		return MOD_SRC_PATH + '/' + n + '.js'; 
	})).forEach(function (n) {
		out+= grunt.file.read(n).replace(/^[^;]+\{\'use strict\'\;/, '').replace(/return\s+\w+\s*;\s*\}\);\s*$/, '');
	});
	grunt.file.write(MOD_SRC_FILE, out + 'return module;');
});

grunt.registerTask('doc', [ 'clean:doc', 'jsdoc' ]);
grunt.registerTask('mod', [ 'clean:mod', 'compile', 'umd', 'uglify' ]);
grunt.registerTask('run', [ 'connect:doc' ]);
	
grunt.registerTask('default', [ 'doc', 'mod' ]);

};