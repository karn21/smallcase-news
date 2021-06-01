import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import theme, {colors} from '../theme';
import ComfortableCard from './ComfortableCard';
import Header from './Header';
import PrimaryToggle from './PrimaryToggle';
import axios from 'axios';
import {apiEndpoints, newsItemLimit} from '../constants';
import CompactCard from './CompactCard';
import LoadingComponent from './LoadingComponent';

class Main extends Component {
  state = {
    compactView: false,
    newsItems: [],
    loading: false,
    offset: 0,
    refreshing: false,
  };

  toggleView = (value = null) => {
    if (value) {
      this.setState({
        compactView: value,
      });
    } else {
      this.setState({
        compactView: !this.state.compactView,
      });
    }
  };

  getNews = async () => {
    this.setState({loading: true});
    const {offset, newsItems, refreshing} = this.state;
    const url = apiEndpoints.getNews(newsItemLimit, offset);
    try {
      const res = await axios.get(url);
      const data = res.data.data;
      if (res && res.status === 200) {
        this.setState({
          newsItems: refreshing ? data : [...newsItems, ...data],
          offset: offset + newsItemLimit,
          loading: false,
          refreshing: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  refreshData = () => {
    this.setState(
      {
        refreshing: true,
        offset: 0,
        data: [],
      },
      () => this.getNews(),
    );
  };

  componentDidMount() {
    this.getNews();
  }

  render() {
    const {compactView, newsItems, loading, refreshing} = this.state;
    return (
      <View style={theme.container}>
        <Header heading="Smallcase News" />
        <View style={styles.toggleWrap}>
          <TouchableOpacity onPress={() => this.toggleView(false)}>
            <Text
              style={[styles.viewText, compactView ? null : styles.underline]}>
              Comfortable View
            </Text>
          </TouchableOpacity>

          <View>
            <PrimaryToggle value={compactView} onChange={this.toggleView} />
          </View>
          <TouchableOpacity onPress={() => this.toggleView(false)}>
            <Text
              style={[styles.viewText, compactView ? styles.underline : null]}>
              Compact View
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={
            compactView ? styles.compactListCont : styles.comfortableListCont
          }
          key={compactView}>
          <FlatList
            numColumns={compactView ? 2 : 1}
            data={newsItems}
            renderItem={({item}) =>
              compactView ? (
                <CompactCard data={item} />
              ) : (
                <ComfortableCard data={item} />
              )
            }
            keyExtractor={newsItem => newsItem._id}
            onEndReached={this.getNews}
            onEndReachedThreshold={0.4}
            initialNumToRender={20}
            ListFooterComponent={<LoadingComponent loading={loading} />}
            refreshing={refreshing}
            onRefresh={this.refreshData}
          />
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
