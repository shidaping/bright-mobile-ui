import React from 'react';
import PropTypes from 'prop-types';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { Pagination, List } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/list/list.less';
// import 'components/bmui-select/bmui-select.less';


class PagePagination extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boolShow: false,
      value: '',
      currentPage: 1,
      total: 26,
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Pagination
          total={this.state.total}
          onChange={(currentPage) => {
            this.setState({
              currentPage,
            });
          }}
          currentPage={this.state.currentPage}
        />

      </div>
    );
  }
}
PagePagination.propTypes = {
};
export default PagePagination;
