import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React from 'react';
import {FlatList, View} from 'react-native';

import Header from '../../components/Header.tsx';
import {Cameras} from '../../lib/Curiosity/Query.ts';
import {Photo} from '../../lib/Curiosity/Query.types.ts';
import {Screens} from '../../router/Router.types.ts';
import {useStorage} from '../../storage/Storage.tsx';
import styles from './Gallery.styles.ts';
import GalleryItem from './GalleryItem.tsx';

const Gallery = () => {
  const {photoStorage} = useStorage(storage => ({photoStorage: storage.photoStorage}));

  const navigation = useNavigation();

  const onPhotoClick = (photo: Photo) => {
    navigation.navigate(Screens.Photo, {img_src: photo.img_src, id: photo.id});
  };

  return (
    <View style={styles.gallery}>
      {photoStorage.lastRequestData && (
        <Header
          canGoBack
          title={Cameras[photoStorage.lastRequestData.camera]}
          subtitle={`${photoStorage.lastRequestData.date.getDate()} ${photoStorage.lastRequestData.date.toLocaleDateString('en', {month: 'short'})}, ${photoStorage.lastRequestData.date.getFullYear()}`}
        />
      )}
      <FlatList
        onEndReached={() => {
          photoStorage.nextPage();
        }}
        contentContainerStyle={styles.list}
        numColumns={3}
        data={Object.keys(photoStorage.photos)
          .map(i => photoStorage.photos[i])
          .flat()}
        renderItem={({item}) => <GalleryItem photo={item} onPhotoClick={() => onPhotoClick(item)} />}
      />
    </View>
  );
};

export default observer(Gallery);
