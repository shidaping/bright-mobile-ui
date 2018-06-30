'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _bmuiSelectContainer = require('../bmui-select-container');

var _bmuiSelectContainer2 = _interopRequireDefault(_bmuiSelectContainer);

var _bmuiSelectColumn = require('../bmui-select-column');

var _bmuiSelectColumn2 = _interopRequireDefault(_bmuiSelectColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BmuiSelect = function (_Component) {
  _inherits(BmuiSelect, _Component);

  function BmuiSelect(props) {
    _classCallCheck(this, BmuiSelect);

    var _this = _possibleConstructorReturn(this, (BmuiSelect.__proto__ || Object.getPrototypeOf(BmuiSelect)).call(this, props));

    _this.state = {
      boolVisible: false,
      children: null,
      selected: '',
      value: props.value
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

  _createClass(BmuiSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {}
  }, {
    key: 'apiShow',
    value: function apiShow() {
      this.apiBuiSelectContainerApi.apiShow();
      this.setState({
        value: this.props.value
      });
    }
  }, {
    key: 'apiHide',
    value: function apiHide() {
      this.apiBuiSelectContainerApi.apiHide();
      // this.setState({
      //   boolVisible: false,
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _bmuiSelectContainer2.default,
        {
          title: this.props.title,
          onOk: function onOk() {
            _this2.props.onChange(_this2.state.value);
          },
          api: function api(_api) {
            _this2.apiBuiSelectContainerApi = _api;
          }
        },
        _react2.default.createElement(_bmuiSelectColumn2.default, {
          options: this.props.options,
          value: this.state.value,
          onChange: function onChange(value, selected) {
            _this2.setState({
              value: value
            });
          }
        })
      );
    }
  }]);

  return BmuiSelect;
}(_react.Component);

BmuiSelect.propTypes = {
  show: _propTypes2.default.bool,
  api: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  title: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
BmuiSelect.defaultProps = {
  name: 'default name'
};
exports.default = BmuiSelect;