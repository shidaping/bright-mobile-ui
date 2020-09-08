import React from 'react';
import PropTypes from 'prop-types';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { OptionSheet } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/option-sheet/option-sheet.less';
// import 'components/bmui-select/bmui-select.less';

class PageList extends React.Component {
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
        <div className="padding-10">
          <button
            onClick={() => {
              this.drawerApi.apiShow();
            }}
            className="btn btn-orange btn-full"
          >
            打开操作栏
          </button>
        </div>
        <OptionSheet
          options={[
            {
              text: '编辑',
              onClick: () => {
                console.log('编辑');
              },
            },
            {
              text: '删除',
              theme: 'danger',
              onClick: () => {
                console.log('删除');
              },
            },
          ]}
          api={(api) => {
            this.drawerApi = api;
          }}
        />
      </div>
    );
  }
}
PageList.propTypes = {};
export default PageList;
