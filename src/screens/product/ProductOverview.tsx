import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/views/SafeView';
import MainHeader from '../../components/headers/MainHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import DateLocationText from '../../components/text/DateLocationText';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import Accordian from '../../components/views/Accordion';
import {BuffetData, orderPolicy} from '../../temp/data/productData';
import BuffetCard from '../../components/cards/BuffetCard';

const ProductOverview = () => {
  const {params}: any = useRoute();
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
        <Image style={styles.image} source={{uri: params.item.image}} />
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
            <View style={{alignItems: 'center'}}>
              <View style={styles.rateCon}>
                <Text style={styles.rateText}>{params.item.rate}</Text>
              </View>
              <Text style={styles.rateNum}>
                بناءً على 55 تقيييم
                {/* {params.item.price} {t('SR')} */}
              </Text>
            </View>
          </View>
          <View
            style={{paddingHorizontal: 16, paddingTop: 8, marginBottom: 50}}>
            <Accordian
              title="سياسات الطلب"
              content={
                <View style={{marginTop: -10}}>
                  <Text style={styles.orderPolicyText}>{orderPolicy}</Text>
                </View>
              }
            />
            <BuffetCard
              style={{marginTop: 8}}
              imageURL={BuffetData[0].image}
              title={BuffetData[0].title}
              description={BuffetData[0].desc}
              personsNum={BuffetData[0].persons}
              price={BuffetData[0].price}
              onPress={() => navigation.navigate('BuffetOverview', params)}
            />
            <BuffetCard
              style={{marginTop: 8}}
              imageURL={BuffetData[1].image}
              title={BuffetData[1].title}
              description={BuffetData[1].desc}
              personsNum={BuffetData[1].persons}
              price={BuffetData[1].price}
              onPress={() => 'todo'}
              hasWarn
            />
            <BuffetCard
              style={{marginTop: 8}}
              imageURL={BuffetData[2].image}
              title={BuffetData[2].title}
              description={BuffetData[2].desc}
              personsNum={BuffetData[2].persons}
              price={BuffetData[2].price}
              onPress={() => 'todo'}
              hasWarn
            />
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default ProductOverview;

const styles = StyleSheet.create({
  image: {
    height: PixelPerfect(230),
    width: '100%',
    marginTop: 16,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: -20,
  },
  detailsCon: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: -20,
  },
  catgImageCon: {
    flex: 1,
    justifyContent: 'center',
  },
  namesCon: {
    flex: 4,
  },
  catgImage: {
    height: PixelPerfect(44),
    width: PixelPerfect(44),
  },
  rateNum: {
    fontSize: PixelPerfect(7),
    fontFamily: Fonts.Regular,
    color: Colors.lightBlack,
    marginTop: 3,
  },
  orderPolicyText: {
    fontSize: PixelPerfect(10),
    fontFamily: Fonts.Regular,
    color: Colors.lightBlack,
    textAlign: 'left',
  },
  titleText: {
    fontSize: PixelPerfect(16),
    fontFamily: Fonts.Regular,
    color: Colors.black,
    textAlign: 'left',
  },
  rateText: {
    fontSize: PixelPerfect(13),
    fontFamily: Fonts.Regular,
    color: Colors.white,
  },
  catgText: {
    fontSize: PixelPerfect(11),
    fontFamily: Fonts.Regular,
    color: Colors.darkBrown,
    marginTop: PixelPerfect(-5),
    textAlign: 'left',
  },
  rateCon: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Colors.mainColor,
    borderRadius: 9,
  },
  whiteView: {
    backgroundColor: Colors.medWhite,
    flex: 1,
  },
});
