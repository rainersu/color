/**
* 计算出与当前 Color 对象色值最接近的 {@link http://en.wikipedia.org/wiki/Web_colors#Web-safe_colors|216 Web-safe} 色值或 {@link http://cloford.com/resources/colours/websmart1.htm|4096 Web-Smart} 色值。
* @see {@link Color#css}
* @see {@link http://en.wikipedia.org/wiki/Web_colors}
* @see {@link http://cloford.com/resources/colours/websmart1.htm}
* @access public
* @func Color.prototype.web
* @param {boolean} [smart=false]
* @param {boolean}  smart.false - 调整至 `216` 色的 {@link http://en.wikipedia.org/wiki/Web_colors#Web-safe_colors|Web-safe} 色盘。
* @param {boolean}  smart.true  - 调整至 `4096` 色的 {@link http://cloford.com/resources/colours/websmart1.htm|Web-Smart} 色盘。
* @param {boolean} [obj=false]
* @param {boolean}  obj.false - 直接返回 \#RRGGBB 的样式表格式值。
* @param {boolean}  obj.true  - 返回完整 Color 对象。
* @returns {Color|string}
* @example
* var color = new Color('#CD1289');
* console.log(color.web());                    // #CC0099
* console.log(color.web(true));                // #CC1188
* console.log(color.web(true, true).css(0));   // #CC1188
* 
* var color = new Color('hsla(108, 33%, 88%, 0.5)');
* console.log(color.web());                    // #CCFFCC
* console.log(color.web(true));                // #DDEEDD
* console.log(color.web(true, true).css(0));   // #DDEEDD
*/