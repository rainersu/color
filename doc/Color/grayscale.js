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