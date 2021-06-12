import React from 'react';
import {View, ImageBackground, Text, StyleSheet, Image} from 'react-native';

const playBtn = require('../assets/play.png');

const BackgroundCard = props => {
  const {data = {}} = props;
  const {imageUrl = '', headline = ''} = data;

  return (
    <View>
      <ImageBackground
        source={{uri: imageUrl}}
        style={styles.img}
        imageStyle={styles.cont}>
        <View style={styles.headingWrap}>
          <Text style={styles.heading}>{headline}</Text>
          <Image source={playBtn} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    borderRadius: 10,
  },

  img: {
    height: 180,
    width: 320,
    marginLeft: 20,
  },
  headingWrap: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  heading: {
    color: '#fff',
    fontWeight: 'bold',
    width: '80%',
  },
});

export default BackgroundCard;
