import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../theme';

const Header = props => {
  const {heading} = props;
  return (
    <View style={styles.wrap} elevation={4}>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 12,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowRadius: 15,
    shadowOpacity: 0.5,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
  },
});

export default Header;
