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

/*
var rad = new Color('#60DFE5');

rad = new Color([ 200, 100, 0 ]);

console.log(rad.color('luv'));

rad = new Color(rad.color('luv'), 'luv');

console.log(rad.color('rgb'));
*/

});