define(function () {'use strict';

return function (v) {
	return {}.toString.call(v).split(/\W+/)[2].toLowerCase();
};

});