/**
* 基于 {@link Color.spaces.yiq|YIQ} 算法计算出当前 Color 对象色值的亮度值。范围为 0 - 255 。亮度最高为 255 (白色)，亮度最低为 0 (黑色)。
* @see {@link Color#luminance}
* @see {@link Color#contrast}
* @see {@link Color#difference}
* @see {@link http://www.w3.org/WAI/ER/WD-AERT/#color-contrast}
* @access public
* @func Color.prototype.luma
* @returns {number} 
* @example
* console.log(Color('#000').luma());      // 0
* console.log(Color('#FFF').luma());      // 255
* console.log(Color('#60DFE5').luma());   // 186
*/