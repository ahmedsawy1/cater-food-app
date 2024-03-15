import {View, Text, Button, I18nManager, SafeAreaView} from 'react-native';
import React from 'react';
import i18next, {t} from 'i18next';
import RNRestert from 'react-native-restart';

export const ChangeLangTest = () => {
  const changeLanguageFunc = async (code: string) => {
    i18next.changeLanguage(code);
    if (code == 'ar') I18nManager.forceRTL(true);
    else if (code == 'en') I18nManager.forceRTL(false);
    RNRestert.Restart();
  };

  return (
    <SafeAreaView>
      <View>
        <Button title="عربى" onPress={() => changeLanguageFunc('ar')} />
        <Button title="English" onPress={() => changeLanguageFunc('en')} />
        <Text>{t('Login')}</Text>
      </View>
    </SafeAreaView>
  );
};
