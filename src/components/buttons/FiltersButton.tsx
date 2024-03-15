import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {SharedStyles} from '../../styles/sharedStyles';
import {SortIcon2} from '../../assets/svg/icons';

interface IButton {
  title: string;
  onPress: () => void;
}

const FiltersButton: FC<IButton> = ({title, onPress}) => {
  return (
    <Pressable style={styles.con} onPress={onPress}>
      <SortIcon2 />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default FiltersButton;

const styles = StyleSheet.create({
  con: {
    padding: 10,
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 10,
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.SemiBold,
    color: Colors.lightBlack,
  },
});
