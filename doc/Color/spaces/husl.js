/**
* @access public
* @see {@link Color.spaces.huslp}
* @see {@link http://www.husl-colors.org/}
* @var {object} Color.spaces.husl
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'husl', x = Color([ 222, 33, 88 ], a);
* 
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));
* 
* // rgb : 222 , 33 , 88  -  hsl : 342.5 , 74.1 , 50
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));
* 
* // hsl : 342.5 , 74.1 , 50  -  rgb : 222 , 33 , 88
*/