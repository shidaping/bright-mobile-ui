import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import BmuiSelectContainer from '../bmui-select-container';
import BmuiSelectColumn from '../bmui-select-column';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolVisible: false,
      children: null,
      selected: '',
      value: props.value,
    };
    this.apiShow = this.apiShow.bind(this);
    this.apiHide = this.apiHide.bind(this);
    this.changeValue = this.changeValue.bind(this);
    if (this.props.api) {
      this.props.api({
        apiShow: this.apiShow,
        apiHide: this.apiHide,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      const nextValue = nextProps.value;
      const year = 

      this.setState({
        value: nextProps.value,
      });
    }
  }
  componentWillUpdate() {
  }
  apiShow() {
    this.apiBuiSelectContainerApi.apiShow();
    this.setState({
      value: this.props.value,
    });
  }
  apiHide() {
    this.apiBuiSelectContainerApi.apiHide();
    // this.setState({
    //   boolVisible: false,
    // });
  }
  changeValue(){
    const dateString = `${this.state.year}-${this.state.month < 10 ? '0' : ''}${this.state.day}-${this.state.day < 10 ? '0' : ''}${this.state.day}`;
    const tiemString = `${this.state.hour < 10 ? '0' : ''}${this.state.hour}-${this.state.minute < 10 ? '0' : ''}${this.state.minute}-${this.state.seconds < 10 ? '0' : ''}${this.state.seconds}`
    let value;
    if (this.props.showTime) {

    }

  }
  render() {
    const yearOptions = [];
    const monthOptions = [];
    const dayOptions = [];
    for (let i = 1900; i < 2040; i += 1) {
      let o = {
        text: `${i}年`,
        value: i,
      };
      yearOptions.push(o);
    }
    const minuteOptions = [];
    const hourOptions = [];
    const secondsOptions = [];

    for (let i = 0; i < 60; i += 1) {
      let o = {
        text: `${i}分`,
        value: i,
      };
      minuteOptions.push(o);
    }
    for (let i = 0; i < 60; i += 1) {
      let o = {
        text: `${i}秒`,
        value: i,
      };
      secondsOptions.push(o);
    }
    for (let i = 0; i < 24; i += 1) {
      let o = {
        text: `${i}时`,
        value: i,
      };
      hourOptions.push(o);
    }
    for (let i = 1; i < 32; i += 1) {
      let o = {
        text: `${i}日`,
        value: i,
      };
      dayOptions.push(o);
    }
    for (let i = 1; i < 13; i += 1) {
      let o = {
        text: `${i}月`,
        value: i,
      };
      monthOptions.push(o);
    }

    return (
      <BmuiSelectContainer
        title={this.props.title}
        onOk={() => {
          this.props.onChange(this.state.value);
        }}
        api={(api) => {
          this.apiBuiSelectContainerApi = api;
        }}
      >
        <BmuiSelectColumn
          options={yearOptions}
          value={this.state.year}
          onChange={(value, selected) => {
            this.setState({
              hour: value,
            });
          }}
        />
        <BmuiSelectColumn
          options={monthOptions}
          value={this.state.month}
          onChange={(value, selected) => {
            this.setState({
              month: value,
            });
          }}
        />
        <BmuiSelectColumn
          options={dayOptions}
          value={this.state.day}
          onChange={(value, selected) => {
            this.setState({
              hour: value,
            });
          }}
        />
        <BmuiSelectColumn
          options={hourOptions}
          value={this.state.hour}
          onChange={(value, selected) => {
            this.setState({
              hour: value,
            });
          }}
        />
        <BmuiSelectColumn
          options={minuteOptions}
          value={this.state.minute}
          onChange={(value, selected) => {
            this.setState({
              minute: value,
            });
          }}
        />
        <BmuiSelectColumn
          options={secondsOptions}
          value={this.state.seconds}
          onChange={(value, selected) => {
            this.setState({
              seconds: value,
            });
          }}
        />
      </BmuiSelectContainer>
    );
  }
}
DatePicker.propTypes = {
  showDate: PropTypes.bool,
  showTime: PropTypes.bool,
  api: PropTypes.func,
  onChange: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
DatePicker.defaultProps = {
  title: '选择日期',
  showTime: true,
  name: 'default name',
  onChange: () => {},
  api: () => {},
  value: '',
};
export default DatePicker;
