import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ComfortableCard = props => {
  const {data = {}} = props;
  const {headline = '', summary = '', imageUrl = '', created = ''} = data;

  return (
    <View>
      {data && (
        <View style={styles.cont} elevation={1}>
          <Image
            style={styles.img}
            source={{
              uri: imageUrl,
            }}
          />
          <View style={styles.txtWrap}>
            <Text style={styles.title}>
              {headline.length > 80
                ? headline.substring(0, 80) + '...'
                : headline}
            </Text>
            <Text style={styles.desc}>
              {summary.length > 120
                ? summary.substring(0, 120) + '...'
                : summary}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    marginVertical: 7,
    alignItems: 'center',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  txtWrap: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  desc: {
    marginTop: 3,
    fontSize: 12,
    color: '#707070',
  },
});

export default ComfortableCard;
