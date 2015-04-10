/**
* 获取或设置 Color 对象的基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSL(HSI) 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Lightness|亮度} 。如要处理基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSV(HSB) 色彩空间} 的 {@link  http://en.wikipedia.org/wiki/Brightness|明度} 请使用 {@link Color#brightness|brightness} 方法。
* @see {@link Color#lightness}
* @see {@link Color#brightness}
* @see {@link Color#value}
* @access public
* @func Color.prototype.hslLightness
* @param {number}  [value] - 亮度。取值范围为 `0 - 100` 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将 Color 对象的亮度值设置为 `value` 。
* @param {boolean}  relative.true   - 增量赋值。将 Color 对象当前亮度值增加 `value` 。
* @returns {Color|number}
* @example
* var red = Color('red');
* console.log(red.css(2));                          // hsl(0, 100%, 50%)
* console.log(red.hslLightness());                  // 50
* console.log(red.hslLightness( 50).css(2));        // hsl(0, 100%, 50%)
* console.log(red.hslLightness(-30, true).css(2));  // hsl(0, 100%, 20%)
* @example
* var c = 'black,pink,gray,green,white'.split(',').map(Color);
* var l = c.length;
* for(; l--;) {
*     console.log(c[l].css(0) + ' - HSL: ' + c[l].hslLightness().toFixed() + ' HSV: ' + c[l].brightness().toFixed()); 
* }
* // #FFFFFF - HSL: 100  HSV: 100
* // #008000 - HSL:  25  HSV:  50
* // #808080 - HSL:  50  HSV:  50
* // #FFC0CB - HSL:  88  HSV: 100
* // #000000 - HSL:   0  HSV:   0
*/