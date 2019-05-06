import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Loading extends Component {
  static show(children) {
    let dom = document.getElementById('bmuiLoading');
    if (dom) {
      document.body.removeChild(dom);
    }
    dom = document.createElement('div');
    dom.id = 'bmuiLoading';
    document.body.appendChild(dom);
    let apiToast;
    ReactDOM.render(
      <Loading
        api={(api) => {
          apiToast = api;
        }}
      >
        {children}
      </Loading>,
      dom);
    apiToast.apiShow(children);
  }
  static hide() {
    let dom = document.getElementById('bmuiLoading');
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
    if (this.props.api) {
      this.props.api({
        apiShow: this.apiShow,
        apiHide: this.apiHide,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({
        show: nextProps.show,
      });
    }
  }
  apiShow() {
    this.setState({
      show: true,
    });
  }
  apiHide() {
    this.setState({
      show: false,
    });
  }
  render() {
    return (
      <div
        className="bmui-loading-mask"
        style={{
          display: this.state.show ? 'block' : 'none',
        }}
      >
        <div
          className="bmui-loading"
        >
          <span className="bmui-loading__spiner" />
          {this.state.children}
        </div>
      </div>
    );
  }
}
Loading.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  api: PropTypes.func,
};
export default Loading;
