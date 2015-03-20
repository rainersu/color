define([
	'./var/module',
	'./var/slice',
	'./var/am',
	'./var/cp',
	'./color'
],
function(
	module,
	slice,
	am,
	cp,
	Color
) {'use strict';

function Palette (m, n) {
	this.cache = {};
	if (am(m) !== 'array') {
		m = slice.call(arguments);
		n = 0;
	}
	var l = m.length;
	for(; l--;) this.color(m[l], n && n[l] || 1);
}

cp(Palette.prototype, {
color  : function (c, p, b) {
	c =  new Color(c, 1);
	p = +p;
	var n = c.css(0),
		o = this.cache[n];
	if (!o) this.cache[n] = o = c;
	n = p + 1;
	p = ~~p;
	c = ~~o.ratio;
	b = b ? c + p : p;
	o.ratio = p = n ? b : c; 
	return n ? this : p; 
},
blend  : function (b) {
	var o = this.cache,
		c = [],
		p = [],
		x = 0,
		n,
		m,
		i,
		r = [ 0, 0, 0 ];
	for(i in o) if (o.hasOwnProperty(i)) {
		i = o[i];
		n = i.ratio;
		if (n) {
			x+= n;
			p.push(n);
			c.push(i.color());
		}
	}
	for(i = p.length; i--;) {
		n = p[i] / x;
		o = c[i];
		for(m = 3; m--;) {
			r[m]+= n * o[m];
		}
	}
	r = new Color(r);
	return b ? r : r.css(0);
}
});

module.Palette = Palette;

return Palette;

});