/**
* 将当前 Color 对象色值按指定比例与灰色混合，将混色结果作为新 Color 对象返回。注意： {@link Color#alpha|alpha} 通道不纳入计算，直接使用发起混合的主 Color 对象的当前值。
* @see {@link Color#tint}
* @see {@link Color#shade}
* @see {@link Color#mix}
* @see {@link Color.grayscale}
* @access public
* @func Color.prototype.tone
* @param {number} [amount=50] - 灰色在混色结果中所占的比重。取值范围为 0 -100 。
* @param {number} [algorithm=0] - 使用何种算法计算当前 Color 对象所对应的灰度色值。参见 {@link Color.grayscale|grayscale} 方法。
* @returns {Color} 
* @example
* var sienna = new Color('hsla(90, 90%, 50%, 0.3)');
* [ 0, 50, 100 ].map(function (i) {
*     console.log(sienna.tone (i).css(1));
* });
* // rgba(128, 242,  13, 0.3)
* // rgba(155, 212,  98, 0.3)
* // rgba(183, 183, 183, 0.3)
*/