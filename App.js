
import React from 'react';
import {View} from 'react';
import {Icon} from 'react';

import WelcomeScreen from './app/screens/WelcomeScreen';
import Home from './app/screens/Home';
import Listeleme2 from './app/screens/listeleme2';
import OyunSahnesi2 from './app/screens/OyunSahnesi2';

import {
  SafeAreaView,
  ScrollView, 
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

export default function App(){
  return (
  //<WelcomeScreen/> //GÖRMEK İSTEDİGİNİZ EKRANIN ISMINI BURAYA YAZARAK REACT-NATIVE RUN-IOS KOMUTU İLE IOS UZERINDE CALISTIRIN
  <Listeleme2/>   //AYNI ANDA SADECE 1 EKRANI SIMULATOR UZERINDE CALISTIRABILIRSINIZ
  // ANDROID UYGULAMASI YAPILMADI VE FONTLARI EKLEMEDE SORUNLARLA KARSILASTIGIM ICIN EN YAKIN FONTLARI SECMEYE CALISTIM
  );
}

