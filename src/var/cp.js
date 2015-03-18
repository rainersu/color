define(function () {'use strict';

function cp (d, o) {
	var m,
		h = {}.hasOwnProperty;
	for(m in o) if (h.call(o, m)) d[m] = o[m];
}

return cp;

});