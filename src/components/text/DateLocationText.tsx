import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {t} from 'i18next';
import {CalenderIcon, HourIcon, LocationIcon} from '../../assets/svg/icons';
import {SharedStyles} from '../../styles/sharedStyles';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';

interface IDateLocationText {
  onPress?: () => void;
  location: String;
  date: String;
  time: String;
  style?: StyleProp<ViewStyle>;
}

const DateLocationText: FC<IDateLocationText> = ({
  onPress,
  location,
  date,
  time,
  style,
}) => {
  return (
    <Pressable style={[styles.con, style]} onPress={onPress}>
      <View style={styles.conText}>
        <LocationIcon />
        <Text style={styles.text}> {location} </Text>
      </View>
      <View style={styles.conText}>
        <CalenderIcon />
        <Text style={styles.text}>{date}</Text>
      </View>
      <View style={styles.conText}>
        <HourIcon />
        <Text style={styles.text}>{time}</Text>
      </View>
    </Pressable>
  );
};

export default DateLocationText;

const styles = StyleSheet.create({
  con: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  conText: {
    flexDirection: 'row',
    ...SharedStyles.centred,
    marginHorizontal: 3,
    marginTop: 10,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.Regular,
    fontSize: PixelPerfect(13),
    marginHorizontal: 3,
  },
});
