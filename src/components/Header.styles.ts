import {StyleSheet} from 'react-native';

import {Colors} from '../styles/Colors.ts';
import {Typo} from '../styles/Typo.ts';

export default StyleSheet.create({
  header: {
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 16,
  },
  headerBack: {
    position: 'absolute',
    left: -2,
    bottom: 9,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typo.h1,
  },
  subTitle: {
    ...Typo.h3,
  },

  title_light: {
    ...Typo.h3,
    color: Colors.alt_fontColor,
  },
  subTitle_light: {
    ...Typo.h1,
    color: Colors.alt_fontColor,
  },

  headerShare: {
    position: 'absolute',
    right: -2,
    bottom: 9,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
