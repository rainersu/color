/**
* 当前支持的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 集合。
* @see {@link Color.support}
* @see {@link Color#space}
* @access public
* @namespace Color.spaces
* @example
* var n = 'hsl',
*     c = Color([ 33, 88, 66, 0.2 ], n),
*     f = function (i) { return +i.toFixed(1); };
* n += ' : ' + c.color(n).map(f).join(' , ') + '  -  ';
* Object.keys(Color.spaces).forEach(function (i) {
*     console.log(n + i + ' : ' + c.color(i).map(f).join(' , '));
* });
* // hsl : 33 , 88 , 66  -  rgb    : 244.6 , 175.9 ,  92
* // hsl : 33 , 88 , 66  -  hsl    :  33   ,  88   ,  66
* // hsl : 33 , 88 , 66  -  hsi    :  33   ,  88   ,  66
* // hsl : 33 , 88 , 66  -  hsv    :  33   ,  62.4 ,  95.9
* // hsl : 33 , 88 , 66  -  hsb    :  33   ,  62.4 ,  95.9
* // hsl : 33 , 88 , 66  -  hwb    :  33   ,  36.1 ,   4.1
* // hsl : 33 , 88 , 66  -  cmy    :   4.1 ,  31   ,  63.9
* // hsl : 33 , 88 , 66  -  cmyk   :   0   ,  28.1 ,  62.4 ,   4.1
* // hsl : 33 , 88 , 66  -  xyz    :  55   ,  51.1 ,  17.1
* // hsl : 33 , 88 , 66  -  ciexyz :  55   ,  51.1 ,  17.1
* // hsl : 33 , 88 , 66  -  lab    :  76.8 ,  16.7 ,  52
* // hsl : 33 , 88 , 66  -  cielab :  76.8 ,  16.7 ,  52
* // hsl : 33 , 88 , 66  -  yuv    : 186.9 ,  73.8 , 168
* // hsl : 33 , 88 , 66  -  yiq    :   0.7 ,   0.3 ,   0
* // hsl : 33 , 88 , 66  -  lch    :  76.8 ,  55.2 ,  73
* // hsl : 33 , 88 , 66  -  lchab  :  76.8 ,  55.2 ,  73
* // hsl : 33 , 88 , 66  -  cielch :  76.8 ,  55.2 ,  73
* // hsl : 33 , 88 , 66  -  xyy    :   0.4 ,   0.4 ,  51.3
* // hsl : 33 , 88 , 66  -  yxy    :   0.4 ,   0.4 ,  51.3
* @example
* var n = 'CMYK';
* var s = Color.spaces.cmyk;
* var l = s.length, i;
* while(l--) {
*     console.log(n.charAt(l) + ' : ' + s[l].join(' - '));
* }
* // K : 0 - 100
* // Y : 0 - 100
* // M : 0 - 100
* // C : 0 - 100
*/