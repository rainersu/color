/**
* 将当前 Color 对象色值转换为 {@link http://en.wikipedia.org/wiki/Grayscale|灰度} 值，作为新 Color 对象返回。
* @see {@link Color.grayscale}
* @see {@link Color#luminance}
* @see {@link Color#saturation}
* @see {@link Color#sepia}
* @access public
* @func Color.prototype.greyscale
* @param {number} [algorithm=0]
* @param {number}  algorithm.0 - 默认算法。
* @param {number}  algorithm.1 - 基于 {@link Color#luminance|luminance} 方法的算法。
* @param {number}  algorithm.2 - 基于 {@link Color#luminance|luminance} 方法但不使用 {@link http://en.wikipedia.org/wiki/Gamma_correction|伽马校正} 的算法。
* @param {number}  algorithm.3 - 简单的调用 {@link Color#saturation|saturation} 方法去饱和度的算法。
* @returns {Color} 
* @example
* var c = Color('hsl(90, 90%, 50%)');
* console.log(c.greyscale(3).css(1));   // rgb(128,128,128)
* console.log(c.greyscale(2).css(1));   // rgb(201,201,201)
* console.log(c.greyscale(1).css(1));   // rgb(174,174,174)
* console.log(c.greyscale( ).css(1));   // rgb(183,183,183)
* @example
* var c = '#000,#FFF,#F00,#0F0,#00F'.split(',').map(Color);
* var l = c.length, r;
* while(l--) {
*     r = c[l].css(0) + ' -> ';
*     for(var i = 4; i--;) r+= ' ' + i + ' : ' + c[l].greyscale(i).css(0);
*     console.log(r);
* }
* // #0000FF ->   3 : #808080   2 : #121212   1 : #121212   0 : #1C1C1C
* // #00FF00 ->   3 : #808080   2 : #B6B6B6   1 : #B6B6B6   0 : #969696
* // #FF0000 ->   3 : #808080   2 : #363636   1 : #363636   0 : #4D4D4D
* // #FFFFFF ->   3 : #FFFFFF   2 : #FFFFFF   1 : #FFFFFF   0 : #FFFFFF
* // #000000 ->   3 : #000000   2 : #000000   1 : #000000   0 : #000000
*/