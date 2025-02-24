import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import {decode as atob, encode as btoa} from 'base-64';

import axios from 'axios';
import {SERVER_URL, getFormEncodedData} from 'utils/APIUtils';
import {showToast} from 'utils/index';

// TODO: Login
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({username, password}, thunkAPI) => {
    try {
      var data = {
        username,
        password,
      };
      console.log('VALUES FROM AUTH', data);

      var encodedData = getFormEncodedData(data);
      const response = await axios.post(`${SERVER_URL}/login/`, encodedData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('RESPONSE FROM AUTH', response.data);
      if (response.status === 201) {
        return response.data;
      } else {
        console.log('Error status AUTH', response.status);
        return thunkAPI.rejectWithValue(response.data);
      }
      // if (response.data.result === true) {
      //   return {...response.data.data, email};
      // } else {
      //   return thunkAPI.rejectWithValue(response.data);
      // }
    } catch (error) {
      console.log('ERROR FROM AUTH', error);
      if (error.code === 'ERR_NETWORK') {
        showToast(error.message);
        return thunkAPI.rejectWithValue({detail: error.message});
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

// TODO: Reset password
// export const resetPassword = createAsyncThunk(
//   'auth/password/reset',
//   async ({user_name, password, new_password}, thunkAPI) => {
//     try {
//       var data = {
//         username: user_name,
//         password,
//         new_password,
//       };
//       console.log('VALUES FROM RESET PASSWORD', data);

//       var encodedData = getFormEncodedData(data);
//       const response = await axios.post(
//         `${SERVER_URL}/first-password-change/`,
//         encodedData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         },
//       );
//       console.log('RESPONSE FROM RESET PASSWORD', response.data);
//       if (response.status === 200) {
//         return response.data;
//       } else {
//         console.log('Error status RESET PASSWORD', response.status);
//         return thunkAPI.rejectWithValue(response.data);
//       }
//     } catch (error) {
//       console.log('ERROR CATCH----', error);
//       if (error.code === 'ERR_NETWORK') {
//         showToast(error.message);
//         return thunkAPI.rejectWithValue({detail: error.message});
//       }
//       return thunkAPI.rejectWithValue(error.response);
//       // return thunkAPI.rejectWithValue(error.response.data);
//     }
//   },
// );

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    fetching: false,
    success: false,
    loginSuccess: false,
    logoutSuccess: false,
    error: false,
    errorMessage: '',
    loggedIn: false,
    accessToken: '',
    userData: [],
    passwordResetted: false,
    resetSuccessMessage: '',
    connected: false,
  },
  reducers: {
    setUserData: (state, {payload}) => {
      return {
        ...state,
        userData: payload,
      };
    },
    clearUserData: state => {
      return {
        ...state,
        userData: [],
      };
    },
    clearState: state => {
      return {
        ...state,
        error: false,
        errorMessage: '',
        success: false,
        fetching: false,
        loginSuccess: false,
        logoutSuccess: false,
        passwordResetted: false,
        resetSuccessMessage: '',
      };
    },
    clearAuthToken: state => {
      state.userToken = '';
      return state;
    },
    logout: state => {
      EncryptedStorage.removeItem('persist:root');
      return {
        ...state,
        fetching: false,
        success: false,
        loginSuccess: false,
        logoutSuccess: false,
        error: false,
        errorMessage: '',
        loggedIn: false,
        accessToken: '',
        userData: [],
        passwordResetted: false,
        resetSuccessMessage: '',
      };
      // if (auth().currentUser !== null) {
      //   auth().signOut()
      // }
    },

    changeNetStatus: (state, {payload}) => {
      state.connected = payload.connected;

      return state;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, {payload}) => {
        console.log('FROM BUILDER FULLFILLED', payload.data);
        return {
          ...state,
          fetching: false,
          success: true,
          accessToken: payload.data.auth_token,
          loginSuccess: true,
          loggedIn: true,
          userData: payload.data,
        };
      })
      .addCase(loginUser.pending, state => {
        return {
          ...state,
          fetching: true,
        };
      })
      .addCase(loginUser.rejected, (state, {payload}) => {
        console.log('CASE REJECT LOGIN----', payload);
        return {
          ...state,
          errorMessage: payload.data[0],
          error: true,
          fetching: false,
          success: false,
          logoutSuccess: false,
        };
      });
    // TODO: Reset password
    // .addCase(resetPassword.fulfilled, (state, {payload}) => {
    //   console.log('CASE FULL FILLED----');
    //   return {
    //     ...state,
    //     fetching: false,
    //     success: true,
    //     passwordResetted: true,
    //     resetSuccessMessage: payload?.success,
    //     userData: {...state.userData, isFirstLogin: false},
    //   };
    // })
    // .addCase(resetPassword.pending, state => {
    //   return {
    //     ...state,
    //     fetching: true,
    //   };
    // })
    // .addCase(resetPassword.rejected, (state, {payload}) => {
    //   console.log('CASE REJECT----');
    //   return {
    //     ...state,
    //     errorMessage: payload.data?.error,
    //     error: true,
    //     fetching: false,
    //   };
    // });
  },
});

export const {
  setUserData,
  clearState,
  clearAuthToken,
  logout,
  changeNetStatus,
} = authSlice.actions;
export const authSelector = state => state.auth;
