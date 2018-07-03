import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import BmuiSelectContainer from '../bmui-select-container';
import BmuiSelectColumn from '../bmui-select-column';
import data from './data';

const defaultValue = {
  provinceCode: '11',
  provinceName: '北京市',
  cityCode: '1101',
  cityName: '市辖区',
  areaCode: '110101',
  areaName: '东城区',
};

class AddressPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolVisible: false,
      value: props.value,
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
    if (_.isEqual(nextProps.value, this.state.value)) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  componentWillUpdate() {
  }
  apiShow(value) {
    this.apiBuiSelectContainerApi.apiShow();
    this.setState({
      value: value || defaultValue,
    });
  }
  apiHide() {
    this.apiBuiSelectContainerApi.apiHide();
    // this.setState({
    //   boolVisible: false,
    // });
  }

  render() {
    const selectedProvince = data.find((item) => {
      return item.code === this.state.value.provinceCode;
    }) || data[0];
    const optionsCity = selectedProvince.children || [];
    const selectedCity =  optionsCity.find((item) => {
      return item.code === this.state.value.cityCode;
    });
    const optionsArea = selectedCity.children || [];
    return (
      <BmuiSelectContainer
        title={this.props.title}
        onOk={() => {
          this.props.onOk(this.state.value);
        }}
        api={(api) => {
          this.apiBuiSelectContainerApi = api;
        }}
      >
        <BmuiSelectColumn
          options={data}
          valueField="code"
          textField="name"
          value={this.state.value.provinceCode}
          onChange={(value, item) => {
            const newValue = {
              provinceCode: value,
              provinceName: item.name,
              cityCode: item.children[0].code,
              cityName: item.children[0].name,
              areaCode: item.children[0].children[0].code,
              areaName: item.children[0].children[0].name,
            };
            this.setState({
              value: newValue,
            }, () => {
              this.props.onChange(newValue);
            });
          }}
        />
        <BmuiSelectColumn
          options={optionsCity}
          valueField="code"
          textField="name"
          value={this.state.value.cityCode}
          onChange={(value, item) => {
            const newValue = {
              ...this.state.value,
              cityCode: item.code,
              cityName: item.name,
              areaCode: item.children[0].code,
              areaName: item.children[0].name,
            };
            this.setState({
              value: newValue,
            }, () => {
              this.props.onChange(newValue);
            });
          }}
        />
        <BmuiSelectColumn
          options={optionsArea}
          valueField="code"
          textField="name"
          value={this.state.value.areaCode}
          onChange={(value, item) => {
            const newValue = {
              ...this.state.value,
              areaCode: item.code,
              areaName: item.name,
            };
            this.setState({
              value: newValue,
            }, () => {
              this.props.onChange(newValue);
            });
          }}
        />

      </BmuiSelectContainer>
    );
  }
}
AddressPicker.propTypes = {
  api: PropTypes.func,
  onChange: PropTypes.func,
  onOk: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.object,

};
AddressPicker.defaultProps = {
  title: '请选择地区',
  onChange: () => {},
  onOk: () => {},
  api: () => {},
  value: defaultValue,
};
AddressPicker.defaultValue = defaultValue;
AddressPicker.data = data;
export default AddressPicker;
