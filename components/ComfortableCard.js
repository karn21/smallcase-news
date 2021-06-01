import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ComfortableCard = props => {
  const {data = {}} = props;
  const {title, desc, img, created} = data;

  return (
    <View style={styles.cont} elevation={1}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.txtWrap}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.desc}>
          dh lasihgf osgu i.uafilsagf .kasugfvitfei gksf. autlef at;waugf
          asfligy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
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
    fontSize: 16,
    color: '#4a4a4a',
  },
  desc: {
    color: '#707070',
  },
});

export default ComfortableCard;
