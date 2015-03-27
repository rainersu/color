/**
* @access public
* @var {object} Color.spaces.cmy
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'cmy', x = Color([ 222, 33, 88 ], a);
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));  // rgb : 222 , 33 , 88  -  cmy : 12.9 , 87.1 , 65.5
*
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));  // cmy : 12.9 , 87.1 , 65.5  -  rgb : 222 , 33 , 88
*/