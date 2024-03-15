import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {t} from 'i18next';

interface IProductCard {
  imageURL: string;
  imageCatgURL: string;
  price: number;
  title: string;
  rate: number;
  catg: string;
  onPress: () => void;
}

const ProductCard: FC<IProductCard> = ({
  imageURL,
  imageCatgURL,
  price,
  title,
  rate,
  catg,
  onPress,
}) => {
  return (
    <Pressable style={styles.con} onPress={onPress}>
      <ImageBackground source={{uri: imageURL}} style={styles.image}>
        <View style={styles.detailsCon}>
          <View style={styles.catgImageCon}>
            <Image
              source={{uri: imageCatgURL}}
              style={styles.catgImage}
              resizeMode="center"
            />
          </View>
          <View style={styles.namesCon}>
            <Text style={styles.titleText}>
              {title}
              {` `}
              <Text style={styles.rateText}>{rate}</Text>
            </Text>
            <Text style={styles.catgText}>{catg}</Text>
          </View>
          <Text style={styles.priceText}>
            {price} {t('SR')}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  con: {
    paddingBottom: 30,
    backgroundColor: Colors.medWhite,
  },
  image: {
    flex: 1,
    height: PixelPerfect(200),
    justifyContent: 'flex-end',
  },
  detailsCon: {
    width: '100%',
    backgroundColor: Colors.white,
    marginBottom: -20,
    borderRadius: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
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
  priceText: {
    fontSize: PixelPerfect(13),
    fontFamily: Fonts.Regular,
    color: Colors.darkBrown,
  },
  titleText: {
    fontSize: PixelPerfect(16),
    fontFamily: Fonts.Regular,
    color: Colors.black,
    textAlign: 'left',
  },
  rateText: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Medium,
    color: Colors.mainColor,
  },
  catgText: {
    fontSize: PixelPerfect(11),
    fontFamily: Fonts.Regular,
    color: Colors.darkBrown,
    marginTop: PixelPerfect(-5),
    textAlign: 'left',
  },
});
