define([
	'./var/mod',
	'./var/reg',
	'./var/round',
	'./var/min',
	'./var/max',
	'./var/slice',
	'./var/hasOP',
	'./var/am',
	'./var/cp',
	'./var/tj',
	'./color'
],
function(
	mod,
	reg,
	round,
	min,
	max,
	slice,
	hasOP,
	am,
	cp,
	tj,
	Color
) {'use strict';

function Palette (m, n, a) {
	if (!(this instanceof Palette)) return new Palette(m, n, a);
	this.cache = {};
	if (am(m) !== 'array') {
		m = slice.call(arguments);
		n = 0;
	}
	var l = m.length;
	for(; l--;) this.stuff(m[l], n && n[l] || 1);
	a = +a;
	this.alpha = a === a ? a : 100;
}
cp(Palette.prototype, {
toJSON   : tj,
toString : tj,
stuff : function (c, r, b) {
	c = new Color(c, 1);
	var n = c.css(0),
		o = this.cache[n],
		v = o ? o.ratio : 0;
	r = +r;
	r = r !== r ? 1 : ~~r;
	r = max(b ? r + v : r, 0);
	if (r !== v) {
		o = c;
		o.ratio = r;
		this.cache[n] = o;
		this.total = this.value = null;
	}
	return this;
},
ratio : function (c, b) {
	var r = 0;
	c = this.cache[ new Color(c).css(0) ];
	if (c && (r = c.ratio)) {
		if (b) {
			if (!this.total) this.mix();
			r = round(r * 100 / this.total);
		}
	}
	return r;
},
mix : function () {
	var o = this.cache,
		c = [],
		p = [],
		x = 0,
		n,
		m,
		i,
		r = this.value;
	if (!r) {
		r = [ 0, 0, 0 ];
		for(i in o) if (hasOP.call(o, i) && o[i]) {
			i = o[i];
			n = i.ratio;
			if (n) {
				x+= n;
				p.push(n);
				c.push(i.color());
			}
		}
		for(this.total = x, i = p.length; i--;) {
			n = p[i] / x;
			o = c[i];
			for(m = 3; m--;) {
				r[m]+= n * o[m];
			}
		}
		this.value = r;
	}
	return new Color(r.concat(this.alpha));
},
css : function (v, b) {
	return this.mix().css(v, b);
}
});
reg(Palette, 'Palette');

return Palette;
});