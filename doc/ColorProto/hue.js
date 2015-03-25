/**
* 获取或设置 Color 对象的基于 {@link Color.spaces.husl|HuSL 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Hue|色度 (色相)} 。如要处理基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSL(HSI) 色彩空间} 或 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSV(HSB) 色彩空间} 的色相请使用 {@link Color#hslHue|hslHue} 方法。
* @see {@link Color#hslHue}
* @see {@link Color#scheme}
* @access public
* @func Color.prototype.hue
* @param {number}  [value] - 色度。取值范围为 0 - 360 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的色度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前色度增加 value
* @returns {Color|number}
* @example
* var tiffanyblue = new Color('#60DFE5');
* console.log(tiffanyblue.css(0));                 // #60DFE5
* console.log(tiffanyblue.hue());                  // 197.47938378526183
* console.log(tiffanyblue.hue(380).hue());         //  20
* console.log(tiffanyblue.hue(-30, true).hue());   // 350
* console.log(tiffanyblue.hue(-90, true).hue());   // 260
* console.log(tiffanyblue.css(0));                 // #C3CBF6
*/