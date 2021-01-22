import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import AppNavigation from '@navigation/app-navigation';

export type PrimaryParamList = {
  authNavigation: undefined;
  appNavigation: undefined;
};

const Stack = createNativeStackNavigator<PrimaryParamList>();

const PrimaryNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="appNavigation" component={AppNavigation} />
    </Stack.Navigator>
  );
};

export default PrimaryNavigation;
