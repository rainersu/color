/**
* @access public
* @var {function} Color.blendings.subtractive
* @example
* var c = '#F60';
* var f = 'subtractive';
* var a = Color(c);
* [ '#000', '#F00', '#0F0', '#00F', '#FFF' ].map(function (i) {
*     var b = Color(i);
*     console.log(c + ' + ' + i + ' = ' + a.blend(b, f).css(0));
* });
* // #F60 + #000 = #000000
* // #F60 + #F00 = #FF0000
* // #F60 + #0F0 = #006600
* // #F60 + #00F = #000000
* // #F60 + #FFF = #FF6600
*/