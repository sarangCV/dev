import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import {decode as atob, encode as btoa} from 'base-64';

import axios from 'axios';
import {SERVER_URL, getFormEncodedData} from 'utils/APIUtils';
import {showToast} from 'utils/index';

// TODO: Dahsboard
export const feasibilityList = createAsyncThunk(
  'user/feasibility',
  async ({tokenId}, thunkAPI) => {
    try {
      console.log('LOG FROM feasibility LIST PARAMS----', tokenId);

      const response = await axios.get(`${SERVER_URL}/enquiry/feasible/list/`, {
        headers: {
          Authorization: `Token ${tokenId}`,
        },
      });
      console.log('RESPONSE FROM feasibility LIST SLICE', response);
      if (response.status === 200) {
        return response.data;
      } else {
        console.log('Error status feasibility LIST', response.status);
        return thunkAPI.rejectWithValue(response.data);
      }
      // if (response.data.result === true) {
      //   return {...response.data.data, email};
      // } else {
      //   return thunkAPI.rejectWithValue(response.data);
      // }
    } catch (error) {
      console.log('ERROR FROM feasibility', error.response.data);
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

export const feasibilitySlice = createSlice({
  name: 'feasibility',
  initialState: {
    fetching: false,
    feasibilityListSuccess: false,
    feasibilityListData: [],
    feasibilityListError: false,
    feasibilityListErrorMessage: '',
  },
  reducers: {
    clearFeasibilityState: state => {
      return {
        ...state,
        fetching: false,
        feasibilityListSuccess: false,
        feasibilityListData: [],
        feasibilityListError: false,
        feasibilityListErrorMessage: '',
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(feasibilityList.fulfilled, (state, {payload}) => {
        return {
          ...state,
          fetching: false,
          feasibilityListSuccess: true,
          feasibilityListData: payload.data,
        };
      })
      .addCase(feasibilityList.pending, state => {
        return {
          ...state,
          fetching: true,
        };
      })
      .addCase(feasibilityList.rejected, (state, {payload}) => {
        return {
          ...state,
          fetching: false,
          feasibilityListSuccess: false,
          feasibilityListError: false,
          feasibilityListErrorMessage: payload.data,
        };
      });
  },
});

export const {clearFeasibilityState} = feasibilitySlice.actions;
export const feasibilitySelector = state => state.feasibility;
