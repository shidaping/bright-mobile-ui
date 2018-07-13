import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';
// import './bmui-select-column.less';


class BuiSelectColumn extends Component {
  constructor(props) {
    super(props);
    // const options = [];
    // for(let i =0; i < 100; i++){
    //   options.push({
    //     text: i,
    //     value: i,
    //   })
    // }
    const options = props.options || [];
    const value = props.value;
    let index = 0;
    let selected;
    options.forEach((item, i) => {
      if (item[props.valueField] === value) {
        selected = item;
        index = i;
      }
    });
    this.translateY = -(index * 30);
    this.state = {
      show: false,
      children: null,
      rotate: 0,
      options: props.options || [],
      selected,
      index,
    };
    // this.apiShow = this.apiShow.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    // this.rotate = 0;
    // if (this.props.api) {
    //   this.props.api({
    //     apiShow: this.apiShow,
    //     apiHide: this.apiHide,
    //   });
    // }
  }
  componentDidMount() {
    // let domThis = ReactDOM.findDOMNode(this);
    // let domContent = domThis.querySelector('.bmui-select-column__content');
    // domContent.style.transition = '';
    // this.translateY = -(30 * this.state.index);
    // // console.log(gap);
    // domContent.style.transform = `translateY(${this.translateY}px)`;
    // console.log(domContent.style.transform);
    // this.touchLast = e.touches[0];
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.show !== this.state.show) {
    //   this.setState({
    //     show: nextProps.show,
    //   });
    // }
    // console.log(nextProps.value);
    if (nextProps.value !== this.state.value || !_.isEqual(nextProps.options, this.state.options)) {
      const options = nextProps.options || [];
      const value = nextProps.value;
      let index = 0;
      let selected;
      options.forEach((item, i) => {
        if (item[nextProps.valueField] === value) {
          selected = item;
          index = i;
        }
      });

      // let domThis = ReactDOM.findDOMNode(this);
      // let domContent = domThis.querySelector('.bmui-select-column__content');
      // domContent.style.transition = '';
      // this.translateY = -(30 * index);
      // // console.log(gap);
      // domContent.style.transform = `translateY(${this.translateY}px)`;
      // console.log(index, '-------------');
      this.translateY = -(index * 30);
      this.setState({
        selected,
        index,
        value,
        options: nextProps.options,
      });
    }
  }
  // apiShow() {
  //   this.setState({
  //     show: true,
  //   });
  // }
  // apiHide() {
  //   this.setState({
  //     show: false,
  //   });
  // }
  onTouchStart(e) {
    // let domThis = ReactDOM.findDOMNode(this);
    this.startTime = new Date();
    this.touchStart = e.touches[0];
    this.touchLast = e.touches[0];
    this.translateYStart = this.translateY;

    // console.log(e.touches[0]);
    // console.log('---------');
  }
  onTouchMove(e) {
    // console.log('asdfsdafasd');
    let domThis = ReactDOM.findDOMNode(this);
    let domContent = domThis.querySelector('.bmui-select-column__content');
    domContent.style.transition = '';
    let gap = e.touches[0].screenY - this.touchLast.screenY;
    this.translateY = this.translateY + gap;
    // console.log(gap);
    domContent.style.transform = `translateY(${this.translateY}px)`;
    // console.log(domContent.style.transform);
    this.touchLast = e.touches[0];
    // console.log(e.touches[0]);
    // console.log(gap);
  }
  onTouchEnd(e) {
    let domThis = ReactDOM.findDOMNode(this);
    let domContent = domThis.querySelector('.bmui-select-column__content');
    let now = new Date();
    let index;
    // const touchEnd = e.touches[0];
    // const touchStart = this.touchStart;
    const translateYStart  = this.translateYStart;
    const translateYEnd = this.translateY;
    const options = this.state.options;

    domContent.style.transition = 'all ease .5s';
    // console.log((translateYEnd - translateYStart) / (now.getTime() - this.startTime.getTime()), '======');

    if (Math.abs((translateYEnd - translateYStart) / (now.getTime() - this.startTime.getTime())) > 0.5) {
      this.translateY = this.translateY + (translateYEnd - translateYStart) * 2;
      domContent.style.transform = `translateY(${this.translateY}px)`;
    }
    if (this.translateY > 0) {
      this.translateY = 0;
      domContent.style.transform = 'translateY(0px)';
      index = 0;
    } else if (this.translateY + (30 * options.length) < 0 ) {
      this.translateY = 30 - (30 * options.length);
      domContent.style.transform = `translateY(${this.translateY}px)`;
      index = options.length - 1;
    } else {
      let int = parseInt(this.translateY, 10);
      let left = Math.abs(int) % 30;
      // console.log('++++',left);
      if (left > 15 && Math.abs(int) < 30 * options.length - 15) {
        this.translateY = int - 30 + left;
      } else {
        this.translateY = int + left;
      }
      // console.log(int);
      // console.log('-----',this.translateY);
      domContent.style.transform = `translateY(${this.translateY}px)`;
      index = parseInt(Math.abs(this.translateY) / 30, 10);
    }
    const selected = options[index] || options[0];
    const value = selected[this.props.valueField];
    this.setState({
      selected,
      value,
      index: index,
    });
    this.props.onChange(value, selected);
    // console.log(this.state.options[index]);
  }
  render() {
    const translateY = -(this.state.index * 30);
    return (
      <div className="bmui-select-column">
        <ul
          className="bmui-select-column__content"
          style={{
            transform: `translateY(${translateY}px)`,
          }}
        >
          {this.state.options.map(item => (
            <li key={item[this.props.valueField]}>{item[this.props.textField]}</li>
          ))}
        </ul>
        <div
          onTouchMove={this.onTouchMove}
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
          className="bmui-select-column__mask"
        />
      </div>
    );
  }
}
BuiSelectColumn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.Object),
  textField: PropTypes.string,
  valueField: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
BuiSelectColumn.defaultProps = {
  textField: 'text',
  valueField: 'value',
  options: [],
  onChange: () => {},
  value: null,
};
export default BuiSelectColumn;
