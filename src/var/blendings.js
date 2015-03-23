define([
	'./min',
	'./max',
	'./abs',
	'./sqrt'
],
function(
	min,
	max,
	abs,
	sqrt
) {'use strict';

var bl = {
	multiply   : function (b, f) {
        return f * b / 255;
    },
    screen     : function (b, f) {
		return b + f - b * f / 255;
    },
    overlay    : function (b, f) {
        return b < 128 ? 2 * f * b / 255 : 255 - 2 * (255 - b) * (255 - f) / 255;
    },
    negate     : function (b, f) {
        return 255 - abs(255 - b - f);
    },
	difference : function (b, f) {
		return abs(b - f);
	},
    average    : function (b, f) {
        return (b + f) / 2;
    },
    exclusion  : function (b, f) {
        return b + f - 2 * b * f / 255;
    },
    hardlight  : function (b, f) {
        return bl.overlay(f, b);
    },
    softlight  : function (b, f) {
		b/= 255;
		f/= 255;
        var d = 1,
			e = b;
        if (f > 0.5) {
            e = 1;
            d = b > 0.25 ? sqrt(b) : ((16 * b - 12) * b + 4) * b;
        }
        return 255 * (b - (1 - 2 * f) * e * (d - b));
    },
	darken     : function (b, f) {
		return min(b, f);
	},
	lighten    : function (b, f) {
		return max(b, f);
	},
	addition   : function (b, f) {
		return b + f;
	},
	subtract   : function (b, f) {
		return b - f;
	},
	subtractive: function (b, f) {
		return b + f - 255;
	},
	combine    : function (b, f) {
		return b ^ f;
	},
    dodge      : function (b, f) {
        return b === 255 ? b : min(255, (f << 8) / (255 - b));
    },
    burn       : function (b, f) {
        return b ===   0 ? b : max(0, (255 - ((255 - f) << 8) / b));
    }
};

return bl;

});