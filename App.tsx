// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import MainMenu from './screens/MainMenu';
import News from './screens/News';
import ArticleList from './screens/ArticleList';
import ArticleDetailPage from './screens/ArticleDetailPage';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  MainMenu: undefined;
  News: undefined;
  ArticleList: {section: string} | undefined;
  ArticleDetailPage: {article: any; index: number};
};

export type mainMenuProps = NativeStackScreenProps<
  RootStackParamList,
  'MainMenu'
>;

export type newsProps = NativeStackScreenProps<RootStackParamList, 'News'>;

export type articleListProps = NativeStackScreenProps<
  RootStackParamList,
  'ArticleList'
>;

export type articleDetailPageProps = NativeStackScreenProps<
  RootStackParamList,
  'ArticleDetailPage'
>;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainMenu"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="ArticleList" component={ArticleList} />
        <Stack.Screen name="ArticleDetailPage" component={ArticleDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
