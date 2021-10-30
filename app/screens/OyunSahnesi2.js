import { faIcons } from "@fortawesome/free-solid-svg-icons";
import React, { useState,Component } from "react";
import { Animated,TouchableHighlight } from 'react-native';
const image_1= require("../assets/busedemir.png")
const image_2= require("../assets/mustafaoz.png")
const image_3= require("../assets/footballers.png")
const colours = ['red', 'orange', 'yellow', 'blue', 'green', 'indigo', 'violet'];

const getColour = () => colours[Math.floor(Math.random() * colours.length)];

const Button1 = props => {
  const [colour, setColour] = useState(getColour());
  const handleClick = () => { setColour(getColour()); }

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colour }]} onPress={handleClick}></TouchableOpacity>
  );
}
const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    return `${minutes}:${seconds}`
  }
const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
    onComplete={() => {
        return [false, 1500] // repeat animation in 1.5 seconds
      }}
      isPlaying={true}
      duration={10}
      initialRemainingTime={10}
      size={60}
      colors="#fffb00"
      trailColor="#d9d9d9"

    >
         {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor, fontSize: 20 }}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
    
  )
import {Alert,AppRegistry} from 'react-native';
import {Fonts} from "..app/assets/fonts"
import {Path} from 'react-native-svg' 
import ProgressBar from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome5'
import FeatherIcons from 'react-native-vector-icons/Feather'
import Icons1 from 'react-native-vector-icons/FontAwesome'
import Icons2 from 'react-native-vector-icons/Octicons'
import {Input,Button} from 'react-native-elements';
import Swiper from 'react-native-swiper'
import {ScrollView} from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import{
    SafeAreaView,
    View,
    TouchableOpacity,
    Image,
    Flatlist,
    StyleSheet,
    ImageBackground,
    Text
} from "react-native"
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";


const OyunSahnesi2= () => {
    function renderHeader(){
        return(
            <View style={styles.header}>
            <Image
            source={image_1}
            style={{
                width:65,
                height:65,
            }}
            />
            <Text style={{color:"white",textAlign:'left',marginLeft:7,marginTop:10}}>
            Buse Demir 
            </Text>
            <Text style={{color:"#6a00ff",paddingTop:23,marginLeft:-75,marginTop:5}}>
                423
            </Text>
                    <View style={{marginLeft:60}}>
                    <UrgeWithPleasureComponent />
                    </View>
            <View style={{flexDirection:"column"}}>
            <Text style={{color:"white",marginTop:10,paddingLeft:20}}>
           Mustafa Öz
            </Text>
            <Text style={{color:"gray",marginTop:1,paddingLeft:70}}>
                132
            </Text>
            </View>

            <Image
            source={image_2}
            style={{
                width:65,
                height:65
            }}
            />
            </View>    
        )
    }
    function renderMiddle(){
        return(
            <View>
                <TouchableOpacity>
                    <Image source={image_3} style={{borderRadius:40,width:250,marginTop:8,height:250,alignSelf:"center"}}/>
                </TouchableOpacity>
                <Text style={{borderRadius:10,borderColor:"#8270c4",borderWidth:1,borderTopLeftRadius:50,fontSize:17,fontWeight:"700",backgroundColor:"black",borderTopRightRadius:50,width:120,height:40,marginTop:-15,marginBottom:7,paddingTop:7,alignSelf:"center",textAlign:"center",color:"#8270c4"}}>
                    9.SORU
                </Text>
                <View style={{flexDirection:"column"}}>
                    <Text style={{color:"white",textShadowRadius:5,textShadowColor:"#e7c2ff",fontSize:25,paddingLeft:40,paddingTop:10}}>
                        Can you name the first ever
                    </Text>
                    <Text style={{textShadowRadius:5,textShadowColor:"#e7c2ff",color:"white",fontSize:25,paddingLeft:75,paddingTop:5}}>
                        Premier Leauge Team
                    </Text>
                    <Text style={{color:"white",textShadowRadius:5,textShadowColor:"#e7c2ff",fontSize:25,paddingLeft:125,paddingTop:5}}>
                        of the Year?
                    </Text>
                </View>
                <View style={{flexDirection:"row"}}>
                        <Button title="x2"   titleStyle={{fontStyle:"italic",textShadowRadius:5,textShadowColor:"#e7c2ff"}} buttonStyle={{backgroundColor:"#6e18f0",borderRadius:16,height:50}} color="#e7c2ff" style={{width:80,height:55,marginLeft:65,marginTop:10,backgroundColor:"#e7c2ff",alignSelf:"stretch",borderRadius:20,borderWidth:3}}/>
                        <Button title="PASS" titleStyle={{fontStyle:"italic",textShadowRadius:5,textShadowColor:"#e7c2ff"}} buttonStyle={{shadowColor:"#e7c2ff",shadowRadius:5,backgroundColor:"#6e18f0",borderRadius:16,height:50}} color="#e7c2ff" style={{width:80,height:55,marginLeft:10,backgroundColor:"#e7c2ff",marginTop:10,alignSelf:"stretch",borderRadius:20,borderWidth:3}}/>
                        <Button title="1/2"  titleStyle={{fontStyle:"italic",textShadowRadius:5,textShadowColor:"#e7c2ff"}} buttonStyle={{backgroundColor:"#6e18f0",borderRadius:16,height:50}}  style={{width:80,height:55,marginLeft:10,marginTop:10,backgroundColor:"#e7c2ff",alignSelf:"stretch",borderRadius:20,borderWidth:3}}/>
                </View>
            <View style={{flexDirection:"column"}}>
                        <Button title="Goalkeeper"  titleStyle={{textShadowRadius:5,textShadowColor:"#e7c2ff"}} buttonStyle={{width:300,backgroundColor:"#6e18f0",borderRadius:16,height:50}} color="#e7c2ff" style={{width:80,height:55,marginLeft:65,marginTop:10,backgroundColor:"#e7c2ff",alignSelf:"stretch",borderRadius:20,marginLeft:40,borderWidth:3}}/>
                        <Button title="Goalkeeper"  titleStyle={{fontStyle:"italic",textShadowRadius:5,textShadowColor:"#e7c2ff"}} buttonStyle={{width:300,shadowColor:"#e7c2ff",shadowRadius:5,backgroundColor:"#6e18f0",borderRadius:16,height:50}} color="#e7c2ff" style={{width:80,height:55,marginLeft:10,marginLeft:40,backgroundColor:"#e7c2ff",marginTop:5,alignSelf:"stretch",borderRadius:20,borderWidth:3}}/>
                        <Button title="Goalkeeper"  titleStyle={{textShadowRadius:5,textShadowColor:"#e7c2ff"}} buttonStyle={{width:300,backgroundColor:"green",borderRadius:16,height:50}}  style={{width:80,height:55,marginLeft:40,marginTop:5,backgroundColor:"#e7c2ff",alignSelf:"stretch",borderRadius:20,borderWidth:3}}/>
                        <Button title="Goalkeeper"  titleStyle={{fontStyle:"italic",textShadowRadius:5,textShadowColor:"#e7c2ff"}} buttonStyle={{width:300,backgroundColor:"#6e18f0",borderRadius:16,height:50}}  style={{width:80,height:55,marginLeft:10,marginTop:5,backgroundColor:"#e7c2ff",marginBottom:10,marginLeft:40,alignSelf:"stretch",borderRadius:20,borderWidth:3}}/>
                        
                </View>
            </View>
        )
    }

 return( 
         <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View >
        <SafeAreaView >
            {
                renderHeader()
            }
        </SafeAreaView>
        </View>
        <View>
            {
                renderMiddle() 
            }
        </View>
        </ImageBackground>
        )
}
const styles= StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 1,
      },
      background:{
        flex:1,
    },
    header:{
        flexDirection: 'row',
        height: 70
    },

    middle:{
        flexDirection: 'row',
        height:1000,
    },
})
export default OyunSahnesi2;