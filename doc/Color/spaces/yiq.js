/**
* @access public
* @var {object} Color.spaces.yiq
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'yiq', x = Color([ 222, 33, 88 ], a);
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));  // rgb : 222 , 33 , 88  -  yiq : 0.4 , 0.4 , 0.2
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));  // yiq : 0.4 , 0.4 , 0.2  -  rgb : 221.9 , 33.1 , 87.7
*/