/**
* 将一个 Gradient 对象处理为 JSON 字符串。转化结果为 {@link https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_gradients|CSS Gradient} 语法描述格式。
* @see {@link Gradient#toString}
* @see {@link Gradient#css}
* @access public
* @func Gradient.prototype.toJSON
* @returns {string}
* @example
* var rad = new Gradient([ 'black', '#60DFE5', 'white' ], [ -0.2, 0.1, 0.2 ]);
* 
* console.log(rad.toJSON());          // linear-gradient(0deg, rgb(0,0,0), rgb(96,223,229) 75%, rgb(255,255,255))
* console.log(JSON.stringify(rad));   // linear-gradient(0deg, rgb(0,0,0), rgb(96,223,229) 75%, rgb(255,255,255))
*/