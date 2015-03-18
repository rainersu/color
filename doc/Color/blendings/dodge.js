/**
* @access public
* @var {function} Color.blendings.dodge
* @example
* var c = '#F60';
* var f = 'dodge';
* var a = Color(c);
* [ '#000', '#F00', '#0F0', '#00F', '#FFF' ].map(function (i) {
*     var b = Color(i);
*     console.log(c + ' + ' + i + ' = ' + a.blend(b, f).css(0));
* });
* // #F60 + #000 = #FF0000
* // #F60 + #F00 = #FF0000
* // #F60 + #0F0 = #FFFF00
* // #F60 + #00F = #FF00FF
* // #F60 + #FFF = #FFFFFF
*/