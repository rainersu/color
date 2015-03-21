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


var rad = new Gradient([ 'black', '#60DFE5', 'white' ], [ 3, 6, 9 ]);

console.log(rad.scale( 6).css());   // rgb(96,223,229)

rad.map(10, 50);
console.log(rad.scale(30).css());   // rgb(96,223,229)

rad.map(100);
console.log(rad.scale(50).css());   // rgb(96,223,229)

});