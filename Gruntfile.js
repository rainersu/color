module.exports = function(grunt) {"use strict";

var src = 'src',
	dst = 'dist', 
	doc = 'doc',
	DOC_SRC_PATH = doc,
	DOC_DST_PATH = dst + '/' + doc;

grunt.initConfig({
	pkg     : grunt.file.readJSON("package.json"),
    clean   : {
        doc : {
            src: DOC_DST_PATH
		}
	},
	jsdoc   : {
		doc : {
			src     : [ DOC_SRC_PATH + '/**/*.js', 'README.md' ],
			options : {
				verbose     : true,
				destination : DOC_DST_PATH,
				template    : "node_modules/jaguarjs-jsdoc",
				configure   : "doc.json",
				'private'   : false
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
		src : src,
		dst : dst
	}

});

require("load-grunt-tasks")(grunt);

grunt.registerTask('compile', function() {
	var dir = grunt.config.get(this.name).src,
		col = grunt.file.read(dir + '/var/index.js').split(/[\[\]]/)[1].replace(/[^-a-z0-9_,]+/ig, '').split(','),
		out = '',
		re1 = /^[^;]+\{\'use strict\'\;/,
		re2 = /return\s+\w+\s*;\s*\}\);\s*$/;
	col.forEach(function (n) {
		out+= grunt.file.read(dir + '/var/' + n + '.js').replace(re1, '').replace(re2, '');
	});
	col = grunt.file.read(dir + '/index.js').match(/requirejs\(\[([^\]]+)\]/)[1].match(/\w+/g);
	col.forEach(function (n) {
		out+= grunt.file.read(dir + '/' + n + '.js').replace(re1, '').replace(re2, '');
	});
	grunt.file.write(grunt.config.get(this.name).dst + '/color.js', out);
});

grunt.registerTask('default', [ 'compile' ]);

grunt.registerTask('demo',    [ 'clean:doc', 'jsdoc', 'connect:doc' ]);

};