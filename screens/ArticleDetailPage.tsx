import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {articleDetailPageProps} from '../App';

interface Article {
  title: string;
  posting_date: string;
  content: string;
}

const ArticleDetailPage = ({navigation, route}: articleDetailPageProps) => {
  const {params} = route;
  const article: any = params?.article;
  const index: number = params?.index;

  const [articleIndex, setArticleIndex] = useState(index);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{article[articleIndex].title}</Text>
        <Text style={styles.dateText}>
          {article[articleIndex].posting_date}
        </Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.contentText}>
            {article[articleIndex].content}
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          articleIndex - 1 < 0
            ? Alert.alert('이전 뉴스가 없습니다.')
            : setArticleIndex(articleIndex - 1);
        }}>
        <Text style={styles.buttonText}>이전 뉴스</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          articleIndex + 1 > 39
            ? Alert.alert('다음 뉴스가 없습니다.')
            : setArticleIndex(articleIndex + 1);
        }}>
        <Text style={styles.buttonText}>다음 뉴스</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.buttonText}>목록으로 이동</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#223652',
    paddingTop: 20,
  },
  contentContainer: {
    width: '90%',
    height: '60%',
  },
  scrollView: {
    width: '100%',
    marginVertical: 20,
  },
  articleView: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  titleText: {
    fontSize: 17,
    textAlign: 'left',
    fontWeight: '700',
    color: 'white',
    flexShrink: 0,
  },
  dateText: {
    fontSize: 13,
    textAlign: 'right',
    fontWeight: '500',
    color: 'white',
    marginTop: 10,
  },
  contentText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'white',
  },
  button: {
    width: '90%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#1d213c',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});

export default ArticleDetailPage;
