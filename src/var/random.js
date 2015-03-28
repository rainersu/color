define([
	'./kv',
	'./am',
	'./math'
],
function(
	kv,
	am,
	M
) {'use strict';

function iln (v) {
	v = +v;
	v = v.toString().split('e');
	v[0] = v[0].replace(/\d$/, function (i) { return + i + 1; });
	return +(v[1] ? v.join('e') : v[0]);
}

function random (v) {
	var b = am(v) === 'array',
		y = b ? iln(v[1]) : v,
		x = b ? v[0] : 0;
	return kv(M.random() * (y - x) + x, v);
}

return random;

});