import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';

class BuiSelectContainer extends Component {
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
  componentWillUpdate() {
  }
  apiShow() {
    let domThis = ReactDOM.findDOMNode(this);
    // domThis.classList.add('active');
    domThis.style.display = 'block';
    setTimeout(() => {
      domThis.style.opacity = 1;
      domThis.querySelector('.bui-select-container').style.bottom = 0;
    }, 10);


    // this.setState({
    //   show: true,
    // });
    // debugger;
  }
  apiHide() {
    // this.setState({
    //   show: false,
    // });
    let domThis = ReactDOM.findDOMNode(this);
    // domThis.classList.remove('active');
    domThis.querySelector('.bui-select-container').style.bottom = '-20rem';
    domThis.style.opacity = 0;
    setTimeout(() => {
      domThis.style.display = 'none';
    }, 700);
  }
  render() {
    return (
      <div
        className="bui-select-container__mask"
        onClick={this.apiHide}
      >
        <div
          className="bui-select-container"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          顶替
          {this.props.children}
        </div>
      </div>
    );
  }
}
BuiSelectContainer.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  api: PropTypes.func,
};
export default BuiSelectContainer;
