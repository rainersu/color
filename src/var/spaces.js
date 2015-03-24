define(function () {'use strict';

var S0 = [    0,  255 ],
	S1 = [    0,  100 ],
	S2 = [    0,    1 ],
	S3 = [ -128,  128 ],
	S5 =    360,
	S6 =   null,
cs = {
hsi      : 'hsl',
hsb      : 'hsv',
yxy      : 'xyy',
ciexyz   : 'xyz',
cieluv   : 'luv',
cielab   : 'lab',
lchab    : 'lch',
cielch   : 'lch',
cielchuv : 'lch',
cielchab : 'lch',
rgb      : [ S0, S0, S0 ],
yuv      : [ S0, S0, S0 ],
cmy      : [ S1, S1, S1 ],
xyz      : [ S6, S1, S6 ], // [ [ 0,  96 ], S1, [ 0, 109 ] ],
xyy      : [ S2, S2, S1 ],
cmyk     : [ S1, S1, S1, S1 ],
hsl      : [ S5, S1, S1 ],
hsv      : [ S5, S1, S1 ],
hwb      : [ S5, S1, S1 ],
lch      : [ S1, S1, S5 ],
lab      : [ S1, S3, S3 ],
luv      : [ S1, S3, S3 ],
yiq      : [ S2, S6, S6 ]  // [ S2, [ -0.5957, 0.5957 ], [ -0.5226, 0.5226 ] ],
};

return cs;

});