import {StyleSheet} from 'react-native';

import {Typo} from '../../styles/Typo.ts';
import {UiKit} from '../../styles/UiKit.ts';

export default StyleSheet.create({
  splash: {
    flex: 1,
    paddingTop: 42,
    ...UiKit.xPad_m,
  },

  textView: {
    height: 129,
    width: 201,
    justifyContent: 'flex-end',
  },

  title: {
    ...Typo.title,
    color: 'white',
    textTransform: 'uppercase',
  },
  subTitle: {
    ...Typo.subTitle,
    color: 'white',
  },
});
