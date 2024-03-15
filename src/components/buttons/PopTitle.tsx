import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import {XCloseIcon} from '../../assets/svg/icons';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';

const PopTitle = ({onPress}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text
        style={{
          flex: 1,
          color: Colors.lightBlack,
          fontFamily: Fonts.Medium,
          fontSize: PixelPerfect(14),
          textAlign: 'left',
        }}>
        {t('Filter results')}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={{
          padding: 10,
          backgroundColor: Colors.white,
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: Colors.grayBorder,
        }}>
        <XCloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default PopTitle;

const styles = StyleSheet.create({});
