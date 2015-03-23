/**
* @access public
* @var {object} Color.spaces.luv
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'luv', x = Color([ 222, 33, 88 ], a);
* 
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));
* 
* // rgb : 222 , 33 , 88  -  luv : 48.7 , 127.5 , 7.3
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));
* 
* // luv : 48.7 , 127.5 , 7.3  -  rgb : 222 , 33 , 88
*/