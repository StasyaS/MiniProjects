function setTimeZone() {
    var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
    $("#timezone").text(e)
}

function convertTimes() {
    $(".timeToConvert").each(function () {
        $(this).text(getCourseTime(new Date("1/1/2020 " + $(this).text())))
    }), $(".singleTimeToConvert").each(function () {
        $(this).text(getSingleTime(new Date("1/1/2020 " + $(this).text())))
    })
}

function programDollarsAndDates(e) {
    var t = $("#dollars-and-start-dates .active-city").removeClass("active-city").data("city");
    $("." + t).hide();
    var i = e.addClass("active-city").data("city");
    $("." + i).show()
}

function getCourseTime(e) {
    return startTimeString = e.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
    }).replace("AM", "").replace("PM", ""), e.setTime(e.getTime() + 108e5), endTimeString = e.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
    }), startTimeString + " - " + endTimeString
}

function getSingleTime(e) {
    return e.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
    })
}

function advanceContent(e) {
    var t = $(".oyab-content").length - 1,
        i = $(".oyab-content.active").data("oyab-index");
    "forward" === e ? showContent(i >= t ? 0 : i + 1) : "backward" === e && showContent(0 === i ? t : i - 1)
}

function showContent(e) {
    var t = '*[data-oyab-index="' + e + '"]';
    $(t).addClass("active"), $(t).siblings().removeClass("active")
}! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function i(e) {
        var t = e.length,
            i = rt.type(e);
        return "function" === i || rt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function n(e, t, i) {
        if (rt.isFunction(t)) return rt.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return rt.grep(e, function (e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (ht.test(t)) return rt.filter(t, e, i);
            t = rt.filter(t, e)
        }
        return rt.grep(e, function (e) {
            return rt.inArray(e, t) >= 0 !== i
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function a(e) {
        var t = _t[e] = {};
        return rt.each(e.match(bt) || [], function (e, i) {
            t[i] = !0
        }), t
    }

    function o() {
        pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (pt.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (o(), rt.ready())
    }

    function l(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(Ct, "-$1").toLowerCase();
            if (i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : St.test(i) ? rt.parseJSON(i) : i
                } catch (r) {}
                rt.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !rt.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, i, n) {
        if (rt.acceptData(e)) {
            var r, a, o = rt.expando,
                s = e.nodeType,
                l = s ? rt.cache : e,
                u = s ? e[o] : e[o] && o;
            if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof t) return u || (u = s ? e[o] = X.pop() || rt.guid++ : o), l[u] || (l[u] = s ? {} : {
                toJSON: rt.noop
            }), ("object" == typeof t || "function" == typeof t) && (n ? l[u] = rt.extend(l[u], t) : l[u].data = rt.extend(l[u].data, t)), a = l[u], n || (a.data || (a.data = {}), a = a.data), void 0 !== i && (a[rt.camelCase(t)] = i), "string" == typeof t ? (r = a[t], null == r && (r = a[rt.camelCase(t)])) : r = a, r
        }
    }

    function d(e, t, i) {
        if (rt.acceptData(e)) {
            var n, r, a = e.nodeType,
                o = a ? rt.cache : e,
                s = a ? e[rt.expando] : rt.expando;
            if (o[s]) {
                if (t && (n = i ? o[s] : o[s].data)) {
                    rt.isArray(t) ? t = t.concat(rt.map(t, rt.camelCase)) : t in n ? t = [t] : (t = rt.camelCase(t), t = t in n ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete n[t[r]];
                    if (i ? !u(n) : !rt.isEmptyObject(n)) return
                }(i || (delete o[s].data, u(o[s]))) && (a ? rt.cleanData([e], !0) : it.deleteExpando || o != o.window ? delete o[s] : o[s] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function f() {
        return !1
    }

    function p() {
        try {
            return pt.activeElement
        } catch (e) {}
    }

    function g(e) {
        var t = Lt.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length;) i.createElement(t.pop());
        return i
    }

    function m(e, t) {
        var i, n, r = 0,
            a = typeof e.getElementsByTagName !== wt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== wt ? e.querySelectorAll(t || "*") : void 0;
        if (!a)
            for (a = [], i = e.childNodes || e; null != (n = i[r]); r++) !t || rt.nodeName(n, t) ? a.push(n) : rt.merge(a, m(n, t));
        return void 0 === t || t && rt.nodeName(e, t) ? rt.merge([e], a) : a
    }

    function v(e) {
        Pt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return rt.nodeName(e, "table") && rt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== rt.find.attr(e, "type")) + "/" + e.type, e
    }

    function _(e) {
        var t = Ut.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) rt._data(i, "globalEval", !t || rt._data(t[n], "globalEval"))
    }

    function k(e, t) {
        if (1 === t.nodeType && rt.hasData(e)) {
            var i, n, r, a = rt._data(e),
                o = rt._data(t, a),
                s = a.events;
            if (s) {
                delete o.handle, o.events = {};
                for (i in s)
                    for (n = 0, r = s[i].length; r > n; n++) rt.event.add(t, i, s[i][n])
            }
            o.data && (o.data = rt.extend({}, o.data))
        }
    }

    function w(e, t) {
        var i, n, r;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !it.noCloneEvent && t[rt.expando]) {
                r = rt._data(t);
                for (n in r.events) rt.removeEvent(t, n, r.handle);
                t.removeAttribute(rt.expando)
            }
            "script" === i && t.text !== e.text ? (b(t).text = e.text, _(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), it.html5Clone && e.innerHTML && !rt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Pt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
        }
    }

    function S(t, i) {
        var n, r = rt(i.createElement(t)).appendTo(i.body),
            a = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(r[0])) ? n.display : rt.css(r[0], "display");
        return r.detach(), a
    }

    function C(e) {
        var t = pt,
            i = Jt[e];
        return i || (i = S(e, t), "none" !== i && i || (Qt = (Qt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Qt[0].contentWindow || Qt[0].contentDocument).document, t.write(), t.close(), i = S(e, t), Qt.detach()), Jt[e] = i), i
    }

    function T(e, t) {
        return {
            get: function () {
                var i = e();
                if (null != i) return i ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function D(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, r = hi.length; r--;)
            if (t = hi[r] + i, t in e) return t;
        return n
    }

    function M(e, t) {
        for (var i, n, r, a = [], o = 0, s = e.length; s > o; o++) n = e[o], n.style && (a[o] = rt._data(n, "olddisplay"), i = n.style.display, t ? (a[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Mt(n) && (a[o] = rt._data(n, "olddisplay", C(n.nodeName)))) : (r = Mt(n), (i && "none" !== i || !r) && rt._data(n, "olddisplay", r ? i : rt.css(n, "display"))));
        for (o = 0; s > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function A(e, t, i) {
        var n = li.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function P(e, t, i, n, r) {
        for (var a = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === i && (o += rt.css(e, i + Dt[a], !0, r)), n ? ("content" === i && (o -= rt.css(e, "padding" + Dt[a], !0, r)), "margin" !== i && (o -= rt.css(e, "border" + Dt[a] + "Width", !0, r))) : (o += rt.css(e, "padding" + Dt[a], !0, r), "padding" !== i && (o += rt.css(e, "border" + Dt[a] + "Width", !0, r)));
        return o
    }

    function I(e, t, i) {
        var n = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            a = ei(e),
            o = it.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, a);
        if (0 >= r || null == r) {
            if (r = ti(e, t, a), (0 > r || null == r) && (r = e.style[t]), ni.test(r)) return r;
            n = o && (it.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + P(e, t, i || (o ? "border" : "content"), n, a) + "px"
    }

    function F(e, t, i, n, r) {
        return new F.prototype.init(e, t, i, n, r)
    }

    function E() {
        return setTimeout(function () {
            fi = void 0
        }), fi = rt.now()
    }

    function O(e, t) {
        var i, n = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) i = Dt[r], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function N(e, t, i) {
        for (var n, r = (bi[t] || []).concat(bi["*"]), a = 0, o = r.length; o > a; a++)
            if (n = r[a].call(i, t, e)) return n
    }

    function L(e, t, i) {
        var n, r, a, o, s, l, u, c, d = this,
            h = {},
            f = e.style,
            p = e.nodeType && Mt(e),
            g = rt._data(e, "fxshow");
        i.queue || (s = rt._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, rt.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], u = rt.css(e, "display"), c = "none" === u ? rt._data(e, "olddisplay") || C(e.nodeName) : u, "inline" === c && "none" === rt.css(e, "float") && (it.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), i.overflow && (f.overflow = "hidden", it.shrinkWrapBlocks() || d.always(function () {
            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (r = t[n], gi.exec(r)) {
                if (delete t[n], a = a || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[n]) continue;
                    p = !0
                }
                h[n] = g && g[n] || rt.style(e, n)
            } else u = void 0;
        if (rt.isEmptyObject(h)) "inline" === ("none" === u ? C(e.nodeName) : u) && (f.display = u);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = rt._data(e, "fxshow", {}), a && (g.hidden = !p), p ? rt(e).show() : d.done(function () {
                rt(e).hide()
            }), d.done(function () {
                var t;
                rt._removeData(e, "fxshow");
                for (t in h) rt.style(e, t, h[t])
            });
            for (n in h) o = N(p ? g[n] : 0, n, d), n in g || (g[n] = o.start, p && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function $(e, t) {
        var i, n, r, a, o;
        for (i in e)
            if (n = rt.camelCase(i), r = t[n], a = e[i], rt.isArray(a) && (r = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), o = rt.cssHooks[n], o && "expand" in o) {
                a = o.expand(a), delete e[n];
                for (i in a) i in e || (e[i] = a[i], t[i] = r)
            } else t[n] = r
    }

    function R(e, t, i) {
        var n, r, a = 0,
            o = yi.length,
            s = rt.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = fi || E(), i = Math.max(0, u.startTime + u.duration - t), n = i / u.duration || 0, a = 1 - n, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(a);
                return s.notifyWith(e, [u, a, i]), 1 > a && l ? i : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: rt.extend({}, t),
                opts: rt.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: fi || E(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var n = rt.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function (t) {
                    var i = 0,
                        n = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) u.tweens[i].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for ($(c, u.opts.specialEasing); o > a; a++)
            if (n = yi[a].call(u, e, c, u.opts)) return n;
        return rt.map(c, N, u), rt.isFunction(u.opts.start) && u.opts.start.call(e, u), rt.fx.timer(rt.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function j(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                a = t.toLowerCase().match(bt) || [];
            if (rt.isFunction(i))
                for (; n = a[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function H(e, t, i, n) {
        function r(s) {
            var l;
            return a[s] = !0, rt.each(e[s] || [], function (e, s) {
                var u = s(t, i, n);
                return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var a = {},
            o = e === Vi;
        return r(t.dataTypes[0]) || !a["*"] && r("*")
    }

    function W(e, t) {
        var i, n, r = rt.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && rt.extend(!0, e, i), e
    }

    function z(e, t, i) {
        for (var n, r, a, o, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in s)
                if (s[o] && s[o].test(r)) {
                    l.unshift(o);
                    break
                } if (l[0] in i) a = l[0];
        else {
            for (o in i) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                n || (n = o)
            }
            a = a || n
        }
        return a ? (a !== l[0] && l.unshift(a), i[a]) : void 0
    }

    function V(e, t, i, n) {
        var r, a, o, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
        for (a = c.shift(); a;)
            if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
            if (o = u[l + " " + a] || u["* " + a], !o)
                for (r in u)
                    if (s = r.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                        o === !0 ? o = u[r] : u[r] !== !0 && (a = s[0], c.unshift(s[1]));
                        break
                    } if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: o ? d : "No conversion from " + l + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function B(e, t, i, n) {
        var r;
        if (rt.isArray(t)) rt.each(t, function (t, r) {
            i || Ui.test(e) ? n(e, r) : B(e + "[" + ("object" == typeof r ? t : "") + "]", r, i, n)
        });
        else if (i || "object" !== rt.type(t)) n(e, t);
        else
            for (r in t) B(e + "[" + r + "]", t[r], i, n)
    }

    function Y() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function q() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return rt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var X = [],
        G = X.slice,
        Z = X.concat,
        K = X.push,
        Q = X.indexOf,
        J = {},
        et = J.toString,
        tt = J.hasOwnProperty,
        it = {},
        nt = "1.11.1",
        rt = function (e, t) {
            return new rt.fn.init(e, t)
        },
        at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ot = /^-ms-/,
        st = /-([\da-z])/gi,
        lt = function (e, t) {
            return t.toUpperCase()
        };
    rt.fn = rt.prototype = {
        jquery: nt,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function () {
            return G.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
        },
        pushStack: function (e) {
            var t = rt.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return rt.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(rt.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function () {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: X.sort,
        splice: X.splice
    }, rt.extend = rt.fn.extend = function () {
        var e, t, i, n, r, a, o = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || rt.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)
            if (null != (r = arguments[s]))
                for (n in r) e = o[n], i = r[n], o !== i && (u && i && (rt.isPlainObject(i) || (t = rt.isArray(i))) ? (t ? (t = !1, a = e && rt.isArray(e) ? e : []) : a = e && rt.isPlainObject(e) ? e : {}, o[n] = rt.extend(u, a, i)) : void 0 !== i && (o[n] = i));
        return o
    }, rt.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === rt.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === rt.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !rt.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== rt.type(e) || e.nodeType || rt.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (it.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[et.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && rt.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(ot, "ms-").replace(st, lt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, a = 0,
                o = e.length,
                s = i(e);
            if (n) {
                if (s)
                    for (; o > a && (r = t.apply(e[a], n), r !== !1); a++);
                else
                    for (a in e)
                        if (r = t.apply(e[a], n), r === !1) break
            } else if (s)
                for (; o > a && (r = t.call(e[a], a, e[a]), r !== !1); a++);
            else
                for (a in e)
                    if (r = t.call(e[a], a, e[a]), r === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(at, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? rt.merge(n, "string" == typeof e ? [e] : e) : K.call(n, e)), n
        },
        inArray: function (e, t, i) {
            var n;
            if (t) {
                if (Q) return Q.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in t && t[i] === e) return i
            }
            return -1
        },
        merge: function (e, t) {
            for (var i = +t.length, n = 0, r = e.length; i > n;) e[r++] = t[n++];
            if (i !== i)
                for (; void 0 !== t[n];) e[r++] = t[n++];
            return e.length = r, e
        },
        grep: function (e, t, i) {
            for (var n, r = [], a = 0, o = e.length, s = !i; o > a; a++) n = !t(e[a], a), n !== s && r.push(e[a]);
            return r
        },
        map: function (e, t, n) {
            var r, a = 0,
                o = e.length,
                s = i(e),
                l = [];
            if (s)
                for (; o > a; a++) r = t(e[a], a, n), null != r && l.push(r);
            else
                for (a in e) r = t(e[a], a, n), null != r && l.push(r);
            return Z.apply([], l)
        },
        guid: 1,
        proxy: function (e, t) {
            var i, n, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), rt.isFunction(e) ? (i = G.call(arguments, 2), n = function () {
                return e.apply(t || this, i.concat(G.call(arguments)))
            }, n.guid = e.guid = e.guid || rt.guid++, n) : void 0
        },
        now: function () {
            return +new Date
        },
        support: it
    }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        J["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function (e) {
        function t(e, t, i, n) {
            var r, a, o, s, l, u, d, f, p, g;
            if ((t ? t.ownerDocument || t : H) !== F && I(t), t = t || F, i = i || [], !e || "string" != typeof e) return i;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (O && !n) {
                if (r = yt.exec(e))
                    if (o = r[1]) {
                        if (9 === s) {
                            if (a = t.getElementById(o), !a || !a.parentNode) return i;
                            if (a.id === o) return i.push(a), i
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && R(t, a) && a.id === o) return i.push(a), i
                    } else {
                        if (r[2]) return J.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = r[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(i, t.getElementsByClassName(o)), i
                    } if (x.qsa && (!N || !N.test(e))) {
                    if (f = d = j, p = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = C(e), (d = t.getAttribute("id")) ? f = d.replace(_t, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + h(u[l]);
                        p = bt.test(e) && c(t.parentNode) || t, g = u.join(",")
                    }
                    if (g) try {
                        return J.apply(i, p.querySelectorAll(g)), i
                    } catch (m) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(lt, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > k.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[j] = !0, e
        }

        function r(e) {
            var t = F.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var i = e.split("|"), n = e.length; n--;) k.attrHandle[i[n]] = t
        }

        function o(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function u(e) {
            return n(function (t) {
                return t = +t, n(function (i, n) {
                    for (var r, a = e([], i.length, t), o = a.length; o--;) i[r = a[o]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }

        function d() {}

        function h(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function f(e, t, i) {
            var n = t.dir,
                r = i && "parentNode" === n,
                a = z++;
            return t.first ? function (t, i, a) {
                for (; t = t[n];)
                    if (1 === t.nodeType || r) return e(t, i, a)
            } : function (t, i, o) {
                var s, l, u = [W, a];
                if (o) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || r) && e(t, i, o)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || r) {
                            if (l = t[j] || (t[j] = {}), (s = l[n]) && s[0] === W && s[1] === a) return u[2] = s[2];
                            if (l[n] = u, u[2] = e(t, i, o)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var r = e.length; r--;)
                    if (!e[r](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function g(e, i, n) {
            for (var r = 0, a = i.length; a > r; r++) t(e, i[r], n);
            return n
        }

        function m(e, t, i, n, r) {
            for (var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)(a = e[s]) && (!i || i(a, n, r)) && (o.push(a), u && t.push(s));
            return o
        }

        function v(e, t, i, r, a, o) {
            return r && !r[j] && (r = v(r)), a && !a[j] && (a = v(a, o)), n(function (n, o, s, l) {
                var u, c, d, h = [],
                    f = [],
                    p = o.length,
                    v = n || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !n && t ? v : m(v, h, e, s, l),
                    b = i ? a || (n ? e : p || r) ? [] : o : y;
                if (i && i(y, b, s, l), r)
                    for (u = m(b, f), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                if (n) {
                    if (a || e) {
                        if (a) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            a(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = a ? tt.call(n, d) : h[c]) > -1 && (n[u] = !(o[u] = d))
                    }
                } else b = m(b === o ? b.splice(p, b.length) : b), a ? a(null, o, b, l) : J.apply(o, b)
            })
        }

        function y(e) {
            for (var t, i, n, r = e.length, a = k.relative[e[0].type], o = a || k.relative[" "], s = a ? 1 : 0, l = f(function (e) {
                    return e === t
                }, o, !0), u = f(function (e) {
                    return tt.call(t, e) > -1
                }, o, !0), c = [function (e, i, n) {
                    return !a && (n || i !== M) || ((t = i).nodeType ? l(e, i, n) : u(e, i, n))
                }]; r > s; s++)
                if (i = k.relative[e[s].type]) c = [f(p(c), i)];
                else {
                    if (i = k.filter[e[s].type].apply(null, e[s].matches), i[j]) {
                        for (n = ++s; r > n && !k.relative[e[n].type]; n++);
                        return v(s > 1 && p(c), s > 1 && h(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), i, n > s && y(e.slice(s, n)), r > n && y(e = e.slice(n)), r > n && h(e))
                    }
                    c.push(i)
                } return p(c)
        }

        function b(e, i) {
            var r = i.length > 0,
                a = e.length > 0,
                o = function (n, o, s, l, u) {
                    var c, d, h, f = 0,
                        p = "0",
                        g = n && [],
                        v = [],
                        y = M,
                        b = n || a && k.find.TAG("*", u),
                        _ = W += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (u && (M = o !== F && o); p !== x && null != (c = b[p]); p++) {
                        if (a && c) {
                            for (d = 0; h = e[d++];)
                                if (h(c, o, s)) {
                                    l.push(c);
                                    break
                                } u && (W = _)
                        }
                        r && ((c = !h && c) && f--, n && g.push(c))
                    }
                    if (f += p, r && p !== f) {
                        for (d = 0; h = i[d++];) h(g, v, o, s);
                        if (n) {
                            if (f > 0)
                                for (; p--;) g[p] || v[p] || (v[p] = K.call(l));
                            v = m(v)
                        }
                        J.apply(l, v), u && !n && v.length > 0 && f + i.length > 1 && t.uniqueSort(l)
                    }
                    return u && (W = _, M = y), g
                };
            return r ? n(o) : o
        }
        var _, x, k, w, S, C, T, D, M, A, P, I, F, E, O, N, L, $, R, j = "sizzle" + -new Date,
            H = e.document,
            W = 0,
            z = 0,
            V = i(),
            B = i(),
            Y = i(),
            q = function (e, t) {
                return e === t && (P = !0), 0
            },
            U = "undefined",
            X = 1 << 31,
            G = {}.hasOwnProperty,
            Z = [],
            K = Z.pop,
            Q = Z.push,
            J = Z.push,
            et = Z.slice,
            tt = Z.indexOf || function (e) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            at = rt.replace("w", "w#"),
            ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + at + "))|)" + nt + "*\\]",
            st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ut = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ht = new RegExp(st),
            ft = new RegExp("^" + at + "$"),
            pt = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + it + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            _t = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            kt = function (e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
        try {
            J.apply(Z = et.call(H.childNodes), H.childNodes), Z[H.childNodes.length].nodeType
        } catch (wt) {
            J = {
                apply: Z.length ? function (e, t) {
                    Q.apply(e, et.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        x = t.support = {}, S = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, I = t.setDocument = function (e) {
            var t, i = e ? e.ownerDocument || e : H,
                n = i.defaultView;
            return i !== F && 9 === i.nodeType && i.documentElement ? (F = i, E = i.documentElement, O = !S(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                I()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                I()
            })), x.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = r(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = vt.test(i.getElementsByClassName) && r(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), x.getById = r(function (e) {
                return E.appendChild(e).id = j, !i.getElementsByName || !i.getElementsByName(j).length
            }), x.getById ? (k.find.ID = function (e, t) {
                if (typeof t.getElementById !== U && O) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(xt, kt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function (e) {
                var t = e.replace(xt, kt);
                return function (e) {
                    var i = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), k.find.TAG = x.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var i, n = [],
                    r = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = a[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return a
            }, k.find.CLASS = x.getElementsByClassName && function (e, t) {
                return typeof t.getElementsByClassName !== U && O ? t.getElementsByClassName(e) : void 0
            }, L = [], N = [], (x.qsa = vt.test(i.querySelectorAll)) && (r(function (e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && N.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + nt + "*(?:value|" + it + ")"), e.querySelectorAll(":checked").length || N.push(":checked")
            }), r(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
            })), (x.matchesSelector = vt.test($ = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && r(function (e) {
                x.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), L.push("!=", st)
            }), N = N.length && new RegExp(N.join("|")), L = L.length && new RegExp(L.join("|")), t = vt.test(E.compareDocumentPosition), R = t || vt.test(E.contains) ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, q = t ? function (e, t) {
                if (e === t) return P = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === H && R(H, e) ? -1 : t === i || t.ownerDocument === H && R(H, t) ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return P = !0, 0;
                var n, r = 0,
                    a = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!a || !s) return e === i ? -1 : t === i ? 1 : a ? -1 : s ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0;
                if (a === s) return o(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[r] === u[r];) r++;
                return r ? o(l[r], u[r]) : l[r] === H ? -1 : u[r] === H ? 1 : 0
            }, i) : F
        }, t.matches = function (e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function (e, i) {
            if ((e.ownerDocument || e) !== F && I(e), i = i.replace(dt, "='$1']"), !(!x.matchesSelector || !O || L && L.test(i) || N && N.test(i))) try {
                var n = $.call(e, i);
                if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) {}
            return t(i, F, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== F && I(e), R(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== F && I(e);
            var i = k.attrHandle[t.toLowerCase()],
                n = i && G.call(k.attrHandle, t.toLowerCase()) ? i(e, t, !O) : void 0;
            return void 0 !== n ? n : x.attributes || !O ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, i = [],
                n = 0,
                r = 0;
            if (P = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(q), P) {
                for (; t = e[r++];) t === e[r] && (n = i.push(r));
                for (; n--;) e.splice(i[n], 1)
            }
            return A = null, e
        }, w = t.getText = function (e) {
            var t, i = "",
                n = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += w(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[n++];) i += w(t);
            return i
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xt, kt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, kt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, i = !e[6] && e[2];
                    return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ht.test(i) && (t = C(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xt, kt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = V[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && V(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, i, n) {
                    return function (r) {
                        var a = t.attr(r, e);
                        return null == a ? "!=" === i : i ? (a += "", "=" === i ? a === n : "!=" === i ? a !== n : "^=" === i ? n && 0 === a.indexOf(n) : "*=" === i ? n && a.indexOf(n) > -1 : "$=" === i ? n && a.slice(-n.length) === n : "~=" === i ? (" " + a + " ").indexOf(n) > -1 : "|=" === i ? a === n || a.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, i, n, r) {
                    var a = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === n && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, i, l) {
                        var u, c, d, h, f, p, g = a !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (m) {
                            if (a) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [o ? m.firstChild : m.lastChild], o && y) {
                                for (c = m[j] || (m[j] = {}), u = c[e] || [], f = u[0] === W && u[1], h = u[0] === W && u[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (h = f = 0) || p.pop();)
                                    if (1 === d.nodeType && ++h && d === t) {
                                        c[e] = [W, f, h];
                                        break
                                    }
                            } else if (y && (u = (t[j] || (t[j] = {}))[e]) && u[0] === W) h = u[1];
                            else
                                for (;
                                    (d = ++f && d && d[g] || (h = f = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[j] || (d[j] = {}))[e] = [W, h]), d !== t)););
                            return h -= r, h === n || h % n === 0 && h / n >= 0
                        }
                    }
                },
                PSEUDO: function (e, i) {
                    var r, a = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[j] ? a(i) : a.length > 1 ? (r = [e, e, "", i], k.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                        for (var n, r = a(e, i), o = r.length; o--;) n = tt.call(e, r[o]), e[n] = !(t[n] = r[o])
                    }) : function (e) {
                        return a(e, 0, r)
                    }) : a
                }
            },
            pseudos: {
                not: n(function (e) {
                    var t = [],
                        i = [],
                        r = T(e.replace(lt, "$1"));
                    return r[j] ? n(function (e, t, i, n) {
                        for (var a, o = r(e, null, n, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function (e, n, a) {
                        return t[0] = e, r(t, null, a, i), !i.pop()
                    }
                }),
                has: n(function (e) {
                    return function (i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }),
                lang: n(function (e) {
                    return ft.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, kt).toLowerCase(),
                        function (t) {
                            var i;
                            do
                                if (i = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function (e) {
                    return e === E
                },
                focus: function (e) {
                    return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !k.pseudos.empty(e)
                },
                header: function (e) {
                    return mt.test(e.nodeName)
                },
                input: function (e) {
                    return gt.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (e, t) {
                    return [t - 1]
                }),
                eq: u(function (e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: u(function (e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: u(function (e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: u(function (e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: u(function (e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[_] = s(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) k.pseudos[_] = l(_);
        return d.prototype = k.filters = k.pseudos, k.setFilters = new d, C = t.tokenize = function (e, i) {
            var n, r, a, o, s, l, u, c = B[e + " "];
            if (c) return i ? 0 : c.slice(0);
            for (s = e, l = [], u = k.preFilter; s;) {
                (!n || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(a = [])), n = !1, (r = ct.exec(s)) && (n = r.shift(), a.push({
                    value: n,
                    type: r[0].replace(lt, " ")
                }), s = s.slice(n.length));
                for (o in k.filter) !(r = pt[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), a.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return i ? s.length : s ? t.error(e) : B(e, l).slice(0)
        }, T = t.compile = function (e, t) {
            var i, n = [],
                r = [],
                a = Y[e + " "];
            if (!a) {
                for (t || (t = C(e)), i = t.length; i--;) a = y(t[i]), a[j] ? n.push(a) : r.push(a);
                a = Y(e, b(r, n)), a.selector = e
            }
            return a
        }, D = t.select = function (e, t, i, n) {
            var r, a, o, s, l, u = "function" == typeof e && e,
                d = !n && C(e = u.selector || e);
            if (i = i || [], 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && x.getById && 9 === t.nodeType && O && k.relative[a[1].type]) {
                    if (t = (k.find.ID(o.matches[0].replace(xt, kt), t) || [])[0], !t) return i;
                    u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (r = pt.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !k.relative[s = o.type]);)
                    if ((l = k.find[s]) && (n = l(o.matches[0].replace(xt, kt), bt.test(a[0].type) && c(t.parentNode) || t))) {
                        if (a.splice(r, 1), e = n.length && h(a), !e) return J.apply(i, n), i;
                        break
                    }
            }
            return (u || T(e, d))(n, t, !O, i, bt.test(e) && c(t.parentNode) || t), i
        }, x.sortStable = j.split("").sort(q).join("") === j, x.detectDuplicates = !!P, I(), x.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(F.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function (e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || a(it, function (e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
    var ct = rt.expr.match.needsContext,
        dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ht = /^.[^:#\[\.,]*$/;
    rt.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? rt.find.matchesSelector(n, e) ? [n] : [] : rt.find.matches(e, rt.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, rt.fn.extend({
        find: function (e) {
            var t, i = [],
                n = this,
                r = n.length;
            if ("string" != typeof e) return this.pushStack(rt(e).filter(function () {
                for (t = 0; r > t; t++)
                    if (rt.contains(n[t], this)) return !0
            }));
            for (t = 0; r > t; t++) rt.find(e, n[t], i);
            return i = this.pushStack(r > 1 ? rt.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function (e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function (e) {
            return !!n(this, "string" == typeof e && ct.test(e) ? rt(e) : e || [], !1).length
        }
    });
    var ft, pt = e.document,
        gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = rt.fn.init = function (e, t) {
            var i, n;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || ft).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof rt ? t[0] : t, rt.merge(this, rt.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : pt, !0)), dt.test(i[1]) && rt.isPlainObject(t))
                        for (i in t) rt.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (n = pt.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return ft.find(e);
                    this.length = 1, this[0] = n
                }
                return this.context = pt, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? "undefined" != typeof ft.ready ? ft.ready(e) : e(rt) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
        };
    mt.prototype = rt.fn, ft = rt(pt);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    rt.extend({
        dir: function (e, t, i) {
            for (var n = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !rt(r).is(i));) 1 === r.nodeType && n.push(r), r = r[t];
            return n
        },
        sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }), rt.fn.extend({
        has: function (e) {
            var t, i = rt(e, this),
                n = i.length;
            return this.filter(function () {
                for (t = 0; n > t; t++)
                    if (rt.contains(this, i[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var i, n = 0, r = this.length, a = [], o = ct.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, e))) {
                        a.push(i);
                        break
                    } return this.pushStack(a.length > 1 ? rt.unique(a) : a)
        },
        index: function (e) {
            return e ? "string" == typeof e ? rt.inArray(this[0], rt(e)) : rt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), rt.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return rt.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, i) {
            return rt.dir(e, "parentNode", i)
        },
        next: function (e) {
            return r(e, "nextSibling")
        },
        prev: function (e) {
            return r(e, "previousSibling")
        },
        nextAll: function (e) {
            return rt.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return rt.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, i) {
            return rt.dir(e, "nextSibling", i)
        },
        prevUntil: function (e, t, i) {
            return rt.dir(e, "previousSibling", i)
        },
        siblings: function (e) {
            return rt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return rt.sibling(e.firstChild)
        },
        contents: function (e) {
            return rt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : rt.merge([], e.childNodes)
        }
    }, function (e, t) {
        rt.fn[e] = function (i, n) {
            var r = rt.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = rt.filter(n, r)), this.length > 1 && (yt[e] || (r = rt.unique(r)), vt.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var bt = /\S+/g,
        _t = {};
    rt.Callbacks = function (e) {
        e = "string" == typeof e ? _t[e] || a(e) : rt.extend({}, e);
        var t, i, n, r, o, s, l = [],
            u = !e.once && [],
            c = function (a) {
                for (i = e.memory && a, n = !0, o = s || 0, s = 0, r = l.length, t = !0; l && r > o; o++)
                    if (l[o].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    } t = !1, l && (u ? u.length && c(u.shift()) : i ? l = [] : d.disable())
            },
            d = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        ! function a(t) {
                            rt.each(t, function (t, i) {
                                var n = rt.type(i);
                                "function" === n ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== n && a(i)
                            })
                        }(arguments), t ? r = l.length : i && (s = n, c(i))
                    }
                    return this
                },
                remove: function () {
                    return l && rt.each(arguments, function (e, i) {
                        for (var n;
                            (n = rt.inArray(i, l, n)) > -1;) l.splice(n, 1), t && (r >= n && r--, o >= n && o--)
                    }), this
                },
                has: function (e) {
                    return e ? rt.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], r = 0, this
                },
                disable: function () {
                    return l = u = i = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return u = void 0, i || d.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (e, i) {
                    return !l || n && !u || (i = i || [], i = [e, i.slice ? i.slice() : i], t ? u.push(i) : c(i)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return d
    }, rt.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", rt.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return rt.Deferred(function (i) {
                            rt.each(t, function (t, a) {
                                var o = rt.isFunction(e[t]) && e[t];
                                r[a[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && rt.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a[0] + "With"](this === n ? i.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? rt.extend(e, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, rt.each(t, function (e, a) {
                var o = a[2],
                    s = a[3];
                n[a[1]] = o.add, s && o.add(function () {
                    i = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function () {
                    return r[a[0] + "With"](this === r ? n : this, arguments), this
                }, r[a[0] + "With"] = o.fireWith
            }), n.promise(r), e && e.call(r, r), r
        },
        when: function (e) {
            var t, i, n, r = 0,
                a = G.call(arguments),
                o = a.length,
                s = 1 !== o || e && rt.isFunction(e.promise) ? o : 0,
                l = 1 === s ? e : rt.Deferred(),
                u = function (e, i, n) {
                    return function (r) {
                        i[e] = this, n[e] = arguments.length > 1 ? G.call(arguments) : r, n === t ? l.notifyWith(i, n) : --s || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (t = new Array(o), i = new Array(o), n = new Array(o); o > r; r++) a[r] && rt.isFunction(a[r].promise) ? a[r].promise().done(u(r, n, a)).fail(l.reject).progress(u(r, i, t)) : --s;
            return s || l.resolveWith(n, a), l.promise()
        }
    });
    var xt;
    rt.fn.ready = function (e) {
        return rt.ready.promise().done(e), this
    }, rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? rt.readyWait++ : rt.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--rt.readyWait : !rt.isReady) {
                if (!pt.body) return setTimeout(rt.ready);
                rt.isReady = !0, e !== !0 && --rt.readyWait > 0 || (xt.resolveWith(pt, [rt]), rt.fn.triggerHandler && (rt(pt).triggerHandler("ready"), rt(pt).off("ready")))
            }
        }
    }), rt.ready.promise = function (t) {
        if (!xt)
            if (xt = rt.Deferred(), "complete" === pt.readyState) setTimeout(rt.ready);
            else if (pt.addEventListener) pt.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            pt.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var i = !1;
            try {
                i = null == e.frameElement && pt.documentElement
            } catch (n) {}
            i && i.doScroll && ! function r() {
                if (!rt.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    o(), rt.ready()
                }
            }()
        }
        return xt.promise(t)
    };
    var kt, wt = "undefined";
    for (kt in rt(it)) break;
    it.ownLast = "0" !== kt, it.inlineBlockNeedsLayout = !1, rt(function () {
            var e, t, i, n;
            i = pt.getElementsByTagName("body")[0], i && i.style && (t = pt.createElement("div"), n = pt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== wt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function () {
            var e = pt.createElement("div");
            if (null == it.deleteExpando) {
                it.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    it.deleteExpando = !1
                }
            }
            e = null
        }(), rt.acceptData = function (e) {
            var t = rt.noData[(e.nodeName + " ").toLowerCase()],
                i = +e.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ct = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? rt.cache[e[rt.expando]] : e[rt.expando], !!e && !u(e)
        },
        data: function (e, t, i) {
            return c(e, t, i)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, i) {
            return c(e, t, i, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), rt.fn.extend({
        data: function (e, t) {
            var i, n, r, a = this[0],
                o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = rt.data(a), 1 === a.nodeType && !rt._data(a, "parsedAttrs"))) {
                    for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = rt.camelCase(n.slice(5)), l(a, n, r[n])));
                    rt._data(a, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                rt.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                rt.data(this, e, t)
            }) : a ? l(a, e, rt.data(a, e)) : void 0
        },
        removeData: function (e) {
            return this.each(function () {
                rt.removeData(this, e)
            })
        }
    }), rt.extend({
        queue: function (e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = rt._data(e, t), i && (!n || rt.isArray(i) ? n = rt._data(e, t, rt.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var i = rt.queue(e, t),
                n = i.length,
                r = i.shift(),
                a = rt._queueHooks(e, t),
                o = function () {
                    rt.dequeue(e, t)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !n && a && a.empty.fire()
        },
        _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return rt._data(e, i) || rt._data(e, i, {
                empty: rt.Callbacks("once memory").add(function () {
                    rt._removeData(e, t + "queue"), rt._removeData(e, i)
                })
            })
        }
    }), rt.fn.extend({
        queue: function (e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? rt.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var i = rt.queue(this, e, t);
                rt._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && rt.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                rt.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var i, n = 1,
                r = rt.Deferred(),
                a = this,
                o = this.length,
                s = function () {
                    --n || r.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) i = rt._data(a[o], e + "queueHooks"), i && i.empty && (n++, i.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Dt = ["Top", "Right", "Bottom", "Left"],
        Mt = function (e, t) {
            return e = t || e, "none" === rt.css(e, "display") || !rt.contains(e.ownerDocument, e)
        },
        At = rt.access = function (e, t, i, n, r, a, o) {
            var s = 0,
                l = e.length,
                u = null == i;
            if ("object" === rt.type(i)) {
                r = !0;
                for (s in i) rt.access(e, t, s, i[s], !0, a, o)
            } else if (void 0 !== n && (r = !0, rt.isFunction(n) || (o = !0), u && (o ? (t.call(e, n), t = null) : (u = t, t = function (e, t, i) {
                    return u.call(rt(e), i)
                })), t))
                for (; l > s; s++) t(e[s], i, o ? n : n.call(e[s], s, t(e[s], i)));
            return r ? e : u ? t.call(e) : l ? t(e[0], i) : a
        },
        Pt = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = pt.createElement("input"),
            t = pt.createElement("div"),
            i = pt.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = 3 === t.firstChild.nodeType, it.tbody = !t.getElementsByTagName("tbody").length, it.htmlSerialize = !!t.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, i.appendChild(e), it.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, i.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                it.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete t.test
            } catch (n) {
                it.deleteExpando = !1
            }
        }
    }(),
    function () {
        var t, i, n = pt.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (it[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), it[t + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var It = /^(?:input|select|textarea)$/i,
        Ft = /^key/,
        Et = /^(?:mouse|pointer|contextmenu)|click/,
        Ot = /^(?:focusinfocus|focusoutblur)$/,
        Nt = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function (e, t, i, n, r) {
            var a, o, s, l, u, c, d, h, f, p, g, m = rt._data(e);
            if (m) {
                for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = rt.guid++), (o = m.events) || (o = m.events = {}), (c = m.handle) || (c = m.handle = function (e) {
                        return typeof rt === wt || e && rt.event.triggered === e.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) a = Nt.exec(t[s]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f && (u = rt.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = rt.event.special[f] || {}, d = rt.extend({
                    type: f,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && rt.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, l), (h = o[f]) || (h = o[f] = [], h.delegateCount = 0, u.setup && u.setup.call(e, n, p, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), rt.event.global[f] = !0);
                e = null
            }
        },
        remove: function (e, t, i, n, r) {
            var a, o, s, l, u, c, d, h, f, p, g, m = rt.hasData(e) && rt._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(bt) || [""], u = t.length; u--;)
                    if (s = Nt.exec(t[u]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f) {
                        for (d = rt.event.special[f] || {}, f = (n ? d.delegateType : d.bindType) || f, h = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = h.length; a--;) o = h[a], !r && g !== o.origType || i && i.guid !== o.guid || s && !s.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (h.splice(a, 1), o.selector && h.delegateCount--, d.remove && d.remove.call(e, o));
                        l && !h.length && (d.teardown && d.teardown.call(e, p, m.handle) !== !1 || rt.removeEvent(e, f, m.handle), delete c[f])
                    } else
                        for (f in c) rt.event.remove(e, f + t[u], i, n, !0);
                rt.isEmptyObject(c) && (delete m.handle, rt._removeData(e, "events"))
            }
        },
        trigger: function (t, i, n, r) {
            var a, o, s, l, u, c, d, h = [n || pt],
                f = tt.call(t, "type") ? t.type : t,
                p = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = n = n || pt, 3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(f + rt.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), o = f.indexOf(":") < 0 && "on" + f, t = t[rt.expando] ? t : new rt.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : rt.makeArray(i, [t]), u = rt.event.special[f] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!r && !u.noBubble && !rt.isWindow(n)) {
                    for (l = u.delegateType || f, Ot.test(l + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), c = s;
                    c === (n.ownerDocument || pt) && h.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || f, a = (rt._data(s, "events") || {})[t.type] && rt._data(s, "handle"), a && a.apply(s, i), a = o && s[o], a && a.apply && rt.acceptData(s) && (t.result = a.apply(s, i), t.result === !1 && t.preventDefault());
                if (t.type = f, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), i) === !1) && rt.acceptData(n) && o && n[f] && !rt.isWindow(n)) {
                    c = n[o], c && (n[o] = null), rt.event.triggered = f;
                    try {
                        n[f]()
                    } catch (g) {}
                    rt.event.triggered = void 0, c && (n[o] = c)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = rt.event.fix(e);
            var t, i, n, r, a, o = [],
                s = G.call(arguments),
                l = (rt._data(this, "events") || {})[e.type] || [],
                u = rt.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (o = rt.event.handlers.call(this, e, l), t = 0;
                    (r = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, a = 0;
                        (n = r.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(n.namespace)) && (e.handleObj = n, e.data = n.data, i = ((rt.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var i, n, r, a, o = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], a = 0; s > a; a++) n = t[a], i = n.selector + " ", void 0 === r[i] && (r[i] = n.needsContext ? rt(i, this).index(l) >= 0 : rt.find(i, this, null, [l]).length), r[i] && r.push(n);
                        r.length && o.push({
                            elem: l,
                            handlers: r
                        })
                    } return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }), o
        },
        fix: function (e) {
            if (e[rt.expando]) return e;
            var t, i, n, r = e.type,
                a = e,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Et.test(r) ? this.mouseHooks : Ft.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, e = new rt.Event(a), t = n.length; t--;) i = n[t], e[i] = a[i];
            return e.target || (e.target = a.srcElement || pt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var i, n, r, a = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || pt, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return rt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, i, n) {
            var r = rt.extend(new rt.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? rt.event.trigger(r, null, t) : rt.event.dispatch.call(t, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, rt.removeEvent = pt.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function (e, t, i) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === wt && (e[n] = null), e.detachEvent(n, i))
    }, rt.Event = function (e, t) {
        return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : f) : this.type = e, t && rt.extend(this, t), this.timeStamp = e && e.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(e, t)
    }, rt.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        rt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var i, n = this,
                    r = e.relatedTarget,
                    a = e.handleObj;
                return (!r || r !== n && !rt.contains(n, r)) && (e.type = a.origType, i = a.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), it.submitBubbles || (rt.event.special.submit = {
        setup: function () {
            return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    i = rt.nodeName(t, "input") || rt.nodeName(t, "button") ? t.form : void 0;
                i && !rt._data(i, "submitBubbles") && (rt.event.add(i, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), rt._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && rt.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
        }
    }), it.changeBubbles || (rt.event.special.change = {
        setup: function () {
            return It.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), rt.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, e, !0)
            })), !1) : void rt.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                It.test(t.nodeName) && !rt._data(t, "changeBubbles") && (rt.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || rt.event.simulate("change", this.parentNode, e, !0)
                }), rt._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return rt.event.remove(this, "._change"), !It.test(this.nodeName)
        }
    }), it.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var i = function (e) {
            rt.event.simulate(t, e.target, rt.event.fix(e), !0)
        };
        rt.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this,
                    r = rt._data(n, t);
                r || n.addEventListener(e, i, !0), rt._data(n, t, (r || 0) + 1)
            },
            teardown: function () {
                var n = this.ownerDocument || this,
                    r = rt._data(n, t) - 1;
                r ? rt._data(n, t, r) : (n.removeEventListener(e, i, !0), rt._removeData(n, t))
            }
        }
    }), rt.fn.extend({
        on: function (e, t, i, n, r) {
            var a, o;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t, t = void 0);
                for (a in e) this.on(a, t, i, e[a], r);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), n === !1) n = f;
            else if (!n) return this;
            return 1 === r && (o = n, n = function (e) {
                return rt().off(e), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = rt.guid++)), this.each(function () {
                rt.event.add(this, e, n, i, t)
            })
        },
        one: function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function (e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, rt(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (i = t, t = void 0), i === !1 && (i = f), this.each(function () {
                rt.event.remove(this, e, i, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                rt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var i = this[0];
            return i ? rt.event.trigger(e, t, i, !0) : void 0
        }
    });
    var Lt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        $t = / jQuery\d+="(?:null|\d+)"/g,
        Rt = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"),
        jt = /^\s+/,
        Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Wt = /<([\w:]+)/,
        zt = /<tbody/i,
        Vt = /<|&#?\w+;/,
        Bt = /<(?:script|style|link)/i,
        Yt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qt = /^$|\/(?:java|ecma)script/i,
        Ut = /^true\/(.*)/,
        Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Gt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Zt = g(pt),
        Kt = Zt.appendChild(pt.createElement("div"));
    Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td, rt.extend({
        clone: function (e, t, i) {
            var n, r, a, o, s, l = rt.contains(e.ownerDocument, e);
            if (it.html5Clone || rt.isXMLDoc(e) || !Rt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Kt.innerHTML = e.outerHTML, Kt.removeChild(a = Kt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || rt.isXMLDoc(e)))
                for (n = m(a), s = m(e), o = 0; null != (r = s[o]); ++o) n[o] && w(r, n[o]);
            if (t)
                if (i)
                    for (s = s || m(e), n = n || m(a), o = 0; null != (r = s[o]); o++) k(r, n[o]);
                else k(e, a);
            return n = m(a, "script"), n.length > 0 && x(n, !l && m(e, "script")), n = s = r = null, a
        },
        buildFragment: function (e, t, i, n) {
            for (var r, a, o, s, l, u, c, d = e.length, h = g(t), f = [], p = 0; d > p; p++)
                if (a = e[p], a || 0 === a)
                    if ("object" === rt.type(a)) rt.merge(f, a.nodeType ? [a] : a);
                    else if (Vt.test(a)) {
                for (s = s || h.appendChild(t.createElement("div")), l = (Wt.exec(a) || ["", ""])[1].toLowerCase(), c = Gt[l] || Gt._default, s.innerHTML = c[1] + a.replace(Ht, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                if (!it.leadingWhitespace && jt.test(a) && f.push(t.createTextNode(jt.exec(a)[0])), !it.tbody)
                    for (a = "table" !== l || zt.test(a) ? "<table>" !== c[1] || zt.test(a) ? 0 : s : s.firstChild, r = a && a.childNodes.length; r--;) rt.nodeName(u = a.childNodes[r], "tbody") && !u.childNodes.length && a.removeChild(u);
                for (rt.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = h.lastChild
            } else f.push(t.createTextNode(a));
            for (s && h.removeChild(s), it.appendChecked || rt.grep(m(f, "input"), v), p = 0; a = f[p++];)
                if ((!n || -1 === rt.inArray(a, n)) && (o = rt.contains(a.ownerDocument, a), s = m(h.appendChild(a), "script"), o && x(s), i))
                    for (r = 0; a = s[r++];) qt.test(a.type || "") && i.push(a);
            return s = null, h
        },
        cleanData: function (e, t) {
            for (var i, n, r, a, o = 0, s = rt.expando, l = rt.cache, u = it.deleteExpando, c = rt.event.special; null != (i = e[o]); o++)
                if ((t || rt.acceptData(i)) && (r = i[s], a = r && l[r])) {
                    if (a.events)
                        for (n in a.events) c[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, a.handle);
                    l[r] && (delete l[r], u ? delete i[s] : typeof i.removeAttribute !== wt ? i.removeAttribute(s) : i[s] = null, X.push(r))
                }
        }
    }), rt.fn.extend({
        text: function (e) {
            return At(this, function (e) {
                return void 0 === e ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var i, n = e ? rt.filter(e, this) : this, r = 0; null != (i = n[r]); r++) t || 1 !== i.nodeType || rt.cleanData(m(i)), i.parentNode && (t && rt.contains(i.ownerDocument, i) && x(m(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && rt.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && rt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return rt.clone(this, e, t)
            })
        },
        html: function (e) {
            return At(this, function (e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace($t, "") : void 0;
                if (!("string" != typeof e || Bt.test(e) || !it.htmlSerialize && Rt.test(e) || !it.leadingWhitespace && jt.test(e) || Gt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ht, "<$1></$2>");
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (rt.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, rt.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = Z.apply([], e);
            var i, n, r, a, o, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                h = e[0],
                f = rt.isFunction(h);
            if (f || u > 1 && "string" == typeof h && !it.checkClone && Yt.test(h)) return this.each(function (i) {
                var n = c.eq(i);
                f && (e[0] = h.call(this, i, n.html())), n.domManip(e, t)
            });
            if (u && (s = rt.buildFragment(e, this[0].ownerDocument, !1, this), i = s.firstChild, 1 === s.childNodes.length && (s = i), i)) {
                for (a = rt.map(m(s, "script"), b), r = a.length; u > l; l++) n = s, l !== d && (n = rt.clone(n, !0, !0), r && rt.merge(a, m(n, "script"))), t.call(this[l], n, l);
                if (r)
                    for (o = a[a.length - 1].ownerDocument, rt.map(a, _), l = 0; r > l; l++) n = a[l], qt.test(n.type || "") && !rt._data(n, "globalEval") && rt.contains(o, n) && (n.src ? rt._evalUrl && rt._evalUrl(n.src) : rt.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Xt, "")));
                s = i = null
            }
            return this
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        rt.fn[e] = function (e) {
            for (var i, n = 0, r = [], a = rt(e), o = a.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), rt(a[n])[t](i), K.apply(r, i.get());
            return this.pushStack(r)
        }
    });
    var Qt, Jt = {};
    ! function () {
        var e;
        it.shrinkWrapBlocks = function () {
            if (null != e) return e;
            e = !1;
            var t, i, n;
            return i = pt.getElementsByTagName("body")[0], i && i.style ? (t = pt.createElement("div"), n = pt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== wt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(pt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), i.removeChild(n), e) : void 0
        }
    }();
    var ei, ti, ii = /^margin/,
        ni = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
        ri = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ei = function (e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, ti = function (e, t, i) {
            var n, r, a, o, s = e.style;
            return i = i || ei(e), o = i ? i.getPropertyValue(t) || i[t] : void 0, i && ("" !== o || rt.contains(e.ownerDocument, e) || (o = rt.style(e, t)), ni.test(o) && ii.test(t) && (n = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = i.width, s.width = n, s.minWidth = r, s.maxWidth = a)), void 0 === o ? o : o + ""
        }) : pt.documentElement.currentStyle && (ei = function (e) {
            return e.currentStyle
        }, ti = function (e, t, i) {
            var n, r, a, o, s = e.style;
            return i = i || ei(e), o = i ? i[t] : void 0, null == o && s && s[t] && (o = s[t]), ni.test(o) && !ri.test(t) && (n = s.left, r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = n, a && (r.left = a)), void 0 === o ? o : o + "" || "auto"
        }),
        function () {
            function t() {
                var t, i, n, r;
                i = pt.getElementsByTagName("body")[0], i && i.style && (t = pt.createElement("div"), n = pt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = o = !1, l = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, r = t.appendChild(pt.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), i.removeChild(n))
            }
            var i, n, r, a, o, s, l;
            i = pt.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = i.getElementsByTagName("a")[0], n = r && r.style, n && (n.cssText = "float:left;opacity:.5", it.opacity = "0.5" === n.opacity, it.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === i.style.backgroundClip, it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, rt.extend(it, {
                reliableHiddenOffsets: function () {
                    return null == s && t(), s
                },
                boxSizingReliable: function () {
                    return null == o && t(), o
                },
                pixelPosition: function () {
                    return null == a && t(), a
                },
                reliableMarginRight: function () {
                    return null == l && t(), l
                }
            }))
        }(), rt.swap = function (e, t, i, n) {
            var r, a, o = {};
            for (a in t) o[a] = e.style[a], e.style[a] = t[a];
            r = i.apply(e, n || []);
            for (a in t) e.style[a] = o[a];
            return r
        };
    var ai = /alpha\([^)]*\)/i,
        oi = /opacity\s*=\s*([^)]*)/,
        si = /^(none|table(?!-c[ea]).+)/,
        li = new RegExp("^(" + Tt + ")(.*)$", "i"),
        ui = new RegExp("^([+-])=(" + Tt + ")", "i"),
        ci = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        di = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        hi = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = ti(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": it.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, o, s = rt.camelCase(t),
                    l = e.style;
                if (t = rt.cssProps[s] || (rt.cssProps[s] = D(l, s)), o = rt.cssHooks[t] || rt.cssHooks[s], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(e, !1, n)) ? r : l[t];
                if (a = typeof i, "string" === a && (r = ui.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(rt.css(e, t)), a = "number"), null != i && i === i && ("number" !== a || rt.cssNumber[s] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(e, i, n))))) try {
                    l[t] = i
                } catch (u) {}
            }
        },
        css: function (e, t, i, n) {
            var r, a, o, s = rt.camelCase(t);
            return t = rt.cssProps[s] || (rt.cssProps[s] = D(e.style, s)), o = rt.cssHooks[t] || rt.cssHooks[s], o && "get" in o && (a = o.get(e, !0, i)), void 0 === a && (a = ti(e, t, n)), "normal" === a && t in di && (a = di[t]), "" === i || i ? (r = parseFloat(a), i === !0 || rt.isNumeric(r) ? r || 0 : a) : a
        }
    }), rt.each(["height", "width"], function (e, t) {
        rt.cssHooks[t] = {
            get: function (e, i, n) {
                return i ? si.test(rt.css(e, "display")) && 0 === e.offsetWidth ? rt.swap(e, ci, function () {
                    return I(e, t, n)
                }) : I(e, t, n) : void 0
            },
            set: function (e, i, n) {
                var r = n && ei(e);
                return A(e, i, n ? P(e, t, n, it.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), it.opacity || (rt.cssHooks.opacity = {
        get: function (e, t) {
            return oi.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var i = e.style,
                n = e.currentStyle,
                r = rt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                a = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && "" === rt.trim(a.replace(ai, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = ai.test(a) ? a.replace(ai, r) : a + " " + r)
        }
    }), rt.cssHooks.marginRight = T(it.reliableMarginRight, function (e, t) {
        return t ? rt.swap(e, {
            display: "inline-block"
        }, ti, [e, "marginRight"]) : void 0
    }), rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        rt.cssHooks[e + t] = {
            expand: function (i) {
                for (var n = 0, r = {}, a = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[e + Dt[n] + t] = a[n] || a[n - 2] || a[0];
                return r
            }
        }, ii.test(e) || (rt.cssHooks[e + t].set = A)
    }), rt.fn.extend({
        css: function (e, t) {
            return At(this, function (e, t, i) {
                var n, r, a = {},
                    o = 0;
                if (rt.isArray(t)) {
                    for (n = ei(e), r = t.length; r > o; o++) a[t[o]] = rt.css(e, t[o], !1, n);
                    return a
                }
                return void 0 !== i ? rt.style(e, t, i) : rt.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return M(this, !0)
        },
        hide: function () {
            return M(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Mt(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.Tween = F, F.prototype = {
        constructor: F,
        init: function (e, t, i, n, r, a) {
            this.elem = e, this.prop = i, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (rt.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function (e) {
            var t, i = F.propHooks[this.prop];
            return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = rt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[rt.cssProps[e.prop]] || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, rt.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, rt.fx = F.prototype.init, rt.fx.step = {};
    var fi, pi, gi = /^(?:toggle|show|hide)$/,
        mi = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
        vi = /queueHooks$/,
        yi = [L],
        bi = {
            "*": [function (e, t) {
                var i = this.createTween(e, t),
                    n = i.cur(),
                    r = mi.exec(t),
                    a = r && r[3] || (rt.cssNumber[e] ? "" : "px"),
                    o = (rt.cssNumber[e] || "px" !== a && +n) && mi.exec(rt.css(i.elem, e)),
                    s = 1,
                    l = 20;
                if (o && o[3] !== a) {
                    a = a || o[3], r = r || [], o = +n || 1;
                    do s = s || ".5", o /= s, rt.style(i.elem, e, o + a); while (s !== (s = i.cur() / n) && 1 !== s && --l)
                }
                return r && (o = i.start = +o || +n || 0, i.unit = a, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
            }]
        };
    rt.Animation = rt.extend(R, {
            tweener: function (e, t) {
                rt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var i, n = 0, r = e.length; r > n; n++) i = e[n], bi[i] = bi[i] || [], bi[i].unshift(t)
            },
            prefilter: function (e, t) {
                t ? yi.unshift(e) : yi.push(e)
            }
        }), rt.speed = function (e, t, i) {
            var n = e && "object" == typeof e ? rt.extend({}, e) : {
                complete: i || !i && t || rt.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !rt.isFunction(t) && t
            };
            return n.duration = rt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue)
            }, n
        }, rt.fn.extend({
            fadeTo: function (e, t, i, n) {
                return this.filter(Mt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function (e, t, i, n) {
                var r = rt.isEmptyObject(e),
                    a = rt.speed(t, i, n),
                    o = function () {
                        var t = R(this, rt.extend({}, e), a);
                        (r || rt._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function (e, t, i) {
                var n = function (e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        a = rt.timers,
                        o = rt._data(this);
                    if (r) o[r] && o[r].stop && n(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && vi.test(r) && n(o[r]);
                    for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(i), t = !1, a.splice(r, 1));
                    (t || !i) && rt.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, i = rt._data(this),
                        n = i[e + "queue"],
                        r = i[e + "queueHooks"],
                        a = rt.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, rt.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; o > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), rt.each(["toggle", "show", "hide"], function (e, t) {
            var i = rt.fn[t];
            rt.fn[t] = function (e, n, r) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(O(t, !0), e, n, r)
            }
        }), rt.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            rt.fn[e] = function (e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), rt.timers = [], rt.fx.tick = function () {
            var e, t = rt.timers,
                i = 0;
            for (fi = rt.now(); i < t.length; i++) e = t[i], e() || t[i] !== e || t.splice(i--, 1);
            t.length || rt.fx.stop(), fi = void 0
        }, rt.fx.timer = function (e) {
            rt.timers.push(e), e() ? rt.fx.start() : rt.timers.pop()
        }, rt.fx.interval = 13, rt.fx.start = function () {
            pi || (pi = setInterval(rt.fx.tick, rt.fx.interval))
        }, rt.fx.stop = function () {
            clearInterval(pi), pi = null
        }, rt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, rt.fn.delay = function (e, t) {
            return e = rt.fx ? rt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var n = setTimeout(t, e);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        },
        function () {
            var e, t, i, n, r;
            t = pt.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = t.getElementsByTagName("a")[0], i = pt.createElement("select"), r = i.appendChild(pt.createElement("option")), e = t.getElementsByTagName("input")[0], n.style.cssText = "top:1px", it.getSetAttribute = "t" !== t.className, it.style = /top/.test(n.getAttribute("style")), it.hrefNormalized = "/a" === n.getAttribute("href"), it.checkOn = !!e.value, it.optSelected = r.selected, it.enctype = !!pt.createElement("form").enctype, i.disabled = !0, it.optDisabled = !r.disabled, e = pt.createElement("input"), e.setAttribute("value", ""), it.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), it.radioValue = "t" === e.value
        }();
    var _i = /\r/g;
    rt.fn.extend({
        val: function (e) {
            var t, i, n, r = this[0]; {
                if (arguments.length) return n = rt.isFunction(e), this.each(function (i) {
                    var r;
                    1 === this.nodeType && (r = n ? e.call(this, i, rt(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), t = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(_i, "") : null == i ? "" : i)
            }
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = rt.find.attr(e, "value");
                    return null != t ? t : rt.trim(rt.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, i, n = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, o = a ? null : [], s = a ? r + 1 : n.length, l = 0 > r ? s : a ? r : 0; s > l; l++)
                        if (i = n[l], !(!i.selected && l !== r || (it.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && rt.nodeName(i.parentNode, "optgroup"))) {
                            if (t = rt(i).val(), a) return t;
                            o.push(t)
                        } return o
                },
                set: function (e, t) {
                    for (var i, n, r = e.options, a = rt.makeArray(t), o = r.length; o--;)
                        if (n = r[o], rt.inArray(rt.valHooks.option.get(n), a) >= 0) try {
                            n.selected = i = !0
                        } catch (s) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (e.selectedIndex = -1), r
                }
            }
        }
    }), rt.each(["radio", "checkbox"], function () {
        rt.valHooks[this] = {
            set: function (e, t) {
                return rt.isArray(t) ? e.checked = rt.inArray(rt(e).val(), t) >= 0 : void 0
            }
        }, it.checkOn || (rt.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xi, ki, wi = rt.expr.attrHandle,
        Si = /^(?:checked|selected)$/i,
        Ci = it.getSetAttribute,
        Ti = it.input;
    rt.fn.extend({
        attr: function (e, t) {
            return At(this, rt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                rt.removeAttr(this, e)
            })
        }
    }), rt.extend({
        attr: function (e, t, i) {
            var n, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === wt ? rt.prop(e, t, i) : (1 === a && rt.isXMLDoc(e) || (t = t.toLowerCase(), n = rt.attrHooks[t] || (rt.expr.match.bool.test(t) ? ki : xi)), void 0 === i ? n && "get" in n && null !== (r = n.get(e, t)) ? r : (r = rt.find.attr(e, t), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(e, i, t)) ? r : (e.setAttribute(t, i + ""), i) : void rt.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var i, n, r = 0,
                a = t && t.match(bt);
            if (a && 1 === e.nodeType)
                for (; i = a[r++];) n = rt.propFix[i] || i, rt.expr.match.bool.test(i) ? Ti && Ci || !Si.test(i) ? e[n] = !1 : e[rt.camelCase("default-" + i)] = e[n] = !1 : rt.attr(e, i, ""), e.removeAttribute(Ci ? i : n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!it.radioValue && "radio" === t && rt.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }
    }), ki = {
        set: function (e, t, i) {
            return t === !1 ? rt.removeAttr(e, i) : Ti && Ci || !Si.test(i) ? e.setAttribute(!Ci && rt.propFix[i] || i, i) : e[rt.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var i = wi[t] || rt.find.attr;
        wi[t] = Ti && Ci || !Si.test(t) ? function (e, t, n) {
            var r, a;
            return n || (a = wi[t], wi[t] = r, r = null != i(e, t, n) ? t.toLowerCase() : null, wi[t] = a), r
        } : function (e, t, i) {
            return i ? void 0 : e[rt.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ti && Ci || (rt.attrHooks.value = {
        set: function (e, t, i) {
            return rt.nodeName(e, "input") ? void(e.defaultValue = t) : xi && xi.set(e, t, i)
        }
    }), Ci || (xi = {
        set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i) ? t : void 0
        }
    }, wi.id = wi.name = wi.coords = function (e, t, i) {
        var n;
        return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, rt.valHooks.button = {
        get: function (e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value : void 0
        },
        set: xi.set
    }, rt.attrHooks.contenteditable = {
        set: function (e, t, i) {
            xi.set(e, "" === t ? !1 : t, i)
        }
    }, rt.each(["width", "height"], function (e, t) {
        rt.attrHooks[t] = {
            set: function (e, i) {
                return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
            }
        }
    })), it.style || (rt.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Di = /^(?:input|select|textarea|button|object)$/i,
        Mi = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function (e, t) {
            return At(this, rt.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = rt.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), rt.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, i) {
            var n, r, a, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !rt.isXMLDoc(e), a && (t = rt.propFix[t] || t, r = rt.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = rt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Di.test(e.nodeName) || Mi.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), it.hrefNormalized || rt.each(["href", "src"], function (e, t) {
        rt.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), it.optSelected || (rt.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        rt.propFix[this.toLowerCase()] = this
    }), it.enctype || (rt.propFix.enctype = "encoding");
    var Ai = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function (e) {
            var t, i, n, r, a, o, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (rt.isFunction(e)) return this.each(function (t) {
                rt(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ai, " ") : " ")) {
                        for (a = 0; r = t[a++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        o = rt.trim(n), i.className !== o && (i.className = o)
                    } return this
        },
        removeClass: function (e) {
            var t, i, n, r, a, o, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (rt.isFunction(e)) return this.each(function (t) {
                rt(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ai, " ") : "")) {
                        for (a = 0; r = t[a++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        o = e ? rt.trim(n) : "", i.className !== o && (i.className = o)
                    } return this
        },
        toggleClass: function (e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(rt.isFunction(e) ? function (i) {
                rt(this).toggleClass(e.call(this, i, this.className, t), t)
            } : function () {
                if ("string" === i)
                    for (var t, n = 0, r = rt(this), a = e.match(bt) || []; t = a[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(i === wt || "boolean" === i) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : rt._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ai, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        rt.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), rt.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var Pi = rt.now(),
        Ii = /\?/,
        Fi = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var i, n = null,
            r = rt.trim(t + "");
        return r && !rt.trim(r.replace(Fi, function (e, t, r, a) {
            return i && t && (n = 0), 0 === n ? e : (i = r || t, n += !a - !r, "")
        })) ? Function("return " + r)() : rt.error("Invalid JSON: " + t)
    }, rt.parseXML = function (t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (n = new DOMParser, i = n.parseFromString(t, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(t))
        } catch (r) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + t), i
    };
    var Ei, Oi, Ni = /#.*$/,
        Li = /([?&])_=[^&]*/,
        $i = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ri = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ji = /^(?:GET|HEAD)$/,
        Hi = /^\/\//,
        Wi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zi = {},
        Vi = {},
        Bi = "*/".concat("*");
    try {
        Oi = location.href
    } catch (Yi) {
        Oi = pt.createElement("a"), Oi.href = "", Oi = Oi.href
    }
    Ei = Wi.exec(Oi.toLowerCase()) || [], rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Oi,
            type: "GET",
            isLocal: Ri.test(Ei[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? W(W(e, rt.ajaxSettings), t) : W(rt.ajaxSettings, e)
        },
        ajaxPrefilter: j(zi),
        ajaxTransport: j(Vi),
        ajax: function (e, t) {
            function i(e, t, i, n) {
                var r, c, v, y, _, k = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, o = n || "", x.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, i && (y = z(d, x, i)), y = V(d, y, x, r), r ? (d.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (rt.lastModified[a] = _), _ = x.getResponseHeader("etag"), _ && (rt.etag[a] = _)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, c = y.data, v = y.error, r = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || k) + "", r ? p.resolveWith(h, [c, k, x]) : p.rejectWith(h, [x, k, v]), x.statusCode(m), m = void 0, l && f.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? c : v]), g.fireWith(h, [x, k]), l && (f.trigger("ajaxComplete", [x, d]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, a, o, s, l, u, c, d = rt.ajaxSetup({}, t),
                h = d.context || d,
                f = d.context && (h.nodeType || h.jquery) ? rt(h) : rt.event,
                p = rt.Deferred(),
                g = rt.Callbacks("once memory"),
                m = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                _ = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = $i.exec(o);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var i = e.toLowerCase();
                        return b || (e = y[i] = y[i] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || _;
                        return u && u.abort(t), i(0, t), this
                    }
                };
            if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Oi) + "").replace(Ni, "").replace(Hi, Ei[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (n = Wi.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === Ei[1] && n[2] === Ei[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ei[3] || ("http:" === Ei[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = rt.param(d.data, d.traditional)), H(zi, d, t, x), 2 === b) return x;
            l = d.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ji.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Ii.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Li.test(a) ? a.replace(Li, "$1_=" + Pi++) : a + (Ii.test(a) ? "&" : "?") + "_=" + Pi++)), d.ifModified && (rt.lastModified[a] && x.setRequestHeader("If-Modified-Since", rt.lastModified[a]), rt.etag[a] && x.setRequestHeader("If-None-Match", rt.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Bi + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers) x.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(h, x, d) === !1 || 2 === b)) return x.abort();
            _ = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[r](d[r]);
            if (u = H(Vi, d, t, x)) {
                x.readyState = 1, l && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, i)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    i(-1, k)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function (e, t, i) {
            return rt.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return rt.get(e, void 0, t, "script")
        }
    }), rt.each(["get", "post"], function (e, t) {
        rt[t] = function (e, i, n, r) {
            return rt.isFunction(i) && (r = r || n, n = i, i = void 0), rt.ajax({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        rt.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), rt._evalUrl = function (e) {
        return rt.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, rt.fn.extend({
        wrapAll: function (e) {
            if (rt.isFunction(e)) return this.each(function (t) {
                rt(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = rt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return this.each(rt.isFunction(e) ? function (t) {
                rt(this).wrapInner(e.call(this, t))
            } : function () {
                var t = rt(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = rt.isFunction(e);
            return this.each(function (i) {
                rt(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), rt.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (e.style && e.style.display || rt.css(e, "display"))
    }, rt.expr.filters.visible = function (e) {
        return !rt.expr.filters.hidden(e)
    };
    var qi = /%20/g,
        Ui = /\[\]$/,
        Xi = /\r?\n/g,
        Gi = /^(?:submit|button|image|reset|file)$/i,
        Zi = /^(?:input|select|textarea|keygen)/i;
    rt.param = function (e, t) {
        var i, n = [],
            r = function (e, t) {
                t = rt.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(e) || e.jquery && !rt.isPlainObject(e)) rt.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (i in e) B(i, e[i], t, r);
        return n.join("&").replace(qi, "+")
    }, rt.fn.extend({
        serialize: function () {
            return rt.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = rt.prop(this, "elements");
                return e ? rt.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !rt(this).is(":disabled") && Zi.test(this.nodeName) && !Gi.test(e) && (this.checked || !Pt.test(e))
            }).map(function (e, t) {
                var i = rt(this).val();
                return null == i ? null : rt.isArray(i) ? rt.map(i, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Xi, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Xi, "\r\n")
                }
            }).get()
        }
    }), rt.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || q()
    } : Y;
    var Ki = 0,
        Qi = {},
        Ji = rt.ajaxSettings.xhr();
    e.ActiveXObject && rt(e).on("unload", function () {
        for (var e in Qi) Qi[e](void 0, !0)
    }), it.cors = !!Ji && "withCredentials" in Ji, Ji = it.ajax = !!Ji, Ji && rt.ajaxTransport(function (e) {
        if (!e.crossDomain || it.cors) {
            var t;
            return {
                send: function (i, n) {
                    var r, a = e.xhr(),
                        o = ++Ki;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) a[r] = e.xhrFields[r];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i) void 0 !== i[r] && a.setRequestHeader(r, i[r] + "");
                    a.send(e.hasContent && e.data || null), t = function (i, r) {
                        var s, l, u;
                        if (t && (r || 4 === a.readyState))
                            if (delete Qi[o], t = void 0, a.onreadystatechange = rt.noop, r) 4 !== a.readyState && a.abort();
                            else {
                                u = {}, s = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            } u && n(s, l, u, a.getAllResponseHeaders())
                    }, e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = Qi[o] = t : t()
                },
                abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return rt.globalEval(e), e
            }
        }
    }), rt.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), rt.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, i = pt.head || rt("head")[0] || pt.documentElement;
            return {
                send: function (n, r) {
                    t = pt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || r(200, "success"))
                    }, i.insertBefore(t, i.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = en.pop() || rt.expando + "_" + Pi++;
            return this[e] = !0, e
        }
    }), rt.ajaxPrefilter("json jsonp", function (t, i, n) {
        var r, a, o, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Ii.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return o || rt.error(r + " was not called"), o[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function () {
            o = arguments
        }, n.always(function () {
            e[r] = a, t[r] && (t.jsonpCallback = i.jsonpCallback, en.push(r)), o && rt.isFunction(a) && a(o[0]), o = a = void 0
        }), "script") : void 0
    }), rt.parseHTML = function (e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || pt;
        var n = dt.exec(e),
            r = !i && [];
        return n ? [t.createElement(n[1])] : (n = rt.buildFragment([e], t, r), r && r.length && rt(r).remove(), rt.merge([], n.childNodes))
    };
    var nn = rt.fn.load;
    rt.fn.load = function (e, t, i) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var n, r, a, o = this,
            s = e.indexOf(" ");
        return s >= 0 && (n = rt.trim(e.slice(s, e.length)), e = e.slice(0, s)), rt.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && rt.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, o.html(n ? rt("<div>").append(rt.parseHTML(e)).find(n) : e)
        }).complete(i && function (e, t) {
            o.each(i, r || [e.responseText, t, e])
        }), this
    }, rt.expr.filters.animated = function (e) {
        return rt.grep(rt.timers, function (t) {
            return e === t.elem
        }).length
    };
    var rn = e.document.documentElement;
    rt.offset = {
        setOffset: function (e, t, i) {
            var n, r, a, o, s, l, u, c = rt.css(e, "position"),
                d = rt(e),
                h = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), a = rt.css(e, "top"), l = rt.css(e, "left"), u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [a, l]) > -1, u ? (n = d.position(), o = n.top, r = n.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), rt.isFunction(t) && (t = t.call(e, i, s)), null != t.top && (h.top = t.top - s.top + o), null != t.left && (h.left = t.left - s.left + r), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, rt.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                rt.offset.setOffset(this, e, t)
            });
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                a = r && r.ownerDocument;
            if (a) return t = a.documentElement, rt.contains(t, r) ? (typeof r.getBoundingClientRect !== wt && (n = r.getBoundingClientRect()), i = U(a), {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n
        },
        position: function () {
            if (this[0]) {
                var e, t, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === rt.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), rt.nodeName(e[0], "html") || (i = e.offset()), i.top += rt.css(e[0], "borderTopWidth", !0), i.left += rt.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - rt.css(n, "marginTop", !0),
                    left: t.left - i.left - rt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || rn; e && !rt.nodeName(e, "html") && "static" === rt.css(e, "position");) e = e.offsetParent;
                return e || rn
            })
        }
    }), rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var i = /Y/.test(t);
        rt.fn[e] = function (n) {
            return At(this, function (e, n, r) {
                var a = U(e);
                return void 0 === r ? a ? t in a ? a[t] : a.document.documentElement[n] : e[n] : void(a ? a.scrollTo(i ? rt(a).scrollLeft() : r, i ? r : rt(a).scrollTop()) : e[n] = r)
            }, e, n, arguments.length, null)
        }
    }), rt.each(["top", "left"], function (e, t) {
        rt.cssHooks[t] = T(it.pixelPosition, function (e, i) {
            return i ? (i = ti(e, t), ni.test(i) ? rt(e).position()[t] + "px" : i) : void 0
        })
    }), rt.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        rt.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (i, n) {
            rt.fn[n] = function (n, r) {
                var a = arguments.length && (i || "boolean" != typeof n),
                    o = i || (n === !0 || r === !0 ? "margin" : "border");
                return At(this, function (t, i, n) {
                    var r;
                    return rt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === n ? rt.css(t, i, o) : rt.style(t, i, n, o)
                }, t, a ? n : void 0, a, null)
            }
        })
    }), rt.fn.size = function () {
        return this.length
    }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return rt
    });
    var an = e.jQuery,
        on = e.$;
    return rt.noConflict = function (t) {
        return e.$ === rt && (e.$ = on), t && e.jQuery === rt && (e.jQuery = an), rt
    }, typeof t === wt && (e.jQuery = e.$ = rt), rt
}),
function (e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var i, n = e(document);
    e.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote], button[data-confirm]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function (t) {
            var i = e('meta[name="csrf-token"]').attr("content");
            i && t.setRequestHeader("X-CSRF-Token", i)
        },
        refreshCSRFTokens: function () {
            var t = e("meta[name=csrf-token]").attr("content"),
                i = e("meta[name=csrf-param]").attr("content");
            e('form input[name="' + i + '"]').val(t)
        },
        fire: function (t, i, n) {
            var r = e.Event(i);
            return t.trigger(r, n), r.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var r, a, o, s, l, u, c, d;
            if (i.fire(n, "ajax:before")) {
                if (s = n.data("cross-domain"), l = s === t ? null : s, u = n.data("with-credentials") || null, c = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                    r = n.attr("method"), a = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (r = n.data("method"), a = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (r = n.data("method") || "get", a = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (r = n.data("method"), a = i.href(n), o = n.data("params") || null);
                return d = {
                    type: r || "GET",
                    data: o,
                    dataType: c,
                    beforeSend: function (e, r) {
                        return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), i.fire(n, "ajax:beforeSend", [e, r]) ? void n.trigger("ajax:send", e) : !1
                    },
                    success: function (e, t, i) {
                        n.trigger("ajax:success", [e, t, i])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, i) {
                        n.trigger("ajax:error", [e, t, i])
                    },
                    crossDomain: l
                }, u && (d.xhrFields = {
                    withCredentials: u
                }), a && (d.url = a), i.ajax(d)
            }
            return !1
        },
        handleMethod: function (n) {
            var r = i.href(n),
                a = n.data("method"),
                o = n.attr("target"),
                s = e("meta[name=csrf-token]").attr("content"),
                l = e("meta[name=csrf-param]").attr("content"),
                u = e('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + a + '" type="hidden" />';
            l !== t && s !== t && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), o && u.attr("target", o), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function (t, i) {
            return t.is("form") ? e(t[0].elements).filter(i) : t.find(i)
        },
        disableFormElements: function (t) {
            i.formElements(t, i.disableSelector).each(function () {
                i.disableFormElement(e(this))
            })
        },
        disableFormElement: function (e) {
            var i, n;
            i = e.is("button") ? "html" : "val", n = e.data("disable-with"), e.data("ujs:enable-with", e[i]()), n !== t && e[i](n), e.prop("disabled", !0)
        },
        enableFormElements: function (t) {
            i.formElements(t, i.enableSelector).each(function () {
                i.enableFormElement(e(this))
            })
        },
        enableFormElement: function (e) {
            var t = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
        },
        allowAction: function (e) {
            var t, n = e.data("confirm"),
                r = !1;
            return n ? (i.fire(e, "confirm") && (r = i.confirm(n), t = i.fire(e, "confirm:complete", [r])), r && t) : !0
        },
        blankInputs: function (t, i, n) {
            var r, a, o = e(),
                s = i || "input,textarea",
                l = t.find(s);
            return l.each(function () {
                if (r = e(this), a = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !a == !n) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                    o = o.add(r)
                }
            }), o.length ? o : !1
        },
        nonBlankInputs: function (e, t) {
            return i.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            var n = e.data("disable-with");
            e.data("ujs:enable-with", e.html()), n !== t && e.html(n), e.bind("click.railsDisable", function (e) {
                return i.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, i.fire(n, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || i.CSRFProtection(n)
    }), n.delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(e(this))
    }), n.delegate(i.buttonDisableSelector, "ajax:complete", function () {
        i.enableFormElement(e(this))
    }), n.delegate(i.linkClickSelector, "click.rails", function (n) {
        var r = e(this),
            a = r.data("method"),
            o = r.data("params"),
            s = n.metaKey || n.ctrlKey;
        if (!i.allowAction(r)) return i.stopEverything(n);
        if (!s && r.is(i.linkDisableSelector) && i.disableElement(r), r.data("remote") !== t) {
            if (s && (!a || "GET" === a) && !o) return !0;
            var l = i.handleRemote(r);
            return l === !1 ? i.enableElement(r) : l.error(function () {
                i.enableElement(r)
            }), !1
        }
        return r.data("method") ? (i.handleMethod(r), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!i.allowAction(n)) return i.stopEverything(t);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var r = i.handleRemote(n);
        return r === !1 ? i.enableFormElement(n) : r.error(function () {
            i.enableFormElement(n)
        }), !1
    }), n.delegate(i.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(t)
    }), n.delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var r, a, o = e(this),
            s = o.data("remote") !== t;
        if (!i.allowAction(o)) return i.stopEverything(n);
        if (o.attr("novalidate") == t && (r = i.blankInputs(o, i.requiredInputSelector), r && i.fire(o, "ajax:aborted:required", [r]))) return i.stopEverything(n);
        if (s) {
            if (a = i.nonBlankInputs(o, i.fileInputSelector)) {
                setTimeout(function () {
                    i.disableFormElements(o)
                }, 13);
                var l = i.fire(o, "ajax:aborted:file", [a]);
                return l || setTimeout(function () {
                    i.enableFormElements(o)
                }, 13), l
            }
            return i.handleRemote(o), !1
        }
        setTimeout(function () {
            i.disableFormElements(o)
        }, 13)
    }), n.delegate(i.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!i.allowAction(n)) return i.stopEverything(t);
        var r = n.attr("name"),
            a = r ? {
                name: r,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", a)
    }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function (t) {
        this == t.target && i.disableFormElements(e(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && i.enableFormElements(e(this))
    }), e(function () {
        i.refreshCSRFTokens()
    }))
}(jQuery),
function () {
    var e;
    e = function () {
        function e(t, i) {
            this.form_field = t, this.options = null != i ? i : {}, e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }
        return e.prototype.set_default_values = function () {
            return this.click_test_action = function (e) {
                return function (t) {
                    return e.test_active_click(t)
                }
            }(this), this.activate_action = function (e) {
                return function (t) {
                    return e.activate_field(t)
                }
            }(this), this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY
        }, e.prototype.set_default_text = function () {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text
        }, e.prototype.choice_label = function (e) {
            return this.include_group_label_in_selected && null != e.group_label ? "<b class='group-name'>" + e.group_label + "</b>" + e.html : e.html
        }, e.prototype.mouse_enter = function () {
            return this.mouse_on_container = !0
        }, e.prototype.mouse_leave = function () {
            return this.mouse_on_container = !1
        }, e.prototype.input_focus = function () {
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function (e) {
                    return function () {
                        return e.container_mousedown()
                    }
                }(this), 50)
            } else if (!this.active_field) return this.activate_field()
        }, e.prototype.input_blur = function () {
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function (e) {
                return function () {
                    return e.blur_test()
                }
            }(this), 100))
        }, e.prototype.results_option_build = function (e) {
            var t, i, n, r, a, o, s;
            for (t = "", s = 0, o = this.results_data, r = 0, a = o.length; a > r && (i = o[r], n = "", n = i.group ? this.result_add_group(i) : this.result_add_option(i), "" !== n && (s++, t += n), (null != e ? e.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i))), !(s >= this.max_shown_results)); r++);
            return t
        }, e.prototype.result_add_option = function (e) {
            var t, i;
            return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), i = document.createElement("li"), i.className = t.join(" "), i.style.cssText = e.style, i.setAttribute("data-option-array-index", e.array_index), i.innerHTML = e.search_text, e.title && (i.title = e.title), this.outerHTML(i)) : ""
        }, e.prototype.result_add_group = function (e) {
            var t, i;
            return (e.search_match || e.group_match) && e.active_options > 0 ? (t = [], t.push("group-result"), e.classes && t.push(e.classes), i = document.createElement("li"), i.className = t.join(" "), i.innerHTML = e.search_text, e.title && (i.title = e.title), this.outerHTML(i)) : ""
        }, e.prototype.results_update_field = function () {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, e.prototype.reset_single_select_options = function () {
            var e, t, i, n, r;
            for (i = this.results_data, r = [], e = 0, t = i.length; t > e; e++) n = i[e], r.push(n.selected ? n.selected = !1 : void 0);
            return r
        }, e.prototype.results_toggle = function () {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, e.prototype.results_search = function () {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, e.prototype.winnow_results = function () {
            var e, t, i, n, r, a, o, s, l, u, c, d;
            for (this.no_results_clear(), o = 0, l = this.get_search_text(), e = l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), d = new RegExp(e, "i"), a = this.get_search_regex(e), r = this.results_data, t = 0, i = r.length; i > t; t++) n = r[t], n.search_match = !1, s = null, this.include_option_in_results(n) && (n.group && (n.group_match = !1, n.active_options = 0), null != n.group_array_index && this.results_data[n.group_array_index] && (s = this.results_data[n.group_array_index], 0 === s.active_options && s.search_match && (o += 1), s.active_options += 1), n.search_text = n.group ? n.label : n.html, (!n.group || this.group_search) && (n.search_match = this.search_string_match(n.search_text, a), n.search_match && !n.group && (o += 1), n.search_match ? (l.length && (u = n.search_text.search(d), c = n.search_text.substr(0, u + l.length) + "</em>" + n.search_text.substr(u + l.length), n.search_text = c.substr(0, u) + "<em>" + c.substr(u)), null != s && (s.group_match = !0)) : null != n.group_array_index && this.results_data[n.group_array_index].search_match && (n.search_match = !0)));
            return this.result_clear_highlight(), 1 > o && l.length ? (this.update_results_content(""), this.no_results(l)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, e.prototype.get_search_regex = function (e) {
            var t;
            return t = this.search_contains ? "" : "^", new RegExp(t + e, "i")
        }, e.prototype.search_string_match = function (e, t) {
            var i, n, r, a;
            if (t.test(e)) return !0;
            if (this.enable_split_word_search && (e.indexOf(" ") >= 0 || 0 === e.indexOf("[")) && (a = e.replace(/\[|\]/g, "").split(" "), a.length))
                for (i = 0, n = a.length; n > i; i++)
                    if (r = a[i], t.test(r)) return !0
        }, e.prototype.choices_count = function () {
            var e, t, i, n;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, n = this.form_field.options, e = 0, t = n.length; t > e; e++) i = n[e], i.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, e.prototype.choices_click = function (e) {
            return e.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, e.prototype.keyup_checker = function (e) {
            var t, i;
            switch (i = null != (t = e.which) ? t : e.keyCode, this.search_field_scale(), i) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (e.preventDefault(), this.results_showing) return this.result_select(e);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, e.prototype.clipboard_event_checker = function () {
            return setTimeout(function (e) {
                return function () {
                    return e.results_search()
                }
            }(this), 50)
        }, e.prototype.container_width = function () {
            return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
        }, e.prototype.include_option_in_results = function (e) {
            return this.is_multiple && !this.display_selected_options && e.selected ? !1 : !this.display_disabled_options && e.disabled ? !1 : e.empty ? !1 : !0
        }, e.prototype.search_results_touchstart = function (e) {
            return this.touch_started = !0, this.search_results_mouseover(e)
        }, e.prototype.search_results_touchmove = function (e) {
            return this.touch_started = !1, this.search_results_mouseout(e)
        }, e.prototype.search_results_touchend = function (e) {
            return this.touch_started ? this.search_results_mouseup(e) : void 0
        }, e.prototype.outerHTML = function (e) {
            var t;
            return e.outerHTML ? e.outerHTML : (t = document.createElement("div"), t.appendChild(e), t.innerHTML)
        }, e.browser_is_supported = function () {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e
    }(), window.AbstractChosen = e
}.call(this),
    function () {
        var e;
        e = function () {
            function e() {
                this.options_index = 0, this.parsed = []
            }
            return e.prototype.add_node = function (e) {
                return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
            }, e.prototype.add_group = function (e) {
                var t, i, n, r, a, o;
                for (t = this.parsed.length, this.parsed.push({
                        array_index: t,
                        group: !0,
                        label: this.escapeExpression(e.label),
                        title: e.title ? e.title : void 0,
                        children: 0,
                        disabled: e.disabled,
                        classes: e.className
                    }), a = e.childNodes, o = [], i = 0, n = a.length; n > i; i++) r = a[i], o.push(this.add_option(r, t, e.disabled));
                return o
            }, e.prototype.add_option = function (e, t, i) {
                return "OPTION" === e.nodeName.toUpperCase() ? ("" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: e.value,
                    text: e.text,
                    html: e.innerHTML,
                    title: e.title ? e.title : void 0,
                    selected: e.selected,
                    disabled: i === !0 ? i : e.disabled,
                    group_array_index: t,
                    group_label: null != t ? this.parsed[t].label : null,
                    classes: e.className,
                    style: e.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1) : void 0
            }, e.prototype.escapeExpression = function (e) {
                var t, i;
                return null == e || e === !1 ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(i, function (e) {
                    return t[e] || "&amp;"
                })) : e
            }, e
        }(), e.select_to_array = function (t) {
            var i, n, r, a, o;
            for (a = new e, o = t.childNodes, n = 0, r = o.length; r > n; n++) i = o[n], a.add_node(i);
            return a.parsed
        }, window.SelectParser = e
    }.call(this),
    function () {
        var e, t, i = function (e, t) {
                function i() {
                    this.constructor = e
                }
                for (var r in t) n.call(t, r) && (e[r] = t[r]);
                return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
            },
            n = {}.hasOwnProperty;
        e = jQuery, e.fn.extend({
            chosen: function (i) {
                return AbstractChosen.browser_is_supported() ? this.each(function () {
                    var n, r;
                    n = e(this), r = n.data("chosen"), "destroy" === i && r instanceof t ? r.destroy() : r instanceof t || n.data("chosen", new t(this, i))
                }) : this
            }
        }), t = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return i(n, t), n.prototype.setup = function () {
                return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
            }, n.prototype.set_up_html = function () {
                var t, i;
                return t = ["chosen-container"], t.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl"), i = {
                    "class": t.join(" "),
                    style: "width: " + this.container_width() + ";",
                    title: this.form_field.title
                }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = e("<div />", i), this.container.html(this.is_multiple ? '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>' : '<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
            }, n.prototype.on_ready = function () {
                return this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, n.prototype.register_observers = function () {
                return this.container.bind("touchstart.chosen", function (e) {
                    return function (t) {
                        return e.container_mousedown(t), t.preventDefault()
                    }
                }(this)), this.container.bind("touchend.chosen", function (e) {
                    return function (t) {
                        return e.container_mouseup(t), t.preventDefault()
                    }
                }(this)), this.container.bind("mousedown.chosen", function (e) {
                    return function (t) {
                        e.container_mousedown(t)
                    }
                }(this)), this.container.bind("mouseup.chosen", function (e) {
                    return function (t) {
                        e.container_mouseup(t)
                    }
                }(this)), this.container.bind("mouseenter.chosen", function (e) {
                    return function (t) {
                        e.mouse_enter(t)
                    }
                }(this)), this.container.bind("mouseleave.chosen", function (e) {
                    return function (t) {
                        e.mouse_leave(t)
                    }
                }(this)), this.search_results.bind("mouseup.chosen", function (e) {
                    return function (t) {
                        e.search_results_mouseup(t)
                    }
                }(this)), this.search_results.bind("mouseover.chosen", function (e) {
                    return function (t) {
                        e.search_results_mouseover(t)
                    }
                }(this)), this.search_results.bind("mouseout.chosen", function (e) {
                    return function (t) {
                        e.search_results_mouseout(t)
                    }
                }(this)), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (e) {
                    return function (t) {
                        e.search_results_mousewheel(t)
                    }
                }(this)), this.search_results.bind("touchstart.chosen", function (e) {
                    return function (t) {
                        e.search_results_touchstart(t)
                    }
                }(this)), this.search_results.bind("touchmove.chosen", function (e) {
                    return function (t) {
                        e.search_results_touchmove(t)
                    }
                }(this)), this.search_results.bind("touchend.chosen", function (e) {
                    return function (t) {
                        e.search_results_touchend(t)
                    }
                }(this)), this.form_field_jq.bind("chosen:updated.chosen", function (e) {
                    return function (t) {
                        e.results_update_field(t)
                    }
                }(this)), this.form_field_jq.bind("chosen:activate.chosen", function (e) {
                    return function (t) {
                        e.activate_field(t)
                    }
                }(this)), this.form_field_jq.bind("chosen:open.chosen", function (e) {
                    return function (t) {
                        e.container_mousedown(t)
                    }
                }(this)), this.form_field_jq.bind("chosen:close.chosen", function (e) {
                    return function (t) {
                        e.input_blur(t)
                    }
                }(this)), this.search_field.bind("blur.chosen", function (e) {
                    return function (t) {
                        e.input_blur(t)
                    }
                }(this)), this.search_field.bind("keyup.chosen", function (e) {
                    return function (t) {
                        e.keyup_checker(t)
                    }
                }(this)), this.search_field.bind("keydown.chosen", function (e) {
                    return function (t) {
                        e.keydown_checker(t)
                    }
                }(this)), this.search_field.bind("focus.chosen", function (e) {
                    return function (t) {
                        e.input_focus(t)
                    }
                }(this)), this.search_field.bind("cut.chosen", function (e) {
                    return function (t) {
                        e.clipboard_event_checker(t)
                    }
                }(this)), this.search_field.bind("paste.chosen", function (e) {
                    return function (t) {
                        e.clipboard_event_checker(t)
                    }
                }(this)), this.is_multiple ? this.search_choices.bind("click.chosen", function (e) {
                    return function (t) {
                        e.choices_click(t)
                    }
                }(this)) : this.container.bind("click.chosen", function (e) {
                    e.preventDefault()
                })
            }, n.prototype.destroy = function () {
                return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, n.prototype.search_field_disabled = function () {
                return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
            }, n.prototype.container_mousedown = function (t) {
                return this.is_disabled || (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(), null != t && e(t.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
            }, n.prototype.container_mouseup = function (e) {
                return "ABBR" !== e.target.nodeName || this.is_disabled ? void 0 : this.results_reset(e)
            }, n.prototype.search_results_mousewheel = function (e) {
                var t;
                return e.originalEvent && (t = e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail), null != t ? (e.preventDefault(), "DOMMouseScroll" === e.type && (t = 40 * t), this.search_results.scrollTop(t + this.search_results.scrollTop())) : void 0
            }, n.prototype.blur_test = function () {
                return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
            }, n.prototype.close_field = function () {
                return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
            }, n.prototype.activate_field = function () {
                return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, n.prototype.test_active_click = function (t) {
                var i;
                return i = e(t.target).closest(".chosen-container"), i.length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field()
            }, n.prototype.results_build = function () {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, n.prototype.result_do_highlight = function (e) {
                var t, i, n, r, a;
                if (e.length) {
                    if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), n = parseInt(this.search_results.css("maxHeight"), 10), a = this.search_results.scrollTop(), r = n + a, i = this.result_highlight.position().top + this.search_results.scrollTop(), t = i + this.result_highlight.outerHeight(), t >= r) return this.search_results.scrollTop(t - n > 0 ? t - n : 0);
                    if (a > i) return this.search_results.scrollTop(i)
                }
            }, n.prototype.result_clear_highlight = function () {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, n.prototype.results_show = function () {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }))
            }, n.prototype.update_results_content = function (e) {
                return this.search_results.html(e)
            }, n.prototype.results_hide = function () {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, n.prototype.set_tab_index = function () {
                var e;
                return this.form_field.tabIndex ? (e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e) : void 0
            }, n.prototype.set_label_behavior = function () {
                return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (e) {
                    return function (t) {
                        return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
                    }
                }(this)) : void 0
            }, n.prototype.show_search_field_default = function () {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, n.prototype.search_results_mouseup = function (t) {
                var i;
                return i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), i.length ? (this.result_highlight = i, this.result_select(t), this.search_field.focus()) : void 0
            }, n.prototype.search_results_mouseover = function (t) {
                var i;
                return i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), i ? this.result_do_highlight(i) : void 0
            }, n.prototype.search_results_mouseout = function (t) {
                return e(t.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
            }, n.prototype.choice_build = function (t) {
                var i, n;
                return i = e("<li />", {
                    "class": "search-choice"
                }).html("<span>" + this.choice_label(t) + "</span>"), t.disabled ? i.addClass("search-choice-disabled") : (n = e("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": t.array_index
                }), n.bind("click.chosen", function (e) {
                    return function (t) {
                        return e.choice_destroy_link_click(t)
                    }
                }(this)), i.append(n)), this.search_container.before(i)
            }, n.prototype.choice_destroy_link_click = function (t) {
                return t.preventDefault(), t.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(e(t.target))
            }, n.prototype.choice_destroy = function (e) {
                return this.result_deselect(e[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()) : void 0
            }, n.prototype.results_reset = function () {
                return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
            }, n.prototype.results_reset_cleanup = function () {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, n.prototype.result_select = function (e) {
                var t, i;
                return this.result_highlight ? (t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), t.addClass("result-selected"), i = this.results_data[t[0].getAttribute("data-option-array-index")], i.selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.show_search_field_default(), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[i.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, e.preventDefault(), this.search_field_scale())) : void 0
            }, n.prototype.single_set_selected_text = function (e) {
                return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(e)
            }, n.prototype.result_deselect = function (e) {
                var t;
                return t = this.results_data[e], this.form_field.options[t.options_index].disabled ? !1 : (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[t.options_index].value
                }), this.search_field_scale(), !0)
            }, n.prototype.single_deselect_control_build = function () {
                return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
            }, n.prototype.get_search_text = function () {
                return e("<div/>").text(e.trim(this.search_field.val())).html()
            }, n.prototype.winnow_results_set_highlight = function () {
                var e, t;
                return t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first(), null != e ? this.result_do_highlight(e) : void 0
            }, n.prototype.no_results = function (t) {
                var i;
                return i = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), i.find("span").first().html(t), this.search_results.append(i), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, n.prototype.no_results_clear = function () {
                return this.search_results.find(".no-results").remove()
            }, n.prototype.keydown_arrow = function () {
                var e;
                return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
            }, n.prototype.keyup_arrow = function () {
                var e;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, n.prototype.keydown_backstroke = function () {
                var e;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last(), e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, n.prototype.clear_backstroke = function () {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, n.prototype.keydown_checker = function (e) {
                var t, i;
                switch (i = null != (t = e.which) ? t : e.keyCode, this.search_field_scale(), 8 !== i && this.pending_backstroke && this.clear_backstroke(), i) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                        break;
                    case 13:
                        this.results_showing && e.preventDefault();
                        break;
                    case 32:
                        this.disable_search && e.preventDefault();
                        break;
                    case 38:
                        e.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        e.preventDefault(), this.keydown_arrow()
                }
            }, n.prototype.search_field_scale = function () {
                var t, i, n, r, a, o, s, l, u;
                if (this.is_multiple) {
                    for (n = 0, u = 0, s = "position:absolute; left: -1000px; top: -1000px; display:none;", l = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], r = 0, a = l.length; a > r; r++) o = l[r], s += o + ":" + this.search_field.css(o) + ";";
                    return t = e("<div />", {
                        style: s
                    }), t.text(this.search_field.val()), e("body").append(t), u = t.width() + 25, t.remove(), i = this.container.outerWidth(), u > i - 10 && (u = i - 10), this.search_field.css({
                        width: u + "px"
                    })
                }
            }, n
        }(AbstractChosen)
    }.call(this), $(function () {
        $("#archive-blog .archive-dates").on("click", function () {
            var e = $(this).next("ul.blog-archive");
            $("ul.blog-archive").not(e).slideUp(250), e.slideToggle(250)
        }), $("h5.read-more").on("click", function () {
            $(this).hide(100), $(this).siblings("div.extra").slideDown(250)
        }), $("h5.read-less").on("click", function () {
            $(this).parent("div.extra").slideUp(250), $(this).parent().siblings("h5.read-more").show(100)
        })
    }),
    function (e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            var t;
            t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Chart = e()
        }
    }(function () {
        var e;
        return function t(e, i, n) {
            function r(o, s) {
                if (!i[o]) {
                    if (!e[o]) {
                        var l = "function" == typeof require && require;
                        if (!s && l) return l(o, !0);
                        if (a) return a(o, !0);
                        var u = new Error("Cannot find module '" + o + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = i[o] = {
                        exports: {}
                    };
                    e[o][0].call(c.exports, function (t) {
                        var i = e[o][1][t];
                        return r(i ? i : t)
                    }, c, c.exports, t, e, i, n)
                }
                return i[o].exports
            }
            for (var a = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
            return r
        }({
            1: [function (e, t) {
                function i(e) {
                    if (e) {
                        var t = /^#([a-fA-F0-9]{3})$/,
                            i = /^#([a-fA-F0-9]{6})$/,
                            n = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                            r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                            a = /(\w+)/,
                            o = [0, 0, 0],
                            s = 1,
                            l = e.match(t);
                        if (l) {
                            l = l[1];
                            for (var u = 0; u < o.length; u++) o[u] = parseInt(l[u] + l[u], 16)
                        } else if (l = e.match(i)) {
                            l = l[1];
                            for (var u = 0; u < o.length; u++) o[u] = parseInt(l.slice(2 * u, 2 * u + 2), 16)
                        } else if (l = e.match(n)) {
                            for (var u = 0; u < o.length; u++) o[u] = parseInt(l[u + 1]);
                            s = parseFloat(l[4])
                        } else if (l = e.match(r)) {
                            for (var u = 0; u < o.length; u++) o[u] = Math.round(2.55 * parseFloat(l[u + 1]));
                            s = parseFloat(l[4])
                        } else if (l = e.match(a)) {
                            if ("transparent" == l[1]) return [0, 0, 0, 0];
                            if (o = b[l[1]], !o) return
                        }
                        for (var u = 0; u < o.length; u++) o[u] = v(o[u], 0, 255);
                        return s = s || 0 == s ? v(s, 0, 1) : 1, o[3] = s, o
                    }
                }

                function n(e) {
                    if (e) {
                        var t = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                            i = e.match(t);
                        if (i) {
                            var n = parseFloat(i[4]),
                                r = v(parseInt(i[1]), 0, 360),
                                a = v(parseFloat(i[2]), 0, 100),
                                o = v(parseFloat(i[3]), 0, 100),
                                s = v(isNaN(n) ? 1 : n, 0, 1);
                            return [r, a, o, s]
                        }
                    }
                }

                function r(e) {
                    if (e) {
                        var t = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                            i = e.match(t);
                        if (i) {
                            var n = parseFloat(i[4]),
                                r = v(parseInt(i[1]), 0, 360),
                                a = v(parseFloat(i[2]), 0, 100),
                                o = v(parseFloat(i[3]), 0, 100),
                                s = v(isNaN(n) ? 1 : n, 0, 1);
                            return [r, a, o, s]
                        }
                    }
                }

                function a(e) {
                    var t = i(e);
                    return t && t.slice(0, 3)
                }

                function o(e) {
                    var t = n(e);
                    return t && t.slice(0, 3)
                }

                function s(e) {
                    var t = i(e);
                    return t ? t[3] : (t = n(e)) ? t[3] : (t = r(e)) ? t[3] : void 0
                }

                function l(e) {
                    return "#" + y(e[0]) + y(e[1]) + y(e[2])
                }

                function u(e, t) {
                    return 1 > t || e[3] && e[3] < 1 ? c(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
                }

                function c(e, t) {
                    return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
                }

                function d(e, t) {
                    if (1 > t || e[3] && e[3] < 1) return h(e, t);
                    var i = Math.round(e[0] / 255 * 100),
                        n = Math.round(e[1] / 255 * 100),
                        r = Math.round(e[2] / 255 * 100);
                    return "rgb(" + i + "%, " + n + "%, " + r + "%)"
                }

                function h(e, t) {
                    var i = Math.round(e[0] / 255 * 100),
                        n = Math.round(e[1] / 255 * 100),
                        r = Math.round(e[2] / 255 * 100);
                    return "rgba(" + i + "%, " + n + "%, " + r + "%, " + (t || e[3] || 1) + ")"
                }

                function f(e, t) {
                    return 1 > t || e[3] && e[3] < 1 ? p(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
                }

                function p(e, t) {
                    return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
                }

                function g(e, t) {
                    return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
                }

                function m(e) {
                    return _[e.slice(0, 3)]
                }

                function v(e, t, i) {
                    return Math.min(Math.max(t, e), i)
                }

                function y(e) {
                    var t = e.toString(16).toUpperCase();
                    return t.length < 2 ? "0" + t : t
                }
                var b = e(5);
                t.exports = {
                    getRgba: i,
                    getHsla: n,
                    getRgb: a,
                    getHsl: o,
                    getHwb: r,
                    getAlpha: s,
                    hexString: l,
                    rgbString: u,
                    rgbaString: c,
                    percentString: d,
                    percentaString: h,
                    hslString: f,
                    hslaString: p,
                    hwbString: g,
                    keyword: m
                };
                var _ = {};
                for (var x in b) _[b[x]] = x
            }, {
                5: 5
            }],
            2: [function (e, t) {
                var i = e(4),
                    n = e(1),
                    r = function (e) {
                        if (e instanceof r) return e;
                        if (!(this instanceof r)) return new r(e);
                        this.values = {
                            rgb: [0, 0, 0],
                            hsl: [0, 0, 0],
                            hsv: [0, 0, 0],
                            hwb: [0, 0, 0],
                            cmyk: [0, 0, 0, 0],
                            alpha: 1
                        };
                        var t;
                        if ("string" == typeof e)
                            if (t = n.getRgba(e)) this.setValues("rgb", t);
                            else if (t = n.getHsla(e)) this.setValues("hsl", t);
                        else {
                            if (!(t = n.getHwb(e))) throw new Error('Unable to parse color from string "' + e + '"');
                            this.setValues("hwb", t)
                        } else if ("object" == typeof e)
                            if (t = e, void 0 !== t.r || void 0 !== t.red) this.setValues("rgb", t);
                            else if (void 0 !== t.l || void 0 !== t.lightness) this.setValues("hsl", t);
                        else if (void 0 !== t.v || void 0 !== t.value) this.setValues("hsv", t);
                        else if (void 0 !== t.w || void 0 !== t.whiteness) this.setValues("hwb", t);
                        else {
                            if (void 0 === t.c && void 0 === t.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(e));
                            this.setValues("cmyk", t)
                        }
                    };
                r.prototype = {
                    rgb: function () {
                        return this.setSpace("rgb", arguments)
                    },
                    hsl: function () {
                        return this.setSpace("hsl", arguments)
                    },
                    hsv: function () {
                        return this.setSpace("hsv", arguments)
                    },
                    hwb: function () {
                        return this.setSpace("hwb", arguments)
                    },
                    cmyk: function () {
                        return this.setSpace("cmyk", arguments)
                    },
                    rgbArray: function () {
                        return this.values.rgb
                    },
                    hslArray: function () {
                        return this.values.hsl
                    },
                    hsvArray: function () {
                        return this.values.hsv
                    },
                    hwbArray: function () {
                        var e = this.values;
                        return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
                    },
                    cmykArray: function () {
                        return this.values.cmyk
                    },
                    rgbaArray: function () {
                        var e = this.values;
                        return e.rgb.concat([e.alpha])
                    },
                    hslaArray: function () {
                        var e = this.values;
                        return e.hsl.concat([e.alpha])
                    },
                    alpha: function (e) {
                        return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
                    },
                    red: function (e) {
                        return this.setChannel("rgb", 0, e)
                    },
                    green: function (e) {
                        return this.setChannel("rgb", 1, e)
                    },
                    blue: function (e) {
                        return this.setChannel("rgb", 2, e)
                    },
                    hue: function (e) {
                        return e && (e %= 360, e = 0 > e ? 360 + e : e), this.setChannel("hsl", 0, e)
                    },
                    saturation: function (e) {
                        return this.setChannel("hsl", 1, e)
                    },
                    lightness: function (e) {
                        return this.setChannel("hsl", 2, e)
                    },
                    saturationv: function (e) {
                        return this.setChannel("hsv", 1, e)
                    },
                    whiteness: function (e) {
                        return this.setChannel("hwb", 1, e)
                    },
                    blackness: function (e) {
                        return this.setChannel("hwb", 2, e)
                    },
                    value: function (e) {
                        return this.setChannel("hsv", 2, e)
                    },
                    cyan: function (e) {
                        return this.setChannel("cmyk", 0, e)
                    },
                    magenta: function (e) {
                        return this.setChannel("cmyk", 1, e)
                    },
                    yellow: function (e) {
                        return this.setChannel("cmyk", 2, e)
                    },
                    black: function (e) {
                        return this.setChannel("cmyk", 3, e)
                    },
                    hexString: function () {
                        return n.hexString(this.values.rgb)
                    },
                    rgbString: function () {
                        return n.rgbString(this.values.rgb, this.values.alpha)
                    },
                    rgbaString: function () {
                        return n.rgbaString(this.values.rgb, this.values.alpha)
                    },
                    percentString: function () {
                        return n.percentString(this.values.rgb, this.values.alpha)
                    },
                    hslString: function () {
                        return n.hslString(this.values.hsl, this.values.alpha)
                    },
                    hslaString: function () {
                        return n.hslaString(this.values.hsl, this.values.alpha)
                    },
                    hwbString: function () {
                        return n.hwbString(this.values.hwb, this.values.alpha)
                    },
                    keyword: function () {
                        return n.keyword(this.values.rgb, this.values.alpha)
                    },
                    rgbNumber: function () {
                        var e = this.values.rgb;
                        return e[0] << 16 | e[1] << 8 | e[2]
                    },
                    luminosity: function () {
                        for (var e = this.values.rgb, t = [], i = 0; i < e.length; i++) {
                            var n = e[i] / 255;
                            t[i] = .03928 >= n ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                        }
                        return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                    },
                    contrast: function (e) {
                        var t = this.luminosity(),
                            i = e.luminosity();
                        return t > i ? (t + .05) / (i + .05) : (i + .05) / (t + .05)
                    },
                    level: function (e) {
                        var t = this.contrast(e);
                        return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
                    },
                    dark: function () {
                        var e = this.values.rgb,
                            t = (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3;
                        return 128 > t
                    },
                    light: function () {
                        return !this.dark()
                    },
                    negate: function () {
                        for (var e = [], t = 0; 3 > t; t++) e[t] = 255 - this.values.rgb[t];
                        return this.setValues("rgb", e), this
                    },
                    lighten: function (e) {
                        var t = this.values.hsl;
                        return t[2] += t[2] * e, this.setValues("hsl", t), this
                    },
                    darken: function (e) {
                        var t = this.values.hsl;
                        return t[2] -= t[2] * e, this.setValues("hsl", t), this
                    },
                    saturate: function (e) {
                        var t = this.values.hsl;
                        return t[1] += t[1] * e, this.setValues("hsl", t), this
                    },
                    desaturate: function (e) {
                        var t = this.values.hsl;
                        return t[1] -= t[1] * e, this.setValues("hsl", t), this
                    },
                    whiten: function (e) {
                        var t = this.values.hwb;
                        return t[1] += t[1] * e, this.setValues("hwb", t), this
                    },
                    blacken: function (e) {
                        var t = this.values.hwb;
                        return t[2] += t[2] * e, this.setValues("hwb", t), this
                    },
                    greyscale: function () {
                        var e = this.values.rgb,
                            t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                        return this.setValues("rgb", [t, t, t]), this
                    },
                    clearer: function (e) {
                        var t = this.values.alpha;
                        return this.setValues("alpha", t - t * e), this
                    },
                    opaquer: function (e) {
                        var t = this.values.alpha;
                        return this.setValues("alpha", t + t * e), this
                    },
                    rotate: function (e) {
                        var t = this.values.hsl,
                            i = (t[0] + e) % 360;
                        return t[0] = 0 > i ? 360 + i : i, this.setValues("hsl", t), this
                    },
                    mix: function (e, t) {
                        var i = this,
                            n = e,
                            r = void 0 === t ? .5 : t,
                            a = 2 * r - 1,
                            o = i.alpha() - n.alpha(),
                            s = ((a * o === -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
                            l = 1 - s;
                        return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * r + n.alpha() * (1 - r))
                    },
                    toJSON: function () {
                        return this.rgb()
                    },
                    clone: function () {
                        var e, t, i = new r,
                            n = this.values,
                            a = i.values;
                        for (var o in n) n.hasOwnProperty(o) && (e = n[o], t = {}.toString.call(e), "[object Array]" === t ? a[o] = e.slice(0) : "[object Number]" === t ? a[o] = e : console.error("unexpected color value:", e));
                        return i
                    }
                }, r.prototype.spaces = {
                    rgb: ["red", "green", "blue"],
                    hsl: ["hue", "saturation", "lightness"],
                    hsv: ["hue", "saturation", "value"],
                    hwb: ["hue", "whiteness", "blackness"],
                    cmyk: ["cyan", "magenta", "yellow", "black"]
                }, r.prototype.maxes = {
                    rgb: [255, 255, 255],
                    hsl: [360, 100, 100],
                    hsv: [360, 100, 100],
                    hwb: [360, 100, 100],
                    cmyk: [100, 100, 100, 100]
                }, r.prototype.getValues = function (e) {
                    for (var t = this.values, i = {}, n = 0; n < e.length; n++) i[e.charAt(n)] = t[e][n];
                    return 1 !== t.alpha && (i.a = t.alpha), i
                }, r.prototype.setValues = function (e, t) {
                    var n, r = this.values,
                        a = this.spaces,
                        o = this.maxes,
                        s = 1;
                    if ("alpha" === e) s = t;
                    else if (t.length) r[e] = t.slice(0, e.length), s = t[e.length];
                    else if (void 0 !== t[e.charAt(0)]) {
                        for (n = 0; n < e.length; n++) r[e][n] = t[e.charAt(n)];
                        s = t.a
                    } else if (void 0 !== t[a[e][0]]) {
                        var l = a[e];
                        for (n = 0; n < e.length; n++) r[e][n] = t[l[n]];
                        s = t.alpha
                    }
                    if (r.alpha = Math.max(0, Math.min(1, void 0 === s ? r.alpha : s)), "alpha" === e) return !1;
                    var u;
                    for (n = 0; n < e.length; n++) u = Math.max(0, Math.min(o[e][n], r[e][n])), r[e][n] = Math.round(u);
                    for (var c in a) c !== e && (r[c] = i[e][c](r[e]));
                    return !0
                }, r.prototype.setSpace = function (e, t) {
                    var i = t[0];
                    return void 0 === i ? this.getValues(e) : ("number" == typeof i && (i = Array.prototype.slice.call(t)), this.setValues(e, i), this)
                }, r.prototype.setChannel = function (e, t, i) {
                    var n = this.values[e];
                    return void 0 === i ? n[t] : i === n[t] ? this : (n[t] = i, this.setValues(e, n), this)
                }, "undefined" != typeof window && (window.Color = r), t.exports = r
            }, {
                1: 1,
                4: 4
            }],
            3: [function (e, t) {
                function i(e) {
                    var t, i, n, r = e[0] / 255,
                        a = e[1] / 255,
                        o = e[2] / 255,
                        s = Math.min(r, a, o),
                        l = Math.max(r, a, o),
                        u = l - s;
                    return l == s ? t = 0 : r == l ? t = (a - o) / u : a == l ? t = 2 + (o - r) / u : o == l && (t = 4 + (r - a) / u), t = Math.min(60 * t, 360), 0 > t && (t += 360), n = (s + l) / 2, i = l == s ? 0 : .5 >= n ? u / (l + s) : u / (2 - l - s), [t, 100 * i, 100 * n]
                }

                function n(e) {
                    var t, i, n, r = e[0],
                        a = e[1],
                        o = e[2],
                        s = Math.min(r, a, o),
                        l = Math.max(r, a, o),
                        u = l - s;
                    return i = 0 == l ? 0 : u / l * 1e3 / 10, l == s ? t = 0 : r == l ? t = (a - o) / u : a == l ? t = 2 + (o - r) / u : o == l && (t = 4 + (r - a) / u), t = Math.min(60 * t, 360), 0 > t && (t += 360), n = l / 255 * 1e3 / 10, [t, i, n]
                }

                function a(e) {
                    var t = e[0],
                        n = e[1],
                        r = e[2],
                        a = i(e)[0],
                        o = 1 / 255 * Math.min(t, Math.min(n, r)),
                        r = 1 - 1 / 255 * Math.max(t, Math.max(n, r));
                    return [a, 100 * o, 100 * r]
                }

                function o(e) {
                    var t, i, n, r, a = e[0] / 255,
                        o = e[1] / 255,
                        s = e[2] / 255;
                    return r = Math.min(1 - a, 1 - o, 1 - s), t = (1 - a - r) / (1 - r) || 0, i = (1 - o - r) / (1 - r) || 0, n = (1 - s - r) / (1 - r) || 0, [100 * t, 100 * i, 100 * n, 100 * r]
                }

                function s(e) {
                    return Z[JSON.stringify(e)]
                }

                function l(e) {
                    var t = e[0] / 255,
                        i = e[1] / 255,
                        n = e[2] / 255;
                    t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92;
                    var r = .4124 * t + .3576 * i + .1805 * n,
                        a = .2126 * t + .7152 * i + .0722 * n,
                        o = .0193 * t + .1192 * i + .9505 * n;
                    return [100 * r, 100 * a, 100 * o]
                }

                function u(e) {
                    var t, i, n, r = l(e),
                        a = r[0],
                        o = r[1],
                        s = r[2];
                    return a /= 95.047, o /= 100, s /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, t = 116 * o - 16, i = 500 * (a - o), n = 200 * (o - s), [t, i, n]
                }

                function c(e) {
                    return $(u(e))
                }

                function d(e) {
                    var t, i, n, r, a, o = e[0] / 360,
                        s = e[1] / 100,
                        l = e[2] / 100;
                    if (0 == s) return a = 255 * l, [a, a, a];
                    i = .5 > l ? l * (1 + s) : l + s - l * s, t = 2 * l - i, r = [0, 0, 0];
                    for (var u = 0; 3 > u; u++) n = o + 1 / 3 * -(u - 1), 0 > n && n++, n > 1 && n--, a = 1 > 6 * n ? t + 6 * (i - t) * n : 1 > 2 * n ? i : 2 > 3 * n ? t + (i - t) * (2 / 3 - n) * 6 : t, r[u] = 255 * a;
                    return r
                }

                function h(e) {
                    var t, i, n = e[0],
                        r = e[1] / 100,
                        a = e[2] / 100;
                    return 0 === a ? [0, 0, 0] : (a *= 2, r *= 1 >= a ? a : 2 - a, i = (a + r) / 2, t = 2 * r / (a + r), [n, 100 * t, 100 * i])
                }

                function f(e) {
                    return a(d(e))
                }

                function p(e) {
                    return o(d(e))
                }

                function m(e) {
                    return s(d(e))
                }

                function v(e) {
                    var t = e[0] / 60,
                        i = e[1] / 100,
                        n = e[2] / 100,
                        r = Math.floor(t) % 6,
                        a = t - Math.floor(t),
                        o = 255 * n * (1 - i),
                        s = 255 * n * (1 - i * a),
                        l = 255 * n * (1 - i * (1 - a)),
                        n = 255 * n;
                    switch (r) {
                        case 0:
                            return [n, l, o];
                        case 1:
                            return [s, n, o];
                        case 2:
                            return [o, n, l];
                        case 3:
                            return [o, s, n];
                        case 4:
                            return [l, o, n];
                        case 5:
                            return [n, o, s]
                    }
                }

                function y(e) {
                    var t, i, n = e[0],
                        r = e[1] / 100,
                        a = e[2] / 100;
                    return i = (2 - r) * a, t = r * a, t /= 1 >= i ? i : 2 - i, t = t || 0, i /= 2, [n, 100 * t, 100 * i]
                }

                function _(e) {
                    return a(v(e))
                }

                function x(e) {
                    return o(v(e))
                }

                function k(e) {
                    return s(v(e))
                }

                function w(e) {
                    var t, i, n, a, o = e[0] / 360,
                        s = e[1] / 100,
                        l = e[2] / 100,
                        u = s + l;
                    switch (u > 1 && (s /= u, l /= u), t = Math.floor(6 * o), i = 1 - l, n = 6 * o - t, 0 != (1 & t) && (n = 1 - n), a = s + n * (i - s), t) {
                        default:
                        case 6:
                        case 0:
                            r = i, g = a, b = s;
                            break;
                        case 1:
                            r = a, g = i, b = s;
                            break;
                        case 2:
                            r = s, g = i, b = a;
                            break;
                        case 3:
                            r = s, g = a, b = i;
                            break;
                        case 4:
                            r = a, g = s, b = i;
                            break;
                        case 5:
                            r = i, g = s, b = a
                    }
                    return [255 * r, 255 * g, 255 * b]
                }

                function S(e) {
                    return i(w(e))
                }

                function C(e) {
                    return n(w(e))
                }

                function T(e) {
                    return o(w(e))
                }

                function D(e) {
                    return s(w(e))
                }

                function M(e) {
                    var t, i, n, r = e[0] / 100,
                        a = e[1] / 100,
                        o = e[2] / 100,
                        s = e[3] / 100;
                    return t = 1 - Math.min(1, r * (1 - s) + s), i = 1 - Math.min(1, a * (1 - s) + s), n = 1 - Math.min(1, o * (1 - s) + s), [255 * t, 255 * i, 255 * n]
                }

                function A(e) {
                    return i(M(e))
                }

                function P(e) {
                    return n(M(e))
                }

                function I(e) {
                    return a(M(e))
                }

                function F(e) {
                    return s(M(e))
                }

                function E(e) {
                    var t, i, n, r = e[0] / 100,
                        a = e[1] / 100,
                        o = e[2] / 100;
                    return t = 3.2406 * r + -1.5372 * a + o * -.4986, i = r * -.9689 + 1.8758 * a + .0415 * o, n = .0557 * r + a * -.204 + 1.057 * o, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t = 12.92 * t, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n = 12.92 * n, t = Math.min(Math.max(0, t), 1), i = Math.min(Math.max(0, i), 1), n = Math.min(Math.max(0, n), 1), [255 * t, 255 * i, 255 * n]
                }

                function O(e) {
                    var t, i, n, r = e[0],
                        a = e[1],
                        o = e[2];
                    return r /= 95.047, a /= 100, o /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, t = 116 * a - 16, i = 500 * (r - a), n = 200 * (a - o), [t, i, n]
                }

                function N(e) {
                    return $(O(e))
                }

                function L(e) {
                    var t, i, n, r, a = e[0],
                        o = e[1],
                        s = e[2];
                    return 8 >= a ? (i = 100 * a / 903.3, r = 7.787 * (i / 100) + 16 / 116) : (i = 100 * Math.pow((a + 16) / 116, 3), r = Math.pow(i / 100, 1 / 3)), t = .008856 >= t / 95.047 ? t = 95.047 * (o / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + r, 3), n = .008859 >= n / 108.883 ? n = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3), [t, i, n]
                }

                function $(e) {
                    var t, i, n, r = e[0],
                        a = e[1],
                        o = e[2];
                    return t = Math.atan2(o, a), i = 360 * t / 2 / Math.PI, 0 > i && (i += 360), n = Math.sqrt(a * a + o * o), [r, n, i]
                }

                function R(e) {
                    return E(L(e))
                }

                function j(e) {
                    var t, i, n, r = e[0],
                        a = e[1],
                        o = e[2];
                    return n = o / 360 * 2 * Math.PI, t = a * Math.cos(n), i = a * Math.sin(n), [r, t, i]
                }

                function H(e) {
                    return L(j(e))
                }

                function W(e) {
                    return R(j(e))
                }

                function z(e) {
                    return G[e]
                }

                function V(e) {
                    return i(z(e))
                }

                function B(e) {
                    return n(z(e))
                }

                function Y(e) {
                    return a(z(e))
                }

                function q(e) {
                    return o(z(e))
                }

                function U(e) {
                    return u(z(e))
                }

                function X(e) {
                    return l(z(e))
                }
                t.exports = {
                    rgb2hsl: i,
                    rgb2hsv: n,
                    rgb2hwb: a,
                    rgb2cmyk: o,
                    rgb2keyword: s,
                    rgb2xyz: l,
                    rgb2lab: u,
                    rgb2lch: c,
                    hsl2rgb: d,
                    hsl2hsv: h,
                    hsl2hwb: f,
                    hsl2cmyk: p,
                    hsl2keyword: m,
                    hsv2rgb: v,
                    hsv2hsl: y,
                    hsv2hwb: _,
                    hsv2cmyk: x,
                    hsv2keyword: k,
                    hwb2rgb: w,
                    hwb2hsl: S,
                    hwb2hsv: C,
                    hwb2cmyk: T,
                    hwb2keyword: D,
                    cmyk2rgb: M,
                    cmyk2hsl: A,
                    cmyk2hsv: P,
                    cmyk2hwb: I,
                    cmyk2keyword: F,
                    keyword2rgb: z,
                    keyword2hsl: V,
                    keyword2hsv: B,
                    keyword2hwb: Y,
                    keyword2cmyk: q,
                    keyword2lab: U,
                    keyword2xyz: X,
                    xyz2rgb: E,
                    xyz2lab: O,
                    xyz2lch: N,
                    lab2xyz: L,
                    lab2rgb: R,
                    lab2lch: $,
                    lch2lab: j,
                    lch2xyz: H,
                    lch2rgb: W
                };
                var G = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    },
                    Z = {};
                for (var K in G) Z[JSON.stringify(G[K])] = K
            }, {}],
            4: [function (e, t) {
                var i = e(3),
                    n = function () {
                        return new l
                    };
                for (var r in i) {
                    n[r + "Raw"] = function (e) {
                        return function (t) {
                            return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), i[e](t)
                        }
                    }(r);
                    var a = /(\w+)2(\w+)/.exec(r),
                        o = a[1],
                        s = a[2];
                    n[o] = n[o] || {}, n[o][s] = n[r] = function (e) {
                        return function (t) {
                            "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                            var n = i[e](t);
                            if ("string" == typeof n || void 0 === n) return n;
                            for (var r = 0; r < n.length; r++) n[r] = Math.round(n[r]);
                            return n
                        }
                    }(r)
                }
                var l = function () {
                    this.convs = {}
                };
                l.prototype.routeSpace = function (e, t) {
                    var i = t[0];
                    return void 0 === i ? this.getValues(e) : ("number" == typeof i && (i = Array.prototype.slice.call(t)), this.setValues(e, i))
                }, l.prototype.setValues = function (e, t) {
                    return this.space = e, this.convs = {}, this.convs[e] = t, this
                }, l.prototype.getValues = function (e) {
                    var t = this.convs[e];
                    if (!t) {
                        var i = this.space,
                            r = this.convs[i];
                        t = n[i][e](r), this.convs[e] = t
                    }
                    return t
                }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (e) {
                    l.prototype[e] = function () {
                        return this.routeSpace(e, arguments)
                    }
                }), t.exports = n
            }, {
                3: 3
            }],
            5: [function (e, t) {
                t.exports = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                }
            }, {}],
            6: [function (t, i, n) {
                ! function (t, r) {
                    "object" == typeof n && "undefined" != typeof i ? i.exports = r() : "function" == typeof e && e.amd ? e(r) : t.moment = r()
                }(this, function () {
                    "use strict";

                    function e() {
                        return vr.apply(null, arguments)
                    }

                    function n(e) {
                        vr = e
                    }

                    function r(e) {
                        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                    }

                    function a(e) {
                        return null != e && "[object Object]" === Object.prototype.toString.call(e)
                    }

                    function o(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    }

                    function s(e) {
                        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                    }

                    function l(e) {
                        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                    }

                    function u(e, t) {
                        var i, n = [];
                        for (i = 0; i < e.length; ++i) n.push(t(e[i], i));
                        return n
                    }

                    function c(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }

                    function d(e, t) {
                        for (var i in t) c(t, i) && (e[i] = t[i]);
                        return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e
                    }

                    function h(e, t, i, n) {
                        return bi(e, t, i, n, !0).utc()
                    }

                    function f() {
                        return {
                            empty: !1,
                            unusedTokens: [],
                            unusedInput: [],
                            overflow: -2,
                            charsLeftOver: 0,
                            nullInput: !1,
                            invalidMonth: null,
                            invalidFormat: !1,
                            userInvalidated: !1,
                            iso: !1,
                            parsedDateParts: [],
                            meridiem: null
                        }
                    }

                    function p(e) {
                        return null == e._pf && (e._pf = f()), e._pf
                    }

                    function g(e) {
                        if (null == e._isValid) {
                            var t = p(e),
                                i = br.call(t.parsedDateParts, function (e) {
                                    return null != e
                                }),
                                n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && i);
                            if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                            e._isValid = n
                        }
                        return e._isValid
                    }

                    function m(e) {
                        var t = h(0 / 0);
                        return null != e ? d(p(t), e) : p(t).userInvalidated = !0, t
                    }

                    function v(e) {
                        return void 0 === e
                    }

                    function y(e, t) {
                        var i, n, r;
                        if (v(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), v(t._i) || (e._i = t._i), v(t._f) || (e._f = t._f), v(t._l) || (e._l = t._l), v(t._strict) || (e._strict = t._strict), v(t._tzm) || (e._tzm = t._tzm), v(t._isUTC) || (e._isUTC = t._isUTC), v(t._offset) || (e._offset = t._offset), v(t._pf) || (e._pf = p(t)), v(t._locale) || (e._locale = t._locale), _r.length > 0)
                            for (i in _r) n = _r[i], r = t[n], v(r) || (e[n] = r);
                        return e
                    }

                    function b(t) {
                        y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : 0 / 0), this.isValid() || (this._d = new Date(0 / 0)), xr === !1 && (xr = !0, e.updateOffset(this), xr = !1)
                    }

                    function _(e) {
                        return e instanceof b || null != e && null != e._isAMomentObject
                    }

                    function x(e) {
                        return 0 > e ? Math.ceil(e) || 0 : Math.floor(e)
                    }

                    function k(e) {
                        var t = +e,
                            i = 0;
                        return 0 !== t && isFinite(t) && (i = x(t)), i
                    }

                    function w(e, t, i) {
                        var n, r = Math.min(e.length, t.length),
                            a = Math.abs(e.length - t.length),
                            o = 0;
                        for (n = 0; r > n; n++)(i && e[n] !== t[n] || !i && k(e[n]) !== k(t[n])) && o++;
                        return o + a
                    }

                    function S(t) {
                        e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
                    }

                    function C(t, i) {
                        var n = !0;
                        return d(function () {
                            if (null != e.deprecationHandler && e.deprecationHandler(null, t), n) {
                                for (var r, a = [], o = 0; o < arguments.length; o++) {
                                    if (r = "", "object" == typeof arguments[o]) {
                                        r += "\n[" + o + "] ";
                                        for (var s in arguments[0]) r += s + ": " + arguments[0][s] + ", ";
                                        r = r.slice(0, -2)
                                    } else r = arguments[o];
                                    a.push(r)
                                }
                                S(t + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), n = !1
                            }
                            return i.apply(this, arguments)
                        }, i)
                    }

                    function T(t, i) {
                        null != e.deprecationHandler && e.deprecationHandler(t, i), kr[t] || (S(i), kr[t] = !0)
                    }

                    function D(e) {
                        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                    }

                    function M(e) {
                        var t, i;
                        for (i in e) t = e[i], D(t) ? this[i] = t : this["_" + i] = t;
                        this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
                    }

                    function A(e, t) {
                        var i, n = d({}, e);
                        for (i in t) c(t, i) && (a(e[i]) && a(t[i]) ? (n[i] = {}, d(n[i], e[i]), d(n[i], t[i])) : null != t[i] ? n[i] = t[i] : delete n[i]);
                        for (i in e) c(e, i) && !c(t, i) && a(e[i]) && (n[i] = d({}, n[i]));
                        return n
                    }

                    function P(e) {
                        null != e && this.set(e)
                    }

                    function I(e, t, i) {
                        var n = this._calendar[e] || this._calendar.sameElse;
                        return D(n) ? n.call(t, i) : n
                    }

                    function F(e) {
                        var t = this._longDateFormat[e],
                            i = this._longDateFormat[e.toUpperCase()];
                        return t || !i ? t : (this._longDateFormat[e] = i.replace(/MMMM|MM|DD|dddd/g, function (e) {
                            return e.slice(1)
                        }), this._longDateFormat[e])
                    }

                    function E() {
                        return this._invalidDate
                    }

                    function O(e) {
                        return this._ordinal.replace("%d", e)
                    }

                    function N(e, t, i, n) {
                        var r = this._relativeTime[i];
                        return D(r) ? r(e, t, i, n) : r.replace(/%d/i, e)
                    }

                    function L(e, t) {
                        var i = this._relativeTime[e > 0 ? "future" : "past"];
                        return D(i) ? i(t) : i.replace(/%s/i, t)
                    }

                    function $(e, t) {
                        var i = e.toLowerCase();
                        Fr[i] = Fr[i + "s"] = Fr[t] = e
                    }

                    function R(e) {
                        return "string" == typeof e ? Fr[e] || Fr[e.toLowerCase()] : void 0
                    }

                    function j(e) {
                        var t, i, n = {};
                        for (i in e) c(e, i) && (t = R(i), t && (n[t] = e[i]));
                        return n
                    }

                    function H(e, t) {
                        Er[e] = t
                    }

                    function W(e) {
                        var t = [];
                        for (var i in e) t.push({
                            unit: i,
                            priority: Er[i]
                        });
                        return t.sort(function (e, t) {
                            return e.priority - t.priority
                        }), t
                    }

                    function z(t, i) {
                        return function (n) {
                            return null != n ? (B(this, t, n), e.updateOffset(this, i), this) : V(this, t)
                        }
                    }

                    function V(e, t) {
                        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : 0 / 0
                    }

                    function B(e, t, i) {
                        e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](i)
                    }

                    function Y(e) {
                        return e = R(e), D(this[e]) ? this[e]() : this
                    }

                    function q(e, t) {
                        if ("object" == typeof e) {
                            e = j(e);
                            for (var i = W(e), n = 0; n < i.length; n++) this[i[n].unit](e[i[n].unit])
                        } else if (e = R(e), D(this[e])) return this[e](t);
                        return this
                    }

                    function U(e, t, i) {
                        var n = "" + Math.abs(e),
                            r = t - n.length,
                            a = e >= 0;
                        return (a ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
                    }

                    function X(e, t, i, n) {
                        var r = n;
                        "string" == typeof n && (r = function () {
                            return this[n]()
                        }), e && ($r[e] = r), t && ($r[t[0]] = function () {
                            return U(r.apply(this, arguments), t[1], t[2])
                        }), i && ($r[i] = function () {
                            return this.localeData().ordinal(r.apply(this, arguments), e)
                        })
                    }

                    function G(e) {
                        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
                    }

                    function Z(e) {
                        var t, i, n = e.match(Or);
                        for (t = 0, i = n.length; i > t; t++) n[t] = $r[n[t]] ? $r[n[t]] : G(n[t]);
                        return function (t) {
                            var r, a = "";
                            for (r = 0; i > r; r++) a += n[r] instanceof Function ? n[r].call(t, e) : n[r];
                            return a
                        }
                    }

                    function K(e, t) {
                        return e.isValid() ? (t = Q(t, e.localeData()), Lr[t] = Lr[t] || Z(t), Lr[t](e)) : e.localeData().invalidDate()
                    }

                    function Q(e, t) {
                        function i(e) {
                            return t.longDateFormat(e) || e
                        }
                        var n = 5;
                        for (Nr.lastIndex = 0; n >= 0 && Nr.test(e);) e = e.replace(Nr, i), Nr.lastIndex = 0, n -= 1;
                        return e
                    }

                    function J(e, t, i) {
                        ta[e] = D(t) ? t : function (e) {
                            return e && i ? i : t
                        }
                    }

                    function et(e, t) {
                        return c(ta, e) ? ta[e](t._strict, t._locale) : new RegExp(tt(e))
                    }

                    function tt(e) {
                        return it(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, i, n, r) {
                            return t || i || n || r
                        }))
                    }

                    function it(e) {
                        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                    }

                    function nt(e, t) {
                        var i, n = t;
                        for ("string" == typeof e && (e = [e]), s(t) && (n = function (e, i) {
                                i[t] = k(e)
                            }), i = 0; i < e.length; i++) ia[e[i]] = n
                    }

                    function rt(e, t) {
                        nt(e, function (e, i, n, r) {
                            n._w = n._w || {}, t(e, n._w, n, r)
                        })
                    }

                    function at(e, t, i) {
                        null != t && c(ia, e) && ia[e](t, i._a, i, e)
                    }

                    function ot(e, t) {
                        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                    }

                    function st(e, t) {
                        return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || fa).test(t) ? "format" : "standalone"][e.month()] : this._months
                    }

                    function lt(e, t) {
                        return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[fa.test(t) ? "format" : "standalone"][e.month()] : this._monthsShort
                    }

                    function ut(e, t, i) {
                        var n, r, a, o = e.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; 12 > n; ++n) a = h([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
                        return i ? "MMM" === t ? (r = ha.call(this._shortMonthsParse, o), -1 !== r ? r : null) : (r = ha.call(this._longMonthsParse, o), -1 !== r ? r : null) : "MMM" === t ? (r = ha.call(this._shortMonthsParse, o), -1 !== r ? r : (r = ha.call(this._longMonthsParse, o), -1 !== r ? r : null)) : (r = ha.call(this._longMonthsParse, o), -1 !== r ? r : (r = ha.call(this._shortMonthsParse, o), -1 !== r ? r : null))
                    }

                    function ct(e, t, i) {
                        var n, r, a;
                        if (this._monthsParseExact) return ut.call(this, e, t, i);
                        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; 12 > n; n++) {
                            if (r = h([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (a = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(a.replace(".", ""), "i")), i && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                            if (i && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                            if (!i && this._monthsParse[n].test(e)) return n
                        }
                    }

                    function dt(e, t) {
                        var i;
                        if (!e.isValid()) return e;
                        if ("string" == typeof t)
                            if (/^\d+$/.test(t)) t = k(t);
                            else if (t = e.localeData().monthsParse(t), !s(t)) return e;
                        return i = Math.min(e.date(), ot(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, i), e
                    }

                    function ht(t) {
                        return null != t ? (dt(this, t), e.updateOffset(this, !0), this) : V(this, "Month")
                    }

                    function ft() {
                        return ot(this.year(), this.month())
                    }

                    function pt(e) {
                        return this._monthsParseExact ? (c(this, "_monthsRegex") || mt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = ma), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                    }

                    function gt(e) {
                        return this._monthsParseExact ? (c(this, "_monthsRegex") || mt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = va), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                    }

                    function mt() {
                        function e(e, t) {
                            return t.length - e.length
                        }
                        var t, i, n = [],
                            r = [],
                            a = [];
                        for (t = 0; 12 > t; t++) i = h([2e3, t]), n.push(this.monthsShort(i, "")), r.push(this.months(i, "")), a.push(this.months(i, "")), a.push(this.monthsShort(i, ""));
                        for (n.sort(e), r.sort(e), a.sort(e), t = 0; 12 > t; t++) n[t] = it(n[t]), r[t] = it(r[t]);
                        for (t = 0; 24 > t; t++) a[t] = it(a[t]);
                        this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                    }

                    function vt(e) {
                        return yt(e) ? 366 : 365
                    }

                    function yt(e) {
                        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
                    }

                    function bt() {
                        return yt(this.year())
                    }

                    function _t(e, t, i, n, r, a, o) {
                        var s = new Date(e, t, i, n, r, a, o);
                        return 100 > e && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e), s
                    }

                    function xt(e) {
                        var t = new Date(Date.UTC.apply(null, arguments));
                        return 100 > e && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
                    }

                    function kt(e, t, i) {
                        var n = 7 + t - i,
                            r = (7 + xt(e, 0, n).getUTCDay() - t) % 7;
                        return -r + n - 1
                    }

                    function wt(e, t, i, n, r) {
                        var a, o, s = (7 + i - n) % 7,
                            l = kt(e, n, r),
                            u = 1 + 7 * (t - 1) + s + l;
                        return 0 >= u ? (a = e - 1, o = vt(a) + u) : u > vt(e) ? (a = e + 1, o = u - vt(e)) : (a = e, o = u), {
                            year: a,
                            dayOfYear: o
                        }
                    }

                    function St(e, t, i) {
                        var n, r, a = kt(e.year(), t, i),
                            o = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
                        return 1 > o ? (r = e.year() - 1, n = o + Ct(r, t, i)) : o > Ct(e.year(), t, i) ? (n = o - Ct(e.year(), t, i), r = e.year() + 1) : (r = e.year(), n = o), {
                            week: n,
                            year: r
                        }
                    }

                    function Ct(e, t, i) {
                        var n = kt(e, t, i),
                            r = kt(e + 1, t, i);
                        return (vt(e) - n + r) / 7
                    }

                    function Tt(e) {
                        return St(e, this._week.dow, this._week.doy).week
                    }

                    function Dt() {
                        return this._week.dow
                    }

                    function Mt() {
                        return this._week.doy
                    }

                    function At(e) {
                        var t = this.localeData().week(this);
                        return null == e ? t : this.add(7 * (e - t), "d")
                    }

                    function Pt(e) {
                        var t = St(this, 1, 4).week;
                        return null == e ? t : this.add(7 * (e - t), "d")
                    }

                    function It(e, t) {
                        return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
                    }

                    function Ft(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }

                    function Et(e, t) {
                        return e ? r(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : this._weekdays
                    }

                    function Ot(e) {
                        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                    }

                    function Nt(e) {
                        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                    }

                    function Lt(e, t, i) {
                        var n, r, a, o = e.toLocaleLowerCase();
                        if (!this._weekdaysParse)
                            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; 7 > n; ++n) a = h([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
                        return i ? "dddd" === t ? (r = ha.call(this._weekdaysParse, o), -1 !== r ? r : null) : "ddd" === t ? (r = ha.call(this._shortWeekdaysParse, o), -1 !== r ? r : null) : (r = ha.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : "dddd" === t ? (r = ha.call(this._weekdaysParse, o), -1 !== r ? r : (r = ha.call(this._shortWeekdaysParse, o), -1 !== r ? r : (r = ha.call(this._minWeekdaysParse, o), -1 !== r ? r : null))) : "ddd" === t ? (r = ha.call(this._shortWeekdaysParse, o), -1 !== r ? r : (r = ha.call(this._weekdaysParse, o), -1 !== r ? r : (r = ha.call(this._minWeekdaysParse, o), -1 !== r ? r : null))) : (r = ha.call(this._minWeekdaysParse, o), -1 !== r ? r : (r = ha.call(this._weekdaysParse, o), -1 !== r ? r : (r = ha.call(this._shortWeekdaysParse, o), -1 !== r ? r : null)))
                    }

                    function $t(e, t, i) {
                        var n, r, a;
                        if (this._weekdaysParseExact) return Lt.call(this, e, t, i);
                        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; 7 > n; n++) {
                            if (r = h([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (a = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i")), i && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                            if (i && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                            if (i && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                            if (!i && this._weekdaysParse[n].test(e)) return n
                        }
                    }

                    function Rt(e) {
                        if (!this.isValid()) return null != e ? this : 0 / 0;
                        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                        return null != e ? (e = It(e, this.localeData()), this.add(e - t, "d")) : t
                    }

                    function jt(e) {
                        if (!this.isValid()) return null != e ? this : 0 / 0;
                        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                        return null == e ? t : this.add(e - t, "d")
                    }

                    function Ht(e) {
                        if (!this.isValid()) return null != e ? this : 0 / 0;
                        if (null != e) {
                            var t = Ft(e, this.localeData());
                            return this.day(this.day() % 7 ? t : t - 7)
                        }
                        return this.day() || 7
                    }

                    function Wt(e) {
                        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Bt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = wa), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                    }

                    function zt(e) {
                        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Bt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Sa), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                    }

                    function Vt(e) {
                        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Bt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ca), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                    }

                    function Bt() {
                        function e(e, t) {
                            return t.length - e.length
                        }
                        var t, i, n, r, a, o = [],
                            s = [],
                            l = [],
                            u = [];
                        for (t = 0; 7 > t; t++) i = h([2e3, 1]).day(t), n = this.weekdaysMin(i, ""), r = this.weekdaysShort(i, ""), a = this.weekdays(i, ""), o.push(n), s.push(r), l.push(a), u.push(n), u.push(r), u.push(a);
                        for (o.sort(e), s.sort(e), l.sort(e), u.sort(e), t = 0; 7 > t; t++) s[t] = it(s[t]), l[t] = it(l[t]), u[t] = it(u[t]);
                        this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
                    }

                    function Yt() {
                        return this.hours() % 12 || 12
                    }

                    function qt() {
                        return this.hours() || 24
                    }

                    function Ut(e, t) {
                        X(e, 0, 0, function () {
                            return this.localeData().meridiem(this.hours(), this.minutes(), t)
                        })
                    }

                    function Xt(e, t) {
                        return t._meridiemParse
                    }

                    function Gt(e) {
                        return "p" === (e + "").toLowerCase().charAt(0)
                    }

                    function Zt(e, t, i) {
                        return e > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
                    }

                    function Kt(e) {
                        return e ? e.toLowerCase().replace("_", "-") : e
                    }

                    function Qt(e) {
                        for (var t, i, n, r, a = 0; a < e.length;) {
                            for (r = Kt(e[a]).split("-"), t = r.length, i = Kt(e[a + 1]), i = i ? i.split("-") : null; t > 0;) {
                                if (n = Jt(r.slice(0, t).join("-"))) return n;
                                if (i && i.length >= t && w(r, i, !0) >= t - 1) break;
                                t--
                            }
                            a++
                        }
                        return null
                    }

                    function Jt(e) {
                        var n = null;
                        if (!Pa[e] && "undefined" != typeof i && i && i.exports) try {
                            n = Ta._abbr, t("./locale/" + e), ei(n)
                        } catch (r) {}
                        return Pa[e]
                    }

                    function ei(e, t) {
                        var i;
                        return e && (i = v(t) ? ni(e) : ti(e, t), i && (Ta = i)), Ta._abbr
                    }

                    function ti(e, t) {
                        if (null !== t) {
                            var i = Aa;
                            if (t.abbr = e, null != Pa[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = Pa[e]._config;
                            else if (null != t.parentLocale) {
                                if (null == Pa[t.parentLocale]) return Ia[t.parentLocale] || (Ia[t.parentLocale] = []), Ia[t.parentLocale].push({
                                    name: e,
                                    config: t
                                }), null;
                                i = Pa[t.parentLocale]._config
                            }
                            return Pa[e] = new P(A(i, t)), Ia[e] && Ia[e].forEach(function (e) {
                                ti(e.name, e.config)
                            }), ei(e), Pa[e]
                        }
                        return delete Pa[e], null
                    }

                    function ii(e, t) {
                        if (null != t) {
                            var i, n = Aa;
                            null != Pa[e] && (n = Pa[e]._config), t = A(n, t), i = new P(t), i.parentLocale = Pa[e], Pa[e] = i, ei(e)
                        } else null != Pa[e] && (null != Pa[e].parentLocale ? Pa[e] = Pa[e].parentLocale : null != Pa[e] && delete Pa[e]);
                        return Pa[e]
                    }

                    function ni(e) {
                        var t;
                        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ta;
                        if (!r(e)) {
                            if (t = Jt(e)) return t;
                            e = [e]
                        }
                        return Qt(e)
                    }

                    function ri() {
                        return Cr(Pa)
                    }

                    function ai(e) {
                        var t, i = e._a;
                        return i && -2 === p(e).overflow && (t = i[ra] < 0 || i[ra] > 11 ? ra : i[aa] < 1 || i[aa] > ot(i[na], i[ra]) ? aa : i[oa] < 0 || i[oa] > 24 || 24 === i[oa] && (0 !== i[sa] || 0 !== i[la] || 0 !== i[ua]) ? oa : i[sa] < 0 || i[sa] > 59 ? sa : i[la] < 0 || i[la] > 59 ? la : i[ua] < 0 || i[ua] > 999 ? ua : -1, p(e)._overflowDayOfYear && (na > t || t > aa) && (t = aa), p(e)._overflowWeeks && -1 === t && (t = ca), p(e)._overflowWeekday && -1 === t && (t = da), p(e).overflow = t), e
                    }

                    function oi(e) {
                        var t, i, n, r, a, o, s = e._i,
                            l = Fa.exec(s) || Ea.exec(s);
                        if (l) {
                            for (p(e).iso = !0, t = 0, i = Na.length; i > t; t++)
                                if (Na[t][1].exec(l[1])) {
                                    r = Na[t][0], n = Na[t][2] !== !1;
                                    break
                                } if (null == r) return void(e._isValid = !1);
                            if (l[3]) {
                                for (t = 0, i = La.length; i > t; t++)
                                    if (La[t][1].exec(l[3])) {
                                        a = (l[2] || " ") + La[t][0];
                                        break
                                    } if (null == a) return void(e._isValid = !1)
                            }
                            if (!n && null != a) return void(e._isValid = !1);
                            if (l[4]) {
                                if (!Oa.exec(l[4])) return void(e._isValid = !1);
                                o = "Z"
                            }
                            e._f = r + (a || "") + (o || ""), hi(e)
                        } else e._isValid = !1
                    }

                    function si(t) {
                        var i = $a.exec(t._i);
                        return null !== i ? void(t._d = new Date(+i[1])) : (oi(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
                    }

                    function li(e, t, i) {
                        return null != e ? e : null != t ? t : i
                    }

                    function ui(t) {
                        var i = new Date(e.now());
                        return t._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
                    }

                    function ci(e) {
                        var t, i, n, r, a = [];
                        if (!e._d) {
                            for (n = ui(e), e._w && null == e._a[aa] && null == e._a[ra] && di(e), e._dayOfYear && (r = li(e._a[na], n[na]), e._dayOfYear > vt(r) && (p(e)._overflowDayOfYear = !0), i = xt(r, 0, e._dayOfYear), e._a[ra] = i.getUTCMonth(), e._a[aa] = i.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = a[t] = n[t];
                            for (; 7 > t; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                            24 === e._a[oa] && 0 === e._a[sa] && 0 === e._a[la] && 0 === e._a[ua] && (e._nextDay = !0, e._a[oa] = 0), e._d = (e._useUTC ? xt : _t).apply(null, a), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[oa] = 24)
                        }
                    }

                    function di(e) {
                        var t, i, n, r, a, o, s, l;
                        if (t = e._w, null != t.GG || null != t.W || null != t.E) a = 1, o = 4, i = li(t.GG, e._a[na], St(_i(), 1, 4).year), n = li(t.W, 1), r = li(t.E, 1), (1 > r || r > 7) && (l = !0);
                        else {
                            a = e._locale._week.dow, o = e._locale._week.doy;
                            var u = St(_i(), a, o);
                            i = li(t.gg, e._a[na], u.year), n = li(t.w, u.week), null != t.d ? (r = t.d, (0 > r || r > 6) && (l = !0)) : null != t.e ? (r = t.e + a, (t.e < 0 || t.e > 6) && (l = !0)) : r = a
                        }
                        1 > n || n > Ct(i, a, o) ? p(e)._overflowWeeks = !0 : null != l ? p(e)._overflowWeekday = !0 : (s = wt(i, n, r, a, o), e._a[na] = s.year, e._dayOfYear = s.dayOfYear)
                    }

                    function hi(t) {
                        if (t._f === e.ISO_8601) return void oi(t);
                        t._a = [], p(t).empty = !0;
                        var i, n, r, a, o, s = "" + t._i,
                            l = s.length,
                            u = 0;
                        for (r = Q(t._f, t._locale).match(Or) || [], i = 0; i < r.length; i++) a = r[i], n = (s.match(et(a, t)) || [])[0], n && (o = s.substr(0, s.indexOf(n)), o.length > 0 && p(t).unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), u += n.length), $r[a] ? (n ? p(t).empty = !1 : p(t).unusedTokens.push(a), at(a, n, t)) : t._strict && !n && p(t).unusedTokens.push(a);
                        p(t).charsLeftOver = l - u, s.length > 0 && p(t).unusedInput.push(s), t._a[oa] <= 12 && p(t).bigHour === !0 && t._a[oa] > 0 && (p(t).bigHour = void 0), p(t).parsedDateParts = t._a.slice(0), p(t).meridiem = t._meridiem, t._a[oa] = fi(t._locale, t._a[oa], t._meridiem), ci(t), ai(t)
                    }

                    function fi(e, t, i) {
                        var n;
                        return null == i ? t : null != e.meridiemHour ? e.meridiemHour(t, i) : null != e.isPM ? (n = e.isPM(i), n && 12 > t && (t += 12), n || 12 !== t || (t = 0), t) : t
                    }

                    function pi(e) {
                        var t, i, n, r, a;
                        if (0 === e._f.length) return p(e).invalidFormat = !0, void(e._d = new Date(0 / 0));
                        for (r = 0; r < e._f.length; r++) a = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], hi(t), g(t) && (a += p(t).charsLeftOver, a += 10 * p(t).unusedTokens.length, p(t).score = a, (null == n || n > a) && (n = a, i = t));
                        d(e, i || t)
                    }

                    function gi(e) {
                        if (!e._d) {
                            var t = j(e._i);
                            e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                                return e && parseInt(e, 10)
                            }), ci(e)
                        }
                    }

                    function mi(e) {
                        var t = new b(ai(vi(e)));
                        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                    }

                    function vi(e) {
                        var t = e._i,
                            i = e._f;
                        return e._locale = e._locale || ni(e._l), null === t || void 0 === i && "" === t ? m({
                            nullInput: !0
                        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), _(t) ? new b(ai(t)) : (l(t) ? e._d = t : r(i) ? pi(e) : i ? hi(e) : yi(e), g(e) || (e._d = null), e))
                    }

                    function yi(t) {
                        var i = t._i;
                        void 0 === i ? t._d = new Date(e.now()) : l(i) ? t._d = new Date(i.valueOf()) : "string" == typeof i ? si(t) : r(i) ? (t._a = u(i.slice(0), function (e) {
                            return parseInt(e, 10)
                        }), ci(t)) : "object" == typeof i ? gi(t) : s(i) ? t._d = new Date(i) : e.createFromInputFallback(t)
                    }

                    function bi(e, t, i, n, s) {
                        var l = {};
                        return (i === !0 || i === !1) && (n = i, i = void 0), (a(e) && o(e) || r(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = i, l._i = e, l._f = t, l._strict = n, mi(l)
                    }

                    function _i(e, t, i, n) {
                        return bi(e, t, i, n, !1)
                    }

                    function xi(e, t) {
                        var i, n;
                        if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return _i();
                        for (i = t[0], n = 1; n < t.length; ++n)(!t[n].isValid() || t[n][e](i)) && (i = t[n]);
                        return i
                    }

                    function ki() {
                        var e = [].slice.call(arguments, 0);
                        return xi("isBefore", e)
                    }

                    function wi() {
                        var e = [].slice.call(arguments, 0);
                        return xi("isAfter", e)
                    }

                    function Si(e) {
                        var t = j(e),
                            i = t.year || 0,
                            n = t.quarter || 0,
                            r = t.month || 0,
                            a = t.week || 0,
                            o = t.day || 0,
                            s = t.hour || 0,
                            l = t.minute || 0,
                            u = t.second || 0,
                            c = t.millisecond || 0;
                        this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * a, this._months = +r + 3 * n + 12 * i, this._data = {}, this._locale = ni(), this._bubble()
                    }

                    function Ci(e) {
                        return e instanceof Si
                    }

                    function Ti(e) {
                        return 0 > e ? -1 * Math.round(-1 * e) : Math.round(e)
                    }

                    function Di(e, t) {
                        X(e, 0, 0, function () {
                            var e = this.utcOffset(),
                                i = "+";
                            return 0 > e && (e = -e, i = "-"), i + U(~~(e / 60), 2) + t + U(~~e % 60, 2)
                        })
                    }

                    function Mi(e, t) {
                        var i = (t || "").match(e);
                        if (null === i) return null;
                        var n = i[i.length - 1] || [],
                            r = (n + "").match(Wa) || ["-", 0, 0],
                            a = +(60 * r[1]) + k(r[2]);
                        return 0 === a ? 0 : "+" === r[0] ? a : -a
                    }

                    function Ai(t, i) {
                        var n, r;
                        return i._isUTC ? (n = i.clone(), r = (_(t) || l(t) ? t.valueOf() : _i(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), e.updateOffset(n, !1), n) : _i(t).local()
                    }

                    function Pi(e) {
                        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                    }

                    function Ii(t, i) {
                        var n, r = this._offset || 0;
                        if (!this.isValid()) return null != t ? this : 0 / 0;
                        if (null != t) {
                            if ("string" == typeof t) {
                                if (t = Mi(Qr, t), null === t) return this
                            } else Math.abs(t) < 16 && (t = 60 * t);
                            return !this._isUTC && i && (n = Pi(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), r !== t && (!i || this._changeInProgress ? Ui(this, zi(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this
                        }
                        return this._isUTC ? r : Pi(this)
                    }

                    function Fi(e, t) {
                        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                    }

                    function Ei(e) {
                        return this.utcOffset(0, e)
                    }

                    function Oi(e) {
                        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Pi(this), "m")), this
                    }

                    function Ni() {
                        if (null != this._tzm) this.utcOffset(this._tzm);
                        else if ("string" == typeof this._i) {
                            var e = Mi(Kr, this._i);
                            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                        }
                        return this
                    }

                    function Li(e) {
                        return this.isValid() ? (e = e ? _i(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
                    }

                    function $i() {
                        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                    }

                    function Ri() {
                        if (!v(this._isDSTShifted)) return this._isDSTShifted;
                        var e = {};
                        if (y(e, this), e = vi(e), e._a) {
                            var t = e._isUTC ? h(e._a) : _i(e._a);
                            this._isDSTShifted = this.isValid() && w(e._a, t.toArray()) > 0
                        } else this._isDSTShifted = !1;
                        return this._isDSTShifted
                    }

                    function ji() {
                        return this.isValid() ? !this._isUTC : !1
                    }

                    function Hi() {
                        return this.isValid() ? this._isUTC : !1
                    }

                    function Wi() {
                        return this.isValid() ? this._isUTC && 0 === this._offset : !1
                    }

                    function zi(e, t) {
                        var i, n, r, a = e,
                            o = null;
                        return Ci(e) ? a = {
                            ms: e._milliseconds,
                            d: e._days,
                            M: e._months
                        } : s(e) ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (o = za.exec(e)) ? (i = "-" === o[1] ? -1 : 1, a = {
                            y: 0,
                            d: k(o[aa]) * i,
                            h: k(o[oa]) * i,
                            m: k(o[sa]) * i,
                            s: k(o[la]) * i,
                            ms: k(Ti(1e3 * o[ua])) * i
                        }) : (o = Va.exec(e)) ? (i = "-" === o[1] ? -1 : 1, a = {
                            y: Vi(o[2], i),
                            M: Vi(o[3], i),
                            w: Vi(o[4], i),
                            d: Vi(o[5], i),
                            h: Vi(o[6], i),
                            m: Vi(o[7], i),
                            s: Vi(o[8], i)
                        }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (r = Yi(_i(a.from), _i(a.to)), a = {}, a.ms = r.milliseconds, a.M = r.months), n = new Si(a), Ci(e) && c(e, "_locale") && (n._locale = e._locale), n
                    }

                    function Vi(e, t) {
                        var i = e && parseFloat(e.replace(",", "."));
                        return (isNaN(i) ? 0 : i) * t
                    }

                    function Bi(e, t) {
                        var i = {
                            milliseconds: 0,
                            months: 0
                        };
                        return i.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +e.clone().add(i.months, "M"), i
                    }

                    function Yi(e, t) {
                        var i;
                        return e.isValid() && t.isValid() ? (t = Ai(t, e), e.isBefore(t) ? i = Bi(e, t) : (i = Bi(t, e), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
                            milliseconds: 0,
                            months: 0
                        }
                    }

                    function qi(e, t) {
                        return function (i, n) {
                            var r, a;
                            return null === n || isNaN(+n) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = i, i = n, n = a), i = "string" == typeof i ? +i : i, r = zi(i, n), Ui(this, r, e), this
                        }
                    }

                    function Ui(t, i, n, r) {
                        var a = i._milliseconds,
                            o = Ti(i._days),
                            s = Ti(i._months);
                        t.isValid() && (r = null == r ? !0 : r, a && t._d.setTime(t._d.valueOf() + a * n), o && B(t, "Date", V(t, "Date") + o * n), s && dt(t, V(t, "Month") + s * n), r && e.updateOffset(t, o || s))
                    }

                    function Xi(e, t) {
                        var i = e.diff(t, "days", !0);
                        return -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse"
                    }

                    function Gi(t, i) {
                        var n = t || _i(),
                            r = Ai(n, this).startOf("day"),
                            a = e.calendarFormat(this, r) || "sameElse",
                            o = i && (D(i[a]) ? i[a].call(this, n) : i[a]);
                        return this.format(o || this.localeData().calendar(a, this, _i(n)))
                    }

                    function Zi() {
                        return new b(this)
                    }

                    function Ki(e, t) {
                        var i = _(e) ? e : _i(e);
                        return this.isValid() && i.isValid() ? (t = R(v(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(t).valueOf()) : !1
                    }

                    function Qi(e, t) {
                        var i = _(e) ? e : _i(e);
                        return this.isValid() && i.isValid() ? (t = R(v(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < i.valueOf() : this.clone().endOf(t).valueOf() < i.valueOf()) : !1
                    }

                    function Ji(e, t, i, n) {
                        return n = n || "()", ("(" === n[0] ? this.isAfter(e, i) : !this.isBefore(e, i)) && (")" === n[1] ? this.isBefore(t, i) : !this.isAfter(t, i))
                    }

                    function en(e, t) {
                        var i, n = _(e) ? e : _i(e);
                        return this.isValid() && n.isValid() ? (t = R(t || "millisecond"), "millisecond" === t ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(t).valueOf() <= i && i <= this.clone().endOf(t).valueOf())) : !1
                    }

                    function tn(e, t) {
                        return this.isSame(e, t) || this.isAfter(e, t)
                    }

                    function nn(e, t) {
                        return this.isSame(e, t) || this.isBefore(e, t)
                    }

                    function rn(e, t, i) {
                        var n, r, a, o;
                        return this.isValid() ? (n = Ai(e, this), n.isValid() ? (r = 6e4 * (n.utcOffset() - this.utcOffset()), t = R(t), "year" === t || "month" === t || "quarter" === t ? (o = an(this, n), "quarter" === t ? o /= 3 : "year" === t && (o /= 12)) : (a = this - n, o = "second" === t ? a / 1e3 : "minute" === t ? a / 6e4 : "hour" === t ? a / 36e5 : "day" === t ? (a - r) / 864e5 : "week" === t ? (a - r) / 6048e5 : a), i ? o : x(o)) : 0 / 0) : 0 / 0
                    }

                    function an(e, t) {
                        var i, n, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                            a = e.clone().add(r, "months");
                        return 0 > t - a ? (i = e.clone().add(r - 1, "months"), n = (t - a) / (a - i)) : (i = e.clone().add(r + 1, "months"), n = (t - a) / (i - a)), -(r + n) || 0
                    }

                    function on() {
                        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                    }

                    function sn() {
                        var e = this.clone().utc();
                        return 0 < e.year() && e.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : K(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : K(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                    }

                    function ln() {
                        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                        var e = "moment",
                            t = "";
                        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                        var i = "[" + e + '("]',
                            n = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                            r = "-MM-DD[T]HH:mm:ss.SSS",
                            a = t + '[")]';
                        return this.format(i + n + r + a)
                    }

                    function un(t) {
                        t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
                        var i = K(this, t);
                        return this.localeData().postformat(i)
                    }

                    function cn(e, t) {
                        return this.isValid() && (_(e) && e.isValid() || _i(e).isValid()) ? zi({
                            to: this,
                            from: e
                        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                    }

                    function dn(e) {
                        return this.from(_i(), e)
                    }

                    function hn(e, t) {
                        return this.isValid() && (_(e) && e.isValid() || _i(e).isValid()) ? zi({
                            from: this,
                            to: e
                        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                    }

                    function fn(e) {
                        return this.to(_i(), e)
                    }

                    function pn(e) {
                        var t;
                        return void 0 === e ? this._locale._abbr : (t = ni(e), null != t && (this._locale = t), this)
                    }

                    function gn() {
                        return this._locale
                    }

                    function mn(e) {
                        switch (e = R(e)) {
                            case "year":
                                this.month(0);
                            case "quarter":
                            case "month":
                                this.date(1);
                            case "week":
                            case "isoWeek":
                            case "day":
                            case "date":
                                this.hours(0);
                            case "hour":
                                this.minutes(0);
                            case "minute":
                                this.seconds(0);
                            case "second":
                                this.milliseconds(0)
                        }
                        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
                    }

                    function vn(e) {
                        return e = R(e), void 0 === e || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                    }

                    function yn() {
                        return this._d.valueOf() - 6e4 * (this._offset || 0)
                    }

                    function bn() {
                        return Math.floor(this.valueOf() / 1e3)
                    }

                    function _n() {
                        return new Date(this.valueOf())
                    }

                    function xn() {
                        var e = this;
                        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                    }

                    function kn() {
                        var e = this;
                        return {
                            years: e.year(),
                            months: e.month(),
                            date: e.date(),
                            hours: e.hours(),
                            minutes: e.minutes(),
                            seconds: e.seconds(),
                            milliseconds: e.milliseconds()
                        }
                    }

                    function wn() {
                        return this.isValid() ? this.toISOString() : null
                    }

                    function Sn() {
                        return g(this)
                    }

                    function Cn() {
                        return d({}, p(this))
                    }

                    function Tn() {
                        return p(this).overflow
                    }

                    function Dn() {
                        return {
                            input: this._i,
                            format: this._f,
                            locale: this._locale,
                            isUTC: this._isUTC,
                            strict: this._strict
                        }
                    }

                    function Mn(e, t) {
                        X(0, [e, e.length], 0, t)
                    }

                    function An(e) {
                        return En.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                    }

                    function Pn(e) {
                        return En.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                    }

                    function In() {
                        return Ct(this.year(), 1, 4)
                    }

                    function Fn() {
                        var e = this.localeData()._week;
                        return Ct(this.year(), e.dow, e.doy)
                    }

                    function En(e, t, i, n, r) {
                        var a;
                        return null == e ? St(this, n, r).year : (a = Ct(e, n, r), t > a && (t = a), On.call(this, e, t, i, n, r))
                    }

                    function On(e, t, i, n, r) {
                        var a = wt(e, t, i, n, r),
                            o = xt(a.year, 0, a.dayOfYear);
                        return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
                    }

                    function Nn(e) {
                        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                    }

                    function Ln(e) {
                        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                        return null == e ? t : this.add(e - t, "d")
                    }

                    function $n(e, t) {
                        t[ua] = k(1e3 * ("0." + e))
                    }

                    function Rn() {
                        return this._isUTC ? "UTC" : ""
                    }

                    function jn() {
                        return this._isUTC ? "Coordinated Universal Time" : ""
                    }

                    function Hn(e) {
                        return _i(1e3 * e)
                    }

                    function Wn() {
                        return _i.apply(null, arguments).parseZone()
                    }

                    function zn(e) {
                        return e
                    }

                    function Vn(e, t, i, n) {
                        var r = ni(),
                            a = h().set(n, t);
                        return r[i](a, e)
                    }

                    function Bn(e, t, i) {
                        if (s(e) && (t = e, e = void 0), e = e || "", null != t) return Vn(e, t, i, "month");
                        var n, r = [];
                        for (n = 0; 12 > n; n++) r[n] = Vn(e, n, i, "month");
                        return r
                    }

                    function Yn(e, t, i, n) {
                        "boolean" == typeof e ? (s(t) && (i = t, t = void 0), t = t || "") : (t = e, i = t, e = !1, s(t) && (i = t, t = void 0), t = t || "");
                        var r = ni(),
                            a = e ? r._week.dow : 0;
                        if (null != i) return Vn(t, (i + a) % 7, n, "day");
                        var o, l = [];
                        for (o = 0; 7 > o; o++) l[o] = Vn(t, (o + a) % 7, n, "day");
                        return l
                    }

                    function qn(e, t) {
                        return Bn(e, t, "months")
                    }

                    function Un(e, t) {
                        return Bn(e, t, "monthsShort")
                    }

                    function Xn(e, t, i) {
                        return Yn(e, t, i, "weekdays")
                    }

                    function Gn(e, t, i) {
                        return Yn(e, t, i, "weekdaysShort")
                    }

                    function Zn(e, t, i) {
                        return Yn(e, t, i, "weekdaysMin")
                    }

                    function Kn() {
                        var e = this._data;
                        return this._milliseconds = eo(this._milliseconds), this._days = eo(this._days), this._months = eo(this._months), e.milliseconds = eo(e.milliseconds), e.seconds = eo(e.seconds), e.minutes = eo(e.minutes), e.hours = eo(e.hours), e.months = eo(e.months), e.years = eo(e.years), this
                    }

                    function Qn(e, t, i, n) {
                        var r = zi(t, i);
                        return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
                    }

                    function Jn(e, t) {
                        return Qn(this, e, t, 1)
                    }

                    function er(e, t) {
                        return Qn(this, e, t, -1)
                    }

                    function tr(e) {
                        return 0 > e ? Math.floor(e) : Math.ceil(e)
                    }

                    function ir() {
                        var e, t, i, n, r, a = this._milliseconds,
                            o = this._days,
                            s = this._months,
                            l = this._data;
                        return a >= 0 && o >= 0 && s >= 0 || 0 >= a && 0 >= o && 0 >= s || (a += 864e5 * tr(rr(s) + o), o = 0, s = 0), l.milliseconds = a % 1e3, e = x(a / 1e3), l.seconds = e % 60, t = x(e / 60), l.minutes = t % 60, i = x(t / 60), l.hours = i % 24, o += x(i / 24), r = x(nr(o)), s += r, o -= tr(rr(r)), n = x(s / 12), s %= 12, l.days = o, l.months = s, l.years = n, this
                    }

                    function nr(e) {
                        return 4800 * e / 146097
                    }

                    function rr(e) {
                        return 146097 * e / 4800
                    }

                    function ar(e) {
                        var t, i, n = this._milliseconds;
                        if (e = R(e), "month" === e || "year" === e) return t = this._days + n / 864e5, i = this._months + nr(t), "month" === e ? i : i / 12;
                        switch (t = this._days + Math.round(rr(this._months)), e) {
                            case "week":
                                return t / 7 + n / 6048e5;
                            case "day":
                                return t + n / 864e5;
                            case "hour":
                                return 24 * t + n / 36e5;
                            case "minute":
                                return 1440 * t + n / 6e4;
                            case "second":
                                return 86400 * t + n / 1e3;
                            case "millisecond":
                                return Math.floor(864e5 * t) + n;
                            default:
                                throw new Error("Unknown unit " + e)
                        }
                    }

                    function or() {
                        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12)
                    }

                    function sr(e) {
                        return function () {
                            return this.as(e)
                        }
                    }

                    function lr(e) {
                        return e = R(e), this[e + "s"]()
                    }

                    function ur(e) {
                        return function () {
                            return this._data[e]
                        }
                    }

                    function cr() {
                        return x(this.days() / 7)
                    }

                    function dr(e, t, i, n, r) {
                        return r.relativeTime(t || 1, !!i, e, n)
                    }

                    function hr(e, t, i) {
                        var n = zi(e).abs(),
                            r = vo(n.as("s")),
                            a = vo(n.as("m")),
                            o = vo(n.as("h")),
                            s = vo(n.as("d")),
                            l = vo(n.as("M")),
                            u = vo(n.as("y")),
                            c = r < yo.s && ["s", r] || 1 >= a && ["m"] || a < yo.m && ["mm", a] || 1 >= o && ["h"] || o < yo.h && ["hh", o] || 1 >= s && ["d"] || s < yo.d && ["dd", s] || 1 >= l && ["M"] || l < yo.M && ["MM", l] || 1 >= u && ["y"] || ["yy", u];
                        return c[2] = t, c[3] = +e > 0, c[4] = i, dr.apply(null, c)
                    }

                    function fr(e) {
                        return void 0 === e ? vo : "function" == typeof e ? (vo = e, !0) : !1
                    }

                    function pr(e, t) {
                        return void 0 === yo[e] ? !1 : void 0 === t ? yo[e] : (yo[e] = t, !0)
                    }

                    function gr(e) {
                        var t = this.localeData(),
                            i = hr(this, !e, t);
                        return e && (i = t.pastFuture(+this, i)), t.postformat(i)
                    }

                    function mr() {
                        var e, t, i, n = bo(this._milliseconds) / 1e3,
                            r = bo(this._days),
                            a = bo(this._months);
                        e = x(n / 60), t = x(e / 60), n %= 60, e %= 60, i = x(a / 12), a %= 12;
                        var o = i,
                            s = a,
                            l = r,
                            u = t,
                            c = e,
                            d = n,
                            h = this.asSeconds();
                        return h ? (0 > h ? "-" : "") + "P" + (o ? o + "Y" : "") + (s ? s + "M" : "") + (l ? l + "D" : "") + (u || c || d ? "T" : "") + (u ? u + "H" : "") + (c ? c + "M" : "") + (d ? d + "S" : "") : "P0D"
                    }
                    var vr, yr;
                    yr = Array.prototype.some ? Array.prototype.some : function (e) {
                        for (var t = Object(this), i = t.length >>> 0, n = 0; i > n; n++)
                            if (n in t && e.call(this, t[n], n, t)) return !0;
                        return !1
                    };
                    var br = yr,
                        _r = e.momentProperties = [],
                        xr = !1,
                        kr = {};
                    e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
                    var wr;
                    wr = Object.keys ? Object.keys : function (e) {
                        var t, i = [];
                        for (t in e) c(e, t) && i.push(t);
                        return i
                    };
                    var Sr, Cr = wr,
                        Tr = {
                            sameDay: "[Today at] LT",
                            nextDay: "[Tomorrow at] LT",
                            nextWeek: "dddd [at] LT",
                            lastDay: "[Yesterday at] LT",
                            lastWeek: "[Last] dddd [at] LT",
                            sameElse: "L"
                        },
                        Dr = {
                            LTS: "h:mm:ss A",
                            LT: "h:mm A",
                            L: "MM/DD/YYYY",
                            LL: "MMMM D, YYYY",
                            LLL: "MMMM D, YYYY h:mm A",
                            LLLL: "dddd, MMMM D, YYYY h:mm A"
                        },
                        Mr = "Invalid date",
                        Ar = "%d",
                        Pr = /\d{1,2}/,
                        Ir = {
                            future: "in %s",
                            past: "%s ago",
                            s: "a few seconds",
                            m: "a minute",
                            mm: "%d minutes",
                            h: "an hour",
                            hh: "%d hours",
                            d: "a day",
                            dd: "%d days",
                            M: "a month",
                            MM: "%d months",
                            y: "a year",
                            yy: "%d years"
                        },
                        Fr = {},
                        Er = {},
                        Or = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                        Nr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                        Lr = {},
                        $r = {},
                        Rr = /\d/,
                        jr = /\d\d/,
                        Hr = /\d{3}/,
                        Wr = /\d{4}/,
                        zr = /[+-]?\d{6}/,
                        Vr = /\d\d?/,
                        Br = /\d\d\d\d?/,
                        Yr = /\d\d\d\d\d\d?/,
                        qr = /\d{1,3}/,
                        Ur = /\d{1,4}/,
                        Xr = /[+-]?\d{1,6}/,
                        Gr = /\d+/,
                        Zr = /[+-]?\d+/,
                        Kr = /Z|[+-]\d\d:?\d\d/gi,
                        Qr = /Z|[+-]\d\d(?::?\d\d)?/gi,
                        Jr = /[+-]?\d+(\.\d{1,3})?/,
                        ea = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                        ta = {},
                        ia = {},
                        na = 0,
                        ra = 1,
                        aa = 2,
                        oa = 3,
                        sa = 4,
                        la = 5,
                        ua = 6,
                        ca = 7,
                        da = 8;
                    Sr = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
                        var t;
                        for (t = 0; t < this.length; ++t)
                            if (this[t] === e) return t;
                        return -1
                    };
                    var ha = Sr;
                    X("M", ["MM", 2], "Mo", function () {
                        return this.month() + 1
                    }), X("MMM", 0, 0, function (e) {
                        return this.localeData().monthsShort(this, e)
                    }), X("MMMM", 0, 0, function (e) {
                        return this.localeData().months(this, e)
                    }), $("month", "M"), H("month", 8), J("M", Vr), J("MM", Vr, jr), J("MMM", function (e, t) {
                        return t.monthsShortRegex(e)
                    }), J("MMMM", function (e, t) {
                        return t.monthsRegex(e)
                    }), nt(["M", "MM"], function (e, t) {
                        t[ra] = k(e) - 1
                    }), nt(["MMM", "MMMM"], function (e, t, i, n) {
                        var r = i._locale.monthsParse(e, n, i._strict);
                        null != r ? t[ra] = r : p(i).invalidMonth = e
                    });
                    var fa = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                        pa = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ga = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                        ma = ea,
                        va = ea;
                    X("Y", 0, 0, function () {
                        var e = this.year();
                        return 9999 >= e ? "" + e : "+" + e
                    }), X(0, ["YY", 2], 0, function () {
                        return this.year() % 100
                    }), X(0, ["YYYY", 4], 0, "year"), X(0, ["YYYYY", 5], 0, "year"), X(0, ["YYYYYY", 6, !0], 0, "year"), $("year", "y"), H("year", 1), J("Y", Zr), J("YY", Vr, jr), J("YYYY", Ur, Wr), J("YYYYY", Xr, zr), J("YYYYYY", Xr, zr), nt(["YYYYY", "YYYYYY"], na), nt("YYYY", function (t, i) {
                        i[na] = 2 === t.length ? e.parseTwoDigitYear(t) : k(t)
                    }), nt("YY", function (t, i) {
                        i[na] = e.parseTwoDigitYear(t)
                    }), nt("Y", function (e, t) {
                        t[na] = parseInt(e, 10)
                    }), e.parseTwoDigitYear = function (e) {
                        return k(e) + (k(e) > 68 ? 1900 : 2e3)
                    };
                    var ya = z("FullYear", !0);
                    X("w", ["ww", 2], "wo", "week"), X("W", ["WW", 2], "Wo", "isoWeek"), $("week", "w"), $("isoWeek", "W"), H("week", 5), H("isoWeek", 5), J("w", Vr), J("ww", Vr, jr), J("W", Vr), J("WW", Vr, jr), rt(["w", "ww", "W", "WW"], function (e, t, i, n) {
                        t[n.substr(0, 1)] = k(e)
                    });
                    var ba = {
                        dow: 0,
                        doy: 6
                    };
                    X("d", 0, "do", "day"), X("dd", 0, 0, function (e) {
                        return this.localeData().weekdaysMin(this, e)
                    }), X("ddd", 0, 0, function (e) {
                        return this.localeData().weekdaysShort(this, e)
                    }), X("dddd", 0, 0, function (e) {
                        return this.localeData().weekdays(this, e)
                    }), X("e", 0, 0, "weekday"), X("E", 0, 0, "isoWeekday"), $("day", "d"), $("weekday", "e"), $("isoWeekday", "E"), H("day", 11), H("weekday", 11), H("isoWeekday", 11), J("d", Vr), J("e", Vr), J("E", Vr), J("dd", function (e, t) {
                        return t.weekdaysMinRegex(e)
                    }), J("ddd", function (e, t) {
                        return t.weekdaysShortRegex(e)
                    }), J("dddd", function (e, t) {
                        return t.weekdaysRegex(e)
                    }), rt(["dd", "ddd", "dddd"], function (e, t, i, n) {
                        var r = i._locale.weekdaysParse(e, n, i._strict);
                        null != r ? t.d = r : p(i).invalidWeekday = e
                    }), rt(["d", "e", "E"], function (e, t, i, n) {
                        t[n] = k(e)
                    });
                    var _a = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        xa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                        ka = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                        wa = ea,
                        Sa = ea,
                        Ca = ea;
                    X("H", ["HH", 2], 0, "hour"), X("h", ["hh", 2], 0, Yt), X("k", ["kk", 2], 0, qt), X("hmm", 0, 0, function () {
                        return "" + Yt.apply(this) + U(this.minutes(), 2)
                    }), X("hmmss", 0, 0, function () {
                        return "" + Yt.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2)
                    }), X("Hmm", 0, 0, function () {
                        return "" + this.hours() + U(this.minutes(), 2)
                    }), X("Hmmss", 0, 0, function () {
                        return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2)
                    }), Ut("a", !0), Ut("A", !1), $("hour", "h"), H("hour", 13), J("a", Xt), J("A", Xt), J("H", Vr), J("h", Vr), J("HH", Vr, jr), J("hh", Vr, jr), J("hmm", Br), J("hmmss", Yr), J("Hmm", Br), J("Hmmss", Yr), nt(["H", "HH"], oa), nt(["a", "A"], function (e, t, i) {
                        i._isPm = i._locale.isPM(e), i._meridiem = e
                    }), nt(["h", "hh"], function (e, t, i) {
                        t[oa] = k(e), p(i).bigHour = !0
                    }), nt("hmm", function (e, t, i) {
                        var n = e.length - 2;
                        t[oa] = k(e.substr(0, n)), t[sa] = k(e.substr(n)), p(i).bigHour = !0
                    }), nt("hmmss", function (e, t, i) {
                        var n = e.length - 4,
                            r = e.length - 2;
                        t[oa] = k(e.substr(0, n)), t[sa] = k(e.substr(n, 2)), t[la] = k(e.substr(r)), p(i).bigHour = !0
                    }), nt("Hmm", function (e, t) {
                        var i = e.length - 2;
                        t[oa] = k(e.substr(0, i)), t[sa] = k(e.substr(i))
                    }), nt("Hmmss", function (e, t) {
                        var i = e.length - 4,
                            n = e.length - 2;
                        t[oa] = k(e.substr(0, i)), t[sa] = k(e.substr(i, 2)), t[la] = k(e.substr(n))
                    });
                    var Ta, Da = /[ap]\.?m?\.?/i,
                        Ma = z("Hours", !0),
                        Aa = {
                            calendar: Tr,
                            longDateFormat: Dr,
                            invalidDate: Mr,
                            ordinal: Ar,
                            ordinalParse: Pr,
                            relativeTime: Ir,
                            months: pa,
                            monthsShort: ga,
                            week: ba,
                            weekdays: _a,
                            weekdaysMin: ka,
                            weekdaysShort: xa,
                            meridiemParse: Da
                        },
                        Pa = {},
                        Ia = {},
                        Fa = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        Ea = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        Oa = /Z|[+-]\d\d(?::?\d\d)?/,
                        Na = [
                            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                            ["YYYY-DDD", /\d{4}-\d{3}/],
                            ["YYYY-MM", /\d{4}-\d\d/, !1],
                            ["YYYYYYMMDD", /[+-]\d{10}/],
                            ["YYYYMMDD", /\d{8}/],
                            ["GGGG[W]WWE", /\d{4}W\d{3}/],
                            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                            ["YYYYDDD", /\d{7}/]
                        ],
                        La = [
                            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                            ["HH:mm", /\d\d:\d\d/],
                            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                            ["HHmmss", /\d\d\d\d\d\d/],
                            ["HHmm", /\d\d\d\d/],
                            ["HH", /\d\d/]
                        ],
                        $a = /^\/?Date\((\-?\d+)/i;
                    e.createFromInputFallback = C("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
                        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                    }), e.ISO_8601 = function () {};
                    var Ra = C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                            var e = _i.apply(null, arguments);
                            return this.isValid() && e.isValid() ? this > e ? this : e : m()
                        }),
                        ja = C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                            var e = _i.apply(null, arguments);
                            return this.isValid() && e.isValid() ? e > this ? this : e : m()
                        }),
                        Ha = function () {
                            return Date.now ? Date.now() : +new Date
                        };
                    Di("Z", ":"), Di("ZZ", ""), J("Z", Qr), J("ZZ", Qr), nt(["Z", "ZZ"], function (e, t, i) {
                        i._useUTC = !0, i._tzm = Mi(Qr, e)
                    });
                    var Wa = /([\+\-]|\d\d)/gi;
                    e.updateOffset = function () {};
                    var za = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                        Va = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                    zi.fn = Si.prototype;
                    var Ba = qi(1, "add"),
                        Ya = qi(-1, "subtract");
                    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                    var qa = C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
                        return void 0 === e ? this.localeData() : this.locale(e)
                    });
                    X(0, ["gg", 2], 0, function () {
                        return this.weekYear() % 100
                    }), X(0, ["GG", 2], 0, function () {
                        return this.isoWeekYear() % 100
                    }), Mn("gggg", "weekYear"), Mn("ggggg", "weekYear"), Mn("GGGG", "isoWeekYear"), Mn("GGGGG", "isoWeekYear"), $("weekYear", "gg"), $("isoWeekYear", "GG"), H("weekYear", 1), H("isoWeekYear", 1), J("G", Zr), J("g", Zr), J("GG", Vr, jr), J("gg", Vr, jr), J("GGGG", Ur, Wr), J("gggg", Ur, Wr), J("GGGGG", Xr, zr), J("ggggg", Xr, zr), rt(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, i, n) {
                        t[n.substr(0, 2)] = k(e)
                    }), rt(["gg", "GG"], function (t, i, n, r) {
                        i[r] = e.parseTwoDigitYear(t)
                    }), X("Q", 0, "Qo", "quarter"), $("quarter", "Q"), H("quarter", 7), J("Q", Rr), nt("Q", function (e, t) {
                        t[ra] = 3 * (k(e) - 1)
                    }), X("D", ["DD", 2], "Do", "date"), $("date", "D"), H("date", 9), J("D", Vr), J("DD", Vr, jr), J("Do", function (e, t) {
                        return e ? t._ordinalParse : t._ordinalParseLenient
                    }), nt(["D", "DD"], aa), nt("Do", function (e, t) {
                        t[aa] = k(e.match(Vr)[0], 10)
                    });
                    var Ua = z("Date", !0);
                    X("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), $("dayOfYear", "DDD"), H("dayOfYear", 4), J("DDD", qr), J("DDDD", Hr), nt(["DDD", "DDDD"], function (e, t, i) {
                        i._dayOfYear = k(e)
                    }), X("m", ["mm", 2], 0, "minute"), $("minute", "m"), H("minute", 14), J("m", Vr), J("mm", Vr, jr), nt(["m", "mm"], sa);
                    var Xa = z("Minutes", !1);
                    X("s", ["ss", 2], 0, "second"), $("second", "s"), H("second", 15), J("s", Vr), J("ss", Vr, jr), nt(["s", "ss"], la);
                    var Ga = z("Seconds", !1);
                    X("S", 0, 0, function () {
                        return ~~(this.millisecond() / 100)
                    }), X(0, ["SS", 2], 0, function () {
                        return ~~(this.millisecond() / 10)
                    }), X(0, ["SSS", 3], 0, "millisecond"), X(0, ["SSSS", 4], 0, function () {
                        return 10 * this.millisecond()
                    }), X(0, ["SSSSS", 5], 0, function () {
                        return 100 * this.millisecond()
                    }), X(0, ["SSSSSS", 6], 0, function () {
                        return 1e3 * this.millisecond()
                    }), X(0, ["SSSSSSS", 7], 0, function () {
                        return 1e4 * this.millisecond()
                    }), X(0, ["SSSSSSSS", 8], 0, function () {
                        return 1e5 * this.millisecond()
                    }), X(0, ["SSSSSSSSS", 9], 0, function () {
                        return 1e6 * this.millisecond()
                    }), $("millisecond", "ms"), H("millisecond", 16), J("S", qr, Rr), J("SS", qr, jr), J("SSS", qr, Hr);
                    var Za;
                    for (Za = "SSSS"; Za.length <= 9; Za += "S") J(Za, Gr);
                    for (Za = "S"; Za.length <= 9; Za += "S") nt(Za, $n);
                    var Ka = z("Milliseconds", !1);
                    X("z", 0, 0, "zoneAbbr"), X("zz", 0, 0, "zoneName");
                    var Qa = b.prototype;
                    Qa.add = Ba, Qa.calendar = Gi, Qa.clone = Zi, Qa.diff = rn, Qa.endOf = vn, Qa.format = un, Qa.from = cn, Qa.fromNow = dn, Qa.to = hn, Qa.toNow = fn, Qa.get = Y, Qa.invalidAt = Tn, Qa.isAfter = Ki, Qa.isBefore = Qi, Qa.isBetween = Ji, Qa.isSame = en, Qa.isSameOrAfter = tn, Qa.isSameOrBefore = nn, Qa.isValid = Sn, Qa.lang = qa, Qa.locale = pn, Qa.localeData = gn, Qa.max = ja, Qa.min = Ra, Qa.parsingFlags = Cn, Qa.set = q, Qa.startOf = mn, Qa.subtract = Ya, Qa.toArray = xn, Qa.toObject = kn, Qa.toDate = _n, Qa.toISOString = sn, Qa.inspect = ln, Qa.toJSON = wn, Qa.toString = on, Qa.unix = bn, Qa.valueOf = yn, Qa.creationData = Dn, Qa.year = ya, Qa.isLeapYear = bt, Qa.weekYear = An, Qa.isoWeekYear = Pn, Qa.quarter = Qa.quarters = Nn, Qa.month = ht, Qa.daysInMonth = ft, Qa.week = Qa.weeks = At, Qa.isoWeek = Qa.isoWeeks = Pt, Qa.weeksInYear = Fn, Qa.isoWeeksInYear = In, Qa.date = Ua, Qa.day = Qa.days = Rt, Qa.weekday = jt, Qa.isoWeekday = Ht, Qa.dayOfYear = Ln, Qa.hour = Qa.hours = Ma, Qa.minute = Qa.minutes = Xa, Qa.second = Qa.seconds = Ga, Qa.millisecond = Qa.milliseconds = Ka, Qa.utcOffset = Ii, Qa.utc = Ei, Qa.local = Oi, Qa.parseZone = Ni, Qa.hasAlignedHourOffset = Li, Qa.isDST = $i, Qa.isLocal = ji, Qa.isUtcOffset = Hi, Qa.isUtc = Wi, Qa.isUTC = Wi, Qa.zoneAbbr = Rn, Qa.zoneName = jn, Qa.dates = C("dates accessor is deprecated. Use date instead.", Ua), Qa.months = C("months accessor is deprecated. Use month instead", ht), Qa.years = C("years accessor is deprecated. Use year instead", ya), Qa.zone = C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Fi), Qa.isDSTShifted = C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ri);
                    var Ja = P.prototype;
                    Ja.calendar = I, Ja.longDateFormat = F, Ja.invalidDate = E, Ja.ordinal = O, Ja.preparse = zn, Ja.postformat = zn, Ja.relativeTime = N, Ja.pastFuture = L, Ja.set = M, Ja.months = st, Ja.monthsShort = lt, Ja.monthsParse = ct, Ja.monthsRegex = gt, Ja.monthsShortRegex = pt, Ja.week = Tt, Ja.firstDayOfYear = Mt, Ja.firstDayOfWeek = Dt, Ja.weekdays = Et, Ja.weekdaysMin = Nt, Ja.weekdaysShort = Ot, Ja.weekdaysParse = $t, Ja.weekdaysRegex = Wt, Ja.weekdaysShortRegex = zt, Ja.weekdaysMinRegex = Vt, Ja.isPM = Gt, Ja.meridiem = Zt, ei("en", {
                        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                        ordinal: function (e) {
                            var t = e % 10,
                                i = 1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                            return e + i
                        }
                    }), e.lang = C("moment.lang is deprecated. Use moment.locale instead.", ei), e.langData = C("moment.langData is deprecated. Use moment.localeData instead.", ni);
                    var eo = Math.abs,
                        to = sr("ms"),
                        io = sr("s"),
                        no = sr("m"),
                        ro = sr("h"),
                        ao = sr("d"),
                        oo = sr("w"),
                        so = sr("M"),
                        lo = sr("y"),
                        uo = ur("milliseconds"),
                        co = ur("seconds"),
                        ho = ur("minutes"),
                        fo = ur("hours"),
                        po = ur("days"),
                        go = ur("months"),
                        mo = ur("years"),
                        vo = Math.round,
                        yo = {
                            s: 45,
                            m: 45,
                            h: 22,
                            d: 26,
                            M: 11
                        },
                        bo = Math.abs,
                        _o = Si.prototype;
                    return _o.abs = Kn, _o.add = Jn, _o.subtract = er, _o.as = ar, _o.asMilliseconds = to, _o.asSeconds = io, _o.asMinutes = no, _o.asHours = ro, _o.asDays = ao, _o.asWeeks = oo, _o.asMonths = so, _o.asYears = lo, _o.valueOf = or, _o._bubble = ir, _o.get = lr, _o.milliseconds = uo, _o.seconds = co, _o.minutes = ho, _o.hours = fo, _o.days = po, _o.weeks = cr, _o.months = go, _o.years = mo, _o.humanize = gr, _o.toISOString = mr, _o.toString = mr, _o.toJSON = mr, _o.locale = pn, _o.localeData = gn, _o.toIsoString = C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", mr), _o.lang = qa, X("X", 0, 0, "unix"), X("x", 0, 0, "valueOf"), J("x", Zr), J("X", Jr), nt("X", function (e, t, i) {
                        i._d = new Date(1e3 * parseFloat(e, 10))
                    }), nt("x", function (e, t, i) {
                        i._d = new Date(k(e))
                    }), e.version = "2.17.1", n(_i), e.fn = Qa, e.min = ki, e.max = wi, e.now = Ha, e.utc = h, e.unix = Hn, e.months = qn, e.isDate = l, e.locale = ei, e.invalid = m, e.duration = zi, e.isMoment = _, e.weekdays = Xn, e.parseZone = Wn, e.localeData = ni, e.isDuration = Ci, e.monthsShort = Un, e.weekdaysMin = Zn, e.defineLocale = ti, e.updateLocale = ii, e.locales = ri, e.weekdaysShort = Gn, e.normalizeUnits = R, e.relativeTimeRounding = fr, e.relativeTimeThreshold = pr, e.calendarFormat = Xi, e.prototype = Qa, e
                })
            }, {}],
            7: [function (e, t) {
                var i = e(28)();
                e(26)(i), e(42)(i), e(22)(i), e(31)(i), e(25)(i), e(21)(i), e(23)(i), e(24)(i), e(29)(i), e(33)(i), e(34)(i), e(32)(i), e(35)(i), e(30)(i), e(27)(i), e(36)(i), e(37)(i), e(38)(i), e(39)(i), e(40)(i), e(45)(i), e(43)(i), e(44)(i), e(46)(i), e(47)(i), e(48)(i), e(15)(i), e(16)(i), e(17)(i), e(18)(i), e(19)(i), e(20)(i), e(8)(i), e(9)(i), e(10)(i), e(11)(i), e(12)(i), e(13)(i), e(14)(i), window.Chart = t.exports = i
            }, {
                10: 10,
                11: 11,
                12: 12,
                13: 13,
                14: 14,
                15: 15,
                16: 16,
                17: 17,
                18: 18,
                19: 19,
                20: 20,
                21: 21,
                22: 22,
                23: 23,
                24: 24,
                25: 25,
                26: 26,
                27: 27,
                28: 28,
                29: 29,
                30: 30,
                31: 31,
                32: 32,
                33: 33,
                34: 34,
                35: 35,
                36: 36,
                37: 37,
                38: 38,
                39: 39,
                40: 40,
                42: 42,
                43: 43,
                44: 44,
                45: 45,
                46: 46,
                47: 47,
                48: 48,
                8: 8,
                9: 9
            }],
            8: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    e.Bar = function (t, i) {
                        return i.type = "bar", new e(t, i)
                    }
                }
            }, {}],
            9: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    e.Bubble = function (t, i) {
                        return i.type = "bubble", new e(t, i)
                    }
                }
            }, {}],
            10: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    e.Doughnut = function (t, i) {
                        return i.type = "doughnut", new e(t, i)
                    }
                }
            }, {}],
            11: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    e.Line = function (t, i) {
                        return i.type = "line", new e(t, i)
                    }
                }
            }, {}],
            12: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    e.PolarArea = function (t, i) {
                        return i.type = "polarArea", new e(t, i)
                    }
                }
            }, {}],
            13: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    e.Radar = function (t, i) {
                        return i.type = "radar", new e(t, i)
                    }
                }
            }, {}],
            14: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = {
                        hover: {
                            mode: "single"
                        },
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "bottom",
                                id: "x-axis-1"
                            }],
                            yAxes: [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-1"
                            }]
                        },
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return ""
                                },
                                label: function (e) {
                                    return "(" + e.xLabel + ", " + e.yLabel + ")"
                                }
                            }
                        }
                    };
                    e.defaults.scatter = t, e.controllers.scatter = e.controllers.line, e.Scatter = function (t, i) {
                        return i.type = "scatter", new e(t, i)
                    }
                }
            }, {}],
            15: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers;
                    e.defaults.bar = {
                        hover: {
                            mode: "label"
                        },
                        scales: {
                            xAxes: [{
                                type: "category",
                                categoryPercentage: .8,
                                barPercentage: .9,
                                gridLines: {
                                    offsetGridLines: !0
                                }
                            }],
                            yAxes: [{
                                type: "linear"
                            }]
                        }
                    }, e.controllers.bar = e.DatasetController.extend({
                        dataElementType: e.elements.Rectangle,
                        initialize: function (t, i) {
                            e.DatasetController.prototype.initialize.call(this, t, i);
                            var n = this,
                                r = n.getMeta(),
                                a = n.getDataset();
                            r.stack = a.stack, r.bar = !0
                        },
                        getStackCount: function () {
                            var e = this,
                                i = e.getMeta(),
                                n = e.getScaleForId(i.yAxisID),
                                r = [];
                            return t.each(e.chart.data.datasets, function (t, i) {
                                var a = e.chart.getDatasetMeta(i);
                                a.bar && e.chart.isDatasetVisible(i) && (n.options.stacked === !1 || n.options.stacked === !0 && -1 === r.indexOf(a.stack) || void 0 === n.options.stacked && (void 0 === a.stack || -1 === r.indexOf(a.stack))) && r.push(a.stack)
                            }, e), r.length
                        },
                        update: function (e) {
                            var i = this;
                            t.each(i.getMeta().data, function (t, n) {
                                i.updateElement(t, n, e)
                            }, i)
                        },
                        updateElement: function (e, i, n) {
                            var r = this,
                                a = r.getMeta(),
                                o = r.getScaleForId(a.xAxisID),
                                s = r.getScaleForId(a.yAxisID),
                                l = s.getBasePixel(),
                                u = r.chart.options.elements.rectangle,
                                c = e.custom || {},
                                d = r.getDataset();
                            e._xScale = o, e._yScale = s, e._datasetIndex = r.index, e._index = i;
                            var h = r.getRuler(i);
                            e._model = {
                                x: r.calculateBarX(i, r.index, h),
                                y: n ? l : r.calculateBarY(i, r.index),
                                label: r.chart.data.labels[i],
                                datasetLabel: d.label,
                                horizontal: !1,
                                base: n ? l : r.calculateBarBase(r.index, i),
                                width: r.calculateBarWidth(h),
                                backgroundColor: c.backgroundColor ? c.backgroundColor : t.getValueAtIndexOrDefault(d.backgroundColor, i, u.backgroundColor),
                                borderSkipped: c.borderSkipped ? c.borderSkipped : u.borderSkipped,
                                borderColor: c.borderColor ? c.borderColor : t.getValueAtIndexOrDefault(d.borderColor, i, u.borderColor),
                                borderWidth: c.borderWidth ? c.borderWidth : t.getValueAtIndexOrDefault(d.borderWidth, i, u.borderWidth)
                            }, e.pivot()
                        },
                        calculateBarBase: function (e, t) {
                            var i = this,
                                n = i.getMeta(),
                                r = i.getScaleForId(n.yAxisID),
                                a = r.getBaseValue(),
                                o = a;
                            if (r.options.stacked === !0 || void 0 === r.options.stacked && void 0 !== n.stack) {
                                for (var s = i.chart, l = s.data.datasets, u = Number(l[e].data[t]), c = 0; e > c; c++) {
                                    var d = l[c],
                                        h = s.getDatasetMeta(c);
                                    if (h.bar && h.yAxisID === r.id && s.isDatasetVisible(c) && n.stack === h.stack) {
                                        var f = Number(d.data[t]);
                                        a += 0 > u ? Math.min(f, o) : Math.max(f, o)
                                    }
                                }
                                return r.getPixelForValue(a)
                            }
                            return r.getBasePixel()
                        },
                        getRuler: function () {
                            var e = this,
                                t = e.getMeta(),
                                i = e.getScaleForId(t.xAxisID),
                                n = e.getStackCount(),
                                r = i.width / i.ticks.length,
                                a = r * i.options.categoryPercentage,
                                o = (r - r * i.options.categoryPercentage) / 2,
                                s = a / n,
                                l = s * i.options.barPercentage,
                                u = s - s * i.options.barPercentage;
                            return {
                                stackCount: n,
                                tickWidth: r,
                                categoryWidth: a,
                                categorySpacing: o,
                                fullBarWidth: s,
                                barWidth: l,
                                barSpacing: u
                            }
                        },
                        calculateBarWidth: function (e) {
                            var t = this,
                                i = t.getMeta(),
                                n = t.getScaleForId(i.xAxisID);
                            return n.options.barThickness ? n.options.barThickness : e.barWidth
                        },
                        getStackIndex: function (e) {
                            var t, i, n = this,
                                r = n.chart.getDatasetMeta(e),
                                a = n.getScaleForId(r.yAxisID),
                                o = [r.stack];
                            for (i = 0; e > i; ++i) t = this.chart.getDatasetMeta(i), t.bar && this.chart.isDatasetVisible(i) && (a.options.stacked === !1 || a.options.stacked === !0 && -1 === o.indexOf(t.stack) || void 0 === a.options.stacked && (void 0 === t.stack || -1 === o.indexOf(t.stack))) && o.push(t.stack);
                            return o.length - 1
                        },
                        calculateBarX: function (e, t, i) {
                            var n = this,
                                r = n.getMeta(),
                                a = n.getScaleForId(r.xAxisID),
                                o = n.getStackIndex(t),
                                s = a.getPixelForValue(null, e, t, n.chart.isCombo);
                            return s -= n.chart.isCombo ? i.tickWidth / 2 : 0, s + i.barWidth / 2 + i.categorySpacing + i.barWidth * o + i.barSpacing / 2 + i.barSpacing * o
                        },
                        calculateBarY: function (e, t) {
                            var i = this,
                                n = i.getMeta(),
                                r = i.getScaleForId(n.yAxisID),
                                a = Number(i.getDataset().data[e]);
                            if (r.options.stacked || void 0 === r.options.stacked && void 0 !== n.stack) {
                                for (var o = r.getBaseValue(), s = o, l = o, u = 0; t > u; u++) {
                                    var c = i.chart.data.datasets[u],
                                        d = i.chart.getDatasetMeta(u);
                                    if (d.bar && d.yAxisID === r.id && i.chart.isDatasetVisible(u) && n.stack === d.stack) {
                                        var h = Number(c.data[e]);
                                        0 > h ? l += h || 0 : s += h || 0
                                    }
                                }
                                return r.getPixelForValue(0 > a ? l + a : s + a)
                            }
                            return r.getPixelForValue(a)
                        },
                        draw: function (t) {
                            var i, n, r = this,
                                a = t || 1,
                                o = r.getMeta().data,
                                s = r.getDataset();
                            for (e.canvasHelpers.clipArea(r.chart.chart.ctx, r.chart.chartArea), i = 0, n = o.length; n > i; ++i) {
                                var l = s.data[i];
                                null === l || void 0 === l || isNaN(l) || o[i].transition(a).draw()
                            }
                            e.canvasHelpers.unclipArea(r.chart.chart.ctx)
                        },
                        setHoverStyle: function (e) {
                            var i = this.chart.data.datasets[e._datasetIndex],
                                n = e._index,
                                r = e.custom || {},
                                a = e._model;
                            a.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : t.getValueAtIndexOrDefault(i.hoverBackgroundColor, n, t.getHoverColor(a.backgroundColor)), a.borderColor = r.hoverBorderColor ? r.hoverBorderColor : t.getValueAtIndexOrDefault(i.hoverBorderColor, n, t.getHoverColor(a.borderColor)), a.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : t.getValueAtIndexOrDefault(i.hoverBorderWidth, n, a.borderWidth)
                        },
                        removeHoverStyle: function (e) {
                            var i = this.chart.data.datasets[e._datasetIndex],
                                n = e._index,
                                r = e.custom || {},
                                a = e._model,
                                o = this.chart.options.elements.rectangle;
                            a.backgroundColor = r.backgroundColor ? r.backgroundColor : t.getValueAtIndexOrDefault(i.backgroundColor, n, o.backgroundColor), a.borderColor = r.borderColor ? r.borderColor : t.getValueAtIndexOrDefault(i.borderColor, n, o.borderColor), a.borderWidth = r.borderWidth ? r.borderWidth : t.getValueAtIndexOrDefault(i.borderWidth, n, o.borderWidth)
                        }
                    }), e.defaults.horizontalBar = {
                        hover: {
                            mode: "label"
                        },
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "bottom"
                            }],
                            yAxes: [{
                                position: "left",
                                type: "category",
                                categoryPercentage: .8,
                                barPercentage: .9,
                                gridLines: {
                                    offsetGridLines: !0
                                }
                            }]
                        },
                        elements: {
                            rectangle: {
                                borderSkipped: "left"
                            }
                        },
                        tooltips: {
                            callbacks: {
                                title: function (e, t) {
                                    var i = "";
                                    return e.length > 0 && (e[0].yLabel ? i = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (i = t.labels[e[0].index])), i
                                },
                                label: function (e, t) {
                                    var i = t.datasets[e.datasetIndex].label || "";
                                    return i + ": " + e.xLabel
                                }
                            }
                        }
                    }, e.controllers.horizontalBar = e.controllers.bar.extend({
                        getStackCount: function () {
                            var e = this,
                                i = e.getMeta(),
                                n = e.getScaleForId(i.xAxisID),
                                r = [];
                            return t.each(e.chart.data.datasets, function (t, i) {
                                var a = e.chart.getDatasetMeta(i);
                                a.bar && e.chart.isDatasetVisible(i) && (n.options.stacked === !1 || n.options.stacked === !0 && -1 === r.indexOf(a.stack) || void 0 === n.options.stacked && (void 0 === a.stack || -1 === r.indexOf(a.stack))) && r.push(a.stack)
                            }, e), r.length
                        },
                        updateElement: function (e, i, n) {
                            var r = this,
                                a = r.getMeta(),
                                o = r.getScaleForId(a.xAxisID),
                                s = r.getScaleForId(a.yAxisID),
                                l = o.getBasePixel(),
                                u = e.custom || {},
                                c = r.getDataset(),
                                d = r.chart.options.elements.rectangle;
                            e._xScale = o, e._yScale = s, e._datasetIndex = r.index, e._index = i;
                            var h = r.getRuler(i);
                            e._model = {
                                x: n ? l : r.calculateBarX(i, r.index),
                                y: r.calculateBarY(i, r.index, h),
                                label: r.chart.data.labels[i],
                                datasetLabel: c.label,
                                horizontal: !0,
                                base: n ? l : r.calculateBarBase(r.index, i),
                                height: r.calculateBarHeight(h),
                                backgroundColor: u.backgroundColor ? u.backgroundColor : t.getValueAtIndexOrDefault(c.backgroundColor, i, d.backgroundColor),
                                borderSkipped: u.borderSkipped ? u.borderSkipped : d.borderSkipped,
                                borderColor: u.borderColor ? u.borderColor : t.getValueAtIndexOrDefault(c.borderColor, i, d.borderColor),
                                borderWidth: u.borderWidth ? u.borderWidth : t.getValueAtIndexOrDefault(c.borderWidth, i, d.borderWidth)
                            }, e.pivot()
                        },
                        calculateBarBase: function (e, t) {
                            var i = this,
                                n = i.getMeta(),
                                r = i.getScaleForId(n.xAxisID),
                                a = r.getBaseValue(),
                                o = a;
                            if (r.options.stacked || void 0 === r.options.stacked && void 0 !== n.stack) {
                                for (var s = i.chart, l = s.data.datasets, u = Number(l[e].data[t]), c = 0; e > c; c++) {
                                    var d = l[c],
                                        h = s.getDatasetMeta(c);
                                    if (h.bar && h.xAxisID === r.id && s.isDatasetVisible(c) && n.stack === h.stack) {
                                        var f = Number(d.data[t]);
                                        a += 0 > u ? Math.min(f, o) : Math.max(f, o)
                                    }
                                }
                                return r.getPixelForValue(a)
                            }
                            return r.getBasePixel()
                        },
                        getRuler: function () {
                            var e = this,
                                t = e.getMeta(),
                                i = e.getScaleForId(t.yAxisID),
                                n = e.getStackCount(),
                                r = i.height / i.ticks.length,
                                a = r * i.options.categoryPercentage,
                                o = (r - r * i.options.categoryPercentage) / 2,
                                s = a / n,
                                l = s * i.options.barPercentage,
                                u = s - s * i.options.barPercentage;
                            return {
                                stackCount: n,
                                tickHeight: r,
                                categoryHeight: a,
                                categorySpacing: o,
                                fullBarHeight: s,
                                barHeight: l,
                                barSpacing: u
                            }
                        },
                        calculateBarHeight: function (e) {
                            var t = this,
                                i = t.getMeta(),
                                n = t.getScaleForId(i.yAxisID);
                            return n.options.barThickness ? n.options.barThickness : e.barHeight
                        },
                        getStackIndex: function (e) {
                            var t, i, n = this,
                                r = n.chart.getDatasetMeta(e),
                                a = n.getScaleForId(r.xAxisID),
                                o = [r.stack];
                            for (i = 0; e > i; ++i) t = this.chart.getDatasetMeta(i), t.bar && this.chart.isDatasetVisible(i) && (a.options.stacked === !1 || a.options.stacked === !0 && -1 === o.indexOf(t.stack) || void 0 === a.options.stacked && (void 0 === t.stack || -1 === o.indexOf(t.stack))) && o.push(t.stack);
                            return o.length - 1
                        },
                        calculateBarX: function (e, t) {
                            var i = this,
                                n = i.getMeta(),
                                r = i.getScaleForId(n.xAxisID),
                                a = Number(i.getDataset().data[e]);
                            if (r.options.stacked || void 0 === r.options.stacked && void 0 !== n.stack) {
                                for (var o = r.getBaseValue(), s = o, l = o, u = 0; t > u; u++) {
                                    var c = i.chart.data.datasets[u],
                                        d = i.chart.getDatasetMeta(u);
                                    if (d.bar && d.xAxisID === r.id && i.chart.isDatasetVisible(u) && n.stack === d.stack) {
                                        var h = Number(c.data[e]);
                                        0 > h ? l += h || 0 : s += h || 0
                                    }
                                }
                                return r.getPixelForValue(0 > a ? l + a : s + a)
                            }
                            return r.getPixelForValue(a)
                        },
                        calculateBarY: function (e, t, i) {
                            var n = this,
                                r = n.getMeta(),
                                a = n.getScaleForId(r.yAxisID),
                                o = n.getStackIndex(t),
                                s = a.getPixelForValue(null, e, t, n.chart.isCombo);
                            return s -= n.chart.isCombo ? i.tickHeight / 2 : 0, s + i.barHeight / 2 + i.categorySpacing + i.barHeight * o + i.barSpacing / 2 + i.barSpacing * o
                        }
                    })
                }
            }, {}],
            16: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers;
                    e.defaults.bubble = {
                        hover: {
                            mode: "single"
                        },
                        scales: {
                            xAxes: [{
                                type: "linear",
                                position: "bottom",
                                id: "x-axis-0"
                            }],
                            yAxes: [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-0"
                            }]
                        },
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return ""
                                },
                                label: function (e, t) {
                                    var i = t.datasets[e.datasetIndex].label || "",
                                        n = t.datasets[e.datasetIndex].data[e.index];
                                    return i + ": (" + e.xLabel + ", " + e.yLabel + ", " + n.r + ")"
                                }
                            }
                        }
                    }, e.controllers.bubble = e.DatasetController.extend({
                        dataElementType: e.elements.Point,
                        update: function (e) {
                            var i = this,
                                n = i.getMeta(),
                                r = n.data;
                            t.each(r, function (t, n) {
                                i.updateElement(t, n, e)
                            })
                        },
                        updateElement: function (i, n, r) {
                            var a = this,
                                o = a.getMeta(),
                                s = a.getScaleForId(o.xAxisID),
                                l = a.getScaleForId(o.yAxisID),
                                u = i.custom || {},
                                c = a.getDataset(),
                                d = c.data[n],
                                h = a.chart.options.elements.point,
                                f = a.index;
                            t.extend(i, {
                                _xScale: s,
                                _yScale: l,
                                _datasetIndex: f,
                                _index: n,
                                _model: {
                                    x: r ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof d ? d : 0 / 0, n, f, a.chart.isCombo),
                                    y: r ? l.getBasePixel() : l.getPixelForValue(d, n, f),
                                    radius: r ? 0 : u.radius ? u.radius : a.getRadius(d),
                                    hitRadius: u.hitRadius ? u.hitRadius : t.getValueAtIndexOrDefault(c.hitRadius, n, h.hitRadius)
                                }
                            }), e.DatasetController.prototype.removeHoverStyle.call(a, i, h);
                            var p = i._model;
                            p.skip = u.skip ? u.skip : isNaN(p.x) || isNaN(p.y), i.pivot()
                        },
                        getRadius: function (e) {
                            return e.r || this.chart.options.elements.point.radius
                        },
                        setHoverStyle: function (i) {
                            var n = this;
                            e.DatasetController.prototype.setHoverStyle.call(n, i);
                            var r = n.chart.data.datasets[i._datasetIndex],
                                a = i._index,
                                o = i.custom || {},
                                s = i._model;
                            s.radius = o.hoverRadius ? o.hoverRadius : t.getValueAtIndexOrDefault(r.hoverRadius, a, n.chart.options.elements.point.hoverRadius) + n.getRadius(r.data[a])
                        },
                        removeHoverStyle: function (t) {
                            var i = this;
                            e.DatasetController.prototype.removeHoverStyle.call(i, t, i.chart.options.elements.point);
                            var n = i.chart.data.datasets[t._datasetIndex].data[t._index],
                                r = t.custom || {},
                                a = t._model;
                            a.radius = r.radius ? r.radius : i.getRadius(n)
                        }
                    })
                }
            }, {}],
            17: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers,
                        i = e.defaults;
                    i.doughnut = {
                        animation: {
                            animateRotate: !0,
                            animateScale: !1
                        },
                        aspectRatio: 1,
                        hover: {
                            mode: "single"
                        },
                        legendCallback: function (e) {
                            var t = [];
                            t.push('<ul class="' + e.id + '-legend">');
                            var i = e.data,
                                n = i.datasets,
                                r = i.labels;
                            if (n.length)
                                for (var a = 0; a < n[0].data.length; ++a) t.push('<li><span style="background-color:' + n[0].backgroundColor[a] + '"></span>'), r[a] && t.push(r[a]), t.push("</li>");
                            return t.push("</ul>"), t.join("")
                        },
                        legend: {
                            labels: {
                                generateLabels: function (e) {
                                    var i = e.data;
                                    return i.labels.length && i.datasets.length ? i.labels.map(function (n, r) {
                                        var a = e.getDatasetMeta(0),
                                            o = i.datasets[0],
                                            s = a.data[r],
                                            l = s && s.custom || {},
                                            u = t.getValueAtIndexOrDefault,
                                            c = e.options.elements.arc,
                                            d = l.backgroundColor ? l.backgroundColor : u(o.backgroundColor, r, c.backgroundColor),
                                            h = l.borderColor ? l.borderColor : u(o.borderColor, r, c.borderColor),
                                            f = l.borderWidth ? l.borderWidth : u(o.borderWidth, r, c.borderWidth);
                                        return {
                                            text: n,
                                            fillStyle: d,
                                            strokeStyle: h,
                                            lineWidth: f,
                                            hidden: isNaN(o.data[r]) || a.data[r].hidden,
                                            index: r
                                        }
                                    }) : []
                                }
                            },
                            onClick: function (e, t) {
                                var i, n, r, a = t.index,
                                    o = this.chart;
                                for (i = 0, n = (o.data.datasets || []).length; n > i; ++i) r = o.getDatasetMeta(i), r.data[a] && (r.data[a].hidden = !r.data[a].hidden);
                                o.update()
                            }
                        },
                        cutoutPercentage: 50,
                        rotation: Math.PI * -.5,
                        circumference: 2 * Math.PI,
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return ""
                                },
                                label: function (e, i) {
                                    var n = i.labels[e.index],
                                        r = ": " + i.datasets[e.datasetIndex].data[e.index];
                                    return t.isArray(n) ? (n = n.slice(), n[0] += r) : n += r, n
                                }
                            }
                        }
                    }, i.pie = t.clone(i.doughnut), t.extend(i.pie, {
                        cutoutPercentage: 0
                    }), e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                        dataElementType: e.elements.Arc,
                        linkScales: t.noop,
                        getRingIndex: function (e) {
                            for (var t = 0, i = 0; e > i; ++i) this.chart.isDatasetVisible(i) && ++t;
                            return t
                        },
                        update: function (e) {
                            var i = this,
                                n = i.chart,
                                r = n.chartArea,
                                a = n.options,
                                o = a.elements.arc,
                                s = r.right - r.left - o.borderWidth,
                                l = r.bottom - r.top - o.borderWidth,
                                u = Math.min(s, l),
                                c = {
                                    x: 0,
                                    y: 0
                                },
                                d = i.getMeta(),
                                h = a.cutoutPercentage,
                                f = a.circumference;
                            if (f < 2 * Math.PI) {
                                var p = a.rotation % (2 * Math.PI);
                                p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0);
                                var g = p + f,
                                    m = {
                                        x: Math.cos(p),
                                        y: Math.sin(p)
                                    },
                                    v = {
                                        x: Math.cos(g),
                                        y: Math.sin(g)
                                    },
                                    y = 0 >= p && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                    b = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                    _ = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                    x = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                    k = h / 100,
                                    w = {
                                        x: _ ? -1 : Math.min(m.x * (m.x < 0 ? 1 : k), v.x * (v.x < 0 ? 1 : k)),
                                        y: x ? -1 : Math.min(m.y * (m.y < 0 ? 1 : k), v.y * (v.y < 0 ? 1 : k))
                                    },
                                    S = {
                                        x: y ? 1 : Math.max(m.x * (m.x > 0 ? 1 : k), v.x * (v.x > 0 ? 1 : k)),
                                        y: b ? 1 : Math.max(m.y * (m.y > 0 ? 1 : k), v.y * (v.y > 0 ? 1 : k))
                                    },
                                    C = {
                                        width: .5 * (S.x - w.x),
                                        height: .5 * (S.y - w.y)
                                    };
                                u = Math.min(s / C.width, l / C.height), c = {
                                    x: (S.x + w.x) * -.5,
                                    y: (S.y + w.y) * -.5
                                }
                            }
                            n.borderWidth = i.getMaxBorderWidth(d.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = c.x * n.outerRadius, n.offsetY = c.y * n.outerRadius, d.total = i.calculateTotal(), i.outerRadius = n.outerRadius - n.radiusLength * i.getRingIndex(i.index), i.innerRadius = Math.max(i.outerRadius - n.radiusLength, 0), t.each(d.data, function (t, n) {
                                i.updateElement(t, n, e)
                            })
                        },
                        updateElement: function (e, i, n) {
                            var r = this,
                                a = r.chart,
                                o = a.chartArea,
                                s = a.options,
                                l = s.animation,
                                u = (o.left + o.right) / 2,
                                c = (o.top + o.bottom) / 2,
                                d = s.rotation,
                                h = s.rotation,
                                f = r.getDataset(),
                                p = n && l.animateRotate ? 0 : e.hidden ? 0 : r.calculateCircumference(f.data[i]) * (s.circumference / (2 * Math.PI)),
                                g = n && l.animateScale ? 0 : r.innerRadius,
                                m = n && l.animateScale ? 0 : r.outerRadius,
                                v = t.getValueAtIndexOrDefault;
                            t.extend(e, {
                                _datasetIndex: r.index,
                                _index: i,
                                _model: {
                                    x: u + a.offsetX,
                                    y: c + a.offsetY,
                                    startAngle: d,
                                    endAngle: h,
                                    circumference: p,
                                    outerRadius: m,
                                    innerRadius: g,
                                    label: v(f.label, i, a.data.labels[i])
                                }
                            });
                            var y = e._model;
                            this.removeHoverStyle(e), n && l.animateRotate || (y.startAngle = 0 === i ? s.rotation : r.getMeta().data[i - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), e.pivot()
                        },
                        removeHoverStyle: function (t) {
                            e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                        },
                        calculateTotal: function () {
                            var e, i = this.getDataset(),
                                n = this.getMeta(),
                                r = 0;
                            return t.each(n.data, function (t, n) {
                                e = i.data[n], isNaN(e) || t.hidden || (r += Math.abs(e))
                            }), r
                        },
                        calculateCircumference: function (e) {
                            var t = this.getMeta().total;
                            return t > 0 && !isNaN(e) ? 2 * Math.PI * (e / t) : 0
                        },
                        getMaxBorderWidth: function (e) {
                            for (var t, i, n = 0, r = this.index, a = e.length, o = 0; a > o; o++) t = e[o]._model ? e[o]._model.borderWidth : 0, i = e[o]._chart ? e[o]._chart.config.data.datasets[r].hoverBorderWidth : 0, n = t > n ? t : n, n = i > n ? i : n;
                            return n
                        }
                    })
                }
            }, {}],
            18: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(e, t) {
                        return i.getValueOrDefault(e.showLine, t.showLines)
                    }
                    var i = e.helpers;
                    e.defaults.line = {
                        showLines: !0,
                        spanGaps: !1,
                        hover: {
                            mode: "label"
                        },
                        scales: {
                            xAxes: [{
                                type: "category",
                                id: "x-axis-0"
                            }],
                            yAxes: [{
                                type: "linear",
                                id: "y-axis-0"
                            }]
                        }
                    }, e.controllers.line = e.DatasetController.extend({
                        datasetElementType: e.elements.Line,
                        dataElementType: e.elements.Point,
                        update: function (e) {
                            var n, r, a, o = this,
                                s = o.getMeta(),
                                l = s.dataset,
                                u = s.data || [],
                                c = o.chart.options,
                                d = c.elements.line,
                                h = o.getScaleForId(s.yAxisID),
                                f = o.getDataset(),
                                p = t(f, c);
                            for (p && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = o.index, l._children = u, l._model = {
                                    spanGaps: f.spanGaps ? f.spanGaps : c.spanGaps,
                                    tension: a.tension ? a.tension : i.getValueOrDefault(f.lineTension, d.tension),
                                    backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || d.backgroundColor,
                                    borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || d.borderWidth,
                                    borderColor: a.borderColor ? a.borderColor : f.borderColor || d.borderColor,
                                    borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || d.borderCapStyle,
                                    borderDash: a.borderDash ? a.borderDash : f.borderDash || d.borderDash,
                                    borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || d.borderDashOffset,
                                    borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || d.borderJoinStyle,
                                    fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : d.fill,
                                    steppedLine: a.steppedLine ? a.steppedLine : i.getValueOrDefault(f.steppedLine, d.stepped),
                                    cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : i.getValueOrDefault(f.cubicInterpolationMode, d.cubicInterpolationMode),
                                    scaleTop: h.top,
                                    scaleBottom: h.bottom,
                                    scaleZero: h.getBasePixel()
                                }, l.pivot()), n = 0, r = u.length; r > n; ++n) o.updateElement(u[n], n, e);
                            for (p && 0 !== l._model.tension && o.updateBezierControlPoints(), n = 0, r = u.length; r > n; ++n) u[n].pivot()
                        },
                        getPointBackgroundColor: function (e, t) {
                            var n = this.chart.options.elements.point.backgroundColor,
                                r = this.getDataset(),
                                a = e.custom || {};
                            return a.backgroundColor ? n = a.backgroundColor : r.pointBackgroundColor ? n = i.getValueAtIndexOrDefault(r.pointBackgroundColor, t, n) : r.backgroundColor && (n = r.backgroundColor), n
                        },
                        getPointBorderColor: function (e, t) {
                            var n = this.chart.options.elements.point.borderColor,
                                r = this.getDataset(),
                                a = e.custom || {};
                            return a.borderColor ? n = a.borderColor : r.pointBorderColor ? n = i.getValueAtIndexOrDefault(r.pointBorderColor, t, n) : r.borderColor && (n = r.borderColor), n
                        },
                        getPointBorderWidth: function (e, t) {
                            var n = this.chart.options.elements.point.borderWidth,
                                r = this.getDataset(),
                                a = e.custom || {};
                            return isNaN(a.borderWidth) ? isNaN(r.pointBorderWidth) ? isNaN(r.borderWidth) || (n = r.borderWidth) : n = i.getValueAtIndexOrDefault(r.pointBorderWidth, t, n) : n = a.borderWidth, n
                        },
                        updateElement: function (e, t, n) {
                            var r, a, o = this,
                                s = o.getMeta(),
                                l = e.custom || {},
                                u = o.getDataset(),
                                c = o.index,
                                d = u.data[t],
                                h = o.getScaleForId(s.yAxisID),
                                f = o.getScaleForId(s.xAxisID),
                                p = o.chart.options.elements.point,
                                g = o.chart.data.labels || [],
                                m = 1 === g.length || 1 === u.data.length || o.chart.isCombo;
                            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), r = f.getPixelForValue("object" == typeof d ? d : 0 / 0, t, c, m), a = n ? h.getBasePixel() : o.calculatePointY(d, t, c), e._xScale = f, e._yScale = h, e._datasetIndex = c, e._index = t, e._model = {
                                x: r,
                                y: a,
                                skip: l.skip || isNaN(r) || isNaN(a),
                                radius: l.radius || i.getValueAtIndexOrDefault(u.pointRadius, t, p.radius),
                                pointStyle: l.pointStyle || i.getValueAtIndexOrDefault(u.pointStyle, t, p.pointStyle),
                                backgroundColor: o.getPointBackgroundColor(e, t),
                                borderColor: o.getPointBorderColor(e, t),
                                borderWidth: o.getPointBorderWidth(e, t),
                                tension: s.dataset._model ? s.dataset._model.tension : 0,
                                steppedLine: s.dataset._model ? s.dataset._model.steppedLine : !1,
                                hitRadius: l.hitRadius || i.getValueAtIndexOrDefault(u.pointHitRadius, t, p.hitRadius)
                            }
                        },
                        calculatePointY: function (e, t, i) {
                            var n, r, a, o = this,
                                s = o.chart,
                                l = o.getMeta(),
                                u = o.getScaleForId(l.yAxisID),
                                c = 0,
                                d = 0;
                            if (u.options.stacked) {
                                for (n = 0; i > n; n++)
                                    if (r = s.data.datasets[n], a = s.getDatasetMeta(n), "line" === a.type && a.yAxisID === u.id && s.isDatasetVisible(n)) {
                                        var h = Number(u.getRightValue(r.data[t]));
                                        0 > h ? d += h || 0 : c += h || 0
                                    } var f = Number(u.getRightValue(e));
                                return u.getPixelForValue(0 > f ? d + f : c + f)
                            }
                            return u.getPixelForValue(e)
                        },
                        updateBezierControlPoints: function () {
                            function e(e, t, i) {
                                return Math.max(Math.min(e, i), t)
                            }
                            var t, n, r, a, o, s = this,
                                l = s.getMeta(),
                                u = s.chart.chartArea,
                                c = l.data || [];
                            if (l.dataset._model.spanGaps && (c = c.filter(function (e) {
                                    return !e._model.skip
                                })), "monotone" === l.dataset._model.cubicInterpolationMode) i.splineCurveMonotone(c);
                            else
                                for (t = 0, n = c.length; n > t; ++t) r = c[t], a = r._model, o = i.splineCurve(i.previousItem(c, t)._model, a, i.nextItem(c, t)._model, l.dataset._model.tension), a.controlPointPreviousX = o.previous.x, a.controlPointPreviousY = o.previous.y, a.controlPointNextX = o.next.x, a.controlPointNextY = o.next.y;
                            if (s.chart.options.elements.line.capBezierPoints)
                                for (t = 0, n = c.length; n > t; ++t) a = c[t]._model, a.controlPointPreviousX = e(a.controlPointPreviousX, u.left, u.right), a.controlPointPreviousY = e(a.controlPointPreviousY, u.top, u.bottom), a.controlPointNextX = e(a.controlPointNextX, u.left, u.right), a.controlPointNextY = e(a.controlPointNextY, u.top, u.bottom)
                        },
                        draw: function (i) {
                            var n, r, a = this,
                                o = a.getMeta(),
                                s = o.data || [],
                                l = i || 1;
                            for (n = 0, r = s.length; r > n; ++n) s[n].transition(l);
                            for (e.canvasHelpers.clipArea(a.chart.chart.ctx, a.chart.chartArea), t(a.getDataset(), a.chart.options) && o.dataset.transition(l).draw(), e.canvasHelpers.unclipArea(a.chart.chart.ctx), n = 0, r = s.length; r > n; ++n) s[n].draw(a.chart.chartArea)
                        },
                        setHoverStyle: function (e) {
                            var t = this.chart.data.datasets[e._datasetIndex],
                                n = e._index,
                                r = e.custom || {},
                                a = e._model;
                            a.radius = r.hoverRadius || i.getValueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = r.hoverBackgroundColor || i.getValueAtIndexOrDefault(t.pointHoverBackgroundColor, n, i.getHoverColor(a.backgroundColor)), a.borderColor = r.hoverBorderColor || i.getValueAtIndexOrDefault(t.pointHoverBorderColor, n, i.getHoverColor(a.borderColor)), a.borderWidth = r.hoverBorderWidth || i.getValueAtIndexOrDefault(t.pointHoverBorderWidth, n, a.borderWidth)
                        },
                        removeHoverStyle: function (e) {
                            var t = this,
                                n = t.chart.data.datasets[e._datasetIndex],
                                r = e._index,
                                a = e.custom || {},
                                o = e._model;
                            void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), o.radius = a.radius || i.getValueAtIndexOrDefault(n.pointRadius, r, t.chart.options.elements.point.radius), o.backgroundColor = t.getPointBackgroundColor(e, r), o.borderColor = t.getPointBorderColor(e, r), o.borderWidth = t.getPointBorderWidth(e, r)
                        }
                    })
                }
            }, {}],
            19: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers;
                    e.defaults.polarArea = {
                        scale: {
                            type: "radialLinear",
                            lineArc: !0,
                            ticks: {
                                beginAtZero: !0
                            }
                        },
                        animation: {
                            animateRotate: !0,
                            animateScale: !0
                        },
                        startAngle: -.5 * Math.PI,
                        aspectRatio: 1,
                        legendCallback: function (e) {
                            var t = [];
                            t.push('<ul class="' + e.id + '-legend">');
                            var i = e.data,
                                n = i.datasets,
                                r = i.labels;
                            if (n.length)
                                for (var a = 0; a < n[0].data.length; ++a) t.push('<li><span style="background-color:' + n[0].backgroundColor[a] + '"></span>'), r[a] && t.push(r[a]), t.push("</li>");
                            return t.push("</ul>"), t.join("")
                        },
                        legend: {
                            labels: {
                                generateLabels: function (e) {
                                    var i = e.data;
                                    return i.labels.length && i.datasets.length ? i.labels.map(function (n, r) {
                                        var a = e.getDatasetMeta(0),
                                            o = i.datasets[0],
                                            s = a.data[r],
                                            l = s.custom || {},
                                            u = t.getValueAtIndexOrDefault,
                                            c = e.options.elements.arc,
                                            d = l.backgroundColor ? l.backgroundColor : u(o.backgroundColor, r, c.backgroundColor),
                                            h = l.borderColor ? l.borderColor : u(o.borderColor, r, c.borderColor),
                                            f = l.borderWidth ? l.borderWidth : u(o.borderWidth, r, c.borderWidth);
                                        return {
                                            text: n,
                                            fillStyle: d,
                                            strokeStyle: h,
                                            lineWidth: f,
                                            hidden: isNaN(o.data[r]) || a.data[r].hidden,
                                            index: r
                                        }
                                    }) : []
                                }
                            },
                            onClick: function (e, t) {
                                var i, n, r, a = t.index,
                                    o = this.chart;
                                for (i = 0, n = (o.data.datasets || []).length; n > i; ++i) r = o.getDatasetMeta(i), r.data[a].hidden = !r.data[a].hidden;
                                o.update()
                            }
                        },
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return ""
                                },
                                label: function (e, t) {
                                    return t.labels[e.index] + ": " + e.yLabel
                                }
                            }
                        }
                    }, e.controllers.polarArea = e.DatasetController.extend({
                        dataElementType: e.elements.Arc,
                        linkScales: t.noop,
                        update: function (e) {
                            var i = this,
                                n = i.chart,
                                r = n.chartArea,
                                a = i.getMeta(),
                                o = n.options,
                                s = o.elements.arc,
                                l = Math.min(r.right - r.left, r.bottom - r.top);
                            n.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(o.cutoutPercentage ? n.outerRadius / 100 * o.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), i.outerRadius = n.outerRadius - n.radiusLength * i.index, i.innerRadius = i.outerRadius - n.radiusLength, a.count = i.countVisibleElements(), t.each(a.data, function (t, n) {
                                i.updateElement(t, n, e)
                            })
                        },
                        updateElement: function (e, i, n) {
                            for (var r = this, a = r.chart, o = r.getDataset(), s = a.options, l = s.animation, u = a.scale, c = t.getValueAtIndexOrDefault, d = a.data.labels, h = r.calculateCircumference(o.data[i]), f = u.xCenter, p = u.yCenter, g = 0, m = r.getMeta(), v = 0; i > v; ++v) isNaN(o.data[v]) || m.data[v].hidden || ++g;
                            var y = s.startAngle,
                                b = e.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[i]),
                                _ = y + h * g,
                                x = _ + (e.hidden ? 0 : h),
                                k = l.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[i]);
                            t.extend(e, {
                                _datasetIndex: r.index,
                                _index: i,
                                _scale: u,
                                _model: {
                                    x: f,
                                    y: p,
                                    innerRadius: 0,
                                    outerRadius: n ? k : b,
                                    startAngle: n && l.animateRotate ? y : _,
                                    endAngle: n && l.animateRotate ? y : x,
                                    label: c(d, i, d[i])
                                }
                            }), r.removeHoverStyle(e), e.pivot()
                        },
                        removeHoverStyle: function (t) {
                            e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                        },
                        countVisibleElements: function () {
                            var e = this.getDataset(),
                                i = this.getMeta(),
                                n = 0;
                            return t.each(i.data, function (t, i) {
                                isNaN(e.data[i]) || t.hidden || n++
                            }), n
                        },
                        calculateCircumference: function (e) {
                            var t = this.getMeta().count;
                            return t > 0 && !isNaN(e) ? 2 * Math.PI / t : 0
                        }
                    })
                }
            }, {}],
            20: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers;
                    e.defaults.radar = {
                        aspectRatio: 1,
                        scale: {
                            type: "radialLinear"
                        },
                        elements: {
                            line: {
                                tension: 0
                            }
                        }
                    }, e.controllers.radar = e.DatasetController.extend({
                        datasetElementType: e.elements.Line,
                        dataElementType: e.elements.Point,
                        linkScales: t.noop,
                        update: function (e) {
                            var i = this,
                                n = i.getMeta(),
                                r = n.dataset,
                                a = n.data,
                                o = r.custom || {},
                                s = i.getDataset(),
                                l = i.chart.options.elements.line,
                                u = i.chart.scale;
                            void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), t.extend(n.dataset, {
                                _datasetIndex: i.index,
                                _children: a,
                                _loop: !0,
                                _model: {
                                    tension: o.tension ? o.tension : t.getValueOrDefault(s.lineTension, l.tension),
                                    backgroundColor: o.backgroundColor ? o.backgroundColor : s.backgroundColor || l.backgroundColor,
                                    borderWidth: o.borderWidth ? o.borderWidth : s.borderWidth || l.borderWidth,
                                    borderColor: o.borderColor ? o.borderColor : s.borderColor || l.borderColor,
                                    fill: o.fill ? o.fill : void 0 !== s.fill ? s.fill : l.fill,
                                    borderCapStyle: o.borderCapStyle ? o.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                    borderDash: o.borderDash ? o.borderDash : s.borderDash || l.borderDash,
                                    borderDashOffset: o.borderDashOffset ? o.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                    borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle,
                                    scaleTop: u.top,
                                    scaleBottom: u.bottom,
                                    scaleZero: u.getBasePosition()
                                }
                            }), n.dataset.pivot(), t.each(a, function (t, n) {
                                i.updateElement(t, n, e)
                            }, i), i.updateBezierControlPoints()
                        },
                        updateElement: function (e, i, n) {
                            var r = this,
                                a = e.custom || {},
                                o = r.getDataset(),
                                s = r.chart.scale,
                                l = r.chart.options.elements.point,
                                u = s.getPointPositionForValue(i, o.data[i]);
                            t.extend(e, {
                                _datasetIndex: r.index,
                                _index: i,
                                _scale: s,
                                _model: {
                                    x: n ? s.xCenter : u.x,
                                    y: n ? s.yCenter : u.y,
                                    tension: a.tension ? a.tension : t.getValueOrDefault(o.lineTension, r.chart.options.elements.line.tension),
                                    radius: a.radius ? a.radius : t.getValueAtIndexOrDefault(o.pointRadius, i, l.radius),
                                    backgroundColor: a.backgroundColor ? a.backgroundColor : t.getValueAtIndexOrDefault(o.pointBackgroundColor, i, l.backgroundColor),
                                    borderColor: a.borderColor ? a.borderColor : t.getValueAtIndexOrDefault(o.pointBorderColor, i, l.borderColor),
                                    borderWidth: a.borderWidth ? a.borderWidth : t.getValueAtIndexOrDefault(o.pointBorderWidth, i, l.borderWidth),
                                    pointStyle: a.pointStyle ? a.pointStyle : t.getValueAtIndexOrDefault(o.pointStyle, i, l.pointStyle),
                                    hitRadius: a.hitRadius ? a.hitRadius : t.getValueAtIndexOrDefault(o.hitRadius, i, l.hitRadius)
                                }
                            }), e._model.skip = a.skip ? a.skip : isNaN(e._model.x) || isNaN(e._model.y)
                        },
                        updateBezierControlPoints: function () {
                            var e = this.chart.chartArea,
                                i = this.getMeta();
                            t.each(i.data, function (n, r) {
                                var a = n._model,
                                    o = t.splineCurve(t.previousItem(i.data, r, !0)._model, a, t.nextItem(i.data, r, !0)._model, a.tension);
                                a.controlPointPreviousX = Math.max(Math.min(o.previous.x, e.right), e.left), a.controlPointPreviousY = Math.max(Math.min(o.previous.y, e.bottom), e.top), a.controlPointNextX = Math.max(Math.min(o.next.x, e.right), e.left), a.controlPointNextY = Math.max(Math.min(o.next.y, e.bottom), e.top), n.pivot()
                            })
                        },
                        draw: function (e) {
                            var i = this.getMeta(),
                                n = e || 1;
                            t.each(i.data, function (e) {
                                e.transition(n)
                            }), i.dataset.transition(n).draw(), t.each(i.data, function (e) {
                                e.draw()
                            })
                        },
                        setHoverStyle: function (e) {
                            var i = this.chart.data.datasets[e._datasetIndex],
                                n = e.custom || {},
                                r = e._index,
                                a = e._model;
                            a.radius = n.hoverRadius ? n.hoverRadius : t.getValueAtIndexOrDefault(i.pointHoverRadius, r, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : t.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, r, t.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : t.getValueAtIndexOrDefault(i.pointHoverBorderColor, r, t.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : t.getValueAtIndexOrDefault(i.pointHoverBorderWidth, r, a.borderWidth)
                        },
                        removeHoverStyle: function (e) {
                            var i = this.chart.data.datasets[e._datasetIndex],
                                n = e.custom || {},
                                r = e._index,
                                a = e._model,
                                o = this.chart.options.elements.point;
                            a.radius = n.radius ? n.radius : t.getValueAtIndexOrDefault(i.radius, r, o.radius), a.backgroundColor = n.backgroundColor ? n.backgroundColor : t.getValueAtIndexOrDefault(i.pointBackgroundColor, r, o.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : t.getValueAtIndexOrDefault(i.pointBorderColor, r, o.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : t.getValueAtIndexOrDefault(i.pointBorderWidth, r, o.borderWidth)
                        }
                    })
                }
            }, {}],
            21: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers;
                    e.defaults.global.animation = {
                        duration: 1e3,
                        easing: "easeOutQuart",
                        onProgress: t.noop,
                        onComplete: t.noop
                    }, e.Animation = e.Element.extend({
                        currentStep: null,
                        numSteps: 60,
                        easing: "",
                        render: null,
                        onAnimationProgress: null,
                        onAnimationComplete: null
                    }), e.animationService = {
                        frameDuration: 17,
                        animations: [],
                        dropFrames: 0,
                        request: null,
                        addAnimation: function (e, t, i, n) {
                            var r = this;
                            n || (e.animating = !0);
                            for (var a = 0; a < r.animations.length; ++a)
                                if (r.animations[a].chartInstance === e) return void(r.animations[a].animationObject = t);
                            r.animations.push({
                                chartInstance: e,
                                animationObject: t
                            }), 1 === r.animations.length && r.requestAnimationFrame()
                        },
                        cancelAnimation: function (e) {
                            var i = t.findIndex(this.animations, function (t) {
                                return t.chartInstance === e
                            }); - 1 !== i && (this.animations.splice(i, 1), e.animating = !1)
                        },
                        requestAnimationFrame: function () {
                            var e = this;
                            null === e.request && (e.request = t.requestAnimFrame.call(window, function () {
                                e.request = null, e.startDigest()
                            }))
                        },
                        startDigest: function () {
                            var e = this,
                                t = Date.now(),
                                i = 0;
                            e.dropFrames > 1 && (i = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1);
                            for (var n = 0; n < e.animations.length;) null === e.animations[n].animationObject.currentStep && (e.animations[n].animationObject.currentStep = 0), e.animations[n].animationObject.currentStep += 1 + i, e.animations[n].animationObject.currentStep > e.animations[n].animationObject.numSteps && (e.animations[n].animationObject.currentStep = e.animations[n].animationObject.numSteps), e.animations[n].animationObject.render(e.animations[n].chartInstance, e.animations[n].animationObject), e.animations[n].animationObject.onAnimationProgress && e.animations[n].animationObject.onAnimationProgress.call && e.animations[n].animationObject.onAnimationProgress.call(e.animations[n].chartInstance, e.animations[n]), e.animations[n].animationObject.currentStep === e.animations[n].animationObject.numSteps ? (e.animations[n].animationObject.onAnimationComplete && e.animations[n].animationObject.onAnimationComplete.call && e.animations[n].animationObject.onAnimationComplete.call(e.animations[n].chartInstance, e.animations[n]), e.animations[n].chartInstance.animating = !1, e.animations.splice(n, 1)) : ++n;
                            var r = Date.now(),
                                a = (r - t) / e.frameDuration;
                            e.dropFrames += a, e.animations.length > 0 && e.requestAnimationFrame()
                        }
                    }
                }
            }, {}],
            22: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.canvasHelpers = {};
                    t.drawPoint = function (t, i, n, r, a) {
                        var o, s, l, u, c, d;
                        if ("object" == typeof i && (o = i.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return void t.drawImage(i, r - i.width / 2, a - i.height / 2);
                        if (!(isNaN(n) || 0 >= n)) {
                            switch (i) {
                                default:
                                    t.beginPath(), t.arc(r, a, n, 0, 2 * Math.PI), t.closePath(), t.fill();
                                    break;
                                case "triangle":
                                    t.beginPath(), s = 3 * n / Math.sqrt(3), c = s * Math.sqrt(3) / 2, t.moveTo(r - s / 2, a + c / 3), t.lineTo(r + s / 2, a + c / 3), t.lineTo(r, a - 2 * c / 3), t.closePath(), t.fill();
                                    break;
                                case "rect":
                                    d = 1 / Math.SQRT2 * n, t.beginPath(), t.fillRect(r - d, a - d, 2 * d, 2 * d), t.strokeRect(r - d, a - d, 2 * d, 2 * d);
                                    break;
                                case "rectRounded":
                                    var h = n / Math.SQRT2,
                                        f = r - h,
                                        p = a - h,
                                        g = Math.SQRT2 * n;
                                    e.helpers.drawRoundedRectangle(t, f, p, g, g, n / 2), t.fill();
                                    break;
                                case "rectRot":
                                    d = 1 / Math.SQRT2 * n, t.beginPath(), t.moveTo(r - d, a), t.lineTo(r, a + d), t.lineTo(r + d, a), t.lineTo(r, a - d), t.closePath(), t.fill();
                                    break;
                                case "cross":
                                    t.beginPath(), t.moveTo(r, a + n), t.lineTo(r, a - n), t.moveTo(r - n, a), t.lineTo(r + n, a), t.closePath();
                                    break;
                                case "crossRot":
                                    t.beginPath(), l = Math.cos(Math.PI / 4) * n, u = Math.sin(Math.PI / 4) * n, t.moveTo(r - l, a - u), t.lineTo(r + l, a + u), t.moveTo(r - l, a + u), t.lineTo(r + l, a - u), t.closePath();
                                    break;
                                case "star":
                                    t.beginPath(), t.moveTo(r, a + n), t.lineTo(r, a - n), t.moveTo(r - n, a), t.lineTo(r + n, a), l = Math.cos(Math.PI / 4) * n, u = Math.sin(Math.PI / 4) * n, t.moveTo(r - l, a - u), t.lineTo(r + l, a + u), t.moveTo(r - l, a + u), t.lineTo(r + l, a - u), t.closePath();
                                    break;
                                case "line":
                                    t.beginPath(), t.moveTo(r - n, a), t.lineTo(r + n, a), t.closePath();
                                    break;
                                case "dash":
                                    t.beginPath(), t.moveTo(r, a), t.lineTo(r + n, a), t.closePath()
                            }
                            t.stroke()
                        }
                    }, t.clipArea = function (e, t) {
                        e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
                    }, t.unclipArea = function (e) {
                        e.restore()
                    }
                }
            }, {}],
            23: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(t) {
                        t = t || {};
                        var i = t.data = t.data || {};
                        return i.datasets = i.datasets || [], i.labels = i.labels || [], t.options = n.configMerge(e.defaults.global, e.defaults[t.type], t.options || {}), t
                    }

                    function i(e) {
                        var t = e.options;
                        t.scale ? e.scale.options = t.scale : t.scales && t.scales.xAxes.concat(t.scales.yAxes).forEach(function (t) {
                            e.scales[t.id].options = t
                        }), e.tooltip._options = t.tooltips
                    }
                    var n = e.helpers,
                        r = e.plugins,
                        a = e.platform;
                    e.types = {}, e.instances = {}, e.controllers = {}, e.Controller = function (i, r, o) {
                        var s = this;
                        r = t(r);
                        var l = a.acquireContext(i, r),
                            u = l && l.canvas,
                            c = u && u.height,
                            d = u && u.width;
                        return o.ctx = l, o.canvas = u, o.config = r, o.width = d, o.height = c, o.aspectRatio = c ? d / c : null, s.id = n.uid(), s.chart = o, s.config = r, s.options = r.options, s._bufferedRender = !1, e.instances[s.id] = s, Object.defineProperty(s, "data", {
                            get: function () {
                                return s.config.data
                            }
                        }), l && u ? (s.initialize(), s.update(), s) : (console.error("Failed to create chart: can't acquire context from the given item"), s)
                    }, n.extend(e.Controller.prototype, {
                        initialize: function () {
                            var e = this;
                            return r.notify(e, "beforeInit"), n.retinaScale(e.chart), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildScales(), e.initToolTip(), r.notify(e, "afterInit"), e
                        },
                        clear: function () {
                            return n.clear(this.chart), this
                        },
                        stop: function () {
                            return e.animationService.cancelAnimation(this), this
                        },
                        resize: function (e) {
                            var t = this,
                                i = t.chart,
                                a = t.options,
                                o = i.canvas,
                                s = a.maintainAspectRatio && i.aspectRatio || null,
                                l = Math.floor(n.getMaximumWidth(o)),
                                u = Math.floor(s ? l / s : n.getMaximumHeight(o));
                            if ((i.width !== l || i.height !== u) && (o.width = i.width = l, o.height = i.height = u, o.style.width = l + "px", o.style.height = u + "px", n.retinaScale(i), !e)) {
                                var c = {
                                    width: l,
                                    height: u
                                };
                                r.notify(t, "resize", [c]), t.options.onResize && t.options.onResize(t, c), t.stop(), t.update(t.options.responsiveAnimationDuration)
                            }
                        },
                        ensureScalesHaveIDs: function () {
                            var e = this.options,
                                t = e.scales || {},
                                i = e.scale;
                            n.each(t.xAxes, function (e, t) {
                                e.id = e.id || "x-axis-" + t
                            }), n.each(t.yAxes, function (e, t) {
                                e.id = e.id || "y-axis-" + t
                            }), i && (i.id = i.id || "scale")
                        },
                        buildScales: function () {
                            var t = this,
                                i = t.options,
                                r = t.scales = {},
                                a = [];
                            i.scales && (a = a.concat((i.scales.xAxes || []).map(function (e) {
                                return {
                                    options: e,
                                    dtype: "category"
                                }
                            }), (i.scales.yAxes || []).map(function (e) {
                                return {
                                    options: e,
                                    dtype: "linear"
                                }
                            }))), i.scale && a.push({
                                options: i.scale,
                                dtype: "radialLinear",
                                isDefault: !0
                            }), n.each(a, function (i) {
                                var a = i.options,
                                    o = n.getValueOrDefault(a.type, i.dtype),
                                    s = e.scaleService.getScaleConstructor(o);
                                if (s) {
                                    var l = new s({
                                        id: a.id,
                                        options: a,
                                        ctx: t.chart.ctx,
                                        chart: t
                                    });
                                    r[l.id] = l, i.isDefault && (t.scale = l)
                                }
                            }), e.scaleService.addScalesToLayout(this)
                        },
                        buildOrUpdateControllers: function () {
                            var t = this,
                                i = [],
                                r = [];
                            if (n.each(t.data.datasets, function (n, a) {
                                    var o = t.getDatasetMeta(a);
                                    o.type || (o.type = n.type || t.config.type), i.push(o.type), o.controller ? o.controller.updateIndex(a) : (o.controller = new e.controllers[o.type](t, a), r.push(o.controller))
                                }, t), i.length > 1)
                                for (var a = 1; a < i.length; a++)
                                    if (i[a] !== i[a - 1]) {
                                        t.isCombo = !0;
                                        break
                                    } return r
                        },
                        resetElements: function () {
                            var e = this;
                            n.each(e.data.datasets, function (t, i) {
                                e.getDatasetMeta(i).controller.reset()
                            }, e)
                        },
                        reset: function () {
                            this.resetElements(), this.tooltip.initialize()
                        },
                        update: function (e, t) {
                            var a = this;
                            if (i(a), r.notify(a, "beforeUpdate") !== !1) {
                                a.tooltip._data = a.data;
                                var o = a.buildOrUpdateControllers();
                                n.each(a.data.datasets, function (e, t) {
                                    a.getDatasetMeta(t).controller.buildOrUpdateElements()
                                }, a), a.updateLayout(), n.each(o, function (e) {
                                    e.reset()
                                }), a.updateDatasets(), r.notify(a, "afterUpdate"), a._bufferedRender ? a._bufferedRequest = {
                                    lazy: t,
                                    duration: e
                                } : a.render(e, t)
                            }
                        },
                        updateLayout: function () {
                            var t = this;
                            r.notify(t, "beforeLayout") !== !1 && (e.layoutService.update(this, this.chart.width, this.chart.height), r.notify(t, "afterScaleUpdate"), r.notify(t, "afterLayout"))
                        },
                        updateDatasets: function () {
                            var e = this;
                            if (r.notify(e, "beforeDatasetsUpdate") !== !1) {
                                for (var t = 0, i = e.data.datasets.length; i > t; ++t) e.getDatasetMeta(t).controller.update();
                                r.notify(e, "afterDatasetsUpdate")
                            }
                        },
                        render: function (t, i) {
                            var a = this;
                            if (r.notify(a, "beforeRender") !== !1) {
                                var o = a.options.animation,
                                    s = function () {
                                        r.notify(a, "afterRender");
                                        var e = o && o.onComplete;
                                        e && e.call && e.call(a)
                                    };
                                if (o && ("undefined" != typeof t && 0 !== t || "undefined" == typeof t && 0 !== o.duration)) {
                                    var l = new e.Animation;
                                    l.numSteps = (t || o.duration) / 16.66, l.easing = o.easing, l.render = function (e, t) {
                                        var i = n.easingEffects[t.easing],
                                            r = t.currentStep / t.numSteps,
                                            a = i(r);
                                        e.draw(a, r, t.currentStep)
                                    }, l.onAnimationProgress = o.onProgress, l.onAnimationComplete = s, e.animationService.addAnimation(a, l, t, i)
                                } else a.draw(), s();
                                return a
                            }
                        },
                        draw: function (e) {
                            var t = this;
                            t.clear(), (void 0 === e || null === e) && (e = 1), r.notify(t, "beforeDraw", [e]) !== !1 && (n.each(t.boxes, function (e) {
                                e.draw(t.chartArea)
                            }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t.tooltip.transition(e).draw(), r.notify(t, "afterDraw", [e]))
                        },
                        drawDatasets: function (e) {
                            var t = this;
                            r.notify(t, "beforeDatasetsDraw", [e]) !== !1 && (n.each(t.data.datasets, function (i, n) {
                                t.isDatasetVisible(n) && t.getDatasetMeta(n).controller.draw(e)
                            }, t, !0), r.notify(t, "afterDatasetsDraw", [e]))
                        },
                        getElementAtEvent: function (t) {
                            return e.Interaction.modes.single(this, t)
                        },
                        getElementsAtEvent: function (t) {
                            return e.Interaction.modes.label(this, t, {
                                intersect: !0
                            })
                        },
                        getElementsAtXAxis: function (t) {
                            return e.Interaction.modes["x-axis"](this, t, {
                                intersect: !0
                            })
                        },
                        getElementsAtEventForMode: function (t, i, n) {
                            var r = e.Interaction.modes[i];
                            return "function" == typeof r ? r(this, t, n) : []
                        },
                        getDatasetAtEvent: function (t) {
                            return e.Interaction.modes.dataset(this, t, {
                                intersect: !0
                            })
                        },
                        getDatasetMeta: function (e) {
                            var t = this,
                                i = t.data.datasets[e];
                            i._meta || (i._meta = {});
                            var n = i._meta[t.id];
                            return n || (n = i._meta[t.id] = {
                                type: null,
                                data: [],
                                dataset: null,
                                controller: null,
                                hidden: null,
                                xAxisID: null,
                                yAxisID: null
                            }), n
                        },
                        getVisibleDatasetCount: function () {
                            for (var e = 0, t = 0, i = this.data.datasets.length; i > t; ++t) this.isDatasetVisible(t) && e++;
                            return e
                        },
                        isDatasetVisible: function (e) {
                            var t = this.getDatasetMeta(e);
                            return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
                        },
                        generateLegend: function () {
                            return this.options.legendCallback(this)
                        },
                        destroy: function () {
                            var t, i, o, s = this,
                                l = s.chart.canvas;
                            for (s.stop(), i = 0, o = s.data.datasets.length; o > i; ++i) t = s.getDatasetMeta(i), t.controller && (t.controller.destroy(), t.controller = null);
                            l && (s.unbindEvents(), n.clear(s.chart), a.releaseContext(s.chart.ctx), s.chart.canvas = null, s.chart.ctx = null), r.notify(s, "destroy"), delete e.instances[s.id]
                        },
                        toBase64Image: function () {
                            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                        },
                        initToolTip: function () {
                            var t = this;
                            t.tooltip = new e.Tooltip({
                                _chart: t.chart,
                                _chartInstance: t,
                                _data: t.data,
                                _options: t.options.tooltips
                            }, t), t.tooltip.initialize()
                        },
                        bindEvents: function () {
                            var e = this,
                                t = e._listeners = {},
                                i = function () {
                                    e.eventHandler.apply(e, arguments)
                                };
                            n.each(e.options.events, function (n) {
                                a.addEventListener(e, n, i), t[n] = i
                            }), e.options.responsive && (i = function () {
                                e.resize()
                            }, a.addEventListener(e, "resize", i), t.resize = i)
                        },
                        unbindEvents: function () {
                            var e = this,
                                t = e._listeners;
                            t && (delete e._listeners, n.each(t, function (t, i) {
                                a.removeEventListener(e, i, t)
                            }))
                        },
                        updateHoverStyle: function (e, t, i) {
                            var n, r, a, o = i ? "setHoverStyle" : "removeHoverStyle";
                            for (r = 0, a = e.length; a > r; ++r) n = e[r], n && this.getDatasetMeta(n._datasetIndex).controller[o](n)
                        },
                        eventHandler: function (e) {
                            var t = this,
                                i = t.tooltip;
                            if (r.notify(t, "beforeEvent", [e]) !== !1) {
                                t._bufferedRender = !0, t._bufferedRequest = null;
                                var n = t.handleEvent(e);
                                n |= i && i.handleEvent(e), r.notify(t, "afterEvent", [e]);
                                var a = t._bufferedRequest;
                                return a ? t.render(a.duration, a.lazy) : n && !t.animating && (t.stop(), t.render(t.options.hover.animationDuration, !0)), t._bufferedRender = !1, t._bufferedRequest = null, t
                            }
                        },
                        handleEvent: function (e) {
                            var t = this,
                                i = t.options || {},
                                r = i.hover,
                                a = !1;
                            return t.lastActive = t.lastActive || [], t.active = "mouseout" === e.type ? [] : t.getElementsAtEventForMode(e, r.mode, r), r.onHover && r.onHover.call(t, e.native, t.active), ("mouseup" === e.type || "click" === e.type) && i.onClick && i.onClick.call(t, e.native, t.active), t.lastActive.length && t.updateHoverStyle(t.lastActive, r.mode, !1), t.active.length && r.mode && t.updateHoverStyle(t.active, r.mode, !0), a = !n.arrayEquals(t.active, t.lastActive), t.lastActive = t.active, a
                        }
                    })
                }
            }, {}],
            24: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(e, t) {
                        return e._chartjs ? void e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [t]
                            }
                        }), void r.forEach(function (t) {
                            var i = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                                r = e[t];
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                enumerable: !1,
                                value: function () {
                                    var t = Array.prototype.slice.call(arguments),
                                        a = r.apply(this, t);
                                    return n.each(e._chartjs.listeners, function (e) {
                                        "function" == typeof e[i] && e[i].apply(e, t)
                                    }), a
                                }
                            })
                        }))
                    }

                    function i(e, t) {
                        var i = e._chartjs;
                        if (i) {
                            var n = i.listeners,
                                a = n.indexOf(t); - 1 !== a && n.splice(a, 1), n.length > 0 || (r.forEach(function (t) {
                                delete e[t]
                            }), delete e._chartjs)
                        }
                    }
                    var n = e.helpers,
                        r = ["push", "pop", "shift", "splice", "unshift"];
                    e.DatasetController = function (e, t) {
                        this.initialize(e, t)
                    }, n.extend(e.DatasetController.prototype, {
                        datasetElementType: null,
                        dataElementType: null,
                        initialize: function (e, t) {
                            var i = this;
                            i.chart = e, i.index = t, i.linkScales(), i.addElements()
                        },
                        updateIndex: function (e) {
                            this.index = e
                        },
                        linkScales: function () {
                            var e = this,
                                t = e.getMeta(),
                                i = e.getDataset();
                            null === t.xAxisID && (t.xAxisID = i.xAxisID || e.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = i.yAxisID || e.chart.options.scales.yAxes[0].id)
                        },
                        getDataset: function () {
                            return this.chart.data.datasets[this.index]
                        },
                        getMeta: function () {
                            return this.chart.getDatasetMeta(this.index)
                        },
                        getScaleForId: function (e) {
                            return this.chart.scales[e]
                        },
                        reset: function () {
                            this.update(!0)
                        },
                        destroy: function () {
                            this._data && i(this._data, this)
                        },
                        createMetaDataset: function () {
                            var e = this,
                                t = e.datasetElementType;
                            return t && new t({
                                _chart: e.chart.chart,
                                _datasetIndex: e.index
                            })
                        },
                        createMetaData: function (e) {
                            var t = this,
                                i = t.dataElementType;
                            return i && new i({
                                _chart: t.chart.chart,
                                _datasetIndex: t.index,
                                _index: e
                            })
                        },
                        addElements: function () {
                            var e, t, i = this,
                                n = i.getMeta(),
                                r = i.getDataset().data || [],
                                a = n.data;
                            for (e = 0, t = r.length; t > e; ++e) a[e] = a[e] || i.createMetaData(e);
                            n.dataset = n.dataset || i.createMetaDataset()
                        },
                        addElementAndReset: function (e) {
                            var t = this.createMetaData(e);
                            this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                        },
                        buildOrUpdateElements: function () {
                            var e = this,
                                n = e.getDataset(),
                                r = n.data || (n.data = []);
                            e._data !== r && (e._data && i(e._data, e), t(r, e), e._data = r), e.resyncElements()
                        },
                        update: n.noop,
                        draw: function (e) {
                            var t, i, n = e || 1,
                                r = this.getMeta().data;
                            for (t = 0, i = r.length; i > t; ++t) r[t].transition(n).draw()
                        },
                        removeHoverStyle: function (e, t) {
                            var i = this.chart.data.datasets[e._datasetIndex],
                                r = e._index,
                                a = e.custom || {},
                                o = n.getValueAtIndexOrDefault,
                                s = e._model;
                            s.backgroundColor = a.backgroundColor ? a.backgroundColor : o(i.backgroundColor, r, t.backgroundColor), s.borderColor = a.borderColor ? a.borderColor : o(i.borderColor, r, t.borderColor), s.borderWidth = a.borderWidth ? a.borderWidth : o(i.borderWidth, r, t.borderWidth)
                        },
                        setHoverStyle: function (e) {
                            var t = this.chart.data.datasets[e._datasetIndex],
                                i = e._index,
                                r = e.custom || {},
                                a = n.getValueAtIndexOrDefault,
                                o = n.getHoverColor,
                                s = e._model;
                            s.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : a(t.hoverBackgroundColor, i, o(s.backgroundColor)), s.borderColor = r.hoverBorderColor ? r.hoverBorderColor : a(t.hoverBorderColor, i, o(s.borderColor)), s.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : a(t.hoverBorderWidth, i, s.borderWidth)
                        },
                        resyncElements: function () {
                            var e = this,
                                t = e.getMeta(),
                                i = e.getDataset().data,
                                n = t.data.length,
                                r = i.length;
                            n > r ? t.data.splice(r, n - r) : r > n && e.insertElements(n, r - n)
                        },
                        insertElements: function (e, t) {
                            for (var i = 0; t > i; ++i) this.addElementAndReset(e + i)
                        },
                        onDataPush: function () {
                            this.insertElements(this.getDataset().data.length - 1, arguments.length)
                        },
                        onDataPop: function () {
                            this.getMeta().data.pop()
                        },
                        onDataShift: function () {
                            this.getMeta().data.shift()
                        },
                        onDataSplice: function (e, t) {
                            this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
                        },
                        onDataUnshift: function () {
                            this.insertElements(0, arguments.length)
                        }
                    }), e.DatasetController.extend = n.inherits
                }
            }, {}],
            25: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers;
                    e.elements = {}, e.Element = function (e) {
                        t.extend(this, e), this.initialize.apply(this, arguments)
                    }, t.extend(e.Element.prototype, {
                        initialize: function () {
                            this.hidden = !1
                        },
                        pivot: function () {
                            var e = this;
                            return e._view || (e._view = t.clone(e._model)), e._start = t.clone(e._view), e
                        },
                        transition: function (e) {
                            var i = this;
                            return i._view || (i._view = t.clone(i._model)), 1 === e ? (i._view = i._model, i._start = null, i) : (i._start || i.pivot(), t.each(i._model, function (n, r) {
                                if ("_" === r[0]);
                                else if (i._view.hasOwnProperty(r))
                                    if (n === i._view[r]);
                                    else if ("string" == typeof n) try {
                                    var a = t.color(i._model[r]).mix(t.color(i._start[r]), e);
                                    i._view[r] = a.rgbString()
                                } catch (o) {
                                    i._view[r] = n
                                } else if ("number" == typeof n) {
                                    var s = void 0 !== i._start[r] && isNaN(i._start[r]) === !1 ? i._start[r] : 0;
                                    i._view[r] = (i._model[r] - s) * e + s
                                } else i._view[r] = n;
                                else i._view[r] = "number" != typeof n || isNaN(i._view[r]) ? n : n * e
                            }, i), i)
                        },
                        tooltipPosition: function () {
                            return {
                                x: this._model.x,
                                y: this._model.y
                            }
                        },
                        hasValue: function () {
                            return t.isNumber(this._model.x) && t.isNumber(this._model.y)
                        }
                    }), e.Element.extend = t.inherits
                }
            }, {}],
            26: [function (e, t) {
                "use strict";
                var i = e(2);
                t.exports = function (e) {
                    function t(e, t, i) {
                        var n;
                        return "string" == typeof e ? (n = parseInt(e, 10), -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[i])) : n = e, n
                    }

                    function n(e) {
                        return void 0 !== e && null !== e && "none" !== e
                    }

                    function r(e, i, r) {
                        var a = document.defaultView,
                            o = e.parentNode,
                            s = a.getComputedStyle(e)[i],
                            l = a.getComputedStyle(o)[i],
                            u = n(s),
                            c = n(l),
                            d = Number.POSITIVE_INFINITY;
                        return u || c ? Math.min(u ? t(s, e, r) : d, c ? t(l, o, r) : d) : "none"
                    }
                    var a = e.helpers = {};
                    a.each = function (e, t, i, n) {
                        var r, o;
                        if (a.isArray(e))
                            if (o = e.length, n)
                                for (r = o - 1; r >= 0; r--) t.call(i, e[r], r);
                            else
                                for (r = 0; o > r; r++) t.call(i, e[r], r);
                        else if ("object" == typeof e) {
                            var s = Object.keys(e);
                            for (o = s.length, r = 0; o > r; r++) t.call(i, e[s[r]], s[r])
                        }
                    }, a.clone = function (e) {
                        var t = {};
                        return a.each(e, function (e, i) {
                            t[i] = a.isArray(e) ? e.slice(0) : "object" == typeof e && null !== e ? a.clone(e) : e
                        }), t
                    }, a.extend = function (e) {
                        for (var t = function (t, i) {
                                e[i] = t
                            }, i = 1, n = arguments.length; n > i; i++) a.each(arguments[i], t);
                        return e
                    }, a.configMerge = function (t) {
                        var i = a.clone(t);
                        return a.each(Array.prototype.slice.call(arguments, 1), function (t) {
                            a.each(t, function (t, n) {
                                var r = i.hasOwnProperty(n),
                                    o = r ? i[n] : {};
                                i[n] = "scales" === n ? a.scaleMerge(o, t) : "scale" === n ? a.configMerge(o, e.scaleService.getScaleDefaults(t.type), t) : !r || "object" != typeof o || a.isArray(o) || null === o || "object" != typeof t || a.isArray(t) ? t : a.configMerge(o, t)
                            })
                        }), i
                    }, a.scaleMerge = function (t, i) {
                        var n = a.clone(t);
                        return a.each(i, function (t, i) {
                            "xAxes" === i || "yAxes" === i ? n.hasOwnProperty(i) ? a.each(t, function (t, r) {
                                var o = a.getValueOrDefault(t.type, "xAxes" === i ? "category" : "linear"),
                                    s = e.scaleService.getScaleDefaults(o);
                                r >= n[i].length || !n[i][r].type ? n[i].push(a.configMerge(s, t)) : n[i][r] = t.type && t.type !== n[i][r].type ? a.configMerge(n[i][r], s, t) : a.configMerge(n[i][r], t)
                            }) : (n[i] = [], a.each(t, function (t) {
                                var r = a.getValueOrDefault(t.type, "xAxes" === i ? "category" : "linear");
                                n[i].push(a.configMerge(e.scaleService.getScaleDefaults(r), t))
                            })) : n[i] = n.hasOwnProperty(i) && "object" == typeof n[i] && null !== n[i] && "object" == typeof t ? a.configMerge(n[i], t) : t
                        }), n
                    }, a.getValueAtIndexOrDefault = function (e, t, i) {
                        return void 0 === e || null === e ? i : a.isArray(e) ? t < e.length ? e[t] : i : e
                    }, a.getValueOrDefault = function (e, t) {
                        return void 0 === e ? t : e
                    }, a.indexOf = Array.prototype.indexOf ? function (e, t) {
                        return e.indexOf(t)
                    } : function (e, t) {
                        for (var i = 0, n = e.length; n > i; ++i)
                            if (e[i] === t) return i;
                        return -1
                    }, a.where = function (e, t) {
                        if (a.isArray(e) && Array.prototype.filter) return e.filter(t);
                        var i = [];
                        return a.each(e, function (e) {
                            t(e) && i.push(e)
                        }), i
                    }, a.findIndex = Array.prototype.findIndex ? function (e, t, i) {
                        return e.findIndex(t, i)
                    } : function (e, t, i) {
                        i = void 0 === i ? e : i;
                        for (var n = 0, r = e.length; r > n; ++n)
                            if (t.call(i, e[n], n, e)) return n;
                        return -1
                    }, a.findNextWhere = function (e, t, i) {
                        (void 0 === i || null === i) && (i = -1);
                        for (var n = i + 1; n < e.length; n++) {
                            var r = e[n];
                            if (t(r)) return r
                        }
                    }, a.findPreviousWhere = function (e, t, i) {
                        (void 0 === i || null === i) && (i = e.length);
                        for (var n = i - 1; n >= 0; n--) {
                            var r = e[n];
                            if (t(r)) return r
                        }
                    }, a.inherits = function (e) {
                        var t = this,
                            i = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
                                return t.apply(this, arguments)
                            },
                            n = function () {
                                this.constructor = i
                            };
                        return n.prototype = t.prototype, i.prototype = new n, i.extend = a.inherits, e && a.extend(i.prototype, e), i.__super__ = t.prototype, i
                    }, a.noop = function () {}, a.uid = function () {
                        var e = 0;
                        return function () {
                            return e++
                        }
                    }(), a.isNumber = function (e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }, a.almostEquals = function (e, t, i) {
                        return Math.abs(e - t) < i
                    }, a.almostWhole = function (e, t) {
                        var i = Math.round(e);
                        return e > i - t && i + t > e
                    }, a.max = function (e) {
                        return e.reduce(function (e, t) {
                            return isNaN(t) ? e : Math.max(e, t)
                        }, Number.NEGATIVE_INFINITY)
                    }, a.min = function (e) {
                        return e.reduce(function (e, t) {
                            return isNaN(t) ? e : Math.min(e, t)
                        }, Number.POSITIVE_INFINITY)
                    }, a.sign = Math.sign ? function (e) {
                        return Math.sign(e)
                    } : function (e) {
                        return e = +e, 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
                    }, a.log10 = Math.log10 ? function (e) {
                        return Math.log10(e)
                    } : function (e) {
                        return Math.log(e) / Math.LN10
                    }, a.toRadians = function (e) {
                        return e * (Math.PI / 180)
                    }, a.toDegrees = function (e) {
                        return e * (180 / Math.PI)
                    }, a.getAngleFromPoint = function (e, t) {
                        var i = t.x - e.x,
                            n = t.y - e.y,
                            r = Math.sqrt(i * i + n * n),
                            a = Math.atan2(n, i);
                        return a < -.5 * Math.PI && (a += 2 * Math.PI), {
                            angle: a,
                            distance: r
                        }
                    }, a.distanceBetweenPoints = function (e, t) {
                        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                    }, a.aliasPixel = function (e) {
                        return e % 2 === 0 ? 0 : .5
                    }, a.splineCurve = function (e, t, i, n) {
                        var r = e.skip ? t : e,
                            a = t,
                            o = i.skip ? t : i,
                            s = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
                            l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                            u = s / (s + l),
                            c = l / (s + l);
                        u = isNaN(u) ? 0 : u, c = isNaN(c) ? 0 : c;
                        var d = n * u,
                            h = n * c;
                        return {
                            previous: {
                                x: a.x - d * (o.x - r.x),
                                y: a.y - d * (o.y - r.y)
                            },
                            next: {
                                x: a.x + h * (o.x - r.x),
                                y: a.y + h * (o.y - r.y)
                            }
                        }
                    }, a.EPSILON = Number.EPSILON || 1e-14, a.splineCurveMonotone = function (e) {
                        var t, i, n, r, o = (e || []).map(function (e) {
                                return {
                                    model: e._model,
                                    deltaK: 0,
                                    mK: 0
                                }
                            }),
                            s = o.length;
                        for (t = 0; s > t; ++t)
                            if (n = o[t], !n.model.skip) {
                                if (i = t > 0 ? o[t - 1] : null, r = s - 1 > t ? o[t + 1] : null, r && !r.model.skip) {
                                    var l = r.model.x - n.model.x;
                                    n.deltaK = 0 !== l ? (r.model.y - n.model.y) / l : 0
                                }
                                n.mK = !i || i.model.skip ? n.deltaK : !r || r.model.skip ? i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? 0 : (i.deltaK + n.deltaK) / 2
                            } var u, c, d, h;
                        for (t = 0; s - 1 > t; ++t) n = o[t], r = o[t + 1], n.model.skip || r.model.skip || (a.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (u = n.mK / n.deltaK, c = r.mK / n.deltaK, h = Math.pow(u, 2) + Math.pow(c, 2), 9 >= h || (d = 3 / Math.sqrt(h), n.mK = u * d * n.deltaK, r.mK = c * d * n.deltaK)));
                        var f;
                        for (t = 0; s > t; ++t) n = o[t], n.model.skip || (i = t > 0 ? o[t - 1] : null, r = s - 1 > t ? o[t + 1] : null, i && !i.model.skip && (f = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - f, n.model.controlPointPreviousY = n.model.y - f * n.mK), r && !r.model.skip && (f = (r.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + f, n.model.controlPointNextY = n.model.y + f * n.mK))
                    }, a.nextItem = function (e, t, i) {
                        return i ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
                    }, a.previousItem = function (e, t, i) {
                        return i ? 0 >= t ? e[e.length - 1] : e[t - 1] : 0 >= t ? e[0] : e[t - 1]
                    }, a.niceNum = function (e, t) {
                        var i, n = Math.floor(a.log10(e)),
                            r = e / Math.pow(10, n);
                        return i = t ? 1.5 > r ? 1 : 3 > r ? 2 : 7 > r ? 5 : 10 : 1 >= r ? 1 : 2 >= r ? 2 : 5 >= r ? 5 : 10, i * Math.pow(10, n)
                    };
                    var o = a.easingEffects = {
                        linear: function (e) {
                            return e
                        },
                        easeInQuad: function (e) {
                            return e * e
                        },
                        easeOutQuad: function (e) {
                            return -1 * e * (e - 2)
                        },
                        easeInOutQuad: function (e) {
                            return (e /= .5) < 1 ? .5 * e * e : -0.5 * (--e * (e - 2) - 1)
                        },
                        easeInCubic: function (e) {
                            return e * e * e
                        },
                        easeOutCubic: function (e) {
                            return 1 * ((e = e / 1 - 1) * e * e + 1)
                        },
                        easeInOutCubic: function (e) {
                            return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                        },
                        easeInQuart: function (e) {
                            return e * e * e * e
                        },
                        easeOutQuart: function (e) {
                            return -1 * ((e = e / 1 - 1) * e * e * e - 1)
                        },
                        easeInOutQuart: function (e) {
                            return (e /= .5) < 1 ? .5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2)
                        },
                        easeInQuint: function (e) {
                            return 1 * (e /= 1) * e * e * e * e
                        },
                        easeOutQuint: function (e) {
                            return 1 * ((e = e / 1 - 1) * e * e * e * e + 1)
                        },
                        easeInOutQuint: function (e) {
                            return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                        },
                        easeInSine: function (e) {
                            return -1 * Math.cos(e / 1 * (Math.PI / 2)) + 1
                        },
                        easeOutSine: function (e) {
                            return 1 * Math.sin(e / 1 * (Math.PI / 2))
                        },
                        easeInOutSine: function (e) {
                            return -0.5 * (Math.cos(Math.PI * e / 1) - 1)
                        },
                        easeInExpo: function (e) {
                            return 0 === e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1))
                        },
                        easeOutExpo: function (e) {
                            return 1 === e ? 1 : 1 * (-Math.pow(2, -10 * e / 1) + 1)
                        },
                        easeInOutExpo: function (e) {
                            return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
                        },
                        easeInCirc: function (e) {
                            return e >= 1 ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1)
                        },
                        easeOutCirc: function (e) {
                            return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e)
                        },
                        easeInOutCirc: function (e) {
                            return (e /= .5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                        },
                        easeInElastic: function (e) {
                            var t = 1.70158,
                                i = 0,
                                n = 1;
                            return 0 === e ? 0 : 1 === (e /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / i)))
                        },
                        easeOutElastic: function (e) {
                            var t = 1.70158,
                                i = 0,
                                n = 1;
                            return 0 === e ? 0 : 1 === (e /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin(2 * (1 * e - t) * Math.PI / i) + 1)
                        },
                        easeInOutElastic: function (e) {
                            var t = 1.70158,
                                i = 0,
                                n = 1;
                            return 0 === e ? 0 : 2 === (e /= .5) ? 1 : (i || (i = .3 * 1.5), n < Math.abs(1) ? (n = 1, t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n), 1 > e ? -.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / i) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / i) * .5 + 1)
                        },
                        easeInBack: function (e) {
                            var t = 1.70158;
                            return 1 * (e /= 1) * e * ((t + 1) * e - t)
                        },
                        easeOutBack: function (e) {
                            var t = 1.70158;
                            return 1 * ((e = e / 1 - 1) * e * ((t + 1) * e + t) + 1)
                        },
                        easeInOutBack: function (e) {
                            var t = 1.70158;
                            return (e /= .5) < 1 ? .5 * e * e * (((t *= 1.525) + 1) * e - t) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
                        },
                        easeInBounce: function (e) {
                            return 1 - o.easeOutBounce(1 - e)
                        },
                        easeOutBounce: function (e) {
                            return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : 2 / 2.75 > e ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                        },
                        easeInOutBounce: function (e) {
                            return .5 > e ? .5 * o.easeInBounce(2 * e) : .5 * o.easeOutBounce(2 * e - 1) + .5
                        }
                    };
                    a.requestAnimFrame = function () {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                            return window.setTimeout(e, 1e3 / 60)
                        }
                    }(), a.getRelativePosition = function (e, t) {
                        var i, n, r = e.originalEvent || e,
                            o = e.currentTarget || e.srcElement,
                            s = o.getBoundingClientRect(),
                            l = r.touches;
                        l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = r.clientX, n = r.clientY);
                        var u = parseFloat(a.getStyle(o, "padding-left")),
                            c = parseFloat(a.getStyle(o, "padding-top")),
                            d = parseFloat(a.getStyle(o, "padding-right")),
                            h = parseFloat(a.getStyle(o, "padding-bottom")),
                            f = s.right - s.left - u - d,
                            p = s.bottom - s.top - c - h;
                        return i = Math.round((i - s.left - u) / f * o.width / t.currentDevicePixelRatio), n = Math.round((n - s.top - c) / p * o.height / t.currentDevicePixelRatio), {
                            x: i,
                            y: n
                        }
                    }, a.addEvent = function (e, t, i) {
                        e.addEventListener ? e.addEventListener(t, i) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i
                    }, a.removeEvent = function (e, t, i) {
                        e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent ? e.detachEvent("on" + t, i) : e["on" + t] = a.noop
                    }, a.getConstraintWidth = function (e) {
                        return r(e, "max-width", "clientWidth")
                    }, a.getConstraintHeight = function (e) {
                        return r(e, "max-height", "clientHeight")
                    }, a.getMaximumWidth = function (e) {
                        var t = e.parentNode,
                            i = parseInt(a.getStyle(t, "padding-left"), 10),
                            n = parseInt(a.getStyle(t, "padding-right"), 10),
                            r = t.clientWidth - i - n,
                            o = a.getConstraintWidth(e);
                        return isNaN(o) ? r : Math.min(r, o)
                    }, a.getMaximumHeight = function (e) {
                        var t = e.parentNode,
                            i = parseInt(a.getStyle(t, "padding-top"), 10),
                            n = parseInt(a.getStyle(t, "padding-bottom"), 10),
                            r = t.clientHeight - i - n,
                            o = a.getConstraintHeight(e);
                        return isNaN(o) ? r : Math.min(r, o)
                    }, a.getStyle = function (e, t) {
                        return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
                    }, a.retinaScale = function (e) {
                        var t = e.currentDevicePixelRatio = window.devicePixelRatio || 1;
                        if (1 !== t) {
                            var i = e.canvas,
                                n = e.height,
                                r = e.width;
                            i.height = n * t, i.width = r * t, e.ctx.scale(t, t), i.style.height = n + "px", i.style.width = r + "px"
                        }
                    }, a.clear = function (e) {
                        e.ctx.clearRect(0, 0, e.width, e.height)
                    }, a.fontString = function (e, t, i) {
                        return t + " " + e + "px " + i
                    }, a.longestText = function (e, t, i, n) {
                        n = n || {};
                        var r = n.data = n.data || {},
                            o = n.garbageCollect = n.garbageCollect || [];
                        n.font !== t && (r = n.data = {}, o = n.garbageCollect = [], n.font = t), e.font = t;
                        var s = 0;
                        a.each(i, function (t) {
                            void 0 !== t && null !== t && a.isArray(t) !== !0 ? s = a.measureText(e, r, o, s, t) : a.isArray(t) && a.each(t, function (t) {
                                void 0 === t || null === t || a.isArray(t) || (s = a.measureText(e, r, o, s, t))
                            })
                        });
                        var l = o.length / 2;
                        if (l > i.length) {
                            for (var u = 0; l > u; u++) delete r[o[u]];
                            o.splice(0, l)
                        }
                        return s
                    }, a.measureText = function (e, t, i, n, r) {
                        var a = t[r];
                        return a || (a = t[r] = e.measureText(r).width, i.push(r)), a > n && (n = a), n
                    }, a.numberOfLabelLines = function (e) {
                        var t = 1;
                        return a.each(e, function (e) {
                            a.isArray(e) && e.length > t && (t = e.length)
                        }), t
                    }, a.drawRoundedRectangle = function (e, t, i, n, r, a) {
                        e.beginPath(), e.moveTo(t + a, i), e.lineTo(t + n - a, i), e.quadraticCurveTo(t + n, i, t + n, i + a), e.lineTo(t + n, i + r - a), e.quadraticCurveTo(t + n, i + r, t + n - a, i + r), e.lineTo(t + a, i + r), e.quadraticCurveTo(t, i + r, t, i + r - a), e.lineTo(t, i + a), e.quadraticCurveTo(t, i, t + a, i), e.closePath()
                    }, a.color = function (t) {
                        return i ? i(t instanceof CanvasGradient ? e.defaults.global.defaultColor : t) : (console.error("Color.js not found!"), t)
                    }, a.isArray = Array.isArray ? function (e) {
                        return Array.isArray(e)
                    } : function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }, a.arrayEquals = function (e, t) {
                        var i, n, r, o;
                        if (!e || !t || e.length !== t.length) return !1;
                        for (i = 0, n = e.length; n > i; ++i)
                            if (r = e[i], o = t[i], r instanceof Array && o instanceof Array) {
                                if (!a.arrayEquals(r, o)) return !1
                            } else if (r !== o) return !1;
                        return !0
                    }, a.callCallback = function (e, t, i) {
                        e && "function" == typeof e.call && e.apply(i, t)
                    }, a.getHoverColor = function (e) {
                        return e instanceof CanvasPattern ? e : a.color(e).saturate(.5).darken(.1).rgbString()
                    }
                }
            }, {
                2: 2
            }],
            27: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(e, t) {
                        return e.native ? {
                            x: e.x,
                            y: e.y
                        } : o.getRelativePosition(e, t)
                    }

                    function i(e, t) {
                        var i, n, r, a, o, s = e.data.datasets;
                        for (n = 0, a = s.length; a > n; ++n)
                            if (e.isDatasetVisible(n))
                                for (i = e.getDatasetMeta(n), r = 0, o = i.data.length; o > r; ++r) {
                                    var l = i.data[r];
                                    l._view.skip || t(l)
                                }
                    }

                    function n(e, t) {
                        var n = [];
                        return i(e, function (e) {
                            e.inRange(t.x, t.y) && n.push(e)
                        }), n
                    }

                    function r(e, t, n, r) {
                        var a = Number.POSITIVE_INFINITY,
                            s = [];
                        return r || (r = o.distanceBetweenPoints), i(e, function (e) {
                            if (!n || e.inRange(t.x, t.y)) {
                                var i = e.getCenterPoint(),
                                    o = r(t, i);
                                a > o ? (s = [e], a = o) : o === a && s.push(e)
                            }
                        }), s
                    }

                    function a(e, i, a) {
                        var o = t(i, e.chart),
                            s = function (e, t) {
                                return Math.abs(e.x - t.x)
                            },
                            l = a.intersect ? n(e, o) : r(e, o, !1, s),
                            u = [];
                        return l.length ? (e.data.datasets.forEach(function (t, i) {
                            if (e.isDatasetVisible(i)) {
                                var n = e.getDatasetMeta(i),
                                    r = n.data[l[0]._index];
                                r && !r._view.skip && u.push(r)
                            }
                        }), u) : []
                    }
                    var o = e.helpers;
                    e.Interaction = {
                        modes: {
                            single: function (e, n) {
                                var r = t(n, e.chart),
                                    a = [];
                                return i(e, function (e) {
                                    return e.inRange(r.x, r.y) ? (a.push(e), a) : void 0
                                }), a.slice(0, 1)
                            },
                            label: a,
                            index: a,
                            dataset: function (e, i, a) {
                                var o = t(i, e.chart),
                                    s = a.intersect ? n(e, o) : r(e, o, !1);
                                return s.length > 0 && (s = e.getDatasetMeta(s[0]._datasetIndex).data), s
                            },
                            "x-axis": function (e, t) {
                                return a(e, t, !0)
                            },
                            point: function (e, i) {
                                var r = t(i, e.chart);
                                return n(e, r)
                            },
                            nearest: function (e, i, n) {
                                var a = t(i, e.chart),
                                    o = r(e, a, n.intersect);
                                return o.length > 1 && o.sort(function (e, t) {
                                    var i = e.getArea(),
                                        n = t.getArea(),
                                        r = i - n;
                                    return 0 === r && (r = e._datasetIndex - t._datasetIndex), r
                                }), o.slice(0, 1)
                            },
                            x: function (e, n, r) {
                                var a = t(n, e.chart),
                                    o = [],
                                    s = !1;
                                return i(e, function (e) {
                                    e.inXRange(a.x) && o.push(e), e.inRange(a.x, a.y) && (s = !0)
                                }), r.intersect && !s && (o = []), o
                            },
                            y: function (e, n, r) {
                                var a = t(n, e.chart),
                                    o = [],
                                    s = !1;
                                return i(e, function (e) {
                                    e.inYRange(a.y) && o.push(e), e.inRange(a.x, a.y) && (s = !0)
                                }), r.intersect && !s && (o = []), o
                            }
                        }
                    }
                }
            }, {}],
            28: [function (e, t) {
                "use strict";
                t.exports = function () {
                    var e = function (t, i) {
                        return this.controller = new e.Controller(t, i, this), this.controller
                    };
                    return e.defaults = {
                        global: {
                            responsive: !0,
                            responsiveAnimationDuration: 0,
                            maintainAspectRatio: !0,
                            events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                            hover: {
                                onHover: null,
                                mode: "nearest",
                                intersect: !0,
                                animationDuration: 400
                            },
                            onClick: null,
                            defaultColor: "rgba(0,0,0,0.1)",
                            defaultFontColor: "#666",
                            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                            defaultFontSize: 12,
                            defaultFontStyle: "normal",
                            showLines: !0,
                            elements: {},
                            legendCallback: function (e) {
                                var t = [];
                                t.push('<ul class="' + e.id + '-legend">');
                                for (var i = 0; i < e.data.datasets.length; i++) t.push('<li><span style="background-color:' + e.data.datasets[i].backgroundColor + '"></span>'), e.data.datasets[i].label && t.push(e.data.datasets[i].label), t.push("</li>");
                                return t.push("</ul>"), t.join("")
                            }
                        }
                    }, e.Chart = e, e
                }
            }, {}],
            29: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers;
                    e.layoutService = {
                        defaults: {},
                        addBox: function (e, t) {
                            e.boxes || (e.boxes = []), e.boxes.push(t)
                        },
                        removeBox: function (e, t) {
                            e.boxes && e.boxes.splice(e.boxes.indexOf(t), 1)
                        },
                        update: function (e, i, n) {
                            function r(e) {
                                var t, i = e.isHorizontal();
                                i ? (t = e.update(e.options.fullWidth ? b : C, S), T -= t.height) : (t = e.update(w, k), C -= t.width), D.push({
                                    horizontal: i,
                                    minSize: t,
                                    box: e
                                })
                            }

                            function a(e) {
                                var i = t.findNextWhere(D, function (t) {
                                    return t.box === e
                                });
                                if (i)
                                    if (e.isHorizontal()) {
                                        var n = {
                                            left: Math.max(F, M),
                                            right: Math.max(E, A),
                                            top: 0,
                                            bottom: 0
                                        };
                                        e.update(e.options.fullWidth ? b : C, _ / 2, n)
                                    } else e.update(i.minSize.width, T)
                            }

                            function o(e) {
                                var i = t.findNextWhere(D, function (t) {
                                        return t.box === e
                                    }),
                                    n = {
                                        left: 0,
                                        right: 0,
                                        top: O,
                                        bottom: N
                                    };
                                i && e.update(i.minSize.width, T, n)
                            }

                            function s(e) {
                                e.isHorizontal() ? (e.left = e.options.fullWidth ? c : F, e.right = e.options.fullWidth ? i - d : F + C, e.top = W, e.bottom = W + e.height, W = e.bottom) : (e.left = H, e.right = H + e.width, e.top = O, e.bottom = O + T, H = e.right)
                            }
                            if (e) {
                                var l = e.options.layout,
                                    u = l ? l.padding : null,
                                    c = 0,
                                    d = 0,
                                    h = 0,
                                    f = 0;
                                isNaN(u) ? (c = u.left || 0, d = u.right || 0, h = u.top || 0, f = u.bottom || 0) : (c = u, d = u, h = u, f = u);
                                var p = t.where(e.boxes, function (e) {
                                        return "left" === e.options.position
                                    }),
                                    g = t.where(e.boxes, function (e) {
                                        return "right" === e.options.position
                                    }),
                                    m = t.where(e.boxes, function (e) {
                                        return "top" === e.options.position
                                    }),
                                    v = t.where(e.boxes, function (e) {
                                        return "bottom" === e.options.position
                                    }),
                                    y = t.where(e.boxes, function (e) {
                                        return "chartArea" === e.options.position
                                    });
                                m.sort(function (e, t) {
                                    return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
                                }), v.sort(function (e, t) {
                                    return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                                });
                                var b = i - c - d,
                                    _ = n - h - f,
                                    x = b / 2,
                                    k = _ / 2,
                                    w = (i - x) / (p.length + g.length),
                                    S = (n - k) / (m.length + v.length),
                                    C = b,
                                    T = _,
                                    D = [];
                                t.each(p.concat(g, m, v), r);
                                var M = 0,
                                    A = 0,
                                    P = 0,
                                    I = 0;
                                t.each(m.concat(v), function (e) {
                                    if (e.getPadding) {
                                        var t = e.getPadding();
                                        M = Math.max(M, t.left), A = Math.max(A, t.right)
                                    }
                                }), t.each(p.concat(g), function (e) {
                                    if (e.getPadding) {
                                        var t = e.getPadding();
                                        P = Math.max(P, t.top), I = Math.max(I, t.bottom)
                                    }
                                });
                                var F = c,
                                    E = d,
                                    O = h,
                                    N = f;
                                t.each(p.concat(g), a), t.each(p, function (e) {
                                    F += e.width
                                }), t.each(g, function (e) {
                                    E += e.width
                                }), t.each(m.concat(v), a), t.each(m, function (e) {
                                    O += e.height
                                }), t.each(v, function (e) {
                                    N += e.height
                                }), t.each(p.concat(g), o), F = c, E = d, O = h, N = f, t.each(p, function (e) {
                                    F += e.width
                                }), t.each(g, function (e) {
                                    E += e.width
                                }), t.each(m, function (e) {
                                    O += e.height
                                }), t.each(v, function (e) {
                                    N += e.height
                                });
                                var L = Math.max(M - F, 0);
                                F += L, E += Math.max(A - E, 0);
                                var $ = Math.max(P - O, 0);
                                O += $, N += Math.max(I - N, 0);
                                var R = n - O - N,
                                    j = i - F - E;
                                (j !== C || R !== T) && (t.each(p, function (e) {
                                    e.height = R
                                }), t.each(g, function (e) {
                                    e.height = R
                                }), t.each(m, function (e) {
                                    e.options.fullWidth || (e.width = j)
                                }), t.each(v, function (e) {
                                    e.options.fullWidth || (e.width = j)
                                }), T = R, C = j);
                                var H = c + L,
                                    W = h + $;
                                t.each(p.concat(m), s), H += C, W += T, t.each(g, s), t.each(v, s), e.chartArea = {
                                    left: F,
                                    top: O,
                                    right: F + C,
                                    bottom: O + T
                                }, t.each(y, function (t) {
                                    t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(C, T)
                                })
                            }
                        }
                    }
                }
            }, {}],
            30: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(e, t) {
                        return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
                    }

                    function i(t, i) {
                        var n = new e.Legend({
                            ctx: t.chart.ctx,
                            options: i,
                            chart: t
                        });
                        t.legend = n, e.layoutService.addBox(t, n)
                    }
                    var n = e.helpers,
                        r = n.noop;
                    e.defaults.global.legend = {
                        display: !0,
                        position: "top",
                        fullWidth: !0,
                        reverse: !1,
                        onClick: function (e, t) {
                            var i = t.datasetIndex,
                                n = this.chart,
                                r = n.getDatasetMeta(i);
                            r.hidden = null === r.hidden ? !n.data.datasets[i].hidden : null, n.update()
                        },
                        onHover: null,
                        labels: {
                            boxWidth: 40,
                            padding: 10,
                            generateLabels: function (e) {
                                var t = e.data;
                                return n.isArray(t.datasets) ? t.datasets.map(function (t, i) {
                                    return {
                                        text: t.label,
                                        fillStyle: n.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                        hidden: !e.isDatasetVisible(i),
                                        lineCap: t.borderCapStyle,
                                        lineDash: t.borderDash,
                                        lineDashOffset: t.borderDashOffset,
                                        lineJoin: t.borderJoinStyle,
                                        lineWidth: t.borderWidth,
                                        strokeStyle: t.borderColor,
                                        pointStyle: t.pointStyle,
                                        datasetIndex: i
                                    }
                                }, this) : []
                            }
                        }
                    }, e.Legend = e.Element.extend({
                        initialize: function (e) {
                            n.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
                        },
                        beforeUpdate: r,
                        update: function (e, t, i) {
                            var n = this;
                            return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                        },
                        afterUpdate: r,
                        beforeSetDimensions: r,
                        setDimensions: function () {
                            var e = this;
                            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                                width: 0,
                                height: 0
                            }
                        },
                        afterSetDimensions: r,
                        beforeBuildLabels: r,
                        buildLabels: function () {
                            var e = this,
                                t = e.options.labels,
                                i = t.generateLabels.call(e, e.chart);
                            t.filter && (i = i.filter(function (i) {
                                return t.filter(i, e.chart.data)
                            })), e.options.reverse && i.reverse(), e.legendItems = i
                        },
                        afterBuildLabels: r,
                        beforeFit: r,
                        fit: function () {
                            var i = this,
                                r = i.options,
                                a = r.labels,
                                o = r.display,
                                s = i.ctx,
                                l = e.defaults.global,
                                u = n.getValueOrDefault,
                                c = u(a.fontSize, l.defaultFontSize),
                                d = u(a.fontStyle, l.defaultFontStyle),
                                h = u(a.fontFamily, l.defaultFontFamily),
                                f = n.fontString(c, d, h),
                                p = i.legendHitBoxes = [],
                                g = i.minSize,
                                m = i.isHorizontal();
                            if (m ? (g.width = i.maxWidth, g.height = o ? 10 : 0) : (g.width = o ? 10 : 0, g.height = i.maxHeight), o)
                                if (s.font = f, m) {
                                    var v = i.lineWidths = [0],
                                        y = i.legendItems.length ? c + a.padding : 0;
                                    s.textAlign = "left", s.textBaseline = "top", n.each(i.legendItems, function (e, n) {
                                        var r = t(a, c),
                                            o = r + c / 2 + s.measureText(e.text).width;
                                        v[v.length - 1] + o + a.padding >= i.width && (y += c + a.padding, v[v.length] = i.left), p[n] = {
                                            left: 0,
                                            top: 0,
                                            width: o,
                                            height: c
                                        }, v[v.length - 1] += o + a.padding
                                    }), g.height += y
                                } else {
                                    var b = a.padding,
                                        _ = i.columnWidths = [],
                                        x = a.padding,
                                        k = 0,
                                        w = 0,
                                        S = c + b;
                                    n.each(i.legendItems, function (e, i) {
                                        var n = t(a, c),
                                            r = n + c / 2 + s.measureText(e.text).width;
                                        w + S > g.height && (x += k + a.padding, _.push(k), k = 0, w = 0), k = Math.max(k, r), w += S, p[i] = {
                                            left: 0,
                                            top: 0,
                                            width: r,
                                            height: c
                                        }
                                    }), x += k, _.push(k), g.width += x
                                } i.width = g.width, i.height = g.height
                        },
                        afterFit: r,
                        isHorizontal: function () {
                            return "top" === this.options.position || "bottom" === this.options.position
                        },
                        draw: function () {
                            var i = this,
                                r = i.options,
                                a = r.labels,
                                o = e.defaults.global,
                                s = o.elements.line,
                                l = i.width,
                                u = i.lineWidths;
                            if (r.display) {
                                var c, d = i.ctx,
                                    h = n.getValueOrDefault,
                                    f = h(a.fontColor, o.defaultFontColor),
                                    p = h(a.fontSize, o.defaultFontSize),
                                    g = h(a.fontStyle, o.defaultFontStyle),
                                    m = h(a.fontFamily, o.defaultFontFamily),
                                    v = n.fontString(p, g, m);
                                d.textAlign = "left", d.textBaseline = "top", d.lineWidth = .5, d.strokeStyle = f, d.fillStyle = f, d.font = v;
                                var y = t(a, p),
                                    b = i.legendHitBoxes,
                                    _ = function (t, i, n) {
                                        if (!(isNaN(y) || 0 >= y)) {
                                            d.save(), d.fillStyle = h(n.fillStyle, o.defaultColor), d.lineCap = h(n.lineCap, s.borderCapStyle), d.lineDashOffset = h(n.lineDashOffset, s.borderDashOffset), d.lineJoin = h(n.lineJoin, s.borderJoinStyle), d.lineWidth = h(n.lineWidth, s.borderWidth), d.strokeStyle = h(n.strokeStyle, o.defaultColor);
                                            var a = 0 === h(n.lineWidth, s.borderWidth);
                                            if (d.setLineDash && d.setLineDash(h(n.lineDash, s.borderDash)), r.labels && r.labels.usePointStyle) {
                                                var l = p * Math.SQRT2 / 2,
                                                    u = l / Math.SQRT2,
                                                    c = t + u,
                                                    f = i + u;
                                                e.canvasHelpers.drawPoint(d, n.pointStyle, l, c, f)
                                            } else a || d.strokeRect(t, i, y, p), d.fillRect(t, i, y, p);
                                            d.restore()
                                        }
                                    },
                                    x = function (e, t, i, n) {
                                        d.fillText(i.text, y + p / 2 + e, t), i.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(y + p / 2 + e, t + p / 2), d.lineTo(y + p / 2 + e + n, t + p / 2), d.stroke())
                                    },
                                    k = i.isHorizontal();
                                c = k ? {
                                    x: i.left + (l - u[0]) / 2,
                                    y: i.top + a.padding,
                                    line: 0
                                } : {
                                    x: i.left + a.padding,
                                    y: i.top + a.padding,
                                    line: 0
                                };
                                var w = p + a.padding;
                                n.each(i.legendItems, function (e, t) {
                                    var n = d.measureText(e.text).width,
                                        r = y + p / 2 + n,
                                        o = c.x,
                                        s = c.y;
                                    k ? o + r >= l && (s = c.y += w, c.line++, o = c.x = i.left + (l - u[c.line]) / 2) : s + w > i.bottom && (o = c.x = o + i.columnWidths[c.line] + a.padding, s = c.y = i.top + a.padding, c.line++), _(o, s, e), b[t].left = o, b[t].top = s, x(o, s, e, n), k ? c.x += r + a.padding : c.y += w
                                })
                            }
                        },
                        handleEvent: function (e) {
                            var t = this,
                                i = t.options,
                                n = "mouseup" === e.type ? "click" : e.type,
                                r = !1;
                            if ("mousemove" === n) {
                                if (!i.onHover) return
                            } else {
                                if ("click" !== n) return;
                                if (!i.onClick) return
                            }
                            var a = e.x,
                                o = e.y;
                            if (a >= t.left && a <= t.right && o >= t.top && o <= t.bottom)
                                for (var s = t.legendHitBoxes, l = 0; l < s.length; ++l) {
                                    var u = s[l];
                                    if (a >= u.left && a <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
                                        if ("click" === n) {
                                            i.onClick.call(t, e.native, t.legendItems[l]), r = !0;
                                            break
                                        }
                                        if ("mousemove" === n) {
                                            i.onHover.call(t, e.native, t.legendItems[l]), r = !0;
                                            break
                                        }
                                    }
                                }
                            return r
                        }
                    }), e.plugins.register({
                        beforeInit: function (e) {
                            var t = e.options.legend;
                            t && i(e, t)
                        },
                        beforeUpdate: function (t) {
                            var r = t.options.legend;
                            r ? (r = n.configMerge(e.defaults.global.legend, r), t.legend ? t.legend.options = r : i(t, r)) : (e.layoutService.removeBox(t, t.legend), delete t.legend)
                        },
                        afterEvent: function (e, t) {
                            var i = e.legend;
                            i && i.handleEvent(t)
                        }
                    })
                }
            }, {}],
            31: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers;
                    e.defaults.global.plugins = {}, e.plugins = {
                        _plugins: [],
                        _cacheId: 0,
                        register: function (e) {
                            var t = this._plugins;
                            [].concat(e).forEach(function (e) {
                                -1 === t.indexOf(e) && t.push(e)
                            }), this._cacheId++
                        },
                        unregister: function (e) {
                            var t = this._plugins;
                            [].concat(e).forEach(function (e) {
                                var i = t.indexOf(e); - 1 !== i && t.splice(i, 1)
                            }), this._cacheId++
                        },
                        clear: function () {
                            this._plugins = [], this._cacheId++
                        },
                        count: function () {
                            return this._plugins.length
                        },
                        getAll: function () {
                            return this._plugins
                        },
                        notify: function (e, t, i) {
                            var n, r, a, o, s, l = this.descriptors(e),
                                u = l.length;
                            for (n = 0; u > n; ++n)
                                if (r = l[n], a = r.plugin, s = a[t], "function" == typeof s && (o = [e].concat(i || []), o.push(r.options), s.apply(a, o) === !1)) return !1;
                            return !0
                        },
                        descriptors: function (i) {
                            var n = i._plugins || (i._plugins = {});
                            if (n.id === this._cacheId) return n.descriptors;
                            var r = [],
                                a = [],
                                o = i && i.config || {},
                                s = e.defaults.global.plugins,
                                l = o.options && o.options.plugins || {};
                            return this._plugins.concat(o.plugins || []).forEach(function (e) {
                                var i = r.indexOf(e);
                                if (-1 === i) {
                                    var n = e.id,
                                        o = l[n];
                                    o !== !1 && (o === !0 && (o = t.clone(s[n])), r.push(e), a.push({
                                        plugin: e,
                                        options: o || {}
                                    }))
                                }
                            }), n.descriptors = a, n.id = this._cacheId, a
                        }
                    }, e.pluginService = e.plugins, e.PluginBase = t.inherits({})
                }
            }, {}],
            32: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(e, t, i) {
                        return n.isArray(t) ? n.longestText(e, i, t) : e.measureText(t).width
                    }

                    function i(t) {
                        var i = n.getValueOrDefault,
                            r = e.defaults.global,
                            a = i(t.fontSize, r.defaultFontSize),
                            o = i(t.fontStyle, r.defaultFontStyle),
                            s = i(t.fontFamily, r.defaultFontFamily);
                        return {
                            size: a,
                            style: o,
                            family: s,
                            font: n.fontString(a, o, s)
                        }
                    }
                    var n = e.helpers;
                    e.defaults.scale = {
                        display: !0,
                        position: "left",
                        gridLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1,
                            drawBorder: !0,
                            drawOnChartArea: !0,
                            drawTicks: !0,
                            tickMarkLength: 10,
                            zeroLineWidth: 1,
                            zeroLineColor: "rgba(0,0,0,0.25)",
                            offsetGridLines: !1,
                            borderDash: [],
                            borderDashOffset: 0
                        },
                        scaleLabel: {
                            labelString: "",
                            display: !1
                        },
                        ticks: {
                            beginAtZero: !1,
                            minRotation: 0,
                            maxRotation: 50,
                            mirror: !1,
                            padding: 0,
                            reverse: !1,
                            display: !0,
                            autoSkip: !0,
                            autoSkipPadding: 0,
                            labelOffset: 0,
                            callback: e.Ticks.formatters.values
                        }
                    }, e.Scale = e.Element.extend({
                        getPadding: function () {
                            var e = this;
                            return {
                                left: e.paddingLeft || 0,
                                top: e.paddingTop || 0,
                                right: e.paddingRight || 0,
                                bottom: e.paddingBottom || 0
                            }
                        },
                        beforeUpdate: function () {
                            n.callCallback(this.options.beforeUpdate, [this])
                        },
                        update: function (e, t, i) {
                            var r = this;
                            return r.beforeUpdate(), r.maxWidth = e, r.maxHeight = t, r.margins = n.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, i), r.longestTextCache = r.longestTextCache || {}, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeDataLimits(), r.determineDataLimits(), r.afterDataLimits(), r.beforeBuildTicks(), r.buildTicks(), r.afterBuildTicks(), r.beforeTickToLabelConversion(), r.convertTicksToLabels(), r.afterTickToLabelConversion(), r.beforeCalculateTickRotation(), r.calculateTickRotation(), r.afterCalculateTickRotation(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
                        },
                        afterUpdate: function () {
                            n.callCallback(this.options.afterUpdate, [this])
                        },
                        beforeSetDimensions: function () {
                            n.callCallback(this.options.beforeSetDimensions, [this])
                        },
                        setDimensions: function () {
                            var e = this;
                            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
                        },
                        afterSetDimensions: function () {
                            n.callCallback(this.options.afterSetDimensions, [this])
                        },
                        beforeDataLimits: function () {
                            n.callCallback(this.options.beforeDataLimits, [this])
                        },
                        determineDataLimits: n.noop,
                        afterDataLimits: function () {
                            n.callCallback(this.options.afterDataLimits, [this])
                        },
                        beforeBuildTicks: function () {
                            n.callCallback(this.options.beforeBuildTicks, [this])
                        },
                        buildTicks: n.noop,
                        afterBuildTicks: function () {
                            n.callCallback(this.options.afterBuildTicks, [this])
                        },
                        beforeTickToLabelConversion: function () {
                            n.callCallback(this.options.beforeTickToLabelConversion, [this])
                        },
                        convertTicksToLabels: function () {
                            var e = this,
                                t = e.options.ticks;
                            e.ticks = e.ticks.map(t.userCallback || t.callback)
                        },
                        afterTickToLabelConversion: function () {
                            n.callCallback(this.options.afterTickToLabelConversion, [this])
                        },
                        beforeCalculateTickRotation: function () {
                            n.callCallback(this.options.beforeCalculateTickRotation, [this])
                        },
                        calculateTickRotation: function () {
                            var e = this,
                                t = e.ctx,
                                r = e.options.ticks,
                                a = i(r);
                            t.font = a.font;
                            var o = r.minRotation || 0;
                            if (e.options.display && e.isHorizontal())
                                for (var s, l, u = n.longestText(t, a.font, e.ticks, e.longestTextCache), c = u, d = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; c > d && o < r.maxRotation;) {
                                    var h = n.toRadians(o);
                                    if (s = Math.cos(h), l = Math.sin(h), l * u > e.maxHeight) {
                                        o--;
                                        break
                                    }
                                    o++, c = s * u
                                }
                            e.labelRotation = o
                        },
                        afterCalculateTickRotation: function () {
                            n.callCallback(this.options.afterCalculateTickRotation, [this])
                        },
                        beforeFit: function () {
                            n.callCallback(this.options.beforeFit, [this])
                        },
                        fit: function () {
                            var e = this,
                                r = e.minSize = {
                                    width: 0,
                                    height: 0
                                },
                                a = e.options,
                                o = a.ticks,
                                s = a.scaleLabel,
                                l = a.gridLines,
                                u = a.display,
                                c = e.isHorizontal(),
                                d = i(o),
                                h = 1.5 * i(s).size,
                                f = a.gridLines.tickMarkLength;
                            if (r.width = c ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : u && l.drawTicks ? f : 0, r.height = c ? u && l.drawTicks ? f : 0 : e.maxHeight, s.display && u && (c ? r.height += h : r.width += h), o.display && u) {
                                var p = n.longestText(e.ctx, d.font, e.ticks, e.longestTextCache),
                                    g = n.numberOfLabelLines(e.ticks),
                                    m = .5 * d.size;
                                if (c) {
                                    e.longestLabelWidth = p;
                                    var v = n.toRadians(e.labelRotation),
                                        y = Math.cos(v),
                                        b = Math.sin(v),
                                        _ = b * p + d.size * g + m * g;
                                    r.height = Math.min(e.maxHeight, r.height + _), e.ctx.font = d.font;
                                    var x = e.ticks[0],
                                        k = t(e.ctx, x, d.font),
                                        w = e.ticks[e.ticks.length - 1],
                                        S = t(e.ctx, w, d.font);
                                    0 !== e.labelRotation ? (e.paddingLeft = "bottom" === a.position ? y * k + 3 : y * m + 3, e.paddingRight = "bottom" === a.position ? y * m + 3 : y * S + 3) : (e.paddingLeft = k / 2 + 3, e.paddingRight = S / 2 + 3)
                                } else o.mirror ? p = 0 : p += e.options.ticks.padding, r.width += p, e.paddingTop = d.size / 2, e.paddingBottom = d.size / 2
                            }
                            e.handleMargins(), e.width = r.width, e.height = r.height
                        },
                        handleMargins: function () {
                            var e = this;
                            e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
                        },
                        afterFit: function () {
                            n.callCallback(this.options.afterFit, [this])
                        },
                        isHorizontal: function () {
                            return "top" === this.options.position || "bottom" === this.options.position
                        },
                        isFullWidth: function () {
                            return this.options.fullWidth
                        },
                        getRightValue: function (e) {
                            return null === e || "undefined" == typeof e ? 0 / 0 : "number" != typeof e || isFinite(e) ? "object" == typeof e ? e instanceof Date || e.isValid ? e : this.getRightValue(this.isHorizontal() ? e.x : e.y) : e : 0 / 0
                        },
                        getLabelForIndex: n.noop,
                        getPixelForValue: n.noop,
                        getValueForPixel: n.noop,
                        getPixelForTick: function (e, t) {
                            var i = this;
                            if (i.isHorizontal()) {
                                var n = i.width - (i.paddingLeft + i.paddingRight),
                                    r = n / Math.max(i.ticks.length - (i.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                    a = r * e + i.paddingLeft;
                                t && (a += r / 2);
                                var o = i.left + Math.round(a);
                                return o += i.isFullWidth() ? i.margins.left : 0
                            }
                            var s = i.height - (i.paddingTop + i.paddingBottom);
                            return i.top + e * (s / (i.ticks.length - 1))
                        },
                        getPixelForDecimal: function (e) {
                            var t = this;
                            if (t.isHorizontal()) {
                                var i = t.width - (t.paddingLeft + t.paddingRight),
                                    n = i * e + t.paddingLeft,
                                    r = t.left + Math.round(n);
                                return r += t.isFullWidth() ? t.margins.left : 0
                            }
                            return t.top + e * t.height
                        },
                        getBasePixel: function () {
                            return this.getPixelForValue(this.getBaseValue())
                        },
                        getBaseValue: function () {
                            var e = this,
                                t = e.min,
                                i = e.max;
                            return e.beginAtZero ? 0 : 0 > t && 0 > i ? i : t > 0 && i > 0 ? t : 0
                        },
                        draw: function (t) {
                            var r = this,
                                a = r.options;
                            if (a.display) {
                                var o, s, l = r.ctx,
                                    u = e.defaults.global,
                                    c = a.ticks,
                                    d = a.gridLines,
                                    h = a.scaleLabel,
                                    f = 0 !== r.labelRotation,
                                    p = c.autoSkip,
                                    g = r.isHorizontal();
                                c.maxTicksLimit && (s = c.maxTicksLimit);
                                var m = n.getValueOrDefault(c.fontColor, u.defaultFontColor),
                                    v = i(c),
                                    y = d.drawTicks ? d.tickMarkLength : 0,
                                    b = n.getValueOrDefault(d.borderDash, u.borderDash),
                                    _ = n.getValueOrDefault(d.borderDashOffset, u.borderDashOffset),
                                    x = n.getValueOrDefault(h.fontColor, u.defaultFontColor),
                                    k = i(h),
                                    w = n.toRadians(r.labelRotation),
                                    S = Math.cos(w),
                                    C = r.longestLabelWidth * S;
                                l.fillStyle = m;
                                var T = [];
                                if (g) {
                                    if (o = !1, f && (C /= 2), (C + c.autoSkipPadding) * r.ticks.length > r.width - (r.paddingLeft + r.paddingRight) && (o = 1 + Math.floor((C + c.autoSkipPadding) * r.ticks.length / (r.width - (r.paddingLeft + r.paddingRight)))), s && r.ticks.length > s)
                                        for (; !o || r.ticks.length / (o || 1) > s;) o || (o = 1), o += 1;
                                    p || (o = !1)
                                }
                                var D = "right" === a.position ? r.left : r.right - y,
                                    M = "right" === a.position ? r.left + y : r.right,
                                    A = "bottom" === a.position ? r.top : r.bottom - y,
                                    P = "bottom" === a.position ? r.top + y : r.bottom;
                                if (n.each(r.ticks, function (e, i) {
                                        if (void 0 !== e && null !== e) {
                                            var s = r.ticks.length === i + 1,
                                                l = o > 1 && i % o > 0 || i % o === 0 && i + o >= r.ticks.length;
                                            if ((!l || s) && void 0 !== e && null !== e) {
                                                var u, h;
                                                i === ("undefined" != typeof r.zeroLineIndex ? r.zeroLineIndex : 0) ? (u = d.zeroLineWidth, h = d.zeroLineColor) : (u = n.getValueAtIndexOrDefault(d.lineWidth, i), h = n.getValueAtIndexOrDefault(d.color, i));
                                                var p, m, v, x, k, S, C, I, F, E, O = "middle",
                                                    N = "middle";
                                                if (g) {
                                                    "bottom" === a.position ? (N = f ? "middle" : "top", O = f ? "right" : "center", E = r.top + y) : (N = f ? "middle" : "bottom", O = f ? "left" : "center", E = r.bottom - y);
                                                    var L = r.getPixelForTick(i) + n.aliasPixel(u);
                                                    F = r.getPixelForTick(i, d.offsetGridLines) + c.labelOffset, p = v = k = C = L, m = A, x = P, S = t.top, I = t.bottom
                                                } else {
                                                    var $, R = "left" === a.position,
                                                        j = c.padding;
                                                    c.mirror ? (O = R ? "left" : "right", $ = j) : (O = R ? "right" : "left", $ = y + j), F = R ? r.right - $ : r.left + $;
                                                    var H = r.getPixelForTick(i);
                                                    H += n.aliasPixel(u), E = r.getPixelForTick(i, d.offsetGridLines), p = D, v = M, k = t.left, C = t.right, m = x = S = I = H
                                                }
                                                T.push({
                                                    tx1: p,
                                                    ty1: m,
                                                    tx2: v,
                                                    ty2: x,
                                                    x1: k,
                                                    y1: S,
                                                    x2: C,
                                                    y2: I,
                                                    labelX: F,
                                                    labelY: E,
                                                    glWidth: u,
                                                    glColor: h,
                                                    glBorderDash: b,
                                                    glBorderDashOffset: _,
                                                    rotation: -1 * w,
                                                    label: e,
                                                    textBaseline: N,
                                                    textAlign: O
                                                })
                                            }
                                        }
                                    }), n.each(T, function (e) {
                                        if (d.display && (l.save(), l.lineWidth = e.glWidth, l.strokeStyle = e.glColor, l.setLineDash && (l.setLineDash(e.glBorderDash), l.lineDashOffset = e.glBorderDashOffset), l.beginPath(), d.drawTicks && (l.moveTo(e.tx1, e.ty1), l.lineTo(e.tx2, e.ty2)), d.drawOnChartArea && (l.moveTo(e.x1, e.y1), l.lineTo(e.x2, e.y2)), l.stroke(), l.restore()), c.display) {
                                            l.save(), l.translate(e.labelX, e.labelY), l.rotate(e.rotation), l.font = v.font, l.textBaseline = e.textBaseline, l.textAlign = e.textAlign;
                                            var t = e.label;
                                            if (n.isArray(t))
                                                for (var i = 0, r = 0; i < t.length; ++i) l.fillText("" + t[i], 0, r), r += 1.5 * v.size;
                                            else l.fillText(t, 0, 0);
                                            l.restore()
                                        }
                                    }), h.display) {
                                    var I, F, E = 0;
                                    if (g) I = r.left + (r.right - r.left) / 2, F = "bottom" === a.position ? r.bottom - k.size / 2 : r.top + k.size / 2;
                                    else {
                                        var O = "left" === a.position;
                                        I = O ? r.left + k.size / 2 : r.right - k.size / 2, F = r.top + (r.bottom - r.top) / 2, E = O ? -.5 * Math.PI : .5 * Math.PI
                                    }
                                    l.save(), l.translate(I, F), l.rotate(E), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = x, l.font = k.font, l.fillText(h.labelString, 0, 0), l.restore()
                                }
                                if (d.drawBorder) {
                                    l.lineWidth = n.getValueAtIndexOrDefault(d.lineWidth, 0), l.strokeStyle = n.getValueAtIndexOrDefault(d.color, 0);
                                    var N = r.left,
                                        L = r.right,
                                        $ = r.top,
                                        R = r.bottom,
                                        j = n.aliasPixel(l.lineWidth);
                                    g ? ($ = R = "top" === a.position ? r.bottom : r.top, $ += j, R += j) : (N = L = "left" === a.position ? r.right : r.left, N += j, L += j), l.beginPath(), l.moveTo(N, $), l.lineTo(L, R), l.stroke()
                                }
                            }
                        }
                    })
                }
            }, {}],
            33: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers;
                    e.scaleService = {
                        constructors: {},
                        defaults: {},
                        registerScaleType: function (e, i, n) {
                            this.constructors[e] = i, this.defaults[e] = t.clone(n)
                        },
                        getScaleConstructor: function (e) {
                            return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
                        },
                        getScaleDefaults: function (i) {
                            return this.defaults.hasOwnProperty(i) ? t.scaleMerge(e.defaults.scale, this.defaults[i]) : {}
                        },
                        updateScaleDefaults: function (e, i) {
                            var n = this.defaults;
                            n.hasOwnProperty(e) && (n[e] = t.extend(n[e], i))
                        },
                        addScalesToLayout: function (i) {
                            t.each(i.scales, function (t) {
                                e.layoutService.addBox(i, t)
                            })
                        }
                    }
                }
            }, {}],
            34: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers;
                    e.Ticks = {
                        generators: {
                            linear: function (e, i) {
                                var n, r = [];
                                if (e.stepSize && e.stepSize > 0) n = e.stepSize;
                                else {
                                    var a = t.niceNum(i.max - i.min, !1);
                                    n = t.niceNum(a / (e.maxTicks - 1), !0)
                                }
                                var o = Math.floor(i.min / n) * n,
                                    s = Math.ceil(i.max / n) * n;
                                e.min && e.max && e.stepSize && t.almostWhole((e.max - e.min) / e.stepSize, n / 1e3) && (o = e.min, s = e.max);
                                var l = (s - o) / n;
                                l = t.almostEquals(l, Math.round(l), n / 1e3) ? Math.round(l) : Math.ceil(l), r.push(void 0 !== e.min ? e.min : o);
                                for (var u = 1; l > u; ++u) r.push(o + u * n);
                                return r.push(void 0 !== e.max ? e.max : s), r
                            },
                            logarithmic: function (e, i) {
                                var n, r, a = [],
                                    o = t.getValueOrDefault,
                                    s = o(e.min, Math.pow(10, Math.floor(t.log10(i.min)))),
                                    l = Math.floor(t.log10(i.max)),
                                    u = Math.ceil(i.max / Math.pow(10, l));
                                0 === s ? (n = Math.floor(t.log10(i.minNotZero)), r = Math.floor(i.minNotZero / Math.pow(10, n)), a.push(s), s = r * Math.pow(10, n)) : (n = Math.floor(t.log10(s)), r = Math.floor(s / Math.pow(10, n)));
                                do a.push(s), ++r, 10 === r && (r = 1, ++n), s = r * Math.pow(10, n); while (l > n || n === l && u > r);
                                var c = o(e.max, s);
                                return a.push(c), a
                            }
                        },
                        formatters: {
                            values: function (e) {
                                return t.isArray(e) ? e : "" + e
                            },
                            linear: function (e, i, n) {
                                var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                                Math.abs(r) > 1 && e !== Math.floor(e) && (r = e - Math.floor(e));
                                var a = t.log10(Math.abs(r)),
                                    o = "";
                                if (0 !== e) {
                                    var s = -1 * Math.floor(a);
                                    s = Math.max(Math.min(s, 20), 0), o = e.toFixed(s)
                                } else o = "0";
                                return o
                            },
                            logarithmic: function (e, i, n) {
                                var r = e / Math.pow(10, Math.floor(t.log10(e)));
                                return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === i || i === n.length - 1 ? e.toExponential() : ""
                            }
                        }
                    }
                }
            }, {}],
            35: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(t, i) {
                        var n = new e.Title({
                            ctx: t.chart.ctx,
                            options: i,
                            chart: t
                        });
                        t.titleBlock = n, e.layoutService.addBox(t, n)
                    }
                    var i = e.helpers;
                    e.defaults.global.title = {
                        display: !1,
                        position: "top",
                        fullWidth: !0,
                        fontStyle: "bold",
                        padding: 10,
                        text: ""
                    };
                    var n = i.noop;
                    e.Title = e.Element.extend({
                        initialize: function (e) {
                            var t = this;
                            i.extend(t, e), t.legendHitBoxes = []
                        },
                        beforeUpdate: n,
                        update: function (e, t, i) {
                            var n = this;
                            return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                        },
                        afterUpdate: n,
                        beforeSetDimensions: n,
                        setDimensions: function () {
                            var e = this;
                            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                                width: 0,
                                height: 0
                            }
                        },
                        afterSetDimensions: n,
                        beforeBuildLabels: n,
                        buildLabels: n,
                        afterBuildLabels: n,
                        beforeFit: n,
                        fit: function () {
                            var t = this,
                                n = i.getValueOrDefault,
                                r = t.options,
                                a = e.defaults.global,
                                o = r.display,
                                s = n(r.fontSize, a.defaultFontSize),
                                l = t.minSize;
                            t.isHorizontal() ? (l.width = t.maxWidth, l.height = o ? s + 2 * r.padding : 0) : (l.width = o ? s + 2 * r.padding : 0, l.height = t.maxHeight), t.width = l.width, t.height = l.height
                        },
                        afterFit: n,
                        isHorizontal: function () {
                            var e = this.options.position;
                            return "top" === e || "bottom" === e
                        },
                        draw: function () {
                            var t = this,
                                n = t.ctx,
                                r = i.getValueOrDefault,
                                a = t.options,
                                o = e.defaults.global;
                            if (a.display) {
                                var s, l, u, c = r(a.fontSize, o.defaultFontSize),
                                    d = r(a.fontStyle, o.defaultFontStyle),
                                    h = r(a.fontFamily, o.defaultFontFamily),
                                    f = i.fontString(c, d, h),
                                    p = 0,
                                    g = t.top,
                                    m = t.left,
                                    v = t.bottom,
                                    y = t.right;
                                n.fillStyle = r(a.fontColor, o.defaultFontColor), n.font = f, t.isHorizontal() ? (s = m + (y - m) / 2, l = g + (v - g) / 2, u = y - m) : (s = "left" === a.position ? m + c / 2 : y - c / 2, l = g + (v - g) / 2, u = v - g, p = Math.PI * ("left" === a.position ? -.5 : .5)), n.save(), n.translate(s, l), n.rotate(p), n.textAlign = "center", n.textBaseline = "middle", n.fillText(a.text, 0, 0, u), n.restore()
                            }
                        }
                    }), e.plugins.register({
                        beforeInit: function (e) {
                            var i = e.options.title;
                            i && t(e, i)
                        },
                        beforeUpdate: function (n) {
                            var r = n.options.title;
                            r ? (r = i.configMerge(e.defaults.global.title, r), n.titleBlock ? n.titleBlock.options = r : t(n, r)) : (e.layoutService.removeBox(n, n.titleBlock), delete n.titleBlock)
                        }
                    })
                }
            }, {}],
            36: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(e, t) {
                        var i = l.color(e);
                        return i.alpha(t * i.alpha()).rgbaString()
                    }

                    function i(e, t) {
                        return t && (l.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
                    }

                    function n(e) {
                        var t = e._xScale,
                            i = e._yScale || e._scale,
                            n = e._index,
                            r = e._datasetIndex;
                        return {
                            xLabel: t ? t.getLabelForIndex(n, r) : "",
                            yLabel: i ? i.getLabelForIndex(n, r) : "",
                            index: n,
                            datasetIndex: r,
                            x: e._model.x,
                            y: e._model.y
                        }
                    }

                    function r(t) {
                        var i = e.defaults.global,
                            n = l.getValueOrDefault;
                        return {
                            xPadding: t.xPadding,
                            yPadding: t.yPadding,
                            xAlign: t.xAlign,
                            yAlign: t.yAlign,
                            bodyFontColor: t.bodyFontColor,
                            _bodyFontFamily: n(t.bodyFontFamily, i.defaultFontFamily),
                            _bodyFontStyle: n(t.bodyFontStyle, i.defaultFontStyle),
                            _bodyAlign: t.bodyAlign,
                            bodyFontSize: n(t.bodyFontSize, i.defaultFontSize),
                            bodySpacing: t.bodySpacing,
                            titleFontColor: t.titleFontColor,
                            _titleFontFamily: n(t.titleFontFamily, i.defaultFontFamily),
                            _titleFontStyle: n(t.titleFontStyle, i.defaultFontStyle),
                            titleFontSize: n(t.titleFontSize, i.defaultFontSize),
                            _titleAlign: t.titleAlign,
                            titleSpacing: t.titleSpacing,
                            titleMarginBottom: t.titleMarginBottom,
                            footerFontColor: t.footerFontColor,
                            _footerFontFamily: n(t.footerFontFamily, i.defaultFontFamily),
                            _footerFontStyle: n(t.footerFontStyle, i.defaultFontStyle),
                            footerFontSize: n(t.footerFontSize, i.defaultFontSize),
                            _footerAlign: t.footerAlign,
                            footerSpacing: t.footerSpacing,
                            footerMarginTop: t.footerMarginTop,
                            caretSize: t.caretSize,
                            cornerRadius: t.cornerRadius,
                            backgroundColor: t.backgroundColor,
                            opacity: 0,
                            legendColorBackground: t.multiKeyBackground,
                            displayColors: t.displayColors
                        }
                    }

                    function a(e, t) {
                        var i = e._chart.ctx,
                            n = 2 * t.yPadding,
                            r = 0,
                            a = t.body,
                            o = a.reduce(function (e, t) {
                                return e + t.before.length + t.lines.length + t.after.length
                            }, 0);
                        o += t.beforeBody.length + t.afterBody.length;
                        var s = t.title.length,
                            u = t.footer.length,
                            c = t.titleFontSize,
                            d = t.bodyFontSize,
                            h = t.footerFontSize;
                        n += s * c, n += s ? (s - 1) * t.titleSpacing : 0, n += s ? t.titleMarginBottom : 0, n += o * d, n += o ? (o - 1) * t.bodySpacing : 0, n += u ? t.footerMarginTop : 0, n += u * h, n += u ? (u - 1) * t.footerSpacing : 0;
                        var f = 0,
                            p = function (e) {
                                r = Math.max(r, i.measureText(e).width + f)
                            };
                        return i.font = l.fontString(c, t._titleFontStyle, t._titleFontFamily), l.each(t.title, p), i.font = l.fontString(d, t._bodyFontStyle, t._bodyFontFamily), l.each(t.beforeBody.concat(t.afterBody), p), f = t.displayColors ? d + 2 : 0, l.each(a, function (e) {
                            l.each(e.before, p), l.each(e.lines, p), l.each(e.after, p)
                        }), f = 0, i.font = l.fontString(h, t._footerFontStyle, t._footerFontFamily), l.each(t.footer, p), r += 2 * t.xPadding, {
                            width: r,
                            height: n
                        }
                    }

                    function o(e, t) {
                        var i = e._model,
                            n = e._chart,
                            r = e._chartInstance.chartArea,
                            a = "center",
                            o = "center";
                        i.y < t.height ? o = "top" : i.y > n.height - t.height && (o = "bottom");
                        var s, l, u, c, d, h = (r.left + r.right) / 2,
                            f = (r.top + r.bottom) / 2;
                        "center" === o ? (s = function (e) {
                            return h >= e
                        }, l = function (e) {
                            return e > h
                        }) : (s = function (e) {
                            return e <= t.width / 2
                        }, l = function (e) {
                            return e >= n.width - t.width / 2
                        }), u = function (e) {
                            return e + t.width > n.width
                        }, c = function (e) {
                            return e - t.width < 0
                        }, d = function (e) {
                            return f >= e ? "top" : "bottom"
                        }, s(i.x) ? (a = "left", u(i.x) && (a = "center", o = d(i.y))) : l(i.x) && (a = "right", c(i.x) && (a = "center", o = d(i.y)));
                        var p = e._options;
                        return {
                            xAlign: p.xAlign ? p.xAlign : a,
                            yAlign: p.yAlign ? p.yAlign : o
                        }
                    }

                    function s(e, t, i) {
                        var n = e.x,
                            r = e.y,
                            a = e.caretSize,
                            o = e.caretPadding,
                            s = e.cornerRadius,
                            l = i.xAlign,
                            u = i.yAlign,
                            c = a + o,
                            d = s + o;
                        return "right" === l ? n -= t.width : "center" === l && (n -= t.width / 2), "top" === u ? r += c : r -= "bottom" === u ? t.height + c : t.height / 2, "center" === u ? "left" === l ? n += c : "right" === l && (n -= c) : "left" === l ? n -= d : "right" === l && (n += d), {
                            x: n,
                            y: r
                        }
                    }
                    var l = e.helpers;
                    e.defaults.global.tooltips = {
                        enabled: !0,
                        custom: null,
                        mode: "nearest",
                        position: "average",
                        intersect: !0,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        titleFontStyle: "bold",
                        titleSpacing: 2,
                        titleMarginBottom: 6,
                        titleFontColor: "#fff",
                        titleAlign: "left",
                        bodySpacing: 2,
                        bodyFontColor: "#fff",
                        bodyAlign: "left",
                        footerFontStyle: "bold",
                        footerSpacing: 2,
                        footerMarginTop: 6,
                        footerFontColor: "#fff",
                        footerAlign: "left",
                        yPadding: 6,
                        xPadding: 6,
                        caretSize: 5,
                        cornerRadius: 6,
                        multiKeyBackground: "#fff",
                        displayColors: !0,
                        callbacks: {
                            beforeTitle: l.noop,
                            title: function (e, t) {
                                var i = "",
                                    n = t.labels,
                                    r = n ? n.length : 0;
                                if (e.length > 0) {
                                    var a = e[0];
                                    a.xLabel ? i = a.xLabel : r > 0 && a.index < r && (i = n[a.index])
                                }
                                return i
                            },
                            afterTitle: l.noop,
                            beforeBody: l.noop,
                            beforeLabel: l.noop,
                            label: function (e, t) {
                                var i = t.datasets[e.datasetIndex].label || "";
                                return i + ": " + e.yLabel
                            },
                            labelColor: function (e, t) {
                                var i = t.getDatasetMeta(e.datasetIndex),
                                    n = i.data[e.index],
                                    r = n._view;
                                return {
                                    borderColor: r.borderColor,
                                    backgroundColor: r.backgroundColor
                                }
                            },
                            afterLabel: l.noop,
                            afterBody: l.noop,
                            beforeFooter: l.noop,
                            footer: l.noop,
                            afterFooter: l.noop
                        }
                    }, e.Tooltip = e.Element.extend({
                        initialize: function () {
                            this._model = r(this._options)
                        },
                        getTitle: function () {
                            var e = this,
                                t = e._options,
                                n = t.callbacks,
                                r = n.beforeTitle.apply(e, arguments),
                                a = n.title.apply(e, arguments),
                                o = n.afterTitle.apply(e, arguments),
                                s = [];
                            return s = i(s, r), s = i(s, a), s = i(s, o)
                        },
                        getBeforeBody: function () {
                            var e = this._options.callbacks.beforeBody.apply(this, arguments);
                            return l.isArray(e) ? e : void 0 !== e ? [e] : []
                        },
                        getBody: function (e, t) {
                            var n = this,
                                r = n._options.callbacks,
                                a = [];
                            return l.each(e, function (e) {
                                var o = {
                                    before: [],
                                    lines: [],
                                    after: []
                                };
                                i(o.before, r.beforeLabel.call(n, e, t)), i(o.lines, r.label.call(n, e, t)), i(o.after, r.afterLabel.call(n, e, t)), a.push(o)
                            }), a
                        },
                        getAfterBody: function () {
                            var e = this._options.callbacks.afterBody.apply(this, arguments);
                            return l.isArray(e) ? e : void 0 !== e ? [e] : []
                        },
                        getFooter: function () {
                            var e = this,
                                t = e._options.callbacks,
                                n = t.beforeFooter.apply(e, arguments),
                                r = t.footer.apply(e, arguments),
                                a = t.afterFooter.apply(e, arguments),
                                o = [];
                            return o = i(o, n), o = i(o, r), o = i(o, a)
                        },
                        update: function (t) {
                            var i, u, c = this,
                                d = c._options,
                                h = c._model,
                                f = c._model = r(d),
                                p = c._active,
                                g = c._data,
                                m = c._chartInstance,
                                v = {
                                    xAlign: h.xAlign,
                                    yAlign: h.yAlign
                                },
                                y = {
                                    x: h.x,
                                    y: h.y
                                },
                                b = {
                                    width: h.width,
                                    height: h.height
                                },
                                _ = {
                                    x: h.caretX,
                                    y: h.caretY
                                };
                            if (p.length) {
                                f.opacity = 1;
                                var x = [];
                                _ = e.Tooltip.positioners[d.position](p, c._eventPosition);
                                var k = [];
                                for (i = 0, u = p.length; u > i; ++i) k.push(n(p[i]));
                                d.filter && (k = k.filter(function (e) {
                                    return d.filter(e, g)
                                })), d.itemSort && (k = k.sort(function (e, t) {
                                    return d.itemSort(e, t, g)
                                })), l.each(k, function (e) {
                                    x.push(d.callbacks.labelColor.call(c, e, m))
                                }), f.title = c.getTitle(k, g), f.beforeBody = c.getBeforeBody(k, g), f.body = c.getBody(k, g), f.afterBody = c.getAfterBody(k, g), f.footer = c.getFooter(k, g), f.x = Math.round(_.x), f.y = Math.round(_.y), f.caretPadding = l.getValueOrDefault(_.padding, 2), f.labelColors = x, f.dataPoints = k, b = a(this, f), v = o(this, b), y = s(f, b, v)
                            } else f.opacity = 0;
                            return f.xAlign = v.xAlign, f.yAlign = v.yAlign, f.x = y.x, f.y = y.y, f.width = b.width, f.height = b.height, f.caretX = _.x, f.caretY = _.y, c._model = f, t && d.custom && d.custom.call(c, f), c
                        },
                        drawCaret: function (e, i, n) {
                            var r, a, o, s, l, u, c = this._view,
                                d = this._chart.ctx,
                                h = c.caretSize,
                                f = c.cornerRadius,
                                p = c.xAlign,
                                g = c.yAlign,
                                m = e.x,
                                v = e.y,
                                y = i.width,
                                b = i.height;
                            "center" === g ? ("left" === p ? (r = m, a = r - h, o = r) : (r = m + y, a = r + h, o = r), l = v + b / 2, s = l - h, u = l + h) : ("left" === p ? (r = m + f, a = r + h, o = a + h) : "right" === p ? (r = m + y - f, a = r - h, o = a - h) : (a = m + y / 2, r = a - h, o = a + h), "top" === g ? (s = v, l = s - h, u = s) : (s = v + b, l = s + h, u = s)), d.fillStyle = t(c.backgroundColor, n), d.beginPath(), d.moveTo(r, s), d.lineTo(a, l), d.lineTo(o, u), d.closePath(), d.fill()
                        },
                        drawTitle: function (e, i, n, r) {
                            var a = i.title;
                            if (a.length) {
                                n.textAlign = i._titleAlign, n.textBaseline = "top";
                                var o = i.titleFontSize,
                                    s = i.titleSpacing;
                                n.fillStyle = t(i.titleFontColor, r), n.font = l.fontString(o, i._titleFontStyle, i._titleFontFamily);
                                var u, c;
                                for (u = 0, c = a.length; c > u; ++u) n.fillText(a[u], e.x, e.y), e.y += o + s, u + 1 === a.length && (e.y += i.titleMarginBottom - s)
                            }
                        },
                        drawBody: function (e, i, n, r) {
                            var a = i.bodyFontSize,
                                o = i.bodySpacing,
                                s = i.body;
                            n.textAlign = i._bodyAlign, n.textBaseline = "top";
                            var u = t(i.bodyFontColor, r);
                            n.fillStyle = u, n.font = l.fontString(a, i._bodyFontStyle, i._bodyFontFamily);
                            var c = 0,
                                d = function (t) {
                                    n.fillText(t, e.x + c, e.y), e.y += a + o
                                };
                            l.each(i.beforeBody, d);
                            var h = i.displayColors;
                            c = h ? a + 2 : 0, l.each(s, function (o, s) {
                                l.each(o.before, d), l.each(o.lines, function (o) {
                                    h && (n.fillStyle = t(i.legendColorBackground, r), n.fillRect(e.x, e.y, a, a), n.strokeStyle = t(i.labelColors[s].borderColor, r), n.strokeRect(e.x, e.y, a, a), n.fillStyle = t(i.labelColors[s].backgroundColor, r), n.fillRect(e.x + 1, e.y + 1, a - 2, a - 2), n.fillStyle = u), d(o)
                                }), l.each(o.after, d)
                            }), c = 0, l.each(i.afterBody, d), e.y -= o
                        },
                        drawFooter: function (e, i, n, r) {
                            var a = i.footer;
                            a.length && (e.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = t(i.footerFontColor, r), n.font = l.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), l.each(a, function (t) {
                                n.fillText(t, e.x, e.y), e.y += i.footerFontSize + i.footerSpacing
                            }))
                        },
                        drawBackground: function (e, i, n, r, a) {
                            n.fillStyle = t(i.backgroundColor, a), l.drawRoundedRectangle(n, e.x, e.y, r.width, r.height, i.cornerRadius), n.fill()
                        },
                        draw: function () {
                            var e = this._chart.ctx,
                                t = this._view;
                            if (0 !== t.opacity) {
                                var i = {
                                        width: t.width,
                                        height: t.height
                                    },
                                    n = {
                                        x: t.x,
                                        y: t.y
                                    },
                                    r = Math.abs(t.opacity < .001) ? 0 : t.opacity;
                                this._options.enabled && (this.drawBackground(n, t, e, i, r), this.drawCaret(n, i, r), n.x += t.xPadding, n.y += t.yPadding, this.drawTitle(n, t, e, r), this.drawBody(n, t, e, r), this.drawFooter(n, t, e, r))
                            }
                        },
                        handleEvent: function (e) {
                            var t = this,
                                i = t._options,
                                n = !1;
                            if (t._lastActive = t._lastActive || [], t._active = "mouseout" === e.type ? [] : t._chartInstance.getElementsAtEventForMode(e, i.mode, i), n = !l.arrayEquals(t._active, t._lastActive), t._lastActive = t._active, i.enabled || i.custom) {
                                t._eventPosition = {
                                    x: e.x,
                                    y: e.y
                                };
                                var r = t._model;
                                t.update(!0), t.pivot(), n |= r.x !== t._model.x || r.y !== t._model.y
                            }
                            return n
                        }
                    }), e.Tooltip.positioners = {
                        average: function (e) {
                            if (!e.length) return !1;
                            var t, i, n = 0,
                                r = 0,
                                a = 0;
                            for (t = 0, i = e.length; i > t; ++t) {
                                var o = e[t];
                                if (o && o.hasValue()) {
                                    var s = o.tooltipPosition();
                                    n += s.x, r += s.y, ++a
                                }
                            }
                            return {
                                x: Math.round(n / a),
                                y: Math.round(r / a)
                            }
                        },
                        nearest: function (e, t) {
                            var i, n, r, a = t.x,
                                o = t.y,
                                s = Number.POSITIVE_INFINITY;
                            for (n = 0, r = e.length; r > n; ++n) {
                                var u = e[n];
                                if (u && u.hasValue()) {
                                    var c = u.getCenterPoint(),
                                        d = l.distanceBetweenPoints(t, c);
                                    s > d && (s = d, i = u)
                                }
                            }
                            if (i) {
                                var h = i.tooltipPosition();
                                a = h.x, o = h.y
                            }
                            return {
                                x: a,
                                y: o
                            }
                        }
                    }
                }
            }, {}],
            37: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers,
                        i = e.defaults.global;
                    i.elements.arc = {
                        backgroundColor: i.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }, e.elements.Arc = e.Element.extend({
                        inLabelRange: function (e) {
                            var t = this._view;
                            return t ? Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2) : !1
                        },
                        inRange: function (e, i) {
                            var n = this._view;
                            if (n) {
                                for (var r = t.getAngleFromPoint(n, {
                                        x: e,
                                        y: i
                                    }), a = r.angle, o = r.distance, s = n.startAngle, l = n.endAngle; s > l;) l += 2 * Math.PI;
                                for (; a > l;) a -= 2 * Math.PI;
                                for (; s > a;) a += 2 * Math.PI;
                                var u = a >= s && l >= a,
                                    c = o >= n.innerRadius && o <= n.outerRadius;
                                return u && c
                            }
                            return !1
                        },
                        getCenterPoint: function () {
                            var e = this._view,
                                t = (e.startAngle + e.endAngle) / 2,
                                i = (e.innerRadius + e.outerRadius) / 2;
                            return {
                                x: e.x + Math.cos(t) * i,
                                y: e.y + Math.sin(t) * i
                            }
                        },
                        getArea: function () {
                            var e = this._view;
                            return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
                        },
                        tooltipPosition: function () {
                            var e = this._view,
                                t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                                i = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                            return {
                                x: e.x + Math.cos(t) * i,
                                y: e.y + Math.sin(t) * i
                            }
                        },
                        draw: function () {
                            var e = this._chart.ctx,
                                t = this._view,
                                i = t.startAngle,
                                n = t.endAngle;
                            e.beginPath(), e.arc(t.x, t.y, t.outerRadius, i, n), e.arc(t.x, t.y, t.innerRadius, n, i, !0), e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke()
                        }
                    })
                }
            }, {}],
            38: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers,
                        i = e.defaults.global;
                    e.defaults.global.elements.line = {
                        tension: .4,
                        backgroundColor: i.defaultColor,
                        borderWidth: 3,
                        borderColor: i.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }, e.elements.Line = e.Element.extend({
                        draw: function () {
                            function e(e, t) {
                                var i = t._view;
                                t._view.steppedLine === !0 ? (l.lineTo(i.x, e._view.y), l.lineTo(i.x, i.y)) : 0 === t._view.tension ? l.lineTo(i.x, i.y) : l.bezierCurveTo(e._view.controlPointNextX, e._view.controlPointNextY, i.controlPointPreviousX, i.controlPointPreviousY, i.x, i.y)
                            }
                            var n = this,
                                r = n._view,
                                a = r.spanGaps,
                                o = r.scaleZero,
                                s = n._loop;
                            s || ("top" === r.fill ? o = r.scaleTop : "bottom" === r.fill && (o = r.scaleBottom));
                            var l = n._chart.ctx;
                            l.save();
                            var u = n._children.slice(),
                                c = -1;
                            s && u.length && u.push(u[0]);
                            var d, h, f, p;
                            if (u.length && r.fill) {
                                for (l.beginPath(), d = 0; d < u.length; ++d) h = u[d], f = t.previousItem(u, d), p = h._view, 0 === d ? (s ? l.moveTo(o.x, o.y) : l.moveTo(p.x, o), p.skip || (c = d, l.lineTo(p.x, p.y))) : (f = -1 === c ? f : u[c], p.skip ? a || c !== d - 1 || (s ? l.lineTo(o.x, o.y) : l.lineTo(f._view.x, o)) : (c !== d - 1 ? a && -1 !== c ? e(f, h) : s ? l.lineTo(p.x, p.y) : (l.lineTo(p.x, o), l.lineTo(p.x, p.y)) : e(f, h), c = d));
                                s || -1 === c || l.lineTo(u[c]._view.x, o), l.fillStyle = r.backgroundColor || i.defaultColor, l.closePath(), l.fill()
                            }
                            var g = i.elements.line;
                            for (l.lineCap = r.borderCapStyle || g.borderCapStyle, l.setLineDash && l.setLineDash(r.borderDash || g.borderDash), l.lineDashOffset = r.borderDashOffset || g.borderDashOffset, l.lineJoin = r.borderJoinStyle || g.borderJoinStyle, l.lineWidth = r.borderWidth || g.borderWidth, l.strokeStyle = r.borderColor || i.defaultColor, l.beginPath(), c = -1, d = 0; d < u.length; ++d) h = u[d], f = t.previousItem(u, d), p = h._view, 0 === d ? p.skip || (l.moveTo(p.x, p.y), c = d) : (f = -1 === c ? f : u[c], p.skip || (c !== d - 1 && !a || -1 === c ? l.moveTo(p.x, p.y) : e(f, h), c = d));
                            l.stroke(), l.restore()
                        }
                    })
                }
            }, {}],
            39: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(e) {
                        var t = this._view;
                        return t ? Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hitRadius, 2) : !1
                    }

                    function i(e) {
                        var t = this._view;
                        return t ? Math.pow(e - t.y, 2) < Math.pow(t.radius + t.hitRadius, 2) : !1
                    }
                    var n = e.helpers,
                        r = e.defaults.global,
                        a = r.defaultColor;
                    r.elements.point = {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: a,
                        borderWidth: 1,
                        borderColor: a,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }, e.elements.Point = e.Element.extend({
                        inRange: function (e, t) {
                            var i = this._view;
                            return i ? Math.pow(e - i.x, 2) + Math.pow(t - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2) : !1
                        },
                        inLabelRange: t,
                        inXRange: t,
                        inYRange: i,
                        getCenterPoint: function () {
                            var e = this._view;
                            return {
                                x: e.x,
                                y: e.y
                            }
                        },
                        getArea: function () {
                            return Math.PI * Math.pow(this._view.radius, 2)
                        },
                        tooltipPosition: function () {
                            var e = this._view;
                            return {
                                x: e.x,
                                y: e.y,
                                padding: e.radius + e.borderWidth
                            }
                        },
                        draw: function (t) {
                            var i = this._view,
                                o = this._model,
                                s = this._chart.ctx,
                                l = i.pointStyle,
                                u = i.radius,
                                c = i.x,
                                d = i.y,
                                h = e.helpers.color,
                                f = 1.01,
                                p = 0;
                            i.skip || (s.strokeStyle = i.borderColor || a, s.lineWidth = n.getValueOrDefault(i.borderWidth, r.elements.point.borderWidth), s.fillStyle = i.backgroundColor || a, void 0 !== t && (o.x < t.left || t.right * f < o.x || o.y < t.top || t.bottom * f < o.y) && (o.x < t.left ? p = (c - o.x) / (t.left - o.x) : t.right * f < o.x ? p = (o.x - c) / (o.x - t.right) : o.y < t.top ? p = (d - o.y) / (t.top - o.y) : t.bottom * f < o.y && (p = (o.y - d) / (o.y - t.bottom)), p = Math.round(100 * p) / 100, s.strokeStyle = h(s.strokeStyle).alpha(p).rgbString(), s.fillStyle = h(s.fillStyle).alpha(p).rgbString()), e.canvasHelpers.drawPoint(s, l, u, c, d))
                        }
                    })
                }
            }, {}],
            40: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(e) {
                        return void 0 !== e._view.width
                    }

                    function i(e) {
                        var i, n, r, a, o = e._view;
                        if (t(e)) {
                            var s = o.width / 2;
                            i = o.x - s, n = o.x + s, r = Math.min(o.y, o.base), a = Math.max(o.y, o.base)
                        } else {
                            var l = o.height / 2;
                            i = Math.min(o.x, o.base), n = Math.max(o.x, o.base), r = o.y - l, a = o.y + l
                        }
                        return {
                            left: i,
                            top: r,
                            right: n,
                            bottom: a
                        }
                    }
                    var n = e.defaults.global;
                    n.elements.rectangle = {
                        backgroundColor: n.defaultColor,
                        borderWidth: 0,
                        borderColor: n.defaultColor,
                        borderSkipped: "bottom"
                    }, e.elements.Rectangle = e.Element.extend({
                        draw: function () {
                            function e(e) {
                                return v[(b + e) % 4]
                            }
                            var t, i, n, r, a, o, s, l = this._chart.ctx,
                                u = this._view,
                                c = u.borderWidth;
                            if (u.horizontal ? (t = u.base, i = u.x, n = u.y - u.height / 2, r = u.y + u.height / 2, a = i > t ? 1 : -1, o = 1, s = u.borderSkipped || "left") : (t = u.x - u.width / 2, i = u.x + u.width / 2, n = u.y, r = u.base, a = 1, o = r > n ? 1 : -1, s = u.borderSkipped || "bottom"), c) {
                                var d = Math.min(Math.abs(t - i), Math.abs(n - r));
                                c = c > d ? d : c;
                                var h = c / 2,
                                    f = t + ("left" !== s ? h * a : 0),
                                    p = i + ("right" !== s ? -h * a : 0),
                                    g = n + ("top" !== s ? h * o : 0),
                                    m = r + ("bottom" !== s ? -h * o : 0);
                                f !== p && (n = g, r = m), g !== m && (t = f, i = p)
                            }
                            l.beginPath(), l.fillStyle = u.backgroundColor, l.strokeStyle = u.borderColor, l.lineWidth = c;
                            var v = [
                                    [t, r],
                                    [t, n],
                                    [i, n],
                                    [i, r]
                                ],
                                y = ["bottom", "left", "top", "right"],
                                b = y.indexOf(s, 0); - 1 === b && (b = 0);
                            var _ = e(0);
                            l.moveTo(_[0], _[1]);
                            for (var x = 1; 4 > x; x++) _ = e(x), l.lineTo(_[0], _[1]);
                            l.fill(), c && l.stroke()
                        },
                        height: function () {
                            var e = this._view;
                            return e.base - e.y
                        },
                        inRange: function (e, t) {
                            var n = !1;
                            if (this._view) {
                                var r = i(this);
                                n = e >= r.left && e <= r.right && t >= r.top && t <= r.bottom
                            }
                            return n
                        },
                        inLabelRange: function (e, n) {
                            var r = this;
                            if (!r._view) return !1;
                            var a = !1,
                                o = i(r);
                            return a = t(r) ? e >= o.left && e <= o.right : n >= o.top && n <= o.bottom
                        },
                        inXRange: function (e) {
                            var t = i(this);
                            return e >= t.left && e <= t.right
                        },
                        inYRange: function (e) {
                            var t = i(this);
                            return e >= t.top && e <= t.bottom
                        },
                        getCenterPoint: function () {
                            var e, i, n = this._view;
                            return t(this) ? (e = n.x, i = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, i = n.y), {
                                x: e,
                                y: i
                            }
                        },
                        getArea: function () {
                            var e = this._view;
                            return e.width * Math.abs(e.y - e.base)
                        },
                        tooltipPosition: function () {
                            var e = this._view;
                            return {
                                x: e.x,
                                y: e.y
                            }
                        }
                    })
                }
            }, {}],
            41: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(e, t) {
                        var i = l.getStyle(e, t),
                            n = i && i.match(/(\d+)px/);
                        return n ? Number(n[1]) : void 0
                    }

                    function i(e, i) {
                        var n = e.style,
                            r = e.getAttribute("height"),
                            a = e.getAttribute("width");
                        if (e._chartjs = {
                                initial: {
                                    height: r,
                                    width: a,
                                    style: {
                                        display: n.display,
                                        height: n.height,
                                        width: n.width
                                    }
                                }
                            }, n.display = n.display || "block", null === a || "" === a) {
                            var o = t(e, "width");
                            void 0 !== o && (e.width = o)
                        }
                        if (null === r || "" === r)
                            if ("" === e.style.height) e.height = e.width / (i.options.aspectRatio || 2);
                            else {
                                var s = t(e, "height");
                                void 0 !== o && (e.height = s)
                            } return e
                    }

                    function n(e, t, i, n, r) {
                        return {
                            type: e,
                            chart: t,
                            "native": r || null,
                            x: void 0 !== i ? i : null,
                            y: void 0 !== n ? n : null
                        }
                    }

                    function r(e, t) {
                        var i = u[e.type] || e.type,
                            r = l.getRelativePosition(e, t);
                        return n(i, t, r.x, r.y, e)
                    }

                    function a(e) {
                        var t = document.createElement("iframe");
                        return t.className = "chartjs-hidden-iframe", t.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", t.tabIndex = -1, l.addEvent(t, "load", function () {
                            l.addEvent(t.contentWindow || t, "resize", e), e()
                        }), t
                    }

                    function o(e, t, i) {
                        var r = e._chartjs = {
                                ticking: !1
                            },
                            o = function () {
                                r.ticking || (r.ticking = !0, l.requestAnimFrame.call(window, function () {
                                    return r.resizer ? (r.ticking = !1, t(n("resize", i))) : void 0
                                }))
                            };
                        r.resizer = a(o), e.insertBefore(r.resizer, e.firstChild)
                    }

                    function s(e) {
                        if (e && e._chartjs) {
                            var t = e._chartjs.resizer;
                            t && (t.parentNode.removeChild(t), e._chartjs.resizer = null), delete e._chartjs
                        }
                    }
                    var l = e.helpers,
                        u = {
                            touchstart: "mousedown",
                            touchmove: "mousemove",
                            touchend: "mouseup",
                            pointerenter: "mouseenter",
                            pointerdown: "mousedown",
                            pointermove: "mousemove",
                            pointerup: "mouseup",
                            pointerleave: "mouseout",
                            pointerout: "mouseout"
                        };
                    return {
                        acquireContext: function (e, t) {
                            if ("string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e instanceof HTMLCanvasElement) {
                                var n = e.getContext && e.getContext("2d");
                                if (n instanceof CanvasRenderingContext2D) return i(e, t), n
                            }
                            return null
                        },
                        releaseContext: function (e) {
                            var t = e.canvas;
                            if (t._chartjs) {
                                var i = t._chartjs.initial;
                                ["height", "width"].forEach(function (e) {
                                    var n = i[e];
                                    void 0 === n || null === n ? t.removeAttribute(e) : t.setAttribute(e, n)
                                }), l.each(i.style || {}, function (e, i) {
                                    t.style[i] = e
                                }), t.width = t.width, delete t._chartjs
                            }
                        },
                        addEventListener: function (e, t, i) {
                            var n = e.chart.canvas;
                            if ("resize" === t) return void o(n.parentNode, i, e.chart);
                            var a = i._chartjs || (i._chartjs = {}),
                                s = a.proxies || (a.proxies = {}),
                                u = s[e.id + "_" + t] = function (t) {
                                    i(r(t, e.chart))
                                };
                            l.addEvent(n, t, u)
                        },
                        removeEventListener: function (e, t, i) {
                            var n = e.chart.canvas;
                            if ("resize" === t) return void s(n.parentNode, i);
                            var r = i._chartjs || {},
                                a = r.proxies || {},
                                o = a[e.id + "_" + t];
                            o && l.removeEvent(n, t, o)
                        }
                    }
                }
            }, {}],
            42: [function (e, t) {
                "use strict";
                var i = e(41);
                t.exports = function (e) {
                    e.platform = {
                        acquireContext: function () {},
                        releaseContext: function () {},
                        addEventListener: function () {},
                        removeEventListener: function () {}
                    }, e.helpers.extend(e.platform, i(e))
                }
            }, {
                41: 41
            }],
            43: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers,
                        i = {
                            position: "bottom"
                        },
                        n = e.Scale.extend({
                            getLabels: function () {
                                var e = this.chart.data;
                                return (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
                            },
                            determineDataLimits: function () {
                                var e = this,
                                    i = e.getLabels();
                                e.minIndex = 0, e.maxIndex = i.length - 1;
                                var n;
                                void 0 !== e.options.ticks.min && (n = t.indexOf(i, e.options.ticks.min), e.minIndex = -1 !== n ? n : e.minIndex), void 0 !== e.options.ticks.max && (n = t.indexOf(i, e.options.ticks.max), e.maxIndex = -1 !== n ? n : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
                            },
                            buildTicks: function () {
                                var e = this,
                                    t = e.getLabels();
                                e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
                            },
                            getLabelForIndex: function (e, t) {
                                var i = this,
                                    n = i.chart.data,
                                    r = i.isHorizontal();
                                return n.yLabels && !r ? i.getRightValue(n.datasets[t].data[e]) : i.ticks[e - i.minIndex]
                            },
                            getPixelForValue: function (e, t, i, n) {
                                var r = this,
                                    a = Math.max(r.maxIndex + 1 - r.minIndex - (r.options.gridLines.offsetGridLines ? 0 : 1), 1);
                                if (void 0 !== e && isNaN(t)) {
                                    var o = r.getLabels(),
                                        s = o.indexOf(e);
                                    t = -1 !== s ? s : t
                                }
                                if (r.isHorizontal()) {
                                    var l = r.width / a,
                                        u = l * (t - r.minIndex);
                                    return (r.options.gridLines.offsetGridLines && n || r.maxIndex === r.minIndex && n) && (u += l / 2), r.left + Math.round(u)
                                }
                                var c = r.height / a,
                                    d = c * (t - r.minIndex);
                                return r.options.gridLines.offsetGridLines && n && (d += c / 2), r.top + Math.round(d)
                            },
                            getPixelForTick: function (e, t) {
                                return this.getPixelForValue(this.ticks[e], e + this.minIndex, null, t)
                            },
                            getValueForPixel: function (e) {
                                var t, i = this,
                                    n = Math.max(i.ticks.length - (i.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                    r = i.isHorizontal(),
                                    a = (r ? i.width : i.height) / n;
                                return e -= r ? i.left : i.top, i.options.gridLines.offsetGridLines && (e -= a / 2), t = 0 >= e ? 0 : Math.round(e / a)
                            },
                            getBasePixel: function () {
                                return this.bottom
                            }
                        });
                    e.scaleService.registerScaleType("category", n, i)
                }
            }, {}],
            44: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers,
                        i = {
                            position: "left",
                            ticks: {
                                callback: e.Ticks.formatters.linear
                            }
                        },
                        n = e.LinearScaleBase.extend({
                            determineDataLimits: function () {
                                function e(e) {
                                    return s ? e.xAxisID === i.id : e.yAxisID === i.id
                                }
                                var i = this,
                                    n = i.options,
                                    r = i.chart,
                                    a = r.data,
                                    o = a.datasets,
                                    s = i.isHorizontal();
                                i.min = null, i.max = null;
                                var l = n.stacked;
                                if (void 0 === l && t.each(o, function (t, i) {
                                        if (!l) {
                                            var n = r.getDatasetMeta(i);
                                            r.isDatasetVisible(i) && e(n) && void 0 !== n.stack && (l = !0)
                                        }
                                    }), n.stacked || l) {
                                    var u = {};
                                    t.each(o, function (a, o) {
                                        var s = r.getDatasetMeta(o),
                                            l = [s.type, void 0 === n.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                        void 0 === u[l] && (u[l] = {
                                            positiveValues: [],
                                            negativeValues: []
                                        });
                                        var c = u[l].positiveValues,
                                            d = u[l].negativeValues;
                                        r.isDatasetVisible(o) && e(s) && t.each(a.data, function (e, t) {
                                            var r = +i.getRightValue(e);
                                            isNaN(r) || s.data[t].hidden || (c[t] = c[t] || 0, d[t] = d[t] || 0, n.relativePoints ? c[t] = 100 : 0 > r ? d[t] += r : c[t] += r)
                                        })
                                    }), t.each(u, function (e) {
                                        var n = e.positiveValues.concat(e.negativeValues),
                                            r = t.min(n),
                                            a = t.max(n);
                                        i.min = null === i.min ? r : Math.min(i.min, r), i.max = null === i.max ? a : Math.max(i.max, a)
                                    })
                                } else t.each(o, function (n, a) {
                                    var o = r.getDatasetMeta(a);
                                    r.isDatasetVisible(a) && e(o) && t.each(n.data, function (e, t) {
                                        var n = +i.getRightValue(e);
                                        isNaN(n) || o.data[t].hidden || (null === i.min ? i.min = n : n < i.min && (i.min = n), null === i.max ? i.max = n : n > i.max && (i.max = n))
                                    })
                                });
                                this.handleTickRangeOptions()
                            },
                            getTickLimit: function () {
                                var i, n = this,
                                    r = n.options.ticks;
                                if (n.isHorizontal()) i = Math.min(r.maxTicksLimit ? r.maxTicksLimit : 11, Math.ceil(n.width / 50));
                                else {
                                    var a = t.getValueOrDefault(r.fontSize, e.defaults.global.defaultFontSize);
                                    i = Math.min(r.maxTicksLimit ? r.maxTicksLimit : 11, Math.ceil(n.height / (2 * a)))
                                }
                                return i
                            },
                            handleDirectionalChanges: function () {
                                this.isHorizontal() || this.ticks.reverse()
                            },
                            getLabelForIndex: function (e, t) {
                                return +this.getRightValue(this.chart.data.datasets[t].data[e])
                            },
                            getPixelForValue: function (e) {
                                var t, i = this,
                                    n = i.start,
                                    r = +i.getRightValue(e),
                                    a = i.end - n;
                                return i.isHorizontal() ? (t = i.left + i.width / a * (r - n), Math.round(t)) : (t = i.bottom - i.height / a * (r - n), Math.round(t))
                            },
                            getValueForPixel: function (e) {
                                var t = this,
                                    i = t.isHorizontal(),
                                    n = i ? t.width : t.height,
                                    r = (i ? e - t.left : t.bottom - e) / n;
                                return t.start + (t.end - t.start) * r
                            },
                            getPixelForTick: function (e) {
                                return this.getPixelForValue(this.ticksAsNumbers[e])
                            }
                        });
                    e.scaleService.registerScaleType("linear", n, i)
                }
            }, {}],
            45: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers,
                        i = t.noop;
                    e.LinearScaleBase = e.Scale.extend({
                        handleTickRangeOptions: function () {
                            var e = this,
                                i = e.options,
                                n = i.ticks;
                            if (n.beginAtZero) {
                                var r = t.sign(e.min),
                                    a = t.sign(e.max);
                                0 > r && 0 > a ? e.max = 0 : r > 0 && a > 0 && (e.min = 0)
                            }
                            void 0 !== n.min ? e.min = n.min : void 0 !== n.suggestedMin && (e.min = Math.min(e.min, n.suggestedMin)), void 0 !== n.max ? e.max = n.max : void 0 !== n.suggestedMax && (e.max = Math.max(e.max, n.suggestedMax)), e.min === e.max && (e.max++, n.beginAtZero || e.min--)
                        },
                        getTickLimit: i,
                        handleDirectionalChanges: i,
                        buildTicks: function () {
                            var i = this,
                                n = i.options,
                                r = n.ticks,
                                a = i.getTickLimit();
                            a = Math.max(2, a);
                            var o = {
                                    maxTicks: a,
                                    min: r.min,
                                    max: r.max,
                                    stepSize: t.getValueOrDefault(r.fixedStepSize, r.stepSize)
                                },
                                s = i.ticks = e.Ticks.generators.linear(o, i);
                            i.handleDirectionalChanges(), i.max = t.max(s), i.min = t.min(s), r.reverse ? (s.reverse(), i.start = i.max, i.end = i.min) : (i.start = i.min, i.end = i.max)
                        },
                        convertTicksToLabels: function () {
                            var t = this;
                            t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
                        }
                    })
                }
            }, {}],
            46: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    var t = e.helpers,
                        i = {
                            position: "left",
                            ticks: {
                                callback: e.Ticks.formatters.logarithmic
                            }
                        },
                        n = e.Scale.extend({
                            determineDataLimits: function () {
                                function e(e) {
                                    return u ? e.xAxisID === i.id : e.yAxisID === i.id
                                }
                                var i = this,
                                    n = i.options,
                                    r = n.ticks,
                                    a = i.chart,
                                    o = a.data,
                                    s = o.datasets,
                                    l = t.getValueOrDefault,
                                    u = i.isHorizontal();
                                i.min = null, i.max = null, i.minNotZero = null;
                                var c = n.stacked;
                                if (void 0 === c && t.each(s, function (t, i) {
                                        if (!c) {
                                            var n = a.getDatasetMeta(i);
                                            a.isDatasetVisible(i) && e(n) && void 0 !== n.stack && (c = !0)
                                        }
                                    }), n.stacked || c) {
                                    var d = {};
                                    t.each(s, function (r, o) {
                                        var s = a.getDatasetMeta(o),
                                            l = [s.type, void 0 === n.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                        a.isDatasetVisible(o) && e(s) && (void 0 === d[l] && (d[l] = []), t.each(r.data, function (e, t) {
                                            var r = d[l],
                                                a = +i.getRightValue(e);
                                            isNaN(a) || s.data[t].hidden || (r[t] = r[t] || 0, n.relativePoints ? r[t] = 100 : r[t] += a)
                                        }))
                                    }), t.each(d, function (e) {
                                        var n = t.min(e),
                                            r = t.max(e);
                                        i.min = null === i.min ? n : Math.min(i.min, n), i.max = null === i.max ? r : Math.max(i.max, r)
                                    })
                                } else t.each(s, function (n, r) {
                                    var o = a.getDatasetMeta(r);
                                    a.isDatasetVisible(r) && e(o) && t.each(n.data, function (e, t) {
                                        var n = +i.getRightValue(e);
                                        isNaN(n) || o.data[t].hidden || (null === i.min ? i.min = n : n < i.min && (i.min = n), null === i.max ? i.max = n : n > i.max && (i.max = n), 0 !== n && (null === i.minNotZero || n < i.minNotZero) && (i.minNotZero = n))
                                    })
                                });
                                i.min = l(r.min, i.min), i.max = l(r.max, i.max), i.min === i.max && (0 !== i.min && null !== i.min ? (i.min = Math.pow(10, Math.floor(t.log10(i.min)) - 1), i.max = Math.pow(10, Math.floor(t.log10(i.max)) + 1)) : (i.min = 1, i.max = 10))
                            },
                            buildTicks: function () {
                                var i = this,
                                    n = i.options,
                                    r = n.ticks,
                                    a = {
                                        min: r.min,
                                        max: r.max
                                    },
                                    o = i.ticks = e.Ticks.generators.logarithmic(a, i);
                                i.isHorizontal() || o.reverse(), i.max = t.max(o), i.min = t.min(o), r.reverse ? (o.reverse(), i.start = i.max, i.end = i.min) : (i.start = i.min, i.end = i.max)
                            },
                            convertTicksToLabels: function () {
                                this.tickValues = this.ticks.slice(), e.Scale.prototype.convertTicksToLabels.call(this)
                            },
                            getLabelForIndex: function (e, t) {
                                return +this.getRightValue(this.chart.data.datasets[t].data[e])
                            },
                            getPixelForTick: function (e) {
                                return this.getPixelForValue(this.tickValues[e])
                            },
                            getPixelForValue: function (e) {
                                var i, n, r, a = this,
                                    o = a.start,
                                    s = +a.getRightValue(e),
                                    l = a.options,
                                    u = l.ticks;
                                return a.isHorizontal() ? (r = t.log10(a.end) - t.log10(o), 0 === s ? n = a.left : (i = a.width, n = a.left + i / r * (t.log10(s) - t.log10(o)))) : (i = a.height, 0 !== o || u.reverse ? 0 === a.end && u.reverse ? (r = t.log10(a.start) - t.log10(a.minNotZero), n = s === a.end ? a.top : s === a.minNotZero ? a.top + .02 * i : a.top + .02 * i + .98 * i / r * (t.log10(s) - t.log10(a.minNotZero))) : (r = t.log10(a.end) - t.log10(o), i = a.height, n = a.bottom - i / r * (t.log10(s) - t.log10(o))) : (r = t.log10(a.end) - t.log10(a.minNotZero), n = s === o ? a.bottom : s === a.minNotZero ? a.bottom - .02 * i : a.bottom - .02 * i - .98 * i / r * (t.log10(s) - t.log10(a.minNotZero)))), n
                            },
                            getValueForPixel: function (e) {
                                var i, n, r = this,
                                    a = t.log10(r.end) - t.log10(r.start);
                                return r.isHorizontal() ? (n = r.width, i = r.start * Math.pow(10, (e - r.left) * a / n)) : (n = r.height, i = Math.pow(10, (r.bottom - e) * a / n) / r.start), i
                            }
                        });
                    e.scaleService.registerScaleType("logarithmic", n, i)
                }
            }, {}],
            47: [function (e, t) {
                "use strict";
                t.exports = function (e) {
                    function t(e) {
                        return e.options.lineArc ? 0 : e.chart.data.labels.length
                    }

                    function i(e) {
                        var t = e.options.pointLabels,
                            i = f.getValueOrDefault(t.fontSize, p.defaultFontSize),
                            n = f.getValueOrDefault(t.fontStyle, p.defaultFontStyle),
                            r = f.getValueOrDefault(t.fontFamily, p.defaultFontFamily),
                            a = f.fontString(i, n, r);
                        return {
                            size: i,
                            style: n,
                            family: r,
                            font: a
                        }
                    }

                    function n(e, t, i) {
                        return f.isArray(i) ? {
                            w: f.longestText(e, e.font, i),
                            h: i.length * t + 1.5 * (i.length - 1) * t
                        } : {
                            w: e.measureText(i).width,
                            h: t
                        }
                    }

                    function r(e, t, i, n, r) {
                        return e === n || e === r ? {
                            start: t - i / 2,
                            end: t + i / 2
                        } : n > e || e > r ? {
                            start: t - i - 5,
                            end: t
                        } : {
                            start: t,
                            end: t + i + 5
                        }
                    }

                    function a(e) {
                        var a, o, s, l = i(e),
                            u = Math.min(e.height / 2, e.width / 2),
                            c = {
                                l: e.width,
                                r: 0,
                                t: e.height,
                                b: 0
                            },
                            d = {};
                        e.ctx.font = l.font, e._pointLabelSizes = [];
                        var h = t(e);
                        for (a = 0; h > a; a++) {
                            s = e.getPointPosition(a, u), o = n(e.ctx, l.size, e.pointLabels[a] || ""), e._pointLabelSizes[a] = o;
                            var p = e.getIndexAngle(a),
                                g = f.toDegrees(p) % 360,
                                m = r(g, s.x, o.w, 0, 180),
                                v = r(g, s.y, o.h, 90, 270);
                            m.start < c.l && (c.l = m.start, d.l = p), m.end > c.r && (c.r = m.end, d.r = p), v.start < c.t && (c.t = v.start, d.t = p), v.end > c.b && (c.b = v.end, d.b = p)
                        }
                        e.setReductions(u, c, d)
                    }

                    function o(e) {
                        var t = Math.min(e.height / 2, e.width / 2);
                        e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0)
                    }

                    function s(e) {
                        return 0 === e || 180 === e ? "center" : 180 > e ? "left" : "right"
                    }

                    function l(e, t, i, n) {
                        if (f.isArray(t))
                            for (var r = i.y, a = 1.5 * n, o = 0; o < t.length; ++o) e.fillText(t[o], i.x, r), r += a;
                        else e.fillText(t, i.x, i.y)
                    }

                    function u(e, t, i) {
                        90 === e || 270 === e ? i.y -= t.h / 2 : (e > 270 || 90 > e) && (i.y -= t.h)
                    }

                    function c(e) {
                        var n = e.ctx,
                            r = f.getValueOrDefault,
                            a = e.options,
                            o = a.angleLines,
                            c = a.pointLabels;
                        n.lineWidth = o.lineWidth, n.strokeStyle = o.color;
                        var d = e.getDistanceFromCenterForValue(a.reverse ? e.min : e.max),
                            h = i(e);
                        n.textBaseline = "top";
                        for (var g = t(e) - 1; g >= 0; g--) {
                            if (o.display) {
                                var m = e.getPointPosition(g, d);
                                n.beginPath(), n.moveTo(e.xCenter, e.yCenter), n.lineTo(m.x, m.y), n.stroke(), n.closePath()
                            }
                            var v = e.getPointPosition(g, d + 5),
                                y = r(c.fontColor, p.defaultFontColor);
                            n.font = h.font, n.fillStyle = y;
                            var b = e.getIndexAngle(g),
                                _ = f.toDegrees(b);
                            n.textAlign = s(_), u(_, e._pointLabelSizes[g], v), l(n, e.pointLabels[g] || "", v, h.size)
                        }
                    }

                    function d(e, i, n, r) {
                        var a = e.ctx;
                        if (a.strokeStyle = f.getValueAtIndexOrDefault(i.color, r - 1), a.lineWidth = f.getValueAtIndexOrDefault(i.lineWidth, r - 1), e.options.lineArc) a.beginPath(), a.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI), a.closePath(), a.stroke();
                        else {
                            var o = t(e);
                            if (0 === o) return;
                            a.beginPath();
                            var s = e.getPointPosition(0, n);
                            a.moveTo(s.x, s.y);
                            for (var l = 1; o > l; l++) s = e.getPointPosition(l, n), a.lineTo(s.x, s.y);
                            a.closePath(), a.stroke()
                        }
                    }

                    function h(e) {
                        return f.isNumber(e) ? e : 0
                    }
                    var f = e.helpers,
                        p = e.defaults.global,
                        g = {
                            display: !0,
                            animate: !0,
                            lineArc: !1,
                            position: "chartArea",
                            angleLines: {
                                display: !0,
                                color: "rgba(0, 0, 0, 0.1)",
                                lineWidth: 1
                            },
                            ticks: {
                                showLabelBackdrop: !0,
                                backdropColor: "rgba(255,255,255,0.75)",
                                backdropPaddingY: 2,
                                backdropPaddingX: 2,
                                callback: e.Ticks.formatters.linear
                            },
                            pointLabels: {
                                fontSize: 10,
                                callback: function (e) {
                                    return e
                                }
                            }
                        },
                        m = e.LinearScaleBase.extend({
                            setDimensions: function () {
                                var e = this,
                                    t = e.options,
                                    i = t.ticks;
                                e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                                var n = f.min([e.height, e.width]),
                                    r = f.getValueOrDefault(i.fontSize, p.defaultFontSize);
                                e.drawingArea = t.display ? n / 2 - (r / 2 + i.backdropPaddingY) : n / 2
                            },
                            determineDataLimits: function () {
                                var e = this,
                                    t = e.chart,
                                    i = Number.POSITIVE_INFINITY,
                                    n = Number.NEGATIVE_INFINITY;
                                f.each(t.data.datasets, function (r, a) {
                                    if (t.isDatasetVisible(a)) {
                                        var o = t.getDatasetMeta(a);
                                        f.each(r.data, function (t, r) {
                                            var a = +e.getRightValue(t);
                                            isNaN(a) || o.data[r].hidden || (i = Math.min(a, i), n = Math.max(a, n))
                                        })
                                    }
                                }), e.min = i === Number.POSITIVE_INFINITY ? 0 : i, e.max = n === Number.NEGATIVE_INFINITY ? 0 : n, e.handleTickRangeOptions()
                            },
                            getTickLimit: function () {
                                var e = this.options.ticks,
                                    t = f.getValueOrDefault(e.fontSize, p.defaultFontSize);
                                return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * t)))
                            },
                            convertTicksToLabels: function () {
                                var t = this;
                                e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                            },
                            getLabelForIndex: function (e, t) {
                                return +this.getRightValue(this.chart.data.datasets[t].data[e])
                            },
                            fit: function () {
                                this.options.lineArc ? o(this) : a(this)
                            },
                            setReductions: function (e, t, i) {
                                var n = this,
                                    r = t.l / Math.sin(i.l),
                                    a = Math.max(t.r - n.width, 0) / Math.sin(i.r),
                                    o = -t.t / Math.cos(i.t),
                                    s = -Math.max(t.b - n.height, 0) / Math.cos(i.b);
                                r = h(r), a = h(a), o = h(o), s = h(s), n.drawingArea = Math.min(Math.round(e - (r + a) / 2), Math.round(e - (o + s) / 2)), n.setCenterPoint(r, a, o, s)
                            },
                            setCenterPoint: function (e, t, i, n) {
                                var r = this,
                                    a = r.width - t - r.drawingArea,
                                    o = e + r.drawingArea,
                                    s = i + r.drawingArea,
                                    l = r.height - n - r.drawingArea;
                                r.xCenter = Math.round((o + a) / 2 + r.left), r.yCenter = Math.round((s + l) / 2 + r.top)
                            },
                            getIndexAngle: function (e) {
                                var i = 2 * Math.PI / t(this),
                                    n = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                                    r = n * Math.PI * 2 / 360;
                                return e * i + r
                            },
                            getDistanceFromCenterForValue: function (e) {
                                var t = this;
                                if (null === e) return 0;
                                var i = t.drawingArea / (t.max - t.min);
                                return t.options.reverse ? (t.max - e) * i : (e - t.min) * i
                            },
                            getPointPosition: function (e, t) {
                                var i = this,
                                    n = i.getIndexAngle(e) - Math.PI / 2;
                                return {
                                    x: Math.round(Math.cos(n) * t) + i.xCenter,
                                    y: Math.round(Math.sin(n) * t) + i.yCenter
                                }
                            },
                            getPointPositionForValue: function (e, t) {
                                return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
                            },
                            getBasePosition: function () {
                                var e = this,
                                    t = e.min,
                                    i = e.max;
                                return e.getPointPositionForValue(0, e.beginAtZero ? 0 : 0 > t && 0 > i ? i : t > 0 && i > 0 ? t : 0)
                            },
                            draw: function () {
                                var e = this,
                                    t = e.options,
                                    i = t.gridLines,
                                    n = t.ticks,
                                    r = f.getValueOrDefault;
                                if (t.display) {
                                    var a = e.ctx,
                                        o = r(n.fontSize, p.defaultFontSize),
                                        s = r(n.fontStyle, p.defaultFontStyle),
                                        l = r(n.fontFamily, p.defaultFontFamily),
                                        u = f.fontString(o, s, l);
                                    f.each(e.ticks, function (s, l) {
                                        if (l > 0 || t.reverse) {
                                            var c = e.getDistanceFromCenterForValue(e.ticksAsNumbers[l]),
                                                h = e.yCenter - c;
                                            if (i.display && 0 !== l && d(e, i, c, l), n.display) {
                                                var f = r(n.fontColor, p.defaultFontColor);
                                                if (a.font = u, n.showLabelBackdrop) {
                                                    var g = a.measureText(s).width;
                                                    a.fillStyle = n.backdropColor, a.fillRect(e.xCenter - g / 2 - n.backdropPaddingX, h - o / 2 - n.backdropPaddingY, g + 2 * n.backdropPaddingX, o + 2 * n.backdropPaddingY)
                                                }
                                                a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = f, a.fillText(s, e.xCenter, h)
                                            }
                                        }
                                    }), t.lineArc || c(e)
                                }
                            }
                        });
                    e.scaleService.registerScaleType("radialLinear", m, g)
                }
            }, {}],
            48: [function (e, t) {
                "use strict";
                var i = e(6);
                i = "function" == typeof i ? i : window.moment, t.exports = function (e) {
                    var t = e.helpers,
                        n = {
                            units: [{
                                name: "millisecond",
                                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                            }, {
                                name: "second",
                                steps: [1, 2, 5, 10, 30]
                            }, {
                                name: "minute",
                                steps: [1, 2, 5, 10, 30]
                            }, {
                                name: "hour",
                                steps: [1, 2, 3, 6, 12]
                            }, {
                                name: "day",
                                steps: [1, 2, 5]
                            }, {
                                name: "week",
                                maxStep: 4
                            }, {
                                name: "month",
                                maxStep: 3
                            }, {
                                name: "quarter",
                                maxStep: 4
                            }, {
                                name: "year",
                                maxStep: !1
                            }]
                        },
                        r = {
                            position: "bottom",
                            time: {
                                parser: !1,
                                format: !1,
                                unit: !1,
                                round: !1,
                                displayFormat: !1,
                                isoWeekday: !1,
                                minUnit: "millisecond",
                                displayFormats: {
                                    millisecond: "h:mm:ss.SSS a",
                                    second: "h:mm:ss a",
                                    minute: "h:mm:ss a",
                                    hour: "MMM D, hA",
                                    day: "ll",
                                    week: "ll",
                                    month: "MMM YYYY",
                                    quarter: "[Q]Q - YYYY",
                                    year: "YYYY"
                                }
                            },
                            ticks: {
                                autoSkip: !1
                            }
                        },
                        a = e.Scale.extend({
                            initialize: function () {
                                if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                                e.Scale.prototype.initialize.call(this)
                            },
                            getLabelMoment: function (e, t) {
                                return null === e || null === t ? null : "undefined" != typeof this.labelMoments[e] ? this.labelMoments[e][t] : null
                            },
                            getLabelDiff: function (e, t) {
                                var i = this;
                                return null === e || null === t ? null : (void 0 === i.labelDiffs && i.buildLabelDiffs(), "undefined" != typeof i.labelDiffs[e] ? i.labelDiffs[e][t] : null)
                            },
                            getMomentStartOf: function (e) {
                                var t = this;
                                return "week" === t.options.time.unit && t.options.time.isoWeekday !== !1 ? e.clone().startOf("isoWeek").isoWeekday(t.options.time.isoWeekday) : e.clone().startOf(t.tickUnit)
                            },
                            determineDataLimits: function () {
                                var e = this;
                                e.labelMoments = [];
                                var n = [];
                                e.chart.data.labels && e.chart.data.labels.length > 0 ? (t.each(e.chart.data.labels, function (t) {
                                    var i = e.parseTime(t);
                                    i.isValid() && (e.options.time.round && i.startOf(e.options.time.round), n.push(i))
                                }, e), e.firstTick = i.min.call(e, n), e.lastTick = i.max.call(e, n)) : (e.firstTick = null, e.lastTick = null), t.each(e.chart.data.datasets, function (r, a) {
                                    var o = [],
                                        s = e.chart.isDatasetVisible(a);
                                    "object" == typeof r.data[0] && null !== r.data[0] ? t.each(r.data, function (t) {
                                        var n = e.parseTime(e.getRightValue(t));
                                        n.isValid() && (e.options.time.round && n.startOf(e.options.time.round), o.push(n), s && (e.firstTick = null !== e.firstTick ? i.min(e.firstTick, n) : n, e.lastTick = null !== e.lastTick ? i.max(e.lastTick, n) : n))
                                    }, e) : o = n, e.labelMoments.push(o)
                                }, e), e.options.time.min && (e.firstTick = e.parseTime(e.options.time.min)), e.options.time.max && (e.lastTick = e.parseTime(e.options.time.max)), e.firstTick = (e.firstTick || i()).clone(), e.lastTick = (e.lastTick || i()).clone()
                            },
                            buildLabelDiffs: function () {
                                var e = this;
                                e.labelDiffs = [];
                                var i = [];
                                e.chart.data.labels && e.chart.data.labels.length > 0 && t.each(e.chart.data.labels, function (t) {
                                    var n = e.parseTime(t);
                                    n.isValid() && (e.options.time.round && n.startOf(e.options.time.round), i.push(n.diff(e.firstTick, e.tickUnit, !0)))
                                }, e), t.each(e.chart.data.datasets, function (n) {
                                    var r = [];
                                    "object" == typeof n.data[0] && null !== n.data[0] ? t.each(n.data, function (t) {
                                        var i = e.parseTime(e.getRightValue(t));
                                        i.isValid() && (e.options.time.round && i.startOf(e.options.time.round), r.push(i.diff(e.firstTick, e.tickUnit, !0)))
                                    }, e) : r = i, e.labelDiffs.push(r)
                                }, e)
                            },
                            buildTicks: function () {
                                var i = this;
                                i.ctx.save();
                                var r = t.getValueOrDefault(i.options.ticks.fontSize, e.defaults.global.defaultFontSize),
                                    a = t.getValueOrDefault(i.options.ticks.fontStyle, e.defaults.global.defaultFontStyle),
                                    o = t.getValueOrDefault(i.options.ticks.fontFamily, e.defaults.global.defaultFontFamily),
                                    s = t.fontString(r, a, o);
                                if (i.ctx.font = s, i.ticks = [], i.unitScale = 1, i.scaleSizeInUnits = 0, i.options.time.unit) i.tickUnit = i.options.time.unit || "day", i.displayFormat = i.options.time.displayFormats[i.tickUnit], i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.unitScale = t.getValueOrDefault(i.options.time.unitStepSize, 1);
                                else {
                                    var l = i.isHorizontal() ? i.width : i.height,
                                        u = i.tickFormatFunction(i.firstTick, 0, []),
                                        c = i.ctx.measureText(u).width,
                                        d = Math.cos(t.toRadians(i.options.ticks.maxRotation)),
                                        h = Math.sin(t.toRadians(i.options.ticks.maxRotation));
                                    c = c * d + r * h;
                                    var f = l / c;
                                    i.tickUnit = i.options.time.minUnit, i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.displayFormat = i.options.time.displayFormats[i.tickUnit];
                                    for (var p = 0, g = n.units[p]; p < n.units.length;) {
                                        if (i.unitScale = 1, t.isArray(g.steps) && Math.ceil(i.scaleSizeInUnits / f) < t.max(g.steps)) {
                                            for (var m = 0; m < g.steps.length; ++m)
                                                if (g.steps[m] >= Math.ceil(i.scaleSizeInUnits / f)) {
                                                    i.unitScale = t.getValueOrDefault(i.options.time.unitStepSize, g.steps[m]);
                                                    break
                                                } break
                                        }
                                        if (g.maxStep === !1 || Math.ceil(i.scaleSizeInUnits / f) < g.maxStep) {
                                            i.unitScale = t.getValueOrDefault(i.options.time.unitStepSize, Math.ceil(i.scaleSizeInUnits / f));
                                            break
                                        }++p, g = n.units[p], i.tickUnit = g.name;
                                        var v = i.firstTick.diff(i.getMomentStartOf(i.firstTick), i.tickUnit, !0),
                                            y = i.getMomentStartOf(i.lastTick.clone().add(1, i.tickUnit)).diff(i.lastTick, i.tickUnit, !0);
                                        i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0) + v + y, i.displayFormat = i.options.time.displayFormats[g.name]
                                    }
                                }
                                var b;
                                if (i.options.time.min ? b = i.getMomentStartOf(i.firstTick) : (i.firstTick = i.getMomentStartOf(i.firstTick), b = i.firstTick), !i.options.time.max) {
                                    var _ = i.getMomentStartOf(i.lastTick),
                                        x = _.diff(i.lastTick, i.tickUnit, !0);
                                    0 > x ? i.lastTick = i.getMomentStartOf(i.lastTick.add(1, i.tickUnit)) : x >= 0 && (i.lastTick = _), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0)
                                }
                                i.options.time.displayFormat && (i.displayFormat = i.options.time.displayFormat), i.ticks.push(i.firstTick.clone());
                                for (var k = i.unitScale; k <= i.scaleSizeInUnits; k += i.unitScale) {
                                    var w = b.clone().add(k, i.tickUnit);
                                    if (i.options.time.max && w.diff(i.lastTick, i.tickUnit, !0) >= 0) break;
                                    i.ticks.push(w)
                                }
                                var S = i.ticks[i.ticks.length - 1].diff(i.lastTick, i.tickUnit);
                                (0 !== S || 0 === i.scaleSizeInUnits) && (i.options.time.max ? (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.ticks[0], i.tickUnit, !0)) : (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0))), i.ctx.restore(), i.labelDiffs = void 0
                            },
                            getLabelForIndex: function (e, t) {
                                var i = this,
                                    n = i.chart.data.labels && e < i.chart.data.labels.length ? i.chart.data.labels[e] : "",
                                    r = i.chart.data.datasets[t].data[e];
                                return null !== r && "object" == typeof r && (n = i.getRightValue(r)), i.options.time.tooltipFormat && (n = i.parseTime(n).format(i.options.time.tooltipFormat)), n
                            },
                            tickFormatFunction: function (e, i, n) {
                                var r = e.format(this.displayFormat),
                                    a = this.options.ticks,
                                    o = t.getValueOrDefault(a.callback, a.userCallback);
                                return o ? o(r, i, n) : r
                            },
                            convertTicksToLabels: function () {
                                var e = this;
                                e.tickMoments = e.ticks, e.ticks = e.ticks.map(e.tickFormatFunction, e)
                            },
                            getPixelForValue: function (e, t, i) {
                                var n = this,
                                    r = null;
                                if (void 0 !== t && void 0 !== i && (r = n.getLabelDiff(i, t)), null === r && (e && e.isValid || (e = n.parseTime(n.getRightValue(e))), e && e.isValid && e.isValid() && (r = e.diff(n.firstTick, n.tickUnit, !0))), null !== r) {
                                    var a = 0 !== r ? r / n.scaleSizeInUnits : r;
                                    if (n.isHorizontal()) {
                                        var o = n.width * a;
                                        return n.left + Math.round(o)
                                    }
                                    var s = n.height * a;
                                    return n.top + Math.round(s)
                                }
                            },
                            getPixelForTick: function (e) {
                                return this.getPixelForValue(this.tickMoments[e], null, null)
                            },
                            getValueForPixel: function (e) {
                                var t = this,
                                    n = t.isHorizontal() ? t.width : t.height,
                                    r = (e - (t.isHorizontal() ? t.left : t.top)) / n;
                                return r *= t.scaleSizeInUnits, t.firstTick.clone().add(i.duration(r, t.tickUnit).asSeconds(), "seconds")
                            },
                            parseTime: function (e) {
                                var t = this;
                                return "string" == typeof t.options.time.parser ? i(e, t.options.time.parser) : "function" == typeof t.options.time.parser ? t.options.time.parser(e) : "function" == typeof e.getMonth || "number" == typeof e ? i(e) : e.isValid && e.isValid() ? e : "string" != typeof t.options.time.format && t.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), t.options.time.format(e)) : i(e, t.options.time.format)
                            }
                        });
                    e.scaleService.registerScaleType("time", a, r)
                }
            }, {
                6: 6
            }]
        }, {}, [7])(7)
    }), ! function (e) {
        function t(e) {
            var t = e.length,
                n = i.type(e);
            return "function" === n || i.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }
        if (!e.jQuery) {
            var i = function (e, t) {
                return new i.fn.init(e, t)
            };
            i.isWindow = function (e) {
                return null != e && e == e.window
            }, i.type = function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
            }, i.isArray = Array.isArray || function (e) {
                return "array" === i.type(e)
            }, i.isPlainObject = function (e) {
                var t;
                if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
                try {
                    if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                for (t in e);
                return void 0 === t || a.call(e, t)
            }, i.each = function (e, i, n) {
                var r, a = 0,
                    o = e.length,
                    s = t(e);
                if (n) {
                    if (s)
                        for (; o > a && (r = i.apply(e[a], n), r !== !1); a++);
                    else
                        for (a in e)
                            if (r = i.apply(e[a], n), r === !1) break
                } else if (s)
                    for (; o > a && (r = i.call(e[a], a, e[a]), r !== !1); a++);
                else
                    for (a in e)
                        if (r = i.call(e[a], a, e[a]), r === !1) break;
                return e
            }, i.data = function (e, t, r) {
                if (void 0 === r) {
                    var a = e[i.expando],
                        o = a && n[a];
                    if (void 0 === t) return o;
                    if (o && t in o) return o[t]
                } else if (void 0 !== t) {
                    var a = e[i.expando] || (e[i.expando] = ++i.uuid);
                    return n[a] = n[a] || {}, n[a][t] = r, r
                }
            }, i.removeData = function (e, t) {
                var r = e[i.expando],
                    a = r && n[r];
                a && i.each(t, function (e, t) {
                    delete a[t]
                })
            }, i.extend = function () {
                var e, t, n, r, a, o, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                    if (null != (a = arguments[l]))
                        for (r in a) e = s[r], n = a[r], s !== n && (c && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, o = e && i.isArray(e) ? e : []) : o = e && i.isPlainObject(e) ? e : {}, s[r] = i.extend(c, o, n)) : void 0 !== n && (s[r] = n));
                return s
            }, i.queue = function (e, n, r) {
                function a(e, i) {
                    var n = i || [];
                    return null != e && (t(Object(e)) ? ! function (e, t) {
                        for (var i = +t.length, n = 0, r = e.length; i > n;) e[r++] = t[n++];
                        if (i !== i)
                            for (; void 0 !== t[n];) e[r++] = t[n++];
                        return e.length = r, e
                    }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                }
                if (e) {
                    n = (n || "fx") + "queue";
                    var o = i.data(e, n);
                    return r ? (!o || i.isArray(r) ? o = i.data(e, n, a(r)) : o.push(r), o) : o || []
                }
            }, i.dequeue = function (e, t) {
                i.each(e.nodeType ? [e] : e, function (e, n) {
                    t = t || "fx";
                    var r = i.queue(n, t),
                        a = r.shift();
                    "inprogress" === a && (a = r.shift()), a && ("fx" === t && r.unshift("inprogress"), a.call(n, function () {
                        i.dequeue(n, t)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function (e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function () {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function () {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        n = this.offset(),
                        r = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var r = {}, a = r.hasOwnProperty, o = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
            i.fn.init.prototype = i.fn, e.Velocity = {
                Utilities: i
            }
        }
    }(window),
    function (e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function () {
        return function (e, t, i, n) {
            function r(e) {
                for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                    var r = e[t];
                    r && n.push(r)
                }
                return n
            }

            function a(e) {
                return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
            }

            function o(e) {
                var t = h.data(e, "velocity");
                return null === t ? n : t
            }

            function s(e) {
                return function (t) {
                    return Math.round(t * e) * (1 / e)
                }
            }

            function l(e, i, n, r) {
                function a(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function o(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, i) {
                    return ((a(t, i) * e + o(t, i)) * e + s(t)) * e
                }

                function u(e, t, i) {
                    return 3 * a(t, i) * e * e + 2 * o(t, i) * e + s(t)
                }

                function c(t, i) {
                    for (var r = 0; g > r; ++r) {
                        var a = u(i, e, n);
                        if (0 === a) return i;
                        var o = l(i, e, n) - t;
                        i -= o / a
                    }
                    return i
                }

                function d() {
                    for (var t = 0; b > t; ++t) w[t] = l(t * _, e, n)
                }

                function h(t, i, r) {
                    var a, o, s = 0;
                    do o = i + (r - i) / 2, a = l(o, e, n) - t, a > 0 ? r = o : i = o; while (Math.abs(a) > v && ++s < y);
                    return o
                }

                function f(t) {
                    for (var i = 0, r = 1, a = b - 1; r != a && w[r] <= t; ++r) i += _;
                    --r;
                    var o = (t - w[r]) / (w[r + 1] - w[r]),
                        s = i + o * _,
                        l = u(s, e, n);
                    return l >= m ? c(t, s) : 0 == l ? s : h(t, i, i + _)
                }

                function p() {
                    S = !0, (e != i || n != r) && d()
                }
                var g = 4,
                    m = .001,
                    v = 1e-7,
                    y = 10,
                    b = 11,
                    _ = 1 / (b - 1),
                    x = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var k = 0; 4 > k; ++k)
                    if ("number" != typeof arguments[k] || isNaN(arguments[k]) || !isFinite(arguments[k])) return !1;
                e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
                var w = x ? new Float32Array(b) : new Array(b),
                    S = !1,
                    C = function (t) {
                        return S || p(), e === i && n === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), i, r)
                    };
                C.getControlPoints = function () {
                    return [{
                        x: e,
                        y: i
                    }, {
                        x: n,
                        y: r
                    }]
                };
                var T = "generateBezier(" + [e, i, n, r] + ")";
                return C.toString = function () {
                    return T
                }, C
            }

            function u(e, t) {
                var i = e;
                return g.isString(e) ? b.Easings[e] || (i = !1) : i = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? _.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i
            }

            function c(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        i = b.State.calls.length;
                    i > 1e4 && (b.State.calls = r(b.State.calls));
                    for (var a = 0; i > a; a++)
                        if (b.State.calls[a]) {
                            var s = b.State.calls[a],
                                l = s[0],
                                u = s[2],
                                f = s[3],
                                p = !!f,
                                m = null;
                            f || (f = b.State.calls[a][3] = t - 16);
                            for (var v = Math.min((t - f) / u.duration, 1), y = 0, _ = l.length; _ > y; y++) {
                                var k = l[y],
                                    S = k.element;
                                if (o(S)) {
                                    var C = !1;
                                    if (u.display !== n && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            h.each(T, function (e, t) {
                                                x.setPropertyValue(S, "display", t)
                                            })
                                        }
                                        x.setPropertyValue(S, "display", u.display)
                                    }
                                    u.visibility !== n && "hidden" !== u.visibility && x.setPropertyValue(S, "visibility", u.visibility);
                                    for (var D in k)
                                        if ("element" !== D) {
                                            var M, A = k[D],
                                                P = g.isString(A.easing) ? b.Easings[A.easing] : A.easing;
                                            if (1 === v) M = A.endValue;
                                            else {
                                                var I = A.endValue - A.startValue;
                                                if (M = A.startValue + I * P(v, u, I), !p && M === A.currentValue) continue
                                            }
                                            if (A.currentValue = M, "tween" === D) m = M;
                                            else {
                                                if (x.Hooks.registered[D]) {
                                                    var F = x.Hooks.getRoot(D),
                                                        E = o(S).rootPropertyValueCache[F];
                                                    E && (A.rootPropertyValue = E)
                                                }
                                                var O = x.setPropertyValue(S, D, A.currentValue + (0 === parseFloat(M) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                                x.Hooks.registered[D] && (o(S).rootPropertyValueCache[F] = x.Normalizations.registered[F] ? x.Normalizations.registered[F]("extract", null, O[1]) : O[1]), "transform" === O[0] && (C = !0)
                                            }
                                        } u.mobileHA && o(S).transformCache.translate3d === n && (o(S).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && x.flushTransformCache(S)
                                }
                            }
                            u.display !== n && "none" !== u.display && (b.State.calls[a][2].display = !1), u.visibility !== n && "hidden" !== u.visibility && (b.State.calls[a][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], v, Math.max(0, f + u.duration - t), f, m), 1 === v && d(a)
                        }
                }
                b.State.isTicking && w(c)
            }

            function d(e, t) {
                if (!b.State.calls[e]) return !1;
                for (var i = b.State.calls[e][0], r = b.State.calls[e][1], a = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = i.length; c > u; u++) {
                    var d = i[u].element;
                    if (t || a.loop || ("none" === a.display && x.setPropertyValue(d, "display", a.display), "hidden" === a.visibility && x.setPropertyValue(d, "visibility", a.visibility)), a.loop !== !0 && (h.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(h.queue(d)[1])) && o(d)) {
                        o(d).isAnimating = !1, o(d).rootPropertyValueCache = {};
                        var f = !1;
                        h.each(x.Lists.transforms3D, function (e, t) {
                            var i = /^scale/.test(t) ? 1 : 0,
                                r = o(d).transformCache[t];
                            o(d).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(r) && (f = !0, delete o(d).transformCache[t])
                        }), a.mobileHA && (f = !0, delete o(d).transformCache.translate3d), f && x.flushTransformCache(d), x.Values.removeClass(d, "velocity-animating")
                    }
                    if (!t && a.complete && !a.loop && u === c - 1) try {
                        a.complete.call(r, r)
                    } catch (p) {
                        setTimeout(function () {
                            throw p
                        }, 1)
                    }
                    s && a.loop !== !0 && s(r), o(d) && a.loop === !0 && !t && (h.each(o(d).tweensContainer, function (e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), b(d, "reverse", {
                        loop: !0,
                        delay: a.delay
                    })), a.queue !== !1 && h.dequeue(d, a.queue)
                }
                b.State.calls[e] = !1;
                for (var g = 0, m = b.State.calls.length; m > g; g++)
                    if (b.State.calls[g] !== !1) {
                        l = !0;
                        break
                    } l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var h, f = function () {
                    if (i.documentMode) return i.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = i.createElement("div");
                        if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return n
                }(),
                p = function () {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function () {
                            t(n + i)
                        }, i)
                    }
                }(),
                g = {
                    isString: function (e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function (e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function (e) {
                        return e && e.nodeType
                    },
                    isNodeList: function (e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function (e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function (e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function (e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                m = !1;
            if (e.fn && e.fn.jquery ? (h = e, m = !0) : h = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var v = 400,
                y = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: i.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: h,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: v,
                        easing: y,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function (e) {
                        h.data(e, "velocity", {
                            isSVG: g.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            t.pageYOffset !== n ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var _ = function () {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, i, n) {
                    var r = {
                        x: t.x + n.dx * i,
                        v: t.v + n.dv * i,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: r.v,
                        dv: e(r)
                    }
                }

                function i(i, n) {
                    var r = {
                            dx: i.v,
                            dv: e(i)
                        },
                        a = t(i, .5 * n, r),
                        o = t(i, .5 * n, a),
                        s = t(i, n, o),
                        l = 1 / 6 * (r.dx + 2 * (a.dx + o.dx) + s.dx),
                        u = 1 / 6 * (r.dv + 2 * (a.dv + o.dv) + s.dv);
                    return i.x = i.x + l * n, i.v = i.v + u * n, i
                }
                return function n(e, t, r) {
                    var a, o, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        u = [0],
                        c = 0,
                        d = 1e-4,
                        h = .016;
                    for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, r = r || null, l.tension = e, l.friction = t, a = null !== r, a ? (c = n(e, t), o = c / r * h) : o = h; s = i(s || l, o), u.push(1 + s.x), c += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;);
                    return a ? function (e) {
                        return u[e * (u.length - 1) | 0]
                    } : c
                }
            }();
            b.Easings = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function (e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, h.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function (e, t) {
                b.Easings[t[0]] = l.apply(null, t[1])
            });
            var x = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function () {
                        for (var e = 0; e < x.Lists.colors.length; e++) {
                            var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var i, n, r;
                        if (f)
                            for (i in x.Hooks.templates) {
                                n = x.Hooks.templates[i], r = n[0].split(" ");
                                var a = n[1].match(x.RegEx.valueSplit);
                                "Color" === r[0] && (r.push(r.shift()), a.push(a.shift()), x.Hooks.templates[i] = [r.join(" "), a.join(" ")])
                            }
                        for (i in x.Hooks.templates) {
                            n = x.Hooks.templates[i], r = n[0].split(" ");
                            for (var e in r) {
                                var o = i + r[e],
                                    s = e;
                                x.Hooks.registered[o] = [i, s]
                            }
                        }
                    },
                    getRoot: function (e) {
                        var t = x.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    cleanRootPropertyValue: function (e, t) {
                        return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                    },
                    extractValue: function (e, t) {
                        var i = x.Hooks.registered[e];
                        if (i) {
                            var n = i[0],
                                r = i[1];
                            return t = x.Hooks.cleanRootPropertyValue(n, t), t.toString().match(x.RegEx.valueSplit)[r]
                        }
                        return t
                    },
                    injectValue: function (e, t, i) {
                        var n = x.Hooks.registered[e];
                        if (n) {
                            var r, a, o = n[0],
                                s = n[1];
                            return i = x.Hooks.cleanRootPropertyValue(o, i), r = i.toString().match(x.RegEx.valueSplit), r[s] = t, a = r.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function (e, t, i) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var n;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                                case "inject":
                                    return "rect(" + i + ")"
                            }
                        },
                        blur: function (e, t, i) {
                            switch (e) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var n = parseFloat(i);
                                    if (!n && 0 !== n) {
                                        var r = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        n = r ? r[1] : 0
                                    }
                                    return n;
                                case "inject":
                                    return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function (e, t, i) {
                            if (8 >= f) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i = n ? n[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return i;
                                case "inject":
                                    return i
                            }
                        }
                    },
                    register: function () {
                        9 >= f || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function () {
                            var t = x.Lists.transformsBase[e];
                            x.Normalizations.registered[t] = function (e, i, r) {
                                switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return o(i) === n || o(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : o(i).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var a = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case "translate":
                                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && o(i).transformCache[t] === n && 1 > r && (r = 1), a = !/(\d)$/i.test(r);
                                                break;
                                            case "skew":
                                                a = !/(deg|\d)$/i.test(r);
                                                break;
                                            case "rotate":
                                                a = !/(deg|\d)$/i.test(r)
                                        }
                                        return a || (o(i).transformCache[t] = "(" + r + ")"), o(i).transformCache[t]
                                }
                            }
                        }();
                        for (var e = 0; e < x.Lists.colors.length; e++) ! function () {
                            var t = x.Lists.colors[e];
                            x.Normalizations.registered[t] = function (e, i, r) {
                                switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var a;
                                        if (x.RegEx.wrappedValueAlreadyExtracted.test(r)) a = r;
                                        else {
                                            var o, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(r) ? o = s[r] !== n ? s[r] : s.black : x.RegEx.isHex.test(r) ? o = "rgb(" + x.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (o = s.black), a = (o || r).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= f || 3 !== a.split(" ").length || (a += " 1"), a;
                                    case "inject":
                                        return 8 >= f ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function (e) {
                        return e.replace(/-(\w)/g, function (e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function (e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (f || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function (e) {
                        if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                            var r;
                            if (r = 0 === i ? e : t[i] + e.replace(/^\w/, function (e) {
                                    return e.toUpperCase()
                                }), g.isString(b.State.prefixElement.style[r])) return b.State.prefixMatches[e] = r, [r, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function (e) {
                        var t, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(i, function (e, t, i, n) {
                            return t + t + i + i + n + n
                        }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function (e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function (e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function (e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function (e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    },
                    removeClass: function (e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function (e, i, r, a) {
                    function s(e, i) {
                        function r() {
                            u && x.setPropertyValue(e, "display", "none")
                        }
                        var l = 0;
                        if (8 >= f) l = h.css(e, i);
                        else {
                            var u = !1;
                            if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !a) {
                                if ("height" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                    return r(), c
                                }
                                if ("width" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var d = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                    return r(), d
                                }
                            }
                            var p;
                            p = o(e) === n ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === f && "filter" === i ? p.getPropertyValue(i) : p[i], ("" === l || null === l) && (l = e.style[i]), r()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                            var g = s(e, "position");
                            ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (l = h(e).position()[i] + "px")
                        }
                        return l
                    }
                    var l;
                    if (x.Hooks.registered[i]) {
                        var u = i,
                            c = x.Hooks.getRoot(u);
                        r === n && (r = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (r = x.Normalizations.registered[c]("extract", e, r)), l = x.Hooks.extractValue(u, r)
                    } else if (x.Normalizations.registered[i]) {
                        var d, p;
                        d = x.Normalizations.registered[i]("name", e), "transform" !== d && (p = s(e, x.Names.prefixCheck(d)[0]), x.Values.isCSSNullValue(p) && x.Hooks.templates[i] && (p = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", e, p)
                    }
                    if (!/^[\d-]/.test(l))
                        if (o(e) && o(e).isSVG && x.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i)) try {
                                l = e.getBBox()[i]
                            } catch (g) {
                                l = 0
                            } else l = e.getAttribute(i);
                            else l = s(e, x.Names.prefixCheck(i)[0]);
                    return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l
                },
                setPropertyValue: function (e, i, n, r, a) {
                    var s = i;
                    if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? t.scrollTo(n, a.alternateValue) : t.scrollTo(a.alternateValue, n);
                    else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", e)) x.Normalizations.registered[i]("inject", e, n), s = "transform", n = o(e).transformCache[i];
                    else {
                        if (x.Hooks.registered[i]) {
                            var l = i,
                                u = x.Hooks.getRoot(i);
                            r = r || x.getPropertyValue(e, u), n = x.Hooks.injectValue(l, n, r), i = u
                        }
                        if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", e, n), i = x.Normalizations.registered[i]("name", e)), s = x.Names.prefixCheck(i)[0], 8 >= f) try {
                            e.style[s] = n
                        } catch (c) {
                            b.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                        } else o(e) && o(e).isSVG && x.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[s] = n;
                        b.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                    }
                    return [s, n]
                },
                flushTransformCache: function (e) {
                    function t(t) {
                        return parseFloat(x.getPropertyValue(e, t))
                    }
                    var i = "";
                    if ((f || b.State.isAndroid && !b.State.isChrome) && o(e).isSVG) {
                        var n = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        h.each(o(e).transformCache, function (e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (i += e + "(" + n[e].join(" ") + ") ", delete n[e])
                        })
                    } else {
                        var r, a;
                        h.each(o(e).transformCache, function (t) {
                            return r = o(e).transformCache[t], "transformPerspective" === t ? (a = r, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(i += t + r + " "))
                        }), a && (i = "perspective" + a + " " + i)
                    }
                    x.setPropertyValue(e, "transform", i)
                }
            };
            x.Hooks.register(), x.Normalizations.register(), b.hook = function (e, t, i) {
                var r = n;
                return e = a(e), h.each(e, function (e, a) {
                    if (o(a) === n && b.init(a), i === n) r === n && (r = b.CSS.getPropertyValue(a, t));
                    else {
                        var s = b.CSS.setPropertyValue(a, t, i);
                        "transform" === s[0] && b.CSS.flushTransformCache(a), r = s
                    }
                }), r
            };
            var k = function () {
                function e() {
                    return s ? D.promise || null : l
                }

                function r() {
                    function e() {
                        function e(e, t) {
                            var i = n,
                                r = n,
                                o = n;
                            return g.isArray(e) ? (i = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? o = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (r = t ? e[1] : u(e[1], s.duration), e[2] !== n && (o = e[2]))) : i = e, t || (r = r || s.easing), g.isFunction(i) && (i = i.call(a, S, w)), g.isFunction(o) && (o = o.call(a, S, w)), [i || 0, r, o]
                        }

                        function d(e, t) {
                            var i, n;
                            return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                                return i = e, ""
                            }), i || (i = x.Values.getUnitType(e)), [n, i]
                        }

                        function f() {
                            var e = {
                                    myParent: a.parentNode || i.body,
                                    position: x.getPropertyValue(a, "position"),
                                    fontSize: x.getPropertyValue(a, "fontSize")
                                },
                                n = e.position === O.lastPosition && e.myParent === O.lastParent,
                                r = e.fontSize === O.lastFontSize;
                            O.lastParent = e.myParent, O.lastPosition = e.position, O.lastFontSize = e.fontSize;
                            var s = 100,
                                l = {};
                            if (r && n) l.emToPx = O.lastEmToPx, l.percentToPxWidth = O.lastPercentToPxWidth, l.percentToPxHeight = O.lastPercentToPxHeight;
                            else {
                                var u = o(a).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                b.init(u), e.myParent.appendChild(u), h.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                    b.CSS.setPropertyValue(u, t, "hidden")
                                }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                    b.CSS.setPropertyValue(u, t, s + "%")
                                }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = O.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = O.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = O.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                            }
                            return null === O.remToPx && (O.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === O.vwToPx && (O.vwToPx = parseFloat(t.innerWidth) / 100, O.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = O.remToPx, l.vwToPx = O.vwToPx, l.vhToPx = O.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                        }
                        if (s.begin && 0 === S) try {
                            s.begin.call(p, p)
                        } catch (v) {
                            setTimeout(function () {
                                throw v
                            }, 1)
                        }
                        if ("scroll" === M) {
                            var _, k, C, T = /^x$/i.test(s.axis) ? "Left" : "Top",
                                A = parseFloat(s.offset) || 0;
                            s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, _ = s.container["scroll" + T], C = _ + h(a).position()[T.toLowerCase()] + A) : s.container = null : (_ = b.State.scrollAnchor[b.State["scrollProperty" + T]], k = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === T ? "Top" : "Left")]], C = h(a).offset()[T.toLowerCase()] + A), l = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: _,
                                    currentValue: _,
                                    endValue: C,
                                    unitType: "",
                                    easing: s.easing,
                                    scrollData: {
                                        container: s.container,
                                        direction: T,
                                        alternateValue: k
                                    }
                                },
                                element: a
                            }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a)
                        } else if ("reverse" === M) {
                            if (!o(a).tweensContainer) return void h.dequeue(a, s.queue);
                            "none" === o(a).opts.display && (o(a).opts.display = "auto"), "hidden" === o(a).opts.visibility && (o(a).opts.visibility = "visible"), o(a).opts.loop = !1, o(a).opts.begin = null, o(a).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = h.extend({}, o(a).opts, s);
                            var P = h.extend(!0, {}, o(a).tweensContainer);
                            for (var I in P)
                                if ("element" !== I) {
                                    var F = P[I].startValue;
                                    P[I].startValue = P[I].currentValue = P[I].endValue, P[I].endValue = F, g.isEmptyObject(y) || (P[I].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + I + "): " + JSON.stringify(P[I]), a)
                                } l = P
                        } else if ("start" === M) {
                            var P;
                            o(a).tweensContainer && o(a).isAnimating === !0 && (P = o(a).tweensContainer), h.each(m, function (t, i) {
                                if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                                    var r = e(i, !0),
                                        a = r[0],
                                        o = r[1],
                                        s = r[2];
                                    if (x.RegEx.isHex.test(a)) {
                                        for (var l = ["Red", "Green", "Blue"], u = x.Values.hexToRgb(a), c = s ? x.Values.hexToRgb(s) : n, d = 0; d < l.length; d++) {
                                            var h = [u[d]];
                                            o && h.push(o), c !== n && h.push(c[d]), m[t + l[d]] = h
                                        }
                                        delete m[t]
                                    }
                                }
                            });
                            for (var E in m) {
                                var L = e(m[E]),
                                    $ = L[0],
                                    R = L[1],
                                    j = L[2];
                                E = x.Names.camelCase(E);
                                var H = x.Hooks.getRoot(E),
                                    W = !1;
                                if (o(a).isSVG || "tween" === H || x.Names.prefixCheck(H)[1] !== !1 || x.Normalizations.registered[H] !== n) {
                                    (s.display !== n && null !== s.display && "none" !== s.display || s.visibility !== n && "hidden" !== s.visibility) && /opacity|filter/.test(E) && !j && 0 !== $ && (j = 0), s._cacheValues && P && P[E] ? (j === n && (j = P[E].endValue + P[E].unitType), W = o(a).rootPropertyValueCache[H]) : x.Hooks.registered[E] ? j === n ? (W = x.getPropertyValue(a, H), j = x.getPropertyValue(a, E, W)) : W = x.Hooks.templates[H][1] : j === n && (j = x.getPropertyValue(a, E));
                                    var z, V, B, Y = !1;
                                    if (z = d(E, j), j = z[0], B = z[1], z = d(E, $), $ = z[0].replace(/^([+-\/*])=/, function (e, t) {
                                            return Y = t, ""
                                        }), V = z[1], j = parseFloat(j) || 0, $ = parseFloat($) || 0, "%" === V && (/^(fontSize|lineHeight)$/.test(E) ? ($ /= 100, V = "em") : /^scale/.test(E) ? ($ /= 100, V = "") : /(Red|Green|Blue)$/i.test(E) && ($ = $ / 100 * 255, V = "")), /[\/*]/.test(Y)) V = B;
                                    else if (B !== V && 0 !== j)
                                        if (0 === $) V = B;
                                        else {
                                            r = r || f();
                                            var q = /margin|padding|left|right|width|text|word|letter/i.test(E) || /X$/.test(E) || "x" === E ? "x" : "y";
                                            switch (B) {
                                                case "%":
                                                    j *= "x" === q ? r.percentToPxWidth : r.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    j *= r[B + "ToPx"]
                                            }
                                            switch (V) {
                                                case "%":
                                                    j *= 1 / ("x" === q ? r.percentToPxWidth : r.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    j *= 1 / r[V + "ToPx"]
                                            }
                                        } switch (Y) {
                                        case "+":
                                            $ = j + $;
                                            break;
                                        case "-":
                                            $ = j - $;
                                            break;
                                        case "*":
                                            $ = j * $;
                                            break;
                                        case "/":
                                            $ = j / $
                                    }
                                    l[E] = {
                                        rootPropertyValue: W,
                                        startValue: j,
                                        currentValue: j,
                                        endValue: $,
                                        unitType: V,
                                        easing: R
                                    }, b.debug && console.log("tweensContainer (" + E + "): " + JSON.stringify(l[E]), a)
                                } else b.debug && console.log("Skipping [" + H + "] due to a lack of browser support.")
                            }
                            l.element = a
                        }
                        l.element && (x.Values.addClass(a, "velocity-animating"), N.push(l), "" === s.queue && (o(a).tweensContainer = l, o(a).opts = s), o(a).isAnimating = !0, S === w - 1 ? (b.State.calls.push([N, p, s, null, D.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : S++)
                    }
                    var r, a = this,
                        s = h.extend({}, b.defaults, y),
                        l = {};
                    switch (o(a) === n && b.init(a), parseFloat(s.delay) && s.queue !== !1 && h.queue(a, s.queue, function (e) {
                        b.velocityQueueEntryFlag = !0, o(a).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(s.delay)),
                            next: e
                        }
                    }), s.duration.toString().toLowerCase()) {
                        case "fast":
                            s.duration = 200;
                            break;
                        case "normal":
                            s.duration = v;
                            break;
                        case "slow":
                            s.duration = 600;
                            break;
                        default:
                            s.duration = parseFloat(s.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== n && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(a))), s.visibility !== n && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : h.queue(a, s.queue, function (t, i) {
                        return i === !0 ? (D.promise && D.resolver(p), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                    }), "" !== s.queue && "fx" !== s.queue || "inprogress" === h.queue(a)[0] || h.dequeue(a)
                }
                var s, l, f, p, m, y, _ = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
                if (g.isWrapped(this) ? (s = !1, f = 0, p = this, l = this) : (s = !0, f = 1, p = _ ? arguments[0].elements || arguments[0].e : arguments[0]), p = a(p)) {
                    _ ? (m = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (m = arguments[f], y = arguments[f + 1]);
                    var w = p.length,
                        S = 0;
                    if (!/^(stop|finish)$/i.test(m) && !h.isPlainObject(y)) {
                        var C = f + 1;
                        y = {};
                        for (var T = C; T < arguments.length; T++) g.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? g.isString(arguments[T]) || g.isArray(arguments[T]) ? y.easing = arguments[T] : g.isFunction(arguments[T]) && (y.complete = arguments[T]) : y.duration = arguments[T]
                    }
                    var D = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    s && b.Promise && (D.promise = new b.Promise(function (e, t) {
                        D.resolver = e, D.rejecter = t
                    }));
                    var M;
                    switch (m) {
                        case "scroll":
                            M = "scroll";
                            break;
                        case "reverse":
                            M = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            h.each(p, function (e, t) {
                                o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer)
                            });
                            var A = [];
                            return h.each(b.State.calls, function (e, t) {
                                t && h.each(t[1], function (i, r) {
                                    var a = y === n ? "" : y;
                                    return a === !0 || t[2].queue === a || y === n && t[2].queue === !1 ? void h.each(p, function (i, n) {
                                        n === r && ((y === !0 || g.isString(y)) && (h.each(h.queue(n, g.isString(y) ? y : ""), function (e, t) {
                                            g.isFunction(t) && t(null, !0)
                                        }), h.queue(n, g.isString(y) ? y : "", [])), "stop" === m ? (o(n) && o(n).tweensContainer && a !== !1 && h.each(o(n).tweensContainer, function (e, t) {
                                            t.endValue = t.currentValue
                                        }), A.push(e)) : "finish" === m && (t[2].duration = 1))
                                    }) : !0
                                })
                            }), "stop" === m && (h.each(A, function (e, t) {
                                d(t, !0)
                            }), D.promise && D.resolver(p)), e();
                        default:
                            if (!h.isPlainObject(m) || g.isEmptyObject(m)) {
                                if (g.isString(m) && b.Redirects[m]) {
                                    var P = h.extend({}, y),
                                        I = P.duration,
                                        F = P.delay || 0;
                                    return P.backwards === !0 && (p = h.extend(!0, [], p).reverse()), h.each(p, function (e, t) {
                                        parseFloat(P.stagger) ? P.delay = F + parseFloat(P.stagger) * e : g.isFunction(P.stagger) && (P.delay = F + P.stagger.call(t, e, w)), P.drag && (P.duration = parseFloat(I) || (/^(callout|transition)/.test(m) ? 1e3 : v), P.duration = Math.max(P.duration * (P.backwards ? 1 - e / w : (e + 1) / w), .75 * P.duration, 200)), b.Redirects[m].call(t, t, P || {}, e, w, p, D.promise ? D : n)
                                    }), e()
                                }
                                var E = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return D.promise ? D.rejecter(new Error(E)) : console.log(E), e()
                            }
                            M = "start"
                    }
                    var O = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        N = [];
                    h.each(p, function (e, t) {
                        g.isNode(t) && r.call(t)
                    });
                    var L, P = h.extend({}, b.defaults, y);
                    if (P.loop = parseInt(P.loop), L = 2 * P.loop - 1, P.loop)
                        for (var $ = 0; L > $; $++) {
                            var R = {
                                delay: P.delay,
                                progress: P.progress
                            };
                            $ === L - 1 && (R.display = P.display, R.visibility = P.visibility, R.complete = P.complete), k(p, "reverse", R)
                        }
                    return e()
                }
            };
            b = h.extend(k, b), b.animate = k;
            var w = t.requestAnimationFrame || p;
            return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function () {
                i.hidden ? (w = function (e) {
                    return setTimeout(function () {
                        e(!0)
                    }, 16)
                }, c()) : w = t.requestAnimationFrame || p
            }), e.Velocity = b, e !== t && (e.fn.velocity = k, e.fn.velocity.defaults = b.defaults), h.each(["Down", "Up"], function (e, t) {
                b.Redirects["slide" + t] = function (e, i, r, a, o, s) {
                    var l = h.extend({}, i),
                        u = l.begin,
                        c = l.complete,
                        d = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        f = {};
                    l.display === n && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                        u && u.call(o, o);
                        for (var i in d) {
                            f[i] = e.style[i];
                            var n = b.CSS.getPropertyValue(e, i);
                            d[i] = "Down" === t ? [n, 0] : [0, n]
                        }
                        f.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function () {
                        for (var t in f) e.style[t] = f[t];
                        c && c.call(o, o), s && s.resolver(o)
                    }, b(e, d, l)
                }
            }), h.each(["In", "Out"], function (e, t) {
                b.Redirects["fade" + t] = function (e, i, r, a, o, s) {
                    var l = h.extend({}, i),
                        u = {
                            opacity: "In" === t ? 1 : 0
                        },
                        c = l.complete;
                    l.complete = r !== a - 1 ? l.begin = null : function () {
                        c && c.call(o, o), s && s.resolver(o)
                    }, l.display === n && (l.display = "In" === t ? "auto" : "none"), b(this, u, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    }), $(function () {
        function e() {
            if ($(window).width() <= 568) {
                if ($(".program-block").hasClass("active")) return;
                $(".program").addClass("accordion"), $(".program-learn-more").addClass("details"), $(".program-block .details").hide()
            } else $(".program-block .details").show(), $(".program").removeClass("accordion"), $(".program-learn-more").removeClass("details").hide(), $(".program-block").removeClass("active")
        }
        $(window).resize(function () {
            e()
        }), e()
    }), $(function () {
        function e(e) {
            e.addClass("active"), e.find(".details").slideDown(500)
        }

        function t(t) {
            var i = $(t),
                n = i.hasClass("active");
            if (!n || void 0 !== i.attr("can-close-when-open")) {
                if (i.is("[data-open-multiple]")) i.removeClass("active"), i.find(".details").slideUp(500);
                else {
                    var r = i.closest(".accordion").find("li");
                    r.removeClass("active"), r.find(".details").slideUp(500)
                }
                n || e(i)
            }
        }
        $(".accordion > ul > li").click(function () {
            t(this), $(".question .expand-reduce").html("\u2795"), $(".active .question .expand-reduce").html("\u2796")
        }), $(".accordion .active").each(function (t, i) {
            e($(i))
        }), $("#common-questions").on("click", "a", function () {
            var t = $.find($(this).attr("href"))[0];
            e($(t))
        })
    }), $(function () {
        function e() {
            var e = {
                    zoom: 4,
                    scrollwheel: !1,
                    center: new google.maps.LatLng(50, -95),
                    styles: [{
                        featureType: "administrative.locality",
                        elementType: "all",
                        stylers: [{
                            hue: "#2c2e33"
                        }, {
                            saturation: 7
                        }, {
                            lightness: 19
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [{
                            hue: "#ffffff"
                        }, {
                            saturation: -100
                        }, {
                            lightness: 100
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "all",
                        stylers: [{
                            hue: "#ffffff"
                        }, {
                            saturation: -100
                        }, {
                            lightness: 100
                        }, {
                            visibility: "off"
                        }]
                    }, {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{
                            hue: "#bbc0c4"
                        }, {
                            saturation: -93
                        }, {
                            lightness: 31
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "road",
                        elementType: "labels",
                        stylers: [{
                            hue: "#bbc0c4"
                        }, {
                            saturation: -93
                        }, {
                            lightness: 31
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "labels",
                        stylers: [{
                            hue: "#bbc0c4"
                        }, {
                            saturation: -93
                        }, {
                            lightness: -2
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            hue: "#e9ebed"
                        }, {
                            saturation: -90
                        }, {
                            lightness: -8
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [{
                            hue: "#e9ebed"
                        }, {
                            saturation: 10
                        }, {
                            lightness: 69
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "all",
                        stylers: [{
                            hue: "#e9ebed"
                        }, {
                            saturation: -78
                        }, {
                            lightness: 67
                        }, {
                            visibility: "simplified"
                        }]
                    }]
                },
                t = document.getElementById("google-map"),
                i = new google.maps.Map(t, e);
            new google.maps.Marker({
                position: new google.maps.LatLng(49.2821055, -123.1104596),
                map: i,
                title: "Vancouver"
            }), new google.maps.Marker({
                position: new google.maps.LatLng(43.6446447, -79.3971874),
                map: i,
                title: "Toronto"
            }), new google.maps.Marker({
                position: new google.maps.LatLng(51.04606937956195, -114.07774808424692),
                map: i,
                title: "Calgary"
            }), new google.maps.Marker({
                position: new google.maps.LatLng(45.488277, -73.5697528),
                map: i,
                title: "Montreal"
            }), new google.maps.Marker({
                position: new google.maps.LatLng(45.4215, -75.697),
                map: i,
                title: "Ottawa"
            })
        }
        0 != $("#google-map").length && google.maps.event.addDomListener(window, "load", e)
    }), $(function () {
        function e() {
            var e = r.width(),
                t = n.width() / n.height(),
                i = e / t,
                a = $(window).height(),
                s = $("header").height(),
                l = a - s;
            i > l && (i = l), r.height(i), o = !0
        }

        function t() {
            r.removeClass("play").removeAttr("style"), o = !1
        }

        function i() {
            r.addClass("play"), e(), n[0].play()
        }
        if (!$("#video-container")[0]) return !1;
        var n = $(".header-video__media"),
            r = $("#video-container"),
            a = $(".header-video__play-trigger"),
            o = !1;
        a.click(i), n.click(function () {
            this.paused ? this.play() : this.pause()
        }), n.on("ended", function () {
            t()
        }), $(window).on("resize", function () {
            o && e()
        })
    }), window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
        }
    }(), $(function () {
        function e() {
            requestAnimFrame(e), n > t.offset().top ? r || (t.addClass(i), r = !0) : r && (t.removeClass(i), r = !1)
        }
        $(".menu-btn", ".main-nav").click(function () {
            $(this).parent().toggleClass("open")
        }), $(".nav-menu > li > a", ".main-nav").click(function () {
            var e = $(this).closest("li");
            e.siblings().removeClass("open"), e.toggleClass("open")
        }), $(window).click(function (e) {
            0 == $(e.target).closest(".main-nav").length && $(".nav-menu > li.open", ".main-nav").removeClass("open")
        }), $(".main-nav-submenu-items > li > a").click(function () {
            var e = $(this).closest("li");
            e.siblings().removeClass("active"), e.toggleClass("active");
            var t = e.data("submenu");
            $(".submenu").removeClass("active"), $("#" + t).toggleClass("active")
        });
        var t = $("header"),
            i = "lock-nav",
            n = 0,
            r = !1;
        t.css({
            minHeight: t.height()
        }), t.length > 0 && requestAnimFrame(e), $(window).scroll(function () {
            n = window.scrollY
        })
    }), $(function () {
        var e = !1;
        $(".show-more").click(function () {
            e = !e, $("html, body").animate({
                scrollTop: $(this).parent().offset().top - 20
            }, 25), $(this).siblings(".more").toggleClass("open"), $(this).toggleClass("up-arrow-after"), $(this).toggleClass("down-arrow-after"), e ? ($(this).parents(".slick-list.draggable").css("height", "auto"), $(this).text("Show less")) : ($(this).text("Ooo there's more "), $(this).parents(".slick-list.draggable").css("height", "100%"))
        })
    }), $(function () {
        setTimeZone(), convertTimes(), $(".program-city").on("click", function (e) {
            e.preventDefault(), programDollarsAndDates($(this))
        })
    }), $(function () {
        function e() {
            r = m.map(function (e, t) {
                var i = $(t);
                return i.length ? {
                    startY: Math.floor(i.offset().top - 2 * p),
                    anchor: $("a[href='" + t + "']")
                } : void 0
            }).toArray().filter(function (e) {
                return void 0 !== e
            }), r.sort(function (e, t) {
                return e.startY - t.startY
            }), r.forEach(function (e, t) {
                var i = r[t + 1];
                e.endY = i ? i.startY : document.body.scrollHeight
            })
        }

        function t(e) {
            if (!e.anchor.hasClass("active")) {
                var t = g.filter(".active");
                t.removeClass("active"), t.parent("li").removeClass("active"), e.anchor.parent("li").addClass("active"), e.anchor.addClass("active")
            }
        }

        function i() {
            requestAnimFrame(i), l > s && d > l ? (n.addClass(a), n.removeClass(o), n.css("left", u), c = !0) : l > s && l > d ? (n.removeClass(a), n.addClass(o), n.css("left", 0), c = !0) : c && (n.removeClass(a), n.removeClass(o), n.css("left", 0), c = !1), r.some(function (e) {
                return l >= e.startY && l < e.endY ? (t(e), !0) : void 0
            })
        }
        var n = $("#side-bar");
        if (0 != $("#side-bar").length) {
            var r, a = "lock-nav",
                o = "lock-footer",
                s = 270,
                l = 0,
                u = $("#body-wrap").offset().left,
                c = !1,
                d = 0,
                h = $(".footer"),
                f = h.height(),
                p = 25,
                g = n.find("ul.main-side-nav a"),
                m = g.map(function (e, t) {
                    return t.hash
                });
            e(), $(".slick").on("init", e), requestAnimFrame(i), $(window).scroll(function () {
                l = window.scrollY, d = h.offset().top - f - 20, $(window).scrollTop() + $(window).height() == $(document).height() && $("#register-button").addClass("endofpage")
            }), $(window).resize(function () {
                u = $("#body-wrap").offset().left, e()
            }), n.on("click", ".main-side-nav li", function () {
                var e = $(this).find("a")[0].hash,
                    t = $(e);
                $("html, body").animate({
                    scrollTop: t.offset().top - p
                }, 200)
            }), g.on("click", function (e) {
                e.preventDefault()
            })
        }
    }), ! function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function (e) {
        "use strict";
        var t = window.Slick || {};
        t = function () {
            function t(t, n) {
                var r, a = this;
                a.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, t) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, a.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.hidden = "hidden", a.paused = !1, a.positionProp = null, a.respondTo = null, a.rowCount = 1, a.shouldClick = !0, a.$slider = e(t), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, r = e(t).data("slick") || {}, a.options = e.extend({}, a.defaults, r, n), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, "undefined" != typeof document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = e.proxy(a.autoPlay, a), a.autoPlayClear = e.proxy(a.autoPlayClear, a), a.changeSlide = e.proxy(a.changeSlide, a), a.clickHandler = e.proxy(a.clickHandler, a), a.selectHandler = e.proxy(a.selectHandler, a), a.setPosition = e.proxy(a.setPosition, a), a.swipeHandler = e.proxy(a.swipeHandler, a), a.dragHandler = e.proxy(a.dragHandler, a), a.keyHandler = e.proxy(a.keyHandler, a), a.autoPlayIterator = e.proxy(a.autoPlayIterator, a), a.instanceUid = i++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.registerBreakpoints(), a.init(!0), a.checkResponsive(!0)
            }
            var i = 0;
            return t
        }(), t.prototype.addSlide = t.prototype.slickAdd = function (t, i, n) {
            var r = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (0 > i || i >= r.slideCount) return !1;
            r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) : n ? e(t).insertBefore(r.$slides.eq(i)) : e(t).insertAfter(r.$slides.eq(i)) : n === !0 ? e(t).prependTo(r.$slideTrack) : e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function (t, i) {
                e(i).attr("data-slick-index", t)
            }), r.$slidesCache = r.$slides, r.reinit()
        }, t.prototype.animateHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function (t, i) {
            var n = {},
                r = this;
            r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (t = -t), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
                left: t
            }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
                top: t
            }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), e({
                animStart: r.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function (e) {
                    e = Math.ceil(e), r.options.vertical === !1 ? (n[r.animType] = "translate(" + e + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + e + "px)", r.$slideTrack.css(n))
                },
                complete: function () {
                    i && i.call()
                }
            })) : (r.applyTransition(), t = Math.ceil(t), n[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function () {
                r.disableTransition(), i.call()
            }, r.options.speed))
        }, t.prototype.asNavFor = function (t) {
            var i = this,
                n = i.options.asNavFor;
            n && null !== n && (n = e(n).not(i.$slider)), null !== n && "object" == typeof n && n.each(function () {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function (e) {
            var t = this,
                i = {};
            i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function () {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function () {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function () {
            var e = this;
            e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (0 === e.currentSlide - 1 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
        }, t.prototype.buildArrows = function () {
            var t = this;
            t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function () {
            var t, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (i = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1) i += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
                i += "</ul>", n.$dots = e(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function () {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function () {
            var e, t, i, n, r, a, o, s = this;
            if (n = document.createDocumentFragment(), a = s.$slider.children(), s.options.rows > 1) {
                for (o = s.options.slidesPerRow * s.options.rows, r = Math.ceil(a.length / o), e = 0; r > e; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < s.options.rows; t++) {
                        var u = document.createElement("div");
                        for (i = 0; i < s.options.slidesPerRow; i++) {
                            var c = e * o + (t * s.options.slidesPerRow + i);
                            a.get(c) && u.appendChild(a.get(c))
                        }
                        l.appendChild(u)
                    }
                    n.appendChild(l)
                }
                s.$slider.html(n), s.$slider.children().children().children().css({
                    width: 100 / s.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function (t, i) {
            var n, r, a, o = this,
                s = !1,
                l = o.$slider.width(),
                u = window.innerWidth || e(window).width();
            if ("window" === o.respondTo ? a = u : "slider" === o.respondTo ? a = l : "min" === o.respondTo && (a = Math.min(u, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                r = null;
                for (n in o.breakpoints) o.breakpoints.hasOwnProperty(n) && (o.originalSettings.mobileFirst === !1 ? a < o.breakpoints[n] && (r = o.breakpoints[n]) : a > o.breakpoints[n] && (r = o.breakpoints[n]));
                null !== r ? null !== o.activeBreakpoint ? (r !== o.activeBreakpoint || i) && (o.activeBreakpoint = r, "unslick" === o.breakpointSettings[r] ? o.unslick(r) : (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[r]), t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(t)), s = r) : (o.activeBreakpoint = r, "unslick" === o.breakpointSettings[r] ? o.unslick(r) : (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[r]), t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(t)), s = r) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(t), s = r), t || s === !1 || o.$slider.trigger("breakpoint", [o, s])
            }
        }, t.prototype.changeSlide = function (t, i) {
            var n, r, a, o = this,
                s = e(t.target);
            switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), a = 0 !== o.slideCount % o.options.slidesToScroll, n = a ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
                case "previous":
                    r = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, i);
                    break;
                case "next":
                    r = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, i);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || s.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(l), !1, i), s.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function (e) {
            var t, i, n = this;
            if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var r in t) {
                    if (e < t[r]) {
                        e = i;
                        break
                    }
                    i = t[r]
                }
            return e
        }, t.prototype.cleanUpEvents = function () {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpRows = function () {
            var e, t = this;
            t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.html(e))
        }, t.prototype.clickHandler = function (e) {
            var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function (t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                e(this).attr("style", e(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function (e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function (e, t) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function () {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, t.prototype.fadeSlideOut = function (e) {
            var t = this;
            t.cssTransitions === !1 ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
            var t = this;
            null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function () {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (e.options.infinite === !0)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (e.options.centerMode === !0) n = e.slideCount;
            else
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return n - 1
        }, t.prototype.getLeft = function (e) {
            var t, i, n, r = this,
                a = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = -1 * r.slideWidth * r.options.slidesToShow, a = -1 * i * r.options.slidesToShow), 0 !== r.slideCount % r.options.slidesToScroll && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = -1 * (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth, a = -1 * (r.options.slidesToShow - (e - r.slideCount)) * i) : (r.slideOffset = -1 * r.slideCount % r.options.slidesToScroll * r.slideWidth, a = -1 * r.slideCount % r.options.slidesToScroll * i))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, a = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, a = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = r.options.vertical === !1 ? -1 * e * r.slideWidth + r.slideOffset : -1 * e * i + a, r.options.variableWidth === !0 && (n = r.$slideTrack.children(".slick-slide").eq(r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? e : e + r.options.slidesToShow), t = n[0] ? -1 * n[0].offsetLeft : 0, r.options.centerMode === !0 && (n = r.$slideTrack.children(".slick-slide").eq(r.options.infinite === !1 ? e : e + r.options.slidesToShow + 1), t = n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
            var t = this;
            return t.options[e]
        }, t.prototype.getNavigableIndexes = function () {
            var e, t = this,
                i = 0,
                n = 0,
                r = [];
            for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return r
        }, t.prototype.getSlick = function () {
            return this
        }, t.prototype.getSlideCount = function () {
            var t, i, n, r = this;
            return n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function (t, a) {
                return a.offsetLeft - n + e(a).outerWidth() / 2 > -1 * r.swipeLeft ? (i = a, !1) : void 0
            }), t = Math.abs(e(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function (t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA()
        }, t.prototype.initArrowEvents = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function () {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
        }, t.prototype.initializeEvents = function () {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
        }, t.prototype.keyHandler = function (e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, t.prototype.lazyLoad = function () {
            function t(t) {
                e("img[data-lazy]", t).each(function () {
                    var t = e(this),
                        i = e(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function () {
                        t.animate({
                            opacity: 0
                        }, 100, function () {
                            t.attr("src", i).animate({
                                opacity: 1
                            }, 200, function () {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, n.src = i
                })
            }
            var i, n, r, a, o = this;
            o.options.centerMode === !0 ? o.options.infinite === !0 ? (r = o.currentSlide + (o.options.slidesToShow / 2 + 1), a = r + o.options.slidesToShow + 2) : (r = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), a = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (r = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, a = r + o.options.slidesToShow, o.options.fade === !0 && (r > 0 && r--, a <= o.slideCount && a++)), i = o.$slider.find(".slick-slide").slice(r, a), t(i), o.slideCount <= o.options.slidesToShow ? (n = o.$slider.find(".slick-slide"), t(n)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (n = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), t(n)) : 0 === o.currentSlide && (n = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), t(n))
        }, t.prototype.loadSlider = function () {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function () {
            var e = this;
            e.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function () {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function () {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function () {
            var e = this;
            e.paused = !1, e.autoPlay()
        }, t.prototype.postSlide = function (e) {
            var t = this;
            t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.initADA()
        }, t.prototype.prev = t.prototype.slickPrev = function () {
            var e = this;
            e.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function (e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function () {
            var t, i, n = this;
            t = e("img[data-lazy]", n.$slider).length, t > 0 && (i = e("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function () {
                i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition()
            }).error(function () {
                i.removeAttr("data-lazy"), n.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function (t) {
            var i = this,
                n = i.currentSlide;
            i.destroy(!0), e.extend(i, i.initials, {
                currentSlide: n
            }), i.init(), t || i.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function () {
            var t, i, n, r = this,
                a = r.options.responsive || null;
            if ("array" === e.type(a) && a.length) {
                r.respondTo = r.options.respondTo || "window";
                for (t in a)
                    if (n = r.breakpoints.length - 1, i = a[t].breakpoint, a.hasOwnProperty(t)) {
                        for (; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
                        r.breakpoints.push(i), r.breakpointSettings[i] = a[t].settings
                    } r.breakpoints.sort(function (e, t) {
                    return r.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function () {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), t.options.autoplay === !0 && t.focusHandler()
        }, t.prototype.resize = function () {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, i) {
            var n = this;
            return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e, n.slideCount < 1 || 0 > e || e > n.slideCount - 1 ? !1 : (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, t.prototype.setCSS = function (e) {
            var t, i, n = this,
                r = {};
            n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", r[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(r) : (r = {}, n.cssTransitions === !1 ? (r[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(r)))
        }, t.prototype.setDimensions = function () {
            var e = this;
            e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function () {
            var t, i = this;
            i.$slides.each(function (n, r) {
                t = -1 * i.slideWidth * n, e(r).css(i.options.rtl === !0 ? {
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                } : {
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function (t, i, n) {
            var r, a, o = this;
            if ("responsive" === t && "array" === e.type(i))
                for (a in i)
                    if ("array" !== e.type(o.options.responsive)) o.options.responsive = [i[a]];
                    else {
                        for (r = o.options.responsive.length - 1; r >= 0;) o.options.responsive[r].breakpoint === i[a].breakpoint && o.options.responsive.splice(r, 1), r--;
                        o.options.responsive.push(i[a])
                    }
            else o.options[t] = i;
            n === !0 && (o.unload(), o.reinit())
        }, t.prototype.setPosition = function () {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function () {
            var e = this,
                t = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function (e) {
            var t, i, n, r, a = this;
            i = a.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), a.$slides.eq(e).addClass("slick-current"), a.options.centerMode === !0 ? (t = Math.floor(a.options.slidesToShow / 2), a.options.infinite === !0 && (e >= t && e <= a.slideCount - 1 - t ? a.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = a.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - a.options.slidesToShow).addClass("slick-center") : e === a.slideCount - 1 && i.eq(a.options.slidesToShow).addClass("slick-center")), a.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= a.slideCount - a.options.slidesToShow ? a.$slides.slice(e, e + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= a.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = a.slideCount % a.options.slidesToShow, n = a.options.infinite === !0 ? a.options.slidesToShow + e : e, a.options.slidesToShow == a.options.slidesToScroll && a.slideCount - e < a.options.slidesToShow ? i.slice(n - (a.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === a.options.lazyLoad && a.lazyLoad()
        }, t.prototype.setupInfinite = function () {
            var t, i, n, r = this;
            if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (i = null, r.slideCount > r.options.slidesToShow)) {
                for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, t = r.slideCount; t > r.slideCount - n; t -= 1) i = t - 1, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                for (t = 0; n > t; t += 1) i = t, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                r.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.setPaused = function (e) {
            var t = this;
            t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
        }, t.prototype.selectHandler = function (t) {
            var i = this,
                n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                r = parseInt(n.attr("data-slick-index"));
            return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r), void i.asNavFor(r)) : void i.slideHandler(r)
        }, t.prototype.slideHandler = function (e, t, i) {
            var n, r, a, o, s = null,
                l = this;
            return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), n = e, s = l.getLeft(n), o = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? o : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(o, function () {
                l.postSlide(n)
            }) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(o, function () {
                l.postSlide(n)
            }) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), r = 0 > n ? 0 !== l.slideCount % l.options.slidesToScroll ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? 0 !== l.slideCount % l.options.slidesToScroll ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, r]), a = l.currentSlide, l.currentSlide = r, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? (l.fadeSlideOut(a), l.fadeSlide(r, function () {
                l.postSlide(r)
            })) : l.postSlide(r), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(s, function () {
                l.postSlide(r)
            }) : l.postSlide(r))))
        }, t.prototype.startLoad = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function () {
            var e, t, i, n, r = this;
            return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? r.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? r.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
        }, t.prototype.swipeEnd = function () {
            var e, t = this;
            if (t.dragging = !1, t.shouldClick = t.touchObject.swipeLength > 10 ? !1 : !0, void 0 === t.touchObject.curX) return !1;
            if (t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
                case "left":
                    e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(e), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
                    break;
                case "right":
                    e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(e), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
            } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
        }, t.prototype.swipeHandler = function (e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function (e) {
            var t, i, n, r, a, o = this;
            return a = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !o.dragging || a && 1 !== a.length ? !1 : (t = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== a ? a[0].pageX : e.clientX, o.touchObject.curY = void 0 !== a ? a[0].pageY : e.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), o.options.verticalSwiping === !0 && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), i = o.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && o.touchObject.swipeLength > 4 && e.preventDefault(), r = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), o.options.verticalSwiping === !0 && (r = o.touchObject.curY > o.touchObject.startY ? 1 : -1), n = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, o.options.infinite === !1 && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (n = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), o.swipeLeft = o.options.vertical === !1 ? t + n * r : t + n * (o.$list.height() / o.listWidth) * r, o.options.verticalSwiping === !0 && (o.swipeLeft = t + n * r), o.options.fade === !0 || o.options.touchMove === !1 ? !1 : o.animating === !0 ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft)) : void 0)
        }, t.prototype.swipeStart = function (e) {
            var t, i = this;
            return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function () {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function (e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function () {
            var e, t = this;
            e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function () {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function () {
            var e = this;
            document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : e.options.autoplay === !0 && (e.paused = !1, e.autoPlay())
        }, t.prototype.initADA = function () {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
                e(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + t.instanceUid + i
                })
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (i) {
                e(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + i,
                    id: "slick-slide" + t.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, t.prototype.activateADA = function () {
            var e = this,
                t = e.$slider.find("*").is(":focus");
            e.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false",
                tabindex: "0"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            }), t && e.$slideTrack.find(".slick-active").focus()
        }, t.prototype.focusHandler = function () {
            var t = this;
            t.$slider.on("focus.slick blur.slick", "*", function (i) {
                i.stopImmediatePropagation();
                var n = e(this);
                setTimeout(function () {
                    t.isPlay && (n.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
                }, 0)
            })
        }, e.fn.slick = function () {
            var e, i = this,
                n = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                a = i.length,
                o = 0;
            for (o; a > o; o++)
                if ("object" == typeof n || "undefined" == typeof n ? i[o].slick = new t(i[o], n) : e = i[o].slick[n].apply(i[o].slick, r), "undefined" != typeof e) return e;
            return i
        }
    }), $(function () {
        $(".slick").each(function (e, t) {
            var i = $(t);
            i.slick({
                dots: !0,
                appendDots: i.closest("section").find(".slider-controls"),
                speed: i.attr("slick-speed") || 500,
                arrows: !1,
                adaptiveHeight: !0,
                customPaging: function (e, t) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + $(e.$slides[t]).attr("slick-title") + "</button>"
                }
            })
        }), $(".vd-ft-video").slick({
            dots: !1,
            infinite: !0,
            speed: 500,
            cssEase: "linear",
            nextArrow: $("#video-feature, .next"),
            prevArrow: $("#video-feature, .next")
        }), $(".carousel-radio").on("change", function () {
            $(".slick-slider").slick("refresh")
        })
    }), $(function () {
        $(".staff-profiles li").click(function () {
            $(this).children(".profile-content").toggleClass("activec"), $(".profile-content").not($(this).children(".profile-content")).removeClass("activec"), $(".profile-content .name .expand-reduce").html("\ud83d\udd3b"), $(".activec .name .expand-reduce").html("\ud83d\udd3a"), $(this).toggleClass("extend-description"), $(".staff-profiles li").not($(this)).removeClass("extend-description")
        })
    }), $(function () {
        $(".subscribe-form").on("ajax:success", function () {
            $(this).replaceWith("<h4>You're subscribed!</h4>")
        })
    }), $(function () {
        $(".contact-form").on("ajax:success", function () {
            $(this).replaceWith("<h4 class='center-align'>We will be in contact with you shortly.</h4>")
        })
    }), ! function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function (e) {
        e.extend(e.fn, {
            validate: function (t) {
                if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var i = e.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"), i = new e.validator(t, this[0]), e.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
                    i.settings.submitHandler && (i.submitButton = t.target), e(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.on("submit.validate", function (t) {
                    function n() {
                        var n, r;
                        return i.settings.submitHandler ? (i.submitButton && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && n.remove(), void 0 !== r ? r : !1) : !0
                    }
                    return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
                })), i)
            },
            valid: function () {
                var t, i, n;
                return e(this[0]).is("form") ? t = this.validate().form() : (n = [], t = !0, i = e(this[0].form).validate(), this.each(function () {
                    t = i.element(this) && t, t || (n = n.concat(i.errorList))
                }), i.errorList = n), t
            },
            rules: function (t, i) {
                if (this.length) {
                    var n, r, a, o, s, l, u = this[0];
                    if (t) switch (n = e.data(u.form, "validator").settings, r = n.rules, a = e.validator.staticRules(u), t) {
                        case "add":
                            e.extend(a, e.validator.normalizeRule(i)), delete a.messages, r[u.name] = a, i.messages && (n.messages[u.name] = e.extend(n.messages[u.name], i.messages));
                            break;
                        case "remove":
                            return i ? (l = {}, e.each(i.split(/\s/), function (t, i) {
                                l[i] = a[i], delete a[i], "required" === i && e(u).removeAttr("aria-required")
                            }), l) : (delete r[u.name], a)
                    }
                    return o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u), o.required && (s = o.required, delete o.required, o = e.extend({
                        required: s
                    }, o), e(u).attr("aria-required", "true")), o.remote && (s = o.remote, delete o.remote, o = e.extend(o, {
                        remote: s
                    })), o
                }
            }
        }), e.extend(e.expr[":"], {
            blank: function (t) {
                return !e.trim("" + e(t).val())
            },
            filled: function (t) {
                var i = e(t).val();
                return null !== i && !!e.trim("" + i)
            },
            unchecked: function (t) {
                return !e(t).prop("checked")
            }
        }), e.validator = function (t, i) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = i, this.init()
        }, e.validator.format = function (t, i) {
            return 1 === arguments.length ? function () {
                var i = e.makeArray(arguments);
                return i.unshift(t), e.validator.format.apply(this, i)
            } : void 0 === i ? t : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), e.each(i, function (e, i) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                    return i
                })
            }), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (e) {
                    this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
                },
                onfocusout: function (e) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function (t, i) {
                    var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === i.which && "" === this.elementValue(t) || -1 !== e.inArray(i.keyCode, n) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
                },
                onclick: function (e) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function (t, i, n) {
                    "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
                },
                unhighlight: function (t, i, n) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
                }
            },
            setDefaults: function (t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}."),
                step: e.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function t(t) {
                        var i = e.data(this.form, "validator"),
                            n = "on" + t.type.replace(/^validate/, ""),
                            r = i.settings;
                        r[n] && !e(this).is(r.ignore) && r[n].call(i, this, t)
                    }
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var i, n = this.groups = {};
                    e.each(this.settings.groups, function (t, i) {
                        "string" == typeof i && (i = i.split(/\s/)), e.each(i, function (e, i) {
                            n[i] = t
                        })
                    }), i = this.settings.rules, e.each(i, function (t, n) {
                        i[t] = e.validator.normalizeRule(n)
                    }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function () {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function (t) {
                    var i, n, r = this.clean(t),
                        a = this.validationTargetFor(r),
                        o = this,
                        s = !0;
                    return void 0 === a ? delete this.invalid[r.name] : (this.prepareElement(a), this.currentElements = e(a), n = this.groups[a.name], n && e.each(this.groups, function (e, t) {
                        t === n && e !== a.name && (r = o.validationTargetFor(o.clean(o.findByName(e))), r && r.name in o.invalid && (o.currentElements.push(r), s = s && o.check(r)))
                    }), i = this.check(a) !== !1, s = s && i, this.invalid[a.name] = i ? !1 : !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !i)), s
                },
                showErrors: function (t) {
                    if (t) {
                        var i = this;
                        e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
                            return {
                                message: e,
                                element: i.findByName(t)[0]
                            }
                        }), this.successList = e.grep(this.successList, function (e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function () {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(t)
                },
                resetElements: function (e) {
                    var t;
                    if (this.settings.unhighlight)
                        for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                    else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid)
                },
                objectLength: function (e) {
                    var t, i = 0;
                    for (t in e) e[t] && i++;
                    return i
                },
                hideErrors: function () {
                    this.hideThese(this.toHide)
                },
                hideThese: function (e) {
                    e.not(this.containers).text(""), this.addWrapper(e).hide()
                },
                valid: function () {
                    return 0 === this.size()
                },
                size: function () {
                    return this.errorList.length
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function () {
                    var t = this.lastActive;
                    return t && 1 === e.grep(this.errorList, function (e) {
                        return e.element.name === t.name
                    }).length && t
                },
                elements: function () {
                    var t = this,
                        i = {};
                    return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                        var n = this.name || e(this).attr("name");
                        return !n && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]), n in i || !t.objectLength(e(this).rules()) ? !1 : (i[n] = !0, !0)
                    })
                },
                clean: function (t) {
                    return e(t)[0]
                },
                errors: function () {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                },
                resetInternals: function () {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
                },
                reset: function () {
                    this.resetInternals(), this.currentElements = e([])
                },
                prepareForm: function () {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function (e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function (t) {
                    var i, n, r = e(t),
                        a = t.type;
                    return "radio" === a || "checkbox" === a ? this.findByName(t.name).filter(":checked").val() : "number" === a && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : r.val() : (i = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === a ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/"), n >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\"), n >= 0 ? i.substr(n + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
                },
                check: function (t) {
                    t = this.validationTargetFor(this.clean(t));
                    var i, n, r, a = e(t).rules(),
                        o = e.map(a, function (e, t) {
                            return t
                        }).length,
                        s = !1,
                        l = this.elementValue(t);
                    if ("function" == typeof a.normalizer) {
                        if (l = a.normalizer.call(t, l), "string" != typeof l) throw new TypeError("The normalizer should return a string value.");
                        delete a.normalizer
                    }
                    for (n in a) {
                        r = {
                            method: n,
                            parameters: a[n]
                        };
                        try {
                            if (i = e.validator.methods[n].call(this, l, t, r.parameters), "dependency-mismatch" === i && 1 === o) {
                                s = !0;
                                continue
                            }
                            if (s = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!i) return this.formatAndAdd(t, r), !1
                        } catch (u) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", u), u instanceof TypeError && (u.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), u
                        }
                    }
                    return s ? void 0 : (this.objectLength(a) && this.successList.push(t), !0)
                },
                customDataMessage: function (t, i) {
                    return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
                },
                customMessage: function (e, t) {
                    var i = this.settings.messages[e];
                    return i && (i.constructor === String ? i : i[t])
                },
                findDefined: function () {
                    for (var e = 0; e < arguments.length; e++)
                        if (void 0 !== arguments[e]) return arguments[e]
                },
                defaultMessage: function (t, i) {
                    var n = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                        r = /\$?\{(\d+)\}/g;
                    return "function" == typeof n ? n = n.call(this, i.parameters, t) : r.test(n) && (n = e.validator.format(n.replace(r, "{$1}"), i.parameters)), n
                },
                formatAndAdd: function (e, t) {
                    var i = this.defaultMessage(e, t);
                    this.errorList.push({
                        message: i,
                        element: e,
                        method: t.method
                    }), this.errorMap[e.name] = i, this.submitted[e.name] = i
                },
                addWrapper: function (e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function () {
                    var e, t, i;
                    for (e = 0; this.errorList[e]; e++) i = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function () {
                    return e(this.errorList).map(function () {
                        return this.element
                    })
                },
                showLabel: function (t, i) {
                    var n, r, a, o, s = this.errorsFor(t),
                        l = this.idOrName(t),
                        u = e(t).attr("aria-describedby");
                    s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), n = s, this.settings.wrapper && (n = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, e(t)) : n.insertAfter(t), s.is("label") ? s.attr("for", l) : 0 === s.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (a = s.attr("id"), u ? u.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (u += " " + a) : u = a, e(t).attr("aria-describedby", u), r = this.groups[t.name], r && (o = this, e.each(o.groups, function (t, i) {
                        i === r && e("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", s.attr("id"))
                    })))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, t)), this.toShow = this.toShow.add(s)
                },
                errorsFor: function (t) {
                    var i = this.escapeCssMeta(this.idOrName(t)),
                        n = e(t).attr("aria-describedby"),
                        r = "label[for='" + i + "'], label[for='" + i + "'] *";
                    return n && (r = r + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(r)
                },
                escapeCssMeta: function (e) {
                    return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function (e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function (t) {
                    return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
                },
                checkable: function (e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function (t) {
                    return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
                },
                getLength: function (t, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function (e, t) {
                    return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
                },
                dependTypes: {
                    "boolean": function (e) {
                        return e
                    },
                    string: function (t, i) {
                        return !!e(t, i.form).length
                    },
                    "function": function (e, t) {
                        return e(t)
                    }
                },
                optional: function (t) {
                    var i = this.elementValue(t);
                    return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
                },
                startRequest: function (t) {
                    this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
                },
                stopRequest: function (t, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function (t, i) {
                    return e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, {
                            method: i
                        })
                    })
                },
                destroy: function () {
                    this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function (t, i) {
                t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
            },
            classRules: function (t) {
                var i = {},
                    n = e(t).attr("class");
                return n && e.each(n.split(" "), function () {
                    this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
                }), i
            },
            normalizeAttributeRule: function (e, t, i, n) {
                /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
            },
            attributeRules: function (t) {
                var i, n, r = {},
                    a = e(t),
                    o = t.getAttribute("type");
                for (i in e.validator.methods) "required" === i ? (n = t.getAttribute(i), "" === n && (n = !0), n = !!n) : n = a.attr(i), this.normalizeAttributeRule(r, o, i, n);
                return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
            },
            dataRules: function (t) {
                var i, n, r = {},
                    a = e(t),
                    o = t.getAttribute("type");
                for (i in e.validator.methods) n = a.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(r, o, i, n);
                return r
            },
            staticRules: function (t) {
                var i = {},
                    n = e.data(t.form, "validator");
                return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}), i
            },
            normalizeRules: function (t, i) {
                return e.each(t, function (n, r) {
                    if (r === !1) return void delete t[n];
                    if (r.param || r.depends) {
                        var a = !0;
                        switch (typeof r.depends) {
                            case "string":
                                a = !!e(r.depends, i.form).length;
                                break;
                            case "function":
                                a = r.depends.call(i, i)
                        }
                        a ? t[n] = void 0 !== r.param ? r.param : !0 : (e.data(i.form, "validator").resetElements(e(i)), delete t[n])
                    }
                }), e.each(t, function (n, r) {
                    t[n] = e.isFunction(r) && "normalizer" !== n ? r(i) : r
                }), e.each(["minlength", "maxlength"], function () {
                    t[this] && (t[this] = Number(t[this]))
                }), e.each(["rangelength", "range"], function () {
                    var i;
                    t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
                }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function (t) {
                if ("string" == typeof t) {
                    var i = {};
                    e.each(t.split(/\s/), function () {
                        i[this] = !0
                    }), t = i
                }
                return t
            },
            addMethod: function (t, i, n) {
                e.validator.methods[t] = i, e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t], i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function (t, i, n) {
                    if (!this.depend(n, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var r = e(i).val();
                        return r && r.length > 0
                    }
                    return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
                },
                email: function (e, t) {
                    return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
                },
                url: function (e, t) {
                    return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
                },
                date: function (e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
                },
                dateISO: function (e, t) {
                    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
                },
                number: function (e, t) {
                    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function (e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                minlength: function (t, i, n) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || r >= n
                },
                maxlength: function (t, i, n) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || n >= r
                },
                rangelength: function (t, i, n) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || r >= n[0] && r <= n[1]
                },
                min: function (e, t, i) {
                    return this.optional(t) || e >= i
                },
                max: function (e, t, i) {
                    return this.optional(t) || i >= e
                },
                range: function (e, t, i) {
                    return this.optional(t) || e >= i[0] && e <= i[1]
                },
                step: function (t, i, n) {
                    var r = e(i).attr("type"),
                        a = "Step attribute on input type " + r + " is not supported.",
                        o = ["text", "number", "range"],
                        s = new RegExp("\\b" + r + "\\b"),
                        l = r && !s.test(o.join());
                    if (l) throw new Error(a);
                    return this.optional(i) || t % n === 0
                },
                equalTo: function (t, i, n) {
                    var r = e(n);
                    return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                        e(i).valid()
                    }), t === r.val()
                },
                remote: function (t, i, n, r) {
                    if (this.optional(i)) return "dependency-mismatch";
                    r = "string" == typeof r && r || "remote";
                    var a, o, s, l = this.previousValue(i, r);
                    return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][r], this.settings.messages[i.name][r] = l.message, n = "string" == typeof n && {
                        url: n
                    } || n, s = e.param(e.extend({
                        data: t
                    }, n.data)), l.old === s ? l.valid : (l.old = s, a = this, this.startRequest(i), o = {}, o[i.name] = t, e.ajax(e.extend(!0, {
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: o,
                        context: a.currentForm,
                        success: function (e) {
                            var n, o, s, u = e === !0 || "true" === e;
                            a.settings.messages[i.name][r] = l.originalMessage, u ? (s = a.formSubmitted, a.resetInternals(), a.toHide = a.errorsFor(i), a.formSubmitted = s, a.successList.push(i), a.invalid[i.name] = !1, a.showErrors()) : (n = {}, o = e || a.defaultMessage(i, {
                                method: r,
                                parameters: t
                            }), n[i.name] = l.message = o, a.invalid[i.name] = !0, a.showErrors(n)), l.valid = u, a.stopRequest(i, u)
                        }
                    }, n)), "pending")
                }
            }
        });
        var t, i = {};
        e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, n) {
            var r = e.port;
            "abort" === e.mode && (i[r] && i[r].abort(), i[r] = n)
        }) : (t = e.ajax, e.ajax = function (n) {
            var r = ("mode" in n ? n : e.ajaxSettings).mode,
                a = ("port" in n ? n : e.ajaxSettings).port;
            return "abort" === r ? (i[a] && i[a].abort(), i[a] = t.apply(this, arguments), i[a]) : t.apply(this, arguments)
        })
    }),
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function (e) {
        function t(t, n) {
            var r, a, o, s = t.nodeName.toLowerCase();
            return "area" === s ? (r = t.parentNode, a = r.name, t.href && a && "map" === r.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(s) ? !t.disabled : "a" === s ? t.href || n : n) && i(t)
        }

        function i(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                return "hidden" === e.css(this, "visibility")
            }).length
        }

        function n(e) {
            for (var t, i; e.length && e[0] !== document;) {
                if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                e = e.parent()
            }
            return 0
        }

        function r() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function a(t) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(i, "mouseout", function () {
                e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
            }).delegate(i, "mouseover", o)
        }

        function o() {
            e.datepicker._isDisabledDatepicker(l.inline ? l.dpDiv.parent()[0] : l.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        }

        function s(t, i) {
            e.extend(t, i);
            for (var n in i) null == i[n] && (t[n] = i[n]);
            return t
        }
        e.ui = e.ui || {}, e.extend(e.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            scrollParent: function (t) {
                var i = this.css("position"),
                    n = "absolute" === i,
                    r = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    a = this.parents().filter(function () {
                        var t = e(this);
                        return n && "static" === t.css("position") ? !1 : r.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
            },
            uniqueId: function () {
                var e = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }
            }(),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
                return function (i) {
                    return !!e.data(i, t)
                }
            }) : function (t, i, n) {
                return !!e.data(t, n[3])
            },
            focusable: function (i) {
                return t(i, !isNaN(e.attr(i, "tabindex")))
            },
            tabbable: function (i) {
                var n = e.attr(i, "tabindex"),
                    r = isNaN(n);
                return (r || n >= 0) && t(i, !r)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
            function n(t, i, n, a) {
                return e.each(r, function () {
                    i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), i
            }
            var r = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                a = i.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + i] = function (t) {
                return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                    e(this).css(a, n(this, t) + "px")
                })
            }, e.fn["outer" + i] = function (t, r) {
                return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                    e(this).css(a, n(this, t, !0, r) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
            return function (i) {
                return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
            focus: function (t) {
                return function (i, n) {
                    return "number" == typeof i ? this.each(function () {
                        var t = this;
                        setTimeout(function () {
                            e(t).focus(), n && n.call(t)
                        }, i)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            disableSelection: function () {
                var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.bind(e + ".ui-disableSelection", function (e) {
                        e.preventDefault()
                    })
                }
            }(),
            enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function (t) {
                if (void 0 !== t) return this.css("zIndex", t);
                if (this.length)
                    for (var i, n, r = e(this[0]); r.length && r[0] !== document;) {
                        if (i = r.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(r.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                        r = r.parent()
                    }
                return 0
            }
        }), e.ui.plugin = {
            add: function (t, i, n) {
                var r, a = e.ui[t].prototype;
                for (r in n) a.plugins[r] = a.plugins[r] || [], a.plugins[r].push([i, n[r]])
            },
            call: function (e, t, i, n) {
                var r, a = e.plugins[t];
                if (a && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                    for (r = 0; r < a.length; r++) e.options[a[r][0]] && a[r][1].apply(e.element, i)
            }
        }, e.extend(e.ui, {
            datepicker: {
                version: "1.11.4"
            }
        });
        var l;
        e.extend(r.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (e) {
                return s(this._defaults, e || {}), this
            },
            _attachDatepicker: function (t, i) {
                var n, r, a;
                n = t.nodeName.toLowerCase(), r = "div" === n || "span" === n, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), r), a.settings = e.extend({}, i || {}), "input" === n ? this._connectDatepicker(t, a) : r && this._inlineDatepicker(t, a)
            },
            _newInst: function (t, i) {
                var n = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: n,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function (t, i) {
                var n = e(t);
                i.append = e([]), i.trigger = e([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function (t, i) {
                var n, r, a, o = this._get(i, "appendText"),
                    s = this._get(i, "isRTL");
                i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[s ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && t.focus(this._showDatepicker), ("button" === n || "both" === n) && (r = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                    src: a,
                    alt: r,
                    title: r
                }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                    src: a,
                    alt: r,
                    title: r
                }) : r)), t[s ? "before" : "after"](i.trigger), i.trigger.click(function () {
                    return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function (e) {
                if (this._get(e, "autoSize") && !e.inline) {
                    var t, i, n, r, a = new Date(2009, 11, 20),
                        o = this._get(e, "dateFormat");
                    o.match(/[DM]/) && (t = function (e) {
                        for (i = 0, n = 0, r = 0; r < e.length; r++) e[r].length > i && (i = e[r].length, n = r);
                        return n
                    }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
                }
            },
            _inlineDatepicker: function (t, i) {
                var n = e(t);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (t, i, n, r, a) {
                var o, l, u, c, d, h = this._dialogInst;
                return h || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), h = this._dialogInst = this._newInst(this._dialogInput, !1), h.settings = {}, e.data(this._dialogInput[0], "datepicker", h)), s(h.settings, r || {}), i = i && i.constructor === Date ? this._formatDate(h, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, u / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), h.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", h), this
            },
            _destroyDatepicker: function (t) {
                var i, n = e(t),
                    r = e.data(t, "datepicker");
                n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (r.append.remove(), r.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), l === r && (l = null))
            },
            _enableDatepicker: function (t) {
                var i, n, r = e(t),
                    a = e.data(t, "datepicker");
                r.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === i || "span" === i) && (n = r.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                    return e === t ? null : e
                }))
            },
            _disableDatepicker: function (t) {
                var i, n, r = e(t),
                    a = e.data(t, "datepicker");
                r.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === i || "span" === i) && (n = r.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                    return e === t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function (e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] === e) return !0;
                return !1
            },
            _getInst: function (t) {
                try {
                    return e.data(t, "datepicker")
                } catch (i) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (t, i, n) {
                var r, a, o, l, u = this._getInst(t);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : u ? "all" === i ? e.extend({}, u.settings) : this._get(u, i) : null : (r = i || {}, "string" == typeof i && (r = {}, r[i] = n), void(u && (this._curInst === u && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), s(u.settings, r), null !== o && void 0 !== r.dateFormat && void 0 === r.minDate && (u.settings.minDate = this._formatDate(u, o)), null !== l && void 0 !== r.dateFormat && void 0 === r.maxDate && (u.settings.maxDate = this._formatDate(u, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), u), this._autoSize(u), this._setDate(u, a), this._updateAlternate(u), this._updateDatepicker(u))))
            },
            _changeDatepicker: function (e, t, i) {
                this._optionDatepicker(e, t, i)
            },
            _refreshDatepicker: function (e) {
                var t = this._getInst(e);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function (e, t) {
                var i = this._getInst(e);
                i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function (e, t) {
                var i = this._getInst(e);
                return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
            },
            _doKeyDown: function (t) {
                var i, n, r, a = e.datepicker._getInst(t.target),
                    o = !0,
                    s = a.dpDiv.is(".ui-datepicker-rtl");
                if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        e.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return r = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), r[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, r[0]), i = e.datepicker._get(a, "onSelect"), i ? (n = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [n, a])) : e.datepicker._hideDatepicker(), !1;
                    case 27:
                        e.datepicker._hideDatepicker();
                        break;
                    case 33:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 34:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, s ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, s ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        o = !1
                } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
                o && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function (t) {
                var i, n, r = e.datepicker._getInst(t.target);
                return e.datepicker._get(r, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(r, "dateFormat")), n = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
            },
            _doKeyUp: function (t) {
                var i, n = e.datepicker._getInst(t.target);
                if (n.input.val() !== n.lastVal) try {
                    i = e.datepicker.parseDate(e.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, e.datepicker._getFormatConfig(n)), i && (e.datepicker._setDateFromField(n), e.datepicker._updateAlternate(n), e.datepicker._updateDatepicker(n))
                } catch (r) {}
                return !0
            },
            _showDatepicker: function (t) {
                if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                    var i, r, a, o, l, u, c;
                    i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(i, "beforeShow"), a = r ? r.apply(t, [t, i]) : {}, a !== !1 && (s(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () {
                        return o |= "fixed" === e(this).css("position"), !o
                    }), l = {
                        left: e.datepicker._pos[0],
                        top: e.datepicker._pos[1]
                    }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), e.datepicker._updateDatepicker(i), l = e.datepicker._checkOffset(i, l, o), i.dpDiv.css({
                        position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px"
                    }), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", n(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
                }
            },
            _updateDatepicker: function (t) {
                this.maxRows = 4, l = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var i, n = this._getNumberOfMonths(t),
                    r = n[1],
                    a = 17,
                    s = t.dpDiv.find("." + this._dayOverClass + " a");
                s.length > 0 && o.apply(s.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", a * r + "em"), t.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
                    i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function (e) {
                return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
            },
            _checkOffset: function (t, i, n) {
                var r = t.dpDiv.outerWidth(),
                    a = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    s = t.input ? t.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : e(document).scrollLeft()),
                    u = document.documentElement.clientHeight + (n ? 0 : e(document).scrollTop());
                return i.left -= this._get(t, "isRTL") ? r - o : 0, i.left -= n && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= n && i.top === t.input.offset().top + s ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + r > l && l > r ? Math.abs(i.left + r - l) : 0), i.top -= Math.min(i.top, i.top + a > u && u > a ? Math.abs(a + s) : 0), i
            },
            _findPos: function (t) {
                for (var i, n = this._getInst(t), r = this._get(n, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[r ? "previousSibling" : "nextSibling"];
                return i = e(t).offset(), [i.left, i.top]
            },
            _hideDatepicker: function (t) {
                var i, n, r, a, o = this._curInst;
                !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), n = this._get(o, "duration"), r = function () {
                    e.datepicker._tidyDialog(o)
                }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), n, r) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, r), i || r(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function (e) {
                e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (t) {
                if (e.datepicker._curInst) {
                    var i = e(t.target),
                        n = e.datepicker._getInst(i[0]);
                    (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== n) && e.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (t, i, n) {
                var r = e(t),
                    a = this._getInst(r[0]);
                this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(a, i + ("M" === n ? this._get(a, "showCurrentAtPos") : 0), n), this._updateDatepicker(a))
            },
            _gotoToday: function (t) {
                var i, n = e(t),
                    r = this._getInst(n[0]);
                this._get(r, "gotoCurrent") && r.currentDay ? (r.selectedDay = r.currentDay, r.drawMonth = r.selectedMonth = r.currentMonth, r.drawYear = r.selectedYear = r.currentYear) : (i = new Date, r.selectedDay = i.getDate(), r.drawMonth = r.selectedMonth = i.getMonth(), r.drawYear = r.selectedYear = i.getFullYear()), this._notifyChange(r), this._adjustDate(n)
            },
            _selectMonthYear: function (t, i, n) {
                var r = e(t),
                    a = this._getInst(r[0]);
                a["selected" + ("M" === n ? "Month" : "Year")] = a["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(r)
            },
            _selectDay: function (t, i, n, r) {
                var a, o = e(t);
                e(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", r).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = n, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
            },
            _clearDate: function (t) {
                var i = e(t);
                this._selectDate(i, "")
            },
            _selectDate: function (t, i) {
                var n, r = e(t),
                    a = this._getInst(r[0]);
                i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), n = this._get(a, "onSelect"), n ? n.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function (t) {
                var i, n, r, a = this._get(t, "altField");
                a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), n = this._getDate(t), r = this.formatDate(i, n, this._getFormatConfig(t)), e(a).each(function () {
                    e(this).val(r)
                }))
            },
            noWeekends: function (e) {
                var t = e.getDay();
                return [t > 0 && 6 > t, ""]
            },
            iso8601Week: function (e) {
                var t, i = new Date(e.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
            },
            parseDate: function (t, i, n) {
                if (null == t || null == i) throw "Invalid arguments";
                if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
                var r, a, o, s, l = 0,
                    u = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                    d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    h = (n ? n.dayNames : null) || this._defaults.dayNames,
                    f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    p = (n ? n.monthNames : null) || this._defaults.monthNames,
                    g = -1,
                    m = -1,
                    v = -1,
                    y = -1,
                    b = !1,
                    _ = function (e) {
                        var i = r + 1 < t.length && t.charAt(r + 1) === e;
                        return i && r++, i
                    },
                    x = function (e) {
                        var t = _(e),
                            n = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                            r = "y" === e ? n : 1,
                            a = new RegExp("^\\d{" + r + "," + n + "}"),
                            o = i.substring(l).match(a);
                        if (!o) throw "Missing number at position " + l;
                        return l += o[0].length, parseInt(o[0], 10)
                    },
                    k = function (t, n, r) {
                        var a = -1,
                            o = e.map(_(t) ? r : n, function (e, t) {
                                return [
                                    [t, e]
                                ]
                            }).sort(function (e, t) {
                                return -(e[1].length - t[1].length)
                            });
                        if (e.each(o, function (e, t) {
                                var n = t[1];
                                return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (a = t[0], l += n.length, !1) : void 0
                            }), -1 !== a) return a + 1;
                        throw "Unknown name at position " + l
                    },
                    w = function () {
                        if (i.charAt(l) !== t.charAt(r)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (r = 0; r < t.length; r++)
                    if (b) "'" !== t.charAt(r) || _("'") ? w() : b = !1;
                    else switch (t.charAt(r)) {
                        case "d":
                            v = x("d");
                            break;
                        case "D":
                            k("D", d, h);
                            break;
                        case "o":
                            y = x("o");
                            break;
                        case "m":
                            m = x("m");
                            break;
                        case "M":
                            m = k("M", f, p);
                            break;
                        case "y":
                            g = x("y");
                            break;
                        case "@":
                            s = new Date(x("@")), g = s.getFullYear(), m = s.getMonth() + 1, v = s.getDate();
                            break;
                        case "!":
                            s = new Date((x("!") - this._ticksTo1970) / 1e4), g = s.getFullYear(), m = s.getMonth() + 1, v = s.getDate();
                            break;
                        case "'":
                            _("'") ? w() : b = !0;
                            break;
                        default:
                            w()
                    }
                if (l < i.length && (o = i.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
                if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), y > -1)
                    for (m = 1, v = y;;) {
                        if (a = this._getDaysInMonth(g, m - 1), a >= v) break;
                        m++, v -= a
                    }
                if (s = this._daylightSavingAdjust(new Date(g, m - 1, v)), s.getFullYear() !== g || s.getMonth() + 1 !== m || s.getDate() !== v) throw "Invalid date";
                return s
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function (e, t, i) {
                if (!t) return "";
                var n, r = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    a = (i ? i.dayNames : null) || this._defaults.dayNames,
                    o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    s = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function (t) {
                        var i = n + 1 < e.length && e.charAt(n + 1) === t;
                        return i && n++, i
                    },
                    u = function (e, t, i) {
                        var n = "" + t;
                        if (l(e))
                            for (; n.length < i;) n = "0" + n;
                        return n
                    },
                    c = function (e, t, i, n) {
                        return l(e) ? n[t] : i[t]
                    },
                    d = "",
                    h = !1;
                if (t)
                    for (n = 0; n < e.length; n++)
                        if (h) "'" !== e.charAt(n) || l("'") ? d += e.charAt(n) : h = !1;
                        else switch (e.charAt(n)) {
                            case "d":
                                d += u("d", t.getDate(), 2);
                                break;
                            case "D":
                                d += c("D", t.getDay(), r, a);
                                break;
                            case "o":
                                d += u("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                d += u("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                d += c("M", t.getMonth(), o, s);
                                break;
                            case "y":
                                d += l("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                d += t.getTime();
                                break;
                            case "!":
                                d += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? d += "'" : h = !0;
                                break;
                            default:
                                d += e.charAt(n)
                        }
                return d
            },
            _possibleChars: function (e) {
                var t, i = "",
                    n = !1,
                    r = function (i) {
                        var n = t + 1 < e.length && e.charAt(t + 1) === i;
                        return n && t++, n
                    };
                for (t = 0; t < e.length; t++)
                    if (n) "'" !== e.charAt(t) || r("'") ? i += e.charAt(t) : n = !1;
                    else switch (e.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            r("'") ? i += "'" : n = !0;
                            break;
                        default:
                            i += e.charAt(t)
                    }
                return i
            },
            _get: function (e, t) {
                return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
            },
            _setDateFromField: function (e, t) {
                if (e.input.val() !== e.lastVal) {
                    var i = this._get(e, "dateFormat"),
                        n = e.lastVal = e.input ? e.input.val() : null,
                        r = this._getDefaultDate(e),
                        a = r,
                        o = this._getFormatConfig(e);
                    try {
                        a = this.parseDate(i, n, o) || r
                    } catch (s) {
                        n = t ? "" : n
                    }
                    e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = n ? a.getDate() : 0, e.currentMonth = n ? a.getMonth() : 0, e.currentYear = n ? a.getFullYear() : 0, this._adjustInstDate(e)
                }
            },
            _getDefaultDate: function (e) {
                return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
            },
            _determineDate: function (t, i, n) {
                var r = function (e) {
                        var t = new Date;
                        return t.setDate(t.getDate() + e), t
                    },
                    a = function (i) {
                        try {
                            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                        } catch (n) {}
                        for (var r = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = r.getFullYear(), o = r.getMonth(), s = r.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = l.exec(i); u;) {
                            switch (u[2] || "d") {
                                case "d":
                                case "D":
                                    s += parseInt(u[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    s += 7 * parseInt(u[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    o += parseInt(u[1], 10), s = Math.min(s, e.datepicker._getDaysInMonth(a, o));
                                    break;
                                case "y":
                                case "Y":
                                    a += parseInt(u[1], 10), s = Math.min(s, e.datepicker._getDaysInMonth(a, o))
                            }
                            u = l.exec(i)
                        }
                        return new Date(a, o, s)
                    },
                    o = null == i || "" === i ? n : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? n : r(i) : new Date(i.getTime());
                return o = o && "Invalid Date" === o.toString() ? n : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function (e) {
                return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
            },
            _setDate: function (e, t, i) {
                var n = !t,
                    r = e.selectedMonth,
                    a = e.selectedYear,
                    o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), r === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
            },
            _getDate: function (e) {
                var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return t
            },
            _attachHandlers: function (t) {
                var i = this._get(t, "stepMonths"),
                    n = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function () {
                    var t = {
                        prev: function () {
                            e.datepicker._adjustDate(n, -i, "M")
                        },
                        next: function () {
                            e.datepicker._adjustDate(n, +i, "M")
                        },
                        hide: function () {
                            e.datepicker._hideDatepicker()
                        },
                        today: function () {
                            e.datepicker._gotoToday(n)
                        },
                        selectDay: function () {
                            return e.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function () {
                            return e.datepicker._selectMonthYear(n, this, "M"), !1
                        },
                        selectYear: function () {
                            return e.datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (e) {
                var t, i, n, r, a, o, s, l, u, c, d, h, f, p, g, m, v, y, b, _, x, k, w, S, C, T, D, M, A, P, I, F, E, O, N, L, $, R, j, H = new Date,
                    W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
                    z = this._get(e, "isRTL"),
                    V = this._get(e, "showButtonPanel"),
                    B = this._get(e, "hideIfNoPrevNext"),
                    Y = this._get(e, "navigationAsDateFormat"),
                    q = this._getNumberOfMonths(e),
                    U = this._get(e, "showCurrentAtPos"),
                    X = this._get(e, "stepMonths"),
                    G = 1 !== q[0] || 1 !== q[1],
                    Z = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    K = this._getMinMaxDate(e, "min"),
                    Q = this._getMinMaxDate(e, "max"),
                    J = e.drawMonth - U,
                    et = e.drawYear;
                if (0 > J && (J += 12, et--), Q)
                    for (t = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - q[0] * q[1] + 1, Q.getDate())), t = K && K > t ? K : t; this._daylightSavingAdjust(new Date(et, J, 1)) > t;) J--, 0 > J && (J = 11, et--);
                for (e.drawMonth = J, e.drawYear = et, i = this._get(e, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, J - X, 1)), this._getFormatConfig(e)) : i, n = this._canAdjustMonth(e, -1, et, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (z ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (z ? "e" : "w") + "'>" + i + "</span></a>", r = this._get(e, "nextText"), r = Y ? this.formatDate(r, this._daylightSavingAdjust(new Date(et, J + X, 1)), this._getFormatConfig(e)) : r, a = this._canAdjustMonth(e, 1, et, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (z ? "w" : "e") + "'>" + r + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (z ? "w" : "e") + "'>" + r + "</span></a>", o = this._get(e, "currentText"), s = this._get(e, "gotoCurrent") && e.currentDay ? Z : W, o = Y ? this.formatDate(o, s, this._getFormatConfig(e)) : o, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", u = V ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (z ? l : "") + (this._isInRange(e, s) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (z ? "" : l) + "</div>" : "", c = parseInt(this._get(e, "firstDay"), 10), c = isNaN(c) ? 0 : c, d = this._get(e, "showWeek"), h = this._get(e, "dayNames"), f = this._get(e, "dayNamesMin"), p = this._get(e, "monthNames"), g = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", k = 0; k < q[0]; k++) {
                    for (w = "", this.maxRows = 4, S = 0; S < q[1]; S++) {
                        if (C = this._daylightSavingAdjust(new Date(et, J, e.selectedDay)), T = " ui-corner-all", D = "", G) {
                            if (D += "<div class='ui-datepicker-group", q[1] > 1) switch (S) {
                                case 0:
                                    D += " ui-datepicker-group-first", T = " ui-corner-" + (z ? "right" : "left");
                                    break;
                                case q[1] - 1:
                                    D += " ui-datepicker-group-last", T = " ui-corner-" + (z ? "left" : "right");
                                    break;
                                default:
                                    D += " ui-datepicker-group-middle", T = ""
                            }
                            D += "'>"
                        }
                        for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === k ? z ? a : n : "") + (/all|right/.test(T) && 0 === k ? z ? n : a : "") + this._generateMonthYearHeader(e, J, et, K, Q, k > 0 || S > 0, p, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", M = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) A = (x + c) % 7, M += "<th scope='col'" + ((x + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + h[A] + "'>" + f[A] + "</span></th>";
                        for (D += M + "</tr></thead><tbody>", P = this._getDaysInMonth(et, J), et === e.selectedYear && J === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, P)), I = (this._getFirstDayOfMonth(et, J) - c + 7) % 7, F = Math.ceil((I + P) / 7), E = G && this.maxRows > F ? this.maxRows : F, this.maxRows = E, O = this._daylightSavingAdjust(new Date(et, J, 1 - I)), N = 0; E > N; N++) {
                            for (D += "<tr>", L = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(O) + "</td>" : "", x = 0; 7 > x; x++) $ = m ? m.apply(e.input ? e.input[0] : null, [O]) : [!0, ""], R = O.getMonth() !== J, j = R && !y || !$[0] || K && K > O || Q && O > Q, L += "<td class='" + ((x + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (R ? " ui-datepicker-other-month" : "") + (O.getTime() === C.getTime() && J === e.selectedMonth && e._keyEvent || b.getTime() === O.getTime() && b.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (R && !v ? "" : " " + $[1] + (O.getTime() === Z.getTime() ? " " + this._currentClass : "") + (O.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (R && !v || !$[2] ? "" : " title='" + $[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + (R && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === W.getTime() ? " ui-state-highlight" : "") + (O.getTime() === Z.getTime() ? " ui-state-active" : "") + (R ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                            D += L + "</tr>"
                        }
                        J++, J > 11 && (J = 0, et++), D += "</tbody></table>" + (G ? "</div>" + (q[0] > 0 && S === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += D
                    }
                    _ += w
                }
                return _ += u, e._keyEvent = !1, _
            },
            _generateMonthYearHeader: function (e, t, i, n, r, a, o, s) {
                var l, u, c, d, h, f, p, g, m = this._get(e, "changeMonth"),
                    v = this._get(e, "changeYear"),
                    y = this._get(e, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    _ = "";
                if (a || !m) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, u = r && r.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!u || c <= r.getMonth()) && (_ += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + s[c] + "</option>");
                    _ += "</select>"
                }
                if (y || (b += _ + (!a && m && v ? "" : "&#xa0;")), !e.yearshtml)
                    if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (d = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), f = function (e) {
                                var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                                return isNaN(t) ? h : t
                            }, p = f(d[0]), g = Math.max(p, f(d[1] || "")), p = n ? Math.max(p, n.getFullYear()) : p, g = r ? Math.min(g, r.getFullYear()) : g, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= p; p++) e.yearshtml += "<option value='" + p + "'" + (p === i ? " selected='selected'" : "") + ">" + p + "</option>";
                        e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                    } return b += this._get(e, "yearSuffix"), y && (b += (!a && m && v ? "" : "&#xa0;") + _), b += "</div>"
            },
            _adjustInstDate: function (e, t, i) {
                var n = e.drawYear + ("Y" === i ? t : 0),
                    r = e.drawMonth + ("M" === i ? t : 0),
                    a = Math.min(e.selectedDay, this._getDaysInMonth(n, r)) + ("D" === i ? t : 0),
                    o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, r, a)));
                e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
            },
            _restrictMinMax: function (e, t) {
                var i = this._getMinMaxDate(e, "min"),
                    n = this._getMinMaxDate(e, "max"),
                    r = i && i > t ? i : t;
                return n && r > n ? n : r
            },
            _notifyChange: function (e) {
                var t = this._get(e, "onChangeMonthYear");
                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
            },
            _getNumberOfMonths: function (e) {
                var t = this._get(e, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
            },
            _getMinMaxDate: function (e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null)
            },
            _getDaysInMonth: function (e, t) {
                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function (e, t) {
                return new Date(e, t, 1).getDay()
            },
            _canAdjustMonth: function (e, t, i, n) {
                var r = this._getNumberOfMonths(e),
                    a = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : r[0] * r[1]), 1));
                return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
            },
            _isInRange: function (e, t) {
                var i, n, r = this._getMinMaxDate(e, "min"),
                    a = this._getMinMaxDate(e, "max"),
                    o = null,
                    s = null,
                    l = this._get(e, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), o = parseInt(i[0], 10), s = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += n), i[1].match(/[+\-].*/) && (s += n)), (!r || t.getTime() >= r.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!s || t.getFullYear() <= s)
            },
            _getFormatConfig: function (e) {
                var t = this._get(e, "shortYearCutoff");
                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(e, "dayNamesShort"),
                    dayNames: this._get(e, "dayNames"),
                    monthNamesShort: this._get(e, "monthNamesShort"),
                    monthNames: this._get(e, "monthNames")
                }
            },
            _formatDate: function (e, t, i, n) {
                t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e))
            }
        }), e.fn.datepicker = function (t) {
            if (!this.length) return this;
            e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
                "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
            }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
        }, e.datepicker = new r, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4";
        e.datepicker
    }), $(function () {
        var e = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
        e && $("form.validate-safari")[0] && $("form.validate-safari").validate({
            errorPlacement: function (e, t) {
                if (t.is("[type=radio]")) {
                    var i = t.parents(".app-group").find("hr");
                    e.insertAfter(i)
                } else e.insertAfter(t)
            },
            errorElement: "div",
            errorClass: "notice"
        })
    }), $(function () {
        function e() {
            var e = $("#timeline .content-section"),
                t = ($("#timeline .line"), $("#timeline .row").last()),
                i = .06 * e.width(),
                n = e.height() == e.outerHeight() ? e.height() - i : e.height(),
                r = n - t.height();
            $("#timeline .line").css("height", r)
        }
        e(), $(window).resize(e)
    }), $(function () {
        var e = $("#cities-dropdown"),
            t = $("#main-events-page .cities");
        e.on("click", function () {
            t.toggleClass("closed"), $(this).toggleClass("open")
        }), t.on("click", "a", function () {
            var i = $(this),
                n = e.text(),
                r = i.text();
            r != n && (e.removeClass("open"), t.addClass("closed"), e.text(r), t.children("li:contains('" + r + "')").children("a").addClass("active"), t.children("li:contains('" + n + "')").children("a").removeClass("active"))
        })
    }), $("#larry").on("click", function () {
        $("#larry").attr({
            src: $("#disappearing-larry").data("url")
        })
    }), $(function () {
        function e() {
            $("#program-video")[0].src += "&autoplay=1"
        }

        function t(t) {
            return t.preventDefault(), e(), i.remove(), !1
        }
        $("#play-video").on("click", t);
        var i = $("#play-video-overlay").on("click", t)
    }), $(document).ready(function () {
        function e() {
            $(".invalid-code").hide(), $(".valid-code").hide(), $("#student_application_discount_code").removeClass("invalid-glow").removeClass("valid-glow"), $(".discount-display").hide()
        }

        function t(e) {
            var t = "Discount Found: $" + e.discount.amount_cents / 100 + " OFF!";
            $(".invalid-code").hide(), $(".valid-code").show(), $("#student_application_discount_code").removeClass("invalid-glow").addClass("valid-glow"), $(".discount-display").text(t).show()
        }

        function i() {
            $(".invalid-code").show(), $(".valid-code").hide(), $("#student_application_discount_code").removeClass("valid-glow").addClass("invalid-glow"), $(".discount-display").text("Invalid Code, Please Try Again").show()
        }

        function n(e) {
            $.ajax("/student_application/validate_discount_code", {
                method: "GET",
                dataType: "JSON",
                data: {
                    promo_code: e
                }
            }).done(function (e) {
                e.success ? t(e) : i()
            })
        }

        function r() {
            var t = $.trim($("#student_application_discount_code").val());
            "" === t ? e() : n(t)
        }
        $("#initial_app_form li.program-item input:radio").on("change", r), $("#student_application_discount_code").on("input", r)
    }), $(function () {
        $(".datepicker").datepicker({
            dateFormat: "dd/mm/yy",
            yearRange: "-80:-10",
            changeMonth: !0,
            changeYear: !0,
            maxDate: "-10y"
        })
    }), $.datepicker._generateMonthYearHeader_original = $.datepicker._generateMonthYearHeader, $.datepicker._generateMonthYearHeader = function (e, t, i, n, r, a, o, s) {
        var l = $($.datepicker._generateMonthYearHeader_original(e, t, i, n, r, a, o, s)),
            u = l.find(".ui-datepicker-year");
        return u.html(Array.prototype.reverse.apply(u.children())), $("<div />").append(l).html()
    }, $(function () {
        $("#international_true").prop("checked") && $(".hide-international-questions").show(), $("#international_true").click(function () {
            $(this).prop("checked") && $(".hide-international-questions").show()
        }), $("#international_false").click(function () {
            $(this).prop("checked") && $(".hide-international-questions").hide()
        }), $("input[name='student_application[person_attributes][which_visa]']").on("change", function () {
            "Study Visa" == $(this).val() ? $(".hide-study-visa-questions").show() : $(".hide-study-visa-questions").hide()
        })
    }), $(function () {
        $("#student_application_expecting_funding_assistance_true").prop("checked") && $("#contract-funding-questions").removeClass("hide-funding-questions"), $("#student_application_expecting_funding_assistance_true").click(function () {
            $(this).prop("checked") && $("#contract-funding-questions").removeClass("hide-funding-questions")
        }), $("#student_application_expecting_funding_assistance_false").click(function () {
            $(this).prop("checked") && $("#contract-funding-questions").addClass("hide-funding-questions")
        })
    }), $(function () {
        $("#student_contract_key").change(function () {
            0 == document.getElementById("student_contract_key").files.length ? $("#confirm-checked").prop("required", !1) : $("#confirm-checked").prop("required", !0)
        })
    }), $("*[data-sync]").on("change", function () {
        var e = $(this);
        console.log(e.val(), e.data("sync")), $("*[data-sync]").each(function (t, i) {
            i !== e[0] && i.value === e.val() && i.dataset.sync === e.data("sync") && $(i).click()
        })
    }),
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function (e) {
        e.ui = e.ui || {};
        var t = (e.ui.version = "1.12.1", 0),
            i = Array.prototype.slice;
        e.cleanData = function (t) {
            return function (i) {
                var n, r, a;
                for (a = 0; null != (r = i[a]); a++) try {
                    n = e._data(r, "events"), n && n.remove && e(r).triggerHandler("remove")
                } catch (o) {}
                t(i)
            }
        }(e.cleanData), e.widget = function (t, i, n) {
            var r, a, o, s = {},
                l = t.split(".")[0];
            t = t.split(".")[1];
            var u = l + "-" + t;
            return n || (n = i, i = e.Widget), e.isArray(n) && (n = e.extend.apply(null, [{}].concat(n))), e.expr[":"][u.toLowerCase()] = function (t) {
                return !!e.data(t, u)
            }, e[l] = e[l] || {}, r = e[l][t], a = e[l][t] = function (e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
            }, e.extend(a, r, {
                version: n.version,
                _proto: e.extend({}, n),
                _childConstructors: []
            }), o = new i, o.options = e.widget.extend({}, o.options), e.each(n, function (t, n) {
                return e.isFunction(n) ? void(s[t] = function () {
                    function e() {
                        return i.prototype[t].apply(this, arguments)
                    }

                    function r(e) {
                        return i.prototype[t].apply(this, e)
                    }
                    return function () {
                        var t, i = this._super,
                            a = this._superApply;
                        return this._super = e, this._superApply = r, t = n.apply(this, arguments), this._super = i, this._superApply = a, t
                    }
                }()) : void(s[t] = n)
            }), a.prototype = e.widget.extend(o, {
                widgetEventPrefix: r ? o.widgetEventPrefix || t : t
            }, s, {
                constructor: a,
                namespace: l,
                widgetName: t,
                widgetFullName: u
            }), r ? (e.each(r._childConstructors, function (t, i) {
                var n = i.prototype;
                e.widget(n.namespace + "." + n.widgetName, a, i._proto)
            }), delete r._childConstructors) : i._childConstructors.push(a), e.widget.bridge(t, a), a
        }, e.widget.extend = function (t) {
            for (var n, r, a = i.call(arguments, 1), o = 0, s = a.length; s > o; o++)
                for (n in a[o]) r = a[o][n], a[o].hasOwnProperty(n) && void 0 !== r && (t[n] = e.isPlainObject(r) ? e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], r) : e.widget.extend({}, r) : r);
            return t
        }, e.widget.bridge = function (t, n) {
            var r = n.prototype.widgetFullName || t;
            e.fn[t] = function (a) {
                var o = "string" == typeof a,
                    s = i.call(arguments, 1),
                    l = this;
                return o ? this.length || "instance" !== a ? this.each(function () {
                    var i, n = e.data(this, r);
                    return "instance" === a ? (l = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, s), i !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
                }) : l = void 0 : (s.length && (a = e.widget.extend.apply(null, [a].concat(s))), this.each(function () {
                    var t = e.data(this, r);
                    t ? (t.option(a || {}), t._init && t._init()) : e.data(this, r, new n(a, this))
                })), l
            }
        }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function (i, n) {
                n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (e) {
                        e.target === n && this.destroy()
                    }
                }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function () {
                return {}
            },
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function () {
                var t = this;
                this._destroy(), e.each(this.classesElementLookup, function (e, i) {
                    t._removeClass(i, e)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: e.noop,
            widget: function () {
                return this.element
            },
            option: function (t, i) {
                var n, r, a, o = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (o = {}, n = t.split("."), t = n.shift(), n.length) {
                        for (r = o[t] = e.widget.extend({}, this.options[t]), a = 0; a < n.length - 1; a++) r[n[a]] = r[n[a]] || {}, r = r[n[a]];
                        if (t = n.pop(), 1 === arguments.length) return void 0 === r[t] ? null : r[t];
                        r[t] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        o[t] = i
                    } return this._setOptions(o), this
            },
            _setOptions: function (e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function (e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function (t) {
                var i, n, r;
                for (i in t) r = this.classesElementLookup[i], t[i] !== this.options.classes[i] && r && r.length && (n = e(r.get()), this._removeClass(r, i), n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function (e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function () {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function () {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function (t) {
                function i(i, a) {
                    var o, s;
                    for (s = 0; s < i.length; s++) o = r.classesElementLookup[i[s]] || e(), o = e(t.add ? e.unique(o.get().concat(t.element.get())) : o.not(t.element).get()), r.classesElementLookup[i[s]] = o, n.push(i[s]), a && t.classes[i[s]] && n.push(t.classes[i[s]])
                }
                var n = [],
                    r = this;
                return t = e.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, t), this._on(t.element, {
                    remove: "_untrackClassesElement"
                }), t.keys && i(t.keys.match(/\S+/g) || [], !0), t.extra && i(t.extra.match(/\S+/g) || []), n.join(" ")
            },
            _untrackClassesElement: function (t) {
                var i = this;
                e.each(i.classesElementLookup, function (n, r) {
                    -1 !== e.inArray(t.target, r) && (i.classesElementLookup[n] = e(r.not(t.target).get()))
                })
            },
            _removeClass: function (e, t, i) {
                return this._toggleClass(e, t, i, !1)
            },
            _addClass: function (e, t, i) {
                return this._toggleClass(e, t, i, !0)
            },
            _toggleClass: function (e, t, i, n) {
                n = "boolean" == typeof n ? n : i;
                var r = "string" == typeof e || null === e,
                    a = {
                        extra: r ? t : i,
                        keys: r ? e : t,
                        element: r ? this.element : e,
                        add: n
                    };
                return a.element.toggleClass(this._classes(a), n), this
            },
            _on: function (t, i, n) {
                var r, a = this;
                "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = r = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, r = this.widget()), e.each(n, function (n, o) {
                    function s() {
                        return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                    }
                    "string" != typeof o && (s.guid = o.guid = o.guid || s.guid || e.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        u = l[1] + a.eventNamespace,
                        c = l[2];
                    c ? r.on(u, c, s) : i.on(u, s)
                })
            },
            _off: function (t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(i).off(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function (e, t) {
                function i() {
                    return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, t || 0)
            },
            _hoverable: function (t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function (t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function (t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function (t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function (t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function (t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function (t, i, n) {
                var r, a, o = this.options[t];
                if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                    for (r in a) r in i || (i[r] = a[r]);
                return this.element.trigger(i, n), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (t, i) {
            e.Widget.prototype["_" + t] = function (n, r, a) {
                "string" == typeof r && (r = {
                    effect: r
                });
                var o, s = r ? r === !0 || "number" == typeof r ? i : r.effect || i : t;
                r = r || {}, "number" == typeof r && (r = {
                    duration: r
                }), o = !e.isEmptyObject(r), r.complete = a, r.delay && n.delay(r.delay), o && e.effects && e.effects.effect[s] ? n[t](r) : s !== t && n[s] ? n[s](r.duration, r.easing, a) : n.queue(function (i) {
                    e(this)[t](), a && a.call(n[0]), i()
                })
            }
        });
        e.widget
    }),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery", "jquery-ui/ui/widget"], e) : "object" == typeof exports ? e(require("jquery"), require("./vendor/jquery.ui.widget")) : e(window.jQuery)
    }(function (e) {
        "use strict";

        function t(t) {
            var i = "dragover" === t;
            return function (n) {
                n.dataTransfer = n.originalEvent && n.originalEvent.dataTransfer;
                var r = n.dataTransfer;
                r && -1 !== e.inArray("Files", r.types) && this._trigger(t, e.Event(t, {
                    delegatedEvent: n
                })) !== !1 && (n.preventDefault(), i && (r.dropEffect = "copy"))
            }
        }
        e.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || e('<input type="file"/>').prop("disabled")), e.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), e.support.xhrFormDataFileUpload = !!window.FormData, e.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), e.widget("blueimp.fileupload", {
            options: {
                dropZone: e(document),
                pasteZone: void 0,
                fileInput: void 0,
                replaceFileInput: !0,
                paramName: void 0,
                singleFileUploads: !0,
                limitMultiFileUploads: void 0,
                limitMultiFileUploadSize: void 0,
                limitMultiFileUploadSizeOverhead: 512,
                sequentialUploads: !1,
                limitConcurrentUploads: void 0,
                forceIframeTransport: !1,
                redirect: void 0,
                redirectParamName: void 0,
                postMessage: void 0,
                multipart: !0,
                maxChunkSize: void 0,
                uploadedBytes: void 0,
                recalculateProgress: !0,
                progressInterval: 100,
                bitrateInterval: 500,
                autoUpload: !0,
                messages: {
                    uploadedBytes: "Uploaded bytes exceed file size"
                },
                i18n: function (t, i) {
                    return t = this.messages[t] || t.toString(), i && e.each(i, function (e, i) {
                        t = t.replace("{" + e + "}", i)
                    }), t
                },
                formData: function (e) {
                    return e.serializeArray()
                },
                add: function (t, i) {
                    return t.isDefaultPrevented() ? !1 : void((i.autoUpload || i.autoUpload !== !1 && e(this).fileupload("option", "autoUpload")) && i.process().done(function () {
                        i.submit()
                    }))
                },
                processData: !1,
                contentType: !1,
                cache: !1,
                timeout: 0
            },
            _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
            _blobSlice: e.support.blobSlice && function () {
                var e = this.slice || this.webkitSlice || this.mozSlice;
                return e.apply(this, arguments)
            },
            _BitrateTimer: function () {
                this.timestamp = Date.now ? Date.now() : (new Date).getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function (e, t, i) {
                    var n = e - this.timestamp;
                    return (!this.bitrate || !i || n > i) && (this.bitrate = (t - this.loaded) * (1e3 / n) * 8, this.loaded = t, this.timestamp = e), this.bitrate
                }
            },
            _isXHRUpload: function (t) {
                return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
            },
            _getFormData: function (t) {
                var i;
                return "function" === e.type(t.formData) ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : "object" === e.type(t.formData) ? (i = [], e.each(t.formData, function (e, t) {
                    i.push({
                        name: e,
                        value: t
                    })
                }), i) : []
            },
            _getTotal: function (t) {
                var i = 0;
                return e.each(t, function (e, t) {
                    i += t.size || 1
                }), i
            },
            _initProgressObject: function (t) {
                var i = {
                    loaded: 0,
                    total: 0,
                    bitrate: 0
                };
                t._progress ? e.extend(t._progress, i) : t._progress = i
            },
            _initResponseObject: function (e) {
                var t;
                if (e._response)
                    for (t in e._response) e._response.hasOwnProperty(t) && delete e._response[t];
                else e._response = {}
            },
            _onProgress: function (t, i) {
                if (t.lengthComputable) {
                    var n, r = Date.now ? Date.now() : (new Date).getTime();
                    if (i._time && i.progressInterval && r - i._time < i.progressInterval && t.loaded !== t.total) return;
                    i._time = r, n = Math.floor(t.loaded / t.total * (i.chunkSize || i._progress.total)) + (i.uploadedBytes || 0), this._progress.loaded += n - i._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(r, this._progress.loaded, i.bitrateInterval), i._progress.loaded = i.loaded = n, i._progress.bitrate = i.bitrate = i._bitrateTimer.getBitrate(r, n, i.bitrateInterval), this._trigger("progress", e.Event("progress", {
                        delegatedEvent: t
                    }), i), this._trigger("progressall", e.Event("progressall", {
                        delegatedEvent: t
                    }), this._progress)
                }
            },
            _initProgressListener: function (t) {
                var i = this,
                    n = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
                n.upload && (e(n.upload).bind("progress", function (e) {
                    var n = e.originalEvent;
                    e.lengthComputable = n.lengthComputable, e.loaded = n.loaded, e.total = n.total, i._onProgress(e, t)
                }), t.xhr = function () {
                    return n
                })
            },
            _deinitProgressListener: function (t) {
                var i = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
                i.upload && e(i.upload).unbind("progress")
            },
            _isInstanceOf: function (e, t) {
                return Object.prototype.toString.call(t) === "[object " + e + "]"
            },
            _initXHRData: function (t) {
                var i, n = this,
                    r = t.files[0],
                    a = t.multipart || !e.support.xhrFileUpload,
                    o = "array" === e.type(t.paramName) ? t.paramName[0] : t.paramName;
                t.headers = e.extend({}, t.headers), t.contentRange && (t.headers["Content-Range"] = t.contentRange), a && !t.blob && this._isInstanceOf("File", r) || (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(r.uploadName || r.name) + '"'), a ? e.support.xhrFormDataFileUpload && (t.postMessage ? (i = this._getFormData(t), t.blob ? i.push({
                    name: o,
                    value: t.blob
                }) : e.each(t.files, function (n, r) {
                    i.push({
                        name: "array" === e.type(t.paramName) && t.paramName[n] || o,
                        value: r
                    })
                })) : (n._isInstanceOf("FormData", t.formData) ? i = t.formData : (i = new FormData, e.each(this._getFormData(t), function (e, t) {
                    i.append(t.name, t.value)
                })), t.blob ? i.append(o, t.blob, r.uploadName || r.name) : e.each(t.files, function (r, a) {
                    (n._isInstanceOf("File", a) || n._isInstanceOf("Blob", a)) && i.append("array" === e.type(t.paramName) && t.paramName[r] || o, a, a.uploadName || a.name)
                })), t.data = i) : (t.contentType = r.type || "application/octet-stream", t.data = t.blob || r), t.blob = null
            },
            _initIframeSettings: function (t) {
                var i = e("<a></a>").prop("href", t.url).prop("host");
                t.dataType = "iframe " + (t.dataType || ""), t.formData = this._getFormData(t), t.redirect && i && i !== location.host && t.formData.push({
                    name: t.redirectParamName || "redirect",
                    value: t.redirect
                })
            },
            _initDataSettings: function (e) {
                this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
            },
            _getParamName: function (t) {
                var i = e(t.fileInput),
                    n = t.paramName;
                return n ? e.isArray(n) || (n = [n]) : (n = [], i.each(function () {
                    for (var t = e(this), i = t.prop("name") || "files[]", r = (t.prop("files") || [1]).length; r;) n.push(i), r -= 1
                }), n.length || (n = [i.prop("name") || "files[]"])), n
            },
            _initFormSettings: function (t) {
                t.form && t.form.length || (t.form = e(t.fileInput.prop("form")), t.form.length || (t.form = e(this.options.fileInput.prop("form")))), t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop("action") || location.href), t.type = (t.type || "string" === e.type(t.form.prop("method")) && t.form.prop("method") || "").toUpperCase(), "POST" !== t.type && "PUT" !== t.type && "PATCH" !== t.type && (t.type = "POST"), t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
            },
            _getAJAXSettings: function (t) {
                var i = e.extend({}, this.options, t);
                return this._initFormSettings(i), this._initDataSettings(i), i
            },
            _getDeferredState: function (e) {
                return e.state ? e.state() : e.isResolved() ? "resolved" : e.isRejected() ? "rejected" : "pending"
            },
            _enhancePromise: function (e) {
                return e.success = e.done, e.error = e.fail, e.complete = e.always, e
            },
            _getXHRPromise: function (t, i, n) {
                var r = e.Deferred(),
                    a = r.promise();
                return i = i || this.options.context || a, t === !0 ? r.resolveWith(i, n) : t === !1 && r.rejectWith(i, n), a.abort = r.promise, this._enhancePromise(a)
            },
            _addConvenienceMethods: function (t, i) {
                var n = this,
                    r = function (t) {
                        return e.Deferred().resolveWith(n, t).promise()
                    };
                i.process = function (t, a) {
                    return (t || a) && (i._processQueue = this._processQueue = (this._processQueue || r([this])).then(function () {
                        return i.errorThrown ? e.Deferred().rejectWith(n, [i]).promise() : r(arguments)
                    }).then(t, a)), this._processQueue || r([this])
                }, i.submit = function () {
                    return "pending" !== this.state() && (i.jqXHR = this.jqXHR = n._trigger("submit", e.Event("submit", {
                        delegatedEvent: t
                    }), this) !== !1 && n._onSend(t, this)), this.jqXHR || n._getXHRPromise()
                }, i.abort = function () {
                    return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", n._trigger("fail", null, this), n._getXHRPromise(!1))
                }, i.state = function () {
                    return this.jqXHR ? n._getDeferredState(this.jqXHR) : this._processQueue ? n._getDeferredState(this._processQueue) : void 0
                }, i.processing = function () {
                    return !this.jqXHR && this._processQueue && "pending" === n._getDeferredState(this._processQueue)
                }, i.progress = function () {
                    return this._progress
                }, i.response = function () {
                    return this._response
                }
            },
            _getUploadedBytes: function (e) {
                var t = e.getResponseHeader("Range"),
                    i = t && t.split("-"),
                    n = i && i.length > 1 && parseInt(i[1], 10);
                return n && n + 1
            },
            _chunkedUpload: function (t, i) {
                t.uploadedBytes = t.uploadedBytes || 0;
                var n, r, a = this,
                    o = t.files[0],
                    s = o.size,
                    l = t.uploadedBytes,
                    u = t.maxChunkSize || s,
                    c = this._blobSlice,
                    d = e.Deferred(),
                    h = d.promise();
                return this._isXHRUpload(t) && c && (l || ("function" === e.type(u) ? u(t) : u) < s) && !t.data ? i ? !0 : l >= s ? (o.error = t.i18n("uploadedBytes"), this._getXHRPromise(!1, t.context, [null, "error", o.error])) : (r = function () {
                    var i = e.extend({}, t),
                        h = i._progress.loaded;
                    i.blob = c.call(o, l, l + ("function" === e.type(u) ? u(i) : u), o.type), i.chunkSize = i.blob.size, i.contentRange = "bytes " + l + "-" + (l + i.chunkSize - 1) + "/" + s, a._trigger("chunkbeforesend", null, i), a._initXHRData(i), a._initProgressListener(i), n = (a._trigger("chunksend", null, i) !== !1 && e.ajax(i) || a._getXHRPromise(!1, i.context)).done(function (n, o, u) {
                        l = a._getUploadedBytes(u) || l + i.chunkSize, h + i.chunkSize - i._progress.loaded && a._onProgress(e.Event("progress", {
                            lengthComputable: !0,
                            loaded: l - i.uploadedBytes,
                            total: l - i.uploadedBytes
                        }), i), t.uploadedBytes = i.uploadedBytes = l, i.result = n, i.textStatus = o, i.jqXHR = u, a._trigger("chunkdone", null, i), a._trigger("chunkalways", null, i), s > l ? r() : d.resolveWith(i.context, [n, o, u])
                    }).fail(function (e, t, n) {
                        i.jqXHR = e, i.textStatus = t, i.errorThrown = n, a._trigger("chunkfail", null, i), a._trigger("chunkalways", null, i), d.rejectWith(i.context, [e, t, n])
                    }).always(function () {
                        a._deinitProgressListener(i)
                    })
                }, this._enhancePromise(h), h.abort = function () {
                    return n.abort()
                }, r(), h) : !1
            },
            _beforeSend: function (e, t) {
                0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0), this._initResponseObject(t), this._initProgressObject(t), t._progress.loaded = t.loaded = t.uploadedBytes || 0, t._progress.total = t.total = this._getTotal(t.files) || 1, t._progress.bitrate = t.bitrate = 0, this._active += 1, this._progress.loaded += t.loaded, this._progress.total += t.total
            },
            _onDone: function (t, i, n, r) {
                var a = r._progress.total,
                    o = r._response;
                r._progress.loaded < a && this._onProgress(e.Event("progress", {
                    lengthComputable: !0,
                    loaded: a,
                    total: a
                }), r), o.result = r.result = t, o.textStatus = r.textStatus = i, o.jqXHR = r.jqXHR = n, this._trigger("done", null, r)
            },
            _onFail: function (e, t, i, n) {
                var r = n._response;
                n.recalculateProgress && (this._progress.loaded -= n._progress.loaded, this._progress.total -= n._progress.total), r.jqXHR = n.jqXHR = e, r.textStatus = n.textStatus = t, r.errorThrown = n.errorThrown = i, this._trigger("fail", null, n)
            },
            _onAlways: function (e, t, i, n) {
                this._trigger("always", null, n)
            },
            _onSend: function (t, i) {
                i.submit || this._addConvenienceMethods(t, i);
                var n, r, a, o, s = this,
                    l = s._getAJAXSettings(i),
                    u = function () {
                        return s._sending += 1, l._bitrateTimer = new s._BitrateTimer, n = n || ((r || s._trigger("send", e.Event("send", {
                            delegatedEvent: t
                        }), l) === !1) && s._getXHRPromise(!1, l.context, r) || s._chunkedUpload(l) || e.ajax(l)).done(function (e, t, i) {
                            s._onDone(e, t, i, l)
                        }).fail(function (e, t, i) {
                            s._onFail(e, t, i, l)
                        }).always(function (e, t, i) {
                            if (s._deinitProgressListener(l), s._onAlways(e, t, i, l), s._sending -= 1, s._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > s._sending)
                                for (var n = s._slots.shift(); n;) {
                                    if ("pending" === s._getDeferredState(n)) {
                                        n.resolve();
                                        break
                                    }
                                    n = s._slots.shift()
                                }
                            0 === s._active && s._trigger("stop")
                        })
                    };
                return this._beforeSend(t, l), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (a = e.Deferred(), this._slots.push(a), o = a.then(u)) : (this._sequence = this._sequence.then(u, u), o = this._sequence), o.abort = function () {
                    return r = [void 0, "abort", "abort"], n ? n.abort() : (a && a.rejectWith(l.context, r), u())
                }, this._enhancePromise(o)) : u()
            },
            _onAdd: function (t, i) {
                var n, r, a, o, s = this,
                    l = !0,
                    u = e.extend({}, this.options, i),
                    c = i.files,
                    d = c.length,
                    h = u.limitMultiFileUploads,
                    f = u.limitMultiFileUploadSize,
                    p = u.limitMultiFileUploadSizeOverhead,
                    g = 0,
                    m = this._getParamName(u),
                    v = 0;
                if (!d) return !1;
                if (f && void 0 === c[0].size && (f = void 0), (u.singleFileUploads || h || f) && this._isXHRUpload(u))
                    if (u.singleFileUploads || f || !h)
                        if (!u.singleFileUploads && f)
                            for (a = [], n = [], o = 0; d > o; o += 1) g += c[o].size + p, (o + 1 === d || g + c[o + 1].size + p > f || h && o + 1 - v >= h) && (a.push(c.slice(v, o + 1)), r = m.slice(v, o + 1), r.length || (r = m), n.push(r), v = o + 1, g = 0);
                        else n = m;
                else
                    for (a = [], n = [], o = 0; d > o; o += h) a.push(c.slice(o, o + h)), r = m.slice(o, o + h), r.length || (r = m), n.push(r);
                else a = [c], n = [m];
                return i.originalFiles = c, e.each(a || c, function (r, o) {
                    var u = e.extend({}, i);
                    return u.files = a ? o : [o], u.paramName = n[r], s._initResponseObject(u), s._initProgressObject(u), s._addConvenienceMethods(t, u), l = s._trigger("add", e.Event("add", {
                        delegatedEvent: t
                    }), u)
                }), l
            },
            _replaceFileInput: function (t) {
                var i = t.fileInput,
                    n = i.clone(!0),
                    r = i.is(document.activeElement);
                t.fileInputClone = n, e("<form></form>").append(n)[0].reset(), i.after(n).detach(), r && n.focus(), e.cleanData(i.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function (e, t) {
                    return t === i[0] ? n[0] : t
                }), i[0] === this.element[0] && (this.element = n)
            },
            _handleFileTreeEntry: function (t, i) {
                var n, r = this,
                    a = e.Deferred(),
                    o = [],
                    s = function (e) {
                        e && !e.entry && (e.entry = t), a.resolve([e])
                    },
                    l = function (e) {
                        r._handleFileTreeEntries(e, i + t.name + "/").done(function (e) {
                            a.resolve(e)
                        }).fail(s)
                    },
                    u = function () {
                        n.readEntries(function (e) {
                            e.length ? (o = o.concat(e), u()) : l(o)
                        }, s)
                    };
                return i = i || "", t.isFile ? t._file ? (t._file.relativePath = i, a.resolve(t._file)) : t.file(function (e) {
                    e.relativePath = i, a.resolve(e)
                }, s) : t.isDirectory ? (n = t.createReader(), u()) : a.resolve([]), a.promise()
            },
            _handleFileTreeEntries: function (t, i) {
                var n = this;
                return e.when.apply(e, e.map(t, function (e) {
                    return n._handleFileTreeEntry(e, i)
                })).then(function () {
                    return Array.prototype.concat.apply([], arguments)
                })
            },
            _getDroppedFiles: function (t) {
                t = t || {};
                var i = t.items;
                return i && i.length && (i[0].webkitGetAsEntry || i[0].getAsEntry) ? this._handleFileTreeEntries(e.map(i, function (e) {
                    var t;
                    return e.webkitGetAsEntry ? (t = e.webkitGetAsEntry(), t && (t._file = e.getAsFile()), t) : e.getAsEntry()
                })) : e.Deferred().resolve(e.makeArray(t.files)).promise()
            },
            _getSingleFileInputFiles: function (t) {
                t = e(t);
                var i, n, r = t.prop("webkitEntries") || t.prop("entries");
                if (r && r.length) return this._handleFileTreeEntries(r);
                if (i = e.makeArray(t.prop("files")), i.length) void 0 === i[0].name && i[0].fileName && e.each(i, function (e, t) {
                    t.name = t.fileName, t.size = t.fileSize
                });
                else {
                    if (n = t.prop("value"), !n) return e.Deferred().resolve([]).promise();
                    i = [{
                        name: n.replace(/^.*\\/, "")
                    }]
                }
                return e.Deferred().resolve(i).promise()
            },
            _getFileInputFiles: function (t) {
                return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).then(function () {
                    return Array.prototype.concat.apply([], arguments)
                }) : this._getSingleFileInputFiles(t)
            },
            _onChange: function (t) {
                var i = this,
                    n = {
                        fileInput: e(t.target),
                        form: e(t.target.form)
                    };
                this._getFileInputFiles(n.fileInput).always(function (r) {
                    n.files = r, i.options.replaceFileInput && i._replaceFileInput(n), i._trigger("change", e.Event("change", {
                        delegatedEvent: t
                    }), n) !== !1 && i._onAdd(t, n)
                })
            },
            _onPaste: function (t) {
                var i = t.originalEvent && t.originalEvent.clipboardData && t.originalEvent.clipboardData.items,
                    n = {
                        files: []
                    };
                i && i.length && (e.each(i, function (e, t) {
                    var i = t.getAsFile && t.getAsFile();
                    i && n.files.push(i)
                }), this._trigger("paste", e.Event("paste", {
                    delegatedEvent: t
                }), n) !== !1 && this._onAdd(t, n))
            },
            _onDrop: function (t) {
                t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
                var i = this,
                    n = t.dataTransfer,
                    r = {};
                n && n.files && n.files.length && (t.preventDefault(), this._getDroppedFiles(n).always(function (n) {
                    r.files = n, i._trigger("drop", e.Event("drop", {
                        delegatedEvent: t
                    }), r) !== !1 && i._onAdd(t, r)
                }))
            },
            _onDragOver: t("dragover"),
            _onDragEnter: t("dragenter"),
            _onDragLeave: t("dragleave"),
            _initEventHandlers: function () {
                this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    dragenter: this._onDragEnter,
                    dragleave: this._onDragLeave
                }), this._on(this.options.pasteZone, {
                    paste: this._onPaste
                })), e.support.fileInput && this._on(this.options.fileInput, {
                    change: this._onChange
                })
            },
            _destroyEventHandlers: function () {
                this._off(this.options.dropZone, "dragenter dragleave dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
            },
            _destroy: function () {
                this._destroyEventHandlers()
            },
            _setOption: function (t, i) {
                var n = -1 !== e.inArray(t, this._specialOptions);
                n && this._destroyEventHandlers(), this._super(t, i), n && (this._initSpecialOptions(), this._initEventHandlers())
            },
            _initSpecialOptions: function () {
                var t = this.options;
                void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), t.dropZone instanceof e || (t.dropZone = e(t.dropZone)), t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
            },
            _getRegExp: function (e) {
                var t = e.split("/"),
                    i = t.pop();
                return t.shift(), new RegExp(t.join("/"), i)
            },
            _isRegExpOption: function (t, i) {
                return "url" !== t && "string" === e.type(i) && /^\/.*\/[igm]{0,3}$/.test(i)
            },
            _initDataAttributes: function () {
                var t = this,
                    i = this.options,
                    n = this.element.data();
                e.each(this.element[0].attributes, function (e, r) {
                    var a, o = r.name.toLowerCase();
                    /^data-/.test(o) && (o = o.slice(5).replace(/-[a-z]/g, function (e) {
                        return e.charAt(1).toUpperCase()
                    }), a = n[o], t._isRegExpOption(o, a) && (a = t._getRegExp(a)), i[o] = a)
                })
            },
            _create: function () {
                this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers()
            },
            active: function () {
                return this._active
            },
            progress: function () {
                return this._progress
            },
            add: function (t) {
                var i = this;
                t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function (e) {
                    t.files = e, i._onAdd(null, t)
                }) : (t.files = e.makeArray(t.files), this._onAdd(null, t)))
            },
            send: function (t) {
                if (t && !this.options.disabled) {
                    if (t.fileInput && !t.files) {
                        var i, n, r = this,
                            a = e.Deferred(),
                            o = a.promise();
                        return o.abort = function () {
                            return n = !0, i ? i.abort() : (a.reject(null, "abort", "abort"), o)
                        }, this._getFileInputFiles(t.fileInput).always(function (e) {
                            if (!n) {
                                if (!e.length) return void a.reject();
                                t.files = e, i = r._onSend(null, t), i.then(function (e, t, i) {
                                    a.resolve(e, t, i)
                                }, function (e, t, i) {
                                    a.reject(e, t, i)
                                })
                            }
                        }), this._enhancePromise(o)
                    }
                    if (t.files = e.makeArray(t.files), t.files.length) return this._onSend(null, t)
                }
                return this._getXHRPromise(!1, t && t.context)
            }
        })
    }), $(function () {
        $(".directUpload").find("input:file").each(function (e, t) {
            var i = $(t),
                n = $(i.parents("form:first")),
                r = n.find('input[type="submit"]'),
                a = $("<div class='bar'></div>"),
                o = $("<div class='progress'></div>").append(a);
            i.after(o), i.fileupload({
                add: function (e, t) {
                    var i = [],
                        n = /(\.|\/)(gif|jpe?g|png|pdf)$/i;
                    t.originalFiles[0].name.length && !n.test(t.originalFiles[0].name) && i.push("Not an accepted file type. Only gif, jpg, png, and pdf accepted."), t.originalFiles[0].size > 15e6 && i.push("Filesize is too big. Max 15 MB."), i.length > 0 ? alert(i.join("\n \n")) : t.submit()
                },
                fileInput: i,
                url: n.data("url"),
                type: "POST",
                autoUpload: !0,
                formData: n.data("form-data"),
                paramName: "file",
                dataType: "XML",
                replaceFileInput: !1,
                progressall: function (e, t) {
                    var i = parseInt(t.loaded / t.total * 100, 10);
                    a.css("width", i + "%")
                },
                start: function () {
                    r.prop("disabled", !0), a.css("background", "green").css("display", "block").css("width", "0%").text("Uploading File...")
                },
                done: function (e, t) {
                    r.prop("disabled", !1), a.text("Uploading done");
                    var o = $(t.jqXHR.responseXML).find("Key").text(),
                        s = ("//" + n.data("host") + "/" + o, $("<input />", {
                            type: "hidden",
                            name: i.attr("name"),
                            value: o
                        }));
                    n.append(s)
                },
                fail: function () {
                    r.prop("disabled", !1), a.css("background", "red").text("Failed. Please try again.")
                }
            })
        }), $(".directUpload").submit(function () {
            $(".directUpload").find("input:file").each(function (e, t) {
                t.remove()
            })
        })
    }), $(function () {
        $(".right-arrow-button").on("click", function () {
            advanceContent("forward")
        }), $(".left-arrow-button").on("click", function () {
            advanceContent("backward")
        })
    }), $(function () {
        var e = $("#popup"),
            t = $(".popup-container");
        e.length > 0 && olark("api.box.hide"), $(".popup-close").click(function () {
            e.hide(), olark("api.box.show")
        }), $(".popup-title").click(function () {
            t.css("max-height", "999px")
        })
    }), $(function () {
        var e = $("#testimonial-dropdown"),
            t = $("#testimonials-page .testimonials"),
            i = $("#testimonial-filters");
        e.on("click", function () {
            t.toggleClass("closed"), $(this).toggleClass("open")
        }), $("#toggle-tag-filters").on("click", function () {
            i.toggleClass("active")
        })
    }), $(function () {
        $("#covid-plan h2").on("click", function () {
            $("#covid-info").toggleClass("expanded")
        })
    }), $(function () {
        $("#financial-guide-link h2").on("click", function () {
            $("#financial-guide-link").toggleClass("expanded")
        })
    });