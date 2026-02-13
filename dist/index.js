import fe, { forwardRef as V, useState as I, useRef as he, useEffect as jr } from "react";
var te = { exports: {} }, U = {};
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
function Nr() {
  if (Be) return U;
  Be = 1;
  var a = fe, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, n = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(x, u, g) {
    var b, h = {}, v = null, E = null;
    g !== void 0 && (v = "" + g), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (E = u.ref);
    for (b in u) l.call(u, b) && !i.hasOwnProperty(b) && (h[b] = u[b]);
    if (x && x.defaultProps) for (b in u = x.defaultProps, u) h[b] === void 0 && (h[b] = u[b]);
    return { $$typeof: t, type: x, key: v, ref: E, props: h, _owner: n.current };
  }
  return U.Fragment = s, U.jsx = d, U.jsxs = d, U;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function $r() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && (function() {
    var a = fe, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), x = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), S = Symbol.iterator, O = "@@iterator";
    function P(r) {
      if (r === null || typeof r != "object")
        return null;
      var o = S && r[S] || r[O];
      return typeof o == "function" ? o : null;
    }
    var M = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(r) {
      {
        for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), m = 1; m < o; m++)
          c[m - 1] = arguments[m];
        Y("error", r, c);
      }
    }
    function Y(r, o, c) {
      {
        var m = M.ReactDebugCurrentFrame, w = m.getStackAddendum();
        w !== "" && (o += "%s", c = c.concat([w]));
        var y = c.map(function(p) {
          return String(p);
        });
        y.unshift("Warning: " + o), Function.prototype.apply.call(console[r], console, y);
      }
    }
    var A = !1, le = !1, oe = !1, D = !1, q = !1, K;
    K = Symbol.for("react.module.reference");
    function ne(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === l || r === i || q || r === n || r === g || r === b || D || r === E || A || le || oe || typeof r == "object" && r !== null && (r.$$typeof === v || r.$$typeof === h || r.$$typeof === d || r.$$typeof === x || r.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === K || r.getModuleId !== void 0));
    }
    function G(r, o, c) {
      var m = r.displayName;
      if (m)
        return m;
      var w = o.displayName || o.name || "";
      return w !== "" ? c + "(" + w + ")" : c;
    }
    function X(r) {
      return r.displayName || "Context";
    }
    function L(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case l:
          return "Fragment";
        case s:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case g:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case x:
            var o = r;
            return X(o) + ".Consumer";
          case d:
            var c = r;
            return X(c._context) + ".Provider";
          case u:
            return G(r, r.render, "ForwardRef");
          case h:
            var m = r.displayName || null;
            return m !== null ? m : L(r.type) || "Memo";
          case v: {
            var w = r, y = w._payload, p = w._init;
            try {
              return L(p(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, N = 0, pe, ve, we, ke, ye, je, Ne;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function Ge() {
      {
        if (N === 0) {
          pe = console.log, ve = console.info, we = console.warn, ke = console.error, ye = console.group, je = console.groupCollapsed, Ne = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        N++;
      }
    }
    function Xe() {
      {
        if (N--, N === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, r, {
              value: pe
            }),
            info: k({}, r, {
              value: ve
            }),
            warn: k({}, r, {
              value: we
            }),
            error: k({}, r, {
              value: ke
            }),
            group: k({}, r, {
              value: ye
            }),
            groupCollapsed: k({}, r, {
              value: je
            }),
            groupEnd: k({}, r, {
              value: Ne
            })
          });
        }
        N < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = M.ReactCurrentDispatcher, de;
    function Z(r, o, c) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (w) {
            var m = w.stack.trim().match(/\n( *(at )?)/);
            de = m && m[1] || "";
          }
        return `
` + de + r;
      }
    }
    var ce = !1, Q;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Ze();
    }
    function Ce(r, o) {
      if (!r || ce)
        return "";
      {
        var c = Q.get(r);
        if (c !== void 0)
          return c;
      }
      var m;
      ce = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ie.current, ie.current = null, Ge();
      try {
        if (o) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (_) {
              m = _;
            }
            Reflect.construct(r, [], p);
          } else {
            try {
              p.call();
            } catch (_) {
              m = _;
            }
            r.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            m = _;
          }
          r();
        }
      } catch (_) {
        if (_ && m && typeof _.stack == "string") {
          for (var f = _.stack.split(`
`), R = m.stack.split(`
`), $ = f.length - 1, C = R.length - 1; $ >= 1 && C >= 0 && f[$] !== R[C]; )
            C--;
          for (; $ >= 1 && C >= 0; $--, C--)
            if (f[$] !== R[C]) {
              if ($ !== 1 || C !== 1)
                do
                  if ($--, C--, C < 0 || f[$] !== R[C]) {
                    var T = `
` + f[$].replace(" at new ", " at ");
                    return r.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", r.displayName)), typeof r == "function" && Q.set(r, T), T;
                  }
                while ($ >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ce = !1, ie.current = y, Xe(), Error.prepareStackTrace = w;
      }
      var B = r ? r.displayName || r.name : "", F = B ? Z(B) : "";
      return typeof r == "function" && Q.set(r, F), F;
    }
    function Qe(r, o, c) {
      return Ce(r, !1);
    }
    function er(r) {
      var o = r.prototype;
      return !!(o && o.isReactComponent);
    }
    function ee(r, o, c) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ce(r, er(r));
      if (typeof r == "string")
        return Z(r);
      switch (r) {
        case g:
          return Z("Suspense");
        case b:
          return Z("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case u:
            return Qe(r.render);
          case h:
            return ee(r.type, o, c);
          case v: {
            var m = r, w = m._payload, y = m._init;
            try {
              return ee(y(w), o, c);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Ee = {}, Re = M.ReactDebugCurrentFrame;
    function re(r) {
      if (r) {
        var o = r._owner, c = ee(r.type, r._source, o ? o.type : null);
        Re.setExtraStackFrame(c);
      } else
        Re.setExtraStackFrame(null);
    }
    function rr(r, o, c, m, w) {
      {
        var y = Function.call.bind(H);
        for (var p in r)
          if (y(r, p)) {
            var f = void 0;
            try {
              if (typeof r[p] != "function") {
                var R = Error((m || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              f = r[p](o, p, m, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              f = $;
            }
            f && !(f instanceof Error) && (re(w), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", c, p, typeof f), re(null)), f instanceof Error && !(f.message in Ee) && (Ee[f.message] = !0, re(w), j("Failed %s type: %s", c, f.message), re(null));
          }
      }
    }
    var tr = Array.isArray;
    function ue(r) {
      return tr(r);
    }
    function ar(r) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, c = o && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return c;
      }
    }
    function sr(r) {
      try {
        return _e(r), !1;
      } catch {
        return !0;
      }
    }
    function _e(r) {
      return "" + r;
    }
    function Se(r) {
      if (sr(r))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(r)), _e(r);
    }
    var Te = M.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Oe;
    function or(r) {
      if (H.call(r, "ref")) {
        var o = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function nr(r) {
      if (H.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function ir(r, o) {
      typeof r.ref == "string" && Te.current;
    }
    function dr(r, o) {
      {
        var c = function() {
          Le || (Le = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function cr(r, o) {
      {
        var c = function() {
          Oe || (Oe = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var ur = function(r, o, c, m, w, y, p) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: o,
        ref: c,
        props: p,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function xr(r, o, c, m, w) {
      {
        var y, p = {}, f = null, R = null;
        c !== void 0 && (Se(c), f = "" + c), nr(o) && (Se(o.key), f = "" + o.key), or(o) && (R = o.ref, ir(o, w));
        for (y in o)
          H.call(o, y) && !lr.hasOwnProperty(y) && (p[y] = o[y]);
        if (r && r.defaultProps) {
          var $ = r.defaultProps;
          for (y in $)
            p[y] === void 0 && (p[y] = $[y]);
        }
        if (f || R) {
          var C = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          f && dr(p, C), R && cr(p, C);
        }
        return ur(r, f, R, w, m, Te.current, p);
      }
    }
    var xe = M.ReactCurrentOwner, Me = M.ReactDebugCurrentFrame;
    function W(r) {
      if (r) {
        var o = r._owner, c = ee(r.type, r._source, o ? o.type : null);
        Me.setExtraStackFrame(c);
      } else
        Me.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function me(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Pe() {
      {
        if (xe.current) {
          var r = L(xe.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function br(r) {
      return "";
    }
    var Ae = {};
    function mr(r) {
      {
        var o = Pe();
        if (!o) {
          var c = typeof r == "string" ? r : r.displayName || r.name;
          c && (o = `

Check the top-level render call using <` + c + ">.");
        }
        return o;
      }
    }
    function ze(r, o) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var c = mr(o);
        if (Ae[c])
          return;
        Ae[c] = !0;
        var m = "";
        r && r._owner && r._owner !== xe.current && (m = " It was passed a child from " + L(r._owner.type) + "."), W(r), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, m), W(null);
      }
    }
    function De(r, o) {
      {
        if (typeof r != "object")
          return;
        if (ue(r))
          for (var c = 0; c < r.length; c++) {
            var m = r[c];
            me(m) && ze(m, o);
          }
        else if (me(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var w = P(r);
          if (typeof w == "function" && w !== r.entries)
            for (var y = w.call(r), p; !(p = y.next()).done; )
              me(p.value) && ze(p.value, o);
        }
      }
    }
    function gr(r) {
      {
        var o = r.type;
        if (o == null || typeof o == "string")
          return;
        var c;
        if (typeof o == "function")
          c = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === h))
          c = o.propTypes;
        else
          return;
        if (c) {
          var m = L(o);
          rr(c, r.props, "prop", m, r);
        } else if (o.PropTypes !== void 0 && !be) {
          be = !0;
          var w = L(o);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(r) {
      {
        for (var o = Object.keys(r.props), c = 0; c < o.length; c++) {
          var m = o[c];
          if (m !== "children" && m !== "key") {
            W(r), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), W(null);
            break;
          }
        }
        r.ref !== null && (W(r), j("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Fe = {};
    function We(r, o, c, m, w, y) {
      {
        var p = ne(r);
        if (!p) {
          var f = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = br();
          R ? f += R : f += Pe();
          var $;
          r === null ? $ = "null" : ue(r) ? $ = "array" : r !== void 0 && r.$$typeof === t ? ($ = "<" + (L(r.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof r, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, f);
        }
        var C = xr(r, o, c, w, y);
        if (C == null)
          return C;
        if (p) {
          var T = o.children;
          if (T !== void 0)
            if (m)
              if (ue(T)) {
                for (var B = 0; B < T.length; B++)
                  De(T[B], r);
                Object.freeze && Object.freeze(T);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(T, r);
        }
        if (H.call(o, "key")) {
          var F = L(r), _ = Object.keys(o).filter(function(yr) {
            return yr !== "key";
          }), ge = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fe[F + ge]) {
            var kr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ge, F, kr, F), Fe[F + ge] = !0;
          }
        }
        return r === l ? hr(C) : gr(C), C;
      }
    }
    function fr(r, o, c) {
      return We(r, o, c, !0);
    }
    function pr(r, o, c) {
      return We(r, o, c, !1);
    }
    var vr = pr, wr = fr;
    J.Fragment = l, J.jsx = vr, J.jsxs = wr;
  })()), J;
}
var Ve;
function Cr() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? te.exports = Nr() : te.exports = $r()), te.exports;
}
var e = Cr();
const Er = {
  sm: "max-w-sm",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full"
}, Rr = {
  none: "",
  sm: "px-4 sm:px-6",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-6 sm:px-8 lg:px-12"
};
function _t({
  children: a,
  size: t = "md",
  padding: s = "md",
  className: l = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      mx-auto
      ${Er[t]}
      ${Rr[s]}
      ${l}
    `.trim(),
      children: a
    }
  );
}
const _r = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse"
}, Sr = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, Tr = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
}, Lr = {
  none: "",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6"
};
function St({
  children: a,
  direction: t = "row",
  justify: s = "start",
  align: l = "start",
  wrap: n = !1,
  gap: i = "md",
  className: d = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      flex
      ${_r[t]}
      ${Sr[s]}
      ${Tr[l]}
      ${n ? "flex-wrap" : ""}
      ${Lr[i]}
      ${d}
    `.trim(),
      children: a
    }
  );
}
const Or = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12"
}, Mr = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12"
}, Pr = {
  none: "gap-0",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8"
};
function Tt({
  children: a,
  cols: t = 1,
  gap: s = "md",
  responsive: l = !0,
  className: n = ""
}) {
  const i = l ? Mr[t] : Or[t];
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      grid
      ${i}
      ${Pr[s]}
      ${n}
    `.trim(),
      children: a
    }
  );
}
const Ar = {
  default: "bg-white dark:bg-gray-800",
  card: "bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700",
  hero: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
  sidebar: "bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700"
}, zr = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-12"
};
function Lt({
  children: a,
  variant: t = "default",
  spacing: s = "md",
  className: l = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "section",
    {
      className: `
      ${Ar[t]}
      ${zr[s]}
      ${l}
    `.trim(),
      children: a
    }
  );
}
const Dr = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, Fr = {
  circle: "rounded-full",
  square: "rounded-lg"
};
function Ot({
  src: a,
  alt: t = "",
  initials: s,
  size: l = "md",
  variant: n = "circle",
  className: i = ""
}) {
  const [d, x] = fe.useState(!1), u = s || t.split(" ").map((b) => b[0]).join("").toUpperCase().slice(0, 2), g = !a || d;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      inline-flex items-center justify-center
      bg-gray-200 dark:bg-gray-700
      text-gray-700 dark:text-gray-300
      font-medium
      overflow-hidden
      ${Dr[l]}
      ${Fr[n]}
      ${i}
    `.trim(),
      children: g ? /* @__PURE__ */ e.jsx("span", { children: u }) : /* @__PURE__ */ e.jsx(
        "img",
        {
          src: a,
          alt: t,
          className: "w-full h-full object-cover",
          onError: () => x(!0)
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
}, Mt = ({
  users: a,
  maxVisible: t = 3,
  size: s = "sm",
  className: l = ""
}) => {
  if (a.length === 0) return null;
  const n = a.slice(0, t), i = a.length - t;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex -space-x-1 ${l}`, children: [
    n.map((d) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${Ye[s]} rounded-full border-2 border-white dark:border-slate-800 overflow-hidden`,
        title: d.name,
        children: d.avatar ? /* @__PURE__ */ e.jsx("img", { src: d.avatar, alt: d.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ e.jsx("div", { className: `w-full h-full bg-blue-500 flex items-center justify-center ${He[s]} text-white font-medium`, children: d.name.charAt(0).toUpperCase() })
      },
      d.id
    )),
    i > 0 && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${Ye[s]} rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center`,
        children: /* @__PURE__ */ e.jsxs("span", { className: `${He[s]} font-medium text-slate-600 dark:text-slate-300`, children: [
          "+",
          i
        ] })
      }
    )
  ] });
}, Wr = {
  default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  achievement: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm"
}, Br = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base"
};
function Pt({
  children: a,
  variant: t = "default",
  size: s = "md",
  icon: l,
  className: n = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "span",
    {
      className: `
      inline-flex items-center
      font-medium rounded-full
      ${Wr[t]}
      ${Br[s]}
      ${n}
    `.trim(),
      children: [
        l && /* @__PURE__ */ e.jsx("span", { className: "mr-1 w-3 h-3", children: l }),
        a
      ]
    }
  );
}
const Ir = {
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
}, Vr = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg"
};
function At({
  children: a,
  variant: t = "primary",
  size: s = "md",
  type: l = "button",
  onClick: n,
  disabled: i = !1,
  loading: d = !1,
  icon: x,
  iconPosition: u = "left",
  fullWidth: g = !1,
  className: b = "",
  gradient: h = !1
}) {
  const v = i || d, E = t in Ue, S = h && E ? Ue[t] : "";
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: l,
      onClick: n,
      disabled: v,
      className: `
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
        disabled:cursor-not-allowed
        ${Ir[t]}
        ${S}
        ${Vr[s]}
        ${g ? "w-full" : ""}
        ${b}
      `.trim().replace(/\s+/g, " "),
      children: [
        d && /* @__PURE__ */ e.jsxs(
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
        !d && x && u === "left" && /* @__PURE__ */ e.jsx("span", { className: "mr-2 w-4 h-4 flex items-center justify-center", children: x }),
        a,
        !d && x && u === "right" && /* @__PURE__ */ e.jsx("span", { className: "ml-2 w-4 h-4 flex items-center justify-center", children: x })
      ]
    }
  );
}
function zt({
  children: a,
  className: t = "",
  padding: s = "md",
  variant: l = "default",
  header: n,
  footer: i,
  onClick: d,
  glow: x = "none"
}) {
  const u = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }, g = {
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
  }, h = l === "cockpit" ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute inset-0 rounded-xl pointer-events-none",
      style: {
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.2)"
      }
    }
  ) : null, v = d ? "button" : "div";
  return /* @__PURE__ */ e.jsxs(
    v,
    {
      className: `
        rounded-xl relative
        ${g[l]} 
        ${x !== "none" ? b[x] : ""}
        ${t}
      `.trim().replace(/\s+/g, " "),
      onClick: d,
      children: [
        h,
        n && /* @__PURE__ */ e.jsx("div", { className: "px-6 py-4 border-b border-slate-200 dark:border-slate-700/50", children: n }),
        /* @__PURE__ */ e.jsx("div", { className: `${u[s]} relative z-10`, children: a }),
        i && /* @__PURE__ */ e.jsx("div", { className: "px-6 py-4 border-t border-slate-200 dark:border-slate-700/50", children: i })
      ]
    }
  );
}
const Yr = {
  sm: "p-1.5 [&>svg]:w-4 [&>svg]:h-4",
  md: "p-2 [&>svg]:w-5 [&>svg]:h-5",
  lg: "p-3 [&>svg]:w-6 [&>svg]:h-6"
}, Hr = {
  default: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300",
  active: "text-blue-600 dark:text-blue-400"
};
function Dt({
  icon: a,
  onClick: t,
  label: s,
  size: l = "md",
  variant: n = "default",
  className: i = "",
  disabled: d = !1
}) {
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: t,
      disabled: d,
      "aria-label": s,
      className: `transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed ${Yr[l]} ${Hr[n]} ${i}`,
      children: a
    }
  );
}
const Ft = ({
  variant: a = "card",
  count: t = 3,
  className: s = ""
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
  ] }) }), d = () => {
    switch (a) {
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
  return /* @__PURE__ */ e.jsx("div", { className: `space-y-4 ${s}`, children: Array.from({ length: t }).map((x, u) => /* @__PURE__ */ e.jsx("div", { children: d() }, u)) });
}, Ur = {
  blue: "from-blue-400 via-blue-500 to-blue-600",
  amber: "from-amber-400 via-orange-500 to-amber-600",
  green: "from-emerald-400 via-green-500 to-emerald-600",
  red: "from-red-400 via-rose-500 to-red-600",
  white: "from-white via-slate-100 to-white"
}, Jr = {
  blue: "shadow-glow-blue-sm",
  amber: "shadow-glow-amber-sm",
  green: "shadow-glow-green",
  red: "shadow-glow-red",
  white: ""
}, qr = {
  blue: "text-blue-400",
  amber: "text-amber-400",
  green: "text-emerald-400",
  red: "text-red-400",
  white: "text-slate-300"
}, Kr = {
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
}, Gr = {
  up: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 10l7-7m0 0l7 7m-7-7v18" }) }),
  down: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }),
  neutral: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h14" }) })
};
function Wt({
  value: a,
  label: t,
  icon: s,
  color: l = "blue",
  size: n = "md",
  trend: i,
  unit: d,
  className: x = "",
  onClick: u
}) {
  const g = Kr[n], b = u ? "button" : "div";
  return /* @__PURE__ */ e.jsxs(
    b,
    {
      onClick: u,
      className: `
        bg-gradient-to-b from-slate-800/80 to-slate-900/95
        backdrop-blur-xl
        border border-slate-700/50
        rounded-xl
        ${g.padding}
        ${u ? "cursor-pointer hover:border-slate-600/70 hover:shadow-surface-lg" : ""}
        transition-all duration-300
        ${Jr[l]}
        ${x}
      `.trim().replace(/\s+/g, " "),
      children: [
        s && /* @__PURE__ */ e.jsx("div", { className: `${qr[l]} ${g.icon} mb-3`, children: s }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `
            ${g.value}
            font-bold
            tracking-tight
            bg-gradient-to-r ${Ur[l]}
            bg-clip-text text-transparent
          `.trim().replace(/\s+/g, " "),
              children: a
            }
          ),
          d && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `
              ${g.unit}
              font-semibold
              text-slate-400
            `,
              children: d
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 uppercase tracking-wider font-medium ${sizes.label}", children: t }),
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
                Gr[i.direction],
                i.value
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Xr = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12"
}, Zr = {
  primary: "text-blue-600",
  secondary: "text-gray-600",
  white: "text-white"
};
function Qr({
  size: a = "md",
  variant: t = "primary",
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: `
        animate-spin
        ${Xr[a]}
        ${Zr[t]}
        ${s}
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
function Bt({
  message: a = "Loading...",
  size: t = "md",
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center space-y-2 ${s}`,
      children: [
        /* @__PURE__ */ e.jsx(Qr, { size: t }),
        a && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: a })
      ]
    }
  );
}
function It({
  tabs: a,
  activeTab: t,
  onTabChange: s,
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
          children: a.map((d) => /* @__PURE__ */ e.jsx(
            "button",
            {
              className: `
              ${i ? "flex-1 py-4 px-3" : "py-2 px-1"}
              border-b-2 font-medium text-sm transition-colors bg-transparent
              ${t === d.id ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}
            `,
              onClick: () => s(d.id),
              "aria-current": t === d.id ? "page" : void 0,
              children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
                d.icon && /* @__PURE__ */ e.jsx("span", { className: "shrink-0", children: d.icon }),
                /* @__PURE__ */ e.jsx("span", { className: i ? "hidden sm:inline" : "", children: d.label }),
                d.badge !== void 0 && /* @__PURE__ */ e.jsx(
                  "span",
                  {
                    className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${t === d.id ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}`,
                    children: d.badge
                  }
                )
              ] })
            },
            d.id
          ))
        }
      )
    }
  );
}
const Vt = ({
  id: a,
  checked: t,
  onChange: s,
  disabled: l = !1,
  label: n,
  description: i,
  className: d = ""
}) => {
  const x = a || `toggle-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-start ${d}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ e.jsx(
      "input",
      {
        id: x,
        type: "checkbox",
        checked: t,
        onChange: (u) => s(u.target.checked),
        disabled: l,
        className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      }
    ) }),
    (n || i) && /* @__PURE__ */ e.jsxs("div", { className: "ml-3 text-sm", children: [
      n && /* @__PURE__ */ e.jsx(
        "label",
        {
          htmlFor: x,
          className: `font-medium text-gray-900 dark:text-white ${l ? "opacity-50" : "cursor-pointer"}`,
          children: n
        }
      ),
      i && /* @__PURE__ */ e.jsx("p", { className: `text-gray-600 dark:text-gray-400 ${l ? "opacity-50" : ""}`, children: i })
    ] })
  ] });
}, z = {
  default: "text-gray-900 dark:text-gray-100",
  muted: "text-gray-600 dark:text-gray-400",
  primary: "text-blue-600 dark:text-blue-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  error: "text-red-600 dark:text-red-400"
};
function Yt({
  children: a,
  color: t = "default",
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "h1",
    {
      className: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${z[t]} ${s}`,
      children: a
    }
  );
}
function Ht({
  children: a,
  color: t = "default",
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "h2",
    {
      className: `text-3xl md:text-4xl font-bold tracking-tight leading-tight ${z[t]} ${s}`,
      children: a
    }
  );
}
function Ut({
  children: a,
  color: t = "default",
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsx("h3", { className: `text-2xl md:text-3xl font-semibold tracking-tight ${z[t]} ${s}`, children: a });
}
function Jt({
  children: a,
  color: t = "default",
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsx("h4", { className: `text-xl md:text-2xl font-semibold ${z[t]} ${s}`, children: a });
}
function qt({
  children: a,
  color: t = "default",
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsx("p", { className: `text-base leading-relaxed ${z[t]} ${s}`, children: a });
}
function Kt({
  children: a,
  color: t = "muted",
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsx("small", { className: `text-sm leading-normal ${z[t]} ${s}`, children: a });
}
function Gt({
  children: a,
  color: t = "default",
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: `text-xl md:text-2xl leading-relaxed font-light ${z[t]} ${s}`,
      children: a
    }
  );
}
function Xt({
  children: a,
  className: t = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: `text-sm leading-normal ${z.muted} ${t}`,
      children: a
    }
  );
}
function Zt({
  children: a,
  label: t,
  error: s,
  hint: l,
  required: n = !1,
  className: i = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `space-y-2 ${i}`, children: [
    t && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
      t,
      n && /* @__PURE__ */ e.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    a,
    l && !s && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: l }),
    s && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-600 dark:text-red-400", children: s })
  ] });
}
function Qt({
  children: a,
  title: t,
  description: s,
  className: l = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `space-y-4 ${l}`, children: [
    (t || s) && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: t }),
      s && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: s })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: a })
  ] });
}
const et = {
  default: "text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500",
  error: "text-red-600 border-red-300 dark:border-red-600 focus:ring-red-500"
}, rt = V(
  ({
    label: a,
    description: t,
    variant: s = "default",
    className: l = "",
    disabled: n,
    id: i,
    ...d
  }, x) => {
    const u = i || `checkbox-${Math.random().toString(36).substr(2, 9)}`, g = `
    h-4 w-4 rounded border
    bg-white dark:bg-gray-800
    focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-50
    ${et[s]}
    ${l}
  `.replace(/\s+/g, " ").trim();
    return a || t ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-start", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          ref: x,
          type: "checkbox",
          id: u,
          className: g,
          disabled: n,
          ...d
        }
      ) }),
      (a || t) && /* @__PURE__ */ e.jsxs("div", { className: "ml-3 text-sm", children: [
        a && /* @__PURE__ */ e.jsx(
          "label",
          {
            htmlFor: u,
            className: `
                  font-medium text-gray-700 dark:text-gray-300
                  ${n ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                `,
            children: a
          }
        ),
        t && /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: t })
      ] })
    ] }) : /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: x,
        type: "checkbox",
        id: u,
        className: g,
        disabled: n,
        ...d
      }
    );
  }
);
rt.displayName = "Checkbox";
const Ke = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, tt = V(
  ({ variant: a = "default", className: t = "", disabled: s, ...l }, n) => {
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
        ${Ke[a]}
        ${t}
      `.replace(/\s+/g, " ").trim(),
        disabled: s,
        ...l
      }
    );
  }
);
tt.displayName = "DatePicker";
const at = V(
  ({ variant: a = "default", className: t = "", disabled: s, ...l }, n) => {
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
        ${Ke[a]}
        ${t}
      `.replace(/\s+/g, " ").trim(),
        disabled: s,
        ...l
      }
    );
  }
);
at.displayName = "DateTimePicker";
const Je = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base"
}, qe = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, st = V(
  ({
    size: a = "md",
    variant: t = "default",
    startIcon: s,
    endIcon: l,
    className: n = "",
    disabled: i,
    ...d
  }, x) => {
    const u = `
    block w-full rounded-md border
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `.replace(/\s+/g, " ").trim();
    return s || l ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      s && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "h-5 w-5 text-gray-400", children: s }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          ref: x,
          className: `
            ${u}
            ${Je[a]}
            ${qe[t]}
            ${s ? "pl-10" : ""}
            ${l ? "pr-10" : ""}
            ${n}
          `.replace(/\s+/g, " ").trim(),
          disabled: i,
          ...d
        }
      ),
      l && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: /* @__PURE__ */ e.jsx("div", { className: "h-5 w-5 text-gray-400", children: l }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: x,
        className: `
        ${u}
        ${Je[a]}
        ${qe[t]}
        ${n}
      `.replace(/\s+/g, " ").trim(),
        disabled: i,
        ...d
      }
    );
  }
);
st.displayName = "Input";
const lt = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base"
}, ot = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, nt = V(
  ({
    size: a = "md",
    variant: t = "default",
    options: s,
    placeholder: l,
    className: n = "",
    disabled: i,
    ...d
  }, x) => {
    const u = `
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
          ref: x,
          className: `
          ${u}
          ${lt[a]}
          ${ot[t]}
          ${n}
        `.replace(/\s+/g, " ").trim(),
          disabled: i,
          ...d,
          children: [
            l && /* @__PURE__ */ e.jsx("option", { value: "", children: l }),
            s.map((g) => /* @__PURE__ */ e.jsx(
              "option",
              {
                value: g.value,
                disabled: g.disabled,
                children: g.label
              },
              g.value
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
nt.displayName = "Select";
const it = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, dt = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize"
}, ct = V(
  ({
    variant: a = "default",
    resize: t = "vertical",
    className: s = "",
    rows: l = 3,
    disabled: n,
    ...i
  }, d) => {
    const x = `
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
        ref: d,
        rows: l,
        className: `
        ${x}
        ${it[a]}
        ${dt[t]}
        ${s}
      `.replace(/\s+/g, " ").trim(),
        disabled: n,
        ...i
      }
    );
  }
);
ct.displayName = "TextArea";
function ea({
  icon: a,
  title: t,
  description: s,
  actions: l,
  className: n = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `text-center py-12 px-4 ${n}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 [&>svg]:w-8 [&>svg]:h-8", children: a }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-slate-800 dark:text-white mb-2", children: t }),
    s && /* @__PURE__ */ e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto", children: s }),
    l && /* @__PURE__ */ e.jsx("div", { className: "flex gap-3 justify-center", children: l })
  ] });
}
const ut = () => /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) });
function ra({
  title: a = "Something went wrong",
  message: t,
  icon: s,
  onRetry: l,
  retryText: n = "Try Again",
  className: i = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `text-center py-12 px-4 ${i}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-red-500 dark:text-red-400", children: s || /* @__PURE__ */ e.jsx(ut, {}) }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-red-600 dark:text-red-400 mb-2", children: a }),
    /* @__PURE__ */ e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto", children: t }),
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
const xt = {
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
}, bt = {
  desktop: "w-4 h-4",
  mobile: "w-5 h-5",
  "bottom-nav": "w-5 h-5"
}, mt = {
  desktop: "",
  mobile: "",
  "bottom-nav": "text-xs"
};
function ta({
  as: a,
  href: t,
  label: s,
  icon: l,
  isActive: n = !1,
  onClick: i,
  className: d = "",
  variant: x = "desktop",
  ...u
}) {
  const g = a || "a", b = xt[x], h = `${b.base} ${n ? b.active : b.inactive} ${d}`, v = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: bt[x], children: l }),
    /* @__PURE__ */ e.jsx("span", { className: mt[x], children: s })
  ] }), E = {
    className: h,
    onClick: i,
    ...u
  };
  return g === "a" ? E.href = t : (E.href = t, E.to = t), /* @__PURE__ */ e.jsx(g, { ...E, children: v });
}
const aa = ({
  items: a,
  isOpen: t,
  onToggle: s,
  className: l = ""
}) => /* @__PURE__ */ e.jsxs("div", { className: `relative ${l}`, children: [
  /* @__PURE__ */ e.jsx(
    "button",
    {
      className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors",
      "aria-label": "Options",
      "aria-haspopup": "menu",
      "aria-expanded": t,
      onClick: s,
      children: /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5 text-slate-400", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) })
    }
  ),
  t && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg py-1 w-36 z-10", children: a.map((n, i) => /* @__PURE__ */ e.jsx(
    "button",
    {
      className: `w-full text-left px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 ${n.variant === "danger" ? "text-red-600" : "text-slate-700 dark:text-slate-200"}`,
      onClick: () => {
        n.onClick(), s();
      },
      children: n.label
    },
    i
  )) })
] }), gt = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl"
};
function sa({
  title: a,
  subtitle: t,
  action: s,
  size: l = "md",
  className: n = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-center justify-between ${n}`, children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h2", { className: `font-semibold text-slate-800 dark:text-white ${gt[l]}`, children: a }),
      t && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 mt-1", children: t })
    ] }),
    s && /* @__PURE__ */ e.jsx("div", { children: s })
  ] });
}
const ht = {
  info: "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-b border-blue-500/30",
  success: "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-b border-emerald-500/30",
  warning: "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-b border-amber-400/30",
  error: "bg-gradient-to-r from-red-600 to-red-700 text-white border-b border-red-500/30",
  gradient: "bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white border-b border-purple-400/30"
}, ft = {
  info: "shadow-glow-blue",
  success: "shadow-lg shadow-emerald-500/20",
  warning: "shadow-glow-amber",
  error: "shadow-lg shadow-red-500/20",
  gradient: "shadow-lg shadow-purple-500/30"
}, pt = {
  top: "fixed top-0 left-0 right-0",
  bottom: "fixed bottom-0 left-0 right-0",
  inline: "relative"
}, la = ({
  variant: a = "info",
  icon: t,
  message: s,
  actions: l,
  onDismiss: n,
  position: i = "inline",
  className: d = "",
  glow: x = !1
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: `
        ${pt[i]} 
        ${ht[a]} 
        ${x ? ft[a] : ""} 
        px-4 py-3 z-50 backdrop-blur-sm
        ${d}
      `.trim().replace(/\s+/g, " "),
    children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between max-w-6xl mx-auto gap-3", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3 flex-1 min-w-0", children: [
        t && /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 text-white/90", children: t }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 min-w-0 font-medium", children: s })
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
), vt = {
  "top-left": "absolute top-2 left-2 z-20",
  "top-right": "absolute top-2 right-2 z-20",
  "bottom-left": "absolute bottom-2 left-2 z-20",
  "bottom-right": "absolute bottom-2 right-2 z-20",
  none: ""
}, wt = {
  default: "bg-slate-900/80 backdrop-blur-sm text-white border border-white/10",
  primary: "bg-blue-600/90 backdrop-blur-sm text-white border border-blue-400/30 shadow-glow-blue-sm",
  success: "bg-emerald-600/90 backdrop-blur-sm text-white border border-emerald-400/30",
  warning: "bg-amber-600/90 backdrop-blur-sm text-white border border-amber-400/30",
  danger: "bg-red-600/90 backdrop-blur-sm text-white border border-red-400/30",
  glass: "bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-lg"
}, ae = ({
  children: a,
  position: t = "top-left",
  variant: s = "default",
  className: l = ""
}) => /* @__PURE__ */ e.jsx("div", { className: `${vt[t]} ${l}`, children: /* @__PURE__ */ e.jsx(
  "div",
  {
    className: `${wt[s]} px-2.5 py-1 rounded-md text-xs font-medium shadow-lg transition-all duration-200`,
    children: a
  }
) }), oa = ({
  topLeft: a,
  topRight: t,
  bottomLeft: s,
  bottomRight: l,
  topLeftVariant: n = "default",
  topRightVariant: i = "default",
  bottomLeftVariant: d = "default",
  bottomRightVariant: x = "default",
  interactive: u = !0,
  className: g = ""
}) => /* @__PURE__ */ e.jsxs("div", { className: `absolute inset-0 pointer-events-none ${g}`, children: [
  a && /* @__PURE__ */ e.jsx(ae, { position: "top-left", variant: n, children: a }),
  t && /* @__PURE__ */ e.jsx(ae, { position: "top-right", variant: i, children: t }),
  s && /* @__PURE__ */ e.jsx(ae, { position: "bottom-left", variant: d, children: s }),
  l && /* @__PURE__ */ e.jsx(ae, { position: "bottom-right", variant: x, children: l }),
  !u && /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute inset-0 cursor-default z-30 pointer-events-auto",
      title: "Preview - tap to expand for interaction"
    }
  )
] }), kt = {
  primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-lg",
  secondary: "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500",
  gradient: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md hover:shadow-lg"
}, yt = {
  blue: "hover:shadow-glow-blue hover:border-blue-500/30",
  purple: "hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30",
  amber: "hover:shadow-glow-amber hover:border-amber-500/30",
  cyan: "hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/30"
}, na = ({
  icon: a,
  iconBg: t = "bg-blue-600",
  title: s,
  description: l,
  buttonText: n,
  buttonVariant: i = "primary",
  onClick: d,
  className: x = "",
  glass: u = !1,
  glow: g = !1,
  glowColor: b = "blue"
}) => {
  const h = u ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50" : "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700/60", v = g ? yt[b] : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `
        ${h}
        rounded-xl p-6 
        border
        cursor-pointer
        transition-all duration-300 ease-out
        hover:border-slate-600
        ${v}
        ${x}
      `.trim().replace(/\s+/g, " "),
      onClick: d,
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `
          w-14 h-14 ${t} 
          rounded-xl flex items-center justify-center 
          mx-auto mb-4
          shadow-lg
          transition-transform duration-300
          group-hover:scale-110
        `,
            children: /* @__PURE__ */ e.jsx("span", { className: "text-white text-xl", children: a })
          }
        ),
        /* @__PURE__ */ e.jsx("h4", { className: "text-white font-semibold text-lg mb-2 text-center", children: s }),
        /* @__PURE__ */ e.jsx("p", { className: "text-slate-400 text-sm mb-5 text-center leading-relaxed", children: l }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: (E) => {
              E.stopPropagation(), d();
            },
            className: `
          w-full px-4 py-2.5 
          ${kt[i]}
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
}, jt = {
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
}, ia = ({
  title: a,
  description: t,
  accentColor: s = "blue",
  children: l,
  className: n = "",
  glass: i = !1,
  glow: d = !1
}) => {
  const x = jt[s], u = i ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50" : "bg-slate-800 border-slate-700";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `
        ${u}
        rounded-xl shadow-lg border
        ${d ? `shadow-xl ${x.glow}` : ""}
        p-4 sm:p-6 
        transition-all duration-300
        hover:border-slate-600
        ${n}
      `.trim().replace(/\s+/g, " "),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: `border-l-4 ${x.border} pl-3 sm:pl-4 mb-4 sm:mb-6`, children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-base sm:text-lg font-semibold text-white", children: a }),
          t && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-slate-400", children: t })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: l })
      ]
    }
  );
}, Nt = {
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
function da({
  onClick: a,
  loading: t = !1,
  children: s = "Load More",
  className: l = "",
  variant: n = "default"
}) {
  return /* @__PURE__ */ e.jsx("div", { className: `text-center ${l}`, children: /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: a,
      disabled: t,
      className: `
          px-6 py-3 
          rounded-xl
          transition-all duration-200 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
          font-medium
          ${Nt[n]}
        `.trim().replace(/\s+/g, " "),
      children: t ? /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
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
      ] }) : s
    }
  ) });
}
const ca = ({
  label: a,
  placeholder: t = "Type to search...",
  value: s,
  onSearch: l,
  onSelect: n,
  onClear: i,
  error: d,
  disabled: x = !1,
  minSearchLength: u = 2,
  debounceMs: g = 300,
  className: b = ""
}) => {
  const [h, v] = I(!1), [E, S] = I(""), [O, P] = I([]), [M, j] = I(!1), [Y, A] = I(-1), le = he(null), oe = he(null), D = he();
  jr(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const q = async (k) => {
    if (k.length < u) {
      P([]), j(!1);
      return;
    }
    try {
      j(!0);
      const N = await l(k);
      P(N);
    } catch (N) {
      console.error("Search error:", N), P([]);
    } finally {
      j(!1);
    }
  }, K = (k) => {
    D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      q(k);
    }, g);
  }, ne = (k) => {
    const N = k.target.value;
    S(N), A(-1), N.length >= u ? (j(!0), K(N)) : (P([]), j(!1));
  }, G = (k) => {
    n(k), S(""), v(!1), P([]), A(-1);
  }, X = () => {
    S(""), v(!1), P([]), A(-1), i && i();
  }, L = (k) => {
    if (!h || O.length === 0) {
      (k.key === "ArrowDown" || k.key === "Enter") && (v(!0), E.length >= u && q(E));
      return;
    }
    switch (k.key) {
      case "ArrowDown":
        k.preventDefault(), A((N) => N < O.length - 1 ? N + 1 : 0);
        break;
      case "ArrowUp":
        k.preventDefault(), A((N) => N > 0 ? N - 1 : O.length - 1);
        break;
      case "Enter":
        k.preventDefault(), Y >= 0 && G(O[Y]);
        break;
      case "Escape":
        v(!1), A(-1);
        break;
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `relative ${b}`, children: [
    /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: a }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      s && !h ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 min-h-[42px]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ e.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: s.label }),
          s.subtitle && /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: s.subtitle })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: X,
              className: "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-1",
              disabled: x,
              title: "Clear selection",
              "aria-label": "Clear selection",
              children: "×"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => v(!0),
              className: "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-1",
              disabled: x,
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
              value: E,
              onChange: ne,
              onKeyDown: L,
              onFocus: () => v(!0),
              placeholder: t,
              disabled: x,
              className: `w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 ${d ? "border-red-300 dark:border-red-700" : "border-gray-300 dark:border-gray-600"} ${x ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"} text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400`
            }
          ),
          M && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 dark:border-blue-400" }) })
        ] })
      ),
      h && O.length > 0 && /* @__PURE__ */ e.jsx(
        "ul",
        {
          ref: oe,
          className: "absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto",
          children: O.map((k, N) => /* @__PURE__ */ e.jsxs(
            "li",
            {
              onClick: () => G(k),
              className: `px-3 py-2 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 ${N === Y ? "bg-blue-100 dark:bg-blue-900/40" : ""}`,
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: k.label }),
                k.subtitle && /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: k.subtitle })
              ]
            },
            k.id
          ))
        }
      ),
      h && !M && E.length >= u && O.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg p-3", children: /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: "No results found" }) })
    ] }),
    d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: d })
  ] });
};
function ua({
  themePreference: a,
  resolvedTheme: t,
  onThemeChange: s,
  className: l = ""
}) {
  const n = () => {
    switch (a) {
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
    s(n());
  }, d = () => a === "system" ? /* @__PURE__ */ e.jsx(
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
  ) : t === "dark" ? /* @__PURE__ */ e.jsx(
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
  ), x = () => {
    switch (a) {
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
      "aria-label": x(),
      title: `Current: ${a}${a === "system" ? ` (${t})` : ""}`,
      children: d()
    }
  );
}
function xa({
  notifications: a,
  unreadCount: t,
  onMarkAsRead: s,
  onMarkAllAsRead: l,
  onDismiss: n,
  onViewAll: i,
  className: d = ""
}) {
  const [x, u] = I(!1), g = (h) => {
    const v = new Date(h), S = Math.floor(
      ((/* @__PURE__ */ new Date()).getTime() - v.getTime()) / (1e3 * 60 * 60)
    );
    return S < 1 ? "Just now" : S < 24 ? `${S}h ago` : S < 48 ? "Yesterday" : v.toLocaleDateString();
  }, b = (h) => {
    switch (h) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-900/20 dark:border-red-800";
      case "medium":
        return "text-orange-600 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-900/20 dark:border-orange-800";
      default:
        return "text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-900/20 dark:border-blue-800";
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `relative ${d}`, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => u(!x),
        className: "relative p-2 text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100 transition-colors",
        "aria-label": `Notifications ${t > 0 ? `(${t} unread)` : ""}`,
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
          t > 0 && /* @__PURE__ */ e.jsx("span", { className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium", children: t > 9 ? "9+" : t })
        ]
      }
    ),
    x && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "fixed inset-0 z-10",
          onClick: () => u(!1)
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "absolute right-0 mt-2 w-96 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-20 max-h-96 overflow-hidden", children: [
        /* @__PURE__ */ e.jsx("div", { className: "p-4 border-b border-slate-200 dark:border-slate-700", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: "Notifications" }),
          t > 0 && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: l,
              className: "text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium",
              children: "Mark all read"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "max-h-80 overflow-y-auto", children: a.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-6 text-center text-slate-500 dark:text-slate-400", children: [
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
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-1", children: a.map((h) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer ${h.isRead ? "" : "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500"}`,
            onClick: () => s(h.id),
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm border ${b(
                    h.priority
                  )}`,
                  children: h.icon || "📢"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ e.jsx(
                    "p",
                    {
                      className: `text-sm font-medium text-slate-900 dark:text-white ${h.isRead ? "" : "font-semibold"}`,
                      children: h.title
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: (v) => {
                        v.stopPropagation(), n(h.id);
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
                /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mt-1", children: h.message }),
                /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-500 mt-2", children: g(h.timestamp) })
              ] })
            ] })
          },
          h.id
        )) }) }),
        a.length > 0 && i && /* @__PURE__ */ e.jsx("div", { className: "p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              u(!1), i();
            },
            className: "w-full text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium",
            children: "View all notifications"
          }
        ) })
      ] })
    ] })
  ] });
}
function se({
  message: a = "Loading...",
  size: t = "md",
  variant: s = "default",
  fullscreen: l = !1,
  className: n = "",
  showDots: i = !0
}) {
  const d = () => {
    switch (t) {
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
  }, x = () => {
    switch (s) {
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
  }, u = d(), g = x(), b = s === "aviation" ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${u.spinner} ${g.spinner} rounded-full animate-spin mx-auto shadow-lg bg-gradient-to-br from-slate-800 to-slate-700`
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `absolute inset-0 ${t === "lg" ? "w-16 h-16" : t === "sm" ? "w-8 h-8" : "w-12 h-12"} mx-auto border border-slate-700/50 rounded-full animate-pulse`
      }
    )
  ] }) : /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `${u.spinner} ${g.spinner} rounded-full animate-spin mx-auto`
    }
  ), h = i && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center space-x-2 mt-2", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `w-1 h-1 ${s === "aviation" ? "bg-slate-400" : "bg-gray-400 dark:bg-gray-500"} rounded-full opacity-60`
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `w-1 h-1 ${s === "aviation" ? "bg-slate-400" : "bg-gray-400 dark:bg-gray-500"} rounded-full animate-pulse delay-200`
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `w-1 h-1 ${s === "aviation" ? "bg-slate-400" : "bg-gray-400 dark:bg-gray-500"} rounded-full animate-pulse delay-400`
      }
    )
  ] }), v = /* @__PURE__ */ e.jsxs("div", { className: `text-center ${u.container}`, children: [
    b,
    a && /* @__PURE__ */ e.jsx(
      "p",
      {
        className: `${u.text} ${g.text} font-light tracking-wide m-0`,
        children: a
      }
    ),
    h
  ] });
  return l ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center ${g.background} ${n}`,
      children: v
    }
  ) : /* @__PURE__ */ e.jsx("div", { className: `flex items-center justify-center p-8 ${n}`, children: v });
}
const ba = (a) => /* @__PURE__ */ e.jsx(se, { ...a, fullscreen: !0 }), ma = (a) => /* @__PURE__ */ e.jsx(se, { ...a, variant: "aviation" }), ga = (a) => /* @__PURE__ */ e.jsx(se, { ...a, variant: "minimal" }), ha = (a) => /* @__PURE__ */ e.jsx(se, { ...a, size: "sm" }), $t = ({ icon: a, isActive: t }) => {
  const s = `w-4 h-4 transition-colors ${t ? "text-blue-700 dark:text-blue-300" : ""}`;
  switch (a) {
    case "community":
      return /* @__PURE__ */ e.jsx("svg", { className: s, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) });
    case "maps":
      return /* @__PURE__ */ e.jsx("svg", { className: s, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" }) });
    case "flight":
      return /* @__PURE__ */ e.jsx("svg", { className: s, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) });
    case "hangar":
      return /* @__PURE__ */ e.jsx("svg", { className: s, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }) });
    case "social":
      return /* @__PURE__ */ e.jsx("svg", { className: s, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) });
    case "home":
      return /* @__PURE__ */ e.jsx("svg", { className: s, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) });
    case "settings":
      return /* @__PURE__ */ e.jsxs("svg", { className: s, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: [
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
        /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
      ] });
    case "about":
      return /* @__PURE__ */ e.jsx("svg", { className: s, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) });
    default:
      return null;
  }
}, Ct = ({ text: a = "App" }) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) }) }),
  /* @__PURE__ */ e.jsx("h1", { className: "text-xl font-light text-slate-800 dark:text-white", children: a })
] }), Et = () => /* @__PURE__ */ e.jsx("div", { className: "animate-pulse w-24 h-8 bg-slate-200 dark:bg-slate-700 rounded" });
function fa({
  items: a,
  currentPath: t,
  isAuthenticated: s = !1,
  isLoading: l = !1,
  brand: n,
  brandText: i = "App",
  rightContent: d,
  onNavigate: x,
  className: u = ""
}) {
  const g = (b, h) => {
    x && (b.preventDefault(), x(h));
  };
  return /* @__PURE__ */ e.jsx("nav", { className: `bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm ${u}`, children: /* @__PURE__ */ e.jsx("div", { className: "w-full px-6 lg:px-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between h-16", children: [
    /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "/",
        onClick: (b) => g(b, "/"),
        className: "flex items-center",
        children: n || /* @__PURE__ */ e.jsx(Ct, { text: i })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "hidden md:flex items-center space-x-8", children: a.map((b) => {
      const h = b.isActive ?? t === b.href;
      return /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: b.href,
          onClick: (v) => g(v, b.href),
          className: `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${h ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"}`,
          children: [
            b.icon && /* @__PURE__ */ e.jsx($t, { icon: b.icon, isActive: h }),
            b.name
          ]
        },
        b.href
      );
    }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: l ? /* @__PURE__ */ e.jsx(Et, {}) : d })
  ] }) }) });
}
export {
  na as ActionCard,
  fa as AdaptiveNavigation,
  ca as Autocomplete,
  Ot as Avatar,
  Mt as AvatarStack,
  ma as AviationLoader,
  Pt as Badge,
  la as Banner,
  At as Button,
  zt as Card,
  rt as Checkbox,
  _t as Container,
  tt as DatePicker,
  at as DateTimePicker,
  ea as EmptyState,
  ra as ErrorState,
  St as Flex,
  Zt as FormField,
  Qt as FormSection,
  ba as FullScreenLoader,
  Tt as Grid,
  Yt as H1,
  Ht as H2,
  Ut as H3,
  Jt as H4,
  Dt as IconButton,
  ae as InfoBadge,
  oa as InfoOverlay,
  st as Input,
  Gt as Lead,
  da as LoadMoreButton,
  se as Loader,
  Bt as Loading,
  ga as MinimalLoader,
  Xt as Muted,
  ta as NavItem,
  xa as NotificationBell,
  aa as OptionsMenu,
  Lt as Section,
  sa as SectionHeader,
  nt as Select,
  ia as SettingCard,
  Ft as Skeleton,
  Kt as Small,
  ha as SmallLoader,
  Qr as Spinner,
  Wt as StatCard,
  It as TabNavigation,
  qt as Text,
  ct as TextArea,
  ua as ThemeToggle,
  Vt as Toggle
};
