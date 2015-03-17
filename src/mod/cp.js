define(function () {'use strict';

return function (d, o) {
	var m,
		h = {}.hasOwnProperty;
	for(m in o) if (h.call(o, m)) d[m] = o[m];
};

});