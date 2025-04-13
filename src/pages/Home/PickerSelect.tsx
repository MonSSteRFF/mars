import React from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Dropdown from '../../assets/icons/dropdown.svg';
import {Cameras} from '../../lib/Curiosity/Query.ts';
import styles from './Home.styles.ts';

interface PickerSelectProps {
  camera: keyof typeof Cameras;
  onChange: (v: keyof typeof Cameras) => void;
}

const PickerSelect: React.FC<PickerSelectProps> = ({camera, onChange}) => {
  return (
    <View style={styles.form_field}>
      <Text style={styles.label}>Rover Camera</Text>

      <RNPickerSelect
        value={camera}
        onValueChange={v => onChange(v)}
        placeholder={{}}
        Icon={Dropdown}
        useNativeAndroidPickerStyle={false}
        items={(Object.keys(Cameras) as Array<keyof typeof Cameras>).map(c => ({label: Cameras[c], value: c}))}
        style={{
          inputAndroidContainer: styles.select,
          inputAndroid: styles.select_text,
          iconContainer: styles.select_icon,
        }}
      />
    </View>
  );
};

export default PickerSelect;
