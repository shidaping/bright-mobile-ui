import React from 'react';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { CheckBox } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/list/list.less';
import 'components/check-box/check-box.less';

class PageCheckBox extends React.Component {
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
      <div
        onClick={() => {
          this.setState({
            active: !this.state.active,
          });
        }}
        className="display-flex"
        style={{ padding: 10 }}
      >
        <CheckBox
          active={this.state.active}
        />
        &nbsp;复选框示例
      </div>
    );
  }
}

export default PageCheckBox;
