import React from 'react';
import {View, Animated, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../theme';
import {getDate, getTime} from '../utility';

const CompactCard = props => {
  const {data = {}, contStyle = null} = props;
  const {imageUrl = '', createdAt = ''} = data;
  return (
    <Animated.View style={contStyle}>
      {data && (
        <View style={styles.cont}>
          <Image
            style={styles.img}
            source={{
              uri: imageUrl,
            }}
            elevation={1}
          />
          <Text style={styles.date}>{getDate(createdAt)}</Text>
          <Text style={styles.time}>{getTime(createdAt)}</Text>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#eee',
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  img: {
    height: 120,
    width: 140,
    borderRadius: 10,
  },
  date: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    color: '#707070',
    fontWeight: 'bold',
  },
  time: {
    textAlign: 'center',
    fontSize: 12,
    color: '#707070',
  },
});

export default CompactCard;
