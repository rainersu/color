/**
* 基于指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 获取或设置 Color 对象的色彩值。
* @see {@link Color#opacity}
* @see {@link Color#value}
* @access public
* @func Color.prototype.color
* @param {string} space - 指定 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 名称。
* @param {string|array} [data] - 任何符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的字符串，或符合由 space 参数指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 的命名分量顺序的色值数组。如果省略此参数，则将当前色彩值转换至由 space 参数指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 并返回。否则将根据本参数修改当前 Color 对象的色彩值，并返回当前 Color 对象。
* @returns {Color|array}
* @example
* var color = new Color('rgb(255, 0, 0, 0.5)');
* console.log(color.css(2));   // hsla(0,100%,50%,0.5)
* 
* color.color('hsl',  [ 0, 100, 50 ]).opacity(22);
* console.log(color.css(1));   // rgba(255,0,0,0.22)
* @example
* var color = new Color('rgba(200, 50, 0, 0.3)');
* var c = 'hsl,hsv,hwb,cmy,cmyk,lab,yuv,yiq,lch,ciexyz'.split(',');
* var l = c.length;
* for(; l--;) {
*     console.log(c[l] + ' : ' + 
*     color.color(c[l] ).map(Math.round) + ' -> rgb : ' + 
*     color.color('rgb').map(Math.round));
* }
* // ciexyz :  25,  15,   1      -> rgb : 200, 50, 0
* // lch    :  45,  81,  45      -> rgb : 200, 50, 0
* // yiq    :   0,   0,   0      -> rgb : 200, 50, 0
* // yuv    :  89,  77, 206      -> rgb : 200, 50, 0
* // lab    :  45,  57,  57      -> rgb : 200, 50, 0
* // cmyk   :   0,  75, 100,  22 -> rgb : 200, 50, 0
* // cmy    :  22,  80, 100      -> rgb : 200, 50, 0
* // hwb    :  15,   0,  22      -> rgb : 200, 50, 0
* // hsv    :  15, 100,  78      -> rgb : 200, 50, 0
* // hsl    :  15, 100,  39      -> rgb : 200, 50, 0
*/