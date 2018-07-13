'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BmuiConfirm = function (_Component) {
  _inherits(BmuiConfirm, _Component);

  _createClass(BmuiConfirm, null, [{
    key: 'show',
    value: function show(children, props) {
      var dom = document.getElementById('bmuiConfirm');
      if (dom) {
        document.body.removeChild(dom);
      }
      dom = document.createElement('div');
      dom.id = 'bmuiConfirm';
      document.body.appendChild(dom);
      var apiToast = void 0;
      _reactDom2.default.render(_react2.default.createElement(BmuiConfirm, _extends({}, props, {
        api: function api(_api) {
          apiToast = _api;
        }
      })), dom);
      setTimeout(function () {
        apiToast.apiShow(children);
      }, 100);
    }
  }, {
    key: 'hide',
    value: function hide() {
      var dom = document.getElementById('bmuiConfirm');
      if (dom) {
        dom.parentElement.removeChild(dom);
      }
    }
  }]);

  function BmuiConfirm(props) {
    _classCallCheck(this, BmuiConfirm);

    var _this = _possibleConstructorReturn(this, (BmuiConfirm.__proto__ || Object.getPrototypeOf(BmuiConfirm)).call(this, props));

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

  _createClass(BmuiConfirm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if (nextProps.show !== this.state.show && nextProps.show) {
      //   this.apiShow(nextProps.children);
      // } else {
      //   this.apiHide();
      // }
      // if (nextProps.show !== this.state.show) {
      //   this.setState({
      //     show: nextProps.show,
      //   });
      // }
    }
  }, {
    key: 'apiHide',
    value: function apiHide() {
      this.setState({
        show: false
      });
    }
  }, {
    key: 'apiShow',
    value: function apiShow(children) {
      this.setState({
        show: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'bmui-confirm-container' },
        _react2.default.createElement('div', {
          className: (0, _classnames2.default)('bmui-mask', {
            hide: !this.state.show
          })
        }),
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('bmui-confirm', {
              active: this.state.show
            })
            // style={{
            //   display: this.state.show ? 'block' : 'none',
            // }}
          },
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h2',
                null,
                this.props.title
              ),
              _react2.default.createElement(
                'p',
                null,
                this.props.content
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn-container' },
            this.props.showCancel ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  _this2.setState({
                    show: false
                  }, function () {
                    _this2.props.onCancel();
                  });
                },
                className: 'cancel'
              },
              this.props.cancelText
            ) : null,
            _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  _this2.setState({
                    show: false
                  }, function () {
                    _this2.props.onOk();
                  });
                },
                className: 'ok'
              },
              this.props.okText
            )
          )
        )
      );
    }
  }]);

  return BmuiConfirm;
}(_react.Component);

BmuiConfirm.propTypes = {
  api: _propTypes2.default.func,
  showCancel: _propTypes2.default.bool,
  cancelText: _propTypes2.default.string,
  okText: _propTypes2.default.string,
  title: _propTypes2.default.string,
  content: _propTypes2.default.stirng,
  onOk: _propTypes2.default.func,
  onCancel: _propTypes2.default.func
};

BmuiConfirm.defaultProps = {
  api: function api() {},
  hideMask: false,
  showCancel: true,
  cancelText: '取消',
  okText: '确定',
  title: '确定删除？',
  content: '删除后不可以恢复',
  onCancel: function onCancel() {},
  onOk: function onOk() {}
};
exports.default = BmuiConfirm;