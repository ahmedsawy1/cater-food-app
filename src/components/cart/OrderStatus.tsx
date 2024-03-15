import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';

interface IOrderStatus {
  style?: StyleProp<ViewStyle>;
  firstTitle: String;
  secondTitle: String;
  thirdTitle: String;
  styleTitle: StyleProp<TextStyle>;
  styleCyrcle: StyleProp<ViewStyle>;
  styleLine: StyleProp<ViewStyle>;
  status: number;
}

const OrderStatus: FC<IOrderStatus> = ({
  style,
  firstTitle,
  secondTitle,
  thirdTitle,
  styleTitle,
  styleCyrcle,
  styleLine,
  status = 1,
}) => {
  return (
    <View style={[styles.con, style]}>
      <View style={styles.titlesCon}>
        <View style={styles.sharedView}>
          <Text style={[styles.sharedText, styleTitle]}>{firstTitle}</Text>
        </View>
        <View style={[styles.sharedView]}>
          <Text style={[styles.sharedText, styleTitle]}>{secondTitle}</Text>
        </View>
        <View style={styles.sharedView}>
          <Text style={[styles.sharedText, styleTitle]}>{thirdTitle}</Text>
        </View>
      </View>
      <View style={[styles.cyrclesCon]}>
        <View
          style={[
            styles.cyrcleFlex,
            styleCyrcle,
            status == 1 && {backgroundColor: Colors.mainColor},
            status > 1 && {backgroundColor: '#267D8A'},
          ]}></View>
        <View style={[styles.lineFlex, styleLine]}></View>
        <View
          style={[
            styles.cyrcleFlex,
            styleCyrcle,
            status == 2 && {backgroundColor: Colors.mainColor},
            status > 2 && {backgroundColor: '#267D8A'},
          ]}></View>
        <View style={[styles.lineFlex, styleLine]}></View>
        <View
          style={[
            styles.cyrcleFlex,
            styleCyrcle,
            status == 3 && {backgroundColor: Colors.mainColor},
            status > 3 && {backgroundColor: '#267D8A'},
          ]}></View>
      </View>
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  con: {
    width: '100%',
  },
  cyrclesCon: {
    paddingHorizontal: PixelPerfect(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  cyrcleFlex: {
    height: PixelPerfect(18),
    width: PixelPerfect(18),
    backgroundColor: Colors.white,
    borderWidth: PixelPerfect(3),
    borderRadius: PixelPerfect(9),
    borderColor: Colors.white,
  },
  lineFlex: {
    flex: 5,
    backgroundColor: Colors.white,
    height: PixelPerfect(3),
  },
  sharedView: {
    flex: 1,
  },
  sharedText: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Medium,
    color: Colors.lightBlack,
    marginBottom: 8,
    textAlign: 'center',
  },
  titlesCon: {
    width: '100%',
    flexDirection: 'row',
  },
});
