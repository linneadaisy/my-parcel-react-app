var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$reactdomclient = require("react-dom/client");
var $ltMAx$react = require("react");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire4067"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire4067"] = parcelRequire;
}
parcelRequire.register("66C93", function(module, exports) {
module.exports = Promise.resolve(require("./Button.b85564d6.js")).then(()=>parcelRequire("41HuI"));

});






function $8c7e82c19155fb0c$export$48df8f14ff50dc96() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
        children: "Andy}"
    });
}



const $da11a1101b2a894a$var$Button = /*#__PURE__*/ (0, ($parcel$interopDefault($ltMAx$react))).lazy(()=>(parcelRequire("66C93")));
function $da11a1101b2a894a$export$86fbec116b87613f() {
    let [show, setShow] = (0, ($parcel$interopDefault($ltMAx$react))).useState(false);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                children: "App"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("button", {
                onClick: ()=>setShow(true),
                children: [
                    "Show button is ",
                    show
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $8c7e82c19155fb0c$export$48df8f14ff50dc96), {}),
            show && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$react.Suspense), {
                    fallback: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        children: "Loading..."
                    }),
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($da11a1101b2a894a$var$Button, {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactjsxruntime.Fragment), {
                            children: "Linnea"
                        })
                    })
                })
            })
        ]
    });
}


const $4fa36e821943b400$var$container = document.getElementById("app");
const $4fa36e821943b400$var$root = (0, $ltMAx$reactdomclient.createRoot)($4fa36e821943b400$var$container);
$4fa36e821943b400$var$root.render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $da11a1101b2a894a$export$86fbec116b87613f), {}));


//# sourceMappingURL=index.js.map
