import {Dimensions, StyleSheet} from 'react-native';

import {UiKit} from '../../styles/UiKit.ts';

export default StyleSheet.create({
  gallery: {
    ...UiKit.xPad_s,
  },

  list: {
    paddingBottom: 150,
  },

  listItem: {
    width: (Dimensions.get('screen').width - 48) / 3,
    height: (Dimensions.get('screen').width - 48) / 3,
    marginRight: 8,
    marginBottom: 8,
  },
  listItem_photo: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
