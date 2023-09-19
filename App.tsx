// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import MainMenu from './screens/MainMenu';
import NaverNews from './screens/NaverNews';
import DongaIlbo from './screens/DongaIlbo';
import JoongangIlbo from './screens/JoongangIlbo';
import KukminIlbo from './screens/KukminIlbo';
import YonhapNews from './screens/YonhapNews';
import YtnNews from './screens/YtnNews';
import ArticleList from './screens/ArticleList';
import ArticleDetailPage from './screens/ArticleDetailPage';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  MainMenu: undefined;
  NaverNews: undefined;
  DongaIlbo: undefined;
  JoongangIlbo: undefined;
  KukminIlbo: undefined;
  YonhapNews: undefined;
  YtnNews: undefined;
  ArticleList: {newsCompany: string; section: string} | undefined;
  ArticleDetailPage: {article: any; index: number};
};

export type mainMenuProps = NativeStackScreenProps<
  RootStackParamList,
  'MainMenu'
>;

export type naverNewsProps = NativeStackScreenProps<
  RootStackParamList,
  'NaverNews'
>;
export type dongaIlboProps = NativeStackScreenProps<
  RootStackParamList,
  'DongaIlbo'
>;
export type kukminIlboProps = NativeStackScreenProps<
  RootStackParamList,
  'KukminIlbo'
>;
export type ytnNewsProps = NativeStackScreenProps<
  RootStackParamList,
  'YtnNews'
>;
export type yonhapNewsProps = NativeStackScreenProps<
  RootStackParamList,
  'YonhapNews'
>;
export type joongangIlboProps = NativeStackScreenProps<
  RootStackParamList,
  'JoongangIlbo'
>;
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
        <Stack.Screen name="NaverNews" component={NaverNews} />
        <Stack.Screen name="DongaIlbo" component={DongaIlbo} />
        <Stack.Screen name="KukminIlbo" component={KukminIlbo} />
        <Stack.Screen name="YtnNews" component={YtnNews} />
        <Stack.Screen name="YonhapNews" component={YonhapNews} />
        <Stack.Screen name="JoongangIlbo" component={JoongangIlbo} />
        <Stack.Screen name="ArticleList" component={ArticleList} />
        <Stack.Screen name="ArticleDetailPage" component={ArticleDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
