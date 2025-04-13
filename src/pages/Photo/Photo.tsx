import FastImage from '@d11/react-native-fast-image';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import Header from '../../components/Header.tsx';
import {PhotoScreenRouteProp} from '../../router/Router.types.ts';
import styles from './Photo.styles.ts';

const Photo = () => {
  const route = useRoute<PhotoScreenRouteProp>();
  const {id, img_src} = route.params;

  return (
    <View style={styles.photo}>
      <Header canGoBack theme={'dark'} share={img_src} title={'Photo ID'} subtitle={String(id)} />
      <FastImage style={styles.image} source={{uri: img_src}} />
    </View>
  );
};

export default Photo;
