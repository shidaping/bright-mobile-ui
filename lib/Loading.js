!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("react-dom"));else if("function"==typeof define&&define.amd)define(["react","react-dom"],t);else{var n="object"==typeof exports?t(require("react"),require("react-dom")):t(e.react,e["react-dom"]);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=314)}({1:function(t,n){t.exports=e},10:function(e,n){e.exports=t},2:function(e,t,n){e.exports=n(7)()},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(315),i=(o=r)&&o.__esModule?o:{default:o};n(316),t.default=i.default},315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),i=c(r),a=c(n(2)),u=c(n(10));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={show:!1,children:null},n.apiShow=n.apiShow.bind(n),n.props.api&&n.props.api({apiShow:n.apiShow,apiHide:n.apiHide}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,null,[{key:"show",value:function(e){var n=document.getElementById("bmuiLoading");n&&document.body.removeChild(n),(n=document.createElement("div")).id="bmuiLoading",document.body.appendChild(n);var o=void 0;u.default.render(i.default.createElement(t,{api:function(e){o=e}},e),n),o.apiShow(e)}},{key:"hide",value:function(){var e=document.getElementById("bmuiLoading");e&&e.parentElement.removeChild(e)}}]),o(t,[{key:"componentWillReceiveProps",value:function(e){e.show!==this.state.show&&this.setState({show:e.show})}},{key:"apiShow",value:function(){this.setState({show:!0})}},{key:"apiHide",value:function(){this.setState({show:!1})}},{key:"render",value:function(){return i.default.createElement("div",{className:"bmui-loading-mask",style:{display:this.state.show?"block":"none"}},i.default.createElement("div",{className:"bmui-loading"},i.default.createElement("span",{className:"bmui-loading__spiner"}),this.state.children))}}]),t}();l.propTypes={children:a.default.any,show:a.default.bool,api:a.default.func},t.default=l},316:function(e,t,n){},7:function(e,t,n){"use strict";var o=n(8);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},8:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}})});