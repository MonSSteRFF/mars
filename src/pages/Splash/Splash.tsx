import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text} from 'react-native';

import GradientText from '../../components/GradientText.tsx';
import {Screens} from '../../router/Router.types.ts';
import styles from './Splash.styles.ts';

const Splash = () => {
  const navigation = useNavigation();

  useFocusEffect(() => {
    // start loading app

    setTimeout(() => {
      navigation.navigate(Screens.Home);
    }, 1000);
  });

  return (
    <ImageBackground source={require('../../assets/images/Splash.png')} style={styles.splash}>
      <GradientText colors={['#FFFFFF', '#3A1707']} style={styles.textView}>
        <Text style={styles.title}>Mars</Text>
        <Text style={styles.subTitle}>by Curiosity</Text>
      </GradientText>
    </ImageBackground>
  );
};

export default Splash;
