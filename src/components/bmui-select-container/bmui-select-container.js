import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class BmuiSelectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolVisible: false,
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
      domThis.querySelector('.bmui-select-container__modal').style.transform = 'translateY(0)';
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
    domThis.querySelector('.bmui-select-container__modal').style.transform = 'translateY(100%)';
    domThis.style.opacity = 0;
    setTimeout(() => {
      domThis.style.display = 'none';
    }, 700);
  }
  render() {
    return (
      <div
        className={classnames('bmui-select-container bmui-mask', {
          active: this.state.boolVisible,
        })}
        onClick={this.apiHide}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bmui-select-container__modal"
        >
          <div className="bmui-select-container__head">
            <div
              onClick={() => {
                this.apiHide();
                this.props.onCancel();
              }}
              className="col1"
            >取消</div>
            <div className="col2">{this.props.title}</div>
            <div
              onClick={() => {
                this.apiHide();
                this.props.onOk();
              }}
              className="col3"
            >确定</div>
          </div>
          <div
            style={{
              height: this.props.contentHeight,
            }}
            className="bmui-select-container__content"
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
BmuiSelectContainer.propTypes = {
  children: PropTypes.node,
  api: PropTypes.func,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  title: PropTypes.string,
  contentHeight: PropTypes.number,
};
BmuiSelectContainer.defaultProps = {
  name: 'default name',
  children: null,
  title: '',
  contentHeight: 210,
  onCancel: () => {},
  onOk: () => {},
  api: () => {},
};
export default BmuiSelectContainer;
