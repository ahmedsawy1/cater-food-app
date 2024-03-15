import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../components/views/SafeView';
import {
  Colors,
  ColorWithOpacity,
  Fonts,
  PixelPerfect,
} from '../styles/stylesConstants';
import {SharedStyles} from '../styles/sharedStyles';
import {XCloseIcon} from '../assets/svg/icons';
import {useNavigation} from '@react-navigation/native';
import {t} from 'i18next';

const DrawerContent = ({navigation}) => {
  return (
    <SafeView
      style={{
        borderTopRightRadius: Platform.OS == 'ios' ? 0 : 20,
        borderBottomRightRadius: Platform.OS == 'ios' ? 0 : 20,
        paddingTop: 20,
        // paddingHorizontal: 16,
      }}>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Image
            source={require('../assets/main/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Pressable onPress={() => navigation.closeDrawer()}>
          <XCloseIcon width={PixelPerfect(20)} height={PixelPerfect(20)} />
        </Pressable>
      </View>

      <Text
        style={styles.drawerItemText}
        onPress={() => navigation.navigate('HomeScreen')}>
        {t('Service Provider List')}
      </Text>
      <View style={styles.separator} />

      <Text
        style={styles.drawerItemText}
        onPress={() => navigation.navigate('MyOrders')}>
        {t('My Orders')}
      </Text>
      <View style={styles.separator} />

      <Text
        style={styles.drawerItemText}
        onPress={() => navigation.navigate('MyAccountScreen')}>
        {t('My account')}
      </Text>
      <View style={styles.separator} />

      <Text
        style={styles.drawerItemText}
        onPress={() => navigation.navigate('NotificationScreen')}>
        {t('Notifications')}
      </Text>
      <View style={styles.separator} />
      <Text
        style={styles.drawerItemText}
        onPress={() => navigation.navigate('Support')}>
        {t('Technical support')}
      </Text>
      <View style={styles.separator} />
      <Text
        style={styles.drawerItemText}
        onPress={() => navigation.navigate('AboutUs')}>
        {t('About Cater')}
      </Text>
      <View style={styles.separator} />
    </SafeView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  image: {
    height: PixelPerfect(22),
    width: PixelPerfect(78),
    alignSelf: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    ...SharedStyles.centred,
    marginBottom: 50,
    marginHorizontal: 16,
  },
  drawerItemText: {
    fontSize: PixelPerfect(14),
    color: Colors.white,
    fontFamily: Fonts.Medium,
    marginHorizontal: 16,
    textAlign: 'left',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: ColorWithOpacity('#D8D8D8', 0.42),
    marginVertical: PixelPerfect(15),
  },
});
