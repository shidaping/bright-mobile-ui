import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li
        onClick={this.props.onClick}
        className={classnames('bmui-list__item', {
          'no-value': this.props.noValue,
        })}
      >
        <div className="col1">{this.props.label}</div>
        <div className="col2">
          {this.props.children ? this.props.children : (
            <span className="placeholder">{this.props.placeholder}</span>
          )}
        </div>
        <div
          className={classnames('col3', {
            invisible: this.props.hideRight,
          })}
        />
      </li>
    );
  }
}
Item.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.Node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  hideRight: PropTypes.bool,
};
Item.defaultProps = {
  onClick: () => {},
  children: '',
  label: '名称',
  placeholder: '请选择',
  hideRight: false,
};
export default Item;
