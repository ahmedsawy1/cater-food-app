import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/views/SafeView';
import MainHeader from '../../components/headers/MainHeader';
import {MenuIcon} from '../../assets/svg/icons';
import {t} from 'i18next';
import {Colors, PixelPerfect} from '../../styles/stylesConstants';
import ProfileCard from '../../components/cards/ProfileCard';
import LongButton from '../../components/buttons/LongButton';
import MainButton from '../../components/buttons/MainButton';

const MyAccountScreen = () => {
  return (
    <SafeView>
      <MainHeader
        title={t('My account')}
        otherRight={<MenuIcon />}
        otherLeft={<Text></Text>}
      />
      <View style={styles.whiteView}>
        <ProfileCard title={t('Personal data')} subTitle={'عبدالرحمن محمـد'} />
        <ProfileCard title={t('Email')} subTitle={'myemail@gmail.com'} />
        <LongButton title={t('Payment data')} />

        <MainButton style={styles.signOutBtn} title={t('Sign out')} />
      </View>
    </SafeView>
  );
};

// 'Sign out'

export default MyAccountScreen;

const styles = StyleSheet.create({
  whiteView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.medWhite,
    flex: 1,
    marginTop: 10,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  signOutBtn: {
    position: 'absolute',
    bottom: 20,
    right: 16,
    paddingHorizontal: PixelPerfect(35),
  },
});
