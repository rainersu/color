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

console.log(Color('rgba(96,223,229,0.5)').ieFilter());  // #7F60DFE5


});