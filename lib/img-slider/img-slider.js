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
      index: 0,
      transition: true
    };
    _this.onTouchStart = _this.onTouchStart.bind(_this);
    _this.onTouchMove = _this.onTouchMove.bind(_this);
    _this.onTouchEnd = _this.onTouchEnd.bind(_this);
    return _this;
  }

  _createClass(ImgSlider, [{
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      this.touchStartX = e.touches[0] ? e.touches[0].pageX : 0;
      // e.preventDefault();
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {
      // let domThis = ReactDOM.findDOMNode(this);
      // let domContent = domThis.querySelector('.content');
      // domContent.style.transition = '';
      // let gap = e.touches[0].screenX - this.touchLast.screenX;
      // this.translateX = this.translateX + gap;
      // // console.log(gap);
      // domContent.style.transform = `translateX(${this.translateX}px)`;
      // // console.log(domContent.style.transform);
      // this.touchLast = e.touches[0];
      // e.preventDefault();
    }
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {
      this.touchEndX = e.changedTouches[0] ? e.changedTouches[0].pageX : 0;
      var deltaX = this.touchEndX - this.touchStartX;
      // let newIndex = this.state.index;
      // console.log(deltaX, "++++++++");

      // if (this.touchEnd.screenX > this.touchStart.screenX && index<this.props.items.length - 1) {
      //   nexIndex = this.state.index;
      // }


      // const reset = () => {
      //   if (this.state.index === 0) {
      //     this.setState({
      //       transition: false,
      //     }, () => {
      //       setTimeout(() => {
      //         this.setState({
      //           index: this.props.items.length,
      //         });
      //       }, 50);
      //     });
      //   }

      //   if (this.state.index === this.props.items.length + 1) {
      //     this.setState({
      //       transition: false,
      //     }, () => {
      //       setTimeout(() => {
      //         this.setState({
      //           index: 1,
      //         });
      //       }, 50);
      //     });
      //   }
      // };

      if (deltaX > 30 && this.state.index > 0) {
        this.setState({
          index: this.state.index - 1
        });
      }
      if (deltaX < -30 && this.state.index < this.props.items.length - 1) {
        this.setState({
          index: this.state.index + 1
        });
      }

      // 向左
      // if (deltaX > 50) {
      //   this.setState({
      //     transition: true,
      //   }, () => {
      //     this.setState({
      //       index: newIndex - 1,
      //     }, () => {
      //       setTimeout(reset, 600);
      //     });
      //   });
      // }

      // 向右
      //   if (deltaX < -50) {
      //     this.setState({
      //       transition: true,
      //     }, () => {
      //       this.setState({
      //         index: newIndex + 1,
      //       }, () => {
      //         setTimeout(reset, 600);
      //       });
      //     });

      //   }
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
          }),
          style: {
            width: this.props.width,
            height: this.props.height
          }
        },
        _react2.default.createElement(
          'div',
          {
            onTouchStart: this.onTouchStart,
            onTouchMove: this.onTouchMove,
            onTouchEnd: this.onTouchEnd,
            className: 'content',
            style: {
              transform: 'translateX(-' + 100 * this.state.index + '%)',
              // transition: this.state.transition ? this.transition
              transition: this.state.transition ? 'all .5s ease' : null
            }
          },
          this.props.items.map(function (item, i) {
            return _react2.default.createElement(
              'section',
              {
                onClick: function onClick(e) {
                  _this2.props.onItemClick(item, e);
                },
                key: i
              },
              _react2.default.createElement('img', {
                onClick: function onClick(e) {
                  if (_this2.props.disableImgClick) {
                    e.preventDefault();
                  }
                },
                src: item,
                alt: ''
              })
            );
          })
        ),
        this.props.showBubble ? _react2.default.createElement(
          'ul',
          { className: 'bubble-list clearfix' },
          this.props.items.map(function (item, i) {
            return _react2.default.createElement('li', {
              className: (0, _classnames2.default)('pull-left', {
                active: _this2.state.index === i
              }),
              key: i
            });
          })
        ) : null
      );
    }
  }]);

  return ImgSlider;
}(_react.Component);

ImgSlider.propTypes = {
  show: _propTypes2.default.bool,
  items: _propTypes2.default.array,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  onItemClick: _propTypes2.default.func,
  theme: _propTypes2.default.string,
  showBubble: _propTypes2.default.bool,
  disableImgClick: _propTypes2.default.bool
};

ImgSlider.defaultProps = {
  show: false,
  items: [],
  width: '100vw',
  height: '50vw',
  theme: 'orange',
  onItemClick: function onItemClick() {},
  showBubble: true,
  disableImgClick: false
};

exports.default = ImgSlider;