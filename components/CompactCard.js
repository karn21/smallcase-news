import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import theme from '../theme';
import {formatTimestamp, getDate, getTime} from '../utility';

const CompactCard = props => {
  const {data} = props;
  const {imageUrl = '', createdAt = ''} = data;
  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#eee',
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 12,
    borderRadius: 10,
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
  },
  time: {
    textAlign: 'center',
    fontSize: 12,
    color: '#707070',
  },
});

export default CompactCard;