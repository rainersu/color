define([
	'./mod',
],
function(
	mod
) {'use strict';

var udf = '' + void 0,
	win = typeof window !== udf ? window : typeof global !== udf ? global : this;
function reg (m, n) {
	if (win) {
		win[n] = win[n] || m;
	}
	return mod[n] = m;
}

return reg;

});