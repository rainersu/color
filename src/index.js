var requirejs = require('requirejs');
requirejs.config({
	nodeRequire : require
});
requirejs([
	'./color',
	'./gradient'
],
function(
	Color,
	Gradient
) {'use strict';

var tiffanyblue = Color('#60DFE5');
console.log(tiffanyblue.ieFilter());  // #FF60DFE5

});