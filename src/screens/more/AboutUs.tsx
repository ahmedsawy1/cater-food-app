import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/views/SafeView';
import MainHeader from '../../components/headers/MainHeader';
import {MenuIcon} from '../../assets/svg/icons';
import {t} from 'i18next';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {SharedStyles} from '../../styles/sharedStyles';
import LongButton from '../../components/buttons/LongButton';

const tempText =
  'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.';

const AboutUs = () => {
  return (
    <SafeView>
      <MainHeader
        title={t('About Cater')}
        otherRight={<MenuIcon />}
        otherLeft={<Text></Text>}
      />
      <View style={styles.whiteView}>
        <Image
          source={require('../../assets/main/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.versionText}>Cater app V1.1</Text>

        <View style={styles.aboutCon}>
          <Text style={[styles.versionText, {fontFamily: Fonts.Medium}]}>
            {tempText}
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            width: '100%',
            bottom: PixelPerfect(30),
          }}>
          <LongButton
            style={{marginTop: PixelPerfect(100)}}
            title={t('Connect with us')}
          />
          <LongButton title={t('Connect with us')} />
        </View>
      </View>
    </SafeView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  whiteView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.medWhite,
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: PixelPerfect(100),
  },
  logo: {
    height: PixelPerfect(42),
    width: PixelPerfect(150),
  },
  versionText: {
    color: Colors.lightBlack,
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Regular,
    marginTop: 10,
    textAlign: 'left',
  },
  aboutCon: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    padding: 16,
    marginTop: 28,
  },
});
