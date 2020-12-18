import { Middleware } from "redux";

import http from "../utils/http";
import { apiCallBegin, apiCallFailed, apiCallSuccess } from "../store/api";

const apiMiddleware: Middleware = ({ dispatch }) => (next) => async (
    action
) => {
  if (action.type !== apiCallBegin.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch(onStart());

  const response = await http[method](url, data);

  if (response.error) {
    const errorResponse = response.error.response;
    const errorMessage = response.error.message;

    dispatch(apiCallFailed(errorResponse));

    if (onError) return dispatch(onError({ message: errorMessage }));
    // this could return default error action
    return;
  }
  dispatch(apiCallSuccess(response.data));
  return dispatch(onSuccess(response.data));
};

export default apiMiddleware;
