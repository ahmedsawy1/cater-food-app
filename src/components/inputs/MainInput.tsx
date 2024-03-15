import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {SharedStyles} from '../../styles/sharedStyles';

const MainInput = ({...props}) => {
  return (
    <View style={styles.con}>
      <TextInput style={styles.textInput} {...props} />
      <Text style={styles.phoneText}>+966</Text>
    </View>
  );
};

export default MainInput;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 6,
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    ...SharedStyles.centred,
  },
  textInput: {
    flex: 1,
    padding: 0,
    fontSize: PixelPerfect(14),
    color: Colors.lightBlack,
    fontFamily: Fonts.Medium,
    textAlign: 'left',
  },
  phoneText: {
    fontSize: PixelPerfect(14),
    color: Colors.mainColor,
    fontFamily: Fonts.Medium,
    marginLeft: 5,
  },
});
