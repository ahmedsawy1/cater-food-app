import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/views/SafeView';
import MainHeader from '../../components/headers/MainHeader';
import {useRoute} from '@react-navigation/native';
import {
  ExclamationIcon,
  MessageIcon,
  PenIcon,
  TrashIcon,
} from '../../assets/svg/icons';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import RoundHeader from '../../components/headers/RoundHeader';
import {t} from 'i18next';
import OrderStatus from '../../components/cart/OrderStatus';
import MainButton from '../../components/buttons/MainButton';

const OrderOverview = () => {
  const {params}: any = useRoute();

  return (
    <SafeView>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <MainHeader
          otherLeft={
            <ExclamationIcon
              width={PixelPerfect(20)}
              height={PixelPerfect(20)}
            />
          }
          title={params?.item?.title}
        />
        <View style={styles.curvedView}>
          <RoundHeader
            title={params?.item?.title}
            subTitle={params?.item?.title}
            imageURL="https://i.ibb.co/f9xgyz0/Bitmap.png"
          />

          <ScrollView contentContainerStyle={{paddingBottom: 20}}>
            <View style={styles.whiteCard}>
              <Text style={styles.titleText}>{t('Order details')}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                  <Text style={styles.subTitleText}>
                    {t('Order number')}: 1234
                  </Text>
                  <Text style={styles.subTitleText}>
                    {t('Order date')}: 4 يناير 2020
                  </Text>
                </View>
                {params.item.status != 3 && <TrashIcon />}
                <PenIcon style={{marginLeft: 8}} />
              </View>
            </View>
            <View style={styles.whiteCard}>
              <Text style={styles.titleText}>{t('Order status')}</Text>
              <OrderStatus
                status={params.item.status}
                styleTitle={styles.statusTitle}
                firstTitle="تأكيد مزود الخدمة"
                secondTitle="الدفع"
                thirdTitle="الحصول على الخدمة"
                styleLine={{backgroundColor: Colors.grayBorder}}
                styleCyrcle={{borderColor: Colors.grayBorder}}
              />
              {params.item.status == 2 && (
                <MainButton
                  title={t('Pay now')}
                  styleTitle={styles.buttonTitle}
                  style={styles.payButton}
                />
              )}
            </View>

            <View style={styles.whiteCard}>
              <Text style={styles.titleText}>{t('Delivery details')}</Text>
              <Text style={styles.subTitleText}>
                {'الرياض، حي الملقا\nيوم الاثنين 14 يناير، الساعة 9:00 م'}
              </Text>
            </View>
            <View style={styles.whiteCard}>
              <Text style={styles.titleText}>{t('Contact information')}</Text>
              <Text style={styles.subTitleText}>جوال رقم 0551234567 </Text>
            </View>
            <View style={styles.whiteCard}>
              <Text style={styles.titleText}>{t('Total amount')}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.subTitleText, {flex: 1}]}>4,700 ريال</Text>
                <ExclamationIcon fill={Colors.darkBrown} />
              </View>
            </View>
            <View style={styles.whiteCard}>
              <View>
                <Text style={styles.titleText}>{t('Service provider')}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={[styles.subTitleText, {flex: 1}]}>
                    {
                      'فورسيزون لخدمات الضيافة\nالرياض، طريق الملك فهد، برج المملكة'
                    }
                  </Text>
                  <MessageIcon />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      {params.item.status == 2 && (
        <View style={styles.bottomView}>
          <View style={{flex: 1.1, justifyContent: 'center'}}>
            <Text style={styles.totalText}>{t('Total price')}</Text>
            <Text style={styles.priceText}>7,400 ريال</Text>
          </View>
          <View style={{flex: 1}}>
            <MainButton title={t('Pay now')} />
          </View>
        </View>
      )}
    </SafeView>
  );
};

export default OrderOverview;

const styles = StyleSheet.create({
  curvedView: {
    flex: 1,
    backgroundColor: Colors.medWhite,
    marginTop: PixelPerfect(45),
  },
  whiteCard: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 8,
    marginHorizontal: 16,
  },
  titleText: {
    fontSize: PixelPerfect(12),
    color: Colors.lightBlack,
    fontFamily: Fonts.Medium,
    textAlign: 'left',
    marginBottom: 5,
  },
  subTitleText: {
    fontSize: PixelPerfect(12),
    color: Colors.darkBrown,
    fontFamily: Fonts.Medium,
    textAlign: 'left',
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
  bottomView: {
    padding: 16,
    backgroundColor: Colors.white,
    flexDirection: 'row',
  },
  totalText: {
    color: Colors.mainColor,
    fontSize: PixelPerfect(10),
    fontFamily: Fonts.Regular,
    textAlign: 'left',
  },
  priceText: {
    color: Colors.lightBlack,
    fontSize: PixelPerfect(16),
    fontFamily: Fonts.Medium,
    textAlign: 'left',
  },
});
