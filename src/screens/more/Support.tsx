import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/views/SafeView';
import MainHeader from '../../components/headers/MainHeader';
import {MenuIcon} from '../../assets/svg/icons';
import {t} from 'i18next';
import {Colors} from '../../styles/stylesConstants';
import LongButton from '../../components/buttons/LongButton';

const Support = () => {
  return (
    <SafeView>
      <MainHeader
        title={t('Technical support')}
        otherRight={<MenuIcon />}
        otherLeft={<Text></Text>}
      />
      <View style={styles.whiteView}>
        <LongButton title={t('Contact us')} />
        <LongButton title={t('Live Chat')} />
        <LongButton title={t('Write to us')} />
      </View>
    </SafeView>
  );
};

export default Support;

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
});
