
/**
* 色彩类。提供全能高效的色彩管理功能。
* @class Color
* @see {@link http://www.w3.org/TR/css3-color/}
* @see {@link http://dev.w3.org/csswg/css-color/}
* @see {@link https://cdn.rawgit.com/dfcreative/color-space/master/test/index.html}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
* @param {string|array} data - 任何符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的字符串，或符合由 space 参数指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 的命名分量顺序的色值数组。
* @param {string} [space=rgb] - 当 data 参数格式为数组时，指定所对应的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 名称。当前已支持的所有色彩空间名称可通过 {@link Color.spaces} 查看。
* @example
* var color = Color('#FF0');
* var color = Color('hsl(80, 5%, 3%)');
* var color = new Color('rgb(255, 0, 0)');
* var color = Color([255, 0, 0, 50], 'rgba');
* var color = new Color([100, 0, 0, 0], 'cmyk');
* @example
* var c = [ 255, 0, 0 ];
* var a = 'xyz,yxy,yiq,yuv,lab,cmy,hwb,hsv,hsl,rgb'.split(',');
* var l = a.length, i, n, m, r;
* for(; l--;) {
*     n = a[l];
*     m = a[l - 1] || 'rgb';
*     r = n + '[ ' + c.map(Math.round) + '] -> ' + m + '[ ';
*     c = new Color(c, n).color(m);
*     console.log(r + c.map(Math.round) + ' ]'); 
* }
* // rgb[ 255,   0,   0 ] -> hsl[   0, 100,  50 ]
* // hsl[   0, 100,  50 ] -> hsv[   0, 100, 100 ]
* // hsv[   0, 100, 100 ] -> hwb[   0,   0,   0 ]
* // hwb[   0,   0,   0 ] -> cmy[   0, 100, 100 ]
* // cmy[   0, 100, 100 ] -> lab[  53,  80,  67 ]
* // lab[  53,  80,  67 ] -> yuv[  76,  84, 255 ]
* // yuv[  76,  84, 255 ] -> yiq[   0,   1,   0 ]
* // yiq[   0,   1,   0 ] -> yxy[   1,   0,  21 ]
* // yxy[   1,   0,  21 ] -> xyz[  41,  21,   2 ]
* // xyz[  41,  21,   2 ] -> rgb[ 255,   0,   0 ]
*/


/*--------------------------------------------*/
/*--------------------------------------------*/


/**
* 已预定义名称的色彩集合。已包含 {@link http://dev.w3.org/csswg/css-color/#named-colors|CSS4.0} 和 {@link http://www.w3.org/TR/SVG/types.html#ColorKeywords|SVG1.1} 标准的所有命名色彩。可自由扩充。但请注意色彩名称必须使用小写字母注册。
* @see {@link http://dev.w3.org/csswg/css-color/#named-colors}
* @see {@link http://www.w3.org/TR/SVG/types.html#ColorKeywords}
* @access public
* @var {object} Color.keywords
* @example
* console.log(Color.keywords.rebeccapurple);   // #663399
* @example
* Color.keywords.tiffanyblue = '#60DFE5';
* var tiffanyblue = new Color('tiffanyblue');
*/

/**
* 当前支持的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 集合。
* @see {@link Color.support}
* @see {@link Color#space}
* @access public
* @var {object} Color.spaces
* @example
* console.log(Object.keys(Color.spaces));
* @example
* var n = 'CMYK';
* var s = Color.spaces.cmyk;
* var l = s.length, i;
* while(l--) {
*     console.log(n.charAt(l) + ' : ' + s[l].join(' - '));
* }
* // K : 0 - 100
* // Y : 0 - 100
* // M : 0 - 100
* // C : 0 - 100
*/

/**
* 判断参数指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 是否已被 Color 类型支持。
* @see {@link http://en.wikipedia.org/wiki/Color_space}
* @access public
* @func Color.support
* @param {string} space - 色彩空间名称。不区分大小写。
* @returns {boolean} 
* @example
* console.log(Color.support('rgb'));      // true
* console.log(Color.support('rgba'));     // true
* console.log(Color.support('cieLab'));   // true
*/

/**
* 判断指定变量是否是 Color 类型或符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义的样式表格式值。
* @access public
* @func Color.isColor
* @param {*} val
* @returns {boolean} 
* @example
* console.log(Color.isColor('#X00'));                // false
* console.log(Color.isColor('#FF0'));                // true
* console.log(Color.isColor('fuchsia'));             // true
* console.log(Color.isColor('abcdefg'));             // false
* console.log(Color.isColor(Color('fuchsia')));      // true
* console.log(Color.isColor('hsl(0, 0, 0)'));        // false
* console.log(Color.isColor('hsl(0, 0%, 0%)'));      // true
* console.log(Color.isColor('rgba(0, 0, 0, 0.5)'));  // true
*/

/**
* 基于 {@link http://en.wikipedia.org/wiki/Color_temperature|色温} 值创建 Color 对象。
* @see {@link http://en.wikipedia.org/wiki/Color_temperature}
* @see {@link http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/}
* @access public
* @func Color.temperature
* @param {number} kelvin - 开氏温标单位 (K) 。可靠取值范围为 1000 - 40000 。
* @returns {Color} 
* @example
* console.log(Color.temperature( 1000).css(0));   // #FF4400
* console.log(Color.temperature(40000).css(0));   // #98BAFF
*/

/**
* 基于 {@link http://en.wikipedia.org/wiki/Grayscale|灰度} 或 {@link http://en.wikipedia.org/wiki/Luminance|明度} 值创建 Color 对象。
* @see {@link Color#greyscale}
* @see {@link Color#luminance}
* @see {@link http://en.wikipedia.org/wiki/Grayscale}
* @access public
* @func Color.grayscale
* @param {number} value - 取值范围为 0 - 255 的灰度值或。
* @param {boolean} [luma=false]
* @param {boolean}  luma.false - 将 value 参数视为取值范围为 0 - 255 的 {@link http://en.wikipedia.org/wiki/Grayscale|灰度} 值。
* @param {boolean}  luma.true  - 将 value 参数视为取值范围为 0 - 1.0 的 {@link http://en.wikipedia.org/wiki/Luminance|明度} 值。
* @returns {Color} 
* @example
* console.log(Color.grayscale(  0).css(0));    // #000000
* console.log(Color.grayscale( 33).css(0));    // #212121
* console.log(Color.grayscale(255).css(0));    // #FFFFFF
* @example
* var c = new Color('hsl(90, 90%, 50%, 1)');
* var b = Color.grayscale(c.luminance(), 1);
* console.log(c.css(0) + ' -> ' + b.css(0));   // #80F20D -> #C9C9C9
*/



/*--------------------------------------------*/
/*--------------------------------------------*/



/**
* Color 对象当前色值的不透明度。取值范围从完全透明到完全不透明为 0 -100 。不建议直接访问，请通过 {@link Color#opacity} 方法读取或修改。
* @see {@link Color#opacity}
* @access public
* @var {number} Color.prototype.alpha
* @example
* console.log(Color('hsla(300, 50%, 30%, 0.6)').alpha);   // 60
*/

/**
* Color 对象当前激活 (最近一次使用) 的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 名称。
* @see {@link Color.spaces}
* @access public
* @var {string} Color.prototype.space
* @example
* console.log(Color('hsla(300, 50%, 30%, 0.6)').space);   // hsl
*/

/**
* 将一个 Color 对象处理为 JSON 字符串。转化结果为该 Color 对象 RGB 色彩空间色值的 CSS 语法描述格式。
* @see {@link Color#toString}
* @see {@link Color#css}
* @access public
* @func Color.prototype.toJSON
* @returns {string}
* @example
* console.log(Color('rgb(255, 0, 0)').toJSON());           // rgb(255,0,0)
* console.log(Color('rgba(255, 0, 0, 0.3)').toJSON());     // rgba(255,0,0,0.3)
* 
* console.log(Color('hsl(0, 100%, 50%)').toJSON());        // rgb(255,0,0)
* console.log(Color('hsla(0, 100%, 50%, 0.3)').toJSON());  // rgba(255,0,0,0.3)
* 
* console.log(Color([ 0, 0, 0 ], 'hwb').toJSON());         // rgb(255,0,0)
* console.log(Color([ 0, 0, 0, 30 ], 'hwb').toJSON());     // rgba(255,0,0,0.3)
*/

/**
* 从一个 Color 对象转换出文本。转化结果为该 Color 对象 RGB 色彩空间色值的 CSS 语法描述格式。
* @see {@link Color#toJSON}
* @see {@link Color#css}
* @access public
* @func Color.prototype.toString
* @returns {string}
* @example
console.log(Color('rgb(255, 0, 0)').toString());           // rgb(255,0,0)
console.log(Color('rgba(255, 0, 0, 0.3)').toString());     // rgba(255,0,0,0.3)

console.log(Color('hsl(0, 100%, 50%)').toString());        // rgb(255,0,0)
console.log(Color('hsla(0, 100%, 50%, 0.3)').toString());  // rgba(255,0,0,0.3)

console.log(Color([ 0, 0, 0 ], 'hwb').toString());         // rgb(255,0,0)
console.log(Color([ 0, 0, 0, 30 ], 'hwb').toString());     // rgba(255,0,0,0.3)
*/

/**
* 从一个 Color 对象转换出符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义的 CSS 语法描述格式。
* @see {@link Color#toJSON}
* @see {@link Color#toString}
* @access public
* @func Color.prototype.css
* @param {number}  [type=0] - 指定 CSS 语法描述的格式类型
* @param {number}   type.0  - \#RRGGBB
* @param {number}   type.1  - rgb(R, G, B) || rgba(R, G, B, A)
* @param {number}   type.2  - hsl(H, S, L) || hsla(H, S, L, A)
* @param {boolean} [alpha=false] - 是否输出为支持 Alpha 通道描述的格式
* @param {boolean}  alpha.false  - rgb(R, G, B) || hsl(H, S, L)
* @param {boolean}  alpha.true   - rgba(R, G, B, A) || hsla(H, S, L, A)
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

/**
* 获取或设置 Color 对象的不透明度。
* @see {@link Color#color}
* @see {@link Color#value}
* @access public
* @func Color.prototype.opacity
* @param {number}  [value] - 不透明度。取值范围为 0 - 100 。如果省略此参数则获取并返回当前的不透明度值。否则将根据本参数修改当前 Color 对象的不透明度值，并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的不透明度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前不透明度增加 value
* @returns {Color|number}
* @example
* var red = Color('red');
* console.log(red.css());                     // rgb(255,0,0)
* console.log(red.opacity());                 // 100
* console.log(red.opacity( 50).css());        // rgba(255,0,0,0.5)
* console.log(red.opacity( 30, true).css());  // rgba(255,0,0,0.8)
* console.log(red.opacity(-20, true).css());  // rgba(255,0,0,0.6)
* console.log(red.opacity(200).css());        // rgb(255,0,0)
*/

/**
* 获取或设置 Color 对象的 {@link http://en.wikipedia.org/wiki/Hue|色度 (色相)} 。
* @see {@link Color#greyscale}
* @see {@link Color#value}
* @access public
* @func Color.prototype.hue
* @param {number}  [value] - 色度。取值范围为 0 - 360 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的色度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前色度增加 value
* @returns {Color|number}
* @example
* var red = Color('red');
* console.log(red.css(0));                 // #FF0000
* console.log(red.hue());                  //   0
* console.log(red.hue(380).hue());         //  20
* console.log(red.hue(-30, true).hue());   // 350
* console.log(red.hue(-90, true).hue());   // 260
* console.log(red.css(0));                 // #5500FF
*/

/**
* 获取或设置 Color 对象的基于 {@link http://en.wikipedia.org/wiki/HWB_color_model|HWB 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Whiteness|白度} 。
* @see {@link Color#blackness}
* @see {@link Color#value}
* @access public
* @func Color.prototype.whiteness
* @param {number}  [value] - 白度。取值范围为 0 - 100 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的白度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前白度增加 value
* @returns {Color|number}
* @example
* var c1 = Color('#F5FFFA'), w = c1.whiteness(), r1 = [];
* var c2 = c1.complement( ), b = c2.blackness(), r2 = [];
* 
* console.log(w);   // 96.07843137254902
* console.log(b);   // 96.07843137254902
* 
* while(w <= 100) {
*     r1.push(c1.whiteness(w++).css(0));
*     r2.push(c2.blackness(b++).css(0));
* }
* console.log(r1);   // [ '#F5FFFA', '#F8FFFB', '#FAFFFD', '#FDFFFE' ]
* console.log(r2);   // [ '#0A0005', '#070004', '#050002', '#020001' ]
*/

/**
* 获取或设置 Color 对象的基于 {@link http://en.wikipedia.org/wiki/HWB_color_model|HWB 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Blackness|黑度} 。
* @see {@link Color#whiteness}
* @see {@link Color#value}
* @access public
* @func Color.prototype.blackness
* @param {number}  [value] - 黑度。取值范围为 0 - 100 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的黑度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前黑度增加 value
* @returns {Color|number}
* @example
* var c1 = Color('#F5FFFA'), w = c1.whiteness(), r1 = [];
* var c2 = c1.complement( ), b = c2.blackness(), r2 = [];
* 
* console.log(w);   // 96.07843137254902
* console.log(b);   // 96.07843137254902
* 
* while(w <= 100) {
*     r1.push(c1.whiteness(w++).css(0));
*     r2.push(c2.blackness(b++).css(0));
* }
* console.log(r1);   // [ '#F5FFFA', '#F8FFFB', '#FAFFFD', '#FDFFFE' ]
* console.log(r2);   // [ '#0A0005', '#070004', '#050002', '#020001' ]
*/

/**
* 获取或设置 Color 对象的基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSL(HSI) 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Colorfulness|饱和度} 。如要处理基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSV(HSB) 色彩空间} 的饱和度请使用 {@link Color#chroma|chroma} 方法。
* @see {@link Color#chroma}
* @see {@link Color#value}
* @access public
* @func Color.prototype.saturation
* @param {number}  [value] - 饱和度。取值范围为 0 - 100 。如果省略此参数则获取并返回当前的饱和度值。否则将根据本参数修改当前 Color 对象基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSL 色彩空间} 的饱和度值，并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的饱和度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前饱和度增加 value
* @returns {Color|number}
* @example
* var red = Color('red');
* console.log(red.css(2));                        // hsl( 0, 100%, 50% )
* console.log(red.saturation());                  // 100
* console.log(red.saturation( 50).css(2));        // hsl( 0,  50%, 50% )
* console.log(red.saturation(-30, true).css(2));  // hsl( 0,  20%, 50% )
* @example
var c = 'black,pink,gray,green,white'.split(',').map(Color);
var l = c.length;
for(; l--;) {
	console.log(c[l].css(0) + ' - HSL: ' + c[l].saturation().toFixed() + ' HSV: ' + c[l].chroma().toFixed()); 
}
// #FFFFFF - HSL:   0  HSV:   0
// #008000 - HSL: 100  HSV: 100
// #808080 - HSL:   0  HSV:   0
// #FFC0CB - HSL: 100  HSV:  25
// #000000 - HSL:   0  HSV:   0
*/

/**
* 获取或设置 Color 对象的基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSL(HSI) 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Lightness|亮度} 。如要处理基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSV(HSB) 色彩空间} 的 {@link  http://en.wikipedia.org/wiki/Brightness|明度} 请使用 {@link Color#brightness|brightness} 方法。
* @see {@link Color#brightness}
* @see {@link Color#value}
* @access public
* @func Color.prototype.lightness
* @param {number}  [value] - 亮度。取值范围为 0 - 100 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将 Color 对象的亮度值设置为 value
* @param {boolean}  relative.true   - 增量赋值。将 Color 对象当前亮度值增加 value
* @returns {Color|number}
* @example
* var red = Color('red');
* console.log(red.css(2));                       // hsl(0, 100%, 50%)
* console.log(red.lightness());                  // 50
* console.log(red.lightness( 50).css(2));        // hsl(0, 100%, 50%)
* console.log(red.lightness(-30, true).css(2));  // hsl(0, 100%, 20%)
* @example
* var c = 'black,pink,gray,green,white'.split(',').map(Color);
* var l = c.length;
* for(; l--;) {
*     console.log(c[l].css(0) + ' - HSL: ' + c[l].lightness().toFixed() + ' HSV: ' + c[l].brightness().toFixed()); 
* }
* // #FFFFFF - HSL: 100  HSV: 100
* // #008000 - HSL:  25  HSV:  50
* // #808080 - HSL:  50  HSV:  50
* // #FFC0CB - HSL:  88  HSV: 100
* // #000000 - HSL:   0  HSV:   0
*/

/**
* 获取或设置 Color 对象的基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSV(HSB) 色彩空间} 的 {@link  http://en.wikipedia.org/wiki/Brightness|明度} 。如要处理基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSV(HSB) 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Lightness|亮度} 请使用 {@link Color#lightness|lightness} 方法。
* @see {@link Color#lightness}
* @see {@link Color#value}
* @access public
* @func Color.prototype.brightness
* @param {number}  [value] - 明度。取值范围为 0 - 100 。如果省略此参数则获取并返回当前值。否则将根据本参数修改当前值并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将 Color 对象的明度值设置为 value
* @param {boolean}  relative.true   - 增量赋值。将 Color 对象当前明度值增加 value
* @returns {Color|number}
* @example
* var red = Color('red');
* console.log(red.css(0));                        // #FF0000
* console.log(red.brightness());                  // 50
* console.log(red.brightness( 50).css(0));        // #800000
* console.log(red.brightness(-30, true).css(0));  // #330000
* @example
* var c = 'black,pink,gray,green,white'.split(',').map(Color);
* var l = c.length;
* for(; l--;) {
*     console.log(c[l].css(0) + ' - HSL: ' + c[l].lightness().toFixed() + ' HSV: ' + c[l].brightness().toFixed()); 
* }
* // #FFFFFF - HSL: 100  HSV: 100
* // #008000 - HSL:  25  HSV:  50
* // #808080 - HSL:  50  HSV:  50
* // #FFC0CB - HSL:  88  HSV: 100
* // #000000 - HSL:   0  HSV:   0
*/

/**
* 获取或设置 Color 对象的基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSV(HSB) 色彩空间} 的 {@link http://en.wikipedia.org/wiki/Colorfulness|饱和度} 。如要处理基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSL(HSI) 色彩空间} 的饱和度请使用 {@link Color#saturation|saturation} 方法。
* @see {@link Color#saturation}
* @see {@link Color#value}
* @access public
* @func Color.prototype.chroma
* @param {number}  [value] - 饱和度。取值范围为 0 - 100 。如果省略此参数则获取并返回当前的饱和度值。否则将根据本参数修改当前 Color 对象基于 {@link http://en.wikipedia.org/wiki/HSL_and_HSV|HSV 色彩空间} 的饱和度值，并返回当前 Color 对象。
* @param {boolean} [relative=false]
* @param {boolean}  relative.false  - 绝对赋值。将对象的饱和度设置为 value
* @param {boolean}  relative.true   - 增量赋值。将对象当前饱和度增加 value
* @returns {Color|number}
* @example
* var red = Color('red');
* console.log(red.css(0));                    // #FF0000
* console.log(red.chroma());                  // 100
* console.log(red.chroma( 50).css(0));        // #FF8080
* console.log(red.chroma(-30, true).css(0));  // #FFCCCC
* @example
* var c = 'black,pink,gray,green,white'.split(',').map(Color);
* var l = c.length;
* for(; l--;) {
*     console.log(c[l].css(0) + ' - HSL: ' + c[l].saturation().toFixed() + ' HSV: ' + c[l].chroma().toFixed()); 
* }
* // #FFFFFF - HSL:   0  HSV:   0
* // #008000 - HSL: 100  HSV: 100
* // #808080 - HSL:   0  HSV:   0
* // #FFC0CB - HSL: 100  HSV:  25
* // #000000 - HSL:   0  HSV:   0
*/

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
* @param {boolean}  relative.false  - 绝对赋值。将分量 (通道) 值直接设置为 value
* @param {boolean}  relative.true   - 增量赋值。将当前的分量 (通道) 值增加 value
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

/**
* 基于指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 获取或设置 Color 对象的色彩值。
* @see {@link Color#opacity}
* @see {@link Color#value}
* @access public
* @func Color.prototype.color
* @param {string} space - 指定 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 名称。
* @param {string|array} [data] - 任何符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的字符串，或符合由 space 参数指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 的命名分量顺序的色值数组。如果省略此参数，则将当前色彩值转换至由 space 参数指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 并返回。否则将根据本参数修改当前 Color 对象的色彩值，并返回当前 Color 对象。
* @returns {Color|array}
* @example
* var color = new Color('rgb(255, 0, 0, 0.5)');
* console.log(color.css(2));   // hsla(0,100%,50%,0.5)
* 
* color.color('hsl',  [ 0, 100, 50 ]).opacity(22);
* console.log(color.css(1));   // rgba(255,0,0,0.22)
* @example
* var color = new Color('rgba(200, 50, 0, 0.3)');
* var c = 'hsl,hsv,hwb,cmy,cmyk,lab,yuv,yiq,lch,ciexyz'.split(',');
* var l = c.length;
* for(; l--;) {
*     console.log(c[l] + ' : ' + 
*     color.color(c[l] ).map(Math.round) + ' -> rgb : ' + 
*     color.color('rgb').map(Math.round));
* }
* // ciexyz :  25,  15,   1      -> rgb : 200, 50, 0
* // lch    :  45,  81,  45      -> rgb : 200, 50, 0
* // yiq    :   0,   0,   0      -> rgb : 200, 50, 0
* // yuv    :  89,  77, 206      -> rgb : 200, 50, 0
* // lab    :  45,  57,  57      -> rgb : 200, 50, 0
* // cmyk   :   0,  75, 100,  22 -> rgb : 200, 50, 0
* // cmy    :  22,  80, 100      -> rgb : 200, 50, 0
* // hwb    :  15,   0,  22      -> rgb : 200, 50, 0
* // hsv    :  15, 100,  78      -> rgb : 200, 50, 0
* // hsl    :  15, 100,  39      -> rgb : 200, 50, 0
*/

/**
* 判断指定 Color 对象的色彩值与当前 Color 对象的色彩值是否相等。
* @see {@link Color#clone}
* @access public
* @func Color.prototype.equal
* @param {Color|string} color - 要与当前 Color 对象作比较的  Color 对象，或者任何符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的样式表字符串。
* @returns {boolean}
* @example
* var color1 = Color('hsla(300, 30%, 3%, 0.3)');
* var color2 = Color('rgba(10,5,10)');
* console.log(color1.equal(color2));   // false
* 
* color2.opacity(30);
* console.log(color1.equal(color2));   // true
* 
* color1.opacity(50);
* console.log(color1.equal(color2));   // false
*/

/**
* 创建当前 Color 对象的一个等值副本。
* @see {@link Color#equal}
* @access public
* @func Color.prototype.clone
* @returns {Color}
* @example
* var color1 = Color('hsla(300, 30%, 3%, 0.3)');
* var color2 = color1.clone();
* 
* console.log(color1.equal(color2));   // true
* console.log(color1  ===  color2 );   // false
*/

/**
* 计算出与当前 Color 对象色值最接近的 {@link http://en.wikipedia.org/wiki/Web_colors#Web-safe_colors|216 Web-safe} 色值或 {@link http://cloford.com/resources/colours/websmart1.htm|4096 Web-Smart} 色值。
* @see {@link Color#css}
* @see {@link http://en.wikipedia.org/wiki/Web_colors}
* @see {@link http://cloford.com/resources/colours/websmart1.htm}
* @access public
* @func Color.prototype.web
* @param {boolean} [smart=false]
* @param {boolean}  smart.false - 调整至 216 色的 {@link http://en.wikipedia.org/wiki/Web_colors#Web-safe_colors|Web-safe} 色盘。
* @param {boolean}  smart.true  - 调整至 4096 色的 {@link http://cloford.com/resources/colours/websmart1.htm|Web-Smart} 色盘。
* @param {boolean} [obj=false]
* @param {boolean}  obj.false - 直接返回 \#RRGGBB 的样式表格式值。
* @param {boolean}  obj.true  - 返回完整 Color 对象。
* @returns {Color|string}
* @example
* var color = new Color('#CD1289');
* console.log(color.web());                    // #CC0099
* console.log(color.web(true));                // #CC1188
* console.log(color.web(true, true).css(0));   // #CC1188
* 
* var color = new Color('hsla(108, 33%, 88%, 0.5)');
* console.log(color.web());                    // #CCFFCC
* console.log(color.web(true));                // #DDEEDD
* console.log(color.web(true, true).css(0));   // #DDEEDD
*/

/**
* 计算出当前 Color 对象色值的 {@link http://www.w3.org/TR/WCAG20/#relativeluminancedef|亮度} 值。范围为 0 - 1 。亮度最高为 1 (白色)，亮度最低为 0 (黑色)。
* @see {@link Color#contrast}
* @see {@link Color#difference}
* @see {@link http://www.w3.org/TR/WCAG20/#relativeluminancedef}
* @access public
* @func Color.prototype.luminance
* @param {boolean} [gamma=true] - 是否使用 {@link http://en.wikipedia.org/wiki/Gamma_correction|伽马校正} 。
* @returns {number} 
* @example
* console.log(Color('#000').luminance());   // 0
* console.log(Color('#FFF').luminance());   // 1
* console.log(Color('#F00').luminance());   // 0.2126
* @example
* console.log(Color('hsl(90, 90%, 50%)').luminance( ));   // 0.7893499999999999
* console.log(Color('hsl(90, 90%, 50%)').luminance(0));   // 0.6823211883804896
* console.log(Color('hsl(90, 90%, 50%)').luminance(1));   // 0.7893499999999999
*/

/**
* 计算出当前 Color 对象色值与指定颜色的 {@link http://www.w3.org/TR/WCAG20/#contrast-ratiodef|对比度} 值。由低到高值范围为 0 - 21 。
* @see {@link Color#difference}
* @see {@link http://www.w3.org/TR/WCAG20/#contrast-ratiodef}
* @access public
* @func Color.prototype.contrast
* @param {Color} [color]
* @returns {number} 
* @example
* var color = new Color('#F00');
* console.log(color.contrast('#000'));   //  5.252
* console.log(color.contrast('#FFF'));   //  3.9984767707539985
* 
* var color = new Color('#000');
* console.log(color.contrast('#000'));   //  1
* console.log(color.contrast('#FFF'));   // 21
*/

/**
* 计算出当前 Color 对象色值与指定颜色的对比度。结果作为数组返回，所包含数值依次为亮度反差、色值反差、可分辨度。可分辨度由低到高值范围为 0 - 2 。
* @see {@link Color#contrast}
* @see {@link http://www.w3.org/WAI/ER/WD-AERT/#color-contrast}
* @access public
* @func Color.prototype.difference
* @param {Color} [color]
* @returns {array} 
* @example
* var c = [ 'white', 'darkgray', 'darkred', 'orange', 'black' ].map(Color);
* var l = c.length, a, b, d;
* for(; l--;) {
*     a = c[l];
*     b = c[ l ? l - 1 : c.length - 1 ];
*     d = a.difference(b).map(Math.round);
*     console.log(a.css(0) + ' - ' + b.css(0) + ' = ' + d);
* }
* // #000000 - #FFA500 = 173, 420, 1
* // #FFA500 - #8B0000 = 132, 281, 1
* // #8B0000 - #A9A9A9 = 127, 368, 1
* // #A9A9A9 - #FFFFFF =  86, 258, 0
* // #FFFFFF - #000000 = 255, 765, 2
*/

/**
* 计算出当前 Color 对象色值的 {@link http://en.wikipedia.org/wiki/Complementary_colors|补色}，作为新 Color 对象返回。
* @see {@link Color#invert}
* @see {@link http://en.wikipedia.org/wiki/Complementary_colors}
* @access public
* @func Color.prototype.complement
* @returns {Color} 
* @example
* console.log(Color('#000').complement().css(0));   // #000000
* console.log(Color('#FFF').complement().css(0));   // #FFFFFF
* console.log(Color('#F00').complement().css(0));   // #00FFFF
* console.log(Color('#0F0').complement().css(0));   // #FF00FF
* console.log(Color('#00F').complement().css(0));   // #FFFF00
* @example
* var c = Color('#80F20D');
* console.log(c.invert().equal(c.complement()));   // true
* var c = Color('#000000');
* console.log(c.invert().equal(c.complement()));   // false
*/

/**
* 计算出当前 Color 对象色值的 {@link http://en.wikipedia.org/wiki/Complementary_colors|反色}，作为新 Color 对象返回。
* @see {@link Color#complement}
* @access public
* @func Color.prototype.invert
* @returns {Color} 
* @example
* console.log(Color('#000').invert().css(0));   // #FFFFFF
* console.log(Color('#FFF').invert().css(0));   // #000000
* console.log(Color('#F00').invert().css(0));   // #00FFFF
* console.log(Color('#0F0').invert().css(0));   // #FF00FF
* console.log(Color('#00F').invert().css(0));   // #FFFF00
* @example
* var c = Color('#80F20D');
* console.log(c.invert().equal(c.complement()));   // true
* var c = Color('#000000');
* console.log(c.invert().equal(c.complement()));   // false
*/

/**
* 将当前 Color 对象色值转换为怀旧效果的棕褐色系内色值，作为新 Color 对象返回。
* @see {@link Color#greyscale}
* @see {@link http://en.wikipedia.org/wiki/Sepia_%28color%29}
* @access public
* @func Color.prototype.sepia
* @returns {Color} 
* @example
* console.log(Color('#000').sepia().css(0));   // #000000
* console.log(Color('#FFF').sepia().css(0));   // #FFFFEF
* console.log(Color('#F00').sepia().css(0));   // #645945
* console.log(Color('#0F0').sepia().css(0));   // #C4AF88
* console.log(Color('#00F').sepia().css(0));   // #302B21
*/

/**
* 将当前 Color 对象色值转换为 {@link http://en.wikipedia.org/wiki/Grayscale|灰度} 值，作为新 Color 对象返回。
* @see {@link Color.grayscale}
* @see {@link Color#luminance}
* @see {@link Color#saturation}
* @see {@link Color#sepia}
* @access public
* @func Color.prototype.greyscale
* @param {number} [algorithm=0]
* @param {number}  algorithm.0 - 默认算法。
* @param {number}  algorithm.1 - 基于 {@link Color#luminance|luminance} 方法的算法。
* @param {number}  algorithm.2 - 基于 {@link Color#luminance|luminance} 方法但不使用 {@link http://en.wikipedia.org/wiki/Gamma_correction|伽马校正} 的算法。
* @param {number}  algorithm.3 - 简单的调用 {@link Color#saturation|saturation} 方法去饱和度的算法。
* @returns {Color} 
* @example
* var c = Color('hsl(90, 90%, 50%)');
* console.log(c.greyscale(3).css(1));   // rgb(128,128,128)
* console.log(c.greyscale(2).css(1));   // rgb(201,201,201)
* console.log(c.greyscale(1).css(1));   // rgb(174,174,174)
* console.log(c.greyscale( ).css(1));   // rgb(183,183,183)
* @example
* var c = '#000,#FFF,#F00,#0F0,#00F'.split(',').map(Color);
* var l = c.length, r;
* while(l--) {
*     r = c[l].css(0) + ' -> ';
*     for(var i = 4; i--;) r+= ' ' + i + ' : ' + c[l].greyscale(i).css(0);
*     console.log(r);
* }
* // #0000FF ->   3 : #808080   2 : #121212   1 : #121212   0 : #1C1C1C
* // #00FF00 ->   3 : #808080   2 : #B6B6B6   1 : #B6B6B6   0 : #969696
* // #FF0000 ->   3 : #808080   2 : #363636   1 : #363636   0 : #4D4D4D
* // #FFFFFF ->   3 : #FFFFFF   2 : #FFFFFF   1 : #FFFFFF   0 : #FFFFFF
* // #000000 ->   3 : #000000   2 : #000000   1 : #000000   0 : #000000
*/

/**
* 将当前 Color 对象色值按指定比例与另一种色彩混合，将混色结果作为新 Color 对象返回。
* @see {@link Color#blend}
* @see {@link Color#shade}
* @see {@link Color#tint}
* @access public
* @func Color.prototype.mix
* @param {Color|string} color - 要与之混色的另一种颜色。
* @param {number} [weight=50] - 当前颜色在混色结果中所占的比重。取值范围为 0 -100 。
* @param {boolean} [alpha=false] - 是否将 {@link Color#alpha|alpha} 通道的不透明度值也纳入混色计算。
* @returns {Color} 
* @example
* console.log(Color('#F00').mix('#00F').css(0));   // #800080
* @example
* var c1 = Color('rgb(100,0,0)');
* var c2 = Color('rgba(0,100,0,0.5)');
* console.log(c1.mix(c2).css(1));             // rgb(50,50,0)
* console.log(c1.mix(c2, 50).css(1));         // rgb(50,50,0)
* console.log(c1.mix(c2, 50, true).css(1));   // rgba(75,25,0,0.75)
*/

/**
* 将当前 Color 对象色值按指定算法与另一种色彩混合，将混合结果作为新 Color 对象返回。
* @see {@link Color#blendings}
* @see {@link Color#mix}
* @see {@link http://en.wikipedia.org/wiki/Blend_modes}
* @access public
* @func Color.prototype.blend
* @param {Color|string} color - 要与之混合的另一种颜色。
* @param {string|function} mode - 提供混合算法的自定义回调函数，或字符串指定的预定义混合方法名称，详见 {@link Color#blendings|blendings} 。
* @returns {Color} 
* @example
* console.log(Color('#F00').mix('#00F').css(0));   // #800080
* @example
* var c1 = Color('rgb(100,0,0)');
* var c2 = Color('rgba(0,100,0,0.5)');
* console.log(c1.mix(c2).css(1));             // rgb(50,50,0)
* console.log(c1.mix(c2, 50).css(1));         // rgb(50,50,0)
* console.log(c1.mix(c2, 50, true).css(1));   // rgba(75,25,0,0.75)
*/



/*--------------------------------------------*/
/*--------------------------------------------*/



/**
* 供 {@link Color#blend|blend} 方法使用的预定义算法集合 。
* @see {@link Color#blend}
* @access public
* @namespace Color.blendings
*/

