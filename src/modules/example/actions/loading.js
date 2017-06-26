import { SHOW_LOADING, HIDE_LOADING } from '../constants';
export function showLoading(dispatch, requestData) {
  dispatch({
    type: SHOW_LOADING,
    data: requestData,
  });
}
export function hideLoading(dispatch, requestData) {
  dispatch({
    type: HIDE_LOADING,
    data: requestData,
  });
}
