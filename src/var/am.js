define(function () {'use strict';

function am (v) {
	return {}.toString.call(v).split(/\W+/)[2].toLowerCase();
}

return am;

});