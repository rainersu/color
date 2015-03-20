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


var pat = new Palette([ 'rgba(0, 0, 0, 0.2)', 'hsla(300, 66%, 88%, 0.7)' ], [ 1, 2 ], 100);

console.log(pat.alpha);             // 100
console.log(pat);


});