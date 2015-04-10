/**
* 获取当前色彩渐变路径上指定坐标处的色彩，作为 {@link Color} 对象返回。注意： {@link Color#alpha|alpha} 通道也会纳入计算。
* @access public
* @func Gradient.prototype.scale
* @param {number} point - 绝对坐标值或取值范围为 `0 - 100` 的百分比值。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 将 `point` 参数值视为绝对坐标值计算。
* @param {boolean}  relative.true   - 将 `point` 参数值视为相对百分比计算。相对于路径全长，也即终点坐标与起点坐标之差。
* @returns {Color}
* @example
* var rad = new Gradient([ 'black', 'white' ], [ 0, 50 ]);
* console.log(rad.scale(50).css(1));         // rgb(255,255,255)
* console.log(rad.scale(50, true).css(1));   // rgb(128,128,128)
* @example
* var rad = new Gradient([ 'black', 'rgb(200, 200, 200)', 'white' ], [ 10, 35, 60 ]);
* console.log(rad.scale(50).css(1));         // rgb(233,233,233)
* console.log(rad.scale(50, true).css(1));   // rgb(200,200,200)
*/