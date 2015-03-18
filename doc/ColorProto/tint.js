/**
* 将当前 Color 对象色值按指定比例与白色混合，将混色结果作为新 Color 对象返回。注意： {@link Color#alpha|alpha} 通道不纳入计算，直接使用发起混合的主 Color 对象的当前值。
* @see {@link Color#tone}
* @see {@link Color#shade}
* @see {@link Color#mix}
* @access public
* @func Color.prototype.tint
* @param {number} [amount=50] - 白色在混色结果中所占的比重。取值范围为 0 -100 。
* @returns {Color} 
* @example
* var sienna = new Color('#A0522D');
* [ 0, 50, 100 ].map(sienna.tint, sienna).map(function (i) {
*     console.log(i.css(0));
* });
* // #A0522D
* // #D0A996
* // #FFFFFF
*/