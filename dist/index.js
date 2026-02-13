import te, { forwardRef as D } from "react";
var H = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function wr() {
  if (_e) return M;
  _e = 1;
  var s = te, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(b, u, f) {
    var p, j = {}, k = null, E = null;
    f !== void 0 && (k = "" + f), u.key !== void 0 && (k = "" + u.key), u.ref !== void 0 && (E = u.ref);
    for (p in u) o.call(u, p) && !d.hasOwnProperty(p) && (j[p] = u[p]);
    if (b && b.defaultProps) for (p in u = b.defaultProps, u) j[p] === void 0 && (j[p] = u[p]);
    return { $$typeof: t, type: b, key: k, ref: E, props: j, _owner: n.current };
  }
  return M.Fragment = a, M.jsx = c, M.jsxs = c, M;
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
var Re;
function yr() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && (function() {
    var s = te, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), b = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), W = Symbol.iterator, ze = "@@iterator";
    function Le(e) {
      if (e === null || typeof e != "object")
        return null;
      var l = W && e[W] || e[ze];
      return typeof l == "function" ? l : null;
    }
    var P = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(e) {
      {
        for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), m = 1; m < l; m++)
          i[m - 1] = arguments[m];
        Me("error", e, i);
      }
    }
    function Me(e, l, i) {
      {
        var m = P.ReactDebugCurrentFrame, h = m.getStackAddendum();
        h !== "" && (l += "%s", i = i.concat([h]));
        var v = i.map(function(x) {
          return String(x);
        });
        v.unshift("Warning: " + l), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Ie = !1, We = !1, Be = !1, Ye = !1, Ve = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === d || Ve || e === n || e === f || e === p || Ye || e === E || Ie || We || Be || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === j || e.$$typeof === c || e.$$typeof === b || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function He(e, l, i) {
      var m = e.displayName;
      if (m)
        return m;
      var h = l.displayName || l.name || "";
      return h !== "" ? i + "(" + h + ")" : i;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case a:
          return "Portal";
        case d:
          return "Profiler";
        case n:
          return "StrictMode";
        case f:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var l = e;
            return se(l) + ".Consumer";
          case c:
            var i = e;
            return se(i._context) + ".Provider";
          case u:
            return He(e, e.render, "ForwardRef");
          case j:
            var m = e.displayName || null;
            return m !== null ? m : R(e.type) || "Memo";
          case k: {
            var h = e, v = h._payload, x = h._init;
            try {
              return R(x(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, z = 0, le, oe, ne, ie, de, ce, ue;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function qe() {
      {
        if (z === 0) {
          le = console.log, oe = console.info, ne = console.warn, ie = console.error, de = console.group, ce = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        z++;
      }
    }
    function Je() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: le
            }),
            info: T({}, e, {
              value: oe
            }),
            warn: T({}, e, {
              value: ne
            }),
            error: T({}, e, {
              value: ie
            }),
            group: T({}, e, {
              value: de
            }),
            groupCollapsed: T({}, e, {
              value: ce
            }),
            groupEnd: T({}, e, {
              value: ue
            })
          });
        }
        z < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = P.ReactCurrentDispatcher, G;
    function B(e, l, i) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (h) {
            var m = h.stack.trim().match(/\n( *(at )?)/);
            G = m && m[1] || "";
          }
        return `
` + G + e;
      }
    }
    var K = !1, Y;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ge();
    }
    function me(e, l) {
      if (!e || K)
        return "";
      {
        var i = Y.get(e);
        if (i !== void 0)
          return i;
      }
      var m;
      K = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = J.current, J.current = null, qe();
      try {
        if (l) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (C) {
              m = C;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (C) {
              m = C;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            m = C;
          }
          e();
        }
      } catch (C) {
        if (C && m && typeof C.stack == "string") {
          for (var g = C.stack.split(`
`), N = m.stack.split(`
`), w = g.length - 1, y = N.length - 1; w >= 1 && y >= 0 && g[w] !== N[y]; )
            y--;
          for (; w >= 1 && y >= 0; w--, y--)
            if (g[w] !== N[y]) {
              if (w !== 1 || y !== 1)
                do
                  if (w--, y--, y < 0 || g[w] !== N[y]) {
                    var _ = `
` + g[w].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, _), _;
                  }
                while (w >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = v, Je(), Error.prepareStackTrace = h;
      }
      var F = e ? e.displayName || e.name : "", O = F ? B(F) : "";
      return typeof e == "function" && Y.set(e, O), O;
    }
    function Ke(e, l, i) {
      return me(e, !1);
    }
    function Xe(e) {
      var l = e.prototype;
      return !!(l && l.isReactComponent);
    }
    function V(e, l, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Xe(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case f:
          return B("Suspense");
        case p:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ke(e.render);
          case j:
            return V(e.type, l, i);
          case k: {
            var m = e, h = m._payload, v = m._init;
            try {
              return V(v(h), l, i);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ge = {}, xe = P.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var l = e._owner, i = V(e.type, e._source, l ? l.type : null);
        xe.setExtraStackFrame(i);
      } else
        xe.setExtraStackFrame(null);
    }
    function Ze(e, l, i, m, h) {
      {
        var v = Function.call.bind(L);
        for (var x in e)
          if (v(e, x)) {
            var g = void 0;
            try {
              if (typeof e[x] != "function") {
                var N = Error((m || "React class") + ": " + i + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              g = e[x](l, x, m, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              g = w;
            }
            g && !(g instanceof Error) && (U(h), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", i, x, typeof g), U(null)), g instanceof Error && !(g.message in ge) && (ge[g.message] = !0, U(h), $("Failed %s type: %s", i, g.message), U(null));
          }
      }
    }
    var Qe = Array.isArray;
    function X(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, i = l && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function rr(e) {
      try {
        return fe(e), !1;
      } catch {
        return !0;
      }
    }
    function fe(e) {
      return "" + e;
    }
    function he(e) {
      if (rr(e))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), fe(e);
    }
    var pe = P.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ve, we;
    function ar(e) {
      if (L.call(e, "ref")) {
        var l = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (L.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lr(e, l) {
      typeof e.ref == "string" && pe.current;
    }
    function or(e, l) {
      {
        var i = function() {
          ve || (ve = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function nr(e, l) {
      {
        var i = function() {
          we || (we = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var ir = function(e, l, i, m, h, v, x) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: l,
        ref: i,
        props: x,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function dr(e, l, i, m, h) {
      {
        var v, x = {}, g = null, N = null;
        i !== void 0 && (he(i), g = "" + i), sr(l) && (he(l.key), g = "" + l.key), ar(l) && (N = l.ref, lr(l, h));
        for (v in l)
          L.call(l, v) && !tr.hasOwnProperty(v) && (x[v] = l[v]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (v in w)
            x[v] === void 0 && (x[v] = w[v]);
        }
        if (g || N) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && or(x, y), N && nr(x, y);
        }
        return ir(e, g, N, h, m, pe.current, x);
      }
    }
    var Z = P.ReactCurrentOwner, ye = P.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var l = e._owner, i = V(e.type, e._source, l ? l.type : null);
        ye.setExtraStackFrame(i);
      } else
        ye.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function je() {
      {
        if (Z.current) {
          var e = R(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      return "";
    }
    var ke = {};
    function ur(e) {
      {
        var l = je();
        if (!l) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (l = `

Check the top-level render call using <` + i + ">.");
        }
        return l;
      }
    }
    function $e(e, l) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = ur(l);
        if (ke[i])
          return;
        ke[i] = !0;
        var m = "";
        e && e._owner && e._owner !== Z.current && (m = " It was passed a child from " + R(e._owner.type) + "."), A(e), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, m), A(null);
      }
    }
    function Ne(e, l) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var i = 0; i < e.length; i++) {
            var m = e[i];
            ee(m) && $e(m, l);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = Le(e);
          if (typeof h == "function" && h !== e.entries)
            for (var v = h.call(e), x; !(x = v.next()).done; )
              ee(x.value) && $e(x.value, l);
        }
      }
    }
    function br(e) {
      {
        var l = e.type;
        if (l == null || typeof l == "string")
          return;
        var i;
        if (typeof l == "function")
          i = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === j))
          i = l.propTypes;
        else
          return;
        if (i) {
          var m = R(l);
          Ze(i, e.props, "prop", m, e);
        } else if (l.PropTypes !== void 0 && !Q) {
          Q = !0;
          var h = R(l);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(e) {
      {
        for (var l = Object.keys(e.props), i = 0; i < l.length; i++) {
          var m = l[i];
          if (m !== "children" && m !== "key") {
            A(e), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), $("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Ce = {};
    function Ee(e, l, i, m, h, v) {
      {
        var x = Ue(e);
        if (!x) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = cr();
          N ? g += N : g += je();
          var w;
          e === null ? w = "null" : X(e) ? w = "array" : e !== void 0 && e.$$typeof === t ? (w = "<" + (R(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, g);
        }
        var y = dr(e, l, i, h, v);
        if (y == null)
          return y;
        if (x) {
          var _ = l.children;
          if (_ !== void 0)
            if (m)
              if (X(_)) {
                for (var F = 0; F < _.length; F++)
                  Ne(_[F], e);
                Object.freeze && Object.freeze(_);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(_, e);
        }
        if (L.call(l, "key")) {
          var O = R(e), C = Object.keys(l).filter(function(vr) {
            return vr !== "key";
          }), re = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[O + re]) {
            var pr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, O, pr, O), Ce[O + re] = !0;
          }
        }
        return e === o ? mr(y) : br(y), y;
      }
    }
    function gr(e, l, i) {
      return Ee(e, l, i, !0);
    }
    function xr(e, l, i) {
      return Ee(e, l, i, !1);
    }
    var fr = xr, hr = gr;
    I.Fragment = o, I.jsx = fr, I.jsxs = hr;
  })()), I;
}
var Se;
function jr() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? H.exports = wr() : H.exports = yr()), H.exports;
}
var r = jr();
const kr = {
  sm: "max-w-sm",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full"
}, $r = {
  none: "",
  sm: "px-4 sm:px-6",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-6 sm:px-8 lg:px-12"
};
function jt({
  children: s,
  size: t = "md",
  padding: a = "md",
  className: o = ""
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `
      mx-auto
      ${kr[t]}
      ${$r[a]}
      ${o}
    `.trim(),
      children: s
    }
  );
}
const Nr = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse"
}, Cr = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, Er = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
}, _r = {
  none: "",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6"
};
function kt({
  children: s,
  direction: t = "row",
  justify: a = "start",
  align: o = "start",
  wrap: n = !1,
  gap: d = "md",
  className: c = ""
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `
      flex
      ${Nr[t]}
      ${Cr[a]}
      ${Er[o]}
      ${n ? "flex-wrap" : ""}
      ${_r[d]}
      ${c}
    `.trim(),
      children: s
    }
  );
}
const Rr = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12"
}, Sr = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12"
}, Tr = {
  none: "gap-0",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8"
};
function $t({
  children: s,
  cols: t = 1,
  gap: a = "md",
  responsive: o = !0,
  className: n = ""
}) {
  const d = o ? Sr[t] : Rr[t];
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `
      grid
      ${d}
      ${Tr[a]}
      ${n}
    `.trim(),
      children: s
    }
  );
}
const Or = {
  default: "bg-white dark:bg-gray-800",
  card: "bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700",
  hero: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
  sidebar: "bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700"
}, Pr = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-12"
};
function Nt({
  children: s,
  variant: t = "default",
  spacing: a = "md",
  className: o = ""
}) {
  return /* @__PURE__ */ r.jsx(
    "section",
    {
      className: `
      ${Or[t]}
      ${Pr[a]}
      ${o}
    `.trim(),
      children: s
    }
  );
}
const Ar = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl"
}, Fr = {
  circle: "rounded-full",
  square: "rounded-lg"
};
function Ct({
  src: s,
  alt: t = "",
  initials: a,
  size: o = "md",
  variant: n = "circle",
  className: d = ""
}) {
  const [c, b] = te.useState(!1), u = a || t.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2), f = !s || c;
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `
      inline-flex items-center justify-center
      bg-gray-200 dark:bg-gray-700
      text-gray-700 dark:text-gray-300
      font-medium
      overflow-hidden
      ${Ar[o]}
      ${Fr[n]}
      ${d}
    `.trim(),
      children: f ? /* @__PURE__ */ r.jsx("span", { children: u }) : /* @__PURE__ */ r.jsx(
        "img",
        {
          src: s,
          alt: t,
          className: "w-full h-full object-cover",
          onError: () => b(!0)
        }
      )
    }
  );
}
const Te = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10"
}, Oe = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Et = ({
  users: s,
  maxVisible: t = 3,
  size: a = "sm",
  className: o = ""
}) => {
  if (s.length === 0) return null;
  const n = s.slice(0, t), d = s.length - t;
  return /* @__PURE__ */ r.jsxs("div", { className: `flex -space-x-1 ${o}`, children: [
    n.map((c) => /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `${Te[a]} rounded-full border-2 border-white dark:border-slate-800 overflow-hidden`,
        title: c.name,
        children: c.avatar ? /* @__PURE__ */ r.jsx("img", { src: c.avatar, alt: c.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ r.jsx("div", { className: `w-full h-full bg-blue-500 flex items-center justify-center ${Oe[a]} text-white font-medium`, children: c.name.charAt(0).toUpperCase() })
      },
      c.id
    )),
    d > 0 && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `${Te[a]} rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center`,
        children: /* @__PURE__ */ r.jsxs("span", { className: `${Oe[a]} font-medium text-slate-600 dark:text-slate-300`, children: [
          "+",
          d
        ] })
      }
    )
  ] });
}, Dr = {
  default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  achievement: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm"
}, zr = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base"
};
function _t({
  children: s,
  variant: t = "default",
  size: a = "md",
  icon: o,
  className: n = ""
}) {
  return /* @__PURE__ */ r.jsxs(
    "span",
    {
      className: `
      inline-flex items-center
      font-medium rounded-full
      ${Dr[t]}
      ${zr[a]}
      ${n}
    `.trim(),
      children: [
        o && /* @__PURE__ */ r.jsx("span", { className: "mr-1 w-3 h-3", children: o }),
        s
      ]
    }
  );
}
const Lr = {
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
}, Pe = {
  primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
  danger: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600",
  success: "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600",
  glow: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
  "glow-amber": "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500"
}, Mr = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg"
};
function Rt({
  children: s,
  variant: t = "primary",
  size: a = "md",
  type: o = "button",
  onClick: n,
  disabled: d = !1,
  loading: c = !1,
  icon: b,
  iconPosition: u = "left",
  fullWidth: f = !1,
  className: p = "",
  gradient: j = !1
}) {
  const k = d || c, E = t in Pe, W = j && E ? Pe[t] : "";
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: o,
      onClick: n,
      disabled: k,
      className: `
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
        disabled:cursor-not-allowed
        ${Lr[t]}
        ${W}
        ${Mr[a]}
        ${f ? "w-full" : ""}
        ${p}
      `.trim().replace(/\s+/g, " "),
      children: [
        c && /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "animate-spin -ml-1 mr-2 h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ r.jsx(
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
              /* @__PURE__ */ r.jsx(
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
        !c && b && u === "left" && /* @__PURE__ */ r.jsx("span", { className: "mr-2 w-4 h-4 flex items-center justify-center", children: b }),
        s,
        !c && b && u === "right" && /* @__PURE__ */ r.jsx("span", { className: "ml-2 w-4 h-4 flex items-center justify-center", children: b })
      ]
    }
  );
}
function St({
  children: s,
  className: t = "",
  padding: a = "md",
  variant: o = "default",
  header: n,
  footer: d,
  onClick: c,
  glow: b = "none"
}) {
  const u = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }, f = {
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
  }, p = {
    none: "",
    blue: "border-blue-500/20 shadow-glow-blue-sm hover:shadow-glow-blue",
    amber: "border-amber-500/20 shadow-glow-amber-sm hover:shadow-glow-amber"
  }, j = o === "cockpit" ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "absolute inset-0 rounded-xl pointer-events-none",
      style: {
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.2)"
      }
    }
  ) : null, k = c ? "button" : "div";
  return /* @__PURE__ */ r.jsxs(
    k,
    {
      className: `
        rounded-xl relative
        ${f[o]} 
        ${b !== "none" ? p[b] : ""}
        ${t}
      `.trim().replace(/\s+/g, " "),
      onClick: c,
      children: [
        j,
        n && /* @__PURE__ */ r.jsx("div", { className: "px-6 py-4 border-b border-slate-200 dark:border-slate-700/50", children: n }),
        /* @__PURE__ */ r.jsx("div", { className: `${u[a]} relative z-10`, children: s }),
        d && /* @__PURE__ */ r.jsx("div", { className: "px-6 py-4 border-t border-slate-200 dark:border-slate-700/50", children: d })
      ]
    }
  );
}
const Ir = {
  sm: "p-1.5 [&>svg]:w-4 [&>svg]:h-4",
  md: "p-2 [&>svg]:w-5 [&>svg]:h-5",
  lg: "p-3 [&>svg]:w-6 [&>svg]:h-6"
}, Wr = {
  default: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300",
  active: "text-blue-600 dark:text-blue-400"
};
function Tt({
  icon: s,
  onClick: t,
  label: a,
  size: o = "md",
  variant: n = "default",
  className: d = "",
  disabled: c = !1
}) {
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      onClick: t,
      disabled: c,
      "aria-label": a,
      className: `transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed ${Ir[o]} ${Wr[n]} ${d}`,
      children: s
    }
  );
}
const Ot = ({
  variant: s = "card",
  count: t = 3,
  className: a = ""
}) => {
  const o = () => /* @__PURE__ */ r.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-6 animate-pulse", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full" }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ r.jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-2" }),
        /* @__PURE__ */ r.jsx("div", { className: "h-3 bg-slate-200 dark:bg-slate-700 rounded w-20" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "h-20 bg-slate-200 dark:bg-slate-700 rounded mb-4" }),
    /* @__PURE__ */ r.jsx("div", { className: "h-32 bg-slate-200 dark:bg-slate-700 rounded" })
  ] }), n = () => /* @__PURE__ */ r.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-lg p-4 animate-pulse", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full" }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ r.jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2" }),
      /* @__PURE__ */ r.jsx("div", { className: "h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2" })
    ] })
  ] }) }), d = () => /* @__PURE__ */ r.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-lg p-6 animate-pulse", children: /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ r.jsx("div", { className: "w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full mb-4" }),
    /* @__PURE__ */ r.jsx("div", { className: "h-5 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-2" }),
    /* @__PURE__ */ r.jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-24" })
  ] }) }), c = () => {
    switch (s) {
      case "card":
        return o();
      case "list":
        return n();
      case "profile":
        return d();
      default:
        return o();
    }
  };
  return /* @__PURE__ */ r.jsx("div", { className: `space-y-4 ${a}`, children: Array.from({ length: t }).map((b, u) => /* @__PURE__ */ r.jsx("div", { children: c() }, u)) });
}, Br = {
  blue: "from-blue-400 via-blue-500 to-blue-600",
  amber: "from-amber-400 via-orange-500 to-amber-600",
  green: "from-emerald-400 via-green-500 to-emerald-600",
  red: "from-red-400 via-rose-500 to-red-600",
  white: "from-white via-slate-100 to-white"
}, Yr = {
  blue: "shadow-glow-blue-sm",
  amber: "shadow-glow-amber-sm",
  green: "shadow-glow-green",
  red: "shadow-glow-red",
  white: ""
}, Vr = {
  blue: "text-blue-400",
  amber: "text-amber-400",
  green: "text-emerald-400",
  red: "text-red-400",
  white: "text-slate-300"
}, Ur = {
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
}, Hr = {
  up: /* @__PURE__ */ r.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 10l7-7m0 0l7 7m-7-7v18" }) }),
  down: /* @__PURE__ */ r.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }),
  neutral: /* @__PURE__ */ r.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h14" }) })
};
function Pt({
  value: s,
  label: t,
  icon: a,
  color: o = "blue",
  size: n = "md",
  trend: d,
  unit: c,
  className: b = "",
  onClick: u
}) {
  const f = Ur[n], p = u ? "button" : "div";
  return /* @__PURE__ */ r.jsxs(
    p,
    {
      onClick: u,
      className: `
        bg-gradient-to-b from-slate-800/80 to-slate-900/95
        backdrop-blur-xl
        border border-slate-700/50
        rounded-xl
        ${f.padding}
        ${u ? "cursor-pointer hover:border-slate-600/70 hover:shadow-surface-lg" : ""}
        transition-all duration-300
        ${Yr[o]}
        ${b}
      `.trim().replace(/\s+/g, " "),
      children: [
        a && /* @__PURE__ */ r.jsx("div", { className: `${Vr[o]} ${f.icon} mb-3`, children: a }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ r.jsx(
            "span",
            {
              className: `
            ${f.value}
            font-bold
            tracking-tight
            bg-gradient-to-r ${Br[o]}
            bg-clip-text text-transparent
          `.trim().replace(/\s+/g, " "),
              children: s
            }
          ),
          c && /* @__PURE__ */ r.jsx(
            "span",
            {
              className: `
              ${f.unit}
              font-semibold
              text-slate-400
            `,
              children: c
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-slate-400 uppercase tracking-wider font-medium ${sizes.label}", children: t }),
          d && /* @__PURE__ */ r.jsxs(
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
                Hr[d.direction],
                d.value
              ]
            }
          )
        ] })
      ]
    }
  );
}
const qr = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12"
}, Jr = {
  primary: "text-blue-600",
  secondary: "text-gray-600",
  white: "text-white"
};
function Gr({
  size: s = "md",
  variant: t = "primary",
  className: a = ""
}) {
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: `
        animate-spin
        ${qr[s]}
        ${Jr[t]}
        ${a}
      `.trim(),
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ r.jsx(
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
        /* @__PURE__ */ r.jsx(
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
function At({
  message: s = "Loading...",
  size: t = "md",
  className: a = ""
}) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center space-y-2 ${a}`,
      children: [
        /* @__PURE__ */ r.jsx(Gr, { size: t }),
        s && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: s })
      ]
    }
  );
}
function Ft({
  tabs: s,
  activeTab: t,
  onTabChange: a,
  className: o = "",
  variant: n = "default"
}) {
  const d = n === "mobile";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `border-b border-gray-200 dark:border-gray-700 ${o}`,
      children: /* @__PURE__ */ r.jsx(
        "nav",
        {
          className: d ? "flex" : "flex space-x-8",
          "aria-label": "Tabs",
          children: s.map((c) => /* @__PURE__ */ r.jsx(
            "button",
            {
              className: `
              ${d ? "flex-1 py-4 px-3" : "py-2 px-1"}
              border-b-2 font-medium text-sm transition-colors bg-transparent
              ${t === c.id ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}
            `,
              onClick: () => a(c.id),
              "aria-current": t === c.id ? "page" : void 0,
              children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
                c.icon && /* @__PURE__ */ r.jsx("span", { className: "shrink-0", children: c.icon }),
                /* @__PURE__ */ r.jsx("span", { className: d ? "hidden sm:inline" : "", children: c.label }),
                c.badge !== void 0 && /* @__PURE__ */ r.jsx(
                  "span",
                  {
                    className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${t === c.id ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}`,
                    children: c.badge
                  }
                )
              ] })
            },
            c.id
          ))
        }
      )
    }
  );
}
const Dt = ({
  id: s,
  checked: t,
  onChange: a,
  disabled: o = !1,
  label: n,
  description: d,
  className: c = ""
}) => {
  const b = s || `toggle-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ r.jsxs("div", { className: `flex items-start ${c}`, children: [
    /* @__PURE__ */ r.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ r.jsx(
      "input",
      {
        id: b,
        type: "checkbox",
        checked: t,
        onChange: (u) => a(u.target.checked),
        disabled: o,
        className: "focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      }
    ) }),
    (n || d) && /* @__PURE__ */ r.jsxs("div", { className: "ml-3 text-sm", children: [
      n && /* @__PURE__ */ r.jsx(
        "label",
        {
          htmlFor: b,
          className: `font-medium text-gray-900 dark:text-white ${o ? "opacity-50" : "cursor-pointer"}`,
          children: n
        }
      ),
      d && /* @__PURE__ */ r.jsx("p", { className: `text-gray-600 dark:text-gray-400 ${o ? "opacity-50" : ""}`, children: d })
    ] })
  ] });
}, S = {
  default: "text-gray-900 dark:text-gray-100",
  muted: "text-gray-600 dark:text-gray-400",
  primary: "text-blue-600 dark:text-blue-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  error: "text-red-600 dark:text-red-400"
};
function zt({
  children: s,
  color: t = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ r.jsx(
    "h1",
    {
      className: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${S[t]} ${a}`,
      children: s
    }
  );
}
function Lt({
  children: s,
  color: t = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ r.jsx(
    "h2",
    {
      className: `text-3xl md:text-4xl font-bold tracking-tight leading-tight ${S[t]} ${a}`,
      children: s
    }
  );
}
function Mt({
  children: s,
  color: t = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ r.jsx("h3", { className: `text-2xl md:text-3xl font-semibold tracking-tight ${S[t]} ${a}`, children: s });
}
function It({
  children: s,
  color: t = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ r.jsx("h4", { className: `text-xl md:text-2xl font-semibold ${S[t]} ${a}`, children: s });
}
function Wt({
  children: s,
  color: t = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ r.jsx("p", { className: `text-base leading-relaxed ${S[t]} ${a}`, children: s });
}
function Bt({
  children: s,
  color: t = "muted",
  className: a = ""
}) {
  return /* @__PURE__ */ r.jsx("small", { className: `text-sm leading-normal ${S[t]} ${a}`, children: s });
}
function Yt({
  children: s,
  color: t = "default",
  className: a = ""
}) {
  return /* @__PURE__ */ r.jsx(
    "p",
    {
      className: `text-xl md:text-2xl leading-relaxed font-light ${S[t]} ${a}`,
      children: s
    }
  );
}
function Vt({
  children: s,
  className: t = ""
}) {
  return /* @__PURE__ */ r.jsx(
    "p",
    {
      className: `text-sm leading-normal ${S.muted} ${t}`,
      children: s
    }
  );
}
function Ut({
  children: s,
  label: t,
  error: a,
  hint: o,
  required: n = !1,
  className: d = ""
}) {
  return /* @__PURE__ */ r.jsxs("div", { className: `space-y-2 ${d}`, children: [
    t && /* @__PURE__ */ r.jsxs("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: [
      t,
      n && /* @__PURE__ */ r.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    s,
    o && !a && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: o }),
    a && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-red-600 dark:text-red-400", children: a })
  ] });
}
function Ht({
  children: s,
  title: t,
  description: a,
  className: o = ""
}) {
  return /* @__PURE__ */ r.jsxs("div", { className: `space-y-4 ${o}`, children: [
    (t || a) && /* @__PURE__ */ r.jsxs("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: t }),
      a && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: a })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: s })
  ] });
}
const Kr = {
  default: "text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500",
  error: "text-red-600 border-red-300 dark:border-red-600 focus:ring-red-500"
}, Xr = D(
  ({
    label: s,
    description: t,
    variant: a = "default",
    className: o = "",
    disabled: n,
    id: d,
    ...c
  }, b) => {
    const u = d || `checkbox-${Math.random().toString(36).substr(2, 9)}`, f = `
    h-4 w-4 rounded border
    bg-white dark:bg-gray-800
    focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-50
    ${Kr[a]}
    ${o}
  `.replace(/\s+/g, " ").trim();
    return s || t ? /* @__PURE__ */ r.jsxs("div", { className: "flex items-start", children: [
      /* @__PURE__ */ r.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ r.jsx(
        "input",
        {
          ref: b,
          type: "checkbox",
          id: u,
          className: f,
          disabled: n,
          ...c
        }
      ) }),
      (s || t) && /* @__PURE__ */ r.jsxs("div", { className: "ml-3 text-sm", children: [
        s && /* @__PURE__ */ r.jsx(
          "label",
          {
            htmlFor: u,
            className: `
                  font-medium text-gray-700 dark:text-gray-300
                  ${n ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                `,
            children: s
          }
        ),
        t && /* @__PURE__ */ r.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: t })
      ] })
    ] }) : /* @__PURE__ */ r.jsx(
      "input",
      {
        ref: b,
        type: "checkbox",
        id: u,
        className: f,
        disabled: n,
        ...c
      }
    );
  }
);
Xr.displayName = "Checkbox";
const De = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, Zr = D(
  ({ variant: s = "default", className: t = "", disabled: a, ...o }, n) => {
    const d = `
    block w-full rounded-md border px-3 py-2
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    text-sm
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `.replace(/\s+/g, " ").trim();
    return /* @__PURE__ */ r.jsx(
      "input",
      {
        ref: n,
        type: "date",
        className: `
        ${d}
        ${De[s]}
        ${t}
      `.replace(/\s+/g, " ").trim(),
        disabled: a,
        ...o
      }
    );
  }
);
Zr.displayName = "DatePicker";
const Qr = D(
  ({ variant: s = "default", className: t = "", disabled: a, ...o }, n) => {
    const d = `
    block w-full rounded-md border px-3 py-2
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    text-sm
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `.replace(/\s+/g, " ").trim();
    return /* @__PURE__ */ r.jsx(
      "input",
      {
        ref: n,
        type: "datetime-local",
        className: `
        ${d}
        ${De[s]}
        ${t}
      `.replace(/\s+/g, " ").trim(),
        disabled: a,
        ...o
      }
    );
  }
);
Qr.displayName = "DateTimePicker";
const Ae = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base"
}, Fe = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, et = D(
  ({
    size: s = "md",
    variant: t = "default",
    startIcon: a,
    endIcon: o,
    className: n = "",
    disabled: d,
    ...c
  }, b) => {
    const u = `
    block w-full rounded-md border
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `.replace(/\s+/g, " ").trim();
    return a || o ? /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
      a && /* @__PURE__ */ r.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ r.jsx("div", { className: "h-5 w-5 text-gray-400", children: a }) }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          ref: b,
          className: `
            ${u}
            ${Ae[s]}
            ${Fe[t]}
            ${a ? "pl-10" : ""}
            ${o ? "pr-10" : ""}
            ${n}
          `.replace(/\s+/g, " ").trim(),
          disabled: d,
          ...c
        }
      ),
      o && /* @__PURE__ */ r.jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: /* @__PURE__ */ r.jsx("div", { className: "h-5 w-5 text-gray-400", children: o }) })
    ] }) : /* @__PURE__ */ r.jsx(
      "input",
      {
        ref: b,
        className: `
        ${u}
        ${Ae[s]}
        ${Fe[t]}
        ${n}
      `.replace(/\s+/g, " ").trim(),
        disabled: d,
        ...c
      }
    );
  }
);
et.displayName = "Input";
const rt = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base"
}, tt = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, at = D(
  ({
    size: s = "md",
    variant: t = "default",
    options: a,
    placeholder: o,
    className: n = "",
    disabled: d,
    ...c
  }, b) => {
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
    return /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ r.jsxs(
        "select",
        {
          ref: b,
          className: `
          ${u}
          ${rt[s]}
          ${tt[t]}
          ${n}
        `.replace(/\s+/g, " ").trim(),
          disabled: d,
          ...c,
          children: [
            o && /* @__PURE__ */ r.jsx("option", { value: "", children: o }),
            a.map((f) => /* @__PURE__ */ r.jsx(
              "option",
              {
                value: f.value,
                disabled: f.disabled,
                children: f.label
              },
              f.value
            ))
          ]
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: /* @__PURE__ */ r.jsx(
        "svg",
        {
          className: "w-5 h-5 text-gray-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ r.jsx(
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
at.displayName = "Select";
const st = {
  default: "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"
}, lt = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize"
}, ot = D(
  ({
    variant: s = "default",
    resize: t = "vertical",
    className: a = "",
    rows: o = 3,
    disabled: n,
    ...d
  }, c) => {
    const b = `
    block w-full rounded-md border px-3 py-2
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    text-sm
    placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `.replace(/\s+/g, " ").trim();
    return /* @__PURE__ */ r.jsx(
      "textarea",
      {
        ref: c,
        rows: o,
        className: `
        ${b}
        ${st[s]}
        ${lt[t]}
        ${a}
      `.replace(/\s+/g, " ").trim(),
        disabled: n,
        ...d
      }
    );
  }
);
ot.displayName = "TextArea";
function qt({
  icon: s,
  title: t,
  description: a,
  actions: o,
  className: n = ""
}) {
  return /* @__PURE__ */ r.jsxs("div", { className: `text-center py-12 px-4 ${n}`, children: [
    /* @__PURE__ */ r.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center", children: /* @__PURE__ */ r.jsx("span", { className: "text-slate-400 [&>svg]:w-8 [&>svg]:h-8", children: s }) }),
    /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-medium text-slate-800 dark:text-white mb-2", children: t }),
    a && /* @__PURE__ */ r.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto", children: a }),
    o && /* @__PURE__ */ r.jsx("div", { className: "flex gap-3 justify-center", children: o })
  ] });
}
const nt = () => /* @__PURE__ */ r.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) });
function Jt({
  title: s = "Something went wrong",
  message: t,
  icon: a,
  onRetry: o,
  retryText: n = "Try Again",
  className: d = ""
}) {
  return /* @__PURE__ */ r.jsxs("div", { className: `text-center py-12 px-4 ${d}`, children: [
    /* @__PURE__ */ r.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center", children: /* @__PURE__ */ r.jsx("span", { className: "text-red-500 dark:text-red-400", children: a || /* @__PURE__ */ r.jsx(nt, {}) }) }),
    /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-medium text-red-600 dark:text-red-400 mb-2", children: s }),
    /* @__PURE__ */ r.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto", children: t }),
    o && /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: o,
        className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",
        children: n
      }
    )
  ] });
}
const it = {
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
}, dt = {
  desktop: "w-4 h-4",
  mobile: "w-5 h-5",
  "bottom-nav": "w-5 h-5"
}, ct = {
  desktop: "",
  mobile: "",
  "bottom-nav": "text-xs"
};
function Gt({
  as: s,
  href: t,
  label: a,
  icon: o,
  isActive: n = !1,
  onClick: d,
  className: c = "",
  variant: b = "desktop",
  ...u
}) {
  const f = s || "a", p = it[b], j = `${p.base} ${n ? p.active : p.inactive} ${c}`, k = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("span", { className: dt[b], children: o }),
    /* @__PURE__ */ r.jsx("span", { className: ct[b], children: a })
  ] }), E = {
    className: j,
    onClick: d,
    ...u
  };
  return f === "a" ? E.href = t : (E.href = t, E.to = t), /* @__PURE__ */ r.jsx(f, { ...E, children: k });
}
const Kt = ({
  items: s,
  isOpen: t,
  onToggle: a,
  className: o = ""
}) => /* @__PURE__ */ r.jsxs("div", { className: `relative ${o}`, children: [
  /* @__PURE__ */ r.jsx(
    "button",
    {
      className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors",
      "aria-label": "Options",
      "aria-haspopup": "menu",
      "aria-expanded": t,
      onClick: a,
      children: /* @__PURE__ */ r.jsx("svg", { className: "w-5 h-5 text-slate-400", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ r.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) })
    }
  ),
  t && /* @__PURE__ */ r.jsx("div", { className: "absolute right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg py-1 w-36 z-10", children: s.map((n, d) => /* @__PURE__ */ r.jsx(
    "button",
    {
      className: `w-full text-left px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 ${n.variant === "danger" ? "text-red-600" : "text-slate-700 dark:text-slate-200"}`,
      onClick: () => {
        n.onClick(), a();
      },
      children: n.label
    },
    d
  )) })
] }), ut = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl"
};
function Xt({
  title: s,
  subtitle: t,
  action: a,
  size: o = "md",
  className: n = ""
}) {
  return /* @__PURE__ */ r.jsxs("div", { className: `flex items-center justify-between ${n}`, children: [
    /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx("h2", { className: `font-semibold text-slate-800 dark:text-white ${ut[o]}`, children: s }),
      t && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 mt-1", children: t })
    ] }),
    a && /* @__PURE__ */ r.jsx("div", { children: a })
  ] });
}
const bt = {
  info: "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-b border-blue-500/30",
  success: "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-b border-emerald-500/30",
  warning: "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-b border-amber-400/30",
  error: "bg-gradient-to-r from-red-600 to-red-700 text-white border-b border-red-500/30",
  gradient: "bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white border-b border-purple-400/30"
}, mt = {
  info: "shadow-glow-blue",
  success: "shadow-lg shadow-emerald-500/20",
  warning: "shadow-glow-amber",
  error: "shadow-lg shadow-red-500/20",
  gradient: "shadow-lg shadow-purple-500/30"
}, gt = {
  top: "fixed top-0 left-0 right-0",
  bottom: "fixed bottom-0 left-0 right-0",
  inline: "relative"
}, Zt = ({
  variant: s = "info",
  icon: t,
  message: a,
  actions: o,
  onDismiss: n,
  position: d = "inline",
  className: c = "",
  glow: b = !1
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: `
        ${gt[d]} 
        ${bt[s]} 
        ${b ? mt[s] : ""} 
        px-4 py-3 z-50 backdrop-blur-sm
        ${c}
      `.trim().replace(/\s+/g, " "),
    children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between max-w-6xl mx-auto gap-3", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center space-x-3 flex-1 min-w-0", children: [
        t && /* @__PURE__ */ r.jsx("div", { className: "flex-shrink-0 text-white/90", children: t }),
        /* @__PURE__ */ r.jsx("div", { className: "flex-1 min-w-0 font-medium", children: a })
      ] }),
      (o || n) && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center space-x-2 flex-shrink-0", children: [
        o,
        n && /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: n,
            className: "text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 p-1.5 rounded-md",
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ r.jsx(
              "svg",
              {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ r.jsx(
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
), xt = {
  "top-left": "absolute top-2 left-2 z-20",
  "top-right": "absolute top-2 right-2 z-20",
  "bottom-left": "absolute bottom-2 left-2 z-20",
  "bottom-right": "absolute bottom-2 right-2 z-20",
  none: ""
}, ft = {
  default: "bg-slate-900/80 backdrop-blur-sm text-white border border-white/10",
  primary: "bg-blue-600/90 backdrop-blur-sm text-white border border-blue-400/30 shadow-glow-blue-sm",
  success: "bg-emerald-600/90 backdrop-blur-sm text-white border border-emerald-400/30",
  warning: "bg-amber-600/90 backdrop-blur-sm text-white border border-amber-400/30",
  danger: "bg-red-600/90 backdrop-blur-sm text-white border border-red-400/30",
  glass: "bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-lg"
}, q = ({
  children: s,
  position: t = "top-left",
  variant: a = "default",
  className: o = ""
}) => /* @__PURE__ */ r.jsx("div", { className: `${xt[t]} ${o}`, children: /* @__PURE__ */ r.jsx(
  "div",
  {
    className: `${ft[a]} px-2.5 py-1 rounded-md text-xs font-medium shadow-lg transition-all duration-200`,
    children: s
  }
) }), Qt = ({
  topLeft: s,
  topRight: t,
  bottomLeft: a,
  bottomRight: o,
  topLeftVariant: n = "default",
  topRightVariant: d = "default",
  bottomLeftVariant: c = "default",
  bottomRightVariant: b = "default",
  interactive: u = !0,
  className: f = ""
}) => /* @__PURE__ */ r.jsxs("div", { className: `absolute inset-0 pointer-events-none ${f}`, children: [
  s && /* @__PURE__ */ r.jsx(q, { position: "top-left", variant: n, children: s }),
  t && /* @__PURE__ */ r.jsx(q, { position: "top-right", variant: d, children: t }),
  a && /* @__PURE__ */ r.jsx(q, { position: "bottom-left", variant: c, children: a }),
  o && /* @__PURE__ */ r.jsx(q, { position: "bottom-right", variant: b, children: o }),
  !u && /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "absolute inset-0 cursor-default z-30 pointer-events-auto",
      title: "Preview - tap to expand for interaction"
    }
  )
] }), ht = {
  primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-lg",
  secondary: "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500",
  gradient: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md hover:shadow-lg"
}, pt = {
  blue: "hover:shadow-glow-blue hover:border-blue-500/30",
  purple: "hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30",
  amber: "hover:shadow-glow-amber hover:border-amber-500/30",
  cyan: "hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/30"
}, ea = ({
  icon: s,
  iconBg: t = "bg-blue-600",
  title: a,
  description: o,
  buttonText: n,
  buttonVariant: d = "primary",
  onClick: c,
  className: b = "",
  glass: u = !1,
  glow: f = !1,
  glowColor: p = "blue"
}) => {
  const j = u ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50" : "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700/60", k = f ? pt[p] : "";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `
        ${j}
        rounded-xl p-6 
        border
        cursor-pointer
        transition-all duration-300 ease-out
        hover:border-slate-600
        ${k}
        ${b}
      `.trim().replace(/\s+/g, " "),
      onClick: c,
      children: [
        /* @__PURE__ */ r.jsx(
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
            children: /* @__PURE__ */ r.jsx("span", { className: "text-white text-xl", children: s })
          }
        ),
        /* @__PURE__ */ r.jsx("h4", { className: "text-white font-semibold text-lg mb-2 text-center", children: a }),
        /* @__PURE__ */ r.jsx("p", { className: "text-slate-400 text-sm mb-5 text-center leading-relaxed", children: o }),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: (E) => {
              E.stopPropagation(), c();
            },
            className: `
          w-full px-4 py-2.5 
          ${ht[d]}
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
}, vt = {
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
}, ra = ({
  title: s,
  description: t,
  accentColor: a = "blue",
  children: o,
  className: n = "",
  glass: d = !1,
  glow: c = !1
}) => {
  const b = vt[a], u = d ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50" : "bg-slate-800 border-slate-700";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `
        ${u}
        rounded-xl shadow-lg border
        ${c ? `shadow-xl ${b.glow}` : ""}
        p-4 sm:p-6 
        transition-all duration-300
        hover:border-slate-600
        ${n}
      `.trim().replace(/\s+/g, " "),
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: `border-l-4 ${b.border} pl-3 sm:pl-4 mb-4 sm:mb-6`, children: [
          /* @__PURE__ */ r.jsx("h3", { className: "text-base sm:text-lg font-semibold text-white", children: s }),
          t && /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-sm text-slate-400", children: t })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: o })
      ]
    }
  );
}, wt = {
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
function ta({
  onClick: s,
  loading: t = !1,
  children: a = "Load More",
  className: o = "",
  variant: n = "default"
}) {
  return /* @__PURE__ */ r.jsx("div", { className: `text-center ${o}`, children: /* @__PURE__ */ r.jsx(
    "button",
    {
      onClick: s,
      disabled: t,
      className: `
          px-6 py-3 
          rounded-xl
          transition-all duration-200 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
          font-medium
          ${wt[n]}
        `.trim().replace(/\s+/g, " "),
      children: t ? /* @__PURE__ */ r.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ r.jsxs("svg", { className: "w-4 h-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
          /* @__PURE__ */ r.jsx(
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
          /* @__PURE__ */ r.jsx(
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
export {
  ea as ActionCard,
  Ct as Avatar,
  Et as AvatarStack,
  _t as Badge,
  Zt as Banner,
  Rt as Button,
  St as Card,
  Xr as Checkbox,
  jt as Container,
  Zr as DatePicker,
  Qr as DateTimePicker,
  qt as EmptyState,
  Jt as ErrorState,
  kt as Flex,
  Ut as FormField,
  Ht as FormSection,
  $t as Grid,
  zt as H1,
  Lt as H2,
  Mt as H3,
  It as H4,
  Tt as IconButton,
  q as InfoBadge,
  Qt as InfoOverlay,
  et as Input,
  Yt as Lead,
  ta as LoadMoreButton,
  At as Loading,
  Vt as Muted,
  Gt as NavItem,
  Kt as OptionsMenu,
  Nt as Section,
  Xt as SectionHeader,
  at as Select,
  ra as SettingCard,
  Ot as Skeleton,
  Bt as Small,
  Gr as Spinner,
  Pt as StatCard,
  Ft as TabNavigation,
  Wt as Text,
  ot as TextArea,
  Dt as Toggle
};
