/**
* @access public
* @var {object} Color.spaces.ydbdr
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'ydbdr', x = Color('#60DFE5');
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));  // rgb : 96 , 223 , 229  -  ydbdr : 0.7 , 0.3 , 0.7
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));  // ydbdr : 0.7 , 0.3 , 0.7  -  rgb : 96 , 223 , 229
*/