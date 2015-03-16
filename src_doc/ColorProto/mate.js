/**
* 使用 {@link Color#luminance|luminance} 方法，基于 {@link http://www.w3.org/TR/WCAG20/#relativeluminancedef|亮度} 计算，从一组颜色中选择出与当前 Color 对象作为前背景配色最合适最适合阅读的颜色，作为新 Color 对象返回。
* @see {@link Color#luminance}
* @see {@link Color#contrast}
* @see {@link Color#difference}
* @see {@link http://www.w3.org/TR/WCAG20/#relativeluminancedef}
* @access public
* @func Color.prototype.mate
* @param {Color[]} colors - 候选的各种颜色。
* @returns {Color} 
* @example
* console.log(Color('hsl(180, 100%, 50%)').mate().css(0));          // #000000
* console.log(Color('#FC3').mate('#CF3', '#C3F', '#3FC').css(0));   // #CC33FF
* @example
* var girl = Color('snow');
* var boys = [ 'silver', 'black', 'white' ];
* console.log(girl.mate(boys).css(0));   // #000000
*/