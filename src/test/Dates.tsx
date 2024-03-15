import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Dates = () => {
  function getDaysInMonthUTC(month, year) {
    var date = new Date(Date.UTC(year, month, 1));
    var days = [];
    while (date.getUTCMonth() === month) {
      days.push(new Date(date));
      date.setUTCDate(date.toLocaleString('default', {month: 'long'}));
    }
    return days;
  }

  //   const test = getDaysInMonthUTC(1, 2022);
  //   console.log(test[0].getUTCMonth());

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const test = getDaysInMonthUTC(2, 2022);
  console.log('The current month is ' + monthNames[test[0].getMonth()]);

  return (
    <View>
      <Text>{4}</Text>
    </View>
  );
};

export default Dates;

const styles = StyleSheet.create({});
