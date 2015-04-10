/**
* 计算出当前 Color 对象色值与指定颜色的 {@link http://www.w3.org/TR/WCAG20/#contrast-ratiodef|对比度} 值。由低到高值范围为 `0 - 21` 。
* @see {@link Color#difference}
* @see {@link Color#luminance}
* @see {@link Color#luma}
* @see {@link http://www.w3.org/TR/WCAG20/#contrast-ratiodef}
* @access public
* @func Color.prototype.contrast
* @param {Color} [color]
* @returns {number} 
* @example
* var color = new Color('#F00');
* console.log(color.contrast('#000'));   //  5.252
* console.log(color.contrast('#FFF'));   //  3.9984767707539985
* 
* var color = new Color('#000');
* console.log(color.contrast('#000'));   //  1
* console.log(color.contrast('#FFF'));   // 21
*/