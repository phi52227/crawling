import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import {kukminIlboProps} from '../App';

const fieldList = [
  {title: '정치', section: 'politics'},
  {title: '경제', section: 'economy'},
  {title: '사회', section: 'society'},
  {title: '이슈', section: 'issue'},
  {title: '국제', section: 'international'},
  {title: '연예', section: 'entertainments'},
  {title: '스포츠', section: 'sports'},
  {title: '라이프', section: 'life'},
];

const fieldBtn = (
  title: String,
  section: string,
  index: React.Key,
  navigate: Function,
) => {
  return (
    <TouchableOpacity
      style={styles.button}
      key={index}
      onPress={() =>
        navigate('ArticleList', {newsCompany: 'kukmin', section: section})
      }>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
};

const KukminIlbo = ({navigation}: kukminIlboProps) => {
  return (
    <View style={styles.container}>
      {fieldList.map((element, index) =>
        fieldBtn(element.title, element.section, index, navigation.navigate),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#223652',
    paddingTop: 50,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    backgroundColor: '#647187',
  },
  menuText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
});

export default KukminIlbo;
