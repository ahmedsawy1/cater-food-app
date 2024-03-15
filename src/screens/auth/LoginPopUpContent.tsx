import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useReducer, useState} from 'react';
import {SharedStyles} from '../../styles/sharedStyles';
import {UserIcon} from '../../assets/svg/icons';
import {Colors, Fonts, PixelPerfect} from '../../styles/stylesConstants';
import {t} from 'i18next';
import MainInput from '../../components/inputs/MainInput';
import MainButton from '../../components/buttons/MainButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {tempLogin} from '../../store/actions/authActions';
import {RootState} from '../../store/store';

const LoginPopUpContent = ({otherFN}) => {
  // start - wait - end
  const [otpStatus, setOtpStatus] = useState('start');
  const [code, setcode] = useState('');
  const [phone, setPhone] = useState('');

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const dispatch = useDispatch();
  const {isSignedIn} = useSelector((state: RootState) => state.authReducer);

  const onResendPress = () => {
    if (phone != '') {
      if (otpStatus != 'wait') {
        setSeconds(30);
        setOtpStatus('wait');
      }
    } else {
      showMessage({
        type: 'danger',
        message: t('Enter Valid Phone Number'),
      });
    }
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (otpStatus !== 'start') {
            clearInterval(myInterval);
            setOtpStatus('end');
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <View style={styles.con}>
      <UserIcon
        height={PixelPerfect(36)}
        width={PixelPerfect(36)}
        fill={Colors.mainColor}
      />
      <Text style={styles.loginText}>{t('login')}</Text>

      <Text style={styles.enterPhoneText}>
        {otpStatus == 'start'
          ? t('enterPhone')
          : t('enterCode', {
              phone: phone,
            })}
      </Text>

      {otpStatus == 'start' ? (
        <MainInput
          keyboardType="numeric"
          value={phone}
          onChangeText={(txt: string) => setPhone(txt)}
        />
      ) : (
        // <Text>OTP</Text>
        <OTPInputView
          style={{width: '100%', height: PixelPerfect(100)}}
          pinCount={4}
          // code={theCode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged={txt => {
          //   settheCode(txt);
          // }}
          autoFocusOnLoad
          codeInputFieldStyle={styles.activeSquare}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
            dispatch(tempLogin());
            console.log('isSignedIn + ' + isSignedIn);
            otherFN();
          }}
        />
      )}

      {otpStatus == 'start' || otpStatus == 'wait' ? (
        <MainButton
          title={otpStatus == 'start' ? t('sendCode') : `${minutes}:${seconds}`}
          style={{marginTop: 18, width: '100%'}}
          styleTitle={{fontFamily: Fonts.SemiBold, fontSize: PixelPerfect(14)}}
          onPress={onResendPress}
        />
      ) : (
        <View>
          <Text style={styles.gotNoCodeText}>{t('gotNoCode')}</Text>
          <View style={styles.buttonsCon}>
            <MainButton
              style={styles.sharedButtons}
              styleTitle={styles.sharedButtonTitle}
              title={t('emailLogin')}
            />
            <MainButton
              style={styles.sharedButtons}
              styleTitle={styles.sharedButtonTitle}
              title={t('resendCode')}
              onPress={onResendPress}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default LoginPopUpContent;

const styles = StyleSheet.create({
  con: {
    ...SharedStyles.centred,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  loginText: {
    marginVertical: 16,
    fontSize: PixelPerfect(14),
    color: Colors.lightBlack,
    fontFamily: Fonts.Medium,
  },
  enterPhoneText: {
    fontSize: PixelPerfect(12),
    color: Colors.darkBrown,
    fontFamily: Fonts.Medium,
    marginBottom: 10,
    textAlign: 'center',
    marginHorizontal: 50,
  },
  activeSquare: {
    width: PixelPerfect(80),
    height: PixelPerfect(63),
    borderRadius: 10,
    fontSize: PixelPerfect(20),
    color: Colors.lightBlack,
    backgroundColor: Colors.white,
  },
  underlineStyleHighLighted: {
    borderColor: Colors.mainColor,
  },
  gotNoCodeText: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: PixelPerfect(12),
    color: Colors.lightBlack,
    fontFamily: Fonts.Medium,
    alignSelf: 'center',
  },
  buttonsCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sharedButtons: {
    width: '49%',
    backgroundColor: Colors.white,
  },
  sharedButtonTitle: {
    fontSize: PixelPerfect(14),
    color: Colors.lightBlack,
    fontFamily: Fonts.Regular,
  },
});
