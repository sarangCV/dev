import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import {decode as atob, encode as btoa} from 'base-64';

import axios from 'axios';
import {SERVER_URL, getFormEncodedData} from 'utils/APIUtils';
import {showToast} from 'utils/index';

// TODO: Dahsboard
export const dashBoard = createAsyncThunk(
  'home/dash',
  async ({tokenId}, thunkAPI) => {
    console.log('FROM DASH BOARD SLICE----');

    try {
      const response = await axios.get(`${SERVER_URL}/home/`, {
        headers: {
          Authorization: `Token ${tokenId}`,
        },
      });
      console.log('RESPONSE FROM HOME SLICE', response.data);
      if (response.status === 200) {
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
      console.log('ERROR FROM HOME', error.response.data);
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

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    fetching: false,
    success: false,
    homeData: [],
    error: false,
    errorMessage: '',
  },
  reducers: {
    clearState: state => {
      return {
        ...state,
        fetching: false,
        success: false,
        homeData: [],
        error: false,
        errorMessage: '',
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(dashBoard.fulfilled, (state, {payload}) => {
        return {
          ...state,
          fetching: false,
          success: true,
          homeData: payload.data,
        };
      })
      .addCase(dashBoard.pending, state => {
        return {
          ...state,
          fetching: true,
        };
      })
      .addCase(dashBoard.rejected, (state, {payload}) => {
        console.log('CASE REJECT DASH----', payload);
        return {
          ...state,
          error: true,
          errorMessage: payload,
          fetching: false,
          success: false,
          logoutSuccess: false,
        };
      });
  },
});

export const {clearState} = homeSlice.actions;
export const homeSelector = state => state.home;
