import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
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
          <span className="logo">BUI</span>
        </div>
        <div className="home-link-list">
          {/*
            <button onClick={this.props.increase}>increase</button>
            <button onClick={this.props.decrease}>decrease</button>
          */}
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
