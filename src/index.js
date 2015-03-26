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

var tiffanyblue = new Color('#60DFE5');
console.log(tiffanyblue.temperature());   // 39999.70245361328

tiffanyblue.temperature(1000);
console.log(tiffanyblue.css(0));          // #FF3A00
console.log(tiffanyblue.temperature());   // 1000.2975463867188

tiffanyblue.temperature(1000, true);
console.log(tiffanyblue.css(0));          // #FF8B14
console.log(tiffanyblue.temperature());   // 2000.0534057617188







});