/**
* 判断指定变量是否是 Color 类型或符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义的样式表格式值。
* @access public
* @func Color.isColor
* @param {*} val
* @returns {boolean} 
* @example
* console.log(Color.isColor('#X00'));                // false
* console.log(Color.isColor('#FF0'));                // true
* console.log(Color.isColor('fuchsia'));             // true
* console.log(Color.isColor('abcdefg'));             // false
* console.log(Color.isColor(Color('fuchsia')));      // true
* console.log(Color.isColor('hsl(0, 0, 0)'));        // false
* console.log(Color.isColor('hsl(0, 0%, 0%)'));      // true
* console.log(Color.isColor('rgba(0, 0, 0, 0.5)'));  // true
*/