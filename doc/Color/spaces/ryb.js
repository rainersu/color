/**
* @access public
* @var {object} Color.spaces.ryb
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'ryb', x = Color('#60DFE5');
* 
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));
* 
* // rgb : 96 , 223 , 229  -  ryb : 96 , 161 , 229
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));
* 
* // ryb : 96 , 161 , 229  -  rgb : 96 , 223 , 229
*/