import {
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

interface ISelectedButton {
  number: number | string;
  text: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
  styleNumberText: StyleProp<TextStyle>;
}

const SelectedButton: FC<ISelectedButton> = ({
  number,
  text,
  onPress,
  style,
  styleNumberText,
}) => {
  return (
    <TouchableOpacity style={[styles.con, style]} onPress={onPress}>
      <Text style={[styles.numberText, styleNumberText]}>{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SelectedButton;

const styles = StyleSheet.create({
  con: {
    height: PixelPerfect(55),
    width: PixelPerfect(44),
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginRight: 5,
    ...SharedStyles.centred,
  },
  text: {
    fontFamily: Fonts.Regular,
    fontSize: PixelPerfect(10),
    color: Colors.lightBlack,
  },
  numberText: {
    fontFamily: Fonts.Medium,
    fontSize: PixelPerfect(12),
    color: '#D89126',
    marginBottom: -5,
  },
});
