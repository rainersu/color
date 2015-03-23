define([
	'./min',
	'./max',
	'./pow',
	'./PI',
	'./atan2',
	'./sqrt',
	'./cos',
	'./sin'
],
function(
	min,
	max,
	pow,
	PI,
	atan2,
	sqrt,
	cos,
	sin
) {'use strict';

var cv = {
rgb2hsl   : function (v) {
	var r = v[0] / 255,
		g = v[1] / 255,
		b = v[2] / 255,
		n = min(r, g, b),
		x = max(r, g, b),
		d = x - n,
		h = n === x ? 0 :
			r === x ? (g - b) / d :
			g === x ? (b - r) / d + 2 :
			(r - g) / d + 4,
		l = (n + x) / 2,
		s = x === n ? 0 :
			d / (l <= 0.5 ? x + n : 2 - x - n);
	return [
		h *  60,
		s * 100,
		l * 100
	];
},
rgb2hsv   : function (v) {
	var r = v[0],
		g = v[1],
		b = v[2],
		n = min(r, g, b),
		x = max(r, g, b);
	return [
		cv.rgb2hsl(v)[0],
		x ? 100 - 100 * n / x : 0,
		x * 100 / 255
	];
},
rgb2hwb   : function (v) {
	var r = v[0],
		g = v[1],
		b = v[2],
		x = 100 / 255;
	return [
		cv.rgb2hsl(v)[0],
		x * min(r, min(g, b)),
		100 - x * max(r, max(g, b))
	];
},
rgb2cmy   : function (v) {
	for(var l = 3, r = []; l--;) {
		r[l] = (1 - v[l] / 255) * 100;
	}
	return r;
},
rgb2cmyk  : function (v) {
	var r = v[0],
		g = v[1],
		b = v[2],
		x = max(r, g, b) / 255,
		a = v.slice(),
		i = 3;
	for(a[i] = 100 - x * 100; i--;) {
		a[i] = x ? (1 - a[i] / 255 / x) * 100 : 0;
	}
	return a;
},
rgb2yuv   : function (v) {
	var r = v[0],
		g = v[1],
		b = v[2],
		y = 0.299 * r + 0.587 * g + 0.114 * b;
	return [
		y,
		((b - y) * 0.493 + 111) / 222 * 255,
		((r - y) * 0.877 + 155) / 312 * 255
	];
},
rgb2yiq   : function (v) {
	var r = v[0] / 255,
		g = v[1] / 255,
		b = v[2] / 255;
	return [
		0.299 * r + 0.587 * g + 0.114 * b,
		0.596 * r - 0.275 * g - 0.321 * b,
		0.212 * r - 0.528 * g + 0.311 * b
	];
},
rgb2xyz   : function (v) {
	var a = [],
		l = 3,
		i;
	for(; l--;) {
		i = v[l] / 255;
		a[l] = i > 0.04045 ? pow((i + 0.055) / 1.055, 2.4) : i / 12.92;
	}
	l = a[0];
	i = a[1];
	a = a[2];
	return [
		l * 41.24 + i * 35.76 + a * 18.05,
		l * 21.26 + i * 71.52 + a *  7.22,
		l *  1.93 + i * 11.92 + a * 95.05
	];
},
rgb2xyy   : function (v) {
	return cv.xyz2xyy(cv.rgb2xyz(v));
},
rgb2lab   : function (v) {
	return cv.xyz2lab(cv.rgb2xyz(v));
},
rgb2lch   : function (v) {
	return cv.lab2lch(cv.rgb2lab(v));
},
rgb2luv   : function (v) {
	return cv.xyz2luv(cv.rgb2xyz(v));
},
hsl2rgb   : function (v) {
	var h = v[0] /  60,
		s = v[1] / 100,
		l = v[2] / 100,
		b = l <= .5 ? l * s + l : l + s - l * s,
		a = l * 2 - b,
		r = [ h + 2, h, h - 2 ],
		i = 3;
	for(; i--;) {
		h = r[i] % 6;
		if (h < 0) h+= 6;
		r[i] = (
			h < 1 ? (b - a) * h + a :
			h < 3 ?  b :
			h < 4 ? (b - a) * (4 - h) + a : a
		) * 255;
	}
	return r;
},
hsv2rgb   : function (x) {
	var h = x[0] /  60,
		s = x[1] / 100,
		v = x[2] / 100 * 255,
		l = ~~h,
		y = v * s,
		f = h - l,
		p = v - y,
		q = v - y * f,
		t = v - y + y * f,
		z = l % 6;
	return z > 4 ? [v, p, q] :
	       z > 3 ? [t, p, v] :
	       z > 2 ? [p, q, v] :
	       z > 1 ? [p, v, t] :
	       z     ? [q, v, p] : [v, t, p];
},
hsv2hwb   : function (v) {
	return [
		v[0],
		v[2] * (100 - v[1]) / 100,
		100 - v[2]
	];
},
hwb2rgb   : function (v) {
	var w = v[1] / 100,
		b = v[2] / 100,
		i = 3,
		r = cv.hsl2rgb([ v[0], 100, 50 ]);
	for(b = 1 - w - b, w*= 255; i--;) {
		r[i] = r[i] * b + w;
	}
	return r;
},
hwb2hsv   : function (v) {
	return [
		v[0],
		100 - v[1] / (1 - v[2] / 100),
		100 - v[2]
	];
},
cmy2rgb   : function (v) {
	for(var l = 3, r = []; l--;) {
		r[l] = (1 - v[l] / 100) * 255;
	}
	return r;
},
cmyk2rgb  : function (v) {
	var k = v[3] / 100,
		l = 1 - k,
		a = v.slice(0, 3),
		i = 3;
	for(; i--;) {
		a[i] = 255 * (1 - min(1, a[i] * l / 100 + k));
	}
	return a;
},
yuv2rgb   : function (x) {
	var y = x[0],
		u = x[1] / 255 * 222 - 111,
		v = x[2] / 255 * 312 - 155;
	return [
		y + v / 0.877,
		y - 0.39466 * u - 0.5806 * v,
		y + u / 0.493
	];
},
yiq2rgb   : function (v) {
	var y = v[0],
		i = v[1],
		q = v[2];
	return [
		(y + 0.956 * i + 0.620 * q) * 255,
		(y - 0.272 * i - 0.647 * q) * 255,
		(y - 1.108 * i + 1.705 * q) * 255
	];
},
xyz2rgb   : function (v) {
	var x = v[0],
		y = v[1],
		z = v[2],
		r = [
			x * 3.2406 - y * 1.5372 - z * 0.4986,
			y * 1.8758 - x * 0.9689 + z * 0.0415,
			x * 0.0557 - y * 0.2040 + z * 1.0570
		];
	for(x = 3; x--;) {
		z = r[x] / 100;
		r[x] = 255 * (z > 0.0031308 ? 1.055 * pow(z, 1.0 / 2.4) - 0.055 : z * 12.92);
	}
	return r;
},
xyz2xyy   : function (a) {
	var x = a[0],
		y = a[1],
		m = x + y + a[2];
	return m ? [ x / m, y / m, y ] : [ 0, 0, y ];
},
xyz2lab   : function (a) {
	var v,
		c = [ 95.047, 100, 108.883 ],
		l = 3;
	for(; l--;) {
		v = a[l] / c[l];
		a[l] = v > 0.0088564516 ? pow(v, 1 / 3) : 7.787 * v + 16 / 116;
	}
	l = a[0];
	c = a[1];
	a = a[2];
	return [
		116 * c - 16,
		500 * (l - c),
		200 * (c - a)
	];
},
xyz2luv   : function (a) {
	var x = a[0] / 100,
		y = a[1] / 100,
		d = x + 15 * y + 3 * a[2] / 100,
		l = y <= 0.0088564516 ? y * 903.2962962 : 116 * pow(y, 1 / 3) - 16;
	return !l ? [ 0, 0, 0 ] : [
		l,
		13 * l * (4 * x / d - 0.19783000664283),
		13 * l * (9 * y / d - 0.46831999493879)
	];
},
lab2rgb   : function (v) {
	return cv.xyz2rgb(cv.lab2xyz(v));
},
lab2xyz   : function (v) {
	var l = v[0],
		a = v[1],
		b = v[2],
    	y = (l + 16) / 116,
	    x = a / 500 + y,
	    z = y - b / 200;
	a = [ x, y, z ];
	z = [ 95.047, 100, 108.883 ];
	for(l = 3; l--;) {
		x = pow(b = a[l], 3);
		a[l] = (x > 0.008856 ? x : (b - 16 / 116) / 7.787) * z[l];
	}
	return a;
},
lab2lch   : function (c) {
	var a = c[1],
		b = c[2],
		h = atan2(b, a) * 360 / 2 / PI % 360;
	return [
		c[0],
		sqrt(a * a + b * b),
		h < 0 ? h + 360 : h
	];
},
lch2rgb   : function (v) {
	return cv.lab2rgb(cv.lch2lab(v));
},
lch2lab   : function (v) {
	var x = (v[2] % 360) * 2 * PI / 360;
	return [
		v[0],
		v[1] * cos(x),
		v[1] * sin(x)
	];
},
lch2luv   : function (a) {
    var c = a[1],
		d = a[2] / 360 * 2 * PI;
	return [
		a[0], 
		cos(d) * c, 
		sin(d) * c
	];
},
xyy2rgb   : function (v) {
	return cv.xyz2rgb(cv.xyy2xyz(v));
},
xyy2xyz   : function (v) {
	var x = v[0],
		y = v[1],
		z = v[2];
	return y ? [ x * z / y, z, (1 - x - y) * z / y ] : [ 0, 0, 0 ];
},
luv2rgb   : function (v) {
	return cv.xyz2rgb(cv.luv2xyz(v));
},	
luv2lch   : function (a) {
	var u = a[1], 
		v = a[2];
	return [
		a[0],
		pow(pow(u, 2) + pow(v, 2), 1 / 2),
		atan2(v, u) * 180 / PI
	];
},
luv2xyz   : function (a) {
	if (!a[0]) return [ 0, 0, 0 ];
	var l = a[0],
		u = a[1],
		v = a[2],
		m = u / (13 * l) + 0.19783000664283,
		n = v / (13 * l) + 0.46831999493879,
		y = l <= 8 ? l / 903.2962962 : pow((l + 16) / 116, 3),
		x = 0 + 9 * y * m / 4 / n;
	return [
		100 * x, 
		100 * y, 
		100 * (9 * y - (15 * n * y) - (n * x)) / (3 * n)
	];
}
};

return cv;

});