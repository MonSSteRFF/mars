import {StyleSheet} from 'react-native';

import {Colors} from './Colors.ts';

const Font_Dosis = (fs: number, lh: number, fw: 200 | 300 | 400 | 500 | 600 | 700 | 800, ls: number = 0) => {
  const Dosis = {
    200: 'Dosis-ExtraLight',
    300: 'Dosis-Light',
    400: 'Dosis-Regular',
    500: 'Dosis-Medium',
    600: 'Dosis-SemiBold',
    700: 'Dosis-Bold',
    800: 'Dosis-ExtraBold',
  };

  return {
    fontSize: fs,
    lineHeight: lh,
    letterSpacing: ls,
    fontWeight: fw,
    fontFamily: Dosis[fw],

    color: Colors.fontColor,
  };
};

export const Typo = StyleSheet.create({
  h1: {
    ...Font_Dosis(18, 22, 600),
  },
  h3: {
    ...Font_Dosis(13, 22, 400),
  },
  label: {
    ...Font_Dosis(14, 16, 400, 0.2),
  },
  btn: {
    ...Font_Dosis(18, 20, 600, 0.2),
  },
  select: {
    ...Font_Dosis(18, 20, 400, 0.2),
  },

  title: {
    ...Font_Dosis(90, 92, 300, 0.2),
  },
  subTitle: {
    ...Font_Dosis(24, 26, 600, 0.2),
  },
});
