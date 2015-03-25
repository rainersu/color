/*!
Color v1.0.0
http://rainersu.github.io/color
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
    var O = Object;
    var M = Math;
    var max = M.max;
    var min = M.min;
    var pow = M.pow;
    var PI = M.PI;
    var atan2 = M.atan2;
    var sqrt = M.sqrt;
    var cos = M.cos;
    var sin = M.sin;
    var abs = M.abs;
    var log = M.log;
    var round = M.round;
    var hasOP = O.prototype.hasOwnProperty;
    var keys = O.keys || function(o) {
        var r = [], i;
        for (i in o) if (hasOP.call(o, i)) {
            r.push(i);
        }
        return r;
    };
    function am(v) {
        return O.prototype.toString.call(v).split(/\W+/)[2].toLowerCase();
    }
    function rn(n) {
        return n.toLowerCase().replace(/a$/, "");
    }
    function cp(d, o) {
        for (var m in o) if (hasOP.call(o, m)) d[m] = o[m];
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
    function tj() {
        return this.css();
    }
    var S0 = [ 0, 255 ], S1 = [ 0, 100 ], S5 = 360, S6 = null, C1 = [ S0, S0, S0 ], C2 = [ S5, S1, S1 ], C3 = [ S6, S6, S6 ], cs = {
        rgb: C1,
        hsl: C2,
        hsv: C2,
        hwb: C2,
        xyz: C3,
        xyy: C3,
        luv: C3,
        lab: C3,
        lch: [ S6, S6, S5 ],
        husl: C2,
        huslp: C3,
        ryb: C1,
        ycbcr: C1,
        ypbpr: C3,
        ycgco: C3,
        ydbdr: C3,
        yiq: C3,
        yuv: C1,
        cmy: [ S1, S1, S1 ],
        cmyk: [ S1, S1, S1, S1 ],
        hsi: "hsl",
        hsb: "hsv",
        yxy: "xyy",
        ciexyy: "xyy",
        ciexyz: "xyz",
        cieluv: "luv",
        cielab: "lab",
        ycocg: "ycgco"
    };
    cs.lchab = cs.cielch = cs.cielchuv = cs.cielchab = "lch";
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
    function mH(L, H) {
        var x = H * PI / 180, r = gB(L), l = r.length, c = [], y, w;
        for (;l--; ) {
            y = r[l];
            w = y[1] / (sin(x) - y[0] * cos(x));
            if (w >= 0) c.unshift(w);
        }
        return min.apply(M, c);
    }
    function gB(L) {
        var r = [], a = pow(L + 16, 3) / 1560896, b = a > X6 ? a : L / X5, l = 3, w, x, y, z, c;
        for (;l--; ) {
            c = X1[l];
            x = c[0];
            y = c[1];
            z = c[2];
            for (w = 2; w--; ) {
                c = (632260 * z - 126452 * y) * b + 126452 * w;
                r.unshift([ (284517 * x - 94839 * z) * b / c, ((838422 * z + 769860 * y + 731718 * x) * L * b - 769860 * w * L) / c ]);
            }
        }
        return r;
    }
    function mL(L) {
        var a = [], r = gB(L), l = r.length, c, k, n;
        for (;l--; ) {
            c = r[l];
            k = c[0];
            n = c[1];
            c = n / (-1 / k - k);
            a[l] = sqrt(pow(c, 2) + pow(n + c * k, 2));
        }
        return min.apply(M, a);
    }
    function dP(a, b) {
        var i = 0, r = 0, l = 0, f = a.length - 1;
        for (;0 <= f ? l <= f : l >= f; i = 0 <= f ? ++l : --l) {
            r += a[i] * b[i];
        }
        return r;
    }
    var X1 = [ [ 3.240969941904521, -1.537383177570093, -.498610760293 ], [ -.96924363628087, 1.87596750150772, .041555057407175 ], [ .055630079696993, -.20397695888897, 1.056971514242878 ] ], X2 = [ [ .41239079926595, .35758433938387, .18048078840183 ], [ .21263900587151, .71516867876775, .072192315360733 ], [ .019330818715591, .11919477979462, .95053215224966 ] ], X3 = [ .95047, 1, 1.08883 ], X5 = 903.2962962, X6 = .0088564516, X7 = .19783000664283, X8 = .46831999493879, cv = {
        rgb2ryb: function(e) {
            var w = min.apply(M, e), r = e[0] - w, g = e[1] - w, b = e[2] - w, p = max(r, g, b), y = min(r, g);
            r -= y;
            g -= y;
            if (b && g) {
                b /= 2;
                g /= 2;
            }
            y += g;
            b += g;
            g = max(r, y, b);
            p = g ? p / g : 1;
            return [ r * p + w, y * p + w, b * p + w ];
        },
        ryb2rgb: function(e) {
            var w = min.apply(M, e), r = e[0] - w, y = e[1] - w, b = e[2] - w, p = max(r, y, b), g = min(y, b);
            y -= g;
            b -= g;
            if (b && g) {
                b *= 2;
                g *= 2;
            }
            r += y;
            g += y;
            y = max(r, g, b);
            y = y ? p / y : 1;
            return [ r * y + w, g * y + w, b * y + w ];
        },
        rgb2hsl: function(e) {
            var r = e[0] / 255, g = e[1] / 255, b = e[2] / 255, n = min(r, g, b), x = max(r, g, b), d = x - n, h = n === x ? 0 : r === x ? (g - b) / d : g === x ? (b - r) / d + 2 : (r - g) / d + 4, l = (n + x) / 2, s = x === n ? 0 : d / (l <= .5 ? x + n : 2 - x - n);
            return [ h * 60, s * 100, l * 100 ];
        },
        hsl2rgb: function(e) {
            var h = e[0] / 60, s = e[1] / 100, l = e[2] / 100, b = l <= .5 ? l * s + l : l + s - l * s, a = l * 2 - b, r = [ h + 2, h, h - 2 ], i = 3;
            for (;i--; ) {
                h = r[i] % 6;
                if (h < 0) h += 6;
                r[i] = (h < 1 ? (b - a) * h + a : h < 3 ? b : h < 4 ? (b - a) * (4 - h) + a : a) * 255;
            }
            return r;
        },
        rgb2hsv: function(e) {
            var r = e[0], g = e[1], b = e[2], n = min(r, g, b), x = max(r, g, b);
            return [ cv.rgb2hsl(e)[0], x ? 100 - 100 * n / x : 0, x * 100 / 255 ];
        },
        hsv2rgb: function(e) {
            var h = e[0] / 60, s = e[1] / 100, v = e[2] / 100 * 255, l = ~~h, y = v * s, f = h - l, p = v - y, q = v - y * f, t = v - y + y * f, z = l % 6;
            return z > 4 ? [ v, p, q ] : z > 3 ? [ t, p, v ] : z > 2 ? [ p, q, v ] : z > 1 ? [ p, v, t ] : z ? [ q, v, p ] : [ v, t, p ];
        },
        rgb2yuv: function(e) {
            var r = e[0], g = e[1], b = e[2], y = .299 * r + .587 * g + .114 * b;
            return [ y, ((b - y) * .493 + 111) / 222 * 255, ((r - y) * .877 + 155) / 312 * 255 ];
        },
        yuv2rgb: function(e) {
            var y = e[0], u = e[1] / 255 * 222 - 111, v = e[2] / 255 * 312 - 155;
            return [ y + v / .877, y - .39466 * u - .5806 * v, y + u / .493 ];
        },
        rgb2cmy: function(e) {
            for (var l = 3, r = []; l--; ) {
                r[l] = (1 - e[l] / 255) * 100;
            }
            return r;
        },
        cmy2rgb: function(e) {
            for (var l = 3, r = []; l--; ) {
                r[l] = (1 - e[l] / 100) * 255;
            }
            return r;
        },
        rgb2cmyk: function(e) {
            var r = e[0], g = e[1], b = e[2], x = max(r, g, b) / 255, a = e.slice(), i = 3;
            for (a[i] = 100 - x * 100; i--; ) {
                a[i] = x ? (1 - a[i] / 255 / x) * 100 : 0;
            }
            return a;
        },
        cmyk2rgb: function(e) {
            var k = e[3] / 100, l = 1 - k, a = e.slice(0, 3), i = 3;
            for (;i--; ) {
                a[i] = 255 * (1 - min(1, a[i] * l / 100 + k));
            }
            return a;
        },
        rgb2yiq: function(e) {
            var r = e[0] / 255, g = e[1] / 255, b = e[2] / 255;
            return [ .299 * r + .587 * g + .114 * b, .596 * r - .274 * g - .322 * b, .211 * r - .523 * g + .312 * b ];
        },
        yiq2rgb: function(e) {
            var y = e[0], i = e[1], q = e[2];
            return [ (y + .956 * i + .621 * q) * 255, (y - .272 * i - .647 * q) * 255, (y - 1.106 * i + 1.703 * q) * 255 ];
        },
        rgb2ycgco: function(e) {
            var r = e[0] / 255, g = e[1] / 255, b = e[2] / 255;
            return [ r / 4 + g / 2 + b / 4, g / 2 - r / 4 - b / 4, r / 2 - b / 2 ];
        },
        ycgco2rgb: function(e) {
            var y = e[0] * 255, g = e[1] * 255, o = e[2] * 255, m = y - g;
            return [ m + o, y + g, m - o ];
        },
        rgb2ydbdr: function(e) {
            var r = e[0] / 255, g = e[1] / 255, b = e[2] / 255;
            return [ .299 * r + .587 * g + .114 * b, 1.333 * b - .45 * r - .883 * g, .217 * b + 1.116 * g - 1.333 * r ];
        },
        ydbdr2rgb: function(e) {
            var x = e[0], y = e[1], z = e[2];
            return [ 255 * (x + 92303716148e-15 * y - .525912630661865 * z), 255 * (x - .129132898890509 * y + .267899328207599 * z), 255 * (x + .664679059978955 * y - 79202543533e-15 * z) ];
        },
        rgb2ypbpr: function(e) {
            var r = e[0], g = e[1], b = e[2], y = .2126 * r + .7152 * g + .0722 * b;
            return [ y, b - y, r - y ];
        },
        ypbpr2rgb: function(e) {
            var y = e[0], r = e[2] + y, b = e[1] + y;
            return [ r, (y - .0722 * b - .2126 * r) / .7152, b ];
        },
        rgb2ycbcr: function(e) {
            var r = e[0], g = e[1], b = e[2];
            return [ .299 * r + .587 * g + .114 * b, 128 - .168736 * r - .331264 * g + .5 * b, 128 + .5 * r - .418688 * g - .081312 * b ];
        },
        ycbcr2rgb: function(e) {
            var y = e[0], b = e[1], r = e[2], m = r - 128, n = b - 128;
            return [ y + 1.402 * m, y - .34414 * n - .71414 * m, y + 1.772 * n ];
        },
        rgb2xyz: function(e) {
            var l = 3, a = .055, f = [], c;
            for (;l--; ) {
                c = e[l] / 255;
                f[l] = c > .04045 ? pow((c + a) / (1 + a), 2.4) : c / 12.92;
            }
            for (c = [], l = 3; l--; ) {
                c[l] = dP(X2[l], f);
            }
            return c;
        },
        xyz2rgb: function(e) {
            var c = [], l = 3, i;
            for (;l--; ) {
                i = dP(X1[l], e);
                c[l] = (i <= .0031308 ? 12.92 * i : 1.055 * pow(i, 1 / 2.4) - .055) * 255;
            }
            return c;
        },
        rgb2hwb: function(e) {
            var r = e[0], g = e[1], b = e[2], x = 100 / 255;
            return [ cv.rgb2hsl(e)[0], x * min(r, min(g, b)), 100 - x * max(r, max(g, b)) ];
        },
        hwb2rgb: function(e) {
            var w = e[1] / 100, b = e[2] / 100, i = 3, r = cv.hsl2rgb([ e[0], 100, 50 ]);
            for (b = 1 - w - b, w *= 255; i--; ) {
                r[i] = r[i] * b + w;
            }
            return r;
        },
        hsv2hwb: function(e) {
            return [ e[0], e[2] * (100 - e[1]) / 100, 100 - e[2] ];
        },
        hwb2hsv: function(e) {
            return [ e[0], 100 - e[1] / (1 - e[2] / 100), 100 - e[2] ];
        },
        rgb2xyy: function(v) {
            return cv.xyz2xyy(cv.rgb2xyz(v));
        },
        xyz2xyy: function(e) {
            var x = e[0], y = e[1], n = x + y + e[2];
            return n ? [ x / n, y / n, y ] : [ 0, 0, y ];
        },
        xyy2rgb: function(v) {
            return cv.xyz2rgb(cv.xyy2xyz(v));
        },
        xyy2xyz: function(e) {
            var x = e[0], y = e[1], z = e[2];
            return y ? [ x * z / y, z, (1 - x - y) * z / y ] : [ 0, 0, 0 ];
        },
        rgb2lab: function(v) {
            return cv.xyz2lab(cv.rgb2xyz(v));
        },
        xyz2lab: function(e) {
            var v, l = 3;
            for (;l--; ) {
                v = e[l] / X3[l];
                e[l] = v > X6 ? pow(v, 1 / 3) : 7.787 * v + 16 / 116;
            }
            l = e[0];
            v = e[1];
            e = e[2];
            return [ 116 * v - 16, 500 * (l - v), 200 * (v - e) ];
        },
        lab2rgb: function(v) {
            return cv.xyz2rgb(cv.lab2xyz(v));
        },
        lab2xyz: function(e) {
            var l = e[0], a = e[1], b = e[2], y = (l + 16) / 116, x = a / 500 + y, z = y - b / 200;
            a = [ x, y, z ];
            for (l = 3; l--; ) {
                x = pow(b = a[l], 3);
                a[l] = (x > X6 ? x : (b - 16 / 116) / 7.787) * X3[l];
            }
            return a;
        },
        rgb2luv: function(v) {
            return cv.xyz2luv(cv.rgb2xyz(v));
        },
        xyz2luv: function(e) {
            var x = e[0], y = e[1], d = x + 15 * y + 3 * e[2], l = y <= X6 ? y * X5 : 116 * pow(y, 1 / 3) - 16;
            return !l ? [ 0, 0, 0 ] : [ l, 13 * l * (4 * x / d - X7), 13 * l * (9 * y / d - X8) ];
        },
        luv2rgb: function(v) {
            return cv.xyz2rgb(cv.luv2xyz(v));
        },
        luv2xyz: function(e) {
            if (!e[0]) return [ 0, 0, 0 ];
            var l = e[0], u = e[1], v = e[2], k = u / (13 * l) + X7, n = v / (13 * l) + X8, y = l <= 8 ? l / X5 : pow((l + 16) / 116, 3), x = 0 + 9 * y * k / 4 / n;
            return [ x, y, (9 * y - 15 * n * y - n * x) / (3 * n) ];
        },
        rgb2lch: function(v) {
            return cv.luv2lch(cv.rgb2luv(v));
        },
        luv2lch: function(e) {
            var u = e[1], v = e[2];
            return [ e[0], pow(pow(u, 2) + pow(v, 2), 1 / 2), atan2(v, u) * 180 / PI ];
        },
        lch2rgb: function(v) {
            return cv.luv2rgb(cv.lch2luv(v));
        },
        lch2luv: function(e) {
            var c = e[1], d = e[2] / 360 * 2 * PI;
            return [ e[0], cos(d) * c, sin(d) * c ];
        },
        rgb2husl: function(v) {
            return cv.lch2husl(cv.rgb2lch(v));
        },
        lch2husl: function(e) {
            var l = e[0], h = e[2];
            return [ h, 0 < l && l < 100 ? e[1] / mH(l, h) * 100 : 0, l ];
        },
        husl2rgb: function(v) {
            return cv.lch2rgb(cv.husl2lch(v));
        },
        husl2lch: function(e) {
            var h = e[0], l = e[2];
            return [ l, 0 < l && l < 100 ? mH(l, h) / 100 * e[1] : 0, h ];
        },
        rgb2huslp: function(v) {
            return cv.lch2huslp(cv.rgb2lch(v));
        },
        lch2huslp: function(e) {
            var l = e[0], h = e[2];
            return [ h, 0 < l && l < 100 ? e[1] / mL(l) * 100 : 0, l ];
        },
        huslp2rgb: function(v) {
            return cv.lch2rgb(cv.huslp2lch(v));
        },
        huslp2lch: function(e) {
            var h = e[0], l = e[2];
            return [ l, 0 < l && l < 100 ? mL(l) / 100 * e[1] : 0, h ];
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
                d = b > .25 ? sqrt(b) : ((16 * b - 12) * b + 4) * b;
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
    var re = [ /./, /^hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, /^rgba?\(\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, /^#([a-f0-9])([a-f0-9])([a-f0-9])(?:([a-f0-9])([a-f0-9])([a-f0-9]))?$/i ], co = [ "hsl", "hsv", "hwb", "rgb", "husl" ], gs = fb(function(r, g, b, a, m) {
        var x = m ? this.luminance(m - 1) * 255 : r * .3 + g * .59 + b * .11;
        return [ x, x, x, a ];
    });
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
            return hasOP.call(cs, rn(n));
        },
        isColor: function(v) {
            if (am(v) === "string") for (var l = re.length; l--; ) {
                if (l ? re[l].test(v) : v in kw) return true;
            }
            return v && v instanceof Color;
        },
        temperature: function(k) {
            k /= 100;
            return new Color([ k <= 66 ? 255 : 329.698727446 * pow(k - 60, -.1332047592), k <= 66 ? 99.4708025861 * log(k) - 161.1195681661 : 288.1221695283 * pow(k - 60, -.0755148492), k >= 66 ? 255 : k <= 19 ? 0 : 138.5177312231 * log(k - 10) - 305.0447927307 ]);
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
        hslHue: fv(0),
        saturation: fv(1),
        hslLightness: fv(2),
        hsvSaturation: fv(1, 1),
        brightness: fv(2, 1),
        whiteness: fv(1, 2),
        blackness: fv(2, 2),
        red: fv(0, 3),
        green: fv(1, 3),
        blue: fv(2, 3),
        hue: fv(0, 4),
        lightness: fv(2, 4),
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
        readable: function(y, d) {
            return abs(this.luminance() - new Color(y).luminance()) * 100 > (1 + d ? d : 50);
        },
        match: function(o) {
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
        },
        scheme: function(n, m) {
            var c = this.color("husl"), h = c[0], r = [];
            n = n || 6;
            m = m || 360 / n;
            for (;n--; h += m) {
                c[0] = h;
                r[n] = new Color(c, "husl");
            }
            return r;
        }
    });
    module.Color = Color;
    function Palette(m, n, a) {
        if (!(this instanceof Palette)) return new Palette(m, n, a);
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
        toJSON: tj,
        toString: tj,
        stuff: function(c, r, b) {
            c = new Color(c, 1);
            var n = c.css(0), o = this.cache[n], v = o ? o.ratio : 0;
            r = +r;
            r = r !== r ? 1 : ~~r;
            r = max(b ? r + v : r, 0);
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
                    r = round(r * 100 / this.total);
                }
            }
            return r;
        },
        mix: function() {
            var o = this.cache, c = [], p = [], x = 0, n, m, i, r = this.value;
            if (!r) {
                r = [ 0, 0, 0 ];
                for (i in o) if (hasOP.call(o, i) && o[i]) {
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
    function ap(a, p, c) {
        a[p] = new Color(c).color("rgba");
    }
    function cn(a, b) {
        return a - b;
    }
    function Gradient(c, p) {
        if (!(this instanceof Gradient)) return new Gradient(c, p);
        if (am(c) !== "array") {
            c = slice.call(arguments);
            p = [];
        } else {
            p = slice.call(p || []);
        }
        var l = c.length, b = 0, e = 100, x = e / (l - 1), a = {};
        for (;l--; ) {
            ap(a, p[l] = hasOP.call(p, l) ? p[l] : x * l, c[l]);
        }
        this.stops = p.sort(cn);
        this.cache = a;
    }
    cp(Gradient.prototype, {
        toJSON: tj,
        toString: tj,
        point: function(p, c) {
            p = +p;
            var a = this.cache;
            if (c) ap(a, p, c); else delete a[p];
            this.stops = keys(a).sort(cn);
            return this;
        },
        scale: function(p, b) {
            p = +p;
            var a = this.cache, k = this.stops, l = k.length, m = +k[0], n = +k[l - 1], c = a[p = kv(b ? p * (n - m) / 100 + m : p, [ m, n ])], x, y;
            if (!c) {
                for (;l--; y = +k[l]) {
                    x = +k[l];
                    if (!l || x < p) break;
                }
                c = [];
                k = y - x;
                m = p - x;
                n = y - p;
                x = a[x];
                y = a[y];
                for (l = 4; l--; ) {
                    c[l] = (x[l] * n + y[l] * m) / k;
                }
            }
            return new Color(c);
        },
        ieFilter: function(b) {
            var a = this.cache, k = this.stops;
            return 'progid:DXImageTransform.Microsoft.gradient(enabled="true", startColorstr="' + new Color(a[k[0]]).ieFilter() + '", endColorstr="' + new Color(a[k[k.length - 1]]).ieFilter() + '", gradientType="' + +!!b + '")';
        },
        css: function(b, t, p) {
            var s = ")", a = this.cache, k = this.stops, l = k.length, z = l - 1, x = k[0], y = k[z], m = y - x, i;
            for (;l--; ) {
                i = k[l];
                s = ", " + new Color(a[i]).css(+!p) + (l && l < z ? " " + round((i - x) / m * 100) + "%" : "") + s;
            }
            return (b ? "radial" : "linear") + "-gradient(" + (t || "0deg") + s;
        },
        map: function(x, y) {
            var d = max(x = +x, y = +y), b = min(x, y) || 0, a = this.cache, k = this.stops, l = k.length, t = [], r = {}, i;
            x = k[0];
            y = k[l - 1] - x;
            d = (d !== d ? 100 : d) - b;
            for (;l--; ) {
                i = k[l];
                r[t[l] = (i - x) * d / y + b] = a[i];
            }
            this.stops = t;
            this.cache = r;
            return this;
        }
    });
    module.Gradient = Gradient;
    return module;
});