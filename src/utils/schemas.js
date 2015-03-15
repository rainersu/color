
define(function () {'use strict';

return {
	triad           : function (c) {
		var n = 'rgb',
			v = c.color(n),
			r = v[0],
			g = v[1],
			b = v[2];
		return [
			[ b, r, g ],
			[ g, b, r ],
			n
		];
	},
	tetrad          : function (c) {
		var n = 'rgb',
			v = c.color(n),
			r = v[0],
			g = v[1],
			b = v[2];
		return [
			[ b, r, b ],
			[ b, g, r ],
			[ r, b, r ],
			n
		];
	},
	splitcomplement : function (c) {
		var n = 'hsl',
			v = c.color(n),
			h = v[0],
			s = v[1],
			l = v[2];
		return [
			[ h +  72, s, l ],
			[ h + 216, s, l ],
			n
		];
	},
	analogous       : function (c, r, x) {
		r = r || 8;
		x = 360 / (x || 30);
		var n = 'hsl',
			v = c.color(n),
			h = ((v[0] - (x * r >> 1)) + 720) % 360,
			s = v[1],
			l = v[2];
		for(c = [n]; --r;) {
			c.unshift([ h+= x, s, l ]);
		}
		return c;
	},
	monochromatic   : function (c, r) {
		r = r || 6;
		var n = 'hsv',
			v = c.color(n),
			h = v[0],
			s = v[1],
			x = v[2];
		c = [n];
		while (--r) {			
			x+=  20;
			x%= 100;
			c.unshift([ h, s, x ]);
		}
		return c;	
	}
};

});
