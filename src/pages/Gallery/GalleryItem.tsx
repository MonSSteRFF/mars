import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {Photo} from '../../lib/Curiosity/Query.types.ts';
import styles from './Gallery.styles.ts';

interface GalleryItemProps {
  photo: Photo;
  onPhotoClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = props => {
  return (
    <TouchableOpacity onPress={() => props.onPhotoClick()} style={styles.listItem}>
      <Image source={{uri: props.photo.img_src}} style={styles.listItem_photo} />
    </TouchableOpacity>
  );
};

export default GalleryItem;
