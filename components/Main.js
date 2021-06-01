import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import theme, {colors} from '../theme';
import ComfortableCard from './ComfortableCard';
import Header from './Header';
import PrimaryToggle from './PrimaryToggle';
import axios from 'axios';
import {apiEndpoints} from '../constants';
import CompactCard from './CompactCard';

class Main extends Component {
  state = {
    compactView: false,
    data: [],
    loading: false,
  };

  toggleView = () => {
    this.setState({
      compactView: !this.state.compactView,
    });
  };

  getNews = async () => {
    const url = apiEndpoints.getNews(20, 0);
    try {
      const res = await axios.get(url);
      const data = res.data.data;
      if (res && res.status === 200) {
        this.setState({data});
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    console.log('mounted');
    this.getNews();
  }

  render() {
    const {compactView, data} = this.state;
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
        {compactView ? (
          <View style={styles.compactListCont} key={compactView}>
            <FlatList
              numColumns={2}
              data={data}
              renderItem={({item}) => <CompactCard data={item} />}
              keyExtractor={newsItem => newsItem._id}
            />
          </View>
        ) : (
          <View style={styles.comfortableListCont}>
            <FlatList
              data={data}
              renderItem={({item}) => <ComfortableCard data={item} />}
              keyExtractor={newsItem => newsItem._id}
            />
          </View>
        )}
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
  comfortableListCont: {
    flex: 1,
    marginBottom: 10,
  },
  compactListCont: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default Main;
