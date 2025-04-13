import {Dimensions, StyleSheet} from 'react-native';

import {UiKit} from '../../styles/UiKit.ts';

export default StyleSheet.create({
  photo: {
    ...UiKit.xPad_s,
    paddingBottom: 34,
  },
  image: {
    backgroundColor: 'white',
    resizeMode: 'contain',
    borderRadius: 8,
    height: Dimensions.get('screen').height - 138,
    width: '100%',
  },
});
