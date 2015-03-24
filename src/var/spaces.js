define(function () {'use strict';

var S0 = [    0,  255 ],
	S1 = [    0,  100 ],
	S5 =    360,
	S6 =   null,
	C1 = [ S0, S0, S0 ],
	C2 = [ S5, S1, S1 ],
	C3 = [ S6, S6, S6 ],
cs = {
rgb      : C1,
hsl      : C2,
hsv      : C2,
hwb      : C2,
xyz      : C3, /*[ [ 0, 96 ], [ 0, 100 ], [ 0, 109 ] ],*/
xyy      : C3, /*[ [ 0, 1 ], [ 0, 1 ], [ 0, 100 ] ],*/
luv      : C3, /*[ [ 0, 100 ], [ -128, 128 ], [ -128, 128 ] ],*/
lab      : C3, /*[ [ 0, 100 ], [ -128, 128 ], [ -128, 128 ] ],*/
lch      : [ S6, S6, S5 ], /*[ [ 0, 100 ], [ 0, 100 ], 360 ],*/
husl     : C2,
huslp    : C3,
ryb      : C1,
ycbcr    : C1,
ypbpr    : C3,
ycgco    : C3, /*[ [ 0, 1 ], [ -0.5, 0.5 ], [ -0.5, 0.5 ] ],*/
ydbdr    : C3, /*[ [ 0, 1 ], [ -1.333, 1.333 ], [ -1.333, 1.333 ] ],*/
yiq      : C3, /*[ [ 0, 1 ], [ -0.5957, 0.5957 ], [ -0.5226, 0.5226 ] ],*/
yuv      : C1,
cmy      : [ S1, S1, S1 ],
cmyk     : [ S1, S1, S1, S1 ],
hsi      : 'hsl',
hsb      : 'hsv',
yxy      : 'xyy',
ciexyz   : 'xyz',
cieluv   : 'luv',
cielab   : 'lab',
ycocg    : 'ycgco' /* todo: xvYCC */
};
cs.lchab = cs.cielch = cs.cielchuv = cs.cielchab = 'lch';

return cs;

});