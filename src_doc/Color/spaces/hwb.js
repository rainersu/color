/**
* @access public
* @var {object} Color.spaces.hwb
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'hwb', x = Color([ 222, 33, 88 ], a);
* 
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));
* 
* // rgb : 222 , 33 , 88  -  hwb : 342.5 , 12.9 , 12.9
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));
* 
* // hwb : 342.5 , 12.9 , 12.9  -  rgb : 222 , 33 , 88
*/