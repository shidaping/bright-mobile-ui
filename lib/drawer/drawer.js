'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawer = function (_Component) {
  _inherits(Drawer, _Component);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this.state = {
      show: false,
      children: null
    };
    _this.apiShow = _this.apiShow.bind(_this);
    _this.apiHide = _this.apiHide.bind(_this);
    if (_this.props.api) {
      _this.props.api({
        apiShow: _this.apiShow,
        apiHide: _this.apiHide
      });
    }
    return _this;
  }

  _createClass(Drawer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show !== this.state.show) {
        this.setState({
          show: nextProps.show
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show !== this.state.show) {
        this.setState({
          show: nextProps.show
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {}
  }, {
    key: 'apiShow',
    value: function apiShow() {
      var domThis = _reactDom2.default.findDOMNode(this);
      // domThis.classList.add('active');
      domThis.style.display = 'block';
      setTimeout(function () {
        domThis.style.opacity = 1;
        domThis.querySelector('.bmui-drawer__modal').style.transform = 'translateX(0)';
      }, 10);

      // this.setState({
      //   show: true,
      // });
      // debugger;
    }
  }, {
    key: 'apiHide',
    value: function apiHide() {
      // debugger;
      // this.setState({
      //   boolVisible: false,
      // });
      // this.setState({
      //   show: false,
      // });
      var domThis = _reactDom2.default.findDOMNode(this);
      // domThis.classList.remove('active');
      domThis.querySelector('.bmui-drawer__modal').style.transform = 'translateX(100%)';
      domThis.style.opacity = 0;
      setTimeout(function () {
        domThis.style.display = 'none';
      }, 700);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('bmui-drawer bmui-mask', {
            active: this.state.boolVisible
          }),
          onClick: this.apiHide
        },
        _react2.default.createElement(
          'div',
          {
            onClick: function onClick(e) {
              e.stopPropagation();
            },
            className: 'bmui-drawer__modal'
          },
          this.props.children
        )
      );
    }
  }]);

  return Drawer;
}(_react.Component);

Drawer.propTypes = {
  children: _propTypes2.default.any,
  show: _propTypes2.default.bool,
  api: _propTypes2.default.func
};
exports.default = Drawer;