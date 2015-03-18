/**
* 判断参数指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 是否已被 Color 类型支持。
* @see {@link http://en.wikipedia.org/wiki/Color_space}
* @access public
* @func Color.support
* @param {string} space - 色彩空间名称。不区分大小写。
* @returns {boolean} 
* @example
* console.log(Color.support('rgb'));      // true
* console.log(Color.support('rgba'));     // true
* console.log(Color.support('cieLab'));   // true
*/