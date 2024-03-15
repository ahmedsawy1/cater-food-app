import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {t} from 'i18next';
import {
  ColoredHourIcon,
  ExclamationIcon,
  UserIcon,
} from '../../assets/svg/icons';

const BuffetDetailsCard = ({personNum, minutes}) => {
  return (
    <View style={styles.con}>
      <View style={styles.sharedRow}>
        <UserIcon
          width={PixelPerfect(14)}
          height={PixelPerfect(14)}
          fill={Colors.mainColor}
        />
        <Text style={styles.sharedText}>
          +{personNum} {t('Person')}
        </Text>
      </View>
      <View style={styles.sharedRow}>
        <ColoredHourIcon />
        <Text style={styles.sharedText}>
          {t('Arrive at the site {{min}} minutes in advance for preparation', {
            min: minutes,
          })}
        </Text>
      </View>
      <View style={styles.sharedRow}>
        <ExclamationIcon
          width={PixelPerfect(14)}
          height={PixelPerfect(14)}
          fill={Colors.mainColor}
        />
        <Text style={styles.sharedText}>{t('extraPoints')}</Text>
      </View>
    </View>
  );
};

export default BuffetDetailsCard;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 21,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginTop: 8,
  },
  sharedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  sharedText: {
    fontSize: PixelPerfect(10),
    fontFamily: Fonts.Regular,
    color: Colors.lightBlack,
    marginHorizontal: 5,
  },
});
