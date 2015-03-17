define([
	'./min',
	'./max',
	'./am'
],
function(
	min,
	max,
	am
) {'use strict';

return function (n, k) {
	n = +n;
	var t = am(k);
	return t === 'array' ? min(k[1], max(k[0], n)) : k && t === 'number' && ((n %= k) < 0) ? n + k : n;
};

});