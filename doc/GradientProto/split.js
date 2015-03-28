/**
* 将当前色彩渐变路径等比切分为一组 {@link Color} 对象返回。
* @see {@link Color#scheme}
* @see {@link Color.random}
* @access public
* @func Gradient.prototype.split
* @param {number} [count] - 返回数组的长度。默认为当前 Gradient 对象包含起点和终点在内的里程碑总数。
* @returns {Color[]}
* @example
* var c = new Gradient('rgb(0, 0, 0, 0.5)', '#60DFE5', 'white');
* var f = function (i) { console.log(i.css(1, true)); };
* var n = 7;
* c.split(n).forEach(f);
* 
* // rgba(  0,   0,   0, 0.5 )
* // rgba( 32,  74,  76, 0.67)
* // rgba( 64, 149, 153, 0.83)
* // rgba( 96, 223, 229, 1   )
* // rgba(149, 234, 238, 1   )
* // rgba(202, 244, 246, 1   )
* // rgba(255, 255, 255, 1   )
* 
* c.point(50).split(n).forEach(f);
* 
* // rgba(  0,   0,   0, 0.5 )
* // rgba( 42,  42,  42, 0.58)
* // rgba( 85,  85,  85, 0.67)
* // rgba(127, 127, 127, 0.75)
* // rgba(170, 170, 170, 0.83)
* // rgba(212, 212, 212, 0.92)
* // rgba(255, 255, 255, 1   )
* @example
* new Gradient(['#60DFE5', '#EEE'], [33, 66]).split(3).forEach(function (i) {
*     console.log(i.css(0));
});
* 
* // #60DFE5   #A7E7EA   #EEEEEE
*/