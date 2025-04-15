var F = { exports: {} }, Z = F.exports, q;
function V() {
  return q || (q = 1, function(r, h) {
    (function(a, o) {
      o(r);
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Z, function(a) {
      if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
        throw new Error("This script should only be loaded in a browser extension.");
      if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
        a.exports = globalThis.browser;
      else {
        const o = "The message port closed before a response was received.", x = (A) => {
          const u = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: !1
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: !0
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(u).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class p extends WeakMap {
            constructor(s, t = void 0) {
              super(t), this.createItem = s;
            }
            get(s) {
              return this.has(s) || this.set(s, this.createItem(s)), super.get(s);
            }
          }
          const k = (e) => e && typeof e == "object" && typeof e.then == "function", y = (e, s) => (...t) => {
            A.runtime.lastError ? e.reject(new Error(A.runtime.lastError.message)) : s.singleCallbackArg || t.length <= 1 && s.singleCallbackArg !== !1 ? e.resolve(t[0]) : e.resolve(t);
          }, T = (e) => e == 1 ? "argument" : "arguments", M = (e, s) => function(g, ...l) {
            if (l.length < s.minArgs)
              throw new Error(`Expected at least ${s.minArgs} ${T(s.minArgs)} for ${e}(), got ${l.length}`);
            if (l.length > s.maxArgs)
              throw new Error(`Expected at most ${s.maxArgs} ${T(s.maxArgs)} for ${e}(), got ${l.length}`);
            return new Promise((d, f) => {
              if (s.fallbackToNoCallback)
                try {
                  g[e](...l, y({
                    resolve: d,
                    reject: f
                  }, s));
                } catch (n) {
                  console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, n), g[e](...l), s.fallbackToNoCallback = !1, s.noCallback = !0, d();
                }
              else s.noCallback ? (g[e](...l), d()) : g[e](...l, y({
                resolve: d,
                reject: f
              }, s));
            });
          }, _ = (e, s, t) => new Proxy(s, {
            apply(g, l, d) {
              return t.call(l, e, ...d);
            }
          });
          let E = Function.call.bind(Object.prototype.hasOwnProperty);
          const S = (e, s = {}, t = {}) => {
            let g = /* @__PURE__ */ Object.create(null), l = {
              has(f, n) {
                return n in e || n in g;
              },
              get(f, n, b) {
                if (n in g)
                  return g[n];
                if (!(n in e))
                  return;
                let m = e[n];
                if (typeof m == "function")
                  if (typeof s[n] == "function")
                    m = _(e, e[n], s[n]);
                  else if (E(t, n)) {
                    let v = M(n, t[n]);
                    m = _(e, e[n], v);
                  } else
                    m = m.bind(e);
                else if (typeof m == "object" && m !== null && (E(s, n) || E(t, n)))
                  m = S(m, s[n], t[n]);
                else if (E(t, "*"))
                  m = S(m, s[n], t["*"]);
                else
                  return Object.defineProperty(g, n, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                      return e[n];
                    },
                    set(v) {
                      e[n] = v;
                    }
                  }), m;
                return g[n] = m, m;
              },
              set(f, n, b, m) {
                return n in g ? g[n] = b : e[n] = b, !0;
              },
              defineProperty(f, n, b) {
                return Reflect.defineProperty(g, n, b);
              },
              deleteProperty(f, n) {
                return Reflect.deleteProperty(g, n);
              }
            }, d = Object.create(e);
            return new Proxy(d, l);
          }, R = (e) => ({
            addListener(s, t, ...g) {
              s.addListener(e.get(t), ...g);
            },
            hasListener(s, t) {
              return s.hasListener(e.get(t));
            },
            removeListener(s, t) {
              s.removeListener(e.get(t));
            }
          }), j = new p((e) => typeof e != "function" ? e : function(t) {
            const g = S(t, {}, {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            });
            e(g);
          }), N = new p((e) => typeof e != "function" ? e : function(t, g, l) {
            let d = !1, f, n = new Promise((L) => {
              f = function(w) {
                d = !0, L(w);
              };
            }), b;
            try {
              b = e(t, g, f);
            } catch (L) {
              b = Promise.reject(L);
            }
            const m = b !== !0 && k(b);
            if (b !== !0 && !m && !d)
              return !1;
            const v = (L) => {
              L.then((w) => {
                l(w);
              }, (w) => {
                let B;
                w && (w instanceof Error || typeof w.message == "string") ? B = w.message : B = "An unexpected error occurred", l({
                  __mozWebExtensionPolyfillReject__: !0,
                  message: B
                });
              }).catch((w) => {
                console.error("Failed to send onMessage rejected reply", w);
              });
            };
            return v(m ? b : n), !0;
          }), i = ({
            reject: e,
            resolve: s
          }, t) => {
            A.runtime.lastError ? A.runtime.lastError.message === o ? s() : e(new Error(A.runtime.lastError.message)) : t && t.__mozWebExtensionPolyfillReject__ ? e(new Error(t.message)) : s(t);
          }, C = (e, s, t, ...g) => {
            if (g.length < s.minArgs)
              throw new Error(`Expected at least ${s.minArgs} ${T(s.minArgs)} for ${e}(), got ${g.length}`);
            if (g.length > s.maxArgs)
              throw new Error(`Expected at most ${s.maxArgs} ${T(s.maxArgs)} for ${e}(), got ${g.length}`);
            return new Promise((l, d) => {
              const f = i.bind(null, {
                resolve: l,
                reject: d
              });
              g.push(f), t.sendMessage(...g);
            });
          }, X = {
            devtools: {
              network: {
                onRequestFinished: R(j)
              }
            },
            runtime: {
              onMessage: R(N),
              onMessageExternal: R(N),
              sendMessage: C.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: C.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          }, O = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          return u.privacy = {
            network: {
              "*": O
            },
            services: {
              "*": O
            },
            websites: {
              "*": O
            }
          }, S(A, X, u);
        };
        a.exports = x(chrome);
      }
    });
  }(F)), F.exports;
}
V();
var P;
(function(r) {
  r.Local = "local", r.Sync = "sync", r.Managed = "managed", r.Session = "session";
})(P || (P = {}));
var $;
(function(r) {
  r.ExtensionPagesOnly = "TRUSTED_CONTEXTS", r.ExtensionPagesAndContentScripts = "TRUSTED_AND_UNTRUSTED_CONTEXTS";
})($ || ($ = {}));
const c = globalThis.chrome, D = async (r, h) => {
  const a = (x) => typeof x == "function", o = (x) => x instanceof Promise;
  return a(r) ? (o(r), r(h)) : r;
};
let W = !1;
function z(r) {
  if (c && c.storage[r] === void 0)
    throw new Error(`Check your storage permission in manifest.json: ${r} is not defined`);
}
function H(r, h, a) {
  var j, N;
  let o = null, x = !1, A = [];
  const u = (a == null ? void 0 : a.storageEnum) ?? P.Local, p = (a == null ? void 0 : a.liveUpdate) ?? !1, k = ((j = a == null ? void 0 : a.serialization) == null ? void 0 : j.serialize) ?? ((i) => i), y = ((N = a == null ? void 0 : a.serialization) == null ? void 0 : N.deserialize) ?? ((i) => i);
  W === !1 && u === P.Session && (a == null ? void 0 : a.sessionAccessForContentScripts) === !0 && (z(u), c == null || c.storage[u].setAccessLevel({
    accessLevel: $.ExtensionPagesAndContentScripts
  }).catch((i) => {
    console.warn(i), console.warn("Please call setAccessLevel into different context, like a background script.");
  }), W = !0);
  const T = async () => {
    z(u);
    const i = await (c == null ? void 0 : c.storage[u].get([r]));
    return i ? y(i[r]) ?? h : h;
  }, M = () => {
    A.forEach((i) => i());
  }, _ = async (i) => {
    x || (o = await T()), o = await D(i, o), await (c == null ? void 0 : c.storage[u].set({ [r]: k(o) })), M();
  }, E = (i) => (A = [...A, i], () => {
    A = A.filter((C) => C !== i);
  }), S = () => o;
  T().then((i) => {
    o = i, x = !0, M();
  });
  async function R(i) {
    if (i[r] === void 0)
      return;
    const C = y(i[r].newValue);
    o !== C && (o = await D(C, o), M());
  }
  return p && (c == null || c.storage[u].onChanged.addListener(R)), {
    get: T,
    set: _,
    getSnapshot: S,
    subscribe: E
  };
}
const I = H("theme-storage-key", "light", {
  storageEnum: P.Local,
  liveUpdate: !0
}), G = {
  ...I,
  toggle: async () => {
    await I.set((r) => r === "light" ? "dark" : "light");
  }
}, J = H("fund-map-storage-key", {}, {
  storageEnum: P.Local,
  liveUpdate: !0
}), K = {
  ...J
  // set: async (key:string, value:any) => {
  //   const map = new Map<string, any>();
  //   return await storage.set((currentMap) => {
  //     map.set(key, value);
  //     return map;
  //   });
  // },
  // get: async (key:string) => {
  //   const map = new Map<string, any>();
  //   await storage.get().then((currentMap) => {
  //     currentMap.forEach((value, key) => {
  //       map.set(key, value);
  //     });
  //   });
  //   return map;
  // },
}, Q = () => {
  chrome.tabs.onUpdated.addListener((r, h, a) => {
    var o;
    (o = a.url) != null && o.includes("xueqiu.com") && h.status === "loading" && Y(r);
  });
};
async function Y(r) {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: r },
      files: ["xhr-interceptor.js"],
      // 关键拦截脚本
      injectImmediately: !0,
      // 立即注入，不等待页面其他资源
      world: "MAIN"
      // 使用主执行环境（覆盖页面原生对象）
    });
  } catch (h) {
    console.error("注入失败:", h);
  }
}
Q();
G.get().then((r) => {
  console.log("theme", r);
});
const U = /* @__PURE__ */ new Map();
chrome.runtime.onMessage.addListener((r, h, a) => {
  var o;
  if (r.type === "XHR_RESPONSE") {
    console.log("拦截到 XHR 响应:", r.data);
    try {
      const x = JSON.parse(r.data.response);
      console.log("json", x);
      const A = {}, { error_code: u, data: p } = x;
      if (u === 0 && ((o = p == null ? void 0 : p.list) == null ? void 0 : o.length) > 0)
        for (const k of p.list) {
          const { symbol: y } = k;
          U.set(y, k), A[y] = k;
        }
      console.log("cacheMap", U), K.set(Object.fromEntries(U));
    } catch (x) {
      console.log("XHR_RESPONSE->error", x);
    }
  }
});
console.log("Background loaded");
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");
