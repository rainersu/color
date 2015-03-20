define([
	'./var/module',
	'./var/am',
	'./var/cp',
	'./color'
],
function(
	module,
	am,
	cp,
	Color
) {'use strict';

function Palette (m, n) {
	this.colors = {};
}

cp(Palette.prototype, {
add    : function (c, p) {
	c = new Color(c);
	p = Math.abs(~~p);
	var n = c.css(0),
		o = this.colors[n];
	if (!o) this.colors[n] = o = c;
	n = o.ratio;
	o.ratio = p + 1 ? p : n + 1 ? n : 1;
	return this;
}/*,
ratio  : function (n, p, b) {
	if (am(n) === 'string') n = n.split(':');
}*/
});

module.Palette = Palette;

return Palette;

});

/*
goog.color.blend = function(rgb1, rgb2, factor) {
  factor = goog.math.clamp(factor, 0, 1);
  return [
    Math.round(factor * rgb1[0] + (1.0 - factor) * rgb2[0]),
    Math.round(factor * rgb1[1] + (1.0 - factor) * rgb2[1]),
    Math.round(factor * rgb1[2] + (1.0 - factor) * rgb2[2])
  ];
}
*/