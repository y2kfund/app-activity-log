import { ref as Ce, defineComponent as Qr, computed as Xr, onMounted as Zr, watch as es, createElementBlock as D, openBlock as L, createElementVNode as k, createCommentVNode as vt, withDirectives as ts, vModelText as rs, unref as ge, toDisplayString as K, createTextVNode as Be, createStaticVNode as ss, Fragment as yt, renderList as wt, normalizeClass as ns } from "vue";
function is(s, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in s)) {
          const i = Object.getOwnPropertyDescriptor(r, n);
          i && Object.defineProperty(s, n, i.get ? i : {
            enumerable: !0,
            get: () => r[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var Ge = function(s, e) {
  return Ge = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, Ge(s, e);
};
function zt(s, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ge(s, e);
  function t() {
    this.constructor = s;
  }
  s.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ie = function() {
  return Ie = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ie.apply(this, arguments);
};
function he(s, e) {
  var t = {};
  for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && e.indexOf(r) < 0 && (t[r] = s[r]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(s); n < r.length; n++)
      e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(s, r[n]) && (t[r[n]] = s[r[n]]);
  return t;
}
function Jt(s, e, t, r) {
  var n = arguments.length, i = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(s, e, t, r);
  else for (var a = s.length - 1; a >= 0; a--) (o = s[a]) && (i = (n < 3 ? o(i) : n > 3 ? o(e, t, i) : o(e, t)) || i);
  return n > 3 && i && Object.defineProperty(e, t, i), i;
}
function Gt(s, e) {
  return function(t, r) {
    e(t, r, s);
  };
}
function Yt(s, e, t, r, n, i) {
  function o(y) {
    if (y !== void 0 && typeof y != "function") throw new TypeError("Function expected");
    return y;
  }
  for (var a = r.kind, l = a === "getter" ? "get" : a === "setter" ? "set" : "value", c = !e && s ? r.static ? s : s.prototype : null, u = e || (c ? Object.getOwnPropertyDescriptor(c, r.name) : {}), f, h = !1, d = t.length - 1; d >= 0; d--) {
    var g = {};
    for (var p in r) g[p] = p === "access" ? {} : r[p];
    for (var p in r.access) g.access[p] = r.access[p];
    g.addInitializer = function(y) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(o(y || null));
    };
    var _ = (0, t[d])(a === "accessor" ? { get: u.get, set: u.set } : u[l], g);
    if (a === "accessor") {
      if (_ === void 0) continue;
      if (_ === null || typeof _ != "object") throw new TypeError("Object expected");
      (f = o(_.get)) && (u.get = f), (f = o(_.set)) && (u.set = f), (f = o(_.init)) && n.unshift(f);
    } else (f = o(_)) && (a === "field" ? n.unshift(f) : u[l] = f);
  }
  c && Object.defineProperty(c, r.name, u), h = !0;
}
function Qt(s, e, t) {
  for (var r = arguments.length > 2, n = 0; n < e.length; n++)
    t = r ? e[n].call(s, t) : e[n].call(s);
  return r ? t : void 0;
}
function Xt(s) {
  return typeof s == "symbol" ? s : "".concat(s);
}
function Zt(s, e, t) {
  return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(s, "name", { configurable: !0, value: t ? "".concat(t, " ", e) : e });
}
function er(s, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(s, e);
}
function b(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (f) {
        o(f);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        o(f);
      }
    }
    function c(u) {
      u.done ? i(u.value) : n(u.value).then(a, l);
    }
    c((r = r.apply(s, e || [])).next());
  });
}
function tr(s, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, n, i, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (t = 0)), t; ) try {
      if (r = 1, n && (i = c[0] & 2 ? n.return : c[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, c[1])).done) return i;
      switch (n = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
        case 0:
        case 1:
          i = c;
          break;
        case 4:
          return t.label++, { value: c[1], done: !1 };
        case 5:
          t.label++, n = c[1], c = [0];
          continue;
        case 7:
          c = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            t = 0;
            continue;
          }
          if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
            t.label = c[1];
            break;
          }
          if (c[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = c;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(c);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      c = e.call(s, t);
    } catch (u) {
      c = [6, u], n = 0;
    } finally {
      r = i = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
var De = Object.create ? function(s, e, t, r) {
  r === void 0 && (r = t);
  var n = Object.getOwnPropertyDescriptor(e, t);
  (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(s, r, n);
} : function(s, e, t, r) {
  r === void 0 && (r = t), s[r] = e[t];
};
function rr(s, e) {
  for (var t in s) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && De(e, s, t);
}
function $e(s) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && s[e], r = 0;
  if (t) return t.call(s);
  if (s && typeof s.length == "number") return {
    next: function() {
      return s && r >= s.length && (s = void 0), { value: s && s[r++], done: !s };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function lt(s, e) {
  var t = typeof Symbol == "function" && s[Symbol.iterator];
  if (!t) return s;
  var r = t.call(s), n, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = r.next()).done; ) i.push(n.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      n && !n.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function sr() {
  for (var s = [], e = 0; e < arguments.length; e++)
    s = s.concat(lt(arguments[e]));
  return s;
}
function nr() {
  for (var s = 0, e = 0, t = arguments.length; e < t; e++) s += arguments[e].length;
  for (var r = Array(s), n = 0, e = 0; e < t; e++)
    for (var i = arguments[e], o = 0, a = i.length; o < a; o++, n++)
      r[n] = i[o];
  return r;
}
function ir(s, e, t) {
  if (t || arguments.length === 2) for (var r = 0, n = e.length, i; r < n; r++)
    (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return s.concat(i || Array.prototype.slice.call(e));
}
function ue(s) {
  return this instanceof ue ? (this.v = s, this) : new ue(s);
}
function or(s, e, t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = t.apply(s, e || []), n, i = [];
  return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), n[Symbol.asyncIterator] = function() {
    return this;
  }, n;
  function o(d) {
    return function(g) {
      return Promise.resolve(g).then(d, f);
    };
  }
  function a(d, g) {
    r[d] && (n[d] = function(p) {
      return new Promise(function(_, y) {
        i.push([d, p, _, y]) > 1 || l(d, p);
      });
    }, g && (n[d] = g(n[d])));
  }
  function l(d, g) {
    try {
      c(r[d](g));
    } catch (p) {
      h(i[0][3], p);
    }
  }
  function c(d) {
    d.value instanceof ue ? Promise.resolve(d.value.v).then(u, f) : h(i[0][2], d);
  }
  function u(d) {
    l("next", d);
  }
  function f(d) {
    l("throw", d);
  }
  function h(d, g) {
    d(g), i.shift(), i.length && l(i[0][0], i[0][1]);
  }
}
function ar(s) {
  var e, t;
  return e = {}, r("next"), r("throw", function(n) {
    throw n;
  }), r("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function r(n, i) {
    e[n] = s[n] ? function(o) {
      return (t = !t) ? { value: ue(s[n](o)), done: !1 } : i ? i(o) : o;
    } : i;
  }
}
function lr(s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = s[Symbol.asyncIterator], t;
  return e ? e.call(s) : (s = typeof $e == "function" ? $e(s) : s[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function r(i) {
    t[i] = s[i] && function(o) {
      return new Promise(function(a, l) {
        o = s[i](o), n(a, l, o.done, o.value);
      });
    };
  }
  function n(i, o, a, l) {
    Promise.resolve(l).then(function(c) {
      i({ value: c, done: a });
    }, o);
  }
}
function cr(s, e) {
  return Object.defineProperty ? Object.defineProperty(s, "raw", { value: e }) : s.raw = e, s;
}
var os = Object.create ? function(s, e) {
  Object.defineProperty(s, "default", { enumerable: !0, value: e });
} : function(s, e) {
  s.default = e;
}, Ye = function(s) {
  return Ye = Object.getOwnPropertyNames || function(e) {
    var t = [];
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
    return t;
  }, Ye(s);
};
function ur(s) {
  if (s && s.__esModule) return s;
  var e = {};
  if (s != null) for (var t = Ye(s), r = 0; r < t.length; r++) t[r] !== "default" && De(e, s, t[r]);
  return os(e, s), e;
}
function hr(s) {
  return s && s.__esModule ? s : { default: s };
}
function dr(s, e, t, r) {
  if (t === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? s !== e || !r : !e.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(s) : r ? r.value : e.get(s);
}
function fr(s, e, t, r, n) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? s !== e || !n : !e.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? n.call(s, t) : n ? n.value = t : e.set(s, t), t;
}
function gr(s, e) {
  if (e === null || typeof e != "object" && typeof e != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof s == "function" ? e === s : s.has(e);
}
function pr(s, e, t) {
  if (e != null) {
    if (typeof e != "object" && typeof e != "function") throw new TypeError("Object expected.");
    var r, n;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = e[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = e[Symbol.dispose], t && (n = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    n && (r = function() {
      try {
        n.call(this);
      } catch (i) {
        return Promise.reject(i);
      }
    }), s.stack.push({ value: e, dispose: r, async: t });
  } else t && s.stack.push({ async: !0 });
  return e;
}
var as = typeof SuppressedError == "function" ? SuppressedError : function(s, e, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = s, r.suppressed = e, r;
};
function _r(s) {
  function e(i) {
    s.error = s.hasError ? new as(i, s.error, "An error was suppressed during disposal.") : i, s.hasError = !0;
  }
  var t, r = 0;
  function n() {
    for (; t = s.stack.pop(); )
      try {
        if (!t.async && r === 1) return r = 0, s.stack.push(t), Promise.resolve().then(n);
        if (t.dispose) {
          var i = t.dispose.call(t.value);
          if (t.async) return r |= 2, Promise.resolve(i).then(n, function(o) {
            return e(o), n();
          });
        } else r |= 1;
      } catch (o) {
        e(o);
      }
    if (r === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
    if (s.hasError) throw s.error;
  }
  return n();
}
function vr(s, e) {
  return typeof s == "string" && /^\.\.?\//.test(s) ? s.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(t, r, n, i, o) {
    return r ? e ? ".jsx" : ".js" : n && (!i || !o) ? t : n + i + "." + o.toLowerCase() + "js";
  }) : s;
}
const ls = {
  __extends: zt,
  __assign: Ie,
  __rest: he,
  __decorate: Jt,
  __param: Gt,
  __esDecorate: Yt,
  __runInitializers: Qt,
  __propKey: Xt,
  __setFunctionName: Zt,
  __metadata: er,
  __awaiter: b,
  __generator: tr,
  __createBinding: De,
  __exportStar: rr,
  __values: $e,
  __read: lt,
  __spread: sr,
  __spreadArrays: nr,
  __spreadArray: ir,
  __await: ue,
  __asyncGenerator: or,
  __asyncDelegator: ar,
  __asyncValues: lr,
  __makeTemplateObject: cr,
  __importStar: ur,
  __importDefault: hr,
  __classPrivateFieldGet: dr,
  __classPrivateFieldSet: fr,
  __classPrivateFieldIn: gr,
  __addDisposableResource: pr,
  __disposeResources: _r,
  __rewriteRelativeImportExtension: vr
}, cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: pr,
  get __assign() {
    return Ie;
  },
  __asyncDelegator: ar,
  __asyncGenerator: or,
  __asyncValues: lr,
  __await: ue,
  __awaiter: b,
  __classPrivateFieldGet: dr,
  __classPrivateFieldIn: gr,
  __classPrivateFieldSet: fr,
  __createBinding: De,
  __decorate: Jt,
  __disposeResources: _r,
  __esDecorate: Yt,
  __exportStar: rr,
  __extends: zt,
  __generator: tr,
  __importDefault: hr,
  __importStar: ur,
  __makeTemplateObject: cr,
  __metadata: er,
  __param: Gt,
  __propKey: Xt,
  __read: lt,
  __rest: he,
  __rewriteRelativeImportExtension: vr,
  __runInitializers: Qt,
  __setFunctionName: Zt,
  __spread: sr,
  __spreadArray: ir,
  __spreadArrays: nr,
  __values: $e,
  default: ls
}, Symbol.toStringTag, { value: "Module" })), us = (s) => s ? (...e) => s(...e) : (...e) => fetch(...e);
class ct extends Error {
  constructor(e, t = "FunctionsError", r) {
    super(e), this.name = t, this.context = r;
  }
}
class hs extends ct {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class bt extends ct {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class mt extends ct {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var Qe;
(function(s) {
  s.Any = "any", s.ApNortheast1 = "ap-northeast-1", s.ApNortheast2 = "ap-northeast-2", s.ApSouth1 = "ap-south-1", s.ApSoutheast1 = "ap-southeast-1", s.ApSoutheast2 = "ap-southeast-2", s.CaCentral1 = "ca-central-1", s.EuCentral1 = "eu-central-1", s.EuWest1 = "eu-west-1", s.EuWest2 = "eu-west-2", s.EuWest3 = "eu-west-3", s.SaEast1 = "sa-east-1", s.UsEast1 = "us-east-1", s.UsWest1 = "us-west-1", s.UsWest2 = "us-west-2";
})(Qe || (Qe = {}));
class ds {
  constructor(e, { headers: t = {}, customFetch: r, region: n = Qe.Any } = {}) {
    this.url = e, this.headers = t, this.region = n, this.fetch = us(r);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(e) {
    return b(this, arguments, void 0, function* (t, r = {}) {
      var n;
      let i, o;
      try {
        const { headers: a, method: l, body: c, signal: u, timeout: f } = r;
        let h = {}, { region: d } = r;
        d || (d = this.region);
        const g = new URL(`${this.url}/${t}`);
        d && d !== "any" && (h["x-region"] = d, g.searchParams.set("forceFunctionRegion", d));
        let p;
        c && (a && !Object.prototype.hasOwnProperty.call(a, "Content-Type") || !a) ? typeof Blob < "u" && c instanceof Blob || c instanceof ArrayBuffer ? (h["Content-Type"] = "application/octet-stream", p = c) : typeof c == "string" ? (h["Content-Type"] = "text/plain", p = c) : typeof FormData < "u" && c instanceof FormData ? p = c : (h["Content-Type"] = "application/json", p = JSON.stringify(c)) : p = c;
        let _ = u;
        f && (o = new AbortController(), i = setTimeout(() => o.abort(), f), u ? (_ = o.signal, u.addEventListener("abort", () => o.abort())) : _ = o.signal);
        const y = yield this.fetch(g.toString(), {
          method: l || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, h), this.headers), a),
          body: p,
          signal: _
        }).catch((R) => {
          throw new hs(R);
        }), w = y.headers.get("x-relay-error");
        if (w && w === "true")
          throw new bt(y);
        if (!y.ok)
          throw new mt(y);
        let v = ((n = y.headers.get("Content-Type")) !== null && n !== void 0 ? n : "text/plain").split(";")[0].trim(), S;
        return v === "application/json" ? S = yield y.json() : v === "application/octet-stream" || v === "application/pdf" ? S = yield y.blob() : v === "text/event-stream" ? S = y : v === "multipart/form-data" ? S = yield y.formData() : S = yield y.text(), { data: S, error: null, response: y };
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof mt || a instanceof bt ? a.context : void 0
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
function fs(s) {
  if (s.__esModule) return s;
  var e = s.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(s).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(s, r);
    Object.defineProperty(t, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return s[r];
      }
    });
  }), t;
}
var $ = {};
const de = /* @__PURE__ */ fs(cs);
var Ee = {}, Se = {}, ke = {}, Oe = {}, Te = {}, Ae = {}, Et;
function yr() {
  if (Et) return Ae;
  Et = 1, Object.defineProperty(Ae, "__esModule", { value: !0 });
  class s extends Error {
    constructor(t) {
      super(t.message), this.name = "PostgrestError", this.details = t.details, this.hint = t.hint, this.code = t.code;
    }
  }
  return Ae.default = s, Ae;
}
var St;
function wr() {
  if (St) return Te;
  St = 1, Object.defineProperty(Te, "__esModule", { value: !0 });
  const e = de.__importDefault(yr());
  class t {
    constructor(n) {
      var i, o;
      this.shouldThrowOnError = !1, this.method = n.method, this.url = n.url, this.headers = new Headers(n.headers), this.schema = n.schema, this.body = n.body, this.shouldThrowOnError = (i = n.shouldThrowOnError) !== null && i !== void 0 ? i : !1, this.signal = n.signal, this.isMaybeSingle = (o = n.isMaybeSingle) !== null && o !== void 0 ? o : !1, n.fetch ? this.fetch = n.fetch : this.fetch = fetch;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */
    throwOnError() {
      return this.shouldThrowOnError = !0, this;
    }
    /**
     * Set an HTTP header for the request.
     */
    setHeader(n, i) {
      return this.headers = new Headers(this.headers), this.headers.set(n, i), this;
    }
    then(n, i) {
      this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
      const o = this.fetch;
      let a = o(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal
      }).then(async (l) => {
        var c, u, f, h;
        let d = null, g = null, p = null, _ = l.status, y = l.statusText;
        if (l.ok) {
          if (this.method !== "HEAD") {
            const R = await l.text();
            R === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((c = this.headers.get("Accept")) === null || c === void 0) && c.includes("application/vnd.pgrst.plan+text")) ? g = R : g = JSON.parse(R));
          }
          const v = (u = this.headers.get("Prefer")) === null || u === void 0 ? void 0 : u.match(/count=(exact|planned|estimated)/), S = (f = l.headers.get("content-range")) === null || f === void 0 ? void 0 : f.split("/");
          v && S && S.length > 1 && (p = parseInt(S[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(g) && (g.length > 1 ? (d = {
            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
            code: "PGRST116",
            details: `Results contain ${g.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          }, g = null, p = null, _ = 406, y = "Not Acceptable") : g.length === 1 ? g = g[0] : g = null);
        } else {
          const v = await l.text();
          try {
            d = JSON.parse(v), Array.isArray(d) && l.status === 404 && (g = [], d = null, _ = 200, y = "OK");
          } catch {
            l.status === 404 && v === "" ? (_ = 204, y = "No Content") : d = {
              message: v
            };
          }
          if (d && this.isMaybeSingle && (!((h = d == null ? void 0 : d.details) === null || h === void 0) && h.includes("0 rows")) && (d = null, _ = 200, y = "OK"), d && this.shouldThrowOnError)
            throw new e.default(d);
        }
        return {
          error: d,
          data: g,
          count: p,
          status: _,
          statusText: y
        };
      });
      return this.shouldThrowOnError || (a = a.catch((l) => {
        var c, u, f;
        return {
          error: {
            message: `${(c = l == null ? void 0 : l.name) !== null && c !== void 0 ? c : "FetchError"}: ${l == null ? void 0 : l.message}`,
            details: `${(u = l == null ? void 0 : l.stack) !== null && u !== void 0 ? u : ""}`,
            hint: "",
            code: `${(f = l == null ? void 0 : l.code) !== null && f !== void 0 ? f : ""}`
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      })), a.then(n, i);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */
    overrideTypes() {
      return this;
    }
  }
  return Te.default = t, Te;
}
var kt;
function br() {
  if (kt) return Oe;
  kt = 1, Object.defineProperty(Oe, "__esModule", { value: !0 });
  const e = de.__importDefault(wr());
  class t extends e.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */
    select(n) {
      let i = !1;
      const o = (n ?? "*").split("").map((a) => /\s/.test(a) && !i ? "" : (a === '"' && (i = !i), a)).join("");
      return this.url.searchParams.set("select", o), this.headers.append("Prefer", "return=representation"), this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    order(n, { ascending: i = !0, nullsFirst: o, foreignTable: a, referencedTable: l = a } = {}) {
      const c = l ? `${l}.order` : "order", u = this.url.searchParams.get(c);
      return this.url.searchParams.set(c, `${u ? `${u},` : ""}${n}.${i ? "asc" : "desc"}${o === void 0 ? "" : o ? ".nullsfirst" : ".nullslast"}`), this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    limit(n, { foreignTable: i, referencedTable: o = i } = {}) {
      const a = typeof o > "u" ? "limit" : `${o}.limit`;
      return this.url.searchParams.set(a, `${n}`), this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    range(n, i, { foreignTable: o, referencedTable: a = o } = {}) {
      const l = typeof a > "u" ? "offset" : `${a}.offset`, c = typeof a > "u" ? "limit" : `${a}.limit`;
      return this.url.searchParams.set(l, `${n}`), this.url.searchParams.set(c, `${i - n + 1}`), this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */
    abortSignal(n) {
      return this.signal = n, this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */
    single() {
      return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */
    maybeSingle() {
      return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this;
    }
    /**
     * Return `data` as a string in CSV format.
     */
    csv() {
      return this.headers.set("Accept", "text/csv"), this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */
    geojson() {
      return this.headers.set("Accept", "application/geo+json"), this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */
    explain({ analyze: n = !1, verbose: i = !1, settings: o = !1, buffers: a = !1, wal: l = !1, format: c = "text" } = {}) {
      var u;
      const f = [
        n ? "analyze" : null,
        i ? "verbose" : null,
        o ? "settings" : null,
        a ? "buffers" : null,
        l ? "wal" : null
      ].filter(Boolean).join("|"), h = (u = this.headers.get("Accept")) !== null && u !== void 0 ? u : "application/json";
      return this.headers.set("Accept", `application/vnd.pgrst.plan+${c}; for="${h}"; options=${f};`), c === "json" ? this : this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */
    rollback() {
      return this.headers.append("Prefer", "tx=rollback"), this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
    /**
     * Set the maximum number of rows that can be affected by the query.
     * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
     *
     * @param value - The maximum number of rows that can be affected
     */
    maxAffected(n) {
      return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${n}`), this;
    }
  }
  return Oe.default = t, Oe;
}
var Ot;
function ut() {
  if (Ot) return ke;
  Ot = 1, Object.defineProperty(ke, "__esModule", { value: !0 });
  const e = de.__importDefault(br()), t = new RegExp("[,()]");
  class r extends e.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    eq(i, o) {
      return this.url.searchParams.append(i, `eq.${o}`), this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    neq(i, o) {
      return this.url.searchParams.append(i, `neq.${o}`), this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gt(i, o) {
      return this.url.searchParams.append(i, `gt.${o}`), this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gte(i, o) {
      return this.url.searchParams.append(i, `gte.${o}`), this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lt(i, o) {
      return this.url.searchParams.append(i, `lt.${o}`), this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lte(i, o) {
      return this.url.searchParams.append(i, `lte.${o}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    like(i, o) {
      return this.url.searchParams.append(i, `like.${o}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAllOf(i, o) {
      return this.url.searchParams.append(i, `like(all).{${o.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAnyOf(i, o) {
      return this.url.searchParams.append(i, `like(any).{${o.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    ilike(i, o) {
      return this.url.searchParams.append(i, `ilike.${o}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAllOf(i, o) {
      return this.url.searchParams.append(i, `ilike(all).{${o.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAnyOf(i, o) {
      return this.url.searchParams.append(i, `ilike(any).{${o.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    is(i, o) {
      return this.url.searchParams.append(i, `is.${o}`), this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */
    in(i, o) {
      const a = Array.from(new Set(o)).map((l) => typeof l == "string" && t.test(l) ? `"${l}"` : `${l}`).join(",");
      return this.url.searchParams.append(i, `in.(${a})`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    contains(i, o) {
      return typeof o == "string" ? this.url.searchParams.append(i, `cs.${o}`) : Array.isArray(o) ? this.url.searchParams.append(i, `cs.{${o.join(",")}}`) : this.url.searchParams.append(i, `cs.${JSON.stringify(o)}`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    containedBy(i, o) {
      return typeof o == "string" ? this.url.searchParams.append(i, `cd.${o}`) : Array.isArray(o) ? this.url.searchParams.append(i, `cd.{${o.join(",")}}`) : this.url.searchParams.append(i, `cd.${JSON.stringify(o)}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGt(i, o) {
      return this.url.searchParams.append(i, `sr.${o}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGte(i, o) {
      return this.url.searchParams.append(i, `nxl.${o}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLt(i, o) {
      return this.url.searchParams.append(i, `sl.${o}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLte(i, o) {
      return this.url.searchParams.append(i, `nxr.${o}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeAdjacent(i, o) {
      return this.url.searchParams.append(i, `adj.${o}`), this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */
    overlaps(i, o) {
      return typeof o == "string" ? this.url.searchParams.append(i, `ov.${o}`) : this.url.searchParams.append(i, `ov.{${o.join(",")}}`), this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */
    textSearch(i, o, { config: a, type: l } = {}) {
      let c = "";
      l === "plain" ? c = "pl" : l === "phrase" ? c = "ph" : l === "websearch" && (c = "w");
      const u = a === void 0 ? "" : `(${a})`;
      return this.url.searchParams.append(i, `${c}fts${u}.${o}`), this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */
    match(i) {
      return Object.entries(i).forEach(([o, a]) => {
        this.url.searchParams.append(o, `eq.${a}`);
      }), this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    not(i, o, a) {
      return this.url.searchParams.append(i, `not.${o}.${a}`), this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */
    or(i, { foreignTable: o, referencedTable: a = o } = {}) {
      const l = a ? `${a}.or` : "or";
      return this.url.searchParams.append(l, `(${i})`), this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    filter(i, o, a) {
      return this.url.searchParams.append(i, `${o}.${a}`), this;
    }
  }
  return ke.default = r, ke;
}
var Tt;
function mr() {
  if (Tt) return Se;
  Tt = 1, Object.defineProperty(Se, "__esModule", { value: !0 });
  const e = de.__importDefault(ut());
  class t {
    constructor(n, { headers: i = {}, schema: o, fetch: a }) {
      this.url = n, this.headers = new Headers(i), this.schema = o, this.fetch = a;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    select(n, i) {
      const { head: o = !1, count: a } = i ?? {}, l = o ? "HEAD" : "GET";
      let c = !1;
      const u = (n ?? "*").split("").map((f) => /\s/.test(f) && !c ? "" : (f === '"' && (c = !c), f)).join("");
      return this.url.searchParams.set("select", u), a && this.headers.append("Prefer", `count=${a}`), new e.default({
        method: l,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch
      });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */
    insert(n, { count: i, defaultToNull: o = !0 } = {}) {
      var a;
      const l = "POST";
      if (i && this.headers.append("Prefer", `count=${i}`), o || this.headers.append("Prefer", "missing=default"), Array.isArray(n)) {
        const c = n.reduce((u, f) => u.concat(Object.keys(f)), []);
        if (c.length > 0) {
          const u = [...new Set(c)].map((f) => `"${f}"`);
          this.url.searchParams.set("columns", u.join(","));
        }
      }
      return new e.default({
        method: l,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: n,
        fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch
      });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */
    upsert(n, { onConflict: i, ignoreDuplicates: o = !1, count: a, defaultToNull: l = !0 } = {}) {
      var c;
      const u = "POST";
      if (this.headers.append("Prefer", `resolution=${o ? "ignore" : "merge"}-duplicates`), i !== void 0 && this.url.searchParams.set("on_conflict", i), a && this.headers.append("Prefer", `count=${a}`), l || this.headers.append("Prefer", "missing=default"), Array.isArray(n)) {
        const f = n.reduce((h, d) => h.concat(Object.keys(d)), []);
        if (f.length > 0) {
          const h = [...new Set(f)].map((d) => `"${d}"`);
          this.url.searchParams.set("columns", h.join(","));
        }
      }
      return new e.default({
        method: u,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: n,
        fetch: (c = this.fetch) !== null && c !== void 0 ? c : fetch
      });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    update(n, { count: i } = {}) {
      var o;
      const a = "PATCH";
      return i && this.headers.append("Prefer", `count=${i}`), new e.default({
        method: a,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: n,
        fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch
      });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    delete({ count: n } = {}) {
      var i;
      const o = "DELETE";
      return n && this.headers.append("Prefer", `count=${n}`), new e.default({
        method: o,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch
      });
    }
  }
  return Se.default = t, Se;
}
var At;
function gs() {
  if (At) return Ee;
  At = 1, Object.defineProperty(Ee, "__esModule", { value: !0 });
  const s = de, e = s.__importDefault(mr()), t = s.__importDefault(ut());
  class r {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */
    constructor(i, { headers: o = {}, schema: a, fetch: l } = {}) {
      this.url = i, this.headers = new Headers(o), this.schemaName = a, this.fetch = l;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
    from(i) {
      const o = new URL(`${this.url}/${i}`);
      return new e.default(o, {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch
      });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */
    schema(i) {
      return new r(this.url, {
        headers: this.headers,
        schema: i,
        fetch: this.fetch
      });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    rpc(i, o = {}, { head: a = !1, get: l = !1, count: c } = {}) {
      var u;
      let f;
      const h = new URL(`${this.url}/rpc/${i}`);
      let d;
      a || l ? (f = a ? "HEAD" : "GET", Object.entries(o).filter(([p, _]) => _ !== void 0).map(([p, _]) => [p, Array.isArray(_) ? `{${_.join(",")}}` : `${_}`]).forEach(([p, _]) => {
        h.searchParams.append(p, _);
      })) : (f = "POST", d = o);
      const g = new Headers(this.headers);
      return c && g.set("Prefer", `count=${c}`), new t.default({
        method: f,
        url: h,
        headers: g,
        schema: this.schemaName,
        body: d,
        fetch: (u = this.fetch) !== null && u !== void 0 ? u : fetch
      });
    }
  }
  return Ee.default = r, Ee;
}
Object.defineProperty($, "__esModule", { value: !0 });
var Er = $.PostgrestError = Ir = $.PostgrestBuilder = Pr = $.PostgrestTransformBuilder = Rr = $.PostgrestFilterBuilder = Tr = $.PostgrestQueryBuilder = kr = $.PostgrestClient = void 0;
const fe = de, Sr = fe.__importDefault(gs());
var kr = $.PostgrestClient = Sr.default;
const Or = fe.__importDefault(mr());
var Tr = $.PostgrestQueryBuilder = Or.default;
const Ar = fe.__importDefault(ut());
var Rr = $.PostgrestFilterBuilder = Ar.default;
const jr = fe.__importDefault(br());
var Pr = $.PostgrestTransformBuilder = jr.default;
const Cr = fe.__importDefault(wr());
var Ir = $.PostgrestBuilder = Cr.default;
const $r = fe.__importDefault(yr());
Er = $.PostgrestError = $r.default;
var xr = $.default = {
  PostgrestClient: Sr.default,
  PostgrestQueryBuilder: Or.default,
  PostgrestFilterBuilder: Ar.default,
  PostgrestTransformBuilder: jr.default,
  PostgrestBuilder: Cr.default,
  PostgrestError: $r.default
};
const ps = /* @__PURE__ */ is({
  __proto__: null,
  get PostgrestBuilder() {
    return Ir;
  },
  get PostgrestClient() {
    return kr;
  },
  get PostgrestError() {
    return Er;
  },
  get PostgrestFilterBuilder() {
    return Rr;
  },
  get PostgrestQueryBuilder() {
    return Tr;
  },
  get PostgrestTransformBuilder() {
    return Pr;
  },
  default: xr
}, [$]), {
  PostgrestClient: _s,
  PostgrestQueryBuilder: Hi,
  PostgrestFilterBuilder: zi,
  PostgrestTransformBuilder: Ji,
  PostgrestBuilder: Gi,
  PostgrestError: Yi
} = xr || ps;
class vs {
  static detectEnvironment() {
    var e;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    if (typeof process < "u") {
      const t = process.versions;
      if (t && t.node) {
        const r = t.node, n = parseInt(r.replace(/^v/, "").split(".")[0]);
        return n >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", constructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${n} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${n} detected without native WebSocket support.`,
          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.constructor)
      return e.constructor;
    let t = e.error || "WebSocket not supported in this environment.";
    throw e.workaround && (t += `

Suggested solution: ${e.workaround}`), new Error(t);
  }
  static createWebSocket(e, t) {
    const r = this.getWebSocketConstructor();
    return new r(e, t);
  }
  static isWebSocketSupported() {
    try {
      const e = this.detectEnvironment();
      return e.type === "native" || e.type === "ws";
    } catch {
      return !1;
    }
  }
}
const ys = "2.81.1", ws = `realtime-js/${ys}`, Ur = "1.0.0", bs = "2.0.0", Rt = Ur, Xe = 1e4, ms = 1e3, Es = 100;
var X;
(function(s) {
  s[s.connecting = 0] = "connecting", s[s.open = 1] = "open", s[s.closing = 2] = "closing", s[s.closed = 3] = "closed";
})(X || (X = {}));
var C;
(function(s) {
  s.closed = "closed", s.errored = "errored", s.joined = "joined", s.joining = "joining", s.leaving = "leaving";
})(C || (C = {}));
var N;
(function(s) {
  s.close = "phx_close", s.error = "phx_error", s.join = "phx_join", s.reply = "phx_reply", s.leave = "phx_leave", s.access_token = "access_token";
})(N || (N = {}));
var Ze;
(function(s) {
  s.websocket = "websocket";
})(Ze || (Ze = {}));
var Z;
(function(s) {
  s.Connecting = "connecting", s.Open = "open", s.Closing = "closing", s.Closed = "closed";
})(Z || (Z = {}));
class Ss {
  constructor() {
    this.HEADER_LENGTH = 1, this.META_LENGTH = 4, this.USER_BROADCAST_PUSH_META_LENGTH = 5, this.KINDS = { push: 0, reply: 1, broadcast: 2, userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST = "broadcast";
  }
  encode(e, t) {
    if (this._isArrayBuffer(e.payload))
      return t(this._binaryEncodePush(e));
    if (e.event === this.BROADCAST && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string")
      return t(this._binaryEncodeUserBroadcastPush(e));
    let r = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return t(JSON.stringify(r));
  }
  _binaryEncodePush(e) {
    const { join_ref: t, ref: r, event: n, topic: i, payload: o } = e, a = this.META_LENGTH + t.length + r.length + i.length + n.length, l = new ArrayBuffer(this.HEADER_LENGTH + a);
    let c = new DataView(l), u = 0;
    c.setUint8(u++, this.KINDS.push), c.setUint8(u++, t.length), c.setUint8(u++, r.length), c.setUint8(u++, i.length), c.setUint8(u++, n.length), Array.from(t, (h) => c.setUint8(u++, h.charCodeAt(0))), Array.from(r, (h) => c.setUint8(u++, h.charCodeAt(0))), Array.from(i, (h) => c.setUint8(u++, h.charCodeAt(0))), Array.from(n, (h) => c.setUint8(u++, h.charCodeAt(0)));
    var f = new Uint8Array(l.byteLength + o.byteLength);
    return f.set(new Uint8Array(l), 0), f.set(new Uint8Array(o), l.byteLength), f.buffer;
  }
  _binaryEncodeUserBroadcastPush(e) {
    var t;
    return this._isArrayBuffer((t = e.payload) === null || t === void 0 ? void 0 : t.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var t, r;
    const { join_ref: n, ref: i, topic: o } = e, a = e.payload.event, l = (r = (t = e.payload) === null || t === void 0 ? void 0 : t.payload) !== null && r !== void 0 ? r : new ArrayBuffer(0), c = this.USER_BROADCAST_PUSH_META_LENGTH + n.length + i.length + o.length + a.length, u = new ArrayBuffer(this.HEADER_LENGTH + c);
    let f = new DataView(u), h = 0;
    f.setUint8(h++, this.KINDS.userBroadcastPush), f.setUint8(h++, n.length), f.setUint8(h++, i.length), f.setUint8(h++, o.length), f.setUint8(h++, a.length), f.setUint8(h++, this.BINARY_ENCODING), Array.from(n, (g) => f.setUint8(h++, g.charCodeAt(0))), Array.from(i, (g) => f.setUint8(h++, g.charCodeAt(0))), Array.from(o, (g) => f.setUint8(h++, g.charCodeAt(0))), Array.from(a, (g) => f.setUint8(h++, g.charCodeAt(0)));
    var d = new Uint8Array(u.byteLength + l.byteLength);
    return d.set(new Uint8Array(u), 0), d.set(new Uint8Array(l), u.byteLength), d.buffer;
  }
  _encodeJsonUserBroadcastPush(e) {
    var t, r;
    const { join_ref: n, ref: i, topic: o } = e, a = e.payload.event, l = (r = (t = e.payload) === null || t === void 0 ? void 0 : t.payload) !== null && r !== void 0 ? r : {}, u = new TextEncoder().encode(JSON.stringify(l)).buffer, f = this.USER_BROADCAST_PUSH_META_LENGTH + n.length + i.length + o.length + a.length, h = new ArrayBuffer(this.HEADER_LENGTH + f);
    let d = new DataView(h), g = 0;
    d.setUint8(g++, this.KINDS.userBroadcastPush), d.setUint8(g++, n.length), d.setUint8(g++, i.length), d.setUint8(g++, o.length), d.setUint8(g++, a.length), d.setUint8(g++, this.JSON_ENCODING), Array.from(n, (_) => d.setUint8(g++, _.charCodeAt(0))), Array.from(i, (_) => d.setUint8(g++, _.charCodeAt(0))), Array.from(o, (_) => d.setUint8(g++, _.charCodeAt(0))), Array.from(a, (_) => d.setUint8(g++, _.charCodeAt(0)));
    var p = new Uint8Array(h.byteLength + u.byteLength);
    return p.set(new Uint8Array(h), 0), p.set(new Uint8Array(u), h.byteLength), p.buffer;
  }
  decode(e, t) {
    if (this._isArrayBuffer(e)) {
      let r = this._binaryDecode(e);
      return t(r);
    }
    if (typeof e == "string") {
      const r = JSON.parse(e), [n, i, o, a, l] = r;
      return t({ join_ref: n, ref: i, topic: o, event: a, payload: l });
    }
    return t({});
  }
  _binaryDecode(e) {
    const t = new DataView(e), r = t.getUint8(0), n = new TextDecoder();
    switch (r) {
      case this.KINDS.push:
        return this._decodePush(e, t, n);
      case this.KINDS.reply:
        return this._decodeReply(e, t, n);
      case this.KINDS.broadcast:
        return this._decodeBroadcast(e, t, n);
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, t, n);
    }
  }
  _decodePush(e, t, r) {
    const n = t.getUint8(1), i = t.getUint8(2), o = t.getUint8(3);
    let a = this.HEADER_LENGTH + this.META_LENGTH - 1;
    const l = r.decode(e.slice(a, a + n));
    a = a + n;
    const c = r.decode(e.slice(a, a + i));
    a = a + i;
    const u = r.decode(e.slice(a, a + o));
    a = a + o;
    const f = JSON.parse(r.decode(e.slice(a, e.byteLength)));
    return {
      join_ref: l,
      ref: null,
      topic: c,
      event: u,
      payload: f
    };
  }
  _decodeReply(e, t, r) {
    const n = t.getUint8(1), i = t.getUint8(2), o = t.getUint8(3), a = t.getUint8(4);
    let l = this.HEADER_LENGTH + this.META_LENGTH;
    const c = r.decode(e.slice(l, l + n));
    l = l + n;
    const u = r.decode(e.slice(l, l + i));
    l = l + i;
    const f = r.decode(e.slice(l, l + o));
    l = l + o;
    const h = r.decode(e.slice(l, l + a));
    l = l + a;
    const d = JSON.parse(r.decode(e.slice(l, e.byteLength))), g = { status: h, response: d };
    return {
      join_ref: c,
      ref: u,
      topic: f,
      event: N.reply,
      payload: g
    };
  }
  _decodeBroadcast(e, t, r) {
    const n = t.getUint8(1), i = t.getUint8(2);
    let o = this.HEADER_LENGTH + 2;
    const a = r.decode(e.slice(o, o + n));
    o = o + n;
    const l = r.decode(e.slice(o, o + i));
    o = o + i;
    const c = JSON.parse(r.decode(e.slice(o, e.byteLength)));
    return { join_ref: null, ref: null, topic: a, event: l, payload: c };
  }
  _decodeUserBroadcast(e, t, r) {
    const n = t.getUint8(1), i = t.getUint8(2), o = t.getUint8(3), a = t.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const c = r.decode(e.slice(l, l + n));
    l = l + n;
    const u = r.decode(e.slice(l, l + i));
    l = l + i;
    const f = r.decode(e.slice(l, l + o));
    l = l + o;
    const h = e.slice(l, e.byteLength), d = a === this.JSON_ENCODING ? JSON.parse(r.decode(h)) : h, g = {
      type: this.BROADCAST,
      event: u,
      payload: d
    };
    return o > 0 && (g.meta = JSON.parse(f)), { join_ref: null, ref: null, topic: c, event: this.BROADCAST, payload: g };
  }
  _isArrayBuffer(e) {
    var t;
    return e instanceof ArrayBuffer || ((t = e == null ? void 0 : e.constructor) === null || t === void 0 ? void 0 : t.name) === "ArrayBuffer";
  }
}
class Nr {
  constructor(e, t) {
    this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer), this.timer = void 0;
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var T;
(function(s) {
  s.abstime = "abstime", s.bool = "bool", s.date = "date", s.daterange = "daterange", s.float4 = "float4", s.float8 = "float8", s.int2 = "int2", s.int4 = "int4", s.int4range = "int4range", s.int8 = "int8", s.int8range = "int8range", s.json = "json", s.jsonb = "jsonb", s.money = "money", s.numeric = "numeric", s.oid = "oid", s.reltime = "reltime", s.text = "text", s.time = "time", s.timestamp = "timestamp", s.timestamptz = "timestamptz", s.timetz = "timetz", s.tsrange = "tsrange", s.tstzrange = "tstzrange";
})(T || (T = {}));
const jt = (s, e, t = {}) => {
  var r;
  const n = (r = t.skipTypes) !== null && r !== void 0 ? r : [];
  return e ? Object.keys(e).reduce((i, o) => (i[o] = ks(o, s, e, n), i), {}) : {};
}, ks = (s, e, t, r) => {
  const n = e.find((a) => a.name === s), i = n == null ? void 0 : n.type, o = t[s];
  return i && !r.includes(i) ? Dr(i, o) : et(o);
}, Dr = (s, e) => {
  if (s.charAt(0) === "_") {
    const t = s.slice(1, s.length);
    return Rs(e, t);
  }
  switch (s) {
    case T.bool:
      return Os(e);
    case T.float4:
    case T.float8:
    case T.int2:
    case T.int4:
    case T.int8:
    case T.numeric:
    case T.oid:
      return Ts(e);
    case T.json:
    case T.jsonb:
      return As(e);
    case T.timestamp:
      return js(e);
    case T.abstime:
    case T.date:
    case T.daterange:
    case T.int4range:
    case T.int8range:
    case T.money:
    case T.reltime:
    case T.text:
    case T.time:
    case T.timestamptz:
    case T.timetz:
    case T.tsrange:
    case T.tstzrange:
      return et(e);
    default:
      return et(e);
  }
}, et = (s) => s, Os = (s) => {
  switch (s) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return s;
  }
}, Ts = (s) => {
  if (typeof s == "string") {
    const e = parseFloat(s);
    if (!Number.isNaN(e))
      return e;
  }
  return s;
}, As = (s) => {
  if (typeof s == "string")
    try {
      return JSON.parse(s);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), s;
    }
  return s;
}, Rs = (s, e) => {
  if (typeof s != "string")
    return s;
  const t = s.length - 1, r = s[t];
  if (s[0] === "{" && r === "}") {
    let i;
    const o = s.slice(1, t);
    try {
      i = JSON.parse("[" + o + "]");
    } catch {
      i = o ? o.split(",") : [];
    }
    return i.map((a) => Dr(e, a));
  }
  return s;
}, js = (s) => typeof s == "string" ? s.replace(" ", "T") : s, Lr = (s) => {
  const e = new URL(s);
  return e.protocol = e.protocol.replace(/^ws/i, "http"), e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), e.pathname === "" || e.pathname === "/" ? e.pathname = "/api/broadcast" : e.pathname = e.pathname + "/api/broadcast", e.href;
};
class qe {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, t, r = {}, n = Xe) {
    this.channel = e, this.event = t, this.payload = r, this.timeout = n, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(e) {
    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    var r;
    return this._hasReceived(e) && t((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response), this.recHooks.push({ status: e, callback: t }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const e = (t) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = t, this._matchReceive(t);
    };
    this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(e, t) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var Pt;
(function(s) {
  s.SYNC = "sync", s.JOIN = "join", s.LEAVE = "leave";
})(Pt || (Pt = {}));
class _e {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(e, t) {
    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.enabled = !1, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const r = (t == null ? void 0 : t.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(r.state, {}, (n) => {
      const { onJoin: i, onLeave: o, onSync: a } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = _e.syncState(this.state, n, i, o), this.pendingDiffs.forEach((l) => {
        this.state = _e.syncDiff(this.state, l, i, o);
      }), this.pendingDiffs = [], a();
    }), this.channel._on(r.diff, {}, (n) => {
      const { onJoin: i, onLeave: o, onSync: a } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(n) : (this.state = _e.syncDiff(this.state, n, i, o), a());
    }), this.onJoin((n, i, o) => {
      this.channel._trigger("presence", {
        event: "join",
        key: n,
        currentPresences: i,
        newPresences: o
      });
    }), this.onLeave((n, i, o) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: n,
        currentPresences: i,
        leftPresences: o
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(e, t, r, n) {
    const i = this.cloneDeep(e), o = this.transformState(t), a = {}, l = {};
    return this.map(i, (c, u) => {
      o[c] || (l[c] = u);
    }), this.map(o, (c, u) => {
      const f = i[c];
      if (f) {
        const h = u.map((_) => _.presence_ref), d = f.map((_) => _.presence_ref), g = u.filter((_) => d.indexOf(_.presence_ref) < 0), p = f.filter((_) => h.indexOf(_.presence_ref) < 0);
        g.length > 0 && (a[c] = g), p.length > 0 && (l[c] = p);
      } else
        a[c] = u;
    }), this.syncDiff(i, { joins: a, leaves: l }, r, n);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(e, t, r, n) {
    const { joins: i, leaves: o } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves)
    };
    return r || (r = () => {
    }), n || (n = () => {
    }), this.map(i, (a, l) => {
      var c;
      const u = (c = e[a]) !== null && c !== void 0 ? c : [];
      if (e[a] = this.cloneDeep(l), u.length > 0) {
        const f = e[a].map((d) => d.presence_ref), h = u.filter((d) => f.indexOf(d.presence_ref) < 0);
        e[a].unshift(...h);
      }
      r(a, u, l);
    }), this.map(o, (a, l) => {
      let c = e[a];
      if (!c)
        return;
      const u = l.map((f) => f.presence_ref);
      c = c.filter((f) => u.indexOf(f.presence_ref) < 0), e[a] = c, n(a, c, l), c.length === 0 && delete e[a];
    }), e;
  }
  /** @internal */
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(e) {
    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((t, r) => {
      const n = e[r];
      return "metas" in n ? t[r] = n.metas.map((i) => (i.presence_ref = i.phx_ref, delete i.phx_ref, delete i.phx_ref_prev, i)) : t[r] = n, t;
    }, {});
  }
  /** @internal */
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  /** @internal */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /** @internal */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /** @internal */
  onSync(e) {
    this.caller.onSync = e;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Ct;
(function(s) {
  s.ALL = "*", s.INSERT = "INSERT", s.UPDATE = "UPDATE", s.DELETE = "DELETE";
})(Ct || (Ct = {}));
var ve;
(function(s) {
  s.BROADCAST = "broadcast", s.PRESENCE = "presence", s.POSTGRES_CHANGES = "postgres_changes", s.SYSTEM = "system";
})(ve || (ve = {}));
var V;
(function(s) {
  s.SUBSCRIBED = "SUBSCRIBED", s.TIMED_OUT = "TIMED_OUT", s.CLOSED = "CLOSED", s.CHANNEL_ERROR = "CHANNEL_ERROR";
})(V || (V = {}));
class ht {
  constructor(e, t = { config: {} }, r) {
    var n, i;
    if (this.topic = e, this.params = t, this.socket = r, this.bindings = {}, this.state = C.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, t.config), this.timeout = this.socket.timeout, this.joinPush = new qe(this, N.join, this.params, this.timeout), this.rejoinTimer = new Nr(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = C.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((o) => o.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = C.closed, this.socket._remove(this);
    }), this._onError((o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = C.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = C.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = C.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(N.reply, {}, (o, a) => {
      this._trigger(this._replyEventName(a), o);
    }), this.presence = new _e(this), this.broadcastEndpointURL = Lr(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && (!((i = (n = this.params.config) === null || n === void 0 ? void 0 : n.broadcast) === null || i === void 0) && i.replay))
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, t = this.timeout) {
    var r, n, i;
    if (this.socket.isConnected() || this.socket.connect(), this.state == C.closed) {
      const { config: { broadcast: o, presence: a, private: l } } = this.params, c = (n = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((d) => d.filter)) !== null && n !== void 0 ? n : [], u = !!this.bindings[ve.PRESENCE] && this.bindings[ve.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0, f = {}, h = {
        broadcast: o,
        presence: Object.assign(Object.assign({}, a), { enabled: u }),
        postgres_changes: c,
        private: l
      };
      this.socket.accessTokenValue && (f.access_token = this.socket.accessTokenValue), this._onError((d) => e == null ? void 0 : e(V.CHANNEL_ERROR, d)), this._onClose(() => e == null ? void 0 : e(V.CLOSED)), this.updateJoinPayload(Object.assign({ config: h }, f)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", async ({ postgres_changes: d }) => {
        var g;
        if (this.socket.setAuth(), d === void 0) {
          e == null || e(V.SUBSCRIBED);
          return;
        } else {
          const p = this.bindings.postgres_changes, _ = (g = p == null ? void 0 : p.length) !== null && g !== void 0 ? g : 0, y = [];
          for (let w = 0; w < _; w++) {
            const v = p[w], { filter: { event: S, schema: R, table: O, filter: P } } = v, W = d && d[w];
            if (W && W.event === S && W.schema === R && W.table === O && W.filter === P)
              y.push(Object.assign(Object.assign({}, v), { id: W.id }));
            else {
              this.unsubscribe(), this.state = C.errored, e == null || e(V.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = y, e && e(V.SUBSCRIBED);
          return;
        }
      }).receive("error", (d) => {
        this.state = C.errored, e == null || e(V.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(d).join(", ") || "error")));
      }).receive("timeout", () => {
        e == null || e(V.TIMED_OUT);
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, t = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, t.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, t, r) {
    return this.state === C.joined && e === ve.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(() => this.subscribe())), this._on(e, t, r);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   */
  async httpSend(e, t, r = {}) {
    var n;
    const i = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "";
    if (t == null)
      return Promise.reject("Payload is required for httpSend()");
    const o = {
      method: "POST",
      headers: {
        Authorization: i,
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          {
            topic: this.subTopic,
            event: e,
            payload: t,
            private: this.private
          }
        ]
      })
    }, a = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
    if (a.status === 202)
      return { success: !0 };
    let l = a.statusText;
    try {
      const c = await a.json();
      l = c.error || c.message || l;
    } catch {
    }
    return Promise.reject(new Error(l));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(e, t = {}) {
    var r, n;
    if (!this._canPush() && e.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: i, payload: o } = e, l = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: o,
              private: this.private
            }
          ]
        })
      };
      try {
        const c = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (r = t.timeout) !== null && r !== void 0 ? r : this.timeout);
        return await ((n = c.body) === null || n === void 0 ? void 0 : n.cancel()), c.ok ? "ok" : "error";
      } catch (c) {
        return c.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var o, a, l;
        const c = this._push(e.type, e, t.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && i("ok"), c.receive("ok", () => i("ok")), c.receive("error", () => i("error")), c.receive("timeout", () => i("timed out"));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(e = this.timeout) {
    this.state = C.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(N.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let r = null;
    return new Promise((n) => {
      r = new qe(this, N.leave, {}, e), r.receive("ok", () => {
        t(), n("ok");
      }).receive("timeout", () => {
        t(), n("timed out");
      }).receive("error", () => {
        n("error");
      }), r.send(), this._canPush() || r.trigger("ok", {});
    }).finally(() => {
      r == null || r.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((e) => e.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = C.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(e, t, r) {
    const n = new AbortController(), i = setTimeout(() => n.abort(), r), o = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: n.signal }));
    return clearTimeout(i), o;
  }
  /** @internal */
  _push(e, t, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let n = new qe(this, e, t, r);
    return this._canPush() ? n.send() : this._addToPushBuffer(n), n;
  }
  /** @internal */
  _addToPushBuffer(e) {
    if (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > Es) {
      const t = this.pushBuffer.shift();
      t && (t.destroy(), this.socket.log("channel", `discarded push due to buffer overflow: ${t.event}`, t.payload));
    }
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(e, t, r) {
    return t;
  }
  /** @internal */
  _isMember(e) {
    return this.topic === e;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(e, t, r) {
    var n, i;
    const o = e.toLocaleLowerCase(), { close: a, error: l, leave: c, join: u } = N;
    if (r && [a, l, c, u].indexOf(o) >= 0 && r !== this._joinRef())
      return;
    let h = this._onMessage(o, t, r);
    if (t && !h)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o) ? (n = this.bindings.postgres_changes) === null || n === void 0 || n.filter((d) => {
      var g, p, _;
      return ((g = d.filter) === null || g === void 0 ? void 0 : g.event) === "*" || ((_ = (p = d.filter) === null || p === void 0 ? void 0 : p.event) === null || _ === void 0 ? void 0 : _.toLocaleLowerCase()) === o;
    }).map((d) => d.callback(h, r)) : (i = this.bindings[o]) === null || i === void 0 || i.filter((d) => {
      var g, p, _, y, w, v;
      if (["broadcast", "presence", "postgres_changes"].includes(o))
        if ("id" in d) {
          const S = d.id, R = (g = d.filter) === null || g === void 0 ? void 0 : g.event;
          return S && ((p = t.ids) === null || p === void 0 ? void 0 : p.includes(S)) && (R === "*" || (R == null ? void 0 : R.toLocaleLowerCase()) === ((_ = t.data) === null || _ === void 0 ? void 0 : _.type.toLocaleLowerCase()));
        } else {
          const S = (w = (y = d == null ? void 0 : d.filter) === null || y === void 0 ? void 0 : y.event) === null || w === void 0 ? void 0 : w.toLocaleLowerCase();
          return S === "*" || S === ((v = t == null ? void 0 : t.event) === null || v === void 0 ? void 0 : v.toLocaleLowerCase());
        }
      else
        return d.type.toLocaleLowerCase() === o;
    }).map((d) => {
      if (typeof h == "object" && "ids" in h) {
        const g = h.data, { schema: p, table: _, commit_timestamp: y, type: w, errors: v } = g;
        h = Object.assign(Object.assign({}, {
          schema: p,
          table: _,
          commit_timestamp: y,
          eventType: w,
          new: {},
          old: {},
          errors: v
        }), this._getPayloadRecords(g));
      }
      d.callback(h, r);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === C.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === C.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === C.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === C.leaving;
  }
  /** @internal */
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  /** @internal */
  _on(e, t, r) {
    const n = e.toLocaleLowerCase(), i = {
      type: n,
      filter: t,
      callback: r
    };
    return this.bindings[n] ? this.bindings[n].push(i) : this.bindings[n] = [i], this;
  }
  /** @internal */
  _off(e, t) {
    const r = e.toLocaleLowerCase();
    return this.bindings[r] && (this.bindings[r] = this.bindings[r].filter((n) => {
      var i;
      return !(((i = n.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === r && ht.isEqual(n.filter, t));
    })), this;
  }
  /** @internal */
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const r in e)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this._on(N.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(N.error, {}, (t) => e(t));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(e = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = C.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const t = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = jt(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = jt(e.columns, e.old_record)), t;
  }
}
const Me = () => {
}, Re = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, Ps = [1e3, 2e3, 5e3, 1e4], Cs = 1e4, Is = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class $s {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(e, t) {
    var r;
    if (this.accessTokenValue = null, this.apiKey = null, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = Xe, this.transport = null, this.heartbeatIntervalMs = Re.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = Me, this.ref = 0, this.reconnectTimer = null, this.vsn = Rt, this.logger = Me, this.conn = null, this.sendBuffer = [], this.serializer = new Ss(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._resolveFetch = (n) => n ? (...i) => n(...i) : (...i) => fetch(...i), !(!((r = t == null ? void 0 : t.params) === null || r === void 0) && r.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = t.params.apikey, this.endPoint = `${e}/${Ze.websocket}`, this.httpEndpoint = Lr(e), this._initializeOptions(t), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(t == null ? void 0 : t.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
      if (this._setConnectionState("connecting"), this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this.transport)
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = vs.createWebSocket(this.endpointURL());
        } catch (e) {
          this._setConnectionState("disconnected");
          const t = e.message;
          throw t.includes("Node.js") ? new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${t}`);
        }
      this._setupConnectionHandlers();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: this.vsn }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(e, t) {
    if (!this.isDisconnecting())
      if (this._setConnectionState("disconnecting", !0), this.conn) {
        const r = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(r), this._setConnectionState("disconnected");
        }, typeof this.conn.close == "function" && (e ? this.conn.close(e, t ?? "") : this.conn.close()), this._teardownConnection();
      } else
        this._setConnectionState("disconnected");
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(e) {
    const t = await e.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), t;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
    return this.channels = [], this.disconnect(), e;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(e, t, r) {
    this.logger(e, t, r);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case X.connecting:
        return Z.Connecting;
      case X.open:
        return Z.Open;
      case X.closing:
        return Z.Closing;
      default:
        return Z.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === Z.Open;
  }
  /**
   * Returns `true` if the connection is currently connecting.
   */
  isConnecting() {
    return this._connectionState === "connecting";
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   */
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(e, t = { config: {} }) {
    const r = `realtime:${e}`, n = this.getChannels().find((i) => i.topic === r);
    if (n)
      return n;
    {
      const i = new ht(`realtime:${e}`, t, this);
      return this.channels.push(i), i;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: t, event: r, payload: n, ref: i } = e, o = () => {
      this.encode(e, (a) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(a);
      });
    };
    this.log("push", `${t} ${r} (${i})`, n), this.isConnected() ? o() : this.sendBuffer.push(o);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(e = null) {
    this._authPromise = this._performAuth(e);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var e;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      this._wasManualDisconnect = !1, (e = this.conn) === null || e === void 0 || e.close(ms, "heartbeat timeout"), setTimeout(() => {
        var t;
        this.isConnected() || (t = this.reconnectTimer) === null || t === void 0 || t.scheduleTimeout();
      }, Re.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (t) {
      this.log("error", "error in heartbeat callback", t);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(e) {
    this.heartbeatCallback = e;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let e = this.ref + 1;
    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(e) {
    let t = this.channels.find((r) => r.topic === e && (r._isJoined() || r._isJoining()));
    t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((t) => t.topic !== e.topic);
  }
  /** @internal */
  _onConnMessage(e) {
    this.decode(e.data, (t) => {
      if (t.topic === "phoenix" && t.event === "phx_reply")
        try {
          this.heartbeatCallback(t.payload.status === "ok" ? "ok" : "error");
        } catch (c) {
          this.log("error", "error in heartbeat callback", c);
        }
      t.ref && t.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
      const { topic: r, event: n, payload: i, ref: o } = t, a = o ? `(${o})` : "", l = i.status || "";
      this.log("receive", `${l} ${r} ${n} ${a}`.trim(), i), this.channels.filter((c) => c._isMember(r)).forEach((c) => c._trigger(n, i, o)), this._triggerStateCallbacks("message", t);
    });
  }
  /**
   * Clear specific timer
   * @internal
   */
  _clearTimer(e) {
    var t;
    e === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer), this.heartbeatTimer = void 0) : e === "reconnect" && ((t = this.reconnectTimer) === null || t === void 0 || t.reset());
  }
  /**
   * Clear all timers
   * @internal
   */
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  /**
   * Setup connection handlers for WebSocket events
   * @internal
   */
  _setupConnectionHandlers() {
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    if (this.conn) {
      if (this.conn.readyState === X.open || this.conn.readyState === X.connecting)
        try {
          this.conn.close();
        } catch (e) {
          this.log("error", "Error closing connection", e);
        }
      this.conn.onopen = null, this.conn.onerror = null, this.conn.onmessage = null, this.conn.onclose = null, this.conn = null;
    }
    this._clearAllTimers(), this.channels.forEach((e) => e.teardown());
  }
  /** @internal */
  _onConnOpen() {
    this._setConnectionState("connected"), this.log("transport", `connected to ${this.endpointURL()}`), (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).then(() => {
      this.flushSendBuffer();
    }).catch((t) => {
      this.log("error", "error waiting for auth on connect", t), this.flushSendBuffer();
    }), this._clearTimer("reconnect"), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this._triggerStateCallbacks("open");
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e), this.workerRef.onerror = (t) => {
      this.log("worker", "worker error", t.message), this.workerRef.terminate();
    }, this.workerRef.onmessage = (t) => {
      t.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /** @internal */
  _onConnClose(e) {
    var t;
    this._setConnectionState("disconnected"), this.log("transport", "close", e), this._triggerChanError(), this._clearTimer("heartbeat"), this._wasManualDisconnect || (t = this.reconnectTimer) === null || t === void 0 || t.scheduleTimeout(), this._triggerStateCallbacks("close", e);
  }
  /** @internal */
  _onConnError(e) {
    this._setConnectionState("disconnected"), this.log("transport", `${e}`), this._triggerChanError(), this._triggerStateCallbacks("error", e);
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(N.error));
  }
  /** @internal */
  _appendParams(e, t) {
    if (Object.keys(t).length === 0)
      return e;
    const r = e.match(/\?/) ? "&" : "?", n = new URLSearchParams(t);
    return `${e}${r}${n}`;
  }
  _workerObjectUrl(e) {
    let t;
    if (e)
      t = e;
    else {
      const r = new Blob([Is], { type: "application/javascript" });
      t = URL.createObjectURL(r);
    }
    return t;
  }
  /**
   * Set connection state with proper state management
   * @internal
   */
  _setConnectionState(e, t = !1) {
    this._connectionState = e, e === "connecting" ? this._wasManualDisconnect = !1 : e === "disconnecting" && (this._wasManualDisconnect = t);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(e = null) {
    let t;
    e ? t = e : this.accessToken ? t = await this.accessToken() : t = this.accessTokenValue, this.accessTokenValue != t && (this.accessTokenValue = t, this.channels.forEach((r) => {
      const n = {
        access_token: t,
        version: ws
      };
      t && r.updateJoinPayload(n), r.joinedOnce && r._isJoined() && r._push(N.access_token, {
        access_token: t
      });
    }));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(e = "general") {
    this.setAuth().catch((t) => {
      this.log("error", `error setting auth in ${e}`, t);
    });
  }
  /**
   * Trigger state change callbacks with proper error handling
   * @internal
   */
  _triggerStateCallbacks(e, t) {
    try {
      this.stateChangeCallbacks[e].forEach((r) => {
        try {
          r(t);
        } catch (n) {
          this.log("error", `error in ${e} callback`, n);
        }
      });
    } catch (r) {
      this.log("error", `error triggering ${e} callbacks`, r);
    }
  }
  /**
   * Setup reconnection timer with proper configuration
   * @internal
   */
  _setupReconnectionTimer() {
    this.reconnectTimer = new Nr(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, Re.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(e) {
    var t, r, n, i, o, a, l, c, u, f, h, d;
    switch (this.transport = (t = e == null ? void 0 : e.transport) !== null && t !== void 0 ? t : null, this.timeout = (r = e == null ? void 0 : e.timeout) !== null && r !== void 0 ? r : Xe, this.heartbeatIntervalMs = (n = e == null ? void 0 : e.heartbeatIntervalMs) !== null && n !== void 0 ? n : Re.HEARTBEAT_INTERVAL, this.worker = (i = e == null ? void 0 : e.worker) !== null && i !== void 0 ? i : !1, this.accessToken = (o = e == null ? void 0 : e.accessToken) !== null && o !== void 0 ? o : null, this.heartbeatCallback = (a = e == null ? void 0 : e.heartbeatCallback) !== null && a !== void 0 ? a : Me, this.vsn = (l = e == null ? void 0 : e.vsn) !== null && l !== void 0 ? l : Rt, e != null && e.params && (this.params = e.params), e != null && e.logger && (this.logger = e.logger), (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (c = e == null ? void 0 : e.reconnectAfterMs) !== null && c !== void 0 ? c : (g) => Ps[g - 1] || Cs, this.vsn) {
      case Ur:
        this.encode = (u = e == null ? void 0 : e.encode) !== null && u !== void 0 ? u : (g, p) => p(JSON.stringify(g)), this.decode = (f = e == null ? void 0 : e.decode) !== null && f !== void 0 ? f : (g, p) => p(JSON.parse(g));
        break;
      case bs:
        this.encode = (h = e == null ? void 0 : e.encode) !== null && h !== void 0 ? h : this.serializer.encode.bind(this.serializer), this.decode = (d = e == null ? void 0 : e.decode) !== null && d !== void 0 ? d : this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e == null ? void 0 : e.workerUrl;
    }
  }
}
class dt extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function A(s) {
  return typeof s == "object" && s !== null && "__isStorageError" in s;
}
class xs extends dt {
  constructor(e, t, r) {
    super(e), this.name = "StorageApiError", this.status = t, this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
class tt extends dt {
  constructor(e, t) {
    super(e), this.name = "StorageUnknownError", this.originalError = t;
  }
}
const ft = (s) => s ? (...e) => s(...e) : (...e) => fetch(...e), Us = () => Response, rt = (s) => {
  if (Array.isArray(s))
    return s.map((t) => rt(t));
  if (typeof s == "function" || s !== Object(s))
    return s;
  const e = {};
  return Object.entries(s).forEach(([t, r]) => {
    const n = t.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
    e[n] = rt(r);
  }), e;
}, Ns = (s) => {
  if (typeof s != "object" || s === null)
    return !1;
  const e = Object.getPrototypeOf(s);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, Fe = (s) => {
  var e;
  return s.msg || s.message || s.error_description || (typeof s.error == "string" ? s.error : (e = s.error) === null || e === void 0 ? void 0 : e.message) || JSON.stringify(s);
}, Ds = (s, e, t) => b(void 0, void 0, void 0, function* () {
  const r = yield Us();
  s instanceof r && !(t != null && t.noResolveJson) ? s.json().then((n) => {
    const i = s.status || 500, o = (n == null ? void 0 : n.statusCode) || i + "";
    e(new xs(Fe(n), i, o));
  }).catch((n) => {
    e(new tt(Fe(n), n));
  }) : e(new tt(Fe(s), s));
}), Ls = (s, e, t, r) => {
  const n = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
  return s === "GET" || !r ? n : (Ns(r) ? (n.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), n.body = JSON.stringify(r)) : n.body = r, e != null && e.duplex && (n.duplex = e.duplex), Object.assign(Object.assign({}, n), t));
};
function me(s, e, t, r, n, i) {
  return b(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      s(t, Ls(e, r, n, i)).then((l) => {
        if (!l.ok)
          throw l;
        return r != null && r.noResolveJson ? l : l.json();
      }).then((l) => o(l)).catch((l) => Ds(l, a, r));
    });
  });
}
function ye(s, e, t, r) {
  return b(this, void 0, void 0, function* () {
    return me(s, "GET", e, t, r);
  });
}
function M(s, e, t, r, n) {
  return b(this, void 0, void 0, function* () {
    return me(s, "POST", e, r, n, t);
  });
}
function st(s, e, t, r, n) {
  return b(this, void 0, void 0, function* () {
    return me(s, "PUT", e, r, n, t);
  });
}
function Bs(s, e, t, r) {
  return b(this, void 0, void 0, function* () {
    return me(s, "HEAD", e, Object.assign(Object.assign({}, t), { noResolveJson: !0 }), r);
  });
}
function gt(s, e, t, r, n) {
  return b(this, void 0, void 0, function* () {
    return me(s, "DELETE", e, r, n, t);
  });
}
class qs {
  constructor(e, t) {
    this.downloadFn = e, this.shouldThrowOnError = t;
  }
  then(e, t) {
    return this.execute().then(e, t);
  }
  execute() {
    return b(this, void 0, void 0, function* () {
      try {
        return {
          data: (yield this.downloadFn()).body,
          error: null
        };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (A(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
}
var Br;
class Ms {
  constructor(e, t) {
    this.downloadFn = e, this.shouldThrowOnError = t, this[Br] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new qs(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  execute() {
    return b(this, void 0, void 0, function* () {
      try {
        return {
          data: yield (yield this.downloadFn()).blob(),
          error: null
        };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (A(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
}
Br = Symbol.toStringTag;
const Fs = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, It = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class Vs {
  constructor(e, t = {}, r, n) {
    this.shouldThrowOnError = !1, this.url = e, this.headers = t, this.bucketId = r, this.fetch = ft(n);
  }
  /**
   * Enable throwing errors instead of returning them.
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, t, r, n) {
    return b(this, void 0, void 0, function* () {
      try {
        let i;
        const o = Object.assign(Object.assign({}, It), n);
        let a = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(o.upsert) });
        const l = o.metadata;
        typeof Blob < "u" && r instanceof Blob ? (i = new FormData(), i.append("cacheControl", o.cacheControl), l && i.append("metadata", this.encodeMetadata(l)), i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r, i.has("cacheControl") || i.append("cacheControl", o.cacheControl), l && !i.has("metadata") && i.append("metadata", this.encodeMetadata(l))) : (i = r, a["cache-control"] = `max-age=${o.cacheControl}`, a["content-type"] = o.contentType, l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l))), (typeof ReadableStream < "u" && i instanceof ReadableStream || i && typeof i == "object" && "pipe" in i && typeof i.pipe == "function") && !o.duplex && (o.duplex = "half")), n != null && n.headers && (a = Object.assign(Object.assign({}, a), n.headers));
        const c = this._removeEmptyFolders(t), u = this._getFinalPath(c), f = yield (e == "PUT" ? st : M)(this.fetch, `${this.url}/object/${u}`, i, Object.assign({ headers: a }, o != null && o.duplex ? { duplex: o.duplex } : {}));
        return {
          data: { path: c, id: f.Id, fullPath: f.Key },
          error: null
        };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (A(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(e, t, r) {
    return b(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, t, r);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(e, t, r, n) {
    return b(this, void 0, void 0, function* () {
      const i = this._removeEmptyFolders(e), o = this._getFinalPath(i), a = new URL(this.url + `/object/upload/sign/${o}`);
      a.searchParams.set("token", t);
      try {
        let l;
        const c = Object.assign({ upsert: It.upsert }, n), u = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(c.upsert) });
        typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", c.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", c.cacheControl)) : (l = r, u["cache-control"] = `max-age=${c.cacheControl}`, u["content-type"] = c.contentType);
        const f = yield st(this.fetch, a.toString(), l, { headers: u });
        return {
          data: { path: i, fullPath: f.Key },
          error: null
        };
      } catch (l) {
        if (this.shouldThrowOnError)
          throw l;
        if (A(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(e, t) {
    return b(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(e);
        const n = Object.assign({}, this.headers);
        t != null && t.upsert && (n["x-upsert"] = "true");
        const i = yield M(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, { headers: n }), o = new URL(this.url + i.url), a = o.searchParams.get("token");
        if (!a)
          throw new dt("No token returned by API");
        return { data: { signedUrl: o.toString(), path: e, token: a }, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(e, t, r) {
    return b(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, t, r);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(e, t, r) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield M(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(e, t, r) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield M(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(e, t, r) {
    return b(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(e), i = yield M(this.fetch, `${this.url}/object/sign/${n}`, Object.assign({ expiresIn: t }, r != null && r.transform ? { transform: r.transform } : {}), { headers: this.headers });
        const o = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }, { data: i, error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(e, t, r) {
    return b(this, void 0, void 0, function* () {
      try {
        const n = yield M(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: t, paths: e }, { headers: this.headers }), i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return {
          data: n.map((o) => Object.assign(Object.assign({}, o), { signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null })),
          error: null
        };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(e, t) {
    const n = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image/authenticated" : "object", i = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {}), o = i ? `?${i}` : "", a = this._getFinalPath(e), l = () => ye(this.fetch, `${this.url}/${n}/${a}${o}`, {
      headers: this.headers,
      noResolveJson: !0
    });
    return new Ms(l, this.shouldThrowOnError);
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(e) {
    return b(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        const r = yield ye(this.fetch, `${this.url}/object/info/${t}`, {
          headers: this.headers
        });
        return { data: rt(r), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(e) {
    return b(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        return yield Bs(this.fetch, `${this.url}/object/${t}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (A(r) && r instanceof tt) {
          const n = r.originalError;
          if ([400, 404].includes(n == null ? void 0 : n.status))
            return { data: !1, error: r };
        }
        throw r;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e), n = [], i = t != null && t.download ? `download=${t.download === !0 ? "" : t.download}` : "";
    i !== "" && n.push(i);
    const a = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image" : "object", l = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {});
    l !== "" && n.push(l);
    let c = n.join("&");
    return c !== "" && (c = `?${c}`), {
      data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${c}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield gt(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files and folders within a path of the bucket.
   * @param path The folder path.
   * @param options Search options including limit (defaults to 100), offset, sortBy, and search
   */
  list(e, t, r) {
    return b(this, void 0, void 0, function* () {
      try {
        const n = Object.assign(Object.assign(Object.assign({}, Fs), t), { prefix: e || "" });
        return { data: yield M(this.fetch, `${this.url}/object/list/${this.bucketId}`, n, { headers: this.headers }, r), error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * @experimental this method signature might change in the future
   * @param options search options
   * @param parameters
   */
  listV2(e, t) {
    return b(this, void 0, void 0, function* () {
      try {
        const r = Object.assign({}, e);
        return { data: yield M(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, r, { headers: this.headers }, t), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&");
  }
}
const qr = "2.81.1", Mr = {
  "X-Client-Info": `storage-js/${qr}`
};
class Ws {
  constructor(e, t = {}, r, n) {
    this.shouldThrowOnError = !1;
    const i = new URL(e);
    n != null && n.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase.")), this.url = i.href.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Mr), t), this.fetch = ft(r);
  }
  /**
   * Enable throwing errors instead of returning them.
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets(e) {
    return b(this, void 0, void 0, function* () {
      try {
        const t = this.listBucketOptionsToQueryString(e);
        return { data: yield ye(this.fetch, `${this.url}/bucket${t}`, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield ye(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
   *   - default bucket type is `STANDARD`
   */
  createBucket(e) {
    return b(this, arguments, void 0, function* (t, r = {
      public: !1
    }) {
      try {
        return { data: yield M(this.fetch, `${this.url}/bucket`, {
          id: t,
          name: t,
          type: r.type,
          public: r.public,
          file_size_limit: r.fileSizeLimit,
          allowed_mime_types: r.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(e, t) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield st(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield M(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield gt(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  listBucketOptionsToQueryString(e) {
    const t = {};
    return e && ("limit" in e && (t.limit = String(e.limit)), "offset" in e && (t.offset = String(e.offset)), e.search && (t.search = e.search), e.sortColumn && (t.sortColumn = e.sortColumn), e.sortOrder && (t.sortOrder = e.sortOrder)), Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : "";
  }
}
class Ks {
  /**
   * Creates a new StorageAnalyticsApi instance
   * @param url - The base URL for the storage API
   * @param headers - HTTP headers to include in requests
   * @param fetch - Optional custom fetch implementation
   */
  constructor(e, t = {}, r) {
    this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Mr), t), this.fetch = ft(r);
  }
  /**
   * Enable throwing errors instead of returning them in the response
   * When enabled, failed operations will throw instead of returning { data: null, error }
   *
   * @returns This instance for method chaining
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Creates a new analytics bucket using Iceberg tables
   * Analytics buckets are optimized for analytical queries and data processing
   *
   * @param name A unique name for the bucket you are creating
   * @returns Promise with newly created bucket name or error
   *
   * @example
   * ```typescript
   * const { data, error } = await storage.analytics.createBucket('analytics-data')
   * if (error) {
   *   console.error('Failed to create analytics bucket:', error.message)
   * } else {
   *   console.log('Created bucket:', data.name)
   * }
   * ```
   */
  createBucket(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield M(this.fetch, `${this.url}/bucket`, { name: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Retrieves the details of all Analytics Storage buckets within an existing project
   * Only returns buckets of type 'ANALYTICS'
   *
   * @param options Query parameters for listing buckets
   * @param options.limit Maximum number of buckets to return
   * @param options.offset Number of buckets to skip
   * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
   * @param options.sortOrder Sort order ('asc' or 'desc')
   * @param options.search Search term to filter bucket names
   * @returns Promise with list of analytics buckets or error
   *
   * @example
   * ```typescript
   * const { data, error } = await storage.analytics.listBuckets({
   *   limit: 10,
   *   offset: 0,
   *   sortColumn: 'created_at',
   *   sortOrder: 'desc',
   *   search: 'analytics'
   * })
   * if (data) {
   *   console.log('Found analytics buckets:', data.length)
   *   data.forEach(bucket => console.log(`- ${bucket.name}`))
   * }
   * ```
   */
  listBuckets(e) {
    return b(this, void 0, void 0, function* () {
      try {
        const t = new URLSearchParams();
        (e == null ? void 0 : e.limit) !== void 0 && t.set("limit", e.limit.toString()), (e == null ? void 0 : e.offset) !== void 0 && t.set("offset", e.offset.toString()), e != null && e.sortColumn && t.set("sortColumn", e.sortColumn), e != null && e.sortOrder && t.set("sortOrder", e.sortOrder), e != null && e.search && t.set("search", e.search);
        const r = t.toString(), n = r ? `${this.url}/bucket?${r}` : `${this.url}/bucket`;
        return { data: yield ye(this.fetch, n, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes an existing analytics bucket
   * A bucket can't be deleted with existing objects inside it
   * You must first empty the bucket before deletion
   *
   * @param bucketId The unique identifier of the bucket you would like to delete
   * @returns Promise with success message or error
   *
   * @example
   * ```typescript
   * const { data, error } = await analyticsApi.deleteBucket('old-analytics-bucket')
   * if (error) {
   *   console.error('Failed to delete bucket:', error.message)
   * } else {
   *   console.log('Bucket deleted successfully:', data.message)
   * }
   * ```
   */
  deleteBucket(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield gt(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
const pt = {
  "X-Client-Info": `storage-js/${qr}`,
  "Content-Type": "application/json"
};
class Fr extends Error {
  constructor(e) {
    super(e), this.__isStorageVectorsError = !0, this.name = "StorageVectorsError";
  }
}
function x(s) {
  return typeof s == "object" && s !== null && "__isStorageVectorsError" in s;
}
class Ve extends Fr {
  constructor(e, t, r) {
    super(e), this.name = "StorageVectorsApiError", this.status = t, this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
class Hs extends Fr {
  constructor(e, t) {
    super(e), this.name = "StorageVectorsUnknownError", this.originalError = t;
  }
}
var $t;
(function(s) {
  s.InternalError = "InternalError", s.S3VectorConflictException = "S3VectorConflictException", s.S3VectorNotFoundException = "S3VectorNotFoundException", s.S3VectorBucketNotEmpty = "S3VectorBucketNotEmpty", s.S3VectorMaxBucketsExceeded = "S3VectorMaxBucketsExceeded", s.S3VectorMaxIndexesExceeded = "S3VectorMaxIndexesExceeded";
})($t || ($t = {}));
const _t = (s) => s ? (...e) => s(...e) : (...e) => fetch(...e), zs = (s) => {
  if (typeof s != "object" || s === null)
    return !1;
  const e = Object.getPrototypeOf(s);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, xt = (s) => s.msg || s.message || s.error_description || s.error || JSON.stringify(s), Js = (s, e, t) => b(void 0, void 0, void 0, function* () {
  if (s && typeof s == "object" && "status" in s && "ok" in s && typeof s.status == "number" && !(t != null && t.noResolveJson)) {
    const n = s.status || 500, i = s;
    if (typeof i.json == "function")
      i.json().then((o) => {
        const a = (o == null ? void 0 : o.statusCode) || (o == null ? void 0 : o.code) || n + "";
        e(new Ve(xt(o), n, a));
      }).catch(() => {
        const o = n + "", a = i.statusText || `HTTP ${n} error`;
        e(new Ve(a, n, o));
      });
    else {
      const o = n + "", a = i.statusText || `HTTP ${n} error`;
      e(new Ve(a, n, o));
    }
  } else
    e(new Hs(xt(s), s));
}), Gs = (s, e, t, r) => {
  const n = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
  return r ? (zs(r) ? (n.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), n.body = JSON.stringify(r)) : n.body = r, Object.assign(Object.assign({}, n), t)) : n;
};
function Ys(s, e, t, r, n, i) {
  return b(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      s(t, Gs(e, r, n, i)).then((l) => {
        if (!l.ok)
          throw l;
        if (r != null && r.noResolveJson)
          return l;
        const c = l.headers.get("content-type");
        return !c || !c.includes("application/json") ? {} : l.json();
      }).then((l) => o(l)).catch((l) => Js(l, a, r));
    });
  });
}
function U(s, e, t, r, n) {
  return b(this, void 0, void 0, function* () {
    return Ys(s, "POST", e, r, n, t);
  });
}
class Qs {
  constructor(e, t = {}, r) {
    this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, pt), t), this.fetch = _t(r);
  }
  /**
   * Enable throwing errors instead of returning them in the response
   * When enabled, failed operations will throw instead of returning { data: null, error }
   *
   * @returns This instance for method chaining
   * @example
   * ```typescript
   * const client = new VectorIndexApi(url, headers)
   * client.throwOnError()
   * const { data } = await client.createIndex(options) // throws on error
   * ```
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Creates a new vector index within a bucket
   * Defines the schema for vectors including dimensionality, distance metric, and metadata config
   *
   * @param options - Index configuration
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Unique name for the index within the bucket
   * @param options.dataType - Data type for vector components (currently only 'float32')
   * @param options.dimension - Dimensionality of vectors (e.g., 384, 768, 1536)
   * @param options.distanceMetric - Similarity metric ('cosine', 'euclidean', 'dotproduct')
   * @param options.metadataConfiguration - Optional config for non-filterable metadata keys
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorConflictException` if index already exists (HTTP 409)
   * - `S3VectorMaxIndexesExceeded` if quota exceeded (HTTP 400)
   * - `S3VectorNotFoundException` if bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.createIndex({
   *   vectorBucketName: 'embeddings-prod',
   *   indexName: 'documents-openai-small',
   *   dataType: 'float32',
   *   dimension: 1536,
   *   distanceMetric: 'cosine',
   *   metadataConfiguration: {
   *     nonFilterableMetadataKeys: ['raw_text', 'internal_id']
   *   }
   * })
   * ```
   */
  createIndex(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: (yield U(this.fetch, `${this.url}/CreateIndex`, e, {
          headers: this.headers
        })) || {}, error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Retrieves metadata for a specific vector index
   * Returns index configuration including dimension, distance metric, and metadata settings
   *
   * @param vectorBucketName - Name of the parent vector bucket
   * @param indexName - Name of the index to retrieve
   * @returns Promise with index metadata or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if index or bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.getIndex('embeddings-prod', 'documents-openai-small')
   * if (data) {
   *   console.log('Index dimension:', data.index.dimension)
   *   console.log('Distance metric:', data.index.distanceMetric)
   * }
   * ```
   */
  getIndex(e, t) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield U(this.fetch, `${this.url}/GetIndex`, { vectorBucketName: e, indexName: t }, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (x(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Lists vector indexes within a bucket with optional filtering and pagination
   * Supports prefix-based filtering and paginated results
   *
   * @param options - Listing options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.prefix - Filter indexes by name prefix
   * @param options.maxResults - Maximum results per page (default: 100)
   * @param options.nextToken - Pagination token from previous response
   * @returns Promise with list of indexes and pagination token
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // List all indexes in a bucket
   * const { data, error } = await client.listIndexes({
   *   vectorBucketName: 'embeddings-prod',
   *   prefix: 'documents-'
   * })
   * if (data) {
   *   console.log('Found indexes:', data.indexes.map(i => i.indexName))
   *   // Fetch next page if available
   *   if (data.nextToken) {
   *     const next = await client.listIndexes({
   *       vectorBucketName: 'embeddings-prod',
   *       nextToken: data.nextToken
   *     })
   *   }
   * }
   * ```
   */
  listIndexes(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield U(this.fetch, `${this.url}/ListIndexes`, e, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes a vector index and all its data
   * This operation removes the index schema and all vectors stored in the index
   *
   * @param vectorBucketName - Name of the parent vector bucket
   * @param indexName - Name of the index to delete
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if index or bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // Delete an index and all its vectors
   * const { error } = await client.deleteIndex('embeddings-prod', 'old-index')
   * if (!error) {
   *   console.log('Index deleted successfully')
   * }
   * ```
   */
  deleteIndex(e, t) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: (yield U(this.fetch, `${this.url}/DeleteIndex`, { vectorBucketName: e, indexName: t }, { headers: this.headers })) || {}, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (x(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
}
class Xs {
  constructor(e, t = {}, r) {
    this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, pt), t), this.fetch = _t(r);
  }
  /**
   * Enable throwing errors instead of returning them in the response
   * When enabled, failed operations will throw instead of returning { data: null, error }
   *
   * @returns This instance for method chaining
   * @example
   * ```typescript
   * const client = new VectorDataApi(url, headers)
   * client.throwOnError()
   * const { data } = await client.putVectors(options) // throws on error
   * ```
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Inserts or updates vectors in batch (upsert operation)
   * Accepts 1-500 vectors per request. Larger batches should be split
   *
   * @param options - Vector insertion options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Name of the target index
   * @param options.vectors - Array of vectors to insert/update (1-500 items)
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorConflictException` if duplicate key conflict occurs (HTTP 409)
   * - `S3VectorNotFoundException` if bucket or index doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.putVectors({
   *   vectorBucketName: 'embeddings-prod',
   *   indexName: 'documents-openai-small',
   *   vectors: [
   *     {
   *       key: 'doc-1',
   *       data: { float32: [0.1, 0.2, 0.3, ...] }, // 1536 dimensions
   *       metadata: { title: 'Introduction', page: 1 }
   *     },
   *     {
   *       key: 'doc-2',
   *       data: { float32: [0.4, 0.5, 0.6, ...] },
   *       metadata: { title: 'Conclusion', page: 42 }
   *     }
   *   ]
   * })
   * ```
   */
  putVectors(e) {
    return b(this, void 0, void 0, function* () {
      try {
        if (e.vectors.length < 1 || e.vectors.length > 500)
          throw new Error("Vector batch size must be between 1 and 500 items");
        return { data: (yield U(this.fetch, `${this.url}/PutVectors`, e, {
          headers: this.headers
        })) || {}, error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Retrieves vectors by their keys in batch
   * Optionally includes vector data and/or metadata in response
   * Additional permissions required when returning data or metadata
   *
   * @param options - Vector retrieval options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Name of the index
   * @param options.keys - Array of vector keys to retrieve
   * @param options.returnData - Whether to include vector embeddings (requires permission)
   * @param options.returnMetadata - Whether to include metadata (requires permission)
   * @returns Promise with array of vectors or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket or index doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.getVectors({
   *   vectorBucketName: 'embeddings-prod',
   *   indexName: 'documents-openai-small',
   *   keys: ['doc-1', 'doc-2', 'doc-3'],
   *   returnData: false,     // Don't return embeddings
   *   returnMetadata: true   // Return metadata only
   * })
   * if (data) {
   *   data.vectors.forEach(v => console.log(v.key, v.metadata))
   * }
   * ```
   */
  getVectors(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield U(this.fetch, `${this.url}/GetVectors`, e, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Lists/scans vectors in an index with pagination
   * Supports parallel scanning via segment configuration for high-throughput scenarios
   * Additional permissions required when returning data or metadata
   *
   * @param options - Vector listing options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Name of the index
   * @param options.maxResults - Maximum results per page (default: 500, max: 1000)
   * @param options.nextToken - Pagination token from previous response
   * @param options.returnData - Whether to include vector embeddings (requires permission)
   * @param options.returnMetadata - Whether to include metadata (requires permission)
   * @param options.segmentCount - Total parallel segments (1-16) for distributed scanning
   * @param options.segmentIndex - Zero-based segment index (0 to segmentCount-1)
   * @returns Promise with array of vectors, pagination token, or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket or index doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // Simple pagination
   * let nextToken: string | undefined
   * do {
   *   const { data, error } = await client.listVectors({
   *     vectorBucketName: 'embeddings-prod',
   *     indexName: 'documents-openai-small',
   *     maxResults: 500,
   *     nextToken,
   *     returnMetadata: true
   *   })
   *   if (error) break
   *   console.log('Batch:', data.vectors.length)
   *   nextToken = data.nextToken
   * } while (nextToken)
   *
   * // Parallel scanning (4 concurrent workers)
   * const workers = [0, 1, 2, 3].map(async (segmentIndex) => {
   *   const { data } = await client.listVectors({
   *     vectorBucketName: 'embeddings-prod',
   *     indexName: 'documents-openai-small',
   *     segmentCount: 4,
   *     segmentIndex,
   *     returnMetadata: true
   *   })
   *   return data?.vectors || []
   * })
   * const results = await Promise.all(workers)
   * ```
   */
  listVectors(e) {
    return b(this, void 0, void 0, function* () {
      try {
        if (e.segmentCount !== void 0) {
          if (e.segmentCount < 1 || e.segmentCount > 16)
            throw new Error("segmentCount must be between 1 and 16");
          if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
            throw new Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
        }
        return { data: yield U(this.fetch, `${this.url}/ListVectors`, e, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Queries for similar vectors using approximate nearest neighbor (ANN) search
   * Returns top-K most similar vectors based on the configured distance metric
   * Supports optional metadata filtering (requires GetVectors permission)
   *
   * @param options - Query options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Name of the index
   * @param options.queryVector - Query embedding to find similar vectors
   * @param options.topK - Number of nearest neighbors to return (default: 10)
   * @param options.filter - Optional JSON filter for metadata (requires GetVectors permission)
   * @param options.returnDistance - Whether to include similarity distances
   * @param options.returnMetadata - Whether to include metadata (requires GetVectors permission)
   * @returns Promise with array of similar vectors ordered by distance
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket or index doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // Semantic search with filtering
   * const { data, error } = await client.queryVectors({
   *   vectorBucketName: 'embeddings-prod',
   *   indexName: 'documents-openai-small',
   *   queryVector: { float32: [0.1, 0.2, 0.3, ...] }, // 1536 dimensions
   *   topK: 5,
   *   filter: {
   *     category: 'technical',
   *     published: true
   *   },
   *   returnDistance: true,
   *   returnMetadata: true
   * })
   * if (data) {
   *   data.matches.forEach(match => {
   *     console.log(`${match.key}: distance=${match.distance}`)
   *     console.log('Metadata:', match.metadata)
   *   })
   * }
   * ```
   */
  queryVectors(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield U(this.fetch, `${this.url}/QueryVectors`, e, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes vectors by their keys in batch
   * Accepts 1-500 keys per request
   *
   * @param options - Vector deletion options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Name of the index
   * @param options.keys - Array of vector keys to delete (1-500 items)
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket or index doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { error } = await client.deleteVectors({
   *   vectorBucketName: 'embeddings-prod',
   *   indexName: 'documents-openai-small',
   *   keys: ['doc-1', 'doc-2', 'doc-3']
   * })
   * if (!error) {
   *   console.log('Vectors deleted successfully')
   * }
   * ```
   */
  deleteVectors(e) {
    return b(this, void 0, void 0, function* () {
      try {
        if (e.keys.length < 1 || e.keys.length > 500)
          throw new Error("Keys batch size must be between 1 and 500 items");
        return { data: (yield U(this.fetch, `${this.url}/DeleteVectors`, e, {
          headers: this.headers
        })) || {}, error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
class Zs {
  /**
   * Creates a new VectorBucketApi instance
   * @param url - The base URL for the storage vectors API
   * @param headers - HTTP headers to include in requests
   * @param fetch - Optional custom fetch implementation
   */
  constructor(e, t = {}, r) {
    this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, pt), t), this.fetch = _t(r);
  }
  /**
   * Enable throwing errors instead of returning them in the response
   * When enabled, failed operations will throw instead of returning { data: null, error }
   *
   * @returns This instance for method chaining
   * @example
   * ```typescript
   * const client = new VectorBucketApi(url, headers)
   * client.throwOnError()
   * const { data } = await client.createBucket('my-bucket') // throws on error
   * ```
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Creates a new vector bucket
   * Vector buckets are containers for vector indexes and their data
   *
   * @param vectorBucketName - Unique name for the vector bucket
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorConflictException` if bucket already exists (HTTP 409)
   * - `S3VectorMaxBucketsExceeded` if quota exceeded (HTTP 400)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.createBucket('embeddings-prod')
   * if (error) {
   *   console.error('Failed to create bucket:', error.message)
   * }
   * ```
   */
  createBucket(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: (yield U(this.fetch, `${this.url}/CreateVectorBucket`, { vectorBucketName: e }, { headers: this.headers })) || {}, error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Retrieves metadata for a specific vector bucket
   * Returns bucket configuration including encryption settings and creation time
   *
   * @param vectorBucketName - Name of the vector bucket to retrieve
   * @returns Promise with bucket metadata or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.getBucket('embeddings-prod')
   * if (data) {
   *   console.log('Bucket created at:', new Date(data.vectorBucket.creationTime! * 1000))
   * }
   * ```
   */
  getBucket(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: yield U(this.fetch, `${this.url}/GetVectorBucket`, { vectorBucketName: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Lists vector buckets with optional filtering and pagination
   * Supports prefix-based filtering and paginated results
   *
   * @param options - Listing options
   * @param options.prefix - Filter buckets by name prefix
   * @param options.maxResults - Maximum results per page (default: 100)
   * @param options.nextToken - Pagination token from previous response
   * @returns Promise with list of buckets and pagination token
   *
   * @throws {StorageVectorsApiError} With code:
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // List all buckets with prefix 'prod-'
   * const { data, error } = await client.listBuckets({ prefix: 'prod-' })
   * if (data) {
   *   console.log('Found buckets:', data.buckets.length)
   *   // Fetch next page if available
   *   if (data.nextToken) {
   *     const next = await client.listBuckets({ nextToken: data.nextToken })
   *   }
   * }
   * ```
   */
  listBuckets() {
    return b(this, arguments, void 0, function* (e = {}) {
      try {
        return { data: yield U(this.fetch, `${this.url}/ListVectorBuckets`, e, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes a vector bucket
   * Bucket must be empty before deletion (all indexes must be removed first)
   *
   * @param vectorBucketName - Name of the vector bucket to delete
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorBucketNotEmpty` if bucket contains indexes (HTTP 400)
   * - `S3VectorNotFoundException` if bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // Delete all indexes first, then delete bucket
   * const { error } = await client.deleteBucket('old-bucket')
   * if (error?.statusCode === 'S3VectorBucketNotEmpty') {
   *   console.error('Must delete all indexes first')
   * }
   * ```
   */
  deleteBucket(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return { data: (yield U(this.fetch, `${this.url}/DeleteVectorBucket`, { vectorBucketName: e }, { headers: this.headers })) || {}, error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
class en extends Zs {
  constructor(e, t = {}) {
    super(e, t.headers || {}, t.fetch);
  }
  /**
   * Access operations for a specific vector bucket
   * Returns a scoped client for index and vector operations within the bucket
   *
   * @param vectorBucketName - Name of the vector bucket
   * @returns Bucket-scoped client with index and vector operations
   *
   * @example
   * ```typescript
   * const bucket = client.bucket('embeddings-prod')
   *
   * // Create an index in this bucket
   * await bucket.createIndex({
   *   indexName: 'documents-openai',
   *   dataType: 'float32',
   *   dimension: 1536,
   *   distanceMetric: 'cosine'
   * })
   *
   * // List indexes in this bucket
   * const { data } = await bucket.listIndexes()
   * ```
   */
  from(e) {
    return new tn(this.url, this.headers, e, this.fetch);
  }
}
class tn extends Qs {
  constructor(e, t, r, n) {
    super(e, t, n), this.vectorBucketName = r;
  }
  /**
   * Creates a new vector index in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * @param options - Index configuration (vectorBucketName is automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const bucket = client.bucket('embeddings-prod')
   * await bucket.createIndex({
   *   indexName: 'documents-openai',
   *   dataType: 'float32',
   *   dimension: 1536,
   *   distanceMetric: 'cosine',
   *   metadataConfiguration: {
   *     nonFilterableMetadataKeys: ['raw_text']
   *   }
   * })
   * ```
   */
  createIndex(e) {
    const t = Object.create(null, {
      createIndex: { get: () => super.createIndex }
    });
    return b(this, void 0, void 0, function* () {
      return t.createIndex.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName }));
    });
  }
  /**
   * Lists indexes in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * @param options - Listing options (vectorBucketName is automatically set)
   * @returns Promise with list of indexes or error
   *
   * @example
   * ```typescript
   * const bucket = client.bucket('embeddings-prod')
   * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
   * ```
   */
  listIndexes() {
    const e = Object.create(null, {
      listIndexes: { get: () => super.listIndexes }
    });
    return b(this, arguments, void 0, function* (t = {}) {
      return e.listIndexes.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName }));
    });
  }
  /**
   * Retrieves metadata for a specific index in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * @param indexName - Name of the index to retrieve
   * @returns Promise with index metadata or error
   *
   * @example
   * ```typescript
   * const bucket = client.bucket('embeddings-prod')
   * const { data } = await bucket.getIndex('documents-openai')
   * console.log('Dimension:', data?.index.dimension)
   * ```
   */
  getIndex(e) {
    const t = Object.create(null, {
      getIndex: { get: () => super.getIndex }
    });
    return b(this, void 0, void 0, function* () {
      return t.getIndex.call(this, this.vectorBucketName, e);
    });
  }
  /**
   * Deletes an index from this bucket
   * Convenience method that automatically includes the bucket name
   *
   * @param indexName - Name of the index to delete
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const bucket = client.bucket('embeddings-prod')
   * await bucket.deleteIndex('old-index')
   * ```
   */
  deleteIndex(e) {
    const t = Object.create(null, {
      deleteIndex: { get: () => super.deleteIndex }
    });
    return b(this, void 0, void 0, function* () {
      return t.deleteIndex.call(this, this.vectorBucketName, e);
    });
  }
  /**
   * Access operations for a specific index within this bucket
   * Returns a scoped client for vector data operations
   *
   * @param indexName - Name of the index
   * @returns Index-scoped client with vector data operations
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
   *
   * // Insert vectors
   * await index.putVectors({
   *   vectors: [
   *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
   *   ]
   * })
   *
   * // Query similar vectors
   * const { data } = await index.queryVectors({
   *   queryVector: { float32: [...] },
   *   topK: 5
   * })
   * ```
   */
  index(e) {
    return new rn(this.url, this.headers, this.vectorBucketName, e, this.fetch);
  }
}
class rn extends Xs {
  constructor(e, t, r, n, i) {
    super(e, t, i), this.vectorBucketName = r, this.indexName = n;
  }
  /**
   * Inserts or updates vectors in this index
   * Convenience method that automatically includes bucket and index names
   *
   * @param options - Vector insertion options (bucket and index names automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
   * await index.putVectors({
   *   vectors: [
   *     {
   *       key: 'doc-1',
   *       data: { float32: [0.1, 0.2, ...] },
   *       metadata: { title: 'Introduction', page: 1 }
   *     }
   *   ]
   * })
   * ```
   */
  putVectors(e) {
    const t = Object.create(null, {
      putVectors: { get: () => super.putVectors }
    });
    return b(this, void 0, void 0, function* () {
      return t.putVectors.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   * Retrieves vectors by keys from this index
   * Convenience method that automatically includes bucket and index names
   *
   * @param options - Vector retrieval options (bucket and index names automatically set)
   * @returns Promise with array of vectors or error
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
   * const { data } = await index.getVectors({
   *   keys: ['doc-1', 'doc-2'],
   *   returnMetadata: true
   * })
   * ```
   */
  getVectors(e) {
    const t = Object.create(null, {
      getVectors: { get: () => super.getVectors }
    });
    return b(this, void 0, void 0, function* () {
      return t.getVectors.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   * Lists vectors in this index with pagination
   * Convenience method that automatically includes bucket and index names
   *
   * @param options - Listing options (bucket and index names automatically set)
   * @returns Promise with array of vectors and pagination token
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
   * const { data } = await index.listVectors({
   *   maxResults: 500,
   *   returnMetadata: true
   * })
   * ```
   */
  listVectors() {
    const e = Object.create(null, {
      listVectors: { get: () => super.listVectors }
    });
    return b(this, arguments, void 0, function* (t = {}) {
      return e.listVectors.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   * Queries for similar vectors in this index
   * Convenience method that automatically includes bucket and index names
   *
   * @param options - Query options (bucket and index names automatically set)
   * @returns Promise with array of similar vectors ordered by distance
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
   * const { data } = await index.queryVectors({
   *   queryVector: { float32: [0.1, 0.2, ...] },
   *   topK: 5,
   *   filter: { category: 'technical' },
   *   returnDistance: true,
   *   returnMetadata: true
   * })
   * ```
   */
  queryVectors(e) {
    const t = Object.create(null, {
      queryVectors: { get: () => super.queryVectors }
    });
    return b(this, void 0, void 0, function* () {
      return t.queryVectors.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   * Deletes vectors by keys from this index
   * Convenience method that automatically includes bucket and index names
   *
   * @param options - Deletion options (bucket and index names automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
   * await index.deleteVectors({
   *   keys: ['doc-1', 'doc-2', 'doc-3']
   * })
   * ```
   */
  deleteVectors(e) {
    const t = Object.create(null, {
      deleteVectors: { get: () => super.deleteVectors }
    });
    return b(this, void 0, void 0, function* () {
      return t.deleteVectors.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
}
class sn extends Ws {
  constructor(e, t = {}, r, n) {
    super(e, t, r, n);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new Vs(this.url, this.headers, e, this.fetch);
  }
  /**
   * Access vector storage operations.
   *
   * @returns A StorageVectorsClient instance configured with the current storage settings.
   */
  get vectors() {
    return new en(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
   * Access analytics storage operations using Iceberg tables.
   *
   * @returns A StorageAnalyticsApi instance configured with the current storage settings.
   * @example
   * ```typescript
   * const client = createClient(url, key)
   * const analytics = client.storage.analytics
   *
   * // Create an analytics bucket
   * await analytics.createBucket('my-analytics-bucket')
   *
   * // List all analytics buckets
   * const { data: buckets } = await analytics.listBuckets()
   *
   * // Delete an analytics bucket
   * await analytics.deleteBucket('old-analytics-bucket')
   * ```
   */
  get analytics() {
    return new Ks(this.url + "/iceberg", this.headers, this.fetch);
  }
}
const nn = "2.81.1";
let pe = "";
typeof Deno < "u" ? pe = "deno" : typeof document < "u" ? pe = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? pe = "react-native" : pe = "node";
const on = { "X-Client-Info": `supabase-js-${pe}/${nn}` }, an = {
  headers: on
}, ln = {
  schema: "public"
}, cn = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, un = {}, hn = (s) => s ? (...e) => s(...e) : (...e) => fetch(...e), dn = () => Headers, fn = (s, e, t) => {
  const r = hn(t), n = dn();
  return async (i, o) => {
    var a;
    const l = (a = await e()) !== null && a !== void 0 ? a : s;
    let c = new n(o == null ? void 0 : o.headers);
    return c.has("apikey") || c.set("apikey", s), c.has("Authorization") || c.set("Authorization", `Bearer ${l}`), r(i, Object.assign(Object.assign({}, o), { headers: c }));
  };
};
function gn(s) {
  return s.endsWith("/") ? s : s + "/";
}
function pn(s, e) {
  var t, r;
  const { db: n, auth: i, realtime: o, global: a } = s, { db: l, auth: c, realtime: u, global: f } = e, h = {
    db: Object.assign(Object.assign({}, l), n),
    auth: Object.assign(Object.assign({}, c), i),
    realtime: Object.assign(Object.assign({}, u), o),
    storage: {},
    global: Object.assign(Object.assign(Object.assign({}, f), a), { headers: Object.assign(Object.assign({}, (t = f == null ? void 0 : f.headers) !== null && t !== void 0 ? t : {}), (r = a == null ? void 0 : a.headers) !== null && r !== void 0 ? r : {}) }),
    accessToken: async () => ""
  };
  return s.accessToken ? h.accessToken = s.accessToken : delete h.accessToken, h;
}
function _n(s) {
  const e = s == null ? void 0 : s.trim();
  if (!e)
    throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(gn(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
const Vr = "2.81.1", ae = 30 * 1e3, nt = 3, We = nt * ae, vn = "http://localhost:9999", yn = "supabase.auth.token", wn = { "X-Client-Info": `gotrue-js/${Vr}` }, it = "X-Supabase-Api-Version", Wr = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, bn = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, mn = 10 * 60 * 1e3;
class we extends Error {
  constructor(e, t, r) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = r;
  }
}
function m(s) {
  return typeof s == "object" && s !== null && "__isAuthError" in s;
}
class En extends we {
  constructor(e, t, r) {
    super(e, t, r), this.name = "AuthApiError", this.status = t, this.code = r;
  }
}
function Sn(s) {
  return m(s) && s.name === "AuthApiError";
}
class ee extends we {
  constructor(e, t) {
    super(e), this.name = "AuthUnknownError", this.originalError = t;
  }
}
class J extends we {
  constructor(e, t, r, n) {
    super(e, r, n), this.name = t, this.status = r;
  }
}
class B extends J {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function kn(s) {
  return m(s) && s.name === "AuthSessionMissingError";
}
class re extends J {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class je extends J {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Pe extends J {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function On(s) {
  return m(s) && s.name === "AuthImplicitGrantRedirectError";
}
class Ut extends J {
  constructor(e, t = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class ot extends J {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, void 0);
  }
}
function Ke(s) {
  return m(s) && s.name === "AuthRetryableFetchError";
}
class Nt extends J {
  constructor(e, t, r) {
    super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = r;
  }
}
class at extends J {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const xe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Dt = ` 	
\r=`.split(""), Tn = (() => {
  const s = new Array(128);
  for (let e = 0; e < s.length; e += 1)
    s[e] = -1;
  for (let e = 0; e < Dt.length; e += 1)
    s[Dt[e].charCodeAt(0)] = -2;
  for (let e = 0; e < xe.length; e += 1)
    s[xe[e].charCodeAt(0)] = e;
  return s;
})();
function Lt(s, e, t) {
  if (s !== null)
    for (e.queue = e.queue << 8 | s, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const r = e.queue >> e.queuedBits - 6 & 63;
      t(xe[r]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const r = e.queue >> e.queuedBits - 6 & 63;
      t(xe[r]), e.queuedBits -= 6;
    }
}
function Kr(s, e, t) {
  const r = Tn[s];
  if (r > -1)
    for (e.queue = e.queue << 6 | r, e.queuedBits += 6; e.queuedBits >= 8; )
      t(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (r === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`);
  }
}
function Bt(s) {
  const e = [], t = (o) => {
    e.push(String.fromCodePoint(o));
  }, r = {
    utf8seq: 0,
    codepoint: 0
  }, n = { queue: 0, queuedBits: 0 }, i = (o) => {
    jn(o, r, t);
  };
  for (let o = 0; o < s.length; o += 1)
    Kr(s.charCodeAt(o), n, i);
  return e.join("");
}
function An(s, e) {
  if (s <= 127) {
    e(s);
    return;
  } else if (s <= 2047) {
    e(192 | s >> 6), e(128 | s & 63);
    return;
  } else if (s <= 65535) {
    e(224 | s >> 12), e(128 | s >> 6 & 63), e(128 | s & 63);
    return;
  } else if (s <= 1114111) {
    e(240 | s >> 18), e(128 | s >> 12 & 63), e(128 | s >> 6 & 63), e(128 | s & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${s.toString(16)}`);
}
function Rn(s, e) {
  for (let t = 0; t < s.length; t += 1) {
    let r = s.charCodeAt(t);
    if (r > 55295 && r <= 56319) {
      const n = (r - 55296) * 1024 & 65535;
      r = (s.charCodeAt(t + 1) - 56320 & 65535 | n) + 65536, t += 1;
    }
    An(r, e);
  }
}
function jn(s, e, t) {
  if (e.utf8seq === 0) {
    if (s <= 127) {
      t(s);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if (!(s >> 7 - r & 1)) {
        e.utf8seq = r;
        break;
      }
    if (e.utf8seq === 2)
      e.codepoint = s & 31;
    else if (e.utf8seq === 3)
      e.codepoint = s & 15;
    else if (e.utf8seq === 4)
      e.codepoint = s & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (s <= 127)
      throw new Error("Invalid UTF-8 sequence");
    e.codepoint = e.codepoint << 6 | s & 63, e.utf8seq -= 1, e.utf8seq === 0 && t(e.codepoint);
  }
}
function ce(s) {
  const e = [], t = { queue: 0, queuedBits: 0 }, r = (n) => {
    e.push(n);
  };
  for (let n = 0; n < s.length; n += 1)
    Kr(s.charCodeAt(n), t, r);
  return new Uint8Array(e);
}
function Pn(s) {
  const e = [];
  return Rn(s, (t) => e.push(t)), new Uint8Array(e);
}
function te(s) {
  const e = [], t = { queue: 0, queuedBits: 0 }, r = (n) => {
    e.push(n);
  };
  return s.forEach((n) => Lt(n, t, r)), Lt(null, t, r), e.join("");
}
function Cn(s) {
  return Math.round(Date.now() / 1e3) + s;
}
function In() {
  return Symbol("auth-callback");
}
const I = () => typeof window < "u" && typeof document < "u", G = {
  tested: !1,
  writable: !1
}, Hr = () => {
  if (!I())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (G.tested)
    return G.writable;
  const s = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(s, s), globalThis.localStorage.removeItem(s), G.tested = !0, G.writable = !0;
  } catch {
    G.tested = !0, G.writable = !1;
  }
  return G.writable;
};
function $n(s) {
  const e = {}, t = new URL(s);
  if (t.hash && t.hash[0] === "#")
    try {
      new URLSearchParams(t.hash.substring(1)).forEach((n, i) => {
        e[i] = n;
      });
    } catch {
    }
  return t.searchParams.forEach((r, n) => {
    e[n] = r;
  }), e;
}
const zr = (s) => s ? (...e) => s(...e) : (...e) => fetch(...e), xn = (s) => typeof s == "object" && s !== null && "status" in s && "ok" in s && "json" in s && typeof s.json == "function", le = async (s, e, t) => {
  await s.setItem(e, JSON.stringify(t));
}, Y = async (s, e) => {
  const t = await s.getItem(e);
  if (!t)
    return null;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}, H = async (s, e) => {
  await s.removeItem(e);
};
class Le {
  constructor() {
    this.promise = new Le.promiseConstructor((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
Le.promiseConstructor = Promise;
function He(s) {
  const e = s.split(".");
  if (e.length !== 3)
    throw new at("Invalid JWT structure");
  for (let r = 0; r < e.length; r++)
    if (!bn.test(e[r]))
      throw new at("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Bt(e[0])),
    payload: JSON.parse(Bt(e[1])),
    signature: ce(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function Un(s) {
  return await new Promise((e) => {
    setTimeout(() => e(null), s);
  });
}
function Nn(s, e) {
  return new Promise((r, n) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await s(i);
          if (!e(i, null, o)) {
            r(o);
            return;
          }
        } catch (o) {
          if (!e(i, o)) {
            n(o);
            return;
          }
        }
    })();
  });
}
function Dn(s) {
  return ("0" + s.toString(16)).substr(-2);
}
function Ln() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = t.length;
    let n = "";
    for (let i = 0; i < 56; i++)
      n += t.charAt(Math.floor(Math.random() * r));
    return n;
  }
  return crypto.getRandomValues(e), Array.from(e, Dn).join("");
}
async function Bn(s) {
  const t = new TextEncoder().encode(s), r = await crypto.subtle.digest("SHA-256", t), n = new Uint8Array(r);
  return Array.from(n).map((i) => String.fromCharCode(i)).join("");
}
async function qn(s) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), s;
  const t = await Bn(s);
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function se(s, e, t = !1) {
  const r = Ln();
  let n = r;
  t && (n += "/PASSWORD_RECOVERY"), await le(s, `${e}-code-verifier`, n);
  const i = await qn(r);
  return [i, r === i ? "plain" : "s256"];
}
const Mn = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Fn(s) {
  const e = s.headers.get(it);
  if (!e || !e.match(Mn))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Vn(s) {
  if (!s)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (s <= e)
    throw new Error("JWT has expired");
}
function Wn(s) {
  switch (s) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const Kn = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function ne(s) {
  if (!Kn.test(s))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function ze() {
  const s = {};
  return new Proxy(s, {
    get: (e, t) => {
      if (t === "__isUserNotAvailableProxy")
        return !0;
      if (typeof t == "symbol") {
        const r = t.toString();
        if (r === "Symbol(Symbol.toPrimitive)" || r === "Symbol(Symbol.toStringTag)" || r === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e, t) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e, t) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function Hn(s, e) {
  return new Proxy(s, {
    get: (t, r, n) => {
      if (r === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof r == "symbol") {
        const i = r.toString();
        if (i === "Symbol(Symbol.toPrimitive)" || i === "Symbol(Symbol.toStringTag)" || i === "Symbol(util.inspect.custom)" || i === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(t, r, n);
      }
      return !e.value && typeof r == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), e.value = !0), Reflect.get(t, r, n);
    }
  });
}
function qt(s) {
  return JSON.parse(JSON.stringify(s));
}
const Q = (s) => s.msg || s.message || s.error_description || s.error || JSON.stringify(s), zn = [502, 503, 504];
async function Mt(s) {
  var e;
  if (!xn(s))
    throw new ot(Q(s), 0);
  if (zn.includes(s.status))
    throw new ot(Q(s), s.status);
  let t;
  try {
    t = await s.json();
  } catch (i) {
    throw new ee(Q(i), i);
  }
  let r;
  const n = Fn(s);
  if (n && n.getTime() >= Wr["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? r = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (r = t.error_code), r) {
    if (r === "weak_password")
      throw new Nt(Q(t), s.status, ((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (r === "session_not_found")
      throw new B();
  } else if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0))
    throw new Nt(Q(t), s.status, t.weak_password.reasons);
  throw new En(Q(t), s.status || 500, r);
}
const Jn = (s, e, t, r) => {
  const n = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
  return s === "GET" ? n : (n.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), n.body = JSON.stringify(r), Object.assign(Object.assign({}, n), t));
};
async function E(s, e, t, r) {
  var n;
  const i = Object.assign({}, r == null ? void 0 : r.headers);
  i[it] || (i[it] = Wr["2024-01-01"].name), r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
  const o = (n = r == null ? void 0 : r.query) !== null && n !== void 0 ? n : {};
  r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
  const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "", l = await Gn(s, e, t + a, {
    headers: i,
    noResolveJson: r == null ? void 0 : r.noResolveJson
  }, {}, r == null ? void 0 : r.body);
  return r != null && r.xform ? r == null ? void 0 : r.xform(l) : { data: Object.assign({}, l), error: null };
}
async function Gn(s, e, t, r, n, i) {
  const o = Jn(e, r, n, i);
  let a;
  try {
    a = await s(t, Object.assign({}, o));
  } catch (l) {
    throw console.error(l), new ot(Q(l), 0);
  }
  if (a.ok || await Mt(a), r != null && r.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (l) {
    await Mt(l);
  }
}
function q(s) {
  var e;
  let t = null;
  Xn(s) && (t = Object.assign({}, s), s.expires_at || (t.expires_at = Cn(s.expires_in)));
  const r = (e = s.user) !== null && e !== void 0 ? e : s;
  return { data: { session: t, user: r }, error: null };
}
function Ft(s) {
  const e = q(s);
  return !e.error && s.weak_password && typeof s.weak_password == "object" && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.message && typeof s.weak_password.message == "string" && s.weak_password.reasons.reduce((t, r) => t && typeof r == "string", !0) && (e.data.weak_password = s.weak_password), e;
}
function z(s) {
  var e;
  return { data: { user: (e = s.user) !== null && e !== void 0 ? e : s }, error: null };
}
function Yn(s) {
  return { data: s, error: null };
}
function Qn(s) {
  const { action_link: e, email_otp: t, hashed_token: r, redirect_to: n, verification_type: i } = s, o = he(s, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
    action_link: e,
    email_otp: t,
    hashed_token: r,
    redirect_to: n,
    verification_type: i
  }, l = Object.assign({}, o);
  return {
    data: {
      properties: a,
      user: l
    },
    error: null
  };
}
function Vt(s) {
  return s;
}
function Xn(s) {
  return s.access_token && s.refresh_token && s.expires_in;
}
const Je = ["global", "local", "others"];
class Zn {
  constructor({ url: e = "", headers: t = {}, fetch: r }) {
    this.url = e, this.headers = t, this.fetch = zr(r), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, t = Je[0]) {
    if (Je.indexOf(t) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Je.join(", ")}`);
    try {
      return await E(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (m(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(e, t = {}) {
    try {
      return await E(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: t.data },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: z
      });
    } catch (r) {
      if (m(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(e) {
    try {
      const { options: t } = e, r = he(e, ["options"]), n = Object.assign(Object.assign({}, r), t);
      return "newEmail" in r && (n.new_email = r == null ? void 0 : r.newEmail, delete n.newEmail), await E(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: n,
        headers: this.headers,
        xform: Qn,
        redirectTo: t == null ? void 0 : t.redirectTo
      });
    } catch (t) {
      if (m(t))
        return {
          data: {
            properties: null,
            user: null
          },
          error: t
        };
      throw t;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(e) {
    try {
      return await E(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: z
      });
    } catch (t) {
      if (m(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(e) {
    var t, r, n, i, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await E(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (t = e == null ? void 0 : e.page) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "",
          per_page: (i = (n = e == null ? void 0 : e.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Vt
      });
      if (u.error)
        throw u.error;
      const f = await u.json(), h = (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, d = (l = (a = u.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((g) => {
        const p = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)), _ = JSON.parse(g.split(";")[1].split("=")[1]);
        c[`${_}Page`] = p;
      }), c.total = parseInt(h)), { data: Object.assign(Object.assign({}, f), c), error: null };
    } catch (c) {
      if (m(c))
        return { data: { users: [] }, error: c };
      throw c;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(e) {
    ne(e);
    try {
      return await E(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: z
      });
    } catch (t) {
      if (m(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(e, t) {
    ne(e);
    try {
      return await E(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: z
      });
    } catch (r) {
      if (m(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(e, t = !1) {
    ne(e);
    try {
      return await E(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: t
        },
        xform: z
      });
    } catch (r) {
      if (m(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    ne(e.userId);
    try {
      const { data: t, error: r } = await E(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (n) => ({ data: { factors: n }, error: null })
      });
      return { data: t, error: r };
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _deleteFactor(e) {
    ne(e.userId), ne(e.id);
    try {
      return { data: await E(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(e) {
    var t, r, n, i, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await E(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (t = e == null ? void 0 : e.page) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "",
          per_page: (i = (n = e == null ? void 0 : e.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Vt
      });
      if (u.error)
        throw u.error;
      const f = await u.json(), h = (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, d = (l = (a = u.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((g) => {
        const p = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)), _ = JSON.parse(g.split(";")[1].split("=")[1]);
        c[`${_}Page`] = p;
      }), c.total = parseInt(h)), { data: Object.assign(Object.assign({}, f), c), error: null };
    } catch (c) {
      if (m(c))
        return { data: { clients: [] }, error: c };
      throw c;
    }
  }
  /**
   * Creates a new OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createOAuthClient(e) {
    try {
      return await E(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(e) {
    try {
      return await E(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Updates an existing OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateOAuthClient(e, t) {
    try {
      return await E(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (m(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(e) {
    try {
      return await E(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(e) {
    try {
      return await E(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
}
function Wt(s = {}) {
  return {
    getItem: (e) => s[e] || null,
    setItem: (e, t) => {
      s[e] = t;
    },
    removeItem: (e) => {
      delete s[e];
    }
  };
}
const ie = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Hr() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Jr extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class ei extends Jr {
}
async function ti(s, e, t) {
  ie.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", s, e);
  const r = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    r.abort(), ie.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", s);
  }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(s, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: r.signal
  }, async (n) => {
    if (n) {
      ie.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", s, n.name);
      try {
        return await t();
      } finally {
        ie.debug && console.log("@supabase/gotrue-js: navigatorLock: released", s, n.name);
      }
    } else {
      if (e === 0)
        throw ie.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", s), new ei(`Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`);
      if (ie.debug)
        try {
          const i = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "));
        } catch (i) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await t();
    }
  }));
}
function ri() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function Gr(s) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(s))
    throw new Error(`@supabase/auth-js: Address "${s}" is invalid.`);
  return s.toLowerCase();
}
function si(s) {
  return parseInt(s, 16);
}
function ni(s) {
  const e = new TextEncoder().encode(s);
  return "0x" + Array.from(e, (r) => r.toString(16).padStart(2, "0")).join("");
}
function ii(s) {
  var e;
  const { chainId: t, domain: r, expirationTime: n, issuedAt: i = /* @__PURE__ */ new Date(), nonce: o, notBefore: a, requestId: l, resources: c, scheme: u, uri: f, version: h } = s;
  {
    if (!Number.isInteger(t))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);
    if (!r)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (o && o.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
    if (!f)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (h !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${h}`);
    if (!((e = s.statement) === null || e === void 0) && e.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${s.statement}`);
  }
  const d = Gr(s.address), g = u ? `${u}://${r}` : r, p = s.statement ? `${s.statement}
` : "", _ = `${g} wants you to sign in with your Ethereum account:
${d}

${p}`;
  let y = `URI: ${f}
Version: ${h}
Chain ID: ${t}${o ? `
Nonce: ${o}` : ""}
Issued At: ${i.toISOString()}`;
  if (n && (y += `
Expiration Time: ${n.toISOString()}`), a && (y += `
Not Before: ${a.toISOString()}`), l && (y += `
Request ID: ${l}`), c) {
    let w = `
Resources:`;
    for (const v of c) {
      if (!v || typeof v != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`);
      w += `
- ${v}`;
    }
    y += w;
  }
  return `${_}
${y}`;
}
class j extends Error {
  constructor({ message: e, code: t, cause: r, name: n }) {
    var i;
    super(e, { cause: r }), this.__isWebAuthnError = !0, this.name = (i = n ?? (r instanceof Error ? r.name : void 0)) !== null && i !== void 0 ? i : "Unknown Error", this.code = t;
  }
}
class Ue extends j {
  constructor(e, t) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: t,
      message: e
    }), this.name = "WebAuthnUnknownError", this.originalError = t;
  }
}
function oi({ error: s, options: e }) {
  var t, r, n;
  const { publicKey: i } = e;
  if (!i)
    throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new j({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s
      });
  } else if (s.name === "ConstraintError") {
    if (((t = i.authenticatorSelection) === null || t === void 0 ? void 0 : t.requireResidentKey) === !0)
      return new j({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: s
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      e.mediation === "conditional" && ((r = i.authenticatorSelection) === null || r === void 0 ? void 0 : r.userVerification) === "required"
    )
      return new j({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: s
      });
    if (((n = i.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required")
      return new j({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: s
      });
  } else {
    if (s.name === "InvalidStateError")
      return new j({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: s
      });
    if (s.name === "NotAllowedError")
      return new j({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s
      });
    if (s.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((a) => a.type === "public-key").length === 0 ? new j({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: s
      }) : new j({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: s
      });
    if (s.name === "SecurityError") {
      const o = window.location.hostname;
      if (Yr(o)) {
        if (i.rp.id !== o)
          return new j({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s
          });
      } else return new j({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: s
      });
    } else if (s.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new j({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: s
        });
    } else if (s.name === "UnknownError")
      return new j({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s
      });
  }
  return new j({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s
  });
}
function ai({ error: s, options: e }) {
  const { publicKey: t } = e;
  if (!t)
    throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new j({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s
      });
  } else {
    if (s.name === "NotAllowedError")
      return new j({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s
      });
    if (s.name === "SecurityError") {
      const r = window.location.hostname;
      if (Yr(r)) {
        if (t.rpId !== r)
          return new j({
            message: `The RP ID "${t.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s
          });
      } else return new j({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: s
      });
    } else if (s.name === "UnknownError")
      return new j({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s
      });
  }
  return new j({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s
  });
}
class li {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const t = new Error("Cancelling existing WebAuthn API call for new one");
      t.name = "AbortError", this.controller.abort(t);
    }
    const e = new AbortController();
    return this.controller = e, e.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      e.name = "AbortError", this.controller.abort(e), this.controller = void 0;
    }
  }
}
const ci = new li();
function ui(s) {
  if (!s)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      s
    );
  const { challenge: e, user: t, excludeCredentials: r } = s, n = he(
    s,
    ["challenge", "user", "excludeCredentials"]
  ), i = ce(e).buffer, o = Object.assign(Object.assign({}, t), { id: ce(t.id).buffer }), a = Object.assign(Object.assign({}, n), {
    challenge: i,
    user: o
  });
  if (r && r.length > 0) {
    a.excludeCredentials = new Array(r.length);
    for (let l = 0; l < r.length; l++) {
      const c = r[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, c), {
        id: ce(c.id).buffer,
        type: c.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: c.transports
      });
    }
  }
  return a;
}
function hi(s) {
  if (!s)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(s);
  const { challenge: e, allowCredentials: t } = s, r = he(
    s,
    ["challenge", "allowCredentials"]
  ), n = ce(e).buffer, i = Object.assign(Object.assign({}, r), { challenge: n });
  if (t && t.length > 0) {
    i.allowCredentials = new Array(t.length);
    for (let o = 0; o < t.length; o++) {
      const a = t[o];
      i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: ce(a.id).buffer,
        type: a.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: a.transports
      });
    }
  }
  return i;
}
function di(s) {
  var e;
  if ("toJSON" in s && typeof s.toJSON == "function")
    return s.toJSON();
  const t = s;
  return {
    id: s.id,
    rawId: s.id,
    response: {
      attestationObject: te(new Uint8Array(s.response.attestationObject)),
      clientDataJSON: te(new Uint8Array(s.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: s.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = t.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function fi(s) {
  var e;
  if ("toJSON" in s && typeof s.toJSON == "function")
    return s.toJSON();
  const t = s, r = s.getClientExtensionResults(), n = s.response;
  return {
    id: s.id,
    rawId: s.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: te(new Uint8Array(n.authenticatorData)),
      clientDataJSON: te(new Uint8Array(n.clientDataJSON)),
      signature: te(new Uint8Array(n.signature)),
      userHandle: n.userHandle ? te(new Uint8Array(n.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: r,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = t.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function Yr(s) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    s === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(s)
  );
}
function Kt() {
  var s, e;
  return !!(I() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((s = navigator == null ? void 0 : navigator.credentials) === null || s === void 0 ? void 0 : s.create) == "function" && typeof ((e = navigator == null ? void 0 : navigator.credentials) === null || e === void 0 ? void 0 : e.get) == "function");
}
async function gi(s) {
  try {
    const e = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      s
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new Ue("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new Ue("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: oi({
        error: e,
        options: s
      })
    };
  }
}
async function pi(s) {
  try {
    const e = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      s
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new Ue("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new Ue("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: ai({
        error: e,
        options: s
      })
    };
  }
}
const _i = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, vi = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function Ne(...s) {
  const e = (n) => n !== null && typeof n == "object" && !Array.isArray(n), t = (n) => n instanceof ArrayBuffer || ArrayBuffer.isView(n), r = {};
  for (const n of s)
    if (n)
      for (const i in n) {
        const o = n[i];
        if (o !== void 0)
          if (Array.isArray(o))
            r[i] = o;
          else if (t(o))
            r[i] = o;
          else if (e(o)) {
            const a = r[i];
            e(a) ? r[i] = Ne(a, o) : r[i] = Ne(o);
          } else
            r[i] = o;
      }
  return r;
}
function yi(s, e) {
  return Ne(_i, s, e || {});
}
function wi(s, e) {
  return Ne(vi, s, e || {});
}
class bi {
  constructor(e) {
    this.client = e, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  /**
   * Enroll a new WebAuthn factor.
   * Creates an unverified WebAuthn factor that must be verified with a credential.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
   * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
   */
  async _enroll(e) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, e), { factorType: "webauthn" }));
  }
  /**
   * Challenge for WebAuthn credential creation or authentication.
   * Combines server challenge with browser credential operations.
   * Handles both registration (create) and authentication (request) flows.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
   * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
   * @returns {Promise<RequestResult>} Challenge response with credential or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
   */
  async _challenge({ factorId: e, webauthn: t, friendlyName: r, signal: n }, i) {
    try {
      const { data: o, error: a } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: t
      });
      if (!o)
        return { data: null, error: a };
      const l = n ?? ci.createNewAbortSignal();
      if (o.webauthn.type === "create") {
        const { user: c } = o.webauthn.credential_options.publicKey;
        c.name || (c.name = `${c.id}:${r}`), c.displayName || (c.displayName = c.name);
      }
      switch (o.webauthn.type) {
        case "create": {
          const c = yi(o.webauthn.credential_options.publicKey, i == null ? void 0 : i.create), { data: u, error: f } = await gi({
            publicKey: c,
            signal: l
          });
          return u ? {
            data: {
              factorId: e,
              challengeId: o.id,
              webauthn: {
                type: o.webauthn.type,
                credential_response: u
              }
            },
            error: null
          } : { data: null, error: f };
        }
        case "request": {
          const c = wi(o.webauthn.credential_options.publicKey, i == null ? void 0 : i.request), { data: u, error: f } = await pi(Object.assign(Object.assign({}, o.webauthn.credential_options), { publicKey: c, signal: l }));
          return u ? {
            data: {
              factorId: e,
              challengeId: o.id,
              webauthn: {
                type: o.webauthn.type,
                credential_response: u
              }
            },
            error: null
          } : { data: null, error: f };
        }
      }
    } catch (o) {
      return m(o) ? { data: null, error: o } : {
        data: null,
        error: new ee("Unexpected error in challenge", o)
      };
    }
  }
  /**
   * Verify a WebAuthn credential with the server.
   * Completes the WebAuthn ceremony by sending the credential to the server for verification.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Verification parameters
   * @param {string} params.challengeId - ID of the challenge being verified
   * @param {string} params.factorId - ID of the WebAuthn factor
   * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
   * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
   * */
  async _verify({ challengeId: e, factorId: t, webauthn: r }) {
    return this.client.mfa.verify({
      factorId: t,
      challengeId: e,
      webauthn: r
    });
  }
  /**
   * Complete WebAuthn authentication flow.
   * Performs challenge and verification in a single operation for existing credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Authentication parameters
   * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
   * @param {Object} params.webauthn - WebAuthn configuration
   * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.webauthn.signal - Optional abort signal
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
   * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
   */
  async _authenticate({ factorId: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0, signal: n } = {} }, i) {
    if (!t)
      return {
        data: null,
        error: new we("rpId is required for WebAuthn authentication")
      };
    try {
      if (!Kt())
        return {
          data: null,
          error: new ee("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this.challenge({
        factorId: e,
        webauthn: { rpId: t, rpOrigins: r },
        signal: n
      }, { request: i });
      if (!o)
        return { data: null, error: a };
      const { webauthn: l } = o;
      return this._verify({
        factorId: e,
        challengeId: o.challengeId,
        webauthn: {
          type: l.type,
          rpId: t,
          rpOrigins: r,
          credential_response: l.credential_response
        }
      });
    } catch (o) {
      return m(o) ? { data: null, error: o } : {
        data: null,
        error: new ee("Unexpected error in authenticate", o)
      };
    }
  }
  /**
   * Complete WebAuthn registration flow.
   * Performs enrollment, challenge, and verification in a single operation for new credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Registration parameters
   * @param {string} params.friendlyName - User-friendly name for the credential
   * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.signal - Optional abort signal
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
   */
  async _register({ friendlyName: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0, signal: n } = {} }, i) {
    if (!t)
      return {
        data: null,
        error: new we("rpId is required for WebAuthn registration")
      };
    try {
      if (!Kt())
        return {
          data: null,
          error: new ee("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this._enroll({
        friendlyName: e
      });
      if (!o)
        return await this.client.mfa.listFactors().then((u) => {
          var f;
          return (f = u.data) === null || f === void 0 ? void 0 : f.all.find((h) => h.factor_type === "webauthn" && h.friendly_name === e && h.status !== "unverified");
        }).then((u) => u ? this.client.mfa.unenroll({ factorId: u == null ? void 0 : u.id }) : void 0), { data: null, error: a };
      const { data: l, error: c } = await this._challenge({
        factorId: o.id,
        friendlyName: o.friendly_name,
        webauthn: { rpId: t, rpOrigins: r },
        signal: n
      }, {
        create: i
      });
      return l ? this._verify({
        factorId: o.id,
        challengeId: l.challengeId,
        webauthn: {
          rpId: t,
          rpOrigins: r,
          type: l.webauthn.type,
          credential_response: l.webauthn.credential_response
        }
      }) : { data: null, error: c };
    } catch (o) {
      return m(o) ? { data: null, error: o } : {
        data: null,
        error: new ee("Unexpected error in register", o)
      };
    }
  }
}
ri();
const mi = {
  url: vn,
  storageKey: yn,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: wn,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1
};
async function Ht(s, e, t) {
  return await t();
}
const oe = {};
class be {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var e, t;
    return (t = (e = oe[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && t !== void 0 ? t : { keys: [] };
  }
  set jwks(e) {
    oe[this.storageKey] = Object.assign(Object.assign({}, oe[this.storageKey]), { jwks: e });
  }
  get jwks_cached_at() {
    var e, t;
    return (t = (e = oe[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && t !== void 0 ? t : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    oe[this.storageKey] = Object.assign(Object.assign({}, oe[this.storageKey]), { cachedAt: e });
  }
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var t, r, n;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const i = Object.assign(Object.assign({}, mi), e);
    if (this.storageKey = i.storageKey, this.instanceID = (t = be.nextInstanceID[this.storageKey]) !== null && t !== void 0 ? t : 0, be.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!i.debug, typeof i.debug == "function" && (this.logger = i.debug), this.instanceID > 0 && I()) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(o), this.logDebugMessages && console.trace(o);
    }
    if (this.persistSession = i.persistSession, this.autoRefreshToken = i.autoRefreshToken, this.admin = new Zn({
      url: i.url,
      headers: i.headers,
      fetch: i.fetch
    }), this.url = i.url, this.headers = i.headers, this.fetch = zr(i.fetch), this.lock = i.lock || Ht, this.detectSessionInUrl = i.detectSessionInUrl, this.flowType = i.flowType, this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader, this.throwOnError = i.throwOnError, i.lock ? this.lock = i.lock : I() && (!((r = globalThis == null ? void 0 : globalThis.navigator) === null || r === void 0) && r.locks) ? this.lock = ti : this.lock = Ht, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new bi(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this)
    }, this.persistSession ? (i.storage ? this.storage = i.storage : Hr() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Wt(this.memoryStorage)), i.userStorage && (this.userStorage = i.userStorage)) : (this.memoryStorage = {}, this.storage = Wt(this.memoryStorage)), I() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (o) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o);
      }
      (n = this.broadcastChannel) === null || n === void 0 || n.addEventListener("message", async (o) => {
        this._debug("received broadcast notification from other tab or client", o), await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
      });
    }
    this.initialize();
  }
  /**
   * Returns whether error throwing mode is enabled for this client.
   */
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  /**
   * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
   * and the provided result contains a non-nullish error, the error is thrown instead of
   * being returned. This ensures consistent behavior across all public API methods.
   */
  _returnResult(e) {
    if (this.throwOnError && e && e.error)
      throw e.error;
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Vr}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      let t = {}, r = "none";
      if (I() && (t = $n(window.location.href), this._isImplicitGrantCallback(t) ? r = "implicit" : await this._isPKCECallback(t) && (r = "pkce")), I() && this.detectSessionInUrl && r !== "none") {
        const { data: n, error: i } = await this._getSessionFromURL(t, r);
        if (i) {
          if (this._debug("#_initialize()", "error detecting session from URL", i), On(i)) {
            const l = (e = i.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: i };
          }
          return await this._removeSession(), { error: i };
        }
        const { session: o, redirectType: a } = n;
        return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a), await this._saveSession(o), setTimeout(async () => {
          a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return m(t) ? this._returnResult({ error: t }) : this._returnResult({
        error: new ee("Unexpected error during initialization", t)
      });
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(e) {
    var t, r, n;
    try {
      const i = await E(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (r = (t = e == null ? void 0 : e.options) === null || t === void 0 ? void 0 : t.data) !== null && r !== void 0 ? r : {},
          gotrue_meta_security: { captcha_token: (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.captchaToken }
        },
        xform: q
      }), { data: o, error: a } = i;
      if (a || !o)
        return this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, c = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (i) {
      if (m(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(e) {
    var t, r, n;
    try {
      let i;
      if ("email" in e) {
        const { email: u, password: f, options: h } = e;
        let d = null, g = null;
        this.flowType === "pkce" && ([d, g] = await se(this.storage, this.storageKey)), i = await E(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: h == null ? void 0 : h.emailRedirectTo,
          body: {
            email: u,
            password: f,
            data: (t = h == null ? void 0 : h.data) !== null && t !== void 0 ? t : {},
            gotrue_meta_security: { captcha_token: h == null ? void 0 : h.captchaToken },
            code_challenge: d,
            code_challenge_method: g
          },
          xform: q
        });
      } else if ("phone" in e) {
        const { phone: u, password: f, options: h } = e;
        i = await E(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: f,
            data: (r = h == null ? void 0 : h.data) !== null && r !== void 0 ? r : {},
            channel: (n = h == null ? void 0 : h.channel) !== null && n !== void 0 ? n : "sms",
            gotrue_meta_security: { captcha_token: h == null ? void 0 : h.captchaToken }
          },
          xform: q
        });
      } else
        throw new je("You must provide either an email or phone number and a password");
      const { data: o, error: a } = i;
      if (a || !o)
        return this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, c = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (i) {
      if (m(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(e) {
    try {
      let t;
      if ("email" in e) {
        const { email: i, password: o, options: a } = e;
        t = await E(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: i,
            password: o,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          },
          xform: Ft
        });
      } else if ("phone" in e) {
        const { phone: i, password: o, options: a } = e;
        t = await E(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: i,
            password: o,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          },
          xform: Ft
        });
      } else
        throw new je("You must provide either an email or phone number and a password");
      const { data: r, error: n } = t;
      if (n)
        return this._returnResult({ data: { user: null, session: null }, error: n });
      if (!r || !r.session || !r.user) {
        const i = new re();
        return this._returnResult({ data: { user: null, session: null }, error: i });
      }
      return r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), this._returnResult({
        data: Object.assign({ user: r.user, session: r.session }, r.weak_password ? { weakPassword: r.weak_password } : null),
        error: n
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(e) {
    var t, r, n, i;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams: (n = e.options) === null || n === void 0 ? void 0 : n.queryParams,
      skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   */
  async signInWithWeb3(e) {
    const { chain: t } = e;
    switch (t) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`);
    }
  }
  async signInWithEthereum(e) {
    var t, r, n, i, o, a, l, c, u, f, h;
    let d, g;
    if ("message" in e)
      d = e.message, g = e.signature;
    else {
      const { chain: p, wallet: _, statement: y, options: w } = e;
      let v;
      if (I())
        if (typeof _ == "object")
          v = _;
        else {
          const F = window;
          if ("ethereum" in F && typeof F.ethereum == "object" && "request" in F.ethereum && typeof F.ethereum.request == "function")
            v = F.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof _ != "object" || !(w != null && w.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        v = _;
      }
      const S = new URL((t = w == null ? void 0 : w.url) !== null && t !== void 0 ? t : window.location.href), R = await v.request({
        method: "eth_requestAccounts"
      }).then((F) => F).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!R || R.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const O = Gr(R[0]);
      let P = (r = w == null ? void 0 : w.signInWithEthereum) === null || r === void 0 ? void 0 : r.chainId;
      if (!P) {
        const F = await v.request({
          method: "eth_chainId"
        });
        P = si(F);
      }
      const W = {
        domain: S.host,
        address: O,
        statement: y,
        uri: S.href,
        version: "1",
        chainId: P,
        nonce: (n = w == null ? void 0 : w.signInWithEthereum) === null || n === void 0 ? void 0 : n.nonce,
        issuedAt: (o = (i = w == null ? void 0 : w.signInWithEthereum) === null || i === void 0 ? void 0 : i.issuedAt) !== null && o !== void 0 ? o : /* @__PURE__ */ new Date(),
        expirationTime: (a = w == null ? void 0 : w.signInWithEthereum) === null || a === void 0 ? void 0 : a.expirationTime,
        notBefore: (l = w == null ? void 0 : w.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (c = w == null ? void 0 : w.signInWithEthereum) === null || c === void 0 ? void 0 : c.requestId,
        resources: (u = w == null ? void 0 : w.signInWithEthereum) === null || u === void 0 ? void 0 : u.resources
      };
      d = ii(W), g = await v.request({
        method: "personal_sign",
        params: [ni(d), O]
      });
    }
    try {
      const { data: p, error: _ } = await E(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: d,
          signature: g
        }, !((f = e.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (h = e.options) === null || h === void 0 ? void 0 : h.captchaToken } } : null),
        xform: q
      });
      if (_)
        throw _;
      if (!p || !p.session || !p.user) {
        const y = new re();
        return this._returnResult({ data: { user: null, session: null }, error: y });
      }
      return p.session && (await this._saveSession(p.session), await this._notifyAllSubscribers("SIGNED_IN", p.session)), this._returnResult({ data: Object.assign({}, p), error: _ });
    } catch (p) {
      if (m(p))
        return this._returnResult({ data: { user: null, session: null }, error: p });
      throw p;
    }
  }
  async signInWithSolana(e) {
    var t, r, n, i, o, a, l, c, u, f, h, d;
    let g, p;
    if ("message" in e)
      g = e.message, p = e.signature;
    else {
      const { chain: _, wallet: y, statement: w, options: v } = e;
      let S;
      if (I())
        if (typeof y == "object")
          S = y;
        else {
          const O = window;
          if ("solana" in O && typeof O.solana == "object" && ("signIn" in O.solana && typeof O.solana.signIn == "function" || "signMessage" in O.solana && typeof O.solana.signMessage == "function"))
            S = O.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof y != "object" || !(v != null && v.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        S = y;
      }
      const R = new URL((t = v == null ? void 0 : v.url) !== null && t !== void 0 ? t : window.location.href);
      if ("signIn" in S && S.signIn) {
        const O = await S.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, v == null ? void 0 : v.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: R.host,
          uri: R.href
        }), w ? { statement: w } : null));
        let P;
        if (Array.isArray(O) && O[0] && typeof O[0] == "object")
          P = O[0];
        else if (O && typeof O == "object" && "signedMessage" in O && "signature" in O)
          P = O;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in P && "signature" in P && (typeof P.signedMessage == "string" || P.signedMessage instanceof Uint8Array) && P.signature instanceof Uint8Array)
          g = typeof P.signedMessage == "string" ? P.signedMessage : new TextDecoder().decode(P.signedMessage), p = P.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in S) || typeof S.signMessage != "function" || !("publicKey" in S) || typeof S != "object" || !S.publicKey || !("toBase58" in S.publicKey) || typeof S.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        g = [
          `${R.host} wants you to sign in with your Solana account:`,
          S.publicKey.toBase58(),
          ...w ? ["", w, ""] : [""],
          "Version: 1",
          `URI: ${R.href}`,
          `Issued At: ${(n = (r = v == null ? void 0 : v.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && n !== void 0 ? n : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((i = v == null ? void 0 : v.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${v.signInWithSolana.notBefore}`] : [],
          ...!((o = v == null ? void 0 : v.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${v.signInWithSolana.expirationTime}`] : [],
          ...!((a = v == null ? void 0 : v.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${v.signInWithSolana.chainId}`] : [],
          ...!((l = v == null ? void 0 : v.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${v.signInWithSolana.nonce}`] : [],
          ...!((c = v == null ? void 0 : v.signInWithSolana) === null || c === void 0) && c.requestId ? [`Request ID: ${v.signInWithSolana.requestId}`] : [],
          ...!((f = (u = v == null ? void 0 : v.signInWithSolana) === null || u === void 0 ? void 0 : u.resources) === null || f === void 0) && f.length ? [
            "Resources",
            ...v.signInWithSolana.resources.map((P) => `- ${P}`)
          ] : []
        ].join(`
`);
        const O = await S.signMessage(new TextEncoder().encode(g), "utf8");
        if (!O || !(O instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        p = O;
      }
    }
    try {
      const { data: _, error: y } = await E(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: g, signature: te(p) }, !((h = e.options) === null || h === void 0) && h.captchaToken ? { gotrue_meta_security: { captcha_token: (d = e.options) === null || d === void 0 ? void 0 : d.captchaToken } } : null),
        xform: q
      });
      if (y)
        throw y;
      if (!_ || !_.session || !_.user) {
        const w = new re();
        return this._returnResult({ data: { user: null, session: null }, error: w });
      }
      return _.session && (await this._saveSession(_.session), await this._notifyAllSubscribers("SIGNED_IN", _.session)), this._returnResult({ data: Object.assign({}, _), error: y });
    } catch (_) {
      if (m(_))
        return this._returnResult({ data: { user: null, session: null }, error: _ });
      throw _;
    }
  }
  async _exchangeCodeForSession(e) {
    const t = await Y(this.storage, `${this.storageKey}-code-verifier`), [r, n] = (t ?? "").split("/");
    try {
      const { data: i, error: o } = await E(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: r
        },
        xform: q
      });
      if (await H(this.storage, `${this.storageKey}-code-verifier`), o)
        throw o;
      if (!i || !i.session || !i.user) {
        const a = new re();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a
        });
      }
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)), this._returnResult({ data: Object.assign(Object.assign({}, i), { redirectType: n ?? null }), error: o });
    } catch (i) {
      if (m(i))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i
        });
      throw i;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(e) {
    try {
      const { options: t, provider: r, token: n, access_token: i, nonce: o } = e, a = await E(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: n,
          access_token: i,
          nonce: o,
          gotrue_meta_security: { captcha_token: t == null ? void 0 : t.captchaToken }
        },
        xform: q
      }), { data: l, error: c } = a;
      if (c)
        return this._returnResult({ data: { user: null, session: null }, error: c });
      if (!l || !l.session || !l.user) {
        const u = new re();
        return this._returnResult({ data: { user: null, session: null }, error: u });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: c });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(e) {
    var t, r, n, i, o;
    try {
      if ("email" in e) {
        const { email: a, options: l } = e;
        let c = null, u = null;
        this.flowType === "pkce" && ([c, u] = await se(this.storage, this.storageKey));
        const { error: f } = await E(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data: (t = l == null ? void 0 : l.data) !== null && t !== void 0 ? t : {},
            create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            code_challenge: c,
            code_challenge_method: u
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: f });
      }
      if ("phone" in e) {
        const { phone: a, options: l } = e, { data: c, error: u } = await E(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: a,
            data: (n = l == null ? void 0 : l.data) !== null && n !== void 0 ? n : {},
            create_user: (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            channel: (o = l == null ? void 0 : l.channel) !== null && o !== void 0 ? o : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: c == null ? void 0 : c.message_id },
          error: u
        });
      }
      throw new je("You must provide either an email or phone number.");
    } catch (a) {
      if (m(a))
        return this._returnResult({ data: { user: null, session: null }, error: a });
      throw a;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(e) {
    var t, r;
    try {
      let n, i;
      "options" in e && (n = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo, i = (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken);
      const { data: o, error: a } = await E(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
        redirectTo: n,
        xform: q
      });
      if (a)
        throw a;
      if (!o)
        throw new Error("An error occurred on token verification.");
      const l = o.session, c = o.user;
      return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (n) {
      if (m(n))
        return this._returnResult({ data: { user: null, session: null }, error: n });
      throw n;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(e) {
    var t, r, n, i, o;
    try {
      let a = null, l = null;
      this.flowType === "pkce" && ([a, l] = await se(this.storage, this.storageKey));
      const c = await E(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (r = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo) !== null && r !== void 0 ? r : void 0 }), !((n = e == null ? void 0 : e.options) === null || n === void 0) && n.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: a, code_challenge_method: l }),
        headers: this.headers,
        xform: Yn
      });
      return !((i = c.data) === null || i === void 0) && i.url && I() && !(!((o = e.options) === null || o === void 0) && o.skipBrowserRedirect) && window.location.assign(c.data.url), this._returnResult(c);
    } catch (a) {
      if (m(a))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: r } = e;
        if (r)
          throw r;
        if (!t)
          throw new B();
        const { error: n } = await E(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: t.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: n });
      });
    } catch (e) {
      if (m(e))
        return this._returnResult({ data: { user: null, session: null }, error: e });
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(e) {
    try {
      const t = `${this.url}/resend`;
      if ("email" in e) {
        const { email: r, type: n, options: i } = e, { error: o } = await E(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            email: r,
            type: n,
            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
          },
          redirectTo: i == null ? void 0 : i.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: o });
      } else if ("phone" in e) {
        const { phone: r, type: n, options: i } = e, { data: o, error: a } = await E(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            phone: r,
            type: n,
            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: o == null ? void 0 : o.message_id },
          error: a
        });
      }
      throw new je("You must provide either an email or phone number and a type");
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (t) => t));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, t) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), n = (async () => (await r, await t()))();
        return this.pendingInLock.push((async () => {
          try {
            await n;
          } catch {
          }
        })()), n;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const r = t();
          for (this.pendingInLock.push((async () => {
            try {
              await r;
            } catch {
            }
          })()), await r; this.pendingInLock.length; ) {
            const n = [...this.pendingInLock];
            await Promise.all(n), this.pendingInLock.splice(0, n.length);
          }
          return await r;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const t = await this.__loadSession();
      return await e(t);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const t = await Y(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < We : !1;
      if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at), !r) {
        if (this.userStorage) {
          const o = await Y(this.userStorage, this.storageKey + "-user");
          o != null && o.user ? e.user = o.user : e.user = ze();
        }
        if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
          const o = { value: this.suppressGetSessionWarning };
          e.user = Hn(e.user, o), o.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: e }, error: null };
      }
      const { data: n, error: i } = await this._callRefreshToken(e.refresh_token);
      return i ? this._returnResult({ data: { session: null }, error: i }) : this._returnResult({ data: { session: n }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(e) {
    return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(e) {
    try {
      return e ? await E(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: z
      }) : await this._useSession(async (t) => {
        var r, n, i;
        const { data: o, error: a } = t;
        if (a)
          throw a;
        return !(!((r = o.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new B() } : await E(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (i = (n = o.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0,
          xform: z
        });
      });
    } catch (t) {
      if (m(t))
        return kn(t) && (await this._removeSession(), await H(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: t });
      throw t;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(e, t = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, t));
  }
  async _updateUser(e, t = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: n, error: i } = r;
        if (i)
          throw i;
        if (!n.session)
          throw new B();
        const o = n.session;
        let a = null, l = null;
        this.flowType === "pkce" && e.email != null && ([a, l] = await se(this.storage, this.storageKey));
        const { data: c, error: u } = await E(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: t == null ? void 0 : t.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: a, code_challenge_method: l }),
          jwt: o.access_token,
          xform: z
        });
        if (u)
          throw u;
        return o.user = c.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), this._returnResult({ data: { user: o.user }, error: null });
      });
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new B();
      const t = Date.now() / 1e3;
      let r = t, n = !0, i = null;
      const { payload: o } = He(e.access_token);
      if (o.exp && (r = o.exp, n = r <= t), n) {
        const { data: a, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        if (!a)
          return { data: { user: null, session: null }, error: null };
        i = a;
      } else {
        const { data: a, error: l } = await this._getUser(e.access_token);
        if (l)
          throw l;
        i = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: r - t,
          expires_at: r
        }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return this._returnResult({ data: { user: i.user, session: i }, error: null });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: { session: null, user: null }, error: t });
      throw t;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        if (!e) {
          const { data: o, error: a } = t;
          if (a)
            throw a;
          e = (r = o.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new B();
        const { data: n, error: i } = await this._callRefreshToken(e.refresh_token);
        return i ? this._returnResult({ data: { user: null, session: null }, error: i }) : n ? this._returnResult({ data: { user: n.user, session: n }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, t) {
    try {
      if (!I())
        throw new Pe("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new Pe(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (t) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Ut("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Pe("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (t === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new Ut("No code detected.");
        const { data: w, error: v } = await this._exchangeCodeForSession(e.code);
        if (v)
          throw v;
        const S = new URL(window.location.href);
        return S.searchParams.delete("code"), window.history.replaceState(window.history.state, "", S.toString()), { data: { session: w.session, redirectType: null }, error: null };
      }
      const { provider_token: r, provider_refresh_token: n, access_token: i, refresh_token: o, expires_in: a, expires_at: l, token_type: c } = e;
      if (!i || !a || !o || !c)
        throw new Pe("No session defined in URL");
      const u = Math.round(Date.now() / 1e3), f = parseInt(a);
      let h = u + f;
      l && (h = parseInt(l));
      const d = h - u;
      d * 1e3 <= ae && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${f}s`);
      const g = h - f;
      u - g >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", g, h, u) : u - g < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", g, h, u);
      const { data: p, error: _ } = await this._getUser(i);
      if (_)
        throw _;
      const y = {
        provider_token: r,
        provider_refresh_token: n,
        access_token: i,
        expires_in: f,
        expires_at: h,
        refresh_token: o,
        token_type: c,
        user: p.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: y, redirectType: e.type }, error: null });
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: { session: null, redirectType: null }, error: r });
      throw r;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(e) {
    return !!(e.access_token || e.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(e) {
    const t = await Y(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && t);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (t) => {
      var r;
      const { data: n, error: i } = t;
      if (i)
        return this._returnResult({ error: i });
      const o = (r = n.session) === null || r === void 0 ? void 0 : r.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, e);
        if (a && !(Sn(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
          return this._returnResult({ error: a });
      }
      return e !== "others" && (await this._removeSession(), await H(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  onAuthStateChange(e) {
    const t = In(), r = {
      id: t,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, r), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(t);
    })))(), { data: { subscription: r } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (t) => {
      var r, n;
      try {
        const { data: { session: i }, error: o } = t;
        if (o)
          throw o;
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", e, "session", i);
      } catch (i) {
        await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", i), console.error(i);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(e, t = {}) {
    let r = null, n = null;
    this.flowType === "pkce" && ([r, n] = await se(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await E(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: n,
          gotrue_meta_security: { captcha_token: t.captchaToken }
        },
        headers: this.headers,
        redirectTo: t.redirectTo
      });
    } catch (i) {
      if (m(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: t, error: r } = await this.getUser();
      if (r)
        throw r;
      return this._returnResult({ data: { identities: (e = t.user.identities) !== null && e !== void 0 ? e : [] }, error: null });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async linkIdentity(e) {
    return "token" in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var t;
    try {
      const { data: r, error: n } = await this._useSession(async (i) => {
        var o, a, l, c, u;
        const { data: f, error: h } = i;
        if (h)
          throw h;
        const d = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await E(this.fetch, "GET", d, {
          headers: this.headers,
          jwt: (u = (c = f.session) === null || c === void 0 ? void 0 : c.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
      if (n)
        throw n;
      return I() && !(!((t = e.options) === null || t === void 0) && t.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url), this._returnResult({
        data: { provider: e.provider, url: r == null ? void 0 : r.url },
        error: null
      });
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: { provider: e.provider, url: null }, error: r });
      throw r;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (t) => {
      var r;
      try {
        const { error: n, data: { session: i } } = t;
        if (n)
          throw n;
        const { options: o, provider: a, token: l, access_token: c, nonce: u } = e, f = await E(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (r = i == null ? void 0 : i.access_token) !== null && r !== void 0 ? r : void 0,
          body: {
            provider: a,
            id_token: l,
            access_token: c,
            nonce: u,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: q
        }), { data: h, error: d } = f;
        return d ? this._returnResult({ data: { user: null, session: null }, error: d }) : !h || !h.session || !h.user ? this._returnResult({
          data: { user: null, session: null },
          error: new re()
        }) : (h.session && (await this._saveSession(h.session), await this._notifyAllSubscribers("USER_UPDATED", h.session)), this._returnResult({ data: h, error: d }));
      } catch (n) {
        if (m(n))
          return this._returnResult({ data: { user: null, session: null }, error: n });
        throw n;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (t) => {
        var r, n;
        const { data: i, error: o } = t;
        if (o)
          throw o;
        return await E(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (n = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null && n !== void 0 ? n : void 0
        });
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(t, "begin");
    try {
      const r = Date.now();
      return await Nn(async (n) => (n > 0 && await Un(200 * Math.pow(2, n - 1)), this._debug(t, "refreshing attempt", n), await E(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: q
      })), (n, i) => {
        const o = 200 * Math.pow(2, n);
        return i && Ke(i) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + o - r < ae;
      });
    } catch (r) {
      if (this._debug(t, "error", r), m(r))
        return this._returnResult({ data: { session: null, user: null }, error: r });
      throw r;
    } finally {
      this._debug(t, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, t) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", r), I() && !t.skipBrowserRedirect && window.location.assign(r), { data: { provider: e, url: r }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e, t;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const n = await Y(this.storage, this.storageKey);
      if (n && this.userStorage) {
        let o = await Y(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = { user: n.user }, await le(this.userStorage, this.storageKey + "-user", o)), n.user = (e = o == null ? void 0 : o.user) !== null && e !== void 0 ? e : ze();
      } else if (n && !n.user && !n.user) {
        const o = await Y(this.storage, this.storageKey + "-user");
        o && (o != null && o.user) ? (n.user = o.user, await H(this.storage, this.storageKey + "-user"), await le(this.storage, this.storageKey, n)) : n.user = ze();
      }
      if (this._debug(r, "session from storage", n), !this._isValidSession(n)) {
        this._debug(r, "session is not valid"), n !== null && await this._removeSession();
        return;
      }
      const i = ((t = n.expires_at) !== null && t !== void 0 ? t : 1 / 0) * 1e3 - Date.now() < We;
      if (this._debug(r, `session has${i ? "" : " not"} expired with margin of ${We}s`), i) {
        if (this.autoRefreshToken && n.refresh_token) {
          const { error: o } = await this._callRefreshToken(n.refresh_token);
          o && (console.error(o), Ke(o) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", o), await this._removeSession()));
        }
      } else if (n.user && n.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: a } = await this._getUser(n.access_token);
          !a && (o != null && o.user) ? (n.user = o.user, await this._saveSession(n), await this._notifyAllSubscribers("SIGNED_IN", n)) : this._debug(r, "could not get user data, skipping SIGNED_IN notification");
        } catch (o) {
          console.error("Error getting user data:", o), this._debug(r, "error getting user data, skipping SIGNED_IN notification", o);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", n);
    } catch (n) {
      this._debug(r, "error", n), console.error(n);
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(e) {
    var t, r;
    if (!e)
      throw new B();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      this.refreshingDeferred = new Le();
      const { data: i, error: o } = await this._refreshAccessToken(e);
      if (o)
        throw o;
      if (!i.session)
        throw new B();
      await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const a = { data: i.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (i) {
      if (this._debug(n, "error", i), m(i)) {
        const o = { data: null, error: i };
        return Ke(i) || await this._removeSession(), (t = this.refreshingDeferred) === null || t === void 0 || t.resolve(o), o;
      }
      throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(i), i;
    } finally {
      this.refreshingDeferred = null, this._debug(n, "end");
    }
  }
  async _notifyAllSubscribers(e, t, r = !0) {
    const n = `#_notifyAllSubscribers(${e})`;
    this._debug(n, "begin", t, `broadcast = ${r}`);
    try {
      this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: e, session: t });
      const i = [], o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
        try {
          await a.callback(e, t);
        } catch (l) {
          i.push(l);
        }
      });
      if (await Promise.all(o), i.length > 0) {
        for (let a = 0; a < i.length; a += 1)
          console.error(i[a]);
        throw i[0];
      }
    } finally {
      this._debug(n, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0;
    const t = Object.assign({}, e), r = t.user && t.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r && t.user && await le(this.userStorage, this.storageKey + "-user", {
        user: t.user
      });
      const n = Object.assign({}, t);
      delete n.user;
      const i = qt(n);
      await le(this.storage, this.storageKey, i);
    } else {
      const n = qt(t);
      await le(this.storage, this.storageKey, n);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await H(this.storage, this.storageKey), await H(this.storage, this.storageKey + "-code-verifier"), await H(this.storage, this.storageKey + "-user"), this.userStorage && await H(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && I() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), ae);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (t) => {
              const { data: { session: r } } = t;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const n = Math.floor((r.expires_at * 1e3 - e) / ae);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${n} ticks, a tick lasts ${ae}ms, refresh threshold is ${nt} ticks`), n <= nt && await this._callRefreshToken(r.refresh_token);
            });
          } catch (t) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", t);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof Jr)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !I() || !(window != null && window.addEventListener))
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const t = `#_onVisibilityChanged(${e})`;
    this._debug(t, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, t, r) {
    const n = [`provider=${encodeURIComponent(t)}`];
    if (r != null && r.redirectTo && n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`), r != null && r.scopes && n.push(`scopes=${encodeURIComponent(r.scopes)}`), this.flowType === "pkce") {
      const [i, o] = await se(this.storage, this.storageKey), a = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(o)}`
      });
      n.push(a.toString());
    }
    if (r != null && r.queryParams) {
      const i = new URLSearchParams(r.queryParams);
      n.push(i.toString());
    }
    return r != null && r.skipBrowserRedirect && n.push(`skip_http_redirect=${r.skipBrowserRedirect}`), `${e}?${n.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        const { data: n, error: i } = t;
        return i ? this._returnResult({ data: null, error: i }) : await E(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (r = n == null ? void 0 : n.session) === null || r === void 0 ? void 0 : r.access_token
        });
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r, n;
        const { data: i, error: o } = t;
        if (o)
          return this._returnResult({ data: null, error: o });
        const a = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : e.factorType === "totp" ? { issuer: e.issuer } : {}), { data: l, error: c } = await E(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return c ? this._returnResult({ data: null, error: c }) : (e.factorType === "totp" && l.type === "totp" && (!((n = l == null ? void 0 : l.totp) === null || n === void 0) && n.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _verify(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: n, error: i } = t;
          if (i)
            return this._returnResult({ data: null, error: i });
          const o = Object.assign({ challenge_id: e.challengeId }, "webauthn" in e ? {
            webauthn: Object.assign(Object.assign({}, e.webauthn), { credential_response: e.webauthn.type === "create" ? di(e.webauthn.credential_response) : fi(e.webauthn.credential_response) })
          } : { code: e.code }), { data: a, error: l } = await E(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: o,
            headers: this.headers,
            jwt: (r = n == null ? void 0 : n.session) === null || r === void 0 ? void 0 : r.access_token
          });
          return l ? this._returnResult({ data: null, error: l }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), this._returnResult({ data: a, error: l }));
        });
      } catch (t) {
        if (m(t))
          return this._returnResult({ data: null, error: t });
        throw t;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: n, error: i } = t;
          if (i)
            return this._returnResult({ data: null, error: i });
          const o = await E(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: e,
            headers: this.headers,
            jwt: (r = n == null ? void 0 : n.session) === null || r === void 0 ? void 0 : r.access_token
          });
          if (o.error)
            return o;
          const { data: a } = o;
          if (a.type !== "webauthn")
            return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: ui(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: hi(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (t) {
        if (m(t))
          return this._returnResult({ data: null, error: t });
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: t, error: r } = await this._challenge({
      factorId: e.factorId
    });
    return r ? this._returnResult({ data: null, error: r }) : await this._verify({
      factorId: e.factorId,
      challengeId: t.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var e;
    const { data: { user: t }, error: r } = await this.getUser();
    if (r)
      return { data: null, error: r };
    const n = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const i of (e = t == null ? void 0 : t.factors) !== null && e !== void 0 ? e : [])
      n.all.push(i), i.status === "verified" && n[i.factor_type].push(i);
    return {
      data: n,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    var e, t;
    const { data: { session: r }, error: n } = await this.getSession();
    if (n)
      return this._returnResult({ data: null, error: n });
    if (!r)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: i } = He(r.access_token);
    let o = null;
    i.aal && (o = i.aal);
    let a = o;
    ((t = (e = r.user.factors) === null || e === void 0 ? void 0 : e.filter((u) => u.status === "verified")) !== null && t !== void 0 ? t : []).length > 0 && (a = "aal2");
    const c = i.amr || [];
    return { data: { currentLevel: o, nextLevel: a, currentAuthenticationMethods: c }, error: null };
  }
  /**
   * Retrieves details about an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * Returns authorization details including client info, scopes, and user information.
   * If the API returns a redirect_uri, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   */
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        return n ? this._returnResult({ data: null, error: n }) : r ? await E(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new B() });
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _approveAuthorization(e, t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: i } = r;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!n)
          return this._returnResult({ data: null, error: new B() });
        const o = await E(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: n.access_token,
          body: { action: "approve" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && I() && !(t != null && t.skipBrowserRedirect) && window.location.assign(o.data.redirect_url), o;
      });
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(e, t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: i } = r;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!n)
          return this._returnResult({ data: null, error: new B() });
        const o = await E(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: n.access_token,
          body: { action: "deny" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && I() && !(t != null && t.skipBrowserRedirect) && window.location.assign(o.data.redirect_url), o;
      });
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(e, t = { keys: [] }) {
    let r = t.keys.find((a) => a.kid === e);
    if (r)
      return r;
    const n = Date.now();
    if (r = this.jwks.keys.find((a) => a.kid === e), r && this.jwks_cached_at + mn > n)
      return r;
    const { data: i, error: o } = await E(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (o)
      throw o;
    return !i.keys || i.keys.length === 0 || (this.jwks = i, this.jwks_cached_at = n, r = i.keys.find((a) => a.kid === e), !r) ? null : r;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   */
  async getClaims(e, t = {}) {
    try {
      let r = e;
      if (!r) {
        const { data: d, error: g } = await this.getSession();
        if (g || !d.session)
          return this._returnResult({ data: null, error: g });
        r = d.session.access_token;
      }
      const { header: n, payload: i, signature: o, raw: { header: a, payload: l } } = He(r);
      t != null && t.allowExpired || Vn(i.exp);
      const c = !n.alg || n.alg.startsWith("HS") || !n.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(n.kid, t != null && t.keys ? { keys: t.keys } : t == null ? void 0 : t.jwks);
      if (!c) {
        const { error: d } = await this.getUser(r);
        if (d)
          throw d;
        return {
          data: {
            claims: i,
            header: n,
            signature: o
          },
          error: null
        };
      }
      const u = Wn(n.alg), f = await crypto.subtle.importKey("jwk", c, u, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(u, f, o, Pn(`${a}.${l}`)))
        throw new at("Invalid JWT signature");
      return {
        data: {
          claims: i,
          header: n,
          signature: o
        },
        error: null
      };
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
}
be.nextInstanceID = {};
const Ei = be;
class Si extends Ei {
  constructor(e) {
    super(e);
  }
}
class ki {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.storage Options passed along to the storage-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(e, t, r) {
    var n, i, o;
    this.supabaseUrl = e, this.supabaseKey = t;
    const a = _n(e);
    if (!t)
      throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", a), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", a), this.storageUrl = new URL("storage/v1", a), this.functionsUrl = new URL("functions/v1", a);
    const l = `sb-${a.hostname.split(".")[0]}-auth-token`, c = {
      db: ln,
      realtime: un,
      auth: Object.assign(Object.assign({}, cn), { storageKey: l }),
      global: an
    }, u = pn(r ?? {}, c);
    this.storageKey = (n = u.auth.storageKey) !== null && n !== void 0 ? n : "", this.headers = (i = u.global.headers) !== null && i !== void 0 ? i : {}, u.accessToken ? (this.accessToken = u.accessToken, this.auth = new Proxy({}, {
      get: (f, h) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((o = u.auth) !== null && o !== void 0 ? o : {}, this.headers, u.global.fetch), this.fetch = fn(t, this._getAccessToken.bind(this), u.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, u.realtime)), this.accessToken && this.accessToken().then((f) => this.realtime.setAuth(f)).catch((f) => console.warn("Failed to set initial Realtime auth token:", f)), this.rest = new _s(new URL("rest/v1", a).href, {
      headers: this.headers,
      schema: u.db.schema,
      fetch: this.fetch
    }), this.storage = new sn(this.storageUrl.href, this.headers, this.fetch, r == null ? void 0 : r.storage), u.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new ds(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    return this.rest.from(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return this.rest.schema(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, t = {}, r = {
    head: !1,
    get: !1,
    count: void 0
  }) {
    return this.rest.rpc(e, t, r);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(e, t = { config: {} }) {
    return this.realtime.channel(e, t);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var e, t;
    if (this.accessToken)
      return await this.accessToken();
    const { data: r } = await this.auth.getSession();
    return (t = (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !== null && t !== void 0 ? t : this.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, storage: n, userStorage: i, storageKey: o, flowType: a, lock: l, debug: c, throwOnError: u }, f, h) {
    const d = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Si({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, d), f),
      storageKey: o,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: n,
      userStorage: i,
      flowType: a,
      lock: l,
      debug: c,
      throwOnError: u,
      fetch: h,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((g) => g.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(e) {
    return new $s(this.realtimeUrl.href, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, r) => {
      this._handleTokenChanged(t, "CLIENT", r == null ? void 0 : r.access_token);
    });
  }
  _handleTokenChanged(e, t, r) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== r ? (this.changedAccessToken = r, this.realtime.setAuth(r)) : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const Oi = (s, e, t) => new ki(s, e, t);
function Ti() {
  if (typeof window < "u" || typeof process > "u")
    return !1;
  const s = process.version;
  if (s == null)
    return !1;
  const e = s.match(/^v(\d+)\./);
  return e ? parseInt(e[1], 10) <= 18 : !1;
}
Ti() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
function Ai(s, e) {
  const t = Ce([]), r = Ce(!1), n = Ce(null), i = Oi(
    "https://sb.y2k.fund",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzU4NjUyMjAwLCJleHAiOjE5MTY0MTg2MDB9.xjB0XcyWjsnhjKx6u03CQwnvgXOQITzYUCtF8CoTcyE"
  );
  return {
    activities: t,
    loading: r,
    error: n,
    fetchActivities: async () => {
      r.value = !0, n.value = null;
      try {
        let a = i.schema("hf").from("position_table_changes_computed_in_supabase").select("*").order("time_of_data_insert", { ascending: !1 }).order("created_at", { ascending: !1 });
        const { data: l, error: c } = await a;
        if (c) throw c;
        const [u, f] = await Promise.all([
          i.schema("hf").from("user_accounts_master").select("internal_account_id, legal_entity"),
          s ? i.schema("hf").from("user_account_alias").select("internal_account_id, alias").eq("user_id", s) : { data: [], error: null }
        ]);
        if (u.error)
          throw console.error("❌ Accounts query error:", u.error), u.error;
        const h = new Map(
          (f.data || []).map((p) => [p.internal_account_id, p.alias])
        ), d = new Map(
          (u.data || []).map((p) => [p.internal_account_id, p.legal_entity])
        ), g = l == null ? void 0 : l.reduce((p, _) => {
          const y = `${_.time_of_data_insert}-${_.human_readable_description_of_changes}-${_.internal_account_id}`;
          if (!p.find(
            (w) => `${w.time_of_data_insert}-${w.human_readable_description_of_changes}-${w.internal_account_id}` === y
          )) {
            let w = d.get(_.internal_account_id) || void 0;
            h.has(_.internal_account_id) && (w = h.get(_.internal_account_id)), p.push({
              ..._,
              legal_entity: w
            });
          }
          return p;
        }, []);
        t.value = g || [];
      } catch (a) {
        n.value = a instanceof Error ? a.message : "Failed to fetch activities";
      } finally {
        r.value = !1;
      }
    }
  };
}
const Ri = { class: "activity-log-container" }, ji = { class: "filter-section" }, Pi = { class: "filter-input-wrapper" }, Ci = {
  key: 0,
  class: "result-count"
}, Ii = {
  key: 0,
  class: "loading"
}, $i = {
  key: 1,
  class: "error"
}, xi = {
  key: 2,
  class: "empty"
}, Ui = {
  key: 3,
  class: "activity-list"
}, Ni = { class: "activity-content" }, Di = { class: "activity-main" }, Li = { class: "symbol-tags" }, Bi = { class: "activity-description" }, qi = { class: "activity-meta" }, Mi = { class: "meta-item" }, Fi = { class: "meta-item" }, Vi = /* @__PURE__ */ Qr({
  __name: "ActivityLog",
  props: {
    symbolRoot: { default: "" },
    userId: { default: "4fbec15d-2316-4805-b2a4-5cd2115a5ac8" }
  },
  setup(s) {
    const e = s, { activities: t, loading: r, error: n, fetchActivities: i } = Ai(e.userId, e.symbolRoot), o = Ce(""), a = Xr(() => {
      if (!o.value.trim())
        return t.value;
      const f = o.value.split(",").map((h) => h.trim().toLowerCase()).filter((h) => h.length > 0);
      return f.length === 0 ? t.value : t.value.filter((h) => {
        const d = (h.legal_entity || "").toLowerCase(), g = (h.internal_account_id || "").toLowerCase(), p = (h.symbol || "").toLowerCase(), _ = (h.human_readable_description_of_changes || "").toLowerCase();
        return f.every((y) => {
          const w = p.includes(y), v = d.includes(y) || g.includes(y), S = _.includes(y);
          return w || v || S;
        });
      });
    });
    Zr(() => {
      i();
    });
    function l(f) {
      if (!f || f.length !== 6) return "";
      const h = "20" + f.substring(0, 2), d = f.substring(2, 4), g = f.substring(4, 6);
      return (/* @__PURE__ */ new Date(`${h}-${d}-${g}`)).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }
    function c(f) {
      if (!f) return [];
      const h = String(f), d = h.match(/^([A-Z]+)\b/), g = (d == null ? void 0 : d[1]) ?? "", p = h.match(/\s([CP])\b/), _ = (p == null ? void 0 : p[1]) ?? "", y = h.match(/\s(\d+(?:\.\d+)?)\s+[CP]\b/), w = (y == null ? void 0 : y[1]) ?? "", v = h.match(/\b(\d{6})[CP]/), S = v ? l(v[1]) : "";
      return [g, S, w, _].filter(Boolean);
    }
    es(() => [e.userId, e.symbolRoot], () => {
      i();
    });
    const u = (f) => new Date(f).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    return (f, h) => (L(), D("div", Ri, [
      k("div", ji, [
        k("div", Pi, [
          h[3] || (h[3] = k("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            class: "search-icon"
          }, [
            k("circle", {
              cx: "11",
              cy: "11",
              r: "8"
            }),
            k("path", { d: "m21 21-4.35-4.35" })
          ], -1)),
          ts(k("input", {
            "onUpdate:modelValue": h[0] || (h[0] = (d) => o.value = d),
            type: "text",
            placeholder: "Filter by symbol or ID...",
            class: "filter-input"
          }, null, 512), [
            [rs, o.value]
          ]),
          o.value ? (L(), D("button", {
            key: 0,
            onClick: h[1] || (h[1] = (d) => o.value = ""),
            class: "clear-button",
            "aria-label": "Clear filter"
          }, [...h[2] || (h[2] = [
            k("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              k("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              k("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ])])) : vt("", !0)
        ]),
        ge(r) ? vt("", !0) : (L(), D("span", Ci, K(a.value.length) + " of " + K(ge(t).length) + " activities ", 1))
      ]),
      ge(r) ? (L(), D("div", Ii, [...h[4] || (h[4] = [
        k("div", { class: "spinner" }, null, -1),
        k("span", null, "Loading activities...", -1)
      ])])) : ge(n) ? (L(), D("div", $i, [
        h[5] || (h[5] = k("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2"
        }, [
          k("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }),
          k("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
          }),
          k("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
          })
        ], -1)),
        Be(" " + K(ge(n)), 1)
      ])) : a.value.length === 0 ? (L(), D("div", xi, [
        h[6] || (h[6] = ss('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-d34076f8><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-v-d34076f8></rect><line x1="16" y1="2" x2="16" y2="6" data-v-d34076f8></line><line x1="8" y1="2" x2="8" y2="6" data-v-d34076f8></line><line x1="3" y1="10" x2="21" y2="10" data-v-d34076f8></line></svg>', 1)),
        k("p", null, K(o.value ? "No activities match your filter" : "No activities found"), 1)
      ])) : (L(), D("div", Ui, [
        (L(!0), D(yt, null, wt(a.value, (d) => (L(), D("div", {
          key: d.id,
          class: "activity-item"
        }, [
          k("div", Ni, [
            k("div", Di, [
              k("div", Li, [
                (L(!0), D(yt, null, wt(c(d.symbol), (g, p) => (L(), D("span", {
                  key: p,
                  class: ns(["tag", {
                    "tag-symbol": p === 0,
                    "tag-expiry": p === 1,
                    "tag-strike": p === 2,
                    "tag-right": p === 3
                  }])
                }, K(g), 3))), 128))
              ]),
              k("p", Bi, K(d.human_readable_description_of_changes), 1)
            ]),
            k("div", qi, [
              k("span", Mi, [
                h[7] || (h[7] = k("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  k("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                  }),
                  k("polyline", { points: "12 6 12 12 16 14" })
                ], -1)),
                Be(" " + K(u(d.created_at)), 1)
              ]),
              k("span", Fi, [
                h[8] || (h[8] = k("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  k("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                  k("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                  })
                ], -1)),
                Be(" ID: " + K(d.legal_entity || d.internal_account_id), 1)
              ])
            ])
          ])
        ]))), 128))
      ]))
    ]));
  }
}), Wi = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, n] of e)
    t[r] = n;
  return t;
}, Qi = /* @__PURE__ */ Wi(Vi, [["__scopeId", "data-v-d34076f8"]]);
export {
  Qi as ActivityLog,
  Qi as default
};
