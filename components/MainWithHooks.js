import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import theme, {colors} from '../theme';
import ComfortableCard from './ComfortableCard';
import Header from './Header';
import PrimaryToggle from './PrimaryToggle';
import axios from 'axios';
import {apiEndpoints, newsItemLimit} from '../constants';
import CompactCard from './CompactCard';
import LoadingComponent from './LoadingComponent';
import BackgroundCard from './BackgroundCard';

const MainWithHooks = () => {
  const flatListRef = useRef();
  const [compactView, toggleCompactView] = useState(false);
  const [loading, toggleLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [newsItems, setNewsItems] = useState([]);
  const [refreshing, toggleRefreshing] = useState(false);
  const [fadeValue, setFadeValue] = useState(new Animated.Value(0));
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    startAnimation();
  }, [fadeValue]);

  useEffect(() => {
    setTimeout(
      () => flatListRef.current.scrollToOffset({offset: scrollPos}),
      300,
    );
  }, [compactView]);

  const startAnimation = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const toggleView = (value = null) => {
    let newValue = false;
    if (value) {
      newValue = value;
    } else {
      newValue = !compactView;
    }
    toggleCompactView(newValue);
    setFadeValue(new Animated.Value(0));
  };

  const getNews = async () => {
    toggleLoading(true);
    const url = apiEndpoints.getNews(newsItemLimit, offset);
    try {
      const res = await axios.get(url);
      const data = res.data.data;
      if (res && res.status === 200) {
        setNewsItems([...newsItems, ...data]);
        setOffset(offset => offset + newsItemLimit);
        toggleLoading(false);
        toggleRefreshing(false);
        startAnimation();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshData = () => {
    toggleRefreshing(true);
    setOffset(0);
    setFadeValue(new Animated.Value(0));
  };

  const handleScroll = e => {
    setScrollPos(e.nativeEvent.contentOffset.y);
  };

  return (
    <View style={theme.container}>
      <Header heading="Smallcase News" />
      <View style={styles.toggleWrap}>
        <TouchableOpacity onPress={() => toggleView(false)}>
          <Text
            style={[styles.viewText, compactView ? null : styles.underline]}>
            Comfortable View
          </Text>
        </TouchableOpacity>

        <View>
          <PrimaryToggle
            value={compactView}
            onChange={() => toggleView(!compactView)}
          />
        </View>
        <TouchableOpacity onPress={() => toggleView(true)}>
          <Text
            style={[styles.viewText, compactView ? styles.underline : null]}>
            Compact View
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          compactView ? styles.compactListCont : styles.comfortableListCont,
        ]}
        key={compactView}>
        <FlatList
          ref={flatListRef}
          numColumns={compactView ? 2 : 1}
          data={newsItems}
          // horizontal={true}
          renderItem={({item}) =>
            compactView ? (
              <CompactCard data={item} contStyle={{opacity: fadeValue}} />
            ) : (
              <ComfortableCard data={item} contStyle={{opacity: fadeValue}} />
              // <BackgroundCard data={item} />
            )
          }
          keyExtractor={newsItem => newsItem._id}
          onEndReached={getNews}
          onEndReachedThreshold={0.4}
          initialNumToRender={20}
          ListFooterComponent={<LoadingComponent loading={loading} />}
          refreshing={refreshing}
          onRefresh={refreshData}
          onScroll={handleScroll}
        />
      </View>
    </View>
  );
};

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

export default MainWithHooks;
