import React, { Component } from 'react';
// import classnames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import BmuiSelectContainer from '../bmui-select-container';
import BmuiSelectColumn from '../bmui-select-column';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    const nextValue = props.value;
    const dateMoment = moment(nextValue, this.props.format);
    this.state = {
      boolVisible: false,
      children: null,
      selected: '',
      value: props,
      year: dateMoment.year(),
      month: dateMoment.month() + 1,
      day: dateMoment.date(),
      hour: dateMoment.hour(),
      minute: dateMoment.minute(),
      seconds: dateMoment.seconds(),
    };
    this.apiShow = this.apiShow.bind(this);
    this.apiHide = this.apiHide.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.getMaxDay = this.getMaxDay.bind(this);
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
      const dateMoment = moment(nextValue, this.props.format);
      this.setState({
        value: nextProps.value,
        year: dateMoment.year(),
        month: dateMoment.month() + 1,
        day: dateMoment.date(),
        hour: dateMoment.hour(),
        minute: dateMoment.minute(),
        seconds: dateMoment.seconds(),
      });
    }
  }
  componentWillUpdate() {
  }
  // 计算一个月最大有多少天
  getMaxDay() {
    let maxDay = 31;
    switch (this.state.month) {
      case 4:
      case 6:
      case 9:
      case 11: {
        maxDay = 30;
        break;
      }
      default: break;
    }
    if (this.state.month === 2) {
      if (this.state.year % 4 === 0 && this.state.year % 100 !== 0) {
        maxDay = 29;
      } else if (this.state.year % 400 === 0 && this.state.year % 100 === 0) {
        maxDay = 29;
      } else {
        maxDay = 28;
      }
    }
    return maxDay;
  }
  apiShow() {
    this.apiBuiSelectContainerApi.apiShow();
    const nextValue = this.props.value;
    const dateMoment = moment(nextValue, this.props.format);
    this.setState({
      boolVisible: true,
      value: nextValue,
      year: dateMoment.year(),
      month: dateMoment.month() + 1,
      day: dateMoment.date(),
      hour: dateMoment.hour(),
      minute: dateMoment.minute(),
      seconds: dateMoment.seconds(),
    });
  }
  apiHide() {
    this.apiBuiSelectContainerApi.apiHide();
    // this.setState({
    //   boolVisible: false,
    // });
  }
  changeValue() {
    const dateMoment = moment();
    dateMoment.year(this.state.year);
    dateMoment.month(this.state.month - 1);
    dateMoment.date(this.state.day);
    dateMoment.hour(this.state.hour);
    dateMoment.minute(this.state.minute);
    dateMoment.seconds(this.state.seconds);
    this.setState({
      value: dateMoment.format(this.props.format),
    });
  }

  render() {
    const yearOptions = [];
    const monthOptions = [];
    const dayOptions = [];
    for (let i = this.props.minYear; i < this.props.maxYear; i += 1) {
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
    for (let i = 1; i < this.getMaxDay() + 1; i += 1) {
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
        {this.props.showColumnYear ? (
          <BmuiSelectColumn
            options={yearOptions}
            value={this.state.year}
            onChange={(value) => {
              this.setState({
                year: value,
              }, () => {
                let day = this.state.day;
                const maxDay = this.getMaxDay();
                if (maxDay < this.state.day) {
                  day = maxDay;
                }
                this.setState({
                  day,
                });
                this.changeValue();
              });
            }}
          />
        ) : null}
        {this.props.showColumnMonth ? (
          <BmuiSelectColumn
            options={monthOptions}
            value={this.state.month}
            onChange={(value) => {
              this.setState({
                month: value,
              }, () => {
                let day = this.state.day;
                const maxDay = this.getMaxDay();
                if (maxDay < this.state.day) {
                  day = maxDay;
                }
                this.setState({
                  day,
                });
                this.changeValue();
              });
            }}
          />
        ) : null}
        {this.props.showColumnDay ? (
          <BmuiSelectColumn
            options={dayOptions}
            value={this.state.day}
            onChange={(value) => {
              this.setState({
                day: value,
              }, () => {
                this.changeValue();
              });
            }}
          />
        ) : null}
        {this.props.showColumnHour ? (
          <BmuiSelectColumn
            options={hourOptions}
            value={this.state.hour}
            onChange={(value) => {
              this.setState({
                hour: value,
              }, () => {
                this.changeValue();
              });
            }}
          />
        ) : null}
        {this.props.showColumnMinute ? (
          <BmuiSelectColumn
            options={minuteOptions}
            value={this.state.minute}
            onChange={(value) => {
              this.setState({
                minute: value,
              }, () => {
                this.changeValue();
              });
            }}
          />
        ) : null}
        {this.props.showColumnSeconds ? (
          <BmuiSelectColumn
            options={secondsOptions}
            value={this.state.seconds}
            onChange={(value) => {
              this.setState({
                seconds: value,
              }, () => {
                this.changeValue();
              });
            }}
          />
        ) : null}
      </BmuiSelectContainer>
    );
  }
}
DatePicker.propTypes = {
  format: PropTypes.string,
  showColumnYear: PropTypes.bool,
  showColumnMonth: PropTypes.bool,
  showColumnDay: PropTypes.bool,
  showColumnHour: PropTypes.bool,
  showColumnMinute: PropTypes.bool,
  showColumnSeconds: PropTypes.bool,
  minYear: PropTypes.number,
  maxYear: PropTypes.number,
  api: PropTypes.func,
  onChange: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
DatePicker.defaultProps = {
  format: 'YYYY-MM-DD HH:mm:ss',
  showColumnYear: true,
  showColumnMonth: true,
  showColumnDay: true,
  showColumnHour: true,
  showColumnMinute: true,
  showColumnSeconds: true,
  minYear: 1970,
  maxYear: 2040,
  title: '选择日期',
  showTime: true,
  name: 'default name',
  onChange: () => {},
  api: () => {},
  value: '',
};
export default DatePicker;
