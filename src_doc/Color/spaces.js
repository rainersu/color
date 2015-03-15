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