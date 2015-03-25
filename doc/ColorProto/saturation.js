/**
* 获取或设置 Color 对象的基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSL(HSI) 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Colorfulness|饱和度} 。如要处理基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSV(HSB) 色彩空间} 的饱和度请使用 {@link Color#hsvSaturation|hsvSaturation} 方法。
* @see {@link Color#hsvSaturation}
* @see {@link Color#value}
* @access public
* @func Color.prototype.saturation
* @param {number}  [value] - 饱和度。取值范围为 0 - 100 。如果省略此参数则获取并返回当前的饱和度值。否则将根据本参数修改当前 Color 对象基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSL 色彩空间} 的饱和度值，并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的饱和度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前饱和度增加 value
* @returns {Color|number}
* @example
* var red = Color('red');
* console.log(red.css(2));                        // hsl( 0, 100%, 50% )
* console.log(red.saturation());                  // 100
* console.log(red.saturation( 50).css(2));        // hsl( 0,  50%, 50% )
* console.log(red.saturation(-30, true).css(2));  // hsl( 0,  20%, 50% )
* @example
var c = 'black,pink,gray,green,white'.split(',').map(Color);
var l = c.length;
for(; l--;) {
	console.log(c[l].css(0) + ' - HSL: ' + c[l].saturation().toFixed() + ' HSV: ' + c[l].hsvSaturation().toFixed()); 
}
// #FFFFFF - HSL:   0  HSV:   0
// #008000 - HSL: 100  HSV: 100
// #808080 - HSL:   0  HSV:   0
// #FFC0CB - HSL: 100  HSV:  25
// #000000 - HSL:   0  HSV:   0
*/