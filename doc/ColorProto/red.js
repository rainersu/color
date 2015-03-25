/**
* 基于 {@link Color.spaces.rgb|rgb 色彩空间} ，获取或设置 Color 对象的红色值。
* @see {@link Color#green}
* @see {@link Color#blue}
* @see {@link Color#value}
* @access public
* @func Color.prototype.red
* @param {number}  [value] - 红色。取值范围为 0 - 255 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的色度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前色度增加 value
* @returns {Color|number}
* @example
* var tiffanyblue = new Color('#60DFE5');
* console.log(tiffanyblue.css(0));                 // #60DFE5
* console.log(tiffanyblue.red());                  //  96
* console.log(tiffanyblue.red(380).red());         // 255
* console.log(tiffanyblue.red(-30, true).red());   // 225
* console.log(tiffanyblue.red(-90, true).red());   // 135
* console.log(tiffanyblue.css(0));                 // #87DFE5
*/