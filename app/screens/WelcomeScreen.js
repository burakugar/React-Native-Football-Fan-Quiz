import React from 'react';
import {ImageBackground,TouchableOpacity,SafeAreaView,Image,Text,TextInput,Button,StyleSheet,View} from "react-native"
import { color } from 'react-native-elements/dist/helpers';
import { SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FontAwasome from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}Giriş Yap</Text>
    </TouchableOpacity>
  );
  const Kullaniciadi = ({ onPress, title }) => (
    <TextInput onPress={onPress} style={styles.appButtonContainer1}
    >
      <Text style={styles.kullaniciadi}>{title}kullanıcı adı</Text>
    </TextInput>
  );
 
function WelcomeScreen(props) {
    const [text, onChangeText] = React.useState("kullanıcı adı");
    const [text1, setText] = React.useState('');
    const [text2, setText1] = React.useState('');
    const [text3, setText2] = React.useState('');
    let numOfLinesCompany = 0;
    return (
        
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View style={styles.screenContainer}>
        <Image style={styles.tinyLogo}
        source={require('../assets/logo.png')}>
       </Image>
        
      
       <Text style={styles.girisyapyazisi} color="white"  >
           GİRİŞ YAP 
       </Text>

       <Text style={styles.tanitim} color="white"  >
           Giriş yaparak sıralamada yer alın ve birçok ödülün sahibi olun
       </Text>
      
    
       <SocialIcon
            style={styles.facebook}
            type="facebook"
        />
        
        
        <SocialIcon
            style={styles.twitter}
            type="twitter"
        />  
        <SocialIcon
            style={styles.google}
            type="google-plus-official"
          />
       <TextInput
        style={styles.kullaniciadi}
        placeholder="Kullanıcı Adı"
        placeholderTextColor="#8270c4"
        onChangeText={text1 => setText(text1)}
        defaultValue={text1}
        alignSelf="center"
        color="turquoise"
        
        
      />
      <TextInput
        style={styles.sifre}
        placeholder="Şifre"
        placeholderTextColor="#8270c4"
        onChangeText1={text2 => setText(text2)}
        defaultValue={text2}
        secureTextEntry={true} 
        alignSelf="center"
        color="turquoise"
        
      />
     <TextInput
        
        style={styles.sifretekrari}
        placeholder="Şifre Tekrarı"
        placeholderTextColor="#8270c4"
        secureTextEntry={true} 
        onChangeText2={text3 => setText(text3)}
        defaultValue={text3}
        alignSelf="center"
        color="turquoise"
        
      />
    
       
       <AppButton>
      </AppButton>
   
  
    </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 3,
        padding: 10,
        color:"white"
      },
    girisyapyazisi: {
        fontStyle: 'italic',
        fontSize:30,
        
        alignSelf:"center",
        color:"#7645f5",
        marginBottom:20
        },
    tanitim:{
        fontsize:20,
        color:"#7645f5",
        marginBottom: 30,
        fontStyle: 'italic',
        fontFamily:"Arial"
    },

    background:{
            flex:1,
            justifyContent:"center",
        },
    facebook:{
        alignItems:"center",    
        width: 90,
        height: 60,
        backgroundColor: "#4278db"
    },
    twitter:{
        alignItems:"center",    
        width: 90,
        marginLeft: 130,
        marginTop: -66,
        height: 60,
        backgroundColor: "#33c7e8"
    },
    google:{
        alignItems:"center",    
        width: 90,
        marginLeft: 250,
        marginTop: -66,
        height: 60,
        backgroundColor: "#ff4f42"
    },
    tinyLogo: {
        width: 350,
        height: 350,
        resizeMode:'contain',
        alignSelf:"center",
        marginTop:-100,
        marginBottom:-100
      },
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 16
      },
      appButtonContainer: {
        elevation: 4,
        backgroundColor: "#7645f5",
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 3,
        marginTop:50,
        alignSelf:"center",
        width: 200,
        height: 50
      },
      appButtonContainer1: {
        elevation: 4,
        backgroundColor: "#0f1012",
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 3,
        marginTop:0,
        alignSelf:"center",
        width: 200,
        height: 50
      },
      appButtonText: {
        fontFamily:"Arial",
        fontSize: 19,
        color: "#e5e1ed",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      kullaniciadi: {
        fontFamily:"Arial",
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "lowercase",
        borderRadius:9,
        borderWidth:4,
        borderColor:"blue",
        textAlign:'center',
        height:40,
        width:300,
        marginTop:50,
        marginBottom:50

      },
      sifre: {
        fontFamily:"Arial",
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "lowercase",
        borderRadius:9,
        borderWidth:4,
        borderColor:"blue",
        textAlign:'center',
        height:40,
        width:300,
        
      },
      sifretekrari: {
        fontFamily:"Arial",
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "lowercase",
        borderRadius:9,
        borderWidth:4,
        borderColor:"blue",
        textAlign:'center',
        height:40,
        width:300,
        marginTop:50
      }
})

export default WelcomeScreen;
