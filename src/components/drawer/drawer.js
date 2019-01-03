import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class Drawer extends Component {
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
    if (nextProps.show !== this.state.show) {
      this.setState({
        show: nextProps.show,
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
  componentWillUpdate() {
  }
  apiShow() {
    let domThis = ReactDOM.findDOMNode(this);
    // domThis.classList.add('active');
    domThis.style.display = 'block';
    setTimeout(() => {
      domThis.style.opacity = 1;
      domThis.querySelector('.bmui-drawer__modal').style.transform = 'translateX(0)';
    }, 10);


    // this.setState({
    //   show: true,
    // });
    // debugger;
  }
  apiHide() {
    // debugger;
    // this.setState({
    //   boolVisible: false,
    // });
    // this.setState({
    //   show: false,
    // });
    let domThis = ReactDOM.findDOMNode(this);
    // domThis.classList.remove('active');
    domThis.querySelector('.bmui-drawer__modal').style.transform = 'translateX(100%)';
    domThis.style.opacity = 0;
    setTimeout(() => {
      domThis.style.display = 'none';
    }, 700);
  }
  render() {
    return (
      <div
        className={classnames('bmui-drawer bmui-mask', {
          active: this.state.boolVisible,
        })}
        onClick={this.apiHide}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bmui-drawer__modal"
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
Drawer.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  api: PropTypes.func,
};
export default Drawer;
