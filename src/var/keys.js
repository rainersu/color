define([
	'./hasOP'
],
function(
	hasOP
) {'use strict';

var keys = Object.keys || function (o) {
	var r = [],
		i;
	for (i in o) if (hasOP.call(o, i)) {
		r.push(i);
	}
	return r;
};

return keys;

});