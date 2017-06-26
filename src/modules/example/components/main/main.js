import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router';
import { Toast, Loading } from 'components';
import { connect } from 'react-redux';
import 'components/toast/toast.less';
import 'components/loading/loading.less';
import { showToast } from '../../actions/toast';
import { showLoading } from '../../actions/loading';

import './main.less';
// class Main extends Component {
//   render() {
//     // return this.props.children ? Children.only(this.props.children) : null;
//     return (
//       <div>
//         <ul className="nav">
//           <li><Link to={'/'} onlyActiveOnIndex activeClassName="active">home</Link></li>
//           <li><Link to={'/news-list'} activeClassName="active">news list</Link></li>
//         </ul>
//         <div>
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }
// }
// Main.propTypes = {
//   children: PropTypes.any,
// };
// export default Main;
const Main = function(props) {
  return (
    <div>
      <div>
        {props.children}
      </div>
      <Toast show={props.toast.boolShow}>
        {props.toast.children}
      </Toast>
      <Loading show={props.loading.boolShow}>
        {props.loading.children}
      </Loading>
    </div>
  );
};
Main.propTypes = {
  children: PropTypes.element, // eslint-disable-line
  toast: PropTypes.any, // eslint-disable-line
  loading: PropTypes.any, // eslint-disable-line
};
export default connect(
  state => ({ toast: state.toast, loading: state.loading }),
  dispatch => ({
    showToast: () => {
      showToast(dispatch);
    },
    showLoading: () => {
      showLoading(dispatch);
    },
  })
)(Main);
