/**
* 获取或设置 Color 对象的基于 {@link Color.spaces.husl|HuSL 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Lightness|亮度} 。处理基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSL(HSI) 色彩空间} 的亮度请用 {@link Color#hslLightness|hslLightness} 方法。处理基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSV(HSB) 色彩空间} 的 {@link  http://en.wikipedia.org/wiki/Brightness|明度} 请用 {@link Color#brightness|brightness} 方法。
* @see {@link Color#brightness}
* @see {@link Color#hslLightness}
* @see {@link Color#value}
* @access public
* @func Color.prototype.lightness
* @param {number}  [value] - 亮度。取值范围为 `0 - 100` 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将 Color 对象的亮度值设置为 `value` 。
* @param {boolean}  relative.true   - 增量赋值。将 Color 对象当前亮度值增加 `value` 。
* @returns {Color|number}
* @example
* var tiffanyblue = new Color('#60DFE5');
* console.log(tiffanyblue.css(2));                       // hsl(183,72%,64%)
* console.log(tiffanyblue.lightness());                  // 82.33401350572878
* console.log(tiffanyblue.lightness( 50).css(2));        // hsl(183,43%,37%)
* console.log(tiffanyblue.lightness(-30, true).css(2));  // hsl(183,52%,14%)
* @example
* var c = 'black,pink,gray,green,white'.split(',').map(Color);
* var l = c.length;
* for(; l--;) {
*     console.log(c[l].css(0) + ' -  ' + c[l].lightness().toFixed() + ' HSL: ' + c[l].hslLightness().toFixed() + ' HSV: ' + c[l].brightness().toFixed()); 
* }
* // #FFFFFF -  100  HSL: 100  HSV: 100
* // #008000 -   46  HSL:  25  HSV:  50
* // #808080 -   54  HSL:  50  HSV:  50
* // #FFC0CB -   84  HSL:  88  HSV: 100
* // #000000 -    0  HSL:   0  HSV:   0
*/