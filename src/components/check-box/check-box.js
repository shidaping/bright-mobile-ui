import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.state.active) {
      this.setState({
        active: nextProps.active,
      });
    }
  }
  render() {
    return (
      <button
        className={classnames('bmui-check-box', {
          active: this.state.active,
        })}
      >
        <span className="check" />
      </button>
    );
  }
}

CheckBox.propTypes = {
  active: PropTypes.bool,
};

CheckBox.defaultProps = {
  active: false,
};

export default CheckBox;
