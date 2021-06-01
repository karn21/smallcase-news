import React from 'react';
import {View, Switch} from 'react-native';
import theme, {colors} from '../theme';

const PrimaryToggle = props => {
  const {value, onChange} = props;

  return (
    <View style={theme.container}>
      <Switch
        trackColor={{false: colors.primaryLight, true: colors.primaryLight}}
        thumbColor={colors.primaryDeep}
        value={value}
        onValueChange={onChange}
      />
    </View>
  );
};

export default PrimaryToggle;
