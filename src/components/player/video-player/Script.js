/**
 * @license
 * Video.js 8.0.4 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/main/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/main/LICENSE>
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).videojs =
        t());
})(this, function () {
  "use strict";
  var R = "8.0.4";
  const U = {},
    B = function (e, t) {
      return (U[e] = U[e] || []), t && (U[e] = U[e].concat(t)), U[e];
    };
  function F(e, t) {
    return !(
      (t = B(e).indexOf(t)) <= -1 ||
      ((U[e] = U[e].slice()), U[e].splice(t, 1), 0)
    );
  }
  const j = { prefixed: !0 };
  var H = [
      [
        "requestFullscreen",
        "exitFullscreen",
        "fullscreenElement",
        "fullscreenEnabled",
        "fullscreenchange",
        "fullscreenerror",
        "fullscreen",
      ],
      [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror",
        "-webkit-full-screen",
      ],
      [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror",
        "-moz-full-screen",
      ],
      [
        "msRequestFullscreen",
        "msExitFullscreen",
        "msFullscreenElement",
        "msFullscreenEnabled",
        "MSFullscreenChange",
        "MSFullscreenError",
        "-ms-fullscreen",
      ],
    ],
    q = H[0];
  let V;
  for (let e = 0; e < H.length; e++)
    if (H[e][1] in document) {
      V = H[e];
      break;
    }
  if (V) {
    for (let e = 0; e < V.length; e++) j[q[e]] = V[e];
    j.prefixed = V[0] !== q[0];
  }
  let l = [];
  function $(e) {
    return K(e) ? Object.keys(e) : [];
  }
  const d = (function t(i) {
      let s = "info",
        r;
      function n(...e) {
        r("log", s, e);
      }
      var a, o;
      return (
        (r =
          ((a = i),
          (t, i, s) => {
            var e,
              i = o.levels[i],
              r = new RegExp(`^(${i})$`);
            if (
              ("log" !== t && s.unshift(t.toUpperCase() + ":"),
              s.unshift(a + ":"),
              l &&
                (l.push([].concat(s)),
                (e = l.length - 1e3),
                l.splice(0, 0 < e ? e : 0)),
              window.console)
            ) {
              let e = window.console[t];
              (e =
                e || "debug" !== t
                  ? e
                  : window.console.info || window.console.log) &&
                i &&
                r.test(t) &&
                e[Array.isArray(s) ? "apply" : "call"](window.console, s);
            }
          })),
        ((o = n).createLogger = (e) => t(i + ": " + e)),
        (n.levels = {
          all: "debug|log|warn|error",
          off: "",
          debug: "debug|log|warn|error",
          info: "log|warn|error",
          warn: "warn|error",
          error: "error",
          DEFAULT: s,
        }),
        (n.level = (e) => {
          if ("string" == typeof e) {
            if (!n.levels.hasOwnProperty(e))
              throw new Error(`"${e}" in not a valid log level`);
            s = e;
          }
          return s;
        }),
        (n.history = () => (l ? [].concat(l) : [])),
        (n.history.filter = (t) =>
          (l || []).filter((e) => new RegExp(`.*${t}.*`).test(e[0]))),
        (n.history.clear = () => {
          l && (l.length = 0);
        }),
        (n.history.disable = () => {
          null !== l && ((l.length = 0), (l = null));
        }),
        (n.history.enable = () => {
          null === l && (l = []);
        }),
        (n.error = (...e) => r("error", s, e)),
        (n.warn = (...e) => r("warn", s, e)),
        (n.debug = (...e) => r("debug", s, e)),
        n
      );
    })("VIDEOJS"),
    W = d.createLogger,
    G = Object.prototype.toString;
  function z(t, i) {
    $(t).forEach((e) => i(t[e], e));
  }
  function X(i, s, e = 0) {
    return $(i).reduce((e, t) => s(e, i[t], t), e);
  }
  function K(e) {
    return !!e && "object" == typeof e;
  }
  function Y(e) {
    return K(e) && "[object Object]" === G.call(e) && e.constructor === Object;
  }
  function h(...e) {
    const i = {};
    return (
      e.forEach((e) => {
        e &&
          z(e, (e, t) => {
            Y(e) ? (Y(i[t]) || (i[t] = {}), (i[t] = h(i[t], e))) : (i[t] = e);
          });
      }),
      i
    );
  }
  function Q(t, i, s, e = !0) {
    const r = (e) =>
      Object.defineProperty(t, i, { value: e, enumerable: !0, writable: !0 });
    var n = {
      configurable: !0,
      enumerable: !0,
      get() {
        var e = s();
        return r(e), e;
      },
    };
    return e && (n.set = r), Object.defineProperty(t, i, n);
  }
  var J = Object.freeze({
    __proto__: null,
    each: z,
    reduce: X,
    isObject: K,
    isPlain: Y,
    merge: h,
    defineLazyProperty: Q,
  });
  let Z = !1,
    ee = null,
    te = !1,
    ie,
    se = !1,
    re = !1,
    ne = !1,
    ae = !1,
    oe = null,
    le = null,
    de = null,
    he = !1,
    ue = !1,
    ce = !1,
    pe = !1;
  const me = Boolean(
    _e() &&
      ("ontouchstart" in window ||
        window.navigator.maxTouchPoints ||
        (window.DocumentTouch &&
          window.document instanceof window.DocumentTouch))
  );
  var ge,
    e = window.navigator && window.navigator.userAgentData;
  if (
    (e &&
      ((te = "Android" === e.platform),
      (re = Boolean(e.brands.find((e) => "Microsoft Edge" === e.brand))),
      (ne = Boolean(e.brands.find((e) => "Chromium" === e.brand))),
      (ae = !re && ne),
      (oe = le =
        (e.brands.find((e) => "Chromium" === e.brand) || {}).version || null),
      (ue = "Windows" === e.platform)),
    !ne)
  ) {
    const M = (window.navigator && window.navigator.userAgent) || "";
    (Z = /iPod/i.test(M)),
      (ee = (e = M.match(/OS (\d+)_/i)) && e[1] ? e[1] : null),
      (te = /Android/i.test(M)),
      (ie = (e = M.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i))
        ? ((mt = e[1] && parseFloat(e[1])),
          (ge = e[2] && parseFloat(e[2])),
          mt && ge ? parseFloat(e[1] + "." + e[2]) : mt || null)
        : null),
      (se = /Firefox/i.test(M)),
      (re = /Edg/i.test(M)),
      (ne = /Chrome/i.test(M) || /CriOS/i.test(M)),
      (ae = !re && ne),
      (oe = le =
        (ge = M.match(/(Chrome|CriOS)\/(\d+)/)) && ge[2]
          ? parseFloat(ge[2])
          : null),
      (de = (function () {
        var e = /MSIE\s(\d+)\.\d/.exec(M);
        let t = e && parseFloat(e[1]);
        return (t =
          !t && /Trident\/7.0/i.test(M) && /rv:11.0/.test(M) ? 11 : t);
      })()),
      (he = /Safari/i.test(M) && !ae && !te && !re),
      (ue = /Windows/i.test(M)),
      (ce = /iPad/i.test(M) || (he && me && !/iPhone/i.test(M))),
      (pe = /iPhone/i.test(M) && !ce);
  }
  const u = pe || ce || Z,
    fe = (he || u) && !ae;
  e = Object.freeze({
    __proto__: null,
    get IS_IPOD() {
      return Z;
    },
    get IOS_VERSION() {
      return ee;
    },
    get IS_ANDROID() {
      return te;
    },
    get ANDROID_VERSION() {
      return ie;
    },
    get IS_FIREFOX() {
      return se;
    },
    get IS_EDGE() {
      return re;
    },
    get IS_CHROMIUM() {
      return ne;
    },
    get IS_CHROME() {
      return ae;
    },
    get CHROMIUM_VERSION() {
      return oe;
    },
    get CHROME_VERSION() {
      return le;
    },
    get IE_VERSION() {
      return de;
    },
    get IS_SAFARI() {
      return he;
    },
    get IS_WINDOWS() {
      return ue;
    },
    get IS_IPAD() {
      return ce;
    },
    get IS_IPHONE() {
      return pe;
    },
    TOUCH_ENABLED: me,
    IS_IOS: u,
    IS_ANY_SAFARI: fe,
  });
  function ye(e) {
    return "string" == typeof e && Boolean(e.trim());
  }
  function _e() {
    return document === window.document;
  }
  function ve(e) {
    return K(e) && 1 === e.nodeType;
  }
  function be() {
    try {
      return window.parent !== window.self;
    } catch (e) {
      return !0;
    }
  }
  function Te(i) {
    return function (e, t) {
      return ye(e)
        ? (t = ve((t = ye(t) ? document.querySelector(t) : t)) ? t : document)[
            i
          ] && t[i](e)
        : document[i](null);
    };
  }
  function o(e = "div", i = {}, t = {}, s) {
    const r = document.createElement(e);
    return (
      Object.getOwnPropertyNames(i).forEach(function (e) {
        var t = i[e];
        "textContent" === e
          ? Se(r, t)
          : (r[e] === t && "tabIndex" !== e) || (r[e] = t);
      }),
      Object.getOwnPropertyNames(t).forEach(function (e) {
        r.setAttribute(e, t[e]);
      }),
      s && He(r, s),
      r
    );
  }
  function Se(e, t) {
    return (
      "undefined" == typeof e.textContent
        ? (e.innerText = t)
        : (e.textContent = t),
      e
    );
  }
  function we(e, t) {
    t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e);
  }
  function Ee(e, t) {
    if (0 <= t.indexOf(" "))
      throw new Error("class has illegal whitespace characters");
    return e.classList.contains(t);
  }
  function Ce(e, ...t) {
    return (
      e.classList.add(...t.reduce((e, t) => e.concat(t.split(/\s+/)), [])), e
    );
  }
  function ke(e, ...t) {
    return e
      ? (e.classList.remove(
          ...t.reduce((e, t) => e.concat(t.split(/\s+/)), [])
        ),
        e)
      : (d.warn("removeClass was called with an element that doesn't exist"),
        null);
  }
  function Ie(t, e, i) {
    return (
      "boolean" != typeof (i = "function" == typeof i ? i(t, e) : i) &&
        (i = void 0),
      e.split(/\s+/).forEach((e) => t.classList.toggle(e, i)),
      t
    );
  }
  function xe(i, s) {
    Object.getOwnPropertyNames(s).forEach(function (e) {
      var t = s[e];
      null === t || "undefined" == typeof t || !1 === t
        ? i.removeAttribute(e)
        : i.setAttribute(e, !0 === t ? "" : t);
    });
  }
  function Ae(i) {
    var s = {};
    if (i && i.attributes && 0 < i.attributes.length) {
      var r = i.attributes;
      for (let t = r.length - 1; 0 <= t; t--) {
        var n = r[t].name;
        let e = r[t].value;
        ("boolean" != typeof i[n] &&
          -1 ===
            ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf(
              "," + n + ","
            )) ||
          (e = null !== e),
          (s[n] = e);
      }
    }
    return s;
  }
  function Pe(e, t) {
    return e.getAttribute(t);
  }
  function Oe(e, t, i) {
    e.setAttribute(t, i);
  }
  function De(e, t) {
    e.removeAttribute(t);
  }
  function Le() {
    document.body.focus(),
      (document.onselectstart = function () {
        return !1;
      });
  }
  function Ne() {
    document.onselectstart = function () {
      return !0;
    };
  }
  function Me(e) {
    if (e && e.getBoundingClientRect && e.parentNode) {
      const t = e.getBoundingClientRect(),
        i = {};
      return (
        ["bottom", "height", "left", "right", "top", "width"].forEach((e) => {
          void 0 !== t[e] && (i[e] = t[e]);
        }),
        i.height || (i.height = parseFloat(Ge(e, "height"))),
        i.width || (i.width = parseFloat(Ge(e, "width"))),
        i
      );
    }
  }
  function Re(e) {
    if (!e || !e.offsetParent) return { left: 0, top: 0, width: 0, height: 0 };
    var t = e.offsetWidth,
      i = e.offsetHeight;
    let s = 0,
      r = 0;
    for (; e.offsetParent && e !== document[j.fullscreenElement]; )
      (s += e.offsetLeft), (r += e.offsetTop), (e = e.offsetParent);
    return { left: s, top: r, width: t, height: i };
  }
  function Ue(t, e) {
    var i = { x: 0, y: 0 };
    if (u) {
      let e = t;
      for (; e && "html" !== e.nodeName.toLowerCase(); ) {
        var s,
          r = Ge(e, "transform");
        /^matrix/.test(r)
          ? ((s = r.slice(7, -1).split(/,\s/).map(Number)),
            (i.x += s[4]),
            (i.y += s[5]))
          : /^matrix3d/.test(r) &&
            ((s = r.slice(9, -1).split(/,\s/).map(Number)),
            (i.x += s[12]),
            (i.y += s[13])),
          (e = e.parentNode);
      }
    }
    var n = {},
      a = Re(e.target),
      t = Re(t),
      o = t.width,
      l = t.height;
    let d = e.offsetY - (t.top - a.top),
      h = e.offsetX - (t.left - a.left);
    return (
      e.changedTouches &&
        ((h = e.changedTouches[0].pageX - t.left),
        (d = e.changedTouches[0].pageY + t.top),
        u) &&
        ((h -= i.x), (d -= i.y)),
      (n.y = 1 - Math.max(0, Math.min(1, d / l))),
      (n.x = Math.max(0, Math.min(1, h / o))),
      n
    );
  }
  function Be(e) {
    return K(e) && 3 === e.nodeType;
  }
  function Fe(e) {
    for (; e.firstChild; ) e.removeChild(e.firstChild);
    return e;
  }
  function je(e) {
    return (
      "function" == typeof e && (e = e()),
      (Array.isArray(e) ? e : [e])
        .map((e) =>
          ve((e = "function" == typeof e ? e() : e)) || Be(e)
            ? e
            : "string" == typeof e && /\S/.test(e)
            ? document.createTextNode(e)
            : void 0
        )
        .filter((e) => e)
    );
  }
  function He(t, e) {
    return je(e).forEach((e) => t.appendChild(e)), t;
  }
  function qe(e, t) {
    return He(Fe(e), t);
  }
  function Ve(e) {
    return (
      (void 0 === e.button && void 0 === e.buttons) ||
      (0 === e.button && void 0 === e.buttons) ||
      ("mouseup" === e.type && 0 === e.button && 0 === e.buttons) ||
      (0 === e.button && 1 === e.buttons)
    );
  }
  const $e = Te("querySelector"),
    We = Te("querySelectorAll");
  function Ge(t, i) {
    if (!t || !i) return "";
    if ("function" != typeof window.getComputedStyle) return "";
    {
      let e;
      try {
        e = window.getComputedStyle(t);
      } catch (e) {
        return "";
      }
      return e ? e.getPropertyValue(i) || e[i] : "";
    }
  }
  var ze = Object.freeze({
    __proto__: null,
    isReal: _e,
    isEl: ve,
    isInFrame: be,
    createEl: o,
    textContent: Se,
    prependTo: we,
    hasClass: Ee,
    addClass: Ce,
    removeClass: ke,
    toggleClass: Ie,
    setAttributes: xe,
    getAttributes: Ae,
    getAttribute: Pe,
    setAttribute: Oe,
    removeAttribute: De,
    blockTextSelection: Le,
    unblockTextSelection: Ne,
    getBoundingClientRect: Me,
    findPosition: Re,
    getPointerPosition: Ue,
    isTextNode: Be,
    emptyEl: Fe,
    normalizeContent: je,
    appendContent: He,
    insertContent: qe,
    isSingleLeftClick: Ve,
    $: $e,
    $$: We,
    computedStyle: Ge,
  });
  let Xe = !1,
    Ke;
  function Ye() {
    if (!1 !== Ke.options.autoSetup) {
      var e = Array.prototype.slice.call(
          document.getElementsByTagName("video")
        ),
        t = Array.prototype.slice.call(document.getElementsByTagName("audio")),
        i = Array.prototype.slice.call(
          document.getElementsByTagName("video-js")
        ),
        s = e.concat(t, i);
      if (s && 0 < s.length)
        for (let e = 0, t = s.length; e < t; e++) {
          var r = s[e];
          if (!r || !r.getAttribute) {
            Qe(1);
            break;
          }
          void 0 === r.player && null !== r.getAttribute("data-setup") && Ke(r);
        }
      else Xe || Qe(1);
    }
  }
  function Qe(e, t) {
    _e() && (t && (Ke = t), window.setTimeout(Ye, e));
  }
  function Je() {
    (Xe = !0), window.removeEventListener("load", Je);
  }
  _e() &&
    ("complete" === document.readyState
      ? Je()
      : window.addEventListener("load", Je));
  function Ze(e) {
    var t = document.createElement("style");
    return (t.className = e), t;
  }
  function et(e, t) {
    e.styleSheet ? (e.styleSheet.cssText = t) : (e.textContent = t);
  }
  var c = new WeakMap();
  let tt = 3;
  function it(e, t) {
    var i;
    c.has(e) &&
      (0 === (i = c.get(e)).handlers[t].length &&
        (delete i.handlers[t],
        e.removeEventListener
          ? e.removeEventListener(t, i.dispatcher, !1)
          : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)),
      Object.getOwnPropertyNames(i.handlers).length <= 0 &&
        (delete i.handlers, delete i.dispatcher, delete i.disabled),
      0 === Object.getOwnPropertyNames(i).length) &&
      c.delete(e);
  }
  function st(t, i, e, s) {
    e.forEach(function (e) {
      t(i, e, s);
    });
  }
  function rt(e) {
    if (!e.fixed_) {
      if (!e || !e.isPropagationStopped || !e.isImmediatePropagationStopped) {
        const n = e || window.event;
        e = {};
        for (const a in n)
          "layerX" === a ||
            "layerY" === a ||
            "keyLocation" === a ||
            "webkitMovementX" === a ||
            "webkitMovementY" === a ||
            "path" === a ||
            ("returnValue" === a && n.preventDefault) ||
            (e[a] = n[a]);
        var t, i;
        e.target || (e.target = e.srcElement || document),
          e.relatedTarget ||
            (e.relatedTarget =
              e.fromElement === e.target ? e.toElement : e.fromElement),
          (e.preventDefault = function () {
            n.preventDefault && n.preventDefault(),
              (e.returnValue = !1),
              (n.returnValue = !1),
              (e.defaultPrevented = !0);
          }),
          (e.defaultPrevented = !1),
          (e.stopPropagation = function () {
            n.stopPropagation && n.stopPropagation(),
              (e.cancelBubble = !0),
              (n.cancelBubble = !0),
              (e.isPropagationStopped = s);
          }),
          (e.isPropagationStopped = r),
          (e.stopImmediatePropagation = function () {
            n.stopImmediatePropagation && n.stopImmediatePropagation(),
              (e.isImmediatePropagationStopped = s),
              e.stopPropagation();
          }),
          (e.isImmediatePropagationStopped = r),
          null !== e.clientX &&
            void 0 !== e.clientX &&
            ((t = document.documentElement),
            (i = document.body),
            (e.pageX =
              e.clientX +
              ((t && t.scrollLeft) || (i && i.scrollLeft) || 0) -
              ((t && t.clientLeft) || (i && i.clientLeft) || 0)),
            (e.pageY =
              e.clientY +
              ((t && t.scrollTop) || (i && i.scrollTop) || 0) -
              ((t && t.clientTop) || (i && i.clientTop) || 0))),
          (e.which = e.charCode || e.keyCode),
          null !== e.button &&
            void 0 !== e.button &&
            (e.button =
              1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0);
      }
      e.fixed_ = !0;
    }
    return e;
    function s() {
      return !0;
    }
    function r() {
      return !1;
    }
  }
  let nt;
  const at = ["touchstart", "touchmove"];
  function ot(n, t, e) {
    if (Array.isArray(t)) return st(ot, n, t, e);
    c.has(n) || c.set(n, {});
    const a = c.get(n);
    if (
      (a.handlers || (a.handlers = {}),
      a.handlers[t] || (a.handlers[t] = []),
      e.guid || (e.guid = tt++),
      a.handlers[t].push(e),
      a.dispatcher ||
        ((a.disabled = !1),
        (a.dispatcher = function (i, s) {
          if (!a.disabled) {
            i = rt(i);
            var e = a.handlers[i.type];
            if (e) {
              var r = e.slice(0);
              for (
                let e = 0, t = r.length;
                e < t && !i.isImmediatePropagationStopped();
                e++
              )
                try {
                  r[e].call(n, i, s);
                } catch (e) {
                  d.error(e);
                }
            }
          }
        })),
      1 === a.handlers[t].length)
    )
      if (n.addEventListener) {
        let e = !1;
        (function () {
          if ("boolean" != typeof nt) {
            nt = !1;
            try {
              var e = Object.defineProperty({}, "passive", {
                get() {
                  nt = !0;
                },
              });
              window.addEventListener("test", null, e),
                window.removeEventListener("test", null, e);
            } catch (e) {}
          }
          return nt;
        })() &&
          -1 < at.indexOf(t) &&
          (e = { passive: !0 }),
          n.addEventListener(t, a.dispatcher, e);
      } else n.attachEvent && n.attachEvent("on" + t, a.dispatcher);
  }
  function p(e, t, i) {
    if (c.has(e)) {
      const n = c.get(e);
      if (n.handlers) {
        if (Array.isArray(t)) return st(p, e, t, i);
        var s = function (e, t) {
          (n.handlers[t] = []), it(e, t);
        };
        if (void 0 === t)
          for (const a in n.handlers)
            Object.prototype.hasOwnProperty.call(n.handlers || {}, a) &&
              s(e, a);
        else {
          var r = n.handlers[t];
          if (r)
            if (i) {
              if (i.guid)
                for (let e = 0; e < r.length; e++)
                  r[e].guid === i.guid && r.splice(e--, 1);
              it(e, t);
            } else s(e, t);
        }
      }
    }
  }
  function lt(e, t, i) {
    var s = c.has(e) ? c.get(e) : {},
      r = e.parentNode || e.ownerDocument;
    return (
      "string" == typeof t
        ? (t = { type: t, target: e })
        : t.target || (t.target = e),
      (t = rt(t)),
      s.dispatcher && s.dispatcher.call(e, t, i),
      r && !t.isPropagationStopped() && !0 === t.bubbles
        ? lt.call(null, r, t, i)
        : !r &&
          !t.defaultPrevented &&
          t.target &&
          t.target[t.type] &&
          (c.has(t.target) || c.set(t.target, {}),
          (s = c.get(t.target)),
          t.target[t.type]) &&
          ((s.disabled = !0),
          "function" == typeof t.target[t.type] && t.target[t.type](),
          (s.disabled = !1)),
      !t.defaultPrevented
    );
  }
  function dt(e, t, i) {
    if (Array.isArray(t)) return st(dt, e, t, i);
    function s() {
      p(e, t, s), i.apply(this, arguments);
    }
    (s.guid = i.guid = i.guid || tt++), ot(e, t, s);
  }
  function ht(e, t, i) {
    function s() {
      p(e, t, s), i.apply(this, arguments);
    }
    (s.guid = i.guid = i.guid || tt++), ot(e, t, s);
  }
  var ut = Object.freeze({
    __proto__: null,
    fixEvent: rt,
    on: ot,
    off: p,
    trigger: lt,
    one: dt,
    any: ht,
  });
  function m(e, t, i) {
    return (
      t.guid || (t.guid = tt++),
      ((e = t.bind(e)).guid = i ? i + "_" + t.guid : t.guid),
      e
    );
  }
  function ct(i, s) {
    let r = window.performance.now();
    return function (...e) {
      var t = window.performance.now();
      t - r >= s && (i(...e), (r = t));
    };
  }
  function pt(s, r, n, a = window) {
    let o;
    function e() {
      const e = this,
        t = arguments;
      let i = function () {
        (o = null), (i = null), n || s.apply(e, t);
      };
      !o && n && s.apply(e, t), a.clearTimeout(o), (o = a.setTimeout(i, r));
    }
    return (
      (e.cancel = () => {
        a.clearTimeout(o), (o = null);
      }),
      e
    );
  }
  var mt = Object.freeze({
    __proto__: null,
    UPDATE_REFRESH_INTERVAL: 30,
    bind_: m,
    throttle: ct,
    debounce: pt,
  });
  let gt;
  class ft {
    on(e, t) {
      var i = this.addEventListener;
      (this.addEventListener = () => {}),
        ot(this, e, t),
        (this.addEventListener = i);
    }
    off(e, t) {
      p(this, e, t);
    }
    one(e, t) {
      var i = this.addEventListener;
      (this.addEventListener = () => {}),
        dt(this, e, t),
        (this.addEventListener = i);
    }
    any(e, t) {
      var i = this.addEventListener;
      (this.addEventListener = () => {}),
        ht(this, e, t),
        (this.addEventListener = i);
    }
    trigger(e) {
      var t = e.type || e;
      (e = rt((e = "string" == typeof e ? { type: t } : e))),
        this.allowedEvents_[t] && this["on" + t] && this["on" + t](e),
        lt(this, e);
    }
    queueTrigger(e) {
      gt = gt || new Map();
      const t = e.type || e;
      let i = gt.get(this);
      i || ((i = new Map()), gt.set(this, i));
      var s = i.get(t),
        s =
          (i.delete(t),
          window.clearTimeout(s),
          window.setTimeout(() => {
            i.delete(t),
              0 === i.size && ((i = null), gt.delete(this)),
              this.trigger(e);
          }, 0));
      i.set(t, s);
    }
  }
  (ft.prototype.allowedEvents_ = {}),
    (ft.prototype.addEventListener = ft.prototype.on),
    (ft.prototype.removeEventListener = ft.prototype.off),
    (ft.prototype.dispatchEvent = ft.prototype.trigger);
  const yt = (e) =>
      "function" == typeof e.name
        ? e.name()
        : "string" == typeof e.name
        ? e.name
        : e.name_ ||
          (e.constructor && e.constructor.name ? e.constructor.name : typeof e),
    _t = (t) =>
      t instanceof ft ||
      (!!t.eventBusEl_ &&
        ["on", "one", "off", "trigger"].every(
          (e) => "function" == typeof t[e]
        )),
    vt = (e) =>
      ("string" == typeof e && /\S/.test(e)) ||
      (Array.isArray(e) && !!e.length),
    bt = (e, t, i) => {
      if (!e || (!e.nodeName && !_t(e)))
        throw new Error(
          `Invalid target for ${yt(
            t
          )}#${i}; must be a DOM node or evented object.`
        );
    },
    Tt = (e, t, i) => {
      if (!vt(e))
        throw new Error(
          `Invalid event type for ${yt(
            t
          )}#${i}; must be a non-empty string or array.`
        );
    },
    St = (e, t, i) => {
      if ("function" != typeof e)
        throw new Error(
          `Invalid listener for ${yt(t)}#${i}; must be a function.`
        );
    },
    wt = (e, t, i) => {
      var s = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
      let r, n, a;
      return (
        s
          ? ((r = e.eventBusEl_), 3 <= t.length && t.shift(), ([n, a] = t))
          : ([r, n, a] = t),
        bt(r, e, i),
        Tt(n, e, i),
        St(a, e, i),
        (a = m(e, a)),
        { isTargetingSelf: s, target: r, type: n, listener: a }
      );
    },
    Et = (e, t, i, s) => {
      bt(e, e, t), e.nodeName ? ut[t](e, i, s) : e[t](i, s);
    },
    Ct = {
      on(...e) {
        const {
          isTargetingSelf: t,
          target: i,
          type: s,
          listener: r,
        } = wt(this, e, "on");
        if ((Et(i, "on", s, r), !t)) {
          const n = () => this.off(i, s, r);
          n.guid = r.guid;
          e = () => this.off("dispose", n);
          (e.guid = r.guid),
            Et(this, "on", "dispose", n),
            Et(i, "on", "dispose", e);
        }
      },
      one(...e) {
        const {
          isTargetingSelf: t,
          target: i,
          type: s,
          listener: r,
        } = wt(this, e, "one");
        if (t) Et(i, "one", s, r);
        else {
          const n = (...e) => {
            this.off(i, s, n), r.apply(null, e);
          };
          (n.guid = r.guid), Et(i, "one", s, n);
        }
      },
      any(...e) {
        const {
          isTargetingSelf: t,
          target: i,
          type: s,
          listener: r,
        } = wt(this, e, "any");
        if (t) Et(i, "any", s, r);
        else {
          const n = (...e) => {
            this.off(i, s, n), r.apply(null, e);
          };
          (n.guid = r.guid), Et(i, "any", s, n);
        }
      },
      off(e, t, i) {
        !e || vt(e)
          ? p(this.eventBusEl_, e, t)
          : ((e = e),
            (t = t),
            bt(e, this, "off"),
            Tt(t, this, "off"),
            St(i, this, "off"),
            (i = m(this, i)),
            this.off("dispose", i),
            e.nodeName
              ? (p(e, t, i), p(e, "dispose", i))
              : _t(e) && (e.off(t, i), e.off("dispose", i)));
      },
      trigger(e, t) {
        bt(this.eventBusEl_, this, "trigger");
        var i = e && "string" != typeof e ? e.type : e;
        if (vt(i)) return lt(this.eventBusEl_, e, t);
        throw new Error(
          `Invalid event type for ${yt(this)}#trigger; ` +
            "must be a non-empty string or object with a type key that has a non-empty value."
        );
      },
    };
  function kt(e, t = {}) {
    t = t.eventBusKey;
    if (t) {
      if (!e[t].nodeName)
        throw new Error(`The eventBusKey "${t}" does not refer to an element.`);
      e.eventBusEl_ = e[t];
    } else e.eventBusEl_ = o("span", { className: "vjs-event-bus" });
    Object.assign(e, Ct),
      e.eventedCallbacks &&
        e.eventedCallbacks.forEach((e) => {
          e();
        }),
      e.on("dispose", () => {
        e.off(),
          [e, e.el_, e.eventBusEl_].forEach(function (e) {
            e && c.has(e) && c.delete(e);
          }),
          window.setTimeout(() => {
            e.eventBusEl_ = null;
          }, 0);
      });
  }
  const It = {
    state: {},
    setState(e) {
      "function" == typeof e && (e = e());
      let i;
      return (
        z(e, (e, t) => {
          this.state[t] !== e &&
            ((i = i || {})[t] = { from: this.state[t], to: e }),
            (this.state[t] = e);
        }),
        i && _t(this) && this.trigger({ changes: i, type: "statechanged" }),
        i
      );
    },
  };
  function xt(e, t) {
    Object.assign(e, It),
      (e.state = Object.assign({}, e.state, t)),
      "function" == typeof e.handleStateChanged &&
        _t(e) &&
        e.on("statechanged", e.handleStateChanged);
  }
  function At(e) {
    return "string" != typeof e ? e : e.replace(/./, (e) => e.toLowerCase());
  }
  function g(e) {
    return "string" != typeof e ? e : e.replace(/./, (e) => e.toUpperCase());
  }
  function Pt(e, t) {
    return g(e) === g(t);
  }
  var Ot = Object.freeze({
      __proto__: null,
      toLowerCase: At,
      toTitleCase: g,
      titleCaseEquals: Pt,
    }),
    t =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function Dt(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var r = Dt(function (e, t) {
    function i(e) {
      var t;
      return "number" ==
        typeof (e =
          e && "object" == typeof e && (t = e.which || e.keyCode || e.charCode)
            ? t
            : e)
        ? o[e]
        : ((t = String(e)),
          s[t.toLowerCase()] ||
            r[t.toLowerCase()] ||
            (1 === t.length ? t.charCodeAt(0) : void 0));
    }
    i.isEventKey = function (e, t) {
      if (e && "object" == typeof e) {
        e = e.which || e.keyCode || e.charCode;
        if (null != e)
          if ("string" == typeof t) {
            var i = s[t.toLowerCase()];
            if (i) return i === e;
            if ((i = r[t.toLowerCase()])) return i === e;
          } else if ("number" == typeof t) return t === e;
        return !1;
      }
    };
    for (
      var s =
          ((t = e.exports = i).code =
          t.codes =
            {
              backspace: 8,
              tab: 9,
              enter: 13,
              shift: 16,
              ctrl: 17,
              alt: 18,
              "pause/break": 19,
              "caps lock": 20,
              esc: 27,
              space: 32,
              "page up": 33,
              "page down": 34,
              end: 35,
              home: 36,
              left: 37,
              up: 38,
              right: 39,
              down: 40,
              insert: 45,
              delete: 46,
              command: 91,
              "left command": 91,
              "right command": 93,
              "numpad *": 106,
              "numpad +": 107,
              "numpad -": 109,
              "numpad .": 110,
              "numpad /": 111,
              "num lock": 144,
              "scroll lock": 145,
              "my computer": 182,
              "my calculator": 183,
              ";": 186,
              "=": 187,
              ",": 188,
              "-": 189,
              ".": 190,
              "/": 191,
              "`": 192,
              "[": 219,
              "\\": 220,
              "]": 221,
              "'": 222,
            }),
        r = (t.aliases = {
          windows: 91,
          "â‡§": 16,
          "âŒ¥": 18,
          âŒƒ: 17,
          "âŒ˜": 91,
          ctl: 17,
          control: 17,
          option: 18,
          pause: 19,
          break: 19,
          caps: 20,
          return: 13,
          escape: 27,
          spc: 32,
          spacebar: 32,
          pgup: 33,
          pgdn: 34,
          ins: 45,
          del: 46,
          cmd: 91,
        }),
        n = 97;
      n < 123;
      n++
    )
      s[String.fromCharCode(n)] = n - 32;
    for (var n = 48; n < 58; n++) s[n - 48] = n;
    for (n = 1; n < 13; n++) s["f" + n] = n + 111;
    for (n = 0; n < 10; n++) s["numpad " + n] = n + 96;
    var a,
      o = (t.names = t.title = {});
    for (n in s) o[s[n]] = n;
    for (a in r) s[a] = r[a];
  });
  r.code, r.codes, r.aliases, r.names, r.title;
  class f {
    constructor(e, t, i) {
      !e && this.play ? (this.player_ = e = this) : (this.player_ = e),
        (this.isDisposed_ = !1),
        (this.parentComponent_ = null),
        (this.options_ = h({}, this.options_)),
        (t = this.options_ = h(this.options_, t)),
        (this.id_ = t.id || (t.el && t.el.id)),
        this.id_ ||
          ((e = (e && e.id && e.id()) || "no_player"),
          (this.id_ = e + "_component_" + tt++)),
        (this.name_ = t.name || null),
        t.el
          ? (this.el_ = t.el)
          : !1 !== t.createEl && (this.el_ = this.createEl()),
        t.className &&
          this.el_ &&
          t.className.split(" ").forEach((e) => this.addClass(e)),
        !1 !== t.evented &&
          (kt(this, { eventBusKey: this.el_ ? "el_" : null }),
          (this.handleLanguagechange = this.handleLanguagechange.bind(this)),
          this.on(this.player_, "languagechange", this.handleLanguagechange)),
        xt(this, this.constructor.defaultState),
        (this.children_ = []),
        (this.childIndex_ = {}),
        (this.childNameIndex_ = {}),
        (this.setTimeoutIds_ = new Set()),
        (this.setIntervalIds_ = new Set()),
        (this.rafIds_ = new Set()),
        (this.namedRafs_ = new Map()),
        (this.clearingTimersOnDispose_ = !1) !== t.initChildren &&
          this.initChildren(),
        this.ready(i),
        !1 !== t.reportTouchActivity && this.enableTouchActivity();
    }
    dispose(e = {}) {
      if (!this.isDisposed_) {
        if (
          (this.readyQueue_ && (this.readyQueue_.length = 0),
          this.trigger({ type: "dispose", bubbles: !1 }),
          (this.isDisposed_ = !0),
          this.children_)
        )
          for (let e = this.children_.length - 1; 0 <= e; e--)
            this.children_[e].dispose && this.children_[e].dispose();
        (this.children_ = null),
          (this.childIndex_ = null),
          (this.childNameIndex_ = null),
          (this.parentComponent_ = null),
          this.el_ &&
            (this.el_.parentNode &&
              (e.restoreEl
                ? this.el_.parentNode.replaceChild(e.restoreEl, this.el_)
                : this.el_.parentNode.removeChild(this.el_)),
            (this.el_ = null)),
          (this.player_ = null);
      }
    }
    isDisposed() {
      return Boolean(this.isDisposed_);
    }
    player() {
      return this.player_;
    }
    options(e) {
      return e && (this.options_ = h(this.options_, e)), this.options_;
    }
    el() {
      return this.el_;
    }
    createEl(e, t, i) {
      return o(e, t, i);
    }
    localize(e, s, t = e) {
      var i = this.player_.language && this.player_.language(),
        r = this.player_.languages && this.player_.languages(),
        n = r && r[i],
        i = i && i.split("-")[0],
        r = r && r[i];
      let a = t;
      return (
        n && n[e] ? (a = n[e]) : r && r[e] && (a = r[e]),
        (a = s
          ? a.replace(/\{(\d+)\}/g, function (e, t) {
              t = s[t - 1];
              let i = "undefined" == typeof t ? e : t;
              return i;
            })
          : a)
      );
    }
    handleLanguagechange() {}
    contentEl() {
      return this.contentEl_ || this.el_;
    }
    id() {
      return this.id_;
    }
    name() {
      return this.name_;
    }
    children() {
      return this.children_;
    }
    getChildById(e) {
      return this.childIndex_[e];
    }
    getChild(e) {
      if (e) return this.childNameIndex_[e];
    }
    getDescendant(...t) {
      t = t.reduce((e, t) => e.concat(t), []);
      let i = this;
      for (let e = 0; e < t.length; e++)
        if (!(i = i.getChild(t[e])) || !i.getChild) return;
      return i;
    }
    addChild(e, t = {}, i = this.children_.length) {
      let s, r;
      if ("string" == typeof e) {
        r = g(e);
        var n = t.componentClass || r,
          a = ((t.name = r), f.getComponent(n));
        if (!a) throw new Error(`Component ${n} does not exist`);
        if ("function" != typeof a) return null;
        s = new a(this.player_ || this, t);
      } else s = e;
      if (
        (s.parentComponent_ && s.parentComponent_.removeChild(s),
        this.children_.splice(i, 0, s),
        (s.parentComponent_ = this),
        "function" == typeof s.id && (this.childIndex_[s.id()] = s),
        (r = r || (s.name && g(s.name()))) &&
          ((this.childNameIndex_[r] = s), (this.childNameIndex_[At(r)] = s)),
        "function" == typeof s.el && s.el())
      ) {
        let e = null;
        this.children_[i + 1] &&
          (this.children_[i + 1].el_
            ? (e = this.children_[i + 1].el_)
            : ve(this.children_[i + 1]) && (e = this.children_[i + 1])),
          this.contentEl().insertBefore(s.el(), e);
      }
      return s;
    }
    removeChild(i) {
      if ((i = "string" == typeof i ? this.getChild(i) : i) && this.children_) {
        let t = !1;
        for (let e = this.children_.length - 1; 0 <= e; e--)
          if (this.children_[e] === i) {
            (t = !0), this.children_.splice(e, 1);
            break;
          }
        var e;
        t &&
          ((i.parentComponent_ = null),
          (this.childIndex_[i.id()] = null),
          (this.childNameIndex_[g(i.name())] = null),
          (this.childNameIndex_[At(i.name())] = null),
          (e = i.el())) &&
          e.parentNode === this.contentEl() &&
          this.contentEl().removeChild(i.el());
      }
    }
    initChildren() {
      const s = this.options_.children;
      if (s) {
        const r = this.options_;
        let e;
        const t = f.getComponent("Tech");
        (e = Array.isArray(s) ? s : Object.keys(s))
          .concat(
            Object.keys(this.options_).filter(function (t) {
              return !e.some(function (e) {
                return "string" == typeof e ? t === e : t === e.name;
              });
            })
          )
          .map((e) => {
            let t, i;
            return (
              (i =
                "string" == typeof e
                  ? ((t = e), s[t] || this.options_[t] || {})
                  : ((t = e.name), e)),
              { name: t, opts: i }
            );
          })
          .filter((e) => {
            e = f.getComponent(e.opts.componentClass || g(e.name));
            return e && !t.isTech(e);
          })
          .forEach((e) => {
            var t = e.name;
            let i = e.opts;
            !1 !== (i = void 0 !== r[t] ? r[t] : i) &&
              (((i = !0 === i ? {} : i).playerOptions =
                this.options_.playerOptions),
              (e = this.addChild(t, i))) &&
              (this[t] = e);
          });
      }
    }
    buildCSSClass() {
      return "";
    }
    ready(e, t = !1) {
      e &&
        (this.isReady_
          ? t
            ? e.call(this)
            : this.setTimeout(e, 1)
          : ((this.readyQueue_ = this.readyQueue_ || []),
            this.readyQueue_.push(e)));
    }
    triggerReady() {
      (this.isReady_ = !0),
        this.setTimeout(function () {
          var e = this.readyQueue_;
          (this.readyQueue_ = []),
            e &&
              0 < e.length &&
              e.forEach(function (e) {
                e.call(this);
              }, this),
            this.trigger("ready");
        }, 1);
    }
    $(e, t) {
      return $e(e, t || this.contentEl());
    }
    $$(e, t) {
      return We(e, t || this.contentEl());
    }
    hasClass(e) {
      return Ee(this.el_, e);
    }
    addClass(...e) {
      Ce(this.el_, ...e);
    }
    removeClass(...e) {
      ke(this.el_, ...e);
    }
    toggleClass(e, t) {
      Ie(this.el_, e, t);
    }
    show() {
      this.removeClass("vjs-hidden");
    }
    hide() {
      this.addClass("vjs-hidden");
    }
    lockShowing() {
      this.addClass("vjs-lock-showing");
    }
    unlockShowing() {
      this.removeClass("vjs-lock-showing");
    }
    getAttribute(e) {
      return Pe(this.el_, e);
    }
    setAttribute(e, t) {
      Oe(this.el_, e, t);
    }
    removeAttribute(e) {
      De(this.el_, e);
    }
    width(e, t) {
      return this.dimension("width", e, t);
    }
    height(e, t) {
      return this.dimension("height", e, t);
    }
    dimensions(e, t) {
      this.width(e, !0), this.height(t);
    }
    dimension(e, t, i) {
      var s, r;
      if (void 0 === t)
        return this.el_
          ? -1 !== (r = (s = this.el_.style[e]).indexOf("px"))
            ? parseInt(s.slice(0, r), 10)
            : parseInt(this.el_["offset" + g(e)], 10)
          : 0;
      -1 !== ("" + (t = null !== t && t == t ? t : 0)).indexOf("%") ||
      -1 !== ("" + t).indexOf("px")
        ? (this.el_.style[e] = t)
        : (this.el_.style[e] = "auto" === t ? "" : t + "px"),
        i || this.trigger("componentresize");
    }
    currentDimension(e) {
      let t = 0;
      if ("width" !== e && "height" !== e)
        throw new Error("currentDimension only accepts width or height value");
      return (
        (t = Ge(this.el_, e)),
        (0 !== (t = parseFloat(t)) && !isNaN(t)) ||
          ((e = "offset" + g(e)), (t = this.el_[e])),
        t
      );
    }
    currentDimensions() {
      return {
        width: this.currentDimension("width"),
        height: this.currentDimension("height"),
      };
    }
    currentWidth() {
      return this.currentDimension("width");
    }
    currentHeight() {
      return this.currentDimension("height");
    }
    focus() {
      this.el_.focus();
    }
    blur() {
      this.el_.blur();
    }
    handleKeyDown(e) {
      this.player_ &&
        (r.isEventKey(e, "Tab") || e.stopPropagation(),
        this.player_.handleKeyDown(e));
    }
    handleKeyPress(e) {
      this.handleKeyDown(e);
    }
    emitTapEvents() {
      let t = 0,
        i = null;
      let s;
      this.on("touchstart", function (e) {
        1 === e.touches.length &&
          ((i = { pageX: e.touches[0].pageX, pageY: e.touches[0].pageY }),
          (t = window.performance.now()),
          (s = !0));
      }),
        this.on("touchmove", function (e) {
          var t;
          (1 < e.touches.length ||
            (i &&
              ((t = e.touches[0].pageX - i.pageX),
              (e = e.touches[0].pageY - i.pageY),
              10 < Math.sqrt(t * t + e * e)))) &&
            (s = !1);
        });
      function e() {
        s = !1;
      }
      this.on("touchleave", e),
        this.on("touchcancel", e),
        this.on("touchend", function (e) {
          !(i = null) === s &&
            window.performance.now() - t < 200 &&
            (e.preventDefault(), this.trigger("tap"));
        });
    }
    enableTouchActivity() {
      if (this.player() && this.player().reportUserActivity) {
        const i = m(this.player(), this.player().reportUserActivity);
        let t;
        this.on("touchstart", function () {
          i(), this.clearInterval(t), (t = this.setInterval(i, 250));
        });
        var e = function (e) {
          i(), this.clearInterval(t);
        };
        this.on("touchmove", i),
          this.on("touchend", e),
          this.on("touchcancel", e);
      }
    }
    setTimeout(e, t) {
      var i;
      return (
        (e = m(this, e)),
        this.clearTimersOnDispose_(),
        (i = window.setTimeout(() => {
          this.setTimeoutIds_.has(i) && this.setTimeoutIds_.delete(i), e();
        }, t)),
        this.setTimeoutIds_.add(i),
        i
      );
    }
    clearTimeout(e) {
      return (
        this.setTimeoutIds_.has(e) &&
          (this.setTimeoutIds_.delete(e), window.clearTimeout(e)),
        e
      );
    }
    setInterval(e, t) {
      (e = m(this, e)), this.clearTimersOnDispose_();
      e = window.setInterval(e, t);
      return this.setIntervalIds_.add(e), e;
    }
    clearInterval(e) {
      return (
        this.setIntervalIds_.has(e) &&
          (this.setIntervalIds_.delete(e), window.clearInterval(e)),
        e
      );
    }
    requestAnimationFrame(e) {
      var t;
      return (
        this.clearTimersOnDispose_(),
        (e = m(this, e)),
        (t = window.requestAnimationFrame(() => {
          this.rafIds_.has(t) && this.rafIds_.delete(t), e();
        })),
        this.rafIds_.add(t),
        t
      );
    }
    requestNamedAnimationFrame(e, t) {
      var i;
      if (!this.namedRafs_.has(e))
        return (
          this.clearTimersOnDispose_(),
          (t = m(this, t)),
          (i = this.requestAnimationFrame(() => {
            t(), this.namedRafs_.has(e) && this.namedRafs_.delete(e);
          })),
          this.namedRafs_.set(e, i),
          e
        );
    }
    cancelNamedAnimationFrame(e) {
      this.namedRafs_.has(e) &&
        (this.cancelAnimationFrame(this.namedRafs_.get(e)),
        this.namedRafs_.delete(e));
    }
    cancelAnimationFrame(e) {
      return (
        this.rafIds_.has(e) &&
          (this.rafIds_.delete(e), window.cancelAnimationFrame(e)),
        e
      );
    }
    clearTimersOnDispose_() {
      this.clearingTimersOnDispose_ ||
        ((this.clearingTimersOnDispose_ = !0),
        this.one("dispose", () => {
          [
            ["namedRafs_", "cancelNamedAnimationFrame"],
            ["rafIds_", "cancelAnimationFrame"],
            ["setTimeoutIds_", "clearTimeout"],
            ["setIntervalIds_", "clearInterval"],
          ].forEach(([e, i]) => {
            this[e].forEach((e, t) => this[i](t));
          }),
            (this.clearingTimersOnDispose_ = !1);
        }));
    }
    static registerComponent(t, e) {
      if ("string" != typeof t || !t)
        throw new Error(
          `Illegal component name, "${t}"; must be a non-empty string.`
        );
      var i = f.getComponent("Tech"),
        i = i && i.isTech(e),
        s = f === e || f.prototype.isPrototypeOf(e.prototype);
      if (i || !s) {
        let e;
        throw (
          ((e = i
            ? "techs must be registered using Tech.registerTech()"
            : "must be a Component subclass"),
          new Error(`Illegal component, "${t}"; ${e}.`))
        );
      }
      (t = g(t)), f.components_ || (f.components_ = {});
      s = f.getComponent("Player");
      if ("Player" === t && s && s.players) {
        const r = s.players;
        i = Object.keys(r);
        if (r && 0 < i.length && i.map((e) => r[e]).every(Boolean))
          throw new Error(
            "Can not register Player component after player has been created."
          );
      }
      return (f.components_[t] = e), (f.components_[At(t)] = e);
    }
    static getComponent(e) {
      if (e && f.components_) return f.components_[e];
    }
  }
  function Lt(e, t, i, s) {
    var r = s,
      n = i.length - 1;
    if ("number" != typeof r || r < 0 || n < r)
      throw new Error(
        `Failed to execute '${e}' on 'TimeRanges': The index provided (${r}) is non-numeric or out of bounds (0-${n}).`
      );
    return i[s][t];
  }
  function Nt(e) {
    let t;
    return (
      (t =
        void 0 === e || 0 === e.length
          ? {
              length: 0,
              start() {
                throw new Error("This TimeRanges object is empty");
              },
              end() {
                throw new Error("This TimeRanges object is empty");
              },
            }
          : {
              length: e.length,
              start: Lt.bind(null, "start", 0, e),
              end: Lt.bind(null, "end", 1, e),
            }),
      window.Symbol &&
        window.Symbol.iterator &&
        (t[window.Symbol.iterator] = () => (e || []).values()),
      t
    );
  }
  function Mt(e, t) {
    return Array.isArray(e)
      ? Nt(e)
      : void 0 === e || void 0 === t
      ? Nt()
      : Nt([[e, t]]);
  }
  f.registerComponent("Component", f);
  function Rt(e, t) {
    e = e < 0 ? 0 : e;
    let i = Math.floor(e % 60),
      s = Math.floor((e / 60) % 60),
      r = Math.floor(e / 3600);
    var n = Math.floor((t / 60) % 60),
      t = Math.floor(t / 3600);
    return (
      (r =
        0 < (r = !isNaN(e) && e !== 1 / 0 ? r : (s = i = "-")) || 0 < t
          ? r + ":"
          : ""),
      (s = ((r || 10 <= n) && s < 10 ? "0" + s : s) + ":"),
      (i = i < 10 ? "0" + i : i),
      r + s + i
    );
  }
  let Ut = Rt;
  function Bt(e) {
    Ut = e;
  }
  function Ft() {
    Ut = Rt;
  }
  function jt(e, t = e) {
    return Ut(e, t);
  }
  var Ht = Object.freeze({
    __proto__: null,
    createTimeRanges: Mt,
    createTimeRange: Mt,
    setFormatTime: Bt,
    resetFormatTime: Ft,
    formatTime: jt,
  });
  function qt(t, i) {
    let s = 0;
    var r;
    let n;
    if (!i) return 0;
    (t && t.length) || (t = Mt(0, 0));
    for (let e = 0; e < t.length; e++)
      (r = t.start(e)), (n = t.end(e)) > i && (n = i), (s += n - r);
    return s / i;
  }
  function i(e) {
    if (e instanceof i) return e;
    "number" == typeof e
      ? (this.code = e)
      : "string" == typeof e
      ? (this.message = e)
      : K(e) &&
        ("number" == typeof e.code && (this.code = e.code),
        Object.assign(this, e)),
      this.message || (this.message = i.defaultMessages[this.code] || "");
  }
  (i.prototype.code = 0),
    (i.prototype.message = ""),
    (i.prototype.status = null),
    (i.errorTypes = [
      "MEDIA_ERR_CUSTOM",
      "MEDIA_ERR_ABORTED",
      "MEDIA_ERR_NETWORK",
      "MEDIA_ERR_DECODE",
      "MEDIA_ERR_SRC_NOT_SUPPORTED",
      "MEDIA_ERR_ENCRYPTED",
    ]),
    (i.defaultMessages = {
      1: "You aborted the media playback",
      2: "A network error caused the media download to fail part-way.",
      3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
      4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
      5: "The media is encrypted and we do not have the keys to decrypt it.",
    });
  for (let e = 0; e < i.errorTypes.length; e++)
    (i[i.errorTypes[e]] = e), (i.prototype[i.errorTypes[e]] = e);
  var Vt = function (e, t) {
    var i,
      s = null;
    try {
      i = JSON.parse(e, t);
    } catch (e) {
      s = e;
    }
    return [s, i];
  };
  function $t(e) {
    return null != e && "function" == typeof e.then;
  }
  function Wt(e) {
    $t(e) && e.then(null, (e) => {});
  }
  function Gt(s) {
    return [
      "kind",
      "label",
      "language",
      "id",
      "inBandMetadataTrackDispatchType",
      "mode",
      "src",
    ].reduce((e, t, i) => (s[t] && (e[t] = s[t]), e), {
      cues:
        s.cues &&
        Array.prototype.map.call(s.cues, function (e) {
          return {
            startTime: e.startTime,
            endTime: e.endTime,
            text: e.text,
            id: e.id,
          };
        }),
    });
  }
  var zt = function (e) {
      var t = e.$$("track");
      const i = Array.prototype.map.call(t, (e) => e.track);
      return Array.prototype.map
        .call(t, function (e) {
          var t = Gt(e.track);
          return e.src && (t.src = e.src), t;
        })
        .concat(
          Array.prototype.filter
            .call(e.textTracks(), function (e) {
              return -1 === i.indexOf(e);
            })
            .map(Gt)
        );
    },
    Xt = function (e, i) {
      return (
        e.forEach(function (e) {
          const t = i.addRemoteTextTrack(e).track;
          !e.src && e.cues && e.cues.forEach((e) => t.addCue(e));
        }),
        i.textTracks()
      );
    };
  Gt;
  const Kt = "vjs-modal-dialog";
  class Yt extends f {
    constructor(e, t) {
      super(e, t),
        (this.handleKeyDown_ = (e) => this.handleKeyDown(e)),
        (this.close_ = (e) => this.close(e)),
        (this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = !1),
        this.closeable(!this.options_.uncloseable),
        this.content(this.options_.content),
        (this.contentEl_ = o(
          "div",
          { className: Kt + "-content" },
          { role: "document" }
        )),
        (this.descEl_ = o("p", {
          className: Kt + "-description vjs-control-text",
          id: this.el().getAttribute("aria-describedby"),
        })),
        Se(this.descEl_, this.description()),
        this.el_.appendChild(this.descEl_),
        this.el_.appendChild(this.contentEl_);
    }
    createEl() {
      return super.createEl(
        "div",
        { className: this.buildCSSClass(), tabIndex: -1 },
        {
          "aria-describedby": this.id() + "_description",
          "aria-hidden": "true",
          "aria-label": this.label(),
          role: "dialog",
        }
      );
    }
    dispose() {
      (this.contentEl_ = null),
        (this.descEl_ = null),
        (this.previouslyActiveEl_ = null),
        super.dispose();
    }
    buildCSSClass() {
      return Kt + " vjs-hidden " + super.buildCSSClass();
    }
    label() {
      return this.localize(this.options_.label || "Modal Window");
    }
    description() {
      let e =
        this.options_.description || this.localize("This is a modal window.");
      return (
        this.closeable() &&
          (e +=
            " " +
            this.localize(
              "This modal can be closed by pressing the Escape key or activating the close button."
            )),
        e
      );
    }
    open() {
      var e;
      this.opened_ ||
        ((e = this.player()),
        this.trigger("beforemodalopen"),
        (this.opened_ = !0),
        (!this.options_.fillAlways &&
          (this.hasBeenOpened_ || this.hasBeenFilled_)) ||
          this.fill(),
        (this.wasPlaying_ = !e.paused()),
        this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(),
        this.on("keydown", this.handleKeyDown_),
        (this.hadControls_ = e.controls()),
        e.controls(!1),
        this.show(),
        this.conditionalFocus_(),
        this.el().setAttribute("aria-hidden", "false"),
        this.trigger("modalopen"),
        (this.hasBeenOpened_ = !0));
    }
    opened(e) {
      return (
        "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_
      );
    }
    close() {
      var e;
      this.opened_ &&
        ((e = this.player()),
        this.trigger("beforemodalclose"),
        (this.opened_ = !1),
        this.wasPlaying_ && this.options_.pauseOnOpen && e.play(),
        this.off("keydown", this.handleKeyDown_),
        this.hadControls_ && e.controls(!0),
        this.hide(),
        this.el().setAttribute("aria-hidden", "true"),
        this.trigger("modalclose"),
        this.conditionalBlur_(),
        this.options_.temporary) &&
        this.dispose();
    }
    closeable(t) {
      if ("boolean" == typeof t) {
        var i,
          t = (this.closeable_ = !!t);
        let e = this.getChild("closeButton");
        t &&
          !e &&
          ((i = this.contentEl_),
          (this.contentEl_ = this.el_),
          (e = this.addChild("closeButton", {
            controlText: "Close Modal Dialog",
          })),
          (this.contentEl_ = i),
          this.on(e, "close", this.close_)),
          !t &&
            e &&
            (this.off(e, "close", this.close_),
            this.removeChild(e),
            e.dispose());
      }
      return this.closeable_;
    }
    fill() {
      this.fillWith(this.content());
    }
    fillWith(e) {
      var t = this.contentEl(),
        i = t.parentNode,
        s = t.nextSibling,
        e =
          (this.trigger("beforemodalfill"),
          (this.hasBeenFilled_ = !0),
          i.removeChild(t),
          this.empty(),
          qe(t, e),
          this.trigger("modalfill"),
          s ? i.insertBefore(t, s) : i.appendChild(t),
          this.getChild("closeButton"));
      e && i.appendChild(e.el_);
    }
    empty() {
      this.trigger("beforemodalempty"),
        Fe(this.contentEl()),
        this.trigger("modalempty");
    }
    content(e) {
      return "undefined" != typeof e && (this.content_ = e), this.content_;
    }
    conditionalFocus_() {
      var e = document.activeElement,
        t = this.player_.el_;
      (this.previouslyActiveEl_ = null),
        (!t.contains(e) && t !== e) ||
          ((this.previouslyActiveEl_ = e), this.focus());
    }
    conditionalBlur_() {
      this.previouslyActiveEl_ &&
        (this.previouslyActiveEl_.focus(), (this.previouslyActiveEl_ = null));
    }
    handleKeyDown(e) {
      if ((e.stopPropagation(), r.isEventKey(e, "Escape") && this.closeable()))
        e.preventDefault(), this.close();
      else if (r.isEventKey(e, "Tab")) {
        var i = this.focusableEls_(),
          s = this.el_.querySelector(":focus");
        let t;
        for (let e = 0; e < i.length; e++)
          if (s === i[e]) {
            t = e;
            break;
          }
        document.activeElement === this.el_ && (t = 0),
          e.shiftKey && 0 === t
            ? (i[i.length - 1].focus(), e.preventDefault())
            : e.shiftKey ||
              t !== i.length - 1 ||
              (i[0].focus(), e.preventDefault());
      }
    }
    focusableEls_() {
      var e = this.el_.querySelectorAll("*");
      return Array.prototype.filter.call(
        e,
        (e) =>
          ((e instanceof window.HTMLAnchorElement ||
            e instanceof window.HTMLAreaElement) &&
            e.hasAttribute("href")) ||
          ((e instanceof window.HTMLInputElement ||
            e instanceof window.HTMLSelectElement ||
            e instanceof window.HTMLTextAreaElement ||
            e instanceof window.HTMLButtonElement) &&
            !e.hasAttribute("disabled")) ||
          e instanceof window.HTMLIFrameElement ||
          e instanceof window.HTMLObjectElement ||
          e instanceof window.HTMLEmbedElement ||
          (e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex")) ||
          e.hasAttribute("contenteditable")
      );
    }
  }
  (Yt.prototype.options_ = { pauseOnOpen: !0, temporary: !0 }),
    f.registerComponent("ModalDialog", Yt);
  class Qt extends ft {
    constructor(t = []) {
      super(),
        (this.tracks_ = []),
        Object.defineProperty(this, "length", {
          get() {
            return this.tracks_.length;
          },
        });
      for (let e = 0; e < t.length; e++) this.addTrack(t[e]);
    }
    addTrack(e) {
      const t = this.tracks_.length;
      "" + t in this ||
        Object.defineProperty(this, t, {
          get() {
            return this.tracks_[t];
          },
        }),
        -1 === this.tracks_.indexOf(e) &&
          (this.tracks_.push(e),
          this.trigger({ track: e, type: "addtrack", target: this })),
        (e.labelchange_ = () => {
          this.trigger({ track: e, type: "labelchange", target: this });
        }),
        _t(e) && e.addEventListener("labelchange", e.labelchange_);
    }
    removeTrack(i) {
      let s;
      for (let e = 0, t = this.length; e < t; e++)
        if (this[e] === i) {
          (s = this[e]).off && s.off(), this.tracks_.splice(e, 1);
          break;
        }
      s && this.trigger({ track: s, type: "removetrack", target: this });
    }
    getTrackById(i) {
      let s = null;
      for (let e = 0, t = this.length; e < t; e++) {
        var r = this[e];
        if (r.id === i) {
          s = r;
          break;
        }
      }
      return s;
    }
  }
  for (const Pu in (Qt.prototype.allowedEvents_ = {
    change: "change",
    addtrack: "addtrack",
    removetrack: "removetrack",
    labelchange: "labelchange",
  }))
    Qt.prototype["on" + Pu] = null;
  function Jt(t, i) {
    for (let e = 0; e < t.length; e++)
      Object.keys(t[e]).length && i.id !== t[e].id && (t[e].enabled = !1);
  }
  function Zt(t, i) {
    for (let e = 0; e < t.length; e++)
      Object.keys(t[e]).length && i.id !== t[e].id && (t[e].selected = !1);
  }
  class ei extends Qt {
    addTrack(e) {
      super.addTrack(e),
        this.queueChange_ ||
          (this.queueChange_ = () => this.queueTrigger("change")),
        this.triggerSelectedlanguagechange ||
          (this.triggerSelectedlanguagechange_ = () =>
            this.trigger("selectedlanguagechange")),
        e.addEventListener("modechange", this.queueChange_);
      -1 === ["metadata", "chapters"].indexOf(e.kind) &&
        e.addEventListener("modechange", this.triggerSelectedlanguagechange_);
    }
    removeTrack(e) {
      super.removeTrack(e),
        e.removeEventListener &&
          (this.queueChange_ &&
            e.removeEventListener("modechange", this.queueChange_),
          this.selectedlanguagechange_) &&
          e.removeEventListener(
            "modechange",
            this.triggerSelectedlanguagechange_
          );
    }
  }
  class ti {
    constructor(e) {
      ti.prototype.setCues_.call(this, e),
        Object.defineProperty(this, "length", {
          get() {
            return this.length_;
          },
        });
    }
    setCues_(e) {
      var t = this.length || 0;
      let i = 0;
      function s(e) {
        "" + e in this ||
          Object.defineProperty(this, "" + e, {
            get() {
              return this.cues_[e];
            },
          });
      }
      var r = e.length;
      (this.cues_ = e), (this.length_ = e.length);
      if (t < r) for (i = t; i < r; i++) s.call(this, i);
    }
    getCueById(i) {
      let s = null;
      for (let e = 0, t = this.length; e < t; e++) {
        var r = this[e];
        if (r.id === i) {
          s = r;
          break;
        }
      }
      return s;
    }
  }
  const ii = {
      alternative: "alternative",
      captions: "captions",
      main: "main",
      sign: "sign",
      subtitles: "subtitles",
      commentary: "commentary",
    },
    si = {
      alternative: "alternative",
      descriptions: "descriptions",
      main: "main",
      "main-desc": "main-desc",
      translation: "translation",
      commentary: "commentary",
    },
    ri = {
      subtitles: "subtitles",
      captions: "captions",
      descriptions: "descriptions",
      chapters: "chapters",
      metadata: "metadata",
    },
    ni = { disabled: "disabled", hidden: "hidden", showing: "showing" };
  class ai extends ft {
    constructor(e = {}) {
      super();
      const t = {
        id: e.id || "vjs_track_" + tt++,
        kind: e.kind || "",
        language: e.language || "",
      };
      let i = e.label || "";
      for (const s in t)
        Object.defineProperty(this, s, {
          get() {
            return t[s];
          },
          set() {},
        });
      Object.defineProperty(this, "label", {
        get() {
          return i;
        },
        set(e) {
          e !== i && ((i = e), this.trigger("labelchange"));
        },
      });
    }
  }
  function oi(e) {
    var t = [
        "protocol",
        "hostname",
        "port",
        "pathname",
        "search",
        "hash",
        "host",
      ],
      i = document.createElement("a"),
      s = ((i.href = e), {});
    for (let e = 0; e < t.length; e++) s[t[e]] = i[t[e]];
    return (
      "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")),
      "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")),
      s.protocol || (s.protocol = window.location.protocol),
      s.host || (s.host = window.location.host),
      s
    );
  }
  function li(e) {
    var t;
    return (
      e.match(/^https?:\/\//) ||
        (((t = document.createElement("a")).href = e), (e = t.href)),
      e
    );
  }
  function di(e, t = window.location) {
    return (
      (":" === (e = oi(e)).protocol ? t : e).protocol + e.host !==
      t.protocol + t.host
    );
  }
  const hi = function (e) {
    if ("string" == typeof e) {
      e =
        /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(
          e
        );
      if (e) return e.pop().toLowerCase();
    }
    return "";
  };
  var ui = Object.freeze({
      __proto__: null,
      parseUrl: oi,
      getAbsoluteURL: li,
      getFileExtension: hi,
      isCrossOrigin: di,
    }),
    ci =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof t
        ? t
        : "undefined" != typeof self
        ? self
        : {},
    pi = ci,
    mi = Dt(function (e) {
      function t() {
        return (
          (e.exports = t =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i,
                      s = arguments[t];
                    for (i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t.apply(this, arguments)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    }),
    gi =
      (ci = mi) &&
      ci.__esModule &&
      Object.prototype.hasOwnProperty.call(ci, "default")
        ? ci.default
        : ci,
    fi = function (e) {
      var t;
      return (
        !!e &&
        ("[object Function]" === (t = yi.call(e)) ||
          ("function" == typeof e && "[object RegExp]" !== t) ||
          ("undefined" != typeof window &&
            (e === window.setTimeout ||
              e === window.alert ||
              e === window.confirm ||
              e === window.prompt)))
      );
    },
    yi = Object.prototype.toString;
  Ei.httpHandler = function (s, r) {
    return (
      void 0 === r && (r = !1),
      function (e, t, i) {
        if (e) s(e);
        else if (400 <= t.statusCode && t.statusCode <= 599) {
          e = i;
          if (r)
            if (pi.TextDecoder) {
              t = (function (e) {
                void 0 === e && (e = "");
                return e
                  .toLowerCase()
                  .split(";")
                  .reduce(function (e, t) {
                    var t = t.split("="),
                      i = t[0],
                      t = t[1];
                    return "charset" === i.trim() ? t.trim() : e;
                  }, "utf-8");
              })(t.headers && t.headers["content-type"]);
              try {
                e = new TextDecoder(t).decode(i);
              } catch (e) {}
            } else e = String.fromCharCode.apply(null, new Uint8Array(i));
          s({ cause: e });
        } else s(null, i);
      }
    );
  };
  for (
    var _i = function (e) {
        var s = {};
        return (
          e &&
            e
              .trim()
              .split("\n")
              .forEach(function (e) {
                var t = e.indexOf(":"),
                  i = e.slice(0, t).trim().toLowerCase(),
                  e = e.slice(t + 1).trim();
                "undefined" == typeof s[i]
                  ? (s[i] = e)
                  : Array.isArray(s[i])
                  ? s[i].push(e)
                  : (s[i] = [s[i], e]);
              }),
          s
        );
      },
      vi = Ei,
      ci = Ei,
      bi =
        ((Ei.XMLHttpRequest = pi.XMLHttpRequest || function () {}),
        (Ei.XDomainRequest =
          ("withCredentials" in new Ei.XMLHttpRequest())
            ? Ei.XMLHttpRequest
            : pi.XDomainRequest),
        ["get", "put", "post", "patch", "head", "delete"]),
      Ti = function (s) {
        Ei["delete" === s ? "del" : s] = function (e, t, i) {
          return ((t = wi(e, t, i)).method = s.toUpperCase()), Ci(t);
        };
      },
      Si = 0;
    Si < bi.length;
    Si++
  )
    Ti(bi[Si]);
  function wi(e, t, i) {
    var s = e;
    return (
      fi(t)
        ? ((i = t), "string" == typeof e && (s = { uri: e }))
        : (s = mi({}, t, { uri: e })),
      (s.callback = i),
      s
    );
  }
  function Ei(e, t, i) {
    return Ci((t = wi(e, t, i)));
  }
  function Ci(s) {
    if ("undefined" == typeof s.callback)
      throw new Error("callback argument missing");
    var r = !1,
      n = function (e, t, i) {
        r || ((r = !0), s.callback(e, t, i));
      };
    function a() {
      var e = void 0,
        e =
          d.response ||
          d.responseText ||
          (function (e) {
            try {
              if ("document" === e.responseType) return e.responseXML;
              var t =
                e.responseXML &&
                "parsererror" === e.responseXML.documentElement.nodeName;
              if ("" === e.responseType && !t) return e.responseXML;
            } catch (e) {}
            return null;
          })(d);
      if (g)
        try {
          e = JSON.parse(e);
        } catch (e) {}
      return e;
    }
    function t(e) {
      return (
        clearTimeout(l),
        ((e =
          e instanceof Error
            ? e
            : new Error(
                "" + (e || "Unknown XMLHttpRequest Error")
              )).statusCode = 0),
        n(e, f)
      );
    }
    function e() {
      var e, t, i;
      if (!o)
        return (
          clearTimeout(l),
          (e =
            s.useXDR && void 0 === d.status
              ? 200
              : 1223 === d.status
              ? 204
              : d.status),
          (t = f),
          (i = null),
          0 !== e
            ? ((t = {
                body: a(),
                statusCode: e,
                method: u,
                headers: {},
                url: h,
                rawRequest: d,
              }),
              d.getAllResponseHeaders &&
                (t.headers = _i(d.getAllResponseHeaders())))
            : (i = new Error("Internal XMLHttpRequest Error")),
          n(i, t, t.body)
        );
    }
    var i,
      o,
      l,
      d = s.xhr || null,
      h = ((d =
        d ||
        new (s.cors || s.useXDR
          ? Ei.XDomainRequest
          : Ei.XMLHttpRequest)()).url = s.uri || s.url),
      u = (d.method = s.method || "GET"),
      c = s.body || s.data,
      p = (d.headers = s.headers || {}),
      m = !!s.sync,
      g = !1,
      f = {
        body: void 0,
        headers: {},
        statusCode: 0,
        method: u,
        url: h,
        rawRequest: d,
      };
    if (
      ("json" in s &&
        !1 !== s.json &&
        ((g = !0),
        p.accept || p.Accept || (p.Accept = "application/json"),
        "GET" !== u) &&
        "HEAD" !== u &&
        (p["content-type"] ||
          p["Content-Type"] ||
          (p["Content-Type"] = "application/json"),
        (c = JSON.stringify(!0 === s.json ? c : s.json))),
      (d.onreadystatechange = function () {
        4 === d.readyState && setTimeout(e, 0);
      }),
      (d.onload = e),
      (d.onerror = t),
      (d.onprogress = function () {}),
      (d.onabort = function () {
        o = !0;
      }),
      (d.ontimeout = t),
      d.open(u, h, !m, s.username, s.password),
      m || (d.withCredentials = !!s.withCredentials),
      !m &&
        0 < s.timeout &&
        (l = setTimeout(function () {
          var e;
          o ||
            ((o = !0),
            d.abort("timeout"),
            ((e = new Error("XMLHttpRequest timeout")).code = "ETIMEDOUT"),
            t(e));
        }, s.timeout)),
      d.setRequestHeader)
    )
      for (i in p) p.hasOwnProperty(i) && d.setRequestHeader(i, p[i]);
    else if (
      s.headers &&
      !(function (e) {
        for (var t in e) if (e.hasOwnProperty(t)) return;
        return 1;
      })(s.headers)
    )
      throw new Error("Headers cannot be set on an XDomainRequest object");
    return (
      "responseType" in s && (d.responseType = s.responseType),
      "beforeSend" in s && "function" == typeof s.beforeSend && s.beforeSend(d),
      d.send(c || null),
      d
    );
  }
  vi.default = ci;
  function ki(e, t) {
    var i = new window.WebVTT.Parser(
      window,
      window.vttjs,
      window.WebVTT.StringDecoder()
    );
    const s = [];
    (i.oncue = function (e) {
      t.addCue(e);
    }),
      (i.onparsingerror = function (e) {
        s.push(e);
      }),
      (i.onflush = function () {
        t.trigger({ type: "loadeddata", target: t });
      }),
      i.parse(e),
      0 < s.length &&
        (window.console &&
          window.console.groupCollapsed &&
          window.console.groupCollapsed(
            "Text Track parsing errors for " + t.src
          ),
        s.forEach((e) => d.error(e)),
        window.console) &&
        window.console.groupEnd &&
        window.console.groupEnd(),
      i.flush();
  }
  function Ii(e, s) {
    var t = { uri: e };
    (e = di(e)) && (t.cors = e),
      (e = "use-credentials" === s.tech_.crossOrigin()) &&
        (t.withCredentials = e),
      vi(
        t,
        m(this, function (e, t, i) {
          if (e) return d.error(e, t);
          (s.loaded_ = !0),
            "function" != typeof window.WebVTT
              ? s.tech_ &&
                s.tech_.any(["vttjsloaded", "vttjserror"], (e) => {
                  if ("vttjserror" !== e.type) return ki(i, s);
                  d.error(
                    "vttjs failed to load, stopping trying to process " + s.src
                  );
                })
              : ki(i, s);
        })
      );
  }
  class xi extends ai {
    constructor(e = {}) {
      if (!e.tech) throw new Error("A tech was not provided.");
      e = h(e, {
        kind: ri[e.kind] || "subtitles",
        language: e.language || e.srclang || "",
      });
      let t = ni[e.mode] || "disabled";
      const i = e.default,
        s =
          (("metadata" !== e.kind && "chapters" !== e.kind) || (t = "hidden"),
          super(e),
          (this.tech_ = e.tech),
          (this.cues_ = []),
          (this.activeCues_ = []),
          (this.preload_ = !1 !== this.tech_.preloadTextTracks),
          new ti(this.cues_)),
        n = new ti(this.activeCues_);
      let a = !1;
      this.timeupdateHandler = m(this, function (e = {}) {
        this.tech_.isDisposed() ||
          (this.tech_.isReady_ &&
            ((this.activeCues = this.activeCues), a) &&
            (this.trigger("cuechange"), (a = !1)),
          "timeupdate" !== e.type &&
            (this.rvf_ = this.tech_.requestVideoFrameCallback(
              this.timeupdateHandler
            )));
      });
      this.tech_.one("dispose", () => {
        this.stopTracking();
      }),
        "disabled" !== t && this.startTracking(),
        Object.defineProperties(this, {
          default: {
            get() {
              return i;
            },
            set() {},
          },
          mode: {
            get() {
              return t;
            },
            set(e) {
              ni[e] &&
                t !== e &&
                ((t = e),
                this.preload_ ||
                  "disabled" === t ||
                  0 !== this.cues.length ||
                  Ii(this.src, this),
                this.stopTracking(),
                "disabled" !== t && this.startTracking(),
                this.trigger("modechange"));
            },
          },
          cues: {
            get() {
              return this.loaded_ ? s : null;
            },
            set() {},
          },
          activeCues: {
            get() {
              if (!this.loaded_) return null;
              if (0 !== this.cues.length) {
                var i = this.tech_.currentTime(),
                  s = [];
                for (let e = 0, t = this.cues.length; e < t; e++) {
                  var r = this.cues[e];
                  r.startTime <= i && r.endTime >= i && s.push(r);
                }
                if (((a = !1), s.length !== this.activeCues_.length)) a = !0;
                else
                  for (let e = 0; e < s.length; e++)
                    -1 === this.activeCues_.indexOf(s[e]) && (a = !0);
                (this.activeCues_ = s), n.setCues_(this.activeCues_);
              }
              return n;
            },
            set() {},
          },
        }),
        e.src
          ? ((this.src = e.src),
            this.preload_ || (this.loaded_ = !0),
            (this.preload_ ||
              ("subtitles" !== e.kind && "captions" !== e.kind)) &&
              Ii(this.src, this))
          : (this.loaded_ = !0);
    }
    startTracking() {
      (this.rvf_ = this.tech_.requestVideoFrameCallback(
        this.timeupdateHandler
      )),
        this.tech_.on("timeupdate", this.timeupdateHandler);
    }
    stopTracking() {
      this.rvf_ &&
        (this.tech_.cancelVideoFrameCallback(this.rvf_), (this.rvf_ = void 0)),
        this.tech_.off("timeupdate", this.timeupdateHandler);
    }
    addCue(e) {
      let t = e;
      if (window.vttjs && !(e instanceof window.vttjs.VTTCue)) {
        t = new window.vttjs.VTTCue(e.startTime, e.endTime, e.text);
        for (const s in e) s in t || (t[s] = e[s]);
        (t.id = e.id), (t.originalCue_ = e);
      }
      var i = this.tech_.textTracks();
      for (let e = 0; e < i.length; e++) i[e] !== this && i[e].removeCue(t);
      this.cues_.push(t), this.cues.setCues_(this.cues_);
    }
    removeCue(e) {
      let t = this.cues_.length;
      for (; t--; ) {
        var i = this.cues_[t];
        if (i === e || (i.originalCue_ && i.originalCue_ === e)) {
          this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
          break;
        }
      }
    }
  }
  xi.prototype.allowedEvents_ = { cuechange: "cuechange" };
  class Ai extends ai {
    constructor(e = {}) {
      e = h(e, { kind: si[e.kind] || "" });
      super(e);
      let t = !1;
      Object.defineProperty(this, "enabled", {
        get() {
          return t;
        },
        set(e) {
          "boolean" == typeof e &&
            e !== t &&
            ((t = e), this.trigger("enabledchange"));
        },
      }),
        e.enabled && (this.enabled = e.enabled),
        (this.loaded_ = !0);
    }
  }
  class Pi extends ai {
    constructor(e = {}) {
      e = h(e, { kind: ii[e.kind] || "" });
      super(e);
      let t = !1;
      Object.defineProperty(this, "selected", {
        get() {
          return t;
        },
        set(e) {
          "boolean" == typeof e &&
            e !== t &&
            ((t = e), this.trigger("selectedchange"));
        },
      }),
        e.selected && (this.selected = e.selected);
    }
  }
  class Oi extends ft {
    constructor(e = {}) {
      super();
      let t;
      const i = new xi(e);
      (this.kind = i.kind),
        (this.src = i.src),
        (this.srclang = i.language),
        (this.label = i.label),
        (this.default = i.default),
        Object.defineProperties(this, {
          readyState: {
            get() {
              return t;
            },
          },
          track: {
            get() {
              return i;
            },
          },
        }),
        (t = Oi.NONE),
        i.addEventListener("loadeddata", () => {
          (t = Oi.LOADED), this.trigger({ type: "load", target: this });
        });
    }
  }
  (Oi.prototype.allowedEvents_ = { load: "load" }),
    (Oi.NONE = 0),
    (Oi.LOADING = 1),
    (Oi.LOADED = 2),
    (Oi.ERROR = 3);
  const Di = {
      audio: {
        ListClass: class extends Qt {
          constructor(t = []) {
            for (let e = t.length - 1; 0 <= e; e--)
              if (t[e].enabled) {
                Jt(t, t[e]);
                break;
              }
            super(t), (this.changing_ = !1);
          }
          addTrack(e) {
            e.enabled && Jt(this, e),
              super.addTrack(e),
              e.addEventListener &&
                ((e.enabledChange_ = () => {
                  this.changing_ ||
                    ((this.changing_ = !0),
                    Jt(this, e),
                    (this.changing_ = !1),
                    this.trigger("change"));
                }),
                e.addEventListener("enabledchange", e.enabledChange_));
          }
          removeTrack(e) {
            super.removeTrack(e),
              e.removeEventListener &&
                e.enabledChange_ &&
                (e.removeEventListener("enabledchange", e.enabledChange_),
                (e.enabledChange_ = null));
          }
        },
        TrackClass: Ai,
        capitalName: "Audio",
      },
      video: {
        ListClass: class extends Qt {
          constructor(t = []) {
            for (let e = t.length - 1; 0 <= e; e--)
              if (t[e].selected) {
                Zt(t, t[e]);
                break;
              }
            super(t),
              (this.changing_ = !1),
              Object.defineProperty(this, "selectedIndex", {
                get() {
                  for (let e = 0; e < this.length; e++)
                    if (this[e].selected) return e;
                  return -1;
                },
                set() {},
              });
          }
          addTrack(e) {
            e.selected && Zt(this, e),
              super.addTrack(e),
              e.addEventListener &&
                ((e.selectedChange_ = () => {
                  this.changing_ ||
                    ((this.changing_ = !0),
                    Zt(this, e),
                    (this.changing_ = !1),
                    this.trigger("change"));
                }),
                e.addEventListener("selectedchange", e.selectedChange_));
          }
          removeTrack(e) {
            super.removeTrack(e),
              e.removeEventListener &&
                e.selectedChange_ &&
                (e.removeEventListener("selectedchange", e.selectedChange_),
                (e.selectedChange_ = null));
          }
        },
        TrackClass: Pi,
        capitalName: "Video",
      },
      text: { ListClass: ei, TrackClass: xi, capitalName: "Text" },
    },
    Li =
      (Object.keys(Di).forEach(function (e) {
        (Di[e].getterName = e + "Tracks"), (Di[e].privateName = e + "Tracks_");
      }),
      {
        remoteText: {
          ListClass: ei,
          TrackClass: xi,
          capitalName: "RemoteText",
          getterName: "remoteTextTracks",
          privateName: "remoteTextTracks_",
        },
        remoteTextEl: {
          ListClass: class {
            constructor(i = []) {
              (this.trackElements_ = []),
                Object.defineProperty(this, "length", {
                  get() {
                    return this.trackElements_.length;
                  },
                });
              for (let e = 0, t = i.length; e < t; e++)
                this.addTrackElement_(i[e]);
            }
            addTrackElement_(e) {
              const t = this.trackElements_.length;
              "" + t in this ||
                Object.defineProperty(this, t, {
                  get() {
                    return this.trackElements_[t];
                  },
                }),
                -1 === this.trackElements_.indexOf(e) &&
                  this.trackElements_.push(e);
            }
            getTrackElementByTrack_(i) {
              let s;
              for (let e = 0, t = this.trackElements_.length; e < t; e++)
                if (i === this.trackElements_[e].track) {
                  s = this.trackElements_[e];
                  break;
                }
              return s;
            }
            removeTrackElement_(i) {
              for (let e = 0, t = this.trackElements_.length; e < t; e++)
                if (i === this.trackElements_[e]) {
                  this.trackElements_[e].track &&
                    "function" == typeof this.trackElements_[e].track.off &&
                    this.trackElements_[e].track.off(),
                    "function" == typeof this.trackElements_[e].off &&
                      this.trackElements_[e].off(),
                    this.trackElements_.splice(e, 1);
                  break;
                }
            }
          },
          TrackClass: Oi,
          capitalName: "RemoteTextTrackEls",
          getterName: "remoteTextTrackEls",
          privateName: "remoteTextTrackEls_",
        },
      }),
    a = Object.assign({}, Di, Li);
  (Li.names = Object.keys(Li)),
    (Di.names = Object.keys(Di)),
    (a.names = [].concat(Li.names).concat(Di.names));
  var ci =
      "undefined" != typeof t ? t : "undefined" != typeof window ? window : {},
    Ni =
      "undefined" != typeof document
        ? document
        : (Ni = ci["__GLOBAL_DOCUMENT_CACHE@4"]) ||
          (ci["__GLOBAL_DOCUMENT_CACHE@4"] = {}),
    t = Ni,
    Mi =
      Object.create ||
      function (e) {
        if (1 !== arguments.length)
          throw new Error("Object.create shim only accepts one parameter.");
        return (Ri.prototype = e), new Ri();
      };
  function Ri() {}
  function Ui(e, t) {
    (this.name = "ParsingError"),
      (this.code = e.code),
      (this.message = t || e.message);
  }
  function Bi(e) {
    function t(e, t, i, s) {
      return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | s) / 1e3;
    }
    e = e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
    return e
      ? e[3]
        ? t(e[1], e[2], e[3].replace(":", ""), e[4])
        : 59 < e[1]
        ? t(e[1], e[2], 0, e[4])
        : t(0, e[1], e[2], e[4])
      : null;
  }
  function Fi() {
    this.values = Mi(null);
  }
  function ji(e, t, i, s) {
    var r,
      n,
      a = s ? e.split(s) : [e];
    for (r in a)
      "string" == typeof a[r] &&
        2 === (n = a[r].split(i)).length &&
        t(n[0].trim(), n[1].trim());
  }
  (((Ui.prototype = Mi(Error.prototype)).constructor = Ui).Errors = {
    BadSignature: { code: 0, message: "Malformed WebVTT signature." },
    BadTimeStamp: { code: 1, message: "Malformed time stamp." },
  }),
    (Fi.prototype = {
      set: function (e, t) {
        this.get(e) || "" === t || (this.values[e] = t);
      },
      get: function (e, t, i) {
        return i
          ? this.has(e)
            ? this.values[e]
            : t[i]
          : this.has(e)
          ? this.values[e]
          : t;
      },
      has: function (e) {
        return e in this.values;
      },
      alt: function (e, t, i) {
        for (var s = 0; s < i.length; ++s)
          if (t === i[s]) {
            this.set(e, t);
            break;
          }
      },
      integer: function (e, t) {
        /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
      },
      percent: function (e, t) {
        return (
          !!(
            t.match(/^([\d]{1,3})(\.[\d]*)?%$/) &&
            0 <= (t = parseFloat(t)) &&
            t <= 100
          ) && (this.set(e, t), !0)
        );
      },
    });
  var Hi = t.createElement && t.createElement("textarea"),
    qi = {
      c: "span",
      i: "i",
      b: "b",
      u: "u",
      ruby: "ruby",
      rt: "rt",
      v: "span",
      lang: "span",
    },
    Vi = {
      white: "rgba(255,255,255,1)",
      lime: "rgba(0,255,0,1)",
      cyan: "rgba(0,255,255,1)",
      red: "rgba(255,0,0,1)",
      yellow: "rgba(255,255,0,1)",
      magenta: "rgba(255,0,255,1)",
      blue: "rgba(0,0,255,1)",
      black: "rgba(0,0,0,1)",
    },
    $i = { v: "title", lang: "lang" },
    Wi = { rt: "ruby" };
  function Gi(e, t) {
    for (
      var i, s, r, n, a, o, l = e.document.createElement("div"), d = l, h = [];
      null !==
      ((o = void 0),
      (o = t
        ? ((o = (o = t.match(/^([^<]*)(<[^>]*>?)?/))[1] || o[2]),
          (t = t.substr(o.length)),
          o)
        : null));

    )
      "<" === o[0]
        ? "/" === o[1]
          ? h.length &&
            h[h.length - 1] === o.substr(2).replace(">", "") &&
            (h.pop(), (d = d.parentNode))
          : (s = Bi(o.substr(1, o.length - 2)))
          ? ((i = e.document.createProcessingInstruction("timestamp", s)),
            d.appendChild(i))
          : (s = o.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/)) &&
            ((r = s[1]),
            (n = s[3]),
            (a = void 0),
            (a = qi[r]),
            (i = a
              ? ((a = e.document.createElement(a)),
                (r = $i[r]) && n && (a[r] = n.trim()),
                a)
              : null)) &&
            ((r = d),
            (Wi[(n = i).localName] && Wi[n.localName] !== r.localName) ||
              (s[2] &&
                ((a = s[2].split(".")).forEach(function (e) {
                  var t = /^bg_/.test(e),
                    e = t ? e.slice(3) : e;
                  Vi.hasOwnProperty(e) &&
                    ((e = Vi[e]),
                    (i.style[t ? "background-color" : "color"] = e));
                }),
                (i.className = a.join(" "))),
              h.push(s[1]),
              d.appendChild(i),
              (d = i)))
        : d.appendChild(
            e.document.createTextNode(
              ((n = o),
              (Hi.innerHTML = n),
              (n = Hi.textContent),
              (Hi.textContent = ""),
              n)
            )
          );
    return l;
  }
  var zi = [
    [1470, 1470],
    [1472, 1472],
    [1475, 1475],
    [1478, 1478],
    [1488, 1514],
    [1520, 1524],
    [1544, 1544],
    [1547, 1547],
    [1549, 1549],
    [1563, 1563],
    [1566, 1610],
    [1645, 1647],
    [1649, 1749],
    [1765, 1766],
    [1774, 1775],
    [1786, 1805],
    [1807, 1808],
    [1810, 1839],
    [1869, 1957],
    [1969, 1969],
    [1984, 2026],
    [2036, 2037],
    [2042, 2042],
    [2048, 2069],
    [2074, 2074],
    [2084, 2084],
    [2088, 2088],
    [2096, 2110],
    [2112, 2136],
    [2142, 2142],
    [2208, 2208],
    [2210, 2220],
    [8207, 8207],
    [64285, 64285],
    [64287, 64296],
    [64298, 64310],
    [64312, 64316],
    [64318, 64318],
    [64320, 64321],
    [64323, 64324],
    [64326, 64449],
    [64467, 64829],
    [64848, 64911],
    [64914, 64967],
    [65008, 65020],
    [65136, 65140],
    [65142, 65276],
    [67584, 67589],
    [67592, 67592],
    [67594, 67637],
    [67639, 67640],
    [67644, 67644],
    [67647, 67669],
    [67671, 67679],
    [67840, 67867],
    [67872, 67897],
    [67903, 67903],
    [67968, 68023],
    [68030, 68031],
    [68096, 68096],
    [68112, 68115],
    [68117, 68119],
    [68121, 68147],
    [68160, 68167],
    [68176, 68184],
    [68192, 68223],
    [68352, 68405],
    [68416, 68437],
    [68440, 68466],
    [68472, 68479],
    [68608, 68680],
    [126464, 126467],
    [126469, 126495],
    [126497, 126498],
    [126500, 126500],
    [126503, 126503],
    [126505, 126514],
    [126516, 126519],
    [126521, 126521],
    [126523, 126523],
    [126530, 126530],
    [126535, 126535],
    [126537, 126537],
    [126539, 126539],
    [126541, 126543],
    [126545, 126546],
    [126548, 126548],
    [126551, 126551],
    [126553, 126553],
    [126555, 126555],
    [126557, 126557],
    [126559, 126559],
    [126561, 126562],
    [126564, 126564],
    [126567, 126570],
    [126572, 126578],
    [126580, 126583],
    [126585, 126588],
    [126590, 126590],
    [126592, 126601],
    [126603, 126619],
    [126625, 126627],
    [126629, 126633],
    [126635, 126651],
    [1114109, 1114109],
  ];
  function Xi(e) {
    var t = [],
      i = "";
    if (e && e.childNodes)
      for (
        n(t, e);
        (i = (function e(t) {
          var i, s, r;
          return t && t.length
            ? (s = (i = t.pop()).textContent || i.innerText)
              ? (r = s.match(/^.*(\n|\r)/))
                ? r[(t.length = 0)]
                : s
              : "ruby" === i.tagName
              ? e(t)
              : i.childNodes
              ? (n(t, i), e(t))
              : void 0
            : null;
        })(t));

      )
        for (var s = 0; s < i.length; s++)
          if (
            (function (e) {
              for (var t = 0; t < zi.length; t++) {
                var i = zi[t];
                if (e >= i[0] && e <= i[1]) return 1;
              }
            })(i.charCodeAt(s))
          )
            return "rtl";
    return "ltr";
    function n(e, t) {
      for (var i = t.childNodes.length - 1; 0 <= i; i--)
        e.push(t.childNodes[i]);
    }
  }
  function Ki() {}
  function Yi(e, t, i) {
    Ki.call(this), (this.cue = t), (this.cueDiv = Gi(e, t.text));
    var s = {
        color: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        position: "relative",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "inline",
        writingMode:
          "" === t.vertical
            ? "horizontal-tb"
            : "lr" === t.vertical
            ? "vertical-lr"
            : "vertical-rl",
        unicodeBidi: "plaintext",
      },
      r =
        (this.applyStyles(s, this.cueDiv),
        (this.div = e.document.createElement("div")),
        (s = {
          direction: Xi(this.cueDiv),
          writingMode:
            "" === t.vertical
              ? "horizontal-tb"
              : "lr" === t.vertical
              ? "vertical-lr"
              : "vertical-rl",
          unicodeBidi: "plaintext",
          textAlign: "middle" === t.align ? "center" : t.align,
          font: i.font,
          whiteSpace: "pre-line",
          position: "absolute",
        }),
        this.applyStyles(s),
        this.div.appendChild(this.cueDiv),
        0);
    switch (t.positionAlign) {
      case "start":
        r = t.position;
        break;
      case "center":
        r = t.position - t.size / 2;
        break;
      case "end":
        r = t.position - t.size;
    }
    "" === t.vertical
      ? this.applyStyles({
          left: this.formatStyle(r, "%"),
          width: this.formatStyle(t.size, "%"),
        })
      : this.applyStyles({
          top: this.formatStyle(r, "%"),
          height: this.formatStyle(t.size, "%"),
        }),
      (this.move = function (e) {
        this.applyStyles({
          top: this.formatStyle(e.top, "px"),
          bottom: this.formatStyle(e.bottom, "px"),
          left: this.formatStyle(e.left, "px"),
          right: this.formatStyle(e.right, "px"),
          height: this.formatStyle(e.height, "px"),
          width: this.formatStyle(e.width, "px"),
        });
      });
  }
  function y(e) {
    var t, i, s, r;
    e.div &&
      ((t = e.div.offsetHeight),
      (i = e.div.offsetWidth),
      (s = e.div.offsetTop),
      (r =
        (r = (r = e.div.childNodes) && r[0]) &&
        r.getClientRects &&
        r.getClientRects()),
      (e = e.div.getBoundingClientRect()),
      (r = r ? Math.max((r[0] && r[0].height) || 0, e.height / r.length) : 0)),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top || s),
      (this.height = e.height || t),
      (this.bottom = e.bottom || s + (e.height || t)),
      (this.width = e.width || i),
      (this.lineHeight = void 0 !== r ? r : e.lineHeight);
  }
  function Qi(e, t, o, l) {
    var i,
      s = new y(t),
      r = t.cue,
      n = (function (e) {
        if (
          "number" == typeof e.line &&
          (e.snapToLines || (0 <= e.line && e.line <= 100))
        )
          return e.line;
        if (
          !e.track ||
          !e.track.textTrackList ||
          !e.track.textTrackList.mediaElement
        )
          return -1;
        for (
          var t = e.track, i = t.textTrackList, s = 0, r = 0;
          r < i.length && i[r] !== t;
          r++
        )
          "showing" === i[r].mode && s++;
        return -1 * ++s;
      })(r),
      a = [];
    if (r.snapToLines) {
      switch (r.vertical) {
        case "":
          (a = ["+y", "-y"]), (i = "height");
          break;
        case "rl":
          (a = ["+x", "-x"]), (i = "width");
          break;
        case "lr":
          (a = ["-x", "+x"]), (i = "width");
      }
      var d = s.lineHeight,
        h = d * Math.round(n),
        u = o[i] + d,
        c = a[0];
      Math.abs(h) > u && ((h = h < 0 ? -1 : 1), (h *= Math.ceil(u / d) * d)),
        n < 0 &&
          ((h += "" === r.vertical ? o.height : o.width), (a = a.reverse())),
        s.move(c, h);
    } else {
      var p = (s.lineHeight / o.height) * 100;
      switch (r.lineAlign) {
        case "center":
          n -= p / 2;
          break;
        case "end":
          n -= p;
      }
      switch (r.vertical) {
        case "":
          t.applyStyles({ top: t.formatStyle(n, "%") });
          break;
        case "rl":
          t.applyStyles({ left: t.formatStyle(n, "%") });
          break;
        case "lr":
          t.applyStyles({ right: t.formatStyle(n, "%") });
      }
      (a = ["+y", "-x", "+x", "-y"]), (s = new y(t));
    }
    u = (function (e, t) {
      for (var i, s = new y(e), r = 1, n = 0; n < t.length; n++) {
        for (
          ;
          e.overlapsOppositeAxis(o, t[n]) || (e.within(o) && e.overlapsAny(l));

        )
          e.move(t[n]);
        if (e.within(o)) return e;
        var a = e.intersectPercentage(o);
        a < r && ((i = new y(e)), (r = a)), (e = new y(s));
      }
      return i || s;
    })(s, a);
    t.move(u.toCSSCompatValues(o));
  }
  function Ji() {}
  (Ki.prototype.applyStyles = function (e, t) {
    for (var i in ((t = t || this.div), e))
      e.hasOwnProperty(i) && (t.style[i] = e[i]);
  }),
    (Ki.prototype.formatStyle = function (e, t) {
      return 0 === e ? 0 : e + t;
    }),
    ((Yi.prototype = Mi(Ki.prototype)).constructor = Yi),
    (y.prototype.move = function (e, t) {
      switch (((t = void 0 !== t ? t : this.lineHeight), e)) {
        case "+x":
          (this.left += t), (this.right += t);
          break;
        case "-x":
          (this.left -= t), (this.right -= t);
          break;
        case "+y":
          (this.top += t), (this.bottom += t);
          break;
        case "-y":
          (this.top -= t), (this.bottom -= t);
      }
    }),
    (y.prototype.overlaps = function (e) {
      return (
        this.left < e.right &&
        this.right > e.left &&
        this.top < e.bottom &&
        this.bottom > e.top
      );
    }),
    (y.prototype.overlapsAny = function (e) {
      for (var t = 0; t < e.length; t++) if (this.overlaps(e[t])) return !0;
      return !1;
    }),
    (y.prototype.within = function (e) {
      return (
        this.top >= e.top &&
        this.bottom <= e.bottom &&
        this.left >= e.left &&
        this.right <= e.right
      );
    }),
    (y.prototype.overlapsOppositeAxis = function (e, t) {
      switch (t) {
        case "+x":
          return this.left < e.left;
        case "-x":
          return this.right > e.right;
        case "+y":
          return this.top < e.top;
        case "-y":
          return this.bottom > e.bottom;
      }
    }),
    (y.prototype.intersectPercentage = function (e) {
      return (
        (Math.max(
          0,
          Math.min(this.right, e.right) - Math.max(this.left, e.left)
        ) *
          Math.max(
            0,
            Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)
          )) /
        (this.height * this.width)
      );
    }),
    (y.prototype.toCSSCompatValues = function (e) {
      return {
        top: this.top - e.top,
        bottom: e.bottom - this.bottom,
        left: this.left - e.left,
        right: e.right - this.right,
        height: this.height,
        width: this.width,
      };
    }),
    (y.getSimpleBoxPosition = function (e) {
      var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
        i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
        s = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
      return {
        left: (e = e.div
          ? e.div.getBoundingClientRect()
          : e.tagName
          ? e.getBoundingClientRect()
          : e).left,
        right: e.right,
        top: e.top || s,
        height: e.height || t,
        bottom: e.bottom || s + (e.height || t),
        width: e.width || i,
      };
    }),
    (Ji.StringDecoder = function () {
      return {
        decode: function (e) {
          if (!e) return "";
          if ("string" != typeof e)
            throw new Error("Error - expected string data.");
          return decodeURIComponent(encodeURIComponent(e));
        },
      };
    }),
    (Ji.convertCueToDOMTree = function (e, t) {
      return e && t ? Gi(e, t) : null;
    });
  (Ji.processCues = function (e, t, i) {
    if (!e || !t || !i) return null;
    for (; i.firstChild; ) i.removeChild(i.firstChild);
    var s = e.document.createElement("div");
    if (
      ((s.style.position = "absolute"),
      (s.style.left = "0"),
      (s.style.right = "0"),
      (s.style.top = "0"),
      (s.style.bottom = "0"),
      (s.style.margin = "1.5%"),
      i.appendChild(s),
      (function (e) {
        for (var t = 0; t < e.length; t++)
          if (e[t].hasBeenReset || !e[t].displayState) return 1;
      })(t))
    )
      for (
        var r,
          n,
          a = [],
          o = y.getSimpleBoxPosition(s),
          l = {
            font: Math.round(0.05 * o.height * 100) / 100 + "px sans-serif",
          },
          d = 0;
        d < t.length;
        d++
      )
        (n = t[d]),
          (r = new Yi(e, n, l)),
          s.appendChild(r.div),
          Qi(0, r, o, a),
          (n.displayState = r.div),
          a.push(y.getSimpleBoxPosition(r));
    else for (var h = 0; h < t.length; h++) s.appendChild(t[h].displayState);
  }),
    ((Ji.Parser = function (e, t, i) {
      i || ((i = t), (t = {})),
        (t = t || {}),
        (this.window = e),
        (this.vttjs = t),
        (this.state = "INITIAL"),
        (this.buffer = ""),
        (this.decoder = i || new TextDecoder("utf8")),
        (this.regionList = []);
    }).prototype = {
      reportOrThrowError: function (e) {
        if (!(e instanceof Ui)) throw e;
        this.onparsingerror && this.onparsingerror(e);
      },
      parse: function (e) {
        var s = this;
        function t() {
          for (
            var e = s.buffer, t = 0;
            t < e.length && "\r" !== e[t] && "\n" !== e[t];

          )
            ++t;
          var i = e.substr(0, t);
          return (
            "\r" === e[t] && ++t,
            "\n" === e[t] && ++t,
            (s.buffer = e.substr(t)),
            i
          );
        }
        function i(e) {
          e.match(/X-TIMESTAMP-MAP/)
            ? ji(
                e,
                function (e, t) {
                  var i;
                  "X-TIMESTAMP-MAP" === e &&
                    ((e = t),
                    (i = new Fi()),
                    ji(
                      e,
                      function (e, t) {
                        switch (e) {
                          case "MPEGT":
                            i.integer(e + "S", t);
                            break;
                          case "LOCA":
                            i.set(e + "L", Bi(t));
                        }
                      },
                      /[^\d]:/,
                      /,/
                    ),
                    s.ontimestampmap) &&
                    s.ontimestampmap({
                      MPEGTS: i.get("MPEGTS"),
                      LOCAL: i.get("LOCAL"),
                    });
                },
                /=/
              )
            : ji(
                e,
                function (e, t) {
                  var r;
                  "Region" === e &&
                    ((e = t),
                    (r = new Fi()),
                    ji(
                      e,
                      function (e, t) {
                        switch (e) {
                          case "id":
                            r.set(e, t);
                            break;
                          case "width":
                            r.percent(e, t);
                            break;
                          case "lines":
                            r.integer(e, t);
                            break;
                          case "regionanchor":
                          case "viewportanchor":
                            var i,
                              s = t.split(",");
                            2 === s.length &&
                              ((i = new Fi()).percent("x", s[0]),
                              i.percent("y", s[1]),
                              i.has("x") && i.has("y")) &&
                              (r.set(e + "X", i.get("x")),
                              r.set(e + "Y", i.get("y")));
                            break;
                          case "scroll":
                            r.alt(e, t, ["up"]);
                        }
                      },
                      /=/,
                      /\s/
                    ),
                    r.has("id")) &&
                    (((e = new (s.vttjs.VTTRegion ||
                      s.window.VTTRegion)()).width = r.get("width", 100)),
                    (e.lines = r.get("lines", 3)),
                    (e.regionAnchorX = r.get("regionanchorX", 0)),
                    (e.regionAnchorY = r.get("regionanchorY", 100)),
                    (e.viewportAnchorX = r.get("viewportanchorX", 0)),
                    (e.viewportAnchorY = r.get("viewportanchorY", 100)),
                    (e.scroll = r.get("scroll", "")),
                    s.onregion && s.onregion(e),
                    s.regionList.push({ id: r.get("id"), region: e }));
                },
                /:/
              );
        }
        e && (s.buffer += s.decoder.decode(e, { stream: !0 }));
        try {
          if ("INITIAL" === s.state) {
            if (!/\r\n|\n/.test(s.buffer)) return this;
            var r,
              n = (r = t()).match(/^WEBVTT([ \t].*)?$/);
            if (!n || !n[0]) throw new Ui(Ui.Errors.BadSignature);
            s.state = "HEADER";
          }
          for (var a = !1; s.buffer; ) {
            if (!/\r\n|\n/.test(s.buffer)) return this;
            switch ((a ? (a = !1) : (r = t()), s.state)) {
              case "HEADER":
                /:/.test(r) ? i(r) : r || (s.state = "ID");
                continue;
              case "NOTE":
                r || (s.state = "ID");
                continue;
              case "ID":
                if (/^NOTE($|[ \t])/.test(r)) {
                  s.state = "NOTE";
                  break;
                }
                if (!r) continue;
                s.cue = new (s.vttjs.VTTCue || s.window.VTTCue)(0, 0, "");
                try {
                  s.cue.align = "center";
                } catch (e) {
                  s.cue.align = "middle";
                }
                if (((s.state = "CUE"), -1 === r.indexOf("--\x3e"))) {
                  s.cue.id = r;
                  continue;
                }
              case "CUE":
                try {
                  !(function (t, i, n) {
                    var s = t;
                    function e() {
                      var e = Bi(t);
                      if (null === e)
                        throw new Ui(
                          Ui.Errors.BadTimeStamp,
                          "Malformed timestamp: " + s
                        );
                      return (t = t.replace(/^[^\sa-zA-Z-]+/, "")), e;
                    }
                    function r() {
                      t = t.replace(/^\s+/, "");
                    }
                    if (
                      (r(),
                      (i.startTime = e()),
                      r(),
                      "--\x3e" !== t.substr(0, 3))
                    )
                      throw new Ui(
                        Ui.Errors.BadTimeStamp,
                        "Malformed time stamp (time stamps must be separated by '--\x3e'): " +
                          s
                      );
                    (t = t.substr(3)), r(), (i.endTime = e()), r();
                    var a = t,
                      o = new Fi();
                    ji(
                      a,
                      function (e, t) {
                        switch (e) {
                          case "region":
                            for (var i = n.length - 1; 0 <= i; i--)
                              if (n[i].id === t) {
                                o.set(e, n[i].region);
                                break;
                              }
                            break;
                          case "vertical":
                            o.alt(e, t, ["rl", "lr"]);
                            break;
                          case "line":
                            var s = t.split(","),
                              r = s[0];
                            o.integer(e, r),
                              o.percent(e, r) && o.set("snapToLines", !1),
                              o.alt(e, r, ["auto"]),
                              2 === s.length &&
                                o.alt("lineAlign", s[1], [
                                  "start",
                                  "center",
                                  "end",
                                ]);
                            break;
                          case "position":
                            (s = t.split(",")),
                              o.percent(e, s[0]),
                              2 === s.length &&
                                o.alt("positionAlign", s[1], [
                                  "start",
                                  "center",
                                  "end",
                                ]);
                            break;
                          case "size":
                            o.percent(e, t);
                            break;
                          case "align":
                            o.alt(e, t, [
                              "start",
                              "center",
                              "end",
                              "left",
                              "right",
                            ]);
                        }
                      },
                      /:/,
                      /\s/
                    ),
                      (i.region = o.get("region", null)),
                      (i.vertical = o.get("vertical", ""));
                    try {
                      i.line = o.get("line", "auto");
                    } catch (e) {}
                    (i.lineAlign = o.get("lineAlign", "start")),
                      (i.snapToLines = o.get("snapToLines", !0)),
                      (i.size = o.get("size", 100));
                    try {
                      i.align = o.get("align", "center");
                    } catch (e) {
                      i.align = o.get("align", "middle");
                    }
                    try {
                      i.position = o.get("position", "auto");
                    } catch (e) {
                      i.position = o.get(
                        "position",
                        {
                          start: 0,
                          left: 0,
                          center: 50,
                          middle: 50,
                          end: 100,
                          right: 100,
                        },
                        i.align
                      );
                    }
                    i.positionAlign = o.get(
                      "positionAlign",
                      {
                        start: "start",
                        left: "start",
                        center: "center",
                        middle: "center",
                        end: "end",
                        right: "end",
                      },
                      i.align
                    );
                  })(r, s.cue, s.regionList);
                } catch (e) {
                  s.reportOrThrowError(e), (s.cue = null), (s.state = "BADCUE");
                  continue;
                }
                s.state = "CUETEXT";
                continue;
              case "CUETEXT":
                var o = -1 !== r.indexOf("--\x3e");
                if (!r || (o && (a = !0))) {
                  s.oncue && s.oncue(s.cue), (s.cue = null), (s.state = "ID");
                  continue;
                }
                s.cue.text && (s.cue.text += "\n"),
                  (s.cue.text += r
                    .replace(/\u2028/g, "\n")
                    .replace(/u2029/g, "\n"));
                continue;
              case "BADCUE":
                r || (s.state = "ID");
                continue;
            }
          }
        } catch (e) {
          s.reportOrThrowError(e),
            "CUETEXT" === s.state && s.cue && s.oncue && s.oncue(s.cue),
            (s.cue = null),
            (s.state = "INITIAL" === s.state ? "BADWEBVTT" : "BADCUE");
        }
        return this;
      },
      flush: function () {
        var t = this;
        try {
          if (
            ((t.buffer += t.decoder.decode()),
            (!t.cue && "HEADER" !== t.state) ||
              ((t.buffer += "\n\n"), t.parse()),
            "INITIAL" === t.state)
          )
            throw new Ui(Ui.Errors.BadSignature);
        } catch (e) {
          t.reportOrThrowError(e);
        }
        return t.onflush && t.onflush(), this;
      },
    });
  var Zi = Ji,
    es = { "": 1, lr: 1, rl: 1 },
    ts = {
      start: 1,
      center: 1,
      end: 1,
      left: 1,
      right: 1,
      auto: 1,
      "line-left": 1,
      "line-right": 1,
    };
  function is(e) {
    return "string" == typeof e && !!ts[e.toLowerCase()] && e.toLowerCase();
  }
  function ss(e, t, i) {
    this.hasBeenReset = !1;
    var s = "",
      r = !1,
      n = e,
      a = t,
      o = i,
      l = null,
      d = "",
      h = !0,
      u = "auto",
      c = "start",
      p = "auto",
      m = "auto",
      g = 100,
      f = "center";
    Object.defineProperties(this, {
      id: {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (e) {
          s = "" + e;
        },
      },
      pauseOnExit: {
        enumerable: !0,
        get: function () {
          return r;
        },
        set: function (e) {
          r = !!e;
        },
      },
      startTime: {
        enumerable: !0,
        get: function () {
          return n;
        },
        set: function (e) {
          if ("number" != typeof e)
            throw new TypeError("Start time must be set to a number.");
          (n = e), (this.hasBeenReset = !0);
        },
      },
      endTime: {
        enumerable: !0,
        get: function () {
          return a;
        },
        set: function (e) {
          if ("number" != typeof e)
            throw new TypeError("End time must be set to a number.");
          (a = e), (this.hasBeenReset = !0);
        },
      },
      text: {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          (o = "" + e), (this.hasBeenReset = !0);
        },
      },
      region: {
        enumerable: !0,
        get: function () {
          return l;
        },
        set: function (e) {
          (l = e), (this.hasBeenReset = !0);
        },
      },
      vertical: {
        enumerable: !0,
        get: function () {
          return d;
        },
        set: function (e) {
          e =
            "string" == typeof (e = e) &&
            !!es[e.toLowerCase()] &&
            e.toLowerCase();
          if (!1 === e)
            throw new SyntaxError(
              "Vertical: an invalid or illegal direction string was specified."
            );
          (d = e), (this.hasBeenReset = !0);
        },
      },
      snapToLines: {
        enumerable: !0,
        get: function () {
          return h;
        },
        set: function (e) {
          (h = !!e), (this.hasBeenReset = !0);
        },
      },
      line: {
        enumerable: !0,
        get: function () {
          return u;
        },
        set: function (e) {
          if ("number" != typeof e && "auto" !== e)
            throw new SyntaxError(
              "Line: an invalid number or illegal string was specified."
            );
          (u = e), (this.hasBeenReset = !0);
        },
      },
      lineAlign: {
        enumerable: !0,
        get: function () {
          return c;
        },
        set: function (e) {
          e = is(e);
          e && ((c = e), (this.hasBeenReset = !0));
        },
      },
      position: {
        enumerable: !0,
        get: function () {
          return p;
        },
        set: function (e) {
          if (e < 0 || 100 < e)
            throw new Error("Position must be between 0 and 100.");
          (p = e), (this.hasBeenReset = !0);
        },
      },
      positionAlign: {
        enumerable: !0,
        get: function () {
          return m;
        },
        set: function (e) {
          e = is(e);
          e && ((m = e), (this.hasBeenReset = !0));
        },
      },
      size: {
        enumerable: !0,
        get: function () {
          return g;
        },
        set: function (e) {
          if (e < 0 || 100 < e)
            throw new Error("Size must be between 0 and 100.");
          (g = e), (this.hasBeenReset = !0);
        },
      },
      align: {
        enumerable: !0,
        get: function () {
          return f;
        },
        set: function (e) {
          e = is(e);
          if (!e)
            throw new SyntaxError(
              "align: an invalid or illegal alignment string was specified."
            );
          (f = e), (this.hasBeenReset = !0);
        },
      },
    }),
      (this.displayState = void 0);
  }
  ss.prototype.getCueAsHTML = function () {
    return WebVTT.convertCueToDOMTree(window, this.text);
  };
  var rs = ss,
    ns = { "": !0, up: !0 };
  function as(e) {
    return "number" == typeof e && 0 <= e && e <= 100;
  }
  function os() {
    var t = 100,
      i = 3,
      s = 0,
      r = 100,
      n = 0,
      a = 100,
      o = "";
    Object.defineProperties(this, {
      width: {
        enumerable: !0,
        get: function () {
          return t;
        },
        set: function (e) {
          if (!as(e)) throw new Error("Width must be between 0 and 100.");
          t = e;
        },
      },
      lines: {
        enumerable: !0,
        get: function () {
          return i;
        },
        set: function (e) {
          if ("number" != typeof e)
            throw new TypeError("Lines must be set to a number.");
          i = e;
        },
      },
      regionAnchorY: {
        enumerable: !0,
        get: function () {
          return r;
        },
        set: function (e) {
          if (!as(e))
            throw new Error("RegionAnchorX must be between 0 and 100.");
          r = e;
        },
      },
      regionAnchorX: {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (e) {
          if (!as(e))
            throw new Error("RegionAnchorY must be between 0 and 100.");
          s = e;
        },
      },
      viewportAnchorY: {
        enumerable: !0,
        get: function () {
          return a;
        },
        set: function (e) {
          if (!as(e))
            throw new Error("ViewportAnchorY must be between 0 and 100.");
          a = e;
        },
      },
      viewportAnchorX: {
        enumerable: !0,
        get: function () {
          return n;
        },
        set: function (e) {
          if (!as(e))
            throw new Error("ViewportAnchorX must be between 0 and 100.");
          n = e;
        },
      },
      scroll: {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          e =
            "string" == typeof (e = e) &&
            !!ns[e.toLowerCase()] &&
            e.toLowerCase();
          !1 !== e && (o = e);
        },
      },
    });
  }
  var ls = Dt(function (e) {
    var e = (e.exports = { WebVTT: Zi, VTTCue: rs, VTTRegion: os }),
      t = ((pi.vttjs = e), (pi.WebVTT = e.WebVTT), e.VTTCue),
      i = e.VTTRegion,
      s = pi.VTTCue,
      r = pi.VTTRegion;
    (e.shim = function () {
      (pi.VTTCue = t), (pi.VTTRegion = i);
    }),
      (e.restore = function () {
        (pi.VTTCue = s), (pi.VTTRegion = r);
      }),
      pi.VTTCue || e.shim();
  });
  ls.WebVTT, ls.VTTCue, ls.VTTRegion;
  class _ extends f {
    constructor(t = {}, e = function () {}) {
      (t.reportTouchActivity = !1),
        super(null, t, e),
        (this.onDurationChange_ = (e) => this.onDurationChange(e)),
        (this.trackProgress_ = (e) => this.trackProgress(e)),
        (this.trackCurrentTime_ = (e) => this.trackCurrentTime(e)),
        (this.stopTrackingCurrentTime_ = (e) =>
          this.stopTrackingCurrentTime(e)),
        (this.disposeSourceHandler_ = (e) => this.disposeSourceHandler(e)),
        (this.queuedHanders_ = new Set()),
        (this.hasStarted_ = !1),
        this.on("playing", function () {
          this.hasStarted_ = !0;
        }),
        this.on("loadstart", function () {
          this.hasStarted_ = !1;
        }),
        a.names.forEach((e) => {
          e = a[e];
          t && t[e.getterName] && (this[e.privateName] = t[e.getterName]);
        }),
        this.featuresProgressEvents || this.manualProgressOn(),
        this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(),
        ["Text", "Audio", "Video"].forEach((e) => {
          !1 === t[`native${e}Tracks`] &&
            (this[`featuresNative${e}Tracks`] = !1);
        }),
        !1 === t.nativeCaptions || !1 === t.nativeTextTracks
          ? (this.featuresNativeTextTracks = !1)
          : (!0 !== t.nativeCaptions && !0 !== t.nativeTextTracks) ||
            (this.featuresNativeTextTracks = !0),
        this.featuresNativeTextTracks || this.emulateTextTracks(),
        (this.preloadTextTracks = !1 !== t.preloadTextTracks),
        (this.autoRemoteTextTracks_ = new a.text.ListClass()),
        this.initTrackListeners(),
        t.nativeControlsForTouch || this.emitTapEvents(),
        this.constructor &&
          (this.name_ = this.constructor.name || "Unknown Tech");
    }
    triggerSourceset(e) {
      this.isReady_ ||
        this.one("ready", () =>
          this.setTimeout(() => this.triggerSourceset(e), 1)
        ),
        this.trigger({ src: e, type: "sourceset" });
    }
    manualProgressOn() {
      this.on("durationchange", this.onDurationChange_),
        (this.manualProgress = !0),
        this.one("ready", this.trackProgress_);
    }
    manualProgressOff() {
      (this.manualProgress = !1),
        this.stopTrackingProgress(),
        this.off("durationchange", this.onDurationChange_);
    }
    trackProgress(e) {
      this.stopTrackingProgress(),
        (this.progressInterval = this.setInterval(
          m(this, function () {
            var e = this.bufferedPercent();
            this.bufferedPercent_ !== e && this.trigger("progress"),
              1 === (this.bufferedPercent_ = e) && this.stopTrackingProgress();
          }),
          500
        ));
    }
    onDurationChange(e) {
      this.duration_ = this.duration();
    }
    buffered() {
      return Mt(0, 0);
    }
    bufferedPercent() {
      return qt(this.buffered(), this.duration_);
    }
    stopTrackingProgress() {
      this.clearInterval(this.progressInterval);
    }
    manualTimeUpdatesOn() {
      (this.manualTimeUpdates = !0),
        this.on("play", this.trackCurrentTime_),
        this.on("pause", this.stopTrackingCurrentTime_);
    }
    manualTimeUpdatesOff() {
      (this.manualTimeUpdates = !1),
        this.stopTrackingCurrentTime(),
        this.off("play", this.trackCurrentTime_),
        this.off("pause", this.stopTrackingCurrentTime_);
    }
    trackCurrentTime() {
      this.currentTimeInterval && this.stopTrackingCurrentTime(),
        (this.currentTimeInterval = this.setInterval(function () {
          this.trigger({
            type: "timeupdate",
            target: this,
            manuallyTriggered: !0,
          });
        }, 250));
    }
    stopTrackingCurrentTime() {
      this.clearInterval(this.currentTimeInterval),
        this.trigger({
          type: "timeupdate",
          target: this,
          manuallyTriggered: !0,
        });
    }
    dispose() {
      this.clearTracks(Di.names),
        this.manualProgress && this.manualProgressOff(),
        this.manualTimeUpdates && this.manualTimeUpdatesOff(),
        super.dispose();
    }
    clearTracks(e) {
      (e = [].concat(e)).forEach((e) => {
        var t = this[e + "Tracks"]() || [];
        let i = t.length;
        for (; i--; ) {
          var s = t[i];
          "text" === e && this.removeRemoteTextTrack(s), t.removeTrack(s);
        }
      });
    }
    cleanupAutoTextTracks() {
      var e = this.autoRemoteTextTracks_ || [];
      let t = e.length;
      for (; t--; ) {
        var i = e[t];
        this.removeRemoteTextTrack(i);
      }
    }
    reset() {}
    crossOrigin() {}
    setCrossOrigin() {}
    error(e) {
      return (
        void 0 !== e && ((this.error_ = new i(e)), this.trigger("error")),
        this.error_
      );
    }
    played() {
      return this.hasStarted_ ? Mt(0, 0) : Mt();
    }
    play() {}
    setScrubbing() {}
    scrubbing() {}
    setCurrentTime() {
      this.manualTimeUpdates &&
        this.trigger({
          type: "timeupdate",
          target: this,
          manuallyTriggered: !0,
        });
    }
    initTrackListeners() {
      Di.names.forEach((e) => {
        var t = Di[e];
        const i = () => {
            this.trigger(e + "trackchange");
          },
          s = this[t.getterName]();
        s.addEventListener("removetrack", i),
          s.addEventListener("addtrack", i),
          this.on("dispose", () => {
            s.removeEventListener("removetrack", i),
              s.removeEventListener("addtrack", i);
          });
      });
    }
    addWebVttScript_() {
      if (!window.WebVTT)
        if (document.body.contains(this.el()))
          if (!this.options_["vtt.js"] && Y(ls) && 0 < Object.keys(ls).length)
            this.trigger("vttjsloaded");
          else {
            const e = document.createElement("script");
            (e.src =
              this.options_["vtt.js"] ||
              "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js"),
              (e.onload = () => {
                this.trigger("vttjsloaded");
              }),
              (e.onerror = () => {
                this.trigger("vttjserror");
              }),
              this.on("dispose", () => {
                (e.onload = null), (e.onerror = null);
              }),
              (window.WebVTT = !0),
              this.el().parentNode.appendChild(e);
          }
        else this.ready(this.addWebVttScript_);
    }
    emulateTextTracks() {
      const i = this.textTracks(),
        e = this.remoteTextTracks(),
        t = (e) => i.addTrack(e.track),
        s = (e) => i.removeTrack(e.track),
        r =
          (e.on("addtrack", t),
          e.on("removetrack", s),
          this.addWebVttScript_(),
          () => this.trigger("texttrackchange")),
        n = () => {
          r();
          for (let e = 0; e < i.length; e++) {
            var t = i[e];
            t.removeEventListener("cuechange", r),
              "showing" === t.mode && t.addEventListener("cuechange", r);
          }
        };
      n(),
        i.addEventListener("change", n),
        i.addEventListener("addtrack", n),
        i.addEventListener("removetrack", n),
        this.on("dispose", function () {
          e.off("addtrack", t),
            e.off("removetrack", s),
            i.removeEventListener("change", n),
            i.removeEventListener("addtrack", n),
            i.removeEventListener("removetrack", n);
          for (let e = 0; e < i.length; e++)
            i[e].removeEventListener("cuechange", r);
        });
    }
    addTextTrack(e, t, i) {
      if (e)
        return (
          (e = e),
          (t = t),
          (i = i),
          (r = {}),
          (n = (s = this).textTracks()),
          (r.kind = e),
          t && (r.label = t),
          i && (r.language = i),
          (r.tech = s),
          (e = new a.text.TrackClass(r)),
          n.addTrack(e),
          e
        );
      throw new Error("TextTrack kind is required but was not provided");
      var s, r, n;
    }
    createRemoteTextTrack(e) {
      e = h(e, { tech: this });
      return new Li.remoteTextEl.TrackClass(e);
    }
    addRemoteTextTrack(e = {}, t) {
      const i = this.createRemoteTextTrack(e);
      return (
        "boolean" != typeof t && (t = !1),
        this.remoteTextTrackEls().addTrackElement_(i),
        this.remoteTextTracks().addTrack(i.track),
        !1 === t &&
          this.ready(() => this.autoRemoteTextTracks_.addTrack(i.track)),
        i
      );
    }
    removeRemoteTextTrack(e) {
      var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
      this.remoteTextTrackEls().removeTrackElement_(t),
        this.remoteTextTracks().removeTrack(e),
        this.autoRemoteTextTracks_.removeTrack(e);
    }
    getVideoPlaybackQuality() {
      return {};
    }
    requestPictureInPicture() {
      return Promise.reject();
    }
    disablePictureInPicture() {
      return !0;
    }
    setDisablePictureInPicture() {}
    requestVideoFrameCallback(e) {
      const t = tt++;
      return (
        !this.isReady_ || this.paused()
          ? (this.queuedHanders_.add(t),
            this.one("playing", () => {
              this.queuedHanders_.has(t) &&
                (this.queuedHanders_.delete(t), e());
            }))
          : this.requestNamedAnimationFrame(t, e),
        t
      );
    }
    cancelVideoFrameCallback(e) {
      this.queuedHanders_.has(e)
        ? this.queuedHanders_.delete(e)
        : this.cancelNamedAnimationFrame(e);
    }
    setPoster() {}
    playsinline() {}
    setPlaysinline() {}
    overrideNativeAudioTracks() {}
    overrideNativeVideoTracks() {}
    canPlayType() {
      return "";
    }
    static canPlayType() {
      return "";
    }
    static canPlaySource(e, t) {
      return _.canPlayType(e.type);
    }
    static isTech(e) {
      return e.prototype instanceof _ || e instanceof _ || e === _;
    }
    static registerTech(e, t) {
      if ((_.techs_ || (_.techs_ = {}), !_.isTech(t)))
        throw new Error(`Tech ${e} must be a Tech`);
      if (!_.canPlayType)
        throw new Error("Techs must have a static canPlayType method on them");
      if (_.canPlaySource)
        return (
          (e = g(e)),
          (_.techs_[e] = t),
          (_.techs_[At(e)] = t),
          "Tech" !== e && _.defaultTechOrder_.push(e),
          t
        );
      throw new Error("Techs must have a static canPlaySource method on them");
    }
    static getTech(e) {
      if (e)
        return _.techs_ && _.techs_[e]
          ? _.techs_[e]
          : ((e = g(e)),
            window && window.videojs && window.videojs[e]
              ? (d.warn(
                  `The ${e} tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)`
                ),
                window.videojs[e])
              : void 0);
    }
  }
  a.names.forEach(function (e) {
    const t = a[e];
    _.prototype[t.getterName] = function () {
      return (
        (this[t.privateName] = this[t.privateName] || new t.ListClass()),
        this[t.privateName]
      );
    };
  }),
    (_.prototype.featuresVolumeControl = !0),
    (_.prototype.featuresMuteControl = !0),
    (_.prototype.featuresFullscreenResize = !1),
    (_.prototype.featuresPlaybackRate = !1),
    (_.prototype.featuresProgressEvents = !1),
    (_.prototype.featuresSourceset = !1),
    (_.prototype.featuresTimeupdateEvents = !1),
    (_.prototype.featuresNativeTextTracks = !1),
    (_.prototype.featuresVideoFrameCallback = !1),
    (_.withSourceHandlers = function (r) {
      (r.registerSourceHandler = function (e, t) {
        let i = r.sourceHandlers;
        (i = i || (r.sourceHandlers = [])),
          void 0 === t && (t = i.length),
          i.splice(t, 0, e);
      }),
        (r.canPlayType = function (t) {
          var i,
            s = r.sourceHandlers || [];
          for (let e = 0; e < s.length; e++)
            if ((i = s[e].canPlayType(t))) return i;
          return "";
        }),
        (r.selectSourceHandler = function (t, i) {
          var s = r.sourceHandlers || [];
          for (let e = 0; e < s.length; e++)
            if (s[e].canHandleSource(t, i)) return s[e];
          return null;
        }),
        (r.canPlaySource = function (e, t) {
          var i = r.selectSourceHandler(e, t);
          return i ? i.canHandleSource(e, t) : "";
        });
      ["seekable", "seeking", "duration"].forEach(function (e) {
        const t = this[e];
        "function" == typeof t &&
          (this[e] = function () {
            return this.sourceHandler_ && this.sourceHandler_[e]
              ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments)
              : t.apply(this, arguments);
          });
      }, r.prototype),
        (r.prototype.setSource = function (e) {
          let t = r.selectSourceHandler(e, this.options_);
          t ||
            (r.nativeSourceHandler
              ? (t = r.nativeSourceHandler)
              : d.error("No source handler found for the current source.")),
            this.disposeSourceHandler(),
            this.off("dispose", this.disposeSourceHandler_),
            t !== r.nativeSourceHandler && (this.currentSource_ = e),
            (this.sourceHandler_ = t.handleSource(e, this, this.options_)),
            this.one("dispose", this.disposeSourceHandler_);
        }),
        (r.prototype.disposeSourceHandler = function () {
          this.currentSource_ &&
            (this.clearTracks(["audio", "video"]),
            (this.currentSource_ = null)),
            this.cleanupAutoTextTracks(),
            this.sourceHandler_ &&
              (this.sourceHandler_.dispose && this.sourceHandler_.dispose(),
              (this.sourceHandler_ = null));
        });
    }),
    f.registerComponent("Tech", _),
    _.registerTech("Tech", _),
    (_.defaultTechOrder_ = []);
  const ds = {},
    hs = {},
    us = {};
  function cs(e, t, i) {
    e.setTimeout(
      () =>
        (function i(s = {}, e = [], r, n, a = [], o = !1) {
          const [t, ...l] = e;
          if ("string" == typeof t) i(s, ds[t], r, n, a, o);
          else if (t) {
            const d = _s(n, t);
            if (!d.setSource) return a.push(d), i(s, l, r, n, a, o);
            d.setSource(Object.assign({}, s), function (e, t) {
              if (e) return i(s, l, r, n, a, o);
              a.push(d), i(t, s.type === t.type ? l : ds[t.type], r, n, a, o);
            });
          } else
            l.length
              ? i(s, l, r, n, a, o)
              : o
              ? r(s, a)
              : i(s, ds["*"], r, n, a, !0);
        })(t, ds[t.type], i, e),
      1
    );
  }
  function ps(e, t, i, s = null) {
    var r = "call" + g(i),
      r = e.reduce(ys(r), s),
      s = r === us,
      t = s ? null : t[i](r),
      n = e,
      a = i,
      o = t,
      l = s;
    for (let e = n.length - 1; 0 <= e; e--) {
      var d = n[e];
      d[a] && d[a](l, o);
    }
    return t;
  }
  const ms = {
      buffered: 1,
      currentTime: 1,
      duration: 1,
      muted: 1,
      played: 1,
      paused: 1,
      seekable: 1,
      volume: 1,
      ended: 1,
    },
    gs = { setCurrentTime: 1, setMuted: 1, setVolume: 1 },
    fs = { play: 1, pause: 1 };
  function ys(i) {
    return (e, t) => (e === us ? us : t[i] ? t[i](e) : e);
  }
  function _s(e, t) {
    var i = hs[e.id()];
    let s = null;
    if (null == i) (s = t(e)), (hs[e.id()] = [[t, s]]);
    else {
      for (let e = 0; e < i.length; e++) {
        var [r, n] = i[e];
        r === t && (s = n);
      }
      null === s && ((s = t(e)), i.push([t, s]));
    }
    return s;
  }
  function vs(e) {
    if (Array.isArray(e)) {
      let t = [];
      e.forEach(function (e) {
        (e = vs(e)), Array.isArray(e) ? (t = t.concat(e)) : K(e) && t.push(e);
      }),
        (e = t);
    } else e = "string" == typeof e && e.trim() ? [Ss({ src: e })] : K(e) && "string" == typeof e.src && e.src && e.src.trim() ? [Ss(e)] : [];
    return e;
  }
  const bs = {
      opus: "video/ogg",
      ogv: "video/ogg",
      mp4: "video/mp4",
      mov: "video/mp4",
      m4v: "video/mp4",
      mkv: "video/x-matroska",
      m4a: "audio/mp4",
      mp3: "audio/mpeg",
      aac: "audio/aac",
      caf: "audio/x-caf",
      flac: "audio/flac",
      oga: "audio/ogg",
      wav: "audio/wav",
      m3u8: "application/x-mpegURL",
      mpd: "application/dash+xml",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      gif: "image/gif",
      png: "image/png",
      svg: "image/svg+xml",
      webp: "image/webp",
    },
    Ts = function (e = "") {
      e = hi(e);
      return bs[e.toLowerCase()] || "";
    };
  function Ss(e) {
    var t;
    return e.type || ((t = Ts(e.src)) && (e.type = t)), e;
  }
  class ws extends f {
    constructor(s, e, t) {
      if (
        (super(s, h({ createEl: !1 }, e), t),
        e.playerOptions.sources && 0 !== e.playerOptions.sources.length)
      )
        s.src(e.playerOptions.sources);
      else
        for (let t = 0, i = e.playerOptions.techOrder; t < i.length; t++) {
          var r = g(i[t]);
          let e = _.getTech(r);
          if ((e = r ? e : f.getComponent(r)) && e.isSupported()) {
            s.loadTech_(r);
            break;
          }
        }
    }
  }
  f.registerComponent("MediaLoader", ws);
  class Es extends f {
    constructor(e, t) {
      super(e, t),
        this.options_.controlText &&
          this.controlText(this.options_.controlText),
        (this.handleMouseOver_ = (e) => this.handleMouseOver(e)),
        (this.handleMouseOut_ = (e) => this.handleMouseOut(e)),
        (this.handleClick_ = (e) => this.handleClick(e)),
        (this.handleKeyDown_ = (e) => this.handleKeyDown(e)),
        this.emitTapEvents(),
        this.enable();
    }
    createEl(e = "div", t = {}, i = {}) {
      (t = Object.assign({ className: this.buildCSSClass(), tabIndex: 0 }, t)),
        "button" === e &&
          d.error(
            `Creating a ClickableComponent with an HTML element of ${e} is not supported; use a Button instead.`
          ),
        (i = Object.assign({ role: "button" }, i)),
        (this.tabIndex_ = t.tabIndex);
      e = o(e, t, i);
      return (
        e.appendChild(
          o(
            "span",
            { className: "vjs-icon-placeholder" },
            { "aria-hidden": !0 }
          )
        ),
        this.createControlTextEl(e),
        e
      );
    }
    dispose() {
      (this.controlTextEl_ = null), super.dispose();
    }
    createControlTextEl(e) {
      return (
        (this.controlTextEl_ = o(
          "span",
          { className: "vjs-control-text" },
          { "aria-live": "polite" }
        )),
        e && e.appendChild(this.controlTextEl_),
        this.controlText(this.controlText_, e),
        this.controlTextEl_
      );
    }
    controlText(e, t = this.el()) {
      if (void 0 === e) return this.controlText_ || "Need Text";
      var i = this.localize(e);
      (this.controlText_ = e),
        Se(this.controlTextEl_, i),
        this.nonIconControl ||
          this.player_.options_.noUITitleAttributes ||
          t.setAttribute("title", i);
    }
    buildCSSClass() {
      return "vjs-control vjs-button " + super.buildCSSClass();
    }
    enable() {
      this.enabled_ ||
        ((this.enabled_ = !0),
        this.removeClass("vjs-disabled"),
        this.el_.setAttribute("aria-disabled", "false"),
        "undefined" != typeof this.tabIndex_ &&
          this.el_.setAttribute("tabIndex", this.tabIndex_),
        this.on(["tap", "click"], this.handleClick_),
        this.on("keydown", this.handleKeyDown_));
    }
    disable() {
      (this.enabled_ = !1),
        this.addClass("vjs-disabled"),
        this.el_.setAttribute("aria-disabled", "true"),
        "undefined" != typeof this.tabIndex_ &&
          this.el_.removeAttribute("tabIndex"),
        this.off("mouseover", this.handleMouseOver_),
        this.off("mouseout", this.handleMouseOut_),
        this.off(["tap", "click"], this.handleClick_),
        this.off("keydown", this.handleKeyDown_);
    }
    handleLanguagechange() {
      this.controlText(this.controlText_);
    }
    handleClick(e) {
      this.options_.clickHandler &&
        this.options_.clickHandler.call(this, arguments);
    }
    handleKeyDown(e) {
      r.isEventKey(e, "Space") || r.isEventKey(e, "Enter")
        ? (e.preventDefault(), e.stopPropagation(), this.trigger("click"))
        : super.handleKeyDown(e);
    }
  }
  f.registerComponent("ClickableComponent", Es);
  class Cs extends Es {
    constructor(e, t) {
      super(e, t),
        this.update(),
        (this.update_ = (e) => this.update(e)),
        e.on("posterchange", this.update_);
    }
    dispose() {
      this.player().off("posterchange", this.update_), super.dispose();
    }
    createEl() {
      return o(
        "picture",
        { className: "vjs-poster", tabIndex: -1 },
        {},
        o(
          "img",
          { loading: "lazy", crossOrigin: this.crossOrigin() },
          { alt: "" }
        )
      );
    }
    crossOrigin(e) {
      if ("undefined" == typeof e)
        return this.el_
          ? this.el_.querySelector("img").crossOrigin
          : this.player_.tech_ && this.player_.tech_.isReady_
          ? this.player_.crossOrigin()
          : this.player_.options_.crossOrigin ||
            this.player_.options_.crossorigin ||
            null;
      null !== e && "anonymous" !== e && "use-credentials" !== e
        ? this.player_.log.warn(
            `crossOrigin must be null,  "anonymous" or "use-credentials", given "${e}"`
          )
        : (this.el_.querySelector("img").crossOrigin = e);
    }
    update(e) {
      var t = this.player().poster();
      this.setSrc(t), t ? this.show() : this.hide();
    }
    setSrc(e) {
      this.el_.querySelector("img").src = e;
    }
    handleClick(e) {
      this.player_.controls() &&
        (this.player_.tech(!0) && this.player_.tech(!0).focus(),
        this.player_.paused() ? Wt(this.player_.play()) : this.player_.pause());
    }
  }
  (Cs.prototype.crossorigin = Cs.prototype.crossOrigin),
    f.registerComponent("PosterImage", Cs);
  const ks = {
    monospace: "monospace",
    sansSerif: "sans-serif",
    serif: "serif",
    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
    monospaceSerif: '"Courier New", monospace',
    proportionalSansSerif: "sans-serif",
    proportionalSerif: "serif",
    casual: '"Comic Sans MS", Impact, fantasy',
    script: '"Monotype Corsiva", cursive',
    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif',
  };
  function Is(e, t) {
    let i;
    if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
    else {
      if (7 !== e.length)
        throw new Error(
          "Invalid color code provided, " +
            e +
            "; must be formatted as e.g. #f0e or #f604e2."
        );
      i = e.slice(1);
    }
    return (
      "rgba(" +
      parseInt(i.slice(0, 2), 16) +
      "," +
      parseInt(i.slice(2, 4), 16) +
      "," +
      parseInt(i.slice(4, 6), 16) +
      "," +
      t +
      ")"
    );
  }
  function xs(e, t, i) {
    try {
      e.style[t] = i;
    } catch (e) {}
  }
  class As extends f {
    constructor(s, e, t) {
      super(s, e, t);
      const r = (e) => this.updateDisplay(e);
      s.on("loadstart", (e) => this.toggleDisplay(e)),
        s.on("texttrackchange", r),
        s.on("loadedmetadata", (e) => this.preselectTrack(e)),
        s.ready(
          m(this, function () {
            if (s.tech_ && s.tech_.featuresNativeTextTracks) this.hide();
            else {
              s.on("fullscreenchange", r), s.on("playerresize", r);
              const e = window.screen.orientation || window,
                i = window.screen.orientation ? "change" : "orientationchange";
              e.addEventListener(i, r),
                s.on("dispose", () => e.removeEventListener(i, r));
              var t = this.options_.playerOptions.tracks || [];
              for (let e = 0; e < t.length; e++)
                this.player_.addRemoteTextTrack(t[e], !0);
              this.preselectTrack();
            }
          })
        );
    }
    preselectTrack() {
      var t = { captions: 1, subtitles: 1 },
        i = this.player_.textTracks(),
        s = this.player_.cache_.selectedLanguage;
      let r, n, a;
      for (let e = 0; e < i.length; e++) {
        var o = i[e];
        s && s.enabled && s.language && s.language === o.language && o.kind in t
          ? (a = (o.kind !== s.kind && a) || o)
          : s && !s.enabled
          ? ((a = null), (r = null), (n = null))
          : o.default &&
            ("descriptions" !== o.kind || r
              ? o.kind in t && !n && (n = o)
              : (r = o));
      }
      a
        ? (a.mode = "showing")
        : n
        ? (n.mode = "showing")
        : r && (r.mode = "showing");
    }
    toggleDisplay() {
      this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks
        ? this.hide()
        : this.show();
    }
    createEl() {
      return super.createEl(
        "div",
        { className: "vjs-text-track-display" },
        { translate: "yes", "aria-live": "off", "aria-atomic": "true" }
      );
    }
    clearDisplay() {
      "function" == typeof window.WebVTT &&
        window.WebVTT.processCues(window, [], this.el_);
    }
    updateDisplay() {
      var s = this.player_.textTracks(),
        e = this.options_.allowMultipleShowingTracks;
      if ((this.clearDisplay(), e)) {
        var t = [];
        for (let e = 0; e < s.length; ++e) {
          var i = s[e];
          "showing" === i.mode && t.push(i);
        }
        this.updateForTrack(t);
      } else {
        let e = null,
          t = null,
          i = s.length;
        for (; i--; ) {
          var r = s[i];
          "showing" === r.mode &&
            ("descriptions" === r.kind ? (e = r) : (t = r));
        }
        t
          ? ("off" !== this.getAttribute("aria-live") &&
              this.setAttribute("aria-live", "off"),
            this.updateForTrack(t))
          : e &&
            ("assertive" !== this.getAttribute("aria-live") &&
              this.setAttribute("aria-live", "assertive"),
            this.updateForTrack(e));
      }
    }
    updateDisplayState(e) {
      var t = this.player_.textTrackSettings.getValues(),
        i = e.activeCues;
      let s = i.length;
      for (; s--; ) {
        var r,
          n = i[s];
        n &&
          ((n = n.displayState),
          t.color && (n.firstChild.style.color = t.color),
          t.textOpacity &&
            xs(n.firstChild, "color", Is(t.color || "#fff", t.textOpacity)),
          t.backgroundColor &&
            (n.firstChild.style.backgroundColor = t.backgroundColor),
          t.backgroundOpacity &&
            xs(
              n.firstChild,
              "backgroundColor",
              Is(t.backgroundColor || "#000", t.backgroundOpacity)
            ),
          t.windowColor &&
            (t.windowOpacity
              ? xs(n, "backgroundColor", Is(t.windowColor, t.windowOpacity))
              : (n.style.backgroundColor = t.windowColor)),
          t.edgeStyle &&
            ("dropshadow" === t.edgeStyle
              ? (n.firstChild.style.textShadow =
                  "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222")
              : "raised" === t.edgeStyle
              ? (n.firstChild.style.textShadow =
                  "1px 1px #222, 2px 2px #222, 3px 3px #222")
              : "depressed" === t.edgeStyle
              ? (n.firstChild.style.textShadow =
                  "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222")
              : "uniform" === t.edgeStyle &&
                (n.firstChild.style.textShadow =
                  "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")),
          t.fontPercent &&
            1 !== t.fontPercent &&
            ((r = window.parseFloat(n.style.fontSize)),
            (n.style.fontSize = r * t.fontPercent + "px"),
            (n.style.height = "auto"),
            (n.style.top = "auto")),
          t.fontFamily) &&
          "default" !== t.fontFamily &&
          ("small-caps" === t.fontFamily
            ? (n.firstChild.style.fontVariant = "small-caps")
            : (n.firstChild.style.fontFamily = ks[t.fontFamily]));
      }
    }
    updateForTrack(i) {
      if (
        (Array.isArray(i) || (i = [i]),
        "function" == typeof window.WebVTT && !i.every((e) => !e.activeCues))
      ) {
        var t = [];
        for (let e = 0; e < i.length; ++e) {
          var s = i[e];
          for (let e = 0; e < s.activeCues.length; ++e) t.push(s.activeCues[e]);
        }
        window.WebVTT.processCues(window, t, this.el_);
        for (let t = 0; t < i.length; ++t) {
          var r = i[t];
          for (let e = 0; e < r.activeCues.length; ++e) {
            var n = r.activeCues[e].displayState;
            Ce(
              n,
              "vjs-text-track-cue",
              "vjs-text-track-cue-" + (r.language || t)
            ),
              r.language && Oe(n, "lang", r.language);
          }
          this.player_.textTrackSettings && this.updateDisplayState(r);
        }
      }
    }
  }
  f.registerComponent("TextTrackDisplay", As);
  class Ps extends f {
    createEl() {
      var e = this.player_.isAudio(),
        e = this.localize(e ? "Audio Player" : "Video Player"),
        e = o("span", {
          className: "vjs-control-text",
          textContent: this.localize("{1} is loading.", [e]),
        }),
        t = super.createEl("div", {
          className: "vjs-loading-spinner",
          dir: "ltr",
        });
      return t.appendChild(e), t;
    }
  }
  f.registerComponent("LoadingSpinner", Ps);
  class Os extends Es {
    createEl(e, t = {}, i = {}) {
      t = o(
        "button",
        (t = Object.assign({ className: this.buildCSSClass() }, t)),
        (i = Object.assign({ type: "button" }, i))
      );
      return (
        t.appendChild(
          o(
            "span",
            { className: "vjs-icon-placeholder" },
            { "aria-hidden": !0 }
          )
        ),
        this.createControlTextEl(t),
        t
      );
    }
    addChild(e, t = {}) {
      var i = this.constructor.name;
      return (
        d.warn(
          `Adding an actionable (user controllable) child to a Button (${i}) is not supported; use a ClickableComponent instead.`
        ),
        f.prototype.addChild.call(this, e, t)
      );
    }
    enable() {
      super.enable(), this.el_.removeAttribute("disabled");
    }
    disable() {
      super.disable(), this.el_.setAttribute("disabled", "disabled");
    }
    handleKeyDown(e) {
      r.isEventKey(e, "Space") || r.isEventKey(e, "Enter")
        ? e.stopPropagation()
        : super.handleKeyDown(e);
    }
  }
  f.registerComponent("Button", Os);
  class Ds extends Os {
    constructor(e, t) {
      super(e, t),
        (this.mouseused_ = !1),
        this.on("mousedown", (e) => this.handleMouseDown(e));
    }
    buildCSSClass() {
      return "vjs-big-play-button";
    }
    handleClick(e) {
      var t = this.player_.play();
      if (this.mouseused_ && e.clientX && e.clientY)
        Wt(t), this.player_.tech(!0) && this.player_.tech(!0).focus();
      else {
        var e = this.player_.getChild("controlBar");
        const i = e && e.getChild("playToggle");
        i
          ? ((e = () => i.focus()),
            $t(t) ? t.then(e, () => {}) : this.setTimeout(e, 1))
          : this.player_.tech(!0).focus();
      }
    }
    handleKeyDown(e) {
      (this.mouseused_ = !1), super.handleKeyDown(e);
    }
    handleMouseDown(e) {
      this.mouseused_ = !0;
    }
  }
  (Ds.prototype.controlText_ = "Play Video"),
    f.registerComponent("BigPlayButton", Ds);
  Os;
  f.registerComponent(
    "CloseButton",
    class extends Os {
      constructor(e, t) {
        super(e, t),
          this.controlText((t && t.controlText) || this.localize("Close"));
      }
      buildCSSClass() {
        return "vjs-close-button " + super.buildCSSClass();
      }
      handleClick(e) {
        this.trigger({ type: "close", bubbles: !1 });
      }
      handleKeyDown(e) {
        r.isEventKey(e, "Esc")
          ? (e.preventDefault(), e.stopPropagation(), this.trigger("click"))
          : super.handleKeyDown(e);
      }
    }
  );
  class Ls extends Os {
    constructor(e, t = {}) {
      super(e, t),
        (t.replay = void 0 === t.replay || t.replay),
        this.on(e, "play", (e) => this.handlePlay(e)),
        this.on(e, "pause", (e) => this.handlePause(e)),
        t.replay && this.on(e, "ended", (e) => this.handleEnded(e));
    }
    buildCSSClass() {
      return "vjs-play-control " + super.buildCSSClass();
    }
    handleClick(e) {
      this.player_.paused() ? Wt(this.player_.play()) : this.player_.pause();
    }
    handleSeeked(e) {
      this.removeClass("vjs-ended"),
        this.player_.paused() ? this.handlePause(e) : this.handlePlay(e);
    }
    handlePlay(e) {
      this.removeClass("vjs-ended", "vjs-paused"),
        this.addClass("vjs-playing"),
        this.controlText("Pause");
    }
    handlePause(e) {
      this.removeClass("vjs-playing"),
        this.addClass("vjs-paused"),
        this.controlText("Play");
    }
    handleEnded(e) {
      this.removeClass("vjs-playing"),
        this.addClass("vjs-ended"),
        this.controlText("Replay"),
        this.one(this.player_, "seeked", (e) => this.handleSeeked(e));
    }
  }
  (Ls.prototype.controlText_ = "Play"), f.registerComponent("PlayToggle", Ls);
  class Ns extends f {
    constructor(e, t) {
      super(e, t),
        this.on(e, ["timeupdate", "ended"], (e) => this.updateContent(e)),
        this.updateTextNode_();
    }
    createEl() {
      var e = this.buildCSSClass(),
        t = super.createEl("div", {
          className: e + " vjs-time-control vjs-control",
        }),
        i = o(
          "span",
          {
            className: "vjs-control-text",
            textContent: this.localize(this.labelText_) + "Â ",
          },
          { role: "presentation" }
        );
      return (
        t.appendChild(i),
        (this.contentEl_ = o(
          "span",
          { className: e + "-display" },
          { "aria-live": "off", role: "presentation" }
        )),
        t.appendChild(this.contentEl_),
        t
      );
    }
    dispose() {
      (this.contentEl_ = null), (this.textNode_ = null), super.dispose();
    }
    updateTextNode_(e = 0) {
      (e = jt(e)),
        this.formattedTime_ !== e &&
          ((this.formattedTime_ = e),
          this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", () => {
            if (this.contentEl_) {
              let e = this.textNode_;
              e &&
                this.contentEl_.firstChild !== e &&
                ((e = null),
                d.warn(
                  "TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead."
                )),
                (this.textNode_ = document.createTextNode(this.formattedTime_)),
                this.textNode_ &&
                  (e
                    ? this.contentEl_.replaceChild(this.textNode_, e)
                    : this.contentEl_.appendChild(this.textNode_));
            }
          }));
    }
    updateContent(e) {}
  }
  (Ns.prototype.labelText_ = "Time"),
    (Ns.prototype.controlText_ = "Time"),
    f.registerComponent("TimeDisplay", Ns);
  class Ms extends Ns {
    buildCSSClass() {
      return "vjs-current-time";
    }
    updateContent(e) {
      let t;
      (t = this.player_.ended()
        ? this.player_.duration()
        : this.player_.scrubbing()
        ? this.player_.getCache().currentTime
        : this.player_.currentTime()),
        this.updateTextNode_(t);
    }
  }
  (Ms.prototype.labelText_ = "Current Time"),
    (Ms.prototype.controlText_ = "Current Time"),
    f.registerComponent("CurrentTimeDisplay", Ms);
  class Rs extends Ns {
    constructor(e, t) {
      super(e, t);
      t = (e) => this.updateContent(e);
      this.on(e, "durationchange", t),
        this.on(e, "loadstart", t),
        this.on(e, "loadedmetadata", t);
    }
    buildCSSClass() {
      return "vjs-duration";
    }
    updateContent(e) {
      var t = this.player_.duration();
      this.updateTextNode_(t);
    }
  }
  (Rs.prototype.labelText_ = "Duration"),
    (Rs.prototype.controlText_ = "Duration"),
    f.registerComponent("DurationDisplay", Rs);
  class Us extends f {
    createEl() {
      var e = super.createEl(
          "div",
          { className: "vjs-time-control vjs-time-divider" },
          { "aria-hidden": !0 }
        ),
        t = super.createEl("div"),
        i = super.createEl("span", { textContent: "/" });
      return t.appendChild(i), e.appendChild(t), e;
    }
  }
  f.registerComponent("TimeDivider", Us);
  class Bs extends Ns {
    constructor(e, t) {
      super(e, t), this.on(e, "durationchange", (e) => this.updateContent(e));
    }
    buildCSSClass() {
      return "vjs-remaining-time";
    }
    createEl() {
      var e = super.createEl();
      return (
        !1 !== this.options_.displayNegative &&
          e.insertBefore(
            o("span", {}, { "aria-hidden": !0 }, "-"),
            this.contentEl_
          ),
        e
      );
    }
    updateContent(e) {
      if ("number" == typeof this.player_.duration()) {
        let e;
        (e = this.player_.ended()
          ? 0
          : this.player_.remainingTimeDisplay
          ? this.player_.remainingTimeDisplay()
          : this.player_.remainingTime()),
          this.updateTextNode_(e);
      }
    }
  }
  (Bs.prototype.labelText_ = "Remaining Time"),
    (Bs.prototype.controlText_ = "Remaining Time"),
    f.registerComponent("RemainingTimeDisplay", Bs);
  class Fs extends f {
    constructor(e, t) {
      super(e, t),
        this.updateShowing(),
        this.on(this.player(), "durationchange", (e) => this.updateShowing(e));
    }
    createEl() {
      var e = super.createEl("div", {
        className: "vjs-live-control vjs-control",
      });
      return (
        (this.contentEl_ = o(
          "div",
          { className: "vjs-live-display" },
          { "aria-live": "off" }
        )),
        this.contentEl_.appendChild(
          o("span", {
            className: "vjs-control-text",
            textContent: this.localize("Stream Type") + "Â ",
          })
        ),
        this.contentEl_.appendChild(
          document.createTextNode(this.localize("LIVE"))
        ),
        e.appendChild(this.contentEl_),
        e
      );
    }
    dispose() {
      (this.contentEl_ = null), super.dispose();
    }
    updateShowing(e) {
      this.player().duration() === 1 / 0 ? this.show() : this.hide();
    }
  }
  f.registerComponent("LiveDisplay", Fs);
  class js extends Os {
    constructor(e, t) {
      super(e, t),
        this.updateLiveEdgeStatus(),
        this.player_.liveTracker &&
          ((this.updateLiveEdgeStatusHandler_ = (e) =>
            this.updateLiveEdgeStatus(e)),
          this.on(
            this.player_.liveTracker,
            "liveedgechange",
            this.updateLiveEdgeStatusHandler_
          ));
    }
    createEl() {
      var e = super.createEl("button", {
        className: "vjs-seek-to-live-control vjs-control",
      });
      return (
        (this.textEl_ = o(
          "span",
          {
            className: "vjs-seek-to-live-text",
            textContent: this.localize("LIVE"),
          },
          { "aria-hidden": "true" }
        )),
        e.appendChild(this.textEl_),
        e
      );
    }
    updateLiveEdgeStatus() {
      !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge()
        ? (this.setAttribute("aria-disabled", !0),
          this.addClass("vjs-at-live-edge"),
          this.controlText("Seek to live, currently playing live"))
        : (this.setAttribute("aria-disabled", !1),
          this.removeClass("vjs-at-live-edge"),
          this.controlText("Seek to live, currently behind live"));
    }
    handleClick() {
      this.player_.liveTracker.seekToLiveEdge();
    }
    dispose() {
      this.player_.liveTracker &&
        this.off(
          this.player_.liveTracker,
          "liveedgechange",
          this.updateLiveEdgeStatusHandler_
        ),
        (this.textEl_ = null),
        super.dispose();
    }
  }
  function Hs(e, t, i) {
    return (e = Number(e)), Math.min(i, Math.max(t, isNaN(e) ? t : e));
  }
  (js.prototype.controlText_ = "Seek to live, currently playing live"),
    f.registerComponent("SeekToLive", js);
  ci = Object.freeze({ __proto__: null, clamp: Hs });
  class qs extends f {
    constructor(e, t) {
      super(e, t),
        (this.handleMouseDown_ = (e) => this.handleMouseDown(e)),
        (this.handleMouseUp_ = (e) => this.handleMouseUp(e)),
        (this.handleKeyDown_ = (e) => this.handleKeyDown(e)),
        (this.handleClick_ = (e) => this.handleClick(e)),
        (this.handleMouseMove_ = (e) => this.handleMouseMove(e)),
        (this.update_ = (e) => this.update(e)),
        (this.bar = this.getChild(this.options_.barName)),
        this.vertical(!!this.options_.vertical),
        this.enable();
    }
    enabled() {
      return this.enabled_;
    }
    enable() {
      this.enabled() ||
        (this.on("mousedown", this.handleMouseDown_),
        this.on("touchstart", this.handleMouseDown_),
        this.on("keydown", this.handleKeyDown_),
        this.on("click", this.handleClick_),
        this.on(this.player_, "controlsvisible", this.update),
        this.playerEvent &&
          this.on(this.player_, this.playerEvent, this.update),
        this.removeClass("disabled"),
        this.setAttribute("tabindex", 0),
        (this.enabled_ = !0));
    }
    disable() {
      var e;
      this.enabled() &&
        ((e = this.bar.el_.ownerDocument),
        this.off("mousedown", this.handleMouseDown_),
        this.off("touchstart", this.handleMouseDown_),
        this.off("keydown", this.handleKeyDown_),
        this.off("click", this.handleClick_),
        this.off(this.player_, "controlsvisible", this.update_),
        this.off(e, "mousemove", this.handleMouseMove_),
        this.off(e, "mouseup", this.handleMouseUp_),
        this.off(e, "touchmove", this.handleMouseMove_),
        this.off(e, "touchend", this.handleMouseUp_),
        this.removeAttribute("tabindex"),
        this.addClass("disabled"),
        this.playerEvent &&
          this.off(this.player_, this.playerEvent, this.update),
        (this.enabled_ = !1));
    }
    createEl(e, t = {}, i = {}) {
      return (
        (t.className = t.className + " vjs-slider"),
        (t = Object.assign({ tabIndex: 0 }, t)),
        (i = Object.assign(
          {
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
          },
          i
        )),
        super.createEl(e, t, i)
      );
    }
    handleMouseDown(e) {
      var t = this.bar.el_.ownerDocument;
      "mousedown" === e.type && e.preventDefault(),
        "touchstart" !== e.type || ae || e.preventDefault(),
        Le(),
        this.addClass("vjs-sliding"),
        this.trigger("slideractive"),
        this.on(t, "mousemove", this.handleMouseMove_),
        this.on(t, "mouseup", this.handleMouseUp_),
        this.on(t, "touchmove", this.handleMouseMove_),
        this.on(t, "touchend", this.handleMouseUp_),
        this.handleMouseMove(e, !0);
    }
    handleMouseMove(e) {}
    handleMouseUp() {
      var e = this.bar.el_.ownerDocument;
      Ne(),
        this.removeClass("vjs-sliding"),
        this.trigger("sliderinactive"),
        this.off(e, "mousemove", this.handleMouseMove_),
        this.off(e, "mouseup", this.handleMouseUp_),
        this.off(e, "touchmove", this.handleMouseMove_),
        this.off(e, "touchend", this.handleMouseUp_),
        this.update();
    }
    update() {
      if (this.el_ && this.bar) {
        const t = this.getProgress();
        return (
          t !== this.progress_ &&
            ((this.progress_ = t),
            this.requestNamedAnimationFrame("Slider#update", () => {
              var e = this.vertical() ? "height" : "width";
              this.bar.el().style[e] = (100 * t).toFixed(2) + "%";
            })),
          t
        );
      }
    }
    getProgress() {
      return Number(Hs(this.getPercent(), 0, 1).toFixed(4));
    }
    calculateDistance(e) {
      e = Ue(this.el_, e);
      return this.vertical() ? e.y : e.x;
    }
    handleKeyDown(e) {
      r.isEventKey(e, "Left") || r.isEventKey(e, "Down")
        ? (e.preventDefault(), e.stopPropagation(), this.stepBack())
        : r.isEventKey(e, "Right") || r.isEventKey(e, "Up")
        ? (e.preventDefault(), e.stopPropagation(), this.stepForward())
        : super.handleKeyDown(e);
    }
    handleClick(e) {
      e.stopPropagation(), e.preventDefault();
    }
    vertical(e) {
      if (void 0 === e) return this.vertical_ || !1;
      (this.vertical_ = !!e),
        this.vertical_
          ? this.addClass("vjs-slider-vertical")
          : this.addClass("vjs-slider-horizontal");
    }
  }
  f.registerComponent("Slider", qs);
  const Vs = (e, t) => Hs((e / t) * 100, 0, 100).toFixed(2) + "%";
  class $s extends f {
    constructor(e, t) {
      super(e, t),
        (this.partEls_ = []),
        this.on(e, "progress", (e) => this.update(e));
    }
    createEl() {
      var e = super.createEl("div", { className: "vjs-load-progress" }),
        t = o("span", { className: "vjs-control-text" }),
        i = o("span", { textContent: this.localize("Loaded") }),
        s = document.createTextNode(": ");
      return (
        (this.percentageEl_ = o("span", {
          className: "vjs-control-text-loaded-percentage",
          textContent: "0%",
        })),
        e.appendChild(t),
        t.appendChild(i),
        t.appendChild(s),
        t.appendChild(this.percentageEl_),
        e
      );
    }
    dispose() {
      (this.partEls_ = null), (this.percentageEl_ = null), super.dispose();
    }
    update(e) {
      this.requestNamedAnimationFrame("LoadProgressBar#update", () => {
        var e = this.player_.liveTracker,
          i = this.player_.buffered(),
          e = e && e.isLive() ? e.seekableEnd() : this.player_.duration(),
          s = this.player_.bufferedEnd(),
          r = this.partEls_,
          e = Vs(s, e);
        this.percent_ !== e &&
          ((this.el_.style.width = e),
          Se(this.percentageEl_, e),
          (this.percent_ = e));
        for (let t = 0; t < i.length; t++) {
          var n = i.start(t),
            a = i.end(t);
          let e = r[t];
          e || ((e = this.el_.appendChild(o())), (r[t] = e)),
            (e.dataset.start === n && e.dataset.end === a) ||
              ((e.dataset.start = n),
              (e.dataset.end = a),
              (e.style.left = Vs(n, s)),
              (e.style.width = Vs(a - n, s)));
        }
        for (let e = r.length; e > i.length; e--)
          this.el_.removeChild(r[e - 1]);
        r.length = i.length;
      });
    }
  }
  f.registerComponent("LoadProgressBar", $s);
  class Ws extends f {
    constructor(e, t) {
      super(e, t), (this.update = ct(m(this, this.update), 30));
    }
    createEl() {
      return super.createEl(
        "div",
        { className: "vjs-time-tooltip" },
        { "aria-hidden": "true" }
      );
    }
    update(t, i, s) {
      var r = Re(this.el_),
        n = Me(this.player_.el()),
        i = t.width * i;
      if (n && r) {
        var a = t.left - n.left + i,
          i = t.width - i + (n.right - t.right);
        let e = r.width / 2;
        a < e ? (e += e - a) : i < e && (e = i),
          e < 0 ? (e = 0) : e > r.width && (e = r.width),
          (e = Math.round(e)),
          (this.el_.style.right = `-${e}px`),
          this.write(s);
      }
    }
    write(e) {
      Se(this.el_, e);
    }
    updateTime(r, n, a, o) {
      this.requestNamedAnimationFrame("TimeTooltip#updateTime", () => {
        let e;
        var t,
          i,
          s = this.player_.duration();
        (e =
          this.player_.liveTracker && this.player_.liveTracker.isLive()
            ? ((i = (t = this.player_.liveTracker.liveWindow()) - n * t) < 1
                ? ""
                : "-") + jt(i, t)
            : jt(a, s)),
          this.update(r, n, e),
          o && o();
      });
    }
  }
  f.registerComponent("TimeTooltip", Ws);
  class Gs extends f {
    constructor(e, t) {
      super(e, t), (this.update = ct(m(this, this.update), 30));
    }
    createEl() {
      return super.createEl(
        "div",
        { className: "vjs-play-progress vjs-slider-bar" },
        { "aria-hidden": "true" }
      );
    }
    update(e, t) {
      var i,
        s = this.getChild("timeTooltip");
      s &&
        ((i = this.player_.scrubbing()
          ? this.player_.getCache().currentTime
          : this.player_.currentTime()),
        s.updateTime(e, t, i));
    }
  }
  (Gs.prototype.options_ = { children: [] }),
    u || te || Gs.prototype.options_.children.push("timeTooltip"),
    f.registerComponent("PlayProgressBar", Gs);
  class zs extends f {
    constructor(e, t) {
      super(e, t), (this.update = ct(m(this, this.update), 30));
    }
    createEl() {
      return super.createEl("div", { className: "vjs-mouse-display" });
    }
    update(e, t) {
      var i = t * this.player_.duration();
      this.getChild("timeTooltip").updateTime(e, t, i, () => {
        this.el_.style.left = e.width * t + "px";
      });
    }
  }
  (zs.prototype.options_ = { children: ["timeTooltip"] }),
    f.registerComponent("MouseTimeDisplay", zs);
  class Xs extends qs {
    constructor(e, t) {
      super(e, t), this.setEventHandlers_();
    }
    setEventHandlers_() {
      (this.update_ = m(this, this.update)),
        (this.update = ct(this.update_, 30)),
        this.on(
          this.player_,
          ["ended", "durationchange", "timeupdate"],
          this.update
        ),
        this.player_.liveTracker &&
          this.on(this.player_.liveTracker, "liveedgechange", this.update),
        (this.updateInterval = null),
        (this.enableIntervalHandler_ = (e) => this.enableInterval_(e)),
        (this.disableIntervalHandler_ = (e) => this.disableInterval_(e)),
        this.on(this.player_, ["playing"], this.enableIntervalHandler_),
        this.on(
          this.player_,
          ["ended", "pause", "waiting"],
          this.disableIntervalHandler_
        ),
        "hidden" in document &&
          "visibilityState" in document &&
          this.on(document, "visibilitychange", this.toggleVisibility_);
    }
    toggleVisibility_(e) {
      "hidden" === document.visibilityState
        ? (this.cancelNamedAnimationFrame("SeekBar#update"),
          this.cancelNamedAnimationFrame("Slider#update"),
          this.disableInterval_(e))
        : (this.player_.ended() ||
            this.player_.paused() ||
            this.enableInterval_(),
          this.update());
    }
    enableInterval_() {
      this.updateInterval ||
        (this.updateInterval = this.setInterval(this.update, 30));
    }
    disableInterval_(e) {
      (this.player_.liveTracker &&
        this.player_.liveTracker.isLive() &&
        e &&
        "ended" !== e.type) ||
        (this.updateInterval &&
          (this.clearInterval(this.updateInterval),
          (this.updateInterval = null)));
    }
    createEl() {
      return super.createEl(
        "div",
        { className: "vjs-progress-holder" },
        { "aria-label": this.localize("Progress Bar") }
      );
    }
    update(e) {
      if ("hidden" !== document.visibilityState) {
        const s = super.update();
        return (
          this.requestNamedAnimationFrame("SeekBar#update", () => {
            var e = this.player_.ended()
                ? this.player_.duration()
                : this.getCurrentTime_(),
              t = this.player_.liveTracker;
            let i = this.player_.duration();
            t && t.isLive() && (i = this.player_.liveTracker.liveCurrentTime()),
              this.percent_ !== s &&
                (this.el_.setAttribute("aria-valuenow", (100 * s).toFixed(2)),
                (this.percent_ = s)),
              (this.currentTime_ === e && this.duration_ === i) ||
                (this.el_.setAttribute(
                  "aria-valuetext",
                  this.localize(
                    "progress bar timing: currentTime={1} duration={2}",
                    [jt(e, i), jt(i, i)],
                    "{1} of {2}"
                  )
                ),
                (this.currentTime_ = e),
                (this.duration_ = i)),
              this.bar && this.bar.update(Me(this.el()), this.getProgress());
          }),
          s
        );
      }
    }
    userSeek_(e) {
      this.player_.liveTracker &&
        this.player_.liveTracker.isLive() &&
        this.player_.liveTracker.nextSeekedFromUser(),
        this.player_.currentTime(e);
    }
    getCurrentTime_() {
      return this.player_.scrubbing()
        ? this.player_.getCache().currentTime
        : this.player_.currentTime();
    }
    getPercent() {
      var e = this.getCurrentTime_();
      let t;
      var i = this.player_.liveTracker;
      return (
        i && i.isLive()
          ? ((t = (e - i.seekableStart()) / i.liveWindow()),
            i.atLiveEdge() && (t = 1))
          : (t = e / this.player_.duration()),
        t
      );
    }
    handleMouseDown(e) {
      Ve(e) &&
        (e.stopPropagation(),
        (this.videoWasPlaying = !this.player_.paused()),
        this.player_.pause(),
        super.handleMouseDown(e));
    }
    handleMouseMove(t, i = !1) {
      if (Ve(t)) {
        i || this.player_.scrubbing() || this.player_.scrubbing(!0);
        let e;
        (i = this.calculateDistance(t)), (t = this.player_.liveTracker);
        if (t && t.isLive()) {
          if (0.99 <= i) return void t.seekToLiveEdge();
          var s = t.seekableStart(),
            r = t.liveCurrentTime();
          if (
            (e =
              (e = (e = s + i * t.liveWindow()) >= r ? r : e) <= s
                ? s + 0.1
                : e) ===
            1 / 0
          )
            return;
        } else
          (e = i * this.player_.duration()) === this.player_.duration() &&
            (e -= 0.1);
        this.userSeek_(e);
      }
    }
    enable() {
      super.enable();
      var e = this.getChild("mouseTimeDisplay");
      e && e.show();
    }
    disable() {
      super.disable();
      var e = this.getChild("mouseTimeDisplay");
      e && e.hide();
    }
    handleMouseUp(e) {
      super.handleMouseUp(e),
        e && e.stopPropagation(),
        this.player_.scrubbing(!1),
        this.player_.trigger({
          type: "timeupdate",
          target: this,
          manuallyTriggered: !0,
        }),
        this.videoWasPlaying ? Wt(this.player_.play()) : this.update_();
    }
    stepForward() {
      this.userSeek_(this.player_.currentTime() + 5);
    }
    stepBack() {
      this.userSeek_(this.player_.currentTime() - 5);
    }
    handleAction(e) {
      this.player_.paused() ? this.player_.play() : this.player_.pause();
    }
    handleKeyDown(e) {
      var t,
        i = this.player_.liveTracker;
      r.isEventKey(e, "Space") || r.isEventKey(e, "Enter")
        ? (e.preventDefault(), e.stopPropagation(), this.handleAction(e))
        : r.isEventKey(e, "Home")
        ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(0))
        : r.isEventKey(e, "End")
        ? (e.preventDefault(),
          e.stopPropagation(),
          i && i.isLive()
            ? this.userSeek_(i.liveCurrentTime())
            : this.userSeek_(this.player_.duration()))
        : /^[0-9]$/.test(r(e))
        ? (e.preventDefault(),
          e.stopPropagation(),
          (t = (10 * (r.codes[r(e)] - r.codes[0])) / 100),
          i && i.isLive()
            ? this.userSeek_(i.seekableStart() + i.liveWindow() * t)
            : this.userSeek_(this.player_.duration() * t))
        : r.isEventKey(e, "PgDn")
        ? (e.preventDefault(),
          e.stopPropagation(),
          this.userSeek_(this.player_.currentTime() - 60))
        : r.isEventKey(e, "PgUp")
        ? (e.preventDefault(),
          e.stopPropagation(),
          this.userSeek_(this.player_.currentTime() + 60))
        : super.handleKeyDown(e);
    }
    dispose() {
      this.disableInterval_(),
        this.off(
          this.player_,
          ["ended", "durationchange", "timeupdate"],
          this.update
        ),
        this.player_.liveTracker &&
          this.off(this.player_.liveTracker, "liveedgechange", this.update),
        this.off(this.player_, ["playing"], this.enableIntervalHandler_),
        this.off(
          this.player_,
          ["ended", "pause", "waiting"],
          this.disableIntervalHandler_
        ),
        "hidden" in document &&
          "visibilityState" in document &&
          this.off(document, "visibilitychange", this.toggleVisibility_),
        super.dispose();
    }
  }
  (Xs.prototype.options_ = {
    children: ["loadProgressBar", "playProgressBar"],
    barName: "playProgressBar",
  }),
    u || te || Xs.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"),
    f.registerComponent("SeekBar", Xs);
  class Ks extends f {
    constructor(e, t) {
      super(e, t),
        (this.handleMouseMove = ct(m(this, this.handleMouseMove), 30)),
        (this.throttledHandleMouseSeek = ct(m(this, this.handleMouseSeek), 30)),
        (this.handleMouseUpHandler_ = (e) => this.handleMouseUp(e)),
        (this.handleMouseDownHandler_ = (e) => this.handleMouseDown(e)),
        this.enable();
    }
    createEl() {
      return super.createEl("div", {
        className: "vjs-progress-control vjs-control",
      });
    }
    handleMouseMove(e) {
      var t,
        i,
        s,
        r,
        n = this.getChild("seekBar");
      n &&
        ((t = n.getChild("playProgressBar")),
        (i = n.getChild("mouseTimeDisplay")),
        t || i) &&
        ((s = Re((r = n.el()))),
        (r = Hs((r = Ue(r, e).x), 0, 1)),
        i && i.update(s, r),
        t) &&
        t.update(s, n.getProgress());
    }
    handleMouseSeek(e) {
      var t = this.getChild("seekBar");
      t && t.handleMouseMove(e);
    }
    enabled() {
      return this.enabled_;
    }
    disable() {
      var e;
      this.children().forEach((e) => e.disable && e.disable()),
        this.enabled() &&
          (this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_),
          this.off(this.el_, "mousemove", this.handleMouseMove),
          this.removeListenersAddedOnMousedownAndTouchstart(),
          this.addClass("disabled"),
          (this.enabled_ = !1),
          this.player_.scrubbing()) &&
          ((e = this.getChild("seekBar")),
          this.player_.scrubbing(!1),
          e.videoWasPlaying) &&
          Wt(this.player_.play());
    }
    enable() {
      this.children().forEach((e) => e.enable && e.enable()),
        this.enabled() ||
          (this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_),
          this.on(this.el_, "mousemove", this.handleMouseMove),
          this.removeClass("disabled"),
          (this.enabled_ = !0));
    }
    removeListenersAddedOnMousedownAndTouchstart() {
      var e = this.el_.ownerDocument;
      this.off(e, "mousemove", this.throttledHandleMouseSeek),
        this.off(e, "touchmove", this.throttledHandleMouseSeek),
        this.off(e, "mouseup", this.handleMouseUpHandler_),
        this.off(e, "touchend", this.handleMouseUpHandler_);
    }
    handleMouseDown(e) {
      var t = this.el_.ownerDocument,
        i = this.getChild("seekBar");
      i && i.handleMouseDown(e),
        this.on(t, "mousemove", this.throttledHandleMouseSeek),
        this.on(t, "touchmove", this.throttledHandleMouseSeek),
        this.on(t, "mouseup", this.handleMouseUpHandler_),
        this.on(t, "touchend", this.handleMouseUpHandler_);
    }
    handleMouseUp(e) {
      var t = this.getChild("seekBar");
      t && t.handleMouseUp(e),
        this.removeListenersAddedOnMousedownAndTouchstart();
    }
  }
  (Ks.prototype.options_ = { children: ["seekBar"] }),
    f.registerComponent("ProgressControl", Ks);
  class Ys extends Os {
    constructor(e, t) {
      super(e, t),
        this.on(e, ["enterpictureinpicture", "leavepictureinpicture"], (e) =>
          this.handlePictureInPictureChange(e)
        ),
        this.on(e, ["disablepictureinpicturechanged", "loadedmetadata"], (e) =>
          this.handlePictureInPictureEnabledChange(e)
        ),
        this.on(
          e,
          ["loadedmetadata", "audioonlymodechange", "audiopostermodechange"],
          () => {
            "audio" === e.currentType().substring(0, 5) ||
            e.audioPosterMode() ||
            e.audioOnlyMode()
              ? (e.isInPictureInPicture() && e.exitPictureInPicture(),
                this.hide())
              : this.show();
          }
        ),
        this.disable();
    }
    buildCSSClass() {
      return "vjs-picture-in-picture-control " + super.buildCSSClass();
    }
    handlePictureInPictureEnabledChange() {
      document.pictureInPictureEnabled &&
      !1 === this.player_.disablePictureInPicture()
        ? this.enable()
        : this.disable();
    }
    handlePictureInPictureChange(e) {
      this.player_.isInPictureInPicture()
        ? this.controlText("Exit Picture-in-Picture")
        : this.controlText("Picture-in-Picture"),
        this.handlePictureInPictureEnabledChange();
    }
    handleClick(e) {
      this.player_.isInPictureInPicture()
        ? this.player_.exitPictureInPicture()
        : this.player_.requestPictureInPicture();
    }
  }
  (Ys.prototype.controlText_ = "Picture-in-Picture"),
    f.registerComponent("PictureInPictureToggle", Ys);
  class Qs extends Os {
    constructor(e, t) {
      super(e, t),
        this.on(e, "fullscreenchange", (e) => this.handleFullscreenChange(e)),
        !1 === document[e.fsApi_.fullscreenEnabled] && this.disable();
    }
    buildCSSClass() {
      return "vjs-fullscreen-control " + super.buildCSSClass();
    }
    handleFullscreenChange(e) {
      this.player_.isFullscreen()
        ? this.controlText("Exit Fullscreen")
        : this.controlText("Fullscreen");
    }
    handleClick(e) {
      this.player_.isFullscreen()
        ? this.player_.exitFullscreen()
        : this.player_.requestFullscreen();
    }
  }
  (Qs.prototype.controlText_ = "Fullscreen"),
    f.registerComponent("FullscreenToggle", Qs);
  class Js extends f {
    createEl() {
      var e = super.createEl("div", { className: "vjs-volume-level" });
      return (
        e.appendChild(
          super.createEl("span", { className: "vjs-control-text" })
        ),
        e
      );
    }
  }
  f.registerComponent("VolumeLevel", Js);
  class Zs extends f {
    constructor(e, t) {
      super(e, t), (this.update = ct(m(this, this.update), 30));
    }
    createEl() {
      return super.createEl(
        "div",
        { className: "vjs-volume-tooltip" },
        { "aria-hidden": "true" }
      );
    }
    update(t, i, s, e) {
      if (!s) {
        var s = Me(this.el_),
          r = Me(this.player_.el()),
          i = t.width * i;
        if (!r || !s) return;
        var n = t.left - r.left + i,
          i = t.width - i + (r.right - t.right);
        let e = s.width / 2;
        n < e ? (e += e - n) : i < e && (e = i),
          e < 0 ? (e = 0) : e > s.width && (e = s.width),
          (this.el_.style.right = `-${e}px`);
      }
      this.write(e + "%");
    }
    write(e) {
      Se(this.el_, e);
    }
    updateVolume(e, t, i, s, r) {
      this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", () => {
        this.update(e, t, i, s.toFixed(0)), r && r();
      });
    }
  }
  f.registerComponent("VolumeLevelTooltip", Zs);
  class er extends f {
    constructor(e, t) {
      super(e, t), (this.update = ct(m(this, this.update), 30));
    }
    createEl() {
      return super.createEl("div", { className: "vjs-mouse-display" });
    }
    update(e, t, i) {
      var s = 100 * t;
      this.getChild("volumeLevelTooltip").updateVolume(e, t, i, s, () => {
        i
          ? (this.el_.style.bottom = e.height * t + "px")
          : (this.el_.style.left = e.width * t + "px");
      });
    }
  }
  (er.prototype.options_ = { children: ["volumeLevelTooltip"] }),
    f.registerComponent("MouseVolumeLevelDisplay", er);
  class tr extends qs {
    constructor(e, t) {
      super(e, t),
        this.on("slideractive", (e) => this.updateLastVolume_(e)),
        this.on(e, "volumechange", (e) => this.updateARIAAttributes(e)),
        e.ready(() => this.updateARIAAttributes());
    }
    createEl() {
      return super.createEl(
        "div",
        { className: "vjs-volume-bar vjs-slider-bar" },
        { "aria-label": this.localize("Volume Level"), "aria-live": "polite" }
      );
    }
    handleMouseDown(e) {
      Ve(e) && super.handleMouseDown(e);
    }
    handleMouseMove(e) {
      var t,
        i,
        s,
        r = this.getChild("mouseVolumeLevelDisplay");
      r &&
        ((t = Me((s = this.el()))),
        (i = this.vertical()),
        (s = Ue(s, e)),
        (s = Hs((s = i ? s.y : s.x), 0, 1)),
        r.update(t, s, i)),
        Ve(e) &&
          (this.checkMuted(), this.player_.volume(this.calculateDistance(e)));
    }
    checkMuted() {
      this.player_.muted() && this.player_.muted(!1);
    }
    getPercent() {
      return this.player_.muted() ? 0 : this.player_.volume();
    }
    stepForward() {
      this.checkMuted(), this.player_.volume(this.player_.volume() + 0.1);
    }
    stepBack() {
      this.checkMuted(), this.player_.volume(this.player_.volume() - 0.1);
    }
    updateARIAAttributes(e) {
      var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
      this.el_.setAttribute("aria-valuenow", t),
        this.el_.setAttribute("aria-valuetext", t + "%");
    }
    volumeAsPercentage_() {
      return Math.round(100 * this.player_.volume());
    }
    updateLastVolume_() {
      const e = this.player_.volume();
      this.one("sliderinactive", () => {
        0 === this.player_.volume() && this.player_.lastVolume_(e);
      });
    }
  }
  (tr.prototype.options_ = {
    children: ["volumeLevel"],
    barName: "volumeLevel",
  }),
    u ||
      te ||
      tr.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay"),
    (tr.prototype.playerEvent = "volumechange"),
    f.registerComponent("VolumeBar", tr);
  class ir extends f {
    constructor(e, t = {}) {
      var i, s;
      (t.vertical = t.vertical || !1),
        ("undefined" != typeof t.volumeBar && !Y(t.volumeBar)) ||
          ((t.volumeBar = t.volumeBar || {}),
          (t.volumeBar.vertical = t.vertical)),
        super(e, t),
        (i = this),
        (s = e).tech_ &&
          !s.tech_.featuresVolumeControl &&
          i.addClass("vjs-hidden"),
        i.on(s, "loadstart", function () {
          s.tech_.featuresVolumeControl
            ? i.removeClass("vjs-hidden")
            : i.addClass("vjs-hidden");
        }),
        (this.throttledHandleMouseMove = ct(m(this, this.handleMouseMove), 30)),
        (this.handleMouseUpHandler_ = (e) => this.handleMouseUp(e)),
        this.on("mousedown", (e) => this.handleMouseDown(e)),
        this.on("touchstart", (e) => this.handleMouseDown(e)),
        this.on("mousemove", (e) => this.handleMouseMove(e)),
        this.on(this.volumeBar, ["focus", "slideractive"], () => {
          this.volumeBar.addClass("vjs-slider-active"),
            this.addClass("vjs-slider-active"),
            this.trigger("slideractive");
        }),
        this.on(this.volumeBar, ["blur", "sliderinactive"], () => {
          this.volumeBar.removeClass("vjs-slider-active"),
            this.removeClass("vjs-slider-active"),
            this.trigger("sliderinactive");
        });
    }
    createEl() {
      let e = "vjs-volume-horizontal";
      return (
        this.options_.vertical && (e = "vjs-volume-vertical"),
        super.createEl("div", {
          className: "vjs-volume-control vjs-control " + e,
        })
      );
    }
    handleMouseDown(e) {
      var t = this.el_.ownerDocument;
      this.on(t, "mousemove", this.throttledHandleMouseMove),
        this.on(t, "touchmove", this.throttledHandleMouseMove),
        this.on(t, "mouseup", this.handleMouseUpHandler_),
        this.on(t, "touchend", this.handleMouseUpHandler_);
    }
    handleMouseUp(e) {
      var t = this.el_.ownerDocument;
      this.off(t, "mousemove", this.throttledHandleMouseMove),
        this.off(t, "touchmove", this.throttledHandleMouseMove),
        this.off(t, "mouseup", this.handleMouseUpHandler_),
        this.off(t, "touchend", this.handleMouseUpHandler_);
    }
    handleMouseMove(e) {
      this.volumeBar.handleMouseMove(e);
    }
  }
  (ir.prototype.options_ = { children: ["volumeBar"] }),
    f.registerComponent("VolumeControl", ir);
  class sr extends Os {
    constructor(e, t) {
      var i, s;
      super(e, t),
        (i = this),
        (s = e).tech_ &&
          !s.tech_.featuresMuteControl &&
          i.addClass("vjs-hidden"),
        i.on(s, "loadstart", function () {
          s.tech_.featuresMuteControl
            ? i.removeClass("vjs-hidden")
            : i.addClass("vjs-hidden");
        }),
        this.on(e, ["loadstart", "volumechange"], (e) => this.update(e));
    }
    buildCSSClass() {
      return "vjs-mute-control " + super.buildCSSClass();
    }
    handleClick(e) {
      var t = this.player_.volume(),
        i = this.player_.lastVolume_();
      0 === t
        ? (this.player_.volume(i < 0.1 ? 0.1 : i), this.player_.muted(!1))
        : this.player_.muted(!this.player_.muted());
    }
    update(e) {
      this.updateIcon_(), this.updateControlText_();
    }
    updateIcon_() {
      var e = this.player_.volume();
      let t = 3;
      u &&
        this.player_.tech_ &&
        this.player_.tech_.el_ &&
        this.player_.muted(this.player_.tech_.el_.muted),
        0 === e || this.player_.muted()
          ? (t = 0)
          : e < 0.33
          ? (t = 1)
          : e < 0.67 && (t = 2),
        ke(
          this.el_,
          [0, 1, 2, 3].reduce((e, t) => e + `${t ? " " : ""}vjs-vol-` + t, "")
        ),
        Ce(this.el_, "vjs-vol-" + t);
    }
    updateControlText_() {
      var e =
        this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
      this.controlText() !== e && this.controlText(e);
    }
  }
  (sr.prototype.controlText_ = "Mute"), f.registerComponent("MuteToggle", sr);
  class rr extends f {
    constructor(e, t = {}) {
      "undefined" != typeof t.inline ? (t.inline = t.inline) : (t.inline = !0),
        ("undefined" != typeof t.volumeControl && !Y(t.volumeControl)) ||
          ((t.volumeControl = t.volumeControl || {}),
          (t.volumeControl.vertical = !t.inline)),
        super(e, t),
        (this.handleKeyPressHandler_ = (e) => this.handleKeyPress(e)),
        this.on(e, ["loadstart"], (e) => this.volumePanelState_(e)),
        this.on(this.muteToggle, "keyup", (e) => this.handleKeyPress(e)),
        this.on(this.volumeControl, "keyup", (e) =>
          this.handleVolumeControlKeyUp(e)
        ),
        this.on("keydown", (e) => this.handleKeyPress(e)),
        this.on("mouseover", (e) => this.handleMouseOver(e)),
        this.on("mouseout", (e) => this.handleMouseOut(e)),
        this.on(this.volumeControl, ["slideractive"], this.sliderActive_),
        this.on(this.volumeControl, ["sliderinactive"], this.sliderInactive_);
    }
    sliderActive_() {
      this.addClass("vjs-slider-active");
    }
    sliderInactive_() {
      this.removeClass("vjs-slider-active");
    }
    volumePanelState_() {
      this.volumeControl.hasClass("vjs-hidden") &&
        this.muteToggle.hasClass("vjs-hidden") &&
        this.addClass("vjs-hidden"),
        this.volumeControl.hasClass("vjs-hidden") &&
          !this.muteToggle.hasClass("vjs-hidden") &&
          this.addClass("vjs-mute-toggle-only");
    }
    createEl() {
      let e = "vjs-volume-panel-horizontal";
      return (
        this.options_.inline || (e = "vjs-volume-panel-vertical"),
        super.createEl("div", {
          className: "vjs-volume-panel vjs-control " + e,
        })
      );
    }
    dispose() {
      this.handleMouseOut(), super.dispose();
    }
    handleVolumeControlKeyUp(e) {
      r.isEventKey(e, "Esc") && this.muteToggle.focus();
    }
    handleMouseOver(e) {
      this.addClass("vjs-hover"),
        ot(document, "keyup", this.handleKeyPressHandler_);
    }
    handleMouseOut(e) {
      this.removeClass("vjs-hover"),
        p(document, "keyup", this.handleKeyPressHandler_);
    }
    handleKeyPress(e) {
      r.isEventKey(e, "Esc") && this.handleMouseOut();
    }
  }
  (rr.prototype.options_ = { children: ["muteToggle", "volumeControl"] }),
    f.registerComponent("VolumePanel", rr);
  class nr extends f {
    constructor(e, t) {
      super(e, t),
        t && (this.menuButton_ = t.menuButton),
        (this.focusedChild_ = -1),
        this.on("keydown", (e) => this.handleKeyDown(e)),
        (this.boundHandleBlur_ = (e) => this.handleBlur(e)),
        (this.boundHandleTapClick_ = (e) => this.handleTapClick(e));
    }
    addEventListenerForItem(e) {
      e instanceof f &&
        (this.on(e, "blur", this.boundHandleBlur_),
        this.on(e, ["tap", "click"], this.boundHandleTapClick_));
    }
    removeEventListenerForItem(e) {
      e instanceof f &&
        (this.off(e, "blur", this.boundHandleBlur_),
        this.off(e, ["tap", "click"], this.boundHandleTapClick_));
    }
    removeChild(e) {
      "string" == typeof e && (e = this.getChild(e)),
        this.removeEventListenerForItem(e),
        super.removeChild(e);
    }
    addItem(e) {
      e = this.addChild(e);
      e && this.addEventListenerForItem(e);
    }
    createEl() {
      var e = this.options_.contentElType || "ul",
        e =
          ((this.contentEl_ = o(e, { className: "vjs-menu-content" })),
          this.contentEl_.setAttribute("role", "menu"),
          super.createEl("div", {
            append: this.contentEl_,
            className: "vjs-menu",
          }));
      return (
        e.appendChild(this.contentEl_),
        ot(e, "click", function (e) {
          e.preventDefault(), e.stopImmediatePropagation();
        }),
        e
      );
    }
    dispose() {
      (this.contentEl_ = null),
        (this.boundHandleBlur_ = null),
        (this.boundHandleTapClick_ = null),
        super.dispose();
    }
    handleBlur(e) {
      const t = e.relatedTarget || document.activeElement;
      this.children().some((e) => e.el() === t) ||
        ((e = this.menuButton_) &&
          e.buttonPressed_ &&
          t !== e.el().firstChild &&
          e.unpressButton());
    }
    handleTapClick(t) {
      var e;
      this.menuButton_ &&
        (this.menuButton_.unpressButton(),
        (e = this.children()),
        Array.isArray(e)) &&
        (e = e.filter((e) => e.el() === t.target)[0]) &&
        "CaptionSettingsMenuItem" !== e.name() &&
        this.menuButton_.focus();
    }
    handleKeyDown(e) {
      r.isEventKey(e, "Left") || r.isEventKey(e, "Down")
        ? (e.preventDefault(), e.stopPropagation(), this.stepForward())
        : (r.isEventKey(e, "Right") || r.isEventKey(e, "Up")) &&
          (e.preventDefault(), e.stopPropagation(), this.stepBack());
    }
    stepForward() {
      let e = 0;
      void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1),
        this.focus(e);
    }
    stepBack() {
      let e = 0;
      void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1),
        this.focus(e);
    }
    focus(e = 0) {
      var t = this.children().slice();
      t.length && t[0].hasClass("vjs-menu-title") && t.shift(),
        0 < t.length &&
          (e < 0 ? (e = 0) : e >= t.length && (e = t.length - 1),
          t[(this.focusedChild_ = e)].el_.focus());
    }
  }
  f.registerComponent("Menu", nr);
  class ar extends f {
    constructor(e, t = {}) {
      super(e, t),
        (this.menuButton_ = new Os(e, t)),
        this.menuButton_.controlText(this.controlText_),
        this.menuButton_.el_.setAttribute("aria-haspopup", "true");
      (e = Os.prototype.buildCSSClass()),
        (this.menuButton_.el_.className = this.buildCSSClass() + " " + e),
        this.menuButton_.removeClass("vjs-control"),
        this.addChild(this.menuButton_),
        this.update(),
        (this.enabled_ = !0),
        (t = (e) => this.handleClick(e));
      (this.handleMenuKeyUp_ = (e) => this.handleMenuKeyUp(e)),
        this.on(this.menuButton_, "tap", t),
        this.on(this.menuButton_, "click", t),
        this.on(this.menuButton_, "keydown", (e) => this.handleKeyDown(e)),
        this.on(this.menuButton_, "mouseenter", () => {
          this.addClass("vjs-hover"),
            this.menu.show(),
            ot(document, "keyup", this.handleMenuKeyUp_);
        }),
        this.on("mouseleave", (e) => this.handleMouseLeave(e)),
        this.on("keydown", (e) => this.handleSubmenuKeyDown(e));
    }
    update() {
      var e = this.createMenu();
      this.menu && (this.menu.dispose(), this.removeChild(this.menu)),
        (this.menu = e),
        this.addChild(e),
        (this.buttonPressed_ = !1),
        this.menuButton_.el_.setAttribute("aria-expanded", "false"),
        this.items && this.items.length <= this.hideThreshold_
          ? (this.hide(), this.menu.contentEl_.removeAttribute("role"))
          : (this.show(), this.menu.contentEl_.setAttribute("role", "menu"));
    }
    createMenu() {
      var e,
        t = new nr(this.player_, { menuButton: this });
      if (
        ((this.hideThreshold_ = 0),
        this.options_.title &&
          ((e = o("li", {
            className: "vjs-menu-title",
            textContent: g(this.options_.title),
            tabIndex: -1,
          })),
          (e = new f(this.player_, { el: e })),
          t.addItem(e)),
        (this.items = this.createItems()),
        this.items)
      )
        for (let e = 0; e < this.items.length; e++) t.addItem(this.items[e]);
      return t;
    }
    createItems() {}
    createEl() {
      return super.createEl(
        "div",
        { className: this.buildWrapperCSSClass() },
        {}
      );
    }
    buildWrapperCSSClass() {
      let e = "vjs-menu-button";
      !0 === this.options_.inline ? (e += "-inline") : (e += "-popup");
      var t = Os.prototype.buildCSSClass();
      return `vjs-menu-button ${e} ${t} ` + super.buildCSSClass();
    }
    buildCSSClass() {
      let e = "vjs-menu-button";
      return (
        !0 === this.options_.inline ? (e += "-inline") : (e += "-popup"),
        `vjs-menu-button ${e} ` + super.buildCSSClass()
      );
    }
    controlText(e, t = this.menuButton_.el()) {
      return this.menuButton_.controlText(e, t);
    }
    dispose() {
      this.handleMouseLeave(), super.dispose();
    }
    handleClick(e) {
      this.buttonPressed_ ? this.unpressButton() : this.pressButton();
    }
    handleMouseLeave(e) {
      this.removeClass("vjs-hover"),
        p(document, "keyup", this.handleMenuKeyUp_);
    }
    focus() {
      this.menuButton_.focus();
    }
    blur() {
      this.menuButton_.blur();
    }
    handleKeyDown(e) {
      r.isEventKey(e, "Esc") || r.isEventKey(e, "Tab")
        ? (this.buttonPressed_ && this.unpressButton(),
          r.isEventKey(e, "Tab") ||
            (e.preventDefault(), this.menuButton_.focus()))
        : (!r.isEventKey(e, "Up") && !r.isEventKey(e, "Down")) ||
          this.buttonPressed_ ||
          (e.preventDefault(), this.pressButton());
    }
    handleMenuKeyUp(e) {
      (r.isEventKey(e, "Esc") || r.isEventKey(e, "Tab")) &&
        this.removeClass("vjs-hover");
    }
    handleSubmenuKeyPress(e) {
      this.handleSubmenuKeyDown(e);
    }
    handleSubmenuKeyDown(e) {
      (r.isEventKey(e, "Esc") || r.isEventKey(e, "Tab")) &&
        (this.buttonPressed_ && this.unpressButton(),
        r.isEventKey(e, "Tab") ||
          (e.preventDefault(), this.menuButton_.focus()));
    }
    pressButton() {
      this.enabled_ &&
        ((this.buttonPressed_ = !0),
        this.menu.show(),
        this.menu.lockShowing(),
        this.menuButton_.el_.setAttribute("aria-expanded", "true"),
        (u && be()) || this.menu.focus());
    }
    unpressButton() {
      this.enabled_ &&
        ((this.buttonPressed_ = !1),
        this.menu.unlockShowing(),
        this.menu.hide(),
        this.menuButton_.el_.setAttribute("aria-expanded", "false"));
    }
    disable() {
      this.unpressButton(),
        (this.enabled_ = !1),
        this.addClass("vjs-disabled"),
        this.menuButton_.disable();
    }
    enable() {
      (this.enabled_ = !0),
        this.removeClass("vjs-disabled"),
        this.menuButton_.enable();
    }
  }
  f.registerComponent("MenuButton", ar);
  class or extends ar {
    constructor(e, t) {
      const i = t.tracks;
      if ((super(e, t), this.items.length <= 1 && this.hide(), i)) {
        const s = m(this, this.update);
        i.addEventListener("removetrack", s),
          i.addEventListener("addtrack", s),
          i.addEventListener("labelchange", s),
          this.player_.on("ready", s),
          this.player_.on("dispose", function () {
            i.removeEventListener("removetrack", s),
              i.removeEventListener("addtrack", s),
              i.removeEventListener("labelchange", s);
          });
      }
    }
  }
  f.registerComponent("TrackButton", or);
  const lr = ["Tab", "Esc", "Up", "Down", "Right", "Left"];
  class dr extends Es {
    constructor(e, t) {
      super(e, t),
        (this.selectable = t.selectable),
        (this.isSelected_ = t.selected || !1),
        (this.multiSelectable = t.multiSelectable),
        this.selected(this.isSelected_),
        this.selectable
          ? this.multiSelectable
            ? this.el_.setAttribute("role", "menuitemcheckbox")
            : this.el_.setAttribute("role", "menuitemradio")
          : this.el_.setAttribute("role", "menuitem");
    }
    createEl(e, t, i) {
      this.nonIconControl = !0;
      t = super.createEl(
        "li",
        Object.assign({ className: "vjs-menu-item", tabIndex: -1 }, t),
        i
      );
      return (
        t.replaceChild(
          o("span", {
            className: "vjs-menu-item-text",
            textContent: this.localize(this.options_.label),
          }),
          t.querySelector(".vjs-icon-placeholder")
        ),
        t
      );
    }
    handleKeyDown(t) {
      lr.some((e) => r.isEventKey(t, e)) || super.handleKeyDown(t);
    }
    handleClick(e) {
      this.selected(!0);
    }
    selected(e) {
      this.selectable &&
        (e
          ? (this.addClass("vjs-selected"),
            this.el_.setAttribute("aria-checked", "true"),
            this.controlText(", selected"),
            (this.isSelected_ = !0))
          : (this.removeClass("vjs-selected"),
            this.el_.setAttribute("aria-checked", "false"),
            this.controlText(""),
            (this.isSelected_ = !1)));
    }
  }
  f.registerComponent("MenuItem", dr);
  class hr extends dr {
    constructor(e, t) {
      var i = t.track;
      const s = e.textTracks(),
        r =
          ((t.label = i.label || i.language || "Unknown"),
          (t.selected = "showing" === i.mode),
          super(e, t),
          (this.track = i),
          (this.kinds = (t.kinds || [t.kind || this.track.kind]).filter(
            Boolean
          )),
          (...e) => {
            this.handleTracksChange.apply(this, e);
          }),
        n = (...e) => {
          this.handleSelectedLanguageChange.apply(this, e);
        };
      if (
        (e.on(["loadstart", "texttrackchange"], r),
        s.addEventListener("change", r),
        s.addEventListener("selectedlanguagechange", n),
        this.on("dispose", function () {
          e.off(["loadstart", "texttrackchange"], r),
            s.removeEventListener("change", r),
            s.removeEventListener("selectedlanguagechange", n);
        }),
        void 0 === s.onchange)
      ) {
        let e;
        this.on(["tap", "click"], function () {
          if ("object" != typeof window.Event)
            try {
              e = new window.Event("change");
            } catch (e) {}
          e || (e = document.createEvent("Event")).initEvent("change", !0, !0),
            s.dispatchEvent(e);
        });
      }
      this.handleTracksChange();
    }
    handleClick(e) {
      var t = this.track,
        i = this.player_.textTracks();
      if ((super.handleClick(e), i))
        for (let e = 0; e < i.length; e++) {
          var s = i[e];
          -1 !== this.kinds.indexOf(s.kind) &&
            (s === t
              ? "showing" !== s.mode && (s.mode = "showing")
              : "disabled" !== s.mode && (s.mode = "disabled"));
        }
    }
    handleTracksChange(e) {
      var t = "showing" === this.track.mode;
      t !== this.isSelected_ && this.selected(t);
    }
    handleSelectedLanguageChange(e) {
      var t;
      "showing" !== this.track.mode ||
        ((t = this.player_.cache_.selectedLanguage) &&
          t.enabled &&
          t.language === this.track.language &&
          t.kind !== this.track.kind) ||
        (this.player_.cache_.selectedLanguage = {
          enabled: !0,
          language: this.track.language,
          kind: this.track.kind,
        });
    }
    dispose() {
      (this.track = null), super.dispose();
    }
  }
  f.registerComponent("TextTrackMenuItem", hr);
  class ur extends hr {
    constructor(e, t) {
      (t.track = {
        player: e,
        kind: t.kind,
        kinds: t.kinds,
        default: !1,
        mode: "disabled",
      }),
        t.kinds || (t.kinds = [t.kind]),
        t.label
          ? (t.track.label = t.label)
          : (t.track.label = t.kinds.join(" and ") + " off"),
        (t.selectable = !0),
        (t.multiSelectable = !1),
        super(e, t);
    }
    handleTracksChange(e) {
      var i = this.player().textTracks();
      let s = !0;
      for (let e = 0, t = i.length; e < t; e++) {
        var r = i[e];
        if (-1 < this.options_.kinds.indexOf(r.kind) && "showing" === r.mode) {
          s = !1;
          break;
        }
      }
      s !== this.isSelected_ && this.selected(s);
    }
    handleSelectedLanguageChange(e) {
      var i = this.player().textTracks();
      let s = !0;
      for (let e = 0, t = i.length; e < t; e++) {
        var r = i[e];
        if (
          -1 < ["captions", "descriptions", "subtitles"].indexOf(r.kind) &&
          "showing" === r.mode
        ) {
          s = !1;
          break;
        }
      }
      s && (this.player_.cache_.selectedLanguage = { enabled: !1 });
    }
  }
  f.registerComponent("OffTextTrackMenuItem", ur);
  class cr extends or {
    constructor(e, t = {}) {
      (t.tracks = e.textTracks()), super(e, t);
    }
    createItems(t = [], i = hr) {
      let e;
      this.label_ && (e = this.label_ + " off"),
        t.push(
          new ur(this.player_, {
            kinds: this.kinds_,
            kind: this.kind_,
            label: e,
          })
        ),
        (this.hideThreshold_ += 1);
      var s = this.player_.textTracks();
      Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
      for (let e = 0; e < s.length; e++) {
        var r,
          n = s[e];
        -1 < this.kinds_.indexOf(n.kind) &&
          ((r = new i(this.player_, {
            track: n,
            kinds: this.kinds_,
            kind: this.kind_,
            selectable: !0,
            multiSelectable: !1,
          })).addClass(`vjs-${n.kind}-menu-item`),
          t.push(r));
      }
      return t;
    }
  }
  f.registerComponent("TextTrackButton", cr);
  class pr extends dr {
    constructor(e, t) {
      var i = t.track,
        s = t.cue,
        r = e.currentTime();
      (t.selectable = !0),
        (t.multiSelectable = !1),
        (t.label = s.text),
        (t.selected = s.startTime <= r && r < s.endTime),
        super(e, t),
        (this.track = i),
        (this.cue = s);
    }
    handleClick(e) {
      super.handleClick(), this.player_.currentTime(this.cue.startTime);
    }
  }
  f.registerComponent("ChaptersTrackMenuItem", pr);
  class mr extends cr {
    constructor(e, t, i) {
      super(e, t, i),
        (this.selectCurrentItem_ = () => {
          this.items.forEach((e) => {
            e.selected(this.track_.activeCues[0] === e.cue);
          });
        });
    }
    buildCSSClass() {
      return "vjs-chapters-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-chapters-button " + super.buildWrapperCSSClass();
    }
    update(e) {
      (e && e.track && "chapters" !== e.track.kind) ||
        ((e = this.findChaptersTrack()) !== this.track_
          ? (this.setTrack(e), super.update())
          : (!this.items ||
              (e && e.cues && e.cues.length !== this.items.length)) &&
            super.update());
    }
    setTrack(e) {
      var t;
      this.track_ !== e &&
        (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)),
        this.track_ &&
          ((t = this.player_
            .remoteTextTrackEls()
            .getTrackElementByTrack_(this.track_)) &&
            t.removeEventListener("load", this.updateHandler_),
          this.track_.removeEventListener("cuechange", this.selectCurrentItem_),
          (this.track_ = null)),
        (this.track_ = e),
        this.track_) &&
        ((this.track_.mode = "hidden"),
        (t = this.player_
          .remoteTextTrackEls()
          .getTrackElementByTrack_(this.track_)) &&
          t.addEventListener("load", this.updateHandler_),
        this.track_.addEventListener("cuechange", this.selectCurrentItem_));
    }
    findChaptersTrack() {
      var t = this.player_.textTracks() || [];
      for (let e = t.length - 1; 0 <= e; e--) {
        var i = t[e];
        if (i.kind === this.kind_) return i;
      }
    }
    getMenuCaption() {
      return this.track_ && this.track_.label
        ? this.track_.label
        : this.localize(g(this.kind_));
    }
    createMenu() {
      return (this.options_.title = this.getMenuCaption()), super.createMenu();
    }
    createItems() {
      var i = [];
      if (this.track_) {
        var s = this.track_.cues;
        if (s)
          for (let e = 0, t = s.length; e < t; e++) {
            var r = s[e],
              r = new pr(this.player_, { track: this.track_, cue: r });
            i.push(r);
          }
      }
      return i;
    }
  }
  (mr.prototype.kind_ = "chapters"),
    (mr.prototype.controlText_ = "Chapters"),
    f.registerComponent("ChaptersButton", mr);
  class gr extends cr {
    constructor(e, t, i) {
      super(e, t, i);
      const s = e.textTracks(),
        r = m(this, this.handleTracksChange);
      s.addEventListener("change", r),
        this.on("dispose", function () {
          s.removeEventListener("change", r);
        });
    }
    handleTracksChange(e) {
      var i = this.player().textTracks();
      let s = !1;
      for (let e = 0, t = i.length; e < t; e++) {
        var r = i[e];
        if (r.kind !== this.kind_ && "showing" === r.mode) {
          s = !0;
          break;
        }
      }
      s ? this.disable() : this.enable();
    }
    buildCSSClass() {
      return "vjs-descriptions-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-descriptions-button " + super.buildWrapperCSSClass();
    }
  }
  (gr.prototype.kind_ = "descriptions"),
    (gr.prototype.controlText_ = "Descriptions"),
    f.registerComponent("DescriptionsButton", gr);
  class fr extends cr {
    constructor(e, t, i) {
      super(e, t, i);
    }
    buildCSSClass() {
      return "vjs-subtitles-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-subtitles-button " + super.buildWrapperCSSClass();
    }
  }
  (fr.prototype.kind_ = "subtitles"),
    (fr.prototype.controlText_ = "Subtitles"),
    f.registerComponent("SubtitlesButton", fr);
  class yr extends hr {
    constructor(e, t) {
      (t.track = {
        player: e,
        kind: t.kind,
        label: t.kind + " settings",
        selectable: !1,
        default: !1,
        mode: "disabled",
      }),
        (t.selectable = !1),
        (t.name = "CaptionSettingsMenuItem"),
        super(e, t),
        this.addClass("vjs-texttrack-settings"),
        this.controlText(", opens " + t.kind + " settings dialog");
    }
    handleClick(e) {
      this.player().getChild("textTrackSettings").open();
    }
  }
  f.registerComponent("CaptionSettingsMenuItem", yr);
  class _r extends cr {
    constructor(e, t, i) {
      super(e, t, i);
    }
    buildCSSClass() {
      return "vjs-captions-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-captions-button " + super.buildWrapperCSSClass();
    }
    createItems() {
      var e = [];
      return (
        (this.player().tech_ && this.player().tech_.featuresNativeTextTracks) ||
          !this.player().getChild("textTrackSettings") ||
          (e.push(new yr(this.player_, { kind: this.kind_ })),
          (this.hideThreshold_ += 1)),
        super.createItems(e)
      );
    }
  }
  (_r.prototype.kind_ = "captions"),
    (_r.prototype.controlText_ = "Captions"),
    f.registerComponent("CaptionsButton", _r);
  class vr extends hr {
    createEl(e, t, i) {
      (e = super.createEl(e, t, i)),
        (t = e.querySelector(".vjs-menu-item-text"));
      return (
        "captions" === this.options_.track.kind &&
          (t.appendChild(
            o(
              "span",
              { className: "vjs-icon-placeholder" },
              { "aria-hidden": !0 }
            )
          ),
          t.appendChild(
            o("span", {
              className: "vjs-control-text",
              textContent: " " + this.localize("Captions"),
            })
          )),
        e
      );
    }
  }
  f.registerComponent("SubsCapsMenuItem", vr);
  class br extends cr {
    constructor(e, t = {}) {
      super(e, t),
        (this.label_ = "subtitles"),
        -1 <
          ["en", "en-us", "en-ca", "fr-ca"].indexOf(this.player_.language_) &&
          (this.label_ = "captions"),
        this.menuButton_.controlText(g(this.label_));
    }
    buildCSSClass() {
      return "vjs-subs-caps-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-subs-caps-button " + super.buildWrapperCSSClass();
    }
    createItems() {
      let e = [];
      return (
        (this.player().tech_ && this.player().tech_.featuresNativeTextTracks) ||
          !this.player().getChild("textTrackSettings") ||
          (e.push(new yr(this.player_, { kind: this.label_ })),
          (this.hideThreshold_ += 1)),
        (e = super.createItems(e, vr))
      );
    }
  }
  (br.prototype.kinds_ = ["captions", "subtitles"]),
    (br.prototype.controlText_ = "Subtitles"),
    f.registerComponent("SubsCapsButton", br);
  class Tr extends dr {
    constructor(e, t) {
      var i = t.track;
      const s = e.audioTracks(),
        r =
          ((t.label = i.label || i.language || "Unknown"),
          (t.selected = i.enabled),
          super(e, t),
          (this.track = i),
          this.addClass(`vjs-${i.kind}-menu-item`),
          (...e) => {
            this.handleTracksChange.apply(this, e);
          });
      s.addEventListener("change", r),
        this.on("dispose", () => {
          s.removeEventListener("change", r);
        });
    }
    createEl(e, t, i) {
      (e = super.createEl(e, t, i)),
        (t = e.querySelector(".vjs-menu-item-text"));
      return (
        "main-desc" === this.options_.track.kind &&
          (t.appendChild(
            o(
              "span",
              { className: "vjs-icon-placeholder" },
              { "aria-hidden": !0 }
            )
          ),
          t.appendChild(
            o("span", {
              className: "vjs-control-text",
              textContent: " " + this.localize("Descriptions"),
            })
          )),
        e
      );
    }
    handleClick(e) {
      if (
        (super.handleClick(e),
        (this.track.enabled = !0),
        this.player_.tech_.featuresNativeAudioTracks)
      ) {
        var t = this.player_.audioTracks();
        for (let e = 0; e < t.length; e++) {
          var i = t[e];
          i !== this.track && (i.enabled = i === this.track);
        }
      }
    }
    handleTracksChange(e) {
      this.selected(this.track.enabled);
    }
  }
  f.registerComponent("AudioTrackMenuItem", Tr);
  class Sr extends or {
    constructor(e, t = {}) {
      (t.tracks = e.audioTracks()), super(e, t);
    }
    buildCSSClass() {
      return "vjs-audio-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-audio-button " + super.buildWrapperCSSClass();
    }
    createItems(t = []) {
      this.hideThreshold_ = 1;
      var i = this.player_.audioTracks();
      for (let e = 0; e < i.length; e++) {
        var s = i[e];
        t.push(
          new Tr(this.player_, {
            track: s,
            selectable: !0,
            multiSelectable: !1,
          })
        );
      }
      return t;
    }
  }
  (Sr.prototype.controlText_ = "Audio Track"),
    f.registerComponent("AudioTrackButton", Sr);
  class wr extends dr {
    constructor(e, t) {
      var i = t.rate,
        s = parseFloat(i, 10);
      (t.label = i),
        (t.selected = s === e.playbackRate()),
        (t.selectable = !0),
        (t.multiSelectable = !1),
        super(e, t),
        (this.label = i),
        (this.rate = s),
        this.on(e, "ratechange", (e) => this.update(e));
    }
    handleClick(e) {
      super.handleClick(), this.player().playbackRate(this.rate);
    }
    update(e) {
      this.selected(this.player().playbackRate() === this.rate);
    }
  }
  (wr.prototype.contentElType = "button"),
    f.registerComponent("PlaybackRateMenuItem", wr);
  class Er extends ar {
    constructor(e, t) {
      super(e, t),
        this.menuButton_.el_.setAttribute("aria-describedby", this.labelElId_),
        this.updateVisibility(),
        this.updateLabel(),
        this.on(e, "loadstart", (e) => this.updateVisibility(e)),
        this.on(e, "ratechange", (e) => this.updateLabel(e)),
        this.on(e, "playbackrateschange", (e) =>
          this.handlePlaybackRateschange(e)
        );
    }
    createEl() {
      var e = super.createEl();
      return (
        (this.labelElId_ = "vjs-playback-rate-value-label-" + this.id_),
        (this.labelEl_ = o("div", {
          className: "vjs-playback-rate-value",
          id: this.labelElId_,
          textContent: "1x",
        })),
        e.appendChild(this.labelEl_),
        e
      );
    }
    dispose() {
      (this.labelEl_ = null), super.dispose();
    }
    buildCSSClass() {
      return "vjs-playback-rate " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-playback-rate " + super.buildWrapperCSSClass();
    }
    createItems() {
      var t = this.playbackRates(),
        i = [];
      for (let e = t.length - 1; 0 <= e; e--)
        i.push(new wr(this.player(), { rate: t[e] + "x" }));
      return i;
    }
    handlePlaybackRateschange(e) {
      this.update();
    }
    playbackRates() {
      var e = this.player();
      return (e.playbackRates && e.playbackRates()) || [];
    }
    playbackRateSupported() {
      return (
        this.player().tech_ &&
        this.player().tech_.featuresPlaybackRate &&
        this.playbackRates() &&
        0 < this.playbackRates().length
      );
    }
    updateVisibility(e) {
      this.playbackRateSupported()
        ? this.removeClass("vjs-hidden")
        : this.addClass("vjs-hidden");
    }
    updateLabel(e) {
      this.playbackRateSupported() &&
        (this.labelEl_.textContent = this.player().playbackRate() + "x");
    }
  }
  (Er.prototype.controlText_ = "Playback Rate"),
    f.registerComponent("PlaybackRateMenuButton", Er);
  class Cr extends f {
    buildCSSClass() {
      return "vjs-spacer " + super.buildCSSClass();
    }
    createEl(e = "div", t = {}, i = {}) {
      return (
        t.className || (t.className = this.buildCSSClass()),
        super.createEl(e, t, i)
      );
    }
  }
  f.registerComponent("Spacer", Cr);
  f.registerComponent(
    "CustomControlSpacer",
    class extends Cr {
      buildCSSClass() {
        return "vjs-custom-control-spacer " + super.buildCSSClass();
      }
      createEl() {
        return super.createEl("div", {
          className: this.buildCSSClass(),
          textContent: "Â ",
        });
      }
    }
  );
  class kr extends f {
    createEl() {
      return super.createEl("div", {
        className: "vjs-control-bar",
        dir: "ltr",
      });
    }
  }
  (kr.prototype.options_ = {
    children: [
      "playToggle",
      "volumePanel",
      "currentTimeDisplay",
      "timeDivider",
      "durationDisplay",
      "progressControl",
      "liveDisplay",
      "seekToLive",
      "remainingTimeDisplay",
      "customControlSpacer",
      "playbackRateMenuButton",
      "chaptersButton",
      "descriptionsButton",
      "subsCapsButton",
      "audioTrackButton",
      "fullscreenToggle",
    ],
  }),
    "exitPictureInPicture" in document &&
      kr.prototype.options_.children.splice(
        kr.prototype.options_.children.length - 1,
        0,
        "pictureInPictureToggle"
      ),
    f.registerComponent("ControlBar", kr);
  class Ir extends Yt {
    constructor(e, t) {
      super(e, t), this.on(e, "error", (e) => this.open(e));
    }
    buildCSSClass() {
      return "vjs-error-display " + super.buildCSSClass();
    }
    content() {
      var e = this.player().error();
      return e ? this.localize(e.message) : "";
    }
  }
  (Ir.prototype.options_ = Object.assign({}, Yt.prototype.options_, {
    pauseOnOpen: !1,
    fillAlways: !0,
    temporary: !1,
    uncloseable: !0,
  })),
    f.registerComponent("ErrorDisplay", Ir);
  const xr = "vjs-text-track-settings";
  var Ni = ["#000", "Black"],
    t = ["#00F", "Blue"],
    Ar = ["#0FF", "Cyan"],
    Pr = ["#0F0", "Green"],
    s = ["#F0F", "Magenta"],
    Or = ["#F00", "Red"],
    Dr = ["#FFF", "White"],
    n = ["#FF0", "Yellow"],
    Lr = ["1", "Opaque"],
    Nr = ["0.5", "Semi-Transparent"],
    Mr = ["0", "Transparent"];
  const Rr = {
    backgroundColor: {
      selector: ".vjs-bg-color > select",
      id: "captions-background-color-%s",
      label: "Color",
      options: [Ni, Dr, Or, Pr, t, n, s, Ar],
    },
    backgroundOpacity: {
      selector: ".vjs-bg-opacity > select",
      id: "captions-background-opacity-%s",
      label: "Transparency",
      options: [Lr, Nr, Mr],
    },
    color: {
      selector: ".vjs-fg-color > select",
      id: "captions-foreground-color-%s",
      label: "Color",
      options: [Dr, Ni, Or, Pr, t, n, s, Ar],
    },
    edgeStyle: {
      selector: ".vjs-edge-style > select",
      id: "%s",
      label: "Text Edge Style",
      options: [
        ["none", "None"],
        ["raised", "Raised"],
        ["depressed", "Depressed"],
        ["uniform", "Uniform"],
        ["dropshadow", "Dropshadow"],
      ],
    },
    fontFamily: {
      selector: ".vjs-font-family > select",
      id: "captions-font-family-%s",
      label: "Font Family",
      options: [
        ["proportionalSansSerif", "Proportional Sans-Serif"],
        ["monospaceSansSerif", "Monospace Sans-Serif"],
        ["proportionalSerif", "Proportional Serif"],
        ["monospaceSerif", "Monospace Serif"],
        ["casual", "Casual"],
        ["script", "Script"],
        ["small-caps", "Small Caps"],
      ],
    },
    fontPercent: {
      selector: ".vjs-font-percent > select",
      id: "captions-font-size-%s",
      label: "Font Size",
      options: [
        ["0.50", "50%"],
        ["0.75", "75%"],
        ["1.00", "100%"],
        ["1.25", "125%"],
        ["1.50", "150%"],
        ["1.75", "175%"],
        ["2.00", "200%"],
        ["3.00", "300%"],
        ["4.00", "400%"],
      ],
      default: 2,
      parser: (e) => ("1.00" === e ? null : Number(e)),
    },
    textOpacity: {
      selector: ".vjs-text-opacity > select",
      id: "captions-foreground-opacity-%s",
      label: "Transparency",
      options: [Lr, Nr],
    },
    windowColor: {
      selector: ".vjs-window-color > select",
      id: "captions-window-color-%s",
      label: "Color",
    },
    windowOpacity: {
      selector: ".vjs-window-opacity > select",
      id: "captions-window-opacity-%s",
      label: "Transparency",
      options: [Mr, Nr, Lr],
    },
  };
  function Ur(e, t) {
    if ((e = t ? t(e) : e) && "none" !== e) return e;
  }
  Rr.windowColor.options = Rr.backgroundColor.options;
  class Br extends Yt {
    constructor(e, t) {
      (t.temporary = !1),
        super(e, t),
        (this.updateDisplay = this.updateDisplay.bind(this)),
        this.fill(),
        (this.hasBeenOpened_ = this.hasBeenFilled_ = !0),
        (this.endDialog = o("p", {
          className: "vjs-control-text",
          textContent: this.localize("End of dialog window."),
        })),
        this.el().appendChild(this.endDialog),
        this.setDefaults(),
        void 0 === t.persistTextTrackSettings &&
          (this.options_.persistTextTrackSettings =
            this.options_.playerOptions.persistTextTrackSettings),
        this.on(this.$(".vjs-done-button"), "click", () => {
          this.saveSettings(), this.close();
        }),
        this.on(this.$(".vjs-default-button"), "click", () => {
          this.setDefaults(), this.updateDisplay();
        }),
        z(Rr, (e) => {
          this.on(this.$(e.selector), "change", this.updateDisplay);
        }),
        this.options_.persistTextTrackSettings && this.restoreSettings();
    }
    dispose() {
      (this.endDialog = null), super.dispose();
    }
    createElSelect_(e, t = "", i = "label") {
      e = Rr[e];
      const s = e.id.replace("%s", this.id_),
        r = [t, s].join(" ").trim();
      return [
        `<${i} id="${s}" class="${"label" === i ? "vjs-label" : ""}">`,
        this.localize(e.label),
        `</${i}>`,
        `<select aria-labelledby="${r}">`,
      ]
        .concat(
          e.options.map((e) => {
            var t = s + "-" + e[1].replace(/\W+/g, "");
            return [
              `<option id="${t}" value="${e[0]}" `,
              `aria-labelledby="${r} ${t}">`,
              this.localize(e[1]),
              "</option>",
            ].join("");
          })
        )
        .concat("</select>")
        .join("");
    }
    createElFgColor_() {
      var e = "captions-text-legend-" + this.id_;
      return [
        '<fieldset class="vjs-fg-color vjs-track-setting">',
        `<legend id="${e}">`,
        this.localize("Text"),
        "</legend>",
        this.createElSelect_("color", e),
        '<span class="vjs-text-opacity vjs-opacity">',
        this.createElSelect_("textOpacity", e),
        "</span>",
        "</fieldset>",
      ].join("");
    }
    createElBgColor_() {
      var e = "captions-background-" + this.id_;
      return [
        '<fieldset class="vjs-bg-color vjs-track-setting">',
        `<legend id="${e}">`,
        this.localize("Background"),
        "</legend>",
        this.createElSelect_("backgroundColor", e),
        '<span class="vjs-bg-opacity vjs-opacity">',
        this.createElSelect_("backgroundOpacity", e),
        "</span>",
        "</fieldset>",
      ].join("");
    }
    createElWinColor_() {
      var e = "captions-window-" + this.id_;
      return [
        '<fieldset class="vjs-window-color vjs-track-setting">',
        `<legend id="${e}">`,
        this.localize("Window"),
        "</legend>",
        this.createElSelect_("windowColor", e),
        '<span class="vjs-window-opacity vjs-opacity">',
        this.createElSelect_("windowOpacity", e),
        "</span>",
        "</fieldset>",
      ].join("");
    }
    createElColors_() {
      return o("div", {
        className: "vjs-track-settings-colors",
        innerHTML: [
          this.createElFgColor_(),
          this.createElBgColor_(),
          this.createElWinColor_(),
        ].join(""),
      });
    }
    createElFont_() {
      return o("div", {
        className: "vjs-track-settings-font",
        innerHTML: [
          '<fieldset class="vjs-font-percent vjs-track-setting">',
          this.createElSelect_("fontPercent", "", "legend"),
          "</fieldset>",
          '<fieldset class="vjs-edge-style vjs-track-setting">',
          this.createElSelect_("edgeStyle", "", "legend"),
          "</fieldset>",
          '<fieldset class="vjs-font-family vjs-track-setting">',
          this.createElSelect_("fontFamily", "", "legend"),
          "</fieldset>",
        ].join(""),
      });
    }
    createElControls_() {
      var e = this.localize("restore all settings to the default values");
      return o("div", {
        className: "vjs-track-settings-controls",
        innerHTML: [
          `<button type="button" class="vjs-default-button" title="${e}">`,
          this.localize("Reset"),
          `<span class="vjs-control-text"> ${e}</span>`,
          "</button>",
          `<button type="button" class="vjs-done-button">${this.localize(
            "Done"
          )}</button>`,
        ].join(""),
      });
    }
    content() {
      return [
        this.createElColors_(),
        this.createElFont_(),
        this.createElControls_(),
      ];
    }
    label() {
      return this.localize("Caption Settings Dialog");
    }
    description() {
      return this.localize(
        "Beginning of dialog window. Escape will cancel and close the window."
      );
    }
    buildCSSClass() {
      return super.buildCSSClass() + " vjs-text-track-settings";
    }
    getValues() {
      return X(
        Rr,
        (e, t, i) => {
          (s = this.$(t.selector)), (t = t.parser);
          var s = Ur(s.options[s.options.selectedIndex].value, t);
          return void 0 !== s && (e[i] = s), e;
        },
        {}
      );
    }
    setValues(n) {
      z(Rr, (e, t) => {
        var i = this.$(e.selector),
          s = n[t],
          r = e.parser;
        if (s)
          for (let e = 0; e < i.options.length; e++)
            if (Ur(i.options[e].value, r) === s) {
              i.selectedIndex = e;
              break;
            }
      });
    }
    setDefaults() {
      z(Rr, (e) => {
        var t = e.hasOwnProperty("default") ? e.default : 0;
        this.$(e.selector).selectedIndex = t;
      });
    }
    restoreSettings() {
      let e;
      try {
        e = JSON.parse(window.localStorage.getItem(xr));
      } catch (e) {
        d.warn(e);
      }
      e && this.setValues(e);
    }
    saveSettings() {
      if (this.options_.persistTextTrackSettings) {
        var e = this.getValues();
        try {
          Object.keys(e).length
            ? window.localStorage.setItem(xr, JSON.stringify(e))
            : window.localStorage.removeItem(xr);
        } catch (e) {
          d.warn(e);
        }
      }
    }
    updateDisplay() {
      var e = this.player_.getChild("textTrackDisplay");
      e && e.updateDisplay();
    }
    conditionalBlur_() {
      this.previouslyActiveEl_ = null;
      var e = this.player_.controlBar,
        t = e && e.subsCapsButton,
        e = e && e.captionsButton;
      t ? t.focus() : e && e.focus();
    }
  }
  f.registerComponent("TextTrackSettings", Br);
  class Fr extends f {
    constructor(e, t) {
      let i = t.ResizeObserver || window.ResizeObserver;
      super(
        e,
        h(
          {
            createEl: !(i = null === t.ResizeObserver ? !1 : i),
            reportTouchActivity: !1,
          },
          t
        )
      ),
        (this.ResizeObserver = t.ResizeObserver || window.ResizeObserver),
        (this.loadListener_ = null),
        (this.resizeObserver_ = null),
        (this.debouncedHandler_ = pt(
          () => {
            this.resizeHandler();
          },
          100,
          !1,
          this
        )),
        i
          ? ((this.resizeObserver_ = new this.ResizeObserver(
              this.debouncedHandler_
            )),
            this.resizeObserver_.observe(e.el()))
          : ((this.loadListener_ = () => {
              if (this.el_ && this.el_.contentWindow) {
                const t = this.debouncedHandler_;
                let e = (this.unloadListener_ = function () {
                  p(this, "resize", t), p(this, "unload", e), (e = null);
                });
                ot(this.el_.contentWindow, "unload", e),
                  ot(this.el_.contentWindow, "resize", t);
              }
            }),
            this.one("load", this.loadListener_));
    }
    createEl() {
      return super.createEl(
        "iframe",
        {
          className: "vjs-resize-manager",
          tabIndex: -1,
          title: this.localize("No content"),
        },
        { "aria-hidden": "true" }
      );
    }
    resizeHandler() {
      this.player_ &&
        this.player_.trigger &&
        this.player_.trigger("playerresize");
    }
    dispose() {
      this.debouncedHandler_ && this.debouncedHandler_.cancel(),
        this.resizeObserver_ &&
          (this.player_.el() &&
            this.resizeObserver_.unobserve(this.player_.el()),
          this.resizeObserver_.disconnect()),
        this.loadListener_ && this.off("load", this.loadListener_),
        this.el_ &&
          this.el_.contentWindow &&
          this.unloadListener_ &&
          this.unloadListener_.call(this.el_.contentWindow),
        (this.ResizeObserver = null),
        (this.resizeObserver = null),
        (this.debouncedHandler_ = null),
        (this.loadListener_ = null),
        super.dispose();
    }
  }
  f.registerComponent("ResizeManager", Fr);
  const jr = { trackingThreshold: 20, liveTolerance: 15 };
  class Hr extends f {
    constructor(e, t) {
      super(e, h(jr, t, { createEl: !1 })),
        (this.trackLiveHandler_ = () => this.trackLive_()),
        (this.handlePlay_ = (e) => this.handlePlay(e)),
        (this.handleFirstTimeupdate_ = (e) => this.handleFirstTimeupdate(e)),
        (this.handleSeeked_ = (e) => this.handleSeeked(e)),
        (this.seekToLiveEdge_ = (e) => this.seekToLiveEdge(e)),
        this.reset_(),
        this.on(this.player_, "durationchange", (e) =>
          this.handleDurationchange(e)
        ),
        this.on(this.player_, "canplay", () => this.toggleTracking());
    }
    trackLive_() {
      var t = this.player_.seekable();
      if (t && t.length) {
        var t = Number(window.performance.now().toFixed(4)),
          i = -1 === this.lastTime_ ? 0 : (t - this.lastTime_) / 1e3,
          t =
            ((this.lastTime_ = t),
            (this.pastSeekEnd_ = this.pastSeekEnd() + i),
            this.liveCurrentTime()),
          i = this.player_.currentTime();
        let e =
          this.player_.paused() ||
          this.seekedBehindLive_ ||
          Math.abs(t - i) > this.options_.liveTolerance;
        (e = this.timeupdateSeen_ && t !== 1 / 0 ? e : !1) !==
          this.behindLiveEdge_ &&
          ((this.behindLiveEdge_ = e), this.trigger("liveedgechange"));
      }
    }
    handleDurationchange() {
      this.toggleTracking();
    }
    toggleTracking() {
      this.player_.duration() === 1 / 0 &&
      this.liveWindow() >= this.options_.trackingThreshold
        ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"),
          this.startTracking())
        : (this.player_.removeClass("vjs-liveui"), this.stopTracking());
    }
    startTracking() {
      this.isTracking() ||
        (this.timeupdateSeen_ ||
          (this.timeupdateSeen_ = this.player_.hasStarted()),
        (this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, 30)),
        this.trackLive_(),
        this.on(this.player_, ["play", "pause"], this.trackLiveHandler_),
        this.timeupdateSeen_
          ? this.on(this.player_, "seeked", this.handleSeeked_)
          : (this.one(this.player_, "play", this.handlePlay_),
            this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)));
    }
    handleFirstTimeupdate() {
      (this.timeupdateSeen_ = !0),
        this.on(this.player_, "seeked", this.handleSeeked_);
    }
    handleSeeked() {
      var e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
      (this.seekedBehindLive_ = this.nextSeekedFromUser_ && 2 < e),
        (this.nextSeekedFromUser_ = !1),
        this.trackLive_();
    }
    handlePlay() {
      this.one(this.player_, "timeupdate", this.seekToLiveEdge_);
    }
    reset_() {
      (this.lastTime_ = -1),
        (this.pastSeekEnd_ = 0),
        (this.lastSeekEnd_ = -1),
        (this.behindLiveEdge_ = !0),
        (this.timeupdateSeen_ = !1),
        (this.seekedBehindLive_ = !1),
        (this.nextSeekedFromUser_ = !1),
        this.clearInterval(this.trackingInterval_),
        (this.trackingInterval_ = null),
        this.off(this.player_, ["play", "pause"], this.trackLiveHandler_),
        this.off(this.player_, "seeked", this.handleSeeked_),
        this.off(this.player_, "play", this.handlePlay_),
        this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_),
        this.off(this.player_, "timeupdate", this.seekToLiveEdge_);
    }
    nextSeekedFromUser() {
      this.nextSeekedFromUser_ = !0;
    }
    stopTracking() {
      this.isTracking() && (this.reset_(), this.trigger("liveedgechange"));
    }
    seekableEnd() {
      var e = this.player_.seekable(),
        t = [];
      let i = e ? e.length : 0;
      for (; i--; ) t.push(e.end(i));
      return t.length ? t.sort()[t.length - 1] : 1 / 0;
    }
    seekableStart() {
      var e = this.player_.seekable(),
        t = [];
      let i = e ? e.length : 0;
      for (; i--; ) t.push(e.start(i));
      return t.length ? t.sort()[0] : 0;
    }
    liveWindow() {
      var e = this.liveCurrentTime();
      return e === 1 / 0 ? 0 : e - this.seekableStart();
    }
    isLive() {
      return this.isTracking();
    }
    atLiveEdge() {
      return !this.behindLiveEdge();
    }
    liveCurrentTime() {
      return this.pastSeekEnd() + this.seekableEnd();
    }
    pastSeekEnd() {
      var e = this.seekableEnd();
      return (
        -1 !== this.lastSeekEnd_ &&
          e !== this.lastSeekEnd_ &&
          (this.pastSeekEnd_ = 0),
        (this.lastSeekEnd_ = e),
        this.pastSeekEnd_
      );
    }
    behindLiveEdge() {
      return this.behindLiveEdge_;
    }
    isTracking() {
      return "number" == typeof this.trackingInterval_;
    }
    seekToLiveEdge() {
      (this.seekedBehindLive_ = !1),
        this.atLiveEdge() ||
          ((this.nextSeekedFromUser_ = !1),
          this.player_.currentTime(this.liveCurrentTime()));
    }
    dispose() {
      this.stopTracking(), super.dispose();
    }
  }
  f.registerComponent("LiveTracker", Hr);
  class qr extends f {
    constructor(e, t) {
      super(e, t),
        this.on("statechanged", (e) => this.updateDom_()),
        this.updateDom_();
    }
    createEl() {
      return (
        (this.els = {
          title: o("div", {
            className: "vjs-title-bar-title",
            id: "vjs-title-bar-title-" + tt++,
          }),
          description: o("div", {
            className: "vjs-title-bar-description",
            id: "vjs-title-bar-description-" + tt++,
          }),
        }),
        o("div", { className: "vjs-title-bar" }, {}, Object.values(this.els))
      );
    }
    updateDom_() {
      var e = this.player_.tech_;
      const s = e && e.el_,
        r = { title: "aria-labelledby", description: "aria-describedby" };
      ["title", "description"].forEach((e) => {
        var t = this.state[e],
          i = this.els[e],
          e = r[e];
        Fe(i),
          t && Se(i, t),
          s && (s.removeAttribute(e), t) && s.setAttribute(e, i.id);
      }),
        this.state.title || this.state.description ? this.show() : this.hide();
    }
    update(e) {
      this.setState(e);
    }
    dispose() {
      var e = this.player_.tech_,
        e = e && e.el_;
      e &&
        (e.removeAttribute("aria-labelledby"),
        e.removeAttribute("aria-describedby")),
        super.dispose(),
        (this.els = null);
    }
  }
  f.registerComponent("TitleBar", qr);
  function Vr(i) {
    const s = i.el();
    if (!s.resetSourceWatch_) {
      const t = {},
        e = Xr(i),
        r =
          (t) =>
          (...e) => {
            e = t.apply(s, e);
            return Wr(i), e;
          };
      ["append", "appendChild", "insertAdjacentHTML"].forEach((e) => {
        s[e] && ((t[e] = s[e]), (s[e] = r(t[e])));
      }),
        Object.defineProperty(s, "innerHTML", h(e, { set: r(e.set) })),
        (s.resetSourceWatch_ = () => {
          (s.resetSourceWatch_ = null),
            Object.keys(t).forEach((e) => {
              s[e] = t[e];
            }),
            Object.defineProperty(s, "innerHTML", e);
        }),
        i.one("sourceset", s.resetSourceWatch_);
    }
  }
  function $r(i) {
    if (i.featuresSourceset) {
      const s = i.el();
      if (!s.resetSourceset_) {
        e = i;
        const t = zr([e.el(), window.HTMLMediaElement.prototype, Kr], "src");
        var e;
        const r = s.setAttribute,
          n = s.load;
        Object.defineProperty(
          s,
          "src",
          h(t, {
            set: (e) => {
              e = t.set.call(s, e);
              return i.triggerSourceset(s.src), e;
            },
          })
        ),
          (s.setAttribute = (e, t) => {
            t = r.call(s, e, t);
            return /src/i.test(e) && i.triggerSourceset(s.src), t;
          }),
          (s.load = () => {
            var e = n.call(s);
            return Wr(i) || (i.triggerSourceset(""), Vr(i)), e;
          }),
          s.currentSrc ? i.triggerSourceset(s.currentSrc) : Wr(i) || Vr(i),
          (s.resetSourceset_ = () => {
            (s.resetSourceset_ = null),
              (s.load = n),
              (s.setAttribute = r),
              Object.defineProperty(s, "src", t),
              s.resetSourceWatch_ && s.resetSourceWatch_();
          });
      }
    }
  }
  const Wr = (t) => {
      var e = t.el();
      if (e.hasAttribute("src")) t.triggerSourceset(e.src);
      else {
        var i = t.$$("source"),
          s = [];
        let e = "";
        if (!i.length) return !1;
        for (let e = 0; e < i.length; e++) {
          var r = i[e].src;
          r && -1 === s.indexOf(r) && s.push(r);
        }
        if (!s.length) return !1;
        1 === s.length && (e = s[0]), t.triggerSourceset(e);
      }
      return !0;
    },
    Gr = Object.defineProperty({}, "innerHTML", {
      get() {
        return this.cloneNode(!0).innerHTML;
      },
      set(e) {
        for (
          var t = document.createElement(this.nodeName.toLowerCase()),
            i = ((t.innerHTML = e), document.createDocumentFragment());
          t.childNodes.length;

        )
          i.appendChild(t.childNodes[0]);
        return (
          (this.innerText = ""),
          window.Element.prototype.appendChild.call(this, i),
          this.innerHTML
        );
      },
    }),
    zr = (t, i) => {
      let s = {};
      for (
        let e = 0;
        e < t.length &&
        !((s = Object.getOwnPropertyDescriptor(t[e], i)) && s.set && s.get);
        e++
      );
      return (s.enumerable = !0), (s.configurable = !0), s;
    },
    Xr = (e) =>
      zr(
        [
          e.el(),
          window.HTMLMediaElement.prototype,
          window.Element.prototype,
          Gr,
        ],
        "innerHTML"
      ),
    Kr = Object.defineProperty({}, "src", {
      get() {
        return this.hasAttribute("src")
          ? li(window.Element.prototype.getAttribute.call(this, "src"))
          : "";
      },
      set(e) {
        return window.Element.prototype.setAttribute.call(this, "src", e), e;
      },
    });
  class v extends _ {
    constructor(e, t) {
      super(e, t);
      t = e.source;
      let i = !1;
      if (
        ((this.featuresVideoFrameCallback =
          this.featuresVideoFrameCallback && "VIDEO" === this.el_.tagName),
        t &&
        (this.el_.currentSrc !== t.src ||
          (e.tag && 3 === e.tag.initNetworkState_))
          ? this.setSource(t)
          : this.handleLateInit_(this.el_),
        e.enableSourceset && this.setupSourcesetHandling_(),
        (this.isScrubbing_ = !1),
        this.el_.hasChildNodes())
      ) {
        var s = this.el_.childNodes;
        let e = s.length;
        for (var r = []; e--; ) {
          var n = s[e];
          "track" === n.nodeName.toLowerCase() &&
            (this.featuresNativeTextTracks
              ? (this.remoteTextTrackEls().addTrackElement_(n),
                this.remoteTextTracks().addTrack(n.track),
                this.textTracks().addTrack(n.track),
                i ||
                  this.el_.hasAttribute("crossorigin") ||
                  !di(n.src) ||
                  (i = !0))
              : r.push(n));
        }
        for (let e = 0; e < r.length; e++) this.el_.removeChild(r[e]);
      }
      this.proxyNativeTracks_(),
        this.featuresNativeTextTracks &&
          i &&
          d.warn(
            "Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."
          ),
        this.restoreMetadataTracksInIOSNativePlayer_(),
        (me || pe) && !0 === e.nativeControlsForTouch && this.setControls(!0),
        this.proxyWebkitFullscreen_(),
        this.triggerReady();
    }
    dispose() {
      this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(),
        v.disposeMediaElement(this.el_),
        (this.options_ = null),
        super.dispose();
    }
    setupSourcesetHandling_() {
      $r(this);
    }
    restoreMetadataTracksInIOSNativePlayer_() {
      const i = this.textTracks();
      let s;
      const e = () => {
          s = [];
          for (let e = 0; e < i.length; e++) {
            var t = i[e];
            "metadata" === t.kind && s.push({ track: t, storedMode: t.mode });
          }
        },
        r =
          (e(),
          i.addEventListener("change", e),
          this.on("dispose", () => i.removeEventListener("change", e)),
          () => {
            for (let e = 0; e < s.length; e++) {
              var t = s[e];
              "disabled" === t.track.mode &&
                t.track.mode !== t.storedMode &&
                (t.track.mode = t.storedMode);
            }
            i.removeEventListener("change", r);
          });
      this.on("webkitbeginfullscreen", () => {
        i.removeEventListener("change", e),
          i.removeEventListener("change", r),
          i.addEventListener("change", r);
      }),
        this.on("webkitendfullscreen", () => {
          i.removeEventListener("change", e),
            i.addEventListener("change", e),
            i.removeEventListener("change", r);
        });
    }
    overrideNative_(e, t) {
      if (t === this[`featuresNative${e}Tracks`]) {
        const i = e.toLowerCase();
        this[i + "TracksListeners_"] &&
          Object.keys(this[i + "TracksListeners_"]).forEach((e) => {
            this.el()[i + "Tracks"].removeEventListener(
              e,
              this[i + "TracksListeners_"][e]
            );
          }),
          (this[`featuresNative${e}Tracks`] = !t),
          (this[i + "TracksListeners_"] = null),
          this.proxyNativeTracksForType_(i);
      }
    }
    overrideNativeAudioTracks(e) {
      this.overrideNative_("Audio", e);
    }
    overrideNativeVideoTracks(e) {
      this.overrideNative_("Video", e);
    }
    proxyNativeTracksForType_(i) {
      var e = Di[i];
      const s = this.el()[e.getterName],
        r = this[e.getterName]();
      if (
        this[`featuresNative${e.capitalName}Tracks`] &&
        s &&
        s.addEventListener
      ) {
        const n = {
            change: (e) => {
              var t = {
                type: "change",
                target: r,
                currentTarget: r,
                srcElement: r,
              };
              r.trigger(t),
                "text" === i && this[Li.remoteText.getterName]().trigger(t);
            },
            addtrack(e) {
              r.addTrack(e.track);
            },
            removetrack(e) {
              r.removeTrack(e.track);
            },
          },
          t = function () {
            var e = [];
            for (let i = 0; i < r.length; i++) {
              let t = !1;
              for (let e = 0; e < s.length; e++)
                if (s[e] === r[i]) {
                  t = !0;
                  break;
                }
              t || e.push(r[i]);
            }
            for (; e.length; ) r.removeTrack(e.shift());
          };
        (this[e.getterName + "Listeners_"] = n),
          Object.keys(n).forEach((t) => {
            const i = n[t];
            s.addEventListener(t, i),
              this.on("dispose", (e) => s.removeEventListener(t, i));
          }),
          this.on("loadstart", t),
          this.on("dispose", (e) => this.off("loadstart", t));
      }
    }
    proxyNativeTracks_() {
      Di.names.forEach((e) => {
        this.proxyNativeTracksForType_(e);
      });
    }
    createEl() {
      let t = this.options_.tag;
      (t && (this.options_.playerElIngest || this.movingMediaElementInDOM)) ||
        (t
          ? ((e = t.cloneNode(!0)),
            t.parentNode && t.parentNode.insertBefore(e, t),
            v.disposeMediaElement(t),
            (t = e))
          : ((t = document.createElement("video")),
            (e = h({}, this.options_.tag && Ae(this.options_.tag))),
            (me && !0 === this.options_.nativeControlsForTouch) ||
              delete e.controls,
            xe(
              t,
              Object.assign(e, { id: this.options_.techId, class: "vjs-tech" })
            )),
        (t.playerId = this.options_.playerId)),
        "undefined" != typeof this.options_.preload &&
          Oe(t, "preload", this.options_.preload),
        void 0 !== this.options_.disablePictureInPicture &&
          (t.disablePictureInPicture = this.options_.disablePictureInPicture);
      var e,
        i = ["loop", "muted", "playsinline", "autoplay"];
      for (let e = 0; e < i.length; e++) {
        var s = i[e],
          r = this.options_[s];
        "undefined" != typeof r && (r ? Oe(t, s, s) : De(t, s), (t[s] = r));
      }
      return t;
    }
    handleLateInit_(e) {
      if (0 !== e.networkState && 3 !== e.networkState)
        if (0 === e.readyState) {
          let e = !1;
          const t = function () {
              e = !0;
            },
            i =
              (this.on("loadstart", t),
              function () {
                e || this.trigger("loadstart");
              });
          this.on("loadedmetadata", i),
            void this.ready(function () {
              this.off("loadstart", t),
                this.off("loadedmetadata", i),
                e || this.trigger("loadstart");
            });
        } else {
          const s = ["loadstart"];
          s.push("loadedmetadata"),
            2 <= e.readyState && s.push("loadeddata"),
            3 <= e.readyState && s.push("canplay"),
            4 <= e.readyState && s.push("canplaythrough"),
            this.ready(function () {
              s.forEach(function (e) {
                this.trigger(e);
              }, this);
            });
        }
    }
    setScrubbing(e) {
      this.isScrubbing_ = e;
    }
    scrubbing() {
      return this.isScrubbing_;
    }
    setCurrentTime(e) {
      try {
        this.isScrubbing_ && this.el_.fastSeek && fe
          ? this.el_.fastSeek(e)
          : (this.el_.currentTime = e);
      } catch (e) {
        d(e, "Video is not ready. (Video.js)");
      }
    }
    duration() {
      if (
        this.el_.duration === 1 / 0 &&
        te &&
        ae &&
        0 === this.el_.currentTime
      ) {
        const e = () => {
          0 < this.el_.currentTime &&
            (this.el_.duration === 1 / 0 && this.trigger("durationchange"),
            this.off("timeupdate", e));
        };
        return this.on("timeupdate", e), NaN;
      }
      return this.el_.duration || NaN;
    }
    width() {
      return this.el_.offsetWidth;
    }
    height() {
      return this.el_.offsetHeight;
    }
    proxyWebkitFullscreen_() {
      if ("webkitDisplayingFullscreen" in this.el_) {
        const e = function () {
            this.trigger("fullscreenchange", { isFullscreen: !1 }),
              this.el_.controls &&
                !this.options_.nativeControlsForTouch &&
                this.controls() &&
                (this.el_.controls = !1);
          },
          t = function () {
            "webkitPresentationMode" in this.el_ &&
              "picture-in-picture" !== this.el_.webkitPresentationMode &&
              (this.one("webkitendfullscreen", e),
              this.trigger("fullscreenchange", {
                isFullscreen: !0,
                nativeIOSFullscreen: !0,
              }));
          };
        this.on("webkitbeginfullscreen", t),
          this.on("dispose", () => {
            this.off("webkitbeginfullscreen", t),
              this.off("webkitendfullscreen", e);
          });
      }
    }
    supportsFullScreen() {
      return "function" == typeof this.el_.webkitEnterFullScreen;
    }
    enterFullScreen() {
      const e = this.el_;
      if (e.paused && e.networkState <= e.HAVE_METADATA)
        Wt(this.el_.play()),
          this.setTimeout(function () {
            e.pause();
            try {
              e.webkitEnterFullScreen();
            } catch (e) {
              this.trigger("fullscreenerror", e);
            }
          }, 0);
      else
        try {
          e.webkitEnterFullScreen();
        } catch (e) {
          this.trigger("fullscreenerror", e);
        }
    }
    exitFullScreen() {
      this.el_.webkitDisplayingFullscreen
        ? this.el_.webkitExitFullScreen()
        : this.trigger(
            "fullscreenerror",
            new Error("The video is not fullscreen")
          );
    }
    requestPictureInPicture() {
      return this.el_.requestPictureInPicture();
    }
    requestVideoFrameCallback(e) {
      return this.featuresVideoFrameCallback && !this.el_.webkitKeys
        ? this.el_.requestVideoFrameCallback(e)
        : super.requestVideoFrameCallback(e);
    }
    cancelVideoFrameCallback(e) {
      this.featuresVideoFrameCallback && !this.el_.webkitKeys
        ? this.el_.cancelVideoFrameCallback(e)
        : super.cancelVideoFrameCallback(e);
    }
    src(e) {
      if (void 0 === e) return this.el_.src;
      this.setSrc(e);
    }
    reset() {
      v.resetMediaElement(this.el_);
    }
    currentSrc() {
      return this.currentSource_
        ? this.currentSource_.src
        : this.el_.currentSrc;
    }
    setControls(e) {
      this.el_.controls = !!e;
    }
    addTextTrack(e, t, i) {
      return this.featuresNativeTextTracks
        ? this.el_.addTextTrack(e, t, i)
        : super.addTextTrack(e, t, i);
    }
    createRemoteTextTrack(e) {
      var t;
      return this.featuresNativeTextTracks
        ? ((t = document.createElement("track")),
          e.kind && (t.kind = e.kind),
          e.label && (t.label = e.label),
          (e.language || e.srclang) && (t.srclang = e.language || e.srclang),
          e.default && (t.default = e.default),
          e.id && (t.id = e.id),
          e.src && (t.src = e.src),
          t)
        : super.createRemoteTextTrack(e);
    }
    addRemoteTextTrack(e, t) {
      e = super.addRemoteTextTrack(e, t);
      return this.featuresNativeTextTracks && this.el().appendChild(e), e;
    }
    removeRemoteTextTrack(t) {
      if ((super.removeRemoteTextTrack(t), this.featuresNativeTextTracks)) {
        var i = this.$$("track");
        let e = i.length;
        for (; e--; )
          (t !== i[e] && t !== i[e].track) || this.el().removeChild(i[e]);
      }
    }
    getVideoPlaybackQuality() {
      var e;
      return "function" == typeof this.el().getVideoPlaybackQuality
        ? this.el().getVideoPlaybackQuality()
        : ((e = {}),
          "undefined" != typeof this.el().webkitDroppedFrameCount &&
            "undefined" != typeof this.el().webkitDecodedFrameCount &&
            ((e.droppedVideoFrames = this.el().webkitDroppedFrameCount),
            (e.totalVideoFrames = this.el().webkitDecodedFrameCount)),
          window.performance && (e.creationTime = window.performance.now()),
          e);
    }
  }
  Q(v, "TEST_VID", function () {
    var e, t;
    if (_e())
      return (
        (e = document.createElement("video")),
        ((t = document.createElement("track")).kind = "captions"),
        (t.srclang = "en"),
        (t.label = "English"),
        e.appendChild(t),
        e
      );
  }),
    (v.isSupported = function () {
      try {
        v.TEST_VID.volume = 0.5;
      } catch (e) {
        return !1;
      }
      return !(!v.TEST_VID || !v.TEST_VID.canPlayType);
    }),
    (v.canPlayType = function (e) {
      return v.TEST_VID.canPlayType(e);
    }),
    (v.canPlaySource = function (e, t) {
      return v.canPlayType(e.type);
    }),
    (v.canControlVolume = function () {
      try {
        const t = v.TEST_VID.volume;
        v.TEST_VID.volume = t / 2 + 0.1;
        var e = t !== v.TEST_VID.volume;
        return e && u
          ? (window.setTimeout(() => {
              v &&
                v.prototype &&
                (v.prototype.featuresVolumeControl = t !== v.TEST_VID.volume);
            }),
            !1)
          : e;
      } catch (e) {
        return !1;
      }
    }),
    (v.canMuteVolume = function () {
      try {
        var e = v.TEST_VID.muted;
        return (
          (v.TEST_VID.muted = !e),
          v.TEST_VID.muted
            ? Oe(v.TEST_VID, "muted", "muted")
            : De(v.TEST_VID, "muted"),
          e !== v.TEST_VID.muted
        );
      } catch (e) {
        return !1;
      }
    }),
    (v.canControlPlaybackRate = function () {
      if (te && ae && le < 58) return !1;
      try {
        var e = v.TEST_VID.playbackRate;
        return (
          (v.TEST_VID.playbackRate = e / 2 + 0.1), e !== v.TEST_VID.playbackRate
        );
      } catch (e) {
        return !1;
      }
    }),
    (v.canOverrideAttributes = function () {
      try {
        var e = () => {};
        Object.defineProperty(document.createElement("video"), "src", {
          get: e,
          set: e,
        }),
          Object.defineProperty(document.createElement("audio"), "src", {
            get: e,
            set: e,
          }),
          Object.defineProperty(document.createElement("video"), "innerHTML", {
            get: e,
            set: e,
          }),
          Object.defineProperty(document.createElement("audio"), "innerHTML", {
            get: e,
            set: e,
          });
      } catch (e) {
        return !1;
      }
      return !0;
    }),
    (v.supportsNativeTextTracks = function () {
      return fe || (u && ae);
    }),
    (v.supportsNativeVideoTracks = function () {
      return !(!v.TEST_VID || !v.TEST_VID.videoTracks);
    }),
    (v.supportsNativeAudioTracks = function () {
      return !(!v.TEST_VID || !v.TEST_VID.audioTracks);
    }),
    (v.Events = [
      "loadstart",
      "suspend",
      "abort",
      "error",
      "emptied",
      "stalled",
      "loadedmetadata",
      "loadeddata",
      "canplay",
      "canplaythrough",
      "playing",
      "waiting",
      "seeking",
      "seeked",
      "ended",
      "durationchange",
      "timeupdate",
      "progress",
      "play",
      "pause",
      "ratechange",
      "resize",
      "volumechange",
    ]),
    [
      ["featuresMuteControl", "canMuteVolume"],
      ["featuresPlaybackRate", "canControlPlaybackRate"],
      ["featuresSourceset", "canOverrideAttributes"],
      ["featuresNativeTextTracks", "supportsNativeTextTracks"],
      ["featuresNativeVideoTracks", "supportsNativeVideoTracks"],
      ["featuresNativeAudioTracks", "supportsNativeAudioTracks"],
    ].forEach(function ([e, t]) {
      Q(v.prototype, e, () => v[t](), !0);
    }),
    (v.prototype.featuresVolumeControl = v.canControlVolume()),
    (v.prototype.movingMediaElementInDOM = !u),
    (v.prototype.featuresFullscreenResize = !0),
    (v.prototype.featuresProgressEvents = !0),
    (v.prototype.featuresTimeupdateEvents = !0),
    (v.prototype.featuresVideoFrameCallback = !(
      !v.TEST_VID || !v.TEST_VID.requestVideoFrameCallback
    )),
    (v.disposeMediaElement = function (e) {
      if (e) {
        for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes(); )
          e.removeChild(e.firstChild);
        if ((e.removeAttribute("src"), "function" == typeof e.load))
          try {
            e.load();
          } catch (e) {}
      }
    }),
    (v.resetMediaElement = function (t) {
      if (t) {
        var i = t.querySelectorAll("source");
        let e = i.length;
        for (; e--; ) t.removeChild(i[e]);
        if ((t.removeAttribute("src"), "function" == typeof t.load))
          try {
            t.load();
          } catch (e) {}
      }
    }),
    [
      "muted",
      "defaultMuted",
      "autoplay",
      "controls",
      "loop",
      "playsinline",
    ].forEach(function (e) {
      v.prototype[e] = function () {
        return this.el_[e] || this.el_.hasAttribute(e);
      };
    }),
    ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(
      function (t) {
        v.prototype["set" + g(t)] = function (e) {
          (this.el_[t] = e)
            ? this.el_.setAttribute(t, t)
            : this.el_.removeAttribute(t);
        };
      }
    ),
    [
      "paused",
      "currentTime",
      "buffered",
      "volume",
      "poster",
      "preload",
      "error",
      "seeking",
      "seekable",
      "ended",
      "playbackRate",
      "defaultPlaybackRate",
      "disablePictureInPicture",
      "played",
      "networkState",
      "readyState",
      "videoWidth",
      "videoHeight",
      "crossOrigin",
    ].forEach(function (e) {
      v.prototype[e] = function () {
        return this.el_[e];
      };
    }),
    [
      "volume",
      "src",
      "poster",
      "preload",
      "playbackRate",
      "defaultPlaybackRate",
      "disablePictureInPicture",
      "crossOrigin",
    ].forEach(function (t) {
      v.prototype["set" + g(t)] = function (e) {
        this.el_[t] = e;
      };
    }),
    ["pause", "load", "play"].forEach(function (e) {
      v.prototype[e] = function () {
        return this.el_[e]();
      };
    }),
    _.withSourceHandlers(v),
    (v.nativeSourceHandler = {}),
    (v.nativeSourceHandler.canPlayType = function (e) {
      try {
        return v.TEST_VID.canPlayType(e);
      } catch (e) {
        return "";
      }
    }),
    (v.nativeSourceHandler.canHandleSource = function (e, t) {
      return e.type
        ? v.nativeSourceHandler.canPlayType(e.type)
        : e.src
        ? ((e = hi(e.src)), v.nativeSourceHandler.canPlayType("video/" + e))
        : "";
    }),
    (v.nativeSourceHandler.handleSource = function (e, t, i) {
      t.setSrc(e.src);
    }),
    (v.nativeSourceHandler.dispose = function () {}),
    v.registerSourceHandler(v.nativeSourceHandler),
    _.registerTech("Html5", v);
  const Yr = [
      "progress",
      "abort",
      "suspend",
      "emptied",
      "stalled",
      "loadedmetadata",
      "loadeddata",
      "timeupdate",
      "resize",
      "volumechange",
      "texttrackchange",
    ],
    Qr = {
      canplay: "CanPlay",
      canplaythrough: "CanPlayThrough",
      playing: "Playing",
      seeked: "Seeked",
    },
    Jr = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"],
    Zr = {},
    en =
      (Jr.forEach((e) => {
        var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e;
        Zr[e] = "vjs-layout-" + t;
      }),
      {
        tiny: 210,
        xsmall: 320,
        small: 425,
        medium: 768,
        large: 1440,
        xlarge: 2560,
        huge: 1 / 0,
      });
  class b extends f {
    constructor(e, t, i) {
      if (
        ((e.id = e.id || t.id || "vjs_video_" + tt++),
        ((t = Object.assign(b.getTagSettings(e), t)).initChildren = !1),
        (t.createEl = !1),
        (t.evented = !1),
        (t.reportTouchActivity = !1),
        t.language ||
          ((s = e.closest("[lang]")) && (t.language = s.getAttribute("lang"))),
        super(null, t, i),
        (this.boundDocumentFullscreenChange_ = (e) =>
          this.documentFullscreenChange_(e)),
        (this.boundFullWindowOnEscKey_ = (e) => this.fullWindowOnEscKey(e)),
        (this.boundUpdateStyleEl_ = (e) => this.updateStyleEl_(e)),
        (this.boundApplyInitTime_ = (e) => this.applyInitTime_(e)),
        (this.boundUpdateCurrentBreakpoint_ = (e) =>
          this.updateCurrentBreakpoint_(e)),
        (this.boundHandleTechClick_ = (e) => this.handleTechClick_(e)),
        (this.boundHandleTechDoubleClick_ = (e) =>
          this.handleTechDoubleClick_(e)),
        (this.boundHandleTechTouchStart_ = (e) =>
          this.handleTechTouchStart_(e)),
        (this.boundHandleTechTouchMove_ = (e) => this.handleTechTouchMove_(e)),
        (this.boundHandleTechTouchEnd_ = (e) => this.handleTechTouchEnd_(e)),
        (this.boundHandleTechTap_ = (e) => this.handleTechTap_(e)),
        (this.isFullscreen_ = !1),
        (this.log = W(this.id_)),
        (this.fsApi_ = j),
        (this.isPosterFromTech_ = !1),
        (this.queuedCallbacks_ = []),
        (this.isReady_ = !1),
        (this.hasStarted_ = !1),
        (this.userActive_ = !1),
        (this.debugEnabled_ = !1),
        (this.audioOnlyMode_ = !1),
        (this.audioPosterMode_ = !1),
        (this.audioOnlyCache_ = { playerHeight: null, hiddenChildren: [] }),
        !this.options_ ||
          !this.options_.techOrder ||
          !this.options_.techOrder.length)
      )
        throw new Error(
          "No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?"
        );
      if (
        ((this.tag = e),
        (this.tagAttributes = e && Ae(e)),
        this.language(this.options_.language),
        t.languages)
      ) {
        const r = {};
        Object.getOwnPropertyNames(t.languages).forEach(function (e) {
          r[e.toLowerCase()] = t.languages[e];
        }),
          (this.languages_ = r);
      } else this.languages_ = b.prototype.options_.languages;
      this.resetCache_(),
        (this.poster_ = t.poster || ""),
        (this.controls_ = !!t.controls),
        (e.controls = !1),
        e.removeAttribute("controls"),
        (this.changingSrc_ = !1),
        (this.playCallbacks_ = []),
        (this.playTerminatedQueue_ = []),
        e.hasAttribute("autoplay")
          ? this.autoplay(!0)
          : this.autoplay(this.options_.autoplay),
        t.plugins &&
          Object.keys(t.plugins).forEach((e) => {
            if ("function" != typeof this[e])
              throw new Error(`plugin "${e}" does not exist`);
          }),
        (this.scrubbing_ = !1),
        (this.el_ = this.createEl()),
        kt(this, { eventBusKey: "el_" }),
        this.fsApi_.requestFullscreen &&
          (ot(
            document,
            this.fsApi_.fullscreenchange,
            this.boundDocumentFullscreenChange_
          ),
          this.on(
            this.fsApi_.fullscreenchange,
            this.boundDocumentFullscreenChange_
          )),
        this.fluid_ &&
          this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
      var s = h(this.options_),
        i =
          (t.plugins &&
            Object.keys(t.plugins).forEach((e) => {
              this[e](t.plugins[e]);
            }),
          t.debug && this.debug(!0),
          (this.options_.playerOptions = s),
          (this.middleware_ = []),
          this.playbackRates(t.playbackRates),
          this.initChildren(),
          this.isAudio("audio" === e.nodeName.toLowerCase()),
          this.controls()
            ? this.addClass("vjs-controls-enabled")
            : this.addClass("vjs-controls-disabled"),
          this.el_.setAttribute("role", "region"),
          this.isAudio()
            ? this.el_.setAttribute("aria-label", this.localize("Audio Player"))
            : this.el_.setAttribute(
                "aria-label",
                this.localize("Video Player")
              ),
          this.isAudio() && this.addClass("vjs-audio"),
          me && this.addClass("vjs-touch-enabled"),
          u || this.addClass("vjs-workinghover"),
          (b.players[this.id_] = this),
          R.split(".")[0]);
      this.addClass("vjs-v" + i),
        this.userActive(!0),
        this.reportUserActivity(),
        this.one("play", (e) => this.listenForUserActivity_(e)),
        this.on("keydown", (e) => this.handleKeyDown(e)),
        this.on("languagechange", (e) => this.handleLanguagechange(e)),
        this.breakpoints(this.options_.breakpoints),
        this.responsive(this.options_.responsive),
        this.on("ready", () => {
          this.audioPosterMode(this.options_.audioPosterMode),
            this.audioOnlyMode(this.options_.audioOnlyMode);
        });
    }
    dispose() {
      var e;
      this.trigger("dispose"),
        this.off("dispose"),
        p(
          document,
          this.fsApi_.fullscreenchange,
          this.boundDocumentFullscreenChange_
        ),
        p(document, "keydown", this.boundFullWindowOnEscKey_),
        this.styleEl_ &&
          this.styleEl_.parentNode &&
          (this.styleEl_.parentNode.removeChild(this.styleEl_),
          (this.styleEl_ = null)),
        (b.players[this.id_] = null),
        this.tag && this.tag.player && (this.tag.player = null),
        this.el_ && this.el_.player && (this.el_.player = null),
        this.tech_ &&
          (this.tech_.dispose(),
          (this.isPosterFromTech_ = !1),
          (this.poster_ = "")),
        this.playerElIngest_ && (this.playerElIngest_ = null),
        this.tag && (this.tag = null),
        (e = this),
        (hs[e.id()] = null),
        a.names.forEach((e) => {
          e = this[a[e].getterName]();
          e && e.off && e.off();
        }),
        super.dispose({ restoreEl: this.options_.restoreEl });
    }
    createEl() {
      let t = this.tag,
        i,
        e = (this.playerElIngest_ =
          t.parentNode &&
          t.parentNode.hasAttribute &&
          t.parentNode.hasAttribute("data-vjs-player"));
      const s = "video-js" === this.tag.tagName.toLowerCase(),
        r =
          (e
            ? (i = this.el_ = t.parentNode)
            : s || (i = this.el_ = super.createEl("div")),
          Ae(t));
      if (s) {
        for (
          i = this.el_ = t, t = this.tag = document.createElement("video");
          i.children.length;

        )
          t.appendChild(i.firstChild);
        Ee(i, "video-js") || Ce(i, "video-js"),
          i.appendChild(t),
          (e = this.playerElIngest_ = i),
          Object.keys(i).forEach((e) => {
            try {
              t[e] = i[e];
            } catch (e) {}
          });
      }
      t.setAttribute("tabindex", "-1"),
        (r.tabindex = "-1"),
        ae &&
          ue &&
          (t.setAttribute("role", "application"), (r.role = "application")),
        t.removeAttribute("width"),
        t.removeAttribute("height"),
        "width" in r && delete r.width,
        "height" in r && delete r.height,
        Object.getOwnPropertyNames(r).forEach(function (e) {
          (s && "class" === e) || i.setAttribute(e, r[e]),
            s && t.setAttribute(e, r[e]);
        }),
        (t.playerId = t.id),
        (t.id += "_html5_api"),
        (t.className = "vjs-tech"),
        (t.player = i.player = this).addClass("vjs-paused"),
        !0 !== window.VIDEOJS_NO_DYNAMIC_STYLE &&
          ((this.styleEl_ = Ze("vjs-styles-dimensions")),
          (n = $e(".vjs-styles-defaults")),
          (a = $e("head")).insertBefore(
            this.styleEl_,
            n ? n.nextSibling : a.firstChild
          )),
        (this.fill_ = !1),
        (this.fluid_ = !1),
        this.width(this.options_.width),
        this.height(this.options_.height),
        this.fill(this.options_.fill),
        this.fluid(this.options_.fluid),
        this.aspectRatio(this.options_.aspectRatio),
        this.crossOrigin(
          this.options_.crossOrigin || this.options_.crossorigin
        );
      var n,
        a,
        o = t.getElementsByTagName("a");
      for (let e = 0; e < o.length; e++) {
        var l = o.item(e);
        Ce(l, "vjs-hidden"), l.setAttribute("hidden", "hidden");
      }
      return (
        (t.initNetworkState_ = t.networkState),
        t.parentNode && !e && t.parentNode.insertBefore(i, t),
        we(t, i),
        this.children_.unshift(t),
        this.el_.setAttribute("lang", this.language_),
        this.el_.setAttribute("translate", "no"),
        (this.el_ = i)
      );
    }
    crossOrigin(e) {
      if ("undefined" == typeof e) return this.techGet_("crossOrigin");
      null !== e && "anonymous" !== e && "use-credentials" !== e
        ? d.warn(
            `crossOrigin must be null,  "anonymous" or "use-credentials", given "${e}"`
          )
        : (this.techCall_("setCrossOrigin", e),
          this.posterImage && this.posterImage.crossOrigin(e));
    }
    width(e) {
      return this.dimension("width", e);
    }
    height(e) {
      return this.dimension("height", e);
    }
    dimension(e, t) {
      var i,
        s = e + "_";
      if (void 0 === t) return this[s] || 0;
      "" === t || "auto" === t
        ? ((this[s] = void 0), this.updateStyleEl_())
        : ((i = parseFloat(t)),
          isNaN(i)
            ? d.error(`Improper value "${t}" supplied for for ` + e)
            : ((this[s] = i), this.updateStyleEl_()));
    }
    fluid(e) {
      if (void 0 === e) return !!this.fluid_;
      var t;
      (this.fluid_ = !!e),
        _t(this) &&
          this.off(["playerreset", "resize"], this.boundUpdateStyleEl_),
        e
          ? (this.addClass("vjs-fluid"),
            this.fill(!1),
            (e = this),
            (t = () => {
              this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
            }),
            _t(e)
              ? t()
              : (e.eventedCallbacks || (e.eventedCallbacks = []),
                e.eventedCallbacks.push(t)))
          : this.removeClass("vjs-fluid"),
        this.updateStyleEl_();
    }
    fill(e) {
      if (void 0 === e) return !!this.fill_;
      (this.fill_ = !!e),
        e
          ? (this.addClass("vjs-fill"), this.fluid(!1))
          : this.removeClass("vjs-fill");
    }
    aspectRatio(e) {
      if (void 0 === e) return this.aspectRatio_;
      if (!/^\d+\:\d+$/.test(e))
        throw new Error(
          "Improper value supplied for aspect ratio. The format should be width:height, for example 16:9."
        );
      (this.aspectRatio_ = e), this.fluid(!0), this.updateStyleEl_();
    }
    updateStyleEl_() {
      if (!0 === window.VIDEOJS_NO_DYNAMIC_STYLE) {
        const e =
            "number" == typeof this.width_ ? this.width_ : this.options_.width,
          t =
            "number" == typeof this.height_
              ? this.height_
              : this.options_.height;
        var r = this.tech_ && this.tech_.el();
        void (r && (0 <= e && (r.width = e), 0 <= t) && (r.height = t));
      } else {
        let e, t, i, s;
        (r = (i =
          void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_
            ? this.aspectRatio_
            : 0 < this.videoWidth()
            ? this.videoWidth() + ":" + this.videoHeight()
            : "16:9").split(":")),
          (r = r[1] / r[0]);
        (e =
          void 0 !== this.width_
            ? this.width_
            : void 0 !== this.height_
            ? this.height_ / r
            : this.videoWidth() || 300),
          (t = void 0 !== this.height_ ? this.height_ : e * r),
          (s = /^[^a-zA-Z]/.test(this.id())
            ? "dimensions-" + this.id()
            : this.id() + "-dimensions"),
          this.addClass(s),
          et(
            this.styleEl_,
            `
      .${s} {
        width: ${e}px;
        height: ${t}px;
      }

      .${s}.vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: ${100 * r}%;
      }
    `
          );
      }
    }
    loadTech_(e, t) {
      this.tech_ && this.unloadTech_();
      var i = g(e),
        s = e.charAt(0).toLowerCase() + e.slice(1);
      "Html5" !== i &&
        this.tag &&
        (_.getTech("Html5").disposeMediaElement(this.tag),
        (this.tag.player = null),
        (this.tag = null)),
        (this.techName_ = i),
        (this.isReady_ = !1);
      let r = this.autoplay();
      const n = {
        source: t,
        autoplay: (r =
          "string" == typeof this.autoplay() ||
          (!0 === this.autoplay() && this.options_.normalizeAutoplay)
            ? !1
            : r),
        nativeControlsForTouch: this.options_.nativeControlsForTouch,
        playerId: this.id(),
        techId: this.id() + `_${s}_api`,
        playsinline: this.options_.playsinline,
        preload: this.options_.preload,
        loop: this.options_.loop,
        disablePictureInPicture: this.options_.disablePictureInPicture,
        muted: this.options_.muted,
        poster: this.poster(),
        language: this.language(),
        playerElIngest: this.playerElIngest_ || !1,
        "vtt.js": this.options_["vtt.js"],
        canOverridePoster: !!this.options_.techCanOverridePoster,
        enableSourceset: this.options_.enableSourceset,
      };
      a.names.forEach((e) => {
        e = a[e];
        n[e.getterName] = this[e.privateName];
      }),
        Object.assign(n, this.options_[i]),
        Object.assign(n, this.options_[s]),
        Object.assign(n, this.options_[e.toLowerCase()]),
        this.tag && (n.tag = this.tag),
        t &&
          t.src === this.cache_.src &&
          0 < this.cache_.currentTime &&
          (n.startTime = this.cache_.currentTime);
      s = _.getTech(e);
      if (!s)
        throw new Error(
          `No Tech named '${i}' exists! '${i}' should be registered using videojs.registerTech()'`
        );
      (this.tech_ = new s(n)),
        this.tech_.ready(m(this, this.handleTechReady_), !0),
        Xt(this.textTracksJson_ || [], this.tech_),
        Yr.forEach((t) => {
          this.on(this.tech_, t, (e) => this[`handleTech${g(t)}_`](e));
        }),
        Object.keys(Qr).forEach((t) => {
          this.on(this.tech_, t, (e) => {
            0 === this.tech_.playbackRate() && this.tech_.seeking()
              ? this.queuedCallbacks_.push({
                  callback: this[`handleTech${Qr[t]}_`].bind(this),
                  event: e,
                })
              : this[`handleTech${Qr[t]}_`](e);
          });
        }),
        this.on(this.tech_, "loadstart", (e) => this.handleTechLoadStart_(e)),
        this.on(this.tech_, "sourceset", (e) => this.handleTechSourceset_(e)),
        this.on(this.tech_, "waiting", (e) => this.handleTechWaiting_(e)),
        this.on(this.tech_, "ended", (e) => this.handleTechEnded_(e)),
        this.on(this.tech_, "seeking", (e) => this.handleTechSeeking_(e)),
        this.on(this.tech_, "play", (e) => this.handleTechPlay_(e)),
        this.on(this.tech_, "pause", (e) => this.handleTechPause_(e)),
        this.on(this.tech_, "durationchange", (e) =>
          this.handleTechDurationChange_(e)
        ),
        this.on(this.tech_, "fullscreenchange", (e, t) =>
          this.handleTechFullscreenChange_(e, t)
        ),
        this.on(this.tech_, "fullscreenerror", (e, t) =>
          this.handleTechFullscreenError_(e, t)
        ),
        this.on(this.tech_, "enterpictureinpicture", (e) =>
          this.handleTechEnterPictureInPicture_(e)
        ),
        this.on(this.tech_, "leavepictureinpicture", (e) =>
          this.handleTechLeavePictureInPicture_(e)
        ),
        this.on(this.tech_, "error", (e) => this.handleTechError_(e)),
        this.on(this.tech_, "posterchange", (e) =>
          this.handleTechPosterChange_(e)
        ),
        this.on(this.tech_, "textdata", (e) => this.handleTechTextData_(e)),
        this.on(this.tech_, "ratechange", (e) => this.handleTechRateChange_(e)),
        this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_),
        this.usingNativeControls(this.techGet_("controls")),
        this.controls() &&
          !this.usingNativeControls() &&
          this.addTechControlsListeners_(),
        this.tech_.el().parentNode === this.el() ||
          ("Html5" === i && this.tag) ||
          we(this.tech_.el(), this.el()),
        this.tag && ((this.tag.player = null), (this.tag = null));
    }
    unloadTech_() {
      a.names.forEach((e) => {
        e = a[e];
        this[e.privateName] = this[e.getterName]();
      }),
        (this.textTracksJson_ = zt(this.tech_)),
        (this.isReady_ = !1),
        this.tech_.dispose(),
        (this.tech_ = !1),
        this.isPosterFromTech_ &&
          ((this.poster_ = ""), this.trigger("posterchange")),
        (this.isPosterFromTech_ = !1);
    }
    tech(e) {
      return (
        void 0 === e &&
          d.warn(
            "Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"
          ),
        this.tech_
      );
    }
    addTechControlsListeners_() {
      this.removeTechControlsListeners_(),
        this.on(this.tech_, "click", this.boundHandleTechClick_),
        this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_),
        this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_),
        this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_),
        this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_),
        this.on(this.tech_, "tap", this.boundHandleTechTap_);
    }
    removeTechControlsListeners_() {
      this.off(this.tech_, "tap", this.boundHandleTechTap_),
        this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_),
        this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_),
        this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_),
        this.off(this.tech_, "click", this.boundHandleTechClick_),
        this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_);
    }
    handleTechReady_() {
      this.triggerReady(),
        this.cache_.volume && this.techCall_("setVolume", this.cache_.volume),
        this.handleTechPosterChange_(),
        this.handleTechDurationChange_();
    }
    handleTechLoadStart_() {
      this.removeClass("vjs-ended", "vjs-seeking"),
        this.error(null),
        this.handleTechDurationChange_(),
        this.paused() && this.hasStarted(!1),
        this.trigger("loadstart"),
        this.manualAutoplay_(
          !0 === this.autoplay() && this.options_.normalizeAutoplay
            ? "play"
            : this.autoplay()
        );
    }
    manualAutoplay_(t) {
      if (this.tech_ && "string" == typeof t) {
        var i = () => {
          const e = this.muted(),
            t =
              (this.muted(!0),
              () => {
                this.muted(e);
              });
          this.playTerminatedQueue_.push(t);
          var i = this.play();
          if ($t(i))
            return i.catch((e) => {
              throw (
                (t(),
                new Error(
                  "Rejection at manualAutoplay. Restoring muted value. " +
                    (e || "")
                ))
              );
            });
        };
        let e;
        if (
          ("any" !== t || this.muted()
            ? (e = "muted" !== t || this.muted() ? this.play() : i())
            : $t((e = this.play())) && (e = e.catch(i)),
          $t(e))
        )
          return e
            .then(() => {
              this.trigger({ type: "autoplay-success", autoplay: t });
            })
            .catch(() => {
              this.trigger({ type: "autoplay-failure", autoplay: t });
            });
      }
    }
    updateSourceCaches_(e = "") {
      let t = e,
        i = "";
      "string" != typeof t && ((t = e.src), (i = e.type)),
        (this.cache_.source = this.cache_.source || {}),
        (this.cache_.sources = this.cache_.sources || []),
        t &&
          !i &&
          (i = ((e, t) => {
            if (!t) return "";
            if (e.cache_.source.src === t && e.cache_.source.type)
              return e.cache_.source.type;
            var i = e.cache_.sources.filter((e) => e.src === t);
            if (i.length) return i[0].type;
            var s = e.$$("source");
            for (let e = 0; e < s.length; e++) {
              var r = s[e];
              if (r.type && r.src && r.src === t) return r.type;
            }
            return Ts(t);
          })(this, t)),
        (this.cache_.source = h({}, e, { src: t, type: i }));
      var e = this.cache_.sources.filter((e) => e.src && e.src === t),
        s = [],
        r = this.$$("source"),
        n = [];
      for (let e = 0; e < r.length; e++) {
        var a = Ae(r[e]);
        s.push(a), a.src && a.src === t && n.push(a.src);
      }
      n.length && !e.length
        ? (this.cache_.sources = s)
        : e.length || (this.cache_.sources = [this.cache_.source]),
        (this.cache_.src = t);
    }
    handleTechSourceset_(t) {
      if (!this.changingSrc_) {
        let e = (e) => this.updateSourceCaches_(e);
        var i = this.currentSource().src,
          s = t.src;
        (e =
          !i ||
          /^blob:/.test(i) ||
          !/^blob:/.test(s) ||
          (this.lastSource_ &&
            (this.lastSource_.tech === s || this.lastSource_.player === i))
            ? e
            : () => {})(s),
          t.src ||
            this.tech_.any(["sourceset", "loadstart"], (e) => {
              "sourceset" !== e.type &&
                ((e = this.techGet("currentSrc")),
                (this.lastSource_.tech = e),
                this.updateSourceCaches_(e));
            });
      }
      (this.lastSource_ = { player: this.currentSource().src, tech: t.src }),
        this.trigger({ src: t.src, type: "sourceset" });
    }
    hasStarted(e) {
      if (void 0 === e) return this.hasStarted_;
      e !== this.hasStarted_ &&
        ((this.hasStarted_ = e),
        this.hasStarted_
          ? this.addClass("vjs-has-started")
          : this.removeClass("vjs-has-started"));
    }
    handleTechPlay_() {
      this.removeClass("vjs-ended", "vjs-paused"),
        this.addClass("vjs-playing"),
        this.hasStarted(!0),
        this.trigger("play");
    }
    handleTechRateChange_() {
      0 < this.tech_.playbackRate() &&
        0 === this.cache_.lastPlaybackRate &&
        (this.queuedCallbacks_.forEach((e) => e.callback(e.event)),
        (this.queuedCallbacks_ = [])),
        (this.cache_.lastPlaybackRate = this.tech_.playbackRate()),
        this.trigger("ratechange");
    }
    handleTechWaiting_() {
      this.addClass("vjs-waiting"), this.trigger("waiting");
      const e = this.currentTime(),
        t = () => {
          e !== this.currentTime() &&
            (this.removeClass("vjs-waiting"), this.off("timeupdate", t));
        };
      this.on("timeupdate", t);
    }
    handleTechCanPlay_() {
      this.removeClass("vjs-waiting"), this.trigger("canplay");
    }
    handleTechCanPlayThrough_() {
      this.removeClass("vjs-waiting"), this.trigger("canplaythrough");
    }
    handleTechPlaying_() {
      this.removeClass("vjs-waiting"), this.trigger("playing");
    }
    handleTechSeeking_() {
      this.addClass("vjs-seeking"), this.trigger("seeking");
    }
    handleTechSeeked_() {
      this.removeClass("vjs-seeking", "vjs-ended"), this.trigger("seeked");
    }
    handleTechPause_() {
      this.removeClass("vjs-playing"),
        this.addClass("vjs-paused"),
        this.trigger("pause");
    }
    handleTechEnded_() {
      this.addClass("vjs-ended"),
        this.removeClass("vjs-waiting"),
        this.options_.loop
          ? (this.currentTime(0), this.play())
          : this.paused() || this.pause(),
        this.trigger("ended");
    }
    handleTechDurationChange_() {
      this.duration(this.techGet_("duration"));
    }
    handleTechClick_(e) {
      !this.controls_ ||
        (void 0 !== this.options_ &&
          void 0 !== this.options_.userActions &&
          void 0 !== this.options_.userActions.click &&
          !1 === this.options_.userActions.click) ||
        (void 0 !== this.options_ &&
        void 0 !== this.options_.userActions &&
        "function" == typeof this.options_.userActions.click
          ? this.options_.userActions.click.call(this, e)
          : this.paused()
          ? Wt(this.play())
          : this.pause());
    }
    handleTechDoubleClick_(t) {
      !this.controls_ ||
        Array.prototype.some.call(
          this.$$(".vjs-control-bar, .vjs-modal-dialog"),
          (e) => e.contains(t.target)
        ) ||
        (void 0 !== this.options_ &&
          void 0 !== this.options_.userActions &&
          void 0 !== this.options_.userActions.doubleClick &&
          !1 === this.options_.userActions.doubleClick) ||
        (void 0 !== this.options_ &&
        void 0 !== this.options_.userActions &&
        "function" == typeof this.options_.userActions.doubleClick
          ? this.options_.userActions.doubleClick.call(this, t)
          : this.isFullscreen()
          ? this.exitFullscreen()
          : this.requestFullscreen());
    }
    handleTechTap_() {
      this.userActive(!this.userActive());
    }
    handleTechTouchStart_() {
      this.userWasActive = this.userActive();
    }
    handleTechTouchMove_() {
      this.userWasActive && this.reportUserActivity();
    }
    handleTechTouchEnd_(e) {
      e.cancelable && e.preventDefault();
    }
    toggleFullscreenClass_() {
      this.isFullscreen()
        ? this.addClass("vjs-fullscreen")
        : this.removeClass("vjs-fullscreen");
    }
    documentFullscreenChange_(t) {
      t = t.target.player;
      if (!t || t === this) {
        t = this.el();
        let e = document[this.fsApi_.fullscreenElement] === t;
        !e && t.matches
          ? (e = t.matches(":" + this.fsApi_.fullscreen))
          : !e &&
            t.msMatchesSelector &&
            (e = t.msMatchesSelector(":" + this.fsApi_.fullscreen)),
          this.isFullscreen(e);
      }
    }
    handleTechFullscreenChange_(e, t) {
      t &&
        (t.nativeIOSFullscreen &&
          (this.addClass("vjs-ios-native-fs"),
          this.tech_.one("webkitendfullscreen", () => {
            this.removeClass("vjs-ios-native-fs");
          })),
        this.isFullscreen(t.isFullscreen));
    }
    handleTechFullscreenError_(e, t) {
      this.trigger("fullscreenerror", t);
    }
    togglePictureInPictureClass_() {
      this.isInPictureInPicture()
        ? this.addClass("vjs-picture-in-picture")
        : this.removeClass("vjs-picture-in-picture");
    }
    handleTechEnterPictureInPicture_(e) {
      this.isInPictureInPicture(!0);
    }
    handleTechLeavePictureInPicture_(e) {
      this.isInPictureInPicture(!1);
    }
    handleTechError_() {
      var e = this.tech_.error();
      this.error(e);
    }
    handleTechTextData_() {
      let e = 1 < arguments.length ? arguments[1] : null;
      this.trigger("textdata", e);
    }
    getCache() {
      return this.cache_;
    }
    resetCache_() {
      this.cache_ = {
        currentTime: 0,
        initTime: 0,
        inactivityTimeout: this.options_.inactivityTimeout,
        duration: NaN,
        lastVolume: 1,
        lastPlaybackRate: this.defaultPlaybackRate(),
        media: null,
        src: "",
        source: {},
        sources: [],
        playbackRates: [],
        volume: 1,
      };
    }
    techCall_(t, i) {
      this.ready(function () {
        if (t in gs)
          return (e = this.middleware_), this.tech_[t](e.reduce(ys(t), i));
        if (t in fs) return ps(this.middleware_, this.tech_, t, i);
        var e;
        try {
          this.tech_ && this.tech_[t](i);
        } catch (e) {
          throw (d(e), e);
        }
      }, !0);
    }
    techGet_(t) {
      if (this.tech_ && this.tech_.isReady_) {
        if (t in ms)
          return (
            (e = this.middleware_),
            (i = this.tech_),
            e.reduceRight(ys(t), i[t]())
          );
        if (t in fs) return ps(this.middleware_, this.tech_, t);
        var e, i;
        try {
          return this.tech_[t]();
        } catch (e) {
          throw (
            (void 0 === this.tech_[t]
              ? d(
                  `Video.js: ${t} method not defined for ${this.techName_} playback technology.`,
                  e
                )
              : "TypeError" === e.name
              ? (d(
                  `Video.js: ${t} unavailable on ${this.techName_} playback technology element.`,
                  e
                ),
                (this.tech_.isReady_ = !1))
              : d(e),
            e)
          );
        }
      }
    }
    play() {
      return new Promise((e) => {
        this.play_(e);
      });
    }
    play_(e = Wt) {
      this.playCallbacks_.push(e);
      var t,
        e = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()));
      this.waitToPlay_ &&
        (this.off(["ready", "loadstart"], this.waitToPlay_),
        (this.waitToPlay_ = null)),
        this.isReady_ && e
          ? null === (t = this.techGet_("play"))
            ? this.runPlayTerminatedQueue_()
            : this.runPlayCallbacks_(t)
          : ((this.waitToPlay_ = (e) => {
              this.play_();
            }),
            this.one(["ready", "loadstart"], this.waitToPlay_),
            e || (!fe && !u) || this.load());
    }
    runPlayTerminatedQueue_() {
      var e = this.playTerminatedQueue_.slice(0);
      (this.playTerminatedQueue_ = []),
        e.forEach(function (e) {
          e();
        });
    }
    runPlayCallbacks_(t) {
      var e = this.playCallbacks_.slice(0);
      (this.playCallbacks_ = []),
        (this.playTerminatedQueue_ = []),
        e.forEach(function (e) {
          e(t);
        });
    }
    pause() {
      this.techCall_("pause");
    }
    paused() {
      return !1 !== this.techGet_("paused");
    }
    played() {
      return this.techGet_("played") || Mt(0, 0);
    }
    scrubbing(e) {
      if ("undefined" == typeof e) return this.scrubbing_;
      (this.scrubbing_ = !!e),
        this.techCall_("setScrubbing", this.scrubbing_),
        e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing");
    }
    currentTime(e) {
      return "undefined" != typeof e
        ? (e < 0 && (e = 0),
          this.isReady_ &&
          !this.changingSrc_ &&
          this.tech_ &&
          this.tech_.isReady_
            ? (this.techCall_("setCurrentTime", e),
              void (this.cache_.initTime = 0))
            : ((this.cache_.initTime = e),
              this.off("canplay", this.boundApplyInitTime_),
              void this.one("canplay", this.boundApplyInitTime_)))
        : ((this.cache_.currentTime = this.techGet_("currentTime") || 0),
          this.cache_.currentTime);
    }
    applyInitTime_() {
      this.currentTime(this.cache_.initTime);
    }
    duration(e) {
      if (void 0 === e)
        return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
      (e = (e = parseFloat(e)) < 0 ? 1 / 0 : e) !== this.cache_.duration &&
        ((this.cache_.duration = e) === 1 / 0
          ? this.addClass("vjs-live")
          : this.removeClass("vjs-live"),
        isNaN(e) || this.trigger("durationchange"));
    }
    remainingTime() {
      return this.duration() - this.currentTime();
    }
    remainingTimeDisplay() {
      return Math.floor(this.duration()) - Math.floor(this.currentTime());
    }
    buffered() {
      let e = this.techGet_("buffered");
      return (e = e && e.length ? e : Mt(0, 0));
    }
    bufferedPercent() {
      return qt(this.buffered(), this.duration());
    }
    bufferedEnd() {
      var e = this.buffered(),
        t = this.duration();
      let i = e.end(e.length - 1);
      return (i = i > t ? t : i);
    }
    volume(e) {
      let t;
      if (void 0 === e)
        return (t = parseFloat(this.techGet_("volume"))), isNaN(t) ? 1 : t;
      (t = Math.max(0, Math.min(1, parseFloat(e)))),
        (this.cache_.volume = t),
        this.techCall_("setVolume", t),
        0 < t && this.lastVolume_(t);
    }
    muted(e) {
      if (void 0 === e) return this.techGet_("muted") || !1;
      this.techCall_("setMuted", e);
    }
    defaultMuted(e) {
      return void 0 !== e
        ? this.techCall_("setDefaultMuted", e)
        : this.techGet_("defaultMuted") || !1;
    }
    lastVolume_(e) {
      if (void 0 === e || 0 === e) return this.cache_.lastVolume;
      this.cache_.lastVolume = e;
    }
    supportsFullScreen() {
      return this.techGet_("supportsFullScreen") || !1;
    }
    isFullscreen(e) {
      var t;
      if (void 0 === e) return this.isFullscreen_;
      (t = this.isFullscreen_),
        (this.isFullscreen_ = Boolean(e)),
        this.isFullscreen_ !== t &&
          this.fsApi_.prefixed &&
          this.trigger("fullscreenchange"),
        this.toggleFullscreenClass_();
    }
    requestFullscreen(a) {
      this.isInPictureInPicture() && this.exitPictureInPicture();
      const o = this;
      return new Promise((e, i) => {
        function s() {
          o.off("fullscreenerror", r), o.off("fullscreenchange", t);
        }
        function t() {
          s(), e();
        }
        function r(e, t) {
          s(), i(t);
        }
        o.one("fullscreenchange", t), o.one("fullscreenerror", r);
        var n = o.requestFullscreenHelper_(a);
        n && (n.then(s, s), n.then(e, i));
      });
    }
    requestFullscreenHelper_(e) {
      let t;
      if (
        (this.fsApi_.prefixed ||
          ((t =
            (this.options_.fullscreen && this.options_.fullscreen.options) ||
            {}),
          void 0 !== e && (t = e)),
        this.fsApi_.requestFullscreen)
      )
        return (
          (e = this.el_[this.fsApi_.requestFullscreen](t)) &&
            e.then(
              () => this.isFullscreen(!0),
              () => this.isFullscreen(!1)
            ),
          e
        );
      this.tech_.supportsFullScreen() && !0 == !this.options_.preferFullWindow
        ? this.techCall_("enterFullScreen")
        : this.enterFullWindow();
    }
    exitFullscreen() {
      const a = this;
      return new Promise((e, i) => {
        function s() {
          a.off("fullscreenerror", r), a.off("fullscreenchange", t);
        }
        function t() {
          s(), e();
        }
        function r(e, t) {
          s(), i(t);
        }
        a.one("fullscreenchange", t), a.one("fullscreenerror", r);
        var n = a.exitFullscreenHelper_();
        n && (n.then(s, s), n.then(e, i));
      });
    }
    exitFullscreenHelper_() {
      var e;
      if (this.fsApi_.requestFullscreen)
        return (
          (e = document[this.fsApi_.exitFullscreen]()) &&
            Wt(e.then(() => this.isFullscreen(!1))),
          e
        );
      this.tech_.supportsFullScreen() && !0 == !this.options_.preferFullWindow
        ? this.techCall_("exitFullScreen")
        : this.exitFullWindow();
    }
    enterFullWindow() {
      this.isFullscreen(!0),
        (this.isFullWindow = !0),
        (this.docOrigOverflow = document.documentElement.style.overflow),
        ot(document, "keydown", this.boundFullWindowOnEscKey_),
        (document.documentElement.style.overflow = "hidden"),
        Ce(document.body, "vjs-full-window"),
        this.trigger("enterFullWindow");
    }
    fullWindowOnEscKey(e) {
      r.isEventKey(e, "Esc") &&
        !0 === this.isFullscreen() &&
        (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen());
    }
    exitFullWindow() {
      this.isFullscreen(!1),
        (this.isFullWindow = !1),
        p(document, "keydown", this.boundFullWindowOnEscKey_),
        (document.documentElement.style.overflow = this.docOrigOverflow),
        ke(document.body, "vjs-full-window"),
        this.trigger("exitFullWindow");
    }
    disablePictureInPicture(e) {
      if (void 0 === e) return this.techGet_("disablePictureInPicture");
      this.techCall_("setDisablePictureInPicture", e),
        (this.options_.disablePictureInPicture = e),
        this.trigger("disablepictureinpicturechanged");
    }
    isInPictureInPicture(e) {
      if (void 0 === e) return !!this.isInPictureInPicture_;
      (this.isInPictureInPicture_ = !!e), this.togglePictureInPictureClass_();
    }
    requestPictureInPicture() {
      if (
        "pictureInPictureEnabled" in document &&
        !1 === this.disablePictureInPicture()
      )
        return this.techGet_("requestPictureInPicture");
    }
    exitPictureInPicture() {
      if ("pictureInPictureEnabled" in document)
        return document.exitPictureInPicture();
    }
    handleKeyDown(e) {
      var t,
        i,
        s = this.options_["userActions"];
      s &&
        s.hotkeys &&
        ((t = this.el_.ownerDocument.activeElement),
        (i = t.tagName.toLowerCase()),
        t.isContentEditable ||
          ("input" === i
            ? -1 ===
              [
                "button",
                "checkbox",
                "hidden",
                "radio",
                "reset",
                "submit",
              ].indexOf(t.type)
            : -1 !== ["textarea"].indexOf(i)) ||
          ("function" == typeof s.hotkeys
            ? s.hotkeys.call(this, e)
            : this.handleHotkeys(e)));
    }
    handleHotkeys(e) {
      var {
        fullscreenKey: t = (e) => r.isEventKey(e, "f"),
        muteKey: i = (e) => r.isEventKey(e, "m"),
        playPauseKey: s = (e) =>
          r.isEventKey(e, "k") || r.isEventKey(e, "Space"),
      } = this.options_.userActions ? this.options_.userActions.hotkeys : {};
      t.call(this, e)
        ? (e.preventDefault(),
          e.stopPropagation(),
          (t = f.getComponent("FullscreenToggle")),
          !1 !== document[this.fsApi_.fullscreenEnabled] &&
            t.prototype.handleClick.call(this, e))
        : i.call(this, e)
        ? (e.preventDefault(),
          e.stopPropagation(),
          f.getComponent("MuteToggle").prototype.handleClick.call(this, e))
        : s.call(this, e) &&
          (e.preventDefault(),
          e.stopPropagation(),
          f.getComponent("PlayToggle").prototype.handleClick.call(this, e));
    }
    canPlayType(s) {
      var r;
      for (let t = 0, i = this.options_.techOrder; t < i.length; t++) {
        var n = i[t];
        let e = _.getTech(n);
        if ((e = e || f.getComponent(n))) {
          if (e.isSupported() && (r = e.canPlayType(s))) return r;
        } else
          d.error(
            `The "${n}" tech is undefined. Skipped browser support check for that tech.`
          );
      }
      return "";
    }
    selectSource(e) {
      function t(e, i, s) {
        let r;
        return (
          e.some((t) =>
            i.some((e) => {
              if ((r = s(t, e))) return !0;
            })
          ),
          r
        );
      }
      var i = this.options_.techOrder
        .map((e) => [e, _.getTech(e)])
        .filter(([e, t]) =>
          t
            ? t.isSupported()
            : (d.error(
                `The "${e}" tech is undefined. Skipped browser support check for that tech.`
              ),
              !1)
        );
      let s;
      var r,
        n = ([e, t], i) => {
          if (t.canPlaySource(i, this.options_[e.toLowerCase()]))
            return { source: i, tech: e };
        };
      return (
        (s = this.options_.sourceOrder
          ? t(e, i, ((r = n), (e, t) => r(t, e)))
          : t(i, e, n)) || !1
      );
    }
    handleSrc_(e, s) {
      if ("undefined" == typeof e) return this.cache_.src || "";
      this.resetRetryOnError_ && this.resetRetryOnError_();
      const r = vs(e);
      if (r.length) {
        if (
          ((this.changingSrc_ = !0),
          s || (this.cache_.sources = r),
          this.updateSourceCaches_(r[0]),
          cs(this, r[0], (e, t) => {
            var i;
            if (
              ((this.middleware_ = t),
              s || (this.cache_.sources = r),
              this.updateSourceCaches_(e),
              this.src_(e))
            )
              return 1 < r.length
                ? this.handleSrc_(r.slice(1))
                : ((this.changingSrc_ = !1),
                  this.setTimeout(function () {
                    this.error({
                      code: 4,
                      message: this.options_.notSupportedMessage,
                    });
                  }, 0),
                  void this.triggerReady());
            (i = this.tech_), t.forEach((e) => e.setTech && e.setTech(i));
          }),
          1 < r.length)
        ) {
          const t = () => {
              this.error(null), this.handleSrc_(r.slice(1), !0);
            },
            i = () => {
              this.off("error", t);
            };
          this.one("error", t),
            this.one("playing", i),
            (this.resetRetryOnError_ = () => {
              this.off("error", t), this.off("playing", i);
            });
        }
      } else
        this.setTimeout(function () {
          this.error({ code: 4, message: this.options_.notSupportedMessage });
        }, 0);
    }
    src(e) {
      return this.handleSrc_(e, !1);
    }
    src_(e) {
      var t = this.selectSource([e]);
      return (
        !t ||
        (Pt(t.tech, this.techName_)
          ? this.ready(function () {
              this.tech_.constructor.prototype.hasOwnProperty("setSource")
                ? this.techCall_("setSource", e)
                : this.techCall_("src", e.src),
                (this.changingSrc_ = !1);
            }, !0)
          : ((this.changingSrc_ = !0),
            this.loadTech_(t.tech, t.source),
            this.tech_.ready(() => {
              this.changingSrc_ = !1;
            })),
        !1)
      );
    }
    load() {
      this.techCall_("load");
    }
    reset() {
      this.paused()
        ? this.doReset_()
        : Wt(this.play().then(() => this.doReset_()));
    }
    doReset_() {
      this.tech_ && this.tech_.clearTracks("text"),
        this.resetCache_(),
        this.poster(""),
        this.loadTech_(this.options_.techOrder[0], null),
        this.techCall_("reset"),
        this.resetControlBarUI_(),
        _t(this) && this.trigger("playerreset");
    }
    resetControlBarUI_() {
      this.resetProgressBar_(),
        this.resetPlaybackRate_(),
        this.resetVolumeBar_();
    }
    resetProgressBar_() {
      this.currentTime(0);
      var { durationDisplay: e, remainingTimeDisplay: t } =
        this.controlBar || {};
      e && e.updateContent(), t && t.updateContent();
    }
    resetPlaybackRate_() {
      this.playbackRate(this.defaultPlaybackRate()),
        this.handleTechRateChange_();
    }
    resetVolumeBar_() {
      this.volume(1), this.trigger("volumechange");
    }
    currentSources() {
      var e = this.currentSource(),
        t = [];
      return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t;
    }
    currentSource() {
      return this.cache_.source || {};
    }
    currentSrc() {
      return (this.currentSource() && this.currentSource().src) || "";
    }
    currentType() {
      return (this.currentSource() && this.currentSource().type) || "";
    }
    preload(e) {
      if (void 0 === e) return this.techGet_("preload");
      this.techCall_("setPreload", e), (this.options_.preload = e);
    }
    autoplay(e) {
      if (void 0 === e) return this.options_.autoplay || !1;
      let t;
      ("string" == typeof e && /(any|play|muted)/.test(e)) ||
      (!0 === e && this.options_.normalizeAutoplay)
        ? ((this.options_.autoplay = e),
          this.manualAutoplay_("string" == typeof e ? e : "play"),
          (t = !1))
        : (this.options_.autoplay = !!e),
        (t = "undefined" == typeof t ? this.options_.autoplay : t),
        this.tech_ && this.techCall_("setAutoplay", t);
    }
    playsinline(e) {
      return void 0 !== e
        ? (this.techCall_("setPlaysinline", e),
          (this.options_.playsinline = e),
          this)
        : this.techGet_("playsinline");
    }
    loop(e) {
      if (void 0 === e) return this.techGet_("loop");
      this.techCall_("setLoop", e), (this.options_.loop = e);
    }
    poster(e) {
      if (void 0 === e) return this.poster_;
      (e = e || "") !== this.poster_ &&
        ((this.poster_ = e),
        this.techCall_("setPoster", e),
        (this.isPosterFromTech_ = !1),
        this.trigger("posterchange"));
    }
    handleTechPosterChange_() {
      var e;
      (!this.poster_ || this.options_.techCanOverridePoster) &&
        this.tech_ &&
        this.tech_.poster &&
        (e = this.tech_.poster() || "") !== this.poster_ &&
        ((this.poster_ = e),
        (this.isPosterFromTech_ = !0),
        this.trigger("posterchange"));
    }
    controls(e) {
      if (void 0 === e) return !!this.controls_;
      this.controls_ !== (e = !!e) &&
        ((this.controls_ = e),
        this.usingNativeControls() && this.techCall_("setControls", e),
        this.controls_
          ? (this.removeClass("vjs-controls-disabled"),
            this.addClass("vjs-controls-enabled"),
            this.trigger("controlsenabled"),
            this.usingNativeControls() || this.addTechControlsListeners_())
          : (this.removeClass("vjs-controls-enabled"),
            this.addClass("vjs-controls-disabled"),
            this.trigger("controlsdisabled"),
            this.usingNativeControls() || this.removeTechControlsListeners_()));
    }
    usingNativeControls(e) {
      if (void 0 === e) return !!this.usingNativeControls_;
      this.usingNativeControls_ !== (e = !!e) &&
        ((this.usingNativeControls_ = e),
        this.usingNativeControls_
          ? (this.addClass("vjs-using-native-controls"),
            this.trigger("usingnativecontrols"))
          : (this.removeClass("vjs-using-native-controls"),
            this.trigger("usingcustomcontrols")));
    }
    error(t) {
      if (void 0 === t) return this.error_ || null;
      if (
        (B("beforeerror").forEach((e) => {
          e = e(this, t);
          (K(e) && !Array.isArray(e)) ||
          "string" == typeof e ||
          "number" == typeof e ||
          null === e
            ? (t = e)
            : this.log.error(
                "please return a value that MediaError expects in beforeerror hooks"
              );
        }),
        this.options_.suppressNotSupportedError && t && 4 === t.code)
      ) {
        const e = function () {
          this.error(t);
        };
        (this.options_.suppressNotSupportedError = !1),
          this.any(["click", "touchstart"], e),
          void this.one("loadstart", function () {
            this.off(["click", "touchstart"], e);
          });
      } else
        null === t
          ? ((this.error_ = t),
            this.removeClass("vjs-error"),
            this.errorDisplay && this.errorDisplay.close())
          : ((this.error_ = new i(t)),
            this.addClass("vjs-error"),
            d.error(
              `(CODE:${this.error_.code} ${i.errorTypes[this.error_.code]})`,
              this.error_.message,
              this.error_
            ),
            this.trigger("error"),
            B("error").forEach((e) => e(this, this.error_)));
    }
    reportUserActivity(e) {
      this.userActivity_ = !0;
    }
    userActive(e) {
      if (void 0 === e) return this.userActive_;
      (e = !!e) !== this.userActive_ &&
        ((this.userActive_ = e),
        this.userActive_
          ? ((this.userActivity_ = !0),
            this.removeClass("vjs-user-inactive"),
            this.addClass("vjs-user-active"),
            this.trigger("useractive"))
          : (this.tech_ &&
              this.tech_.one("mousemove", function (e) {
                e.stopPropagation(), e.preventDefault();
              }),
            (this.userActivity_ = !1),
            this.removeClass("vjs-user-active"),
            this.addClass("vjs-user-inactive"),
            this.trigger("userinactive")));
    }
    listenForUserActivity_() {
      let t, i, s;
      const r = m(this, this.reportUserActivity);
      function e(e) {
        r(), this.clearInterval(t);
      }
      this.on("mousedown", function () {
        r(), this.clearInterval(t), (t = this.setInterval(r, 250));
      }),
        this.on("mousemove", function (e) {
          (e.screenX === i && e.screenY === s) ||
            ((i = e.screenX), (s = e.screenY), r());
        }),
        this.on("mouseup", e),
        this.on("mouseleave", e);
      var n = this.getChild("controlBar");
      !n ||
        u ||
        te ||
        (n.on("mouseenter", function (e) {
          0 !== this.player().options_.inactivityTimeout &&
            (this.player().cache_.inactivityTimeout =
              this.player().options_.inactivityTimeout),
            (this.player().options_.inactivityTimeout = 0);
        }),
        n.on("mouseleave", function (e) {
          this.player().options_.inactivityTimeout =
            this.player().cache_.inactivityTimeout;
        })),
        this.on("keydown", r),
        this.on("keyup", r);
      let a;
      this.setInterval(function () {
        var e;
        this.userActivity_ &&
          ((this.userActivity_ = !1),
          this.userActive(!0),
          this.clearTimeout(a),
          (e = this.options_.inactivityTimeout) <= 0 ||
            (a = this.setTimeout(function () {
              this.userActivity_ || this.userActive(!1);
            }, e)));
      }, 250);
    }
    playbackRate(e) {
      if (void 0 === e)
        return this.tech_ && this.tech_.featuresPlaybackRate
          ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate")
          : 1;
      this.techCall_("setPlaybackRate", e);
    }
    defaultPlaybackRate(e) {
      return void 0 !== e
        ? this.techCall_("setDefaultPlaybackRate", e)
        : this.tech_ && this.tech_.featuresPlaybackRate
        ? this.techGet_("defaultPlaybackRate")
        : 1;
    }
    isAudio(e) {
      if (void 0 === e) return !!this.isAudio_;
      this.isAudio_ = !!e;
    }
    enableAudioOnlyUI_() {
      this.addClass("vjs-audio-only-mode");
      var e = this.children();
      const t = this.getChild("ControlBar");
      var i = t && t.currentHeight();
      e.forEach((e) => {
        e !== t &&
          e.el_ &&
          !e.hasClass("vjs-hidden") &&
          (e.hide(), this.audioOnlyCache_.hiddenChildren.push(e));
      }),
        (this.audioOnlyCache_.playerHeight = this.currentHeight()),
        this.height(i),
        this.trigger("audioonlymodechange");
    }
    disableAudioOnlyUI_() {
      this.removeClass("vjs-audio-only-mode"),
        this.audioOnlyCache_.hiddenChildren.forEach((e) => e.show()),
        this.height(this.audioOnlyCache_.playerHeight),
        this.trigger("audioonlymodechange");
    }
    audioOnlyMode(e) {
      return "boolean" != typeof e || e === this.audioOnlyMode_
        ? this.audioOnlyMode_
        : (this.audioOnlyMode_ = e)
        ? ((e = []),
          this.isInPictureInPicture() && e.push(this.exitPictureInPicture()),
          this.isFullscreen() && e.push(this.exitFullscreen()),
          this.audioPosterMode() && e.push(this.audioPosterMode(!1)),
          Promise.all(e).then(() => this.enableAudioOnlyUI_()))
        : Promise.resolve().then(() => this.disableAudioOnlyUI_());
    }
    enablePosterModeUI_() {
      (this.tech_ && this.tech_).hide(),
        this.addClass("vjs-audio-poster-mode"),
        this.trigger("audiopostermodechange");
    }
    disablePosterModeUI_() {
      (this.tech_ && this.tech_).show(),
        this.removeClass("vjs-audio-poster-mode"),
        this.trigger("audiopostermodechange");
    }
    audioPosterMode(e) {
      return "boolean" != typeof e || e === this.audioPosterMode_
        ? this.audioPosterMode_
        : (this.audioPosterMode_ = e)
        ? (this.audioOnlyMode()
            ? this.audioOnlyMode(!1)
            : Promise.resolve()
          ).then(() => {
            this.enablePosterModeUI_();
          })
        : Promise.resolve().then(() => {
            this.disablePosterModeUI_();
          });
    }
    addTextTrack(e, t, i) {
      if (this.tech_) return this.tech_.addTextTrack(e, t, i);
    }
    addRemoteTextTrack(e, t) {
      if (this.tech_) return this.tech_.addRemoteTextTrack(e, t);
    }
    removeRemoteTextTrack(e = {}) {
      let t = e["track"];
      if (((t = t || e), this.tech_))
        return this.tech_.removeRemoteTextTrack(t);
    }
    getVideoPlaybackQuality() {
      return this.techGet_("getVideoPlaybackQuality");
    }
    videoWidth() {
      return (
        (this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth()) || 0
      );
    }
    videoHeight() {
      return (
        (this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight()) || 0
      );
    }
    language(e) {
      if (void 0 === e) return this.language_;
      this.language_ !== String(e).toLowerCase() &&
        ((this.language_ = String(e).toLowerCase()), _t(this)) &&
        this.trigger("languagechange");
    }
    languages() {
      return h(b.prototype.options_.languages, this.languages_);
    }
    toJSON() {
      var t = h(this.options_),
        i = t.tracks;
      t.tracks = [];
      for (let e = 0; e < i.length; e++) {
        var s = i[e];
        ((s = h(s)).player = void 0), (t.tracks[e] = s);
      }
      return t;
    }
    createModal(e, t) {
      (t = t || {}).content = e || "";
      const i = new Yt(this, t);
      return (
        this.addChild(i),
        i.on("dispose", () => {
          this.removeChild(i);
        }),
        i.open(),
        i
      );
    }
    updateCurrentBreakpoint_() {
      if (this.responsive()) {
        var t = this.currentBreakpoint(),
          i = this.currentWidth();
        for (let e = 0; e < Jr.length; e++) {
          var s = Jr[e];
          if (i <= this.breakpoints_[s]) {
            if (t === s) return;
            t && this.removeClass(Zr[t]),
              this.addClass(Zr[s]),
              (this.breakpoint_ = s);
            break;
          }
        }
      }
    }
    removeCurrentBreakpoint_() {
      var e = this.currentBreakpointClass();
      (this.breakpoint_ = ""), e && this.removeClass(e);
    }
    breakpoints(e) {
      return (
        void 0 !== e &&
          ((this.breakpoint_ = ""),
          (this.breakpoints_ = Object.assign({}, en, e)),
          this.updateCurrentBreakpoint_()),
        Object.assign(this.breakpoints_)
      );
    }
    responsive(e) {
      return void 0 === e
        ? this.responsive_
        : (e = Boolean(e)) !== this.responsive_
        ? ((this.responsive_ = e)
            ? (this.on("playerresize", this.boundUpdateCurrentBreakpoint_),
              this.updateCurrentBreakpoint_())
            : (this.off("playerresize", this.boundUpdateCurrentBreakpoint_),
              this.removeCurrentBreakpoint_()),
          e)
        : void 0;
    }
    currentBreakpoint() {
      return this.breakpoint_;
    }
    currentBreakpointClass() {
      return Zr[this.breakpoint_] || "";
    }
    loadMedia(e, t) {
      var i, s, r, n, a, o;
      e &&
        "object" == typeof e &&
        (this.reset(),
        (this.cache_.media = h(e)),
        ({
          artist: e,
          artwork: i,
          description: s,
          poster: r,
          src: n,
          textTracks: a,
          title: o,
        } = this.cache_.media),
        !i && r && (this.cache_.media.artwork = [{ src: r, type: Ts(r) }]),
        n && this.src(n),
        r && this.poster(r),
        Array.isArray(a) && a.forEach((e) => this.addRemoteTextTrack(e, !1)),
        this.titleBar &&
          this.titleBar.update({ title: o, description: s || e || "" }),
        this.ready(t));
    }
    getMedia() {
      var e, t;
      return this.cache_.media
        ? h(this.cache_.media)
        : ((e = this.poster()),
          (t = {
            src: this.currentSources(),
            textTracks: Array.prototype.map.call(
              this.remoteTextTracks(),
              (e) => ({
                kind: e.kind,
                label: e.label,
                language: e.language,
                src: e.src,
              })
            ),
          }),
          e &&
            ((t.poster = e),
            (t.artwork = [{ src: t.poster, type: Ts(t.poster) }])),
          t);
    }
    static getTagSettings(e) {
      var t,
        i = { sources: [], tracks: [] },
        s = Ae(e),
        r = s["data-setup"];
      if (
        (Ee(e, "vjs-fill") && (s.fill = !0),
        Ee(e, "vjs-fluid") && (s.fluid = !0),
        null !== r &&
          (([r, t] = Vt(r || "{}")), r && d.error(r), Object.assign(s, t)),
        Object.assign(i, s),
        e.hasChildNodes())
      ) {
        var n = e.childNodes;
        for (let e = 0, t = n.length; e < t; e++) {
          var a = n[e],
            o = a.nodeName.toLowerCase();
          "source" === o
            ? i.sources.push(Ae(a))
            : "track" === o && i.tracks.push(Ae(a));
        }
      }
      return i;
    }
    debug(e) {
      if (void 0 === e) return this.debugEnabled_;
      e
        ? (this.trigger("debugon"),
          (this.previousLogLevel_ = this.log.level),
          this.log.level("debug"),
          (this.debugEnabled_ = !0))
        : (this.trigger("debugoff"),
          this.log.level(this.previousLogLevel_),
          (this.previousLogLevel_ = void 0),
          (this.debugEnabled_ = !1));
    }
    playbackRates(e) {
      if (void 0 === e) return this.cache_.playbackRates;
      Array.isArray(e) &&
        e.every((e) => "number" == typeof e) &&
        ((this.cache_.playbackRates = e), this.trigger("playbackrateschange"));
    }
  }
  a.names.forEach(function (e) {
    const t = a[e];
    b.prototype[t.getterName] = function () {
      return this.tech_
        ? this.tech_[t.getterName]()
        : ((this[t.privateName] = this[t.privateName] || new t.ListClass()),
          this[t.privateName]);
    };
  }),
    (b.prototype.crossorigin = b.prototype.crossOrigin),
    (b.players = {});
  Dr = window.navigator;
  (b.prototype.options_ = {
    techOrder: _.defaultTechOrder_,
    html5: {},
    enableSourceset: !0,
    inactivityTimeout: 2e3,
    playbackRates: [],
    liveui: !1,
    children: [
      "mediaLoader",
      "posterImage",
      "titleBar",
      "textTrackDisplay",
      "loadingSpinner",
      "bigPlayButton",
      "liveTracker",
      "controlBar",
      "errorDisplay",
      "textTrackSettings",
      "resizeManager",
    ],
    language:
      (Dr &&
        ((Dr.languages && Dr.languages[0]) ||
          Dr.userLanguage ||
          Dr.language)) ||
      "en",
    languages: {},
    notSupportedMessage: "No compatible source was found for this media.",
    normalizeAutoplay: !1,
    fullscreen: { options: { navigationUI: "hide" } },
    breakpoints: {},
    responsive: !1,
    audioOnlyMode: !1,
    audioPosterMode: !1,
  }),
    ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(
      function (e) {
        b.prototype[e] = function () {
          return this.techGet_(e);
        };
      }
    ),
    Yr.forEach(function (e) {
      b.prototype[`handleTech${g(e)}_`] = function () {
        return this.trigger(e);
      };
    }),
    f.registerComponent("Player", b);
  function tn(t, i) {
    function s() {
      dn(this, { name: t, plugin: i, instance: null }, !0);
      var e = i.apply(this, arguments);
      return ln(this, t), dn(this, { name: t, plugin: i, instance: e }), e;
    }
    return (
      Object.keys(i).forEach(function (e) {
        s[e] = i[e];
      }),
      s
    );
  }
  const sn = "plugin",
    rn = "activePlugins_",
    nn = {},
    an = (e) => nn.hasOwnProperty(e),
    on = (e) => (an(e) ? nn[e] : void 0),
    ln = (e, t) => {
      (e[rn] = e[rn] || {}), (e[rn][t] = !0);
    },
    dn = (e, t, i) => {
      i = (i ? "before" : "") + "pluginsetup";
      e.trigger(i, t), e.trigger(i + ":" + t.name, t);
    },
    hn = (i, s) => (
      (s.prototype.name = i),
      function (...e) {
        dn(this, { name: i, plugin: s, instance: null }, !0);
        const t = new s(this, ...e);
        return (this[i] = () => t), dn(this, t.getEventHash()), t;
      }
    );
  class un {
    constructor(e) {
      if (this.constructor === un)
        throw new Error(
          "Plugin must be sub-classed; not directly instantiated."
        );
      (this.player = e),
        this.log || (this.log = this.player.log.createLogger(this.name)),
        kt(this),
        delete this.trigger,
        xt(this, this.constructor.defaultState),
        ln(e, this.name),
        (this.dispose = this.dispose.bind(this)),
        e.on("dispose", this.dispose);
    }
    version() {
      return this.constructor.VERSION;
    }
    getEventHash(e = {}) {
      return (
        (e.name = this.name),
        (e.plugin = this.constructor),
        (e.instance = this),
        e
      );
    }
    trigger(e, t = {}) {
      return lt(this.eventBusEl_, e, this.getEventHash(t));
    }
    handleStateChanged(e) {}
    dispose() {
      var { name: e, player: t } = this;
      this.trigger("dispose"),
        this.off(),
        t.off("dispose", this.dispose),
        (t[rn][e] = !1),
        (this.player = this.state = null),
        (t[e] = hn(e, nn[e]));
    }
    static isBasic(e) {
      e = "string" == typeof e ? on(e) : e;
      return "function" == typeof e && !un.prototype.isPrototypeOf(e.prototype);
    }
    static registerPlugin(e, t) {
      if ("string" != typeof e)
        throw new Error(
          `Illegal plugin name, "${e}", must be a string, was ${typeof e}.`
        );
      if (an(e))
        d.warn(
          `A plugin named "${e}" already exists. You may want to avoid re-registering plugins!`
        );
      else if (b.prototype.hasOwnProperty(e))
        throw new Error(
          `Illegal plugin name, "${e}", cannot share a name with an existing player method!`
        );
      if ("function" != typeof t)
        throw new Error(
          `Illegal plugin for "${e}", must be a function, was ${typeof t}.`
        );
      return (
        (nn[e] = t),
        e !== sn &&
          (un.isBasic(t)
            ? (b.prototype[e] = tn(e, t))
            : (b.prototype[e] = hn(e, t))),
        t
      );
    }
    static deregisterPlugin(e) {
      if (e === sn) throw new Error("Cannot de-register base plugin.");
      an(e) && (delete nn[e], delete b.prototype[e]);
    }
    static getPlugins(e = Object.keys(nn)) {
      let i;
      return (
        e.forEach((e) => {
          var t = on(e);
          t && ((i = i || {})[e] = t);
        }),
        i
      );
    }
    static getPluginVersion(e) {
      e = on(e);
      return (e && e.VERSION) || "";
    }
  }
  function cn(e, i, s, r) {
    {
      var n =
          i +
          ` is deprecated and will be removed in ${e}.0; please use ${s} instead.`,
        a = r;
      let t = !1;
      return function (...e) {
        return t || d.warn(n), (t = !0), a.apply(this, e);
      };
    }
  }
  (un.getPlugin = on),
    (un.BASE_PLUGIN_NAME = sn),
    un.registerPlugin(sn, un),
    (b.prototype.usingPlugin = function (e) {
      return !!this[rn] && !0 === this[rn][e];
    }),
    (b.prototype.hasPlugin = function (e) {
      return !!an(e);
    });
  const pn = (e) => (0 === e.indexOf("#") ? e.slice(1) : e);
  function T(e, t, i) {
    let s = T.getPlayer(e);
    if (s)
      t &&
        d.warn(
          `Player "${e}" is already initialised. Options will not be applied.`
        ),
        i && s.ready(i);
    else {
      const r = "string" == typeof e ? $e("#" + pn(e)) : e;
      if (!ve(r))
        throw new TypeError(
          "The element or ID supplied is not valid. (videojs)"
        );
      (r.ownerDocument.defaultView && r.ownerDocument.body.contains(r)) ||
        d.warn("The element supplied is not included in the DOM"),
        !0 === (t = t || {}).restoreEl &&
          (t.restoreEl = (
            r.parentNode && r.parentNode.hasAttribute("data-vjs-player")
              ? r.parentNode
              : r
          ).cloneNode(!0)),
        B("beforesetup").forEach((e) => {
          e = e(r, h(t));
          !K(e) || Array.isArray(e)
            ? d.error("please return an object in beforesetup hooks")
            : (t = h(t, e));
        });
      e = f.getComponent("Player");
      (s = new e(r, t, i)), B("setup").forEach((e) => e(s));
    }
    return s;
  }
  (T.hooks_ = U),
    (T.hooks = B),
    (T.hook = function (e, t) {
      B(e, t);
    }),
    (T.hookOnce = function (s, e) {
      B(
        s,
        [].concat(e).map((t) => {
          const i = (...e) => (F(s, i), t(...e));
          return i;
        })
      );
    }),
    (T.removeHook = F),
    !0 !== window.VIDEOJS_NO_DYNAMIC_STYLE &&
      _e() &&
      !(Ni = $e(".vjs-styles-defaults")) &&
      ((Ni = Ze("vjs-styles-defaults")),
      (Or = $e("head")) && Or.insertBefore(Ni, Or.firstChild),
      et(
        Ni,
        `
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: 56.25%
      }
    `
      )),
    Qe(1, T),
    (T.VERSION = R),
    (T.options = b.prototype.options_),
    (T.getPlayers = () => b.players),
    (T.getPlayer = (e) => {
      var t = b.players;
      let i;
      if ("string" == typeof e) {
        var s = pn(e),
          r = t[s];
        if (r) return r;
        i = $e("#" + s);
      } else i = e;
      if (ve(i)) {
        var { player: r, playerId: s } = i;
        if (r || t[s]) return r || t[s];
      }
    }),
    (T.getAllPlayers = () =>
      Object.keys(b.players)
        .map((e) => b.players[e])
        .filter(Boolean)),
    (T.players = b.players),
    (T.getComponent = f.getComponent),
    (T.registerComponent = (e, t) => {
      _.isTech(t) &&
        d.warn(
          `The ${e} tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)`
        ),
        f.registerComponent.call(f, e, t);
    }),
    (T.getTech = _.getTech),
    (T.registerTech = _.registerTech),
    (T.use = function (e, t) {
      (ds[e] = ds[e] || []), ds[e].push(t);
    }),
    Object.defineProperty(T, "middleware", {
      value: {},
      writeable: !1,
      enumerable: !0,
    }),
    Object.defineProperty(T.middleware, "TERMINATOR", {
      value: us,
      writeable: !1,
      enumerable: !0,
    }),
    (T.browser = e),
    (T.obj = J),
    (T.mergeOptions = cn(9, "videojs.mergeOptions", "videojs.obj.merge", h)),
    (T.defineLazyProperty = cn(
      9,
      "videojs.defineLazyProperty",
      "videojs.obj.defineLazyProperty",
      Q
    )),
    (T.bind = cn(9, "videojs.bind", "native Function.prototype.bind", m)),
    (T.registerPlugin = un.registerPlugin),
    (T.deregisterPlugin = un.deregisterPlugin),
    (T.plugin = (e, t) => (
      d.warn(
        "videojs.plugin() is deprecated; use videojs.registerPlugin() instead"
      ),
      un.registerPlugin(e, t)
    )),
    (T.getPlugins = un.getPlugins),
    (T.getPlugin = un.getPlugin),
    (T.getPluginVersion = un.getPluginVersion),
    (T.addLanguage = function (e, t) {
      return (
        (e = ("" + e).toLowerCase()),
        (T.options.languages = h(T.options.languages, { [e]: t })),
        T.options.languages[e]
      );
    }),
    (T.log = d),
    (T.createLogger = W),
    (T.time = Ht),
    (T.createTimeRange = cn(
      9,
      "videojs.createTimeRange",
      "videojs.time.createTimeRanges",
      Mt
    )),
    (T.createTimeRanges = cn(
      9,
      "videojs.createTimeRanges",
      "videojs.time.createTimeRanges",
      Mt
    )),
    (T.formatTime = cn(9, "videojs.formatTime", "videojs.time.formatTime", jt)),
    (T.setFormatTime = cn(
      9,
      "videojs.setFormatTime",
      "videojs.time.setFormatTime",
      Bt
    )),
    (T.resetFormatTime = cn(
      9,
      "videojs.resetFormatTime",
      "videojs.time.resetFormatTime",
      Ft
    )),
    (T.parseUrl = cn(9, "videojs.parseUrl", "videojs.url.parseUrl", oi)),
    (T.isCrossOrigin = cn(
      9,
      "videojs.isCrossOrigin",
      "videojs.url.isCrossOrigin",
      di
    )),
    (T.EventTarget = ft),
    (T.any = ht),
    (T.on = ot),
    (T.one = dt),
    (T.off = p),
    (T.trigger = lt),
    (T.xhr = vi),
    (T.TextTrack = xi),
    (T.AudioTrack = Ai),
    (T.VideoTrack = Pi),
    [
      "isEl",
      "isTextNode",
      "createEl",
      "hasClass",
      "addClass",
      "removeClass",
      "toggleClass",
      "setAttributes",
      "getAttributes",
      "emptyEl",
      "appendContent",
      "insertContent",
    ].forEach((e) => {
      T[e] = function () {
        return (
          d.warn(
            `videojs.${e}() is deprecated; use videojs.dom.${e}() instead`
          ),
          ze[e].apply(null, arguments)
        );
      };
    }),
    (T.computedStyle = cn(
      9,
      "videojs.computedStyle",
      "videojs.dom.computedStyle",
      Ge
    )),
    (T.dom = ze),
    (T.fn = mt),
    (T.num = ci),
    (T.str = Ot),
    (T.url = ui),
    Dt(function (e, t) {
      /*! @name videojs-contrib-quality-levels @version 3.0.0 @license Apache-2.0 */
      e.exports = (function (e) {
        function t(e) {
          return e && typeof e === "object" && "default" in e
            ? e
            : { default: e };
        }
        var i = t(e);
        class s {
          constructor(e) {
            let t = this;
            t.id = e.id;
            t.label = t.id;
            t.width = e.width;
            t.height = e.height;
            t.bitrate = e.bandwidth;
            t.frameRate = e.frameRate;
            t.enabled_ = e.enabled;
            Object.defineProperty(t, "enabled", {
              get() {
                return t.enabled_();
              },
              set(e) {
                t.enabled_(e);
              },
            });
            return t;
          }
        }
        class n extends i["default"].EventTarget {
          constructor() {
            super();
            let e = this;
            e.levels_ = [];
            e.selectedIndex_ = -1;
            Object.defineProperty(e, "selectedIndex", {
              get() {
                return e.selectedIndex_;
              },
            });
            Object.defineProperty(e, "length", {
              get() {
                return e.levels_.length;
              },
            });
            return e;
          }
          addQualityLevel(e) {
            let t = this.getQualityLevelById(e.id);
            if (t) return t;
            const i = this.levels_.length;
            t = new s(e);
            if (!("" + i in this))
              Object.defineProperty(this, i, {
                get() {
                  return this.levels_[i];
                },
              });
            this.levels_.push(t);
            this.trigger({ qualityLevel: t, type: "addqualitylevel" });
            return t;
          }
          removeQualityLevel(i) {
            let s = null;
            for (let e = 0, t = this.length; e < t; e++)
              if (this[e] === i) {
                s = this.levels_.splice(e, 1)[0];
                if (this.selectedIndex_ === e) this.selectedIndex_ = -1;
                else if (this.selectedIndex_ > e) this.selectedIndex_--;
                break;
              }
            if (s)
              this.trigger({ qualityLevel: i, type: "removequalitylevel" });
            return s;
          }
          getQualityLevelById(i) {
            for (let e = 0, t = this.length; e < t; e++) {
              const s = this[e];
              if (s.id === i) return s;
            }
            return null;
          }
          dispose() {
            this.selectedIndex_ = -1;
            this.levels_.length = 0;
          }
        }
        n.prototype.allowedEvents_ = {
          change: "change",
          addqualitylevel: "addqualitylevel",
          removequalitylevel: "removequalitylevel",
        };
        for (const d in n.prototype.allowedEvents_)
          n.prototype["on" + d] = null;
        var a = "3.0.0";
        const r = i["default"].registerPlugin || i["default"].plugin,
          o = function (e, t) {
            const i = e.qualityLevels;
            const s = new n();
            const r = function () {
              s.dispose();
              e.qualityLevels = i;
              e.off("dispose", r);
            };
            e.on("dispose", r);
            e.qualityLevels = () => s;
            e.qualityLevels.VERSION = a;
            return s;
          },
          l = function (e) {
            return o(this, i["default"].mergeOptions({}, e));
          };
        return r("qualityLevels", l), (l.VERSION = a), l;
      })(T);
    });
  var mn = Dt(function (e, t) {
      var i, n, s, r, a;
      (i =
        /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/),
        (n = /^(?=([^\/?#]*))\1([^]*)$/),
        (s = /(?:\/|^)\.(?=\/)/g),
        (r = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g),
        (a = {
          buildAbsoluteURL: function (e, t, i) {
            if (((i = i || {}), (e = e.trim()), !(t = t.trim()))) {
              if (!i.alwaysNormalize) return e;
              var s = a.parseURL(e);
              if (s)
                return (
                  (s.path = a.normalizePath(s.path)), a.buildURLFromParts(s)
                );
              throw new Error("Error trying to parse base URL.");
            }
            s = a.parseURL(t);
            if (!s) throw new Error("Error trying to parse relative URL.");
            if (s.scheme)
              return i.alwaysNormalize
                ? ((s.path = a.normalizePath(s.path)), a.buildURLFromParts(s))
                : t;
            t = a.parseURL(e);
            if (!t) throw new Error("Error trying to parse base URL.");
            !t.netLoc &&
              t.path &&
              "/" !== t.path[0] &&
              ((e = n.exec(t.path)), (t.netLoc = e[1]), (t.path = e[2])),
              t.netLoc && !t.path && (t.path = "/");
            var r,
              e = {
                scheme: t.scheme,
                netLoc: s.netLoc,
                path: null,
                params: s.params,
                query: s.query,
                fragment: s.fragment,
              };
            return (
              s.netLoc ||
                ((e.netLoc = t.netLoc),
                "/" !== s.path[0] &&
                  (s.path
                    ? ((r =
                        (r = t.path).substring(0, r.lastIndexOf("/") + 1) +
                        s.path),
                      (e.path = a.normalizePath(r)))
                    : ((e.path = t.path),
                      s.params ||
                        ((e.params = t.params), s.query) ||
                        (e.query = t.query)))),
              null === e.path &&
                (e.path = i.alwaysNormalize ? a.normalizePath(s.path) : s.path),
              a.buildURLFromParts(e)
            );
          },
          parseURL: function (e) {
            e = i.exec(e);
            return e
              ? {
                  scheme: e[1] || "",
                  netLoc: e[2] || "",
                  path: e[3] || "",
                  params: e[4] || "",
                  query: e[5] || "",
                  fragment: e[6] || "",
                }
              : null;
          },
          normalizePath: function (e) {
            for (
              e = e.split("").reverse().join("").replace(s, "");
              e.length !== (e = e.replace(r, "")).length;

            );
            return e.split("").reverse().join("");
          },
          buildURLFromParts: function (e) {
            return (
              e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
            );
          },
        }),
        (e.exports = a);
    }),
    gn = "http://example.com",
    Pr = (function () {
      function e() {
        this.listeners = {};
      }
      var t = e.prototype;
      return (
        (t.on = function (e, t) {
          this.listeners[e] || (this.listeners[e] = []),
            this.listeners[e].push(t);
        }),
        (t.off = function (e, t) {
          return (
            !!this.listeners[e] &&
            ((t = this.listeners[e].indexOf(t)),
            (this.listeners[e] = this.listeners[e].slice(0)),
            this.listeners[e].splice(t, 1),
            -1 < t)
          );
        }),
        (t.trigger = function (e) {
          var t = this.listeners[e];
          if (t)
            if (2 === arguments.length)
              for (var i = t.length, s = 0; s < i; ++s)
                t[s].call(this, arguments[1]);
            else
              for (
                var r = Array.prototype.slice.call(arguments, 1),
                  n = t.length,
                  a = 0;
                a < n;
                ++a
              )
                t[a].apply(this, r);
        }),
        (t.dispose = function () {
          this.listeners = {};
        }),
        (t.pipe = function (t) {
          this.on("data", function (e) {
            t.push(e);
          });
        }),
        e
      );
    })();
  function fn(e) {
    e = e;
    for (
      var t = window.atob
          ? window.atob(e)
          : Buffer.from(e, "base64").toString("binary"),
        i = new Uint8Array(t.length),
        s = 0;
      s < t.length;
      s++
    )
      i[s] = t.charCodeAt(s);
    return i;
  }
  /*! @name m3u8-parser @version 6.0.0 @license Apache-2.0 */ class yn extends Pr {
    constructor() {
      super(), (this.buffer = "");
    }
    push(e) {
      let t;
      for (
        this.buffer += e, t = this.buffer.indexOf("\n");
        -1 < t;
        t = this.buffer.indexOf("\n")
      )
        this.trigger("data", this.buffer.substring(0, t)),
          (this.buffer = this.buffer.substring(t + 1));
    }
  }
  function _n(e) {
    var e = /([0-9.]*)?@?([0-9.]*)?/.exec(e || ""),
      t = {};
    return (
      e[1] && (t.length = parseInt(e[1], 10)),
      e[2] && (t.offset = parseInt(e[2], 10)),
      t
    );
  }
  function vn(t) {
    var i = {};
    if (t) {
      var s,
        r = t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))'));
      let e = r.length;
      for (; e--; )
        "" !== r[e] &&
          (((s = /([^=]*)=(.*)/.exec(r[e]).slice(1))[0] = s[0].replace(
            /^\s+|\s+$/g,
            ""
          )),
          (s[1] = s[1].replace(/^\s+|\s+$/g, "")),
          (s[1] = s[1].replace(/^['"](.*)['"]$/g, "$1")),
          (i[s[0]] = s[1]));
    }
    return i;
  }
  const bn = String.fromCharCode(9);
  class Tn extends Pr {
    constructor() {
      super(), (this.customParsers = []), (this.tagMappers = []);
    }
    push(i) {
      let s, r;
      0 !== (i = i.trim()).length &&
        ("#" !== i[0]
          ? this.trigger("data", { type: "uri", uri: i })
          : this.tagMappers
              .reduce(
                (e, t) => {
                  t = t(i);
                  return t === i ? e : e.concat([t]);
                },
                [i]
              )
              .forEach((t) => {
                for (let e = 0; e < this.customParsers.length; e++)
                  if (this.customParsers[e].call(this, t)) return;
                var e, i;
                0 !== t.indexOf("#EXT")
                  ? this.trigger("data", { type: "comment", text: t.slice(1) })
                  : ((t = t.replace("\r", "")),
                    (s = /^#EXTM3U/.exec(t))
                      ? this.trigger("data", { type: "tag", tagType: "m3u" })
                      : (s = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(t))
                      ? ((r = { type: "tag", tagType: "inf" }),
                        s[1] && (r.duration = parseFloat(s[1])),
                        s[2] && (r.title = s[2]),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(t))
                      ? ((r = { type: "tag", tagType: "targetduration" }),
                        s[1] && (r.duration = parseInt(s[1], 10)),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-VERSION:([0-9.]*)?/.exec(t))
                      ? ((r = { type: "tag", tagType: "version" }),
                        s[1] && (r.version = parseInt(s[1], 10)),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(t))
                      ? ((r = { type: "tag", tagType: "media-sequence" }),
                        s[1] && (r.number = parseInt(s[1], 10)),
                        this.trigger("data", r))
                      : (s =
                          /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(
                            t
                          ))
                      ? ((r = {
                          type: "tag",
                          tagType: "discontinuity-sequence",
                        }),
                        s[1] && (r.number = parseInt(s[1], 10)),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(t))
                      ? ((r = { type: "tag", tagType: "playlist-type" }),
                        s[1] && (r.playlistType = s[1]),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-BYTERANGE:(.*)?$/.exec(t))
                      ? ((r = gi(_n(s[1]), {
                          type: "tag",
                          tagType: "byterange",
                        })),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(t))
                      ? ((r = { type: "tag", tagType: "allow-cache" }),
                        s[1] && (r.allowed = !/NO/.test(s[1])),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-MAP:(.*)$/.exec(t))
                      ? ((r = { type: "tag", tagType: "map" }),
                        s[1] &&
                          ((i = vn(s[1])).URI && (r.uri = i.URI),
                          i.BYTERANGE) &&
                          (r.byterange = _n(i.BYTERANGE)),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-STREAM-INF:(.*)$/.exec(t))
                      ? ((r = { type: "tag", tagType: "stream-inf" }),
                        s[1] &&
                          ((r.attributes = vn(s[1])),
                          r.attributes.RESOLUTION &&
                            ((i = {}),
                            (e = r.attributes.RESOLUTION.split("x"))[0] &&
                              (i.width = parseInt(e[0], 10)),
                            e[1] && (i.height = parseInt(e[1], 10)),
                            (r.attributes.RESOLUTION = i)),
                          r.attributes.BANDWIDTH &&
                            (r.attributes.BANDWIDTH = parseInt(
                              r.attributes.BANDWIDTH,
                              10
                            )),
                          r.attributes["FRAME-RATE"] &&
                            (r.attributes["FRAME-RATE"] = parseFloat(
                              r.attributes["FRAME-RATE"]
                            )),
                          r.attributes["PROGRAM-ID"]) &&
                          (r.attributes["PROGRAM-ID"] = parseInt(
                            r.attributes["PROGRAM-ID"],
                            10
                          )),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-MEDIA:(.*)$/.exec(t))
                      ? ((r = { type: "tag", tagType: "media" }),
                        s[1] && (r.attributes = vn(s[1])),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-ENDLIST/.exec(t))
                      ? this.trigger("data", {
                          type: "tag",
                          tagType: "endlist",
                        })
                      : (s = /^#EXT-X-DISCONTINUITY/.exec(t))
                      ? this.trigger("data", {
                          type: "tag",
                          tagType: "discontinuity",
                        })
                      : (s = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(t))
                      ? ((r = { type: "tag", tagType: "program-date-time" }),
                        s[1] &&
                          ((r.dateTimeString = s[1]),
                          (r.dateTimeObject = new Date(s[1]))),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-KEY:(.*)$/.exec(t))
                      ? ((r = { type: "tag", tagType: "key" }),
                        s[1] &&
                          ((r.attributes = vn(s[1])), r.attributes.IV) &&
                          ("0x" ===
                            r.attributes.IV.substring(0, 2).toLowerCase() &&
                            (r.attributes.IV = r.attributes.IV.substring(2)),
                          (r.attributes.IV = r.attributes.IV.match(/.{8}/g)),
                          (r.attributes.IV[0] = parseInt(
                            r.attributes.IV[0],
                            16
                          )),
                          (r.attributes.IV[1] = parseInt(
                            r.attributes.IV[1],
                            16
                          )),
                          (r.attributes.IV[2] = parseInt(
                            r.attributes.IV[2],
                            16
                          )),
                          (r.attributes.IV[3] = parseInt(
                            r.attributes.IV[3],
                            16
                          )),
                          (r.attributes.IV = new Uint32Array(r.attributes.IV))),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-START:(.*)$/.exec(t))
                      ? ((r = { type: "tag", tagType: "start" }),
                        s[1] &&
                          ((r.attributes = vn(s[1])),
                          (r.attributes["TIME-OFFSET"] = parseFloat(
                            r.attributes["TIME-OFFSET"]
                          )),
                          (r.attributes.PRECISE = /YES/.test(
                            r.attributes.PRECISE
                          ))),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(t))
                      ? ((r = { type: "tag", tagType: "cue-out-cont" }),
                        s[1] ? (r.data = s[1]) : (r.data = ""),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-CUE-OUT:(.*)?$/.exec(t))
                      ? ((r = { type: "tag", tagType: "cue-out" }),
                        s[1] ? (r.data = s[1]) : (r.data = ""),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-CUE-IN:(.*)?$/.exec(t))
                      ? ((r = { type: "tag", tagType: "cue-in" }),
                        s[1] ? (r.data = s[1]) : (r.data = ""),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-SKIP:(.*)$/.exec(t)) && s[1]
                      ? (((r = { type: "tag", tagType: "skip" }).attributes =
                          vn(s[1])),
                        r.attributes.hasOwnProperty("SKIPPED-SEGMENTS") &&
                          (r.attributes["SKIPPED-SEGMENTS"] = parseInt(
                            r.attributes["SKIPPED-SEGMENTS"],
                            10
                          )),
                        r.attributes.hasOwnProperty(
                          "RECENTLY-REMOVED-DATERANGES"
                        ) &&
                          (r.attributes["RECENTLY-REMOVED-DATERANGES"] =
                            r.attributes["RECENTLY-REMOVED-DATERANGES"].split(
                              bn
                            )),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-PART:(.*)$/.exec(t)) && s[1]
                      ? (((r = { type: "tag", tagType: "part" }).attributes =
                          vn(s[1])),
                        ["DURATION"].forEach(function (e) {
                          r.attributes.hasOwnProperty(e) &&
                            (r.attributes[e] = parseFloat(r.attributes[e]));
                        }),
                        ["INDEPENDENT", "GAP"].forEach(function (e) {
                          r.attributes.hasOwnProperty(e) &&
                            (r.attributes[e] = /YES/.test(r.attributes[e]));
                        }),
                        r.attributes.hasOwnProperty("BYTERANGE") &&
                          (r.attributes.byterange = _n(r.attributes.BYTERANGE)),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(t)) && s[1]
                      ? (((r = {
                          type: "tag",
                          tagType: "server-control",
                        }).attributes = vn(s[1])),
                        [
                          "CAN-SKIP-UNTIL",
                          "PART-HOLD-BACK",
                          "HOLD-BACK",
                        ].forEach(function (e) {
                          r.attributes.hasOwnProperty(e) &&
                            (r.attributes[e] = parseFloat(r.attributes[e]));
                        }),
                        ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(
                          function (e) {
                            r.attributes.hasOwnProperty(e) &&
                              (r.attributes[e] = /YES/.test(r.attributes[e]));
                          }
                        ),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-PART-INF:(.*)$/.exec(t)) && s[1]
                      ? (((r = {
                          type: "tag",
                          tagType: "part-inf",
                        }).attributes = vn(s[1])),
                        ["PART-TARGET"].forEach(function (e) {
                          r.attributes.hasOwnProperty(e) &&
                            (r.attributes[e] = parseFloat(r.attributes[e]));
                        }),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(t)) && s[1]
                      ? (((r = {
                          type: "tag",
                          tagType: "preload-hint",
                        }).attributes = vn(s[1])),
                        ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(
                          function (e) {
                            var t;
                            r.attributes.hasOwnProperty(e) &&
                              ((r.attributes[e] = parseInt(
                                r.attributes[e],
                                10
                              )),
                              (t =
                                "BYTERANGE-LENGTH" === e ? "length" : "offset"),
                              (r.attributes.byterange =
                                r.attributes.byterange || {}),
                              (r.attributes.byterange[t] = r.attributes[e]),
                              delete r.attributes[e]);
                          }
                        ),
                        this.trigger("data", r))
                      : (s = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(t)) && s[1]
                      ? (((r = {
                          type: "tag",
                          tagType: "rendition-report",
                        }).attributes = vn(s[1])),
                        ["LAST-MSN", "LAST-PART"].forEach(function (e) {
                          r.attributes.hasOwnProperty(e) &&
                            (r.attributes[e] = parseInt(r.attributes[e], 10));
                        }),
                        this.trigger("data", r))
                      : this.trigger("data", {
                          type: "tag",
                          data: t.slice(4),
                        }));
              }));
    }
    addParser({ expression: t, customType: i, dataParser: s, segment: r }) {
      "function" != typeof s && (s = (e) => e),
        this.customParsers.push((e) => {
          if (t.exec(e))
            return (
              this.trigger("data", {
                type: "custom",
                data: s(e),
                customType: i,
                segment: r,
              }),
              !0
            );
        });
    }
    addTagMapper({ expression: t, map: i }) {
      this.tagMappers.push((e) => (t.test(e) ? i(e) : e));
    }
  }
  function Sn(t) {
    const i = {};
    return (
      Object.keys(t).forEach(function (e) {
        i[e.toLowerCase().replace(/-(\w)/g, (e) => e[1].toUpperCase())] = t[e];
      }),
      i
    );
  }
  function wn(e) {
    var t,
      i,
      s,
      r,
      n,
      { serverControl: e, targetDuration: a, partTargetDuration: o } = e;
    e &&
      ((t = "#EXT-X-SERVER-CONTROL"),
      (i = "holdBack"),
      (s = "partHoldBack"),
      (r = a && 3 * a),
      (n = o && 2 * o),
      a &&
        !e.hasOwnProperty(i) &&
        ((e[i] = r),
        this.trigger("info", {
          message: t + ` defaulting HOLD-BACK to targetDuration * 3 (${r}).`,
        })),
      r &&
        e[i] < r &&
        (this.trigger("warn", {
          message:
            t + ` clamping HOLD-BACK (${e[i]}) to targetDuration * 3 (${r})`,
        }),
        (e[i] = r)),
      o &&
        !e.hasOwnProperty(s) &&
        ((e[s] = 3 * o),
        this.trigger("info", {
          message:
            t +
            ` defaulting PART-HOLD-BACK to partTargetDuration * 3 (${e[s]}).`,
        })),
      o) &&
      e[s] < n &&
      (this.trigger("warn", {
        message:
          t +
          ` clamping PART-HOLD-BACK (${e[s]}) to partTargetDuration * 2 (${n}).`,
      }),
      (e[s] = n));
  }
  class En extends Pr {
    constructor() {
      super(),
        (this.lineStream = new yn()),
        (this.parseStream = new Tn()),
        this.lineStream.pipe(this.parseStream);
      const e = this,
        s = [];
      let a = {},
        r,
        o,
        l = !1;
      const d = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} };
      let h = 0,
        u =
          ((this.manifest = {
            allowCache: !0,
            discontinuityStarts: [],
            segments: [],
          }),
          0),
        c = 0;
      this.on("end", () => {
        a.uri ||
          (!a.parts && !a.preloadHints) ||
          (!a.map && r && (a.map = r),
          !a.key && o && (a.key = o),
          a.timeline || "number" != typeof h || (a.timeline = h),
          (this.manifest.preloadSegment = a));
      }),
        this.parseStream.on("data", function (n) {
          let t, i;
          ({
            tag() {
              ((
                {
                  version() {
                    n.version && (this.manifest.version = n.version);
                  },
                  "allow-cache"() {
                    (this.manifest.allowCache = n.allowed),
                      "allowed" in n ||
                        (this.trigger("info", {
                          message: "defaulting allowCache to YES",
                        }),
                        (this.manifest.allowCache = !0));
                  },
                  byterange() {
                    var e = {};
                    "length" in n &&
                      (((a.byterange = e).length = n.length),
                      "offset" in n || (n.offset = u)),
                      "offset" in n && ((a.byterange = e).offset = n.offset),
                      (u = e.offset + e.length);
                  },
                  endlist() {
                    this.manifest.endList = !0;
                  },
                  inf() {
                    "mediaSequence" in this.manifest ||
                      ((this.manifest.mediaSequence = 0),
                      this.trigger("info", {
                        message: "defaulting media sequence to zero",
                      })),
                      "discontinuitySequence" in this.manifest ||
                        ((this.manifest.discontinuitySequence = 0),
                        this.trigger("info", {
                          message: "defaulting discontinuity sequence to zero",
                        })),
                      0 < n.duration && (a.duration = n.duration),
                      0 === n.duration &&
                        ((a.duration = 0.01),
                        this.trigger("info", {
                          message:
                            "updating zero segment duration to a small value",
                        })),
                      (this.manifest.segments = s);
                  },
                  key() {
                    if (n.attributes)
                      if ("NONE" === n.attributes.METHOD) o = null;
                      else if (n.attributes.URI)
                        if (
                          "com.apple.streamingkeydelivery" ===
                          n.attributes.KEYFORMAT
                        )
                          (this.manifest.contentProtection =
                            this.manifest.contentProtection || {}),
                            (this.manifest.contentProtection[
                              "com.apple.fps.1_0"
                            ] = { attributes: n.attributes });
                        else if (
                          "com.microsoft.playready" === n.attributes.KEYFORMAT
                        )
                          (this.manifest.contentProtection =
                            this.manifest.contentProtection || {}),
                            (this.manifest.contentProtection[
                              "com.microsoft.playready"
                            ] = { uri: n.attributes.URI });
                        else {
                          if (
                            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" ===
                            n.attributes.KEYFORMAT
                          )
                            return -1 ===
                              [
                                "SAMPLE-AES",
                                "SAMPLE-AES-CTR",
                                "SAMPLE-AES-CENC",
                              ].indexOf(n.attributes.METHOD)
                              ? void this.trigger("warn", {
                                  message:
                                    "invalid key method provided for Widevine",
                                })
                              : ("SAMPLE-AES-CENC" === n.attributes.METHOD &&
                                  this.trigger("warn", {
                                    message:
                                      "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead",
                                  }),
                                "data:text/plain;base64," !==
                                n.attributes.URI.substring(0, 23)
                                  ? void this.trigger("warn", {
                                      message:
                                        "invalid key URI provided for Widevine",
                                    })
                                  : n.attributes.KEYID &&
                                    "0x" === n.attributes.KEYID.substring(0, 2)
                                  ? ((this.manifest.contentProtection =
                                      this.manifest.contentProtection || {}),
                                    void (this.manifest.contentProtection[
                                      "com.widevine.alpha"
                                    ] = {
                                      attributes: {
                                        schemeIdUri: n.attributes.KEYFORMAT,
                                        keyId: n.attributes.KEYID.substring(2),
                                      },
                                      pssh: fn(n.attributes.URI.split(",")[1]),
                                    }))
                                  : void this.trigger("warn", {
                                      message:
                                        "invalid key ID provided for Widevine",
                                    }));
                          n.attributes.METHOD ||
                            this.trigger("warn", {
                              message: "defaulting key method to AES-128",
                            }),
                            (o = {
                              method: n.attributes.METHOD || "AES-128",
                              uri: n.attributes.URI,
                            }),
                            "undefined" != typeof n.attributes.IV &&
                              (o.iv = n.attributes.IV);
                        }
                      else
                        this.trigger("warn", {
                          message: "ignoring key declaration without URI",
                        });
                    else
                      this.trigger("warn", {
                        message:
                          "ignoring key declaration without attribute list",
                      });
                  },
                  "media-sequence"() {
                    isFinite(n.number)
                      ? (this.manifest.mediaSequence = n.number)
                      : this.trigger("warn", {
                          message:
                            "ignoring invalid media sequence: " + n.number,
                        });
                  },
                  "discontinuity-sequence"() {
                    isFinite(n.number)
                      ? ((this.manifest.discontinuitySequence = n.number),
                        (h = n.number))
                      : this.trigger("warn", {
                          message:
                            "ignoring invalid discontinuity sequence: " +
                            n.number,
                        });
                  },
                  "playlist-type"() {
                    /VOD|EVENT/.test(n.playlistType)
                      ? (this.manifest.playlistType = n.playlistType)
                      : this.trigger("warn", {
                          message:
                            "ignoring unknown playlist type: " + n.playlist,
                        });
                  },
                  map() {
                    (r = {}),
                      n.uri && (r.uri = n.uri),
                      n.byterange && (r.byterange = n.byterange),
                      o && (r.key = o);
                  },
                  "stream-inf"() {
                    (this.manifest.playlists = s),
                      (this.manifest.mediaGroups =
                        this.manifest.mediaGroups || d),
                      n.attributes
                        ? (a.attributes || (a.attributes = {}),
                          gi(a.attributes, n.attributes))
                        : this.trigger("warn", {
                            message: "ignoring empty stream-inf attributes",
                          });
                  },
                  media() {
                    var e;
                    (this.manifest.mediaGroups =
                      this.manifest.mediaGroups || d),
                      n.attributes &&
                      n.attributes.TYPE &&
                      n.attributes["GROUP-ID"] &&
                      n.attributes.NAME
                        ? (((e = this.manifest.mediaGroups[n.attributes.TYPE])[
                            n.attributes["GROUP-ID"]
                          ] = e[n.attributes["GROUP-ID"]] || {}),
                          (t = e[n.attributes["GROUP-ID"]]),
                          (i = { default: /yes/i.test(n.attributes.DEFAULT) })
                            .default
                            ? (i.autoselect = !0)
                            : (i.autoselect = /yes/i.test(
                                n.attributes.AUTOSELECT
                              )),
                          n.attributes.LANGUAGE &&
                            (i.language = n.attributes.LANGUAGE),
                          n.attributes.URI && (i.uri = n.attributes.URI),
                          n.attributes["INSTREAM-ID"] &&
                            (i.instreamId = n.attributes["INSTREAM-ID"]),
                          n.attributes.CHARACTERISTICS &&
                            (i.characteristics = n.attributes.CHARACTERISTICS),
                          n.attributes.FORCED &&
                            (i.forced = /yes/i.test(n.attributes.FORCED)),
                          (t[n.attributes.NAME] = i))
                        : this.trigger("warn", {
                            message:
                              "ignoring incomplete or missing media group",
                          });
                  },
                  discontinuity() {
                    (h += 1),
                      (a.discontinuity = !0),
                      this.manifest.discontinuityStarts.push(s.length);
                  },
                  "program-date-time"() {
                    "undefined" == typeof this.manifest.dateTimeString &&
                      ((this.manifest.dateTimeString = n.dateTimeString),
                      (this.manifest.dateTimeObject = n.dateTimeObject)),
                      (a.dateTimeString = n.dateTimeString),
                      (a.dateTimeObject = n.dateTimeObject);
                  },
                  targetduration() {
                    !isFinite(n.duration) || n.duration < 0
                      ? this.trigger("warn", {
                          message:
                            "ignoring invalid target duration: " + n.duration,
                        })
                      : ((this.manifest.targetDuration = n.duration),
                        wn.call(this, this.manifest));
                  },
                  start() {
                    !n.attributes || isNaN(n.attributes["TIME-OFFSET"])
                      ? this.trigger("warn", {
                          message:
                            "ignoring start declaration without appropriate attribute list",
                        })
                      : (this.manifest.start = {
                          timeOffset: n.attributes["TIME-OFFSET"],
                          precise: n.attributes.PRECISE,
                        });
                  },
                  "cue-out"() {
                    a.cueOut = n.data;
                  },
                  "cue-out-cont"() {
                    a.cueOutCont = n.data;
                  },
                  "cue-in"() {
                    a.cueIn = n.data;
                  },
                  skip() {
                    (this.manifest.skip = Sn(n.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-SKIP",
                        n.attributes,
                        ["SKIPPED-SEGMENTS"]
                      );
                  },
                  part() {
                    l = !0;
                    var e = this.manifest.segments.length,
                      t = Sn(n.attributes),
                      t =
                        ((a.parts = a.parts || []),
                        a.parts.push(t),
                        t.byterange &&
                          (t.byterange.hasOwnProperty("offset") ||
                            (t.byterange.offset = c),
                          (c = t.byterange.offset + t.byterange.length)),
                        a.parts.length - 1);
                    this.warnOnMissingAttributes_(
                      `#EXT-X-PART #${t} for segment #` + e,
                      n.attributes,
                      ["URI", "DURATION"]
                    ),
                      this.manifest.renditionReports &&
                        this.manifest.renditionReports.forEach((e, t) => {
                          e.hasOwnProperty("lastPart") ||
                            this.trigger("warn", {
                              message: `#EXT-X-RENDITION-REPORT #${t} lacks required attribute(s): LAST-PART`,
                            });
                        });
                  },
                  "server-control"() {
                    var e = (this.manifest.serverControl = Sn(n.attributes));
                    e.hasOwnProperty("canBlockReload") ||
                      ((e.canBlockReload = !1),
                      this.trigger("info", {
                        message:
                          "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false",
                      })),
                      wn.call(this, this.manifest),
                      e.canSkipDateranges &&
                        !e.hasOwnProperty("canSkipUntil") &&
                        this.trigger("warn", {
                          message:
                            "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set",
                        });
                  },
                  "preload-hint"() {
                    var t = this.manifest.segments.length,
                      i = Sn(n.attributes),
                      e = i.type && "PART" === i.type,
                      s =
                        ((a.preloadHints = a.preloadHints || []),
                        a.preloadHints.push(i),
                        !i.byterange ||
                          i.byterange.hasOwnProperty("offset") ||
                          ((i.byterange.offset = e ? c : 0),
                          e && (c = i.byterange.offset + i.byterange.length)),
                        a.preloadHints.length - 1);
                    if (
                      (this.warnOnMissingAttributes_(
                        `#EXT-X-PRELOAD-HINT #${s} for segment #` + t,
                        n.attributes,
                        ["TYPE", "URI"]
                      ),
                      i.type)
                    )
                      for (let e = 0; e < a.preloadHints.length - 1; e++) {
                        var r = a.preloadHints[e];
                        r.type &&
                          r.type === i.type &&
                          this.trigger("warn", {
                            message:
                              `#EXT-X-PRELOAD-HINT #${s} for segment #${t} has the same TYPE ${i.type} as preload hint #` +
                              e,
                          });
                      }
                  },
                  "rendition-report"() {
                    var e = Sn(n.attributes),
                      e =
                        ((this.manifest.renditionReports =
                          this.manifest.renditionReports || []),
                        this.manifest.renditionReports.push(e),
                        this.manifest.renditionReports.length - 1),
                      t = ["LAST-MSN", "URI"];
                    l && t.push("LAST-PART"),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-RENDITION-REPORT #" + e,
                        n.attributes,
                        t
                      );
                  },
                  "part-inf"() {
                    (this.manifest.partInf = Sn(n.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-PART-INF",
                        n.attributes,
                        ["PART-TARGET"]
                      ),
                      this.manifest.partInf.partTarget &&
                        (this.manifest.partTargetDuration =
                          this.manifest.partInf.partTarget),
                      wn.call(this, this.manifest);
                  },
                }[n.tagType] || function () {}
              ).call(e));
            },
            uri() {
              (a.uri = n.uri),
                s.push(a),
                !this.manifest.targetDuration ||
                  "duration" in a ||
                  (this.trigger("warn", {
                    message:
                      "defaulting segment duration to the target duration",
                  }),
                  (a.duration = this.manifest.targetDuration)),
                o && (a.key = o),
                (a.timeline = h),
                r && (a.map = r),
                (c = 0),
                (a = {});
            },
            comment() {},
            custom() {
              n.segment
                ? ((a.custom = a.custom || {}),
                  (a.custom[n.customType] = n.data))
                : ((this.manifest.custom = this.manifest.custom || {}),
                  (this.manifest.custom[n.customType] = n.data));
            },
          }[n.type].call(e));
        });
    }
    warnOnMissingAttributes_(e, t, i) {
      const s = [];
      i.forEach(function (e) {
        t.hasOwnProperty(e) || s.push(e);
      }),
        s.length &&
          this.trigger("warn", {
            message: e + " lacks required attribute(s): " + s.join(", "),
          });
    }
    push(e) {
      this.lineStream.push(e);
    }
    end() {
      this.lineStream.push("\n"), this.trigger("end");
    }
    addParser(e) {
      this.parseStream.addParser(e);
    }
    addTagMapper(e) {
      this.parseStream.addTagMapper(e);
    }
  }
  function Cn(e) {
    return Dn.audio.test((e = void 0 === e ? "" : e).trim().toLowerCase());
  }
  function kn(e) {
    return (
      void 0 === e && (e = ""),
      (window.MediaSource &&
        window.MediaSource.isTypeSupported &&
        window.MediaSource.isTypeSupported(Un(e))) ||
        !1
    );
  }
  function In(e) {
    return (e = void 0 === e ? "" : e)
      .toLowerCase()
      .split(",")
      .every(function (e) {
        e = e.trim();
        for (var t = 0; t < Nn.length; t++) {
          var i = Nn[t];
          if (Dn["muxer" + i].test(e)) return !0;
        }
        return !1;
      });
  }
  function xn(e) {
    return Fn.test(e)
      ? "hls"
      : jn.test(e)
      ? "dash"
      : "application/vnd.videojs.vhs+json" === e
      ? "vhs-json"
      : null;
  }
  function An(e, t) {
    for (
      var i = void 0 !== (t = (void 0 === t ? {} : t).le) && t,
        s =
          ((e = w(
            (e =
              ("bigint" != typeof e && "number" != typeof e) ||
              ("number" == typeof e && e != e)
                ? 0
                : e)
          )),
          (t = e),
          Math.ceil(t.toString(2).length / 8)),
        r = new Uint8Array(new ArrayBuffer(s)),
        n = 0;
      n < s;
      n++
    ) {
      var a = i ? n : Math.abs(n + 1 - r.length);
      (r[a] = Number((e / qn[n]) & w(255))),
        e < 0 && ((r[a] = Math.abs(~r[a])), (r[a] -= 0 === n ? 1 : 2));
    }
    return r;
  }
  function Pn(e, t) {
    if (
      "string" !=
      typeof (e =
        "string" != typeof e && e && "function" == typeof e.toString
          ? e.toString()
          : e)
    )
      return new Uint8Array();
    t || (e = unescape(encodeURIComponent(e)));
    for (var i = new Uint8Array(e.length), s = 0; s < e.length; s++)
      i[s] = e.charCodeAt(s);
    return i;
  }
  function On(e, t) {
    if (/^[a-z]+:/i.test(t)) return t;
    /^data:/.test(e) && (e = (window.location && window.location.href) || "");
    var i = "function" == typeof window.URL,
      s = /^\/\//.test(e),
      r = !window.location && !/\/\//i.test(e);
    return (
      i
        ? (e = new window.URL(e, window.location || $n))
        : /\/\//i.test(e) ||
          (e = mn.buildAbsoluteURL(
            (window.location && window.location.href) || "",
            e
          )),
      i
        ? ((i = new URL(t, e)),
          r
            ? i.href.slice($n.length)
            : s
            ? i.href.slice(i.protocol.length)
            : i.href)
        : mn.buildAbsoluteURL(e, t)
    );
  }
  var Dn = {
      mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,
      webm: /^(vp0?[89]|av0?1|opus|vorbis)/,
      ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/,
      video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,
      audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/,
      text: /^(stpp.ttml.im1t)/,
      muxerVideo: /^(avc0?1)/,
      muxerAudio: /^(mp4a)/,
      muxerText: /a^/,
    },
    Ln = ["video", "audio", "text"],
    Nn = ["Video", "Audio", "Text"],
    Mn = function (e) {
      return (
        e &&
        e.replace(/avc1\.(\d+)\.(\d+)/i, function (e, t, i) {
          return (
            "avc1." +
            ("00" + Number(t).toString(16)).slice(-2) +
            "00" +
            ("00" + Number(i).toString(16)).slice(-2)
          );
        })
      );
    },
    Rn = function (e) {
      var e = (e = void 0 === e ? "" : e).split(","),
        n = [];
      return (
        e.forEach(function (s) {
          var r;
          (s = s.trim()),
            Ln.forEach(function (e) {
              var t,
                i = Dn[e].exec(s.toLowerCase());
              !i ||
                i.length <= 1 ||
                ((r = e),
                (i = s.substring(0, i[1].length)),
                (t = s.replace(i, "")),
                n.push({ type: i, details: t, mediaType: e }));
            }),
            r || n.push({ type: s, details: "", mediaType: "unknown" });
        }),
        n
      );
    },
    Un = function (e) {
      var t, i, s;
      if (e && "string" == typeof e)
        return (
          (i = "video"),
          1 ===
            (t = e
              .toLowerCase()
              .split(",")
              .map(function (e) {
                return Mn(e.trim());
              })).length && Cn(t[0])
            ? (i = "audio")
            : 1 === t.length &&
              ((s = t[0]),
              Dn.text.test((s = void 0 === s ? "" : s).trim().toLowerCase())) &&
              (i = "application"),
          (s = "mp4"),
          t.every(function (e) {
            return Dn.mp4.test(e);
          })
            ? (s = "mp4")
            : t.every(function (e) {
                return Dn.webm.test(e);
              })
            ? (s = "webm")
            : t.every(function (e) {
                return Dn.ogg.test(e);
              }) && (s = "ogg"),
          i + "/" + s + ';codecs="' + e + '"'
        );
    },
    Bn = "mp4a.40.2",
    Fn = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i,
    jn = /^application\/dash\+xml/i,
    Hn = function (e) {
      return "function" === ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer instanceof ArrayBuffer;
    },
    S = function (e) {
      return e instanceof Uint8Array
        ? e
        : (Array.isArray(e) ||
            Hn(e) ||
            e instanceof ArrayBuffer ||
            (e =
              "number" != typeof e || ("number" == typeof e && e != e)
                ? 0
                : [e]),
          new Uint8Array(
            (e && e.buffer) || e,
            (e && e.byteOffset) || 0,
            (e && e.byteLength) || 0
          ));
    },
    w = window.BigInt || Number,
    qn = [
      w("0x1"),
      w("0x100"),
      w("0x10000"),
      w("0x1000000"),
      w("0x100000000"),
      w("0x10000000000"),
      w("0x1000000000000"),
      w("0x100000000000000"),
      w("0x10000000000000000"),
    ],
    Vn =
      ((t = new Uint16Array([65484])),
      255 !== (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))[0] &&
        t[0],
      function (s, e) {
        var e = void 0 === e ? {} : e,
          t = e.signed,
          t = void 0 !== t && t,
          e = e.le,
          r = void 0 !== e && e,
          e = ((s = S(s)), r ? "reduce" : "reduceRight"),
          e = (s[e] || Array.prototype[e]).call(
            s,
            function (e, t, i) {
              i = r ? i : Math.abs(i + 1 - s.length);
              return e + w(t) * qn[i];
            },
            w(0)
          );
        return (
          t &&
            (t = qn[s.length] / w(2) - w(1)) < (e = w(e)) &&
            (e = (e = e - t - t) - w(2)),
          Number(e)
        );
      }),
    E = function (i, e, t) {
      var t = void 0 === t ? {} : t,
        s = t.offset,
        r = void 0 === s ? 0 : s,
        s = t.mask,
        n = void 0 === s ? [] : s,
        t = ((i = S(i)), (e = S(e)).every || Array.prototype.every);
      return (
        e.length &&
        i.length - r >= e.length &&
        t.call(e, function (e, t) {
          return e === (n[t] ? n[t] & i[r + t] : i[r + t]);
        })
      );
    },
    $n = "http://example.com";
  function Wn(e) {
    e = e;
    for (
      var t = window.atob
          ? window.atob(e)
          : Buffer.from(e, "base64").toString("binary"),
        i = new Uint8Array(t.length),
        s = 0;
      s < t.length;
      s++
    )
      i[s] = t.charCodeAt(s);
    return i;
  }
  function Gn(e, t) {
    return (t = void 0 === t ? Object : t) && "function" == typeof t.freeze
      ? t.freeze(e)
      : e;
  }
  var zn = Gn({
      HTML: "text/html",
      isHTML: function (e) {
        return e === zn.HTML;
      },
      XML_APPLICATION: "application/xml",
      XML_TEXT: "text/xml",
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      XML_SVG_IMAGE: "image/svg+xml",
    }),
    Xn = Gn({
      HTML: "http://www.w3.org/1999/xhtml",
      isHTML: function (e) {
        return e === Xn.HTML;
      },
      SVG: "http://www.w3.org/2000/svg",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/",
    }),
    Kn = {
      assign: function (e, t) {
        if (null === e || "object" != typeof e)
          throw new TypeError("target is not an object");
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      },
      find: function (e, t, i) {
        if (
          (void 0 === i && (i = Array.prototype),
          e && "function" == typeof i.find)
        )
          return i.find.call(e, t);
        for (var s = 0; s < e.length; s++)
          if (Object.prototype.hasOwnProperty.call(e, s)) {
            var r = e[s];
            if (t.call(void 0, r, s, e)) return r;
          }
      },
      freeze: Gn,
      MIME_TYPE: zn,
      NAMESPACE: Xn,
    },
    Yn = Kn.find,
    Qn = Kn.NAMESPACE;
  function Jn(e) {
    return "" !== e;
  }
  function Zn(e, t) {
    return e.hasOwnProperty(t) || (e[t] = !0), e;
  }
  function ea(e) {
    return e
      ? ((e = (e = e) ? e.split(/[\t\n\f\r ]+/).filter(Jn) : []),
        Object.keys(e.reduce(Zn, {})))
      : [];
  }
  function ta(e, t) {
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
  }
  function ia(e, t) {
    var i = e.prototype;
    function s() {}
    i instanceof t ||
      ((s.prototype = t.prototype),
      ta(i, (s = new s())),
      (e.prototype = i = s)),
      i.constructor != e && (i.constructor = e);
  }
  var n = {},
    s =
      ((n.ELEMENT_NODE = 1),
      (n.ATTRIBUTE_NODE = 2),
      (n.TEXT_NODE = 3),
      (n.CDATA_SECTION_NODE = 4),
      (n.ENTITY_REFERENCE_NODE = 5),
      (n.ENTITY_NODE = 6),
      (n.PROCESSING_INSTRUCTION_NODE = 7),
      (n.COMMENT_NODE = 8),
      (n.DOCUMENT_NODE = 9),
      (n.DOCUMENT_TYPE_NODE = 10),
      (n.DOCUMENT_FRAGMENT_NODE = 11),
      (n.NOTATION_NODE = 12),
      {}),
    C = {},
    sa =
      ((s.INDEX_SIZE_ERR = ((C[1] = "Index size error"), 1)),
      (s.DOMSTRING_SIZE_ERR = ((C[2] = "DOMString size error"), 2)),
      (s.HIERARCHY_REQUEST_ERR = ((C[3] = "Hierarchy request error"), 3))),
    ra =
      ((s.WRONG_DOCUMENT_ERR = ((C[4] = "Wrong document"), 4)),
      (s.INVALID_CHARACTER_ERR = ((C[5] = "Invalid character"), 5)),
      (s.NO_DATA_ALLOWED_ERR = ((C[6] = "No data allowed"), 6)),
      (s.NO_MODIFICATION_ALLOWED_ERR = ((C[7] = "No modification allowed"), 7)),
      (s.NOT_FOUND_ERR = ((C[8] = "Not found"), 8)));
  (s.NOT_SUPPORTED_ERR = ((C[9] = "Not supported"), 9)),
    (s.INUSE_ATTRIBUTE_ERR = ((C[10] = "Attribute in use"), 10));
  function k(e, t) {
    var i;
    return (
      t instanceof Error
        ? (i = t)
        : ((i = this),
          Error.call(this, C[e]),
          (this.message = C[e]),
          Error.captureStackTrace && Error.captureStackTrace(this, k)),
      (i.code = e),
      t && (this.message = this.message + ": " + t),
      i
    );
  }
  function na() {}
  function aa(e, t) {
    (this._node = e), (this._refresh = t), oa(this);
  }
  function oa(e) {
    var t,
      i = e._node._inc || e._node.ownerDocument._inc;
    e._inc != i &&
      ((t = e._refresh(e._node)),
      Wa(e, "length", t.length),
      ta(t, e),
      (e._inc = i));
  }
  function la() {}
  function da(e, t) {
    for (var i = e.length; i--; ) if (e[i] === t) return i;
  }
  function ha(e, t, i, s) {
    s ? (t[da(t, s)] = i) : (t[t.length++] = i),
      e &&
        (t = (i.ownerElement = e).ownerDocument) &&
        (s && fa(t, e, s),
        (s = e),
        (e = i),
        (i = t) && i._inc++,
        e.namespaceURI === Qn.XMLNS) &&
        (s._nsMap[e.prefix ? e.localName : ""] = e.value);
  }
  function ua(e, t, i) {
    var s = da(t, i);
    if (!(0 <= s)) throw new k(ra, new Error(e.tagName + "@" + i));
    for (var r, n = t.length - 1; s < n; ) t[s] = t[++s];
    (t.length = n),
      e && (r = e.ownerDocument) && (fa(r, e, i), (i.ownerElement = null));
  }
  function ca() {}
  function I() {}
  function pa(e) {
    return (
      ("<" == e ? "&lt;" : ">" == e && "&gt;") ||
      ("&" == e ? "&amp;" : '"' == e && "&quot;") ||
      "&#" + e.charCodeAt() + ";"
    );
  }
  function ma(e, t) {
    if (t(e)) return 1;
    if ((e = e.firstChild))
      do {
        if (ma(e, t)) return 1;
      } while ((e = e.nextSibling));
  }
  function ga() {
    this.ownerDocument = this;
  }
  function fa(e, t, i) {
    e && e._inc++,
      i.namespaceURI === Qn.XMLNS &&
        delete t._nsMap[i.prefix ? i.localName : ""];
  }
  function ya(e, t, i) {
    if (e && e._inc) {
      e._inc++;
      var s = t.childNodes;
      if (i) s[s.length++] = i;
      else {
        for (var r = t.firstChild, n = 0; r; ) r = (s[n++] = r).nextSibling;
        (s.length = n), delete s[s.length];
      }
    }
  }
  function _a(e, t) {
    var i = t.previousSibling,
      s = t.nextSibling;
    return (
      i ? (i.nextSibling = s) : (e.firstChild = s),
      s ? (s.previousSibling = i) : (e.lastChild = i),
      (t.parentNode = null),
      (t.previousSibling = null),
      (t.nextSibling = null),
      ya(e.ownerDocument, e),
      t
    );
  }
  function va(e) {
    return e && e.nodeType === I.DOCUMENT_TYPE_NODE;
  }
  function ba(e) {
    return e && e.nodeType === I.ELEMENT_NODE;
  }
  function Ta(e) {
    return e && e.nodeType === I.TEXT_NODE;
  }
  function Sa(e, t) {
    var i,
      e = e.childNodes || [];
    if (!Yn(e, ba) && !va(t))
      return (i = Yn(e, va)), !(t && i && e.indexOf(i) > e.indexOf(t));
  }
  function wa(e, t) {
    var i,
      e = e.childNodes || [];
    if (
      !Yn(e, function (e) {
        return ba(e) && e !== t;
      })
    )
      return (i = Yn(e, va)), !(t && i && e.indexOf(i) > e.indexOf(t));
  }
  function Ea(e, t, i) {
    if (
      !(s = e) ||
      (s.nodeType !== I.DOCUMENT_NODE &&
        s.nodeType !== I.DOCUMENT_FRAGMENT_NODE &&
        s.nodeType !== I.ELEMENT_NODE)
    )
      throw new k(sa, "Unexpected parent node type " + e.nodeType);
    var s;
    if (i && i.parentNode !== e) throw new k(ra, "child not in parent");
    if (
      !(s = t) ||
      !(
        ba(s) ||
        Ta(s) ||
        va(s) ||
        s.nodeType === I.DOCUMENT_FRAGMENT_NODE ||
        s.nodeType === I.COMMENT_NODE ||
        s.nodeType === I.PROCESSING_INSTRUCTION_NODE
      ) ||
      (va(t) && e.nodeType !== I.DOCUMENT_NODE)
    )
      throw new k(
        sa,
        "Unexpected node type " +
          t.nodeType +
          " for parent node type " +
          e.nodeType
      );
  }
  function Ca(e, t, i) {
    var s = e.childNodes || [],
      r = t.childNodes || [];
    if (t.nodeType === I.DOCUMENT_FRAGMENT_NODE) {
      var n = r.filter(ba);
      if (1 < n.length || Yn(r, Ta))
        throw new k(sa, "More than one element or text in fragment");
      if (1 === n.length && !Sa(e, i))
        throw new k(
          sa,
          "Element in fragment can not be inserted before doctype"
        );
    }
    if (ba(t) && !Sa(e, i))
      throw new k(sa, "Only one element can be added and only after doctype");
    if (va(t)) {
      if (Yn(s, va)) throw new k(sa, "Only one doctype is allowed");
      r = Yn(s, ba);
      if (i && s.indexOf(r) < s.indexOf(i))
        throw new k(sa, "Doctype can only be inserted before an element");
      if (!i && r)
        throw new k(sa, "Doctype can not be appended since element is present");
    }
  }
  function ka(e, t, i) {
    var s = e.childNodes || [],
      r = t.childNodes || [];
    if (t.nodeType === I.DOCUMENT_FRAGMENT_NODE) {
      var n = r.filter(ba);
      if (1 < n.length || Yn(r, Ta))
        throw new k(sa, "More than one element or text in fragment");
      if (1 === n.length && !wa(e, i))
        throw new k(
          sa,
          "Element in fragment can not be inserted before doctype"
        );
    }
    if (ba(t) && !wa(e, i))
      throw new k(sa, "Only one element can be added and only after doctype");
    if (va(t)) {
      if (
        Yn(s, function (e) {
          return va(e) && e !== i;
        })
      )
        throw new k(sa, "Only one doctype is allowed");
      r = Yn(s, ba);
      if (i && s.indexOf(r) < s.indexOf(i))
        throw new k(sa, "Doctype can only be inserted before an element");
    }
  }
  function Ia(e, t, i, s) {
    Ea(e, t, i), e.nodeType === I.DOCUMENT_NODE && (s || Ca)(e, t, i);
    s = t.parentNode;
    if ((s && s.removeChild(t), 11 === t.nodeType)) {
      var r = t.firstChild;
      if (null == r) return t;
      var n = t.lastChild;
    } else r = n = t;
    s = i ? i.previousSibling : e.lastChild;
    for (
      r.previousSibling = s,
        n.nextSibling = i,
        s ? (s.nextSibling = r) : (e.firstChild = r),
        null == i ? (e.lastChild = n) : (i.previousSibling = n);
      (r.parentNode = e), r !== n && (r = r.nextSibling);

    );
    return (
      ya(e.ownerDocument || e, e),
      11 == t.nodeType && (t.firstChild = t.lastChild = null),
      t
    );
  }
  function xa() {
    this._nsMap = {};
  }
  function Aa() {}
  function Pa() {}
  function Oa() {}
  function Da() {}
  function La() {}
  function Na() {}
  function Ma() {}
  function Ra() {}
  function Ua() {}
  function Ba() {}
  function Fa() {}
  function ja() {}
  function Ha(e, t) {
    var i,
      s = [],
      r = (9 == this.nodeType && this.documentElement) || this,
      n = r.prefix,
      a = r.namespaceURI;
    return (
      $a(
        this,
        s,
        e,
        t,
        (i =
          a && null == n && null == r.lookupPrefix(a)
            ? [{ namespace: a, prefix: null }]
            : i)
      ),
      s.join("")
    );
  }
  function qa(e, t, i) {
    var s = e.prefix || "",
      r = e.namespaceURI;
    if (r && ("xml" !== s || r !== Qn.XML) && r !== Qn.XMLNS) {
      for (var n = i.length; n--; ) {
        var a = i[n];
        if (a.prefix === s) return a.namespace !== r;
      }
      return 1;
    }
  }
  function Va(e, t, i) {
    e.push(" ", t, '="', i.replace(/[<>&"\t\n\r]/g, pa), '"');
  }
  function $a(e, t, i, s, r) {
    if (((r = r || []), s)) {
      if (!(e = s(e))) return;
      if ("string" == typeof e) return void t.push(e);
    }
    switch (e.nodeType) {
      case 1:
        var n = e.attributes,
          a = n.length,
          o = e.firstChild,
          l = e.tagName,
          d = l;
        if (
          !(i = Qn.isHTML(e.namespaceURI) || i) &&
          !e.prefix &&
          e.namespaceURI
        ) {
          for (var h, u = 0; u < n.length; u++)
            if ("xmlns" === n.item(u).name) {
              h = n.item(u).value;
              break;
            }
          if (!h)
            for (var c = r.length - 1; 0 <= c; c--)
              if ("" === (p = r[c]).prefix && p.namespace === e.namespaceURI) {
                h = p.namespace;
                break;
              }
          if (h !== e.namespaceURI)
            for (var p, c = r.length - 1; 0 <= c; c--)
              if ((p = r[c]).namespace === e.namespaceURI) {
                p.prefix && (d = p.prefix + ":" + l);
                break;
              }
        }
        t.push("<", d);
        for (var m = 0; m < a; m++)
          "xmlns" == (g = n.item(m)).prefix
            ? r.push({ prefix: g.localName, namespace: g.value })
            : "xmlns" == g.nodeName &&
              r.push({ prefix: "", namespace: g.value });
        for (var g, f, y, m = 0; m < a; m++)
          qa((g = n.item(m)), 0, r) &&
            (Va(
              t,
              (f = g.prefix || "") ? "xmlns:" + f : "xmlns",
              (y = g.namespaceURI)
            ),
            r.push({ prefix: f, namespace: y })),
            $a(g, t, i, s, r);
        if (
          (l === d &&
            qa(e, 0, r) &&
            (Va(
              t,
              (f = e.prefix || "") ? "xmlns:" + f : "xmlns",
              (y = e.namespaceURI)
            ),
            r.push({ prefix: f, namespace: y })),
          o || (i && !/^(?:meta|link|img|br|hr|input)$/i.test(l)))
        ) {
          if ((t.push(">"), i && /^script$/i.test(l)))
            for (; o; )
              o.data ? t.push(o.data) : $a(o, t, i, s, r.slice()),
                (o = o.nextSibling);
          else for (; o; ) $a(o, t, i, s, r.slice()), (o = o.nextSibling);
          t.push("</", d, ">");
        } else t.push("/>");
        return;
      case 9:
      case 11:
        for (o = e.firstChild; o; )
          $a(o, t, i, s, r.slice()), (o = o.nextSibling);
        return;
      case 2:
        return Va(t, e.name, e.value);
      case 3:
        return t.push(e.data.replace(/[<&>]/g, pa));
      case 4:
        return t.push("<![CDATA[", e.data, "]]>");
      case 8:
        return t.push("\x3c!--", e.data, "--\x3e");
      case 10:
        var _ = e.publicId,
          v = e.systemId;
        return (
          t.push("<!DOCTYPE ", e.name),
          void (_
            ? (t.push(" PUBLIC ", _),
              v && "." != v && t.push(" ", v),
              t.push(">"))
            : v && "." != v
            ? t.push(" SYSTEM ", v, ">")
            : ((_ = e.internalSubset) && t.push(" [", _, "]"), t.push(">")))
        );
      case 7:
        return t.push("<?", e.target, " ", e.data, "?>");
      case 5:
        return t.push("&", e.nodeName, ";");
      default:
        t.push("??", e.nodeName);
    }
  }
  function Wa(e, t, i) {
    e[t] = i;
  }
  (s.INVALID_STATE_ERR = ((C[11] = "Invalid state"), 11)),
    (s.SYNTAX_ERR = ((C[12] = "Syntax error"), 12)),
    (s.INVALID_MODIFICATION_ERR = ((C[13] = "Invalid modification"), 13)),
    (s.NAMESPACE_ERR = ((C[14] = "Invalid namespace"), 14)),
    (s.INVALID_ACCESS_ERR = ((C[15] = "Invalid access"), 15)),
    (k.prototype = Error.prototype),
    ta(s, k),
    (na.prototype = {
      length: 0,
      item: function (e) {
        return this[e] || null;
      },
      toString: function (e, t) {
        for (var i = [], s = 0; s < this.length; s++) $a(this[s], i, e, t);
        return i.join("");
      },
      filter: function (e) {
        return Array.prototype.filter.call(this, e);
      },
      indexOf: function (e) {
        return Array.prototype.indexOf.call(this, e);
      },
    }),
    (aa.prototype.item = function (e) {
      return oa(this), this[e];
    }),
    ia(aa, na),
    (la.prototype = {
      length: 0,
      item: na.prototype.item,
      getNamedItem: function (e) {
        for (var t = this.length; t--; ) {
          var i = this[t];
          if (i.nodeName == e) return i;
        }
      },
      setNamedItem: function (e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new k(10);
        t = this.getNamedItem(e.nodeName);
        return ha(this._ownerElement, this, e, t), t;
      },
      setNamedItemNS: function (e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new k(10);
        return (
          (t = this.getNamedItemNS(e.namespaceURI, e.localName)),
          ha(this._ownerElement, this, e, t),
          t
        );
      },
      removeNamedItem: function (e) {
        e = this.getNamedItem(e);
        return ua(this._ownerElement, this, e), e;
      },
      removeNamedItemNS: function (e, t) {
        e = this.getNamedItemNS(e, t);
        return ua(this._ownerElement, this, e), e;
      },
      getNamedItemNS: function (e, t) {
        for (var i = this.length; i--; ) {
          var s = this[i];
          if (s.localName == t && s.namespaceURI == e) return s;
        }
        return null;
      },
    }),
    (ca.prototype = {
      hasFeature: function (e, t) {
        return !0;
      },
      createDocument: function (e, t, i) {
        var s = new ga();
        return (
          (s.implementation = this),
          (s.childNodes = new na()),
          (s.doctype = i || null),
          i && s.appendChild(i),
          t && ((i = s.createElementNS(e, t)), s.appendChild(i)),
          s
        );
      },
      createDocumentType: function (e, t, i) {
        var s = new Na();
        return (
          (s.name = e),
          (s.nodeName = e),
          (s.publicId = t || ""),
          (s.systemId = i || ""),
          s
        );
      },
    }),
    (I.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      insertBefore: function (e, t) {
        return Ia(this, e, t);
      },
      replaceChild: function (e, t) {
        Ia(this, e, t, ka), t && this.removeChild(t);
      },
      removeChild: function (e) {
        return _a(this, e);
      },
      appendChild: function (e) {
        return this.insertBefore(e, null);
      },
      hasChildNodes: function () {
        return null != this.firstChild;
      },
      cloneNode: function (e) {
        return (function e(t, i, s) {
          var r = new i.constructor();
          for (var n in i) {
            var a;
            Object.prototype.hasOwnProperty.call(i, n) &&
              "object" != typeof (a = i[n]) &&
              a != r[n] &&
              (r[n] = a);
          }
          i.childNodes && (r.childNodes = new na());
          r.ownerDocument = t;
          switch (r.nodeType) {
            case 1:
              var o = i.attributes,
                l = (r.attributes = new la()),
                d = o.length;
              l._ownerElement = r;
              for (var h = 0; h < d; h++)
                r.setAttributeNode(e(t, o.item(h), !0));
              break;
            case 2:
              s = !0;
          }
          if (s)
            for (var u = i.firstChild; u; )
              r.appendChild(e(t, u, s)), (u = u.nextSibling);
          return r;
        })(this.ownerDocument || this, this, e);
      },
      normalize: function () {
        for (var e = this.firstChild; e; ) {
          var t = e.nextSibling;
          t && 3 == t.nodeType && 3 == e.nodeType
            ? (this.removeChild(t), e.appendData(t.data))
            : (e.normalize(), (e = t));
        }
      },
      isSupported: function (e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t);
      },
      hasAttributes: function () {
        return 0 < this.attributes.length;
      },
      lookupPrefix: function (e) {
        for (var t = this; t; ) {
          var i = t._nsMap;
          if (i)
            for (var s in i)
              if (Object.prototype.hasOwnProperty.call(i, s) && i[s] === e)
                return s;
          t = 2 == t.nodeType ? t.ownerDocument : t.parentNode;
        }
        return null;
      },
      lookupNamespaceURI: function (e) {
        for (var t = this; t; ) {
          var i = t._nsMap;
          if (i && Object.prototype.hasOwnProperty.call(i, e)) return i[e];
          t = 2 == t.nodeType ? t.ownerDocument : t.parentNode;
        }
        return null;
      },
      isDefaultNamespace: function (e) {
        return null == this.lookupPrefix(e);
      },
    }),
    ta(n, I),
    ta(n, I.prototype),
    (ga.prototype = {
      nodeName: "#document",
      nodeType: 9,
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function (e, t) {
        if (11 == e.nodeType)
          for (var i = e.firstChild; i; ) {
            var s = i.nextSibling;
            this.insertBefore(i, t), (i = s);
          }
        else
          Ia(this, e, t),
            null === (e.ownerDocument = this).documentElement &&
              1 === e.nodeType &&
              (this.documentElement = e);
        return e;
      },
      removeChild: function (e) {
        return (
          this.documentElement == e && (this.documentElement = null),
          _a(this, e)
        );
      },
      replaceChild: function (e, t) {
        Ia(this, e, t, ka),
          (e.ownerDocument = this),
          t && this.removeChild(t),
          ba(e) && (this.documentElement = e);
      },
      importNode: function (e, t) {
        return (function e(t, i, s) {
          var r;
          switch (i.nodeType) {
            case 1:
              (r = i.cloneNode(!1)).ownerDocument = t;
            case 11:
              break;
            case 2:
              s = !0;
          }
          r = r || i.cloneNode(!1);
          r.ownerDocument = t;
          r.parentNode = null;
          if (s)
            for (var n = i.firstChild; n; )
              r.appendChild(e(t, n, s)), (n = n.nextSibling);
          return r;
        })(this, e, t);
      },
      getElementById: function (t) {
        var i = null;
        return (
          ma(this.documentElement, function (e) {
            if (1 == e.nodeType && e.getAttribute("id") == t)
              return (i = e), !0;
          }),
          i
        );
      },
      getElementsByClassName: function (a) {
        var o = ea(a);
        return new aa(this, function (r) {
          var n = [];
          return (
            0 < o.length &&
              ma(r.documentElement, function (e) {
                var t, i, s;
                e !== r &&
                  1 === e.nodeType &&
                  (t = e.getAttribute("class")) &&
                  ((i = a === t) ||
                    ((t = ea(t)),
                    (i = o.every(
                      ((s = t),
                      function (e) {
                        return s && -1 !== s.indexOf(e);
                      })
                    ))),
                  i) &&
                  n.push(e);
              }),
            n
          );
        });
      },
      createElement: function (e) {
        var t = new xa();
        return (
          (t.ownerDocument = this),
          (t.nodeName = e),
          (t.tagName = e),
          (t.localName = e),
          (t.childNodes = new na()),
          ((t.attributes = new la())._ownerElement = t)
        );
      },
      createDocumentFragment: function () {
        var e = new Ba();
        return (e.ownerDocument = this), (e.childNodes = new na()), e;
      },
      createTextNode: function (e) {
        var t = new Oa();
        return (t.ownerDocument = this), t.appendData(e), t;
      },
      createComment: function (e) {
        var t = new Da();
        return (t.ownerDocument = this), t.appendData(e), t;
      },
      createCDATASection: function (e) {
        var t = new La();
        return (t.ownerDocument = this), t.appendData(e), t;
      },
      createProcessingInstruction: function (e, t) {
        var i = new Fa();
        return (
          (i.ownerDocument = this),
          (i.tagName = i.target = e),
          (i.nodeValue = i.data = t),
          i
        );
      },
      createAttribute: function (e) {
        var t = new Aa();
        return (
          (t.ownerDocument = this),
          (t.name = e),
          (t.nodeName = e),
          (t.localName = e),
          (t.specified = !0),
          t
        );
      },
      createEntityReference: function (e) {
        var t = new Ua();
        return (t.ownerDocument = this), (t.nodeName = e), t;
      },
      createElementNS: function (e, t) {
        var i = new xa(),
          s = t.split(":"),
          r = (i.attributes = new la());
        return (
          (i.childNodes = new na()),
          (i.ownerDocument = this),
          (i.nodeName = t),
          (i.tagName = t),
          (i.namespaceURI = e),
          2 == s.length
            ? ((i.prefix = s[0]), (i.localName = s[1]))
            : (i.localName = t),
          (r._ownerElement = i)
        );
      },
      createAttributeNS: function (e, t) {
        var i = new Aa(),
          s = t.split(":");
        return (
          (i.ownerDocument = this),
          (i.nodeName = t),
          (i.name = t),
          (i.namespaceURI = e),
          (i.specified = !0),
          2 == s.length
            ? ((i.prefix = s[0]), (i.localName = s[1]))
            : (i.localName = t),
          i
        );
      },
    }),
    ia(ga, I),
    (ga.prototype.getElementsByTagName = (xa.prototype = {
      nodeType: 1,
      hasAttribute: function (e) {
        return null != this.getAttributeNode(e);
      },
      getAttribute: function (e) {
        e = this.getAttributeNode(e);
        return (e && e.value) || "";
      },
      getAttributeNode: function (e) {
        return this.attributes.getNamedItem(e);
      },
      setAttribute: function (e, t) {
        e = this.ownerDocument.createAttribute(e);
        (e.value = e.nodeValue = "" + t), this.setAttributeNode(e);
      },
      removeAttribute: function (e) {
        e = this.getAttributeNode(e);
        e && this.removeAttributeNode(e);
      },
      appendChild: function (e) {
        return 11 === e.nodeType
          ? this.insertBefore(e, null)
          : ((t = this),
            (e = e).parentNode && e.parentNode.removeChild(e),
            (e.parentNode = t),
            (e.previousSibling = t.lastChild),
            (e.nextSibling = null),
            e.previousSibling
              ? (e.previousSibling.nextSibling = e)
              : (t.firstChild = e),
            (t.lastChild = e),
            ya(t.ownerDocument, t, e),
            e);
        var t;
      },
      setAttributeNode: function (e) {
        return this.attributes.setNamedItem(e);
      },
      setAttributeNodeNS: function (e) {
        return this.attributes.setNamedItemNS(e);
      },
      removeAttributeNode: function (e) {
        return this.attributes.removeNamedItem(e.nodeName);
      },
      removeAttributeNS: function (e, t) {
        e = this.getAttributeNodeNS(e, t);
        e && this.removeAttributeNode(e);
      },
      hasAttributeNS: function (e, t) {
        return null != this.getAttributeNodeNS(e, t);
      },
      getAttributeNS: function (e, t) {
        e = this.getAttributeNodeNS(e, t);
        return (e && e.value) || "";
      },
      setAttributeNS: function (e, t, i) {
        e = this.ownerDocument.createAttributeNS(e, t);
        (e.value = e.nodeValue = "" + i), this.setAttributeNode(e);
      },
      getAttributeNodeNS: function (e, t) {
        return this.attributes.getNamedItemNS(e, t);
      },
      getElementsByTagName: function (s) {
        return new aa(this, function (t) {
          var i = [];
          return (
            ma(t, function (e) {
              e === t ||
                1 != e.nodeType ||
                ("*" !== s && e.tagName != s) ||
                i.push(e);
            }),
            i
          );
        });
      },
      getElementsByTagNameNS: function (s, r) {
        return new aa(this, function (t) {
          var i = [];
          return (
            ma(t, function (e) {
              e === t ||
                1 !== e.nodeType ||
                ("*" !== s && e.namespaceURI !== s) ||
                ("*" !== r && e.localName != r) ||
                i.push(e);
            }),
            i
          );
        });
      },
    }).getElementsByTagName),
    (ga.prototype.getElementsByTagNameNS = xa.prototype.getElementsByTagNameNS),
    ia(xa, I),
    (Aa.prototype.nodeType = 2),
    ia(Aa, I),
    (Pa.prototype = {
      data: "",
      substringData: function (e, t) {
        return this.data.substring(e, e + t);
      },
      appendData: function (e) {
        (e = this.data + e),
          (this.nodeValue = this.data = e),
          (this.length = e.length);
      },
      insertData: function (e, t) {
        this.replaceData(e, 0, t);
      },
      appendChild: function (e) {
        throw new Error(C[sa]);
      },
      deleteData: function (e, t) {
        this.replaceData(e, t, "");
      },
      replaceData: function (e, t, i) {
        var s = this.data.substring(0, e),
          e = this.data.substring(e + t);
        (this.nodeValue = this.data = i = s + i + e), (this.length = i.length);
      },
    }),
    ia(Pa, I),
    (Oa.prototype = {
      nodeName: "#text",
      nodeType: 3,
      splitText: function (e) {
        var t = (i = this.data).substring(e),
          i = i.substring(0, e),
          e =
            ((this.data = this.nodeValue = i),
            (this.length = i.length),
            this.ownerDocument.createTextNode(t));
        return (
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling),
          e
        );
      },
    }),
    ia(Oa, Pa),
    (Da.prototype = { nodeName: "#comment", nodeType: 8 }),
    ia(Da, Pa),
    (La.prototype = { nodeName: "#cdata-section", nodeType: 4 }),
    ia(La, Pa),
    (Na.prototype.nodeType = 10),
    ia(Na, I),
    (Ma.prototype.nodeType = 12),
    ia(Ma, I),
    (Ra.prototype.nodeType = 6),
    ia(Ra, I),
    (Ua.prototype.nodeType = 5),
    ia(Ua, I),
    (Ba.prototype.nodeName = "#document-fragment"),
    (Ba.prototype.nodeType = 11),
    ia(Ba, I),
    (Fa.prototype.nodeType = 7),
    ia(Fa, I),
    (ja.prototype.serializeToString = function (e, t, i) {
      return Ha.call(e, t, i);
    }),
    (I.prototype.toString = Ha);
  try {
    Object.defineProperty &&
      (Object.defineProperty(aa.prototype, "length", {
        get: function () {
          return oa(this), this.$$length;
        },
      }),
      Object.defineProperty(I.prototype, "textContent", {
        get: function () {
          return (function e(t) {
            switch (t.nodeType) {
              case 1:
              case 11:
                var i = [];
                for (t = t.firstChild; t; )
                  7 !== t.nodeType && 8 !== t.nodeType && i.push(e(t)),
                    (t = t.nextSibling);
                return i.join("");
              default:
                return t.nodeValue;
            }
          })(this);
        },
        set: function (e) {
          switch (this.nodeType) {
            case 1:
            case 11:
              for (; this.firstChild; ) this.removeChild(this.firstChild);
              (e || String(e)) &&
                this.appendChild(this.ownerDocument.createTextNode(e));
              break;
            default:
              (this.data = e), (this.value = e), (this.nodeValue = e);
          }
        },
      }),
      (Wa = function (e, t, i) {
        e["$$" + t] = i;
      }));
  } catch (e) {}
  var Ar = {
      DocumentType: Na,
      DOMException: k,
      DOMImplementation: ca,
      Element: xa,
      Node: I,
      NodeList: na,
      XMLSerializer: ja,
    },
    Ga = Dt(function (e, t) {
      var i = Kn.freeze;
      (t.XML_ENTITIES = i({
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        quot: '"',
      })),
        (t.HTML_ENTITIES = i({
          lt: "<",
          gt: ">",
          amp: "&",
          quot: '"',
          apos: "'",
          Agrave: "Ã€",
          Aacute: "Ã",
          Acirc: "Ã‚",
          Atilde: "Ãƒ",
          Auml: "Ã„",
          Aring: "Ã…",
          AElig: "Ã†",
          Ccedil: "Ã‡",
          Egrave: "Ãˆ",
          Eacute: "Ã‰",
          Ecirc: "ÃŠ",
          Euml: "Ã‹",
          Igrave: "ÃŒ",
          Iacute: "Ã",
          Icirc: "ÃŽ",
          Iuml: "Ã",
          ETH: "Ã",
          Ntilde: "Ã‘",
          Ograve: "Ã’",
          Oacute: "Ã“",
          Ocirc: "Ã”",
          Otilde: "Ã•",
          Ouml: "Ã–",
          Oslash: "Ã˜",
          Ugrave: "Ã™",
          Uacute: "Ãš",
          Ucirc: "Ã›",
          Uuml: "Ãœ",
          Yacute: "Ã",
          THORN: "Ãž",
          szlig: "ÃŸ",
          agrave: "Ã ",
          aacute: "Ã¡",
          acirc: "Ã¢",
          atilde: "Ã£",
          auml: "Ã¤",
          aring: "Ã¥",
          aelig: "Ã¦",
          ccedil: "Ã§",
          egrave: "Ã¨",
          eacute: "Ã©",
          ecirc: "Ãª",
          euml: "Ã«",
          igrave: "Ã¬",
          iacute: "Ã­",
          icirc: "Ã®",
          iuml: "Ã¯",
          eth: "Ã°",
          ntilde: "Ã±",
          ograve: "Ã²",
          oacute: "Ã³",
          ocirc: "Ã´",
          otilde: "Ãµ",
          ouml: "Ã¶",
          oslash: "Ã¸",
          ugrave: "Ã¹",
          uacute: "Ãº",
          ucirc: "Ã»",
          uuml: "Ã¼",
          yacute: "Ã½",
          thorn: "Ã¾",
          yuml: "Ã¿",
          nbsp: "Â ",
          iexcl: "Â¡",
          cent: "Â¢",
          pound: "Â£",
          curren: "Â¤",
          yen: "Â¥",
          brvbar: "Â¦",
          sect: "Â§",
          uml: "Â¨",
          copy: "Â©",
          ordf: "Âª",
          laquo: "Â«",
          not: "Â¬",
          shy: "Â­Â­",
          reg: "Â®",
          macr: "Â¯",
          deg: "Â°",
          plusmn: "Â±",
          sup2: "Â²",
          sup3: "Â³",
          acute: "Â´",
          micro: "Âµ",
          para: "Â¶",
          middot: "Â·",
          cedil: "Â¸",
          sup1: "Â¹",
          ordm: "Âº",
          raquo: "Â»",
          frac14: "Â¼",
          frac12: "Â½",
          frac34: "Â¾",
          iquest: "Â¿",
          times: "Ã—",
          divide: "Ã·",
          forall: "âˆ€",
          part: "âˆ‚",
          exist: "âˆƒ",
          empty: "âˆ…",
          nabla: "âˆ‡",
          isin: "âˆˆ",
          notin: "âˆ‰",
          ni: "âˆ‹",
          prod: "âˆ",
          sum: "âˆ‘",
          minus: "âˆ’",
          lowast: "âˆ—",
          radic: "âˆš",
          prop: "âˆ",
          infin: "âˆž",
          ang: "âˆ ",
          and: "âˆ§",
          or: "âˆ¨",
          cap: "âˆ©",
          cup: "âˆª",
          int: "âˆ«",
          there4: "âˆ´",
          sim: "âˆ¼",
          cong: "â‰…",
          asymp: "â‰ˆ",
          ne: "â‰ ",
          equiv: "â‰¡",
          le: "â‰¤",
          ge: "â‰¥",
          sub: "âŠ‚",
          sup: "âŠƒ",
          nsub: "âŠ„",
          sube: "âŠ†",
          supe: "âŠ‡",
          oplus: "âŠ•",
          otimes: "âŠ—",
          perp: "âŠ¥",
          sdot: "â‹…",
          Alpha: "Î‘",
          Beta: "Î’",
          Gamma: "Î“",
          Delta: "Î”",
          Epsilon: "Î•",
          Zeta: "Î–",
          Eta: "Î—",
          Theta: "Î˜",
          Iota: "Î™",
          Kappa: "Îš",
          Lambda: "Î›",
          Mu: "Îœ",
          Nu: "Î",
          Xi: "Îž",
          Omicron: "ÎŸ",
          Pi: "Î ",
          Rho: "Î¡",
          Sigma: "Î£",
          Tau: "Î¤",
          Upsilon: "Î¥",
          Phi: "Î¦",
          Chi: "Î§",
          Psi: "Î¨",
          Omega: "Î©",
          alpha: "Î±",
          beta: "Î²",
          gamma: "Î³",
          delta: "Î´",
          epsilon: "Îµ",
          zeta: "Î¶",
          eta: "Î·",
          theta: "Î¸",
          iota: "Î¹",
          kappa: "Îº",
          lambda: "Î»",
          mu: "Î¼",
          nu: "Î½",
          xi: "Î¾",
          omicron: "Î¿",
          pi: "Ï€",
          rho: "Ï",
          sigmaf: "Ï‚",
          sigma: "Ïƒ",
          tau: "Ï„",
          upsilon: "Ï…",
          phi: "Ï†",
          chi: "Ï‡",
          psi: "Ïˆ",
          omega: "Ï‰",
          thetasym: "Ï‘",
          upsih: "Ï’",
          piv: "Ï–",
          OElig: "Å’",
          oelig: "Å“",
          Scaron: "Å ",
          scaron: "Å¡",
          Yuml: "Å¸",
          fnof: "Æ’",
          circ: "Ë†",
          tilde: "Ëœ",
          ensp: "â€‚",
          emsp: "â€ƒ",
          thinsp: "â€‰",
          zwnj: "â€Œ",
          zwj: "â€",
          lrm: "â€Ž",
          rlm: "â€",
          ndash: "â€“",
          mdash: "â€”",
          lsquo: "â€˜",
          rsquo: "â€™",
          sbquo: "â€š",
          ldquo: "â€œ",
          rdquo: "â€",
          bdquo: "â€ž",
          dagger: "â€ ",
          Dagger: "â€¡",
          bull: "â€¢",
          hellip: "â€¦",
          permil: "â€°",
          prime: "â€²",
          Prime: "â€³",
          lsaquo: "â€¹",
          rsaquo: "â€º",
          oline: "â€¾",
          euro: "â‚¬",
          trade: "â„¢",
          larr: "â†",
          uarr: "â†‘",
          rarr: "â†’",
          darr: "â†“",
          harr: "â†”",
          crarr: "â†µ",
          lceil: "âŒˆ",
          rceil: "âŒ‰",
          lfloor: "âŒŠ",
          rfloor: "âŒ‹",
          loz: "â—Š",
          spades: "â™ ",
          clubs: "â™£",
          hearts: "â™¥",
          diams: "â™¦",
        })),
        (t.entityMap = t.HTML_ENTITIES);
    }),
    za = (Ga.XML_ENTITIES, Ga.HTML_ENTITIES, Ga.entityMap, Kn.NAMESPACE),
    Mr =
      /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Nr = new RegExp(
      "[\\-\\.0-9" +
        Mr.source.slice(1, -1) +
        "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"
    ),
    Xa = new RegExp(
      "^" + Mr.source + Nr.source + "*(?::" + Mr.source + Nr.source + "*)?$"
    ),
    Ka = 0,
    Ya = 1,
    Qa = 2,
    Ja = 3,
    Za = 4,
    eo = 5,
    to = 6,
    io = 7;
  function so(e, t) {
    (this.message = e),
      (this.locator = t),
      Error.captureStackTrace && Error.captureStackTrace(this, so);
  }
  function ro() {}
  function no(e, t) {
    return (t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber), t;
  }
  function ao(e, t, i) {
    for (var s = e.tagName, r = null, n = e.length; n--; ) {
      var a = e[n],
        o = a.qName,
        l = a.value,
        o =
          0 < (h = o.indexOf(":"))
            ? ((d = a.prefix = o.slice(0, h)),
              (u = o.slice(h + 1)),
              "xmlns" === d && u)
            : ((d = null), "xmlns" === (u = o) && "");
      (a.localName = u),
        !1 !== o &&
          (null == r && ((r = {}), oo(i, (i = {}))),
          (i[o] = r[o] = l),
          (a.uri = za.XMLNS),
          t.startPrefixMapping(o, l));
    }
    for (var d, n = e.length; n--; )
      (d = (a = e[n]).prefix) &&
        ("xml" === d && (a.uri = za.XML), "xmlns" !== d) &&
        (a.uri = i[d || ""]);
    var h,
      u =
        0 < (h = s.indexOf(":"))
          ? ((d = e.prefix = s.slice(0, h)), (e.localName = s.slice(h + 1)))
          : ((d = null), (e.localName = s)),
      c = (e.uri = i[d || ""]);
    if ((t.startElement(c, u, s, e), !e.closed))
      return (e.currentNSMap = i), (e.localNSMap = r), 1;
    if ((t.endElement(c, u, s), r))
      for (d in r)
        Object.prototype.hasOwnProperty.call(r, d) && t.endPrefixMapping(d);
  }
  function oo(e, t) {
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
  }
  function lo() {
    this.attributeNames = {};
  }
  ((so.prototype = new Error()).name = so.name),
    (ro.prototype = {
      parse: function (e, t, i) {
        var s = this.domBuilder;
        s.startDocument(),
          oo(t, (t = {})),
          (function (i, e, s, r, n) {
            function a(e) {
              var t = e.slice(1, -1);
              return Object.hasOwnProperty.call(s, t)
                ? s[t]
                : "#" === t.charAt(0)
                ? 65535 < (t = parseInt(t.substr(1).replace("x", "0x")))
                  ? ((t -= 65536),
                    String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
                  : String.fromCharCode(t)
                : (n.error("entity not found:" + e), e);
            }
            function t(e) {
              var t;
              m < e &&
                ((t = i.substring(m, e).replace(/&#?\w+;/g, a)),
                u && o(m),
                r.characters(t, 0, e - m),
                (m = e));
            }
            function o(e, t) {
              for (; d <= e && (t = h.exec(i)); )
                (l = t.index), (d = l + t[0].length), u.lineNumber++;
              u.columnNumber = e - l + 1;
            }
            var l = 0,
              d = 0,
              h = /.*(?:\r\n?|\n)|.*$/g,
              u = r.locator,
              c = [{ currentNSMap: e }],
              p = {},
              m = 0;
            for (;;) {
              try {
                var g,
                  f,
                  y = i.indexOf("<", m);
                if (y < 0)
                  return (
                    i.substr(m).match(/^\s*$/) ||
                    ((g = r.doc),
                    (f = g.createTextNode(i.substr(m))),
                    g.appendChild(f),
                    (r.currentElement = f))
                  );
                switch ((m < y && t(y), i.charAt(y + 1))) {
                  case "/":
                    var _ = i.indexOf(">", y + 3),
                      v = i.substring(y + 2, _).replace(/[ \t\n\r]+$/g, ""),
                      b = c.pop(),
                      T =
                        (_ < 0
                          ? ((v = i.substring(y + 2).replace(/[\s<].*/, "")),
                            n.error(
                              "end tag name: " +
                                v +
                                " is not complete:" +
                                b.tagName
                            ),
                            (_ = y + 1 + v.length))
                          : v.match(/\s</) &&
                            ((v = v.replace(/[\s<].*/, "")),
                            n.error(
                              "end tag name: " + v + " maybe not complete"
                            ),
                            (_ = y + 1 + v.length)),
                        b.localNSMap),
                      S = b.tagName == v;
                    if (
                      S ||
                      (b.tagName && b.tagName.toLowerCase() == v.toLowerCase())
                    ) {
                      if ((r.endElement(b.uri, b.localName, v), T))
                        for (var w in T)
                          Object.prototype.hasOwnProperty.call(T, w) &&
                            r.endPrefixMapping(w);
                      S ||
                        n.fatalError(
                          "end tag name: " +
                            v +
                            " is not match the current start tagName:" +
                            b.tagName
                        );
                    } else c.push(b);
                    _++;
                    break;
                  case "?":
                    u && o(y),
                      (_ = (function (e, t, i) {
                        var s = e.indexOf("?>", t);
                        if (s) {
                          e = e
                            .substring(t, s)
                            .match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                          if (e)
                            return (
                              e[0].length,
                              i.processingInstruction(e[1], e[2]),
                              s + 2
                            );
                        }
                        return -1;
                      })(i, y, r));
                    break;
                  case "!":
                    u && o(y),
                      (_ = (function (e, t, i, s) {
                        {
                          if ("-" === e.charAt(t + 2))
                            return "-" === e.charAt(t + 3)
                              ? ((n = e.indexOf("--\x3e", t + 4)),
                                t < n
                                  ? (i.comment(e, t + 4, n - t - 4), n + 3)
                                  : (s.error("Unclosed comment"), -1))
                              : -1;
                          if ("CDATA[" == e.substr(t + 3, 6))
                            return (
                              (n = e.indexOf("]]>", t + 9)),
                              i.startCDATA(),
                              i.characters(e, t + 9, n - t - 9),
                              i.endCDATA(),
                              n + 3
                            );
                          var r,
                            s = (function (e, t) {
                              var i,
                                s = [],
                                r =
                                  /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                              (r.lastIndex = t), r.exec(e);
                              for (; (i = r.exec(e)); )
                                if ((s.push(i), i[1])) return s;
                            })(e, t),
                            n = s.length;
                          if (1 < n && /!doctype/i.test(s[0][0]))
                            return (
                              (e = s[1][0]),
                              (r = t = !1),
                              3 < n &&
                                (/^public$/i.test(s[2][0])
                                  ? ((t = s[3][0]), (r = 4 < n && s[4][0]))
                                  : /^system$/i.test(s[2][0]) && (r = s[3][0])),
                              (s = s[n - 1]),
                              i.startDTD(e, t, r),
                              i.endDTD(),
                              s.index + s[0].length
                            );
                        }
                        return -1;
                      })(i, y, r, n));
                    break;
                  default:
                    u && o(y);
                    var E = new lo(),
                      C = c[c.length - 1].currentNSMap,
                      _ = (function (e, t, s, i, r, n) {
                        function a(e, t, i) {
                          s.attributeNames.hasOwnProperty(e) &&
                            n.fatalError("Attribute " + e + " redefined"),
                            s.addValue(
                              e,
                              t
                                .replace(/[\t\n\r]/g, " ")
                                .replace(/&#?\w+;/g, r),
                              i
                            );
                        }
                        var o,
                          l = ++t,
                          d = Ka;
                        for (;;) {
                          var h = e.charAt(l);
                          switch (h) {
                            case "=":
                              if (d === Ya) o = e.slice(t, l);
                              else if (d !== Qa)
                                throw new Error(
                                  "attribute equal must after attrName"
                                );
                              d = Ja;
                              break;
                            case "'":
                            case '"':
                              if (d === Ja || d === Ya) {
                                if (
                                  (d === Ya &&
                                    (n.warning(
                                      'attribute value must after "="'
                                    ),
                                    (o = e.slice(t, l))),
                                  (t = l + 1),
                                  !(0 < (l = e.indexOf(h, t))))
                                )
                                  throw new Error(
                                    "attribute value no end '" + h + "' match"
                                  );
                                (u = e.slice(t, l)), a(o, u, t - 1);
                              } else {
                                if (d != Za)
                                  throw new Error(
                                    'attribute value must after "="'
                                  );
                                (u = e.slice(t, l)),
                                  a(o, u, t),
                                  n.warning(
                                    'attribute "' +
                                      o +
                                      '" missed start quot(' +
                                      h +
                                      ")!!"
                                  ),
                                  (t = l + 1);
                              }
                              d = eo;
                              break;
                            case "/":
                              switch (d) {
                                case Ka:
                                  s.setTagName(e.slice(t, l));
                                case eo:
                                case to:
                                case io:
                                  (d = io), (s.closed = !0);
                                case Za:
                                case Ya:
                                case Qa:
                                  break;
                                default:
                                  throw new Error(
                                    "attribute invalid close char('/')"
                                  );
                              }
                              break;
                            case "":
                              return (
                                n.error("unexpected end of input"),
                                d == Ka && s.setTagName(e.slice(t, l)),
                                l
                              );
                            case ">":
                              switch (d) {
                                case Ka:
                                  s.setTagName(e.slice(t, l));
                                case eo:
                                case to:
                                case io:
                                  break;
                                case Za:
                                case Ya:
                                  "/" === (u = e.slice(t, l)).slice(-1) &&
                                    ((s.closed = !0), (u = u.slice(0, -1)));
                                case Qa:
                                  d === Qa && (u = o),
                                    d == Za
                                      ? (n.warning(
                                          'attribute "' +
                                            u +
                                            '" missed quot(")!'
                                        ),
                                        a(o, u, t))
                                      : ((za.isHTML(i[""]) &&
                                          u.match(
                                            /^(?:disabled|checked|selected)$/i
                                          )) ||
                                          n.warning(
                                            'attribute "' +
                                              u +
                                              '" missed value!! "' +
                                              u +
                                              '" instead!!'
                                          ),
                                        a(u, u, t));
                                  break;
                                case Ja:
                                  throw new Error("attribute value missed!!");
                              }
                              return l;
                            case "Â€":
                              h = " ";
                            default:
                              if (h <= " ")
                                switch (d) {
                                  case Ka:
                                    s.setTagName(e.slice(t, l)), (d = to);
                                    break;
                                  case Ya:
                                    (o = e.slice(t, l)), (d = Qa);
                                    break;
                                  case Za:
                                    var u = e.slice(t, l);
                                    n.warning(
                                      'attribute "' + u + '" missed quot(")!!'
                                    ),
                                      a(o, u, t);
                                  case eo:
                                    d = to;
                                }
                              else
                                switch (d) {
                                  case Qa:
                                    s.tagName,
                                      (za.isHTML(i[""]) &&
                                        o.match(
                                          /^(?:disabled|checked|selected)$/i
                                        )) ||
                                        n.warning(
                                          'attribute "' +
                                            o +
                                            '" missed value!! "' +
                                            o +
                                            '" instead2!!'
                                        ),
                                      a(o, o, t),
                                      (t = l),
                                      (d = Ya);
                                    break;
                                  case eo:
                                    n.warning(
                                      'attribute space is required"' + o + '"!!'
                                    );
                                  case to:
                                    (d = Ya), (t = l);
                                    break;
                                  case Ja:
                                    (d = Za), (t = l);
                                    break;
                                  case io:
                                    throw new Error(
                                      "elements closed character '/' and '>' must be connected to"
                                    );
                                }
                          }
                          l++;
                        }
                      })(i, y, E, C, a, n),
                      k = E.length;
                    if (
                      (!E.closed &&
                        (function (e, t, i, s) {
                          var r = s[i];
                          null == r &&
                            ((r = e.lastIndexOf("</" + i + ">")) < t &&
                              (r = e.lastIndexOf("</" + i)),
                            (s[i] = r));
                          return r < t;
                        })(i, _, E.tagName, p) &&
                        ((E.closed = !0),
                        s.nbsp || n.warning("unclosed xml attribute")),
                      u && k)
                    ) {
                      for (var I = no(u, {}), x = 0; x < k; x++) {
                        var A = E[x];
                        o(A.offset), (A.locator = no(u, {}));
                      }
                      (r.locator = I),
                        ao(E, r, C) && c.push(E),
                        (r.locator = u);
                    } else ao(E, r, C) && c.push(E);
                    za.isHTML(E.uri) && !E.closed
                      ? (_ = (function (e, t, i, s, r) {
                          if (/^(?:script|textarea)$/i.test(i)) {
                            var n = e.indexOf("</" + i + ">", t),
                              e = e.substring(t + 1, n);
                            if (/[&<]/.test(e))
                              return (
                                /^script$/i.test(i)
                                  ? r.characters(e, 0, e.length)
                                  : ((e = e.replace(/&#?\w+;/g, s)),
                                    r.characters(e, 0, e.length)),
                                n
                              );
                          }
                          return t + 1;
                        })(i, _, E.tagName, a, r))
                      : _++;
                }
              } catch (e) {
                if (e instanceof so) throw e;
                n.error("element parse error: " + e), (_ = -1);
              }
              m < _ ? (m = _) : t(Math.max(y, m) + 1);
            }
          })(e, t, i, s, this.errorHandler),
          s.endDocument();
      },
    }),
    (lo.prototype = {
      setTagName: function (e) {
        if (!Xa.test(e)) throw new Error("invalid tagName:" + e);
        this.tagName = e;
      },
      addValue: function (e, t, i) {
        if (!Xa.test(e)) throw new Error("invalid attribute:" + e);
        (this.attributeNames[e] = this.length),
          (this[this.length++] = { qName: e, value: t, offset: i });
      },
      length: 0,
      getLocalName: function (e) {
        return this[e].localName;
      },
      getLocator: function (e) {
        return this[e].locator;
      },
      getQName: function (e) {
        return this[e].qName;
      },
      getURI: function (e) {
        return this[e].uri;
      },
      getValue: function (e) {
        return this[e].value;
      },
    });
  var Lr = { XMLReader: ro, ParseError: so },
    ho = Ar.DOMImplementation,
    uo = Kn.NAMESPACE,
    co = Lr.ParseError,
    po = Lr.XMLReader;
  function mo(e) {
    return e.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
  }
  function go(e) {
    this.options = e || { locator: {} };
  }
  function fo() {
    this.cdata = !1;
  }
  function yo(e, t) {
    (t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber);
  }
  function _o(e) {
    if (e)
      return (
        "\n@" +
        (e.systemId || "") +
        "#[line:" +
        e.lineNumber +
        ",col:" +
        e.columnNumber +
        "]"
      );
  }
  function vo(e, t, i) {
    return "string" == typeof e
      ? e.substr(t, i)
      : e.length >= t + i || t
      ? new java.lang.String(e, t, i) + ""
      : e;
  }
  function bo(e, t) {
    (e.currentElement || e.doc).appendChild(t);
  }
  (go.prototype.parseFromString = function (e, t) {
    var i = this.options,
      s = new po(),
      r = i.domBuilder || new fo(),
      n = i.errorHandler,
      a = i.locator,
      o = i.xmlns || {},
      t = /\/x?html?$/.test(t),
      l = t ? Ga.HTML_ENTITIES : Ga.XML_ENTITIES,
      n =
        (a && r.setDocumentLocator(a),
        (s.errorHandler = (function (s, e, r) {
          if (!s) {
            if (e instanceof fo) return e;
            s = e;
          }
          var n = {},
            a = s instanceof Function;
          function t(t) {
            var i = s[t];
            !i &&
              a &&
              (i =
                2 == s.length
                  ? function (e) {
                      s(t, e);
                    }
                  : s),
              (n[t] = i
                ? function (e) {
                    i("[xmldom " + t + "]\t" + e + _o(r));
                  }
                : function () {});
          }
          return (r = r || {}), t("warning"), t("error"), t("fatalError"), n;
        })(n, r, a)),
        (s.domBuilder = i.domBuilder || r),
        t && (o[""] = uo.HTML),
        (o.xml = o.xml || uo.XML),
        i.normalizeLineEndings || mo);
    return (
      e && "string" == typeof e
        ? s.parse(n(e), o, l)
        : s.errorHandler.error("invalid doc source"),
      r.doc
    );
  }),
    (fo.prototype = {
      startDocument: function () {
        (this.doc = new ho().createDocument(null, null, null)),
          this.locator && (this.doc.documentURI = this.locator.systemId);
      },
      startElement: function (e, t, i, s) {
        var r = this.doc,
          n = r.createElementNS(e, i || t),
          a = s.length;
        bo(this, n),
          (this.currentElement = n),
          this.locator && yo(this.locator, n);
        for (var o = 0; o < a; o++) {
          var e = s.getURI(o),
            l = s.getValue(o),
            i = s.getQName(o),
            d = r.createAttributeNS(e, i);
          this.locator && yo(s.getLocator(o), d),
            (d.value = d.nodeValue = l),
            n.setAttributeNode(d);
        }
      },
      endElement: function (e, t, i) {
        var s = this.currentElement;
        s.tagName, (this.currentElement = s.parentNode);
      },
      startPrefixMapping: function (e, t) {},
      endPrefixMapping: function (e) {},
      processingInstruction: function (e, t) {
        e = this.doc.createProcessingInstruction(e, t);
        this.locator && yo(this.locator, e), bo(this, e);
      },
      ignorableWhitespace: function (e, t, i) {},
      characters: function (e, t, i) {
        var s;
        (e = vo.apply(this, arguments)) &&
          ((s = this.cdata
            ? this.doc.createCDATASection(e)
            : this.doc.createTextNode(e)),
          this.currentElement
            ? this.currentElement.appendChild(s)
            : /^\s*$/.test(e) && this.doc.appendChild(s),
          this.locator) &&
          yo(this.locator, s);
      },
      skippedEntity: function (e) {},
      endDocument: function () {
        this.doc.normalize();
      },
      setDocumentLocator: function (e) {
        (this.locator = e) && (e.lineNumber = 0);
      },
      comment: function (e, t, i) {
        e = vo.apply(this, arguments);
        e = this.doc.createComment(e);
        this.locator && yo(this.locator, e), bo(this, e);
      },
      startCDATA: function () {
        this.cdata = !0;
      },
      endCDATA: function () {
        this.cdata = !1;
      },
      startDTD: function (e, t, i) {
        var s = this.doc.implementation;
        s &&
          s.createDocumentType &&
          ((s = s.createDocumentType(e, t, i)),
          this.locator && yo(this.locator, s),
          bo(this, s),
          (this.doc.doctype = s));
      },
      warning: function (e) {},
      error: function (e) {},
      fatalError: function (e) {
        throw new co(e, this.locator);
      },
    }),
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
      /\w+/g,
      function (e) {
        fo.prototype[e] = function () {
          return null;
        };
      }
    );
  var To = { __DOMHandler: fo, normalizeLineEndings: mo, DOMParser: go }
    .DOMParser;
  /*! @name mpd-parser @version 1.0.1 @license Apache-2.0 */
  const So = (e) => !!e && "object" == typeof e,
    x = (...e) =>
      e.reduce(
        (t, i) => (
          "object" == typeof i &&
            Object.keys(i).forEach((e) => {
              Array.isArray(t[e]) && Array.isArray(i[e])
                ? (t[e] = t[e].concat(i[e]))
                : So(t[e]) && So(i[e])
                ? (t[e] = x(t[e], i[e]))
                : (t[e] = i[e]);
            }),
          t
        ),
        {}
      ),
    wo = (t) => Object.keys(t).map((e) => t[e]),
    Eo = (e) => e.reduce((e, t) => e.concat(t), []),
    Co = (t) => {
      if (!t.length) return [];
      var i = [];
      for (let e = 0; e < t.length; e++) i.push(t[e]);
      return i;
    };
  var ko = {
    INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
    DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
    DASH_INVALID_XML: "DASH_INVALID_XML",
    NO_BASE_URL: "NO_BASE_URL",
    MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION",
    SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
    UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME",
  };
  const Io = ({
      baseUrl: s = "",
      source: r = "",
      range: n = "",
      indexRange: a = "",
    }) => {
      s = { uri: r, resolvedUri: On(s || "", r) };
      if (n || a) {
        r = (n || a).split("-");
        let e = window.BigInt ? window.BigInt(r[0]) : parseInt(r[0], 10),
          t = window.BigInt ? window.BigInt(r[1]) : parseInt(r[1], 10);
        e < Number.MAX_SAFE_INTEGER && "bigint" == typeof e && (e = Number(e)),
          t < Number.MAX_SAFE_INTEGER &&
            "bigint" == typeof t &&
            (t = Number(t));
        let i;
        "bigint" ==
          typeof (i =
            "bigint" == typeof t || "bigint" == typeof e
              ? window.BigInt(t) - window.BigInt(e) + window.BigInt(1)
              : t - e + 1) &&
          i < Number.MAX_SAFE_INTEGER &&
          (i = Number(i)),
          (s.byterange = { length: i, offset: e });
      }
      return s;
    },
    xo = (e) => (
      e && "number" != typeof e && (e = parseInt(e, 10)), isNaN(e) ? null : e
    ),
    Ao = {
      static(e) {
        var {
            duration: t,
            timescale: i = 1,
            sourceDuration: s,
            periodDuration: r,
          } = e,
          e = xo(e.endNumber),
          t = t / i;
        return "number" == typeof e
          ? { start: 0, end: e }
          : "number" == typeof r
          ? { start: 0, end: r / t }
          : { start: 0, end: s / t };
      },
      dynamic(e) {
        var {
            NOW: t,
            clientOffset: i,
            availabilityStartTime: s,
            timescale: r = 1,
            duration: n,
            periodStart: a = 0,
            minimumUpdatePeriod: o = 0,
            timeShiftBufferDepth: l = 1 / 0,
          } = e,
          e = xo(e.endNumber),
          t = (t + i) / 1e3,
          i = s + a,
          s = Math.ceil(((t + o - i) * r) / n),
          a = Math.floor(((t - i - l) * r) / n),
          o = Math.floor(((t - i) * r) / n);
        return {
          start: Math.max(0, a),
          end: "number" == typeof e ? e : Math.min(s, o),
        };
      },
    },
    Po = (e) => {
      var n,
        {
          type: t,
          duration: i,
          timescale: s = 1,
          periodDuration: r,
          sourceDuration: a,
        } = e,
        { start: o, end: l } = Ao[t](e),
        o = ((t, i) => {
          var s = [];
          for (let e = t; e < i; e++) s.push(e);
          return s;
        })(o, l).map(
          ((n = e),
          (e) => {
            var {
              duration: t,
              timescale: i = 1,
              periodStart: s,
              startNumber: r = 1,
            } = n;
            return { number: r + e, duration: t / i, timeline: s, time: e * t };
          })
        );
      return (
        "static" === t &&
          (o[(l = o.length - 1)].duration =
            ("number" == typeof r ? r : a) - (i / s) * l),
        o
      );
    },
    Oo = (e) => {
      var {
        baseUrl: t,
        initialization: i = {},
        sourceDuration: s,
        indexRange: r = "",
        periodStart: n,
        presentationTime: a,
        number: o = 0,
        duration: l,
      } = e;
      if (t)
        return (
          (i = Io({ baseUrl: t, source: i.sourceURL, range: i.range })),
          ((t = Io({ baseUrl: t, source: t, indexRange: r })).map = i),
          l
            ? (r = Po(e)).length &&
              ((t.duration = r[0].duration), (t.timeline = r[0].timeline))
            : s && ((t.duration = s), (t.timeline = n)),
          (t.presentationTime = a || n),
          (t.number = o),
          [t]
        );
      throw new Error(ko.NO_BASE_URL);
    },
    Do = (e, i, s) => {
      var r = e.sidx.map || null,
        n = e.sidx.duration,
        a = e.timeline || 0,
        t = e.sidx.byterange,
        t = t.offset + t.length,
        o = i.timescale,
        l = i.references.filter((e) => 1 !== e.referenceType),
        d = [],
        h = e.endList ? "static" : "dynamic",
        u = e.sidx.timeline;
      let c = u,
        p = e.mediaSequence || 0,
        m;
      m =
        "bigint" == typeof i.firstOffset
          ? window.BigInt(t) + i.firstOffset
          : t + i.firstOffset;
      for (let t = 0; t < l.length; t++) {
        var g = i.references[t],
          f = g.referencedSize,
          g = g.subsegmentDuration;
        let e;
        e =
          "bigint" == typeof m
            ? m + window.BigInt(f) - window.BigInt(1)
            : m + f - 1;
        var y = m + "-" + e,
          y = {
            baseUrl: s,
            timescale: o,
            timeline: a,
            periodStart: u,
            presentationTime: c,
            number: p,
            duration: g,
            sourceDuration: n,
            indexRange: y,
            type: h,
          },
          y = Oo(y)[0];
        r && (y.map = r),
          d.push(y),
          "bigint" == typeof m ? (m += window.BigInt(f)) : (m += f),
          (c += g / o),
          p++;
      }
      return (e.segments = d), e;
    },
    Lo = ["AUDIO", "SUBTITLES"],
    No = (e) => {
      return (
        (e = e),
        (i = ({ timeline: e }) => e),
        wo(
          e.reduce(
            (t, e) => (
              e.forEach((e) => {
                t[i(e)] = e;
              }),
              t
            ),
            {}
          )
        ).sort((e, t) => (e.timeline > t.timeline ? 1 : -1))
      );
      var i;
    },
    Mo = (e) => {
      let r = [];
      var n, a;
      return (
        (n = e),
        (e = Lo),
        (a = (e, t, i, s) => {
          r = r.concat(e.playlists || []);
        }),
        e.forEach(function (e) {
          for (var t in n.mediaGroups[e])
            for (var i in n.mediaGroups[e][t]) {
              var s = n.mediaGroups[e][t][i];
              a(s, e, t, i);
            }
        }),
        r
      );
    },
    Ro = ({ playlist: i, mediaSequence: e }) => {
      (i.mediaSequence = e),
        i.segments.forEach((e, t) => {
          e.number = i.mediaSequence + t;
        });
    },
    Uo = ({ oldManifest: e, newManifest: t }) => {
      var r,
        n,
        i = e.playlists.concat(Mo(e)),
        s = t.playlists.concat(Mo(t));
      return (
        (t.timelineStarts = No([e.timelineStarts, t.timelineStarts])),
        ({
          oldPlaylists: r,
          newPlaylists: e,
          timelineStarts: n,
        } = [
          {
            oldPlaylists: i,
            newPlaylists: s,
            timelineStarts: t.timelineStarts,
          },
        ][0]),
        e.forEach((t) => {
          t.discontinuitySequence = n.findIndex(function ({ timeline: e }) {
            return e === t.timeline;
          });
          var e = ((t, i) => {
            for (let e = 0; e < t.length; e++)
              if (t[e].attributes.NAME === i) return t[e];
            return null;
          })(r, t.attributes.NAME);
          if (e && !t.sidx) {
            const s = t.segments[0];
            var i = e.segments.findIndex(function (e) {
              return Math.abs(e.presentationTime - s.presentationTime) < 1 / 60;
            });
            -1 === i
              ? (Ro({
                  playlist: t,
                  mediaSequence: e.mediaSequence + e.segments.length,
                }),
                (t.segments[0].discontinuity = !0),
                t.discontinuityStarts.unshift(0),
                ((!e.segments.length && t.timeline > e.timeline) ||
                  (e.segments.length &&
                    t.timeline > e.segments[e.segments.length - 1].timeline)) &&
                  t.discontinuitySequence--)
              : (e.segments[i].discontinuity &&
                  !s.discontinuity &&
                  ((s.discontinuity = !0),
                  t.discontinuityStarts.unshift(0),
                  t.discontinuitySequence--),
                Ro({ playlist: t, mediaSequence: e.segments[i].number }));
          }
        }),
        t
      );
    },
    Bo = (e) =>
      e &&
      e.uri +
        "-" +
        ((e) => {
          let t;
          return (
            (t =
              "bigint" == typeof e.offset || "bigint" == typeof e.length
                ? window.BigInt(e.offset) +
                  window.BigInt(e.length) -
                  window.BigInt(1)
                : e.offset + e.length - 1),
            e.offset + "-" + t
          );
        })(e.byterange),
    Fo = (e) => {
      return wo(
        e.reduce((e, t) => {
          var i = t.attributes.id + (t.attributes.lang || "");
          return (
            e[i]
              ? (t.segments &&
                  (t.segments[0] && (t.segments[0].discontinuity = !0),
                  e[i].segments.push(...t.segments)),
                t.attributes.contentProtection &&
                  (e[i].attributes.contentProtection =
                    t.attributes.contentProtection))
              : ((e[i] = t), (e[i].attributes.timelineStarts = [])),
            e[i].attributes.timelineStarts.push({
              start: t.attributes.periodStart,
              timeline: t.attributes.periodStart,
            }),
            e
          );
        }, {})
      ).map((e) => {
        var t, s;
        return (
          (e.discontinuityStarts =
            ((t = e.segments || []),
            (s = "discontinuity"),
            t.reduce((e, t, i) => (t[s] && e.push(i), e), []))),
          e
        );
      });
    },
    jo = (e, t) => {
      var i = Bo(e.sidx),
        t = i && t[i] && t[i].sidx;
      return t && Do(e, t, e.sidx.resolvedUri), e;
    },
    Ho = (e, o = {}) =>
      e.reduce((e, t) => {
        var i,
          s,
          r,
          n,
          a = t.attributes.lang || "text";
        return (
          e[a] ||
            (e[a] = {
              language: a,
              default: !1,
              autoselect: !1,
              playlists: [],
              uri: "",
            }),
          e[a].playlists.push(
            jo(
              (({
                attributes: a,
                segments: t,
                mediaSequence: i,
                discontinuityStarts: s,
                discontinuitySequence: r,
              } = [t][0]),
              "undefined" == typeof t &&
                ((t = [
                  {
                    uri: a.baseUrl,
                    timeline: a.periodStart,
                    resolvedUri: a.baseUrl || "",
                    duration: a.sourceDuration,
                    number: 0,
                  },
                ]),
                (a.duration = a.sourceDuration)),
              (n = { NAME: a.id, BANDWIDTH: a.bandwidth, "PROGRAM-ID": 1 }),
              a.codecs && (n.CODECS = a.codecs),
              {
                attributes: n,
                uri: "",
                endList: "static" === a.type,
                timeline: a.periodStart,
                resolvedUri: a.baseUrl || "",
                targetDuration: a.duration,
                timelineStarts: a.timelineStarts,
                discontinuityStarts: s,
                discontinuitySequence: r,
                mediaSequence: i,
                segments: t,
              }),
              o
            )
          ),
          e
        );
      }, {}),
    qo = ({ attributes: e, segments: t, sidx: i, discontinuityStarts: s }) => {
      s = {
        attributes: {
          NAME: e.id,
          AUDIO: "audio",
          SUBTITLES: "subs",
          RESOLUTION: { width: e.width, height: e.height },
          CODECS: e.codecs,
          BANDWIDTH: e.bandwidth,
          "PROGRAM-ID": 1,
        },
        uri: "",
        endList: "static" === e.type,
        timeline: e.periodStart,
        resolvedUri: "",
        targetDuration: e.duration,
        discontinuityStarts: s,
        timelineStarts: e.timelineStarts,
        segments: t,
      };
      return (
        e.frameRate && (s.attributes["FRAME-RATE"] = e.frameRate),
        e.contentProtection && (s.contentProtection = e.contentProtection),
        i && (s.sidx = i),
        s
      );
    },
    Vo = ({ attributes: e }) =>
      "video/mp4" === e.mimeType ||
      "video/webm" === e.mimeType ||
      "video" === e.contentType,
    $o = ({ attributes: e }) =>
      "audio/mp4" === e.mimeType ||
      "audio/webm" === e.mimeType ||
      "audio" === e.contentType,
    Wo = ({ attributes: e }) =>
      "text/vtt" === e.mimeType || "text" === e.contentType,
    Go = (i) =>
      i
        ? Object.keys(i).reduce((e, t) => {
            t = i[t];
            return e.concat(t.playlists);
          }, [])
        : [],
    zo = ({
      dashPlaylists: e,
      locations: t,
      sidxMapping: i = {},
      previousManifest: s,
    }) => {
      var r, n, a, o, l, d, h, u;
      return e.length
        ? (({
            sourceDuration: a,
            type: l,
            suggestedPresentationDelay: d,
            minimumUpdatePeriod: o,
          } = e[0].attributes),
          (r = Fo(e.filter(Vo)).map(qo)),
          (h = Fo(e.filter($o))),
          (n = Fo(e.filter(Wo))),
          (e = e.map((e) => e.attributes.captionServices).filter(Boolean)),
          (a = {
            allowCache: !0,
            discontinuityStarts: [],
            segments: [],
            endList: !0,
            mediaGroups: {
              AUDIO: {},
              VIDEO: {},
              "CLOSED-CAPTIONS": {},
              SUBTITLES: {},
            },
            uri: "",
            duration: a,
            playlists: ((e, t = {}) => {
              if (Object.keys(t).length) for (const i in e) e[i] = jo(e[i], t);
              return e;
            })(r, i),
          }),
          0 <= o && (a.minimumUpdatePeriod = 1e3 * o),
          t && (a.locations = t),
          "dynamic" === l && (a.suggestedPresentationDelay = d),
          (o = 0 === a.playlists.length),
          (t = h.length
            ? ((e, n = {}, a) => {
                let o;
                e = e.reduce((e, t) => {
                  var i = (t.attributes.role && t.attributes.role.value) || "",
                    s = t.attributes.lang || "";
                  let r = t.attributes.label || "main";
                  e[
                    (r =
                      s && !t.attributes.label
                        ? t.attributes.lang + (i ? ` (${i})` : "")
                        : r)
                  ] ||
                    (e[r] = {
                      language: s,
                      autoselect: !0,
                      default: "main" === i,
                      playlists: [],
                      uri: "",
                    });
                  s = jo(
                    ((
                      {
                        attributes: e,
                        segments: t,
                        sidx: i,
                        mediaSequence: s,
                        discontinuitySequence: r,
                        discontinuityStarts: n,
                      },
                      a
                    ) => {
                      r = {
                        attributes: {
                          NAME: e.id,
                          BANDWIDTH: e.bandwidth,
                          CODECS: e.codecs,
                          "PROGRAM-ID": 1,
                        },
                        uri: "",
                        endList: "static" === e.type,
                        timeline: e.periodStart,
                        resolvedUri: "",
                        targetDuration: e.duration,
                        discontinuitySequence: r,
                        discontinuityStarts: n,
                        timelineStarts: e.timelineStarts,
                        mediaSequence: s,
                        segments: t,
                      };
                      return (
                        e.contentProtection &&
                          (r.contentProtection = e.contentProtection),
                        i && (r.sidx = i),
                        a &&
                          ((r.attributes.AUDIO = "audio"),
                          (r.attributes.SUBTITLES = "subs")),
                        r
                      );
                    })(t, a),
                    n
                  );
                  return (
                    e[r].playlists.push(s),
                    "undefined" == typeof o &&
                      "main" === i &&
                      ((o = t).default = !0),
                    e
                  );
                }, {});
                return o || (e[Object.keys(e)[0]].default = !0), e;
              })(h, i, o)
            : null),
          (l = n.length ? Ho(n, i) : null),
          (h = (d = r.concat(Go(t), Go(l))).map(({ timelineStarts: e }) => e)),
          (a.timelineStarts = No(h)),
          (u = a.timelineStarts),
          d.forEach((t) => {
            (t.mediaSequence = 0),
              (t.discontinuitySequence = u.findIndex(function ({
                timeline: e,
              }) {
                return e === t.timeline;
              })),
              t.segments &&
                t.segments.forEach((e, t) => {
                  e.number = t;
                });
          }),
          t && (a.mediaGroups.AUDIO.audio = t),
          l && (a.mediaGroups.SUBTITLES.subs = l),
          e.length &&
            (a.mediaGroups["CLOSED-CAPTIONS"].cc = e.reduce(
              (s, e) => (
                e &&
                  e.forEach((e) => {
                    var { channel: t, language: i } = e;
                    (s[i] = {
                      autoselect: !1,
                      default: !1,
                      instreamId: t,
                      language: i,
                    }),
                      e.hasOwnProperty("aspectRatio") &&
                        (s[i].aspectRatio = e.aspectRatio),
                      e.hasOwnProperty("easyReader") &&
                        (s[i].easyReader = e.easyReader),
                      e.hasOwnProperty("3D") && (s[i]["3D"] = e["3D"]);
                  }),
                s
              ),
              {}
            )),
          s ? Uo({ oldManifest: s, newManifest: a }) : a)
        : {};
    },
    Xo = (s, r) => {
      var {
          type: n,
          minimumUpdatePeriod: a = 0,
          media: o = "",
          sourceDuration: l,
          timescale: d = 1,
          startNumber: h = 1,
          periodStart: u,
        } = s,
        c = [];
      let p = -1;
      for (let i = 0; i < r.length; i++) {
        var m = r[i],
          g = m.d,
          f = m.r || 0,
          m = m.t || 0;
        p < 0 && (p = m), m && m > p && (p = m);
        let e;
        e =
          f < 0
            ? (m = i + 1) === r.length
              ? "dynamic" === n && 0 < a && 0 < o.indexOf("$Number$")
                ? ((e, t, i) => {
                    var {
                      NOW: e,
                      clientOffset: s,
                      availabilityStartTime: r,
                      timescale: n = 1,
                      periodStart: a = 0,
                      minimumUpdatePeriod: o = 0,
                    } = e;
                    return Math.ceil(
                      (((e + s) / 1e3 + o - (r + a)) * n - t) / i
                    );
                  })(s, p, g)
                : (l * d - p) / g
              : (r[m].t - p) / g
            : f + 1;
        var y = h + c.length + e;
        let t = h + c.length;
        for (; t < y; )
          c.push({ number: t, duration: g / d, time: p, timeline: u }),
            (p += g),
            t++;
      }
      return c;
    },
    Ko = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
    Yo = (e, t) => {
      return e.replace(
        Ko,
        ((r = t),
        (e, t, i, s) => {
          return "$$" === e
            ? "$"
            : "undefined" == typeof r[t]
            ? e
            : ((e = "" + r[t]),
              "RepresentationID" === t ||
              (s = i ? parseInt(s, 10) : 1) <= e.length
                ? e
                : new Array(s - e.length + 1).join("0") + e);
        })
      );
      var r;
    },
    Qo = (r, e) => {
      const n = { RepresentationID: r.id, Bandwidth: r.bandwidth || 0 };
      var { initialization: t = { sourceURL: "", range: "" } } = r;
      const a = Io({
        baseUrl: r.baseUrl,
        source: Yo(t.sourceURL, n),
        range: t.range,
      });
      return (
        (t = e),
        ((e = r).duration || t
          ? e.duration
            ? Po(e)
            : Xo(e, t)
          : [
              {
                number: e.startNumber || 1,
                duration: e.sourceDuration,
                time: 0,
                timeline: e.periodStart,
              },
            ]
        ).map((e) => {
          (n.Number = e.number), (n.Time = e.time);
          var t = Yo(r.media || "", n),
            i = r.timescale || 1,
            s = r.presentationTimeOffset || 0,
            s = r.periodStart + (e.time - s) / i;
          return {
            uri: t,
            timeline: e.timeline,
            duration: e.duration,
            resolvedUri: On(r.baseUrl || "", t),
            map: a,
            number: e.number,
            presentationTime: s,
          };
        })
      );
    },
    Jo = (r, e) => {
      const { duration: t, segmentUrls: i = [], periodStart: n } = r;
      if ((!t && !e) || (t && e)) throw new Error(ko.SEGMENT_TIME_UNSPECIFIED);
      const a = i.map((e) => {
        var { baseUrl: t, initialization: i = {} } = (t = r),
          i = Io({ baseUrl: t, source: i.sourceURL, range: i.range });
        return (
          ((t = Io({ baseUrl: t, source: e.media, range: e.mediaRange })).map =
            i),
          t
        );
      });
      let s;
      return (
        t && (s = Po(r)),
        (s = e ? Xo(r, e) : s)
          .map((e, t) => {
            var i, s;
            if (a[t])
              return (
                (t = a[t]),
                (i = r.timescale || 1),
                (s = r.presentationTimeOffset || 0),
                (t.timeline = e.timeline),
                (t.duration = e.duration),
                (t.number = e.number),
                (t.presentationTime = n + (e.time - s) / i),
                t
              );
          })
          .filter((e) => e)
      );
    },
    Zo = ({ attributes: e, segmentInfo: t }) => {
      let i, s;
      t.template
        ? ((s = Qo), (i = x(e, t.template)))
        : t.base
        ? ((s = Oo), (i = x(e, t.base)))
        : t.list && ((s = Jo), (i = x(e, t.list)));
      var r,
        n,
        a,
        e = { attributes: e };
      return (
        s &&
          ((r = s(i, t.segmentTimeline)),
          i.duration
            ? (({ duration: n, timescale: a = 1 } = i), (i.duration = n / a))
            : r.length
            ? (i.duration = r.reduce(
                (e, t) => Math.max(e, Math.ceil(t.duration)),
                0
              ))
            : (i.duration = 0),
          (e.attributes = i),
          (e.segments = r),
          t.base) &&
          i.indexRange &&
          ((e.sidx = r[0]), (e.segments = [])),
        e
      );
    },
    el = (e) => e.map(Zo),
    A = (e, t) => Co(e.childNodes).filter(({ tagName: e }) => e === t),
    tl = (e) => e.textContent.trim(),
    il = (e) => {
      var t,
        i,
        s,
        r,
        n,
        e =
          /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(
            e
          );
      return e
        ? (([e, t, i, s, r, n] = e.slice(1)),
          31536e3 * parseFloat(e || 0) +
            2592e3 * parseFloat(t || 0) +
            86400 * parseFloat(i || 0) +
            3600 * parseFloat(s || 0) +
            60 * parseFloat(r || 0) +
            parseFloat(n || 0))
        : 0;
    },
    sl = {
      mediaPresentationDuration(e) {
        return il(e);
      },
      availabilityStartTime(e) {
        return (
          /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test((e = e)) && (e += "Z"),
          Date.parse(e) / 1e3
        );
      },
      minimumUpdatePeriod(e) {
        return il(e);
      },
      suggestedPresentationDelay(e) {
        return il(e);
      },
      type(e) {
        return e;
      },
      timeShiftBufferDepth(e) {
        return il(e);
      },
      start(e) {
        return il(e);
      },
      width(e) {
        return parseInt(e, 10);
      },
      height(e) {
        return parseInt(e, 10);
      },
      bandwidth(e) {
        return parseInt(e, 10);
      },
      frameRate(e) {
        return parseFloat(e.split("/").reduce((e, t) => e / t));
      },
      startNumber(e) {
        return parseInt(e, 10);
      },
      timescale(e) {
        return parseInt(e, 10);
      },
      presentationTimeOffset(e) {
        return parseInt(e, 10);
      },
      duration(e) {
        var t = parseInt(e, 10);
        return isNaN(t) ? il(e) : t;
      },
      d(e) {
        return parseInt(e, 10);
      },
      t(e) {
        return parseInt(e, 10);
      },
      r(e) {
        return parseInt(e, 10);
      },
      DEFAULT(e) {
        return e;
      },
    },
    P = (e) =>
      e && e.attributes
        ? Co(e.attributes).reduce((e, t) => {
            var i = sl[t.name] || sl.DEFAULT;
            return (e[t.name] = i(t.value)), e;
          }, {})
        : {},
    rl = {
      "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
      "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
      "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":
        "com.microsoft.playready",
      "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
    },
    nl = (e, i) =>
      i.length
        ? Eo(
            e.map(function (t) {
              return i.map(function (e) {
                return On(t, tl(e));
              });
            })
          )
        : e,
    al = (e) => {
      var t = A(e, "SegmentTemplate")[0],
        i = A(e, "SegmentList")[0],
        s = i && A(i, "SegmentURL").map((e) => x({ tag: "SegmentURL" }, P(e))),
        e = A(e, "SegmentBase")[0],
        r = i || t,
        r = r && A(r, "SegmentTimeline")[0],
        n = i || e || t,
        n = n && A(n, "Initialization")[0],
        t = t && P(t);
      t && n
        ? (t.initialization = n && P(n))
        : t &&
          t.initialization &&
          (t.initialization = { sourceURL: t.initialization });
      const a = {
        template: t,
        segmentTimeline: r && A(r, "S").map((e) => P(e)),
        list: i && x(P(i), { segmentUrls: s, initialization: P(n) }),
        base: e && x(P(e), { initialization: P(n) }),
      };
      return (
        Object.keys(a).forEach((e) => {
          a[e] || delete a[e];
        }),
        a
      );
    },
    ol = (l, d, h) => (e) => {
      var t = P(e),
        i = nl(d, A(e, "BaseURL")),
        s = A(e, "Role")[0],
        s = { role: P(s) };
      let r = x(l, t, s);
      var n,
        a,
        o,
        t = A(e, "Accessibility")[0],
        t =
          "urn:scte:dash:cc:cea-608:2015" === (s = P(t)).schemeIdUri
            ? ("string" != typeof s.value ? [] : s.value.split(";")).map(
                (e) => {
                  let t, i;
                  return (
                    (i = e),
                    /^CC\d=/.test(e)
                      ? ([t, i] = e.split("="))
                      : /^CC\d$/.test(e) && (t = e),
                    { channel: t, language: i }
                  );
                }
              )
            : "urn:scte:dash:cc:cea-708:2015" === s.schemeIdUri
            ? ("string" != typeof s.value ? [] : s.value.split(";")).map(
                (e) => {
                  const i = {
                    channel: void 0,
                    language: void 0,
                    aspectRatio: 1,
                    easyReader: 0,
                    "3D": 0,
                  };
                  var t, s;
                  return (
                    /=/.test(e)
                      ? (([t, s = ""] = e.split("=")),
                        (i.channel = t),
                        (i.language = e),
                        s.split(",").forEach((e) => {
                          var [e, t] = e.split(":");
                          "lang" === e
                            ? (i.language = t)
                            : "er" === e
                            ? (i.easyReader = Number(t))
                            : "war" === e
                            ? (i.aspectRatio = Number(t))
                            : "3D" === e && (i["3D"] = Number(t));
                        }))
                      : (i.language = e),
                    i.channel && (i.channel = "SERVICE" + i.channel),
                    i
                  );
                }
              )
            : void 0,
        s = (t && (r = x(r, { captionServices: t })), A(e, "Label")[0]),
        s =
          (s &&
            s.childNodes.length &&
            ((t = s.childNodes[0].nodeValue.trim()), (r = x(r, { label: t }))),
          A(e, "ContentProtection").reduce((e, t) => {
            var i = P(t),
              s =
                (i.schemeIdUri && (i.schemeIdUri = i.schemeIdUri.toLowerCase()),
                rl[i.schemeIdUri]);
            return (
              s &&
                ((e[s] = { attributes: i }), (i = A(t, "cenc:pssh")[0])) &&
                ((t = tl(i)), (e[s].pssh = t && Wn(t))),
              e
            );
          }, {})),
        t =
          (Object.keys(s).length && (r = x(r, { contentProtection: s })),
          al(e)),
        s = A(e, "Representation"),
        e = x(h, t);
      return Eo(
        s.map(
          ((n = r),
          (a = i),
          (o = e),
          (e) => {
            var t = A(e, "BaseURL"),
              t = nl(a, t);
            const i = x(n, P(e)),
              s = al(e);
            return t.map((e) => ({
              segmentInfo: x(o, s),
              attributes: x(i, { baseUrl: e }),
            }));
          })
        )
      );
    },
    ll = (e, t = {}) => {
      var { manifestUri: t = "", NOW: i = Date.now(), clientOffset: s = 0 } = t,
        r = A(e, "Period");
      if (!r.length) throw new Error(ko.INVALID_NUMBER_OF_PERIOD);
      var n = A(e, "Location");
      const a = P(e);
      var o,
        l,
        t = nl([t], A(e, "BaseURL"));
      (a.type = a.type || "static"),
        (a.sourceDuration = a.mediaPresentationDuration || 0),
        (a.NOW = i),
        (a.clientOffset = s),
        n.length && (a.locations = n.map(tl));
      const d = [];
      return (
        r.forEach((e, t) => {
          var i,
            s,
            r = P(e),
            t = d[t - 1];
          (r.start =
            (({
              attributes: t,
              priorPeriodAttributes: i,
              mpdType: s,
            } = [
              {
                attributes: r,
                priorPeriodAttributes: t ? t.attributes : null,
                mpdType: a.type,
              },
            ][0]),
            "number" == typeof t.start
              ? t.start
              : i && "number" == typeof i.start && "number" == typeof i.duration
              ? i.start + i.duration
              : i || "static" !== s
              ? null
              : 0)),
            d.push({ node: e, attributes: r });
        }),
        {
          locations: a.locations,
          representationInfo: Eo(
            d.map(
              ((o = a),
              (l = t),
              (e, t) => {
                var i = nl(l, A(e.node, "BaseURL")),
                  s = x(o, { periodStart: e.attributes.start }),
                  r =
                    ("number" == typeof e.attributes.duration &&
                      (s.periodDuration = e.attributes.duration),
                    A(e.node, "AdaptationSet")),
                  e = al(e.node);
                return Eo(r.map(ol(s, i, e)));
              })
            )
          ),
        }
      );
    },
    dl = (e) => {
      if ("" === e) throw new Error(ko.DASH_EMPTY_MANIFEST);
      var t,
        i = new To();
      let s;
      try {
        (t = i.parseFromString(e, "application/xml")),
          (s =
            t && "MPD" === t.documentElement.tagName
              ? t.documentElement
              : null);
      } catch (e) {}
      if (!s || (s && 0 < s.getElementsByTagName("parsererror").length))
        throw new Error(ko.DASH_INVALID_XML);
      return s;
    },
    hl = (e) => {
      e = dl(e);
      if (!(e = A(e, "UTCTiming")[0])) return null;
      var t = P(e);
      switch (t.schemeIdUri) {
        case "urn:mpeg:dash:utc:http-head:2014":
        case "urn:mpeg:dash:utc:http-head:2012":
          t.method = "HEAD";
          break;
        case "urn:mpeg:dash:utc:http-xsdate:2014":
        case "urn:mpeg:dash:utc:http-iso:2014":
        case "urn:mpeg:dash:utc:http-xsdate:2012":
        case "urn:mpeg:dash:utc:http-iso:2012":
          t.method = "GET";
          break;
        case "urn:mpeg:dash:utc:direct:2014":
        case "urn:mpeg:dash:utc:direct:2012":
          (t.method = "DIRECT"), (t.value = Date.parse(t.value));
          break;
        default:
          throw new Error(ko.UNSUPPORTED_UTC_TIMING_SCHEME);
      }
      return t;
    };
  function ul(e, t) {
    var i, s, r;
    return (
      void 0 === t && (t = 0),
      (e = S(e)).length - t < 10 || !E(e, Tl, { offset: t })
        ? t
        : ((t +=
            (void 0 === (s = t) && (s = 0),
            (r = (i = S((i = e)))[s + 5]),
            (i =
              (i[s + 6] << 21) | (i[s + 7] << 14) | (i[s + 8] << 7) | i[s + 9]),
            (16 & r) >> 4 ? 20 + i : 10 + i)),
          ul(e, t))
    );
  }
  function cl(e) {
    return "string" == typeof e ? Pn(e) : e;
  }
  function pl(e, t, i) {
    void 0 === i && (i = !1),
      (s = t),
      (t = Array.isArray(s) ? s.map(cl) : [cl(s)]),
      (e = S(e));
    var s,
      r = [];
    if (t.length)
      for (var n = 0; n < e.length; ) {
        var a =
            ((e[n] << 24) | (e[n + 1] << 16) | (e[n + 2] << 8) | e[n + 3]) >>>
            0,
          o = e.subarray(n + 4, n + 8);
        if (0 == a) break;
        a = n + a;
        if (a > e.length) {
          if (i) break;
          a = e.length;
        }
        var l = e.subarray(n + 8, a);
        E(o, t[0]) &&
          (1 === t.length ? r.push(l) : r.push.apply(r, pl(l, t.slice(1), i))),
          (n = a);
      }
    return r;
  }
  function ml(e, t, i) {
    var s;
    return i >= t.length
      ? t.length
      : ((s = Cl(t, i, !1)),
        E(e.bytes, s.bytes)
          ? i
          : ml(
              e,
              t,
              i + (e = Cl(t, i + s.length)).length + e.value + s.length
            ));
  }
  function gl(e, t) {
    (i = t),
      (t = Array.isArray(i)
        ? i.map(function (e) {
            return kl(e);
          })
        : [kl(i)]),
      (e = S(e));
    var i,
      s = [];
    if (t.length)
      for (var r = 0; r < e.length; ) {
        var n = Cl(e, r, !1),
          a = Cl(e, r + n.length),
          o = r + n.length + a.length,
          l =
            (127 === a.value &&
              ((a.value = ml(n, e, o)), a.value !== e.length) &&
              (a.value -= o),
            o + a.value > e.length ? e.length : o + a.value),
          o = e.subarray(o, l);
        E(t[0], n.bytes) &&
          (1 === t.length ? s.push(o) : (s = s.concat(gl(o, t.slice(1))))),
          (r += n.length + a.length + o.length);
      }
    return s;
  }
  function fl(e, t, i, s) {
    void 0 === s && (s = 1 / 0), (e = S(e)), (i = [].concat(i));
    for (var r, n = 0, a = 0; n < e.length && (a < s || r); ) {
      var o = void 0;
      if (
        (E(e.subarray(n), Il) ? (o = 4) : E(e.subarray(n), xl) && (o = 3), o)
      ) {
        if ((a++, r)) return Pl(e.subarray(r, n));
        var l = void 0;
        "h264" === t
          ? (l = 31 & e[n + o])
          : "h265" === t && (l = (e[n + o] >> 1) & 63),
          -1 !== i.indexOf(l) && (r = n + o),
          (n += o + ("h264" === t ? 1 : 2));
      } else n++;
    }
    return e.subarray(0, 0);
  }
  function yl(e) {
    e = S(e);
    for (var t = 0; t < Dl.length; t++) {
      var i = Dl[t];
      if (Ll[i](e)) return i;
    }
    return "";
  }
  var _l = Math.pow(2, 32),
    vl = function (e) {
      var t,
        e = new DataView(e.buffer, e.byteOffset, e.byteLength);
      return e.getBigUint64
        ? (t = e.getBigUint64(0)) < Number.MAX_SAFE_INTEGER
          ? Number(t)
          : t
        : e.getUint32(0) * _l + e.getUint32(4);
    },
    bl = function (e) {
      var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
        i = {
          version: e[0],
          flags: new Uint8Array(e.subarray(1, 4)),
          references: [],
          referenceId: t.getUint32(4),
          timescale: t.getUint32(8),
        },
        s = 12,
        r =
          (0 === i.version
            ? ((i.earliestPresentationTime = t.getUint32(s)),
              (i.firstOffset = t.getUint32(s + 4)),
              (s += 8))
            : ((i.earliestPresentationTime = vl(e.subarray(s))),
              (i.firstOffset = vl(e.subarray(s + 8))),
              (s += 16)),
          t.getUint16((s += 2)));
      for (s += 2; 0 < r; s += 12, r--)
        i.references.push({
          referenceType: (128 & e[s]) >>> 7,
          referencedSize: 2147483647 & t.getUint32(s),
          subsegmentDuration: t.getUint32(s + 4),
          startsWithSap: !!(128 & e[s + 8]),
          sapType: (112 & e[s + 8]) >>> 4,
          sapDeltaTime: 268435455 & t.getUint32(s + 8),
        });
      return i;
    },
    Tl = S([73, 68, 51]),
    Sl = {
      EBML: S([26, 69, 223, 163]),
      DocType: S([66, 130]),
      Segment: S([24, 83, 128, 103]),
      SegmentInfo: S([21, 73, 169, 102]),
      Tracks: S([22, 84, 174, 107]),
      Track: S([174]),
      TrackNumber: S([215]),
      DefaultDuration: S([35, 227, 131]),
      TrackEntry: S([174]),
      TrackType: S([131]),
      FlagDefault: S([136]),
      CodecID: S([134]),
      CodecPrivate: S([99, 162]),
      VideoTrack: S([224]),
      AudioTrack: S([225]),
      Cluster: S([31, 67, 182, 117]),
      Timestamp: S([231]),
      TimestampScale: S([42, 215, 177]),
      BlockGroup: S([160]),
      BlockDuration: S([155]),
      Block: S([161]),
      SimpleBlock: S([163]),
    },
    wl = [128, 64, 32, 16, 8, 4, 2, 1],
    El = function (e) {
      for (var t = 1, i = 0; i < wl.length && !(e & wl[i]); i++) t++;
      return t;
    },
    Cl = function (e, t, i, s) {
      void 0 === i && (i = !0), void 0 === s && (s = !1);
      var r = El(e[t]),
        n = e.subarray(t, t + r);
      return (
        i && ((n = Array.prototype.slice.call(e, t, t + r))[0] ^= wl[r - 1]),
        { length: r, value: Vn(n, { signed: s }), bytes: n }
      );
    },
    kl = function e(t) {
      return "string" == typeof t
        ? t.match(/.{1,2}/g).map(e)
        : "number" == typeof t
        ? An(t)
        : t;
    },
    Il = S([0, 0, 0, 1]),
    xl = S([0, 0, 1]),
    Al = S([0, 0, 3]),
    Pl = function (e) {
      for (var t = [], i = 1; i < e.length - 2; )
        E(e.subarray(i, i + 3), Al) && (t.push(i + 2), i++), i++;
      if (0 === t.length) return e;
      for (
        var s = e.length - t.length, r = new Uint8Array(s), n = 0, i = 0;
        i < s;
        n++, i++
      )
        n === t[0] && (n++, t.shift()), (r[i] = e[n]);
      return r;
    },
    O = {
      webm: S([119, 101, 98, 109]),
      matroska: S([109, 97, 116, 114, 111, 115, 107, 97]),
      flac: S([102, 76, 97, 67]),
      ogg: S([79, 103, 103, 83]),
      ac3: S([11, 119]),
      riff: S([82, 73, 70, 70]),
      avi: S([65, 86, 73]),
      wav: S([87, 65, 86, 69]),
      "3gp": S([102, 116, 121, 112, 51, 103]),
      mp4: S([102, 116, 121, 112]),
      fmp4: S([115, 116, 121, 112]),
      mov: S([102, 116, 121, 112, 113, 116]),
      moov: S([109, 111, 111, 118]),
      moof: S([109, 111, 111, 102]),
    },
    Ol = {
      aac: function (e) {
        var t = ul(e);
        return E(e, [255, 16], { offset: t, mask: [255, 22] });
      },
      mp3: function (e) {
        var t = ul(e);
        return E(e, [255, 2], { offset: t, mask: [255, 6] });
      },
      webm: function (e) {
        e = gl(e, [Sl.EBML, Sl.DocType])[0];
        return E(e, O.webm);
      },
      mkv: function (e) {
        e = gl(e, [Sl.EBML, Sl.DocType])[0];
        return E(e, O.matroska);
      },
      mp4: function (e) {
        return (
          !Ol["3gp"](e) &&
          !Ol.mov(e) &&
          (!!(
            E(e, O.mp4, { offset: 4 }) ||
            E(e, O.fmp4, { offset: 4 }) ||
            E(e, O.moof, { offset: 4 }) ||
            E(e, O.moov, { offset: 4 })
          ) ||
            void 0)
        );
      },
      mov: function (e) {
        return E(e, O.mov, { offset: 4 });
      },
      "3gp": function (e) {
        return E(e, O["3gp"], { offset: 4 });
      },
      ac3: function (e) {
        var t = ul(e);
        return E(e, O.ac3, { offset: t });
      },
      ts: function (e) {
        if (e.length < 189 && 1 <= e.length) return 71 === e[0];
        for (var t = 0; t + 188 < e.length && t < 188; ) {
          if (71 === e[t] && 71 === e[t + 188]) return !0;
          t += 1;
        }
        return !1;
      },
      flac: function (e) {
        var t = ul(e);
        return E(e, O.flac, { offset: t });
      },
      ogg: function (e) {
        return E(e, O.ogg);
      },
      avi: function (e) {
        return E(e, O.riff) && E(e, O.avi, { offset: 8 });
      },
      wav: function (e) {
        return E(e, O.riff) && E(e, O.wav, { offset: 8 });
      },
      h264: function (e) {
        return fl(e, "h264", 7, 3).length;
      },
      h265: function (e) {
        return fl(e, "h265", [32, 33], 3).length;
      },
    },
    Dl = Object.keys(Ol)
      .filter(function (e) {
        return "ts" !== e && "h264" !== e && "h265" !== e;
      })
      .concat(["ts", "h264", "h265"]),
    Ll =
      (Dl.forEach(function (e) {
        var t = Ol[e];
        Ol[e] = function (e) {
          return t(S(e));
        };
      }),
      Ol),
    Nl = 9e4;
  /*! @name @videojs/http-streaming @version 3.0.0 @license Apache-2.0 */
  const Ml = function (e, t) {
      if (/^[a-z]+:/i.test(t)) return t;
      /^data:/.test(e) && (e = (window.location && window.location.href) || "");
      var i = "function" == typeof window.URL,
        s = /^\/\//.test(e),
        r = !window.location && !/\/\//i.test(e);
      return (
        i
          ? (e = new window.URL(e, window.location || gn))
          : /\/\//i.test(e) ||
            (e = mn.buildAbsoluteURL(
              (window.location && window.location.href) || "",
              e
            )),
        i
          ? ((i = new URL(t, e)),
            r
              ? i.href.slice(gn.length)
              : s
              ? i.href.slice(i.protocol.length)
              : i.href)
          : mn.buildAbsoluteURL(e, t)
      );
    },
    Rl = (e, t) =>
      t && t.responseURL && e !== t.responseURL ? t.responseURL : e,
    Ul = (e) =>
      T.log.debug ? T.log.debug.bind(T, "VHS:", e + " >") : function () {};
  function D(...e) {
    var t = T.obj || T;
    return (t.merge || t.mergeOptions).apply(t, e);
  }
  function Bl(...e) {
    var t = T.time || T;
    return (t.createTimeRanges || t.createTimeRanges).apply(t, e);
  }
  function Fl(e, i) {
    return zl(e, function (e, t) {
      return e - Gl <= i && t + Gl >= i;
    });
  }
  function jl(e, t) {
    return zl(e, function (e) {
      return e - Wl >= t;
    });
  }
  function Hl(e) {
    if (e && e.length && e.end) return e.end(e.length - 1);
  }
  function ql(t, i) {
    let s = 0;
    if (t && t.length)
      for (let e = 0; e < t.length; e++) {
        var r = t.start(e),
          n = t.end(e);
        n < i || (s += r < i && i <= n ? n - i : n - r);
      }
    return s;
  }
  function Vl({
    defaultDuration: t,
    durationList: i,
    startIndex: s,
    endIndex: r,
  }) {
    let n = 0;
    if ((r < s && ([s, r] = [r, s]), s < 0)) {
      for (let e = s; e < Math.min(0, r); e++) n += t;
      s = 0;
    }
    for (let e = s; e < r; e++) n += i[e].duration;
    return n;
  }
  function $l(e, t, i, s) {
    if (!e || !e.segments) return null;
    if (e.endList) return rd(e);
    if (null === t) return null;
    t = t || 0;
    let r = sd(e, e.mediaSequence + e.segments.length, t);
    return (
      i && ((s = "number" == typeof s ? s : ed(null, e)), (r -= s)),
      Math.max(0, r)
    );
  }
  const Wl = 1 / 30,
    Gl = 3 * Wl,
    zl = function (e, t) {
      var i = [];
      let s;
      if (e && e.length)
        for (s = 0; s < e.length; s++)
          t(e.start(s), e.end(s)) && i.push([e.start(s), e.end(s)]);
      return Bl(i);
    },
    Xl = (t) => {
      var i = [];
      if (!t || !t.length) return "";
      for (let e = 0; e < t.length; e++) i.push(t.start(e) + " => " + t.end(e));
      return i.join(", ");
    },
    Kl = (t) => {
      var i = [];
      for (let e = 0; e < t.length; e++)
        i.push({ start: t.start(e), end: t.end(e) });
      return i;
    },
    Yl = (t, e) => {
      if (!e.preload) return e.duration;
      let i = 0;
      return (
        (e.parts || []).forEach(function (e) {
          i += e.duration;
        }),
        (e.preloadHints || []).forEach(function (e) {
          "PART" === e.type && (i += t.partTargetDuration);
        }),
        i
      );
    },
    Ql = (e) =>
      (e.segments || []).reduce(
        (i, s, r) => (
          s.parts
            ? s.parts.forEach(function (e, t) {
                i.push({
                  duration: e.duration,
                  segmentIndex: r,
                  partIndex: t,
                  part: e,
                  segment: s,
                });
              })
            : i.push({
                duration: s.duration,
                segmentIndex: r,
                partIndex: null,
                segment: s,
                part: null,
              }),
          i
        ),
        []
      ),
    Jl = (e) => {
      e = e.segments && e.segments.length && e.segments[e.segments.length - 1];
      return (e && e.parts) || [];
    },
    Zl = ({ preloadSegment: e }) => {
      var t;
      if (e)
        return (
          ({ parts: e, preloadHints: t } = e),
          (t || []).reduce((e, t) => e + ("PART" === t.type ? 1 : 0), 0) +
            (e && e.length ? e.length : 0)
        );
    },
    ed = (e, t) => {
      return t.endList
        ? 0
        : e && e.suggestedPresentationDelay
        ? e.suggestedPresentationDelay
        : (e = 0 < Jl(t).length) &&
          t.serverControl &&
          t.serverControl.partHoldBack
        ? t.serverControl.partHoldBack
        : e && t.partTargetDuration
        ? 3 * t.partTargetDuration
        : t.serverControl && t.serverControl.holdBack
        ? t.serverControl.holdBack
        : t.targetDuration
        ? 3 * t.targetDuration
        : 0;
    },
    td = function (e, t) {
      let i = 0,
        s = t - e.mediaSequence,
        r = e.segments[s];
      if (r) {
        if ("undefined" != typeof r.start)
          return { result: r.start, precise: !0 };
        if ("undefined" != typeof r.end)
          return { result: r.end - r.duration, precise: !0 };
      }
      for (; s--; ) {
        if ("undefined" != typeof (r = e.segments[s]).end)
          return { result: i + r.end, precise: !0 };
        if (((i += Yl(e, r)), "undefined" != typeof r.start))
          return { result: i + r.start, precise: !0 };
      }
      return { result: i, precise: !1 };
    },
    id = function (e, t) {
      let i = 0;
      var s;
      let r = t - e.mediaSequence;
      for (; r < e.segments.length; r++) {
        if ("undefined" != typeof (s = e.segments[r]).start)
          return { result: s.start - i, precise: !0 };
        if (((i += Yl(e, s)), "undefined" != typeof s.end))
          return { result: s.end - i, precise: !0 };
      }
      return { result: -1, precise: !1 };
    },
    sd = function (e, t, i) {
      var s;
      return (t =
        "undefined" == typeof t ? e.mediaSequence + e.segments.length : t) <
        e.mediaSequence
        ? 0
        : (s = td(e, t)).precise
        ? s.result
        : (e = id(e, t)).precise
        ? e.result
        : s.result + i;
    },
    rd = function (e, t, i) {
      if (!e) return 0;
      if (("number" != typeof i && (i = 0), "undefined" == typeof t)) {
        if (e.totalDuration) return e.totalDuration;
        if (!e.endList) return window.Infinity;
      }
      return sd(e, t, i);
    };
  function nd(e) {
    return e.excludeUntil && e.excludeUntil > Date.now();
  }
  function ad(e) {
    return e.excludeUntil && e.excludeUntil === 1 / 0;
  }
  function od(e) {
    var t = nd(e);
    return !e.disabled && !t;
  }
  function ld(e, t) {
    return t.attributes && t.attributes[e];
  }
  function dd(e, t) {
    var i = (e && e.mediaGroups && e.mediaGroups.AUDIO) || {};
    let s = !1;
    for (const r in i) {
      for (const n in i[r]) if ((s = t(i[r][n]))) break;
      if (s) break;
    }
    return !!s;
  }
  const hd = (e, t) => {
      if (1 === e.playlists.length) return !0;
      const i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
      return (
        0 ===
        e.playlists.filter((e) => !!od(e) && (e.attributes.BANDWIDTH || 0) < i)
          .length
      );
    },
    ud = (e, t) =>
      !(
        (!e && !t) ||
        (!e && t) ||
        (e && !t) ||
        (e !== t &&
          (!e.id || !t.id || e.id !== t.id) &&
          (!e.resolvedUri ||
            !t.resolvedUri ||
            e.resolvedUri !== t.resolvedUri) &&
          (!e.uri || !t.uri || e.uri !== t.uri))
      ),
    cd = (t) => {
      if (!t || !t.playlists || !t.playlists.length)
        return dd(t, (e) => (e.playlists && e.playlists.length) || e.uri);
      for (let e = 0; e < t.playlists.length; e++) {
        const s = t.playlists[e];
        var i = s.attributes && s.attributes.CODECS;
        if (!i || !i.split(",").every((e) => Cn(e))) {
          i = dd(t, (e) => ud(s, e));
          if (!i) return !1;
        }
      }
      return !0;
    };
  var pd = {
    liveEdgeDelay: ed,
    duration: rd,
    seekable: function (e, t, i) {
      var s = t || 0,
        e = $l(e, t, !0, i);
      return null === e ? Bl() : Bl(s, e);
    },
    getMediaInfoForTime: function ({
      playlist: t,
      currentTime: i,
      startingSegmentIndex: s,
      startingPartIndex: r,
      startTime: n,
      exactManifestTimings: a,
    }) {
      let o = i - n;
      var l = Ql(t);
      let d = 0;
      for (let e = 0; e < l.length; e++) {
        var h = l[e];
        if (
          s === h.segmentIndex &&
          ("number" != typeof r ||
            "number" != typeof h.partIndex ||
            r === h.partIndex)
        ) {
          d = e;
          break;
        }
      }
      if (o < 0) {
        if (0 < d)
          for (let e = d - 1; 0 <= e; e--) {
            var u = l[e];
            if (((o += u.duration), a)) {
              if (o < 0) continue;
            } else if (o + Wl <= 0) continue;
            return {
              partIndex: u.partIndex,
              segmentIndex: u.segmentIndex,
              startTime:
                n -
                Vl({
                  defaultDuration: t.targetDuration,
                  durationList: l,
                  startIndex: d,
                  endIndex: e,
                }),
            };
          }
        return {
          partIndex: (l[0] && l[0].partIndex) || null,
          segmentIndex: (l[0] && l[0].segmentIndex) || 0,
          startTime: i,
        };
      }
      if (d < 0) {
        for (let e = d; e < 0; e++)
          if ((o -= t.targetDuration) < 0)
            return {
              partIndex: (l[0] && l[0].partIndex) || null,
              segmentIndex: (l[0] && l[0].segmentIndex) || 0,
              startTime: i,
            };
        d = 0;
      }
      for (let e = d; e < l.length; e++) {
        var c = l[e];
        if (((o -= c.duration), a)) {
          if (0 < o) continue;
        } else if (0 <= o - Wl) continue;
        return {
          partIndex: c.partIndex,
          segmentIndex: c.segmentIndex,
          startTime:
            n +
            Vl({
              defaultDuration: t.targetDuration,
              durationList: l,
              startIndex: d,
              endIndex: e,
            }),
        };
      }
      return {
        segmentIndex: l[l.length - 1].segmentIndex,
        partIndex: l[l.length - 1].partIndex,
        startTime: i,
      };
    },
    isEnabled: od,
    isDisabled: function (e) {
      return e.disabled;
    },
    isExcluded: nd,
    isIncompatible: ad,
    playlistEnd: $l,
    isAes: function (t) {
      for (let e = 0; e < t.segments.length; e++)
        if (t.segments[e].key) return !0;
      return !1;
    },
    hasAttribute: ld,
    estimateSegmentRequestTime: function (e, t, i, s = 0) {
      return ld("BANDWIDTH", i)
        ? (e * i.attributes.BANDWIDTH - 8 * s) / t
        : NaN;
    },
    isLowestEnabledRendition: hd,
    isAudioOnly: cd,
    playlistMatch: ud,
    segmentDurationWithParts: Yl,
  };
  const md = T["log"],
    gd = (e, t) => e + "-" + t,
    fd = (r, n) => {
      r.mediaGroups &&
        ["AUDIO", "SUBTITLES"].forEach((e) => {
          if (r.mediaGroups[e])
            for (const i in r.mediaGroups[e])
              for (const s in r.mediaGroups[e][i]) {
                var t = r.mediaGroups[e][i][s];
                n(t, e, i, s);
              }
        });
    },
    yd = ({ playlist: e, uri: t, id: i }) => {
      (e.id = i),
        (e.playlistErrors_ = 0),
        t && (e.uri = t),
        (e.attributes = e.attributes || {});
    },
    _d = (a, e) => {
      a.uri = e;
      for (let e = 0; e < a.playlists.length; e++) {
        var t;
        a.playlists[e].uri ||
          ((t = "placeholder-uri-" + e), (a.playlists[e].uri = t));
      }
      const o = cd(a);
      fd(a, (e, t, i, s) => {
        const r = `placeholder-uri-${t}-${i}-` + s;
        if (!e.playlists || !e.playlists.length) {
          if (o && "AUDIO" === t && !e.uri)
            for (let e = 0; e < a.playlists.length; e++) {
              var n = a.playlists[e];
              if (
                n.attributes &&
                n.attributes.AUDIO &&
                n.attributes.AUDIO === i
              )
                return;
            }
          e.playlists = [gi({}, e)];
        }
        e.playlists.forEach(function (e, t) {
          var i = gd(t, r);
          e.uri
            ? (e.resolvedUri = e.resolvedUri || Ml(a.uri, e.uri))
            : ((e.uri = 0 === t ? r : i), (e.resolvedUri = e.uri)),
            (e.id = e.id || i),
            (e.attributes = e.attributes || {}),
            (a.playlists[e.id] = e),
            (a.playlists[e.uri] = e);
        });
      });
      {
        var i = a;
        let e = i.playlists.length;
        for (; e--; ) {
          var s = i.playlists[e];
          yd({ playlist: s, id: gd(e, s.uri) }),
            (s.resolvedUri = Ml(i.uri, s.uri)),
            (i.playlists[s.id] = s),
            (i.playlists[s.uri] = s).attributes.BANDWIDTH ||
              md.warn(
                "Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."
              );
        }
      }
      var r;
      (r = a),
        fd(r, (e) => {
          e.uri && (e.resolvedUri = Ml(r.uri, e.uri));
        });
    };
  Dr = T.EventTarget;
  function vd(e) {
    var t = e.segments || [],
      i = e.preloadSegment;
    if (i && i.parts && i.parts.length) {
      if (i.preloadHints)
        for (let e = 0; e < i.preloadHints.length; e++)
          if ("MAP" === i.preloadHints[e].type) return t;
      (i.duration = e.targetDuration), (i.preload = !0), t.push(i);
    }
    return t;
  }
  const bd = (t, i) => {
      if (!t) return i;
      var s = D(t, i);
      if (
        (t.preloadHints && !i.preloadHints && delete s.preloadHints,
        t.parts && !i.parts)
      )
        delete s.parts;
      else if (t.parts && i.parts)
        for (let e = 0; e < i.parts.length; e++)
          t.parts && t.parts[e] && (s.parts[e] = D(t.parts[e], i.parts[e]));
      return (
        !t.skipped && i.skipped && (s.skipped = !1),
        t.preload && !i.preload && (s.preload = !1),
        s
      );
    },
    Td = (e, t) => {
      !e.resolvedUri && e.uri && (e.resolvedUri = Ml(t, e.uri)),
        e.key && !e.key.resolvedUri && (e.key.resolvedUri = Ml(t, e.key.uri)),
        e.map && !e.map.resolvedUri && (e.map.resolvedUri = Ml(t, e.map.uri)),
        e.map &&
          e.map.key &&
          !e.map.key.resolvedUri &&
          (e.map.key.resolvedUri = Ml(t, e.map.key.uri)),
        e.parts &&
          e.parts.length &&
          e.parts.forEach((e) => {
            e.resolvedUri || (e.resolvedUri = Ml(t, e.uri));
          }),
        e.preloadHints &&
          e.preloadHints.length &&
          e.preloadHints.forEach((e) => {
            e.resolvedUri || (e.resolvedUri = Ml(t, e.uri));
          });
    },
    Sd = (e, t) =>
      e === t ||
      (e.segments &&
        t.segments &&
        e.segments.length === t.segments.length &&
        e.endList === t.endList &&
        e.mediaSequence === t.mediaSequence &&
        e.preloadSegment === t.preloadSegment),
    wd = (e, r, t = Sd) => {
      var i = D(e, {}),
        s = i.playlists[r.id];
      if (!s) return null;
      if (t(s, r)) return null;
      r.segments = vd(r);
      const n = D(s, r);
      if (
        (n.preloadSegment && !r.preloadSegment && delete n.preloadSegment,
        s.segments)
      ) {
        if (r.skip) {
          r.segments = r.segments || [];
          for (let e = 0; e < r.skip.skippedSegments; e++)
            r.segments.unshift({ skipped: !0 });
        }
        n.segments = ((e, t, i) => {
          var s = e.slice(),
            r = t.slice(),
            n = ((i = i || 0), []);
          let a;
          for (let e = 0; e < r.length; e++) {
            var o = s[e + i],
              l = r[e];
            o
              ? ((a = o.map || a), n.push(bd(o, l)))
              : (a && !l.map && (l.map = a), n.push(l));
          }
          return n;
        })(s.segments, r.segments, r.mediaSequence - s.mediaSequence);
      }
      n.segments.forEach((e) => {
        Td(e, n.resolvedUri);
      });
      for (let e = 0; e < i.playlists.length; e++)
        i.playlists[e].id === r.id && (i.playlists[e] = n);
      return (
        (i.playlists[r.id] = n),
        (i.playlists[r.uri] = n),
        fd(e, (t, e, i, s) => {
          if (t.playlists)
            for (let e = 0; e < t.playlists.length; e++)
              r.id === t.playlists[e].id && (t.playlists[e] = n);
        }),
        i
      );
    },
    Ed = (e, t) => {
      var i = e.segments || [],
        i = i[i.length - 1],
        s = i && i.parts && i.parts[i.parts.length - 1],
        s = (s && s.duration) || (i && i.duration);
      return t && s
        ? 1e3 * s
        : 500 * (e.partTargetDuration || e.targetDuration || 10);
    };
  class Cd extends Dr {
    constructor(e, t, i = {}) {
      if ((super(), !e))
        throw new Error("A non-empty playlist URL or object is required");
      this.logger_ = Ul("PlaylistLoader");
      var { withCredentials: i = !1 } = i,
        e =
          ((this.src = e),
          (this.vhs_ = t),
          (this.withCredentials = i),
          t.options_);
      (this.customTagParsers = (e && e.customTagParsers) || []),
        (this.customTagMappers = (e && e.customTagMappers) || []),
        (this.llhls = e && e.llhls),
        (this.state = "HAVE_NOTHING"),
        (this.handleMediaupdatetimeout_ =
          this.handleMediaupdatetimeout_.bind(this)),
        this.on("mediaupdatetimeout", this.handleMediaupdatetimeout_);
    }
    handleMediaupdatetimeout_() {
      if ("HAVE_METADATA" === this.state) {
        var t = this.media();
        let e = Ml(this.main.uri, t.uri);
        this.llhls &&
          (e = ((e, t) => {
            if (!t.endList && t.serverControl) {
              const r = {};
              if (t.serverControl.canBlockReload) {
                var i,
                  s = t["preloadSegment"];
                let e = t.mediaSequence + t.segments.length;
                s &&
                  ((s = s.parts || []),
                  -1 < (i = Zl(t) - 1) &&
                    i != s.length - 1 &&
                    (r._HLS_part = i),
                  -1 < i || s.length) &&
                  e--,
                  (r._HLS_msn = e);
              }
              if (
                (t.serverControl &&
                  t.serverControl.canSkipUntil &&
                  (r._HLS_skip = t.serverControl.canSkipDateranges
                    ? "v2"
                    : "YES"),
                Object.keys(r).length)
              ) {
                const n = new window.URL(e);
                ["_HLS_skip", "_HLS_msn", "_HLS_part"].forEach(function (e) {
                  r.hasOwnProperty(e) && n.searchParams.set(e, r[e]);
                }),
                  (e = n.toString());
              }
            }
            return e;
          })(e, t)),
          (this.state = "HAVE_CURRENT_METADATA"),
          (this.request = this.vhs_.xhr(
            { uri: e, withCredentials: this.withCredentials },
            (e, t) => {
              if (this.request)
                return e
                  ? this.playlistRequestError(
                      this.request,
                      this.media(),
                      "HAVE_METADATA"
                    )
                  : void this.haveMetadata({
                      playlistString: this.request.responseText,
                      url: this.media().uri,
                      id: this.media().id,
                    });
            }
          ));
      }
    }
    playlistRequestError(e, t, i) {
      var { uri: t, id: s } = t;
      (this.request = null),
        i && (this.state = i),
        (this.error = {
          playlist: this.main.playlists[s],
          status: e.status,
          message: `HLS playlist request error at URL: ${t}.`,
          responseText: e.responseText,
          code: 500 <= e.status ? 4 : 2,
        }),
        this.trigger("error");
    }
    parseManifest_({ url: t, manifestString: i }) {
      {
        var [
          {
            onwarn: i,
            oninfo: e,
            manifestString: s,
            customTagParsers: r = [],
            customTagMappers: n = [],
            llhls: a,
          },
        ] = [
          {
            onwarn: ({ message: e }) =>
              this.logger_(`m3u8-parser warn for ${t}: ` + e),
            oninfo: ({ message: e }) =>
              this.logger_(`m3u8-parser info for ${t}: ` + e),
            manifestString: i,
            customTagParsers: this.customTagParsers,
            customTagMappers: this.customTagMappers,
            llhls: this.llhls,
          },
        ];
        const o = new En(),
          l =
            (i && o.on("warn", i),
            e && o.on("info", e),
            r.forEach((e) => o.addParser(e)),
            n.forEach((e) => o.addTagMapper(e)),
            o.push(s),
            o.end(),
            o.manifest);
        if (
          (a ||
            ([
              "preloadSegment",
              "skip",
              "serverControl",
              "renditionReports",
              "partInf",
              "partTargetDuration",
            ].forEach(function (e) {
              l.hasOwnProperty(e) && delete l[e];
            }),
            l.segments &&
              l.segments.forEach(function (t) {
                ["parts", "preloadHints"].forEach(function (e) {
                  t.hasOwnProperty(e) && delete t[e];
                });
              })),
          !l.targetDuration)
        ) {
          let e = 10;
          l.segments &&
            l.segments.length &&
            (e = l.segments.reduce((e, t) => Math.max(e, t.duration), 0)),
            i && i("manifest has no targetDuration defaulting to " + e),
            (l.targetDuration = e);
        }
        return (
          (e = Jl(l)).length &&
            !l.partTargetDuration &&
            ((r = e.reduce((e, t) => Math.max(e, t.duration), 0)),
            i &&
              (i("manifest has no partTargetDuration defaulting to " + r),
              md.error(
                "LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed."
              )),
            (l.partTargetDuration = r)),
          l
        );
      }
    }
    haveMetadata({ playlistString: e, playlistObject: t, url: i, id: s }) {
      (this.request = null), (this.state = "HAVE_METADATA");
      (t = t || this.parseManifest_({ url: i, manifestString: e })),
        (t.lastRequest = Date.now()),
        yd({ playlist: t, uri: i, id: s }),
        (e = wd(this.main, t));
      (this.targetDuration = t.partTargetDuration || t.targetDuration),
        (this.pendingMedia_ = null),
        e
          ? ((this.main = e), (this.media_ = this.main.playlists[s]))
          : this.trigger("playlistunchanged"),
        this.updateMediaUpdateTimeout_(Ed(this.media(), !!e)),
        this.trigger("loadedplaylist");
    }
    dispose() {
      this.trigger("dispose"),
        this.stopRequest(),
        window.clearTimeout(this.mediaUpdateTimeout),
        window.clearTimeout(this.finalRenditionTimeout),
        this.off();
    }
    stopRequest() {
      var e;
      this.request &&
        ((e = this.request),
        (this.request = null),
        (e.onreadystatechange = null),
        e.abort());
    }
    media(i, e) {
      if (!i) return this.media_;
      if ("HAVE_NOTHING" === this.state)
        throw new Error("Cannot switch media playlist from " + this.state);
      if ("string" == typeof i) {
        if (!this.main.playlists[i])
          throw new Error("Unknown playlist URI: " + i);
        i = this.main.playlists[i];
      }
      if ((window.clearTimeout(this.finalRenditionTimeout), e))
        (e = ((i.partTargetDuration || i.targetDuration) / 2) * 1e3 || 5e3),
          (this.finalRenditionTimeout = window.setTimeout(
            this.media.bind(this, i, !1),
            e
          ));
      else {
        const s = this.state;
        var e = !this.media_ || i.id !== this.media_.id,
          t = this.main.playlists[i.id];
        if ((t && t.endList) || (i.endList && i.segments.length))
          this.request &&
            ((this.request.onreadystatechange = null),
            this.request.abort(),
            (this.request = null)),
            (this.state = "HAVE_METADATA"),
            (this.media_ = i),
            e &&
              (this.trigger("mediachanging"),
              "HAVE_MAIN_MANIFEST" === s
                ? this.trigger("loadedmetadata")
                : this.trigger("mediachange"));
        else if ((this.updateMediaUpdateTimeout_(Ed(i, !0)), e)) {
          if (((this.state = "SWITCHING_MEDIA"), this.request)) {
            if (i.resolvedUri === this.request.url) return;
            (this.request.onreadystatechange = null),
              this.request.abort(),
              (this.request = null);
          }
          this.media_ && this.trigger("mediachanging"),
            (this.pendingMedia_ = i),
            (this.request = this.vhs_.xhr(
              { uri: i.resolvedUri, withCredentials: this.withCredentials },
              (e, t) => {
                if (this.request) {
                  if (
                    ((i.lastRequest = Date.now()),
                    (i.resolvedUri = Rl(i.resolvedUri, t)),
                    e)
                  )
                    return this.playlistRequestError(this.request, i, s);
                  this.haveMetadata({
                    playlistString: t.responseText,
                    url: i.uri,
                    id: i.id,
                  }),
                    "HAVE_MAIN_MANIFEST" === s
                      ? this.trigger("loadedmetadata")
                      : this.trigger("mediachange");
                }
              }
            ));
        }
      }
    }
    pause() {
      this.mediaUpdateTimeout &&
        (window.clearTimeout(this.mediaUpdateTimeout),
        (this.mediaUpdateTimeout = null)),
        this.stopRequest(),
        "HAVE_NOTHING" === this.state && (this.started = !1),
        "SWITCHING_MEDIA" === this.state
          ? this.media_
            ? (this.state = "HAVE_METADATA")
            : (this.state = "HAVE_MAIN_MANIFEST")
          : "HAVE_CURRENT_METADATA" === this.state &&
            (this.state = "HAVE_METADATA");
    }
    load(e) {
      this.mediaUpdateTimeout &&
        (window.clearTimeout(this.mediaUpdateTimeout),
        (this.mediaUpdateTimeout = null));
      var t = this.media();
      e
        ? ((e = t
            ? ((t.partTargetDuration || t.targetDuration) / 2) * 1e3
            : 5e3),
          (this.mediaUpdateTimeout = window.setTimeout(() => {
            (this.mediaUpdateTimeout = null), this.load();
          }, e)))
        : this.started
        ? t && !t.endList
          ? this.trigger("mediaupdatetimeout")
          : this.trigger("loadedplaylist")
        : this.start();
    }
    updateMediaUpdateTimeout_(e) {
      this.mediaUpdateTimeout &&
        (window.clearTimeout(this.mediaUpdateTimeout),
        (this.mediaUpdateTimeout = null)),
        this.media() &&
          !this.media().endList &&
          (this.mediaUpdateTimeout = window.setTimeout(() => {
            (this.mediaUpdateTimeout = null),
              this.trigger("mediaupdatetimeout"),
              this.updateMediaUpdateTimeout_(e);
          }, e));
    }
    start() {
      (this.started = !0),
        "object" == typeof this.src
          ? (this.src.uri || (this.src.uri = window.location.href),
            (this.src.resolvedUri = this.src.uri),
            setTimeout(() => {
              this.setupInitialPlaylist(this.src);
            }, 0))
          : (this.request = this.vhs_.xhr(
              { uri: this.src, withCredentials: this.withCredentials },
              (e, t) => {
                if (this.request) {
                  if (((this.request = null), e))
                    return (
                      (this.error = {
                        status: t.status,
                        message: `HLS playlist request error at URL: ${this.src}.`,
                        responseText: t.responseText,
                        code: 2,
                      }),
                      "HAVE_NOTHING" === this.state && (this.started = !1),
                      this.trigger("error")
                    );
                  this.src = Rl(this.src, t);
                  e = this.parseManifest_({
                    manifestString: t.responseText,
                    url: this.src,
                  });
                  this.setupInitialPlaylist(e);
                }
              }
            ));
    }
    srcUri() {
      return "string" == typeof this.src ? this.src : this.src.uri;
    }
    setupInitialPlaylist(e) {
      var t, i, s, r;
      (this.state = "HAVE_MAIN_MANIFEST"),
        e.playlists
          ? ((this.main = e),
            _d(this.main, this.srcUri()),
            e.playlists.forEach((t) => {
              (t.segments = vd(t)),
                t.segments.forEach((e) => {
                  Td(e, t.resolvedUri);
                });
            }),
            this.trigger("loadedplaylist"),
            this.request || this.media(this.main.playlists[0]))
          : ((t = this.srcUri() || window.location.href),
            (this.main =
              ((i = t),
              (s = gd(0, i)),
              ((r = {
                mediaGroups: {
                  AUDIO: {},
                  VIDEO: {},
                  "CLOSED-CAPTIONS": {},
                  SUBTITLES: {},
                },
                uri: window.location.href,
                resolvedUri: window.location.href,
                playlists: [{ uri: i, id: s, resolvedUri: i, attributes: {} }],
              }).playlists[s] = r.playlists[0]),
              (r.playlists[i] = r.playlists[0]),
              r)),
            this.haveMetadata({
              playlistObject: e,
              url: t,
              id: this.main.playlists[0].id,
            }),
            this.trigger("loadedmetadata"));
    }
  }
  function kd(e, t, i, s) {
    var r = "arraybuffer" === e.responseType ? e.response : e.responseText;
    !t &&
      r &&
      ((e.responseTime = Date.now()),
      (e.roundTripTime = e.responseTime - e.requestTime),
      (e.bytesReceived = r.byteLength || r.length),
      e.bandwidth ||
        (e.bandwidth = Math.floor(
          (e.bytesReceived / e.roundTripTime) * 8 * 1e3
        ))),
      i.headers && (e.responseHeaders = i.headers),
      t && "ETIMEDOUT" === t.code && (e.timedout = !0),
      s(
        (t =
          t ||
          e.aborted ||
          200 === i.statusCode ||
          206 === i.statusCode ||
          0 === i.statusCode
            ? t
            : new Error(
                "XHR Failed with a response of: " + (e && (r || e.responseText))
              )),
        e
      );
  }
  function Id() {
    function n(e, i) {
      e = D({ timeout: 45e3 }, e);
      var t = n.beforeRequest || T.Vhs.xhr.beforeRequest;
      t && "function" == typeof t && (t = t(e)) && (e = t);
      const s = (!0 === T.Vhs.xhr.original ? Nd : T.Vhs.xhr)(
          e,
          function (e, t) {
            return kd(s, e, t, i);
          }
        ),
        r = s.abort;
      return (
        (s.abort = function () {
          return (s.aborted = !0), r.apply(s, arguments);
        }),
        (s.uri = e.uri),
        (s.requestTime = Date.now()),
        s
      );
    }
    return (n.original = !0), n;
  }
  function xd(e) {
    var t = {};
    return (
      e.byterange &&
        (t.Range = (function (e) {
          let t;
          return (
            "bytes=" +
            e.offset +
            "-" +
            (t =
              "bigint" == typeof e.offset || "bigint" == typeof e.length
                ? window.BigInt(e.offset) +
                  window.BigInt(e.length) -
                  window.BigInt(1)
                : e.offset + e.length - 1)
          );
        })(e.byterange)),
      t
    );
  }
  function Ad(e, t) {
    return (
      (e = e.toString(16)),
      "00".substring(0, 2 - e.length) + e + (t % 2 ? " " : "")
    );
  }
  function Pd(e) {
    return 32 <= e && e < 126 ? String.fromCharCode(e) : ".";
  }
  function Od(i) {
    const s = {};
    return (
      Object.keys(i).forEach((e) => {
        var t = i[e];
        Hn(t)
          ? (s[e] = {
              bytes: t.buffer,
              byteOffset: t.byteOffset,
              byteLength: t.byteLength,
            })
          : (s[e] = t);
      }),
      s
    );
  }
  function Dd(e) {
    var t = e.byterange || { length: 1 / 0, offset: 0 };
    return [t.length, t.offset, e.resolvedUri].join(",");
  }
  function Ld(e) {
    return e.resolvedUri;
  }
  const Nd = T["xhr"],
    Md = (e) => {
      var t,
        i,
        s = Array.prototype.slice.call(e);
      let r = "";
      for (let e = 0; e < s.length / 16; e++)
        (t = s
          .slice(16 * e, 16 * e + 16)
          .map(Ad)
          .join("")),
          (i = s
            .slice(16 * e, 16 * e + 16)
            .map(Pd)
            .join("")),
          (r += t + " " + i + "\n");
      return r;
    };
  Or = Object.freeze({
    __proto__: null,
    createTransferableMessage: Od,
    initSegmentId: Dd,
    segmentKeyId: Ld,
    hexDump: Md,
    tagDump: ({ bytes: e }) => Md(e),
    textRanges: (e) => {
      let t = "",
        i;
      for (i = 0; i < e.length; i++)
        t += ((s = e), (r = i), s.start(r) + "-" + s.end(r) + " ");
      var s, r;
      return t;
    },
  });
  const Rd = 0.25,
    Ud = (e) =>
      e.transmuxedPresentationEnd -
      e.transmuxedPresentationStart -
      e.transmuxerPrependedSeconds,
    Bd = ({ playlist: e, time: t = void 0, callback: i }) => {
      var s, r;
      if (i)
        return e && void 0 !== t
          ? (e = ((t, i) => {
              if (!i || !i.segments || 0 === i.segments.length) return null;
              let s = 0,
                r;
              for (
                let e = 0;
                e < i.segments.length &&
                ((r = i.segments[e]),
                !(
                  t <=
                  (s = r.videoTimingInfo
                    ? r.videoTimingInfo.transmuxedPresentationEnd
                    : s + r.duration)
                ));
                e++
              );
              var e = i.segments[i.segments.length - 1];
              if (
                e.videoTimingInfo &&
                e.videoTimingInfo.transmuxedPresentationEnd < t
              )
                return null;
              if (t > s) {
                if (t > s + e.duration * Rd) return null;
                r = e;
              }
              return {
                segment: r,
                estimatedStart: r.videoTimingInfo
                  ? r.videoTimingInfo.transmuxedPresentationStart
                  : s - r.duration,
                type: r.videoTimingInfo ? "accurate" : "estimate",
              };
            })(t, e))
            ? "estimate" === e.type
              ? i({
                  message:
                    "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
                  seekTime: e.estimatedStart,
                })
              : ((s = { mediaSeconds: t }),
                (t = t),
                (r = (e = e.segment).dateTimeObject
                  ? ((r = e.videoTimingInfo.transmuxerPrependedSeconds),
                    (t =
                      t - (e.videoTimingInfo.transmuxedPresentationStart + r)),
                    new Date(e.dateTimeObject.getTime() + 1e3 * t))
                  : null) && (s.programDateTime = r.toISOString()),
                i(null, s))
            : i({ message: "valid programTime was not found" })
          : i({
              message: "getProgramTime: playlist and time must be provided",
            });
      throw new Error("getProgramTime: callback must be provided");
    },
    Fd = ({
      programTime: e,
      playlist: t,
      retryCount: i = 2,
      seekTo: s,
      pauseAfterSeek: r = !0,
      tech: n,
      callback: a,
    }) => {
      var o, l, d;
      if (a)
        return "undefined" != typeof e && t && s
          ? t.endList || n.hasStarted_
            ? ((t) => {
                if (!t.segments || 0 === t.segments.length) return !1;
                for (let e = 0; e < t.segments.length; e++)
                  if (!t.segments[e].dateTimeObject) return !1;
                return !0;
              })(t)
              ? (d = ((e, t) => {
                  let i;
                  try {
                    i = new Date(e);
                  } catch (e) {
                    return null;
                  }
                  if (!t || !t.segments || 0 === t.segments.length) return null;
                  let s = t.segments[0];
                  if (i < s.dateTimeObject) return null;
                  for (let e = 0; e < t.segments.length - 1; e++) {
                    s = t.segments[e];
                    var r = t.segments[e + 1].dateTimeObject;
                    if (i < r) break;
                  }
                  var e = t.segments[t.segments.length - 1],
                    n = e.dateTimeObject,
                    a = e.videoTimingInfo
                      ? Ud(e.videoTimingInfo)
                      : e.duration + e.duration * Rd,
                    a = new Date(n.getTime() + 1e3 * a);
                  return i > a
                    ? null
                    : {
                        segment: (s = i > n ? e : s),
                        estimatedStart: s.videoTimingInfo
                          ? s.videoTimingInfo.transmuxedPresentationStart
                          : pd.duration(
                              t,
                              t.mediaSequence + t.segments.indexOf(s)
                            ),
                        type: s.videoTimingInfo ? "accurate" : "estimate",
                      };
                })(e, t))
                ? ((l = ((e, t) => {
                    let i, s;
                    try {
                      (i = new Date(e)), (s = new Date(t));
                    } catch (e) {}
                    e = i.getTime();
                    return (s.getTime() - e) / 1e3;
                  })((o = d.segment).dateTimeObject, e)),
                  "estimate" === d.type
                    ? 0 === i
                      ? a({ message: e + " is not buffered yet. Try again" })
                      : (s(d.estimatedStart + l),
                        void n.one("seeked", () => {
                          Fd({
                            programTime: e,
                            playlist: t,
                            retryCount: i - 1,
                            seekTo: s,
                            pauseAfterSeek: r,
                            tech: n,
                            callback: a,
                          });
                        }))
                    : ((d = o.start + l),
                      n.one("seeked", () => a(null, n.currentTime())),
                      r && n.pause(),
                      void s(d)))
                : a({ message: e + " was not found in the stream" })
              : a({
                  message:
                    "programDateTime tags must be provided in the manifest " +
                    t.resolvedUri,
                })
            : a({
                message:
                  "player must be playing a live stream to start buffering",
              })
          : a({
              message:
                "seekToProgramTime: programTime, seekTo and playlist must be provided",
            });
      throw new Error("seekToProgramTime: callback must be provided");
    },
    jd = (e, t) => {
      if (4 === e.readyState) return t();
    },
    Hd = (e, t, r) => {
      let s = [],
        n,
        a = !1;
      function o(e, t, i, s) {
        return t.abort(), (a = !0), r(e, t, i, s);
      }
      function i(e, t) {
        var i;
        if (!a)
          return e
            ? o(e, t, "", s)
            : ((i = t.responseText.substring(
                (s && s.byteLength) || 0,
                t.responseText.length
              )),
              (s = (function () {
                for (
                  var e, t, i, s = arguments.length, r = new Array(s), n = 0;
                  n < s;
                  n++
                )
                  r[n] = arguments[n];
                return (r = r.filter(function (e) {
                  return (
                    e && (e.byteLength || e.length) && "string" != typeof e
                  );
                })).length <= 1
                  ? S(r[0])
                  : ((e = r.reduce(function (e, t, i) {
                      return e + (t.byteLength || t.length);
                    }, 0)),
                    (t = new Uint8Array(e)),
                    (i = 0),
                    r.forEach(function (e) {
                      (e = S(e)), t.set(e, i), (i += e.byteLength);
                    }),
                    t);
              })(s, Pn(i, !0))),
              (n = n || ul(s)),
              s.length < 10 ||
              (n && s.length < n + 2) ||
              ("ts" === (i = yl(s)) && s.length < 188) ||
              (!i && s.length < 376)
                ? jd(t, () => o(e, t, "", s))
                : o(null, t, i, s));
      }
      const l = t(
        {
          uri: e,
          beforeSend(e) {
            e.overrideMimeType("text/plain; charset=x-user-defined"),
              e.addEventListener("progress", function ({}) {
                return kd(e, null, { statusCode: e.status }, i);
              });
          },
        },
        function (e, t) {
          return kd(l, e, t, i);
        }
      );
      return l;
    };
  Ni = T.EventTarget;
  function qd(t, i) {
    if (!Sd(t, i)) return !1;
    if (
      t.sidx &&
      i.sidx &&
      (t.sidx.offset !== i.sidx.offset || t.sidx.length !== i.sidx.length)
    )
      return !1;
    if ((!t.sidx && i.sidx) || (t.sidx && !i.sidx)) return !1;
    if ((t.segments && !i.segments) || (!t.segments && i.segments)) return !1;
    if (t.segments || i.segments)
      for (let e = 0; e < t.segments.length; e++) {
        var s = t.segments[e],
          r = i.segments[e];
        if (s.uri !== r.uri) return !1;
        if (s.byterange || r.byterange) {
          (s = s.byterange), (r = r.byterange);
          if ((s && !r) || (!s && r)) return !1;
          if (s.offset !== r.offset || s.length !== r.length) return !1;
        }
      }
    return !0;
  }
  const Vd = ({
      mainXml: e,
      srcUrl: t,
      clientOffset: i,
      sidxMapping: s,
      previousManifest: r,
    }) => {
      (e = e),
        (i = {
          manifestUri: t,
          clientOffset: i,
          sidxMapping: s,
          previousManifest: r,
        }),
        (e = ll(dl(e), i)),
        (s = el(e.representationInfo));
      r = zo({
        dashPlaylists: s,
        locations: e.locations,
        sidxMapping: i.sidxMapping,
        previousManifest: i.previousManifest,
      });
      return _d(r, t), r;
    },
    $d = (e, t) => {
      return (
        (Boolean(!e.map && !t.map) ||
          Boolean(
            e.map &&
              t.map &&
              e.map.byterange.offset === t.map.byterange.offset &&
              e.map.byterange.length === t.map.byterange.length
          )) &&
        e.uri === t.uri &&
        e.byterange.offset === t.byterange.offset &&
        e.byterange.length === t.byterange.length
      );
    },
    Wd = (e, t) => {
      var i = {};
      for (const a in e) {
        var s = e[a].sidx;
        if (s) {
          var r = Bo(s);
          if (!t[r]) break;
          var n = t[r].sidxInfo;
          $d(n, s) && (i[r] = t[r]);
        }
      }
      return i;
    };
  class Gd extends Ni {
    constructor(e, t, i = {}, s) {
      super(), (this.mainPlaylistLoader_ = s || this), s || (this.isMain_ = !0);
      var { withCredentials: s = !1 } = i;
      if (((this.vhs_ = t), (this.withCredentials = s), !e))
        throw new Error("A non-empty playlist URL or object is required");
      this.on("minimumUpdatePeriod", () => {
        this.refreshXml_();
      }),
        this.on("mediaupdatetimeout", () => {
          this.refreshMedia_(this.media().id);
        }),
        (this.state = "HAVE_NOTHING"),
        (this.loadedPlaylists_ = {}),
        (this.logger_ = Ul("DashPlaylistLoader")),
        this.isMain_
          ? ((this.mainPlaylistLoader_.srcUrl = e),
            (this.mainPlaylistLoader_.sidxMapping_ = {}))
          : (this.childPlaylist_ = e);
    }
    requestErrored_(e, t, i) {
      return (
        !this.request ||
        ((this.request = null),
        e
          ? ((this.error =
              "object" != typeof e || e instanceof Error
                ? {
                    status: t.status,
                    message: "DASH request error at URL: " + t.uri,
                    response: t.response,
                    code: 2,
                  }
                : e),
            i && (this.state = i),
            this.trigger("error"),
            !0)
          : void 0)
      );
    }
    addSidxSegments_(a, s, r) {
      const n = a.sidx && Bo(a.sidx);
      if (a.sidx && n && !this.mainPlaylistLoader_.sidxMapping_[n]) {
        const o = Rl(a.sidx.resolvedUri),
          l = (t, i) => {
            if (!this.requestErrored_(t, i, s)) {
              t = this.mainPlaylistLoader_.sidxMapping_;
              let e;
              try {
                e = bl(S(i.response).subarray(8));
              } catch (e) {
                return void this.requestErrored_(e, i, s);
              }
              return (
                (t[n] = { sidxInfo: a.sidx, sidx: e }),
                Do(a, e, a.sidx.resolvedUri),
                r(!0)
              );
            }
          };
        this.request = Hd(o, this.vhs_.xhr, (e, t, i, s) => {
          var r, n;
          return e
            ? l(e, t)
            : i && "mp4" === i
            ? (({ offset: r, length: n } = a.sidx.byterange),
              s.length >= n + r
                ? l(e, {
                    response: s.subarray(r, r + n),
                    status: t.status,
                    uri: t.uri,
                  })
                : void (this.request = this.vhs_.xhr(
                    {
                      uri: o,
                      responseType: "arraybuffer",
                      headers: xd({ byterange: a.sidx.byterange }),
                    },
                    l
                  )))
            : l(
                {
                  status: t.status,
                  message:
                    `Unsupported ${
                      i || "unknown"
                    } container type for sidx segment at URL: ` + o,
                  response: "",
                  playlist: a,
                  internal: !0,
                  playlistExclusionDuration: 1 / 0,
                  code: 2,
                },
                t
              );
        });
      } else this.mediaRequest_ = window.setTimeout(() => r(!1), 0);
    }
    dispose() {
      this.trigger("dispose"),
        this.stopRequest(),
        (this.loadedPlaylists_ = {}),
        window.clearTimeout(this.minimumUpdatePeriodTimeout_),
        window.clearTimeout(this.mediaRequest_),
        window.clearTimeout(this.mediaUpdateTimeout),
        (this.mediaUpdateTimeout = null),
        (this.mediaRequest_ = null),
        (this.minimumUpdatePeriodTimeout_ = null),
        this.mainPlaylistLoader_.createMupOnMedia_ &&
          (this.off(
            "loadedmetadata",
            this.mainPlaylistLoader_.createMupOnMedia_
          ),
          (this.mainPlaylistLoader_.createMupOnMedia_ = null)),
        this.off();
    }
    hasPendingRequest() {
      return this.request || this.mediaRequest_;
    }
    stopRequest() {
      var e;
      this.request &&
        ((e = this.request),
        (this.request = null),
        (e.onreadystatechange = null),
        e.abort());
    }
    media(t) {
      if (!t) return this.media_;
      if ("HAVE_NOTHING" === this.state)
        throw new Error("Cannot switch media playlist from " + this.state);
      const i = this.state;
      if ("string" == typeof t) {
        if (!this.mainPlaylistLoader_.main.playlists[t])
          throw new Error("Unknown playlist URI: " + t);
        t = this.mainPlaylistLoader_.main.playlists[t];
      }
      var e = !this.media_ || t.id !== this.media_.id;
      e && this.loadedPlaylists_[t.id] && this.loadedPlaylists_[t.id].endList
        ? ((this.state = "HAVE_METADATA"),
          (this.media_ = t),
          e && (this.trigger("mediachanging"), this.trigger("mediachange")))
        : e &&
          (this.media_ && this.trigger("mediachanging"),
          this.addSidxSegments_(t, i, (e) => {
            this.haveMetadata({ startingState: i, playlist: t });
          }));
    }
    haveMetadata({ startingState: e, playlist: t }) {
      (this.state = "HAVE_METADATA"),
        (this.loadedPlaylists_[t.id] = t),
        (this.mediaRequest_ = null),
        this.refreshMedia_(t.id),
        "HAVE_MAIN_MANIFEST" === e
          ? this.trigger("loadedmetadata")
          : this.trigger("mediachange");
    }
    pause() {
      this.mainPlaylistLoader_.createMupOnMedia_ &&
        (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_),
        (this.mainPlaylistLoader_.createMupOnMedia_ = null)),
        this.stopRequest(),
        window.clearTimeout(this.mediaUpdateTimeout),
        (this.mediaUpdateTimeout = null),
        this.isMain_ &&
          (window.clearTimeout(
            this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_
          ),
          (this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_ = null)),
        "HAVE_NOTHING" === this.state && (this.started = !1);
    }
    load(e) {
      window.clearTimeout(this.mediaUpdateTimeout),
        (this.mediaUpdateTimeout = null);
      var t = this.media();
      e
        ? ((e = t ? (t.targetDuration / 2) * 1e3 : 5e3),
          (this.mediaUpdateTimeout = window.setTimeout(() => this.load(), e)))
        : this.started
        ? t && !t.endList
          ? (this.isMain_ &&
              !this.minimumUpdatePeriodTimeout_ &&
              (this.trigger("minimumUpdatePeriod"),
              this.updateMinimumUpdatePeriodTimeout_()),
            this.trigger("mediaupdatetimeout"))
          : this.trigger("loadedplaylist")
        : this.start();
    }
    start() {
      (this.started = !0),
        this.isMain_
          ? this.requestMain_((e, t) => {
              this.haveMain_(),
                this.hasPendingRequest() ||
                  this.media_ ||
                  this.media(this.mainPlaylistLoader_.main.playlists[0]);
            })
          : (this.mediaRequest_ = window.setTimeout(() => this.haveMain_(), 0));
    }
    requestMain_(s) {
      this.request = this.vhs_.xhr(
        {
          uri: this.mainPlaylistLoader_.srcUrl,
          withCredentials: this.withCredentials,
        },
        (e, t) => {
          if (this.requestErrored_(e, t))
            "HAVE_NOTHING" === this.state && (this.started = !1);
          else {
            const i = t.responseText !== this.mainPlaylistLoader_.mainXml_;
            if (
              ((this.mainPlaylistLoader_.mainXml_ = t.responseText),
              t.responseHeaders && t.responseHeaders.date
                ? (this.mainLoaded_ = Date.parse(t.responseHeaders.date))
                : (this.mainLoaded_ = Date.now()),
              (this.mainPlaylistLoader_.srcUrl = Rl(
                this.mainPlaylistLoader_.srcUrl,
                t
              )),
              !i)
            )
              return s(t, i);
            this.handleMain_(), this.syncClientServerClock_(() => s(t, i));
          }
        }
      );
    }
    syncClientServerClock_(s) {
      const r = hl(this.mainPlaylistLoader_.mainXml_);
      return null === r
        ? ((this.mainPlaylistLoader_.clientOffset_ =
            this.mainLoaded_ - Date.now()),
          s())
        : "DIRECT" === r.method
        ? ((this.mainPlaylistLoader_.clientOffset_ = r.value - Date.now()), s())
        : void (this.request = this.vhs_.xhr(
            {
              uri: Ml(this.mainPlaylistLoader_.srcUrl, r.value),
              method: r.method,
              withCredentials: this.withCredentials,
            },
            (t, i) => {
              if (this.request) {
                if (t)
                  return (
                    (this.mainPlaylistLoader_.clientOffset_ =
                      this.mainLoaded_ - Date.now()),
                    s()
                  );
                let e;
                (e =
                  "HEAD" === r.method
                    ? i.responseHeaders && i.responseHeaders.date
                      ? Date.parse(i.responseHeaders.date)
                      : this.mainLoaded_
                    : Date.parse(i.responseText)),
                  (this.mainPlaylistLoader_.clientOffset_ = e - Date.now()),
                  s();
              }
            }
          ));
    }
    haveMain_() {
      (this.state = "HAVE_MAIN_MANIFEST"),
        this.isMain_
          ? this.trigger("loadedplaylist")
          : this.media_ || this.media(this.childPlaylist_);
    }
    handleMain_() {
      this.mediaRequest_ = null;
      var e = this.mainPlaylistLoader_.main;
      let t = Vd({
        mainXml: this.mainPlaylistLoader_.mainXml_,
        srcUrl: this.mainPlaylistLoader_.srcUrl,
        clientOffset: this.mainPlaylistLoader_.clientOffset_,
        sidxMapping: this.mainPlaylistLoader_.sidxMapping_,
        previousManifest: e,
      });
      e &&
        (t = ((e, t, i) => {
          let n = !0,
            a = D(e, {
              duration: t.duration,
              minimumUpdatePeriod: t.minimumUpdatePeriod,
              timelineStarts: t.timelineStarts,
            });
          for (let e = 0; e < t.playlists.length; e++) {
            var s = t.playlists[e],
              r =
                (s.sidx &&
                  ((r = Bo(s.sidx)), i) &&
                  i[r] &&
                  i[r].sidx &&
                  Do(s, i[r].sidx, s.sidx.resolvedUri),
                wd(a, s, qd));
            r && ((a = r), (n = !1));
          }
          return (
            fd(t, (e, t, i, s) => {
              var r;
              e.playlists &&
                e.playlists.length &&
                ((r = e.playlists[0].id), (e = wd(a, e.playlists[0], qd))) &&
                (((a = e).mediaGroups[t][i][s].playlists[0] = a.playlists[r]),
                (n = !1));
            }),
            (n = t.minimumUpdatePeriod === e.minimumUpdatePeriod && n)
              ? null
              : a
          );
        })(e, t, this.mainPlaylistLoader_.sidxMapping_)),
        (this.mainPlaylistLoader_.main = t || e);
      var i =
        this.mainPlaylistLoader_.main.locations &&
        this.mainPlaylistLoader_.main.locations[0];
      return (
        i &&
          i !== this.mainPlaylistLoader_.srcUrl &&
          (this.mainPlaylistLoader_.srcUrl = i),
        (!e || (t && t.minimumUpdatePeriod !== e.minimumUpdatePeriod)) &&
          this.updateMinimumUpdatePeriodTimeout_(),
        Boolean(t)
      );
    }
    updateMinimumUpdatePeriodTimeout_() {
      var e = this.mainPlaylistLoader_;
      e.createMupOnMedia_ &&
        (e.off("loadedmetadata", e.createMupOnMedia_),
        (e.createMupOnMedia_ = null)),
        e.minimumUpdatePeriodTimeout_ &&
          (window.clearTimeout(e.minimumUpdatePeriodTimeout_),
          (e.minimumUpdatePeriodTimeout_ = null));
      let t = e.main && e.main.minimumUpdatePeriod;
      0 === t &&
        (e.media()
          ? (t = 1e3 * e.media().targetDuration)
          : ((e.createMupOnMedia_ = e.updateMinimumUpdatePeriodTimeout_),
            e.one("loadedmetadata", e.createMupOnMedia_))),
        "number" != typeof t || t <= 0
          ? t < 0 &&
            this.logger_(
              `found invalid minimumUpdatePeriod of ${t}, not setting a timeout`
            )
          : this.createMUPTimeout_(t);
    }
    createMUPTimeout_(e) {
      const t = this.mainPlaylistLoader_;
      t.minimumUpdatePeriodTimeout_ = window.setTimeout(() => {
        (t.minimumUpdatePeriodTimeout_ = null),
          t.trigger("minimumUpdatePeriod"),
          t.createMUPTimeout_(e);
      }, e);
    }
    refreshXml_() {
      this.requestMain_((e, t) => {
        t &&
          (this.media_ &&
            (this.media_ =
              this.mainPlaylistLoader_.main.playlists[this.media_.id]),
          (this.mainPlaylistLoader_.sidxMapping_ = ((e, r) => {
            let n = Wd(e.playlists, r);
            return (
              fd(e, (e, t, i, s) => {
                e.playlists &&
                  e.playlists.length &&
                  ((e = e.playlists), (n = D(n, Wd(e, r))));
              }),
              n
            );
          })(
            this.mainPlaylistLoader_.main,
            this.mainPlaylistLoader_.sidxMapping_
          )),
          this.addSidxSegments_(this.media(), this.state, (e) => {
            this.refreshMedia_(this.media().id);
          }));
      });
    }
    refreshMedia_(e) {
      if (!e) throw new Error("refreshMedia_ must take a media id");
      this.media_ && this.isMain_ && this.handleMain_();
      var t = this.mainPlaylistLoader_.main.playlists;
      const i = !this.media_ || this.media_ !== t[e];
      if (
        (i ? (this.media_ = t[e]) : this.trigger("playlistunchanged"),
        !this.mediaUpdateTimeout)
      ) {
        const s = () => {
          this.media().endList ||
            (this.mediaUpdateTimeout = window.setTimeout(() => {
              this.trigger("mediaupdatetimeout"), s();
            }, Ed(this.media(), Boolean(i))));
        };
        s();
      }
      this.trigger("loadedplaylist");
    }
  }
  var L = {
    GOAL_BUFFER_LENGTH: 30,
    MAX_GOAL_BUFFER_LENGTH: 60,
    BACK_BUFFER_LENGTH: 30,
    GOAL_BUFFER_LENGTH_RATE: 1,
    INITIAL_BANDWIDTH: 4194304,
    BANDWIDTH_VARIANCE: 1.2,
    BUFFER_LOW_WATER_LINE: 0,
    MAX_BUFFER_LOW_WATER_LINE: 30,
    EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16,
    BUFFER_LOW_WATER_LINE_RATE: 1,
    BUFFER_HIGH_WATER_LINE: 30,
  };
  function zd(e) {
    return (e.on = e.addEventListener), (e.off = e.removeEventListener), e;
  }
  const Xd = (t) => {
    var i = new Uint8Array(new ArrayBuffer(t.length));
    for (let e = 0; e < t.length; e++) i[e] = t.charCodeAt(e);
    return i.buffer;
  };
  function Kd(s) {
    return function () {
      const e = (function (t) {
        try {
          return URL.createObjectURL(
            new Blob([t], { type: "application/javascript" })
          );
        } catch (e) {
          var i = new BlobBuilder();
          return i.append(t), URL.createObjectURL(i.getBlob());
        }
      })(s);
      var t = zd(new Worker(e));
      t.objURL = e;
      const i = t.terminate;
      return (
        (t.on = t.addEventListener),
        (t.off = t.removeEventListener),
        (t.terminate = function () {
          return URL.revokeObjectURL(e), i.call(this);
        }),
        t
      );
    };
  }
  function Yd(e) {
    return (
      `var browserWorkerPolyFill = ${zd.toString()};
` +
      "browserWorkerPolyFill(self);\n" +
      e
    );
  }
  function Qd(e) {
    return e
      .toString()
      .replace(/^function.+?{/, "")
      .slice(0, -1);
  }
  var Jd = Kd(
    Yd(
      Qd(function () {
        function e() {
          this.init = function () {
            var n = {};
            (this.on = function (e, t) {
              n[e] || (n[e] = []), (n[e] = n[e].concat(t));
            }),
              (this.off = function (e, t) {
                return (
                  !!n[e] &&
                  ((t = n[e].indexOf(t)),
                  (n[e] = n[e].slice()),
                  n[e].splice(t, 1),
                  -1 < t)
                );
              }),
              (this.trigger = function (e) {
                var t,
                  i,
                  s,
                  r = n[e];
                if (r)
                  if (2 === arguments.length)
                    for (i = r.length, t = 0; t < i; ++t)
                      r[t].call(this, arguments[1]);
                  else {
                    for (
                      s = [], t = arguments.length, t = 1;
                      t < arguments.length;
                      ++t
                    )
                      s.push(arguments[t]);
                    for (i = r.length, t = 0; t < i; ++t) r[t].apply(this, s);
                  }
              }),
              (this.dispose = function () {
                n = {};
              });
          };
        }
        var l,
          R,
          U,
          B,
          F,
          j,
          H,
          q,
          V,
          $,
          W,
          G,
          z,
          X,
          K,
          Y,
          Q,
          J,
          Z,
          ee,
          d,
          te,
          ie,
          se,
          re,
          ne,
          ae,
          oe,
          t,
          le,
          de,
          he,
          ue,
          ce,
          pe,
          me,
          ge,
          fe =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : {},
          i =
            ((e.prototype.pipe = function (t) {
              return (
                this.on("data", function (e) {
                  t.push(e);
                }),
                this.on("done", function (e) {
                  t.flush(e);
                }),
                this.on("partialdone", function (e) {
                  t.partialFlush(e);
                }),
                this.on("endedtimeline", function (e) {
                  t.endTimeline(e);
                }),
                this.on("reset", function (e) {
                  t.reset(e);
                }),
                t
              );
            }),
            (e.prototype.push = function (e) {
              this.trigger("data", e);
            }),
            (e.prototype.flush = function (e) {
              this.trigger("done", e);
            }),
            (e.prototype.partialFlush = function (e) {
              this.trigger("partialdone", e);
            }),
            (e.prototype.endTimeline = function (e) {
              this.trigger("endedtimeline", e);
            }),
            (e.prototype.reset = function (e) {
              this.trigger("reset", e);
            }),
            e),
          ye = Math.pow(2, 32),
          _e = {
            getUint64: function (e) {
              var t,
                e = new DataView(e.buffer, e.byteOffset, e.byteLength);
              return e.getBigUint64
                ? (t = e.getBigUint64(0)) < Number.MAX_SAFE_INTEGER
                  ? Number(t)
                  : t
                : e.getUint32(0) * ye + e.getUint32(4);
            },
            MAX_UINT32: ye,
          },
          ve = _e.MAX_UINT32;
        if (
          ((d = {
            avc1: [],
            avcC: [],
            btrt: [],
            dinf: [],
            dref: [],
            esds: [],
            ftyp: [],
            hdlr: [],
            mdat: [],
            mdhd: [],
            mdia: [],
            mfhd: [],
            minf: [],
            moof: [],
            moov: [],
            mp4a: [],
            mvex: [],
            mvhd: [],
            pasp: [],
            sdtp: [],
            smhd: [],
            stbl: [],
            stco: [],
            stsc: [],
            stsd: [],
            stsz: [],
            stts: [],
            styp: [],
            tfdt: [],
            tfhd: [],
            traf: [],
            trak: [],
            trun: [],
            trex: [],
            tkhd: [],
            vmhd: [],
          }),
          "undefined" != typeof Uint8Array)
        ) {
          for (var s in d)
            d.hasOwnProperty(s) &&
              (d[s] = [
                s.charCodeAt(0),
                s.charCodeAt(1),
                s.charCodeAt(2),
                s.charCodeAt(3),
              ]);
          (te = new Uint8Array([
            "i".charCodeAt(0),
            "s".charCodeAt(0),
            "o".charCodeAt(0),
            "m".charCodeAt(0),
          ])),
            (se = new Uint8Array([
              "a".charCodeAt(0),
              "v".charCodeAt(0),
              "c".charCodeAt(0),
              "1".charCodeAt(0),
            ])),
            (ie = new Uint8Array([0, 0, 0, 1])),
            (Ee = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101,
              114, 0,
            ])),
            (ke = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101,
              114, 0,
            ])),
            (re = { video: Ee, audio: ke }),
            (oe = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0,
              1,
            ])),
            (ae = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (le = t),
            (de = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
            (he = t),
            (ne = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
        }
        (l = function (e) {
          for (var t, i = [], s = 0, r = 1; r < arguments.length; r++)
            i.push(arguments[r]);
          for (r = i.length; r--; ) s += i[r].byteLength;
          for (
            t = new Uint8Array(s + 8),
              new DataView(t.buffer, t.byteOffset, t.byteLength).setUint32(
                0,
                t.byteLength
              ),
              t.set(e, 4),
              r = 0,
              s = 8;
            r < i.length;
            r++
          )
            t.set(i[r], s), (s += i[r].byteLength);
          return t;
        }),
          (R = function () {
            return l(d.dinf, l(d.dref, oe));
          }),
          (U = function (e) {
            return l(
              d.esds,
              new Uint8Array([
                0,
                0,
                0,
                0,
                3,
                25,
                0,
                0,
                0,
                4,
                17,
                64,
                21,
                0,
                6,
                0,
                0,
                0,
                218,
                192,
                0,
                0,
                218,
                192,
                5,
                2,
                (e.audioobjecttype << 3) | (e.samplingfrequencyindex >>> 1),
                (e.samplingfrequencyindex << 7) | (e.channelcount << 3),
                6,
                1,
                2,
              ])
            );
          }),
          (X = function (e) {
            return l(d.hdlr, re[e]);
          }),
          (z = function (e) {
            var t = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              0,
              0,
              0,
              3,
              0,
              1,
              95,
              144,
              (e.duration >>> 24) & 255,
              (e.duration >>> 16) & 255,
              (e.duration >>> 8) & 255,
              255 & e.duration,
              85,
              196,
              0,
              0,
            ]);
            return (
              e.samplerate &&
                ((t[12] = (e.samplerate >>> 24) & 255),
                (t[13] = (e.samplerate >>> 16) & 255),
                (t[14] = (e.samplerate >>> 8) & 255),
                (t[15] = 255 & e.samplerate)),
              l(d.mdhd, t)
            );
          }),
          (G = function (e) {
            return l(d.mdia, z(e), X(e.type), j(e));
          }),
          (F = function (e) {
            return l(
              d.mfhd,
              new Uint8Array([
                0,
                0,
                0,
                0,
                (4278190080 & e) >> 24,
                (16711680 & e) >> 16,
                (65280 & e) >> 8,
                255 & e,
              ])
            );
          }),
          (j = function (e) {
            return l(
              d.minf,
              "video" === e.type ? l(d.vmhd, ne) : l(d.smhd, ae),
              R(),
              Y(e)
            );
          }),
          (q = function (e) {
            for (var t = e.length, i = []; t--; ) i[t] = Z(e[t]);
            return l.apply(null, [d.mvex].concat(i));
          }),
          (V = function (e) {
            e = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              2,
              0,
              1,
              95,
              144,
              (4278190080 & e) >> 24,
              (16711680 & e) >> 16,
              (65280 & e) >> 8,
              255 & e,
              0,
              1,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              64,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              255,
              255,
              255,
              255,
            ]);
            return l(d.mvhd, e);
          }),
          (K = function (e) {
            for (
              var t,
                i = e.samples || [],
                s = new Uint8Array(4 + i.length),
                r = 0;
              r < i.length;
              r++
            )
              (t = i[r].flags),
                (s[r + 4] =
                  (t.dependsOn << 4) | (t.isDependedOn << 2) | t.hasRedundancy);
            return l(d.sdtp, s);
          }),
          (Y = function (e) {
            return l(
              d.stbl,
              Q(e),
              l(d.stts, he),
              l(d.stsc, le),
              l(d.stsz, de),
              l(d.stco, t)
            );
          }),
          (Q = function (e) {
            return l(
              d.stsd,
              new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]),
              ("video" === e.type ? ue : ce)(e)
            );
          }),
          (ue = function (e) {
            for (
              var t, i, s = e.sps || [], r = e.pps || [], n = [], a = [], o = 0;
              o < s.length;
              o++
            )
              n.push((65280 & s[o].byteLength) >>> 8),
                n.push(255 & s[o].byteLength),
                (n = n.concat(Array.prototype.slice.call(s[o])));
            for (o = 0; o < r.length; o++)
              a.push((65280 & r[o].byteLength) >>> 8),
                a.push(255 & r[o].byteLength),
                (a = a.concat(Array.prototype.slice.call(r[o])));
            return (
              (t = [
                d.avc1,
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (65280 & e.width) >> 8,
                  255 & e.width,
                  (65280 & e.height) >> 8,
                  255 & e.height,
                  0,
                  72,
                  0,
                  0,
                  0,
                  72,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  19,
                  118,
                  105,
                  100,
                  101,
                  111,
                  106,
                  115,
                  45,
                  99,
                  111,
                  110,
                  116,
                  114,
                  105,
                  98,
                  45,
                  104,
                  108,
                  115,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  24,
                  17,
                  17,
                ]),
                l(
                  d.avcC,
                  new Uint8Array(
                    [
                      1,
                      e.profileIdc,
                      e.profileCompatibility,
                      e.levelIdc,
                      255,
                    ].concat([s.length], n, [r.length], a)
                  )
                ),
                l(
                  d.btrt,
                  new Uint8Array([
                    0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192,
                  ])
                ),
              ]),
              e.sarRatio &&
                ((i = e.sarRatio[0]),
                (e = e.sarRatio[1]),
                t.push(
                  l(
                    d.pasp,
                    new Uint8Array([
                      (4278190080 & i) >> 24,
                      (16711680 & i) >> 16,
                      (65280 & i) >> 8,
                      255 & i,
                      (4278190080 & e) >> 24,
                      (16711680 & e) >> 16,
                      (65280 & e) >> 8,
                      255 & e,
                    ])
                  )
                )),
              l.apply(null, t)
            );
          }),
          (ce = function (e) {
            return l(
              d.mp4a,
              new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                (65280 & e.channelcount) >> 8,
                255 & e.channelcount,
                (65280 & e.samplesize) >> 8,
                255 & e.samplesize,
                0,
                0,
                0,
                0,
                (65280 & e.samplerate) >> 8,
                255 & e.samplerate,
                0,
                0,
              ]),
              U(e)
            );
          }),
          (W = function (e) {
            e = new Uint8Array([
              0,
              0,
              0,
              7,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              (4278190080 & e.id) >> 24,
              (16711680 & e.id) >> 16,
              (65280 & e.id) >> 8,
              255 & e.id,
              0,
              0,
              0,
              0,
              (4278190080 & e.duration) >> 24,
              (16711680 & e.duration) >> 16,
              (65280 & e.duration) >> 8,
              255 & e.duration,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              64,
              0,
              0,
              0,
              (65280 & e.width) >> 8,
              255 & e.width,
              0,
              0,
              (65280 & e.height) >> 8,
              255 & e.height,
              0,
              0,
            ]);
            return l(d.tkhd, e);
          }),
          (J = function (e) {
            var t,
              i = l(
                d.tfhd,
                new Uint8Array([
                  0,
                  0,
                  0,
                  58,
                  (4278190080 & e.id) >> 24,
                  (16711680 & e.id) >> 16,
                  (65280 & e.id) >> 8,
                  255 & e.id,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                ])
              ),
              s = Math.floor(e.baseMediaDecodeTime / ve),
              r = Math.floor(e.baseMediaDecodeTime % ve),
              s = l(
                d.tfdt,
                new Uint8Array([
                  1,
                  0,
                  0,
                  0,
                  (s >>> 24) & 255,
                  (s >>> 16) & 255,
                  (s >>> 8) & 255,
                  255 & s,
                  (r >>> 24) & 255,
                  (r >>> 16) & 255,
                  (r >>> 8) & 255,
                  255 & r,
                ])
              );
            return "audio" === e.type
              ? ((t = ee(e, 92)), l(d.traf, i, s, t))
              : ((r = K(e)), (t = ee(e, r.length + 92)), l(d.traf, i, s, t, r));
          }),
          ($ = function (e) {
            return (
              (e.duration = e.duration || 4294967295), l(d.trak, W(e), G(e))
            );
          }),
          (Z = function (e) {
            var t = new Uint8Array([
              0,
              0,
              0,
              0,
              (4278190080 & e.id) >> 24,
              (16711680 & e.id) >> 16,
              (65280 & e.id) >> 8,
              255 & e.id,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              1,
            ]);
            return "video" !== e.type && (t[t.length - 1] = 0), l(d.trex, t);
          }),
          (pe = function (e, t) {
            var i = 0,
              s = 0,
              r = 0,
              n = 0;
            return (
              e.length &&
                (void 0 !== e[0].duration && (i = 1),
                void 0 !== e[0].size && (s = 2),
                void 0 !== e[0].flags && (r = 4),
                void 0 !== e[0].compositionTimeOffset) &&
                (n = 8),
              [
                0,
                0,
                i | s | r | n,
                1,
                (4278190080 & e.length) >>> 24,
                (16711680 & e.length) >>> 16,
                (65280 & e.length) >>> 8,
                255 & e.length,
                (4278190080 & t) >>> 24,
                (16711680 & t) >>> 16,
                (65280 & t) >>> 8,
                255 & t,
              ]
            );
          }),
          (me = function (e, t) {
            var i,
              s,
              r,
              n,
              a = e.samples || [];
            for (
              t += 20 + 16 * a.length,
                e = pe(a, t),
                (s = new Uint8Array(e.length + 16 * a.length)).set(e),
                i = e.length,
                n = 0;
              n < a.length;
              n++
            )
              (r = a[n]),
                (s[i++] = (4278190080 & r.duration) >>> 24),
                (s[i++] = (16711680 & r.duration) >>> 16),
                (s[i++] = (65280 & r.duration) >>> 8),
                (s[i++] = 255 & r.duration),
                (s[i++] = (4278190080 & r.size) >>> 24),
                (s[i++] = (16711680 & r.size) >>> 16),
                (s[i++] = (65280 & r.size) >>> 8),
                (s[i++] = 255 & r.size),
                (s[i++] = (r.flags.isLeading << 2) | r.flags.dependsOn),
                (s[i++] =
                  (r.flags.isDependedOn << 6) |
                  (r.flags.hasRedundancy << 4) |
                  (r.flags.paddingValue << 1) |
                  r.flags.isNonSyncSample),
                (s[i++] = 61440 & r.flags.degradationPriority),
                (s[i++] = 15 & r.flags.degradationPriority),
                (s[i++] = (4278190080 & r.compositionTimeOffset) >>> 24),
                (s[i++] = (16711680 & r.compositionTimeOffset) >>> 16),
                (s[i++] = (65280 & r.compositionTimeOffset) >>> 8),
                (s[i++] = 255 & r.compositionTimeOffset);
            return l(d.trun, s);
          }),
          (ge = function (e, t) {
            var i,
              s,
              r,
              n,
              a = e.samples || [];
            for (
              t += 20 + 8 * a.length,
                e = pe(a, t),
                (i = new Uint8Array(e.length + 8 * a.length)).set(e),
                s = e.length,
                n = 0;
              n < a.length;
              n++
            )
              (r = a[n]),
                (i[s++] = (4278190080 & r.duration) >>> 24),
                (i[s++] = (16711680 & r.duration) >>> 16),
                (i[s++] = (65280 & r.duration) >>> 8),
                (i[s++] = 255 & r.duration),
                (i[s++] = (4278190080 & r.size) >>> 24),
                (i[s++] = (16711680 & r.size) >>> 16),
                (i[s++] = (65280 & r.size) >>> 8),
                (i[s++] = 255 & r.size);
            return l(d.trun, i);
          }),
          (ee = function (e, t) {
            return ("audio" === e.type ? ge : me)(e, t);
          });
        function be(e, t) {
          var i = Ce();
          return (
            (i.dataOffset = t),
            (i.compositionTimeOffset = e.pts - e.dts),
            (i.duration = e.duration),
            (i.size = 4 * e.length),
            (i.size += e.byteLength),
            e.keyFrame &&
              ((i.flags.dependsOn = 2), (i.flags.isNonSyncSample = 0)),
            i
          );
        }
        function r(e) {
          for (var t = []; e--; ) t.push(0);
          return t;
        }
        function n(e) {
          (e = e || {}),
            n.prototype.init.call(this),
            (this.parse708captions_ =
              "boolean" != typeof e.parse708captions || e.parse708captions),
            (this.captionPackets_ = []),
            (this.ccStreams_ = [
              new _(0, 0),
              new _(0, 1),
              new _(1, 0),
              new _(1, 1),
            ]),
            this.parse708captions_ &&
              (this.cc708Stream_ = new y({
                captionServices: e.captionServices,
              })),
            this.reset(),
            this.ccStreams_.forEach(function (e) {
              e.on("data", this.trigger.bind(this, "data")),
                e.on("partialdone", this.trigger.bind(this, "partialdone")),
                e.on("done", this.trigger.bind(this, "done"));
            }, this),
            this.parse708captions_ &&
              (this.cc708Stream_.on("data", this.trigger.bind(this, "data")),
              this.cc708Stream_.on(
                "partialdone",
                this.trigger.bind(this, "partialdone")
              ),
              this.cc708Stream_.on("done", this.trigger.bind(this, "done")));
        }
        function o(e) {
          return (32 <= e && e <= 127) || (160 <= e && e <= 255);
        }
        function a(e) {
          (this.windowNum = e), this.reset();
        }
        function h(e, t, i) {
          (this.serviceNum = e),
            (this.text = ""),
            (this.currentWindow = new a(-1)),
            (this.windows = []),
            (this.stream = i),
            "string" == typeof t && this.createTextDecoder(t);
        }
        function u(e) {
          return null === e ? "" : ((e = Re[e] || e), String.fromCharCode(e));
        }
        function c() {
          for (var e = [], t = Ue + 1; t--; ) e.push("");
          return e;
        }
        function Te(e, t) {
          var i = 1;
          for (t < e && (i = -1); Math.abs(t - e) > qe; ) e += i * He;
          return e;
        }
        function Se(e) {
          var t, i;
          Se.prototype.init.call(this),
            (this.type_ = e || "shared"),
            (this.push = function (e) {
              ("shared" !== this.type_ && e.type !== this.type_) ||
                (void 0 === i && (i = e.dts),
                (e.dts = Te(e.dts, i)),
                (e.pts = Te(e.pts, i)),
                (t = e.dts),
                this.trigger("data", e));
            }),
            (this.flush = function () {
              (i = t), this.trigger("done");
            }),
            (this.endTimeline = function () {
              this.flush(), this.trigger("endedtimeline");
            }),
            (this.discontinuity = function () {
              t = i = void 0;
            }),
            (this.reset = function () {
              this.discontinuity(), this.trigger("reset");
            });
        }
        var we,
          Ee = {
            ftyp: (B = function () {
              return l(d.ftyp, te, ie, te, se);
            }),
            mdat: function (e) {
              return l(d.mdat, e);
            },
            moof: function (e, t) {
              for (var i = [], s = t.length; s--; ) i[s] = J(t[s]);
              return l.apply(null, [d.moof, F(e)].concat(i));
            },
            moov: (H = function (e) {
              for (var t = e.length, i = []; t--; ) i[t] = $(e[t]);
              return l.apply(
                null,
                [d.moov, V(4294967295)].concat(i).concat(q(e))
              );
            }),
            initSegment: function (e) {
              var t = B(),
                e = H(e),
                i = new Uint8Array(t.byteLength + e.byteLength);
              return i.set(t), i.set(e, t.byteLength), i;
            },
          },
          Ce = function () {
            return {
              size: 0,
              flags: {
                isLeading: 0,
                dependsOn: 1,
                isDependedOn: 0,
                hasRedundancy: 0,
                degradationPriority: 0,
                isNonSyncSample: 1,
              },
            };
          },
          ke = {
            groupNalsIntoFrames: function (e) {
              var t,
                i,
                s = [],
                r = [];
              for (
                r.byteLength = 0,
                  r.nalCount = 0,
                  t = s.byteLength = r.duration = 0;
                t < e.length;
                t++
              )
                "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType
                  ? (s.length &&
                      ((s.duration = i.dts - s.dts),
                      (r.byteLength += s.byteLength),
                      (r.nalCount += s.length),
                      (r.duration += s.duration),
                      r.push(s)),
                    ((s = [i]).byteLength = i.data.byteLength),
                    (s.pts = i.pts),
                    (s.dts = i.dts))
                  : ("slice_layer_without_partitioning_rbsp_idr" ===
                      i.nalUnitType && (s.keyFrame = !0),
                    (s.duration = i.dts - s.dts),
                    (s.byteLength += i.data.byteLength),
                    s.push(i));
              return (
                r.length &&
                  (!s.duration || s.duration <= 0) &&
                  (s.duration = r[r.length - 1].duration),
                (r.byteLength += s.byteLength),
                (r.nalCount += s.length),
                (r.duration += s.duration),
                r.push(s),
                r
              );
            },
            groupFramesIntoGops: function (e) {
              var t,
                i,
                s = [],
                r = [];
              for (
                s.byteLength = 0,
                  s.nalCount = 0,
                  s.duration = 0,
                  s.pts = e[0].pts,
                  s.dts = e[0].dts,
                  r.byteLength = 0,
                  r.nalCount = 0,
                  r.duration = 0,
                  r.pts = e[0].pts,
                  r.dts = e[0].dts,
                  t = 0;
                t < e.length;
                t++
              )
                (i = e[t]).keyFrame
                  ? (s.length &&
                      (r.push(s),
                      (r.byteLength += s.byteLength),
                      (r.nalCount += s.nalCount),
                      (r.duration += s.duration)),
                    ((s = [i]).nalCount = i.length),
                    (s.byteLength = i.byteLength),
                    (s.pts = i.pts),
                    (s.dts = i.dts),
                    (s.duration = i.duration))
                  : ((s.duration += i.duration),
                    (s.nalCount += i.length),
                    (s.byteLength += i.byteLength),
                    s.push(i));
              return (
                r.length &&
                  s.duration <= 0 &&
                  (s.duration = r[r.length - 1].duration),
                (r.byteLength += s.byteLength),
                (r.nalCount += s.nalCount),
                (r.duration += s.duration),
                r.push(s),
                r
              );
            },
            extendFirstKeyFrame: function (e) {
              var t;
              return (
                !e[0][0].keyFrame &&
                  1 < e.length &&
                  ((t = e.shift()),
                  (e.byteLength -= t.byteLength),
                  (e.nalCount -= t.nalCount),
                  (e[0][0].dts = t.dts),
                  (e[0][0].pts = t.pts),
                  (e[0][0].duration += t.duration)),
                e
              );
            },
            generateSampleTable: function (e, t) {
              for (var i, s, r, n = t || 0, a = [], o = 0; o < e.length; o++)
                for (s = e[o], i = 0; i < s.length; i++)
                  (r = s[i]), (n += (r = be(r, n)).size), a.push(r);
              return a;
            },
            concatenateNalData: function (e) {
              for (
                var t,
                  i,
                  s,
                  r,
                  n,
                  a = 0,
                  o = e.byteLength,
                  l = e.nalCount,
                  d = new Uint8Array(o + 4 * l),
                  h = new DataView(d.buffer),
                  u = 0;
                u < e.length;
                u++
              )
                for (s = e[u], t = 0; t < s.length; t++)
                  for (r = s[t], i = 0; i < r.length; i++)
                    (n = r[i]),
                      h.setUint32(a, n.data.byteLength),
                      d.set(n.data, (a += 4)),
                      (a += n.data.byteLength);
              return d;
            },
            generateSampleTableForFrame: function (e, t) {
              var i = [],
                e = be(e, t || 0);
              return i.push(e), i;
            },
            concatenateNalDataForFrame: function (e) {
              for (
                var t,
                  i = 0,
                  s = e.byteLength,
                  r = e.length,
                  n = new Uint8Array(s + 4 * r),
                  a = new DataView(n.buffer),
                  o = 0;
                o < e.length;
                o++
              )
                (t = e[o]),
                  a.setUint32(i, t.data.byteLength),
                  n.set(t.data, (i += 4)),
                  (i += t.data.byteLength);
              return n;
            },
          },
          p = [33, 16, 5, 32, 164, 27],
          Ie = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
          xe = function (e) {
            return 9e4 * e;
          },
          Ae = function (e, t) {
            return e * t;
          },
          Pe = function (e) {
            return e / 9e4;
          },
          Oe = function (e, t) {
            return e / t;
          },
          m = {
            ONE_SECOND_IN_TS: 9e4,
            secondsToVideoTs: xe,
            secondsToAudioTs: Ae,
            videoTsToSeconds: Pe,
            audioTsToSeconds: Oe,
            audioTsToVideoTs: function (e, t) {
              return (e / t) * 9e4;
            },
            videoTsToAudioTs: function (e, t) {
              return (e / 9e4) * t;
            },
            metadataTsToSeconds: function (e, t, i) {
              return Pe(i ? e : e - t);
            },
          },
          De = function () {
            var e, i;
            return (
              we ||
                ((e = {
                  96e3: [p, [227, 64], r(154), [56]],
                  88200: [p, [231], r(170), [56]],
                  64e3: [p, [248, 192], r(240), [56]],
                  48e3: [p, [255, 192], r(268), [55, 148, 128], r(54), [112]],
                  44100: [p, [255, 192], r(268), [55, 163, 128], r(84), [112]],
                  32e3: [p, [255, 192], r(268), [55, 234], r(226), [112]],
                  24e3: [
                    p,
                    [255, 192],
                    r(268),
                    [55, 255, 128],
                    r(268),
                    [111, 112],
                    r(126),
                    [224],
                  ],
                  16e3: [
                    p,
                    [255, 192],
                    r(268),
                    [55, 255, 128],
                    r(268),
                    [111, 255],
                    r(269),
                    [223, 108],
                    r(195),
                    [1, 192],
                  ],
                  12e3: [
                    Ie,
                    r(268),
                    [3, 127, 248],
                    r(268),
                    [6, 255, 240],
                    r(268),
                    [13, 255, 224],
                    r(268),
                    [27, 253, 128],
                    r(259),
                    [56],
                  ],
                  11025: [
                    Ie,
                    r(268),
                    [3, 127, 248],
                    r(268),
                    [6, 255, 240],
                    r(268),
                    [13, 255, 224],
                    r(268),
                    [27, 255, 192],
                    r(268),
                    [55, 175, 128],
                    r(108),
                    [112],
                  ],
                  8e3: [Ie, r(268), [3, 121, 16], r(47), [7]],
                }),
                (i = e),
                (we = Object.keys(i).reduce(function (e, t) {
                  return (
                    (e[t] = new Uint8Array(
                      i[t].reduce(function (e, t) {
                        return e.concat(t);
                      }, [])
                    )),
                    e
                  );
                }, {}))),
              we
            );
          },
          g = m,
          xe = {
            prefixWithSilence: function (e, t, i, s) {
              var r,
                n,
                a,
                o,
                l,
                d = 0,
                h = 0;
              if (
                t.length &&
                ((n = g.audioTsToVideoTs(e.baseMediaDecodeTime, e.samplerate)),
                (r = Math.ceil(g.ONE_SECOND_IN_TS / (e.samplerate / 1024))),
                i &&
                  s &&
                  ((n = n - Math.max(i, s)), (h = (d = Math.floor(n / r)) * r)),
                !(d < 1 || h > g.ONE_SECOND_IN_TS / 2))
              ) {
                for (
                  a = (a = De()[e.samplerate]) || t[0].data, o = 0;
                  o < d;
                  o++
                )
                  (l = t[0]),
                    t.splice(0, 0, { data: a, dts: l.dts - r, pts: l.pts - r });
                return (
                  (e.baseMediaDecodeTime -= Math.floor(
                    g.videoTsToAudioTs(h, e.samplerate)
                  )),
                  h
                );
              }
            },
            trimAdtsFramesByEarliestDts: function (e, t, i) {
              return t.minSegmentDts >= i
                ? e
                : ((t.minSegmentDts = 1 / 0),
                  e.filter(function (e) {
                    return (
                      e.dts >= i &&
                      ((t.minSegmentDts = Math.min(t.minSegmentDts, e.dts)),
                      (t.minSegmentPts = t.minSegmentDts),
                      !0)
                    );
                  }));
            },
            generateSampleTable: function (e) {
              for (var t, i = [], s = 0; s < e.length; s++)
                (t = e[s]), i.push({ size: t.data.byteLength, duration: 1024 });
              return i;
            },
            concatenateFrameData: function (e) {
              for (
                var t,
                  i = 0,
                  s = new Uint8Array(
                    (function (e) {
                      for (var t = 0, i = 0; i < e.length; i++)
                        t += e[i].data.byteLength;
                      return t;
                    })(e)
                  ),
                  r = 0;
                r < e.length;
                r++
              )
                (t = e[r]), s.set(t.data, i), (i += t.data.byteLength);
              return s;
            },
          },
          Le = m.ONE_SECOND_IN_TS,
          Ae = {
            clearDtsInfo: function (e) {
              delete e.minSegmentDts,
                delete e.maxSegmentDts,
                delete e.minSegmentPts,
                delete e.maxSegmentPts;
            },
            calculateTrackBaseMediaDecodeTime: function (e, t) {
              var i = e.minSegmentDts;
              return (
                t || (i -= e.timelineStartInfo.dts),
                (t = e.timelineStartInfo.baseMediaDecodeTime),
                (t += i),
                (t = Math.max(0, t)),
                "audio" === e.type &&
                  ((t *= e.samplerate / Le), (t = Math.floor(t))),
                t
              );
            },
            collectDtsInfo: function (e, t) {
              "number" == typeof t.pts &&
                (void 0 === e.timelineStartInfo.pts &&
                  (e.timelineStartInfo.pts = t.pts),
                void 0 === e.minSegmentPts
                  ? (e.minSegmentPts = t.pts)
                  : (e.minSegmentPts = Math.min(e.minSegmentPts, t.pts)),
                void 0 === e.maxSegmentPts
                  ? (e.maxSegmentPts = t.pts)
                  : (e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts))),
                "number" == typeof t.dts &&
                  (void 0 === e.timelineStartInfo.dts &&
                    (e.timelineStartInfo.dts = t.dts),
                  void 0 === e.minSegmentDts
                    ? (e.minSegmentDts = t.dts)
                    : (e.minSegmentDts = Math.min(e.minSegmentDts, t.dts)),
                  void 0 === e.maxSegmentDts
                    ? (e.maxSegmentDts = t.dts)
                    : (e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts)));
            },
          },
          Oe = {
            parseSei: function (e) {
              for (
                var t = 0,
                  i = { payloadType: -1, payloadSize: 0 },
                  s = 0,
                  r = 0;
                t < e.byteLength && 128 !== e[t];

              ) {
                for (; 255 === e[t]; ) (s += 255), t++;
                for (s += e[t++]; 255 === e[t]; ) (r += 255), t++;
                if (((r += e[t++]), !i.payload && 4 === s)) {
                  if (
                    "GA94" ===
                    String.fromCharCode(e[t + 3], e[t + 4], e[t + 5], e[t + 6])
                  ) {
                    (i.payloadType = s),
                      (i.payloadSize = r),
                      (i.payload = e.subarray(t, t + r));
                    break;
                  }
                  i.payload = void 0;
                }
                (t += r), (r = s = 0);
              }
              return i;
            },
            parseUserData: function (e) {
              return 181 !== e.payload[0] ||
                49 != ((e.payload[1] << 8) | e.payload[2]) ||
                "GA94" !==
                  String.fromCharCode(
                    e.payload[3],
                    e.payload[4],
                    e.payload[5],
                    e.payload[6]
                  ) ||
                3 !== e.payload[7]
                ? null
                : e.payload.subarray(8, e.payload.length - 1);
            },
            parseCaptionPackets: function (e, t) {
              var i,
                s,
                r,
                n,
                a = [];
              if (64 & t[0])
                for (s = 31 & t[0], i = 0; i < s; i++)
                  (n = { type: 3 & t[2 + (r = 3 * i)], pts: e }),
                    4 & t[2 + r] &&
                      ((n.ccData = (t[3 + r] << 8) | t[4 + r]), a.push(n));
              return a;
            },
            discardEmulationPreventionBytes: function (e) {
              for (var t = e.byteLength, i = [], s = 1; s < t - 2; )
                0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2]
                  ? (i.push(s + 2), (s += 2))
                  : s++;
              if (0 === i.length) return e;
              for (
                var r = t - i.length, n = new Uint8Array(r), a = 0, s = 0;
                s < r;
                a++, s++
              )
                a === i[0] && (a++, i.shift()), (n[s] = e[a]);
              return n;
            },
            USER_DATA_REGISTERED_ITU_T_T35: 4,
          },
          f = i,
          Ne = Oe,
          Me =
            (((n.prototype = new f()).push = function (e) {
              var t;
              "sei_rbsp" === e.nalUnitType &&
                (t = Ne.parseSei(e.escapedRBSP)).payload &&
                t.payloadType === Ne.USER_DATA_REGISTERED_ITU_T_T35 &&
                (t = Ne.parseUserData(t)) &&
                (e.dts < this.latestDts_
                  ? (this.ignoreNextEqualDts_ = !0)
                  : e.dts === this.latestDts_ && this.ignoreNextEqualDts_
                  ? (this.numSameDts_--,
                    this.numSameDts_ || (this.ignoreNextEqualDts_ = !1))
                  : ((t = Ne.parseCaptionPackets(e.pts, t)),
                    (this.captionPackets_ = this.captionPackets_.concat(t)),
                    this.latestDts_ !== e.dts && (this.numSameDts_ = 0),
                    this.numSameDts_++,
                    (this.latestDts_ = e.dts)));
            }),
            (n.prototype.flushCCStreams = function (t) {
              this.ccStreams_.forEach(function (e) {
                return "flush" === t ? e.flush() : e.partialFlush();
              }, this);
            }),
            (n.prototype.flushStream = function (e) {
              this.captionPackets_.length &&
                (this.captionPackets_.forEach(function (e, t) {
                  e.presortIndex = t;
                }),
                this.captionPackets_.sort(function (e, t) {
                  return e.pts === t.pts
                    ? e.presortIndex - t.presortIndex
                    : e.pts - t.pts;
                }),
                this.captionPackets_.forEach(function (e) {
                  e.type < 2
                    ? this.dispatchCea608Packet(e)
                    : this.dispatchCea708Packet(e);
                }, this),
                (this.captionPackets_.length = 0)),
                this.flushCCStreams(e);
            }),
            (n.prototype.flush = function () {
              return this.flushStream("flush");
            }),
            (n.prototype.partialFlush = function () {
              return this.flushStream("partialFlush");
            }),
            (n.prototype.reset = function () {
              (this.latestDts_ = null),
                (this.ignoreNextEqualDts_ = !1),
                (this.numSameDts_ = 0),
                (this.activeCea608Channel_ = [null, null]),
                this.ccStreams_.forEach(function (e) {
                  e.reset();
                });
            }),
            (n.prototype.dispatchCea608Packet = function (e) {
              this.setsTextOrXDSActive(e)
                ? (this.activeCea608Channel_[e.type] = null)
                : this.setsChannel1Active(e)
                ? (this.activeCea608Channel_[e.type] = 0)
                : this.setsChannel2Active(e) &&
                  (this.activeCea608Channel_[e.type] = 1),
                null !== this.activeCea608Channel_[e.type] &&
                  this.ccStreams_[
                    (e.type << 1) + this.activeCea608Channel_[e.type]
                  ].push(e);
            }),
            (n.prototype.setsChannel1Active = function (e) {
              return 4096 == (30720 & e.ccData);
            }),
            (n.prototype.setsChannel2Active = function (e) {
              return 6144 == (30720 & e.ccData);
            }),
            (n.prototype.setsTextOrXDSActive = function (e) {
              return (
                256 == (28928 & e.ccData) ||
                4138 == (30974 & e.ccData) ||
                6186 == (30974 & e.ccData)
              );
            }),
            (n.prototype.dispatchCea708Packet = function (e) {
              this.parse708captions_ && this.cc708Stream_.push(e);
            }),
            {
              127: 9834,
              4128: 32,
              4129: 160,
              4133: 8230,
              4138: 352,
              4140: 338,
              4144: 9608,
              4145: 8216,
              4146: 8217,
              4147: 8220,
              4148: 8221,
              4149: 8226,
              4153: 8482,
              4154: 353,
              4156: 339,
              4157: 8480,
              4159: 376,
              4214: 8539,
              4215: 8540,
              4216: 8541,
              4217: 8542,
              4218: 9168,
              4219: 9124,
              4220: 9123,
              4221: 9135,
              4222: 9126,
              4223: 9121,
              4256: 12600,
            }),
          y =
            ((a.prototype.reset = function () {
              this.clearText(),
                (this.pendingNewLine = !1),
                (this.winAttr = {}),
                (this.penAttr = {}),
                (this.penLoc = {}),
                (this.penColor = {}),
                (this.visible = 0),
                (this.rowLock = 0),
                (this.columnLock = 0),
                (this.priority = 0),
                (this.relativePositioning = 0),
                (this.anchorVertical = 0),
                (this.anchorHorizontal = 0),
                (this.anchorPoint = 0),
                (this.rowCount = 1),
                (this.virtualRowCount = this.rowCount + 1),
                (this.columnCount = 41),
                (this.windowStyle = 0),
                (this.penStyle = 0);
            }),
            (a.prototype.getText = function () {
              return this.rows.join("\n");
            }),
            (a.prototype.clearText = function () {
              (this.rows = [""]), (this.rowIdx = 0);
            }),
            (a.prototype.newLine = function (e) {
              for (
                this.rows.length >= this.virtualRowCount &&
                  "function" == typeof this.beforeRowOverflow &&
                  this.beforeRowOverflow(e),
                  0 < this.rows.length && (this.rows.push(""), this.rowIdx++);
                this.rows.length > this.virtualRowCount;

              )
                this.rows.shift(), this.rowIdx--;
            }),
            (a.prototype.isEmpty = function () {
              return (
                0 === this.rows.length ||
                (1 === this.rows.length && "" === this.rows[0])
              );
            }),
            (a.prototype.addText = function (e) {
              this.rows[this.rowIdx] += e;
            }),
            (a.prototype.backspace = function () {
              var e;
              this.isEmpty() ||
                ((e = this.rows[this.rowIdx]),
                (this.rows[this.rowIdx] = e.substr(0, e.length - 1)));
            }),
            (h.prototype.init = function (e, t) {
              this.startPts = e;
              for (var i = 0; i < 8; i++)
                (this.windows[i] = new a(i)),
                  "function" == typeof t &&
                    (this.windows[i].beforeRowOverflow = t);
            }),
            (h.prototype.setCurrentWindow = function (e) {
              this.currentWindow = this.windows[e];
            }),
            (h.prototype.createTextDecoder = function (t) {
              if ("undefined" == typeof TextDecoder)
                this.stream.trigger("log", {
                  level: "warn",
                  message:
                    "The `encoding` option is unsupported without TextDecoder support",
                });
              else
                try {
                  this.textDecoder_ = new TextDecoder(t);
                } catch (e) {
                  this.stream.trigger("log", {
                    level: "warn",
                    message:
                      "TextDecoder could not be created with " +
                      t +
                      " encoding. " +
                      e,
                  });
                }
            }),
            function (e) {
              (e = e || {}), y.prototype.init.call(this);
              var t,
                i = this,
                s = e.captionServices || {},
                r = {};
              Object.keys(s).forEach((e) => {
                (t = s[e]), /^SERVICE/.test(e) && (r[e] = t.encoding);
              }),
                (this.serviceEncodings = r),
                (this.current708Packet = null),
                (this.services = {}),
                (this.push = function (e) {
                  (3 === e.type || null === i.current708Packet) &&
                    i.new708Packet(),
                    i.add708Bytes(e);
                });
            }),
          Re =
            ((y.prototype = new f()),
            (y.prototype.new708Packet = function () {
              null !== this.current708Packet && this.push708Packet(),
                (this.current708Packet = { data: [], ptsVals: [] });
            }),
            (y.prototype.add708Bytes = function (e) {
              var t = e.ccData,
                i = t >>> 8,
                t = 255 & t;
              this.current708Packet.ptsVals.push(e.pts),
                this.current708Packet.data.push(i),
                this.current708Packet.data.push(t);
            }),
            (y.prototype.push708Packet = function () {
              var e,
                t = this.current708Packet,
                i = t.data,
                s = null,
                r = 0,
                n = i[r++];
              for (t.seq = n >> 6, t.sizeCode = 63 & n; r < i.length; r++)
                (e = 31 & (n = i[r++])),
                  7 === (s = n >> 5) && 0 < e && (s = i[r++]),
                  this.pushServiceBlock(s, r, e),
                  0 < e && (r += e - 1);
            }),
            (y.prototype.pushServiceBlock = function (e, t, i) {
              for (
                var s,
                  r = t,
                  n = this.current708Packet.data,
                  a = (a = this.services[e]) || this.initService(e, r);
                r < t + i && r < n.length;
                r++
              )
                (s = n[r]),
                  o(s)
                    ? (r = this.handleText(r, a))
                    : 24 === s
                    ? (r = this.multiByteCharacter(r, a))
                    : 16 === s
                    ? (r = this.extendedCommands(r, a))
                    : 128 <= s && s <= 135
                    ? (r = this.setCurrentWindow(r, a))
                    : 152 <= s && s <= 159
                    ? (r = this.defineWindow(r, a))
                    : 136 === s
                    ? (r = this.clearWindows(r, a))
                    : 140 === s
                    ? (r = this.deleteWindows(r, a))
                    : 137 === s
                    ? (r = this.displayWindows(r, a))
                    : 138 === s
                    ? (r = this.hideWindows(r, a))
                    : 139 === s
                    ? (r = this.toggleWindows(r, a))
                    : 151 === s
                    ? (r = this.setWindowAttributes(r, a))
                    : 144 === s
                    ? (r = this.setPenAttributes(r, a))
                    : 145 === s
                    ? (r = this.setPenColor(r, a))
                    : 146 === s
                    ? (r = this.setPenLocation(r, a))
                    : 143 === s
                    ? (a = this.reset(r, a))
                    : 8 === s
                    ? a.currentWindow.backspace()
                    : 12 === s
                    ? a.currentWindow.clearText()
                    : 13 === s
                    ? (a.currentWindow.pendingNewLine = !0)
                    : 14 === s
                    ? a.currentWindow.clearText()
                    : 141 === s && r++;
            }),
            (y.prototype.extendedCommands = function (e, t) {
              var i = this.current708Packet.data[++e];
              return (e = o(i) ? this.handleText(e, t, { isExtended: !0 }) : e);
            }),
            (y.prototype.getPts = function (e) {
              return this.current708Packet.ptsVals[Math.floor(e / 2)];
            }),
            (y.prototype.initService = function (t, e) {
              var i,
                s = "SERVICE" + t,
                r = this;
              return (
                s in this.serviceEncodings && (i = this.serviceEncodings[s]),
                (this.services[t] = new h(t, i, r)),
                this.services[t].init(this.getPts(e), function (e) {
                  r.flushDisplayed(e, r.services[t]);
                }),
                this.services[t]
              );
            }),
            (y.prototype.handleText = function (e, t, i) {
              var s,
                r = i && i.isExtended,
                i = i && i.isMultiByte,
                n = this.current708Packet.data,
                a = r ? 4096 : 0,
                o = n[e],
                n = n[e + 1],
                l = t.currentWindow,
                n =
                  t.textDecoder_ && !r
                    ? (i ? ((s = [o, n]), e++) : (s = [o]),
                      t.textDecoder_.decode(new Uint8Array(s)))
                    : ((i = Me[(r = a | o)] || r),
                      4096 & r && r === i ? "" : String.fromCharCode(i));
              return (
                l.pendingNewLine && !l.isEmpty() && l.newLine(this.getPts(e)),
                (l.pendingNewLine = !1),
                l.addText(n),
                e
              );
            }),
            (y.prototype.multiByteCharacter = function (e, t) {
              var i = this.current708Packet.data,
                s = i[e + 1],
                i = i[e + 2];
              return (e =
                o(s) && o(i)
                  ? this.handleText(++e, t, { isMultiByte: !0 })
                  : e);
            }),
            (y.prototype.setCurrentWindow = function (e, t) {
              var i = this.current708Packet.data[e];
              return t.setCurrentWindow(7 & i), e;
            }),
            (y.prototype.defineWindow = function (e, t) {
              var i = this.current708Packet.data,
                s = i[e],
                t = (t.setCurrentWindow(7 & s), t.currentWindow),
                s = i[++e];
              return (
                (t.visible = (32 & s) >> 5),
                (t.rowLock = (16 & s) >> 4),
                (t.columnLock = (8 & s) >> 3),
                (t.priority = 7 & s),
                (s = i[++e]),
                (t.relativePositioning = (128 & s) >> 7),
                (t.anchorVertical = 127 & s),
                (s = i[++e]),
                (t.anchorHorizontal = s),
                (s = i[++e]),
                (t.anchorPoint = (240 & s) >> 4),
                (t.rowCount = 15 & s),
                (s = i[++e]),
                (t.columnCount = 63 & s),
                (s = i[++e]),
                (t.windowStyle = (56 & s) >> 3),
                (t.penStyle = 7 & s),
                (t.virtualRowCount = t.rowCount + 1),
                e
              );
            }),
            (y.prototype.setWindowAttributes = function (e, t) {
              var i = this.current708Packet.data,
                t = (i[e], t.currentWindow.winAttr),
                s = i[++e];
              return (
                (t.fillOpacity = (192 & s) >> 6),
                (t.fillRed = (48 & s) >> 4),
                (t.fillGreen = (12 & s) >> 2),
                (t.fillBlue = 3 & s),
                (s = i[++e]),
                (t.borderType = (192 & s) >> 6),
                (t.borderRed = (48 & s) >> 4),
                (t.borderGreen = (12 & s) >> 2),
                (t.borderBlue = 3 & s),
                (s = i[++e]),
                (t.borderType += (128 & s) >> 5),
                (t.wordWrap = (64 & s) >> 6),
                (t.printDirection = (48 & s) >> 4),
                (t.scrollDirection = (12 & s) >> 2),
                (t.justify = 3 & s),
                (s = i[++e]),
                (t.effectSpeed = (240 & s) >> 4),
                (t.effectDirection = (12 & s) >> 2),
                (t.displayEffect = 3 & s),
                e
              );
            }),
            (y.prototype.flushDisplayed = function (e, t) {
              for (var i = [], s = 0; s < 8; s++)
                t.windows[s].visible &&
                  !t.windows[s].isEmpty() &&
                  i.push(t.windows[s].getText());
              (t.endPts = e),
                (t.text = i.join("\n\n")),
                this.pushCaption(t),
                (t.startPts = e);
            }),
            (y.prototype.pushCaption = function (e) {
              "" !== e.text &&
                (this.trigger("data", {
                  startPts: e.startPts,
                  endPts: e.endPts,
                  text: e.text,
                  stream: "cc708_" + e.serviceNum,
                }),
                (e.text = ""),
                (e.startPts = e.endPts));
            }),
            (y.prototype.displayWindows = function (e, t) {
              var i = this.current708Packet.data[++e],
                s = this.getPts(e);
              this.flushDisplayed(s, t);
              for (var r = 0; r < 8; r++)
                i & (1 << r) && (t.windows[r].visible = 1);
              return e;
            }),
            (y.prototype.hideWindows = function (e, t) {
              var i = this.current708Packet.data[++e],
                s = this.getPts(e);
              this.flushDisplayed(s, t);
              for (var r = 0; r < 8; r++)
                i & (1 << r) && (t.windows[r].visible = 0);
              return e;
            }),
            (y.prototype.toggleWindows = function (e, t) {
              var i = this.current708Packet.data[++e],
                s = this.getPts(e);
              this.flushDisplayed(s, t);
              for (var r = 0; r < 8; r++)
                i & (1 << r) && (t.windows[r].visible ^= 1);
              return e;
            }),
            (y.prototype.clearWindows = function (e, t) {
              var i = this.current708Packet.data[++e],
                s = this.getPts(e);
              this.flushDisplayed(s, t);
              for (var r = 0; r < 8; r++)
                i & (1 << r) && t.windows[r].clearText();
              return e;
            }),
            (y.prototype.deleteWindows = function (e, t) {
              var i = this.current708Packet.data[++e],
                s = this.getPts(e);
              this.flushDisplayed(s, t);
              for (var r = 0; r < 8; r++) i & (1 << r) && t.windows[r].reset();
              return e;
            }),
            (y.prototype.setPenAttributes = function (e, t) {
              var i = this.current708Packet.data,
                t = (i[e], t.currentWindow.penAttr),
                s = i[++e];
              return (
                (t.textTag = (240 & s) >> 4),
                (t.offset = (12 & s) >> 2),
                (t.penSize = 3 & s),
                (s = i[++e]),
                (t.italics = (128 & s) >> 7),
                (t.underline = (64 & s) >> 6),
                (t.edgeType = (56 & s) >> 3),
                (t.fontStyle = 7 & s),
                e
              );
            }),
            (y.prototype.setPenColor = function (e, t) {
              var i = this.current708Packet.data,
                t = (i[e], t.currentWindow.penColor),
                s = i[++e];
              return (
                (t.fgOpacity = (192 & s) >> 6),
                (t.fgRed = (48 & s) >> 4),
                (t.fgGreen = (12 & s) >> 2),
                (t.fgBlue = 3 & s),
                (s = i[++e]),
                (t.bgOpacity = (192 & s) >> 6),
                (t.bgRed = (48 & s) >> 4),
                (t.bgGreen = (12 & s) >> 2),
                (t.bgBlue = 3 & s),
                (s = i[++e]),
                (t.edgeRed = (48 & s) >> 4),
                (t.edgeGreen = (12 & s) >> 2),
                (t.edgeBlue = 3 & s),
                e
              );
            }),
            (y.prototype.setPenLocation = function (e, t) {
              var i = this.current708Packet.data,
                s = (i[e], t.currentWindow.penLoc);
              return (
                (t.currentWindow.pendingNewLine = !0),
                (t = i[++e]),
                (s.row = 15 & t),
                (t = i[++e]),
                (s.column = 63 & t),
                e
              );
            }),
            (y.prototype.reset = function (e, t) {
              var i = this.getPts(e);
              return (
                this.flushDisplayed(i, t), this.initService(t.serviceNum, e)
              );
            }),
            {
              42: 225,
              92: 233,
              94: 237,
              95: 243,
              96: 250,
              123: 231,
              124: 247,
              125: 209,
              126: 241,
              127: 9608,
              304: 174,
              305: 176,
              306: 189,
              307: 191,
              308: 8482,
              309: 162,
              310: 163,
              311: 9834,
              312: 224,
              313: 160,
              314: 232,
              315: 226,
              316: 234,
              317: 238,
              318: 244,
              319: 251,
              544: 193,
              545: 201,
              546: 211,
              547: 218,
              548: 220,
              549: 252,
              550: 8216,
              551: 161,
              552: 42,
              553: 39,
              554: 8212,
              555: 169,
              556: 8480,
              557: 8226,
              558: 8220,
              559: 8221,
              560: 192,
              561: 194,
              562: 199,
              563: 200,
              564: 202,
              565: 203,
              566: 235,
              567: 206,
              568: 207,
              569: 239,
              570: 212,
              571: 217,
              572: 249,
              573: 219,
              574: 171,
              575: 187,
              800: 195,
              801: 227,
              802: 205,
              803: 204,
              804: 236,
              805: 210,
              806: 242,
              807: 213,
              808: 245,
              809: 123,
              810: 125,
              811: 92,
              812: 94,
              813: 95,
              814: 124,
              815: 126,
              816: 196,
              817: 228,
              818: 214,
              819: 246,
              820: 223,
              821: 165,
              822: 164,
              823: 9474,
              824: 197,
              825: 229,
              826: 216,
              827: 248,
              828: 9484,
              829: 9488,
              830: 9492,
              831: 9496,
            }),
          Ue = 14,
          Be = [
            4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096,
            4864, 4896, 5120, 5152,
          ],
          _ = function (e, t) {
            _.prototype.init.call(this),
              (this.field_ = e || 0),
              (this.dataChannel_ = t || 0),
              (this.name_ =
                "CC" + (1 + ((this.field_ << 1) | this.dataChannel_))),
              this.setConstants(),
              this.reset(),
              (this.push = function (e) {
                var t,
                  i,
                  s,
                  r,
                  n = 32639 & e.ccData;
                n === this.lastControlCode_
                  ? (this.lastControlCode_ = null)
                  : (4096 == (61440 & n)
                      ? (this.lastControlCode_ = n)
                      : n !== this.PADDING_ && (this.lastControlCode_ = null),
                    (t = n >>> 8),
                    (i = 255 & n),
                    n !== this.PADDING_ &&
                      (n === this.RESUME_CAPTION_LOADING_
                        ? (this.mode_ = "popOn")
                        : n === this.END_OF_CAPTION_
                        ? ((this.mode_ = "popOn"),
                          this.clearFormatting(e.pts),
                          this.flushDisplayed(e.pts),
                          (r = this.displayed_),
                          (this.displayed_ = this.nonDisplayed_),
                          (this.nonDisplayed_ = r),
                          (this.startPts_ = e.pts))
                        : n === this.ROLL_UP_2_ROWS_
                        ? ((this.rollUpRows_ = 2), this.setRollUp(e.pts))
                        : n === this.ROLL_UP_3_ROWS_
                        ? ((this.rollUpRows_ = 3), this.setRollUp(e.pts))
                        : n === this.ROLL_UP_4_ROWS_
                        ? ((this.rollUpRows_ = 4), this.setRollUp(e.pts))
                        : n === this.CARRIAGE_RETURN_
                        ? (this.clearFormatting(e.pts),
                          this.flushDisplayed(e.pts),
                          this.shiftRowsUp_(),
                          (this.startPts_ = e.pts))
                        : n === this.BACKSPACE_
                        ? "popOn" === this.mode_
                          ? (this.nonDisplayed_[this.row_] = this.nonDisplayed_[
                              this.row_
                            ].slice(0, -1))
                          : (this.displayed_[this.row_] = this.displayed_[
                              this.row_
                            ].slice(0, -1))
                        : n === this.ERASE_DISPLAYED_MEMORY_
                        ? (this.flushDisplayed(e.pts), (this.displayed_ = c()))
                        : n === this.ERASE_NON_DISPLAYED_MEMORY_
                        ? (this.nonDisplayed_ = c())
                        : n === this.RESUME_DIRECT_CAPTIONING_
                        ? ("paintOn" !== this.mode_ &&
                            (this.flushDisplayed(e.pts),
                            (this.displayed_ = c())),
                          (this.mode_ = "paintOn"),
                          (this.startPts_ = e.pts))
                        : this.isSpecialCharacter(t, i)
                        ? ((s = u((t = (3 & t) << 8) | i)),
                          this[this.mode_](e.pts, s),
                          this.column_++)
                        : this.isExtCharacter(t, i)
                        ? ("popOn" === this.mode_
                            ? (this.nonDisplayed_[this.row_] =
                                this.nonDisplayed_[this.row_].slice(0, -1))
                            : (this.displayed_[this.row_] = this.displayed_[
                                this.row_
                              ].slice(0, -1)),
                          (s = u((t = (3 & t) << 8) | i)),
                          this[this.mode_](e.pts, s),
                          this.column_++)
                        : this.isMidRowCode(t, i)
                        ? (this.clearFormatting(e.pts),
                          this[this.mode_](e.pts, " "),
                          this.column_++,
                          14 == (14 & i) && this.addFormatting(e.pts, ["i"]),
                          1 == (1 & i) && this.addFormatting(e.pts, ["u"]))
                        : this.isOffsetControlCode(t, i)
                        ? (this.column_ += 3 & i)
                        : this.isPAC(t, i)
                        ? ((r = Be.indexOf(7968 & n)),
                          "rollUp" === this.mode_ &&
                            (r - this.rollUpRows_ + 1 < 0 &&
                              (r = this.rollUpRows_ - 1),
                            this.setRollUp(e.pts, r)),
                          r !== this.row_ &&
                            (this.clearFormatting(e.pts), (this.row_ = r)),
                          1 & i &&
                            -1 === this.formatting_.indexOf("u") &&
                            this.addFormatting(e.pts, ["u"]),
                          16 == (16 & n) &&
                            (this.column_ = 4 * ((14 & n) >> 1)),
                          this.isColorPAC(i) &&
                            14 == (14 & i) &&
                            this.addFormatting(e.pts, ["i"]))
                        : this.isNormalChar(t) &&
                          (0 === i && (i = null),
                          (s = u(t)),
                          (s += u(i)),
                          this[this.mode_](e.pts, s),
                          (this.column_ += s.length))));
              });
          },
          f =
            ((_.prototype = new f()),
            (_.prototype.flushDisplayed = function (e) {
              var t = this.displayed_
                .map(function (e, t) {
                  try {
                    return e.trim();
                  } catch (e) {
                    return (
                      this.trigger("log", {
                        level: "warn",
                        message:
                          "Skipping a malformed 608 caption at index " +
                          t +
                          ".",
                      }),
                      ""
                    );
                  }
                }, this)
                .join("\n")
                .replace(/^\n+|\n+$/g, "");
              t.length &&
                this.trigger("data", {
                  startPts: this.startPts_,
                  endPts: e,
                  text: t,
                  stream: this.name_,
                });
            }),
            (_.prototype.reset = function () {
              (this.mode_ = "popOn"),
                (this.topRow_ = 0),
                (this.startPts_ = 0),
                (this.displayed_ = c()),
                (this.nonDisplayed_ = c()),
                (this.lastControlCode_ = null),
                (this.column_ = 0),
                (this.row_ = Ue),
                (this.rollUpRows_ = 2),
                (this.formatting_ = []);
            }),
            (_.prototype.setConstants = function () {
              0 === this.dataChannel_
                ? ((this.BASE_ = 16),
                  (this.EXT_ = 17),
                  (this.CONTROL_ = (20 | this.field_) << 8),
                  (this.OFFSET_ = 23))
                : 1 === this.dataChannel_ &&
                  ((this.BASE_ = 24),
                  (this.EXT_ = 25),
                  (this.CONTROL_ = (28 | this.field_) << 8),
                  (this.OFFSET_ = 31)),
                (this.PADDING_ = 0),
                (this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_),
                (this.END_OF_CAPTION_ = 47 | this.CONTROL_),
                (this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_),
                (this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_),
                (this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_),
                (this.CARRIAGE_RETURN_ = 45 | this.CONTROL_),
                (this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_),
                (this.BACKSPACE_ = 33 | this.CONTROL_),
                (this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_),
                (this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_);
            }),
            (_.prototype.isSpecialCharacter = function (e, t) {
              return e === this.EXT_ && 48 <= t && t <= 63;
            }),
            (_.prototype.isExtCharacter = function (e, t) {
              return (
                (e === this.EXT_ + 1 || e === this.EXT_ + 2) &&
                32 <= t &&
                t <= 63
              );
            }),
            (_.prototype.isMidRowCode = function (e, t) {
              return e === this.EXT_ && 32 <= t && t <= 47;
            }),
            (_.prototype.isOffsetControlCode = function (e, t) {
              return e === this.OFFSET_ && 33 <= t && t <= 35;
            }),
            (_.prototype.isPAC = function (e, t) {
              return (
                e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127
              );
            }),
            (_.prototype.isColorPAC = function (e) {
              return (64 <= e && e <= 79) || (96 <= e && e <= 127);
            }),
            (_.prototype.isNormalChar = function (e) {
              return 32 <= e && e <= 127;
            }),
            (_.prototype.setRollUp = function (e, t) {
              if (
                ("rollUp" !== this.mode_ &&
                  ((this.row_ = Ue),
                  (this.mode_ = "rollUp"),
                  this.flushDisplayed(e),
                  (this.nonDisplayed_ = c()),
                  (this.displayed_ = c())),
                void 0 !== t && t !== this.row_)
              )
                for (var i = 0; i < this.rollUpRows_; i++)
                  (this.displayed_[t - i] = this.displayed_[this.row_ - i]),
                    (this.displayed_[this.row_ - i] = "");
              void 0 === t && (t = this.row_),
                (this.topRow_ = t - this.rollUpRows_ + 1);
            }),
            (_.prototype.addFormatting = function (e, t) {
              this.formatting_ = this.formatting_.concat(t);
              t = t.reduce(function (e, t) {
                return e + "<" + t + ">";
              }, "");
              this[this.mode_](e, t);
            }),
            (_.prototype.clearFormatting = function (e) {
              var t;
              this.formatting_.length &&
                ((t = this.formatting_.reverse().reduce(function (e, t) {
                  return e + "</" + t + ">";
                }, "")),
                (this.formatting_ = []),
                this[this.mode_](e, t));
            }),
            (_.prototype.popOn = function (e, t) {
              var i = this.nonDisplayed_[this.row_];
              this.nonDisplayed_[this.row_] = i += t;
            }),
            (_.prototype.rollUp = function (e, t) {
              var i = this.displayed_[this.row_];
              this.displayed_[this.row_] = i += t;
            }),
            (_.prototype.shiftRowsUp_ = function () {
              for (var e = 0; e < this.topRow_; e++) this.displayed_[e] = "";
              for (e = this.row_ + 1; e < Ue + 1; e++) this.displayed_[e] = "";
              for (e = this.topRow_; e < this.row_; e++)
                this.displayed_[e] = this.displayed_[e + 1];
              this.displayed_[this.row_] = "";
            }),
            (_.prototype.paintOn = function (e, t) {
              var i = this.displayed_[this.row_];
              this.displayed_[this.row_] = i += t;
            }),
            { CaptionStream: n, Cea608Stream: _, Cea708Stream: y }),
          Fe = {
            H264_STREAM_TYPE: 27,
            ADTS_STREAM_TYPE: 15,
            METADATA_STREAM_TYPE: 21,
          },
          je = i,
          He = 8589934592,
          qe = 4294967296;
        Se.prototype = new je();
        function Ve(e, t, i) {
          for (var s = "", r = t; r < i; r++)
            s += "%" + ("00" + e[r].toString(16)).slice(-2);
          return s;
        }
        function v(e, t, i) {
          return decodeURIComponent(Ve(e, t, i));
        }
        function b(e, t, i) {
          return unescape(Ve(e, t, i));
        }
        function $e(e) {
          return (e[0] << 21) | (e[1] << 14) | (e[2] << 7) | e[3];
        }
        var We,
          Ge,
          ze,
          je = Se,
          Xe = Te,
          T = i,
          Ke = Fe,
          Ye = (e, t, i) => {
            if (e) for (var s = i; s < e.length; s++) if (e[s] === t) return s;
            return -1;
          },
          Qe = 3,
          Je = {
            APIC: function (e) {
              var t,
                i = 1;
              e.data[0] !== Qe ||
                (t = Ye(e.data, 0, 1)) < 0 ||
                ((e.mimeType = b(e.data, 1, t)),
                (e.pictureType = e.data[(i = t + 1)]),
                (t = Ye(e.data, 0, ++i)) < 0) ||
                ((e.description = v(e.data, i, t)),
                (i = t + 1),
                "--\x3e" === e.mimeType
                  ? (e.url = b(e.data, i, e.data.length))
                  : (e.pictureData = e.data.subarray(i, e.data.length)));
            },
            "T*": function (e) {
              e.data[0] === Qe &&
                ((e.value = v(e.data, 1, e.data.length).replace(/\0*$/, "")),
                (e.values = e.value.split("\0")));
            },
            TXXX: function (e) {
              var t;
              e.data[0] === Qe &&
                -1 !== (t = Ye(e.data, 0, 1)) &&
                ((e.description = v(e.data, 1, t)),
                (e.value = v(e.data, t + 1, e.data.length).replace(/\0*$/, "")),
                (e.data = e.value));
            },
            "W*": function (e) {
              e.url = b(e.data, 0, e.data.length).replace(/\0.*$/, "");
            },
            WXXX: function (e) {
              var t;
              e.data[0] === Qe &&
                -1 !== (t = Ye(e.data, 0, 1)) &&
                ((e.description = v(e.data, 1, t)),
                (e.url = b(e.data, t + 1, e.data.length).replace(/\0.*$/, "")));
            },
            PRIV: function (e) {
              for (var t = 0; t < e.data.length; t++)
                if (0 === e.data[t]) {
                  e.owner = b(e.data, 0, t);
                  break;
                }
              (e.privateData = e.data.subarray(t + 1)),
                (e.data = e.privateData);
            },
          },
          Ze = function (e) {
            var t,
              i = { descriptor: e && e.descriptor },
              l = 0,
              d = [],
              h = 0;
            if (
              (Ze.prototype.init.call(this),
              (this.dispatchType = Ke.METADATA_STREAM_TYPE.toString(16)),
              i.descriptor)
            )
              for (t = 0; t < i.descriptor.length; t++)
                this.dispatchType += (
                  "00" + i.descriptor[t].toString(16)
                ).slice(-2);
            this.push = function (e) {
              var t, i, s, r, n, a, o;
              if ("timed-metadata" === e.type)
                if (
                  (e.dataAlignmentIndicator && ((h = 0), (d.length = 0)),
                  0 === d.length &&
                    (e.data.length < 10 ||
                      e.data[0] !== "I".charCodeAt(0) ||
                      e.data[1] !== "D".charCodeAt(0) ||
                      e.data[2] !== "3".charCodeAt(0)))
                )
                  this.trigger("log", {
                    level: "warn",
                    message: "Skipping unrecognized metadata packet",
                  });
                else if (
                  (d.push(e),
                  (h += e.data.byteLength),
                  1 === d.length &&
                    ((l = $e(e.data.subarray(6, 10))), (l += 10)),
                  !(h < l))
                ) {
                  for (
                    t = {
                      data: new Uint8Array(l),
                      frames: [],
                      pts: d[0].pts,
                      dts: d[0].dts,
                    },
                      r = 0;
                    r < l;

                  )
                    t.data.set(d[0].data.subarray(0, l - r), r),
                      (r += d[0].data.byteLength),
                      (h -= d[0].data.byteLength),
                      d.shift();
                  (i = 10),
                    64 & t.data[5] &&
                      ((i = (i += 4) + $e(t.data.subarray(10, 14))),
                      (l -= $e(t.data.subarray(16, 20))));
                  do {
                    if ((s = $e(t.data.subarray(i + 4, i + 8))) < 1) {
                      this.trigger("log", {
                        level: "warn",
                        message:
                          "Malformed ID3 frame encountered. Skipping remaining metadata parsing.",
                      });
                      break;
                    }
                  } while (
                    (((o = {
                      id: String.fromCharCode(
                        t.data[i],
                        t.data[i + 1],
                        t.data[i + 2],
                        t.data[i + 3]
                      ),
                      data: t.data.subarray(i + 10, i + s + 10),
                    }).key = o.id),
                    Je[o.id]
                      ? Je[o.id](o)
                      : "T" === o.id[0]
                      ? Je["T*"](o)
                      : "W" === o.id[0] && Je["W*"](o),
                    "com.apple.streaming.transportStreamTimestamp" ===
                      o.owner &&
                      ((a =
                        ((1 & (n = o.data)[3]) << 30) |
                        (n[4] << 22) |
                        (n[5] << 14) |
                        (n[6] << 6) |
                        (n[7] >>> 2)),
                      (a = (a *= 4) + (3 & n[7])),
                      (o.timeStamp = a),
                      void 0 === t.pts &&
                        void 0 === t.dts &&
                        ((t.pts = o.timeStamp), (t.dts = o.timeStamp)),
                      this.trigger("timestamp", o)),
                    t.frames.push(o),
                    (i = i + 10 + s) < l)
                  );
                  this.trigger("data", t);
                }
            };
          },
          T = ((Ze.prototype = new T()), Ze),
          S = i,
          et = f,
          w = Fe,
          tt = function () {
            var r = new Uint8Array(188),
              n = 0;
            tt.prototype.init.call(this),
              (this.push = function (e) {
                var t,
                  i = 0,
                  s = 188;
                for (
                  n
                    ? ((t = new Uint8Array(e.byteLength + n)).set(
                        r.subarray(0, n)
                      ),
                      t.set(e, n),
                      (n = 0))
                    : (t = e);
                  s < t.byteLength;

                )
                  71 === t[i] && 71 === t[s]
                    ? (this.trigger("data", t.subarray(i, s)),
                      (i += 188),
                      (s += 188))
                    : (i++, s++);
                i < t.byteLength &&
                  (r.set(t.subarray(i), 0), (n = t.byteLength - i));
              }),
              (this.flush = function () {
                188 === n && 71 === r[0] && (this.trigger("data", r), (n = 0)),
                  this.trigger("done");
              }),
              (this.endTimeline = function () {
                this.flush(), this.trigger("endedtimeline");
              }),
              (this.reset = function () {
                (n = 0), this.trigger("reset");
              });
          },
          it =
            ((tt.prototype = new S()),
            ((We = function () {
              var s, r, n, a;
              We.prototype.init.call(this),
                ((a = this).packetsWaitingForPmt = []),
                (this.programMapTable = void 0),
                (s = function (e, t) {
                  var i = 0;
                  t.payloadUnitStartIndicator && (i += e[i] + 1),
                    ("pat" === t.type ? r : n)(e.subarray(i), t);
                }),
                (r = function (e, t) {
                  (t.section_number = e[7]),
                    (t.last_section_number = e[8]),
                    (a.pmtPid = ((31 & e[10]) << 8) | e[11]),
                    (t.pmtPid = a.pmtPid);
                }),
                (n = function (e, t) {
                  var i, s;
                  if (1 & e[5]) {
                    for (
                      a.programMapTable = {
                        video: null,
                        audio: null,
                        "timed-metadata": {},
                      },
                        i = 3 + (((15 & e[1]) << 8) | e[2]) - 4,
                        s = 12 + (((15 & e[10]) << 8) | e[11]);
                      s < i;

                    ) {
                      var r = e[s],
                        n = ((31 & e[s + 1]) << 8) | e[s + 2];
                      r === w.H264_STREAM_TYPE &&
                      null === a.programMapTable.video
                        ? (a.programMapTable.video = n)
                        : r === w.ADTS_STREAM_TYPE &&
                          null === a.programMapTable.audio
                        ? (a.programMapTable.audio = n)
                        : r === w.METADATA_STREAM_TYPE &&
                          (a.programMapTable["timed-metadata"][n] = r),
                        (s += 5 + (((15 & e[s + 3]) << 8) | e[s + 4]));
                    }
                    t.programMapTable = a.programMapTable;
                  }
                }),
                (this.push = function (e) {
                  var t = {},
                    i = 4;
                  if (
                    ((t.payloadUnitStartIndicator = !!(64 & e[1])),
                    (t.pid = 31 & e[1]),
                    (t.pid <<= 8),
                    (t.pid |= e[2]),
                    1 < (48 & e[3]) >>> 4 && (i += e[i] + 1),
                    0 === t.pid)
                  )
                    (t.type = "pat"),
                      s(e.subarray(i), t),
                      this.trigger("data", t);
                  else if (t.pid === this.pmtPid)
                    for (
                      t.type = "pmt",
                        s(e.subarray(i), t),
                        this.trigger("data", t);
                      this.packetsWaitingForPmt.length;

                    )
                      this.processPes_.apply(
                        this,
                        this.packetsWaitingForPmt.shift()
                      );
                  else
                    void 0 === this.programMapTable
                      ? this.packetsWaitingForPmt.push([e, i, t])
                      : this.processPes_(e, i, t);
                }),
                (this.processPes_ = function (e, t, i) {
                  i.pid === this.programMapTable.video
                    ? (i.streamType = w.H264_STREAM_TYPE)
                    : i.pid === this.programMapTable.audio
                    ? (i.streamType = w.ADTS_STREAM_TYPE)
                    : (i.streamType =
                        this.programMapTable["timed-metadata"][i.pid]),
                    (i.type = "pes"),
                    (i.data = e.subarray(t)),
                    this.trigger("data", i);
                });
            }).prototype = new S()),
            (We.STREAM_TYPES = { h264: 27, adts: 15 }),
            ((Ge = function () {
              function s(e, t, i) {
                var s,
                  r = new Uint8Array(e.size),
                  n = { type: t },
                  a = 0,
                  o = 0;
                if (e.data.length && !(e.size < 9)) {
                  for (n.trackId = e.data[0].pid, a = 0; a < e.data.length; a++)
                    (s = e.data[a]), r.set(s.data, o), (o += s.data.byteLength);
                  d(r, n),
                    (t = "video" === t || n.packetLength <= e.size),
                    (i || t) && ((e.size = 0), (e.data.length = 0)),
                    t && l.trigger("data", n);
                }
              }
              var t,
                l = this,
                r = !1,
                n = { data: [], size: 0 },
                a = { data: [], size: 0 },
                o = { data: [], size: 0 },
                d = function (e, t) {
                  var i = (e[0] << 16) | (e[1] << 8) | e[2];
                  (t.data = new Uint8Array()),
                    1 == i &&
                      ((t.packetLength = 6 + ((e[4] << 8) | e[5])),
                      (t.dataAlignmentIndicator = 0 != (4 & e[6])),
                      192 & (i = e[7]) &&
                        ((t.pts =
                          ((14 & e[9]) << 27) |
                          ((255 & e[10]) << 20) |
                          ((254 & e[11]) << 12) |
                          ((255 & e[12]) << 5) |
                          ((254 & e[13]) >>> 3)),
                        (t.pts *= 4),
                        (t.pts += (6 & e[13]) >>> 1),
                        (t.dts = t.pts),
                        64 & i) &&
                        ((t.dts =
                          ((14 & e[14]) << 27) |
                          ((255 & e[15]) << 20) |
                          ((254 & e[16]) << 12) |
                          ((255 & e[17]) << 5) |
                          ((254 & e[18]) >>> 3)),
                        (t.dts *= 4),
                        (t.dts += (6 & e[18]) >>> 1)),
                      (t.data = e.subarray(9 + e[8])));
                };
              Ge.prototype.init.call(this),
                (this.push = function (i) {
                  ({
                    pat: function () {},
                    pes: function () {
                      var e, t;
                      switch (i.streamType) {
                        case w.H264_STREAM_TYPE:
                          (e = n), (t = "video");
                          break;
                        case w.ADTS_STREAM_TYPE:
                          (e = a), (t = "audio");
                          break;
                        case w.METADATA_STREAM_TYPE:
                          (e = o), (t = "timed-metadata");
                          break;
                        default:
                          return;
                      }
                      i.payloadUnitStartIndicator && s(e, t, !0),
                        e.data.push(i),
                        (e.size += i.data.byteLength);
                    },
                    pmt: function () {
                      var e = { type: "metadata", tracks: [] };
                      null !== (t = i.programMapTable).video &&
                        e.tracks.push({
                          timelineStartInfo: { baseMediaDecodeTime: 0 },
                          id: +t.video,
                          codec: "avc",
                          type: "video",
                        }),
                        null !== t.audio &&
                          e.tracks.push({
                            timelineStartInfo: { baseMediaDecodeTime: 0 },
                            id: +t.audio,
                            codec: "adts",
                            type: "audio",
                          }),
                        (r = !0),
                        l.trigger("data", e);
                    },
                  }[i.type]());
                }),
                (this.reset = function () {
                  (n.size = 0),
                    (n.data.length = 0),
                    (a.size = 0),
                    (a.data.length = 0),
                    this.trigger("reset");
                }),
                (this.flushStreams_ = function () {
                  s(n, "video"), s(a, "audio"), s(o, "timed-metadata");
                }),
                (this.flush = function () {
                  var e;
                  !r &&
                    t &&
                    ((e = { type: "metadata", tracks: [] }),
                    null !== t.video &&
                      e.tracks.push({
                        timelineStartInfo: { baseMediaDecodeTime: 0 },
                        id: +t.video,
                        codec: "avc",
                        type: "video",
                      }),
                    null !== t.audio &&
                      e.tracks.push({
                        timelineStartInfo: { baseMediaDecodeTime: 0 },
                        id: +t.audio,
                        codec: "adts",
                        type: "audio",
                      }),
                    l.trigger("data", e)),
                    (r = !1),
                    this.flushStreams_(),
                    this.trigger("done");
                });
            }).prototype = new S()),
            {
              PAT_PID: 0,
              MP2T_PACKET_LENGTH: 188,
              TransportPacketStream: tt,
              TransportParseStream: We,
              ElementaryStream: Ge,
              TimestampRolloverStream: je,
              CaptionStream: et.CaptionStream,
              Cea608Stream: et.Cea608Stream,
              Cea708Stream: et.Cea708Stream,
              MetadataStream: T,
            });
        for (ze in w) w.hasOwnProperty(ze) && (it[ze] = w[ze]);
        var st,
          rt,
          S = it,
          je = i,
          nt = m.ONE_SECOND_IN_TS,
          at = [
            96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3,
            11025, 8e3, 7350,
          ],
          ot = function (l) {
            var d,
              h = 0;
            ot.prototype.init.call(this),
              (this.skipWarn_ = function (e, t) {
                this.trigger("log", {
                  level: "warn",
                  message: `adts skiping bytes ${e} to ${t} in frame ${h} outside syncword`,
                });
              }),
              (this.push = function (e) {
                var t,
                  i,
                  s,
                  r,
                  n,
                  a,
                  o = 0;
                if ((l || (h = 0), "audio" === e.type)) {
                  for (
                    d && d.length
                      ? ((s = d),
                        (d = new Uint8Array(
                          s.byteLength + e.data.byteLength
                        )).set(s),
                        d.set(e.data, s.byteLength))
                      : (d = e.data);
                    o + 7 < d.length;

                  )
                    if (255 !== d[o] || 240 != (246 & d[o + 1]))
                      "number" != typeof a && (a = o), o++;
                    else {
                      if (
                        ("number" == typeof a &&
                          (this.skipWarn_(a, o), (a = null)),
                        (i = 2 * (1 & ~d[o + 1])),
                        (t =
                          ((3 & d[o + 3]) << 11) |
                          (d[o + 4] << 3) |
                          ((224 & d[o + 5]) >> 5)),
                        (n =
                          ((r = 1024 * (1 + (3 & d[o + 6]))) * nt) /
                          at[(60 & d[o + 2]) >>> 2]),
                        d.byteLength - o < t)
                      )
                        break;
                      this.trigger("data", {
                        pts: e.pts + h * n,
                        dts: e.dts + h * n,
                        sampleCount: r,
                        audioobjecttype: 1 + ((d[o + 2] >>> 6) & 3),
                        channelcount:
                          ((1 & d[o + 2]) << 2) | ((192 & d[o + 3]) >>> 6),
                        samplerate: at[(60 & d[o + 2]) >>> 2],
                        samplingfrequencyindex: (60 & d[o + 2]) >>> 2,
                        samplesize: 16,
                        data: d.subarray(o + 7 + i, o + t),
                      }),
                        h++,
                        (o += t);
                    }
                  "number" == typeof a && (this.skipWarn_(a, o), (a = null)),
                    (d = d.subarray(o));
                }
              }),
              (this.flush = function () {
                (h = 0), this.trigger("done");
              }),
              (this.reset = function () {
                (d = void 0), this.trigger("reset");
              }),
              (this.endTimeline = function () {
                (d = void 0), this.trigger("endedtimeline");
              });
          },
          et = ((ot.prototype = new je()), ot),
          T = i,
          lt = function (s) {
            var r = s.byteLength,
              n = 0,
              a = 0;
            (this.length = function () {
              return 8 * r;
            }),
              (this.bitsAvailable = function () {
                return 8 * r + a;
              }),
              (this.loadWord = function () {
                var e = s.byteLength - r,
                  t = new Uint8Array(4),
                  i = Math.min(4, r);
                if (0 === i) throw new Error("no bytes available");
                t.set(s.subarray(e, e + i)),
                  (n = new DataView(t.buffer).getUint32(0)),
                  (a = 8 * i),
                  (r -= i);
              }),
              (this.skipBits = function (e) {
                var t;
                e < a ||
                  ((e = (e -= a) - 8 * (t = Math.floor(e / 8))),
                  (r -= t),
                  this.loadWord()),
                  (n <<= e),
                  (a -= e);
              }),
              (this.readBits = function (e) {
                var t = Math.min(a, e),
                  i = n >>> (32 - t);
                return (
                  0 < (a -= t) ? (n <<= t) : 0 < r && this.loadWord(),
                  0 < (t = e - t) ? (i << t) | this.readBits(t) : i
                );
              }),
              (this.skipLeadingZeros = function () {
                for (var e = 0; e < a; ++e)
                  if (0 != (n & (2147483648 >>> e)))
                    return (n <<= e), (a -= e), e;
                return this.loadWord(), e + this.skipLeadingZeros();
              }),
              (this.skipUnsignedExpGolomb = function () {
                this.skipBits(1 + this.skipLeadingZeros());
              }),
              (this.skipExpGolomb = function () {
                this.skipBits(1 + this.skipLeadingZeros());
              }),
              (this.readUnsignedExpGolomb = function () {
                var e = this.skipLeadingZeros();
                return this.readBits(e + 1) - 1;
              }),
              (this.readExpGolomb = function () {
                var e = this.readUnsignedExpGolomb();
                return 1 & e ? (1 + e) >>> 1 : -1 * (e >>> 1);
              }),
              (this.readBoolean = function () {
                return 1 === this.readBits(1);
              }),
              (this.readUnsignedByte = function () {
                return this.readBits(8);
              }),
              this.loadWord();
          },
          dt = function () {
            var s,
              r,
              n = 0;
            dt.prototype.init.call(this),
              (this.push = function (e) {
                for (
                  var t,
                    i = (r = r
                      ? ((t = new Uint8Array(
                          r.byteLength + e.data.byteLength
                        )).set(r),
                        t.set(e.data, r.byteLength),
                        t)
                      : e.data).byteLength;
                  n < i - 3;
                  n++
                )
                  if (1 === r[n + 2]) {
                    s = n + 5;
                    break;
                  }
                for (; s < i; )
                  switch (r[s]) {
                    case 0:
                      if (0 !== r[s - 1]) s += 2;
                      else if (0 !== r[s - 2]) s++;
                      else {
                        for (
                          n + 3 !== s - 2 &&
                          this.trigger("data", r.subarray(n + 3, s - 2));
                          1 !== r[++s] && s < i;

                        );
                        (n = s - 2), (s += 3);
                      }
                      break;
                    case 1:
                      0 !== r[s - 1] || 0 !== r[s - 2]
                        ? (s += 3)
                        : (this.trigger("data", r.subarray(n + 3, s - 2)),
                          (n = s - 2),
                          (s += 3));
                      break;
                    default:
                      s += 3;
                  }
                (r = r.subarray(n)), (s -= n), (n = 0);
              }),
              (this.reset = function () {
                (r = null), (n = 0), this.trigger("reset");
              }),
              (this.flush = function () {
                r &&
                  3 < r.byteLength &&
                  this.trigger("data", r.subarray(n + 3)),
                  (r = null),
                  (n = 0),
                  this.trigger("done");
              }),
              (this.endTimeline = function () {
                this.flush(), this.trigger("endedtimeline");
              });
          };
        (dt.prototype = new T()),
          (rt = {
            100: !0,
            110: !0,
            122: !0,
            244: !0,
            44: !0,
            83: !0,
            86: !0,
            118: !0,
            128: !0,
            138: !0,
            139: !0,
            134: !0,
          }),
          ((st = function () {
            var i,
              s,
              r,
              n,
              a,
              o,
              g,
              t = new dt();
            st.prototype.init.call(this),
              ((i = this).push = function (e) {
                "video" === e.type &&
                  ((s = e.trackId), (r = e.pts), (n = e.dts), t.push(e));
              }),
              t.on("data", function (e) {
                var t = {
                  trackId: s,
                  pts: r,
                  dts: n,
                  data: e,
                  nalUnitTypeCode: 31 & e[0],
                };
                switch (t.nalUnitTypeCode) {
                  case 5:
                    t.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                    break;
                  case 6:
                    (t.nalUnitType = "sei_rbsp"),
                      (t.escapedRBSP = a(e.subarray(1)));
                    break;
                  case 7:
                    (t.nalUnitType = "seq_parameter_set_rbsp"),
                      (t.escapedRBSP = a(e.subarray(1))),
                      (t.config = o(t.escapedRBSP));
                    break;
                  case 8:
                    t.nalUnitType = "pic_parameter_set_rbsp";
                    break;
                  case 9:
                    t.nalUnitType = "access_unit_delimiter_rbsp";
                }
                i.trigger("data", t);
              }),
              t.on("done", function () {
                i.trigger("done");
              }),
              t.on("partialdone", function () {
                i.trigger("partialdone");
              }),
              t.on("reset", function () {
                i.trigger("reset");
              }),
              t.on("endedtimeline", function () {
                i.trigger("endedtimeline");
              }),
              (this.flush = function () {
                t.flush();
              }),
              (this.partialFlush = function () {
                t.partialFlush();
              }),
              (this.reset = function () {
                t.reset();
              }),
              (this.endTimeline = function () {
                t.endTimeline();
              }),
              (g = function (e, t) {
                for (var i = 8, s = 8, r = 0; r < e; r++)
                  i =
                    0 ===
                    (s = 0 !== s ? (i + t.readExpGolomb() + 256) % 256 : s)
                      ? i
                      : s;
              }),
              (a = function (e) {
                for (var t = e.byteLength, i = [], s = 1; s < t - 2; )
                  0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2]
                    ? (i.push(s + 2), (s += 2))
                    : s++;
                if (0 === i.length) return e;
                for (
                  var r = t - i.length, n = new Uint8Array(r), a = 0, s = 0;
                  s < r;
                  a++, s++
                )
                  a === i[0] && (a++, i.shift()), (n[s] = e[a]);
                return n;
              }),
              (o = function (e) {
                var t,
                  i,
                  s,
                  r,
                  n,
                  a,
                  o = 0,
                  l = 0,
                  d = 0,
                  h = 0,
                  u = [1, 1],
                  c = new lt(e),
                  e = c.readUnsignedByte(),
                  p = c.readUnsignedByte(),
                  m = c.readUnsignedByte();
                if (
                  (c.skipUnsignedExpGolomb(),
                  rt[e] &&
                    (3 === (i = c.readUnsignedExpGolomb()) && c.skipBits(1),
                    c.skipUnsignedExpGolomb(),
                    c.skipUnsignedExpGolomb(),
                    c.skipBits(1),
                    c.readBoolean()))
                )
                  for (n = 3 !== i ? 8 : 12, a = 0; a < n; a++)
                    c.readBoolean() && g(a < 6 ? 16 : 64, c);
                if (
                  (c.skipUnsignedExpGolomb(),
                  0 === (i = c.readUnsignedExpGolomb()))
                )
                  c.readUnsignedExpGolomb();
                else if (1 === i)
                  for (
                    c.skipBits(1),
                      c.skipExpGolomb(),
                      c.skipExpGolomb(),
                      t = c.readUnsignedExpGolomb(),
                      a = 0;
                    a < t;
                    a++
                  )
                    c.skipExpGolomb();
                if (
                  (c.skipUnsignedExpGolomb(),
                  c.skipBits(1),
                  (i = c.readUnsignedExpGolomb()),
                  (s = c.readUnsignedExpGolomb()),
                  0 === (r = c.readBits(1)) && c.skipBits(1),
                  c.skipBits(1),
                  c.readBoolean() &&
                    ((o = c.readUnsignedExpGolomb()),
                    (l = c.readUnsignedExpGolomb()),
                    (d = c.readUnsignedExpGolomb()),
                    (h = c.readUnsignedExpGolomb())),
                  c.readBoolean() && c.readBoolean())
                ) {
                  switch (c.readUnsignedByte()) {
                    case 1:
                      u = [1, 1];
                      break;
                    case 2:
                      u = [12, 11];
                      break;
                    case 3:
                      u = [10, 11];
                      break;
                    case 4:
                      u = [16, 11];
                      break;
                    case 5:
                      u = [40, 33];
                      break;
                    case 6:
                      u = [24, 11];
                      break;
                    case 7:
                      u = [20, 11];
                      break;
                    case 8:
                      u = [32, 11];
                      break;
                    case 9:
                      u = [80, 33];
                      break;
                    case 10:
                      u = [18, 11];
                      break;
                    case 11:
                      u = [15, 11];
                      break;
                    case 12:
                      u = [64, 33];
                      break;
                    case 13:
                      u = [160, 99];
                      break;
                    case 14:
                      u = [4, 3];
                      break;
                    case 15:
                      u = [3, 2];
                      break;
                    case 16:
                      u = [2, 1];
                      break;
                    case 255:
                      u = [
                        (c.readUnsignedByte() << 8) | c.readUnsignedByte(),
                        (c.readUnsignedByte() << 8) | c.readUnsignedByte(),
                      ];
                  }
                  u && (u[0], u[1]);
                }
                return {
                  profileIdc: e,
                  levelIdc: m,
                  profileCompatibility: p,
                  width: 16 * (i + 1) - 2 * o - 2 * l,
                  height: (2 - r) * (s + 1) * 16 - 2 * d - 2 * h,
                  sarRatio: u,
                };
              });
          }).prototype = new T());
        function ht(e) {
          return (e[0] << 21) | (e[1] << 14) | (e[2] << 7) | e[3];
        }
        var je = st,
          ut = [
            96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3,
            11025, 8e3, 7350,
          ],
          ct = function (e, t) {
            var i =
              0 <=
              (i =
                (e[t + 6] << 21) |
                (e[t + 7] << 14) |
                (e[t + 8] << 7) |
                e[t + 9])
                ? i
                : 0;
            return (16 & e[t + 5]) >> 4 ? 20 + i : 10 + i;
          },
          pt = function (e, t) {
            return e.length - t < 10 ||
              e[t] !== "I".charCodeAt(0) ||
              e[t + 1] !== "D".charCodeAt(0) ||
              e[t + 2] !== "3".charCodeAt(0)
              ? t
              : ((t += ct(e, t)), pt(e, t));
          },
          mt = function (e, t, i) {
            for (var s = "", r = t; r < i; r++)
              s += "%" + ("00" + e[r].toString(16)).slice(-2);
            return s;
          },
          T = {
            isLikelyAacData: function (e) {
              var t = pt(e, 0);
              return (
                e.length >= t + 2 &&
                255 == (255 & e[t]) &&
                240 == (240 & e[t + 1]) &&
                16 == (22 & e[t + 1])
              );
            },
            parseId3TagSize: ct,
            parseAdtsSize: function (e, t) {
              var i = (224 & e[t + 5]) >> 5,
                s = e[t + 4] << 3;
              return (6144 & e[t + 3]) | s | i;
            },
            parseType: function (e, t) {
              return e[t] === "I".charCodeAt(0) &&
                e[t + 1] === "D".charCodeAt(0) &&
                e[t + 2] === "3".charCodeAt(0)
                ? "timed-metadata"
                : !0 & e[t] && 240 == (240 & e[t + 1])
                ? "audio"
                : null;
            },
            parseSampleRate: function (e) {
              for (var t = 0; t + 5 < e.length; ) {
                if (255 === e[t] && 240 == (246 & e[t + 1]))
                  return ut[(60 & e[t + 2]) >>> 2];
                t++;
              }
              return null;
            },
            parseAacTimestamp: function (e) {
              var t,
                i = 10;
              64 & e[5] && (i = (i += 4) + ht(e.subarray(10, 14)));
              do {
                if ((t = ht(e.subarray(i + 4, i + 8))) < 1) return null;
                if (
                  "PRIV" ===
                  String.fromCharCode(e[i], e[i + 1], e[i + 2], e[i + 3])
                )
                  for (
                    var s, r, n = e.subarray(i + 10, i + t + 10), a = 0;
                    a < n.byteLength;
                    a++
                  )
                    if (0 === n[a]) {
                      if (
                        "com.apple.streaming.transportStreamTimestamp" ===
                        unescape(mt(n, 0, a))
                      )
                        return (
                          (r =
                            ((1 & (s = n.subarray(a + 1))[3]) << 30) |
                            (s[4] << 22) |
                            (s[5] << 14) |
                            (s[6] << 6) |
                            (s[7] >>> 2)),
                          (r *= 4) + (3 & s[7])
                        );
                      break;
                    }
              } while ((i = i + 10 + t) < e.byteLength);
              return null;
            },
          },
          E = i,
          gt = T,
          ft = function () {
            var n = new Uint8Array(),
              a = 0;
            ft.prototype.init.call(this),
              (this.setTimestamp = function (e) {
                a = e;
              }),
              (this.push = function (e) {
                var t,
                  i,
                  s = 0,
                  r = 0;
                for (
                  n.length
                    ? ((i = n.length),
                      (n = new Uint8Array(e.byteLength + i)).set(
                        n.subarray(0, i)
                      ),
                      n.set(e, i))
                    : (n = e);
                  3 <= n.length - r;

                )
                  if (
                    n[r] === "I".charCodeAt(0) &&
                    n[r + 1] === "D".charCodeAt(0) &&
                    n[r + 2] === "3".charCodeAt(0)
                  ) {
                    if (n.length - r < 10) break;
                    if (r + (s = gt.parseId3TagSize(n, r)) > n.length) break;
                    (t = {
                      type: "timed-metadata",
                      data: n.subarray(r, r + s),
                    }),
                      this.trigger("data", t),
                      (r += s);
                  } else if (255 == (255 & n[r]) && 240 == (240 & n[r + 1])) {
                    if (n.length - r < 7) break;
                    if (r + (s = gt.parseAdtsSize(n, r)) > n.length) break;
                    (t = {
                      type: "audio",
                      data: n.subarray(r, r + s),
                      pts: a,
                      dts: a,
                    }),
                      this.trigger("data", t),
                      (r += s);
                  } else r++;
                (i = n.length - r),
                  (n = 0 < i ? n.subarray(r) : new Uint8Array());
              }),
              (this.reset = function () {
                (n = new Uint8Array()), this.trigger("reset");
              }),
              (this.endTimeline = function () {
                (n = new Uint8Array()), this.trigger("endedtimeline");
              });
          };
        ft.prototype = new E();
        function yt(e, t) {
          for (var i = Object.keys(t), s = 0; s < i.length; s++) {
            var r = i[s];
            "headOfPipeline" !== r && t[r].on && t[r].on("log", Ot.bind(e, r));
          }
        }
        function _t(e, t) {
          var i;
          if (e.length === t.length) {
            for (i = 0; i < e.length; i++) if (e[i] !== t[i]) return;
            return 1;
          }
        }
        function vt(e, t, i, s, r, n) {
          return {
            start: { dts: e, pts: e + (i - t) },
            end: { dts: e + (s - t), pts: e + (r - i) },
            prependedContentDuration: n,
            baseMediaDecodeTime: e,
          };
        }
        var bt,
          Tt,
          C,
          E = i,
          k = Ee,
          I = ke,
          St = xe,
          x = Ae,
          A = S,
          wt = m,
          Et = et,
          Ct = je,
          kt = ft,
          It = T.isLikelyAacData,
          xt = m.ONE_SECOND_IN_TS,
          At = [
            "audioobjecttype",
            "channelcount",
            "samplerate",
            "samplingfrequencyindex",
            "samplesize",
          ],
          Pt = [
            "width",
            "height",
            "profileIdc",
            "levelIdc",
            "profileCompatibility",
            "sarRatio",
          ],
          Ot = function (e, t) {
            (t.stream = e), this.trigger("log", t);
          },
          Dt = function (n, a) {
            var o = [],
              l = 0,
              d = 0,
              h = 1 / 0,
              u = (a = a || {}).firstSequenceNumber || 0;
            Dt.prototype.init.call(this),
              (this.push = function (t) {
                x.collectDtsInfo(n, t),
                  n &&
                    At.forEach(function (e) {
                      n[e] = t[e];
                    }),
                  o.push(t);
              }),
              (this.setEarliestDts = function (e) {
                l = e;
              }),
              (this.setVideoBaseMediaDecodeTime = function (e) {
                h = e;
              }),
              (this.setAudioAppendStart = function (e) {
                d = e;
              }),
              (this.flush = function () {
                var e, t, i, s, r;
                0 !== o.length &&
                  ((e = St.trimAdtsFramesByEarliestDts(o, n, l)),
                  (n.baseMediaDecodeTime = x.calculateTrackBaseMediaDecodeTime(
                    n,
                    a.keepOriginalTimestamps
                  )),
                  (r = St.prefixWithSilence(n, e, d, h)),
                  (n.samples = St.generateSampleTable(e)),
                  (i = k.mdat(St.concatenateFrameData(e))),
                  (o = []),
                  (s = k.moof(u, [n])),
                  (t = new Uint8Array(s.byteLength + i.byteLength)),
                  u++,
                  t.set(s),
                  t.set(i, s.byteLength),
                  x.clearDtsInfo(n),
                  (i = Math.ceil((1024 * xt) / n.samplerate)),
                  e.length &&
                    ((s = e.length * i),
                    this.trigger(
                      "segmentTimingInfo",
                      vt(
                        wt.audioTsToVideoTs(
                          n.baseMediaDecodeTime,
                          n.samplerate
                        ),
                        e[0].dts,
                        e[0].pts,
                        e[0].dts + s,
                        e[0].pts + s,
                        r || 0
                      )
                    ),
                    this.trigger("timingInfo", {
                      start: e[0].pts,
                      end: e[0].pts + s,
                    })),
                  this.trigger("data", { track: n, boxes: t })),
                  this.trigger("done", "AudioSegmentStream");
              }),
              (this.reset = function () {
                x.clearDtsInfo(n), (o = []), this.trigger("reset");
              });
          };
        (Dt.prototype = new E()),
          ((bt = function (a, n) {
            var t,
              i,
              o = [],
              d = [],
              l = (n = n || {}).firstSequenceNumber || 0;
            bt.prototype.init.call(this),
              delete a.minPTS,
              (this.gopCache_ = []),
              (this.push = function (e) {
                x.collectDtsInfo(a, e),
                  "seq_parameter_set_rbsp" !== e.nalUnitType ||
                    t ||
                    ((t = e.config),
                    (a.sps = [e.data]),
                    Pt.forEach(function (e) {
                      a[e] = t[e];
                    }, this)),
                  "pic_parameter_set_rbsp" !== e.nalUnitType ||
                    i ||
                    ((i = e.data), (a.pps = [e.data])),
                  o.push(e);
              }),
              (this.flush = function () {
                for (
                  var e, t, i, s = 0;
                  o.length && "access_unit_delimiter_rbsp" !== o[0].nalUnitType;

                )
                  o.shift();
                if (0 !== o.length) {
                  if (
                    ((e = I.groupNalsIntoFrames(o)),
                    (e = I.groupFramesIntoGops(e))[0][0].keyFrame ||
                      ((r = this.getGopForFusion_(o[0], a))
                        ? ((s = r.duration),
                          e.unshift(r),
                          (e.byteLength += r.byteLength),
                          (e.nalCount += r.nalCount),
                          (e.pts = r.pts),
                          (e.dts = r.dts),
                          (e.duration += r.duration))
                        : (e = I.extendFirstKeyFrame(e))),
                    d.length)
                  ) {
                    var r = n.alignGopsAtEnd
                      ? this.alignGopsAtEnd_(e)
                      : this.alignGopsAtStart_(e);
                    if (!r)
                      return (
                        this.gopCache_.unshift({
                          gop: e.pop(),
                          pps: a.pps,
                          sps: a.sps,
                        }),
                        (this.gopCache_.length = Math.min(
                          6,
                          this.gopCache_.length
                        )),
                        (o = []),
                        this.resetStream_(),
                        void this.trigger("done", "VideoSegmentStream")
                      );
                    x.clearDtsInfo(a), (e = r);
                  }
                  x.collectDtsInfo(a, e),
                    (a.samples = I.generateSampleTable(e)),
                    (r = k.mdat(I.concatenateNalData(e))),
                    (a.baseMediaDecodeTime =
                      x.calculateTrackBaseMediaDecodeTime(
                        a,
                        n.keepOriginalTimestamps
                      )),
                    this.trigger(
                      "processedGopsInfo",
                      e.map(function (e) {
                        return {
                          pts: e.pts,
                          dts: e.dts,
                          byteLength: e.byteLength,
                        };
                      })
                    ),
                    (t = e[0]),
                    (i = e[e.length - 1]),
                    this.trigger(
                      "segmentTimingInfo",
                      vt(
                        a.baseMediaDecodeTime,
                        t.dts,
                        t.pts,
                        i.dts + i.duration,
                        i.pts + i.duration,
                        s
                      )
                    ),
                    this.trigger("timingInfo", {
                      start: e[0].pts,
                      end: e[e.length - 1].pts + e[e.length - 1].duration,
                    }),
                    this.gopCache_.unshift({
                      gop: e.pop(),
                      pps: a.pps,
                      sps: a.sps,
                    }),
                    (this.gopCache_.length = Math.min(
                      6,
                      this.gopCache_.length
                    )),
                    (o = []),
                    this.trigger("baseMediaDecodeTime", a.baseMediaDecodeTime),
                    this.trigger("timelineStartInfo", a.timelineStartInfo),
                    (t = k.moof(l, [a])),
                    (i = new Uint8Array(t.byteLength + r.byteLength)),
                    l++,
                    i.set(t),
                    i.set(r, t.byteLength),
                    this.trigger("data", { track: a, boxes: i });
                }
                this.resetStream_(), this.trigger("done", "VideoSegmentStream");
              }),
              (this.reset = function () {
                this.resetStream_(),
                  (o = []),
                  (this.gopCache_.length = 0),
                  (d.length = 0),
                  this.trigger("reset");
              }),
              (this.resetStream_ = function () {
                x.clearDtsInfo(a), (i = t = void 0);
              }),
              (this.getGopForFusion_ = function (e) {
                for (
                  var t, i, s, r = 1 / 0, n = 0;
                  n < this.gopCache_.length;
                  n++
                )
                  (i = (s = this.gopCache_[n]).gop),
                    a.pps &&
                      _t(a.pps[0], s.pps[0]) &&
                      a.sps &&
                      _t(a.sps[0], s.sps[0]) &&
                      (i.dts < a.timelineStartInfo.dts ||
                        (-1e4 <= (i = e.dts - i.dts - i.duration) &&
                          i <= 45e3 &&
                          (!t || i < r) &&
                          ((t = s), (r = i))));
                return t ? t.gop : null;
              }),
              (this.alignGopsAtStart_ = function (e) {
                for (
                  var t,
                    i,
                    s,
                    r,
                    n = e.byteLength,
                    a = e.nalCount,
                    o = e.duration,
                    l = (t = 0);
                  l < d.length &&
                  t < e.length &&
                  ((i = d[l]), (s = e[t]), i.pts !== s.pts);

                )
                  s.pts > i.pts
                    ? l++
                    : (t++,
                      (n -= s.byteLength),
                      (a -= s.nalCount),
                      (o -= s.duration));
                return 0 === t
                  ? e
                  : t === e.length
                  ? null
                  : (((r = e.slice(t)).byteLength = n),
                    (r.duration = o),
                    (r.nalCount = a),
                    (r.pts = r[0].pts),
                    (r.dts = r[0].dts),
                    r);
              }),
              (this.alignGopsAtEnd_ = function (e) {
                for (
                  var t,
                    i,
                    s,
                    r,
                    n = d.length - 1,
                    a = e.length - 1,
                    o = null,
                    l = !1;
                  0 <= n && 0 <= a;

                ) {
                  if (((t = d[n]), (i = e[a]), t.pts === i.pts)) {
                    l = !0;
                    break;
                  }
                  t.pts > i.pts ? n-- : (n === d.length - 1 && (o = a), a--);
                }
                return l || null !== o
                  ? 0 === (s = l ? a : o)
                    ? e
                    : ((r = (s = e.slice(s)).reduce(
                        function (e, t) {
                          return (
                            (e.byteLength += t.byteLength),
                            (e.duration += t.duration),
                            (e.nalCount += t.nalCount),
                            e
                          );
                        },
                        { byteLength: 0, duration: 0, nalCount: 0 }
                      )),
                      (s.byteLength = r.byteLength),
                      (s.duration = r.duration),
                      (s.nalCount = r.nalCount),
                      (s.pts = s[0].pts),
                      (s.dts = s[0].dts),
                      s)
                  : null;
              }),
              (this.alignGopsWith = function (e) {
                d = e;
              });
          }).prototype = new E()),
          (((C = function (e, t) {
            (this.numberOfTracks = 0),
              (this.metadataStream = t),
              "undefined" != typeof (e = e || {}).remux
                ? (this.remuxTracks = !!e.remux)
                : (this.remuxTracks = !0),
              "boolean" == typeof e.keepOriginalTimestamps
                ? (this.keepOriginalTimestamps = e.keepOriginalTimestamps)
                : (this.keepOriginalTimestamps = !1),
              (this.pendingTracks = []),
              (this.videoTrack = null),
              (this.pendingBoxes = []),
              (this.pendingCaptions = []),
              (this.pendingMetadata = []),
              (this.pendingBytes = 0),
              (this.emittedTracks = 0),
              C.prototype.init.call(this),
              (this.push = function (e) {
                return e.text
                  ? this.pendingCaptions.push(e)
                  : e.frames
                  ? this.pendingMetadata.push(e)
                  : (this.pendingTracks.push(e.track),
                    (this.pendingBytes += e.boxes.byteLength),
                    "video" === e.track.type &&
                      ((this.videoTrack = e.track),
                      this.pendingBoxes.push(e.boxes)),
                    void (
                      "audio" === e.track.type &&
                      ((this.audioTrack = e.track),
                      this.pendingBoxes.unshift(e.boxes))
                    ));
              });
          }).prototype = new E()).flush = function (e) {
            var t,
              i,
              s,
              r = 0,
              n = { captions: [], captionStreams: {}, metadata: [], info: {} },
              a = 0;
            if (this.pendingTracks.length < this.numberOfTracks) {
              if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e)
                return;
              if (this.remuxTracks) return;
              if (0 === this.pendingTracks.length)
                return (
                  this.emittedTracks++,
                  void (
                    this.emittedTracks >= this.numberOfTracks &&
                    (this.trigger("done"), (this.emittedTracks = 0))
                  )
                );
            }
            if (
              (this.videoTrack
                ? ((a = this.videoTrack.timelineStartInfo.pts),
                  Pt.forEach(function (e) {
                    n.info[e] = this.videoTrack[e];
                  }, this))
                : this.audioTrack &&
                  ((a = this.audioTrack.timelineStartInfo.pts),
                  At.forEach(function (e) {
                    n.info[e] = this.audioTrack[e];
                  }, this)),
              this.videoTrack || this.audioTrack)
            ) {
              for (
                1 === this.pendingTracks.length
                  ? (n.type = this.pendingTracks[0].type)
                  : (n.type = "combined"),
                  this.emittedTracks += this.pendingTracks.length,
                  e = k.initSegment(this.pendingTracks),
                  n.initSegment = new Uint8Array(e.byteLength),
                  n.initSegment.set(e),
                  n.data = new Uint8Array(this.pendingBytes),
                  s = 0;
                s < this.pendingBoxes.length;
                s++
              )
                n.data.set(this.pendingBoxes[s], r),
                  (r += this.pendingBoxes[s].byteLength);
              for (s = 0; s < this.pendingCaptions.length; s++)
                ((t = this.pendingCaptions[s]).startTime =
                  wt.metadataTsToSeconds(
                    t.startPts,
                    a,
                    this.keepOriginalTimestamps
                  )),
                  (t.endTime = wt.metadataTsToSeconds(
                    t.endPts,
                    a,
                    this.keepOriginalTimestamps
                  )),
                  (n.captionStreams[t.stream] = !0),
                  n.captions.push(t);
              for (s = 0; s < this.pendingMetadata.length; s++)
                ((i = this.pendingMetadata[s]).cueTime = wt.metadataTsToSeconds(
                  i.pts,
                  a,
                  this.keepOriginalTimestamps
                )),
                  n.metadata.push(i);
              for (
                n.metadata.dispatchType = this.metadataStream.dispatchType,
                  this.pendingTracks.length = 0,
                  this.videoTrack = null,
                  this.pendingBoxes.length = 0,
                  this.pendingCaptions.length = 0,
                  this.pendingBytes = 0,
                  this.pendingMetadata.length = 0,
                  this.trigger("data", n),
                  s = 0;
                s < n.captions.length;
                s++
              )
                (t = n.captions[s]), this.trigger("caption", t);
              for (s = 0; s < n.metadata.length; s++)
                (i = n.metadata[s]), this.trigger("id3Frame", i);
            }
            this.emittedTracks >= this.numberOfTracks &&
              (this.trigger("done"), (this.emittedTracks = 0));
          }),
          (C.prototype.setRemux = function (e) {
            this.remuxTracks = e;
          }),
          ((Tt = function (s) {
            var r,
              n,
              a = this,
              i = !0;
            Tt.prototype.init.call(this),
              (s = s || {}),
              (this.baseMediaDecodeTime = s.baseMediaDecodeTime || 0),
              (this.transmuxPipeline_ = {}),
              (this.setupAacPipeline = function () {
                var t = {};
                ((this.transmuxPipeline_ = t).type = "aac"),
                  (t.metadataStream = new A.MetadataStream()),
                  (t.aacStream = new kt()),
                  (t.audioTimestampRolloverStream =
                    new A.TimestampRolloverStream("audio")),
                  (t.timedMetadataTimestampRolloverStream =
                    new A.TimestampRolloverStream("timed-metadata")),
                  (t.adtsStream = new Et()),
                  (t.coalesceStream = new C(s, t.metadataStream)),
                  (t.headOfPipeline = t.aacStream),
                  t.aacStream
                    .pipe(t.audioTimestampRolloverStream)
                    .pipe(t.adtsStream),
                  t.aacStream
                    .pipe(t.timedMetadataTimestampRolloverStream)
                    .pipe(t.metadataStream)
                    .pipe(t.coalesceStream),
                  t.metadataStream.on("timestamp", function (e) {
                    t.aacStream.setTimestamp(e.timeStamp);
                  }),
                  t.aacStream.on("data", function (e) {
                    ("timed-metadata" !== e.type && "audio" !== e.type) ||
                      t.audioSegmentStream ||
                      ((n = n || {
                        timelineStartInfo: {
                          baseMediaDecodeTime: a.baseMediaDecodeTime,
                        },
                        codec: "adts",
                        type: "audio",
                      }),
                      t.coalesceStream.numberOfTracks++,
                      (t.audioSegmentStream = new Dt(n, s)),
                      t.audioSegmentStream.on(
                        "log",
                        a.getLogTrigger_("audioSegmentStream")
                      ),
                      t.audioSegmentStream.on(
                        "timingInfo",
                        a.trigger.bind(a, "audioTimingInfo")
                      ),
                      t.adtsStream
                        .pipe(t.audioSegmentStream)
                        .pipe(t.coalesceStream),
                      a.trigger("trackinfo", { hasAudio: !!n, hasVideo: !!r }));
                  }),
                  t.coalesceStream.on("data", this.trigger.bind(this, "data")),
                  t.coalesceStream.on("done", this.trigger.bind(this, "done")),
                  yt(this, t);
              }),
              (this.setupTsPipeline = function () {
                var i = {};
                ((this.transmuxPipeline_ = i).type = "ts"),
                  (i.metadataStream = new A.MetadataStream()),
                  (i.packetStream = new A.TransportPacketStream()),
                  (i.parseStream = new A.TransportParseStream()),
                  (i.elementaryStream = new A.ElementaryStream()),
                  (i.timestampRolloverStream = new A.TimestampRolloverStream()),
                  (i.adtsStream = new Et()),
                  (i.h264Stream = new Ct()),
                  (i.captionStream = new A.CaptionStream(s)),
                  (i.coalesceStream = new C(s, i.metadataStream)),
                  (i.headOfPipeline = i.packetStream),
                  i.packetStream
                    .pipe(i.parseStream)
                    .pipe(i.elementaryStream)
                    .pipe(i.timestampRolloverStream),
                  i.timestampRolloverStream.pipe(i.h264Stream),
                  i.timestampRolloverStream.pipe(i.adtsStream),
                  i.timestampRolloverStream
                    .pipe(i.metadataStream)
                    .pipe(i.coalesceStream),
                  i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream),
                  i.elementaryStream.on("data", function (e) {
                    var t;
                    if ("metadata" === e.type) {
                      for (t = e.tracks.length; t--; )
                        r || "video" !== e.tracks[t].type
                          ? n ||
                            "audio" !== e.tracks[t].type ||
                            ((n =
                              e.tracks[
                                t
                              ]).timelineStartInfo.baseMediaDecodeTime =
                              a.baseMediaDecodeTime)
                          : ((r =
                              e.tracks[
                                t
                              ]).timelineStartInfo.baseMediaDecodeTime =
                              a.baseMediaDecodeTime);
                      r &&
                        !i.videoSegmentStream &&
                        (i.coalesceStream.numberOfTracks++,
                        (i.videoSegmentStream = new bt(r, s)),
                        i.videoSegmentStream.on(
                          "log",
                          a.getLogTrigger_("videoSegmentStream")
                        ),
                        i.videoSegmentStream.on(
                          "timelineStartInfo",
                          function (e) {
                            n &&
                              !s.keepOriginalTimestamps &&
                              ((n.timelineStartInfo = e),
                              i.audioSegmentStream.setEarliestDts(
                                e.dts - a.baseMediaDecodeTime
                              ));
                          }
                        ),
                        i.videoSegmentStream.on(
                          "processedGopsInfo",
                          a.trigger.bind(a, "gopInfo")
                        ),
                        i.videoSegmentStream.on(
                          "segmentTimingInfo",
                          a.trigger.bind(a, "videoSegmentTimingInfo")
                        ),
                        i.videoSegmentStream.on(
                          "baseMediaDecodeTime",
                          function (e) {
                            n &&
                              i.audioSegmentStream.setVideoBaseMediaDecodeTime(
                                e
                              );
                          }
                        ),
                        i.videoSegmentStream.on(
                          "timingInfo",
                          a.trigger.bind(a, "videoTimingInfo")
                        ),
                        i.h264Stream
                          .pipe(i.videoSegmentStream)
                          .pipe(i.coalesceStream)),
                        n &&
                          !i.audioSegmentStream &&
                          (i.coalesceStream.numberOfTracks++,
                          (i.audioSegmentStream = new Dt(n, s)),
                          i.audioSegmentStream.on(
                            "log",
                            a.getLogTrigger_("audioSegmentStream")
                          ),
                          i.audioSegmentStream.on(
                            "timingInfo",
                            a.trigger.bind(a, "audioTimingInfo")
                          ),
                          i.audioSegmentStream.on(
                            "segmentTimingInfo",
                            a.trigger.bind(a, "audioSegmentTimingInfo")
                          ),
                          i.adtsStream
                            .pipe(i.audioSegmentStream)
                            .pipe(i.coalesceStream)),
                        a.trigger("trackinfo", {
                          hasAudio: !!n,
                          hasVideo: !!r,
                        });
                    }
                  }),
                  i.coalesceStream.on("data", this.trigger.bind(this, "data")),
                  i.coalesceStream.on("id3Frame", function (e) {
                    (e.dispatchType = i.metadataStream.dispatchType),
                      a.trigger("id3Frame", e);
                  }),
                  i.coalesceStream.on(
                    "caption",
                    this.trigger.bind(this, "caption")
                  ),
                  i.coalesceStream.on("done", this.trigger.bind(this, "done")),
                  yt(this, i);
              }),
              (this.setBaseMediaDecodeTime = function (e) {
                var t = this.transmuxPipeline_;
                s.keepOriginalTimestamps || (this.baseMediaDecodeTime = e),
                  n &&
                    ((n.timelineStartInfo.dts = void 0),
                    (n.timelineStartInfo.pts = void 0),
                    x.clearDtsInfo(n),
                    t.audioTimestampRolloverStream) &&
                    t.audioTimestampRolloverStream.discontinuity(),
                  r &&
                    (t.videoSegmentStream &&
                      (t.videoSegmentStream.gopCache_ = []),
                    (r.timelineStartInfo.dts = void 0),
                    (r.timelineStartInfo.pts = void 0),
                    x.clearDtsInfo(r),
                    t.captionStream.reset()),
                  t.timestampRolloverStream &&
                    t.timestampRolloverStream.discontinuity();
              }),
              (this.setAudioAppendStart = function (e) {
                n &&
                  this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(
                    e
                  );
              }),
              (this.setRemux = function (e) {
                var t = this.transmuxPipeline_;
                (s.remux = e),
                  t && t.coalesceStream && t.coalesceStream.setRemux(e);
              }),
              (this.alignGopsWith = function (e) {
                r &&
                  this.transmuxPipeline_.videoSegmentStream &&
                  this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e);
              }),
              (this.getLogTrigger_ = function (t) {
                var i = this;
                return function (e) {
                  (e.stream = t), i.trigger("log", e);
                };
              }),
              (this.push = function (e) {
                var t;
                i &&
                  ((t = It(e)) && "aac" !== this.transmuxPipeline_.type
                    ? this.setupAacPipeline()
                    : t ||
                      "ts" === this.transmuxPipeline_.type ||
                      this.setupTsPipeline(),
                  (i = !1)),
                  this.transmuxPipeline_.headOfPipeline.push(e);
              }),
              (this.flush = function () {
                (i = !0), this.transmuxPipeline_.headOfPipeline.flush();
              }),
              (this.endTimeline = function () {
                this.transmuxPipeline_.headOfPipeline.endTimeline();
              }),
              (this.reset = function () {
                this.transmuxPipeline_.headOfPipeline &&
                  this.transmuxPipeline_.headOfPipeline.reset();
              }),
              (this.resetCaptions = function () {
                this.transmuxPipeline_.captionStream &&
                  this.transmuxPipeline_.captionStream.reset();
              });
          }).prototype = new E());
        function Lt(e) {
          var t = "";
          return (
            (t += String.fromCharCode(e[0])) +
            String.fromCharCode(e[1]) +
            String.fromCharCode(e[2]) +
            String.fromCharCode(e[3])
          );
        }
        function Nt(e, t) {
          var i,
            s,
            r,
            n = [];
          if (!t.length) return null;
          for (i = 0; i < e.byteLength; )
            (s = Vt(
              (e[i] << 24) | (e[i + 1] << 16) | (e[i + 2] << 8) | e[i + 3]
            )),
              (r = $t(e.subarray(i + 4, i + 8))),
              (s = 1 < s ? i + s : e.byteLength),
              r === t[0] &&
                (1 === t.length
                  ? n.push(e.subarray(i + 8, s))
                  : (r = Nt(e.subarray(i + 8, s), t.slice(1))).length &&
                    (n = n.concat(r))),
              (i = s);
          return n;
        }
        function Mt(e) {
          var t = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)) };
          return (
            (t.baseMediaDecodeTime =
              1 === t.version
                ? Gt(e.subarray(4))
                : Wt((e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7])),
            t
          );
        }
        function Rt(e) {
          var t,
            i = {
              version: e[0],
              flags: new Uint8Array(e.subarray(1, 4)),
              samples: [],
            },
            s = new DataView(e.buffer, e.byteOffset, e.byteLength),
            r = 1 & i.flags[2],
            n = 4 & i.flags[2],
            a = 1 & i.flags[1],
            o = 2 & i.flags[1],
            l = 4 & i.flags[1],
            d = 8 & i.flags[1],
            h = s.getUint32(4),
            u = 8;
          for (
            r && ((i.dataOffset = s.getInt32(u)), (u += 4)),
              n &&
                h &&
                ((t = { flags: zt(e.subarray(u, u + 4)) }),
                (u += 4),
                a && ((t.duration = s.getUint32(u)), (u += 4)),
                o && ((t.size = s.getUint32(u)), (u += 4)),
                d &&
                  ((t.compositionTimeOffset =
                    1 === i.version ? s.getInt32(u) : s.getUint32(u)),
                  (u += 4)),
                i.samples.push(t),
                h--);
            h--;

          )
            (t = {}),
              a && ((t.duration = s.getUint32(u)), (u += 4)),
              o && ((t.size = s.getUint32(u)), (u += 4)),
              l && ((t.flags = zt(e.subarray(u, u + 4))), (u += 4)),
              d &&
                ((t.compositionTimeOffset =
                  1 === i.version ? s.getInt32(u) : s.getUint32(u)),
                (u += 4)),
              i.samples.push(t);
          return i;
        }
        function Ut(e) {
          var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
            i =
              1 &
              (e = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                trackId: t.getUint32(4),
              }).flags[2],
            s = 2 & e.flags[2],
            r = 8 & e.flags[2],
            n = 16 & e.flags[2],
            a = 32 & e.flags[2],
            o = 65536 & e.flags[0],
            l = 131072 & e.flags[0],
            d = 8;
          return (
            i && ((d += 4), (e.baseDataOffset = t.getUint32(12)), (d += 4)),
            s && ((e.sampleDescriptionIndex = t.getUint32(d)), (d += 4)),
            r && ((e.defaultSampleDuration = t.getUint32(d)), (d += 4)),
            n && ((e.defaultSampleSize = t.getUint32(d)), (d += 4)),
            a && (e.defaultSampleFlags = t.getUint32(d)),
            o && (e.durationIsEmpty = !0),
            !i && l && (e.baseDataOffsetIsMoof = !0),
            e
          );
        }
        function Bt(e) {
          var t = 31 & e[1];
          return (t << 8) | e[2];
        }
        function Ft(e) {
          return !!(64 & e[1]);
        }
        function jt(e) {
          var t = 0;
          return 1 < (48 & e[3]) >>> 4 && (t += e[4] + 1), t;
        }
        function Ht(e) {
          switch (e) {
            case 5:
              return "slice_layer_without_partitioning_rbsp_idr";
            case 6:
              return "sei_rbsp";
            case 7:
              return "seq_parameter_set_rbsp";
            case 8:
              return "pic_parameter_set_rbsp";
            case 9:
              return "access_unit_delimiter_rbsp";
            default:
              return null;
          }
        }
        var qt = Tt,
          i = function (e) {
            return e >>> 0;
          },
          xe = function (e) {
            return ("00" + e.toString(16)).slice(-2);
          },
          Vt = i,
          $t = Lt,
          Wt = i,
          Gt = _e.getUint64,
          zt = function (e) {
            return {
              isLeading: (12 & e[0]) >>> 2,
              dependsOn: 3 & e[0],
              isDependedOn: (192 & e[1]) >>> 6,
              hasRedundancy: (48 & e[1]) >>> 4,
              paddingValue: (14 & e[1]) >>> 1,
              isNonSyncSample: 1 & e[1],
              degradationPriority: (e[2] << 8) | e[3],
            };
          },
          Ae =
            "undefined" != typeof window
              ? window
              : "undefined" != typeof fe
              ? fe
              : "undefined" != typeof self
              ? self
              : {},
          S = Ae,
          Xt = Oe.discardEmulationPreventionBytes,
          Kt = f.CaptionStream,
          P = Nt,
          Yt = Mt,
          Qt = Rt,
          Jt = Ut,
          Zt = S,
          ei = function (e, h) {
            var i = P(e, ["moof", "traf"]),
              e = P(e, ["mdat"]),
              u = {},
              s = [];
            return (
              e.forEach(function (e, t) {
                t = i[t];
                s.push({ mdat: e, traf: t });
              }),
              s.forEach(function (e) {
                var t,
                  i,
                  s,
                  r,
                  n,
                  a = e.mdat,
                  e = e.traf,
                  o = P(e, ["tfhd"]),
                  o = Jt(o[0]),
                  l = o.trackId,
                  d = P(e, ["tfdt"]),
                  d = 0 < d.length ? Yt(d[0]).baseMediaDecodeTime : 0,
                  e = P(e, ["trun"]);
                h === l &&
                  0 < e.length &&
                  ((t = d),
                  (i = o.defaultSampleDuration || 0),
                  (s = o.defaultSampleSize || 0),
                  (r = o.trackId),
                  (n = []),
                  e.forEach(function (e) {
                    e = Qt(e).samples;
                    e.forEach(function (e) {
                      void 0 === e.duration && (e.duration = i),
                        void 0 === e.size && (e.size = s),
                        (e.trackId = r),
                        (e.dts = t),
                        void 0 === e.compositionTimeOffset &&
                          (e.compositionTimeOffset = 0),
                        "bigint" == typeof t
                          ? ((e.pts = t + Zt.BigInt(e.compositionTimeOffset)),
                            (t += Zt.BigInt(e.duration)))
                          : ((e.pts = t + e.compositionTimeOffset),
                            (t += e.duration));
                    }),
                      (n = n.concat(e));
                  }),
                  (d = (function (e, t, i) {
                    for (
                      var s,
                        r,
                        n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        a = { logs: [], seiNals: [] },
                        o = 0;
                      o + 4 < e.length;
                      o += s
                    )
                      if (((s = n.getUint32(o)), (o += 4), !(s <= 0)))
                        switch (31 & e[o]) {
                          case 6:
                            var l = e.subarray(o + 1, o + 1 + s),
                              d = (function (e, t) {
                                for (var i = e, s = 0; s < t.length; s++) {
                                  var r = t[s];
                                  if (i < r.size) return r;
                                  i -= r.size;
                                }
                                return null;
                              })(o, t),
                              l = {
                                nalUnitType: "sei_rbsp",
                                size: s,
                                data: l,
                                escapedRBSP: Xt(l),
                                trackId: i,
                              };
                            if (d) (l.pts = d.pts), (l.dts = d.dts), (r = d);
                            else {
                              if (!r) {
                                a.logs.push({
                                  level: "warn",
                                  message:
                                    "We've encountered a nal unit without data at " +
                                    o +
                                    " for trackId " +
                                    i +
                                    ". See mux.js#223.",
                                });
                                break;
                              }
                              (l.pts = r.pts), (l.dts = r.dts);
                            }
                            a.seiNals.push(l);
                        }
                    return a;
                  })(a, n, l)),
                  u[l] || (u[l] = { seiNals: [], logs: [] }),
                  (u[l].seiNals = u[l].seiNals.concat(d.seiNals)),
                  (u[l].logs = u[l].logs.concat(d.logs)));
              }),
              u
            );
          },
          ti = function () {
            var t,
              a,
              o,
              l,
              d,
              i,
              s = !1;
            (this.isInitialized = function () {
              return s;
            }),
              (this.init = function (e) {
                (t = new Kt()),
                  (s = !0),
                  (i = !!e && e.isPartial),
                  t.on("data", function (e) {
                    (e.startTime = e.startPts / l),
                      (e.endTime = e.endPts / l),
                      d.captions.push(e),
                      (d.captionStreams[e.stream] = !0);
                  }),
                  t.on("log", function (e) {
                    d.logs.push(e);
                  });
              }),
              (this.isNewInit = function (e, t) {
                return !(
                  (e && 0 === e.length) ||
                  (t && "object" == typeof t && 0 === Object.keys(t).length) ||
                  (o === e[0] && l === t[o])
                );
              }),
              (this.parse = function (e, t, i) {
                var s, r;
                if (!this.isInitialized()) return null;
                if (!t || !i) return null;
                if (this.isNewInit(t, i)) (o = t[0]), (l = i[o]);
                else if (null === o || !l) return a.push(e), null;
                for (; 0 < a.length; ) {
                  var n = a.shift();
                  this.parse(n, t, i);
                }
                return (
                  (e = e),
                  (r = l),
                  (s =
                    null === (s = o)
                      ? null
                      : {
                          seiNals: (e = ei(e, s)[s] || {}).seiNals,
                          logs: e.logs,
                          timescale: r,
                        }) &&
                    s.logs &&
                    (d.logs = d.logs.concat(s.logs)),
                  null !== s && s.seiNals
                    ? (this.pushNals(s.seiNals), this.flushStream(), d)
                    : d.logs.length
                    ? { logs: d.logs, captions: [], captionStreams: [] }
                    : null
                );
              }),
              (this.pushNals = function (e) {
                if (!this.isInitialized() || !e || 0 === e.length) return null;
                e.forEach(function (e) {
                  t.push(e);
                });
              }),
              (this.flushStream = function () {
                if (!this.isInitialized()) return null;
                i ? t.partialFlush() : t.flush();
              }),
              (this.clearParsedCaptions = function () {
                (d.captions = []), (d.captionStreams = {}), (d.logs = []);
              }),
              (this.resetCaptionStream = function () {
                if (!this.isInitialized()) return null;
                t.reset();
              }),
              (this.clearAllCaptions = function () {
                this.clearParsedCaptions(), this.resetCaptionStream();
              }),
              (this.reset = function () {
                (a = []),
                  (l = o = null),
                  d
                    ? this.clearParsedCaptions()
                    : (d = { captions: [], captionStreams: {}, logs: [] }),
                  this.resetCaptionStream();
              }),
              this.reset();
          },
          ii = i,
          O = xe,
          D = Nt,
          si = Lt,
          ri = _e.getUint64,
          ni = S,
          ai = function (e) {
            var t = 0 === e[0] ? 12 : 20;
            return ii(
              (e[t] << 24) | (e[1 + t] << 16) | (e[2 + t] << 8) | e[3 + t]
            );
          },
          oi = function (n, e) {
            e = D(e, ["moof", "traf"]).reduce(function (e, t) {
              var i = D(t, ["tfhd"])[0],
                i = ii((i[4] << 24) | (i[5] << 16) | (i[6] << 8) | i[7]),
                i = n[i] || 9e4,
                t = D(t, ["tfdt"])[0],
                s = new DataView(t.buffer, t.byteOffset, t.byteLength),
                t = 1 === t[0] ? ri(t.subarray(4, 12)) : s.getUint32(4);
              let r;
              return (
                "bigint" == typeof t
                  ? (r = t / ni.BigInt(i))
                  : "number" != typeof t || isNaN(t) || (r = t / i),
                (e =
                  (r = r < Number.MAX_SAFE_INTEGER ? Number(r) : r) < e ? r : e)
              );
            }, 1 / 0);
            return "bigint" == typeof e || isFinite(e) ? e : 0;
          },
          li = function (e) {
            var e = D(e, ["moov", "trak"]),
              n = [];
            return (
              e.forEach(function (e) {
                var t,
                  i = {},
                  s = D(e, ["tkhd"])[0],
                  r =
                    (s &&
                      ((r = (s = new DataView(
                        s.buffer,
                        s.byteOffset,
                        s.byteLength
                      )).getUint8(0)),
                      (i.id = 0 === r ? s.getUint32(12) : s.getUint32(20))),
                    D(e, ["mdia", "hdlr"])[0]),
                  r =
                    (r &&
                      ((s = si(r.subarray(8, 12))),
                      (i.type =
                        "vide" === s ? "video" : "soun" === s ? "audio" : s)),
                    D(e, ["mdia", "minf", "stbl", "stsd"])[0]),
                  s =
                    (r &&
                      ((s = r.subarray(8)),
                      (i.codec = si(s.subarray(4, 8))),
                      (r = D(s, [i.codec])[0])) &&
                      (/^[asm]vc[1-9]$/i.test(i.codec)
                        ? ((t = r.subarray(78)),
                          "avcC" === si(t.subarray(4, 8)) && 11 < t.length
                            ? ((i.codec += "."),
                              (i.codec += O(t[9])),
                              (i.codec += O(t[10])),
                              (i.codec += O(t[11])))
                            : (i.codec = "avc1.4d400d"))
                        : /^mp4[a,v]$/i.test(i.codec)
                        ? ((t = r.subarray(28)),
                          "esds" === si(t.subarray(4, 8)) &&
                          20 < t.length &&
                          0 !== t[19]
                            ? ((i.codec += "." + O(t[19])),
                              (i.codec +=
                                "." + O((t[20] >>> 2) & 63).replace(/^0/, "")))
                            : (i.codec = "mp4a.40.2"))
                        : (i.codec = i.codec.toLowerCase())),
                    D(e, ["mdia", "mdhd"])[0]);
                s && (i.timescale = ai(s)), n.push(i);
              }),
              n
            );
          },
          di = Fe,
          hi = Fe,
          L = Xe,
          N = {},
          M =
            ((N.ts = {
              parseType: function (e, t) {
                e = Bt(e);
                return 0 === e ? "pat" : e === t ? "pmt" : t ? "pes" : null;
              },
              parsePat: function (e) {
                var t = Ft(e),
                  i = 4 + jt(e);
                return (
                  t && (i += e[i] + 1), ((31 & e[i + 10]) << 8) | e[i + 11]
                );
              },
              parsePmt: function (e) {
                var t = {},
                  i = Ft(e),
                  s = 4 + jt(e);
                if ((i && (s += e[s] + 1), 1 & e[s + 5])) {
                  for (
                    var r = 3 + (((15 & e[s + 1]) << 8) | e[s + 2]) - 4,
                      n = 12 + (((15 & e[s + 10]) << 8) | e[s + 11]);
                    n < r;

                  ) {
                    var a = s + n;
                    (t[((31 & e[a + 1]) << 8) | e[a + 2]] = e[a]),
                      (n += 5 + (((15 & e[a + 3]) << 8) | e[a + 4]));
                  }
                  return t;
                }
              },
              parsePayloadUnitStartIndicator: Ft,
              parsePesType: function (e, t) {
                switch (t[Bt(e)]) {
                  case di.H264_STREAM_TYPE:
                    return "video";
                  case di.ADTS_STREAM_TYPE:
                    return "audio";
                  case di.METADATA_STREAM_TYPE:
                    return "timed-metadata";
                  default:
                    return null;
                }
              },
              parsePesTime: function (e) {
                var t, i, s;
                return !Ft(e) || (t = 4 + jt(e)) >= e.byteLength
                  ? null
                  : ((i = null),
                    192 & (s = e[t + 7]) &&
                      (((i = {}).pts =
                        ((14 & e[t + 9]) << 27) |
                        ((255 & e[t + 10]) << 20) |
                        ((254 & e[t + 11]) << 12) |
                        ((255 & e[t + 12]) << 5) |
                        ((254 & e[t + 13]) >>> 3)),
                      (i.pts *= 4),
                      (i.pts += (6 & e[t + 13]) >>> 1),
                      (i.dts = i.pts),
                      64 & s) &&
                      ((i.dts =
                        ((14 & e[t + 14]) << 27) |
                        ((255 & e[t + 15]) << 20) |
                        ((254 & e[t + 16]) << 12) |
                        ((255 & e[t + 17]) << 5) |
                        ((254 & e[t + 18]) >>> 3)),
                      (i.dts *= 4),
                      (i.dts += (6 & e[t + 18]) >>> 1)),
                    i);
              },
              videoPacketContainsKeyFrame: function (e) {
                for (
                  var t = 4 + jt(e), i = e.subarray(t), s = 0, r = 0, n = !1;
                  r < i.byteLength - 3;
                  r++
                )
                  if (1 === i[r + 2]) {
                    s = r + 5;
                    break;
                  }
                for (; s < i.byteLength; )
                  switch (i[s]) {
                    case 0:
                      if (0 !== i[s - 1]) s += 2;
                      else if (0 !== i[s - 2]) s++;
                      else {
                        for (
                          r + 3 !== s - 2 &&
                          "slice_layer_without_partitioning_rbsp_idr" ===
                            Ht(31 & i[r + 3]) &&
                          (n = !0);
                          1 !== i[++s] && s < i.length;

                        );
                        (r = s - 2), (s += 3);
                      }
                      break;
                    case 1:
                      0 !== i[s - 1] || 0 !== i[s - 2]
                        ? (s += 3)
                        : ("slice_layer_without_partitioning_rbsp_idr" ===
                            Ht(31 & i[r + 3]) && (n = !0),
                          (r = s - 2),
                          (s += 3));
                      break;
                    default:
                      s += 3;
                  }
                return (
                  (i = i.subarray(r)),
                  (s -= r),
                  (r = 0),
                  (n =
                    i &&
                    3 < i.byteLength &&
                    "slice_layer_without_partitioning_rbsp_idr" ===
                      Ht(31 & i[r + 3])
                      ? !0
                      : n)
                );
              },
            }),
            (N.aac = T),
            m.ONE_SECOND_IN_TS),
          ui = function (e, t) {
            for (var i, s = 0, r = 188; r < e.byteLength; )
              if (71 === e[s] && 71 === e[r]) {
                switch (((i = e.subarray(s, r)), N.ts.parseType(i, t.pid))) {
                  case "pat":
                    t.pid = N.ts.parsePat(i);
                    break;
                  case "pmt":
                    var n = N.ts.parsePmt(i);
                    (t.table = t.table || {}),
                      Object.keys(n).forEach(function (e) {
                        t.table[e] = n[e];
                      });
                }
                (s += 188), (r += 188);
              } else s++, r++;
          },
          ci = function (e, t, i) {
            for (var s, r, n, a, o = 0, l = 188, d = !1; l <= e.byteLength; )
              if (71 !== e[o] || (71 !== e[l] && l !== e.byteLength)) o++, l++;
              else {
                if (
                  ((s = e.subarray(o, l)),
                  "pes" === N.ts.parseType(s, t.pid) &&
                    ((r = N.ts.parsePesType(s, t.table)),
                    (n = N.ts.parsePayloadUnitStartIndicator(s)),
                    "audio" === r) &&
                    n &&
                    (a = N.ts.parsePesTime(s)) &&
                    ((a.type = "audio"), i.audio.push(a), (d = !0)),
                  d)
                )
                  break;
                (o += 188), (l += 188);
              }
            for (o = (l = e.byteLength) - 188, d = !1; 0 <= o; )
              if (71 !== e[o] || (71 !== e[l] && l !== e.byteLength)) o--, l--;
              else {
                if (
                  ((s = e.subarray(o, l)),
                  "pes" === N.ts.parseType(s, t.pid) &&
                    ((r = N.ts.parsePesType(s, t.table)),
                    (n = N.ts.parsePayloadUnitStartIndicator(s)),
                    "audio" === r) &&
                    n &&
                    (a = N.ts.parsePesTime(s)) &&
                    ((a.type = "audio"), i.audio.push(a), (d = !0)),
                  d)
                )
                  break;
                (o -= 188), (l -= 188);
              }
          },
          pi = function (e, t, i) {
            for (
              var s,
                r,
                n,
                a,
                o,
                l,
                d,
                h,
                u = 0,
                c = 188,
                p = !1,
                m = { data: [], size: 0 };
              c < e.byteLength;

            )
              if (71 === e[u] && 71 === e[c]) {
                if (
                  ((s = e.subarray(u, c)), "pes" === N.ts.parseType(s, t.pid))
                )
                  if (
                    ((r = N.ts.parsePesType(s, t.table)),
                    (n = N.ts.parsePayloadUnitStartIndicator(s)),
                    "video" === r &&
                      (n &&
                        !p &&
                        (a = N.ts.parsePesTime(s)) &&
                        ((a.type = "video"), i.video.push(a), (p = !0)),
                      !i.firstKeyFrame))
                  ) {
                    if (n && 0 !== m.size) {
                      for (o = new Uint8Array(m.size), l = 0; m.data.length; )
                        (d = m.data.shift()), o.set(d, l), (l += d.byteLength);
                      N.ts.videoPacketContainsKeyFrame(o) &&
                        (h = N.ts.parsePesTime(o)) &&
                        ((i.firstKeyFrame = h),
                        (i.firstKeyFrame.type = "video")),
                        (m.size = 0);
                    }
                    m.data.push(s), (m.size += s.byteLength);
                  }
                if (p && i.firstKeyFrame) break;
                (u += 188), (c += 188);
              } else u++, c++;
            for (u = (c = e.byteLength) - 188, p = !1; 0 <= u; )
              if (71 === e[u] && 71 === e[c]) {
                if (
                  ((s = e.subarray(u, c)),
                  "pes" === N.ts.parseType(s, t.pid) &&
                    ((r = N.ts.parsePesType(s, t.table)),
                    (n = N.ts.parsePayloadUnitStartIndicator(s)),
                    "video" === r) &&
                    n &&
                    (a = N.ts.parsePesTime(s)) &&
                    ((a.type = "video"), i.video.push(a), (p = !0)),
                  p)
                )
                  break;
                (u -= 188), (c -= 188);
              } else u--, c--;
          },
          mi = function (e, t) {
            var i,
              s,
              r,
              e = (
                N.aac.isLikelyAacData(e)
                  ? function (e) {
                      for (
                        var t,
                          i,
                          s = !1,
                          r = 0,
                          n = null,
                          a = null,
                          o = 0,
                          l = 0;
                        3 <= e.length - l;

                      ) {
                        switch (N.aac.parseType(e, l)) {
                          case "timed-metadata":
                            e.length - l < 10
                              ? (s = !0)
                              : (o = N.aac.parseId3TagSize(e, l)) > e.length
                              ? (s = !0)
                              : (null === a &&
                                  ((t = e.subarray(l, l + o)),
                                  (a = N.aac.parseAacTimestamp(t))),
                                (l += o));
                            break;
                          case "audio":
                            e.length - l < 7
                              ? (s = !0)
                              : (o = N.aac.parseAdtsSize(e, l)) > e.length
                              ? (s = !0)
                              : (null === n &&
                                  ((t = e.subarray(l, l + o)),
                                  (n = N.aac.parseSampleRate(t))),
                                r++,
                                (l += o));
                            break;
                          default:
                            l++;
                        }
                        if (s) return null;
                      }
                      return null === n || null === a
                        ? null
                        : {
                            audio: [
                              { type: "audio", dts: a, pts: a },
                              {
                                type: "audio",
                                dts: a + 1024 * r * (i = M / n),
                                pts: a + 1024 * r * i,
                              },
                            ],
                          };
                    }
                  : function (e) {
                      var t,
                        i = { pid: null, table: null },
                        s = {};
                      for (t in (ui(e, i), i.table))
                        if (i.table.hasOwnProperty(t))
                          switch (i.table[t]) {
                            case hi.H264_STREAM_TYPE:
                              (s.video = []),
                                pi(e, i, s),
                                0 === s.video.length && delete s.video;
                              break;
                            case hi.ADTS_STREAM_TYPE:
                              (s.audio = []),
                                ci(e, i, s),
                                0 === s.audio.length && delete s.audio;
                          }
                      return s;
                    }
              )(e);
            return e && (e.audio || e.video)
              ? ((t = t),
                (i = e).audio &&
                  i.audio.length &&
                  (("undefined" != typeof (s = t) && !isNaN(s)) ||
                    (s = i.audio[0].dts),
                  i.audio.forEach(function (e) {
                    (e.dts = L(e.dts, s)),
                      (e.pts = L(e.pts, s)),
                      (e.dtsTime = e.dts / M),
                      (e.ptsTime = e.pts / M);
                  })),
                i.video &&
                  i.video.length &&
                  (("undefined" != typeof (r = t) && !isNaN(r)) ||
                    (r = i.video[0].dts),
                  i.video.forEach(function (e) {
                    (e.dts = L(e.dts, r)),
                      (e.pts = L(e.pts, r)),
                      (e.dtsTime = e.dts / M),
                      (e.ptsTime = e.pts / M);
                  }),
                  i.firstKeyFrame) &&
                  (((t = i.firstKeyFrame).dts = L(t.dts, r)),
                  (t.pts = L(t.pts, r)),
                  (t.dtsTime = t.dts / M),
                  (t.ptsTime = t.pts / M)),
                e)
              : null;
          };
        class gi {
          constructor(e, t) {
            (this.options = t || {}), (this.self = e), this.init();
          }
          init() {
            var i, e;
            this.transmuxer && this.transmuxer.dispose(),
              (this.transmuxer = new qt(this.options)),
              (i = this.self),
              (e = this.transmuxer).on("data", function (e) {
                var t = e.initSegment,
                  t =
                    ((e.initSegment = {
                      data: t.buffer,
                      byteOffset: t.byteOffset,
                      byteLength: t.byteLength,
                    }),
                    e.data);
                (e.data = t.buffer),
                  i.postMessage(
                    {
                      action: "data",
                      segment: e,
                      byteOffset: t.byteOffset,
                      byteLength: t.byteLength,
                    },
                    [e.data]
                  );
              }),
              e.on("done", function (e) {
                i.postMessage({ action: "done" });
              }),
              e.on("gopInfo", function (e) {
                i.postMessage({ action: "gopInfo", gopInfo: e });
              }),
              e.on("videoSegmentTimingInfo", function (e) {
                var t = {
                  start: {
                    decode: m.videoTsToSeconds(e.start.dts),
                    presentation: m.videoTsToSeconds(e.start.pts),
                  },
                  end: {
                    decode: m.videoTsToSeconds(e.end.dts),
                    presentation: m.videoTsToSeconds(e.end.pts),
                  },
                  baseMediaDecodeTime: m.videoTsToSeconds(
                    e.baseMediaDecodeTime
                  ),
                };
                e.prependedContentDuration &&
                  (t.prependedContentDuration = m.videoTsToSeconds(
                    e.prependedContentDuration
                  )),
                  i.postMessage({
                    action: "videoSegmentTimingInfo",
                    videoSegmentTimingInfo: t,
                  });
              }),
              e.on("audioSegmentTimingInfo", function (e) {
                var t = {
                  start: {
                    decode: m.videoTsToSeconds(e.start.dts),
                    presentation: m.videoTsToSeconds(e.start.pts),
                  },
                  end: {
                    decode: m.videoTsToSeconds(e.end.dts),
                    presentation: m.videoTsToSeconds(e.end.pts),
                  },
                  baseMediaDecodeTime: m.videoTsToSeconds(
                    e.baseMediaDecodeTime
                  ),
                };
                e.prependedContentDuration &&
                  (t.prependedContentDuration = m.videoTsToSeconds(
                    e.prependedContentDuration
                  )),
                  i.postMessage({
                    action: "audioSegmentTimingInfo",
                    audioSegmentTimingInfo: t,
                  });
              }),
              e.on("id3Frame", function (e) {
                i.postMessage({ action: "id3Frame", id3Frame: e });
              }),
              e.on("caption", function (e) {
                i.postMessage({ action: "caption", caption: e });
              }),
              e.on("trackinfo", function (e) {
                i.postMessage({ action: "trackinfo", trackInfo: e });
              }),
              e.on("audioTimingInfo", function (e) {
                i.postMessage({
                  action: "audioTimingInfo",
                  audioTimingInfo: {
                    start: m.videoTsToSeconds(e.start),
                    end: m.videoTsToSeconds(e.end),
                  },
                });
              }),
              e.on("videoTimingInfo", function (e) {
                i.postMessage({
                  action: "videoTimingInfo",
                  videoTimingInfo: {
                    start: m.videoTsToSeconds(e.start),
                    end: m.videoTsToSeconds(e.end),
                  },
                });
              }),
              e.on("log", function (e) {
                i.postMessage({ action: "log", log: e });
              });
          }
          pushMp4Captions(e) {
            this.captionParser ||
              ((this.captionParser = new ti()), this.captionParser.init());
            var t = new Uint8Array(e.data, e.byteOffset, e.byteLength),
              e = this.captionParser.parse(t, e.trackIds, e.timescales);
            this.self.postMessage(
              {
                action: "mp4Captions",
                captions: (e && e.captions) || [],
                logs: (e && e.logs) || [],
                data: t.buffer,
              },
              [t.buffer]
            );
          }
          probeMp4StartTime({ timescales: e, data: t }) {
            e = oi(e, t);
            this.self.postMessage(
              { action: "probeMp4StartTime", startTime: e, data: t },
              [t.buffer]
            );
          }
          probeMp4Tracks({ data: e }) {
            var t = li(e);
            this.self.postMessage(
              { action: "probeMp4Tracks", tracks: t, data: e },
              [e.buffer]
            );
          }
          probeTs({ data: e, baseStartTime: t }) {
            (t =
              "number" != typeof t || isNaN(t)
                ? void 0
                : t * m.ONE_SECOND_IN_TS),
              (t = mi(e, t));
            let i = null;
            t &&
              ((i = {
                hasVideo: (t.video && 2 === t.video.length) || !1,
                hasAudio: (t.audio && 2 === t.audio.length) || !1,
              }).hasVideo && (i.videoStart = t.video[0].ptsTime),
              i.hasAudio) &&
              (i.audioStart = t.audio[0].ptsTime),
              this.self.postMessage({ action: "probeTs", result: i, data: e }, [
                e.buffer,
              ]);
          }
          clearAllMp4Captions() {
            this.captionParser && this.captionParser.clearAllCaptions();
          }
          clearParsedMp4Captions() {
            this.captionParser && this.captionParser.clearParsedCaptions();
          }
          push(e) {
            e = new Uint8Array(e.data, e.byteOffset, e.byteLength);
            this.transmuxer.push(e);
          }
          reset() {
            this.transmuxer.reset();
          }
          setTimestampOffset(e) {
            e = e.timestampOffset || 0;
            this.transmuxer.setBaseMediaDecodeTime(
              Math.round(m.secondsToVideoTs(e))
            );
          }
          setAudioAppendStart(e) {
            this.transmuxer.setAudioAppendStart(
              Math.ceil(m.secondsToVideoTs(e.appendStart))
            );
          }
          setRemux(e) {
            this.transmuxer.setRemux(e.remux);
          }
          flush(e) {
            this.transmuxer.flush(),
              self.postMessage({ action: "done", type: "transmuxed" });
          }
          endTimeline() {
            this.transmuxer.endTimeline(),
              self.postMessage({ action: "endedtimeline", type: "transmuxed" });
          }
          alignGopsWith(e) {
            this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice());
          }
        }
        self.onmessage = function (e) {
          "init" === e.data.action && e.data.options
            ? (this.messageHandlers = new gi(self, e.data.options))
            : (this.messageHandlers || (this.messageHandlers = new gi(self)),
              e.data &&
                e.data.action &&
                "init" !== e.data.action &&
                this.messageHandlers[e.data.action] &&
                this.messageHandlers[e.data.action](e.data));
        };
      })
    )
  );
  const Zd = (e, t, i) => {
      var {
          type: s,
          initSegment: r,
          captions: n,
          captionStreams: a,
          metadata: o,
          videoFrameDtsTime: l,
          videoFramePtsTime: d,
        } = e.data.segment,
        t =
          (t.buffer.push({ captions: n, captionStreams: a, metadata: o }),
          e.data.segment.boxes || { data: e.data.segment.data }),
        n = {
          type: s,
          data: new Uint8Array(t.data, t.data.byteOffset, t.data.byteLength),
          initSegment: new Uint8Array(r.data, r.byteOffset, r.byteLength),
        };
      "undefined" != typeof l && (n.videoFrameDtsTime = l),
        "undefined" != typeof d && (n.videoFramePtsTime = d),
        i(n);
    },
    eh = ({ transmuxedData: e, callback: t }) => {
      (e.buffer = []), t(e);
    },
    th = (e, t) => {
      t.gopInfo = e.data.gopInfo;
    },
    ih = (t) => {
      const {
          transmuxer: i,
          bytes: e,
          audioAppendStart: s,
          gopsToAlignWith: r,
          remux: n,
          onData: a,
          onTrackInfo: o,
          onAudioTimingInfo: l,
          onVideoTimingInfo: d,
          onVideoSegmentTimingInfo: h,
          onAudioSegmentTimingInfo: u,
          onId3: c,
          onCaptions: p,
          onDone: m,
          onEndedTimeline: g,
          onTransmuxerLog: f,
          isEndOfTimeline: y,
        } = t,
        _ = { buffer: [] };
      let v = y;
      var b, T;
      (i.onmessage = (e) => {
        i.currentTransmux !== t ||
          ("data" === e.data.action && Zd(e, _, a),
          "trackinfo" === e.data.action && o(e.data.trackInfo),
          "gopInfo" === e.data.action && th(e, _),
          "audioTimingInfo" === e.data.action && l(e.data.audioTimingInfo),
          "videoTimingInfo" === e.data.action && d(e.data.videoTimingInfo),
          "videoSegmentTimingInfo" === e.data.action &&
            h(e.data.videoSegmentTimingInfo),
          "audioSegmentTimingInfo" === e.data.action &&
            u(e.data.audioSegmentTimingInfo),
          "id3Frame" === e.data.action &&
            c([e.data.id3Frame], e.data.id3Frame.dispatchType),
          "caption" === e.data.action && p(e.data.caption),
          "endedtimeline" === e.data.action && ((v = !1), g()),
          "log" === e.data.action && f(e.data.log),
          "transmuxed" !== e.data.type) ||
          v ||
          ((i.onmessage = null), eh({ transmuxedData: _, callback: m }), sh(i));
      }),
        s && i.postMessage({ action: "setAudioAppendStart", appendStart: s }),
        Array.isArray(r) &&
          i.postMessage({ action: "alignGopsWith", gopsToAlignWith: r }),
        "undefined" != typeof n &&
          i.postMessage({ action: "setRemux", remux: n }),
        e.byteLength &&
          ((b = e instanceof ArrayBuffer ? e : e.buffer),
          (T = e instanceof ArrayBuffer ? 0 : e.byteOffset),
          i.postMessage(
            {
              action: "push",
              data: b,
              byteOffset: T,
              byteLength: e.byteLength,
            },
            [b]
          )),
        y && i.postMessage({ action: "endTimeline" }),
        i.postMessage({ action: "flush" });
    },
    sh = (e) => {
      (e.currentTransmux = null),
        e.transmuxQueue.length &&
          ((e.currentTransmux = e.transmuxQueue.shift()),
          "function" == typeof e.currentTransmux
            ? e.currentTransmux()
            : ih(e.currentTransmux));
    },
    rh = (e, t) => {
      e.postMessage({ action: t }), sh(e);
    },
    nh = (e, t) => {
      t.currentTransmux
        ? t.transmuxQueue.push(rh.bind(null, t, e))
        : ((t.currentTransmux = e), rh(t, e));
    };
  const ah = (e) => {
    e.transmuxer.currentTransmux
      ? e.transmuxer.transmuxQueue.push(e)
      : ((e.transmuxer.currentTransmux = e), ih(e));
  };
  var oh = (e) => {
      nh("reset", e);
    },
    lh =
      (ah,
      (e) => {
        const t = new Jd(),
          i = ((t.currentTransmux = null), (t.transmuxQueue = []), t.terminate);
        return (
          (t.terminate = () => (
            (t.currentTransmux = null), (t.transmuxQueue.length = 0), i.call(t)
          )),
          t.postMessage({ action: "init", options: e }),
          t
        );
      });
  function dh(t) {
    const i = t.transmuxer,
      s = t.endAction || t.action,
      r = t.callback;
    var e,
      n = gi({}, t, { endAction: null, transmuxer: null, callback: null });
    const a = (e) => {
      e.data.action === s &&
        (i.removeEventListener("message", a),
        e.data.data &&
          ((e.data.data = new Uint8Array(
            e.data.data,
            t.byteOffset || 0,
            t.byteLength || e.data.data.byteLength
          )),
          t.data) &&
          (t.data = e.data.data),
        r(e.data));
    };
    i.addEventListener("message", a),
      t.data
        ? ((e = t.data instanceof ArrayBuffer),
          (n.byteOffset = e ? 0 : t.data.byteOffset),
          (n.byteLength = t.data.byteLength),
          (e = [e ? t.data : t.data.buffer]),
          i.postMessage(n, e))
        : i.postMessage(n);
  }
  function hh(e) {
    let t = 0;
    return e.audio && t++, e.video && t++, t;
  }
  function uh(e, t) {
    var i = t.attributes || {},
      s = xh(
        (function (e) {
          e = e.attributes || {};
          if (e.CODECS) return Rn(e.CODECS);
        })(t) || []
      );
    return (
      !Ih(e, t) ||
        s.audio ||
        ((e, t) => {
          if (!Ih(e, t)) return !0;
          var t = t.attributes || {},
            i = e.mediaGroups.AUDIO[t.AUDIO];
          for (const s in i) if (!i[s].uri && !i[s].playlists) return !0;
          return !1;
        })(e, t) ||
        ((t = xh(
          (function (e, t) {
            if (e.mediaGroups.AUDIO && t) {
              var i = e.mediaGroups.AUDIO[t];
              if (i)
                for (var s in i) {
                  s = i[s];
                  if (s.default && s.playlists)
                    return Rn(s.playlists[0].attributes.CODECS);
                }
            }
            return null;
          })(e, i.AUDIO) || []
        )).audio &&
          (s.audio = t.audio)),
      s
    );
  }
  function ch(e, t) {
    return (e = e && window.getComputedStyle(e)) ? e[t] : "";
  }
  function ph(e, t) {
    let i, s;
    return (
      (i =
        (i = e.attributes.BANDWIDTH ? e.attributes.BANDWIDTH : i) ||
        window.Number.MAX_VALUE),
      (s =
        (s = t.attributes.BANDWIDTH ? t.attributes.BANDWIDTH : s) ||
        window.Number.MAX_VALUE),
      i - s
    );
  }
  const mh = { FAILURE: 2, TIMEOUT: -101, ABORTED: -102 },
    gh = (e) => {
      e.forEach((e) => {
        e.abort();
      });
    },
    fh = (e) => ({
      bandwidth: e.bandwidth,
      bytesReceived: e.bytesReceived || 0,
      roundTripTime: e.roundTripTime || 0,
    }),
    yh = (e) => {
      var t = e.target,
        t = {
          bandwidth: 1 / 0,
          bytesReceived: 0,
          roundTripTime: Date.now() - t.requestTime || 0,
        };
      return (
        (t.bytesReceived = e.loaded),
        (t.bandwidth = Math.floor(
          (t.bytesReceived / t.roundTripTime) * 8 * 1e3
        )),
        t
      );
    },
    _h = (e, t) =>
      t.timedout
        ? {
            status: t.status,
            message: "HLS request timed-out at URL: " + t.uri,
            code: mh.TIMEOUT,
            xhr: t,
          }
        : t.aborted
        ? {
            status: t.status,
            message: "HLS request aborted at URL: " + t.uri,
            code: mh.ABORTED,
            xhr: t,
          }
        : e
        ? {
            status: t.status,
            message: "HLS request errored at URL: " + t.uri,
            code: mh.FAILURE,
            xhr: t,
          }
        : "arraybuffer" === t.responseType && 0 === t.response.byteLength
        ? {
            status: t.status,
            message: "Empty HLS response at URL: " + t.uri,
            code: mh.FAILURE,
            xhr: t,
          }
        : null,
    vh = (r, n, a) => (e, t) => {
      var i = t.response,
        e = _h(e, t);
      if (e) return a(e, r);
      if (16 !== i.byteLength)
        return a(
          {
            status: t.status,
            message: "Invalid HLS key at URL: " + t.uri,
            code: mh.FAILURE,
            xhr: t,
          },
          r
        );
      var e = new DataView(i),
        s = new Uint32Array([
          e.getUint32(0),
          e.getUint32(4),
          e.getUint32(8),
          e.getUint32(12),
        ]);
      for (let e = 0; e < n.length; e++) n[e].bytes = s;
      return a(null, r);
    },
    bh = (i, s) => {
      var e,
        t = yl(i.map.bytes);
      if ("mp4" !== t)
        return (
          (e = i.map.resolvedUri || i.map.uri),
          s({
            internal: !0,
            message:
              `Found unsupported ${
                t || "unknown"
              } container for initialization segment at URL: ` + e,
            code: mh.FAILURE,
          })
        );
      dh({
        action: "probeMp4Tracks",
        data: i.map.bytes,
        transmuxer: i.transmuxer,
        callback: ({ tracks: e, data: t }) => (
          (i.map.bytes = t),
          e.forEach(function (e) {
            (i.map.tracks = i.map.tracks || {}),
              i.map.tracks[e.type] ||
                ("number" == typeof (i.map.tracks[e.type] = e).id &&
                  e.timescale &&
                  ((i.map.timescales = i.map.timescales || {}),
                  (i.map.timescales[e.id] = e.timescale)));
          }),
          s(null)
        ),
      });
    },
    Th = ({
      segment: i,
      bytes: t,
      trackInfoFn: s,
      timingInfoFn: e,
      videoSegmentTimingInfoFn: r,
      audioSegmentTimingInfoFn: n,
      id3Fn: a,
      captionsFn: o,
      isEndOfTimeline: l,
      endedTimelineFn: d,
      dataFn: h,
      doneFn: u,
      onTransmuxerLog: c,
    }) => {
      var p = (i.map && i.map.tracks) || {};
      const m = Boolean(p.audio && p.video);
      let g = e.bind(null, i, "audio", "start");
      const f = e.bind(null, i, "audio", "end");
      let y = e.bind(null, i, "video", "start");
      const _ = e.bind(null, i, "video", "end");
      dh({
        action: "probeTs",
        transmuxer: i.transmuxer,
        data: t,
        baseStartTime: i.baseStartTime,
        callback: (e) => {
          i.bytes = t = e.data;
          e = e.result;
          e &&
            (s(i, { hasAudio: e.hasAudio, hasVideo: e.hasVideo, isMuxed: m }),
            (s = null),
            e.hasAudio && !m && g(e.audioStart),
            e.hasVideo && y(e.videoStart),
            (g = null),
            (y = null)),
            ah({
              bytes: t,
              transmuxer: i.transmuxer,
              audioAppendStart: i.audioAppendStart,
              gopsToAlignWith: i.gopsToAlignWith,
              remux: m,
              onData: (e) => {
                (e.type = "combined" === e.type ? "video" : e.type), h(i, e);
              },
              onTrackInfo: (e) => {
                s && (m && (e.isMuxed = !0), s(i, e));
              },
              onAudioTimingInfo: (e) => {
                g && "undefined" != typeof e.start && (g(e.start), (g = null)),
                  f && "undefined" != typeof e.end && f(e.end);
              },
              onVideoTimingInfo: (e) => {
                y && "undefined" != typeof e.start && (y(e.start), (y = null)),
                  _ && "undefined" != typeof e.end && _(e.end);
              },
              onVideoSegmentTimingInfo: (e) => {
                r(e);
              },
              onAudioSegmentTimingInfo: (e) => {
                n(e);
              },
              onId3: (e, t) => {
                a(i, e, t);
              },
              onCaptions: (e) => {
                o(i, [e]);
              },
              isEndOfTimeline: l,
              onEndedTimeline: () => {
                d();
              },
              onTransmuxerLog: c,
              onDone: (e) => {
                u &&
                  ((e.type = "combined" === e.type ? "video" : e.type),
                  u(null, i, e));
              },
            });
        },
      });
    },
    Sh = ({
      segment: i,
      bytes: s,
      trackInfoFn: e,
      timingInfoFn: r,
      videoSegmentTimingInfoFn: t,
      audioSegmentTimingInfoFn: n,
      id3Fn: a,
      captionsFn: o,
      isEndOfTimeline: l,
      endedTimelineFn: d,
      dataFn: h,
      doneFn: u,
      onTransmuxerLog: c,
    }) => {
      let p = new Uint8Array(s);
      if (((m = p), 0 < pl(m, ["moof"]).length)) {
        i.isFmp4 = !0;
        const g = i.map["tracks"],
          f = { isFmp4: !0, hasVideo: !!g.video, hasAudio: !!g.audio },
          y =
            (g.audio &&
              g.audio.codec &&
              "enca" !== g.audio.codec &&
              (f.audioCodec = g.audio.codec),
            g.video &&
              g.video.codec &&
              "encv" !== g.video.codec &&
              (f.videoCodec = g.video.codec),
            g.video && g.audio && (f.isMuxed = !0),
            e(i, f),
            (e) => {
              h(i, {
                data: p,
                type: f.hasAudio && !f.isMuxed ? "audio" : "video",
              }),
                e && e.length && o(i, e),
                u(null, i, {});
            });
        void dh({
          action: "probeMp4StartTime",
          timescales: i.map.timescales,
          data: p,
          transmuxer: i.transmuxer,
          callback: ({ data: e, startTime: t }) => {
            (s = e.buffer),
              (i.bytes = p = e),
              f.hasAudio && !f.isMuxed && r(i, "audio", "start", t),
              f.hasVideo && r(i, "video", "start", t),
              g.video && e.byteLength && i.transmuxer
                ? dh({
                    action: "pushMp4Captions",
                    endAction: "mp4Captions",
                    transmuxer: i.transmuxer,
                    data: p,
                    timescales: i.map.timescales,
                    trackIds: [g.video.id],
                    callback: (e) => {
                      (s = e.data.buffer),
                        (i.bytes = p = e.data),
                        e.logs.forEach(function (e) {
                          c(D(e, { stream: "mp4CaptionParser" }));
                        }),
                        y(e.captions);
                    },
                  })
                : y();
          },
        });
      } else {
        var m;
        i.transmuxer
          ? ("undefined" == typeof i.container && (i.container = yl(p)),
            "ts" !== i.container && "aac" !== i.container
              ? (e(i, { hasAudio: !1, hasVideo: !1 }), u(null, i, {}))
              : Th({
                  segment: i,
                  bytes: s,
                  trackInfoFn: e,
                  timingInfoFn: r,
                  videoSegmentTimingInfoFn: t,
                  audioSegmentTimingInfoFn: n,
                  id3Fn: a,
                  captionsFn: o,
                  isEndOfTimeline: l,
                  endedTimelineFn: d,
                  dataFn: h,
                  doneFn: u,
                  onTransmuxerLog: c,
                }))
          : u(null, i, {});
      }
    },
    wh = function (
      { id: t, key: e, encryptedBytes: i, decryptionWorker: s },
      r
    ) {
      const n = (e) => {
        e.data.source === t &&
          (s.removeEventListener("message", n),
          (e = e.data.decrypted),
          r(new Uint8Array(e.bytes, e.byteOffset, e.byteLength)));
      };
      s.addEventListener("message", n);
      let a;
      (a = e.bytes.slice
        ? e.bytes.slice()
        : new Uint32Array(Array.prototype.slice.call(e.bytes))),
        s.postMessage(Od({ source: t, encrypted: i, key: a, iv: e.iv }), [
          i.buffer,
          a.buffer,
        ]);
    },
    Eh = ({
      decryptionWorker: e,
      segment: t,
      trackInfoFn: i,
      timingInfoFn: s,
      videoSegmentTimingInfoFn: r,
      audioSegmentTimingInfoFn: n,
      id3Fn: a,
      captionsFn: o,
      isEndOfTimeline: l,
      endedTimelineFn: d,
      dataFn: h,
      doneFn: u,
      onTransmuxerLog: c,
    }) => {
      wh(
        {
          id: t.requestId,
          key: t.key,
          encryptedBytes: t.encryptedBytes,
          decryptionWorker: e,
        },
        (e) => {
          (t.bytes = e),
            Sh({
              segment: t,
              bytes: t.bytes,
              trackInfoFn: i,
              timingInfoFn: s,
              videoSegmentTimingInfoFn: r,
              audioSegmentTimingInfoFn: n,
              id3Fn: a,
              captionsFn: o,
              isEndOfTimeline: l,
              endedTimelineFn: d,
              dataFn: h,
              doneFn: u,
              onTransmuxerLog: c,
            });
        }
      );
    },
    Ch = ({
      xhr: e,
      xhrOptions: t,
      decryptionWorker: i,
      segment: s,
      abortFn: r,
      progressFn: n,
      trackInfoFn: a,
      timingInfoFn: o,
      videoSegmentTimingInfoFn: l,
      audioSegmentTimingInfoFn: d,
      id3Fn: h,
      captionsFn: u,
      isEndOfTimeline: c,
      endedTimelineFn: p,
      dataFn: m,
      doneFn: g,
      onTransmuxerLog: f,
    }) => {
      const y = [];
      var _,
        v,
        i = (({
          activeXhrs: s,
          decryptionWorker: r,
          trackInfoFn: n,
          timingInfoFn: a,
          videoSegmentTimingInfoFn: o,
          audioSegmentTimingInfoFn: l,
          id3Fn: d,
          captionsFn: h,
          isEndOfTimeline: u,
          endedTimelineFn: c,
          dataFn: p,
          doneFn: m,
          onTransmuxerLog: g,
        }) => {
          let f = 0,
            y = !1;
          return (e, t) => {
            if (!y) {
              if (e) return (y = !0), gh(s), m(e, t);
              if ((f += 1) === s.length) {
                const i = function () {
                  if (t.encryptedBytes)
                    return Eh({
                      decryptionWorker: r,
                      segment: t,
                      trackInfoFn: n,
                      timingInfoFn: a,
                      videoSegmentTimingInfoFn: o,
                      audioSegmentTimingInfoFn: l,
                      id3Fn: d,
                      captionsFn: h,
                      isEndOfTimeline: u,
                      endedTimelineFn: c,
                      dataFn: p,
                      doneFn: m,
                      onTransmuxerLog: g,
                    });
                  Sh({
                    segment: t,
                    bytes: t.bytes,
                    trackInfoFn: n,
                    timingInfoFn: a,
                    videoSegmentTimingInfoFn: o,
                    audioSegmentTimingInfoFn: l,
                    id3Fn: d,
                    captionsFn: h,
                    isEndOfTimeline: u,
                    endedTimelineFn: c,
                    dataFn: p,
                    doneFn: m,
                    onTransmuxerLog: g,
                  });
                };
                if (
                  ((t.endOfAllRequests = Date.now()),
                  t.map && t.map.encryptedBytes && !t.map.bytes)
                )
                  return wh(
                    {
                      decryptionWorker: r,
                      id: t.requestId + "-init",
                      encryptedBytes: t.map.encryptedBytes,
                      key: t.map.key,
                    },
                    (e) => {
                      (t.map.bytes = e),
                        bh(t, (e) => {
                          if (e) return gh(s), m(e, t);
                          i();
                        });
                    }
                  );
                i();
              }
            }
          };
        })({
          activeXhrs: y,
          decryptionWorker: i,
          trackInfoFn: a,
          timingInfoFn: o,
          videoSegmentTimingInfoFn: l,
          audioSegmentTimingInfoFn: d,
          id3Fn: h,
          captionsFn: u,
          isEndOfTimeline: c,
          endedTimelineFn: p,
          dataFn: m,
          doneFn: g,
          onTransmuxerLog: f,
        }),
        u =
          (s.key &&
            !s.key.bytes &&
            ((a = [s.key]),
            s.map &&
              !s.map.bytes &&
              s.map.key &&
              s.map.key.resolvedUri === s.key.resolvedUri &&
              a.push(s.map.key),
            (o = e(
              D(t, { uri: s.key.resolvedUri, responseType: "arraybuffer" }),
              vh(s, a, i)
            )),
            y.push(o)),
          s.map &&
            !s.map.bytes &&
            (!s.map.key ||
              (s.key && s.key.resolvedUri === s.map.key.resolvedUri) ||
              ((l = e(
                D(t, {
                  uri: s.map.key.resolvedUri,
                  responseType: "arraybuffer",
                }),
                vh(s, [s.map.key], i)
              )),
              y.push(l)),
            (d = D(t, {
              uri: s.map.resolvedUri,
              responseType: "arraybuffer",
              headers: xd(s.map),
            })),
            ({ segment: _, finishProcessingFn: v } = [
              { segment: s, finishProcessingFn: i },
            ][0]),
            (h = e(d, (e, t) => {
              var e = _h(e, t);
              return e
                ? v(e, _)
                : ((e = new Uint8Array(t.response)),
                  _.map.key
                    ? ((_.map.encryptedBytes = e), v(null, _))
                    : ((_.map.bytes = e),
                      void bh(_, function (e) {
                        if (e)
                          return (e.xhr = t), (e.status = t.status), v(e, _);
                        v(null, _);
                      })));
            })),
            y.push(h)),
          D(t, {
            uri: (s.part && s.part.resolvedUri) || s.resolvedUri,
            responseType: "arraybuffer",
            headers: xd(s),
          }));
      ({
        segment: b,
        finishProcessingFn: T,
        responseType: S,
      } = { segment: s, finishProcessingFn: i, responseType: u.responseType });
      var b,
        T,
        S,
        w,
        E,
        c = e(u, (e, t) => {
          var e = _h(e, t);
          return e
            ? T(e, b)
            : ((e =
                "arraybuffer" !== S && t.responseText
                  ? Xd(t.responseText.substring(b.lastReachedChar || 0))
                  : t.response),
              (b.stats = fh(t)),
              b.key
                ? (b.encryptedBytes = new Uint8Array(e))
                : (b.bytes = new Uint8Array(e)),
              T(null, b));
        });
      c.addEventListener(
        "progress",
        (({ segment: w, progressFn: E } = [{ segment: s, progressFn: n }][0]),
        (e) => {
          var t = e.target;
          if (!t.aborted)
            return (
              (w.stats = D(w.stats, yh(e))),
              !w.stats.firstBytesReceivedAt &&
                w.stats.bytesReceived &&
                (w.stats.firstBytesReceivedAt = Date.now()),
              E(e, w)
            );
        })
      ),
        y.push(c);
      const C = {};
      return (
        y.forEach((e) => {
          var t, i;
          e.addEventListener(
            "loadend",
            (({ loadendState: t, abortFn: i } = [
              { loadendState: C, abortFn: r },
            ][0]),
            (e) => {
              e.target.aborted &&
                i &&
                !t.calledAbortFn &&
                (i(), (t.calledAbortFn = !0));
            })
          );
        }),
        () => gh(y)
      );
    },
    kh = Ul("CodecUtils"),
    Ih = (e, t) => {
      t = t.attributes || {};
      return (
        e &&
        e.mediaGroups &&
        e.mediaGroups.AUDIO &&
        t.AUDIO &&
        e.mediaGroups.AUDIO[t.AUDIO]
      );
    },
    xh = function (e) {
      const s = {};
      return (
        e.forEach(({ mediaType: e, type: t, details: i }) => {
          (s[e] = s[e] || []), s[e].push(Mn("" + t + i));
        }),
        Object.keys(s).forEach(function (e) {
          1 < s[e].length
            ? (kh(
                `multiple ${e} codecs found as attributes: ${s[e].join(
                  ", "
                )}. Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs.`
              ),
              (s[e] = null))
            : (s[e] = s[e][0]);
        }),
        s
      );
    },
    Ah = Ul("PlaylistSelector"),
    Ph = function (e) {
      var t;
      if (e && e.playlist)
        return (
          (t = e.playlist),
          JSON.stringify({
            id: t.id,
            bandwidth: e.bandwidth,
            width: e.width,
            height: e.height,
            codecs: (t.attributes && t.attributes.CODECS) || "",
          })
        );
    },
    Oh = function (e, s) {
      const r = e.slice();
      e.sort(function (e, t) {
        var i = s(e, t);
        return 0 === i ? r.indexOf(e) - r.indexOf(t) : i;
      });
    };
  function Dh(o, t, l, d, h, u) {
    if (o) {
      var c = {
        bandwidth: t,
        width: l,
        height: d,
        limitRenditionByPlayerDimensions: h,
      };
      let e = o.playlists,
        r =
          (pd.isAudioOnly(o) &&
            ((e = u.getAudioTrackPlaylists_()), (c.audioOnly = !0)),
          e.map((e) => {
            var t =
                e.attributes &&
                e.attributes.RESOLUTION &&
                e.attributes.RESOLUTION.width,
              i =
                e.attributes &&
                e.attributes.RESOLUTION &&
                e.attributes.RESOLUTION.height,
              s = e.attributes && e.attributes.BANDWIDTH;
            return {
              bandwidth: s || window.Number.MAX_VALUE,
              width: t,
              height: i,
              playlist: e,
            };
          })),
        n =
          (Oh(r, (e, t) => e.bandwidth - t.bandwidth),
          (r = r.filter((e) => !pd.isIncompatible(e.playlist))).filter((e) =>
            pd.isEnabled(e.playlist)
          ));
      o = (n = n.length
        ? n
        : r.filter((e) => !pd.isDisabled(e.playlist))).filter(
        (e) => e.bandwidth * L.BANDWIDTH_VARIANCE < t
      );
      let a = o[o.length - 1];
      var p = o.filter((e) => e.bandwidth === a.bandwidth)[0];
      if (!1 === h) {
        const g = p || n[0] || r[0];
        if (g && g.playlist) {
          let e = p ? "bandwidthBestRep" : "sortedPlaylistReps";
          return (
            n[0] && (e = "enabledPlaylistReps"),
            Ah(`choosing ${Ph(g)} using ${e} with options`, c),
            g.playlist
          );
        }
      } else {
        var m,
          h = o.filter((e) => e.width && e.height),
          o =
            (Oh(h, (e, t) => e.width - t.width),
            h.filter((e) => e.width === l && e.height === d)),
          o =
            ((a = o[o.length - 1]),
            o.filter((e) => e.bandwidth === a.bandwidth)[0]);
        let t, i;
        o ||
          ((m = (t = h.filter((e) => e.width > l || e.height > d)).filter(
            (e) => e.width === t[0].width && e.height === t[0].height
          )),
          (a = m[m.length - 1]),
          (i = m.filter((e) => e.bandwidth === a.bandwidth)[0]));
        let s;
        u.leastPixelDiffSelector &&
          ((m = h.map(
            (e) => (
              (e.pixelDiff = Math.abs(e.width - l) + Math.abs(e.height - d)), e
            )
          )),
          Oh(m, (e, t) =>
            e.pixelDiff === t.pixelDiff
              ? t.bandwidth - e.bandwidth
              : e.pixelDiff - t.pixelDiff
          ),
          (s = m[0]));
        const g = s || i || o || p || n[0] || r[0];
        if (g && g.playlist) {
          let e = "sortedPlaylistReps";
          return (
            s
              ? (e = "leastPixelDiffRep")
              : i
              ? (e = "resolutionPlusOneRep")
              : o
              ? (e = "resolutionBestRep")
              : p
              ? (e = "bandwidthBestRep")
              : n[0] && (e = "enabledPlaylistReps"),
            Ah(`choosing ${Ph(g)} using ${e} with options`, c),
            g.playlist
          );
        }
      }
      return Ah("could not choose a playlist with options", c), null;
    }
  }
  function Lh() {
    var e = (this.useDevicePixelRatio && window.devicePixelRatio) || 1;
    return Dh(
      this.playlists.main,
      this.systemBandwidth,
      parseInt(ch(this.tech_.el(), "width"), 10) * e,
      parseInt(ch(this.tech_.el(), "height"), 10) * e,
      this.limitRenditionByPlayerDimensions,
      this.playlistController_
    );
  }
  function Nh(e, t, i) {
    let s;
    var r;
    if (i && i.cues)
      for (s = i.cues.length; s--; )
        (r = i.cues[s]).startTime >= e && r.endTime <= t && i.removeCue(r);
  }
  const Mh = ({
      inbandTextTracks: e,
      metadataArray: t,
      timestampOffset: i,
      videoDuration: s,
    }) => {
      if (t) {
        const a = window.WebKitDataCue || window.VTTCue,
          o = e.metadataTrack_;
        if (
          o &&
          (t.forEach((e) => {
            const s = e.cueTime + i;
            !("number" != typeof s || window.isNaN(s) || s < 0) &&
              s < 1 / 0 &&
              e.frames.forEach((e) => {
                var t,
                  i = new a(s, s, e.value || e.url || e.data || "");
                (i.frame = e),
                  (i.value = e),
                  (t = i),
                  Object.defineProperties(t.frame, {
                    id: {
                      get() {
                        return (
                          T.log.warn(
                            "cue.frame.id is deprecated. Use cue.value.key instead."
                          ),
                          t.value.key
                        );
                      },
                    },
                    value: {
                      get() {
                        return (
                          T.log.warn(
                            "cue.frame.value is deprecated. Use cue.value.data instead."
                          ),
                          t.value.data
                        );
                      },
                    },
                    privateData: {
                      get() {
                        return (
                          T.log.warn(
                            "cue.frame.privateData is deprecated. Use cue.value.data instead."
                          ),
                          t.value.data
                        );
                      },
                    },
                  }),
                  o.addCue(i);
              });
          }),
          o.cues) &&
          o.cues.length
        ) {
          var r = o.cues,
            n = [];
          for (let e = 0; e < r.length; e++) r[e] && n.push(r[e]);
          const l = n.reduce((e, t) => {
              var i = e[t.startTime] || [];
              return i.push(t), (e[t.startTime] = i), e;
            }, {}),
            d = Object.keys(l).sort((e, t) => Number(e) - Number(t));
          d.forEach((e, t) => {
            e = l[e];
            const i = Number(d[t + 1]) || s;
            e.forEach((e) => {
              e.endTime = i;
            });
          });
        }
      }
    },
    Rh = (e) => "number" == typeof e && isFinite(e),
    Uh = (e) => {
      var {
          startOfSegment: t,
          duration: i,
          segment: s,
          part: r,
          playlist: { mediaSequence: n, id: a, segments: o = [] },
          mediaIndex: l,
          partIndex: d,
          timeline: h,
        } = e,
        o = o.length - 1;
      let u = "mediaIndex/partIndex increment";
      e.getMediaInfoForTime
        ? (u = `getMediaInfoForTime (${e.getMediaInfoForTime})`)
        : e.isSyncRequest && (u = "getSyncSegmentCandidate (isSyncRequest)"),
        e.independent && (u += " with independent " + e.independent);
      var c = "number" == typeof d,
        e = e.segment.uri ? "segment" : "pre-segment",
        p = c ? Zl({ preloadSegment: s }) - 1 : 0;
      return (
        e +
        ` [${n + l}/${n + o}]` +
        (c ? ` part [${d}/${p}]` : "") +
        ` segment start/end [${s.start} => ${s.end}]` +
        (c ? ` part start/end [${r.start} => ${r.end}]` : "") +
        ` startOfSegment [${t}]` +
        ` duration [${i}]` +
        ` timeline [${h}]` +
        ` selected by [${u}]` +
        ` playlist [${a}]`
      );
    },
    Bh = (e) => e + "TimingInfo",
    Fh = ({
      timelineChangeController: e,
      currentTimeline: t,
      segmentTimeline: i,
      loaderType: s,
      audioDisabled: r,
    }) => {
      return !(
        t === i ||
        ("audio" === s
          ? (t = e.lastTimelineChange({ type: "main" })) && t.to === i
          : "main" !== s ||
            !r ||
            ((t = e.pendingTimelineChange({ type: "audio" })) && t.to === i))
      );
    },
    jh = ({ segmentDuration: e, maxDuration: t }) =>
      !!e && Math.round(e) > t + Wl,
    Hh = (e, t) => {
      var i, s, r;
      return "hls" === t &&
        (t = ((e) => {
          let s = 0;
          return (
            ["video", "audio"].forEach(function (t) {
              t = e[t + "TimingInfo"];
              if (t) {
                var { start: t, end: i } = t;
                let e;
                "bigint" == typeof t || "bigint" == typeof i
                  ? (e = window.BigInt(i) - window.BigInt(t))
                  : "number" == typeof t && "number" == typeof i && (e = i - t),
                  "undefined" != typeof e && e > s && (s = e);
              }
            }),
            (s =
              "bigint" == typeof s && s < Number.MAX_SAFE_INTEGER
                ? Number(s)
                : s)
          );
        })({
          audioTimingInfo: e.audioTimingInfo,
          videoTimingInfo: e.videoTimingInfo,
        })) &&
        ((i = e.playlist.targetDuration),
        (s = jh({ segmentDuration: t, maxDuration: 2 * i })),
        (r = jh({ segmentDuration: t, maxDuration: i })),
        (t =
          `Segment with index ${e.mediaIndex} ` +
          `from playlist ${e.playlist.id} ` +
          `has a duration of ${t} ` +
          `when the reported duration is ${e.duration} ` +
          `and the target duration is ${i}. ` +
          "For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1"),
        s || r)
        ? { severity: s ? "warn" : "info", message: t }
        : null;
    };
  class qh extends T.EventTarget {
    constructor(e, t = 0) {
      if ((super(), !e))
        throw new TypeError("Initialization settings are required");
      if ("function" != typeof e.currentTime)
        throw new TypeError("No currentTime getter specified");
      if (!e.mediaSource) throw new TypeError("No MediaSource specified");
      (this.bandwidth = e.bandwidth),
        (this.throughput = { rate: 0, count: 0 }),
        (this.roundTrip = NaN),
        this.resetStats_(),
        (this.mediaIndex = null),
        (this.partIndex = null),
        (this.hasPlayed_ = e.hasPlayed),
        (this.currentTime_ = e.currentTime),
        (this.seekable_ = e.seekable),
        (this.seeking_ = e.seeking),
        (this.duration_ = e.duration),
        (this.mediaSource_ = e.mediaSource),
        (this.vhs_ = e.vhs),
        (this.loaderType_ = e.loaderType),
        (this.currentMediaInfo_ = void 0),
        (this.startingMediaInfo_ = void 0),
        (this.segmentMetadataTrack_ = e.segmentMetadataTrack),
        (this.goalBufferLength_ = e.goalBufferLength),
        (this.sourceType_ = e.sourceType),
        (this.sourceUpdater_ = e.sourceUpdater),
        (this.inbandTextTracks_ = e.inbandTextTracks),
        (this.state_ = "INIT"),
        (this.timelineChangeController_ = e.timelineChangeController),
        (this.shouldSaveSegmentTimingInfo_ = !0),
        (this.parse708captions_ = e.parse708captions),
        (this.useDtsForTimestampOffset_ = e.useDtsForTimestampOffset),
        (this.captionServices_ = e.captionServices),
        (this.exactManifestTimings = e.exactManifestTimings),
        (this.checkBufferTimeout_ = null),
        (this.error_ = void 0),
        (this.currentTimeline_ = -1),
        (this.pendingSegment_ = null),
        (this.xhrOptions_ = null),
        (this.pendingSegments_ = []),
        (this.audioDisabled_ = !1),
        (this.isPendingTimestampOffset_ = !1),
        (this.gopBuffer_ = []),
        (this.timeMapping_ = 0),
        (this.safeAppend_ = 11 <= T.browser.IE_VERSION),
        (this.appendInitSegment_ = { audio: !0, video: !0 }),
        (this.playlistOfLastInitSegment_ = { audio: null, video: null }),
        (this.callQueue_ = []),
        (this.loadQueue_ = []),
        (this.metadataQueue_ = { id3: [], caption: [] }),
        (this.waitingOnRemove_ = !1),
        (this.quotaExceededErrorRetryTimeout_ = null),
        (this.activeInitSegmentId_ = null),
        (this.initSegments_ = {}),
        (this.cacheEncryptionKeys_ = e.cacheEncryptionKeys),
        (this.keyCache_ = {}),
        (this.decrypter_ = e.decrypter),
        (this.syncController_ = e.syncController),
        (this.syncPoint_ = { segmentIndex: 0, time: 0 }),
        (this.transmuxer_ = this.createTransmuxer_()),
        (this.triggerSyncInfoUpdate_ = () => this.trigger("syncinfoupdate")),
        this.syncController_.on("syncinfoupdate", this.triggerSyncInfoUpdate_),
        this.mediaSource_.addEventListener("sourceopen", () => {
          this.isEndOfStream_() || (this.ended_ = !1);
        }),
        (this.fetchAtBuffer_ = !1),
        (this.logger_ = Ul(`SegmentLoader[${this.loaderType_}]`)),
        Object.defineProperty(this, "state", {
          get() {
            return this.state_;
          },
          set(e) {
            e !== this.state_ &&
              (this.logger_(this.state_ + " -> " + e),
              (this.state_ = e),
              this.trigger("statechange"));
          },
        }),
        this.sourceUpdater_.on("ready", () => {
          this.hasEnoughInfoToAppend_() && this.processCallQueue_();
        }),
        "main" === this.loaderType_ &&
          this.timelineChangeController_.on("pendingtimelinechange", () => {
            this.hasEnoughInfoToAppend_() && this.processCallQueue_();
          }),
        "audio" === this.loaderType_ &&
          this.timelineChangeController_.on("timelinechange", () => {
            this.hasEnoughInfoToLoad_() && this.processLoadQueue_(),
              this.hasEnoughInfoToAppend_() && this.processCallQueue_();
          });
    }
    createTransmuxer_() {
      return lh({
        remux: !1,
        alignGopsAtEnd: this.safeAppend_,
        keepOriginalTimestamps: !0,
        parse708captions: this.parse708captions_,
        captionServices: this.captionServices_,
      });
    }
    resetStats_() {
      (this.mediaBytesTransferred = 0),
        (this.mediaRequests = 0),
        (this.mediaRequestsAborted = 0),
        (this.mediaRequestsTimedout = 0),
        (this.mediaRequestsErrored = 0),
        (this.mediaTransferDuration = 0),
        (this.mediaSecondsLoaded = 0),
        (this.mediaAppends = 0);
    }
    dispose() {
      this.trigger("dispose"),
        (this.state = "DISPOSED"),
        this.pause(),
        this.abort_(),
        this.transmuxer_ && this.transmuxer_.terminate(),
        this.resetStats_(),
        this.checkBufferTimeout_ &&
          window.clearTimeout(this.checkBufferTimeout_),
        this.syncController_ &&
          this.triggerSyncInfoUpdate_ &&
          this.syncController_.off(
            "syncinfoupdate",
            this.triggerSyncInfoUpdate_
          ),
        this.off();
    }
    setAudio(e) {
      (this.audioDisabled_ = !e),
        e
          ? (this.appendInitSegment_.audio = !0)
          : this.sourceUpdater_.removeAudio(0, this.duration_());
    }
    abort() {
      "WAITING" !== this.state
        ? this.pendingSegment_ && (this.pendingSegment_ = null)
        : (this.abort_(),
          (this.state = "READY"),
          this.paused() || this.monitorBuffer_());
    }
    abort_() {
      this.pendingSegment_ &&
        this.pendingSegment_.abortRequests &&
        this.pendingSegment_.abortRequests(),
        (this.pendingSegment_ = null),
        (this.callQueue_ = []),
        (this.loadQueue_ = []),
        (this.metadataQueue_.id3 = []),
        (this.metadataQueue_.caption = []),
        this.timelineChangeController_.clearPendingTimelineChange(
          this.loaderType_
        ),
        (this.waitingOnRemove_ = !1),
        window.clearTimeout(this.quotaExceededErrorRetryTimeout_),
        (this.quotaExceededErrorRetryTimeout_ = null);
    }
    checkForAbort_(e) {
      return "APPENDING" !== this.state || this.pendingSegment_
        ? !this.pendingSegment_ || this.pendingSegment_.requestId !== e
        : ((this.state = "READY"), !0);
    }
    error(e) {
      return (
        "undefined" != typeof e &&
          (this.logger_("error occurred:", e), (this.error_ = e)),
        (this.pendingSegment_ = null),
        this.error_
      );
    }
    endOfStream() {
      (this.ended_ = !0),
        this.transmuxer_ && oh(this.transmuxer_),
        (this.gopBuffer_.length = 0),
        this.pause(),
        this.trigger("ended");
    }
    buffered_() {
      var e = this.getMediaInfo_();
      if (!this.sourceUpdater_ || !e) return Bl();
      if ("main" === this.loaderType_) {
        var { hasAudio: e, hasVideo: t, isMuxed: i } = e;
        if (t && e && !this.audioDisabled_ && !i)
          return this.sourceUpdater_.buffered();
        if (t) return this.sourceUpdater_.videoBuffered();
      }
      return this.sourceUpdater_.audioBuffered();
    }
    initSegmentForMap(e, t = !1) {
      if (!e) return null;
      var i = Dd(e);
      let s = this.initSegments_[i];
      return (
        t &&
          !s &&
          e.bytes &&
          (this.initSegments_[i] = s =
            {
              resolvedUri: e.resolvedUri,
              byterange: e.byterange,
              bytes: e.bytes,
              tracks: e.tracks,
              timescales: e.timescales,
            }),
        s || e
      );
    }
    segmentKey(e, t = !1) {
      if (!e) return null;
      var i = Ld(e);
      let s = this.keyCache_[i];
      this.cacheEncryptionKeys_ &&
        t &&
        !s &&
        e.bytes &&
        (this.keyCache_[i] = s =
          { resolvedUri: e.resolvedUri, bytes: e.bytes });
      t = { resolvedUri: (s || e).resolvedUri };
      return s && (t.bytes = s.bytes), t;
    }
    couldBeginLoading_() {
      return this.playlist_ && !this.paused();
    }
    load() {
      if ((this.monitorBuffer_(), this.playlist_))
        return "INIT" === this.state && this.couldBeginLoading_()
          ? this.init_()
          : void (
              !this.couldBeginLoading_() ||
              ("READY" !== this.state && "INIT" !== this.state) ||
              (this.state = "READY")
            );
    }
    init_() {
      return (
        (this.state = "READY"), this.resetEverything(), this.monitorBuffer_()
      );
    }
    playlist(t, i = {}) {
      if (t) {
        var s,
          r = this.playlist_,
          n = this.pendingSegment_;
        (this.playlist_ = t),
          (this.xhrOptions_ = i),
          "INIT" === this.state &&
            ((t.syncInfo = { mediaSequence: t.mediaSequence, time: 0 }),
            "main" === this.loaderType_) &&
            this.syncController_.setDateTimeMappingForStart(t);
        let e = null;
        if (
          (r && (r.id ? (e = r.id) : r.uri && (e = r.uri)),
          this.logger_(`playlist update [${e} => ${t.id || t.uri}]`),
          this.trigger("syncinfoupdate"),
          "INIT" === this.state && this.couldBeginLoading_())
        )
          return this.init_();
        r && r.uri === t.uri
          ? ((i = t.mediaSequence - r.mediaSequence),
            this.logger_(`live window shift [${i}]`),
            null !== this.mediaIndex &&
              ((this.mediaIndex -= i),
              this.mediaIndex < 0
                ? ((this.mediaIndex = null), (this.partIndex = null))
                : ((s = this.playlist_.segments[this.mediaIndex]),
                  !this.partIndex ||
                    (s.parts && s.parts.length && s.parts[this.partIndex]) ||
                    ((s = this.mediaIndex),
                    this.logger_(
                      `currently processing part (index ${this.partIndex}) no longer exists.`
                    ),
                    this.resetLoader(),
                    (this.mediaIndex = s)))),
            n &&
              ((n.mediaIndex -= i),
              n.mediaIndex < 0
                ? ((n.mediaIndex = null), (n.partIndex = null))
                : (0 <= n.mediaIndex && (n.segment = t.segments[n.mediaIndex]),
                  0 <= n.partIndex &&
                    n.segment.parts &&
                    (n.part = n.segment.parts[n.partIndex]))),
            this.syncController_.saveExpiredSegmentInfo(r, t))
          : (null !== this.mediaIndex &&
              (t.endList ? this.resyncLoader() : this.resetLoader()),
            (this.currentMediaInfo_ = void 0),
            this.trigger("playlistupdate"));
      }
    }
    pause() {
      this.checkBufferTimeout_ &&
        (window.clearTimeout(this.checkBufferTimeout_),
        (this.checkBufferTimeout_ = null));
    }
    paused() {
      return null === this.checkBufferTimeout_;
    }
    resetEverything(e) {
      (this.ended_ = !1),
        (this.appendInitSegment_ = { audio: !0, video: !0 }),
        this.resetLoader(),
        this.remove(0, 1 / 0, e),
        this.transmuxer_ &&
          (this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }),
          this.transmuxer_.postMessage({ action: "reset" }));
    }
    resetLoader() {
      (this.fetchAtBuffer_ = !1), this.resyncLoader();
    }
    resyncLoader() {
      this.transmuxer_ && oh(this.transmuxer_),
        (this.mediaIndex = null),
        (this.partIndex = null),
        (this.syncPoint_ = null),
        (this.isPendingTimestampOffset_ = !1),
        (this.callQueue_ = []),
        (this.loadQueue_ = []),
        (this.metadataQueue_.id3 = []),
        (this.metadataQueue_.caption = []),
        this.abort(),
        this.transmuxer_ &&
          this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
    }
    remove(t, i, s = () => {}, r = !1) {
      if ((i = i === 1 / 0 ? this.duration_() : i) <= t)
        this.logger_("skipping remove because end ${end} is <= start ${start}");
      else if (this.sourceUpdater_ && this.getMediaInfo_()) {
        let e = 1;
        var n = () => {
          0 === --e && s();
        };
        (!r && this.audioDisabled_) ||
          (e++, this.sourceUpdater_.removeAudio(t, i, n)),
          (!r && "main" !== this.loaderType_) ||
            ((this.gopBuffer_ = ((t, i, e, s) => {
              var r = Math.ceil((i - s) * Nl),
                n = Math.ceil((e - s) * Nl),
                i = t.slice();
              let a = t.length;
              for (; a-- && !(t[a].pts <= n); );
              if (-1 !== a) {
                let e = a + 1;
                for (; e-- && !(t[e].pts <= r); );
                (e = Math.max(e, 0)), i.splice(e, a - e + 1);
              }
              return i;
            })(this.gopBuffer_, t, i, this.timeMapping_)),
            e++,
            this.sourceUpdater_.removeVideo(t, i, n));
        for (const a in this.inbandTextTracks_)
          Nh(t, i, this.inbandTextTracks_[a]);
        Nh(t, i, this.segmentMetadataTrack_), n();
      } else
        this.logger_(
          "skipping remove because no source updater or starting media info"
        );
    }
    monitorBuffer_() {
      this.checkBufferTimeout_ && window.clearTimeout(this.checkBufferTimeout_),
        (this.checkBufferTimeout_ = window.setTimeout(
          this.monitorBufferTick_.bind(this),
          1
        ));
    }
    monitorBufferTick_() {
      "READY" === this.state && this.fillBuffer_(),
        this.checkBufferTimeout_ &&
          window.clearTimeout(this.checkBufferTimeout_),
        (this.checkBufferTimeout_ = window.setTimeout(
          this.monitorBufferTick_.bind(this),
          500
        ));
    }
    fillBuffer_() {
      var e;
      this.sourceUpdater_.updating() ||
        ((e = this.chooseNextRequest_()) &&
          ("number" == typeof e.timestampOffset &&
            ((this.isPendingTimestampOffset_ = !1),
            this.timelineChangeController_.pendingTimelineChange({
              type: this.loaderType_,
              from: this.currentTimeline_,
              to: e.timeline,
            })),
          this.loadSegment_(e)));
    }
    isEndOfStream_(
      e = this.mediaIndex,
      t = this.playlist_,
      i = this.partIndex
    ) {
      var s;
      return (
        !(!t || !this.mediaSource_) &&
        ((s = "number" == typeof e && t.segments[e]),
        (e = e + 1 === t.segments.length),
        (i = !s || !s.parts || i + 1 === s.parts.length),
        t.endList) &&
        "open" === this.mediaSource_.readyState &&
        e &&
        i
      );
    }
    chooseNextRequest_() {
      var e = this.buffered_(),
        t = Hl(e) || 0,
        e = ql(e, this.currentTime_()),
        i = !this.hasPlayed_() && 1 <= e,
        s = e >= this.goalBufferLength_(),
        r = this.playlist_.segments;
      if (!r.length || i || s) return null;
      this.syncPoint_ =
        this.syncPoint_ ||
        this.syncController_.getSyncPoint(
          this.playlist_,
          this.duration_(),
          this.currentTimeline_,
          this.currentTime_()
        );
      var n,
        i = {
          partIndex: null,
          mediaIndex: null,
          startOfSegment: null,
          playlist: this.playlist_,
          isSyncRequest: Boolean(!this.syncPoint_),
        },
        t =
          (i.isSyncRequest
            ? (i.mediaIndex = (function (t, i, s) {
                i = i || [];
                var r = [];
                let n = 0;
                for (let e = 0; e < i.length; e++) {
                  var a = i[e];
                  if (t === a.timeline && (r.push(e), (n += a.duration) > s))
                    return e;
                }
                return 0 === r.length ? 0 : r[r.length - 1];
              })(this.currentTimeline_, r, t))
            : null !== this.mediaIndex
            ? ((s = r[this.mediaIndex]),
              (n = "number" == typeof this.partIndex ? this.partIndex : -1),
              (i.startOfSegment = s.end || t),
              s.parts && s.parts[n + 1]
                ? ((i.mediaIndex = this.mediaIndex), (i.partIndex = n + 1))
                : (i.mediaIndex = this.mediaIndex + 1))
            : (({
                segmentIndex: s,
                startTime: n,
                partIndex: o,
              } = pd.getMediaInfoForTime({
                exactManifestTimings: this.exactManifestTimings,
                playlist: this.playlist_,
                currentTime: this.fetchAtBuffer_ ? t : this.currentTime_(),
                startingPartIndex: this.syncPoint_.partIndex,
                startingSegmentIndex: this.syncPoint_.segmentIndex,
                startTime: this.syncPoint_.time,
              })),
              (i.getMediaInfoForTime = this.fetchAtBuffer_
                ? "bufferedEnd " + t
                : "currentTime " + this.currentTime_()),
              (i.mediaIndex = s),
              (i.startOfSegment = n),
              (i.partIndex = o)),
          r[i.mediaIndex]);
      let a =
        t && "number" == typeof i.partIndex && t.parts && t.parts[i.partIndex];
      if (!t || ("number" == typeof i.partIndex && !a)) return null;
      "number" != typeof i.partIndex &&
        t.parts &&
        ((i.partIndex = 0), (a = t.parts[0])),
        e ||
          !a ||
          a.independent ||
          (0 === i.partIndex
            ? (n =
                (s = r[i.mediaIndex - 1]).parts &&
                s.parts.length &&
                s.parts[s.parts.length - 1]) &&
              n.independent &&
              (--i.mediaIndex,
              (i.partIndex = s.parts.length - 1),
              (i.independent = "previous segment"))
            : t.parts[i.partIndex - 1].independent &&
              (--i.partIndex, (i.independent = "previous part")));
      var o = this.mediaSource_ && "ended" === this.mediaSource_.readyState;
      return i.mediaIndex >= r.length - 1 && o && !this.seeking_()
        ? null
        : this.generateSegmentInfo_(i);
    }
    generateSegmentInfo_(e) {
      var {
          independent: e,
          playlist: t,
          mediaIndex: i,
          startOfSegment: s,
          isSyncRequest: r,
          partIndex: n,
          forceTimestampOffset: a,
          getMediaInfoForTime: o,
        } = e,
        l = t.segments[i],
        d = "number" == typeof n && l.parts[n],
        i = {
          requestId: "segment-loader-" + Math.random(),
          uri: (d && d.resolvedUri) || l.resolvedUri,
          mediaIndex: i,
          partIndex: d ? n : null,
          isSyncRequest: r,
          startOfSegment: s,
          playlist: t,
          bytes: null,
          encryptedBytes: null,
          timestampOffset: null,
          timeline: l.timeline,
          duration: (d && d.duration) || l.duration,
          segment: l,
          part: d,
          byteLength: 0,
          transmuxer: this.transmuxer_,
          getMediaInfoForTime: o,
          independent: e,
        },
        n = "undefined" != typeof a ? a : this.isPendingTimestampOffset_,
        r =
          ((i.timestampOffset = this.timestampOffsetForSegment_({
            segmentTimeline: l.timeline,
            currentTimeline: this.currentTimeline_,
            startOfSegment: s,
            buffered: this.buffered_(),
            overrideCheck: n,
          })),
          Hl(this.sourceUpdater_.audioBuffered()));
      return (
        "number" == typeof r &&
          (i.audioAppendStart = r - this.sourceUpdater_.audioTimestampOffset()),
        this.sourceUpdater_.videoBuffered().length &&
          (i.gopsToAlignWith = ((e, t, i) => {
            if ("undefined" == typeof t || null === t || !e.length) return [];
            var s = Math.ceil((t - i + 3) * Nl);
            let r;
            for (r = 0; r < e.length && !(e[r].pts > s); r++);
            return e.slice(r);
          })(
            this.gopBuffer_,
            this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(),
            this.timeMapping_
          )),
        i
      );
    }
    timestampOffsetForSegment_(e) {
      return (
        ({
          segmentTimeline: e,
          currentTimeline: t,
          startOfSegment: i,
          buffered: s,
          overrideCheck: r,
        } = [e][0]),
        r || e !== t ? (!(e < t) && s.length ? s.end(s.length - 1) : i) : null
      );
      var t, i, s, r;
    }
    earlyAbortWhenNeeded_(t) {
      if (
        !this.vhs_.tech_.paused() &&
        this.xhrOptions_.timeout &&
        this.playlist_.attributes.BANDWIDTH &&
        !(Date.now() - (t.firstBytesReceivedAt || Date.now()) < 1e3)
      ) {
        var e = this.currentTime_(),
          i = t.bandwidth,
          s = this.pendingSegment_.duration,
          t = pd.estimateSegmentRequestTime(
            s,
            i,
            this.playlist_,
            t.bytesReceived
          ),
          r =
            (([r, n, a = 1] = [
              this.buffered_(),
              e,
              this.vhs_.tech_.playbackRate(),
            ]),
            ((r.length ? r.end(r.length - 1) : 0) - n) / a - 1);
        if (!(t <= r)) {
          var n = (function (e) {
            const {
              main: t,
              currentTime: i,
              bandwidth: s,
              duration: r,
              segmentDuration: n,
              timeUntilRebuffer: a,
              currentTimeline: o,
              syncController: l,
            } = e;
            e = t.playlists.filter((e) => !pd.isIncompatible(e));
            let d = e.filter(pd.isEnabled);
            var e = (d = d.length ? d : e.filter((e) => !pd.isDisabled(e)))
                .filter(pd.hasAttribute.bind(null, "BANDWIDTH"))
                .map((e) => {
                  var t = l.getSyncPoint(e, r, o, i) ? 1 : 2;
                  return {
                    playlist: e,
                    rebufferingImpact:
                      pd.estimateSegmentRequestTime(n, s, e) * t - a,
                  };
                }),
              h = e.filter((e) => e.rebufferingImpact <= 0);
            return (
              Oh(h, (e, t) => ph(t.playlist, e.playlist)),
              h.length
                ? h[0]
                : (Oh(e, (e, t) => e.rebufferingImpact - t.rebufferingImpact),
                  e[0] || null)
            );
          })({
            main: this.vhs_.playlists.main,
            currentTime: e,
            bandwidth: i,
            duration: this.duration_(),
            segmentDuration: s,
            timeUntilRebuffer: r,
            currentTimeline: this.currentTimeline_,
            syncController: this.syncController_,
          });
          if (n) {
            var a = t - r - n.rebufferingImpact;
            let e = 0.5;
            r <= Wl && (e = 1),
              !n.playlist ||
                n.playlist.uri === this.playlist_.uri ||
                a < e ||
                ((this.bandwidth =
                  n.playlist.attributes.BANDWIDTH * L.BANDWIDTH_VARIANCE + 1),
                this.trigger("earlyabort"));
          }
        }
      }
    }
    handleAbort_(e) {
      this.logger_("Aborting " + Uh(e)), (this.mediaRequestsAborted += 1);
    }
    handleProgress_(e, t) {
      this.earlyAbortWhenNeeded_(t.stats),
        this.checkForAbort_(t.requestId) || this.trigger("progress");
    }
    handleTrackInfo_(e, t) {
      this.earlyAbortWhenNeeded_(e.stats),
        this.checkForAbort_(e.requestId) ||
          this.checkForIllegalMediaSwitch(t) ||
          ((function (t, i) {
            if ((!t && !i) || (!t && i) || (t && !i)) return !1;
            if (t !== i) {
              var s = Object.keys(t).sort(),
                r = Object.keys(i).sort();
              if (s.length !== r.length) return !1;
              for (let e = 0; e < s.length; e++) {
                var n = s[e];
                if (n !== r[e]) return !1;
                if (t[n] !== i[n]) return !1;
              }
            }
            return !0;
          })(this.currentMediaInfo_, (t = t || {})) ||
            ((this.appendInitSegment_ = { audio: !0, video: !0 }),
            (this.startingMediaInfo_ = t),
            (this.currentMediaInfo_ = t),
            this.logger_("trackinfo update", t),
            this.trigger("trackinfo")),
          this.checkForAbort_(e.requestId)) ||
          ((this.pendingSegment_.trackInfo = t),
          this.hasEnoughInfoToAppend_() && this.processCallQueue_());
    }
    handleTimingInfo_(e, t, i, s) {
      var r;
      this.earlyAbortWhenNeeded_(e.stats),
        this.checkForAbort_(e.requestId) ||
          (((e = this.pendingSegment_)[(r = Bh(t))] = e[r] || {}),
          (e[r][i] = s),
          this.logger_(`timinginfo: ${t} - ${i} - ` + s),
          this.hasEnoughInfoToAppend_() && this.processCallQueue_());
    }
    handleCaptions_(e, t) {
      if (
        (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId))
      )
        if (0 === t.length)
          this.logger_(
            "SegmentLoader received no captions from a caption event"
          );
        else if (this.pendingSegment_.hasAppendedData_) {
          const c =
              null === this.sourceUpdater_.videoTimestampOffset()
                ? this.sourceUpdater_.audioTimestampOffset()
                : this.sourceUpdater_.videoTimestampOffset(),
            p = {};
          t.forEach((e) => {
            p[e.stream] = p[e.stream] || {
              startTime: 1 / 0,
              captions: [],
              endTime: 0,
            };
            var t = p[e.stream];
            (t.startTime = Math.min(t.startTime, e.startTime + c)),
              (t.endTime = Math.max(t.endTime, e.endTime + c)),
              t.captions.push(e);
          }),
            Object.keys(p).forEach((e) => {
              var { startTime: t, endTime: i, captions: s } = p[e],
                r = this.inbandTextTracks_,
                n = (this.logger_(`adding cues from ${t} -> ${i} for ` + e), r),
                a = this.vhs_.tech_,
                o = e;
              if (!n[o]) {
                a.trigger({ type: "usage", name: "vhs-608" });
                let s = o;
                /^cc708_/.test(o) && (s = "SERVICE" + o.split("_")[1]);
                var l = a.textTracks().getTrackById(s);
                if (l) n[o] = l;
                else {
                  let e = o,
                    t = o,
                    i = !1;
                  l = ((a.options_.vhs && a.options_.vhs.captionServices) ||
                    {})[s];
                  l && ((e = l.label), (t = l.language), (i = l.default)),
                    (n[o] = a.addRemoteTextTrack(
                      {
                        kind: "captions",
                        id: s,
                        default: i,
                        label: e,
                        language: t,
                      },
                      !1
                    ).track);
                }
              }
              Nh(t, i, r[e]);
              var {
                inbandTextTracks: d,
                captionArray: l,
                timestampOffset: h,
              } = { captionArray: s, inbandTextTracks: r, timestampOffset: c };
              if (l) {
                const u = window.WebKitDataCue || window.VTTCue;
                l.forEach((e) => {
                  var t = e.stream;
                  d[t].addCue(new u(e.startTime + h, e.endTime + h, e.text));
                });
              }
            }),
            this.transmuxer_ &&
              this.transmuxer_.postMessage({
                action: "clearParsedMp4Captions",
              });
        } else
          this.metadataQueue_.caption.push(
            this.handleCaptions_.bind(this, e, t)
          );
    }
    handleId3_(e, t, i) {
      var s, r, n, a;
      this.earlyAbortWhenNeeded_(e.stats),
        this.checkForAbort_(e.requestId) ||
          (this.pendingSegment_.hasAppendedData_
            ? ((s =
                null === this.sourceUpdater_.videoTimestampOffset()
                  ? this.sourceUpdater_.audioTimestampOffset()
                  : this.sourceUpdater_.videoTimestampOffset()),
              (r = this.inbandTextTracks_),
              (n = i),
              (a = this.vhs_.tech_),
              r.metadataTrack_ ||
                ((r.metadataTrack_ = a.addRemoteTextTrack(
                  { kind: "metadata", label: "Timed Metadata" },
                  !1
                ).track),
                (r.metadataTrack_.inBandMetadataTrackDispatchType = n)),
              Mh({
                inbandTextTracks: this.inbandTextTracks_,
                metadataArray: t,
                timestampOffset: s,
                videoDuration: this.duration_(),
              }))
            : this.metadataQueue_.id3.push(
                this.handleId3_.bind(this, e, t, i)
              ));
    }
    processMetadataQueue_() {
      this.metadataQueue_.id3.forEach((e) => e()),
        this.metadataQueue_.caption.forEach((e) => e()),
        (this.metadataQueue_.id3 = []),
        (this.metadataQueue_.caption = []);
    }
    processCallQueue_() {
      var e = this.callQueue_;
      (this.callQueue_ = []), e.forEach((e) => e());
    }
    processLoadQueue_() {
      var e = this.loadQueue_;
      (this.loadQueue_ = []), e.forEach((e) => e());
    }
    hasEnoughInfoToLoad_() {
      var e;
      return (
        "audio" !== this.loaderType_ ||
        !(
          !(e = this.pendingSegment_) ||
          (this.getCurrentMediaInfo_() &&
            Fh({
              timelineChangeController: this.timelineChangeController_,
              currentTimeline: this.currentTimeline_,
              segmentTimeline: e.timeline,
              loaderType: this.loaderType_,
              audioDisabled: this.audioDisabled_,
            }))
        )
      );
    }
    getCurrentMediaInfo_(e = this.pendingSegment_) {
      return (e && e.trackInfo) || this.currentMediaInfo_;
    }
    getMediaInfo_(e = this.pendingSegment_) {
      return this.getCurrentMediaInfo_(e) || this.startingMediaInfo_;
    }
    hasEnoughInfoToAppend_() {
      var e, t, i, s;
      return (
        !!this.sourceUpdater_.ready() &&
        !(
          this.waitingOnRemove_ ||
          this.quotaExceededErrorRetryTimeout_ ||
          ((e = this.pendingSegment_), (t = this.getCurrentMediaInfo_()), !e) ||
          !t ||
          (({ hasAudio: t, hasVideo: i, isMuxed: s } = t),
          i && !e.videoTimingInfo) ||
          (t && !this.audioDisabled_ && !s && !e.audioTimingInfo) ||
          Fh({
            timelineChangeController: this.timelineChangeController_,
            currentTimeline: this.currentTimeline_,
            segmentTimeline: e.timeline,
            loaderType: this.loaderType_,
            audioDisabled: this.audioDisabled_,
          })
        )
      );
    }
    handleData_(t, e) {
      if (
        (this.earlyAbortWhenNeeded_(t.stats), !this.checkForAbort_(t.requestId))
      )
        if (this.callQueue_.length || !this.hasEnoughInfoToAppend_())
          this.callQueue_.push(this.handleData_.bind(this, t, e));
        else {
          var i = this.pendingSegment_;
          if (
            (this.setTimeMapping_(i.timeline),
            this.updateMediaSecondsLoaded_(i.part || i.segment),
            "closed" !== this.mediaSource_.readyState)
          ) {
            if (
              (t.map &&
                ((t.map = this.initSegmentForMap(t.map, !0)),
                (i.segment.map = t.map)),
              t.key && this.segmentKey(t.key, !0),
              (i.isFmp4 = t.isFmp4),
              (i.timingInfo = i.timingInfo || {}),
              i.isFmp4)
            )
              this.trigger("fmp4"), (i.timingInfo.start = i[Bh(e.type)].start);
            else {
              (t = this.getCurrentMediaInfo_()),
                (t = "main" === this.loaderType_ && t && t.hasVideo);
              let e;
              t && (e = i.videoTimingInfo.start),
                (i.timingInfo.start = this.trueSegmentStart_({
                  currentStart: i.timingInfo.start,
                  playlist: i.playlist,
                  mediaIndex: i.mediaIndex,
                  currentVideoTimestampOffset:
                    this.sourceUpdater_.videoTimestampOffset(),
                  useVideoTimingInfo: t,
                  firstVideoFrameTimeForData: e,
                  videoTimingInfo: i.videoTimingInfo,
                  audioTimingInfo: i.audioTimingInfo,
                }));
            }
            if (
              (this.updateAppendInitSegmentStatus(i, e.type),
              this.updateSourceBufferTimestampOffset_(i),
              i.isSyncRequest)
            ) {
              this.updateTimingInfoEnd_(i),
                this.syncController_.saveSegmentTimingInfo({
                  segmentInfo: i,
                  shouldSaveTimelineMapping: "main" === this.loaderType_,
                });
              t = this.chooseNextRequest_();
              if (t.mediaIndex !== i.mediaIndex || t.partIndex !== i.partIndex)
                return void this.logger_(
                  "sync segment was incorrect, not appending"
                );
              this.logger_("sync segment was correct, appending");
            }
            (i.hasAppendedData_ = !0),
              this.processMetadataQueue_(),
              this.appendData_(i, e);
          }
        }
    }
    updateAppendInitSegmentStatus(e, t) {
      "main" !== this.loaderType_ ||
        "number" != typeof e.timestampOffset ||
        e.changedTimestampOffset ||
        (this.appendInitSegment_ = { audio: !0, video: !0 }),
        this.playlistOfLastInitSegment_[t] !== e.playlist &&
          (this.appendInitSegment_[t] = !0);
    }
    getInitSegmentAndUpdateState_({
      type: e,
      initSegment: t,
      map: i,
      playlist: s,
    }) {
      if (i) {
        var r = Dd(i);
        if (this.activeInitSegmentId_ === r) return null;
        (t = this.initSegmentForMap(i, !0).bytes),
          (this.activeInitSegmentId_ = r);
      }
      return t && this.appendInitSegment_[e]
        ? ((this.playlistOfLastInitSegment_[e] = s),
          (this.appendInitSegment_[e] = !1),
          (this.activeInitSegmentId_ = null),
          t)
        : null;
    }
    handleQuotaExceededError_({ segmentInfo: e, type: t, bytes: i }, s) {
      var r = this.sourceUpdater_.audioBuffered(),
        n = this.sourceUpdater_.videoBuffered(),
        a =
          (1 < r.length &&
            this.logger_(
              "On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: " +
                Kl(r).join(", ")
            ),
          1 < n.length &&
            this.logger_(
              "On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: " +
                Kl(n).join(", ")
            ),
          r.length ? r.start(0) : 0),
        o = r.length ? r.end(r.length - 1) : 0,
        l = n.length ? n.start(0) : 0,
        d = n.length ? n.end(n.length - 1) : 0;
      o - a <= 1 && d - l <= 1
        ? (this.logger_(
            "On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. " +
              `Appended byte length: ${i.byteLength}, ` +
              `audio buffer: ${Kl(r).join(", ")}, ` +
              `video buffer: ${Kl(n).join(", ")}, `
          ),
          this.error({
            message:
              "Quota exceeded error with append of a single segment of content",
            excludeUntil: 1 / 0,
          }),
          this.trigger("error"))
        : ((this.waitingOnRemove_ = !0),
          this.callQueue_.push(
            this.appendToSourceBuffer_.bind(this, {
              segmentInfo: e,
              type: t,
              bytes: i,
            })
          ),
          (o = this.currentTime_() - 1),
          this.logger_(
            "On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to " + o
          ),
          this.remove(
            0,
            o,
            () => {
              this.logger_("On QUOTA_EXCEEDED_ERR, retrying append in 1s"),
                (this.waitingOnRemove_ = !1),
                (this.quotaExceededErrorRetryTimeout_ = window.setTimeout(
                  () => {
                    this.logger_(
                      "On QUOTA_EXCEEDED_ERR, re-processing call queue"
                    ),
                      (this.quotaExceededErrorRetryTimeout_ = null),
                      this.processCallQueue_();
                  },
                  1e3
                ));
            },
            !0
          ));
    }
    handleAppendError_({ segmentInfo: e, type: t, bytes: i }, s) {
      s &&
        (22 === s.code
          ? this.handleQuotaExceededError_({
              segmentInfo: e,
              type: t,
              bytes: i,
            })
          : (this.logger_("Received non QUOTA_EXCEEDED_ERR on append", s),
            this.error(
              `${t} append of ${i.length}b failed for segment ` +
                `#${e.mediaIndex} in playlist ` +
                e.playlist.id
            ),
            this.trigger("appenderror")));
    }
    appendToSourceBuffer_({
      segmentInfo: e,
      type: t,
      initSegment: i,
      data: s,
      bytes: r,
    }) {
      if (!r) {
        var n = [s];
        let e = s.byteLength;
        i && (n.unshift(i), (e += i.byteLength)),
          (r = ((e) => {
            let t = 0,
              i;
            return (
              e.bytes &&
                ((i = new Uint8Array(e.bytes)),
                e.segments.forEach((e) => {
                  i.set(e, t), (t += e.byteLength);
                })),
              i
            );
          })({ bytes: e, segments: n }));
      }
      this.sourceUpdater_.appendBuffer(
        { segmentInfo: e, type: t, bytes: r },
        this.handleAppendError_.bind(this, {
          segmentInfo: e,
          type: t,
          bytes: r,
        })
      );
    }
    handleSegmentTimingInfo_(e, t, i) {
      this.pendingSegment_ &&
        t === this.pendingSegment_.requestId &&
        ((t = this.pendingSegment_.segment)[(e = e + "TimingInfo")] ||
          (t[e] = {}),
        (t[e].transmuxerPrependedSeconds = i.prependedContentDuration || 0),
        (t[e].transmuxedPresentationStart = i.start.presentation),
        (t[e].transmuxedDecodeStart = i.start.decode),
        (t[e].transmuxedPresentationEnd = i.end.presentation),
        (t[e].transmuxedDecodeEnd = i.end.decode),
        (t[e].baseMediaDecodeTime = i.baseMediaDecodeTime));
    }
    appendData_(e, t) {
      var { type: i, data: s } = t;
      s &&
        s.byteLength &&
        (("audio" === i && this.audioDisabled_) ||
          ((t = this.getInitSegmentAndUpdateState_({
            type: i,
            initSegment: t.initSegment,
            playlist: e.playlist,
            map: e.isFmp4 ? e.segment.map : null,
          })),
          this.appendToSourceBuffer_({
            segmentInfo: e,
            type: i,
            initSegment: t,
            data: s,
          })));
    }
    loadSegment_(t) {
      (this.state = "WAITING"),
        (this.pendingSegment_ = t),
        this.trimBackBuffer_(t),
        "number" == typeof t.timestampOffset &&
          this.transmuxer_ &&
          this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }),
        this.hasEnoughInfoToLoad_()
          ? this.updateTransmuxerAndRequestSegment_(t)
          : this.loadQueue_.push(() => {
              var e = gi({}, t, { forceTimestampOffset: !0 });
              gi(t, this.generateSegmentInfo_(e)),
                (this.isPendingTimestampOffset_ = !1),
                this.updateTransmuxerAndRequestSegment_(t);
            });
    }
    updateTransmuxerAndRequestSegment_(s) {
      this.shouldUpdateTransmuxerTimestampOffset_(s.timestampOffset) &&
        ((this.gopBuffer_.length = 0),
        (s.gopsToAlignWith = []),
        (this.timeMapping_ = 0),
        this.transmuxer_.postMessage({ action: "reset" }),
        this.transmuxer_.postMessage({
          action: "setTimestampOffset",
          timestampOffset: s.timestampOffset,
        }));
      var e = this.createSimplifiedSegmentObj_(s),
        t = this.isEndOfStream_(s.mediaIndex, s.playlist, s.partIndex),
        i = null !== this.mediaIndex,
        r = s.timeline !== this.currentTimeline_ && 0 < s.timeline,
        t = t || (i && r);
      this.logger_("Requesting " + Uh(s)),
        e.map &&
          !e.map.bytes &&
          (this.logger_("going to request init segment."),
          (this.appendInitSegment_ = { video: !0, audio: !0 })),
        (s.abortRequests = Ch({
          xhr: this.vhs_.xhr,
          xhrOptions: this.xhrOptions_,
          decryptionWorker: this.decrypter_,
          segment: e,
          abortFn: this.handleAbort_.bind(this, s),
          progressFn: this.handleProgress_.bind(this),
          trackInfoFn: this.handleTrackInfo_.bind(this),
          timingInfoFn: this.handleTimingInfo_.bind(this),
          videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(
            this,
            "video",
            s.requestId
          ),
          audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(
            this,
            "audio",
            s.requestId
          ),
          captionsFn: this.handleCaptions_.bind(this),
          isEndOfTimeline: t,
          endedTimelineFn: () => {
            this.logger_("received endedtimeline callback");
          },
          id3Fn: this.handleId3_.bind(this),
          dataFn: this.handleData_.bind(this),
          doneFn: this.segmentRequestFinished_.bind(this),
          onTransmuxerLog: ({ message: e, level: t, stream: i }) => {
            this.logger_(
              Uh(s) + ` logged from transmuxer stream ${i} as a ${t}: ` + e
            );
          },
        }));
    }
    trimBackBuffer_(e) {
      var t = ((e, t, i) => {
        let s = t - L.BACK_BUFFER_LENGTH;
        return e.length && (s = Math.max(s, e.start(0))), Math.min(t - i, s);
      })(
        this.seekable_(),
        this.currentTime_(),
        this.playlist_.targetDuration || 10
      );
      0 < t && this.remove(0, t);
    }
    createSimplifiedSegmentObj_(e) {
      var t = e.segment,
        i = e.part,
        i = {
          resolvedUri: (i || t).resolvedUri,
          byterange: (i || t).byterange,
          requestId: e.requestId,
          transmuxer: e.transmuxer,
          audioAppendStart: e.audioAppendStart,
          gopsToAlignWith: e.gopsToAlignWith,
          part: e.part,
        },
        s = e.playlist.segments[e.mediaIndex - 1];
      return (
        s &&
          s.timeline === t.timeline &&
          (s.videoTimingInfo
            ? (i.baseStartTime = s.videoTimingInfo.transmuxedDecodeEnd)
            : s.audioTimingInfo &&
              (i.baseStartTime = s.audioTimingInfo.transmuxedDecodeEnd)),
        t.key &&
          ((s =
            t.key.iv ||
            new Uint32Array([
              0,
              0,
              0,
              e.mediaIndex + e.playlist.mediaSequence,
            ])),
          (i.key = this.segmentKey(t.key)),
          (i.key.iv = s)),
        t.map && (i.map = this.initSegmentForMap(t.map)),
        i
      );
    }
    saveTransferStats_(e) {
      (this.mediaRequests += 1),
        e &&
          ((this.mediaBytesTransferred += e.bytesReceived),
          (this.mediaTransferDuration += e.roundTripTime));
    }
    saveBandwidthRelatedStats_(e, t) {
      (this.pendingSegment_.byteLength = t.bytesReceived),
        e < 1 / 60
          ? this.logger_(
              "Ignoring segment's bandwidth because its duration of " +
                e +
                " is less than the min to record " +
                1 / 60
            )
          : ((this.bandwidth = t.bandwidth),
            (this.roundTrip = t.roundTripTime));
    }
    handleTimeout_() {
      (this.mediaRequestsTimedout += 1),
        (this.bandwidth = 1),
        (this.roundTrip = NaN),
        this.trigger("bandwidthupdate"),
        this.trigger("timeout");
    }
    segmentRequestFinished_(e, t, i) {
      if (this.callQueue_.length)
        this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, t, i));
      else if (
        (this.saveTransferStats_(t.stats),
        this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId)
      ) {
        if (e)
          return (
            (this.pendingSegment_ = null),
            (this.state = "READY"),
            e.code === mh.ABORTED
              ? void 0
              : (this.pause(),
                e.code === mh.TIMEOUT
                  ? void this.handleTimeout_()
                  : ((this.mediaRequestsErrored += 1),
                    this.error(e),
                    void this.trigger("error")))
          );
        e = this.pendingSegment_;
        this.saveBandwidthRelatedStats_(e.duration, t.stats),
          (e.endOfAllRequests = t.endOfAllRequests),
          i.gopInfo &&
            (this.gopBuffer_ = ((e, t, i) => {
              if (!t.length) return e;
              if (i) return t.slice();
              var s = t[0].pts;
              let r = 0;
              for (r; r < e.length && !(e[r].pts >= s); r++);
              return e.slice(0, r).concat(t);
            })(this.gopBuffer_, i.gopInfo, this.safeAppend_)),
          (this.state = "APPENDING"),
          this.trigger("appending"),
          this.waitForAppendsToComplete_(e);
      }
    }
    setTimeMapping_(e) {
      e = this.syncController_.mappingForTimeline(e);
      null !== e && (this.timeMapping_ = e);
    }
    updateMediaSecondsLoaded_(e) {
      "number" == typeof e.start && "number" == typeof e.end
        ? (this.mediaSecondsLoaded += e.end - e.start)
        : (this.mediaSecondsLoaded += e.duration);
    }
    shouldUpdateTransmuxerTimestampOffset_(e) {
      return (
        null !== e &&
        (("main" === this.loaderType_ &&
          e !== this.sourceUpdater_.videoTimestampOffset()) ||
          (!this.audioDisabled_ &&
            e !== this.sourceUpdater_.audioTimestampOffset()))
      );
    }
    trueSegmentStart_({
      currentStart: e,
      playlist: t,
      mediaIndex: i,
      firstVideoFrameTimeForData: s,
      currentVideoTimestampOffset: r,
      useVideoTimingInfo: n,
      videoTimingInfo: a,
      audioTimingInfo: o,
    }) {
      return "undefined" != typeof e
        ? e
        : n
        ? ((e = t.segments[i - 1]),
          0 !== i && e && "undefined" != typeof e.start && e.end === s + r
            ? a.start
            : s)
        : o.start;
    }
    waitForAppendsToComplete_(e) {
      var t,
        i,
        s = this.getCurrentMediaInfo_(e);
      s
        ? (({ hasAudio: s, hasVideo: i, isMuxed: t } = s),
          (i = "main" === this.loaderType_ && i),
          (s = !this.audioDisabled_ && s && !t),
          (e.waitingOnAppends = 0),
          e.hasAppendedData_
            ? (i && e.waitingOnAppends++,
              s && e.waitingOnAppends++,
              i &&
                this.sourceUpdater_.videoQueueCallback(
                  this.checkAppendsDone_.bind(this, e)
                ),
              s &&
                this.sourceUpdater_.audioQueueCallback(
                  this.checkAppendsDone_.bind(this, e)
                ))
            : (e.timingInfo ||
                "number" != typeof e.timestampOffset ||
                (this.isPendingTimestampOffset_ = !0),
              (e.timingInfo = { start: 0 }),
              e.waitingOnAppends++,
              this.isPendingTimestampOffset_ ||
                (this.updateSourceBufferTimestampOffset_(e),
                this.processMetadataQueue_()),
              this.checkAppendsDone_(e)))
        : (this.error({
            message:
              "No starting media returned, likely due to an unsupported media format.",
            playlistExclusionDuration: 1 / 0,
          }),
          this.trigger("error"));
    }
    checkAppendsDone_(e) {
      this.checkForAbort_(e.requestId) ||
        (e.waitingOnAppends--,
        0 === e.waitingOnAppends && this.handleAppendsDone_());
    }
    checkForIllegalMediaSwitch(e) {
      (i = this.loaderType_), (t = this.getCurrentMediaInfo_()), (e = e);
      var t,
        i =
          "main" === i && t && e
            ? e.hasAudio || e.hasVideo
              ? t.hasVideo && !e.hasVideo
                ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest."
                : !t.hasVideo && e.hasVideo
                ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest."
                : null
              : "Neither audio nor video found in segment."
            : null;
      return (
        !!i &&
        (this.error({ message: i, playlistExclusionDuration: 1 / 0 }),
        this.trigger("error"),
        !0)
      );
    }
    updateSourceBufferTimestampOffset_(t) {
      if (
        null !== t.timestampOffset &&
        "number" == typeof t.timingInfo.start &&
        !t.changedTimestampOffset &&
        "main" === this.loaderType_
      ) {
        let e = !1;
        (t.timestampOffset -=
          this.getSegmentStartTimeForTimestampOffsetCalculation_({
            videoTimingInfo: t.segment.videoTimingInfo,
            audioTimingInfo: t.segment.audioTimingInfo,
            timingInfo: t.timingInfo,
          })),
          (t.changedTimestampOffset = !0),
          t.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() &&
            (this.sourceUpdater_.videoTimestampOffset(t.timestampOffset),
            (e = !0)),
          t.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() &&
            (this.sourceUpdater_.audioTimestampOffset(t.timestampOffset),
            (e = !0)),
          e && this.trigger("timestampoffset");
      }
    }
    getSegmentStartTimeForTimestampOffsetCalculation_({
      videoTimingInfo: e,
      audioTimingInfo: t,
      timingInfo: i,
    }) {
      return this.useDtsForTimestampOffset_
        ? e && "number" == typeof e.transmuxedDecodeStart
          ? e.transmuxedDecodeStart
          : t && "number" == typeof t.transmuxedDecodeStart
          ? t.transmuxedDecodeStart
          : i.start
        : i.start;
    }
    updateTimingInfoEnd_(e) {
      e.timingInfo = e.timingInfo || {};
      var t = this.getMediaInfo_(),
        t =
          "main" === this.loaderType_ && t && t.hasVideo && e.videoTimingInfo
            ? e.videoTimingInfo
            : e.audioTimingInfo;
      t &&
        (e.timingInfo.end =
          "number" == typeof t.end ? t.end : t.start + e.duration);
    }
    handleAppendsDone_() {
      var e, t, i;
      this.pendingSegment_ && this.trigger("appendsdone"),
        this.pendingSegment_
          ? ((e = this.pendingSegment_),
            this.updateTimingInfoEnd_(e),
            this.shouldSaveSegmentTimingInfo_ &&
              this.syncController_.saveSegmentTimingInfo({
                segmentInfo: e,
                shouldSaveTimelineMapping: "main" === this.loaderType_,
              }),
            (t = Hh(e, this.sourceType_)) &&
              ("warn" === t.severity
                ? T.log.warn(t.message)
                : this.logger_(t.message)),
            this.recordThroughput_(e),
            (this.pendingSegment_ = null),
            (this.state = "READY"),
            e.isSyncRequest &&
            (this.trigger("syncinfoupdate"), !e.hasAppendedData_)
              ? this.logger_("Throwing away un-appended sync request " + Uh(e))
              : (this.logger_("Appended " + Uh(e)),
                this.addSegmentMetadataCue_(e),
                (this.fetchAtBuffer_ = !0),
                this.currentTimeline_ !== e.timeline &&
                  (this.timelineChangeController_.lastTimelineChange({
                    type: this.loaderType_,
                    from: this.currentTimeline_,
                    to: e.timeline,
                  }),
                  "main" !== this.loaderType_ ||
                    this.audioDisabled_ ||
                    this.timelineChangeController_.lastTimelineChange({
                      type: "audio",
                      from: this.currentTimeline_,
                      to: e.timeline,
                    })),
                (this.currentTimeline_ = e.timeline),
                this.trigger("syncinfoupdate"),
                (t = e.segment),
                (i = e.part),
                (t =
                  t.end &&
                  this.currentTime_() - t.end > 3 * e.playlist.targetDuration),
                (i =
                  i &&
                  i.end &&
                  this.currentTime_() - i.end >
                    3 * e.playlist.partTargetDuration),
                t || i
                  ? (this.logger_(`bad ${t ? "segment" : "part"} ` + Uh(e)),
                    this.resetEverything())
                  : (null !== this.mediaIndex &&
                      this.trigger("bandwidthupdate"),
                    this.trigger("progress"),
                    (this.mediaIndex = e.mediaIndex),
                    (this.partIndex = e.partIndex),
                    this.isEndOfStream_(
                      e.mediaIndex,
                      e.playlist,
                      e.partIndex
                    ) && this.endOfStream(),
                    this.trigger("appended"),
                    e.hasAppendedData_ && this.mediaAppends++,
                    this.paused() || this.monitorBuffer_())))
          : ((this.state = "READY"), this.paused() || this.monitorBuffer_());
    }
    recordThroughput_(e) {
      var t, i;
      e.duration < 1 / 60
        ? this.logger_(
            "Ignoring segment's throughput because its duration of " +
              e.duration +
              " is less than the min to record " +
              1 / 60
          )
        : ((t = this.throughput.rate),
          (i = Date.now() - e.endOfAllRequests + 1),
          (e = Math.floor((e.byteLength / i) * 8 * 1e3)),
          (this.throughput.rate += (e - t) / ++this.throughput.count));
    }
    addSegmentMetadataCue_(e) {
      var t, i, s, r;
      this.segmentMetadataTrack_ &&
        ((t = (r = e.segment).start), (i = r.end), Rh(t)) &&
        Rh(i) &&
        (Nh(t, i, this.segmentMetadataTrack_),
        (s = window.WebKitDataCue || window.VTTCue),
        (r = {
          custom: r.custom,
          dateTimeObject: r.dateTimeObject,
          dateTimeString: r.dateTimeString,
          bandwidth: e.playlist.attributes.BANDWIDTH,
          resolution: e.playlist.attributes.RESOLUTION,
          codecs: e.playlist.attributes.CODECS,
          byteLength: e.byteLength,
          uri: e.uri,
          timeline: e.timeline,
          playlist: e.playlist.id,
          start: t,
          end: i,
        }),
        ((e = new s(t, i, JSON.stringify(r))).value = r),
        this.segmentMetadataTrack_.addCue(e));
    }
  }
  function Vh() {}
  function $h(e) {
    return "string" != typeof e ? e : e.replace(/./, (e) => e.toUpperCase());
  }
  const Wh = ["video", "audio"],
    Gh = (e, t) => {
      var i = t[e + "Buffer"];
      return (i && i.updating) || t.queuePending[e];
    },
    zh = (i, s) => {
      if (0 !== s.queue.length) {
        let e = 0,
          t = s.queue[e];
        if ("mediaSource" === t.type)
          s.updating() ||
            "closed" === s.mediaSource.readyState ||
            (s.queue.shift(),
            t.action(s),
            t.doneFn && t.doneFn(),
            zh("audio", s),
            zh("video", s));
        else if (
          "mediaSource" !== i &&
          s.ready() &&
          "closed" !== s.mediaSource.readyState &&
          !Gh(i, s)
        ) {
          if (t.type !== i) {
            if (
              null ===
              (e = ((t, i) => {
                for (let e = 0; e < i.length; e++) {
                  var s = i[e];
                  if ("mediaSource" === s.type) return null;
                  if (s.type === t) return e;
                }
                return null;
              })(i, s.queue))
            )
              return;
            t = s.queue[e];
          }
          s.queue.splice(e, 1),
            (s.queuePending[i] = t).action(i, s),
            t.doneFn || ((s.queuePending[i] = null), zh(i, s));
        }
      }
    },
    Xh = (e, t) => {
      var i = t[e + "Buffer"],
        s = $h(e);
      i &&
        (i.removeEventListener("updateend", t[`on${s}UpdateEnd_`]),
        i.removeEventListener("error", t[`on${s}Error_`]),
        (t.codecs[e] = null),
        (t[e + "Buffer"] = null));
    },
    Kh = (e, t) =>
      e && t && -1 !== Array.prototype.indexOf.call(e.sourceBuffers, t),
    Yh = {
      appendBuffer: (s, r, n) => (t, i) => {
        var e = i[t + "Buffer"];
        if (Kh(i.mediaSource, e)) {
          i.logger_(
            `Appending segment ${r.mediaIndex}'s ${s.length} bytes to ${t}Buffer`
          );
          try {
            e.appendBuffer(s);
          } catch (e) {
            i.logger_(
              `Error with code ${e.code} ` +
                (22 === e.code ? "(QUOTA_EXCEEDED_ERR) " : "") +
                `when appending segment ${r.mediaIndex} to ${t}Buffer`
            ),
              (i.queuePending[t] = null),
              n(e);
          }
        }
      },
      remove: (s, r) => (t, i) => {
        var e = i[t + "Buffer"];
        if (Kh(i.mediaSource, e)) {
          i.logger_(`Removing ${s} to ${r} from ${t}Buffer`);
          try {
            e.remove(s, r);
          } catch (e) {
            i.logger_(`Remove ${s} to ${r} from ${t}Buffer failed`);
          }
        }
      },
      timestampOffset: (s) => (e, t) => {
        var i = t[e + "Buffer"];
        Kh(t.mediaSource, i) &&
          (t.logger_(`Setting ${e}timestampOffset to ` + s),
          (i.timestampOffset = s));
      },
      callback: (i) => (e, t) => {
        i();
      },
      endOfStream: (t) => (e) => {
        if ("open" === e.mediaSource.readyState) {
          e.logger_(`Calling mediaSource endOfStream(${t || ""})`);
          try {
            e.mediaSource.endOfStream(t);
          } catch (e) {
            T.log.warn("Failed to call media source endOfStream", e);
          }
        }
      },
      duration: (t) => (e) => {
        e.logger_("Setting mediaSource duration to " + t);
        try {
          e.mediaSource.duration = t;
        } catch (e) {
          T.log.warn("Failed to set media source duration", e);
        }
      },
      abort: () => (t, e) => {
        if ("open" === e.mediaSource.readyState) {
          var i = e[t + "Buffer"];
          if (Kh(e.mediaSource, i)) {
            e.logger_(`calling abort on ${t}Buffer`);
            try {
              i.abort();
            } catch (e) {
              T.log.warn(`Failed to abort on ${t}Buffer`, e);
            }
          }
        }
      },
      addSourceBuffer: (s, r) => (e) => {
        var t = $h(s),
          i = Un(r),
          i =
            (e.logger_(`Adding ${s}Buffer with codec ${r} to mediaSource`),
            e.mediaSource.addSourceBuffer(i));
        i.addEventListener("updateend", e[`on${t}UpdateEnd_`]),
          i.addEventListener("error", e[`on${t}Error_`]),
          (e.codecs[s] = r),
          (e[s + "Buffer"] = i);
      },
      removeSourceBuffer: (i) => (e) => {
        var t = e[i + "Buffer"];
        if ((Xh(i, e), Kh(e.mediaSource, t))) {
          e.logger_(
            `Removing ${i}Buffer with codec ${e.codecs[i]} from mediaSource`
          );
          try {
            e.mediaSource.removeSourceBuffer(t);
          } catch (e) {
            T.log.warn(`Failed to removeSourceBuffer ${i}Buffer`, e);
          }
        }
      },
      changeType: (r) => (e, t) => {
        var i = t[e + "Buffer"],
          s = Un(r);
        Kh(t.mediaSource, i) &&
          t.codecs[e] !== r &&
          (t.logger_(`changing ${e}Buffer codec from ${t.codecs[e]} to ` + r),
          i.changeType(s),
          (t.codecs[e] = r));
      },
    },
    Qh = ({ type: e, sourceUpdater: t, action: i, doneFn: s, name: r }) => {
      t.queue.push({ type: e, action: i, doneFn: s, name: r }), zh(e, t);
    },
    Jh = (i, s) => (e) => {
      var t;
      s.queuePending[i] &&
        ((t = s.queuePending[i].doneFn), (s.queuePending[i] = null), t) &&
        t(s[i + "Error_"]),
        zh(i, s);
    };
  class Zh extends T.EventTarget {
    constructor(e) {
      super(),
        (this.mediaSource = e),
        (this.sourceopenListener_ = () => zh("mediaSource", this)),
        this.mediaSource.addEventListener(
          "sourceopen",
          this.sourceopenListener_
        ),
        (this.logger_ = Ul("SourceUpdater")),
        (this.audioTimestampOffset_ = 0),
        (this.videoTimestampOffset_ = 0),
        (this.queue = []),
        (this.queuePending = { audio: null, video: null }),
        (this.delayedAudioAppendQueue_ = []),
        (this.videoAppendQueued_ = !1),
        (this.codecs = {}),
        (this.onVideoUpdateEnd_ = Jh("video", this)),
        (this.onAudioUpdateEnd_ = Jh("audio", this)),
        (this.onVideoError_ = (e) => {
          this.videoError_ = e;
        }),
        (this.onAudioError_ = (e) => {
          this.audioError_ = e;
        }),
        (this.createdSourceBuffers_ = !1),
        (this.initializedEme_ = !1),
        (this.triggeredReady_ = !1);
    }
    initializedEme() {
      (this.initializedEme_ = !0), this.triggerReady();
    }
    hasCreatedSourceBuffers() {
      return this.createdSourceBuffers_;
    }
    hasInitializedAnyEme() {
      return this.initializedEme_;
    }
    ready() {
      return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme();
    }
    createSourceBuffers(e) {
      this.hasCreatedSourceBuffers() ||
        (this.addOrChangeSourceBuffers(e),
        (this.createdSourceBuffers_ = !0),
        this.trigger("createdsourcebuffers"),
        this.triggerReady());
    }
    triggerReady() {
      this.ready() &&
        !this.triggeredReady_ &&
        ((this.triggeredReady_ = !0), this.trigger("ready"));
    }
    addSourceBuffer(e, t) {
      Qh({
        type: "mediaSource",
        sourceUpdater: this,
        action: Yh.addSourceBuffer(e, t),
        name: "addSourceBuffer",
      });
    }
    abort(e) {
      Qh({ type: e, sourceUpdater: this, action: Yh.abort(e), name: "abort" });
    }
    removeSourceBuffer(e) {
      this.canRemoveSourceBuffer()
        ? Qh({
            type: "mediaSource",
            sourceUpdater: this,
            action: Yh.removeSourceBuffer(e),
            name: "removeSourceBuffer",
          })
        : T.log.error("removeSourceBuffer is not supported!");
    }
    canRemoveSourceBuffer() {
      return (
        !T.browser.IE_VERSION &&
        !T.browser.IS_FIREFOX &&
        window.MediaSource &&
        window.MediaSource.prototype &&
        "function" == typeof window.MediaSource.prototype.removeSourceBuffer
      );
    }
    static canChangeType() {
      return (
        window.SourceBuffer &&
        window.SourceBuffer.prototype &&
        "function" == typeof window.SourceBuffer.prototype.changeType
      );
    }
    canChangeType() {
      return this.constructor.canChangeType();
    }
    changeType(e, t) {
      this.canChangeType()
        ? Qh({
            type: e,
            sourceUpdater: this,
            action: Yh.changeType(t),
            name: "changeType",
          })
        : T.log.error("changeType is not supported!");
    }
    addOrChangeSourceBuffers(i) {
      if (!i || "object" != typeof i || 0 === Object.keys(i).length)
        throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");
      Object.keys(i).forEach((e) => {
        var t = i[e];
        if (!this.hasCreatedSourceBuffers()) return this.addSourceBuffer(e, t);
        this.canChangeType() && this.changeType(e, t);
      });
    }
    appendBuffer(e, t) {
      var { segmentInfo: i, type: s, bytes: r } = e;
      (this.processedAppend_ = !0),
        "audio" === s && this.videoBuffer && !this.videoAppendQueued_
          ? (this.delayedAudioAppendQueue_.push([e, t]),
            this.logger_(
              `delayed audio append of ${r.length} until video append`
            ))
          : ((e = t),
            Qh({
              type: s,
              sourceUpdater: this,
              action: Yh.appendBuffer(r, i || { mediaIndex: -1 }, e),
              doneFn: t,
              name: "appendBuffer",
            }),
            "video" === s &&
              ((this.videoAppendQueued_ = !0),
              this.delayedAudioAppendQueue_.length) &&
              ((r = this.delayedAudioAppendQueue_.slice()),
              this.logger_(`queuing delayed audio ${r.length} appendBuffers`),
              (this.delayedAudioAppendQueue_.length = 0),
              r.forEach((e) => {
                this.appendBuffer.apply(this, e);
              })));
    }
    audioBuffered() {
      return (
        (Kh(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered) ||
        Bl()
      );
    }
    videoBuffered() {
      return (
        (Kh(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered) ||
        Bl()
      );
    }
    buffered() {
      var e = Kh(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null,
        t = Kh(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
      if (t && !e) return this.audioBuffered();
      if (e && !t) return this.videoBuffered();
      {
        var r = this.audioBuffered();
        var n = this.videoBuffered();
        let e = null,
          t = null,
          i = 0;
        var a = [],
          o = [];
        if (!(r && r.length && n && n.length)) return Bl();
        let s = r.length;
        for (; s--; )
          a.push({ time: r.start(s), type: "start" }),
            a.push({ time: r.end(s), type: "end" });
        for (s = n.length; s--; )
          a.push({ time: n.start(s), type: "start" }),
            a.push({ time: n.end(s), type: "end" });
        for (
          a.sort(function (e, t) {
            return e.time - t.time;
          }),
            s = 0;
          s < a.length;
          s++
        )
          "start" === a[s].type
            ? 2 === ++i && (e = a[s].time)
            : "end" === a[s].type && 1 === --i && (t = a[s].time),
            null !== e &&
              null !== t &&
              (o.push([e, t]), (e = null), (t = null));
        return Bl(o);
        return;
      }
    }
    setDuration(e, t = Vh) {
      Qh({
        type: "mediaSource",
        sourceUpdater: this,
        action: Yh.duration(e),
        name: "duration",
        doneFn: t,
      });
    }
    endOfStream(e = null, t = Vh) {
      "string" != typeof e && (e = void 0),
        Qh({
          type: "mediaSource",
          sourceUpdater: this,
          action: Yh.endOfStream(e),
          name: "endOfStream",
          doneFn: t,
        });
    }
    removeAudio(e, t, i = Vh) {
      this.audioBuffered().length && 0 !== this.audioBuffered().end(0)
        ? Qh({
            type: "audio",
            sourceUpdater: this,
            action: Yh.remove(e, t),
            doneFn: i,
            name: "remove",
          })
        : i();
    }
    removeVideo(e, t, i = Vh) {
      this.videoBuffered().length && 0 !== this.videoBuffered().end(0)
        ? Qh({
            type: "video",
            sourceUpdater: this,
            action: Yh.remove(e, t),
            doneFn: i,
            name: "remove",
          })
        : i();
    }
    updating() {
      return !(!Gh("audio", this) && !Gh("video", this));
    }
    audioTimestampOffset(e) {
      return (
        "undefined" != typeof e &&
          this.audioBuffer &&
          this.audioTimestampOffset_ !== e &&
          (Qh({
            type: "audio",
            sourceUpdater: this,
            action: Yh.timestampOffset(e),
            name: "timestampOffset",
          }),
          (this.audioTimestampOffset_ = e)),
        this.audioTimestampOffset_
      );
    }
    videoTimestampOffset(e) {
      return (
        "undefined" != typeof e &&
          this.videoBuffer &&
          this.videoTimestampOffset !== e &&
          (Qh({
            type: "video",
            sourceUpdater: this,
            action: Yh.timestampOffset(e),
            name: "timestampOffset",
          }),
          (this.videoTimestampOffset_ = e)),
        this.videoTimestampOffset_
      );
    }
    audioQueueCallback(e) {
      this.audioBuffer &&
        Qh({
          type: "audio",
          sourceUpdater: this,
          action: Yh.callback(e),
          name: "callback",
        });
    }
    videoQueueCallback(e) {
      this.videoBuffer &&
        Qh({
          type: "video",
          sourceUpdater: this,
          action: Yh.callback(e),
          name: "callback",
        });
    }
    dispose() {
      this.trigger("dispose"),
        Wh.forEach((e) => {
          this.abort(e),
            this.canRemoveSourceBuffer()
              ? this.removeSourceBuffer(e)
              : this[e + "QueueCallback"](() => Xh(e, this));
        }),
        (this.videoAppendQueued_ = !1),
        (this.delayedAudioAppendQueue_.length = 0),
        this.sourceopenListener_ &&
          this.mediaSource.removeEventListener(
            "sourceopen",
            this.sourceopenListener_
          ),
        this.off();
    }
  }
  const eu = (e) =>
      decodeURIComponent(escape(String.fromCharCode.apply(null, e))),
    tu = new Uint8Array("\n\n".split("").map((e) => e.charCodeAt(0)));
  class iu extends qh {
    constructor(e, t = {}) {
      super(e, t),
        (this.mediaSource_ = null),
        (this.subtitlesTrack_ = null),
        (this.loaderType_ = "subtitle"),
        (this.featuresNativeTextTracks_ = e.featuresNativeTextTracks),
        (this.shouldSaveSegmentTimingInfo_ = !1);
    }
    createTransmuxer_() {
      return null;
    }
    buffered_() {
      var e;
      return this.subtitlesTrack_ &&
        this.subtitlesTrack_.cues &&
        this.subtitlesTrack_.cues.length
        ? Bl([
            [
              (e = this.subtitlesTrack_.cues)[0].startTime,
              e[e.length - 1].startTime,
            ],
          ])
        : Bl();
    }
    initSegmentForMap(e, t = !1) {
      if (!e) return null;
      var i = Dd(e);
      let s = this.initSegments_[i];
      return (
        t &&
          !s &&
          e.bytes &&
          ((t = tu.byteLength + e.bytes.byteLength),
          (t = new Uint8Array(t)).set(e.bytes),
          t.set(tu, e.bytes.byteLength),
          (this.initSegments_[i] = s =
            { resolvedUri: e.resolvedUri, byterange: e.byterange, bytes: t })),
        s || e
      );
    }
    couldBeginLoading_() {
      return this.playlist_ && this.subtitlesTrack_ && !this.paused();
    }
    init_() {
      return (
        (this.state = "READY"), this.resetEverything(), this.monitorBuffer_()
      );
    }
    track(e) {
      return (
        "undefined" != typeof e &&
          ((this.subtitlesTrack_ = e),
          "INIT" === this.state && this.couldBeginLoading_()) &&
          this.init_(),
        this.subtitlesTrack_
      );
    }
    remove(e, t) {
      Nh(e, t, this.subtitlesTrack_);
    }
    fillBuffer_() {
      var e = this.chooseNextRequest_();
      e &&
        (null === this.syncController_.timestampOffsetForTimeline(e.timeline)
          ? (this.syncController_.one("timestampoffset", () => {
              (this.state = "READY"), this.paused() || this.monitorBuffer_();
            }),
            (this.state = "WAITING_ON_TIMELINE"))
          : this.loadSegment_(e));
    }
    timestampOffsetForSegment_() {
      return null;
    }
    chooseNextRequest_() {
      return this.skipEmptySegments_(super.chooseNextRequest_());
    }
    skipEmptySegments_(e) {
      for (; e && e.segment.empty; ) {
        if (e.mediaIndex + 1 >= e.playlist.segments.length) {
          e = null;
          break;
        }
        e = this.generateSegmentInfo_({
          playlist: e.playlist,
          mediaIndex: e.mediaIndex + 1,
          startOfSegment: e.startOfSegment + e.duration,
          isSyncRequest: e.isSyncRequest,
        });
      }
      return e;
    }
    stopForError(e) {
      this.error(e),
        (this.state = "READY"),
        this.pause(),
        this.trigger("error");
    }
    segmentRequestFinished_(t, i, s) {
      if (this.subtitlesTrack_)
        if ((this.saveTransferStats_(i.stats), this.pendingSegment_))
          if (t)
            t.code === mh.TIMEOUT && this.handleTimeout_(),
              t.code === mh.ABORTED
                ? (this.mediaRequestsAborted += 1)
                : (this.mediaRequestsErrored += 1),
              this.stopForError(t);
          else {
            var e = this.pendingSegment_,
              r =
                (this.saveBandwidthRelatedStats_(e.duration, i.stats),
                i.key && this.segmentKey(i.key, !0),
                (this.state = "APPENDING"),
                this.trigger("appending"),
                e.segment);
            if (
              (r.map && (r.map.bytes = i.map.bytes),
              (e.bytes = i.bytes),
              "function" != typeof window.WebVTT &&
                this.subtitlesTrack_ &&
                this.subtitlesTrack_.tech_)
            ) {
              let e;
              const l = () => {
                this.subtitlesTrack_.tech_.off("vttjsloaded", e),
                  this.stopForError({ message: "Error loading vtt.js" });
              };
              (e = () => {
                this.subtitlesTrack_.tech_.off("vttjserror", l),
                  this.segmentRequestFinished_(t, i, s);
              }),
                (this.state = "WAITING_ON_VTTJS"),
                this.subtitlesTrack_.tech_.one("vttjsloaded", e),
                void this.subtitlesTrack_.tech_.one("vttjserror", l);
            } else {
              r.requested = !0;
              try {
                this.parseVTTCues_(e);
              } catch (e) {
                return void this.stopForError({ message: e.message });
              }
              if (
                (this.updateTimeMapping_(
                  e,
                  this.syncController_.timelines[e.timeline],
                  this.playlist_
                ),
                e.cues.length
                  ? (e.timingInfo = {
                      start: e.cues[0].startTime,
                      end: e.cues[e.cues.length - 1].endTime,
                    })
                  : (e.timingInfo = {
                      start: e.startOfSegment,
                      end: e.startOfSegment + e.duration,
                    }),
                e.isSyncRequest)
              )
                this.trigger("syncinfoupdate"),
                  (this.pendingSegment_ = null),
                  (this.state = "READY");
              else {
                (e.byteLength = e.bytes.byteLength),
                  (this.mediaSecondsLoaded += r.duration),
                  e.cues.forEach((e) => {
                    this.subtitlesTrack_.addCue(
                      this.featuresNativeTextTracks_
                        ? new window.VTTCue(e.startTime, e.endTime, e.text)
                        : e
                    );
                  });
                var n = this.subtitlesTrack_,
                  a = n.cues;
                if (a)
                  for (let i = 0; i < a.length; i++) {
                    var o = [];
                    let t = 0;
                    for (let e = 0; e < a.length; e++)
                      a[i].startTime === a[e].startTime &&
                        a[i].endTime === a[e].endTime &&
                        a[i].text === a[e].text &&
                        1 < ++t &&
                        o.push(a[e]);
                    o.length && o.forEach((e) => n.removeCue(e));
                  }
                this.handleAppendsDone_();
              }
            }
          }
        else (this.state = "READY"), (this.mediaRequestsAborted += 1);
      else this.state = "READY";
    }
    handleData_() {}
    updateTimingInfoEnd_() {}
    parseVTTCues_(t) {
      let e,
        i = !1;
      "function" == typeof window.TextDecoder
        ? (e = new window.TextDecoder("utf8"))
        : ((e = window.WebVTT.StringDecoder()), (i = !0));
      var s = new window.WebVTT.Parser(window, window.vttjs, e);
      if (
        ((t.cues = []),
        (t.timestampmap = { MPEGTS: 0, LOCAL: 0 }),
        (s.oncue = t.cues.push.bind(t.cues)),
        (s.ontimestampmap = (e) => {
          t.timestampmap = e;
        }),
        (s.onparsingerror = (e) => {
          T.log.warn("Error encountered when parsing cues: " + e.message);
        }),
        t.segment.map)
      ) {
        let e = t.segment.map.bytes;
        i && (e = eu(e)), s.parse(e);
      }
      let r = t.bytes;
      i && (r = eu(r)), s.parse(r), s.flush();
    }
    updateTimeMapping_(e, t, i) {
      var s = e.segment;
      if (t)
        if (e.cues.length) {
          var r = e.timestampmap;
          const n = r.MPEGTS / Nl - r.LOCAL + t.mapping;
          e.cues.forEach((e) => {
            (e.startTime += n), (e.endTime += n);
          }),
            i.syncInfo ||
              ((r = e.cues[0].startTime),
              (t = e.cues[e.cues.length - 1].startTime),
              (i.syncInfo = {
                mediaSequence: i.mediaSequence + e.mediaIndex,
                time: Math.min(r, t - s.duration),
              }));
        } else s.empty = !0;
    }
  }
  const su = [
    {
      name: "VOD",
      run: (e, t, i, s, r) => {
        return i !== 1 / 0
          ? { time: 0, segmentIndex: 0, partIndex: null }
          : null;
      },
    },
    {
      name: "ProgramDateTime",
      run: (t, i, e, s, r) => {
        if (!Object.keys(t.timelineToDatetimeMappings).length) return null;
        let n = null,
          a = null;
        var o = Ql(i);
        r = r || 0;
        for (let e = 0; e < o.length; e++) {
          var l = o[i.endList || 0 === r ? e : o.length - (e + 1)],
            d = l.segment,
            h = t.timelineToDatetimeMappings[d.timeline];
          if (h && d.dateTimeObject) {
            let t = d.dateTimeObject.getTime() / 1e3 + h;
            if (d.parts && "number" == typeof l.partIndex)
              for (let e = 0; e < l.partIndex; e++) t += d.parts[e].duration;
            h = Math.abs(r - t);
            if (null !== a && (0 === h || a < h)) break;
            (a = h),
              (n = {
                time: t,
                segmentIndex: l.segmentIndex,
                partIndex: l.partIndex,
              });
          }
        }
        return n;
      },
    },
    {
      name: "Segment",
      run: (e, t, i, s, r) => {
        let n = null,
          a = null;
        r = r || 0;
        var o = Ql(t);
        for (let e = 0; e < o.length; e++) {
          var l = o[t.endList || 0 === r ? e : o.length - (e + 1)],
            d = l.segment,
            h = (l.part && l.part.start) || (d && d.start);
          if (d.timeline === s && "undefined" != typeof h) {
            d = Math.abs(r - h);
            if (null !== a && a < d) break;
            (!n || null === a || a >= d) &&
              ((a = d),
              (n = {
                time: h,
                segmentIndex: l.segmentIndex,
                partIndex: l.partIndex,
              }));
          }
        }
        return n;
      },
    },
    {
      name: "Discontinuity",
      run: (i, s, e, t, r) => {
        let n = null;
        if (
          ((r = r || 0), s.discontinuityStarts && s.discontinuityStarts.length)
        ) {
          let t = null;
          for (let e = 0; e < s.discontinuityStarts.length; e++) {
            var a = s.discontinuityStarts[e],
              o = s.discontinuitySequence + e + 1,
              o = i.discontinuities[o];
            if (o) {
              var l = Math.abs(r - o.time);
              if (null !== t && t < l) break;
              (!n || null === t || t >= l) &&
                ((t = l),
                (n = { time: o.time, segmentIndex: a, partIndex: null }));
            }
          }
        }
        return n;
      },
    },
    {
      name: "Playlist",
      run: (e, t, i, s, r) => {
        return t.syncInfo
          ? {
              time: t.syncInfo.time,
              segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence,
              partIndex: null,
            }
          : null;
      },
    },
  ];
  class ru extends T.EventTarget {
    constructor(e = 0) {
      super(),
        (this.timelines = []),
        (this.discontinuities = []),
        (this.timelineToDatetimeMappings = {}),
        (this.logger_ = Ul("SyncController"));
    }
    getSyncPoint(e, t, i, s) {
      e = this.runStrategies_(e, t, i, s);
      return e.length
        ? this.selectSyncPoint_(e, { key: "time", value: s })
        : null;
    }
    getExpiredTime(e, t) {
      return e &&
        e.segments &&
        (t = this.runStrategies_(e, t, e.discontinuitySequence, 0)).length
        ? (0 <
            (t = this.selectSyncPoint_(t, { key: "segmentIndex", value: 0 }))
              .segmentIndex && (t.time *= -1),
          Math.abs(
            t.time +
              Vl({
                defaultDuration: e.targetDuration,
                durationList: e.segments,
                startIndex: t.segmentIndex,
                endIndex: 0,
              })
          ))
        : null;
    }
    runStrategies_(t, i, s, r) {
      var n = [];
      for (let e = 0; e < su.length; e++) {
        var a = su[e],
          o = a.run(this, t, i, s, r);
        o &&
          ((o.strategy = a.name), n.push({ strategy: a.name, syncPoint: o }));
      }
      return n;
    }
    selectSyncPoint_(t, i) {
      let s = t[0].syncPoint,
        r = Math.abs(t[0].syncPoint[i.key] - i.value),
        n = t[0].strategy;
      for (let e = 1; e < t.length; e++) {
        var a = Math.abs(t[e].syncPoint[i.key] - i.value);
        a < r && ((r = a), (s = t[e].syncPoint), (n = t[e].strategy));
      }
      return (
        this.logger_(
          `syncPoint for [${i.key}: ${i.value}] chosen with strategy` +
            ` [${n}]: [time:${s.time},` +
            " segmentIndex:" +
            s.segmentIndex +
            ("number" == typeof s.partIndex
              ? ",partIndex:" + s.partIndex
              : "") +
            "]"
        ),
        s
      );
    }
    saveExpiredSegmentInfo(t, i) {
      var s = i.mediaSequence - t.mediaSequence;
      if (86400 < s)
        T.log.warn(
          `Not saving expired segment info. Media sequence gap ${s} is too large.`
        );
      else
        for (let e = s - 1; 0 <= e; e--) {
          var r = t.segments[e];
          if (r && "undefined" != typeof r.start) {
            (i.syncInfo = {
              mediaSequence: t.mediaSequence + e,
              time: r.start,
            }),
              this.logger_(
                `playlist refresh sync: [time:${i.syncInfo.time},` +
                  ` mediaSequence: ${i.syncInfo.mediaSequence}]`
              ),
              this.trigger("syncinfoupdate");
            break;
          }
        }
    }
    setDateTimeMappingForStart(e) {
      var t;
      (this.timelineToDatetimeMappings = {}),
        e.segments &&
          e.segments.length &&
          e.segments[0].dateTimeObject &&
          ((t = (e = e.segments[0]).dateTimeObject.getTime() / 1e3),
          (this.timelineToDatetimeMappings[e.timeline] = -t));
    }
    saveSegmentTimingInfo({ segmentInfo: e, shouldSaveTimelineMapping: t }) {
      var i = this.calculateSegmentTimeMapping_(e, e.timingInfo, t),
        s = e.segment,
        i =
          (i &&
            (this.saveDiscontinuitySyncInfo_(e),
            e.playlist.syncInfo ||
              (e.playlist.syncInfo = {
                mediaSequence: e.playlist.mediaSequence + e.mediaIndex,
                time: s.start,
              })),
          s.dateTimeObject);
      s.discontinuity &&
        t &&
        i &&
        (this.timelineToDatetimeMappings[s.timeline] = -i.getTime() / 1e3);
    }
    timestampOffsetForTimeline(e) {
      return "undefined" == typeof this.timelines[e]
        ? null
        : this.timelines[e].time;
    }
    mappingForTimeline(e) {
      return "undefined" == typeof this.timelines[e]
        ? null
        : this.timelines[e].mapping;
    }
    calculateSegmentTimeMapping_(e, t, i) {
      var s = e.segment,
        r = e.part;
      let n = this.timelines[e.timeline],
        a,
        o;
      if ("number" == typeof e.timestampOffset)
        (n = { time: e.startOfSegment, mapping: e.startOfSegment - t.start }),
          i &&
            ((this.timelines[e.timeline] = n),
            this.trigger("timestampoffset"),
            this.logger_(
              `time mapping for timeline ${e.timeline}: ` +
                `[time: ${n.time}] [mapping: ${n.mapping}]`
            )),
          (a = e.startOfSegment);
      else {
        if (!n) return !1;
        a = t.start + n.mapping;
      }
      return (
        (o = t.end + n.mapping),
        r && ((r.start = a), (r.end = o)),
        (!s.start || a < s.start) && (s.start = a),
        (s.end = o),
        !0
      );
    }
    saveDiscontinuitySyncInfo_(t) {
      var i = t.playlist,
        s = t.segment;
      if (s.discontinuity)
        this.discontinuities[s.timeline] = { time: s.start, accuracy: 0 };
      else if (i.discontinuityStarts && i.discontinuityStarts.length)
        for (let e = 0; e < i.discontinuityStarts.length; e++) {
          var r = i.discontinuityStarts[e],
            n = i.discontinuitySequence + e + 1,
            a = r - t.mediaIndex,
            o = Math.abs(a);
          if (
            !this.discontinuities[n] ||
            this.discontinuities[n].accuracy > o
          ) {
            let e;
            (e =
              a < 0
                ? s.start -
                  Vl({
                    defaultDuration: i.targetDuration,
                    durationList: i.segments,
                    startIndex: t.mediaIndex,
                    endIndex: r,
                  })
                : s.end +
                  Vl({
                    defaultDuration: i.targetDuration,
                    durationList: i.segments,
                    startIndex: t.mediaIndex + 1,
                    endIndex: r,
                  })),
              (this.discontinuities[n] = { time: e, accuracy: o });
          }
        }
    }
    dispose() {
      this.trigger("dispose"), this.off();
    }
  }
  class nu extends T.EventTarget {
    constructor() {
      super(),
        (this.pendingTimelineChanges_ = {}),
        (this.lastTimelineChanges_ = {});
    }
    clearPendingTimelineChange(e) {
      (this.pendingTimelineChanges_[e] = null),
        this.trigger("pendingtimelinechange");
    }
    pendingTimelineChange({ type: e, from: t, to: i }) {
      return (
        "number" == typeof t &&
          "number" == typeof i &&
          ((this.pendingTimelineChanges_[e] = { type: e, from: t, to: i }),
          this.trigger("pendingtimelinechange")),
        this.pendingTimelineChanges_[e]
      );
    }
    lastTimelineChange({ type: e, from: t, to: i }) {
      return (
        "number" == typeof t &&
          "number" == typeof i &&
          ((this.lastTimelineChanges_[e] = { type: e, from: t, to: i }),
          delete this.pendingTimelineChanges_[e],
          this.trigger("timelinechange")),
        this.lastTimelineChanges_[e]
      );
    }
    dispose() {
      this.trigger("dispose"),
        (this.pendingTimelineChanges_ = {}),
        (this.lastTimelineChanges_ = {}),
        this.off();
    }
  }
  var au = Kd(
    Yd(
      Qd(function () {
        var e = (function () {
          function e() {
            this.listeners = {};
          }
          var t = e.prototype;
          return (
            (t.on = function (e, t) {
              this.listeners[e] || (this.listeners[e] = []),
                this.listeners[e].push(t);
            }),
            (t.off = function (e, t) {
              return (
                !!this.listeners[e] &&
                ((t = this.listeners[e].indexOf(t)),
                (this.listeners[e] = this.listeners[e].slice(0)),
                this.listeners[e].splice(t, 1),
                -1 < t)
              );
            }),
            (t.trigger = function (e) {
              var t = this.listeners[e];
              if (t)
                if (2 === arguments.length)
                  for (var i = t.length, s = 0; s < i; ++s)
                    t[s].call(this, arguments[1]);
                else
                  for (
                    var r = Array.prototype.slice.call(arguments, 1),
                      n = t.length,
                      a = 0;
                    a < n;
                    ++a
                  )
                    t[a].apply(this, r);
            }),
            (t.dispose = function () {
              this.listeners = {};
            }),
            (t.pipe = function (t) {
              this.on("data", function (e) {
                t.push(e);
              });
            }),
            e
          );
        })();
        /*! @name pkcs7 @version 1.0.4 @license Apache-2.0 */ let h = null;
        class g {
          constructor(e) {
            (h =
              h ||
              (function () {
                var e = [
                    [[], [], [], [], []],
                    [[], [], [], [], []],
                  ],
                  t = e[0],
                  i = e[1],
                  s = t[4],
                  r = i[4];
                let n, a, o;
                var l,
                  d,
                  h,
                  u,
                  c = [],
                  p = [];
                let m, g;
                for (n = 0; n < 256; n++)
                  p[(c[n] = (n << 1) ^ (283 * (n >> 7))) ^ n] = n;
                for (a = o = 0; !s[a]; a ^= l || 1, o = p[o] || 1)
                  for (
                    u =
                      ((u = o ^ (o << 1) ^ (o << 2) ^ (o << 3) ^ (o << 4)) >>
                        8) ^
                      (255 & u) ^
                      99,
                      h = c[(d = c[(l = c[(r[(s[a] = u)] = a)])])],
                      g =
                        (16843009 * h) ^
                        (65537 * d) ^
                        (257 * l) ^
                        (16843008 * a),
                      m = (257 * c[u]) ^ (16843008 * u),
                      n = 0;
                    n < 4;
                    n++
                  )
                    (t[n][a] = m = (m << 24) ^ (m >>> 8)),
                      (i[n][u] = g = (g << 24) ^ (g >>> 8));
                for (n = 0; n < 5; n++)
                  (t[n] = t[n].slice(0)), (i[n] = i[n].slice(0));
                return e;
              })()),
              (this._tables = [
                [
                  h[0][0].slice(),
                  h[0][1].slice(),
                  h[0][2].slice(),
                  h[0][3].slice(),
                  h[0][4].slice(),
                ],
                [
                  h[1][0].slice(),
                  h[1][1].slice(),
                  h[1][2].slice(),
                  h[1][3].slice(),
                  h[1][4].slice(),
                ],
              ]);
            let t, i, s;
            var r = this._tables[0][4],
              n = this._tables[1],
              a = e.length;
            let o = 1;
            if (4 !== a && 6 !== a && 8 !== a)
              throw new Error("Invalid aes key size");
            var l = e.slice(0),
              d = [];
            for (this._key = [l, d], t = a; t < 4 * a + 28; t++)
              (s = l[t - 1]),
                (t % a == 0 || (8 === a && t % a == 4)) &&
                  ((s =
                    (r[s >>> 24] << 24) ^
                    (r[(s >> 16) & 255] << 16) ^
                    (r[(s >> 8) & 255] << 8) ^
                    r[255 & s]),
                  t % a == 0) &&
                  ((s = (s << 8) ^ (s >>> 24) ^ (o << 24)),
                  (o = (o << 1) ^ (283 * (o >> 7)))),
                (l[t] = l[t - a] ^ s);
            for (i = 0; t; i++, t--)
              (s = l[3 & i ? t : t - 4]),
                t <= 4 || i < 4
                  ? (d[i] = s)
                  : (d[i] =
                      n[0][r[s >>> 24]] ^
                      n[1][r[(s >> 16) & 255]] ^
                      n[2][r[(s >> 8) & 255]] ^
                      n[3][r[255 & s]]);
          }
          decrypt(e, t, i, s, r, n) {
            var a,
              o,
              l = this._key[1];
            let d = e ^ l[0],
              h = s ^ l[1],
              u = i ^ l[2],
              c = t ^ l[3],
              p;
            var m = l.length / 4 - 2;
            let g,
              f = 4;
            var e = this._tables[1],
              y = e[0],
              _ = e[1],
              v = e[2],
              b = e[3],
              T = e[4];
            for (g = 0; g < m; g++)
              (p =
                y[d >>> 24] ^
                _[(h >> 16) & 255] ^
                v[(u >> 8) & 255] ^
                b[255 & c] ^
                l[f]),
                (a =
                  y[h >>> 24] ^
                  _[(u >> 16) & 255] ^
                  v[(c >> 8) & 255] ^
                  b[255 & d] ^
                  l[f + 1]),
                (o =
                  y[u >>> 24] ^
                  _[(c >> 16) & 255] ^
                  v[(d >> 8) & 255] ^
                  b[255 & h] ^
                  l[f + 2]),
                (c =
                  y[c >>> 24] ^
                  _[(d >> 16) & 255] ^
                  v[(h >> 8) & 255] ^
                  b[255 & u] ^
                  l[f + 3]),
                (f += 4),
                (d = p),
                (h = a),
                (u = o);
            for (g = 0; g < 4; g++)
              (r[(3 & -g) + n] =
                (T[d >>> 24] << 24) ^
                (T[(h >> 16) & 255] << 16) ^
                (T[(u >> 8) & 255] << 8) ^
                T[255 & c] ^
                l[f++]),
                (p = d),
                (d = h),
                (h = u),
                (u = c),
                (c = p);
          }
        }
        class l extends e {
          constructor() {
            super(e),
              (this.jobs = []),
              (this.delay = 1),
              (this.timeout_ = null);
          }
          processJob_() {
            this.jobs.shift()(),
              this.jobs.length
                ? (this.timeout_ = setTimeout(
                    this.processJob_.bind(this),
                    this.delay
                  ))
                : (this.timeout_ = null);
          }
          push(e) {
            this.jobs.push(e),
              this.timeout_ ||
                (this.timeout_ = setTimeout(
                  this.processJob_.bind(this),
                  this.delay
                ));
          }
        }
        function f(e) {
          return (
            (e << 24) | ((65280 & e) << 8) | ((16711680 & e) >> 8) | (e >>> 24)
          );
        }
        class d {
          constructor(e, t, i, s) {
            var r = d.STEP,
              n = new Int32Array(e.buffer);
            const a = new Uint8Array(e.byteLength);
            let o = 0;
            for (
              this.asyncStream_ = new l(),
                this.asyncStream_.push(
                  this.decryptChunk_(n.subarray(o, o + r), t, i, a)
                ),
                o = r;
              o < n.length;
              o += r
            )
              (i = new Uint32Array([
                f(n[o - 4]),
                f(n[o - 3]),
                f(n[o - 2]),
                f(n[o - 1]),
              ])),
                this.asyncStream_.push(
                  this.decryptChunk_(n.subarray(o, o + r), t, i, a)
                );
            this.asyncStream_.push(function () {
              var e;
              /*! @name aes-decrypter @version 4.0.1 @license Apache-2.0 */ s(
                null,
                (e = a).subarray(0, e.byteLength - e[e.byteLength - 1])
              );
            });
          }
          static get STEP() {
            return 32e3;
          }
          decryptChunk_(t, i, s, r) {
            return function () {
              var e = (function (e, t, i) {
                var s,
                  r,
                  n,
                  a,
                  o = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                  l = new g(Array.prototype.slice.call(t)),
                  t = new Uint8Array(e.byteLength),
                  d = new Int32Array(t.buffer);
                let h, u, c, p, m;
                for (
                  h = i[0], u = i[1], c = i[2], p = i[3], m = 0;
                  m < o.length;
                  m += 4
                )
                  (s = f(o[m])),
                    (r = f(o[m + 1])),
                    (n = f(o[m + 2])),
                    (a = f(o[m + 3])),
                    l.decrypt(s, r, n, a, d, m),
                    (d[m] = f(d[m] ^ h)),
                    (d[m + 1] = f(d[m + 1] ^ u)),
                    (d[m + 2] = f(d[m + 2] ^ c)),
                    (d[m + 3] = f(d[m + 3] ^ p)),
                    (h = s),
                    (u = r),
                    (c = n),
                    (p = a);
                return t;
              })(t, i, s);
              r.set(e, t.byteOffset);
            };
          }
        }
        var t =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : {},
          t =
            "undefined" != typeof window
              ? window
              : "undefined" != typeof t
              ? t
              : "undefined" != typeof self
              ? self
              : {},
          t = t.BigInt || Number;
        t("0x1"),
          t("0x100"),
          t("0x10000"),
          t("0x1000000"),
          t("0x100000000"),
          t("0x10000000000"),
          t("0x1000000000000"),
          t("0x100000000000000"),
          t("0x10000000000000000"),
          (t = new Uint16Array([65484])),
          255 !==
            (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))[0] &&
            t[0];
        function r(s) {
          const r = {};
          return (
            Object.keys(s).forEach((e) => {
              var t,
                i = s[e];
              (t = i),
                (
                  "function" === ArrayBuffer.isView
                    ? ArrayBuffer.isView(t)
                    : t && t.buffer instanceof ArrayBuffer
                )
                  ? (r[e] = {
                      bytes: i.buffer,
                      byteOffset: i.byteOffset,
                      byteLength: i.byteLength,
                    })
                  : (r[e] = i);
            }),
            r
          );
        }
        self.onmessage = function (e) {
          const i = e.data;
          var e = new Uint8Array(
              i.encrypted.bytes,
              i.encrypted.byteOffset,
              i.encrypted.byteLength
            ),
            t = new Uint32Array(
              i.key.bytes,
              i.key.byteOffset,
              i.key.byteLength / 4
            ),
            s = new Uint32Array(
              i.iv.bytes,
              i.iv.byteOffset,
              i.iv.byteLength / 4
            );
          new d(e, t, s, function (e, t) {
            self.postMessage(r({ source: i.source, decrypted: t }), [t.buffer]);
          });
        };
      })
    )
  );
  const ou = (e, t) => {
      e.abort(),
        e.pause(),
        t &&
          t.activePlaylistLoader &&
          (t.activePlaylistLoader.pause(), (t.activePlaylistLoader = null));
    },
    lu = (e, t) => {
      (t.activePlaylistLoader = e).load();
    },
    du = {
      AUDIO: (a, o) => () => {
        var {
            segmentLoaders: { [a]: e },
            mediaTypes: { [a]: t },
            excludePlaylist: i,
          } = o,
          e = (ou(e, t), t.activeTrack()),
          s = t.activeGroup(),
          s = (s.filter((e) => e.default)[0] || s[0]).id,
          r = t.tracks[s];
        if (e === r)
          i({
            error: {
              message: "Problem encountered loading the default audio track.",
            },
          });
        else {
          T.log.warn(
            "Problem encountered loading the alternate audio track.Switching back to default."
          );
          for (const n in t.tracks) t.tracks[n].enabled = t.tracks[n] === r;
          t.onTrackChanged();
        }
      },
      SUBTITLES: (i, s) => () => {
        var {
            segmentLoaders: { [i]: e },
            mediaTypes: { [i]: t },
          } = s,
          e =
            (T.log.warn(
              "Problem encountered loading the subtitle track.Disabling subtitle track."
            ),
            ou(e, t),
            t.activeTrack());
        e && (e.mode = "disabled"), t.onTrackChanged();
      },
    },
    hu = {
      AUDIO: (e, t, i) => {
        if (!t) return;
        const {
          tech: s,
          requestOptions: r,
          segmentLoaders: { [e]: n },
        } = i;
        t.on("loadedmetadata", () => {
          var e = t.media();
          n.playlist(e, r),
            (!s.paused() || (e.endList && "none" !== s.preload())) && n.load();
        }),
          t.on("loadedplaylist", () => {
            n.playlist(t.media(), r), s.paused() || n.load();
          }),
          t.on("error", du[e](e, i));
      },
      SUBTITLES: (e, t, i) => {
        const {
          tech: s,
          requestOptions: r,
          segmentLoaders: { [e]: n },
          mediaTypes: { [e]: a },
        } = i;
        t.on("loadedmetadata", () => {
          var e = t.media();
          n.playlist(e, r),
            n.track(a.activeTrack()),
            (!s.paused() || (e.endList && "none" !== s.preload())) && n.load();
        }),
          t.on("loadedplaylist", () => {
            n.playlist(t.media(), r), s.paused() || n.load();
          }),
          t.on("error", du[e](e, i));
      },
    },
    uu = {
      AUDIO: (i, s) => {
        var r,
          {
            vhs: n,
            sourceType: a,
            segmentLoaders: { [i]: e },
            requestOptions: o,
            main: { mediaGroups: l },
            mediaTypes: {
              [i]: { groups: d, tracks: h, logger_: u },
            },
            mainPlaylistLoader: c,
          } = s,
          p = cd(c.main);
        (l[i] && 0 !== Object.keys(l[i]).length) ||
          ((l[i] = { main: { default: { default: !0 } } }),
          p && (l[i].main.default.playlists = c.main.playlists));
        for (const m in l[i]) {
          d[m] || (d[m] = []);
          for (const g in l[i][m]) {
            let e = l[i][m][g],
              t;
            (t = p
              ? (u(`AUDIO group '${m}' label '${g}' is a main playlist`),
                (e.isMainPlaylist = !0),
                null)
              : "vhs-json" === a && e.playlists
              ? new Cd(e.playlists[0], n, o)
              : e.resolvedUri
              ? new Cd(e.resolvedUri, n, o)
              : e.playlists && "dash" === a
              ? new Gd(e.playlists[0], n, o, c)
              : null),
              (e = D({ id: g, playlistLoader: t }, e)),
              hu[i](i, e.playlistLoader, s),
              d[m].push(e),
              "undefined" == typeof h[g] &&
                ((r = new T.AudioTrack({
                  id: g,
                  kind: ((e) => {
                    let t = e.default ? "main" : "alternative";
                    return (t =
                      e.characteristics &&
                      0 <=
                        e.characteristics.indexOf(
                          "public.accessibility.describes-video"
                        )
                        ? "main-desc"
                        : t);
                  })(e),
                  enabled: !1,
                  language: e.language,
                  default: e.default,
                  label: g,
                })),
                (h[g] = r));
          }
        }
        e.on("error", du[i](i, s));
      },
      SUBTITLES: (i, s) => {
        var r,
          {
            tech: n,
            vhs: a,
            sourceType: o,
            segmentLoaders: { [i]: e },
            requestOptions: l,
            main: { mediaGroups: d },
            mediaTypes: {
              [i]: { groups: h, tracks: u },
            },
            mainPlaylistLoader: c,
          } = s;
        for (const p in d[i]) {
          h[p] || (h[p] = []);
          for (const m in d[i][p])
            if (!d[i][p][m].forced) {
              let e = d[i][p][m],
                t;
              if ("hls" === o) t = new Cd(e.resolvedUri, a, l);
              else if ("dash" === o) {
                if (!e.playlists.filter((e) => e.excludeUntil !== 1 / 0).length)
                  return;
                t = new Gd(e.playlists[0], a, l, c);
              } else
                "vhs-json" === o &&
                  (t = new Cd(
                    e.playlists ? e.playlists[0] : e.resolvedUri,
                    a,
                    l
                  ));
              (e = D({ id: m, playlistLoader: t }, e)),
                hu[i](i, e.playlistLoader, s),
                h[p].push(e),
                "undefined" == typeof u[m] &&
                  ((r = n.addRemoteTextTrack(
                    {
                      id: m,
                      kind: "subtitles",
                      default: e.default && e.autoselect,
                      language: e.language,
                      label: m,
                    },
                    !1
                  ).track),
                  (u[m] = r));
            }
        }
        e.on("error", du[i](i, s));
      },
      "CLOSED-CAPTIONS": (e, t) => {
        var {
          tech: i,
          main: { mediaGroups: s },
          mediaTypes: {
            [e]: { groups: r, tracks: n },
          },
        } = t;
        for (const l in s[e]) {
          r[l] || (r[l] = []);
          for (const d in s[e][l]) {
            var a = s[e][l][d];
            if (/^(?:CC|SERVICE)/.test(a.instreamId)) {
              var o = (i.options_.vhs && i.options_.vhs.captionServices) || {};
              let e = {
                label: d,
                language: a.language,
                instreamId: a.instreamId,
                default: a.default && a.autoselect,
              };
              void 0 ===
                (e = o[e.instreamId] ? D(e, o[e.instreamId]) : e).default &&
                delete e.default,
                r[l].push(D({ id: d }, a)),
                "undefined" == typeof n[d] &&
                  ((o = i.addRemoteTextTrack(
                    {
                      id: e.instreamId,
                      kind: "captions",
                      default: e.default,
                      language: e.language,
                      label: e.label,
                    },
                    !1
                  ).track),
                  (n[d] = o));
            }
          }
        }
      },
    },
    cu = (t, i) => {
      for (let e = 0; e < t.length; e++) {
        if (ud(i, t[e])) return !0;
        if (t[e].playlists && cu(t[e].playlists, i)) return !0;
      }
      return !1;
    },
    pu = {
      AUDIO: (i, s) => () => {
        var {
          [i]: { tracks: e },
        } = s["mediaTypes"];
        for (const t in e) if (e[t].enabled) return e[t];
        return null;
      },
      SUBTITLES: (i, s) => () => {
        var {
          [i]: { tracks: e },
        } = s["mediaTypes"];
        for (const t in e)
          if ("showing" === e[t].mode || "hidden" === e[t].mode) return e[t];
        return null;
      },
    },
    mu = (n) => {
      ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((e) => {
        uu[e](e, n);
      });
      const {
        mediaTypes: a,
        mainPlaylistLoader: e,
        tech: t,
        vhs: i,
        segmentLoaders: { AUDIO: s, main: r },
      } = n;
      ["AUDIO", "SUBTITLES"].forEach((e) => {
        var o, l, d, h, i, s, u, c, t, r;
        (a[e].activeGroup =
          ((o = e),
          (l = n),
          (t) => {
            var {
                mainPlaylistLoader: e,
                mediaTypes: {
                  [o]: { groups: i },
                },
              } = l,
              s = e.media();
            if (!s) return null;
            let r = null;
            s.attributes[o] && (r = i[s.attributes[o]]);
            var n = Object.keys(i);
            if (!r)
              if ("AUDIO" === o && 1 < n.length && cd(l.main))
                for (let e = 0; e < n.length; e++) {
                  var a = i[n[e]];
                  if (cu(a, s)) {
                    r = a;
                    break;
                  }
                }
              else i.main ? (r = i.main) : 1 === n.length && (r = i[n[0]]);
            return "undefined" == typeof t
              ? r
              : (null !== t && r && r.filter((e) => e.id === t.id)[0]) || null;
          })),
          (a[e].activeTrack = pu[e](e, n)),
          (a[e].onGroupChanged =
            ((d = e),
            (h = n),
            () => {
              var {
                  segmentLoaders: { [d]: e, main: t },
                  mediaTypes: { [d]: i },
                } = h,
                s = i.activeTrack(),
                r = i.getActiveGroup(),
                n = i.activePlaylistLoader,
                a = i.lastGroup_;
              (r && a && r.id === a.id) ||
                ((i.lastGroup_ = r),
                (i.lastTrack_ = s),
                ou(e, i),
                r &&
                  !r.isMainPlaylist &&
                  (r.playlistLoader
                    ? (e.resyncLoader(), lu(r.playlistLoader, i))
                    : n && t.resetEverything()));
            })),
          (a[e].onGroupChanging =
            ((i = e),
            (s = n),
            () => {
              var {
                segmentLoaders: { [i]: e },
                mediaTypes: { [i]: t },
              } = s;
              (t.lastGroup_ = null), e.abort(), e.pause();
            })),
          (a[e].onTrackChanged =
            ((u = e),
            (c = n),
            () => {
              var e,
                t,
                {
                  mainPlaylistLoader: i,
                  segmentLoaders: { [u]: s, main: r },
                  mediaTypes: { [u]: n },
                } = c,
                a = n.activeTrack(),
                o = n.getActiveGroup(),
                l = n.activePlaylistLoader,
                d = n.lastTrack_;
              if (
                (!d || !a || d.id !== a.id) &&
                ((n.lastGroup_ = o), (n.lastTrack_ = a), ou(s, n), o)
              ) {
                if (o.isMainPlaylist)
                  return !a ||
                    !d ||
                    a.id === d.id ||
                    ((t = (e = c.vhs.playlistController_).selectPlaylist()),
                    e.media() === t)
                    ? void 0
                    : (n.logger_(
                        `track change. Switching main audio from ${d.id} to ` +
                          a.id
                      ),
                      i.pause(),
                      r.resetEverything(),
                      void e.fastQualityChange_(t));
                if ("AUDIO" === u) {
                  if (!o.playlistLoader)
                    return r.setAudio(!0), void r.resetEverything();
                  s.setAudio(!0), r.setAudio(!1);
                }
                l === o.playlistLoader ||
                  (s.track && s.track(a), s.resetEverything()),
                  lu(o.playlistLoader, n);
              }
            })),
          (a[e].getActiveGroup =
            (([t, r] = [e, n["mediaTypes"]]),
            () => {
              var e = r[t].activeTrack();
              return e ? r[t].activeGroup(e) : null;
            }));
      });
      var o = a.AUDIO.activeGroup();
      o &&
        ((o = (o.filter((e) => e.default)[0] || o[0]).id),
        (a.AUDIO.tracks[o].enabled = !0),
        a.AUDIO.onGroupChanged(),
        a.AUDIO.onTrackChanged(),
        (a.AUDIO.getActiveGroup().playlistLoader
          ? (r.setAudio(!1), s)
          : r
        ).setAudio(!0)),
        e.on("mediachange", () => {
          ["AUDIO", "SUBTITLES"].forEach((e) => a[e].onGroupChanged());
        }),
        e.on("mediachanging", () => {
          ["AUDIO", "SUBTITLES"].forEach((e) => a[e].onGroupChanging());
        });
      const l = () => {
        a.AUDIO.onTrackChanged(),
          t.trigger({ type: "usage", name: "vhs-audio-change" });
      };
      t.audioTracks().addEventListener("change", l),
        t
          .remoteTextTracks()
          .addEventListener("change", a.SUBTITLES.onTrackChanged),
        i.on("dispose", () => {
          t.audioTracks().removeEventListener("change", l),
            t
              .remoteTextTracks()
              .removeEventListener("change", a.SUBTITLES.onTrackChanged);
        }),
        t.clearTracks("audio");
      for (const d in a.AUDIO.tracks)
        t.audioTracks().addTrack(a.AUDIO.tracks[d]);
    };
  let gu;
  const fu = [
    "mediaRequests",
    "mediaRequestsAborted",
    "mediaRequestsTimedout",
    "mediaRequestsErrored",
    "mediaTransferDuration",
    "mediaBytesTransferred",
    "mediaAppends",
  ];
  class yu extends T.EventTarget {
    constructor(e) {
      super();
      var {
        src: t,
        withCredentials: i,
        tech: s,
        bandwidth: r,
        externVhs: n,
        useCueTags: a,
        playlistExclusionDuration: o,
        enableLowInitialPlaylist: l,
        sourceType: d,
        cacheEncryptionKeys: h,
        bufferBasedABR: u,
        leastPixelDiffSelector: c,
        captionServices: p,
      } = e;
      if (!t)
        throw new Error(
          "A non-empty playlist URL or JSON manifest string is required"
        );
      let m = e["maxPlaylistRetries"];
      (null !== m && "undefined" != typeof m) || (m = 1 / 0),
        (gu = n),
        (this.bufferBasedABR = Boolean(u)),
        (this.leastPixelDiffSelector = Boolean(c)),
        (this.withCredentials = i),
        (this.tech_ = s),
        (this.vhs_ = s.vhs),
        (this.sourceType_ = d),
        (this.useCueTags_ = a),
        (this.playlistExclusionDuration = o),
        (this.maxPlaylistRetries = m),
        (this.enableLowInitialPlaylist = l),
        this.useCueTags_ &&
          ((this.cueTagsTrack_ = this.tech_.addTextTrack(
            "metadata",
            "ad-cues"
          )),
          (this.cueTagsTrack_.inBandMetadataTrackDispatchType = "")),
        (this.requestOptions_ = {
          withCredentials: i,
          maxPlaylistRetries: m,
          timeout: null,
        }),
        this.on("error", this.pauseLoading),
        (this.mediaTypes_ = (() => {
          const t = {};
          return (
            ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((e) => {
              t[e] = {
                groups: {},
                tracks: {},
                activePlaylistLoader: null,
                activeGroup: Vh,
                activeTrack: Vh,
                getActiveGroup: Vh,
                onGroupChanged: Vh,
                onTrackChanged: Vh,
                lastTrack_: null,
                logger_: Ul(`MediaGroups[${e}]`),
              };
            }),
            t
          );
        })()),
        (this.mediaSource = new window.MediaSource()),
        (this.handleDurationChange_ = this.handleDurationChange_.bind(this)),
        (this.handleSourceOpen_ = this.handleSourceOpen_.bind(this)),
        (this.handleSourceEnded_ = this.handleSourceEnded_.bind(this)),
        this.mediaSource.addEventListener(
          "durationchange",
          this.handleDurationChange_
        ),
        this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_),
        this.mediaSource.addEventListener(
          "sourceended",
          this.handleSourceEnded_
        ),
        (this.seekable_ = Bl()),
        (this.hasPlayed_ = !1),
        (this.syncController_ = new ru(e)),
        (this.segmentMetadataTrack_ = s.addRemoteTextTrack(
          { kind: "metadata", label: "segment-metadata" },
          !1
        ).track),
        (this.decrypter_ = new au()),
        (this.sourceUpdater_ = new Zh(this.mediaSource)),
        (this.inbandTextTracks_ = {}),
        (this.timelineChangeController_ = new nu());
      (n = {
        vhs: this.vhs_,
        parse708captions: e.parse708captions,
        useDtsForTimestampOffset: e.useDtsForTimestampOffset,
        captionServices: p,
        mediaSource: this.mediaSource,
        currentTime: this.tech_.currentTime.bind(this.tech_),
        seekable: () => this.seekable(),
        seeking: () => this.tech_.seeking(),
        duration: () => this.duration(),
        hasPlayed: () => this.hasPlayed_,
        goalBufferLength: () => this.goalBufferLength(),
        bandwidth: r,
        syncController: this.syncController_,
        decrypter: this.decrypter_,
        sourceType: this.sourceType_,
        inbandTextTracks: this.inbandTextTracks_,
        cacheEncryptionKeys: h,
        sourceUpdater: this.sourceUpdater_,
        timelineChangeController: this.timelineChangeController_,
        exactManifestTimings: e.exactManifestTimings,
      }),
        (this.mainPlaylistLoader_ = new ("dash" === this.sourceType_ ? Gd : Cd)(
          t,
          this.vhs_,
          this.requestOptions_
        )),
        this.setupMainPlaylistLoaderListeners_(),
        (this.mainSegmentLoader_ = new qh(
          D(n, {
            segmentMetadataTrack: this.segmentMetadataTrack_,
            loaderType: "main",
          }),
          e
        )),
        (this.audioSegmentLoader_ = new qh(D(n, { loaderType: "audio" }), e)),
        (this.subtitleSegmentLoader_ = new iu(
          D(n, {
            loaderType: "vtt",
            featuresNativeTextTracks: this.tech_.featuresNativeTextTracks,
          }),
          e
        )),
        this.setupSegmentLoaderListeners_(),
        this.bufferBasedABR &&
          (this.mainPlaylistLoader_.one("loadedplaylist", () =>
            this.startABRTimer_()
          ),
          this.tech_.on("pause", () => this.stopABRTimer_()),
          this.tech_.on("play", () => this.startABRTimer_())),
        fu.forEach((e) => {
          this[e + "_"] = function (e) {
            return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e];
          }.bind(this, e);
        }),
        (this.logger_ = Ul("pc")),
        (this.triggeredFmp4Usage = !1),
        "none" === this.tech_.preload()
          ? ((this.loadOnPlay_ = () => {
              (this.loadOnPlay_ = null), this.mainPlaylistLoader_.load();
            }),
            this.tech_.one("play", this.loadOnPlay_))
          : this.mainPlaylistLoader_.load(),
        (this.timeToLoadedData__ = -1),
        (this.mainAppendsToLoadedData__ = -1),
        (this.audioAppendsToLoadedData__ = -1),
        (u = "none" === this.tech_.preload() ? "play" : "loadstart");
      this.tech_.one(u, () => {
        const e = Date.now();
        this.tech_.one("loadeddata", () => {
          (this.timeToLoadedData__ = Date.now() - e),
            (this.mainAppendsToLoadedData__ =
              this.mainSegmentLoader_.mediaAppends),
            (this.audioAppendsToLoadedData__ =
              this.audioSegmentLoader_.mediaAppends);
        });
      });
    }
    mainAppendsToLoadedData_() {
      return this.mainAppendsToLoadedData__;
    }
    audioAppendsToLoadedData_() {
      return this.audioAppendsToLoadedData__;
    }
    appendsToLoadedData_() {
      var e = this.mainAppendsToLoadedData_(),
        t = this.audioAppendsToLoadedData_();
      return -1 === e || -1 === t ? -1 : e + t;
    }
    timeToLoadedData_() {
      return this.timeToLoadedData__;
    }
    checkABR_(e = "abr") {
      var t = this.selectPlaylist();
      t && this.shouldSwitchToMedia_(t) && this.switchMedia_(t, e);
    }
    switchMedia_(e, t, i) {
      var s = this.media(),
        s = s && (s.id || s.uri),
        r = e.id || e.uri;
      s &&
        s !== r &&
        (this.logger_(`switch media ${s} -> ${r} from ` + t),
        this.tech_.trigger({
          type: "usage",
          name: "vhs-rendition-change-" + t,
        })),
        this.mainPlaylistLoader_.media(e, i);
    }
    startABRTimer_() {
      this.stopABRTimer_(),
        (this.abrTimer_ = window.setInterval(() => this.checkABR_(), 250));
    }
    stopABRTimer_() {
      (this.tech_.scrubbing && this.tech_.scrubbing()) ||
        (window.clearInterval(this.abrTimer_), (this.abrTimer_ = null));
    }
    getAudioTrackPlaylists_() {
      var t = this.main(),
        e = (t && t.playlists) || [];
      if (!t || !t.mediaGroups || !t.mediaGroups.AUDIO) return e;
      var i = t.mediaGroups.AUDIO,
        s = Object.keys(i);
      let r;
      if (Object.keys(this.mediaTypes_.AUDIO.groups).length)
        r = this.mediaTypes_.AUDIO.activeTrack();
      else {
        var n = i.main || (s.length && i[s[0]]);
        for (const d in n)
          if (n[d].default) {
            r = { label: d };
            break;
          }
      }
      if (!r) return e;
      var a = [];
      for (const h in i)
        if (i[h][r.label]) {
          var o = i[h][r.label];
          if (o.playlists && o.playlists.length) a.push.apply(a, o.playlists);
          else if (o.uri) a.push(o);
          else if (t.playlists.length)
            for (let e = 0; e < t.playlists.length; e++) {
              var l = t.playlists[e];
              l.attributes &&
                l.attributes.AUDIO &&
                l.attributes.AUDIO === h &&
                a.push(l);
            }
        }
      return a.length ? a : e;
    }
    setupMainPlaylistLoaderListeners_() {
      this.mainPlaylistLoader_.on("loadedmetadata", () => {
        var e = this.mainPlaylistLoader_.media(),
          t = 1.5 * e.targetDuration * 1e3;
        hd(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media())
          ? (this.requestOptions_.timeout = 0)
          : (this.requestOptions_.timeout = t),
          e.endList &&
            "none" !== this.tech_.preload() &&
            (this.mainSegmentLoader_.playlist(e, this.requestOptions_),
            this.mainSegmentLoader_.load()),
          mu({
            sourceType: this.sourceType_,
            segmentLoaders: {
              AUDIO: this.audioSegmentLoader_,
              SUBTITLES: this.subtitleSegmentLoader_,
              main: this.mainSegmentLoader_,
            },
            tech: this.tech_,
            requestOptions: this.requestOptions_,
            mainPlaylistLoader: this.mainPlaylistLoader_,
            vhs: this.vhs_,
            main: this.main(),
            mediaTypes: this.mediaTypes_,
            excludePlaylist: this.excludePlaylist.bind(this),
          }),
          this.triggerPresenceUsage_(this.main(), e),
          this.setupFirstPlay(),
          !this.mediaTypes_.AUDIO.activePlaylistLoader ||
          this.mediaTypes_.AUDIO.activePlaylistLoader.media()
            ? this.trigger("selectedinitialmedia")
            : this.mediaTypes_.AUDIO.activePlaylistLoader.one(
                "loadedmetadata",
                () => {
                  this.trigger("selectedinitialmedia");
                }
              );
      }),
        this.mainPlaylistLoader_.on("loadedplaylist", () => {
          this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_);
          let t = this.mainPlaylistLoader_.media();
          if (!t) {
            this.excludeUnsupportedVariants_();
            let e;
            if (
              !(e =
                (e = this.enableLowInitialPlaylist
                  ? this.selectInitialPlaylist()
                  : e) || this.selectPlaylist()) ||
              !this.shouldSwitchToMedia_(e)
            )
              return;
            if (
              ((this.initialMedia_ = e),
              this.switchMedia_(this.initialMedia_, "initial"),
              !("vhs-json" === this.sourceType_ && this.initialMedia_.segments))
            )
              return;
            t = this.initialMedia_;
          }
          this.handleUpdatedMediaPlaylist(t);
        }),
        this.mainPlaylistLoader_.on("error", () => {
          var e = this.mainPlaylistLoader_.error;
          this.excludePlaylist({ playlistToExclude: e.playlist, error: e });
        }),
        this.mainPlaylistLoader_.on("mediachanging", () => {
          this.mainSegmentLoader_.abort(), this.mainSegmentLoader_.pause();
        }),
        this.mainPlaylistLoader_.on("mediachange", () => {
          var e = this.mainPlaylistLoader_.media(),
            t = 1.5 * e.targetDuration * 1e3;
          hd(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media())
            ? (this.requestOptions_.timeout = 0)
            : (this.requestOptions_.timeout = t),
            this.mainPlaylistLoader_.load(),
            this.mainSegmentLoader_.playlist(e, this.requestOptions_),
            this.mainSegmentLoader_.load(),
            this.tech_.trigger({ type: "mediachange", bubbles: !0 });
        }),
        this.mainPlaylistLoader_.on("playlistunchanged", () => {
          var e = this.mainPlaylistLoader_.media();
          "playlist-unchanged" !== e.lastExcludeReason_ &&
            this.stuckAtPlaylistEnd_(e) &&
            (this.excludePlaylist({
              error: {
                message: "Playlist no longer updating.",
                reason: "playlist-unchanged",
              },
            }),
            this.tech_.trigger("playliststuck"));
        }),
        this.mainPlaylistLoader_.on("renditiondisabled", () => {
          this.tech_.trigger({ type: "usage", name: "vhs-rendition-disabled" });
        }),
        this.mainPlaylistLoader_.on("renditionenabled", () => {
          this.tech_.trigger({ type: "usage", name: "vhs-rendition-enabled" });
        });
    }
    handleUpdatedMediaPlaylist(e) {
      this.useCueTags_ && this.updateAdCues_(e),
        this.mainSegmentLoader_.playlist(e, this.requestOptions_),
        this.updateDuration(!e.endList),
        this.tech_.paused() ||
          (this.mainSegmentLoader_.load(),
          this.audioSegmentLoader_ && this.audioSegmentLoader_.load());
    }
    triggerPresenceUsage_(e, t) {
      var i = e.mediaGroups || {};
      let s = !0;
      e = Object.keys(i.AUDIO);
      for (const r in i.AUDIO)
        for (const n in i.AUDIO[r]) i.AUDIO[r][n].uri || (s = !1);
      s && this.tech_.trigger({ type: "usage", name: "vhs-demuxed" }),
        Object.keys(i.SUBTITLES).length &&
          this.tech_.trigger({ type: "usage", name: "vhs-webvtt" }),
        gu.Playlist.isAes(t) &&
          this.tech_.trigger({ type: "usage", name: "vhs-aes" }),
        e.length &&
          1 < Object.keys(i.AUDIO[e[0]]).length &&
          this.tech_.trigger({ type: "usage", name: "vhs-alternate-audio" }),
        this.useCueTags_ &&
          this.tech_.trigger({ type: "usage", name: "vhs-playlist-cue-tags" });
    }
    shouldSwitchToMedia_(t) {
      var e =
          this.mainPlaylistLoader_.media() ||
          this.mainPlaylistLoader_.pendingMedia_,
        i = this.tech_.currentTime(),
        s = this.bufferLowWaterLine(),
        r = this.bufferHighWaterLine(),
        {
          currentPlaylist: i,
          buffered: e,
          currentTime: t,
          nextPlaylist: s,
          bufferLowWaterLine: r,
          bufferHighWaterLine: n,
          duration: a,
          bufferBasedABR: o,
          log: l,
        } = [
          {
            buffered: this.tech_.buffered(),
            currentTime: i,
            currentPlaylist: e,
            nextPlaylist: t,
            bufferLowWaterLine: s,
            bufferHighWaterLine: r,
            duration: this.duration(),
            bufferBasedABR: this.bufferBasedABR,
            log: this.logger_,
          },
        ][0];
      if (s) {
        var d = `allowing switch ${(i && i.id) || "null"} -> ` + s.id;
        if (!i) return l(d + " as current playlist is not set"), !0;
        if (s.id !== i.id) {
          var h = Boolean(Fl(e, t).length);
          if (!i.endList)
            return h || "number" != typeof i.partTargetDuration
              ? (l(d + " as current playlist is live"), !0)
              : (l(
                  `not ${d} as current playlist is live llhls, but currentTime isn't in buffered.`
                ),
                !1);
          (h = ql(e, t)),
            (e = o
              ? L.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE
              : L.MAX_BUFFER_LOW_WATER_LINE);
          if (a < e)
            return l(d + ` as duration < max low water line (${a} < ${e})`), !0;
          (t = s.attributes.BANDWIDTH), (a = i.attributes.BANDWIDTH);
          if (t < a && (!o || h < n)) {
            let e = d + ` as next bandwidth < current bandwidth (${t} < ${a})`;
            return (
              o &&
                (e += ` and forwardBuffer < bufferHighWaterLine (${h} < ${n})`),
              l(e),
              !0
            );
          }
          if ((!o || a < t) && r <= h) {
            let e =
              d + ` as forwardBuffer >= bufferLowWaterLine (${h} >= ${r})`;
            return (
              o &&
                (e += ` and next bandwidth > current bandwidth (${t} > ${a})`),
              l(e),
              !0
            );
          }
          l(`not ${d} as no switching criteria met`);
        }
      } else T.log.warn("We received no playlist to switch to. Please check your stream.");
      return !1;
    }
    setupSegmentLoaderListeners_() {
      this.mainSegmentLoader_.on("bandwidthupdate", () => {
        this.checkABR_("bandwidthupdate"),
          this.tech_.trigger("bandwidthupdate");
      }),
        this.mainSegmentLoader_.on("timeout", () => {
          this.bufferBasedABR && this.mainSegmentLoader_.load();
        }),
        this.bufferBasedABR ||
          this.mainSegmentLoader_.on("progress", () => {
            this.trigger("progress");
          }),
        this.mainSegmentLoader_.on("error", () => {
          var e = this.mainSegmentLoader_.error();
          this.excludePlaylist({ playlistToExclude: e.playlist, error: e });
        }),
        this.mainSegmentLoader_.on("appenderror", () => {
          (this.error = this.mainSegmentLoader_.error_), this.trigger("error");
        }),
        this.mainSegmentLoader_.on("syncinfoupdate", () => {
          this.onSyncInfoUpdate_();
        }),
        this.mainSegmentLoader_.on("timestampoffset", () => {
          this.tech_.trigger({ type: "usage", name: "vhs-timestamp-offset" });
        }),
        this.audioSegmentLoader_.on("syncinfoupdate", () => {
          this.onSyncInfoUpdate_();
        }),
        this.audioSegmentLoader_.on("appenderror", () => {
          (this.error = this.audioSegmentLoader_.error_), this.trigger("error");
        }),
        this.mainSegmentLoader_.on("ended", () => {
          this.logger_("main segment loader ended"), this.onEndOfStream();
        }),
        this.mainSegmentLoader_.on("earlyabort", (e) => {
          this.bufferBasedABR ||
            (this.delegateLoaders_("all", ["abort"]),
            this.excludePlaylist({
              error: {
                message:
                  "Aborted early because there isn't enough bandwidth to complete the request without rebuffering.",
              },
              playlistExclusionDuration: 120,
            }));
        });
      var e = () => {
        if (!this.sourceUpdater_.hasCreatedSourceBuffers())
          return this.tryToCreateSourceBuffers_();
        var e = this.getCodecsOrExclude_();
        e && this.sourceUpdater_.addOrChangeSourceBuffers(e);
      };
      this.mainSegmentLoader_.on("trackinfo", e),
        this.audioSegmentLoader_.on("trackinfo", e),
        this.mainSegmentLoader_.on("fmp4", () => {
          this.triggeredFmp4Usage ||
            (this.tech_.trigger({ type: "usage", name: "vhs-fmp4" }),
            (this.triggeredFmp4Usage = !0));
        }),
        this.audioSegmentLoader_.on("fmp4", () => {
          this.triggeredFmp4Usage ||
            (this.tech_.trigger({ type: "usage", name: "vhs-fmp4" }),
            (this.triggeredFmp4Usage = !0));
        }),
        this.audioSegmentLoader_.on("ended", () => {
          this.logger_("audioSegmentLoader ended"), this.onEndOfStream();
        });
    }
    mediaSecondsLoaded_() {
      return Math.max(
        this.audioSegmentLoader_.mediaSecondsLoaded +
          this.mainSegmentLoader_.mediaSecondsLoaded
      );
    }
    load() {
      this.mainSegmentLoader_.load(),
        this.mediaTypes_.AUDIO.activePlaylistLoader &&
          this.audioSegmentLoader_.load(),
        this.mediaTypes_.SUBTITLES.activePlaylistLoader &&
          this.subtitleSegmentLoader_.load();
    }
    fastQualityChange_(e = this.selectPlaylist()) {
      e === this.mainPlaylistLoader_.media()
        ? this.logger_(
            "skipping fastQualityChange because new media is same as old"
          )
        : (this.switchMedia_(e, "fast-quality"),
          this.mainSegmentLoader_.resetEverything(() => {
            T.browser.IE_VERSION || T.browser.IS_EDGE
              ? this.tech_.setCurrentTime(this.tech_.currentTime() + 0.04)
              : this.tech_.setCurrentTime(this.tech_.currentTime());
          }));
    }
    play() {
      var e;
      if (!this.setupFirstPlay())
        return (
          this.tech_.ended() && this.tech_.setCurrentTime(0),
          this.hasPlayed_ && this.load(),
          (e = this.tech_.seekable()),
          this.tech_.duration() === 1 / 0 &&
          this.tech_.currentTime() < e.start(0)
            ? this.tech_.setCurrentTime(e.end(e.length - 1))
            : void 0
        );
    }
    setupFirstPlay() {
      var e = this.mainPlaylistLoader_.media();
      if (!e || this.tech_.paused() || this.hasPlayed_) return !1;
      if (!e.endList) {
        const t = this.seekable();
        if (!t.length) return !1;
        if (T.browser.IE_VERSION && 0 === this.tech_.readyState())
          return (
            this.tech_.one("loadedmetadata", () => {
              this.trigger("firstplay"),
                this.tech_.setCurrentTime(t.end(0)),
                (this.hasPlayed_ = !0);
            }),
            !1
          );
        this.trigger("firstplay"), this.tech_.setCurrentTime(t.end(0));
      }
      return (this.hasPlayed_ = !0), this.load(), !0;
    }
    handleSourceOpen_() {
      var e;
      this.tryToCreateSourceBuffers_(),
        this.tech_.autoplay() &&
          "undefined" != typeof (e = this.tech_.play()) &&
          "function" == typeof e.then &&
          e.then(null, (e) => {}),
        this.trigger("sourceopen");
    }
    handleSourceEnded_() {
      var e, t;
      this.inbandTextTracks_.metadataTrack_ &&
        (e = this.inbandTextTracks_.metadataTrack_.cues) &&
        e.length &&
        ((t = this.duration()),
        (e[e.length - 1].endTime =
          isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t));
    }
    handleDurationChange_() {
      this.tech_.trigger("durationchange");
    }
    onEndOfStream() {
      let e = this.mainSegmentLoader_.ended_;
      var t;
      this.mediaTypes_.AUDIO.activePlaylistLoader &&
        ((t = this.mainSegmentLoader_.getCurrentMediaInfo_()),
        (e = ((t && !t.hasVideo) || e) && this.audioSegmentLoader_.ended_)),
        e && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream());
    }
    stuckAtPlaylistEnd_(e) {
      var t, i;
      return (
        !!this.seekable().length &&
        null !==
          (t = this.syncController_.getExpiredTime(e, this.duration())) &&
        ((e = gu.Playlist.playlistEnd(e, t)),
        (t = this.tech_.currentTime()),
        (i = this.tech_.buffered()).length
          ? (i = i.end(i.length - 1)) - t <= Gl && e - i <= Gl
          : e - t <= Gl)
      );
    }
    excludePlaylist({
      playlistToExclude: s = this.mainPlaylistLoader_.media(),
      error: t = {},
      playlistExclusionDuration: i,
    }) {
      if (
        ((s = s || this.mainPlaylistLoader_.media()),
        (i =
          i || t.playlistExclusionDuration || this.playlistExclusionDuration),
        s)
      ) {
        s.playlistErrors_++;
        var r = this.mainPlaylistLoader_.main.playlists,
          n = r.filter(od),
          n = 1 === n.length && n[0] === s;
        if (1 === r.length && i !== 1 / 0)
          return (
            T.log.warn(
              `Problem encountered with playlist ${s.id}. ` +
                "Trying again since it is the only playlist."
            ),
            this.tech_.trigger("retryplaylist"),
            this.mainPlaylistLoader_.load(n)
          );
        if (n) {
          let i = !1;
          r.forEach((e) => {
            var t;
            e !== s &&
              "undefined" != typeof (t = e.excludeUntil) &&
              t !== 1 / 0 &&
              ((i = !0), delete e.excludeUntil);
          }),
            i &&
              (T.log.warn(
                "Removing other playlists from the exclusion list because the last rendition is about to be excluded."
              ),
              this.tech_.trigger("retryplaylist"));
        }
        let e;
        (e =
          s.playlistErrors_ > this.maxPlaylistRetries
            ? 1 / 0
            : Date.now() + 1e3 * i),
          (s.excludeUntil = e),
          t.reason && (s.lastExcludeReason_ = t.reason),
          this.tech_.trigger("excludeplaylist"),
          this.tech_.trigger({ type: "usage", name: "vhs-rendition-excluded" });
        var a,
          r = this.selectPlaylist();
        if (r)
          return (
            (i = t.internal ? this.logger_ : T.log.warn),
            (a = t.message ? " " + t.message : ""),
            i(
              `${
                t.internal ? "Internal problem" : "Problem"
              } encountered with playlist ${s.id}.` +
                a +
                ` Switching to playlist ${r.id}.`
            ),
            r.attributes.AUDIO !== s.attributes.AUDIO &&
              this.delegateLoaders_("audio", ["abort", "pause"]),
            r.attributes.SUBTITLES !== s.attributes.SUBTITLES &&
              this.delegateLoaders_("subtitle", ["abort", "pause"]),
            this.delegateLoaders_("main", ["abort", "pause"]),
            (i = (r.targetDuration / 2) * 1e3 || 5e3),
            (a =
              "number" == typeof r.lastRequest &&
              Date.now() - r.lastRequest <= i),
            this.switchMedia_(r, "exclude", n || a)
          );
        (this.error =
          "Playback cannot continue. No available working or supported playlists."),
          this.trigger("error");
      } else (this.error = t), "open" !== this.mediaSource.readyState ? this.trigger("error") : this.sourceUpdater_.endOfStream("network");
    }
    pauseLoading() {
      this.delegateLoaders_("all", ["abort", "pause"]), this.stopABRTimer_();
    }
    delegateLoaders_(i, e) {
      const s = [];
      var t = "all" === i,
        r = ((!t && "main" !== i) || s.push(this.mainPlaylistLoader_), []);
      (!t && "audio" !== i) || r.push("AUDIO"),
        (!t && "subtitle" !== i) ||
          (r.push("CLOSED-CAPTIONS"), r.push("SUBTITLES")),
        r.forEach((e) => {
          e = this.mediaTypes_[e] && this.mediaTypes_[e].activePlaylistLoader;
          e && s.push(e);
        }),
        ["main", "audio", "subtitle"].forEach((e) => {
          var t = this[e + "SegmentLoader_"];
          !t || (i !== e && "all" !== i) || s.push(t);
        }),
        s.forEach((t) =>
          e.forEach((e) => {
            "function" == typeof t[e] && t[e]();
          })
        );
    }
    setCurrentTime(e) {
      var t = Fl(this.tech_.buffered(), e);
      return this.mainPlaylistLoader_ &&
        this.mainPlaylistLoader_.media() &&
        this.mainPlaylistLoader_.media().segments
        ? t && t.length
          ? e
          : (this.mainSegmentLoader_.resetEverything(),
            this.mainSegmentLoader_.abort(),
            this.mediaTypes_.AUDIO.activePlaylistLoader &&
              (this.audioSegmentLoader_.resetEverything(),
              this.audioSegmentLoader_.abort()),
            this.mediaTypes_.SUBTITLES.activePlaylistLoader &&
              (this.subtitleSegmentLoader_.resetEverything(),
              this.subtitleSegmentLoader_.abort()),
            void this.load())
        : 0;
    }
    duration() {
      var e;
      return this.mainPlaylistLoader_ && (e = this.mainPlaylistLoader_.media())
        ? e.endList
          ? this.mediaSource
            ? this.mediaSource.duration
            : gu.Playlist.duration(e)
          : 1 / 0
        : 0;
    }
    seekable() {
      return this.seekable_;
    }
    onSyncInfoUpdate_() {
      let i;
      if (this.mainPlaylistLoader_) {
        var s = this.mainPlaylistLoader_.media();
        if (s) {
          var r = this.syncController_.getExpiredTime(s, this.duration());
          if (null !== r) {
            var n = this.mainPlaylistLoader_.main,
              a = gu.Playlist.seekable(s, r, gu.Playlist.liveEdgeDelay(n, s));
            if (0 !== a.length) {
              if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                if (
                  ((s = this.mediaTypes_.AUDIO.activePlaylistLoader.media()),
                  null ===
                    (r = this.syncController_.getExpiredTime(
                      s,
                      this.duration()
                    )))
                )
                  return;
                if (
                  0 ===
                  (i = gu.Playlist.seekable(
                    s,
                    r,
                    gu.Playlist.liveEdgeDelay(n, s)
                  )).length
                )
                  return;
              }
              let e, t;
              this.seekable_ &&
                this.seekable_.length &&
                ((e = this.seekable_.end(0)), (t = this.seekable_.start(0))),
                !i || i.start(0) > a.end(0) || a.start(0) > i.end(0)
                  ? (this.seekable_ = a)
                  : (this.seekable_ = Bl([
                      [
                        (i.start(0) > a.start(0) ? i : a).start(0),
                        (i.end(0) < a.end(0) ? i : a).end(0),
                      ],
                    ])),
                (this.seekable_ &&
                  this.seekable_.length &&
                  this.seekable_.end(0) === e &&
                  this.seekable_.start(0) === t) ||
                  (this.logger_(`seekable updated [${Xl(this.seekable_)}]`),
                  this.tech_.trigger("seekablechanged"));
            }
          }
        }
      }
    }
    updateDuration(t) {
      if (
        (this.updateDuration_ &&
          (this.mediaSource.removeEventListener(
            "sourceopen",
            this.updateDuration_
          ),
          (this.updateDuration_ = null)),
        "open" !== this.mediaSource.readyState)
      )
        (this.updateDuration_ = this.updateDuration.bind(this, t)),
          this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
      else {
        if (t)
          return (t = this.seekable()).length
            ? void (
                (isNaN(this.mediaSource.duration) ||
                  this.mediaSource.duration < t.end(t.length - 1)) &&
                this.sourceUpdater_.setDuration(t.end(t.length - 1))
              )
            : void 0;
        t = this.tech_.buffered();
        let e = gu.Playlist.duration(this.mainPlaylistLoader_.media());
        0 < t.length && (e = Math.max(e, t.end(t.length - 1))),
          this.mediaSource.duration !== e && this.sourceUpdater_.setDuration(e);
      }
    }
    dispose() {
      this.trigger("dispose"),
        this.decrypter_.terminate(),
        this.mainPlaylistLoader_.dispose(),
        this.mainSegmentLoader_.dispose(),
        this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_),
        ["AUDIO", "SUBTITLES"].forEach((e) => {
          var t = this.mediaTypes_[e].groups;
          for (const i in t)
            t[i].forEach((e) => {
              e.playlistLoader && e.playlistLoader.dispose();
            });
        }),
        this.audioSegmentLoader_.dispose(),
        this.subtitleSegmentLoader_.dispose(),
        this.sourceUpdater_.dispose(),
        this.timelineChangeController_.dispose(),
        this.stopABRTimer_(),
        this.updateDuration_ &&
          this.mediaSource.removeEventListener(
            "sourceopen",
            this.updateDuration_
          ),
        this.mediaSource.removeEventListener(
          "durationchange",
          this.handleDurationChange_
        ),
        this.mediaSource.removeEventListener(
          "sourceopen",
          this.handleSourceOpen_
        ),
        this.mediaSource.removeEventListener(
          "sourceended",
          this.handleSourceEnded_
        ),
        this.off();
    }
    main() {
      return this.mainPlaylistLoader_.main;
    }
    media() {
      return this.mainPlaylistLoader_.media() || this.initialMedia_;
    }
    areMediaTypesKnown_() {
      var e = !!this.mediaTypes_.AUDIO.activePlaylistLoader,
        t = !!this.mainSegmentLoader_.getCurrentMediaInfo_(),
        e = !e || !!this.audioSegmentLoader_.getCurrentMediaInfo_();
      return t && e;
    }
    getCodecsOrExclude_() {
      const r = {
        main: this.mainSegmentLoader_.getCurrentMediaInfo_() || {},
        audio: this.audioSegmentLoader_.getCurrentMediaInfo_() || {},
      };
      r.video = r.main;
      var e = uh(this.main(), this.media());
      const n = {};
      var t = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
      if (
        (r.main.hasVideo &&
          (n.video = e.video || r.main.videoCodec || "avc1.4d400d"),
        r.main.isMuxed &&
          (n.video += "," + (e.audio || r.main.audioCodec || Bn)),
        ((r.main.hasAudio && !r.main.isMuxed) || r.audio.hasAudio || t) &&
          ((n.audio = e.audio || r.main.audioCodec || r.audio.audioCodec || Bn),
          (r.audio.isFmp4 = (
            r.main.hasAudio && !r.main.isMuxed ? r.main : r.audio
          ).isFmp4)),
        n.audio || n.video)
      ) {
        const a = {};
        let s;
        if (
          (["video", "audio"].forEach(function (e) {
            var t, i;
            n.hasOwnProperty(e) &&
              ((t = r[e].isFmp4), (i = n[e]), !(t ? kn : In)(i)) &&
              ((t = r[e].isFmp4 ? "browser" : "muxer"),
              (a[t] = a[t] || []),
              a[t].push(n[e]),
              "audio" === e && (s = t));
          }),
          t && s && this.media().attributes.AUDIO)
        ) {
          const i = this.media().attributes.AUDIO;
          this.main().playlists.forEach((e) => {
            (e.attributes && e.attributes.AUDIO) === i &&
              e !== this.media() &&
              (e.excludeUntil = 1 / 0);
          }),
            this.logger_(
              `excluding audio group ${i} as ${s} does not support codec(s): "${n.audio}"`
            );
        }
        if (!Object.keys(a).length) {
          if (
            this.sourceUpdater_.hasCreatedSourceBuffers() &&
            !this.sourceUpdater_.canChangeType()
          ) {
            const o = [];
            if (
              (["video", "audio"].forEach((e) => {
                var t = (Rn(this.sourceUpdater_.codecs[e] || "")[0] || {}).type,
                  i = (Rn(n[e] || "")[0] || {}).type;
                t &&
                  i &&
                  t.toLowerCase() !== i.toLowerCase() &&
                  o.push(`"${this.sourceUpdater_.codecs[e]}" -> "${n[e]}"`);
              }),
              o.length)
            )
              return void this.excludePlaylist({
                playlistToExclude: this.media(),
                error: {
                  message: `Codec switching not supported: ${o.join(", ")}.`,
                  internal: !0,
                },
                playlistExclusionDuration: 1 / 0,
              });
          }
          return n;
        }
        (e =
          Object.keys(a).reduce(
            (e, t) => (
              e && (e += ", "),
              (e += `${t} does not support codec(s): "${a[t].join(",")}"`)
            ),
            ""
          ) + "."),
          this.excludePlaylist({
            playlistToExclude: this.media(),
            error: { internal: !0, message: e },
            playlistExclusionDuration: 1 / 0,
          });
      } else this.excludePlaylist({ playlistToExclude: this.media(), error: { message: "Could not determine codecs for playlist." }, playlistExclusionDuration: 1 / 0 });
    }
    tryToCreateSourceBuffers_() {
      var e;
      "open" !== this.mediaSource.readyState ||
        this.sourceUpdater_.hasCreatedSourceBuffers() ||
        (this.areMediaTypesKnown_() &&
          (e = this.getCodecsOrExclude_()) &&
          (this.sourceUpdater_.createSourceBuffers(e),
          (e = [e.video, e.audio].filter(Boolean).join(",")),
          this.excludeIncompatibleVariants_(e)));
    }
    excludeUnsupportedVariants_() {
      const s = this.main().playlists,
        r = [];
      Object.keys(s).forEach((e) => {
        var t,
          i,
          e = s[e];
        -1 === r.indexOf(e.id) &&
          (r.push(e.id),
          (i = []),
          !(t = uh(this.main, e)).audio ||
            In(t.audio) ||
            kn(t.audio) ||
            i.push("audio codec " + t.audio),
          !t.video ||
            In(t.video) ||
            kn(t.video) ||
            i.push("video codec " + t.video),
          t.text &&
            "stpp.ttml.im1t" === t.text &&
            i.push("text codec " + t.text),
          i.length) &&
          ((e.excludeUntil = 1 / 0),
          this.logger_(`excluding ${e.id} for unsupported: ` + i.join(", ")));
      });
    }
    excludeIncompatibleVariants_(e) {
      const r = [],
        n = this.main().playlists;
      e = xh(Rn(e));
      const a = hh(e),
        o = (e.video && Rn(e.video)[0]) || null,
        l = (e.audio && Rn(e.audio)[0]) || null;
      Object.keys(n).forEach((e) => {
        var t,
          i,
          s,
          e = n[e];
        -1 === r.indexOf(e.id) &&
          e.excludeUntil !== 1 / 0 &&
          (r.push(e.id),
          (t = []),
          (s = uh(this.mainPlaylistLoader_.main, e)),
          (i = hh(s)),
          s.audio || s.video) &&
          (i !== a && t.push(`codec count "${i}" !== "${a}"`),
          this.sourceUpdater_.canChangeType() ||
            ((i = (s.video && Rn(s.video)[0]) || null),
            (s = (s.audio && Rn(s.audio)[0]) || null),
            i &&
              o &&
              i.type.toLowerCase() !== o.type.toLowerCase() &&
              t.push(`video codec "${i.type}" !== "${o.type}"`),
            s &&
              l &&
              s.type.toLowerCase() !== l.type.toLowerCase() &&
              t.push(`audio codec "${s.type}" !== "${l.type}"`)),
          t.length) &&
          ((e.excludeUntil = 1 / 0),
          this.logger_(`excluding ${e.id}: ` + t.join(" && ")));
      });
    }
    updateAdCues_(e) {
      let t = 0;
      var s = this.seekable(),
        [r, n, s = 0] =
          (s.length && (t = s.start(0)), [e, this.cueTagsTrack_, t]);
      if (r.segments) {
        let t = s,
          i;
        for (let e = 0; e < r.segments.length; e++) {
          var a,
            o,
            l = r.segments[e];
          if (
            (i =
              i ||
              (function (e, t) {
                var i = e.cues;
                for (let e = 0; e < i.length; e++) {
                  var s = i[e];
                  if (t >= s.adStartTime && t <= s.adEndTime) return s;
                }
                return null;
              })(n, t + l.duration / 2))
          ) {
            if ("cueIn" in l) {
              (i.endTime = t), (i.adEndTime = t), (t += l.duration), (i = null);
              continue;
            }
            if (t < i.endTime) {
              t += l.duration;
              continue;
            }
            i.endTime += l.duration;
          } else
            "cueOut" in l &&
              (((i = new window.VTTCue(
                t,
                t + l.duration,
                l.cueOut
              )).adStartTime = t),
              (i.adEndTime = t + parseFloat(l.cueOut)),
              n.addCue(i)),
              "cueOutCont" in l &&
                (([a, o] = l.cueOutCont.split("/").map(parseFloat)),
                ((i = new window.VTTCue(t, t + l.duration, "")).adStartTime =
                  t - a),
                (i.adEndTime = i.adStartTime + o),
                n.addCue(i));
          t += l.duration;
        }
      }
    }
    goalBufferLength() {
      var e = this.tech_.currentTime(),
        t = L.GOAL_BUFFER_LENGTH,
        i = L.GOAL_BUFFER_LENGTH_RATE,
        s = Math.max(t, L.MAX_GOAL_BUFFER_LENGTH);
      return Math.min(t + e * i, s);
    }
    bufferLowWaterLine() {
      var e = this.tech_.currentTime(),
        t = L.BUFFER_LOW_WATER_LINE,
        i = L.BUFFER_LOW_WATER_LINE_RATE,
        s = Math.max(t, L.MAX_BUFFER_LOW_WATER_LINE),
        r = Math.max(t, L.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
      return Math.min(t + e * i, this.bufferBasedABR ? r : s);
    }
    bufferHighWaterLine() {
      return L.BUFFER_HIGH_WATER_LINE;
    }
  }
  class _u {
    constructor(e, t, i) {
      var s,
        r,
        n,
        a,
        o = e["playlistController_"],
        l = o.fastQualityChange_.bind(o);
      t.attributes &&
        ((s = t.attributes.RESOLUTION),
        (this.width = s && s.width),
        (this.height = s && s.height),
        (this.bandwidth = t.attributes.BANDWIDTH),
        (this.frameRate = t.attributes["FRAME-RATE"])),
        (this.codecs = uh(o.main(), t)),
        (this.playlist = t),
        (this.id = i),
        (this.enabled =
          ((r = e.playlists),
          (n = t.id),
          (a = l),
          (e) => {
            var t = r.main.playlists[n],
              i = ad(t),
              s = od(t);
            return "undefined" == typeof e
              ? s
              : (e ? delete t.disabled : (t.disabled = !0),
                e === s ||
                  i ||
                  (a(),
                  e
                    ? r.trigger("renditionenabled")
                    : r.trigger("renditiondisabled")),
                e);
          }));
    }
  }
  const vu = ["seeking", "seeked", "pause", "playing", "error"];
  class bu {
    constructor(e) {
      (this.playlistController_ = e.playlistController),
        (this.tech_ = e.tech),
        (this.seekable = e.seekable),
        (this.allowSeeksWithinUnsafeLiveWindow =
          e.allowSeeksWithinUnsafeLiveWindow),
        (this.liveRangeSafeTimeDelta = e.liveRangeSafeTimeDelta),
        (this.media = e.media),
        (this.consecutiveUpdates = 0),
        (this.lastRecordedTime = null),
        (this.checkCurrentTimeTimeout_ = null),
        (this.logger_ = Ul("PlaybackWatcher")),
        this.logger_("initialize");
      const t = () => this.monitorCurrentTime_(),
        i = () => this.monitorCurrentTime_(),
        s = () => this.techWaiting_(),
        r = () => this.resetTimeUpdate_(),
        n = this.playlistController_,
        a = ["main", "subtitle", "audio"],
        o = {},
        l =
          (a.forEach((e) => {
            (o[e] = {
              reset: () => this.resetSegmentDownloads_(e),
              updateend: () => this.checkSegmentDownloads_(e),
            }),
              n[e + "SegmentLoader_"].on("appendsdone", o[e].updateend),
              n[e + "SegmentLoader_"].on("playlistupdate", o[e].reset),
              this.tech_.on(["seeked", "seeking"], o[e].reset);
          }),
          (t) => {
            ["main", "audio"].forEach((e) => {
              n[e + "SegmentLoader_"][t]("appended", this.seekingAppendCheck_);
            });
          });
      (this.seekingAppendCheck_ = () => {
        this.fixesBadSeeks_() &&
          ((this.consecutiveUpdates = 0),
          (this.lastRecordedTime = this.tech_.currentTime()),
          l("off"));
      }),
        (this.clearSeekingAppendCheck_ = () => l("off")),
        (this.watchForBadSeeking_ = () => {
          this.clearSeekingAppendCheck_(), l("on");
        }),
        this.tech_.on("seeked", this.clearSeekingAppendCheck_),
        this.tech_.on("seeking", this.watchForBadSeeking_),
        this.tech_.on("waiting", s),
        this.tech_.on(vu, r),
        this.tech_.on("canplay", i),
        this.tech_.one("play", t),
        (this.dispose = () => {
          this.clearSeekingAppendCheck_(),
            this.logger_("dispose"),
            this.tech_.off("waiting", s),
            this.tech_.off(vu, r),
            this.tech_.off("canplay", i),
            this.tech_.off("play", t),
            this.tech_.off("seeking", this.watchForBadSeeking_),
            this.tech_.off("seeked", this.clearSeekingAppendCheck_),
            a.forEach((e) => {
              n[e + "SegmentLoader_"].off("appendsdone", o[e].updateend),
                n[e + "SegmentLoader_"].off("playlistupdate", o[e].reset),
                this.tech_.off(["seeked", "seeking"], o[e].reset);
            }),
            this.checkCurrentTimeTimeout_ &&
              window.clearTimeout(this.checkCurrentTimeTimeout_),
            this.resetTimeUpdate_();
        });
    }
    monitorCurrentTime_() {
      this.checkCurrentTime_(),
        this.checkCurrentTimeTimeout_ &&
          window.clearTimeout(this.checkCurrentTimeTimeout_),
        (this.checkCurrentTimeTimeout_ = window.setTimeout(
          this.monitorCurrentTime_.bind(this),
          250
        ));
    }
    resetSegmentDownloads_(e) {
      var t = this.playlistController_[e + "SegmentLoader_"];
      0 < this[e + "StalledDownloads_"] &&
        this.logger_(
          `resetting possible stalled download count for ${e} loader`
        ),
        (this[e + "StalledDownloads_"] = 0),
        (this[e + "Buffered_"] = t.buffered_());
    }
    checkSegmentDownloads_(e) {
      var t = this.playlistController_,
        i = t[e + "SegmentLoader_"],
        s = i.buffered_(),
        r = (function (t, i) {
          if (t !== i) {
            if ((!t && i) || (!i && t)) return !0;
            if (t.length !== i.length) return !0;
            for (let e = 0; e < t.length; e++)
              if (t.start(e) !== i.start(e) || t.end(e) !== i.end(e)) return !0;
          }
          return !1;
        })(this[e + "Buffered_"], s);
      (this[e + "Buffered_"] = s),
        r
          ? this.resetSegmentDownloads_(e)
          : (this[e + "StalledDownloads_"]++,
            this.logger_(
              `found #${
                this[e + "StalledDownloads_"]
              } ${e} appends that did not increase buffer (possible stalled download)`,
              { playlistId: i.playlist_ && i.playlist_.id, buffered: Kl(s) }
            ),
            this[e + "StalledDownloads_"] < 10 ||
              (this.logger_(e + " loader stalled download exclusion"),
              this.resetSegmentDownloads_(e),
              this.tech_.trigger({
                type: "usage",
                name: `vhs-${e}-download-exclusion`,
              }),
              "subtitle" !== e &&
                t.excludePlaylist({
                  error: {
                    message: `Excessive ${e} segment downloading detected.`,
                  },
                  playlistExclusionDuration: 1 / 0,
                })));
    }
    checkCurrentTime_() {
      var e, t;
      if (!this.tech_.paused() && !this.tech_.seeking())
        return (
          (e = this.tech_.currentTime()),
          (t = this.tech_.buffered()),
          this.lastRecordedTime === e &&
          (!t.length || e + Gl >= t.end(t.length - 1))
            ? this.techWaiting_()
            : void (5 <= this.consecutiveUpdates && e === this.lastRecordedTime
                ? (this.consecutiveUpdates++, this.waiting_())
                : e === this.lastRecordedTime
                ? this.consecutiveUpdates++
                : ((this.consecutiveUpdates = 0), (this.lastRecordedTime = e)))
        );
    }
    resetTimeUpdate_() {
      this.consecutiveUpdates = 0;
    }
    fixesBadSeeks_() {
      if (!this.tech_.seeking()) return !1;
      var e = this.seekable(),
        t = this.tech_.currentTime();
      let i;
      if (
        (this.afterSeekableWindow_(
          e,
          t,
          this.media(),
          this.allowSeeksWithinUnsafeLiveWindow
        ) && ((s = e.end(e.length - 1)), (i = s)),
        this.beforeSeekableWindow_(e, t) &&
          ((s = e.start(0)), (i = s + (s === e.end(0) ? 0 : Gl))),
        "undefined" != typeof i)
      )
        this.logger_(
          `Trying to seek outside of seekable at time ${t} with ` +
            `seekable range ${Xl(e)}. Seeking to ` +
            i +
            "."
        );
      else {
        var s = this.playlistController_.sourceUpdater_,
          e = this.tech_.buffered(),
          r = s.audioBuffer ? s.audioBuffered() : null,
          s = s.videoBuffer ? s.videoBuffered() : null,
          n = this.media(),
          a = n.partTargetDuration || 2 * (n.targetDuration - Wl),
          o = [r, s];
        for (let e = 0; e < o.length; e++)
          if (o[e]) if (ql(o[e], t) < a) return !1;
        if (0 === (n = jl(e, t)).length) return !1;
        (i = n.start(0) + Gl),
          this.logger_(
            `Buffered region starts (${n.start(0)}) ` +
              ` just beyond seek point (${t}). Seeking to ${i}.`
          );
      }
      return this.tech_.setCurrentTime(i), !0;
    }
    waiting_() {
      var e, t;
      this.techWaiting_() ||
        ((e = this.tech_.currentTime()),
        (t = this.tech_.buffered()),
        (t = Fl(t, e)).length &&
          e + 3 <= t.end(0) &&
          (this.resetTimeUpdate_(),
          this.tech_.setCurrentTime(e),
          this.logger_(
            `Stopped at ${e} while inside a buffered region ` +
              `[${t.start(0)} -> ${t.end(0)}]. Attempting to resume ` +
              "playback by seeking to the current time."
          ),
          this.tech_.trigger({ type: "usage", name: "vhs-unknown-waiting" })));
    }
    techWaiting_() {
      var e,
        t = this.seekable(),
        i = this.tech_.currentTime();
      return (
        !!this.tech_.seeking() ||
        (this.beforeSeekableWindow_(t, i)
          ? ((t = t.end(t.length - 1)),
            this.logger_(
              `Fell out of live window at time ${i}. Seeking to ` +
                "live point (seekable end) " +
                t
            ),
            this.resetTimeUpdate_(),
            this.tech_.setCurrentTime(t),
            this.tech_.trigger({ type: "usage", name: "vhs-live-resync" }),
            !0)
          : ((t = this.tech_.vhs.playlistController_.sourceUpdater_),
            (e = this.tech_.buffered()),
            this.videoUnderflow_({
              audioBuffered: t.audioBuffered(),
              videoBuffered: t.videoBuffered(),
              currentTime: i,
            })
              ? (this.resetTimeUpdate_(),
                this.tech_.setCurrentTime(i),
                this.tech_.trigger({
                  type: "usage",
                  name: "vhs-video-underflow",
                }),
                !0)
              : 0 < (t = jl(e, i)).length &&
                (this.logger_(`Stopped at ${i} and seeking to ` + t.start(0)),
                this.resetTimeUpdate_(),
                this.skipTheGap_(i),
                !0)))
      );
    }
    afterSeekableWindow_(e, t, i, s = !1) {
      if (!e.length) return !1;
      let r = e.end(e.length - 1) + Gl;
      var n = !i.endList;
      return t > (r = n && s ? e.end(e.length - 1) + 3 * i.targetDuration : r);
    }
    beforeSeekableWindow_(e, t) {
      return !!(
        e.length &&
        0 < e.start(0) &&
        t < e.start(0) - this.liveRangeSafeTimeDelta
      );
    }
    videoUnderflow_({ videoBuffered: t, audioBuffered: i, currentTime: s }) {
      if (t) {
        let e;
        var r, n;
        return (
          t.length && i.length
            ? ((r = Fl(t, s - 3)),
              (n = Fl(t, s)),
              (i = Fl(i, s)).length &&
                !n.length &&
                r.length &&
                (e = { start: r.end(0), end: i.end(0) }))
            : jl(t, s).length || (e = this.gapFromVideoUnderflow_(t, s)),
          !!e &&
            (this.logger_(
              `Encountered a gap in video from ${e.start} to ${e.end}. ` +
                "Seeking to current time " +
                s
            ),
            !0)
        );
      }
    }
    skipTheGap_(e) {
      var t = this.tech_.buffered(),
        i = this.tech_.currentTime(),
        t = jl(t, i);
      this.resetTimeUpdate_(),
        0 !== t.length &&
          i === e &&
          (this.logger_(
            "skipTheGap_:",
            "currentTime:",
            i,
            "scheduled currentTime:",
            e,
            "nextRange start:",
            t.start(0)
          ),
          this.tech_.setCurrentTime(t.start(0) + Wl),
          this.tech_.trigger({ type: "usage", name: "vhs-gap-skip" }));
    }
    gapFromVideoUnderflow_(e, t) {
      var i = (function (t) {
        if (t.length < 2) return Bl();
        var i = [];
        for (let e = 1; e < t.length; e++) {
          var s = t.end(e - 1),
            r = t.start(e);
          i.push([s, r]);
        }
        return Bl(i);
      })(e);
      for (let e = 0; e < i.length; e++) {
        var s = i.start(e),
          r = i.end(e);
        if (t - s < 4 && 2 < t - s) return { start: s, end: r };
      }
      return null;
    }
  }
  const Tu = {
      errorInterval: 30,
      getSource(e) {
        return e(
          this.tech({ IWillNotUseThisInPlugins: !0 }).currentSource_ ||
            this.currentSource()
        );
      },
    },
    Su = function (t, e) {
      let i = 0,
        s = 0;
      function r(e) {
        null != e &&
          ((s = (t.duration() !== 1 / 0 && t.currentTime()) || 0),
          t.one("loadedmetadata", l),
          t.src(e),
          t.trigger({ type: "usage", name: "vhs-error-reload" }),
          t.play());
      }
      function n() {
        if (Date.now() - i < 1e3 * o.errorInterval)
          t.trigger({ type: "usage", name: "vhs-error-reload-canceled" });
        else {
          if (o.getSource && "function" == typeof o.getSource)
            return (i = Date.now()), o.getSource.call(t, r);
          T.log.error(
            "ERROR: reloadSourceOnError - The option getSource must be a function!"
          );
        }
      }
      function a() {
        t.off("loadedmetadata", l), t.off("error", n), t.off("dispose", a);
      }
      const o = D(Tu, e),
        l =
          (t.ready(() => {
            t.trigger({ type: "usage", name: "vhs-error-reload-initialized" });
          }),
          function () {
            s && t.currentTime(s);
          });
      t.on("error", n),
        t.on("dispose", a),
        (t.reloadSourceOnError = function (e) {
          a(), Su(t, e);
        });
    };
  function wu(t, e) {
    var i = e.media();
    let s = -1;
    for (let e = 0; e < t.length; e++)
      if (t[e].id === i.id) {
        s = e;
        break;
      }
    (t.selectedIndex_ = s), t.trigger({ selectedIndex: s, type: "change" });
  }
  const N = {
      PlaylistLoader: Cd,
      Playlist: pd,
      utils: Or,
      STANDARD_PLAYLIST_SELECTOR: Lh,
      INITIAL_PLAYLIST_SELECTOR: function () {
        var e = this.playlists.main.playlists.filter(pd.isEnabled),
          e =
            (Oh(e, (e, t) => ph(e, t)),
            e.filter((e) => !!uh(this.playlists.main, e).video));
        return e[0] || null;
      },
      lastBandwidthSelector: Lh,
      movingAverageBandwidthSelector: function (t) {
        let i = -1,
          s = -1;
        if (t < 0 || 1 < t)
          throw new Error(
            "Moving average bandwidth decay must be between 0 and 1."
          );
        return function () {
          var e = (this.useDevicePixelRatio && window.devicePixelRatio) || 1;
          return (
            i < 0 && ((i = this.systemBandwidth), (s = this.systemBandwidth)),
            0 < this.systemBandwidth &&
              this.systemBandwidth !== s &&
              ((i = t * this.systemBandwidth + (1 - t) * i),
              (s = this.systemBandwidth)),
            Dh(
              this.playlists.main,
              i,
              parseInt(ch(this.tech_.el(), "width"), 10) * e,
              parseInt(ch(this.tech_.el(), "height"), 10) * e,
              this.limitRenditionByPlayerDimensions,
              this.playlistController_
            )
          );
        };
      },
      comparePlaylistBandwidth: ph,
      comparePlaylistResolution: function (e, t) {
        let i, s;
        return (
          (i =
            (i =
              e.attributes.RESOLUTION && e.attributes.RESOLUTION.width
                ? e.attributes.RESOLUTION.width
                : i) || window.Number.MAX_VALUE),
          (s =
            (s =
              t.attributes.RESOLUTION && t.attributes.RESOLUTION.width
                ? t.attributes.RESOLUTION.width
                : s) || window.Number.MAX_VALUE),
          i === s && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH
            ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH
            : i - s
        );
      },
      xhr: Id(),
    },
    Eu =
      (Object.keys(L).forEach((t) => {
        Object.defineProperty(N, t, {
          get() {
            return (
              T.log.warn(
                `using Vhs.${t} is UNSAFE be sure you know what you are doing`
              ),
              L[t]
            );
          },
          set(e) {
            T.log.warn(
              `using Vhs.${t} is UNSAFE be sure you know what you are doing`
            ),
              "number" != typeof e || e < 0
                ? T.log.warn(
                    `value of Vhs.${t} must be greater than or equal to 0`
                  )
                : (L[t] = e);
          },
        });
      }),
      "videojs-vhs"),
    Cu =
      ((N.canPlaySource = function () {
        return T.log.warn(
          "VHS is no longer a tech. Please remove it from your player's techOrder."
        );
      }),
      ({ player: s, sourceKeySystems: e, audioMedia: t, mainPlaylists: i }) => {
        if (!s.eme.initializeMediaKeys) return Promise.resolve();
        var r,
          t = t ? i.concat([t]) : i,
          t =
            ((i = t),
            (r = Object.keys(e)),
            i.reduce((e, s) => {
              var t;
              return (
                s.contentProtection &&
                  ((t = r.reduce((e, t) => {
                    var i = s.contentProtection[t];
                    return i && i.pssh && (e[t] = { pssh: i.pssh }), e;
                  }, {})),
                  Object.keys(t).length) &&
                  e.push(t),
                e
              );
            }, []));
        const n = [],
          a = [];
        return (
          t.forEach((e) => {
            a.push(
              new Promise((e, t) => {
                s.tech_.one("keysessioncreated", e);
              })
            ),
              n.push(
                new Promise((t, i) => {
                  s.eme.initializeMediaKeys({ keySystems: e }, (e) => {
                    e ? i(e) : t();
                  });
                })
              );
          }),
          Promise.race([Promise.all(n), Promise.race(a)])
        );
      }),
    ku = ({ player: e, sourceKeySystems: t, media: i, audioMedia: s }) => {
      t = ((e, t, i) => {
        if (!e) return e;
        let s = {};
        t &&
          t.attributes &&
          t.attributes.CODECS &&
          (s = xh(Rn(t.attributes.CODECS))),
          i &&
            i.attributes &&
            i.attributes.CODECS &&
            (s.audio = i.attributes.CODECS);
        var r = Un(s.video),
          n = Un(s.audio),
          a = {};
        for (const o in e)
          (a[o] = {}),
            n && (a[o].audioContentType = n),
            r && (a[o].videoContentType = r),
            t.contentProtection &&
              t.contentProtection[o] &&
              t.contentProtection[o].pssh &&
              (a[o].pssh = t.contentProtection[o].pssh),
            "string" == typeof e[o] && (a[o].url = e[o]);
        return D(e, a);
      })(t, i, s);
      return !(
        !t ||
        ((e.currentSource().keySystems = t) &&
          !e.eme &&
          (T.log.warn(
            "DRM encrypted source cannot be decrypted without a DRM plugin"
          ),
          1))
      );
    },
    Iu = () => {
      if (!window.localStorage) return null;
      var e = window.localStorage.getItem(Eu);
      if (!e) return null;
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    };
  (N.supportsNativeHls = (function () {
    if (!document || !document.createElement) return !1;
    const t = document.createElement("video");
    return (
      !!T.getTech("Html5").isSupported() &&
      [
        "application/vnd.apple.mpegurl",
        "audio/mpegurl",
        "audio/x-mpegurl",
        "application/x-mpegurl",
        "video/x-mpegurl",
        "video/mpegurl",
        "application/mpegurl",
      ].some(function (e) {
        return /maybe|probably/i.test(t.canPlayType(e));
      })
    );
  })()),
    (N.supportsNativeDash =
      !!(
        document &&
        document.createElement &&
        T.getTech("Html5").isSupported()
      ) &&
      /maybe|probably/i.test(
        document.createElement("video").canPlayType("application/dash+xml")
      )),
    (N.supportsTypeNatively = (e) =>
      "hls" === e ? N.supportsNativeHls : "dash" === e && N.supportsNativeDash),
    (N.isSupported = function () {
      return T.log.warn(
        "VHS is no longer a tech. Please remove it from your player's techOrder."
      );
    });
  class xu extends T.getComponent("Component") {
    constructor(e, t, i) {
      if (
        (super(t, i.vhs),
        "number" == typeof i.initialBandwidth &&
          (this.options_.bandwidth = i.initialBandwidth),
        (this.logger_ = Ul("VhsHandler")),
        t.options_ &&
          t.options_.playerId &&
          ((i = T.getPlayer(t.options_.playerId)), (this.player_ = i)),
        (this.tech_ = t),
        (this.source_ = e),
        (this.stats = {}),
        (this.ignoreNextSeekingEvent_ = !1),
        this.setOptions_(),
        this.options_.overrideNative &&
          t.overrideNativeAudioTracks &&
          t.overrideNativeVideoTracks)
      )
        t.overrideNativeAudioTracks(!0), t.overrideNativeVideoTracks(!0);
      else if (
        this.options_.overrideNative &&
        (t.featuresNativeVideoTracks || t.featuresNativeAudioTracks)
      )
        throw new Error(
          "Overriding native VHS requires emulated tracks. See https://git.io/vMpjB"
        );
      this.on(
        document,
        [
          "fullscreenchange",
          "webkitfullscreenchange",
          "mozfullscreenchange",
          "MSFullscreenChange",
        ],
        (e) => {
          var t =
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement;
          t && t.contains(this.tech_.el())
            ? this.playlistController_.fastQualityChange_()
            : this.playlistController_.checkABR_();
        }
      ),
        this.on(this.tech_, "seeking", function () {
          this.ignoreNextSeekingEvent_
            ? (this.ignoreNextSeekingEvent_ = !1)
            : this.setCurrentTime(this.tech_.currentTime());
        }),
        this.on(this.tech_, "error", function () {
          this.tech_.error() &&
            this.playlistController_ &&
            this.playlistController_.pauseLoading();
        }),
        this.on(this.tech_, "play", this.play);
    }
    setOptions_() {
      var e;
      (this.options_.withCredentials = this.options_.withCredentials || !1),
        (this.options_.limitRenditionByPlayerDimensions =
          !1 !== this.options_.limitRenditionByPlayerDimensions),
        (this.options_.useDevicePixelRatio =
          this.options_.useDevicePixelRatio || !1),
        (this.options_.useBandwidthFromLocalStorage =
          "undefined" != typeof this.source_.useBandwidthFromLocalStorage
            ? this.source_.useBandwidthFromLocalStorage
            : this.options_.useBandwidthFromLocalStorage || !1),
        (this.options_.useNetworkInformationApi =
          this.options_.useNetworkInformationApi || !1),
        (this.options_.useDtsForTimestampOffset =
          this.options_.useDtsForTimestampOffset || !1),
        (this.options_.customTagParsers = this.options_.customTagParsers || []),
        (this.options_.customTagMappers = this.options_.customTagMappers || []),
        (this.options_.cacheEncryptionKeys =
          this.options_.cacheEncryptionKeys || !1),
        (this.options_.llhls = !1 !== this.options_.llhls),
        (this.options_.bufferBasedABR = this.options_.bufferBasedABR || !1),
        "number" != typeof this.options_.playlistExclusionDuration &&
          (this.options_.playlistExclusionDuration = 300),
        "number" != typeof this.options_.bandwidth &&
          this.options_.useBandwidthFromLocalStorage &&
          ((e = Iu()) &&
            e.bandwidth &&
            ((this.options_.bandwidth = e.bandwidth),
            this.tech_.trigger({
              type: "usage",
              name: "vhs-bandwidth-from-local-storage",
            })),
          e) &&
          e.throughput &&
          ((this.options_.throughput = e.throughput),
          this.tech_.trigger({
            type: "usage",
            name: "vhs-throughput-from-local-storage",
          })),
        "number" != typeof this.options_.bandwidth &&
          (this.options_.bandwidth = L.INITIAL_BANDWIDTH),
        (this.options_.enableLowInitialPlaylist =
          this.options_.enableLowInitialPlaylist &&
          this.options_.bandwidth === L.INITIAL_BANDWIDTH),
        [
          "withCredentials",
          "useDevicePixelRatio",
          "limitRenditionByPlayerDimensions",
          "bandwidth",
          "customTagParsers",
          "customTagMappers",
          "cacheEncryptionKeys",
          "playlistSelector",
          "initialPlaylistSelector",
          "bufferBasedABR",
          "liveRangeSafeTimeDelta",
          "llhls",
          "useNetworkInformationApi",
          "useDtsForTimestampOffset",
          "exactManifestTimings",
          "leastPixelDiffSelector",
        ].forEach((e) => {
          "undefined" != typeof this.source_[e] &&
            (this.options_[e] = this.source_[e]);
        }),
        (this.limitRenditionByPlayerDimensions =
          this.options_.limitRenditionByPlayerDimensions),
        (this.useDevicePixelRatio = this.options_.useDevicePixelRatio);
    }
    src(e, t) {
      e &&
        (this.setOptions_(),
        (this.options_.src =
          0 ===
          (e = this.source_.src)
            .toLowerCase()
            .indexOf("data:application/vnd.videojs.vhs+json,")
            ? JSON.parse(e.substring(e.indexOf(",") + 1))
            : e),
        (this.options_.tech = this.tech_),
        (this.options_.externVhs = N),
        (this.options_.sourceType = xn(t)),
        (this.options_.seekTo = (e) => {
          this.tech_.setCurrentTime(e);
        }),
        (this.playlistController_ = new yu(this.options_)),
        (e = D({ liveRangeSafeTimeDelta: Gl }, this.options_, {
          seekable: () => this.seekable(),
          media: () => this.playlistController_.media(),
          playlistController: this.playlistController_,
        })),
        (this.playbackWatcher_ = new bu(e)),
        this.playlistController_.on("error", () => {
          var e = T.players[this.tech_.options_.playerId];
          let t = this.playlistController_.error;
          "object" != typeof t || t.code
            ? "string" == typeof t && (t = { message: t, code: 3 })
            : (t.code = 3),
            e.error(t);
        }),
        (t = this.options_.bufferBasedABR
          ? N.movingAverageBandwidthSelector(0.55)
          : N.STANDARD_PLAYLIST_SELECTOR),
        (this.playlistController_.selectPlaylist = (
          this.selectPlaylist || t
        ).bind(this)),
        (this.playlistController_.selectInitialPlaylist =
          N.INITIAL_PLAYLIST_SELECTOR.bind(this)),
        (this.playlists = this.playlistController_.mainPlaylistLoader_),
        (this.mediaSource = this.playlistController_.mediaSource),
        Object.defineProperties(this, {
          selectPlaylist: {
            get() {
              return this.playlistController_.selectPlaylist;
            },
            set(e) {
              this.playlistController_.selectPlaylist = e.bind(this);
            },
          },
          throughput: {
            get() {
              return this.playlistController_.mainSegmentLoader_.throughput
                .rate;
            },
            set(e) {
              (this.playlistController_.mainSegmentLoader_.throughput.rate = e),
                (this.playlistController_.mainSegmentLoader_.throughput.count = 1);
            },
          },
          bandwidth: {
            get() {
              let e = this.playlistController_.mainSegmentLoader_.bandwidth;
              var t =
                window.navigator.connection ||
                window.navigator.mozConnection ||
                window.navigator.webkitConnection;
              return (
                this.options_.useNetworkInformationApi &&
                  t &&
                  ((t = 1e3 * t.downlink * 1e3),
                  (e = 1e7 <= t && 1e7 <= e ? Math.max(e, t) : t)),
                e
              );
            },
            set(e) {
              (this.playlistController_.mainSegmentLoader_.bandwidth = e),
                (this.playlistController_.mainSegmentLoader_.throughput = {
                  rate: 0,
                  count: 0,
                });
            },
          },
          systemBandwidth: {
            get() {
              var e = 1 / (this.bandwidth || 1);
              let t;
              return (
                (t = 0 < this.throughput ? 1 / this.throughput : 0),
                Math.floor(1 / (e + t))
              );
            },
            set() {
              T.log.error('The "systemBandwidth" property is read-only');
            },
          },
        }),
        this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth),
        this.options_.throughput &&
          (this.throughput = this.options_.throughput),
        Object.defineProperties(this.stats, {
          bandwidth: { get: () => this.bandwidth || 0, enumerable: !0 },
          mediaRequests: {
            get: () => this.playlistController_.mediaRequests_() || 0,
            enumerable: !0,
          },
          mediaRequestsAborted: {
            get: () => this.playlistController_.mediaRequestsAborted_() || 0,
            enumerable: !0,
          },
          mediaRequestsTimedout: {
            get: () => this.playlistController_.mediaRequestsTimedout_() || 0,
            enumerable: !0,
          },
          mediaRequestsErrored: {
            get: () => this.playlistController_.mediaRequestsErrored_() || 0,
            enumerable: !0,
          },
          mediaTransferDuration: {
            get: () => this.playlistController_.mediaTransferDuration_() || 0,
            enumerable: !0,
          },
          mediaBytesTransferred: {
            get: () => this.playlistController_.mediaBytesTransferred_() || 0,
            enumerable: !0,
          },
          mediaSecondsLoaded: {
            get: () => this.playlistController_.mediaSecondsLoaded_() || 0,
            enumerable: !0,
          },
          mediaAppends: {
            get: () => this.playlistController_.mediaAppends_() || 0,
            enumerable: !0,
          },
          mainAppendsToLoadedData: {
            get: () => this.playlistController_.mainAppendsToLoadedData_() || 0,
            enumerable: !0,
          },
          audioAppendsToLoadedData: {
            get: () =>
              this.playlistController_.audioAppendsToLoadedData_() || 0,
            enumerable: !0,
          },
          appendsToLoadedData: {
            get: () => this.playlistController_.appendsToLoadedData_() || 0,
            enumerable: !0,
          },
          timeToLoadedData: {
            get: () => this.playlistController_.timeToLoadedData_() || 0,
            enumerable: !0,
          },
          buffered: { get: () => Kl(this.tech_.buffered()), enumerable: !0 },
          currentTime: { get: () => this.tech_.currentTime(), enumerable: !0 },
          currentSource: {
            get: () => this.tech_.currentSource_,
            enumerable: !0,
          },
          currentTech: { get: () => this.tech_.name_, enumerable: !0 },
          duration: { get: () => this.tech_.duration(), enumerable: !0 },
          main: { get: () => this.playlists.main, enumerable: !0 },
          playerDimensions: {
            get: () => this.tech_.currentDimensions(),
            enumerable: !0,
          },
          seekable: { get: () => Kl(this.tech_.seekable()), enumerable: !0 },
          timestamp: { get: () => Date.now(), enumerable: !0 },
          videoPlaybackQuality: {
            get: () => this.tech_.getVideoPlaybackQuality(),
            enumerable: !0,
          },
        }),
        this.tech_.one(
          "canplay",
          this.playlistController_.setupFirstPlay.bind(this.playlistController_)
        ),
        this.tech_.on("bandwidthupdate", () => {
          if (this.options_.useBandwidthFromLocalStorage) {
            var e = {
              bandwidth: this.bandwidth,
              throughput: Math.round(this.throughput),
            };
            if (window.localStorage) {
              var t = (t = Iu()) ? D(t, e) : e;
              try {
                window.localStorage.setItem(Eu, JSON.stringify(t));
              } catch (e) {
                return;
              }
            }
          }
        }),
        this.playlistController_.on("selectedinitialmedia", () => {
          var i;
          (i = this).representations = () => {
            var e = i.playlistController_.main(),
              e = cd(e)
                ? i.playlistController_.getAudioTrackPlaylists_()
                : e.playlists;
            return e
              ? e.filter((e) => !ad(e)).map((e, t) => new _u(i, e, e.id))
              : [];
          };
        }),
        this.playlistController_.sourceUpdater_.on(
          "createdsourcebuffers",
          () => {
            this.setupEme_();
          }
        ),
        this.on(this.playlistController_, "progress", function () {
          this.tech_.trigger("progress");
        }),
        this.on(this.playlistController_, "firstplay", function () {
          this.ignoreNextSeekingEvent_ = !0;
        }),
        this.setupQualityLevels_(),
        this.tech_.el()) &&
        ((this.mediaSourceUrl_ = window.URL.createObjectURL(
          this.playlistController_.mediaSource
        )),
        this.tech_.src(this.mediaSourceUrl_));
    }
    createKeySessions_() {
      var e = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader;
      this.logger_("waiting for EME key session creation"),
        Cu({
          player: this.player_,
          sourceKeySystems: this.source_.keySystems,
          audioMedia: e && e.media(),
          mainPlaylists: this.playlists.main.playlists,
        })
          .then(() => {
            this.logger_("created EME key session"),
              this.playlistController_.sourceUpdater_.initializedEme();
          })
          .catch((e) => {
            this.logger_("error while creating EME key session", e),
              this.player_.error({
                message: "Failed to initialize media keys for EME",
                code: 3,
              });
          });
    }
    handleWaitingForKey_() {
      this.logger_(
        "waitingforkey fired, attempting to create any new key sessions"
      ),
        this.createKeySessions_();
    }
    setupEme_() {
      var e = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader,
        e = ku({
          player: this.player_,
          sourceKeySystems: this.source_.keySystems,
          media: this.playlists.media(),
          audioMedia: e && e.media(),
        });
      this.player_.tech_.on("keystatuschange", (e) => {
        if ("output-restricted" === e.status) {
          e = this.playlistController_.main();
          if (e && e.playlists) {
            const t = [];
            e.playlists.forEach((e) => {
              e &&
                e.attributes &&
                e.attributes.RESOLUTION &&
                720 <= e.attributes.RESOLUTION.height &&
                (!e.excludeUntil || e.excludeUntil < 1 / 0) &&
                ((e.excludeUntil = 1 / 0), t.push(e));
            }),
              t.length &&
                (T.log.warn(
                  'DRM keystatus changed to "output-restricted." Removing the following HD playlists that will most likely fail to play and clearing the buffer. This may be due to HDCP restrictions on the stream and the capabilities of the current device.',
                  ...t
                ),
                this.playlistController_.fastQualityChange_());
          }
        }
      }),
        (this.handleWaitingForKey_ = this.handleWaitingForKey_.bind(this)),
        this.player_.tech_.on("waitingforkey", this.handleWaitingForKey_),
        11 !== T.browser.IE_VERSION && e
          ? this.createKeySessions_()
          : this.playlistController_.sourceUpdater_.initializedEme();
    }
    setupQualityLevels_() {
      var e = T.players[this.tech_.options_.playerId];
      e &&
        e.qualityLevels &&
        !this.qualityLevels_ &&
        ((this.qualityLevels_ = e.qualityLevels()),
        this.playlistController_.on("selectedinitialmedia", () => {
          var t, e;
          (t = this.qualityLevels_),
            (e = this).representations().forEach((e) => {
              t.addQualityLevel(e);
            }),
            wu(t, e.playlists);
        }),
        this.playlists.on("mediachange", () => {
          wu(this.qualityLevels_, this.playlists);
        }));
    }
    static version() {
      return {
        "@videojs/http-streaming": "3.0.0",
        "mux.js": "6.2.0",
        "mpd-parser": "1.0.1",
        "m3u8-parser": "6.0.0",
        "aes-decrypter": "4.0.1",
      };
    }
    version() {
      return this.constructor.version();
    }
    canChangeType() {
      return Zh.canChangeType();
    }
    play() {
      this.playlistController_.play();
    }
    setCurrentTime(e) {
      this.playlistController_.setCurrentTime(e);
    }
    duration() {
      return this.playlistController_.duration();
    }
    seekable() {
      return this.playlistController_.seekable();
    }
    dispose() {
      this.playbackWatcher_ && this.playbackWatcher_.dispose(),
        this.playlistController_ && this.playlistController_.dispose(),
        this.qualityLevels_ && this.qualityLevels_.dispose(),
        this.tech_ && this.tech_.vhs && delete this.tech_.vhs,
        this.mediaSourceUrl_ &&
          window.URL.revokeObjectURL &&
          (window.URL.revokeObjectURL(this.mediaSourceUrl_),
          (this.mediaSourceUrl_ = null)),
        this.tech_ &&
          this.tech_.off("waitingforkey", this.handleWaitingForKey_),
        super.dispose();
    }
    convertToProgramTime(e, t) {
      return Bd({
        playlist: this.playlistController_.media(),
        time: e,
        callback: t,
      });
    }
    seekToProgramTime(e, t, i = !0, s = 2) {
      return Fd({
        programTime: e,
        playlist: this.playlistController_.media(),
        retryCount: s,
        pauseAfterSeek: i,
        seekTo: this.options_.seekTo,
        tech: this.options_.tech,
        callback: t,
      });
    }
  }
  const Au = {
    name: "videojs-http-streaming",
    VERSION: "3.0.0",
    canHandleSource(e, t = {}) {
      t = D(T.options, t);
      return Au.canPlayType(e.type, t);
    },
    handleSource(e, t, i = {}) {
      i = D(T.options, i);
      return (
        (t.vhs = new xu(e, t, i)),
        (t.vhs.xhr = Id()),
        t.vhs.src(e.src, e.type),
        t.vhs
      );
    },
    canPlayType(e, t = {}) {
      var { vhs: { overrideNative: t = !T.browser.IS_ANY_SAFARI } = {} } = D(
          T.options,
          t
        ),
        e = xn(e);
      return e && (!N.supportsTypeNatively(e) || t) ? "maybe" : "";
    },
  };
  return (
    kn("avc1.4d400d,mp4a.40.2") &&
      T.getTech("Html5").registerSourceHandler(Au, 0),
    (T.VhsHandler = xu),
    (T.VhsSourceHandler = Au),
    (T.Vhs = N),
    T.use || T.registerComponent("Vhs", N),
    (T.options.vhs = T.options.vhs || {}),
    (T.getPlugin && T.getPlugin("reloadSourceOnError")) ||
      T.registerPlugin("reloadSourceOnError", function (e) {
        Su(this, e);
      }),
    T
  );
});
