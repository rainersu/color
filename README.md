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

- Seamless conversion between dozens of color space(rgb, ryb, hsl, hsv, hwb, cmyk, yiq, yuv, xyz, luv, lab, lch, etc..) and CSS keywords. It caches conversions.
- Color Instances have getters/setters for all channels(red, green, blue, hue, saturation, lightness, opacity, blackness, whiteness, etc..) in all supported colorspaces. 
- Many useful classes and methods: Gradient, Palette, tint, shade, tone, color blending and color scale, luminance and color difference calculator, scheme generator, etc.
- So powerful but ridiculously tiny. It has no dependencies. The entire set of modules clocks in at ` 8kb ` minified and gzipped. 
- Lots more. Take a look at the docs.

Example use
-----------

Including in a browser:

```html
<script type='text/javascript' src='/path/to/sumi-color-1.0.0.min.js'></script>
<script type='text/javascript'>
var Color = sumiColor.Color;
var tiffanyblue = new Color('#60DFE5');
window.alert(tiffanyblue.css(2, true));
</script>
```

As a module that works with AMD(e.g., [RequireJS](http://requirejs.org/)):

```bash
define(['/path/to/sumi-color'], function(sumiColor) {
    var Color = sumiColor.Color;
    var tiffanyblue = new Color('#60DFE5');
    window.alert(tiffanyblue.css(2, true));
});
```

Including in a CommonJS environment(e.g., [Node.js](https://nodejs.org/)):

```bash
var Color = require('/path/to/sumi-color').Color;
var tiffanyblue = new Color('#60DFE5');
console.log(tiffanyblue.css(2,  true));
```

Build from source
-----------------

First, you need to have [Node.js](https://nodejs.org/) and [Grunt](http://gruntjs.com/) installed.

```bash
$ git clone git@github.com:rainersu/color.git
$ npm install -g grunt-cli
$ cd color
$ npm install
$ grunt
```

It provides compiled JS (`sumi-color.*`), as well as compiled and minified JS (`sumi-color.min.*`). JS [source maps](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors) (`sumi-color.*.map`) are available for use with certain browsers' developer tools.

Running demos for testing
-------------------------

```bash
$ grunt test
```

Build & running documentation locally
-------------------------------------

```bash
$ grunt help
```

Sorry, the documentation is currently offered only in the Chinese language. Do you have time to help me with some Chinese - English translations?

How to contact me
-----------------

- [rainersu@foxmail.com](mailto:rainersu@foxmail.com)
- [http://cn.linkedin.com/in/rainersu](http://cn.linkedin.com/in/rainersu)
- [https://www.npmjs.com/~rainersu](https://www.npmjs.com/~rainersu)
- [http://rainersu.github.io](http://rainersu.github.io)
- [http://weibo.com/rainersu](http://weibo.com/rainersu)
- ``QQ: 2627001536``

Copyright and license
---------------------

Copyright 2015 [Rainer Su](mailto:rainersu@foxmail.com) ([苏昱](http://cn.linkedin.com/in/rainersu)).

Code and documentation is free to use under the [BSD license](https://github.com/rainersu/color/blob/master/LICENSE.md).
