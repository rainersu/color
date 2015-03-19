
var Color = require('../../color.js').Color;

var tiffanyblue = new Color('#60DFE5');

var n = 'rgb',
    f = function (i) {
		return i.toFixed(1); 
	},
	x = '      ';

console.log('\r\nTIFFANY BLUE :\r\n');

n = n.toUpperCase() + ' : ' + tiffanyblue.color(n).map(f).join(' , ') + '   ->   ';

Object.keys(Color.spaces).forEach(function (i) {
	
    console.log(
		n + x.slice(i.length) + i.toUpperCase() + ' : ' + 
		tiffanyblue.color(i).map(function (i) {
			i = f(i);
    		return x.slice(i.length) + i;
    	}).join(' , ')
	);

});

console.log('CSS :');

console.log(tiffanyblue.css(0));
console.log(tiffanyblue.ieFilter());
console.log(tiffanyblue.css(1, 0));
console.log(tiffanyblue.css(1, 1));
console.log(tiffanyblue.css(2, 0));
console.log(tiffanyblue.css(2, 1));