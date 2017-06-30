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

require('./bui-select-column.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BuiSelectColumn = function (_Component) {
  _inherits(BuiSelectColumn, _Component);

  function BuiSelectColumn(props) {
    _classCallCheck(this, BuiSelectColumn);

    var _this = _possibleConstructorReturn(this, (BuiSelectColumn.__proto__ || Object.getPrototypeOf(BuiSelectColumn)).call(this, props));

    var options = [];
    for (var i = 0; i < 400; i++) {
      options.push({
        text: i,
        value: i
      });
    }
    _this.state = {
      show: false,
      children: null,
      rotate: 0,
      options: options
    };
    _this.apiShow = _this.apiShow.bind(_this);
    _this.onTouchMove = _this.onTouchMove.bind(_this);
    _this.onTouchStart = _this.onTouchStart.bind(_this);
    _this.onTouchEnd = _this.onTouchEnd.bind(_this);
    _this.rotate = 0;
    if (_this.props.api) {
      _this.props.api({
        apiShow: _this.apiShow,
        apiHide: _this.apiHide
      });
    }
    return _this;
  }

  _createClass(BuiSelectColumn, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show !== this.state.show) {
        this.setState({
          show: nextProps.show
        });
      }
    }
  }, {
    key: 'apiShow',
    value: function apiShow() {
      this.setState({
        show: true
      });
    }
  }, {
    key: 'apiHide',
    value: function apiHide() {
      this.setState({
        show: false
      });
    }
  }, {
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      var domThis = _reactDom2.default.findDOMNode(this);
      this.startTime = new Date();
      this.touch = e.touches[0];
      console.log(e.touches[0]);
      console.log('---------');
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {
      var domThis = _reactDom2.default.findDOMNode(this);
      var domMain = domThis.querySelector('.bui-select-column');
      var gap = e.touches[0].screenY - this.touch.screenY;
      console.log(e.touches[0]);
      console.log(gap);
      this.rotate += gap / 40;
      domMain.style.transform = 'translateY(' + this.rotate + 'rem)';
    }
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {
      var domThis = _reactDom2.default.findDOMNode(this);
      var now = new Date();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'bui-select-column-container' },
        _react2.default.createElement(
          'ul',
          {
            className: 'bui-select-column',
            onTouchMove: this.onTouchMove,
            onTouchStart: this.onTouchStart,
            onTouchEnd: this.onTouchEnd
          },
          this.state.options.map(function (item, i) {
            return _react2.default.createElement(
              'li',
              { key: i, style: { transform: 'rotateX( ' + 180 / _this2.state.options.length * i + 'deg)' } },
              item.text
            );
          })
        )
      );
    }
  }]);

  return BuiSelectColumn;
}(_react.Component);

BuiSelectColumn.propTypes = {
  children: _propTypes2.default.any,
  show: _propTypes2.default.bool,
  api: _propTypes2.default.func
};
exports.default = BuiSelectColumn;