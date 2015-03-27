/**
* @access public
* @var {object} Color.spaces.ycbcr
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'ycbcr', x = Color([ 222, 33, 88 ], a);
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));  // rgb : 222 , 33 , 88  -  ycbcr : 95.8 , 123.6 , 218
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));  // ycbcr : 95.8 , 123.6 , 218  -  rgb : 222 , 33 , 88
*/