/**
* 调色板类。提供使用任意种基色按任意指定比例混合调色的功能。
* @class Palette
* @see {@link Color}
* @see {@link Gradient}
* @param {Color[]} colors - 为调色板定义基色的数组。可以使用 {@link Color} 对象也可以是符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的字符串。
* @param {number[]} [ratios] - 依次序为 colors 里每种基色定义份量的数组。注意是份量而非比例，各基色的实际比例等于份量 / 总份量。如果省略此参数则所有基色都默认为 1 份。
* @param {number}  [alpha=100] - 不透明度。参见 {@link Palette#alpha|alpha}
* @example
* var tiffanyblue = '#60DFE5';
* var pat = new Palette([ '#FFF', '#000', tiffanyblue ], [ 1, 2, 3 ], 22);
* 
* console.log(pat.css(1));      // rgba( 91,154,157,0.22)
* 
* pat.stuff('white', 1, true);
* console.log(pat.css(1));      // rgba(114,168,171,0.22)
* 
* pat.stuff('white', -2, true);
* pat.stuff('black', -2, true);
* console.log(pat.css(0) === tiffanyblue);       // true   
* @example
* var pat = new Palette();
* 
* console.log(pat.css(0));                         // #000000
* 
* console.log(pat.stuff('#000').css(0));           // #000000
* console.log(pat.stuff('#000', 1, true).css(0));  // #000000
* 
* console.log(pat.stuff('#FFF', 1).css(0));        // #555555
* console.log(pat.stuff('#FFF', 1, true).css(0));  // #808080
* 
* console.log(pat.stuff('#000', 0).css(0));        // #FFFFFF
* console.log(pat.stuff('#FFF', 0).css(0));        // #000000
* 
* console.log(pat.stuff('#60DFE5', 1).css(0));     // #60DFE5
*/