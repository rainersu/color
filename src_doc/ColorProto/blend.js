/**
* 基于 {@link http://en.wikipedia.org/wiki/RGB_color_model|RGB 色彩空间} ，将当前 Color 对象色值按指定算法与另一种色彩混合，将混合结果作为新 Color 对象返回。注意： {@link Color#alpha|alpha} 通道不纳入计算，直接使用发起混合的主 Color 对象的当前值。
* @see {@link Color#blendings}
* @see {@link Color#mix}
* @see {@link http://en.wikipedia.org/wiki/Blend_modes}
* @access public
* @func Color.prototype.blend
* @param {Color|string} color - 要与之混合的另一种颜色。
* @param {string|Color~blendCallback} mode - 提供混合算法的 {@link Color~blendCallback|自定义回调函数}，或字符串指定的预定义混合方法名称，详见 {@link Color#blendings|blendings} 。
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

/**
* 基于 {@link http://en.wikipedia.org/wiki/RGB_color_model|RGB 色彩空间} ，使用两个 Color 对象被依次遍历的每一通道值进行计算，返回的计算结果将作为最终混成颜色的相应通道值。获取和返回的通道值范围都为 0 - 255 。注意： {@link Color#alpha|alpha} 通道不纳入计算，直接使用发起混合的主 Color 对象的当前值。
* @callback Color~blendCallback
* @see {@link Color#blend}
* @see {@link Color#blendings}
* @param {number} v1 - 主混合 Color 对象的通道值。
* @param {number} v2 - 被混合 Color 对象的通道值。
* @returns {number}
*/