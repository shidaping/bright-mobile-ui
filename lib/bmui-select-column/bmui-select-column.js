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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './bmui-select-column.less';


var BuiSelectColumn = function (_Component) {
  _inherits(BuiSelectColumn, _Component);

  function BuiSelectColumn(props) {
    _classCallCheck(this, BuiSelectColumn);

    // const options = [];
    // for(let i =0; i < 100; i++){
    //   options.push({
    //     text: i,
    //     value: i,
    //   })
    // }
    var _this = _possibleConstructorReturn(this, (BuiSelectColumn.__proto__ || Object.getPrototypeOf(BuiSelectColumn)).call(this, props));

    var options = props.options || [];
    var value = props.value;
    var index = 0;
    var selected = void 0;
    options.forEach(function (item, i) {
      if (item[props.valueField] === value) {
        selected = item;
        index = i;
      }
    });
    _this.translateY = -(index * 30);
    _this.state = {
      show: false,
      children: null,
      rotate: 0,
      options: props.options || [],
      selected: selected,
      index: index
    };
    // this.apiShow = this.apiShow.bind(this);
    _this.onTouchMove = _this.onTouchMove.bind(_this);
    _this.onTouchStart = _this.onTouchStart.bind(_this);
    _this.onTouchEnd = _this.onTouchEnd.bind(_this);
    // this.rotate = 0;
    // if (this.props.api) {
    //   this.props.api({
    //     apiShow: this.apiShow,
    //     apiHide: this.apiHide,
    //   });
    // }
    return _this;
  }

  _createClass(BuiSelectColumn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // let domThis = ReactDOM.findDOMNode(this);
      // let domContent = domThis.querySelector('.bmui-select-column__content');
      // domContent.style.transition = '';
      // this.translateY = -(30 * this.state.index);
      // // console.log(gap);
      // domContent.style.transform = `translateY(${this.translateY}px)`;
      // console.log(domContent.style.transform);
      // this.touchLast = e.touches[0];
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if (nextProps.show !== this.state.show) {
      //   this.setState({
      //     show: nextProps.show,
      //   });
      // }
      // console.log(nextProps.value);
      if (nextProps.value !== this.state.value || !_lodash2.default.isEqual(nextProps.options, this.state.options)) {
        var options = nextProps.options || [];
        var value = nextProps.value;
        var index = 0;
        var selected = void 0;
        options.forEach(function (item, i) {
          if (item[nextProps.valueField] === value) {
            selected = item;
            index = i;
          }
        });

        // let domThis = ReactDOM.findDOMNode(this);
        // let domContent = domThis.querySelector('.bmui-select-column__content');
        // domContent.style.transition = '';
        // this.translateY = -(30 * index);
        // // console.log(gap);
        // domContent.style.transform = `translateY(${this.translateY}px)`;
        // console.log(index, '-------------');
        this.translateY = -(index * 30);
        this.setState({
          selected: selected,
          index: index,
          value: value,
          options: nextProps.options
        });
      }
    }
    // apiShow() {
    //   this.setState({
    //     show: true,
    //   });
    // }
    // apiHide() {
    //   this.setState({
    //     show: false,
    //   });
    // }

  }, {
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      // let domThis = ReactDOM.findDOMNode(this);
      this.startTime = new Date();
      this.touchStart = e.touches[0];
      this.touchLast = e.touches[0];
      this.translateYStart = this.translateY;

      // console.log(e.touches[0]);
      // console.log('---------');
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {
      // console.log('asdfsdafasd');
      var domThis = _reactDom2.default.findDOMNode(this);
      var domContent = domThis.querySelector('.bmui-select-column__content');
      domContent.style.transition = '';
      var gap = e.touches[0].screenY - this.touchLast.screenY;
      this.translateY = this.translateY + gap;
      // console.log(gap);
      domContent.style.transform = 'translateY(' + this.translateY + 'px)';
      // console.log(domContent.style.transform);
      this.touchLast = e.touches[0];
      // console.log(e.touches[0]);
      // console.log(gap);
    }
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {
      var domThis = _reactDom2.default.findDOMNode(this);
      var domContent = domThis.querySelector('.bmui-select-column__content');
      var now = new Date();
      var index = void 0;
      // const touchEnd = e.touches[0];
      // const touchStart = this.touchStart;
      var translateYStart = this.translateYStart;
      var translateYEnd = this.translateY;
      var options = this.state.options;

      domContent.style.transition = 'all ease .5s';
      // console.log((translateYEnd - translateYStart) / (now.getTime() - this.startTime.getTime()), '======');

      if (Math.abs((translateYEnd - translateYStart) / (now.getTime() - this.startTime.getTime())) > 0.5) {
        this.translateY = this.translateY + (translateYEnd - translateYStart) * 2;
        domContent.style.transform = 'translateY(' + this.translateY + 'px)';
      }
      if (this.translateY > 0) {
        this.translateY = 0;
        domContent.style.transform = 'translateY(0px)';
        index = 0;
      } else if (this.translateY + 30 * options.length < 0) {
        this.translateY = 30 - 30 * options.length;
        domContent.style.transform = 'translateY(' + this.translateY + 'px)';
        index = options.length - 1;
      } else {
        var int = parseInt(this.translateY, 10);
        var left = Math.abs(int) % 30;
        // console.log('++++',left);
        if (left > 15 && Math.abs(int) < 30 * options.length - 15) {
          this.translateY = int - 30 + left;
        } else {
          this.translateY = int + left;
        }
        // console.log(int);
        // console.log('-----',this.translateY);
        domContent.style.transform = 'translateY(' + this.translateY + 'px)';
        index = parseInt(Math.abs(this.translateY) / 30, 10);
      }
      var selected = options[index] || options[0];
      var value = selected[this.props.valueField];
      this.setState({
        selected: selected,
        value: value,
        index: index
      });
      this.props.onChange(value, selected);
      // console.log(this.state.options[index]);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var translateY = -(this.state.index * 30);
      return _react2.default.createElement(
        'div',
        { className: 'bmui-select-column' },
        _react2.default.createElement(
          'ul',
          {
            className: 'bmui-select-column__content',
            style: {
              transform: 'translateY(' + translateY + 'px)'
            }
          },
          this.state.options.map(function (item) {
            return _react2.default.createElement(
              'li',
              { key: item[_this2.props.valueField] },
              item[_this2.props.textField]
            );
          })
        ),
        _react2.default.createElement('div', {
          onTouchMove: this.onTouchMove,
          onTouchStart: this.onTouchStart,
          onTouchEnd: this.onTouchEnd,
          className: 'bmui-select-column__mask'
        })
      );
    }
  }]);

  return BuiSelectColumn;
}(_react.Component);

BuiSelectColumn.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.Object),
  textField: _propTypes2.default.string,
  valueField: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
BuiSelectColumn.defaultProps = {
  textField: 'text',
  valueField: 'value',
  options: [],
  onChange: function onChange() {},
  value: null
};
exports.default = BuiSelectColumn;