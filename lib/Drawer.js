!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("react-dom"));else if("function"==typeof define&&define.amd)define(["react","react-dom"],t);else{var r="object"==typeof exports?t(require("react"),require("react-dom")):t(e.react,e["react-dom"]);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(window,function(e,t){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=271)}({1:function(t,r){t.exports=e},10:function(e,r){e.exports=t},2:function(e,t,r){e.exports=r(7)()},271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(272),i=(o=n)&&o.__esModule?o:{default:o};r(273),t.default=i.default},272:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),n=r(1),i=s(n),a=s(r(2)),u=s(r(10)),c=s(r(4));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={show:!1,children:null},r.apiShow=r.apiShow.bind(r),r.apiHide=r.apiHide.bind(r),r.props.api&&r.props.api({apiShow:r.apiShow,apiHide:r.apiHide}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),o(t,[{key:"componentWillReceiveProps",value:function(e){e.show!==this.state.show&&this.setState({show:e.show})}},{key:"componentWillReceiveProps",value:function(e){e.show!==this.state.show&&this.setState({show:e.show})}},{key:"componentWillUpdate",value:function(){}},{key:"apiShow",value:function(){var e=u.default.findDOMNode(this);e.style.display="block",setTimeout(function(){e.style.opacity=1,e.querySelector(".bmui-drawer__modal").style.transform="translateX(0)"},10)}},{key:"apiHide",value:function(){var e=u.default.findDOMNode(this);e.querySelector(".bmui-drawer__modal").style.transform="translateX(100%)",e.style.opacity=0,setTimeout(function(){e.style.display="none"},700)}},{key:"render",value:function(){return i.default.createElement("div",{className:(0,c.default)("bmui-drawer bmui-mask",{active:this.state.boolVisible}),onClick:this.apiHide},i.default.createElement("div",{onClick:function(e){e.stopPropagation()},className:"bmui-drawer__modal"},this.props.children))}}]),t}();l.propTypes={children:a.default.any,show:a.default.bool,api:a.default.func},t.default=l},273:function(e,t,r){},4:function(e,t,r){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=n.apply(null,o);a&&e.push(a)}else if("object"===i)for(var u in o)r.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},7:function(e,t,r){"use strict";var o=r(8);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,a){if(a!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},8:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}})});