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

var pat = new Palette();
pat.add('#000', 3);
pat.add('#fff');
console.log(pat);

});