/**
* 从一个 Palette 对象转换出文本。转化结果为该对象 {@link http://en.wikipedia.org/wiki/RGB_color_model|RGB 色彩空间} 色值的 CSS 语法描述格式。
* @see {@link Palette#toJSON}
* @see {@link Palette#css}
* @access public
* @func Palette.prototype.toString
* @returns {string}
* @example
* var tiffanyblue = Color('#60DFE5');
* var pat = new Palette([ '#FFF', '#000', tiffanyblue ], [ 1, 2, 3 ], 22);
* 
* console.log('' + pat);              // rgba(91,154,157,0.22)
* console.log(pat.toString());        // rgba(91,154,157,0.22)
*/