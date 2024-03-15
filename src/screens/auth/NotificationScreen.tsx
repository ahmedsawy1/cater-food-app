import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/views/SafeView';
import MainHeader from '../../components/headers/MainHeader';
import {MenuIcon} from '../../assets/svg/icons';
import {t} from 'i18next';
import {Colors} from '../../styles/stylesConstants';
import {notfData} from '../../temp/data/notf';
import NotificationCard from '../../components/cards/NotificationCard';

const NotificationScreen = () => {
  return (
    <SafeView>
      <MainHeader
        title={t('Notifications')}
        otherRight={<MenuIcon />}
        otherLeft={<Text></Text>}
      />
      <View style={styles.whiteView}>
        <FlatList
          contentContainerStyle={styles.flatlistCon}
          data={notfData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <NotificationCard
              title={item.title}
              message={item.message}
              date={item.date}
            />
          )}
        />
      </View>
    </SafeView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  whiteView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.medWhite,
    flex: 1,
    marginTop: 10,
  },
  flatlistCon: {
    paddingTop: 25,
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
});
