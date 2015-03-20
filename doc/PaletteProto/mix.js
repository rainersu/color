/**
* 获取 Palette 对象当前可以混合调配出的最终颜色，返回为 {@link Color} 对象。
* @see {@link Color#mix}
* @see {@link Color#blend}
* @access public
* @func Palette.prototype.mix
* @returns {Color}
* @example
* var x = new Palette([ '#FFF', '#000', '#60DFE5' ]).mix();
* 
* console.log(x.color('hsl').map(Math.round));   // [ 183,  19,  55 ]
* console.log(x.color('rgb').map(Math.round));   // [ 117, 159, 161 ] 
*/