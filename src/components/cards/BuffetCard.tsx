import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {t} from 'i18next';
import {CriditIcon, UserIcon} from '../../assets/svg/icons';

interface IBuffetCard {
  imageURL: string;
  title: string;
  description: string;
  onPress: () => void;
  personsNum: number;
  price: number;
  style?: StyleProp<ViewStyle>;
  hasWarn?: boolean;
  hasIconsAndImage?: boolean;
}

const BuffetCard: FC<IBuffetCard> = ({
  imageURL,
  title,
  description,
  onPress,
  personsNum,
  price,
  style,
  hasWarn = false,
  hasIconsAndImage = true,
}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.con, style]} onPress={onPress}>
        {hasWarn && (
          <View style={styles.warnCon}>
            <Text style={styles.warnText}>متاح للطلبات قبل 3 أيام فقط</Text>
          </View>
        )}
        {hasIconsAndImage && (
          <View style={[styles.imageCon, {opacity: hasWarn ? 0.5 : 1}]}>
            <Image
              style={styles.image}
              source={{uri: imageURL}}
              resizeMode="cover"
            />
          </View>
        )}

        <View style={[styles.detailsCon, {opacity: hasWarn ? 0.5 : 1}]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          {hasIconsAndImage && (
            <View style={styles.priceAndPersons}>
              <UserIcon
                height={PixelPerfect(14)}
                width={PixelPerfect(14)}
                fill={Colors.mainColor}
              />
              <Text style={styles.priceAndPersonsText}>
                +{personsNum} {t('Person')}
              </Text>
              <CriditIcon
                height={PixelPerfect(14)}
                width={PixelPerfect(14)}
                fill={Colors.mainColor}
              />
              <Text style={styles.priceAndPersonsText}>
                {price} {t('SR')}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BuffetCard;

const styles = StyleSheet.create({
  con: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 17,
    borderRadius: 10,
  },
  imageCon: {
    flex: 1,
  },
  detailsCon: {
    flex: 4,
    marginHorizontal: 8,
  },
  image: {
    height: PixelPerfect(67),
    width: PixelPerfect(67),
  },
  title: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Medium,
    color: Colors.lightBlack,
    textAlign: 'left',
  },
  description: {
    fontSize: PixelPerfect(10),
    fontFamily: Fonts.Regular,
    color: Colors.darkBrown,
    textAlign: 'left',
  },
  priceAndPersons: {
    flexDirection: 'row',
    marginTop: 12,
  },
  priceAndPersonsText: {
    fontSize: PixelPerfect(10),
    fontFamily: Fonts.Regular,
    color: Colors.lightBlack,
    marginLeft: 3,
    marginRight: 16,
    textAlign: 'left',
  },
  warnCon: {
    position: 'absolute',
    right: 13,
    backgroundColor: Colors.darkBrown,
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 2,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
  },
  warnText: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Medium,
    color: Colors.white,
    textAlign: 'center',
  },
});
