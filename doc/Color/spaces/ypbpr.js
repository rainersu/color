/**
* @access public
* @var {object} Color.spaces.ypbpr
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'ypbpr', x = Color([ 222, 33, 88 ], a);
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));  // rgb : 222 , 33 , 88  -  ypbpr : 77.2 , 10.8 , 144.8
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));  // ypbpr : 77.2 , 10.8 , 144.8  -  rgb : 222 , 33 , 88
*/