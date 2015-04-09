# [sumi-color](https://www.npmjs.com/package/sumi-color)
A standalone JavaScript library for all kinds of color manipulations. Tiny but powerful. 


Target environments
-------------------

- IE 6+
- Latest Stable: Firefox, Chrome, Safari, Opera
- [Node.js](https://nodejs.org/)

There is no doubt that you can also use this library in browser extensions and other non-browser environments, such as [Rhino](https://github.com/mozilla/rhino) or [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey?redirectlocale=en-US&redirectslug=SpiderMonkey).

Features
--------

- Seamless conversion between dozens of color space(rgb, ryb, hsl, hsv, hwb, cmy, cmyk, yiq, yuv, xyz, xyy, luv, lab, lch, etc..) and CSS keywords. It caches conversions.
- Color Instances have getters/setters for all channels(red, green, blue, hue, saturation, lightness, opacity, blackness, whiteness, etc..) in all supported colorspaces. 
- Many useful classes and methods: Gradient, Palette, tint, shade, tone, color blending and color scale, luminance and color difference calculator, scheme generator, etc.
- So powerful but ridiculously tiny. It has no dependencies. The entire set of modules clocks in at ` 8kb ` minified and gzipped. 
- Lots more. Take a look at the documentation immediately.

Quick start
-----------

Four quick start options are available:

- [Download the latest release](https://github.com/rainersu/color/archive/v1.0.6.zip)
- Clone the repo: `git clone https://github.com/rainersu/color.git`
- Install with [Bower](http://bower.io): `bower install sumi-color`
- Install with [npm](https://www.npmjs.com): `npm install sumi-color`

Example use
-----------

Including in a browser:

```html
<script type='text/javascript' src='/path/to/sumi-color-1.0.6.min.js'></script>
<script type='text/javascript'>
var Color = sumiColor.Color;
var tiffanyblue = new Color('#60DFE5');

window.alert(tiffanyblue.css(2, true));   // hsla(183, 72%, 64%, 1)

</script>
```

As a module that works with AMD(e.g., [RequireJS](http://requirejs.org/)):

```JavaScript
define(['/path/to/sumi-color'], function(sumiColor) {
    var Gradient = sumiColor.Gradient;
	var rad = new Gradient([ 'black', '#60DFE5', 'white' ], [ -0.2, 0.1, 0.2 ]);

	console.log(rad.css());
	
	// linear-gradient(0deg, rgb(0, 0, 0), rgb(96, 223, 229) 75%, rgb(255, 255, 255))

});
```

Including in a CommonJS environment(e.g., [Node.js](https://nodejs.org/)):

```JavaScript
var Color = require('/path/to/sumi-color').Color;
var pat = new Palette([ '#FFF', '#000', '#60DFE5' ], [ 1, 2, 3 ], 22);

console.log(pat.css());   // rgba(91, 154, 157, 0.22)
```

Build from source
-----------------

First, you need to have [Node.js](https://nodejs.org/) and [Grunt](http://gruntjs.com/) installed.

```Shell
$ git clone git@github.com:rainersu/color.git
$ npm install -g grunt-cli
$ cd color
$ npm install
$ grunt
```

It provides compiled JS (`sumi-color.*`), as well as compiled and minified JS (`sumi-color.min.*`). JS [source maps](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors) (`sumi-color.*.map`) are available for use with certain browsers' developer tools.

Running demos for testing
-------------------------

```Shell
$ grunt test
```

Build & running documentation locally
-------------------------------------

```Shell
$ grunt help
```

Sorry, the documentation is currently offered only in the Chinese language. Do you have time to help me with some Chinese - English translations?

How to contact me
-----------------

- [rainersu@foxmail.com](mailto:rainersu@foxmail.com)
- [http://cn.linkedin.com/in/rainersu](http://cn.linkedin.com/in/rainersu)
- [http://site.douban.com/185696/](http://site.douban.com/185696/)
- [http://rainersu.github.io](http://rainersu.github.io)
- ``QQ: 2627001536``

Copyright and license
---------------------

Copyright 2015 [Rainer Su](mailto:rainersu@foxmail.com) ([苏昱](http://cn.linkedin.com/in/rainersu)).

Code and documentation is free to use under the [BSD license](https://github.com/rainersu/color/blob/master/LICENSE.md).
