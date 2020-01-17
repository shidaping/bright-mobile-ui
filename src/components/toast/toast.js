import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Toast extends Component {
  static show(children, props) {
    let dom = document.getElementById('bmuiToast');
    if (dom) {
      document.body.removeChild(dom);
    }
    dom = document.createElement('div');
    dom.id = 'bmuiToast';
    document.body.appendChild(dom);
    let apiToast;
    ReactDOM.render(
      <Toast
        {...props}
        api={(api) => {
          apiToast = api;
        }}
      >
        {children}
      </Toast>,
      dom);
    apiToast.apiShow(children);
  }
  static success(children, props) {
    this.show(children, { ...props, type: 'success' });
  }
  static error(children, props){
    this.show(children, { ...props, type: 'error' });
  }
  static hide() {
    let dom = document.getElementById('bmuiToast');
    if (dom) {
      dom.parentElement.removeChild(dom);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      children: null,
    };
    this.apiShow = this.apiShow.bind(this);
    this.apiHide = this.apiHide.bind(this);
    if (this.props.api) {
      this.props.api({
        apiShow: this.apiShow,
        apiHide: this.apiHide,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.show !== this.state.show && nextProps.show) {
    //   this.apiShow(nextProps.children);
    // } else {
    //   this.apiHide();
    // }
    if (nextProps.show !== this.state.show) {
      this.setState({
        show: nextProps.show,
      });
    }
  }
  apiHide() {
    this.setState({
      show: false,
    });
  }
  apiShow(children) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState({
      show: true,
    });
    this.timeout = setTimeout(() => {
      this.setState({
        show: false,
      });
    }, this.props.timeout);
  }
  render() {
    return (
      <div>
        <div
          className="bmui-mask transparent"
          style={{
            display: this.state.show && !this.props.hideMask ? 'block' : 'none',
          }}
        />
        <div
          className={classnames('bmui-toast', {
            success: this.props.type === 'success',
            error: this.props.type === 'error',
          })}
          style={{
            display: this.state.show ? 'block' : 'none',
          }}
        >
          <div className="error-icon" />
          <div className="success-icon" />
          {this.props.children}
        </div>
      </div>
    );
  }
}
Toast.propTypes = {
  api: PropTypes.func,
  timeout: PropTypes.number,
  show: PropTypes.bool,
  hideMask: PropTypes.bool,
  type: PropTypes.string,
};
Toast.defaultProps = {
  api: () => {},
  show: false,
  timeout: 2000,
  hideMask: false,
  type: 'default',
};
export default Toast;
