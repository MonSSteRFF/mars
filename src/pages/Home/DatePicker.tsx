import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RNDatePicker from 'react-native-date-picker';

import Calendar from '../../assets/icons/calendar.svg';
import manifest from '../../lib/Curiosity/curiosity_manifest.json';
import styles from './Home.styles.ts';

interface DatePickerProps {
  date: Date;
  onChange: (d: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({date, onChange}) => {
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  return (
    <View style={styles.form_field}>
      <Text style={styles.label}>Date</Text>

      <TouchableOpacity style={styles.select} onPress={() => setDatePickerOpen(true)}>
        <Text style={styles.select_text}>
          Select date: {date.getFullYear()}.{date.getMonth()}.{date.getDate()}
        </Text>

        <Calendar style={styles.select_icon} />
      </TouchableOpacity>

      <RNDatePicker
        modal
        date={date}
        open={datePickerOpen}
        mode={'date'}
        maximumDate={new Date(manifest.rover.max_date)}
        minimumDate={new Date(manifest.rover.landing_date)}
        onConfirm={d => {
          setDatePickerOpen(false);
          onChange(d);
        }}
        onCancel={() => {
          setDatePickerOpen(false);
        }}
      />
    </View>
  );
};

export default DatePicker;
