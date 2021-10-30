import { faIcons } from "@fortawesome/free-solid-svg-icons";
import React, { useState,Component } from "react";
const image_1= require("../../images/1.png")
const image_2= require("../assets/logo.png")
const image_3= require("../assets/iphone.png")
const image_4= require("../assets/checklist.png")
const image_5= require("../assets/arkadaslar.png")
const image_6= require("../assets/magaza.png")
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

const Home= () => {
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
            
            <Text style={{color:"white",textAlign:'left',marginLeft:10}}>
            Buse DEMİR 
            </Text>
            <Text style={{color:"white",paddingTop:23,marginLeft:-80}}>
                12 LVL
                 </Text>
            <Progress.Bar color="#210e82" style={{marginLeft:-43,height:10,marginTop:50}}progress={0.4} width={100} height={10} />
            <Button title="5432"  titleStyle={{color: "white",fontSize: 16 }} buttonStyle={{backgroundColor:"black",borderBottomLeftRadius:10}}/>
            <Icons1 name="diamond" size={14} color="yellow" style={{borderTopRightRadius:10,paddingTop:7,paddingRight:2,borderBottomLeftRadius:15,height:37,borderWidth: 2,marginTop:0,backgroundColor:"black",borderRadius:5,borderColor:"black"}} />
            <Icon name="notifications" size={25} color="gray" style={{borderTopRightRadius:100,marginLeft:10,borderBottomLeftRadius:100,height:30,borderWidth: 2,backgroundColor:"#10111f",borderRadius:3,borderColor:"#112042"}} />
            <Icons name="comments" size={25} color="gray" style={{marginLeft:10,borderTopRightRadius:100,borderBottomLeftRadius:100,height:30,borderWidth: 2,backgroundColor:"#10111f",borderRadius:3,borderColor:"#112042"}} />
            <FeatherIcons name="settings" size={25} color="gray" style={{marginLeft:10,borderTopRightRadius:100,borderBottomLeftRadius:100,height:30,borderWidth: 2,backgroundColor:"#10111f",borderRadius:3,borderColor:"#112042"}}/>
            </View>    
        )
    }
    function renderMiddle(){
        return(
        <View styles={styles.middle}>    
            <Image source={image_2}
            style={{width:350,height:125,alignSelf:'center',borderColor:'white'}}/>
            <Image source={image_3}
            style={{width:150,height:225,alignSelf:'center'}}/>
            <Button title="HAFTANIN ODULU - IPHONE 11"  titleStyle={{color: "white",fontSize: 16,fontStyle:"italic" }} buttonStyle={{marginTop:25,borderRadius:15,backgroundColor:"#6a00ff",width:300,height:50,alignSelf:"center"}}/>     
            <View style={{flexDirection:"row"}}>
                <View >
                <Button title="RASTGELE YARIŞ" titleStyle={{color: "white",fontSize: 16,fontStyle:"italic" }} buttonStyle={{marginTop:20,marginLeft:45,borderTopLeftRadius:40,borderTopRightRadius:70,borderBottomLeftRadius:10,borderBottomRightRadius:15,backgroundColor:"black",borderColor:"#6a00ff",width:150,height:50,alignItems:"center",alignContent:"center"}}/>
                </View>
                <View>
                <Button title="YARIŞMA SEÇ"  titleStyle={{color: "white",fontSize: 16,fontStyle:"italic" }} buttonStyle={{marginTop:20,marginRight:30,marginLeft:5,borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomLeftRadius:40,borderBottomRightRadius:45,borderColor:"#6a00ff",backgroundColor:"black",width:150,height:50,alignItems:"center",alignContent:"center"}}/>        
                </View>
            </View>
        <View style={{marginTop:50}}>
            <ScrollView scrollEnabled={true} showsButtons={true} horizontal={true} >
                <View>
                    <TouchableOpacity >
                    <Image source={image_6} style={{marginLeft:5,borderWidth:1,borderRadius:12,borderColor:"yellow",width:100,height:100}} />
                    <Text style={{marginLeft:23,fontStyle:"italic",fontSize:16,color:"white"}}>
                        MAGAZA
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity >
                    <Image source={image_4} style={{width:100,marginLeft:20,height:100,borderWidth:1,borderRadius:12,borderColor:"yellow"}} />
                    <Text style={{marginLeft:30,fontStyle:"italic",fontSize:16,color:"white"}}>
                        GOREVLER
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity >
                    <Image source={image_5} style={{marginLeft:20,marginRight:10,width:100,height:100,borderWidth:1,borderRadius:12,borderColor:"yellow"}} />
                    <Text style={{marginLeft:22,fontStyle:"italic",fontSize:16,color:"white"}}>
                        ARKADASLAR
                    </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
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
        height:800,
    },
})
export default Home;