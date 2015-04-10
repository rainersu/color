/**
* 基于 {@link Color.spaces.husl|HuSL 色彩空间} 的色轮旋转，随机生成一个颜色或一组配色。
* @see {@link Gradient#split}
* @see {@link Color#scheme}
* @see {@link Color.spaces.husl}
* @access public
* @func Color.random
* @param {number}  [count=1] - 配色方案总色彩数。
* @param {number}  [amount]  - 如果 `count` 大于 `1` ，旋转色轮时的步进增量。
* @returns {Color|Color[]}
* @example
* console.log(Color.random().css(1, true));   // rgba(25,24,24,1)
* @example
* Color.random(3).forEach(function(i) { console.log(i.css(0)); });  // #53392C  #2C4339  #44356F
*/