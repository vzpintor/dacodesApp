import React, {FunctionComponent as Component, useEffect, useRef} from 'react';
import {Provider} from 'react-redux';
// import {rootStore, setupRootStore} from '@stores/rootStore';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {NavigationContainerRef} from '@react-navigation/native';
import * as storage from '@utils/storage/storage';
import {useNavigationPersistence} from '@navigation/navigation-utilities';
import {RootNavigator} from '@navigation/root-navigator';
import {persistor, rootStore} from '@stores/rootStore';
import {PersistGate} from 'redux-persist/integration/react';

enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App: Component<{}> = () => {
  const navigationRef: any = useRef<NavigationContainerRef>();

  useEffect(() => {
    if (__DEV__) {
      import('@config/reactotron-config').then(() =>
        console.log('Reactotron Configured'),
      );
    }
  });

  const {
    initialNavigationState,
    onNavigationStateChange,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  return (
    <Provider store={rootStore}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <RootNavigator
            ref={navigationRef}
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
