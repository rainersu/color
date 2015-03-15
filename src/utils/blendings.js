
define(function () {'use strict';

return {
	multiply   : function (b, f) {
        return f * b / 255;
    },
    screen     : function (b, f) {
        return 255 - (((255 - f ) * (255 - b)) >> 8);
    },
    overlay    : function (b, f) {
        return b < 128 ? 2 * f * b / 255 : 255 - 2 * (255 - b) * (255 - f) / 255;
    },
    dodge      : function (b, f) {
        return b === 255 ? b : Math.min(255, (f << 8) / (255 - b));
    },
    burn       : function (b, f) {
        return b ===   0 ? b : Math.max(0, (255 - ((255 - f) << 8) / b));
    },
    negate     : function (b, f) {
        return 255 - Math.abs(255 - b - f);
    },
	darken     : function (b, f) {
		return Math.min(b, f);
	},
	lighten    : function (b, f) {
		return Math.max(b, f);
	},
	addition   : function (b, f) {
		return b + f;
	},
	subtract   : function (b, f) {
		return b - f;
	},
	difference : function (b, f) {
		return Math.max(b - f, f - b);
	},
	combine    : function (b, f) {
		return b ^ f;
	},
	subtractive: function (b, f) {
		return b + f - 255;
	}
};

});
