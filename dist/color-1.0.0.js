function am(a) {
    return {}.toString.call(a).split(/\W+/)[2].toLowerCase();
}

function rn(a) {
    return a.toLowerCase().replace(/a$/, "");
}

function cp(a, b) {
    var c, d = {}.hasOwnProperty;
    for (c in b) d.call(b, c) && (a[c] = b[c]);
}

function kv(a, b) {
    a = +a;
    var c = am(b);
    return "array" === c ? min(b[1], max(b[0], a)) : b && "number" === c && (a %= b) < 0 ? a + b : a;
}

function ka(a, b) {
    for (var c = b.length; c--; ) a[c] = kv(a[c], b[c]);
    return a;
}

function tj(a) {
    return this.css(a);
}

function fb(a, b) {
    return function() {
        return b = b || "rgba", new Color(a.apply(this, this.color(b).concat(slice.call(arguments))), b);
    };
}

function fv(a, b) {
    return function(c, d) {
        return this.value(co[b || 0], a || 0, c, d);
    };
}

function Color(a, b) {
    return this instanceof Color ? a instanceof Color ? b ? a.clone() : a : (this.alpha = 100, 
    this.color(b, a)) : new Color(a, b);
}

function Gradient() {}

var max = Math.max, min = Math.min, pow = Math.pow, abs = Math.abs, round = Math.round, cs = {
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
}, kw = {
    transparent: "rgba(0, 0, 0, 0)",
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
}, cv = {
    rgb2hsl: function(a) {
        var b = a[0] / 255, c = a[1] / 255, d = a[2] / 255, e = min(b, c, d), f = max(b, c, d), g = f - e, h = e === f ? 0 : b === f ? (c - d) / g : c === f ? (d - b) / g + 2 : (b - c) / g + 4, i = (e + f) / 2, j = f === e ? 0 : g / (.5 >= i ? f + e : 2 - f - e);
        return [ 60 * h, 100 * j, 100 * i ];
    },
    rgb2hsv: function(a) {
        var b = a[0], c = a[1], d = a[2], e = min(b, c, d), f = max(b, c, d);
        return [ cv.rgb2hsl(a)[0], f ? 100 - 100 * e / f : 0, 100 * f / 255 ];
    },
    rgb2hwb: function(a) {
        var b = a[0], c = a[1], d = a[2], e = 100 / 255;
        return [ cv.rgb2hsl(a)[0], e * min(b, min(c, d)), 100 - e * max(b, max(c, d)) ];
    },
    rgb2cmy: function(a) {
        for (var b = 3, c = []; b--; ) c[b] = 100 * (1 - a[b] / 255);
        return c;
    },
    rgb2cmyk: function(a) {
        var b = a[0], c = a[1], d = a[2], e = max(b, c, d) / 255, f = a.slice(), g = 3;
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
        for (var b, c = [], d = 3; d--; ) b = a[d] / 255, c[d] = b > .04045 ? pow((b + .055) / 1.055, 2.4) : b / 12.92;
        return d = c[0], b = c[1], c = c[2], [ 41.24 * d + 35.76 * b + 18.05 * c, 21.26 * d + 71.52 * b + 7.22 * c, 1.93 * d + 11.92 * b + 95.05 * c ];
    },
    rgb2xyy: function(a) {
        return cv.xyz2xyy(cv.rgb2xyz(a));
    },
    rgb2lab: function(a) {
        return cv.xyz2lab(cv.rgb2xyz(a));
    },
    rgb2lch: function(a) {
        return cv.lab2lch(cv.rgb2lab(a));
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
        var b = a[1] / 100, c = a[2] / 100, d = 3, e = cv.hsl2rgb([ a[0], 100, 50 ]);
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
        for (var b = a[3] / 100, c = 1 - b, d = a.slice(0, 3), e = 3; e--; ) d[e] = 255 * (1 - min(1, d[e] * c / 100 + b));
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
        for (b = 3; b--; ) d = e[b] / 100, e[b] = 255 * (d > .0031308 ? 1.055 * pow(d, 1 / 2.4) - .055 : 12.92 * d);
        return e;
    },
    xyz2xyy: function(a) {
        var b = a[0], c = a[1], d = b + c + a[2];
        return d ? [ b / d, c / d, c ] : [ 0, 0, c ];
    },
    xyz2lab: function(a) {
        for (var b, c = [ 95.047, 100, 108.883 ], d = 3; d--; ) b = a[d] / c[d], a[d] = b > .008856 ? pow(b, 1 / 3) : 7.787 * b + 16 / 116;
        return d = a[0], c = a[1], a = a[2], [ 116 * c - 16, 500 * (d - c), 200 * (c - a) ];
    },
    lab2rgb: function(a) {
        return cv.xyz2rgb(cv.lab2xyz(a));
    },
    lab2xyz: function(a) {
        var b = a[0], c = a[1], d = a[2], e = (b + 16) / 116, f = c / 500 + e, g = e - d / 200;
        for (c = [ f, e, g ], g = [ 95.047, 100, 108.883 ], b = 3; b--; ) f = pow(d = c[b], 3), 
        c[b] = (f > .008856 ? f : (d - 16 / 116) / 7.787) * g[b];
        return c;
    },
    lab2lch: function(a) {
        var b = a[1], c = a[2], d = 360 * Math.atan2(c, b) / 2 / Math.PI % 360;
        return [ a[0], Math.sqrt(b * b + c * c), 0 > d ? d + 360 : d ];
    },
    lch2rgb: function(a) {
        return cv.lab2rgb(cv.lch2lab(a));
    },
    lch2lab: function(a) {
        var b = a[2] % 360 * 2 * Math.PI / 360;
        return [ a[0], a[1] * Math.cos(b), a[1] * Math.sin(b) ];
    },
    xyy2rgb: function(a) {
        return cv.xyz2rgb(cv.xyy2xyz(a));
    },
    xyy2xyz: function(a) {
        var b = a[0], c = a[1], d = a[2];
        return c ? [ b * d / c, d, (1 - b - c) * d / c ] : [ 0, 0, 0 ];
    }
}, bl = {
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
        return 255 - abs(255 - a - b);
    },
    difference: function(a, b) {
        return abs(a - b);
    },
    average: function(a, b) {
        return (a + b) / 2;
    },
    exclusion: function(a, b) {
        return a + b - 2 * a * b / 255;
    },
    hardlight: function(a, b) {
        return bl.overlay(b, a);
    },
    softlight: function(a, b) {
        a /= 255, b /= 255;
        var c = 1, d = a;
        return b > .5 && (d = 1, c = a > .25 ? Math.sqrt(a) : ((16 * a - 12) * a + 4) * a), 
        255 * (a - (1 - 2 * b) * d * (c - a));
    },
    darken: function(a, b) {
        return min(a, b);
    },
    lighten: function(a, b) {
        return max(a, b);
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
        return 255 === a ? a : min(255, (b << 8) / (255 - a));
    },
    burn: function(a, b) {
        return 0 === a ? a : max(0, 255 - (255 - b << 8) / a);
    }
}, sc = {
    analogous: function(a, b, c) {
        b = b || 8, c = 360 / (c || 30);
        var d = "hsl", e = a.color(d), f = (e[0] - (c * b >> 1) + 720) % 360, g = e[1], h = e[2];
        for (a = [ d ]; --b; ) a.unshift([ f += c, g, h ]);
        return a;
    },
    triad: function(a) {
        var b = "rgb", c = a.color(b), d = c[0], e = c[1], f = c[2];
        return [ [ f, d, e ], [ e, f, d ], b ];
    },
    splitcomplement: function(a) {
        var b = "hsl", c = a.color(b), d = c[0], e = c[1], f = c[2];
        return [ [ d + 72, e, f ], [ d + 216, e, f ], b ];
    },
    tetrad: function(a) {
        var b = "rgb", c = a.color(b), d = c[0], e = c[1], f = c[2];
        return [ [ f, d, f ], [ f, e, d ], [ d, f, d ], b ];
    },
    monochromatic: function(a, b) {
        b = b || 6;
        var c = "hsv", d = a.color(c), e = d[0], f = d[1], g = d[2];
        for (a = [ c ]; --b; ) g += 20, g %= 100, a.unshift([ e, f, g ]);
        return a;
    }
}, re = [ /./, /^hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, /^rgba?\(\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, /^#([a-f0-9])([a-f0-9])([a-f0-9])(?:([a-f0-9])([a-f0-9])([a-f0-9]))?$/i ], co = [ "hsl", "hsv", "hwb", "rgb" ], gs = fb(function(a, b, c, d, e) {
    var f = e ? 255 * this.luminance(e - 1) : .3 * a + .59 * b + .11 * c;
    return [ f, f, f, d ];
}), slice = re.slice;

cp(Color, {
    keywords: kw,
    spaces: cs,
    support: function(a) {
        return cs.hasOwnProperty(rn(a));
    },
    isColor: function(a) {
        if ("string" === am(a)) for (var b = re.length; b--; ) if (b ? re[b].test(a) : a in kw) return !0;
        return a && a instanceof Color;
    },
    temperature: function(a) {
        return a /= 100, new Color([ 66 >= a ? 255 : 329.698727446 * pow(a - 60, -.1332047592), 66 >= a ? 99.4708025861 * Math.log(a) - 161.1195681661 : 288.1221695283 * pow(a - 60, -.0755148492), a >= 66 ? 255 : 19 >= a ? 0 : 138.5177312231 * Math.log(a - 10) - 305.0447927307 ]);
    },
    grayscale: function(a, b) {
        return a = b ? 255 * a : a, new Color([ a, a, a ]);
    }
}), cp(Color.prototype, {
    toJSON: tj,
    toString: tj,
    clone: function() {
        var a = this.space + "a";
        return new Color(this.color(a), a);
    },
    equal: function(a) {
        return this.css(1, 1) === new Color(a).css(1, 1);
    },
    value: function(a, b, c, d) {
        c = +c;
        var e = cs[rn(a)], f = e.length, g = b >= f, h = this.color(a + "a"), i = h[b = g ? f : b];
        return c === c && (c = h[b] = kv(d ? i + c : c, g ? [ 0, 100 ] : e[b]), i !== c && this.color(a, h), 
        i = this), i;
    },
    opacity: function(a, b) {
        a = +a;
        var c = this.alpha;
        return a === a && (this.alpha = kv(b ? c + a : a, [ 0, 100 ]), c = this), c;
    },
    color: function(a, b) {
        var c, d = re.length, e = d, f = this, g = this.space, h = this.cache || {}, i = /a$/.test(a = "string" === am(a) && a.toLowerCase() || "rgb");
        if ("string" === am(c = cs[a = i ? rn(a) : a]) && (c = cs[a = c]), b) {
            if ("string" === am(b)) {
                for (b = b.toLowerCase(); d--; ) if (g = re[d].exec(b)) {
                    if (d) {
                        d > 1 ? (a = "rgb", i = g[6], b = d > 2 ? [ parseInt(i ? g[1] + g[2] : g[1] + g[1], 16), parseInt(i ? g[3] + g[4] : g[2] + g[2], 16), parseInt(i ? g[5] + i : g[3] + g[3], 16) ] : [ i ? 2.55 * g[1] : g[1], i ? 2.55 * g[3] : g[3], i ? 2.55 * g[5] : g[5], g[7] ]) : (a = "hsl", 
                        b = g.slice(1, 5)), c = cs[a], isNaN(b[3] *= 100) && b.pop();
                        break;
                    }
                    b = kw[b], b && (d = e);
                }
            } else b = re.slice.call(b);
            ka(b, c).length > c.length && this.opacity(b.pop()), (g = h[a]) && "" + g == "" + b || ((this.cache = {})[a] = b);
        } else h[a] || (d = h[g], e = cv[g + "2" + a], h[a] = ka(e ? e(d) : cv["rgb2" + a](ka(cv[g + "2rgb"](d), cs.rgb)), c)), 
        f = h[a].slice(), i && f.push(this.opacity());
        return this.space = a, f;
    },
    css: function(a, b) {
        if ("string" === am(a)) return this.color(0, a);
        a = 1 + a ? ~~a : 1, b = 1 + b ? b : this.alpha < 100;
        for (var c, d = (a > 1 ? "hsl" : "rgb") + (b && a ? "a" : ""), e = this.color(d), f = e.length; f--; ) c = round(e[f]), 
        e[f] = f > 2 ? c / 100 : a ? a > 1 && f ? c + "%" : c : c.toString(16).replace(/^.$/, "0$&");
        return a ? d + "(" + e + ")" : "#" + e.join("").toUpperCase();
    },
    ieFilter: function() {
        return this.css(0).replace("#", "#" + kv(round(2.55 * this.alpha), [ 0, 255 ]).toString(16).replace(/^.$/, "0$&").toUpperCase());
    },
    web: function(a, b) {
        a = a ? 17 : 51;
        for (var c = this.color("rgba"), d = 3; d--; ) c[d] = ((c[d] + a / 2) / a >> 0) * a;
        return c = new Color(c), b ? c : c.css(0);
    },
    luminance: function(a) {
        a = +a, a !== a && (a = 1);
        for (var b, c = this.color("rgb"), d = c.length; d--; ) b = c[d] / 255, c[d] = a ? b : .03928 >= b ? b / 12.92 : pow((b + .055) / 1.055, 2.4);
        return .2126 * c[0] + .7152 * c[1] + .0722 * c[2];
    },
    luma: function() {
        return (255 * this.color("yiq")[0]).toFixed();
    },
    contrast: function(a) {
        a = Color(a).luminance() + .05;
        var b = this.luminance() + .05;
        return b > a ? b / a : a / b;
    },
    difference: function(a) {
        a = Color(a).color("rgb");
        for (var b, c = this.color("rgb"), d = [ 299, 587, 114 ], e = 3, f = 0, g = 0; e--; ) b = a[e] - c[e], 
        f += d[e] * b, g += abs(b);
        return f = abs(f) / 1e3, [ f, g, (f > 125) + (g > 500) ];
    },
    hue: fv(0),
    saturation: fv(1),
    lightness: fv(2),
    chroma: fv(1, 1),
    brightness: fv(2, 1),
    whiteness: fv(1, 2),
    blackness: fv(2, 2),
    invert: fb(function(a, b, c, d) {
        return [ 255 ^ a, 255 ^ b, 255 ^ c, d ];
    }),
    sepia: fb(function(a, b, c, d) {
        return [ .393 * a + .769 * b + .189 * c, .349 * a + .686 * b + .168 * c, .272 * a + .534 * b + .131 * c, d ];
    }),
    greyscale: function(a) {
        return a > 2 ? this.clone().saturation(0) : gs.call(this, a);
    },
    complement: function() {
        return this.clone().hue(180, !0);
    },
    mix: function(a, b, c) {
        a = new Color(a).color("rgba");
        var b = isNaN(b) ? .5 : b / 100, d = 2 * b - 1, e = this.color("rgba"), f = c ? (e[3] - a[3]) / 100 : 0, g = ((d * f == -1 ? d : (d + f) / (1 + d * f)) + 1) / 2, h = 1 - g;
        return new Color([ e[0] * g + a[0] * h, e[1] * g + a[1] * h, e[2] * g + a[2] * h, c ? e[3] * b + a[3] * (1 - b) : e[3] ]);
    },
    blend: function(a, b) {
        var c = this.color("rgba"), d = [ , , , c[3] ], e = 4;
        a = new Color(a).color("rgba"), b in bl && (b = bl[b]);
        for (e = 3; e--; ) d[e] = b(c[e], a[e]);
        return new Color(d);
    },
    tint: function(a) {
        return new Color([ 255, 255, 255, this.alpha ]).mix(this, a);
    },
    shade: function(a) {
        return new Color([ 0, 0, 0, this.alpha ]).mix(this, a);
    },
    tone: function(a, b) {
        return this.greyscale(b).mix(this, a);
    },
    match: function(a, b) {
        return 100 * abs(this.luminance() - new Color(a).luminance()) > (1 + b ? b : 50);
    },
    mate: function(a) {
        for (var b, c, d = "array" === am(a) ? a : a ? slice.call(arguments) : [ "#000", "#FFF" ], e = d.length, f = this.luminance(), g = 0, h = d[0]; e--; ) c = new Color(d[e]), 
        b = abs(c.luminance() - f), b > g && (g = b, h = c);
        return h;
    },
    opaque: function(a, b) {
        return a = this.mix(a, this.alpha), a.alpha = 100, b ? a.css(0) : a;
    }
});