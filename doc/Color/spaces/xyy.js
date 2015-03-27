/**
* @access public
* @var {object} Color.spaces.xyy
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'xyy', x = Color([ 222, 33, 88 ], a);
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));  // rgb : 222 , 33 , 88  -  xyy : 0.5 , 0.3 , 17.3
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));  // xyy : 0.5 , 0.3 , 17.3  -  rgb : 222 , 33 , 88
*/