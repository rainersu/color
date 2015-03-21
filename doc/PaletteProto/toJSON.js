/**
* 将一个 Palette 对象处理为 JSON 字符串。转化结果为该对象 {@link http://en.wikipedia.org/wiki/RGB_color_model|RGB 色彩空间} 色值的 CSS 语法描述格式。
* @see {@link Palette#toString}
* @see {@link Palette#css}
* @access public
* @func Palette.prototype.toJSON
* @returns {string}
* @example
* var tiffanyblue = Color('#60DFE5');
* var pat = new Palette([ '#FFF', '#000', tiffanyblue ], [ 1, 2, 3 ], 22);
*  
* console.log(pat.toJSON());          // rgba(91,154,157,0.22)
* console.log(JSON.stringify(pat));   // rgba(91,154,157,0.22)
*/