import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../../components/headers/HomeHeader';
import SafeView from '../../components/views/SafeView';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import CategoryBtn from '../../components/buttons/CategoryBtn';
import {useNavigation} from '@react-navigation/native';
import OrderCard from '../../components/cart/OrderCard';
import {ordersData} from '../../temp/data/myOrders';
import {NavigationProps} from '../../constants/interfaces';

const MyOrders = () => {
  const navigation: NavigationProps = useNavigation();

  const ordersStatus = [
    {title: 'الكل'},
    {title: 'حالي'},
    {title: 'مكتمل'},
    {title: 'ملغى'},
  ];
  const [state, setState] = useState({
    selectedCatg: 'الكل',
  });

  const onSelectCatg = (item: {title: string}) => {
    setState(old => ({...old, selectedCatg: item.title}));
  };

  return (
    <SafeView>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <HomeHeader otherLeft={<Text></Text>} />

        <View style={styles.curvedView}>
          <View style={styles.catgsCon}>
            <Text style={styles.dateText}>يناير 2020</Text>
            <FlatList
              style={{marginBottom: 15}}
              data={ordersStatus}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item}) => (
                <CategoryBtn
                  title={item.title}
                  onPress={() => onSelectCatg(item)}
                  styleTitle={
                    state.selectedCatg == item.title && {
                      color: Colors.mainColor,
                    }
                  }
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 20,
            }}>
            {ordersData.map((item, index) => (
              <OrderCard
                onPress={() =>
                  navigation.navigate('OrderOverview', {item: item})
                }
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                price={item.price}
                status={item.status}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  curvedView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
    backgroundColor: Colors.medWhite,
    marginTop: 20,
    paddingHorizontal: 16,
    // paddingBottom: phoneHeight,
  },
  dateText: {
    fontSize: PixelPerfect(11),
    color: Colors.lightBlack,
    fontFamily: Fonts.Regular,
    marginBottom: 8,
  },
  catgsCon: {
    marginTop: 24,
    alignItems: 'flex-start',
  },
});
