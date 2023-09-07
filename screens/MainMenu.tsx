import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {mainMenuProps} from '../App';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const menuList = [
  {title: '유튜브', screen: 'Youtube'},
  {title: '뉴스', screen: 'News'},
  {title: '메모', screen: 'Memo'},
  {title: '음성메모', screen: 'VoiceRecord'},
  {title: '라디오', screen: 'Radio'},
  {title: '도서/교육', screen: 'BookEdu'},
  {title: '엔터테인먼트', screen: 'Entertainment'},
  {title: '시각장애인 커뮤니티', screen: 'Community'},
  {title: '공지사항', screen: 'Notice'},
];

const MenuBtn = (
  title: String,
  screen: String,
  index: React.Key,
  navigate: Function,
) => {
  return (
    <TouchableOpacity
      style={styles.button}
      key={index}
      onPress={() => navigate(screen)}>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
};

const MainMenu = ({navigation}: mainMenuProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.buttonContainer}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          {menuList.map((element, index) =>
            MenuBtn(element.title, element.screen, index, navigation.navigate),
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#223652',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    paddingTop: 50,
    paddingBottom: 10,
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

export default MainMenu;
