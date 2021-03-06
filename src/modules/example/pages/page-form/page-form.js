import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import classnames from 'classnames';

class PageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolShowPassword: false,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="padding-10">
          <h1 className="page-form-h1">普通输入框</h1>
          <div>
            <input className="form-control" placeholder="请输入" />
          </div>
          <h1 className="page-form-h1">带左右图标输入框</h1>
          <div className="form-group-with-addon-left form-group-with-addon-right">
            <i className="bui-iconfont bui-icon-password addon-left" />
            <input
              className="form-control"
              placeholder="请输入"
              type={this.state.boolShowPassword ? 'text' : 'password'}
            />
            <i
              className={classnames('bui-iconfont bui-icon-eye addon-right', {
                'color-blue': this.state.boolShowPassword,
              })}
              onClick={() => {
                this.setState({
                  boolShowPassword: !this.state.boolShowPassword,
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
// PageForm.propTypes = {
//   showLoading: PropTypes.func,
//   hideLoading: PropTypes.func,
// };
export default PageForm;
