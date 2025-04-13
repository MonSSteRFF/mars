import {StyleSheet} from 'react-native';

import {Colors} from '../../styles/Colors.ts';
import {Typo} from '../../styles/Typo.ts';
import {UiKit} from '../../styles/UiKit.ts';

export default StyleSheet.create({
  page: {
    paddingTop: 42,
    height: '100%',
  },
  form: {
    ...UiKit.xPad_l,
    flex: 1,
    justifyContent: 'center',
  },
  form_field: {
    marginBottom: 16,
    gap: 7,
  },
  label: {
    ...Typo.label,
  },
  select: {
    backgroundColor: Colors.bg_select,
    borderRadius: 10,
    height: 60,
    justifyContent: 'space-between',
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  select_text: {
    ...Typo.select,
  },
  select_icon: {
    position: 'absolute',
    right: 12,
  },

  button: {
    backgroundColor: Colors.brand,
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    shadowColor: Colors.brand,
    elevation: 14,
  },
  button_text: {
    ...Typo.btn,
    color: Colors.alt_fontColor,
  },

  bgImage: {
    resizeMode: 'contain',
    aspectRatio: 1500 / 821,
    width: '100%',
    height: 'auto',
  },
});
