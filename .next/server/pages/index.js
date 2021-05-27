(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
var _jsxFileName = "D:\\react\\Mini-Social-App\\pages\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Index({
  posts
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, posts && posts.length > 0 && posts.map(post => __jsx("h1", {
    key: post._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 29
    }
  }, post.title)));
}

Index.getIntialProps = async ctx => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://jsonplaceholder.typicode.com/posts");
    return {
      posts: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJJbmRleCIsInBvc3RzIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsIl9pZCIsInRpdGxlIiwiZ2V0SW50aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJheGlvcyIsImRhdGEiLCJlcnJvciIsImVycm9yTG9hZGluZyIsImJhc2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQTBCO0FBQ3hCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLElBQ0pBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLENBRGhCLElBRUNELEtBQUssQ0FBQ0UsR0FBTixDQUFXQyxJQUFELElBQVU7QUFBSSxPQUFHLEVBQUVBLElBQUksQ0FBQ0MsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CRCxJQUFJLENBQUNFLEtBQXpCLENBQXBCLENBSEosQ0FERjtBQU9EOztBQUVETixLQUFLLENBQUNPLGNBQU4sR0FBdUIsTUFBT0MsR0FBUCxJQUFlO0FBQ3BDLE1BQUk7QUFDRixVQUFNQyxHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVSw0Q0FBVixDQUFsQjtBQUVBLFdBQU87QUFBRVQsV0FBSyxFQUFFUSxHQUFHLENBQUNFO0FBQWIsS0FBUDtBQUNELEdBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxXQUFPO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FBUDtBQUNEO0FBQ0YsQ0FSRDs7QUFVQSwrREFBZWIsS0FBZixFOzs7Ozs7Ozs7Ozs7QUN4QkEsTUFBTWMsT0FBTyxHQUFHLHVCQUFoQjtBQUVBLCtEQUFlQSxPQUFmLEU7Ozs7Ozs7Ozs7O0FDRkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgcG9zdHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cG9zdHMgJiZcclxuICAgICAgICBwb3N0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgcG9zdHMubWFwKChwb3N0KSA9PiA8aDEga2V5PXtwb3N0Ll9pZH0+e3Bvc3QudGl0bGV9PC9oMT4pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuSW5kZXguZ2V0SW50aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcclxuXHJcbiAgICByZXR1cm4geyBwb3N0czogcmVzLmRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3JMb2FkaW5nOiB0cnVlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9