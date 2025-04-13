import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Share, Text, TouchableOpacity, View} from 'react-native';

import Back from '../assets/icons/back.svg';
import Back_white from '../assets/icons/back_white.svg';
import ShareIcon from '../assets/icons/share.svg';
import styles from './Header.styles.ts';

interface HeaderProps {
  theme?: 'light' | 'dark';
  title: string;
  subtitle?: string;
  canGoBack?: boolean;
  share?: string;
}

const Header: React.FC<HeaderProps> = props => {
  const {title, subtitle, theme = 'light', canGoBack = false, share} = props;

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const shareLink = () => {
    if (share !== undefined) {
      Share.share({
        message: share,
      });
    }
  };

  return (
    <View style={styles.header}>
      {canGoBack && (
        <TouchableOpacity style={styles.headerBack} onPress={goBack}>
          {theme === 'dark' ? <Back_white /> : <Back />}
        </TouchableOpacity>
      )}

      <Text style={{...(theme === 'dark' ? styles.title_light : styles.title)}}>{title}</Text>
      {subtitle && <Text style={{...(theme === 'dark' ? styles.subTitle_light : styles.subTitle)}}>{subtitle}</Text>}

      {share && (
        <TouchableOpacity style={styles.headerShare} onPress={shareLink}>
          <ShareIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
