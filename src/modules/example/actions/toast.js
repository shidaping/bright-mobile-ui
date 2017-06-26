import { SHOW_TOAST, HIDE_TOAST } from '../constants';
export function showToast(dispatch, requestData) {
  dispatch({
    type: SHOW_TOAST,
    data: requestData,
  });
  setTimeout(() => {
    dispatch({
      type: HIDE_TOAST,
    });
  }, 3000);
}
