
var Color = require('../../sumi-color.js').Color;

var tiffanyblue = new Color('#60DFE5');

var n = 'rgb',
    f = function (i) {
		return i.toFixed(2); 
	},
	x = '         ';

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

[ 
	tiffanyblue.css(0),
	tiffanyblue.ieFilter(),
	tiffanyblue.css(1, 0),
	tiffanyblue.css(1, 1),
	tiffanyblue.css(2, 0),
	tiffanyblue.css(2, 1)
].forEach(function (i) { console.log(i); });
