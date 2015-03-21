define([
	'./hasOP'
],
function(
	hasOP
) {'use strict';

function cp (d, o) {
	for(var m in o) if (hasOP.call(o, m)) d[m] = o[m];
}

return cp;

});