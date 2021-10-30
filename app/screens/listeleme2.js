import { faIcons } from "@fortawesome/free-solid-svg-icons";
import React, { useState,Component } from "react";
import { Animated,TouchableHighlight,Switch } from 'react-native';
import {ImageBackground,Icon,TouchableOpacity,SafeAreaView,Image,Text,TextInput,Button,StyleSheet,View} from "react-native"
import { color } from "react-native-elements/dist/helpers";
const image_1= require("../assets/backbutton.png")
const image_2= require("../assets/basari.png")
const image_3= require("../assets/star.png")
const image_4= require("../assets/kupa.png")
const image_5= require("../../images/1.png")
const image_7= require("../../app/assets/turkey.png")
const image_6= require("../assets/usa.png")
const image_8= require("../assets/1.png")
const image_9= require("../assets/2.png")
const image_10= require("../assets/3.png")
const image_11= require("../assets/4.png")
const image_12= require("../assets/5.png")
import ProgressBar from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';

const Listeleme2= () => {
    function renderHeader(){
        return(
            <View >
                <View style={{height:100}}>
                <TouchableOpacity>
                    <Image source={image_1}
                    style={{
                            height:60,
                            width:60,
                            marginLeft:15
                    }}>
                    </Image>
                </TouchableOpacity>
                </View>
                <Text style={{fontFamily:"Spantaran",fontSize:30,fontStyle:"italic",color:"#8270c4",alignSelf:"center"}}>
                        SIRALAMA
                    </Text>
                <View flexDirection="row">
            
                        <Image source={image_2}
                            style={{
                                    height:60,
                                    width:60,
                                    marginLeft:55,
                                    marginTop:10
                            }}>
                        </Image>
                       
                        
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"#6e6aff",height:20,marginLeft:55,width:60,alignItems:"center",paddingBottom:2}}>
                            <Text style={{fontStyle:"italic",fontSize:13,color:"white",textShadowRadius:5,textShadowColor:"#e7c2ff"}}> GÜNLÜK </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:83,marginLeft:50,borderRadius:5,width:65,marginTop:-60,alignItems:"center",paddingBottom:2,borderRadius:2,borderColor:"#6e6aff",borderWidth:1}}>
                    <Image source={image_3}
                            style={{
                                    height:60,
                                    width:60,
                                    marginLeft:2,
                                    marginTop:2,
                                    marginBottom:-15
                            }}>
                        </Image>
                            <Text style={{fontStyle:"italic",fontSize:13,color:"white",textShadowRadius:5,textShadowColor:"#e7c2ff",marginBottom:10}}> HAFTALIK </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:83,marginLeft:50,borderRadius:5,width:70,marginTop:-60,alignItems:"center",paddingBottom:2,borderRadius:2,borderColor:"#6e6aff",borderWidth:1}}>
                    <Image source={image_4}
                            style={{
                                    height:60,
                                    width:60,
                                    marginLeft:3,
                                    marginTop:3,
                                    marginBottom:3
                            }}>
                        </Image>
                            <Text style={{fontStyle:"italic",fontSize:9,color:"white",textShadowRadius:5,textShadowColor:"#e7c2ff",marginBottom:10}}> KAZANANLAR </Text>
                    </TouchableOpacity>
                    
                </View>
                    
                    
                <TouchableOpacity style={{flexDirection:"row",alignSelf:"center",marginTop:10,borderRadius:15,backgroundColor:"#706cfc"}}>
                        <TouchableOpacity underlayColor="black">
                        <View style={{borderWidth:1,marginLeft:5,width:60,height:30,borderRadius:20,marginTop:4,borderColor:"black",backgroundColor:"black"}} >
                        <Text style={{color:"white",height:30,width:55,marginTop:3,alignItems:"center",fontStyle:"italic",fontSize:15,paddingTop:2,paddingLeft:6}}>
                            YEREL
                        </Text>
                            </View>
                        </TouchableOpacity>
                          
                         <Button title="GLOBAL" color="#b1b4ba" titleStyle={{color:"white"}}/>
                    </TouchableOpacity>
                <View style={{width:20,height:20,flexDirection:"column"}}>
                    <Image source={image_8}
                    style={{
                        width:30,
                        height:40,
                        marginBottom:-40,
                        marginTop:40,
                        marginLeft:5,
                        flexDirection:"column",
                        borderWidth:1,
                        borderColor:"#6e6aff",
                        borderRadius:10,
                        
        
                    }} />
                </View>
            
            <View flexDirection="row" style={{marginLeft:40,width:350,borderRadius:5,borderColor:"#6e6aff",borderWidth:3,marginTop:5}} >
                
                <Image
                source={image_5}
                style={{
                    width:65,
                    height:65,
                    marginRight:20,
                    marginTop:10,
                    marginLeft:20,
                    marginBottom:5
                }}
                />
                <Text style={{color:"white",textAlign:'left',fontSize:12,marginTop:10}}>
            Buse DEMİR 
            </Text>
            <Text style={{color:"white",marginTop:28,marginLeft:-70,fontSize:12}}>
                12 LVL
                 </Text>
            <Text style={{paddingLeft:30,color:"white",marginTop:25,fontSize:13,color:"#6e6aff"}}>
                TOPLAM PUAN: 2324
            </Text>
            <Image
            source={image_7}
            style={{
                width:30,
                height:30,
                marginTop:20,
                marginLeft:8
            }}
            />
                 <Progress.Bar color="#210e82" style={{marginLeft:-237,marginTop:50,height:10}}progress={0.4} width={50} height={10} />
            </View>

            <View style={{width:20,height:20,flexDirection:"column"}}>
                    <Image source={image_9}
                    style={{
                        width:30,
                        height:40,
                        marginBottom:-40,
                        marginTop:40,
                        marginLeft:5,
                        flexDirection:"column",
                        borderWidth:1,
                        borderColor:"#6e6aff",
                        borderRadius:10,
                        alignContent:"center"
                    }} />
                </View>
            
            <View flexDirection="row" style={{marginLeft:40,width:350,borderRadius:5,borderColor:"#6e6aff",borderWidth:3,marginTop:5}} >
                
                <Image
                source={image_5}
                style={{
                    width:65,
                    height:65,
                    marginRight:20,
                    marginTop:10,
                    marginLeft:20,
                    marginBottom:5
                }}
                />
                <Text style={{color:"white",textAlign:'left',fontSize:12,marginTop:10}}>
            Buse DEMİR 
            </Text>
            <Text style={{color:"white",marginTop:28,marginLeft:-70,fontSize:12}}>
                12 LVL
                 </Text>
            <Text style={{paddingLeft:30,color:"white",marginTop:25,fontSize:13,color:"#6e6aff"}}>
                TOPLAM PUAN: 2324
            </Text>
            <Image
            source={image_6}
            style={{
                width:30,
                height:30,
                marginTop:20,
                marginLeft:8
            }}
            />
                 <Progress.Bar color="#210e82" style={{marginLeft:-237,marginTop:50,height:10}}progress={0.4} width={50} height={10} />
            
                 </View>
                 <View style={{width:20,height:20,flexDirection:"column"}}>
                    <Image source={image_10}
                    style={{
                        width:30,
                        height:40,
                        marginBottom:-40,
                        marginTop:40,
                        marginLeft:5,
                        flexDirection:"column",
                        borderWidth:1,
                        borderColor:"#6e6aff",
                        borderRadius:10,
                        
        
                    }} />
                </View>
            
            <View flexDirection="row" style={{marginLeft:40,width:350,borderRadius:5,borderColor:"#6e6aff",borderWidth:3,marginTop:5}} >
                
                <Image
                source={image_5}
                style={{
                    width:65,
                    height:65,
                    marginRight:20,
                    marginTop:10,
                    marginLeft:20,
                    marginBottom:5
                }}
                />
                <Text style={{color:"white",textAlign:'left',fontSize:12,marginTop:10}}>
            Buse DEMİR 
            </Text>
            <Text style={{color:"white",marginTop:28,marginLeft:-70,fontSize:12}}>
                12 LVL
                 </Text>
            <Text style={{paddingLeft:30,color:"white",marginTop:25,fontSize:13,color:"#6e6aff"}}>
                TOPLAM PUAN: 2324
            </Text>
            <Image
            source={image_7}
            style={{
                width:30,
                height:30,
                marginTop:20,
                marginLeft:8
            }}
            />
                 <Progress.Bar color="#210e82" style={{marginLeft:-237,marginTop:50,height:10}}progress={0.4} width={50} height={10} />
            </View>
            
            




            <View style={{width:20,height:20,flexDirection:"column"}}>
                    <Image source={image_11}
                    style={{
                        width:30,
                        height:40,
                        marginBottom:-40,
                        marginTop:40,
                        marginLeft:7,
                        flexDirection:"column",
                        borderWidth:1,
                        borderColor:"#6e6aff",
                        borderRadius:10,
                        
        
                    }} />
                </View>
            
            <View flexDirection="row" style={{marginLeft:40,width:350,borderRadius:5,borderColor:"#6e6aff",borderWidth:3,marginTop:5}} >
                
                <Image
                source={image_5}
                style={{
                    width:40,
                    height:40,
                    marginRight:20,
                    marginTop:10,
                    marginLeft:20,
                    marginBottom:5
                }}
                />
                <Text style={{color:"white",textAlign:'left',fontSize:12,marginTop:20}}>
            Buse DEMİR 
            </Text>
            
            <Text style={{paddingLeft:25,color:"white",marginTop:20,fontSize:13,color:"#6e6aff"}}>
                TOPLAM PUAN: 567
            </Text>
            <Image
            source={image_7}
            style={{
                width:30,
                height:20,
                marginTop:20,
                marginLeft:12
            }}
            />
            </View>
                

            <View style={{width:20,height:20,flexDirection:"column"}}>
                    <Image source={image_12}
                    style={{
                        width:30,
                        height:40,
                        marginBottom:-40,
                        marginTop:35,
                        marginLeft:7,
                        flexDirection:"column",
                        borderWidth:1,
                        borderColor:"#6e6aff",
                        borderRadius:10,
                        
        
                    }} />
                </View>
            
            <View flexDirection="row" style={{marginLeft:40,width:350,borderRadius:5,borderColor:"#6e6aff",borderWidth:3,marginTop:1}} >
                
                <Image
                source={image_5}
                style={{
                    width:40,
                    height:40,
                    marginRight:20,
                    marginTop:10,
                    marginLeft:20,
                    marginBottom:5
                }}
                />
                <Text style={{color:"white",textAlign:'left',fontSize:12,marginTop:20}}>
            Buse DEMİR 
            </Text>
            
            <Text style={{paddingLeft:25,color:"white",marginTop:20,fontSize:13,color:"#6e6aff"}}>
                TOPLAM PUAN: 567
            </Text>
            <Image
            source={image_7}
            style={{
                width:30,
                height:20,
                marginTop:20,
                marginLeft:12
            }}
            />
            </View>
                    
                    
                    
                           
                
            </View>
            
        )
    }
   function renderMiddle(){
        return(
            <View>
               

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
                //renderMiddle() 
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

export default Listeleme2;