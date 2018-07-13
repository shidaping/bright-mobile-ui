'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function Switch(props) {
  return _react2.default.createElement('input', { type: 'checkbox', className: 'bmui-switch', checked: props.checked, onChange: props.onChange });
};

Switch.propTypes = {
  checked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func
};
Switch.defaultProps = {
  checked: false,
  onChange: function onChange() {}
};
exports.default = Switch;