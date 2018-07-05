import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { AddressPicker, List } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/list/list.less';
import 'components/address-picker/address-picker.less';


class PageAddressPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolShow: false,
      value: AddressPicker.defaultValue,
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <List>
          <List.Item
            label="地区"
            onClick={() => {
              this.apiAddressPicker.apiShow(this.state.value);
            }}
          >
            {this.state.value.provinceName} {this.state.value.cityName} {this.state.value.areaName}
          </List.Item>
        </List>
        <AddressPicker
          value={this.state.value}
          textField=""
          valueField=""
          onOk={(value) => {
            this.setState({
              value,
            });
          }}
          api={(api) => {
            this.apiAddressPicker = api;
          }}
        />
        {/*
          <BmuiSelectContainer
            api={(api) => {
              this.apiBuiSelectContainerApi = api;
            }}
          >
            <BmuiSelectColumn />
          </BmuiSelectContainer>
        */}
      </div>
    );
  }
}
PageAddressPicker.propTypes = {
};
export default PageAddressPicker;
