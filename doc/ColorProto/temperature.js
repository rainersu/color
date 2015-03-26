/**
* 获取或设置 Color 对象的 {@link http://en.wikipedia.org/wiki/Color_temperature|色温} 。
* @see {@link Color.temperature}
* @access public
* @func Color.prototype.temperature
* @param {number}  [kelvin] - 色温。取值范围为 1000 - 40000 开氏温标单位(K)。如果省略此参数则获取并返回当前的色温。否则将根据本参数修改当前 Color 对象的色温，并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的色温设置为 value 。
* @param {boolean}  relative.true   - 增量赋值。将对象当前色温增加 value 。
* @returns {Color|number}
* @example
* var tiffanyblue = new Color('#60DFE5');
* console.log(tiffanyblue.temperature());   // 39999.70245361328
* 
* tiffanyblue.temperature(1000);
* console.log(tiffanyblue.css(0));          // #FF3A00
* console.log(tiffanyblue.temperature());   // 1000.2975463867188
* 
* tiffanyblue.temperature(1000, true);
* console.log(tiffanyblue.css(0));          // #FF8B14
* console.log(tiffanyblue.temperature());   // 2000.0534057617188
*/