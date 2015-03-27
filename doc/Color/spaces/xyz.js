/**
* @access public
* @var {object} Color.spaces.xyz
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'xyz', x = Color([ 222, 33, 88 ], a);
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));  // rgb : 222 , 33 , 88  -  xyz : 32.4 , 17.3 , 10.9
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));  // xyz : 32.4 , 17.3 , 10.9  -  rgb : 222 , 33 , 88
*/