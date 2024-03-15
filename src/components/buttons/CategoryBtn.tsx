import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {SortIcon2} from '../../assets/svg/icons';
import {SharedStyles} from '../../styles/sharedStyles';

interface ICategoryBtn {
  title: string;
  onPress: () => void;
  styleTitle: StyleProp<TextStyle>;
}

const CategoryBtn: FC<ICategoryBtn> = ({title, onPress, styleTitle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.con}>
      {title == 'theDefault' ? (
        <SortIcon2 />
      ) : (
        <Text style={[styles.title, styleTitle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CategoryBtn;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 8,
    paddingHorizontal: 11,
    backgroundColor: Colors.white,
    borderRadius: PixelPerfect(7),
    marginRight: 5,
    ...SharedStyles.centred,
  },
  title: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Regular,
    color: Colors.black,
    textAlign: 'left',
  },
});
