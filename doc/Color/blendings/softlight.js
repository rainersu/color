/**
* @access public
* @var {function} Color.blendings.softlight
* @example
* var c = '#F60';
* var f = 'softlight';
* var a = Color(c);
* [ '#000', '#F00', '#0F0', '#00F', '#FFF' ].map(function (i) {
*     var b = Color(i);
*     console.log(c + ' + ' + i + ' = ' + a.blend(b, f).css(0));
* });
* // #F60 + #000 = #FF2900
* // #F60 + #F00 = #FF2900
* // #F60 + #0F0 = #FFA100
* // #F60 + #00F = #FF2900
* // #F60 + #FFF = #FFA100
*/