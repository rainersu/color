define([
	'./math',
	'./min',
	'./max',
	'./pow',
	'./PI',
	'./atan2',
	'./sqrt',
	'./cos',
	'./sin',
	'./round'
],
function(
	M,
	min,
	max,
	pow,
	PI,
	atan2,
	sqrt,
	cos,
	sin,
	round
) {'use strict';

function mH (L, H) {
	var x = H * PI / 180,
		r = gB(L),
		l = r.length,
		c = [],
		y,
		w;
	for (; l--;) {
		y = r[l];
		w = y[1] / (sin(x) - y[0] * cos(x));
		if (w >= 0) c.unshift(w);
	}
	return min.apply(M, c);
}
function gB (L) {
	var r = [],
		a = pow(L + 16, 3) / 1560896,
		b = a > X6 ? a : L / X5,
		l = 3,
		w,
		x,
		y,
		z,
		c;
	for (; l--;) {
		c = X1[l];
		x = c[0];
		y = c[1];
		z = c[2];
		for (w = 2; w--;) {
			c = (632260 * z - 126452 * y) * b + 126452 * w;
			r.unshift([
				((284517 * x - 94839  * z) * b) / c, 
				((838422 * z + 769860 * y + 731718 * x) * L * b - 769860 * w * L) / c 
			]);
		}
	}
	return r;
}
function mL (L) {
	var a = [],
		r = gB(L),
		l = r.length,
		c,
		k,
		n;
	for (; l--;) {
		c = r[l]; 
		k = c[0]; 
		n = c[1];
		c = n / (-1 / k - k);
		a[l] = sqrt(pow(c, 2) + pow(n + c * k, 2));
	}
	return min.apply(M, a);
}
function dP (a, b) {
	var i = 0,
		r = 0,
		l = 0,
		f = a.length - 1;
	for (; 0 <= f ? l <= f : l >= f; i = 0 <= f ? ++l : --l) {
		r+= a[i] * b[i];
	}
	return r;
}
var X1 = 
	[
		[  3.240969941904521, -1.537383177570093, - .498610760293    ],
		[ - .96924363628087,   1.87596750150772,    .041555057407175 ],
		[   .055630079696993, - .20397695888897,   1.056971514242878 ]
	],
	X2 = 
	[
		[   .41239079926595,    .35758433938387,    .18048078840183  ],
		[   .21263900587151,    .71516867876775,    .072192315360733 ],
		[   .019330818715591,   .11919477979462,    .95053215224966  ]
	],
	X3 = [  .95047, 1, 1.08883 ],
	X5 = 903.2962962,
	X6 = .0088564516,
	X7 = .19783000664283,
	X8 = .46831999493879,
cv = {
rgb2ryb   : function (e) {
	var w = min.apply(M, e),
		r = e[0] - w,
		g = e[1] - w,
		b = e[2] - w,
		p = max(r, g, b),
		y = min(r, g);
	r-= y;
	g-= y;
	if (b && g) {
		b /= 2;
		g /= 2;
	}
	y+= g;
	b+= g;
	g = max(r, y, b);
	p = g ? p / g : 1;
	return [ r * p + w, y * p + w, b * p + w ];
},
ryb2rgb   : function (e) {
	var w = min.apply(M, e),
		r = e[0] - w, 
		y = e[1] - w, 
		b = e[2] - w,
		p = max(r, y, b),
		g = min(y, b);
	y -= g;
	b -= g;
	if (b && g) {
		b*= 2;
		g*= 2;
	}
	r+= y;
	g+= y;
	y = max(r, g, b);
	y = y ? p / y : 1;
	return [ r * y + w, g * y + w, b * y + w ];
},
rgb2hsl   : function (e) {
	var r = e[0] / 255,
		g = e[1] / 255,
		b = e[2] / 255,
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
hsl2rgb   : function (e) {
	var h = e[0] /  60,
		s = e[1] / 100,
		l = e[2] / 100,
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
rgb2hsv   : function (e) {
	var r = e[0],
		g = e[1],
		b = e[2],
		n = min(r, g, b),
		x = max(r, g, b);
	return [
		cv.rgb2hsl(e)[0],
		x ? 100 - 100 * n / x : 0,
		x * 100 / 255
	];
},
hsv2rgb   : function (e) {
	var h = e[0] /  60,
		s = e[1] / 100,
		v = e[2] / 100 * 255,
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
rgb2yuv   : function (e) {
	var r = e[0],
		g = e[1],
		b = e[2],
		y = 0.299 * r + 0.587 * g + 0.114 * b;
	return [
		y,
		((b - y) * 0.493 + 111) / 222 * 255,
		((r - y) * 0.877 + 155) / 312 * 255
	];
},
yuv2rgb   : function (e) {
	var y = e[0],
		u = e[1] / 255 * 222 - 111,
		v = e[2] / 255 * 312 - 155;
	return [
		y + v / 0.877,
		y - 0.39466 * u - 0.5806 * v,
		y + u / 0.493
	];
},
rgb2cmy   : function (e) {
	for(var l = 3, r = []; l--;) {
		r[l] = (1 - e[l] / 255) * 100;
	}
	return r;
},
cmy2rgb   : function (e) {
	for(var l = 3, r = []; l--;) {
		r[l] = (1 - e[l] / 100) * 255;
	}
	return r;
},
rgb2cmyk  : function (e) {
	var r = e[0],
		g = e[1],
		b = e[2],
		x = max(r, g, b) / 255,
		a = e.slice(),
		i = 3;
	for(a[i] = 100 - x * 100; i--;) {
		a[i] = x ? (1 - a[i] / 255 / x) * 100 : 0;
	}
	return a;
},
cmyk2rgb  : function (e) {
	var k = e[3] / 100,
		l = 1 - k,
		a = e.slice(0, 3),
		i = 3;
	for(; i--;) {
		a[i] = 255 * (1 - min(1, a[i] * l / 100 + k));
	}
	return a;
},
rgb2yiq   : function (e) {
	var r = e[0] / 255,
		g = e[1] / 255,
		b = e[2] / 255;
	return [
		0.299 * r + 0.587 * g + 0.114 * b,
		0.596 * r - 0.274 * g - 0.322 * b,
		0.211 * r - 0.523 * g + 0.312 * b
	];
},
yiq2rgb   : function (e) {
	var y = e[0],
		i = e[1],
		q = e[2];
	return [
		(y + 0.956 * i + 0.621 * q) * 255,
		(y - 0.272 * i - 0.647 * q) * 255,
		(y - 1.106 * i + 1.703 * q) * 255
	];
},
rgb2ycgco : function (e) {
	var r = e[0] / 255,
		g = e[1] / 255,
		b = e[2] / 255;
	return [
		r / 4 + g / 2 + b / 4,
		g / 2 - r / 4 - b / 4,
		r / 2 - b / 2
	];
},
ycgco2rgb : function (e) {
	var y = e[0] * 255,
		g = e[1] * 255,
		o = e[2] * 255,
		m = y - g;
	return [ m + o, y + g, m - o ];
},
rgb2ydbdr : function (e) {
	var r = e[0] / 255,
		g = e[1] / 255,
		b = e[2] / 255;
	return [
		0.299 * r + 0.587 * g + 0.114 * b,
		1.333 * b - 0.450 * r - 0.883 * g,
		0.217 * b + 1.116 * g - 1.333 * r
	];
},
ydbdr2rgb : function (e) {
	var x = e[0],
		y = e[1],
		z = e[2];
	return [
		255 * (x + 0.000092303716148 * y - 0.525912630661865 * z),
		255 * (x - 0.129132898890509 * y + 0.267899328207599 * z),
		255 * (x + 0.664679059978955 * y - 0.000079202543533 * z)
	];
},
rgb2ypbpr : function (e) {
	var r = e[0],
		g = e[1],
		b = e[2],
		y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
	return [ y, b - y, r - y ];
},
ypbpr2rgb : function (e) {
	var y = e[0],
		r = e[2] + y,
		b = e[1] + y;
	return [
		r,
		(y - 0.0722 * b - 0.2126 * r) / 0.7152,
		b
	];
},
rgb2ycbcr : function (e) {
	var r = e[0],
		g = e[1],
		b = e[2];
	return [
		0.299 * r + 0.587 * g + 0.114 * b,
		128 - 0.168736 * r - 0.331264 * g + 0.5 * b,
		128 + 0.5 * r - 0.418688 * g - 0.081312 * b
	];
},
ycbcr2rgb : function (e) {
	var y = e[0],
		b = e[1],
		r = e[2],
		m = r - 128,
		n = b - 128;
	return [
		y + 1.402   * m,
		y - 0.34414 * n - 0.71414 * m,
		y + 1.772   * n
	];
},
rgb2xyz   : function (e) {
	var l = 3,
		a = 0.055,
		f = [],
		c;
	for(; l--;) {
		c = e[l] / 255;
		f[l] = c > 0.04045 ? pow((c + a) / (1 + a), 2.4) : c / 12.92;
	}
	for(c = [], l = 3; l--;) {
		c[l] = dP(X2[l], f);
	}
	return c;
},
xyz2rgb   : function (e) {
	var c = [],
		l = 3,
		i;
	for(; l--;) {
		i = dP(X1[l], e);
		c[l] = (i <= 0.0031308 ? 12.92 * i : 1.055 * pow(i, 1 / 2.4) - 0.055) * 255;
	}
	return c;
},
rgb2hwb   : function (e) {
	var r = e[0],
		g = e[1],
		b = e[2],
		x = 100 / 255;
	return [
		cv.rgb2hsl(e)[0],
		x * min(r, min(g, b)),
		100 - x * max(r, max(g, b))
	];
},
hwb2rgb   : function (e) {
	var w = e[1] / 100,
		b = e[2] / 100,
		i = 3,
		r = cv.hsl2rgb([ e[0], 100, 50 ]);
	for(b = 1 - w - b, w*= 255; i--;) {
		r[i] = r[i] * b + w;
	}
	return r;
},
hsv2hwb   : function (e) {
	return [
		e[0],
		e[2] * (100 - e[1]) / 100,
		100 - e[2]
	];
},
hwb2hsv   : function (e) {
	return [
		e[0],
		100 - e[1] / (1 - e[2] / 100),
		100 - e[2]
	];
},
rgb2xyy   : function (v) {
	return cv.xyz2xyy(cv.rgb2xyz(v));
},
xyz2xyy   : function (e) {
	var x = e[0],
		y = e[1],
		n = x + y + e[2];
	return n ? [ x / n, y / n, y ] : [ 0, 0, y ];
},
xyy2rgb   : function (v) {
	return cv.xyz2rgb(cv.xyy2xyz(v));
},
xyy2xyz   : function (e) {
	var x = e[0],
		y = e[1],
		z = e[2];
	return y ? [ x * z / y, z, (1 - x - y) * z / y ] : [ 0, 0, 0 ];
},
rgb2lab   : function (v) {
	return cv.xyz2lab(cv.rgb2xyz(v));
},
xyz2lab   : function (e) {
	var v,
		l = 3;
	for(; l--;) {
		v = e[l] / X3[l];
		e[l] = v > X6 ? pow(v, 1 / 3) : 7.787 * v + 16 / 116;
	}
	l = e[0];
	v = e[1];
	e = e[2];
	return [
		116 * v - 16,
		500 * (l - v),
		200 * (v - e)
	];
},
lab2rgb   : function (v) {
	return cv.xyz2rgb(cv.lab2xyz(v));
},
lab2xyz   : function (e) {
	var l = e[0],
		a = e[1],
		b = e[2],
    	y = (l + 16) / 116,
	    x = a / 500 + y,
	    z = y - b / 200;
	a = [ x, y, z ];
	for(l = 3; l--;) {
		x = pow(b = a[l], 3);
		a[l] = (x > X6 ? x : (b - 16 / 116) / 7.787) * X3[l];
	}
	return a;
},
rgb2luv   : function (v) {
	return cv.xyz2luv(cv.rgb2xyz(v));
},
xyz2luv   : function (e) {
	var x = e[0],
		y = e[1],
		d = x + 15 * y + 3 * e[2],
		l = y <= X6 ? y * X5 : 116 * pow(y, 1 / 3) - 16;
	return !l ? [ 0, 0, 0 ] : [
		l,
		13 * l * (4 * x / d - X7),
		13 * l * (9 * y / d - X8)
	];
},
luv2rgb   : function (v) {
	return cv.xyz2rgb(cv.luv2xyz(v));
},
luv2xyz   : function (e) {
	if (!e[0]) return [ 0, 0, 0 ];
	var l = e[0],
		u = e[1],
		v = e[2],
		k = u / (13 * l) + X7,
		n = v / (13 * l) + X8,
		y = l <= 8 ? l / X5 : pow((l + 16) / 116, 3),
		x = 0 + 9 * y * k / 4 / n;
	return [
		x, 
		y, 
		(9 * y - (15 * n * y) - (n * x)) / (3 * n)
	];
},
rgb2lch   : function (v) {
	return cv.luv2lch(cv.rgb2luv(v));
},
luv2lch   : function (e) {
	var u = e[1], 
		v = e[2];
	return [
		e[0],
		pow(pow(u, 2) + pow(v, 2), 1 / 2),
		atan2(v, u) * 180 / PI
	];
},
lch2rgb   : function (v) {
	return cv.luv2rgb(cv.lch2luv(v));
},
lch2luv   : function (e) {
    var c = e[1],
		d = e[2] / 360 * 2 * PI;
	return [
		e[0], 
		cos(d) * c, 
		sin(d) * c
	];
},
rgb2husl  : function (v) {
	return cv.lch2husl(cv.rgb2lch(v));
},
lch2husl  : function (e) {
	var l = e[0],
		h = e[2];
	return [
		h, 
		0 < l && l < 100 ? e[1] / mH(l, h) * 100 : 0, 
		l
	];
},
husl2rgb  : function (v) {
	return cv.lch2rgb(cv.husl2lch(v));
},
husl2lch  : function (e) {
	var h = e[0],
		l = e[2];
	return [
		l, 
		0 < l && l < 100 ? mH(l, h) / 100 * e[1] : 0, 
		h
	];
},
rgb2huslp : function (v) {
	return cv.lch2huslp(cv.rgb2lch(v));
},
lch2huslp : function (e) {
	var l = e[0],
		h = e[2];
	return [
		h,
		0 < l && l < 100 ? e[1] / mL(l) * 100 : 0,
		l
	];
},
huslp2rgb : function (v) {
	return cv.lch2rgb(cv.huslp2lch(v));
},
huslp2lch : function (e) {
	var h = e[0],
		l = e[2];
	return [
		l,
		0 < l && l < 100 ? mL(l) / 100 * e[1] : 0,
		h
	];
}
};

return cv;

});