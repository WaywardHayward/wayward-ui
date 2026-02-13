import pe, { forwardRef as F, useState as W, useEffect as Xe, useRef as ge } from "react";
var re = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Ct() {
  if (Ve) return U;
  Ve = 1;
  var r = pe, s = Symbol.for("react.element"), a = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(c, d, b) {
    var h, x = {}, f = null, N = null;
    b !== void 0 && (f = "" + b), d.key !== void 0 && (f = "" + d.key), d.ref !== void 0 && (N = d.ref);
    for (h in d) l.call(d, h) && !i.hasOwnProperty(h) && (x[h] = d[h]);
    if (c && c.defaultProps) for (h in d = c.defaultProps, d) x[h] === void 0 && (x[h] = d[h]);
    return { $$typeof: s, type: c, key: f, ref: N, props: x, _owner: n.current };
  }
  return U.Fragment = a, U.jsx = o, U.jsxs = o, U;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Et() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = pe, s = Symbol.for("react.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), L = Symbol.iterator, y = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = L && t[L] || t[y];
      return typeof u == "function" ? u : null;
    }
    var O = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(t) {
      {
        for (var u = arguments.length, m = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          m[g - 1] = arguments[g];
        Y("error", t, m);
      }
    }
    function Y(t, u, m) {
      {
        var g = O.ReactDebugCurrentFrame, k = g.getStackAddendum();
        k !== "" && (u += "%s", m = m.concat([k]));
        var j = m.map(function(v) {
          return String(v);
        });
        j.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, j);
      }
    }
    var A = !1, le = !1, oe = !1, B = !1, G = !1, J;
    J = Symbol.for("react.module.reference");
    function ne(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === l || t === i || G || t === n || t === b || t === h || B || t === N || A || le || oe || typeof t == "object" && t !== null && (t.$$typeof === f || t.$$typeof === x || t.$$typeof === o || t.$$typeof === c || t.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === J || t.getModuleId !== void 0));
    }
    function K(t, u, m) {
      var g = t.displayName;
      if (g)
        return g;
      var k = u.displayName || u.name || "";
      return k !== "" ? m + "(" + k + ")" : m;
    }
    function X(t) {
      return t.displayName || "Context";
    }
    function z(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case l:
          return "Fragment";
        case a:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case b:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            var u = t;
            return X(u) + ".Consumer";
          case o:
            var m = t;
            return X(m._context) + ".Provider";
          case d:
            return K(t, t.render, "ForwardRef");
          case x:
            var g = t.displayName || null;
            return g !== null ? g : z(t.type) || "Memo";
          case f: {
            var k = t, j = k._payload, v = k._init;
            try {
              return z(v(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, C = 0, ve, ke, we, je, ye, Ne, $e;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Qe() {
      {
        if (C === 0) {
          ve = console.log, ke = console.info, we = console.warn, je = console.error, ye = console.group, Ne = console.groupCollapsed, $e = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        C++;
      }
    }
    function et() {
      {
        if (C--, C === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, t, {
              value: ve
            }),
            info: w({}, t, {
              value: ke
            }),
            warn: w({}, t, {
              value: we
            }),
            error: w({}, t, {
              value: je
            }),
            group: w({}, t, {
              value: ye
            }),
            groupCollapsed: w({}, t, {
              value: Ne
            }),
            groupEnd: w({}, t, {
              value: $e
            })
          });
        }
        C < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = O.ReactCurrentDispatcher, ie;
    function Z(t, u, m) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (k) {
            var g = k.stack.trim().match(/\n( *(at )?)/);
            ie = g && g[1] || "";
          }
        return `
` + ie + t;
      }
    }
    var ce = !1, Q;
    {
      var tt = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new tt();
    }
    function Ee(t, u) {
      if (!t || ce)
        return "";
      {
        var m = Q.get(t);
        if (m !== void 0)
          return m;
      }
      var g;
      ce = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = de.current, de.current = null, Qe();
      try {
        if (u) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (T) {
              g = T;
            }
            Reflect.construct(t, [], v);
          } else {
            try {
              v.call();
            } catch (T) {
              g = T;
            }
            t.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            g = T;
          }
          t();
        }
      } catch (T) {
        if (T && g && typeof T.stack == "string") {
          for (var p = T.stack.split(`
`), _ = g.stack.split(`
`), E = p.length - 1, S = _.length - 1; E >= 1 && S >= 0 && p[E] !== _[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (p[E] !== _[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || p[E] !== _[S]) {
                    var M = `
` + p[E].replace(" at new ", " at ");
                    return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), typeof t == "function" && Q.set(t, M), M;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ce = !1, de.current = j, et(), Error.prepareStackTrace = k;
      }
      var V = t ? t.displayName || t.name : "", D = V ? Z(V) : "";
      return typeof t == "function" && Q.set(t, D), D;
    }
    function rt(t, u, m) {
      return Ee(t, !1);
    }
    function st(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function ee(t, u, m) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ee(t, st(t));
      if (typeof t == "string")
        return Z(t);
      switch (t) {
        case b:
          return Z("Suspense");
        case h:
          return Z("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            return rt(t.render);
          case x:
            return ee(t.type, u, m);
          case f: {
            var g = t, k = g._payload, j = g._init;
            try {
              return ee(j(k), u, m);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Le = {}, Se = O.ReactDebugCurrentFrame;
    function te(t) {
      if (t) {
        var u = t._owner, m = ee(t.type, t._source, u ? u.type : null);
        Se.setExtraStackFrame(m);
      } else
        Se.setExtraStackFrame(null);
    }
    function at(t, u, m, g, k) {
      {
        var j = Function.call.bind(H);
        for (var v in t)
          if (j(t, v)) {
            var p = void 0;
            try {
              if (typeof t[v] != "function") {
                var _ = Error((g || "React class") + ": " + m + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              p = t[v](u, v, g, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              p = E;
            }
            p && !(p instanceof Error) && (te(k), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", m, v, typeof p), te(null)), p instanceof Error && !(p.message in Le) && (Le[p.message] = !0, te(k), $("Failed %s type: %s", m, p.message), te(null));
          }
      }
    }
    var lt = Array.isArray;
    function ue(t) {
      return lt(t);
    }
    function ot(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, m = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return m;
      }
    }
    function nt(t) {
      try {
        return Re(t), !1;
      } catch {
        return !0;
      }
    }
    function Re(t) {
      return "" + t;
    }
    function _e(t) {
      if (nt(t))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ot(t)), Re(t);
    }
    var Te = O.ReactCurrentOwner, dt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, ze;
    function it(t) {
      if (H.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function ct(t) {
      if (H.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function ut(t, u) {
      typeof t.ref == "string" && Te.current;
    }
    function xt(t, u) {
      {
        var m = function() {
          Me || (Me = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        m.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function mt(t, u) {
      {
        var m = function() {
          ze || (ze = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        m.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var bt = function(t, u, m, g, k, j, v) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: m,
        props: v,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function ht(t, u, m, g, k) {
      {
        var j, v = {}, p = null, _ = null;
        m !== void 0 && (_e(m), p = "" + m), ct(u) && (_e(u.key), p = "" + u.key), it(u) && (_ = u.ref, ut(u, k));
        for (j in u)
          H.call(u, j) && !dt.hasOwnProperty(j) && (v[j] = u[j]);
        if (t && t.defaultProps) {
          var E = t.defaultProps;
          for (j in E)
            v[j] === void 0 && (v[j] = E[j]);
        }
        if (p || _) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          p && xt(v, S), _ && mt(v, S);
        }
        return bt(t, p, _, k, g, Te.current, v);
      }
    }
    var xe = O.ReactCurrentOwner, Oe = O.ReactDebugCurrentFrame;
    function I(t) {
      if (t) {
        var u = t._owner, m = ee(t.type, t._source, u ? u.type : null);
        Oe.setExtraStackFrame(m);
      } else
        Oe.setExtraStackFrame(null);
    }
    var me;
    me = !1;
    function be(t) {
      return typeof t == "object" && t !== null && t.$$typeof === s;
    }
    function Ae() {
      {
        if (xe.current) {
          var t = z(xe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function gt(t) {
      return "";
    }
    var Pe = {};
    function ft(t) {
      {
        var u = Ae();
        if (!u) {
          var m = typeof t == "string" ? t : t.displayName || t.name;
          m && (u = `

Check the top-level render call using <` + m + ">.");
        }
        return u;
      }
    }
    function Be(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var m = ft(u);
        if (Pe[m])
          return;
        Pe[m] = !0;
        var g = "";
        t && t._owner && t._owner !== xe.current && (g = " It was passed a child from " + z(t._owner.type) + "."), I(t), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, g), I(null);
      }
    }
    function De(t, u) {
      {
        if (typeof t != "object")
          return;
        if (ue(t))
          for (var m = 0; m < t.length; m++) {
            var g = t[m];
            be(g) && Be(g, u);
          }
        else if (be(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var k = R(t);
          if (typeof k == "function" && k !== t.entries)
            for (var j = k.call(t), v; !(v = j.next()).done; )
              be(v.value) && Be(v.value, u);
        }
      }
    }
    function pt(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var m;
        if (typeof u == "function")
          m = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === x))
          m = u.propTypes;
        else
          return;
        if (m) {
          var g = z(u);
          at(m, t.props, "prop", g, t);
        } else if (u.PropTypes !== void 0 && !me) {
          me = !0;
          var k = z(u);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vt(t) {
      {
        for (var u = Object.keys(t.props), m = 0; m < u.length; m++) {
          var g = u[m];
          if (g !== "children" && g !== "key") {
            I(t), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), I(null);
            break;
          }
        }
        t.ref !== null && (I(t), $("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var We = {};
    function Ie(t, u, m, g, k, j) {
      {
        var v = ne(t);
        if (!v) {
          var p = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = gt();
          _ ? p += _ : p += Ae();
          var E;
          t === null ? E = "null" : ue(t) ? E = "array" : t !== void 0 && t.$$typeof === s ? (E = "<" + (z(t.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : E = typeof t, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, p);
        }
        var S = ht(t, u, m, k, j);
        if (S == null)
          return S;
        if (v) {
          var M = u.children;
          if (M !== void 0)
            if (g)
              if (ue(M)) {
                for (var V = 0; V < M.length; V++)
                  De(M[V], t);
                Object.freeze && Object.freeze(M);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(M, t);
        }
        if (H.call(u, "key")) {
          var D = z(t), T = Object.keys(u).filter(function($t) {
            return $t !== "key";
          }), he = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[D + he]) {
            var Nt = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, D, Nt, D), We[D + he] = !0;
          }
        }
        return t === l ? vt(S) : pt(S), S;
      }
    }
    function kt(t, u, m) {
      return Ie(t, u, m, !0);
    }
    function wt(t, u, m) {
      return Ie(t, u, m, !1);
    }
    var jt = wt, yt = kt;
    q.Fragment = l, q.jsx = jt, q.jsxs = yt;
  })()), q;
}
var Ye;
function Lt() {
  return Ye || (Ye = 1, process.env.NODE_ENV === "production" ? re.exports = Ct() : re.exports = Et()), re.exports;
}
var e = Lt();
const St = {
  sm: "max-w-sm",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full"
}, Rt = {
  none: "",
  sm: "px-4 sm:px-6",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-6 sm:px-8 lg:px-12"
};
function Ur({
  children: r,
  size: s = "md",
  padding: a = "md",
  className: l = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      mx-auto
      ${St[s]}
      ${Rt[a]}
      ${l}
    `.trim(),
      children: r
    }
  );
}
const _t = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse"
}, Tt = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, Mt = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
}, zt = {
  none: "",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6"
};
function qr({
  children: r,
  direction: s = "row",
  justify: a = "start",
  align: l = "start",
  wrap: n = !1,
  gap: i = "md",
  className: o = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      flex
      ${_t[s]}
      ${Tt[a]}
      ${Mt[l]}
      ${n ? "flex-wrap" : ""}
      ${zt[i]}
      ${o}
    `.trim(),
      children: r
    }
  );
}
const Ot = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12"
}, At = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12"
}, Pt = {
  none: "gap-0",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8"
};
function Gr({
  children: r,
  cols: s = 1,
  gap: a = "md",
  responsive: l = !0,
  className: n = ""
}) {
  const i = l ? At[s] : Ot[s];
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      grid
      ${i}
      ${Pt[a]}
      ${n}
    `.trim(),
      children: r
    }
  );
}
const Bt = {
  default: "bg-white dark:bg-gray-800",
  card: "bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700",
  hero: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
  sidebar: "bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700"
}, Dt = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-12"
};
function Jr({
  children: r,
  variant: s = "default",
  spacing: a = "md",
  className: l = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "section",
    {
      className: `
      ${Bt[s]}
      ${Dt[a]}
      ${l}
    `.trim(),
      children: r
    }
  );
}
const Wt = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, It = {
  circle: "rounded-full",
  square: "rounded-lg"
};
function Kr({
  src: r,
  alt: s = "",
  initials: a,
  size: l = "md",
  variant: n = "circle",
  className: i = ""
}) {
  const [o, c] = pe.useState(!1), d = a || s.split(" ").map((h) => h[0]).join("").toUpperCase().slice(0, 2), b = !r || o;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      inline-flex items-center justify-center
      bg-gray-200 dark:bg-gray-700
      text-gray-700 dark:text-gray-300
      font-medium
      overflow-hidden
      ${Wt[l]}
      ${It[n]}
      ${i}
    `.trim(),
      children: b ? /* @__PURE__ */ e.jsx("span", { children: d }) : /* @__PURE__ */ e.jsx(
        "img",
        {
          src: r,
          alt: s,
          className: "w-full h-full object-cover",
          onError: () => c(!0)
        }
      )
    }
  );
}
const He = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10"
}, Ue = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Xr = ({
  users: r,
  maxVisible: s = 3,
  size: a = "sm",
  className: l = ""
}) => {
  if (r.length === 0) return null;
  const n = r.slice(0, s), i = r.length - s;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex -space-x-1 ${l}`, children: [
    n.map((o) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${He[a]} rounded-full border-2 border-white dark:border-slate-800 overflow-hidden`,
        title: o.name,
        children: o.avatar ? /* @__PURE__ */ e.jsx("img", { src: o.avatar, alt: o.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ e.jsx("div", { className: `w-full h-full bg-blue-500 flex items-center justify-center ${Ue[a]} text-white font-medium`, children: o.name.charAt(0).toUpperCase() })
      },
      o.id
    )),
    i > 0 && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${He[a]} rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center`,
        children: /* @__PURE__ */ e.jsxs("span", { className: `${Ue[a]} font-medium text-slate-600 dark:text-slate-300`, children: [
          "+",
          i
        ] })
      }
    )
  ] });
}, Vt = {
  default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  achievement: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm"
}, Ft = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base"
};
function Zr({
  children: r,
  variant: s = "default",
  size: a = "md",
  icon: l,
  className: n = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "span",
    {
      className: `
      inline-flex items-center
      font-medium rounded-full
      ${Vt[s]}
      ${Ft[a]}
      ${n}
    `.trim(),
      children: [
        l && /* @__PURE__ */ e.jsx("span", { className: "mr-1 w-3 h-3", children: l }),
        r
      ]
    }
  );
}
const Yt = {
  primary: [
    "bg-blue-600 hover:bg-blue-500 active:bg-blue-700",
    "text-white font-medium",
    "shadow-md shadow-blue-900/20",
    "hover:shadow-lg hover:shadow-blue-900/30",
    "disabled:bg-slate-600 disabled:text-slate-400 disabled:shadow-none"
  ].join(" "),
  secondary: [
    "bg-slate-800 hover:bg-slate-700 active:bg-slate-800",
    "border border-slate-600 hover:border-slate-500",
    "text-slate-200",
    "disabled:bg-slate-800 disabled:text-slate-500 disabled:border-slate-700"
  ].join(" "),
  ghost: [
    "text-slate-400 hover:text-white",
    "hover:bg-slate-800/50",
    "disabled:text-slate-600 disabled:bg-transparent"
  ].join(" "),
  danger: [
    "bg-red-600 hover:bg-red-500 active:bg-red-700",
    "text-white font-medium",
    "shadow-md shadow-red-900/20",
    "hover:shadow-lg hover:shadow-red-900/30",
    "disabled:bg-slate-600 disabled:text-slate-400 disabled:shadow-none"
  ].join(" "),
  success: [
    "bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700",
    "text-white font-medium",
    "shadow-md shadow-emerald-900/20",
    "hover:shadow-lg hover:shadow-emerald-900/30",
    "disabled:bg-slate-600 disabled:text-slate-400 disabled:shadow-none"
  ].join(" "),
  // Glow variant - for CTAs with blue hover glow
  glow: [
    "bg-blue-600 hover:bg-blue-500 active:bg-blue-700",
    "text-white font-medium",
    "shadow-md",
    "hover:shadow-glow-blue",
    "disabled:bg-slate-600 disabled:text-slate-400 disabled:shadow-none"
  ].join(" "),
  // Amber glow variant
  "glow-amber": [
    "bg-amber-600 hover:bg-amber-500 active:bg-amber-700",
    "text-white font-medium",
    "shadow-md",
    "hover:shadow-glow-amber",
    "disabled:bg-slate-600 disabled:text-slate-400 disabled:shadow-none"
  ].join(" ")
}, qe = {
  primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
  danger: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600",
  success: "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600",
  glow: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
  "glow-amber": "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500"
}, Ht = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg"
};
function Ut({
  children: r,
  variant: s = "primary",
  size: a = "md",
  type: l = "button",
  onClick: n,
  disabled: i = !1,
  loading: o = !1,
  icon: c,
  iconPosition: d = "left",
  fullWidth: b = !1,
  className: h = "",
  gradient: x = !1
}) {
  const f = i || o, N = s in qe, L = x && N ? qe[s] : "";
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: l,
      onClick: n,
      disabled: f,
      className: `
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
        disabled:cursor-not-allowed
        ${Yt[s]}
        ${L}
        ${Ht[a]}
        ${b ? "w-full" : ""}
        ${h}
      `.trim().replace(/\s+/g, " "),
      children: [
        o && /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: "animate-spin -ml-1 mr-2 h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ e.jsx(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }
              )
            ]
          }
        ),
        !o && c && d === "left" && /* @__PURE__ */ e.jsx("span", { className: "mr-2 w-4 h-4 flex items-center justify-center", children: c }),
        r,
        !o && c && d === "right" && /* @__PURE__ */ e.jsx("span", { className: "ml-2 w-4 h-4 flex items-center justify-center", children: c })
      ]
    }
  );
}
function Qr({
  children: r,
  className: s = "",
  padding: a = "md",
  variant: l = "default",
  header: n,
  footer: i,
  onClick: o,
  glow: c = "none"
}) {
  const d = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }, b = {
    default: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm",
    outlined: "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600",
    elevated: "bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700",
    interactive: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-blue-500/30",
    // Enhanced glass with stronger blur and subtle border glow
    glass: [
      "bg-slate-900/60 backdrop-blur-xl",
      "border border-white/10",
      "shadow-lg shadow-black/20",
      "hover:bg-slate-900/70 hover:border-white/15",
      "transition-all duration-300"
    ].join(" "),
    // New gradient variant with premium depth
    gradient: [
      "bg-gradient-to-b from-slate-800/80 to-slate-900/95",
      "backdrop-blur-xl",
      "border border-slate-700/50",
      "shadow-surface-md",
      "hover:shadow-surface-lg hover:border-slate-600/50",
      "transition-all duration-300"
    ].join(" "),
    // Cockpit panel style - instrument-like appearance
    cockpit: [
      "bg-gradient-to-b from-slate-800/90 to-slate-900/95",
      "backdrop-blur-2xl",
      "border border-slate-700/60",
      "shadow-surface-lg",
      "relative"
    ].join(" ")
  }, h = {
    none: "",
    blue: "border-blue-500/20 shadow-glow-blue-sm hover:shadow-glow-blue",
    amber: "border-amber-500/20 shadow-glow-amber-sm hover:shadow-glow-amber"
  }, x = l === "cockpit" ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute inset-0 rounded-xl pointer-events-none",
      style: {
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.2)"
      }
    }
  ) : null, f = o ? "button" : "div";
  return /* @__PURE__ */ e.jsxs(
    f,
    {
      className: `
        rounded-xl relative
        ${b[l]} 
        ${c !== "none" ? h[c] : ""}
        ${s}
      `.trim().replace(/\s+/g, " "),
      onClick: o,
      children: [
        x,
        n && /* @__PURE__ */ e.jsx("div", { className: "px-6 py-4 border-b border-slate-200 dark:border-slate-700/50", children: n }),
        /* @__PURE__ */ e.jsx("div", { className: `${d[a]} relative z-10`, children: r }),
        i && /* @__PURE__ */ e.jsx("div", { className: "px-6 py-4 border-t border-slate-200 dark:border-slate-700/50", children: i })
      ]
    }
  );
}
const qt = {
  sm: "p-1.5 [&>svg]:w-4 [&>svg]:h-4",
  md: "p-2 [&>svg]:w-5 [&>svg]:h-5",
  lg: "p-3 [&>svg]:w-6 [&>svg]:h-6"
}, Gt = {
  default: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300",
  active: "text-blue-600 dark:text-blue-400"
};
function es({
  icon: r,
  onClick: s,
  label: a,
  size: l = "md",
  variant: n = "default",
  className: i = "",
  disabled: o = !1
}) {
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: s,
      disabled: o,
      "aria-label": a,
      className: `transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed ${qt[l]} ${Gt[n]} ${i}`,
      children: r
    }
  );
}
const ts = ({
  variant: r = "card",
  count: s = 3,
  className: a = ""
}) => {
  const l = () => /* @__PURE__ */ e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-6 animate-pulse", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-2" }),
        /* @__PURE__ */ e.jsx("div", { className: "h-3 bg-slate-200 dark:bg-slate-700 rounded w-20" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "h-20 bg-slate-200 dark:bg-slate-700 rounded mb-4" }),
    /* @__PURE__ */ e.jsx("div", { className: "h-32 bg-slate-200 dark:bg-slate-700 rounded" })
  ] }), n = () => /* @__PURE__ */ e.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-lg p-4 animate-pulse", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2" }),
      /* @__PURE__ */ e.jsx("div", { className: "h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2" })
    ] })
  ] }) }), i = () => /* @__PURE__ */ e.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-lg p-6 animate-pulse", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full mb-4" }),
    /* @__PURE__ */ e.jsx("div", { className: "h-5 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-2" }),
    /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-24" })
  ] }) }), o = () => {
    switch (r) {
      case "card":
        return l();
      case "list":
        return n();
      case "profile":
        return i();
      default:
        return l();
    }
  };
  return /* @__PURE__ */ e.jsx("div", { className: `space-y-4 ${a}`, children: Array.from({ length: s }).map((c, d) => /* @__PURE__ */ e.jsx("div", { children: o() }, d)) });
}, Jt = {
  blue: "from-blue-400 via-blue-500 to-blue-600",
  amber: "from-amber-400 via-orange-500 to-amber-600",
  green: "from-emerald-400 via-green-500 to-emerald-600",
  red: "from-red-400 via-rose-500 to-red-600",
  white: "from-white via-slate-100 to-white"
}, Kt = {
  blue: "shadow-glow-blue-sm",
  amber: "shadow-glow-amber-sm",
  green: "shadow-glow-green",
  red: "shadow-glow-red",
  white: ""
}, Xt = {
  blue: "text-blue-400",
  amber: "text-amber-400",
  green: "text-emerald-400",
  red: "text-red-400",
  white: "text-slate-300"
}, Zt = {
  sm: {
    value: "text-2xl",
    label: "text-xs",
    icon: "w-4 h-4",
    padding: "p-4",
    unit: "text-lg"
  },
  md: {
    value: "text-4xl",
    label: "text-sm",
    icon: "w-5 h-5",
    padding: "p-6",
    unit: "text-2xl"
  },
  lg: {
    value: "text-6xl",
    label: "text-base",
    icon: "w-6 h-6",
    padding: "p-8",
    unit: "text-3xl"
  }
}, Qt = {
  up: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 10l7-7m0 0l7 7m-7-7v18" }) }),
  down: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }),
  neutral: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h14" }) })
};
function rs({
  value: r,
  label: s,
  icon: a,
  color: l = "blue",
  size: n = "md",
  trend: i,
  unit: o,
  className: c = "",
  onClick: d
}) {
  const b = Zt[n], h = d ? "button" : "div";
  return /* @__PURE__ */ e.jsxs(
    h,
    {
      onClick: d,
      className: `
        bg-gradient-to-b from-slate-800/80 to-slate-900/95
        backdrop-blur-xl
        border border-slate-700/50
        rounded-xl
        ${b.padding}
        ${d ? "cursor-pointer hover:border-slate-600/70 hover:shadow-surface-lg" : ""}
        transition-all duration-300
        ${Kt[l]}
        ${c}
      `.trim().replace(/\s+/g, " "),
      children: [
        a && /* @__PURE__ */ e.jsx("div", { className: `${Xt[l]} ${b.icon} mb-3`, children: a }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `
            ${b.value}
            font-bold
            tracking-tight
            bg-gradient-to-r ${Jt[l]}
            bg-clip-text text-transparent
          `.trim().replace(/\s+/g, " "),
              children: r
            }
          ),
          o && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `
              ${b.unit}
              font-semibold
              text-slate-400
            `,
              children: o
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 uppercase tracking-wider font-medium ${sizes.label}", children: s }),
          i && /* @__PURE__ */ e.jsxs(
            "span",
            {
              className: `
              flex items-center gap-1
              text-sm font-medium
              ${i.direction === "up" ? "text-emerald-400" : ""}
              ${i.direction === "down" ? "text-red-400" : ""}
              ${i.direction === "neutral" ? "text-slate-400" : ""}
            `,
              children: [
                Qt[i.direction],
                i.value
              ]
            }
          )
        ] })
      ]
    }
  );
}
const er = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12"
}, tr = {
  primary: "text-blue-600",
  secondary: "text-gray-600",
  white: "text-white"
};
function rr({
  size: r = "md",
  variant: s = "primary",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: `
        animate-spin
        ${er[r]}
        ${tr[s]}
        ${a}
      `.trim(),
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ e.jsx(
          "circle",
          {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  );
}
function ss({
  message: r = "Loading...",
  size: s = "md",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center space-y-2 ${a}`,
      children: [
        /* @__PURE__ */ e.jsx(rr, { size: s }),
        r && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: r })
      ]
    }
  );
}
function as({
  tabs: r,
  activeTab: s,
  onTabChange: a,
  className: l = "",
  variant: n = "default"
}) {
  const i = n === "mobile";
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `border-b border-gray-200 dark:border-gray-700 ${l}`,
      children: /* @__PURE__ */ e.jsx(
        "nav",
        {
          className: i ? "flex" : "flex space-x-8",
          "aria-label": "Tabs",
          children: r.map((o) => /* @__PURE__ */ e.jsx(
            "button",
            {
              className: `
              ${i ? "flex-1 py-4 px-3" : "py-2 px-1"}
              border-b-2 font-medium text-sm transition-colors bg-transparent
              ${s === o.id ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}
            `,
              onClick: () => a(o.id),
              "aria-current": s === o.id ? "page" : void 0,
              children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
                o.icon && /* @__PURE__ */ e.jsx("span", { className: "shrink-0", children: o.icon }),
                /* @__PURE__ */ e.jsx("span", { className: i ? "hidden sm:inline" : "", children: o.label }),
                o.badge !== void 0 && /* @__PURE__ */ e.jsx(
                  "span",
                  {
                    className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s === o.id ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}`,
                    children: o.badge
                  }
                )
              ] })
            },
            o.id
          ))
        }
      )
    }
  );
}
const ls = ({
  id: r,
  checked: s,
  onChange: a,
  disabled: l = !1,
  label: n,
  description: i,
  className: o = ""
}) => {
  const c = r || `toggle-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-start ${o}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ e.jsx(
      "input",
      {
        id: c,
        type: "checkbox",
        checked: s,
        onChange: (d) => a(d.target.checked),
        disabled: l,
        className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      }
    ) }),
    (n || i) && /* @__PURE__ */ e.jsxs("div", { className: "ml-3 text-sm", children: [
      n && /* @__PURE__ */ e.jsx(
        "label",
        {
          htmlFor: c,
          className: `font-medium text-gray-900 dark:text-white ${l ? "opacity-50" : "cursor-pointer"}`,
          children: n
        }
      ),
      i && /* @__PURE__ */ e.jsx("p", { className: `text-gray-600 dark:text-gray-400 ${l ? "opacity-50" : ""}`, children: i })
    ] })
  ] });
}, P = {
  default: "text-gray-900 dark:text-gray-100",
  muted: "text-gray-600 dark:text-gray-400",
  primary: "text-blue-600 dark:text-blue-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  error: "text-red-600 dark:text-red-400"
};
function os({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "h1",
    {
      className: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${P[s]} ${a}`,
      children: r
    }
  );
}
function ns({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "h2",
    {
      className: `text-3xl md:text-4xl font-bold tracking-tight leading-tight ${P[s]} ${a}`,
      children: r
    }
  );
}
function ds({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("h3", { className: `text-2xl md:text-3xl font-semibold tracking-tight ${P[s]} ${a}`, children: r });
}
function is({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("h4", { className: `text-xl md:text-2xl font-semibold ${P[s]} ${a}`, children: r });
}
function cs({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("p", { className: `text-base leading-relaxed ${P[s]} ${a}`, children: r });
}
function us({
  children: r,
  color: s = "muted",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("small", { className: `text-sm leading-normal ${P[s]} ${a}`, children: r });
}
function xs({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: `text-xl md:text-2xl leading-relaxed font-light ${P[s]} ${a}`,
      children: r
    }
  );
}
function ms({
  children: r,
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: `text-sm leading-normal ${P.muted} ${s}`,
      children: r
    }
  );
}
function bs({
  children: r,
  label: s,
  error: a,
  hint: l,
  required: n = !1,
  className: i = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `space-y-2 ${i}`, children: [
    s && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
      s,
      n && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    r,
    l && !a && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: l }),
    a && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-600 dark:text-red-400", children: a })
  ] });
}
function hs({
  children: r,
  title: s,
  description: a,
  className: l = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `space-y-4 ${l}`, children: [
    (s || a) && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      s && /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: s }),
      a && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: a })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: r })
  ] });
}
const sr = {
  default: "text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500",
  error: "text-red-600 border-red-300 dark:border-red-600 focus:ring-red-500"
}, ar = F(
  ({
    label: r,
    description: s,
    variant: a = "default",
    className: l = "",
    disabled: n,
    id: i,
    ...o
  }, c) => {
    const d = i || `checkbox-${Math.random().toString(36).substr(2, 9)}`, b = `
    h-4 w-4 rounded border
    bg-white dark:bg-gray-800
    focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-50
    ${sr[a]}
    ${l}
  `.replace(/\s+/g, " ").trim();
    return r || s ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-start", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          ref: c,
          type: "checkbox",
          id: d,
          className: b,
          disabled: n,
          ...o
        }
      ) }),
      (r || s) && /* @__PURE__ */ e.jsxs("div", { className: "ml-3 text-sm", children: [
        r && /* @__PURE__ */ e.jsx(
          "label",
          {
            htmlFor: d,
            className: `
                  font-medium text-gray-700 dark:text-gray-300
                  ${n ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                `,
            children: r
          }
        ),
        s && /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: s })
      ] })
    ] }) : /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: c,
        type: "checkbox",
        id: d,
        className: b,
        disabled: n,
        ...o
      }
    );
  }
);
ar.displayName = "Checkbox";
const Ze = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, lr = F(
  ({ variant: r = "default", className: s = "", disabled: a, ...l }, n) => {
    const i = `
    block w-full rounded-md border px-3 py-2
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    text-sm
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `.replace(/\s+/g, " ").trim();
    return /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: n,
        type: "date",
        className: `
        ${i}
        ${Ze[r]}
        ${s}
      `.replace(/\s+/g, " ").trim(),
        disabled: a,
        ...l
      }
    );
  }
);
lr.displayName = "DatePicker";
const or = F(
  ({ variant: r = "default", className: s = "", disabled: a, ...l }, n) => {
    const i = `
    block w-full rounded-md border px-3 py-2
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    text-sm
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `.replace(/\s+/g, " ").trim();
    return /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: n,
        type: "datetime-local",
        className: `
        ${i}
        ${Ze[r]}
        ${s}
      `.replace(/\s+/g, " ").trim(),
        disabled: a,
        ...l
      }
    );
  }
);
or.displayName = "DateTimePicker";
const Ge = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base"
}, Je = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, nr = F(
  ({
    size: r = "md",
    variant: s = "default",
    startIcon: a,
    endIcon: l,
    className: n = "",
    disabled: i,
    ...o
  }, c) => {
    const d = `
    block w-full rounded-md border
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `.replace(/\s+/g, " ").trim();
    return a || l ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      a && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "h-5 w-5 text-gray-400", children: a }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          ref: c,
          className: `
            ${d}
            ${Ge[r]}
            ${Je[s]}
            ${a ? "pl-10" : ""}
            ${l ? "pr-10" : ""}
            ${n}
          `.replace(/\s+/g, " ").trim(),
          disabled: i,
          ...o
        }
      ),
      l && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "h-5 w-5 text-gray-400", children: l }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: c,
        className: `
        ${d}
        ${Ge[r]}
        ${Je[s]}
        ${n}
      `.replace(/\s+/g, " ").trim(),
        disabled: i,
        ...o
      }
    );
  }
);
nr.displayName = "Input";
const dr = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base"
}, ir = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, cr = F(
  ({
    size: r = "md",
    variant: s = "default",
    options: a,
    placeholder: l,
    className: n = "",
    disabled: i,
    ...o
  }, c) => {
    const d = `
    block w-full rounded-md border
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
    appearance-none
    bg-no-repeat bg-right
    pr-10
  `.replace(/\s+/g, " ").trim();
    return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ e.jsxs(
        "select",
        {
          ref: c,
          className: `
          ${d}
          ${dr[r]}
          ${ir[s]}
          ${n}
        `.replace(/\s+/g, " ").trim(),
          disabled: i,
          ...o,
          children: [
            l && /* @__PURE__ */ e.jsx("option", { value: "", children: l }),
            a.map((b) => /* @__PURE__ */ e.jsx(
              "option",
              {
                value: b.value,
                disabled: b.disabled,
                children: b.label
              },
              b.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: /* @__PURE__ */ e.jsx(
        "svg",
        {
          className: "w-5 h-5 text-gray-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ e.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M19 9l-7 7-7-7"
            }
          )
        }
      ) })
    ] });
  }
);
cr.displayName = "Select";
const ur = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, xr = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize"
}, mr = F(
  ({
    variant: r = "default",
    resize: s = "vertical",
    className: a = "",
    rows: l = 3,
    disabled: n,
    ...i
  }, o) => {
    const c = `
    block w-full rounded-md border px-3 py-2
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    text-sm
    placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `.replace(/\s+/g, " ").trim();
    return /* @__PURE__ */ e.jsx(
      "textarea",
      {
        ref: o,
        rows: l,
        className: `
        ${c}
        ${ur[r]}
        ${xr[s]}
        ${a}
      `.replace(/\s+/g, " ").trim(),
        disabled: n,
        ...i
      }
    );
  }
);
mr.displayName = "TextArea";
function gs({
  icon: r,
  title: s,
  description: a,
  actions: l,
  className: n = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `text-center py-12 px-4 ${n}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 [&>svg]:w-8 [&>svg]:h-8", children: r }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-slate-800 dark:text-white mb-2", children: s }),
    a && /* @__PURE__ */ e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto", children: a }),
    l && /* @__PURE__ */ e.jsx("div", { className: "flex gap-3 justify-center", children: l })
  ] });
}
const br = () => /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) });
function fs({
  title: r = "Something went wrong",
  message: s,
  icon: a,
  onRetry: l,
  retryText: n = "Try Again",
  className: i = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `text-center py-12 px-4 ${i}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-red-500 dark:text-red-400", children: a || /* @__PURE__ */ e.jsx(br, {}) }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-red-600 dark:text-red-400 mb-2", children: r }),
    /* @__PURE__ */ e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto", children: s }),
    l && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: l,
        className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",
        children: n
      }
    )
  ] });
}
const hr = {
  desktop: {
    base: "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
    active: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    inactive: "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
  },
  mobile: {
    base: "flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-all",
    active: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    inactive: "text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
  },
  "bottom-nav": {
    base: "flex flex-col items-center gap-1 py-1 transition-colors",
    active: "text-blue-600",
    inactive: "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
  }
}, gr = {
  desktop: "w-4 h-4",
  mobile: "w-5 h-5",
  "bottom-nav": "w-5 h-5"
}, fr = {
  desktop: "",
  mobile: "",
  "bottom-nav": "text-xs"
};
function ps({
  as: r,
  href: s,
  label: a,
  icon: l,
  isActive: n = !1,
  onClick: i,
  className: o = "",
  variant: c = "desktop",
  ...d
}) {
  const b = r || "a", h = hr[c], x = `${h.base} ${n ? h.active : h.inactive} ${o}`, f = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: gr[c], children: l }),
    /* @__PURE__ */ e.jsx("span", { className: fr[c], children: a })
  ] }), N = {
    className: x,
    onClick: i,
    ...d
  };
  return b === "a" ? N.href = s : (N.href = s, N.to = s), /* @__PURE__ */ e.jsx(b, { ...N, children: f });
}
const vs = ({
  items: r,
  isOpen: s,
  onToggle: a,
  className: l = ""
}) => /* @__PURE__ */ e.jsxs("div", { className: `relative ${l}`, children: [
  /* @__PURE__ */ e.jsx(
    "button",
    {
      className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors",
      "aria-label": "Options",
      "aria-haspopup": "menu",
      "aria-expanded": s,
      onClick: a,
      children: /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5 text-slate-400", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) })
    }
  ),
  s && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg py-1 w-36 z-10", children: r.map((n, i) => /* @__PURE__ */ e.jsx(
    "button",
    {
      className: `w-full text-left px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 ${n.variant === "danger" ? "text-red-600" : "text-slate-700 dark:text-slate-200"}`,
      onClick: () => {
        n.onClick(), a();
      },
      children: n.label
    },
    i
  )) })
] }), pr = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl"
};
function ks({
  title: r,
  subtitle: s,
  action: a,
  size: l = "md",
  className: n = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-center justify-between ${n}`, children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h2", { className: `font-semibold text-slate-800 dark:text-white ${pr[l]}`, children: r }),
      s && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 mt-1", children: s })
    ] }),
    a && /* @__PURE__ */ e.jsx("div", { children: a })
  ] });
}
const vr = {
  info: "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-b border-blue-500/30",
  success: "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-b border-emerald-500/30",
  warning: "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-b border-amber-400/30",
  error: "bg-gradient-to-r from-red-600 to-red-700 text-white border-b border-red-500/30",
  gradient: "bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white border-b border-purple-400/30"
}, kr = {
  info: "shadow-glow-blue",
  success: "shadow-lg shadow-emerald-500/20",
  warning: "shadow-glow-amber",
  error: "shadow-lg shadow-red-500/20",
  gradient: "shadow-lg shadow-purple-500/30"
}, wr = {
  top: "fixed top-0 left-0 right-0",
  bottom: "fixed bottom-0 left-0 right-0",
  inline: "relative"
}, ws = ({
  variant: r = "info",
  icon: s,
  message: a,
  actions: l,
  onDismiss: n,
  position: i = "inline",
  className: o = "",
  glow: c = !1
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: `
        ${wr[i]} 
        ${vr[r]} 
        ${c ? kr[r] : ""} 
        px-4 py-3 z-50 backdrop-blur-sm
        ${o}
      `.trim().replace(/\s+/g, " "),
    children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between max-w-6xl mx-auto gap-3", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3 flex-1 min-w-0", children: [
        s && /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 text-white/90", children: s }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 min-w-0 font-medium", children: a })
      ] }),
      (l || n) && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 flex-shrink-0", children: [
        l,
        n && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: n,
            className: "text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 p-1.5 rounded-md",
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ e.jsx(
              "svg",
              {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ e.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                  }
                )
              }
            )
          }
        )
      ] })
    ] })
  }
), jr = {
  "top-left": "absolute top-2 left-2 z-20",
  "top-right": "absolute top-2 right-2 z-20",
  "bottom-left": "absolute bottom-2 left-2 z-20",
  "bottom-right": "absolute bottom-2 right-2 z-20",
  none: ""
}, yr = {
  default: "bg-slate-900/80 backdrop-blur-sm text-white border border-white/10",
  primary: "bg-blue-600/90 backdrop-blur-sm text-white border border-blue-400/30 shadow-glow-blue-sm",
  success: "bg-emerald-600/90 backdrop-blur-sm text-white border border-emerald-400/30",
  warning: "bg-amber-600/90 backdrop-blur-sm text-white border border-amber-400/30",
  danger: "bg-red-600/90 backdrop-blur-sm text-white border border-red-400/30",
  glass: "bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-lg"
}, se = ({
  children: r,
  position: s = "top-left",
  variant: a = "default",
  className: l = ""
}) => /* @__PURE__ */ e.jsx("div", { className: `${jr[s]} ${l}`, children: /* @__PURE__ */ e.jsx(
  "div",
  {
    className: `${yr[a]} px-2.5 py-1 rounded-md text-xs font-medium shadow-lg transition-all duration-200`,
    children: r
  }
) }), js = ({
  topLeft: r,
  topRight: s,
  bottomLeft: a,
  bottomRight: l,
  topLeftVariant: n = "default",
  topRightVariant: i = "default",
  bottomLeftVariant: o = "default",
  bottomRightVariant: c = "default",
  interactive: d = !0,
  className: b = ""
}) => /* @__PURE__ */ e.jsxs("div", { className: `absolute inset-0 pointer-events-none ${b}`, children: [
  r && /* @__PURE__ */ e.jsx(se, { position: "top-left", variant: n, children: r }),
  s && /* @__PURE__ */ e.jsx(se, { position: "top-right", variant: i, children: s }),
  a && /* @__PURE__ */ e.jsx(se, { position: "bottom-left", variant: o, children: a }),
  l && /* @__PURE__ */ e.jsx(se, { position: "bottom-right", variant: c, children: l }),
  !d && /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute inset-0 cursor-default z-30 pointer-events-auto",
      title: "Preview - tap to expand for interaction"
    }
  )
] }), Nr = {
  primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-lg",
  secondary: "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500",
  gradient: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md hover:shadow-lg"
}, $r = {
  blue: "hover:shadow-glow-blue hover:border-blue-500/30",
  purple: "hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30",
  amber: "hover:shadow-glow-amber hover:border-amber-500/30",
  cyan: "hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/30"
}, ys = ({
  icon: r,
  iconBg: s = "bg-blue-600",
  title: a,
  description: l,
  buttonText: n,
  buttonVariant: i = "primary",
  onClick: o,
  className: c = "",
  glass: d = !1,
  glow: b = !1,
  glowColor: h = "blue"
}) => {
  const x = d ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50" : "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700/60", f = b ? $r[h] : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `
        ${x}
        rounded-xl p-6 
        border
        cursor-pointer
        transition-all duration-300 ease-out
        hover:border-slate-600
        ${f}
        ${c}
      `.trim().replace(/\s+/g, " "),
      onClick: o,
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `
          w-14 h-14 ${s} 
          rounded-xl flex items-center justify-center 
          mx-auto mb-4
          shadow-lg
          transition-transform duration-300
          group-hover:scale-110
        `,
            children: /* @__PURE__ */ e.jsx("span", { className: "text-white text-xl", children: r })
          }
        ),
        /* @__PURE__ */ e.jsx("h4", { className: "text-white font-semibold text-lg mb-2 text-center", children: a }),
        /* @__PURE__ */ e.jsx("p", { className: "text-slate-400 text-sm mb-5 text-center leading-relaxed", children: l }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: (N) => {
              N.stopPropagation(), o();
            },
            className: `
          w-full px-4 py-2.5 
          ${Nr[i]}
          rounded-lg 
          transition-all duration-200
          text-sm font-medium
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
        `,
            children: n
          }
        )
      ]
    }
  );
}, Cr = {
  blue: {
    border: "border-blue-500",
    glow: "shadow-blue-500/10"
  },
  green: {
    border: "border-emerald-500",
    glow: "shadow-emerald-500/10"
  },
  purple: {
    border: "border-purple-500",
    glow: "shadow-purple-500/10"
  },
  orange: {
    border: "border-orange-500",
    glow: "shadow-orange-500/10"
  },
  red: {
    border: "border-red-500",
    glow: "shadow-red-500/10"
  },
  cyan: {
    border: "border-cyan-500",
    glow: "shadow-cyan-500/10"
  },
  pink: {
    border: "border-pink-500",
    glow: "shadow-pink-500/10"
  },
  amber: {
    border: "border-amber-500",
    glow: "shadow-amber-500/10"
  }
}, Ns = ({
  title: r,
  description: s,
  accentColor: a = "blue",
  children: l,
  className: n = "",
  glass: i = !1,
  glow: o = !1
}) => {
  const c = Cr[a], d = i ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50" : "bg-slate-800 border-slate-700";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `
        ${d}
        rounded-xl shadow-lg border
        ${o ? `shadow-xl ${c.glow}` : ""}
        p-4 sm:p-6 
        transition-all duration-300
        hover:border-slate-600
        ${n}
      `.trim().replace(/\s+/g, " "),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: `border-l-4 ${c.border} pl-3 sm:pl-4 mb-4 sm:mb-6`, children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-base sm:text-lg font-semibold text-white", children: r }),
          s && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-slate-400", children: s })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: l })
      ]
    }
  );
}, Er = {
  default: [
    "bg-slate-800 hover:bg-slate-700",
    "border border-slate-700 hover:border-slate-600",
    "text-slate-300 hover:text-white",
    "shadow-md hover:shadow-lg"
  ].join(" "),
  ghost: [
    "bg-transparent hover:bg-slate-800/50",
    "border border-slate-700/50 hover:border-slate-600",
    "text-slate-400 hover:text-white"
  ].join(" "),
  gradient: [
    "bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600",
    "border border-slate-600/50 hover:border-slate-500/50",
    "text-white",
    "shadow-md hover:shadow-lg"
  ].join(" ")
};
function $s({
  onClick: r,
  loading: s = !1,
  children: a = "Load More",
  className: l = "",
  variant: n = "default"
}) {
  return /* @__PURE__ */ e.jsx("div", { className: `text-center ${l}`, children: /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: r,
      disabled: s,
      className: `
          px-6 py-3 
          rounded-xl
          transition-all duration-200 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
          font-medium
          ${Er[n]}
        `.trim().replace(/\s+/g, " "),
      children: s ? /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ e.jsxs("svg", { className: "w-4 h-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
          /* @__PURE__ */ e.jsx(
            "circle",
            {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "path",
            {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }
          )
        ] }),
        "Loading..."
      ] }) : a
    }
  ) });
}
const Lr = {
  red: "text-red-500 hover:text-red-600",
  blue: "text-blue-500 hover:text-blue-600",
  green: "text-green-500 hover:text-green-600",
  yellow: "text-yellow-500 hover:text-yellow-600",
  purple: "text-purple-500 hover:text-purple-600"
};
function Cs({
  icon: r,
  label: s,
  count: a,
  active: l = !1,
  onClick: n,
  activeColor: i = "red",
  className: o = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `flex flex-col items-center space-y-1 flex-1 py-2 transition-colors ${l ? Lr[i] : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"} ${o}`,
      onClick: n,
      "aria-label": s,
      title: s,
      children: [
        r,
        a !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "text-xs font-medium", children: a })
      ]
    }
  );
}
const Sr = (r) => {
  switch (r) {
    case "legendary":
      return "from-yellow-400 to-orange-500";
    case "epic":
      return "from-purple-400 to-pink-500";
    case "rare":
      return "from-blue-400 to-cyan-500";
    default:
      return "from-gray-400 to-gray-600";
  }
}, Rr = (r) => {
  switch (r) {
    case "legendary":
      return "border-yellow-300";
    case "epic":
      return "border-purple-300";
    case "rare":
      return "border-blue-300";
    default:
      return "border-gray-300";
  }
};
function Es({
  achievements: r,
  title: s = "🏆 Achievements",
  showViewAll: a = !0,
  onViewAll: l,
  className: n = ""
}) {
  const i = r.filter(
    (o) => o.completed || o.progress >= o.total
  ).length;
  return /* @__PURE__ */ e.jsxs("div", { className: `space-y-4 ${n}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: s }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [
        i,
        " / ",
        r.length
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "grid gap-3", children: r.map((o) => {
      const c = o.rarity || "common", d = o.completed || o.progress >= o.total;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `relative p-4 rounded-lg border transition-all hover:shadow-md ${d ? `bg-gradient-to-r ${Sr(c)} text-white ${Rr(c)}` : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"}`,
          children: [
            d && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-lg" }),
            /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${d ? "bg-white/20" : "bg-slate-100 dark:bg-slate-700"}`,
                  children: o.icon
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx(
                      "h4",
                      {
                        className: `font-medium ${d ? "text-white" : "text-slate-900 dark:text-white"}`,
                        children: o.title
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "p",
                      {
                        className: `text-sm mt-1 ${d ? "text-white/90" : "text-slate-600 dark:text-slate-400"}`,
                        children: o.description
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "span",
                    {
                      className: `px-2 py-1 text-xs font-medium rounded capitalize ${d ? "bg-white/20 text-white" : c === "legendary" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : c === "epic" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" : c === "rare" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"}`,
                      children: c
                    }
                  )
                ] }),
                !d && /* @__PURE__ */ e.jsxs("div", { className: "mt-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm mb-2", children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "text-slate-600 dark:text-slate-400", children: [
                      "Progress:",
                      " ",
                      Math.round(o.progress / o.total * 100),
                      "%"
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "font-medium text-slate-700 dark:text-slate-300", children: [
                      o.progress,
                      " / ",
                      o.total
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { className: "w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2", children: /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: "bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out",
                      style: {
                        width: `${Math.min(100, o.progress / o.total * 100)}%`
                      }
                    }
                  ) })
                ] }),
                d && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-white/80 mt-2", children: "✅ Completed" })
              ] })
            ] }) })
          ]
        },
        o.id
      );
    }) }),
    a && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: l,
        className: "w-full p-3 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20 transition-colors",
        children: "🏆 View All Achievements & Leaderboards"
      }
    )
  ] });
}
function Ls({
  items: r = [],
  emptyIcon: s,
  emptyTitle: a = "No items to show",
  emptyDescription: l = "Be the first to add something to the feed",
  emptyActionText: n = "Add Item",
  onEmptyAction: i,
  showLoadMore: o = !1,
  loadMoreText: c = "Load More",
  onLoadMore: d,
  header: b,
  className: h = "",
  renderItem: x
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `max-w-4xl mx-auto p-4 lg:pt-16 pb-20 lg:pb-6 ${h}`, children: [
    b,
    /* @__PURE__ */ e.jsx("div", { className: "space-y-6", children: r.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 text-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center", children: s || /* @__PURE__ */ e.jsx(
        "svg",
        {
          className: "w-8 h-8 text-slate-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ e.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            }
          )
        }
      ) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-slate-800 dark:text-white mb-2", children: a }),
      /* @__PURE__ */ e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-4", children: l }),
      i && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: i,
          className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
          children: n
        }
      )
    ] }) : r.map((f) => /* @__PURE__ */ e.jsx("div", { children: x ? x(f) : f.content }, f.id)) }),
    r.length > 0 && o && /* @__PURE__ */ e.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ e.jsx(Ut, { variant: "secondary", onClick: d, children: c }) })
  ] });
}
function Ss({
  totalReactions: r,
  totalComments: s,
  userReacted: a = !1,
  reactionUsers: l = [],
  reactionLabel: n = "kudos",
  commentLabel: i = "comment",
  className: o = ""
}) {
  if (r === 0 && s === 0)
    return null;
  const c = () => {
    const d = [];
    if (r > 0 && (a ? r === 1 ? d.push(`You gave ${n}`) : d.push(
      `You and ${r - 1} ${r === 2 ? "other" : "others"} gave ${n}`
    ) : d.push(
      `${r} ${r === 1 ? "person" : "people"} gave ${n}`
    )), s > 0) {
      const b = s === 1 ? i : `${i}s`;
      d.push(`${s} ${b}`);
    }
    return d.join(" • ");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `px-6 py-3 flex items-center space-x-3 ${o}`, children: [
    l.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex -space-x-1", children: [
      l.slice(0, 3).map((d, b) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden",
          children: d.avatar ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: d.avatar,
              alt: d.name,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-xs font-medium text-slate-600 dark:text-slate-300", children: d.name.charAt(0).toUpperCase() }) })
        },
        b
      )),
      l.length > 3 && /* @__PURE__ */ e.jsx("div", { className: "w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("span", { className: "text-xs font-medium text-slate-600 dark:text-slate-300", children: [
        "+",
        l.length - 3
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 flex-1", children: c() })
  ] });
}
function Rs({
  storageKey: r = "cookie-consent",
  privacyUrl: s = "/privacy",
  message: a = "We use cookies to improve your experience and for analytics purposes.",
  learnMoreText: l = "Learn More",
  acceptText: n = "Accept Cookies",
  onAccept: i,
  onLearnMore: o,
  className: c = ""
}) {
  const [d, b] = W(!1);
  Xe(() => {
    localStorage.getItem(r) || b(!0);
  }, [r]);
  const h = () => {
    localStorage.setItem(r, "accepted"), b(!1), i == null || i();
  }, x = () => {
    localStorage.setItem(r, "learn-more"), b(!1), o == null || o();
  };
  return d ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg z-50 ${c}`,
      role: "dialog",
      "aria-label": "Cookie consent",
      children: /* @__PURE__ */ e.jsx("div", { className: "container mx-auto px-4 py-4 max-w-7xl", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-slate-700 dark:text-slate-300", children: [
          a,
          " ",
          /* @__PURE__ */ e.jsx(
            "a",
            {
              href: s,
              className: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline",
              onClick: x,
              children: "Learn more about our privacy practices"
            }
          ),
          "."
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [
          /* @__PURE__ */ e.jsx(
            "a",
            {
              href: s,
              onClick: x,
              className: "px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-center",
              children: l
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: h,
              className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
              children: n
            }
          )
        ] })
      ] }) })
    }
  ) : null;
}
const _r = {
  error: {
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-700 dark:text-red-300",
    icon: "❌"
  },
  warning: {
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    border: "border-yellow-200 dark:border-yellow-800",
    text: "text-yellow-700 dark:text-yellow-300",
    icon: "⚠️"
  },
  info: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-700 dark:text-blue-300",
    icon: "ℹ️"
  }
};
function _s({
  error: r,
  variant: s = "error",
  dismissible: a = !1,
  onDismiss: l,
  className: n = "",
  children: i
}) {
  if (!r && !i) return null;
  const o = _r[s];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `${o.bg} border ${o.border} ${o.text} px-4 py-3 rounded flex items-start gap-3 ${n}`,
      role: "alert",
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "flex-shrink-0", children: o.icon }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: i || r }),
        a && l && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: l,
            className: "flex-shrink-0 hover:opacity-70 transition-opacity",
            "aria-label": "Dismiss",
            children: "✕"
          }
        )
      ]
    }
  );
}
const Ts = ({
  label: r,
  placeholder: s = "Type to search...",
  value: a,
  onSearch: l,
  onSelect: n,
  onClear: i,
  error: o,
  disabled: c = !1,
  minSearchLength: d = 2,
  debounceMs: b = 300,
  className: h = ""
}) => {
  const [x, f] = W(!1), [N, L] = W(""), [y, R] = W([]), [O, $] = W(!1), [Y, A] = W(-1), le = ge(null), oe = ge(null), B = ge();
  Xe(() => () => {
    B.current && clearTimeout(B.current);
  }, []);
  const G = async (w) => {
    if (w.length < d) {
      R([]), $(!1);
      return;
    }
    try {
      $(!0);
      const C = await l(w);
      R(C);
    } catch (C) {
      console.error("Search error:", C), R([]);
    } finally {
      $(!1);
    }
  }, J = (w) => {
    B.current && clearTimeout(B.current), B.current = setTimeout(() => {
      G(w);
    }, b);
  }, ne = (w) => {
    const C = w.target.value;
    L(C), A(-1), C.length >= d ? ($(!0), J(C)) : (R([]), $(!1));
  }, K = (w) => {
    n(w), L(""), f(!1), R([]), A(-1);
  }, X = () => {
    L(""), f(!1), R([]), A(-1), i && i();
  }, z = (w) => {
    if (!x || y.length === 0) {
      (w.key === "ArrowDown" || w.key === "Enter") && (f(!0), N.length >= d && G(N));
      return;
    }
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), A((C) => C < y.length - 1 ? C + 1 : 0);
        break;
      case "ArrowUp":
        w.preventDefault(), A((C) => C > 0 ? C - 1 : y.length - 1);
        break;
      case "Enter":
        w.preventDefault(), Y >= 0 && K(y[Y]);
        break;
      case "Escape":
        f(!1), A(-1);
        break;
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `relative ${h}`, children: [
    /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: r }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      a && !x ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 min-h-[42px]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ e.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: a.label }),
          a.subtitle && /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: a.subtitle })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: X,
              className: "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-1",
              disabled: c,
              title: "Clear selection",
              "aria-label": "Clear selection",
              children: "×"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => f(!0),
              className: "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-1",
              disabled: c,
              title: "Open dropdown",
              "aria-label": "Open dropdown",
              children: "▼"
            }
          )
        ] })
      ] }) : (
        /* Search input */
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: le,
              type: "text",
              value: N,
              onChange: ne,
              onKeyDown: z,
              onFocus: () => f(!0),
              placeholder: s,
              disabled: c,
              className: `w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 ${o ? "border-red-300 dark:border-red-700" : "border-gray-300 dark:border-gray-600"} ${c ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"} text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400`
            }
          ),
          O && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 dark:border-blue-400" }) })
        ] })
      ),
      x && y.length > 0 && /* @__PURE__ */ e.jsx(
        "ul",
        {
          ref: oe,
          className: "absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto",
          children: y.map((w, C) => /* @__PURE__ */ e.jsxs(
            "li",
            {
              onClick: () => K(w),
              className: `px-3 py-2 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 ${C === Y ? "bg-blue-100 dark:bg-blue-900/40" : ""}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: w.label }),
                w.subtitle && /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: w.subtitle })
              ]
            },
            w.id
          ))
        }
      ),
      x && !O && N.length >= d && y.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg p-3", children: /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: "No results found" }) })
    ] }),
    o && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: o })
  ] });
};
function Ms({
  themePreference: r,
  resolvedTheme: s,
  onThemeChange: a,
  className: l = ""
}) {
  const n = () => {
    switch (r) {
      case "light":
        return "dark";
      case "dark":
        return "system";
      case "system":
        return "light";
      default:
        return "light";
    }
  }, i = () => {
    a(n());
  }, o = () => r === "system" ? /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "w-5 h-5 text-slate-600 dark:text-slate-400",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ e.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        }
      )
    }
  ) : s === "dark" ? /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "w-5 h-5 text-slate-600 dark:text-slate-400",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ e.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        }
      )
    }
  ) : /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "w-5 h-5 text-slate-600 dark:text-slate-400",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ e.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        }
      )
    }
  ), c = () => {
    switch (r) {
      case "light":
        return "Switch to dark mode";
      case "dark":
        return "Switch to system mode";
      case "system":
        return "Switch to light mode";
      default:
        return "Toggle theme";
    }
  };
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: i,
      className: `p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${l}`,
      "aria-label": c(),
      title: `Current: ${r}${r === "system" ? ` (${s})` : ""}`,
      children: o()
    }
  );
}
function zs({
  notifications: r,
  unreadCount: s,
  onMarkAsRead: a,
  onMarkAllAsRead: l,
  onDismiss: n,
  onViewAll: i,
  className: o = ""
}) {
  const [c, d] = W(!1), b = (x) => {
    const f = new Date(x), L = Math.floor(
      ((/* @__PURE__ */ new Date()).getTime() - f.getTime()) / (1e3 * 60 * 60)
    );
    return L < 1 ? "Just now" : L < 24 ? `${L}h ago` : L < 48 ? "Yesterday" : f.toLocaleDateString();
  }, h = (x) => {
    switch (x) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-900/20 dark:border-red-800";
      case "medium":
        return "text-orange-600 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-900/20 dark:border-orange-800";
      default:
        return "text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-900/20 dark:border-blue-800";
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `relative ${o}`, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => d(!c),
        className: "relative p-2 text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100 transition-colors",
        "aria-label": `Notifications ${s > 0 ? `(${s} unread)` : ""}`,
        children: [
          /* @__PURE__ */ e.jsx(
            "svg",
            {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ e.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                }
              )
            }
          ),
          s > 0 && /* @__PURE__ */ e.jsx("span", { className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium", children: s > 9 ? "9+" : s })
        ]
      }
    ),
    c && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "fixed inset-0 z-10",
          onClick: () => d(!1)
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-0 mt-2 w-96 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-20 max-h-96 overflow-hidden", children: [
        /* @__PURE__ */ e.jsx("div", { className: "p-4 border-b border-slate-200 dark:border-slate-700", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: "Notifications" }),
          s > 0 && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: l,
              className: "text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium",
              children: "Mark all read"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "max-h-80 overflow-y-auto", children: r.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-6 text-center text-slate-500 dark:text-slate-400", children: [
          /* @__PURE__ */ e.jsx(
            "svg",
            {
              className: "w-12 h-12 mx-auto mb-3 opacity-50",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ e.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsx("p", { children: "No notifications" })
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-1", children: r.map((x) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer ${x.isRead ? "" : "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500"}`,
            onClick: () => a(x.id),
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm border ${h(
                    x.priority
                  )}`,
                  children: x.icon || "📢"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ e.jsx(
                    "p",
                    {
                      className: `text-sm font-medium text-slate-900 dark:text-white ${x.isRead ? "" : "font-semibold"}`,
                      children: x.title
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: (f) => {
                        f.stopPropagation(), n(x.id);
                      },
                      className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ml-2",
                      title: "Dismiss notification",
                      "aria-label": "Dismiss notification",
                      children: /* @__PURE__ */ e.jsx(
                        "svg",
                        {
                          className: "w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: /* @__PURE__ */ e.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                              d: "M6 18L18 6M6 6l12 12"
                            }
                          )
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mt-1", children: x.message }),
                /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-500 mt-2", children: b(x.timestamp) })
              ] })
            ] })
          },
          x.id
        )) }) }),
        r.length > 0 && i && /* @__PURE__ */ e.jsx("div", { className: "p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              d(!1), i();
            },
            className: "w-full text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium",
            children: "View all notifications"
          }
        ) })
      ] })
    ] })
  ] });
}
function ae({
  message: r = "Loading...",
  size: s = "md",
  variant: a = "default",
  fullscreen: l = !1,
  className: n = "",
  showDots: i = !0
}) {
  const o = () => {
    switch (s) {
      case "sm":
        return {
          spinner: "w-6 h-6 border-2",
          container: "space-y-2",
          text: "text-sm"
        };
      case "lg":
        return {
          spinner: "w-12 h-12 border-4",
          container: "space-y-6",
          text: "text-lg"
        };
      default:
        return {
          spinner: "w-8 h-8 border-3",
          container: "space-y-4",
          text: "text-base"
        };
    }
  }, c = () => {
    switch (a) {
      case "aviation":
        return {
          spinner: "border-slate-600 border-t-sky-500",
          text: "text-slate-200",
          background: "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        };
      case "minimal":
        return {
          spinner: "border-gray-200 border-t-gray-600 dark:border-gray-700 dark:border-t-gray-300",
          text: "text-gray-600 dark:text-gray-400",
          background: "bg-white dark:bg-slate-900"
        };
      default:
        return {
          spinner: "border-gray-200 border-t-blue-500 dark:border-gray-700 dark:border-t-blue-400",
          text: "text-gray-700 dark:text-gray-300",
          background: "bg-white dark:bg-slate-900"
        };
    }
  }, d = o(), b = c(), h = a === "aviation" ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${d.spinner} ${b.spinner} rounded-full animate-spin mx-auto shadow-lg bg-gradient-to-br from-slate-800 to-slate-700`
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `absolute inset-0 ${s === "lg" ? "w-16 h-16" : s === "sm" ? "w-8 h-8" : "w-12 h-12"} mx-auto border border-slate-700/50 rounded-full animate-pulse`
      }
    )
  ] }) : /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `${d.spinner} ${b.spinner} rounded-full animate-spin mx-auto`
    }
  ), x = i && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center space-x-2 mt-2", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `w-1 h-1 ${a === "aviation" ? "bg-slate-400" : "bg-gray-400 dark:bg-gray-500"} rounded-full opacity-60`
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `w-1 h-1 ${a === "aviation" ? "bg-slate-400" : "bg-gray-400 dark:bg-gray-500"} rounded-full animate-pulse delay-200`
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `w-1 h-1 ${a === "aviation" ? "bg-slate-400" : "bg-gray-400 dark:bg-gray-500"} rounded-full animate-pulse delay-400`
      }
    )
  ] }), f = /* @__PURE__ */ e.jsxs("div", { className: `text-center ${d.container}`, children: [
    h,
    r && /* @__PURE__ */ e.jsx(
      "p",
      {
        className: `${d.text} ${b.text} font-light tracking-wide m-0`,
        children: r
      }
    ),
    x
  ] });
  return l ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center ${b.background} ${n}`,
      children: f
    }
  ) : /* @__PURE__ */ e.jsx("div", { className: `flex items-center justify-center p-8 ${n}`, children: f });
}
const Tr = (r) => /* @__PURE__ */ e.jsx(ae, { ...r, fullscreen: !0 }), Os = (r) => /* @__PURE__ */ e.jsx(ae, { ...r, variant: "aviation" }), As = (r) => /* @__PURE__ */ e.jsx(ae, { ...r, variant: "minimal" }), Ps = (r) => /* @__PURE__ */ e.jsx(ae, { ...r, size: "sm" });
function Bs({
  brandName: r = "Loading",
  variant: s = "default",
  size: a = "lg",
  showDots: l = !0,
  ...n
}) {
  return /* @__PURE__ */ e.jsx(
    Tr,
    {
      message: r,
      variant: s,
      size: a,
      showDots: l,
      ...n
    }
  );
}
const Mr = ({ icon: r, isActive: s }) => {
  const a = `w-4 h-4 transition-colors ${s ? "text-blue-700 dark:text-blue-300" : ""}`;
  switch (r) {
    case "community":
      return /* @__PURE__ */ e.jsx("svg", { className: a, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) });
    case "maps":
      return /* @__PURE__ */ e.jsx("svg", { className: a, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" }) });
    case "flight":
      return /* @__PURE__ */ e.jsx("svg", { className: a, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) });
    case "hangar":
      return /* @__PURE__ */ e.jsx("svg", { className: a, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }) });
    case "social":
      return /* @__PURE__ */ e.jsx("svg", { className: a, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) });
    case "home":
      return /* @__PURE__ */ e.jsx("svg", { className: a, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) });
    case "settings":
      return /* @__PURE__ */ e.jsxs("svg", { className: a, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
      ] });
    case "about":
      return /* @__PURE__ */ e.jsx("svg", { className: a, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) });
    default:
      return null;
  }
}, zr = ({ text: r = "App" }) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) }) }),
  /* @__PURE__ */ e.jsx("h1", { className: "text-xl font-light text-slate-800 dark:text-white", children: r })
] }), Or = () => /* @__PURE__ */ e.jsx("div", { className: "animate-pulse w-24 h-8 bg-slate-200 dark:bg-slate-700 rounded" });
function Ds({
  items: r,
  currentPath: s,
  isAuthenticated: a = !1,
  isLoading: l = !1,
  brand: n,
  brandText: i = "App",
  rightContent: o,
  onNavigate: c,
  className: d = ""
}) {
  const b = (h, x) => {
    c && (h.preventDefault(), c(x));
  };
  return /* @__PURE__ */ e.jsx("nav", { className: `bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm ${d}`, children: /* @__PURE__ */ e.jsx("div", { className: "w-full px-6 lg:px-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between h-16", children: [
    /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "/",
        onClick: (h) => b(h, "/"),
        className: "flex items-center",
        children: n || /* @__PURE__ */ e.jsx(zr, { text: i })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "hidden md:flex items-center space-x-8", children: r.map((h) => {
      const x = h.isActive ?? s === h.href;
      return /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: h.href,
          onClick: (f) => b(f, h.href),
          className: `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${x ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"}`,
          children: [
            h.icon && /* @__PURE__ */ e.jsx(Mr, { icon: h.icon, isActive: x }),
            h.name
          ]
        },
        h.href
      );
    }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: l ? /* @__PURE__ */ e.jsx(Or, {}) : o })
  ] }) }) });
}
function Ws({
  title: r,
  children: s,
  className: a = "",
  subtitle: l,
  variant: n = "default"
}) {
  const i = {
    default: "bg-white dark:bg-slate-800 shadow-sm",
    glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-slate-700/50",
    gradient: "bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 shadow-lg"
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `rounded-xl p-4 sm:p-6 ${i[n]} ${a}`,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: r }),
          l && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 mt-1", children: l })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "h-64 sm:h-80", children: s })
      ]
    }
  );
}
function Is({
  title: r,
  subtitle: s,
  action: a,
  user: l,
  showGreeting: n = !0,
  className: i = "",
  leading: o,
  position: c = "fixed"
}) {
  var x, f, N;
  const d = () => {
    const L = (/* @__PURE__ */ new Date()).getHours();
    return L < 12 ? "Good morning" : L < 17 ? "Good afternoon" : "Good evening";
  }, b = (L) => L.split(" ").map((y) => y.charAt(0).toUpperCase()).join("").slice(0, 2), h = c === "fixed" ? "fixed top-0 left-0 right-0 z-50" : "relative";
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `${h} bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 px-3 py-2 ${i}`,
      children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-4xl mx-auto flex items-center justify-between", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 min-w-0 flex-1", children: [
          o || l && /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0 ring-2 ring-cyan-500/20", children: l.avatarUrl ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: l.avatarUrl,
              alt: l.displayName || l.email,
              className: "w-8 h-8 rounded-full object-cover"
            }
          ) : /* @__PURE__ */ e.jsx("span", { className: "text-white font-semibold text-xs", children: l.displayName ? b(l.displayName) : ((x = l.email) == null ? void 0 : x.charAt(0).toUpperCase()) || "U" }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:space-x-2", children: [
              /* @__PURE__ */ e.jsx("h1", { className: "text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate", children: r }),
              l && n && /* @__PURE__ */ e.jsxs("span", { className: "text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate", children: [
                d(),
                ",",
                " ",
                ((f = l.displayName) == null ? void 0 : f.split(" ")[0]) || ((N = l.email) == null ? void 0 : N.split("@")[0]),
                "!"
              ] })
            ] }),
            s && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 truncate hidden sm:block", children: s })
          ] })
        ] }),
        a && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: a.onClick,
            className: "px-2 sm:px-4 py-1 sm:py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-xs sm:text-sm whitespace-nowrap flex-shrink-0 shadow-lg shadow-cyan-500/25",
            children: a.label
          }
        )
      ] })
    }
  );
}
function Vs({
  brandName: r = "Wayward UI",
  tagline: s,
  brandIcon: a,
  links: l = [],
  copyright: n,
  className: i = "",
  variant: o = "default"
}) {
  const c = {
    default: "bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700",
    glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-t border-white/20 dark:border-slate-700/50",
    minimal: "bg-transparent border-t border-slate-200 dark:border-slate-700"
  }, d = /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "w-4 h-4 text-white",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      children: /* @__PURE__ */ e.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        }
      )
    }
  ), b = (h, x) => {
    h.onClick && (x.preventDefault(), h.onClick());
  };
  return /* @__PURE__ */ e.jsx("footer", { className: `mt-8 ${c[o]} ${i}`, children: /* @__PURE__ */ e.jsx("div", { className: "container mx-auto px-4 py-6 max-w-7xl", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-4 md:mb-0", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-6 h-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25", children: a || d }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-slate-800 dark:text-white", children: r }),
        s && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: s })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-col sm:flex-row sm:items-center gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
      l.map((h, x) => /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: h.href || "#",
            onClick: (f) => b(h, f),
            className: "text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors",
            children: h.label
          }
        ),
        x < l.length - 1 && /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: "|" })
      ] }, x)),
      l.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: "|" }),
      /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 dark:text-slate-400", children: n || `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${r}` })
    ] }) })
  ] }) }) });
}
const Ar = {
  sm: {
    label: "text-xs",
    value: "text-base font-semibold",
    icon: "text-sm"
  },
  md: {
    label: "text-xs",
    value: "text-lg font-bold",
    icon: "text-base"
  },
  lg: {
    label: "text-sm",
    value: "text-2xl font-bold",
    icon: "text-lg"
  }
}, Ke = {
  default: "text-slate-800 dark:text-white",
  success: "text-emerald-600 dark:text-emerald-400",
  warning: "text-amber-600 dark:text-amber-400",
  error: "text-red-600 dark:text-red-400",
  accent: "text-cyan-600 dark:text-cyan-400"
};
function Fs({
  label: r,
  value: s,
  icon: a,
  direction: l = "vertical",
  size: n = "md",
  className: i = "",
  valueColor: o = "default",
  unit: c
}) {
  const d = Ar[n];
  return l === "horizontal" ? /* @__PURE__ */ e.jsxs("div", { className: `flex items-center justify-between ${i}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      a && /* @__PURE__ */ e.jsx("span", { className: `text-slate-400 ${d.icon}`, children: a }),
      /* @__PURE__ */ e.jsx("span", { className: `text-slate-500 dark:text-slate-400 ${d.label}`, children: r })
    ] }),
    /* @__PURE__ */ e.jsxs("span", { className: `${Ke[o]} ${d.value}`, children: [
      s,
      c && /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 dark:text-slate-500 ml-1 font-normal text-sm", children: c })
    ] })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: i, children: [
    /* @__PURE__ */ e.jsx("p", { className: `text-slate-500 dark:text-slate-400 uppercase tracking-wide ${d.label}`, children: r }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      a && /* @__PURE__ */ e.jsx("span", { className: `text-slate-400 ${d.icon}`, children: a }),
      /* @__PURE__ */ e.jsxs("p", { className: `${Ke[o]} ${d.value}`, children: [
        s,
        c && /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 dark:text-slate-500 ml-1 font-normal text-sm", children: c })
      ] })
    ] })
  ] });
}
const Pr = {
  sm: {
    label: "text-xs",
    value: "text-lg font-bold",
    icon: "w-8 h-8",
    iconInner: "[&>svg]:w-4 [&>svg]:h-4",
    padding: "p-4"
  },
  md: {
    label: "text-sm",
    value: "text-2xl font-bold",
    icon: "w-10 h-10",
    iconInner: "[&>svg]:w-5 [&>svg]:h-5",
    padding: "p-6"
  },
  lg: {
    label: "text-sm",
    value: "text-3xl font-bold",
    icon: "w-12 h-12",
    iconInner: "[&>svg]:w-6 [&>svg]:h-6",
    padding: "p-6"
  }
}, Br = {
  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-600 dark:text-cyan-400"
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400"
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-600 dark:text-emerald-400"
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400"
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-900/30",
    text: "text-rose-600 dark:text-rose-400"
  }
}, Dr = {
  default: "bg-white dark:bg-slate-800 shadow-sm",
  glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-slate-700/50",
  gradient: "bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 shadow-lg",
  outline: "bg-transparent border-2 border-slate-200 dark:border-slate-700"
};
function Ys({
  label: r,
  value: s,
  icon: a,
  size: l = "md",
  className: n = "",
  variant: i = "default",
  iconColor: o = "cyan"
}) {
  const c = Pr[l], d = Br[o];
  return /* @__PURE__ */ e.jsx("div", { className: `rounded-xl ${c.padding} ${Dr[i]} ${n}`, children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("p", { className: `text-slate-500 dark:text-slate-400 font-medium ${c.label}`, children: r }),
      /* @__PURE__ */ e.jsx("p", { className: `text-slate-800 dark:text-white ${c.value}`, children: s })
    ] }),
    a && /* @__PURE__ */ e.jsx("div", { className: `${c.icon} ${d.bg} rounded-lg flex items-center justify-center`, children: /* @__PURE__ */ e.jsx("span", { className: `${d.text} ${c.iconInner}`, children: a }) })
  ] }) });
}
function Hs({
  userName: r,
  userEmail: s,
  message: a,
  requestedAt: l,
  respondedAt: n,
  expiresAt: i,
  status: o,
  actions: c = [],
  processing: d = !1,
  className: b = "",
  variant: h = "default"
}) {
  const x = (y) => new Date(y).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }), f = () => {
    const y = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    switch (o) {
      case "pending":
        return /* @__PURE__ */ e.jsx("span", { className: `${y} bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200`, children: "Pending" });
      case "approved":
        return /* @__PURE__ */ e.jsx("span", { className: `${y} bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200`, children: "Approved" });
      case "rejected":
        return /* @__PURE__ */ e.jsx("span", { className: `${y} bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200`, children: "Rejected" });
      case "expired":
        return /* @__PURE__ */ e.jsx("span", { className: `${y} bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300`, children: "Expired" });
    }
  }, N = (y) => {
    const R = "flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed";
    switch (y) {
      case "approve":
        return `${R} bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/25`;
      case "reject":
        return `${R} bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/25`;
      case "cancel":
        return `${R} bg-slate-600 hover:bg-slate-700 text-white shadow-lg shadow-slate-500/25`;
      default:
        return `${R} bg-slate-600 hover:bg-slate-700 text-white`;
    }
  }, L = {
    default: "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600",
    glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg"
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `rounded-xl p-4 ${L[h]} ${b}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ e.jsx("h4", { className: "font-medium text-slate-900 dark:text-white truncate", children: r }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 truncate", children: s })
      ] }),
      f()
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-2 mb-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: [
        "Requested: ",
        x(l)
      ] }),
      a && /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-slate-700 dark:text-slate-300 italic bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-600", children: [
        "“",
        a,
        "”"
      ] }),
      n && /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: [
        "Responded: ",
        x(n)
      ] }),
      i && o === "pending" && /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: [
        "Expires: ",
        x(i)
      ] })
    ] }),
    c.length > 0 && o === "pending" && /* @__PURE__ */ e.jsx("div", { className: `flex ${c.length === 1 ? "" : "gap-3"}`, children: c.map((y, R) => /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: y.onClick,
        disabled: y.disabled || d,
        className: N(y.variant),
        children: d ? /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ e.jsxs("svg", { className: "animate-spin h-4 w-4", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ e.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ e.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
          ] }),
          "Processing..."
        ] }) : y.label
      },
      R
    )) })
  ] });
}
const Wr = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  amber: "bg-amber-500",
  red: "bg-red-500",
  purple: "bg-purple-500",
  cyan: "bg-cyan-500"
}, Ir = {
  blue: "shadow-blue-500/50",
  green: "shadow-green-500/50",
  amber: "shadow-amber-500/50",
  red: "shadow-red-500/50",
  purple: "shadow-purple-500/50",
  cyan: "shadow-cyan-500/50"
};
function Us({
  goal: r,
  variant: s = "default",
  color: a = "blue",
  showGlow: l = !0,
  className: n = ""
}) {
  const i = (x) => x >= 100 ? "w-full" : x >= 90 ? "w-[90%]" : x >= 80 ? "w-4/5" : x >= 75 ? "w-3/4" : x >= 66 ? "w-2/3" : x >= 50 ? "w-1/2" : x >= 33 ? "w-1/3" : x >= 25 ? "w-1/4" : x >= 20 ? "w-1/5" : x >= 10 ? "w-[10%]" : x > 0 ? "w-[5%]" : "w-0", o = {
    default: "border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800",
    glass: "backdrop-blur-sm bg-white/10 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/50",
    cockpit: "backdrop-blur-md bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
  }, c = {
    default: "text-slate-800 dark:text-white",
    glass: "text-slate-800 dark:text-white",
    cockpit: "text-cyan-100"
  }, d = {
    default: "text-slate-600 dark:text-slate-400",
    glass: "text-slate-600 dark:text-slate-300",
    cockpit: "text-cyan-300/70"
  }, b = {
    default: "bg-slate-200 dark:bg-slate-700",
    glass: "bg-white/20 dark:bg-slate-700/50",
    cockpit: "bg-slate-700/50 border border-cyan-500/20"
  }, h = l && r.progress >= 75;
  return /* @__PURE__ */ e.jsxs("div", { className: `rounded-lg p-4 ${o[s]} ${n}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ e.jsx("h4", { className: `font-medium ${c[s]}`, children: r.title }),
      /* @__PURE__ */ e.jsxs("span", { className: `text-sm ${d[s]}`, children: [
        "Target: ",
        r.target
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: `w-full rounded-full h-2 overflow-hidden ${b[s]}`, children: /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `
            h-2 rounded-full transition-all duration-500
            ${Wr[a]}
            ${h ? `shadow-lg ${Ir[a]}` : ""}
            ${i(r.progress)}
          `.trim()
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
      /* @__PURE__ */ e.jsxs("p", { className: `text-sm ${d[s]}`, children: [
        r.progress,
        "% complete"
      ] }),
      r.progress >= 100 && /* @__PURE__ */ e.jsxs("span", { className: "text-green-500 text-sm font-medium flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }),
        "Complete"
      ] })
    ] })
  ] });
}
const fe = {
  home: (r) => /* @__PURE__ */ e.jsx("svg", { className: `w-5 h-5 ${r ? "opacity-100" : "opacity-75"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m0 0V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10m3 0a1 1 0 0 0 1-1V10m0 0 2-2m-2 2 2-2" }) }),
  search: (r) => /* @__PURE__ */ e.jsx("svg", { className: `w-5 h-5 ${r ? "opacity-100" : "opacity-75"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }),
  add: (r) => /* @__PURE__ */ e.jsx("svg", { className: `w-5 h-5 ${r ? "opacity-100" : "opacity-75"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4v16m8-8H4" }) }),
  notifications: (r) => /* @__PURE__ */ e.jsx("svg", { className: `w-5 h-5 ${r ? "opacity-100" : "opacity-75"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" }) }),
  profile: (r) => /* @__PURE__ */ e.jsx("svg", { className: `w-5 h-5 ${r ? "opacity-100" : "opacity-75"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) }),
  settings: (r) => /* @__PURE__ */ e.jsxs("svg", { className: `w-5 h-5 ${r ? "opacity-100" : "opacity-75"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: [
    /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
    /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
  ] }),
  menu: (r) => /* @__PURE__ */ e.jsx("svg", { className: `w-5 h-5 ${r ? "opacity-100" : "opacity-75"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }) }),
  star: (r) => /* @__PURE__ */ e.jsx("svg", { className: `w-5 h-5 ${r ? "opacity-100" : "opacity-75"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }) }),
  heart: (r) => /* @__PURE__ */ e.jsx("svg", { className: `w-5 h-5 ${r ? "opacity-100" : "opacity-75"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) }),
  bookmark: (r) => /* @__PURE__ */ e.jsx("svg", { className: `w-5 h-5 ${r ? "opacity-100" : "opacity-75"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" }) })
};
function qs({
  items: r,
  activeId: s,
  onNavigate: a,
  variant: l = "default",
  className: n = ""
}) {
  const i = {
    default: "bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700",
    glass: "backdrop-blur-md bg-white/80 dark:bg-slate-800/80 border-t border-white/20 dark:border-slate-700/50",
    cockpit: "backdrop-blur-md bg-gradient-to-t from-slate-900/95 to-slate-800/90 border-t border-cyan-500/30 shadow-lg shadow-cyan-500/5"
  }, o = {
    default: "text-blue-600 dark:text-blue-400",
    glass: "text-blue-600 dark:text-blue-400",
    cockpit: "text-cyan-400"
  }, c = {
    default: "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300",
    glass: "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300",
    cockpit: "text-slate-400 hover:text-cyan-300"
  };
  return /* @__PURE__ */ e.jsx("nav", { className: `fixed bottom-0 left-0 right-0 px-4 py-2 z-50 safe-area-bottom ${i[l]} ${n}`, children: /* @__PURE__ */ e.jsx("div", { className: "flex justify-around items-center max-w-lg mx-auto", children: r.map((d) => {
    var x;
    const b = s === d.id, h = d.icon || d.iconName && ((x = fe[d.iconName]) == null ? void 0 : x.call(fe, b));
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => a(d.id),
        className: `
                flex flex-col items-center gap-1 py-1 px-3 relative
                transition-colors
                ${b ? o[l] : c[l]}
              `.trim(),
        children: [
          h && /* @__PURE__ */ e.jsxs("span", { className: "relative", children: [
            h,
            d.badge !== void 0 && d.badge > 0 && /* @__PURE__ */ e.jsx("span", { className: "absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold bg-red-500 text-white rounded-full flex items-center justify-center", children: d.badge > 9 ? "9+" : d.badge })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs", children: d.label })
        ]
      },
      d.id
    );
  }) }) });
}
const Vr = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6"
}, Fr = {
  sm: "py-1.5 px-2 text-xs gap-1",
  md: "py-2 px-3 text-sm gap-1.5",
  lg: "py-2.5 px-4 text-base gap-2"
};
function Yr({
  onShare: r,
  variant: s = "default",
  size: a = "md",
  showLabel: l = !0,
  label: n = "Share",
  icon: i,
  className: o = "",
  disabled: c = !1
}) {
  const d = {
    default: `
      text-slate-600 dark:text-slate-400 
      hover:text-slate-800 dark:hover:text-slate-200 
      hover:bg-slate-100 dark:hover:bg-slate-700
    `,
    glass: `
      text-slate-700 dark:text-slate-200
      hover:bg-white/20 dark:hover:bg-slate-700/50
      backdrop-blur-sm
    `,
    cockpit: `
      text-cyan-400 
      hover:text-cyan-300 
      hover:bg-cyan-500/10
      border border-transparent hover:border-cyan-500/30
    `,
    minimal: `
      text-slate-500 dark:text-slate-400
      hover:text-blue-600 dark:hover:text-blue-400
    `
  }, b = /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: Vr[a],
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ e.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
        }
      )
    }
  );
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: r,
      disabled: c,
      className: `
        inline-flex items-center justify-center
        rounded-lg transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
        ${Fr[a]}
        ${d[s]}
        ${o}
      `.replace(/\s+/g, " ").trim(),
      children: [
        i || b,
        l && /* @__PURE__ */ e.jsx("span", { children: n })
      ]
    }
  );
}
function Gs({
  url: r = typeof window < "u" ? window.location.href : "",
  title: s = "",
  text: a = "",
  onSuccess: l,
  onFallback: n,
  buttonProps: i = {}
}) {
  const o = async () => {
    if (typeof navigator < "u" && navigator.share)
      try {
        await navigator.share({
          title: s,
          text: a,
          url: r
        }), l == null || l();
        return;
      } catch (c) {
        c.name !== "AbortError" && console.error("Share failed:", c);
      }
    if (typeof navigator < "u" && navigator.clipboard)
      try {
        await navigator.clipboard.writeText(r), n == null || n();
        return;
      } catch (c) {
        console.error("Clipboard copy failed:", c);
      }
    n == null || n();
  };
  return /* @__PURE__ */ e.jsx(Yr, { ...i, onShare: o });
}
export {
  Es as AchievementsPanel,
  Cs as ActionButton,
  ys as ActionCard,
  Ls as ActivityFeed,
  Ds as AdaptiveNavigation,
  Ts as Autocomplete,
  Kr as Avatar,
  Xr as AvatarStack,
  Os as AviationLoader,
  Zr as Badge,
  ws as Banner,
  Ut as Button,
  Qr as Card,
  Ws as ChartContainer,
  ar as Checkbox,
  Is as CommonHeader,
  Ur as Container,
  Rs as CookieConsent,
  lr as DatePicker,
  or as DateTimePicker,
  gs as EmptyState,
  Ss as EngagementSummary,
  _s as ErrorBanner,
  fs as ErrorState,
  qr as Flex,
  Vs as Footer,
  bs as FormField,
  hs as FormSection,
  Tr as FullScreenLoader,
  Gr as Grid,
  os as H1,
  ns as H2,
  ds as H3,
  is as H4,
  es as IconButton,
  se as InfoBadge,
  js as InfoOverlay,
  nr as Input,
  xs as Lead,
  $s as LoadMoreButton,
  ae as Loader,
  ss as Loading,
  Bs as LoadingScreen,
  Fs as MetricDisplay,
  As as MinimalLoader,
  qs as MobileBottomNav,
  ms as Muted,
  ps as NavItem,
  zs as NotificationBell,
  vs as OptionsMenu,
  Us as ProgressGoal,
  Hs as RequestCard,
  Jr as Section,
  ks as SectionHeader,
  cr as Select,
  Ns as SettingCard,
  Gs as ShareActions,
  Yr as ShareButton,
  ts as Skeleton,
  us as Small,
  Ps as SmallLoader,
  rr as Spinner,
  Ys as StatBlock,
  rs as StatCard,
  as as TabNavigation,
  cs as Text,
  mr as TextArea,
  Ms as ThemeToggle,
  ls as Toggle
};
