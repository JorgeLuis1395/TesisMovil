function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dislexia-prueba-prediagnostico-module"], {
  /***/
  "./node_modules/jspdf/dist/jspdf.min.js":
  /*!**********************************************!*\
    !*** ./node_modules/jspdf/dist/jspdf.min.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesJspdfDistJspdfMinJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

    var __WEBPACK_AMD_DEFINE_RESULT__;

    !function (t) {
      true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = t, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    }(function () {
      "use strict";
      /** @license
         * jsPDF - PDF Document creation from JavaScript
         * Version 1.5.3 Built on 2018-12-27T14:11:42.696Z
         *                      CommitID d93d28db14
         *
         * Copyright (c) 2010-2016 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
         *               2010 Aaron Spike, https://github.com/acspike
         *               2012 Willow Systems Corporation, willow-systems.com
         *               2012 Pablo Hess, https://github.com/pablohess
         *               2012 Florian Jenett, https://github.com/fjenett
         *               2013 Warren Weckesser, https://github.com/warrenweckesser
         *               2013 Youssef Beddad, https://github.com/lifof
         *               2013 Lee Driscoll, https://github.com/lsdriscoll
         *               2013 Stefan Slonevskiy, https://github.com/stefslon
         *               2013 Jeremy Morel, https://github.com/jmorel
         *               2013 Christoph Hartmann, https://github.com/chris-rock
         *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
         *               2014 James Makes, https://github.com/dollaruw
         *               2014 Diego Casorran, https://github.com/diegocr
         *               2014 Steven Spungin, https://github.com/Flamenco
         *               2014 Kenneth Glassey, https://github.com/Gavvers
         *
         * Licensed under the MIT License
         *
         * Contributor(s):
         *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
         *    kim3er, mfo, alnorth, Flamenco
         */

      function se(t) {
        return (se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(t);
      }

      !function (t) {
        if ("object" !== se(t.console)) {
          t.console = {};

          for (var e, n, r = t.console, i = function i() {}, o = ["memory"], a = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); e = o.pop();) {
            r[e] || (r[e] = {});
          }

          for (; n = a.pop();) {
            r[n] || (r[n] = i);
          }
        }

        var s,
            l,
            h,
            u,
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        void 0 === t.btoa && (t.btoa = function (t) {
          var e,
              n,
              r,
              i,
              o,
              a = 0,
              s = 0,
              l = "",
              h = [];
          if (!t) return t;

          for (; e = (o = t.charCodeAt(a++) << 16 | t.charCodeAt(a++) << 8 | t.charCodeAt(a++)) >> 18 & 63, n = o >> 12 & 63, r = o >> 6 & 63, i = 63 & o, h[s++] = c.charAt(e) + c.charAt(n) + c.charAt(r) + c.charAt(i), a < t.length;) {
            ;
          }

          l = h.join("");
          var u = t.length % 3;
          return (u ? l.slice(0, u - 3) : l) + "===".slice(u || 3);
        }), void 0 === t.atob && (t.atob = function (t) {
          var e,
              n,
              r,
              i,
              o,
              a,
              s = 0,
              l = 0,
              h = [];
          if (!t) return t;

          for (t += ""; e = (a = c.indexOf(t.charAt(s++)) << 18 | c.indexOf(t.charAt(s++)) << 12 | (i = c.indexOf(t.charAt(s++))) << 6 | (o = c.indexOf(t.charAt(s++)))) >> 16 & 255, n = a >> 8 & 255, r = 255 & a, h[l++] = 64 == i ? String.fromCharCode(e) : 64 == o ? String.fromCharCode(e, n) : String.fromCharCode(e, n, r), s < t.length;) {
            ;
          }

          return h.join("");
        }), Array.prototype.map || (Array.prototype.map = function (t) {
          if (null == this || "function" != typeof t) throw new TypeError();

          for (var e = Object(this), n = e.length >>> 0, r = new Array(n), i = 1 < arguments.length ? arguments[1] : void 0, o = 0; o < n; o++) {
            o in e && (r[o] = t.call(i, e[o], o, e));
          }

          return r;
        }), Array.isArray || (Array.isArray = function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }), Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
          if (null == this || "function" != typeof t) throw new TypeError();

          for (var n = Object(this), r = n.length >>> 0, i = 0; i < r; i++) {
            i in n && t.call(e, n[i], i, n);
          }
        }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
          value: function value(t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var e = Object(this),
                n = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError("predicate must be a function");

            for (var r = arguments[1], i = 0; i < n;) {
              var o = e[i];
              if (t.call(r, o, i, e)) return o;
              i++;
            }
          },
          configurable: !0,
          writable: !0
        }), Object.keys || (Object.keys = (s = Object.prototype.hasOwnProperty, l = !{
          toString: null
        }.propertyIsEnumerable("toString"), u = (h = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function (t) {
          if ("object" !== se(t) && ("function" != typeof t || null === t)) throw new TypeError();
          var e,
              n,
              r = [];

          for (e in t) {
            s.call(t, e) && r.push(e);
          }

          if (l) for (n = 0; n < u; n++) {
            s.call(t, h[n]) && r.push(h[n]);
          }
          return r;
        })), "function" != typeof Object.assign && (Object.assign = function (t) {
          if (null == t) throw new TypeError("Cannot convert undefined or null to object");
          t = Object(t);

          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            if (null != n) for (var r in n) {
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
          }

          return t;
        }), String.prototype.trim || (String.prototype.trim = function () {
          return this.replace(/^\s+|\s+$/g, "");
        }), String.prototype.trimLeft || (String.prototype.trimLeft = function () {
          return this.replace(/^\s+/g, "");
        }), String.prototype.trimRight || (String.prototype.trimRight = function () {
          return this.replace(/\s+$/g, "");
        }), Number.isInteger = Number.isInteger || function (t) {
          return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
        };
      }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")());

      var t,
          e,
          n,
          _,
          l,
          F,
          P,
          p,
          d,
          k,
          a,
          o,
          s,
          h,
          u,
          c,
          r,
          i,
          f,
          g,
          m,
          y,
          v,
          w,
          b,
          x,
          I,
          C,
          B,
          N,
          L,
          A,
          S,
          j,
          E,
          M,
          O,
          q,
          T,
          R,
          D,
          U,
          z,
          H,
          W,
          V,
          G,
          Y,
          J,
          X,
          K,
          Z,
          Q,
          $,
          tt,
          et,
          nt,
          rt,
          it,
          ot,
          at,
          st,
          lt = function (ie) {
        function oe(o) {
          if ("object" !== se(o)) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
          var a = {};
          this.subscribe = function (t, e, n) {
            if (n = n || !1, "string" != typeof t || "function" != typeof e || "boolean" != typeof n) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
            a.hasOwnProperty(t) || (a[t] = {});
            var r = Math.random().toString(35);
            return a[t][r] = [e, !!n], r;
          }, this.unsubscribe = function (t) {
            for (var e in a) {
              if (a[e][t]) return delete a[e][t], 0 === Object.keys(a[e]).length && delete a[e], !0;
            }

            return !1;
          }, this.publish = function (t) {
            if (a.hasOwnProperty(t)) {
              var e = Array.prototype.slice.call(arguments, 1),
                  n = [];

              for (var r in a[t]) {
                var i = a[t][r];

                try {
                  i[0].apply(o, e);
                } catch (t) {
                  ie.console && console.error("jsPDF PubSub Error", t.message, t);
                }

                i[1] && n.push(r);
              }

              n.length && n.forEach(this.unsubscribe);
            }
          }, this.getTopics = function () {
            return a;
          };
        }

        function ae(t, e, i, n) {
          var r = {},
              o = [],
              a = 1;
          "object" === se(t) && (t = (r = t).orientation, e = r.unit || e, i = r.format || i, n = r.compress || r.compressPdf || n, o = r.filters || (!0 === n ? ["FlateEncode"] : o), a = "number" == typeof r.userUnit ? Math.abs(r.userUnit) : 1), e = e || "mm", t = ("" + (t || "P")).toLowerCase();
          var s = r.putOnlyUsedFonts || !0,
              K = {},
              l = {
            internal: {},
            __private__: {}
          };
          l.__private__.PubSub = oe;

          var h = "1.3",
              u = l.__private__.getPdfVersion = function () {
            return h;
          },
              c = (l.__private__.setPdfVersion = function (t) {
            h = t;
          }, {
            a0: [2383.94, 3370.39],
            a1: [1683.78, 2383.94],
            a2: [1190.55, 1683.78],
            a3: [841.89, 1190.55],
            a4: [595.28, 841.89],
            a5: [419.53, 595.28],
            a6: [297.64, 419.53],
            a7: [209.76, 297.64],
            a8: [147.4, 209.76],
            a9: [104.88, 147.4],
            a10: [73.7, 104.88],
            b0: [2834.65, 4008.19],
            b1: [2004.09, 2834.65],
            b2: [1417.32, 2004.09],
            b3: [1000.63, 1417.32],
            b4: [708.66, 1000.63],
            b5: [498.9, 708.66],
            b6: [354.33, 498.9],
            b7: [249.45, 354.33],
            b8: [175.75, 249.45],
            b9: [124.72, 175.75],
            b10: [87.87, 124.72],
            c0: [2599.37, 3676.54],
            c1: [1836.85, 2599.37],
            c2: [1298.27, 1836.85],
            c3: [918.43, 1298.27],
            c4: [649.13, 918.43],
            c5: [459.21, 649.13],
            c6: [323.15, 459.21],
            c7: [229.61, 323.15],
            c8: [161.57, 229.61],
            c9: [113.39, 161.57],
            c10: [79.37, 113.39],
            dl: [311.81, 623.62],
            letter: [612, 792],
            "government-letter": [576, 756],
            legal: [612, 1008],
            "junior-legal": [576, 360],
            ledger: [1224, 792],
            tabloid: [792, 1224],
            "credit-card": [153, 243]
          }),
              f = (l.__private__.getPageFormats = function () {
            return c;
          }, l.__private__.getPageFormat = function (t) {
            return c[t];
          });

          "string" == typeof i && (i = f(i)), i = i || f("a4");

          var p,
              Z = l.f2 = l.__private__.f2 = function (t) {
            if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2");
            return t.toFixed(2);
          },
              Q = l.__private__.f3 = function (t) {
            if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f3");
            return t.toFixed(3);
          },
              d = "00000000000000000000000000000000",
              g = l.__private__.getFileId = function () {
            return d;
          },
              m = l.__private__.setFileId = function (t) {
            return t = t || "12345678901234567890123456789012".split("").map(function () {
              return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
            }).join(""), d = t;
          };

          l.setFileId = function (t) {
            return m(t), this;
          }, l.getFileId = function () {
            return g();
          };

          var y = l.__private__.convertDateToPDFDate = function (t) {
            var e = t.getTimezoneOffset(),
                n = e < 0 ? "+" : "-",
                r = Math.floor(Math.abs(e / 60)),
                i = Math.abs(e % 60),
                o = [n, P(r), "'", P(i), "'"].join("");
            return ["D:", t.getFullYear(), P(t.getMonth() + 1), P(t.getDate()), P(t.getHours()), P(t.getMinutes()), P(t.getSeconds()), o].join("");
          },
              v = l.__private__.convertPDFDateToDate = function (t) {
            var e = parseInt(t.substr(2, 4), 10),
                n = parseInt(t.substr(6, 2), 10) - 1,
                r = parseInt(t.substr(8, 2), 10),
                i = parseInt(t.substr(10, 2), 10),
                o = parseInt(t.substr(12, 2), 10),
                a = parseInt(t.substr(14, 2), 10);
            parseInt(t.substr(16, 2), 10), parseInt(t.substr(20, 2), 10);
            return new Date(e, n, r, i, o, a, 0);
          },
              w = l.__private__.setCreationDate = function (t) {
            var e;
            if (void 0 === t && (t = new Date()), "object" === se(t) && "[object Date]" === Object.prototype.toString.call(t)) e = y(t);else {
              if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(t)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
              e = t;
            }
            return p = e;
          },
              b = l.__private__.getCreationDate = function (t) {
            var e = p;
            return "jsDate" === t && (e = v(p)), e;
          };

          l.setCreationDate = function (t) {
            return w(t), this;
          }, l.getCreationDate = function (t) {
            return b(t);
          };

          var x,
              N,
              L,
              A,
              S,
              $,
              _,
              F,
              P = l.__private__.padd2 = function (t) {
            return ("0" + parseInt(t)).slice(-2);
          },
              k = !1,
              I = [],
              C = [],
              B = 0,
              tt = (l.__private__.setCustomOutputDestination = function (t) {
            N = t;
          }, l.__private__.resetCustomOutputDestination = function (t) {
            N = void 0;
          }, l.__private__.out = function (t) {
            var e;
            return t = "string" == typeof t ? t : t.toString(), (e = void 0 === N ? k ? I[x] : C : N).push(t), k || (B += t.length + 1), e;
          }),
              j = l.__private__.write = function (t) {
            return tt(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " "));
          },
              E = l.__private__.getArrayBuffer = function (t) {
            for (var e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n); e--;) {
              r[e] = t.charCodeAt(e);
            }

            return n;
          },
              M = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]],
              et = (l.__private__.getStandardFonts = function (t) {
            return M;
          }, r.fontSize || 16),
              O = (l.__private__.setFontSize = l.setFontSize = function (t) {
            return et = t, this;
          }, l.__private__.getFontSize = l.getFontSize = function () {
            return et;
          }),
              nt = r.R2L || !1,
              q = (l.__private__.setR2L = l.setR2L = function (t) {
            return nt = t, this;
          }, l.__private__.getR2L = l.getR2L = function (t) {
            return nt;
          }, l.__private__.setZoomMode = function (t) {
            var e = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
            if (/^\d*\.?\d*\%$/.test(t)) L = t;else if (isNaN(t)) {
              if (-1 === e.indexOf(t)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t + '" is not recognized.');
              L = t;
            } else L = parseInt(t, 10);
          }),
              T = (l.__private__.getZoomMode = function () {
            return L;
          }, l.__private__.setPageMode = function (t) {
            if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(t)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t + '" is not recognized.');
            A = t;
          }),
              R = (l.__private__.getPageMode = function () {
            return A;
          }, l.__private__.setLayoutMode = function (t) {
            if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(t)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t + '" is not recognized.');
            S = t;
          }),
              D = (l.__private__.getLayoutMode = function () {
            return S;
          }, l.__private__.setDisplayMode = l.setDisplayMode = function (t, e, n) {
            return q(t), R(e), T(n), this;
          }, {
            title: "",
            subject: "",
            author: "",
            keywords: "",
            creator: ""
          }),
              U = (l.__private__.getDocumentProperty = function (t) {
            if (-1 === Object.keys(D).indexOf(t)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
            return D[t];
          }, l.__private__.getDocumentProperties = function (t) {
            return D;
          }, l.__private__.setDocumentProperties = l.setProperties = l.setDocumentProperties = function (t) {
            for (var e in D) {
              D.hasOwnProperty(e) && t[e] && (D[e] = t[e]);
            }

            return this;
          }, l.__private__.setDocumentProperty = function (t, e) {
            if (-1 === Object.keys(D).indexOf(t)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
            return D[t] = e;
          }, 0),
              z = [],
              rt = {},
              H = {},
              W = 0,
              V = [],
              G = [],
              it = new oe(l),
              Y = r.hotfixes || [],
              J = l.__private__.newObject = function () {
            var t = X();
            return ot(t, !0), t;
          },
              X = l.__private__.newObjectDeferred = function () {
            return z[++U] = function () {
              return B;
            }, U;
          },
              ot = function ot(t, e) {
            return e = "boolean" == typeof e && e, z[t] = B, e && tt(t + " 0 obj"), t;
          },
              at = l.__private__.newAdditionalObject = function () {
            var t = {
              objId: X(),
              content: ""
            };
            return G.push(t), t;
          },
              st = X(),
              lt = X(),
              ht = l.__private__.decodeColorString = function (t) {
            var e = t.split(" ");

            if (2 === e.length && ("g" === e[1] || "G" === e[1])) {
              var n = parseFloat(e[0]);
              e = [n, n, n, "r"];
            }

            for (var r = "#", i = 0; i < 3; i++) {
              r += ("0" + Math.floor(255 * parseFloat(e[i])).toString(16)).slice(-2);
            }

            return r;
          },
              ut = l.__private__.encodeColorString = function (t) {
            var e;
            "string" == typeof t && (t = {
              ch1: t
            });
            var n = t.ch1,
                r = t.ch2,
                i = t.ch3,
                o = t.ch4,
                a = (t.precision, "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"]);

            if ("string" == typeof n && "#" !== n.charAt(0)) {
              var s = new RGBColor(n);
              if (s.ok) n = s.toHex();else if (!/^\d*\.?\d*$/.test(n)) throw new Error('Invalid color "' + n + '" passed to jsPDF.encodeColorString.');
            }

            if ("string" == typeof n && /^#[0-9A-Fa-f]{3}$/.test(n) && (n = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), "string" == typeof n && /^#[0-9A-Fa-f]{6}$/.test(n)) {
              var l = parseInt(n.substr(1), 16);
              n = l >> 16 & 255, r = l >> 8 & 255, i = 255 & l;
            }

            if (void 0 === r || void 0 === o && n === r && r === i) {
              if ("string" == typeof n) e = n + " " + a[0];else switch (t.precision) {
                case 2:
                  e = Z(n / 255) + " " + a[0];
                  break;

                case 3:
                default:
                  e = Q(n / 255) + " " + a[0];
              }
            } else if (void 0 === o || "object" === se(o)) {
              if (o && !isNaN(o.a) && 0 === o.a) return e = ["1.000", "1.000", "1.000", a[1]].join(" ");
              if ("string" == typeof n) e = [n, r, i, a[1]].join(" ");else switch (t.precision) {
                case 2:
                  e = [Z(n / 255), Z(r / 255), Z(i / 255), a[1]].join(" ");
                  break;

                default:
                case 3:
                  e = [Q(n / 255), Q(r / 255), Q(i / 255), a[1]].join(" ");
              }
            } else if ("string" == typeof n) e = [n, r, i, o, a[2]].join(" ");else switch (t.precision) {
              case 2:
                e = [Z(n / 255), Z(r / 255), Z(i / 255), Z(o / 255), a[2]].join(" ");
                break;

              case 3:
              default:
                e = [Q(n / 255), Q(r / 255), Q(i / 255), Q(o / 255), a[2]].join(" ");
            }
            return e;
          },
              ct = l.__private__.getFilters = function () {
            return o;
          },
              ft = l.__private__.putStream = function (t) {
            var e = (t = t || {}).data || "",
                n = t.filters || ct(),
                r = t.alreadyAppliedFilters || [],
                i = t.addLength1 || !1,
                o = e.length,
                a = {};
            !0 === n && (n = ["FlateEncode"]);
            var s = t.additionalKeyValues || [],
                l = (a = void 0 !== ae.API.processDataByFilters ? ae.API.processDataByFilters(e, n) : {
              data: e,
              reverseChain: []
            }).reverseChain + (Array.isArray(r) ? r.join(" ") : r.toString());
            0 !== a.data.length && (s.push({
              key: "Length",
              value: a.data.length
            }), !0 === i && s.push({
              key: "Length1",
              value: o
            })), 0 != l.length && (l.split("/").length - 1 == 1 ? s.push({
              key: "Filter",
              value: l
            }) : s.push({
              key: "Filter",
              value: "[" + l + "]"
            })), tt("<<");

            for (var h = 0; h < s.length; h++) {
              tt("/" + s[h].key + " " + s[h].value);
            }

            tt(">>"), 0 !== a.data.length && (tt("stream"), tt(a.data), tt("endstream"));
          },
              pt = l.__private__.putPage = function (t) {
            t.mediaBox;
            var e = t.number,
                n = t.data,
                r = t.objId,
                i = t.contentsObjId;
            ot(r, !0);
            V[x].mediaBox.topRightX, V[x].mediaBox.bottomLeftX, V[x].mediaBox.topRightY, V[x].mediaBox.bottomLeftY;
            tt("<</Type /Page"), tt("/Parent " + t.rootDictionaryObjId + " 0 R"), tt("/Resources " + t.resourceDictionaryObjId + " 0 R"), tt("/MediaBox [" + parseFloat(Z(t.mediaBox.bottomLeftX)) + " " + parseFloat(Z(t.mediaBox.bottomLeftY)) + " " + Z(t.mediaBox.topRightX) + " " + Z(t.mediaBox.topRightY) + "]"), null !== t.cropBox && tt("/CropBox [" + Z(t.cropBox.bottomLeftX) + " " + Z(t.cropBox.bottomLeftY) + " " + Z(t.cropBox.topRightX) + " " + Z(t.cropBox.topRightY) + "]"), null !== t.bleedBox && tt("/BleedBox [" + Z(t.bleedBox.bottomLeftX) + " " + Z(t.bleedBox.bottomLeftY) + " " + Z(t.bleedBox.topRightX) + " " + Z(t.bleedBox.topRightY) + "]"), null !== t.trimBox && tt("/TrimBox [" + Z(t.trimBox.bottomLeftX) + " " + Z(t.trimBox.bottomLeftY) + " " + Z(t.trimBox.topRightX) + " " + Z(t.trimBox.topRightY) + "]"), null !== t.artBox && tt("/ArtBox [" + Z(t.artBox.bottomLeftX) + " " + Z(t.artBox.bottomLeftY) + " " + Z(t.artBox.topRightX) + " " + Z(t.artBox.topRightY) + "]"), "number" == typeof t.userUnit && 1 !== t.userUnit && tt("/UserUnit " + t.userUnit), it.publish("putPage", {
              objId: r,
              pageContext: V[e],
              pageNumber: e,
              page: n
            }), tt("/Contents " + i + " 0 R"), tt(">>"), tt("endobj");
            var o = n.join("\n");
            return ot(i, !0), ft({
              data: o,
              filters: ct()
            }), tt("endobj"), r;
          },
              dt = l.__private__.putPages = function () {
            var t,
                e,
                n = [];

            for (t = 1; t <= W; t++) {
              V[t].objId = X(), V[t].contentsObjId = X();
            }

            for (t = 1; t <= W; t++) {
              n.push(pt({
                number: t,
                data: I[t],
                objId: V[t].objId,
                contentsObjId: V[t].contentsObjId,
                mediaBox: V[t].mediaBox,
                cropBox: V[t].cropBox,
                bleedBox: V[t].bleedBox,
                trimBox: V[t].trimBox,
                artBox: V[t].artBox,
                userUnit: V[t].userUnit,
                rootDictionaryObjId: st,
                resourceDictionaryObjId: lt
              }));
            }

            ot(st, !0), tt("<</Type /Pages");
            var r = "/Kids [";

            for (e = 0; e < W; e++) {
              r += n[e] + " 0 R ";
            }

            tt(r + "]"), tt("/Count " + W), tt(">>"), tt("endobj"), it.publish("postPutPages");
          },
              gt = function gt() {
            !function () {
              for (var t in rt) {
                rt.hasOwnProperty(t) && (!1 === s || !0 === s && K.hasOwnProperty(t)) && (e = rt[t], it.publish("putFont", {
                  font: e,
                  out: tt,
                  newObject: J,
                  putStream: ft
                }), !0 !== e.isAlreadyPutted && (e.objectNumber = J(), tt("<<"), tt("/Type /Font"), tt("/BaseFont /" + e.postScriptName), tt("/Subtype /Type1"), "string" == typeof e.encoding && tt("/Encoding /" + e.encoding), tt("/FirstChar 32"), tt("/LastChar 255"), tt(">>"), tt("endobj")));
              }

              var e;
            }(), it.publish("putResources"), ot(lt, !0), tt("<<"), function () {
              for (var t in tt("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), tt("/Font <<"), rt) {
                rt.hasOwnProperty(t) && (!1 === s || !0 === s && K.hasOwnProperty(t)) && tt("/" + t + " " + rt[t].objectNumber + " 0 R");
              }

              tt(">>"), tt("/XObject <<"), it.publish("putXobjectDict"), tt(">>");
            }(), tt(">>"), tt("endobj"), it.publish("postPutResources");
          },
              mt = function mt(t, e, n) {
            H.hasOwnProperty(e) || (H[e] = {}), H[e][n] = t;
          },
              yt = function yt(t, e, n, r, i) {
            i = i || !1;
            var o = "F" + (Object.keys(rt).length + 1).toString(10),
                a = {
              id: o,
              postScriptName: t,
              fontName: e,
              fontStyle: n,
              encoding: r,
              isStandardFont: i,
              metadata: {}
            };
            return it.publish("addFont", {
              font: a,
              instance: this
            }), void 0 !== o && (rt[o] = a, mt(o, e, n)), o;
          },
              vt = l.__private__.pdfEscape = l.pdfEscape = function (t, e) {
            return function (t, e) {
              var n, r, i, o, a, s, l, h, u;

              if (i = (e = e || {}).sourceEncoding || "Unicode", a = e.outputEncoding, (e.autoencode || a) && rt[$].metadata && rt[$].metadata[i] && rt[$].metadata[i].encoding && (o = rt[$].metadata[i].encoding, !a && rt[$].encoding && (a = rt[$].encoding), !a && o.codePages && (a = o.codePages[0]), "string" == typeof a && (a = o[a]), a)) {
                for (l = !1, s = [], n = 0, r = t.length; n < r; n++) {
                  (h = a[t.charCodeAt(n)]) ? s.push(String.fromCharCode(h)) : s.push(t[n]), s[n].charCodeAt(0) >> 8 && (l = !0);
                }

                t = s.join("");
              }

              for (n = t.length; void 0 === l && 0 !== n;) {
                t.charCodeAt(n - 1) >> 8 && (l = !0), n--;
              }

              if (!l) return t;

              for (s = e.noBOM ? [] : [254, 255], n = 0, r = t.length; n < r; n++) {
                if ((u = (h = t.charCodeAt(n)) >> 8) >> 8) throw new Error("Character at position " + n + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                s.push(u), s.push(h - (u << 8));
              }

              return String.fromCharCode.apply(void 0, s);
            }(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
          },
              wt = l.__private__.beginPage = function (t, e) {
            var n,
                r = "string" == typeof e && e.toLowerCase();

            if ("string" == typeof t && (n = f(t.toLowerCase())) && (t = n[0], e = n[1]), Array.isArray(t) && (e = t[1], t = t[0]), (isNaN(t) || isNaN(e)) && (t = i[0], e = i[1]), r) {
              switch (r.substr(0, 1)) {
                case "l":
                  t < e && (r = "s");
                  break;

                case "p":
                  e < t && (r = "s");
              }

              "s" === r && (n = t, t = e, e = n);
            }

            (14400 < t || 14400 < e) && (console.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), t = Math.min(14400, t), e = Math.min(14400, e)), i = [t, e], k = !0, I[++W] = [], V[W] = {
              objId: 0,
              contentsObjId: 0,
              userUnit: Number(a),
              artBox: null,
              bleedBox: null,
              cropBox: null,
              trimBox: null,
              mediaBox: {
                bottomLeftX: 0,
                bottomLeftY: 0,
                topRightX: Number(t),
                topRightY: Number(e)
              }
            }, xt(W);
          },
              bt = function bt() {
            wt.apply(this, arguments), Dt(Rt), tt(Jt), 0 !== te && tt(te + " J"), 0 !== ne && tt(ne + " j"), it.publish("addPage", {
              pageNumber: W
            });
          },
              xt = function xt(t) {
            0 < t && t <= W && (x = t);
          },
              Nt = l.__private__.getNumberOfPages = l.getNumberOfPages = function () {
            return I.length - 1;
          },
              Lt = function Lt(t, e, n) {
            var r,
                i = void 0;
            return n = n || {}, t = void 0 !== t ? t : rt[$].fontName, e = void 0 !== e ? e : rt[$].fontStyle, r = t.toLowerCase(), void 0 !== H[r] && void 0 !== H[r][e] ? i = H[r][e] : void 0 !== H[t] && void 0 !== H[t][e] ? i = H[t][e] : !1 === n.disableWarning && console.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."), i || n.noFallback || null == (i = H.times[e]) && (i = H.times.normal), i;
          },
              At = l.__private__.putInfo = function () {
            for (var t in J(), tt("<<"), tt("/Producer (jsPDF " + ae.version + ")"), D) {
              D.hasOwnProperty(t) && D[t] && tt("/" + t.substr(0, 1).toUpperCase() + t.substr(1) + " (" + vt(D[t]) + ")");
            }

            tt("/CreationDate (" + p + ")"), tt(">>"), tt("endobj");
          },
              St = l.__private__.putCatalog = function (t) {
            var e = (t = t || {}).rootDictionaryObjId || st;

            switch (J(), tt("<<"), tt("/Type /Catalog"), tt("/Pages " + e + " 0 R"), L || (L = "fullwidth"), L) {
              case "fullwidth":
                tt("/OpenAction [3 0 R /FitH null]");
                break;

              case "fullheight":
                tt("/OpenAction [3 0 R /FitV null]");
                break;

              case "fullpage":
                tt("/OpenAction [3 0 R /Fit]");
                break;

              case "original":
                tt("/OpenAction [3 0 R /XYZ null null 1]");
                break;

              default:
                var n = "" + L;
                "%" === n.substr(n.length - 1) && (L = parseInt(L) / 100), "number" == typeof L && tt("/OpenAction [3 0 R /XYZ null null " + Z(L) + "]");
            }

            switch (S || (S = "continuous"), S) {
              case "continuous":
                tt("/PageLayout /OneColumn");
                break;

              case "single":
                tt("/PageLayout /SinglePage");
                break;

              case "two":
              case "twoleft":
                tt("/PageLayout /TwoColumnLeft");
                break;

              case "tworight":
                tt("/PageLayout /TwoColumnRight");
            }

            A && tt("/PageMode /" + A), it.publish("putCatalog"), tt(">>"), tt("endobj");
          },
              _t = l.__private__.putTrailer = function () {
            tt("trailer"), tt("<<"), tt("/Size " + (U + 1)), tt("/Root " + U + " 0 R"), tt("/Info " + (U - 1) + " 0 R"), tt("/ID [ <" + d + "> <" + d + "> ]"), tt(">>");
          },
              Ft = l.__private__.putHeader = function () {
            tt("%PDF-" + h), tt("%ºß¬à");
          },
              Pt = l.__private__.putXRef = function () {
            var t = 1,
                e = "0000000000";

            for (tt("xref"), tt("0 " + (U + 1)), tt("0000000000 65535 f "), t = 1; t <= U; t++) {
              "function" == typeof z[t] ? tt((e + z[t]()).slice(-10) + " 00000 n ") : void 0 !== z[t] ? tt((e + z[t]).slice(-10) + " 00000 n ") : tt("0000000000 00000 n ");
            }
          },
              kt = l.__private__.buildDocument = function () {
            k = !1, B = U = 0, C = [], z = [], G = [], st = X(), lt = X(), it.publish("buildDocument"), Ft(), dt(), function () {
              it.publish("putAdditionalObjects");

              for (var t = 0; t < G.length; t++) {
                var e = G[t];
                ot(e.objId, !0), tt(e.content), tt("endobj");
              }

              it.publish("postPutAdditionalObjects");
            }(), gt(), At(), St();
            var t = B;
            return Pt(), _t(), tt("startxref"), tt("" + t), tt("%%EOF"), k = !0, C.join("\n");
          },
              It = l.__private__.getBlob = function (t) {
            return new Blob([E(t)], {
              type: "application/pdf"
            });
          },
              Ct = l.output = l.__private__.output = ((F = function F(t, e) {
            e = e || {};
            var n = kt();

            switch ("string" == typeof e ? e = {
              filename: e
            } : e.filename = e.filename || "generated.pdf", t) {
              case void 0:
                return n;

              case "save":
                l.save(e.filename);
                break;

              case "arraybuffer":
                return E(n);

              case "blob":
                return It(n);

              case "bloburi":
              case "bloburl":
                if (void 0 !== ie.URL && "function" == typeof ie.URL.createObjectURL) return ie.URL && ie.URL.createObjectURL(It(n)) || void 0;
                console.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                break;

              case "datauristring":
              case "dataurlstring":
                return "data:application/pdf;filename=" + e.filename + ";base64," + btoa(n);

              case "dataurlnewwindow":
                var r = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring") + '"></iframe></body></html>',
                    i = ie.open();
                if (null !== i && i.document.write(r), i || "undefined" == typeof safari) return i;

              case "datauri":
              case "dataurl":
                return ie.document.location.href = "data:application/pdf;filename=" + e.filename + ";base64," + btoa(n);

              default:
                return null;
            }
          }).foo = function () {
            try {
              return F.apply(this, arguments);
            } catch (t) {
              var e = t.stack || "";
              ~e.indexOf(" at ") && (e = e.split(" at ")[1]);
              var n = "Error in function " + e.split("\n")[0].split("<")[0] + ": " + t.message;
              if (!ie.console) throw new Error(n);
              ie.console.error(n, t), ie.alert && alert(n);
            }
          }, (F.foo.bar = F).foo),
              Bt = function Bt(t) {
            return !0 === Array.isArray(Y) && -1 < Y.indexOf(t);
          };

          switch (e) {
            case "pt":
              _ = 1;
              break;

            case "mm":
              _ = 72 / 25.4;
              break;

            case "cm":
              _ = 72 / 2.54;
              break;

            case "in":
              _ = 72;
              break;

            case "px":
              _ = 1 == Bt("px_scaling") ? .75 : 96 / 72;
              break;

            case "pc":
            case "em":
              _ = 12;
              break;

            case "ex":
              _ = 6;
              break;

            default:
              throw new Error("Invalid unit: " + e);
          }

          w(), m();

          var jt = l.__private__.getPageInfo = function (t) {
            if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
            return {
              objId: V[t].objId,
              pageNumber: t,
              pageContext: V[t]
            };
          },
              Et = l.__private__.getPageInfoByObjId = function (t) {
            for (var e in V) {
              if (V[e].objId === t) break;
            }

            if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
            return jt(e);
          },
              Mt = l.__private__.getCurrentPageInfo = function () {
            return {
              objId: V[x].objId,
              pageNumber: x,
              pageContext: V[x]
            };
          };

          l.addPage = function () {
            return bt.apply(this, arguments), this;
          }, l.setPage = function () {
            return xt.apply(this, arguments), this;
          }, l.insertPage = function (t) {
            return this.addPage(), this.movePage(x, t), this;
          }, l.movePage = function (t, e) {
            if (e < t) {
              for (var n = I[t], r = V[t], i = t; e < i; i--) {
                I[i] = I[i - 1], V[i] = V[i - 1];
              }

              I[e] = n, V[e] = r, this.setPage(e);
            } else if (t < e) {
              for (n = I[t], r = V[t], i = t; i < e; i++) {
                I[i] = I[i + 1], V[i] = V[i + 1];
              }

              I[e] = n, V[e] = r, this.setPage(e);
            }

            return this;
          }, l.deletePage = function () {
            return function (t) {
              0 < t && t <= W && (I.splice(t, 1), --W < x && (x = W), this.setPage(x));
            }.apply(this, arguments), this;
          };
          l.__private__.text = l.text = function (t, e, n, i) {
            var r;
            "number" != typeof t || "number" != typeof e || "string" != typeof n && !Array.isArray(n) || (r = n, n = e, e = t, t = r);
            var o = arguments[3],
                a = arguments[4],
                s = arguments[5];
            if ("object" === se(o) && null !== o || ("string" == typeof a && (s = a, a = null), "string" == typeof o && (s = o, o = null), "number" == typeof o && (a = o, o = null), i = {
              flags: o,
              angle: a,
              align: s
            }), (o = o || {}).noBOM = o.noBOM || !0, o.autoencode = o.autoencode || !0, isNaN(e) || isNaN(n) || null == t) throw new Error("Invalid arguments passed to jsPDF.text");
            if (0 === t.length) return c;
            var l,
                h = "",
                u = "number" == typeof i.lineHeightFactor ? i.lineHeightFactor : Tt,
                c = i.scope || this;

            function f(t) {
              for (var e, n = t.concat(), r = [], i = n.length; i--;) {
                "string" == typeof (e = n.shift()) ? r.push(e) : Array.isArray(t) && 1 === e.length ? r.push(e[0]) : r.push([e[0], e[1], e[2]]);
              }

              return r;
            }

            function p(t, e) {
              var n;
              if ("string" == typeof t) n = e(t)[0];else if (Array.isArray(t)) {
                for (var r, i, o = t.concat(), a = [], s = o.length; s--;) {
                  "string" == typeof (r = o.shift()) ? a.push(e(r)[0]) : Array.isArray(r) && "string" === r[0] && (i = e(r[0], r[1], r[2]), a.push([i[0], i[1], i[2]]));
                }

                n = a;
              }
              return n;
            }

            var d = !1,
                g = !0;
            if ("string" == typeof t) d = !0;else if (Array.isArray(t)) {
              for (var m, y = t.concat(), v = [], w = y.length; w--;) {
                ("string" != typeof (m = y.shift()) || Array.isArray(m) && "string" != typeof m[0]) && (g = !1);
              }

              d = g;
            }
            if (!1 === d) throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
            var b = rt[$].encoding;
            "WinAnsiEncoding" !== b && "StandardEncoding" !== b || (t = p(t, function (t, e, n) {
              return [(r = t, r = r.split("\t").join(Array(i.TabLen || 9).join(" ")), vt(r, o)), e, n];
              var r;
            })), "string" == typeof t && (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
            var x = et / c.internal.scaleFactor,
                N = x * (Tt - 1);

            switch (i.baseline) {
              case "bottom":
                n -= N;
                break;

              case "top":
                n += x - N;
                break;

              case "hanging":
                n += x - 2 * N;
                break;

              case "middle":
                n += x / 2 - N;
            }

            0 < (O = i.maxWidth || 0) && ("string" == typeof t ? t = c.splitTextToSize(t, O) : "[object Array]" === Object.prototype.toString.call(t) && (t = c.splitTextToSize(t.join(" "), O)));
            var L = {
              text: t,
              x: e,
              y: n,
              options: i,
              mutex: {
                pdfEscape: vt,
                activeFontKey: $,
                fonts: rt,
                activeFontSize: et
              }
            };
            it.publish("preProcessText", L), t = L.text;
            a = (i = L.options).angle;
            var A = c.internal.scaleFactor,
                S = [];

            if (a) {
              a *= Math.PI / 180;

              var _ = Math.cos(a),
                  F = Math.sin(a);

              S = [Z(_), Z(F), Z(-1 * F), Z(_)];
            }

            void 0 !== (M = i.charSpace) && (h += Q(M * A) + " Tc\n");
            i.lang;
            var P = -1,
                k = void 0 !== i.renderingMode ? i.renderingMode : i.stroke,
                I = c.internal.getCurrentPageInfo().pageContext;

            switch (k) {
              case 0:
              case !1:
              case "fill":
                P = 0;
                break;

              case 1:
              case !0:
              case "stroke":
                P = 1;
                break;

              case 2:
              case "fillThenStroke":
                P = 2;
                break;

              case 3:
              case "invisible":
                P = 3;
                break;

              case 4:
              case "fillAndAddForClipping":
                P = 4;
                break;

              case 5:
              case "strokeAndAddPathForClipping":
                P = 5;
                break;

              case 6:
              case "fillThenStrokeAndAddToPathForClipping":
                P = 6;
                break;

              case 7:
              case "addToPathForClipping":
                P = 7;
            }

            var C = void 0 !== I.usedRenderingMode ? I.usedRenderingMode : -1;
            -1 !== P ? h += P + " Tr\n" : -1 !== C && (h += "0 Tr\n"), -1 !== P && (I.usedRenderingMode = P);
            s = i.align || "left";
            var B = et * u,
                j = c.internal.pageSize.getWidth(),
                E = (A = c.internal.scaleFactor, rt[$]),
                M = i.charSpace || Qt,
                O = i.maxWidth || 0,
                q = (o = {}, []);

            if ("[object Array]" === Object.prototype.toString.call(t)) {
              var T, R;
              v = f(t);
              "left" !== s && (R = v.map(function (t) {
                return c.getStringUnitWidth(t, {
                  font: E,
                  charSpace: M,
                  fontSize: et
                }) * et / A;
              }));
              var D,
                  U = Math.max.apply(Math, R),
                  z = 0;

              if ("right" === s) {
                e -= R[0], t = [];
                var H = 0;

                for (w = v.length; H < w; H++) {
                  U - R[H], T = 0 === H ? (D = Wt(e), Vt(n)) : (D = (z - R[H]) * A, -B), t.push([v[H], D, T]), z = R[H];
                }
              } else if ("center" === s) {
                e -= R[0] / 2, t = [];

                for (H = 0, w = v.length; H < w; H++) {
                  (U - R[H]) / 2, T = 0 === H ? (D = Wt(e), Vt(n)) : (D = (z - R[H]) / 2 * A, -B), t.push([v[H], D, T]), z = R[H];
                }
              } else if ("left" === s) {
                t = [];

                for (H = 0, w = v.length; H < w; H++) {
                  T = 0 === H ? Vt(n) : -B, D = 0 === H ? Wt(e) : 0, t.push(v[H]);
                }
              } else {
                if ("justify" !== s) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                t = [];

                for (O = 0 !== O ? O : j, H = 0, w = v.length; H < w; H++) {
                  T = 0 === H ? Vt(n) : -B, D = 0 === H ? Wt(e) : 0, H < w - 1 && q.push(((O - R[H]) / (v[H].split(" ").length - 1) * A).toFixed(2)), t.push([v[H], D, T]);
                }
              }
            }

            !0 === ("boolean" == typeof i.R2L ? i.R2L : nt) && (t = p(t, function (t, e, n) {
              return [t.split("").reverse().join(""), e, n];
            }));
            L = {
              text: t,
              x: e,
              y: n,
              options: i,
              mutex: {
                pdfEscape: vt,
                activeFontKey: $,
                fonts: rt,
                activeFontSize: et
              }
            };
            it.publish("postProcessText", L), t = L.text, l = L.mutex.isHex;
            v = f(t);
            t = [];
            var W,
                V,
                G,
                Y = 0,
                J = (w = v.length, "");

            for (H = 0; H < w; H++) {
              J = "", Array.isArray(v[H]) ? (W = parseFloat(v[H][1]), V = parseFloat(v[H][2]), G = (l ? "<" : "(") + v[H][0] + (l ? ">" : ")"), Y = 1) : (W = Wt(e), V = Vt(n), G = (l ? "<" : "(") + v[H] + (l ? ">" : ")")), void 0 !== q && void 0 !== q[H] && (J = q[H] + " Tw\n"), 0 !== S.length && 0 === H ? t.push(J + S.join(" ") + " " + W.toFixed(2) + " " + V.toFixed(2) + " Tm\n" + G) : 1 === Y || 0 === Y && 0 === H ? t.push(J + W.toFixed(2) + " " + V.toFixed(2) + " Td\n" + G) : t.push(J + G);
            }

            t = 0 === Y ? t.join(" Tj\nT* ") : t.join(" Tj\n"), t += " Tj\n";
            var X = "BT\n/" + $ + " " + et + " Tf\n" + (et * u).toFixed(2) + " TL\n" + Kt + "\n";
            return X += h, X += t, tt(X += "ET"), K[$] = !0, c;
          }, l.__private__.lstext = l.lstext = function (t, e, n, r) {
            return console.warn("jsPDF.lstext is deprecated"), this.text(t, e, n, {
              charSpace: r
            });
          }, l.__private__.clip = l.clip = function (t) {
            tt("evenodd" === t ? "W*" : "W"), tt("n");
          }, l.__private__.clip_fixed = l.clip_fixed = function (t) {
            console.log("clip_fixed is deprecated"), l.clip(t);
          };

          var Ot = l.__private__.isValidStyle = function (t) {
            var e = !1;
            return -1 !== [void 0, null, "S", "F", "DF", "FD", "f", "f*", "B", "B*"].indexOf(t) && (e = !0), e;
          },
              qt = l.__private__.getStyle = function (t) {
            var e = "S";
            return "F" === t ? e = "f" : "FD" === t || "DF" === t ? e = "B" : "f" !== t && "f*" !== t && "B" !== t && "B*" !== t || (e = t), e;
          };

          l.__private__.line = l.line = function (t, e, n, r) {
            if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw new Error("Invalid arguments passed to jsPDF.line");
            return this.lines([[n - t, r - e]], t, e);
          }, l.__private__.lines = l.lines = function (t, e, n, r, i, o) {
            var a, s, l, h, u, c, f, p, d, g, m, y;
            if ("number" == typeof t && (y = n, n = e, e = t, t = y), r = r || [1, 1], o = o || !1, isNaN(e) || isNaN(n) || !Array.isArray(t) || !Array.isArray(r) || !Ot(i) || "boolean" != typeof o) throw new Error("Invalid arguments passed to jsPDF.lines");

            for (tt(Q(Wt(e)) + " " + Q(Vt(n)) + " m "), a = r[0], s = r[1], h = t.length, g = e, m = n, l = 0; l < h; l++) {
              2 === (u = t[l]).length ? (g = u[0] * a + g, m = u[1] * s + m, tt(Q(Wt(g)) + " " + Q(Vt(m)) + " l")) : (c = u[0] * a + g, f = u[1] * s + m, p = u[2] * a + g, d = u[3] * s + m, g = u[4] * a + g, m = u[5] * s + m, tt(Q(Wt(c)) + " " + Q(Vt(f)) + " " + Q(Wt(p)) + " " + Q(Vt(d)) + " " + Q(Wt(g)) + " " + Q(Vt(m)) + " c"));
            }

            return o && tt(" h"), null !== i && tt(qt(i)), this;
          }, l.__private__.rect = l.rect = function (t, e, n, r, i) {
            if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || !Ot(i)) throw new Error("Invalid arguments passed to jsPDF.rect");
            return tt([Z(Wt(t)), Z(Vt(e)), Z(n * _), Z(-r * _), "re"].join(" ")), null !== i && tt(qt(i)), this;
          }, l.__private__.triangle = l.triangle = function (t, e, n, r, i, o, a) {
            if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(o) || !Ot(a)) throw new Error("Invalid arguments passed to jsPDF.triangle");
            return this.lines([[n - t, r - e], [i - n, o - r], [t - i, e - o]], t, e, [1, 1], a, !0), this;
          }, l.__private__.roundedRect = l.roundedRect = function (t, e, n, r, i, o, a) {
            if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(o) || !Ot(a)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
            var s = 4 / 3 * (Math.SQRT2 - 1);
            return this.lines([[n - 2 * i, 0], [i * s, 0, i, o - o * s, i, o], [0, r - 2 * o], [0, o * s, -i * s, o, -i, o], [2 * i - n, 0], [-i * s, 0, -i, -o * s, -i, -o], [0, 2 * o - r], [0, -o * s, i * s, -o, i, -o]], t + i, e, [1, 1], a), this;
          }, l.__private__.ellipse = l.ellipse = function (t, e, n, r, i) {
            if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || !Ot(i)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
            var o = 4 / 3 * (Math.SQRT2 - 1) * n,
                a = 4 / 3 * (Math.SQRT2 - 1) * r;
            return tt([Z(Wt(t + n)), Z(Vt(e)), "m", Z(Wt(t + n)), Z(Vt(e - a)), Z(Wt(t + o)), Z(Vt(e - r)), Z(Wt(t)), Z(Vt(e - r)), "c"].join(" ")), tt([Z(Wt(t - o)), Z(Vt(e - r)), Z(Wt(t - n)), Z(Vt(e - a)), Z(Wt(t - n)), Z(Vt(e)), "c"].join(" ")), tt([Z(Wt(t - n)), Z(Vt(e + a)), Z(Wt(t - o)), Z(Vt(e + r)), Z(Wt(t)), Z(Vt(e + r)), "c"].join(" ")), tt([Z(Wt(t + o)), Z(Vt(e + r)), Z(Wt(t + n)), Z(Vt(e + a)), Z(Wt(t + n)), Z(Vt(e)), "c"].join(" ")), null !== i && tt(qt(i)), this;
          }, l.__private__.circle = l.circle = function (t, e, n, r) {
            if (isNaN(t) || isNaN(e) || isNaN(n) || !Ot(r)) throw new Error("Invalid arguments passed to jsPDF.circle");
            return this.ellipse(t, e, n, n, r);
          };
          l.setFont = function (t, e) {
            return $ = Lt(t, e, {
              disableWarning: !1
            }), this;
          }, l.setFontStyle = l.setFontType = function (t) {
            return $ = Lt(void 0, t), this;
          };

          l.__private__.getFontList = l.getFontList = function () {
            var t,
                e,
                n,
                r = {};

            for (t in H) {
              if (H.hasOwnProperty(t)) for (e in r[t] = n = [], H[t]) {
                H[t].hasOwnProperty(e) && n.push(e);
              }
            }

            return r;
          };

          l.addFont = function (t, e, n, r) {
            yt.call(this, t, e, n, r = r || "Identity-H");
          };

          var Tt,
              Rt = r.lineWidth || .200025,
              Dt = l.__private__.setLineWidth = l.setLineWidth = function (t) {
            return tt((t * _).toFixed(2) + " w"), this;
          },
              Ut = (l.__private__.setLineDash = ae.API.setLineDash = function (t, e) {
            if (t = t || [], e = e || 0, isNaN(e) || !Array.isArray(t)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
            return t = t.map(function (t) {
              return (t * _).toFixed(3);
            }).join(" "), e = parseFloat((e * _).toFixed(3)), tt("[" + t + "] " + e + " d"), this;
          }, l.__private__.getLineHeight = l.getLineHeight = function () {
            return et * Tt;
          }),
              zt = (Ut = l.__private__.getLineHeight = l.getLineHeight = function () {
            return et * Tt;
          }, l.__private__.setLineHeightFactor = l.setLineHeightFactor = function (t) {
            return "number" == typeof (t = t || 1.15) && (Tt = t), this;
          }),
              Ht = l.__private__.getLineHeightFactor = l.getLineHeightFactor = function () {
            return Tt;
          };

          zt(r.lineHeight);

          var Wt = l.__private__.getHorizontalCoordinate = function (t) {
            return t * _;
          },
              Vt = l.__private__.getVerticalCoordinate = function (t) {
            return V[x].mediaBox.topRightY - V[x].mediaBox.bottomLeftY - t * _;
          },
              Gt = l.__private__.getHorizontalCoordinateString = function (t) {
            return Z(t * _);
          },
              Yt = l.__private__.getVerticalCoordinateString = function (t) {
            return Z(V[x].mediaBox.topRightY - V[x].mediaBox.bottomLeftY - t * _);
          },
              Jt = r.strokeColor || "0 G",
              Xt = (l.__private__.getStrokeColor = l.getDrawColor = function () {
            return ht(Jt);
          }, l.__private__.setStrokeColor = l.setDrawColor = function (t, e, n, r) {
            return Jt = ut({
              ch1: t,
              ch2: e,
              ch3: n,
              ch4: r,
              pdfColorType: "draw",
              precision: 2
            }), tt(Jt), this;
          }, r.fillColor || "0 g"),
              Kt = (l.__private__.getFillColor = l.getFillColor = function () {
            return ht(Xt);
          }, l.__private__.setFillColor = l.setFillColor = function (t, e, n, r) {
            return Xt = ut({
              ch1: t,
              ch2: e,
              ch3: n,
              ch4: r,
              pdfColorType: "fill",
              precision: 2
            }), tt(Xt), this;
          }, r.textColor || "0 g"),
              Zt = l.__private__.getTextColor = l.getTextColor = function () {
            return ht(Kt);
          },
              Qt = (l.__private__.setTextColor = l.setTextColor = function (t, e, n, r) {
            return Kt = ut({
              ch1: t,
              ch2: e,
              ch3: n,
              ch4: r,
              pdfColorType: "text",
              precision: 3
            }), this;
          }, r.charSpace || 0),
              $t = l.__private__.getCharSpace = l.getCharSpace = function () {
            return Qt;
          },
              te = (l.__private__.setCharSpace = l.setCharSpace = function (t) {
            if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
            return Qt = t, this;
          }, 0);

          l.CapJoinStyles = {
            0: 0,
            butt: 0,
            but: 0,
            miter: 0,
            1: 1,
            round: 1,
            rounded: 1,
            circle: 1,
            2: 2,
            projecting: 2,
            project: 2,
            square: 2,
            bevel: 2
          };

          l.__private__.setLineCap = l.setLineCap = function (t) {
            var e = l.CapJoinStyles[t];
            if (void 0 === e) throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            return tt((te = e) + " J"), this;
          };

          var ee,
              ne = 0;
          l.__private__.setLineJoin = l.setLineJoin = function (t) {
            var e = l.CapJoinStyles[t];
            if (void 0 === e) throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            return tt((ne = e) + " j"), this;
          }, l.__private__.setMiterLimit = l.setMiterLimit = function (t) {
            if (t = t || 0, isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setMiterLimit");
            return ee = parseFloat(Z(t * _)), tt(ee + " M"), this;
          };

          for (var re in l.save = function (r, t) {
            if (r = r || "generated.pdf", (t = t || {}).returnPromise = t.returnPromise || !1, !1 !== t.returnPromise) return new Promise(function (t, e) {
              try {
                var n = le(It(kt()), r);
                "function" == typeof le.unload && ie.setTimeout && setTimeout(le.unload, 911), t(n);
              } catch (t) {
                e(t.message);
              }
            });
            le(It(kt()), r), "function" == typeof le.unload && ie.setTimeout && setTimeout(le.unload, 911);
          }, ae.API) {
            ae.API.hasOwnProperty(re) && ("events" === re && ae.API.events.length ? function (t, e) {
              var n, r, i;

              for (i = e.length - 1; -1 !== i; i--) {
                n = e[i][0], r = e[i][1], t.subscribe.apply(t, [n].concat("function" == typeof r ? [r] : r));
              }
            }(it, ae.API.events) : l[re] = ae.API[re]);
          }

          return l.internal = {
            pdfEscape: vt,
            getStyle: qt,
            getFont: function getFont() {
              return rt[Lt.apply(l, arguments)];
            },
            getFontSize: O,
            getCharSpace: $t,
            getTextColor: Zt,
            getLineHeight: Ut,
            getLineHeightFactor: Ht,
            write: j,
            getHorizontalCoordinate: Wt,
            getVerticalCoordinate: Vt,
            getCoordinateString: Gt,
            getVerticalCoordinateString: Yt,
            collections: {},
            newObject: J,
            newAdditionalObject: at,
            newObjectDeferred: X,
            newObjectDeferredBegin: ot,
            getFilters: ct,
            putStream: ft,
            events: it,
            scaleFactor: _,
            pageSize: {
              getWidth: function getWidth() {
                return (V[x].mediaBox.topRightX - V[x].mediaBox.bottomLeftX) / _;
              },
              setWidth: function setWidth(t) {
                V[x].mediaBox.topRightX = t * _ + V[x].mediaBox.bottomLeftX;
              },
              getHeight: function getHeight() {
                return (V[x].mediaBox.topRightY - V[x].mediaBox.bottomLeftY) / _;
              },
              setHeight: function setHeight(t) {
                V[x].mediaBox.topRightY = t * _ + V[x].mediaBox.bottomLeftY;
              }
            },
            output: Ct,
            getNumberOfPages: Nt,
            pages: I,
            out: tt,
            f2: Z,
            f3: Q,
            getPageInfo: jt,
            getPageInfoByObjId: Et,
            getCurrentPageInfo: Mt,
            getPDFVersion: u,
            hasHotfix: Bt
          }, Object.defineProperty(l.internal.pageSize, "width", {
            get: function get() {
              return (V[x].mediaBox.topRightX - V[x].mediaBox.bottomLeftX) / _;
            },
            set: function set(t) {
              V[x].mediaBox.topRightX = t * _ + V[x].mediaBox.bottomLeftX;
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(l.internal.pageSize, "height", {
            get: function get() {
              return (V[x].mediaBox.topRightY - V[x].mediaBox.bottomLeftY) / _;
            },
            set: function set(t) {
              V[x].mediaBox.topRightY = t * _ + V[x].mediaBox.bottomLeftY;
            },
            enumerable: !0,
            configurable: !0
          }), function (t) {
            for (var e = 0, n = M.length; e < n; e++) {
              var r = yt(t[e][0], t[e][1], t[e][2], M[e][3], !0);
              K[r] = !0;
              var i = t[e][0].split("-");
              mt(r, i[0], i[1] || "");
            }

            it.publish("addFonts", {
              fonts: rt,
              dictionary: H
            });
          }(M), $ = "F1", bt(i, t), it.publish("initialized"), l;
        }

        return ae.API = {
          events: []
        }, ae.version = "1.5.3", true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return ae;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined, ae;
      }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")());
      /**
         * @license
         * Copyright (c) 2016 Alexander Weidt,
         * https://github.com/BiggA94
         * 
         * Licensed under the MIT License. http://opensource.org/licenses/mit-license
         */


      (function (t, e) {
        var A,
            n = 1,
            S = function S(t) {
          return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        },
            y = function y(t) {
          return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
        },
            _ = function _(t) {
          if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2");
          return t.toFixed(2);
        },
            s = function s(t) {
          if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2");
          return t.toFixed(5);
        };

        t.__acroform__ = {};

        var r = function r(t, e) {
          t.prototype = Object.create(e.prototype), t.prototype.constructor = t;
        },
            v = function v(t) {
          return t * n;
        },
            w = function w(t) {
          return t / n;
        },
            l = function l(t) {
          var e = new j(),
              n = Y.internal.getHeight(t) || 0,
              r = Y.internal.getWidth(t) || 0;
          return e.BBox = [0, 0, Number(_(r)), Number(_(n))], e;
        },
            i = t.__acroform__.setBit = function (t, e) {
          if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
          return t |= 1 << e;
        },
            o = t.__acroform__.clearBit = function (t, e) {
          if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
          return t &= ~(1 << e);
        },
            a = t.__acroform__.getBit = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
          return 0 == (t & 1 << e) ? 0 : 1;
        },
            b = t.__acroform__.getBitForPdf = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
          return a(t, e - 1);
        },
            x = t.__acroform__.setBitForPdf = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
          return i(t, e - 1);
        },
            N = t.__acroform__.clearBitForPdf = function (t, e, n) {
          if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
          return o(t, e - 1);
        },
            c = t.__acroform__.calculateCoordinates = function (t) {
          var e = this.internal.getHorizontalCoordinate,
              n = this.internal.getVerticalCoordinate,
              r = t[0],
              i = t[1],
              o = t[2],
              a = t[3],
              s = {};
          return s.lowerLeft_X = e(r) || 0, s.lowerLeft_Y = n(i + a) || 0, s.upperRight_X = e(r + o) || 0, s.upperRight_Y = n(i) || 0, [Number(_(s.lowerLeft_X)), Number(_(s.lowerLeft_Y)), Number(_(s.upperRight_X)), Number(_(s.upperRight_Y))];
        },
            f = function f(t) {
          if (t.appearanceStreamContent) return t.appearanceStreamContent;

          if (t.V || t.DV) {
            var e = [],
                n = t.V || t.DV,
                r = h(t, n),
                i = A.internal.getFont(t.fontName, t.fontStyle).id;
            e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(A.__private__.encodeColorString(t.color)), e.push("/" + i + " " + _(r.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(r.text), e.push("ET"), e.push("Q"), e.push("EMC");
            var o = new l(t);
            return o.stream = e.join("\n"), o;
          }
        },
            h = function h(i, t) {
          var e = i.maxFontSize || 12,
              n = (i.fontName, {
            text: "",
            fontSize: ""
          }),
              o = (t = ")" == (t = "(" == t.substr(0, 1) ? t.substr(1) : t).substr(t.length - 1) ? t.substr(0, t.length - 1) : t).split(" "),
              r = (A.__private__.encodeColorString(i.color), e),
              a = Y.internal.getHeight(i) || 0;
          a = a < 0 ? -a : a;
          var s = Y.internal.getWidth(i) || 0;
          s = s < 0 ? -s : s;

          var l = function l(t, e, n) {
            if (t + 1 < o.length) {
              var r = e + " " + o[t + 1];
              return F(r, i, n).width <= s - 4;
            }

            return !1;
          };

          r++;

          t: for (;;) {
            t = "";
            var h = F("3", i, --r).height,
                u = i.multiline ? a - r : (a - h) / 2,
                c = -2,
                f = u += 2,
                p = 0,
                d = 0,
                g = 0;

            if (r <= 0) {
              t = "(...) Tj\n", t += "% Width of Text: " + F(t, i, r = 12).width + ", FieldWidth:" + s + "\n";
              break;
            }

            g = F(o[0] + " ", i, r).width;
            var m = "",
                y = 0;

            for (var v in o) {
              if (o.hasOwnProperty(v)) {
                m = " " == (m += o[v] + " ").substr(m.length - 1) ? m.substr(0, m.length - 1) : m;
                var w = parseInt(v);
                g = F(m + " ", i, r).width;
                var b = l(w, m, r),
                    x = v >= o.length - 1;

                if (b && !x) {
                  m += " ";
                  continue;
                }

                if (b || x) {
                  if (x) d = w;else if (i.multiline && a < (h + 2) * (y + 2) + 2) continue t;
                } else {
                  if (!i.multiline) continue t;
                  if (a < (h + 2) * (y + 2) + 2) continue t;
                  d = w;
                }

                for (var N = "", L = p; L <= d; L++) {
                  N += o[L] + " ";
                }

                switch (N = " " == N.substr(N.length - 1) ? N.substr(0, N.length - 1) : N, g = F(N, i, r).width, i.textAlign) {
                  case "right":
                    c = s - g - 2;
                    break;

                  case "center":
                    c = (s - g) / 2;
                    break;

                  case "left":
                  default:
                    c = 2;
                }

                t += _(c) + " " + _(f) + " Td\n", t += "(" + S(N) + ") Tj\n", t += -_(c) + " 0 Td\n", f = -(r + 2), g = 0, p = d + 1, y++, m = "";
              } else ;
            }

            break;
          }

          return n.text = t, n.fontSize = r, n;
        },
            F = function F(t, e, n) {
          var r = A.internal.getFont(e.fontName, e.fontStyle),
              i = A.getStringUnitWidth(t, {
            font: r,
            fontSize: parseFloat(n),
            charSpace: 0
          }) * parseFloat(n);
          return {
            height: A.getStringUnitWidth("3", {
              font: r,
              fontSize: parseFloat(n),
              charSpace: 0
            }) * parseFloat(n) * 1.5,
            width: i
          };
        },
            u = {
          fields: [],
          xForms: [],
          acroFormDictionaryRoot: null,
          printedOut: !1,
          internal: null,
          isInitialized: !1
        },
            p = function p() {
          A.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
          var t = A.internal.acroformPlugin.acroFormDictionaryRoot.Fields;

          for (var e in t) {
            if (t.hasOwnProperty(e)) {
              var n = t[e];
              n.objId = void 0, n.hasAnnotation && d.call(A, n);
            }
          }
        },
            d = function d(t) {
          var e = {
            type: "reference",
            object: t
          };
          void 0 === A.internal.getPageInfo(t.page).pageContext.annotations.find(function (t) {
            return t.type === e.type && t.object === e.object;
          }) && A.internal.getPageInfo(t.page).pageContext.annotations.push(e);
        },
            g = function g() {
          if (void 0 === A.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
          A.internal.write("/AcroForm " + A.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
        },
            m = function m() {
          A.internal.events.unsubscribe(A.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete A.internal.acroformPlugin.acroFormDictionaryRoot._eventID, A.internal.acroformPlugin.printedOut = !0;
        },
            L = function L(t) {
          var e = !t;
          t || (A.internal.newObjectDeferredBegin(A.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), A.internal.acroformPlugin.acroFormDictionaryRoot.putStream());
          t = t || A.internal.acroformPlugin.acroFormDictionaryRoot.Kids;

          for (var n in t) {
            if (t.hasOwnProperty(n)) {
              var r = t[n],
                  i = [],
                  o = r.Rect;

              if (r.Rect && (r.Rect = c.call(this, r.Rect)), A.internal.newObjectDeferredBegin(r.objId, !0), r.DA = Y.createDefaultAppearanceStream(r), "object" === se(r) && "function" == typeof r.getKeyValueListForStream && (i = r.getKeyValueListForStream()), r.Rect = o, r.hasAppearanceStream && !r.appearanceStreamContent) {
                var a = f.call(this, r);
                i.push({
                  key: "AP",
                  value: "<</N " + a + ">>"
                }), A.internal.acroformPlugin.xForms.push(a);
              }

              if (r.appearanceStreamContent) {
                var s = "";

                for (var l in r.appearanceStreamContent) {
                  if (r.appearanceStreamContent.hasOwnProperty(l)) {
                    var h = r.appearanceStreamContent[l];
                    if (s += "/" + l + " ", s += "<<", 1 <= Object.keys(h).length || Array.isArray(h)) for (var n in h) {
                      var u;
                      if (h.hasOwnProperty(n)) "function" == typeof (u = h[n]) && (u = u.call(this, r)), s += "/" + n + " " + u + " ", 0 <= A.internal.acroformPlugin.xForms.indexOf(u) || A.internal.acroformPlugin.xForms.push(u);
                    } else "function" == typeof (u = h) && (u = u.call(this, r)), s += "/" + n + " " + u, 0 <= A.internal.acroformPlugin.xForms.indexOf(u) || A.internal.acroformPlugin.xForms.push(u);
                    s += ">>";
                  }
                }

                i.push({
                  key: "AP",
                  value: "<<\n" + s + ">>"
                });
              }

              A.internal.putStream({
                additionalKeyValues: i
              }), A.internal.out("endobj");
            }
          }

          e && P.call(this, A.internal.acroformPlugin.xForms);
        },
            P = function P(t) {
          for (var e in t) {
            if (t.hasOwnProperty(e)) {
              var n = e,
                  r = t[e];
              A.internal.newObjectDeferredBegin(r && r.objId, !0), "object" === se(r) && "function" == typeof r.putStream && r.putStream(), delete t[n];
            }
          }
        },
            k = function k() {
          if (void 0 !== this.internal && (void 0 === this.internal.acroformPlugin || !1 === this.internal.acroformPlugin.isInitialized)) {
            if (A = this, M.FieldNum = 0, this.internal.acroformPlugin = JSON.parse(JSON.stringify(u)), this.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
            n = A.internal.scaleFactor, A.internal.acroformPlugin.acroFormDictionaryRoot = new E(), A.internal.acroformPlugin.acroFormDictionaryRoot._eventID = A.internal.events.subscribe("postPutResources", m), A.internal.events.subscribe("buildDocument", p), A.internal.events.subscribe("putCatalog", g), A.internal.events.subscribe("postPutPages", L), A.internal.acroformPlugin.isInitialized = !0;
          }
        },
            I = t.__acroform__.arrayToPdfArray = function (t) {
          if (Array.isArray(t)) {
            for (var e = "[", n = 0; n < t.length; n++) {
              switch (0 !== n && (e += " "), se(t[n])) {
                case "boolean":
                case "number":
                case "object":
                  e += t[n].toString();
                  break;

                case "string":
                  "/" !== t[n].substr(0, 1) ? e += "(" + S(t[n].toString()) + ")" : e += t[n].toString();
              }
            }

            return e += "]";
          }

          throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
        };

        var C = function C(t) {
          return (t = t || "").toString(), t = "(" + S(t) + ")";
        },
            B = function B() {
          var e;
          Object.defineProperty(this, "objId", {
            configurable: !0,
            get: function get() {
              if (e || (e = A.internal.newObjectDeferred()), !e) throw new Error("AcroFormPDFObject: Couldn't create Object ID");
              return e;
            },
            set: function set(t) {
              e = t;
            }
          });
        };

        B.prototype.toString = function () {
          return this.objId + " 0 R";
        }, B.prototype.putStream = function () {
          var t = this.getKeyValueListForStream();
          A.internal.putStream({
            data: this.stream,
            additionalKeyValues: t
          }), A.internal.out("endobj");
        }, B.prototype.getKeyValueListForStream = function () {
          return function (t) {
            var e = [],
                n = Object.getOwnPropertyNames(t).filter(function (t) {
              return "content" != t && "appearanceStreamContent" != t && "_" != t.substring(0, 1);
            });

            for (var r in n) {
              if (!1 === Object.getOwnPropertyDescriptor(t, n[r]).configurable) {
                var i = n[r],
                    o = t[i];
                o && (Array.isArray(o) ? e.push({
                  key: i,
                  value: I(o)
                }) : o instanceof B ? e.push({
                  key: i,
                  value: o.objId + " 0 R"
                }) : "function" != typeof o && e.push({
                  key: i,
                  value: o
                }));
              }
            }

            return e;
          }(this);
        };

        var j = function j() {
          B.call(this), Object.defineProperty(this, "Type", {
            value: "/XObject",
            configurable: !1,
            writeable: !0
          }), Object.defineProperty(this, "Subtype", {
            value: "/Form",
            configurable: !1,
            writeable: !0
          }), Object.defineProperty(this, "FormType", {
            value: 1,
            configurable: !1,
            writeable: !0
          });
          var e,
              n = [];
          Object.defineProperty(this, "BBox", {
            configurable: !1,
            writeable: !0,
            get: function get() {
              return n;
            },
            set: function set(t) {
              n = t;
            }
          }), Object.defineProperty(this, "Resources", {
            value: "2 0 R",
            configurable: !1,
            writeable: !0
          }), Object.defineProperty(this, "stream", {
            enumerable: !1,
            configurable: !0,
            set: function set(t) {
              e = t.trim();
            },
            get: function get() {
              return e || null;
            }
          });
        };

        r(j, B);

        var E = function E() {
          B.call(this);
          var e,
              t = [];
          Object.defineProperty(this, "Kids", {
            enumerable: !1,
            configurable: !0,
            get: function get() {
              return 0 < t.length ? t : void 0;
            }
          }), Object.defineProperty(this, "Fields", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              return t;
            }
          }), Object.defineProperty(this, "DA", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              if (e) return "(" + e + ")";
            },
            set: function set(t) {
              e = t;
            }
          });
        };

        r(E, B);

        var M = function t() {
          B.call(this);
          var e = 4;
          Object.defineProperty(this, "F", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              return e;
            },
            set: function set(t) {
              if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute F supplied.');
              e = t;
            }
          }), Object.defineProperty(this, "showWhenPrinted", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(e, 3));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.F = x(e, 3) : this.F = N(e, 3);
            }
          });
          var n = 0;
          Object.defineProperty(this, "Ff", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              return n;
            },
            set: function set(t) {
              if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute Ff supplied.');
              n = t;
            }
          });
          var r = [];
          Object.defineProperty(this, "Rect", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              if (0 !== r.length) return r;
            },
            set: function set(t) {
              r = void 0 !== t ? t : [];
            }
          }), Object.defineProperty(this, "x", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return !r || isNaN(r[0]) ? 0 : w(r[0]);
            },
            set: function set(t) {
              r[0] = v(t);
            }
          }), Object.defineProperty(this, "y", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return !r || isNaN(r[1]) ? 0 : w(r[1]);
            },
            set: function set(t) {
              r[1] = v(t);
            }
          }), Object.defineProperty(this, "width", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return !r || isNaN(r[2]) ? 0 : w(r[2]);
            },
            set: function set(t) {
              r[2] = v(t);
            }
          }), Object.defineProperty(this, "height", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return !r || isNaN(r[3]) ? 0 : w(r[3]);
            },
            set: function set(t) {
              r[3] = v(t);
            }
          });
          var i = "";
          Object.defineProperty(this, "FT", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              return i;
            },
            set: function set(t) {
              switch (t) {
                case "/Btn":
                case "/Tx":
                case "/Ch":
                case "/Sig":
                  i = t;
                  break;

                default:
                  throw new Error('Invalid value "' + t + '" for attribute FT supplied.');
              }
            }
          });
          var o = null;
          Object.defineProperty(this, "T", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              if (!o || o.length < 1) {
                if (this instanceof H) return;
                o = "FieldObject" + t.FieldNum++;
              }

              return "(" + S(o) + ")";
            },
            set: function set(t) {
              o = t.toString();
            }
          }), Object.defineProperty(this, "fieldName", {
            configurable: !0,
            enumerable: !0,
            get: function get() {
              return o;
            },
            set: function set(t) {
              o = t;
            }
          });
          var a = "helvetica";
          Object.defineProperty(this, "fontName", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return a;
            },
            set: function set(t) {
              a = t;
            }
          });
          var s = "normal";
          Object.defineProperty(this, "fontStyle", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return s;
            },
            set: function set(t) {
              s = t;
            }
          });
          var l = 0;
          Object.defineProperty(this, "fontSize", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return w(l);
            },
            set: function set(t) {
              l = v(t);
            }
          });
          var h = 50;
          Object.defineProperty(this, "maxFontSize", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return w(h);
            },
            set: function set(t) {
              h = v(t);
            }
          });
          var u = "black";
          Object.defineProperty(this, "color", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return u;
            },
            set: function set(t) {
              u = t;
            }
          });
          var c = "/F1 0 Tf 0 g";
          Object.defineProperty(this, "DA", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              if (!(!c || this instanceof H || this instanceof V)) return C(c);
            },
            set: function set(t) {
              t = t.toString(), c = t;
            }
          });
          var f = null;
          Object.defineProperty(this, "DV", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              if (f) return this instanceof D == !1 ? C(f) : f;
            },
            set: function set(t) {
              t = t.toString(), f = this instanceof D == !1 ? "(" === t.substr(0, 1) ? y(t.substr(1, t.length - 2)) : y(t) : t;
            }
          }), Object.defineProperty(this, "defaultValue", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return this instanceof D == !0 ? y(f.substr(1, f.length - 1)) : f;
            },
            set: function set(t) {
              t = t.toString(), f = this instanceof D == !0 ? "/" + t : t;
            }
          });
          var p = null;
          Object.defineProperty(this, "V", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              if (p) return this instanceof D == !1 ? C(p) : p;
            },
            set: function set(t) {
              t = t.toString(), p = this instanceof D == !1 ? "(" === t.substr(0, 1) ? y(t.substr(1, t.length - 2)) : y(t) : t;
            }
          }), Object.defineProperty(this, "value", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return this instanceof D == !0 ? y(p.substr(1, p.length - 1)) : p;
            },
            set: function set(t) {
              t = t.toString(), p = this instanceof D == !0 ? "/" + t : t;
            }
          }), Object.defineProperty(this, "hasAnnotation", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return this.Rect;
            }
          }), Object.defineProperty(this, "Type", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              return this.hasAnnotation ? "/Annot" : null;
            }
          }), Object.defineProperty(this, "Subtype", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              return this.hasAnnotation ? "/Widget" : null;
            }
          });
          var d,
              g = !1;
          Object.defineProperty(this, "hasAppearanceStream", {
            enumerable: !0,
            configurable: !0,
            writeable: !0,
            get: function get() {
              return g;
            },
            set: function set(t) {
              t = Boolean(t), g = t;
            }
          }), Object.defineProperty(this, "page", {
            enumerable: !0,
            configurable: !0,
            writeable: !0,
            get: function get() {
              if (d) return d;
            },
            set: function set(t) {
              d = t;
            }
          }), Object.defineProperty(this, "readOnly", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 1));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 1) : this.Ff = N(this.Ff, 1);
            }
          }), Object.defineProperty(this, "required", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 2));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 2) : this.Ff = N(this.Ff, 2);
            }
          }), Object.defineProperty(this, "noExport", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 3));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 3) : this.Ff = N(this.Ff, 3);
            }
          });
          var m = null;
          Object.defineProperty(this, "Q", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              if (null !== m) return m;
            },
            set: function set(t) {
              if (-1 === [0, 1, 2].indexOf(t)) throw new Error('Invalid value "' + t + '" for attribute Q supplied.');
              m = t;
            }
          }), Object.defineProperty(this, "textAlign", {
            get: function get() {
              var t = "left";

              switch (m) {
                case 0:
                default:
                  t = "left";
                  break;

                case 1:
                  t = "center";
                  break;

                case 2:
                  t = "right";
              }

              return t;
            },
            configurable: !0,
            enumerable: !0,
            set: function set(t) {
              switch (t) {
                case "right":
                case 2:
                  m = 2;
                  break;

                case "center":
                case 1:
                  m = 1;
                  break;

                case "left":
                case 0:
                default:
                  m = 0;
              }
            }
          });
        };

        r(M, B);

        var O = function O() {
          M.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
          var e = 0;
          Object.defineProperty(this, "TI", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              return e;
            },
            set: function set(t) {
              e = t;
            }
          }), Object.defineProperty(this, "topIndex", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return e;
            },
            set: function set(t) {
              e = t;
            }
          });
          var r = [];
          Object.defineProperty(this, "Opt", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              return I(r);
            },
            set: function set(t) {
              var e, n;
              n = [], "string" == typeof (e = t) && (n = function (t, e, n) {
                n || (n = 1);

                for (var r, i = []; r = e.exec(t);) {
                  i.push(r[n]);
                }

                return i;
              }(e, /\((.*?)\)/g)), r = n;
            }
          }), this.getOptions = function () {
            return r;
          }, this.setOptions = function (t) {
            r = t, this.sort && r.sort();
          }, this.addOption = function (t) {
            t = (t = t || "").toString(), r.push(t), this.sort && r.sort();
          }, this.removeOption = function (t, e) {
            for (e = e || !1, t = (t = t || "").toString(); -1 !== r.indexOf(t) && (r.splice(r.indexOf(t), 1), !1 !== e);) {
              ;
            }
          }, Object.defineProperty(this, "combo", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 18));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 18) : this.Ff = N(this.Ff, 18);
            }
          }), Object.defineProperty(this, "edit", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 19));
            },
            set: function set(t) {
              !0 === this.combo && (!0 === Boolean(t) ? this.Ff = x(this.Ff, 19) : this.Ff = N(this.Ff, 19));
            }
          }), Object.defineProperty(this, "sort", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 20));
            },
            set: function set(t) {
              !0 === Boolean(t) ? (this.Ff = x(this.Ff, 20), r.sort()) : this.Ff = N(this.Ff, 20);
            }
          }), Object.defineProperty(this, "multiSelect", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 22));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 22) : this.Ff = N(this.Ff, 22);
            }
          }), Object.defineProperty(this, "doNotSpellCheck", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 23));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 23) : this.Ff = N(this.Ff, 23);
            }
          }), Object.defineProperty(this, "commitOnSelChange", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 27));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 27) : this.Ff = N(this.Ff, 27);
            }
          }), this.hasAppearanceStream = !1;
        };

        r(O, M);

        var q = function q() {
          O.call(this), this.fontName = "helvetica", this.combo = !1;
        };

        r(q, O);

        var T = function T() {
          q.call(this), this.combo = !0;
        };

        r(T, q);

        var R = function R() {
          T.call(this), this.edit = !0;
        };

        r(R, T);

        var D = function D() {
          M.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 15));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 15) : this.Ff = N(this.Ff, 15);
            }
          }), Object.defineProperty(this, "radio", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 16));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 16) : this.Ff = N(this.Ff, 16);
            }
          }), Object.defineProperty(this, "pushButton", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 17));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 17) : this.Ff = N(this.Ff, 17);
            }
          }), Object.defineProperty(this, "radioIsUnison", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 26));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 26) : this.Ff = N(this.Ff, 26);
            }
          });
          var e,
              n = {};
          Object.defineProperty(this, "MK", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              if (0 !== Object.keys(n).length) {
                var t,
                    e = [];

                for (t in e.push("<<"), n) {
                  e.push("/" + t + " (" + n[t] + ")");
                }

                return e.push(">>"), e.join("\n");
              }
            },
            set: function set(t) {
              "object" === se(t) && (n = t);
            }
          }), Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return n.CA || "";
            },
            set: function set(t) {
              "string" == typeof t && (n.CA = t);
            }
          }), Object.defineProperty(this, "AS", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              return e;
            },
            set: function set(t) {
              e = t;
            }
          }), Object.defineProperty(this, "appearanceState", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return e.substr(1, e.length - 1);
            },
            set: function set(t) {
              e = "/" + t;
            }
          });
        };

        r(D, M);

        var U = function U() {
          D.call(this), this.pushButton = !0;
        };

        r(U, D);

        var z = function z() {
          D.call(this), this.radio = !0, this.pushButton = !1;
          var e = [];
          Object.defineProperty(this, "Kids", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              return e;
            },
            set: function set(t) {
              e = void 0 !== t ? t : [];
            }
          });
        };

        r(z, D);

        var H = function H() {
          var e, n;
          M.call(this), Object.defineProperty(this, "Parent", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              return e;
            },
            set: function set(t) {
              e = t;
            }
          }), Object.defineProperty(this, "optionName", {
            enumerable: !1,
            configurable: !0,
            get: function get() {
              return n;
            },
            set: function set(t) {
              n = t;
            }
          });
          var r,
              i = {};
          Object.defineProperty(this, "MK", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              var t,
                  e = [];

              for (t in e.push("<<"), i) {
                e.push("/" + t + " (" + i[t] + ")");
              }

              return e.push(">>"), e.join("\n");
            },
            set: function set(t) {
              "object" === se(t) && (i = t);
            }
          }), Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return i.CA || "";
            },
            set: function set(t) {
              "string" == typeof t && (i.CA = t);
            }
          }), Object.defineProperty(this, "AS", {
            enumerable: !1,
            configurable: !1,
            get: function get() {
              return r;
            },
            set: function set(t) {
              r = t;
            }
          }), Object.defineProperty(this, "appearanceState", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return r.substr(1, r.length - 1);
            },
            set: function set(t) {
              r = "/" + t;
            }
          }), this.optionName = name, this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Y.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(name);
        };

        r(H, M), z.prototype.setAppearance = function (t) {
          if (!("createAppearanceStream" in t && "getCA" in t)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");

          for (var e in this.Kids) {
            if (this.Kids.hasOwnProperty(e)) {
              var n = this.Kids[e];
              n.appearanceStreamContent = t.createAppearanceStream(n.optionName), n.caption = t.getCA();
            }
          }
        }, z.prototype.createOption = function (t) {
          this.Kids.length;
          var e = new H();
          return e.Parent = this, e.optionName = t, this.Kids.push(e), J.call(this, e), e;
        };

        var W = function W() {
          D.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Y.CheckBox.createAppearanceStream();
        };

        r(W, D);

        var V = function V() {
          M.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 13));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 13) : this.Ff = N(this.Ff, 13);
            }
          }), Object.defineProperty(this, "fileSelect", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 21));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 21) : this.Ff = N(this.Ff, 21);
            }
          }), Object.defineProperty(this, "doNotSpellCheck", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 23));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 23) : this.Ff = N(this.Ff, 23);
            }
          }), Object.defineProperty(this, "doNotScroll", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 24));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 24) : this.Ff = N(this.Ff, 24);
            }
          }), Object.defineProperty(this, "comb", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 25));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 25) : this.Ff = N(this.Ff, 25);
            }
          }), Object.defineProperty(this, "richText", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 26));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 26) : this.Ff = N(this.Ff, 26);
            }
          });
          var e = null;
          Object.defineProperty(this, "MaxLen", {
            enumerable: !0,
            configurable: !1,
            get: function get() {
              return e;
            },
            set: function set(t) {
              e = t;
            }
          }), Object.defineProperty(this, "maxLength", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return e;
            },
            set: function set(t) {
              Number.isInteger(t) && (e = t);
            }
          }), Object.defineProperty(this, "hasAppearanceStream", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return this.V || this.DV;
            }
          });
        };

        r(V, M);

        var G = function G() {
          V.call(this), Object.defineProperty(this, "password", {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              return Boolean(b(this.Ff, 14));
            },
            set: function set(t) {
              !0 === Boolean(t) ? this.Ff = x(this.Ff, 14) : this.Ff = N(this.Ff, 14);
            }
          }), this.password = !0;
        };

        r(G, V);
        var Y = {
          CheckBox: {
            createAppearanceStream: function createAppearanceStream() {
              return {
                N: {
                  On: Y.CheckBox.YesNormal
                },
                D: {
                  On: Y.CheckBox.YesPushDown,
                  Off: Y.CheckBox.OffPushDown
                }
              };
            },
            YesPushDown: function YesPushDown(t) {
              var e = l(t),
                  n = [],
                  r = A.internal.getFont(t.fontName, t.fontStyle).id,
                  i = A.__private__.encodeColorString(t.color),
                  o = h(t, t.caption);

              return n.push("0.749023 g"), n.push("0 0 " + _(Y.internal.getWidth(t)) + " " + _(Y.internal.getHeight(t)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + r + " " + _(o.fontSize) + " Tf " + i), n.push("BT"), n.push(o.text), n.push("ET"), n.push("Q"), n.push("EMC"), e.stream = n.join("\n"), e;
            },
            YesNormal: function YesNormal(t) {
              var e = l(t),
                  n = A.internal.getFont(t.fontName, t.fontStyle).id,
                  r = A.__private__.encodeColorString(t.color),
                  i = [],
                  o = Y.internal.getHeight(t),
                  a = Y.internal.getWidth(t),
                  s = h(t, t.caption);

              return i.push("1 g"), i.push("0 0 " + _(a) + " " + _(o) + " re"), i.push("f"), i.push("q"), i.push("0 0 1 rg"), i.push("0 0 " + _(a - 1) + " " + _(o - 1) + " re"), i.push("W"), i.push("n"), i.push("0 g"), i.push("BT"), i.push("/" + n + " " + _(s.fontSize) + " Tf " + r), i.push(s.text), i.push("ET"), i.push("Q"), e.stream = i.join("\n"), e;
            },
            OffPushDown: function OffPushDown(t) {
              var e = l(t),
                  n = [];
              return n.push("0.749023 g"), n.push("0 0 " + _(Y.internal.getWidth(t)) + " " + _(Y.internal.getHeight(t)) + " re"), n.push("f"), e.stream = n.join("\n"), e;
            }
          },
          RadioButton: {
            Circle: {
              createAppearanceStream: function createAppearanceStream(t) {
                var e = {
                  D: {
                    Off: Y.RadioButton.Circle.OffPushDown
                  },
                  N: {}
                };
                return e.N[t] = Y.RadioButton.Circle.YesNormal, e.D[t] = Y.RadioButton.Circle.YesPushDown, e;
              },
              getCA: function getCA() {
                return "l";
              },
              YesNormal: function YesNormal(t) {
                var e = l(t),
                    n = [],
                    r = Y.internal.getWidth(t) <= Y.internal.getHeight(t) ? Y.internal.getWidth(t) / 4 : Y.internal.getHeight(t) / 4;
                r = Number((.9 * r).toFixed(5));
                var i = Y.internal.Bezier_C,
                    o = Number((r * i).toFixed(5));
                return n.push("q"), n.push("1 0 0 1 " + s(Y.internal.getWidth(t) / 2) + " " + s(Y.internal.getHeight(t) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + o + " " + o + " " + r + " 0 " + r + " c"), n.push("-" + o + " " + r + " -" + r + " " + o + " -" + r + " 0 c"), n.push("-" + r + " -" + o + " -" + o + " -" + r + " 0 -" + r + " c"), n.push(o + " -" + r + " " + r + " -" + o + " " + r + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e;
              },
              YesPushDown: function YesPushDown(t) {
                var e = l(t),
                    n = [],
                    r = Y.internal.getWidth(t) <= Y.internal.getHeight(t) ? Y.internal.getWidth(t) / 4 : Y.internal.getHeight(t) / 4,
                    i = (r = Number((.9 * r).toFixed(5)), Number((2 * r).toFixed(5))),
                    o = Number((i * Y.internal.Bezier_C).toFixed(5)),
                    a = Number((r * Y.internal.Bezier_C).toFixed(5));
                return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + s(Y.internal.getWidth(t) / 2) + " " + s(Y.internal.getHeight(t) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"), n.push("-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"), n.push("-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"), n.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + s(Y.internal.getWidth(t) / 2) + " " + s(Y.internal.getHeight(t) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + a + " " + a + " " + r + " 0 " + r + " c"), n.push("-" + a + " " + r + " -" + r + " " + a + " -" + r + " 0 c"), n.push("-" + r + " -" + a + " -" + a + " -" + r + " 0 -" + r + " c"), n.push(a + " -" + r + " " + r + " -" + a + " " + r + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e;
              },
              OffPushDown: function OffPushDown(t) {
                var e = l(t),
                    n = [],
                    r = Y.internal.getWidth(t) <= Y.internal.getHeight(t) ? Y.internal.getWidth(t) / 4 : Y.internal.getHeight(t) / 4,
                    i = (r = Number((.9 * r).toFixed(5)), Number((2 * r).toFixed(5))),
                    o = Number((i * Y.internal.Bezier_C).toFixed(5));
                return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + s(Y.internal.getWidth(t) / 2) + " " + s(Y.internal.getHeight(t) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"), n.push("-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"), n.push("-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"), n.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e;
              }
            },
            Cross: {
              createAppearanceStream: function createAppearanceStream(t) {
                var e = {
                  D: {
                    Off: Y.RadioButton.Cross.OffPushDown
                  },
                  N: {}
                };
                return e.N[t] = Y.RadioButton.Cross.YesNormal, e.D[t] = Y.RadioButton.Cross.YesPushDown, e;
              },
              getCA: function getCA() {
                return "8";
              },
              YesNormal: function YesNormal(t) {
                var e = l(t),
                    n = [],
                    r = Y.internal.calculateCross(t);
                return n.push("q"), n.push("1 1 " + _(Y.internal.getWidth(t) - 2) + " " + _(Y.internal.getHeight(t) - 2) + " re"), n.push("W"), n.push("n"), n.push(_(r.x1.x) + " " + _(r.x1.y) + " m"), n.push(_(r.x2.x) + " " + _(r.x2.y) + " l"), n.push(_(r.x4.x) + " " + _(r.x4.y) + " m"), n.push(_(r.x3.x) + " " + _(r.x3.y) + " l"), n.push("s"), n.push("Q"), e.stream = n.join("\n"), e;
              },
              YesPushDown: function YesPushDown(t) {
                var e = l(t),
                    n = Y.internal.calculateCross(t),
                    r = [];
                return r.push("0.749023 g"), r.push("0 0 " + _(Y.internal.getWidth(t)) + " " + _(Y.internal.getHeight(t)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + _(Y.internal.getWidth(t) - 2) + " " + _(Y.internal.getHeight(t) - 2) + " re"), r.push("W"), r.push("n"), r.push(_(n.x1.x) + " " + _(n.x1.y) + " m"), r.push(_(n.x2.x) + " " + _(n.x2.y) + " l"), r.push(_(n.x4.x) + " " + _(n.x4.y) + " m"), r.push(_(n.x3.x) + " " + _(n.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join("\n"), e;
              },
              OffPushDown: function OffPushDown(t) {
                var e = l(t),
                    n = [];
                return n.push("0.749023 g"), n.push("0 0 " + _(Y.internal.getWidth(t)) + " " + _(Y.internal.getHeight(t)) + " re"), n.push("f"), e.stream = n.join("\n"), e;
              }
            }
          },
          createDefaultAppearanceStream: function createDefaultAppearanceStream(t) {
            var e = A.internal.getFont(t.fontName, t.fontStyle).id,
                n = A.__private__.encodeColorString(t.color);

            return "/" + e + " " + t.fontSize + " Tf " + n;
          }
        };
        Y.internal = {
          Bezier_C: .551915024494,
          calculateCross: function calculateCross(t) {
            var e = Y.internal.getWidth(t),
                n = Y.internal.getHeight(t),
                r = Math.min(e, n);
            return {
              x1: {
                x: (e - r) / 2,
                y: (n - r) / 2 + r
              },
              x2: {
                x: (e - r) / 2 + r,
                y: (n - r) / 2
              },
              x3: {
                x: (e - r) / 2,
                y: (n - r) / 2
              },
              x4: {
                x: (e - r) / 2 + r,
                y: (n - r) / 2 + r
              }
            };
          }
        }, Y.internal.getWidth = function (t) {
          var e = 0;
          return "object" === se(t) && (e = v(t.Rect[2])), e;
        }, Y.internal.getHeight = function (t) {
          var e = 0;
          return "object" === se(t) && (e = v(t.Rect[3])), e;
        };

        var J = t.addField = function (t) {
          if (k.call(this), !(t instanceof M)) throw new Error("Invalid argument passed to jsPDF.addField.");
          return function (t) {
            A.internal.acroformPlugin.printedOut && (A.internal.acroformPlugin.printedOut = !1, A.internal.acroformPlugin.acroFormDictionaryRoot = null), A.internal.acroformPlugin.acroFormDictionaryRoot || k.call(A), A.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t);
          }.call(this, t), t.page = A.internal.getCurrentPageInfo().pageNumber, this;
        };

        t.addButton = function (t) {
          if (t instanceof D == !1) throw new Error("Invalid argument passed to jsPDF.addButton.");
          return J.call(this, t);
        }, t.addTextField = function (t) {
          if (t instanceof V == !1) throw new Error("Invalid argument passed to jsPDF.addTextField.");
          return J.call(this, t);
        }, t.addChoiceField = function (t) {
          if (t instanceof O == !1) throw new Error("Invalid argument passed to jsPDF.addChoiceField.");
          return J.call(this, t);
        };
        "object" == se(e) && void 0 === e.ChoiceField && void 0 === e.ListBox && void 0 === e.ComboBox && void 0 === e.EditBox && void 0 === e.Button && void 0 === e.PushButton && void 0 === e.RadioButton && void 0 === e.CheckBox && void 0 === e.TextField && void 0 === e.PasswordField ? (e.ChoiceField = O, e.ListBox = q, e.ComboBox = T, e.EditBox = R, e.Button = D, e.PushButton = U, e.RadioButton = z, e.CheckBox = W, e.TextField = V, e.PasswordField = G, e.AcroForm = {
          Appearance: Y
        }) : console.warn("AcroForm-Classes are not populated into global-namespace, because the class-Names exist already."), t.AcroFormChoiceField = O, t.AcroFormListBox = q, t.AcroFormComboBox = T, t.AcroFormEditBox = R, t.AcroFormButton = D, t.AcroFormPushButton = U, t.AcroFormRadioButton = z, t.AcroFormCheckBox = W, t.AcroFormTextField = V, t.AcroFormPasswordField = G, t.AcroFormAppearance = Y, t.AcroForm = {
          ChoiceField: O,
          ListBox: q,
          ComboBox: T,
          EditBox: R,
          Button: D,
          PushButton: U,
          RadioButton: z,
          CheckBox: W,
          TextField: V,
          PasswordField: G,
          Appearance: Y
        };
      })((window.tmp = lt).API, "undefined" != typeof window && window || "undefined" != typeof global && global),
      /** @license
         * jsPDF addImage plugin
         * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
         *               2013 Chris Dowling, https://github.com/gingerchris
         *               2013 Trinh Ho, https://github.com/ineedfat
         *               2013 Edwin Alejandro Perez, https://github.com/eaparango
         *               2013 Norah Smith, https://github.com/burnburnrocket
         *               2014 Diego Casorran, https://github.com/diegocr
         *               2014 James Robb, https://github.com/jamesbrobb
         *
         * 
         */
      function (x) {
        var N = "addImage_",
            l = {
          PNG: [[137, 80, 78, 71]],
          TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]],
          JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0]],
          JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
          GIF87a: [[71, 73, 70, 56, 55, 97]],
          GIF89a: [[71, 73, 70, 56, 57, 97]],
          BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]]
        },
            h = x.getImageFileTypeByImageData = function (t, e) {
          var n, r;
          e = e || "UNKNOWN";
          var i,
              o,
              a,
              s = "UNKNOWN";

          for (a in x.isArrayBufferView(t) && (t = x.arrayBufferToBinaryString(t)), l) {
            for (i = l[a], n = 0; n < i.length; n += 1) {
              for (o = !0, r = 0; r < i[n].length; r += 1) {
                if (void 0 !== i[n][r] && i[n][r] !== t.charCodeAt(r)) {
                  o = !1;
                  break;
                }
              }

              if (!0 === o) {
                s = a;
                break;
              }
            }
          }

          return "UNKNOWN" === s && "UNKNOWN" !== e && (console.warn('FileType of Image not recognized. Processing image as "' + e + '".'), s = e), s;
        },
            n = function t(e) {
          for (var n = this.internal.newObject(), r = this.internal.write, i = this.internal.putStream, o = (0, this.internal.getFilters)(); -1 !== o.indexOf("FlateEncode");) {
            o.splice(o.indexOf("FlateEncode"), 1);
          }

          e.n = n;
          var a = [];

          if (a.push({
            key: "Type",
            value: "/XObject"
          }), a.push({
            key: "Subtype",
            value: "/Image"
          }), a.push({
            key: "Width",
            value: e.w
          }), a.push({
            key: "Height",
            value: e.h
          }), e.cs === this.color_spaces.INDEXED ? a.push({
            key: "ColorSpace",
            value: "[/Indexed /DeviceRGB " + (e.pal.length / 3 - 1) + " " + ("smask" in e ? n + 2 : n + 1) + " 0 R]"
          }) : (a.push({
            key: "ColorSpace",
            value: "/" + e.cs
          }), e.cs === this.color_spaces.DEVICE_CMYK && a.push({
            key: "Decode",
            value: "[1 0 1 0 1 0 1 0]"
          })), a.push({
            key: "BitsPerComponent",
            value: e.bpc
          }), "dp" in e && a.push({
            key: "DecodeParms",
            value: "<<" + e.dp + ">>"
          }), "trns" in e && e.trns.constructor == Array) {
            for (var s = "", l = 0, h = e.trns.length; l < h; l++) {
              s += e.trns[l] + " " + e.trns[l] + " ";
            }

            a.push({
              key: "Mask",
              value: "[" + s + "]"
            });
          }

          "smask" in e && a.push({
            key: "SMask",
            value: n + 1 + " 0 R"
          });
          var u = void 0 !== e.f ? ["/" + e.f] : void 0;

          if (i({
            data: e.data,
            additionalKeyValues: a,
            alreadyAppliedFilters: u
          }), r("endobj"), "smask" in e) {
            var c = "/Predictor " + e.p + " /Colors 1 /BitsPerComponent " + e.bpc + " /Columns " + e.w,
                f = {
              w: e.w,
              h: e.h,
              cs: "DeviceGray",
              bpc: e.bpc,
              dp: c,
              data: e.smask
            };
            "f" in e && (f.f = e.f), t.call(this, f);
          }

          e.cs === this.color_spaces.INDEXED && (this.internal.newObject(), i({
            data: this.arrayBufferToBinaryString(new Uint8Array(e.pal))
          }), r("endobj"));
        },
            L = function L() {
          var t = this.internal.collections[N + "images"];

          for (var e in t) {
            n.call(this, t[e]);
          }
        },
            A = function A() {
          var t,
              e = this.internal.collections[N + "images"],
              n = this.internal.write;

          for (var r in e) {
            n("/I" + (t = e[r]).i, t.n, "0", "R");
          }
        },
            S = function S(t) {
          return "function" == typeof x["process" + t.toUpperCase()];
        },
            _ = function _(t) {
          return "object" === se(t) && 1 === t.nodeType;
        },
            F = function F(t, e) {
          if ("IMG" === t.nodeName && t.hasAttribute("src")) {
            var n = "" + t.getAttribute("src");
            if (0 === n.indexOf("data:image/")) return unescape(n);
            var r = x.loadFile(n);
            if (void 0 !== r) return btoa(r);
          }

          if ("CANVAS" === t.nodeName) {
            var i = t;
            return t.toDataURL("image/jpeg", 1);
          }

          (i = document.createElement("canvas")).width = t.clientWidth || t.width, i.height = t.clientHeight || t.height;
          var o = i.getContext("2d");
          if (!o) throw "addImage requires canvas to be supported by browser.";
          return o.drawImage(t, 0, 0, i.width, i.height), i.toDataURL("png" == ("" + e).toLowerCase() ? "image/png" : "image/jpeg");
        },
            P = function P(t, e) {
          var n;
          if (e) for (var r in e) {
            if (t === e[r].alias) {
              n = e[r];
              break;
            }
          }
          return n;
        };

        x.color_spaces = {
          DEVICE_RGB: "DeviceRGB",
          DEVICE_GRAY: "DeviceGray",
          DEVICE_CMYK: "DeviceCMYK",
          CAL_GREY: "CalGray",
          CAL_RGB: "CalRGB",
          LAB: "Lab",
          ICC_BASED: "ICCBased",
          INDEXED: "Indexed",
          PATTERN: "Pattern",
          SEPARATION: "Separation",
          DEVICE_N: "DeviceN"
        }, x.decode = {
          DCT_DECODE: "DCTDecode",
          FLATE_DECODE: "FlateDecode",
          LZW_DECODE: "LZWDecode",
          JPX_DECODE: "JPXDecode",
          JBIG2_DECODE: "JBIG2Decode",
          ASCII85_DECODE: "ASCII85Decode",
          ASCII_HEX_DECODE: "ASCIIHexDecode",
          RUN_LENGTH_DECODE: "RunLengthDecode",
          CCITT_FAX_DECODE: "CCITTFaxDecode"
        }, x.image_compression = {
          NONE: "NONE",
          FAST: "FAST",
          MEDIUM: "MEDIUM",
          SLOW: "SLOW"
        }, x.sHashCode = function (t) {
          var e,
              n = 0;
          if (0 === (t = t || "").length) return n;

          for (e = 0; e < t.length; e++) {
            n = (n << 5) - n + t.charCodeAt(e), n |= 0;
          }

          return n;
        }, x.isString = function (t) {
          return "string" == typeof t;
        }, x.validateStringAsBase64 = function (t) {
          (t = t || "").toString().trim();
          var e = !0;
          return 0 === t.length && (e = !1), t.length % 4 != 0 && (e = !1), !1 === /^[A-Za-z0-9+\/]+$/.test(t.substr(0, t.length - 2)) && (e = !1), !1 === /^[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==$/.test(t.substr(-2)) && (e = !1), e;
        }, x.extractInfoFromBase64DataURI = function (t) {
          return /^data:([\w]+?\/([\w]+?));\S*;*base64,(.+)$/g.exec(t);
        }, x.extractImageFromDataUrl = function (t) {
          var e = (t = t || "").split("base64,"),
              n = null;

          if (2 === e.length) {
            var r = /^data:(\w*\/\w*);*(charset=[\w=-]*)*;*$/.exec(e[0]);
            Array.isArray(r) && (n = {
              mimeType: r[1],
              charset: r[2],
              data: e[1]
            });
          }

          return n;
        }, x.supportsArrayBuffer = function () {
          return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array;
        }, x.isArrayBuffer = function (t) {
          return !!this.supportsArrayBuffer() && t instanceof ArrayBuffer;
        }, x.isArrayBufferView = function (t) {
          return !!this.supportsArrayBuffer() && "undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array);
        }, x.binaryStringToUint8Array = function (t) {
          for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++) {
            n[r] = t.charCodeAt(r);
          }

          return n;
        }, x.arrayBufferToBinaryString = function (t) {
          if ("function" == typeof atob) return atob(this.arrayBufferToBase64(t));
        }, x.arrayBufferToBase64 = function (t) {
          for (var e, n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = new Uint8Array(t), o = i.byteLength, a = o % 3, s = o - a, l = 0; l < s; l += 3) {
            n += r[(16515072 & (e = i[l] << 16 | i[l + 1] << 8 | i[l + 2])) >> 18] + r[(258048 & e) >> 12] + r[(4032 & e) >> 6] + r[63 & e];
          }

          return 1 == a ? n += r[(252 & (e = i[s])) >> 2] + r[(3 & e) << 4] + "==" : 2 == a && (n += r[(64512 & (e = i[s] << 8 | i[s + 1])) >> 10] + r[(1008 & e) >> 4] + r[(15 & e) << 2] + "="), n;
        }, x.createImageInfo = function (t, e, n, r, i, o, a, s, l, h, u, c, f) {
          var p = {
            alias: s,
            w: e,
            h: n,
            cs: r,
            bpc: i,
            i: a,
            data: t
          };
          return o && (p.f = o), l && (p.dp = l), h && (p.trns = h), u && (p.pal = u), c && (p.smask = c), f && (p.p = f), p;
        }, x.addImage = function (t, e, n, r, i, o, a, s, l) {
          var h = "";

          if ("string" != typeof e) {
            var u = o;
            o = i, i = r, r = n, n = e, e = u;
          }

          if ("object" === se(t) && !_(t) && "imageData" in t) {
            var c = t;
            t = c.imageData, e = c.format || e || "UNKNOWN", n = c.x || n || 0, r = c.y || r || 0, i = c.w || i, o = c.h || o, a = c.alias || a, s = c.compression || s, l = c.rotation || c.angle || l;
          }

          var f = this.internal.getFilters();
          if (void 0 === s && -1 !== f.indexOf("FlateEncode") && (s = "SLOW"), "string" == typeof t && (t = unescape(t)), isNaN(n) || isNaN(r)) throw console.error("jsPDF.addImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addImage");

          var p,
              d,
              g,
              m,
              y,
              v,
              w,
              b = function () {
            var t = this.internal.collections[N + "images"];
            return t || (this.internal.collections[N + "images"] = t = {}, this.internal.events.subscribe("putResources", L), this.internal.events.subscribe("putXobjectDict", A)), t;
          }.call(this);

          if (!((p = P(t, b)) || (_(t) && (t = F(t, e)), (null == (w = a) || 0 === w.length) && (a = "string" == typeof (v = t) ? x.sHashCode(v) : x.isArrayBufferView(v) ? x.sHashCode(x.arrayBufferToBinaryString(v)) : null), p = P(a, b)))) {
            if (this.isString(t) && ("" !== (h = this.convertStringToImageData(t)) ? t = h : void 0 !== (h = x.loadFile(t)) && (t = h)), e = this.getImageFileTypeByImageData(t, e), !S(e)) throw new Error("addImage does not support files of type '" + e + "', please ensure that a plugin for '" + e + "' support is added.");
            if (this.supportsArrayBuffer() && (t instanceof Uint8Array || (d = t, t = this.binaryStringToUint8Array(t))), !(p = this["process" + e.toUpperCase()](t, (y = 0, (m = b) && (y = Object.keys ? Object.keys(m).length : function (t) {
              var e = 0;

              for (var n in t) {
                t.hasOwnProperty(n) && e++;
              }

              return e;
            }(m)), y), a, ((g = s) && "string" == typeof g && (g = g.toUpperCase()), g in x.image_compression ? g : x.image_compression.NONE), d))) throw new Error("An unknown error occurred whilst processing the image");
          }

          return function (t, e, n, r, i, o, a, s) {
            var l = function (t, e, n) {
              return t || e || (e = t = -96), t < 0 && (t = -1 * n.w * 72 / t / this.internal.scaleFactor), e < 0 && (e = -1 * n.h * 72 / e / this.internal.scaleFactor), 0 === t && (t = e * n.w / n.h), 0 === e && (e = t * n.h / n.w), [t, e];
            }.call(this, n, r, i),
                h = this.internal.getCoordinateString,
                u = this.internal.getVerticalCoordinateString;

            if (n = l[0], r = l[1], a[o] = i, s) {
              s *= Math.PI / 180;

              var c = Math.cos(s),
                  f = Math.sin(s),
                  p = function p(t) {
                return t.toFixed(4);
              },
                  d = [p(c), p(f), p(-1 * f), p(c), 0, 0, "cm"];
            }

            this.internal.write("q"), s ? (this.internal.write([1, "0", "0", 1, h(t), u(e + r), "cm"].join(" ")), this.internal.write(d.join(" ")), this.internal.write([h(n), "0", "0", h(r), "0", "0", "cm"].join(" "))) : this.internal.write([h(n), "0", "0", h(r), h(t), u(e + r), "cm"].join(" ")), this.internal.write("/I" + i.i + " Do"), this.internal.write("Q");
          }.call(this, n, r, i, o, p, p.i, b, l), this;
        }, x.convertStringToImageData = function (t) {
          var e,
              n = "";

          if (this.isString(t)) {
            var r;
            e = null !== (r = this.extractImageFromDataUrl(t)) ? r.data : t;

            try {
              n = atob(e);
            } catch (t) {
              throw x.validateStringAsBase64(e) ? new Error("atob-Error in jsPDF.convertStringToImageData " + t.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertStringToImageData ");
            }
          }

          return n;
        };

        var u = function u(t, e) {
          return t.subarray(e, e + 5);
        };

        x.processJPEG = function (t, e, n, r, i, o) {
          var a,
              s = this.decode.DCT_DECODE;
          if (!this.isString(t) && !this.isArrayBuffer(t) && !this.isArrayBufferView(t)) return null;
          if (this.isString(t) && (a = function (t) {
            var e;
            if ("JPEG" !== h(t)) throw new Error("getJpegSize requires a binary string jpeg file");

            for (var n = 256 * t.charCodeAt(4) + t.charCodeAt(5), r = 4, i = t.length; r < i;) {
              if (r += n, 255 !== t.charCodeAt(r)) throw new Error("getJpegSize could not find the size of the image");
              if (192 === t.charCodeAt(r + 1) || 193 === t.charCodeAt(r + 1) || 194 === t.charCodeAt(r + 1) || 195 === t.charCodeAt(r + 1) || 196 === t.charCodeAt(r + 1) || 197 === t.charCodeAt(r + 1) || 198 === t.charCodeAt(r + 1) || 199 === t.charCodeAt(r + 1)) return e = 256 * t.charCodeAt(r + 5) + t.charCodeAt(r + 6), [256 * t.charCodeAt(r + 7) + t.charCodeAt(r + 8), e, t.charCodeAt(r + 9)];
              r += 2, n = 256 * t.charCodeAt(r) + t.charCodeAt(r + 1);
            }
          }(t)), this.isArrayBuffer(t) && (t = new Uint8Array(t)), this.isArrayBufferView(t) && (a = function (t) {
            if (65496 != (t[0] << 8 | t[1])) throw new Error("Supplied data is not a JPEG");

            for (var e, n = t.length, r = (t[4] << 8) + t[5], i = 4; i < n;) {
              if (r = ((e = u(t, i += r))[2] << 8) + e[3], (192 === e[1] || 194 === e[1]) && 255 === e[0] && 7 < r) return {
                width: ((e = u(t, i + 5))[2] << 8) + e[3],
                height: (e[0] << 8) + e[1],
                numcomponents: e[4]
              };
              i += 2;
            }

            throw new Error("getJpegSizeFromBytes could not find the size of the image");
          }(t), t = i || this.arrayBufferToBinaryString(t)), void 0 === o) switch (a.numcomponents) {
            case 1:
              o = this.color_spaces.DEVICE_GRAY;
              break;

            case 4:
              o = this.color_spaces.DEVICE_CMYK;
              break;

            default:
            case 3:
              o = this.color_spaces.DEVICE_RGB;
          }
          return this.createImageInfo(t, a.width, a.height, o, 8, s, e, n);
        }, x.processJPG = function () {
          return this.processJPEG.apply(this, arguments);
        }, x.getImageProperties = function (t) {
          var e,
              n,
              r = "";
          if (_(t) && (t = F(t)), this.isString(t) && ("" !== (r = this.convertStringToImageData(t)) ? t = r : void 0 !== (r = x.loadFile(t)) && (t = r)), n = this.getImageFileTypeByImageData(t), !S(n)) throw new Error("addImage does not support files of type '" + n + "', please ensure that a plugin for '" + n + "' support is added.");
          if (this.supportsArrayBuffer() && (t instanceof Uint8Array || (t = this.binaryStringToUint8Array(t))), !(e = this["process" + n.toUpperCase()](t))) throw new Error("An unknown error occurred whilst processing the image");
          return {
            fileType: n,
            width: e.w,
            height: e.h,
            colorSpace: e.cs,
            compressionMode: e.f,
            bitsPerComponent: e.bpc
          };
        };
      }(lt.API),
      /**
         * @license
         * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
      t = lt.API, lt.API.events.push(["addPage", function (t) {
        this.internal.getPageInfo(t.pageNumber).pageContext.annotations = [];
      }]), t.events.push(["putPage", function (t) {
        for (var e = this.internal.getPageInfoByObjId(t.objId), n = t.pageContext.annotations, r = function r(t) {
          if (void 0 !== t && "" != t) return !0;
        }, i = !1, o = 0; o < n.length && !i; o++) {
          switch ((l = n[o]).type) {
            case "link":
              if (r(l.options.url) || r(l.options.pageNumber)) {
                i = !0;
                break;
              }

            case "reference":
            case "text":
            case "freetext":
              i = !0;
          }
        }

        if (0 != i) {
          this.internal.write("/Annots ["), this.internal.pageSize.height;
          var a = this.internal.getCoordinateString,
              s = this.internal.getVerticalCoordinateString;

          for (o = 0; o < n.length; o++) {
            var l;

            switch ((l = n[o]).type) {
              case "reference":
                this.internal.write(" " + l.object.objId + " 0 R ");
                break;

              case "text":
                var h = this.internal.newAdditionalObject(),
                    u = this.internal.newAdditionalObject(),
                    c = l.title || "Note";
                m = "<</Type /Annot /Subtype /Text " + (p = "/Rect [" + a(l.bounds.x) + " " + s(l.bounds.y + l.bounds.h) + " " + a(l.bounds.x + l.bounds.w) + " " + s(l.bounds.y) + "] ") + "/Contents (" + l.contents + ")", m += " /Popup " + u.objId + " 0 R", m += " /P " + e.objId + " 0 R", m += " /T (" + c + ") >>", h.content = m;
                var f = h.objId + " 0 R";
                m = "<</Type /Annot /Subtype /Popup " + (p = "/Rect [" + a(l.bounds.x + 30) + " " + s(l.bounds.y + l.bounds.h) + " " + a(l.bounds.x + l.bounds.w + 30) + " " + s(l.bounds.y) + "] ") + " /Parent " + f, l.open && (m += " /Open true"), m += " >>", u.content = m, this.internal.write(h.objId, "0 R", u.objId, "0 R");
                break;

              case "freetext":
                var p = "/Rect [" + a(l.bounds.x) + " " + s(l.bounds.y) + " " + a(l.bounds.x + l.bounds.w) + " " + s(l.bounds.y + l.bounds.h) + "] ",
                    d = l.color || "#000000";
                m = "<</Type /Annot /Subtype /FreeText " + p + "/Contents (" + l.contents + ")", m += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + d + ")", m += " /Border [0 0 0]", m += " >>", this.internal.write(m);
                break;

              case "link":
                if (l.options.name) {
                  var g = this.annotations._nameMap[l.options.name];
                  l.options.pageNumber = g.page, l.options.top = g.y;
                } else l.options.top || (l.options.top = 0);

                p = "/Rect [" + a(l.x) + " " + s(l.y) + " " + a(l.x + l.w) + " " + s(l.y + l.h) + "] ";
                var m = "";
                if (l.options.url) m = "<</Type /Annot /Subtype /Link " + p + "/Border [0 0 0] /A <</S /URI /URI (" + l.options.url + ") >>";else if (l.options.pageNumber) switch (m = "<</Type /Annot /Subtype /Link " + p + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(l.options.pageNumber).objId + " 0 R", l.options.magFactor = l.options.magFactor || "XYZ", l.options.magFactor) {
                  case "Fit":
                    m += " /Fit]";
                    break;

                  case "FitH":
                    m += " /FitH " + l.options.top + "]";
                    break;

                  case "FitV":
                    l.options.left = l.options.left || 0, m += " /FitV " + l.options.left + "]";
                    break;

                  case "XYZ":
                  default:
                    var y = s(l.options.top);
                    l.options.left = l.options.left || 0, void 0 === l.options.zoom && (l.options.zoom = 0), m += " /XYZ " + l.options.left + " " + y + " " + l.options.zoom + "]";
                }
                "" != m && (m += " >>", this.internal.write(m));
            }
          }

          this.internal.write("]");
        }
      }]), t.createAnnotation = function (t) {
        var e = this.internal.getCurrentPageInfo();

        switch (t.type) {
          case "link":
            this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
            break;

          case "text":
          case "freetext":
            e.pageContext.annotations.push(t);
        }
      }, t.link = function (t, e, n, r, i) {
        this.internal.getCurrentPageInfo().pageContext.annotations.push({
          x: t,
          y: e,
          w: n,
          h: r,
          options: i,
          type: "link"
        });
      }, t.textWithLink = function (t, e, n, r) {
        var i = this.getTextWidth(t),
            o = this.internal.getLineHeight() / this.internal.scaleFactor;
        return this.text(t, e, n), n += .2 * o, this.link(e, n - o, i, o, r), i;
      }, t.getTextWidth = function (t) {
        var e = this.internal.getFontSize();
        return this.getStringUnitWidth(t) * e / this.internal.scaleFactor;
      },
      /**
         * @license
         * Copyright (c) 2017 Aras Abbasi 
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
      function (t) {
        var h = {
          1569: [65152],
          1570: [65153, 65154],
          1571: [65155, 65156],
          1572: [65157, 65158],
          1573: [65159, 65160],
          1574: [65161, 65162, 65163, 65164],
          1575: [65165, 65166],
          1576: [65167, 65168, 65169, 65170],
          1577: [65171, 65172],
          1578: [65173, 65174, 65175, 65176],
          1579: [65177, 65178, 65179, 65180],
          1580: [65181, 65182, 65183, 65184],
          1581: [65185, 65186, 65187, 65188],
          1582: [65189, 65190, 65191, 65192],
          1583: [65193, 65194],
          1584: [65195, 65196],
          1585: [65197, 65198],
          1586: [65199, 65200],
          1587: [65201, 65202, 65203, 65204],
          1588: [65205, 65206, 65207, 65208],
          1589: [65209, 65210, 65211, 65212],
          1590: [65213, 65214, 65215, 65216],
          1591: [65217, 65218, 65219, 65220],
          1592: [65221, 65222, 65223, 65224],
          1593: [65225, 65226, 65227, 65228],
          1594: [65229, 65230, 65231, 65232],
          1601: [65233, 65234, 65235, 65236],
          1602: [65237, 65238, 65239, 65240],
          1603: [65241, 65242, 65243, 65244],
          1604: [65245, 65246, 65247, 65248],
          1605: [65249, 65250, 65251, 65252],
          1606: [65253, 65254, 65255, 65256],
          1607: [65257, 65258, 65259, 65260],
          1608: [65261, 65262],
          1609: [65263, 65264, 64488, 64489],
          1610: [65265, 65266, 65267, 65268],
          1649: [64336, 64337],
          1655: [64477],
          1657: [64358, 64359, 64360, 64361],
          1658: [64350, 64351, 64352, 64353],
          1659: [64338, 64339, 64340, 64341],
          1662: [64342, 64343, 64344, 64345],
          1663: [64354, 64355, 64356, 64357],
          1664: [64346, 64347, 64348, 64349],
          1667: [64374, 64375, 64376, 64377],
          1668: [64370, 64371, 64372, 64373],
          1670: [64378, 64379, 64380, 64381],
          1671: [64382, 64383, 64384, 64385],
          1672: [64392, 64393],
          1676: [64388, 64389],
          1677: [64386, 64387],
          1678: [64390, 64391],
          1681: [64396, 64397],
          1688: [64394, 64395],
          1700: [64362, 64363, 64364, 64365],
          1702: [64366, 64367, 64368, 64369],
          1705: [64398, 64399, 64400, 64401],
          1709: [64467, 64468, 64469, 64470],
          1711: [64402, 64403, 64404, 64405],
          1713: [64410, 64411, 64412, 64413],
          1715: [64406, 64407, 64408, 64409],
          1722: [64414, 64415],
          1723: [64416, 64417, 64418, 64419],
          1726: [64426, 64427, 64428, 64429],
          1728: [64420, 64421],
          1729: [64422, 64423, 64424, 64425],
          1733: [64480, 64481],
          1734: [64473, 64474],
          1735: [64471, 64472],
          1736: [64475, 64476],
          1737: [64482, 64483],
          1739: [64478, 64479],
          1740: [64508, 64509, 64510, 64511],
          1744: [64484, 64485, 64486, 64487],
          1746: [64430, 64431],
          1747: [64432, 64433]
        },
            a = {
          65247: {
            65154: 65269,
            65156: 65271,
            65160: 65273,
            65166: 65275
          },
          65248: {
            65154: 65270,
            65156: 65272,
            65160: 65274,
            65166: 65276
          },
          65165: {
            65247: {
              65248: {
                65258: 65010
              }
            }
          },
          1617: {
            1612: 64606,
            1613: 64607,
            1614: 64608,
            1615: 64609,
            1616: 64610
          }
        },
            e = {
          1612: 64606,
          1613: 64607,
          1614: 64608,
          1615: 64609,
          1616: 64610
        },
            n = [1570, 1571, 1573, 1575];
        t.__arabicParser__ = {};

        var r = t.__arabicParser__.isInArabicSubstitutionA = function (t) {
          return void 0 !== h[t.charCodeAt(0)];
        },
            u = t.__arabicParser__.isArabicLetter = function (t) {
          return "string" == typeof t && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t);
        },
            i = t.__arabicParser__.isArabicEndLetter = function (t) {
          return u(t) && r(t) && h[t.charCodeAt(0)].length <= 2;
        },
            o = t.__arabicParser__.isArabicAlfLetter = function (t) {
          return u(t) && 0 <= n.indexOf(t.charCodeAt(0));
        },
            s = (t.__arabicParser__.arabicLetterHasIsolatedForm = function (t) {
          return u(t) && r(t) && 1 <= h[t.charCodeAt(0)].length;
        }, t.__arabicParser__.arabicLetterHasFinalForm = function (t) {
          return u(t) && r(t) && 2 <= h[t.charCodeAt(0)].length;
        }),
            l = (t.__arabicParser__.arabicLetterHasInitialForm = function (t) {
          return u(t) && r(t) && 3 <= h[t.charCodeAt(0)].length;
        }, t.__arabicParser__.arabicLetterHasMedialForm = function (t) {
          return u(t) && r(t) && 4 == h[t.charCodeAt(0)].length;
        }),
            c = t.__arabicParser__.resolveLigatures = function (t) {
          var e = 0,
              n = a,
              r = 0,
              i = "",
              o = 0;

          for (e = 0; e < t.length; e += 1) {
            void 0 !== n[t.charCodeAt(e)] ? (o++, "number" == typeof (n = n[t.charCodeAt(e)]) && (r = -1 !== (r = f(t.charAt(e), t.charAt(e - o), t.charAt(e + 1))) ? r : 0, i += String.fromCharCode(n), n = a, o = 0), e === t.length - 1 && (n = a, i += t.charAt(e - (o - 1)), e -= o - 1, o = 0)) : (n = a, i += t.charAt(e - o), e -= o, o = 0);
          }

          return i;
        },
            f = (t.__arabicParser__.isArabicDiacritic = function (t) {
          return void 0 !== t && void 0 !== e[t.charCodeAt(0)];
        }, t.__arabicParser__.getCorrectForm = function (t, e, n) {
          return u(t) ? !1 === r(t) ? -1 : !s(t) || !u(e) && !u(n) || !u(n) && i(e) || i(t) && !u(e) || i(t) && o(e) || i(t) && i(e) ? 0 : l(t) && u(e) && !i(e) && u(n) && s(n) ? 3 : i(t) || !u(n) ? 1 : 2 : -1;
        }),
            p = t.__arabicParser__.processArabic = t.processArabic = function (t) {
          var e = 0,
              n = 0,
              r = 0,
              i = "",
              o = "",
              a = "",
              s = (t = t || "").split("\\s+"),
              l = [];

          for (e = 0; e < s.length; e += 1) {
            for (l.push(""), n = 0; n < s[e].length; n += 1) {
              i = s[e][n], o = s[e][n - 1], a = s[e][n + 1], u(i) ? (r = f(i, o, a), l[e] += -1 !== r ? String.fromCharCode(h[i.charCodeAt(0)][r]) : i) : l[e] += i;
            }

            l[e] = c(l[e]);
          }

          return l.join(" ");
        };

        t.events.push(["preProcessText", function (t) {
          var e = t.text,
              n = (t.x, t.y, t.options || {}),
              r = (t.mutex, n.lang, []);

          if ("[object Array]" === Object.prototype.toString.call(e)) {
            var i = 0;

            for (r = [], i = 0; i < e.length; i += 1) {
              "[object Array]" === Object.prototype.toString.call(e[i]) ? r.push([p(e[i][0]), e[i][1], e[i][2]]) : r.push([p(e[i])]);
            }

            t.text = r;
          } else t.text = p(e);
        }]);
      }(lt.API), lt.API.autoPrint = function (t) {
        var e;

        switch ((t = t || {}).variant = t.variant || "non-conform", t.variant) {
          case "javascript":
            this.addJS("print({});");
            break;

          case "non-conform":
          default:
            this.internal.events.subscribe("postPutResources", function () {
              e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
            }), this.internal.events.subscribe("putCatalog", function () {
              this.internal.out("/OpenAction " + e + " 0 R");
            });
        }

        return this;
      },
      /**
         * @license
         * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
      e = lt.API, (n = function n() {
        var e = void 0;
        Object.defineProperty(this, "pdf", {
          get: function get() {
            return e;
          },
          set: function set(t) {
            e = t;
          }
        });
        var n = 150;
        Object.defineProperty(this, "width", {
          get: function get() {
            return n;
          },
          set: function set(t) {
            n = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = n + 1);
          }
        });
        var r = 300;
        Object.defineProperty(this, "height", {
          get: function get() {
            return r;
          },
          set: function set(t) {
            r = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = r + 1);
          }
        });
        var i = [];
        Object.defineProperty(this, "childNodes", {
          get: function get() {
            return i;
          },
          set: function set(t) {
            i = t;
          }
        });
        var o = {};
        Object.defineProperty(this, "style", {
          get: function get() {
            return o;
          },
          set: function set(t) {
            o = t;
          }
        }), Object.defineProperty(this, "parentNode", {
          get: function get() {
            return !1;
          }
        });
      }).prototype.getContext = function (t, e) {
        var n;
        if ("2d" !== (t = t || "2d")) return null;

        for (n in e) {
          this.pdf.context2d.hasOwnProperty(n) && (this.pdf.context2d[n] = e[n]);
        }

        return (this.pdf.context2d._canvas = this).pdf.context2d;
      }, n.prototype.toDataURL = function () {
        throw new Error("toDataURL is not implemented.");
      }, e.events.push(["initialized", function () {
        this.canvas = new n(), this.canvas.pdf = this;
      }]),
      /** 
         * @license
         * ====================================================================
         * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
         *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
         *               2013 Lee Driscoll, https://github.com/lsdriscoll
         *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
         *               2014 James Hall, james@parall.ax
         *               2014 Diego Casorran, https://github.com/diegocr
         *
         * 
         * ====================================================================
         */
      _ = lt.API, F = {
        x: void 0,
        y: void 0,
        w: void 0,
        h: void 0,
        ln: void 0
      }, P = 1, p = function p(t, e, n, r, i) {
        F = {
          x: t,
          y: e,
          w: n,
          h: r,
          ln: i
        };
      }, d = function d() {
        return F;
      }, k = {
        left: 0,
        top: 0,
        bottom: 0
      }, _.setHeaderFunction = function (t) {
        l = t;
      }, _.getTextDimensions = function (t, e) {
        var n = this.table_font_size || this.internal.getFontSize(),
            r = (this.internal.getFont().fontStyle, (e = e || {}).scaleFactor || this.internal.scaleFactor),
            i = 0,
            o = 0,
            a = 0;
        if ("string" == typeof t) 0 != (i = this.getStringUnitWidth(t) * n) && (o = 1);else {
          if ("[object Array]" !== Object.prototype.toString.call(t)) throw new Error("getTextDimensions expects text-parameter to be of type String or an Array of Strings.");

          for (var s = 0; s < t.length; s++) {
            i < (a = this.getStringUnitWidth(t[s]) * n) && (i = a);
          }

          0 !== i && (o = t.length);
        }
        return {
          w: i /= r,
          h: Math.max((o * n * this.getLineHeightFactor() - n * (this.getLineHeightFactor() - 1)) / r, 0)
        };
      }, _.cellAddPage = function () {
        var t = this.margins || k;
        this.addPage(), p(t.left, t.top, void 0, void 0), P += 1;
      }, _.cellInitialize = function () {
        F = {
          x: void 0,
          y: void 0,
          w: void 0,
          h: void 0,
          ln: void 0
        }, P = 1;
      }, _.cell = function (t, e, n, r, i, o, a) {
        var s = d(),
            l = !1;
        if (void 0 !== s.ln) if (s.ln === o) t = s.x + s.w, e = s.y;else {
          var h = this.margins || k;
          s.y + s.h + r + 13 >= this.internal.pageSize.getHeight() - h.bottom && (this.cellAddPage(), l = !0, this.printHeaders && this.tableHeaderRow && this.printHeaderRow(o, !0)), e = d().y + d().h, l && (e = 23);
        }
        if (void 0 !== i[0]) if (this.printingHeaderRow ? this.rect(t, e, n, r, "FD") : this.rect(t, e, n, r), "right" === a) {
          i instanceof Array || (i = [i]);

          for (var u = 0; u < i.length; u++) {
            var c = i[u],
                f = this.getStringUnitWidth(c) * this.internal.getFontSize() / this.internal.scaleFactor;
            this.text(c, t + n - f - 3, e + this.internal.getLineHeight() * (u + 1));
          }
        } else this.text(i, t + 3, e + this.internal.getLineHeight());
        return p(t, e, n, r, o), this;
      }, _.arrayMax = function (t, e) {
        var n,
            r,
            i,
            o = t[0];

        for (n = 0, r = t.length; n < r; n += 1) {
          i = t[n], e ? -1 === e(o, i) && (o = i) : o < i && (o = i);
        }

        return o;
      }, _.table = function (t, e, n, r, i) {
        if (!n) throw "No data for PDF table";
        var o,
            a,
            s,
            l,
            h,
            u,
            c,
            f,
            p,
            d,
            g = [],
            m = [],
            y = {},
            v = {},
            w = [],
            b = [],
            x = !1,
            N = !0,
            L = 12,
            A = k;
        if (A.width = this.internal.pageSize.getWidth(), i && (!0 === i.autoSize && (x = !0), !1 === i.printHeaders && (N = !1), i.fontSize && (L = i.fontSize), i.css && void 0 !== i.css["font-size"] && (L = 16 * i.css["font-size"]), i.margins && (A = i.margins)), this.lnMod = 0, F = {
          x: void 0,
          y: void 0,
          w: void 0,
          h: void 0,
          ln: void 0
        }, P = 1, this.printHeaders = N, this.margins = A, this.setFontSize(L), this.table_font_size = L, null == r) g = Object.keys(n[0]);else if (r[0] && "string" != typeof r[0]) for (a = 0, s = r.length; a < s; a += 1) {
          o = r[a], g.push(o.name), m.push(o.prompt), v[o.name] = o.width * (19.049976 / 25.4);
        } else g = r;
        if (x) for (d = function d(t) {
          return t[o];
        }, a = 0, s = g.length; a < s; a += 1) {
          for (y[o = g[a]] = n.map(d), w.push(this.getTextDimensions(m[a] || o, {
            scaleFactor: 1
          }).w), c = 0, l = (u = y[o]).length; c < l; c += 1) {
            h = u[c], w.push(this.getTextDimensions(h, {
              scaleFactor: 1
            }).w);
          }

          v[o] = _.arrayMax(w), w = [];
        }

        if (N) {
          var S = this.calculateLineHeight(g, v, m.length ? m : g);

          for (a = 0, s = g.length; a < s; a += 1) {
            o = g[a], b.push([t, e, v[o], S, String(m.length ? m[a] : o)]);
          }

          this.setTableHeaderRow(b), this.printHeaderRow(1, !1);
        }

        for (a = 0, s = n.length; a < s; a += 1) {
          for (f = n[a], S = this.calculateLineHeight(g, v, f), c = 0, p = g.length; c < p; c += 1) {
            o = g[c], this.cell(t, e, v[o], S, f[o], a + 2, o.align);
          }
        }

        return this.lastCellPos = F, this.table_x = t, this.table_y = e, this;
      }, _.calculateLineHeight = function (t, e, n) {
        for (var r, i = 0, o = 0; o < t.length; o++) {
          n[r = t[o]] = this.splitTextToSize(String(n[r]), e[r] - 3);
          var a = this.internal.getLineHeight() * n[r].length + 3;
          i < a && (i = a);
        }

        return i;
      }, _.setTableHeaderRow = function (t) {
        this.tableHeaderRow = t;
      }, _.printHeaderRow = function (t, e) {
        if (!this.tableHeaderRow) throw "Property tableHeaderRow does not exist.";
        var n, r, i, o;

        if (this.printingHeaderRow = !0, void 0 !== l) {
          var a = l(this, P);
          p(a[0], a[1], a[2], a[3], -1);
        }

        this.setFontStyle("bold");
        var s = [];

        for (i = 0, o = this.tableHeaderRow.length; i < o; i += 1) {
          this.setFillColor(200, 200, 200), n = this.tableHeaderRow[i], e && (this.margins.top = 13, n[1] = this.margins && this.margins.top || 0, s.push(n)), r = [].concat(n), this.cell.apply(this, r.concat(t));
        }

        0 < s.length && this.setTableHeaderRow(s), this.setFontStyle("normal"), this.printingHeaderRow = !1;
      },
      /**
         * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
         *
         * Licensed under the MIT License. http://opensource.org/licenses/mit-license
         */
      function (t, e) {
        var l,
            i,
            o,
            h,
            u,
            c = function c(t) {
          return t = t || {}, this.isStrokeTransparent = t.isStrokeTransparent || !1, this.strokeOpacity = t.strokeOpacity || 1, this.strokeStyle = t.strokeStyle || "#000000", this.fillStyle = t.fillStyle || "#000000", this.isFillTransparent = t.isFillTransparent || !1, this.fillOpacity = t.fillOpacity || 1, this.font = t.font || "10px sans-serif", this.textBaseline = t.textBaseline || "alphabetic", this.textAlign = t.textAlign || "left", this.lineWidth = t.lineWidth || 1, this.lineJoin = t.lineJoin || "miter", this.lineCap = t.lineCap || "butt", this.path = t.path || [], this.transform = void 0 !== t.transform ? t.transform.clone() : new M(), this.globalCompositeOperation = t.globalCompositeOperation || "normal", this.globalAlpha = t.globalAlpha || 1, this.clip_path = t.clip_path || [], this.currentPoint = t.currentPoint || new j(), this.miterLimit = t.miterLimit || 10, this.lastPoint = t.lastPoint || new j(), this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect, this;
        };

        t.events.push(["initialized", function () {
          this.context2d = new n(this), l = this.internal.f2, this.internal.f3, i = this.internal.getCoordinateString, o = this.internal.getVerticalCoordinateString, h = this.internal.getHorizontalCoordinate, u = this.internal.getVerticalCoordinate;
        }]);

        var n = function n(t) {
          Object.defineProperty(this, "canvas", {
            get: function get() {
              return {
                parentNode: !1,
                style: !1
              };
            }
          }), Object.defineProperty(this, "pdf", {
            get: function get() {
              return t;
            }
          });
          var e = !1;
          Object.defineProperty(this, "pageWrapXEnabled", {
            get: function get() {
              return e;
            },
            set: function set(t) {
              e = Boolean(t);
            }
          });
          var n = !1;
          Object.defineProperty(this, "pageWrapYEnabled", {
            get: function get() {
              return n;
            },
            set: function set(t) {
              n = Boolean(t);
            }
          });
          var r = 0;
          Object.defineProperty(this, "posX", {
            get: function get() {
              return r;
            },
            set: function set(t) {
              isNaN(t) || (r = t);
            }
          });
          var i = 0;
          Object.defineProperty(this, "posY", {
            get: function get() {
              return i;
            },
            set: function set(t) {
              isNaN(t) || (i = t);
            }
          });
          var o = !1;
          Object.defineProperty(this, "autoPaging", {
            get: function get() {
              return o;
            },
            set: function set(t) {
              o = Boolean(t);
            }
          });
          var a = 0;
          Object.defineProperty(this, "lastBreak", {
            get: function get() {
              return a;
            },
            set: function set(t) {
              a = t;
            }
          });
          var s = [];
          Object.defineProperty(this, "pageBreaks", {
            get: function get() {
              return s;
            },
            set: function set(t) {
              s = t;
            }
          });
          var l = new c();
          Object.defineProperty(this, "ctx", {
            get: function get() {
              return l;
            },
            set: function set(t) {
              t instanceof c && (l = t);
            }
          }), Object.defineProperty(this, "path", {
            get: function get() {
              return l.path;
            },
            set: function set(t) {
              l.path = t;
            }
          });
          var h = [];
          Object.defineProperty(this, "ctxStack", {
            get: function get() {
              return h;
            },
            set: function set(t) {
              h = t;
            }
          }), Object.defineProperty(this, "fillStyle", {
            get: function get() {
              return this.ctx.fillStyle;
            },
            set: function set(t) {
              var e;
              e = f(t), this.ctx.fillStyle = e.style, this.ctx.isFillTransparent = 0 === e.a, this.ctx.fillOpacity = e.a, this.pdf.setFillColor(e.r, e.g, e.b, {
                a: e.a
              }), this.pdf.setTextColor(e.r, e.g, e.b, {
                a: e.a
              });
            }
          }), Object.defineProperty(this, "strokeStyle", {
            get: function get() {
              return this.ctx.strokeStyle;
            },
            set: function set(t) {
              var e = f(t);
              this.ctx.strokeStyle = e.style, this.ctx.isStrokeTransparent = 0 === e.a, this.ctx.strokeOpacity = e.a, 0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b));
            }
          }), Object.defineProperty(this, "lineCap", {
            get: function get() {
              return this.ctx.lineCap;
            },
            set: function set(t) {
              -1 !== ["butt", "round", "square"].indexOf(t) && (this.ctx.lineCap = t, this.pdf.setLineCap(t));
            }
          }), Object.defineProperty(this, "lineWidth", {
            get: function get() {
              return this.ctx.lineWidth;
            },
            set: function set(t) {
              isNaN(t) || (this.ctx.lineWidth = t, this.pdf.setLineWidth(t));
            }
          }), Object.defineProperty(this, "lineJoin", {
            get: function get() {
              return this.ctx.lineJoin;
            },
            set: function set(t) {
              -1 !== ["bevel", "round", "miter"].indexOf(t) && (this.ctx.lineJoin = t, this.pdf.setLineJoin(t));
            }
          }), Object.defineProperty(this, "miterLimit", {
            get: function get() {
              return this.ctx.miterLimit;
            },
            set: function set(t) {
              isNaN(t) || (this.ctx.miterLimit = t, this.pdf.setMiterLimit(t));
            }
          }), Object.defineProperty(this, "textBaseline", {
            get: function get() {
              return this.ctx.textBaseline;
            },
            set: function set(t) {
              this.ctx.textBaseline = t;
            }
          }), Object.defineProperty(this, "textAlign", {
            get: function get() {
              return this.ctx.textAlign;
            },
            set: function set(t) {
              -1 !== ["right", "end", "center", "left", "start"].indexOf(t) && (this.ctx.textAlign = t);
            }
          }), Object.defineProperty(this, "font", {
            get: function get() {
              return this.ctx.font;
            },
            set: function set(t) {
              var e;

              if (this.ctx.font = t, null !== (e = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))) {
                var n = e[1],
                    r = (e[2], e[3]),
                    i = e[4],
                    o = e[5],
                    a = e[6];
                i = "px" === o ? Math.floor(parseFloat(i)) : "em" === o ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(i)), this.pdf.setFontSize(i);
                var s = "";
                ("bold" === r || 700 <= parseInt(r, 10) || "bold" === n) && (s = "bold"), "italic" === n && (s += "italic"), 0 === s.length && (s = "normal");

                for (var l = "", h = a.toLowerCase().replace(/"|'/g, "").split(/\s*,\s*/), u = {
                  arial: "Helvetica",
                  verdana: "Helvetica",
                  helvetica: "Helvetica",
                  "sans-serif": "Helvetica",
                  fixed: "Courier",
                  monospace: "Courier",
                  terminal: "Courier",
                  courier: "Courier",
                  times: "Times",
                  cursive: "Times",
                  fantasy: "Times",
                  serif: "Times"
                }, c = 0; c < h.length; c++) {
                  if (void 0 !== this.pdf.internal.getFont(h[c], s, {
                    noFallback: !0,
                    disableWarning: !0
                  })) {
                    l = h[c];
                    break;
                  }

                  if ("bolditalic" === s && void 0 !== this.pdf.internal.getFont(h[c], "bold", {
                    noFallback: !0,
                    disableWarning: !0
                  })) l = h[c], s = "bold";else if (void 0 !== this.pdf.internal.getFont(h[c], "normal", {
                    noFallback: !0,
                    disableWarning: !0
                  })) {
                    l = h[c], s = "normal";
                    break;
                  }
                }

                if ("" === l) for (c = 0; c < h.length; c++) {
                  if (u[h[c]]) {
                    l = u[h[c]];
                    break;
                  }
                }
                l = "" === l ? "Times" : l, this.pdf.setFont(l, s);
              }
            }
          }), Object.defineProperty(this, "globalCompositeOperation", {
            get: function get() {
              return this.ctx.globalCompositeOperation;
            },
            set: function set(t) {
              this.ctx.globalCompositeOperation = t;
            }
          }), Object.defineProperty(this, "globalAlpha", {
            get: function get() {
              return this.ctx.globalAlpha;
            },
            set: function set(t) {
              this.ctx.globalAlpha = t;
            }
          }), Object.defineProperty(this, "ignoreClearRect", {
            get: function get() {
              return this.ctx.ignoreClearRect;
            },
            set: function set(t) {
              this.ctx.ignoreClearRect = Boolean(t);
            }
          });
        };

        n.prototype.fill = function () {
          r.call(this, "fill", !1);
        }, n.prototype.stroke = function () {
          r.call(this, "stroke", !1);
        }, n.prototype.beginPath = function () {
          this.path = [{
            type: "begin"
          }];
        }, n.prototype.moveTo = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw console.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
          var n = this.ctx.transform.applyToPoint(new j(t, e));
          this.path.push({
            type: "mt",
            x: n.x,
            y: n.y
          }), this.ctx.lastPoint = new j(t, e);
        }, n.prototype.closePath = function () {
          var t = new j(0, 0),
              e = 0;

          for (e = this.path.length - 1; -1 !== e; e--) {
            if ("begin" === this.path[e].type && "object" === se(this.path[e + 1]) && "number" == typeof this.path[e + 1].x) {
              t = new j(this.path[e + 1].x, this.path[e + 1].y), this.path.push({
                type: "lt",
                x: t.x,
                y: t.y
              });
              break;
            }
          }

          "object" === se(this.path[e + 2]) && "number" == typeof this.path[e + 2].x && this.path.push(JSON.parse(JSON.stringify(this.path[e + 2]))), this.path.push({
            type: "close"
          }), this.ctx.lastPoint = new j(t.x, t.y);
        }, n.prototype.lineTo = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw console.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
          var n = this.ctx.transform.applyToPoint(new j(t, e));
          this.path.push({
            type: "lt",
            x: n.x,
            y: n.y
          }), this.ctx.lastPoint = new j(n.x, n.y);
        }, n.prototype.clip = function () {
          this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), r.call(this, null, !0);
        }, n.prototype.quadraticCurveTo = function (t, e, n, r) {
          if (isNaN(n) || isNaN(r) || isNaN(t) || isNaN(e)) throw console.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
          var i = this.ctx.transform.applyToPoint(new j(n, r)),
              o = this.ctx.transform.applyToPoint(new j(t, e));
          this.path.push({
            type: "qct",
            x1: o.x,
            y1: o.y,
            x: i.x,
            y: i.y
          }), this.ctx.lastPoint = new j(i.x, i.y);
        }, n.prototype.bezierCurveTo = function (t, e, n, r, i, o) {
          if (isNaN(i) || isNaN(o) || isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw console.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
          var a = this.ctx.transform.applyToPoint(new j(i, o)),
              s = this.ctx.transform.applyToPoint(new j(t, e)),
              l = this.ctx.transform.applyToPoint(new j(n, r));
          this.path.push({
            type: "bct",
            x1: s.x,
            y1: s.y,
            x2: l.x,
            y2: l.y,
            x: a.x,
            y: a.y
          }), this.ctx.lastPoint = new j(a.x, a.y);
        }, n.prototype.arc = function (t, e, n, r, i, o) {
          if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i)) throw console.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");

          if (o = Boolean(o), !this.ctx.transform.isIdentity) {
            var a = this.ctx.transform.applyToPoint(new j(t, e));
            t = a.x, e = a.y;
            var s = this.ctx.transform.applyToPoint(new j(0, n)),
                l = this.ctx.transform.applyToPoint(new j(0, 0));
            n = Math.sqrt(Math.pow(s.x - l.x, 2) + Math.pow(s.y - l.y, 2));
          }

          Math.abs(i - r) >= 2 * Math.PI && (r = 0, i = 2 * Math.PI), this.path.push({
            type: "arc",
            x: t,
            y: e,
            radius: n,
            startAngle: r,
            endAngle: i,
            counterclockwise: o
          });
        }, n.prototype.arcTo = function (t, e, n, r, i) {
          throw new Error("arcTo not implemented.");
        }, n.prototype.rect = function (t, e, n, r) {
          if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw console.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
          this.moveTo(t, e), this.lineTo(t + n, e), this.lineTo(t + n, e + r), this.lineTo(t, e + r), this.lineTo(t, e), this.lineTo(t + n, e), this.lineTo(t, e);
        }, n.prototype.fillRect = function (t, e, n, r) {
          if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw console.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");

          if (!N.call(this)) {
            var i = {};
            "butt" !== this.lineCap && (i.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (i.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(t, e, n, r), this.fill(), i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap), i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin);
          }
        }, n.prototype.strokeRect = function (t, e, n, r) {
          if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw console.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
          L.call(this) || (this.beginPath(), this.rect(t, e, n, r), this.stroke());
        }, n.prototype.clearRect = function (t, e, n, r) {
          if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw console.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
          this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(t, e, n, r));
        }, n.prototype.save = function (t) {
          t = "boolean" != typeof t || t;

          for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) {
            this.pdf.setPage(n + 1), this.pdf.internal.out("q");
          }

          if (this.pdf.setPage(e), t) {
            this.ctx.fontSize = this.pdf.internal.getFontSize();
            var r = new c(this.ctx);
            this.ctxStack.push(this.ctx), this.ctx = r;
          }
        }, n.prototype.restore = function (t) {
          t = "boolean" != typeof t || t;

          for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) {
            this.pdf.setPage(n + 1), this.pdf.internal.out("Q");
          }

          this.pdf.setPage(e), t && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin);
        }, n.prototype.toDataURL = function () {
          throw new Error("toDataUrl not implemented.");
        };

        var f = function f(t) {
          var e, n, r, i;
          if (!0 === t.isCanvasGradient && (t = t.getColor()), !t) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            style: t
          };
          if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t)) i = r = n = e = 0;else {
            var o = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
            if (null !== o) e = parseInt(o[1]), n = parseInt(o[2]), r = parseInt(o[3]), i = 1;else if (null !== (o = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/.exec(t))) e = parseInt(o[1]), n = parseInt(o[2]), r = parseInt(o[3]), i = parseFloat(o[4]);else {
              if (i = 1, "string" == typeof t && "#" !== t.charAt(0)) {
                var a = new RGBColor(t);
                t = a.ok ? a.toHex() : "#000000";
              }

              4 === t.length ? (e = t.substring(1, 2), e += e, n = t.substring(2, 3), n += n, r = t.substring(3, 4), r += r) : (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7)), e = parseInt(e, 16), n = parseInt(n, 16), r = parseInt(r, 16);
            }
          }
          return {
            r: e,
            g: n,
            b: r,
            a: i,
            style: t
          };
        },
            N = function N() {
          return this.ctx.isFillTransparent || 0 == this.globalAlpha;
        },
            L = function L() {
          return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha);
        };

        n.prototype.fillText = function (t, e, n, r) {
          if (isNaN(e) || isNaN(n) || "string" != typeof t) throw console.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");

          if (r = isNaN(r) ? void 0 : r, !N.call(this)) {
            n = a.call(this, n);
            var i = B(this.ctx.transform.rotation),
                o = this.ctx.transform.scaleX;
            s.call(this, {
              text: t,
              x: e,
              y: n,
              scale: o,
              angle: i,
              align: this.textAlign,
              maxWidth: r
            });
          }
        }, n.prototype.strokeText = function (t, e, n, r) {
          if (isNaN(e) || isNaN(n) || "string" != typeof t) throw console.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");

          if (!L.call(this)) {
            r = isNaN(r) ? void 0 : r, n = a.call(this, n);
            var i = B(this.ctx.transform.rotation),
                o = this.ctx.transform.scaleX;
            s.call(this, {
              text: t,
              x: e,
              y: n,
              scale: o,
              renderingMode: "stroke",
              angle: i,
              align: this.textAlign,
              maxWidth: r
            });
          }
        }, n.prototype.measureText = function (t) {
          if ("string" != typeof t) throw console.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
          var e = this.pdf,
              n = this.pdf.internal.scaleFactor,
              r = e.internal.getFontSize(),
              i = e.getStringUnitWidth(t) * r / e.internal.scaleFactor;
          return new function (t) {
            var e = (t = t || {}).width || 0;
            return Object.defineProperty(this, "width", {
              get: function get() {
                return e;
              }
            }), this;
          }({
            width: i *= Math.round(96 * n / 72 * 1e4) / 1e4
          });
        }, n.prototype.scale = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw console.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
          var n = new M(t, 0, 0, e, 0, 0);
          this.ctx.transform = this.ctx.transform.multiply(n);
        }, n.prototype.rotate = function (t) {
          if (isNaN(t)) throw console.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
          var e = new M(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0);
          this.ctx.transform = this.ctx.transform.multiply(e);
        }, n.prototype.translate = function (t, e) {
          if (isNaN(t) || isNaN(e)) throw console.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
          var n = new M(1, 0, 0, 1, t, e);
          this.ctx.transform = this.ctx.transform.multiply(n);
        }, n.prototype.transform = function (t, e, n, r, i, o) {
          if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(o)) throw console.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
          var a = new M(t, e, n, r, i, o);
          this.ctx.transform = this.ctx.transform.multiply(a);
        }, n.prototype.setTransform = function (t, e, n, r, i, o) {
          t = isNaN(t) ? 1 : t, e = isNaN(e) ? 0 : e, n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, i = isNaN(i) ? 0 : i, o = isNaN(o) ? 0 : o, this.ctx.transform = new M(t, e, n, r, i, o);
        }, n.prototype.drawImage = function (t, e, n, r, i, o, a, s, l) {
          var h = this.pdf.getImageProperties(t),
              u = 1,
              c = 1,
              f = 1,
              p = 1;
          void 0 !== r && void 0 !== s && (f = s / r, p = l / i, u = h.width / r * s / r, c = h.height / i * l / i), void 0 === o && (o = e, a = n, n = e = 0), void 0 !== r && void 0 === s && (s = r, l = i), void 0 === r && void 0 === s && (s = h.width, l = h.height);
          var d = this.ctx.transform.decompose(),
              g = B(d.rotate.shx);
          d.scale.sx, d.scale.sy;

          for (var m, y = new M(), v = ((y = (y = (y = y.multiply(d.translate)).multiply(d.skew)).multiply(d.scale)).applyToPoint(new j(s, l)), y.applyToRectangle(new E(o - e * f, a - n * p, r * u, i * c))), w = F.call(this, v), b = [], x = 0; x < w.length; x += 1) {
            -1 === b.indexOf(w[x]) && b.push(w[x]);
          }

          if (b.sort(), this.autoPaging) for (var N = b[0], L = b[b.length - 1], A = N; A < L + 1; A++) {
            if (this.pdf.setPage(A), 0 !== this.ctx.clip_path.length) {
              var S = this.path;
              m = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = P(m, this.posX, -1 * this.pdf.internal.pageSize.height * (A - 1) + this.posY), k.call(this, "fill", !0), this.path = S;
            }

            var _ = JSON.parse(JSON.stringify(v));

            _ = P([_], this.posX, -1 * this.pdf.internal.pageSize.height * (A - 1) + this.posY)[0], this.pdf.addImage(t, "jpg", _.x, _.y, _.w, _.h, null, null, g);
          } else this.pdf.addImage(t, "jpg", v.x, v.y, v.w, v.h, null, null, g);
        };

        var F = function F(t, e, n) {
          var r = [];

          switch (e = e || this.pdf.internal.pageSize.width, n = n || this.pdf.internal.pageSize.height, t.type) {
            default:
            case "mt":
            case "lt":
              r.push(Math.floor((t.y + this.posY) / n) + 1);
              break;

            case "arc":
              r.push(Math.floor((t.y + this.posY - t.radius) / n) + 1), r.push(Math.floor((t.y + this.posY + t.radius) / n) + 1);
              break;

            case "qct":
              var i = w(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);
              r.push(Math.floor(i.y / n) + 1), r.push(Math.floor((i.y + i.h) / n) + 1);
              break;

            case "bct":
              var o = b(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);
              r.push(Math.floor(o.y / n) + 1), r.push(Math.floor((o.y + o.h) / n) + 1);
              break;

            case "rect":
              r.push(Math.floor((t.y + this.posY) / n) + 1), r.push(Math.floor((t.y + t.h + this.posY) / n) + 1);
          }

          for (var a = 0; a < r.length; a += 1) {
            for (; this.pdf.internal.getNumberOfPages() < r[a];) {
              v.call(this);
            }
          }

          return r;
        },
            v = function v() {
          var t = this.fillStyle,
              e = this.strokeStyle,
              n = this.font,
              r = this.lineCap,
              i = this.lineWidth,
              o = this.lineJoin;
          this.pdf.addPage(), this.fillStyle = t, this.strokeStyle = e, this.font = n, this.lineCap = r, this.lineWidth = i, this.lineJoin = o;
        },
            P = function P(t, e, n) {
          for (var r = 0; r < t.length; r++) {
            switch (t[r].type) {
              case "bct":
                t[r].x2 += e, t[r].y2 += n;

              case "qct":
                t[r].x1 += e, t[r].y1 += n;

              case "mt":
              case "lt":
              case "arc":
              default:
                t[r].x += e, t[r].y += n;
            }
          }

          return t;
        },
            r = function r(t, e) {
          for (var n, r, i = this.fillStyle, o = this.strokeStyle, a = (this.font, this.lineCap), s = this.lineWidth, l = this.lineJoin, h = JSON.parse(JSON.stringify(this.path)), u = JSON.parse(JSON.stringify(this.path)), c = [], f = 0; f < u.length; f++) {
            if (void 0 !== u[f].x) for (var p = F.call(this, u[f]), d = 0; d < p.length; d += 1) {
              -1 === c.indexOf(p[d]) && c.push(p[d]);
            }
          }

          for (f = 0; f < c.length; f++) {
            for (; this.pdf.internal.getNumberOfPages() < c[f];) {
              v.call(this);
            }
          }

          if (c.sort(), this.autoPaging) {
            var g = c[0],
                m = c[c.length - 1];

            for (f = g; f < m + 1; f++) {
              if (this.pdf.setPage(f), this.fillStyle = i, this.strokeStyle = o, this.lineCap = a, this.lineWidth = s, this.lineJoin = l, 0 !== this.ctx.clip_path.length) {
                var y = this.path;
                n = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = P(n, this.posX, -1 * this.pdf.internal.pageSize.height * (f - 1) + this.posY), k.call(this, t, !0), this.path = y;
              }

              r = JSON.parse(JSON.stringify(h)), this.path = P(r, this.posX, -1 * this.pdf.internal.pageSize.height * (f - 1) + this.posY), !1 !== e && 0 !== f || k.call(this, t, e);
            }
          } else k.call(this, t, e);

          this.path = h;
        },
            k = function k(t, e) {
          if (("stroke" !== t || e || !L.call(this)) && ("stroke" === t || e || !N.call(this))) {
            var n = [];
            this.ctx.globalAlpha;
            this.ctx.fillOpacity < 1 && this.ctx.fillOpacity;

            for (var r, i = this.path, o = 0; o < i.length; o++) {
              var a = i[o];

              switch (a.type) {
                case "begin":
                  n.push({
                    begin: !0
                  });
                  break;

                case "close":
                  n.push({
                    close: !0
                  });
                  break;

                case "mt":
                  n.push({
                    start: a,
                    deltas: [],
                    abs: []
                  });
                  break;

                case "lt":
                  var s = n.length;

                  if (!isNaN(i[o - 1].x)) {
                    var l = [a.x - i[o - 1].x, a.y - i[o - 1].y];
                    if (0 < s) for (; 0 <= s; s--) {
                      if (!0 !== n[s - 1].close && !0 !== n[s - 1].begin) {
                        n[s - 1].deltas.push(l), n[s - 1].abs.push(a);
                        break;
                      }
                    }
                  }

                  break;

                case "bct":
                  l = [a.x1 - i[o - 1].x, a.y1 - i[o - 1].y, a.x2 - i[o - 1].x, a.y2 - i[o - 1].y, a.x - i[o - 1].x, a.y - i[o - 1].y];
                  n[n.length - 1].deltas.push(l);
                  break;

                case "qct":
                  var h = i[o - 1].x + 2 / 3 * (a.x1 - i[o - 1].x),
                      u = i[o - 1].y + 2 / 3 * (a.y1 - i[o - 1].y),
                      c = a.x + 2 / 3 * (a.x1 - a.x),
                      f = a.y + 2 / 3 * (a.y1 - a.y),
                      p = a.x,
                      d = a.y;
                  l = [h - i[o - 1].x, u - i[o - 1].y, c - i[o - 1].x, f - i[o - 1].y, p - i[o - 1].x, d - i[o - 1].y];
                  n[n.length - 1].deltas.push(l);
                  break;

                case "arc":
                  n.push({
                    deltas: [],
                    abs: [],
                    arc: !0
                  }), Array.isArray(n[n.length - 1].abs) && n[n.length - 1].abs.push(a);
              }
            }

            r = e ? null : "stroke" === t ? "stroke" : "fill";

            for (o = 0; o < n.length; o++) {
              if (n[o].arc) for (var g = n[o].abs, m = 0; m < g.length; m++) {
                var y = g[m];

                if (void 0 !== y.startAngle) {
                  var v = B(y.startAngle),
                      w = B(y.endAngle),
                      b = y.x,
                      x = y.y;
                  A.call(this, b, x, y.radius, v, w, y.counterclockwise, r, e);
                } else I.call(this, y.x, y.y);
              }

              if (!n[o].arc && !0 !== n[o].close && !0 !== n[o].begin) {
                b = n[o].start.x, x = n[o].start.y;
                C.call(this, n[o].deltas, b, x, null, null);
              }
            }

            r && S.call(this, r), e && _.call(this);
          }
        },
            a = function a(t) {
          var e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
              n = e * (this.pdf.internal.getLineHeightFactor() - 1);

          switch (this.ctx.textBaseline) {
            case "bottom":
              return t - n;

            case "top":
              return t + e - n;

            case "hanging":
              return t + e - 2 * n;

            case "middle":
              return t + e / 2 - n;

            case "ideographic":
              return t;

            case "alphabetic":
            default:
              return t;
          }
        };

        n.prototype.createLinearGradient = function () {
          var t = function t() {};

          return t.colorStops = [], t.addColorStop = function (t, e) {
            this.colorStops.push([t, e]);
          }, t.getColor = function () {
            return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1];
          }, t.isCanvasGradient = !0, t;
        }, n.prototype.createPattern = function () {
          return this.createLinearGradient();
        }, n.prototype.createRadialGradient = function () {
          return this.createLinearGradient();
        };

        var A = function A(t, e, n, r, i, o, a, s) {
          this.pdf.internal.scaleFactor;

          for (var l = y(r), h = y(i), u = g.call(this, n, l, h, o), c = 0; c < u.length; c++) {
            var f = u[c];
            0 === c && p.call(this, f.x1 + t, f.y1 + e), d.call(this, t, e, f.x2, f.y2, f.x3, f.y3, f.x4, f.y4);
          }

          s ? _.call(this) : S.call(this, a);
        },
            S = function S(t) {
          switch (t) {
            case "stroke":
              this.pdf.internal.out("S");
              break;

            case "fill":
              this.pdf.internal.out("f");
          }
        },
            _ = function _() {
          this.pdf.clip();
        },
            p = function p(t, e) {
          this.pdf.internal.out(i(t) + " " + o(e) + " m");
        },
            s = function s(t) {
          var e;

          switch (t.align) {
            case "right":
            case "end":
              e = "right";
              break;

            case "center":
              e = "center";
              break;

            case "left":
            case "start":
            default:
              e = "left";
          }

          var n = this.ctx.transform.applyToPoint(new j(t.x, t.y)),
              r = this.ctx.transform.decompose(),
              i = new M();
          i = (i = (i = i.multiply(r.translate)).multiply(r.skew)).multiply(r.scale);

          for (var o, a = this.pdf.getTextDimensions(t.text), s = this.ctx.transform.applyToRectangle(new E(t.x, t.y, a.w, a.h)), l = i.applyToRectangle(new E(t.x, t.y - a.h, a.w, a.h)), h = F.call(this, l), u = [], c = 0; c < h.length; c += 1) {
            -1 === u.indexOf(h[c]) && u.push(h[c]);
          }

          if (u.sort(), !0 === this.autoPaging) for (var f = u[0], p = u[u.length - 1], d = f; d < p + 1; d++) {
            if (this.pdf.setPage(d), 0 !== this.ctx.clip_path.length) {
              var g = this.path;
              o = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = P(o, this.posX, -1 * this.pdf.internal.pageSize.height * (d - 1) + this.posY), k.call(this, "fill", !0), this.path = g;
            }

            var m = JSON.parse(JSON.stringify(s));

            if (m = P([m], this.posX, -1 * this.pdf.internal.pageSize.height * (d - 1) + this.posY)[0], .01 <= t.scale) {
              var y = this.pdf.internal.getFontSize();
              this.pdf.setFontSize(y * t.scale);
            }

            this.pdf.text(t.text, m.x, m.y, {
              angle: t.angle,
              align: e,
              renderingMode: t.renderingMode,
              maxWidth: t.maxWidth
            }), .01 <= t.scale && this.pdf.setFontSize(y);
          } else {
            if (.01 <= t.scale) {
              y = this.pdf.internal.getFontSize();
              this.pdf.setFontSize(y * t.scale);
            }

            this.pdf.text(t.text, n.x + this.posX, n.y + this.posY, {
              angle: t.angle,
              align: e,
              renderingMode: t.renderingMode,
              maxWidth: t.maxWidth
            }), .01 <= t.scale && this.pdf.setFontSize(y);
          }
        },
            I = function I(t, e, n, r) {
          n = n || 0, r = r || 0, this.pdf.internal.out(i(t + n) + " " + o(e + r) + " l");
        },
            C = function C(t, e, n) {
          return this.pdf.lines(t, e, n, null, null);
        },
            d = function d(t, e, n, r, i, o, a, s) {
          this.pdf.internal.out([l(h(n + t)), l(u(r + e)), l(h(i + t)), l(u(o + e)), l(h(a + t)), l(u(s + e)), "c"].join(" "));
        },
            g = function g(t, e, n, r) {
          var i = 2 * Math.PI,
              o = e;
          (o < i || i < o) && (o %= i);
          var a = n;
          (a < i || i < a) && (a %= i);

          for (var s = [], l = Math.PI / 2, h = r ? -1 : 1, u = e, c = Math.min(i, Math.abs(a - o)); 1e-5 < c;) {
            var f = u + h * Math.min(c, l);
            s.push(m.call(this, t, u, f)), c -= Math.abs(f - u), u = f;
          }

          return s;
        },
            m = function m(t, e, n) {
          var r = (n - e) / 2,
              i = t * Math.cos(r),
              o = t * Math.sin(r),
              a = i,
              s = -o,
              l = a * a + s * s,
              h = l + a * i + s * o,
              u = 4 / 3 * (Math.sqrt(2 * l * h) - h) / (a * o - s * i),
              c = a - u * s,
              f = s + u * a,
              p = c,
              d = -f,
              g = r + e,
              m = Math.cos(g),
              y = Math.sin(g);
          return {
            x1: t * Math.cos(e),
            y1: t * Math.sin(e),
            x2: c * m - f * y,
            y2: c * y + f * m,
            x3: p * m - d * y,
            y3: p * y + d * m,
            x4: t * Math.cos(n),
            y4: t * Math.sin(n)
          };
        },
            B = function B(t) {
          return 180 * t / Math.PI;
        },
            y = function y(t) {
          return t * Math.PI / 180;
        },
            w = function w(t, e, n, r, i, o) {
          var a = t + .5 * (n - t),
              s = e + .5 * (r - e),
              l = i + .5 * (n - i),
              h = o + .5 * (r - o),
              u = Math.min(t, i, a, l),
              c = Math.max(t, i, a, l),
              f = Math.min(e, o, s, h),
              p = Math.max(e, o, s, h);
          return new E(u, f, c - u, p - f);
        },
            b = function b(t, e, n, r, i, o, a, s) {
          for (var l, h, u, c, f, p, d, g, m, y, v, w, b, x = n - t, N = r - e, L = i - n, A = o - r, S = a - i, _ = s - o, F = 0; F < 41; F++) {
            g = (p = (h = t + (l = F / 40) * x) + l * ((c = n + l * L) - h)) + l * (c + l * (i + l * S - c) - p), m = (d = (u = e + l * N) + l * ((f = r + l * A) - u)) + l * (f + l * (o + l * _ - f) - d), b = 0 == F ? (w = y = g, v = m) : (y = Math.min(y, g), v = Math.min(v, m), w = Math.max(w, g), Math.max(b, m));
          }

          return new E(Math.round(y), Math.round(v), Math.round(w - y), Math.round(b - v));
        },
            j = function j(t, e) {
          var n = t || 0;
          Object.defineProperty(this, "x", {
            enumerable: !0,
            get: function get() {
              return n;
            },
            set: function set(t) {
              isNaN(t) || (n = parseFloat(t));
            }
          });
          var r = e || 0;
          Object.defineProperty(this, "y", {
            enumerable: !0,
            get: function get() {
              return r;
            },
            set: function set(t) {
              isNaN(t) || (r = parseFloat(t));
            }
          });
          var i = "pt";
          return Object.defineProperty(this, "type", {
            enumerable: !0,
            get: function get() {
              return i;
            },
            set: function set(t) {
              i = t.toString();
            }
          }), this;
        },
            E = function E(t, e, n, r) {
          j.call(this, t, e), this.type = "rect";
          var i = n || 0;
          Object.defineProperty(this, "w", {
            enumerable: !0,
            get: function get() {
              return i;
            },
            set: function set(t) {
              isNaN(t) || (i = parseFloat(t));
            }
          });
          var o = r || 0;
          return Object.defineProperty(this, "h", {
            enumerable: !0,
            get: function get() {
              return o;
            },
            set: function set(t) {
              isNaN(t) || (o = parseFloat(t));
            }
          }), this;
        },
            M = function M(t, e, n, r, i, o) {
          var a = [];
          return Object.defineProperty(this, "sx", {
            get: function get() {
              return a[0];
            },
            set: function set(t) {
              a[0] = Math.round(1e5 * t) / 1e5;
            }
          }), Object.defineProperty(this, "shy", {
            get: function get() {
              return a[1];
            },
            set: function set(t) {
              a[1] = Math.round(1e5 * t) / 1e5;
            }
          }), Object.defineProperty(this, "shx", {
            get: function get() {
              return a[2];
            },
            set: function set(t) {
              a[2] = Math.round(1e5 * t) / 1e5;
            }
          }), Object.defineProperty(this, "sy", {
            get: function get() {
              return a[3];
            },
            set: function set(t) {
              a[3] = Math.round(1e5 * t) / 1e5;
            }
          }), Object.defineProperty(this, "tx", {
            get: function get() {
              return a[4];
            },
            set: function set(t) {
              a[4] = Math.round(1e5 * t) / 1e5;
            }
          }), Object.defineProperty(this, "ty", {
            get: function get() {
              return a[5];
            },
            set: function set(t) {
              a[5] = Math.round(1e5 * t) / 1e5;
            }
          }), Object.defineProperty(this, "rotation", {
            get: function get() {
              return Math.atan2(this.shx, this.sx);
            }
          }), Object.defineProperty(this, "scaleX", {
            get: function get() {
              return this.decompose().scale.sx;
            }
          }), Object.defineProperty(this, "scaleY", {
            get: function get() {
              return this.decompose().scale.sy;
            }
          }), Object.defineProperty(this, "isIdentity", {
            get: function get() {
              return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty;
            }
          }), this.sx = isNaN(t) ? 1 : t, this.shy = isNaN(e) ? 0 : e, this.shx = isNaN(n) ? 0 : n, this.sy = isNaN(r) ? 1 : r, this.tx = isNaN(i) ? 0 : i, this.ty = isNaN(o) ? 0 : o, this;
        };

        M.prototype.multiply = function (t) {
          var e = t.sx * this.sx + t.shy * this.shx,
              n = t.sx * this.shy + t.shy * this.sy,
              r = t.shx * this.sx + t.sy * this.shx,
              i = t.shx * this.shy + t.sy * this.sy,
              o = t.tx * this.sx + t.ty * this.shx + this.tx,
              a = t.tx * this.shy + t.ty * this.sy + this.ty;
          return new M(e, n, r, i, o, a);
        }, M.prototype.decompose = function () {
          var t = this.sx,
              e = this.shy,
              n = this.shx,
              r = this.sy,
              i = this.tx,
              o = this.ty,
              a = Math.sqrt(t * t + e * e),
              s = (t /= a) * n + (e /= a) * r;
          n -= t * s, r -= e * s;
          var l = Math.sqrt(n * n + r * r);
          return s /= l, t * (r /= l) < e * (n /= l) && (t = -t, e = -e, s = -s, a = -a), {
            scale: new M(a, 0, 0, l, 0, 0),
            translate: new M(1, 0, 0, 1, i, o),
            rotate: new M(t, e, -e, t, 0, 0),
            skew: new M(1, 0, s, 1, 0, 0)
          };
        }, M.prototype.applyToPoint = function (t) {
          var e = t.x * this.sx + t.y * this.shx + this.tx,
              n = t.x * this.shy + t.y * this.sy + this.ty;
          return new j(e, n);
        }, M.prototype.applyToRectangle = function (t) {
          var e = this.applyToPoint(t),
              n = this.applyToPoint(new j(t.x + t.w, t.y + t.h));
          return new E(e.x, e.y, n.x - e.x, n.y - e.y);
        }, M.prototype.clone = function () {
          var t = this.sx,
              e = this.shy,
              n = this.shx,
              r = this.sy,
              i = this.tx,
              o = this.ty;
          return new M(t, e, n, r, i, o);
        };
      }(lt.API, "undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()),
      /**
         * jsPDF filters PlugIn
         * Copyright (c) 2014 Aras Abbasi 
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
      a = lt.API, o = function o(t) {
        var r, e, n, i, o, a, s, l, h, u;

        for (/[^\x00-\xFF]/.test(t), e = [], n = 0, i = (t += r = "\0\0\0\0".slice(t.length % 4 || 4)).length; n < i; n += 4) {
          0 !== (o = (t.charCodeAt(n) << 24) + (t.charCodeAt(n + 1) << 16) + (t.charCodeAt(n + 2) << 8) + t.charCodeAt(n + 3)) ? (a = (o = ((o = ((o = ((o = (o - (u = o % 85)) / 85) - (h = o % 85)) / 85) - (l = o % 85)) / 85) - (s = o % 85)) / 85) % 85, e.push(a + 33, s + 33, l + 33, h + 33, u + 33)) : e.push(122);
        }

        return function (t, e) {
          for (var n = r.length; 0 < n; n--) {
            t.pop();
          }
        }(e), String.fromCharCode.apply(String, e) + "~>";
      }, s = function s(t) {
        var r,
            e,
            n,
            i,
            o,
            a = String,
            s = "length",
            l = "charCodeAt",
            h = "slice",
            u = "replace";

        for (t[h](-2), t = t[h](0, -2)[u](/\s/g, "")[u]("z", "!!!!!"), n = [], i = 0, o = (t += r = "uuuuu"[h](t[s] % 5 || 5))[s]; i < o; i += 5) {
          e = 52200625 * (t[l](i) - 33) + 614125 * (t[l](i + 1) - 33) + 7225 * (t[l](i + 2) - 33) + 85 * (t[l](i + 3) - 33) + (t[l](i + 4) - 33), n.push(255 & e >> 24, 255 & e >> 16, 255 & e >> 8, 255 & e);
        }

        return function (t, e) {
          for (var n = r[s]; 0 < n; n--) {
            t.pop();
          }
        }(n), a.fromCharCode.apply(a, n);
      }, h = function h(t) {
        for (var e = "", n = 0; n < t.length; n += 1) {
          e += ("0" + t.charCodeAt(n).toString(16)).slice(-2);
        }

        return e += ">";
      }, u = function u(t) {
        var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
        if (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") && (t = t.substr(0, t.indexOf(">"))), t.length % 2 && (t += "0"), !1 === e.test(t)) return "";

        for (var n = "", r = 0; r < t.length; r += 2) {
          n += String.fromCharCode("0x" + (t[r] + t[r + 1]));
        }

        return n;
      }, c = function c(t, e) {
        e = Object.assign({
          predictor: 1,
          colors: 1,
          bitsPerComponent: 8,
          columns: 1
        }, e);

        for (var n, r, i = [], o = t.length; o--;) {
          i[o] = t.charCodeAt(o);
        }

        return n = a.adler32cs.from(t), (r = new Deflater(6)).append(new Uint8Array(i)), t = r.flush(), (i = new Uint8Array(t.length + 6)).set(new Uint8Array([120, 156])), i.set(t, 2), i.set(new Uint8Array([255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255]), t.length + 2), t = String.fromCharCode.apply(null, i);
      }, a.processDataByFilters = function (t, e) {
        var n = 0,
            r = t || "",
            i = [];

        for ("string" == typeof (e = e || []) && (e = [e]), n = 0; n < e.length; n += 1) {
          switch (e[n]) {
            case "ASCII85Decode":
            case "/ASCII85Decode":
              r = s(r), i.push("/ASCII85Encode");
              break;

            case "ASCII85Encode":
            case "/ASCII85Encode":
              r = o(r), i.push("/ASCII85Decode");
              break;

            case "ASCIIHexDecode":
            case "/ASCIIHexDecode":
              r = u(r), i.push("/ASCIIHexEncode");
              break;

            case "ASCIIHexEncode":
            case "/ASCIIHexEncode":
              r = h(r), i.push("/ASCIIHexDecode");
              break;

            case "FlateEncode":
            case "/FlateEncode":
              r = c(r), i.push("/FlateDecode");
              break;

            default:
              throw 'The filter: "' + e[n] + '" is not implemented';
          }
        }

        return {
          data: r,
          reverseChain: i.reverse().join(" ")
        };
      }, (
      /**
         * jsPDF fileloading PlugIn
         * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
      r = lt.API).loadFile = function (t, e, n) {
        var r;
        e = e || !0, n = n || function () {};

        try {
          r = function (t, e, n) {
            var r = new XMLHttpRequest(),
                i = [],
                o = 0,
                a = function a(t) {
              var e = t.length,
                  n = String.fromCharCode;

              for (o = 0; o < e; o += 1) {
                i.push(n(255 & t.charCodeAt(o)));
              }

              return i.join("");
            };

            if (r.open("GET", t, !e), r.overrideMimeType("text/plain; charset=x-user-defined"), !1 === e && (r.onload = function () {
              return a(this.responseText);
            }), r.send(null), 200 === r.status) return e ? a(r.responseText) : void 0;
            console.warn('Unable to load file "' + t + '"');
          }(t, e);
        } catch (t) {
          r = void 0;
        }

        return r;
      }, r.loadImageFile = r.loadFile,
      /**
         * Copyright (c) 2018 Erik Koopmans
         * Released under the MIT License.
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
      i = lt.API, f = "undefined" != typeof window && window || "undefined" != typeof global && global, g = function g(t) {
        var e = se(t);
        return "undefined" === e ? "undefined" : "string" === e || t instanceof String ? "string" : "number" === e || t instanceof Number ? "number" : "function" === e || t instanceof Function ? "function" : t && t.constructor === Array ? "array" : t && 1 === t.nodeType ? "element" : "object" === e ? "object" : "unknown";
      }, m = function m(t, e) {
        var n = document.createElement(t);

        if (e.className && (n.className = e.className), e.innerHTML) {
          n.innerHTML = e.innerHTML;

          for (var r = n.getElementsByTagName("script"), i = r.length; 0 < i--; null) {
            r[i].parentNode.removeChild(r[i]);
          }
        }

        for (var o in e.style) {
          n.style[o] = e.style[o];
        }

        return n;
      }, (((y = function t(e) {
        var n = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template))),
            r = t.convert(Promise.resolve(), n);
        return r = (r = r.setProgress(1, t, 1, [t])).set(e);
      }).prototype = Object.create(Promise.prototype)).constructor = y).convert = function (t, e) {
        return t.__proto__ = e || y.prototype, t;
      }, y.template = {
        prop: {
          src: null,
          container: null,
          overlay: null,
          canvas: null,
          img: null,
          pdf: null,
          pageSize: null,
          callback: function callback() {}
        },
        progress: {
          val: 0,
          state: null,
          n: 0,
          stack: []
        },
        opt: {
          filename: "file.pdf",
          margin: [0, 0, 0, 0],
          enableLinks: !0,
          x: 0,
          y: 0,
          html2canvas: {},
          jsPDF: {}
        }
      }, y.prototype.from = function (t, e) {
        return this.then(function () {
          switch (e = e || function (t) {
            switch (g(t)) {
              case "string":
                return "string";

              case "element":
                return "canvas" === t.nodeName.toLowerCase ? "canvas" : "element";

              default:
                return "unknown";
            }
          }(t)) {
            case "string":
              return this.set({
                src: m("div", {
                  innerHTML: t
                })
              });

            case "element":
              return this.set({
                src: t
              });

            case "canvas":
              return this.set({
                canvas: t
              });

            case "img":
              return this.set({
                img: t
              });

            default:
              return this.error("Unknown source type.");
          }
        });
      }, y.prototype.to = function (t) {
        switch (t) {
          case "container":
            return this.toContainer();

          case "canvas":
            return this.toCanvas();

          case "img":
            return this.toImg();

          case "pdf":
            return this.toPdf();

          default:
            return this.error("Invalid target.");
        }
      }, y.prototype.toContainer = function () {
        return this.thenList([function () {
          return this.prop.src || this.error("Cannot duplicate - no source HTML.");
        }, function () {
          return this.prop.pageSize || this.setPageSize();
        }]).then(function () {
          var t = {
            position: "relative",
            display: "inline-block",
            width: Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) + "px",
            left: 0,
            right: 0,
            top: 0,
            margin: "auto",
            backgroundColor: "white"
          },
              e = function t(e, n) {
            for (var r = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), i = e.firstChild; i; i = i.nextSibling) {
              !0 !== n && 1 === i.nodeType && "SCRIPT" === i.nodeName || r.appendChild(t(i, n));
            }

            return 1 === e.nodeType && ("CANVAS" === e.nodeName ? (r.width = e.width, r.height = e.height, r.getContext("2d").drawImage(e, 0, 0)) : "TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName || (r.value = e.value), r.addEventListener("load", function () {
              r.scrollTop = e.scrollTop, r.scrollLeft = e.scrollLeft;
            }, !0)), r;
          }(this.prop.src, this.opt.html2canvas.javascriptEnabled);

          "BODY" === e.tagName && (t.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = m("div", {
            className: "html2pdf__overlay",
            style: {
              position: "fixed",
              overflow: "hidden",
              zIndex: 1e3,
              left: "-100000px",
              right: 0,
              bottom: 0,
              top: 0
            }
          }), this.prop.container = m("div", {
            className: "html2pdf__container",
            style: t
          }), this.prop.container.appendChild(e), this.prop.container.firstChild.appendChild(m("div", {
            style: {
              clear: "both",
              border: "0 none transparent",
              margin: 0,
              padding: 0,
              height: 0
            }
          })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
        });
      }, y.prototype.toCanvas = function () {
        var t = [function () {
          return document.body.contains(this.prop.container) || this.toContainer();
        }];
        return this.thenList(t).then(function () {
          var t = Object.assign({}, this.opt.html2canvas);
          if (delete t.onrendered, this.isHtml2CanvasLoaded()) return html2canvas(this.prop.container, t);
        }).then(function (t) {
          (this.opt.html2canvas.onrendered || function () {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay);
        });
      }, y.prototype.toContext2d = function () {
        var t = [function () {
          return document.body.contains(this.prop.container) || this.toContainer();
        }];
        return this.thenList(t).then(function () {
          var t = this.opt.jsPDF,
              e = Object.assign({
            async: !0,
            allowTaint: !0,
            backgroundColor: "#ffffff",
            imageTimeout: 15e3,
            logging: !0,
            proxy: null,
            removeContainer: !0,
            foreignObjectRendering: !1,
            useCORS: !1
          }, this.opt.html2canvas);
          if (delete e.onrendered, t.context2d.autoPaging = !0, t.context2d.posX = this.opt.x, t.context2d.posY = this.opt.y, e.windowHeight = e.windowHeight || 0, e.windowHeight = 0 == e.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : e.windowHeight, this.isHtml2CanvasLoaded()) return html2canvas(this.prop.container, e);
        }).then(function (t) {
          (this.opt.html2canvas.onrendered || function () {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay);
        });
      }, y.prototype.toImg = function () {
        return this.thenList([function () {
          return this.prop.canvas || this.toCanvas();
        }]).then(function () {
          var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
          this.prop.img = document.createElement("img"), this.prop.img.src = t;
        });
      }, y.prototype.toPdf = function () {
        return this.thenList([function () {
          return this.toContext2d();
        }]).then(function () {
          this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
        });
      }, y.prototype.output = function (t, e, n) {
        return "img" === (n = n || "pdf").toLowerCase() || "image" === n.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e);
      }, y.prototype.outputPdf = function (t, e) {
        return this.thenList([function () {
          return this.prop.pdf || this.toPdf();
        }]).then(function () {
          return this.prop.pdf.output(t, e);
        });
      }, y.prototype.outputImg = function (t, e) {
        return this.thenList([function () {
          return this.prop.img || this.toImg();
        }]).then(function () {
          switch (t) {
            case void 0:
            case "img":
              return this.prop.img;

            case "datauristring":
            case "dataurlstring":
              return this.prop.img.src;

            case "datauri":
            case "dataurl":
              return document.location.href = this.prop.img.src;

            default:
              throw 'Image output type "' + t + '" is not supported.';
          }
        });
      }, y.prototype.isHtml2CanvasLoaded = function () {
        var t = void 0 !== f.html2canvas;
        return t || console.error("html2canvas not loaded."), t;
      }, y.prototype.save = function (t) {
        if (this.isHtml2CanvasLoaded()) return this.thenList([function () {
          return this.prop.pdf || this.toPdf();
        }]).set(t ? {
          filename: t
        } : null).then(function () {
          this.prop.pdf.save(this.opt.filename);
        });
      }, y.prototype.doCallback = function (t) {
        if (this.isHtml2CanvasLoaded()) return this.thenList([function () {
          return this.prop.pdf || this.toPdf();
        }]).then(function () {
          this.prop.callback(this.prop.pdf);
        });
      }, y.prototype.set = function (e) {
        if ("object" !== g(e)) return this;
        var t = Object.keys(e || {}).map(function (t) {
          if (t in y.template.prop) return function () {
            this.prop[t] = e[t];
          };

          switch (t) {
            case "margin":
              return this.setMargin.bind(this, e.margin);

            case "jsPDF":
              return function () {
                return this.opt.jsPDF = e.jsPDF, this.setPageSize();
              };

            case "pageSize":
              return this.setPageSize.bind(this, e.pageSize);

            default:
              return function () {
                this.opt[t] = e[t];
              };
          }
        }, this);
        return this.then(function () {
          return this.thenList(t);
        });
      }, y.prototype.get = function (e, n) {
        return this.then(function () {
          var t = e in y.template.prop ? this.prop[e] : this.opt[e];
          return n ? n(t) : t;
        });
      }, y.prototype.setMargin = function (t) {
        return this.then(function () {
          switch (g(t)) {
            case "number":
              t = [t, t, t, t];

            case "array":
              if (2 === t.length && (t = [t[0], t[1], t[0], t[1]]), 4 === t.length) break;

            default:
              return this.error("Invalid margin array.");
          }

          this.opt.margin = t;
        }).then(this.setPageSize);
      }, y.prototype.setPageSize = function (t) {
        function e(t, e) {
          return Math.floor(t * e / 72 * 96);
        }

        return this.then(function () {
          (t = t || lt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t.inner = {
            width: t.width - this.opt.margin[1] - this.opt.margin[3],
            height: t.height - this.opt.margin[0] - this.opt.margin[2]
          }, t.inner.px = {
            width: e(t.inner.width, t.k),
            height: e(t.inner.height, t.k)
          }, t.inner.ratio = t.inner.height / t.inner.width), this.prop.pageSize = t;
        });
      }, y.prototype.setProgress = function (t, e, n, r) {
        return null != t && (this.progress.val = t), null != e && (this.progress.state = e), null != n && (this.progress.n = n), null != r && (this.progress.stack = r), this.progress.ratio = this.progress.val / this.progress.state, this;
      }, y.prototype.updateProgress = function (t, e, n, r) {
        return this.setProgress(t ? this.progress.val + t : null, e || null, n ? this.progress.n + n : null, r ? this.progress.stack.concat(r) : null);
      }, y.prototype.then = function (t, e) {
        var n = this;
        return this.thenCore(t, e, function (e, t) {
          return n.updateProgress(null, null, 1, [e]), Promise.prototype.then.call(this, function (t) {
            return n.updateProgress(null, e), t;
          }).then(e, t).then(function (t) {
            return n.updateProgress(1), t;
          });
        });
      }, y.prototype.thenCore = function (t, e, n) {
        n = n || Promise.prototype.then;
        var r = this;
        t && (t = t.bind(r)), e && (e = e.bind(r));
        var i = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? r : y.convert(Object.assign({}, r), Promise.prototype),
            o = n.call(i, t, e);
        return y.convert(o, r.__proto__);
      }, y.prototype.thenExternal = function (t, e) {
        return Promise.prototype.then.call(this, t, e);
      }, y.prototype.thenList = function (t) {
        var e = this;
        return t.forEach(function (t) {
          e = e.thenCore(t);
        }), e;
      }, y.prototype.catch = function (t) {
        t && (t = t.bind(this));
        var e = Promise.prototype.catch.call(this, t);
        return y.convert(e, this);
      }, y.prototype.catchExternal = function (t) {
        return Promise.prototype.catch.call(this, t);
      }, y.prototype.error = function (t) {
        return this.then(function () {
          throw new Error(t);
        });
      }, y.prototype.using = y.prototype.set, y.prototype.saveAs = y.prototype.save, y.prototype.export = y.prototype.output, y.prototype.run = y.prototype.then, lt.getPageSize = function (t, e, n) {
        if ("object" === se(t)) {
          var r = t;
          t = r.orientation, e = r.unit || e, n = r.format || n;
        }

        e = e || "mm", n = n || "a4", t = ("" + (t || "P")).toLowerCase();
        var i = ("" + n).toLowerCase(),
            o = {
          a0: [2383.94, 3370.39],
          a1: [1683.78, 2383.94],
          a2: [1190.55, 1683.78],
          a3: [841.89, 1190.55],
          a4: [595.28, 841.89],
          a5: [419.53, 595.28],
          a6: [297.64, 419.53],
          a7: [209.76, 297.64],
          a8: [147.4, 209.76],
          a9: [104.88, 147.4],
          a10: [73.7, 104.88],
          b0: [2834.65, 4008.19],
          b1: [2004.09, 2834.65],
          b2: [1417.32, 2004.09],
          b3: [1000.63, 1417.32],
          b4: [708.66, 1000.63],
          b5: [498.9, 708.66],
          b6: [354.33, 498.9],
          b7: [249.45, 354.33],
          b8: [175.75, 249.45],
          b9: [124.72, 175.75],
          b10: [87.87, 124.72],
          c0: [2599.37, 3676.54],
          c1: [1836.85, 2599.37],
          c2: [1298.27, 1836.85],
          c3: [918.43, 1298.27],
          c4: [649.13, 918.43],
          c5: [459.21, 649.13],
          c6: [323.15, 459.21],
          c7: [229.61, 323.15],
          c8: [161.57, 229.61],
          c9: [113.39, 161.57],
          c10: [79.37, 113.39],
          dl: [311.81, 623.62],
          letter: [612, 792],
          "government-letter": [576, 756],
          legal: [612, 1008],
          "junior-legal": [576, 360],
          ledger: [1224, 792],
          tabloid: [792, 1224],
          "credit-card": [153, 243]
        };

        switch (e) {
          case "pt":
            var a = 1;
            break;

          case "mm":
            a = 72 / 25.4;
            break;

          case "cm":
            a = 72 / 2.54;
            break;

          case "in":
            a = 72;
            break;

          case "px":
            a = .75;
            break;

          case "pc":
          case "em":
            a = 12;
            break;

          case "ex":
            a = 6;
            break;

          default:
            throw "Invalid unit: " + e;
        }

        if (o.hasOwnProperty(i)) var s = o[i][1] / a,
            l = o[i][0] / a;else try {
          s = n[1], l = n[0];
        } catch (t) {
          throw new Error("Invalid format: " + n);
        }

        if ("p" === t || "portrait" === t) {
          if (t = "p", s < l) {
            var h = l;
            l = s, s = h;
          }
        } else {
          if ("l" !== t && "landscape" !== t) throw "Invalid orientation: " + t;
          t = "l", l < s && (h = l, l = s, s = h);
        }

        return {
          width: l,
          height: s,
          unit: e,
          k: a
        };
      }, i.html = function (t, e) {
        (e = e || {}).callback = e.callback || function () {}, e.html2canvas = e.html2canvas || {}, e.html2canvas.canvas = e.html2canvas.canvas || this.canvas, e.jsPDF = e.jsPDF || this, e.jsPDF;
        var n = new y(e);
        return e.worker ? n : n.from(t).doCallback();
      }, lt.API.addJS = function (t) {
        return b = t, this.internal.events.subscribe("postPutResources", function (t) {
          v = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (v + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), w = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + b + ")"), this.internal.out(">>"), this.internal.out("endobj");
        }), this.internal.events.subscribe("putCatalog", function () {
          void 0 !== v && void 0 !== w && this.internal.out("/Names <</JavaScript " + v + " 0 R>>");
        }), this;
      }, (
      /**
         * @license
         * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
      x = lt.API).events.push(["postPutResources", function () {
        var t = this,
            e = /^(\d+) 0 obj$/;
        if (0 < this.outline.root.children.length) for (var n = t.outline.render().split(/\r\n/), r = 0; r < n.length; r++) {
          var i = n[r],
              o = e.exec(i);

          if (null != o) {
            var a = o[1];
            t.internal.newObjectDeferredBegin(a, !1);
          }

          t.internal.write(i);
        }

        if (this.outline.createNamedDestinations) {
          var s = this.internal.pages.length,
              l = [];

          for (r = 0; r < s; r++) {
            var h = t.internal.newObject();
            l.push(h);
            var u = t.internal.getPageInfo(r + 1);
            t.internal.write("<< /D[" + u.objId + " 0 R /XYZ null null null]>> endobj");
          }

          var c = t.internal.newObject();

          for (t.internal.write("<< /Names [ "), r = 0; r < l.length; r++) {
            t.internal.write("(page_" + (r + 1) + ")" + l[r] + " 0 R");
          }

          t.internal.write(" ] >>", "endobj"), t.internal.newObject(), t.internal.write("<< /Dests " + c + " 0 R"), t.internal.write(">>", "endobj");
        }
      }]), x.events.push(["putCatalog", function () {
        0 < this.outline.root.children.length && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + namesOid + " 0 R"));
      }]), x.events.push(["initialized", function () {
        var a = this;
        a.outline = {
          createNamedDestinations: !1,
          root: {
            children: []
          }
        }, a.outline.add = function (t, e, n) {
          var r = {
            title: e,
            options: n,
            children: []
          };
          return null == t && (t = this.root), t.children.push(r), r;
        }, a.outline.render = function () {
          return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = a, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
        }, a.outline.genIds_r = function (t) {
          t.id = a.internal.newObjectDeferred();

          for (var e = 0; e < t.children.length; e++) {
            this.genIds_r(t.children[e]);
          }
        }, a.outline.renderRoot = function (t) {
          this.objStart(t), this.line("/Type /Outlines"), 0 < t.children.length && (this.line("/First " + this.makeRef(t.children[0])), this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))), this.line("/Count " + this.count_r({
            count: 0
          }, t)), this.objEnd();
        }, a.outline.renderItems = function (t) {
          this.ctx.pdf.internal.getCoordinateString;

          for (var e = this.ctx.pdf.internal.getVerticalCoordinateString, n = 0; n < t.children.length; n++) {
            var r = t.children[n];
            this.objStart(r), this.line("/Title " + this.makeString(r.title)), this.line("/Parent " + this.makeRef(t)), 0 < n && this.line("/Prev " + this.makeRef(t.children[n - 1])), n < t.children.length - 1 && this.line("/Next " + this.makeRef(t.children[n + 1])), 0 < r.children.length && (this.line("/First " + this.makeRef(r.children[0])), this.line("/Last " + this.makeRef(r.children[r.children.length - 1])));
            var i = this.count = this.count_r({
              count: 0
            }, r);

            if (0 < i && this.line("/Count " + i), r.options && r.options.pageNumber) {
              var o = a.internal.getPageInfo(r.options.pageNumber);
              this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + e(0) + " 0]");
            }

            this.objEnd();
          }

          for (n = 0; n < t.children.length; n++) {
            r = t.children[n], this.renderItems(r);
          }
        }, a.outline.line = function (t) {
          this.ctx.val += t + "\r\n";
        }, a.outline.makeRef = function (t) {
          return t.id + " 0 R";
        }, a.outline.makeString = function (t) {
          return "(" + a.internal.pdfEscape(t) + ")";
        }, a.outline.objStart = function (t) {
          this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n";
        }, a.outline.objEnd = function (t) {
          this.ctx.val += ">> \r\nendobj\r\n";
        }, a.outline.count_r = function (t, e) {
          for (var n = 0; n < e.children.length; n++) {
            t.count++, this.count_r(t, e.children[n]);
          }

          return t.count;
        };
      }]),
      /**
         * @license
         * 
         * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
         *
         * 
         * ====================================================================
         */
      I = lt.API, C = function C() {
        var t = "function" == typeof Deflater;
        if (!t) throw new Error("requires deflate.js for compression");
        return t;
      }, B = function B(t, e, n, r) {
        var i = 5,
            o = E;

        switch (r) {
          case I.image_compression.FAST:
            i = 3, o = j;
            break;

          case I.image_compression.MEDIUM:
            i = 6, o = M;
            break;

          case I.image_compression.SLOW:
            i = 9, o = O;
        }

        t = A(t, e, n, o);
        var a = new Uint8Array(N(i)),
            s = L(t),
            l = new Deflater(i),
            h = l.append(t),
            u = l.flush(),
            c = a.length + h.length + u.length,
            f = new Uint8Array(c + 4);
        return f.set(a), f.set(h, a.length), f.set(u, a.length + h.length), f[c++] = s >>> 24 & 255, f[c++] = s >>> 16 & 255, f[c++] = s >>> 8 & 255, f[c++] = 255 & s, I.arrayBufferToBinaryString(f);
      }, N = function N(t, e) {
        var n = Math.LOG2E * Math.log(32768) - 8 << 4 | 8,
            r = n << 8;
        return r |= Math.min(3, (e - 1 & 255) >> 1) << 6, r |= 0, [n, 255 & (r += 31 - r % 31)];
      }, L = function L(t, e) {
        for (var n, r = 1, i = 0, o = t.length, a = 0; 0 < o;) {
          for (o -= n = e < o ? e : o; i += r += t[a++], --n;) {
            ;
          }

          r %= 65521, i %= 65521;
        }

        return (i << 16 | r) >>> 0;
      }, A = function A(t, e, n, r) {
        for (var i, o, a, s = t.length / e, l = new Uint8Array(t.length + s), h = T(), u = 0; u < s; u++) {
          if (a = u * e, i = t.subarray(a, a + e), r) l.set(r(i, n, o), a + u);else {
            for (var c = 0, f = h.length, p = []; c < f; c++) {
              p[c] = h[c](i, n, o);
            }

            var d = R(p.concat());
            l.set(p[d], a + u);
          }
          o = i;
        }

        return l;
      }, S = function S(t, e, n) {
        var r = Array.apply([], t);
        return r.unshift(0), r;
      }, j = function j(t, e, n) {
        var r,
            i = [],
            o = 0,
            a = t.length;

        for (i[0] = 1; o < a; o++) {
          r = t[o - e] || 0, i[o + 1] = t[o] - r + 256 & 255;
        }

        return i;
      }, E = function E(t, e, n) {
        var r,
            i = [],
            o = 0,
            a = t.length;

        for (i[0] = 2; o < a; o++) {
          r = n && n[o] || 0, i[o + 1] = t[o] - r + 256 & 255;
        }

        return i;
      }, M = function M(t, e, n) {
        var r,
            i,
            o = [],
            a = 0,
            s = t.length;

        for (o[0] = 3; a < s; a++) {
          r = t[a - e] || 0, i = n && n[a] || 0, o[a + 1] = t[a] + 256 - (r + i >>> 1) & 255;
        }

        return o;
      }, O = function O(t, e, n) {
        var r,
            i,
            o,
            a,
            s = [],
            l = 0,
            h = t.length;

        for (s[0] = 4; l < h; l++) {
          r = t[l - e] || 0, i = n && n[l] || 0, o = n && n[l - e] || 0, a = q(r, i, o), s[l + 1] = t[l] - a + 256 & 255;
        }

        return s;
      }, q = function q(t, e, n) {
        var r = t + e - n,
            i = Math.abs(r - t),
            o = Math.abs(r - e),
            a = Math.abs(r - n);
        return i <= o && i <= a ? t : o <= a ? e : n;
      }, T = function T() {
        return [S, j, E, M, O];
      }, R = function R(t) {
        for (var e, n, r, i = 0, o = t.length; i < o;) {
          ((e = D(t[i].slice(1))) < n || !n) && (n = e, r = i), i++;
        }

        return r;
      }, D = function D(t) {
        for (var e = 0, n = t.length, r = 0; e < n;) {
          r += Math.abs(t[e++]);
        }

        return r;
      }, I.processPNG = function (t, e, n, r, i) {
        var o,
            a,
            s,
            l,
            h,
            u,
            c = this.color_spaces.DEVICE_RGB,
            f = this.decode.FLATE_DECODE,
            p = 8;

        if (this.isArrayBuffer(t) && (t = new Uint8Array(t)), this.isArrayBufferView(t)) {
          if ("function" != typeof PNG || "function" != typeof kt) throw new Error("PNG support requires png.js and zlib.js");

          if (t = (o = new PNG(t)).imgData, p = o.bits, c = o.colorSpace, l = o.colors, -1 !== [4, 6].indexOf(o.colorType)) {
            if (8 === o.bits) for (var d, g = (_ = 32 == o.pixelBitlength ? new Uint32Array(o.decodePixels().buffer) : 16 == o.pixelBitlength ? new Uint16Array(o.decodePixels().buffer) : new Uint8Array(o.decodePixels().buffer)).length, m = new Uint8Array(g * o.colors), y = new Uint8Array(g), v = o.pixelBitlength - o.bits, w = 0, b = 0; w < g; w++) {
              for (x = _[w], d = 0; d < v;) {
                m[b++] = x >>> d & 255, d += o.bits;
              }

              y[w] = x >>> d & 255;
            }

            if (16 === o.bits) {
              g = (_ = new Uint32Array(o.decodePixels().buffer)).length, m = new Uint8Array(g * (32 / o.pixelBitlength) * o.colors), y = new Uint8Array(g * (32 / o.pixelBitlength));

              for (var x, N = 1 < o.colors, L = b = w = 0; w < g;) {
                x = _[w++], m[b++] = x >>> 0 & 255, N && (m[b++] = x >>> 16 & 255, x = _[w++], m[b++] = x >>> 0 & 255), y[L++] = x >>> 16 & 255;
              }

              p = 8;
            }

            r !== I.image_compression.NONE && C() ? (t = B(m, o.width * o.colors, o.colors, r), u = B(y, o.width, 1, r)) : (t = m, u = y, f = null);
          }

          if (3 === o.colorType && (c = this.color_spaces.INDEXED, h = o.palette, o.transparency.indexed)) {
            var A = o.transparency.indexed,
                S = 0;

            for (w = 0, g = A.length; w < g; ++w) {
              S += A[w];
            }

            if ((S /= 255) == g - 1 && -1 !== A.indexOf(0)) s = [A.indexOf(0)];else if (S !== g) {
              var _ = o.decodePixels();

              for (y = new Uint8Array(_.length), w = 0, g = _.length; w < g; w++) {
                y[w] = A[_[w]];
              }

              u = B(y, o.width, 1);
            }
          }

          var F = function (t) {
            var e;

            switch (t) {
              case I.image_compression.FAST:
                e = 11;
                break;

              case I.image_compression.MEDIUM:
                e = 13;
                break;

              case I.image_compression.SLOW:
                e = 14;
                break;

              default:
                e = 12;
            }

            return e;
          }(r);

          return a = f === this.decode.FLATE_DECODE ? "/Predictor " + F + " /Colors " + l + " /BitsPerComponent " + p + " /Columns " + o.width : "/Colors " + l + " /BitsPerComponent " + p + " /Columns " + o.width, (this.isArrayBuffer(t) || this.isArrayBufferView(t)) && (t = this.arrayBufferToBinaryString(t)), (u && this.isArrayBuffer(u) || this.isArrayBufferView(u)) && (u = this.arrayBufferToBinaryString(u)), this.createImageInfo(t, o.width, o.height, c, p, f, e, n, a, s, h, u, F);
        }

        throw new Error("Unsupported PNG image data, try using JPEG instead.");
      }, (
      /**
         * @license
         * Copyright (c) 2017 Aras Abbasi 
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
      U = lt.API).processGIF89A = function (t, e, n, r, i) {
        var o = new At(t),
            a = o.width,
            s = o.height,
            l = [];
        o.decodeAndBlitFrameRGBA(0, l);
        var h = {
          data: l,
          width: a,
          height: s
        },
            u = new _t(100).encode(h, 100);
        return U.processJPEG.call(this, u, e, n, r);
      }, U.processGIF87A = U.processGIF89A, (
      /**
         * Copyright (c) 2018 Aras Abbasi 
         *
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
      z = lt.API).processBMP = function (t, e, n, r, i) {
        var o = new Ft(t, !1),
            a = o.width,
            s = o.height,
            l = {
          data: o.getData(),
          width: a,
          height: s
        },
            h = new _t(100).encode(l, 100);
        return z.processJPEG.call(this, h, e, n, r);
      }, lt.API.setLanguage = function (t) {
        return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), void 0 !== {
          af: "Afrikaans",
          sq: "Albanian",
          ar: "Arabic (Standard)",
          "ar-DZ": "Arabic (Algeria)",
          "ar-BH": "Arabic (Bahrain)",
          "ar-EG": "Arabic (Egypt)",
          "ar-IQ": "Arabic (Iraq)",
          "ar-JO": "Arabic (Jordan)",
          "ar-KW": "Arabic (Kuwait)",
          "ar-LB": "Arabic (Lebanon)",
          "ar-LY": "Arabic (Libya)",
          "ar-MA": "Arabic (Morocco)",
          "ar-OM": "Arabic (Oman)",
          "ar-QA": "Arabic (Qatar)",
          "ar-SA": "Arabic (Saudi Arabia)",
          "ar-SY": "Arabic (Syria)",
          "ar-TN": "Arabic (Tunisia)",
          "ar-AE": "Arabic (U.A.E.)",
          "ar-YE": "Arabic (Yemen)",
          an: "Aragonese",
          hy: "Armenian",
          as: "Assamese",
          ast: "Asturian",
          az: "Azerbaijani",
          eu: "Basque",
          be: "Belarusian",
          bn: "Bengali",
          bs: "Bosnian",
          br: "Breton",
          bg: "Bulgarian",
          my: "Burmese",
          ca: "Catalan",
          ch: "Chamorro",
          ce: "Chechen",
          zh: "Chinese",
          "zh-HK": "Chinese (Hong Kong)",
          "zh-CN": "Chinese (PRC)",
          "zh-SG": "Chinese (Singapore)",
          "zh-TW": "Chinese (Taiwan)",
          cv: "Chuvash",
          co: "Corsican",
          cr: "Cree",
          hr: "Croatian",
          cs: "Czech",
          da: "Danish",
          nl: "Dutch (Standard)",
          "nl-BE": "Dutch (Belgian)",
          en: "English",
          "en-AU": "English (Australia)",
          "en-BZ": "English (Belize)",
          "en-CA": "English (Canada)",
          "en-IE": "English (Ireland)",
          "en-JM": "English (Jamaica)",
          "en-NZ": "English (New Zealand)",
          "en-PH": "English (Philippines)",
          "en-ZA": "English (South Africa)",
          "en-TT": "English (Trinidad & Tobago)",
          "en-GB": "English (United Kingdom)",
          "en-US": "English (United States)",
          "en-ZW": "English (Zimbabwe)",
          eo: "Esperanto",
          et: "Estonian",
          fo: "Faeroese",
          fj: "Fijian",
          fi: "Finnish",
          fr: "French (Standard)",
          "fr-BE": "French (Belgium)",
          "fr-CA": "French (Canada)",
          "fr-FR": "French (France)",
          "fr-LU": "French (Luxembourg)",
          "fr-MC": "French (Monaco)",
          "fr-CH": "French (Switzerland)",
          fy: "Frisian",
          fur: "Friulian",
          gd: "Gaelic (Scots)",
          "gd-IE": "Gaelic (Irish)",
          gl: "Galacian",
          ka: "Georgian",
          de: "German (Standard)",
          "de-AT": "German (Austria)",
          "de-DE": "German (Germany)",
          "de-LI": "German (Liechtenstein)",
          "de-LU": "German (Luxembourg)",
          "de-CH": "German (Switzerland)",
          el: "Greek",
          gu: "Gujurati",
          ht: "Haitian",
          he: "Hebrew",
          hi: "Hindi",
          hu: "Hungarian",
          is: "Icelandic",
          id: "Indonesian",
          iu: "Inuktitut",
          ga: "Irish",
          it: "Italian (Standard)",
          "it-CH": "Italian (Switzerland)",
          ja: "Japanese",
          kn: "Kannada",
          ks: "Kashmiri",
          kk: "Kazakh",
          km: "Khmer",
          ky: "Kirghiz",
          tlh: "Klingon",
          ko: "Korean",
          "ko-KP": "Korean (North Korea)",
          "ko-KR": "Korean (South Korea)",
          la: "Latin",
          lv: "Latvian",
          lt: "Lithuanian",
          lb: "Luxembourgish",
          mk: "FYRO Macedonian",
          ms: "Malay",
          ml: "Malayalam",
          mt: "Maltese",
          mi: "Maori",
          mr: "Marathi",
          mo: "Moldavian",
          nv: "Navajo",
          ng: "Ndonga",
          ne: "Nepali",
          no: "Norwegian",
          nb: "Norwegian (Bokmal)",
          nn: "Norwegian (Nynorsk)",
          oc: "Occitan",
          or: "Oriya",
          om: "Oromo",
          fa: "Persian",
          "fa-IR": "Persian/Iran",
          pl: "Polish",
          pt: "Portuguese",
          "pt-BR": "Portuguese (Brazil)",
          pa: "Punjabi",
          "pa-IN": "Punjabi (India)",
          "pa-PK": "Punjabi (Pakistan)",
          qu: "Quechua",
          rm: "Rhaeto-Romanic",
          ro: "Romanian",
          "ro-MO": "Romanian (Moldavia)",
          ru: "Russian",
          "ru-MO": "Russian (Moldavia)",
          sz: "Sami (Lappish)",
          sg: "Sango",
          sa: "Sanskrit",
          sc: "Sardinian",
          sd: "Sindhi",
          si: "Singhalese",
          sr: "Serbian",
          sk: "Slovak",
          sl: "Slovenian",
          so: "Somani",
          sb: "Sorbian",
          es: "Spanish",
          "es-AR": "Spanish (Argentina)",
          "es-BO": "Spanish (Bolivia)",
          "es-CL": "Spanish (Chile)",
          "es-CO": "Spanish (Colombia)",
          "es-CR": "Spanish (Costa Rica)",
          "es-DO": "Spanish (Dominican Republic)",
          "es-EC": "Spanish (Ecuador)",
          "es-SV": "Spanish (El Salvador)",
          "es-GT": "Spanish (Guatemala)",
          "es-HN": "Spanish (Honduras)",
          "es-MX": "Spanish (Mexico)",
          "es-NI": "Spanish (Nicaragua)",
          "es-PA": "Spanish (Panama)",
          "es-PY": "Spanish (Paraguay)",
          "es-PE": "Spanish (Peru)",
          "es-PR": "Spanish (Puerto Rico)",
          "es-ES": "Spanish (Spain)",
          "es-UY": "Spanish (Uruguay)",
          "es-VE": "Spanish (Venezuela)",
          sx: "Sutu",
          sw: "Swahili",
          sv: "Swedish",
          "sv-FI": "Swedish (Finland)",
          "sv-SV": "Swedish (Sweden)",
          ta: "Tamil",
          tt: "Tatar",
          te: "Teluga",
          th: "Thai",
          tig: "Tigre",
          ts: "Tsonga",
          tn: "Tswana",
          tr: "Turkish",
          tk: "Turkmen",
          uk: "Ukrainian",
          hsb: "Upper Sorbian",
          ur: "Urdu",
          ve: "Venda",
          vi: "Vietnamese",
          vo: "Volapuk",
          wa: "Walloon",
          cy: "Welsh",
          xh: "Xhosa",
          ji: "Yiddish",
          zu: "Zulu"
        }[t] && (this.internal.languageSettings.languageCode = t, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function () {
          this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
        }), this.internal.languageSettings.isSubscribed = !0)), this;
      },
      /** @license
         * MIT license.
         * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
         *               2014 Diego Casorran, https://github.com/diegocr
         *
         * 
         * ====================================================================
         */
      H = lt.API, W = H.getCharWidthsArray = function (t, e) {
        var n,
            r,
            i,
            o = (e = e || {}).font || this.internal.getFont(),
            a = e.fontSize || this.internal.getFontSize(),
            s = e.charSpace || this.internal.getCharSpace(),
            l = e.widths ? e.widths : o.metadata.Unicode.widths,
            h = l.fof ? l.fof : 1,
            u = e.kerning ? e.kerning : o.metadata.Unicode.kerning,
            c = u.fof ? u.fof : 1,
            f = 0,
            p = l[0] || h,
            d = [];

        for (n = 0, r = t.length; n < r; n++) {
          i = t.charCodeAt(n), "function" == typeof o.metadata.widthOfString ? d.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(i)) + s * (1e3 / a) || 0) / 1e3) : d.push((l[i] || p) / h + (u[i] && u[i][f] || 0) / c), f = i;
        }

        return d;
      }, V = H.getArraySum = function (t) {
        for (var e = t.length, n = 0; e;) {
          n += t[--e];
        }

        return n;
      }, G = H.getStringUnitWidth = function (t, e) {
        var n = (e = e || {}).fontSize || this.internal.getFontSize(),
            r = e.font || this.internal.getFont(),
            i = e.charSpace || this.internal.getCharSpace();
        return "function" == typeof r.metadata.widthOfString ? r.metadata.widthOfString(t, n, i) / n : V(W.apply(this, arguments));
      }, Y = function Y(t, e, n, r) {
        for (var i = [], o = 0, a = t.length, s = 0; o !== a && s + e[o] < n;) {
          s += e[o], o++;
        }

        i.push(t.slice(0, o));
        var l = o;

        for (s = 0; o !== a;) {
          s + e[o] > r && (i.push(t.slice(l, o)), s = 0, l = o), s += e[o], o++;
        }

        return l !== o && i.push(t.slice(l, o)), i;
      }, J = function J(t, e, n) {
        n || (n = {});
        var r,
            i,
            o,
            a,
            s,
            l,
            h = [],
            u = [h],
            c = n.textIndent || 0,
            f = 0,
            p = 0,
            d = t.split(" "),
            g = W.apply(this, [" ", n])[0];

        if (l = -1 === n.lineIndent ? d[0].length + 2 : n.lineIndent || 0) {
          var m = Array(l).join(" "),
              y = [];
          d.map(function (t) {
            1 < (t = t.split(/\s*\n/)).length ? y = y.concat(t.map(function (t, e) {
              return (e && t.length ? "\n" : "") + t;
            })) : y.push(t[0]);
          }), d = y, l = G.apply(this, [m, n]);
        }

        for (o = 0, a = d.length; o < a; o++) {
          var v = 0;

          if (r = d[o], l && "\n" == r[0] && (r = r.substr(1), v = 1), i = W.apply(this, [r, n]), e < c + f + (p = V(i)) || v) {
            if (e < p) {
              for (s = Y.apply(this, [r, i, e - (c + f), e]), h.push(s.shift()), h = [s.pop()]; s.length;) {
                u.push([s.shift()]);
              }

              p = V(i.slice(r.length - (h[0] ? h[0].length : 0)));
            } else h = [r];

            u.push(h), c = p + l, f = g;
          } else h.push(r), c += f + p, f = g;
        }

        if (l) var w = function w(t, e) {
          return (e ? m : "") + t.join(" ");
        };else w = function w(t) {
          return t.join(" ");
        };
        return u.map(w);
      }, H.splitTextToSize = function (t, e, n) {
        var r,
            i = (n = n || {}).fontSize || this.internal.getFontSize(),
            o = function (t) {
          var e = {
            0: 1
          },
              n = {};
          if (t.widths && t.kerning) return {
            widths: t.widths,
            kerning: t.kerning
          };
          var r = this.internal.getFont(t.fontName, t.fontStyle),
              i = "Unicode";
          return r.metadata[i] ? {
            widths: r.metadata[i].widths || e,
            kerning: r.metadata[i].kerning || n
          } : {
            font: r.metadata,
            fontSize: this.internal.getFontSize(),
            charSpace: this.internal.getCharSpace()
          };
        }.call(this, n);

        r = Array.isArray(t) ? t : t.split(/\r?\n/);
        var a = 1 * this.internal.scaleFactor * e / i;
        o.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / i : 0, o.lineIndent = n.lineIndent;
        var s,
            l,
            h = [];

        for (s = 0, l = r.length; s < l; s++) {
          h = h.concat(J.apply(this, [r[s], a, o]));
        }

        return h;
      },
      /** @license
         jsPDF standard_fonts_metrics plugin
         * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
         * MIT license.
         * 
         * ====================================================================
         */
      X = lt.API, Z = {
        codePages: ["WinAnsiEncoding"],
        WinAnsiEncoding: (K = function K(t) {
          for (var e = "klmnopqrstuvwxyz", n = {}, r = 0; r < e.length; r++) {
            n[e[r]] = "0123456789abcdef"[r];
          }

          var i,
              o,
              a,
              s,
              l,
              h = {},
              u = 1,
              c = h,
              f = [],
              p = "",
              d = "",
              g = t.length - 1;

          for (r = 1; r != g;) {
            l = t[r], r += 1, "'" == l ? o = o ? (s = o.join(""), i) : [] : o ? o.push(l) : "{" == l ? (f.push([c, s]), c = {}, s = i) : "}" == l ? ((a = f.pop())[0][a[1]] = c, s = i, c = a[0]) : "-" == l ? u = -1 : s === i ? n.hasOwnProperty(l) ? (p += n[l], s = parseInt(p, 16) * u, u = 1, p = "") : p += l : n.hasOwnProperty(l) ? (d += n[l], c[s] = parseInt(d, 16) * u, u = 1, s = i, d = "") : d += l;
          }

          return h;
        })("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
      }, Q = {
        Unicode: {
          Courier: Z,
          "Courier-Bold": Z,
          "Courier-BoldOblique": Z,
          "Courier-Oblique": Z,
          Helvetica: Z,
          "Helvetica-Bold": Z,
          "Helvetica-BoldOblique": Z,
          "Helvetica-Oblique": Z,
          "Times-Roman": Z,
          "Times-Bold": Z,
          "Times-BoldItalic": Z,
          "Times-Italic": Z
        }
      }, $ = {
        Unicode: {
          "Courier-Oblique": K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-BoldItalic": K("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
          "Helvetica-Bold": K("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
          Courier: K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Courier-BoldOblique": K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-Bold": K("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
          Symbol: K("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
          Helvetica: K("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
          "Helvetica-BoldOblique": K("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
          ZapfDingbats: K("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
          "Courier-Bold": K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-Italic": K("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
          "Times-Roman": K("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
          "Helvetica-Oblique": K("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
        }
      }, X.events.push(["addFont", function (t) {
        var e,
            n,
            r,
            i = t.font,
            o = "Unicode";
        (e = $[o][i.postScriptName]) && ((n = i.metadata[o] ? i.metadata[o] : i.metadata[o] = {}).widths = e.widths, n.kerning = e.kerning), (r = Q[o][i.postScriptName]) && ((n = i.metadata[o] ? i.metadata[o] : i.metadata[o] = {}).encoding = r).codePages && r.codePages.length && (i.encoding = r.codePages[0]);
      }]),
      /**
         * @license
         * Licensed under the MIT License.
         * http://opensource.org/licenses/mit-license
         */
      tt = lt, "undefined" != typeof self && self || "undefined" != typeof global && global || "undefined" != typeof window && window || Function("return this")(), tt.API.events.push(["addFont", function (t) {
        var e = t.font,
            n = t.instance;

        if (void 0 !== n && n.existsFileInVFS(e.postScriptName)) {
          var r = n.getFileFromVFS(e.postScriptName);
          if ("string" != typeof r) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + e.postScriptName + "').");
          e.metadata = tt.API.TTFFont.open(e.postScriptName, e.fontName, r, e.encoding), e.metadata.Unicode = e.metadata.Unicode || {
            encoding: {},
            kerning: {},
            widths: []
          }, e.metadata.glyIdsUsed = [0];
        } else if (!1 === e.isStandardFont) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + e.postScriptName + "').");
      }]), (
      /** @license
         * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
         * 
         * 
         * ====================================================================
         */
      et = lt.API).addSvg = function (t, e, n, r, i) {
        if (void 0 === e || void 0 === n) throw new Error("addSVG needs values for 'x' and 'y'");

        function o(t) {
          for (var e = parseFloat(t[1]), n = parseFloat(t[2]), r = [], i = 3, o = t.length; i < o;) {
            "c" === t[i] ? (r.push([parseFloat(t[i + 1]), parseFloat(t[i + 2]), parseFloat(t[i + 3]), parseFloat(t[i + 4]), parseFloat(t[i + 5]), parseFloat(t[i + 6])]), i += 7) : "l" === t[i] ? (r.push([parseFloat(t[i + 1]), parseFloat(t[i + 2])]), i += 3) : i += 1;
          }

          return [e, n, r];
        }

        var a,
            s,
            l,
            h,
            u,
            c,
            f,
            p,
            d = (h = document, p = h.createElement("iframe"), u = ".jsPDF_sillysvg_iframe {display:none;position:absolute;}", (f = (c = h).createElement("style")).type = "text/css", f.styleSheet ? f.styleSheet.cssText = u : f.appendChild(c.createTextNode(u)), c.getElementsByTagName("head")[0].appendChild(f), p.name = "childframe", p.setAttribute("width", 0), p.setAttribute("height", 0), p.setAttribute("frameborder", "0"), p.setAttribute("scrolling", "no"), p.setAttribute("seamless", "seamless"), p.setAttribute("class", "jsPDF_sillysvg_iframe"), h.body.appendChild(p), p),
            g = (a = t, (l = ((s = d).contentWindow || s.contentDocument).document).write(a), l.close(), l.getElementsByTagName("svg")[0]),
            m = [1, 1],
            y = parseFloat(g.getAttribute("width")),
            v = parseFloat(g.getAttribute("height"));
        y && v && (r && i ? m = [r / y, i / v] : r ? m = [r / y, r / y] : i && (m = [i / v, i / v]));
        var w,
            b,
            x,
            N,
            L = g.childNodes;

        for (w = 0, b = L.length; w < b; w++) {
          (x = L[w]).tagName && "PATH" === x.tagName.toUpperCase() && ((N = o(x.getAttribute("d").split(" ")))[0] = N[0] * m[0] + e, N[1] = N[1] * m[1] + n, this.lines.call(this, N[2], N[0], N[1], m));
        }

        return this;
      }, et.addSVG = et.addSvg, et.addSvgAsImage = function (t, e, n, r, i, o, a, s) {
        if (isNaN(e) || isNaN(n)) throw console.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
        if (isNaN(r) || isNaN(i)) throw console.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
        var l = document.createElement("canvas");
        l.width = r, l.height = i;
        var h = l.getContext("2d");
        return h.fillStyle = "#fff", h.fillRect(0, 0, l.width, l.height), canvg(l, t, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0
        }), this.addImage(l.toDataURL("image/jpeg", 1), e, n, r, i, a, s), this;
      }, lt.API.putTotalPages = function (t) {
        var e,
            n = 0;
        n = parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(t, "g"), this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(t, this.internal.getFont()), "g"), this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));

        for (var r = 1; r <= this.internal.getNumberOfPages(); r++) {
          for (var i = 0; i < this.internal.pages[r].length; i++) {
            this.internal.pages[r][i] = this.internal.pages[r][i].replace(e, n);
          }
        }

        return this;
      }, lt.API.viewerPreferences = function (t, e) {
        var n;
        t = t || {}, e = e || !1;
        var r,
            i,
            o = {
          HideToolbar: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3
          },
          HideMenubar: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3
          },
          HideWindowUI: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3
          },
          FitWindow: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3
          },
          CenterWindow: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3
          },
          DisplayDocTitle: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.4
          },
          NonFullScreenPageMode: {
            defaultValue: "UseNone",
            value: "UseNone",
            type: "name",
            explicitSet: !1,
            valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
            pdfVersion: 1.3
          },
          Direction: {
            defaultValue: "L2R",
            value: "L2R",
            type: "name",
            explicitSet: !1,
            valueSet: ["L2R", "R2L"],
            pdfVersion: 1.3
          },
          ViewArea: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4
          },
          ViewClip: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4
          },
          PrintArea: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4
          },
          PrintClip: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4
          },
          PrintScaling: {
            defaultValue: "AppDefault",
            value: "AppDefault",
            type: "name",
            explicitSet: !1,
            valueSet: ["AppDefault", "None"],
            pdfVersion: 1.6
          },
          Duplex: {
            defaultValue: "",
            value: "none",
            type: "name",
            explicitSet: !1,
            valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
            pdfVersion: 1.7
          },
          PickTrayByPDFSize: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.7
          },
          PrintPageRange: {
            defaultValue: "",
            value: "",
            type: "array",
            explicitSet: !1,
            valueSet: null,
            pdfVersion: 1.7
          },
          NumCopies: {
            defaultValue: 1,
            value: 1,
            type: "integer",
            explicitSet: !1,
            valueSet: null,
            pdfVersion: 1.7
          }
        },
            a = Object.keys(o),
            s = [],
            l = 0,
            h = 0,
            u = 0,
            c = !0;

        function f(t, e) {
          var n,
              r = !1;

          for (n = 0; n < t.length; n += 1) {
            t[n] === e && (r = !0);
          }

          return r;
        }

        if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o)), this.internal.viewerpreferences.isSubscribed = !1), n = this.internal.viewerpreferences.configuration, "reset" === t || !0 === e) {
          var p = a.length;

          for (u = 0; u < p; u += 1) {
            n[a[u]].value = n[a[u]].defaultValue, n[a[u]].explicitSet = !1;
          }
        }

        if ("object" === se(t)) for (r in t) {
          if (i = t[r], f(a, r) && void 0 !== i) {
            if ("boolean" === n[r].type && "boolean" == typeof i) n[r].value = i;else if ("name" === n[r].type && f(n[r].valueSet, i)) n[r].value = i;else if ("integer" === n[r].type && Number.isInteger(i)) n[r].value = i;else if ("array" === n[r].type) {
              for (l = 0; l < i.length; l += 1) {
                if (c = !0, 1 === i[l].length && "number" == typeof i[l][0]) s.push(String(i[l] - 1));else if (1 < i[l].length) {
                  for (h = 0; h < i[l].length; h += 1) {
                    "number" != typeof i[l][h] && (c = !1);
                  }

                  !0 === c && s.push([i[l][0] - 1, i[l][1] - 1].join(" "));
                }
              }

              n[r].value = "[" + s.join(" ") + "]";
            } else n[r].value = n[r].defaultValue;
            n[r].explicitSet = !0;
          }
        }
        return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function () {
          var t,
              e = [];

          for (t in n) {
            !0 === n[t].explicitSet && ("name" === n[t].type ? e.push("/" + t + " /" + n[t].value) : e.push("/" + t + " " + n[t].value));
          }

          0 !== e.length && this.internal.write("/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>");
        }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = n, this;
      },
      /** ==================================================================== 
         * jsPDF XMP metadata plugin
         * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
         * 
         * 
         * ====================================================================
         */
      nt = lt.API, ot = it = rt = "", nt.addMetadata = function (t, e) {
        return it = e || "http://jspdf.default.namespaceuri/", rt = t, this.internal.events.subscribe("postPutResources", function () {
          if (rt) {
            var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + it + '"><jspdf:metadata>',
                e = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
                n = unescape(encodeURIComponent(t)),
                r = unescape(encodeURIComponent(rt)),
                i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
                o = unescape(encodeURIComponent("</x:xmpmeta>")),
                a = n.length + r.length + i.length + e.length + o.length;
            ot = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + a + " >>"), this.internal.write("stream"), this.internal.write(e + n + r + i + o), this.internal.write("endstream"), this.internal.write("endobj");
          } else ot = "";
        }), this.internal.events.subscribe("putCatalog", function () {
          ot && this.internal.write("/Metadata " + ot + " 0 R");
        }), this;
      }, function (f, t) {
        var e = f.API;

        var m = e.pdfEscape16 = function (t, e) {
          for (var n, r = e.metadata.Unicode.widths, i = ["", "0", "00", "000", "0000"], o = [""], a = 0, s = t.length; a < s; ++a) {
            if (n = e.metadata.characterToGlyph(t.charCodeAt(a)), e.metadata.glyIdsUsed.push(n), e.metadata.toUnicode[n] = t.charCodeAt(a), -1 == r.indexOf(n) && (r.push(n), r.push([parseInt(e.metadata.widthOfGlyph(n), 10)])), "0" == n) return o.join("");
            n = n.toString(16), o.push(i[4 - n.length], n);
          }

          return o.join("");
        },
            p = function p(t) {
          var e, n, r, i, o, a, s;

          for (o = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", r = [], a = 0, s = (n = Object.keys(t).sort(function (t, e) {
            return t - e;
          })).length; a < s; a++) {
            e = n[a], 100 <= r.length && (o += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar", r = []), i = ("0000" + t[e].toString(16)).slice(-4), e = ("0000" + (+e).toString(16)).slice(-4), r.push("<" + e + "><" + i + ">");
          }

          return r.length && (o += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar\n"), o += "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
        };

        e.events.push(["putFont", function (t) {
          !function (t, e, n, r) {
            if (t.metadata instanceof f.API.TTFFont && "Identity-H" === t.encoding) {
              for (var i = t.metadata.Unicode.widths, o = t.metadata.subset.encode(t.metadata.glyIdsUsed, 1), a = "", s = 0; s < o.length; s++) {
                a += String.fromCharCode(o[s]);
              }

              var l = n();
              r({
                data: a,
                addLength1: !0
              }), e("endobj");
              var h = n();
              r({
                data: p(t.metadata.toUnicode),
                addLength1: !0
              }), e("endobj");
              var u = n();
              e("<<"), e("/Type /FontDescriptor"), e("/FontName /" + t.fontName), e("/FontFile2 " + l + " 0 R"), e("/FontBBox " + f.API.PDFObject.convert(t.metadata.bbox)), e("/Flags " + t.metadata.flags), e("/StemV " + t.metadata.stemV), e("/ItalicAngle " + t.metadata.italicAngle), e("/Ascent " + t.metadata.ascender), e("/Descent " + t.metadata.decender), e("/CapHeight " + t.metadata.capHeight), e(">>"), e("endobj");
              var c = n();
              e("<<"), e("/Type /Font"), e("/BaseFont /" + t.fontName), e("/FontDescriptor " + u + " 0 R"), e("/W " + f.API.PDFObject.convert(i)), e("/CIDToGIDMap /Identity"), e("/DW 1000"), e("/Subtype /CIDFontType2"), e("/CIDSystemInfo"), e("<<"), e("/Supplement 0"), e("/Registry (Adobe)"), e("/Ordering (" + t.encoding + ")"), e(">>"), e(">>"), e("endobj"), t.objectNumber = n(), e("<<"), e("/Type /Font"), e("/Subtype /Type0"), e("/ToUnicode " + h + " 0 R"), e("/BaseFont /" + t.fontName), e("/Encoding /" + t.encoding), e("/DescendantFonts [" + c + " 0 R]"), e(">>"), e("endobj"), t.isAlreadyPutted = !0;
            }
          }(t.font, t.out, t.newObject, t.putStream);
        }]);
        e.events.push(["putFont", function (t) {
          !function (t, e, n, r) {
            if (t.metadata instanceof f.API.TTFFont && "WinAnsiEncoding" === t.encoding) {
              t.metadata.Unicode.widths;

              for (var i = t.metadata.rawData, o = "", a = 0; a < i.length; a++) {
                o += String.fromCharCode(i[a]);
              }

              var s = n();
              r({
                data: o,
                addLength1: !0
              }), e("endobj");
              var l = n();
              r({
                data: p(t.metadata.toUnicode),
                addLength1: !0
              }), e("endobj");
              var h = n();

              for (e("<<"), e("/Descent " + t.metadata.decender), e("/CapHeight " + t.metadata.capHeight), e("/StemV " + t.metadata.stemV), e("/Type /FontDescriptor"), e("/FontFile2 " + s + " 0 R"), e("/Flags 96"), e("/FontBBox " + f.API.PDFObject.convert(t.metadata.bbox)), e("/FontName /" + t.fontName), e("/ItalicAngle " + t.metadata.italicAngle), e("/Ascent " + t.metadata.ascender), e(">>"), e("endobj"), t.objectNumber = n(), a = 0; a < t.metadata.hmtx.widths.length; a++) {
                t.metadata.hmtx.widths[a] = parseInt(t.metadata.hmtx.widths[a] * (1e3 / t.metadata.head.unitsPerEm));
              }

              e("<</Subtype/TrueType/Type/Font/ToUnicode " + l + " 0 R/BaseFont/" + t.fontName + "/FontDescriptor " + h + " 0 R/Encoding/" + t.encoding + " /FirstChar 29 /LastChar 255 /Widths " + f.API.PDFObject.convert(t.metadata.hmtx.widths) + ">>"), e("endobj"), t.isAlreadyPutted = !0;
            }
          }(t.font, t.out, t.newObject, t.putStream);
        }]);

        var h = function h(t) {
          var e,
              n,
              r = t.text || "",
              i = t.x,
              o = t.y,
              a = t.options || {},
              s = t.mutex || {},
              l = s.pdfEscape,
              h = s.activeFontKey,
              u = s.fonts,
              c = (s.activeFontSize, ""),
              f = 0,
              p = "",
              d = u[n = h].encoding;
          if ("Identity-H" !== u[n].encoding) return {
            text: r,
            x: i,
            y: o,
            options: a,
            mutex: s
          };

          for (p = r, n = h, "[object Array]" === Object.prototype.toString.call(r) && (p = r[0]), f = 0; f < p.length; f += 1) {
            u[n].metadata.hasOwnProperty("cmap") && (e = u[n].metadata.cmap.unicode.codeMap[p[f].charCodeAt(0)]), e ? c += p[f] : p[f].charCodeAt(0) < 256 && u[n].metadata.hasOwnProperty("Unicode") ? c += p[f] : c += "";
          }

          var g = "";
          return parseInt(n.slice(1)) < 14 || "WinAnsiEncoding" === d ? g = function (t) {
            for (var e = "", n = 0; n < t.length; n++) {
              e += "" + t.charCodeAt(n).toString(16);
            }

            return e;
          }(l(c, n)) : "Identity-H" === d && (g = m(c, u[n])), s.isHex = !0, {
            text: g,
            x: i,
            y: o,
            options: a,
            mutex: s
          };
        };

        e.events.push(["postProcessText", function (t) {
          var e = t.text || "",
              n = t.x,
              r = t.y,
              i = t.options,
              o = t.mutex,
              a = (i.lang, []),
              s = {
            text: e,
            x: n,
            y: r,
            options: i,
            mutex: o
          };

          if ("[object Array]" === Object.prototype.toString.call(e)) {
            var l = 0;

            for (l = 0; l < e.length; l += 1) {
              "[object Array]" === Object.prototype.toString.call(e[l]) && 3 === e[l].length ? a.push([h(Object.assign({}, s, {
                text: e[l][0]
              })).text, e[l][1], e[l][2]]) : a.push(h(Object.assign({}, s, {
                text: e[l]
              })).text);
            }

            t.text = a;
          } else t.text = h(Object.assign({}, s, {
            text: e
          })).text;
        }]);
      }(lt, "undefined" != typeof self && self || "undefined" != typeof global && global || "undefined" != typeof window && window || Function("return this")()), at = lt.API, st = function st(t) {
        return void 0 !== t && (void 0 === t.vFS && (t.vFS = {}), !0);
      }, at.existsFileInVFS = function (t) {
        return !!st(this.internal) && void 0 !== this.internal.vFS[t];
      }, at.addFileToVFS = function (t, e) {
        return st(this.internal), this.internal.vFS[t] = e, this;
      }, at.getFileFromVFS = function (t) {
        return st(this.internal), void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null;
      }, lt.API.addHTML = function (t, d, g, s, m) {
        if ("undefined" == typeof html2canvas && "undefined" == typeof rasterizeHTML) throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");
        "number" != typeof d && (s = d, m = g), "function" == typeof s && (m = s, s = null), "function" != typeof m && (m = function m() {});
        var e = this.internal,
            y = e.scaleFactor,
            v = e.pageSize.getWidth(),
            w = e.pageSize.getHeight();
        if ((s = s || {}).onrendered = function (l) {
          d = parseInt(d) || 0, g = parseInt(g) || 0;
          var t = s.dim || {},
              h = Object.assign({
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            useFor: "content"
          }, s.margin),
              e = t.h || Math.min(w, l.height / y),
              u = t.w || Math.min(v, l.width / y) - d,
              c = s.format || "JPEG",
              f = s.imageCompression || "SLOW";

          if (l.height > w - h.top - h.bottom && s.pagesplit) {
            var p = function p(t, e, n, r, i) {
              var o = document.createElement("canvas");
              o.height = i, o.width = r;
              var a = o.getContext("2d");
              return a.mozImageSmoothingEnabled = !1, a.webkitImageSmoothingEnabled = !1, a.msImageSmoothingEnabled = !1, a.imageSmoothingEnabled = !1, a.fillStyle = s.backgroundColor || "#ffffff", a.fillRect(0, 0, r, i), a.drawImage(t, e, n, r, i, 0, 0, r, i), o;
            },
                n = function () {
              for (var t, e, n = 0, r = 0, i = {}, o = !1;;) {
                var a;
                if (r = 0, i.top = 0 !== n ? h.top : g, i.left = 0 !== n ? h.left : d, o = (v - h.left - h.right) * y < l.width, "content" === h.useFor ? 0 === n ? (t = Math.min((v - h.left) * y, l.width), e = Math.min((w - h.top) * y, l.height - n)) : (t = Math.min(v * y, l.width), e = Math.min(w * y, l.height - n), i.top = 0) : (t = Math.min((v - h.left - h.right) * y, l.width), e = Math.min((w - h.bottom - h.top) * y, l.height - n)), o) for (;;) {
                  "content" === h.useFor && (0 === r ? t = Math.min((v - h.left) * y, l.width) : (t = Math.min(v * y, l.width - r), i.left = 0));
                  var s = [a = p(l, r, n, t, e), i.left, i.top, a.width / y, a.height / y, c, null, f];
                  if (this.addImage.apply(this, s), (r += t) >= l.width) break;
                  this.addPage();
                } else s = [a = p(l, 0, n, t, e), i.left, i.top, a.width / y, a.height / y, c, null, f], this.addImage.apply(this, s);
                if ((n += e) >= l.height) break;
                this.addPage();
              }

              m(u, n, null, s);
            }.bind(this);

            if ("CANVAS" === l.nodeName) {
              var r = new Image();
              r.onload = n, r.src = l.toDataURL("image/png"), l = r;
            } else n();
          } else {
            var i = Math.random().toString(35),
                o = [l, d, g, u, e, c, i, f];
            this.addImage.apply(this, o), m(u, e, i, o);
          }
        }.bind(this), "undefined" != typeof html2canvas && !s.rstz) return html2canvas(t, s);
        if ("undefined" == typeof rasterizeHTML) return null;
        var n = "drawDocument";
        return "string" == typeof t && (n = /^http/.test(t) ? "drawURL" : "drawHTML"), s.width = s.width || v * y, rasterizeHTML[n](t, void 0, s).then(function (t) {
          s.onrendered(t.image);
        }, function (t) {
          m(null, t);
        });
      },
      /**
         * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
         * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
         *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
         *               2014 Diego Casorran, https://github.com/diegocr
         *               2014 Daniel Husar, https://github.com/danielhusar
         *               2014 Wolfgang Gassler, https://github.com/woolfg
         *               2014 Steven Spungin, https://github.com/flamenco
         *
         * @license
         * 
         * ====================================================================
         */
      function (t) {
        var P, _k, i, a, s, l, h, u, I, w, f, c, p, n, C, B, d, g, m, j;

        P = function () {
          return function (t) {
            return e.prototype = t, new e();
          };

          function e() {}
        }(), w = function w(t) {
          var e, n, r, i, o, a, s;

          for (n = 0, r = t.length, e = void 0, a = i = !1; !i && n !== r;) {
            (e = t[n] = t[n].trimLeft()) && (i = !0), n++;
          }

          for (n = r - 1; r && !a && -1 !== n;) {
            (e = t[n] = t[n].trimRight()) && (a = !0), n--;
          }

          for (o = /\s+$/g, s = !0, n = 0; n !== r;) {
            "\u2028" != t[n] && (e = t[n].replace(/\s+/g, " "), s && (e = e.trimLeft()), e && (s = o.test(e)), t[n] = e), n++;
          }

          return t;
        }, c = function c(t) {
          var e, n, r;

          for (e = void 0, n = (r = t.split(",")).shift(); !e && n;) {
            e = i[n.trim().toLowerCase()], n = r.shift();
          }

          return e;
        }, p = function p(t) {
          var e;
          return -1 < (t = "auto" === t ? "0px" : t).indexOf("em") && !isNaN(Number(t.replace("em", ""))) && (t = 18.719 * Number(t.replace("em", "")) + "px"), -1 < t.indexOf("pt") && !isNaN(Number(t.replace("pt", ""))) && (t = 1.333 * Number(t.replace("pt", "")) + "px"), void 0, 16, (e = n[t]) ? e : void 0 !== (e = {
            "xx-small": 9,
            "x-small": 11,
            small: 13,
            medium: 16,
            large: 19,
            "x-large": 23,
            "xx-large": 28,
            auto: 0
          }[t]) ? n[t] = e / 16 : (e = parseFloat(t)) ? n[t] = e / 16 : (e = t.match(/([\d\.]+)(px)/), Array.isArray(e) && 3 === e.length ? n[t] = parseFloat(e[1]) / 16 : n[t] = 1);
        }, I = function I(t) {
          var e, n, r, i, o;
          return o = t, i = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(o, null) : o.currentStyle ? o.currentStyle : o.style, n = void 0, (e = {})["font-family"] = c((r = function r(t) {
            return t = t.replace(/-\D/g, function (t) {
              return t.charAt(1).toUpperCase();
            }), i[t];
          })("font-family")) || "times", e["font-style"] = a[r("font-style")] || "normal", e["text-align"] = s[r("text-align")] || "left", "bold" === (n = l[r("font-weight")] || "normal") && ("normal" === e["font-style"] ? e["font-style"] = n : e["font-style"] = n + e["font-style"]), e["font-size"] = p(r("font-size")) || 1, e["line-height"] = p(r("line-height")) || 1, e.display = "inline" === r("display") ? "inline" : "block", n = "block" === e.display, e["margin-top"] = n && p(r("margin-top")) || 0, e["margin-bottom"] = n && p(r("margin-bottom")) || 0, e["padding-top"] = n && p(r("padding-top")) || 0, e["padding-bottom"] = n && p(r("padding-bottom")) || 0, e["margin-left"] = n && p(r("margin-left")) || 0, e["margin-right"] = n && p(r("margin-right")) || 0, e["padding-left"] = n && p(r("padding-left")) || 0, e["padding-right"] = n && p(r("padding-right")) || 0, e["page-break-before"] = r("page-break-before") || "auto", e.float = h[r("cssFloat")] || "none", e.clear = u[r("clear")] || "none", e.color = r("color"), e;
        }, C = function C(t, e, n) {
          var r, i, o, a, s;
          if (o = !1, a = i = void 0, r = n["#" + t.id]) if ("function" == typeof r) o = r(t, e);else for (i = 0, a = r.length; !o && i !== a;) {
            o = r[i](t, e), i++;
          }
          if (r = n[t.nodeName], !o && r) if ("function" == typeof r) o = r(t, e);else for (i = 0, a = r.length; !o && i !== a;) {
            o = r[i](t, e), i++;
          }

          for (s = "string" == typeof t.className ? t.className.split(" ") : [], i = 0; i < s.length; i++) {
            if (r = n["." + s[i]], !o && r) if ("function" == typeof r) o = r(t, e);else for (i = 0, a = r.length; !o && i !== a;) {
              o = r[i](t, e), i++;
            }
          }

          return o;
        }, j = function j(t, e) {
          var n, r, i, o, a, s, l, h, u;

          for (n = [], r = [], i = 0, u = t.rows[0].cells.length, l = t.clientWidth; i < u;) {
            h = t.rows[0].cells[i], r[i] = {
              name: h.textContent.toLowerCase().replace(/\s+/g, ""),
              prompt: h.textContent.replace(/\r?\n/g, ""),
              width: h.clientWidth / l * e.pdf.internal.pageSize.getWidth()
            }, i++;
          }

          for (i = 1; i < t.rows.length;) {
            for (s = t.rows[i], a = {}, o = 0; o < s.cells.length;) {
              a[r[o].name] = s.cells[o].textContent.replace(/\r?\n/g, ""), o++;
            }

            n.push(a), i++;
          }

          return {
            rows: n,
            headers: r
          };
        };
        var E = {
          SCRIPT: 1,
          STYLE: 1,
          NOSCRIPT: 1,
          OBJECT: 1,
          EMBED: 1,
          SELECT: 1
        },
            M = 1;
        _k = function k(t, i, e) {
          var n, r, o, a, s, l, h, u;

          for (r = t.childNodes, n = void 0, (s = "block" === (o = I(t)).display) && (i.setBlockBoundary(), i.setBlockStyle(o)), a = 0, l = r.length; a < l;) {
            if ("object" === se(n = r[a])) {
              if (i.executeWatchFunctions(n), 1 === n.nodeType && "HEADER" === n.nodeName) {
                var c = n,
                    f = i.pdf.margins_doc.top;
                i.pdf.internal.events.subscribe("addPage", function (t) {
                  i.y = f, _k(c, i, e), i.pdf.margins_doc.top = i.y + 10, i.y += 10;
                }, !1);
              }

              if (8 === n.nodeType && "#comment" === n.nodeName) ~n.textContent.indexOf("ADD_PAGE") && (i.pdf.addPage(), i.y = i.pdf.margins_doc.top);else if (1 !== n.nodeType || E[n.nodeName]) {
                if (3 === n.nodeType) {
                  var p = n.nodeValue;
                  if (n.nodeValue && "LI" === n.parentNode.nodeName) if ("OL" === n.parentNode.parentNode.nodeName) p = M++ + ". " + p;else {
                    var d = o["font-size"],
                        g = (3 - .75 * d) * i.pdf.internal.scaleFactor,
                        m = .75 * d * i.pdf.internal.scaleFactor,
                        y = 1.74 * d / i.pdf.internal.scaleFactor;

                    u = function u(t, e) {
                      this.pdf.circle(t + g, e + m, y, "FD");
                    };
                  }
                  16 & n.ownerDocument.body.compareDocumentPosition(n) && i.addText(p, o);
                } else "string" == typeof n && i.addText(n, o);
              } else {
                var v;

                if ("IMG" === n.nodeName) {
                  var w = n.getAttribute("src");
                  v = B[i.pdf.sHashCode(w) || w];
                }

                if (v) {
                  i.pdf.internal.pageSize.getHeight() - i.pdf.margins_doc.bottom < i.y + n.height && i.y > i.pdf.margins_doc.top && (i.pdf.addPage(), i.y = i.pdf.margins_doc.top, i.executeWatchFunctions(n));

                  var b = I(n),
                      x = i.x,
                      N = 12 / i.pdf.internal.scaleFactor,
                      L = (b["margin-left"] + b["padding-left"]) * N,
                      A = (b["margin-right"] + b["padding-right"]) * N,
                      S = (b["margin-top"] + b["padding-top"]) * N,
                      _ = (b["margin-bottom"] + b["padding-bottom"]) * N;

                  void 0 !== b.float && "right" === b.float ? x += i.settings.width - n.width - A : x += L, i.pdf.addImage(v, x, i.y + S, n.width, n.height), v = void 0, "right" === b.float || "left" === b.float ? (i.watchFunctions.push(function (t, e, n, r) {
                    return i.y >= e ? (i.x += t, i.settings.width += n, !0) : !!(r && 1 === r.nodeType && !E[r.nodeName] && i.x + r.width > i.pdf.margins_doc.left + i.pdf.margins_doc.width) && (i.x += t, i.y = e, i.settings.width += n, !0);
                  }.bind(this, "left" === b.float ? -n.width - L - A : 0, i.y + n.height + S + _, n.width)), i.watchFunctions.push(function (t, e, n) {
                    return !(i.y < t && e === i.pdf.internal.getNumberOfPages()) || 1 === n.nodeType && "both" === I(n).clear && (i.y = t, !0);
                  }.bind(this, i.y + n.height, i.pdf.internal.getNumberOfPages())), i.settings.width -= n.width + L + A, "left" === b.float && (i.x += n.width + L + A)) : i.y += n.height + S + _;
                } else if ("TABLE" === n.nodeName) h = j(n, i), i.y += 10, i.pdf.table(i.x, i.y, h.rows, h.headers, {
                  autoSize: !1,
                  printHeaders: e.printHeaders,
                  margins: i.pdf.margins_doc,
                  css: I(n)
                }), i.y = i.pdf.lastCellPos.y + i.pdf.lastCellPos.h + 20;else if ("OL" === n.nodeName || "UL" === n.nodeName) M = 1, C(n, i, e) || _k(n, i, e), i.y += 10;else if ("LI" === n.nodeName) {
                  var F = i.x;
                  i.x += 20 / i.pdf.internal.scaleFactor, i.y += 3, C(n, i, e) || _k(n, i, e), i.x = F;
                } else "BR" === n.nodeName ? (i.y += o["font-size"] * i.pdf.internal.scaleFactor, i.addText("\u2028", P(o))) : C(n, i, e) || _k(n, i, e);
              }
            }

            a++;
          }

          if (e.outY = i.y, s) return i.setBlockBoundary(u);
        }, B = {}, d = function d(t, o, e, n) {
          var a,
              r = t.getElementsByTagName("img"),
              i = r.length,
              s = 0;

          function l() {
            o.pdf.internal.events.publish("imagesLoaded"), n(a);
          }

          function h(e, n, r) {
            if (e) {
              var i = new Image();
              a = ++s, i.crossOrigin = "", i.onerror = i.onload = function () {
                if (i.complete && (0 === i.src.indexOf("data:image/") && (i.width = n || i.width || 0, i.height = r || i.height || 0), i.width + i.height)) {
                  var t = o.pdf.sHashCode(e) || e;
                  B[t] = B[t] || i;
                }

                --s || l();
              }, i.src = e;
            }
          }

          for (; i--;) {
            h(r[i].getAttribute("src"), r[i].width, r[i].height);
          }

          return s || l();
        }, g = function g(t, o, a) {
          var s = t.getElementsByTagName("footer");

          if (0 < s.length) {
            s = s[0];
            var e = o.pdf.internal.write,
                n = o.y;
            o.pdf.internal.write = function () {}, _k(s, o, a);
            var l = Math.ceil(o.y - n) + 5;
            o.y = n, o.pdf.internal.write = e, o.pdf.margins_doc.bottom += l;

            for (var r = function r(t) {
              var e = void 0 !== t ? t.pageNumber : 1,
                  n = o.y;
              o.y = o.pdf.internal.pageSize.getHeight() - o.pdf.margins_doc.bottom, o.pdf.margins_doc.bottom -= l;

              for (var r = s.getElementsByTagName("span"), i = 0; i < r.length; ++i) {
                -1 < (" " + r[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") && (r[i].innerHTML = e), -1 < (" " + r[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && (r[i].innerHTML = "###jsPDFVarTotalPages###");
              }

              _k(s, o, a), o.pdf.margins_doc.bottom += l, o.y = n;
            }, i = s.getElementsByTagName("span"), h = 0; h < i.length; ++h) {
              -1 < (" " + i[h].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && o.pdf.internal.events.subscribe("htmlRenderingFinished", o.pdf.putTotalPages.bind(o.pdf, "###jsPDFVarTotalPages###"), !0);
            }

            o.pdf.internal.events.subscribe("addPage", r, !1), r(), E.FOOTER = 1;
          }
        }, m = function m(t, e, n, r, i, o) {
          if (!e) return !1;
          var a, s, l, h;
          "string" == typeof e || e.parentNode || (e = "" + e.innerHTML), "string" == typeof e && (a = e.replace(/<\/?script[^>]*?>/gi, ""), h = "jsPDFhtmlText" + Date.now().toString() + (1e3 * Math.random()).toFixed(0), (l = document.createElement("div")).style.cssText = "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;", l.innerHTML = '<iframe style="height:1px;width:1px" name="' + h + '" />', document.body.appendChild(l), (s = window.frames[h]).document.open(), s.document.writeln(a), s.document.close(), e = s.document.body);
          var u,
              c = new f(t, n, r, i);
          return d.call(this, e, c, i.elementHandlers, function (t) {
            g(e, c, i.elementHandlers), _k(e, c, i.elementHandlers), c.pdf.internal.events.publish("htmlRenderingFinished"), u = c.dispose(), "function" == typeof o ? o(u) : t && console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!");
          }), u || {
            x: c.x,
            y: c.y
          };
        }, (f = function f(t, e, n, r) {
          return this.pdf = t, this.x = e, this.y = n, this.settings = r, this.watchFunctions = [], this.init(), this;
        }).prototype.init = function () {
          return this.paragraph = {
            text: [],
            style: []
          }, this.pdf.internal.write("q");
        }, f.prototype.dispose = function () {
          return this.pdf.internal.write("Q"), {
            x: this.x,
            y: this.y,
            ready: !0
          };
        }, f.prototype.executeWatchFunctions = function (t) {
          var e = !1,
              n = [];

          if (0 < this.watchFunctions.length) {
            for (var r = 0; r < this.watchFunctions.length; ++r) {
              !0 === this.watchFunctions[r](t) ? e = !0 : n.push(this.watchFunctions[r]);
            }

            this.watchFunctions = n;
          }

          return e;
        }, f.prototype.splitFragmentsIntoLines = function (t, e) {
          var n, r, i, o, a, s, l, h, u, c, f, p, d, g;

          for (12, c = this.pdf.internal.scaleFactor, o = {}, s = l = h = g = a = i = u = r = void 0, p = [f = []], n = 0, d = this.settings.width; t.length;) {
            if (a = t.shift(), g = e.shift(), a) if ((i = o[(r = g["font-family"]) + (u = g["font-style"])]) || (i = this.pdf.internal.getFont(r, u).metadata.Unicode, o[r + u] = i), h = {
              widths: i.widths,
              kerning: i.kerning,
              fontSize: 12 * g["font-size"],
              textIndent: n
            }, l = this.pdf.getStringUnitWidth(a, h) * h.fontSize / c, "\u2028" == a) f = [], p.push(f);else if (d < n + l) {
              for (s = this.pdf.splitTextToSize(a, d, h), f.push([s.shift(), g]); s.length;) {
                f = [[s.shift(), g]], p.push(f);
              }

              n = this.pdf.getStringUnitWidth(f[0][0], h) * h.fontSize / c;
            } else f.push([a, g]), n += l;
          }

          if (void 0 !== g["text-align"] && ("center" === g["text-align"] || "right" === g["text-align"] || "justify" === g["text-align"])) for (var m = 0; m < p.length; ++m) {
            var y = this.pdf.getStringUnitWidth(p[m][0][0], h) * h.fontSize / c;
            0 < m && (p[m][0][1] = P(p[m][0][1]));
            var v = d - y;
            if ("right" === g["text-align"]) p[m][0][1]["margin-left"] = v;else if ("center" === g["text-align"]) p[m][0][1]["margin-left"] = v / 2;else if ("justify" === g["text-align"]) {
              var w = p[m][0][0].split(" ").length - 1;
              p[m][0][1]["word-spacing"] = v / w, m === p.length - 1 && (p[m][0][1]["word-spacing"] = 0);
            }
          }
          return p;
        }, f.prototype.RenderTextFragment = function (t, e) {
          var n, r;
          r = 0, this.pdf.internal.pageSize.getHeight() - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize() && (this.pdf.internal.write("ET", "Q"), this.pdf.addPage(), this.y = this.pdf.margins_doc.top, this.pdf.internal.write("q", "BT", this.getPdfColor(e.color), this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"), r = Math.max(r, e["line-height"], e["font-size"]), this.pdf.internal.write(0, (-12 * r).toFixed(2), "Td")), n = this.pdf.internal.getFont(e["font-family"], e["font-style"]);
          var i = this.getPdfColor(e.color);
          i !== this.lastTextColor && (this.pdf.internal.write(i), this.lastTextColor = i), void 0 !== e["word-spacing"] && 0 < e["word-spacing"] && this.pdf.internal.write(e["word-spacing"].toFixed(2), "Tw"), this.pdf.internal.write("/" + n.id, (12 * e["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(t) + ") Tj"), void 0 !== e["word-spacing"] && this.pdf.internal.write(0, "Tw");
        }, f.prototype.getPdfColor = function (t) {
          var e,
              n,
              r,
              i = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t);
          if (null != i) e = parseInt(i[1]), n = parseInt(i[2]), r = parseInt(i[3]);else {
            if ("string" == typeof t && "#" != t.charAt(0)) {
              var o = new RGBColor(t);
              t = o.ok ? o.toHex() : "#000000";
            }

            e = t.substring(1, 3), e = parseInt(e, 16), n = t.substring(3, 5), n = parseInt(n, 16), r = t.substring(5, 7), r = parseInt(r, 16);
          }

          if ("string" == typeof e && /^#[0-9A-Fa-f]{6}$/.test(e)) {
            var a = parseInt(e.substr(1), 16);
            e = a >> 16 & 255, n = a >> 8 & 255, r = 255 & a;
          }

          var s = this.f3;
          return 0 === e && 0 === n && 0 === r || void 0 === n ? s(e / 255) + " g" : [s(e / 255), s(n / 255), s(r / 255), "rg"].join(" ");
        }, f.prototype.f3 = function (t) {
          return t.toFixed(3);
        }, f.prototype.renderParagraph = function (t) {
          var e, n, r, i, o, a, s, l, h, u, c, f, p;

          if (r = w(this.paragraph.text), f = this.paragraph.style, e = this.paragraph.blockstyle, this.paragraph.priorblockstyle || {}, this.paragraph = {
            text: [],
            style: [],
            blockstyle: {},
            priorblockstyle: e
          }, r.join("").trim()) {
            s = this.splitFragmentsIntoLines(r, f), l = a = void 0, n = 12 / this.pdf.internal.scaleFactor, this.priorMarginBottom = this.priorMarginBottom || 0, c = (Math.max((e["margin-top"] || 0) - this.priorMarginBottom, 0) + (e["padding-top"] || 0)) * n, u = ((e["margin-bottom"] || 0) + (e["padding-bottom"] || 0)) * n, this.priorMarginBottom = e["margin-bottom"] || 0, "always" === e["page-break-before"] && (this.pdf.addPage(), this.y = 0, c = ((e["margin-top"] || 0) + (e["padding-top"] || 0)) * n), h = this.pdf.internal.write, o = i = void 0, this.y += c, h("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");

            for (var d = 0; s.length;) {
              for (i = l = 0, o = (a = s.shift()).length; i !== o;) {
                a[i][0].trim() && (l = Math.max(l, a[i][1]["line-height"], a[i][1]["font-size"]), p = 7 * a[i][1]["font-size"]), i++;
              }

              var g = 0,
                  m = 0;

              for (void 0 !== a[0][1]["margin-left"] && 0 < a[0][1]["margin-left"] && (g = (m = this.pdf.internal.getCoordinateString(a[0][1]["margin-left"])) - d, d = m), h(g + Math.max(e["margin-left"] || 0, 0) * n, (-12 * l).toFixed(2), "Td"), i = 0, o = a.length; i !== o;) {
                a[i][0] && this.RenderTextFragment(a[i][0], a[i][1]), i++;
              }

              if (this.y += l * n, this.executeWatchFunctions(a[0][1]) && 0 < s.length) {
                var y = [],
                    v = [];
                s.forEach(function (t) {
                  for (var e = 0, n = t.length; e !== n;) {
                    t[e][0] && (y.push(t[e][0] + " "), v.push(t[e][1])), ++e;
                  }
                }), s = this.splitFragmentsIntoLines(w(y), v), h("ET", "Q"), h("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
              }
            }

            return t && "function" == typeof t && t.call(this, this.x - 9, this.y - p / 2), h("ET", "Q"), this.y += u;
          }
        }, f.prototype.setBlockBoundary = function (t) {
          return this.renderParagraph(t);
        }, f.prototype.setBlockStyle = function (t) {
          return this.paragraph.blockstyle = t;
        }, f.prototype.addText = function (t, e) {
          return this.paragraph.text.push(t), this.paragraph.style.push(e);
        }, i = {
          helvetica: "helvetica",
          "sans-serif": "helvetica",
          "times new roman": "times",
          serif: "times",
          times: "times",
          monospace: "courier",
          courier: "courier"
        }, l = {
          100: "normal",
          200: "normal",
          300: "normal",
          400: "normal",
          500: "bold",
          600: "bold",
          700: "bold",
          800: "bold",
          900: "bold",
          normal: "normal",
          bold: "bold",
          bolder: "bold",
          lighter: "normal"
        }, a = {
          normal: "normal",
          italic: "italic",
          oblique: "italic"
        }, s = {
          left: "left",
          right: "right",
          center: "center",
          justify: "justify"
        }, h = {
          none: "none",
          right: "right",
          left: "left"
        }, u = {
          none: "none",
          both: "both"
        }, n = {
          normal: 1
        }, t.fromHTML = function (t, e, n, r, i, o) {
          return this.margins_doc = o || {
            top: 0,
            bottom: 0
          }, r || (r = {}), r.elementHandlers || (r.elementHandlers = {}), m(this, t, isNaN(e) ? 4 : e, isNaN(n) ? 4 : n, r, i);
        };
      }(lt.API), lt.API, ("undefined" != typeof window && window || "undefined" != typeof global && global).html2pdf = function (t, a, e) {
        var n = a.canvas;

        if (n) {
          var r, i;

          if ((n.pdf = a).annotations = {
            _nameMap: [],
            createAnnotation: function createAnnotation(t, e) {
              var n,
                  r = a.context2d._wrapX(e.left),
                  i = a.context2d._wrapY(e.top),
                  o = (a.context2d._page(e.top), t.indexOf("#"));

              n = 0 <= o ? {
                name: t.substring(o + 1)
              } : {
                url: t
              }, a.link(r, i, e.right - e.left, e.bottom - e.top, n);
            },
            setName: function setName(t, e) {
              var n = a.context2d._wrapX(e.left),
                  r = a.context2d._wrapY(e.top),
                  i = a.context2d._page(e.top);

              this._nameMap[t] = {
                page: i,
                x: n,
                y: r
              };
            }
          }, n.annotations = a.annotations, a.context2d._pageBreakAt = function (t) {
            this.pageBreaks.push(t);
          }, a.context2d._gotoPage = function (t) {
            for (; a.internal.getNumberOfPages() < t;) {
              a.addPage();
            }

            a.setPage(t);
          }, "string" == typeof t) {
            t = t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
            var o,
                s,
                l = document.createElement("iframe");
            document.body.appendChild(l), null != (o = l.contentDocument) && null != o || (o = l.contentWindow.document), o.open(), o.write(t), o.close(), r = o.body, s = o.body || {}, t = o.documentElement || {}, i = Math.max(s.scrollHeight, s.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
          } else s = (r = t).body || {}, i = Math.max(s.scrollHeight, s.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);

          var h = {
            async: !0,
            allowTaint: !0,
            backgroundColor: "#ffffff",
            canvas: n,
            imageTimeout: 15e3,
            logging: !0,
            proxy: null,
            removeContainer: !0,
            foreignObjectRendering: !1,
            useCORS: !1,
            windowHeight: i = a.internal.pageSize.getHeight(),
            scrollY: i
          };
          a.context2d.pageWrapYEnabled = !0, a.context2d.pageWrapY = a.internal.pageSize.getHeight(), html2canvas(r, h).then(function (t) {
            e && (l && l.parentElement.removeChild(l), e(a));
          });
        } else alert("jsPDF canvas plugin not installed");
      }, window.tmp = html2pdf, function (f) {
        var r = f.BlobBuilder || f.WebKitBlobBuilder || f.MSBlobBuilder || f.MozBlobBuilder;

        f.URL = f.URL || f.webkitURL || function (t, e) {
          return (e = document.createElement("a")).href = t, e;
        };

        var n = f.Blob,
            p = URL.createObjectURL,
            d = URL.revokeObjectURL,
            o = f.Symbol && f.Symbol.toStringTag,
            t = !1,
            e = !1,
            g = !!f.ArrayBuffer,
            i = r && r.prototype.append && r.prototype.getBlob;

        try {
          t = 2 === new Blob(["ä"]).size, e = 2 === new Blob([new Uint8Array([1, 2])]).size;
        } catch (t) {}

        function a(t) {
          return t.map(function (t) {
            if (t.buffer instanceof ArrayBuffer) {
              var e = t.buffer;

              if (t.byteLength !== e.byteLength) {
                var n = new Uint8Array(t.byteLength);
                n.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = n.buffer;
              }

              return e;
            }

            return t;
          });
        }

        function s(t, e) {
          e = e || {};
          var n = new r();
          return a(t).forEach(function (t) {
            n.append(t);
          }), e.type ? n.getBlob(e.type) : n.getBlob();
        }

        function l(t, e) {
          return new n(a(t), e || {});
        }

        if (f.Blob && (s.prototype = Blob.prototype, l.prototype = Blob.prototype), o) try {
          File.prototype[o] = "File", Blob.prototype[o] = "Blob", FileReader.prototype[o] = "FileReader";
        } catch (t) {}

        function h() {
          var t = !!f.ActiveXObject || "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
              e = f.XMLHttpRequest && f.XMLHttpRequest.prototype.send;
          t && e && (XMLHttpRequest.prototype.send = function (t) {
            t instanceof Blob && this.setRequestHeader("Content-Type", t.type), e.call(this, t);
          });

          try {
            new File([], "");
          } catch (t) {
            try {
              var n = new Function('class File extends Blob {constructor(chunks, name, opts) {opts = opts || {};super(chunks, opts || {});this.name = name;this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date;this.lastModified = +this.lastModifiedDate;}};return new File([], ""), File')();
              f.File = n;
            } catch (t) {
              n = function n(t, e, _n) {
                var r = new Blob(t, _n),
                    i = _n && void 0 !== _n.lastModified ? new Date(_n.lastModified) : new Date();
                return r.name = e, r.lastModifiedDate = i, r.lastModified = +i, r.toString = function () {
                  return "[object File]";
                }, o && (r[o] = "File"), r;
              };

              f.File = n;
            }
          }
        }

        t ? (h(), f.Blob = e ? f.Blob : l) : i ? (h(), f.Blob = s) : function () {
          function a(t) {
            for (var e = [], n = 0; n < t.length; n++) {
              var r = t.charCodeAt(n);
              r < 128 ? e.push(r) : r < 2048 ? e.push(192 | r >> 6, 128 | 63 & r) : r < 55296 || 57344 <= r ? e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) : (n++, r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(n)), e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r));
            }

            return e;
          }

          function e(t) {
            var e, n, r, i, o, a;

            for (e = "", r = t.length, n = 0; n < r;) {
              switch ((i = t[n++]) >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  e += String.fromCharCode(i);
                  break;

                case 12:
                case 13:
                  o = t[n++], e += String.fromCharCode((31 & i) << 6 | 63 & o);
                  break;

                case 14:
                  o = t[n++], a = t[n++], e += String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | (63 & a) << 0);
              }
            }

            return e;
          }

          function s(t) {
            for (var e = new Array(t.byteLength), n = new Uint8Array(t), r = e.length; r--;) {
              e[r] = n[r];
            }

            return e;
          }

          function n(t) {
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = [], r = 0; r < t.length; r += 3) {
              var i = t[r],
                  o = r + 1 < t.length,
                  a = o ? t[r + 1] : 0,
                  s = r + 2 < t.length,
                  l = s ? t[r + 2] : 0,
                  h = i >> 2,
                  u = (3 & i) << 4 | a >> 4,
                  c = (15 & a) << 2 | l >> 6,
                  f = 63 & l;
              s || (f = 64, o || (c = 64)), n.push(e[h], e[u], e[c], e[f]);
            }

            return n.join("");
          }

          var t = Object.create || function (t) {
            function e() {}

            return e.prototype = t, new e();
          };

          if (g) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
              l = ArrayBuffer.isView || function (t) {
            return t && -1 < r.indexOf(Object.prototype.toString.call(t));
          };

          function h(t, e) {
            for (var n = 0, r = (t = t || []).length; n < r; n++) {
              var i = t[n];
              i instanceof h ? t[n] = i._buffer : "string" == typeof i ? t[n] = a(i) : g && (ArrayBuffer.prototype.isPrototypeOf(i) || l(i)) ? t[n] = s(i) : g && (o = i) && DataView.prototype.isPrototypeOf(o) ? t[n] = s(i.buffer) : t[n] = a(String(i));
            }

            var o;
            this._buffer = [].concat.apply([], t), this.size = this._buffer.length, this.type = e && e.type || "";
          }

          function i(t, e, n) {
            var r = h.call(this, t, n = n || {}) || this;
            return r.name = e, r.lastModifiedDate = n.lastModified ? new Date(n.lastModified) : new Date(), r.lastModified = +r.lastModifiedDate, r;
          }

          if (h.prototype.slice = function (t, e, n) {
            return new h([this._buffer.slice(t || 0, e || this._buffer.length)], {
              type: n
            });
          }, h.prototype.toString = function () {
            return "[object Blob]";
          }, (i.prototype = t(h.prototype)).constructor = i, Object.setPrototypeOf) Object.setPrototypeOf(i, h);else try {
            i.__proto__ = h;
          } catch (t) {}

          function o() {
            if (!(this instanceof o)) throw new TypeError("Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
            var n = document.createDocumentFragment();
            this.addEventListener = n.addEventListener, this.dispatchEvent = function (t) {
              var e = this["on" + t.type];
              "function" == typeof e && e(t), n.dispatchEvent(t);
            }, this.removeEventListener = n.removeEventListener;
          }

          function u(t, e, n) {
            if (!(e instanceof h)) throw new TypeError("Failed to execute '" + n + "' on 'FileReader': parameter 1 is not of type 'Blob'.");
            t.result = "", setTimeout(function () {
              this.readyState = o.LOADING, t.dispatchEvent(new Event("load")), t.dispatchEvent(new Event("loadend"));
            });
          }

          i.prototype.toString = function () {
            return "[object File]";
          }, o.EMPTY = 0, o.LOADING = 1, o.DONE = 2, o.prototype.error = null, o.prototype.onabort = null, o.prototype.onerror = null, o.prototype.onload = null, o.prototype.onloadend = null, o.prototype.onloadstart = null, o.prototype.onprogress = null, o.prototype.readAsDataURL = function (t) {
            u(this, t, "readAsDataURL"), this.result = "data:" + t.type + ";base64," + n(t._buffer);
          }, o.prototype.readAsText = function (t) {
            u(this, t, "readAsText"), this.result = e(t._buffer);
          }, o.prototype.readAsArrayBuffer = function (t) {
            u(this, t, "readAsText"), this.result = t._buffer.slice();
          }, o.prototype.abort = function () {}, URL.createObjectURL = function (t) {
            return t instanceof h ? "data:" + t.type + ";base64," + n(t._buffer) : p.call(URL, t);
          }, URL.revokeObjectURL = function (t) {
            d && d.call(URL, t);
          };
          var c = f.XMLHttpRequest && f.XMLHttpRequest.prototype.send;
          c && (XMLHttpRequest.prototype.send = function (t) {
            t instanceof h ? (this.setRequestHeader("Content-Type", t.type), c.call(this, e(t._buffer))) : c.call(this, t);
          }), f.FileReader = o, f.File = i, f.Blob = h;
        }();
      }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")());

      var ht,
          ut,
          ct,
          _ft,
          pt,
          dt,
          gt,
          mt,
          yt,
          vt,
          wt,
          bt,
          xt,
          Nt,
          Lt,
          le = le || function (s) {
        if (!(void 0 === s || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
          var t = s.document,
              l = function l() {
            return s.URL || s.webkitURL || s;
          },
              h = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              u = "download" in h,
              c = /constructor/i.test(s.HTMLElement) || s.safari,
              f = /CriOS\/[\d]+/.test(navigator.userAgent),
              p = s.setImmediate || s.setTimeout,
              d = function d(t) {
            p(function () {
              throw t;
            }, 0);
          },
              g = function g(t) {
            setTimeout(function () {
              "string" == typeof t ? l().revokeObjectURL(t) : t.remove();
            }, 4e4);
          },
              m = function m(t) {
            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], {
              type: t.type
            }) : t;
          },
              r = function r(t, n, e) {
            e || (t = m(t));

            var r,
                i = this,
                o = "application/octet-stream" === t.type,
                a = function a() {
              !function (t, e, n) {
                for (var r = (e = [].concat(e)).length; r--;) {
                  var i = t["on" + e[r]];
                  if ("function" == typeof i) try {
                    i.call(t, n || t);
                  } catch (t) {
                    d(t);
                  }
                }
              }(i, "writestart progress write writeend".split(" "));
            };

            if (i.readyState = i.INIT, u) return r = l().createObjectURL(t), void p(function () {
              var t, e;
              h.href = r, h.download = n, t = h, e = new MouseEvent("click"), t.dispatchEvent(e), a(), g(r), i.readyState = i.DONE;
            }, 0);
            !function () {
              if ((f || o && c) && s.FileReader) {
                var e = new FileReader();
                return e.onloadend = function () {
                  var t = f ? e.result : e.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  s.open(t, "_blank") || (s.location.href = t), t = void 0, i.readyState = i.DONE, a();
                }, e.readAsDataURL(t), i.readyState = i.INIT;
              }

              r || (r = l().createObjectURL(t)), o ? s.location.href = r : s.open(r, "_blank") || (s.location.href = r);
              i.readyState = i.DONE, a(), g(r);
            }();
          },
              e = r.prototype;

          return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (t, e, n) {
            return e = e || t.name || "download", n || (t = m(t)), navigator.msSaveOrOpenBlob(t, e);
          } : (e.abort = function () {}, e.readyState = e.INIT = 0, e.WRITING = 1, e.DONE = 2, e.error = e.onwritestart = e.onprogress = e.onwrite = e.onabort = e.onerror = e.onwriteend = null, function (t, e, n) {
            return new r(t, e || t.name || "download", n);
          });
        }
      }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0);

      function At(x) {
        var t = 0;
        if (71 !== x[t++] || 73 !== x[t++] || 70 !== x[t++] || 56 !== x[t++] || 56 != (x[t++] + 1 & 253) || 97 !== x[t++]) throw "Invalid GIF 87a/89a header.";
        var N = x[t++] | x[t++] << 8,
            e = x[t++] | x[t++] << 8,
            n = x[t++],
            r = n >> 7,
            i = 1 << (7 & n) + 1;
        x[t++];
        x[t++];
        var o = null;
        r && (o = t, t += 3 * i);
        var a = !0,
            s = [],
            l = 0,
            h = null,
            u = 0,
            c = null;

        for (this.width = N, this.height = e; a && t < x.length;) {
          switch (x[t++]) {
            case 33:
              switch (x[t++]) {
                case 255:
                  if (11 !== x[t] || 78 == x[t + 1] && 69 == x[t + 2] && 84 == x[t + 3] && 83 == x[t + 4] && 67 == x[t + 5] && 65 == x[t + 6] && 80 == x[t + 7] && 69 == x[t + 8] && 50 == x[t + 9] && 46 == x[t + 10] && 48 == x[t + 11] && 3 == x[t + 12] && 1 == x[t + 13] && 0 == x[t + 16]) t += 14, c = x[t++] | x[t++] << 8, t++;else for (t += 12;;) {
                    if (0 === (A = x[t++])) break;
                    t += A;
                  }
                  break;

                case 249:
                  if (4 !== x[t++] || 0 !== x[t + 4]) throw "Invalid graphics extension block.";
                  var f = x[t++];
                  l = x[t++] | x[t++] << 8, h = x[t++], 0 == (1 & f) && (h = null), u = f >> 2 & 7, t++;
                  break;

                case 254:
                  for (;;) {
                    if (0 === (A = x[t++])) break;
                    t += A;
                  }

                  break;

                default:
                  throw "Unknown graphic control label: 0x" + x[t - 1].toString(16);
              }

              break;

            case 44:
              var p = x[t++] | x[t++] << 8,
                  d = x[t++] | x[t++] << 8,
                  g = x[t++] | x[t++] << 8,
                  m = x[t++] | x[t++] << 8,
                  y = x[t++],
                  v = y >> 6 & 1,
                  w = o,
                  b = !1;

              if (y >> 7) {
                b = !0;
                w = t, t += 3 * (1 << (7 & y) + 1);
              }

              var L = t;

              for (t++;;) {
                var A;
                if (0 === (A = x[t++])) break;
                t += A;
              }

              s.push({
                x: p,
                y: d,
                width: g,
                height: m,
                has_local_palette: b,
                palette_offset: w,
                data_offset: L,
                data_length: t - L,
                transparent_index: h,
                interlaced: !!v,
                delay: l,
                disposal: u
              });
              break;

            case 59:
              a = !1;
              break;

            default:
              throw "Unknown gif block: 0x" + x[t - 1].toString(16);
          }
        }

        this.numFrames = function () {
          return s.length;
        }, this.loopCount = function () {
          return c;
        }, this.frameInfo = function (t) {
          if (t < 0 || t >= s.length) throw "Frame index out of range.";
          return s[t];
        }, this.decodeAndBlitFrameBGRA = function (t, e) {
          var n = this.frameInfo(t),
              r = n.width * n.height,
              i = new Uint8Array(r);
          St(x, n.data_offset, i, r);
          var o = n.palette_offset,
              a = n.transparent_index;
          null === a && (a = 256);
          var s = n.width,
              l = N - s,
              h = s,
              u = 4 * (n.y * N + n.x),
              c = 4 * ((n.y + n.height) * N + n.x),
              f = u,
              p = 4 * l;
          !0 === n.interlaced && (p += 4 * (s + l) * 7);

          for (var d = 8, g = 0, m = i.length; g < m; ++g) {
            var y = i[g];
            if (0 === h && (h = s, c <= (f += p) && (p = l + 4 * (s + l) * (d - 1), f = u + (s + l) * (d << 1), d >>= 1)), y === a) f += 4;else {
              var v = x[o + 3 * y],
                  w = x[o + 3 * y + 1],
                  b = x[o + 3 * y + 2];
              e[f++] = b, e[f++] = w, e[f++] = v, e[f++] = 255;
            }
            --h;
          }
        }, this.decodeAndBlitFrameRGBA = function (t, e) {
          var n = this.frameInfo(t),
              r = n.width * n.height,
              i = new Uint8Array(r);
          St(x, n.data_offset, i, r);
          var o = n.palette_offset,
              a = n.transparent_index;
          null === a && (a = 256);
          var s = n.width,
              l = N - s,
              h = s,
              u = 4 * (n.y * N + n.x),
              c = 4 * ((n.y + n.height) * N + n.x),
              f = u,
              p = 4 * l;
          !0 === n.interlaced && (p += 4 * (s + l) * 7);

          for (var d = 8, g = 0, m = i.length; g < m; ++g) {
            var y = i[g];
            if (0 === h && (h = s, c <= (f += p) && (p = l + 4 * (s + l) * (d - 1), f = u + (s + l) * (d << 1), d >>= 1)), y === a) f += 4;else {
              var v = x[o + 3 * y],
                  w = x[o + 3 * y + 1],
                  b = x[o + 3 * y + 2];
              e[f++] = v, e[f++] = w, e[f++] = b, e[f++] = 255;
            }
            --h;
          }
        };
      }

      function St(t, e, n, r) {
        for (var i = t[e++], o = 1 << i, a = o + 1, s = a + 1, l = i + 1, h = (1 << l) - 1, u = 0, c = 0, f = 0, p = t[e++], d = new Int32Array(4096), g = null;;) {
          for (; u < 16 && 0 !== p;) {
            c |= t[e++] << u, u += 8, 1 === p ? p = t[e++] : --p;
          }

          if (u < l) break;
          var m = c & h;

          if (c >>= l, u -= l, m !== o) {
            if (m === a) break;

            for (var y = m < s ? m : g, v = 0, w = y; o < w;) {
              w = d[w] >> 8, ++v;
            }

            var b = w;
            if (r < f + v + (y !== m ? 1 : 0)) return void console.log("Warning, gif stream longer than expected.");
            n[f++] = b;
            var x = f += v;

            for (y !== m && (n[f++] = b), w = y; v--;) {
              w = d[w], n[--x] = 255 & w, w >>= 8;
            }

            null !== g && s < 4096 && (d[s++] = g << 8 | b, h + 1 <= s && l < 12 && (++l, h = h << 1 | 1)), g = m;
          } else s = a + 1, h = (1 << (l = i + 1)) - 1, g = null;
        }

        return f !== r && console.log("Warning, gif stream shorter than expected."), n;
      }

      try {
        exports.GifWriter = function (y, t, e, n) {
          var v = 0,
              r = void 0 === (n = void 0 === n ? {} : n).loop ? null : n.loop,
              w = void 0 === n.palette ? null : n.palette;
          if (t <= 0 || e <= 0 || 65535 < t || 65535 < e) throw "Width/Height invalid.";

          function b(t) {
            var e = t.length;
            if (e < 2 || 256 < e || e & e - 1) throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
            return e;
          }

          y[v++] = 71, y[v++] = 73, y[v++] = 70, y[v++] = 56, y[v++] = 57, y[v++] = 97;
          var i = 0,
              o = 0;

          if (null !== w) {
            for (var a = b(w); a >>= 1;) {
              ++i;
            }

            if (a = 1 << i, --i, void 0 !== n.background) {
              if (a <= (o = n.background)) throw "Background index out of range.";
              if (0 === o) throw "Background index explicitly passed as 0.";
            }
          }

          if (y[v++] = 255 & t, y[v++] = t >> 8 & 255, y[v++] = 255 & e, y[v++] = e >> 8 & 255, y[v++] = (null !== w ? 128 : 0) | i, y[v++] = o, y[v++] = 0, null !== w) for (var s = 0, l = w.length; s < l; ++s) {
            var h = w[s];
            y[v++] = h >> 16 & 255, y[v++] = h >> 8 & 255, y[v++] = 255 & h;
          }

          if (null !== r) {
            if (r < 0 || 65535 < r) throw "Loop count invalid.";
            y[v++] = 33, y[v++] = 255, y[v++] = 11, y[v++] = 78, y[v++] = 69, y[v++] = 84, y[v++] = 83, y[v++] = 67, y[v++] = 65, y[v++] = 80, y[v++] = 69, y[v++] = 50, y[v++] = 46, y[v++] = 48, y[v++] = 3, y[v++] = 1, y[v++] = 255 & r, y[v++] = r >> 8 & 255, y[v++] = 0;
          }

          var x = !1;
          this.addFrame = function (t, e, n, r, i, o) {
            if (!0 === x && (--v, x = !1), o = void 0 === o ? {} : o, t < 0 || e < 0 || 65535 < t || 65535 < e) throw "x/y invalid.";
            if (n <= 0 || r <= 0 || 65535 < n || 65535 < r) throw "Width/Height invalid.";
            if (i.length < n * r) throw "Not enough pixels for the frame size.";
            var a = !0,
                s = o.palette;
            if (null == s && (a = !1, s = w), null == s) throw "Must supply either a local or global palette.";

            for (var l = b(s), h = 0; l >>= 1;) {
              ++h;
            }

            l = 1 << h;
            var u = void 0 === o.delay ? 0 : o.delay,
                c = void 0 === o.disposal ? 0 : o.disposal;
            if (c < 0 || 3 < c) throw "Disposal out of range.";
            var f = !1,
                p = 0;
            if (void 0 !== o.transparent && null !== o.transparent && (f = !0, (p = o.transparent) < 0 || l <= p)) throw "Transparent color index.";
            if ((0 !== c || f || 0 !== u) && (y[v++] = 33, y[v++] = 249, y[v++] = 4, y[v++] = c << 2 | (!0 === f ? 1 : 0), y[v++] = 255 & u, y[v++] = u >> 8 & 255, y[v++] = p, y[v++] = 0), y[v++] = 44, y[v++] = 255 & t, y[v++] = t >> 8 & 255, y[v++] = 255 & e, y[v++] = e >> 8 & 255, y[v++] = 255 & n, y[v++] = n >> 8 & 255, y[v++] = 255 & r, y[v++] = r >> 8 & 255, y[v++] = !0 === a ? 128 | h - 1 : 0, !0 === a) for (var d = 0, g = s.length; d < g; ++d) {
              var m = s[d];
              y[v++] = m >> 16 & 255, y[v++] = m >> 8 & 255, y[v++] = 255 & m;
            }

            v = function (e, n, t, r) {
              e[n++] = t;
              var i = n++,
                  o = 1 << t,
                  a = o - 1,
                  s = o + 1,
                  l = s + 1,
                  h = t + 1,
                  u = 0,
                  c = 0;

              function f(t) {
                for (; t <= u;) {
                  e[n++] = 255 & c, c >>= 8, u -= 8, n === i + 256 && (e[i] = 255, i = n++);
                }
              }

              function p(t) {
                c |= t << u, u += h, f(8);
              }

              var d = r[0] & a,
                  g = {};
              p(o);

              for (var m = 1, y = r.length; m < y; ++m) {
                var v = r[m] & a,
                    w = d << 8 | v,
                    b = g[w];

                if (void 0 === b) {
                  for (c |= d << u, u += h; 8 <= u;) {
                    e[n++] = 255 & c, c >>= 8, u -= 8, n === i + 256 && (e[i] = 255, i = n++);
                  }

                  4096 === l ? (p(o), l = s + 1, h = t + 1, g = {}) : (1 << h <= l && ++h, g[w] = l++), d = v;
                } else d = b;
              }

              return p(d), p(s), f(1), i + 1 === n ? e[i] = 0 : (e[i] = n - i - 1, e[n++] = 0), n;
            }(y, v, h < 2 ? 2 : h, i);
          }, this.end = function () {
            return !1 === x && (y[v++] = 59, x = !0), v;
          };
        }, exports.GifReader = At;
      } catch (t) {}
      /*
          Copyright (c) 2008, Adobe Systems Incorporated
          All rights reserved.
      
          Redistribution and use in source and binary forms, with or without 
          modification, are permitted provided that the following conditions are
          met:
      
          * Redistributions of source code must retain the above copyright notice, 
            this list of conditions and the following disclaimer.
          
          * Redistributions in binary form must reproduce the above copyright
            notice, this list of conditions and the following disclaimer in the 
            documentation and/or other materials provided with the distribution.
          
          * Neither the name of Adobe Systems Incorporated nor the names of its 
            contributors may be used to endorse or promote products derived from 
            this software without specific prior written permission.
      
          THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
          IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
          THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
          PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
          CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
          EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
          PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
          PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
          LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
          NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
          SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        */


      function _t(t) {
        var N,
            L,
            A,
            S,
            e,
            c = Math.floor,
            _ = new Array(64),
            F = new Array(64),
            P = new Array(64),
            k = new Array(64),
            y = new Array(65535),
            v = new Array(65535),
            Z = new Array(64),
            w = new Array(64),
            I = [],
            C = 0,
            B = 7,
            j = new Array(64),
            E = new Array(64),
            M = new Array(64),
            n = new Array(256),
            O = new Array(2048),
            b = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
            q = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            T = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            R = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
            D = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
            U = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            H = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
            W = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

        function r(t, e) {
          for (var n = 0, r = 0, i = new Array(), o = 1; o <= 16; o++) {
            for (var a = 1; a <= t[o]; a++) {
              i[e[r]] = [], i[e[r]][0] = n, i[e[r]][1] = o, r++, n++;
            }

            n *= 2;
          }

          return i;
        }

        function V(t) {
          for (var e = t[0], n = t[1] - 1; 0 <= n;) {
            e & 1 << n && (C |= 1 << B), n--, --B < 0 && (255 == C ? (G(255), G(0)) : G(C), B = 7, C = 0);
          }
        }

        function G(t) {
          I.push(t);
        }

        function Y(t) {
          G(t >> 8 & 255), G(255 & t);
        }

        function J(t, e, n, r, i) {
          for (var o, a = i[0], s = i[240], l = function (t, e) {
            var n,
                r,
                i,
                o,
                a,
                s,
                l,
                h,
                u,
                c,
                f = 0;

            for (u = 0; u < 8; ++u) {
              n = t[f], r = t[f + 1], i = t[f + 2], o = t[f + 3], a = t[f + 4], s = t[f + 5], l = t[f + 6];
              var p = n + (h = t[f + 7]),
                  d = n - h,
                  g = r + l,
                  m = r - l,
                  y = i + s,
                  v = i - s,
                  w = o + a,
                  b = o - a,
                  x = p + w,
                  N = p - w,
                  L = g + y,
                  A = g - y;
              t[f] = x + L, t[f + 4] = x - L;
              var S = .707106781 * (A + N);
              t[f + 2] = N + S, t[f + 6] = N - S;

              var _ = .382683433 * ((x = b + v) - (A = m + d)),
                  F = .5411961 * x + _,
                  P = 1.306562965 * A + _,
                  k = .707106781 * (L = v + m),
                  I = d + k,
                  C = d - k;

              t[f + 5] = C + F, t[f + 3] = C - F, t[f + 1] = I + P, t[f + 7] = I - P, f += 8;
            }

            for (u = f = 0; u < 8; ++u) {
              n = t[f], r = t[f + 8], i = t[f + 16], o = t[f + 24], a = t[f + 32], s = t[f + 40], l = t[f + 48];
              var B = n + (h = t[f + 56]),
                  j = n - h,
                  E = r + l,
                  M = r - l,
                  O = i + s,
                  q = i - s,
                  T = o + a,
                  R = o - a,
                  D = B + T,
                  U = B - T,
                  z = E + O,
                  H = E - O;
              t[f] = D + z, t[f + 32] = D - z;
              var W = .707106781 * (H + U);
              t[f + 16] = U + W, t[f + 48] = U - W;
              var V = .382683433 * ((D = R + q) - (H = M + j)),
                  G = .5411961 * D + V,
                  Y = 1.306562965 * H + V,
                  J = .707106781 * (z = q + M),
                  X = j + J,
                  K = j - J;
              t[f + 40] = K + G, t[f + 24] = K - G, t[f + 8] = X + Y, t[f + 56] = X - Y, f++;
            }

            for (u = 0; u < 64; ++u) {
              c = t[u] * e[u], Z[u] = 0 < c ? c + .5 | 0 : c - .5 | 0;
            }

            return Z;
          }(t, e), h = 0; h < 64; ++h) {
            w[b[h]] = l[h];
          }

          var u = w[0] - n;
          n = w[0], 0 == u ? V(r[0]) : (V(r[v[o = 32767 + u]]), V(y[o]));

          for (var c = 63; 0 < c && 0 == w[c]; c--) {
            ;
          }

          if (0 == c) return V(a), n;

          for (var f, p = 1; p <= c;) {
            for (var d = p; 0 == w[p] && p <= c; ++p) {
              ;
            }

            var g = p - d;

            if (16 <= g) {
              f = g >> 4;

              for (var m = 1; m <= f; ++m) {
                V(s);
              }

              g &= 15;
            }

            o = 32767 + w[p], V(i[(g << 4) + v[o]]), V(y[o]), p++;
          }

          return 63 != c && V(a), n;
        }

        function X(t) {
          if (t <= 0 && (t = 1), 100 < t && (t = 100), e != t) {
            (function (t) {
              for (var e = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; n < 64; n++) {
                var r = c((e[n] * t + 50) / 100);
                r < 1 ? r = 1 : 255 < r && (r = 255), _[b[n]] = r;
              }

              for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], o = 0; o < 64; o++) {
                var a = c((i[o] * t + 50) / 100);
                a < 1 ? a = 1 : 255 < a && (a = 255), F[b[o]] = a;
              }

              for (var s = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], l = 0, h = 0; h < 8; h++) {
                for (var u = 0; u < 8; u++) {
                  P[l] = 1 / (_[b[l]] * s[h] * s[u] * 8), k[l] = 1 / (F[b[l]] * s[h] * s[u] * 8), l++;
                }
              }
            })(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)), e = t;
          }
        }

        this.encode = function (t, e) {
          var n, r;
          new Date().getTime();
          e && X(e), I = new Array(), C = 0, B = 7, Y(65496), Y(65504), Y(16), G(74), G(70), G(73), G(70), G(0), G(1), G(1), G(0), Y(1), Y(1), G(0), G(0), function () {
            Y(65499), Y(132), G(0);

            for (var t = 0; t < 64; t++) {
              G(_[t]);
            }

            G(1);

            for (var e = 0; e < 64; e++) {
              G(F[e]);
            }
          }(), n = t.width, r = t.height, Y(65472), Y(17), G(8), Y(r), Y(n), G(3), G(1), G(17), G(0), G(2), G(17), G(1), G(3), G(17), G(1), function () {
            Y(65476), Y(418), G(0);

            for (var t = 0; t < 16; t++) {
              G(q[t + 1]);
            }

            for (var e = 0; e <= 11; e++) {
              G(T[e]);
            }

            G(16);

            for (var n = 0; n < 16; n++) {
              G(R[n + 1]);
            }

            for (var r = 0; r <= 161; r++) {
              G(D[r]);
            }

            G(1);

            for (var i = 0; i < 16; i++) {
              G(U[i + 1]);
            }

            for (var o = 0; o <= 11; o++) {
              G(z[o]);
            }

            G(17);

            for (var a = 0; a < 16; a++) {
              G(H[a + 1]);
            }

            for (var s = 0; s <= 161; s++) {
              G(W[s]);
            }
          }(), Y(65498), Y(12), G(3), G(1), G(0), G(2), G(17), G(3), G(17), G(0), G(63), G(0);
          var i = 0,
              o = 0,
              a = 0;
          C = 0, B = 7, this.encode.displayName = "_encode_";

          for (var s, l, h, u, c, f, p, d, g, m = t.data, y = t.width, v = t.height, w = 4 * y, b = 0; b < v;) {
            for (s = 0; s < w;) {
              for (f = c = w * b + s, p = -1, g = d = 0; g < 64; g++) {
                f = c + (d = g >> 3) * w + (p = 4 * (7 & g)), v <= b + d && (f -= w * (b + 1 + d - v)), w <= s + p && (f -= s + p - w + 4), l = m[f++], h = m[f++], u = m[f++], j[g] = (O[l] + O[h + 256 >> 0] + O[u + 512 >> 0] >> 16) - 128, E[g] = (O[l + 768 >> 0] + O[h + 1024 >> 0] + O[u + 1280 >> 0] >> 16) - 128, M[g] = (O[l + 1280 >> 0] + O[h + 1536 >> 0] + O[u + 1792 >> 0] >> 16) - 128;
              }

              i = J(j, P, i, N, A), o = J(E, k, o, L, S), a = J(M, k, a, L, S), s += 32;
            }

            b += 8;
          }

          if (0 <= B) {
            var x = [];
            x[1] = B + 1, x[0] = (1 << B + 1) - 1, V(x);
          }

          return Y(65497), new Uint8Array(I);
        }, function () {
          new Date().getTime();
          t || (t = 50), function () {
            for (var t = String.fromCharCode, e = 0; e < 256; e++) {
              n[e] = t(e);
            }
          }(), N = r(q, T), L = r(U, z), A = r(R, D), S = r(H, W), function () {
            for (var t = 1, e = 2, n = 1; n <= 15; n++) {
              for (var r = t; r < e; r++) {
                v[32767 + r] = n, y[32767 + r] = [], y[32767 + r][1] = n, y[32767 + r][0] = r;
              }

              for (var i = -(e - 1); i <= -t; i++) {
                v[32767 + i] = n, y[32767 + i] = [], y[32767 + i][1] = n, y[32767 + i][0] = e - 1 + i;
              }

              t <<= 1, e <<= 1;
            }
          }(), function () {
            for (var t = 0; t < 256; t++) {
              O[t] = 19595 * t, O[t + 256 >> 0] = 38470 * t, O[t + 512 >> 0] = 7471 * t + 32768, O[t + 768 >> 0] = -11059 * t, O[t + 1024 >> 0] = -21709 * t, O[t + 1280 >> 0] = 32768 * t + 8421375, O[t + 1536 >> 0] = -27439 * t, O[t + 1792 >> 0] = -5329 * t;
            }
          }(), X(t), new Date().getTime();
        }();
      }

      function Ft(t, e) {
        if (this.pos = 0, this.buffer = t, this.datav = new DataView(t.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
        this.parseHeader(), this.parseBGR();
      }

      window.tmp = At, lt.API.adler32cs = (dt = "function" == typeof ArrayBuffer && "function" == typeof Uint8Array, gt = null, mt = function () {
        if (!dt) return function () {
          return !1;
        };

        try {
          var t = {};
          "function" == typeof t.Buffer && (gt = t.Buffer);
        } catch (t) {}

        return function (t) {
          return t instanceof ArrayBuffer || null !== gt && t instanceof gt;
        };
      }(), yt = null !== gt ? function (t) {
        return new gt(t, "utf8").toString("binary");
      } : function (t) {
        return unescape(encodeURIComponent(t));
      }, vt = function vt(t, e) {
        for (var n = 65535 & t, r = t >>> 16, i = 0, o = e.length; i < o; i++) {
          n = (n + (255 & e.charCodeAt(i))) % 65521, r = (r + n) % 65521;
        }

        return (r << 16 | n) >>> 0;
      }, wt = function wt(t, e) {
        for (var n = 65535 & t, r = t >>> 16, i = 0, o = e.length; i < o; i++) {
          n = (n + e[i]) % 65521, r = (r + n) % 65521;
        }

        return (r << 16 | n) >>> 0;
      }, xt = (bt = {}).Adler32 = (((pt = (_ft = function ft(t) {
        if (!(this instanceof _ft)) throw new TypeError("Constructor cannot called be as a function.");
        if (!isFinite(t = null == t ? 1 : +t)) throw new Error("First arguments needs to be a finite number.");
        this.checksum = t >>> 0;
      }).prototype = {}).constructor = _ft).from = ((ht = function ht(t) {
        if (!(this instanceof _ft)) throw new TypeError("Constructor cannot called be as a function.");
        if (null == t) throw new Error("First argument needs to be a string.");
        this.checksum = vt(1, t.toString());
      }).prototype = pt, ht), _ft.fromUtf8 = ((ut = function ut(t) {
        if (!(this instanceof _ft)) throw new TypeError("Constructor cannot called be as a function.");
        if (null == t) throw new Error("First argument needs to be a string.");
        var e = yt(t.toString());
        this.checksum = vt(1, e);
      }).prototype = pt, ut), dt && (_ft.fromBuffer = ((ct = function ct(t) {
        if (!(this instanceof _ft)) throw new TypeError("Constructor cannot called be as a function.");
        if (!mt(t)) throw new Error("First argument needs to be ArrayBuffer.");
        var e = new Uint8Array(t);
        return this.checksum = wt(1, e);
      }).prototype = pt, ct)), pt.update = function (t) {
        if (null == t) throw new Error("First argument needs to be a string.");
        return t = t.toString(), this.checksum = vt(this.checksum, t);
      }, pt.updateUtf8 = function (t) {
        if (null == t) throw new Error("First argument needs to be a string.");
        var e = yt(t.toString());
        return this.checksum = vt(this.checksum, e);
      }, dt && (pt.updateBuffer = function (t) {
        if (!mt(t)) throw new Error("First argument needs to be ArrayBuffer.");
        var e = new Uint8Array(t);
        return this.checksum = wt(this.checksum, e);
      }), pt.clone = function () {
        return new xt(this.checksum);
      }, _ft), bt.from = function (t) {
        if (null == t) throw new Error("First argument needs to be a string.");
        return vt(1, t.toString());
      }, bt.fromUtf8 = function (t) {
        if (null == t) throw new Error("First argument needs to be a string.");
        var e = yt(t.toString());
        return vt(1, e);
      }, dt && (bt.fromBuffer = function (t) {
        if (!mt(t)) throw new Error("First argument need to be ArrayBuffer.");
        var e = new Uint8Array(t);
        return wt(1, e);
      }), bt), function (t) {
        t.__bidiEngine__ = t.prototype.__bidiEngine__ = function (t) {
          var d,
              g,
              c,
              f,
              i,
              o,
              a,
              s = e,
              m = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]],
              y = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]],
              v = {
            L: 0,
            R: 1,
            EN: 2,
            AN: 3,
            N: 4,
            B: 5,
            S: 6
          },
              l = {
            0: 0,
            5: 1,
            6: 2,
            7: 3,
            32: 4,
            251: 5,
            254: 6,
            255: 7
          },
              h = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"],
              u = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),
              w = !1,
              b = 0;
          this.__bidiEngine__ = {};

          var x = function x(t) {
            var e = t.charCodeAt(),
                n = e >> 8,
                r = l[n];
            return void 0 !== r ? s[256 * r + (255 & e)] : 252 === n || 253 === n ? "AL" : u.test(n) ? "L" : 8 === n ? "R" : "N";
          },
              p = function p(t) {
            for (var e, n = 0; n < t.length; n++) {
              if ("L" === (e = x(t.charAt(n)))) return !1;
              if ("R" === e) return !0;
            }

            return !1;
          },
              N = function N(t, e, n, r) {
            var i,
                o,
                a,
                s,
                l = e[r];

            switch (l) {
              case "L":
              case "R":
                w = !1;
                break;

              case "N":
              case "AN":
                break;

              case "EN":
                w && (l = "AN");
                break;

              case "AL":
                w = !0, l = "R";
                break;

              case "WS":
                l = "N";
                break;

              case "CS":
                r < 1 || r + 1 >= e.length || "EN" !== (i = n[r - 1]) && "AN" !== i || "EN" !== (o = e[r + 1]) && "AN" !== o ? l = "N" : w && (o = "AN"), l = o === i ? o : "N";
                break;

              case "ES":
                l = "EN" === (i = 0 < r ? n[r - 1] : "B") && r + 1 < e.length && "EN" === e[r + 1] ? "EN" : "N";
                break;

              case "ET":
                if (0 < r && "EN" === n[r - 1]) {
                  l = "EN";
                  break;
                }

                if (w) {
                  l = "N";
                  break;
                }

                for (a = r + 1, s = e.length; a < s && "ET" === e[a];) {
                  a++;
                }

                l = a < s && "EN" === e[a] ? "EN" : "N";
                break;

              case "NSM":
                if (c && !f) {
                  for (s = e.length, a = r + 1; a < s && "NSM" === e[a];) {
                    a++;
                  }

                  if (a < s) {
                    var h = t[r],
                        u = 1425 <= h && h <= 2303 || 64286 === h;

                    if (i = e[a], u && ("R" === i || "AL" === i)) {
                      l = "R";
                      break;
                    }
                  }
                }

                l = r < 1 || "B" === (i = e[r - 1]) ? "N" : n[r - 1];
                break;

              case "B":
                d = !(w = !1), l = b;
                break;

              case "S":
                g = !0, l = "N";
                break;

              case "LRE":
              case "RLE":
              case "LRO":
              case "RLO":
              case "PDF":
                w = !1;
                break;

              case "BN":
                l = "N";
            }

            return l;
          },
              L = function L(t, e, n) {
            var r = t.split("");
            return n && A(r, n, {
              hiLevel: b
            }), r.reverse(), e && e.reverse(), r.join("");
          },
              A = function A(t, e, n) {
            var r,
                i,
                o,
                a,
                s,
                l = -1,
                h = t.length,
                u = 0,
                c = [],
                f = b ? y : m,
                p = [];

            for (g = d = w = !1, i = 0; i < h; i++) {
              p[i] = x(t[i]);
            }

            for (o = 0; o < h; o++) {
              if (s = u, c[o] = N(t, p, c, o), r = 240 & (u = f[s][v[c[o]]]), u &= 15, e[o] = a = f[u][5], 0 < r) if (16 === r) {
                for (i = l; i < o; i++) {
                  e[i] = 1;
                }

                l = -1;
              } else l = -1;
              if (f[u][6]) -1 === l && (l = o);else if (-1 < l) {
                for (i = l; i < o; i++) {
                  e[i] = a;
                }

                l = -1;
              }
              "B" === p[o] && (e[o] = 0), n.hiLevel |= a;
            }

            g && function (t, e, n) {
              for (var r = 0; r < n; r++) {
                if ("S" === t[r]) {
                  e[r] = b;

                  for (var i = r - 1; 0 <= i && "WS" === t[i]; i--) {
                    e[i] = b;
                  }
                }
              }
            }(p, e, h);
          },
              S = function S(t, e, n, r, i) {
            if (!(i.hiLevel < t)) {
              if (1 === t && 1 === b && !d) return e.reverse(), void (n && n.reverse());

              for (var o, a, s, l, h = e.length, u = 0; u < h;) {
                if (r[u] >= t) {
                  for (s = u + 1; s < h && r[s] >= t;) {
                    s++;
                  }

                  for (l = u, a = s - 1; l < a; l++, a--) {
                    o = e[l], e[l] = e[a], e[a] = o, n && (o = n[l], n[l] = n[a], n[a] = o);
                  }

                  u = s;
                }

                u++;
              }
            }
          },
              _ = function _(t, e, n) {
            var r = t.split(""),
                i = {
              hiLevel: b
            };
            return n || (n = []), A(r, n, i), function (t, e, n) {
              if (0 !== n.hiLevel && a) for (var r, i = 0; i < t.length; i++) {
                1 === e[i] && 0 <= (r = h.indexOf(t[i])) && (t[i] = h[r + 1]);
              }
            }(r, n, i), S(2, r, e, n, i), S(1, r, e, n, i), r.join("");
          };

          return this.__bidiEngine__.doBidiReorder = function (t, e, n) {
            if (function (t, e) {
              if (e) for (var n = 0; n < t.length; n++) {
                e[n] = n;
              }
              void 0 === f && (f = p(t)), void 0 === o && (o = p(t));
            }(t, e), c || !i || o) {
              if (c && i && f ^ o) b = f ? 1 : 0, t = L(t, e, n);else if (!c && i && o) b = f ? 1 : 0, t = _(t, e, n), t = L(t, e);else if (!c || f || i || o) {
                if (c && !i && f ^ o) t = L(t, e), t = f ? (b = 0, _(t, e, n)) : (b = 1, t = _(t, e, n), L(t, e));else if (c && f && !i && o) b = 1, t = _(t, e, n), t = L(t, e);else if (!c && !i && f ^ o) {
                  var r = a;
                  f ? (b = 1, t = _(t, e, n), b = 0, a = !1, t = _(t, e, n), a = r) : (b = 0, t = _(t, e, n), t = L(t, e), a = !(b = 1), t = _(t, e, n), a = r, t = L(t, e));
                }
              } else b = 0, t = _(t, e, n);
            } else b = f ? 1 : 0, t = _(t, e, n);
            return t;
          }, this.__bidiEngine__.setOptions = function (t) {
            t && (c = t.isInputVisual, i = t.isOutputVisual, f = t.isInputRtl, o = t.isOutputRtl, a = t.isSymmetricSwapping);
          }, this.__bidiEngine__.setOptions(t), this.__bidiEngine__;
        };

        var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
            o = new t.__bidiEngine__({
          isInputVisual: !0
        });
        t.API.events.push(["postProcessText", function (t) {
          var e = t.text,
              n = (t.x, t.y, t.options || {}),
              r = (t.mutex, n.lang, []);

          if ("[object Array]" === Object.prototype.toString.call(e)) {
            var i = 0;

            for (r = [], i = 0; i < e.length; i += 1) {
              "[object Array]" === Object.prototype.toString.call(e[i]) ? r.push([o.doBidiReorder(e[i][0]), e[i][1], e[i][2]]) : r.push([o.doBidiReorder(e[i])]);
            }

            t.text = r;
          } else t.text = o.doBidiReorder(e);
        }]);
      }(lt), window.tmp = _t, Ft.prototype.parseHeader = function () {
        if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
          var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
          this.palette = new Array(t);

          for (var e = 0; e < t; e++) {
            var n = this.datav.getUint8(this.pos++, !0),
                r = this.datav.getUint8(this.pos++, !0),
                i = this.datav.getUint8(this.pos++, !0),
                o = this.datav.getUint8(this.pos++, !0);
            this.palette[e] = {
              red: i,
              green: r,
              blue: n,
              quad: o
            };
          }
        }

        this.height < 0 && (this.height *= -1, this.bottom_up = !1);
      }, Ft.prototype.parseBGR = function () {
        this.pos = this.offset;

        try {
          var t = "bit" + this.bitPP,
              e = this.width * this.height * 4;
          this.data = new Uint8Array(e), this[t]();
        } catch (t) {
          console.log("bit decode error:" + t);
        }
      }, Ft.prototype.bit1 = function () {
        var t = Math.ceil(this.width / 8),
            e = t % 4,
            n = 0 <= this.height ? this.height - 1 : -this.height;

        for (n = this.height - 1; 0 <= n; n--) {
          for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < t; i++) {
            for (var o = this.datav.getUint8(this.pos++, !0), a = r * this.width * 4 + 8 * i * 4, s = 0; s < 8 && 8 * i + s < this.width; s++) {
              var l = this.palette[o >> 7 - s & 1];
              this.data[a + 4 * s] = l.blue, this.data[a + 4 * s + 1] = l.green, this.data[a + 4 * s + 2] = l.red, this.data[a + 4 * s + 3] = 255;
            }
          }

          0 != e && (this.pos += 4 - e);
        }
      }, Ft.prototype.bit4 = function () {
        for (var t = Math.ceil(this.width / 2), e = t % 4, n = this.height - 1; 0 <= n; n--) {
          for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < t; i++) {
            var o = this.datav.getUint8(this.pos++, !0),
                a = r * this.width * 4 + 2 * i * 4,
                s = o >> 4,
                l = 15 & o,
                h = this.palette[s];
            if (this.data[a] = h.blue, this.data[a + 1] = h.green, this.data[a + 2] = h.red, this.data[a + 3] = 255, 2 * i + 1 >= this.width) break;
            h = this.palette[l], this.data[a + 4] = h.blue, this.data[a + 4 + 1] = h.green, this.data[a + 4 + 2] = h.red, this.data[a + 4 + 3] = 255;
          }

          0 != e && (this.pos += 4 - e);
        }
      }, Ft.prototype.bit8 = function () {
        for (var t = this.width % 4, e = this.height - 1; 0 <= e; e--) {
          for (var n = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
            var i = this.datav.getUint8(this.pos++, !0),
                o = n * this.width * 4 + 4 * r;

            if (i < this.palette.length) {
              var a = this.palette[i];
              this.data[o] = a.red, this.data[o + 1] = a.green, this.data[o + 2] = a.blue, this.data[o + 3] = 255;
            } else this.data[o] = 255, this.data[o + 1] = 255, this.data[o + 2] = 255, this.data[o + 3] = 255;
          }

          0 != t && (this.pos += 4 - t);
        }
      }, Ft.prototype.bit15 = function () {
        for (var t = this.width % 3, e = parseInt("11111", 2), n = this.height - 1; 0 <= n; n--) {
          for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < this.width; i++) {
            var o = this.datav.getUint16(this.pos, !0);
            this.pos += 2;
            var a = (o & e) / e * 255 | 0,
                s = (o >> 5 & e) / e * 255 | 0,
                l = (o >> 10 & e) / e * 255 | 0,
                h = o >> 15 ? 255 : 0,
                u = r * this.width * 4 + 4 * i;
            this.data[u] = l, this.data[u + 1] = s, this.data[u + 2] = a, this.data[u + 3] = h;
          }

          this.pos += t;
        }
      }, Ft.prototype.bit16 = function () {
        for (var t = this.width % 3, e = parseInt("11111", 2), n = parseInt("111111", 2), r = this.height - 1; 0 <= r; r--) {
          for (var i = this.bottom_up ? r : this.height - 1 - r, o = 0; o < this.width; o++) {
            var a = this.datav.getUint16(this.pos, !0);
            this.pos += 2;
            var s = (a & e) / e * 255 | 0,
                l = (a >> 5 & n) / n * 255 | 0,
                h = (a >> 11) / e * 255 | 0,
                u = i * this.width * 4 + 4 * o;
            this.data[u] = h, this.data[u + 1] = l, this.data[u + 2] = s, this.data[u + 3] = 255;
          }

          this.pos += t;
        }
      }, Ft.prototype.bit24 = function () {
        for (var t = this.height - 1; 0 <= t; t--) {
          for (var e = this.bottom_up ? t : this.height - 1 - t, n = 0; n < this.width; n++) {
            var r = this.datav.getUint8(this.pos++, !0),
                i = this.datav.getUint8(this.pos++, !0),
                o = this.datav.getUint8(this.pos++, !0),
                a = e * this.width * 4 + 4 * n;
            this.data[a] = o, this.data[a + 1] = i, this.data[a + 2] = r, this.data[a + 3] = 255;
          }

          this.pos += this.width % 4;
        }
      }, Ft.prototype.bit32 = function () {
        for (var t = this.height - 1; 0 <= t; t--) {
          for (var e = this.bottom_up ? t : this.height - 1 - t, n = 0; n < this.width; n++) {
            var r = this.datav.getUint8(this.pos++, !0),
                i = this.datav.getUint8(this.pos++, !0),
                o = this.datav.getUint8(this.pos++, !0),
                a = this.datav.getUint8(this.pos++, !0),
                s = e * this.width * 4 + 4 * n;
            this.data[s] = o, this.data[s + 1] = i, this.data[s + 2] = r, this.data[s + 3] = a;
          }
        }
      }, Ft.prototype.getData = function () {
        return this.data;
      }, window.tmp = Ft,
      /*
         Copyright (c) 2013 Gildas Lormeau. All rights reserved.
      
         Redistribution and use in source and binary forms, with or without
         modification, are permitted provided that the following conditions are met:
      
         1. Redistributions of source code must retain the above copyright notice,
         this list of conditions and the following disclaimer.
      
         2. Redistributions in binary form must reproduce the above copyright 
         notice, this list of conditions and the following disclaimer in 
         the documentation and/or other materials provided with the distribution.
      
         3. The names of the authors may not be used to endorse or promote products
         derived from this software without specific prior written permission.
      
         THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
         INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
         FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
         INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
         INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
         LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
         OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
         LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
         NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
         EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
         */
      function (t) {
        var d = 15,
            g = 573,
            e = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];

        function ct() {
          var p = this;

          function l(t, e) {
            for (var n = 0; n |= 1 & t, t >>>= 1, n <<= 1, 0 < --e;) {
              ;
            }

            return n >>> 1;
          }

          p.build_tree = function (t) {
            var e,
                n,
                r,
                i = p.dyn_tree,
                o = p.stat_desc.static_tree,
                a = p.stat_desc.elems,
                s = -1;

            for (t.heap_len = 0, t.heap_max = g, e = 0; e < a; e++) {
              0 !== i[2 * e] ? (t.heap[++t.heap_len] = s = e, t.depth[e] = 0) : i[2 * e + 1] = 0;
            }

            for (; t.heap_len < 2;) {
              i[2 * (r = t.heap[++t.heap_len] = s < 2 ? ++s : 0)] = 1, t.depth[r] = 0, t.opt_len--, o && (t.static_len -= o[2 * r + 1]);
            }

            for (p.max_code = s, e = Math.floor(t.heap_len / 2); 1 <= e; e--) {
              t.pqdownheap(i, e);
            }

            for (r = a; e = t.heap[1], t.heap[1] = t.heap[t.heap_len--], t.pqdownheap(i, 1), n = t.heap[1], t.heap[--t.heap_max] = e, t.heap[--t.heap_max] = n, i[2 * r] = i[2 * e] + i[2 * n], t.depth[r] = Math.max(t.depth[e], t.depth[n]) + 1, i[2 * e + 1] = i[2 * n + 1] = r, t.heap[1] = r++, t.pqdownheap(i, 1), 2 <= t.heap_len;) {
              ;
            }

            t.heap[--t.heap_max] = t.heap[1], function (t) {
              var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s = p.dyn_tree,
                  l = p.stat_desc.static_tree,
                  h = p.stat_desc.extra_bits,
                  u = p.stat_desc.extra_base,
                  c = p.stat_desc.max_length,
                  f = 0;

              for (i = 0; i <= d; i++) {
                t.bl_count[i] = 0;
              }

              for (s[2 * t.heap[t.heap_max] + 1] = 0, e = t.heap_max + 1; e < g; e++) {
                c < (i = s[2 * s[2 * (n = t.heap[e]) + 1] + 1] + 1) && (i = c, f++), s[2 * n + 1] = i, n > p.max_code || (t.bl_count[i]++, o = 0, u <= n && (o = h[n - u]), a = s[2 * n], t.opt_len += a * (i + o), l && (t.static_len += a * (l[2 * n + 1] + o)));
              }

              if (0 !== f) {
                do {
                  for (i = c - 1; 0 === t.bl_count[i];) {
                    i--;
                  }

                  t.bl_count[i]--, t.bl_count[i + 1] += 2, t.bl_count[c]--, f -= 2;
                } while (0 < f);

                for (i = c; 0 !== i; i--) {
                  for (n = t.bl_count[i]; 0 !== n;) {
                    (r = t.heap[--e]) > p.max_code || (s[2 * r + 1] != i && (t.opt_len += (i - s[2 * r + 1]) * s[2 * r], s[2 * r + 1] = i), n--);
                  }
                }
              }
            }(t), function (t, e, n) {
              var r,
                  i,
                  o,
                  a = [],
                  s = 0;

              for (r = 1; r <= d; r++) {
                a[r] = s = s + n[r - 1] << 1;
              }

              for (i = 0; i <= e; i++) {
                0 !== (o = t[2 * i + 1]) && (t[2 * i] = l(a[o]++, o));
              }
            }(i, p.max_code, t.bl_count);
          };
        }

        function ft(t, e, n, r, i) {
          this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = r, this.max_length = i;
        }

        ct._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28], ct.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], ct.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], ct.d_code = function (t) {
          return t < 256 ? e[t] : e[256 + (t >>> 7)];
        }, ct.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], ct.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], ct.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], ct.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], ft.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], ft.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], ft.static_l_desc = new ft(ft.static_ltree, ct.extra_lbits, 257, 286, d), ft.static_d_desc = new ft(ft.static_dtree, ct.extra_dbits, 0, 30, d), ft.static_bl_desc = new ft(null, ct.extra_blbits, 0, 19, 7);

        function n(t, e, n, r, i) {
          this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = r, this.func = i;
        }

        var pt = [new n(0, 0, 0, 0, 0), new n(4, 4, 8, 4, 1), new n(4, 5, 16, 8, 1), new n(4, 6, 32, 32, 1), new n(4, 4, 16, 16, 2), new n(8, 16, 32, 32, 2), new n(8, 16, 128, 128, 2), new n(8, 32, 128, 256, 2), new n(32, 128, 258, 1024, 2), new n(32, 258, 258, 4096, 2)],
            dt = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""];

        function gt(t, e, n, r) {
          var i = t[2 * e],
              o = t[2 * n];
          return i < o || i == o && r[e] <= r[n];
        }

        function r() {
          var l,
              h,
              u,
              c,
              f,
              p,
              d,
              g,
              i,
              m,
              y,
              v,
              w,
              a,
              b,
              x,
              N,
              L,
              A,
              S,
              _,
              F,
              P,
              k,
              I,
              C,
              B,
              j,
              E,
              M,
              s,
              O,
              q,
              T,
              R,
              D,
              U,
              o,
              z,
              H,
              W,
              V = this,
              G = new ct(),
              Y = new ct(),
              J = new ct();

          function X() {
            var t;

            for (t = 0; t < 286; t++) {
              s[2 * t] = 0;
            }

            for (t = 0; t < 30; t++) {
              O[2 * t] = 0;
            }

            for (t = 0; t < 19; t++) {
              q[2 * t] = 0;
            }

            s[512] = 1, V.opt_len = V.static_len = 0, D = o = 0;
          }

          function K(t, e) {
            var n,
                r,
                i = -1,
                o = t[1],
                a = 0,
                s = 7,
                l = 4;

            for (0 === o && (s = 138, l = 3), t[2 * (e + 1) + 1] = 65535, n = 0; n <= e; n++) {
              r = o, o = t[2 * (n + 1) + 1], ++a < s && r == o || (a < l ? q[2 * r] += a : 0 !== r ? (r != i && q[2 * r]++, q[32]++) : a <= 10 ? q[34]++ : q[36]++, i = r, l = (a = 0) === o ? (s = 138, 3) : r == o ? (s = 6, 3) : (s = 7, 4));
            }
          }

          function Z(t) {
            V.pending_buf[V.pending++] = t;
          }

          function Q(t) {
            Z(255 & t), Z(t >>> 8 & 255);
          }

          function $(t, e) {
            var n,
                r = e;
            16 - r < W ? (Q(H |= (n = t) << W & 65535), H = n >>> 16 - W, W += r - 16) : (H |= t << W & 65535, W += r);
          }

          function tt(t, e) {
            var n = 2 * t;
            $(65535 & e[n], 65535 & e[n + 1]);
          }

          function et(t, e) {
            var n,
                r,
                i = -1,
                o = t[1],
                a = 0,
                s = 7,
                l = 4;

            for (0 === o && (s = 138, l = 3), n = 0; n <= e; n++) {
              if (r = o, o = t[2 * (n + 1) + 1], !(++a < s && r == o)) {
                if (a < l) for (; tt(r, q), 0 != --a;) {
                  ;
                } else 0 !== r ? (r != i && (tt(r, q), a--), tt(16, q), $(a - 3, 2)) : a <= 10 ? (tt(17, q), $(a - 3, 3)) : (tt(18, q), $(a - 11, 7));
                i = r, l = (a = 0) === o ? (s = 138, 3) : r == o ? (s = 6, 3) : (s = 7, 4);
              }
            }
          }

          function nt() {
            16 == W ? (Q(H), W = H = 0) : 8 <= W && (Z(255 & H), H >>>= 8, W -= 8);
          }

          function rt(t, e) {
            var n, r, i;

            if (V.pending_buf[U + 2 * D] = t >>> 8 & 255, V.pending_buf[U + 2 * D + 1] = 255 & t, V.pending_buf[T + D] = 255 & e, D++, 0 === t ? s[2 * e]++ : (o++, t--, s[2 * (ct._length_code[e] + 256 + 1)]++, O[2 * ct.d_code(t)]++), 0 == (8191 & D) && 2 < B) {
              for (n = 8 * D, r = _ - N, i = 0; i < 30; i++) {
                n += O[2 * i] * (5 + ct.extra_dbits[i]);
              }

              if (n >>>= 3, o < Math.floor(D / 2) && n < Math.floor(r / 2)) return !0;
            }

            return D == R - 1;
          }

          function it(t, e) {
            var n,
                r,
                i,
                o,
                a = 0;
            if (0 !== D) for (; n = V.pending_buf[U + 2 * a] << 8 & 65280 | 255 & V.pending_buf[U + 2 * a + 1], r = 255 & V.pending_buf[T + a], a++, 0 === n ? tt(r, t) : (tt((i = ct._length_code[r]) + 256 + 1, t), 0 !== (o = ct.extra_lbits[i]) && $(r -= ct.base_length[i], o), tt(i = ct.d_code(--n), e), 0 !== (o = ct.extra_dbits[i]) && $(n -= ct.base_dist[i], o)), a < D;) {
              ;
            }
            tt(256, t), z = t[513];
          }

          function ot() {
            8 < W ? Q(H) : 0 < W && Z(255 & H), W = H = 0;
          }

          function at(t, e, n) {
            var r, i, o;
            $(0 + (n ? 1 : 0), 3), r = t, i = e, o = !0, ot(), z = 8, o && (Q(i), Q(~i)), V.pending_buf.set(g.subarray(r, r + i), V.pending), V.pending += i;
          }

          function e(t, e, n) {
            var r,
                i,
                o = 0;
            0 < B ? (G.build_tree(V), Y.build_tree(V), o = function () {
              var t;

              for (K(s, G.max_code), K(O, Y.max_code), J.build_tree(V), t = 18; 3 <= t && 0 === q[2 * ct.bl_order[t] + 1]; t--) {
                ;
              }

              return V.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
            }(), r = V.opt_len + 3 + 7 >>> 3, (i = V.static_len + 3 + 7 >>> 3) <= r && (r = i)) : r = i = e + 5, e + 4 <= r && -1 != t ? at(t, e, n) : i == r ? ($(2 + (n ? 1 : 0), 3), it(ft.static_ltree, ft.static_dtree)) : ($(4 + (n ? 1 : 0), 3), function (t, e, n) {
              var r;

              for ($(t - 257, 5), $(e - 1, 5), $(n - 4, 4), r = 0; r < n; r++) {
                $(q[2 * ct.bl_order[r] + 1], 3);
              }

              et(s, t - 1), et(O, e - 1);
            }(G.max_code + 1, Y.max_code + 1, o + 1), it(s, O)), X(), n && ot();
          }

          function st(t) {
            e(0 <= N ? N : -1, _ - N, t), N = _, l.flush_pending();
          }

          function lt() {
            var t, e, n, r;

            do {
              if (0 === (r = i - P - _) && 0 === _ && 0 === P) r = f;else if (-1 == r) r--;else if (f + f - 262 <= _) {
                for (g.set(g.subarray(f, f + f), 0), F -= f, _ -= f, N -= f, n = t = w; e = 65535 & y[--n], y[n] = f <= e ? e - f : 0, 0 != --t;) {
                  ;
                }

                for (n = t = f; e = 65535 & m[--n], m[n] = f <= e ? e - f : 0, 0 != --t;) {
                  ;
                }

                r += f;
              }
              if (0 === l.avail_in) return;
              t = l.read_buf(g, _ + P, r), 3 <= (P += t) && (v = ((v = 255 & g[_]) << x ^ 255 & g[_ + 1]) & b);
            } while (P < 262 && 0 !== l.avail_in);
          }

          function ht(t) {
            var e,
                n,
                r = I,
                i = _,
                o = k,
                a = f - 262 < _ ? _ - (f - 262) : 0,
                s = M,
                l = d,
                h = _ + 258,
                u = g[i + o - 1],
                c = g[i + o];
            E <= k && (r >>= 2), P < s && (s = P);

            do {
              if (g[(e = t) + o] == c && g[e + o - 1] == u && g[e] == g[i] && g[++e] == g[i + 1]) {
                i += 2, e++;

                do {} while (g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && g[++i] == g[++e] && i < h);

                if (n = 258 - (h - i), i = h - 258, o < n) {
                  if (F = t, s <= (o = n)) break;
                  u = g[i + o - 1], c = g[i + o];
                }
              }
            } while ((t = 65535 & m[t & l]) > a && 0 != --r);

            return o <= P ? o : P;
          }

          function ut(t) {
            return t.total_in = t.total_out = 0, t.msg = null, V.pending = 0, V.pending_out = 0, h = 113, c = 0, G.dyn_tree = s, G.stat_desc = ft.static_l_desc, Y.dyn_tree = O, Y.stat_desc = ft.static_d_desc, J.dyn_tree = q, J.stat_desc = ft.static_bl_desc, W = H = 0, z = 8, X(), function () {
              var t;

              for (i = 2 * f, t = y[w - 1] = 0; t < w - 1; t++) {
                y[t] = 0;
              }

              C = pt[B].max_lazy, E = pt[B].good_length, M = pt[B].nice_length, I = pt[B].max_chain, L = k = 2, v = S = P = N = _ = 0;
            }(), 0;
          }

          V.depth = [], V.bl_count = [], V.heap = [], s = [], O = [], q = [], V.pqdownheap = function (t, e) {
            for (var n = V.heap, r = n[e], i = e << 1; i <= V.heap_len && (i < V.heap_len && gt(t, n[i + 1], n[i], V.depth) && i++, !gt(t, r, n[i], V.depth));) {
              n[e] = n[i], e = i, i <<= 1;
            }

            n[e] = r;
          }, V.deflateInit = function (t, e, n, r, i, o) {
            return r || (r = 8), i || (i = 8), o || (o = 0), t.msg = null, -1 == e && (e = 6), i < 1 || 9 < i || 8 != r || n < 9 || 15 < n || e < 0 || 9 < e || o < 0 || 2 < o ? -2 : (t.dstate = V, d = (f = 1 << (p = n)) - 1, b = (w = 1 << (a = i + 7)) - 1, x = Math.floor((a + 3 - 1) / 3), g = new Uint8Array(2 * f), m = [], y = [], R = 1 << i + 6, V.pending_buf = new Uint8Array(4 * R), u = 4 * R, U = Math.floor(R / 2), T = 3 * R, B = e, j = o, ut(t));
          }, V.deflateEnd = function () {
            return 42 != h && 113 != h && 666 != h ? -2 : (V.pending_buf = null, g = m = y = null, V.dstate = null, 113 == h ? -3 : 0);
          }, V.deflateParams = function (t, e, n) {
            var r = 0;
            return -1 == e && (e = 6), e < 0 || 9 < e || n < 0 || 2 < n ? -2 : (pt[B].func != pt[e].func && 0 !== t.total_in && (r = t.deflate(1)), B != e && (C = pt[B = e].max_lazy, E = pt[B].good_length, M = pt[B].nice_length, I = pt[B].max_chain), j = n, r);
          }, V.deflateSetDictionary = function (t, e, n) {
            var r,
                i = n,
                o = 0;
            if (!e || 42 != h) return -2;
            if (i < 3) return 0;

            for (f - 262 < i && (o = n - (i = f - 262)), g.set(e.subarray(o, o + i), 0), N = _ = i, v = ((v = 255 & g[0]) << x ^ 255 & g[1]) & b, r = 0; r <= i - 3; r++) {
              v = (v << x ^ 255 & g[r + 2]) & b, m[r & d] = y[v], y[v] = r;
            }

            return 0;
          }, V.deflate = function (t, e) {
            var n, r, i, o, a, s;
            if (4 < e || e < 0) return -2;
            if (!t.next_out || !t.next_in && 0 !== t.avail_in || 666 == h && 4 != e) return t.msg = dt[4], -2;
            if (0 === t.avail_out) return t.msg = dt[7], -5;

            if (l = t, o = c, c = e, 42 == h && (r = 8 + (p - 8 << 4) << 8, 3 < (i = (B - 1 & 255) >> 1) && (i = 3), r |= i << 6, 0 !== _ && (r |= 32), h = 113, Z((s = r += 31 - r % 31) >> 8 & 255), Z(255 & s)), 0 !== V.pending) {
              if (l.flush_pending(), 0 === l.avail_out) return c = -1, 0;
            } else if (0 === l.avail_in && e <= o && 4 != e) return l.msg = dt[7], -5;

            if (666 == h && 0 !== l.avail_in) return t.msg = dt[7], -5;

            if (0 !== l.avail_in || 0 !== P || 0 != e && 666 != h) {
              switch (a = -1, pt[B].func) {
                case 0:
                  a = function (t) {
                    var e,
                        n = 65535;

                    for (u - 5 < n && (n = u - 5);;) {
                      if (P <= 1) {
                        if (lt(), 0 === P && 0 == t) return 0;
                        if (0 === P) break;
                      }

                      if (_ += P, e = N + n, ((P = 0) === _ || e <= _) && (P = _ - e, _ = e, st(!1), 0 === l.avail_out)) return 0;
                      if (f - 262 <= _ - N && (st(!1), 0 === l.avail_out)) return 0;
                    }

                    return st(4 == t), 0 === l.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1;
                  }(e);

                  break;

                case 1:
                  a = function (t) {
                    for (var e, n = 0;;) {
                      if (P < 262) {
                        if (lt(), P < 262 && 0 == t) return 0;
                        if (0 === P) break;
                      }

                      if (3 <= P && (v = (v << x ^ 255 & g[_ + 2]) & b, n = 65535 & y[v], m[_ & d] = y[v], y[v] = _), 0 !== n && (_ - n & 65535) <= f - 262 && 2 != j && (L = ht(n)), 3 <= L) {
                        if (e = rt(_ - F, L - 3), P -= L, L <= C && 3 <= P) {
                          for (L--; v = (v << x ^ 255 & g[++_ + 2]) & b, n = 65535 & y[v], m[_ & d] = y[v], y[v] = _, 0 != --L;) {
                            ;
                          }

                          _++;
                        } else _ += L, L = 0, v = ((v = 255 & g[_]) << x ^ 255 & g[_ + 1]) & b;
                      } else e = rt(0, 255 & g[_]), P--, _++;
                      if (e && (st(!1), 0 === l.avail_out)) return 0;
                    }

                    return st(4 == t), 0 === l.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1;
                  }(e);

                  break;

                case 2:
                  a = function (t) {
                    for (var e, n, r = 0;;) {
                      if (P < 262) {
                        if (lt(), P < 262 && 0 == t) return 0;
                        if (0 === P) break;
                      }

                      if (3 <= P && (v = (v << x ^ 255 & g[_ + 2]) & b, r = 65535 & y[v], m[_ & d] = y[v], y[v] = _), k = L, A = F, L = 2, 0 !== r && k < C && (_ - r & 65535) <= f - 262 && (2 != j && (L = ht(r)), L <= 5 && (1 == j || 3 == L && 4096 < _ - F) && (L = 2)), 3 <= k && L <= k) {
                        for (n = _ + P - 3, e = rt(_ - 1 - A, k - 3), P -= k - 1, k -= 2; ++_ <= n && (v = (v << x ^ 255 & g[_ + 2]) & b, r = 65535 & y[v], m[_ & d] = y[v], y[v] = _), 0 != --k;) {
                          ;
                        }

                        if (S = 0, L = 2, _++, e && (st(!1), 0 === l.avail_out)) return 0;
                      } else if (0 !== S) {
                        if ((e = rt(0, 255 & g[_ - 1])) && st(!1), _++, P--, 0 === l.avail_out) return 0;
                      } else S = 1, _++, P--;
                    }

                    return 0 !== S && (e = rt(0, 255 & g[_ - 1]), S = 0), st(4 == t), 0 === l.avail_out ? 4 == t ? 2 : 0 : 4 == t ? 3 : 1;
                  }(e);

              }

              if (2 != a && 3 != a || (h = 666), 0 == a || 2 == a) return 0 === l.avail_out && (c = -1), 0;

              if (1 == a) {
                if (1 == e) $(2, 3), tt(256, ft.static_ltree), nt(), 1 + z + 10 - W < 9 && ($(2, 3), tt(256, ft.static_ltree), nt()), z = 7;else if (at(0, 0, !1), 3 == e) for (n = 0; n < w; n++) {
                  y[n] = 0;
                }
                if (l.flush_pending(), 0 === l.avail_out) return c = -1, 0;
              }
            }

            return 4 != e ? 0 : 1;
          };
        }

        function i() {
          this.next_in_index = 0, this.next_out_index = 0, this.avail_in = 0, this.total_in = 0, this.avail_out = 0, this.total_out = 0;
        }

        i.prototype = {
          deflateInit: function deflateInit(t, e) {
            return this.dstate = new r(), e || (e = d), this.dstate.deflateInit(this, t, e);
          },
          deflate: function deflate(t) {
            return this.dstate ? this.dstate.deflate(this, t) : -2;
          },
          deflateEnd: function deflateEnd() {
            if (!this.dstate) return -2;
            var t = this.dstate.deflateEnd();
            return this.dstate = null, t;
          },
          deflateParams: function deflateParams(t, e) {
            return this.dstate ? this.dstate.deflateParams(this, t, e) : -2;
          },
          deflateSetDictionary: function deflateSetDictionary(t, e) {
            return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : -2;
          },
          read_buf: function read_buf(t, e, n) {
            var r = this.avail_in;
            return n < r && (r = n), 0 === r ? 0 : (this.avail_in -= r, t.set(this.next_in.subarray(this.next_in_index, this.next_in_index + r), e), this.next_in_index += r, this.total_in += r, r);
          },
          flush_pending: function flush_pending() {
            var t = this,
                e = t.dstate.pending;
            e > t.avail_out && (e = t.avail_out), 0 !== e && (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + e), t.next_out_index), t.next_out_index += e, t.dstate.pending_out += e, t.total_out += e, t.avail_out -= e, t.dstate.pending -= e, 0 === t.dstate.pending && (t.dstate.pending_out = 0));
          }
        };
        var o = t.zip || t;

        o.Deflater = o._jzlib_Deflater = function (t) {
          var s = new i(),
              l = new Uint8Array(512),
              e = t ? t.level : -1;
          void 0 === e && (e = -1), s.deflateInit(e), s.next_out = l, this.append = function (t, e) {
            var n,
                r = [],
                i = 0,
                o = 0,
                a = 0;

            if (t.length) {
              s.next_in_index = 0, s.next_in = t, s.avail_in = t.length;

              do {
                if (s.next_out_index = 0, s.avail_out = 512, 0 != s.deflate(0)) throw new Error("deflating: " + s.msg);
                s.next_out_index && (512 == s.next_out_index ? r.push(new Uint8Array(l)) : r.push(new Uint8Array(l.subarray(0, s.next_out_index)))), a += s.next_out_index, e && 0 < s.next_in_index && s.next_in_index != i && (e(s.next_in_index), i = s.next_in_index);
              } while (0 < s.avail_in || 0 === s.avail_out);

              return n = new Uint8Array(a), r.forEach(function (t) {
                n.set(t, o), o += t.length;
              }), n;
            }
          }, this.flush = function () {
            var t,
                e,
                n = [],
                r = 0,
                i = 0;

            do {
              if (s.next_out_index = 0, s.avail_out = 512, 1 != (t = s.deflate(4)) && 0 != t) throw new Error("deflating: " + s.msg);
              0 < 512 - s.avail_out && n.push(new Uint8Array(l.subarray(0, s.next_out_index))), i += s.next_out_index;
            } while (0 < s.avail_in || 0 === s.avail_out);

            return s.deflateEnd(), e = new Uint8Array(i), n.forEach(function (t) {
              e.set(t, r), r += t.length;
            }), e;
          };
        };
      }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()), ("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()).RGBColor = function (t) {
        var e;
        t = t || "", this.ok = !1, "#" == t.charAt(0) && (t = t.substr(1, 6)), t = (t = t.replace(/ /g, "")).toLowerCase();
        var n = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "00ffff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000000",
          blanchedalmond: "ffebcd",
          blue: "0000ff",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "00ffff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dodgerblue: "1e90ff",
          feldspar: "d19275",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "ff00ff",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgrey: "d3d3d3",
          lightgreen: "90ee90",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslateblue: "8470ff",
          lightslategray: "778899",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "00ff00",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "ff00ff",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370d8",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "d87093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          red: "ff0000",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          violetred: "d02090",
          wheat: "f5deb3",
          white: "ffffff",
          whitesmoke: "f5f5f5",
          yellow: "ffff00",
          yellowgreen: "9acd32"
        };

        for (var r in n) {
          t == r && (t = n[r]);
        }

        for (var i = [{
          re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
          example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
          process: function process(t) {
            return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
          }
        }, {
          re: /^(\w{2})(\w{2})(\w{2})$/,
          example: ["#00ff00", "336699"],
          process: function process(t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
          }
        }, {
          re: /^(\w{1})(\w{1})(\w{1})$/,
          example: ["#fb0", "f0f"],
          process: function process(t) {
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
          }
        }], o = 0; o < i.length; o++) {
          var a = i[o].re,
              s = i[o].process,
              l = a.exec(t);
          l && (e = s(l), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0);
        }

        this.r = this.r < 0 || isNaN(this.r) ? 0 : 255 < this.r ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : 255 < this.g ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : 255 < this.b ? 255 : this.b, this.toRGB = function () {
          return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        }, this.toHex = function () {
          var t = this.r.toString(16),
              e = this.g.toString(16),
              n = this.b.toString(16);
          return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == n.length && (n = "0" + n), "#" + t + e + n;
        };
      }, function (t) {
        var n = "+".charCodeAt(0),
            r = "/".charCodeAt(0),
            i = "0".charCodeAt(0),
            o = "a".charCodeAt(0),
            a = "A".charCodeAt(0),
            s = "-".charCodeAt(0),
            l = "_".charCodeAt(0),
            u = function u(t) {
          var e = t.charCodeAt(0);
          return e === n || e === s ? 62 : e === r || e === l ? 63 : e < i ? -1 : e < i + 10 ? e - i + 26 + 26 : e < a + 26 ? e - a : e < o + 26 ? e - o + 26 : void 0;
        };

        t.API.TTFFont = function () {
          function i(t, e, n) {
            var r;

            if (this.rawData = t, r = this.contents = new J(t), this.contents.pos = 4, "ttcf" === r.readString(4)) {
              if (!e) throw new Error("Must specify a font name for TTC files.");
              throw new Error("Font " + e + " not found in TTC file.");
            }

            r.pos = 0, this.parse(), this.subset = new P(this), this.registerTTF();
          }

          return i.open = function (t, e, n, r) {
            if ("string" != typeof n) throw new Error("Invalid argument supplied in TTFFont.open");
            return new i(function (t) {
              var e, n, r, i, o, a;
              if (0 < t.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
              var s = t.length;
              o = "=" === t.charAt(s - 2) ? 2 : "=" === t.charAt(s - 1) ? 1 : 0, a = new Uint8Array(3 * t.length / 4 - o), r = 0 < o ? t.length - 4 : t.length;
              var l = 0;

              function h(t) {
                a[l++] = t;
              }

              for (n = e = 0; e < r; e += 4, n += 3) {
                h((16711680 & (i = u(t.charAt(e)) << 18 | u(t.charAt(e + 1)) << 12 | u(t.charAt(e + 2)) << 6 | u(t.charAt(e + 3)))) >> 16), h((65280 & i) >> 8), h(255 & i);
              }

              return 2 === o ? h(255 & (i = u(t.charAt(e)) << 2 | u(t.charAt(e + 1)) >> 4)) : 1 === o && (h((i = u(t.charAt(e)) << 10 | u(t.charAt(e + 1)) << 4 | u(t.charAt(e + 2)) >> 2) >> 8 & 255), h(255 & i)), a;
            }(n), e, r);
          }, i.prototype.parse = function () {
            return this.directory = new e(this.contents), this.head = new p(this), this.name = new b(this), this.cmap = new y(this), this.toUnicode = new Map(), this.hhea = new g(this), this.maxp = new x(this), this.hmtx = new N(this), this.post = new v(this), this.os2 = new m(this), this.loca = new F(this), this.glyf = new A(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
          }, i.prototype.registerTTF = function () {
            var i, t, e, n, r;
            if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function () {
              var t, e, n, r;

              for (r = [], t = 0, e = (n = this.bbox).length; t < e; t++) {
                i = n[t], r.push(Math.round(i * this.scaleFactor));
              }

              return r;
            }.call(this), this.stemV = 0, this.post.exists ? (e = 255 & (n = this.post.italic_angle), !0 & (t = n >> 16) && (t = -(1 + (65535 ^ t))), this.italicAngle = +(t + "." + e)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (r = this.familyClass) || 2 === r || 3 === r || 4 === r || 5 === r || 7 === r, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
          }, i.prototype.characterToGlyph = function (t) {
            var e;
            return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0;
          }, i.prototype.widthOfGlyph = function (t) {
            var e;
            return e = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * e;
          }, i.prototype.widthOfString = function (t, e, n) {
            var r, i, o, a, s;

            for (i = a = o = 0, s = (t = "" + t).length; 0 <= s ? a < s : s < a; i = 0 <= s ? ++a : --a) {
              r = t.charCodeAt(i), o += this.widthOfGlyph(this.characterToGlyph(r)) + n * (1e3 / e) || 0;
            }

            return o * (e / 1e3);
          }, i.prototype.lineHeight = function (t, e) {
            var n;
            return null == e && (e = !1), n = e ? this.lineGap : 0, (this.ascender + n - this.decender) / 1e3 * t;
          }, i;
        }();

        var h,
            J = function () {
          function t(t) {
            this.data = null != t ? t : [], this.pos = 0, this.length = this.data.length;
          }

          return t.prototype.readByte = function () {
            return this.data[this.pos++];
          }, t.prototype.writeByte = function (t) {
            return this.data[this.pos++] = t;
          }, t.prototype.readUInt32 = function () {
            return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
          }, t.prototype.writeUInt32 = function (t) {
            return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
          }, t.prototype.readInt32 = function () {
            var t;
            return 2147483648 <= (t = this.readUInt32()) ? t - 4294967296 : t;
          }, t.prototype.writeInt32 = function (t) {
            return t < 0 && (t += 4294967296), this.writeUInt32(t);
          }, t.prototype.readUInt16 = function () {
            return this.readByte() << 8 | this.readByte();
          }, t.prototype.writeUInt16 = function (t) {
            return this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
          }, t.prototype.readInt16 = function () {
            var t;
            return 32768 <= (t = this.readUInt16()) ? t - 65536 : t;
          }, t.prototype.writeInt16 = function (t) {
            return t < 0 && (t += 65536), this.writeUInt16(t);
          }, t.prototype.readString = function (t) {
            var e, n, r;

            for (n = [], e = r = 0; 0 <= t ? r < t : t < r; e = 0 <= t ? ++r : --r) {
              n[e] = String.fromCharCode(this.readByte());
            }

            return n.join("");
          }, t.prototype.writeString = function (t) {
            var e, n, r, i;

            for (i = [], e = n = 0, r = t.length; 0 <= r ? n < r : r < n; e = 0 <= r ? ++n : --n) {
              i.push(this.writeByte(t.charCodeAt(e)));
            }

            return i;
          }, t.prototype.readShort = function () {
            return this.readInt16();
          }, t.prototype.writeShort = function (t) {
            return this.writeInt16(t);
          }, t.prototype.readLongLong = function () {
            var t, e, n, r, i, o, a, s;
            return t = this.readByte(), e = this.readByte(), n = this.readByte(), r = this.readByte(), i = this.readByte(), o = this.readByte(), a = this.readByte(), s = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ n) + 4294967296 * (255 ^ r) + 16777216 * (255 ^ i) + 65536 * (255 ^ o) + 256 * (255 ^ a) + (255 ^ s) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * n + 4294967296 * r + 16777216 * i + 65536 * o + 256 * a + s;
          }, t.prototype.writeLongLong = function (t) {
            var e, n;
            return e = Math.floor(t / 4294967296), n = 4294967295 & t, this.writeByte(e >> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e), this.writeByte(n >> 24 & 255), this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n);
          }, t.prototype.readInt = function () {
            return this.readInt32();
          }, t.prototype.writeInt = function (t) {
            return this.writeInt32(t);
          }, t.prototype.read = function (t) {
            var e, n;

            for (e = [], n = 0; 0 <= t ? n < t : t < n; 0 <= t ? ++n : --n) {
              e.push(this.readByte());
            }

            return e;
          }, t.prototype.write = function (t) {
            var e, n, r, i;

            for (i = [], n = 0, r = t.length; n < r; n++) {
              e = t[n], i.push(this.writeByte(e));
            }

            return i;
          }, t;
        }(),
            e = function () {
          var d;

          function t(t) {
            var e, n, r;

            for (this.scalarType = t.readInt(), this.tableCount = t.readShort(), this.searchRange = t.readShort(), this.entrySelector = t.readShort(), this.rangeShift = t.readShort(), this.tables = {}, n = 0, r = this.tableCount; 0 <= r ? n < r : r < n; 0 <= r ? ++n : --n) {
              e = {
                tag: t.readString(4),
                checksum: t.readInt(),
                offset: t.readInt(),
                length: t.readInt()
              }, this.tables[e.tag] = e;
            }
          }

          return t.prototype.encode = function (t) {
            var e, n, r, i, o, a, s, l, h, u, c, f, p;

            for (p in c = Object.keys(t).length, a = Math.log(2), h = 16 * Math.floor(Math.log(c) / a), i = Math.floor(h / a), l = 16 * c - h, (n = new J()).writeInt(this.scalarType), n.writeShort(c), n.writeShort(h), n.writeShort(i), n.writeShort(l), r = 16 * c, s = n.pos + r, o = null, f = [], t) {
              for (u = t[p], n.writeString(p), n.writeInt(d(u)), n.writeInt(s), n.writeInt(u.length), f = f.concat(u), "head" === p && (o = s), s += u.length; s % 4;) {
                f.push(0), s++;
              }
            }

            return n.write(f), e = 2981146554 - d(n.data), n.pos = o + 8, n.writeUInt32(e), n.data;
          }, d = function d(t) {
            var e, n, r, i;

            for (t = L.call(t); t.length % 4;) {
              t.push(0);
            }

            for (n = new J(t), r = e = 0, i = t.length; r < i; r += 4) {
              e += n.readUInt32();
            }

            return 4294967295 & e;
          }, t;
        }(),
            c = {}.hasOwnProperty,
            f = function f(t, e) {
          for (var n in e) {
            c.call(e, n) && (t[n] = e[n]);
          }

          function r() {
            this.constructor = t;
          }

          return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
        };

        h = function () {
          function t(t) {
            var e;
            this.file = t, e = this.file.directory.tables[this.tag], this.exists = !!e, e && (this.offset = e.offset, this.length = e.length, this.parse(this.file.contents));
          }

          return t.prototype.parse = function () {}, t.prototype.encode = function () {}, t.prototype.raw = function () {
            return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
          }, t;
        }();

        var p = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return f(e, h), e.prototype.tag = "head", e.prototype.parse = function (t) {
            return t.pos = this.offset, this.version = t.readInt(), this.revision = t.readInt(), this.checkSumAdjustment = t.readInt(), this.magicNumber = t.readInt(), this.flags = t.readShort(), this.unitsPerEm = t.readShort(), this.created = t.readLongLong(), this.modified = t.readLongLong(), this.xMin = t.readShort(), this.yMin = t.readShort(), this.xMax = t.readShort(), this.yMax = t.readShort(), this.macStyle = t.readShort(), this.lowestRecPPEM = t.readShort(), this.fontDirectionHint = t.readShort(), this.indexToLocFormat = t.readShort(), this.glyphDataFormat = t.readShort();
          }, e.prototype.encode = function (t) {
            var e;
            return (e = new J()).writeInt(this.version), e.writeInt(this.revision), e.writeInt(this.checkSumAdjustment), e.writeInt(this.magicNumber), e.writeShort(this.flags), e.writeShort(this.unitsPerEm), e.writeLongLong(this.created), e.writeLongLong(this.modified), e.writeShort(this.xMin), e.writeShort(this.yMin), e.writeShort(this.xMax), e.writeShort(this.yMax), e.writeShort(this.macStyle), e.writeShort(this.lowestRecPPEM), e.writeShort(this.fontDirectionHint), e.writeShort(t), e.writeShort(this.glyphDataFormat), e.data;
          }, e;
        }(),
            d = function () {
          function t(n, t) {
            var e, r, i, o, a, s, l, h, u, c, f, p, d, g, m, y, v, w;

            switch (this.platformID = n.readUInt16(), this.encodingID = n.readShort(), this.offset = t + n.readInt(), u = n.pos, n.pos = this.offset, this.format = n.readUInt16(), this.length = n.readUInt16(), this.language = n.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format) {
              case 0:
                for (s = m = 0; m < 256; s = ++m) {
                  this.codeMap[s] = n.readByte();
                }

                break;

              case 4:
                for (f = n.readUInt16(), c = f / 2, n.pos += 6, i = function () {
                  var t, e;

                  for (e = [], s = t = 0; 0 <= c ? t < c : c < t; s = 0 <= c ? ++t : --t) {
                    e.push(n.readUInt16());
                  }

                  return e;
                }(), n.pos += 2, d = function () {
                  var t, e;

                  for (e = [], s = t = 0; 0 <= c ? t < c : c < t; s = 0 <= c ? ++t : --t) {
                    e.push(n.readUInt16());
                  }

                  return e;
                }(), l = function () {
                  var t, e;

                  for (e = [], s = t = 0; 0 <= c ? t < c : c < t; s = 0 <= c ? ++t : --t) {
                    e.push(n.readUInt16());
                  }

                  return e;
                }(), h = function () {
                  var t, e;

                  for (e = [], s = t = 0; 0 <= c ? t < c : c < t; s = 0 <= c ? ++t : --t) {
                    e.push(n.readUInt16());
                  }

                  return e;
                }(), r = (this.length - n.pos + this.offset) / 2, a = function () {
                  var t, e;

                  for (e = [], s = t = 0; 0 <= r ? t < r : r < t; s = 0 <= r ? ++t : --t) {
                    e.push(n.readUInt16());
                  }

                  return e;
                }(), s = y = 0, w = i.length; y < w; s = ++y) {
                  for (g = i[s], e = v = p = d[s]; p <= g ? v <= g : g <= v; e = p <= g ? ++v : --v) {
                    0 === h[s] ? o = e + l[s] : 0 !== (o = a[h[s] / 2 + (e - p) - (c - s)] || 0) && (o += l[s]), this.codeMap[e] = 65535 & o;
                  }
                }

            }

            n.pos = u;
          }

          return t.encode = function (t, e) {
            var n, r, i, o, a, s, l, h, u, c, f, p, d, g, m, y, v, w, b, x, N, L, A, S, _, F, P, k, I, C, B, j, E, M, O, q, T, R, D, U, z, H, W, V, G, Y;

            switch (k = new J(), o = Object.keys(t).sort(function (t, e) {
              return t - e;
            }), e) {
              case "macroman":
                for (d = 0, g = function () {
                  var t, e;

                  for (e = [], p = t = 0; t < 256; p = ++t) {
                    e.push(0);
                  }

                  return e;
                }(), y = {
                  0: 0
                }, i = {}, I = 0, E = o.length; I < E; I++) {
                  null == y[W = t[r = o[I]]] && (y[W] = ++d), i[r] = {
                    old: t[r],
                    new: y[t[r]]
                  }, g[r] = y[t[r]];
                }

                return k.writeUInt16(1), k.writeUInt16(0), k.writeUInt32(12), k.writeUInt16(0), k.writeUInt16(262), k.writeUInt16(0), k.write(g), {
                  charMap: i,
                  subtable: k.data,
                  maxGlyphID: d + 1
                };

              case "unicode":
                for (F = [], u = [], y = {}, n = {}, m = l = null, C = v = 0, M = o.length; C < M; C++) {
                  null == y[b = t[r = o[C]]] && (y[b] = ++v), n[r] = {
                    old: b,
                    new: y[b]
                  }, a = y[b] - r, null != m && a === l || (m && u.push(m), F.push(r), l = a), m = r;
                }

                for (m && u.push(m), u.push(65535), F.push(65535), S = 2 * (A = F.length), L = 2 * Math.pow(Math.log(A) / Math.LN2, 2), c = Math.log(L / 2) / Math.LN2, N = 2 * A - L, s = [], x = [], f = [], p = B = 0, O = F.length; B < O; p = ++B) {
                  if (_ = F[p], h = u[p], 65535 === _) {
                    s.push(0), x.push(0);
                    break;
                  }

                  if (32768 <= _ - (P = n[_].new)) for (s.push(0), x.push(2 * (f.length + A - p)), r = j = _; _ <= h ? j <= h : h <= j; r = _ <= h ? ++j : --j) {
                    f.push(n[r].new);
                  } else s.push(P - _), x.push(0);
                }

                for (k.writeUInt16(3), k.writeUInt16(1), k.writeUInt32(12), k.writeUInt16(4), k.writeUInt16(16 + 8 * A + 2 * f.length), k.writeUInt16(0), k.writeUInt16(S), k.writeUInt16(L), k.writeUInt16(c), k.writeUInt16(N), z = 0, q = u.length; z < q; z++) {
                  r = u[z], k.writeUInt16(r);
                }

                for (k.writeUInt16(0), H = 0, T = F.length; H < T; H++) {
                  r = F[H], k.writeUInt16(r);
                }

                for (V = 0, R = s.length; V < R; V++) {
                  a = s[V], k.writeUInt16(a);
                }

                for (G = 0, D = x.length; G < D; G++) {
                  w = x[G], k.writeUInt16(w);
                }

                for (Y = 0, U = f.length; Y < U; Y++) {
                  d = f[Y], k.writeUInt16(d);
                }

                return {
                  charMap: n,
                  subtable: k.data,
                  maxGlyphID: v + 1
                };
            }
          }, t;
        }(),
            y = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return f(e, h), e.prototype.tag = "cmap", e.prototype.parse = function (t) {
            var e, n, r;

            for (t.pos = this.offset, this.version = t.readUInt16(), n = t.readUInt16(), this.tables = [], this.unicode = null, r = 0; 0 <= n ? r < n : n < r; 0 <= n ? ++r : --r) {
              e = new d(t, this.offset), this.tables.push(e), e.isUnicode && null == this.unicode && (this.unicode = e);
            }

            return !0;
          }, e.encode = function (t, e) {
            var n, r;
            return null == e && (e = "macroman"), n = d.encode(t, e), (r = new J()).writeUInt16(0), r.writeUInt16(1), n.table = r.data.concat(n.subtable), n;
          }, e;
        }(),
            g = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return f(e, h), e.prototype.tag = "hhea", e.prototype.parse = function (t) {
            return t.pos = this.offset, this.version = t.readInt(), this.ascender = t.readShort(), this.decender = t.readShort(), this.lineGap = t.readShort(), this.advanceWidthMax = t.readShort(), this.minLeftSideBearing = t.readShort(), this.minRightSideBearing = t.readShort(), this.xMaxExtent = t.readShort(), this.caretSlopeRise = t.readShort(), this.caretSlopeRun = t.readShort(), this.caretOffset = t.readShort(), t.pos += 8, this.metricDataFormat = t.readShort(), this.numberOfMetrics = t.readUInt16();
          }, e;
        }(),
            m = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return f(e, h), e.prototype.tag = "OS/2", e.prototype.parse = function (n) {
            if (n.pos = this.offset, this.version = n.readUInt16(), this.averageCharWidth = n.readShort(), this.weightClass = n.readUInt16(), this.widthClass = n.readUInt16(), this.type = n.readShort(), this.ySubscriptXSize = n.readShort(), this.ySubscriptYSize = n.readShort(), this.ySubscriptXOffset = n.readShort(), this.ySubscriptYOffset = n.readShort(), this.ySuperscriptXSize = n.readShort(), this.ySuperscriptYSize = n.readShort(), this.ySuperscriptXOffset = n.readShort(), this.ySuperscriptYOffset = n.readShort(), this.yStrikeoutSize = n.readShort(), this.yStrikeoutPosition = n.readShort(), this.familyClass = n.readShort(), this.panose = function () {
              var t, e;

              for (e = [], t = 0; t < 10; ++t) {
                e.push(n.readByte());
              }

              return e;
            }(), this.charRange = function () {
              var t, e;

              for (e = [], t = 0; t < 4; ++t) {
                e.push(n.readInt());
              }

              return e;
            }(), this.vendorID = n.readString(4), this.selection = n.readShort(), this.firstCharIndex = n.readShort(), this.lastCharIndex = n.readShort(), 0 < this.version && (this.ascent = n.readShort(), this.descent = n.readShort(), this.lineGap = n.readShort(), this.winAscent = n.readShort(), this.winDescent = n.readShort(), this.codePageRange = function () {
              var t, e;

              for (e = [], t = 0; t < 2; ++t) {
                e.push(n.readInt());
              }

              return e;
            }(), 1 < this.version)) return this.xHeight = n.readShort(), this.capHeight = n.readShort(), this.defaultChar = n.readShort(), this.breakChar = n.readShort(), this.maxContext = n.readShort();
          }, e;
        }(),
            v = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return f(e, h), e.prototype.tag = "post", e.prototype.parse = function (r) {
            var t, e, n, i;

            switch (r.pos = this.offset, this.format = r.readInt(), this.italicAngle = r.readInt(), this.underlinePosition = r.readShort(), this.underlineThickness = r.readShort(), this.isFixedPitch = r.readInt(), this.minMemType42 = r.readInt(), this.maxMemType42 = r.readInt(), this.minMemType1 = r.readInt(), this.maxMemType1 = r.readInt(), this.format) {
              case 65536:
                break;

              case 131072:
                for (e = r.readUInt16(), this.glyphNameIndex = [], n = 0; 0 <= e ? n < e : e < n; 0 <= e ? ++n : --n) {
                  this.glyphNameIndex.push(r.readUInt16());
                }

                for (this.names = [], i = []; r.pos < this.offset + this.length;) {
                  t = r.readByte(), i.push(this.names.push(r.readString(t)));
                }

                return i;

              case 151552:
                return e = r.readUInt16(), this.offsets = r.read(e);

              case 196608:
                break;

              case 262144:
                return this.map = function () {
                  var t, e, n;

                  for (n = [], t = 0, e = this.file.maxp.numGlyphs; 0 <= e ? t < e : e < t; 0 <= e ? ++t : --t) {
                    n.push(r.readUInt32());
                  }

                  return n;
                }.call(this);
            }
          }, e;
        }(),
            w = function w(t, e) {
          this.raw = t, this.length = t.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
        },
            b = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return f(e, h), e.prototype.tag = "name", e.prototype.parse = function (t) {
            var e, n, r, i, o, a, s, l, h, u, c, f;

            for (t.pos = this.offset, t.readShort(), e = t.readShort(), a = t.readShort(), n = [], i = h = 0; 0 <= e ? h < e : e < h; i = 0 <= e ? ++h : --h) {
              n.push({
                platformID: t.readShort(),
                encodingID: t.readShort(),
                languageID: t.readShort(),
                nameID: t.readShort(),
                length: t.readShort(),
                offset: this.offset + a + t.readShort()
              });
            }

            for (s = {}, i = u = 0, c = n.length; u < c; i = ++u) {
              r = n[i], t.pos = r.offset, l = t.readString(r.length), o = new w(l, r), null == s[f = r.nameID] && (s[f] = []), s[r.nameID].push(o);
            }

            this.strings = s, this.copyright = s[0], this.fontFamily = s[1], this.fontSubfamily = s[2], this.uniqueSubfamily = s[3], this.fontName = s[4], this.version = s[5];

            try {
              this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
            } catch (t) {
              this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
            }

            return this.trademark = s[7], this.manufacturer = s[8], this.designer = s[9], this.description = s[10], this.vendorUrl = s[11], this.designerUrl = s[12], this.license = s[13], this.licenseUrl = s[14], this.preferredFamily = s[15], this.preferredSubfamily = s[17], this.compatibleFull = s[18], this.sampleText = s[19];
          }, e;
        }(),
            x = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return f(e, h), e.prototype.tag = "maxp", e.prototype.parse = function (t) {
            return t.pos = this.offset, this.version = t.readInt(), this.numGlyphs = t.readUInt16(), this.maxPoints = t.readUInt16(), this.maxContours = t.readUInt16(), this.maxCompositePoints = t.readUInt16(), this.maxComponentContours = t.readUInt16(), this.maxZones = t.readUInt16(), this.maxTwilightPoints = t.readUInt16(), this.maxStorage = t.readUInt16(), this.maxFunctionDefs = t.readUInt16(), this.maxInstructionDefs = t.readUInt16(), this.maxStackElements = t.readUInt16(), this.maxSizeOfInstructions = t.readUInt16(), this.maxComponentElements = t.readUInt16(), this.maxComponentDepth = t.readUInt16();
          }, e;
        }(),
            N = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return f(e, h), e.prototype.tag = "hmtx", e.prototype.parse = function (n) {
            var t, r, i, e, o, a, s;

            for (n.pos = this.offset, this.metrics = [], e = 0, a = this.file.hhea.numberOfMetrics; 0 <= a ? e < a : a < e; 0 <= a ? ++e : --e) {
              this.metrics.push({
                advance: n.readUInt16(),
                lsb: n.readInt16()
              });
            }

            for (r = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function () {
              var t, e;

              for (e = [], t = 0; 0 <= r ? t < r : r < t; 0 <= r ? ++t : --t) {
                e.push(n.readInt16());
              }

              return e;
            }(), this.widths = function () {
              var t, e, n, r;

              for (r = [], t = 0, e = (n = this.metrics).length; t < e; t++) {
                i = n[t], r.push(i.advance);
              }

              return r;
            }.call(this), t = this.widths[this.widths.length - 1], s = [], o = 0; 0 <= r ? o < r : r < o; 0 <= r ? ++o : --o) {
              s.push(this.widths.push(t));
            }

            return s;
          }, e.prototype.forGlyph = function (t) {
            return t in this.metrics ? this.metrics[t] : {
              advance: this.metrics[this.metrics.length - 1].advance,
              lsb: this.leftSideBearings[t - this.metrics.length]
            };
          }, e;
        }(),
            L = [].slice,
            A = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return f(e, h), e.prototype.tag = "glyf", e.prototype.parse = function (t) {
            return this.cache = {};
          }, e.prototype.glyphFor = function (t) {
            var e, n, r, i, o, a, s, l, h, u;
            return (t = t) in this.cache ? this.cache[t] : (i = this.file.loca, e = this.file.contents, n = i.indexOf(t), 0 === (r = i.lengthOf(t)) ? this.cache[t] = null : (e.pos = this.offset + n, o = (a = new J(e.read(r))).readShort(), l = a.readShort(), u = a.readShort(), s = a.readShort(), h = a.readShort(), this.cache[t] = -1 === o ? new _(a, l, u, s, h) : new S(a, o, l, u, s, h), this.cache[t]));
          }, e.prototype.encode = function (t, e, n) {
            var r, i, o, a, s;

            for (o = [], i = [], a = 0, s = e.length; a < s; a++) {
              r = t[e[a]], i.push(o.length), r && (o = o.concat(r.encode(n)));
            }

            return i.push(o.length), {
              table: o,
              offsets: i
            };
          }, e;
        }(),
            S = function () {
          function t(t, e, n, r, i, o) {
            this.raw = t, this.numberOfContours = e, this.xMin = n, this.yMin = r, this.xMax = i, this.yMax = o, this.compound = !1;
          }

          return t.prototype.encode = function () {
            return this.raw.data;
          }, t;
        }(),
            _ = function () {
          function t(t, e, n, r, i) {
            var o, a;

            for (this.raw = t, this.xMin = e, this.yMin = n, this.xMax = r, this.yMax = i, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], o = this.raw; a = o.readShort(), this.glyphOffsets.push(o.pos), this.glyphIDs.push(o.readShort()), 32 & a;) {
              o.pos += 1 & a ? 4 : 2, 128 & a ? o.pos += 8 : 64 & a ? o.pos += 4 : 8 & a && (o.pos += 2);
            }
          }

          return 1, 8, 32, 64, 128, t.prototype.encode = function (t) {
            var e, n, r, i, o;

            for (n = new J(L.call(this.raw.data)), e = r = 0, i = (o = this.glyphIDs).length; r < i; e = ++r) {
              o[e], n.pos = this.glyphOffsets[e];
            }

            return n.data;
          }, t;
        }(),
            F = function (t) {
          function e() {
            return e.__super__.constructor.apply(this, arguments);
          }

          return f(e, h), e.prototype.tag = "loca", e.prototype.parse = function (r) {
            var t;
            return r.pos = this.offset, t = this.file.head.indexToLocFormat, this.offsets = 0 === t ? function () {
              var t, e, n;

              for (n = [], t = 0, e = this.length; t < e; t += 2) {
                n.push(2 * r.readUInt16());
              }

              return n;
            }.call(this) : function () {
              var t, e, n;

              for (n = [], t = 0, e = this.length; t < e; t += 4) {
                n.push(r.readUInt32());
              }

              return n;
            }.call(this);
          }, e.prototype.indexOf = function (t) {
            return this.offsets[t];
          }, e.prototype.lengthOf = function (t) {
            return this.offsets[t + 1] - this.offsets[t];
          }, e.prototype.encode = function (t, e) {
            for (var n = new Uint32Array(this.offsets.length), r = 0, i = 0, o = 0; o < n.length; ++o) {
              if (n[o] = r, i < e.length && e[i] == o) {
                ++i, n[o] = r;
                var a = this.offsets[o],
                    s = this.offsets[o + 1] - a;
                0 < s && (r += s);
              }
            }

            for (var l = new Array(4 * n.length), h = 0; h < n.length; ++h) {
              l[4 * h + 3] = 255 & n[h], l[4 * h + 2] = (65280 & n[h]) >> 8, l[4 * h + 1] = (16711680 & n[h]) >> 16, l[4 * h] = (4278190080 & n[h]) >> 24;
            }

            return l;
          }, e;
        }(),
            P = function () {
          function t(t) {
            this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33;
          }

          return t.prototype.generateCmap = function () {
            var t, e, n, r, i;

            for (e in r = this.font.cmap.tables[0].codeMap, t = {}, i = this.subset) {
              n = i[e], t[e] = r[n];
            }

            return t;
          }, t.prototype.glyphsFor = function (t) {
            var e, n, r, i, o, a, s;

            for (r = {}, o = 0, a = t.length; o < a; o++) {
              r[i = t[o]] = this.font.glyf.glyphFor(i);
            }

            for (i in e = [], r) {
              (null != (n = r[i]) ? n.compound : void 0) && e.push.apply(e, n.glyphIDs);
            }

            if (0 < e.length) for (i in s = this.glyphsFor(e)) {
              n = s[i], r[i] = n;
            }
            return r;
          }, t.prototype.encode = function (t, e) {
            var n, r, i, o, a, s, l, h, u, c, f, p, d, g, m;

            for (r in n = y.encode(this.generateCmap(), "unicode"), o = this.glyphsFor(t), f = {
              0: 0
            }, m = n.charMap) {
              f[(s = m[r]).old] = s.new;
            }

            for (p in c = n.maxGlyphID, o) {
              p in f || (f[p] = c++);
            }

            return h = function (t) {
              var e, n;

              for (e in n = {}, t) {
                n[t[e]] = e;
              }

              return n;
            }(f), u = Object.keys(h).sort(function (t, e) {
              return t - e;
            }), d = function () {
              var t, e, n;

              for (n = [], t = 0, e = u.length; t < e; t++) {
                a = u[t], n.push(h[a]);
              }

              return n;
            }(), i = this.font.glyf.encode(o, d, f), l = this.font.loca.encode(i.offsets, d), g = {
              cmap: this.font.cmap.raw(),
              glyf: i.table,
              loca: l,
              hmtx: this.font.hmtx.raw(),
              hhea: this.font.hhea.raw(),
              maxp: this.font.maxp.raw(),
              post: this.font.post.raw(),
              name: this.font.name.raw(),
              head: this.font.head.encode(e)
            }, this.font.os2.exists && (g["OS/2"] = this.font.os2.raw()), this.font.directory.encode(g);
          }, t;
        }();

        t.API.PDFObject = function () {
          var o;

          function a() {}

          return o = function o(t, e) {
            return (Array(e + 1).join("0") + t).slice(-e);
          }, a.convert = function (r) {
            var i, t, e, n;
            if (Array.isArray(r)) return "[" + function () {
              var t, e, n;

              for (n = [], t = 0, e = r.length; t < e; t++) {
                i = r[t], n.push(a.convert(i));
              }

              return n;
            }().join(" ") + "]";
            if ("string" == typeof r) return "/" + r;
            if (null != r ? r.isString : void 0) return "(" + r + ")";
            if (r instanceof Date) return "(D:" + o(r.getUTCFullYear(), 4) + o(r.getUTCMonth(), 2) + o(r.getUTCDate(), 2) + o(r.getUTCHours(), 2) + o(r.getUTCMinutes(), 2) + o(r.getUTCSeconds(), 2) + "Z)";
            if ("[object Object]" !== {}.toString.call(r)) return "" + r;

            for (t in e = ["<<"], r) {
              n = r[t], e.push("/" + t + " " + a.convert(n));
            }

            return e.push(">>"), e.join("\n");
          }, a;
        }();
      }(lt),
      /*
        # PNG.js
        # Copyright (c) 2011 Devon Govett
        # MIT LICENSE
        # 
        # 
        */
      Nt = "undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")(), Lt = function () {
        var h, n, r;

        function i(t) {
          var e, n, r, i, o, a, s, l, h, u, c, f, p, d;

          for (this.data = t, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, a = null;;) {
            switch (e = this.readUInt32(), h = function () {
              var t, e;

              for (e = [], t = 0; t < 4; ++t) {
                e.push(String.fromCharCode(this.data[this.pos++]));
              }

              return e;
            }.call(this).join("")) {
              case "IHDR":
                this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
                break;

              case "acTL":
                this.animation = {
                  numFrames: this.readUInt32(),
                  numPlays: this.readUInt32() || 1 / 0,
                  frames: []
                };
                break;

              case "PLTE":
                this.palette = this.read(e);
                break;

              case "fcTL":
                a && this.animation.frames.push(a), this.pos += 4, a = {
                  width: this.readUInt32(),
                  height: this.readUInt32(),
                  xOffset: this.readUInt32(),
                  yOffset: this.readUInt32()
                }, o = this.readUInt16(), i = this.readUInt16() || 100, a.delay = 1e3 * o / i, a.disposeOp = this.data[this.pos++], a.blendOp = this.data[this.pos++], a.data = [];
                break;

              case "IDAT":
              case "fdAT":
                for ("fdAT" === h && (this.pos += 4, e -= 4), t = (null != a ? a.data : void 0) || this.imgData, f = 0; 0 <= e ? f < e : e < f; 0 <= e ? ++f : --f) {
                  t.push(this.data[this.pos++]);
                }

                break;

              case "tRNS":
                switch (this.transparency = {}, this.colorType) {
                  case 3:
                    if (r = this.palette.length / 3, this.transparency.indexed = this.read(e), this.transparency.indexed.length > r) throw new Error("More transparent colors than palette size");
                    if (0 < (u = r - this.transparency.indexed.length)) for (p = 0; 0 <= u ? p < u : u < p; 0 <= u ? ++p : --p) {
                      this.transparency.indexed.push(255);
                    }
                    break;

                  case 0:
                    this.transparency.grayscale = this.read(e)[0];
                    break;

                  case 2:
                    this.transparency.rgb = this.read(e);
                }

                break;

              case "tEXt":
                s = (c = this.read(e)).indexOf(0), l = String.fromCharCode.apply(String, c.slice(0, s)), this.text[l] = String.fromCharCode.apply(String, c.slice(s + 1));
                break;

              case "IEND":
                return a && this.animation.frames.push(a), this.colors = function () {
                  switch (this.colorType) {
                    case 0:
                    case 3:
                    case 4:
                      return 1;

                    case 2:
                    case 6:
                      return 3;
                  }
                }.call(this), this.hasAlphaChannel = 4 === (d = this.colorType) || 6 === d, n = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * n, this.colorSpace = function () {
                  switch (this.colors) {
                    case 1:
                      return "DeviceGray";

                    case 3:
                      return "DeviceRGB";
                  }
                }.call(this), void (this.imgData = new Uint8Array(this.imgData));

              default:
                this.pos += e;
            }

            if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
          }
        }

        i.load = function (t, e, n) {
          var r;
          return "function" == typeof e && (n = e), (r = new XMLHttpRequest()).open("GET", t, !0), r.responseType = "arraybuffer", r.onload = function () {
            var t;
            return t = new i(new Uint8Array(r.response || r.mozResponseArrayBuffer)), "function" == typeof (null != e ? e.getContext : void 0) && t.render(e), "function" == typeof n ? n(t) : void 0;
          }, r.send(null);
        }, i.prototype.read = function (t) {
          var e, n;

          for (n = [], e = 0; 0 <= t ? e < t : t < e; 0 <= t ? ++e : --e) {
            n.push(this.data[this.pos++]);
          }

          return n;
        }, i.prototype.readUInt32 = function () {
          return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
        }, i.prototype.readUInt16 = function () {
          return this.data[this.pos++] << 8 | this.data[this.pos++];
        }, i.prototype.decodePixels = function (C) {
          var B = this.pixelBitlength / 8,
              j = new Uint8Array(this.width * this.height * B),
              E = 0,
              M = this;
          if (null == C && (C = this.imgData), 0 === C.length) return new Uint8Array(0);

          function t(t, e, n, r) {
            var i,
                o,
                a,
                s,
                l,
                h,
                u,
                c,
                f,
                p,
                d,
                g,
                m,
                y,
                v,
                w,
                b,
                x,
                N,
                L,
                A,
                S = Math.ceil((M.width - t) / n),
                _ = Math.ceil((M.height - e) / r),
                F = M.width == S && M.height == _;

            for (y = B * S, g = F ? j : new Uint8Array(y * _), h = C.length, o = m = 0; m < _ && E < h;) {
              switch (C[E++]) {
                case 0:
                  for (s = b = 0; b < y; s = b += 1) {
                    g[o++] = C[E++];
                  }

                  break;

                case 1:
                  for (s = x = 0; x < y; s = x += 1) {
                    i = C[E++], l = s < B ? 0 : g[o - B], g[o++] = (i + l) % 256;
                  }

                  break;

                case 2:
                  for (s = N = 0; N < y; s = N += 1) {
                    i = C[E++], a = (s - s % B) / B, v = m && g[(m - 1) * y + a * B + s % B], g[o++] = (v + i) % 256;
                  }

                  break;

                case 3:
                  for (s = L = 0; L < y; s = L += 1) {
                    i = C[E++], a = (s - s % B) / B, l = s < B ? 0 : g[o - B], v = m && g[(m - 1) * y + a * B + s % B], g[o++] = (i + Math.floor((l + v) / 2)) % 256;
                  }

                  break;

                case 4:
                  for (s = A = 0; A < y; s = A += 1) {
                    i = C[E++], a = (s - s % B) / B, l = s < B ? 0 : g[o - B], 0 === m ? v = w = 0 : (v = g[(m - 1) * y + a * B + s % B], w = a && g[(m - 1) * y + (a - 1) * B + s % B]), u = l + v - w, c = Math.abs(u - l), p = Math.abs(u - v), d = Math.abs(u - w), f = c <= p && c <= d ? l : p <= d ? v : w, g[o++] = (i + f) % 256;
                  }

                  break;

                default:
                  throw new Error("Invalid filter algorithm: " + C[E - 1]);
              }

              if (!F) {
                var P = ((e + m * r) * M.width + t) * B,
                    k = m * y;

                for (s = 0; s < S; s += 1) {
                  for (var I = 0; I < B; I += 1) {
                    j[P++] = g[k++];
                  }

                  P += (n - 1) * B;
                }
              }

              m++;
            }
          }

          return C = (C = new kt(C)).getBytes(), 1 == M.interlaceMethod ? (t(0, 0, 8, 8), t(4, 0, 8, 8), t(0, 4, 4, 8), t(2, 0, 4, 4), t(0, 2, 2, 4), t(1, 0, 2, 2), t(0, 1, 1, 2)) : t(0, 0, 1, 1), j;
        }, i.prototype.decodePalette = function () {
          var t, e, n, r, i, o, a, s, l;

          for (n = this.palette, o = this.transparency.indexed || [], i = new Uint8Array((o.length || 0) + n.length), r = 0, n.length, e = a = t = 0, s = n.length; a < s; e = a += 3) {
            i[r++] = n[e], i[r++] = n[e + 1], i[r++] = n[e + 2], i[r++] = null != (l = o[t++]) ? l : 255;
          }

          return i;
        }, i.prototype.copyToImageData = function (t, e) {
          var n, r, i, o, a, s, l, h, u, c, f;
          if (r = this.colors, u = null, n = this.hasAlphaChannel, this.palette.length && (u = null != (f = this._decodedPalette) ? f : this._decodedPalette = this.decodePalette(), r = 4, n = !0), h = (i = t.data || t).length, a = u || e, o = s = 0, 1 === r) for (; o < h;) {
            l = u ? 4 * e[o / 4] : s, c = a[l++], i[o++] = c, i[o++] = c, i[o++] = c, i[o++] = n ? a[l++] : 255, s = l;
          } else for (; o < h;) {
            l = u ? 4 * e[o / 4] : s, i[o++] = a[l++], i[o++] = a[l++], i[o++] = a[l++], i[o++] = n ? a[l++] : 255, s = l;
          }
        }, i.prototype.decode = function () {
          var t;
          return t = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t, this.decodePixels()), t;
        };

        try {
          n = Nt.document.createElement("canvas"), r = n.getContext("2d");
        } catch (t) {
          return -1;
        }

        return h = function h(t) {
          var e;
          return r.width = t.width, r.height = t.height, r.clearRect(0, 0, t.width, t.height), r.putImageData(t, 0, 0), (e = new Image()).src = n.toDataURL(), e;
        }, i.prototype.decodeFrames = function (t) {
          var e, n, r, i, o, a, s, l;

          if (this.animation) {
            for (l = [], n = o = 0, a = (s = this.animation.frames).length; o < a; n = ++o) {
              e = s[n], r = t.createImageData(e.width, e.height), i = this.decodePixels(new Uint8Array(e.data)), this.copyToImageData(r, i), e.imageData = r, l.push(e.image = h(r));
            }

            return l;
          }
        }, i.prototype.renderFrame = function (t, e) {
          var n, r, i;
          return n = (r = this.animation.frames)[e], i = r[e - 1], 0 === e && t.clearRect(0, 0, this.width, this.height), 1 === (null != i ? i.disposeOp : void 0) ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset), 0 === n.blendOp && t.clearRect(n.xOffset, n.yOffset, n.width, n.height), t.drawImage(n.image, n.xOffset, n.yOffset);
        }, i.prototype.animate = function (n) {
          var _r,
              i,
              o,
              a,
              s,
              t,
              l = this;

          return i = 0, t = this.animation, a = t.numFrames, o = t.frames, s = t.numPlays, (_r = function r() {
            var t, e;
            if (t = i++ % a, e = o[t], l.renderFrame(n, t), 1 < a && i / a < s) return l.animation._timeout = setTimeout(_r, e.delay);
          })();
        }, i.prototype.stopAnimation = function () {
          var t;
          return clearTimeout(null != (t = this.animation) ? t._timeout : void 0);
        }, i.prototype.render = function (t) {
          var e, n;
          return t._png && t._png.stopAnimation(), t._png = this, t.width = this.width, t.height = this.height, e = t.getContext("2d"), this.animation ? (this.decodeFrames(e), this.animate(e)) : (n = e.createImageData(this.width, this.height), this.copyToImageData(n, this.decodePixels()), e.putImageData(n, 0, 0));
        }, i;
      }(), Nt.PNG = Lt;
      /*
         * Extracted from pdf.js
         * https://github.com/andreasgal/pdf.js
         *
         * Copyright (c) 2011 Mozilla Foundation
         *
         * Contributors: Andreas Gal <gal@mozilla.com>
         *               Chris G Jones <cjones@mozilla.com>
         *               Shaon Barman <shaon.barman@gmail.com>
         *               Vivien Nicolas <21@vingtetun.org>
         *               Justin D'Arcangelo <justindarc@gmail.com>
         *               Yury Delendik
         *
         * 
         */

      var Pt = function () {
        function t() {
          this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = null;
        }

        return t.prototype = {
          ensureBuffer: function ensureBuffer(t) {
            var e = this.buffer,
                n = e ? e.byteLength : 0;
            if (t < n) return e;

            for (var r = 512; r < t;) {
              r <<= 1;
            }

            for (var i = new Uint8Array(r), o = 0; o < n; ++o) {
              i[o] = e[o];
            }

            return this.buffer = i;
          },
          getByte: function getByte() {
            for (var t = this.pos; this.bufferLength <= t;) {
              if (this.eof) return null;
              this.readBlock();
            }

            return this.buffer[this.pos++];
          },
          getBytes: function getBytes(t) {
            var e = this.pos;

            if (t) {
              this.ensureBuffer(e + t);

              for (var n = e + t; !this.eof && this.bufferLength < n;) {
                this.readBlock();
              }

              var r = this.bufferLength;
              r < n && (n = r);
            } else {
              for (; !this.eof;) {
                this.readBlock();
              }

              n = this.bufferLength;
            }

            return this.pos = n, this.buffer.subarray(e, n);
          },
          lookChar: function lookChar() {
            for (var t = this.pos; this.bufferLength <= t;) {
              if (this.eof) return null;
              this.readBlock();
            }

            return String.fromCharCode(this.buffer[this.pos]);
          },
          getChar: function getChar() {
            for (var t = this.pos; this.bufferLength <= t;) {
              if (this.eof) return null;
              this.readBlock();
            }

            return String.fromCharCode(this.buffer[this.pos++]);
          },
          makeSubStream: function makeSubStream(t, e, n) {
            for (var r = t + e; this.bufferLength <= r && !this.eof;) {
              this.readBlock();
            }

            return new Stream(this.buffer, t, e, n);
          },
          skip: function skip(t) {
            t || (t = 1), this.pos += t;
          },
          reset: function reset() {
            this.pos = 0;
          }
        }, t;
      }(),
          kt = function () {
        if ("undefined" != typeof Uint32Array) {
          var k = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
              I = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]),
              C = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]),
              B = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9],
              j = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
          return (t.prototype = Object.create(Pt.prototype)).getBits = function (t) {
            for (var e, n = this.codeSize, r = this.codeBuf, i = this.bytes, o = this.bytesPos; n < t;) {
              void 0 === (e = i[o++]) && E("Bad encoding in flate stream"), r |= e << n, n += 8;
            }

            return e = r & (1 << t) - 1, this.codeBuf = r >> t, this.codeSize = n -= t, this.bytesPos = o, e;
          }, t.prototype.getCode = function (t) {
            for (var e = t[0], n = t[1], r = this.codeSize, i = this.codeBuf, o = this.bytes, a = this.bytesPos; r < n;) {
              var s;
              void 0 === (s = o[a++]) && E("Bad encoding in flate stream"), i |= s << r, r += 8;
            }

            var l = e[i & (1 << n) - 1],
                h = l >> 16,
                u = 65535 & l;
            return (0 == r || r < h || 0 == h) && E("Bad encoding in flate stream"), this.codeBuf = i >> h, this.codeSize = r - h, this.bytesPos = a, u;
          }, t.prototype.generateHuffmanTable = function (t) {
            for (var e = t.length, n = 0, r = 0; r < e; ++r) {
              t[r] > n && (n = t[r]);
            }

            for (var i = 1 << n, o = new Uint32Array(i), a = 1, s = 0, l = 2; a <= n; ++a, s <<= 1, l <<= 1) {
              for (var h = 0; h < e; ++h) {
                if (t[h] == a) {
                  var u = 0,
                      c = s;

                  for (r = 0; r < a; ++r) {
                    u = u << 1 | 1 & c, c >>= 1;
                  }

                  for (r = u; r < i; r += l) {
                    o[r] = a << 16 | h;
                  }

                  ++s;
                }
              }
            }

            return [o, n];
          }, t.prototype.readBlock = function () {
            function t(t, e, n, r, i) {
              for (var o = t.getBits(n) + r; 0 < o--;) {
                e[l++] = i;
              }
            }

            var e = this.getBits(3);

            if (1 & e && (this.eof = !0), 0 != (e >>= 1)) {
              var n, r;
              if (1 == e) n = B, r = j;else if (2 == e) {
                for (var i = this.getBits(5) + 257, o = this.getBits(5) + 1, a = this.getBits(4) + 4, s = Array(k.length), l = 0; l < a;) {
                  s[k[l++]] = this.getBits(3);
                }

                for (var h = this.generateHuffmanTable(s), u = 0, c = (l = 0, i + o), f = new Array(c); l < c;) {
                  var p = this.getCode(h);
                  16 == p ? t(this, f, 2, 3, u) : 17 == p ? t(this, f, 3, 3, u = 0) : 18 == p ? t(this, f, 7, 11, u = 0) : f[l++] = u = p;
                }

                n = this.generateHuffmanTable(f.slice(0, i)), r = this.generateHuffmanTable(f.slice(i, c));
              } else E("Unknown block type in flate stream");

              for (var d = (_ = this.buffer) ? _.length : 0, g = this.bufferLength;;) {
                var m = this.getCode(n);
                if (m < 256) d <= g + 1 && (d = (_ = this.ensureBuffer(g + 1)).length), _[g++] = m;else {
                  if (256 == m) return void (this.bufferLength = g);
                  var y = (m = I[m -= 257]) >> 16;
                  0 < y && (y = this.getBits(y));
                  u = (65535 & m) + y;
                  m = this.getCode(r), 0 < (y = (m = C[m]) >> 16) && (y = this.getBits(y));
                  var v = (65535 & m) + y;
                  d <= g + u && (d = (_ = this.ensureBuffer(g + u)).length);

                  for (var w = 0; w < u; ++w, ++g) {
                    _[g] = _[g - v];
                  }
                }
              }
            } else {
              var b,
                  x = this.bytes,
                  N = this.bytesPos;
              void 0 === (b = x[N++]) && E("Bad block header in flate stream");
              var L = b;
              void 0 === (b = x[N++]) && E("Bad block header in flate stream"), L |= b << 8, void 0 === (b = x[N++]) && E("Bad block header in flate stream");
              var A = b;
              void 0 === (b = x[N++]) && E("Bad block header in flate stream"), (A |= b << 8) != (65535 & ~L) && E("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;

              var S = this.bufferLength,
                  _ = this.ensureBuffer(S + L),
                  F = S + L;

              this.bufferLength = F;

              for (var P = S; P < F; ++P) {
                if (void 0 === (b = x[N++])) {
                  this.eof = !0;
                  break;
                }

                _[P] = b;
              }

              this.bytesPos = N;
            }
          }, t;
        }

        function E(t) {
          throw new Error(t);
        }

        function t(t) {
          var e = 0,
              n = t[e++],
              r = t[e++];
          -1 != n && -1 != r || E("Invalid header in flate stream"), 8 != (15 & n) && E("Unknown compression method in flate stream"), ((n << 8) + r) % 31 != 0 && E("Bad FCHECK in flate stream"), 32 & r && E("FDICT bit set in flate stream"), this.bytes = t, this.bytesPos = 2, this.codeSize = 0, this.codeBuf = 0, Pt.call(this);
        }
      }();

      window.tmp = kt;
    });

    try {
      module.exports = jsPDF;
    } catch (t) {}
    /***/

  },

  /***/
  "./src/app/main/apps/dislexia-prueba/dislexia-prueba.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/main/apps/dislexia-prueba/dislexia-prueba.component.ts ***!
    \************************************************************************/

  /*! exports provided: DislexiaPruebaComponent */

  /***/
  function srcAppMainAppsDislexiaPruebaDislexiaPruebaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DislexiaPruebaComponent", function () {
      return DislexiaPruebaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../@fuse/animations */
    "./src/@fuse/animations/index.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        delay: "100ms",
        y: "25px"
      };
    };

    var _c1 = function _c1(a1) {
      return {
        value: "*",
        params: a1
      };
    };

    var _c2 = function _c2() {
      return {
        value: "80"
      };
    };

    var _c3 = function _c3() {
      return {
        y: "80%"
      };
    };

    var DislexiaPruebaComponent =
    /*#__PURE__*/
    function () {
      function DislexiaPruebaComponent() {
        _classCallCheck(this, DislexiaPruebaComponent);
      }

      _createClass(DislexiaPruebaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DislexiaPruebaComponent;
    }();

    DislexiaPruebaComponent.ɵfac = function DislexiaPruebaComponent_Factory(t) {
      return new (t || DislexiaPruebaComponent)();
    };

    DislexiaPruebaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DislexiaPruebaComponent,
      selectors: [["app-dislexia-prueba"]],
      decls: 37,
      vars: 10,
      consts: [["id", "app-videos", 1, "page-layout", "simple"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "header", "accent", "p-16", "p-sm-24"], [1, "hero-text"], [1, "content", "p-24"], ["fxLayout", "column", "fxLayoutAlign", "center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", 1, "courses"], ["fxFlex", "100", "fxFlex.gt-xs", "80", "fxFlex.gt-sm", "100", 1, "course"], [1, "col-md-12"], [1, "card-body"], ["align", "justify", 2, "font-size", "18px", "color", "white"], [1, "row"], ["align", "center", 1, "col-sm-12"], ["mat-button", "", "color", "warn", "routerLink", "/apps/prediagnostico/fonologica", 2, "background-color", "#1c5fc4", "color", "white"]],
      template: function DislexiaPruebaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " PRE DIAGN\xD3STICO DE DISLEXIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " El pre diagn\xF3stico del programa tiene una duraci\xF3n aproximadamente de 25 minutos, indica si el ni\xF1o esta en riesgo de dislexia fonol\xF3gica, dislexia profunda o dislexia superficial y visual, haciendo una recomendaci\xF3n de acudir con un especialista para que realice un diagn\xF3stico formal y, si es necesario, el menor comience un tratamiento. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "La edad recomendada de uso del pre diagnostico es de 7 a 12 a\xF1os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Para una correcta evaluaci\xF3n es necesario que exista la supervisi\xF3n de un docente tutor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "De igual manera es importante evitar distracciones hasta la finalizaci\xF3n de la evaluaci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " El Pre- Diagn\xF3stico esta basado en la aplicaci\xF3n Deslixate para tel\xE9fonos m\xF3viles. Dentro del Pre-Diagnostico se evaluar\xE1n los siguientes tipos de Dislexia: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Dislexia Fonol\xF3gica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Dislexia Visual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Test Completo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3)));
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\napp-cuentos #photos-videos .period .period-title {\n  margin-bottom: 24px;\n}\napp-cuentos #photos-videos .period .period-title .name {\n  font-size: 20px;\n}\napp-cuentos #photos-videos .period .period-title .info {\n  margin-left: 16px;\n  font-size: 15px;\n}\napp-cuentos #photos-videos .period .period-media {\n  margin-bottom: 16px;\n}\napp-cuentos #photos-videos .period .period-media .media {\n  position: relative;\n  margin: 0 16px 16px 0;\n  border-radius: 4px;\n  overflow: hidden;\n}\napp-cuentos #photos-videos .period .period-media .media .preview {\n  display: block;\n  width: 300px;\n  height: 300px;\n}\napp-cuentos #photos-videos .period .period-media .media .title {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  padding: 0 16px;\n  height: 48px;\n  line-height: 48px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL2Rpc2xleGlhLXBydWViYS9EOlxcR0lUSFVCXFxUZXNpc01vdmlsL25vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxfdGhlbWluZy5zY3NzIiwic3JjL2FwcC9tYWluL2FwcHMvZGlzbGV4aWEtcHJ1ZWJhL0Q6XFxHSVRIVUJcXFRlc2lzTW92aWwvc3JjXFxhcHBcXG1haW5cXGFwcHNcXGRpc2xleGlhLXBydWViYVxcZGlzbGV4aWEtcHJ1ZWJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FwcHMvZGlzbGV4aWEtcHJ1ZWJhL2Rpc2xleGlhLXBydWViYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5NENBLGtDQUFBO0FBdWlEQSwyQ0FBQTtBQXdDQSxxQkFBQTtBQ2g5Rlk7RUFDSSxtQkFBQTtBQ0poQjtBRE1nQjtFQUNJLGVBQUE7QUNKcEI7QURPZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNMcEI7QURTWTtFQUNJLG1CQUFBO0FDUGhCO0FEU2dCO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNQcEI7QURTb0I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNQeEI7QURVb0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1J4QiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwcy9kaXNsZXhpYS1wcnVlYmEvZGlzbGV4aWEtcHJ1ZWJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGFsbCB0aGUgdGhlbWluZyBmdW5jdGlvbmFsaXR5LlxuLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjogMTAwMCAhZGVmYXVsdDtcbiRjZGstei1pbmRleC1vdmVybGF5OiAxMDAwICFkZWZhdWx0O1xuJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A6IDEwMDAgIWRlZmF1bHQ7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpICFkZWZhdWx0O1xuXG4vLyBEZWZhdWx0IGJhY2tkcm9wIGFuaW1hdGlvbiBpcyBiYXNlZCBvbiB0aGUgTWF0ZXJpYWwgRGVzaWduIHN3aWZ0LWVhc2Utb3V0LlxuJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGNkay1vdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjtcblxuICAgICY6ZW1wdHkge1xuICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCB3aGVuIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGQgbm9kZXMuIFRoaXMgZG9lc24ndFxuICAgICAgLy8gaW5jbHVkZSBvdmVybGF5cyB0aGF0IGhhdmUgYmVlbiBkZXRhY2hlZCwgcmF0aGVyIHRoYW4gZGlzcG9zZWQuXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIHVzZSBhbiBleHRyYSB3cmFwcGVyIGVsZW1lbnQgaW4gb3JkZXIgdG8gdXNlIG1ha2UgdGhlIG92ZXJsYXkgaXRzZWxmIGEgZmxleCBpdGVtLlxuICAvLyBUaGlzIG1ha2VzIGNlbnRlcmluZyB0aGUgb3ZlcmxheSBlYXN5IHdpdGhvdXQgcnVubmluZyBpbnRvIHRoZSBzdWJwaXhlbCByZW5kZXJpbmdcbiAgLy8gcHJvYmxlbXMgdGllZCB0byB1c2luZyBgdHJhbnNmb3JtYCBhbmQgd2l0aG91dCBpbnRlcmZlcmluZyB3aXRoIHRoZSBvdGhlciBwb3NpdGlvblxuICAvLyBzdHJhdGVnaWVzLlxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb24gJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb247XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJnYmEgYmFja2dyb3VuZCB3aWxsIGJlY29tZSBzb2xpZCBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFja1xuICAgICAgLy8gdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuIE5vdGUgdGhhdCB3ZSBjYW4ndCB1c2UgdGhlIGBjZGstaGlnaC1jb250cmFzdGBcbiAgICAgIC8vIG1peGluLCBiZWNhdXNlIHdlIGNhbid0IG5vcm1hbGl6ZSB0aGUgaW1wb3J0IHBhdGggdG8gdGhlIF9hMTF5LnNjc3MgYm90aCBmb3IgdGhlXG4gICAgICAvLyBzb3VyY2UgYW5kIHdoZW4gdGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkLiBTZWUgIzEwOTA4LlxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiAkY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBOb3RlOiBhcyBvZiBGaXJlZm94IDU3LCBoYXZpbmcgdGhlIGJhY2tkcm9wIGJlIGBiYWNrZ3JvdW5kOiBub25lYCB3aWxsIHByZXZlbnQgaXQgZnJvbVxuICAgIC8vIGNhcHR1cmluZyB0aGUgdXNlcidzIG1vdXNlIHNjcm9sbCBldmVudHMuIFNpbmNlIHdlIGFsc28gY2FuJ3QgdXNlIHNvbWV0aGluZyBsaWtlXG4gICAgLy8gYHJnYmEoMCwgMCwgMCwgMClgLCB3ZSB3b3JrIGFyb3VuZCB0aGUgaW5jb25zaXN0ZW5jeSBieSBub3Qgc2V0dGluZyB0aGUgYmFja2dyb3VuZCBhdFxuICAgIC8vIGFsbCBhbmQgdXNpbmcgYG9wYWNpdHlgIHRvIG1ha2UgdGhlIGVsZW1lbnQgdHJhbnNwYXJlbnQuXG4gICAgJiwgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBXZSB1c2UgYGRpc3BsYXk6IGZsZXhgIG9uIHRoaXMgZWxlbWVudCBleGNsdXNpdmVseSBmb3IgY2VudGVyaW5nIGNvbm5lY3RlZCBvdmVybGF5cy5cbiAgICAvLyBXaGVuICpub3QqIGNlbnRlcmluZywgYSB0b3AvbGVmdC9ib3R0b20vcmlnaHQgd2lsbCBiZSBzZXQgd2hpY2ggb3ZlcnJpZGVzIHRoZSBub3JtYWxcbiAgICAvLyBmbGV4IGxheW91dC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLy8gV2UgdXNlIHRoZSBgY29sdW1uYCBkaXJlY3Rpb24gaGVyZSB0byBhdm9pZCBzb21lIGZsZXhib3ggaXNzdWVzIGluIEVkZ2VcbiAgICAvLyB3aGVuIHVzaW5nIHRoZSBcImdyb3cgYWZ0ZXIgb3BlblwiIG9wdGlvbnMuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC8vIEFkZCBzb21lIGRpbWVuc2lvbnMgc28gdGhlIGVsZW1lbnQgaGFzIGFuIGBpbm5lclRleHRgIHdoaWNoIHNvbWUgcGVvcGxlIGRlcGVuZCBvbiBpbiB0ZXN0cy5cbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gIH1cblxuICAvLyBVc2VkIHdoZW4gZGlzYWJsaW5nIGdsb2JhbCBzY3JvbGxpbmcuXG4gIC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIHRoZSBjb250ZW50IG5vdCB0byBsb3NlIGl0cyB3aWR0aC4gTm90ZSB0aGF0IHdlJ3JlIHVzaW5nIDEwMCUsIGluc3RlYWQgb2ZcbiAgICAvLyAxMDB2dywgYmVjYXVzZSAxMDB2dyBpbmNsdWRlcyB0aGUgd2lkdGggcGx1cyB0aGUgc2Nyb2xsYmFyLCB3aGVyZWFzIDEwMCUgaXMgdGhlIHdpZHRoXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBoYWQgYmVmb3JlIHdlIG1hZGUgaXQgYGZpeGVkYC5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8vIE5vdGU6IHRoaXMgd2lsbCBhbHdheXMgYWRkIGEgc2Nyb2xsYmFyIHRvIHdoYXRldmVyIGVsZW1lbnQgaXQgaXMgb24sIHdoaWNoIGNhblxuICAgIC8vIHBvdGVudGlhbGx5IHJlc3VsdCBpbiBkb3VibGUgc2Nyb2xsYmFycy4gSXQgc2hvdWxkbid0IGJlIGFuIGlzc3VlLCBiZWNhdXNlIHdlIHdvbid0XG4gICAgLy8gYmxvY2sgc2Nyb2xsaW5nIG9uIGEgcGFnZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIHNjcm9sbGJhciBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG5cbkBtaXhpbiBjZGstYTExeSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB9XG59XG5cbi8vLyBFbWl0cyB0aGUgbWl4aW4ncyBjb250ZW50IG5lc3RlZCB1bmRlciBgJHNlbGVjdG9yLWNvbnRleHRgIGlmIGAkc2VsZWN0b3ItY29udGV4dGBcbi8vLyBpcyBub24tZW1wdHkuXG4vLy8gQHBhcmFtIHNlbGVjdG9yLWNvbnRleHQgVGhlIHNlbGVjdG9yIHVuZGVyIHdoaWNoIHRvIG5lc3QgdGhlIG1peGluJ3MgY29udGVudC5cbkBtaXhpbiBfY2RrLW9wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gIEBpZiAoJHNlbGVjdG9yLWNvbnRleHQgPT0gJycpIHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAZWxzZSB7XG4gICAgI3skc2VsZWN0b3ItY29udGV4dH0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vLyBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbi8vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLy8gYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4vLy9cbi8vLyBAcGFyYW0gdGFyZ2V0IFdoaWNoIGtpbmQgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8vICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbi8vLyBAcGFyYW0gZW5jYXBzdWxhdGlvbiBXaGV0aGVyIHRvIGVtaXQgc3R5bGVzIGZvciB2aWV3IGVuY2Fwc3VsYXRpb24uIFZhbHVlcyBhcmU6XG4vLy8gICAgICogYG9uYCAtIHdvcmtzIGZvciBgRW11bGF0ZWRgLCBgTmF0aXZlYCwgYW5kIGBTaGFkb3dEb21gXG4vLy8gICAgICogYG9mZmAgLSB3b3JrcyBmb3IgYE5vbmVgXG4vLy8gICAgICogYGFueWAgLSB3b3JrcyBmb3IgYWxsIGVuY2Fwc3VsYXRpb24gbW9kZXMgYnkgZW1pdHRpbmcgdGhlIENTUyB0d2ljZSAoZGVmYXVsdCkuXG5AbWl4aW4gY2RrLWhpZ2gtY29udHJhc3QoJHRhcmdldDogYWN0aXZlLCAkZW5jYXBzdWxhdGlvbjogJ2FueScpIHtcbiAgQGlmICgkdGFyZ2V0ICE9ICdhY3RpdmUnIGFuZCAkdGFyZ2V0ICE9ICdibGFjay1vbi13aGl0ZScgYW5kICR0YXJnZXQgIT0gJ3doaXRlLW9uLWJsYWNrJykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCB2YWx1ZSBcIiN7JHRhcmdldH1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJhY3RpdmVcIiwgXCJibGFjay1vbi13aGl0ZVwiLCBhbmQgXCJ3aGl0ZS1vbi1ibGFja1wiJztcbiAgfVxuXG4gIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdhbnknKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IGVuY2Fwc3VsYXRpb24gXCIjeyRlbmNhcHN1bGF0aW9ufVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcIm9uXCIsIFwib2ZmXCIsIGFuZCBcImFueVwiJztcbiAgfVxuXG4gIC8vIElmIHRoZSBzZWxlY3RvciBjb250ZXh0IGhhcyBtdWx0aXBsZSBwYXJ0cywgc3VjaCBhcyBgLnNlY3Rpb24sIC5yZWdpb25gLCBqdXN0IGRvaW5nXG4gIC8vIGAuY2RrLWhpZ2gtY29udHJhc3QteHh4ICN7Jn1gIHdpbGwgb25seSBhcHBseSB0aGUgcGFyZW50IHNlbGVjdG9yIHRvIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZVxuICAvLyBjb250ZXh0LiBXZSBhZGRyZXNzIHRoaXMgYnkgbmVzdGluZyB0aGUgc2VsZWN0b3IgY29udGV4dCB1bmRlciAuY2RrLWhpZ2gtY29udHJhc3QuXG4gIEBhdC1yb290IHtcbiAgICAkc2VsZWN0b3ItY29udGV4dDogI3smfTtcblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0ge1xuICAgICAgICBAaW5jbHVkZSBfY2RrLW9wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvZmYnKSB7XG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSA6aG9zdCB7XG4gICAgICAgIEBpbmNsdWRlIF9jZGstb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGVuYWJsZSBtb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIG9mIHRleHQgZmllbGRzLlxuQG1peGluIGNkay10ZXh0LWZpZWxkIHtcbiAgLy8gS2V5ZnJhbWVzIHRoYXQgYXBwbHkgbm8gc3R5bGVzLCBidXQgYWxsb3cgdXMgdG8gbW9uaXRvciB3aGVuIGFuIHRleHQgZmllbGQgYmVjb21lcyBhdXRvZmlsbGVkXG4gIC8vIGJ5IHdhdGNoaW5nIGZvciB0aGUgYW5pbWF0aW9uIGV2ZW50cyB0aGF0IGFyZSBmaXJlZCB3aGVuIHRoZXkgc3RhcnQuIE5vdGU6IHRoZSAvKiEqLyBjb21tZW50IGlzXG4gIC8vIG5lZWRlZCB0byBwcmV2ZW50IExpYlNhc3MgZnJvbSBzdHJpcHBpbmcgdGhlIGtleWZyYW1lcyBvdXQuXG4gIC8vIEJhc2VkIG9uOiBodHRwczovL21lZGl1bS5jb20vQGJydW5uL2RldGVjdGluZy1hdXRvZmlsbGVkLWZpZWxkcy1pbi1qYXZhc2NyaXB0LWFlZDU5OGQyNWRhN1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHsvKiEqL31cbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgey8qISovfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0O1xuICB9XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIGF1dG9zaXppbmcgdGV4dGFyZWFzLCBiZWNhdXNlIHdoYXRldmVyIGhlaWdodFxuICAvLyB0aGUgdXNlciByZXNpemVkIHRvIHdpbGwgYmUgb3ZlcndyaXR0ZW4gb25jZSB0aGV5IHN0YXJ0IHR5cGluZyBhZ2Fpbi5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAvLyBUaGlzIGNsYXNzIGlzIHRlbXBvcmFyaWx5IGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHdoZW4gaXQgaXMgYmVpbmcgbWVhc3VyZWQuIEl0IGlzIGltbWVkaWF0ZWx5XG4gIC8vIHJlbW92ZWQgd2hlbiBtZWFzdXJpbmcgaXMgY29tcGxldGUuIFdlIHVzZSBgIWltcG9ydGFudGAgcnVsZXMgaGVyZSB0byBtYWtlIHN1cmUgdXNlci1zcGVjaWZpZWRcbiAgLy8gcnVsZXMgZG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtZWFzdXJlbWVudC5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIC8vIEhhdmluZyAycHggdG9wIGFuZCBib3R0b20gcGFkZGluZyBzZWVtcyB0byBmaXggYSBidWcgd2hlcmUgQ2hyb21lIGdldHMgYW4gaW5jb3JyZWN0XG4gICAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvcigkYmFja2dyb3VuZCwgJGZvcmVncm91bmQ6JycpIHtcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0ge1xuICAgIHRvIHtcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgQGlmICRmb3JlZ3JvdW5kICE9ICcnIHsgY29sb3I6ICRmb3JlZ3JvdW5kOyB9XG4gICAgfVxuICB9XG5cbiAgJjotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9O1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgfVxuXG4gICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDpcbiAgICAgICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudCArIDEgIWdsb2JhbDtcbn1cblxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IG1hdGVyaWFsIGRlc2lnbiB0cmVhdG1lbnRzIHRvIGFueSBlbGVtZW50LlxuLy8gTWVkaWEgcXVlcmllc1xuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQ2hhbmdlICRtYXQteHNtYWxsIGFuZCAkbWF0LXNtYWxsIHVzYWdlcyB0byByZWx5IG9uIEJyZWFrcG9pbnRPYnNlcnZlcixcbiRtYXQteHNtYWxsOiAnbWF4LXdpZHRoOiA1OTlweCc7XG4kbWF0LXNtYWxsOiAnbWF4LXdpZHRoOiA5NTlweCc7XG5cbi8vIFRPRE86IFJldmlzaXQgYWxsIHotaW5kaWNlcyBiZWZvcmUgYmV0YVxuLy8gei1pbmRleCBtYXN0ZXIgbGlzdFxuXG4kei1pbmRleC1mYWI6IDIwICFkZWZhdWx0O1xuJHotaW5kZXgtZHJhd2VyOiAxMDAgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBjb25zdGFudHNcbiRwaTogMy4xNDE1OTI2NTtcblxuLy8gUGFkZGluZyBiZXR3ZWVuIGlucHV0IHRvZ2dsZXMgYW5kIHRoZWlyIGxhYmVsc1xuJG1hdC10b2dnbGUtcGFkZGluZzogOHB4ICFkZWZhdWx0O1xuLy8gV2lkdGggYW5kIGhlaWdodCBvZiBpbnB1dCB0b2dnbGVzXG4kbWF0LXRvZ2dsZS1zaXplOiAyMHB4ICFkZWZhdWx0O1xuXG4vLyBFYXNpbmcgQ3VydmVzXG4vLyBUT0RPKGplbGJvdXJuKTogYWxsIG9mIHRoZXNlIG5lZWQgdG8gYmUgcmV2aXNpdGVkXG5cbi8vIFRoZSBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXMgdXNlZCBieSBtYXRlcmlhbCBkZXNpZ24uXG4kbWF0LWxpbmVhci1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDAuMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1saW5lYXItaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSAhZGVmYXVsdDtcblxuJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dDogYWxsICRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1kdXJhdGlvbjogMzAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW46IGFsbCAkc3dpZnQtZWFzZS1pbi1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbjogNTAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uOiAkZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb24gIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWxpbmVhci1kdXJhdGlvbjogODBtcyAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyOiBhbGwgJHN3aWZ0LWxpbmVhci1kdXJhdGlvbiAkc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAycHggMXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAzcHggMXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggM3B4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAycHggNHB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA0cHggNXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA1cHggNXB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA1cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNnB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDZweCA3cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDdweCA5cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA4cHggOXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggOHB4IDEwcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA4cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDlweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggOXB4IDEycHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAxMHB4IDE0cHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAxMXB4IDE0cHggLTdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAxMXB4IDE1cHggLTdweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjtcblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kX21hdC1lbGV2YXRpb24tcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICBAaWYgdHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IHVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC1nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLFxuICAgICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICY6bm90KFtjbGFzcyo9JyN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0nXSkge1xuICAgIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIHRyYW5zaXRpb24gcHJvcGVydHkgZm9yIGVsZXZhdGlvbi5cbi8vIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBkaXJlY3RseSBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSBhIGNvbXBvbmVudCBuZWVkcyB0byB0cmFuc2l0aW9uXG4vLyBtb3JlIHRoYW4gb25lIHByb3BlcnR5LlxuLy9cbi8vIC5mb28ge1xuLy8gICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoKSwgb3BhY2l0eSAxMDBtcyBlYXNlO1xuLy8gfVxuQGZ1bmN0aW9uIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZShcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgkZHVyYXRpb24sICRlYXNpbmcpO1xufVxuXG4vLyBDb2xvciBwYWxldHRlcyBmcm9tIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbi8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci9cbi8vXG4vLyBDb250cmFzdCBjb2xvcnMgYXJlIGhhcmQtY29kZWQgYmVjYXVzZSBpdCBpcyB0b28gZGlmZmljdWx0IChwcm9iYWJseSBpbXBvc3NpYmxlKSB0b1xuLy8gY2FsY3VsYXRlIHRoZW0uIFRoZXNlIGNvbnRyYXN0IGNvbG9ycyBhcmUgcHVsbGVkIGZyb20gdGhlIHB1YmxpYyBNYXRlcmlhbCBEZXNpZ24gc3BlYyBzd2F0Y2hlcy5cbi8vIFdoaWxlIHRoZSBjb250cmFzdCBjb2xvcnMgaW4gdGhlIHNwZWMgYXJlIG5vdCBwcmVzY3JpcHRpdmUsIHdlIHVzZSB0aGVtIGZvciBjb252ZW5pZW5jZS5cblxuXG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRkYXJrLXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay04Ny1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGxpZ2h0LXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS04Ny1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTEyLW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTEyLW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stNi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjA2KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS02LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMDYpO1xuXG4kZGFyay1wcmltYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuODcpO1xuJGRhcmstc2Vjb25kYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuNTQpO1xuJGRhcmstZGlzYWJsZWQtdGV4dDogcmdiYShibGFjaywgMC4zOCk7XG4kZGFyay1kaXZpZGVyczogcmdiYShibGFjaywgMC4xMik7XG4kZGFyay1mb2N1c2VkOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRsaWdodC1wcmltYXJ5LXRleHQ6IHdoaXRlO1xuJGxpZ2h0LXNlY29uZGFyeS10ZXh0OiByZ2JhKHdoaXRlLCAwLjcpO1xuJGxpZ2h0LWRpc2FibGVkLXRleHQ6IHJnYmEod2hpdGUsIDAuNSk7XG4kbGlnaHQtZGl2aWRlcnM6IHJnYmEod2hpdGUsIDAuMTIpO1xuJGxpZ2h0LWZvY3VzZWQ6IHJnYmEod2hpdGUsIDAuMTIpO1xuXG4kbWF0LXJlZDogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmNDQzMzYsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXBpbms6IChcbiAgNTA6ICNmY2U0ZWMsXG4gIDEwMDogI2Y4YmJkMCxcbiAgMjAwOiAjZjQ4ZmIxLFxuICAzMDA6ICNmMDYyOTIsXG4gIDQwMDogI2VjNDA3YSxcbiAgNTAwOiAjZTkxZTYzLFxuICA2MDA6ICNkODFiNjAsXG4gIDcwMDogI2MyMTg1YixcbiAgODAwOiAjYWQxNDU3LFxuICA5MDA6ICM4ODBlNGYsXG4gIEExMDA6ICNmZjgwYWIsXG4gIEEyMDA6ICNmZjQwODEsXG4gIEE0MDA6ICNmNTAwNTcsXG4gIEE3MDA6ICNjNTExNjIsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1wdXJwbGU6IChcbiAgNTA6ICNmM2U1ZjUsXG4gIDEwMDogI2UxYmVlNyxcbiAgMjAwOiAjY2U5M2Q4LFxuICAzMDA6ICNiYTY4YzgsXG4gIDQwMDogI2FiNDdiYyxcbiAgNTAwOiAjOWMyN2IwLFxuICA2MDA6ICM4ZTI0YWEsXG4gIDcwMDogIzdiMWZhMixcbiAgODAwOiAjNmExYjlhLFxuICA5MDA6ICM0YTE0OGMsXG4gIEExMDA6ICNlYTgwZmMsXG4gIEEyMDA6ICNlMDQwZmIsXG4gIEE0MDA6ICNkNTAwZjksXG4gIEE3MDA6ICNhYTAwZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWRlZXAtcHVycGxlOiAoXG4gIDUwOiAjZWRlN2Y2LFxuICAxMDA6ICNkMWM0ZTksXG4gIDIwMDogI2IzOWRkYixcbiAgMzAwOiAjOTU3NWNkLFxuICA0MDA6ICM3ZTU3YzIsXG4gIDUwMDogIzY3M2FiNyxcbiAgNjAwOiAjNWUzNWIxLFxuICA3MDA6ICM1MTJkYTgsXG4gIDgwMDogIzQ1MjdhMCxcbiAgOTAwOiAjMzExYjkyLFxuICBBMTAwOiAjYjM4OGZmLFxuICBBMjAwOiAjN2M0ZGZmLFxuICBBNDAwOiAjNjUxZmZmLFxuICBBNzAwOiAjNjIwMGVhLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1pbmRpZ286IChcbiAgNTA6ICNlOGVhZjYsXG4gIDEwMDogI2M1Y2FlOSxcbiAgMjAwOiAjOWZhOGRhLFxuICAzMDA6ICM3OTg2Y2IsXG4gIDQwMDogIzVjNmJjMCxcbiAgNTAwOiAjM2Y1MWI1LFxuICA2MDA6ICMzOTQ5YWIsXG4gIDcwMDogIzMwM2Y5ZixcbiAgODAwOiAjMjgzNTkzLFxuICA5MDA6ICMxYTIzN2UsXG4gIEExMDA6ICM4YzllZmYsXG4gIEEyMDA6ICM1MzZkZmUsXG4gIEE0MDA6ICMzZDVhZmUsXG4gIEE3MDA6ICMzMDRmZmUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJsdWU6IChcbiAgNTA6ICNlM2YyZmQsXG4gIDEwMDogI2JiZGVmYixcbiAgMjAwOiAjOTBjYWY5LFxuICAzMDA6ICM2NGI1ZjYsXG4gIDQwMDogIzQyYTVmNSxcbiAgNTAwOiAjMjE5NmYzLFxuICA2MDA6ICMxZTg4ZTUsXG4gIDcwMDogIzE5NzZkMixcbiAgODAwOiAjMTU2NWMwLFxuICA5MDA6ICMwZDQ3YTEsXG4gIEExMDA6ICM4MmIxZmYsXG4gIEEyMDA6ICM0NDhhZmYsXG4gIEE0MDA6ICMyOTc5ZmYsXG4gIEE3MDA6ICMyOTYyZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ibHVlOiAoXG4gIDUwOiAjZTFmNWZlLFxuICAxMDA6ICNiM2U1ZmMsXG4gIDIwMDogIzgxZDRmYSxcbiAgMzAwOiAjNGZjM2Y3LFxuICA0MDA6ICMyOWI2ZjYsXG4gIDUwMDogIzAzYTlmNCxcbiAgNjAwOiAjMDM5YmU1LFxuICA3MDA6ICMwMjg4ZDEsXG4gIDgwMDogIzAyNzdiZCxcbiAgOTAwOiAjMDE1NzliLFxuICBBMTAwOiAjODBkOGZmLFxuICBBMjAwOiAjNDBjNGZmLFxuICBBNDAwOiAjMDBiMGZmLFxuICBBNzAwOiAjMDA5MWVhLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWN5YW46IChcbiAgNTA6ICNlMGY3ZmEsXG4gIDEwMDogI2IyZWJmMixcbiAgMjAwOiAjODBkZWVhLFxuICAzMDA6ICM0ZGQwZTEsXG4gIDQwMDogIzI2YzZkYSxcbiAgNTAwOiAjMDBiY2Q0LFxuICA2MDA6ICMwMGFjYzEsXG4gIDcwMDogIzAwOTdhNyxcbiAgODAwOiAjMDA4MzhmLFxuICA5MDA6ICMwMDYwNjQsXG4gIEExMDA6ICM4NGZmZmYsXG4gIEEyMDA6ICMxOGZmZmYsXG4gIEE0MDA6ICMwMGU1ZmYsXG4gIEE3MDA6ICMwMGI4ZDQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC10ZWFsOiAoXG4gIDUwOiAjZTBmMmYxLFxuICAxMDA6ICNiMmRmZGIsXG4gIDIwMDogIzgwY2JjNCxcbiAgMzAwOiAjNGRiNmFjLFxuICA0MDA6ICMyNmE2OWEsXG4gIDUwMDogIzAwOTY4OCxcbiAgNjAwOiAjMDA4OTdiLFxuICA3MDA6ICMwMDc5NmIsXG4gIDgwMDogIzAwNjk1YyxcbiAgOTAwOiAjMDA0ZDQwLFxuICBBMTAwOiAjYTdmZmViLFxuICBBMjAwOiAjNjRmZmRhLFxuICBBNDAwOiAjMWRlOWI2LFxuICBBNzAwOiAjMDBiZmE1LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JlZW46IChcbiAgNTA6ICNlOGY1ZTksXG4gIDEwMDogI2M4ZTZjOSxcbiAgMjAwOiAjYTVkNmE3LFxuICAzMDA6ICM4MWM3ODQsXG4gIDQwMDogIzY2YmI2YSxcbiAgNTAwOiAjNGNhZjUwLFxuICA2MDA6ICM0M2EwNDcsXG4gIDcwMDogIzM4OGUzYyxcbiAgODAwOiAjMmU3ZDMyLFxuICA5MDA6ICMxYjVlMjAsXG4gIEExMDA6ICNiOWY2Y2EsXG4gIEEyMDA6ICM2OWYwYWUsXG4gIEE0MDA6ICMwMGU2NzYsXG4gIEE3MDA6ICMwMGM4NTMsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWdyZWVuOiAoXG4gIDUwOiAjZjFmOGU5LFxuICAxMDA6ICNkY2VkYzgsXG4gIDIwMDogI2M1ZTFhNSxcbiAgMzAwOiAjYWVkNTgxLFxuICA0MDA6ICM5Y2NjNjUsXG4gIDUwMDogIzhiYzM0YSxcbiAgNjAwOiAjN2NiMzQyLFxuICA3MDA6ICM2ODlmMzgsXG4gIDgwMDogIzU1OGIyZixcbiAgOTAwOiAjMzM2OTFlLFxuICBBMTAwOiAjY2NmZjkwLFxuICBBMjAwOiAjYjJmZjU5LFxuICBBNDAwOiAjNzZmZjAzLFxuICBBNzAwOiAjNjRkZDE3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpbWU6IChcbiAgNTA6ICNmOWZiZTcsXG4gIDEwMDogI2YwZjRjMyxcbiAgMjAwOiAjZTZlZTljLFxuICAzMDA6ICNkY2U3NzUsXG4gIDQwMDogI2Q0ZTE1NyxcbiAgNTAwOiAjY2RkYzM5LFxuICA2MDA6ICNjMGNhMzMsXG4gIDcwMDogI2FmYjQyYixcbiAgODAwOiAjOWU5ZDI0LFxuICA5MDA6ICM4Mjc3MTcsXG4gIEExMDA6ICNmNGZmODEsXG4gIEEyMDA6ICNlZWZmNDEsXG4gIEE0MDA6ICNjNmZmMDAsXG4gIEE3MDA6ICNhZWVhMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXllbGxvdzogKFxuICA1MDogI2ZmZmRlNyxcbiAgMTAwOiAjZmZmOWM0LFxuICAyMDA6ICNmZmY1OWQsXG4gIDMwMDogI2ZmZjE3NixcbiAgNDAwOiAjZmZlZTU4LFxuICA1MDA6ICNmZmViM2IsXG4gIDYwMDogI2ZkZDgzNSxcbiAgNzAwOiAjZmJjMDJkLFxuICA4MDA6ICNmOWE4MjUsXG4gIDkwMDogI2Y1N2YxNyxcbiAgQTEwMDogI2ZmZmY4ZCxcbiAgQTIwMDogI2ZmZmYwMCxcbiAgQTQwMDogI2ZmZWEwMCxcbiAgQTcwMDogI2ZmZDYwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1hbWJlcjogKFxuICA1MDogI2ZmZjhlMSxcbiAgMTAwOiAjZmZlY2IzLFxuICAyMDA6ICNmZmUwODIsXG4gIDMwMDogI2ZmZDU0ZixcbiAgNDAwOiAjZmZjYTI4LFxuICA1MDA6ICNmZmMxMDcsXG4gIDYwMDogI2ZmYjMwMCxcbiAgNzAwOiAjZmZhMDAwLFxuICA4MDA6ICNmZjhmMDAsXG4gIDkwMDogI2ZmNmYwMCxcbiAgQTEwMDogI2ZmZTU3ZixcbiAgQTIwMDogI2ZmZDc0MCxcbiAgQTQwMDogI2ZmYzQwMCxcbiAgQTcwMDogI2ZmYWIwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1vcmFuZ2U6IChcbiAgNTA6ICNmZmYzZTAsXG4gIDEwMDogI2ZmZTBiMixcbiAgMjAwOiAjZmZjYzgwLFxuICAzMDA6ICNmZmI3NGQsXG4gIDQwMDogI2ZmYTcyNixcbiAgNTAwOiAjZmY5ODAwLFxuICA2MDA6ICNmYjhjMDAsXG4gIDcwMDogI2Y1N2MwMCxcbiAgODAwOiAjZWY2YzAwLFxuICA5MDA6ICNlNjUxMDAsXG4gIEExMDA6ICNmZmQxODAsXG4gIEEyMDA6ICNmZmFiNDAsXG4gIEE0MDA6ICNmZjkxMDAsXG4gIEE3MDA6ICNmZjZkMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6IGJsYWNrLFxuICApXG4pO1xuXG4kbWF0LWRlZXAtb3JhbmdlOiAoXG4gIDUwOiAjZmJlOWU3LFxuICAxMDA6ICNmZmNjYmMsXG4gIDIwMDogI2ZmYWI5MSxcbiAgMzAwOiAjZmY4YTY1LFxuICA0MDA6ICNmZjcwNDMsXG4gIDUwMDogI2ZmNTcyMixcbiAgNjAwOiAjZjQ1MTFlLFxuICA3MDA6ICNlNjRhMTksXG4gIDgwMDogI2Q4NDMxNSxcbiAgOTAwOiAjYmYzNjBjLFxuICBBMTAwOiAjZmY5ZTgwLFxuICBBMjAwOiAjZmY2ZTQwLFxuICBBNDAwOiAjZmYzZDAwLFxuICBBNzAwOiAjZGQyYzAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1icm93bjogKFxuICA1MDogI2VmZWJlOSxcbiAgMTAwOiAjZDdjY2M4LFxuICAyMDA6ICNiY2FhYTQsXG4gIDMwMDogI2ExODg3ZixcbiAgNDAwOiAjOGQ2ZTYzLFxuICA1MDA6ICM3OTU1NDgsXG4gIDYwMDogIzZkNGM0MSxcbiAgNzAwOiAjNWQ0MDM3LFxuICA4MDA6ICM0ZTM0MmUsXG4gIDkwMDogIzNlMjcyMyxcbiAgQTEwMDogI2Q3Y2NjOCxcbiAgQTIwMDogI2JjYWFhNCxcbiAgQTQwMDogIzhkNmU2MyxcbiAgQTcwMDogIzVkNDAzNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmV5OiAoXG4gIDUwOiAjZmFmYWZhLFxuICAxMDA6ICNmNWY1ZjUsXG4gIDIwMDogI2VlZWVlZSxcbiAgMzAwOiAjZTBlMGUwLFxuICA0MDA6ICNiZGJkYmQsXG4gIDUwMDogIzllOWU5ZSxcbiAgNjAwOiAjNzU3NTc1LFxuICA3MDA6ICM2MTYxNjEsXG4gIDgwMDogIzQyNDI0MixcbiAgOTAwOiAjMjEyMTIxLFxuICBBMTAwOiAjZmZmZmZmLFxuICBBMjAwOiAjZWVlZWVlLFxuICBBNDAwOiAjYmRiZGJkLFxuICBBNzAwOiAjNjE2MTYxLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWdyYXk6ICRtYXQtZ3JleTtcblxuJG1hdC1ibHVlLWdyZXk6IChcbiAgNTA6ICNlY2VmZjEsXG4gIDEwMDogI2NmZDhkYyxcbiAgMjAwOiAjYjBiZWM1LFxuICAzMDA6ICM5MGE0YWUsXG4gIDQwMDogIzc4OTA5YyxcbiAgNTAwOiAjNjA3ZDhiLFxuICA2MDA6ICM1NDZlN2EsXG4gIDcwMDogIzQ1NWE2NCxcbiAgODAwOiAjMzc0NzRmLFxuICA5MDA6ICMyNjMyMzgsXG4gIEExMDA6ICNjZmQ4ZGMsXG4gIEEyMDA6ICNiMGJlYzUsXG4gIEE0MDA6ICM3ODkwOWMsXG4gIEE3MDA6ICM0NTVhNjQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtYmx1ZS1ncmF5OiAkbWF0LWJsdWUtZ3JleTtcblxuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDEwMCksXG4gIGJhY2tncm91bmQ6IG1hcF9nZXQoJG1hdC1ncmV5LCA1MCksXG4gIGhvdmVyOiAgICAgIHJnYmEoYmxhY2ssIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICB3aGl0ZSxcbiAgZGlhbG9nOiAgICAgd2hpdGUsXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYShibGFjaywgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IHdoaXRlLFxuICBmb2N1c2VkLWJ1dHRvbjogJGRhcmstZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNDAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbiAgdG9vbHRpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4pO1xuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogYmxhY2ssXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwLFxuICBob3ZlcjogICAgICByZ2JhKHdoaXRlLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpYWxvZzogICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEod2hpdGUsIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZm9jdXNlZC1idXR0b246ICRsaWdodC1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBibGFjayxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IGJsYWNrLFxuICB0b29sdGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICBibGFjayxcbiAgZGl2aWRlcjogICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYShibGFjaywgMC4yNiksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGRhcmstc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICB0ZXh0OiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1taW46ICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYShibGFjaywgMC4zOCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIHdoaXRlLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKHdoaXRlLCAwLjMpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGxpZ2h0LXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGljb25zOiAgICAgICAgICAgICB3aGl0ZSxcbiAgdGV4dDogICAgICAgICAgICAgIHdoaXRlLFxuICBzbGlkZXItbWluOiAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKHdoaXRlLCAwLjMpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYSh3aGl0ZSwgMC4zKSxcbik7XG5cblxuXG4vLyBGb3IgYSBnaXZlbiBodWUgaW4gYSBwYWxldHRlLCByZXR1cm4gdGhlIGNvbnRyYXN0IGNvbG9yIGZyb20gdGhlIG1hcCBvZiBjb250cmFzdCBwYWxldHRlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJGh1ZVxuQGZ1bmN0aW9uIG1hdC1jb250cmFzdCgkcGFsZXR0ZSwgJGh1ZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZSwgY29udHJhc3QpLCAkaHVlKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgbWFwIG9mIGh1ZXMgdG8gY29sb3JzIGZvciBhIHRoZW1lLiBUaGlzIGlzIHVzZWQgdG8gZGVmaW5lIGEgdGhlbWUgcGFsZXR0ZSBpbiB0ZXJtc1xuLy8gb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBodWVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkcHJpbWFyeVxuLy8gQHBhcmFtICRsaWdodGVyXG5AZnVuY3Rpb24gbWF0LXBhbGV0dGUoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQ6IDUwMCwgJGxpZ2h0ZXI6IDEwMCwgJGRhcmtlcjogNzAwLCAkdGV4dDogJGRlZmF1bHQpIHtcbiAgJHJlc3VsdDogbWFwX21lcmdlKCRiYXNlLXBhbGV0dGUsIChcbiAgICBkZWZhdWx0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlciksXG4gICAgdGV4dDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkdGV4dCksXG5cbiAgICBkZWZhdWx0LWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlcilcbiAgKSk7XG5cbiAgLy8gRm9yIGVhY2ggaHVlIGluIHRoZSBwYWxldHRlLCBhZGQgYSBcIi1jb250cmFzdFwiIGNvbG9yIHRvIHRoZSBtYXAuXG4gIEBlYWNoICRodWUsICRjb2xvciBpbiAkYmFzZS1wYWxldHRlIHtcbiAgICAkcmVzdWx0OiBtYXBfbWVyZ2UoJHJlc3VsdCwgKFxuICAgICAgJyN7JGh1ZX0tY29udHJhc3QnOiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGh1ZSlcbiAgICApKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuXG4vLyBHZXRzIGEgY29sb3IgZnJvbSBhIHRoZW1lIHBhbGV0dGUgKHRoZSBvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gVGhlIGh1ZSBjYW4gYmUgb25lIG9mIHRoZSBzdGFuZGFyZCB2YWx1ZXMgKDUwMCwgQTQwMCwgZXRjLiksIG9uZSBvZiB0aGUgdGhyZWUgcHJlY29uZmlndXJlZFxuLy8gaHVlcyAoZGVmYXVsdCwgbGlnaHRlciwgZGFya2VyKSwgb3IgYW55IG9mIHRoZSBhZm9yZW1lbnRpb25lZCBwcmVmaXhlZCB3aXRoIFwiLWNvbnRyYXN0XCIuXG4vL1xuLy8gQHBhcmFtICRjb2xvci1tYXAgVGhlIHRoZW1lIHBhbGV0dGUgKG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBAcGFyYW0gJGh1ZSBUaGUgaHVlIGZyb20gdGhlIHBhbGV0dGUgdG8gdXNlLiBJZiB0aGlzIGlzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBpdCB3aWxsXG4vLyAgICAgYmUgdHJlYXRlZCBhcyBvcGFjaXR5LlxuLy8gQHBhcmFtICRvcGFjaXR5IFRoZSBhbHBoYSBjaGFubmVsIHZhbHVlIGZvciB0aGUgY29sb3IuXG5AZnVuY3Rpb24gbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlOiBkZWZhdWx0LCAkb3BhY2l0eTogbnVsbCkge1xuICAvLyBJZiBodWVLZXkgaXMgYSBudW1iZXIgYmV0d2VlbiB6ZXJvIGFuZCBvbmUsIHRoZW4gaXQgYWN0dWFsbHkgY29udGFpbnMgYW5cbiAgLy8gb3BhY2l0eSB2YWx1ZSwgc28gcmVjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgZGVmYXVsdCBodWUgYW5kIHRoYXQgZ2l2ZW4gb3BhY2l0eS5cbiAgQGlmIHR5cGUtb2YoJGh1ZSkgPT0gbnVtYmVyIGFuZCAkaHVlID49IDAgYW5kICRodWUgPD0gMSB7XG4gICAgQHJldHVybiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRodWUpO1xuICB9XG5cbiAgJGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAkaHVlKTtcblxuICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgIC8vIElmIHRoZSAkY29sb3IgcmVzb2x2ZWQgdG8gc29tZXRoaW5nIGRpZmZlcmVudCBmcm9tIGEgY29sb3IgKGUuZy4gYSBDU1MgdmFyaWFibGUpLFxuICAgIC8vIHdlIGNhbid0IGFwcGx5IHRoZSBvcGFjaXR5IGFueXdheSBzbyB3ZSByZXR1cm4gdGhlIHZhbHVlIGFzIGlzLCBvdGhlcndpc2UgU2FzcyBjYW5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBvciBvdXRwdXQgc29tZXRoaW5nIGludmFsaWQuXG4gICAgQHJldHVybiAkY29sb3I7XG4gIH1cblxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCBpZigkb3BhY2l0eSA9PSBudWxsLCBvcGFjaXR5KCRjb2xvciksICRvcGFjaXR5KSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgbGlnaHQgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1saWdodC10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogZmFsc2UsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBkYXJrIHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtZGFyay10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogdHJ1ZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG5cbiRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk6IDAuMTtcblxuQG1peGluIG1hdC1yaXBwbGUoKSB7XG5cbiAgLy8gVGhlIGhvc3QgZWxlbWVudCBvZiBhbiBtYXQtcmlwcGxlIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGhhdmUgYSBwb3NpdGlvbiBvZiBcImFic29sdXRlXCIgb3JcbiAgLy8gXCJyZWxhdGl2ZVwiIHNvIHRoYXQgdGhlIHJpcHBsZXMgaW5zaWRlIGFyZSBjb3JyZWN0bHkgcG9zaXRpb25lZCByZWxhdGl2ZWx5IHRvIHRoZSBjb250YWluZXIuXG4gIC5tYXQtcmlwcGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgZXZlcnkgcmlwcGxlIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgaW4gZmF2b3Igb2YgY3JlYXRpbmcgYW5cbiAgICAvLyBlYXN5IEFQSSBmb3IgZGV2ZWxvcGVycyB1c2luZyB0aGUgTWF0UmlwcGxlIGRpcmVjdGl2ZS5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuQG1peGluIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXBfZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRmb3JlZ3JvdW5kLWJhc2U6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIC8vIElmIHRoZSByaXBwbGUgY29sb3IgaXMgcmVzb2x2ZXMgdG8gYSBjb2xvciAqdHlwZSosIHdlIGNhbiB1c2UgaXQgZGlyZWN0bHksIG90aGVyd2lzZVxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSB3ZSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGNvbG9yIGFuZCBzZXR0aW5nIGFuIG9wYWNpdHkuXG4gICAgQGlmICh0eXBlLW9mKCRmb3JlZ3JvdW5kLWJhc2UpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRmb3JlZ3JvdW5kLWJhc2UsICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1iYXNlO1xuICAgICAgb3BhY2l0eTogJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFV0aWxpdHkgZm9yIGZldGNoaW5nIGEgbmVzdGVkIHZhbHVlIGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgJG5hbWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbmZpZywgJGxldmVsKSwgJG5hbWUpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHNpemUgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1zaXplKTtcbn1cblxuLy8gR2V0cyB0aGUgbGluZSBoZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsaW5lLWhlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgd2VpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC13ZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBsZXR0ZXIgc3BhY2luZyBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxldHRlci1zcGFjaW5nKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udC1mYW1pbHkgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnIGFuZCByZW1vdmVzIHRoZSBxdW90ZXMgYXJvdW5kIGl0LlxuQGZ1bmN0aW9uIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWw6IG51bGwpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRjb25maWcsIGZvbnQtZmFtaWx5KTtcblxuICBAaWYgJGxldmVsICE9IG51bGwge1xuICAgICRmb250LWZhbWlseTogX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtZmFtaWx5KTtcbiAgfVxuXG4gIC8vIEd1YXJkIGFnYWluc3QgdW5xdW90aW5nIG5vbi1zdHJpbmcgdmFsdWVzLCBiZWNhdXNlIGl0J3MgZGVwcmVjYXRlZC5cbiAgQHJldHVybiBpZih0eXBlLW9mKCRmb250LWZhbWlseSkgPT0gc3RyaW5nLCB1bnF1b3RlKCRmb250LWZhbWlseSksICRmb250LWZhbWlseSk7XG59XG5cbi8vIE91dHB1dHMgdGhlIHNob3J0aGFuZCBgZm9udGAgQ1NTIHByb3BlcnR5LCBiYXNlZCBvbiBhIHNldCBvZiB0eXBvZ3JhcGh5IHZhbHVlcy4gRmFsbHMgYmFjayB0b1xuLy8gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBpZiBhIHZhbHVlIHRoYXQgaXNuJ3QgYWxsb3dlZCBpbiB0aGUgc2hvcnRoYW5kIGlzIHBhc3NlZCBpbi5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KSB7XG4gIC8vIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBzZXQgdG8gYGluaGVyaXRgLCB3ZSBjYW4ndCB1c2UgdGhlIHNob3J0aGFuZFxuICAvLyBzbyB3ZSBmYWxsIGJhY2sgdG8gcGFzc2luZyBpbiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzLlxuICBAaWYgKCRmb250LXNpemUgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXNpemUgPT0gbnVsbCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gbnVsbCkge1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG4gIEBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBzaG9ydGhhbmQgYGZvbnRgLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGFtb3VudCBvZiBieXRlcy4gTm90ZVxuICAgIC8vIHRoYXQgd2UgbmVlZCB0byB1c2UgaW50ZXJwb2xhdGlvbiBmb3IgYGZvbnQtc2l6ZS9saW5lLWhlaWdodGAgaW4gb3JkZXIgdG8gcHJldmVudFxuICAgIC8vIFNhc3MgZnJvbSBkaXZpZGluZyB0aGUgdHdvIHZhbHVlcy5cbiAgICBmb250OiAkZm9udC13ZWlnaHQgI3skZm9udC1zaXplfS8jeyRsaW5lLWhlaWdodH0gJGZvbnQtZmFtaWx5O1xuICB9XG59XG5cbi8vIENvbnZlcnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBpbnRvIENTUyBzdHlsZXMuXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsICRsZXZlbCkge1xuICAkZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbCk7XG5cbiAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSk7XG4gIGxldHRlci1zcGFjaW5nOiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKTtcbn1cblxuXG5AbWl4aW4gbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1vcHRpb24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLFxuICAgICY6Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBJbiBtdWx0aXBsZSBtb2RlIHRoZXJlIGlzIGEgY2hlY2tib3ggdG8gc2hvdyB0aGF0IHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgJi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgICYubWF0LWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0aW9uIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuQG1peGluIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcbiAgJGNvbG9yZWQtYm94LXNlbGVjdG9yOiAnLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSc7XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG4gIH1cblxuICAvLyBEZWZhdWx0IHRvIHRoZSBhY2NlbnQgY29sb3IuIE5vdGUgdGhhdCB0aGUgcHNldWRvIGNoZWNrYm94ZXMgYXJlIG1lYW50IHRvIGluaGVyaXQgdGhlXG4gIC8vIHRoZW1lIGZyb20gdGhlaXIgcGFyZW50LCByYXRoZXIgdGhhbiBpbXBsZW1lbnRpbmcgdGhlaXIgb3duIHRoZW1pbmcsIHdoaWNoIGlzIHdoeSB3ZVxuICAvLyBkb24ndCBhdHRhY2ggdG8gdGhlIGBtYXQtKmAgY2xhc3Nlcy4gQWxzbyBub3RlIHRoYXQgdGhpcyBuZWVkcyB0byBiZSBiZWxvdyBgLm1hdC1wcmltYXJ5YFxuICAvLyBpbiBvcmRlciB0byBhbGxvdyBmb3IgdGhlIGNvbG9yIHRvIGJlIG92ZXJ3cml0dGVuIGlmIHRoZSBjaGVja2JveCBpcyBpbnNpZGUgYSBwYXJlbnQgdGhhdFxuICAvLyBoYXMgYG1hdC1hY2NlbnRgIGFuZCBpcyBwbGFjZWQgaW5zaWRlIGFub3RoZXIgcGFyZW50IHRoYXQgaGFzIGBtYXQtcHJpbWFyeWAuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgJi5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFJlcHJlc2VudHMgYSB0eXBvZ3JhcGh5IGxldmVsIGZyb20gdGhlIE1hdGVyaWFsIGRlc2lnbiBzcGVjLlxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWxldmVsKFxuICAkZm9udC1zaXplLFxuICAkbGluZS1oZWlnaHQ6ICRmb250LXNpemUsXG4gICRmb250LXdlaWdodDogNDAwLFxuICAkZm9udC1mYW1pbHk6IG51bGwsXG4gICRsZXR0ZXItc3BhY2luZzogbnVsbCkge1xuXG4gIEByZXR1cm4gKFxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSxcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LFxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQsXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSxcbiAgICBsZXR0ZXItc3BhY2luZzogJGxldHRlci1zcGFjaW5nXG4gICk7XG59XG5cbi8vIFJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHR5cG9ncmFwaHkgbGV2ZWxzLlxuLy8gRGVmYXVsdHMgY29tZSBmcm9tIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9zdHlsZS90eXBvZ3JhcGh5Lmh0bWxcbi8vIE5vdGU6IFRoZSBzcGVjIGRvZXNuJ3QgbWVudGlvbiBsZXR0ZXIgc3BhY2luZy4gVGhlIHZhbHVlcyBoZXJlIGNvbWUgZnJvbVxuLy8gZXllYmFsbGluZyBpdCB1bnRpbCBpdCBsb29rZWQgZXhhY3RseSBsaWtlIHRoZSBzcGVjIGV4YW1wbGVzLlxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWNvbmZpZyhcbiAgJGZvbnQtZmFtaWx5OiAgICdSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICRkaXNwbGF5LTQ6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMTJweCwgMTEycHgsIDMwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wNWVtKSxcbiAgJGRpc3BsYXktMzogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDU2cHgsIDU2cHgsIDQwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wMmVtKSxcbiAgJGRpc3BsYXktMjogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDQ1cHgsIDQ4cHgsIDQwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbSksXG4gICRkaXNwbGF5LTE6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgzNHB4LCA0MHB4LCA0MDApLFxuICAkaGVhZGxpbmU6ICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjRweCwgMzJweCwgNDAwKSxcbiAgJHRpdGxlOiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDIwcHgsIDMycHgsIDUwMCksXG4gICRzdWJoZWFkaW5nLTI6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNnB4LCAyOHB4LCA0MDApLFxuICAkc3ViaGVhZGluZy0xOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTVweCwgMjRweCwgNDAwKSxcbiAgJGJvZHktMjogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDI0cHgsIDUwMCksXG4gICRib2R5LTE6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyMHB4LCA0MDApLFxuICAkY2FwdGlvbjogICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTJweCwgMjBweCwgNDAwKSxcbiAgJGJ1dHRvbjogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDE0cHgsIDUwMCksXG4gIC8vIExpbmUtaGVpZ2h0IG11c3QgYmUgdW5pdC1sZXNzIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUuXG4gICRpbnB1dDogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbChpbmhlcml0LCAxLjEyNSwgNDAwKVxuKSB7XG5cbiAgLy8gRGVjbGFyZSBhbiBpbml0aWFsIG1hcCB3aXRoIGFsbCBvZiB0aGUgbGV2ZWxzLlxuICAkY29uZmlnOiAoXG4gICAgZGlzcGxheS00OiAgICAgICRkaXNwbGF5LTQsXG4gICAgZGlzcGxheS0zOiAgICAgICRkaXNwbGF5LTMsXG4gICAgZGlzcGxheS0yOiAgICAgICRkaXNwbGF5LTIsXG4gICAgZGlzcGxheS0xOiAgICAgICRkaXNwbGF5LTEsXG4gICAgaGVhZGxpbmU6ICAgICAgICRoZWFkbGluZSxcbiAgICB0aXRsZTogICAgICAgICAgJHRpdGxlLFxuICAgIHN1YmhlYWRpbmctMjogICAkc3ViaGVhZGluZy0yLFxuICAgIHN1YmhlYWRpbmctMTogICAkc3ViaGVhZGluZy0xLFxuICAgIGJvZHktMjogICAgICAgICAkYm9keS0yLFxuICAgIGJvZHktMTogICAgICAgICAkYm9keS0xLFxuICAgIGNhcHRpb246ICAgICAgICAkY2FwdGlvbixcbiAgICBidXR0b246ICAgICAgICAgJGJ1dHRvbixcbiAgICBpbnB1dDogICAgICAgICAgJGlucHV0LFxuICApO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgbGV2ZWxzIGFuZCBzZXQgdGhlIGBmb250LWZhbWlseWAgb2YgdGhlIG9uZXMgdGhhdCBkb24ndCBoYXZlIG9uZSB0byB0aGUgYmFzZS5cbiAgLy8gTm90ZSB0aGF0IFNhc3MgY2FuJ3QgbW9kaWZ5IG1hcHMgaW4gcGxhY2UsIHdoaWNoIG1lYW5zIHRoYXQgd2UgbmVlZCB0byBtZXJnZSBhbmQgcmUtYXNzaWduLlxuICBAZWFjaCAka2V5LCAkbGV2ZWwgaW4gJGNvbmZpZyB7XG4gICAgQGlmIG1hcC1nZXQoJGxldmVsLCBmb250LWZhbWlseSkgPT0gbnVsbCB7XG4gICAgICAkbmV3LWxldmVsOiBtYXAtbWVyZ2UoJGxldmVsLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xuICAgICAgJGNvbmZpZzogbWFwLW1lcmdlKCRjb25maWcsICgka2V5OiAkbmV3LWxldmVsKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHRoZSBiYXNlIGZvbnQgZmFtaWx5IHRvIHRoZSBjb25maWcuXG4gIEByZXR1cm4gbWFwLW1lcmdlKCRjb25maWcsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG59XG5cbi8vIEFkZHMgdGhlIGJhc2UgdHlwb2dyYXBoeSBzdHlsZXMsIGJhc2VkIG9uIGEgY29uZmlnLlxuQG1peGluIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZywgJHNlbGVjdG9yOiAnLm1hdC10eXBvZ3JhcGh5Jykge1xuICAubWF0LWgxLCAubWF0LWhlYWRsaW5lLCAjeyRzZWxlY3Rvcn0gaDEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDIsIC5tYXQtdGl0bGUsICN7JHNlbGVjdG9yfSBoMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMywgLm1hdC1zdWJoZWFkaW5nLTIsICN7JHNlbGVjdG9yfSBoMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDQsIC5tYXQtc3ViaGVhZGluZy0xLCAjeyRzZWxlY3Rvcn0gaDQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAvLyBOb3RlOiB0aGUgc3BlYyBkb2Vzbid0IGhhdmUgYW55dGhpbmcgdGhhdCB3b3VsZCBjb3JyZXNwb25kIHRvIGg1IGFuZCBoNiwgYnV0IHdlIGFkZCB0aGVzZSBmb3JcbiAgLy8gY29uc2lzdGVuY3kuIFRoZSBmb250IHNpemVzIGNvbWUgZnJvbSB0aGUgQ2hyb21lIHVzZXIgYWdlbnQgc3R5bGVzIHdoaWNoIGhhdmUgaDUgYXQgMC44M2VtXG4gIC8vIGFuZCBoNiBhdCAwLjY3ZW0uXG4gIC5tYXQtaDUsICN7JHNlbGVjdG9yfSBoNSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICAgLy8gY2FsYyBpcyB1c2VkIGhlcmUgdG8gc3VwcG9ydCBjc3MgdmFyaWFibGVzXG4gICAgICBjYWxjKCN7bWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpfSAqIDAuODMpLFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWg2LCAjeyRzZWxlY3Rvcn0gaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgIC8vIGNhbGMgaXMgdXNlZCBoZXJlIHRvIHN1cHBvcnQgY3NzIHZhcmlhYmxlc1xuICAgICAgY2FsYygje21hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKX0gKiAwLjY3KSxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1ib2R5LXN0cm9uZywgLm1hdC1ib2R5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1ib2R5LCAubWF0LWJvZHktMSwgI3skc2VsZWN0b3J9IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcblxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICB9XG4gIH1cblxuICAubWF0LXNtYWxsLCAubWF0LWNhcHRpb24ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBjYXB0aW9uKTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS00LCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTQpO1xuICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMywgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0zIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0zKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTIsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMik7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0xLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTEpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cbn1cblxuXG5cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbnMgaW4gYXV0b2NvbXBsZXRlcyBzaG91bGQgbm90IGJlIGdyYXksIGJ1dCB3ZVxuICAgIC8vIG9ubHkgd2FudCB0byBvdmVycmlkZSB0aGUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgb3B0aW9ucyBpZlxuICAgIC8vIHRoZXkgYXJlICpub3QqIGluIGhvdmVyIG9yIGZvY3VzIHN0YXRlLiBUaGlzIGNoYW5nZSBoYXMgdG8gYmVcbiAgICAvLyBtYWRlIGhlcmUgYmVjYXVzZSBiYXNlIG9wdGlvbiBzdHlsZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRoZVxuICAgIC8vIGF1dG9jb21wbGV0ZSBhbmQgdGhlIHNlbGVjdC5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG4vLyBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3R5bGVzIGZvciB0aGUgYmFkZ2Vcbi8vIHJhdGhlciB0aGFuIGp1c3QgdGhlIGNvbG9yL3RoZW1lIGJlY2F1c2Ugb2Zcbi8vIG5vIHN0eWxlIHNoZWV0IHN1cHBvcnQgZm9yIGRpcmVjdGl2ZXMuXG5cblxuXG5cblxuJG1hdC1iYWRnZS1mb250LXNpemU6IDEycHg7XG4kbWF0LWJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XG4kbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZTogMjJweCAhZGVmYXVsdDtcbiRtYXQtYmFkZ2Utc21hbGwtc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgLSA2O1xuJG1hdC1iYWRnZS1sYXJnZS1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSArIDY7XG5cbi8vIE1peGluIGZvciBidWlsZGluZyBvZmZzZXQgZ2l2ZW4gZGlmZmVyZW50IHNpemVzXG5AbWl4aW4gX21hdC1iYWRnZS1zaXplKCRzaXplKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWJvdmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICB0b3A6IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVsb3cge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBib3R0b206IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLW92ZXJsYXAge1xuICAgICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpIHtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1hY2NlbnQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Utd2FybiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LWJhZGdlLWhpZGRlbiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICRhcHAtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnYmFja2dyb3VuZCcpO1xuICAgICAgJGJhZGdlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIElmIGl0IGlzIGEgY29sb3IgKnR5cGUqLFxuICAgICAgLy8gd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nXG4gICAgICAvLyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmQgd2hlblxuICAgICAgLy8gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICBAaWYgKHR5cGUtb2YoJGJhZGdlLWNvbG9yKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkYXBwLWJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICAgICRiYWRnZS1vcGFjaXR5OiBvcGFjaXR5KCRiYWRnZS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IG1peCgkYXBwLWJhY2tncm91bmQsIHJnYmEoJGJhZGdlLWNvbG9yLCAxKSwgKDEgLSAkYmFkZ2Utb3BhY2l0eSkgKiAxMDAlKTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhZGdlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCxcbiAgLm1hdC1iYWRnZS1jb250ZW50Ll9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLy8gVGhlIGFjdGl2ZSBjbGFzcyBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBhZGRlZFxuICAvLyBzbyBpdCBjYW4gYW5pbWF0ZSBzY2FsZSB0byBkZWZhdWx0XG4gIC5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgICAvLyBTY2FsZSB0byBgbm9uZWAgaW5zdGVhZCBvZiBgMWAgdG8gYXZvaWQgYmx1cnJ5IHRleHQgaW4gc29tZSBicm93c2Vycy5cbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1zbWFsbC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLW1lZGl1bSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1sYXJnZS1zaXplKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiAkbWF0LWJhZGdlLWZvbnQtd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemU7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAvLyBTZXQgdGhlIGZvbnQgc2l6ZSB0byA3NSUgb2YgdGhlIG9yaWdpbmFsLlxuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemUgKiAwLjc1O1xuICB9XG5cbiAgLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemUgKiAyO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG4kX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk6IDAuMTtcblxuLy8gQXBwbGllcyBhIGZvY3VzIHN0eWxlIHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cblxuICAmW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJpcHBsZS4gSWYgdGhlIHZhbHVlIHByb3ZpZGVkIGlzIG5vdCBhIFNhc3MgY29sb3IsXG4vLyB3ZSBhc3N1bWUgdGhhdCB3ZSd2ZSBiZWVuIGdpdmVuIGEgQ1NTIHZhcmlhYmxlLiBTaW5jZSB3ZSBjYW4ndCBwZXJmb3JtIGFscGhhLWJsZW5kaW5nXG4vLyBvbiBhIENTUyB2YXJpYWJsZSwgd2UgaW5zdGVhZCBhZGQgdGhlIG9wYWNpdHkgZGlyZWN0bHkgdG8gdGhlIHJpcHBsZSBlbGVtZW50LlxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSkge1xuICAkYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkcHJpbWFyeSwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmW2Rpc2FibGVkXSB7XG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJHBhbGV0dGU6IGlmKCRwcm9wZXJ0eSA9PSAnY29sb3InLCAkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpO1xuICAgICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHBhbGV0dGUsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCB0ZXh0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSk7XG5cbiAgICAvLyBTZXR1cCB0aGUgcmlwcGxlIGNvbG9yIHRvIGJlIGJhc2VkIG9uIHRoZSB0ZXh0IGNvbG9yLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgcmlwcGxlc1xuICAgIC8vIGFyZSBtYXRjaGluZyB3aXRoIHRoZSBjdXJyZW50IHRoZW1lIHBhbGV0dGUgYW5kIGFyZSBpbiBjb250cmFzdCB0byB0aGUgYmFja2dyb3VuZCBjb2xvclxuICAgIC8vIChlLmcgaW4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoaXMgbmVlZHMgYSBiaXQgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2Ugd2UncmUgbm90IGd1YXJhbnRlZWQgdGhlIGluY2x1c2lvblxuICAvLyBvcmRlciBvZiB0aGUgdGhlbWUgc3R5bGVzIGFuZCB0aGUgYnV0dG9uIHJlc2V0IG1heSBlbmQgdXAgcmVzZXR0aW5nIHRoaXMgYXMgd2VsbC5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdiYWNrZ3JvdW5kLWNvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxMiwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24sIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWJ1dHRvbik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWJ1dHRvbi10b2dnbGUpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCB0aXRsZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCB0aXRsZSk7XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUsXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBjaGVja2JveCdzIGNoZWNrbWFyayAvIG1peGVkbWFyay5cbiAgJGNoZWNrYm94LW1hcmstY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuXG4gIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gICAgZmlsbDogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICAvLyAhaW1wb3J0YW50IGlzIG5lZWRlZCBoZXJlIGJlY2F1c2UgYSBzdHJva2UgbXVzdCBiZSBzZXQgYXMgYW5cbiAgICAvLyBhdHRyaWJ1dGUgb24gdGhlIFNWRyBpbiBvcmRlciBmb3IgbGluZSBhbmltYXRpb24gdG8gd29yayBwcm9wZXJseS5cbiAgICBzdHJva2U6ICRjaGVja2JveC1tYXJrLWNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICYubWF0LWNoZWNrYm94LWNoZWNrZWQsXG4gICAgJi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAubWF0LWNoZWNrYm94IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcF9nZXQobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBiYXNlKTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCksXG4gIC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoZWNrYm94IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLy8gVE9ETyhrYXJhKTogUmVtb3ZlIHRoaXMgc3R5bGUgd2hlbiBmaXhpbmcgdmVydGljYWwgYmFzZWxpbmVcbiAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5cblxuXG4kbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTogMThweDtcblxuQG1peGluIG1hdC1jaGlwcy1jb2xvcigkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkZm9yZWdyb3VuZDtcblxuICAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogJGZvcmVncm91bmQ7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cblxuLy8gQXBwbGllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByaXBwbGUgZWxlbWVudC5cbi8vIElmIHRoZSBjb2xvciB2YWx1ZSBwcm92aWRlZCBpcyBub3QgYSBTYXNzIGNvbG9yLFxuLy8gd2UgYXNzdW1lIHRoYXQgd2UndmUgYmVlbiBnaXZlbiBhIENTUyB2YXJpYWJsZS5cbi8vIFNpbmNlIHdlIGNhbid0IHBlcmZvcm0gYWxwaGEtYmxlbmRpbmcgb24gYSBDU1MgdmFyaWFibGUsXG4vLyB3ZSBpbnN0ZWFkIGFkZCB0aGUgb3BhY2l0eSBkaXJlY3RseSB0byB0aGUgcmlwcGxlIGVsZW1lbnQuXG5AbWl4aW4gX21hdC1jaGlwcy1yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgJGRlZmF1bHQtY29udHJhc3QsICRvcGFjaXR5KSB7XG4gICRiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICRkZWZhdWx0LWNvbnRyYXN0LCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IobWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KSwgbWF0LWNvbG9yKCRwYWxldHRlKSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICBAaW5jbHVkZSBfbWF0LWNoaXBzLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICR1bnNlbGVjdGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdW5zZWxlY3RlZC1jaGlwKTtcbiAgJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcigkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kLCAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcblxuICAgICY6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkge1xuICAgICAgJjphY3RpdmUge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigzLCAkdGhlbWUpO1xuICAgICAgfVxuXG4gICAgICAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGlwIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG5cbiAgICAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbiAgICAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxuICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIFttYXQtaGVhZGVyLXJvd10sIFttYXQtcm93XSwgW21hdC1mb290ZXItcm93XSxcbiAgLm1hdC10YWJsZS1zdGlja3kge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICBtYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoOiAxcHg7XG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQ6IDAuNjtcbiRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDogMC4yO1xuJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU6IDExcHggIWRlZmF1bHQ7XG5cbkBtaXhpbiBfbWF0LWRhdGVwaWNrZXItY29sb3IoJHBhbGV0dGUpIHtcbiAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICAkYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRiYWNrZ3JvdW5kLCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRvIGJhY2tncm91bmQgdG8gYSBjb2xvciAoZS5nLiBpdCdzIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAgIC8vIGZhbGwgYmFjayB0byBmYWRpbmcgdGhlIGNvbnRlbnQgb3V0IHZpYSBgb3BhY2l0eWAuXG4gICAgICBvcGFjaXR5OiAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aFxuICAgICAgICAgICAgICAgIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtY2FsZW5kYXItYXJyb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAvLyBUaGUgcHJldi9uZXh0IGJ1dHRvbnMgbmVlZCBhIGJpdCBtb3JlIHNwZWNpZmljaXR5IHRvXG4gIC8vIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IHRoZSAubWF0LWljb24tYnV0dG9uLlxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlcixcbiAgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUsXG4gIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUge1xuICAgICYgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgLy8gc28gd2UgdXNlIHRoZSBoaW50IGNvbG9yLlxuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAkY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIEBpZiAodHlwZS1vZigkY29sb3IpID09IGNvbG9yKSB7XG4gICAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KCRjb2xvciwgJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIGNvbG9yIGRpZG4ndCByZXNvbHZlIHRvIGEgY29sb3IgdmFsdWUsIGJ1dCBzb21ldGhpbmcgbGlrZSBhIENTUyB2YXJpYWJsZSwgd2UgY2FuJ3RcbiAgICAgIC8vIGZhZGUgaXQgb3V0IHNvIHdlIGZhbGwgYmFjayB0byByZWR1Y2luZyB0aGUgZWxlbWVudCBvcGFjaXR5LiBOb3RlIHRoYXQgd2UgZG9uJ3QgdXNlIHRoZVxuICAgICAgLy8gJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50LCBiZWNhdXNlIGhpbnQgdGV4dCB1c3VhbGx5IGhhcyBzb21lIG9wYWNpdHkgYXBwbGllZFxuICAgICAgLy8gdG8gaXQgYWxyZWFkeSBhbmQgd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyLlxuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pLCB0ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhbGVuZGFyIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5IHtcbiAgICBmb250LXNpemU6ICRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsXG4gIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMjQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWN0aW9uLXJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICAmIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICAmOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERpc2FibGUgdGhlIGhvdmVyIG9uIHRvdWNoIGRldmljZXMgc2luY2UgaXQgY2FuIGFwcGVhciBsaWtlIGl0IGlzIHN0dWNrLiBXZSBjYW4ndCB1c2VcbiAgLy8gYEBtZWRpYSAoaG92ZXIpYCBhYm92ZSwgYmVjYXVzZSB0aGUgZGVza3RvcCBzdXBwb3J0IGJyb3dzZXIgc3VwcG9ydCBpc24ndCBncmVhdC5cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSlcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4gIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBUaGlzIG1peGluIHdpbGwgZW5zdXJlIHRoYXQgbGluZXMgdGhhdCBvdmVyZmxvdyB0aGUgY29udGFpbmVyIHdpbGwgaGlkZSB0aGUgb3ZlcmZsb3cgYW5kXG4vLyB0cnVuY2F0ZSBuZWF0bHkgd2l0aCBhbiBlbGxpcHNpcy5cbkBtaXhpbiBtYXQtdHJ1bmNhdGUtbGluZSgpIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8vIE1peGluIHRvIHByb3ZpZGUgYWxsIG1hdC1saW5lIHN0eWxlcywgY2hhbmdpbmcgc2Vjb25kYXJ5IGZvbnQgc2l6ZSBiYXNlZCBvbiB3aGV0aGVyIHRoZSBsaXN0XG4vLyBpcyBpbiBkZW5zZSBtb2RlLlxuQG1peGluIG1hdC1saW5lLWJhc2UoJHNlY29uZGFyeS1mb250LXNpemUpIHtcbiAgLm1hdC1saW5lIHtcbiAgICBAaW5jbHVkZSBtYXQtdHJ1bmNhdGUtbGluZSgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAvLyBhbGwgbGluZXMgYnV0IHRoZSB0b3AgbGluZSBzaG91bGQgaGF2ZSBzbWFsbGVyIHRleHRcbiAgICAmOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogJHNlY29uZGFyeS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gbm9ybWFsaXplcyBkZWZhdWx0IGVsZW1lbnQgc3R5bGVzLCBlLmcuIGZvbnQgd2VpZ2h0IGZvciBoZWFkaW5nIHRleHQuXG5AbWl4aW4gbWF0LW5vcm1hbGl6ZS10ZXh0KCkge1xuICAmID4gKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBwcm92aWRlcyBiYXNlIHN0eWxlcyBmb3IgdGhlIHdyYXBwZXIgYXJvdW5kIG1hdC1saW5lIGVsZW1lbnRzIGluIGEgbGlzdC5cbkBtaXhpbiBtYXQtbGluZS13cmFwcGVyLWJhc2UoKSB7XG4gIEBpbmNsdWRlIG1hdC1ub3JtYWxpemUtdGV4dCgpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC8vIE11c3QgcmVtb3ZlIHdyYXBwZXIgd2hlbiBsaW5lcyBhcmUgZW1wdHkgb3IgaXQgdGFrZXMgdXAgaG9yaXpvbnRhbFxuICAvLyBzcGFjZSBhbmQgcHVzaGVzIG90aGVyIGVsZW1lbnRzIHRvIHRoZSByaWdodC5cbiAgJjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKSB7IH1cblxuQG1peGluIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZ3JpZC10aWxlLWhlYWRlcixcbiAgLm1hdC1ncmlkLXRpbGUtZm9vdGVyIHtcbiAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtaWNvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1pY29uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbi8vIFJlbmRlcnMgYSBncmFkaWVudCBmb3Igc2hvd2luZyB0aGUgZGFzaGVkIGxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4vLyBVbmxpa2UgdXNpbmcgYSBib3JkZXIsIGEgZ3JhZGllbnQgYWxsb3dzIHVzIHRvIGFkanVzdCB0aGUgc3BhY2luZyBvZiB0aGUgZG90dGVkIGxpbmVcbi8vIHRvIG1hdGNoIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbkBtaXhpbiBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDAlLCAkY29sb3IgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gRmlndXJlcyBvdXQgdGhlIGNvbG9yIG9mIHRoZSBwbGFjZWhvbGRlciBmb3IgYSBmb3JtIGNvbnRyb2wuXG4vLyBVc2VkIHByaW1hcmlseSB0byBwcmV2ZW50IHRoZSB2YXJpb3VzIGZvcm0gY29udHJvbHMgZnJvbVxuLy8gYmVjb21pbmcgb3V0IG9mIHN5bmMgc2luY2UgdGhlc2UgY29sb3JzIGFyZW4ndCBpbiBhIHBhbGV0dGUuXG5AZnVuY3Rpb24gX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICBAcmV0dXJuIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbn1cblxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tb3otdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIHVzZXItc2VsZWN0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGN1cnNvci1ncmFiIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuQG1peGluIGN1cnNvci1ncmFiYmluZyB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZhbHVlKSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG5cblxuXG5AbWl4aW4gbWF0LWlucHV0LXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAgIEBpbmNsdWRlIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgICB9XG5cbiAgICAvLyBPbiBkYXJrIHRoZW1lcyB3ZSBzZXQgdGhlIG5hdGl2ZSBgc2VsZWN0YCBjb2xvciB0byBzb21lIHNoYWRlIG9mIHdoaXRlLFxuICAgIC8vIGhvd2V2ZXIgdGhlIGNvbG9yIHByb3BhZ2F0ZXMgdG8gYWxsIG9mIHRoZSBgb3B0aW9uYCBlbGVtZW50cywgd2hpY2ggYXJlXG4gICAgLy8gYWx3YXlzIG9uIGEgd2hpdGUgYmFja2dyb3VuZCBpbnNpZGUgdGhlIGRyb3Bkb3duLCBjYXVzaW5nIHRoZW0gdG8gYmxlbmQgaW4uXG4gICAgLy8gU2luY2Ugd2UgY2FuJ3QgY2hhbmdlIGJhY2tncm91bmQgb2YgdGhlIGRyb3Bkb3duLCB3ZSBuZWVkIHRvIGV4cGxpY2l0bHlcbiAgICAvLyByZXNldCB0aGUgY29sb3Igb2YgdGhlIG9wdGlvbnMgdG8gc29tZXRoaW5nIGRhcmsuXG4gICAgQGlmIChtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyaykpIHtcbiAgICAgIG9wdGlvbiB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1wcmltYXJ5LXRleHQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1kaXNhYmxlZC10ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsXG4gIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG5cbiAgLy8gPGlucHV0PiBlbGVtZW50cyBzZWVtIHRvIGhhdmUgdGhlaXIgaGVpZ2h0IHNldCBzbGlnaHRseSB0b28gbGFyZ2Ugb24gU2FmYXJpIGNhdXNpbmcgdGhlIHRleHQgdG9cbiAgLy8gYmUgbWlzYWxpZ25lZCB3LnIudC4gdGhlIHBsYWNlaG9sZGVyLiBBZGRpbmcgdGhpcyBtYXJnaW4gY29ycmVjdHMgaXQuXG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAtJGxpbmUtc3BhY2luZyAqIDFlbTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWxpc3QtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbGlzdC1pdGVtLWRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWxpc3Qtb3B0aW9uKTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24sXG4gIC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0sXG4gIC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcblxuICAubWF0LWxpc3QtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGxpc3RcbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVuc2UgbGlzdFxuICAubWF0LWxpc3QtYmFzZVtkZW5zZV0ge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbWVudS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW1lbnUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICd0ZXh0Jyk7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAmLCAmOjphZnRlciB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvcixcbiAgLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtOmhvdmVyLFxuICAubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICBmaWxsOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciwgLm1hdC1zcGlubmVyIHtcbiAgICBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1yYWRpby1jb2xvcigkcGFsZXR0ZSkge1xuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbiAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksXG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSxcbiAgJjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBuZWVkcyBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB0aGUgY2xhc3NlcyBhYm92ZSBhcmUgY29tYmluZWRcbiAgICAvLyAoZS5nLiBgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudGApIHdoaWNoIGluY3JlYXNlcyB0aGVpciBzcGVjaWZpY2l0eSBhIGxvdC5cbiAgICAvLyBUT0RPOiBjb25zaWRlciBtYWtpbmcgdGhlIHNlbGVjdG9ycyBpbnRvIGRlc2NlbmRhbnRzIChgLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tYnV0dG9uYCkuXG4gICAgJi5tYXQtcmFkaW8tZGlzYWJsZWQge1xuICAgICAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbiAgICAgIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbiAgICAgIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAgIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyLCAwLjEyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgJi5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLm1hdC1zZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjogIG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItc2lkZS1ib3JkZXI6IHNvbGlkIDFweCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1kcmF3ZXItcHVzaCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gICAgICAvLyBUaGUgZWxldmF0aW9uIG9mIHotMTYgaXMgbm90ZWQgaW4gdGhlIGRlc2lnbiBzcGVjaWZpY2F0aW9ucy5cbiAgICAgIC8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJhd2VyLmh0bWxcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgICAkb3BhY2l0eTogMC42O1xuICAgICRiYWNrZHJvcC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkLCAkb3BhY2l0eSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tkcm9wLWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgLy8gV2UgdXNlIGludmVydCgpIGhlcmUgdG8gaGF2ZSB0aGUgZGFya2VuIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGV4cGVjdGVkIHRvIGJlIHVzZWQuIElmIHRoZVxuICAgICAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgICAgIC8vIHdlIHVzZSBhIGxpZ2h0IGJhY2tkcm9wLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW52ZXJ0KCRiYWNrZHJvcC1jb2xvcik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdGhlIGJhY2tkcm9wIGNvbG9yIHRvIGEgY29sb3IgdmFsdWUsIGZhbGwgYmFjayB0byB1c2luZ1xuICAgICAgLy8gYG9wYWNpdHlgIHRvIG1ha2UgaXQgb3BhcXVlIHNpbmNlIGl0cyBlbmQgdmFsdWUgY291bGQgYmUgYSBzb2xpZCBjb2xvci5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZHJvcC1jb2xvcjtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpIHtcbiAgJi5tYXQtY2hlY2tlZCB7XG4gICAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgICAvLyBPcGFjaXR5IGlzIGRldGVybWluZWQgZnJvbSB0aGUgc3BlY3MgZm9yIHRoZSBzZWxlY3Rpb24gY29udHJvbHMuXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc3BlY3NcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlLCAwLjU0KTtcbiAgICB9XG5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrOiBtYXBfZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC8vIENvbG9yIGh1ZXMgYXJlIGJhc2VkIG9uIHRoZSBzcGVjcyB3aGljaCBicmllZmx5IHNob3cgdGhlIGh1ZXMgdGhhdCBhcmUgYXBwbGllZCB0byBhIHN3aXRjaC5cbiAgLy8gVGhlIDIwMTggc3BlY3Mgbm8gbG9uZ2VyIGRlc2NyaWJlIGhvdyBkYXJrIHN3aXRjaGVzIHNob3VsZCBsb29rIGxpa2UuIER1ZSB0byB0aGUgbGFjayBvZlxuICAvLyBpbmZvcm1hdGlvbiBmb3IgZGFyayB0aGVtZWQgc3dpdGNoZXMsIHdlIHBhcnRpYWxseSBrZWVwIHRoZSBvbGQgYmVoYXZpb3IgdGhhdCBpcyBiYXNlZCBvblxuICAvLyB0aGUgcHJldmlvdXMgc3BlY2lmaWNhdGlvbnMuIEZvciB0aGUgY2hlY2tlZCBjb2xvciB3ZSBhbHdheXMgdXNlIHRoZSBgZGVmYXVsdGAgaHVlIGJlY2F1c2VcbiAgLy8gdGhhdCBmb2xsb3dzIE1EQyBhbmQgYWxzbyBtYWtlcyBpdCBlYXNpZXIgZm9yIHBlb3BsZSB0byBjcmVhdGUgYSBjdXN0b20gdGhlbWUgd2l0aG91dCBuZWVkaW5nXG4gIC8vIHRvIHNwZWNpZnkgZWFjaCBodWUgaW5kaXZpZHVhbGx5LlxuICAkdGh1bWItdW5jaGVja2VkLWh1ZTogaWYoJGlzLWRhcmssIDQwMCwgNTApO1xuICAkdGh1bWItY2hlY2tlZC1odWU6IGRlZmF1bHQ7XG5cbiAgJGJhci11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXNsaWRlLXRvZ2dsZSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkYWNjZW50LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwcmltYXJ5LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkd2FybiwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJpcHBsZS11bmNoZWNrZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRtYXQtZ3JleSwgJHRodW1iLXVuY2hlY2tlZC1odWUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFyLXVuY2hlY2tlZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwYWxldHRlKSB7XG4gIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gIC5tYXQtc2xpZGVyLXRodW1iLFxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkbWF0LXNsaWRlci1vZmYtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYtYWN0aXZlKTtcbiAgJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1taW4pO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItdGljay1vcGFjaXR5OiAwLjc7XG4gICRtYXQtc2xpZGVyLXRpY2stY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgJG1hdC1zbGlkZXItdGljay1vcGFjaXR5KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICRvcGFjaXR5OiAwLjI7XG4gICAgJGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdCwgJG9wYWNpdHkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlcjpob3ZlcixcbiAgLmNkay1mb2N1c2VkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWRpc2FibGVkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItbWluLXZhbHVlIHtcbiAgICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAgICRvcGFjaXR5OiAwLjEyO1xuICAgICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsICRvcGFjaXR5KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAgICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICAgIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci10aWNrLWNvbG9yO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgICAvLyBGaXJlZm94IGRvZXNuJ3QgZHJhdyB0aGUgZ3JhZGllbnQgY29ycmVjdGx5IHdpdGggJ3RvIHJpZ2h0J1xuICAgIC8vIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMxNDMxOSkuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zdGVwLWhlYWRlciB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBPbiB0b3VjaCBkZXZpY2VzIHRoZSA6aG92ZXIgc3RhdGUgd2lsbCBsaW5nZXIgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgYSB0YXAuXG4gICAgLy8gUmVzZXQgaXQgdmlhIGBAbWVkaWFgIGFmdGVyIHRoZSBkZWNsYXJhdGlvbiwgYmVjYXVzZSB0aGUgbWVkaWEgcXVlcnkgaXNuJ3RcbiAgICAvLyBzdXBwb3J0ZWQgYnkgYWxsIGJyb3dzZXJzIHlldC5cbiAgICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwsXG4gICAgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH07XG4gIH1cblxuICAubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAkdGFibGUtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICAgICR0ZXh0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgIC8vIEJlY2F1c2UgdGhlIGFycm93IGlzIG1hZGUgdXAgb2YgbXVsdGlwbGUgZWxlbWVudHMgdGhhdCBhcmUgc3RhY2tlZCBvbiB0b3Agb2YgZWFjaCBvdGhlcixcbiAgICAvLyB3ZSBjYW4ndCB1c2UgdGhlIHNlbWktdHJhc3BhcmVudCBjb2xvciBmcm9tIHRoZSB0aGVtZSBkaXJlY3RseS4gSWYgdGhlIHZhbHVlIGlzIGEgY29sb3JcbiAgICAvLyAqdHlwZSosIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZFxuICAgIC8vIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZFxuICAgIC8vIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuIE90aGVyd2lzZSwgaWYgaXQgcmVzb2x2ZXMgdG8gc29tZXRoaW5nIGRpZmZlcmVudFxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSwgd2UgdXNlIHRoZSBjb2xvciBkaXJlY3RseS5cbiAgICBAaWYgKHR5cGUtb2YoJHRhYmxlLWJhY2tncm91bmQpID09IGNvbG9yIGFuZCB0eXBlLW9mKCR0ZXh0LWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgICBjb2xvcjogbWl4KCR0YWJsZS1iYWNrZ3JvdW5kLCByZ2JhKCR0ZXh0LWNvbG9yLCAxKSwgKDEgLSAkdGV4dC1vcGFjaXR5KSAqIDEwMCUpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFicy10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRoZWFkZXItYm9yZGVyOiAxcHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LXRhYi1uYXYtYmFyLFxuICAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206ICRoZWFkZXItYm9yZGVyO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIHtcbiAgICAubWF0LXRhYi1uYXYtYmFyLFxuICAgIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgICBib3JkZXItdG9wOiAkaGVhZGVyLWJvcmRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBoZWFkZXIgYm9yZGVyIHdoZW4gdGhlcmUgaXMgYSBiYWNrZ3JvdW5kIGNvbG9yXG4gIC5tYXQtdGFiLWdyb3VwW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10gLm1hdC10YWItaGVhZGVyLFxuICAubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLCAubWF0LXRhYi1uYXYtYmFyIHtcbiAgICAkdGhlbWUtY29sb3JzOiAoXG4gICAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICAgIGFjY2VudDogJGFjY2VudCxcbiAgICAgIHdhcm46ICR3YXJuXG4gICAgKTtcblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgdGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIHRhYnNcbiAgICAgICYubWF0LSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvcik7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgaW5rIGJhciB3aGVuIGJhY2tncm91bmQgY29sb3IgaXMgdGhlIHNhbWVcbiAgICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYnMgYW5kIG92ZXJyaWRlIGZvY3VzIGNvbG9yXG4gICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWJzLWJhY2tncm91bmQoJGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtaW5rLWJhcigkY29sb3IsICRodWU6IGRlZmF1bHQpIHtcbiAgLm1hdC1pbmstYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGNvbG9yLCAkaHVlKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWItbGFiZWwtZm9jdXMoJHRhYi1mb2N1cy1jb2xvcikge1xuICAubWF0LXRhYi1sYWJlbCxcbiAgLm1hdC10YWItbGluayB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQge1xuICAgICAgJjpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR0YWItZm9jdXMtY29sb3IsIGxpZ2h0ZXIsIDAuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYnMtYmFja2dyb3VuZCgkYmFja2dyb3VuZC1jb2xvcikge1xuICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHRhYiBncm91cFxuICAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC8vIFNldCBsYWJlbHMgdG8gY29udHJhc3QgYWdhaW5zdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBwYWdpbmF0aW9uIGNoZXZyb25zIHRvIGNvbnRyYXN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gIH1cblxuICAvLyBTZXQgcmlwcGxlcyBjb2xvciB0byBiZSB0aGUgY29udHJhc3QgY29sb3Igb2YgdGhlIG5ldyBiYWNrZ3JvdW5kLiBPdGhlcndpc2UgdGhlIHJpcHBsZVxuICAvLyBjb2xvciB3aWxsIGJlIGJhc2VkIG9uIHRoZSBhcHAgYmFja2dyb3VuZCBjb2xvci5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtdG9vbGJhci1jb2xvcigkcGFsZXR0ZSkge1xuICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbn1cblxuQG1peGluIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcyB7XG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtc2VsZWN0LXZhbHVlLFxuICAubWF0LXNlbGVjdC1hcnJvdyxcbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBhcHAtYmFyKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXM7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2xiYXIsXG4gIC5tYXQtdG9vbGJhciBoMSxcbiAgLm1hdC10b29sYmFyIGgyLFxuICAubWF0LXRvb2xiYXIgaDMsXG4gIC5tYXQtdG9vbGJhciBoNCxcbiAgLm1hdC10b29sYmFyIGg1LFxuICAubWF0LXRvb2xiYXIgaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cblxuXG5cblxuJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQ6IDIycHg7XG4kbWF0LXRvb2x0aXAtZm9udC1zaXplOiAxMHB4O1xuJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc6ICgkbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1mb250LXNpemUpIC8gMjtcblxuJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodDogMzBweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTogMTRweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc6XG4gICAgKCRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemUpIC8gMjtcblxuQG1peGluIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCB0b29sdGlwLCAwLjkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuXG4gIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gICAgLy8gVXNlIHRoZSBwcmltYXJ5IHRleHQgb24gdGhlIGRhcmsgdGhlbWUsIGV2ZW4gdGhvdWdoIHRoZSBsaWdodGVyIG9uZSB1c2VzXG4gICAgLy8gYSBzZWNvbmRhcnksIGJlY2F1c2UgdGhlIGNvbnRyYXN0IG9uIHRoZSBsaWdodCBwcmltYXJ5IHRleHQgaXMgcG9vci5cbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICRkYXJrLXByaW1hcnktdGV4dCwgJGxpZ2h0LXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBpZigkaXMtZGFyay10aGVtZSwgbWFwLWdldCgkbWF0LWdyZXksIDUwKSwgIzMyMzIzMik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBpbmhlcml0O1xuICAgICAgc2l6ZTogaW5oZXJpdDtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkZmlsbC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBvbiB0b3Agb2YgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgLy8gVGhlIHBhZGRpbmcgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIGZpbGwgYXBwZWFyYW5jZS5cbiAgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmctdG9wIDAgJGluZml4LXBhZGRpbmctYm90dG9tIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZy10b3A7XG4gICAgICBtYXJnaW4tdG9wOiAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGxlZ2FjeSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1oaW50IHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgc2VlbSB0byBtZWFzdXJlIGZyb20gdGhlIGVkZ2VcbiAgLy8gb2YgdGhlIHRleHQgaXRzZWxmLCBub3QgdGhlIGVkZ2Ugb2YgdGhlIGxpbmU7IHRoZXJlZm9yZSB3ZSBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZy5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtIC0gJGxpbmUtc3BhY2luZztcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgLSAoJGxpbmUtc3BhY2luZyAqIDIpO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2xhdGVaIGNhdXNlcyB0aGUgbGFiZWwgdG8gbm90IGFwcGVhciB3aGlsZSBwcmludGluZywgc28gd2Ugb3ZlcnJpZGUgaXQgdG8gbm90XG4gIC8vIGFwcGx5IHRyYW5zbGF0ZVogd2hpbGUgcHJpbnRpbmdcbiAgQG1lZGlhIHByaW50IHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgJG91dGxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMywgMC4xMikpO1xuICAkb3V0bGluZS1jb2xvci1ob3ZlcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkb3V0bGluZS1jb2xvci1wcmltYXJ5OiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkb3V0bGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJG91dGxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMTUsIDAuMDYpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWhvdmVyO1xuICAgIH1cblxuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsYXNzIHJlcGVhdGVkIHNvIHRoYXQgcnVsZSBpcyBzcGVjaWZpYyBlbm91Z2ggdG8gb3ZlcnJpZGUgZm9jdXNlZCBhY2NlbnQgY29sb3IgY2FzZS5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUpXG4gIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgYWJvdmUgYW5kIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmc6IDFlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIG91dGxpbmUgYXBwZWFyYW5jZS5cbiAgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjI1ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDAgJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgICAgbWFyZ2luLXRvcDogJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge31cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvY3VzZWQtbGFiZWwtY29sb3I7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICRyZXF1aXJlZC1sYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYmFzZTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLy8gU3R5bGluZyBmb3IgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBmb3JtIGZpZWxkLiBOb3RlIHRoYXQgd2hpbGUgdGhlIHNhbWUgY2FuIGJlXG4gIC8vIGFjaGlldmVkIHdpdGggdGhlIG5nLSogY2xhc3Nlcywgd2UgdXNlIHRoaXMgYXBwcm9hY2ggaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHNhbWVcbiAgLy8gbG9naWMgaXMgdXNlZCB0byBzdHlsZSB0aGUgZXJyb3Igc3RhdGUgYW5kIHRvIHNob3cgdGhlIGVycm9yIG1lc3NhZ2VzLlxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG5cbiAgICAgICYubWF0LWFjY2VudCxcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWVycm9yIHtcbiAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGU6IDEuNTtcblxuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBsYWJlbCBhbmQgc3Vic2NyaXB0IHRleHQuXG4gICRzdWJzY3JpcHQtZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaW5wdXQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIC8vIEFsbG93IGljb25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBpY29uIGJ1dHRvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcbiAgICAgIHdpZHRoOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICAvLyBUaHJvd3Mgb2ZmIHRoZSBiYXNlbGluZSBpZiB3ZSBkbyBpdCBhcyBhIHJlYWwgbWFyZ2luLCBzbyB3ZSBkbyBpdCBhcyBhIGJvcmRlciBpbnN0ZWFkLlxuICAgIGJvcmRlci10b3A6ICRpbmZpeC1tYXJnaW4tdG9wIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cblxuICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0kaW5maXgtbWFyZ2luLXRvcDtcbiAgICBwYWRkaW5nLXRvcDogJGluZml4LW1hcmdpbi10b3A7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zaXplO1xuICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10cmVlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdHJlZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgdHlwb2dyYXBoaWMgc3R5bGVzLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkY29uZmlnOiBudWxsKSB7XG4gIEBpZiAkY29uZmlnID09IG51bGwge1xuICAgICRjb25maWc6IG1hdC10eXBvZ3JhcGh5LWNvbmZpZygpO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGFyZSBub3QgdGhlbWUtZGVwZW5kZW50LlxuQG1peGluIG1hdC1jb3JlKCR0eXBvZ3JhcGh5LWNvbmZpZzogbnVsbCkge1xuICBAaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHktY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGstYTExeSgpO1xuICBAaW5jbHVkZSBjZGstb3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGstdGV4dC1maWVsZCgpO1xufVxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGRlcGVuZCBvbiB0aGUgdGhlbWUuXG5AbWl4aW4gbWF0LWNvcmUtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuXG4gIC8vIFByb3ZpZGVzIGV4dGVybmFsIENTUyBjbGFzc2VzIGZvciBlYWNoIGVsZXZhdGlvbiB2YWx1ZS4gRWFjaCBDU1MgY2xhc3MgaXMgZm9ybWF0dGVkIGFzXG4gIC8vIGBtYXQtZWxldmF0aW9uLXokelZhbHVlYCB3aGVyZSBgJHpWYWx1ZWAgY29ycmVzcG9uZHMgdG8gdGhlIHotc3BhY2UgdG8gd2hpY2ggdGhlIGVsZW1lbnQgaXNcbiAgLy8gZWxldmF0ZWQuXG4gIEBmb3IgJHpWYWx1ZSBmcm9tIDAgdGhyb3VnaCAyNCB7XG4gICAgLiN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0jeyR6VmFsdWV9IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGUgdXNlcidzIGNvbnRlbnQgaXNuJ3RcbiAgLy8gaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgdGhlIGFtcGVyc2FuZFxuICAvLyBzZWxlY3RvciBpbiBjYXNlIHRoZSBtaXhpbiBpcyBpbmNsdWRlZCBhdCB0aGUgdG9wIGxldmVsLlxuICAubWF0LWFwcC1iYWNrZ3JvdW5kI3tpZigmLCAnLCAmLm1hdC1hcHAtYmFja2dyb3VuZCcsICcnKX0ge1xuICAgICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAvLyBNYXJrZXIgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhZGRlZCBhIHRoZW1lIHRvIHRoZWlyIHBhZ2UuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIENyZWF0ZSBhIHRoZW1lLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSk7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vQGZ1c2Uvc2Nzcy9mdXNlXCI7XG5cbmFwcC1jdWVudG9zIHtcblxuICAgICNwaG90b3MtdmlkZW9zIHtcblxuICAgICAgICAucGVyaW9kIHtcblxuICAgICAgICAgICAgLnBlcmlvZC10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wZXJpb2QtbWVkaWEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgICAgICAgICAubWVkaWEge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuYXBwLWN1ZW50b3MgI3Bob3Rvcy12aWRlb3MgLnBlcmlvZCAucGVyaW9kLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbmFwcC1jdWVudG9zICNwaG90b3MtdmlkZW9zIC5wZXJpb2QgLnBlcmlvZC10aXRsZSAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmFwcC1jdWVudG9zICNwaG90b3MtdmlkZW9zIC5wZXJpb2QgLnBlcmlvZC10aXRsZSAuaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5hcHAtY3VlbnRvcyAjcGhvdG9zLXZpZGVvcyAucGVyaW9kIC5wZXJpb2QtbWVkaWEge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuYXBwLWN1ZW50b3MgI3Bob3Rvcy12aWRlb3MgLnBlcmlvZCAucGVyaW9kLW1lZGlhIC5tZWRpYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDE2cHggMTZweCAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5hcHAtY3VlbnRvcyAjcGhvdG9zLXZpZGVvcyAucGVyaW9kIC5wZXJpb2QtbWVkaWEgLm1lZGlhIC5wcmV2aWV3IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbmFwcC1jdWVudG9zICNwaG90b3MtdmlkZW9zIC5wZXJpb2QgLnBlcmlvZC1tZWRpYSAubWVkaWEgLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */"],
      encapsulation: 2,
      data: {
        animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DislexiaPruebaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dislexia-prueba',
          templateUrl: './dislexia-prueba.component.html',
          styleUrls: ['./dislexia-prueba.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/dislexia-prueba/dislexia-test/dislexia-test.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/main/apps/dislexia-prueba/dislexia-test/dislexia-test.component.ts ***!
    \************************************************************************************/

  /*! exports provided: DislexiaTestComponent */

  /***/
  function srcAppMainAppsDislexiaPruebaDislexiaTestDislexiaTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DislexiaTestComponent", function () {
      return DislexiaTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../@fuse/animations */
    "./src/@fuse/animations/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../servicios/usuario.service */
    "./src/app/main/servicios/usuario.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _juegos_vocal_vocal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../juegos/vocal/vocal.component */
    "./src/app/main/apps/dislexia-prueba/juegos/vocal/vocal.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _juegos_caja_caja_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../juegos/caja/caja.component */
    "./src/app/main/apps/dislexia-prueba/juegos/caja/caja.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function DislexiaTestComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-vocal", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var vocal_r854 = ctx.$implicit;
        var indice_r855 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vocal", vocal_r854)("indice1", indice_r855);
      }
    }

    function DislexiaTestComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DislexiaTestComponent_div_12_div_1_Template, 2, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r847 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r847.arregloVocales);
      }
    }

    function DislexiaTestComponent_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r857 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DislexiaTestComponent_button_18_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r857);

          var ctx_r856 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r856.nextWord();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DislexiaTestComponent_div_22_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-caja", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r862 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var p_r859 = ctx_r862.$implicit;
        var indice_r860 = ctx_r862.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("letra", p_r859)("indice", indice_r860)("indice2", indice_r860);
      }
    }

    function DislexiaTestComponent_div_22_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DislexiaTestComponent_div_22_div_2_div_1_Template, 2, 3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r858 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r858.estado);
      }
    }

    var _c0 = function _c0() {
      return {
        value: "80"
      };
    };

    function DislexiaTestComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DislexiaTestComponent_div_22_div_2_Template, 2, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r849 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r849.arregloPalabra);
      }
    }

    function DislexiaTestComponent_div_23_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-caja", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r867 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var p_r864 = ctx_r867.$implicit;
        var indice_r865 = ctx_r867.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("letra", p_r864)("indice", indice_r865)("indice2", indice_r865);
      }
    }

    function DislexiaTestComponent_div_23_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DislexiaTestComponent_div_23_div_2_div_1_Template, 2, 3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r863.estado);
      }
    }

    function DislexiaTestComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DislexiaTestComponent_div_23_div_2_Template, 2, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r850 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r850.arregloPalabra);
      }
    }

    function DislexiaTestComponent_div_24_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-caja", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var p_r869 = ctx_r872.$implicit;
        var indice_r870 = ctx_r872.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("letra", p_r869)("indice", indice_r870)("indice2", indice_r870);
      }
    }

    function DislexiaTestComponent_div_24_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DislexiaTestComponent_div_24_div_5_div_1_Template, 2, 3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r868 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r868.estado);
      }
    }

    function DislexiaTestComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DislexiaTestComponent_div_24_div_5_Template, 2, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r851.arregloPalabra);
      }
    }

    function DislexiaTestComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r874 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DislexiaTestComponent_div_26_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r874);

          var ctx_r873 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r873.savePuntaje();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Finalizar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r852 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PUNTAJE OBTENIDO ", ctx_r852.Puntaje, "/100 \xA1FELICITACIONES!");
      }
    }

    var _c1 = function _c1() {
      return {
        delay: "100ms",
        y: "25px"
      };
    };

    var _c2 = function _c2(a1) {
      return {
        value: "*",
        params: a1
      };
    };

    var _c3 = function _c3() {
      return {
        y: "80%"
      };
    };

    var _c4 = function _c4() {
      return {
        value: "100"
      };
    };

    var DislexiaTestComponent =
    /*#__PURE__*/
    function () {
      function DislexiaTestComponent(http, usuario) {
        _classCallCheck(this, DislexiaTestComponent);

        this.http = http;
        this.usuario = usuario;
        this.estadoFinalJuego = false;
        this.arregloPalabra = [];
        this.arregloVocales = [];
        this.estado = false;
        this.contador = 0;
        this.Puntaje = 100;
        this.palabras = [['leon', '../assets/imagenes/leon.gif'], ['SaPo', '/assets/imagenes/sapo.png'], ['pelota', '/assets/imagenes/pelota.png'], ['CaRRo', '/assets/imagenes/carro.png'], ['trompeta', '/assets/imagenes/trompeta.png'], ['NiÑo', '/assets/imagenes/nino.png'], ['murcielago', '/assets/imagenes/murcielago.png'], ['eNaNo', '/assets/imagenes/enano.png']];
        this.vocales = ['aeiou', 'AEIOU', 'aeiou', 'AEIOU', 'aeiou', 'AEIOU', 'aeiou', 'AEIOU'];
      }

      _createClass(DislexiaTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.runJuego(this.palabras[0][0], this.palabras[0][1], this.vocales[0]);

          if (this.contador === this.palabras.length - 1) {
            this.arregloPalabra = [];
            this.contador = 0;
            this.ruta = '';
            this.estado = false;
            document.getElementById('buttonNext').style.display = 'none';
            document.getElementById('buttonFinish').style.display = 'initial';
          }
        }
      }, {
        key: "calcularPuntaje",
        value: function calcularPuntaje() {
          var valor;

          for (var i = 0; i < this.palabra.length; i++) {
            valor = document.getElementById('caja' + i).textContent;

            if (valor === 'A') {
              valor = 'a';
            }

            if (valor === 'E') {
              valor = 'e';
            }

            if (valor === 'I') {
              valor = 'i';
            }

            if (valor === 'O') {
              valor = 'o';
            }

            if (valor === 'U') {
              valor = 'u';
            }

            if (this.palabra[i] === valor) {
              console.log(this.palabra[i], valor, this.Puntaje, this.palabra);
              this.imprimir = 'tu puntaje es: ' + this.Puntaje;
            } else {
              console.log(this.palabra[i], valor, this.Puntaje, this.palabra);
              this.Puntaje = this.Puntaje - 5;
            }
          }
        }
      }, {
        key: "runJuego",
        value: function runJuego(palabra, ruta, vocales) {
          this.arregloPalabra = [];
          this.arregloVocales = [];
          this.palabra = palabra;

          for (var i = 0; i < this.palabra.length; i++) {
            this.arregloPalabra[i] = this.palabra.slice(i, i + 1);
          }

          this.vocal = vocales;

          for (var _i = 0; _i < this.vocal.length; _i++) {
            this.arregloVocales[_i] = this.vocal.slice(_i, _i + 1);
          }

          this.ruta = ruta;
          this.estado = true;
        }
      }, {
        key: "nextWord",
        value: function nextWord() {
          if (this.contador === this.palabras.length - 1) {
            this.estadoFinalJuego = true;
            this.estado = false;
            this.ruta = '/assets/imagenes/pikachu.gif';
            document.getElementById('buttonNext').style.display = 'none';
            document.getElementById('buttonFinish').style.display = 'initial';
            this.arregloPalabra = [];
            this.contador = 0;
          } else {
            this.calcularPuntaje();
            this.contador++;
            document.getElementById('caja0').textContent = '';
            document.getElementById('caja1').textContent = '';
            document.getElementById('caja2').textContent = '';
            document.getElementById('caja3').textContent = '';
            this.runJuego(this.palabras[this.contador][0], this.palabras[this.contador][1], this.vocales[this.contador]);
          }
        }
      }, {
        key: "savePuntaje",
        value: function savePuntaje() {
          var _this = this;

          this.usuario.postPuntaje(this.Puntaje.toString(), 'Dislexia Fonológica').then(function (result) {
            _this.aux = Object.values(result)[1][0];
            _this.idPuntaje = parseInt(Object.values(_this.aux)[0].toString());

            _this.estudiantePuntaje();
          }, function (err) {});
        }
      }, {
        key: "estudiantePuntaje",
        value: function estudiantePuntaje() {
          this.usuario.savePuntajeEstudiante(localStorage.getItem('idEstudianteRegistrado'), this.idPuntaje).then(function (result) {
            result;
          }, function (err) {});
        }
      }]);

      return DislexiaTestComponent;
    }();

    DislexiaTestComponent.ɵfac = function DislexiaTestComponent_Factory(t) {
      return new (t || DislexiaTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]));
    };

    DislexiaTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DislexiaTestComponent,
      selectors: [["app-dislexia-test"]],
      decls: 27,
      vars: 28,
      consts: [["id", "app-videos", 1, "page-layout", "simple"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "header", "accent", "p-16", "p-sm-24"], [1, "hero-text"], [1, "content", "p-24"], ["fxLayout", "column", "fxLayoutAlign", "center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", 1, "courses"], ["fxFlex", "100", "fxFlex.gt-xs", "80", "fxFlex.gt-sm", "100", 1, "course"], [1, "row"], [1, "column"], [1, "col-sm-10", "fondoColumna"], [4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center"], ["align", "center", 1, "col-sm-11"], ["height", "250", "width", "250", 3, "src"], [3, "src"], [1, "col-sm-1"], ["mat-button", "", "style", "margin-top: 180px; margin-left: 35px; background-color: transparent", 3, "click", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", 1, "col-sm-11"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", 4, "ngIf"], ["fxFlex", "100", "fxFlex.gt-xs", "80", "fxFlex.gt-sm", "100", "style", "background: #eff3f2", 4, "ngIf"], ["fxFlex", "100", "fxFlex.gt-xs", "80", "fxFlex.gt-sm", "100", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-xs", "80", "fxFlex.gt-sm", "100"], [3, "vocal", "indice1"], ["mat-button", "", 2, "margin-top", "180px", "margin-left", "35px", "background-color", "transparent", 3, "click"], ["src", "/assets/imagenes/btnSiguiente.png", "alt", "siguiente", 2, "width", "75px", "height", "55px"], [3, "letra", "indice", "indice2"], [1, "col-sm-4"], [1, "col-sm-8"], ["fxFlex", "100", "fxFlex.gt-xs", "80", "fxFlex.gt-sm", "100", 2, "background", "#eff3f2"], [2, "margin-left", "50%"], ["mat-button", "", "routerLink", "/apps/prediagnostico/visual", 2, "background-color", "#0a68d9", "color", "white", 3, "click"]],
      template: function DislexiaTestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " PRE DIAGN\xD3STICO DE DISLEXIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DislexiaTestComponent_div_12_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "audio", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DislexiaTestComponent_button_18_Template, 2, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DislexiaTestComponent_div_22_Template, 3, 3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DislexiaTestComponent_div_23_Template, 3, 3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DislexiaTestComponent_div_24_Template, 6, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DislexiaTestComponent_div_26_Template, 9, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.ruta, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.ruta, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estadoFinalJuego === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arregloPalabra.length >= 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arregloPalabra.length < 7 && ctx.arregloPalabra.length > 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arregloPalabra.length < 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estadoFinalJuego === true);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _juegos_vocal_vocal_component__WEBPACK_IMPORTED_MODULE_6__["VocalComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _juegos_caja_caja_component__WEBPACK_IMPORTED_MODULE_8__["CajaComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
      styles: [".opacity {\n  opacity: 0.8;\n  /* Opacidad 60% */\n}\n\n.fondoColumna {\n  background-image: url(\"/assets/fondos/fondo-selva.jpg\");\n}\n\nh3 {\n  text-align: center;\n}\n\n.borde {\n  border-style: solid;\n  border-width: 2.5px;\n  border-color: #292929;\n}\n\n.mover {\n  position: absolute;\n  z-index: 9;\n}\n\n.borde:hover {\n  border-color: #fff;\n}\n\n.contenedor {\n  text-align: center;\n  color: #8d8d8d;\n}\n\n.contenedor:hover {\n  color: #fff;\n}\n\n.fondo {\n  background-color: #dee77d;\n}\n\n.fondo1 {\n  background-color: #f78272;\n}\n\n.fondo2 {\n  background-color: #fdc32d;\n}\n\n.fondo3 {\n  background-color: #1bcc97;\n}\n\n.fondo4 {\n  background-color: aqua;\n}\n\n.titulo {\n  color: white;\n  text-align: center;\n  font-size: 2.5rem;\n}\n\np {\n  -webkit-text-decoration-color: aqua;\n          text-decoration-color: aqua;\n  text-justify: distribute;\n}\n\n.countdown {\n  width: 90%;\n  height: 90px;\n  background: black;\n}\n\n.measurements {\n  color: white;\n  margin-right: 5px;\n  padding: 10px;\n}\n\n.divider {\n  font-size: 20px;\n}\n\nh4 {\n  cursor: default;\n  position: absolute;\n  top: 25px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 10px;\n  margin: auto;\n  display: block;\n  -webkit-animation: bounce 0.4s ease infinite alternate;\n  font-family: \"Erica One\", cursive;\n  font-size: 25px;\n  color: #000000;\n  text-align: center;\n  line-height: 25px;\n  text-shadow: 0 1px 0 #CCC, 0 2px 0 #CCC, 0 3px 0 #CCC, 0 4px 0 #CCC, 0 5px 0 #CCC, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.6);\n}\n\n/* ANIMATION */\n\n@-webkit-keyframes bounce {\n  100% {\n    top: -25px;\n    text-shadow: 0 1px 0 cornflowerblue, 0 2px 0 cornflowerblue, 0 3px 0 cornflowerblue, 0 4px 0 cornflowerblue, 0 5px 0 cornflowerblue, 0 6px 0 cornflowerblue, 0 7px 0 cornflowerblue, 0 8px 0 cornflowerblue, 0 9px 0 cornflowerblue, 0 30px 30px rgba(0, 0, 0, 0.3);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL2Rpc2xleGlhLXBydWViYS9kaXNsZXhpYS10ZXN0L0Q6XFxHSVRIVUJcXFRlc2lzTW92aWwvc3JjXFxhcHBcXG1haW5cXGFwcHNcXGRpc2xleGlhLXBydWViYVxcZGlzbGV4aWEtdGVzdFxcZGlzbGV4aWEtdGVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hcHBzL2Rpc2xleGlhLXBydWViYS9kaXNsZXhpYS10ZXN0L2Rpc2xleGlhLXRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQWEsaUJBQUE7QUNFakI7O0FEQUE7RUFDSSx1REFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QUREQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDS0o7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDS0o7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FERkE7RUFDSSx5QkFBQTtBQ0tKOztBREhBO0VBQ0kseUJBQUE7QUNNSjs7QURKQTtFQUNJLHlCQUFBO0FDT0o7O0FETEE7RUFDSSx5QkFBQTtBQ1FKOztBRE5BO0VBQ0ksc0JBQUE7QUNTSjs7QURQQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVUo7O0FEUkE7RUFDSSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esd0JBQUE7QUNXSjs7QURUQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNhSjs7QURWQTtFQUNJLGVBQUE7QUNhSjs7QURWQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxzREFBQTtFQUVBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscU1BQUE7QUNXSjs7QURBQSxjQUFBOztBQUNBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsbVFBQ0k7RUNFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hcHBzL2Rpc2xleGlhLXBydWViYS9kaXNsZXhpYS10ZXN0L2Rpc2xleGlhLXRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3BhY2l0eXtcbiAgICBvcGFjaXR5OjAuODsgLyogT3BhY2lkYWQgNjAlICovXG59XG4uZm9uZG9Db2x1bW5he1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9mb25kb3MvZm9uZG8tc2VsdmEuanBnXCIpO1xufVxuaDN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9yZGV7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDIuNXB4O1xuICAgIGJvcmRlci1jb2xvcjogIzI5MjkyOTtcbn1cbi5tb3ZlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTtcbn1cblxuLmJvcmRlOmhvdmVye1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzhkOGQ4ZDtcbn1cblxuLmNvbnRlbmVkb3I6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9uZG97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTc3ZDtcbn1cbi5mb25kbzF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ODI3Mjtcbn1cbi5mb25kbzJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYzMyZDtcbn1cbi5mb25kbzN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiY2M5Nztcbn1cbi5mb25kbzR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cbi50aXR1bG97XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cbnB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBhcXVhO1xuICAgIHRleHQtanVzdGlmeTogZGlzdHJpYnV0ZTtcbn1cbi5jb3VudGRvd24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuLm1lYXN1cmVtZW50cyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kaXZpZGVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbmg0IHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZSAuNHMgZWFzZSBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cbiAgICBmb250LWZhbWlseTogJ0VyaWNhIE9uZScsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjQ0NDLFxuICAgIDAgMnB4IDAgI0NDQyxcbiAgICAwIDNweCAwICNDQ0MsXG4gICAgMCA0cHggMCAjQ0NDLFxuICAgIDAgNXB4IDAgI0NDQyxcbiAgICAwIDZweCAwIHRyYW5zcGFyZW50LFxuICAgIDAgN3B4IDAgdHJhbnNwYXJlbnQsXG4gICAgMCA4cHggMCB0cmFuc3BhcmVudCxcbiAgICAwIDlweCAwIHRyYW5zcGFyZW50LFxuICAgIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjYpO1xufVxuLyogQU5JTUFUSU9OICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcbiAgICAxMDAlIHtcbiAgICAgICAgdG9wOiAtMjVweDtcbiAgICAgICAgdGV4dC1zaGFkb3c6XG4gICAgICAgICAgICAwIDFweCAwIGNvcm5mbG93ZXJibHVlLFxuICAgICAgICAgICAgMCAycHggMCBjb3JuZmxvd2VyYmx1ZSxcbiAgICAgICAgICAgIDAgM3B4IDAgY29ybmZsb3dlcmJsdWUsXG4gICAgICAgICAgICAwIDRweCAwIGNvcm5mbG93ZXJibHVlLFxuICAgICAgICAgICAgMCA1cHggMCBjb3JuZmxvd2VyYmx1ZSxcbiAgICAgICAgICAgIDAgNnB4IDAgY29ybmZsb3dlcmJsdWUsXG4gICAgICAgICAgICAwIDdweCAwIGNvcm5mbG93ZXJibHVlLFxuICAgICAgICAgICAgMCA4cHggMCBjb3JuZmxvd2VyYmx1ZSxcbiAgICAgICAgICAgIDAgOXB4IDAgY29ybmZsb3dlcmJsdWUsXG4gICAgICAgICAgICAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICB9XG59XG4iLCIub3BhY2l0eSB7XG4gIG9wYWNpdHk6IDAuODtcbiAgLyogT3BhY2lkYWQgNjAlICovXG59XG5cbi5mb25kb0NvbHVtbmEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ZvbmRvcy9mb25kby1zZWx2YS5qcGdcIik7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9yZGUge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDIuNXB4O1xuICBib3JkZXItY29sb3I6ICMyOTI5Mjk7XG59XG5cbi5tb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbn1cblxuLmJvcmRlOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4uY29udGVuZWRvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4ZDhkOGQ7XG59XG5cbi5jb250ZW5lZG9yOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb25kbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWU3N2Q7XG59XG5cbi5mb25kbzEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4MjcyO1xufVxuXG4uZm9uZG8yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYzMyZDtcbn1cblxuLmZvbmRvMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYmNjOTc7XG59XG5cbi5mb25kbzQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4udGl0dWxvIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG5wIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBhcXVhO1xuICB0ZXh0LWp1c3RpZnk6IGRpc3RyaWJ1dGU7XG59XG5cbi5jb3VudGRvd24ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4ubWVhc3VyZW1lbnRzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmRpdmlkZXIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmg0IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjVweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYm91bmNlIDAuNHMgZWFzZSBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkVyaWNhIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjQ0NDLCAwIDJweCAwICNDQ0MsIDAgM3B4IDAgI0NDQywgMCA0cHggMCAjQ0NDLCAwIDVweCAwICNDQ0MsIDAgNnB4IDAgdHJhbnNwYXJlbnQsIDAgN3B4IDAgdHJhbnNwYXJlbnQsIDAgOHB4IDAgdHJhbnNwYXJlbnQsIDAgOXB4IDAgdHJhbnNwYXJlbnQsIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLyogQU5JTUFUSU9OICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcbiAgMTAwJSB7XG4gICAgdG9wOiAtMjVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCBjb3JuZmxvd2VyYmx1ZSwgMCAycHggMCBjb3JuZmxvd2VyYmx1ZSwgMCAzcHggMCBjb3JuZmxvd2VyYmx1ZSwgMCA0cHggMCBjb3JuZmxvd2VyYmx1ZSwgMCA1cHggMCBjb3JuZmxvd2VyYmx1ZSwgMCA2cHggMCBjb3JuZmxvd2VyYmx1ZSwgMCA3cHggMCBjb3JuZmxvd2VyYmx1ZSwgMCA4cHggMCBjb3JuZmxvd2VyYmx1ZSwgMCA5cHggMCBjb3JuZmxvd2VyYmx1ZSwgMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG59Il19 */"],
      encapsulation: 2,
      data: {
        animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DislexiaTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dislexia-test',
          templateUrl: './dislexia-test.component.html',
          styleUrls: ['./dislexia-test.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/dislexia-prueba/dislexia-visual/dislexia-visual.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/apps/dislexia-prueba/dislexia-visual/dislexia-visual.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: DislexiaVisualComponent */

  /***/
  function srcAppMainAppsDislexiaPruebaDislexiaVisualDislexiaVisualComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DislexiaVisualComponent", function () {
      return DislexiaVisualComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../servicios/usuario.service */
    "./src/app/main/servicios/usuario.service.ts");

    function DislexiaVisualComponent_div_13_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-juego2", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var palabra_r878 = ctx.$implicit;
        var ind_r879 = ctx.index;

        var ctx_r877 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nombre", palabra_r878)("indice", ind_r879)("palabraCorrecta", ctx_r877.palabraCorrecta);
      }
    }

    function DislexiaVisualComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DislexiaVisualComponent_div_13_div_10_Template, 2, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r875 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r875.ruta, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r875.arregloPalabraJuego2Aux);
      }
    }

    function DislexiaVisualComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r876 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PUNTAJE OBTENIDO ", ctx_r876.Puntaje, "/100 \xA1FELICITACIONES!");
      }
    }

    var _c0 = function _c0() {
      return {
        delay: "100ms",
        y: "25px"
      };
    };

    var _c1 = function _c1(a1) {
      return {
        value: "*",
        params: a1
      };
    };

    var DislexiaVisualComponent =
    /*#__PURE__*/
    function () {
      function DislexiaVisualComponent(http, usuario) {
        _classCallCheck(this, DislexiaVisualComponent);

        this.http = http;
        this.usuario = usuario;
        this.estadoJuego2 = false;
        this.contador = 0;
        this.PuntajeVisual = 100;
        this.estadoFinalJuego = false;
        this.arregloPalabraJuego2Aux = [];
        this.arregloPalabraJuego2 = [['barco', 'parco', 'barpo', 'baroc', 'barco', '/assets/imagenes/barco.jpg'], ['gallina', 'garrina', 'pallima', 'gollina', 'gallina', '/assets/imagenes/gallina.jpeg'], ['jabón', 'jamón', 'jadón', 'pabón', 'jabón', '/assets/imagenes/jabon.jpg'], ['araña', 'eraña', 'oruña', 'aruña', 'araña', '/assets/imagenes/spider.jpg'], ['hipopótamo', 'hipotalamo', 'hipopólamo', 'hipoqótamo', 'hipopótamo', '/assets/imagenes/hipopotamo.jpeg'], ['helicóptero', 'helocóteros', 'helipócteros', 'helicópero', 'helicóptero', '/assets/imagenes/heli.jpg']];
      }

      _createClass(DislexiaVisualComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.getElementById('buttonFinish2').style.display = 'none';
          this.Juego2(0);
          this.estadoJuego2 = true;
          this.getEstudiante();
          this.getImage();
          this.getBase64ImageFromURL();
        }
        /*Metodos Juego 2*/

      }, {
        key: "Juego2",
        value: function Juego2(fila) {
          var r = Math.floor(Math.random() * 4);

          for (var i = 0; i < this.arregloPalabraJuego2[fila].length - 2; i++) {
            if (r === this.arregloPalabraJuego2[fila].length - 2) {
              r = 0;
            }

            this.arregloPalabraJuego2Aux[i] = this.arregloPalabraJuego2[fila][r];
            r++;
          }

          this.ruta = this.arregloPalabraJuego2[fila][5];
          this.palabraCorrecta = this.arregloPalabraJuego2[fila][4];
        }
      }, {
        key: "siguientePalabra",
        value: function siguientePalabra() {
          this.contador++;

          if (this.contador < this.arregloPalabraJuego2.length) {
            this.Juego2(this.contador);
            document.getElementById('buttonFinish2').style.display = 'none';
          } else {
            this.ruta = '/assets/imagenes/finalJuego1.jpg';
            document.getElementById('buttonFinish2').style.display = 'initial';
            document.getElementById('button0').style.display = 'none';
            document.getElementById('button1').style.display = 'none';
            document.getElementById('button2').style.display = 'none';
            document.getElementById('button3').style.display = 'none';
            this.PuntajeVisual = DislexiaVisualComponent.puntajeJuego2;
            this.estadoFinalJuego = true;
          }
        }
      }, {
        key: "savePuntaje",
        value: function savePuntaje() {
          var _this2 = this;

          this.usuario.postPuntaje(this.PuntajeVisual.toString(), 'Dislexia Visual').then(function (result) {
            _this2.aux = Object.values(result)[1][0];
            _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].idPuntaje = parseInt(Object.values(_this2.aux)[0].toString());
            _this2.idPuntaje = parseInt(Object.values(_this2.aux)[0].toString());

            _this2.estudiantePuntaje();

            _this2.getFonologico();

            _this2.getVisual();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "estudiantePuntaje",
        value: function estudiantePuntaje() {
          console.log(localStorage.getItem('idEstudianteRegistrado'));
          this.usuario.savePuntajeEstudiante(localStorage.getItem('idEstudianteRegistrado'), this.idPuntaje).then(function (result) {
            result;
            console.log(result);
          }, function (err) {});
        }
      }, {
        key: "getEstudiante",
        value: function getEstudiante() {
          var _this3 = this;

          // this.estudiante = localStorage.getItem('estudiante');
          this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/estudiante/' + localStorage.getItem('nick'), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
            })
          }).subscribe(function (res) {
            _this3.estudiante = res;
          });
          localStorage.setItem('idEstudianteRegistrado', this.estudiante.id);
          console.log(this.estudiante); //  environment.idEstudianteRegistrado = environment.estudiante.id;
        }
      }, {
        key: "getFonologico",
        value: function getFonologico() {
          var _this4 = this;

          this.usuario.getPuntajeFonoloficaId().then(function (data) {
            _this4.fonologico = data;
          });
        }
      }, {
        key: "getVisual",
        value: function getVisual() {
          var _this5 = this;

          this.usuario.getPuntajeVisualId().then(function (data) {
            _this5.visual = data;
            console.log(Object.values(_this5.visual)[1]);
          });
        }
      }, {
        key: "getBase64ImageFromURL",
        value: function getBase64ImageFromURL() {
          var _this6 = this;

          var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "/public/users/".concat(Object.values(this.estudiante)[12]);
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            // create an image object
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;

            if (!img.complete) {
              // This will call another method that will create image from url
              img.onload = function () {
                observer.next(_this6.getBase64Image(img));
                observer.complete();
              };

              img.onerror = function (err) {
                observer.error(err);
              };
            } else {
              observer.next(_this6.getBase64Image(img));
              observer.complete();
            }
          });
        }
      }, {
        key: "getBase64Image",
        value: function getBase64Image(img) {
          // We create a HTML canvas object that will create a 2d image
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d"); // This will draw image

          ctx.drawImage(img, 0, 0); // Convert the drawn image to Data URL

          var dataURL = canvas.toDataURL("image/png");
          this.base64DefaultURL = dataURL;
          return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        }
      }, {
        key: "getImage",
        value: function getImage() {
          var _this7 = this;

          this.auxImagen = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "/public/users/".concat(Object.values(this.estudiante)[12]);
          this.getBase64ImageFromURL(this.auxImagen).subscribe(function (data) {
            _this7.base64TrimmedURL = data;
          }); // Naming the image

          var date = new Date().valueOf();
          var text = '';
          var possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

          for (var i = 0; i < 5; i++) {
            text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
          } // Replace extension according to your media type like this


          var imageName = date + '.' + text + '.jpeg';
          console.log(imageName); // call method that creates a blob from dataUri

          var imageBlob;
          this.dataURItoBlob(this.base64TrimmedURL).subscribe(function (data) {
            imageBlob = data;
          });
          var imageFile = new File([imageBlob], imageName, {
            type: 'image/jpeg'
          });
          this.generatedImage = window.URL.createObjectURL(imageFile);
          window.open(this.generatedImage);
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var byteString = window.atob(dataURI);
            var arrayBuffer = new ArrayBuffer(byteString.length);
            var int8Array = new Uint8Array(arrayBuffer);

            for (var i = 0; i < byteString.length; i++) {
              int8Array[i] = byteString.charCodeAt(i);
            }

            var blob = new Blob([int8Array], {
              type: 'image/jpeg'
            });
            observer.next(blob);
            observer.complete();
          });
        }
      }, {
        key: "generarPdf",
        value: function generarPdf() {
          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__();
          var imgData2 = 'data:image/png;base64,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';
          doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);
          doc.addImage(imgData2, 'JPEG', 100, 90, 20, 20);
          doc.setFontSize(12); // Datos Usuario

          doc.text(this.estudiante.nombre, 85, 123);
          doc.text(this.estudiante.apellido, 85, 135);
          doc.text(this.estudiante.telefono, 85, 146);
          doc.text(this.estudiante.email, 85, 154);
          var hoy = new Date();
          var fechaNacimiento = new Date(this.estudiante.fecha_nacimiento);
          var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
          var diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();

          if (diferenciaMeses < 0 || diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate()) {
            edad--;
          }

          var aux = new Date(this.estudiante.fecha_nacimiento);
          doc.text(aux.toLocaleString() + '  ' + edad.toString() + 'años', 85, 165);
          doc.text(this.estudiante.grado.toString(), 85, 175);
          doc.text(this.estudiante.unidad_educativa, 85, 190); //dislexia Reporte

          doc.setFontSize(16);
          doc.setDrawColor(255, 0, 0);
          doc.text('Dislexia Fonológica', 40, 220);

          if (Object.values(this.fonologico)[1] > 75) {
            doc.setFontSize(12);
            doc.text('El estudiante tiene un nivel de Dislexia bajo puede ser necesario que el  ', 45, 230);
            doc.text('estudiante visite un especialista  ', 45, 240);
          }

          if (Object.values(this.fonologico)[1] < 75) {
            doc.setFontSize(12);
            doc.text('El estudiante tiene un nivel de Dislexia  alto es necesario que se realicen  ', 45, 230);
            doc.text('pruebas con especialistas y un monitoreo continuo en su desempeño ', 45, 240);
          } //visual


          doc.setFontSize(16);
          doc.setDrawColor(255, 0, 0);
          doc.text('Dislexia Visual', 40, 250);

          if (Object.values(this.visual)[1] >= 75) {
            doc.setFontSize(12);
            doc.text('El estudiante tiene un nivel de Dislexia Visual bajo puede ser necesario que el  ', 45, 260);
            doc.text('estudiante visite un especialista especialmente a un oftalmólogo ', 45, 270);
          }

          if (Object.values(this.visual)[1] < 75) {
            doc.setFontSize(12);
            doc.text('El estudiante tiene un nivel de Dislexia alto es necesario que se realicen  ', 45, 260);
            doc.text('pruebas con especialistas y un monitoreo continuo en su desempeño ', 45, 270);
          }

          doc.save("".concat(Object.values(this.estudiante)[1], "_").concat(Object.values(this.estudiante)[2], "_reporte.pdf"));
        }
      }]);

      return DislexiaVisualComponent;
    }();

    DislexiaVisualComponent.puntajeJuego2 = 100;

    DislexiaVisualComponent.ɵfac = function DislexiaVisualComponent_Factory(t) {
      return new (t || DislexiaVisualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]));
    };

    DislexiaVisualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DislexiaVisualComponent,
      selectors: [["app-dislexia-visual"]],
      decls: 24,
      vars: 6,
      consts: [["id", "app-videos", 1, "page-layout", "simple"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "header", "accent", "p-16", "p-sm-24"], [1, "hero-text"], [1, "content", "p-24"], ["fxLayout", "column", "fxLayoutAlign", "center"], ["src", "/assets/audios/selecciona1.mp3", "autoplay", ""], ["fxFlex", "row"], ["fxFlex", "column"], ["align", "center", 1, "jumbotron", "mt-3"], [4, "ngIf"], ["fxFlex", "column", 4, "ngIf"], ["fxFlex", "column", "fxFlexAlign", "center center"], [1, "col-sm-2"], ["id", "buttonFinish2", "mat-button", "", 2, "background-color", "#0a68d9", "color", "white", 3, "click"], [1, "col-sm-1"], ["align", "center", 1, "col-sm-10"], ["height", "250", "width", "350", 3, "src"], ["class", "col-sm-2", "style", "margin-top: 40px", 4, "ngFor", "ngForOf"], [1, "col-sm-2", 2, "margin-top", "40px"], [3, "nombre", "indice", "palabraCorrecta"]],
      template: function DislexiaVisualComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " PRE DIAGN\xD3STICO DE DISLEXIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "audio", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Da clic sobre la palabra correcta ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DislexiaVisualComponent_div_13_Template, 11, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DislexiaVisualComponent_div_15_Template, 4, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DislexiaVisualComponent_Template_button_click_22_listener($event) {
            ctx.savePuntaje();
            return ctx.generarPdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Finalizar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estadoJuego2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estadoFinalJuego);
        }
      },
      styles: [".fondoColumna[_ngcontent-%COMP%]{\n  background-image:url(\"/assets/fondos/fondo-selva.jpg\");\n}\nh1[_ngcontent-%COMP%]{\n  color: #eeeceb;\n  text-align: center;\n  -webkit-text-decoration: aqua;\n          text-decoration: aqua;\n}\nh3[_ngcontent-%COMP%]{\n  text-align: center;\n}\n.tama\xF1o[_ngcontent-%COMP%]{\n\n}\n.borde[_ngcontent-%COMP%]{\n  border-style: solid;\n  border-width: 2.5px;\n  border-color: #ece7e7;\n}\n.mover[_ngcontent-%COMP%]{\n  position: absolute;\n  z-index: 9;\n}\n.borde[_ngcontent-%COMP%]:hover{\n  border-color: #fff;\n}\n.contenedor[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #8d8d8d;\n}\n.contenedor[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.fondo[_ngcontent-%COMP%]{\n  background-color: #dee77d;\n}\n.fondo1[_ngcontent-%COMP%]{\n  background-color: #f78272;\n}\n.fondo2[_ngcontent-%COMP%]{\n  background-color: #fdc32d;\n}\n.fondo3[_ngcontent-%COMP%]{\n  background-color: #1bcc97;\n}\n.fondo4[_ngcontent-%COMP%]{\n  background-color: aqua;\n}\n.titulo[_ngcontent-%COMP%]{\n  color: white;\n  text-align: center;\n  font-size: 2.5rem;\n}\np[_ngcontent-%COMP%]{\n  -webkit-text-decoration-color: aqua;\n          text-decoration-color: aqua;\n  text-justify: distribute;\n}\nh4[_ngcontent-%COMP%] {\n  cursor: default;\n  position: absolute;\n  top: 25px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 10px;\n  margin: auto;\n  display: block;\n\n  -webkit-animation: bounce .4s ease infinite alternate;\n\n  font-family: 'Erica One', cursive;\n  font-size: 25px;\n  color: #ececf1;\n  text-align: center;\n  line-height: 25px;\n  text-shadow: 0 1px 0 #CCC,\n  0 2px 0 #CCC,\n  0 3px 0 #CCC,\n  0 4px 0 #CCC,\n  0 5px 0 #CCC,\n  0 6px 0 transparent,\n  0 7px 0 transparent,\n  0 8px 0 transparent,\n  0 9px 0 transparent,\n  0 10px 10px rgba(0, 0, 0, .6);\n}\n\n@-webkit-keyframes bounce {\n  100% {\n    top: -25px;\n    text-shadow:\n      0 1px 0 cornflowerblue,\n      0 2px 0 cornflowerblue,\n      0 3px 0 cornflowerblue,\n      0 4px 0 cornflowerblue,\n      0 5px 0 cornflowerblue,\n      0 6px 0 cornflowerblue,\n      0 7px 0 cornflowerblue,\n      0 8px 0 cornflowerblue,\n      0 9px 0 cornflowerblue,\n      0 30px 30px rgba(0, 0, 0, .3);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL2Rpc2xleGlhLXBydWViYS9kaXNsZXhpYS12aXN1YWwvZGlzbGV4aWEtdmlzdWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7QUFHQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYzs7RUFFZCxxREFBcUQ7O0VBRXJELGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakI7Ozs7Ozs7OzsrQkFTNkI7QUFDL0I7QUFDQSxjQUFjO0FBQ2Q7RUFDRTtJQUNFLFVBQVU7SUFDVjs7Ozs7Ozs7OzttQ0FVK0I7RUFDakM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwcy9kaXNsZXhpYS1wcnVlYmEvZGlzbGV4aWEtdmlzdWFsL2Rpc2xleGlhLXZpc3VhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRvQ29sdW1uYXtcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ZvbmRvcy9mb25kby1zZWx2YS5qcGdcIik7XG59XG5oMXtcbiAgY29sb3I6ICNlZWVjZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBhcXVhO1xufVxuaDN7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YW1hw7Fve1xuXG59XG4uYm9yZGV7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMi41cHg7XG4gIGJvcmRlci1jb2xvcjogI2VjZTdlNztcbn1cbi5tb3ZlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xufVxuXG4uYm9yZGU6aG92ZXJ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOGQ4ZDhkO1xufVxuXG4uY29udGVuZWRvcjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9uZG97XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWU3N2Q7XG59XG4uZm9uZG8xe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4MjcyO1xufVxuLmZvbmRvMntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYzMyZDtcbn1cbi5mb25kbzN7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYmNjOTc7XG59XG4uZm9uZG80e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuLnRpdHVsb3tcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxucHtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBhcXVhO1xuICB0ZXh0LWp1c3RpZnk6IGRpc3RyaWJ1dGU7XG59XG5cblxuaDQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZSAuNHMgZWFzZSBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cbiAgZm9udC1mYW1pbHk6ICdFcmljYSBPbmUnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjZWNlY2YxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjQ0NDLFxuICAwIDJweCAwICNDQ0MsXG4gIDAgM3B4IDAgI0NDQyxcbiAgMCA0cHggMCAjQ0NDLFxuICAwIDVweCAwICNDQ0MsXG4gIDAgNnB4IDAgdHJhbnNwYXJlbnQsXG4gIDAgN3B4IDAgdHJhbnNwYXJlbnQsXG4gIDAgOHB4IDAgdHJhbnNwYXJlbnQsXG4gIDAgOXB4IDAgdHJhbnNwYXJlbnQsXG4gIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjYpO1xufVxuLyogQU5JTUFUSU9OICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcbiAgMTAwJSB7XG4gICAgdG9wOiAtMjVweDtcbiAgICB0ZXh0LXNoYWRvdzpcbiAgICAgIDAgMXB4IDAgY29ybmZsb3dlcmJsdWUsXG4gICAgICAwIDJweCAwIGNvcm5mbG93ZXJibHVlLFxuICAgICAgMCAzcHggMCBjb3JuZmxvd2VyYmx1ZSxcbiAgICAgIDAgNHB4IDAgY29ybmZsb3dlcmJsdWUsXG4gICAgICAwIDVweCAwIGNvcm5mbG93ZXJibHVlLFxuICAgICAgMCA2cHggMCBjb3JuZmxvd2VyYmx1ZSxcbiAgICAgIDAgN3B4IDAgY29ybmZsb3dlcmJsdWUsXG4gICAgICAwIDhweCAwIGNvcm5mbG93ZXJibHVlLFxuICAgICAgMCA5cHggMCBjb3JuZmxvd2VyYmx1ZSxcbiAgICAgIDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjMpO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DislexiaVisualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dislexia-visual',
          templateUrl: './dislexia-visual.component.html',
          styleUrls: ['./dislexia-visual.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/dislexia-prueba/juegos/caja/caja.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/main/apps/dislexia-prueba/juegos/caja/caja.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CajaComponent */

  /***/
  function srcAppMainAppsDislexiaPruebaJuegosCajaCajaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CajaComponent", function () {
      return CajaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CajaComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r880 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "caja" + ctx_r880.indice2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r880.letra);
      }
    }

    function CajaComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r881 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "caja" + ctx_r881.indice);
      }
    }

    var CajaComponent =
    /*#__PURE__*/
    function () {
      function CajaComponent() {
        _classCallCheck(this, CajaComponent);
      }

      _createClass(CajaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "seleccionoLetra",
        value: function seleccionoLetra() {
          var valor = document.getElementById('caja' + this.indice);

          if (this.letra === valor.textContent) {
            valor.className = 'cajas fondo';
            valor.style.color = 'black';

            valor.onmousedown = function () {
              return false;
            };
          } else {
            valor.style.backgroundColor = 'red';
            valor.style.color = 'blue';

            if (valor.textContent === '') {
              valor.style.backgroundColor = 'yellow';
            }
          }
        }
      }]);

      return CajaComponent;
    }();

    CajaComponent.ɵfac = function CajaComponent_Factory(t) {
      return new (t || CajaComponent)();
    };

    CajaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CajaComponent,
      selectors: [["app-caja"]],
      inputs: {
        letra: "letra",
        indice: "indice",
        indice2: "indice2"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "container"], [1, "box1"], [4, "ngIf"], ["onmousedown", "false", 1, "cajas", "fondo", 3, "id"], [1, "tamanioLetra2"], ["ondrop", "drop(event)", "ondragover", "allowDrop(event)", 1, "cajas", "fondo", 3, "id"], [2, "margin-top", "-25px"]],
      template: function CajaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CajaComponent_div_2_Template, 4, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CajaComponent_div_3_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.letra != "a" && ctx.letra != "e" && ctx.letra != "i" && ctx.letra != "o" && ctx.letra != "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.letra == "a" || ctx.letra == "e" || ctx.letra == "i" || ctx.letra == "o" || ctx.letra == "u");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.box1[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  width: 80px;\r\n  cursor: move;\r\n}\r\n\r\n.cajas[_ngcontent-%COMP%]{\r\n  border: 2px solid #333;\r\n  height: 45px;\r\n  width: 100%;\r\n}\r\n\r\n.tamanioLetra2[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n  margin-top: -10px;\r\n}\r\n\r\n.fondo[_ngcontent-%COMP%]{\r\n  background-color: #dee77d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL2Rpc2xleGlhLXBydWViYS9qdWVnb3MvY2FqYS9jYWphLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwcy9kaXNsZXhpYS1wcnVlYmEvanVlZ29zL2NhamEvY2FqYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm94MSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcblxyXG4uY2FqYXN7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YW1hbmlvTGV0cmEyIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5mb25kb3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlNzdkO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CajaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-caja',
          templateUrl: './caja.component.html',
          styleUrls: ['./caja.component.css']
        }]
      }], function () {
        return [];
      }, {
        letra: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        indice: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        indice2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/dislexia-prueba/juegos/juego2/juego2.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/main/apps/dislexia-prueba/juegos/juego2/juego2.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: Juego2Component */

  /***/
  function srcAppMainAppsDislexiaPruebaJuegosJuego2Juego2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Juego2Component", function () {
      return Juego2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../dislexia-visual/dislexia-visual.component */
    "./src/app/main/apps/dislexia-prueba/dislexia-visual/dislexia-visual.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var Juego2Component =
    /*#__PURE__*/
    function () {
      function Juego2Component(dislexiaComponente) {
        _classCallCheck(this, Juego2Component);

        this.dislexiaComponente = dislexiaComponente;
      }

      _createClass(Juego2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "seleccionoButton",
        value: function seleccionoButton() {
          var buttonSelect = document.getElementById('button' + this.indice);
          console.log(buttonSelect.textContent.toString().trim() !== this.palabraCorrecta.toString(), buttonSelect.textContent.toString().trim(), this.palabraCorrecta);

          if (buttonSelect.textContent.toString().trim() !== this.palabraCorrecta.toString().trim()) {
            console.log(_dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_1__["DislexiaVisualComponent"].puntajeJuego2);
            _dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_1__["DislexiaVisualComponent"].puntajeJuego2 = _dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_1__["DislexiaVisualComponent"].puntajeJuego2 - 16;
          }

          this.dislexiaComponente.siguientePalabra();
        }
      }]);

      return Juego2Component;
    }();

    Juego2Component.ɵfac = function Juego2Component_Factory(t) {
      return new (t || Juego2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_1__["DislexiaVisualComponent"]));
    };

    Juego2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Juego2Component,
      selectors: [["app-juego2"]],
      inputs: {
        nombre: "nombre",
        indice: "indice",
        palabraCorrecta: "palabraCorrecta"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "container"], ["mat-raised-button", "", 2, "width", "120px", "background-color", "#0a68d9", "color", "white", 3, "id", "click"]],
      template: function Juego2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Juego2Component_Template_button_click_1_listener($event) {
            return ctx.seleccionoButton();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "button" + ctx.indice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.nombre, " ");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: [".button[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 35px;\r\n  border-color: yellow;\r\n  font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL2Rpc2xleGlhLXBydWViYS9qdWVnb3MvanVlZ28yL2p1ZWdvMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwcy9kaXNsZXhpYS1wcnVlYmEvanVlZ29zL2p1ZWdvMi9qdWVnbzIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB5ZWxsb3c7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Juego2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-juego2',
          templateUrl: './juego2.component.html',
          styleUrls: ['./juego2.component.css']
        }]
      }], function () {
        return [{
          type: _dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_1__["DislexiaVisualComponent"]
        }];
      }, {
        nombre: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        indice: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        palabraCorrecta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/dislexia-prueba/juegos/vocal/vocal.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/main/apps/dislexia-prueba/juegos/vocal/vocal.component.ts ***!
    \***************************************************************************/

  /*! exports provided: VocalComponent */

  /***/
  function srcAppMainAppsDislexiaPruebaJuegosVocalVocalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VocalComponent", function () {
      return VocalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VocalComponent =
    /*#__PURE__*/
    function () {
      function VocalComponent() {
        _classCallCheck(this, VocalComponent);
      }

      _createClass(VocalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VocalComponent;
    }();

    VocalComponent.ɵfac = function VocalComponent_Factory(t) {
      return new (t || VocalComponent)();
    };

    VocalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VocalComponent,
      selectors: [["app-vocal"]],
      inputs: {
        vocal: "vocal",
        indice1: "indice1"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "container"], [1, "box"], ["id", "vocal", "ondrop", "drop(event)", "ondragover", "allowDrop(event)", 1, "cajas", "fondo"], ["ondragstart", "drag(event)", "draggable", "true", 1, "tamanioLetra", "borde", 3, "id"]],
      template: function VocalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "vocal" + ctx.indice1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.vocal);
        }
      },
      styles: [".fondo[_ngcontent-%COMP%]{\r\n  background-color: #dee77d;\r\n}\r\n.fondo1[_ngcontent-%COMP%]{\r\n  background-color: #f78272;\r\n}\r\n.fondo2[_ngcontent-%COMP%]{\r\n  background-color: #fdc32d;\r\n}\r\n.fondo3[_ngcontent-%COMP%]{\r\n  background-color: #1bcc97;\r\n}\r\n.fondo4[_ngcontent-%COMP%]{\r\n  background-color: aqua;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.box[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  text-align: center;\r\n  vertical-align: top;\r\n  width: 80px;\r\n  cursor: pointer;\r\n}\r\n.cajas[_ngcontent-%COMP%]{\r\n  border: 2px solid #333;\r\n  height: 45px;\r\n  width: 100%;\r\n}\r\n.tamanioLetra[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n  margin-top: -10px;\r\n}\r\n.detectar[_ngcontent-%COMP%]{\r\n  background: #ddd;\r\n  border: 3px dashed #aaa !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL2Rpc2xleGlhLXBydWViYS9qdWVnb3Mvdm9jYWwvdm9jYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUdBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwcy9kaXNsZXhpYS1wcnVlYmEvanVlZ29zL3ZvY2FsL3ZvY2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG97XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTc3ZDtcclxufVxyXG4uZm9uZG8xe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzgyNzI7XHJcbn1cclxuLmZvbmRvMntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjMzJkO1xyXG59XHJcbi5mb25kbzN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiY2M5NztcclxufVxyXG4uZm9uZG80e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FqYXN7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udGFtYW5pb0xldHJhIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5kZXRlY3RhcntcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIGJvcmRlcjogM3B4IGRhc2hlZCAjYWFhICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VocalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vocal',
          templateUrl: './vocal.component.html',
          styleUrls: ['./vocal.component.css']
        }]
      }], function () {
        return [];
      }, {
        vocal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        indice1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/dislexia-prueba/prediagnostico.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/main/apps/dislexia-prueba/prediagnostico.module.ts ***!
    \********************************************************************/

  /*! exports provided: PrediagnosticoModule */

  /***/
  function srcAppMainAppsDislexiaPruebaPrediagnosticoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrediagnosticoModule", function () {
      return PrediagnosticoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @fuse/components */
    "./src/@fuse/components/index.ts");
    /* harmony import */


    var _dislexia_prueba_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./dislexia-prueba.component */
    "./src/app/main/apps/dislexia-prueba/dislexia-prueba.component.ts");
    /* harmony import */


    var _dislexia_test_dislexia_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dislexia-test/dislexia-test.component */
    "./src/app/main/apps/dislexia-prueba/dislexia-test/dislexia-test.component.ts");
    /* harmony import */


    var _juegos_vocal_vocal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./juegos/vocal/vocal.component */
    "./src/app/main/apps/dislexia-prueba/juegos/vocal/vocal.component.ts");
    /* harmony import */


    var _juegos_juego2_juego2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./juegos/juego2/juego2.component */
    "./src/app/main/apps/dislexia-prueba/juegos/juego2/juego2.component.ts");
    /* harmony import */


    var _juegos_caja_caja_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./juegos/caja/caja.component */
    "./src/app/main/apps/dislexia-prueba/juegos/caja/caja.component.ts");
    /* harmony import */


    var _dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./dislexia-visual/dislexia-visual.component */
    "./src/app/main/apps/dislexia-prueba/dislexia-visual/dislexia-visual.component.ts");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js");
    /* harmony import */


    var _fuse_directives_fuse_if_on_dom_fuse_if_on_dom_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @fuse/directives/fuse-if-on-dom/fuse-if-on-dom.directive */
    "./src/@fuse/directives/fuse-if-on-dom/fuse-if-on-dom.directive.ts");
    /* harmony import */


    var _fuse_directives_fuse_inner_scroll_fuse_inner_scroll_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @fuse/directives/fuse-inner-scroll/fuse-inner-scroll.directive */
    "./src/@fuse/directives/fuse-inner-scroll/fuse-inner-scroll.directive.ts");
    /* harmony import */


    var _fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.directive */
    "./src/@fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.directive.ts");
    /* harmony import */


    var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
    "./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
    /* harmony import */


    var _fuse_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ../../../../@fuse/components/sidebar/sidebar.component */
    "./src/@fuse/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _fuse_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ../../../../@fuse/pipes/keys.pipe */
    "./src/@fuse/pipes/keys.pipe.ts");
    /* harmony import */


    var _fuse_pipes_getById_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ../../../../@fuse/pipes/getById.pipe */
    "./src/@fuse/pipes/getById.pipe.ts");
    /* harmony import */


    var _fuse_pipes_htmlToPlaintext_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ../../../../@fuse/pipes/htmlToPlaintext.pipe */
    "./src/@fuse/pipes/htmlToPlaintext.pipe.ts");
    /* harmony import */


    var _fuse_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ../../../../@fuse/pipes/filter.pipe */
    "./src/@fuse/pipes/filter.pipe.ts");
    /* harmony import */


    var _fuse_pipes_camelCaseToDash_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ../../../../@fuse/pipes/camelCaseToDash.pipe */
    "./src/@fuse/pipes/camelCaseToDash.pipe.ts");

    var routes = [{
      path: 'fonologica',
      component: _dislexia_test_dislexia_test_component__WEBPACK_IMPORTED_MODULE_15__["DislexiaTestComponent"]
    }, {
      path: 'visual',
      component: _dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_19__["DislexiaVisualComponent"]
    }, {
      path: '**',
      component: _dislexia_prueba_component__WEBPACK_IMPORTED_MODULE_14__["DislexiaPruebaComponent"]
    }];

    var PrediagnosticoModule = function PrediagnosticoModule() {
      _classCallCheck(this, PrediagnosticoModule);
    };

    PrediagnosticoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PrediagnosticoModule
    });
    PrediagnosticoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PrediagnosticoModule_Factory(t) {
        return new (t || PrediagnosticoModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_13__["FuseConfirmDialogModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_13__["FuseSidebarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrediagnosticoModule, {
        declarations: [_dislexia_prueba_component__WEBPACK_IMPORTED_MODULE_14__["DislexiaPruebaComponent"], _dislexia_test_dislexia_test_component__WEBPACK_IMPORTED_MODULE_15__["DislexiaTestComponent"], _juegos_caja_caja_component__WEBPACK_IMPORTED_MODULE_18__["CajaComponent"], _juegos_juego2_juego2_component__WEBPACK_IMPORTED_MODULE_17__["Juego2Component"], _juegos_vocal_vocal_component__WEBPACK_IMPORTED_MODULE_16__["VocalComponent"], _dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_19__["DislexiaVisualComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_13__["FuseConfirmDialogModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_13__["FuseSidebarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrediagnosticoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dislexia_prueba_component__WEBPACK_IMPORTED_MODULE_14__["DislexiaPruebaComponent"], _dislexia_test_dislexia_test_component__WEBPACK_IMPORTED_MODULE_15__["DislexiaTestComponent"], _juegos_caja_caja_component__WEBPACK_IMPORTED_MODULE_18__["CajaComponent"], _juegos_juego2_juego2_component__WEBPACK_IMPORTED_MODULE_17__["Juego2Component"], _juegos_vocal_vocal_component__WEBPACK_IMPORTED_MODULE_16__["VocalComponent"], _dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_19__["DislexiaVisualComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_13__["FuseConfirmDialogModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_13__["FuseSidebarModule"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_19__["DislexiaVisualComponent"], [_dislexia_prueba_component__WEBPACK_IMPORTED_MODULE_14__["DislexiaPruebaComponent"], _dislexia_test_dislexia_test_component__WEBPACK_IMPORTED_MODULE_15__["DislexiaTestComponent"], _juegos_caja_caja_component__WEBPACK_IMPORTED_MODULE_18__["CajaComponent"], _juegos_juego2_juego2_component__WEBPACK_IMPORTED_MODULE_17__["Juego2Component"], _juegos_vocal_vocal_component__WEBPACK_IMPORTED_MODULE_16__["VocalComponent"], _dislexia_visual_dislexia_visual_component__WEBPACK_IMPORTED_MODULE_19__["DislexiaVisualComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Dir"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxRequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeader"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatTextareaAutosize"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuContent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTextColumn"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormArrayName"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultFlexOrderDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultFlexOffsetDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultFlexAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["DefaultShowHideDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["DefaultClassDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["DefaultStyleDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["DefaultImgSrcDirective"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privatec"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privatef"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privatei"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privatel"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privateo"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privater"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privateu"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privatex"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privateba"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privatebd"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["ɵgrid_privatebg"], _fuse_directives_fuse_if_on_dom_fuse_if_on_dom_directive__WEBPACK_IMPORTED_MODULE_27__["FuseIfOnDomDirective"], _fuse_directives_fuse_inner_scroll_fuse_inner_scroll_directive__WEBPACK_IMPORTED_MODULE_28__["FuseInnerScrollDirective"], _fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_directive__WEBPACK_IMPORTED_MODULE_29__["FuseMatSidenavHelperDirective"], _fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_directive__WEBPACK_IMPORTED_MODULE_29__["FuseMatSidenavTogglerDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_30__["FusePerfectScrollbarDirective"], _fuse_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_31__["FuseSidebarComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["KeyValuePipe"], _fuse_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_32__["KeysPipe"], _fuse_pipes_getById_pipe__WEBPACK_IMPORTED_MODULE_33__["GetByIdPipe"], _fuse_pipes_htmlToPlaintext_pipe__WEBPACK_IMPORTED_MODULE_34__["HtmlToPlaintextPipe"], _fuse_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_35__["FilterPipe"], _fuse_pipes_camelCaseToDash_pipe__WEBPACK_IMPORTED_MODULE_36__["CamelCaseToDashPipe"]]);
    /***/

  },

  /***/
  "./src/app/main/servicios/usuario.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/main/servicios/usuario.service.ts ***!
    \***************************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppMainServiciosUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var UsuarioService =
    /*#__PURE__*/
    function () {
      function UsuarioService(http) {
        _classCallCheck(this, UsuarioService);

        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
      }

      _createClass(UsuarioService, [{
        key: "getUsuario",
        value: function getUsuario(nick) {
          var _this8 = this;

          return new Promise(function (resolve) {
            _this8.http.get(_this8.apiUrl + '/usuario/' + nick, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (data) {
              resolve(data);
              _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].idProfesor = Object.values(data)[0];
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "getCuentosId",
        value: function getCuentosId(idCuento) {
          var _this9 = this;

          return new Promise(function (resolve) {
            _this9.http.get(_this9.apiUrl + '/cuentos/' + idCuento, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (data) {
              resolve(data);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "getCuentos",
        value: function getCuentos() {
          var _this10 = this;

          return new Promise(function (resolve) {
            _this10.http.get(_this10.apiUrl + '/cuentos', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (data) {
              resolve(data);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "getEstudiante",
        value: function getEstudiante(nickUsuario) {
          var _this11 = this;

          return new Promise(function (resolve) {
            _this11.http.get(_this11.apiUrl + '/estudiante/' + nickUsuario, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (data) {
              resolve(data);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "saveCalificacionEstudiante",
        value: function saveCalificacionEstudiante(estudianteId, calificacionId) {
          var _this12 = this;

          var param = {
            estudianteId: estudianteId,
            calificacionId: calificacionId
          };
          return new Promise(function (resolve, reject) {
            _this12.http.post(_this12.apiUrl + '/estudianteCalificacion', param, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getEstudianteId",
        value: function getEstudianteId(idEstudiante) {
          var _this13 = this;

          return new Promise(function (resolve) {
            _this13.http.get(_this13.apiUrl + '/estudiante/id/' + idEstudiante, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (data) {
              resolve(data);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "getPuntajeFonoloficaId",
        value: function getPuntajeFonoloficaId() {
          var _this14 = this;

          this.idpuntajeFonologico = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].idPuntaje - 1;
          return new Promise(function (resolve) {
            _this14.http.get(_this14.apiUrl + '/puntaje/' + _this14.idpuntajeFonologico, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (data) {
              resolve(data);
              console.log(data);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "getPuntajeVisualId",
        value: function getPuntajeVisualId() {
          var _this15 = this;

          return new Promise(function (resolve) {
            _this15.http.get(_this15.apiUrl + '/puntaje/' + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].idPuntaje, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (data) {
              resolve(data);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "savePuntajeEstudiante",
        value: function savePuntajeEstudiante(estudianteId, puntajeId) {
          var _this16 = this;

          var param = {
            estudianteId: estudianteId,
            puntajeId: puntajeId
          };
          return new Promise(function (resolve, reject) {
            _this16.http.post(_this16.apiUrl + '/estudiantePuntaje', param, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "postCalificaciones",
        value: function postCalificaciones(calificacion) {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            _this17.http.post(_this17.apiUrl + '/calificaciones', calificacion, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "postPuntaje",
        value: function postPuntaje(puntaje, detalle) {
          var _this18 = this;

          var param = {
            puntaje: puntaje,
            detalle: detalle
          };
          return new Promise(function (resolve, reject) {
            _this18.http.post(_this18.apiUrl + '/puntaje', param, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "postAgenda",
        value: function postAgenda(fecha, fecha_fin, nombre, hora_inicio, hora_fin, ubicacion, etiqueta, descripcion) {
          var _this19 = this;

          var param = {
            fecha: fecha,
            fecha_fin: fecha_fin,
            nombre: nombre,
            hora_inicio: hora_inicio,
            hora_fin: hora_fin,
            ubicacion: ubicacion,
            etiqueta: etiqueta,
            descripcion: descripcion
          };
          return new Promise(function (resolve, reject) {
            _this19.http.post(_this19.apiUrl + '/agenda', param, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "saveAgendaProfesor",
        value: function saveAgendaProfesor(usuarioId, agendaId) {
          var _this20 = this;

          var param = {
            usuarioId: usuarioId,
            agendaId: agendaId
          };
          return new Promise(function (resolve, reject) {
            _this20.http.post(_this20.apiUrl + '/agendaProfesor', param, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(file) {
          var urlServicios = this.apiUrl + '/usuario/upload-image';
          var formData = new FormData();
          formData.append('image', file);
          return this.http.post(urlServicios, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
            })
          });
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ɵfac = function UsuarioService_Factory(t) {
      return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsuarioService,
      factory: UsuarioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=dislexia-prueba-prediagnostico-module-es5.js.map