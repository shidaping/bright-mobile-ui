import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { List, Switch } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/list/list.less';
import 'components/switch/switch.less';


class PageRadio extends React.Component {
  constructor(props) {
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
      <List>
        <List.Item hideRight>
          <Switch
            checked={this.state.checked}
            onChange={(e) => {
              this.setState({
                checked: e.target.checked,
              });
            }}
          />
        </List.Item>
        {this.state.checked ? '打开' : '关闭'}
      </List>

    );
  }
}

export default PageRadio;
