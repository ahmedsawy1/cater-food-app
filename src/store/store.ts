import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // defaults to localStorage for web

import authReducer from './reducers/authReducer';
import tempReducer from './reducers/temp';

const rootReducer = combineReducers({
  authReducer,
  tempReducer,
});

const persistConfig = {
  key: 'tempReducer',
  storage: AsyncStorage,
  // blackList: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
