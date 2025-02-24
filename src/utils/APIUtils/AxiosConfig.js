import axios from 'axios';
import {SERVER_URL} from '../APIUtils';
const timeout = 30000;

const defaultConfig = {
  timeout: timeout,
};

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  config: defaultConfig,
});

const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled
    ? false
    : true;
}

const requestHandler = async request => {
  if (isHandlerEnabled(request)) {
    // Modify request here
    // const accessToken = await getData(StorageKeys.ACCESS_TOKEN)
    // request.headers.Authorization = `Bearer ${accessToken}`
    request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  return request;
}

// const addSocialAppCredentials = data => {
//   data.socialAppID = 'navic76734gdagg78643gefgh7832gdfszcds='
//   data.socialAppKey = 'lakzc6243fgdgyd7rhvdghc7y34gdvc64gv65='

//   return data
// }

const errorHandler = error => {
  // console.log("errorHandler", error.response);
  // if (isHandlerEnabled(error.config)) {
  //   if (error.response && error.response.status === 401
  //     && error.response.data && error.response.data.code == "token_not_valid"
  //   ) {
  // const dispatch = useDispatch();
  // dispatch(onTokenRefresh());
  //   }
  // }
  console.log(error);
  return Promise.reject(error);
}

const successHandler = response => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses Provide Success Message
  }
  console.log('Inside axios', response);
  return response;
}

axiosInstance.interceptors.request.use(requestHandler);
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
);

export {
  axiosInstance,
  isHandlerEnabled,
  requestHandler,
  // addSocialAppCredentials,
};
