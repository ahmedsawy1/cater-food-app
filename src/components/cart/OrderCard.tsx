import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import OrderStatus from './OrderStatus';
import MainButton from '../buttons/MainButton';
import {t} from 'i18next';

interface IOrderCard {
  style?: StyleProp<ViewStyle>;
  title: String;
  subTitle: String;
  status: number;
  price: number;
  onPress: () => void;
}

const OrderCard: FC<IOrderCard> = ({
  title,
  subTitle,
  price,
  status,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.con} onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.sharedText, {flex: 1}]}>{subTitle}</Text>
        <Text style={[styles.sharedText]}>{price}</Text>
      </View>
      <View style={styles.separator} />
      <OrderStatus
        status={status}
        styleTitle={styles.statusTitle}
        firstTitle="تأكيد مزود الخدمة"
        secondTitle="الدفع"
        thirdTitle="الحصول على الخدمة"
        styleLine={{backgroundColor: Colors.grayBorder}}
        styleCyrcle={{borderColor: Colors.grayBorder}}
      />
      {status == 2 && (
        <MainButton
          onPress={onPress}
          title={t('Pay now')}
          styleTitle={styles.buttonTitle}
          style={styles.payButton}
        />
      )}
    </TouchableOpacity>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  con: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 13,
    marginBottom: 8,
  },
  titleText: {
    fontSize: PixelPerfect(12),
    color: Colors.lightBlack,
    fontFamily: Fonts.Medium,
    marginBottom: 3,
    textAlign: 'left',
  },
  sharedText: {
    color: Colors.darkBrown,
    fontSize: PixelPerfect(11),
    fontFamily: Fonts.Medium,
    textAlign: 'left',
  },
  separator: {
    width: '100%',
    backgroundColor: Colors.grayBorder,
    height: 1,
    marginVertical: 8,
  },
  statusTitle: {
    marginBottom: 3,
    fontSize: PixelPerfect(10),
    color: 'rgba(29, 37, 45, 0.51)',
    fontFamily: Fonts.Regular,
  },
  buttonTitle: {
    color: Colors.mainColor,
    fontFamily: Fonts.Regular,
    fontSize: PixelPerfect(11),
  },
  payButton: {
    alignSelf: 'center',
    borderColor: Colors.mainColor,
    backgroundColor: Colors.white,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 17,
    marginTop: 10,
  },
});
