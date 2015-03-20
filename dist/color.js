/*!
Color v1.0.0
https://github.com/rainersu/color
Just a JavaScript library for all kinds of color manipulations.
(c) 2015 Rainer Su( rainersu@foxmail.com | http://cn.linkedin.com/in/rainersu | QQ: 2627001536 )
*/
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        factory();
    }
})(this, function() {
    var module = {};
    var max = Math.max;
    var min = Math.min;
    var pow = Math.pow;
    var abs = Math.abs;
    var round = Math.round;
    function am(v) {
        return {}.toString.call(v).split(/\W+/)[2].toLowerCase();
    }
    function rn(n) {
        return n.toLowerCase().replace(/a$/, "");
    }
    function cp(d, o) {
        var m, h = {}.hasOwnProperty;
        for (m in o) if (h.call(o, m)) d[m] = o[m];
    }
    function kv(n, k) {
        n = +n;
        var t = am(k);
        return t === "array" ? min(k[1], max(k[0], n)) : k && t === "number" && (n %= k) < 0 ? n + k : n;
    }
    function ka(v, k) {
        for (var l = k.length; l--; ) v[l] = kv(v[l], k[l]);
        return v;
    }
    var cs = {
        rgb: [ [ 0, 255 ], [ 0, 255 ], [ 0, 255 ] ],
        hsl: [ 360, [ 0, 100 ], [ 0, 100 ] ],
        hsi: "hsl",
        hsv: [ 360, [ 0, 100 ], [ 0, 100 ] ],
        hsb: "hsv",
        hwb: [ 360, [ 0, 100 ], [ 0, 100 ] ],
        cmy: [ [ 0, 100 ], [ 0, 100 ], [ 0, 100 ] ],
        cmyk: [ [ 0, 100 ], [ 0, 100 ], [ 0, 100 ], [ 0, 100 ] ],
        xyz: [ [ 0, 96 ], [ 0, 100 ], [ 0, 109 ] ],
        ciexyz: "xyz",
        lab: [ [ 0, 100 ], [ -128, 128 ], [ -128, 128 ] ],
        cielab: "lab",
        yuv: [ [ 0, 255 ], [ 0, 255 ], [ 0, 255 ] ],
        yiq: [ [ 0, 1 ], [ -.5957, .5957 ], [ -.5226, .5226 ] ],
        lch: [ [ 0, 100 ], [ 0, 100 ], 360 ],
        lchab: "lch",
        cielch: "lch",
        xyy: [ [ 0, 1 ], [ 0, 1 ], [ 0, 100 ] ],
        yxy: "xyy"
    };
    var kw = {
        black: "#000000",
        silver: "#c0c0c0",
        gray: "#808080",
        white: "#ffffff",
        maroon: "#800000",
        red: "#ff0000",
        purple: "#800080",
        fuchsia: "#ff00ff",
        green: "#008000",
        lime: "#00ff00",
        olive: "#808000",
        yellow: "#ffff00",
        navy: "#000080",
        blue: "#0000ff",
        teal: "#008080",
        aqua: "#00ffff",
        orange: "#ffa500",
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        blanchedalmond: "#ffe4c4",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        oldlace: "#fdf5e6",
        olivedrab: "#6b8e23",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        whitesmoke: "#f5f5f5",
        yellowgreen: "#9acd32",
        rebeccapurple: "#663399",
        tiffanyblue: "#60DFE5"
    };
    var cv = {
        rgb2hsl: function(v) {
            var r = v[0] / 255, g = v[1] / 255, b = v[2] / 255, n = min(r, g, b), x = max(r, g, b), d = x - n, h = n === x ? 0 : r === x ? (g - b) / d : g === x ? (b - r) / d + 2 : (r - g) / d + 4, l = (n + x) / 2, s = x === n ? 0 : d / (l <= .5 ? x + n : 2 - x - n);
            return [ h * 60, s * 100, l * 100 ];
        },
        rgb2hsv: function(v) {
            var r = v[0], g = v[1], b = v[2], n = min(r, g, b), x = max(r, g, b);
            return [ cv.rgb2hsl(v)[0], x ? 100 - 100 * n / x : 0, x * 100 / 255 ];
        },
        rgb2hwb: function(v) {
            var r = v[0], g = v[1], b = v[2], x = 100 / 255;
            return [ cv.rgb2hsl(v)[0], x * min(r, min(g, b)), 100 - x * max(r, max(g, b)) ];
        },
        rgb2cmy: function(v) {
            for (var l = 3, r = []; l--; ) {
                r[l] = (1 - v[l] / 255) * 100;
            }
            return r;
        },
        rgb2cmyk: function(v) {
            var r = v[0], g = v[1], b = v[2], x = max(r, g, b) / 255, a = v.slice(), i = 3;
            for (a[i] = 100 - x * 100; i--; ) {
                a[i] = x ? (1 - a[i] / 255 / x) * 100 : 0;
            }
            return a;
        },
        rgb2yuv: function(v) {
            var r = v[0], g = v[1], b = v[2], y = .299 * r + .587 * g + .114 * b;
            return [ y, ((b - y) * .493 + 111) / 222 * 255, ((r - y) * .877 + 155) / 312 * 255 ];
        },
        rgb2yiq: function(v) {
            var r = v[0] / 255, g = v[1] / 255, b = v[2] / 255;
            return [ .299 * r + .587 * g + .114 * b, .596 * r - .275 * g - .321 * b, .212 * r - .528 * g + .311 * b ];
        },
        rgb2xyz: function(v) {
            var a = [], l = 3, i;
            for (;l--; ) {
                i = v[l] / 255;
                a[l] = i > .04045 ? pow((i + .055) / 1.055, 2.4) : i / 12.92;
            }
            l = a[0];
            i = a[1];
            a = a[2];
            return [ l * 41.24 + i * 35.76 + a * 18.05, l * 21.26 + i * 71.52 + a * 7.22, l * 1.93 + i * 11.92 + a * 95.05 ];
        },
        rgb2xyy: function(v) {
            return cv.xyz2xyy(cv.rgb2xyz(v));
        },
        rgb2lab: function(v) {
            return cv.xyz2lab(cv.rgb2xyz(v));
        },
        rgb2lch: function(v) {
            return cv.lab2lch(cv.rgb2lab(v));
        },
        hsl2rgb: function(v) {
            var h = v[0] / 60, s = v[1] / 100, l = v[2] / 100, b = l <= .5 ? l * s + l : l + s - l * s, a = l * 2 - b, r = [ h + 2, h, h - 2 ], i = 3;
            for (;i--; ) {
                h = r[i] % 6;
                if (h < 0) h += 6;
                r[i] = (h < 1 ? (b - a) * h + a : h < 3 ? b : h < 4 ? (b - a) * (4 - h) + a : a) * 255;
            }
            return r;
        },
        hsv2rgb: function(x) {
            var h = x[0] / 60, s = x[1] / 100, v = x[2] / 100 * 255, l = ~~h, y = v * s, f = h - l, p = v - y, q = v - y * f, t = v - y + y * f, z = l % 6;
            return z > 4 ? [ v, p, q ] : z > 3 ? [ t, p, v ] : z > 2 ? [ p, q, v ] : z > 1 ? [ p, v, t ] : z ? [ q, v, p ] : [ v, t, p ];
        },
        hsv2hwb: function(v) {
            return [ v[0], v[2] * (100 - v[1]) / 100, 100 - v[2] ];
        },
        hwb2rgb: function(v) {
            var w = v[1] / 100, b = v[2] / 100, i = 3, r = cv.hsl2rgb([ v[0], 100, 50 ]);
            for (b = 1 - w - b, w *= 255; i--; ) {
                r[i] = r[i] * b + w;
            }
            return r;
        },
        hwb2hsv: function(v) {
            return [ v[0], 100 - v[1] / (1 - v[2] / 100), 100 - v[2] ];
        },
        cmy2rgb: function(v) {
            for (var l = 3, r = []; l--; ) {
                r[l] = (1 - v[l] / 100) * 255;
            }
            return r;
        },
        cmyk2rgb: function(v) {
            var k = v[3] / 100, l = 1 - k, a = v.slice(0, 3), i = 3;
            for (;i--; ) {
                a[i] = 255 * (1 - min(1, a[i] * l / 100 + k));
            }
            return a;
        },
        yuv2rgb: function(x) {
            var y = x[0], u = x[1] / 255 * 222 - 111, v = x[2] / 255 * 312 - 155;
            return [ y + v / .877, y - .39466 * u - .5806 * v, y + u / .493 ];
        },
        yiq2rgb: function(v) {
            var y = v[0], i = v[1], q = v[2];
            return [ (y + .956 * i + .62 * q) * 255, (y - .272 * i - .647 * q) * 255, (y - 1.108 * i + 1.705 * q) * 255 ];
        },
        xyz2rgb: function(v) {
            var x = v[0], y = v[1], z = v[2], r = [ x * 3.2406 - y * 1.5372 - z * .4986, y * 1.8758 - x * .9689 + z * .0415, x * .0557 - y * .204 + z * 1.057 ];
            for (x = 3; x--; ) {
                z = r[x] / 100;
                r[x] = 255 * (z > .0031308 ? 1.055 * pow(z, 1 / 2.4) - .055 : z * 12.92);
            }
            return r;
        },
        xyz2xyy: function(a) {
            var x = a[0], y = a[1], m = x + y + a[2];
            return m ? [ x / m, y / m, y ] : [ 0, 0, y ];
        },
        xyz2lab: function(a) {
            var v, c = [ 95.047, 100, 108.883 ], l = 3;
            for (;l--; ) {
                v = a[l] / c[l];
                a[l] = v > .008856 ? pow(v, 1 / 3) : 7.787 * v + 16 / 116;
            }
            l = a[0];
            c = a[1];
            a = a[2];
            return [ 116 * c - 16, 500 * (l - c), 200 * (c - a) ];
        },
        lab2rgb: function(v) {
            return cv.xyz2rgb(cv.lab2xyz(v));
        },
        lab2xyz: function(v) {
            var l = v[0], a = v[1], b = v[2], y = (l + 16) / 116, x = a / 500 + y, z = y - b / 200;
            a = [ x, y, z ];
            z = [ 95.047, 100, 108.883 ];
            for (l = 3; l--; ) {
                x = pow(b = a[l], 3);
                a[l] = (x > .008856 ? x : (b - 16 / 116) / 7.787) * z[l];
            }
            return a;
        },
        lab2lch: function(c) {
            var a = c[1], b = c[2], h = Math.atan2(b, a) * 360 / 2 / Math.PI % 360;
            return [ c[0], Math.sqrt(a * a + b * b), h < 0 ? h + 360 : h ];
        },
        lch2rgb: function(v) {
            return cv.lab2rgb(cv.lch2lab(v));
        },
        lch2lab: function(v) {
            var x = v[2] % 360 * 2 * Math.PI / 360;
            return [ v[0], v[1] * Math.cos(x), v[1] * Math.sin(x) ];
        },
        xyy2rgb: function(v) {
            return cv.xyz2rgb(cv.xyy2xyz(v));
        },
        xyy2xyz: function(v) {
            var x = v[0], y = v[1], z = v[2];
            return y ? [ x * z / y, z, (1 - x - y) * z / y ] : [ 0, 0, 0 ];
        }
    };
    var bl = {
        multiply: function(b, f) {
            return f * b / 255;
        },
        screen: function(b, f) {
            return b + f - b * f / 255;
        },
        overlay: function(b, f) {
            return b < 128 ? 2 * f * b / 255 : 255 - 2 * (255 - b) * (255 - f) / 255;
        },
        negate: function(b, f) {
            return 255 - abs(255 - b - f);
        },
        difference: function(b, f) {
            return abs(b - f);
        },
        average: function(b, f) {
            return (b + f) / 2;
        },
        exclusion: function(b, f) {
            return b + f - 2 * b * f / 255;
        },
        hardlight: function(b, f) {
            return bl.overlay(f, b);
        },
        softlight: function(b, f) {
            b /= 255;
            f /= 255;
            var d = 1, e = b;
            if (f > .5) {
                e = 1;
                d = b > .25 ? Math.sqrt(b) : ((16 * b - 12) * b + 4) * b;
            }
            return 255 * (b - (1 - 2 * f) * e * (d - b));
        },
        darken: function(b, f) {
            return min(b, f);
        },
        lighten: function(b, f) {
            return max(b, f);
        },
        addition: function(b, f) {
            return b + f;
        },
        subtract: function(b, f) {
            return b - f;
        },
        subtractive: function(b, f) {
            return b + f - 255;
        },
        combine: function(b, f) {
            return b ^ f;
        },
        dodge: function(b, f) {
            return b === 255 ? b : min(255, (f << 8) / (255 - b));
        },
        burn: function(b, f) {
            return b === 0 ? b : max(0, 255 - (255 - f << 8) / b);
        }
    };
    var sc = {
        analogous: function(c, r, x) {
            r = r || 8;
            x = 360 / (x || 30);
            var n = "hsl", v = c.color(n), h = (v[0] - (x * r >> 1) + 720) % 360, s = v[1], l = v[2];
            for (c = [ n ]; --r; ) {
                c.unshift([ h += x, s, l ]);
            }
            return c;
        },
        triad: function(c) {
            var n = "rgb", v = c.color(n), r = v[0], g = v[1], b = v[2];
            return [ [ b, r, g ], [ g, b, r ], n ];
        },
        splitcomplement: function(c) {
            var n = "hsl", v = c.color(n), h = v[0], s = v[1], l = v[2];
            return [ [ h + 72, s, l ], [ h + 216, s, l ], n ];
        },
        tetrad: function(c) {
            var n = "rgb", v = c.color(n), r = v[0], g = v[1], b = v[2];
            return [ [ b, r, b ], [ b, g, r ], [ r, b, r ], n ];
        },
        monochromatic: function(c, r) {
            r = r || 6;
            var n = "hsv", v = c.color(n), h = v[0], s = v[1], x = v[2];
            c = [ n ];
            while (--r) {
                x += 20;
                x %= 100;
                c.unshift([ h, s, x ]);
            }
            return c;
        }
    };
    var re = [ /./, /^hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, /^rgba?\(\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, /^#([a-f0-9])([a-f0-9])([a-f0-9])(?:([a-f0-9])([a-f0-9])([a-f0-9]))?$/i ], co = [ "hsl", "hsv", "hwb", "rgb" ], gs = fb(function(r, g, b, a, m) {
        var x = m ? this.luminance(m - 1) * 255 : r * .3 + g * .59 + b * .11;
        return [ x, x, x, a ];
    });
    function tj(v) {
        return this.css(v);
    }
    function fb(f, n) {
        return function() {
            n = n || "rgba";
            return new Color(f.apply(this, this.color(n).concat(slice.call(arguments))), n);
        };
    }
    function fv(i, n) {
        return function(v, b) {
            return this.value(co[n || 0], i || 0, v, b);
        };
    }
    function Color(v, s) {
        return !(this instanceof Color) ? new Color(v, s) : v instanceof Color ? s ? v.clone() : v : (this.alpha = 100, 
        this.color(s, v));
    }
    cp(Color, {
        keywords: kw,
        spaces: cs,
        support: function(n) {
            return cs.hasOwnProperty(rn(n));
        },
        isColor: function(v) {
            if (am(v) === "string") for (var l = re.length; l--; ) {
                if (l ? re[l].test(v) : v in kw) return true;
            }
            return v && v instanceof Color;
        },
        temperature: function(k) {
            k /= 100;
            return new Color([ k <= 66 ? 255 : 329.698727446 * pow(k - 60, -.1332047592), k <= 66 ? 99.4708025861 * Math.log(k) - 161.1195681661 : 288.1221695283 * pow(k - 60, -.0755148492), k >= 66 ? 255 : k <= 19 ? 0 : 138.5177312231 * Math.log(k - 10) - 305.0447927307 ]);
        },
        grayscale: function(v, b) {
            v = b ? v * 255 : v;
            return new Color([ v, v, v ]);
        }
    });
    cp(Color.prototype, {
        toJSON: tj,
        toString: tj,
        clone: function() {
            var n = this.space + "a";
            return new Color(this.color(n), n);
        },
        equal: function(c) {
            return this.css(1, 1) === new Color(c).css(1, 1);
        },
        value: function(n, i, v, b) {
            v = +v;
            var k = cs[rn(n)], l = k.length, a = i >= l, c = this.color(n + "a"), o = c[i = a ? l : i];
            if (v === v) {
                v = c[i] = kv(b ? o + v : v, a ? [ 0, 100 ] : k[i]);
                if (o !== v) this.color(n, c);
                o = this;
            }
            return o;
        },
        opacity: function(v, b) {
            v = +v;
            var a = this.alpha;
            if (v === v) {
                this.alpha = kv(b ? a + v : v, [ 0, 100 ]);
                a = this;
            }
            return a;
        },
        color: function(s, v) {
            var k, x = re.length, w = x, t = this, o = this.space, c = this.cache || {}, b = /a$/.test(s = am(s) === "string" && s.toLowerCase() || "rgb");
            if (am(k = cs[s = b ? rn(s) : s]) === "string") k = cs[s = k];
            if (v) {
                if (am(v) === "string") {
                    for (v = v.toLowerCase(); x--; ) if (o = re[x].exec(v)) {
                        if (x) {
                            if (x > 1) {
                                s = "rgb";
                                b = o[6];
                                v = x > 2 ? [ parseInt(b ? o[1] + o[2] : o[1] + o[1], 16), parseInt(b ? o[3] + o[4] : o[2] + o[2], 16), parseInt(b ? o[5] + b : o[3] + o[3], 16) ] : [ b ? o[1] * 2.55 : o[1], b ? o[3] * 2.55 : o[3], b ? o[5] * 2.55 : o[5], o[7] ];
                            } else {
                                s = "hsl";
                                v = o.slice(1, 5);
                            }
                            k = cs[s];
                            if (isNaN(v[3] *= 100)) v.pop();
                            break;
                        } else {
                            v = kw[v];
                            if (v) x = w;
                        }
                    }
                } else v = re.slice.call(v);
                if (ka(v, k).length > k.length) this.opacity(v.pop());
                if (!(o = c[s]) || "" + o !== "" + v) (this.cache = {})[s] = v;
            } else {
                if (!c[s]) {
                    x = c[o];
                    w = cv[o + "2" + s];
                    c[s] = ka(w ? w(x) : cv["rgb2" + s](ka(cv[o + "2rgb"](x), cs["rgb"])), k);
                }
                t = c[s].slice();
                if (b) t.push(this.opacity());
            }
            this.space = s;
            return t;
        },
        css: function(v, b) {
            if (am(v) === "string") return this.color(0, v);
            v = 1 + v ? ~~v : 1;
            b = 1 + b ? b : this.alpha < 100;
            var s = (v > 1 ? "hsl" : "rgb") + (b && v ? "a" : ""), c = this.color(s), l = c.length, i;
            for (;l--; ) {
                i = round(c[l]);
                c[l] = l > 2 ? i / 100 : !v ? i.toString(16).replace(/^.$/, "0$&") : v > 1 && l ? i + "%" : i;
            }
            return v ? s + "(" + c + ")" : "#" + c.join("").toUpperCase();
        },
        ieFilter: function() {
            return this.css(0).replace("#", "#" + kv(round(this.alpha * 2.55), [ 0, 255 ]).toString(16).replace(/^.$/, "0$&").toUpperCase());
        },
        web: function(b, s) {
            b = b ? 17 : 51;
            var c = this.color("rgba"), l = 3;
            for (;l--; ) c[l] = ((c[l] + b / 2) / b >> 0) * b;
            c = new Color(c);
            return s ? c : c.css(0);
        },
        luminance: function(b) {
            b = +b;
            if (b !== b) b = 1;
            var c = this.color("rgb"), l = c.length, x;
            for (;l--; ) {
                x = c[l] / 255;
                c[l] = b ? x : x <= .03928 ? x / 12.92 : pow((x + .055) / 1.055, 2.4);
            }
            return .2126 * c[0] + .7152 * c[1] + .0722 * c[2];
        },
        luma: function() {
            return (this.color("yiq")[0] * 255).toFixed();
        },
        contrast: function(c) {
            c = Color(c).luminance() + .05;
            var b = this.luminance() + .05;
            return b > c ? b / c : c / b;
        },
        difference: function(c) {
            c = Color(c).color("rgb");
            var a = this.color("rgb"), o = [ 299, 587, 114 ], l = 3, b = 0, r = 0, x, y;
            for (;l--; ) {
                x = c[l] - a[l];
                b += o[l] * x;
                r += abs(x);
            }
            b = abs(b) / 1e3;
            return [ b, r, (b > 125) + (r > 500) ];
        },
        hue: fv(0),
        saturation: fv(1),
        lightness: fv(2),
        chroma: fv(1, 1),
        brightness: fv(2, 1),
        whiteness: fv(1, 2),
        blackness: fv(2, 2),
        invert: fb(function(r, g, b, a) {
            return [ r ^ 255, g ^ 255, b ^ 255, a ];
        }),
        sepia: fb(function(r, g, b, a) {
            return [ r * .393 + g * .769 + b * .189, r * .349 + g * .686 + b * .168, r * .272 + g * .534 + b * .131, a ];
        }),
        greyscale: function(m) {
            return m > 2 ? this.clone().saturation(0) : gs.call(this, m);
        },
        complement: function() {
            return this.clone().hue(180, true);
        },
        mix: function(y, p, r) {
            y = new Color(y).color("rgba");
            var p = isNaN(p) ? .5 : p / 100, w = p * 2 - 1, x = this.color("rgba"), a = r ? (x[3] - y[3]) / 100 : 0, m = ((w * a == -1 ? w : (w + a) / (1 + w * a)) + 1) / 2, n = 1 - m;
            return new Color([ x[0] * m + y[0] * n, x[1] * m + y[1] * n, x[2] * m + y[2] * n, r ? x[3] * p + y[3] * (1 - p) : x[3] ]);
        },
        blend: function(y, f) {
            var x = this.color("rgba"), r = [ , , , x[3] ], l = 4;
            y = new Color(y).color("rgba");
            if (f in bl) f = bl[f];
            for (l = 3; l--; ) r[l] = f(x[l], y[l]);
            return new Color(r);
        },
        tint: function(p) {
            return new Color([ 255, 255, 255, this.alpha ]).mix(this, p);
        },
        shade: function(p) {
            return new Color([ 0, 0, 0, this.alpha ]).mix(this, p);
        },
        tone: function(p, m) {
            return this.greyscale(m).mix(this, p);
        },
        match: function(y, d) {
            return abs(this.luminance() - new Color(y).luminance()) * 100 > (1 + d ? d : 50);
        },
        mate: function(o) {
            var c = am(o) === "array" ? o : o ? slice.call(arguments) : [ "#000", "#FFF" ], l = c.length, x = this.luminance(), y, z = 0, i, r = c[0];
            while (l--) {
                i = new Color(c[l]);
                y = abs(i.luminance() - x);
                if (y > z) {
                    z = y;
                    r = i;
                }
            }
            return r;
        },
        opaque: function(y, b) {
            y = this.mix(y, this.alpha);
            y.alpha = 100;
            return b ? y.css(0) : y;
        }
    });
    module.Color = Color;
    function Palette(m, n, a) {
        this.cache = {};
        if (am(m) !== "array") {
            m = slice.call(arguments);
            n = 0;
        }
        var l = m.length;
        for (;l--; ) this.stuff(m[l], n && n[l] || 1);
        a = +a;
        this.alpha = a === a ? a : 100;
    }
    cp(Palette.prototype, {
        stuff: function(c, r, b) {
            c = new Color(c, 1);
            var n = c.css(0), o = this.cache[n], v = o ? o.ratio : 0;
            r = +r;
            r = r !== r ? 1 : ~~r;
            r = Math.max(b ? r + v : r, 0);
            if (r !== v) {
                o = c;
                o.ratio = r;
                this.cache[n] = o;
                this.total = this.value = null;
            }
            return this;
        },
        ratio: function(c, b) {
            var r = 0;
            c = this.cache[new Color(c).css(0)];
            if (c && (r = c.ratio)) {
                if (b) {
                    if (!this.total) this.mix();
                    r = Math.round(r * 100 / this.total);
                }
            }
            return r;
        },
        mix: function() {
            var o = this.cache, c = [], p = [], x = 0, n, m, i, r = this.value;
            if (!r) {
                r = [ 0, 0, 0 ];
                for (i in o) if (o.hasOwnProperty(i) && o[i]) {
                    i = o[i];
                    n = i.ratio;
                    if (n) {
                        x += n;
                        p.push(n);
                        c.push(i.color());
                    }
                }
                for (this.total = x, i = p.length; i--; ) {
                    n = p[i] / x;
                    o = c[i];
                    for (m = 3; m--; ) {
                        r[m] += n * o[m];
                    }
                }
                this.value = r;
            }
            return new Color(r.concat(this.alpha));
        },
        css: function(v, b) {
            return this.mix().css(v, b);
        }
    });
    module.Palette = Palette;
    function Gradient(c, n) {}
    module.Gradient = Gradient;
    return module;
});