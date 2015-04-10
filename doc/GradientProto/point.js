/**
* 添加、修改或删除当前色彩渐变路径上的里程碑。
* @access public
* @func Gradient.prototype.point
* @param {number} point - 里程碑 (Color-Stop Point) 坐标。
* @param {Color|string} [color] - 需要被作为里程碑设定到坐标值为 `point` 处的色彩。可以使用 {@link Color} 对象也可以是符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的字符串。如果指定坐标处已有里程碑，则其会被改写。如果省略此参数，则本方法会尝试删除坐标值为 `point` 的里程碑。
* @returns {Gradient}
* @example
* var rad = new Gradient('black', 'white');
* console.log(rad.scale(50).css(0));   // #808080
* 
* rad.point(50, '#60DFE5');
* console.log(rad.scale(50).css(0));   // #60DFE5
* 
* rad.point(50);
* console.log(rad.scale(50).css(0));   // #808080
*/