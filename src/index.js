var requirejs = require('requirejs');
requirejs.config({
	nodeRequire : require
});
requirejs([
	'./color',
	'./palette',
	'./gradient'
],
function(
	Color,
	Palette,
	Gradient
) {'use strict';

var tiffanyblue = Color('#60DFE5');

var pat = new Palette(tiffanyblue, tiffanyblue);
console.log(pat.color(tiffanyblue));
console.log(pat.color(tiffanyblue, 0));


});