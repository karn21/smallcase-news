import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {colors} from '../theme';
import {formatTimestamp} from '../utility';

class ComfortableCard extends Component {
  state = {
    expanded: false,
  };

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    const {data = {}, contStyle = null} = this.props;
    const {headline = '', summary = '', imageUrl = '', createdAt = ''} = data;
    const {expanded} = this.state;
    return (
      <Animated.View style={contStyle}>
        {data && (
          <View style={[styles.cont]} elevation={1}>
            <Image
              style={styles.img}
              source={{
                uri: imageUrl,
              }}
            />
            <TouchableOpacity
              onPress={this.toggleExpand}
              style={styles.txtWrap}>
              <Text style={styles.title} numberOfLines={expanded ? null : 2}>
                {headline}
              </Text>
              <Text style={styles.desc} numberOfLines={expanded ? null : 3}>
                {summary}
              </Text>
              {expanded && (
                <Text style={styles.date}>{formatTimestamp(createdAt)}</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    );
  }
}

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
    maxHeight: 90,
    height: '100%',
    borderRadius: 10,
  },
  txtWrap: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 14,
    color: colors.primary,
    lineHeight: 18,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 5,
    fontSize: 12,
    color: '#707070',
    lineHeight: 15,
    letterSpacing: 0.6,
  },
  date: {
    marginTop: 5,
    fontSize: 10,
    color: '#3a3a3a',
    lineHeight: 15,
    letterSpacing: 0.6,
    textAlign: 'right',
  },
});

export default ComfortableCard;
