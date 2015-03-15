/**
* 从一个 Color 对象转换出文本。转化结果为该 Color 对象 {@link http://en.wikipedia.org/wiki/RGB_color_model|RGB 色彩空间} 色值的 CSS 语法描述格式。
* @see {@link Color#toJSON}
* @see {@link Color#css}
* @access public
* @func Color.prototype.toString
* @returns {string}
* @example
console.log(Color('rgb(255, 0, 0)').toString());           // rgb(255,0,0)
console.log(Color('rgba(255, 0, 0, 0.3)').toString());     // rgba(255,0,0,0.3)

console.log(Color('hsl(0, 100%, 50%)').toString());        // rgb(255,0,0)
console.log(Color('hsla(0, 100%, 50%, 0.3)').toString());  // rgba(255,0,0,0.3)

console.log(Color([ 0, 0, 0 ], 'hwb').toString());         // rgb(255,0,0)
console.log(Color([ 0, 0, 0, 30 ], 'hwb').toString());     // rgba(255,0,0,0.3)
*/