/**
* 将当前 Gradient 的渐变路径映射到重新指定的坐标系。
* @access public
* @func Gradient.prototype.map
* @param {number} [min=0]   - 新的起点坐标值。
* @param {number} [max=100] - 新的终点坐标值。
* @returns {Gradient}
* @example
* var rad = new Gradient([ 'black', '#60DFE5', 'white' ], [ 3, 6, 9 ]);
* 
* console.log(rad.scale( 6).css());   // rgb(96,223,229)
* 
* rad.map(10, 50);
* console.log(rad.scale(30).css());   // rgb(96,223,229)
* 
* rad.map(100);
* console.log(rad.scale(50).css());   // rgb(96,223,229)
*/