import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { Radio, List } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/list/list.less';
import 'components/radio/radio.less';



class PageRadio extends React.Component {
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
      <div
        onClick={() => {
          this.setState({
            active: !this.state.active,
          });
        }}
        className="display-flex"
        style={{ padding: 10 }}
      >
        <Radio
          active={this.state.active}
        />
        &nbsp;单选框示例
      </div>
    );
  }
}

export default PageRadio;
