/**
* 获取指定基色在 Palette 对象中的份数或比例。如果当前调色板尚未包含此基色，则返回 0 。
* @access public
* @func Palette.prototype.ratio
* @param {Color|string} color - 需要获取份数或比例的基色。可以使用 {@link Color} 对象也可以是符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的字符串。
* @param {boolean} [percent=false]
* @param {boolean}  percent.false  - 返回基色的份数。
* @param {boolean}  percent.true   - 返回基色的比例。即其份量在所有基色的总份量中所占百分比。
* @returns {number}
* @example
* var pat = new Palette([ '#000', '#FFF' ], [ 1, 2 ], 50);
* var tiffanyblue = '#60DFE5';
* 
* console.log(pat.ratio('#000' ));                    //  1
* console.log(pat.ratio('#000',  true) + '%');        // 33%
* 
* console.log(pat.ratio('white'));                    //  2
* console.log(pat.ratio('white', true) + '%');        // 67%
* 
* console.log(pat.ratio(tiffanyblue));                //  0
* console.log(pat.ratio(tiffanyblue,  true) + '%');   //  0%  
*/