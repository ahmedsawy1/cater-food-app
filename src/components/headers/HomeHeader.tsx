import {StyleSheet, Text, Image, View, Pressable} from 'react-native';
import React, {FC} from 'react';
import {SharedStyles} from '../../styles/sharedStyles';
import {phoneWidth, PixelPerfect} from '../../styles/stylesConstants';
import {MenuIcon, SearchIcon} from '../../assets/svg/icons';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../constants/interfaces';

interface IHomeHeader {
  otherRight?: JSX.Element | JSX.Element[];
  otherLeft?: JSX.Element | JSX.Element[];
}

const HomeHeader: FC<IHomeHeader> = ({otherRight, otherLeft}) => {
  const navigation: NavigationProps = useNavigation();
  return (
    <View style={styles.con}>
      <Pressable
        style={styles.conRight}
        onPress={() => navigation.openDrawer()}>
        {otherRight ? otherRight : <MenuIcon />}
      </Pressable>
      <View style={styles.conLogo}>
        <Image
          source={require('../../assets/main/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.conLeft}>
        {otherLeft ? otherLeft : <SearchIcon />}
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 10,
    ...SharedStyles.centred,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: PixelPerfect(20),
  },
  image: {
    height: PixelPerfect(27),
    width: PixelPerfect(96),
  },
  conLogo: {
    flex: 3,
    ...SharedStyles.centred,
  },
  conRight: {
    flex: 0.5,
  },
  conLeft: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
});
