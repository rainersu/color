define([
	'./var/module',
	'./var/pow',
	'./var/abs',
	'./var/log',
	'./var/round',
	'./var/slice',
	'./var/hasOP',
	'./var/am',
	'./var/rn',
	'./var/cp',
	'./var/kv',
	'./var/ka',
	'./var/tj',
	'./var/spaces',
	'./var/keywords',
	'./var/conversions',
	'./var/blendings'
],
function(
	module,
	pow,
	abs,
	log,
	round,
	slice,
	hasOP,
	am,
	rn,
	cp,
	kv,
	ka,
	tj,
	cs,
	kw,
	cv,
	bl
) {'use strict';

var re =
	[
		/./,
		/^hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i,
		/^rgba?\(\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i,
		/^#([a-f0-9])([a-f0-9])([a-f0-9])(?:([a-f0-9])([a-f0-9])([a-f0-9]))?$/i
	],
	co = [ 'hsl', 'hsv', 'hwb', 'rgb', 'husl' ],
	gs = fb(function (r, g, b, a, m) {
		var x = m ? this.luminance(m - 1) * 255 : r * .3 + g * .59 + b * .11;
		return [ x, x, x, a ];
	});
function fb (f, n) {
	return function () {
		n = n || 'rgba';
		return new Color(f.apply(this, this.color(n).concat(slice.call(arguments))), n);
	}
}
function fv (i, n) {
	return function (v, b) {
		return this.value(co[ n || 0 ], i || 0, v, b);
	};
}
function Color (v, s) {
	return !(this instanceof Color) ? new Color(v, s) : v instanceof Color ? (s ? v.clone() : v) : (this.alpha = 100, this.color(s, v));
}
cp(Color, {
keywords      : kw,
spaces        : cs,
support       : function (n) {
	return hasOP.call(cs, rn(n));
},
isColor       : function (v) {
	if (am(v) === 'string') for (var l = re.length; l--;) {
		if (l ? re[l].test(v) : v in kw) return true;
	}
	return v && v instanceof Color;
},
temperature   : function (k) {
	k/= 100;
	return new Color([
		k <= 66 ? 255 : 329.698727446 * pow(k - 60, -0.1332047592),
		k <= 66 ? 99.4708025861 * log(k) - 161.1195681661 : 288.1221695283 * pow(k - 60, -0.0755148492),
		k >= 66 ? 255 : k <= 19 ? 0 : 138.5177312231 * log(k - 10) - 305.0447927307
	]);
},
grayscale     : function (v, b) {
	v = b ? v * 255 : v;
	return new Color([ v, v, v ]);
}
});
cp(Color.prototype, {
toJSON        : tj,
toString      : tj,
clone         : function ( ) {
	var n = this.space + 'a';
	return new Color(this.color(n), n);
},
equal         : function (c) {
	return this.css(1, 1) === new Color(c).css(1, 1);
},
value         : function (n, i, v, b) {
	v = +v;
	var k = cs[ rn(n) ],
		l = k.length,
		a = i >= l,
		c = this.color(n + 'a'),
		o = c[ i = a ? l : i ];
	if (v === v) {
		v = c[i] = kv( b ? o + v : v, a ? [ 0, 100 ] : k[i] );
		if (o !== v) this.color(n, c);
		o = this;
	}
	return  o;
},
opacity       : function (v, b) {
	v = +v;
	var a = this.alpha;
	if (v === v) {
		this.alpha = kv( b ? a + v : v, [ 0, 100 ] );
		a = this;
	}
	return a;
},
color         : function (s, v) {
	var k,
		x = re.length,
		w = x,
		t = this,
		o = this.space,
		c = this.cache || {},
		b = /a$/.test(s = am(s) === 'string' && s.toLowerCase() || 'rgb');
	if (am( k = cs[ s = b ? rn(s) : s ] ) === 'string') k = cs[ s = k ];
	if (v) {
		if (am(v) === 'string') {
			for(v = v.toLowerCase(); x--;) if (o = re[x].exec(v)) {
				if (x) {
					if (x > 1) {
						s = 'rgb';
						b = o[6];
						v = x > 2 ? [
							parseInt(b ? o[1] + o[2] : o[1] + o[1], 16),
							parseInt(b ? o[3] + o[4] : o[2] + o[2], 16),
							parseInt(b ? o[5] + b    : o[3] + o[3], 16)
						] : [
							b ? o[1] * 2.55 : o[1],
							b ? o[3] * 2.55 : o[3],
							b ? o[5] * 2.55 : o[5],
							o[7]
						];
					}
					else {
						s = 'hsl';
						v = o.slice(1, 5);
					}
					k = cs[s];
					if(isNaN(v[3]*= 100)) v.pop();
					break;
				}
				else {
					v = kw[v];
					if (v) x = w;
				}
			}
		}
		else v = re.slice.call(v);
		if (ka(v, k).length > k.length) this.opacity(v.pop());
		if (!(o = c[s]) || '' + o !== '' + v) (this.cache = {})[s] = v;
	}
	else {
		if (!c[s]) {
			x = c[o];
			w = cv[o + '2' + s];
			c[s] = ka(w ? w(x) : cv['rgb2' + s](ka(cv[o + '2rgb'](x), cs['rgb'])), k);
		}
		t = c[s].slice();
		if (b) t.push(this.opacity());
	}
	this.space = s;
	return t;
},
css           : function (v, b) {
	if (am(v) === 'string') return this.color(0, v);
	v = 1 + v ? ~~v : 1;
	b = 1 + b ? b : this.alpha < 100;
	var s = (v > 1 ? 'hsl' : 'rgb') + (b && v ? 'a' : ''),
		c = this.color(s),
		l = c.length,
		i;
	for (; l--;) {
		i = round(c[l]);
		c[l] = l > 2 ? i / 100 :
		       !v ? i.toString(16).replace(/^.$/, '0$&') :
		       v > 1 && l ? i + '%' : i;
	}
	return v ? s + '(' + c + ')' : '#' + c.join('').toUpperCase();
},
ieFilter      : function () {
	return this.css(0).replace('#', '#' + kv(round(this.alpha * 2.55), [ 0, 255 ]).toString(16).replace(/^.$/, '0$&').toUpperCase());
},
web           : function (b, s) {
	b = b ? 17 : 51;
	var c = this.color('rgba'),
		l = 3;
	for(; l--;) c[l] = ((c[l] + b / 2) / b >> 0) * b;
	c = new Color(c);
	return s ? c : c.css(0);
},
luminance     : function (b) {
	b = +b;
	if (b !== b) b = 1;
	var c = this.color('rgb'),
		l = c.length,
		x;
	for(; l--;) {
		 x= c[l] / 255;
		 c[l] = b ? x : (x <= 0.03928 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4));
	}
	return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
},
luma          : function ( ) {
	return (this.color('yiq')[0] * 255).toFixed();
},
contrast      : function (c) {
	c = Color(c).luminance() + 0.05;
	var b = this.luminance() + 0.05;
	return b > c ? b / c : c / b;
},
difference    : function (c) {
	c = Color(c).color('rgb');
	var a = this.color('rgb'),
		o = [ 299, 587, 114 ],
		l = 3,
		b = 0,
		r = 0,
		x,
		y;
	for(; l--;) {
		x = c[l] - a[l];
		b+= o[l] * x;
		r+= abs(x);
	}
	b = abs(b) / 1000;
	return [ b, r, (b > 125) + (r > 500) ];
},
hslHue        : fv(0),
saturation    : fv(1),
hslLightness  : fv(2),
hsvSaturation : fv(1, 1),
brightness    : fv(2, 1),
whiteness     : fv(1, 2),
blackness     : fv(2, 2),
red           : fv(0, 3),
green         : fv(1, 3),
blue          : fv(2, 3),
hue           : fv(0, 4),
lightness     : fv(2, 4),
invert        : fb(function (r, g, b, a) {
	return [ r ^ 0xFF, g ^ 0xFF, b ^ 0xFF, a ];
}),
sepia         : fb(function (r, g, b, a) {
	return [
		r * .393 + g * .769 + b * .189,
		r * .349 + g * .686 + b * .168,
		r * .272 + g * .534 + b * .131,
		a
	];
}),
greyscale     : function (m) {
	return m > 2 ? this.clone().saturation(0) : gs.call(this, m);
},
complement    : function ( ) {
	return this.clone().hue(180, true);
},
mix           : function (y, p, r) {
    y = new Color(y).color('rgba');
	var p = isNaN(p) ? .5 : p / 100,
    	w = p * 2 - 1,
		x = this.color('rgba'),
		a = r ? (x[3] - y[3]) / 100 : 0,
		m = ((w * a == -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0,
		n = 1 - m;
	return new Color([
		x[0] * m + y[0] * n,
        x[1] * m + y[1] * n,
        x[2] * m + y[2] * n,
		r ? x[3] * p + y[3] * (1 - p) : x[3]
	]);
},
blend         : function (y, f) {
	var x = this.color('rgba'),
		r = [,,, x[3] ],
		l = 4;
	y = new Color(y).color('rgba');
	if (f in bl) f = bl[f];
	for(l = 3; l--;) r[l] = f(x[l], y[l]);
	return new Color(r);
},
tint          : function (p) {
	return new Color([ 255, 255, 255, this.alpha ]).mix(this, p);
},
shade         : function (p) {
	return new Color([   0,   0,   0, this.alpha ]).mix(this, p);
},
tone          : function (p, m) {
	return this.greyscale(m).mix(this, p);
},
readable      : function (y, d) {
	return abs(this.luminance() - new Color(y).luminance()) * 100 > (1 + d ? d : 50);
},
match         : function (o) {
	var c = am(o) === 'array' ? o : o ? slice.call(arguments) : [ '#000', '#FFF' ],
		l = c.length,
		x = this.luminance(),
		y,
		z = 0,
		i,
	r = c[0];
	while(l--) {
		i = new Color(c[l]);
		y = abs(i.luminance() - x);
		if (y > z) {
			z = y;
			r = i;
		}
	}
	return  r;
},
opaque        : function (y, b) {
	y = this.mix(y, this.alpha);
	y.alpha = 100;
	return b ? y.css(0) : y;
},
scheme        : function (n, m) {
	var c = this.color('husl'),
		h = c[0],
		r = [];
	n = n || 6;
	m = m || 360 / n;
	for(; n--; h+= m) {
		c[0] = h; 
		r[n] = new Color(c,'husl');
	}
	return r;
}
});
module.Color = Color;

return Color;

});