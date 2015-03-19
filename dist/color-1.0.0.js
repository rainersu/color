!function(a, b) {
    "function" == typeof define && define.amd ? define([], function() {
        return b();
    }) : "object" == typeof exports ? module.exports = b() : b();
}(this, function() {
    function a(a) {
        return {}.toString.call(a).split(/\W+/)[2].toLowerCase();
    }
    function b(a) {
        return a.toLowerCase().replace(/a$/, "");
    }
    function c(a, b) {
        var c, d = {}.hasOwnProperty;
        for (c in b) d.call(b, c) && (a[c] = b[c]);
    }
    function d(b, c) {
        b = +b;
        var d = a(c);
        return "array" === d ? m(c[1], l(c[0], b)) : c && "number" === d && (b %= c) < 0 ? b + c : b;
    }
    function e(a, b) {
        for (var c = b.length; c--; ) a[c] = d(a[c], b[c]);
        return a;
    }
    function f(a) {
        return this.css(a);
    }
    function g(a, b) {
        return function() {
            return b = b || "rgba", new i(a.apply(this, this.color(b).concat(x.call(arguments))), b);
        };
    }
    function h(a, b) {
        return function(c, d) {
            return this.value(v[b || 0], a || 0, c, d);
        };
    }
    function i(a, b) {
        return this instanceof i ? a instanceof i ? b ? a.clone() : a : (this.alpha = 100, 
        this.color(b, a)) : new i(a, b);
    }
    function j() {}
    var k = {}, l = Math.max, m = Math.min, n = Math.pow, o = Math.abs, p = Math.round, q = {
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
    }, r = {
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
    }, s = {
        rgb2hsl: function(a) {
            var b = a[0] / 255, c = a[1] / 255, d = a[2] / 255, e = m(b, c, d), f = l(b, c, d), g = f - e, h = e === f ? 0 : b === f ? (c - d) / g : c === f ? (d - b) / g + 2 : (b - c) / g + 4, i = (e + f) / 2, j = f === e ? 0 : g / (.5 >= i ? f + e : 2 - f - e);
            return [ 60 * h, 100 * j, 100 * i ];
        },
        rgb2hsv: function(a) {
            var b = a[0], c = a[1], d = a[2], e = m(b, c, d), f = l(b, c, d);
            return [ s.rgb2hsl(a)[0], f ? 100 - 100 * e / f : 0, 100 * f / 255 ];
        },
        rgb2hwb: function(a) {
            var b = a[0], c = a[1], d = a[2], e = 100 / 255;
            return [ s.rgb2hsl(a)[0], e * m(b, m(c, d)), 100 - e * l(b, l(c, d)) ];
        },
        rgb2cmy: function(a) {
            for (var b = 3, c = []; b--; ) c[b] = 100 * (1 - a[b] / 255);
            return c;
        },
        rgb2cmyk: function(a) {
            var b = a[0], c = a[1], d = a[2], e = l(b, c, d) / 255, f = a.slice(), g = 3;
            for (f[g] = 100 - 100 * e; g--; ) f[g] = e ? 100 * (1 - f[g] / 255 / e) : 0;
            return f;
        },
        rgb2yuv: function(a) {
            var b = a[0], c = a[1], d = a[2], e = .299 * b + .587 * c + .114 * d;
            return [ e, (.493 * (d - e) + 111) / 222 * 255, (.877 * (b - e) + 155) / 312 * 255 ];
        },
        rgb2yiq: function(a) {
            var b = a[0] / 255, c = a[1] / 255, d = a[2] / 255;
            return [ .299 * b + .587 * c + .114 * d, .596 * b - .275 * c - .321 * d, .212 * b - .528 * c + .311 * d ];
        },
        rgb2xyz: function(a) {
            for (var b, c = [], d = 3; d--; ) b = a[d] / 255, c[d] = b > .04045 ? n((b + .055) / 1.055, 2.4) : b / 12.92;
            return d = c[0], b = c[1], c = c[2], [ 41.24 * d + 35.76 * b + 18.05 * c, 21.26 * d + 71.52 * b + 7.22 * c, 1.93 * d + 11.92 * b + 95.05 * c ];
        },
        rgb2xyy: function(a) {
            return s.xyz2xyy(s.rgb2xyz(a));
        },
        rgb2lab: function(a) {
            return s.xyz2lab(s.rgb2xyz(a));
        },
        rgb2lch: function(a) {
            return s.lab2lch(s.rgb2lab(a));
        },
        hsl2rgb: function(a) {
            for (var b = a[0] / 60, c = a[1] / 100, d = a[2] / 100, e = .5 >= d ? d * c + d : d + c - d * c, f = 2 * d - e, g = [ b + 2, b, b - 2 ], h = 3; h--; ) b = g[h] % 6, 
            0 > b && (b += 6), g[h] = 255 * (1 > b ? (e - f) * b + f : 3 > b ? e : 4 > b ? (e - f) * (4 - b) + f : f);
            return g;
        },
        hsv2rgb: function(a) {
            var b = a[0] / 60, c = a[1] / 100, d = a[2] / 100 * 255, e = ~~b, f = d * c, g = b - e, h = d - f, i = d - f * g, j = d - f + f * g, k = e % 6;
            return k > 4 ? [ d, h, i ] : k > 3 ? [ j, h, d ] : k > 2 ? [ h, i, d ] : k > 1 ? [ h, d, j ] : k ? [ i, d, h ] : [ d, j, h ];
        },
        hsv2hwb: function(a) {
            return [ a[0], a[2] * (100 - a[1]) / 100, 100 - a[2] ];
        },
        hwb2rgb: function(a) {
            var b = a[1] / 100, c = a[2] / 100, d = 3, e = s.hsl2rgb([ a[0], 100, 50 ]);
            for (c = 1 - b - c, b *= 255; d--; ) e[d] = e[d] * c + b;
            return e;
        },
        hwb2hsv: function(a) {
            return [ a[0], 100 - a[1] / (1 - a[2] / 100), 100 - a[2] ];
        },
        cmy2rgb: function(a) {
            for (var b = 3, c = []; b--; ) c[b] = 255 * (1 - a[b] / 100);
            return c;
        },
        cmyk2rgb: function(a) {
            for (var b = a[3] / 100, c = 1 - b, d = a.slice(0, 3), e = 3; e--; ) d[e] = 255 * (1 - m(1, d[e] * c / 100 + b));
            return d;
        },
        yuv2rgb: function(a) {
            var b = a[0], c = a[1] / 255 * 222 - 111, d = a[2] / 255 * 312 - 155;
            return [ b + d / .877, b - .39466 * c - .5806 * d, b + c / .493 ];
        },
        yiq2rgb: function(a) {
            var b = a[0], c = a[1], d = a[2];
            return [ 255 * (b + .956 * c + .62 * d), 255 * (b - .272 * c - .647 * d), 255 * (b - 1.108 * c + 1.705 * d) ];
        },
        xyz2rgb: function(a) {
            var b = a[0], c = a[1], d = a[2], e = [ 3.2406 * b - 1.5372 * c - .4986 * d, 1.8758 * c - .9689 * b + .0415 * d, .0557 * b - .204 * c + 1.057 * d ];
            for (b = 3; b--; ) d = e[b] / 100, e[b] = 255 * (d > .0031308 ? 1.055 * n(d, 1 / 2.4) - .055 : 12.92 * d);
            return e;
        },
        xyz2xyy: function(a) {
            var b = a[0], c = a[1], d = b + c + a[2];
            return d ? [ b / d, c / d, c ] : [ 0, 0, c ];
        },
        xyz2lab: function(a) {
            for (var b, c = [ 95.047, 100, 108.883 ], d = 3; d--; ) b = a[d] / c[d], a[d] = b > .008856 ? n(b, 1 / 3) : 7.787 * b + 16 / 116;
            return d = a[0], c = a[1], a = a[2], [ 116 * c - 16, 500 * (d - c), 200 * (c - a) ];
        },
        lab2rgb: function(a) {
            return s.xyz2rgb(s.lab2xyz(a));
        },
        lab2xyz: function(a) {
            var b = a[0], c = a[1], d = a[2], e = (b + 16) / 116, f = c / 500 + e, g = e - d / 200;
            for (c = [ f, e, g ], g = [ 95.047, 100, 108.883 ], b = 3; b--; ) f = n(d = c[b], 3), 
            c[b] = (f > .008856 ? f : (d - 16 / 116) / 7.787) * g[b];
            return c;
        },
        lab2lch: function(a) {
            var b = a[1], c = a[2], d = 360 * Math.atan2(c, b) / 2 / Math.PI % 360;
            return [ a[0], Math.sqrt(b * b + c * c), 0 > d ? d + 360 : d ];
        },
        lch2rgb: function(a) {
            return s.lab2rgb(s.lch2lab(a));
        },
        lch2lab: function(a) {
            var b = a[2] % 360 * 2 * Math.PI / 360;
            return [ a[0], a[1] * Math.cos(b), a[1] * Math.sin(b) ];
        },
        xyy2rgb: function(a) {
            return s.xyz2rgb(s.xyy2xyz(a));
        },
        xyy2xyz: function(a) {
            var b = a[0], c = a[1], d = a[2];
            return c ? [ b * d / c, d, (1 - b - c) * d / c ] : [ 0, 0, 0 ];
        }
    }, t = {
        multiply: function(a, b) {
            return b * a / 255;
        },
        screen: function(a, b) {
            return a + b - a * b / 255;
        },
        overlay: function(a, b) {
            return 128 > a ? 2 * b * a / 255 : 255 - 2 * (255 - a) * (255 - b) / 255;
        },
        negate: function(a, b) {
            return 255 - o(255 - a - b);
        },
        difference: function(a, b) {
            return o(a - b);
        },
        average: function(a, b) {
            return (a + b) / 2;
        },
        exclusion: function(a, b) {
            return a + b - 2 * a * b / 255;
        },
        hardlight: function(a, b) {
            return t.overlay(b, a);
        },
        softlight: function(a, b) {
            a /= 255, b /= 255;
            var c = 1, d = a;
            return b > .5 && (d = 1, c = a > .25 ? Math.sqrt(a) : ((16 * a - 12) * a + 4) * a), 
            255 * (a - (1 - 2 * b) * d * (c - a));
        },
        darken: function(a, b) {
            return m(a, b);
        },
        lighten: function(a, b) {
            return l(a, b);
        },
        addition: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        },
        subtractive: function(a, b) {
            return a + b - 255;
        },
        combine: function(a, b) {
            return a ^ b;
        },
        dodge: function(a, b) {
            return 255 === a ? a : m(255, (b << 8) / (255 - a));
        },
        burn: function(a, b) {
            return 0 === a ? a : l(0, 255 - (255 - b << 8) / a);
        }
    }, u = [ /./, /^hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, /^rgba?\(\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, /^#([a-f0-9])([a-f0-9])([a-f0-9])(?:([a-f0-9])([a-f0-9])([a-f0-9]))?$/i ], v = [ "hsl", "hsv", "hwb", "rgb" ], w = g(function(a, b, c, d, e) {
        var f = e ? 255 * this.luminance(e - 1) : .3 * a + .59 * b + .11 * c;
        return [ f, f, f, d ];
    }), x = u.slice;
    return c(i, {
        keywords: r,
        spaces: q,
        support: function(a) {
            return q.hasOwnProperty(b(a));
        },
        isColor: function(b) {
            if ("string" === a(b)) for (var c = u.length; c--; ) if (c ? u[c].test(b) : b in r) return !0;
            return b && b instanceof i;
        },
        temperature: function(a) {
            return a /= 100, new i([ 66 >= a ? 255 : 329.698727446 * n(a - 60, -.1332047592), 66 >= a ? 99.4708025861 * Math.log(a) - 161.1195681661 : 288.1221695283 * n(a - 60, -.0755148492), a >= 66 ? 255 : 19 >= a ? 0 : 138.5177312231 * Math.log(a - 10) - 305.0447927307 ]);
        },
        grayscale: function(a, b) {
            return a = b ? 255 * a : a, new i([ a, a, a ]);
        }
    }), c(i.prototype, {
        toJSON: f,
        toString: f,
        clone: function() {
            var a = this.space + "a";
            return new i(this.color(a), a);
        },
        equal: function(a) {
            return this.css(1, 1) === new i(a).css(1, 1);
        },
        value: function(a, c, e, f) {
            e = +e;
            var g = q[b(a)], h = g.length, i = c >= h, j = this.color(a + "a"), k = j[c = i ? h : c];
            return e === e && (e = j[c] = d(f ? k + e : e, i ? [ 0, 100 ] : g[c]), k !== e && this.color(a, j), 
            k = this), k;
        },
        opacity: function(a, b) {
            a = +a;
            var c = this.alpha;
            return a === a && (this.alpha = d(b ? c + a : a, [ 0, 100 ]), c = this), c;
        },
        color: function(c, d) {
            var f, g = u.length, h = g, i = this, j = this.space, k = this.cache || {}, l = /a$/.test(c = "string" === a(c) && c.toLowerCase() || "rgb");
            if ("string" === a(f = q[c = l ? b(c) : c]) && (f = q[c = f]), d) {
                if ("string" === a(d)) {
                    for (d = d.toLowerCase(); g--; ) if (j = u[g].exec(d)) {
                        if (g) {
                            g > 1 ? (c = "rgb", l = j[6], d = g > 2 ? [ parseInt(l ? j[1] + j[2] : j[1] + j[1], 16), parseInt(l ? j[3] + j[4] : j[2] + j[2], 16), parseInt(l ? j[5] + l : j[3] + j[3], 16) ] : [ l ? 2.55 * j[1] : j[1], l ? 2.55 * j[3] : j[3], l ? 2.55 * j[5] : j[5], j[7] ]) : (c = "hsl", 
                            d = j.slice(1, 5)), f = q[c], isNaN(d[3] *= 100) && d.pop();
                            break;
                        }
                        d = r[d], d && (g = h);
                    }
                } else d = u.slice.call(d);
                e(d, f).length > f.length && this.opacity(d.pop()), (j = k[c]) && "" + j == "" + d || ((this.cache = {})[c] = d);
            } else k[c] || (g = k[j], h = s[j + "2" + c], k[c] = e(h ? h(g) : s["rgb2" + c](e(s[j + "2rgb"](g), q.rgb)), f)), 
            i = k[c].slice(), l && i.push(this.opacity());
            return this.space = c, i;
        },
        css: function(b, c) {
            if ("string" === a(b)) return this.color(0, b);
            b = 1 + b ? ~~b : 1, c = 1 + c ? c : this.alpha < 100;
            for (var d, e = (b > 1 ? "hsl" : "rgb") + (c && b ? "a" : ""), f = this.color(e), g = f.length; g--; ) d = p(f[g]), 
            f[g] = g > 2 ? d / 100 : b ? b > 1 && g ? d + "%" : d : d.toString(16).replace(/^.$/, "0$&");
            return b ? e + "(" + f + ")" : "#" + f.join("").toUpperCase();
        },
        ieFilter: function() {
            return this.css(0).replace("#", "#" + d(p(2.55 * this.alpha), [ 0, 255 ]).toString(16).replace(/^.$/, "0$&").toUpperCase());
        },
        web: function(a, b) {
            a = a ? 17 : 51;
            for (var c = this.color("rgba"), d = 3; d--; ) c[d] = ((c[d] + a / 2) / a >> 0) * a;
            return c = new i(c), b ? c : c.css(0);
        },
        luminance: function(a) {
            a = +a, a !== a && (a = 1);
            for (var b, c = this.color("rgb"), d = c.length; d--; ) b = c[d] / 255, c[d] = a ? b : .03928 >= b ? b / 12.92 : n((b + .055) / 1.055, 2.4);
            return .2126 * c[0] + .7152 * c[1] + .0722 * c[2];
        },
        luma: function() {
            return (255 * this.color("yiq")[0]).toFixed();
        },
        contrast: function(a) {
            a = i(a).luminance() + .05;
            var b = this.luminance() + .05;
            return b > a ? b / a : a / b;
        },
        difference: function(a) {
            a = i(a).color("rgb");
            for (var b, c = this.color("rgb"), d = [ 299, 587, 114 ], e = 3, f = 0, g = 0; e--; ) b = a[e] - c[e], 
            f += d[e] * b, g += o(b);
            return f = o(f) / 1e3, [ f, g, (f > 125) + (g > 500) ];
        },
        hue: h(0),
        saturation: h(1),
        lightness: h(2),
        chroma: h(1, 1),
        brightness: h(2, 1),
        whiteness: h(1, 2),
        blackness: h(2, 2),
        invert: g(function(a, b, c, d) {
            return [ 255 ^ a, 255 ^ b, 255 ^ c, d ];
        }),
        sepia: g(function(a, b, c, d) {
            return [ .393 * a + .769 * b + .189 * c, .349 * a + .686 * b + .168 * c, .272 * a + .534 * b + .131 * c, d ];
        }),
        greyscale: function(a) {
            return a > 2 ? this.clone().saturation(0) : w.call(this, a);
        },
        complement: function() {
            return this.clone().hue(180, !0);
        },
        mix: function(a, b, c) {
            a = new i(a).color("rgba");
            var b = isNaN(b) ? .5 : b / 100, d = 2 * b - 1, e = this.color("rgba"), f = c ? (e[3] - a[3]) / 100 : 0, g = ((d * f == -1 ? d : (d + f) / (1 + d * f)) + 1) / 2, h = 1 - g;
            return new i([ e[0] * g + a[0] * h, e[1] * g + a[1] * h, e[2] * g + a[2] * h, c ? e[3] * b + a[3] * (1 - b) : e[3] ]);
        },
        blend: function(a, b) {
            var c = this.color("rgba"), d = [ , , , c[3] ], e = 4;
            a = new i(a).color("rgba"), b in t && (b = t[b]);
            for (e = 3; e--; ) d[e] = b(c[e], a[e]);
            return new i(d);
        },
        tint: function(a) {
            return new i([ 255, 255, 255, this.alpha ]).mix(this, a);
        },
        shade: function(a) {
            return new i([ 0, 0, 0, this.alpha ]).mix(this, a);
        },
        tone: function(a, b) {
            return this.greyscale(b).mix(this, a);
        },
        match: function(a, b) {
            return 100 * o(this.luminance() - new i(a).luminance()) > (1 + b ? b : 50);
        },
        mate: function(b) {
            for (var c, d, e = "array" === a(b) ? b : b ? x.call(arguments) : [ "#000", "#FFF" ], f = e.length, g = this.luminance(), h = 0, j = e[0]; f--; ) d = new i(e[f]), 
            c = o(d.luminance() - g), c > h && (h = c, j = d);
            return j;
        },
        opaque: function(a, b) {
            return a = this.mix(a, this.alpha), a.alpha = 100, b ? a.css(0) : a;
        }
    }), k.Color = i, k.Gradient = j, k;
});