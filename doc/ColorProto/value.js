/**
* 获取或设置 Color 对象基于指定 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 的指定分量 (通道) 值。
* @see {@link Color#color}
* @see {@link Color#opacity}
* @access public
* @func Color.prototype.value
* @param {string} space   - {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 名称。
* @param {number} channel - 分量 (通道) 索引。
* @param {number}  [value] - 要设置的分量 (通道) 值。如果省略此参数则获取并返回当前的值。否则将返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将分量 (通道) 值直接设置为 `value` 。
* @param {boolean}  relative.true   - 增量赋值。将当前的分量 (通道) 值增加 `value` 。
* @returns {Color|number}
* @example
* var red = Color('red');                               // 0
* console.log(red.value('hsla', 1));                    // 100
* console.log(red.css(2));                              // hsl( 0, 100%, 50% )
* console.log(red.value('hsla', 1,  80).css(2));        // hsl( 0,  80%, 50% )	   
* console.log(red.value('hsla', 1, -20, true).css(2));  // hsl( 0,  60%, 50% )
* console.log(red.value('hsla', 1, -80, true).css(2));  // hsl( 0,   0%, 50% )
* console.log(red.value('hsla', 1));                    // 0
* @example
* var red = Color('red');
* console.log(red.opacity());                              // 100
* console.log(red.value('rgb', 3,  10).opacity());         //  10
* console.log(red.value('rgb', 3,  20, true).opacity());   //  30
* console.log(red.value('rgb', 3, -30, true).opacity());   //   0
* console.log(red.value('rgb', 3, -50).opacity());         //   0
*/