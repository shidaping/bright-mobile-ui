import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      currentPage: props.currentPage,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentPage !== this.state.currentPage) {
      this.setState({
        currentPage: nextProps.currentPage,
      });
    }
  }
  render() {
    const { currentPage } = this.state;
    const { pageSize, total } = this.props;
    const pageTotal = Math.ceil(total / pageSize);
    return (
      <div
        className={classnames('bmui-pagination', {
          active: this.state.active,
        })}
      >
        <button
          onClick={() => {
            this.props.onChange(currentPage - 1);
          }}
          disabled={currentPage < 2}
          className="col1"
        >
          上一页
        </button>
        <span className="col2">
          {currentPage}/{pageTotal}
        </span>
        <button
          onClick={() => {
            this.props.onChange(currentPage + 1);
          }}
          disabled={currentPage >= pageTotal}
          className="col3"
        >
          下一页
        </button>
      </div>
    );
  }
}

Pagination.propTypes = {
  active: PropTypes.bool,
  pageSize: PropTypes.number,
  total: PropTypes.number,
  currentPage: PropTypes.number,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  active: false,
  pageSize: 10,
  total: 1,
  currentPage: 1,
  onChange: () => {},
};

export default Pagination;
