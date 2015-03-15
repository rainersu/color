/**
* 获取或设置 Color 对象的不透明度。
* @see {@link Color#color}
* @see {@link Color#value}
* @access public
* @func Color.prototype.opacity
* @param {number}  [value] - 不透明度。取值范围为 0 - 100 。如果省略此参数则获取并返回当前的不透明度值。否则将根据本参数修改当前 Color 对象的不透明度值，并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的不透明度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前不透明度增加 value
* @returns {Color|number}
* @example
* var red = Color('red');
* console.log(red.css());                     // rgb(255,0,0)
* console.log(red.opacity());                 // 100
* console.log(red.opacity( 50).css());        // rgba(255,0,0,0.5)
* console.log(red.opacity( 30, true).css());  // rgba(255,0,0,0.8)
* console.log(red.opacity(-20, true).css());  // rgba(255,0,0,0.6)
* console.log(red.opacity(200).css());        // rgb(255,0,0)
*/