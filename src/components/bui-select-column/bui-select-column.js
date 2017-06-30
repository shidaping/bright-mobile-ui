import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './bui-select-column.less';
class BuiSelectColumn extends Component {
  constructor(props) {
    super(props);
    const options = [];
    for(let i =0; i < 400; i++){
      options.push({
        text: i,
        value: i,
      })
    }
    this.state = {
      show: false,
      children: null,
      rotate: 0,
      options: options
    }
    this.apiShow = this.apiShow.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd  = this.onTouchEnd.bind(this);
    this.rotate = 0;
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
  onTouchStart(e){
    let domThis = ReactDOM.findDOMNode(this);
    this.startTime = new Date();
    this.touch = e.touches[0];
    console.log(e.touches[0]);
    console.log('---------');
  }
  onTouchMove(e) {
    let domThis = ReactDOM.findDOMNode(this);
    let domMain = domThis.querySelector('.bui-select-column');
    let gap = e.touches[0].screenY - this.touch.screenY;
    console.log(e.touches[0]);
    console.log(gap);
    this.rotate += gap/40;
    domMain.style.transform =  `translateY(${this.rotate}rem)`;
  }
  onTouchEnd(e){
    let domThis = ReactDOM.findDOMNode(this);
    let now = new Date();
  }
  render() {
    return (
      <div className="bui-select-column-container">
        <ul
          className="bui-select-column"
          onTouchMove={this.onTouchMove}
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
        >
          {this.state.options.map((item, i) => (
            <li key={i} style={{ transform: `rotateX( ${180/this.state.options.length * i}deg)` }}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}
BuiSelectColumn.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  api: PropTypes.func,
};
export default BuiSelectColumn;
