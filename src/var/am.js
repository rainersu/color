define([
	'./object'
],
function(
	O
) {'use strict';

function am (v) {
	return O.prototype.toString.call(v).split(/\W+/)[2].toLowerCase();
}

return am;

});