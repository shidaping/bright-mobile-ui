import React from 'react';
import PropTypes from 'prop-types';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { Tab } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/list/list.less';
// import 'components/bmui-select/bmui-select.less';

class PageTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'complete',
    };
  }
  componentDidMount() {}
  render() {
    const options = [
      {
        text: '全部',
        value: 'all',
      },
      {
        text: '待支付',
        value: 'waiting',
      },
      {
        text: '待收货',
        value: 'dd',
      },
      {
        text: '已完成',
        value: 'complete',
      },
    ];
    return (
      <div>
        <Tab
          options={options}
          value={this.state.value}
          onChange={(value) => {
            this.setState({
              value,
            });
          }}
        />
      </div>
    );
  }
}
PageTab.propTypes = {};
export default PageTab;
