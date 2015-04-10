/**
* 计算出当前 Color 对象在以 `background` 为背景色的情况下，受 {@link Color#alpha|alpha} 通道值影响，实际显示为的颜色，作为新 Color 对象返回。
* @see {@link Color#mix}
* @see {@link Color#tint}
* @see {@link Color#tone}
* @see {@link Color#shade}
* @access public
* @func Color.prototype.opaque
* @param {Color|string} background - 参考背景色。
* @param {boolean} [css=false]
* @param {boolean}  css.false - 返回新 Color 对象。
* @param {boolean}  css.true  - 直接返回 \#RRGGBB 的样式表格式值。
* @returns {Color|string} 
* @example
* console.log(Color('#EC8').opaque('#8CE', true));   // #EECC88
* @example
* var fc =  Color('rgba(0, 0, 0, 0.2)');
* console.log(fc.opaque('#FFF').css(1));   // rgb(204, 204, 204)
* console.log(fc.opaque('#000').css(1));   // rgb(  0,   0,   0)
*/