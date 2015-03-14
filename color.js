
cp(
	Color.prototype, 
	{
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
