/**
* @access public
* @var {object} Color.spaces.hunterlab
* @example
* function f (x, a) {
*     return x.color(a).map(function (i) { return +i.toFixed(1); }).join(' , ');
* }
* var a = 'rgb', b = 'hunterlab', x = Color('#60DFE5');
* console.log(a + ' : ' + f(x, a) + '  -  ' + b + ' : ' + f(x, b));  // rgb : 96 , 223 , 229  -  hunterlab : 78 , -32.9 , -8.8
* 
* x = Color(x.color(b), b);
* console.log(b + ' : ' + f(x, b) + '  -  ' + a + ' : ' + f(x, a));  // hunterlab : 78 , -32.9 , -8.8  -  rgb : 96 , 223 , 229
*/