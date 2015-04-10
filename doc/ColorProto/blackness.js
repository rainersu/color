/**
* 获取或设置 Color 对象的基于 {@link http://en.wikipedia.org/wiki/HWB_color_model|HWB 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Blackness|黑度} 。
* @see {@link Color#whiteness}
* @see {@link Color#value}
* @access public
* @func Color.prototype.blackness
* @param {number}  [value] - 黑度。取值范围为 `0 - 100` 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的黑度设置为 `value` 。
* @param {boolean}  relative.true   - 增量赋值。将对象当前黑度增加 `value` 。
* @returns {Color|number}
* @example
* var c1 = Color('#F5FFFA'), w = c1.whiteness(), r1 = [];
* var c2 = c1.complement( ), b = c2.blackness(), r2 = [];
* 
* console.log(w);   // 96.07843137254902
* console.log(b);   // 96.07843137254902
* 
* while(w <= 100) {
*     r1.push(c1.whiteness(w++).css(0));
*     r2.push(c2.blackness(b++).css(0));
* }
* console.log(r1);   // [ '#F5FFFA', '#F8FFFB', '#FAFFFD', '#FDFFFE' ]
* console.log(r2);   // [ '#0A0005', '#070004', '#050002', '#020001' ]
*/