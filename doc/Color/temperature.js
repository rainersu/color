/**
* 基于 {@link http://en.wikipedia.org/wiki/Color_temperature|色温} 值创建 Color 对象。
* @see {@link http://en.wikipedia.org/wiki/Color_temperature}
* @see {@link http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/}
* @access public
* @func Color.temperature
* @param {number} kelvin - 开氏温标单位 (K) 。可靠取值范围为 1000 - 40000 。
* @returns {Color} 
* @example
* console.log(Color.temperature( 1000).css(0));   // #FF4400
* console.log(Color.temperature(40000).css(0));   // #98BAFF
*/