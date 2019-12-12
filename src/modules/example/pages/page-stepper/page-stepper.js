import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { BmuiSelectContainer, BmuiSelectColumn } from 'components';
import { List, Stepper } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import 'components/stepper/stepper.less';


class PageStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolShow: false,
      value: 0,
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <Stepper
        value={this.state.value}
        onChange={(value) => {
          this.setState({
            value,
          });
        }}
      />

    );
  }
}

export default PageStepper;
