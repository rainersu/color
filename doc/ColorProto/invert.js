/**
* 计算出当前 Color 对象色值的 {@link http://en.wikipedia.org/wiki/Complementary_colors|反色}，作为新 Color 对象返回。
* @see {@link Color#complement}
* @access public
* @func Color.prototype.invert
* @returns {Color} 
* @example
* console.log(Color('#000').invert().css(0));   // #FFFFFF
* console.log(Color('#FFF').invert().css(0));   // #000000
* console.log(Color('#F00').invert().css(0));   // #00FFFF
* console.log(Color('#0F0').invert().css(0));   // #FF00FF
* console.log(Color('#00F').invert().css(0));   // #FFFF00
* @example
* var c = Color('#80F20D');
* console.log(c.invert().equal(c.complement()));   // true
* var c = Color('#000000');
* console.log(c.invert().equal(c.complement()));   // false
*/