/**
* 从一个 Color 对象转换出符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义的 CSS 语法描述格式。
* @see {@link Color#ieFilter}
* @see {@link Color#toJSON}
* @see {@link Color#toString}
* @see {@link Palette#css}
* @see {@link Gradient#css}
* @access public
* @func Color.prototype.css
* @param {number}  [type] - 指定 CSS 语法描述的格式类型。
* @param {number}   type.0  - \#RRGGBB 。
* @param {number}   type.1  - rgb(R, G, B) || rgba(R, G, B, A) 。
* @param {number}   type.2  - hsl(H, S, L) || hsla(H, S, L, A) 。
* @param {boolean} [alpha] - 是否输出为支持 `Alpha` 通道描述的格式。
* @param {boolean}  alpha.false  - rgb(R, G, B) || hsl(H, S, L) 。
* @param {boolean}  alpha.true   - rgba(R, G, B, A) || hsla(H, S, L, A) 。
* @returns {string}
* @example
* var color = new Color([ 0, 100, 100, 0 ], 'cmyk');
* 
* console.log(color.css( ));        // rgb(255,0,0)
* 
* console.log(color.css(0));        // #FF0000
* console.log(color.css(0, true));  // #FF0000
* 
* console.log(color.css(1));        // rgb(255,0,0)
* console.log(color.css(1, true));  // rgba(255,0,0,1)
* 
* console.log(color.css(2));        // hsl(0,100%,50%)
* console.log(color.css(2, true));  // hsla(0,100%,50%,1)
*/