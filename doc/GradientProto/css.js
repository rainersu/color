/**
* 将当前 Gradient 对象转换为 {@link https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_gradients|CSS Gradient} 定义文本。
* @see {@link Color#css}
* @see {@link Palette#css}
* @access public
* @func Gradient.prototype.css
* @param {boolean} [radial=false] - 指定渐变模式。
* @param {boolean}  radial.false  - 线性渐变 ({@link https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient|linear-gradient}) 。
* @param {boolean}  radial.true   - 辐射渐变 ({@link https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient|radial-gradient}) 。
* @param {string}  [angle=0deg] - 指定渐变的角度值或方向定义。
* @param {boolean} [opaque=false]
* @param {boolean}  opaque.false  - 忽略 {@link Palette#alpha|alpha} 通道值。将色彩值一概输出为 #RRGGBB 格式。
* @param {boolean}  opaque.true   - 保留 {@link Palette#alpha|alpha} 通道值。将色彩值输出为 rgba(R, G, B, A) 格式。
* @returns {string}
* @example
* var rad = new Gradient([ 'black', '#60DFE5', 'white' ], [ -0.2, 0.1, 0.2 ]);
* 
* console.log(rad.css());
* // linear-gradient(0deg, rgb(0,0,0), rgb(96,223,229) 75%, rgb(255,255,255))
* 
* console.log(rad.css(true, '3rad', true));
* // radial-gradient(3rad, #000000, #60DFE5 75%, #FFFFFF)
*/