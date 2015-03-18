/**
* 将一个 Color 对象处理为 JSON 字符串。转化结果为该 Color 对象 {@link http://en.wikipedia.org/wiki/RGB_color_model|RGB 色彩空间} 色值的 CSS 语法描述格式。
* @see {@link Color#toString}
* @see {@link Color#css}
* @access public
* @func Color.prototype.toJSON
* @returns {string}
* @example
* console.log(Color('rgb(255, 0, 0)').toJSON());           // rgb(255,0,0)
* console.log(Color('rgba(255, 0, 0, 0.3)').toJSON());     // rgba(255,0,0,0.3)
* 
* console.log(Color('hsl(0, 100%, 50%)').toJSON());        // rgb(255,0,0)
* console.log(Color('hsla(0, 100%, 50%, 0.3)').toJSON());  // rgba(255,0,0,0.3)
* 
* console.log(Color([ 0, 0, 0 ], 'hwb').toJSON());         // rgb(255,0,0)
* console.log(Color([ 0, 0, 0, 30 ], 'hwb').toJSON());     // rgba(255,0,0,0.3)
*/