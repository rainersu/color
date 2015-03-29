define([
	'./var/mod',
	'./var/reg',
	'./var/round',
	'./var/min',
	'./var/max',
	'./var/slice',
	'./var/hasOP',
	'./var/keys',
	'./var/am',
	'./var/cp',
	'./var/kv',
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
	keys,
	am,
	cp,
	kv,
	tj,
	Color
) {'use strict';

function ap (a, p, c) {
	a[p] = new Color(c).color('rgba');
}
function cn (a, b) {
	return a - b;
}
function Gradient (c, p) {
	if (!(this instanceof Gradient)) return new Gradient(c, p);
	if (am(c) !== 'array') {
		c = slice.call(arguments);
		p = [];
	}
	else {
		p = slice.call(p || []);
	}
	var l = c.length,
		b = 0,
		e = 100,
		x = e / (l - 1),
		a = {};
	for(; l--;) {
		ap(a, p[l] = hasOP.call(p, l) ? p[l] : x * l, c[l]);
	}
	this.stops = p.sort(cn);
	this.cache = a;
}
cp(Gradient.prototype,  {
toJSON   : tj,
toString : tj,
point    : function (p, c) {
	p = +p;
	var a = this.cache;
	if (c) ap(a, p, c); else delete a[p];
	this.stops = keys(a).sort(cn);
	return this;
},
scale    : function (p, b) {
	p = +p;
	var a = this.cache,
		k = this.stops,
		l = k.length,
		m = +k[0],
		n = +k[l - 1],
		c = a[p = kv(b ? p * (n - m) / 100 + m : p, [ m, n ])],
		x,
		y;
	if(!c) {
		for(; l--; y = +k[l]) {
			x = +k[l];
			if (!l || x < p) break;
		}
		c = [];
		k = y - x;
		m = p - x;
		n = y - p;
		x = a[x];
		y = a[y];
		for(l = 4; l--;) {
			c[l] = (x[l] * n + y[l] * m) / k;
		}
	}
	return new Color(c);
},
ieFilter : function (b) {
	var a = this.cache,
		k = this.stops;
	return 'progid:DXImageTransform.Microsoft.gradient(enabled="true", startColorstr="' +
	       new Color(a[k[0]]).ieFilter() + '", endColorstr="' + new Color(a[k[k.length - 1]]).ieFilter() + 
	       '", gradientType="' + (+!!b) + '")';
},
css      : function (b, t, p) {
	var s = ')',
		a = this.cache,
		k = this.stops,
		l = k.length,
		z = l - 1,
		x = k[0],
		y = k[z],
		m = y - x,
		i;
	for(; l--;) {
		i = k[l];
		s = ', ' + new Color(a[i]).css(+!p) + (l && l < z ? ' ' + round((i - x) / m * 100) + '%' : '') + s;
	}
	return (b ? 'radial' : 'linear') + '-gradient(' + (t || '0deg') + s;
},
map      : function (x, y) {
	var d = max(x = +x, y = +y),
		b = min(x, y) || 0,
		a = this.cache,
		k = this.stops,
		l = k.length,
		t = [],
		r = {},
		i;
	x = k[0];
	y = k[l - 1] - x;
	d =(d !== d ? 100 : d) - b;
	for(; l--;) {
		i = k[l];
		r[t[l] = (i - x) * d / y + b] = a[i];
	}
	this.stops = t;
	this.cache = r;
	return this;
},
split    : function (n) {
	n = n || this.stops.length;
	var r = [],
		x = 100,
		y = x / (n - 1);
	for(; n--; x-= y) {
		r[n] = this.scale(n && x, true);
	}
	return r;
}
});
reg(Gradient, 'Gradient');

return Gradient;
});