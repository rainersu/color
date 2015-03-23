define([
	'./hasOP',
	'./object'
],
function(
	hasOP,
	O
) {'use strict';

var keys = O.keys || function (o) {
	var r = [],
		i;
	for (i in o) if (hasOP.call(o, i)) {
		r.push(i);
	}
	return r;
};

return keys;

});