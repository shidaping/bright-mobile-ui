import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.to) {
      return (
        <Link
          to={this.props.to}
          className={classnames('bmui-list__item', {
            'no-value': true,
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
        </Link>
      );
    }

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
  noValue: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.Node,
  to: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    // PropTypes.instanceOf(Date)
    PropTypes.node,
  ]),
  placeholder: PropTypes.string,
  hideRight: PropTypes.bool,
};
Item.defaultProps = {
  noValue: false,
  onClick: () => {},
  to: '',
  children: '',
  label: '名称',
  placeholder: '请选择',
  hideRight: false,
};
export default Item;
