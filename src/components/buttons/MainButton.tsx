import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {SharedStyles} from '../../styles/sharedStyles';

interface IMainButton {
  style?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  onPress?: () => void;
  title: string;
}

const MainButton: FC<IMainButton> = ({style, styleTitle, onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.con, style]}>
      <Text style={[styles.title, styleTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: Colors.mainColor,
    borderRadius: 6,
    ...SharedStyles.centred,
  },
  title: {
    fontSize: PixelPerfect(14),
    fontFamily: Fonts.SemiBold,
    color: Colors.white,
  },
});
