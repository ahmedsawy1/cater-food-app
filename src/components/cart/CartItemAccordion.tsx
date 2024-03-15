import {t} from 'i18next';
import React, {FC, useEffect, useState} from 'react';
import {
  Image,
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ExclamationIcon,
} from '../../assets/svg/icons';
import {
  Colors,
  Fonts,
  phoneHeight,
  PixelPerfect,
} from '../../styles/stylesConstants';

interface ICartItemAccordion {
  title: string;
  content: any;
}

const CartItemAccordion: FC<ICartItemAccordion> = ({title, content}) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);
  const toggleExpand = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        100,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.scaleY,
      ),
    );
    setExpanded(old => !old);
  };

  //

  return (
    <>
      <View style={[styles.container]}>
        <Pressable onPress={toggleExpand}>
          <View
            style={[
              styles.header,
              {
                borderBottomLeftRadius: expanded ? 0 : 10,
                borderBottomRightRadius: expanded ? 0 : 10,
              },
            ]}>
            <View style={styles.catgImageCon}>
              <Image
                source={{uri: 'https://i.ibb.co/hfzbgqz/fsadf.png'}}
                style={styles.catgImage}
                resizeMode="center"
              />
            </View>

            <View style={styles.namesCon}>
              <Text style={styles.titleText}>{'فورسيزون'}</Text>
              <Text style={styles.catgText}>{'البوفيه الاساسى'}</Text>
            </View>

            <Text style={[styles.title, {fontFamily: Fonts.Bold}]}>
              {title}
            </Text>

            <View style={styles.plus}>
              {expanded ? (
                <ArrowUpIcon
                  width={PixelPerfect(12)}
                  height={PixelPerfect(12)}
                />
              ) : (
                <ArrowDownIcon
                  width={PixelPerfect(12)}
                  height={PixelPerfect(12)}
                  fill={'#918F8F'}
                />
              )}
            </View>
          </View>
        </Pressable>
      </View>
      {expanded && (
        <View style={styles.child}>
          <View style={{paddingHorizontal: 16}}>
            <View style={styles.sharedCard}>
              <Text style={styles.diliverTitleText}>
                {t('Deliver Details')}
              </Text>
              <Text style={styles.diliverSubTitleText}>
                {'الرياض، حي الملقا\nيوم الاثنين 14 يناير، الساعة 9:00 م'}
              </Text>
            </View>
            <View style={styles.sharedCard}>
              <Text style={styles.diliverTitleText}>{t('Amount details')}</Text>
              <View style={styles.priceItemCon}>
                <View style={styles.squareIcon} />
                <Text style={styles.priceItemConTitleText}>
                  البوفيه الإساسي
                </Text>
                <Text style={styles.itemPrice}>2,300</Text>
              </View>
              <View style={styles.priceItemCon}>
                <View style={styles.squareIcon} />
                <Text style={styles.priceItemConTitleText}>
                  خدمات إضافية للبوفيه الاساسي
                </Text>
                <Text style={styles.itemPrice}>100</Text>
              </View>
              <View style={styles.priceItemCon}>
                <View style={styles.squareIcon} />
                <Text style={styles.priceItemConTitleText}>
                  البوفيه الفاخر{' '}
                </Text>
                <Text style={styles.itemPrice}>5,000</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default CartItemAccordion;
const styles = StyleSheet.create({
  container: {
    marginBottom: PixelPerfect(10),
    overflow: 'hidden',
    borderRadius: 30,
  },
  title: {
    fontSize: PixelPerfect(10),
    color: Colors.lightBlack,
    fontFamily: Fonts.Regular,
    marginHorizontal: 6,
  },
  header: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRadius: 30,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  plus: {
    marginLeft: 'auto',
    fontSize: 30,
    color: '#CCCCCC',
  },
  child: {
    paddingHorizontal: PixelPerfect(15),
    backgroundColor: Colors.medWhite,
    // flex: 1,
    borderRadius: 0,
    // height: phoneHeight,
  },
  catgImageCon: {
    flex: 1,
    justifyContent: 'center',
  },
  namesCon: {
    flex: 6,
  },
  catgImage: {
    height: PixelPerfect(44),
    width: PixelPerfect(44),
  },
  catgText: {
    fontSize: PixelPerfect(11),
    fontFamily: Fonts.Regular,
    color: Colors.darkBrown,
    marginTop: PixelPerfect(-2),
    textAlign: 'left',
  },
  titleText: {
    fontSize: PixelPerfect(16),
    fontFamily: Fonts.Regular,
    color: Colors.black,
    textAlign: 'left',
  },
  diliverTitleText: {
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Medium,
    color: Colors.lightBlack,
    marginBottom: 3,
    textAlign: 'left',
  },
  diliverSubTitleText: {
    fontSize: PixelPerfect(11),
    fontFamily: Fonts.Medium,
    color: Colors.darkBrown,
    textAlign: 'left',
  },
  sharedCard: {
    backgroundColor: Colors.white,
    paddingTop: 10,
    paddingHorizontal: 24,
    paddingBottom: 15,
    borderRadius: 10,
    marginBottom: 8,
  },
  priceItemCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  squareIcon: {
    height: 5,
    width: 5,
    backgroundColor: Colors.darkBrown,
  },
  priceItemConTitleText: {
    fontSize: PixelPerfect(11),
    fontFamily: Fonts.Regular,
    color: Colors.lightBlack,
    flex: 1,
    marginHorizontal: 2,
    textAlign: 'left',
  },
  itemPrice: {
    color: Colors.mainColor,
    fontSize: PixelPerfect(12),
    fontFamily: Fonts.Medium,
  },
});
