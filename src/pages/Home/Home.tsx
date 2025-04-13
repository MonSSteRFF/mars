import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';

import Header from '../../components/Header.tsx';
import {Cameras} from '../../lib/Curiosity/Query.ts';
import {Screens} from '../../router/Router.types.ts';
import {useStorage} from '../../storage/Storage.tsx';
import DatePicker from './DatePicker.tsx';
import styles from './Home.styles.ts';
import PickerSelect from './PickerSelect.tsx';

const Home = () => {
  const [camera, setCamera] = useState<keyof typeof Cameras>((Object.keys(Cameras) as Array<keyof typeof Cameras>)[0]);
  const [date, setDate] = useState<Date>(new Date('2021-11-18'));

  const {photoStorage} = useStorage(storage => ({photoStorage: storage.photoStorage}));

  const nav = useNavigation();

  const onSubmitForm = () => {
    photoStorage.openGallery({camera, date}).then(resolvePhotos => {
      if (resolvePhotos) {
        nav.navigate(Screens.Gallery);
      } else {
        Alert.alert(`Selected camera/date don't have photos :(`);
      }
    });
  };

  return (
    <View style={styles.page}>
      <Header title={'Select Camera and Date'} />

      <View style={styles.form}>
        <PickerSelect onChange={v => setCamera(v)} camera={camera} />
        <DatePicker date={date} onChange={d => setDate(d)} />

        <TouchableOpacity style={styles.button} onPress={onSubmitForm}>
          <Text style={styles.button_text}>Explore</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../../assets/images/HomeBg.png')} style={styles.bgImage} />
    </View>
  );
};

export default Home;
