
define(function () {'use strict';

var M   = Math,
	min = M.min,
	max = M.max,
	cos = M.cos,
	pow = M.pow,
	P   = M.PI;

return {
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
	rgb2hsv   : function (v) {
		var r = v[0],
			g = v[1],
			b = v[2],
			n = min(r, g, b),
			x = max(r, g, b);
		return [
			this.rgb2hsl(v)[0], 
			x ? 100 - 100 * n / x : 0, 
			x * 100 / 255
		];
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
	rgb2hwb   : function (v) {
		var r = v[0],
			g = v[1],
			b = v[2],
			x = 100 / 255;
		return [
			this.rgb2hsl(v)[0], 
			x * min(r, min(g, b)),
			100 - x * max(r, max(g, b))
		];
	},
	hwb2rgb   : function (v) {
		var w = v[1] / 100,
			b = v[2] / 100,
			i = 3,
			r = this.hsl2rgb([ v[0], 100, 50 ]);
		for(b = 1 - w - b, w*= 255; i--;) {
			r[i] = r[i] * b + w;
		}
		return r;
	},
	rgb2cmy   : function (v) {
		for(var l = 3, r = []; l--;) {
			r[l] = (1 - v[l] / 255) * 100;
		}
		return r;
	},
	cmy2rgb   : function (v) {
		for(var l = 3, r = []; l--;) {
			r[l] = (1 - v[l] / 100) * 255;
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
	rgb2lab   : function (v) {
		var a = this.rgb2xyz(v),
			c = [ 95.047, 100, 108.883 ],
			l = 3;
		for(; l--;) {
			v = a[l] / c[l];
			a[l] = v > 0.008856 ? pow(v, 1 / 3) : 7.787 * v + 16 / 116;
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
	lab2rgb   : function (v) {
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
		return this.xyz2rgb(a);
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
	rgb2lch   : function (v) {
		var c = this.rgb2lab(v),
			a = c[1],
			b = c[2],
			h = M.atan2(b, a) * 360 / 2 / P % 360;
		return [
			c[0],
			M.sqrt(a * a + b * b), 
			h < 0 ? h + 360 : h
		];
	},
	lch2rgb   : function (v) {
		var x = (v[2] % 360) * 2 * P / 360;
		return this.lab2rgb([
			v[0], 
			v[1] * cos(x), 
			v[1] * M.sin(x)
		]);
	},
	rgb2xyy   : function (v) {
		var a = this.rgb2xyz(v),
			x = a[0], 
			y = a[1],
			m = x + y + a[2];
		return m ? [ x / m, y / m, y ] : [ 0, 0, y ];
	},
	xyy2rgb   : function (v) {
		var x = v[0], 
			y = v[1], 
			z = v[2];
		return this.xyz2rgb(y ? [ x * z / y, z, (1 - x - y) * z / y ] : [ 0, 0, 0 ]);
	}
};

});
