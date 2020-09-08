import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactDOM from 'react-dom';

class OptionSheet extends Component {
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
  apiShow() {
    let domThis = ReactDOM.findDOMNode(this);
    // domThis.classList.add('active');
    domThis.style.display = 'block';
    setTimeout(() => {
      domThis.style.opacity = 1;
      domThis.querySelector('.bmui-option-sheet__modal').style.transform = 'translateY(0)';
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
    domThis.querySelector('.bmui-option-sheet__modal').style.transform = 'translateY(100%)';
    domThis.style.opacity = 0;
    setTimeout(() => {
      domThis.style.display = 'none';
    }, 700);
  }
  render() {
    return (
      <div className="bmui-option-sheet bmui-mask" onClick={this.apiHide}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bmui-option-sheet__modal"
        >
          {this.props.options.map((item) => (
            <button
              className={classnames('', {
                danger: item.theme === 'danger',
              })}
              onClick={item.onClick}
            >
              {item.text}
            </button>
          ))}
          <button className="btn-cancel" onClick={this.apiHide}>
            取消
          </button>
        </div>
      </div>
    );
  }
}
OptionSheet.propTypes = {
  children: PropTypes.any,
  api: PropTypes.func,
  options: PropTypes.array,
};
OptionSheet.defaultProps = {
  name: 'default name',
  children: null,
  title: '',
  contentHeight: 210,
  onCancel: () => {},
  onOk: () => {},
  api: () => {},
  options: [],
};
export default OptionSheet;
