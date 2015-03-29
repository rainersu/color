
var sumiColor = require('../../sumi-color.js');
var Color = sumiColor.Color;
var Gradient = sumiColor.Gradient;
var Palette = sumiColor.Palette;
var out;

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

out = 'CSS :\r\n';
[ 
	tiffanyblue.css(0),
	tiffanyblue.ieFilter(),
	tiffanyblue.css(1, 0),
	tiffanyblue.css(1, 1),
	tiffanyblue.css(2, 0),
	tiffanyblue.css(2, 1)
].forEach(function (i) { out+= i + '\r\n'; });
console.log(out);

var white = new Color([ 0, 0, 0, 20]);
var black = new Color([ 0, 0, 0, 80]);
out = white.css() + '\r\n+ \r\n' + tiffanyblue.css() + '\r\n+ \r\n' + black.css() + '\r\n= \r\n';
console.log('\r\nGradient Demo:\r\n');
console.log(out + new Gradient(white, tiffanyblue, black).css() + '\r\n');
console.log('\r\nPalette  Demo:\r\n');
console.log(out + new Palette (white, tiffanyblue, black).css() + '\r\n');
