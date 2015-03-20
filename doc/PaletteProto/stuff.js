/**
* 为当前 Palette 对象设置基色及其份数。
* @access public
* @func Palette.prototype.stuff
* @param {Color|string} color - 为调色板设定基色。可以使用 {@link Color} 对象也可以是符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的字符串。
* @param {number} [ratio=1] - 为基色 color 设定份量。注意是份量而非比例，单一基色的实际比例等于其份量 / 所有基色的总份量。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将基色的份量设置为 ratio 。
* @param {boolean}  relative.true   - 增量赋值。将基色当前份量增加 ratio 。如果基色是初次添加到调色盘，则其当前份量为零。
* @returns {Palette}
* @example
* var pat = new Palette([ '#000', '#FFF' ], [ 1, 1 ], 50);
* 
* console.log(pat.ratio('#000'));                               // 1
* console.log(pat.stuff('#000', 2).ratio('#000'));              // 2
* console.log(pat.stuff('#000', 3, true).ratio('#000'));        // 5
* console.log(pat.css());                                       // rgba(43, 43, 43,0.5)
* 
* console.log(pat.ratio('#60DFE5'));                            // 0
* console.log(pat.stuff('#60DFE5', 2).ratio('#60DFE5'));        // 2
* console.log(pat.stuff('#60DFE5', 3, true).ratio('#60DFE5'));  // 5
* console.log(pat.css());   
*/