import {persistReducer, persistStore} from 'redux-persist';
import {createStore} from 'redux';
import rootReducer from '@stores/rootReducer';
import Reactotron from '@config/reactotron-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ROOT_STATE_STORAGE_KEY = 'root';

// export async function setupRootStore() {

const persistConfig = {
  key: ROOT_STATE_STORAGE_KEY,
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['homeReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [''],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// @ts-ignore
const rootStore = createStore(persistedReducer, Reactotron.createEnhancer());
const persistor = persistStore(rootStore);

export {rootStore, persistor};
