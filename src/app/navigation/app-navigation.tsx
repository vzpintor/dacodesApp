import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import HomeScreen from '@screens/home/home-screen';

export type AppParamList = {
  home: undefined;
};

const AuthStack = createNativeStackNavigator<AppParamList>();

const AppNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <AuthStack.Screen name="home" component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

export default AppNavigation;
