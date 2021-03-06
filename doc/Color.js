/**
* 色彩类。提供全能高效的色彩管理功能。包括但不限于在各种色彩格式间的自由转换，基于各种算法的色彩混合，色度、明度、亮度、灰度、饱和度、透明度的自由调节，滤镜和配色功能，等等。
* @class Color
* @see {@link http://www.w3.org/TR/css3-color/}
* @see {@link http://dev.w3.org/csswg/css-color/}
* @see {@link https://cdn.rawgit.com/dfcreative/color-space/master/test/index.html}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
* @param {string|array} data - 任何符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的字符串，或符合由 `space` 参数指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 的命名分量顺序的色值数组。
* @param {string} [space=rgb] - 当 `data` 参数格式为数组时，指定所对应的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 名称。当前已支持的所有色彩空间名称可通过 {@link Color.spaces} 查看。
* @example
* var color = Color('#FF0');
* var color = Color('hsl(80, 5%, 3%)');
* var color = new Color('rgb(255, 0, 0)');
* var color = Color([255, 0, 0, 50], 'rgba');
* var color = new Color([100, 0, 0, 0], 'cmyk');
* @example
* var c = [ 255, 0, 0 ];
* var a = 'xyz,yxy,yiq,yuv,lab,cmy,hwb,hsv,hsl,rgb'.split(',');
* var l = a.length, i, n, m, r;
* for(; l--;) {
*     n = a[l];
*     m = a[l - 1] || 'rgb';
*     r = n + '[ ' + c.map(Math.round) + '] -> ' + m + '[ ';
*     c = new Color(c, n).color(m);
*     console.log(r + c.map(Math.round) + ' ]'); 
* }
* // rgb[ 255,   0,   0 ] -> hsl[   0, 100,  50 ]
* // hsl[   0, 100,  50 ] -> hsv[   0, 100, 100 ]
* // hsv[   0, 100, 100 ] -> hwb[   0,   0,   0 ]
* // hwb[   0,   0,   0 ] -> cmy[   0, 100, 100 ]
* // cmy[   0, 100, 100 ] -> lab[  53,  80,  67 ]
* // lab[  53,  80,  67 ] -> yuv[  76,  84, 255 ]
* // yuv[  76,  84, 255 ] -> yiq[   0,   1,   0 ]
* // yiq[   0,   1,   0 ] -> yxy[   1,   0,  21 ]
* // yxy[   1,   0,  21 ] -> xyz[  41,  21,   2 ]
* // xyz[  41,  21,   2 ] -> rgb[ 255,   0,   0 ]
*/