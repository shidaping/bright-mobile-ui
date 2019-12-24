import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { BmuiSelect, List } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/list/list.less';
import 'components/bmui-select/bmui-select.less';
import '../../components/iconfont/iconfont.less';
import './home.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="home-logo-container">
          <span className="logo">BMUI</span>
        </div>
        <div className="home-link-list">
          {/*
            <button onClick={this.props.increase}>increase</button>
            <button onClick={this.props.decrease}>decrease</button>
          */}
          <List>
            <List.Item
              onClick={() => {
                browserHistory.push('/toast');
              }}
              label="Toast信息提示"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/loading');
              }}
              label="Loading加载中"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/confirm');
              }}
              label="Confirm确定"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/select');
              }}
              label="Select选择"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/date-picker');
              }}
              label="DatePicker日期时间选择"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/check-box');
              }}
              label="CheckBox复选框"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/radio');
              }}
              label="Radio单选框"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/switch');
              }}
              label="Switch切换"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/toast');
              }}
              label="toast信息提示"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/img-slider');
              }}
              label="ImgSlider图片轮播器"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/list');
              }}
              label="List列表"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/address-picker');
              }}
              label="AddressPicker地区三级联选"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/drawer');
              }}
              label="Drawer抽屉"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/pagination');
              }}
              label="Pagination分页"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/option-sheet');
              }}
              label="OptionSheet操作选项"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/stepper');
              }}
              label="Stepper步进器"
              noValue
            />
            <List.Item
              onClick={() => {
                browserHistory.push('/tab');
              }}
              label="Tab切换"
              noValue
            />
          </List>


          {/*

          <Link to={'/toast'}>
            <span>Toast信息提示</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/loading'}>
            <span>Loading加载中</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/form'}>
            <span>Form表单</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/dropdown'}>
            <span>Dropdown下拉菜单</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          <Link to={'/select'}>
            <span>Select选择</span>
            <i className="bui-iconfont bui-icon-angle-right" />
          </Link>
          */}
        </div>

      </div>
    );
  }
}
Home.propTypes = {
  // number: PropTypes.number,
  // increase: PropTypes.func,
  // decrease: PropTypes.func,
};
// export default connect(
//   state => ({ number: state.count.number }),
//   { increase, decrease }
// )(Home);
export default Home;
