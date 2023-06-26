import Ce, { useState as fr, useEffect as Oe } from "react";
var Z = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function lr() {
  if (Te)
    return A;
  Te = 1;
  var v = Ce, u = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, R = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(E, c, h) {
    var p, S = {}, O = null, L = null;
    h !== void 0 && (O = "" + h), c.key !== void 0 && (O = "" + c.key), c.ref !== void 0 && (L = c.ref);
    for (p in c)
      b.call(c, p) && !C.hasOwnProperty(p) && (S[p] = c[p]);
    if (E && E.defaultProps)
      for (p in c = E.defaultProps, c)
        S[p] === void 0 && (S[p] = c[p]);
    return { $$typeof: u, type: E, key: O, ref: L, props: S, _owner: R.current };
  }
  return A.Fragment = _, A.jsx = f, A.jsxs = f, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function cr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Ce, u = Symbol.for("react.element"), _ = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), E = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), Q = Symbol.iterator, Pe = "@@iterator";
    function xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var x = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = !1, Fe = !1, De = !1, Ae = !1, Ie = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === C || Ie || e === R || e === h || e === p || Ae || e === L || ke || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === S || e.$$typeof === f || e.$$typeof === E || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case _:
          return "Portal";
        case C:
          return "Profiler";
        case R:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return re(r) + ".Consumer";
          case f:
            var t = e;
            return re(t._context) + ".Provider";
          case c:
            return $e(e, e.render, "ForwardRef");
          case S:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case O: {
            var i = e, s = i._payload, o = i._init;
            try {
              return T(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, F = 0, te, ne, ae, oe, ie, ue, se;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function We() {
      {
        if (F === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ye() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: te
            }),
            info: P({}, e, {
              value: ne
            }),
            warn: P({}, e, {
              value: ae
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: ie
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: se
            })
          });
        }
        F < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = x.ReactCurrentDispatcher, M;
    function $(e, r, t) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            M = n && n[1] || "";
          }
        return `
` + M + e;
      }
    }
    var B = !1, W;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Ne();
    }
    function le(e, r) {
      if (!e || B)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = V.current, V.current = null, We();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (w) {
              n = w;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (w) {
              n = w;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            n = w;
          }
          e();
        }
      } catch (w) {
        if (w && n && typeof w.stack == "string") {
          for (var a = w.stack.split(`
`), g = n.stack.split(`
`), l = a.length - 1, d = g.length - 1; l >= 1 && d >= 0 && a[l] !== g[d]; )
            d--;
          for (; l >= 1 && d >= 0; l--, d--)
            if (a[l] !== g[d]) {
              if (l !== 1 || d !== 1)
                do
                  if (l--, d--, d < 0 || a[l] !== g[d]) {
                    var y = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, y), y;
                  }
                while (l >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        B = !1, V.current = s, Ye(), Error.prepareStackTrace = i;
      }
      var k = e ? e.displayName || e.name : "", Se = k ? $(k) : "";
      return typeof e == "function" && W.set(e, Se), Se;
    }
    function Ue(e, r, t) {
      return le(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ve(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case h:
          return $("Suspense");
        case p:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ue(e.render);
          case S:
            return Y(e.type, r, t);
          case O: {
            var n = e, i = n._payload, s = n._init;
            try {
              return Y(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, ce = {}, de = x.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, i) {
      {
        var s = Function.call.bind(N);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (U(i), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, U(i), m("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Be = Array.isArray;
    function G(e) {
      return Be(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (qe(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ve(e);
    }
    var D = x.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ge, q;
    q = {};
    function ze(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = T(D.current.type);
        q[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(D.current.type), e.ref), q[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          me || (me = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ge || (ge = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, i) {
      {
        var s, o = {}, a = null, g = null;
        t !== void 0 && (pe(t), a = "" + t), Ke(r) && (pe(r.key), a = "" + r.key), ze(r) && (g = r.ref, He(r, i));
        for (s in r)
          N.call(r, s) && !Je.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            o[s] === void 0 && (o[s] = l[s]);
        }
        if (a || g) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(o, d), g && Ze(o, d);
        }
        return Qe(e, a, g, i, n, D.current, o);
      }
    }
    var J = x.ReactCurrentOwner, Ee = x.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function ye() {
      {
        if (J.current) {
          var e = T(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var he = {};
    function tr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (he[t])
          return;
        he[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + T(e._owner.type) + "."), j(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && be(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = xe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              K(o.value) && be(o.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === S))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var i = T(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Re(e, r, t, n, i, s) {
      {
        var o = Le(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = rr(i);
          g ? a += g : a += ye();
          var l;
          e === null ? l = "null" : G(e) ? l = "array" : e !== void 0 && e.$$typeof === u ? (l = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var d = er(e, r, t, i, s);
        if (d == null)
          return d;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (G(y)) {
                for (var k = 0; k < y.length; k++)
                  _e(y[k], e);
                Object.freeze && Object.freeze(y);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(y, e);
        }
        return e === b ? ar(d) : nr(d), d;
      }
    }
    function or(e, r, t) {
      return Re(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Re(e, r, t, !1);
    }
    var ur = ir, sr = or;
    I.Fragment = b, I.jsx = ur, I.jsxs = sr;
  }()), I;
}
process.env.NODE_ENV === "production" ? Z.exports = lr() : Z.exports = cr();
var H = Z.exports;
const X = {};
function dr(v) {
  const u = document.querySelector(
    `script[src="${v}"]`
  ), _ = u == null ? void 0 : u.getAttribute("data-status");
  return {
    node: u,
    status: _
  };
}
function vr(v, u) {
  const [_, b] = fr(() => !v || u != null && u.shouldPreventLoad ? "idle" : typeof window > "u" ? "loading" : X[v] ?? "loading");
  return Oe(() => {
    if (!v || u != null && u.shouldPreventLoad)
      return;
    const R = X[v];
    if (R === "ready" || R === "error") {
      b(R);
      return;
    }
    const C = dr(v);
    let f = C.node;
    if (f)
      b(C.status ?? R ?? "loading");
    else {
      f = document.createElement("script"), f.src = v, f.async = !0, f.setAttribute("data-status", "loading"), document.body.appendChild(f);
      const c = (h) => {
        const p = h.type === "load" ? "ready" : "error";
        f == null || f.setAttribute("data-status", p);
      };
      f.addEventListener("load", c), f.addEventListener("error", c);
    }
    const E = (c) => {
      const h = c.type === "load" ? "ready" : "error";
      b(h), X[v] = h;
    };
    return f.addEventListener("load", E), f.addEventListener("error", E), () => {
      f && (f.removeEventListener("load", E), f.removeEventListener("error", E)), f && (u != null && u.removeOnUnmount) && f.remove();
    };
  }, [v, u == null ? void 0 : u.shouldPreventLoad, u == null ? void 0 : u.removeOnUnmount]), _;
}
const pr = "https://cdn.customgform.com/cgf.js", gr = (v) => {
  const {
    formId: u,
    ..._
  } = v;
  return vr(pr, {
    removeOnUnmount: !1
  }), Oe(() => {
    typeof window.CustomGForm < "u" && (window.CustomGForm.destroy(), window.CustomGForm.render());
  }, [status]), /* @__PURE__ */ H.jsx(H.Fragment, { children: /* @__PURE__ */ H.jsx("div", { "data-customgform": u, ..._ }) });
};
export {
  gr as CustomGForm
};
