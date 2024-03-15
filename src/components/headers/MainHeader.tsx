import {StyleSheet, Text, Image, View, Pressable, Button} from 'react-native';
import React, {FC} from 'react';
import {SharedStyles} from '../../styles/sharedStyles';
import {
  Colors,
  Fonts,
  phoneWidth,
  PixelPerfect,
} from '../../styles/stylesConstants';
import {ArrowBackIcon, CartIcon} from '../../assets/svg/icons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';

interface IMainHeader {
  otherRight?: JSX.Element | JSX.Element[];
  otherLeft?: JSX.Element | JSX.Element[];
  title?: string;
  onOtherRightPress?: () => void;
}

const MainHeader: FC<IMainHeader> = ({
  title,
  otherRight,
  otherLeft,
  onOtherRightPress,
}) => {
  const navigation = useNavigation();
  const {cart} = useSelector((state: RootState) => state.tempReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.con}>
      {otherRight ? (
        // <Pressable style={styles.conRight} onPress={onOtherRightPress}>
        <Pressable
          style={styles.conRight}
          onPress={() => navigation.openDrawer()}>
          {otherRight}
        </Pressable>
      ) : (
        <Pressable style={styles.conRight} onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </Pressable>
      )}

      <View style={styles.conLogo}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.conLeft}>
        {otherLeft ? (
          otherLeft
        ) : (
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cartCountText}>{cart == 0 ? '' : cart}</Text>
            <CartIcon />
          </View>
        )}
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 15,
    ...SharedStyles.centred,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: PixelPerfect(20),
  },

  conLogo: {
    flex: 3,
    ...SharedStyles.centred,
  },
  conRight: {
    ...SharedStyles.centred,
    flex: 1,
    alignItems: 'flex-start',
  },
  conLeft: {
    ...SharedStyles.centred,
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.Regular,
    fontSize: PixelPerfect(14),
  },
  cartCountText: {
    color: Colors.white,
    fontSize: PixelPerfect(11),
    marginHorizontal: 5,
  },
});
