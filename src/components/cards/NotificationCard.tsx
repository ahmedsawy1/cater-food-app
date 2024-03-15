import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Colors,
  ColorWithOpacity,
  Fonts,
  PixelPerfect,
} from '../../styles/stylesConstants';

const NotificationCard = ({date, title, message}) => {
  return (
    <>
      <View style={styles.con}>
        <Text style={styles.titleText}>{title}</Text>
        <Text
          style={[styles.titleText, {color: Colors.darkBrown, marginTop: 5}]}>
          {message}
        </Text>
      </View>
      <Text style={styles.dateText}>{date}</Text>
    </>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  dateText: {
    textAlign: 'right',
    marginBottom: 10,
    fontSize: PixelPerfect(9),
    fontFamily: Fonts.Medium,
    color: ColorWithOpacity(Colors.lightBlack, 0.53),
    margin: 4,
  },
  titleText: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Medium,
    color: Colors.lightBlack,
    textAlign: 'left',
  },
});
