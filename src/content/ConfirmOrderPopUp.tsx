import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SharedStyles} from '../styles/sharedStyles';
import {Colors, Fonts, PixelPerfect} from '../styles/stylesConstants';
import {TickIcon} from '../assets/svg/icons';
import {t} from 'i18next';
import MainButton from '../components/buttons/MainButton';

const ConfirmOrderPopUp = ({onAddMorePress, onConfirmOrderPress}) => {
  return (
    <View style={styles.con}>
      <View style={styles.cyrcle}>
        <TickIcon />
      </View>
      <Text style={styles.addedText}>{t('Package added to order')}</Text>
      <MainButton
        style={styles.resetButton}
        title={t('Add more')}
        styleTitle={styles.resetButtonTitle}
        onPress={onAddMorePress}
      />
      <MainButton
        style={{width: '48%'}}
        title={t('Send order')}
        onPress={onConfirmOrderPress}
      />
    </View>
  );
};

export default ConfirmOrderPopUp;

const styles = StyleSheet.create({
  con: {
    ...SharedStyles.centred,
    paddingTop: 60,
  },
  cyrcle: {
    ...SharedStyles.centred,
    height: PixelPerfect(82),
    width: PixelPerfect(82),
    borderRadius: PixelPerfect(41),
    borderColor: Colors.mainColor,
    borderWidth: 2,
  },
  addedText: {
    fontSize: PixelPerfect(14),
    color: Colors.lightBlack,
    fontFamily: Fonts.Medium,
    marginTop: 16,
  },
  resetButton: {
    width: '48%',
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.grayBorder,
    marginTop: 40,
    marginBottom: 16,
  },
  resetButtonTitle: {
    fontFamily: Fonts.Regular,
    fontSize: PixelPerfect(14),
    color: Colors.black,
  },
});
