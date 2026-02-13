import fe, { forwardRef as V, useState as W, useEffect as Ke, useRef as ge } from "react";
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
var Be;
function $t() {
  if (Be) return U;
  Be = 1;
  var r = fe, s = Symbol.for("react.element"), a = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function n(u, i, h) {
    var b, m = {}, f = null, N = null;
    h !== void 0 && (f = "" + h), i.key !== void 0 && (f = "" + i.key), i.ref !== void 0 && (N = i.ref);
    for (b in i) l.call(i, b) && !d.hasOwnProperty(b) && (m[b] = i[b]);
    if (u && u.defaultProps) for (b in i = u.defaultProps, i) m[b] === void 0 && (m[b] = i[b]);
    return { $$typeof: s, type: u, key: f, ref: N, props: m, _owner: o.current };
  }
  return U.Fragment = a, U.jsx = n, U.jsxs = n, U;
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
function Ct() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = fe, s = Symbol.for("react.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), n = Symbol.for("react.provider"), u = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), R = Symbol.iterator, y = "@@iterator";
    function _(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = R && t[R] || t[y];
      return typeof c == "function" ? c : null;
    }
    var P = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(t) {
      {
        for (var c = arguments.length, x = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
          x[g - 1] = arguments[g];
        Y("error", t, x);
      }
    }
    function Y(t, c, x) {
      {
        var g = P.ReactDebugCurrentFrame, k = g.getStackAddendum();
        k !== "" && (c += "%s", x = x.concat([k]));
        var j = x.map(function(v) {
          return String(v);
        });
        j.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, j);
      }
    }
    var z = !1, le = !1, ne = !1, D = !1, J = !1, G;
    G = Symbol.for("react.module.reference");
    function oe(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === l || t === d || J || t === o || t === h || t === b || D || t === N || z || le || ne || typeof t == "object" && t !== null && (t.$$typeof === f || t.$$typeof === m || t.$$typeof === n || t.$$typeof === u || t.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === G || t.getModuleId !== void 0));
    }
    function K(t, c, x) {
      var g = t.displayName;
      if (g)
        return g;
      var k = c.displayName || c.name || "";
      return k !== "" ? x + "(" + k + ")" : x;
    }
    function X(t) {
      return t.displayName || "Context";
    }
    function M(t) {
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
        case d:
          return "Profiler";
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            var c = t;
            return X(c) + ".Consumer";
          case n:
            var x = t;
            return X(x._context) + ".Provider";
          case i:
            return K(t, t.render, "ForwardRef");
          case m:
            var g = t.displayName || null;
            return g !== null ? g : M(t.type) || "Memo";
          case f: {
            var k = t, j = k._payload, v = k._init;
            try {
              return M(v(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, C = 0, pe, ve, ke, we, je, ye, Ne;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function Ze() {
      {
        if (C === 0) {
          pe = console.log, ve = console.info, ke = console.warn, we = console.error, je = console.group, ye = console.groupCollapsed, Ne = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: $e,
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
    function Qe() {
      {
        if (C--, C === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, t, {
              value: pe
            }),
            info: w({}, t, {
              value: ve
            }),
            warn: w({}, t, {
              value: ke
            }),
            error: w({}, t, {
              value: we
            }),
            group: w({}, t, {
              value: je
            }),
            groupCollapsed: w({}, t, {
              value: ye
            }),
            groupEnd: w({}, t, {
              value: Ne
            })
          });
        }
        C < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = P.ReactCurrentDispatcher, ie;
    function Z(t, c, x) {
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
      var et = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new et();
    }
    function Ce(t, c) {
      if (!t || ce)
        return "";
      {
        var x = Q.get(t);
        if (x !== void 0)
          return x;
      }
      var g;
      ce = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = de.current, de.current = null, Ze();
      try {
        if (c) {
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
            } catch (L) {
              g = L;
            }
            Reflect.construct(t, [], v);
          } else {
            try {
              v.call();
            } catch (L) {
              g = L;
            }
            t.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            g = L;
          }
          t();
        }
      } catch (L) {
        if (L && g && typeof L.stack == "string") {
          for (var p = L.stack.split(`
`), T = g.stack.split(`
`), E = p.length - 1, S = T.length - 1; E >= 1 && S >= 0 && p[E] !== T[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (p[E] !== T[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || p[E] !== T[S]) {
                    var O = `
` + p[E].replace(" at new ", " at ");
                    return t.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", t.displayName)), typeof t == "function" && Q.set(t, O), O;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ce = !1, de.current = j, Qe(), Error.prepareStackTrace = k;
      }
      var F = t ? t.displayName || t.name : "", I = F ? Z(F) : "";
      return typeof t == "function" && Q.set(t, I), I;
    }
    function tt(t, c, x) {
      return Ce(t, !1);
    }
    function rt(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function ee(t, c, x) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ce(t, rt(t));
      if (typeof t == "string")
        return Z(t);
      switch (t) {
        case h:
          return Z("Suspense");
        case b:
          return Z("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case i:
            return tt(t.render);
          case m:
            return ee(t.type, c, x);
          case f: {
            var g = t, k = g._payload, j = g._init;
            try {
              return ee(j(k), c, x);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Ee = {}, Re = P.ReactDebugCurrentFrame;
    function te(t) {
      if (t) {
        var c = t._owner, x = ee(t.type, t._source, c ? c.type : null);
        Re.setExtraStackFrame(x);
      } else
        Re.setExtraStackFrame(null);
    }
    function st(t, c, x, g, k) {
      {
        var j = Function.call.bind(H);
        for (var v in t)
          if (j(t, v)) {
            var p = void 0;
            try {
              if (typeof t[v] != "function") {
                var T = Error((g || "React class") + ": " + x + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              p = t[v](c, v, g, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              p = E;
            }
            p && !(p instanceof Error) && (te(k), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", x, v, typeof p), te(null)), p instanceof Error && !(p.message in Ee) && (Ee[p.message] = !0, te(k), $("Failed %s type: %s", x, p.message), te(null));
          }
      }
    }
    var at = Array.isArray;
    function ue(t) {
      return at(t);
    }
    function lt(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, x = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return x;
      }
    }
    function nt(t) {
      try {
        return Se(t), !1;
      } catch {
        return !0;
      }
    }
    function Se(t) {
      return "" + t;
    }
    function _e(t) {
      if (nt(t))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lt(t)), Se(t);
    }
    var Te = P.ReactCurrentOwner, ot = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Oe;
    function dt(t) {
      if (H.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function it(t) {
      if (H.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function ct(t, c) {
      typeof t.ref == "string" && Te.current;
    }
    function ut(t, c) {
      {
        var x = function() {
          Le || (Le = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        x.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function xt(t, c) {
      {
        var x = function() {
          Oe || (Oe = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        x.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var mt = function(t, c, x, g, k, j, v) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: x,
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
    function bt(t, c, x, g, k) {
      {
        var j, v = {}, p = null, T = null;
        x !== void 0 && (_e(x), p = "" + x), it(c) && (_e(c.key), p = "" + c.key), dt(c) && (T = c.ref, ct(c, k));
        for (j in c)
          H.call(c, j) && !ot.hasOwnProperty(j) && (v[j] = c[j]);
        if (t && t.defaultProps) {
          var E = t.defaultProps;
          for (j in E)
            v[j] === void 0 && (v[j] = E[j]);
        }
        if (p || T) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          p && ut(v, S), T && xt(v, S);
        }
        return mt(t, p, T, k, g, Te.current, v);
      }
    }
    var xe = P.ReactCurrentOwner, Me = P.ReactDebugCurrentFrame;
    function B(t) {
      if (t) {
        var c = t._owner, x = ee(t.type, t._source, c ? c.type : null);
        Me.setExtraStackFrame(x);
      } else
        Me.setExtraStackFrame(null);
    }
    var me;
    me = !1;
    function be(t) {
      return typeof t == "object" && t !== null && t.$$typeof === s;
    }
    function Pe() {
      {
        if (xe.current) {
          var t = M(xe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ht(t) {
      return "";
    }
    var ze = {};
    function gt(t) {
      {
        var c = Pe();
        if (!c) {
          var x = typeof t == "string" ? t : t.displayName || t.name;
          x && (c = `

Check the top-level render call using <` + x + ">.");
        }
        return c;
      }
    }
    function Ae(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var x = gt(c);
        if (ze[x])
          return;
        ze[x] = !0;
        var g = "";
        t && t._owner && t._owner !== xe.current && (g = " It was passed a child from " + M(t._owner.type) + "."), B(t), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, g), B(null);
      }
    }
    function De(t, c) {
      {
        if (typeof t != "object")
          return;
        if (ue(t))
          for (var x = 0; x < t.length; x++) {
            var g = t[x];
            be(g) && Ae(g, c);
          }
        else if (be(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var k = _(t);
          if (typeof k == "function" && k !== t.entries)
            for (var j = k.call(t), v; !(v = j.next()).done; )
              be(v.value) && Ae(v.value, c);
        }
      }
    }
    function ft(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var x;
        if (typeof c == "function")
          x = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === m))
          x = c.propTypes;
        else
          return;
        if (x) {
          var g = M(c);
          st(x, t.props, "prop", g, t);
        } else if (c.PropTypes !== void 0 && !me) {
          me = !0;
          var k = M(c);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(t) {
      {
        for (var c = Object.keys(t.props), x = 0; x < c.length; x++) {
          var g = c[x];
          if (g !== "children" && g !== "key") {
            B(t), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), B(null);
            break;
          }
        }
        t.ref !== null && (B(t), $("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    var Ie = {};
    function We(t, c, x, g, k, j) {
      {
        var v = oe(t);
        if (!v) {
          var p = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ht();
          T ? p += T : p += Pe();
          var E;
          t === null ? E = "null" : ue(t) ? E = "array" : t !== void 0 && t.$$typeof === s ? (E = "<" + (M(t.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : E = typeof t, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, p);
        }
        var S = bt(t, c, x, k, j);
        if (S == null)
          return S;
        if (v) {
          var O = c.children;
          if (O !== void 0)
            if (g)
              if (ue(O)) {
                for (var F = 0; F < O.length; F++)
                  De(O[F], t);
                Object.freeze && Object.freeze(O);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(O, t);
        }
        if (H.call(c, "key")) {
          var I = M(t), L = Object.keys(c).filter(function(Nt) {
            return Nt !== "key";
          }), he = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[I + he]) {
            var yt = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, I, yt, I), Ie[I + he] = !0;
          }
        }
        return t === l ? pt(S) : ft(S), S;
      }
    }
    function vt(t, c, x) {
      return We(t, c, x, !0);
    }
    function kt(t, c, x) {
      return We(t, c, x, !1);
    }
    var wt = kt, jt = vt;
    q.Fragment = l, q.jsx = wt, q.jsxs = jt;
  })()), q;
}
var Ve;
function Et() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? re.exports = $t() : re.exports = Ct()), re.exports;
}
var e = Et();
const Rt = {
  sm: "max-w-sm",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full"
}, St = {
  none: "",
  sm: "px-4 sm:px-6",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-6 sm:px-8 lg:px-12"
};
function Ir({
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
      ${Rt[s]}
      ${St[a]}
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
}, Lt = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
}, Ot = {
  none: "",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6"
};
function Wr({
  children: r,
  direction: s = "row",
  justify: a = "start",
  align: l = "start",
  wrap: o = !1,
  gap: d = "md",
  className: n = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      flex
      ${_t[s]}
      ${Tt[a]}
      ${Lt[l]}
      ${o ? "flex-wrap" : ""}
      ${Ot[d]}
      ${n}
    `.trim(),
      children: r
    }
  );
}
const Mt = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12"
}, Pt = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12"
}, zt = {
  none: "gap-0",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8"
};
function Br({
  children: r,
  cols: s = 1,
  gap: a = "md",
  responsive: l = !0,
  className: o = ""
}) {
  const d = l ? Pt[s] : Mt[s];
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      grid
      ${d}
      ${zt[a]}
      ${o}
    `.trim(),
      children: r
    }
  );
}
const At = {
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
function Fr({
  children: r,
  variant: s = "default",
  spacing: a = "md",
  className: l = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "section",
    {
      className: `
      ${At[s]}
      ${Dt[a]}
      ${l}
    `.trim(),
      children: r
    }
  );
}
const It = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, Wt = {
  circle: "rounded-full",
  square: "rounded-lg"
};
function Vr({
  src: r,
  alt: s = "",
  initials: a,
  size: l = "md",
  variant: o = "circle",
  className: d = ""
}) {
  const [n, u] = fe.useState(!1), i = a || s.split(" ").map((b) => b[0]).join("").toUpperCase().slice(0, 2), h = !r || n;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      inline-flex items-center justify-center
      bg-gray-200 dark:bg-gray-700
      text-gray-700 dark:text-gray-300
      font-medium
      overflow-hidden
      ${It[l]}
      ${Wt[o]}
      ${d}
    `.trim(),
      children: h ? /* @__PURE__ */ e.jsx("span", { children: i }) : /* @__PURE__ */ e.jsx(
        "img",
        {
          src: r,
          alt: s,
          className: "w-full h-full object-cover",
          onError: () => u(!0)
        }
      )
    }
  );
}
const Ye = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10"
}, He = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Yr = ({
  users: r,
  maxVisible: s = 3,
  size: a = "sm",
  className: l = ""
}) => {
  if (r.length === 0) return null;
  const o = r.slice(0, s), d = r.length - s;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex -space-x-1 ${l}`, children: [
    o.map((n) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${Ye[a]} rounded-full border-2 border-white dark:border-slate-800 overflow-hidden`,
        title: n.name,
        children: n.avatar ? /* @__PURE__ */ e.jsx("img", { src: n.avatar, alt: n.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ e.jsx("div", { className: `w-full h-full bg-blue-500 flex items-center justify-center ${He[a]} text-white font-medium`, children: n.name.charAt(0).toUpperCase() })
      },
      n.id
    )),
    d > 0 && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${Ye[a]} rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center`,
        children: /* @__PURE__ */ e.jsxs("span", { className: `${He[a]} font-medium text-slate-600 dark:text-slate-300`, children: [
          "+",
          d
        ] })
      }
    )
  ] });
}, Bt = {
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
function Hr({
  children: r,
  variant: s = "default",
  size: a = "md",
  icon: l,
  className: o = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "span",
    {
      className: `
      inline-flex items-center
      font-medium rounded-full
      ${Bt[s]}
      ${Ft[a]}
      ${o}
    `.trim(),
      children: [
        l && /* @__PURE__ */ e.jsx("span", { className: "mr-1 w-3 h-3", children: l }),
        r
      ]
    }
  );
}
const Vt = {
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
}, Ue = {
  primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
  danger: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600",
  success: "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600",
  glow: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
  "glow-amber": "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500"
}, Yt = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg"
};
function Ht({
  children: r,
  variant: s = "primary",
  size: a = "md",
  type: l = "button",
  onClick: o,
  disabled: d = !1,
  loading: n = !1,
  icon: u,
  iconPosition: i = "left",
  fullWidth: h = !1,
  className: b = "",
  gradient: m = !1
}) {
  const f = d || n, N = s in Ue, R = m && N ? Ue[s] : "";
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: l,
      onClick: o,
      disabled: f,
      className: `
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
        disabled:cursor-not-allowed
        ${Vt[s]}
        ${R}
        ${Yt[a]}
        ${h ? "w-full" : ""}
        ${b}
      `.trim().replace(/\s+/g, " "),
      children: [
        n && /* @__PURE__ */ e.jsxs(
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
        !n && u && i === "left" && /* @__PURE__ */ e.jsx("span", { className: "mr-2 w-4 h-4 flex items-center justify-center", children: u }),
        r,
        !n && u && i === "right" && /* @__PURE__ */ e.jsx("span", { className: "ml-2 w-4 h-4 flex items-center justify-center", children: u })
      ]
    }
  );
}
function Ur({
  children: r,
  className: s = "",
  padding: a = "md",
  variant: l = "default",
  header: o,
  footer: d,
  onClick: n,
  glow: u = "none"
}) {
  const i = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }, h = {
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
  }, b = {
    none: "",
    blue: "border-blue-500/20 shadow-glow-blue-sm hover:shadow-glow-blue",
    amber: "border-amber-500/20 shadow-glow-amber-sm hover:shadow-glow-amber"
  }, m = l === "cockpit" ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute inset-0 rounded-xl pointer-events-none",
      style: {
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.2)"
      }
    }
  ) : null, f = n ? "button" : "div";
  return /* @__PURE__ */ e.jsxs(
    f,
    {
      className: `
        rounded-xl relative
        ${h[l]} 
        ${u !== "none" ? b[u] : ""}
        ${s}
      `.trim().replace(/\s+/g, " "),
      onClick: n,
      children: [
        m,
        o && /* @__PURE__ */ e.jsx("div", { className: "px-6 py-4 border-b border-slate-200 dark:border-slate-700/50", children: o }),
        /* @__PURE__ */ e.jsx("div", { className: `${i[a]} relative z-10`, children: r }),
        d && /* @__PURE__ */ e.jsx("div", { className: "px-6 py-4 border-t border-slate-200 dark:border-slate-700/50", children: d })
      ]
    }
  );
}
const Ut = {
  sm: "p-1.5 [&>svg]:w-4 [&>svg]:h-4",
  md: "p-2 [&>svg]:w-5 [&>svg]:h-5",
  lg: "p-3 [&>svg]:w-6 [&>svg]:h-6"
}, qt = {
  default: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300",
  active: "text-blue-600 dark:text-blue-400"
};
function qr({
  icon: r,
  onClick: s,
  label: a,
  size: l = "md",
  variant: o = "default",
  className: d = "",
  disabled: n = !1
}) {
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: s,
      disabled: n,
      "aria-label": a,
      className: `transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed ${Ut[l]} ${qt[o]} ${d}`,
      children: r
    }
  );
}
const Jr = ({
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
  ] }), o = () => /* @__PURE__ */ e.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-lg p-4 animate-pulse", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2" }),
      /* @__PURE__ */ e.jsx("div", { className: "h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2" })
    ] })
  ] }) }), d = () => /* @__PURE__ */ e.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-lg p-6 animate-pulse", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full mb-4" }),
    /* @__PURE__ */ e.jsx("div", { className: "h-5 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-2" }),
    /* @__PURE__ */ e.jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-24" })
  ] }) }), n = () => {
    switch (r) {
      case "card":
        return l();
      case "list":
        return o();
      case "profile":
        return d();
      default:
        return l();
    }
  };
  return /* @__PURE__ */ e.jsx("div", { className: `space-y-4 ${a}`, children: Array.from({ length: s }).map((u, i) => /* @__PURE__ */ e.jsx("div", { children: n() }, i)) });
}, Jt = {
  blue: "from-blue-400 via-blue-500 to-blue-600",
  amber: "from-amber-400 via-orange-500 to-amber-600",
  green: "from-emerald-400 via-green-500 to-emerald-600",
  red: "from-red-400 via-rose-500 to-red-600",
  white: "from-white via-slate-100 to-white"
}, Gt = {
  blue: "shadow-glow-blue-sm",
  amber: "shadow-glow-amber-sm",
  green: "shadow-glow-green",
  red: "shadow-glow-red",
  white: ""
}, Kt = {
  blue: "text-blue-400",
  amber: "text-amber-400",
  green: "text-emerald-400",
  red: "text-red-400",
  white: "text-slate-300"
}, Xt = {
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
}, Zt = {
  up: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 10l7-7m0 0l7 7m-7-7v18" }) }),
  down: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }),
  neutral: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h14" }) })
};
function Gr({
  value: r,
  label: s,
  icon: a,
  color: l = "blue",
  size: o = "md",
  trend: d,
  unit: n,
  className: u = "",
  onClick: i
}) {
  const h = Xt[o], b = i ? "button" : "div";
  return /* @__PURE__ */ e.jsxs(
    b,
    {
      onClick: i,
      className: `
        bg-gradient-to-b from-slate-800/80 to-slate-900/95
        backdrop-blur-xl
        border border-slate-700/50
        rounded-xl
        ${h.padding}
        ${i ? "cursor-pointer hover:border-slate-600/70 hover:shadow-surface-lg" : ""}
        transition-all duration-300
        ${Gt[l]}
        ${u}
      `.trim().replace(/\s+/g, " "),
      children: [
        a && /* @__PURE__ */ e.jsx("div", { className: `${Kt[l]} ${h.icon} mb-3`, children: a }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `
            ${h.value}
            font-bold
            tracking-tight
            bg-gradient-to-r ${Jt[l]}
            bg-clip-text text-transparent
          `.trim().replace(/\s+/g, " "),
              children: r
            }
          ),
          n && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `
              ${h.unit}
              font-semibold
              text-slate-400
            `,
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 uppercase tracking-wider font-medium ${sizes.label}", children: s }),
          d && /* @__PURE__ */ e.jsxs(
            "span",
            {
              className: `
              flex items-center gap-1
              text-sm font-medium
              ${d.direction === "up" ? "text-emerald-400" : ""}
              ${d.direction === "down" ? "text-red-400" : ""}
              ${d.direction === "neutral" ? "text-slate-400" : ""}
            `,
              children: [
                Zt[d.direction],
                d.value
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Qt = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12"
}, er = {
  primary: "text-blue-600",
  secondary: "text-gray-600",
  white: "text-white"
};
function tr({
  size: r = "md",
  variant: s = "primary",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: `
        animate-spin
        ${Qt[r]}
        ${er[s]}
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
function Kr({
  message: r = "Loading...",
  size: s = "md",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center space-y-2 ${a}`,
      children: [
        /* @__PURE__ */ e.jsx(tr, { size: s }),
        r && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: r })
      ]
    }
  );
}
function Xr({
  tabs: r,
  activeTab: s,
  onTabChange: a,
  className: l = "",
  variant: o = "default"
}) {
  const d = o === "mobile";
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `border-b border-gray-200 dark:border-gray-700 ${l}`,
      children: /* @__PURE__ */ e.jsx(
        "nav",
        {
          className: d ? "flex" : "flex space-x-8",
          "aria-label": "Tabs",
          children: r.map((n) => /* @__PURE__ */ e.jsx(
            "button",
            {
              className: `
              ${d ? "flex-1 py-4 px-3" : "py-2 px-1"}
              border-b-2 font-medium text-sm transition-colors bg-transparent
              ${s === n.id ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}
            `,
              onClick: () => a(n.id),
              "aria-current": s === n.id ? "page" : void 0,
              children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
                n.icon && /* @__PURE__ */ e.jsx("span", { className: "shrink-0", children: n.icon }),
                /* @__PURE__ */ e.jsx("span", { className: d ? "hidden sm:inline" : "", children: n.label }),
                n.badge !== void 0 && /* @__PURE__ */ e.jsx(
                  "span",
                  {
                    className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s === n.id ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}`,
                    children: n.badge
                  }
                )
              ] })
            },
            n.id
          ))
        }
      )
    }
  );
}
const Zr = ({
  id: r,
  checked: s,
  onChange: a,
  disabled: l = !1,
  label: o,
  description: d,
  className: n = ""
}) => {
  const u = r || `toggle-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-start ${n}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ e.jsx(
      "input",
      {
        id: u,
        type: "checkbox",
        checked: s,
        onChange: (i) => a(i.target.checked),
        disabled: l,
        className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      }
    ) }),
    (o || d) && /* @__PURE__ */ e.jsxs("div", { className: "ml-3 text-sm", children: [
      o && /* @__PURE__ */ e.jsx(
        "label",
        {
          htmlFor: u,
          className: `font-medium text-gray-900 dark:text-white ${l ? "opacity-50" : "cursor-pointer"}`,
          children: o
        }
      ),
      d && /* @__PURE__ */ e.jsx("p", { className: `text-gray-600 dark:text-gray-400 ${l ? "opacity-50" : ""}`, children: d })
    ] })
  ] });
}, A = {
  default: "text-gray-900 dark:text-gray-100",
  muted: "text-gray-600 dark:text-gray-400",
  primary: "text-blue-600 dark:text-blue-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  error: "text-red-600 dark:text-red-400"
};
function Qr({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "h1",
    {
      className: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${A[s]} ${a}`,
      children: r
    }
  );
}
function es({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "h2",
    {
      className: `text-3xl md:text-4xl font-bold tracking-tight leading-tight ${A[s]} ${a}`,
      children: r
    }
  );
}
function ts({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("h3", { className: `text-2xl md:text-3xl font-semibold tracking-tight ${A[s]} ${a}`, children: r });
}
function rs({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("h4", { className: `text-xl md:text-2xl font-semibold ${A[s]} ${a}`, children: r });
}
function ss({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("p", { className: `text-base leading-relaxed ${A[s]} ${a}`, children: r });
}
function as({
  children: r,
  color: s = "muted",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("small", { className: `text-sm leading-normal ${A[s]} ${a}`, children: r });
}
function ls({
  children: r,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: `text-xl md:text-2xl leading-relaxed font-light ${A[s]} ${a}`,
      children: r
    }
  );
}
function ns({
  children: r,
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: `text-sm leading-normal ${A.muted} ${s}`,
      children: r
    }
  );
}
function os({
  children: r,
  label: s,
  error: a,
  hint: l,
  required: o = !1,
  className: d = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `space-y-2 ${d}`, children: [
    s && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
      s,
      o && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    r,
    l && !a && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: l }),
    a && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-600 dark:text-red-400", children: a })
  ] });
}
function ds({
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
const rr = {
  default: "text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500",
  error: "text-red-600 border-red-300 dark:border-red-600 focus:ring-red-500"
}, sr = V(
  ({
    label: r,
    description: s,
    variant: a = "default",
    className: l = "",
    disabled: o,
    id: d,
    ...n
  }, u) => {
    const i = d || `checkbox-${Math.random().toString(36).substr(2, 9)}`, h = `
    h-4 w-4 rounded border
    bg-white dark:bg-gray-800
    focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-50
    ${rr[a]}
    ${l}
  `.replace(/\s+/g, " ").trim();
    return r || s ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-start", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          ref: u,
          type: "checkbox",
          id: i,
          className: h,
          disabled: o,
          ...n
        }
      ) }),
      (r || s) && /* @__PURE__ */ e.jsxs("div", { className: "ml-3 text-sm", children: [
        r && /* @__PURE__ */ e.jsx(
          "label",
          {
            htmlFor: i,
            className: `
                  font-medium text-gray-700 dark:text-gray-300
                  ${o ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                `,
            children: r
          }
        ),
        s && /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: s })
      ] })
    ] }) : /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: u,
        type: "checkbox",
        id: i,
        className: h,
        disabled: o,
        ...n
      }
    );
  }
);
sr.displayName = "Checkbox";
const Xe = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, ar = V(
  ({ variant: r = "default", className: s = "", disabled: a, ...l }, o) => {
    const d = `
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
        ref: o,
        type: "date",
        className: `
        ${d}
        ${Xe[r]}
        ${s}
      `.replace(/\s+/g, " ").trim(),
        disabled: a,
        ...l
      }
    );
  }
);
ar.displayName = "DatePicker";
const lr = V(
  ({ variant: r = "default", className: s = "", disabled: a, ...l }, o) => {
    const d = `
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
        ref: o,
        type: "datetime-local",
        className: `
        ${d}
        ${Xe[r]}
        ${s}
      `.replace(/\s+/g, " ").trim(),
        disabled: a,
        ...l
      }
    );
  }
);
lr.displayName = "DateTimePicker";
const qe = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base"
}, Je = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, nr = V(
  ({
    size: r = "md",
    variant: s = "default",
    startIcon: a,
    endIcon: l,
    className: o = "",
    disabled: d,
    ...n
  }, u) => {
    const i = `
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
          ref: u,
          className: `
            ${i}
            ${qe[r]}
            ${Je[s]}
            ${a ? "pl-10" : ""}
            ${l ? "pr-10" : ""}
            ${o}
          `.replace(/\s+/g, " ").trim(),
          disabled: d,
          ...n
        }
      ),
      l && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "h-5 w-5 text-gray-400", children: l }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: u,
        className: `
        ${i}
        ${qe[r]}
        ${Je[s]}
        ${o}
      `.replace(/\s+/g, " ").trim(),
        disabled: d,
        ...n
      }
    );
  }
);
nr.displayName = "Input";
const or = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base"
}, dr = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, ir = V(
  ({
    size: r = "md",
    variant: s = "default",
    options: a,
    placeholder: l,
    className: o = "",
    disabled: d,
    ...n
  }, u) => {
    const i = `
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
          ref: u,
          className: `
          ${i}
          ${or[r]}
          ${dr[s]}
          ${o}
        `.replace(/\s+/g, " ").trim(),
          disabled: d,
          ...n,
          children: [
            l && /* @__PURE__ */ e.jsx("option", { value: "", children: l }),
            a.map((h) => /* @__PURE__ */ e.jsx(
              "option",
              {
                value: h.value,
                disabled: h.disabled,
                children: h.label
              },
              h.value
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
ir.displayName = "Select";
const cr = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, ur = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize"
}, xr = V(
  ({
    variant: r = "default",
    resize: s = "vertical",
    className: a = "",
    rows: l = 3,
    disabled: o,
    ...d
  }, n) => {
    const u = `
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
        ref: n,
        rows: l,
        className: `
        ${u}
        ${cr[r]}
        ${ur[s]}
        ${a}
      `.replace(/\s+/g, " ").trim(),
        disabled: o,
        ...d
      }
    );
  }
);
xr.displayName = "TextArea";
function is({
  icon: r,
  title: s,
  description: a,
  actions: l,
  className: o = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `text-center py-12 px-4 ${o}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 [&>svg]:w-8 [&>svg]:h-8", children: r }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-slate-800 dark:text-white mb-2", children: s }),
    a && /* @__PURE__ */ e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto", children: a }),
    l && /* @__PURE__ */ e.jsx("div", { className: "flex gap-3 justify-center", children: l })
  ] });
}
const mr = () => /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) });
function cs({
  title: r = "Something went wrong",
  message: s,
  icon: a,
  onRetry: l,
  retryText: o = "Try Again",
  className: d = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `text-center py-12 px-4 ${d}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-red-500 dark:text-red-400", children: a || /* @__PURE__ */ e.jsx(mr, {}) }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-red-600 dark:text-red-400 mb-2", children: r }),
    /* @__PURE__ */ e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto", children: s }),
    l && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: l,
        className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",
        children: o
      }
    )
  ] });
}
const br = {
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
}, hr = {
  desktop: "w-4 h-4",
  mobile: "w-5 h-5",
  "bottom-nav": "w-5 h-5"
}, gr = {
  desktop: "",
  mobile: "",
  "bottom-nav": "text-xs"
};
function us({
  as: r,
  href: s,
  label: a,
  icon: l,
  isActive: o = !1,
  onClick: d,
  className: n = "",
  variant: u = "desktop",
  ...i
}) {
  const h = r || "a", b = br[u], m = `${b.base} ${o ? b.active : b.inactive} ${n}`, f = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: hr[u], children: l }),
    /* @__PURE__ */ e.jsx("span", { className: gr[u], children: a })
  ] }), N = {
    className: m,
    onClick: d,
    ...i
  };
  return h === "a" ? N.href = s : (N.href = s, N.to = s), /* @__PURE__ */ e.jsx(h, { ...N, children: f });
}
const xs = ({
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
  s && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg py-1 w-36 z-10", children: r.map((o, d) => /* @__PURE__ */ e.jsx(
    "button",
    {
      className: `w-full text-left px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 ${o.variant === "danger" ? "text-red-600" : "text-slate-700 dark:text-slate-200"}`,
      onClick: () => {
        o.onClick(), a();
      },
      children: o.label
    },
    d
  )) })
] }), fr = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl"
};
function ms({
  title: r,
  subtitle: s,
  action: a,
  size: l = "md",
  className: o = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-center justify-between ${o}`, children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h2", { className: `font-semibold text-slate-800 dark:text-white ${fr[l]}`, children: r }),
      s && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 mt-1", children: s })
    ] }),
    a && /* @__PURE__ */ e.jsx("div", { children: a })
  ] });
}
const pr = {
  info: "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-b border-blue-500/30",
  success: "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-b border-emerald-500/30",
  warning: "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-b border-amber-400/30",
  error: "bg-gradient-to-r from-red-600 to-red-700 text-white border-b border-red-500/30",
  gradient: "bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white border-b border-purple-400/30"
}, vr = {
  info: "shadow-glow-blue",
  success: "shadow-lg shadow-emerald-500/20",
  warning: "shadow-glow-amber",
  error: "shadow-lg shadow-red-500/20",
  gradient: "shadow-lg shadow-purple-500/30"
}, kr = {
  top: "fixed top-0 left-0 right-0",
  bottom: "fixed bottom-0 left-0 right-0",
  inline: "relative"
}, bs = ({
  variant: r = "info",
  icon: s,
  message: a,
  actions: l,
  onDismiss: o,
  position: d = "inline",
  className: n = "",
  glow: u = !1
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: `
        ${kr[d]} 
        ${pr[r]} 
        ${u ? vr[r] : ""} 
        px-4 py-3 z-50 backdrop-blur-sm
        ${n}
      `.trim().replace(/\s+/g, " "),
    children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between max-w-6xl mx-auto gap-3", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3 flex-1 min-w-0", children: [
        s && /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 text-white/90", children: s }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 min-w-0 font-medium", children: a })
      ] }),
      (l || o) && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 flex-shrink-0", children: [
        l,
        o && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: o,
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
), wr = {
  "top-left": "absolute top-2 left-2 z-20",
  "top-right": "absolute top-2 right-2 z-20",
  "bottom-left": "absolute bottom-2 left-2 z-20",
  "bottom-right": "absolute bottom-2 right-2 z-20",
  none: ""
}, jr = {
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
}) => /* @__PURE__ */ e.jsx("div", { className: `${wr[s]} ${l}`, children: /* @__PURE__ */ e.jsx(
  "div",
  {
    className: `${jr[a]} px-2.5 py-1 rounded-md text-xs font-medium shadow-lg transition-all duration-200`,
    children: r
  }
) }), hs = ({
  topLeft: r,
  topRight: s,
  bottomLeft: a,
  bottomRight: l,
  topLeftVariant: o = "default",
  topRightVariant: d = "default",
  bottomLeftVariant: n = "default",
  bottomRightVariant: u = "default",
  interactive: i = !0,
  className: h = ""
}) => /* @__PURE__ */ e.jsxs("div", { className: `absolute inset-0 pointer-events-none ${h}`, children: [
  r && /* @__PURE__ */ e.jsx(se, { position: "top-left", variant: o, children: r }),
  s && /* @__PURE__ */ e.jsx(se, { position: "top-right", variant: d, children: s }),
  a && /* @__PURE__ */ e.jsx(se, { position: "bottom-left", variant: n, children: a }),
  l && /* @__PURE__ */ e.jsx(se, { position: "bottom-right", variant: u, children: l }),
  !i && /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute inset-0 cursor-default z-30 pointer-events-auto",
      title: "Preview - tap to expand for interaction"
    }
  )
] }), yr = {
  primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-lg",
  secondary: "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500",
  gradient: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md hover:shadow-lg"
}, Nr = {
  blue: "hover:shadow-glow-blue hover:border-blue-500/30",
  purple: "hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30",
  amber: "hover:shadow-glow-amber hover:border-amber-500/30",
  cyan: "hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/30"
}, gs = ({
  icon: r,
  iconBg: s = "bg-blue-600",
  title: a,
  description: l,
  buttonText: o,
  buttonVariant: d = "primary",
  onClick: n,
  className: u = "",
  glass: i = !1,
  glow: h = !1,
  glowColor: b = "blue"
}) => {
  const m = i ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50" : "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700/60", f = h ? Nr[b] : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `
        ${m}
        rounded-xl p-6 
        border
        cursor-pointer
        transition-all duration-300 ease-out
        hover:border-slate-600
        ${f}
        ${u}
      `.trim().replace(/\s+/g, " "),
      onClick: n,
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
              N.stopPropagation(), n();
            },
            className: `
          w-full px-4 py-2.5 
          ${yr[d]}
          rounded-lg 
          transition-all duration-200
          text-sm font-medium
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
        `,
            children: o
          }
        )
      ]
    }
  );
}, $r = {
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
}, fs = ({
  title: r,
  description: s,
  accentColor: a = "blue",
  children: l,
  className: o = "",
  glass: d = !1,
  glow: n = !1
}) => {
  const u = $r[a], i = d ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50" : "bg-slate-800 border-slate-700";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `
        ${i}
        rounded-xl shadow-lg border
        ${n ? `shadow-xl ${u.glow}` : ""}
        p-4 sm:p-6 
        transition-all duration-300
        hover:border-slate-600
        ${o}
      `.trim().replace(/\s+/g, " "),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: `border-l-4 ${u.border} pl-3 sm:pl-4 mb-4 sm:mb-6`, children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-base sm:text-lg font-semibold text-white", children: r }),
          s && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-slate-400", children: s })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: l })
      ]
    }
  );
}, Cr = {
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
function ps({
  onClick: r,
  loading: s = !1,
  children: a = "Load More",
  className: l = "",
  variant: o = "default"
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
          ${Cr[o]}
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
const Er = {
  red: "text-red-500 hover:text-red-600",
  blue: "text-blue-500 hover:text-blue-600",
  green: "text-green-500 hover:text-green-600",
  yellow: "text-yellow-500 hover:text-yellow-600",
  purple: "text-purple-500 hover:text-purple-600"
};
function vs({
  icon: r,
  label: s,
  count: a,
  active: l = !1,
  onClick: o,
  activeColor: d = "red",
  className: n = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: `flex flex-col items-center space-y-1 flex-1 py-2 transition-colors ${l ? Er[d] : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"} ${n}`,
      onClick: o,
      "aria-label": s,
      title: s,
      children: [
        r,
        a !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "text-xs font-medium", children: a })
      ]
    }
  );
}
const Rr = (r) => {
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
}, Sr = (r) => {
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
function ks({
  achievements: r,
  title: s = "🏆 Achievements",
  showViewAll: a = !0,
  onViewAll: l,
  className: o = ""
}) {
  const d = r.filter(
    (n) => n.completed || n.progress >= n.total
  ).length;
  return /* @__PURE__ */ e.jsxs("div", { className: `space-y-4 ${o}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: s }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [
        d,
        " / ",
        r.length
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "grid gap-3", children: r.map((n) => {
      const u = n.rarity || "common", i = n.completed || n.progress >= n.total;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `relative p-4 rounded-lg border transition-all hover:shadow-md ${i ? `bg-gradient-to-r ${Rr(u)} text-white ${Sr(u)}` : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"}`,
          children: [
            i && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-lg" }),
            /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${i ? "bg-white/20" : "bg-slate-100 dark:bg-slate-700"}`,
                  children: n.icon
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx(
                      "h4",
                      {
                        className: `font-medium ${i ? "text-white" : "text-slate-900 dark:text-white"}`,
                        children: n.title
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "p",
                      {
                        className: `text-sm mt-1 ${i ? "text-white/90" : "text-slate-600 dark:text-slate-400"}`,
                        children: n.description
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "span",
                    {
                      className: `px-2 py-1 text-xs font-medium rounded capitalize ${i ? "bg-white/20 text-white" : u === "legendary" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : u === "epic" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" : u === "rare" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"}`,
                      children: u
                    }
                  )
                ] }),
                !i && /* @__PURE__ */ e.jsxs("div", { className: "mt-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between text-sm mb-2", children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "text-slate-600 dark:text-slate-400", children: [
                      "Progress:",
                      " ",
                      Math.round(n.progress / n.total * 100),
                      "%"
                    ] }),
                    /* @__PURE__ */ e.jsxs("span", { className: "font-medium text-slate-700 dark:text-slate-300", children: [
                      n.progress,
                      " / ",
                      n.total
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { className: "w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2", children: /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: "bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out",
                      style: {
                        width: `${Math.min(100, n.progress / n.total * 100)}%`
                      }
                    }
                  ) })
                ] }),
                i && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-white/80 mt-2", children: "✅ Completed" })
              ] })
            ] }) })
          ]
        },
        n.id
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
function ws({
  items: r = [],
  emptyIcon: s,
  emptyTitle: a = "No items to show",
  emptyDescription: l = "Be the first to add something to the feed",
  emptyActionText: o = "Add Item",
  onEmptyAction: d,
  showLoadMore: n = !1,
  loadMoreText: u = "Load More",
  onLoadMore: i,
  header: h,
  className: b = "",
  renderItem: m
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `max-w-4xl mx-auto p-4 lg:pt-16 pb-20 lg:pb-6 ${b}`, children: [
    h,
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
      d && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: d,
          className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
          children: o
        }
      )
    ] }) : r.map((f) => /* @__PURE__ */ e.jsx("div", { children: m ? m(f) : f.content }, f.id)) }),
    r.length > 0 && n && /* @__PURE__ */ e.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ e.jsx(Ht, { variant: "secondary", onClick: i, children: u }) })
  ] });
}
function js({
  totalReactions: r,
  totalComments: s,
  userReacted: a = !1,
  reactionUsers: l = [],
  reactionLabel: o = "kudos",
  commentLabel: d = "comment",
  className: n = ""
}) {
  if (r === 0 && s === 0)
    return null;
  const u = () => {
    const i = [];
    if (r > 0 && (a ? r === 1 ? i.push(`You gave ${o}`) : i.push(
      `You and ${r - 1} ${r === 2 ? "other" : "others"} gave ${o}`
    ) : i.push(
      `${r} ${r === 1 ? "person" : "people"} gave ${o}`
    )), s > 0) {
      const h = s === 1 ? d : `${d}s`;
      i.push(`${s} ${h}`);
    }
    return i.join(" • ");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `px-6 py-3 flex items-center space-x-3 ${n}`, children: [
    l.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex -space-x-1", children: [
      l.slice(0, 3).map((i, h) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden",
          children: i.avatar ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: i.avatar,
              alt: i.name,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-xs font-medium text-slate-600 dark:text-slate-300", children: i.name.charAt(0).toUpperCase() }) })
        },
        h
      )),
      l.length > 3 && /* @__PURE__ */ e.jsx("div", { className: "w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("span", { className: "text-xs font-medium text-slate-600 dark:text-slate-300", children: [
        "+",
        l.length - 3
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 flex-1", children: u() })
  ] });
}
function ys({
  storageKey: r = "cookie-consent",
  privacyUrl: s = "/privacy",
  message: a = "We use cookies to improve your experience and for analytics purposes.",
  learnMoreText: l = "Learn More",
  acceptText: o = "Accept Cookies",
  onAccept: d,
  onLearnMore: n,
  className: u = ""
}) {
  const [i, h] = W(!1);
  Ke(() => {
    localStorage.getItem(r) || h(!0);
  }, [r]);
  const b = () => {
    localStorage.setItem(r, "accepted"), h(!1), d == null || d();
  }, m = () => {
    localStorage.setItem(r, "learn-more"), h(!1), n == null || n();
  };
  return i ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg z-50 ${u}`,
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
              onClick: m,
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
              onClick: m,
              className: "px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-center",
              children: l
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: b,
              className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
              children: o
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
function Ns({
  error: r,
  variant: s = "error",
  dismissible: a = !1,
  onDismiss: l,
  className: o = "",
  children: d
}) {
  if (!r && !d) return null;
  const n = _r[s];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `${n.bg} border ${n.border} ${n.text} px-4 py-3 rounded flex items-start gap-3 ${o}`,
      role: "alert",
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "flex-shrink-0", children: n.icon }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: d || r }),
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
const $s = ({
  label: r,
  placeholder: s = "Type to search...",
  value: a,
  onSearch: l,
  onSelect: o,
  onClear: d,
  error: n,
  disabled: u = !1,
  minSearchLength: i = 2,
  debounceMs: h = 300,
  className: b = ""
}) => {
  const [m, f] = W(!1), [N, R] = W(""), [y, _] = W([]), [P, $] = W(!1), [Y, z] = W(-1), le = ge(null), ne = ge(null), D = ge();
  Ke(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const J = async (w) => {
    if (w.length < i) {
      _([]), $(!1);
      return;
    }
    try {
      $(!0);
      const C = await l(w);
      _(C);
    } catch (C) {
      console.error("Search error:", C), _([]);
    } finally {
      $(!1);
    }
  }, G = (w) => {
    D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      J(w);
    }, h);
  }, oe = (w) => {
    const C = w.target.value;
    R(C), z(-1), C.length >= i ? ($(!0), G(C)) : (_([]), $(!1));
  }, K = (w) => {
    o(w), R(""), f(!1), _([]), z(-1);
  }, X = () => {
    R(""), f(!1), _([]), z(-1), d && d();
  }, M = (w) => {
    if (!m || y.length === 0) {
      (w.key === "ArrowDown" || w.key === "Enter") && (f(!0), N.length >= i && J(N));
      return;
    }
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), z((C) => C < y.length - 1 ? C + 1 : 0);
        break;
      case "ArrowUp":
        w.preventDefault(), z((C) => C > 0 ? C - 1 : y.length - 1);
        break;
      case "Enter":
        w.preventDefault(), Y >= 0 && K(y[Y]);
        break;
      case "Escape":
        f(!1), z(-1);
        break;
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `relative ${b}`, children: [
    /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: r }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      a && !m ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 min-h-[42px]", children: [
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
              disabled: u,
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
              disabled: u,
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
              onChange: oe,
              onKeyDown: M,
              onFocus: () => f(!0),
              placeholder: s,
              disabled: u,
              className: `w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 ${n ? "border-red-300 dark:border-red-700" : "border-gray-300 dark:border-gray-600"} ${u ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"} text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400`
            }
          ),
          P && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 dark:border-blue-400" }) })
        ] })
      ),
      m && y.length > 0 && /* @__PURE__ */ e.jsx(
        "ul",
        {
          ref: ne,
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
      m && !P && N.length >= i && y.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg p-3", children: /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: "No results found" }) })
    ] }),
    n && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: n })
  ] });
};
function Cs({
  themePreference: r,
  resolvedTheme: s,
  onThemeChange: a,
  className: l = ""
}) {
  const o = () => {
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
  }, d = () => {
    a(o());
  }, n = () => r === "system" ? /* @__PURE__ */ e.jsx(
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
  ), u = () => {
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
      onClick: d,
      className: `p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${l}`,
      "aria-label": u(),
      title: `Current: ${r}${r === "system" ? ` (${s})` : ""}`,
      children: n()
    }
  );
}
function Es({
  notifications: r,
  unreadCount: s,
  onMarkAsRead: a,
  onMarkAllAsRead: l,
  onDismiss: o,
  onViewAll: d,
  className: n = ""
}) {
  const [u, i] = W(!1), h = (m) => {
    const f = new Date(m), R = Math.floor(
      ((/* @__PURE__ */ new Date()).getTime() - f.getTime()) / (1e3 * 60 * 60)
    );
    return R < 1 ? "Just now" : R < 24 ? `${R}h ago` : R < 48 ? "Yesterday" : f.toLocaleDateString();
  }, b = (m) => {
    switch (m) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-900/20 dark:border-red-800";
      case "medium":
        return "text-orange-600 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-900/20 dark:border-orange-800";
      default:
        return "text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-900/20 dark:border-blue-800";
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => i(!u),
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
    u && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "fixed inset-0 z-10",
          onClick: () => i(!1)
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
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-1", children: r.map((m) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer ${m.isRead ? "" : "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500"}`,
            onClick: () => a(m.id),
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm border ${b(
                    m.priority
                  )}`,
                  children: m.icon || "📢"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ e.jsx(
                    "p",
                    {
                      className: `text-sm font-medium text-slate-900 dark:text-white ${m.isRead ? "" : "font-semibold"}`,
                      children: m.title
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: (f) => {
                        f.stopPropagation(), o(m.id);
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
                /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mt-1", children: m.message }),
                /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-500 mt-2", children: h(m.timestamp) })
              ] })
            ] })
          },
          m.id
        )) }) }),
        r.length > 0 && d && /* @__PURE__ */ e.jsx("div", { className: "p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              i(!1), d();
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
  className: o = "",
  showDots: d = !0
}) {
  const n = () => {
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
  }, u = () => {
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
  }, i = n(), h = u(), b = a === "aviation" ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${i.spinner} ${h.spinner} rounded-full animate-spin mx-auto shadow-lg bg-gradient-to-br from-slate-800 to-slate-700`
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
      className: `${i.spinner} ${h.spinner} rounded-full animate-spin mx-auto`
    }
  ), m = d && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center space-x-2 mt-2", children: [
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
  ] }), f = /* @__PURE__ */ e.jsxs("div", { className: `text-center ${i.container}`, children: [
    b,
    r && /* @__PURE__ */ e.jsx(
      "p",
      {
        className: `${i.text} ${h.text} font-light tracking-wide m-0`,
        children: r
      }
    ),
    m
  ] });
  return l ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center ${h.background} ${o}`,
      children: f
    }
  ) : /* @__PURE__ */ e.jsx("div", { className: `flex items-center justify-center p-8 ${o}`, children: f });
}
const Rs = (r) => /* @__PURE__ */ e.jsx(ae, { ...r, fullscreen: !0 }), Ss = (r) => /* @__PURE__ */ e.jsx(ae, { ...r, variant: "aviation" }), _s = (r) => /* @__PURE__ */ e.jsx(ae, { ...r, variant: "minimal" }), Ts = (r) => /* @__PURE__ */ e.jsx(ae, { ...r, size: "sm" }), Tr = ({ icon: r, isActive: s }) => {
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
}, Lr = ({ text: r = "App" }) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) }) }),
  /* @__PURE__ */ e.jsx("h1", { className: "text-xl font-light text-slate-800 dark:text-white", children: r })
] }), Or = () => /* @__PURE__ */ e.jsx("div", { className: "animate-pulse w-24 h-8 bg-slate-200 dark:bg-slate-700 rounded" });
function Ls({
  items: r,
  currentPath: s,
  isAuthenticated: a = !1,
  isLoading: l = !1,
  brand: o,
  brandText: d = "App",
  rightContent: n,
  onNavigate: u,
  className: i = ""
}) {
  const h = (b, m) => {
    u && (b.preventDefault(), u(m));
  };
  return /* @__PURE__ */ e.jsx("nav", { className: `bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm ${i}`, children: /* @__PURE__ */ e.jsx("div", { className: "w-full px-6 lg:px-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between h-16", children: [
    /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "/",
        onClick: (b) => h(b, "/"),
        className: "flex items-center",
        children: o || /* @__PURE__ */ e.jsx(Lr, { text: d })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "hidden md:flex items-center space-x-8", children: r.map((b) => {
      const m = b.isActive ?? s === b.href;
      return /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: b.href,
          onClick: (f) => h(f, b.href),
          className: `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${m ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"}`,
          children: [
            b.icon && /* @__PURE__ */ e.jsx(Tr, { icon: b.icon, isActive: m }),
            b.name
          ]
        },
        b.href
      );
    }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: l ? /* @__PURE__ */ e.jsx(Or, {}) : n })
  ] }) }) });
}
function Os({
  title: r,
  children: s,
  className: a = "",
  subtitle: l,
  variant: o = "default"
}) {
  const d = {
    default: "bg-white dark:bg-slate-800 shadow-sm",
    glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-slate-700/50",
    gradient: "bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 shadow-lg"
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `rounded-xl p-4 sm:p-6 ${d[o]} ${a}`,
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
function Ms({
  title: r,
  subtitle: s,
  action: a,
  user: l,
  showGreeting: o = !0,
  className: d = "",
  leading: n,
  position: u = "fixed"
}) {
  var m, f, N;
  const i = () => {
    const R = (/* @__PURE__ */ new Date()).getHours();
    return R < 12 ? "Good morning" : R < 17 ? "Good afternoon" : "Good evening";
  }, h = (R) => R.split(" ").map((y) => y.charAt(0).toUpperCase()).join("").slice(0, 2), b = u === "fixed" ? "fixed top-0 left-0 right-0 z-50" : "relative";
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `${b} bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 px-3 py-2 ${d}`,
      children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-4xl mx-auto flex items-center justify-between", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 min-w-0 flex-1", children: [
          n || l && /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0 ring-2 ring-cyan-500/20", children: l.avatarUrl ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: l.avatarUrl,
              alt: l.displayName || l.email,
              className: "w-8 h-8 rounded-full object-cover"
            }
          ) : /* @__PURE__ */ e.jsx("span", { className: "text-white font-semibold text-xs", children: l.displayName ? h(l.displayName) : ((m = l.email) == null ? void 0 : m.charAt(0).toUpperCase()) || "U" }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:space-x-2", children: [
              /* @__PURE__ */ e.jsx("h1", { className: "text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate", children: r }),
              l && o && /* @__PURE__ */ e.jsxs("span", { className: "text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate", children: [
                i(),
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
function Ps({
  brandName: r = "Wayward UI",
  tagline: s,
  brandIcon: a,
  links: l = [],
  copyright: o,
  className: d = "",
  variant: n = "default"
}) {
  const u = {
    default: "bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700",
    glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-t border-white/20 dark:border-slate-700/50",
    minimal: "bg-transparent border-t border-slate-200 dark:border-slate-700"
  }, i = /* @__PURE__ */ e.jsx(
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
  ), h = (b, m) => {
    b.onClick && (m.preventDefault(), b.onClick());
  };
  return /* @__PURE__ */ e.jsx("footer", { className: `mt-8 ${u[n]} ${d}`, children: /* @__PURE__ */ e.jsx("div", { className: "container mx-auto px-4 py-6 max-w-7xl", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 mb-4 md:mb-0", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-6 h-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25", children: a || i }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-medium text-slate-800 dark:text-white", children: r }),
        s && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: s })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-col sm:flex-row sm:items-center gap-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
      l.map((b, m) => /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ e.jsx(
          "a",
          {
            href: b.href || "#",
            onClick: (f) => h(b, f),
            className: "text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors",
            children: b.label
          }
        ),
        m < l.length - 1 && /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: "|" })
      ] }, m)),
      l.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: "|" }),
      /* @__PURE__ */ e.jsx("span", { className: "text-slate-500 dark:text-slate-400", children: o || `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${r}` })
    ] }) })
  ] }) }) });
}
const Mr = {
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
}, Ge = {
  default: "text-slate-800 dark:text-white",
  success: "text-emerald-600 dark:text-emerald-400",
  warning: "text-amber-600 dark:text-amber-400",
  error: "text-red-600 dark:text-red-400",
  accent: "text-cyan-600 dark:text-cyan-400"
};
function zs({
  label: r,
  value: s,
  icon: a,
  direction: l = "vertical",
  size: o = "md",
  className: d = "",
  valueColor: n = "default",
  unit: u
}) {
  const i = Mr[o];
  return l === "horizontal" ? /* @__PURE__ */ e.jsxs("div", { className: `flex items-center justify-between ${d}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      a && /* @__PURE__ */ e.jsx("span", { className: `text-slate-400 ${i.icon}`, children: a }),
      /* @__PURE__ */ e.jsx("span", { className: `text-slate-500 dark:text-slate-400 ${i.label}`, children: r })
    ] }),
    /* @__PURE__ */ e.jsxs("span", { className: `${Ge[n]} ${i.value}`, children: [
      s,
      u && /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 dark:text-slate-500 ml-1 font-normal text-sm", children: u })
    ] })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: d, children: [
    /* @__PURE__ */ e.jsx("p", { className: `text-slate-500 dark:text-slate-400 uppercase tracking-wide ${i.label}`, children: r }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      a && /* @__PURE__ */ e.jsx("span", { className: `text-slate-400 ${i.icon}`, children: a }),
      /* @__PURE__ */ e.jsxs("p", { className: `${Ge[n]} ${i.value}`, children: [
        s,
        u && /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 dark:text-slate-500 ml-1 font-normal text-sm", children: u })
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
}, zr = {
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
}, Ar = {
  default: "bg-white dark:bg-slate-800 shadow-sm",
  glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-slate-700/50",
  gradient: "bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 shadow-lg",
  outline: "bg-transparent border-2 border-slate-200 dark:border-slate-700"
};
function As({
  label: r,
  value: s,
  icon: a,
  size: l = "md",
  className: o = "",
  variant: d = "default",
  iconColor: n = "cyan"
}) {
  const u = Pr[l], i = zr[n];
  return /* @__PURE__ */ e.jsx("div", { className: `rounded-xl ${u.padding} ${Ar[d]} ${o}`, children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("p", { className: `text-slate-500 dark:text-slate-400 font-medium ${u.label}`, children: r }),
      /* @__PURE__ */ e.jsx("p", { className: `text-slate-800 dark:text-white ${u.value}`, children: s })
    ] }),
    a && /* @__PURE__ */ e.jsx("div", { className: `${u.icon} ${i.bg} rounded-lg flex items-center justify-center`, children: /* @__PURE__ */ e.jsx("span", { className: `${i.text} ${u.iconInner}`, children: a }) })
  ] }) });
}
function Ds({
  userName: r,
  userEmail: s,
  message: a,
  requestedAt: l,
  respondedAt: o,
  expiresAt: d,
  status: n,
  actions: u = [],
  processing: i = !1,
  className: h = "",
  variant: b = "default"
}) {
  const m = (y) => new Date(y).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }), f = () => {
    const y = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    switch (n) {
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
    const _ = "flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed";
    switch (y) {
      case "approve":
        return `${_} bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/25`;
      case "reject":
        return `${_} bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/25`;
      case "cancel":
        return `${_} bg-slate-600 hover:bg-slate-700 text-white shadow-lg shadow-slate-500/25`;
      default:
        return `${_} bg-slate-600 hover:bg-slate-700 text-white`;
    }
  }, R = {
    default: "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600",
    glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg"
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `rounded-xl p-4 ${R[b]} ${h}`, children: [
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
        m(l)
      ] }),
      a && /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-slate-700 dark:text-slate-300 italic bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-600", children: [
        "“",
        a,
        "”"
      ] }),
      o && /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: [
        "Responded: ",
        m(o)
      ] }),
      d && n === "pending" && /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: [
        "Expires: ",
        m(d)
      ] })
    ] }),
    u.length > 0 && n === "pending" && /* @__PURE__ */ e.jsx("div", { className: `flex ${u.length === 1 ? "" : "gap-3"}`, children: u.map((y, _) => /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: y.onClick,
        disabled: y.disabled || i,
        className: N(y.variant),
        children: i ? /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ e.jsxs("svg", { className: "animate-spin h-4 w-4", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ e.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ e.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
          ] }),
          "Processing..."
        ] }) : y.label
      },
      _
    )) })
  ] });
}
export {
  ks as AchievementsPanel,
  vs as ActionButton,
  gs as ActionCard,
  ws as ActivityFeed,
  Ls as AdaptiveNavigation,
  $s as Autocomplete,
  Vr as Avatar,
  Yr as AvatarStack,
  Ss as AviationLoader,
  Hr as Badge,
  bs as Banner,
  Ht as Button,
  Ur as Card,
  Os as ChartContainer,
  sr as Checkbox,
  Ms as CommonHeader,
  Ir as Container,
  ys as CookieConsent,
  ar as DatePicker,
  lr as DateTimePicker,
  is as EmptyState,
  js as EngagementSummary,
  Ns as ErrorBanner,
  cs as ErrorState,
  Wr as Flex,
  Ps as Footer,
  os as FormField,
  ds as FormSection,
  Rs as FullScreenLoader,
  Br as Grid,
  Qr as H1,
  es as H2,
  ts as H3,
  rs as H4,
  qr as IconButton,
  se as InfoBadge,
  hs as InfoOverlay,
  nr as Input,
  ls as Lead,
  ps as LoadMoreButton,
  ae as Loader,
  Kr as Loading,
  zs as MetricDisplay,
  _s as MinimalLoader,
  ns as Muted,
  us as NavItem,
  Es as NotificationBell,
  xs as OptionsMenu,
  Ds as RequestCard,
  Fr as Section,
  ms as SectionHeader,
  ir as Select,
  fs as SettingCard,
  Jr as Skeleton,
  as as Small,
  Ts as SmallLoader,
  tr as Spinner,
  As as StatBlock,
  Gr as StatCard,
  Xr as TabNavigation,
  ss as Text,
  xr as TextArea,
  Cs as ThemeToggle,
  Zr as Toggle
};
