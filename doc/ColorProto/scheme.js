/**
* 基于 {@link Color.spaces.husl|HuSL 色彩空间} 的色轮旋转，为当前 Color 对象生成一组配色。
* @see {@link Gradient#split}
* @see {@link Color.random}
* @see {@link Color.spaces.husl}
* @access public
* @func Color.prototype.scheme
* @param {number}  [count=12] - 配色方案包含当前颜色在内的总色彩数。
* @param {number}  [amount]  - 旋转色轮时的步进增量。
* @returns {Color[]}
* @example
* var tiffanyblue = new Color('#60DFE5');
* var pat = tiffanyblue.scheme(6);
* var l = pat.length;
* for(; l--;) console.log(pat[l].css(0));
* 
* // #60DFE5
* // #C1CCF6
* // #F6BBEA
* // #F7C0BB
* // #DFCF59
* // #5AE68C
*/