
function J () {
	return this.css(1, 1);
}

function Color (v, s) {
	v = v || [ 0, 0, 0 ];
	return !(this instanceof Color) ? new Color(v, s) : v instanceof Color ? v : this.color(s, v);
}

cp(
	Color.prototype, 
	{
		toJSON     : J,
		toString   : J,
		css        : function (v, b) {
			if (type(v) === 'string') return this.color(0, v);
			v = +v || 0;
			b =  b && v;
			var s = (v > 1 ? 'hsl' : 'rgb') + (b ? 'a' : ''),
				c = this.color(s),
				l = c.length,
				i;
			for (; l--;) {
				i = Math.round(c[l]);
				if (!v) {
					i = i.toString(16);
					if (i.length < 2) i = '0' + i;
				}
				c[l] = l > 2 ? i / 100 : v > 1 && l ? i + '%' : i;
			}
			return v ? s + '(' + c + ')' : '#' + c.join('').toUpperCase();
		}, 
		/*color      : function (s, v) {
			var c = this.cache,
				p = this.space,
				x = R.length,
				w = x,
				o,
				b,
				f;
			if (s) {
				s = s.toLowerCase().replace(/^hsb/, 'hsv');
				b = /a$/.test(s);
				if (b) s = s.slice(0, -1);
			}
			else s = v ? 'rgb' : p;
			if (v) {
				if (type(v) === 'string') {
					v = v.toLowerCase();
					for(; x--;) if (o = R[x].exec(v)) {
						if (x) {
							if (x > 1) {
								s = 'rgb';
								b = o[6];
								v = x > 2 ? [
									parseInt(b ? o[1] + o[2] : o[1] + o[1], 16),
									parseInt(b ? o[3] + o[4] : o[2] + o[2], 16),
									parseInt(b ? o[5] + b    : o[3] + o[3], 16)
								] : [
									b ? o[1] * 2.55 : o[1],
									b ? o[3] * 2.55 : o[3],
									b ? o[5] * 2.55 : o[5],
									o[7] * 100
								];
							}
							else {
								s = 'hsl';
								v = o.slice(1, 5);
								v[3] *= 100;
							}
							break;
						}	
						else {
							v = K[v];
							if (v) x = w;
						}
					}
				}
				v = chkArr(slice.call(v), s);
				o = 100;
				if (v.length > s.length) {
					b = +v.pop();
					if (!isNaN(b)) o = b;
				}
				this.alpha = o;
				if (s !== p || '' + v !== '' + c[p]) {
					c = {};
					c[s] = v;
					this.cache = c;
				}
			}
			else {
				if (!c[s]) {
					f = C[p + '2' + s];
					c[s] = chkArr(f ? f(c[p]) : C['rgb2' + s](C[p + '2rgb'](c[p])), s);
				}
				f = slice.call(c[s]);
				if (b) f.push(this.alpha);
			}
			this.space = s;
			return f || this;
		},*/
        websafe    : function () {
			var r = this.color('rgb'),
				l = 3,
				v,
				i,
				n;
			for(; l--;) {
				v = Math.round(r[l]);
				for(i = 0; i < 256; i+= 51) {
					n = i + 51;
					if (v >= i && v <= n) {
						v = v - i > 25 ? n : i;
						break;
					}
				}
				r[l] = v;
			}
			return new Color(r, 'rgb').css();
        },		
		opacity    : function (v, b) {
			return v == null ? this.alpha : this.alpha = chkVal(+v, 2); 
		},
		shade      : function () {
		
		},
		tint       : function () {
		
		},
		luminance  : function () {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			var c = this.color('rgb'),
				l = c.length,
				x;
			for(; l--;) {
				 x= c[l] / 255;
				 c[l] = x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
			}
			return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
		},
		contrast   : function (c) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			c = Color(c).luminance() + 0.05;
			var b = this.luminance() + 0.05;
			return b > c ? b / c : c / b;
		},
		complement : function () {
			var n = 'hsla',
				v = this.color(n);
			v[0] = (v[0] + 180) % 360;
			return new Color(v, n);
		},	
		blend      : function (c, f) {
			// http://en.wikipedia.org/wiki/Blend_modes
			if (f == null) f = 50;
			var n = 'rgba',
				b = this.color(n),
				r = [],
				l = 4,
				t = type(f);
			c = new Color(c).color(n);	
		    if (t === 'number') {
				f/= 100; 
		        var w = f * 2 - 1,
					a = (b[3] - c[3]) / 100,
				x = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
				for(w = 1 - x; l--;) {
					r[l] = l > 2 ? b[l] * f + c[l] * (1 - f) : b[l] * x + c[l] * w;
				}
			}
			else {
				f = t === 'string' ? B[f] : f;
				for(l = 3; l--;) {
					r[l] = f(b[l], c[l]);
				}
			}
			return new Color(r, n);
		},
		filter     : function (f, x, y) {
			return new Color((type(f) === 'string' ? F[f] : f)(this.color('rgba'), x, y));
		},
		schema     : function (f) {
			f = (type(f) === 'string' ? M[f] : f)(this);
			var n = f.pop(),
				l = f.unshift(this.color(n)),
				a = this.alpha;
			for(; l--;) {
				f[l].push(a);
				f[l] = new Color(f[l], n);
			}
			return f;
		}
	}
);
cp(
	Color,
	{
		keywords     : K,
		spaces       : keys(S),
		GOLDEN_RATIO : 0.618033988749895,   // h+
		eq           : function () {
		
		},
		isColor      : function () {
			
		}
	}
);

/**
* 色彩类型。
* @class Sumi.Color
* @see {@link http://en.wikipedia.org/wiki/Color_space}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
* @see {@link http://en.wikipedia.org/wiki/Blend_modes}
* @param {string|array} [src=#000] - 用于创建色彩对象的源数据
* @param {string} [src.src] - 色值定义字符串，支持 {@link http://www.w3.org/TR/css3-color/|CSS Color Module Level 3} 标准声明的所有格式
* @param {array} [src.src] - 符合由 space 参数指定的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 命名分量顺序的色值数组
* @param {string} [space=rgb] - 当 src 参数格式为数组时，指定所对应的 {@link http://en.wikipedia.org/wiki/Color_space 色彩空间} 名称。当前已支持的所有色彩空间名称，可以通过 {@link Sumi.Color.spaces} 查看
* @example
* var color = Sumi.Color('#FF0');
* var color = Sumi.Color('hsl(80, 5%, 3%)');
* var color = new Sumi.Color('rgb(255, 0, 0)');
* var color = Sumi.Color([255, 0, 0, 50], 'rgba');
* var color = new Sumi.Color([100, 0, 0, 0], 'cmyk');
*/
	