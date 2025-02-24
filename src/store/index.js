import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from 'features/Auth/AuthSlice';
import {homeSlice} from 'features/Home/HomeSlice';
import {subscriberSlice} from 'features/Subscribers/SubscriberSlice';
import {areaSlice} from 'features/Area/AreaSlice';
import {feasibilitySlice} from 'features/Feasibilty/FeasibilitySlice';

const reducers = combineReducers({
  auth: authSlice.reducer,
  home: homeSlice.reducer,
  subscriber: subscriberSlice.reducer,
  area: areaSlice.reducer,
  feasibility: feasibilitySlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

const persistor = persistStore(store);

export {store, persistor};
