/**
* @access public
* @var {function} Color.blendings.subtract
* @example
* var c = '#F60';
* var f = 'subtract';
* var a = Color(c);
* [ '#000', '#F00', '#0F0', '#00F', '#FFF' ].map(function (i) {
*     var b = Color(i);
*     console.log(c + ' + ' + i + ' = ' + a.blend(b, f).css(0));
* });
* // #F60 + #000 = #FF6600
* // #F60 + #F00 = #006600
* // #F60 + #0F0 = #FF0000
* // #F60 + #00F = #FF6600
* // #F60 + #FFF = #000000
*/