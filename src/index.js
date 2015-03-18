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
var u = tiffanyblue.luminance().toFixed(2);
var c = tiffanyblue.color('hsl');
var h = c[0];
var l = 360;
var r = [];
for(; l--;) {
	h++;
	var m = new Color([ h, c[1], c[2] ], 'hsl');//console.log(c);
	if (m.luminance().toFixed(2) === u) r.push(m.color('yiq'));
}
console.log(r);



});