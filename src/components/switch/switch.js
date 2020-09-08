import React from 'react';
import PropTypes from 'prop-types';

const Switch = (props) => (
  <input
    type="checkbox"
    className="bmui-switch"
    checked={props.checked}
    onChange={props.onChange}
  />
);

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  checked: false,
  onChange: () => {},
};
export default Switch;
