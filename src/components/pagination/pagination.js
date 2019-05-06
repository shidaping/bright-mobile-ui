import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


class Pagination extends Component {
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
      <div
        className={classnames('bmui-pagination', {
          active: this.state.active,
        })}
      >
        <span className="check" />
      </div>
    );
  }
}

Pagination.propTypes = {
  active: PropTypes.bool,
};

Pagination.defaultProps = {
  active: false,
};

export default Pagination;
