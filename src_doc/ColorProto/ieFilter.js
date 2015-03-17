/**
* 从一个 Color 对象转换出 {@link https://msdn.microsoft.com/en-US/library/ms530752.aspx|-ms-filter} 所使用的 {@link https://msdn.microsoft.com/en-us/library/ms532861%28v=vs.85%29.aspx|#AARRGGBB} 格式的 CSS 属性值。
* @see {@link Color#css}
* @see {@link Color#toJSON}
* @see {@link Color#toString}
* @see {@link https://msdn.microsoft.com/en-US/library/ms532853.aspx|Windows Internet Explorer Visual Filters and Transitions Reference}
* @access public
* @func Color.prototype.ieFilter
* @returns {string}
* @example
* var tiffanyblue = Color('#60DFE5');
* console.log(tiffanyblue.ieFilter());  // #FF60DFE5
* @example
* console.log(Color('rgba(96,223,229,0.5)').ieFilter());  // #7F60DFE5
*/