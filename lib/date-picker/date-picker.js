'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _bmuiSelectContainer = require('../bmui-select-container');

var _bmuiSelectContainer2 = _interopRequireDefault(_bmuiSelectContainer);

var _bmuiSelectColumn = require('../bmui-select-column');

var _bmuiSelectColumn2 = _interopRequireDefault(_bmuiSelectColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import classnames from 'classnames';


var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    var nextValue = props.value;
    var dateMoment = (0, _moment2.default)(nextValue, _this.props.format);
    _this.state = {
      boolVisible: false,
      children: null,
      selected: '',
      value: props,
      year: dateMoment.year(),
      month: dateMoment.month() + 1,
      day: dateMoment.date(),
      hour: dateMoment.hour(),
      minute: dateMoment.minute(),
      seconds: dateMoment.seconds()
    };
    _this.apiShow = _this.apiShow.bind(_this);
    _this.apiHide = _this.apiHide.bind(_this);
    _this.changeValue = _this.changeValue.bind(_this);
    _this.getMaxDay = _this.getMaxDay.bind(_this);
    if (_this.props.api) {
      _this.props.api({
        apiShow: _this.apiShow,
        apiHide: _this.apiHide
      });
    }
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value) {
        var nextValue = nextProps.value;
        var dateMoment = (0, _moment2.default)(nextValue, this.props.format);
        this.setState({
          value: nextProps.value,
          year: dateMoment.year(),
          month: dateMoment.month() + 1,
          day: dateMoment.date(),
          hour: dateMoment.hour(),
          minute: dateMoment.minute(),
          seconds: dateMoment.seconds()
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {}
    // 计算一个月最大有多少天

  }, {
    key: 'getMaxDay',
    value: function getMaxDay() {
      var maxDay = 31;
      switch (this.state.month) {
        case 4:
        case 6:
        case 9:
        case 11:
          {
            maxDay = 30;
            break;
          }
        default:
          break;
      }
      if (this.state.month === 2) {
        if (this.state.year % 4 === 0 && this.state.year % 100 !== 0) {
          maxDay = 29;
        } else if (this.state.year % 400 === 0 && this.state.year % 100 === 0) {
          maxDay = 29;
        } else {
          maxDay = 28;
        }
      }
      return maxDay;
    }
  }, {
    key: 'apiShow',
    value: function apiShow() {
      this.apiBuiSelectContainerApi.apiShow();
      var nextValue = this.props.value;
      var dateMoment = (0, _moment2.default)(nextValue, this.props.format);
      this.setState({
        boolVisible: true,
        value: nextValue,
        year: dateMoment.year(),
        month: dateMoment.month() + 1,
        day: dateMoment.date(),
        hour: dateMoment.hour(),
        minute: dateMoment.minute(),
        seconds: dateMoment.seconds()
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
    key: 'changeValue',
    value: function changeValue() {
      var dateMoment = (0, _moment2.default)();
      dateMoment.year(this.state.year);
      dateMoment.month(this.state.month - 1);
      dateMoment.date(this.state.day);
      dateMoment.hour(this.state.hour);
      dateMoment.minute(this.state.minute);
      dateMoment.seconds(this.state.seconds);
      this.setState({
        value: dateMoment.format(this.props.format)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var yearOptions = [];
      var monthOptions = [];
      var dayOptions = [];
      for (var i = this.props.minYear; i < this.props.maxYear; i += 1) {
        var o = {
          text: i + '\u5E74',
          value: i
        };
        yearOptions.push(o);
      }
      var minuteOptions = [];
      var hourOptions = [];
      var secondsOptions = [];

      for (var _i = 0; _i < 60; _i += 1) {
        var _o = {
          text: _i + '\u5206',
          value: _i
        };
        minuteOptions.push(_o);
      }
      for (var _i2 = 0; _i2 < 60; _i2 += 1) {
        var _o2 = {
          text: _i2 + '\u79D2',
          value: _i2
        };
        secondsOptions.push(_o2);
      }
      for (var _i3 = 0; _i3 < 24; _i3 += 1) {
        var _o3 = {
          text: _i3 + '\u65F6',
          value: _i3
        };
        hourOptions.push(_o3);
      }
      for (var _i4 = 1; _i4 < this.getMaxDay() + 1; _i4 += 1) {
        var _o4 = {
          text: _i4 + '\u65E5',
          value: _i4
        };
        dayOptions.push(_o4);
      }
      for (var _i5 = 1; _i5 < 13; _i5 += 1) {
        var _o5 = {
          text: _i5 + '\u6708',
          value: _i5
        };
        monthOptions.push(_o5);
      }

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
        this.props.showColumnYear ? _react2.default.createElement(_bmuiSelectColumn2.default, {
          options: yearOptions,
          value: this.state.year,
          onChange: function onChange(value) {
            _this2.setState({
              year: value
            }, function () {
              var day = _this2.state.day;
              var maxDay = _this2.getMaxDay();
              if (maxDay < _this2.state.day) {
                day = maxDay;
              }
              _this2.setState({
                day: day
              });
              _this2.changeValue();
            });
          }
        }) : null,
        this.props.showColumnMonth ? _react2.default.createElement(_bmuiSelectColumn2.default, {
          options: monthOptions,
          value: this.state.month,
          onChange: function onChange(value) {
            _this2.setState({
              month: value
            }, function () {
              var day = _this2.state.day;
              var maxDay = _this2.getMaxDay();
              if (maxDay < _this2.state.day) {
                day = maxDay;
              }
              _this2.setState({
                day: day
              });
              _this2.changeValue();
            });
          }
        }) : null,
        this.props.showColumnDay ? _react2.default.createElement(_bmuiSelectColumn2.default, {
          options: dayOptions,
          value: this.state.day,
          onChange: function onChange(value) {
            _this2.setState({
              day: value
            }, function () {
              _this2.changeValue();
            });
          }
        }) : null,
        this.props.showColumnHour ? _react2.default.createElement(_bmuiSelectColumn2.default, {
          options: hourOptions,
          value: this.state.hour,
          onChange: function onChange(value) {
            _this2.setState({
              hour: value
            }, function () {
              _this2.changeValue();
            });
          }
        }) : null,
        this.props.showColumnMinute ? _react2.default.createElement(_bmuiSelectColumn2.default, {
          options: minuteOptions,
          value: this.state.minute,
          onChange: function onChange(value) {
            _this2.setState({
              minute: value
            }, function () {
              _this2.changeValue();
            });
          }
        }) : null,
        this.props.showColumnSeconds ? _react2.default.createElement(_bmuiSelectColumn2.default, {
          options: secondsOptions,
          value: this.state.seconds,
          onChange: function onChange(value) {
            _this2.setState({
              seconds: value
            }, function () {
              _this2.changeValue();
            });
          }
        }) : null
      );
    }
  }]);

  return DatePicker;
}(_react.Component);

DatePicker.propTypes = {
  format: _propTypes2.default.string,
  showColumnYear: _propTypes2.default.bool,
  showColumnMonth: _propTypes2.default.bool,
  showColumnDay: _propTypes2.default.bool,
  showColumnHour: _propTypes2.default.bool,
  showColumnMinute: _propTypes2.default.bool,
  showColumnSeconds: _propTypes2.default.bool,
  minYear: _propTypes2.default.number,
  maxYear: _propTypes2.default.number,
  api: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  title: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
DatePicker.defaultProps = {
  format: 'YYYY-MM-DD HH:mm:ss',
  showColumnYear: true,
  showColumnMonth: true,
  showColumnDay: true,
  showColumnHour: true,
  showColumnMinute: true,
  showColumnSeconds: true,
  minYear: 1970,
  maxYear: 2040,
  title: '选择日期',
  showTime: true,
  name: 'default name',
  onChange: function onChange() {},
  api: function api() {},
  value: ''
};
exports.default = DatePicker;