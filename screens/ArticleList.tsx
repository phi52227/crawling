import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {articleListProps} from '../App';

const ArticleList = ({navigation, route}: articleListProps) => {
  const {params} = route;
  const section: any = params?.section;
  return (
    <View style={styles.container}>
      <Text>ArticleList{section}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#223652',
  },
});

export default ArticleList;
