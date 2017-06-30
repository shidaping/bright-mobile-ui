import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'modules/example/actions/loading';
import { BuiSelectContainer, BuiSelectColumn } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/bui-select-container/bui-select-container.less';

class PageSelect extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boolShow: false,
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1 className="page-select-h1"></h1>
        {/*
          <li className="page-select-item">
            <label>水果</label>
            <span>{}</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </li>
        */}
        <button
          className="btn btn-full btn-primary"
          onClick={() => {
            this.apiBuiSelectContainerApi.apiShow();
          }}
        >
          选择
        </button>

        <BuiSelectContainer
          api={(api) => {
            this.apiBuiSelectContainerApi = api;
          }}
        >
          <BuiSelectColumn />
        </BuiSelectContainer>
        <h1 className="page-select-h1"></h1>
      </div>
    );
  }
}
PageSelect.propTypes = {
  showLoading: PropTypes.func,
  hideLoading: PropTypes.func,
};
export default connect(
  state => ({ dataNewsList: state.newsList.dataNewsList }),
  dispatch => ({
    showLoading: (requestData) => {
      showLoading(dispatch, requestData);
    },
    hideLoading: () => {
      hideLoading(dispatch);
    },
  })
)(PageSelect);
