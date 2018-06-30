'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImgSlider = function (_Component) {
  _inherits(ImgSlider, _Component);

  function ImgSlider(props) {
    _classCallCheck(this, ImgSlider);

    var _this = _possibleConstructorReturn(this, (ImgSlider.__proto__ || Object.getPrototypeOf(ImgSlider)).call(this, props));

    _this.state = {
      index: 0
    };
    _this.translateX = 0;
    _this.onTouchStart = _this.onTouchStart.bind(_this);
    _this.onTouchMove = _this.onTouchMove.bind(_this);
    _this.onTouchEnd = _this.onTouchEnd.bind(_this);
    return _this;
  }

  _createClass(ImgSlider, [{
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      this.touchStart = e.touches[0];
      this.touchLast = e.touches[0];
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {
      var domThis = _reactDom2.default.findDOMNode(this);
      var domContent = domThis.querySelector('.content');
      domContent.style.transition = '';
      var gap = e.touches[0].screenX - this.touchLast.screenX;
      this.translateX = this.translateX + gap;
      // console.log(gap);
      domContent.style.transform = 'translateX(' + this.translateX + 'px)';
      // console.log(domContent.style.transform);
      this.touchLast = e.touches[0];
    }
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {
      this.touchEnd = e.touches[0];
      var newIndex = void 0;
      if (this.touchEnd.screenX > this.touchStart.screenX && index < this.props.items.length - 1) {
        nexIndex = this.state.index;
      }
    }
    // componentWillReceiveProps(nextProps) {

    // }

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('bmui-img-slider', {
            hide: this.props.show
          })
        },
        _react2.default.createElement(
          'div',
          { className: 'content' },
          this.props.items.map(function (item, i) {
            return _react2.default.createElement(
              'section',
              {
                onTouchStart: _this2.onTouchStart,
                onTouchMove: _this2.onTouchMove,
                onTouchEnd: _this2.onTouchEnd,
                key: i
              },
              _react2.default.createElement('img', {
                src: item.src,
                alt: ''
              })
            );
          })
        )
      );
    }
  }]);

  return ImgSlider;
}(_react.Component);

ImgSlider.propTypes = {
  show: _propTypes2.default.bool,
  items: _propTypes2.default.array
};

ImgSlider.defaultProps = {
  show: false,
  items: []
};

exports.default = ImgSlider;