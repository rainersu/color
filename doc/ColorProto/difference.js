/**
* 计算出当前 Color 对象色值与指定颜色的对比度。结果作为数组返回，所包含数值依次为亮度反差 (大于 125 为佳)、色值反差 (大于 500 为佳)、可分辨度 (由低到高值范围为 0 - 2)。
* @see {@link Color#contrast}
* @see {@link Color#luma}
* @see {@link Color#luminance}
* @see {@link http://www.w3.org/WAI/ER/WD-AERT/#color-contrast}
* @access public
* @func Color.prototype.difference
* @param {Color} [color]
* @returns {array} 
* @example
* var c = [ 'white', 'darkgray', 'darkred', 'orange', 'black' ].map(Color);
* var l = c.length, a, b, d;
* for(; l--;) {
*     a = c[l];
*     b = c[ l ? l - 1 : c.length - 1 ];
*     d = a.difference(b).map(Math.round);
*     console.log(a.css(0) + ' - ' + b.css(0) + ' = ' + d);
* }
* // #000000 - #FFA500 = 173, 420, 1
* // #FFA500 - #8B0000 = 132, 281, 1
* // #8B0000 - #A9A9A9 = 127, 368, 1
* // #A9A9A9 - #FFFFFF =  86, 258, 0
* // #FFFFFF - #000000 = 255, 765, 2
*/