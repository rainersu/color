/**
* 获取 Palette 对象当前可以混合调配出的最终颜色，返回为符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义的 CSS 语法描述格式。
* @see {@link Color#css}
* @access public
* @func Palette.prototype.css
* @param {number}  [type] - 指定 CSS 语法描述的格式类型
* @param {number}   type.0  - \#RRGGBB
* @param {number}   type.1  - rgb(R, G, B) || rgba(R, G, B, A)
* @param {number}   type.2  - hsl(H, S, L) || hsla(H, S, L, A)
* @param {boolean} [alpha] - 是否输出为支持 Alpha 通道描述的格式
* @param {boolean}  alpha.false  - rgb(R, G, B) || hsl(H, S, L)
* @param {boolean}  alpha.true   - rgba(R, G, B, A) || hsla(H, S, L, A)
* @returns {string}
* @example
* var tiffanyblue = '#60DFE5';
* var pat = new Palette([ '#FFF', '#000', tiffanyblue ], [ 1, 2, 3 ], 22);
* 
* console.log(pat.css( ));         // rgba(91,154,157,0.22)
* console.log(pat.css(0));         // #5B9A9D 
* console.log(pat.css(1));         // rgba(91,154,157,0.22)
* console.log(pat.css(1, true));   // rgba(91,154,157,0.22) 
* console.log(pat.css(2, false));  // hsl(183,27%,49%)
* console.log(pat.css(2, true));   // hsla(183,27%,49%,0.22) 
*/