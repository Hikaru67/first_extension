(function (t) { function e(e) { for (var r, i, u = e[0], s = e[1], c = e[2], p = 0, f = []; p < u.length; p++)i = u[p], Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]), o[i] = 0; for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]); l && l(e); while (f.length) f.shift()(); return a.push.apply(a, c || []), n() } function n() { for (var t, e = 0; e < a.length; e++) { for (var n = a[e], r = !0, u = 1; u < n.length; u++) { var s = n[u]; 0 !== o[s] && (r = !1) } r && (a.splice(e--, 1), t = i(i.s = n[0])) } return t } var r = {}, o = { app: 0 }, a = []; function i(e) { if (r[e]) return r[e].exports; var n = r[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports } i.m = t, i.c = r, i.d = function (t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, i.r = function (t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function (t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var n = Object.create(null); if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) { return t[e] }.bind(null, r)); return n }, i.n = function (t) { var e = t && t.__esModule ? function () { return t["default"] } : function () { return t }; return i.d(e, "a", e), e }, i.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "/"; var u = window["webpackJsonp"] = window["webpackJsonp"] || [], s = u.push.bind(u); u.push = e, u = u.slice(); for (var c = 0; c < u.length; c++)e(u[c]); var l = s; a.push([0, "chunk-vendors"]), n() })({ 0: function (t, e, n) { t.exports = n("56d7") }, "56d7": function (t, e, n) { "use strict"; n.r(e); n("cadf"), n("551c"), n("f751"), n("097d"); var r = n("2b0e"), o = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { attrs: { id: "app" } }, [n("div", { attrs: { id: "main" } }, [n("router-view")], 1), t._m(0)]) }, a = [function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "copyright" }, [t._v(" Copyright "), n("a", { attrs: { target: "_blank", href: "https://phambinh.net" } }, [t._v("phambinh.net")])]) }], i = (n("f26c"), n("2877")), u = {}, s = Object(i["a"])(u, o, a, !1, null, null, null), c = s.exports, l = n("8c4f"), p = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "qr-code" }, [n("div", { staticClass: "guide" }, [t._v(" Scan QRcode below to access this web page. ")]), n("qr-code", { staticClass: "qr-code__content", attrs: { value: t.url, size: "300" } }), n("div", { staticClass: "input-group", staticStyle: { "margin-top": "30px" } }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: t.url, expression: "url" }], staticClass: "qr-code__url input", attrs: { id: "url" }, domProps: { value: t.url }, on: { input: function (e) { e.target.composing || (t.url = e.target.value) } } }), n("button", { staticClass: "btn", on: { click: t.copy } }, [t._v("Copy")])]), n("div", { staticClass: "message", staticStyle: { "min-height": "13px" } }, [t._v(t._s(t.message))])], 1) }, f = [], d = (n("6b54"), n("d7b0")), v = { components: { QrCode: d["a"] }, data: function () { return { url: "https://phambinh.net", message: "" } }, created: function () { var t = this; chrome.tabs.query({ active: !0, lastFocusedWindow: !0 }, (function (e) { t.url = e[0].url })) }, methods: { copy: function () { var t = document.getElementById("url"); t.select(), t.setSelectionRange(0, 99999), document.execCommand("copy"), this.message = "copied"; var e = this; setTimeout((function () { e.message = "" }), 2e3) } }, watch: { url: function (t) { function e() { return t.apply(this, arguments) } return e.toString = function () { return t.toString() }, e }((function () { console.log(url) })) } }, h = v, m = Object(i["a"])(h, p, f, !1, null, null, null), g = m.exports; r["a"].use(l["a"]); var b = new l["a"]({ routes: [{ path: "/", name: "home", component: g }] }), y = n("2f62"); r["a"].use(y["a"]); var _ = new y["a"].Store({ state: {}, mutations: {}, actions: {} }); r["a"].config.productionTip = !1, new r["a"]({ router: b, store: _, render: function (t) { return t(c) } }).$mount("#app") }, e8aa: function (t, e, n) { }, f26c: function (t, e, n) { "use strict"; n("e8aa") } });
//# sourceMappingURL=app.2ddea402.js.map