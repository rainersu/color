/**
* @access public
* @var {function} Color.blendings.average
* @example
* var c = '#F60';
* var f = 'average';
* var a = Color(c);
* [ '#000', '#F00', '#0F0', '#00F', '#FFF' ].map(function (i) {
*     var b = Color(i);
*     console.log(c + ' + ' + i + ' = ' + a.blend(b, f).css(0));
* });
* // #F60 + #000 = #803300
* // #F60 + #F00 = #FF3300
* // #F60 + #0F0 = #80B300
* // #F60 + #00F = #803380
* // #F60 + #FFF = #FFB380
*/