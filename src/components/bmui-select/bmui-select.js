import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import BmuiSelectContainer from '../bmui-select-container';
import BmuiSelectColumn from '../bmui-select-column';

class BmuiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolVisible: false,
      children: null,
      selected: '',
      value: props.value,
    };
    this.apiShow = this.apiShow.bind(this);
    this.apiHide = this.apiHide.bind(this);
    if (this.props.api) {
      this.props.api({
        apiShow: this.apiShow,
        apiHide: this.apiHide,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  componentWillUpdate() {}
  apiShow() {
    this.apiBuiSelectContainerApi.apiShow();
    this.setState({
      value: this.props.value,
    });
  }
  apiHide() {
    this.apiBuiSelectContainerApi.apiHide();
    // this.setState({
    //   boolVisible: false,
    // });
  }
  render() {
    return (
      <BmuiSelectContainer
        title={this.props.title}
        onOk={() => {
          this.props.onChange(this.state.value);
        }}
        api={(api) => {
          this.apiBuiSelectContainerApi = api;
        }}
      >
        <BmuiSelectColumn
          options={this.props.options}
          value={this.state.value}
          onChange={(value, selected) => {
            this.setState({
              value,
            });
          }}
        />
      </BmuiSelectContainer>
    );
  }
}
BmuiSelect.propTypes = {
  show: PropTypes.bool,
  api: PropTypes.func,
  onChange: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
BmuiSelect.defaultProps = {
  name: 'default name',
};
export default BmuiSelect;
