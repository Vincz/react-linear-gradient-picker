!function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t(require("react")) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.linearGradientPicker = t(require("react")) : e.linearGradientPicker = t(e.react)
}(global, (function (e) {
	return function (e) {
		var t = {};

		function n(r) {
			if (t[r]) return t[r].exports;
			var o = t[r] = { i: r, l: !1, exports: {} };
			return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
		}

		return n.m = e, n.c = t, n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
		}, n.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
		}, n.t = function (e, t) {
			if (1 & t && (e = n(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
				return e[t]
			}.bind(null, o));
			return r
		}, n.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return n.d(t, "a", t), t
		}, n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "", n(n.s = 29)
	}([function (e, t, n) {
		e.exports = n(13)()
	}, function (t, n) {
		t.exports = e
	}, function (e, t, n) {
		var r = n(10), o = n(11), i = n(12);
		e.exports = function (e, t) {
			return r(e) || o(e, t) || i()
		}
	}, function (e, t, n) {
		"use strict";
		e.exports = function (e) {
			var t = [];
			return t.toString = function () {
				return this.map((function (t) {
					var n = function (e, t) {
						var n = e[1] || "", r = e[3];
						if (!r) return n;
						if (t && "function" == typeof btoa) {
							var o = (a = r, u = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u), "/*# ".concat(c, " */")),
								i = r.sources.map((function (e) {
									return "/*# sourceURL=".concat(r.sourceRoot).concat(e, " */")
								}));
							return [n].concat(i).concat([o]).join("\n")
						}
						var a, u, c;
						return [n].join("\n")
					}(t, e);
					return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n
				})).join("")
			}, t.i = function (e, n) {
				"string" == typeof e && (e = [[null, e, ""]]);
				for (var r = {}, o = 0; o < this.length; o++) {
					var i = this[o][0];
					null != i && (r[i] = !0)
				}
				for (var a = 0; a < e.length; a++) {
					var u = e[a];
					null != u[0] && r[u[0]] || (n && !u[2] ? u[2] = n : n && (u[2] = "(".concat(u[2], ") and (").concat(n, ")")), t.push(u))
				}
			}, t
		}
	}, function (e, t, n) {
		"use strict";
		var r, o = {}, i = function () {
			return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
		}, a = function () {
			var e = {};
			return function (t) {
				if (void 0 === e[t]) {
					var n = document.querySelector(t);
					if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
						n = n.contentDocument.head
					} catch (e) {
						n = null
					}
					e[t] = n
				}
				return e[t]
			}
		}();

		function u(e, t) {
			for (var n = [], r = {}, o = 0; o < e.length; o++) {
				var i = e[o], a = t.base ? i[0] + t.base : i[0], u = { css: i[1], media: i[2], sourceMap: i[3] };
				r[a] ? r[a].parts.push(u) : n.push(r[a] = { id: a, parts: [u] })
			}
			return n
		}

		function c(e, t) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n], i = o[r.id], a = 0;
				if (i) {
					for (i.refs++; a < i.parts.length; a++) i.parts[a](r.parts[a]);
					for (; a < r.parts.length; a++) i.parts.push(g(r.parts[a], t))
				} else {
					for (var u = []; a < r.parts.length; a++) u.push(g(r.parts[a], t));
					o[r.id] = { id: r.id, refs: 1, parts: u }
				}
			}
		}

		function s(e) {
			var t = document.createElement("style");
			if (void 0 === e.attributes.nonce) {
				var r = n.nc;
				r && (e.attributes.nonce = r)
			}
			if (Object.keys(e.attributes).forEach((function (n) {
				t.setAttribute(n, e.attributes[n])
			})), "function" == typeof e.insert) e.insert(t); else {
				var o = a(e.insert || "head");
				if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
				o.appendChild(t)
			}
			return t
		}

		var f, l = (f = [], function (e, t) {
			return f[e] = t, f.filter(Boolean).join("\n")
		});

		function p(e, t, n, r) {
			var o = n ? "" : r.css;
			if (e.styleSheet) e.styleSheet.cssText = l(t, o); else {
				var i = document.createTextNode(o), a = e.childNodes;
				a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
			}
		}

		function d(e, t, n) {
			var r = n.css, o = n.media, i = n.sourceMap;
			if (o && e.setAttribute("media", o), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = r; else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(r))
			}
		}

		var v = null, b = 0;

		function g(e, t) {
			var n, r, o;
			if (t.singleton) {
				var i = b++;
				n = v || (v = s(t)), r = p.bind(null, n, i, !1), o = p.bind(null, n, i, !0)
			} else n = s(t), r = d.bind(null, n, t), o = function () {
				!function (e) {
					if (null === e.parentNode) return !1;
					e.parentNode.removeChild(e)
				}(n)
			};
			return r(e), function (t) {
				if (t) {
					if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
					r(e = t)
				} else o()
			}
		}

		e.exports = function (e, t) {
			(t = t || {}).attributes = "object" == typeof t.attributes ? t.attributes : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i());
			var n = u(e, t);
			return c(n, t), function (e) {
				for (var r = [], i = 0; i < n.length; i++) {
					var a = n[i], s = o[a.id];
					s && (s.refs--, r.push(s))
				}
				e && c(u(e, t), t);
				for (var f = 0; f < r.length; f++) {
					var l = r[f];
					if (0 === l.refs) {
						for (var p = 0; p < l.parts.length; p++) l.parts[p]();
						delete o[l.id]
					}
				}
			}
		}
	}, function (e, t) {
		e.exports = function (e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
	}, function (e, t, n) {
		var r = n(17);
		e.exports = function (e, t) {
			if (null == e) return {};
			var n, o, i = r(e, t);
			if (Object.getOwnPropertySymbols) {
				var a = Object.getOwnPropertySymbols(e);
				for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
			}
			return i
		}
	}, function (e, t, n) {
		"undefined" != typeof self && self, e.exports = function () {
			return n = {}, e.m = t = [function (e, t, n) {
				"use strict";
				n.r(t);
				var r = new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i), o = function (e, t) {
					var n = 1 < arguments.length && void 0 !== t ? t : 1, o = r.exec(e);
					return o ? { r: parseInt(o[1], 16), g: parseInt(o[2], 16), b: parseInt(o[3], 16), a: n } : void 0
				}, i = function (e) {
					var t = e.r, n = e.g, r = e.b, o = e.a, i = void 0 === o ? 1 : o;
					return 1 !== i ? "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(i, ")") : "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")")
				}, a = function (e) {
					return null != e
				};

				function u(e) {
					return Number("".concat(e).trim().endsWith("%") ? e.trim().replace("%", "") : e)
				}

				function c(e) {
					return e <= 0 || Math.abs(e) <= m ? 0 : e
				}

				function s(e) {
					return { x: c(Math.cos(e)), y: c(Math.sin(e)) }
				}

				function f(e) {
					return e * Math.PI / 180
				}

				var l = function (e) {
					var t = e.x1, n = e.x2, r = e.y1, o = e.y2, i = function (e, t) {
						return function (e) {
							if (Array.isArray(e)) return e
						}(e) || function (e, t) {
							if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
								var n = [], r = !0, o = !1, i = void 0;
								try {
									for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
								} catch (e) {
									o = !0, i = e
								} finally {
									try {
										r || null == u.return || u.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							}
						}(e, t) || function () {
							throw new TypeError("Invalid attempt to destructure non-iterable instance")
						}()
					}([t, n, r, o].map(u), 4);
					t = i[0], n = i[1], r = i[2];
					var a = n - t, c = (o = i[3]) - r;
					return 0 == c ? n < t ? 270 : 90 : 0 == a ? o < r ? 0 : 180 : function (e, t, n) {
						return e < (1 < arguments.length && void 0 !== t ? t : 0) ? 360 + e : (2 < arguments.length && void 0 !== n ? n : 360) < e ? e - 360 : e
					}(180 * Math.atan2(c, a) / Math.PI + 90)
				}, p = "style", d = "stop-color", v = ["x1", "x2", "y1", "y2"], b = function (e) {
					return Array.from(e.querySelectorAll("stop")).map((function (e) {
						var t, n, r = y(e.getAttribute("offset"));
						if (e.hasAttribute(d) && (t = e.getAttribute(d), n = e.getAttribute("stop-opacity"))) {
							var i = o(t);
							if (i) {
								var a = i.r, u = i.g, c = i.b;
								t = "rgba(".concat(a, ", ").concat(u, ", ").concat(c, ", ").concat(n, ")")
							}
						}
						return !t && e.hasAttribute(p) && (t = function (e) {
							var t = document.createElement("div");
							return t.setAttribute("style", e), t.style
						}(e.getAttribute(p))[d]), { offset: Number(r), color: t }
					}))
				}, g = 360, m = Math.pow(2, -52), y = function (e) {
					return (e = e.toString().trim()).endsWith("%") ? Number(e.replace("%", "")) : 100 * Number(e)
				};

				function h(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function O(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				var A = new DOMParser;

				function j(e) {
					return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
						return typeof e
					} : function (e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function x(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function w(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				var P = {
					string: function (e) {
						var t = A.parseFromString(e, "image/svg+xml").querySelector("linearGradient");
						if (!t) throw new Error("Couldn't parse svg string into linearGradient SVGElement");
						return function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? h(n, !0).forEach((function (t) {
									O(e, t, n[t])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(n).forEach((function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								}))
							}
							return e
						}({}, function (e) {
							return v.reduce((function (t, n) {
								return Object.assign(t, O({}, n, e.getAttribute(n)))
							}), {})
						}(t), {
							stops: b(t).filter((function (e) {
								var t = e.offset, n = e.color;
								return a(t) && a(n)
							}))
						})
					}, object: function (e) {
						return function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? x(n, !0).forEach((function (t) {
									w(e, t, n[t])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(n).forEach((function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								}))
							}
							return e
						}({}, e, {
							stops: e.stops.map((function (e) {
								var t = e.offset, n = e.color, r = e.opacity;
								return { offset: y(t), color: i(o(n, r)) }
							}))
						})
					}
				}, S = {
					getBackground: function (e) {
						var t = j(e), n = P[t];
						if (!n) throw new Error("Cannot parse non JSON / SVG String input");
						var r = (e = n(e)).stops || e.children, o = l(e);
						return {
							angle: o, background: function (e) {
								var t = e.stops;
								return "linear-gradient(".concat(e.angle, "deg, ").concat(t.map((function (e) {
									return "".concat(e.color, " ").concat(e.offset, "%")
								})).join(", "), ")")
							}({ angle: o, stops: r })
						}
					}, getGradientCords: function (e) {
						var t = function (e) {
							var t = (g - (0 < arguments.length && void 0 !== e ? e : 0)) % g;
							return { startPoint: s(f(90 - t)), endPoint: s(f(270 - t)) }
						}(e), n = t.startPoint, r = t.endPoint;
						return { x1: n.x, y1: n.y, x2: r.x, y2: r.y }
					}
				};
				t.default = S
			}], e.c = n, e.d = function (t, n, r) {
				e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r })
			}, e.r = function (e) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
			}, e.t = function (t, n) {
				if (1 & n && (t = e(t)), 8 & n) return t;
				if (4 & n && "object" == typeof t && t && t.__esModule) return t;
				var r = Object.create(null);
				if (e.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: t
				}), 2 & n && "string" != typeof t) for (var o in t) e.d(r, o, function (e) {
					return t[e]
				}.bind(null, o));
				return r
			}, e.n = function (t) {
				var n = t && t.__esModule ? function () {
					return t.default
				} : function () {
					return t
				};
				return e.d(n, "a", n), n
			}, e.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}, e.p = "", e(e.s = 0);

			function e(r) {
				if (n[r]) return n[r].exports;
				var o = n[r] = { i: r, l: !1, exports: {} };
				return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
			}

			var t, n
		}()
	}, function (e, t, n) {
		var r = n(18), o = n(19), i = n(20);
		e.exports = function (e) {
			return r(e) || o(e) || i()
		}
	}, function (e, t) {
		function n() {
			return e.exports = n = Object.assign || function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}, n.apply(this, arguments)
		}

		e.exports = n
	}, function (e, t) {
		e.exports = function (e) {
			if (Array.isArray(e)) return e
		}
	}, function (e, t) {
		e.exports = function (e, t) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
				var n = [], r = !0, o = !1, i = void 0;
				try {
					for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
				} catch (e) {
					o = !0, i = e
				} finally {
					try {
						r || null == u.return || u.return()
					} finally {
						if (o) throw i
					}
				}
				return n
			}
		}
	}, function (e, t) {
		e.exports = function () {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}, function (e, t, n) {
		"use strict";
		var r = n(14);

		function o() {
		}

		function i() {
		}

		i.resetWarningCache = o, e.exports = function () {
			function e(e, t, n, o, i, a) {
				if (a !== r) {
					var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
					throw u.name = "Invariant Violation", u
				}
			}

			function t() {
				return e
			}

			e.isRequired = e;
			var n = {
				array: e,
				bool: e,
				func: e,
				number: e,
				object: e,
				string: e,
				symbol: e,
				any: e,
				arrayOf: t,
				element: e,
				elementType: e,
				instanceOf: t,
				node: e,
				objectOf: t,
				oneOf: t,
				oneOfType: t,
				shape: t,
				exact: t,
				checkPropTypes: i,
				resetWarningCache: o
			};
			return n.PropTypes = n, n
		}
	}, function (e, t, n) {
		"use strict";
		e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	}, function (e, t, n) {
		var r = n(16);
		"string" == typeof r && (r = [[e.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		n(4)(r, o);
		r.locals && (e.exports = r.locals)
	}, function (e, t, n) {
		(e.exports = n(3)(!1)).push([e.i, ".ap {\n    flex: none;\n    box-sizing: border-box;\n    background-color: #fff;\n    border: 1px solid #d2d5dc;\n    border-radius: 50%;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.ap .apc {\n    width: 6px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.ap .aph {\n    width: 6px;\n    height: 6px;\n    background-color: #686ac9;\n    display: inline-block;\n    border-radius: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 4px;\n    margin: auto;\n    cursor: pointer;\n}", ""])
	}, function (e, t) {
		e.exports = function (e, t) {
			if (null == e) return {};
			var n, r, o = {}, i = Object.keys(e);
			for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
			return o
		}
	}, function (e, t) {
		e.exports = function (e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
		}
	}, function (e, t) {
		e.exports = function (e) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
		}
	}, function (e, t) {
		e.exports = function () {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}
	}, function (e, t, n) {
		var r = n(22);
		"string" == typeof r && (r = [[e.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		n(4)(r, o);
		r.locals && (e.exports = r.locals)
	}, function (e, t, n) {
		t = e.exports = n(3)(!1);
		var r = n(23)(n(24));
		t.push([e.i, ".cs {\n    height: 17px;\n    position: absolute;\n    width: 11px;\n    cursor: pointer;\n    background: url(" + r + ") right center;\n}\n\n.cs div {\n    height: 7px;\n    left: 2px;\n    width: 7px;\n    position: absolute;\n    top: 8px;\n}\n\n.active {\n    background-position: left center;\n}", ""])
	}, function (e, t, n) {
		"use strict";
		e.exports = function (e, t) {
			return "string" != typeof(e = e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) || t ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
		}
	}, function (e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAQAAABzuJQIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAB7SURBVCjP3c7BDQMhDETRP4gyUlb6SEphe9w+JgdArIMPm2uGizV6MpbpERgBzGb0tuZcLvTbDSoHrMUMQmFrY/IaaOeKB7yE+1yTz43irZNXbXcCFosuXqFt9g0cyZICT7LkrU+b62vGeVv4IX+Phc+tfABZK3xj5cgHC29ECUeufxkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDUtMzFUMTg6NDE6MzIrMDI6MDD31tLGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA1LTMxVDE4OjQxOjMyKzAyOjAwhotqegAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="
	}, function (e, t, n) {
		var r = n(26);
		"string" == typeof r && (r = [[e.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		n(4)(r, o);
		r.locals && (e.exports = r.locals)
	}, function (e, t, n) {
		(e.exports = n(3)(!1)).push([e.i, ".cp div {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n}\n.cp div:hover {\n  border: 1px solid #fff;\n}\n", ""])
	}, function (e, t, n) {
		var r = n(28);
		"string" == typeof r && (r = [[e.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		n(4)(r, o);
		r.locals && (e.exports = r.locals)
	}, function (e, t, n) {
		(e.exports = n(3)(!1)).push([e.i, ".gp {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}", ""])
	}, function (e, t, n) {
		"use strict";
		n.r(t);
		var r = function (e, t) {
			return e.offset - t.offset
		}, o = function (e) {
			return e.sort(r)
		}, i = function () {
		}, a = function (e) {
			return e < 0 ? 360 + e : e > 360 ? e - 360 : e
		}, u = function (e) {
			if (!e) return { y: 0, x: 0 };
			var t = e.getBoundingClientRect(), n = t.top, r = t.left;
			return { y: n + t.height / 2, x: r + t.width / 2 }
		}, c = function (e, t, n) {
			var r = t - n.y, o = e - n.x, i = Math.atan2(r, o);
			return Math.round(i * (180 / Math.PI)) + 90
		}, s = function (e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = e % t;
			if (0 === n) return e;
			var r = n > t / 2 ? t - n : -1 * n;
			return e + r
		}, f = n(5), l = n.n(f), p = n(7), d = n.n(p);

		function v(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function b(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? v(n, !0).forEach((function (t) {
					l()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(n).forEach((function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		var g = function (e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90, n = d.a.getGradientCords(t),
					r = d.a.getBackground(b({}, n, { stops: e })), o = r.background;
				return { gradient: n, background: o, angle: t }
			}, m = n(2), y = n.n(m), h = n(1), O = n.n(h), A = n(0), j = n.n(A), x = Object(A.shape)({
				id: A.number.isRequired,
				color: A.string.isRequired,
				offset: A.number.isRequired,
				isActive: A.bool.isRequired,
				pointX: A.number
			}), w = Object(A.shape)({ min: A.number.isRequired, max: A.number.isRequired, drop: A.number }),
			P = Object(A.shape)({
				id: A.number,
				color: A.string.isRequired,
				offset: A.string.isRequired,
				opacity: A.number
			}), S = {
				stop: x.isRequired,
				limits: w.isRequired,
				onPosChange: A.func.isRequired,
				onDeleteColor: A.func.isRequired,
				onDragStart: A.func,
				onDragEnd: A.func
			}, E = {
				width: A.number.isRequired,
				stops: Object(A.arrayOf)(x),
				limits: w,
				disabled: A.bool,
				onPosChange: A.func.isRequired,
				onAddColor: A.func.isRequired,
				onDeleteColor: A.func.isRequired,
				onDragStart: A.func,
				onDragEnd: A.func
			}, D = { width: A.number.isRequired, height: A.number.isRequired, palette: Object(A.arrayOf)(P).isRequired },
			C = {
				onPaletteChange: A.func.isRequired,
				paletteHeight: A.number,
				width: A.number,
				stopRemovalDrop: A.number,
				maxStops: A.number,
				minStops: A.number,
				palette: Object(A.arrayOf)(P)
			}, R = { angle: A.number.isRequired, onChange: A.func.isRequired, size: A.number, snap: A.number },
			M = function (e) {
				var t = e.onDragStart, n = void 0 === t ? i : t, r = e.onDrag, o = e.onDragEnd,
					a = void 0 === o ? i : o, u = Object(h.useState)({}), c = y()(u, 2), s = c[0], f = c[1],
					l = Object(h.useState)(!1), p = y()(l, 2), d = p[0], v = p[1], b = function (e) {
						v(!0), n(e)
					}, g = function () {
						v(!1), a(s.change), f({})
					}, m = function (e) {
						d && (s.change = r(e))
					};
				return Object(h.useEffect)((function () {
					return d && (document.addEventListener("mousemove", m), document.addEventListener("mouseup", g)), function () {
						document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", g)
					}
				}), [d]), [function (e) {
					e.preventDefault(), e.stopPropagation(), e.button || b(e)
				}, b, g]
			}, T = (n(15), function (e) {
				var t = e.angle, n = e.onChange, r = e.size, o = void 0 === r ? 48 : r, i = e.snap,
					f = void 0 === i ? 5 : i, l = Object(h.useRef)(), p = { height: o, width: o }, d = function (e) {
						var t = e.clientX, r = e.clientY, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							i = u(l.current), p = c(t, r, i), d = a(p), v = o ? s(d, f) : d;
						return n(v), v
					}, v = M({
						onDragStart: function (e) {
							return d(e, !0)
						}, onDrag: d, onDragEnd: function (e) {
							if (e) {
								var t = s(e, f);
								n(t)
							}
						}
					}), b = y()(v, 1)[0];
				return O.a.createElement("div", {
					className: "ap",
					ref: l,
					onMouseDown: b,
					style: p
				}, O.a.createElement("span", {
					className: "apc",
					style: { transform: "rotate(".concat(t, "deg)"), height: o }
				}, O.a.createElement("i", { className: "aph" })))
			});
		T.propTypes = R;
		var k = T, F = n(6), q = n.n(F), I = n(8), N = n.n(I), B = n(9), _ = n.n(B), U = function (e) {
			var t = e.limits, n = e.stop, r = e.initialPos, o = e.colorStopRef, i = e.onPosChange, a = e.onDragStart,
				u = e.onDragEnd, c = e.onDeleteColor, s = Object(h.useState)(r), f = y()(s, 2), l = f[0], p = f[1],
				d = M({
					onDragStart: function (e) {
						var t = e.clientX;
						p(t), a(n.id)
					}, onDrag: function (e) {
						var r, a = e.clientX, u = e.clientY, s = n.id, f = n.offset, p = t.min, d = t.max,
							v = (r = o).current ? r.current.getBoundingClientRect().top : 0;
						if (Math.abs(u - v) > t.drop) return c(s);
						var b = function (e, t, n) {
							return Math.max(Math.min(e, n), t)
						}(f - l + a, p, d);
						i({ id: s, offset: b })
					}, onDragEnd: function () {
						return u(n.id)
					}
				}), v = y()(d, 2), b = v[0], g = v[1];
			return Object(h.useEffect)((function () {
				var e = n.pointX;
				e && g({ clientX: e })
			}), []), [b]
		}, G = (n(21), function (e) {
			var t = e.stop, n = e.limits, r = e.onPosChange, o = e.onDeleteColor, a = e.onDragStart,
				u = void 0 === a ? i : a, c = e.onDragEnd, s = void 0 === c ? i : c, f = Object(h.useRef)(), l = U({
					stop: t,
					limits: n,
					onPosChange: r,
					onDragStart: u,
					onDragEnd: s,
					onDeleteColor: o,
					colorStopRef: f
				}), p = y()(l, 1)[0], d = t.offset, v = t.color, b = t.isActive;
			return O.a.createElement("div", {
				className: b ? "cs active" : "cs",
				ref: f,
				style: { left: d },
				onMouseDown: p
			}, O.a.createElement("div", { style: { backgroundColor: v } }))
		});
		G.propTypes = S;
		var L = G, X = function (e, t) {
			return { width: e, height: 17, position: "relative", cursor: t ? "default" : "crosshair" }
		}, z = function (e) {
			var t = e.width, n = e.stops, r = e.disabled, o = void 0 !== r && r, i = e.onAddColor,
				a = q()(e, ["width", "stops", "disabled", "onAddColor"]);
			return O.a.createElement("div", {
				className: "csh", style: X(t, o), onMouseDown: function (e) {
					if (e.preventDefault(), !e.button) {
						var t = e.clientX - e.target.getBoundingClientRect().left;
						i({ offset: t, pointX: e.clientX })
					}
				}
			}, n.map((function (e) {
				return O.a.createElement(L, _()({ key: e.id, stop: e }, a))
			})))
		};
		z.propTypes = E;
		var V = z, J = function () {
			return "" + Math.random().toString(36).substr(2, 9)
		}, Y = function (e) {
			var t = e.palette, n = e.width, r = e.height, i = o(t), a = Object(h.useMemo)(J, [t.length]);
			return O.a.createElement("div", {
				className: "palette",
				style: { width: n, height: r }
			}, O.a.createElement("svg", {
				width: "100%",
				height: "100%"
			}, O.a.createElement("defs", null, O.a.createElement("linearGradient", {
				id: a,
				x1: "0",
				y1: "0.5",
				x2: "1",
				y2: "0.5"
			}, " ", i.map((function (e) {
				var t = e.id, n = e.offset, r = e.color, o = e.opacity, i = void 0 === o ? 1 : o;
				return O.a.createElement("stop", { key: t, offset: n, style: { stopColor: r, stopOpacity: i } })
			})))), O.a.createElement("rect", {
				x: "0",
				y: "0",
				width: "100%",
				height: "100%",
				fill: "url(#".concat(a, ")")
			})))
		};
		Y.propTypes = D;
		var H = Y, Q = [{ value: "#000000", name: "black" }, { value: "#808080", name: "gray" }, {
			value: "#C0C0C0",
			name: "silver"
		}, { value: "#FFFFFF", name: "white" }, { value: "#FF0000", name: "red" }, {
			value: "#800000",
			name: "maroon"
		}, { value: "#FFFF00", name: "yellow" }, { value: "#808000", name: "olive" }, {
			value: "#00FF00",
			name: "lime"
		}, { value: "#008000", name: "green" }, { value: "#00FFFF", name: "aqua" }, {
			value: "#008080",
			name: "teal"
		}, { value: "#0000FF", name: "blue" }, { value: "#000080", name: "navy" }, {
			value: "#FF00FF",
			name: "fuchsia"
		}, { value: "#800080", name: "purple" }], W = (n(25), function (e) {
			var t = e.onSelect;
			return O.a.createElement("div", { className: "cp" }, Q.map((function (e) {
				var n = e.value, r = e.name;
				return O.a.createElement("div", {
					onClick: function () {
						return t(n)
					}, key: r, title: r, style: { backgroundColor: n }
				})
			})))
		});
		W.propTypes = { color: j.a.string.isRequired, onSelect: j.a.func.isRequired };
		var Z = W;
		n(27);

		function K(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function $(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? K(n, !0).forEach((function (t) {
					l()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(n).forEach((function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		var ee = function (e) {
			return Math.max.apply(Math, N()(e.map((function (e) {
				return e.id
			})))) + 1
		}, te = function (e) {
			var t = e.palette, n = e.activeId, r = e.activePoint, o = e.width;
			return t.map((function (e) {
				return $({}, e, { id: e.id, offset: o * e.offset - 5, isActive: e.id === n, pointX: r })
			}))
		}, ne = function (e, t) {
			var n = e.find((function (e) {
				return e.id === t
			}));
			return $({}, n, { offset: Number(n.offset) })
		}, re = function (e) {
			var t = e.palette, n = e.paletteHeight, r = void 0 === n ? 32 : n, i = e.width, a = void 0 === i ? 400 : i,
				u = e.stopRemovalDrop, c = void 0 === u ? 50 : u, s = e.minStops, f = void 0 === s ? 2 : s,
				l = e.maxStops, p = void 0 === l ? 5 : l, d = e.children, v = e.onPaletteChange;
			t = function (e) {
				return e.map((function (e, t) {
					return $({}, e, { id: e.id || t + 1 })
				}))
			}(t);
			var b = Object(h.useState)(1), g = y()(b, 2), m = g[0], A = g[1], j = Object(h.useState)(), x = y()(j, 2),
				w = x[0], P = x[1], S = Object(h.useMemo)((function () {
					return { min: -5, max: a - 5, drop: c }
				}), [a]), E = function (e) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
					t = t.map((function (t) {
						return m === t.id ? $({}, t, { color: e, opacity: n }) : t
					})), D(t)
				}, D = function (e) {
					var t = o(e).map((function (e) {
						var t = e.offset, n = q()(e, ["offset"]);
						return $({ offset: Number(t).toFixed(3) }, n)
					}));
					v(t)
				}, C = a - 10, R = t.length >= p;
			return O.a.createElement("div", { className: "gp" }, O.a.createElement(H, {
				width: C,
				height: r,
				palette: t
			}), O.a.createElement(V, {
				width: C,
				disabled: R,
				stops: te({ activePoint: w, palette: t, width: C, activeId: m }),
				limits: S,
				onPosChange: function (e) {
					var n = e.id, r = e.offset, o = t.map((function (e) {
						return n === e.id ? $({}, e, { offset: (r + 5) / a }) : e
					}));
					D(o)
				},
				onAddColor: function (e) {
					var n = e.offset, r = e.pointX;
					if (!(t.length >= p)) {
						var o = ne(t, m).color, i = { id: ee(t), offset: n / a, color: o }, u = [].concat(N()(t), [i]);
						P(r), D(u)
					}
				},
				onDeleteColor: function (e) {
					if (!(t.length <= f)) {
						var n = t.filter((function (t) {
							return t.id !== e
						})), r = n.reduce((function (e, t) {
							return t.offset < e.offset ? t : e
						}), t[0]).id;
						A(r), D(n)
					}
				},
				onDragStart: function (e) {
					A(e)
				}
			}), function () {
				var e = ne(t, m), n = { color: e.color, opacity: e.opacity, onSelect: E };
				if (!d) return O.a.createElement(Z, n);
				var r = O.a.Children.only(d);
				return O.a.cloneElement(r, n)
			}())
		};
		re.propTypes = C;
		var oe = re;
		n.d(t, "GradientPicker", (function () {
			return oe
		})), n.d(t, "AnglePicker", (function () {
			return k
		})), n.d(t, "getGradientPreview", (function () {
			return g
		}))
	}])
}));
//# sourceMappingURL=index.js.map