import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Radio extends Component {
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
        className={classnames('bmui-radio', {
          active: this.state.active,
        })}
      >
        <span className="check" />
      </button>
    );
  }
}

Radio.propTypes = {
  active: PropTypes.bool,
};

Radio.defaultProps = {
  active: false,
};

export default Radio;
