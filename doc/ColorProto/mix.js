/**
* 将当前 Color 对象色值按指定比例与另一种色彩混合，将混色结果作为新 Color 对象返回。
* @see {@link Color#tone}
* @see {@link Color#tint}
* @see {@link Color#shade}
* @see {@link Color#blend}
* @see {@link Palette#mix}
* @access public
* @func Color.prototype.mix
* @param {Color|string} color - 要与之混色的另一种颜色。
* @param {number} [weight=50] - 当前颜色在混色结果中所占的比重。取值范围为 `0 -100` 。
* @param {boolean} [alpha=false] - 是否将 {@link Color#alpha|alpha} 通道的不透明度值也纳入混色计算。
* @returns {Color} 
* @example
* console.log(Color('#F00').mix('#00F').css(0));   // #800080
* @example
* var c1 = Color('rgb(100,0,0)');
* var c2 = Color('rgba(0,100,0,0.5)');
* console.log(c1.mix(c2).css(1));             // rgb(50,50,0)
* console.log(c1.mix(c2, 50).css(1));         // rgb(50,50,0)
* console.log(c1.mix(c2, 50, true).css(1));   // rgba(75,25,0,0.75)
*/