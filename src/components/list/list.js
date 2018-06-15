import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      children: null,
    };
  }
  render() {
    return (
      <ul className="bmui-list">
        {this.props.children}
      </ul>
    );
  }
}
List.propTypes = {
  children: PropTypes.node,
};
List.defaultProps = {
  children: '',
};
export default List;
