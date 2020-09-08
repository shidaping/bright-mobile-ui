import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { BmuiSelect, List } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/list/list.less';
import 'components/bmui-select/bmui-select.less';

const map = {
  male: '男',
  female: '女',
};

const options = [
  {
    text: '男',
    value: 'male',
  },
  {
    text: '女',
    value: 'female',
  },
];

class PageSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolShow: false,
      value: '',
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <List>
          <List.Item
            label="性别"
            onClick={() => {
              this.apiBuiSelectApi.apiShow();
            }}
          >
            {map[this.state.value]}
          </List.Item>
          <List.Item
            label="性别"
            onClick={() => {
              this.apiBuiSelectApi.apiShow();
            }}
          >
            {map[this.state.value]}
          </List.Item>
        </List>
        <BmuiSelect
          options={options}
          value={this.state.value}
          onChange={(value) => {
            this.setState({
              value,
            });
          }}
          api={(api) => {
            this.apiBuiSelectApi = api;
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
PageSelect.propTypes = {};
export default PageSelect;
