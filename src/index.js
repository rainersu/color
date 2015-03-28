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

new Gradient(['#60DFE5', '#EEE'], [33, 66]).split(7).forEach(function (i) {
	console.log(i.css(0));
});

// #60DFE5   #A7E7EA   #EEEEEE

});