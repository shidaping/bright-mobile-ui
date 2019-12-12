import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.onAdd = this.onAdd.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  onMinus() {
    const { value } = this.state;
    const newValue = value - this.props.step;
    this.setState({
      value: newValue,
    }, () => {
      this.props.onChange(newValue);
    });
  }
  onAdd() {
    const { value } = this.state;
    const newValue = value + this.props.step;
    this.setState({
      value: newValue,
    }, () => {
      this.props.onChange(newValue);
    });
  }
  render() {
    return (
      <div
        className={classnames('bmui-stepper', {
          active: this.state.active,
        })}
      >
        <button
          onClick={this.onMinus}
          disabled={this.props.disabled || this.state.value <= this.props.min}
        >-</button>
        <input
          value={this.state.value}
          onChange={(e) => {
            const targetValue = e.target.value;
            let value = 0;
            if (targetValue && !isNaN(targetValue)) {
              value = parseFloat(targetValue, 10);
            }
            this.props.onChange(value);
            // });
          }}
        />
        <button
          onClick={this.onAdd}
          disabled={this.props.disabled || this.state.value >= this.props.max }
        >+</button>
      </div>
    );
  }
}

Stepper.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,

};

Stepper.defaultProps = {
  disabled: false,
  max: 100,
  min: 0,
  value: 0,
  step: 1,
  onChange: () => {},
};

export default Stepper;
