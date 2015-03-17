define(function () {'use strict';

var cs = {
	rgb    : [ [ 0, 255 ], [ 0, 255 ], [ 0, 255 ] ],
	hsl    : [ 360, [ 0, 100 ], [ 0, 100 ] ],
	hsi    : 'hsl',
	hsv    : [ 360, [ 0, 100 ], [ 0, 100 ] ],
	hsb    : 'hsv',
	hwb    : [ 360, [ 0, 100 ], [ 0, 100 ] ],
	cmy    : [ [ 0, 100 ], [ 0, 100 ], [ 0, 100 ] ],
	cmyk   : [ [ 0, 100 ], [ 0, 100 ], [ 0, 100 ], [ 0, 100 ] ],
	xyz    : [ [ 0,  96 ], [ 0, 100 ], [ 0, 109 ] ],
	ciexyz : 'xyz',
	lab    : [ [ 0, 100 ], [ -128, 128 ], [ -128, 128 ] ],
	cielab : 'lab',
	yuv    : [ [ 0, 255 ], [ 0, 255 ], [ 0, 255 ] ],
	yiq    : [ [ 0,   1 ], [ -0.5957, 0.5957 ], [ -0.5226, 0.5226 ] ],
	lch    : [ [ 0, 100 ], [ 0, 100 ], 360 ],
	lchab  : 'lch',
	cielch : 'lch',
	xyy    : [ [ 0,   1 ], [ 0,   1 ], [ 0, 100 ] ],
	yxy    : 'xyy'
};

return cs;

});