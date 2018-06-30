'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      console.log(this.props.children);
      return _react2.default.createElement(
        'li',
        {
          onClick: this.props.onClick,
          className: (0, _classnames2.default)('bmui-list__item', {
            'no-value': this.props.noValue
          })
        },
        _react2.default.createElement(
          'div',
          { className: 'col1' },
          this.props.label
        ),
        _react2.default.createElement(
          'div',
          { className: 'col2' },
          this.props.children ? this.props.children : _react2.default.createElement(
            'span',
            { className: 'placeholder' },
            this.props.placeholder
          )
        ),
        _react2.default.createElement('div', {
          className: (0, _classnames2.default)('col3', {
            invisible: this.props.hideRight
          })
        })
      );
    }
  }]);

  return Item;
}(_react.Component);

Item.propTypes = {
  noValue: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.Node,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string,
  // PropTypes.instanceOf(Date)
  _propTypes2.default.Node]),
  placeholder: _propTypes2.default.string,
  hideRight: _propTypes2.default.bool
};
Item.defaultProps = {
  noValue: false,
  onClick: function onClick() {},
  children: '',
  label: '名称',
  placeholder: '请选择',
  hideRight: false
};
exports.default = Item;