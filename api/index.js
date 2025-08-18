var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-4IWFHLWV.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react2.useRouteError)();
  if (console.error(error), (0, import_react2.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "There was an error" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.data.message }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Hey, developer, you should replace this with what you want your users to see." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this);
  let errorMessage = "Unknown error";
  return error instanceof Error && (errorMessage = error.message), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Uh oh ..." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Something went wrong." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("pre", { children: errorMessage }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "bg-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      null
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 52
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader
});
var import_node = require("@remix-run/node"), loader = async () => {
  throw (0, import_node.redirect)("/work");
};

// app/routes/music.tsx
var music_exports = {};
__export(music_exports, {
  default: () => Music,
  loader: () => loader2
});
var import_react3 = require("@remix-run/react");

// app/lib/loadTrack.ts
var hasTrack = (t) => t.hasOwnProperty("album_art"), loadTrack = async () => {
  try {
    let res = await (await fetch("http://api.jaketaylor.co/api/track", {
      signal: AbortSignal.timeout(2e3)
    })).json();
    return hasTrack(res) ? res : null;
  } catch {
    return null;
  }
};

// app/routes/music.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader2 = async () => ({
  track: await loadTrack()
});
function Music() {
  let { track } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-gray-900 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-6xl w-11/12 mx-auto pt-36 pb-12 relative z-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col-reverse md:flex-row justify-between items-start md:items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-gray-100 text-6xl font-black mt-4 md:mt-0", children: "Music" }, void 0, !1, {
          fileName: "app/routes/music.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        track ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-gray-900 bg-opacity-25 flex flex-row items-center justify-end min-w-64 self-end md:self-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "block text-xs font-semibold text-gray-300 text-opacity-75 uppercase text-right", children: "Listening Now" }, void 0, !1, {
              fileName: "app/routes/music.tsx",
              lineNumber: 30,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-right mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "whitespace-nowrap truncate text-xs text-gray-200 leading-none", children: track.track_name }, void 0, !1, {
                fileName: "app/routes/music.tsx",
                lineNumber: 35,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "whitespace-nowrap truncate text-xs text-gray-200 text-opacity-80 leading-none my-1", children: track.artist_name }, void 0, !1, {
                fileName: "app/routes/music.tsx",
                lineNumber: 38,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "whitespace-nowrap truncate text-xs text-gray-200 text-opacity-80 leading-none", children: track.album_name }, void 0, !1, {
                fileName: "app/routes/music.tsx",
                lineNumber: 41,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/music.tsx",
              lineNumber: 34,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/music.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "img",
            {
              src: track.album_art,
              alt: track.album_name,
              className: "w-20 h-20 m-1 ml-0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/music.tsx",
              lineNumber: 47,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/music.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/music.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/music.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      track ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            style: { backgroundImage: `url(${track.album_art})` },
            className: "absolute inset-0 bg-no-repeat bg-cover bg-center z-10",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-0 backdrop-blur-lg" }, void 0, !1, {
              fileName: "app/routes/music.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/music.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-0 z-20 bg-gradient-to-t from-gray-900 to-transparent opacity-75" }, void 0, !1, {
          fileName: "app/routes/music.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/music.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/routes/music.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "max-w-6xl w-11/12 mx-auto py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/music.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/music.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/music.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Blog() {
  let location = (0, import_react4.useLocation)(), isIndex = /\/blog\/?$/.test(location.pathname);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-gray-900 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        className: `max-w-prose w-11/12 mx-auto transition-all ${isIndex ? "pt-36 pb-12" : "py-4"} relative z-30`,
        children: [
          isIndex ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", className: "text-sm text-gray-100 mb-1", children: "\u2190 Back to main site" }, void 0, !1, {
            fileName: "app/routes/blog.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/blog", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "h1",
            {
              className: `text-gray-100 transition ${isIndex ? "text-6xl" : "text-4xl"} font-black`,
              children: "Jake's Blog"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/blog.tsx",
              lineNumber: 23,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/blog.tsx",
            lineNumber: 22,
            columnNumber: 11
          }, this),
          isIndex ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-4 text-lg font-semibold text-gray-100", children: "My thoughts on whatever I fancy writing about. Probably updated very infrequently." }, void 0, !1, {
            fileName: "app/routes/blog.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this) : null
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/blog.tsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/work.tsx
var work_exports = {};
__export(work_exports, {
  default: () => Work,
  loader: () => loader3
});
var import_react8 = require("@remix-run/react");

// app/components/Sidebar/index.tsx
var import_react6 = require("react");

// app/components/icons/Home.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), HomeIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: `h-6 w-6 ${className}`,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/Home.tsx",
        lineNumber: 15,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/Home.tsx",
    lineNumber: 8,
    columnNumber: 3
  },
  this
);

// app/components/icons/Collection.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), CollectionIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: `h-6 w-6 ${className}`,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/Collection.tsx",
        lineNumber: 15,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/Collection.tsx",
    lineNumber: 8,
    columnNumber: 3
  },
  this
);

// app/components/icons/Chat.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ChatIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: `h-6 w-6 ${className}`,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/Chat.tsx",
        lineNumber: 15,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/Chat.tsx",
    lineNumber: 8,
    columnNumber: 3
  },
  this
);

// app/components/Sidebar/index.tsx
var import_react7 = require("@remix-run/react");

// app/components/icons/Music.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), MusicIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: `h-6 w-6 ${className}`,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" }, void 0, !1, {
      fileName: "app/components/icons/Music.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/Music.tsx",
    lineNumber: 8,
    columnNumber: 3
  },
  this
);

// app/components/Sidebar/CurrentTrack.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), CurrentTrack = ({ track, open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "div",
  {
    className: `absolute bottom-full md:bottom-0 w-full ${open ? "block" : "hidden md:block"}`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_react5.Link,
      {
        className: "group block w-full bg-gray-700 hover:bg-gray-600 transition-colors p-2 text-right md:text-left",
        to: "/music",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "whitespace-nowrap truncate text-xs font-semibold text-gray-300 text-opacity-80 mb-2 uppercase tracking-wider", children: "Listening Now" }, void 0, !1, {
            fileName: "app/components/Sidebar/CurrentTrack.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-row-reverse md:flex-row items-center justify-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "img",
              {
                src: track.album_art,
                alt: track.album_name,
                className: "w-12 h-12 ml-2 md:ml-0 mr-0 md:mr-2"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Sidebar/CurrentTrack.tsx",
                lineNumber: 30,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "overflow-hidden", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "whitespace-nowrap truncate text-xs text-gray-300 text-opacity-90", children: track.track_name }, void 0, !1, {
                fileName: "app/components/Sidebar/CurrentTrack.tsx",
                lineNumber: 37,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "whitespace-nowrap truncate text-xs text-gray-300 text-opacity-75", children: track.artist_name }, void 0, !1, {
                fileName: "app/components/Sidebar/CurrentTrack.tsx",
                lineNumber: 40,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "whitespace-nowrap truncate text-xs text-gray-300 text-opacity-75", children: track.album_name }, void 0, !1, {
                fileName: "app/components/Sidebar/CurrentTrack.tsx",
                lineNumber: 43,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Sidebar/CurrentTrack.tsx",
              lineNumber: 36,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar/CurrentTrack.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "md:hidden absolute top-full right-6 border-12 border-transparent border-t-gray-700 group-hover:border-t-gray-600 transition-colors" }, void 0, !1, {
            fileName: "app/components/Sidebar/CurrentTrack.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Sidebar/CurrentTrack.tsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Sidebar/CurrentTrack.tsx",
    lineNumber: 16,
    columnNumber: 5
  },
  this
);

// app/components/Sidebar/index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Sidebar = ({ track }) => {
  let location = (0, import_react7.useLocation)(), [trackOpen, setTrackOpen] = (0, import_react6.useState)(!1), pathIs = (path) => location.pathname.startsWith(path);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("aside", { className: "fixed right-0 left-0 bottom-0 md:bottom-auto md:right-auto md:h-screen w-full md:w-64 bg-gray-800 py-2 md:py-0 z-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-24 h-24 hidden md:flex items-center justify-center relative mx-auto mt-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-24 h-24 rounded-lg bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 absolute inset-0 transform -rotate-3 z-10" }, void 0, !1, {
        fileName: "app/components/Sidebar/index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-xl md:text-5xl text-gray-800 font-black z-20", children: "JT" }, void 0, !1, {
        fileName: "app/components/Sidebar/index.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sidebar/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("nav", { className: "text-gray-200 font-medium md:mt-8 relative z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { className: "mx-4 space-x-2 md:space-x-0 md:space-y-2 flex flex-row md:flex-col justify-start md:justify-center relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react7.NavLink,
        {
          to: "/work",
          className: (active) => `px-4 py-3 flex flex-col md:flex-row justify-center md:justify-start items-center rounded-lg hover:bg-gray-100 hover:bg-opacity-25 ${active && location.pathname === "/work" ? "bg-indigo-500 bg-opacity-20 text-indigo-500" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HomeIcon, { className: "h-5 w-5 opacity-75" }, void 0, !1, {
              fileName: "app/components/Sidebar/index.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "leading-none md:ml-4 mt-1 md:mt-0 text-gray-200", children: "Home" }, void 0, !1, {
              fileName: "app/components/Sidebar/index.tsx",
              lineNumber: 44,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Sidebar/index.tsx",
          lineNumber: 33,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Sidebar/index.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react7.NavLink,
        {
          to: "/work/portfolio",
          className: (active) => `px-4 py-3 flex flex-col md:flex-row justify-center md:justify-start items-center rounded-lg hover:bg-gray-100 hover:bg-opacity-25 ${active && pathIs("/work/portfolio") ? "bg-indigo-500 bg-opacity-20 text-indigo-500" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CollectionIcon, { className: "h-5 w-5 opacity-75" }, void 0, !1, {
              fileName: "app/components/Sidebar/index.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "leading-none md:ml-4 mt-1 md:mt-0 text-gray-200", children: "Portfolio" }, void 0, !1, {
              fileName: "app/components/Sidebar/index.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Sidebar/index.tsx",
          lineNumber: 51,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Sidebar/index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react7.NavLink,
        {
          to: "/work/contact",
          className: (active) => `px-4 py-3 flex flex-col md:flex-row justify-center md:justify-start items-center rounded-lg hover:bg-gray-100 hover:bg-opacity-25 ${active && pathIs("/work/contact") ? "bg-indigo-500 bg-opacity-20 text-indigo-500" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ChatIcon, { className: "h-5 w-5 opacity-75" }, void 0, !1, {
              fileName: "app/components/Sidebar/index.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "leading-none md:ml-4 mt-1 md:mt-0 text-gray-200", children: "Get in touch" }, void 0, !1, {
              fileName: "app/components/Sidebar/index.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Sidebar/index.tsx",
          lineNumber: 69,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Sidebar/index.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      track ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "md:hidden absolute right-0 top-1/2 transform -translate-y-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "button",
        {
          "aria-label": "See currently playing track",
          className: "block bg-indigo-500 bg-opacity-20 hover:bg-opacity-30 transition-colors text-indigo-500 rounded-full p-2",
          onClick: () => setTrackOpen((p) => !p),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(MusicIcon, { className: "block h-5 w-5 opacity-75 -mr-[2px] -mb-[2px] motion-safe:animate-pulse" }, void 0, !1, {
            fileName: "app/components/Sidebar/index.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Sidebar/index.tsx",
          lineNumber: 88,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Sidebar/index.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/components/Sidebar/index.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Sidebar/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    track ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CurrentTrack, { open: trackOpen, track }, void 0, !1, {
      fileName: "app/components/Sidebar/index.tsx",
      lineNumber: 100,
      columnNumber: 16
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/Sidebar/index.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

// app/routes/work.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader3 = async () => ({
  track: await loadTrack()
});
function Work() {
  let { track } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Sidebar, { track }, void 0, !1, {
      fileName: "app/routes/work.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "md:ml-64 bg-gray-900 min-h-screen pb-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "max-w-4xl w-11/12 mx-auto pt-16 pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
      fileName: "app/routes/work.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/work.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/work.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/work.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/music/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Music2,
  loader: () => loader4,
  meta: () => meta2
});
var import_react9 = require("@remix-run/react");

// mdx:components/music/intro.mdx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function MDXContent(props = {}) {
  let _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "markdown", children: "Some of my favourite albums." }, void 0, !1, {
    fileName: "mdx:components/music/intro.mdx",
    lineNumber: 5,
    columnNumber: 22
  }, this) }, void 0, !1, {
    fileName: "mdx:components/music/intro.mdx",
    lineNumber: 5,
    columnNumber: 20
  }, this);
  return MDXLayout ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(MDXLayout, { ...props, children: _content }, void 0, !1, {
    fileName: "mdx:components/music/intro.mdx",
    lineNumber: 6,
    columnNumber: 22
  }, this) : _content;
}
var intro_default = MDXContent;
var headers = typeof attributes < "u" && attributes.headers, meta = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// app/lib/shuffle.ts
var shuffle = (arr) => arr.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);

// app/lib/loadAlbums.ts
var loadAlbums = async (page = 1) => await (await fetch(
  `http://api.jaketaylor.co/api/albums?page=${page}`
)).json(), loadAllAlbums = async () => {
  let firstPage = await loadAlbums(1), albums = firstPage.data;
  for (let i = 2; i <= firstPage.last_page; i++) {
    let nextPage = await loadAlbums(i);
    albums.push(...nextPage.data);
  }
  return shuffle(albums);
};

// app/lib/redis.server.ts
var import_redis = require("redis"), import_dotenv = require("dotenv");
(0, import_dotenv.config)();
var client = global.client;
client || (client = global.client = (0, import_redis.createClient)({
  url: process.env.REDIS_URL
}));
(async () => client.isOpen || (client.on("error", (err) => {
  console.log("Redis client error", err);
}), await client.connect()))();
var cache = async (key, ttl, create) => {
  let val = await client.get(key);
  if (val)
    return JSON.parse(val);
  let newVal = await create();
  return await client.set(key, JSON.stringify(newVal), {
    EX: ttl
  }), newVal;
};

// app/routes/music/_index.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function meta2() {
  return [
    {
      title: "Music \u2014 Jake Taylor"
    },
    {
      name: "description",
      content: "My favourite albums."
    }
  ];
}
var loader4 = async () => ({ albums: await cache("albums", 86400, loadAllAlbums) });
function Music2() {
  let { albums } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(intro_default, {}, void 0, !1, {
      fileName: "app/routes/music/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 mt-4", children: albums.map((album) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { href: album.link, target: "_blank", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-2 w-full aspect-w-1 aspect-h-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: album.image, alt: album.name }, void 0, !1, {
        fileName: "app/routes/music/_index.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/music/_index.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "leading-none text-trueGray-200 font-semibold", children: album.name }, void 0, !1, {
        fileName: "app/routes/music/_index.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "leading-none text-trueGray-200 text-opacity-80 mt-1 italic", children: album.artist }, void 0, !1, {
        fileName: "app/routes/music/_index.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ] }, album.link, !0, {
      fileName: "app/routes/music/_index.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/music/_index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/music/_index.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/blog/tagged.$tag.tsx
var tagged_tag_exports = {};
__export(tagged_tag_exports, {
  default: () => TaggedBlogPosts,
  loader: () => loader5
});
var import_react11 = require("@remix-run/react"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/components/blogs/List.tsx
var import_react10 = require("@remix-run/react"), import_date_fns = require("date-fns"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), BlogList = ({ blogs }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { className: "text-gray-100", children: blogs.map((blog) => {
  let created = (0, import_date_fns.parseISO)(blog.created), updated = (0, import_date_fns.parseISO)(blog.updated), different = Math.abs((0, import_date_fns.differenceInMinutes)(created, updated)) > 5;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { className: "border-b-2 border-b-gray-700 pb-5 mb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react10.Link, { to: `/blog/${blog.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-4xl text-gray-200 font-black mb-2", children: blog.title }, void 0, !1, {
      fileName: "app/components/blogs/List.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/blogs/List.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-lg mb-2", children: [
      blog.excerpt,
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/blogs/List.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react10.Link, { to: `/blog/${blog.slug}`, className: "text-indigo-400", children: "Read More" }, void 0, !1, {
        fileName: "app/components/blogs/List.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blogs/List.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-sm text-gray-400", children: [
        "Posted",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "span",
          {
            title: (0, import_date_fns.format)(created, "do MMMM yyyy, HH:mm"),
            className: "underline decoration-dotted",
            children: (0, import_date_fns.formatDistanceToNow)(created, { addSuffix: !0 })
          },
          void 0,
          !1,
          {
            fileName: "app/components/blogs/List.tsx",
            lineNumber: 41,
            columnNumber: 15
          },
          this
        ),
        different ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
          ", updated",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "span",
            {
              title: (0, import_date_fns.format)(updated, "do MMMM yyyy, HH:mm"),
              className: "underline decoration-dotted",
              children: (0, import_date_fns.formatDistanceToNow)(updated, { addSuffix: !0 })
            },
            void 0,
            !1,
            {
              fileName: "app/components/blogs/List.tsx",
              lineNumber: 50,
              columnNumber: 19
            },
            this
          ),
          "."
        ] }, void 0, !0, {
          fileName: "app/components/blogs/List.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this) : "."
      ] }, void 0, !0, {
        fileName: "app/components/blogs/List.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      blog.tags.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { className: "flex flex-row flex-wrap gap-2 justify-end", children: blog.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_react10.Link,
        {
          to: `/blog/tagged/${tag}`,
          className: "bg-gradient-to-br from-fuchsia-400 via-fuchsia-500 to-fuchsia-600 px-2 py-1 block leading-none rounded-full text-xs whitespace-nowrap",
          children: tag
        },
        void 0,
        !1,
        {
          fileName: "app/components/blogs/List.tsx",
          lineNumber: 67,
          columnNumber: 21
        },
        this
      ) }, tag, !1, {
        fileName: "app/components/blogs/List.tsx",
        lineNumber: 66,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/components/blogs/List.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/components/blogs/List.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this)
  ] }, blog.slug, !0, {
    fileName: "app/components/blogs/List.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}) }, void 0, !1, {
  fileName: "app/components/blogs/List.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this);

// mdx:routes/blog/first-post.mdx
var first_post_exports = {};
__export(first_post_exports, {
  attributes: () => attributes2,
  default: () => first_post_default,
  filename: () => filename,
  handle: () => handle2,
  headers: () => headers2,
  meta: () => meta3
});

// app/components/blogs/Timestamp.tsx
var import_date_fns2 = require("date-fns"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), Timestamp = ({ date }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: (0, import_date_fns2.format)(date, "do MMMM yyyy 'at' HH:mm") }, void 0, !1, {
  fileName: "app/components/blogs/Timestamp.tsx",
  lineNumber: 9,
  columnNumber: 10
}, this);

// mdx:routes/blog/first-post.mdx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), attributes2 = {
  title: "So, I've built a blog...",
  excerpt: "It's ready to go now, so no excuses, right?",
  tags: "general",
  meta: [{
    title: "So, I've built a blog... \u2014 Jake Taylor's Blog"
  }, {
    name: "description",
    content: "I've built the blog and it's ready to go, now what?"
  }],
  created: /* @__PURE__ */ new Date(1643902883e3),
  updated: /* @__PURE__ */ new Date(1643920657e3)
};
function MDXContent2(props = {}) {
  let _components = Object.assign({
    h1: "h1",
    p: "p",
    em: "em",
    a: "a",
    sup: "sup",
    strong: "strong",
    section: "section",
    hr: "hr",
    ol: "ol",
    li: "li"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "markdown blog", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Timestamp, { date: attributes2.created }, void 0, !1, {
        fileName: "mdx:routes/blog/first-post.mdx",
        lineNumber: 30,
        columnNumber: 53
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.h1, { children: attributes2.title }, void 0, !1, {
        fileName: "mdx:routes/blog/first-post.mdx",
        lineNumber: 30,
        columnNumber: 92
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.p, { children: `I wrote "Start a blog (+ keep it up)" in my Bullet Journal as a goal for 2022. I
don't know why exactly I want a blog, but it's something I've been wanting to do
for a while, so why not bite the bullet? I guess it's a way to get thoughts out,
therapeutic in a sense. It's now February and I've finally set up a blog. I
could have just started writing in a diary, but that doesn't have the same
appeal to it as having a blog online. I guess my inner-web-developer wants to
develop.` }, void 0, !1, {
        fileName: "mdx:routes/blog/first-post.mdx",
        lineNumber: 30,
        columnNumber: 143
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.p, { children: `The only thing left to do is actually write some stuff to put on it. I guess
this is a start. Hopefully this won't be the last time I actually put something
on here, however likely it is that that will be the case.` }, void 0, !1, {
        fileName: "mdx:routes/blog/first-post.mdx",
        lineNumber: 30,
        columnNumber: 666
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.p, { children: [
        `I often have ideas for something to write about, but until now I've never had
anywhere to actually write, so the idea gets forgotten as quickly as it came.
Hopefully having this blog set up will be all I need to actually write when
"inspiration" hits. I suppose I could have written on actual pen and paper, but,
as I mentioned, for some reason I can't explain
(`,
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("a", { href: "https://youtu.be/dvgZkm1xWPE?t=153", target: "_blank", children: `...I know saint
peter won't call my name...` }, void 0, !1, {
          fileName: "mdx:routes/blog/first-post.mdx",
          lineNumber: 30,
          columnNumber: 1305
        }, this),
        `), I don't want to do that. Maybe it's my
atrocious hand writing? Maybe it's because writing on a piece of paper that only
I hold means no one will ever see it, and therefore what's the point in writing
it in the first place? Maybe I actually `,
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.em, { children: "do" }, void 0, !1, {
          fileName: "mdx:routes/blog/first-post.mdx",
          lineNumber: 30,
          columnNumber: 1668
        }, this),
        ` want that privacy?? oh god, oh
fuck,,,,,, i've made a mistake`
      ] }, void 0, !0, {
        fileName: "mdx:routes/blog/first-post.mdx",
        lineNumber: 30,
        columnNumber: 917
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.p, { children: [
        `I don't know what kind of stuff will end up on here, if anything at all. I think
it's most likely to be brain-dump-type content that I think up on the spot,
about things I find humorous, weird, annoying, cool, interesting... I guess kind
of like a diary? maybe? what do people put in their diaries? wait, diaries are
usually private... maybe this `,
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.em, { children: "should" }, void 0, !1, {
          fileName: "mdx:routes/blog/first-post.mdx",
          lineNumber: 30,
          columnNumber: 2160
        }, this),
        " be private lol"
      ] }, void 0, !0, {
        fileName: "mdx:routes/blog/first-post.mdx",
        lineNumber: 30,
        columnNumber: 1790
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.p, { children: [
        `I couldn't even make it through one introductory post before giving up on "good"
grammar and reverting to typing how I type to my friends`,
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.a, { href: "#fn1", className: "footnote-ref", id: "fnref1", role: "doc-noteref", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.sup, { children: "1" }, void 0, !1, {
          fileName: "mdx:routes/blog/first-post.mdx",
          lineNumber: 30,
          columnNumber: 2480
        }, this) }, void 0, !1, {
          fileName: "mdx:routes/blog/first-post.mdx",
          lineNumber: 30,
          columnNumber: 2397
        }, this),
        `. So, fair warning,
there will be absolutely `,
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.strong, { children: "no" }, void 0, !1, {
          fileName: "mdx:routes/blog/first-post.mdx",
          lineNumber: 30,
          columnNumber: 2586
        }, this),
        ` style guide throughout this blog. Anything could
happen...`
      ] }, void 0, !0, {
        fileName: "mdx:routes/blog/first-post.mdx",
        lineNumber: 30,
        columnNumber: 2238
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.p, { children: [
        `If you know me, and found this, and made it this far, and see I've not posted
anything since, please do tell me that I should have posted more recently. It
might just nudge me to keep this up! `,
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("sup", { className: "text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("sup", { children: `however
if reading my blog has made u cringe i dont wanna hear it alright` }, void 0, !1, {
          fileName: "mdx:routes/blog/first-post.mdx",
          lineNumber: 30,
          columnNumber: 2958
        }, this) }, void 0, !1, {
          fileName: "mdx:routes/blog/first-post.mdx",
          lineNumber: 30,
          columnNumber: 2927
        }, this)
      ] }, void 0, !0, {
        fileName: "mdx:routes/blog/first-post.mdx",
        lineNumber: 30,
        columnNumber: 2713
      }, this)
    ] }, void 0, !0, {
      fileName: "mdx:routes/blog/first-post.mdx",
      lineNumber: 30,
      columnNumber: 22
    }, this),
    `
`,
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.section, { className: "footnotes", role: "doc-endnotes", children: [
      `
`,
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.hr, {}, void 0, !1, {
        fileName: "mdx:routes/blog/first-post.mdx",
        lineNumber: 30,
        columnNumber: 3150
      }, this),
      `
`,
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.ol, { children: [
        `
`,
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.li, { id: "fn1", role: "doc-endnote", children: [
          `This has reminded me of a book I've been reading,
`,
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.a, { href: "https://gretchenmcculloch.com/book/", children: '"Because Internet" by Gretchen McCulloch' }, void 0, !1, {
            fileName: "mdx:routes/blog/first-post.mdx",
            lineNumber: 30,
            columnNumber: 3295
          }, this),
          `,
which is super interesting. Maybe I'll write up my thoughts on that one day.`,
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(_components.a, { href: "#fnref1", className: "footnote-back", role: "doc-backlink", children: "\u21A9" }, void 0, !1, {
            fileName: "mdx:routes/blog/first-post.mdx",
            lineNumber: 30,
            columnNumber: 3498
          }, this)
        ] }, void 0, !0, {
          fileName: "mdx:routes/blog/first-post.mdx",
          lineNumber: 30,
          columnNumber: 3196
        }, this),
        `
`
      ] }, void 0, !0, {
        fileName: "mdx:routes/blog/first-post.mdx",
        lineNumber: 30,
        columnNumber: 3174
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/blog/first-post.mdx",
      lineNumber: 30,
      columnNumber: 3081
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/blog/first-post.mdx",
    lineNumber: 30,
    columnNumber: 20
  }, this);
  return MDXLayout ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(MDXLayout, { ...props, children: _content }, void 0, !1, {
    fileName: "mdx:routes/blog/first-post.mdx",
    lineNumber: 31,
    columnNumber: 22
  }, this) : _content;
}
var first_post_default = MDXContent2, filename = "first-post.mdx", headers2 = typeof attributes2 < "u" && attributes2.headers, meta3 = typeof attributes2 < "u" && attributes2.meta, handle2 = typeof attributes2 < "u" && attributes2.handle;

// app/lib/getBlogs.ts
var postFromModule = ({
  filename: filename4,
  attributes: attributes5
}) => {
  var _a;
  return {
    slug: filename4.replace(/\.mdx?$/, ""),
    title: attributes5.title,
    excerpt: attributes5.excerpt,
    created: attributes5.created,
    updated: attributes5.updated,
    tags: ((_a = attributes5.tags) == null ? void 0 : _a.split(",").map((tag) => tag.trim())) ?? [],
    draft: attributes5.draft ?? !1
  };
};
async function getBlogs() {
  return [first_post_exports].map((post) => postFromModule(post)).filter((blog) => !blog.draft);
}

// app/routes/blog/tagged.$tag.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader5 = async ({
  params
}) => {
  (0, import_tiny_invariant.default)(params.tag, "Expected a tag.");
  let tag = params.tag, blogs = await getBlogs();
  return {
    tag,
    blogs: blogs.filter((blog) => blog.tags.includes(tag))
  };
};
function TaggedBlogPosts() {
  let { tag, blogs } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { className: "max-w-prose w-11/12 mx-auto py-8 relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "border-b-2 border-b-gray-700 mb-5 pb-4 text-right", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "text-gray-100 font-black text-xl leading-none", children: "Tagged" }, void 0, !1, {
        fileName: "app/routes/blog/tagged.$tag.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "inline-block bg-gradient-to-br from-fuchsia-400 via-fuchsia-500 to-fuchsia-600 text-transparent text-6xl font-black leading-none bg-clip-text pb-1", children: tag }, void 0, !1, {
        fileName: "app/routes/blog/tagged.$tag.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog/tagged.$tag.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(BlogList, { blogs }, void 0, !1, {
      fileName: "app/routes/blog/tagged.$tag.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/tagged.$tag.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog/tagged.$tag.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/blog/_index.tsx
var index_exports2 = {};
__export(index_exports2, {
  default: () => Blog2,
  loader: () => loader6,
  meta: () => meta4
});
var import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function meta4() {
  return [
    { title: "Blog \u2014 Jake Taylor" },
    {
      name: "description",
      content: "My thoughts on anything that comes to mind."
    }
  ];
}
var loader6 = async () => ({ blogs: await getBlogs() });
function Blog2() {
  let { blogs } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { className: "max-w-prose w-11/12 mx-auto py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(BlogList, { blogs }, void 0, !1, {
      fileName: "app/routes/blog/_index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, !0, {
    fileName: "app/routes/blog/_index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/work/portfolio.tsx
var portfolio_exports = {};
__export(portfolio_exports, {
  default: () => Portfolio,
  meta: () => meta5
});
var import_react13 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function meta5() {
  return [
    {
      title: "Jake Taylor \u2014 Portfolio"
    },
    {
      name: "description",
      content: "Take a look at some of my work. I'm a freelance web/app developer available for hire, get in touch and let's build something together!"
    }
  ];
}
function Portfolio() {
  let location = (0, import_react13.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "h1",
      {
        className: `${location.pathname === "/work/portfolio" ? "text-6xl" : "text-xl text-opacity-75"} font-black text-gray-100 transition-all`,
        children: "Portfolio"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/work/portfolio.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/work/portfolio.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/work/portfolio.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// mdx:routes/work/portfolio/purism.mdx
var purism_exports = {};
__export(purism_exports, {
  attributes: () => attributes3,
  default: () => purism_default,
  filename: () => filename2,
  handle: () => handle3,
  headers: () => headers3,
  meta: () => meta6
});

// app/components/Figure.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), Figure = ({ src, caption, alt = caption }) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("figure", { className: "mt-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { src, className: "rounded-lg", alt }, void 0, !1, {
    fileName: "app/components/Figure.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("figcaption", { className: "text-gray-400 ml-2 mt-1 leading-tight text-sm", children: caption }, void 0, !1, {
    fileName: "app/components/Figure.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Figure.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);

// app/images/portfolio/purism-cover.png
var purism_cover_default = "/build/_assets/purism-cover-FSULMIN3.png";

// app/images/portfolio/purism-overlap.png
var purism_overlap_default = "/build/_assets/purism-overlap-ZIDBOBK3.png";

// app/images/portfolio/purism-shop.png
var purism_shop_default = "/build/_assets/purism-shop-MWVZRSNP.png";

// mdx:routes/work/portfolio/purism.mdx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), attributes3 = {
  meta: [{
    title: "Jake Taylor \u2014 Purism"
  }, {
    name: "description",
    content: "My work on wearepurism.com"
  }]
};
function MDXContent3(props = {}) {
  let _components = Object.assign({
    h1: "h1",
    h3: "h3",
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "markdown", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.h1, { children: "Purism" }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 48
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.h3, { children: "Overview" }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 91
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.p, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.a, { href: "https://wearepurism.com/", children: "Purism" }, void 0, !1, {
        fileName: "mdx:routes/work/portfolio/purism.mdx",
        lineNumber: 22,
        columnNumber: 151
      }, this),
      ` is an online clothes store that is built on
the belief that online shopping shouldn't be a mystery.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 136
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.p, { children: `I worked with Purism to help build their website. This was a fresh project, and
I was enlisted for frontend development. I was given Adobe XD mockups and
started to convert them into real webpages, using Next JS.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 345
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Figure, { src: purism_cover_default, alt: "Screenshot of the above-the-fold content of the purism home page.", caption: "The Purism home page." }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 594
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.p, { children: `The designs for this site were great, and created some interesting challenges
for me on the frontend, with some weird layouts of overlapping images in places.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 723
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Figure, { src: purism_overlap_default, alt: "Screenshot of purism home page demonstrating an unusual layout.", caption: "An example of an overlapping image layout." }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 917
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.p, { children: `As well as simply converting mockups into HTML, there was some more complex work
involved, namely implementing infinite scroll for the shop pages (which also
follow a loose structure).` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 1067
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Figure, { src: purism_shop_default, alt: "Screenshot of purism shop page.", caption: "The infinite loading shop page." }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 1288
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.p, { children: `The content for the site comes from a custom CMS, built by other developers on
the Purism team who I worked with. There was also some integration with
firebase.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 1392
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.h3, { children: "Tech Details" }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 1589
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.p, { children: [
      "This site was built with ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.a, { href: "https://reactjs.org", children: "React" }, void 0, !1, {
        fileName: "mdx:routes/work/portfolio/purism.mdx",
        lineNumber: 22,
        columnNumber: 1682
      }, this),
      `, using
`,
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.a, { href: "https://nextjs.org", children: "NextJS" }, void 0, !1, {
        fileName: "mdx:routes/work/portfolio/purism.mdx",
        lineNumber: 22,
        columnNumber: 1762
      }, this),
      `. Styling was done with
`,
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.a, { href: "https://tailwindcss.com", children: "Tailwind" }, void 0, !1, {
        fileName: "mdx:routes/work/portfolio/purism.mdx",
        lineNumber: 22,
        columnNumber: 1858
      }, this),
      `. These tools all work great together,
allowing me to work quickly and iterate rapidly.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 1638
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.p, { children: "Backend stuff was done via a custom CMS, and Firebase services." }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 2040
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.h3, { children: "Conclusion" }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 2138
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(_components.p, { children: `This was a fun project to work on, with a few interesting challenges we had to
work to solve.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/purism.mdx",
      lineNumber: 22,
      columnNumber: 2185
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/work/portfolio/purism.mdx",
    lineNumber: 22,
    columnNumber: 22
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/work/portfolio/purism.mdx",
    lineNumber: 22,
    columnNumber: 20
  }, this);
  return MDXLayout ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(MDXLayout, { ...props, children: _content }, void 0, !1, {
    fileName: "mdx:routes/work/portfolio/purism.mdx",
    lineNumber: 23,
    columnNumber: 22
  }, this) : _content;
}
var purism_default = MDXContent3, filename2 = "purism.mdx", headers3 = typeof attributes3 < "u" && attributes3.headers, meta6 = typeof attributes3 < "u" && attributes3.meta, handle3 = typeof attributes3 < "u" && attributes3.handle;

// app/routes/work/portfolio/index.tsx
var portfolio_exports2 = {};
__export(portfolio_exports2, {
  default: () => Portfolio2
});
var import_react14 = require("@remix-run/react");

// app/images/portfolio/vwl-cover.png
var vwl_cover_default = "/build/_assets/vwl-cover-P2ZGUVYV.png";

// app/routes/work/portfolio/index.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Portfolio2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "text-xl text-gray-300 mt-6", children: "Below is some of my work, please look around." }, void 0, !1, {
      fileName: "app/routes/work/portfolio/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        import_react14.Link,
        {
          to: "/work/portfolio/vwl",
          className: "bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 rounded-lg overflow-hidden transition-transform md:transform md:hover:scale-105 flex flex-col",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex-grow flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: vwl_cover_default }, void 0, !1, {
              fileName: "app/routes/work/portfolio/index.tsx",
              lineNumber: 19,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/work/portfolio/index.tsx",
              lineNumber: 18,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "px-4 pb-2 mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h6", { className: "text-gray-200 font-bold text-xl", children: "Veterinary Wound Library" }, void 0, !1, {
              fileName: "app/routes/work/portfolio/index.tsx",
              lineNumber: 23,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/work/portfolio/index.tsx",
              lineNumber: 22,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/work/portfolio/index.tsx",
          lineNumber: 14,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        import_react14.Link,
        {
          to: "/work/portfolio/purism",
          className: "bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-400 rounded-lg overflow-hidden transition-transform md:transform md:hover:scale-105 flex flex-col",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex-grow flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: purism_cover_default, className: "w-11/12" }, void 0, !1, {
              fileName: "app/routes/work/portfolio/index.tsx",
              lineNumber: 34,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/work/portfolio/index.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "px-4 pb-2 mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h6", { className: "text-gray-200 font-bold text-xl", children: "Purism" }, void 0, !1, {
              fileName: "app/routes/work/portfolio/index.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/work/portfolio/index.tsx",
              lineNumber: 37,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/work/portfolio/index.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        import_react14.Link,
        {
          to: "/work/contact",
          className: "block p-12 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-lg overflow-hidden transition-transform md:transform md:hover:scale-105",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h6", { className: "text-gray-800 font-bold text-2xl leading-6", children: "Maybe your site should be here?" }, void 0, !1, {
              fileName: "app/routes/work/portfolio/index.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "leading-4 text-gray-700 mt-4", children: "Get in touch, let's build something together." }, void 0, !1, {
              fileName: "app/routes/work/portfolio/index.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/work/portfolio/index.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/work/portfolio/index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/work/portfolio/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// mdx:routes/work/portfolio/vwl.mdx
var vwl_exports = {};
__export(vwl_exports, {
  attributes: () => attributes4,
  default: () => vwl_default,
  filename: () => filename3,
  handle: () => handle4,
  headers: () => headers4,
  meta: () => meta7
});

// app/images/portfolio/vwl-index.png
var vwl_index_default = "/build/_assets/vwl-index-M5VOVMMR.png";

// app/images/portfolio/vwl-replies.png
var vwl_replies_default = "/build/_assets/vwl-replies-DX2OYXH7.png";

// app/images/portfolio/vwl-ios.png
var vwl_ios_default = "/build/_assets/vwl-ios-5VJT5EYQ.png";

// mdx:routes/work/portfolio/vwl.mdx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), attributes4 = {
  meta: [{
    title: "Jake Taylor \u2014 Veterinary Wound Library"
  }, {
    name: "description",
    content: "My write up on my work with the Veterinary Wound Library."
  }]
};
function MDXContent4(props = {}) {
  let _components = Object.assign({
    h1: "h1",
    h3: "h3",
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "markdown", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.h1, { children: "Veterinary Wound Library" }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 48
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.h3, { children: "Overview" }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 109
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: [
      "The ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.a, { href: "https://www.vetwoundlibrary.com", children: "Veterinary Wound Library (VWL)" }, void 0, !1, {
        fileName: "mdx:routes/work/portfolio/vwl.mdx",
        lineNumber: 22,
        columnNumber: 177
      }, this),
      ` is a
membership based resource that is dedicated to helping Vets, Techs, and Nurses
better manage their patients wounds. They offer several services, including
online training, case support, and a growing library of educational content.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 154
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: `I worked with VWL to improve their case support service. Their existing solution
was a very manual process that required customers and specialists to email back
and forth, and depended on several third party integrations.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 541
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: `VWL gave me a great spec explaining what they needed, but I was left in charge
of many design decisions. They were very welcoming of my ideas, and I think the
end product speaks volumes to the collaborative/iterative approach.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 799
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: `I integrated a unified case support system into their existing Laravel site. The
case support area is for both customers and specialists to manage their
opened/assigned cases.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 1062
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Figure, { src: vwl_index_default, alt: "Screenshot of VWL Case support dashboard.", caption: "Any data in screenshots is faked as the real system contains sensitive information." }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 1274
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: `I helped come up with a system that would allow any user to easily find the case
they're interested in, and quickly post questions, and see historic
correspondence.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 1441
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Figure, { src: vwl_replies_default, alt: "Screenshot of an individual case within VWL.", caption: "Any data in screenshots is faked as the real system contains sensitive information." }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 1642
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: `As well as the web app, I also built a corresponding React Native application
for both iOS and Android. It provides the same functionality as the website, but
allows users to correspond on cases when they're on the move.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 1816
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Figure, { src: vwl_ios_default, alt: "Screenshot of the VWL iOS app.", caption: "Any data in screenshots is faked as the real system contains sensitive information." }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 2073
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.h3, { children: "Tech Details" }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 2229
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: `All of this work was done with Laravel & React. The mobile app was built
with React Native, so a lot of the Typescript code was shared between the
projects.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 2278
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: `VWL were already using Laravel for their existing site, so the backend for the
case support system was built into that. I liaised with their in-house dev, and
we decided that we should also rebuild their existing static "member area" with
a React version, for easier integration with other tools they plan to build in
the future.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 2471
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: `State management for the case support system was done using Redux, which made
sense for this system as there was a lot of relational data to render out, and
lots of navigating around\u2014having stuff cached makes the experience much
snappier. Using Redux made it easy to implement live updates, so whenever any
changes are made to the backend, the frontend reflects that nearly immediately,
without the need to reload the page. This works in the app, too!` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 2841
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: `All the case responses go through Laravels event/notification systems, so we
enabled push notifications and/or email alerts for certain events.` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 3332
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.h3, { children: "Conclusion" }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 3511
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(_components.p, { children: `This was a really interesting project to work on, and it was a lot of fun coming
up with ideas and designs to get it completed. I'd happily work with VWL again,
and believe they'd say the same about me!` }, void 0, !1, {
      fileName: "mdx:routes/work/portfolio/vwl.mdx",
      lineNumber: 22,
      columnNumber: 3558
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/work/portfolio/vwl.mdx",
    lineNumber: 22,
    columnNumber: 22
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/work/portfolio/vwl.mdx",
    lineNumber: 22,
    columnNumber: 20
  }, this);
  return MDXLayout ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(MDXLayout, { ...props, children: _content }, void 0, !1, {
    fileName: "mdx:routes/work/portfolio/vwl.mdx",
    lineNumber: 23,
    columnNumber: 22
  }, this) : _content;
}
var vwl_default = MDXContent4, filename3 = "vwl.mdx", headers4 = typeof attributes4 < "u" && attributes4.headers, meta7 = typeof attributes4 < "u" && attributes4.meta, handle4 = typeof attributes4 < "u" && attributes4.handle;

// app/routes/work/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact,
  meta: () => meta8
});
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function meta8() {
  return [
    {
      title: "Jake Taylor \u2014 Contact"
    },
    {
      name: "description",
      content: "Freelance web/app developer available for hire. Get in touch and let's build something together!"
    }
  ];
}
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h1", { className: "text-6xl font-black text-gray-100", children: "Get in touch" }, void 0, !1, {
      fileName: "app/routes/work/contact.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-xl text-gray-300 mt-6", children: "Got a project and need a dev? I'm your guy!" }, void 0, !1, {
      fileName: "app/routes/work/contact.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-xl text-gray-300 mt-4", children: "The best way to get in touch with me is either:" }, void 0, !1, {
      fileName: "app/routes/work/contact.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { className: "list-disc pl-8 mt-2 text-gray-300 text-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: [
        "by emailing me on",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "a",
          {
            href: "mailto:me@jaketaylor.co",
            className: "text-indigo-500 hover:text-indigo-300",
            children: "me@jaketaylor.co"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/work/contact.tsx",
            lineNumber: 32,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/work/contact.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "mt-1", children: [
        "or by messaging me on",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "a",
          {
            href: "https://www.linkedin.com/in/jakewtaylor/",
            className: "text-indigo-500 hover:text-indigo-300",
            children: "LinkedIn"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/work/contact.tsx",
            lineNumber: 41,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/work/contact.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/work/contact.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-xl text-gray-300 mt-4", children: "I look forward to hearing from you!" }, void 0, !1, {
      fileName: "app/routes/work/contact.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/work/contact.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/work/_index.tsx
var index_exports3 = {};
__export(index_exports3, {
  default: () => Index,
  meta: () => meta9
});
var import_react15 = require("@remix-run/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function meta9() {
  return [
    {
      title: "Jake Taylor \u2014 Freelance, full-stack, web/app developer"
    },
    {
      name: "description",
      content: "Freelance web/app developer available for hire. Get in touch and let's build something together!"
    }
  ];
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-xl text-gray-300", children: "Hey, my name is" }, void 0, !1, {
      fileName: "app/routes/work/_index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "text-6xl font-black text-gray-100", children: "Jake Taylor" }, void 0, !1, {
      fileName: "app/routes/work/_index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-xl text-gray-300 mt-6", children: "I'm a freelance web/app developer available for hire." }, void 0, !1, {
      fileName: "app/routes/work/_index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-xl text-gray-300 mt-4", children: [
      "I have expertise with PHP, Javascript, Typescript, and CSS. I've worked with many tools/frameworks including Laravel, React & React Native, Angular, Vue, SCSS, Tailwind, and many others.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/work/_index.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      "My preferred stack is Laravel with React, or Vue when only small amounts of interactivity are required."
    ] }, void 0, !0, {
      fileName: "app/routes/work/_index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-xl text-gray-300 mt-4", children: [
      "I'm a full-stack developer, meaning I can help you build something fully functional that looks and feels great.",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_react15.Link,
        {
          to: "/work/contact",
          className: "text-indigo-500 hover:text-indigo-300",
          children: "Get in touch and let's work together!"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/work/_index.tsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/work/_index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-xl text-gray-300 mt-4", children: [
      "If you want to see my full experience, please check my",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "a",
        {
          href: "https://www.linkedin.com/in/jakewtaylor/",
          className: "text-indigo-500 hover:text-indigo-300",
          children: "LinkedIn"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/work/_index.tsx",
          lineNumber: 50,
          columnNumber: 9
        },
        this
      ),
      ". If you want to see some code, check my",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "a",
        {
          href: "https://github.com/jakewtaylor",
          className: "text-indigo-500 hover:text-indigo-300",
          children: "GitHub"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/work/_index.tsx",
          lineNumber: 57,
          columnNumber: 9
        },
        this
      ),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/work/_index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-xl text-gray-300 mt-4", children: [
      "If you want to see and read about some of my work, check out my",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_react15.Link,
        {
          to: "/work/portfolio",
          className: "text-indigo-500 hover:text-indigo-300",
          children: "portfolio page"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/work/_index.tsx",
          lineNumber: 68,
          columnNumber: 9
        },
        this
      ),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/work/_index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_react15.Link,
        {
          to: "/work/portfolio",
          className: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-lg overflow-hidden p-4 transition-transform md:transform md:hover:-translate-y-1 md:hover:-rotate-1 md:hover:scale-105",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-gray-200 font-bold text-3xl leading-none", children: "Portfolio" }, void 0, !1, {
              fileName: "app/routes/work/_index.tsx",
              lineNumber: 82,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-gray-200 leading-none mt-1", children: "Some of my work." }, void 0, !1, {
              fileName: "app/routes/work/_index.tsx",
              lineNumber: 85,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/work/_index.tsx",
          lineNumber: 78,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "a",
        {
          href: "https://github.com/jakewtaylor",
          className: "bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-lg overflow-hidden p-4 transition-transform md:transform md:hover:-translate-y-1 md:hover:-rotate-1 md:hover:scale-105",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-gray-200 font-bold text-3xl leading-none", children: "Github" }, void 0, !1, {
              fileName: "app/routes/work/_index.tsx",
              lineNumber: 92,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-gray-200 leading-none mt-1", children: "Some of my projects." }, void 0, !1, {
              fileName: "app/routes/work/_index.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/work/_index.tsx",
          lineNumber: 88,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "a",
        {
          href: "https://www.linkedin.com/in/jakewtaylor/",
          className: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg overflow-hidden p-4 transition-transform md:transform md:hover:-translate-y-1 md:hover:-rotate-1 md:hover:scale-105",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-gray-200 font-bold text-3xl leading-none", children: "LinkedIn" }, void 0, !1, {
              fileName: "app/routes/work/_index.tsx",
              lineNumber: 104,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-gray-200 leading-none mt-1", children: "See my experience." }, void 0, !1, {
              fileName: "app/routes/work/_index.tsx",
              lineNumber: 107,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/work/_index.tsx",
          lineNumber: 100,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/work/_index.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/work/_index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-J7JOU2A3.js", imports: ["/build/_shared/chunk-ZH5Q5KY5.js", "/build/_shared/chunk-GFFF65ZV.js", "/build/_shared/chunk-ITK5S6I7.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-HDQJTP7P.js", "/build/_shared/chunk-NITTFCHE.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-O5VCW2BA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-UPKS5VL2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/_index": { id: "routes/blog/_index", parentId: "routes/blog", path: "_index", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/_index-Y5FVBZL2.js", imports: ["/build/_shared/chunk-NERSTZXE.js", "/build/_shared/chunk-RXEPFUCN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/first-post": { id: "routes/blog/first-post", parentId: "routes/blog", path: "first-post", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/first-post-I2WFLK5X.js", imports: ["/build/_shared/chunk-RXEPFUCN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/tagged.$tag": { id: "routes/blog/tagged.$tag", parentId: "routes/blog", path: "tagged/:tag", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/tagged.$tag-UYJJ7QSV.js", imports: ["/build/_shared/chunk-NERSTZXE.js", "/build/_shared/chunk-RXEPFUCN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-HH5G55D3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/music": { id: "routes/music", parentId: "root", path: "music", index: void 0, caseSensitive: void 0, module: "/build/routes/music-BBNOJLFL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/music/_index": { id: "routes/music/_index", parentId: "routes/music", path: "_index", index: void 0, caseSensitive: void 0, module: "/build/routes/music/_index-X7XVHVJU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-Y7KKHVIQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work/_index": { id: "routes/work/_index", parentId: "routes/work", path: "_index", index: void 0, caseSensitive: void 0, module: "/build/routes/work/_index-5OLUODEE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work/contact": { id: "routes/work/contact", parentId: "routes/work", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/work/contact-KW2Q64C4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work/portfolio": { id: "routes/work/portfolio", parentId: "routes/work", path: "portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/work/portfolio-7AVSBMFY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work/portfolio/index": { id: "routes/work/portfolio/index", parentId: "routes/work/portfolio", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/work/portfolio/index-O5TZTBDD.js", imports: ["/build/_shared/chunk-HHBRKSVR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work/portfolio/purism": { id: "routes/work/portfolio/purism", parentId: "routes/work/portfolio", path: "purism", index: void 0, caseSensitive: void 0, module: "/build/routes/work/portfolio/purism-HNXXN3BD.js", imports: ["/build/_shared/chunk-HHBRKSVR.js", "/build/_shared/chunk-IFJGMZOU.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work/portfolio/vwl": { id: "routes/work/portfolio/vwl", parentId: "routes/work/portfolio", path: "vwl", index: void 0, caseSensitive: void 0, module: "/build/routes/work/portfolio/vwl-2TDYXB6C.js", imports: ["/build/_shared/chunk-IFJGMZOU.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "fb640dc1", hmr: { runtime: "/build/_shared/chunk-ITK5S6I7.js", timestamp: 1755511874571 }, url: "/build/manifest-FB640DC1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "./public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/music": {
    id: "routes/music",
    parentId: "root",
    path: "music",
    index: void 0,
    caseSensitive: void 0,
    module: music_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/work": {
    id: "routes/work",
    parentId: "root",
    path: "work",
    index: void 0,
    caseSensitive: void 0,
    module: work_exports
  },
  "routes/music/_index": {
    id: "routes/music/_index",
    parentId: "routes/music",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/blog/tagged.$tag": {
    id: "routes/blog/tagged.$tag",
    parentId: "routes/blog",
    path: "tagged/:tag",
    index: void 0,
    caseSensitive: void 0,
    module: tagged_tag_exports
  },
  "routes/blog/first-post": {
    id: "routes/blog/first-post",
    parentId: "routes/blog",
    path: "first-post",
    index: void 0,
    caseSensitive: void 0,
    module: first_post_exports
  },
  "routes/blog/_index": {
    id: "routes/blog/_index",
    parentId: "routes/blog",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports2
  },
  "routes/work/portfolio": {
    id: "routes/work/portfolio",
    parentId: "routes/work",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_exports
  },
  "routes/work/portfolio/purism": {
    id: "routes/work/portfolio/purism",
    parentId: "routes/work/portfolio",
    path: "purism",
    index: void 0,
    caseSensitive: void 0,
    module: purism_exports
  },
  "routes/work/portfolio/index": {
    id: "routes/work/portfolio/index",
    parentId: "routes/work/portfolio",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: portfolio_exports2
  },
  "routes/work/portfolio/vwl": {
    id: "routes/work/portfolio/vwl",
    parentId: "routes/work/portfolio",
    path: "vwl",
    index: void 0,
    caseSensitive: void 0,
    module: vwl_exports
  },
  "routes/work/contact": {
    id: "routes/work/contact",
    parentId: "routes/work",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/work/_index": {
    id: "routes/work/_index",
    parentId: "routes/work",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports3
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
