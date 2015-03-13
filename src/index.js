
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire : require
});

requirejs([
	'./utils/spaces',
	'./utils/keywords',
	'./utils/conversions'
], 
function(
	cs,
	kw,
	cv
) {'use strict';

var re = 
	[
		/./,
		/^hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/,
		/^rgba?\(\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/,
		/^#([a-f0-9])([a-f0-9])([a-f0-9])(?:([a-f0-9])([a-f0-9])([a-f0-9]))?$/
	];

function am (v) {
	return {}.toString.call(v).split(/\W+/)[2].toLowerCase();
}
function kv (n, k) {
	n = +n;
	var t = am(k);
	return t === 'array' ? Math.min(k[1], Math.max(k[0], n)) : k && t === 'number' && ((n %= k) < 0) ? n + k : n;
}
function ka (v, k) {
	for (var l = k.length; l--;) v[l] = kv(v[l], k[l]);
}
function cp (d, o) {
	var m,
		h = {}.hasOwnProperty;
	for(m in o) if (h.call(o, m)) d[m] = o[m];
}

function Color (v, s) {
	return !(this instanceof Color) ? new Color(v, s) : v instanceof Color ? (s ? v.clone() : v) : this.color(s, v);
}

cp(Color, {
	keywords : kw
});

cp(Color.prototype, {
	clone   : function () {
		return new Color(this.color(this.space + 'a'));
	},
	equal   : function (c) {
		return '' + this.color('rgba') === '' + new Color(c).color('rgba');
	},
	color   : function (s, v) {
		var k,
			x = re.length,
			w = x,
			t = this,
			o = this.space,
			c = this.cache || {},
			b = /a$/.test(s = s && s.toLowerCase() || 'rgb');
		if (am(k = cs[s = b ? s.slice(0, -1) : s]) === 'string') k = cs[s = k];
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
								o[7] * 100
							];
						}
						else {
							s = 'hsl';
							v = o.slice(1, 5);
							v[3] *= 100;
						}
						break;
					}	
					else {
						v = kw[v];
						if (v) x = w;
					}
				}
			} else v = k.slice.call(v);
			this.opacity(v.length > k.length ? v.pop() : 100); 
			ka(v, k);
			if (!(o = c[s]) || '' + o !== '' + v) (this.cache = {})[s] = v;
		}
		else {
			if (!c[s]) {
				x = c[o];
				k = cv[o + '2' + s];
				c[s] = k ? k(x) : cv['rgb2' + s](cv[o + '2rgb'](x));
			}
			t = c[s].slice();
			if (b) t.push(this.opacity());
		}
		this.space = s;
		return t;
	},
	opacity : function (v) {
		return v === undefined ? this.alpha : this.alpha = kv(v, [ 0, 100 ]); 
	},
	css     : function (v, b) {
		if (am(v) === 'string') return this.color(0, v);
		v = +v || 0;
		b =  b && v;
		var s = (v > 1 ? 'hsl' : 'rgb') + (b ? 'a' : ''),
			c = this.color(s),
			l = c.length,
			i;
		for (; l--;) {
			i = Math.round(c[l]);
			c[l] = l > 2 ? i / 100 :
			       !v ? i.toString(16).replace(/^.$/, '0$&') :
			       v > 1 && l ? i + '%' : i;
		}
		return v ? s + '(' + c + ')' : '#' + c.join('').toUpperCase();
	}
});

var xxx = new Color([ 255, 255, 0 ]);
console.log(xxx.color('hsla'));
console.log(xxx.color('cmyk'));
xxx.color('rgb', [ 255, 255, 0, 50 ]);
console.log(xxx.css(0));
var zzz = xxx.clone();
console.log(zzz.css(1, true));
console.log(zzz.css(2));
console.log(zzz.css(2, true));
console.log(xxx == zzz);
console.log(xxx.equal(zzz));

});

/**
* 色彩类。
* @class Color
*/
