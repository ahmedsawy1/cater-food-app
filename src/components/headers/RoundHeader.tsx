import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';

const RoundHeader = ({title, subTitle, imageURL}) => {
  return (
    <View style={styles.detailsCon}>
      <View style={styles.catgImageCon}>
        <Image
          source={{uri: imageURL}}
          style={styles.catgImage}
          resizeMode="center"
        />
      </View>
      <View style={styles.namesCon}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.catgText}>{subTitle}</Text>
      </View>
      <View style={{alignItems: 'center', paddingHorizontal: 10}}>
        {/* <ArrowUpIcon fill="#707070" /> */}
      </View>
    </View>
  );
};

export default RoundHeader;

const styles = StyleSheet.create({
  detailsCon: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: -30,
  },
  catgImageCon: {
    flex: 1,
    justifyContent: 'center',
  },

  namesCon: {
    flex: 6,
  },
  catgImage: {
    height: PixelPerfect(44),
    width: PixelPerfect(44),
  },
  titleText: {
    fontSize: PixelPerfect(16),
    fontFamily: Fonts.Regular,
    color: Colors.black,
    textAlign: 'left',
  },
  catgText: {
    fontSize: PixelPerfect(11),
    fontFamily: Fonts.Regular,
    color: Colors.darkBrown,
    marginTop: PixelPerfect(-5),
    textAlign: 'left',
  },
});
