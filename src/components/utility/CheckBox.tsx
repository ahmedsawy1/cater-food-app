import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';

import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {SquareCheckedIcon, SquareNotCheckedIcon} from '../../assets/svg/icons';

interface ICheckBox {
  checked: boolean;
  onPress: () => void;
  onDiffrentTitlePress?: () => void;
  style?: StyleProp<ViewStyle>;
  title: string;
  diffrentTitle?: any;
}

const CheckBox: FC<ICheckBox> = ({
  checked,
  onPress,
  style,
  title,
  diffrentTitle,
  onDiffrentTitlePress,
}) => {
  return (
    <Pressable style={[styles.con, style]} onPress={onPress}>
      <View style={{alignItems: 'flex-start'}}>
        {checked ? (
          <SquareCheckedIcon height={14} width={14} />
        ) : (
          <SquareNotCheckedIcon height={14} width={14} />
        )}
      </View>

      <View style={{flex: 10, flexDirection: 'row'}}>
        <Text style={styles.titleText}>{title} </Text>
        {diffrentTitle && (
          <Text onPress={onDiffrentTitlePress} style={styles.diffrentTitle}>
            {diffrentTitle}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  con: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  titleText: {
    fontSize: PixelPerfect(11),
    fontFamily: Fonts.Regular,
    color: Colors.lightBlack,
    marginHorizontal: 5,
    flex: 1,
    textAlign: 'left',
  },
  diffrentTitle: {
    fontSize: PixelPerfect(10),
    fontFamily: Fonts.Regular,
    color: Colors.darkBrown,
  },
});
