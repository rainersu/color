define([
	'./kv'
],
function(
	kv
) {'use strict';

return function (v, k) {
	for (var l = k.length; l--;) v[l] = kv(v[l], k[l]);
	return v;
};

});