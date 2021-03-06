import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showToast } from 'modules/example/actions/toast.js';
import { Toast } from 'components';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
// import 'components/style/index.less';

class PageToast extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="padding-10">
          <button
            className="btn btn-orange btn-full"
            onClick={() => {
              this.props.showToast({
                children: 'hello, world',
              });
            }}
          >
            show toast
          </button>
        </div>
        <div className="padding-10">
          <button
            className="btn btn-orange btn-full"
            onClick={() => {
              Toast.show('abc');
            }}
          >
            static show toast
          </button>
        </div>
        <div className="padding-10">
          <button
            className="btn btn-orange btn-full"
            onClick={() => {
              Toast.success('abc');
            }}
          >
            static show success
          </button>
        </div>
        <div className="padding-10">
          <button
            className="btn btn-orange btn-full"
            onClick={() => {
              Toast.error('abc');
            }}
          >
            static show error
          </button>
        </div>
      </div>
    );
  }
}
PageToast.propTypes = {
  showToast: PropTypes.func,
  dataNewsList: PropTypes.array,
};
export default connect(
  (state) => ({ dataNewsList: state.newsList.dataNewsList }),
  (dispatch) => ({
    showToast: (requestData) => {
      showToast(dispatch, requestData);
    },
  })
)(PageToast);
