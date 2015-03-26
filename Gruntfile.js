module.exports = function(grunt) {"use strict";

var pkg = grunt.file.readJSON("package.json"),
	COPYRIGHT = '/*!\r\n' + pkg.name + ' v' + pkg.version + '\r\n' + pkg.homepage + '\r\n' + pkg.description + 
	            '\r\n(c) 2015 ' + pkg.author.name + '( ' + pkg.author.email + ' | ' + pkg.author.url + ' | QQ: ' + pkg.author.qq + 
	            ' )\r\n*/\r\n',
	MOD_SRC_PATH = 'src',
	MOD_DST_PATH = 'dist',
	DOC_SRC_PATH = 'doc',
	MOD_NAME = pkg.name.toLowerCase(),
	DOC_DST_PATH = MOD_DST_PATH + '/' + DOC_SRC_PATH,
	MOD_DST_FILE = MOD_DST_PATH + '/' + MOD_NAME + '.js',
	MOD_MIN_FILE = MOD_DST_PATH + '/' + MOD_NAME + '-' + pkg.version + '.min.js'; 

grunt.initConfig({
	pkg     : pkg,
	bytesize: {
		mod : {
			src : [ MOD_DST_FILE, MOD_MIN_FILE ]
		}
	},
	umd     : {
		mod : {
			options: {
				verbose      : true,
				globalAlias  : 'sumiColor',
				src          : MOD_DST_FILE,
			    dest         : MOD_DST_FILE
			}
		}
	},
	uglify  : {
		options : {
			preserveComments : false,
			banner           : COPYRIGHT
		},
		mod : {
			options : {
				beautify     : true,
				compress     : false,
				mangle       : false
			}, 
			files   : [{ src : MOD_DST_FILE, dest: MOD_DST_FILE }]
		},
		min : {
			options : {
				sourceMap    : true,
				sourceMapName: MOD_MIN_FILE + '.map',
				verbose      : true,
				compress     : true,
				report       : 'min'
			},
			files   : [{ src : MOD_DST_FILE, dest: MOD_MIN_FILE }]
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
				verbose      : true,
				hostname     : '*',
				port         : 8001,
				base         : DOC_DST_PATH,
				keepalive    : true,
				open         : true
                /*,middleware   : function (connect, options) {
                    return [
						require('connect-livereload')(),
						connect.static(path.resolve('' + options.base))
                    ];
                }*/
			}
		}
	}
});

require("load-grunt-tasks")(grunt);

grunt.registerTask('compile',  function () {
	var out = '';
	grunt.file.read(MOD_SRC_PATH + '/var/index.js').split(/[\[\]]/)[1].replace(/[^-a-z0-9_,]+/ig, '').split(',').map(function (n) {
		return MOD_SRC_PATH + '/var/' + n + '.js'; 
	}).concat(grunt.file.read(MOD_SRC_PATH + '/index.js').match(/requirejs\(\[([^\]]+)\]/)[1].match(/\w+/g).map(function (n) {
		return MOD_SRC_PATH + '/' + n + '.js'; 
	})).forEach(function (n) {
		out+= grunt.file.read(n).replace(/^[^;]+\{\'use strict\'\;/, '').replace(/return\s+\w+\s*;\s*\}\);\s*$/, '');
	});
	grunt.file.write(MOD_DST_FILE, out + 'return module;');
	grunt.log.ok('1 file created.');
});

grunt.registerTask('showtime', function () {
	grunt.log.ok('demo for node.js(CommonJS)...');
	require('./' + MOD_DST_PATH + '/demo/node/index.js');
});

grunt.registerTask('distdoc', [ 'clean:doc', 'jsdoc' ]);
grunt.registerTask('distmod', [ 'clean:mod', 'compile', 'umd', 'uglify', 'bytesize' ]);
grunt.registerTask('help', [ 'distdoc', 'connect:doc' ]);
grunt.registerTask('test', [ 'distmod', 'showtime'    ]);
	
grunt.registerTask('default', [ 'distdoc', 'distmod'  ]);

};