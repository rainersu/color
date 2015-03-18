/**
* 判断当前 Color 对象与指定颜色是否是对比度合适的前背景配色。
* @see {@link Color#mate}
* @see {@link Color#luminance}
* @see {@link Color#contrast}
* @see {@link Color#difference}
* @see {@link http://www.w3.org/TR/WCAG20/#relativeluminancedef}
* @access public
* @func Color.prototype.match
* @param {Color} color - 要比较的颜色。
* @param {number} [threshold=50] - 阈值。取值范围为 0 - 100 。
* @returns {boolean} 
* @example
* var bckgroundColor = Color('#FFF');
* var textColors = [ '#CCC', '#F00', '#0F0', '#00F', '#333' ];
* var l = textColors.length, i;
* while(l--) {
*     i = textColors[l];
*     console.log('#FFF vs ' + i + ' is ' + bckgroundColor.match(i));
* }
* // #FFF vs #333 is true
* // #FFF vs #00F is true
* // #FFF vs #0F0 is false
* // #FFF vs #F00 is true
* // #FFF vs #CCC is false
*/