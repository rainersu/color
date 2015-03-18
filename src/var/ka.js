define([
	'./kv'
],
function(
	kv
) {'use strict';

function ka (v, k) {
	for (var l = k.length; l--;) v[l] = kv(v[l], k[l]);
	return v;
}

return ka;

});