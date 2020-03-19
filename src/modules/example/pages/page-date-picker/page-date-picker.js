import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { DatePicker, List } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/list/list.less';
import 'components/date-picker/date-picker.less';


const map = {
  'male': '男',
  'female': '女',
}

const options = [
  {
    text: '男',
    value: 'male',
  },
  {
    text: '女',
    value: 'female',
  } 
]

class PageDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolShow: false,
      value: '1980-09-21 12:00:34',
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <List>
          <List.Item
            label="日期"
            onClick={() => {
              this.apiDatePicker.apiShow();
            }}
          >
            {this.state.value}
          </List.Item>
          <List.Item
            label="性别"
            onClick={() => {
              this.apiDatePicker.apiShow();
            }}
          >
            {map[this.state.value]}
          </List.Item>
        </List>
        <DatePicker
          options={options}
          value={this.state.value}
          onChange={(value) => {
            this.setState({
              value,
            });
          }}
          api={(api) => {
            this.apiDatePicker = api;
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
PageDatePicker.propTypes = {
};
export default PageDatePicker;
