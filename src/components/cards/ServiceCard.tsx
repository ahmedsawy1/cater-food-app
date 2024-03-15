import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';

const ServiceCard = ({imageURL, title}) => {
  return (
    <ImageBackground source={{uri: imageURL}} style={styles.con}>
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  con: {
    height: PixelPerfect(62),
    width: PixelPerfect(100),
    marginRight: 5,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  title: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Regular,
    color: Colors.white,
    textAlign: 'right',
  },
});
