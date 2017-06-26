import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { actionAjaxGetNewsList } from '../../actions/news.js';

class PageLoading extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <div className="padding-10">
          <button
            className="btn btn-orange btn-full"
            onClick={() => {
              this.props.showLoading({
                children: 'hello, world',
              });
              setTimeout(() => {
                this.props.hideLoading();
              }, 2000);
            }}
          >
            show toast
          </button>
        </div>
      </div>
    );
  }
}
PageLoading.propTypes = {
  showLoading: PropTypes.func,
  hideLoading: PropTypes.func,
};
export default connect(
  state => ({ dataNewsList: state.newsList.dataNewsList }),
  dispatch => ({
    showLoading: (requestData) => {
      showLoading(dispatch, requestData);
    },
    hideLoading: () => {
      hideLoading(dispatch);
    },
  })
)(PageLoading);
