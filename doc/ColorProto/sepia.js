/**
* 将当前 Color 对象色值转换为怀旧效果的棕褐色系内色值，作为新 Color 对象返回。
* @see {@link Color#greyscale}
* @see {@link http://en.wikipedia.org/wiki/Sepia_%28color%29}
* @access public
* @func Color.prototype.sepia
* @returns {Color} 
* @example
* console.log(Color('#000').sepia().css(0));   // #000000
* console.log(Color('#FFF').sepia().css(0));   // #FFFFEF
* console.log(Color('#F00').sepia().css(0));   // #645945
* console.log(Color('#0F0').sepia().css(0));   // #C4AF88
* console.log(Color('#00F').sepia().css(0));   // #302B21
*/