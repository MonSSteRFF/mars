import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Gallery from '../pages/Gallery/Gallery.tsx';
import Home from '../pages/Home/Home.tsx';
import Photo from '../pages/photo/Photo.tsx';
import Splash from '../pages/Splash/Splash.tsx';
import styles from './Router.styles.ts';
import {Screens} from './Router.types.ts';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.Splash}
        screenOptions={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarBackgroundColor: 'transparent',
          statusBarStyle: 'dark',
        }}>
        <Stack.Screen
          name={Screens.Splash}
          component={Splash}
          options={{
            statusBarStyle: 'light',
            contentStyle: styles.splash,
          }}
        />
        <Stack.Screen name={Screens.Home} component={Home} options={{contentStyle: styles.page}} />
        <Stack.Screen name={Screens.Gallery} component={Gallery} options={{contentStyle: styles.page}} />
        <Stack.Screen
          name={Screens.Photo}
          component={Photo}
          options={{contentStyle: styles.photo, statusBarStyle: 'light'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
