import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import classnames from 'classnames';
import { Drawer, List } from 'components';
import 'components/drawer/drawer.less';

class PageDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolShowPassword: false,
    };
  }
  componentDidMount() {

  }
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
          打开抽屉
          </button>
        </div>

        <Drawer
          api={(api) => {
            this.drawerApi = api;
          }}
        >
          <List>
            <List.Item
              onClick={() => {
                window.location.href = '//wwww.baidu.com';
              }}
              noValue
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
        </Drawer>
      </div>
    );
  }
}
// PageForm.propTypes = {
//   showLoading: PropTypes.func,
//   hideLoading: PropTypes.func,
// };
export default PageDrawer;
