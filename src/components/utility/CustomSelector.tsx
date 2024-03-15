import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {ArrowDownIcon} from '../../assets/svg/icons';
import {SharedStyles} from '../../styles/sharedStyles';

const CustomSelector = ({selected, onPress}) => {
  return (
    <Pressable style={styles.con} onPress={onPress}>
      <Text style={styles.selectedText}>{selected}</Text>
      <View style={styles.arrowCon}>
        <ArrowDownIcon />
      </View>
    </Pressable>
  );
};

export default CustomSelector;

const styles = StyleSheet.create({
  con: {
    height: PixelPerfect(50),
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  arrowCon: {
    height: '100%',
    width: PixelPerfect(50),
    backgroundColor: Colors.medWhite,
    ...SharedStyles.centred,
  },
  selectedText: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Regular,
    color: Colors.lightBlack,
    flex: 1,
    marginHorizontal: 14,
    textAlign: 'left',
  },
});
