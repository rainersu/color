/**
* 判断指定 Color 对象的色彩值与当前 Color 对象的色彩值是否相等。
* @see {@link Color#clone}
* @access public
* @func Color.prototype.equal
* @param {Color|string} color - 要与当前 Color 对象作比较的  Color 对象，或者任何符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的样式表字符串。
* @returns {boolean}
* @example
* var color1 = Color('hsla(300, 30%, 3%, 0.3)');
* var color2 = Color('rgba(10,5,10)');
* console.log(color1.equal(color2));   // false
* 
* color2.opacity(30);
* console.log(color1.equal(color2));   // true
* 
* color1.opacity(50);
* console.log(color1.equal(color2));   // false
*/