import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../../components/headers/HomeHeader';
import SafeView from '../../components/views/SafeView';
import DateLocationText from '../../components/text/DateLocationText';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {servicesData} from '../../temp/data/services';
import ServiceCard from '../../components/cards/ServiceCard';
import CategoryBtn from '../../components/buttons/CategoryBtn';
import {catgsNames} from '../../temp/data/catgs';
import {products} from '../../temp/data/products';
import ProductCard from '../../components/cards/ProductCard';
import {ArrowDownIcon} from '../../assets/svg/icons';
import {t} from 'i18next';
import CustomSelector from '../../components/utility/CustomSelector';
import {daysData, timesData} from '../../temp/data/dates';
import SelectedButton from '../../components/buttons/SelectedButton';
import PopUp from '../../components/views/PopUp';
import {citiesData} from '../../temp/data/cities';
import {SharedStyles} from '../../styles/sharedStyles';
import PopTitle from '../../components/buttons/PopTitle';
import {
  displayBy,
  hightPrice,
  kitchenType,
  returantType,
  typeData,
} from '../../temp/util/filters';
import MainButton from '../../components/buttons/MainButton';
import FiltersButton from '../../components/buttons/FiltersButton';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();

  const [state, setState] = useState({
    dateLocationModal: false,
    selectedDay: {},
    selectedTime: {},
    selectedLocation: {},
    dateText: t('Select date'),
    timeText: t('Select time'),
    selectCity: t('Select city'),
    locationText: t('Select location'),

    // popup
    popUpCities: false,
    popUpFilters: false,

    // catg ang filters
    selectedCatg: 'الكل',
    falteredSaved: false,

    typeText: '',
    kitchenText: '',
    resturantText: '',
    priceText: 0,
    displayText: '',
  });

  const switchDateLocation = () => {
    if (state.dateLocationModal == false) {
      setState(old => ({...old, dateLocationModal: true}));
    } else {
      setState(old => ({...old, dateLocationModal: false}));
    }
  };

  const onSelectCatg = (item: {title: string}) => {
    if (item.title == 'theDefault') {
      setState(old => ({...old, popUpFilters: true}));
    } else {
      setState(old => ({...old, selectedCatg: item.title}));
    }
  };

  const resetSelectionFN = () => {
    console.log('Dsad');

    setState(old => ({
      ...old,
      typeText: '',
      kitchenText: '',
      resturantText: '',
      priceText: 0,
      displayText: '',
    }));
  };

  const handleDisplayResults = () => {
    setState(old => ({
      ...old,
      falteredSaved: true,
      popUpFilters: false,
    }));
  };

  const renderFilterTitleFN = () => {
    if (
      (state.typeText == 'الكل' || state.typeText == '') &&
      (state.kitchenText == 'الكل' || state.kitchenText == '') &&
      (state.resturantText == 'الكل' || state.resturantText == '') &&
      state.priceText == 0 &&
      (state.displayText == 'الكل' || state.displayText == '')
    ) {
      return 'الكل';
    } else
      return `${
        state.typeText == 'الكل' || state.typeText == ''
          ? ''
          : `${state.typeText}، `
      }${
        state.kitchenText == 'الكل' || state.kitchenText == ''
          ? ''
          : `${state.kitchenText}، `
      }${
        state.resturantText == 'الكل' || state.resturantText == ''
          ? ''
          : `${state.resturantText}، `
      }${state.priceText == 0 ? '' : `السعر:${state.priceText}، `}${
        state.displayText == 'الكل' || state.displayText == ''
          ? ''
          : `${state.displayText}`
      }`;
  };

  const renderFilterTitle = renderFilterTitleFN();

  return (
    <SafeView>
      <ScrollView>
        <HomeHeader onPress={() => navigation.openDrawer()} />
        <DateLocationText
          date={state.dateText}
          location={state.locationText}
          time={state.timeText}
          onPress={switchDateLocation}
        />

        {state.dateLocationModal && (
          <View>
            <View style={{marginBottom: 20}}>
              <Text style={styles.selectorTitle}>{t('Date')}</Text>
              <FlatList
                contentContainerStyle={{paddingHorizontal: 16}}
                data={daysData}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                  <SelectedButton
                    number={item.day}
                    text={item.name}
                    onPress={() =>
                      setState(old => ({
                        ...old,
                        selectedDay: item,
                        dateText: `${item.name} ${item.day}`,
                      }))
                    }
                    style={
                      state.selectedDay.day == item.day && {
                        backgroundColor: Colors.mainColor,
                      }
                    }
                    styleNumberText={
                      state.selectedDay.day == item.day && {
                        color: Colors.white,
                      }
                    }
                  />
                )}
                horizontal
              />
            </View>

            <View style={{marginBottom: 20}}>
              <Text style={styles.selectorTitle}>{t('Time')}</Text>
              <FlatList
                contentContainerStyle={{paddingHorizontal: 16}}
                data={timesData}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                  <SelectedButton
                    number={item.time}
                    text={item.state}
                    onPress={() =>
                      setState(old => ({
                        ...old,
                        selectedTime: item,
                        timeText: ` ${item.state} ${item.time}`,
                      }))
                    }
                    style={
                      state.selectedTime.time == item.time && {
                        backgroundColor: Colors.mainColor,
                      }
                    }
                    styleNumberText={
                      state.selectedTime.time == item.time && {
                        color: Colors.white,
                      }
                    }
                  />
                )}
                horizontal
              />
            </View>

            <View style={{paddingHorizontal: 20, marginBottom: 20}}>
              <Text style={[styles.selectorTitle, {marginHorizontal: 0}]}>
                {t('Place')}
              </Text>
              <CustomSelector
                selected={state.selectCity}
                onPress={() => setState(old => ({...old, popUpCities: true}))}
              />
            </View>
          </View>
        )}

        {
          <PopUp
            visible={state.popUpCities}
            onRequestClose={() =>
              setState(old => ({...old, popUpCities: false}))
            }>
            <FlatList
              data={citiesData}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item}) => (
                <Pressable
                  style={styles.cityTextCon}
                  onPress={() =>
                    setState(old => ({
                      ...old,
                      locationText: item.cityNameAr,
                      selectCity: item.cityNameAr,
                      popUpCities: false,
                    }))
                  }>
                  <Text style={styles.cityNameText}>{item.cityNameAr}</Text>
                </Pressable>
              )}
            />
          </PopUp>
        }

        <View style={styles.curvedView}>
          {state.dateLocationModal ? (
            <Pressable
              style={{alignItems: 'center'}}
              onPress={() =>
                setState(old => ({...old, dateLocationModal: false}))
              }>
              <Text style={styles.providersText}>
                {t('Service Provider List')}
              </Text>
              <ArrowDownIcon style={{marginTop: 7}} />
            </Pressable>
          ) : state.falteredSaved ? (
            <FiltersButton
              title={renderFilterTitle}
              onPress={() => setState(old => ({...old, popUpFilters: true}))}
            />
          ) : (
            <>
              <View>
                <FlatList
                  data={servicesData}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item}) => (
                    <ServiceCard imageURL={item.imageURL} title={item.title} />
                  )}
                  horizontal
                  contentContainerStyle={{paddingHorizontal: 10}}
                  showsHorizontalScrollIndicator={false}
                />
              </View>

              <View style={{marginTop: 24}}>
                <FlatList
                  data={[
                    {
                      title: 'theDefault',
                    },
                    ...catgsNames,
                  ]}
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
                  contentContainerStyle={{paddingHorizontal: 10}}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </>
          )}

          {
            <PopUp
              visible={state.popUpFilters}
              style={{paddingHorizontal: 20}}
              styleTouchable={{
                flex: 0.2,
                backgroundColor: 'rgba(225, 225, 225, 0.0)',
              }}
              animationType="slide"
              onRequestClose={() =>
                setState(old => ({...old, popUpFilters: false}))
              }>
              <ScrollView showsVerticalScrollIndicator={false}>
                <PopTitle
                  onPress={() =>
                    setState(old => ({...old, popUpFilters: false}))
                  }
                />
                {/*  1-- the sort */}
                <View style={{marginTop: 20}}>
                  <Text style={styles.flatListTitle}>{t('Sort')}</Text>
                  <FlatList
                    contentContainerStyle={{width: '100%', marginTop: 5}}
                    data={typeData}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.filterItemCon}
                        onPress={() =>
                          setState(old => ({...old, typeText: item.name}))
                        }>
                        <Text
                          style={
                            state.typeText == item.name
                              ? styles.filterSelectedText
                              : styles.fiterItemText
                          }>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                {/*  2-- "kitchen type"*/}
                <View style={{marginTop: 20}}>
                  <Text style={styles.flatListTitle}>{t('kitchen type')}</Text>

                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{marginTop: 5}}>
                    {kitchenType.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.filterItemCon}
                        onPress={() =>
                          setState(old => ({...old, kitchenText: item.name}))
                        }>
                        <Text
                          style={
                            state.kitchenText == item.name
                              ? styles.filterSelectedText
                              : styles.fiterItemText
                          }>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  {/* <FlatList
                    initialNumToRender={5}
                    contentContainerStyle={{marginTop: 5}}
                    data={kitchenType}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.filterItemCon}
                        onPress={() =>
                          setState(old => ({...old, kitchenText: item.name}))
                        }>
                        <Text
                          style={
                            state.kitchenText == item.name
                              ? styles.filterSelectedText
                              : styles.fiterItemText
                          }>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  /> */}
                </View>
                {/*  3-- res type */}
                <View style={{marginTop: 20}}>
                  <Text style={styles.flatListTitle}>
                    {t('Restaurant type')}
                  </Text>
                  <FlatList
                    contentContainerStyle={{width: '100%', marginTop: 5}}
                    data={returantType}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.filterItemCon}
                        onPress={() =>
                          setState(old => ({...old, resturantText: item.name}))
                        }>
                        <Text
                          style={
                            state.resturantText == item.name
                              ? styles.filterSelectedText
                              : styles.fiterItemText
                          }>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                {/*  4-- "price type"*/}
                <View style={{marginTop: 20}}>
                  <Text style={styles.flatListTitle}>{t('Highest price')}</Text>
                  <FlatList
                    initialNumToRender={5}
                    contentContainerStyle={{marginTop: 5}}
                    data={[
                      {
                        price: 0,
                      },
                      ...hightPrice,
                    ]}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.filterItemCon}
                        onPress={() =>
                          setState(old => ({...old, priceText: item.price}))
                        }>
                        <Text
                          style={
                            state.priceText == item.price
                              ? styles.filterSelectedText
                              : styles.fiterItemText
                          }>
                          {item.price == 0 ? 'الكل' : item.price}
                        </Text>
                      </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                {/*  5-- Display by */}
                <View style={{marginTop: 20}}>
                  <Text style={styles.flatListTitle}>{t('Display by')}</Text>
                  <FlatList
                    contentContainerStyle={{width: '100%', marginTop: 5}}
                    data={displayBy}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.filterItemCon}
                        onPress={() =>
                          setState(old => ({...old, displayText: item.name}))
                        }>
                        <Text
                          style={
                            state.displayText == item.name
                              ? styles.filterSelectedText
                              : styles.fiterItemText
                          }>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                <View style={styles.buttonCon}>
                  <MainButton
                    style={styles.resetButton}
                    title={t('Reset selection')}
                    styleTitle={styles.resetButtonTitle}
                    onPress={resetSelectionFN}
                  />
                  <MainButton
                    style={{width: '48%'}}
                    title={t('View results')}
                    onPress={handleDisplayResults}
                  />
                </View>
              </ScrollView>
            </PopUp>
          }

          <ScrollView
            contentContainerStyle={{marginTop: 15, paddingBottom: 20}}>
            {products.map((item, index) => (
              <ProductCard
                onPress={() =>
                  navigation.navigate('ProductOverview', {
                    state,
                    item,
                  })
                }
                key={index}
                imageURL={item.image}
                imageCatgURL={item.catgImage}
                title={item.title}
                price={item.price}
                rate={item.rate}
                catg={item.category}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  curvedView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
    backgroundColor: Colors.medWhite,
    marginTop: 20,
    paddingTop: 20,
  },
  providersText: {
    color: '#0D3E45',
    fontSize: PixelPerfect(14),
    fontFamily: Fonts.Regular,
  },
  selectorTitle: {
    fontSize: PixelPerfect(14),
    fontFamily: Fonts.Regular,
    color: Colors.mainColor,
    marginHorizontal: 16,
    marginBottom: 4,
    textAlign: 'left',
  },
  cityTextCon: {
    paddingBottom: 3,
    borderBottomColor: Colors.grayBorder,
    borderBottomWidth: 1,
    width: '50%',
    alignSelf: 'center',
    ...SharedStyles.centred,
    marginBottom: 8,
  },
  cityNameText: {
    fontSize: PixelPerfect(14),
    fontFamily: Fonts.Regular,
    color: Colors.lightBlack,
  },
  flatListTitle: {
    fontSize: PixelPerfect(13),
    fontFamily: Fonts.Medium,
    color: Colors.mainColor,
    textAlign: 'left',
  },
  filterItemCon: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: Colors.white,
    marginRight: 5,
    borderRadius: 6,
  },
  fiterItemText: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Regular,
    color: Colors.black,
  },
  filterSelectedText: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.SemiBold,
    color: Colors.mainColor,
  },
  buttonCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  resetButton: {
    width: '48%',
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.grayBorder,
  },
  resetButtonTitle: {
    fontFamily: Fonts.Regular,
    fontSize: PixelPerfect(14),
    color: Colors.black,
  },
});
