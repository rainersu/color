/**
* @access public
* @var {object} Color.spaces.ycgco
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'ycgco', x = Color('#60DFE5');
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));  // rgb : 96 , 223 , 229  -  ycgco : 0.8 , 0.1 , -0.3
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));  // ycgco : 0.8 , 0.1 , -0.3  -  rgb : 96 , 223 , 229
*/