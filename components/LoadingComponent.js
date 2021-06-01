import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import theme, {colors} from '../theme';

const LoadingComponent = props => {
  const {loading} = props;
  return (
    <View>
      {loading && (
        <View style={styles.cont}>
          <ActivityIndicator size="large" color={colors.primaryLight} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default LoadingComponent;
