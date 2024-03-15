import {
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../../styles/stylesConstants';

interface IPopUp {
  visible: boolean;
  onRequestClose: () => void;
  animationType?: any;
  isFullScreen?: boolean;
  children: JSX.Element | JSX.Element[];
  styleTouchable?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const PopUp: FC<IPopUp> = ({
  visible,
  onRequestClose,
  animationType,
  children,
  styleTouchable,
  style,
  isFullScreen = false,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType={animationType ? animationType : 'fade'}
      onRequestClose={onRequestClose}>
      <TouchableOpacity
        style={[
          {
            flex: 1,
            backgroundColor: 'rgba(29, 37, 45, 0.5)',
          },
          styleTouchable,
        ]}
        onPress={onRequestClose}></TouchableOpacity>

      <View
        style={{
          flex: 1.5,
          backgroundColor: 'rgba(29, 37, 45, 0.5)',
        }}>
        <View style={[styles.modalView, style]}>{children}</View>
      </View>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  modalView: {
    flex: 1.5,
    backgroundColor: Colors.medWhite,
    paddingTop: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
