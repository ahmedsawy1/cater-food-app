import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import AppInitializer from './src/AppInitializer';
import './src/localization/i18n.config';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store/store';
import FlashMessage from 'react-native-flash-message';
import {Colors, Fonts} from './src/styles/stylesConstants';
import {View, StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.mainBack} />
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <AppInitializer />
        {/* </PersistGate> */}
      </Provider>
      <FlashMessage
        position="top"
        floating
        hideOnPress={true}
        style={{paddingTop: 15}}
        titleStyle={{
          fontFamily: Fonts.Medium,
          paddingTop: 10,
          zIndex: 1,
        }}
        textStyle={{
          fontFamily: Fonts.Medium,
        }}
      />
    </>
  );
}
// git status && git add . && git commit -m "Fix text left on IOS" && git push origin main

// yarn react-native generate-bootsplash src/assets/main/splash.png --background-color=0B363C --logo-width=160 --assets-path=assets  --flavor=main

