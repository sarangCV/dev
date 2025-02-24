import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import {decode as atob, encode as btoa} from 'base-64';

import axios from 'axios';
import {SERVER_URL, getFormEncodedData} from 'utils/APIUtils';
import {showToast} from 'utils/index';

// TODO: Dahsboard
export const areaList = createAsyncThunk(
  'user/area',
  async ({tokenId}, thunkAPI) => {
    try {
      console.log('LOG FROM AREA LIST PARAMS----', tokenId);

      const response = await axios.get(`${SERVER_URL}/lco/list/`, {
        headers: {
          Authorization: `Token ${tokenId}`,
        },
      });
      console.log('RESPONSE FROM AREA LIST SLICE', response);
      if (response.status === 200) {
        return response.data;
      } else {
        console.log('Error status AREA LIST', response.status);
        return thunkAPI.rejectWithValue(response.data);
      }
      // if (response.data.result === true) {
      //   return {...response.data.data, email};
      // } else {
      //   return thunkAPI.rejectWithValue(response.data);
      // }
    } catch (error) {
      console.log('ERROR FROM AREA', error.response.data);
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

// export const areaDetail = createAsyncThunk(
//   'user/areas/details',
//   async ({tokenId, slug}, thunkAPI) => {
//     try {
//       console.log('LOG FROM area DETAIL PARAMS----', tokenId);

//       const response = await axios.get(`${SERVER_URL}/area/detail/`, {
//         headers: {
//           Authorization: `Token ${tokenId}`,
//         },
//         params: {
//           slug,
//         },
//       });
//       console.log('RESPONSE FROM area DETAIL SLICE', response);
//       if (response.status === 200) {
//         return response.data;
//       } else {
//         console.log('Error status area DETAIL', response.status);
//         return thunkAPI.rejectWithValue(response.data);
//       }
//       // if (response.data.result === true) {
//       //   return {...response.data.data, email};
//       // } else {
//       //   return thunkAPI.rejectWithValue(response.data);
//       // }
//     } catch (error) {
//       console.log('ERROR FROM area DETAIL', error.response.data);
//       if (!Array.isArray(error.response.data)) {
//         return thunkAPI.rejectWithValue(error.response.data);
//       }
//       if (error.code === 'ERR_NETWORK') {
//         showToast(error.message);
//         return thunkAPI.rejectWithValue({detail: error.message});
//       }
//       return thunkAPI.rejectWithValue(error.response.data[0]);
//     }
//   },
// );

export const areaSlice = createSlice({
  name: 'area',
  initialState: {
    fetching: false,
    areaListSuccess: false,
    areaListData: [],
    areaListError: false,
    areaListErrorMessage: '',
  },
  reducers: {
    clearAreaState: state => {
      return {
        ...state,
        fetching: false,
        areaListSuccess: false,
        areaListData: [],
        areaListError: false,
        areaListErrorMessage: '',
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(areaList.fulfilled, (state, {payload}) => {
        return {
          ...state,
          fetching: false,
          areaListSuccess: true,
          areaListData: payload.data,
        };
      })
      .addCase(areaList.pending, state => {
        return {
          ...state,
          fetching: true,
        };
      })
      .addCase(areaList.rejected, (state, {payload}) => {
        return {
          ...state,
          fetching: false,
          areaListSuccess: false,
          areaListError: false,
          areaListErrorMessage: payload.data,
        };
      });
  },
});

export const {clearAreaState} = areaSlice.actions;
export const areaSelector = state => state.area;
