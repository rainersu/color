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

// var tiffanyblue = new Color('#60DFE5');

var x=Color.spaces;
var s='';
for (var i in x)  s+='`' + i + '` , ';
console.log(s);

});