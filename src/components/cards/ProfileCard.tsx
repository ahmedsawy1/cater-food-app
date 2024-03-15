import React from 'react';
import {PenIcon} from '../../assets/svg/icons';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';

const ProfileCard = ({title, subTitle}) => {
  return (
    <View style={styles.con}>
      <Text style={styles.title}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <PenIcon />
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  con: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Medium,
    color: Colors.black,
    marginBottom: 5,
    textAlign: 'left',
  },
  subTitle: {
    flex: 1,
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Medium,
    color: Colors.darkBrown,
    textAlign: 'left',
  },
});
