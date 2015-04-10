/**
* 计算出当前 Color 对象色值的 {@link http://www.w3.org/TR/WCAG20/#relativeluminancedef|亮度} 值。范围为 `0 - 1` 。亮度最高为 `1` (白色)，亮度最低为 `0` (黑色)。
* @see {@link Color#luma}
* @see {@link Color#contrast}
* @see {@link Color#difference}
* @see {@link http://www.w3.org/TR/WCAG20/#relativeluminancedef}
* @access public
* @func Color.prototype.luminance
* @param {boolean} [gamma=true] - 是否使用 {@link http://en.wikipedia.org/wiki/Gamma_correction|伽马校正} 。
* @returns {number} 
* @example
* console.log(Color('#000').luminance());   // 0
* console.log(Color('#FFF').luminance());   // 1
* console.log(Color('#F00').luminance());   // 0.2126
* @example
* console.log(Color('hsl(90, 90%, 50%)').luminance( ));   // 0.7893499999999999
* console.log(Color('hsl(90, 90%, 50%)').luminance(0));   // 0.6823211883804896
* console.log(Color('hsl(90, 90%, 50%)').luminance(1));   // 0.7893499999999999
*/