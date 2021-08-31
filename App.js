// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, ScrollView, SafeAreaView, StatusBar} from 'react-native';

import AccordionList from './components/accordion_list';

export default function App() {
  return (
     <SafeAreaView style={styles.container}>
        <Image source={require('./assets/pokemon-bgd.png')} resizeMode="contain" style={styles.image} />     
        <ScrollView style={styles.scrollView} >
          <AccordionList/>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82a70a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    width:'80%',
    margin:'auto',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 8,
    borderBottomColor:'#0f380f',
    borderBottomWidth: 2,
    marginHorizontal:'auto'
  }

});
