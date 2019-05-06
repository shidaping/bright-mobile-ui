'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _bmuiSelectContainer = require('../bmui-select-container');

var _bmuiSelectContainer2 = _interopRequireDefault(_bmuiSelectContainer);

var _bmuiSelectColumn = require('../bmui-select-column');

var _bmuiSelectColumn2 = _interopRequireDefault(_bmuiSelectColumn);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultValue = {
  provinceCode: '11',
  provinceName: '北京市',
  cityCode: '1101',
  cityName: '市辖区',
  areaCode: '110101',
  areaName: '东城区'
};

var AddressPicker = function (_Component) {
  _inherits(AddressPicker, _Component);

  function AddressPicker(props) {
    _classCallCheck(this, AddressPicker);

    var _this = _possibleConstructorReturn(this, (AddressPicker.__proto__ || Object.getPrototypeOf(AddressPicker)).call(this, props));

    _this.state = {
      boolVisible: false,
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

  _createClass(AddressPicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ((0, _isEqual2.default)(nextProps.value, this.state.value)) {
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
    value: function apiShow(value) {
      this.apiBuiSelectContainerApi.apiShow();
      this.setState({
        value: value || defaultValue
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

      var selectedProvince = _data2.default.find(function (item) {
        return item.code === _this2.state.value.provinceCode;
      }) || _data2.default[0];
      var optionsCity = selectedProvince.children || [];
      var selectedCity = optionsCity.find(function (item) {
        return item.code === _this2.state.value.cityCode;
      });
      var optionsArea = selectedCity.children || [];
      return _react2.default.createElement(
        _bmuiSelectContainer2.default,
        {
          title: this.props.title,
          onOk: function onOk() {
            _this2.props.onOk(_this2.state.value);
          },
          api: function api(_api) {
            _this2.apiBuiSelectContainerApi = _api;
          }
        },
        _react2.default.createElement(_bmuiSelectColumn2.default, {
          options: _data2.default,
          valueField: 'code',
          textField: 'name',
          value: this.state.value.provinceCode,
          onChange: function onChange(value, item) {
            var newValue = {
              provinceCode: value,
              provinceName: item.name,
              cityCode: item.children[0].code,
              cityName: item.children[0].name,
              areaCode: item.children[0].children[0].code,
              areaName: item.children[0].children[0].name
            };
            _this2.setState({
              value: newValue
            }, function () {
              _this2.props.onChange(newValue);
            });
          }
        }),
        _react2.default.createElement(_bmuiSelectColumn2.default, {
          options: optionsCity,
          valueField: 'code',
          textField: 'name',
          value: this.state.value.cityCode,
          onChange: function onChange(value, item) {
            var newValue = _extends({}, _this2.state.value, {
              cityCode: item.code,
              cityName: item.name,
              areaCode: item.children[0].code,
              areaName: item.children[0].name
            });
            _this2.setState({
              value: newValue
            }, function () {
              _this2.props.onChange(newValue);
            });
          }
        }),
        _react2.default.createElement(_bmuiSelectColumn2.default, {
          options: optionsArea,
          valueField: 'code',
          textField: 'name',
          value: this.state.value.areaCode,
          onChange: function onChange(value, item) {
            var newValue = _extends({}, _this2.state.value, {
              areaCode: item.code,
              areaName: item.name
            });
            _this2.setState({
              value: newValue
            }, function () {
              _this2.props.onChange(newValue);
            });
          }
        })
      );
    }
  }]);

  return AddressPicker;
}(_react.Component);

AddressPicker.propTypes = {
  api: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onOk: _propTypes2.default.func,
  title: _propTypes2.default.string,
  value: _propTypes2.default.object

};
AddressPicker.defaultProps = {
  title: '请选择地区',
  onChange: function onChange() {},
  onOk: function onOk() {},
  api: function api() {},
  value: defaultValue
};
AddressPicker.defaultValue = defaultValue;
AddressPicker.data = _data2.default;
exports.default = AddressPicker;