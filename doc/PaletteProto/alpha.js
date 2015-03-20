/**
* 为当前 Palette 对象可能调配出的任何色彩统一指定默认的不透明度。取值范围从完全透明到完全不透明为 0 -100 。本属性值不会受添加到调色板的任何色彩的 {@link Color#alpha|alpha} 值的影响。
* @see {@link Color#opacity}
* @access public
* @var {number} [Palette.prototype.alpha=100]
* @example
* var pat = new Palette([ 'rgba(0, 0, 0, 0.2)', 'hsla(300, 66%, 88%, 0.7)' ], [ 1, 2 ], 100);
* 
* console.log(pat.alpha);             // 100
* console.log(pat.mix().opacity());   // 100
*/