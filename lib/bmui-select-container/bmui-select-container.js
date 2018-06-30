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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BmuiSelectContainer = function (_Component) {
  _inherits(BmuiSelectContainer, _Component);

  function BmuiSelectContainer(props) {
    _classCallCheck(this, BmuiSelectContainer);

    var _this = _possibleConstructorReturn(this, (BmuiSelectContainer.__proto__ || Object.getPrototypeOf(BmuiSelectContainer)).call(this, props));

    _this.state = {
      boolVisible: false,
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

  _createClass(BmuiSelectContainer, [{
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
        domThis.querySelector('.bmui-select-container__modal').style.transform = 'translateY(0)';
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
      domThis.querySelector('.bmui-select-container__modal').style.transform = 'translateY(100%)';
      domThis.style.opacity = 0;
      setTimeout(function () {
        domThis.style.display = 'none';
      }, 700);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('bmui-select-container bmui-mask', {
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
            className: 'bmui-select-container__modal'
          },
          _react2.default.createElement(
            'div',
            { className: 'bmui-select-container__head' },
            _react2.default.createElement(
              'div',
              {
                onClick: function onClick() {
                  _this2.apiHide();
                  _this2.props.onCancel();
                },
                className: 'col1'
              },
              '\u53D6\u6D88'
            ),
            _react2.default.createElement(
              'div',
              { className: 'col2' },
              this.props.title
            ),
            _react2.default.createElement(
              'div',
              {
                onClick: function onClick() {
                  _this2.apiHide();
                  _this2.props.onOk();
                },
                className: 'col3'
              },
              '\u786E\u5B9A'
            )
          ),
          _react2.default.createElement(
            'div',
            {
              style: {
                height: this.props.contentHeight
              },
              className: 'bmui-select-container__content'
            },
            this.props.children
          )
        )
      );
    }
  }]);

  return BmuiSelectContainer;
}(_react.Component);

BmuiSelectContainer.propTypes = {
  children: _propTypes2.default.node,
  api: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  onOk: _propTypes2.default.func,
  title: _propTypes2.default.string,
  contentHeight: _propTypes2.default.number
};
BmuiSelectContainer.defaultProps = {
  name: 'default name',
  children: null,
  title: '',
  contentHeight: 210,
  onCancel: function onCancel() {},
  onOk: function onOk() {},
  api: function api() {}
};
exports.default = BmuiSelectContainer;