/**
* 从一个 Gradient 对象转换出 {@link https://msdn.microsoft.com/en-US/library/ms530752.aspx|-ms-filter} 所使用的 {@link https://msdn.microsoft.com/en-us/library/ms532997(VS.85,loband).aspx|Gradient Filter} 格式的 CSS 属性值。
* @see {@link Gradient#ieFilter}
* @see {@link https://msdn.microsoft.com/en-US/library/ms532853.aspx|Windows Internet Explorer Visual Filters and Transitions Reference}
* @access public
* @func Gradient.prototype.ieFilter
* @param {boolean} [horizontal=false]
* @param {boolean}  horizontal.false  - 定义水平线性渐变。
* @param {boolean}  horizontal.true   - 定义垂直线性渐变。
* @returns {string}
* @example
* var rad = new Gradient('black', '#60DFE5');
* 
* console.log(rad.ieFilter());
* 
* // progid:DXImageTransform.Microsoft.gradient(enabled="true", startColorstr="#FF000000", endColorstr="#FF60DFE5", gradientType="0")
* 
* console.log(rad.ieFilter(true));
* 
* // progid:DXImageTransform.Microsoft.gradient(enabled="true", startColorstr="#FF000000", endColorstr="#FF60DFE5", gradientType="1")
*/