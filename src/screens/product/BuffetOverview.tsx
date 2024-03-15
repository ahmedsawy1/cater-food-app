import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SafeView from '../../components/views/SafeView';
import MainHeader from '../../components/headers/MainHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import DateLocationText from '../../components/text/DateLocationText';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {BuffetData, orderPolicy} from '../../temp/data/productData';
import BuffetCard from '../../components/cards/BuffetCard';
import {ArrowUpIcon} from '../../assets/svg/icons';
import BuffetDetailsCard from '../../components/cards/BuffetDetailsCard';
import CheckBox from '../../components/utility/CheckBox';
import MainButton from '../../components/buttons/MainButton';
import {t} from 'i18next';
import PopUp from '../../components/views/PopUp';
import ConfirmOrderPopUp from '../../content/ConfirmOrderPopUp';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/actions/temp';

const BuffetOverview = () => {
  const {params}: any = useRoute();

  const [check, setCheck] = useState({
    // 1 salads
    salamon: false,
    chicken: true,
    salad: false,

    // 2 main dishes
    grobo: false,
    shishTawook: false,
    piccata: false,
    rice: false,
    macaroni: false,
    potato: false,
    bolognese: false,

    // 3 sweets
    omAli: false,
    fruitsSalad: false,
    bodding: false,

    // 4 addional options
    wantCoffe: false,
    wantTea: false,
  });

  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeView>
      <ScrollView>
        <MainHeader title={params.item.title} />
        <DateLocationText
          date={params.state.dateText}
          location={params.state.locationText}
          time={params.state.timeText}
          //   onPress={switchDateLocation}
        />
        <View style={styles.whiteView}>
          <View style={styles.detailsCon}>
            <View style={styles.catgImageCon}>
              <Image
                source={{uri: params.item.catgImage}}
                style={styles.catgImage}
                resizeMode="center"
              />
            </View>
            <View style={styles.namesCon}>
              <Text style={styles.titleText}>{params.item.title}</Text>
              <Text style={styles.catgText}>{params.item.category}</Text>
            </View>
            <View style={{alignItems: 'center', paddingHorizontal: 10}}>
              <ArrowUpIcon fill="#707070" />
            </View>
          </View>

          <Image style={styles.image} source={{uri: params.item.image}} />

          <View style={{paddingHorizontal: 16, paddingTop: 8}}>
            <BuffetCard
              hasIconsAndImage={false}
              style={{marginTop: 8}}
              imageURL={BuffetData[0].image}
              title={BuffetData[0].title}
              description={BuffetData[0].desc}
              personsNum={BuffetData[0].persons}
              price={BuffetData[0].price}
              onPress={() => 'todo'}
            />
            <BuffetDetailsCard personNum={20} minutes={40} />
            {/* 1--Salad */}
            <View style={styles.whiteCardCon}>
              <Text style={styles.cardTitle}>السلطات</Text>
              <Text style={styles.cardWarn}>يرجى تحديد خيارين كحد أقصى</Text>
              <CheckBox
                title="سالمون مدخن بالبهارات الهندية"
                checked={check.salamon}
                onPress={() =>
                  setCheck(old => ({...old, salamon: !check.salamon}))
                }
              />
              <CheckBox
                title="دجاج بالطريقة التايلندية مع الذرة الحلوة وسلطة كرات"
                checked={check.chicken}
                onPress={() =>
                  setCheck(old => ({...old, chicken: !check.chicken}))
                }
              />
              <CheckBox
                title="سلطة خضروات مقرمشة"
                checked={check.salad}
                onPress={() => setCheck(old => ({...old, salad: !check.salad}))}
              />
            </View>

            {/* 2--Main Dish */}
            <View style={styles.whiteCardCon}>
              <Text style={styles.cardTitle}>الأطباق الرئيسية</Text>
              <Text style={styles.cardWarn}>يرجى تحديد 4 خيارات كحد أقصى</Text>
              <CheckBox
                title="جروبر فيليه مكسو بالأعشاب"
                checked={check.grobo}
                onPress={() => setCheck(old => ({...old, grobo: !check.grobo}))}
              />
              <CheckBox
                title="شيش طاووق"
                checked={check.shishTawook}
                onPress={() =>
                  setCheck(old => ({...old, shishTawook: !check.shishTawook}))
                }
              />
              <CheckBox
                title="فيل بيكاتا"
                checked={check.piccata}
                onPress={() =>
                  setCheck(old => ({...old, piccata: !check.piccata}))
                }
              />
              <CheckBox
                title="أرز بسمتى بالزعفران"
                checked={check.rice}
                onPress={() => setCheck(old => ({...old, rice: !check.rice}))}
              />
              <CheckBox
                title="مكرونة بينى بالدجاج"
                checked={check.macaroni}
                onPress={() =>
                  setCheck(old => ({...old, macaroni: !check.macaroni}))
                }
              />
              <CheckBox
                title="بطاطاس مهروسة بالثوم"
                checked={check.potato}
                onPress={() =>
                  setCheck(old => ({...old, potato: !check.potato}))
                }
              />
              <CheckBox
                title="بولونيز خضراوات"
                checked={check.bolognese}
                onPress={() =>
                  setCheck(old => ({...old, bolognese: !check.bolognese}))
                }
              />
            </View>

            {/* 3--sweets */}
            <View style={styles.whiteCardCon}>
              <Text style={styles.cardTitle}>الحلى</Text>
              <Text style={styles.cardWarn}>يرجى تحديد خيار كحد أقصى</Text>
              <CheckBox
                title="أم على ومجموعة من الحلويات الشرقية"
                checked={check.omAli}
                onPress={() => setCheck(old => ({...old, omAli: !check.omAli}))}
              />
              <CheckBox
                title="سلطة فواكه طازجة وعرض فواكه"
                checked={check.fruitsSalad}
                onPress={() =>
                  setCheck(old => ({...old, fruitsSalad: !check.fruitsSalad}))
                }
              />
              <CheckBox
                title="بودنج بجوز الهند والمانجو مع قطع شيكولاته"
                checked={check.bodding}
                onPress={() =>
                  setCheck(old => ({...old, bodding: !check.bodding}))
                }
              />
            </View>

            {/* 4--addional options */}
            <View style={styles.whiteCardCon}>
              <Text style={styles.cardTitle}>خيارات إضافية</Text>
              <Text style={styles.cardWarn}>
                يمكن إضافة هذه الخيارات بتكلفة إضافية
              </Text>

              <CheckBox
                title="قهوة طازجة الإعداد عادية ومنزوعة الكافيين"
                diffrentTitle="+100 ريال"
                checked={check.wantCoffe}
                onPress={() =>
                  setCheck(old => ({...old, wantCoffe: !check.wantCoffe}))
                }
              />
              <CheckBox
                title="مجموعة متنوعة من أصناف الشاي والمشروبات العشبية"
                diffrentTitle="+100 ريال"
                checked={check.wantTea}
                onPress={() =>
                  setCheck(old => ({...old, wantTea: !check.wantTea}))
                }
              />
            </View>

            {/* 5--notes */}
            <View style={[styles.whiteCardCon, {marginBottom: 40}]}>
              <Text style={styles.cardTitle}>ملاحظات</Text>
              <Text style={styles.cardWarn}>للطلبات الخاصه والملاحظات</Text>
              <View style={styles.bigInputCon}>
                <TextInput
                  multiline
                  style={{textAlign: 'right', paddingHorizontal: 10}}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
            <ConfirmOrderPopUp
              // Use redux instead params
              // onAddMorePress={() => navigation.navigate('ProductOverview')}
              onAddMorePress={() => dispatch(addToCart(1))}
              onConfirmOrderPress={() => {
                dispatch(addToCart(1));
                setPopUp(false);
                navigation.navigate('CartScreen');
              }}
            />
          </PopUp>
        }

        <MainButton title={t('addToOrder')} onPress={() => setPopUp(true)} />
      </View>
    </SafeView>
  );
};

export default BuffetOverview;

const styles = StyleSheet.create({
  image: {
    height: PixelPerfect(230),
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  detailsCon: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: -30,
  },
  catgImageCon: {
    flex: 1,
    justifyContent: 'center',
  },
  namesCon: {
    flex: 6,
  },
  catgImage: {
    height: PixelPerfect(44),
    width: PixelPerfect(44),
  },
  titleText: {
    fontSize: PixelPerfect(16),
    fontFamily: Fonts.Regular,
    color: Colors.black,
    textAlign: 'left',
  },
  catgText: {
    fontSize: PixelPerfect(11),
    fontFamily: Fonts.Regular,
    color: Colors.darkBrown,
    marginTop: PixelPerfect(-5),
    textAlign: 'left',
  },
  whiteView: {
    backgroundColor: Colors.medWhite,
    flex: 1,
    marginTop: PixelPerfect(50),
  },
  whiteCardCon: {
    paddingHorizontal: 21,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginTop: 8,
  },
  cardTitle: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Medium,
    color: Colors.lightBlack,
    textAlign: 'left',
  },
  cardWarn: {
    fontSize: PixelPerfect(10),
    fontFamily: Fonts.Regular,
    color: Colors.darkBrown,
    marginBottom: 5,
    textAlign: 'left',
  },
  bigInputCon: {
    borderRadius: 10,
    height: PixelPerfect(80),
    borderWidth: 0.5,
    borderColor: Colors.grayBorder,
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
    textAlign: 'left',
  },
});
