import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme, {colors} from '../theme';
import ComfortableCard from './ComfortableCard';
import Header from './Header';
import PrimaryToggle from './PrimaryToggle';

class Main extends Component {
  state = {
    compactView: false,
  };

  toggleView = () => {
    this.setState({
      compactView: !this.state.compactView,
    });
  };

  render() {
    const {compactView} = this.state;

    return (
      <View style={theme.container}>
        <Header heading="Smallcase News" />
        <View style={styles.toggleWrap}>
          <Text
            style={[styles.viewText, compactView ? null : styles.underline]}>
            Comfortable View
          </Text>
          <View>
            <PrimaryToggle value={compactView} onChange={this.toggleView} />
          </View>
          <Text
            style={[styles.viewText, compactView ? styles.underline : null]}>
            Compact View
          </Text>
        </View>
        <View>
          <ComfortableCard />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toggleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  viewText: {
    fontSize: 15,
    fontWeight: '300',
    padding: 5,
  },
  underline: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    marginBottom: -2,
  },
});

export default Main;
