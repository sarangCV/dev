import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import {decode as atob, encode as btoa} from 'base-64';

import axios from 'axios';
import {SERVER_URL, getFormEncodedData} from 'utils/APIUtils';
import {showToast} from 'utils/index';

// TODO: Dahsboard
export const subscriberList = createAsyncThunk(
  'user/subscribers',
  async ({tokenId}, thunkAPI) => {
    try {
      console.log('LOG FROM SUBSCRIBER LIST PARAMS----', tokenId);

      const response = await axios.get(`${SERVER_URL}/subscriber/list/`, {
        headers: {
          Authorization: `Token ${tokenId}`,
        },
      });
      console.log('RESPONSE FROM SUBSCRIBER LIST SLICE', response);
      if (response.status === 200) {
        return response.data;
      } else {
        console.log('Error status SUBSCRIBER LIST', response.status);
        return thunkAPI.rejectWithValue(response.data);
      }
      // if (response.data.result === true) {
      //   return {...response.data.data, email};
      // } else {
      //   return thunkAPI.rejectWithValue(response.data);
      // }
    } catch (error) {
      console.log('ERROR FROM SUBSCRIBER', error.response.data);
      if (!Array.isArray(error.response.data)) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      if (error.code === 'ERR_NETWORK') {
        showToast(error.message);
        return thunkAPI.rejectWithValue({detail: error.message});
      }
      return thunkAPI.rejectWithValue(error.response.data[0]);
    }
  },
);

export const subscriberDetail = createAsyncThunk(
  'user/subscribers/details',
  async ({tokenId, slug}, thunkAPI) => {
    try {
      console.log('LOG FROM SUBSCRIBER DETAIL PARAMS----', tokenId);

      const response = await axios.get(`${SERVER_URL}/subscriber/detail/`, {
        headers: {
          Authorization: `Token ${tokenId}`,
        },
        params: {
          slug,
        },
      });
      console.log('RESPONSE FROM SUBSCRIBER DETAIL SLICE', response);
      if (response.status === 200) {
        return response.data;
      } else {
        console.log('Error status SUBSCRIBER DETAIL', response.status);
        return thunkAPI.rejectWithValue(response.data);
      }
      // if (response.data.result === true) {
      //   return {...response.data.data, email};
      // } else {
      //   return thunkAPI.rejectWithValue(response.data);
      // }
    } catch (error) {
      console.log('ERROR FROM SUBSCRIBER DETAIL', error.response.data);
      if (!Array.isArray(error.response.data)) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      if (error.code === 'ERR_NETWORK') {
        showToast(error.message);
        return thunkAPI.rejectWithValue({detail: error.message});
      }
      return thunkAPI.rejectWithValue(error.response.data[0]);
    }
  },
);

// GET api
export const getSubscriberCreateData = createAsyncThunk(
  'user/subscribers/create/data',
  async ({tokenId, slug}, thunkAPI) => {
    try {
      console.log('LOG FROM SUBSCRIBER CREATE DATA PARAMS----', tokenId);

      const response = await axios.get(`${SERVER_URL}/subscriber/create/`, {
        headers: {
          Authorization: `Token ${tokenId}`,
        },
        params: {
          lco_slug: slug,
        },
      });
      console.log('RESPONSE FROM SUBSCRIBER CREATE GET DATA SLICE', response);
      if (response.status === 200) {
        return response.data;
      } else {
        console.log('Error status SUBSCRIBER CREATE GET DATA', response.status);
        return thunkAPI.rejectWithValue(response.data);
      }
      // if (response.data.result === true) {
      //   return {...response.data.data, email};
      // } else {
      //   return thunkAPI.rejectWithValue(response.data);
      // }
    } catch (error) {
      console.log('ERROR FROM SUBSCRIBER DETAIL', error.response.data);
      if (!Array.isArray(error.response.data)) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      if (error.code === 'ERR_NETWORK') {
        showToast(error.message);
        return thunkAPI.rejectWithValue({detail: error.message});
      }
      return thunkAPI.rejectWithValue(error.response.data[0]);
    }
  },
);

// POST api
export const createSubscriber = createAsyncThunk(
  'user/subscribers/create',
  async ({tokenId, payload}, thunkAPI) => {
    try {
      // console.log(
      //   'LOG FROM SUBSCRIBER CREATE PARAMS--------------------->>',
      //   payload,
      // );
      var encodedData = getFormEncodedData(payload);

      const response = await axios.post(
        `${SERVER_URL}/subscriber/create/`,
        payload,
        {
          headers: {
            Authorization: `Token ${tokenId}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log(
        'RESPONSE FROM SUBSCRIBER CREATE SLICE------------------------->>',
        response.data,
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.log(
          'Error status SUBSCRIBER CREATE DATA---------------------->>',
          response,
        );
        // return thunkAPI.rejectWithValue(response.data);
      }
      if (response.data.result === true) {
        // return {...response.data.data, email};
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log(
        'ERROR FROM SUBSCRIBER DETAIL------------------------->>',
        error.response,
      );
      if (!Array.isArray(error.response.data)) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      if (error.code === 'ERR_NETWORK') {
        showToast(error.message);
        return thunkAPI.rejectWithValue({detail: error.message});
      }
      return thunkAPI.rejectWithValue(error.response.data[0]);
    }
  },
);

export const subscriberSlice = createSlice({
  name: 'subscriber',
  initialState: {
    fetching: false,
    subscriberListSuccess: false,
    subscriberListData: [],
    subscriberListError: false,
    subscriberListErrorMessage: '',
    subscriberDetailSuccess: false,
    subscriberDetailData: [],
    subscriberDetailError: false,
    subscriberDetailErrorMessage: '',
    createSubscriberInput: {},
    subscriberCreateDataSuccess: false,
    subscriberCreateData: [],
    subscriberCreateDataError: false,
    subscriberCreateDataErrorMessage: '',
    // Create subscriber
    createSubscriberFetching: false,
    createSubscriberSuccess: false,
    createSubscriberResponse: [],
    createSubscriberError: false,
    createSubscriberErrorMessage: '',
    kycListData: {},
  },
  reducers: {
    clearState: state => {
      return {
        ...state,
        fetching: false,
        subscriberListSuccess: false,
        subscriberListData: [],
        subscriberListError: false,
        subscriberListErrorMessage: '',
        subscriberDetailSuccess: false,
        subscriberDetailData: [],
        subscriberDetailError: false,
        subscriberDetailErrorMessage: '',
        subscriberCreateDataSuccess: false,
        subscriberCreateData: [],
        subscriberCreateDataError: false,
        subscriberCreateDataErrorMessage: '',
      };
    },
    clearSubscriberInputState: state => {
      return {
        ...state,
        createSubscriberInput: {},
      };
    },
    clearSubscriberCreatedState: state => {
      return {
        ...state,
        createSubscriberFetching: false,
        createSubscriberSuccess: false,
        createSubscriberResponse: [],
        createSubscriberError: false,
        createSubscriberErrorMessage: '',
      };
    },
    addCreateSubscriberInput: (state, {payload}) => {
      return {
        ...state,
        createSubscriberInput: {...state.createSubscriberInput, ...payload},
      };
    },
    // Adding KYC list data locally for take a look back section
    addKycListData: (state, {payload}) => {
      return {
        ...state,
        kycListData: {...state.kycListData, ...payload},
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(subscriberList.fulfilled, (state, {payload}) => {
        return {
          ...state,
          fetching: false,
          subscriberListSuccess: true,
          subscriberListData: payload.data,
        };
      })
      .addCase(subscriberList.pending, state => {
        return {
          ...state,
          fetching: true,
        };
      })
      .addCase(subscriberList.rejected, (state, {payload}) => {
        console.log('CASE REJECT DASH----', payload);
        return {
          ...state,
          fetching: false,
          subscriberListSuccess: false,
          subscriberListError: false,
          subscriberListErrorMessage: payload.data,
        };
      })
      .addCase(subscriberDetail.fulfilled, (state, {payload}) => {
        return {
          ...state,
          fetching: false,
          subscriberDetailSuccess: true,
          subscriberDetailData: payload.data,
        };
      })
      .addCase(subscriberDetail.pending, state => {
        return {
          ...state,
          fetching: true,
        };
      })
      .addCase(subscriberDetail.rejected, (state, {payload}) => {
        console.log('CASE REJECT DASH----', payload);
        return {
          ...state,
          fetching: false,
          subscriberDetailSuccess: false,
          subscriberDetailError: false,
          subscriberDetailErrorMessage: payload.data,
        };
      })
      // Subscriber create GET
      .addCase(getSubscriberCreateData.fulfilled, (state, {payload}) => {
        return {
          ...state,
          fetching: false,
          subscriberCreateDataSuccess: true,
          subscriberCreateData: payload.data,
        };
      })
      .addCase(getSubscriberCreateData.pending, state => {
        return {
          ...state,
          fetching: true,
        };
      })
      .addCase(getSubscriberCreateData.rejected, (state, {payload}) => {
        console.log('CASE REJECT DASH----', payload);
        return {
          ...state,
          fetching: false,
          subscriberCreateDataError: true,
          subscriberCreateDataErrorMessage: payload.data,
        };
      })
      // Subscriber create
      .addCase(createSubscriber.fulfilled, (state, {payload}) => {
        return {
          ...state,
          createSubscriberFetching: false,
          createSubscriberSuccess: true,
          createSubscriberResponse: payload,
        };
      })
      .addCase(createSubscriber.pending, state => {
        return {
          ...state,
          createSubscriberFetching: true,
        };
      })
      .addCase(createSubscriber.rejected, (state, {payload}) => {
        console.log('CASE REJECT DASH----', payload);
        return {
          ...state,
          fetching: false,
          createSubscriberError: true,
          createSubscriberErrorMessage: payload,
        };
      });
  },
});

export const {
  clearSubscriberState,
  clearSubscriberCreatedState,
  addCreateSubscriberInput,
  clearSubscriberInputState,
  addKycListData,
} = subscriberSlice.actions;
export const subscriberSelector = state => state.subscriber;
