function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"], {
  /***/
  "./node_modules/@angular/common/locales/es.js":
  /*!****************************************************!*\
    !*** ./node_modules/@angular/common/locales/es.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCommonLocalesEsJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */


    (function (factory) {
      if (true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
      } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      }
    })(function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      }); // THIS CODE IS GENERATED - DO NOT MODIFY
      // See angular/tools/gulp-tasks/cldr/extract.js

      var u = undefined;

      function plural(n) {
        if (n === 1) return 1;
        return 5;
      }

      exports.default = ['es', [['a. m.', 'p. m.'], u, u], u, [['D', 'L', 'M', 'X', 'J', 'V', 'S'], ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'], ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'], ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']], u, [['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'], ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']], u, [['a. C.', 'd. C.'], u, ['antes de Cristo', 'después de Cristo']], 1, [6, 0], ['d/M/yy', 'd MMM y', 'd \'de\' MMMM \'de\' y', 'EEEE, d \'de\' MMMM \'de\' y'], ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss (zzzz)'], ['{1} {0}', u, '{1}, {0}', u], [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'EUR', '€', 'euro', {
        'AUD': [u, '$'],
        'BRL': [u, 'R$'],
        'CNY': [u, '¥'],
        'EGP': [],
        'ESP': ['₧'],
        'GBP': [u, '£'],
        'HKD': [u, '$'],
        'ILS': [u, '₪'],
        'INR': [u, '₹'],
        'JPY': [u, '¥'],
        'KRW': [u, '₩'],
        'MXN': [u, '$'],
        'NZD': [u, '$'],
        'RON': [u, 'L'],
        'THB': ['฿'],
        'TWD': [u, 'NT$'],
        'USD': ['US$', '$'],
        'XAF': [],
        'XCD': [u, '$'],
        'XOF': []
      }, plural];
    }); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsSUFBSTtRQUNKLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQzdGLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBQzFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RDtnQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTTtnQkFDdkYsTUFBTTthQUNQO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZO2dCQUN0RixTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVc7YUFDcEM7U0FDRjtRQUNELENBQUM7UUFDRCxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNOLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQztRQUMvRSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDO1FBQ2xELENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDN0MsS0FBSztRQUNMLEdBQUc7UUFDSCxNQUFNO1FBQ047WUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDbkIsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChuID09PSAxKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2VzJyxcbiAgW1snYS7CoG0uJywgJ3AuwqBtLiddLCB1LCB1XSxcbiAgdSxcbiAgW1xuICAgIFsnRCcsICdMJywgJ00nLCAnWCcsICdKJywgJ1YnLCAnUyddLCBbJ2RvbS4nLCAnbHVuLicsICdtYXIuJywgJ21pw6kuJywgJ2p1ZS4nLCAndmllLicsICdzw6FiLiddLFxuICAgIFsnZG9taW5nbycsICdsdW5lcycsICdtYXJ0ZXMnLCAnbWnDqXJjb2xlcycsICdqdWV2ZXMnLCAndmllcm5lcycsICdzw6FiYWRvJ10sXG4gICAgWydETycsICdMVScsICdNQScsICdNSScsICdKVScsICdWSScsICdTQSddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ0UnLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gICAgW1xuICAgICAgJ2VuZS4nLCAnZmViLicsICdtYXIuJywgJ2Fici4nLCAnbWF5LicsICdqdW4uJywgJ2p1bC4nLCAnYWdvLicsICdzZXB0LicsICdvY3QuJywgJ25vdi4nLFxuICAgICAgJ2RpYy4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnZW5lcm8nLCAnZmVicmVybycsICdtYXJ6bycsICdhYnJpbCcsICdtYXlvJywgJ2p1bmlvJywgJ2p1bGlvJywgJ2Fnb3N0bycsICdzZXB0aWVtYnJlJyxcbiAgICAgICdvY3R1YnJlJywgJ25vdmllbWJyZScsICdkaWNpZW1icmUnXG4gICAgXVxuICBdLFxuICB1LFxuICBbWydhLiBDLicsICdkLiBDLiddLCB1LCBbJ2FudGVzIGRlIENyaXN0bycsICdkZXNwdcOpcyBkZSBDcmlzdG8nXV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkL00veXknLCAnZCBNTU0geScsICdkIFxcJ2RlXFwnIE1NTU0gXFwnZGVcXCcgeScsICdFRUVFLCBkIFxcJ2RlXFwnIE1NTU0gXFwnZGVcXCcgeSddLFxuICBbJ0g6bW0nLCAnSDptbTpzcycsICdIOm1tOnNzIHonLCAnSDptbTpzcyAoenp6eiknXSxcbiAgWyd7MX0gezB9JywgdSwgJ3sxfSwgezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwwqAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ0VVUicsXG4gICfigqwnLFxuICAnZXVybycsXG4gIHtcbiAgICAnQVVEJzogW3UsICckJ10sXG4gICAgJ0JSTCc6IFt1LCAnUiQnXSxcbiAgICAnQ05ZJzogW3UsICfCpSddLFxuICAgICdFR1AnOiBbXSxcbiAgICAnRVNQJzogWyfigqcnXSxcbiAgICAnR0JQJzogW3UsICfCoyddLFxuICAgICdIS0QnOiBbdSwgJyQnXSxcbiAgICAnSUxTJzogW3UsICfigqonXSxcbiAgICAnSU5SJzogW3UsICfigrknXSxcbiAgICAnSlBZJzogW3UsICfCpSddLFxuICAgICdLUlcnOiBbdSwgJ+KCqSddLFxuICAgICdNWE4nOiBbdSwgJyQnXSxcbiAgICAnTlpEJzogW3UsICckJ10sXG4gICAgJ1JPTic6IFt1LCAnTCddLFxuICAgICdUSEInOiBbJ+C4vyddLFxuICAgICdUV0QnOiBbdSwgJ05UJCddLFxuICAgICdVU0QnOiBbJ1VTJCcsICckJ10sXG4gICAgJ1hBRic6IFtdLFxuICAgICdYQ0QnOiBbdSwgJyQnXSxcbiAgICAnWE9GJzogW11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19

    /***/

  },

  /***/
  "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js ***!
    \*********************************************************************************/

  /*! exports provided: DAYS_OF_WEEK, CalendarA11y, CalendarAngularDateFormatter, CalendarCommonModule, CalendarDateFormatter, CalendarDayModule, CalendarDayViewComponent, CalendarEventTimesChangedEventType, CalendarEventTitleFormatter, CalendarModule, CalendarMomentDateFormatter, CalendarMonthModule, CalendarMonthViewComponent, CalendarNativeDateFormatter, CalendarUtils, CalendarView, CalendarWeekModule, CalendarWeekViewComponent, DateAdapter, MOMENT, collapseAnimation, getWeekViewPeriod, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */

  /***/
  function node_modulesAngularCalendar__ivy_ngcc__Fesm2015AngularCalendarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarA11y", function () {
      return CalendarA11y;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function () {
      return CalendarAngularDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function () {
      return CalendarCommonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function () {
      return CalendarDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function () {
      return CalendarDayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function () {
      return CalendarDayViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function () {
      return CalendarEventTimesChangedEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function () {
      return CalendarEventTitleFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function () {
      return CalendarMomentDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function () {
      return CalendarMonthModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function () {
      return CalendarMonthViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function () {
      return CalendarNativeDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarUtils", function () {
      return CalendarUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarView", function () {
      return CalendarView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function () {
      return CalendarWeekModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function () {
      return CalendarWeekViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return DateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MOMENT", function () {
      return MOMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapseAnimation", function () {
      return collapseAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function () {
      return getWeekViewPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CalendarOpenDayEventsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CalendarEventActionsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return CalendarEventTitleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return CalendarTooltipWindowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return CalendarTooltipDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return CalendarPreviousViewDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return CalendarNextViewDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return CalendarTodayDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return CalendarDatePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return CalendarEventTitlePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return CalendarA11yPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return ClickDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return KeydownEnterDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return CalendarMonthCellComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return CalendarMonthViewHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return CalendarWeekViewHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return CalendarWeekViewEventComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return CalendarWeekViewHourSegmentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return CalendarWeekViewCurrentTimeMarkerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! positioning */
    "./node_modules/positioning/dist/entry.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! calendar-utils */
    "./node_modules/calendar-utils/calendar-utils.js");
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-resizable-element */
    "./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return calendar_utils__WEBPACK_IMPORTED_MODULE_6__["DAYS_OF_WEEK"];
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var _c0 = function _c0(a0) {
      return {
        action: a0
      };
    };

    function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r222);

          var action_r219 = ctx.$implicit;

          var event_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).event;

          return action_r219.onClick({
            event: event_r215,
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlKeydownEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r222);

          var action_r219 = ctx.$implicit;

          var event_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).event;

          return action_r219.onClick({
            event: event_r215,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var action_r219 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", action_r219.cssClass)("innerHtml", action_r219.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, action_r219), "actionButtonLabel"));
      }
    }

    function CalendarEventActionsComponent_ng_template_0_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template, 2, 8, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var event_r215 = ctx_r225.event;
        var trackByActionId_r216 = ctx_r225.trackByActionId;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", event_r215.actions)("ngForTrackBy", trackByActionId_r216);
      }
    }

    function CalendarEventActionsComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_span_0_Template, 2, 2, "span", 2);
      }

      if (rf & 2) {
        var event_r215 = ctx.event;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r215.actions);
      }
    }

    function CalendarEventActionsComponent_ng_template_2_Template(rf, ctx) {}

    var _c1 = function _c1(a0, a1) {
      return {
        event: a0,
        trackByActionId: a1
      };
    };

    var _c2 = function _c2() {
      return {};
    };

    function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarEventTitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarA11y");
      }

      if (rf & 2) {
        var event_r229 = ctx.event;
        var view_r230 = ctx.view;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 2, event_r229.title, view_r230, event_r229), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2), "hideEventTitle"));
      }
    }

    function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) {}

    var _c3 = function _c3(a0, a1) {
      return {
        event: a0,
        view: a1
      };
    };

    function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contents_r234 = ctx.contents;
        var placement_r235 = ctx.placement;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "cal-tooltip-" + placement_r235);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", contents_r234, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) {}

    var _c4 = function _c4(a0, a1, a2) {
      return {
        contents: a0,
        placement: a1,
        event: a2
      };
    };

    var _c5 = function _c5(a0) {
      return {
        backgroundColor: a0
      };
    };

    function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-month-cell", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r242);

          var day_r240 = ctx.$implicit;

          var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r241.dayClicked.emit({
            day: day_r240,
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r242);

          var day_r240 = ctx.$implicit;

          var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r243.dayClicked.emit({
            day: day_r240,
            sourceEvent: $event
          });
        })("highlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r242);

          var ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r244.toggleDayHighlight($event.event, true);
        })("unhighlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r242);

          var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r245.toggleDayHighlight($event.event, false);
        })("drop", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r242);

          var day_r240 = ctx.$implicit;

          var ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r246.eventDropped(day_r240, $event.dropData.event, $event.dropData.draggedFrom);
        })("eventClicked", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r242);

          var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r247.eventClicked.emit({
            event: $event.event,
            sourceEvent: $event.sourceEvent
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r240 = ctx.$implicit;

        var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", day_r240 == null ? null : day_r240.cssClass)("day", day_r240)("openDay", ctx_r239.openDay)("locale", ctx_r239.locale)("tooltipPlacement", ctx_r239.tooltipPlacement)("tooltipAppendToBody", ctx_r239.tooltipAppendToBody)("tooltipTemplate", ctx_r239.tooltipTemplate)("tooltipDelay", ctx_r239.tooltipDelay)("customTemplate", ctx_r239.cellTemplate)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c5, day_r240.backgroundColor))("clickListenerDisabled", ctx_r239.dayClicked.observers.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c2), "monthCellTabIndex"));
      }
    }

    function CalendarMonthViewComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template, 2, 18, "mwl-calendar-month-cell", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mwl-calendar-open-day-events", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_eventClicked_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r249);

          var ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r248.eventClicked.emit({
            event: $event.event,
            sourceEvent: $event.sourceEvent
          });
        })("drop", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_drop_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r249);

          var ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r250.eventDropped(ctx_r250.openDay, $event.dropData.event, $event.dropData.draggedFrom);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowIndex_r238 = ctx.$implicit;

        var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 9, ctx_r237.view.days, rowIndex_r238, rowIndex_r238 + ctx_r237.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r237.trackByDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r237.locale)("isOpen", ctx_r237.openRowIndex === rowIndex_r238)("events", ctx_r237.openDay == null ? null : ctx_r237.openDay.events)("date", ctx_r237.openDay == null ? null : ctx_r237.openDay.date)("customTemplate", ctx_r237.openDayEventsTemplate)("eventTitleTemplate", ctx_r237.eventTitleTemplate)("eventActionsTemplate", ctx_r237.eventActionsTemplate);
      }
    }

    function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r260);

          var day_r258 = ctx.$implicit;

          var ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r259.columnHeaderClicked.emit({
            isoDayNumber: day_r258.day,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r258 = ctx.$implicit;

        var locale_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-past", day_r258.isPast)("cal-today", day_r258.isToday)("cal-future", day_r258.isFuture)("cal-weekend", day_r258.isWeekend);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", day_r258.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 10, day_r258.date, "monthViewColumnHeader", locale_r255), " ");
      }
    }

    function CalendarMonthViewHeaderComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template, 3, 14, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var days_r254 = ctx.days;
        var trackByWeekDayHeaderDate_r256 = ctx.trackByWeekDayHeaderDate;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", days_r254)("ngForTrackBy", trackByWeekDayHeaderDate_r256);
      }
    }

    function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) {}

    var _c6 = function _c6(a0, a1, a2) {
      return {
        days: a0,
        locale: a1,
        trackByWeekDayHeaderDate: a2
      };
    };

    function CalendarMonthCellComponent_ng_template_0_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().day;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](day_r265.badgeTotal);
      }
    }

    var _c7 = function _c7(a0, a1) {
      return {
        event: a0,
        draggedFrom: a1
      };
    };

    var _c8 = function _c8(a0, a1) {
      return {
        x: a0,
        y: a1
      };
    };

    function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseenter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r284);

          var event_r281 = ctx.$implicit;

          var highlightDay_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).highlightDay;

          return highlightDay_r269.emit({
            event: event_r281
          });
        })("mouseleave", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseleave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r284);

          var event_r281 = ctx.$implicit;

          var unhighlightDay_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).unhighlightDay;

          return unhighlightDay_r270.emit({
            event: event_r281
          });
        })("mwlClick", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r284);

          var event_r281 = ctx.$implicit;

          var eventClicked_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).eventClicked;

          return eventClicked_r271.emit({
            event: event_r281,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarEventTitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r281 = ctx.$implicit;

        var ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var tooltipPlacement_r268 = ctx_r289.tooltipPlacement;
        var tooltipTemplate_r272 = ctx_r289.tooltipTemplate;
        var tooltipAppendToBody_r273 = ctx_r289.tooltipAppendToBody;
        var tooltipDelay_r274 = ctx_r289.tooltipDelay;
        var day_r265 = ctx_r289.day;
        var validateDrag_r276 = ctx_r289.validateDrag;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", event_r281.draggable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c5, event_r281.color == null ? null : event_r281.color.primary))("ngClass", event_r281 == null ? null : event_r281.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 14, event_r281.title, "monthTooltip", event_r281))("tooltipPlacement", tooltipPlacement_r268)("tooltipEvent", event_r281)("tooltipTemplate", tooltipTemplate_r272)("tooltipAppendToBody", tooltipAppendToBody_r273)("tooltipDelay", tooltipDelay_r274)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c7, event_r281, day_r265))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](26, _c8, event_r281.draggable, event_r281.draggable))("validateDrag", validateDrag_r276);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c2), "hideMonthCellEvents"));
      }
    }

    function CalendarMonthCellComponent_ng_template_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template, 3, 30, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var day_r265 = ctx_r290.day;
        var trackByEventId_r275 = ctx_r290.trackByEventId;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", day_r265.events)("ngForTrackBy", trackByEventId_r275);
      }
    }

    var _c9 = function _c9(a0, a1) {
      return {
        day: a0,
        locale: a1
      };
    };

    function CalendarMonthCellComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarMonthCellComponent_ng_template_0_span_3_Template, 2, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CalendarMonthCellComponent_ng_template_0_div_7_Template, 2, 2, "div", 6);
      }

      if (rf & 2) {
        var day_r265 = ctx.day;
        var locale_r267 = ctx.locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c9, day_r265, locale_r267), "monthCell"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", day_r265.badgeTotal > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](6, 7, day_r265.date, "monthViewDayNumber", locale_r267));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", day_r265.events.length > 0);
      }
    }

    function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) {}

    var _c10 = function _c10(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      return {
        day: a0,
        openDay: a1,
        locale: a2,
        tooltipPlacement: a3,
        highlightDay: a4,
        unhighlightDay: a5,
        eventClicked: a6,
        tooltipTemplate: a7,
        tooltipAppendToBody: a8,
        tooltipDelay: a9,
        trackByEventId: a10,
        validateDrag: a11
      };
    };

    var _c11 = function _c11(a0) {
      return {
        event: a0
      };
    };

    var _c12 = function _c12(a0, a1) {
      return {
        event: a0,
        locale: a1
      };
    };

    function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mwl-calendar-event-title", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlClick_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r303);

          var event_r301 = ctx.$implicit;

          var eventClicked_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).eventClicked;

          return eventClicked_r295.emit({
            event: event_r301,
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r303);

          var event_r301 = ctx.$implicit;

          var eventClicked_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).eventClicked;

          return eventClicked_r295.emit({
            event: event_r301,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mwl-calendar-event-actions", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r301 = ctx.$implicit;

        var validateDrag_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).validateDrag;

        var ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", event_r301.draggable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", event_r301 == null ? null : event_r301.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c11, event_r301))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c8, event_r301.draggable, event_r301.draggable))("validateDrag", validateDrag_r298);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c5, event_r301.color == null ? null : event_r301.color.primary));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", event_r301)("customTemplate", ctx_r300.eventTitleTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c12, event_r301, ctx_r300.locale), "eventDescription"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", event_r301)("customTemplate", ctx_r300.eventActionsTemplate);
      }
    }

    var _c13 = function _c13(a0, a1) {
      return {
        date: a0,
        locale: a1
      };
    };

    function CalendarOpenDayEventsComponent_ng_template_0_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template, 7, 25, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var events_r294 = ctx_r308.events;
        var trackByEventId_r297 = ctx_r308.trackByEventId;

        var ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@collapse", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c13, ctx_r299.date, ctx_r299.locale), "openDayEventsAlert"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c13, ctx_r299.date, ctx_r299.locale), "openDayEventsLandmark"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", events_r294)("ngForTrackBy", trackByEventId_r297);
      }
    }

    function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_div_0_Template, 6, 17, "div", 2);
      }

      if (rf & 2) {
        var isOpen_r296 = ctx.isOpen;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isOpen_r296);
      }
    }

    function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) {}

    var _c14 = function _c14(a0, a1, a2, a3, a4) {
      return {
        events: a0,
        eventClicked: a1,
        isOpen: a2,
        trackByEventId: a3,
        validateDrag: a4
      };
    };

    function CalendarWeekViewComponent_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function CalendarWeekViewComponent_div_2_div_4_Template_div_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r318);

          var day_r316 = ctx.$implicit;

          var ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r317.eventDropped($event, day_r316.date, true);
        })("dragEnter", function CalendarWeekViewComponent_div_2_div_4_Template_div_dragEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r318);

          var day_r316 = ctx.$implicit;

          var ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r319.dateDragEnter(day_r316.date);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c15 = function _c15() {
      return {
        left: true
      };
    };

    function CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c15));
      }
    }

    var _c16 = function _c16() {
      return {
        right: true
      };
    };

    function CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c16));
      }
    }

    var _c17 = function _c17(a0, a1) {
      return {
        left: a0,
        right: a1
      };
    };

    var _c18 = function _c18(a0, a1) {
      return {
        event: a0,
        calendarId: a1
      };
    };

    var _c19 = function _c19(a0) {
      return {
        x: a0
      };
    };

    function CalendarWeekViewComponent_div_2_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r328 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r328);

          var allDayEvent_r323 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r321 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r327.allDayEventResizeStarted(_r321, allDayEvent_r323, $event);
        })("resizing", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizing_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r328);

          var allDayEvent_r323 = ctx.$implicit;

          var ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r329.allDayEventResizing(allDayEvent_r323, $event, ctx_r329.dayColumnWidth);
        })("resizeEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r328);

          var allDayEvent_r323 = ctx.$implicit;

          var ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r330.allDayEventResizeEnded(allDayEvent_r323);
        })("dragStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r328);

          var _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r321 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r331.dragStarted(_r321, _r324);
        })("dragging", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragging_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r328);

          var ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r332.allDayEventDragMove();
        })("dragEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r328);

          var allDayEvent_r323 = ctx.$implicit;

          var ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r333.dragEnded(allDayEvent_r323, $event, ctx_r333.dayColumnWidth);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template, 1, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mwl-calendar-week-view-event", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r328);

          var allDayEvent_r323 = ctx.$implicit;

          var ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r334.eventClicked.emit({
            event: allDayEvent_r323.event,
            sourceEvent: $event.sourceEvent
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template, 1, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var allDayEvent_r323 = ctx.$implicit;

        var ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100 / ctx_r322.days.length * allDayEvent_r323.span, "%")("margin-left", 100 / ctx_r322.days.length * allDayEvent_r323.offset, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", allDayEvent_r323.event.draggable && ctx_r322.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r323.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r323.endsAfterWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", allDayEvent_r323.event == null ? null : allDayEvent_r323.event.cssClass)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](29, _c17, ctx_r322.dayColumnWidth, ctx_r322.dayColumnWidth))("validateResize", ctx_r322.validateResize)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](32, _c18, allDayEvent_r323.event, ctx_r322.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](35, _c8, allDayEvent_r323.event.draggable && ctx_r322.allDayEventResizes.size === 0, !ctx_r322.snapDraggedEvents && allDayEvent_r323.event.draggable && ctx_r322.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r322.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c19, ctx_r322.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c2))("validateDrag", ctx_r322.validateDrag);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (allDayEvent_r323.event == null ? null : allDayEvent_r323.event.resizable == null ? null : allDayEvent_r323.event.resizable.beforeStart) && !allDayEvent_r323.startsBeforeWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r322.locale)("weekEvent", allDayEvent_r323)("tooltipPlacement", ctx_r322.tooltipPlacement)("tooltipTemplate", ctx_r322.tooltipTemplate)("tooltipAppendToBody", ctx_r322.tooltipAppendToBody)("tooltipDelay", ctx_r322.tooltipDelay)("customTemplate", ctx_r322.eventTemplate)("eventTitleTemplate", ctx_r322.eventTitleTemplate)("eventActionsTemplate", ctx_r322.eventActionsTemplate)("daysInWeek", ctx_r322.daysInWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (allDayEvent_r323.event == null ? null : allDayEvent_r323.event.resizable == null ? null : allDayEvent_r323.event.resizable.afterEnd) && !allDayEvent_r323.endsAfterWeek);
      }
    }

    function CalendarWeekViewComponent_div_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_Template, 5, 41, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var eventRow_r320 = ctx.$implicit;

        var ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", eventRow_r320.row)("ngForTrackBy", ctx_r315.trackByWeekAllDayEvent);
      }
    }

    function CalendarWeekViewComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r336 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_div_2_Template_div_dragEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r336);

          var ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r335.dragEnter("allDay");
        })("dragLeave", function CalendarWeekViewComponent_div_2_Template_div_dragLeave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r336);

          var ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r337.dragLeave("allDay");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_4_Template, 1, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CalendarWeekViewComponent_div_2_div_5_Template, 3, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r309.allDayEventsLabelTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r309.days)("ngForTrackBy", ctx_r309.trackByWeekDayHeaderDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r309.view.allDayEventRows)("ngForTrackBy", ctx_r309.trackById);
      }
    }

    function CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mwl-calendar-week-view-hour-segment", 28);
      }

      if (rf & 2) {
        var segment_r342 = ctx.$implicit;

        var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r341.hourSegmentHeight, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r342)("segmentHeight", ctx_r341.hourSegmentHeight)("locale", ctx_r341.locale)("customTemplate", ctx_r341.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r341.daysInWeek);
      }
    }

    function CalendarWeekViewComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template, 1, 8, "mwl-calendar-week-view-hour-segment", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hour_r339 = ctx.$implicit;
        var odd_r340 = ctx.odd;

        var ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r340);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r339.segments)("ngForTrackBy", ctx_r338.trackByHourSegment);
      }
    }

    function CalendarWeekViewComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_Template, 2, 4, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r310.view.hourColumns[0].hours)("ngForTrackBy", ctx_r310.trackByHour);
      }
    }

    var _c20 = function _c20() {
      return {
        left: true,
        top: true
      };
    };

    function CalendarWeekViewComponent_div_7_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c20));
      }
    }

    var _c21 = function _c21() {
      return {
        right: true,
        bottom: true
      };
    };

    function CalendarWeekViewComponent_div_7_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c21));
      }
    }

    var _c22 = function _c22(a0, a1, a2, a3) {
      return {
        left: a0,
        right: a1,
        top: a2,
        bottom: a3
      };
    };

    function CalendarWeekViewComponent_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r351);

          var timeEvent_r346 = ctx.$implicit;

          var ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r311 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          return ctx_r350.timeEventResizeStarted(_r311, timeEvent_r346, $event);
        })("resizing", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizing_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r351);

          var timeEvent_r346 = ctx.$implicit;

          var ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r352.timeEventResizing(timeEvent_r346, $event);
        })("resizeEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r351);

          var timeEvent_r346 = ctx.$implicit;

          var ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r353.timeEventResizeEnded(timeEvent_r346);
        })("dragStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r351);

          var timeEvent_r346 = ctx.$implicit;

          var _r347 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r311 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          return ctx_r354.dragStarted(_r311, _r347, timeEvent_r346);
        })("dragging", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragging_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r351);

          var timeEvent_r346 = ctx.$implicit;

          var ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r355.dragMove(timeEvent_r346, $event);
        })("dragEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r351);

          var timeEvent_r346 = ctx.$implicit;

          var ctx_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r356.dragEnded(timeEvent_r346, $event, ctx_r356.dayColumnWidth, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_7_div_3_div_2_Template, 1, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mwl-calendar-week-view-event", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_7_div_3_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r351);

          var timeEvent_r346 = ctx.$implicit;

          var ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r357.eventClicked.emit({
            event: timeEvent_r346.event,
            sourceEvent: $event.sourceEvent
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_3_div_4_Template, 1, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var timeEvent_r346 = ctx.$implicit;

        var column_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", timeEvent_r346.top, "px")("height", timeEvent_r346.height, "px")("left", timeEvent_r346.left, "%")("width", timeEvent_r346.width, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", timeEvent_r346.event.draggable && ctx_r344.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r346.startsBeforeDay)("cal-ends-within-day", !timeEvent_r346.endsAfterDay);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", timeEvent_r346.event.cssClass)("hidden", timeEvent_r346.height === 0 && timeEvent_r346.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](38, _c22, ctx_r344.dayColumnWidth, ctx_r344.dayColumnWidth, ctx_r344.eventSnapSize || ctx_r344.hourSegmentHeight, ctx_r344.eventSnapSize || ctx_r344.hourSegmentHeight))("validateResize", ctx_r344.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](43, _c18, timeEvent_r346.event, ctx_r344.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](46, _c8, timeEvent_r346.event.draggable && ctx_r344.timeEventResizes.size === 0, timeEvent_r346.event.draggable && ctx_r344.timeEventResizes.size === 0))("dragSnapGrid", ctx_r344.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](49, _c8, ctx_r344.dayColumnWidth, ctx_r344.eventSnapSize || ctx_r344.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](52, _c2))("ghostDragEnabled", !ctx_r344.snapDraggedEvents)("validateDrag", ctx_r344.validateDrag);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r346.event == null ? null : timeEvent_r346.event.resizable == null ? null : timeEvent_r346.event.resizable.beforeStart) && !timeEvent_r346.startsBeforeDay);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r344.locale)("weekEvent", timeEvent_r346)("tooltipPlacement", ctx_r344.tooltipPlacement)("tooltipTemplate", ctx_r344.tooltipTemplate)("tooltipAppendToBody", ctx_r344.tooltipAppendToBody)("tooltipDisabled", ctx_r344.dragActive || ctx_r344.timeEventResizes.size > 0)("tooltipDelay", ctx_r344.tooltipDelay)("customTemplate", ctx_r344.eventTemplate)("eventTitleTemplate", ctx_r344.eventTitleTemplate)("eventActionsTemplate", ctx_r344.eventActionsTemplate)("column", column_r343)("daysInWeek", ctx_r344.daysInWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r346.event == null ? null : timeEvent_r346.event.resizable == null ? null : timeEvent_r346.event.resizable.afterEnd) && !timeEvent_r346.endsAfterDay);
      }
    }

    function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r364);

          var segment_r362 = ctx.$implicit;

          var ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r363.hourSegmentClicked.emit({
            date: segment_r362.date,
            sourceEvent: $event
          });
        })("drop", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r364);

          var segment_r362 = ctx.$implicit;

          var ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r365.eventDropped($event, segment_r362.date, false);
        })("dragEnter", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r364);

          var segment_r362 = ctx.$implicit;

          var ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r366.dateDragEnter(segment_r362.date);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var segment_r362 = ctx.$implicit;

        var ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r361.hourSegmentHeight, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r362)("segmentHeight", ctx_r361.hourSegmentHeight)("locale", ctx_r361.locale)("customTemplate", ctx_r361.hourSegmentTemplate)("daysInWeek", ctx_r361.daysInWeek)("clickListenerDisabled", ctx_r361.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r361.dragActive || !ctx_r361.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r361.daysInWeek === 1);
      }
    }

    function CalendarWeekViewComponent_div_7_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template, 1, 10, "mwl-calendar-week-view-hour-segment", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hour_r359 = ctx.$implicit;
        var odd_r360 = ctx.odd;

        var ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r360);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r359.segments)("ngForTrackBy", ctx_r345.trackByHourSegment);
      }
    }

    function CalendarWeekViewComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mwl-calendar-week-view-current-time-marker", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_7_div_3_Template, 5, 53, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_4_Template, 2, 4, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r343 = ctx.$implicit;

        var ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDate", column_r343.date)("dayStartHour", ctx_r312.dayStartHour)("dayStartMinute", ctx_r312.dayStartMinute)("dayEndHour", ctx_r312.dayEndHour)("dayEndMinute", ctx_r312.dayEndMinute)("hourSegments", ctx_r312.hourSegments)("hourSegmentHeight", ctx_r312.hourSegmentHeight)("customTemplate", ctx_r312.currentTimeMarkerTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r343.events)("ngForTrackBy", ctx_r312.trackByWeekTimeEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r343.hours)("ngForTrackBy", ctx_r312.trackByHour);
      }
    }

    function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r379 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r379);

          var day_r377 = ctx.$implicit;

          var dayHeaderClicked_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().dayHeaderClicked;

          return dayHeaderClicked_r372.emit({
            day: day_r377,
            sourceEvent: $event
          });
        })("drop", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r379);

          var day_r377 = ctx.$implicit;

          var eventDropped_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().eventDropped;

          return eventDropped_r373.emit({
            event: $event.dropData.event,
            newStart: day_r377.date
          });
        })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_dragEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r379);

          var day_r377 = ctx.$implicit;

          var dragEnter_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().dragEnter;

          return dragEnter_r375.emit({
            date: day_r377.date
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r377 = ctx.$implicit;

        var locale_r371 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-past", day_r377.isPast)("cal-today", day_r377.isToday)("cal-future", day_r377.isFuture)("cal-weekend", day_r377.isWeekend);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", day_r377.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 11, day_r377.date, "weekViewColumnHeader", locale_r371));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 15, day_r377.date, "weekViewColumnSubHeader", locale_r371));
      }
    }

    function CalendarWeekViewHeaderComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template, 8, 19, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var days_r370 = ctx.days;
        var trackByWeekDayHeaderDate_r374 = ctx.trackByWeekDayHeaderDate;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", days_r370)("ngForTrackBy", trackByWeekDayHeaderDate_r374);
      }
    }

    function CalendarWeekViewHeaderComponent_ng_template_2_Template(rf, ctx) {}

    var _c23 = function _c23(a0, a1, a2, a3, a4, a5) {
      return {
        days: a0,
        locale: a1,
        dayHeaderClicked: a2,
        eventDropped: a3,
        dragEnter: a4,
        trackByWeekDayHeaderDate: a5
      };
    };

    var _c24 = function _c24(a0, a1) {
      return {
        backgroundColor: a0,
        borderColor: a1
      };
    };

    function CalendarWeekViewEventComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r399);

          var eventClicked_r391 = ctx.eventClicked;
          return eventClicked_r391.emit({
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlKeydownEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r399);

          var eventClicked_r391 = ctx.eventClicked;
          return eventClicked_r391.emit({
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarEventTitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mwl-calendar-event-actions", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mwl-calendar-event-title", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var weekEvent_r389 = ctx.weekEvent;
        var tooltipPlacement_r390 = ctx.tooltipPlacement;
        var tooltipTemplate_r392 = ctx.tooltipTemplate;
        var tooltipAppendToBody_r393 = ctx.tooltipAppendToBody;
        var tooltipDisabled_r394 = ctx.tooltipDisabled;
        var tooltipDelay_r395 = ctx.tooltipDelay;
        var daysInWeek_r397 = ctx.daysInWeek;

        var ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](20, _c24, weekEvent_r389.event.color == null ? null : weekEvent_r389.event.color.secondary, weekEvent_r389.event.color == null ? null : weekEvent_r389.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r394 ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 13, weekEvent_r389.event.title, daysInWeek_r397 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r389.event) : "")("tooltipPlacement", tooltipPlacement_r390)("tooltipEvent", weekEvent_r389.event)("tooltipTemplate", tooltipTemplate_r392)("tooltipAppendToBody", tooltipAppendToBody_r393)("tooltipDelay", tooltipDelay_r395);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c12, weekEvent_r389.event, ctx_r387.locale), "eventDescription"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", weekEvent_r389.event)("customTemplate", ctx_r387.eventActionsTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", weekEvent_r389.event)("customTemplate", ctx_r387.eventTitleTemplate)("view", daysInWeek_r397 === 1 ? "day" : "week");
      }
    }

    function CalendarWeekViewEventComponent_ng_template_2_Template(rf, ctx) {}

    var _c25 = function _c25(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
      return {
        weekEvent: a0,
        tooltipPlacement: a1,
        eventClicked: a2,
        tooltipTemplate: a3,
        tooltipAppendToBody: a4,
        tooltipDisabled: a5,
        tooltipDelay: a6,
        column: a7,
        daysInWeek: a8
      };
    };

    function CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var segment_r404 = ctx_r410.segment;
        var daysInWeek_r408 = ctx_r410.daysInWeek;
        var locale_r405 = ctx_r410.locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, segment_r404.displayDate, daysInWeek_r408 === 1 ? "dayViewHour" : "weekViewHour", locale_r405), " ");
      }
    }

    function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template, 3, 5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var segment_r404 = ctx.segment;
        var segmentHeight_r406 = ctx.segmentHeight;
        var isTimeLabel_r407 = ctx.isTimeLabel;
        var daysInWeek_r408 = ctx.daysInWeek;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", segmentHeight_r406, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-start", segment_r404.isStart)("cal-after-hour-start", !segment_r404.isStart);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", segment_r404.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c2), daysInWeek_r408 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isTimeLabel_r407);
      }
    }

    function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) {}

    var _c26 = function _c26(a0, a1, a2, a3, a4) {
      return {
        segment: a0,
        locale: a1,
        segmentHeight: a2,
        isTimeLabel: a3,
        daysInWeek: a4
      };
    };

    function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 3);
      }

      if (rf & 2) {
        var topPx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().topPx;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", topPx_r420, "px");
      }
    }

    function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template, 1, 2, "div", 2);
      }

      if (rf & 2) {
        var isVisible_r419 = ctx.isVisible;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isVisible_r419);
      }
    }

    function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) {}

    var _c27 = function _c27(a0, a1, a2, a3, a4, a5, a6) {
      return {
        columnDate: a0,
        dayStartHour: a1,
        dayStartMinute: a2,
        dayEndHour: a3,
        dayEndMinute: a4,
        isVisible: a5,
        topPx: a6
      };
    };

    var CalendarEventActionsComponent = function CalendarEventActionsComponent() {
      _classCallCheck(this, CalendarEventActionsComponent);

      this.trackByActionId = function (index, action) {
        return action.id ? action.id : action;
      };
    };

    CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) {
      return new (t || CalendarEventActionsComponent)();
    };

    CalendarEventActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarEventActionsComponent,
      selectors: [["mwl-calendar-event-actions"]],
      inputs: {
        event: "event",
        customTemplate: "customTemplate"
      },
      decls: 3,
      vars: 5,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]],
      template: function CalendarEventActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r212)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.trackByActionId));
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ClickDirective, KeydownEnterDirective];
      },
      pipes: function pipes() {
        return [CalendarA11yPipe];
      },
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarEventActionsComponent.prototype, "event", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarEventActionsComponent.prototype, "customTemplate", void 0);

    var CalendarEventTitleComponent = function CalendarEventTitleComponent() {
      _classCallCheck(this, CalendarEventTitleComponent);
    };

    CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) {
      return new (t || CalendarEventTitleComponent)();
    };

    CalendarEventTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarEventTitleComponent,
      selectors: [["mwl-calendar-event-title"]],
      inputs: {
        event: "event",
        customTemplate: "customTemplate",
        view: "view"
      },
      decls: 3,
      vars: 5,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]],
      template: function CalendarEventTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r226)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c3, ctx.event, ctx.view));
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]];
      },
      pipes: function pipes() {
        return [CalendarEventTitlePipe, CalendarA11yPipe];
      },
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarEventTitleComponent.prototype, "event", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarEventTitleComponent.prototype, "view", void 0);

    var CalendarTooltipWindowComponent = function CalendarTooltipWindowComponent() {
      _classCallCheck(this, CalendarTooltipWindowComponent);
    };

    CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) {
      return new (t || CalendarTooltipWindowComponent)();
    };

    CalendarTooltipWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarTooltipWindowComponent,
      selectors: [["mwl-calendar-tooltip-window"]],
      inputs: {
        contents: "contents",
        placement: "placement",
        event: "event",
        customTemplate: "customTemplate"
      },
      decls: 3,
      vars: 6,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]],
      template: function CalendarTooltipWindowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r231)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c4, ctx.contents, ctx.placement, ctx.event));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarTooltipWindowComponent.prototype, "contents", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarTooltipWindowComponent.prototype, "placement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarTooltipWindowComponent.prototype, "event", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);

    var CalendarTooltipDirective =
    /*#__PURE__*/
    function () {
      function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
      ) {
        _classCallCheck(this, CalendarTooltipDirective);

        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.placement = 'auto'; // tslint:disable-line no-input-rename

        this.delay = null; // tslint:disable-line no-input-rename

        this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
      }

      _createClass(CalendarTooltipDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.hide();
        }
      }, {
        key: "onMouseOver",
        value: function onMouseOver() {
          var _this2 = this;

          var delay$ = this.delay === null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('now') : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay);
          delay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.cancelTooltipDelay$)).subscribe(function () {
            _this2.show();
          });
        }
      }, {
        key: "onMouseOut",
        value: function onMouseOut() {
          this.hide();
        }
      }, {
        key: "show",
        value: function show() {
          var _this3 = this;

          if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;

            if (this.appendToBody) {
              this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }

            requestAnimationFrame(function () {
              _this3.positionTooltip();
            });
          }
        }
      }, {
        key: "hide",
        value: function hide() {
          if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
          }

          this.cancelTooltipDelay$.next();
        }
      }, {
        key: "positionTooltip",
        value: function positionTooltip() {
          var previousPositions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = Object(positioning__WEBPACK_IMPORTED_MODULE_3__["positionElements"])(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

            if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
              this.positionTooltip([].concat(_toConsumableArray(previousPositions), [this.tooltipRef.instance.placement]));
            }
          }
        }
      }]);

      return CalendarTooltipDirective;
    }();

    CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) {
      return new (t || CalendarTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
    };

    CalendarTooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CalendarTooltipDirective,
      selectors: [["", "mwlCalendarTooltip", ""]],
      hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseOver();
          })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler($event) {
            return ctx.onMouseOut();
          });
        }
      },
      inputs: {
        placement: ["tooltipPlacement", "placement"],
        delay: ["tooltipDelay", "delay"],
        contents: ["mwlCalendarTooltip", "contents"],
        customTemplate: ["tooltipTemplate", "customTemplate"],
        event: ["tooltipEvent", "event"],
        appendToBody: ["tooltipAppendToBody", "appendToBody"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });

    CalendarTooltipDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mwlCalendarTooltip'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarTooltipDirective.prototype, "contents", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipPlacement'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarTooltipDirective.prototype, "placement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipTemplate'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarTooltipDirective.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipEvent'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarTooltipDirective.prototype, "event", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipAppendToBody'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarTooltipDirective.prototype, "appendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarTooltipDirective.prototype, "delay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarTooltipDirective.prototype, "onMouseOver", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarTooltipDirective.prototype, "onMouseOut", null);
    CalendarTooltipDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], Object])], CalendarTooltipDirective);

    var DateAdapter = function DateAdapter() {
      _classCallCheck(this, DateAdapter);
    };

    var CalendarView;

    (function (CalendarView) {
      CalendarView["Month"] = "month";
      CalendarView["Week"] = "week";
      CalendarView["Day"] = "day";
    })(CalendarView || (CalendarView = {}));

    var validateEvents = function validateEvents(events) {
      var warn = function warn() {
        var _console;

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return (_console = console).warn.apply(_console, ['angular-calendar'].concat(args));
      };

      return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["validateEvents"])(events, warn);
    };

    function isInside(outer, inner) {
      return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right) && Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
    }

    function roundToNearest(amount, precision) {
      return Math.round(amount / precision) * precision;
    }

    var trackByEventId = function trackByEventId(index, event) {
      return event.id ? event.id : event;
    };

    var trackByWeekDayHeaderDate = function trackByWeekDayHeaderDate(index, day) {
      return day.date.toISOString();
    };

    var trackByHourSegment = function trackByHourSegment(index, segment) {
      return segment.date.toISOString();
    };

    var trackByHour = function trackByHour(index, hour) {
      return hour.segments[0].date.toISOString();
    };

    var trackByWeekAllDayEvent = function trackByWeekAllDayEvent(index, weekEvent) {
      return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
    };

    var trackByWeekTimeEvent = function trackByWeekTimeEvent(index, weekEvent) {
      return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
    };

    var MINUTES_IN_HOUR = 60;

    function getPixelAmountInMinutes(hourSegments, hourSegmentHeight) {
      return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    }

    function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
      var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
      var pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight);
      return draggedInPixelsSnapSize * pixelAmountInMinutes;
    }

    function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
      return getPixelAmountInMinutes(hourSegments, hourSegmentHeight) * hourSegmentHeight;
    }

    function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
      if (event.end) {
        return event.end;
      } else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
      }
    }

    function addDaysWithExclusions(dateAdapter, date, days, excluded) {
      var daysCounter = 0;
      var daysToAdd = 0;
      var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
      var result = date;

      while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        var day = dateAdapter.getDay(result);

        if (excluded.indexOf(day) === -1) {
          daysToAdd++;
        }

        daysCounter++;
      }

      return result;
    }

    function isDraggedWithinPeriod(newStart, newEnd, period) {
      var end = newEnd || newStart;
      return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
    }

    function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
      return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
    }

    function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn) {
      var excluded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var daysInWeek = arguments.length > 4 ? arguments[4] : undefined;
      var viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      });
      var endOfWeek = dateAdapter.endOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      });

      while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
        viewStart = dateAdapter.addDays(viewStart, 1);
      }

      if (daysInWeek) {
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return {
          viewStart: viewStart,
          viewEnd: viewEnd
        };
      } else {
        var _viewEnd = endOfWeek;

        while (excluded.indexOf(dateAdapter.getDay(_viewEnd)) > -1 && _viewEnd > viewStart) {
          _viewEnd = dateAdapter.subDays(_viewEnd, 1);
        }

        return {
          viewStart: viewStart,
          viewEnd: _viewEnd
        };
      }
    }

    function isWithinThreshold(_ref) {
      var x = _ref.x,
          y = _ref.y;
      var DRAG_THRESHOLD = 1;
      return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
    }
    /**
     * Change the view date to the previous view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarPreviousView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Previous
     * </button>
     * ```
     */


    var CalendarPreviousViewDirective =
    /*#__PURE__*/
    function () {
      function CalendarPreviousViewDirective(dateAdapter) {
        _classCallCheck(this, CalendarPreviousViewDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */

        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @hidden
       */


      _createClass(CalendarPreviousViewDirective, [{
        key: "onClick",
        value: function onClick() {
          var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
          }[this.view];

          if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
          } else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
          } else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
          }
        }
      }]);

      return CalendarPreviousViewDirective;
    }();

    CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) {
      return new (t || CalendarPreviousViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarPreviousViewDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CalendarPreviousViewDirective,
      selectors: [["", "mwlCalendarPreviousView", ""]],
      hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarPreviousViewDirective_click_HostBindingHandler($event) {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        excludeDays: "excludeDays",
        view: "view",
        viewDate: "viewDate",
        daysInWeek: "daysInWeek"
      },
      outputs: {
        viewDateChange: "viewDateChange"
      }
    });

    CalendarPreviousViewDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarPreviousViewDirective.prototype, "view", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarPreviousViewDirective.prototype, "onClick", null);
    CalendarPreviousViewDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarPreviousViewDirective);
    /**
     * Change the view date to the next view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarNextView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Next
     * </button>
     * ```
     */

    var CalendarNextViewDirective =
    /*#__PURE__*/
    function () {
      function CalendarNextViewDirective(dateAdapter) {
        _classCallCheck(this, CalendarNextViewDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */

        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @hidden
       */


      _createClass(CalendarNextViewDirective, [{
        key: "onClick",
        value: function onClick() {
          var addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths
          }[this.view];

          if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
          } else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
          } else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
          }
        }
      }]);

      return CalendarNextViewDirective;
    }();

    CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) {
      return new (t || CalendarNextViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarNextViewDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CalendarNextViewDirective,
      selectors: [["", "mwlCalendarNextView", ""]],
      hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarNextViewDirective_click_HostBindingHandler($event) {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        excludeDays: "excludeDays",
        view: "view",
        viewDate: "viewDate",
        daysInWeek: "daysInWeek"
      },
      outputs: {
        viewDateChange: "viewDateChange"
      }
    });

    CalendarNextViewDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarNextViewDirective.prototype, "view", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarNextViewDirective.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarNextViewDirective.prototype, "excludeDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarNextViewDirective.prototype, "daysInWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarNextViewDirective.prototype, "viewDateChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarNextViewDirective.prototype, "onClick", null);
    CalendarNextViewDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarNextViewDirective);
    /**
     * Change the view date to the current day. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarToday
     *  [(viewDate)]="viewDate">
     *  Today
     * </button>
     * ```
     */

    var CalendarTodayDirective =
    /*#__PURE__*/
    function () {
      function CalendarTodayDirective(dateAdapter) {
        _classCallCheck(this, CalendarTodayDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @hidden
       */


      _createClass(CalendarTodayDirective, [{
        key: "onClick",
        value: function onClick() {
          this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
        }
      }]);

      return CalendarTodayDirective;
    }();

    CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) {
      return new (t || CalendarTodayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarTodayDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CalendarTodayDirective,
      selectors: [["", "mwlCalendarToday", ""]],
      hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarTodayDirective_click_HostBindingHandler($event) {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        viewDate: "viewDate"
      },
      outputs: {
        viewDateChange: "viewDateChange"
      }
    });

    CalendarTodayDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarTodayDirective.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarTodayDirective.prototype, "viewDateChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarTodayDirective.prototype, "onClick", null);
    CalendarTodayDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarTodayDirective);
    /**
     * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
     */

    var CalendarAngularDateFormatter =
    /*#__PURE__*/
    function () {
      function CalendarAngularDateFormatter(dateAdapter) {
        _classCallCheck(this, CalendarAngularDateFormatter);

        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       */


      _createClass(CalendarAngularDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref2) {
          var date = _ref2.date,
              locale = _ref2.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE', locale);
        }
        /**
         * The month view cell day number
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref3) {
          var date = _ref3.date,
              locale = _ref3.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'd', locale);
        }
        /**
         * The month view title
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref4) {
          var date = _ref4.date,
              locale = _ref4.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'LLLL y', locale);
        }
        /**
         * The week view header week day labels
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref5) {
          var date = _ref5.date,
              locale = _ref5.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE', locale);
        }
        /**
         * The week view sub header day and month labels
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref6) {
          var date = _ref6.date,
              locale = _ref6.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'MMM d', locale);
        }
        /**
         * The week view title
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref7) {
          var date = _ref7.date,
              locale = _ref7.locale,
              weekStartsOn = _ref7.weekStartsOn,
              excludeDays = _ref7.excludeDays,
              daysInWeek = _ref7.daysInWeek;

          var _getWeekViewPeriod = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod.viewStart,
              viewEnd = _getWeekViewPeriod.viewEnd;

          var format = function format(dateToFormat, showYear) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref8) {
          var date = _ref8.date,
              locale = _ref8.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'h a', locale);
        }
        /**
         * The time formatting down the left hand side of the day view
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref9) {
          var date = _ref9.date,
              locale = _ref9.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'h a', locale);
        }
        /**
         * The day view title
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref10) {
          var date = _ref10.date,
              locale = _ref10.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE, MMMM d, y', locale);
        }
      }]);

      return CalendarAngularDateFormatter;
    }();

    CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) {
      return new (t || CalendarAngularDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DateAdapter));
    };

    CalendarAngularDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarAngularDateFormatter,
      factory: CalendarAngularDateFormatter.ɵfac
    });

    CalendarAngularDateFormatter.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarAngularDateFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarAngularDateFormatter);
    /**
     * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
     *
     * If you wish, you may override any of the defaults via angulars DI. For example:
     *
     * ```typescript
     * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
     * import { formatDate } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * @Injectable()
     * class CustomDateFormatter extends CalendarDateFormatter {
     *
     *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
     *     return formatDate(date, 'EEE', locale); // use short week days
     *   }
     *
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *   provide: CalendarDateFormatter,
     *   useClass: CustomDateFormatter
     * }]
     * ```
     */

    var CalendarDateFormatter =
    /*#__PURE__*/
    function (_CalendarAngularDateF) {
      _inherits(CalendarDateFormatter, _CalendarAngularDateF);

      function CalendarDateFormatter() {
        _classCallCheck(this, CalendarDateFormatter);

        return _possibleConstructorReturn(this, _getPrototypeOf(CalendarDateFormatter).apply(this, arguments));
      }

      return CalendarDateFormatter;
    }(CalendarAngularDateFormatter);

    CalendarDateFormatter.ɵfac = function CalendarDateFormatter_Factory(t) {
      return ɵCalendarDateFormatter_BaseFactory(t || CalendarDateFormatter);
    };

    CalendarDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarDateFormatter,
      factory: CalendarDateFormatter.ɵfac
    });
    /**
     * This pipe is primarily for rendering the current view title. Example usage:
     * ```typescript
     * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
     * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
     * ```
     */

    var CalendarDatePipe =
    /*#__PURE__*/
    function () {
      function CalendarDatePipe(dateFormatter, locale) {
        _classCallCheck(this, CalendarDatePipe);

        this.dateFormatter = dateFormatter;
        this.locale = locale;
      }

      _createClass(CalendarDatePipe, [{
        key: "transform",
        value: function transform(date, method) {
          var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
          var weekStartsOn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var excludeDays = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          var daysInWeek = arguments.length > 5 ? arguments[5] : undefined;

          if (typeof this.dateFormatter[method] === 'undefined') {
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(function (iMethod) {
              return iMethod !== 'constructor';
            });
            throw new Error("".concat(method, " is not a valid date formatter. Can only be one of ").concat(allowedMethods.join(', ')));
          }

          return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek
          });
        }
      }]);

      return CalendarDatePipe;
    }();

    CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) {
      return new (t || CalendarDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CalendarDateFormatter), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
    };

    CalendarDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "calendarDate",
      type: CalendarDatePipe,
      pure: true
    });

    CalendarDatePipe.ctorParameters = function () {
      return [{
        type: CalendarDateFormatter
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }];
    };

    CalendarDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CalendarDateFormatter, String])], CalendarDatePipe);
    /**
     * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
     *
     * ```typescript
     * import { Injectable } from '@angular/core';
     * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
     *
     * @Injectable()
     * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
     *
     *   month(event: CalendarEvent): string {
     *     return `Custom prefix: ${event.title}`;
     *   }
     *
     * }
     *
     * // in your component
     * providers: [{
     *  provide: CalendarEventTitleFormatter,
     *  useClass: CustomEventTitleFormatter
     * }]
     * ```
     */

    var CalendarEventTitleFormatter =
    /*#__PURE__*/
    function () {
      function CalendarEventTitleFormatter() {
        _classCallCheck(this, CalendarEventTitleFormatter);
      }

      _createClass(CalendarEventTitleFormatter, [{
        key: "month",

        /**
         * The month view event title.
         */
        value: function month(event, title) {
          return event.title;
        }
        /**
         * The month view event tooltip. Return a falsey value from this to disable the tooltip.
         */

      }, {
        key: "monthTooltip",
        value: function monthTooltip(event, title) {
          return event.title;
        }
        /**
         * The week view event title.
         */

      }, {
        key: "week",
        value: function week(event, title) {
          return event.title;
        }
        /**
         * The week view event tooltip. Return a falsey value from this to disable the tooltip.
         */

      }, {
        key: "weekTooltip",
        value: function weekTooltip(event, title) {
          return event.title;
        }
        /**
         * The day view event title.
         */

      }, {
        key: "day",
        value: function day(event, title) {
          return event.title;
        }
        /**
         * The day view event tooltip. Return a falsey value from this to disable the tooltip.
         */

      }, {
        key: "dayTooltip",
        value: function dayTooltip(event, title) {
          return event.title;
        }
      }]);

      return CalendarEventTitleFormatter;
    }();

    var CalendarEventTitlePipe =
    /*#__PURE__*/
    function () {
      function CalendarEventTitlePipe(calendarEventTitle) {
        _classCallCheck(this, CalendarEventTitlePipe);

        this.calendarEventTitle = calendarEventTitle;
      }

      _createClass(CalendarEventTitlePipe, [{
        key: "transform",
        value: function transform(title, titleType, event) {
          return this.calendarEventTitle[titleType](event, title);
        }
      }]);

      return CalendarEventTitlePipe;
    }();

    CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) {
      return new (t || CalendarEventTitlePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CalendarEventTitleFormatter));
    };

    CalendarEventTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "calendarEventTitle",
      type: CalendarEventTitlePipe,
      pure: true
    });

    CalendarEventTitlePipe.ctorParameters = function () {
      return [{
        type: CalendarEventTitleFormatter
      }];
    };

    CalendarEventTitlePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CalendarEventTitleFormatter])], CalendarEventTitlePipe);

    var ClickDirective =
    /*#__PURE__*/
    function () {
      function ClickDirective(renderer, elm, document) {
        _classCallCheck(this, ClickDirective);

        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line

        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(ClickDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          if (!this.clickListenerDisabled) {
            this.listen().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (event) {
              event.stopPropagation();

              _this4.click.emit(event);
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
        }
      }, {
        key: "listen",
        value: function listen() {
          var _this5 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            return _this5.renderer.listen(_this5.elm.nativeElement, 'click', function (event) {
              observer.next(event);
            });
          });
        }
      }]);

      return ClickDirective;
    }();

    ClickDirective.ɵfac = function ClickDirective_Factory(t) {
      return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
    };

    ClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: ClickDirective,
      selectors: [["", "mwlClick", ""]],
      inputs: {
        clickListenerDisabled: "clickListenerDisabled"
      },
      outputs: {
        click: "mwlClick"
      }
    });

    ClickDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ClickDirective.prototype, "clickListenerDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('mwlClick'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ClickDirective.prototype, "click", void 0);
    ClickDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])], ClickDirective);

    var KeydownEnterDirective =
    /*#__PURE__*/
    function () {
      function KeydownEnterDirective() {
        _classCallCheck(this, KeydownEnterDirective);

        this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
      }

      _createClass(KeydownEnterDirective, [{
        key: "onKeyPress",
        value: function onKeyPress(event) {
          if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.keydown.emit(event);
          }
        }
      }]);

      return KeydownEnterDirective;
    }();

    KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) {
      return new (t || KeydownEnterDirective)();
    };

    KeydownEnterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: KeydownEnterDirective,
      selectors: [["", "mwlKeydownEnter", ""]],
      hostBindings: function KeydownEnterDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function KeydownEnterDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyPress($event);
          });
        }
      },
      outputs: {
        keydown: "mwlKeydownEnter"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('mwlKeydownEnter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], KeydownEnterDirective.prototype, "keydown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], KeydownEnterDirective.prototype, "onKeyPress", null);

    var CalendarUtils =
    /*#__PURE__*/
    function () {
      function CalendarUtils(dateAdapter) {
        _classCallCheck(this, CalendarUtils);

        this.dateAdapter = dateAdapter;
      }

      _createClass(CalendarUtils, [{
        key: "getMonthView",
        value: function getMonthView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getMonthView"])(this.dateAdapter, args);
        }
      }, {
        key: "getWeekViewHeader",
        value: function getWeekViewHeader(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getWeekViewHeader"])(this.dateAdapter, args);
        }
      }, {
        key: "getWeekView",
        value: function getWeekView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getWeekView"])(this.dateAdapter, args);
        }
      }]);

      return CalendarUtils;
    }();

    CalendarUtils.ɵfac = function CalendarUtils_Factory(t) {
      return new (t || CalendarUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DateAdapter));
    };

    CalendarUtils.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarUtils,
      factory: CalendarUtils.ɵfac
    });

    CalendarUtils.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarUtils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarUtils);
    /**
     * This class is responsible for adding accessibility to the calendar.
     * You may override any of its methods via angulars DI to suit your requirements.
     * For example:
     *
     * ```typescript
     * import { A11yParams, CalendarA11y } from 'angular-calendar';
     * import { formatDate, I18nPluralPipe } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * // adding your own a11y params
     * export interface CustomA11yParams extends A11yParams {
     *   isDrSuess?: boolean;
     * }
     *
     * @Injectable()
     * export class CustomCalendarA11y extends CalendarA11y {
     *   constructor(protected i18nPlural: I18nPluralPipe) {
     *     super(i18nPlural);
     *   }
     *
     *   // overriding a function
     *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
     *     if (isDrSuess) {
     *       return `
     *         ${formatDate(date, 'EEEE MMMM d', locale)}
     *          Today you are you! That is truer than true! There is no one alive
     *          who is you-er than you!
     *       `;
     *     }
     *   }
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *  provide: CalendarA11y,
     *  useClass: CustomCalendarA11y
     * }]
     * ```
     */

    var CalendarA11y =
    /*#__PURE__*/
    function () {
      function CalendarA11y(i18nPlural) {
        _classCallCheck(this, CalendarA11y);

        this.i18nPlural = i18nPlural;
      }
      /**
       * Aria label for the badges/date of a cell
       * @example: `Saturday October 19 1 event click to expand`
       */


      _createClass(CalendarA11y, [{
        key: "monthCell",
        value: function monthCell(_ref11) {
          var day = _ref11.day,
              locale = _ref11.locale;

          if (day.badgeTotal > 0) {
            return "\n        ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(day.date, 'EEEE MMMM d', locale), ",\n        ").concat(this.i18nPlural.transform(day.badgeTotal, {
              '=0': 'No events',
              '=1': 'One event',
              other: '# events'
            }), ",\n         click to expand\n      ");
          } else {
            return "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(day.date, 'EEEE MMMM d', locale));
          }
        }
        /**
         * Aria label for the open day events start landmark
         * @example: `Saturday October 19 expanded view`
         */

      }, {
        key: "openDayEventsLandmark",
        value: function openDayEventsLandmark(_ref12) {
          var date = _ref12.date,
              locale = _ref12.locale;
          return "\n      Beginning of expanded view for ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE MMMM dd', locale), "\n    ");
        }
        /**
         * Aria label for alert that a day in the month view was expanded
         * @example: `Saturday October 19 expanded`
         */

      }, {
        key: "openDayEventsAlert",
        value: function openDayEventsAlert(_ref13) {
          var date = _ref13.date,
              locale = _ref13.locale;
          return "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE MMMM dd', locale), " expanded");
        }
        /**
         * Descriptive aria label for an event
         * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
         */

      }, {
        key: "eventDescription",
        value: function eventDescription(_ref14) {
          var event = _ref14.event,
              locale = _ref14.locale;

          if (event.allDay === true) {
            return this.allDayEventDescription({
              event: event,
              locale: locale
            });
          }

          var aria = "\n      ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.start, 'EEEE MMMM dd', locale), ",\n      ").concat(event.title, ", from ").concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.start, 'hh:mm a', locale), "\n    ");

          if (event.end) {
            return aria + " to ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.end, 'hh:mm a', locale));
          }

          return aria;
        }
        /**
         * Descriptive aria label for an all day event
         * @example:
         * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
         */

      }, {
        key: "allDayEventDescription",
        value: function allDayEventDescription(_ref15) {
          var event = _ref15.event,
              locale = _ref15.locale;
          var aria = "\n      ".concat(event.title, ", event spans multiple days:\n      start time ").concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.start, 'MMMM dd hh:mm a', locale), "\n    ");

          if (event.end) {
            return aria + ", stop time ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.end, 'MMMM d hh:mm a', locale));
          }

          return aria + ", no stop time";
        }
        /**
         * Aria label for the calendar event actions icons
         * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
         */

      }, {
        key: "actionButtonLabel",
        value: function actionButtonLabel(_ref16) {
          var action = _ref16.action;
          return action.a11yLabel;
        }
        /**
         * @returns {number} Tab index to be given to month cells
         */

      }, {
        key: "monthCellTabIndex",
        value: function monthCellTabIndex() {
          return 0;
        }
        /**
         * @returns true if the events inside the month cell should be aria-hidden
         */

      }, {
        key: "hideMonthCellEvents",
        value: function hideMonthCellEvents() {
          return true;
        }
        /**
         * @returns true if event titles should be aria-hidden (global)
         */

      }, {
        key: "hideEventTitle",
        value: function hideEventTitle() {
          return true;
        }
        /**
         * @returns true if hour segments in the week view should be aria-hidden
         */

      }, {
        key: "hideWeekHourSegment",
        value: function hideWeekHourSegment() {
          return true;
        }
        /**
         * @returns true if hour segments in the day view should be aria-hidden
         */

      }, {
        key: "hideDayHourSegment",
        value: function hideDayHourSegment() {
          return true;
        }
      }]);

      return CalendarA11y;
    }();

    CalendarA11y.ɵfac = function CalendarA11y_Factory(t) {
      return new (t || CalendarA11y)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]));
    };

    CalendarA11y.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarA11y,
      factory: CalendarA11y.ɵfac
    });

    CalendarA11y.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]
      }];
    };

    CalendarA11y = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]])], CalendarA11y);
    /**
     * This pipe is primarily for rendering aria labels. Example usage:
     * ```typescript
     * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
     * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
     * ```
     */

    var CalendarA11yPipe =
    /*#__PURE__*/
    function () {
      function CalendarA11yPipe(calendarA11y, locale) {
        _classCallCheck(this, CalendarA11yPipe);

        this.calendarA11y = calendarA11y;
        this.locale = locale;
      }

      _createClass(CalendarA11yPipe, [{
        key: "transform",
        value: function transform(a11yParams, method) {
          a11yParams.locale = a11yParams.locale || this.locale;

          if (typeof this.calendarA11y[method] === 'undefined') {
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(function (iMethod) {
              return iMethod !== 'constructor';
            });
            throw new Error("".concat(method, " is not a valid a11y method. Can only be one of ").concat(allowedMethods.join(', ')));
          }

          return this.calendarA11y[method](a11yParams);
        }
      }]);

      return CalendarA11yPipe;
    }();

    CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) {
      return new (t || CalendarA11yPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CalendarA11y), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
    };

    CalendarA11yPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "calendarA11y",
      type: CalendarA11yPipe,
      pure: true
    });

    CalendarA11yPipe.ctorParameters = function () {
      return [{
        type: CalendarA11y
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }];
    };

    CalendarA11yPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CalendarA11y, String])], CalendarA11yPipe);
    var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Moment');
    /**
     * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
     *
     * ```typescript
     * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
     * import moment from 'moment';
     *
     * // in your component
     * provide: [{
     *   provide: MOMENT, useValue: moment
     * }, {
     *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
     * }]
     *
     * ```
     */

    var CalendarMomentDateFormatter =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       */
      function CalendarMomentDateFormatter(moment, dateAdapter) {
        _classCallCheck(this, CalendarMomentDateFormatter);

        this.moment = moment;
        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       */


      _createClass(CalendarMomentDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref17) {
          var date = _ref17.date,
              locale = _ref17.locale;
          return this.moment(date).locale(locale).format('dddd');
        }
        /**
         * The month view cell day number
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref18) {
          var date = _ref18.date,
              locale = _ref18.locale;
          return this.moment(date).locale(locale).format('D');
        }
        /**
         * The month view title
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref19) {
          var date = _ref19.date,
              locale = _ref19.locale;
          return this.moment(date).locale(locale).format('MMMM YYYY');
        }
        /**
         * The week view header week day labels
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref20) {
          var date = _ref20.date,
              locale = _ref20.locale;
          return this.moment(date).locale(locale).format('dddd');
        }
        /**
         * The week view sub header day and month labels
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref21) {
          var date = _ref21.date,
              locale = _ref21.locale;
          return this.moment(date).locale(locale).format('MMM D');
        }
        /**
         * The week view title
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref22) {
          var _this6 = this;

          var date = _ref22.date,
              locale = _ref22.locale,
              weekStartsOn = _ref22.weekStartsOn,
              excludeDays = _ref22.excludeDays,
              daysInWeek = _ref22.daysInWeek;

          var _getWeekViewPeriod2 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod2.viewStart,
              viewEnd = _getWeekViewPeriod2.viewEnd;

          var format = function format(dateToFormat, showYear) {
            return _this6.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref23) {
          var date = _ref23.date,
              locale = _ref23.locale;
          return this.moment(date).locale(locale).format('ha');
        }
        /**
         * The time formatting down the left hand side of the day view
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref24) {
          var date = _ref24.date,
              locale = _ref24.locale;
          return this.moment(date).locale(locale).format('ha');
        }
        /**
         * The day view title
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref25) {
          var date = _ref25.date,
              locale = _ref25.locale;
          return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
        }
      }]);

      return CalendarMomentDateFormatter;
    }();

    CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) {
      return new (t || CalendarMomentDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MOMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DateAdapter));
    };

    CalendarMomentDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarMomentDateFormatter,
      factory: CalendarMomentDateFormatter.ɵfac
    });

    CalendarMomentDateFormatter.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MOMENT]
        }]
      }, {
        type: DateAdapter
      }];
    };

    CalendarMomentDateFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(MOMENT)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, DateAdapter])], CalendarMomentDateFormatter);
    /**
     * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
     *
     * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
     */

    var CalendarNativeDateFormatter =
    /*#__PURE__*/
    function () {
      function CalendarNativeDateFormatter(dateAdapter) {
        _classCallCheck(this, CalendarNativeDateFormatter);

        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       */


      _createClass(CalendarNativeDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref26) {
          var date = _ref26.date,
              locale = _ref26.locale;
          return new Intl.DateTimeFormat(locale, {
            weekday: 'long'
          }).format(date);
        }
        /**
         * The month view cell day number
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref27) {
          var date = _ref27.date,
              locale = _ref27.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric'
          }).format(date);
        }
        /**
         * The month view title
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref28) {
          var date = _ref28.date,
              locale = _ref28.locale;
          return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
          }).format(date);
        }
        /**
         * The week view header week day labels
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref29) {
          var date = _ref29.date,
              locale = _ref29.locale;
          return new Intl.DateTimeFormat(locale, {
            weekday: 'long'
          }).format(date);
        }
        /**
         * The week view sub header day and month labels
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref30) {
          var date = _ref30.date,
              locale = _ref30.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
          }).format(date);
        }
        /**
         * The week view title
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref31) {
          var date = _ref31.date,
              locale = _ref31.locale,
              weekStartsOn = _ref31.weekStartsOn,
              excludeDays = _ref31.excludeDays,
              daysInWeek = _ref31.daysInWeek;

          var _getWeekViewPeriod3 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod3.viewStart,
              viewEnd = _getWeekViewPeriod3.viewEnd;

          var format = function format(dateToFormat, showYear) {
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'short',
              year: showYear ? 'numeric' : undefined
            }).format(dateToFormat);
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref32) {
          var date = _ref32.date,
              locale = _ref32.locale;
          return new Intl.DateTimeFormat(locale, {
            hour: 'numeric'
          }).format(date);
        }
        /**
         * The time formatting down the left hand side of the day view
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref33) {
          var date = _ref33.date,
              locale = _ref33.locale;
          return new Intl.DateTimeFormat(locale, {
            hour: 'numeric'
          }).format(date);
        }
        /**
         * The day view title
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref34) {
          var date = _ref34.date,
              locale = _ref34.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
          }).format(date);
        }
      }]);

      return CalendarNativeDateFormatter;
    }();

    CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) {
      return new (t || CalendarNativeDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DateAdapter));
    };

    CalendarNativeDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarNativeDateFormatter,
      factory: CalendarNativeDateFormatter.ɵfac
    });

    CalendarNativeDateFormatter.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarNativeDateFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarNativeDateFormatter);
    var CalendarEventTimesChangedEventType;

    (function (CalendarEventTimesChangedEventType) {
      CalendarEventTimesChangedEventType["Drag"] = "drag";
      CalendarEventTimesChangedEventType["Drop"] = "drop";
      CalendarEventTimesChangedEventType["Resize"] = "resize";
    })(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));

    var CalendarCommonModule_1;
    /**
     * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
     *
     * ```typescript
     * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalendarCommonModule.forRoot(),
     *     CalendarMonthModule
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */

    var CalendarCommonModule = CalendarCommonModule_1 =
    /*#__PURE__*/
    function () {
      function CalendarCommonModule() {
        _classCallCheck(this, CalendarCommonModule);
      }

      _createClass(CalendarCommonModule, null, [{
        key: "forRoot",
        value: function forRoot(dateAdapter) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            ngModule: CalendarCommonModule_1,
            providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
          };
        }
      }]);

      return CalendarCommonModule;
    }();

    CalendarCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarCommonModule
    });
    CalendarCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CalendarCommonModule_Factory(t) {
        return new (t || CalendarCommonModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /**
     * Shows all events on a given month. Example usage:
     *
     * ```typescript
     * <mwl-calendar-month-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-month-view>
     * ```
     */

    var CalendarMonthViewComponent =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       */
      function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        var _this7 = this;

        _classCallCheck(this, CalendarMonthViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */

        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */

        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */

        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */

        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @hidden
         */

        this.trackByRowOffset = function (index, offset) {
          return _this7.view.days.slice(offset, _this7.view.totalDaysVisibleInWeek).map(function (day) {
            return day.date.toISOString();
          }).join('-');
        };
        /**
         * @hidden
         */


        this.trackByDate = function (index, day) {
          return day.date.toISOString();
        };

        this.locale = locale;
      }
      /**
       * @hidden
       */


      _createClass(CalendarMonthViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
              _this8.refreshAll();

              _this8.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
          var refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

          if (refreshHeader) {
            this.refreshHeader();
          }

          if (changes.events) {
            validateEvents(this.events);
          }

          if (refreshBody) {
            this.refreshBody();
          }

          if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
          }

          if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
            this.checkActiveDayIsOpen();
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "toggleDayHighlight",
        value: function toggleDayHighlight(event, isHighlighted) {
          this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
              day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
            } else {
              delete day.backgroundColor;
            }
          });
        }
        /**
         * @hidden
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(droppedOn, event, draggedFrom) {
          if (droppedOn !== draggedFrom) {
            var year = this.dateAdapter.getYear(droppedOn.date);
            var month = this.dateAdapter.getMonth(droppedOn.date);
            var date = this.dateAdapter.getDate(droppedOn.date);
            var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            var newEnd;

            if (event.end) {
              var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
              newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }

            this.eventTimesChanged.emit({
              event: event,
              newStart: newStart,
              newEnd: newEnd,
              day: droppedOn,
              type: CalendarEventTimesChangedEventType.Drop
            });
          }
        }
      }, {
        key: "refreshHeader",
        value: function refreshHeader() {
          this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          });
        }
      }, {
        key: "refreshBody",
        value: function refreshBody() {
          this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          });
        }
      }, {
        key: "checkActiveDayIsOpen",
        value: function checkActiveDayIsOpen() {
          var _this9 = this;

          if (this.activeDayIsOpen === true) {
            var activeDay = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find(function (day) {
              return _this9.dateAdapter.isSameDay(day.date, activeDay);
            });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
          } else {
            this.openRowIndex = null;
            this.openDay = null;
          }
        }
      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHeader();
          this.refreshBody();
          this.emitBeforeViewRender();
          this.checkActiveDayIsOpen();
        }
      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
              header: this.columnHeaders,
              body: this.view.days,
              period: this.view.period
            });
          }
        }
      }]);

      return CalendarMonthViewComponent;
    }();

    CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) {
      return new (t || CalendarMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarMonthViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarMonthViewComponent,
      selectors: [["mwl-calendar-month-view"]],
      inputs: {
        events: "events",
        excludeDays: "excludeDays",
        activeDayIsOpen: "activeDayIsOpen",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDelay: "tooltipDelay",
        locale: "locale",
        viewDate: "viewDate",
        activeDay: "activeDay",
        refresh: "refresh",
        tooltipTemplate: "tooltipTemplate",
        weekStartsOn: "weekStartsOn",
        headerTemplate: "headerTemplate",
        cellTemplate: "cellTemplate",
        openDayEventsTemplate: "openDayEventsTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        weekendDays: "weekendDays"
      },
      outputs: {
        beforeViewRender: "beforeViewRender",
        dayClicked: "dayClicked",
        eventClicked: "eventClicked",
        columnHeaderClicked: "columnHeaderClicked",
        eventTimesChanged: "eventTimesChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
      decls: 4,
      vars: 5,
      consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-cell-row"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]],
      template: function CalendarMonthViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mwl-calendar-month-view-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_1_listener($event) {
            return ctx.columnHeaderClicked.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarMonthViewComponent_div_3_Template, 5, 13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
        }
      },
      directives: function directives() {
        return [CalendarMonthViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], CalendarOpenDayEventsComponent, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵa"], CalendarMonthCellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], ClickDirective, KeydownEnterDirective];
      },
      pipes: function pipes() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], CalendarA11yPipe];
      },
      encapsulation: 2
    });

    CalendarMonthViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: CalendarUtils
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }, {
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarMonthViewComponent.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewComponent.prototype, "events", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarMonthViewComponent.prototype, "activeDay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])], CalendarMonthViewComponent.prototype, "refresh", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarMonthViewComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarMonthViewComponent.prototype, "tooltipDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "columnHeaderClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
    CalendarMonthViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], CalendarUtils, String, DateAdapter])], CalendarMonthViewComponent);

    var CalendarMonthViewHeaderComponent = function CalendarMonthViewHeaderComponent() {
      _classCallCheck(this, CalendarMonthViewHeaderComponent);

      this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    };

    CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) {
      return new (t || CalendarMonthViewHeaderComponent)();
    };

    CalendarMonthViewHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarMonthViewHeaderComponent,
      selectors: [["mwl-calendar-month-view-header"]],
      inputs: {
        days: "days",
        locale: "locale",
        customTemplate: "customTemplate"
      },
      outputs: {
        columnHeaderClicked: "columnHeaderClicked"
      },
      decls: 3,
      vars: 6,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]],
      template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r251)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c6, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      pipes: [CalendarDatePipe],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);

    var CalendarMonthCellComponent = function CalendarMonthCellComponent() {
      _classCallCheck(this, CalendarMonthCellComponent);

      this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.trackByEventId = trackByEventId;
      this.validateDrag = isWithinThreshold;
    };

    CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) {
      return new (t || CalendarMonthCellComponent)();
    };

    CalendarMonthCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarMonthCellComponent,
      selectors: [["mwl-calendar-month-cell"]],
      hostAttrs: [1, "cal-cell", "cal-day-cell"],
      hostVars: 18,
      hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
        }
      },
      inputs: {
        day: "day",
        openDay: "openDay",
        locale: "locale",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        customTemplate: "customTemplate",
        tooltipTemplate: "tooltipTemplate",
        tooltipDelay: "tooltipDelay"
      },
      outputs: {
        highlightDay: "highlightDay",
        unhighlightDay: "unhighlightDay",
        eventClicked: "eventClicked"
      },
      decls: 3,
      vars: 15,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "mouseenter", "mouseleave", "mwlClick"]],
      template: function CalendarMonthCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r262)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunctionV"](2, _c10, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], CalendarTooltipDirective, ClickDirective],
      pipes: [CalendarA11yPipe, CalendarDatePipe, CalendarEventTitlePipe],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "day", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "openDay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarMonthCellComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarMonthCellComponent.prototype, "tooltipDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "eventClicked", void 0);
    var collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('collapse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
      height: 0,
      overflow: 'hidden',
      'padding-top': 0,
      'padding-bottom': 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
      height: '*',
      overflow: 'hidden',
      'padding-top': '*',
      'padding-bottom': '*'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('150ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('150ms ease-in'))]);

    var CalendarOpenDayEventsComponent = function CalendarOpenDayEventsComponent() {
      _classCallCheck(this, CalendarOpenDayEventsComponent);

      this.isOpen = false;
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.trackByEventId = trackByEventId;
      this.validateDrag = isWithinThreshold;
    };

    CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) {
      return new (t || CalendarOpenDayEventsComponent)();
    };

    CalendarOpenDayEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarOpenDayEventsComponent,
      selectors: [["mwl-calendar-open-day-events"]],
      inputs: {
        isOpen: "isOpen",
        locale: "locale",
        events: "events",
        customTemplate: "customTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        date: "date"
      },
      outputs: {
        eventClicked: "eventClicked"
      },
      decls: 3,
      vars: 8,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]],
      template: function CalendarOpenDayEventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r291)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c14, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], CalendarEventTitleComponent, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent],
      pipes: [CalendarA11yPipe],
      encapsulation: 2,
      data: {
        animation: [collapseAnimation]
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarOpenDayEventsComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarOpenDayEventsComponent.prototype, "events", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarOpenDayEventsComponent.prototype, "date", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);

    var CalendarMonthModule = function CalendarMonthModule() {
      _classCallCheck(this, CalendarMonthModule);
    };

    CalendarMonthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarMonthModule
    });
    CalendarMonthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CalendarMonthModule_Factory(t) {
        return new (t || CalendarMonthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"]]
    });

    var CalendarDragHelper =
    /*#__PURE__*/
    function () {
      function CalendarDragHelper(dragContainerElement, draggableElement) {
        _classCallCheck(this, CalendarDragHelper);

        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
      }

      _createClass(CalendarDragHelper, [{
        key: "validateDrag",
        value: function validateDrag(_ref35) {
          var x = _ref35.x,
              y = _ref35.y,
              snapDraggedEvents = _ref35.snapDraggedEvents,
              dragAlreadyMoved = _ref35.dragAlreadyMoved,
              transform = _ref35.transform;

          if (snapDraggedEvents) {
            var newRect = Object.assign({}, this.startPosition, {
              left: this.startPosition.left + transform.x,
              right: this.startPosition.right + transform.x,
              top: this.startPosition.top + transform.y,
              bottom: this.startPosition.bottom + transform.y
            });
            return (isWithinThreshold({
              x: x,
              y: y
            }) || dragAlreadyMoved) && isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
          } else {
            return isWithinThreshold({
              x: x,
              y: y
            }) || dragAlreadyMoved;
          }
        }
      }]);

      return CalendarDragHelper;
    }();

    var CalendarResizeHelper =
    /*#__PURE__*/
    function () {
      function CalendarResizeHelper(resizeContainerElement, minWidth) {
        _classCallCheck(this, CalendarResizeHelper);

        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
      }

      _createClass(CalendarResizeHelper, [{
        key: "validateResize",
        value: function validateResize(_ref36) {
          var rectangle = _ref36.rectangle;

          if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
          }

          return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
        }
      }]);

      return CalendarResizeHelper;
    }();
    /**
     * Shows all events on a given week. Example usage:
     *
     * ```typescript
     * <mwl-calendar-week-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-week-view>
     * ```
     */


    var CalendarWeekViewComponent =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       */
      function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
        _classCallCheck(this, CalendarWeekViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */

        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */

        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */

        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must be <= 6
         */

        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */

        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */

        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */

        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */

        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */

        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */

        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */

        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @hidden
         */

        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */

        this.timeEventResizes = new Map();
        /**
         * @hidden
         */

        this.eventDragEnterByType = {
          allDay: 0,
          time: 0
        };
        /**
         * @hidden
         */

        this.dragActive = false;
        /**
         * @hidden
         */

        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */

        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */

        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        /**
         * @hidden
         */

        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */

        this.trackByHour = trackByHour;
        /**
         * @hidden
         */

        this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
        /**
         * @hidden
         */

        this.trackByWeekTimeEvent = trackByWeekTimeEvent;
        /**
         * @hidden
         */

        this.trackByHourColumn = function (index, column) {
          return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        };
        /**
         * @hidden
         */


        this.trackById = function (index, row) {
          return row.id;
        };

        this.locale = locale;
      }
      /**
       * @hidden
       */


      _createClass(CalendarWeekViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
              _this10.refreshAll();

              _this10.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
          var refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek;

          if (refreshHeader) {
            this.refreshHeader();
          }

          if (changes.events) {
            validateEvents(this.events);
          }

          if (refreshBody) {
            this.refreshBody();
          }

          if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
      }, {
        key: "resizeStarted",
        value: function resizeStarted(eventsContainer, minWidth) {
          this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
          var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);

          this.validateResize = function (_ref37) {
            var rectangle = _ref37.rectangle;
            return resizeHelper.validateResize({
              rectangle: rectangle
            });
          };

          this.cdr.markForCheck();
        }
        /**
         * @hidden
         */

      }, {
        key: "timeEventResizeStarted",
        value: function timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
          this.timeEventResizes.set(timeEvent.event, resizeEvent);
          this.resizeStarted(eventsContainer);
        }
        /**
         * @hidden
         */

      }, {
        key: "timeEventResizing",
        value: function timeEventResizing(timeEvent, resizeEvent) {
          var _this11 = this;

          this.timeEventResizes.set(timeEvent.event, resizeEvent);
          var adjustedEvents = new Map();

          var tempEvents = _toConsumableArray(this.events);

          this.timeEventResizes.forEach(function (lastResizeEvent, event) {
            var newEventDates = _this11.getTimeEventResizedDates(event, lastResizeEvent);

            var adjustedEvent = Object.assign({}, event, newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            var eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
          });
          this.restoreOriginalEvents(tempEvents, adjustedEvents);
        }
        /**
         * @hidden
         */

      }, {
        key: "timeEventResizeEnded",
        value: function timeEventResizeEnded(timeEvent) {
          this.view = this.getWeekView(this.events);
          var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

          if (lastResizeEvent) {
            this.timeEventResizes.delete(timeEvent.event);
            var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
            this.eventTimesChanged.emit({
              newStart: newEventDates.start,
              newEnd: newEventDates.end,
              event: timeEvent.event,
              type: CalendarEventTimesChangedEventType.Resize
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventResizeStarted",
        value: function allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
          this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
          });
          this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventResizing",
        value: function allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
          var currentResize = this.allDayEventResizes.get(allDayEvent);

          if (typeof resizeEvent.edges.left !== 'undefined') {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
          } else if (typeof resizeEvent.edges.right !== 'undefined') {
            var _diff = Math.round(+resizeEvent.edges.right / dayWidth);

            allDayEvent.span = currentResize.originalSpan + _diff;
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventResizeEnded",
        value: function allDayEventResizeEnded(allDayEvent) {
          var currentResize = this.allDayEventResizes.get(allDayEvent);

          if (currentResize) {
            var allDayEventResizingBeforeStart = currentResize.edge === 'left';
            var daysDiff;

            if (allDayEventResizingBeforeStart) {
              daysDiff = allDayEvent.offset - currentResize.originalOffset;
            } else {
              daysDiff = allDayEvent.span - currentResize.originalSpan;
            }

            allDayEvent.offset = currentResize.originalOffset;
            allDayEvent.span = currentResize.originalSpan;
            var newStart = allDayEvent.event.start;
            var newEnd = allDayEvent.event.end || allDayEvent.event.start;

            if (allDayEventResizingBeforeStart) {
              newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
            } else {
              newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
            }

            this.eventTimesChanged.emit({
              newStart: newStart,
              newEnd: newEnd,
              event: allDayEvent.event,
              type: CalendarEventTimesChangedEventType.Resize
            });
            this.allDayEventResizes.delete(allDayEvent);
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "getDayColumnWidth",
        value: function getDayColumnWidth(eventRowContainer) {
          return Math.floor(eventRowContainer.offsetWidth / this.days.length);
        }
        /**
         * @hidden
         */

      }, {
        key: "dateDragEnter",
        value: function dateDragEnter(date) {
          this.lastDragEnterDate = date;
        }
        /**
         * @hidden
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(dropEvent, date, allDay) {
          if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime()) {
            this.eventTimesChanged.emit({
              type: CalendarEventTimesChangedEventType.Drop,
              event: dropEvent.dropData.event,
              newStart: date,
              allDay: allDay
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "dragEnter",
        value: function dragEnter(type) {
          this.eventDragEnterByType[type]++;
        }
        /**
         * @hidden
         */

      }, {
        key: "dragLeave",
        value: function dragLeave(type) {
          this.eventDragEnterByType[type]--;
        }
        /**
         * @hidden
         */

      }, {
        key: "dragStarted",
        value: function dragStarted(eventsContainer, event, dayEvent) {
          var _this12 = this;

          this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
          var dragHelper = new CalendarDragHelper(eventsContainer, event);

          this.validateDrag = function (_ref38) {
            var x = _ref38.x,
                y = _ref38.y,
                transform = _ref38.transform;
            return _this12.allDayEventResizes.size === 0 && _this12.timeEventResizes.size === 0 && dragHelper.validateDrag({
              x: x,
              y: y,
              snapDraggedEvents: _this12.snapDraggedEvents,
              dragAlreadyMoved: _this12.dragAlreadyMoved,
              transform: transform
            });
          };

          this.dragActive = true;
          this.dragAlreadyMoved = false;
          this.eventDragEnterByType = {
            allDay: 0,
            time: 0
          };

          if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach(function (column) {
              var linkedEvent = column.events.find(function (columnEvent) {
                return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
              }); // hide any linked events while dragging

              if (linkedEvent) {
                linkedEvent.width = 0;
                linkedEvent.height = 0;
              }
            });
          }

          this.cdr.markForCheck();
        }
        /**
         * @hidden
         */

      }, {
        key: "dragMove",
        value: function dragMove(dayEvent, dragEvent) {
          if (this.snapDraggedEvents) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent = dayEvent.event;
            var adjustedEvent = Object.assign({}, originalEvent, newEventTimes);
            var tempEvents = this.events.map(function (event) {
              if (event === originalEvent) {
                return adjustedEvent;
              }

              return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]));
          }

          this.dragAlreadyMoved = true;
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventDragMove",
        value: function allDayEventDragMove() {
          this.dragAlreadyMoved = true;
        }
        /**
         * @hidden
         */

      }, {
        key: "dragEnded",
        value: function dragEnded(weekEvent, dragEndEvent, dayWidth) {
          var useY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          this.view = this.getWeekView(this.events);
          this.dragActive = false;

          var _this$getDragMovedEve = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY),
              start = _this$getDragMovedEve.start,
              end = _this$getDragMovedEve.end;

          if (this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0 && isDraggedWithinPeriod(start, end, this.view.period)) {
            this.eventTimesChanged.emit({
              newStart: start,
              newEnd: end,
              event: weekEvent.event,
              type: CalendarEventTimesChangedEventType.Drag,
              allDay: !useY
            });
          }
        }
      }, {
        key: "refreshHeader",
        value: function refreshHeader() {
          this.days = this.utils.getWeekViewHeader(Object.assign({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        }
      }, {
        key: "refreshBody",
        value: function refreshBody() {
          this.view = this.getWeekView(this.events);
        }
      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHeader();
          this.refreshBody();
          this.emitBeforeViewRender();
        }
      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.days && this.view) {
            this.beforeViewRender.emit(Object.assign({
              header: this.days
            }, this.view));
          }
        }
      }, {
        key: "getWeekView",
        value: function getWeekView(events) {
          return this.utils.getWeekView(Object.assign({
            events: events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true,
            hourSegments: this.hourSegments,
            dayStart: {
              hour: this.dayStartHour,
              minute: this.dayStartMinute
            },
            dayEnd: {
              hour: this.dayEndHour,
              minute: this.dayEndMinute
            },
            segmentHeight: this.hourSegmentHeight,
            weekendDays: this.weekendDays
          }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        }
      }, {
        key: "getDragMovedEventTimes",
        value: function getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
          var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
          var minutesMoved = useY ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize) : 0;
          var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
          var end;

          if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
          }

          return {
            start: start,
            end: end
          };
        }
      }, {
        key: "restoreOriginalEvents",
        value: function restoreOriginalEvents(tempEvents, adjustedEvents) {
          var previousView = this.view;
          this.view = this.getWeekView(tempEvents);
          var adjustedEventsArray = tempEvents.filter(function (event) {
            return adjustedEvents.has(event);
          });
          this.view.hourColumns.forEach(function (column, columnIndex) {
            previousView.hourColumns[columnIndex].hours.forEach(function (hour, hourIndex) {
              hour.segments.forEach(function (segment, segmentIndex) {
                column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
              });
            });
            adjustedEventsArray.forEach(function (adjustedEvent) {
              var originalEvent = adjustedEvents.get(adjustedEvent);
              var existingColumnEvent = column.events.find(function (columnEvent) {
                return columnEvent.event === adjustedEvent;
              });

              if (existingColumnEvent) {
                // restore the original event so trackBy kicks in and the dom isn't changed
                existingColumnEvent.event = originalEvent;
              } else {
                // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                column.events.push({
                  event: originalEvent,
                  left: 0,
                  top: 0,
                  height: 0,
                  width: 0,
                  startsBeforeDay: false,
                  endsAfterDay: false
                });
              }
            });
          });
          adjustedEvents.clear();
        }
      }, {
        key: "getTimeEventResizedDates",
        value: function getTimeEventResizedDates(calendarEvent, resizeEvent) {
          var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
          var newEventDates = {
            start: calendarEvent.start,
            end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
          };
          var end = calendarEvent.end,
              eventWithoutEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(calendarEvent, ["end"]);
          var smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
          };

          if (typeof resizeEvent.edges.left !== 'undefined') {
            var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

            if (newStart < smallestResizes.start) {
              newEventDates.start = newStart;
            } else {
              newEventDates.start = smallestResizes.start;
            }
          } else if (typeof resizeEvent.edges.right !== 'undefined') {
            var _daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);

            var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, _daysDiff, this.excludeDays);

            if (newEnd > smallestResizes.end) {
              newEventDates.end = newEnd;
            } else {
              newEventDates.end = smallestResizes.end;
            }
          }

          if (typeof resizeEvent.edges.top !== 'undefined') {
            var minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

            var _newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

            if (_newStart < smallestResizes.start) {
              newEventDates.start = _newStart;
            } else {
              newEventDates.start = smallestResizes.start;
            }
          } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            var _minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

            var _newEnd = this.dateAdapter.addMinutes(newEventDates.end, _minutesMoved);

            if (_newEnd > smallestResizes.end) {
              newEventDates.end = _newEnd;
            } else {
              newEventDates.end = smallestResizes.end;
            }
          }

          return newEventDates;
        }
      }]);

      return CalendarWeekViewComponent;
    }();

    CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) {
      return new (t || CalendarWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarWeekViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarWeekViewComponent,
      selectors: [["mwl-calendar-week-view"]],
      inputs: {
        events: "events",
        excludeDays: "excludeDays",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDelay: "tooltipDelay",
        precision: "precision",
        snapDraggedEvents: "snapDraggedEvents",
        hourSegments: "hourSegments",
        hourSegmentHeight: "hourSegmentHeight",
        dayStartHour: "dayStartHour",
        dayStartMinute: "dayStartMinute",
        dayEndHour: "dayEndHour",
        dayEndMinute: "dayEndMinute",
        locale: "locale",
        viewDate: "viewDate",
        refresh: "refresh",
        tooltipTemplate: "tooltipTemplate",
        weekStartsOn: "weekStartsOn",
        headerTemplate: "headerTemplate",
        eventTemplate: "eventTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        weekendDays: "weekendDays",
        hourSegmentTemplate: "hourSegmentTemplate",
        eventSnapSize: "eventSnapSize",
        allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
        daysInWeek: "daysInWeek",
        currentTimeMarkerTemplate: "currentTimeMarkerTemplate"
      },
      outputs: {
        dayHeaderClicked: "dayHeaderClicked",
        eventClicked: "eventClicked",
        eventTimesChanged: "eventTimesChanged",
        beforeViewRender: "beforeViewRender",
        hourSegmentClicked: "hourSegmentClicked"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
      decls: 8,
      vars: 9,
      consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]],
      template: function CalendarWeekViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mwl-calendar-week-view-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_1_listener($event) {
            return ctx.dayHeaderClicked.emit($event);
          })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_1_listener($event) {
            return ctx.eventDropped({
              dropData: $event
            }, $event.newStart, true);
          })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_1_listener($event) {
            return ctx.dateDragEnter($event.date);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_Template, 6, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_3_listener($event) {
            return ctx.dragEnter("time");
          })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_3_listener($event) {
            return ctx.dragLeave("time");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_4_Template, 2, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_7_Template, 5, 12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.allDayEventRows.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-resize-active", ctx.timeEventResizes.size > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
        }
      },
      directives: function directives() {
        return [CalendarWeekViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableDirective"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], CalendarWeekViewEventComponent, angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizeHandleDirective"], CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent, ClickDirective];
      },
      encapsulation: 2
    });

    CalendarWeekViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: CalendarUtils
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }, {
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarWeekViewComponent.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewComponent.prototype, "events", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])], CalendarWeekViewComponent.prototype, "refresh", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "tooltipDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewComponent.prototype, "precision", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "hourSegments", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
    CalendarWeekViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], CalendarUtils, String, DateAdapter])], CalendarWeekViewComponent);

    var CalendarWeekViewHeaderComponent = function CalendarWeekViewHeaderComponent() {
      _classCallCheck(this, CalendarWeekViewHeaderComponent);

      this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    };

    CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) {
      return new (t || CalendarWeekViewHeaderComponent)();
    };

    CalendarWeekViewHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarWeekViewHeaderComponent,
      selectors: [["mwl-calendar-week-view-header"]],
      inputs: {
        days: "days",
        locale: "locale",
        customTemplate: "customTemplate"
      },
      outputs: {
        dayHeaderClicked: "dayHeaderClicked",
        eventDropped: "eventDropped",
        dragEnter: "dragEnter"
      },
      decls: 3,
      vars: 9,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]],
      template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r367)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction6"](2, _c23, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ClickDirective],
      pipes: [CalendarDatePipe],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);

    var CalendarWeekViewEventComponent = function CalendarWeekViewEventComponent() {
      _classCallCheck(this, CalendarWeekViewEventComponent);

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) {
      return new (t || CalendarWeekViewEventComponent)();
    };

    CalendarWeekViewEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarWeekViewEventComponent,
      selectors: [["mwl-calendar-week-view-event"]],
      inputs: {
        locale: "locale",
        weekEvent: "weekEvent",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDisabled: "tooltipDisabled",
        tooltipDelay: "tooltipDelay",
        customTemplate: "customTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        tooltipTemplate: "tooltipTemplate",
        column: "column",
        daysInWeek: "daysInWeek"
      },
      outputs: {
        eventClicked: "eventClicked"
      },
      decls: 3,
      vars: 12,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]],
      template: function CalendarWeekViewEventComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarWeekViewEventComponent_ng_template_0_Template, 6, 26, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewEventComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r386 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r386)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunctionV"](2, _c25, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], CalendarTooltipDirective, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, CalendarEventTitleComponent],
      pipes: [CalendarEventTitlePipe, CalendarA11yPipe],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewEventComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewEventComponent.prototype, "tooltipDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "column", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewEventComponent.prototype, "daysInWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);

    var CalendarWeekViewHourSegmentComponent = function CalendarWeekViewHourSegmentComponent() {
      _classCallCheck(this, CalendarWeekViewHourSegmentComponent);
    };

    CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) {
      return new (t || CalendarWeekViewHourSegmentComponent)();
    };

    CalendarWeekViewHourSegmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarWeekViewHourSegmentComponent,
      selectors: [["mwl-calendar-week-view-hour-segment"]],
      inputs: {
        segment: "segment",
        segmentHeight: "segmentHeight",
        locale: "locale",
        isTimeLabel: "isTimeLabel",
        daysInWeek: "daysInWeek",
        customTemplate: "customTemplate"
      },
      decls: 3,
      vars: 8,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]],
      template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r401 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r401)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c26, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [CalendarA11yPipe, CalendarDatePipe],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewHourSegmentComponent.prototype, "daysInWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);

    var CalendarWeekViewCurrentTimeMarkerComponent =
    /*#__PURE__*/
    function () {
      function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter) {
        var _this13 = this;

        _classCallCheck(this, CalendarWeekViewCurrentTimeMarkerComponent);

        this.dateAdapter = dateAdapter;
        this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.columnDate);
        this.marker$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(60 * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(this.columnDate$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (columnDate) {
          var startOfDay = _this13.dateAdapter.setMinutes(_this13.dateAdapter.setHours(columnDate, _this13.dayStartHour), _this13.dayStartMinute);

          var endOfDay = _this13.dateAdapter.setMinutes(_this13.dateAdapter.setHours(columnDate, _this13.dayEndHour), _this13.dayEndMinute);

          var hourHeightModifier = _this13.hourSegments * _this13.hourSegmentHeight / 60;
          var now = new Date();
          return {
            isVisible: _this13.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
            top: _this13.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
          };
        }));
      }

      _createClass(CalendarWeekViewCurrentTimeMarkerComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.columnDate) {
            this.columnDate$.next(changes.columnDate.currentValue);
          }
        }
      }]);

      return CalendarWeekViewCurrentTimeMarkerComponent;
    }();

    CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) {
      return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarWeekViewCurrentTimeMarkerComponent,
      selectors: [["mwl-calendar-week-view-current-time-marker"]],
      inputs: {
        columnDate: "columnDate",
        dayStartHour: "dayStartHour",
        dayStartMinute: "dayStartMinute",
        dayEndHour: "dayEndHour",
        dayEndMinute: "dayEndMinute",
        hourSegments: "hourSegments",
        hourSegmentHeight: "hourSegmentHeight",
        customTemplate: "customTemplate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
      decls: 5,
      vars: 14,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]],
      template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        }

        if (rf & 2) {
          var _r411 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var tmp_1_0 = null;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction7"](6, _c27, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx.marker$)) == null ? null : tmp_1_0.top);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r411)("ngTemplateOutletContext", currVal_1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      encapsulation: 2
    });

    CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);
    CalendarWeekViewCurrentTimeMarkerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarWeekViewCurrentTimeMarkerComponent);

    var CalendarWeekModule = function CalendarWeekModule() {
      _classCallCheck(this, CalendarWeekModule);
    };

    CalendarWeekModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarWeekModule
    });
    CalendarWeekModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CalendarWeekModule_Factory(t) {
        return new (t || CalendarWeekModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"]]
    });
    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */

    var CalendarDayViewComponent =
    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */
    function CalendarDayViewComponent() {
      _classCallCheck(this, CalendarDayViewComponent);

      /**
       * An array of events to display on view
       * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
       */
      this.events = [];
      /**
       * The number of segments in an hour. Must be <= 6
       */

      this.hourSegments = 2;
      /**
       * The height in pixels of each hour segment
       */

      this.hourSegmentHeight = 30;
      /**
       * The day start hours in 24 hour time. Must be 0-23
       */

      this.dayStartHour = 0;
      /**
       * The day start minutes. Must be 0-59
       */

      this.dayStartMinute = 0;
      /**
       * The day end hours in 24 hour time. Must be 0-23
       */

      this.dayEndHour = 23;
      /**
       * The day end minutes. Must be 0-59
       */

      this.dayEndMinute = 59;
      /**
       * The placement of the event tooltip
       */

      this.tooltipPlacement = 'auto';
      /**
       * Whether to append tooltips to the body or next to the trigger element
       */

      this.tooltipAppendToBody = true;
      /**
       * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
       * will be displayed immediately.
       */

      this.tooltipDelay = null;
      /**
       * Whether to snap events to a grid when dragging
       */

      this.snapDraggedEvents = true;
      /**
       * Called when an event title is clicked
       */

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      /**
       * Called when an hour segment is clicked
       */

      this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      /**
       * Called when an event is resized or dragged and dropped
       */

      this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      /**
       * An output that will be called before the view is rendered for the current day.
       * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
       */

      this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) {
      return new (t || CalendarDayViewComponent)();
    };

    CalendarDayViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarDayViewComponent,
      selectors: [["mwl-calendar-day-view"]],
      inputs: {
        events: "events",
        hourSegments: "hourSegments",
        hourSegmentHeight: "hourSegmentHeight",
        dayStartHour: "dayStartHour",
        dayStartMinute: "dayStartMinute",
        dayEndHour: "dayEndHour",
        dayEndMinute: "dayEndMinute",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDelay: "tooltipDelay",
        snapDraggedEvents: "snapDraggedEvents",
        viewDate: "viewDate",
        refresh: "refresh",
        locale: "locale",
        eventSnapSize: "eventSnapSize",
        tooltipTemplate: "tooltipTemplate",
        hourSegmentTemplate: "hourSegmentTemplate",
        eventTemplate: "eventTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
        currentTimeMarkerTemplate: "currentTimeMarkerTemplate"
      },
      outputs: {
        eventClicked: "eventClicked",
        hourSegmentClicked: "hourSegmentClicked",
        eventTimesChanged: "eventTimesChanged",
        beforeViewRender: "beforeViewRender"
      },
      decls: 1,
      vars: 23,
      consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourSegmentHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]],
      template: function CalendarDayViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
            return ctx.eventClicked.emit($event);
          })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) {
            return ctx.hourSegmentClicked.emit($event);
          })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
            return ctx.eventTimesChanged.emit($event);
          })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) {
            return ctx.beforeViewRender.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourSegmentHeight", ctx.hourSegmentHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate);
        }
      },
      directives: [CalendarWeekViewComponent],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarDayViewComponent.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarDayViewComponent.prototype, "events", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "hourSegments", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])], CalendarDayViewComponent.prototype, "refresh", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarDayViewComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "tooltipDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "eventClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);

    var CalendarDayModule = function CalendarDayModule() {
      _classCallCheck(this, CalendarDayModule);
    };

    CalendarDayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarDayModule
    });
    CalendarDayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CalendarDayModule_Factory(t) {
        return new (t || CalendarDayModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], CalendarCommonModule, CalendarWeekModule]]
    });
    var CalendarModule_1;
    /**
     * The main module of this library. Example usage:
     *
     * ```typescript
     * import { CalenderModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalenderModule.forRoot()
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */

    var CalendarModule = CalendarModule_1 =
    /*#__PURE__*/
    function () {
      function CalendarModule() {
        _classCallCheck(this, CalendarModule);
      }

      _createClass(CalendarModule, null, [{
        key: "forRoot",
        value: function forRoot(dateAdapter) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            ngModule: CalendarModule_1,
            providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
          };
        }
      }]);

      return CalendarModule;
    }();

    CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarModule
    });
    CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CalendarModule_Factory(t) {
        return new (t || CalendarModule)();
      },
      imports: [[CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule], CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarEventActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-event-actions',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarEventTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-event-title',
          template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarTooltipWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-tooltip-window',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        contents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarTooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlCalendarTooltip]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      }, {
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['tooltipPlacement']
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['tooltipDelay']
        }],
        onMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseleave']
        }],
        contents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mwlCalendarTooltip']
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['tooltipTemplate']
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['tooltipEvent']
        }],
        appendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['tooltipAppendToBody']
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarPreviousViewDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlCalendarPreviousView]'
        }]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, {
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarNextViewDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlCalendarNextView]'
        }]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, {
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarTodayDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlCalendarToday]'
        }]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, {
        viewDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarAngularDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, null);
    })();

    var ɵCalendarDateFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CalendarDateFormatter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'calendarDate'
        }]
      }], function () {
        return [{
          type: CalendarDateFormatter
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarEventTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'calendarEventTitle'
        }]
      }], function () {
        return [{
          type: CalendarEventTitleFormatter
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClickDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlClick]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      }, {
        clickListenerDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        click: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['mwlClick']
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeydownEnterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlKeydownEnter]'
        }]
      }], function () {
        return [];
      }, {
        keydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['mwlKeydownEnter']
        }],
        onKeyPress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarUtils, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarA11y, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarA11yPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'calendarA11y'
        }]
      }], function () {
        return [{
          type: CalendarA11y
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarMomentDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MOMENT]
          }]
        }, {
          type: DateAdapter
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarNativeDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarCommonModule, {
        declarations: function declarations() {
          return [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]],
          entryComponents: [CalendarTooltipWindowComponent]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarMonthViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-month-view',
          template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: CalendarUtils
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }, {
          type: DateAdapter
        }];
      }, {
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        activeDayIsOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        beforeViewRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dayClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        columnHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventTimesChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        activeDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        weekStartsOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cellTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        openDayEventsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        weekendDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarMonthViewHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-month-view-header',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [];
      }, {
        columnHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        days: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarMonthCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-month-cell',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
          host: {
            class: 'cal-cell cal-day-cell',
            '[class.cal-past]': 'day.isPast',
            '[class.cal-today]': 'day.isToday',
            '[class.cal-future]': 'day.isFuture',
            '[class.cal-weekend]': 'day.isWeekend',
            '[class.cal-in-month]': 'day.inMonth',
            '[class.cal-out-month]': '!day.inMonth',
            '[class.cal-has-events]': 'day.events.length > 0',
            '[class.cal-open]': 'day === openDay',
            '[class.cal-event-highlight]': '!!day.backgroundColor'
          }
        }]
      }], function () {
        return [];
      }, {
        highlightDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        unhighlightDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        day: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        openDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarOpenDayEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-open-day-events',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
          animations: [collapseAnimation]
        }]
      }], function () {
        return [];
      }, {
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarMonthModule, {
        declarations: function declarations() {
          return [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule];
        },
        exports: function exports() {
          return [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarMonthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule],
          declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
          exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view',
          template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <mwl-calendar-week-view-event\n                  [locale]=\"locale\"\n                  [weekEvent]=\"timeEvent\"\n                  [tooltipPlacement]=\"tooltipPlacement\"\n                  [tooltipTemplate]=\"tooltipTemplate\"\n                  [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                  [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                  [tooltipDelay]=\"tooltipDelay\"\n                  [customTemplate]=\"eventTemplate\"\n                  [eventTitleTemplate]=\"eventTitleTemplate\"\n                  [eventActionsTemplate]=\"eventActionsTemplate\"\n                  [column]=\"column\"\n                  [daysInWeek]=\"daysInWeek\"\n                  (eventClicked)=\"\n                    eventClicked.emit({\n                      event: timeEvent.event,\n                      sourceEvent: $event.sourceEvent\n                    })\n                  \"\n                >\n                </mwl-calendar-week-view-event>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: CalendarUtils
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }, {
          type: DateAdapter
        }];
      }, {
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        precision: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        snapDraggedEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventTimesChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        beforeViewRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        hourSegmentClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        weekStartsOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        weekendDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegmentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventSnapSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allDayEventsLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        currentTimeMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekViewHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-header',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [];
      }, {
        dayHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventDropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        days: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekViewEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-event',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [];
      }, {
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        weekEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekViewHourSegmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-hour-segment',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{\n            segment.displayDate\n              | calendarDate\n                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')\n                : locale\n          }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        segment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        segmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isTimeLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekViewCurrentTimeMarkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-current-time-marker',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, {
        columnDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarWeekModule, {
        declarations: function declarations() {
          return [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule];
        },
        exports: function exports() {
          return [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule],
          declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
          exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarDayViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-day-view',
          template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  "
        }]
      }], function () {
        return [];
      }, {
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        snapDraggedEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        hourSegmentClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventTimesChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        beforeViewRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventSnapSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegmentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allDayEventsLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        currentTimeMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarDayModule, {
        declarations: function declarations() {
          return [CalendarDayViewComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], CalendarCommonModule, CalendarWeekModule];
        },
        exports: function exports() {
          return [CalendarDayViewComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarDayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], CalendarCommonModule, CalendarWeekModule],
          declarations: [CalendarDayViewComponent],
          exports: [CalendarDayViewComponent]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarModule, {
        imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
        exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
          exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of angular-calendar
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=angular-calendar.js.map

    /***/

  },

  /***/
  "./node_modules/angular-calendar/date-adapters/date-fns/index.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/angular-calendar/date-adapters/date-fns/index.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCalendarDateAdaptersDateFnsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var date_fns_1 = __webpack_require__(
    /*! calendar-utils/date-adapters/date-fns */
    "./node_modules/calendar-utils/date-adapters/date-fns/index.js");

    var date_fns_2 = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    function adapterFactory() {
      return tslib_1.__assign({}, date_fns_1.adapterFactory(), {
        addWeeks: date_fns_2.addWeeks,
        addMonths: date_fns_2.addMonths,
        subDays: date_fns_2.subDays,
        subWeeks: date_fns_2.subWeeks,
        subMonths: date_fns_2.subMonths,
        getISOWeek: date_fns_2.getISOWeek,
        setDate: date_fns_2.setDate,
        setMonth: date_fns_2.setMonth,
        setYear: date_fns_2.setYear,
        getDate: date_fns_2.getDate,
        getYear: date_fns_2.getYear
      });
    }

    exports.adapterFactory = adapterFactory; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js ***!
    \*******************************************************************************************************/

  /*! exports provided: DragAndDropModule, ɵc, ɵd, ɵb, ɵa */

  /***/
  function node_modulesAngularDraggableDroppable__ivy_ngcc__Fesm2015AngularDraggableDroppableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDropModule", function () {
      return DragAndDropModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return DraggableHelper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return DraggableScrollContainerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DraggableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DroppableDirective;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dom-autoscroller */
    "./node_modules/dom-autoscroller/dist/bundle.js");
    /* harmony import */


    var dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DraggableHelper = function DraggableHelper() {
      _classCallCheck(this, DraggableHelper);

      this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    };

    DraggableHelper.ɵfac = function DraggableHelper_Factory(t) {
      return new (t || DraggableHelper)();
    };

    DraggableHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: DraggableHelper,
      factory: DraggableHelper.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    DraggableHelper.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({
      factory: function DraggableHelper_Factory() {
        return new DraggableHelper();
      },
      token: DraggableHelper,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DraggableHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
     * ```html
     * <div style="overflow: scroll" mwlDraggableScrollContainer>
     * <div mwlDraggable>Drag me!</div>
     * </div>
     * ```
     */


    var DraggableScrollContainerDirective =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       * @param {?} elementRef
       * @param {?} renderer
       * @param {?} zone
       */
      function DraggableScrollContainerDirective(elementRef, renderer, zone) {
        _classCallCheck(this, DraggableScrollContainerDirective);

        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        /**
         * Trigger the DragStart after a long touch in scrollable container when true
         */

        this.activeLongPressDrag = false;
        /**
         * Configuration of a long touch
         * Duration in ms of a long touch before activating DragStart
         * Delta of the
         */

        this.longPressConfig = {
          duration: 300,
          delta: 30
        };
        this.cancelledScroll = false;
      }
      /**
       * @return {?}
       */


      _createClass(DraggableScrollContainerDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this14.renderer.listen(_this14.elementRef.nativeElement, 'touchmove',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              if (_this14.cancelledScroll && event.cancelable) {
                event.preventDefault();
              }
            });
          });
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "disableScroll",
        value: function disableScroll() {
          this.cancelledScroll = true;
          this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "enableScroll",
        value: function enableScroll() {
          this.cancelledScroll = false;
          this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'auto');
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "hasScrollbar",
        value: function hasScrollbar() {
          /** @type {?} */
          var containerHasHorizontalScroll = this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth > 0;
          /** @type {?} */

          var containerHasVerticalScroll = this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight > 0;
          return containerHasHorizontalScroll || containerHasVerticalScroll;
        }
      }]);

      return DraggableScrollContainerDirective;
    }();

    DraggableScrollContainerDirective.ɵfac = function DraggableScrollContainerDirective_Factory(t) {
      return new (t || DraggableScrollContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
    };

    DraggableScrollContainerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: DraggableScrollContainerDirective,
      selectors: [["", "mwlDraggableScrollContainer", ""]],
      inputs: {
        activeLongPressDrag: "activeLongPressDrag",
        longPressConfig: "longPressConfig"
      }
    });
    /** @nocollapse */

    DraggableScrollContainerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };

    DraggableScrollContainerDirective.propDecorators = {
      activeLongPressDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      longPressConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DraggableScrollContainerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlDraggableScrollContainer]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      }, {
        activeLongPressDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        longPressConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DraggableDirective =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       * @param {?} element
       * @param {?} renderer
       * @param {?} draggableHelper
       * @param {?} zone
       * @param {?} vcr
       * @param {?} scrollContainer
       * @param {?} document
       */
      function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
        _classCallCheck(this, DraggableDirective);

        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.vcr = vcr;
        this.scrollContainer = scrollContainer;
        this.document = document;
        /**
         * The axis along which the element is draggable
         */

        this.dragAxis = {
          x: true,
          y: true
        };
        /**
         * Snap all drags to an x / y grid
         */

        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */

        this.ghostDragEnabled = true;
        /**
         * Show the original element when ghostDragEnabled is true
         */

        this.showOriginalElementWhileDragging = false;
        /**
         * The cursor to use when hovering over a draggable element
         */

        this.dragCursor = '';
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */

        this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event.
         * If you call $event.cancelDrag$.emit() it will cancel the current drag
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the ghost element has been created
         */

        this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when the element is being dragged
         */

        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the element is dragged
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @hidden
         */

        this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */

        this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */

        this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.eventListenerSubscriptions = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.timeLongPress = {
          timerBegin: 0,
          timerEnd: 0
        };
      }
      /**
       * @return {?}
       */


      _createClass(DraggableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.checkEventListeners();
          /** @type {?} */

          var pointerDragged$ = this.pointerDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this15.canDrag();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
          /**
          * @param {?} pointerDownEvent
          * @return {?}
          */
          function (pointerDownEvent) {
            // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
            // stop mouse events propagating up the chain
            if (pointerDownEvent.event.stopPropagation && !_this15.scrollContainer) {
              pointerDownEvent.event.stopPropagation();
            }
            /** @type {?} */


            var startScrollPosition = _this15.getScrollPosition();
            /** @type {?} */


            var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
            /**
            * @param {?} observer
            * @return {?}
            */
            function (observer) {
              /** @type {?} */
              var scrollContainer = _this15.scrollContainer ? _this15.scrollContainer.elementRef.nativeElement : 'window';
              return _this15.renderer.listen(scrollContainer, 'scroll',
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return observer.next(e);
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(startScrollPosition), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @return {?}
            */
            function () {
              return _this15.getScrollPosition();
            }));
            /** @type {?} */

            var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            /** @type {?} */

            var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();

            _this15.zone.run(
            /**
            * @return {?}
            */
            function () {
              _this15.dragPointerDown.next({
                x: 0,
                y: 0
              });
            });
            /** @type {?} */


            var dragComplete$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(_this15.pointerUp$, _this15.pointerDown$, cancelDrag$, _this15.destroy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var pointerMove = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([_this15.pointerMove$, scrollContainerScroll$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref39) {
              var _ref40 = _slicedToArray(_ref39, 2),
                  pointerMoveEvent = _ref40[0],
                  scroll = _ref40[1];

              return {
                currentDrag$: currentDrag$,
                transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                clientX: pointerMoveEvent.clientX,
                clientY: pointerMoveEvent.clientY,
                scrollLeft: scroll.left,
                scrollTop: scroll.top
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              if (_this15.dragSnapGrid.x) {
                moveData.transformX = Math.round(moveData.transformX / _this15.dragSnapGrid.x) * _this15.dragSnapGrid.x;
              }

              if (_this15.dragSnapGrid.y) {
                moveData.transformY = Math.round(moveData.transformY / _this15.dragSnapGrid.y) * _this15.dragSnapGrid.y;
              }

              return moveData;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              if (!_this15.dragAxis.x) {
                moveData.transformX = 0;
              }

              if (!_this15.dragAxis.y) {
                moveData.transformY = 0;
              }

              return moveData;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              /** @type {?} */
              var scrollX = moveData.scrollLeft - startScrollPosition.left;
              /** @type {?} */

              var scrollY = moveData.scrollTop - startScrollPosition.top;
              return Object.assign({}, moveData, {
                x: moveData.transformX + scrollX,
                y: moveData.transformY + scrollY
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref41) {
              var x = _ref41.x,
                  y = _ref41.y,
                  transformX = _ref41.transformX,
                  transformY = _ref41.transformY;
              return !_this15.validateDrag || _this15.validateDrag({
                x: x,
                y: y,
                transform: {
                  x: transformX,
                  y: transformY
                }
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(dragComplete$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var dragStarted$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var dragEnded$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeLast"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            dragStarted$.subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref42) {
              var clientX = _ref42.clientX,
                  clientY = _ref42.clientY,
                  x = _ref42.x,
                  y = _ref42.y;

              _this15.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this15.dragStart.next({
                  cancelDrag$: cancelDrag$
                });
              });

              _this15.scroller = dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default()([_this15.scrollContainer ? _this15.scrollContainer.elementRef.nativeElement : _this15.document.defaultView], {
                margin: 20,

                /**
                 * @return {?}
                 */
                autoScroll: function autoScroll() {
                  return true;
                }
              });

              _this15.renderer.addClass(_this15.element.nativeElement, _this15.dragActiveClass);

              if (_this15.ghostDragEnabled) {
                /** @type {?} */
                var rect = _this15.element.nativeElement.getBoundingClientRect();
                /** @type {?} */


                var clone =
                /** @type {?} */
                _this15.element.nativeElement.cloneNode(true);

                if (!_this15.showOriginalElementWhileDragging) {
                  _this15.renderer.setStyle(_this15.element.nativeElement, 'visibility', 'hidden');
                }

                if (_this15.ghostElementAppendTo) {
                  _this15.ghostElementAppendTo.appendChild(clone);
                } else {
                  /** @type {?} */
                  _this15.element.nativeElement.parentNode.insertBefore(clone, _this15.element.nativeElement.nextSibling);
                }

                _this15.ghostElement = clone;
                document.body.style.cursor = _this15.dragCursor;

                _this15.setElementStyles(clone, {
                  position: 'fixed',
                  top: "".concat(rect.top, "px"),
                  left: "".concat(rect.left, "px"),
                  width: "".concat(rect.width, "px"),
                  height: "".concat(rect.height, "px"),
                  cursor: _this15.dragCursor,
                  margin: '0',
                  willChange: 'transform',
                  pointerEvents: 'none'
                });

                if (_this15.ghostElementTemplate) {
                  /** @type {?} */
                  var viewRef = _this15.vcr.createEmbeddedView(_this15.ghostElementTemplate);

                  clone.innerHTML = '';
                  viewRef.rootNodes.filter(
                  /**
                  * @param {?} node
                  * @return {?}
                  */
                  function (node) {
                    return node instanceof Node;
                  }).forEach(
                  /**
                  * @param {?} node
                  * @return {?}
                  */
                  function (node) {
                    clone.appendChild(node);
                  });
                  dragEnded$.subscribe(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this15.vcr.remove(_this15.vcr.indexOf(viewRef));
                  });
                }

                _this15.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this15.ghostElementCreated.emit({
                    clientX: clientX - x,
                    clientY: clientY - y,
                    element: clone
                  });
                });

                dragEnded$.subscribe(
                /**
                * @return {?}
                */
                function () {
                  /** @type {?} */
                  clone.parentElement.removeChild(clone);
                  _this15.ghostElement = null;

                  _this15.renderer.setStyle(_this15.element.nativeElement, 'visibility', '');
                });
              }

              _this15.draggableHelper.currentDrag.next(currentDrag$);
            });
            dragEnded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
            /**
            * @param {?} dragEndData
            * @return {?}
            */
            function (dragEndData) {
              /** @type {?} */
              var dragEndData$ = cancelDrag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["count"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} calledCount
              * @return {?}
              */
              function (calledCount) {
                return Object.assign({}, dragEndData, {
                  dragCancelled: calledCount > 0
                });
              }));
              cancelDrag$.complete();
              return dragEndData$;
            })).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref43) {
              var x = _ref43.x,
                  y = _ref43.y,
                  dragCancelled = _ref43.dragCancelled;

              _this15.scroller.destroy();

              _this15.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this15.dragEnd.next({
                  x: x,
                  y: y,
                  dragCancelled: dragCancelled
                });
              });

              _this15.renderer.removeClass(_this15.element.nativeElement, _this15.dragActiveClass);

              currentDrag$.complete();
            });
            /** @type {?} */

            var selectionStart$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
            /**
            * @param {?} observer
            * @return {?}
            */
            function (observer) {
              return _this15.renderer.listen('document', 'selectstart',
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return observer.next(e);
              });
            }); // hack to prevent text getting selected in safari while dragging

            selectionStart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(dragComplete$, dragEnded$))).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              event.preventDefault();
            });
            return pointerMove;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return [, value];
          })), pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref44) {
            var _ref45 = _slicedToArray(_ref44, 2),
                previous = _ref45[0],
                next = _ref45[1];

            if (!previous) {
              return true;
            }

            return previous.x !== next.x || previous.y !== next.y;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref46) {
            var _ref47 = _slicedToArray(_ref46, 2),
                previous = _ref47[0],
                next = _ref47[1];

            return next;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"])).subscribe(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref48) {
            var x = _ref48.x,
                y = _ref48.y,
                currentDrag$ = _ref48.currentDrag$,
                clientX = _ref48.clientX,
                clientY = _ref48.clientY,
                transformX = _ref48.transformX,
                transformY = _ref48.transformY;

            _this15.zone.run(
            /**
            * @return {?}
            */
            function () {
              _this15.dragging.next({
                x: x,
                y: y
              });
            });

            if (_this15.ghostElement) {
              /** @type {?} */
              var transform = "translate3d(".concat(transformX, "px, ").concat(transformY, "px, 0px)");

              _this15.setElementStyles(_this15.ghostElement, {
                transform: transform,
                '-webkit-transform': transform,
                '-ms-transform': transform,
                '-moz-transform': transform,
                '-o-transform': transform
              });
            }

            currentDrag$.next({
              clientX: clientX,
              clientY: clientY,
              dropData: _this15.dropData
            });
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.dragAxis) {
            this.checkEventListeners();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeEventListeners();
          this.pointerDown$.complete();
          this.pointerMove$.complete();
          this.pointerUp$.complete();
          this.destroy$.next();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkEventListeners",
        value: function checkEventListeners() {
          var _this16 = this;

          /** @type {?} */
          var canDrag = this.canDrag();
          /** @type {?} */

          var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;

          if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this16.eventListenerSubscriptions.mousedown = _this16.renderer.listen(_this16.element.nativeElement, 'mousedown',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this16.onMouseDown(event);
              });
              _this16.eventListenerSubscriptions.mouseup = _this16.renderer.listen('document', 'mouseup',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this16.onMouseUp(event);
              });
              _this16.eventListenerSubscriptions.touchstart = _this16.renderer.listen(_this16.element.nativeElement, 'touchstart',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this16.onTouchStart(event);
              });
              _this16.eventListenerSubscriptions.touchend = _this16.renderer.listen('document', 'touchend',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this16.onTouchEnd(event);
              });
              _this16.eventListenerSubscriptions.touchcancel = _this16.renderer.listen('document', 'touchcancel',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this16.onTouchEnd(event);
              });
              _this16.eventListenerSubscriptions.mouseenter = _this16.renderer.listen(_this16.element.nativeElement, 'mouseenter',
              /**
              * @return {?}
              */
              function () {
                _this16.onMouseEnter();
              });
              _this16.eventListenerSubscriptions.mouseleave = _this16.renderer.listen(_this16.element.nativeElement, 'mouseleave',
              /**
              * @return {?}
              */
              function () {
                _this16.onMouseLeave();
              });
            });
          } else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          var _this17 = this;

          if (!this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove',
            /**
            * @param {?} mouseMoveEvent
            * @return {?}
            */
            function (mouseMoveEvent) {
              _this17.pointerMove$.next({
                event: mouseMoveEvent,
                clientX: mouseMoveEvent.clientX,
                clientY: mouseMoveEvent.clientY
              });
            });
          }

          this.pointerDown$.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
          });
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onMouseUp",
        value: function onMouseUp(event) {
          if (this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove();
            delete this.eventListenerSubscriptions.mousemove;
          }

          this.pointerUp$.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
          });
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTouchStart",
        value: function onTouchStart(event) {
          var _this18 = this;

          if (!this.scrollContainer) {
            try {
              event.preventDefault();
            } catch (e) {}
          }
          /** @type {?} */


          var hasContainerScrollbar;
          /** @type {?} */

          var startScrollPosition;
          /** @type {?} */

          var isDragActivated;

          if (this.scrollContainer && this.scrollContainer.activeLongPressDrag) {
            this.timeLongPress.timerBegin = Date.now();
            isDragActivated = false;
            hasContainerScrollbar = this.scrollContainer.hasScrollbar();
            startScrollPosition = this.getScrollPosition();
          }

          if (!this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove',
            /**
            * @param {?} touchMoveEvent
            * @return {?}
            */
            function (touchMoveEvent) {
              if (_this18.scrollContainer && _this18.scrollContainer.activeLongPressDrag && !isDragActivated && hasContainerScrollbar) {
                isDragActivated = _this18.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
              }

              if (!_this18.scrollContainer || !_this18.scrollContainer.activeLongPressDrag || !hasContainerScrollbar || isDragActivated) {
                _this18.pointerMove$.next({
                  event: touchMoveEvent,
                  clientX: touchMoveEvent.targetTouches[0].clientX,
                  clientY: touchMoveEvent.targetTouches[0].clientY
                });
              }
            });
          }

          this.pointerDown$.next({
            event: event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY
          });
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(event) {
          if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;

            if (this.scrollContainer && this.scrollContainer.activeLongPressDrag) {
              this.scrollContainer.enableScroll();
            }
          }

          this.pointerUp$.next({
            event: event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.setCursor(this.dragCursor);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.setCursor('');
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "canDrag",
        value: function canDrag() {
          return this.dragAxis.x || this.dragAxis.y;
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setCursor",
        value: function setCursor(value) {
          if (!this.eventListenerSubscriptions.mousemove) {
            this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "unsubscribeEventListeners",
        value: function unsubscribeEventListeners() {
          var _this19 = this;

          Object.keys(this.eventListenerSubscriptions).forEach(
          /**
          * @param {?} type
          * @return {?}
          */
          function (type) {
            /** @type {?} */
            _this19.eventListenerSubscriptions[type]();

            delete
            /** @type {?} */
            _this19.eventListenerSubscriptions[type];
          });
        }
        /**
         * @private
         * @param {?} element
         * @param {?} styles
         * @return {?}
         */

      }, {
        key: "setElementStyles",
        value: function setElementStyles(element, styles) {
          var _this20 = this;

          Object.keys(styles).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this20.renderer.setStyle(element, key, styles[key]);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getScrollPosition",
        value: function getScrollPosition() {
          if (this.scrollContainer) {
            return {
              top: this.scrollContainer.elementRef.nativeElement.scrollTop,
              left: this.scrollContainer.elementRef.nativeElement.scrollLeft
            };
          } else {
            return {
              top: window.pageYOffset || document.documentElement.scrollTop,
              left: window.pageXOffset || document.documentElement.scrollLeft
            };
          }
        }
        /**
         * @private
         * @param {?} event
         * @param {?} touchMoveEvent
         * @param {?} startScrollPosition
         * @return {?}
         */

      }, {
        key: "shouldBeginDrag",
        value: function shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
          /** @type {?} */
          var moveScrollPosition = this.getScrollPosition();
          /** @type {?} */

          var deltaScroll = {
            top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
            left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
          };
          /** @type {?} */

          var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
          /** @type {?} */

          var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
          /** @type {?} */

          var deltaTotal = deltaX + deltaY;

          if (deltaTotal > this.scrollContainer.longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
            this.timeLongPress.timerBegin = Date.now();
          }

          this.timeLongPress.timerEnd = Date.now();
          /** @type {?} */

          var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;

          if (duration >= this.scrollContainer.longPressConfig.duration) {
            this.scrollContainer.disableScroll();
            return true;
          }

          return false;
        }
      }]);

      return DraggableDirective;
    }();

    DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
      return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: DraggableDirective,
      selectors: [["", "mwlDraggable", ""]],
      inputs: {
        dragAxis: "dragAxis",
        dragSnapGrid: "dragSnapGrid",
        ghostDragEnabled: "ghostDragEnabled",
        showOriginalElementWhileDragging: "showOriginalElementWhileDragging",
        dragCursor: "dragCursor",
        dropData: "dropData",
        validateDrag: "validateDrag",
        dragActiveClass: "dragActiveClass",
        ghostElementAppendTo: "ghostElementAppendTo",
        ghostElementTemplate: "ghostElementTemplate"
      },
      outputs: {
        dragPointerDown: "dragPointerDown",
        dragStart: "dragStart",
        ghostElementCreated: "ghostElementCreated",
        dragging: "dragging",
        dragEnd: "dragEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]()]
    });
    /** @nocollapse */

    DraggableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: DraggableHelper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: DraggableScrollContainerDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    DraggableDirective.propDecorators = {
      dropData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragSnapGrid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostDragEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      showOriginalElementWhileDragging: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      validateDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragCursor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragActiveClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementAppendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragPointerDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      ghostElementCreated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragging: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlDraggable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: DraggableHelper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: DraggableScrollContainerDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        dragAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragSnapGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostDragEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showOriginalElementWhileDragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragPointerDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        ghostElementCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dropData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        validateDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragActiveClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostElementAppendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostElementTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} clientX
     * @param {?} clientY
     * @param {?} rect
     * @return {?}
     */


    function isCoordinateWithinRectangle(clientX, clientY, rect) {
      return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    }

    var DroppableDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} draggableHelper
       * @param {?} zone
       * @param {?} renderer
       * @param {?} scrollContainer
       */
      function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
        _classCallCheck(this, DroppableDirective);

        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.renderer = renderer;
        this.scrollContainer = scrollContainer;
        /**
         * Called when a draggable element starts overlapping the element
         */

        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element stops overlapping the element
         */

        this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element is moved over the element
         */

        this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element is dropped on this element
         */

        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // tslint:disable-line no-output-named-after-standard-event
      }
      /**
       * @return {?}
       */


      _createClass(DroppableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(
          /**
          * @param {?} drag$
          * @return {?}
          */
          function (drag$) {
            _this21.renderer.addClass(_this21.element.nativeElement, _this21.dragActiveClass);
            /** @type {?} */


            var droppableElement = {
              updateCache: true
            };
            /** @type {?} */

            var deregisterScrollListener = _this21.renderer.listen(_this21.scrollContainer ? _this21.scrollContainer.elementRef.nativeElement : 'window', 'scroll',
            /**
            * @return {?}
            */
            function () {
              droppableElement.updateCache = true;
            });
            /** @type {?} */


            var currentDragDropData;
            /** @type {?} */

            var overlaps$ = drag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref49) {
              var clientX = _ref49.clientX,
                  clientY = _ref49.clientY,
                  dropData = _ref49.dropData;
              currentDragDropData = dropData;

              if (droppableElement.updateCache) {
                droppableElement.rect = _this21.element.nativeElement.getBoundingClientRect();

                if (_this21.scrollContainer) {
                  droppableElement.scrollContainerRect = _this21.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                }

                droppableElement.updateCache = false;
              }
              /** @type {?} */


              var isWithinElement = isCoordinateWithinRectangle(clientX, clientY,
              /** @type {?} */
              droppableElement.rect);

              if (droppableElement.scrollContainerRect) {
                return isWithinElement && isCoordinateWithinRectangle(clientX, clientY,
                /** @type {?} */
                droppableElement.scrollContainerRect);
              } else {
                return isWithinElement;
              }
            }));
            /** @type {?} */

            var overlapsChanged$ = overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            /** @type {?} */

            var dragOverActive;
            overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} overlapsNow
            * @return {?}
            */
            function (overlapsNow) {
              return overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              dragOverActive = true;

              _this21.renderer.addClass(_this21.element.nativeElement, _this21.dragOverClass);

              _this21.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this21.dragEnter.next({
                  dropData: currentDragDropData
                });
              });
            });
            overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} overlapsNow
            * @return {?}
            */
            function (overlapsNow) {
              return overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this21.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this21.dragOver.next({
                  dropData: currentDragDropData
                });
              });
            });
            overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref50) {
              var _ref51 = _slicedToArray(_ref50, 2),
                  didOverlap = _ref51[0],
                  overlapsNow = _ref51[1];

              return didOverlap && !overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              dragOverActive = false;

              _this21.renderer.removeClass(_this21.element.nativeElement, _this21.dragOverClass);

              _this21.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this21.dragLeave.next({
                  dropData: currentDragDropData
                });
              });
            });
            drag$.subscribe({
              complete:
              /**
              * @return {?}
              */
              function complete() {
                deregisterScrollListener();

                _this21.renderer.removeClass(_this21.element.nativeElement, _this21.dragActiveClass);

                if (dragOverActive) {
                  _this21.renderer.removeClass(_this21.element.nativeElement, _this21.dragOverClass);

                  _this21.zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this21.drop.next({
                      dropData: currentDragDropData
                    });
                  });
                }
              }
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.currentDragSubscription) {
            this.currentDragSubscription.unsubscribe();
          }
        }
      }]);

      return DroppableDirective;
    }();

    DroppableDirective.ɵfac = function DroppableDirective_Factory(t) {
      return new (t || DroppableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8));
    };

    DroppableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: DroppableDirective,
      selectors: [["", "mwlDroppable", ""]],
      inputs: {
        dragOverClass: "dragOverClass",
        dragActiveClass: "dragActiveClass"
      },
      outputs: {
        dragEnter: "dragEnter",
        dragLeave: "dragLeave",
        dragOver: "dragOver",
        drop: "drop"
      }
    });
    /** @nocollapse */

    DroppableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: DraggableHelper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: DraggableScrollContainerDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    DroppableDirective.propDecorators = {
      dragOverClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragActiveClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      drop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DroppableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlDroppable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: DraggableHelper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: DraggableScrollContainerDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        dragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        drop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragOverClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragActiveClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DragAndDropModule = function DragAndDropModule() {
      _classCallCheck(this, DragAndDropModule);
    };

    DragAndDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DragAndDropModule
    });
    DragAndDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function DragAndDropModule_Factory(t) {
        return new (t || DragAndDropModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DragAndDropModule, {
        declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
        exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DragAndDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
          exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-draggable-droppable.js.map

    /***/

  },

  /***/
  "./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js ***!
    \***************************************************************************************************/

  /*! exports provided: ResizableDirective, ResizeHandleDirective, ResizableModule */

  /***/
  function node_modulesAngularResizableElement__ivy_ngcc__Fesm2015AngularResizableElementJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizableDirective", function () {
      return ResizableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizeHandleDirective", function () {
      return ResizeHandleDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizableModule", function () {
      return ResizableModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value1
     * @param {?} value2
     * @param {?=} precision
     * @return {?}
     */


    function isNumberCloseTo(value1, value2) {
      var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

      /** @type {?} */
      var diff = Math.abs(value1 - value2);
      return diff < precision;
    }
    /**
     * @param {?} startingRect
     * @param {?} edges
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */


    function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
      /** @type {?} */
      var newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
      };

      if (edges.top) {
        newBoundingRect.top += clientY;
      }

      if (edges.bottom) {
        newBoundingRect.bottom += clientY;
      }

      if (edges.left) {
        newBoundingRect.left += clientX;
      }

      if (edges.right) {
        newBoundingRect.right += clientX;
      }

      newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
      newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
      return newBoundingRect;
    }
    /**
     * @param {?} element
     * @param {?} ghostElementPositioning
     * @return {?}
     */


    function getElementRect(element, ghostElementPositioning) {
      /** @type {?} */
      var translateX = 0;
      /** @type {?} */

      var translateY = 0;
      /** @type {?} */

      var style = element.nativeElement.style;
      /** @type {?} */

      var transformProperties = ['transform', '-ms-transform', '-moz-transform', '-o-transform'];
      /** @type {?} */

      var transform = transformProperties.map(function (property) {
        return style[property];
      }).find(function (value) {
        return !!value;
      });

      if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$1');
        translateY = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$2');
      }

      if (ghostElementPositioning === 'absolute') {
        return {
          height: element.nativeElement.offsetHeight,
          width: element.nativeElement.offsetWidth,
          top: element.nativeElement.offsetTop - translateY,
          bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
          left: element.nativeElement.offsetLeft - translateX,
          right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
        };
      } else {
        /** @type {?} */
        var boundingRect = element.nativeElement.getBoundingClientRect();
        return {
          height: boundingRect.height,
          width: boundingRect.width,
          top: boundingRect.top - translateY,
          bottom: boundingRect.bottom - translateY,
          left: boundingRect.left - translateX,
          right: boundingRect.right - translateX,
          scrollTop: element.nativeElement.scrollTop,
          scrollLeft: element.nativeElement.scrollLeft
        };
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function isWithinBoundingY(_ref52) {
      var clientY = _ref52.clientY,
          rect = _ref52.rect;
      return clientY >= rect.top && clientY <= rect.bottom;
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function isWithinBoundingX(_ref53) {
      var clientX = _ref53.clientX,
          rect = _ref53.rect;
      return clientX >= rect.left && clientX <= rect.right;
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function getResizeEdges(_ref54) {
      var clientX = _ref54.clientX,
          clientY = _ref54.clientY,
          elm = _ref54.elm,
          allowedEdges = _ref54.allowedEdges,
          cursorPrecision = _ref54.cursorPrecision;

      /** @type {?} */
      var elmPosition = elm.nativeElement.getBoundingClientRect();
      /** @type {?} */

      var edges = {};

      if (allowedEdges.left && isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) && isWithinBoundingY({
        clientY: clientY,
        rect: elmPosition
      })) {
        edges.left = true;
      }

      if (allowedEdges.right && isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) && isWithinBoundingY({
        clientY: clientY,
        rect: elmPosition
      })) {
        edges.right = true;
      }

      if (allowedEdges.top && isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) && isWithinBoundingX({
        clientX: clientX,
        rect: elmPosition
      })) {
        edges.top = true;
      }

      if (allowedEdges.bottom && isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) && isWithinBoundingX({
        clientX: clientX,
        rect: elmPosition
      })) {
        edges.bottom = true;
      }

      return edges;
    }
    /** @type {?} */


    var DEFAULT_RESIZE_CURSORS = Object.freeze({
      topLeft: 'nw-resize',
      topRight: 'ne-resize',
      bottomLeft: 'sw-resize',
      bottomRight: 'se-resize',
      leftOrRight: 'col-resize',
      topOrBottom: 'row-resize'
    });
    /**
     * @param {?} edges
     * @param {?} cursors
     * @return {?}
     */

    function getResizeCursor(edges, cursors) {
      if (edges.left && edges.top) {
        return cursors.topLeft;
      } else if (edges.right && edges.top) {
        return cursors.topRight;
      } else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
      } else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
      } else if (edges.left || edges.right) {
        return cursors.leftOrRight;
      } else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
      } else {
        return '';
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function getEdgesDiff(_ref55) {
      var edges = _ref55.edges,
          initialRectangle = _ref55.initialRectangle,
          newRectangle = _ref55.newRectangle;

      /** @type {?} */
      var edgesDiff = {};
      Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
      });
      return edgesDiff;
    }
    /** @type {?} */


    var RESIZE_ACTIVE_CLASS = 'resize-active';
    /** @type {?} */

    var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
    /** @type {?} */

    var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
    /** @type {?} */

    var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
    /** @type {?} */

    var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
    /** @type {?} */

    var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
    /** @type {?} */

    var MOUSE_MOVE_THROTTLE_MS = 50;
    /**
     * Place this on an element to make it resizable. For example:
     *
     * ```html
     * <div
     *   mwlResizable
     *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
     *   [enableGhostResize]="true">
     * </div>
     * ```
     */

    var ResizableDirective =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       * @param {?} platformId
       * @param {?} renderer
       * @param {?} elm
       * @param {?} zone
       */
      function ResizableDirective(platformId, renderer, elm, zone) {
        _classCallCheck(this, ResizableDirective);

        this.platformId = platformId;
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
         */

        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */

        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */

        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */

        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
         */

        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */

        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */

        this.allowNegativeResizes = false;
        /**
         * The mouse move throttle in milliseconds, default: 50 ms
         */

        this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */

        this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */

        this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */

        this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @hidden
         */

        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * @hidden
         */

        this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * @hidden
         */

        this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(ResizableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          /** @type {?} */
          var mousedown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerDown, this.mousedown);
          /** @type {?} */

          var mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerMove, this.mousemove).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref56) {
            var event = _ref56.event;

            if (currentResize) {
              event.preventDefault();
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
          /** @type {?} */

          var mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerUp, this.mouseup);
          /** @type {?} */

          var currentResize;
          /** @type {?} */

          var removeGhostElement = function removeGhostElement() {
            if (currentResize && currentResize.clonedNode) {
              _this22.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);

              _this22.renderer.setStyle(_this22.elm.nativeElement, 'visibility', 'inherit');
            }
          };
          /** @type {?} */


          var getResizeCursors = function getResizeCursors() {
            return Object.assign({}, DEFAULT_RESIZE_CURSORS, _this22.resizeCursors);
          };

          this.resizeEdges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.resizeEdges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this22.resizeEdges && Object.keys(_this22.resizeEdges).some(function (edge) {
              return !!_this22.resizeEdges[edge];
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (legacyResizeEdgesEnabled) {
            return legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(this.mouseMoveThrottleMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (_ref57) {
            var clientX = _ref57.clientX,
                clientY = _ref57.clientY;

            /** @type {?} */
            var resizeEdges = getResizeEdges({
              clientX: clientX,
              clientY: clientY,
              elm: _this22.elm,
              allowedEdges: _this22.resizeEdges,
              cursorPrecision: _this22.resizeCursorPrecision
            });
            /** @type {?} */

            var resizeCursors = getResizeCursors();

            if (!currentResize) {
              /** @type {?} */
              var cursor = getResizeCursor(resizeEdges, resizeCursors);

              _this22.renderer.setStyle(_this22.elm.nativeElement, 'cursor', cursor);
            }

            _this22.setElementClass(_this22.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);

            _this22.setElementClass(_this22.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);

            _this22.setElementClass(_this22.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);

            _this22.setElementClass(_this22.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
          });
          /** @type {?} */

          var mousedrag = mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (startCoords) {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
              return {
                clientX: moveCoords.clientX - startCoords.clientX,
                clientY: moveCoords.clientY - startCoords.clientY
              };
            }
            /** @type {?} */


            var getSnapGrid = function getSnapGrid() {
              /** @type {?} */
              var snapGrid = {
                x: 1,
                y: 1
              };

              if (currentResize) {
                if (_this22.resizeSnapGrid.left && currentResize.edges.left) {
                  snapGrid.x = +_this22.resizeSnapGrid.left;
                } else if (_this22.resizeSnapGrid.right && currentResize.edges.right) {
                  snapGrid.x = +_this22.resizeSnapGrid.right;
                }

                if (_this22.resizeSnapGrid.top && currentResize.edges.top) {
                  snapGrid.y = +_this22.resizeSnapGrid.top;
                } else if (_this22.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                  snapGrid.y = +_this22.resizeSnapGrid.bottom;
                }
              }

              return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */


            function getGrid(coords, snapGrid) {
              return {
                x: Math.ceil(coords.clientX / snapGrid.x),
                y: Math.ceil(coords.clientY / snapGrid.y)
              };
            }

            return (
              /** @type {?} */
              Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (coords) {
                return [, coords];
              })), mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref58) {
                var _ref59 = _slicedToArray(_ref58, 2),
                    previousCoords = _ref59[0],
                    newCoords = _ref59[1];

                return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_ref60) {
                var _ref61 = _slicedToArray(_ref60, 2),
                    previousCoords = _ref61[0],
                    newCoords = _ref61[1];

                if (!previousCoords) {
                  return true;
                }
                /** @type {?} */


                var snapGrid = getSnapGrid();
                /** @type {?} */

                var previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */

                var newGrid = getGrid(newCoords, snapGrid);
                return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref62) {
                var _ref63 = _slicedToArray(_ref62, 2),
                    newCoords = _ref63[1];

                /** @type {?} */
                var snapGrid = getSnapGrid();
                return {
                  clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                  clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mouseup$, mousedown$)))
            );
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function () {
            return !!currentResize;
          }));
          mousedrag.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref64) {
            var clientX = _ref64.clientX,
                clientY = _ref64.clientY;
            return getNewBoundingRectangle(
            /** @type {?} */
            currentResize.startingRect,
            /** @type {?} */
            currentResize.edges, clientX, clientY);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newBoundingRect) {
            return _this22.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newBoundingRect) {
            return _this22.validateResize ? _this22.validateResize({
              rectangle: newBoundingRect,
              edges: getEdgesDiff({
                edges:
                /** @type {?} */
                currentResize.edges,
                initialRectangle:
                /** @type {?} */
                currentResize.startingRect,
                newRectangle: newBoundingRect
              })
            }) : true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (newBoundingRect) {
            if (currentResize && currentResize.clonedNode) {
              _this22.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(newBoundingRect.height, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(newBoundingRect.width, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(newBoundingRect.top, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(newBoundingRect.left, "px"));
            }

            _this22.zone.run(function () {
              _this22.resizing.emit({
                edges: getEdgesDiff({
                  edges:
                  /** @type {?} */
                  currentResize.edges,
                  initialRectangle:
                  /** @type {?} */
                  currentResize.startingRect,
                  newRectangle: newBoundingRect
                }),
                rectangle: newBoundingRect
              });
            });

            /** @type {?} */
            currentResize.currentRect = newBoundingRect;
          });
          mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref65) {
            var clientX = _ref65.clientX,
                clientY = _ref65.clientY,
                edges = _ref65.edges;
            return edges || getResizeEdges({
              clientX: clientX,
              clientY: clientY,
              elm: _this22.elm,
              allowedEdges: _this22.resizeEdges,
              cursorPrecision: _this22.resizeCursorPrecision
            });
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (edges) {
            return Object.keys(edges).length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (edges) {
            if (currentResize) {
              removeGhostElement();
            }
            /** @type {?} */


            var startingRect = getElementRect(_this22.elm, _this22.ghostElementPositioning);
            currentResize = {
              edges: edges,
              startingRect: startingRect,
              currentRect: startingRect
            };
            /** @type {?} */

            var resizeCursors = getResizeCursors();
            /** @type {?} */

            var cursor = getResizeCursor(currentResize.edges, resizeCursors);

            _this22.renderer.setStyle(document.body, 'cursor', cursor);

            _this22.setElementClass(_this22.elm, RESIZE_ACTIVE_CLASS, true);

            if (_this22.enableGhostResize) {
              currentResize.clonedNode = _this22.elm.nativeElement.cloneNode(true);

              _this22.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);

              _this22.renderer.setStyle(_this22.elm.nativeElement, 'visibility', 'hidden');

              _this22.renderer.setStyle(currentResize.clonedNode, 'position', _this22.ghostElementPositioning);

              _this22.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(currentResize.startingRect.left, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(currentResize.startingRect.top, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(currentResize.startingRect.height, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(currentResize.startingRect.width, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));

              _this22.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);

              /** @type {?} */
              currentResize.clonedNode.scrollTop =
              /** @type {?} */
              currentResize.startingRect.scrollTop;

              /** @type {?} */
              currentResize.clonedNode.scrollLeft =
              /** @type {?} */
              currentResize.startingRect.scrollLeft;
            }

            _this22.zone.run(function () {
              _this22.resizeStart.emit({
                edges: getEdgesDiff({
                  edges: edges,
                  initialRectangle: startingRect,
                  newRectangle: startingRect
                }),
                rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
              });
            });
          });
          mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function () {
            if (currentResize) {
              _this22.renderer.removeClass(_this22.elm.nativeElement, RESIZE_ACTIVE_CLASS);

              _this22.renderer.setStyle(document.body, 'cursor', '');

              _this22.renderer.setStyle(_this22.elm.nativeElement, 'cursor', '');

              _this22.zone.run(function () {
                _this22.resizeEnd.emit({
                  edges: getEdgesDiff({
                    edges:
                    /** @type {?} */
                    currentResize.edges,
                    initialRectangle:
                    /** @type {?} */
                    currentResize.startingRect,
                    newRectangle:
                    /** @type {?} */
                    currentResize.currentRect
                  }),
                  rectangle:
                  /** @type {?} */
                  currentResize.currentRect
                });
              });

              removeGhostElement();
              currentResize = null;
            }
          });
        }
        /**
         * @hidden
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.resizeEdges) {
            this.resizeEdges$.next(this.resizeEdges);
          }
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // browser check for angular universal, because it doesn't know what document is
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.renderer.setStyle(document.body, 'cursor', '');
          }

          this.mousedown.complete();
          this.mouseup.complete();
          this.mousemove.complete();
          this.resizeEdges$.complete();
          this.destroy$.next();
        }
        /**
         * @private
         * @param {?} elm
         * @param {?} name
         * @param {?} add
         * @return {?}
         */

      }, {
        key: "setElementClass",
        value: function setElementClass(elm, name, add) {
          if (add) {
            this.renderer.addClass(elm.nativeElement, name);
          } else {
            this.renderer.removeClass(elm.nativeElement, name);
          }
        }
      }]);

      return ResizableDirective;
    }();

    ResizableDirective.ɵfac = function ResizableDirective_Factory(t) {
      return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
    };

    ResizableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: ResizableDirective,
      selectors: [["", "mwlResizable", ""]],
      inputs: {
        resizeEdges: "resizeEdges",
        enableGhostResize: "enableGhostResize",
        resizeSnapGrid: "resizeSnapGrid",
        resizeCursors: "resizeCursors",
        resizeCursorPrecision: "resizeCursorPrecision",
        ghostElementPositioning: "ghostElementPositioning",
        allowNegativeResizes: "allowNegativeResizes",
        mouseMoveThrottleMS: "mouseMoveThrottleMS",
        validateResize: "validateResize"
      },
      outputs: {
        resizeStart: "resizeStart",
        resizing: "resizing",
        resizeEnd: "resizeEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]()]
    });
    /** @nocollapse */

    ResizableDirective.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };

    ResizableDirective.propDecorators = {
      validateResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeEdges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      enableGhostResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeSnapGrid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeCursors: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeCursorPrecision: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementPositioning: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      allowNegativeResizes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      mouseMoveThrottleMS: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      resizing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      resizeEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlResizable]'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      }, {
        resizeEdges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        enableGhostResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeSnapGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeCursors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeCursorPrecision: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostElementPositioning: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        allowNegativeResizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        mouseMoveThrottleMS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        resizing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        resizeEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        validateResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    var PointerEventListeners =
    /*#__PURE__*/
    function () {
      _createClass(PointerEventListeners, null, [{
        key: "getInstance",
        // tslint:disable-line

        /**
         * @param {?} renderer
         * @param {?} zone
         * @return {?}
         */
        value: function getInstance(renderer, zone) {
          if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
          }

          return PointerEventListeners.instance;
        }
        /**
         * @param {?} renderer
         * @param {?} zone
         */

      }]);

      function PointerEventListeners(renderer, zone) {
        _classCallCheck(this, PointerEventListeners);

        this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseDown;
          /** @type {?} */

          var unsubscribeTouchStart;
          zone.runOutsideAngular(function () {
            unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
              observer.next({
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseDown();
            unsubscribeTouchStart();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseMove;
          /** @type {?} */

          var unsubscribeTouchMove;
          zone.runOutsideAngular(function () {
            unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
              observer.next({
                clientX: event.targetTouches[0].clientX,
                clientY: event.targetTouches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseMove();
            unsubscribeTouchMove();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseUp;
          /** @type {?} */

          var unsubscribeTouchEnd;
          /** @type {?} */

          var unsubscribeTouchCancel;
          zone.runOutsideAngular(function () {
            unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
              observer.next({
                clientX: event.changedTouches[0].clientX,
                clientY: event.changedTouches[0].clientY,
                event: event
              });
            });
            unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
              observer.next({
                clientX: event.changedTouches[0].clientX,
                clientY: event.changedTouches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseUp();
            unsubscribeTouchEnd();
            unsubscribeTouchCancel();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
      }

      return PointerEventListeners;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
     *
     * For example
     *
     * ```html
     * <div mwlResizable>
     *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
     * </div>
     * ```
     */


    var ResizeHandleDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} renderer
       * @param {?} element
       * @param {?} zone
       * @param {?} resizable
       */
      function ResizeHandleDirective(renderer, element, zone, resizable) {
        _classCallCheck(this, ResizeHandleDirective);

        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */

        this.resizeEdges = {};
        this.eventListeners = {};
      }
      /**
       * @return {?}
       */


      _createClass(ResizeHandleDirective, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeEventListeners();
        }
        /**
         * @hidden
         * @param {?} event
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMousedown",
        value: function onMousedown(event, clientX, clientY) {
          var _this23 = this;

          event.preventDefault();
          this.zone.runOutsideAngular(function () {
            if (!_this23.eventListeners.touchmove) {
              _this23.eventListeners.touchmove = _this23.renderer.listen(_this23.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                _this23.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
              });
            }

            if (!_this23.eventListeners.mousemove) {
              _this23.eventListeners.mousemove = _this23.renderer.listen(_this23.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                _this23.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
              });
            }

            _this23.resizable.mousedown.next({
              clientX: clientX,
              clientY: clientY,
              edges: _this23.resizeEdges
            });
          });
        }
        /**
         * @hidden
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMouseup",
        value: function onMouseup(clientX, clientY) {
          var _this24 = this;

          this.zone.runOutsideAngular(function () {
            _this24.unsubscribeEventListeners();

            _this24.resizable.mouseup.next({
              clientX: clientX,
              clientY: clientY,
              edges: _this24.resizeEdges
            });
          });
        }
        /**
         * @private
         * @param {?} event
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMousemove",
        value: function onMousemove(event, clientX, clientY) {
          this.resizable.mousemove.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges,
            event: event
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "unsubscribeEventListeners",
        value: function unsubscribeEventListeners() {
          var _this25 = this;

          Object.keys(this.eventListeners).forEach(function (type) {
            /** @type {?} */
            _this25.eventListeners[type]();

            delete _this25.eventListeners[type];
          });
        }
      }]);

      return ResizeHandleDirective;
    }();

    ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) {
      return new (t || ResizeHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ResizableDirective));
    };

    ResizeHandleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: ResizeHandleDirective,
      selectors: [["", "mwlResizeHandle", ""]],
      hostBindings: function ResizeHandleDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("touchstart", function ResizeHandleDirective_touchstart_HostBindingHandler($event) {
            return ctx.onMousedown($event, $event.touches[0].clientX, $event.touches[0].clientY);
          })("mousedown", function ResizeHandleDirective_mousedown_HostBindingHandler($event) {
            return ctx.onMousedown($event, $event.clientX, $event.clientY);
          })("touchend", function ResizeHandleDirective_touchend_HostBindingHandler($event) {
            return ctx.onMouseup($event.changedTouches[0].clientX, $event.changedTouches[0].clientY);
          })("touchcancel", function ResizeHandleDirective_touchcancel_HostBindingHandler($event) {
            return ctx.onMouseup($event.changedTouches[0].clientX, $event.changedTouches[0].clientY);
          })("mouseup", function ResizeHandleDirective_mouseup_HostBindingHandler($event) {
            return ctx.onMouseup($event.clientX, $event.clientY);
          });
        }
      },
      inputs: {
        resizeEdges: "resizeEdges"
      }
    });
    /** @nocollapse */

    ResizeHandleDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: ResizableDirective
      }];
    };

    ResizeHandleDirective.propDecorators = {
      resizeEdges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      onMousedown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mousedown', ['$event', '$event.clientX', '$event.clientY']]
      }],
      onMouseup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mouseup', ['$event.clientX', '$event.clientY']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizeHandleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlResizeHandle]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: ResizableDirective
        }];
      }, {
        resizeEdges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mousedown', ['$event', '$event.clientX', '$event.clientY']]
        }],
        onMouseup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mouseup', ['$event.clientX', '$event.clientY']]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ResizableModule = function ResizableModule() {
      _classCallCheck(this, ResizableModule);
    };

    ResizableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ResizableModule
    });
    ResizableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function ResizableModule_Factory(t) {
        return new (t || ResizableModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResizableModule, {
        declarations: [ResizableDirective, ResizeHandleDirective],
        exports: [ResizableDirective, ResizeHandleDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [ResizableDirective, ResizeHandleDirective],
          exports: [ResizableDirective, ResizeHandleDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-resizable-element.js.map

    /***/

  },

  /***/
  "./node_modules/animation-frame-polyfill/lib/animation-frame-polyfill.cjs.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/animation-frame-polyfill/lib/animation-frame-polyfill.cjs.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAnimationFramePolyfillLibAnimationFramePolyfillCjsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var prefix = ['webkit', 'moz', 'ms', 'o'];

    var requestAnimationFrame = exports.requestAnimationFrame = function () {
      for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame) {
        (function () {
          var lastTime = 0;

          window.requestAnimationFrame = function (callback) {
            var now = new Date().getTime();
            var ttc = Math.max(0, 16 - now - lastTime);
            var timer = window.setTimeout(function () {
              return callback(now + ttc);
            }, ttc);
            lastTime = now + ttc;
            return timer;
          };
        })();
      }

      return window.requestAnimationFrame.bind(window);
    }();

    var cancelAnimationFrame = exports.cancelAnimationFrame = function () {
      for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
        window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
      }

      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (timer) {
          window.clearTimeout(timer);
        };
      }

      return window.cancelAnimationFrame.bind(window);
    }();
    /***/

  },

  /***/
  "./node_modules/array-from/index.js":
  /*!******************************************!*\
    !*** ./node_modules/array-from/index.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesArrayFromIndexJs(module, exports, __webpack_require__) {
    module.exports = typeof Array.from === 'function' ? Array.from : __webpack_require__(
    /*! ./polyfill */
    "./node_modules/array-from/polyfill.js");
    /***/
  },

  /***/
  "./node_modules/array-from/polyfill.js":
  /*!*********************************************!*\
    !*** ./node_modules/array-from/polyfill.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesArrayFromPolyfillJs(module, exports) {
    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    // Reference: http://www.ecma-international.org/ecma-262/6.0/#sec-array.from
    module.exports = function () {
      var isCallable = function isCallable(fn) {
        return typeof fn === 'function';
      };

      var toInteger = function toInteger(value) {
        var number = Number(value);

        if (isNaN(number)) {
          return 0;
        }

        if (number === 0 || !isFinite(number)) {
          return number;
        }

        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };

      var maxSafeInteger = Math.pow(2, 53) - 1;

      var toLength = function toLength(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };

      var iteratorProp = function iteratorProp(value) {
        if (value != null) {
          if (['string', 'number', 'boolean', 'symbol'].indexOf(typeof value) > -1) {
            return Symbol.iterator;
          } else if (typeof Symbol !== 'undefined' && 'iterator' in Symbol && Symbol.iterator in value) {
            return Symbol.iterator;
          } // Support "@@iterator" placeholder, Gecko 27 to Gecko 35
          else if ('@@iterator' in value) {
              return '@@iterator';
            }
        }
      };

      var getMethod = function getMethod(O, P) {
        // Assert: IsPropertyKey(P) is true.
        if (O != null && P != null) {
          // Let func be GetV(O, P).
          var func = O[P]; // ReturnIfAbrupt(func).
          // If func is either undefined or null, return undefined.

          if (func == null) {
            return void 0;
          } // If IsCallable(func) is false, throw a TypeError exception.


          if (!isCallable(func)) {
            throw new TypeError(func + ' is not a function');
          }

          return func;
        }
      };

      var iteratorStep = function iteratorStep(iterator) {
        // Let result be IteratorNext(iterator).
        // ReturnIfAbrupt(result).
        var result = iterator.next(); // Let done be IteratorComplete(result).
        // ReturnIfAbrupt(done).

        var done = Boolean(result.done); // If done is true, return false.

        if (done) {
          return false;
        } // Return result.


        return result;
      }; // The length property of the from method is 1.


      return function from(items
      /*, mapFn, thisArg */
      ) {
        'use strict'; // 1. Let C be the this value.

        var C = this; // 2. If mapfn is undefined, let mapping be false.

        var mapFn = arguments.length > 1 ? arguments[1] : void 0;
        var T;

        if (typeof mapFn !== 'undefined') {
          // 3. else
          //   a. If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          } //   b. If thisArg was supplied, let T be thisArg; else let T
          //      be undefined.


          if (arguments.length > 2) {
            T = arguments[2];
          } //   c. Let mapping be true (implied by mapFn)

        }

        var A, k; // 4. Let usingIterator be GetMethod(items, @@iterator).
        // 5. ReturnIfAbrupt(usingIterator).

        var usingIterator = getMethod(items, iteratorProp(items)); // 6. If usingIterator is not undefined, then

        if (usingIterator !== void 0) {
          // a. If IsConstructor(C) is true, then
          //   i. Let A be the result of calling the [[Construct]]
          //      internal method of C with an empty argument list.
          // b. Else,
          //   i. Let A be the result of the abstract operation ArrayCreate
          //      with argument 0.
          // c. ReturnIfAbrupt(A).
          A = isCallable(C) ? Object(new C()) : []; // d. Let iterator be GetIterator(items, usingIterator).

          var iterator = usingIterator.call(items); // e. ReturnIfAbrupt(iterator).

          if (iterator == null) {
            throw new TypeError('Array.from requires an array-like or iterable object');
          } // f. Let k be 0.


          k = 0; // g. Repeat

          var next, nextValue;

          while (true) {
            // i. Let Pk be ToString(k).
            // ii. Let next be IteratorStep(iterator).
            // iii. ReturnIfAbrupt(next).
            next = iteratorStep(iterator); // iv. If next is false, then

            if (!next) {
              // 1. Let setStatus be Set(A, "length", k, true).
              // 2. ReturnIfAbrupt(setStatus).
              A.length = k; // 3. Return A.

              return A;
            } // v. Let nextValue be IteratorValue(next).
            // vi. ReturnIfAbrupt(nextValue)


            nextValue = next.value; // vii. If mapping is true, then
            //   1. Let mappedValue be Call(mapfn, T, «nextValue, k»).
            //   2. If mappedValue is an abrupt completion, return
            //      IteratorClose(iterator, mappedValue).
            //   3. Let mappedValue be mappedValue.[[value]].
            // viii. Else, let mappedValue be nextValue.
            // ix.  Let defineStatus be the result of
            //      CreateDataPropertyOrThrow(A, Pk, mappedValue).
            // x. [TODO] If defineStatus is an abrupt completion, return
            //    IteratorClose(iterator, defineStatus).

            if (mapFn) {
              A[k] = mapFn.call(T, nextValue, k);
            } else {
              A[k] = nextValue;
            } // xi. Increase k by 1.


            k++;
          } // 7. Assert: items is not an Iterable so assume it is
          //    an array-like object.

        } else {
          // 8. Let arrayLike be ToObject(items).
          var arrayLike = Object(items); // 9. ReturnIfAbrupt(items).

          if (items == null) {
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
          } // 10. Let len be ToLength(Get(arrayLike, "length")).
          // 11. ReturnIfAbrupt(len).


          var len = toLength(arrayLike.length); // 12. If IsConstructor(C) is true, then
          //     a. Let A be Construct(C, «len»).
          // 13. Else
          //     a. Let A be ArrayCreate(len).
          // 14. ReturnIfAbrupt(A).

          A = isCallable(C) ? Object(new C(len)) : new Array(len); // 15. Let k be 0.

          k = 0; // 16. Repeat, while k < len… (also steps a - h)

          var kValue;

          while (k < len) {
            kValue = arrayLike[k];

            if (mapFn) {
              A[k] = mapFn.call(T, kValue, k);
            } else {
              A[k] = kValue;
            }

            k++;
          } // 17. Let setStatus be Set(A, "length", len, true).
          // 18. ReturnIfAbrupt(setStatus).


          A.length = len; // 19. Return A.
        }

        return A;
      };
    }();
    /***/

  },

  /***/
  "./node_modules/calendar-utils/calendar-utils.js":
  /*!*******************************************************!*\
    !*** ./node_modules/calendar-utils/calendar-utils.js ***!
    \*******************************************************/

  /*! exports provided: DAYS_OF_WEEK, SECONDS_IN_DAY, getEventsInPeriod, getWeekViewHeader, getDifferenceInDaysWithExclusions, getWeekView, getMonthView, EventValidationErrorMessage, validateEvents */

  /***/
  function node_modulesCalendarUtilsCalendarUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return DAYS_OF_WEEK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SECONDS_IN_DAY", function () {
      return SECONDS_IN_DAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getEventsInPeriod", function () {
      return getEventsInPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewHeader", function () {
      return getWeekViewHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDifferenceInDaysWithExclusions", function () {
      return getDifferenceInDaysWithExclusions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekView", function () {
      return getWeekView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMonthView", function () {
      return getMonthView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventValidationErrorMessage", function () {
      return EventValidationErrorMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateEvents", function () {
      return validateEvents;
    });

    var __assign = undefined && undefined.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    var DAYS_OF_WEEK;

    (function (DAYS_OF_WEEK) {
      DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
    })(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));

    var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
    var DAYS_IN_WEEK = 7;
    var HOURS_IN_DAY = 24;
    var MINUTES_IN_HOUR = 60;
    var SECONDS_IN_DAY = 60 * 60 * 24;

    function getExcludedSeconds(dateAdapter, _a) {
      var startDate = _a.startDate,
          seconds = _a.seconds,
          excluded = _a.excluded,
          precision = _a.precision;

      if (excluded.length < 1) {
        return 0;
      }

      var addSeconds = dateAdapter.addSeconds,
          getDay = dateAdapter.getDay,
          addDays = dateAdapter.addDays;
      var endDate = addSeconds(startDate, seconds - 1);
      var dayStart = getDay(startDate);
      var dayEnd = getDay(endDate);
      var result = 0; // Calculated in seconds

      var current = startDate;

      var _loop_1 = function _loop_1() {
        var day = getDay(current);

        if (excluded.some(function (excludedDay) {
          return excludedDay === day;
        })) {
          result += calculateExcludedSeconds(dateAdapter, {
            dayStart: dayStart,
            dayEnd: dayEnd,
            day: day,
            precision: precision,
            startDate: startDate,
            endDate: endDate
          });
        }

        current = addDays(current, 1);
      };

      while (current < endDate) {
        _loop_1();
      }

      return result;
    }

    function calculateExcludedSeconds(dateAdapter, _a) {
      var precision = _a.precision,
          day = _a.day,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          startDate = _a.startDate,
          endDate = _a.endDate;
      var differenceInSeconds = dateAdapter.differenceInSeconds,
          endOfDay = dateAdapter.endOfDay,
          startOfDay = dateAdapter.startOfDay;

      if (precision === 'minutes') {
        if (day === dayStart) {
          return differenceInSeconds(endOfDay(startDate), startDate) + 1;
        } else if (day === dayEnd) {
          return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
        }
      }

      return SECONDS_IN_DAY;
    }

    function getWeekViewEventSpan(dateAdapter, _a) {
      var event = _a.event,
          offset = _a.offset,
          startOfWeekDate = _a.startOfWeekDate,
          excluded = _a.excluded,
          precision = _a.precision,
          totalDaysInView = _a.totalDaysInView;
      var max = dateAdapter.max,
          differenceInSeconds = dateAdapter.differenceInSeconds,
          addDays = dateAdapter.addDays,
          endOfDay = dateAdapter.endOfDay,
          differenceInDays = dateAdapter.differenceInDays;
      var span = SECONDS_IN_DAY;
      var begin = max([event.start, startOfWeekDate]);

      if (event.end) {
        switch (precision) {
          case 'minutes':
            span = differenceInSeconds(event.end, begin);
            break;

          default:
            span = differenceInDays(addDays(endOfDay(event.end), 1), begin) * SECONDS_IN_DAY;
            break;
        }
      }

      var offsetSeconds = offset * SECONDS_IN_DAY;
      var totalLength = offsetSeconds + span; // the best way to detect if an event is outside the week-view
      // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view

      var secondsInView = totalDaysInView * SECONDS_IN_DAY;

      if (totalLength > secondsInView) {
        span = secondsInView - offsetSeconds;
      }

      span -= getExcludedSeconds(dateAdapter, {
        startDate: begin,
        seconds: span,
        excluded: excluded,
        precision: precision
      });
      return span / SECONDS_IN_DAY;
    }

    function getWeekViewEventOffset(dateAdapter, _a) {
      var event = _a.event,
          startOfWeekDate = _a.startOfWeek,
          excluded = _a.excluded,
          precision = _a.precision;
      var differenceInDays = dateAdapter.differenceInDays,
          startOfDay = dateAdapter.startOfDay,
          differenceInSeconds = dateAdapter.differenceInSeconds;

      if (event.start < startOfWeekDate) {
        return 0;
      }

      var offset = 0;

      switch (precision) {
        case 'days':
          offset = differenceInDays(startOfDay(event.start), startOfWeekDate) * SECONDS_IN_DAY;
          break;

        case 'minutes':
          offset = differenceInSeconds(event.start, startOfWeekDate);
          break;
      }

      offset -= getExcludedSeconds(dateAdapter, {
        startDate: startOfWeekDate,
        seconds: offset,
        excluded: excluded,
        precision: precision
      });
      return Math.abs(offset / SECONDS_IN_DAY);
    }

    function isEventIsPeriod(dateAdapter, _a) {
      var event = _a.event,
          periodStart = _a.periodStart,
          periodEnd = _a.periodEnd;
      var isSameSecond = dateAdapter.isSameSecond;
      var eventStart = event.start;
      var eventEnd = event.end || event.start;

      if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
      }

      if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
      }

      if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
      }

      if (isSameSecond(eventStart, periodStart) || isSameSecond(eventStart, periodEnd)) {
        return true;
      }

      if (isSameSecond(eventEnd, periodStart) || isSameSecond(eventEnd, periodEnd)) {
        return true;
      }

      return false;
    }

    function getEventsInPeriod(dateAdapter, _a) {
      var events = _a.events,
          periodStart = _a.periodStart,
          periodEnd = _a.periodEnd;
      return events.filter(function (event) {
        return isEventIsPeriod(dateAdapter, {
          event: event,
          periodStart: periodStart,
          periodEnd: periodEnd
        });
      });
    }

    function getWeekDay(dateAdapter, _a) {
      var date = _a.date,
          _b = _a.weekendDays,
          weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
      var startOfDay = dateAdapter.startOfDay,
          isSameDay = dateAdapter.isSameDay,
          getDay = dateAdapter.getDay;
      var today = startOfDay(new Date());
      var day = getDay(date);
      return {
        date: date,
        day: day,
        isPast: date < today,
        isToday: isSameDay(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(day) > -1
      };
    }

    function getWeekViewHeader(dateAdapter, _a) {
      var viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _b = _a.excluded,
          excluded = _b === void 0 ? [] : _b,
          weekendDays = _a.weekendDays,
          _c = _a.viewStart,
          viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _c,
          _d = _a.viewEnd,
          viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
      var addDays = dateAdapter.addDays,
          getDay = dateAdapter.getDay;
      var days = [];
      var date = viewStart;

      while (date < viewEnd) {
        if (!excluded.some(function (e) {
          return getDay(date) === e;
        })) {
          days.push(getWeekDay(dateAdapter, {
            date: date,
            weekendDays: weekendDays
          }));
        }

        date = addDays(date, 1);
      }

      return days;
    }

    function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
      var date1 = _a.date1,
          date2 = _a.date2,
          excluded = _a.excluded;
      var date = date1;
      var diff = 0;

      while (date < date2) {
        if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
          diff++;
        }

        date = dateAdapter.addDays(date, 1);
      }

      return diff;
    }

    function getAllDayWeekEvents(dateAdapter, _a) {
      var events = _a.events,
          excluded = _a.excluded,
          precision = _a.precision,
          absolutePositionedEvents = _a.absolutePositionedEvents,
          viewStart = _a.viewStart,
          viewEnd = _a.viewEnd,
          eventsInPeriod = _a.eventsInPeriod;
      var differenceInSeconds = dateAdapter.differenceInSeconds,
          differenceInDays = dateAdapter.differenceInDays;
      var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
        date1: viewStart,
        date2: viewEnd,
        excluded: excluded
      });
      var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
      var eventsMapped = eventsInPeriod.filter(function (event) {
        return event.allDay;
      }).map(function (event) {
        var offset = getWeekViewEventOffset(dateAdapter, {
          event: event,
          startOfWeek: viewStart,
          excluded: excluded,
          precision: precision
        });
        var span = getWeekViewEventSpan(dateAdapter, {
          event: event,
          offset: offset,
          startOfWeekDate: viewStart,
          excluded: excluded,
          precision: precision,
          totalDaysInView: totalDaysInView
        });
        return {
          event: event,
          offset: offset,
          span: span
        };
      }).filter(function (e) {
        return e.offset < maxRange;
      }).filter(function (e) {
        return e.span > 0;
      }).map(function (entry) {
        return {
          event: entry.event,
          offset: entry.offset,
          span: entry.span,
          startsBeforeWeek: entry.event.start < viewStart,
          endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
        };
      }).sort(function (itemA, itemB) {
        var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);

        if (startSecondsDiff === 0) {
          return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }

        return startSecondsDiff;
      });
      var allDayEventRows = [];
      var allocatedEvents = [];
      eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
          allocatedEvents.push(event);
          var rowSpan_1 = event.span + event.offset;
          var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
            if (nextEvent.offset >= rowSpan_1 && rowSpan_1 + nextEvent.span <= totalDaysInView && allocatedEvents.indexOf(nextEvent) === -1) {
              var nextEventOffset = nextEvent.offset - rowSpan_1;

              if (!absolutePositionedEvents) {
                nextEvent.offset = nextEventOffset;
              }

              rowSpan_1 += nextEvent.span + nextEventOffset;
              allocatedEvents.push(nextEvent);
              return true;
            }
          });
          var weekEvents = [event].concat(otherRowEvents);
          var id = weekEvents.filter(function (weekEvent) {
            return weekEvent.event.id;
          }).map(function (weekEvent) {
            return weekEvent.event.id;
          }).join('-');
          allDayEventRows.push(__assign({
            row: weekEvents
          }, id ? {
            id: id
          } : {}));
        }
      });
      return allDayEventRows;
    }

    function getWeekViewHourGrid(dateAdapter, _a) {
      var events = _a.events,
          viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          weekStartsOn = _a.weekStartsOn,
          excluded = _a.excluded,
          weekendDays = _a.weekendDays,
          segmentHeight = _a.segmentHeight,
          viewStart = _a.viewStart,
          viewEnd = _a.viewEnd;
      var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
        viewDate: viewDate,
        hourSegments: hourSegments,
        dayStart: dayStart,
        dayEnd: dayEnd
      });
      var weekDays = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
      });
      var setHours = dateAdapter.setHours,
          setMinutes = dateAdapter.setMinutes,
          getHours = dateAdapter.getHours,
          getMinutes = dateAdapter.getMinutes;
      return weekDays.map(function (day) {
        var dayView = getDayView(dateAdapter, {
          events: events,
          viewDate: day.date,
          hourSegments: hourSegments,
          dayStart: dayStart,
          dayEnd: dayEnd,
          segmentHeight: segmentHeight,
          eventWidth: 1
        });
        var hours = dayViewHourGrid.map(function (hour) {
          var segments = hour.segments.map(function (segment) {
            var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
            return __assign({}, segment, {
              date: date
            });
          });
          return __assign({}, hour, {
            segments: segments
          });
        });

        function getColumnCount(allEvents, prevOverlappingEvents) {
          var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) {
            return iEvent.left + 1;
          }));
          var nextOverlappingEvents = allEvents.filter(function (iEvent) {
            return iEvent.left >= columnCount;
          }).filter(function (iEvent) {
            return getOverLappingWeekViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0;
          });

          if (nextOverlappingEvents.length > 0) {
            return getColumnCount(allEvents, nextOverlappingEvents);
          } else {
            return columnCount;
          }
        }

        var mappedEvents = dayView.events.map(function (event) {
          var columnCount = getColumnCount(dayView.events, getOverLappingWeekViewEvents(dayView.events, event.top, event.top + event.height));
          var width = 100 / columnCount;
          return __assign({}, event, {
            left: event.left * width,
            width: width
          });
        });
        return {
          hours: hours,
          date: day.date,
          events: mappedEvents.map(function (event) {
            var overLappingEvents = getOverLappingWeekViewEvents(mappedEvents.filter(function (otherEvent) {
              return otherEvent.left > event.left;
            }), event.top, event.top + event.height);

            if (overLappingEvents.length > 0) {
              return __assign({}, event, {
                width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) {
                  return otherEvent.left;
                })) - event.left
              });
            }

            return event;
          })
        };
      });
    }

    function getWeekView(dateAdapter, _a) {
      var _b = _a.events,
          events = _b === void 0 ? [] : _b,
          viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _c = _a.excluded,
          excluded = _c === void 0 ? [] : _c,
          _d = _a.precision,
          precision = _d === void 0 ? 'days' : _d,
          _e = _a.absolutePositionedEvents,
          absolutePositionedEvents = _e === void 0 ? false : _e,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          weekendDays = _a.weekendDays,
          segmentHeight = _a.segmentHeight,
          _f = _a.viewStart,
          viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _f,
          _g = _a.viewEnd,
          viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _g;

      if (!events) {
        events = [];
      }

      var startOfDay = dateAdapter.startOfDay,
          endOfDay = dateAdapter.endOfDay;
      viewStart = startOfDay(viewStart);
      viewEnd = endOfDay(viewEnd);
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: viewStart,
        periodEnd: viewEnd
      });
      var header = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
      });
      return {
        allDayEventRows: getAllDayWeekEvents(dateAdapter, {
          events: events,
          excluded: excluded,
          precision: precision,
          absolutePositionedEvents: absolutePositionedEvents,
          viewStart: viewStart,
          viewEnd: viewEnd,
          eventsInPeriod: eventsInPeriod
        }),
        period: {
          events: eventsInPeriod,
          start: header[0].date,
          end: endOfDay(header[header.length - 1].date)
        },
        hourColumns: getWeekViewHourGrid(dateAdapter, {
          events: events,
          viewDate: viewDate,
          hourSegments: hourSegments,
          dayStart: dayStart,
          dayEnd: dayEnd,
          weekStartsOn: weekStartsOn,
          excluded: excluded,
          weekendDays: weekendDays,
          segmentHeight: segmentHeight,
          viewStart: viewStart,
          viewEnd: viewEnd
        })
      };
    }

    function getMonthView(dateAdapter, _a) {
      var _b = _a.events,
          events = _b === void 0 ? [] : _b,
          viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _c = _a.excluded,
          excluded = _c === void 0 ? [] : _c,
          _d = _a.viewStart,
          viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d,
          _e = _a.viewEnd,
          viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e,
          weekendDays = _a.weekendDays;

      if (!events) {
        events = [];
      }

      var startOfWeek = dateAdapter.startOfWeek,
          endOfWeek = dateAdapter.endOfWeek,
          differenceInDays = dateAdapter.differenceInDays,
          startOfDay = dateAdapter.startOfDay,
          addHours = dateAdapter.addHours,
          endOfDay = dateAdapter.endOfDay,
          isSameMonth = dateAdapter.isSameMonth,
          getDay = dateAdapter.getDay,
          getMonth = dateAdapter.getMonth;
      var start = startOfWeek(viewStart, {
        weekStartsOn: weekStartsOn
      });
      var end = endOfWeek(viewEnd, {
        weekStartsOn: weekStartsOn
      });
      var eventsInMonth = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: start,
        periodEnd: end
      });
      var initialViewDays = [];
      var previousDate;

      var _loop_2 = function _loop_2(i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;

        if (previousDate) {
          date = startOfDay(addHours(previousDate, HOURS_IN_DAY));

          if (previousDate.getTime() === date.getTime()) {
            // DST change, so need to add 25 hours

            /* istanbul ignore next */
            date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
          }

          previousDate = date;
        } else {
          date = previousDate = start;
        }

        if (!excluded.some(function (e) {
          return getDay(date) === e;
        })) {
          var day = getWeekDay(dateAdapter, {
            date: date,
            weekendDays: weekendDays
          });
          var eventsInPeriod = getEventsInPeriod(dateAdapter, {
            events: eventsInMonth,
            periodStart: startOfDay(date),
            periodEnd: endOfDay(date)
          });
          day.inMonth = isSameMonth(date, viewDate);
          day.events = eventsInPeriod;
          day.badgeTotal = eventsInPeriod.length;
          initialViewDays.push(day);
        }
      };

      for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
        _loop_2(i);
      }

      var days = [];
      var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;

      if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
          var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
          var isRowInMonth = row.some(function (day) {
            return getMonth(day.date) === getMonth(viewDate);
          });

          if (isRowInMonth) {
            days = days.concat(row);
          }
        }
      } else {
        days = initialViewDays;
      }

      var rows = Math.floor(days.length / totalDaysVisibleInWeek);
      var rowOffsets = [];

      for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
      }

      return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
        period: {
          start: days[0].date,
          end: endOfDay(days[days.length - 1].date),
          events: eventsInMonth
        }
      };
    }

    function getOverLappingWeekViewEvents(events, top, bottom) {
      return events.filter(function (previousEvent) {
        var previousEventTop = previousEvent.top;
        var previousEventBottom = previousEvent.top + previousEvent.height;

        if (top < previousEventBottom && previousEventBottom < bottom) {
          return true;
        } else if (top < previousEventTop && previousEventTop < bottom) {
          return true;
        } else if (previousEventTop <= top && bottom <= previousEventBottom) {
          return true;
        }

        return false;
      });
    }

    function getDayView(dateAdapter, _a) {
      var events = _a.events,
          viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          eventWidth = _a.eventWidth,
          segmentHeight = _a.segmentHeight;
      var setMinutes = dateAdapter.setMinutes,
          setHours = dateAdapter.setHours,
          startOfDay = dateAdapter.startOfDay,
          startOfMinute = dateAdapter.startOfMinute,
          endOfDay = dateAdapter.endOfDay,
          differenceInMinutes = dateAdapter.differenceInMinutes;
      var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
      var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
      var previousDayEvents = [];
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) {
          return !event.allDay;
        }),
        periodStart: startOfView,
        periodEnd: endOfView
      });
      var dayViewEvents = eventsInPeriod.sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
      }).map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = hourSegments * segmentHeight / MINUTES_IN_HOUR;
        var top = 0;

        if (eventStart > startOfView) {
          // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
          var eventOffset = eventStart.getTimezoneOffset();
          var startOffset = startOfView.getTimezoneOffset();
          var diff = startOffset - eventOffset;
          top += differenceInMinutes(eventStart, startOfView) + diff;
        }

        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = differenceInMinutes(endDate, startDate);

        if (!event.end) {
          height = segmentHeight;
        } else {
          height *= hourHeightModifier;
        }

        var bottom = top + height;
        var overlappingPreviousEvents = getOverLappingWeekViewEvents(previousDayEvents, top, bottom);
        var left = 0;

        while (overlappingPreviousEvents.some(function (previousEvent) {
          return previousEvent.left === left;
        })) {
          left += eventWidth;
        }

        var dayEvent = {
          event: event,
          height: height,
          width: eventWidth,
          top: top,
          left: left,
          startsBeforeDay: startsBeforeDay,
          endsAfterDay: endsAfterDay
        };
        previousDayEvents.push(dayEvent);
        return dayEvent;
      });
      var width = Math.max.apply(Math, dayViewEvents.map(function (event) {
        return event.left + event.width;
      }));
      var allDayEvents = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) {
          return event.allDay;
        }),
        periodStart: startOfDay(startOfView),
        periodEnd: endOfDay(endOfView)
      });
      return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
        period: {
          events: eventsInPeriod,
          start: startOfView,
          end: endOfView
        }
      };
    }

    function sanitiseHours(hours) {
      return Math.max(Math.min(23, hours), 0);
    }

    function sanitiseMinutes(minutes) {
      return Math.max(Math.min(59, minutes), 0);
    }

    function getDayViewHourGrid(dateAdapter, _a) {
      var viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd;
      var setMinutes = dateAdapter.setMinutes,
          setHours = dateAdapter.setHours,
          startOfDay = dateAdapter.startOfDay,
          startOfMinute = dateAdapter.startOfMinute,
          endOfDay = dateAdapter.endOfDay,
          addMinutes = dateAdapter.addMinutes,
          addHours = dateAdapter.addHours,
          addDays = dateAdapter.addDays;
      var hours = [];
      var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
      var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
      var segmentDuration = MINUTES_IN_HOUR / hourSegments;
      var startOfViewDay = startOfDay(viewDate);
      var endOfViewDay = endOfDay(viewDate);

      var dateAdjustment = function dateAdjustment(d) {
        return d;
      }; // this means that we change from or to DST on this day and that's going to cause problems so we bump the date


      if (startOfViewDay.getTimezoneOffset() !== endOfViewDay.getTimezoneOffset()) {
        startOfViewDay = addDays(startOfViewDay, 1);
        startOfView = addDays(startOfView, 1);
        endOfView = addDays(endOfView, 1);

        dateAdjustment = function dateAdjustment(d) {
          return addDays(d, -1);
        };
      }

      for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];

        for (var j = 0; j < hourSegments; j++) {
          var date = addMinutes(addHours(startOfViewDay, i), j * segmentDuration);

          if (date >= startOfView && date < endOfView) {
            segments.push({
              date: dateAdjustment(date),
              displayDate: date,
              isStart: j === 0
            });
          }
        }

        if (segments.length > 0) {
          hours.push({
            segments: segments
          });
        }
      }

      return hours;
    }

    var EventValidationErrorMessage;

    (function (EventValidationErrorMessage) {
      EventValidationErrorMessage["NotArray"] = "Events must be an array";
      EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
      EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
      EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
      EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
    })(EventValidationErrorMessage || (EventValidationErrorMessage = {}));

    function validateEvents(events, log) {
      var isValid = true;

      function isError(msg, event) {
        log(msg, event);
        isValid = false;
      }

      if (!Array.isArray(events)) {
        log(EventValidationErrorMessage.NotArray, events);
        return false;
      }

      events.forEach(function (event) {
        if (!event.start) {
          isError(EventValidationErrorMessage.StartPropertyMissing, event);
        } else if (!(event.start instanceof Date)) {
          isError(EventValidationErrorMessage.StartPropertyNotDate, event);
        }

        if (event.end) {
          if (!(event.end instanceof Date)) {
            isError(EventValidationErrorMessage.EndPropertyNotDate, event);
          }

          if (event.start > event.end) {
            isError(EventValidationErrorMessage.EndsBeforeStart, event);
          }
        }
      });
      return isValid;
    } //# sourceMappingURL=calendar-utils.js.map

    /***/

  },

  /***/
  "./node_modules/calendar-utils/date-adapters/date-fns/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/calendar-utils/date-adapters/date-fns/index.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCalendarUtilsDateAdaptersDateFnsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var date_fns_1 = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    function adapterFactory() {
      return {
        addDays: date_fns_1.addDays,
        addHours: date_fns_1.addHours,
        addMinutes: date_fns_1.addMinutes,
        addSeconds: date_fns_1.addSeconds,
        differenceInDays: date_fns_1.differenceInDays,
        differenceInMinutes: date_fns_1.differenceInMinutes,
        differenceInSeconds: date_fns_1.differenceInSeconds,
        endOfDay: date_fns_1.endOfDay,
        endOfMonth: date_fns_1.endOfMonth,
        endOfWeek: date_fns_1.endOfWeek,
        getDay: date_fns_1.getDay,
        getMonth: date_fns_1.getMonth,
        isSameDay: date_fns_1.isSameDay,
        isSameMonth: date_fns_1.isSameMonth,
        isSameSecond: date_fns_1.isSameSecond,
        max: date_fns_1.max,
        setHours: date_fns_1.setHours,
        setMinutes: date_fns_1.setMinutes,
        startOfDay: date_fns_1.startOfDay,
        startOfMinute: date_fns_1.startOfMinute,
        startOfMonth: date_fns_1.startOfMonth,
        startOfWeek: date_fns_1.startOfWeek,
        getHours: date_fns_1.getHours,
        getMinutes: date_fns_1.getMinutes
      };
    }

    exports.adapterFactory = adapterFactory; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/create-point-cb/dist/bundle.js":
  /*!*****************************************************!*\
    !*** ./node_modules/create-point-cb/dist/bundle.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCreatePointCbDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    var typeFunc = __webpack_require__(
    /*! type-func */
    "./node_modules/type-func/dist/bundle.js");

    function createPointCB(object, options) {
      // A persistent object (as opposed to returned object) is used to save memory
      // This is good to prevent layout thrashing, or for games, and such
      // NOTE
      // This uses IE fixes which should be OK to remove some day. :)
      // Some speed will be gained by removal of these.
      // pointCB should be saved in a variable on return
      // This allows the usage of element.removeEventListener
      options = options || {};
      var allowUpdate = typeFunc.boolean(options.allowUpdate, true);
      /*if(typeof options.allowUpdate === 'function'){
          allowUpdate = options.allowUpdate;
      }else{
          allowUpdate = function(){return true;};
      }*/

      return function pointCB(event) {
        event = event || window.event; // IE-ism

        object.target = event.target || event.srcElement || event.originalTarget;
        object.element = this;
        object.type = event.type;

        if (!allowUpdate(event)) {
          return;
        } // Support touch
        // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644


        if (event.targetTouches) {
          object.x = event.targetTouches[0].clientX;
          object.y = event.targetTouches[0].clientY;
          object.pageX = event.targetTouches[0].pageX;
          object.pageY = event.targetTouches[0].pageY;
          object.screenX = event.targetTouches[0].screenX;
          object.screenY = event.targetTouches[0].screenY;
        } else {
          // If pageX/Y aren't available and clientX/Y are,
          // calculate pageX/Y - logic taken from jQuery.
          // (This is to support old IE)
          // NOTE Hopefully this can be removed soon.
          if (event.pageX === null && event.clientX !== null) {
            var eventDoc = event.target && event.target.ownerDocument || document;
            var doc = eventDoc.documentElement;
            var body = eventDoc.body;
            object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
            object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
          } else {
            object.pageX = event.pageX;
            object.pageY = event.pageY;
          } // pageX, and pageY change with page scroll
          // so we're not going to use those for x, and y.
          // NOTE Most browsers also alias clientX/Y with x/y
          // so that's something to consider down the road.


          object.x = event.clientX;
          object.y = event.clientY;
          object.screenX = event.screenX;
          object.screenY = event.screenY;
        }

        object.clientX = object.x;
        object.clientY = object.y;
      }; //NOTE Remember accessibility, Aria roles, and labels.
    }
    /*
    git remote add origin https://github.com/hollowdoor/create_point_cb.git
    git push -u origin master
    */


    module.exports = createPointCB; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-autoscroller/dist/bundle.js":
  /*!******************************************************!*\
    !*** ./node_modules/dom-autoscroller/dist/bundle.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomAutoscrollerDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var typeFunc = __webpack_require__(
    /*! type-func */
    "./node_modules/type-func/dist/bundle.js");

    var animationFramePolyfill = __webpack_require__(
    /*! animation-frame-polyfill */
    "./node_modules/animation-frame-polyfill/lib/animation-frame-polyfill.cjs.js");

    var domSet = __webpack_require__(
    /*! dom-set */
    "./node_modules/dom-set/dist/bundle.js");

    var domPlane = __webpack_require__(
    /*! dom-plane */
    "./node_modules/dom-plane/dist/bundle.js");

    var mousemoveDispatcher = _interopDefault(__webpack_require__(
    /*! dom-mousemove-dispatcher */
    "./node_modules/dom-mousemove-dispatcher/dist/bundle.js"));

    function AutoScroller(elements, options) {
      if (options === void 0) options = {};
      var self = this;
      var maxSpeed = 4,
          scrolling = false;
      this.margin = options.margin || -1; //this.scrolling = false;

      this.scrollWhenOutside = options.scrollWhenOutside || false;
      var point = {},
          pointCB = domPlane.createPointCB(point),
          dispatcher = mousemoveDispatcher(),
          down = false;
      window.addEventListener('mousemove', pointCB, false);
      window.addEventListener('touchmove', pointCB, false);

      if (!isNaN(options.maxSpeed)) {
        maxSpeed = options.maxSpeed;
      }

      this.autoScroll = typeFunc.boolean(options.autoScroll);
      this.syncMove = typeFunc.boolean(options.syncMove, false);

      this.destroy = function (forceCleanAnimation) {
        window.removeEventListener('mousemove', pointCB, false);
        window.removeEventListener('touchmove', pointCB, false);
        window.removeEventListener('mousedown', onDown, false);
        window.removeEventListener('touchstart', onDown, false);
        window.removeEventListener('mouseup', onUp, false);
        window.removeEventListener('touchend', onUp, false);
        window.removeEventListener('pointerup', onUp, false);
        window.removeEventListener('mouseleave', onMouseOut, false);
        window.removeEventListener('mousemove', onMove, false);
        window.removeEventListener('touchmove', onMove, false);
        window.removeEventListener('scroll', setScroll, true);
        elements = [];

        if (forceCleanAnimation) {
          cleanAnimation();
        }
      };

      this.add = function () {
        var element = [],
            len = arguments.length;

        while (len--) {
          element[len] = arguments[len];
        }

        domSet.addElements.apply(void 0, [elements].concat(element));
        return this;
      };

      this.remove = function () {
        var element = [],
            len = arguments.length;

        while (len--) {
          element[len] = arguments[len];
        }

        return domSet.removeElements.apply(void 0, [elements].concat(element));
      };

      var hasWindow = null,
          windowAnimationFrame;

      if (Object.prototype.toString.call(elements) !== '[object Array]') {
        elements = [elements];
      }

      (function (temp) {
        elements = [];
        temp.forEach(function (element) {
          if (element === window) {
            hasWindow = window;
          } else {
            self.add(element);
          }
        });
      })(elements);

      Object.defineProperties(this, {
        down: {
          get: function get() {
            return down;
          }
        },
        maxSpeed: {
          get: function get() {
            return maxSpeed;
          }
        },
        point: {
          get: function get() {
            return point;
          }
        },
        scrolling: {
          get: function get() {
            return scrolling;
          }
        }
      });
      var n = 0,
          current = null,
          animationFrame;
      window.addEventListener('mousedown', onDown, false);
      window.addEventListener('touchstart', onDown, false);
      window.addEventListener('mouseup', onUp, false);
      window.addEventListener('touchend', onUp, false);
      /*
      IE does not trigger mouseup event when scrolling.
      It is a known issue that Microsoft won't fix.
      https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
      IE supports pointer events instead
      */

      window.addEventListener('pointerup', onUp, false);
      window.addEventListener('mousemove', onMove, false);
      window.addEventListener('touchmove', onMove, false);
      window.addEventListener('mouseleave', onMouseOut, false);
      window.addEventListener('scroll', setScroll, true);

      function setScroll(e) {
        for (var i = 0; i < elements.length; i++) {
          if (elements[i] === e.target) {
            scrolling = true;
            break;
          }
        }

        if (scrolling) {
          animationFramePolyfill.requestAnimationFrame(function () {
            return scrolling = false;
          });
        }
      }

      function onDown() {
        down = true;
      }

      function onUp() {
        down = false;
        cleanAnimation();
      }

      function cleanAnimation() {
        animationFramePolyfill.cancelAnimationFrame(animationFrame);
        animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
      }

      function onMouseOut() {
        down = false;
      }

      function getTarget(target) {
        if (!target) {
          return null;
        }

        if (current === target) {
          return target;
        }

        if (domSet.hasElement(elements, target)) {
          return target;
        }

        while (target = target.parentNode) {
          if (domSet.hasElement(elements, target)) {
            return target;
          }
        }

        return null;
      }

      function getElementUnderPoint() {
        var underPoint = null;

        for (var i = 0; i < elements.length; i++) {
          if (inside(point, elements[i])) {
            underPoint = elements[i];
          }
        }

        return underPoint;
      }

      function onMove(event) {
        if (!self.autoScroll()) {
          return;
        }

        if (event['dispatched']) {
          return;
        }

        var target = event.target,
            body = document.body;

        if (current && !inside(point, current)) {
          if (!self.scrollWhenOutside) {
            current = null;
          }
        }

        if (target && target.parentNode === body) {
          //The special condition to improve speed.
          target = getElementUnderPoint();
        } else {
          target = getTarget(target);

          if (!target) {
            target = getElementUnderPoint();
          }
        }

        if (target && target !== current) {
          current = target;
        }

        if (hasWindow) {
          animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
          windowAnimationFrame = animationFramePolyfill.requestAnimationFrame(scrollWindow);
        }

        if (!current) {
          return;
        }

        animationFramePolyfill.cancelAnimationFrame(animationFrame);
        animationFrame = animationFramePolyfill.requestAnimationFrame(scrollTick);
      }

      function scrollWindow() {
        autoScroll(hasWindow);
        animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
        windowAnimationFrame = animationFramePolyfill.requestAnimationFrame(scrollWindow);
      }

      function scrollTick() {
        if (!current) {
          return;
        }

        autoScroll(current);
        animationFramePolyfill.cancelAnimationFrame(animationFrame);
        animationFrame = animationFramePolyfill.requestAnimationFrame(scrollTick);
      }

      function autoScroll(el) {
        var rect = domPlane.getClientRect(el),
            scrollx,
            scrolly;

        if (point.x < rect.left + self.margin) {
          scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin - 1) * self.maxSpeed);
        } else if (point.x > rect.right - self.margin) {
          scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin + 1) * self.maxSpeed);
        } else {
          scrollx = 0;
        }

        if (point.y < rect.top + self.margin) {
          scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin - 1) * self.maxSpeed);
        } else if (point.y > rect.bottom - self.margin) {
          scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin + 1) * self.maxSpeed);
        } else {
          scrolly = 0;
        }

        if (self.syncMove()) {
          /*
          Notes about mousemove event dispatch.
          screen(X/Y) should need to be updated.
          Some other properties might need to be set.
          Keep the syncMove option default false until all inconsistencies are taken care of.
          */
          dispatcher.dispatch(el, {
            pageX: point.pageX + scrollx,
            pageY: point.pageY + scrolly,
            clientX: point.x + scrollx,
            clientY: point.y + scrolly
          });
        }

        setTimeout(function () {
          if (scrolly) {
            scrollY(el, scrolly);
          }

          if (scrollx) {
            scrollX(el, scrollx);
          }
        });
      }

      function scrollY(el, amount) {
        if (el === window) {
          window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
        } else {
          el.scrollTop += amount;
        }
      }

      function scrollX(el, amount) {
        if (el === window) {
          window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
        } else {
          el.scrollLeft += amount;
        }
      }
    }

    function AutoScrollerFactory(element, options) {
      return new AutoScroller(element, options);
    }

    function inside(point, el, rect) {
      if (!rect) {
        return domPlane.pointInside(point, el);
      } else {
        return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
      }
    }
    /*
    git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
    git push -u origin master
    */


    module.exports = AutoScrollerFactory; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-mousemove-dispatcher/dist/bundle.js":
  /*!**************************************************************!*\
    !*** ./node_modules/dom-mousemove-dispatcher/dist/bundle.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomMousemoveDispatcherDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    var objectCreate = void 0;

    if (typeof Object.create != 'function') {
      objectCreate = function (undefined) {
        var Temp = function Temp() {};

        return function (prototype, propertiesObject) {
          if (prototype !== Object(prototype) && prototype !== null) {
            throw TypeError('Argument must be an object, or null');
          }

          Temp.prototype = prototype || {};
          var result = new Temp();
          Temp.prototype = null;

          if (propertiesObject !== undefined) {
            Object.defineProperties(result, propertiesObject);
          } // to imitate the case of Object.create(null)


          if (prototype === null) {
            result.__proto__ = null;
          }

          return result;
        };
      }();
    } else {
      objectCreate = Object.create;
    }

    var objectCreate$1 = objectCreate;
    var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

    function createDispatcher(element) {
      var defaultSettings = {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        button: 0,
        buttons: 1,
        relatedTarget: null,
        region: null
      };

      if (element !== undefined) {
        element.addEventListener('mousemove', onMove);
      }

      function onMove(e) {
        for (var i = 0; i < mouseEventProps.length; i++) {
          defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
        }
      }

      var dispatch = function () {
        if (MouseEvent) {
          return function m1(element, initMove, data) {
            var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove)); //evt.dispatched = 'mousemove';

            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        } else if (typeof document.createEvent === 'function') {
          return function m2(element, initMove, data) {
            var settings = createMoveInit(defaultSettings, initMove);
            var evt = document.createEvent('MouseEvents');
            evt.initMouseEvent("mousemove", true, //can bubble
            true, //cancelable
            window, //view
            0, //detail
            settings.screenX, //0, //screenX
            settings.screenY, //0, //screenY
            settings.clientX, //80, //clientX
            settings.clientY, //20, //clientY
            settings.ctrlKey, //false, //ctrlKey
            settings.altKey, //false, //altKey
            settings.shiftKey, //false, //shiftKey
            settings.metaKey, //false, //metaKey
            settings.button, //0, //button
            settings.relatedTarget //null //relatedTarget
            ); //evt.dispatched = 'mousemove';

            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        } else if (typeof document.createEventObject === 'function') {
          return function m3(element, initMove, data) {
            var evt = document.createEventObject();
            var settings = createMoveInit(defaultSettings, initMove);

            for (var name in settings) {
              evt[name] = settings[name];
            } //evt.dispatched = 'mousemove';


            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        }
      }();

      function destroy() {
        if (element) element.removeEventListener('mousemove', onMove, false);
        defaultSettings = null;
      }

      return {
        destroy: destroy,
        dispatch: dispatch
      };
    }

    function createMoveInit(defaultSettings, initMove) {
      initMove = initMove || {};
      var settings = objectCreate$1(defaultSettings);

      for (var i = 0; i < mouseEventProps.length; i++) {
        if (initMove[mouseEventProps[i]] !== undefined) settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
      }

      return settings;
    }

    function setSpecial(e, data) {
      console.log('data ', data);
      e.data = data || {};
      e.dispatched = 'mousemove';
    }
    /*
    http://marcgrabanski.com/simulating-mouse-click-events-in-javascript/
    */


    module.exports = createDispatcher; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-plane/dist/bundle.js":
  /*!***********************************************!*\
    !*** ./node_modules/dom-plane/dist/bundle.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomPlaneDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var createPointCb = _interopDefault(__webpack_require__(
    /*! create-point-cb */
    "./node_modules/create-point-cb/dist/bundle.js"));

    function createWindowRect() {
      var props = {
        top: {
          value: 0,
          enumerable: true
        },
        left: {
          value: 0,
          enumerable: true
        },
        right: {
          value: window.innerWidth,
          enumerable: true
        },
        bottom: {
          value: window.innerHeight,
          enumerable: true
        },
        width: {
          value: window.innerWidth,
          enumerable: true
        },
        height: {
          value: window.innerHeight,
          enumerable: true
        },
        x: {
          value: 0,
          enumerable: true
        },
        y: {
          value: 0,
          enumerable: true
        }
      };

      if (Object.create) {
        return Object.create({}, props);
      } else {
        var rect = {};
        Object.defineProperties(rect, props);
        return rect;
      }
    }

    function getClientRect(el) {
      if (el === window) {
        return createWindowRect();
      } else {
        try {
          var rect = el.getBoundingClientRect();

          if (rect.x === undefined) {
            rect.x = rect.left;
            rect.y = rect.top;
          }

          return rect;
        } catch (e) {
          throw new TypeError("Can't call getBoundingClientRect on " + el);
        }
      }
    }

    function pointInside(point, el) {
      var rect = getClientRect(el);
      return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
    }

    exports.createPointCB = createPointCb;
    exports.getClientRect = getClientRect;
    exports.pointInside = pointInside; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-set/dist/bundle.js":
  /*!*********************************************!*\
    !*** ./node_modules/dom-set/dist/bundle.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomSetDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var arrayFrom = _interopDefault(__webpack_require__(
    /*! array-from */
    "./node_modules/array-from/index.js"));

    var isArray = _interopDefault(__webpack_require__(
    /*! is-array */
    "./node_modules/is-array/index.js"));

    var isElement = _interopDefault(__webpack_require__(
    /*! iselement */
    "./node_modules/iselement/module/index.js"));

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    /**
     * Returns `true` if provided input is Element.
     * @name isElement
     * @param {*} [input]
     * @returns {boolean}
     */


    var isElement$1 = function isElement$1(input) {
      return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
    };

    function select(selector) {
      if (typeof selector === 'string') {
        try {
          return document.querySelector(selector);
        } catch (e) {
          throw e;
        }
      } else if (isElement(selector)) {
        return selector;
      }
    }

    function selectAll(selector) {
      if (typeof selector === 'string') {
        return Array.prototype.slice.apply(document.querySelectorAll(selector));
      } else if (isArray(selector)) {
        return selector.map(select);
      } else if ('length' in selector) {
        return arrayFrom(selector).map(select);
      }
    }

    function indexOfElement(elements, element) {
      element = resolveElement(element, true);

      if (!isElement$1(element)) {
        return -1;
      }

      for (var i = 0; i < elements.length; i++) {
        if (elements[i] === element) {
          return i;
        }
      }

      return -1;
    }

    function hasElement(elements, element) {
      return -1 !== indexOfElement(elements, element);
    }

    function domListOf(arr) {
      if (!arr) {
        return [];
      }

      try {
        if (typeof arr === 'string') {
          return arrayFrom(document.querySelectorAll(arr));
        } else if (isArray(arr)) {
          return arr.map(resolveElement);
        } else {
          if (typeof arr.length === 'undefined') {
            return [resolveElement(arr)];
          }

          return arrayFrom(arr, resolveElement);
        }
      } catch (e) {
        throw new Error(e);
      }
    }

    function concatElementLists() {
      var lists = [],
          len = arguments.length;

      while (len--) {
        lists[len] = arguments[len];
      }

      return lists.reduce(function (last, list) {
        return list.length ? last : last.concat(domListOf(list));
      }, []);
    }

    function pushElements(elements, toAdd) {
      for (var i = 0; i < toAdd.length; i++) {
        if (!hasElement(elements, toAdd[i])) {
          elements.push(toAdd[i]);
        }
      }

      return toAdd;
    }

    function addElements(elements) {
      var toAdd = [],
          len = arguments.length - 1;

      while (len-- > 0) {
        toAdd[len] = arguments[len + 1];
      }

      toAdd = toAdd.map(resolveElement);
      return pushElements(elements, toAdd);
    }

    function removeElements(elements) {
      var toRemove = [],
          len = arguments.length - 1;

      while (len-- > 0) {
        toRemove[len] = arguments[len + 1];
      }

      return toRemove.map(resolveElement).reduce(function (last, e) {
        var index = indexOfElement(elements, e);

        if (index !== -1) {
          return last.concat(elements.splice(index, 1));
        }

        return last;
      }, []);
    }

    function resolveElement(element, noThrow) {
      if (typeof element === 'string') {
        try {
          return document.querySelector(element);
        } catch (e) {
          throw e;
        }
      }

      if (!isElement$1(element) && !noThrow) {
        throw new TypeError(element + " is not a DOM element.");
      }

      return element;
    }

    exports.indexOfElement = indexOfElement;
    exports.hasElement = hasElement;
    exports.domListOf = domListOf;
    exports.concatElementLists = concatElementLists;
    exports.addElements = addElements;
    exports.removeElements = removeElements;
    exports.resolveElement = resolveElement;
    exports.select = select;
    exports.selectAll = selectAll; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/is-array/index.js":
  /*!****************************************!*\
    !*** ./node_modules/is-array/index.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesIsArrayIndexJs(module, exports) {
    /**
     * isArray
     */
    var isArray = Array.isArray;
    /**
     * toString
     */

    var str = Object.prototype.toString;
    /**
     * Whether or not the given `val`
     * is an array.
     *
     * example:
     *
     *        isArray([]);
     *        // > true
     *        isArray(arguments);
     *        // > false
     *        isArray('');
     *        // > false
     *
     * @param {mixed} val
     * @return {bool}
     */

    module.exports = isArray || function (val) {
      return !!val && '[object Array]' == str.call(val);
    };
    /***/

  },

  /***/
  "./node_modules/iselement/module/index.js":
  /*!************************************************!*\
    !*** ./node_modules/iselement/module/index.js ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesIselementModuleIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    /**
     * Returns `true` if provided input is Element.
     * @name isElement
     * @param {*} [input]
     * @returns {boolean}
     */

    /* harmony default export */


    __webpack_exports__["default"] = function (input) {
      return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
    };
    /***/

  },

  /***/
  "./node_modules/ngx-color-picker/__ivy_ngcc__/dist/ngx-color-picker.es5.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/ngx-color-picker/__ivy_ngcc__/dist/ngx-color-picker.es5.js ***!
    \*********************************************************************************/

  /*! exports provided: Cmyk, ColorPickerComponent, ColorPickerDirective, ColorPickerModule, ColorPickerService, Hsla, Hsva, Rgba, SliderDirective, TextDirective */

  /***/
  function node_modulesNgxColorPicker__ivy_ngcc__DistNgxColorPickerEs5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cmyk", function () {
      return Cmyk;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function () {
      return ColorPickerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerDirective", function () {
      return ColorPickerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function () {
      return ColorPickerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerService", function () {
      return ColorPickerService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Hsla", function () {
      return Hsla;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Hsva", function () {
      return Hsva;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rgba", function () {
      return Rgba;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderDirective", function () {
      return SliderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextDirective", function () {
      return TextDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var _c0 = ["dialogPopup"];
    var _c1 = ["hueSlider"];
    var _c2 = ["alphaSlider"];

    function ColorPickerComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }

      if (rf & 2) {
        var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("arrow arrow-", ctx_r118.cpUsePosition, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r118.arrowTop, "px");
      }
    }

    function ColorPickerComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

          var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r133.onColorChange($event);
        })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

          var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r135.onDragStart("saturation-lightness");
        })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

          var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r136.onDragEnd("saturation-lightness");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r119.hueSliderColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1)("rgY", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r119.slider == null ? null : ctx_r119.slider.v, "px")("left", ctx_r119.slider == null ? null : ctx_r119.slider.s, "px");
      }
    }

    function ColorPickerComponent_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_button_8_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r137.onAddPresetColor($event, ctx_r137.selectedColor);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r120.cpAddColorButtonClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r120.cpPresetColors && ctx_r120.cpPresetColors.length >= ctx_r120.cpMaxPresetColorsLength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r120.cpAddColorButtonText, " ");
      }
    }

    function ColorPickerComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
      }
    }

    function ColorPickerComponent_div_20_input_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_input_6_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r141.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_20_input_6_Template_input_newValue_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r143.onAlphaInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r139.cmykText == null ? null : ctx_r139.cmykText.a);
      }
    }

    function ColorPickerComponent_div_20_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ColorPickerComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r144.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r146.onCyanInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r147.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r148.onMagentaInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r149.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r150.onYellowInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r151.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r152.onBlackInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColorPickerComponent_div_20_input_6_Template, 1, 2, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "K");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ColorPickerComponent_div_20_div_16_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r125.format !== 3 ? "none" : "block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r125.cmykText == null ? null : ctx_r125.cmykText.c);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r125.cmykText == null ? null : ctx_r125.cmykText.m);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r125.cmykText == null ? null : ctx_r125.cmykText.y);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r125.cmykText == null ? null : ctx_r125.cmykText.k);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.cpAlphaChannel !== "disabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.cpAlphaChannel !== "disabled");
      }
    }

    function ColorPickerComponent_div_21_input_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_input_5_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156);

          var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r155.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_21_input_5_Template_input_newValue_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156);

          var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r157.onAlphaInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r153.hslaText == null ? null : ctx_r153.hslaText.a);
      }
    }

    function ColorPickerComponent_div_21_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ColorPickerComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159);

          var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r158.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159);

          var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r160.onHueInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159);

          var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r161.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159);

          var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r162.onSaturationInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159);

          var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r163.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159);

          var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r164.onLightnessInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_21_input_5_Template, 1, 2, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "H");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "L");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorPickerComponent_div_21_div_13_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r126.format !== 2 ? "none" : "block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 360)("value", ctx_r126.hslaText == null ? null : ctx_r126.hslaText.h);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r126.hslaText == null ? null : ctx_r126.hslaText.s);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r126.hslaText == null ? null : ctx_r126.hslaText.l);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.cpAlphaChannel !== "disabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.cpAlphaChannel !== "disabled");
      }
    }

    function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168);

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r167.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168);

          var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r169.onAlphaInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r165.rgbaText == null ? null : ctx_r165.rgbaText.a);
      }
    }

    function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ColorPickerComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r170.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r172.onRedInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r173.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r174.onGreenInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r175.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r176.onBlueInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "R");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "G");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r127.format !== 1 ? "none" : "block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r127.rgbaText == null ? null : ctx_r127.rgbaText.r);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r127.rgbaText == null ? null : ctx_r127.rgbaText.g);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r127.rgbaText == null ? null : ctx_r127.rgbaText.b);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.cpAlphaChannel !== "disabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.cpAlphaChannel !== "disabled");
      }
    }

    function ColorPickerComponent_div_23_input_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_23_input_3_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r179.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_23_input_3_Template_input_newValue_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r181.onAlphaInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r177.hexAlpha);
      }
    }

    function ColorPickerComponent_div_23_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ColorPickerComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorPickerComponent_div_23_Template_input_blur_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183);

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r182.onHexInput(null);
        })("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183);

          var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r184.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183);

          var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r185.onHexInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_23_input_3_Template, 1, 2, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorPickerComponent_div_23_div_7_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r128.format !== 0 ? "none" : "block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hex-alpha", ctx_r128.cpAlphaChannel === "forced");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r128.hexText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r128.cpAlphaChannel === "forced");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r128.cpAlphaChannel === "forced");
      }
    }

    function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188);

          var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r187.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188);

          var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r189.onAlphaInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r186.hslaText == null ? null : ctx_r186.hslaText.a);
      }
    }

    function ColorPickerComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r191);

          var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r190.onAcceptColor($event);
        })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r191);

          var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r192.onValueInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "V");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r129.hslaText == null ? null : ctx_r129.hslaText.l);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r129.cpAlphaChannel !== "disabled");
      }
    }

    function ColorPickerComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_25_Template_span_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r193.onFormatToggle(0 - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_25_Template_span_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r195.onFormatToggle(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ColorPickerComponent_div_26_div_4_div_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_div_4_div_1_span_1_Template_span_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r202);

          var color_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r201.onRemovePresetColor($event, color_r199);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r200.cpRemoveColorButtonClass);
      }
    }

    function ColorPickerComponent_div_26_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_div_4_div_1_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r205);

          var color_r199 = ctx.$implicit;

          var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r204.setColorFromString(color_r199);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_26_div_4_div_1_span_1_Template, 1, 3, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r199 = ctx.$implicit;

        var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", color_r199);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.cpAddColorButton);
      }
    }

    function ColorPickerComponent_div_26_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_26_div_4_div_1_Template, 2, 3, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r196.cpPresetColorsClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r196.cpPresetColors);
      }
    }

    function ColorPickerComponent_div_26_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r197.cpPresetEmptyMessageClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r197.cpPresetEmptyMessage);
      }
    }

    function ColorPickerComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColorPickerComponent_div_26_div_4_Template, 2, 4, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_26_div_5_Template, 2, 4, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r131.cpPresetLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r131.cpPresetColors == null ? null : ctx_r131.cpPresetColors.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r131.cpPresetColors == null ? null : ctx_r131.cpPresetColors.length) && ctx_r131.cpAddColorButton);
      }
    }

    function ColorPickerComponent_div_27_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_button_1_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r208.onCancelColor($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r206.cpCancelButtonClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r206.cpCancelButtonText);
      }
    }

    function ColorPickerComponent_div_27_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_button_2_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211);

          var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r210.onAcceptColor($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r207.cpOKButtonClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r207.cpOKButtonText);
      }
    }

    function ColorPickerComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_27_button_1_Template, 2, 4, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPickerComponent_div_27_button_2_Template, 2, 4, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r132.cpCancelButton);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r132.cpOKButton);
      }
    }

    var ColorFormats = {
      HEX: 0,
      RGBA: 1,
      HSLA: 2,
      CMYK: 3
    };
    ColorFormats[ColorFormats.HEX] = 'HEX';
    ColorFormats[ColorFormats.RGBA] = 'RGBA';
    ColorFormats[ColorFormats.HSLA] = 'HSLA';
    ColorFormats[ColorFormats.CMYK] = 'CMYK';

    var Rgba =
    /** @class */
    function () {
      function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
      }

      return Rgba;
    }();

    var Hsva =
    /** @class */
    function () {
      function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
      }

      return Hsva;
    }();

    var Hsla =
    /** @class */
    function () {
      function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
      }

      return Hsla;
    }();

    var Cmyk =
    /** @class */
    function () {
      function Cmyk(c, m, y, k, a) {
        if (a === void 0) {
          a = 1;
        }

        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
        this.a = a;
      }

      return Cmyk;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function detectIE() {
      /** @type {?} */
      var ua = '';

      if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
      }
      /** @type {?} */


      var msie = ua.indexOf('msie ');

      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      } // Other browser


      return false;
    }

    var TextDirective =
    /** @class */
    function () {
      function TextDirective() {
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} event
       * @return {?}
       */


      TextDirective.prototype.inputChange =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var value = event.target.value;

        if (this.rg === undefined) {
          this.newValue.emit(value);
        } else {
          /** @type {?} */
          var numeric = parseFloat(value);
          this.newValue.emit({
            v: numeric,
            rg: this.rg
          });
        }
      };

      TextDirective.propDecorators = {
        rg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        newValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }]
      };

      TextDirective.ɵfac = function TextDirective_Factory(t) {
        return new (t || TextDirective)();
      };

      TextDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TextDirective,
        selectors: [["", "text", ""]],
        hostBindings: function TextDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TextDirective_input_HostBindingHandler($event) {
              return ctx.inputChange($event);
            });
          }
        },
        inputs: {
          rg: "rg",
          text: "text"
        },
        outputs: {
          newValue: "newValue"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[text]'
          }]
        }], function () {
          return [];
        }, {
          newValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          inputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
          }],
          rg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return TextDirective;
    }();

    var SliderDirective =
    /** @class */
    function () {
      function SliderDirective(elRef) {
        var _this = this;

        this.elRef = elRef;
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.listenerMove =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return _this.move(event);
        };

        this.listenerStop =
        /**
        * @return {?}
        */
        function () {
          return _this.stop();
        };
      }
      /**
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.mouseDown =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.start(event);
      };
      /**
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.touchStart =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.start(event);
      };
      /**
       * @private
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.move =
      /**
      * @private
      * @param {?} event
      * @return {?}
      */
      function (event) {
        event.preventDefault();
        this.setCursor(event);
      };
      /**
       * @private
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.start =
      /**
      * @private
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.setCursor(event);
        event.stopPropagation();
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
      };
      /**
       * @private
       * @return {?}
       */


      SliderDirective.prototype.stop =
      /**
      * @private
      * @return {?}
      */
      function () {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
      };
      /**
       * @private
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.getX =
      /**
      * @private
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */

        var pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
      };
      /**
       * @private
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.getY =
      /**
      * @private
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */

        var pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
      };
      /**
       * @private
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.setCursor =
      /**
      * @private
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var width = this.elRef.nativeElement.offsetWidth;
        /** @type {?} */

        var height = this.elRef.nativeElement.offsetHeight;
        /** @type {?} */

        var x = Math.max(0, Math.min(this.getX(event), width));
        /** @type {?} */

        var y = Math.max(0, Math.min(this.getY(event), height));

        if (this.rgX !== undefined && this.rgY !== undefined) {
          this.newValue.emit({
            s: x / width,
            v: 1 - y / height,
            rgX: this.rgX,
            rgY: this.rgY
          });
        } else if (this.rgX === undefined && this.rgY !== undefined) {
          this.newValue.emit({
            v: y / height,
            rgY: this.rgY
          });
        } else if (this.rgX !== undefined && this.rgY === undefined) {
          this.newValue.emit({
            v: x / width,
            rgX: this.rgX
          });
        }
      };
      /** @nocollapse */


      SliderDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      SliderDirective.propDecorators = {
        rgX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rgY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        newValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        touchStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchstart', ['$event']]
        }]
      };

      SliderDirective.ɵfac = function SliderDirective_Factory(t) {
        return new (t || SliderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      SliderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SliderDirective,
        selectors: [["", "slider", ""]],
        hostBindings: function SliderDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) {
              return ctx.mouseDown($event);
            })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) {
              return ctx.touchStart($event);
            });
          }
        },
        inputs: {
          rgX: "rgX",
          rgY: "rgY",
          slider: "slider"
        },
        outputs: {
          dragEnd: "dragEnd",
          dragStart: "dragStart",
          newValue: "newValue"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[slider]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          newValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
          }],
          touchStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart', ['$event']]
          }],
          rgX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rgY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return SliderDirective;
    }();

    var SliderPosition =
    /** @class */
    function () {
      function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
      }

      return SliderPosition;
    }();

    var SliderDimension =
    /** @class */
    function () {
      function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
      }

      return SliderDimension;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ColorPickerService =
    /** @class */
    function () {
      function ColorPickerService() {
        this.active = null;
      }
      /**
       * @param {?} active
       * @return {?}
       */


      ColorPickerService.prototype.setActive =
      /**
      * @param {?} active
      * @return {?}
      */
      function (active) {
        if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
          this.active.closeDialog();
        }

        this.active = active;
      };
      /**
       * @param {?} hsva
       * @return {?}
       */


      ColorPickerService.prototype.hsva2hsla =
      /**
      * @param {?} hsva
      * @return {?}
      */
      function (hsva) {
        /** @type {?} */
        var h = hsva.h;
        /** @type {?} */

        var s = hsva.s;
        /** @type {?} */

        var v = hsva.v;
        /** @type {?} */

        var a = hsva.a;

        if (v === 0) {
          return new Hsla(h, 0, 0, a);
        } else if (s === 0 && v === 1) {
          return new Hsla(h, 1, 1, a);
        } else {
          /** @type {?} */
          var l = v * (2 - s) / 2;
          return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
      };
      /**
       * @param {?} hsla
       * @return {?}
       */


      ColorPickerService.prototype.hsla2hsva =
      /**
      * @param {?} hsla
      * @return {?}
      */
      function (hsla) {
        /** @type {?} */
        var h = Math.min(hsla.h, 1);
        /** @type {?} */

        var s = Math.min(hsla.s, 1);
        /** @type {?} */

        var l = Math.min(hsla.l, 1);
        /** @type {?} */

        var a = Math.min(hsla.a, 1);

        if (l === 0) {
          return new Hsva(h, 0, 0, a);
        } else {
          /** @type {?} */
          var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
          return new Hsva(h, 2 * (v - l) / v, v, a);
        }
      };
      /**
       * @param {?} hsva
       * @return {?}
       */


      ColorPickerService.prototype.hsvaToRgba =
      /**
      * @param {?} hsva
      * @return {?}
      */
      function (hsva) {
        /** @type {?} */
        var r;
        /** @type {?} */

        var g;
        /** @type {?} */

        var b;
        /** @type {?} */

        var h = hsva.h;
        /** @type {?} */

        var s = hsva.s;
        /** @type {?} */

        var v = hsva.v;
        /** @type {?} */

        var a = hsva.a;
        /** @type {?} */

        var i = Math.floor(h * 6);
        /** @type {?} */

        var f = h * 6 - i;
        /** @type {?} */

        var p = v * (1 - s);
        /** @type {?} */

        var q = v * (1 - f * s);
        /** @type {?} */

        var t = v * (1 - (1 - f) * s);

        switch (i % 6) {
          case 0:
            r = v, g = t, b = p;
            break;

          case 1:
            r = q, g = v, b = p;
            break;

          case 2:
            r = p, g = v, b = t;
            break;

          case 3:
            r = p, g = q, b = v;
            break;

          case 4:
            r = t, g = p, b = v;
            break;

          case 5:
            r = v, g = p, b = q;
            break;

          default:
            r = 0, g = 0, b = 0;
        }

        return new Rgba(r, g, b, a);
      };
      /**
       * @param {?} cmyk
       * @return {?}
       */


      ColorPickerService.prototype.cmykToRgb =
      /**
      * @param {?} cmyk
      * @return {?}
      */
      function (cmyk) {
        /** @type {?} */
        var r = (1 - cmyk.c) * (1 - cmyk.k);
        /** @type {?} */

        var g = (1 - cmyk.m) * (1 - cmyk.k);
        /** @type {?} */

        var b = (1 - cmyk.y) * (1 - cmyk.k);
        return new Rgba(r, g, b, cmyk.a);
      };
      /**
       * @param {?} rgba
       * @return {?}
       */


      ColorPickerService.prototype.rgbaToCmyk =
      /**
      * @param {?} rgba
      * @return {?}
      */
      function (rgba) {
        /** @type {?} */
        var k = 1 - Math.max(rgba.r, rgba.g, rgba.b);

        if (k === 1) {
          return new Cmyk(0, 0, 0, 1, rgba.a);
        } else {
          /** @type {?} */
          var c = (1 - rgba.r - k) / (1 - k);
          /** @type {?} */

          var m = (1 - rgba.g - k) / (1 - k);
          /** @type {?} */

          var y = (1 - rgba.b - k) / (1 - k);
          return new Cmyk(c, m, y, k, rgba.a);
        }
      };
      /**
       * @param {?} rgba
       * @return {?}
       */


      ColorPickerService.prototype.rgbaToHsva =
      /**
      * @param {?} rgba
      * @return {?}
      */
      function (rgba) {
        /** @type {?} */
        var h;
        /** @type {?} */

        var s;
        /** @type {?} */

        var r = Math.min(rgba.r, 1);
        /** @type {?} */

        var g = Math.min(rgba.g, 1);
        /** @type {?} */

        var b = Math.min(rgba.b, 1);
        /** @type {?} */

        var a = Math.min(rgba.a, 1);
        /** @type {?} */

        var max = Math.max(r, g, b);
        /** @type {?} */

        var min = Math.min(r, g, b);
        /** @type {?} */

        var v = max;
        /** @type {?} */

        var d = max - min;
        s = max === 0 ? 0 : d / max;

        if (max === min) {
          h = 0;
        } else {
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;

            case g:
              h = (b - r) / d + 2;
              break;

            case b:
              h = (r - g) / d + 4;
              break;

            default:
              h = 0;
          }

          h /= 6;
        }

        return new Hsva(h, s, v, a);
      };
      /**
       * @param {?} rgba
       * @param {?=} allowHex8
       * @return {?}
       */


      ColorPickerService.prototype.rgbaToHex =
      /**
      * @param {?} rgba
      * @param {?=} allowHex8
      * @return {?}
      */
      function (rgba, allowHex8) {
        /* tslint:disable:no-bitwise */

        /** @type {?} */
        var hex = '#' + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);

        if (allowHex8) {
          hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */


        return hex;
      };
      /**
       * @param {?} cmyk
       * @return {?}
       */


      ColorPickerService.prototype.normalizeCMYK =
      /**
      * @param {?} cmyk
      * @return {?}
      */
      function (cmyk) {
        return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
      };
      /**
       * @param {?} cmyk
       * @return {?}
       */


      ColorPickerService.prototype.denormalizeCMYK =
      /**
      * @param {?} cmyk
      * @return {?}
      */
      function (cmyk) {
        return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
      };
      /**
       * @param {?} rgba
       * @return {?}
       */


      ColorPickerService.prototype.denormalizeRGBA =
      /**
      * @param {?} rgba
      * @return {?}
      */
      function (rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
      };
      /**
       * @param {?=} colorString
       * @param {?=} allowHex8
       * @return {?}
       */


      ColorPickerService.prototype.stringToHsva =
      /**
      * @param {?=} colorString
      * @param {?=} allowHex8
      * @return {?}
      */
      function (colorString, allowHex8) {
        if (colorString === void 0) {
          colorString = '';
        }

        if (allowHex8 === void 0) {
          allowHex8 = false;
        }
        /** @type {?} */


        var hsva = null;
        colorString = (colorString || '').toLowerCase();
        /** @type {?} */

        var stringParsers = [{
          re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
          parse:
          /**
          * @param {?} execResult
          * @return {?}
          */
          function parse(execResult) {
            return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
          }
        }, {
          re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
          parse:
          /**
          * @param {?} execResult
          * @return {?}
          */
          function parse(execResult) {
            return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
          }
        }];

        if (allowHex8) {
          stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
            parse:
            /**
            * @param {?} execResult
            * @return {?}
            */
            function parse(execResult) {
              return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
            }
          });
        } else {
          stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
            parse:
            /**
            * @param {?} execResult
            * @return {?}
            */
            function parse(execResult) {
              return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
            }
          });
        }

        stringParsers.push({
          re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
          parse:
          /**
          * @param {?} execResult
          * @return {?}
          */
          function parse(execResult) {
            return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
          }
        });

        for (var key in stringParsers) {
          if (stringParsers.hasOwnProperty(key)) {
            /** @type {?} */
            var parser = stringParsers[key];
            /** @type {?} */

            var match = parser.re.exec(colorString);
            /** @type {?} */

            var color = match && parser.parse(match);

            if (color) {
              if (color instanceof Rgba) {
                hsva = this.rgbaToHsva(color);
              } else if (color instanceof Hsla) {
                hsva = this.hsla2hsva(color);
              }

              return hsva;
            }
          }
        }

        return hsva;
      };
      /**
       * @param {?} hsva
       * @param {?} outputFormat
       * @param {?} alphaChannel
       * @return {?}
       */


      ColorPickerService.prototype.outputFormat =
      /**
      * @param {?} hsva
      * @param {?} outputFormat
      * @param {?} alphaChannel
      * @return {?}
      */
      function (hsva, outputFormat, alphaChannel) {
        if (outputFormat === 'auto') {
          outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
        }

        switch (outputFormat) {
          case 'hsla':
            /** @type {?} */
            var hsla = this.hsva2hsla(hsva);
            /** @type {?} */

            var hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);

            if (hsva.a < 1 || alphaChannel === 'always') {
              return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' + hslaText.a + ')';
            } else {
              return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
            }

          case 'rgba':
            /** @type {?} */
            var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));

            if (hsva.a < 1 || alphaChannel === 'always') {
              return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + Math.round(rgba.a * 100) / 100 + ')';
            } else {
              return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
            }

          default:
            /** @type {?} */
            var allowHex8 = alphaChannel === 'always' || alphaChannel === 'forced';
            return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
        }
      };
      /** @nocollapse */


      ColorPickerService.ctorParameters = function () {
        return [];
      };

      ColorPickerService.ɵfac = function ColorPickerService_Factory(t) {
        return new (t || ColorPickerService)();
      };

      ColorPickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ColorPickerService,
        factory: function factory(t) {
          return ColorPickerService.ɵfac(t);
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      return ColorPickerService;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ColorPickerComponent =
    /** @class */
    function () {
      function ColorPickerComponent(elRef, cdRef, service) {
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.service = service;
        this.isIE10 = false;
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
        this.useRootViewContainer = false;
      }
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerComponent.prototype.handleEsc =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
          this.onCancelColor(event);
        }
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerComponent.prototype.handleEnter =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
          this.onAcceptColor(event);
        }
      };
      /**
       * @return {?}
       */


      ColorPickerComponent.prototype.ngOnInit =
      /**
      * @return {?}
      */
      function () {
        var _this = this;

        this.slider = new SliderPosition(0, 0, 0, 0);
        /** @type {?} */

        var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
        /** @type {?} */

        var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
        this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);

        if (this.cpCmykEnabled) {
          this.format = ColorFormats.CMYK;
        } else if (this.cpOutputFormat === 'rgba') {
          this.format = ColorFormats.RGBA;
        } else if (this.cpOutputFormat === 'hsla') {
          this.format = ColorFormats.HSLA;
        } else {
          this.format = ColorFormats.HEX;
        }

        this.listenerMouseDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this.onMouseDown(event);
        };

        this.listenerResize =
        /**
        * @return {?}
        */
        function () {
          _this.onResize();
        };

        this.openDialog(this.initialColor, false);
      };
      /**
       * @return {?}
       */


      ColorPickerComponent.prototype.ngOnDestroy =
      /**
      * @return {?}
      */
      function () {
        this.closeDialog();
      };
      /**
       * @return {?}
       */


      ColorPickerComponent.prototype.ngAfterViewInit =
      /**
      * @return {?}
      */
      function () {
        if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
          /** @type {?} */
          var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
          /** @type {?} */

          var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
          this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
          this.updateColorPicker(false);
          this.cdRef.detectChanges();
        }
      };
      /**
       * @param {?} color
       * @param {?=} emit
       * @return {?}
       */


      ColorPickerComponent.prototype.openDialog =
      /**
      * @param {?} color
      * @param {?=} emit
      * @return {?}
      */
      function (color, emit) {
        if (emit === void 0) {
          emit = true;
        }

        this.service.setActive(this);

        if (!this.width) {
          this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
        }

        if (!this.height) {
          this.height = 320;
        }

        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
      };
      /**
       * @return {?}
       */


      ColorPickerComponent.prototype.closeDialog =
      /**
      * @return {?}
      */
      function () {
        this.closeColorPicker();
      };
      /**
       * @param {?} instance
       * @param {?} elementRef
       * @param {?} color
       * @param {?} cpWidth
       * @param {?} cpHeight
       * @param {?} cpDialogDisplay
       * @param {?} cpFallbackColor
       * @param {?} cpColorMode
       * @param {?} cpCmykEnabled
       * @param {?} cpAlphaChannel
       * @param {?} cpOutputFormat
       * @param {?} cpDisableInput
       * @param {?} cpIgnoredElements
       * @param {?} cpSaveClickOutside
       * @param {?} cpCloseClickOutside
       * @param {?} cpUseRootViewContainer
       * @param {?} cpPosition
       * @param {?} cpPositionOffset
       * @param {?} cpPositionRelativeToArrow
       * @param {?} cpPresetLabel
       * @param {?} cpPresetColors
       * @param {?} cpPresetColorsClass
       * @param {?} cpMaxPresetColorsLength
       * @param {?} cpPresetEmptyMessage
       * @param {?} cpPresetEmptyMessageClass
       * @param {?} cpOKButton
       * @param {?} cpOKButtonClass
       * @param {?} cpOKButtonText
       * @param {?} cpCancelButton
       * @param {?} cpCancelButtonClass
       * @param {?} cpCancelButtonText
       * @param {?} cpAddColorButton
       * @param {?} cpAddColorButtonClass
       * @param {?} cpAddColorButtonText
       * @param {?} cpRemoveColorButtonClass
       * @return {?}
       */


      ColorPickerComponent.prototype.setupDialog =
      /**
      * @param {?} instance
      * @param {?} elementRef
      * @param {?} color
      * @param {?} cpWidth
      * @param {?} cpHeight
      * @param {?} cpDialogDisplay
      * @param {?} cpFallbackColor
      * @param {?} cpColorMode
      * @param {?} cpCmykEnabled
      * @param {?} cpAlphaChannel
      * @param {?} cpOutputFormat
      * @param {?} cpDisableInput
      * @param {?} cpIgnoredElements
      * @param {?} cpSaveClickOutside
      * @param {?} cpCloseClickOutside
      * @param {?} cpUseRootViewContainer
      * @param {?} cpPosition
      * @param {?} cpPositionOffset
      * @param {?} cpPositionRelativeToArrow
      * @param {?} cpPresetLabel
      * @param {?} cpPresetColors
      * @param {?} cpPresetColorsClass
      * @param {?} cpMaxPresetColorsLength
      * @param {?} cpPresetEmptyMessage
      * @param {?} cpPresetEmptyMessageClass
      * @param {?} cpOKButton
      * @param {?} cpOKButtonClass
      * @param {?} cpOKButtonText
      * @param {?} cpCancelButton
      * @param {?} cpCancelButtonClass
      * @param {?} cpCancelButtonText
      * @param {?} cpAddColorButton
      * @param {?} cpAddColorButtonClass
      * @param {?} cpAddColorButtonText
      * @param {?} cpRemoveColorButtonClass
      * @return {?}
      */
      function (instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass) {
        this.setInitialColor(color);
        this.setColorMode(cpColorMode);
        this.isIE10 = detectIE() === 10;
        this.directiveInstance = instance;
        this.directiveElementRef = elementRef;
        this.cpDisableInput = cpDisableInput;
        this.cpCmykEnabled = cpCmykEnabled;
        this.cpAlphaChannel = cpAlphaChannel;
        this.cpOutputFormat = cpOutputFormat;
        this.cpDialogDisplay = cpDialogDisplay;
        this.cpIgnoredElements = cpIgnoredElements;
        this.cpSaveClickOutside = cpSaveClickOutside;
        this.cpCloseClickOutside = cpCloseClickOutside;
        this.useRootViewContainer = cpUseRootViewContainer;
        this.width = this.cpWidth = parseInt(cpWidth, 10);
        this.height = this.cpHeight = parseInt(cpHeight, 10);
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset, 10);
        this.cpOKButton = cpOKButton;
        this.cpOKButtonText = cpOKButtonText;
        this.cpOKButtonClass = cpOKButtonClass;
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.fallbackColor = cpFallbackColor || '#fff';
        this.setPresetConfig(cpPresetLabel, cpPresetColors);
        this.cpPresetColorsClass = cpPresetColorsClass;
        this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
        this.cpPresetEmptyMessage = cpPresetEmptyMessage;
        this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
        this.cpAddColorButton = cpAddColorButton;
        this.cpAddColorButtonText = cpAddColorButtonText;
        this.cpAddColorButtonClass = cpAddColorButtonClass;
        this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;

        if (!cpPositionRelativeToArrow) {
          this.dialogArrowOffset = 0;
        }

        if (cpDialogDisplay === 'inline') {
          this.dialogArrowSize = 0;
          this.dialogArrowOffset = 0;
        }

        if (cpOutputFormat === 'hex' && cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
          this.cpAlphaChannel = 'disabled';
        }
      };
      /**
       * @param {?} mode
       * @return {?}
       */


      ColorPickerComponent.prototype.setColorMode =
      /**
      * @param {?} mode
      * @return {?}
      */
      function (mode) {
        switch (mode.toString().toUpperCase()) {
          case '1':
          case 'C':
          case 'COLOR':
            this.cpColorMode = 1;
            break;

          case '2':
          case 'G':
          case 'GRAYSCALE':
            this.cpColorMode = 2;
            break;

          case '3':
          case 'P':
          case 'PRESETS':
            this.cpColorMode = 3;
            break;

          default:
            this.cpColorMode = 1;
        }
      };
      /**
       * @param {?} color
       * @return {?}
       */


      ColorPickerComponent.prototype.setInitialColor =
      /**
      * @param {?} color
      * @return {?}
      */
      function (color) {
        this.initialColor = color;
      };
      /**
       * @param {?} cpPresetLabel
       * @param {?} cpPresetColors
       * @return {?}
       */


      ColorPickerComponent.prototype.setPresetConfig =
      /**
      * @param {?} cpPresetLabel
      * @param {?} cpPresetColors
      * @return {?}
      */
      function (cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
      };
      /**
       * @param {?} value
       * @param {?=} emit
       * @param {?=} update
       * @return {?}
       */


      ColorPickerComponent.prototype.setColorFromString =
      /**
      * @param {?} value
      * @param {?=} emit
      * @param {?=} update
      * @return {?}
      */
      function (value, emit, update) {
        if (emit === void 0) {
          emit = true;
        }

        if (update === void 0) {
          update = true;
        }
        /** @type {?} */


        var hsva;

        if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
          hsva = this.service.stringToHsva(value, true);

          if (!hsva && !this.hsva) {
            hsva = this.service.stringToHsva(value, false);
          }
        } else {
          hsva = this.service.stringToHsva(value, false);
        }

        if (!hsva && !this.hsva) {
          hsva = this.service.stringToHsva(this.fallbackColor, false);
        }

        if (hsva) {
          this.hsva = hsva;
          this.sliderH = this.hsva.h;

          if (this.cpOutputFormat === 'hex' && this.cpAlphaChannel === 'disabled') {
            this.hsva.a = 1;
          }

          this.updateColorPicker(emit, update);
        }
      };
      /**
       * @return {?}
       */


      ColorPickerComponent.prototype.onResize =
      /**
      * @return {?}
      */
      function () {
        if (this.position === 'fixed') {
          this.setDialogPosition();
        } else if (this.cpDialogDisplay !== 'inline') {
          this.closeColorPicker();
        }
      };
      /**
       * @param {?} slider
       * @return {?}
       */


      ColorPickerComponent.prototype.onDragEnd =
      /**
      * @param {?} slider
      * @return {?}
      */
      function (slider) {
        this.directiveInstance.sliderDragEnd({
          slider: slider,
          color: this.outputColor
        });
      };
      /**
       * @param {?} slider
       * @return {?}
       */


      ColorPickerComponent.prototype.onDragStart =
      /**
      * @param {?} slider
      * @return {?}
      */
      function (slider) {
        this.directiveInstance.sliderDragStart({
          slider: slider,
          color: this.outputColor
        });
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerComponent.prototype.onMouseDown =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (this.show && !this.isIE10 && this.cpDialogDisplay === 'popup' && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return item === event.target;
        }).length === 0) {
          if (this.cpSaveClickOutside) {
            this.directiveInstance.colorSelected(this.outputColor);
          } else {
            this.setColorFromString(this.initialColor, false);

            if (this.cpCmykEnabled) {
              this.directiveInstance.cmykChanged(this.cmykColor);
            }

            this.directiveInstance.colorChanged(this.outputColor);
          }

          if (this.cpCloseClickOutside) {
            this.closeColorPicker();
          }
        }
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerComponent.prototype.onAcceptColor =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        event.stopPropagation();

        if (this.outputColor) {
          this.directiveInstance.colorSelected(this.outputColor);
        }

        if (this.cpDialogDisplay === 'popup') {
          this.closeColorPicker();
        }
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerComponent.prototype.onCancelColor =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        event.stopPropagation();
        this.setColorFromString(this.initialColor, true);

        if (this.cpDialogDisplay === 'popup') {
          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }

          this.directiveInstance.colorChanged(this.outputColor, true);
          this.closeColorPicker();
        }

        this.directiveInstance.colorCanceled();
      };
      /**
       * @param {?} change
       * @return {?}
       */


      ColorPickerComponent.prototype.onFormatToggle =
      /**
      * @param {?} change
      * @return {?}
      */
      function (change) {
        /** @type {?} */
        var availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
        /** @type {?} */

        var nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
        this.format = this.dialogInputFields[nextFormat];
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onColorChange =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.hsva.s = value.s / value.rgX;
        this.hsva.v = value.v / value.rgY;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
          slider: 'lightness',
          value: this.hsva.v,
          color: this.outputColor
        });
        this.directiveInstance.sliderChanged({
          slider: 'saturation',
          value: this.hsva.s,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onHueChange =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
          slider: 'hue',
          value: this.hsva.h,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onValueChange =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.hsva.v = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
          slider: 'value',
          value: this.hsva.v,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onAlphaChange =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
          slider: 'alpha',
          value: this.hsva.a,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onHexInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        if (value === null) {
          this.updateColorPicker();
        } else {
          if (value && value[0] !== '#') {
            value = '#' + value;
          }
          /** @type {?} */


          var validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;

          if (this.cpAlphaChannel === 'always') {
            validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
          }
          /** @type {?} */


          var valid = validHex.test(value);

          if (valid) {
            if (value.length < 5) {
              value = '#' + value.substring(1).split('').map(
              /**
              * @param {?} c
              * @return {?}
              */
              function (c) {
                return c + c;
              }).join('');
            }

            if (this.cpAlphaChannel === 'forced') {
              value += Math.round(this.hsva.a * 255).toString(16);
            }

            this.setColorFromString(value, true, false);
          }

          this.directiveInstance.inputChanged({
            input: 'hex',
            valid: valid,
            value: value,
            color: this.outputColor
          });
        }
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onRedInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */

        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          rgba.r = value.v / value.rg;
          this.hsva = this.service.rgbaToHsva(rgba);
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'red',
          valid: valid,
          value: rgba.r,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onBlueInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */

        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          rgba.b = value.v / value.rg;
          this.hsva = this.service.rgbaToHsva(rgba);
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'blue',
          valid: valid,
          value: rgba.b,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onGreenInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */

        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          rgba.g = value.v / value.rg;
          this.hsva = this.service.rgbaToHsva(rgba);
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'green',
          valid: valid,
          value: rgba.g,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onHueInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.hsva.h = value.v / value.rg;
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'hue',
          valid: valid,
          value: this.hsva.h,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onValueInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.hsva.v = value.v / value.rg;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'value',
          valid: valid,
          value: this.hsva.v,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onAlphaInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.hsva.a = value.v / value.rg;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'alpha',
          valid: valid,
          value: this.hsva.a,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onLightnessInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */

        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          hsla.l = value.v / value.rg;
          this.hsva = this.service.hsla2hsva(hsla);
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'lightness',
          valid: valid,
          value: hsla.l,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onSaturationInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */

        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          hsla.s = value.v / value.rg;
          this.hsva = this.service.hsla2hsva(hsla);
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'saturation',
          valid: valid,
          value: hsla.s,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onCyanInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.cmyk.c = value.v;
          this.updateColorPicker(false, true, true);
        }

        this.directiveInstance.inputChanged({
          input: 'cyan',
          valid: true,
          value: this.cmyk.c,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onMagentaInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.cmyk.m = value.v;
          this.updateColorPicker(false, true, true);
        }

        this.directiveInstance.inputChanged({
          input: 'magenta',
          valid: true,
          value: this.cmyk.m,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onYellowInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.cmyk.y = value.v;
          this.updateColorPicker(false, true, true);
        }

        this.directiveInstance.inputChanged({
          input: 'yellow',
          valid: true,
          value: this.cmyk.y,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onBlackInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.cmyk.k = value.v;
          this.updateColorPicker(false, true, true);
        }

        this.directiveInstance.inputChanged({
          input: 'black',
          valid: true,
          value: this.cmyk.k,
          color: this.outputColor
        });
      };
      /**
       * @param {?} event
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onAddPresetColor =
      /**
      * @param {?} event
      * @param {?} value
      * @return {?}
      */
      function (event, value) {
        event.stopPropagation();

        if (!this.cpPresetColors.filter(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return color === value;
        }).length) {
          this.cpPresetColors = this.cpPresetColors.concat(value);
          this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
      };
      /**
       * @param {?} event
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onRemovePresetColor =
      /**
      * @param {?} event
      * @param {?} value
      * @return {?}
      */
      function (event, value) {
        event.stopPropagation();
        this.cpPresetColors = this.cpPresetColors.filter(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return color !== value;
        });
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
      }; // Private helper functions for the color picker dialog status
      // Private helper functions for the color picker dialog status

      /**
       * @private
       * @return {?}
       */


      ColorPickerComponent.prototype.openColorPicker = // Private helper functions for the color picker dialog status

      /**
       * @private
       * @return {?}
       */
      function () {
        var _this = this;

        if (!this.show) {
          this.show = true;
          this.hidden = true;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this.hidden = false;

            _this.setDialogPosition();

            _this.cdRef.detectChanges();
          }, 0);
          this.directiveInstance.stateChanged(true);

          if (!this.isIE10) {
            document.addEventListener('mousedown', this.listenerMouseDown);
            document.addEventListener('touchstart', this.listenerMouseDown);
          }

          window.addEventListener('resize', this.listenerResize);
        }
      };
      /**
       * @private
       * @return {?}
       */


      ColorPickerComponent.prototype.closeColorPicker =
      /**
      * @private
      * @return {?}
      */
      function () {
        if (this.show) {
          this.show = false;
          this.directiveInstance.stateChanged(false);

          if (!this.isIE10) {
            document.removeEventListener('mousedown', this.listenerMouseDown);
            document.removeEventListener('touchstart', this.listenerMouseDown);
          }

          window.removeEventListener('resize', this.listenerResize);

          if (!this.cdRef['destroyed']) {
            this.cdRef.detectChanges();
          }
        }
      };
      /**
       * @private
       * @param {?=} emit
       * @param {?=} update
       * @param {?=} cmykInput
       * @return {?}
       */


      ColorPickerComponent.prototype.updateColorPicker =
      /**
      * @private
      * @param {?=} emit
      * @param {?=} update
      * @param {?=} cmykInput
      * @return {?}
      */
      function (emit, update, cmykInput) {
        if (emit === void 0) {
          emit = true;
        }

        if (update === void 0) {
          update = true;
        }

        if (cmykInput === void 0) {
          cmykInput = false;
        }

        if (this.sliderDimMax) {
          if (this.cpColorMode === 2) {
            this.hsva.s = 0;
          }
          /** @type {?} */


          var hue = void 0;
          /** @type {?} */

          var hsla = void 0;
          /** @type {?} */

          var rgba = void 0;
          /** @type {?} */

          var lastOutput = this.outputColor;
          hsla = this.service.hsva2hsla(this.hsva);

          if (!this.cpCmykEnabled) {
            rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
          } else {
            if (!cmykInput) {
              rgba = this.service.hsvaToRgba(this.hsva);
              this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
            } else {
              rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
              this.hsva = this.service.rgbaToHsva(rgba);
            }

            rgba = this.service.denormalizeRGBA(rgba);
            this.sliderH = this.hsva.h;
          }

          hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));

          if (update) {
            this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
            this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);

            if (this.cpCmykEnabled) {
              this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
            }
            /** @type {?} */


            var allowHex8 = this.cpAlphaChannel === 'always';
            this.hexText = this.service.rgbaToHex(rgba, allowHex8);
            this.hexAlpha = this.rgbaText.a;
          }

          if (this.cpOutputFormat === 'auto') {
            if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK) {
              if (this.hsva.a < 1) {
                this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
              }
            }
          }

          this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
          this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
          this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
          this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);

          if (this.format !== ColorFormats.CMYK) {
            this.cmykColor = '';
          } else {
            if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'enabled' || this.cpAlphaChannel === 'forced') {
              /** @type {?} */
              var alpha = Math.round(this.cmyk.a * 100) / 100;
              this.cmykColor = "cmyka(" + this.cmyk.c + "," + this.cmyk.m + "," + this.cmyk.y + "," + this.cmyk.k + "," + alpha + ")";
            } else {
              this.cmykColor = "cmyk(" + this.cmyk.c + "," + this.cmyk.m + "," + this.cmyk.y + "," + this.cmyk.k + ")";
            }
          }

          this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);

          if (emit && lastOutput !== this.outputColor) {
            if (this.cpCmykEnabled) {
              this.directiveInstance.cmykChanged(this.cmykColor);
            }

            this.directiveInstance.colorChanged(this.outputColor);
          }
        }
      }; // Private helper functions for the color picker dialog positioning
      // Private helper functions for the color picker dialog positioning

      /**
       * @private
       * @return {?}
       */


      ColorPickerComponent.prototype.setDialogPosition = // Private helper functions for the color picker dialog positioning

      /**
       * @private
       * @return {?}
       */
      function () {
        if (this.cpDialogDisplay === 'inline') {
          this.position = 'relative';
        } else {
          /** @type {?} */
          var position = 'static';
          /** @type {?} */

          var transform = '';
          /** @type {?} */

          var style = void 0;
          /** @type {?} */

          var parentNode = null;
          /** @type {?} */

          var transformNode = null;
          /** @type {?} */

          var node = this.directiveElementRef.nativeElement.parentNode;
          /** @type {?} */

          var dialogHeight = this.dialogElement.nativeElement.offsetHeight;

          while (node !== null && node.tagName !== 'HTML') {
            style = window.getComputedStyle(node);
            position = style.getPropertyValue('position');
            transform = style.getPropertyValue('transform');

            if (position !== 'static' && parentNode === null) {
              parentNode = node;
            }

            if (transform && transform !== 'none' && transformNode === null) {
              transformNode = node;
            }

            if (position === 'fixed') {
              parentNode = transformNode;
              break;
            }

            node = node.parentNode;
          }
          /** @type {?} */


          var boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== 'fixed');

          if (this.useRootViewContainer || position === 'fixed' && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
            this.top = boxDirective.top;
            this.left = boxDirective.left;
          } else {
            if (parentNode === null) {
              parentNode = node;
            }
            /** @type {?} */


            var boxParent = this.createDialogBox(parentNode, position !== 'fixed');
            this.top = boxDirective.top - boxParent.top;
            this.left = boxDirective.left - boxParent.left;
          }

          if (position === 'fixed') {
            this.position = 'fixed';
          }
          /** @type {?} */


          var usePosition = this.cpPosition;

          if (this.cpPosition === 'auto') {
            /** @type {?} */
            var usePositionX = 'right';
            /** @type {?} */

            var usePositionY = 'bottom';
            /** @type {?} */

            var winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            /** @type {?} */

            var winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            if (this.left + this.cpWidth > winWidth) {
              usePositionX = 'left';
            }

            if (this.top + dialogHeight > winHeight) {
              usePositionY = 'top';
            }

            usePosition = usePositionX + '-' + usePositionY;
          }

          this.cpUsePosition = usePosition;

          if (usePosition === 'top') {
            this.arrowTop = dialogHeight - 1;
            this.top -= dialogHeight + this.dialogArrowSize;
            this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          } else if (usePosition === 'bottom') {
            this.top += boxDirective.height + this.dialogArrowSize;
            this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          } else if (usePosition === 'top-left' || usePosition === 'left-top') {
            this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
            this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          } else if (usePosition === 'top-right' || usePosition === 'right-top') {
            this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
            this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          } else if (usePosition === 'left' || usePosition === 'bottom-left' || usePosition === 'left-bottom') {
            this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
            this.left -= this.cpWidth + this.dialogArrowSize - 2;
          } else {
            // usePosition === 'right' || usePosition === 'bottom-right' || usePosition === 'right-bottom'
            this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
            this.left += boxDirective.width + this.dialogArrowSize - 2;
          }
        }
      }; // Private helper functions for the color picker dialog positioning and opening
      // Private helper functions for the color picker dialog positioning and opening

      /**
       * @private
       * @param {?} parent
       * @param {?} child
       * @return {?}
       */


      ColorPickerComponent.prototype.isDescendant = // Private helper functions for the color picker dialog positioning and opening

      /**
       * @private
       * @param {?} parent
       * @param {?} child
       * @return {?}
       */
      function (parent, child) {
        /** @type {?} */
        var node = child.parentNode;

        while (node !== null) {
          if (node === parent) {
            return true;
          }

          node = node.parentNode;
        }

        return false;
      };
      /**
       * @private
       * @param {?} element
       * @param {?} offset
       * @return {?}
       */


      ColorPickerComponent.prototype.createDialogBox =
      /**
      * @private
      * @param {?} element
      * @param {?} offset
      * @return {?}
      */
      function (element, offset) {
        return {
          top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
          left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
          width: element.offsetWidth,
          height: element.offsetHeight
        };
      };
      /** @nocollapse */


      ColorPickerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: ColorPickerService
        }];
      };

      ColorPickerComponent.propDecorators = {
        dialogElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['dialogPopup', {
            static: true
          }]
        }],
        hueSlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['hueSlider', {
            static: true
          }]
        }],
        alphaSlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['alphaSlider', {
            static: true
          }]
        }],
        handleEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keyup.esc', ['$event']]
        }],
        handleEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keyup.enter', ['$event']]
        }]
      };

      ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) {
        return new (t || ColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorPickerService));
      };

      ColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColorPickerComponent,
        selectors: [["color-picker"]],
        viewQuery: function ColorPickerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialogElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hueSlider = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alphaSlider = _t.first);
          }
        },
        hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) {
              return ctx.handleEsc($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) {
              return ctx.handleEnter($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 28,
        vars: 47,
        consts: [[1, "color-picker", 3, "click"], ["dialogPopup", ""], [3, "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["hueSlider", ""], [1, "cursor"], [1, "value", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["valueSlider", ""], [1, "alpha", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["alphaSlider", ""], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], [1, "saturation-lightness", 3, "slider", "rgX", "rgY", "newValue", "dragStart", "dragEnd"], ["type", "button", 3, "disabled", "click"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "text", "rg", "value", "keyup.enter", "newValue"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hex-text"], [3, "text", "value", "blur", "keyup.enter", "newValue"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"]],
        template: function ColorPickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_div_click_0_listener($event) {
              return $event.stopPropagation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPickerComponent_div_2_Template, 1, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_3_Template, 2, 8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorPickerComponent_button_8_Template, 2, 5, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorPickerComponent_div_10_Template, 1, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_11_listener($event) {
              return ctx.onHueChange($event);
            })("dragStart", function ColorPickerComponent_Template_div_dragStart_11_listener($event) {
              return ctx.onDragStart("hue");
            })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_11_listener($event) {
              return ctx.onDragEnd("hue");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_14_listener($event) {
              return ctx.onValueChange($event);
            })("dragStart", function ColorPickerComponent_Template_div_dragStart_14_listener($event) {
              return ctx.onDragStart("value");
            })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_14_listener($event) {
              return ctx.onDragEnd("value");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_17_listener($event) {
              return ctx.onAlphaChange($event);
            })("dragStart", function ColorPickerComponent_Template_div_dragStart_17_listener($event) {
              return ctx.onDragStart("alpha");
            })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_17_listener($event) {
              return ctx.onDragEnd("alpha");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ColorPickerComponent_div_20_Template, 17, 12, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ColorPickerComponent_div_21_Template, 14, 10, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ColorPickerComponent_div_23_Template, 8, 7, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ColorPickerComponent_div_24_Template, 9, 3, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ColorPickerComponent_div_25_Template, 3, 0, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ColorPickerComponent_div_26_Template, 6, 3, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ColorPickerComponent_div_27_Template, 3, 2, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpDialogDisplay == "popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpAddColorButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpAlphaChannel === "disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.h, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("right", ctx.slider == null ? null : ctx.slider.v, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.a, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], SliderDirective, TextDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".color-picker {\n  position: absolute;\n  z-index: 100000;\n\n  width: 230px;\n  height: auto;\n  border: #777 solid 1px;\n\n  cursor: default;\n\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  user-select: none;\n  background-color: #fff;\n}\n\n.color-picker * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n\n  box-sizing: border-box;\n  margin: 0;\n\n  font-size: 11px;\n}\n\n.color-picker input {\n  width: 0;\n  height: 26px;\n  min-width: 0;\n\n  font-size: 13px;\n  text-align: center;\n  color: #000;\n}\n\n.color-picker input:invalid,\n.color-picker input:-moz-ui-invalid,\n.color-picker input:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n.color-picker input::-webkit-inner-spin-button,\n.color-picker input::-webkit-outer-spin-button {\n  margin: 0;\n\n  -webkit-appearance: none;\n}\n\n.color-picker .arrow {\n  position: absolute;\n  z-index: 999999;\n\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.color-picker .arrow.arrow-top {\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-bottom {\n  top: -20px;\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-top-left,\n.color-picker .arrow.arrow-left-top {\n  right: -21px;\n  bottom: 8px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-top-right,\n.color-picker .arrow.arrow-right-top {\n  bottom: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-left,\n.color-picker .arrow.arrow-left-bottom,\n.color-picker .arrow.arrow-bottom-left {\n  top: 8px;\n  right: -21px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-right,\n.color-picker .arrow.arrow-right-bottom,\n.color-picker .arrow.arrow-bottom-right {\n  top: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .cursor {\n  position: relative;\n\n  width: 16px;\n  height: 16px;\n  border: #222 solid 2px;\n  border-radius: 50%;\n\n  cursor: default;\n}\n\n.color-picker .box {\n  display: flex;\n  padding: 4px 8px;\n}\n\n.color-picker .left {\n  position: relative;\n\n  padding: 16px 8px;\n}\n\n.color-picker .right {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  padding: 12px 8px;\n}\n\n.color-picker .button-area {\n  padding: 0 16px 16px;\n\n  text-align: right;\n}\n\n.color-picker .preset-area {\n  padding: 4px 15px;\n}\n\n.color-picker .preset-area .preset-label {\n  overflow: hidden;\n  width: 100%;\n  padding: 4px;\n\n  font-size: 11px;\n  white-space: nowrap;\n  text-align: left;\n  text-overflow: ellipsis;\n  color: #555;\n}\n\n.color-picker .preset-area .preset-color {\n  position: relative;\n\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 4px 6px 8px;\n  border: #a9a9a9 solid 1px;\n  border-radius: 25%;\n\n  cursor: pointer;\n}\n\n.color-picker .preset-area .preset-empty-message {\n  min-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 8px;\n\n  font-style: italic;\n  text-align: center;\n}\n\n.color-picker .hex-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .hex-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .hex-text .box div {\n  float: left;\n\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  text-align: center;\n  color: #555;\n  clear: left;\n}\n\n.color-picker .hex-text .box input {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  padding: 1px;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .hex-alpha .box div:first-child,\n.color-picker .hex-alpha .box input:first-child {\n  flex-grow: 3;\n  margin-right: 8px;\n}\n\n.color-picker .cmyk-text,\n.color-picker .hsla-text,\n.color-picker .rgba-text,\n.color-picker .value-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .cmyk-text .box,\n.color-picker .hsla-text .box,\n.color-picker .rgba-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .value-text .box {\n  padding: 0 8px 8px;\n}\n\n.color-picker .cmyk-text .box div,\n.color-picker .hsla-text .box div,\n.color-picker .rgba-text .box div,\n.color-picker .value-text .box div {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  margin-right: 8px;\n\n  text-align: center;\n  color: #555;\n}\n\n.color-picker .cmyk-text .box div:last-child,\n.color-picker .hsla-text .box div:last-child,\n.color-picker .rgba-text .box div:last-child,\n.color-picker .value-text .box div:last-child {\n  margin-right: 0;\n}\n\n.color-picker .cmyk-text .box input,\n.color-picker .hsla-text .box input,\n.color-picker .rgba-text .box input,\n.color-picker .value-text .box input {\n  float: left;\n\n  -webkit-flex: 1;\n  -ms-flex: 1;\n\n  flex: 1;\n  padding: 1px;\n  margin: 0 8px 0 0;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .cmyk-text .box input:last-child,\n.color-picker .hsla-text .box input:last-child,\n.color-picker .rgba-text .box input:last-child,\n.color-picker .value-text .box input:last-child {\n  margin-right: 0;\n}\n\n.color-picker .hue-alpha {\n  align-items: center;\n  margin-bottom: 3px;\n}\n\n.color-picker .hue {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC');\n}\n\n.color-picker .value {\n  direction: rtl;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=');\n}\n\n.color-picker .alpha {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==');\n}\n\n.color-picker .type-policy {\n  position: absolute;\n  top: 218px;\n  right: 12px;\n\n  width: 16px;\n  height: 24px;\n\n  background-size: 8px 16px;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.color-picker .type-policy .type-policy-arrow {\n  display: block;\n\n  width: 100%;\n  height: 50%;\n}\n\n.color-picker .selected-color {\n  position: absolute;\n  top: 16px;\n  left: 8px;\n\n  width: 40px;\n  height: 40px;\n  border: 1px solid #a9a9a9;\n  border-radius: 50%;\n}\n\n.color-picker .selected-color-background {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC');\n}\n\n.color-picker .saturation-lightness {\n  direction: ltr;\n\n  width: 100%;\n  height: 130px;\n  border: none;\n\n  cursor: pointer;\n  touch-action: manipulation;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==');\n}\n\n.color-picker .cp-add-color-button-class {\n  position: absolute;\n\n  display: inline;\n  padding: 0;\n  margin: 3px -3px;\n  border: 0;\n\n  cursor: pointer;\n  background: transparent;\n}\n\n.color-picker .cp-add-color-button-class:hover {\n  text-decoration: underline;\n}\n\n.color-picker .cp-add-color-button-class:disabled {\n  cursor: not-allowed;\n  color: #999;\n}\n\n.color-picker .cp-add-color-button-class:disabled:hover {\n  text-decoration: none;\n}\n\n.color-picker .cp-remove-color-button-class {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n\n  cursor: pointer;\n  text-align: center;\n  background: #fff;\n\n  box-shadow: 1px 1px 5px #333;\n}\n\n.color-picker .cp-remove-color-button-class::before {\n  content: 'x';\n\n  position: relative;\n  bottom: 3.5px;\n\n  display: inline-block;\n\n  font-size: 10px;\n}\n"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'color-picker',
            template: "<div #dialogPopup class=\"color-picker\" [class.open]=\"show\" [style.display]=\"!show ? 'none' : 'block'\" [style.visibility]=\"hidden ? 'hidden' : 'visible'\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\" (click)=\"$event.stopPropagation()\">\n  <div *ngIf=\"cpDialogDisplay=='popup'\" class=\"arrow arrow-{{cpUsePosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div *ngIf=\"(cpColorMode ||\xA01) === 1\" class=\"saturation-lightness\" [slider] [rgX]=\"1\" [rgY]=\"1\" [style.background-color]=\"hueSliderColor\" (newValue)=\"onColorChange($event)\" (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\"></div>\n  </div>\n\n  <div class=\"hue-alpha box\">\n    <div class=\"left\">\n      <div class=\"selected-color-background\"></div>\n\n      <div class=\"selected-color\" [style.background-color]=\"selectedColor\"></div>\n\n      <button *ngIf=\"cpAddColorButton\" type=\"button\" class=\"{{cpAddColorButtonClass}}\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\" (click)=\"onAddPresetColor($event, selectedColor)\">\n        {{cpAddColorButtonText}}\n      </button>\n    </div>\n\n    <div class=\"right\">\n      <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 16px;\"></div>\n\n      <div #hueSlider class=\"hue\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\xA01) === 1 ? 'block' : 'none'\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.h\"></div>\n      </div>\n\n      <div #valueSlider class=\"value\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\xA01) === 2 ? 'block': 'none'\" (newValue)=\"onValueChange($event)\" (dragStart)=\"onDragStart('value')\" (dragEnd)=\"onDragEnd('value')\">\n        <div class=\"cursor\" [style.right.px]=\"slider?.v\"></div>\n      </div>\n\n      <div #alphaSlider class=\"alpha\" [slider] [rgX]=\"1\" [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [style.background-color]=\"alphaSliderColor\" (newValue)=\"onAlphaChange($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.a\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"cmyk-text\" [style.display]=\"format !== 3 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.c\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onCyanInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.m\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onMagentaInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.y\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onYellowInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.k\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlackInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"cmykText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n     <div class=\"box\">\n      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1 \" class=\"hsla-text\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [text] [rg]=\"360\" [value]=\"hslaText?.h\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHueInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.s\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onSaturationInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onLightnessInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>H</div><div>S</div><div>L</div><div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1 \" [style.display]=\"format !== 1 ? 'none' : 'block'\" class=\"rgba-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onRedInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onGreenInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"rgbaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>R</div><div>G</div><div>B</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"hex-text\" [class.hex-alpha]=\"cpAlphaChannel==='forced'\"\n    [style.display]=\"format !== 0 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input [text] [value]=\"hexText\" (blur)=\"onHexInput(null)\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHexInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel==='forced'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hexAlpha\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>Hex</div>\n      <div *ngIf=\"cpAlphaChannel==='forced'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 2\" class=\"value-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onValueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"  [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>V</div><div>A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"type-policy\">\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(-1)\"></span>\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(1)\"></span>\n  </div>\n\n  <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\" class=\"preset-area\">\n    <hr>\n\n    <div class=\"preset-label\">{{cpPresetLabel}}</div>\n\n    <div *ngIf=\"cpPresetColors?.length\" class=\"{{cpPresetColorsClass}}\">\n      <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n        <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"onRemovePresetColor($event, color)\"></span>\n      </div>\n    </div>\n\n    <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n  </div>\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".color-picker {\n  position: absolute;\n  z-index: 100000;\n\n  width: 230px;\n  height: auto;\n  border: #777 solid 1px;\n\n  cursor: default;\n\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  user-select: none;\n  background-color: #fff;\n}\n\n.color-picker * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n\n  box-sizing: border-box;\n  margin: 0;\n\n  font-size: 11px;\n}\n\n.color-picker input {\n  width: 0;\n  height: 26px;\n  min-width: 0;\n\n  font-size: 13px;\n  text-align: center;\n  color: #000;\n}\n\n.color-picker input:invalid,\n.color-picker input:-moz-ui-invalid,\n.color-picker input:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n.color-picker input::-webkit-inner-spin-button,\n.color-picker input::-webkit-outer-spin-button {\n  margin: 0;\n\n  -webkit-appearance: none;\n}\n\n.color-picker .arrow {\n  position: absolute;\n  z-index: 999999;\n\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.color-picker .arrow.arrow-top {\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-bottom {\n  top: -20px;\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-top-left,\n.color-picker .arrow.arrow-left-top {\n  right: -21px;\n  bottom: 8px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-top-right,\n.color-picker .arrow.arrow-right-top {\n  bottom: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-left,\n.color-picker .arrow.arrow-left-bottom,\n.color-picker .arrow.arrow-bottom-left {\n  top: 8px;\n  right: -21px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-right,\n.color-picker .arrow.arrow-right-bottom,\n.color-picker .arrow.arrow-bottom-right {\n  top: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .cursor {\n  position: relative;\n\n  width: 16px;\n  height: 16px;\n  border: #222 solid 2px;\n  border-radius: 50%;\n\n  cursor: default;\n}\n\n.color-picker .box {\n  display: flex;\n  padding: 4px 8px;\n}\n\n.color-picker .left {\n  position: relative;\n\n  padding: 16px 8px;\n}\n\n.color-picker .right {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  padding: 12px 8px;\n}\n\n.color-picker .button-area {\n  padding: 0 16px 16px;\n\n  text-align: right;\n}\n\n.color-picker .preset-area {\n  padding: 4px 15px;\n}\n\n.color-picker .preset-area .preset-label {\n  overflow: hidden;\n  width: 100%;\n  padding: 4px;\n\n  font-size: 11px;\n  white-space: nowrap;\n  text-align: left;\n  text-overflow: ellipsis;\n  color: #555;\n}\n\n.color-picker .preset-area .preset-color {\n  position: relative;\n\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 4px 6px 8px;\n  border: #a9a9a9 solid 1px;\n  border-radius: 25%;\n\n  cursor: pointer;\n}\n\n.color-picker .preset-area .preset-empty-message {\n  min-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 8px;\n\n  font-style: italic;\n  text-align: center;\n}\n\n.color-picker .hex-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .hex-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .hex-text .box div {\n  float: left;\n\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  text-align: center;\n  color: #555;\n  clear: left;\n}\n\n.color-picker .hex-text .box input {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  padding: 1px;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .hex-alpha .box div:first-child,\n.color-picker .hex-alpha .box input:first-child {\n  flex-grow: 3;\n  margin-right: 8px;\n}\n\n.color-picker .cmyk-text,\n.color-picker .hsla-text,\n.color-picker .rgba-text,\n.color-picker .value-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .cmyk-text .box,\n.color-picker .hsla-text .box,\n.color-picker .rgba-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .value-text .box {\n  padding: 0 8px 8px;\n}\n\n.color-picker .cmyk-text .box div,\n.color-picker .hsla-text .box div,\n.color-picker .rgba-text .box div,\n.color-picker .value-text .box div {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  margin-right: 8px;\n\n  text-align: center;\n  color: #555;\n}\n\n.color-picker .cmyk-text .box div:last-child,\n.color-picker .hsla-text .box div:last-child,\n.color-picker .rgba-text .box div:last-child,\n.color-picker .value-text .box div:last-child {\n  margin-right: 0;\n}\n\n.color-picker .cmyk-text .box input,\n.color-picker .hsla-text .box input,\n.color-picker .rgba-text .box input,\n.color-picker .value-text .box input {\n  float: left;\n\n  -webkit-flex: 1;\n  -ms-flex: 1;\n\n  flex: 1;\n  padding: 1px;\n  margin: 0 8px 0 0;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .cmyk-text .box input:last-child,\n.color-picker .hsla-text .box input:last-child,\n.color-picker .rgba-text .box input:last-child,\n.color-picker .value-text .box input:last-child {\n  margin-right: 0;\n}\n\n.color-picker .hue-alpha {\n  align-items: center;\n  margin-bottom: 3px;\n}\n\n.color-picker .hue {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC');\n}\n\n.color-picker .value {\n  direction: rtl;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=');\n}\n\n.color-picker .alpha {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==');\n}\n\n.color-picker .type-policy {\n  position: absolute;\n  top: 218px;\n  right: 12px;\n\n  width: 16px;\n  height: 24px;\n\n  background-size: 8px 16px;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.color-picker .type-policy .type-policy-arrow {\n  display: block;\n\n  width: 100%;\n  height: 50%;\n}\n\n.color-picker .selected-color {\n  position: absolute;\n  top: 16px;\n  left: 8px;\n\n  width: 40px;\n  height: 40px;\n  border: 1px solid #a9a9a9;\n  border-radius: 50%;\n}\n\n.color-picker .selected-color-background {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC');\n}\n\n.color-picker .saturation-lightness {\n  direction: ltr;\n\n  width: 100%;\n  height: 130px;\n  border: none;\n\n  cursor: pointer;\n  touch-action: manipulation;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==');\n}\n\n.color-picker .cp-add-color-button-class {\n  position: absolute;\n\n  display: inline;\n  padding: 0;\n  margin: 3px -3px;\n  border: 0;\n\n  cursor: pointer;\n  background: transparent;\n}\n\n.color-picker .cp-add-color-button-class:hover {\n  text-decoration: underline;\n}\n\n.color-picker .cp-add-color-button-class:disabled {\n  cursor: not-allowed;\n  color: #999;\n}\n\n.color-picker .cp-add-color-button-class:disabled:hover {\n  text-decoration: none;\n}\n\n.color-picker .cp-remove-color-button-class {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n\n  cursor: pointer;\n  text-align: center;\n  background: #fff;\n\n  box-shadow: 1px 1px 5px #333;\n}\n\n.color-picker .cp-remove-color-button-class::before {\n  content: 'x';\n\n  position: relative;\n  bottom: 3.5px;\n\n  display: inline-block;\n\n  font-size: 10px;\n}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: ColorPickerService
          }];
        }, {
          handleEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.esc', ['$event']]
          }],
          handleEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.enter', ['$event']]
          }],
          dialogElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialogPopup', {
              static: true
            }]
          }],
          hueSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['hueSlider', {
              static: true
            }]
          }],
          alphaSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['alphaSlider', {
              static: true
            }]
          }]
        });
      })();

      return ColorPickerComponent;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ColorPickerDirective =
    /** @class */
    function () {
      function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, _service) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this._service = _service;
        this.dialogCreated = false;
        this.ignoreChanges = false;
        this.cpWidth = '230px';
        this.cpHeight = 'auto';
        this.cpToggle = false;
        this.cpDisabled = false;
        this.cpIgnoredElements = [];
        this.cpFallbackColor = '';
        this.cpColorMode = 'color';
        this.cpCmykEnabled = false;
        this.cpOutputFormat = 'auto';
        this.cpAlphaChannel = 'enabled';
        this.cpDisableInput = false;
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpCloseClickOutside = true;
        this.cpUseRootViewContainer = false;
        this.cpPosition = 'auto';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOKButton = false;
        this.cpOKButtonText = 'OK';
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpPresetLabel = 'Preset colors';
        this.cpPresetColorsClass = 'cp-preset-colors-class';
        this.cpMaxPresetColorsLength = 6;
        this.cpPresetEmptyMessage = 'No colors added';
        this.cpPresetEmptyMessageClass = 'preset-empty-message';
        this.cpAddColorButton = false;
        this.cpAddColorButtonText = 'Add color';
        this.cpAddColorButtonClass = 'cp-add-color-button-class';
        this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
        this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.cpCmykColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
      }
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.handleClick =
      /**
      * @return {?}
      */
      function () {
        this.inputFocus();
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.handleFocus =
      /**
      * @return {?}
      */
      function () {
        this.inputFocus();
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.handleInput =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.inputChange(event);
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.ngOnDestroy =
      /**
      * @return {?}
      */
      function () {
        if (this.cmpRef !== undefined) {
          this.cmpRef.destroy();
        }
      };
      /**
       * @param {?} changes
       * @return {?}
       */


      ColorPickerDirective.prototype.ngOnChanges =
      /**
      * @param {?} changes
      * @return {?}
      */
      function (changes) {
        if (changes.cpToggle && !this.cpDisabled) {
          if (changes.cpToggle.currentValue) {
            this.openDialog();
          } else if (!changes.cpToggle.currentValue) {
            this.closeDialog();
          }
        }

        if (changes.colorPicker) {
          if (this.dialog && !this.ignoreChanges) {
            if (this.cpDialogDisplay === 'inline') {
              this.dialog.setInitialColor(changes.colorPicker.currentValue);
            }

            this.dialog.setColorFromString(changes.colorPicker.currentValue, false);

            if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
              this.cmpRef.changeDetectorRef.detectChanges();
            }
          }

          this.ignoreChanges = false;
        }

        if (changes.cpPresetLabel || changes.cpPresetColors) {
          if (this.dialog) {
            this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
          }
        }
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.openDialog =
      /**
      * @return {?}
      */
      function () {
        if (!this.dialogCreated) {
          /** @type {?} */
          var vcRef = this.vcRef;
          this.dialogCreated = true;

          if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
            /** @type {?} */
            var classOfRootComponent = this.appRef.componentTypes[0];
            /** @type {?} */

            var appInstance = this.injector.get(classOfRootComponent);
            vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;

            if (vcRef === this.vcRef) {
              console.warn('You are using cpUseRootViewContainer, ' + 'but the root component is not exposing viewContainerRef!' + 'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
            }
          }
          /** @type {?} */


          var compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
          /** @type {?} */

          var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], vcRef.parentInjector);

          this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
          this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass);
          this.dialog = this.cmpRef.instance;

          if (this.vcRef !== vcRef) {
            this.cmpRef.changeDetectorRef.detectChanges();
          }
        } else if (this.dialog) {
          this.dialog.openDialog(this.colorPicker);
        }
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.closeDialog =
      /**
      * @return {?}
      */
      function () {
        if (this.dialog && this.cpDialogDisplay === 'popup') {
          this.dialog.closeDialog();
        }
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerDirective.prototype.cmykChanged =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.cpCmykColorChange.emit(value);
      };
      /**
       * @param {?} state
       * @return {?}
       */


      ColorPickerDirective.prototype.stateChanged =
      /**
      * @param {?} state
      * @return {?}
      */
      function (state) {
        this.cpToggleChange.emit(state);

        if (state) {
          this.colorPickerOpen.emit(this.colorPicker);
        } else {
          this.colorPickerClose.emit(this.colorPicker);
        }
      };
      /**
       * @param {?} value
       * @param {?=} ignore
       * @return {?}
       */


      ColorPickerDirective.prototype.colorChanged =
      /**
      * @param {?} value
      * @param {?=} ignore
      * @return {?}
      */
      function (value, ignore) {
        if (ignore === void 0) {
          ignore = true;
        }

        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerDirective.prototype.colorSelected =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.colorPickerSelect.emit(value);
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.colorCanceled =
      /**
      * @return {?}
      */
      function () {
        this.colorPickerCancel.emit();
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.inputFocus =
      /**
      * @return {?}
      */
      function () {
        /** @type {?} */
        var element = this.elRef.nativeElement;
        /** @type {?} */

        var ignored = this.cpIgnoredElements.filter(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return item === element;
        });

        if (!this.cpDisabled && !ignored.length) {
          if (typeof document !== 'undefined' && element === document.activeElement) {
            this.openDialog();
          } else if (!this.dialog || !this.dialog.show) {
            this.openDialog();
          } else {
            this.closeDialog();
          }
        }
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.inputChange =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (this.dialog) {
          this.dialog.setColorFromString(event.target.value, true);
        } else {
          this.colorPicker = event.target.value;
          this.colorPickerChange.emit(this.colorPicker);
        }
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.inputChanged =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.cpInputChange.emit(event);
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.sliderChanged =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.cpSliderChange.emit(event);
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.sliderDragEnd =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.cpSliderDragEnd.emit(event);
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.sliderDragStart =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.cpSliderDragStart.emit(event);
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerDirective.prototype.presetColorsChanged =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.cpPresetColorsChange.emit(value);
      };
      /** @nocollapse */


      ColorPickerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ColorPickerService
        }];
      };

      ColorPickerDirective.propDecorators = {
        colorPicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpIgnoredElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpFallbackColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpColorMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCmykEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOutputFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAlphaChannel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpDisableInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpDialogDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpSaveClickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCloseClickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpUseRootViewContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPositionOffset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPositionRelativeToArrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOKButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOKButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOKButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCancelButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCancelButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCancelButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetColors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetColorsClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpMaxPresetColorsLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetEmptyMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetEmptyMessageClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAddColorButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAddColorButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAddColorButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpRemoveColorButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpToggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpSliderChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpSliderDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpSliderDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpCmykColorChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpPresetColorsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        handleFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['focus']
        }],
        handleInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }]
      };

      ColorPickerDirective.ɵfac = function ColorPickerDirective_Factory(t) {
        return new (t || ColorPickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorPickerService));
      };

      ColorPickerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ColorPickerDirective,
        selectors: [["", "colorPicker", ""]],
        hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDirective_click_HostBindingHandler($event) {
              return ctx.handleClick();
            })("focus", function ColorPickerDirective_focus_HostBindingHandler($event) {
              return ctx.handleFocus();
            })("input", function ColorPickerDirective_input_HostBindingHandler($event) {
              return ctx.handleInput($event);
            });
          }
        },
        inputs: {
          cpWidth: "cpWidth",
          cpHeight: "cpHeight",
          cpToggle: "cpToggle",
          cpDisabled: "cpDisabled",
          cpIgnoredElements: "cpIgnoredElements",
          cpFallbackColor: "cpFallbackColor",
          cpColorMode: "cpColorMode",
          cpCmykEnabled: "cpCmykEnabled",
          cpOutputFormat: "cpOutputFormat",
          cpAlphaChannel: "cpAlphaChannel",
          cpDisableInput: "cpDisableInput",
          cpDialogDisplay: "cpDialogDisplay",
          cpSaveClickOutside: "cpSaveClickOutside",
          cpCloseClickOutside: "cpCloseClickOutside",
          cpUseRootViewContainer: "cpUseRootViewContainer",
          cpPosition: "cpPosition",
          cpPositionOffset: "cpPositionOffset",
          cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
          cpOKButton: "cpOKButton",
          cpOKButtonText: "cpOKButtonText",
          cpOKButtonClass: "cpOKButtonClass",
          cpCancelButton: "cpCancelButton",
          cpCancelButtonText: "cpCancelButtonText",
          cpCancelButtonClass: "cpCancelButtonClass",
          cpPresetLabel: "cpPresetLabel",
          cpPresetColorsClass: "cpPresetColorsClass",
          cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
          cpPresetEmptyMessage: "cpPresetEmptyMessage",
          cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
          cpAddColorButton: "cpAddColorButton",
          cpAddColorButtonText: "cpAddColorButtonText",
          cpAddColorButtonClass: "cpAddColorButtonClass",
          cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
          colorPicker: "colorPicker",
          cpPresetColors: "cpPresetColors"
        },
        outputs: {
          cpInputChange: "cpInputChange",
          cpToggleChange: "cpToggleChange",
          cpSliderChange: "cpSliderChange",
          cpSliderDragEnd: "cpSliderDragEnd",
          cpSliderDragStart: "cpSliderDragStart",
          colorPickerOpen: "colorPickerOpen",
          colorPickerClose: "colorPickerClose",
          colorPickerCancel: "colorPickerCancel",
          colorPickerSelect: "colorPickerSelect",
          colorPickerChange: "colorPickerChange",
          cpCmykColorChange: "cpCmykColorChange",
          cpPresetColorsChange: "cpPresetColorsChange"
        },
        exportAs: ["ngxColorPicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[colorPicker]',
            exportAs: 'ngxColorPicker'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ColorPickerService
          }];
        }, {
          cpWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpIgnoredElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpFallbackColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpColorMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpCmykEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpOutputFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpAlphaChannel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpDisableInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpDialogDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpSaveClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpCloseClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpUseRootViewContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPositionOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPositionRelativeToArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpOKButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpOKButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpOKButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpCancelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpCancelButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpCancelButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPresetLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPresetColorsClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpMaxPresetColorsLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPresetEmptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPresetEmptyMessageClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpAddColorButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpAddColorButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpAddColorButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpRemoveColorButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpToggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpSliderChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpSliderDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpSliderDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpCmykColorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpPresetColorsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          handleFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
          }],
          handleInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
          }],
          colorPicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPresetColors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return ColorPickerDirective;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ColorPickerModule =
    /** @class */
    function () {
      function ColorPickerModule() {}

      ColorPickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ColorPickerModule
      });
      ColorPickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ColorPickerModule_Factory(t) {
          return new (t || ColorPickerModule)();
        },
        providers: [ColorPickerService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ColorPickerModule, {
          declarations: function declarations() {
            return [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [ColorPickerDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [ColorPickerDirective],
            providers: [ColorPickerService],
            declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
            entryComponents: [ColorPickerComponent]
          }]
        }], function () {
          return [];
        }, null);
      })();

      return ColorPickerModule;
    }(); //# sourceMappingURL=ngx-color-picker.es5.js.map

    /***/

  },

  /***/
  "./node_modules/positioning/dist/entry.js":
  /*!************************************************!*\
    !*** ./node_modules/positioning/dist/entry.js ***!
    \************************************************/

  /*! exports provided: positionElements */

  /***/
  function node_modulesPositioningDistEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./positioning */
    "./node_modules/positioning/dist/positioning.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionElements"];
    }); //# sourceMappingURL=entry.js.map

    /***/

  },

  /***/
  "./node_modules/positioning/dist/positioning.js":
  /*!******************************************************!*\
    !*** ./node_modules/positioning/dist/positioning.js ***!
    \******************************************************/

  /*! exports provided: Positioning, positionElements */

  /***/
  function node_modulesPositioningDistPositioningJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Positioning", function () {
      return Positioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return positionElements;
    }); // previous version:
    // https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js


    var Positioning =
    /** @class */
    function () {
      function Positioning() {}

      Positioning.prototype.getAllStyles = function (element) {
        return window.getComputedStyle(element);
      };

      Positioning.prototype.getStyle = function (element, prop) {
        return this.getAllStyles(element)[prop];
      };

      Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
      };

      Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;

        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
          offsetParentEl = offsetParentEl.offsetParent;
        }

        return offsetParentEl || document.documentElement;
      };

      Positioning.prototype.position = function (element, round) {
        if (round === void 0) {
          round = true;
        }

        var elPosition;
        var parentOffset = {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        };

        if (this.getStyle(element, 'position') === 'fixed') {
          elPosition = element.getBoundingClientRect();
          elPosition = {
            top: elPosition.top,
            bottom: elPosition.bottom,
            left: elPosition.left,
            right: elPosition.right,
            height: elPosition.height,
            width: elPosition.width
          };
        } else {
          var offsetParentEl = this.offsetParent(element);
          elPosition = this.offset(element, false);

          if (offsetParentEl !== document.documentElement) {
            parentOffset = this.offset(offsetParentEl, false);
          }

          parentOffset.top += offsetParentEl.clientTop;
          parentOffset.left += offsetParentEl.clientLeft;
        }

        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;

        if (round) {
          elPosition.top = Math.round(elPosition.top);
          elPosition.bottom = Math.round(elPosition.bottom);
          elPosition.left = Math.round(elPosition.left);
          elPosition.right = Math.round(elPosition.right);
        }

        return elPosition;
      };

      Positioning.prototype.offset = function (element, round) {
        if (round === void 0) {
          round = true;
        }

        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
          top: window.pageYOffset - document.documentElement.clientTop,
          left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
          height: elBcr.height || element.offsetHeight,
          width: elBcr.width || element.offsetWidth,
          top: elBcr.top + viewportOffset.top,
          bottom: elBcr.bottom + viewportOffset.top,
          left: elBcr.left + viewportOffset.left,
          right: elBcr.right + viewportOffset.left
        };

        if (round) {
          elOffset.height = Math.round(elOffset.height);
          elOffset.width = Math.round(elOffset.width);
          elOffset.top = Math.round(elOffset.top);
          elOffset.bottom = Math.round(elOffset.bottom);
          elOffset.left = Math.round(elOffset.left);
          elOffset.right = Math.round(elOffset.right);
        }

        return elOffset;
      };
      /*
        Return false if the element to position is outside the viewport
      */


      Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var _a = placement.split('-'),
            _b = _a[0],
            placementPrimary = _b === void 0 ? 'top' : _b,
            _c = _a[1],
            placementSecondary = _c === void 0 ? 'center' : _c;

        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var marginTop = parseFloat(targetElStyles.marginTop);
        var marginBottom = parseFloat(targetElStyles.marginBottom);
        var marginLeft = parseFloat(targetElStyles.marginLeft);
        var marginRight = parseFloat(targetElStyles.marginRight);
        var topPosition = 0;
        var leftPosition = 0;

        switch (placementPrimary) {
          case 'top':
            topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
            break;

          case 'bottom':
            topPosition = hostElPosition.top + hostElPosition.height;
            break;

          case 'left':
            leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
            break;

          case 'right':
            leftPosition = hostElPosition.left + hostElPosition.width;
            break;
        }

        switch (placementSecondary) {
          case 'top':
            topPosition = hostElPosition.top;
            break;

          case 'bottom':
            topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
            break;

          case 'left':
            leftPosition = hostElPosition.left;
            break;

          case 'right':
            leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
            break;

          case 'center':
            if (placementPrimary === 'top' || placementPrimary === 'bottom') {
              leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
            } else {
              topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
            }

            break;
        } /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;


        targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)"; // Check if the targetElement is inside the viewport

        var targetElBCR = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
      };

      return Positioning;
    }();

    var placementSeparator = /\s+/;
    var positionService = new Positioning();
    /*
     * Accept the placement array and applies the appropriate placement dependent on the viewport.
     * Returns the applied placement.
     * In case of auto placement, placements are selected in order
     *   'top', 'bottom', 'left', 'right',
     *   'top-left', 'top-right',
     *   'bottom-left', 'bottom-right',
     *   'left-top', 'left-bottom',
     *   'right-top', 'right-bottom'.
     * */

    function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
      var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
      var allowedPlacements = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom'];
      var classList = targetElement.classList;

      var addClassesToTarget = function addClassesToTarget(targetPlacement) {
        var _a = targetPlacement.split('-'),
            primary = _a[0],
            secondary = _a[1];

        var classes = [];

        if (baseClass) {
          classes.push(baseClass + "-" + primary);

          if (secondary) {
            classes.push(baseClass + "-" + primary + "-" + secondary);
          }

          classes.forEach(function (classname) {
            classList.add(classname);
          });
        }

        return classes;
      }; // Remove old placement classes to avoid issues


      if (baseClass) {
        allowedPlacements.forEach(function (placementToRemove) {
          classList.remove(baseClass + "-" + placementToRemove);
        });
      } // replace auto placement with other placements


      var hasAuto = placementVals.findIndex(function (val) {
        return val === 'auto';
      });

      if (hasAuto >= 0) {
        allowedPlacements.forEach(function (obj) {
          if (placementVals.find(function (val) {
            return val.search('^' + obj) !== -1;
          }) == null) {
            placementVals.splice(hasAuto++, 1, obj);
          }
        });
      } // coordinates where to position
      // Required for transform:


      var style = targetElement.style;
      style.position = 'absolute';
      style.top = '0';
      style.left = '0';
      style['will-change'] = 'transform';
      var testPlacement;
      var isInViewport = false;

      for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
        testPlacement = placementVals_1[_i];
        var addedClasses = addClassesToTarget(testPlacement);

        if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
          isInViewport = true;
          break;
        } // Remove the baseClasses for further calculation


        if (baseClass) {
          addedClasses.forEach(function (classname) {
            classList.remove(classname);
          });
        }
      }

      if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
      }

      return testPlacement;
    } //# sourceMappingURL=positioning.js.map

    /***/

  },

  /***/
  "./node_modules/type-func/dist/bundle.js":
  /*!***********************************************!*\
    !*** ./node_modules/type-func/dist/bundle.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesTypeFuncDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function getDef(f, d) {
      if (typeof f === 'undefined') {
        return typeof d === 'undefined' ? f : d;
      }

      return f;
    }

    function boolean(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return !!func.apply(this, args);
        };
      }

      return !!func ? function () {
        return true;
      } : function () {
        return false;
      };
    }

    function integer(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var n = parseInt(func.apply(this, args), 10);
          return n != n ? 0 : n;
        };
      }

      func = parseInt(func, 10);
      return func != func ? function () {
        return 0;
      } : function () {
        return func;
      };
    }

    function string(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return '' + func.apply(this, args);
        };
      }

      func = '' + func;
      return function () {
        return func;
      };
    }

    exports.boolean = boolean;
    exports.integer = integer;
    exports.string = string; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./src/app/main/apps/calendar/calendar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/main/apps/calendar/calendar.component.ts ***!
    \**********************************************************/

  /*! exports provided: CalendarComponent */

  /***/
  function srcAppMainAppsCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
      return CalendarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fuse/components/confirm-dialog/confirm-dialog.component */
    "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fuse/animations */
    "./src/@fuse/animations/index.ts");
    /* harmony import */


    var app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/main/apps/calendar/event.model */
    "./src/app/main/apps/calendar/event.model.ts");
    /* harmony import */


    var app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/main/apps/calendar/event-form/event-form.component */
    "./src/app/main/apps/calendar/event-form/event-form.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! app/main/apps/calendar/calendar.service */
    "./src/app/main/apps/calendar/calendar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
    /* harmony import */


    var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
    "./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");

    function CalendarComponent_mwl_calendar_month_view_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r533 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClicked", function CalendarComponent_mwl_calendar_month_view_41_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r533);

          var ctx_r532 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r532.dayClicked($event.day);
        })("eventClicked", function CalendarComponent_mwl_calendar_month_view_41_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r533);

          var ctx_r534 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r534.editEvent("edit", $event.event);
        })("eventTimesChanged", function CalendarComponent_mwl_calendar_month_view_41_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r533);

          var ctx_r535 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r535.eventTimesChanged($event);
        })("beforeViewRender", function CalendarComponent_mwl_calendar_month_view_41_Template_mwl_calendar_month_view_beforeViewRender_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r533);

          var ctx_r536 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r536.beforeMonthViewRender($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r529.viewDate)("events", ctx_r529.events)("refresh", ctx_r529.refresh)("activeDayIsOpen", ctx_r529.activeDayIsOpen);
      }
    }

    function CalendarComponent_mwl_calendar_week_view_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r538 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarComponent_mwl_calendar_week_view_42_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r538);

          var ctx_r537 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r537.editEvent("edit", $event.event);
        })("eventTimesChanged", function CalendarComponent_mwl_calendar_week_view_42_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r538);

          var ctx_r539 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r539.eventTimesChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r530 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r530.viewDate)("events", ctx_r530.events)("refresh", ctx_r530.refresh);
      }
    }

    function CalendarComponent_mwl_calendar_day_view_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r541 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarComponent_mwl_calendar_day_view_43_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r541);

          var ctx_r540 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r540.editEvent("edit", $event.event);
        })("eventTimesChanged", function CalendarComponent_mwl_calendar_day_view_43_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r541);

          var ctx_r542 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r542.eventTimesChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r531 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r531.viewDate)("events", ctx_r531.events)("refresh", ctx_r531.refresh);
      }
    }

    var _c0 = function _c0() {
      return {
        delay: "50ms",
        scale: "0.2"
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
        delay: "100ms",
        x: "-25px"
      };
    };

    var _c3 = function _c3() {
      return {
        delay: "150ms"
      };
    };

    var _c4 = function _c4() {
      return {
        delay: "300ms",
        scale: "0.2"
      };
    };

    var _c5 = function _c5() {
      return {
        delay: "200ms",
        y: "50px"
      };
    };

    var CalendarComponent =
    /*#__PURE__*/
    function () {
      function CalendarComponent(_matDialog, _calendarService, httpClient) {
        var _this26 = this;

        _classCallCheck(this, CalendarComponent);

        this._matDialog = _matDialog;
        this._calendarService = _calendarService;
        this.httpClient = httpClient;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.locale = 'es'; // Set the defaults

        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.selectedDay = {
          date: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date())
        };
        this.actions = [{
          label: '<i class="material-icons s-16">edit</i>',
          onClick: function onClick(_ref66) {
            var event = _ref66.event;

            _this26.editEvent('edit', event);
          }
        }, {
          label: '<i class="material-icons s-16">delete</i>',
          onClick: function onClick(_ref67) {
            var event = _ref67.event;

            _this26.deleteEvent(event);
          }
        }];
        /**
         * Get events from service/server
         */

        this.setEvents();
      } // -----------------------------------------------------------------------------------------------------
      // @ Lifecycle hooks
      // -----------------------------------------------------------------------------------------------------

      /**
       * On init
       */


      _createClass(CalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          /**
           * Watch re-render-refresh for updating db
           */
          this.refresh.subscribe(function (updateDB) {
            if (updateDB) {
              _this27._calendarService.updateEvents(_this27.events);
            }
          });

          this._calendarService.onEventsUpdated.subscribe(function (events) {
            _this27.setEvents();

            _this27.refresh.next();
          });
        } // -----------------------------------------------------------------------------------------------------
        // @ Public methods
        // -----------------------------------------------------------------------------------------------------

        /**
         * Set events
         */

      }, {
        key: "setEvents",
        value: function setEvents() {
          var _this28 = this;

          this.events = this._calendarService.events.map(function (item) {
            item.actions = _this28.actions;
            console.log(item);
            return new app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_5__["CalendarEventModel"](item);
          });
        }
        /**
         * Before View Renderer
         *
         * @param {any} header
         * @param {any} body
         */

      }, {
        key: "beforeMonthViewRender",
        value: function beforeMonthViewRender(_ref68) {
          var _this29 = this;

          var header = _ref68.header,
              body = _ref68.body;

          /**
           * Get the selected day
           */
          var _selectedDay = body.find(function (_day) {
            return _day.date.getTime() === _this29.selectedDay.date.getTime();
          });

          if (_selectedDay) {
            /**
             * Set selected day style
             * @type {string}
             */
            _selectedDay.cssClass = 'cal-selected';
          }
        }
        /**
         * Day clicked
         *
         * @param {MonthViewDay} day
         */

      }, {
        key: "dayClicked",
        value: function dayClicked(day) {
          var date = day.date;
          var events = day.events;

          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
              this.activeDayIsOpen = false;
            } else {
              this.activeDayIsOpen = true;
              this.viewDate = date;
            }
          }

          this.selectedDay = day;
          this.refresh.next();
        }
        /**
         * Event times changed
         * Event dropped or resized
         *
         * @param {CalendarEvent} event
         * @param {Date} newStart
         * @param {Date} newEnd
         */

      }, {
        key: "eventTimesChanged",
        value: function eventTimesChanged(_ref69) {
          var event = _ref69.event,
              newStart = _ref69.newStart,
              newEnd = _ref69.newEnd;
          event.start = newStart;
          event.end = newEnd;
          this.refresh.next(true);
        }
        /**
         * Delete Event
         *
         * @param event
         */

      }, {
        key: "deleteEvent",
        value: function deleteEvent(event) {
          var _this30 = this;

          this.confirmDialogRef = this._matDialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["FuseConfirmDialogComponent"], {
            disableClose: false
          });
          this.confirmDialogRef.componentInstance.confirmMessage = 'Deseas Eliminar el evento?';
          this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              var eventIndex = _this30.events.indexOf(event);

              _this30.events.splice(eventIndex, 1);

              _this30.refresh.next(true);
            }

            _this30.confirmDialogRef = null;
          });
        }
        /**
         * Edit Event
         *
         * @param {string} action
         * @param {CalendarEvent} event
         */

      }, {
        key: "editEvent",
        value: function editEvent(action, event) {
          var _this31 = this;

          var eventIndex = this.events.indexOf(event);
          this.dialogRef = this._matDialog.open(app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_6__["CalendarEventFormDialogComponent"], {
            panelClass: 'event-form-dialog',
            data: {
              event: event,
              action: action
            }
          });
          this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
              return;
            }

            var actionType = response[0];
            var formData = response[1];

            switch (actionType) {
              /**
               * Save
               */
              case 'save':
                _this31.events[eventIndex] = Object.assign(_this31.events[eventIndex], formData.getRawValue());

                _this31.refresh.next(true);

                break;

              /**
               * Delete
               */

              case 'delete':
                _this31.deleteEvent(event);

                break;
            }
          });
        }
        /**
         * Add Event
         */

      }, {
        key: "addEvent",
        value: function addEvent() {
          var _this32 = this;

          this.dialogRef = this._matDialog.open(app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_6__["CalendarEventFormDialogComponent"], {
            panelClass: 'event-form-dialog',
            data: {
              action: 'new',
              date: this.selectedDay.date
            }
          });
          this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
              return;
            }

            var newEvent = response.getRawValue();
            newEvent.actions = _this32.actions;
            console.log(newEvent);

            _this32.ingresarFeriado(newEvent);

            _this32.events.push(newEvent);

            _this32.refresh.next(true);
          });
        }
      }, {
        key: "ingresarFeriado",
        value: function ingresarFeriado(feriadoNuevo) {
          var _this33 = this;

          if (feriadoNuevo.title != '') {
            this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url + '/agenda', {
              titulo: feriadoNuevo.title,
              color: feriadoNuevo.color.primary,
              fechaInicio: feriadoNuevo.start.toString().replace('00:00:00', feriadoNuevo.meta.horaInicio + ':00'),
              fechaFin: feriadoNuevo.end.toString().replace('00:00:00', feriadoNuevo.meta.horaFin + ':00'),
              horaInicio: feriadoNuevo.meta.horaInicio,
              horaFin: feriadoNuevo.meta.horaFin,
              descripcion: feriadoNuevo.meta.notes,
              ubicacion: feriadoNuevo.meta.location,
              estudiante: feriadoNuevo.meta.estudiante
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (res) {
              var aux;
              aux = res;

              _this33.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url + '/agendaProfesor', {
                usuarioId: localStorage.getItem('idProfesorRegistrado'),
                agendaId: aux.identifiers[0].id
              }).subscribe(function (eje) {}, function (error) {});
            });
          }
        }
      }, {
        key: "editarEvento",
        value: function editarEvento(feriadoNuevo, id) {
          console.log('ok', feriadoNuevo);

          if (feriadoNuevo.title != '') {
            this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url + '/agenda/' + id, {
              titulo: feriadoNuevo.title,
              color: feriadoNuevo.color.primary,
              fechaInicio: feriadoNuevo.start,
              fechaFin: feriadoNuevo.end,
              horaInicio: feriadoNuevo.meta.horaInicio,
              horaFin: feriadoNuevo.meta.horaFin,
              descripcion: feriadoNuevo.meta.notes,
              ubicacion: feriadoNuevo.meta.location,
              estudiante: feriadoNuevo.meta.estudiante
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
              })
            }).subscribe(function (res) {
              console.log(res);
            });
          }
        }
      }]);

      return CalendarComponent;
    }();

    CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
      return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_10__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]));
    };

    CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarComponent,
      selectors: [["calendar"]],
      decls: 44,
      vars: 38,
      consts: [["id", "calendar", 1, "page-layout", "simple", "fullwidth"], [1, "header", "p-16", "p-sm-24", 3, "ngClass"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header-content"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayout.xs", "column", 1, "header-top"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "logo", "mb-16", "mb-sm-0"], [1, "logo-icon"], [1, "logo-text"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "toolbar"], ["mat-icon-button", "", "aria-label", "Search", "matTooltip", "Search"], ["mat-icon-button", "", "mwlCalendarToday", "", "aria-label", "Today", "matTooltip", "Today", 3, "viewDate", "viewDateChange"], ["mat-icon-button", "", "aria-label", "Dia", "matTooltip", "Day", 3, "click"], ["mat-icon-button", "", "aria-label", "Semana", "matTooltip", "Week", 3, "click"], ["mat-icon-button", "", "aria-label", "Mes", "matTooltip", "Month", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "header-bottom"], ["mat-icon-button", "", "mwlCalendarPreviousView", "", "aria-label", "Previous", 1, "arrow", 3, "view", "viewDate", "viewDateChange"], [1, "title"], ["mat-icon-button", "", "mwlCalendarNextView", "", "aria-label", "Next", 1, "arrow", 3, "view", "viewDate", "viewDateChange"], ["mat-fab", "", "aria-label", "Add event", 1, "add-event-button", "mat-accent", 3, "click"], ["fusePerfectScrollbar", "", 1, "content"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", "beforeViewRender", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", "beforeViewRender"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"]],
      template: function CalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " today ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Agenda ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_14_listener($event) {
            return ctx.viewDate = $event;
          })("viewDateChange", function CalendarComponent_Template_button_viewDateChange_14_listener($event) {
            return ctx.selectedDay = {
              date: $event
            };
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_17_listener($event) {
            return ctx.view = "day";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "view_day");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_20_listener($event) {
            return ctx.view = "week";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "view_week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_23_listener($event) {
            return ctx.view = "month";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "view_module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_27_listener($event) {
            return ctx.viewDate = $event;
          })("viewDateChange", function CalendarComponent_Template_button_viewDateChange_27_listener($event) {
            return ctx.selectedDay = {
              date: $event
            };
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "chevron_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_33_listener($event) {
            return ctx.viewDate = $event;
          })("viewDateChange", function CalendarComponent_Template_button_viewDateChange_33_listener($event) {
            return ctx.selectedDay = {
              date: $event
            };
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "chevron_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_36_listener($event) {
            return ctx.addEvent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CalendarComponent_mwl_calendar_month_view_41_Template, 1, 4, "mwl-calendar-month-view", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CalendarComponent_mwl_calendar_week_view_42_Template, 1, 3, "mwl-calendar-week-view", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CalendarComponent_mwl_calendar_day_view_43_Template, 1, 3, "mwl-calendar-day-view", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 16, ctx.viewDate, "MMM"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c3)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](32, 19, ctx.viewDate, ctx.view + "ViewTitle", "es"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c4)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c5)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], angular_calendar__WEBPACK_IMPORTED_MODULE_17__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_17__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_17__["ɵg"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_18__["FusePerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], angular_calendar__WEBPACK_IMPORTED_MODULE_17__["CalendarMonthViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_17__["CalendarWeekViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_17__["CalendarDayViewComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], angular_calendar__WEBPACK_IMPORTED_MODULE_17__["ɵi"]],
      encapsulation: 2,
      data: {
        animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'calendar',
          templateUrl: './calendar.component.html',
          styleUrls: ['./calendar.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_10__["CalendarService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/calendar/calendar.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/main/apps/calendar/calendar.module.ts ***!
    \*******************************************************/

  /*! exports provided: CalendarModule */

  /***/
  function srcAppMainAppsCalendarCalendarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
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


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/dist/ngx-color-picker.es5.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @fuse/components */
    "./src/@fuse/components/index.ts");
    /* harmony import */


    var app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! app/main/apps/calendar/calendar.component */
    "./src/app/main/apps/calendar/calendar.component.ts");
    /* harmony import */


    var app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! app/main/apps/calendar/calendar.service */
    "./src/app/main/apps/calendar/calendar.service.ts");
    /* harmony import */


    var app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! app/main/apps/calendar/event-form/event-form.component */
    "./src/app/main/apps/calendar/event-form/event-form.component.ts");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common/locales/es */
    "./node_modules/@angular/common/locales/es.js");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_19___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_19___default.a);
    var routes = [{
      path: '**',
      component: app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_16__["CalendarComponent"],
      children: [],
      resolve: {
        chat: app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_17__["CalendarService"]
      }
    }];

    var CalendarModule = function CalendarModule() {
      _classCallCheck(this, CalendarModule);
    };

    CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CalendarModule
    });
    CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CalendarModule_Factory(t) {
        return new (t || CalendarModule)();
      },
      providers: [app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_17__["CalendarService"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__["adapterFactory"]
      }), ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__["ColorPickerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_14__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_15__["FuseConfirmDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarModule, {
        declarations: [app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_16__["CalendarComponent"], app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_18__["CalendarEventFormDialogComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__["ColorPickerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_14__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_15__["FuseConfirmDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_16__["CalendarComponent"], app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_18__["CalendarEventFormDialogComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__["adapterFactory"]
          }), ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__["ColorPickerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_14__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_15__["FuseConfirmDialogModule"]],
          providers: [app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_17__["CalendarService"]],
          entryComponents: [app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_18__["CalendarEventFormDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/calendar/calendar.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/main/apps/calendar/calendar.service.ts ***!
    \********************************************************/

  /*! exports provided: CalendarService */

  /***/
  function srcAppMainAppsCalendarCalendarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarService", function () {
      return CalendarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CalendarService =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       *
       * @param {HttpClient} _httpClient
       */
      function CalendarService(_httpClient) {
        _classCallCheck(this, CalendarService);

        this._httpClient = _httpClient;
        this.arregloEventos = []; // Set the defaults

        this.onEventsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ejemploUsuario();
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Resolver
       *
       * @param {ActivatedRouteSnapshot} route
       * @param {RouterStateSnapshot} state
       * @returns {Observable<any> | Promise<any> | any}
       */


      _createClass(CalendarService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this34 = this;

          return new Promise(function (resolve, reject) {
            Promise.all([_this34.getEvents()]).then(function (_ref70) {
              var _ref71 = _slicedToArray(_ref70, 1),
                  events = _ref71[0];

              resolve();
            }, reject);
          });
        }
        /**
         * Get events
         *
         * @returns {Promise<any>}
         */

      }, {
        key: "getEvents",
        value: function getEvents() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this35 = this;

            var calendario;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    calendario = [];
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      _this35._httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/agenda').subscribe(function (response) {
                        var unicos;
                        unicos = response; //this.events = response;

                        for (var j = 0; j < _this35.arregloEventos.length; j++) {
                          for (var i = 0; i < unicos.length; i++) {
                            if (_this35.arregloEventos[j].toString() === unicos[i].id.toString()) {
                              calendario.push({
                                start: new Date(unicos[i].fechaInicio),
                                end: new Date(unicos[i].fechaFin),
                                title: unicos[i].titulo,
                                allDay: false,
                                color: {
                                  primary: unicos[i].color
                                },
                                draggable: true,
                                meta: {
                                  location: unicos[i].ubicacion,
                                  notes: unicos[i].descripcion
                                },
                                resizable: {
                                  beforeStart: true,
                                  afterEnd: true
                                },
                                actions: [{
                                  label: '<i class="material-icons s-16"></i>',
                                  onClick: 'ƒ'
                                }, {
                                  label: '<i class="material-icons s-16"></i>',
                                  onClick: 'ƒ'
                                }]
                              });
                            }
                          }
                        }

                        _this35.events = calendario;

                        _this35.onEventsUpdated.next(_this35.events);

                        resolve(_this35.events);
                      }, reject);
                    }));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "ejemploUsuario",
        value: function ejemploUsuario() {
          var _this36 = this;

          this._httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/agendaProfesor').subscribe(function (ejem) {
            var aux;
            aux = ejem;

            for (var i = 0; i < aux.length; i++) {
              if (aux[i].usuarioId.toString() === localStorage.getItem('idProfesorRegistrado').toString()) {
                _this36.arregloEventos.push(aux[i].agendaId);
              }
            }
          });
        }
        /**
         * Update events
         *
         * @param events
         * @returns {Promise<any>}
         */

      }, {
        key: "updateEvents",
        value: function updateEvents(events) {
          var _this37 = this;

          return new Promise(function (resolve, reject) {
            _this37._httpClient.post('api/calendar/events', {
              id: 'events',
              data: _toConsumableArray(events)
            }).subscribe(function (response) {
              _this37.getEvents();
            }, reject);
          });
        }
      }]);

      return CalendarService;
    }();

    CalendarService.ɵfac = function CalendarService_Factory(t) {
      return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    CalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarService,
      factory: CalendarService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/calendar/event-form/event-form.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/main/apps/calendar/event-form/event-form.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CalendarEventFormDialogComponent */

  /***/
  function srcAppMainAppsCalendarEventFormEventFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventFormDialogComponent", function () {
      return CalendarEventFormDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fuse/mat-colors */
    "./src/@fuse/mat-colors/index.ts");
    /* harmony import */


    var app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/main/apps/calendar/event.model */
    "./src/app/main/apps/calendar/event.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
    "./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/dist/ngx-color-picker.es5.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    function CalendarEventFormDialogComponent_button_60_Template(rf, ctx) {
      if (rf & 1) {
        var _r524 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarEventFormDialogComponent_button_60_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r524);

          var ctx_r523 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r523.matDialogRef.close(["delete", ctx_r523.eventForm]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Eliminar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CalendarEventFormDialogComponent_button_61_Template(rf, ctx) {
      if (rf & 1) {
        var _r526 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarEventFormDialogComponent_button_61_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r526);

          var ctx_r525 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r525.matDialogRef.close(ctx_r525.eventForm);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A\xF1adir ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r521 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r521.eventForm.invalid);
      }
    }

    function CalendarEventFormDialogComponent_button_62_Template(rf, ctx) {
      if (rf & 1) {
        var _r528 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarEventFormDialogComponent_button_62_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r528);

          var ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r527.matDialogRef.close(["save", ctx_r527.eventForm]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Guardar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r522 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r522.eventForm.invalid);
      }
    }

    var CalendarEventFormDialogComponent =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       *
       * @param {MatDialogRef<CalendarEventFormDialogComponent>} matDialogRef
       * @param _data
       * @param {FormBuilder} _formBuilder
       */
      function CalendarEventFormDialogComponent(matDialogRef, httpClient, _data, _formBuilder) {
        _classCallCheck(this, CalendarEventFormDialogComponent);

        this.matDialogRef = matDialogRef;
        this.httpClient = httpClient;
        this._data = _data;
        this._formBuilder = _formBuilder;
        this.presetColors = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__["MatColors"].presets;
        console.log(this.event);
        this.event = _data.event;
        this.action = _data.action;

        if (this.action === 'edit') {
          this.dialogTitle = this.event.title;
        } else {
          this.dialogTitle = 'New Event'; //this.ingresarFeriado(this.eventForm.value)

          this.event = new app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_4__["CalendarEventModel"]({
            start: _data.date,
            end: _data.date
          });
        }

        this.eventForm = this.createEventForm();
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Create the event form
       *
       * @returns {FormGroup}
       */


      _createClass(CalendarEventFormDialogComponent, [{
        key: "createEventForm",
        value: function createEventForm() {
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.title),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.start),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.end),
            allDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.allDay),
            color: this._formBuilder.group({
              primary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.color.primary),
              secondary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.color.secondary)
            }),
            meta: this._formBuilder.group({
              location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.meta.location),
              notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.meta.notes),
              estudiante: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.meta.estudiante),
              horaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.meta.horaInicio),
              horaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.meta.horaFin)
            })
          });
        }
      }]);

      return CalendarEventFormDialogComponent;
    }();

    CalendarEventFormDialogComponent.ɵfac = function CalendarEventFormDialogComponent_Factory(t) {
      return new (t || CalendarEventFormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    CalendarEventFormDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarEventFormDialogComponent,
      selectors: [["calendar-event-form-dialog"]],
      decls: 63,
      vars: 13,
      consts: [[1, "dialog-content-wrapper"], [1, "mat-accent", "m-0"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "title", "dialog-title"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", "", "fusePerfectScrollbar", "", 1, "p-16", "pb-0", "m-0"], ["name", "eventForm", "fxLayout", "column", "fxFlex", "", 1, "event-form", "w-100-p", 3, "formGroup"], ["appearance", "outline", 1, "w-100-p"], ["matInput", "", "name", "title", "formControlName", "title", "required", ""], ["fxFlex", "1 0 auto", "fxLayout", "column", "fxLayout.gt-xs", "row", "formGroupName", "color"], ["appearance", "outline", "fxFlex", "50", 1, "pr-sm-8"], ["matInput", "", "name", "primary color", "formControlName", "primary", "cpWidth", "290px", 1, "primary-color-input", "border-radius-4", 3, "colorPicker", "cpPresetColors", "colorPickerChange"], ["fxFlex", "1 0 auto", "fxLayout", "row", 1, "pb-32"], ["name", "allDay", "formControlName", "allDay", "aria-label", "All day", 1, "mr-24"], ["fxFlex", "1 0 auto", "fxLayout", "column", "fxLayout.gt-xs", "row"], ["matInput", "", "name", "start", "formControlName", "start", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startDatePicker", ""], ["appearance", "outline", "formGroupName", "meta", "fxFlex", "50", 1, "w-100-p"], ["matInput", "", "type", "time", "name", "horaInicio", "formControlName", "horaInicio"], ["matInput", "", "name", "end", "formControlName", "end", 3, "matDatepicker"], ["endDatePicker", ""], ["matInput", "", "type", "time", "name", "horaFin", "formControlName", "horaFin"], ["appearance", "outline", "formGroupName", "meta", 1, "w-100-p"], ["matInput", "", "name", "location", "formControlName", "location"], ["matInput", "", "formControlName", "notes", "mat-maxlength", "250", "max-rows", "4"], ["matInput", "", "formControlName", "estudiante", "mat-maxlength", "250", "max-rows", "4"], ["mat-dialog-actions", "", "fxLayout", "row", "fxLayoutAlign", "end center", 1, "m-0", "p-16"], ["mat-button", "", "color", "primary", "class", "mr-8", "aria-label", "Delete", "matTooltip", "Delete", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", "class", "save-button", "aria-label", "ADD", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", "color", "primary", "class", "save-button", "aria-label", "SAVE", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", "color", "primary", "aria-label", "Delete", "matTooltip", "Delete", 1, "mr-8", 3, "click"], ["mat-button", "", "color", "primary", "aria-label", "ADD", 1, "save-button", 3, "disabled", "click"], ["mat-button", "", "color", "primary", "aria-label", "SAVE", 1, "save-button", 3, "disabled", "click"]],
      template: function CalendarEventFormDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarEventFormDialogComponent_Template_button_click_5_listener($event) {
            return ctx.matDialogRef.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "T\xEDtulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Color de Evento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function CalendarEventFormDialogComponent_Template_input_colorPickerChange_18_listener($event) {
            return ctx.event.color.primary = $event;
          })("colorPickerChange", function CalendarEventFormDialogComponent_Template_input_colorPickerChange_18_listener($event) {
            ctx.event.color.primary = $event;
            return ctx.eventForm.patchValue({
              color: {
                primary: $event
              }
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-slide-toggle", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Todo el D\xEDa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fecha de Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-datepicker-toggle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-datepicker", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Hora Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Fecha de Fin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-datepicker-toggle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-datepicker", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Hora Fin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Evento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Nota");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "textarea", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Estudiante");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CalendarEventFormDialogComponent_button_60_Template, 2, 0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, CalendarEventFormDialogComponent_button_61_Template, 2, 1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, CalendarEventFormDialogComponent_button_62_Template, 2, 1, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r518 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          var _r519 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.eventForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.event.color.primary, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorPicker", ctx.event.color.primary)("cpPresetColors", ctx.presetColors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r518);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r518);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r519);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r519);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action !== "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "edit");
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_10__["FusePerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__["ColorPickerDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarEventFormDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'calendar-event-form-dialog',
          templateUrl: './event-form.component.html',
          styleUrls: ['./event-form.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/calendar/event.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/main/apps/calendar/event.model.ts ***!
    \***************************************************/

  /*! exports provided: CalendarEventModel */

  /***/
  function srcAppMainAppsCalendarEventModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventModel", function () {
      return CalendarEventModel;
    });
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    var CalendarEventModel =
    /**
     * Constructor
     *
     * @param data
     */
    function CalendarEventModel(data) {
      _classCallCheck(this, CalendarEventModel);

      data = data || {};
      this.start = new Date(data.start) || Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(new Date());
      this.end = new Date(data.end) || Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfDay"])(new Date());
      this.title = data.title || '';
      this.color = {
        primary: data.color && data.color.primary || '#1e90ff',
        secondary: data.color && data.color.secondary || '#D1E8FF'
      };
      this.draggable = data.draggable;
      this.resizable = {
        beforeStart: data.resizable && data.resizable.beforeStart || true,
        afterEnd: data.resizable && data.resizable.afterEnd || true
      };
      this.actions = data.actions || [];
      this.allDay = data.allDay || false;
      this.cssClass = data.cssClass || '';
      this.meta = {
        location: data.meta && data.meta.location || '',
        notes: data.meta && data.meta.notes || ''
      };
    };
    /***/

  }
}]);
//# sourceMappingURL=calendar-calendar-module-es5.js.map