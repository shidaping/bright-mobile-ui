import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class BmuiConfirm extends Component {
  static show(props) {
    let dom = document.getElementById('bmuiConfirm');
    if (dom) {
      document.body.removeChild(dom);
    }
    dom = document.createElement('div');
    dom.id = 'bmuiConfirm';
    document.body.appendChild(dom);
    let apiToast;
    ReactDOM.render(
      <BmuiConfirm
        {...props}
        api={(api) => {
          apiToast = api;
        }}
      />,
      dom
    );
    setTimeout(() => {
      apiToast.apiShow();
    }, 100);
  }
  static hide() {
    let dom = document.getElementById('bmuiConfirm');
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
    // if (nextProps.show !== this.state.show) {
    //   this.setState({
    //     show: nextProps.show,
    //   });
    // }
  }
  apiHide() {
    this.setState({
      show: false,
    });
  }
  apiShow() {
    this.setState({
      show: true,
    });
  }
  render() {
    return (
      <div className="bmui-confirm-container">
        <div
          className={classnames('bmui-mask', {
            hide: !this.state.show,
          })}
        />
        <div
          className={classnames('bmui-confirm', {
            active: this.state.show,
          })}
          // style={{
          //   display: this.state.show ? 'block' : 'none',
          // }}
        >
          <div className="content">
            <div>
              <h2>{this.props.title}</h2>
              <p>{this.props.content}</p>
            </div>
          </div>
          <div className="btn-container">
            {this.props.showCancel ? (
              <button
                onClick={() => {
                  this.setState(
                    {
                      show: false,
                    },
                    () => {
                      this.props.onCancel();
                    }
                  );
                }}
                className="cancel"
              >
                {this.props.cancelText}
              </button>
            ) : null}
            <button
              onClick={() => {
                this.setState(
                  {
                    show: false,
                  },
                  () => {
                    this.props.onOk();
                  }
                );
              }}
              className="ok"
            >
              {this.props.okText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
BmuiConfirm.propTypes = {
  api: PropTypes.func,
  showCancel: PropTypes.bool,
  cancelText: PropTypes.string,
  okText: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.stirng,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

BmuiConfirm.defaultProps = {
  api: () => {},
  hideMask: false,
  showCancel: true,
  cancelText: '取消',
  okText: '确定',
  title: '确定删除？',
  content: '',
  onCancel: () => {},
  onOk: () => {},
};
export default BmuiConfirm;
