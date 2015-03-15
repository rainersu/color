/**
* 计算出当前 Color 对象色值的 {@link http://en.wikipedia.org/wiki/Complementary_colors|补色}，作为新 Color 对象返回。
* @see {@link Color#invert}
* @see {@link http://en.wikipedia.org/wiki/Complementary_colors}
* @access public
* @func Color.prototype.complement
* @returns {Color} 
* @example
* console.log(Color('#000').complement().css(0));   // #000000
* console.log(Color('#FFF').complement().css(0));   // #FFFFFF
* console.log(Color('#F00').complement().css(0));   // #00FFFF
* console.log(Color('#0F0').complement().css(0));   // #FF00FF
* console.log(Color('#00F').complement().css(0));   // #FFFF00
* @example
* var c = Color('#80F20D');
* console.log(c.invert().equal(c.complement()));   // true
* var c = Color('#000000');
* console.log(c.invert().equal(c.complement()));   // false
*/