import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import HomeScreen from '@screens/home/home-screen';
import MovieDetail from '@screens/detail/movie-detail';

export type AppParamList = {
  home: undefined;
  detail: undefined;
};

const AuthStack = createNativeStackNavigator<AppParamList>();

const AppNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
      }}>
      <AuthStack.Screen
        name="home"
        options={{title: 'Películas'}}
        component={HomeScreen}
      />
      <AuthStack.Screen
        name="detail"
        options={{title: ''}}
        component={MovieDetail}
      />
    </AuthStack.Navigator>
  );
};

export default AppNavigation;
