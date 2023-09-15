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
interface Article {
  title: string;
  posting_date: string;
  content: string;
}

const mappingText = (text: string) => {
  text.split(' ').map(string => {
    return <Text style={styles.titleText}>{string}</Text>;
  });
};

const makeArticleList = (
  article: Article,
  index: React.Key | null | undefined,
  navigate: Function,
  articleList: never[],
) => {
  return (
    <TouchableOpacity
      style={styles.articleView}
      key={index}
      onPress={() => {
        navigate('ArticleDetailPage', {article: articleList, index: index});
      }}>
      {/* <Text style={styles.titleText}>{article.title}</Text> */}
      <View style={styles.longTextView}>
        {article.title.split(' ').map((text, index) => {
          return (
            <Text style={styles.titleText} key={index}>
              {text + ' '}
            </Text>
          );
        })}
      </View>
      <Text style={styles.dateText}>{article.posting_date}</Text>
    </TouchableOpacity>
  );
};

const ArticleList = ({navigation, route}: articleListProps) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {params} = route;
  const section: string | undefined = params?.section;

  useEffect(() => {
    const fetchData = async () => {
      console.log('try get api' + section);
      try {
        const response = await axios.get(
          'http://20.196.205.104:8000/api/news/' + section,
        );
        console.log(response.data);
        setArticleList(response.data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // This handles Axios network errors
          console.log(error);
          Alert.alert(
            'Network Error',
            'Please check your internet connection and try again.',
            [
              {
                text: 'OK',
                onPress: () => navigation.goBack(),
                style: 'default',
              },
            ],
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

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loadingText}>Loading...</Text>
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
    justifyContent: 'center',
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
    fontSize: 15,
    textAlign: 'right',
    fontWeight: '400',
    color: 'white',
    marginTop: 15,
  },
  loadingText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
  longTextView: {flexDirection: 'row', flexWrap: 'wrap'},
});

export default ArticleList;
