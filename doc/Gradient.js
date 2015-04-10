/**
* 色彩渐变类。使用本类，你可以基于自由定义的起点、终点、不限数量的里程碑，组合创建出任意符合你需求的可自由伸缩的色彩变化路径，并方便地管理和使用此路径，譬如为网页创建色彩渐变动画，或用于色彩过渡调节组件。
* @class Gradient
* @see {@link Color}
* @see {@link Palette}
* @see {@link http://www.webcore-it.com/colorful-background/}
* @param {Color[]} colors - 为色彩渐变路径定义起点、终点和里程碑 (Color-Stop Point) 的数组。可以使用 {@link Color} 对象也可以是符合 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准定义格式的字符串。
* @param {number[]} [points] - 依次序为 `colors` 声明的每种色彩定义其在渐变路径上的坐标取值。如果省略此参数，则所有里程碑会在映射为 `0 -100` 取值范围的路径上等量均衡分配。
* @example
* var tiffanyblue = new Color('#60DFE5');
* var rad = new Gradient('rgb(0, 0, 0, 0.5)', tiffanyblue, 'white');
* for(var l = 100; l > -1; l-= 25) console.log(rad.scale(l).css( ));
* 
* // rgb(255,255,255)
* // rgb(176,239,242)
* // rgb( 96,223,229)
* // rgba(48,112,115,0.75)
* // rgba( 0,  0,  0,0.5 )
* @example
var rad = new Gradient([ 'black', '#60DFE5', 'white' ], [ -0.2, 0.1, 0.2 ]);
for(var l = 0.2; l >= -0.2; l-= 0.1) console.log(rad.scale(l).css(0));
* 
* // #FFFFFF
* // #60DFE5
* // #409599
* // #204A4C
* // #000000
*/