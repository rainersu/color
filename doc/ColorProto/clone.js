/**
* 创建当前 Color 对象的一个等值副本。
* @see {@link Color#equal}
* @access public
* @func Color.prototype.clone
* @returns {Color}
* @example
* var color1 = Color('hsla(300, 30%, 3%, 0.3)');
* var color2 = color1.clone();
* 
* console.log(color1.equal(color2));   // true
* console.log(color1  ===  color2 );   // false
*/