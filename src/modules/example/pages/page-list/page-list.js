import React from 'react';
import PropTypes from 'prop-types';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { BmuiSelect, List } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/list/list.less';
// import 'components/bmui-select/bmui-select.less';


class PageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boolShow: false,
      value: '',
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <List>
          <List.Item
            to="/"
            label="仅链接"
          />
          <List.Item
            label="输入"
            hideRight
          >
            <input
              onChange={(e) => {
                this.setState({
                  value: e.target.value,
                })
              }}
              placeholder="请输入"
              value={this.state.value}
            />
          </List.Item>
          <List.Item
            label="输入"
            hideRight
          >
            很久以前有一个神仙，他的名字叫孙悟空
          </List.Item>
        </List>

      </div>
    );
  }
}
PageList.propTypes = {
};
export default PageList;
