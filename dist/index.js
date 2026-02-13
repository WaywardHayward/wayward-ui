import fe, { forwardRef as V, useState as F, useEffect as Ge, useRef as he } from "react";
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
  var t = fe, s = Symbol.for("react.element"), a = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, c, b) {
    var m, g = {}, f = null, E = null;
    b !== void 0 && (f = "" + b), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (E = c.ref);
    for (m in c) l.call(c, m) && !i.hasOwnProperty(m) && (g[m] = c[m]);
    if (u && u.defaultProps) for (m in c = u.defaultProps, c) g[m] === void 0 && (g[m] = c[m]);
    return { $$typeof: s, type: u, key: f, ref: E, props: g, _owner: n.current };
  }
  return U.Fragment = a, U.jsx = o, U.jsxs = o, U;
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
    var t = fe, s = Symbol.for("react.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), S = Symbol.iterator, O = "@@iterator";
    function P(r) {
      if (r === null || typeof r != "object")
        return null;
      var d = S && r[S] || r[O];
      return typeof d == "function" ? d : null;
    }
    var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(r) {
      {
        for (var d = arguments.length, x = new Array(d > 1 ? d - 1 : 0), h = 1; h < d; h++)
          x[h - 1] = arguments[h];
        Y("error", r, x);
      }
    }
    function Y(r, d, x) {
      {
        var h = M.ReactDebugCurrentFrame, w = h.getStackAddendum();
        w !== "" && (d += "%s", x = x.concat([w]));
        var y = x.map(function(v) {
          return String(v);
        });
        y.unshift("Warning: " + d), Function.prototype.apply.call(console[r], console, y);
      }
    }
    var A = !1, le = !1, oe = !1, D = !1, q = !1, G;
    G = Symbol.for("react.module.reference");
    function ne(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === l || r === i || q || r === n || r === b || r === m || D || r === E || A || le || oe || typeof r == "object" && r !== null && (r.$$typeof === f || r.$$typeof === g || r.$$typeof === o || r.$$typeof === u || r.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === G || r.getModuleId !== void 0));
    }
    function K(r, d, x) {
      var h = r.displayName;
      if (h)
        return h;
      var w = d.displayName || d.name || "";
      return w !== "" ? x + "(" + w + ")" : x;
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
        case a:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case b:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case u:
            var d = r;
            return X(d) + ".Consumer";
          case o:
            var x = r;
            return X(x._context) + ".Provider";
          case c:
            return K(r, r.render, "ForwardRef");
          case g:
            var h = r.displayName || null;
            return h !== null ? h : L(r.type) || "Memo";
          case f: {
            var w = r, y = w._payload, v = w._init;
            try {
              return L(v(y));
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
    function Xe() {
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
    function Ze() {
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
    function Z(r, d, x) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (w) {
            var h = w.stack.trim().match(/\n( *(at )?)/);
            de = h && h[1] || "";
          }
        return `
` + de + r;
      }
    }
    var ce = !1, Q;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Qe();
    }
    function Ce(r, d) {
      if (!r || ce)
        return "";
      {
        var x = Q.get(r);
        if (x !== void 0)
          return x;
      }
      var h;
      ce = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ie.current, ie.current = null, Xe();
      try {
        if (d) {
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
            } catch (R) {
              h = R;
            }
            Reflect.construct(r, [], v);
          } else {
            try {
              v.call();
            } catch (R) {
              h = R;
            }
            r.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            h = R;
          }
          r();
        }
      } catch (R) {
        if (R && h && typeof R.stack == "string") {
          for (var p = R.stack.split(`
`), _ = h.stack.split(`
`), $ = p.length - 1, C = _.length - 1; $ >= 1 && C >= 0 && p[$] !== _[C]; )
            C--;
          for (; $ >= 1 && C >= 0; $--, C--)
            if (p[$] !== _[C]) {
              if ($ !== 1 || C !== 1)
                do
                  if ($--, C--, C < 0 || p[$] !== _[C]) {
                    var T = `
` + p[$].replace(" at new ", " at ");
                    return r.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", r.displayName)), typeof r == "function" && Q.set(r, T), T;
                  }
                while ($ >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ce = !1, ie.current = y, Ze(), Error.prepareStackTrace = w;
      }
      var I = r ? r.displayName || r.name : "", W = I ? Z(I) : "";
      return typeof r == "function" && Q.set(r, W), W;
    }
    function er(r, d, x) {
      return Ce(r, !1);
    }
    function rr(r) {
      var d = r.prototype;
      return !!(d && d.isReactComponent);
    }
    function ee(r, d, x) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ce(r, rr(r));
      if (typeof r == "string")
        return Z(r);
      switch (r) {
        case b:
          return Z("Suspense");
        case m:
          return Z("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            return er(r.render);
          case g:
            return ee(r.type, d, x);
          case f: {
            var h = r, w = h._payload, y = h._init;
            try {
              return ee(y(w), d, x);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Ee = {}, _e = M.ReactDebugCurrentFrame;
    function re(r) {
      if (r) {
        var d = r._owner, x = ee(r.type, r._source, d ? d.type : null);
        _e.setExtraStackFrame(x);
      } else
        _e.setExtraStackFrame(null);
    }
    function tr(r, d, x, h, w) {
      {
        var y = Function.call.bind(H);
        for (var v in r)
          if (y(r, v)) {
            var p = void 0;
            try {
              if (typeof r[v] != "function") {
                var _ = Error((h || "React class") + ": " + x + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              p = r[v](d, v, h, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              p = $;
            }
            p && !(p instanceof Error) && (re(w), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", x, v, typeof p), re(null)), p instanceof Error && !(p.message in Ee) && (Ee[p.message] = !0, re(w), j("Failed %s type: %s", x, p.message), re(null));
          }
      }
    }
    var sr = Array.isArray;
    function ue(r) {
      return sr(r);
    }
    function ar(r) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, x = d && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return x;
      }
    }
    function lr(r) {
      try {
        return Re(r), !1;
      } catch {
        return !0;
      }
    }
    function Re(r) {
      return "" + r;
    }
    function Se(r) {
      if (lr(r))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(r)), Re(r);
    }
    var Te = M.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Oe;
    function nr(r) {
      if (H.call(r, "ref")) {
        var d = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function ir(r) {
      if (H.call(r, "key")) {
        var d = Object.getOwnPropertyDescriptor(r, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function dr(r, d) {
      typeof r.ref == "string" && Te.current;
    }
    function cr(r, d) {
      {
        var x = function() {
          Le || (Le = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        x.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function ur(r, d) {
      {
        var x = function() {
          Oe || (Oe = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        x.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var xr = function(r, d, x, h, w, y, v) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: r,
        key: d,
        ref: x,
        props: v,
        // Record the component responsible for creating this element.
        _owner: y
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
        value: h
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function br(r, d, x, h, w) {
      {
        var y, v = {}, p = null, _ = null;
        x !== void 0 && (Se(x), p = "" + x), ir(d) && (Se(d.key), p = "" + d.key), nr(d) && (_ = d.ref, dr(d, w));
        for (y in d)
          H.call(d, y) && !or.hasOwnProperty(y) && (v[y] = d[y]);
        if (r && r.defaultProps) {
          var $ = r.defaultProps;
          for (y in $)
            v[y] === void 0 && (v[y] = $[y]);
        }
        if (p || _) {
          var C = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          p && cr(v, C), _ && ur(v, C);
        }
        return xr(r, p, _, w, h, Te.current, v);
      }
    }
    var xe = M.ReactCurrentOwner, Me = M.ReactDebugCurrentFrame;
    function B(r) {
      if (r) {
        var d = r._owner, x = ee(r.type, r._source, d ? d.type : null);
        Me.setExtraStackFrame(x);
      } else
        Me.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function me(r) {
      return typeof r == "object" && r !== null && r.$$typeof === s;
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
    function mr(r) {
      return "";
    }
    var Ae = {};
    function gr(r) {
      {
        var d = Pe();
        if (!d) {
          var x = typeof r == "string" ? r : r.displayName || r.name;
          x && (d = `

Check the top-level render call using <` + x + ">.");
        }
        return d;
      }
    }
    function ze(r, d) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var x = gr(d);
        if (Ae[x])
          return;
        Ae[x] = !0;
        var h = "";
        r && r._owner && r._owner !== xe.current && (h = " It was passed a child from " + L(r._owner.type) + "."), B(r), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, h), B(null);
      }
    }
    function De(r, d) {
      {
        if (typeof r != "object")
          return;
        if (ue(r))
          for (var x = 0; x < r.length; x++) {
            var h = r[x];
            me(h) && ze(h, d);
          }
        else if (me(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var w = P(r);
          if (typeof w == "function" && w !== r.entries)
            for (var y = w.call(r), v; !(v = y.next()).done; )
              me(v.value) && ze(v.value, d);
        }
      }
    }
    function hr(r) {
      {
        var d = r.type;
        if (d == null || typeof d == "string")
          return;
        var x;
        if (typeof d == "function")
          x = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === g))
          x = d.propTypes;
        else
          return;
        if (x) {
          var h = L(d);
          tr(x, r.props, "prop", h, r);
        } else if (d.PropTypes !== void 0 && !be) {
          be = !0;
          var w = L(d);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(r) {
      {
        for (var d = Object.keys(r.props), x = 0; x < d.length; x++) {
          var h = d[x];
          if (h !== "children" && h !== "key") {
            B(r), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), B(null);
            break;
          }
        }
        r.ref !== null && (B(r), j("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    var We = {};
    function Fe(r, d, x, h, w, y) {
      {
        var v = ne(r);
        if (!v) {
          var p = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = mr();
          _ ? p += _ : p += Pe();
          var $;
          r === null ? $ = "null" : ue(r) ? $ = "array" : r !== void 0 && r.$$typeof === s ? ($ = "<" + (L(r.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof r, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, p);
        }
        var C = br(r, d, x, w, y);
        if (C == null)
          return C;
        if (v) {
          var T = d.children;
          if (T !== void 0)
            if (h)
              if (ue(T)) {
                for (var I = 0; I < T.length; I++)
                  De(T[I], r);
                Object.freeze && Object.freeze(T);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(T, r);
        }
        if (H.call(d, "key")) {
          var W = L(r), R = Object.keys(d).filter(function(jr) {
            return jr !== "key";
          }), ge = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[W + ge]) {
            var yr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ge, W, yr, W), We[W + ge] = !0;
          }
        }
        return r === l ? fr(C) : hr(C), C;
      }
    }
    function pr(r, d, x) {
      return Fe(r, d, x, !0);
    }
    function vr(r, d, x) {
      return Fe(r, d, x, !1);
    }
    var wr = vr, kr = pr;
    J.Fragment = l, J.jsx = wr, J.jsxs = kr;
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
}, _r = {
  none: "",
  sm: "px-4 sm:px-6",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-6 sm:px-8 lg:px-12"
};
function Mt({
  children: t,
  size: s = "md",
  padding: a = "md",
  className: l = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      mx-auto
      ${Er[s]}
      ${_r[a]}
      ${l}
    `.trim(),
      children: t
    }
  );
}
const Rr = {
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
function Pt({
  children: t,
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
      ${Rr[s]}
      ${Sr[a]}
      ${Tr[l]}
      ${n ? "flex-wrap" : ""}
      ${Lr[i]}
      ${o}
    `.trim(),
      children: t
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
function At({
  children: t,
  cols: s = 1,
  gap: a = "md",
  responsive: l = !0,
  className: n = ""
}) {
  const i = l ? Mr[s] : Or[s];
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
      grid
      ${i}
      ${Pr[a]}
      ${n}
    `.trim(),
      children: t
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
function zt({
  children: t,
  variant: s = "default",
  spacing: a = "md",
  className: l = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "section",
    {
      className: `
      ${Ar[s]}
      ${zr[a]}
      ${l}
    `.trim(),
      children: t
    }
  );
}
const Dr = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, Wr = {
  circle: "rounded-full",
  square: "rounded-lg"
};
function Dt({
  src: t,
  alt: s = "",
  initials: a,
  size: l = "md",
  variant: n = "circle",
  className: i = ""
}) {
  const [o, u] = fe.useState(!1), c = a || s.split(" ").map((m) => m[0]).join("").toUpperCase().slice(0, 2), b = !t || o;
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
      ${Wr[n]}
      ${i}
    `.trim(),
      children: b ? /* @__PURE__ */ e.jsx("span", { children: c }) : /* @__PURE__ */ e.jsx(
        "img",
        {
          src: t,
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
}, Wt = ({
  users: t,
  maxVisible: s = 3,
  size: a = "sm",
  className: l = ""
}) => {
  if (t.length === 0) return null;
  const n = t.slice(0, s), i = t.length - s;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex -space-x-1 ${l}`, children: [
    n.map((o) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${Ye[a]} rounded-full border-2 border-white dark:border-slate-800 overflow-hidden`,
        title: o.name,
        children: o.avatar ? /* @__PURE__ */ e.jsx("img", { src: o.avatar, alt: o.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ e.jsx("div", { className: `w-full h-full bg-blue-500 flex items-center justify-center ${He[a]} text-white font-medium`, children: o.name.charAt(0).toUpperCase() })
      },
      o.id
    )),
    i > 0 && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${Ye[a]} rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center`,
        children: /* @__PURE__ */ e.jsxs("span", { className: `${He[a]} font-medium text-slate-600 dark:text-slate-300`, children: [
          "+",
          i
        ] })
      }
    )
  ] });
}, Fr = {
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
function Ft({
  children: t,
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
      ${Fr[s]}
      ${Br[a]}
      ${n}
    `.trim(),
      children: [
        l && /* @__PURE__ */ e.jsx("span", { className: "mr-1 w-3 h-3", children: l }),
        t
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
function Yr({
  children: t,
  variant: s = "primary",
  size: a = "md",
  type: l = "button",
  onClick: n,
  disabled: i = !1,
  loading: o = !1,
  icon: u,
  iconPosition: c = "left",
  fullWidth: b = !1,
  className: m = "",
  gradient: g = !1
}) {
  const f = i || o, E = s in Ue, S = g && E ? Ue[s] : "";
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
        ${Ir[s]}
        ${S}
        ${Vr[a]}
        ${b ? "w-full" : ""}
        ${m}
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
        !o && u && c === "left" && /* @__PURE__ */ e.jsx("span", { className: "mr-2 w-4 h-4 flex items-center justify-center", children: u }),
        t,
        !o && u && c === "right" && /* @__PURE__ */ e.jsx("span", { className: "ml-2 w-4 h-4 flex items-center justify-center", children: u })
      ]
    }
  );
}
function Bt({
  children: t,
  className: s = "",
  padding: a = "md",
  variant: l = "default",
  header: n,
  footer: i,
  onClick: o,
  glow: u = "none"
}) {
  const c = {
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
  }, m = {
    none: "",
    blue: "border-blue-500/20 shadow-glow-blue-sm hover:shadow-glow-blue",
    amber: "border-amber-500/20 shadow-glow-amber-sm hover:shadow-glow-amber"
  }, g = l === "cockpit" ? /* @__PURE__ */ e.jsx(
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
        ${u !== "none" ? m[u] : ""}
        ${s}
      `.trim().replace(/\s+/g, " "),
      onClick: o,
      children: [
        g,
        n && /* @__PURE__ */ e.jsx("div", { className: "px-6 py-4 border-b border-slate-200 dark:border-slate-700/50", children: n }),
        /* @__PURE__ */ e.jsx("div", { className: `${c[a]} relative z-10`, children: t }),
        i && /* @__PURE__ */ e.jsx("div", { className: "px-6 py-4 border-t border-slate-200 dark:border-slate-700/50", children: i })
      ]
    }
  );
}
const Hr = {
  sm: "p-1.5 [&>svg]:w-4 [&>svg]:h-4",
  md: "p-2 [&>svg]:w-5 [&>svg]:h-5",
  lg: "p-3 [&>svg]:w-6 [&>svg]:h-6"
}, Ur = {
  default: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300",
  active: "text-blue-600 dark:text-blue-400"
};
function It({
  icon: t,
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
      className: `transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed ${Hr[l]} ${Ur[n]} ${i}`,
      children: t
    }
  );
}
const Vt = ({
  variant: t = "card",
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
    switch (t) {
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
  return /* @__PURE__ */ e.jsx("div", { className: `space-y-4 ${a}`, children: Array.from({ length: s }).map((u, c) => /* @__PURE__ */ e.jsx("div", { children: o() }, c)) });
}, Jr = {
  blue: "from-blue-400 via-blue-500 to-blue-600",
  amber: "from-amber-400 via-orange-500 to-amber-600",
  green: "from-emerald-400 via-green-500 to-emerald-600",
  red: "from-red-400 via-rose-500 to-red-600",
  white: "from-white via-slate-100 to-white"
}, qr = {
  blue: "shadow-glow-blue-sm",
  amber: "shadow-glow-amber-sm",
  green: "shadow-glow-green",
  red: "shadow-glow-red",
  white: ""
}, Gr = {
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
}, Xr = {
  up: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 10l7-7m0 0l7 7m-7-7v18" }) }),
  down: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }),
  neutral: /* @__PURE__ */ e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h14" }) })
};
function Yt({
  value: t,
  label: s,
  icon: a,
  color: l = "blue",
  size: n = "md",
  trend: i,
  unit: o,
  className: u = "",
  onClick: c
}) {
  const b = Kr[n], m = c ? "button" : "div";
  return /* @__PURE__ */ e.jsxs(
    m,
    {
      onClick: c,
      className: `
        bg-gradient-to-b from-slate-800/80 to-slate-900/95
        backdrop-blur-xl
        border border-slate-700/50
        rounded-xl
        ${b.padding}
        ${c ? "cursor-pointer hover:border-slate-600/70 hover:shadow-surface-lg" : ""}
        transition-all duration-300
        ${qr[l]}
        ${u}
      `.trim().replace(/\s+/g, " "),
      children: [
        a && /* @__PURE__ */ e.jsx("div", { className: `${Gr[l]} ${b.icon} mb-3`, children: a }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `
            ${b.value}
            font-bold
            tracking-tight
            bg-gradient-to-r ${Jr[l]}
            bg-clip-text text-transparent
          `.trim().replace(/\s+/g, " "),
              children: t
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
                Xr[i.direction],
                i.value
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Zr = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12"
}, Qr = {
  primary: "text-blue-600",
  secondary: "text-gray-600",
  white: "text-white"
};
function et({
  size: t = "md",
  variant: s = "primary",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: `
        animate-spin
        ${Zr[t]}
        ${Qr[s]}
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
function Ht({
  message: t = "Loading...",
  size: s = "md",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center space-y-2 ${a}`,
      children: [
        /* @__PURE__ */ e.jsx(et, { size: s }),
        t && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: t })
      ]
    }
  );
}
function Ut({
  tabs: t,
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
          children: t.map((o) => /* @__PURE__ */ e.jsx(
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
const Jt = ({
  id: t,
  checked: s,
  onChange: a,
  disabled: l = !1,
  label: n,
  description: i,
  className: o = ""
}) => {
  const u = t || `toggle-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-start ${o}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ e.jsx(
      "input",
      {
        id: u,
        type: "checkbox",
        checked: s,
        onChange: (c) => a(c.target.checked),
        disabled: l,
        className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      }
    ) }),
    (n || i) && /* @__PURE__ */ e.jsxs("div", { className: "ml-3 text-sm", children: [
      n && /* @__PURE__ */ e.jsx(
        "label",
        {
          htmlFor: u,
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
function qt({
  children: t,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "h1",
    {
      className: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${z[s]} ${a}`,
      children: t
    }
  );
}
function Gt({
  children: t,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "h2",
    {
      className: `text-3xl md:text-4xl font-bold tracking-tight leading-tight ${z[s]} ${a}`,
      children: t
    }
  );
}
function Kt({
  children: t,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("h3", { className: `text-2xl md:text-3xl font-semibold tracking-tight ${z[s]} ${a}`, children: t });
}
function Xt({
  children: t,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("h4", { className: `text-xl md:text-2xl font-semibold ${z[s]} ${a}`, children: t });
}
function Zt({
  children: t,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("p", { className: `text-base leading-relaxed ${z[s]} ${a}`, children: t });
}
function Qt({
  children: t,
  color: s = "muted",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx("small", { className: `text-sm leading-normal ${z[s]} ${a}`, children: t });
}
function es({
  children: t,
  color: s = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: `text-xl md:text-2xl leading-relaxed font-light ${z[s]} ${a}`,
      children: t
    }
  );
}
function rs({
  children: t,
  className: s = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "p",
    {
      className: `text-sm leading-normal ${z.muted} ${s}`,
      children: t
    }
  );
}
function ts({
  children: t,
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
    t,
    l && !a && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: l }),
    a && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-600 dark:text-red-400", children: a })
  ] });
}
function ss({
  children: t,
  title: s,
  description: a,
  className: l = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `space-y-4 ${l}`, children: [
    (s || a) && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      s && /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: s }),
      a && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: a })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: t })
  ] });
}
const rt = {
  default: "text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500",
  error: "text-red-600 border-red-300 dark:border-red-600 focus:ring-red-500"
}, tt = V(
  ({
    label: t,
    description: s,
    variant: a = "default",
    className: l = "",
    disabled: n,
    id: i,
    ...o
  }, u) => {
    const c = i || `checkbox-${Math.random().toString(36).substr(2, 9)}`, b = `
    h-4 w-4 rounded border
    bg-white dark:bg-gray-800
    focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-50
    ${rt[a]}
    ${l}
  `.replace(/\s+/g, " ").trim();
    return t || s ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-start", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ e.jsx(
        "input",
        {
          ref: u,
          type: "checkbox",
          id: c,
          className: b,
          disabled: n,
          ...o
        }
      ) }),
      (t || s) && /* @__PURE__ */ e.jsxs("div", { className: "ml-3 text-sm", children: [
        t && /* @__PURE__ */ e.jsx(
          "label",
          {
            htmlFor: c,
            className: `
                  font-medium text-gray-700 dark:text-gray-300
                  ${n ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                `,
            children: t
          }
        ),
        s && /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: s })
      ] })
    ] }) : /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: u,
        type: "checkbox",
        id: c,
        className: b,
        disabled: n,
        ...o
      }
    );
  }
);
tt.displayName = "Checkbox";
const Ke = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, st = V(
  ({ variant: t = "default", className: s = "", disabled: a, ...l }, n) => {
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
        ${Ke[t]}
        ${s}
      `.replace(/\s+/g, " ").trim(),
        disabled: a,
        ...l
      }
    );
  }
);
st.displayName = "DatePicker";
const at = V(
  ({ variant: t = "default", className: s = "", disabled: a, ...l }, n) => {
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
        ${Ke[t]}
        ${s}
      `.replace(/\s+/g, " ").trim(),
        disabled: a,
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
}, lt = V(
  ({
    size: t = "md",
    variant: s = "default",
    startIcon: a,
    endIcon: l,
    className: n = "",
    disabled: i,
    ...o
  }, u) => {
    const c = `
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
            ${c}
            ${Je[t]}
            ${qe[s]}
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
        ref: u,
        className: `
        ${c}
        ${Je[t]}
        ${qe[s]}
        ${n}
      `.replace(/\s+/g, " ").trim(),
        disabled: i,
        ...o
      }
    );
  }
);
lt.displayName = "Input";
const ot = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base"
}, nt = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, it = V(
  ({
    size: t = "md",
    variant: s = "default",
    options: a,
    placeholder: l,
    className: n = "",
    disabled: i,
    ...o
  }, u) => {
    const c = `
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
          ${c}
          ${ot[t]}
          ${nt[s]}
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
it.displayName = "Select";
const dt = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, ct = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize"
}, ut = V(
  ({
    variant: t = "default",
    resize: s = "vertical",
    className: a = "",
    rows: l = 3,
    disabled: n,
    ...i
  }, o) => {
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
        ref: o,
        rows: l,
        className: `
        ${u}
        ${dt[t]}
        ${ct[s]}
        ${a}
      `.replace(/\s+/g, " ").trim(),
        disabled: n,
        ...i
      }
    );
  }
);
ut.displayName = "TextArea";
function as({
  icon: t,
  title: s,
  description: a,
  actions: l,
  className: n = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `text-center py-12 px-4 ${n}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-slate-400 [&>svg]:w-8 [&>svg]:h-8", children: t }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-slate-800 dark:text-white mb-2", children: s }),
    a && /* @__PURE__ */ e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto", children: a }),
    l && /* @__PURE__ */ e.jsx("div", { className: "flex gap-3 justify-center", children: l })
  ] });
}
const xt = () => /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) });
function ls({
  title: t = "Something went wrong",
  message: s,
  icon: a,
  onRetry: l,
  retryText: n = "Try Again",
  className: i = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `text-center py-12 px-4 ${i}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-red-500 dark:text-red-400", children: a || /* @__PURE__ */ e.jsx(xt, {}) }) }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-red-600 dark:text-red-400 mb-2", children: t }),
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
const bt = {
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
}, mt = {
  desktop: "w-4 h-4",
  mobile: "w-5 h-5",
  "bottom-nav": "w-5 h-5"
}, gt = {
  desktop: "",
  mobile: "",
  "bottom-nav": "text-xs"
};
function os({
  as: t,
  href: s,
  label: a,
  icon: l,
  isActive: n = !1,
  onClick: i,
  className: o = "",
  variant: u = "desktop",
  ...c
}) {
  const b = t || "a", m = bt[u], g = `${m.base} ${n ? m.active : m.inactive} ${o}`, f = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: mt[u], children: l }),
    /* @__PURE__ */ e.jsx("span", { className: gt[u], children: a })
  ] }), E = {
    className: g,
    onClick: i,
    ...c
  };
  return b === "a" ? E.href = s : (E.href = s, E.to = s), /* @__PURE__ */ e.jsx(b, { ...E, children: f });
}
const ns = ({
  items: t,
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
  s && /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg py-1 w-36 z-10", children: t.map((n, i) => /* @__PURE__ */ e.jsx(
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
] }), ht = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl"
};
function is({
  title: t,
  subtitle: s,
  action: a,
  size: l = "md",
  className: n = ""
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex items-center justify-between ${n}`, children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h2", { className: `font-semibold text-slate-800 dark:text-white ${ht[l]}`, children: t }),
      s && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 mt-1", children: s })
    ] }),
    a && /* @__PURE__ */ e.jsx("div", { children: a })
  ] });
}
const ft = {
  info: "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-b border-blue-500/30",
  success: "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-b border-emerald-500/30",
  warning: "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-b border-amber-400/30",
  error: "bg-gradient-to-r from-red-600 to-red-700 text-white border-b border-red-500/30",
  gradient: "bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white border-b border-purple-400/30"
}, pt = {
  info: "shadow-glow-blue",
  success: "shadow-lg shadow-emerald-500/20",
  warning: "shadow-glow-amber",
  error: "shadow-lg shadow-red-500/20",
  gradient: "shadow-lg shadow-purple-500/30"
}, vt = {
  top: "fixed top-0 left-0 right-0",
  bottom: "fixed bottom-0 left-0 right-0",
  inline: "relative"
}, ds = ({
  variant: t = "info",
  icon: s,
  message: a,
  actions: l,
  onDismiss: n,
  position: i = "inline",
  className: o = "",
  glow: u = !1
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: `
        ${vt[i]} 
        ${ft[t]} 
        ${u ? pt[t] : ""} 
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
), wt = {
  "top-left": "absolute top-2 left-2 z-20",
  "top-right": "absolute top-2 right-2 z-20",
  "bottom-left": "absolute bottom-2 left-2 z-20",
  "bottom-right": "absolute bottom-2 right-2 z-20",
  none: ""
}, kt = {
  default: "bg-slate-900/80 backdrop-blur-sm text-white border border-white/10",
  primary: "bg-blue-600/90 backdrop-blur-sm text-white border border-blue-400/30 shadow-glow-blue-sm",
  success: "bg-emerald-600/90 backdrop-blur-sm text-white border border-emerald-400/30",
  warning: "bg-amber-600/90 backdrop-blur-sm text-white border border-amber-400/30",
  danger: "bg-red-600/90 backdrop-blur-sm text-white border border-red-400/30",
  glass: "bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-lg"
}, se = ({
  children: t,
  position: s = "top-left",
  variant: a = "default",
  className: l = ""
}) => /* @__PURE__ */ e.jsx("div", { className: `${wt[s]} ${l}`, children: /* @__PURE__ */ e.jsx(
  "div",
  {
    className: `${kt[a]} px-2.5 py-1 rounded-md text-xs font-medium shadow-lg transition-all duration-200`,
    children: t
  }
) }), cs = ({
  topLeft: t,
  topRight: s,
  bottomLeft: a,
  bottomRight: l,
  topLeftVariant: n = "default",
  topRightVariant: i = "default",
  bottomLeftVariant: o = "default",
  bottomRightVariant: u = "default",
  interactive: c = !0,
  className: b = ""
}) => /* @__PURE__ */ e.jsxs("div", { className: `absolute inset-0 pointer-events-none ${b}`, children: [
  t && /* @__PURE__ */ e.jsx(se, { position: "top-left", variant: n, children: t }),
  s && /* @__PURE__ */ e.jsx(se, { position: "top-right", variant: i, children: s }),
  a && /* @__PURE__ */ e.jsx(se, { position: "bottom-left", variant: o, children: a }),
  l && /* @__PURE__ */ e.jsx(se, { position: "bottom-right", variant: u, children: l }),
  !c && /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute inset-0 cursor-default z-30 pointer-events-auto",
      title: "Preview - tap to expand for interaction"
    }
  )
] }), yt = {
  primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-lg",
  secondary: "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500",
  gradient: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md hover:shadow-lg"
}, jt = {
  blue: "hover:shadow-glow-blue hover:border-blue-500/30",
  purple: "hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30",
  amber: "hover:shadow-glow-amber hover:border-amber-500/30",
  cyan: "hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/30"
}, us = ({
  icon: t,
  iconBg: s = "bg-blue-600",
  title: a,
  description: l,
  buttonText: n,
  buttonVariant: i = "primary",
  onClick: o,
  className: u = "",
  glass: c = !1,
  glow: b = !1,
  glowColor: m = "blue"
}) => {
  const g = c ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50" : "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700/60", f = b ? jt[m] : "";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `
        ${g}
        rounded-xl p-6 
        border
        cursor-pointer
        transition-all duration-300 ease-out
        hover:border-slate-600
        ${f}
        ${u}
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
            children: /* @__PURE__ */ e.jsx("span", { className: "text-white text-xl", children: t })
          }
        ),
        /* @__PURE__ */ e.jsx("h4", { className: "text-white font-semibold text-lg mb-2 text-center", children: a }),
        /* @__PURE__ */ e.jsx("p", { className: "text-slate-400 text-sm mb-5 text-center leading-relaxed", children: l }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: (E) => {
              E.stopPropagation(), o();
            },
            className: `
          w-full px-4 py-2.5 
          ${yt[i]}
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
}, Nt = {
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
}, xs = ({
  title: t,
  description: s,
  accentColor: a = "blue",
  children: l,
  className: n = "",
  glass: i = !1,
  glow: o = !1
}) => {
  const u = Nt[a], c = i ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50" : "bg-slate-800 border-slate-700";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `
        ${c}
        rounded-xl shadow-lg border
        ${o ? `shadow-xl ${u.glow}` : ""}
        p-4 sm:p-6 
        transition-all duration-300
        hover:border-slate-600
        ${n}
      `.trim().replace(/\s+/g, " "),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: `border-l-4 ${u.border} pl-3 sm:pl-4 mb-4 sm:mb-6`, children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-base sm:text-lg font-semibold text-white", children: t }),
          s && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-slate-400", children: s })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: l })
      ]
    }
  );
}, $t = {
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
function bs({
  onClick: t,
  loading: s = !1,
  children: a = "Load More",
  className: l = "",
  variant: n = "default"
}) {
  return /* @__PURE__ */ e.jsx("div", { className: `text-center ${l}`, children: /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: t,
      disabled: s,
      className: `
          px-6 py-3 
          rounded-xl
          transition-all duration-200 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
          font-medium
          ${$t[n]}
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
const Ct = {
  red: "text-red-500 hover:text-red-600",
  blue: "text-blue-500 hover:text-blue-600",
  green: "text-green-500 hover:text-green-600",
  yellow: "text-yellow-500 hover:text-yellow-600",
  purple: "text-purple-500 hover:text-purple-600"
};
function ms({
  icon: t,
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
      className: `flex flex-col items-center space-y-1 flex-1 py-2 transition-colors ${l ? Ct[i] : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"} ${o}`,
      onClick: n,
      "aria-label": s,
      title: s,
      children: [
        t,
        a !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "text-xs font-medium", children: a })
      ]
    }
  );
}
const Et = (t) => {
  switch (t) {
    case "legendary":
      return "from-yellow-400 to-orange-500";
    case "epic":
      return "from-purple-400 to-pink-500";
    case "rare":
      return "from-blue-400 to-cyan-500";
    default:
      return "from-gray-400 to-gray-600";
  }
}, _t = (t) => {
  switch (t) {
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
function gs({
  achievements: t,
  title: s = "🏆 Achievements",
  showViewAll: a = !0,
  onViewAll: l,
  className: n = ""
}) {
  const i = t.filter(
    (o) => o.completed || o.progress >= o.total
  ).length;
  return /* @__PURE__ */ e.jsxs("div", { className: `space-y-4 ${n}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: s }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [
        i,
        " / ",
        t.length
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "grid gap-3", children: t.map((o) => {
      const u = o.rarity || "common", c = o.completed || o.progress >= o.total;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `relative p-4 rounded-lg border transition-all hover:shadow-md ${c ? `bg-gradient-to-r ${Et(u)} text-white ${_t(u)}` : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"}`,
          children: [
            c && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-lg" }),
            /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${c ? "bg-white/20" : "bg-slate-100 dark:bg-slate-700"}`,
                  children: o.icon
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx(
                      "h4",
                      {
                        className: `font-medium ${c ? "text-white" : "text-slate-900 dark:text-white"}`,
                        children: o.title
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "p",
                      {
                        className: `text-sm mt-1 ${c ? "text-white/90" : "text-slate-600 dark:text-slate-400"}`,
                        children: o.description
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "span",
                    {
                      className: `px-2 py-1 text-xs font-medium rounded capitalize ${c ? "bg-white/20 text-white" : u === "legendary" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : u === "epic" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" : u === "rare" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"}`,
                      children: u
                    }
                  )
                ] }),
                !c && /* @__PURE__ */ e.jsxs("div", { className: "mt-3", children: [
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
                c && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-white/80 mt-2", children: "✅ Completed" })
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
function hs({
  items: t = [],
  emptyIcon: s,
  emptyTitle: a = "No items to show",
  emptyDescription: l = "Be the first to add something to the feed",
  emptyActionText: n = "Add Item",
  onEmptyAction: i,
  showLoadMore: o = !1,
  loadMoreText: u = "Load More",
  onLoadMore: c,
  header: b,
  className: m = "",
  renderItem: g
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `max-w-4xl mx-auto p-4 lg:pt-16 pb-20 lg:pb-6 ${m}`, children: [
    b,
    /* @__PURE__ */ e.jsx("div", { className: "space-y-6", children: t.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 text-center", children: [
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
    ] }) : t.map((f) => /* @__PURE__ */ e.jsx("div", { children: g ? g(f) : f.content }, f.id)) }),
    t.length > 0 && o && /* @__PURE__ */ e.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ e.jsx(Yr, { variant: "secondary", onClick: c, children: u }) })
  ] });
}
function fs({
  totalReactions: t,
  totalComments: s,
  userReacted: a = !1,
  reactionUsers: l = [],
  reactionLabel: n = "kudos",
  commentLabel: i = "comment",
  className: o = ""
}) {
  if (t === 0 && s === 0)
    return null;
  const u = () => {
    const c = [];
    if (t > 0 && (a ? t === 1 ? c.push(`You gave ${n}`) : c.push(
      `You and ${t - 1} ${t === 2 ? "other" : "others"} gave ${n}`
    ) : c.push(
      `${t} ${t === 1 ? "person" : "people"} gave ${n}`
    )), s > 0) {
      const b = s === 1 ? i : `${i}s`;
      c.push(`${s} ${b}`);
    }
    return c.join(" • ");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `px-6 py-3 flex items-center space-x-3 ${o}`, children: [
    l.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex -space-x-1", children: [
      l.slice(0, 3).map((c, b) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden",
          children: c.avatar ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: c.avatar,
              alt: c.name,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-xs font-medium text-slate-600 dark:text-slate-300", children: c.name.charAt(0).toUpperCase() }) })
        },
        b
      )),
      l.length > 3 && /* @__PURE__ */ e.jsx("div", { className: "w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("span", { className: "text-xs font-medium text-slate-600 dark:text-slate-300", children: [
        "+",
        l.length - 3
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 flex-1", children: u() })
  ] });
}
function ps({
  storageKey: t = "cookie-consent",
  privacyUrl: s = "/privacy",
  message: a = "We use cookies to improve your experience and for analytics purposes.",
  learnMoreText: l = "Learn More",
  acceptText: n = "Accept Cookies",
  onAccept: i,
  onLearnMore: o,
  className: u = ""
}) {
  const [c, b] = F(!1);
  Ge(() => {
    localStorage.getItem(t) || b(!0);
  }, [t]);
  const m = () => {
    localStorage.setItem(t, "accepted"), b(!1), i == null || i();
  }, g = () => {
    localStorage.setItem(t, "learn-more"), b(!1), o == null || o();
  };
  return c ? /* @__PURE__ */ e.jsx(
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
              onClick: g,
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
              onClick: g,
              className: "px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-center",
              children: l
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: m,
              className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
              children: n
            }
          )
        ] })
      ] }) })
    }
  ) : null;
}
const Rt = {
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
function vs({
  error: t,
  variant: s = "error",
  dismissible: a = !1,
  onDismiss: l,
  className: n = "",
  children: i
}) {
  if (!t && !i) return null;
  const o = Rt[s];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `${o.bg} border ${o.border} ${o.text} px-4 py-3 rounded flex items-start gap-3 ${n}`,
      role: "alert",
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "flex-shrink-0", children: o.icon }),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: i || t }),
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
const ws = ({
  label: t,
  placeholder: s = "Type to search...",
  value: a,
  onSearch: l,
  onSelect: n,
  onClear: i,
  error: o,
  disabled: u = !1,
  minSearchLength: c = 2,
  debounceMs: b = 300,
  className: m = ""
}) => {
  const [g, f] = F(!1), [E, S] = F(""), [O, P] = F([]), [M, j] = F(!1), [Y, A] = F(-1), le = he(null), oe = he(null), D = he();
  Ge(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const q = async (k) => {
    if (k.length < c) {
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
  }, G = (k) => {
    D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      q(k);
    }, b);
  }, ne = (k) => {
    const N = k.target.value;
    S(N), A(-1), N.length >= c ? (j(!0), G(N)) : (P([]), j(!1));
  }, K = (k) => {
    n(k), S(""), f(!1), P([]), A(-1);
  }, X = () => {
    S(""), f(!1), P([]), A(-1), i && i();
  }, L = (k) => {
    if (!g || O.length === 0) {
      (k.key === "ArrowDown" || k.key === "Enter") && (f(!0), E.length >= c && q(E));
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
        k.preventDefault(), Y >= 0 && K(O[Y]);
        break;
      case "Escape":
        f(!1), A(-1);
        break;
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `relative ${m}`, children: [
    /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: t }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      a && !g ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 min-h-[42px]", children: [
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
              value: E,
              onChange: ne,
              onKeyDown: L,
              onFocus: () => f(!0),
              placeholder: s,
              disabled: u,
              className: `w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 ${o ? "border-red-300 dark:border-red-700" : "border-gray-300 dark:border-gray-600"} ${u ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"} text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400`
            }
          ),
          M && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 dark:border-blue-400" }) })
        ] })
      ),
      g && O.length > 0 && /* @__PURE__ */ e.jsx(
        "ul",
        {
          ref: oe,
          className: "absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto",
          children: O.map((k, N) => /* @__PURE__ */ e.jsxs(
            "li",
            {
              onClick: () => K(k),
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
      g && !M && E.length >= c && O.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg p-3", children: /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: "No results found" }) })
    ] }),
    o && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: o })
  ] });
};
function ks({
  themePreference: t,
  resolvedTheme: s,
  onThemeChange: a,
  className: l = ""
}) {
  const n = () => {
    switch (t) {
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
  }, o = () => t === "system" ? /* @__PURE__ */ e.jsx(
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
    switch (t) {
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
      "aria-label": u(),
      title: `Current: ${t}${t === "system" ? ` (${s})` : ""}`,
      children: o()
    }
  );
}
function ys({
  notifications: t,
  unreadCount: s,
  onMarkAsRead: a,
  onMarkAllAsRead: l,
  onDismiss: n,
  onViewAll: i,
  className: o = ""
}) {
  const [u, c] = F(!1), b = (g) => {
    const f = new Date(g), S = Math.floor(
      ((/* @__PURE__ */ new Date()).getTime() - f.getTime()) / (1e3 * 60 * 60)
    );
    return S < 1 ? "Just now" : S < 24 ? `${S}h ago` : S < 48 ? "Yesterday" : f.toLocaleDateString();
  }, m = (g) => {
    switch (g) {
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
        onClick: () => c(!u),
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
          onClick: () => c(!1)
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
        /* @__PURE__ */ e.jsx("div", { className: "max-h-80 overflow-y-auto", children: t.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-6 text-center text-slate-500 dark:text-slate-400", children: [
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
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-1", children: t.map((g) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer ${g.isRead ? "" : "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500"}`,
            onClick: () => a(g.id),
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: `flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm border ${m(
                    g.priority
                  )}`,
                  children: g.icon || "📢"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ e.jsx(
                    "p",
                    {
                      className: `text-sm font-medium text-slate-900 dark:text-white ${g.isRead ? "" : "font-semibold"}`,
                      children: g.title
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: (f) => {
                        f.stopPropagation(), n(g.id);
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
                /* @__PURE__ */ e.jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mt-1", children: g.message }),
                /* @__PURE__ */ e.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-500 mt-2", children: b(g.timestamp) })
              ] })
            ] })
          },
          g.id
        )) }) }),
        t.length > 0 && i && /* @__PURE__ */ e.jsx("div", { className: "p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              c(!1), i();
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
  message: t = "Loading...",
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
  }, c = o(), b = u(), m = a === "aviation" ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `${c.spinner} ${b.spinner} rounded-full animate-spin mx-auto shadow-lg bg-gradient-to-br from-slate-800 to-slate-700`
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
      className: `${c.spinner} ${b.spinner} rounded-full animate-spin mx-auto`
    }
  ), g = i && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center space-x-2 mt-2", children: [
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
  ] }), f = /* @__PURE__ */ e.jsxs("div", { className: `text-center ${c.container}`, children: [
    m,
    t && /* @__PURE__ */ e.jsx(
      "p",
      {
        className: `${c.text} ${b.text} font-light tracking-wide m-0`,
        children: t
      }
    ),
    g
  ] });
  return l ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center ${b.background} ${n}`,
      children: f
    }
  ) : /* @__PURE__ */ e.jsx("div", { className: `flex items-center justify-center p-8 ${n}`, children: f });
}
const js = (t) => /* @__PURE__ */ e.jsx(ae, { ...t, fullscreen: !0 }), Ns = (t) => /* @__PURE__ */ e.jsx(ae, { ...t, variant: "aviation" }), $s = (t) => /* @__PURE__ */ e.jsx(ae, { ...t, variant: "minimal" }), Cs = (t) => /* @__PURE__ */ e.jsx(ae, { ...t, size: "sm" }), St = ({ icon: t, isActive: s }) => {
  const a = `w-4 h-4 transition-colors ${s ? "text-blue-700 dark:text-blue-300" : ""}`;
  switch (t) {
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
}, Tt = ({ text: t = "App" }) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "2", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) }) }),
  /* @__PURE__ */ e.jsx("h1", { className: "text-xl font-light text-slate-800 dark:text-white", children: t })
] }), Lt = () => /* @__PURE__ */ e.jsx("div", { className: "animate-pulse w-24 h-8 bg-slate-200 dark:bg-slate-700 rounded" });
function Es({
  items: t,
  currentPath: s,
  isAuthenticated: a = !1,
  isLoading: l = !1,
  brand: n,
  brandText: i = "App",
  rightContent: o,
  onNavigate: u,
  className: c = ""
}) {
  const b = (m, g) => {
    u && (m.preventDefault(), u(g));
  };
  return /* @__PURE__ */ e.jsx("nav", { className: `bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm ${c}`, children: /* @__PURE__ */ e.jsx("div", { className: "w-full px-6 lg:px-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between h-16", children: [
    /* @__PURE__ */ e.jsx(
      "a",
      {
        href: "/",
        onClick: (m) => b(m, "/"),
        className: "flex items-center",
        children: n || /* @__PURE__ */ e.jsx(Tt, { text: i })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "hidden md:flex items-center space-x-8", children: t.map((m) => {
      const g = m.isActive ?? s === m.href;
      return /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: m.href,
          onClick: (f) => b(f, m.href),
          className: `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${g ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"}`,
          children: [
            m.icon && /* @__PURE__ */ e.jsx(St, { icon: m.icon, isActive: g }),
            m.name
          ]
        },
        m.href
      );
    }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-4", children: l ? /* @__PURE__ */ e.jsx(Lt, {}) : o })
  ] }) }) });
}
export {
  gs as AchievementsPanel,
  ms as ActionButton,
  us as ActionCard,
  hs as ActivityFeed,
  Es as AdaptiveNavigation,
  ws as Autocomplete,
  Dt as Avatar,
  Wt as AvatarStack,
  Ns as AviationLoader,
  Ft as Badge,
  ds as Banner,
  Yr as Button,
  Bt as Card,
  tt as Checkbox,
  Mt as Container,
  ps as CookieConsent,
  st as DatePicker,
  at as DateTimePicker,
  as as EmptyState,
  fs as EngagementSummary,
  vs as ErrorBanner,
  ls as ErrorState,
  Pt as Flex,
  ts as FormField,
  ss as FormSection,
  js as FullScreenLoader,
  At as Grid,
  qt as H1,
  Gt as H2,
  Kt as H3,
  Xt as H4,
  It as IconButton,
  se as InfoBadge,
  cs as InfoOverlay,
  lt as Input,
  es as Lead,
  bs as LoadMoreButton,
  ae as Loader,
  Ht as Loading,
  $s as MinimalLoader,
  rs as Muted,
  os as NavItem,
  ys as NotificationBell,
  ns as OptionsMenu,
  zt as Section,
  is as SectionHeader,
  it as Select,
  xs as SettingCard,
  Vt as Skeleton,
  Qt as Small,
  Cs as SmallLoader,
  et as Spinner,
  Yt as StatCard,
  Ut as TabNavigation,
  Zt as Text,
  ut as TextArea,
  ks as ThemeToggle,
  Jt as Toggle
};
