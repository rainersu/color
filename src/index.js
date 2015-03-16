
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire : require
});

requirejs([
	'./color'
], 
function(
	Color
) {'use strict';

var tiffanyblue = Color('#60DFE5');

});
