import {I18nManager, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import RNBootSplash from 'react-native-bootsplash';
import {RootState} from './store/store';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation/navigation';
import RNRestart from 'react-native-restart';
// import messaging from '@react-native-firebase/messaging';
// import {AsyncKeys, saveItem} from '../constants/helpers';
// import {initAction} from '../store/actions/initActions';

const AppInitializer = () => {
  const dispatch = useDispatch();

  console.log('isRTL = ' + I18nManager.isRTL);

  const forceRTLFN = () => {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    }
  };

  useEffect(() => {
    forceRTLFN();
  }, []);

  // I18nManager.forceRTL(true);

  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);

  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     // console.log('Authorization status:', authStatus);
  //   }
  //   const knowPre = await messaging().requestPermission({
  //     sound: false,
  //     announcement: true,
  //     // ... other permission settings
  //   });
  // }

  // const getToken = async () => {
  //   try {
  //     const token = await messaging().getToken();

  //     console.log('============= success token =============');
  //     console.log(token);
  //     console.log('============= token =============');

  //     await saveItem(AsyncKeys.DEVICE_TOKEN, {device_token: token});
  //   } catch (error) {
  //     console.log('======== error post token ==========');
  //     console.log(error);
  //     console.log('======== error post token ==========');
  //   }
  // };

  // const notficationListener = async () => {
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //   });

  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //     });
  // };

  // useEffect(() => {
  //   requestUserPermission();
  //   getToken();
  //   notficationListener();
  // }, []);

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default AppInitializer;

const styles = StyleSheet.create({});
