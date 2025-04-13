import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps {
  colors: [string, string];
  children: React.ReactNode;
  style: ViewStyle;
}

const GradientText: React.FC<GradientTextProps> = props => {
  return (
    <MaskedView maskElement={<View style={props.style}>{props.children}</View>} style={props.style}>
      <LinearGradient colors={props.colors} start={{x: 0, y: 0}} end={{x: 0, y: 2}} style={{flex: 1}} />
    </MaskedView>
  );
};

export default GradientText;
