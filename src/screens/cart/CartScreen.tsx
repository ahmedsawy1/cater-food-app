import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SafeView from '../../components/views/SafeView';
import MainHeader from '../../components/headers/MainHeader';
import {useNavigation} from '@react-navigation/native';
import DateLocationText from '../../components/text/DateLocationText';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {ArrowUpIcon, TelegramIcon} from '../../assets/svg/icons';
import MainButton from '../../components/buttons/MainButton';
import {t} from 'i18next';
import PopUp from '../../components/views/PopUp';
import {useDispatch, useSelector} from 'react-redux';
import {products} from '../../temp/data/products';
import CartItemAccordion from '../../components/cart/CartItemAccordion';
import LoginPopUpContent from '../auth/LoginPopUpContent';
import {RootState} from '../../store/store';
import {SharedStyles} from '../../styles/sharedStyles';
import OrderStatus from '../../components/cart/OrderStatus';

const CartScreen = () => {
  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {isSignedIn} = useSelector((state: RootState) => state.authReducer);

  const onSendOrderPress = () => {
    setPopUp(true);
  };

  return (
    <SafeView>
      {/* <View style={{backgroundColor: 'red'}}></View> */}
      <MainHeader title={t('Cart')} />
      <DateLocationText
      // date={params.state.dateText}
      // location={params.state.locationText}
      // time={params.state.timeText}
      //   onPress={switchDateLocation}
      />
      <View style={styles.whiteView}>
        <FlatList
          data={products}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <CartItemAccordion />}
        />
        {/* <ScrollView contentContainerStyle={{paddingTop: -50}}>
          {products.map((item, index) => (
            <CartItemAccordion key={index} />
          ))}
        </ScrollView> */}
      </View>
      <View style={styles.bottomView}>
        <View>
          <Text style={styles.totalPriceText}>{t('Total price')}</Text>
          <Text style={[styles.titleText, {fontFamily: Fonts.Medium}]}>
            2400 {t('SR')}
          </Text>
        </View>

        {
          <PopUp
            animationType={'slide'}
            visible={popUp}
            onRequestClose={() => setPopUp(false)}>
            {isSignedIn ? (
              <View style={styles.signInCon}>
                <View style={styles.cyrcle}>
                  <TelegramIcon fill={Colors.mainColor} />
                </View>
                <Text style={styles.sentText}>{t('Order Sent')}</Text>
                <OrderStatus
                  status={2}
                  style={{marginVertical: 50}}
                  firstTitle={t('Send order')}
                  secondTitle={t('Service provider confirmation')}
                  thirdTitle={t('Complete payment')}
                />
                <MainButton
                  title={t('My Orders')}
                  style={{width: '50%'}}
                  onPress={() => {
                    navigation.navigate('MyOrders');
                    setPopUp(false);
                  }}
                />
              </View>
            ) : (
              <LoginPopUpContent otherFN={() => setPopUp(false)} />
            )}
          </PopUp>
        }

        <MainButton title={t('Send order')} onPress={onSendOrderPress} />
      </View>
    </SafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  titleText: {
    fontSize: PixelPerfect(16),
    fontFamily: Fonts.Regular,
    color: Colors.black,
  },
  whiteView: {
    backgroundColor: Colors.medWhite,
    flex: 1,
    marginTop: PixelPerfect(25),
    paddingTop: -50,
  },
  bottomView: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    paddingTop: 11,
    paddingBottom: 16,
    paddingHorizontal: 23,
    justifyContent: 'space-between',
  },
  totalPriceText: {
    fontSize: PixelPerfect(10),
    fontFamily: Fonts.Regular,
    color: Colors.mainColor,
  },
  signInCon: {
    alignItems: 'center',
    paddingTop: 10,
  },
  cyrcle: {
    padding: 10,
    borderColor: Colors.mainColor,
    borderWidth: 2,
    borderRadius: PixelPerfect(40),
    ...SharedStyles.centred,
  },
  sentText: {
    fontSize: PixelPerfect(14),
    fontFamily: Fonts.Medium,
    color: Colors.lightBlack,
    marginTop: 10,
  },
});
