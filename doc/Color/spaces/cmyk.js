/**
* @access public
* @var {object} Color.spaces.cmyk
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'cmyk', x = Color([ 222, 33, 88 ], a);
* 
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));
* 
* // rgb : 222 , 33 , 88  -  cmyk : 0 , 85.1 , 60.4 , 12.9
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));
* 
* // cmyk : 0 , 85.1 , 60.4 , 12.9  -  rgb : 222 , 33 , 88
*/