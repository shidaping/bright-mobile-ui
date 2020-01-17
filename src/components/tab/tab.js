import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; 

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  render() {
    let left = 0;
    this.props.options.forEach((item, i) => {
      if (item.value === this.state.value) {
        left = `${(100 / this.props.options.length) * i}%`;
      }
    });
    return (
      <div
        className="bmui-tab"
      >
        {this.props.options.map(item => (
          <section
            className={classnames('', {
              active: item.value === this.state.value,
            })}
            key={item.value}
            onClick={() => {
              this.props.onChange(item.value);
            }}
          >
            {item.text}
          </section>
        ))}
        <div
          className="slide"
          style={{
            width: `${100 / this.props.options.length}%`,
            left: left,
          }}
        />
      </div>
    );
  }
}

Tab.propTypes = {
  value: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array,
  onChange: PropTypes.func,
};

Tab.defaultProps = {
  value: '',
  options: [{
    text: 'abc',
    value: 0,
  }],
  onChange: () => {},
};

export default Tab;
