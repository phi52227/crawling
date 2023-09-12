import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {articleListProps} from '../App';
import axios, {AxiosResponse} from 'axios';

const getArticleList = async () => {
  try {
    const response = await axios.get('http://20.214.178.152:8000/api/news');
    console.log(response.data);
    return response.data;
  } catch (error) {
    Alert.alert('axios get error');
  }
};

interface Article {
  title: string;
  posting_date: string;
  content: string;
}

const makeArticleList = (article, index, navigate: Function, articleList) => {
  return (
    <TouchableOpacity
      style={styles.articleView}
      key={index}
      onPress={() => {
        navigate('ArticleDetailPage', {article: articleList, index: index});
      }}>
      <Text style={styles.titleText}>{article.title}</Text>
      <Text style={styles.dateText}>{article.posting_date}</Text>
    </TouchableOpacity>
  );
};

const ArticleList = ({navigation, route}: articleListProps) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://20.214.178.152:8000/api/news');
        console.log(response.data);
        setArticleList(response.data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // This handles Axios network errors
          Alert.alert(
            'Network Error',
            'Please check your internet connection and try again.',
          );
        } else {
          // Handle other types of errors
          Alert.alert('Error', 'An error occurred while fetching data.');
        }
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const {params} = route;
  const section: any = params?.section;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView style={styles.scrollView}>
          {articleList.map((article, index) =>
            makeArticleList(article, index, navigation.navigate, articleList),
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#223652',
  },
  scrollView: {
    width: '100%',
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
    fontWeight: '400',
    color: 'white',
    marginTop: 10,
  },
});

export default ArticleList;
