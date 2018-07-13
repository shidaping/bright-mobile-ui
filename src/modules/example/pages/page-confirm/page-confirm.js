import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'modules/example/actions/loading';
// import { actionAjaxGetNewsList } from '../../actions/news.js';
import { BmuiConfirm } from 'components';
import 'components/bmui-confirm/bmui-confirm.less';

class PageConfirm extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <div className="padding-10">
          <button
            style={{ marginTop: '10px' }}
            className="btn btn-orange btn-full"
            onClick={() => {
              BmuiConfirm.show();
            }}
          >
            static show confirm
          </button>
        </div>
      </div>
    );
  }
}
PageConfirm.propTypes = {
  // showLoading: PropTypes.func,
  // hideLoading: PropTypes.func,
};
// export default connect(
//   state => ({ dataNewsList: state.newsList.dataNewsList }),
//   dispatch => ({

//   })
// )(PageLoading);
export default PageConfirm;
