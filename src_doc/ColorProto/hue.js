/**
* 获取或设置 Color 对象的 {@link http://en.wikipedia.org/wiki/Hue|色度 (色相)} 。
* @see {@link Color#greyscale}
* @see {@link Color#value}
* @access public
* @func Color.prototype.hue
* @param {number}  [value] - 色度。取值范围为 0 - 360 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的色度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前色度增加 value
* @returns {Color|number}
* @example
* var red = Color('red');
* console.log(red.css(0));                 // #FF0000
* console.log(red.hue());                  //   0
* console.log(red.hue(380).hue());         //  20
* console.log(red.hue(-30, true).hue());   // 350
* console.log(red.hue(-90, true).hue());   // 260
* console.log(red.css(0));                 // #5500FF
*/