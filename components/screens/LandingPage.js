import { StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import 'expo-dev-client'
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2731062598987545/2734070392';
const LandingPage = ({ navigation}) => {

    const Mystery = require('../../assets/Mystery.png');
    const Horror = require('../../assets/horror.png');
    const Action = require('../../assets/gun.png');
    const Romance = require('../../assets/romance.png');



    const Viewmore = () => {
        navigation.navigate ('Filters');
      }
   
      const MysteryResult = () => {
        navigation.navigate ('ResultPage' , {
          id:'9648'
        });}
    
        const RomanceResult = () => {
        navigation.navigate ('ResultPage' , {
          id:'10749'
        });}
    
        const ActionResult = () => {
        navigation.navigate ('ResultPage' , {
          id:'28'
        });}
   
        const HorrorResult = () => {
        navigation.navigate ('ResultPage' , {
          id:'27'
        });}
       
     
         


  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text style={styles.title}>MovieOrSkip</Text>
            <Text style={styles.text}>Introducing our<Text style={styles.textyellow}> exciting</Text> new app that lets you <Text style={styles.textyellow}>generate</Text> random movie <Text style={styles.textyellow}>synopses</Text> and decide whether to <Text style={styles.textyellow}>reveal</Text> the title or <Text style={styles.textyellow}>skip</Text> to the next one. With our app, you can <Text style={styles.textyellow}>explore</Text>  <Text style={styles.textyellow}>wide range</Text> of movie <Text style={styles.textyellow}>genres</Text> and plots, from action-packed <Text style={styles.textyellow}>adventures</Text> to heartwarming romances, all with just a few <Text style={styles.textyellow}>taps</Text> on your device.</Text>
            <Text style={styles.minititle}>Genres</Text>
            <View style={styles.genreswrapper}>
                <TouchableOpacity style={styles.genreblack} onPress={MysteryResult}><Image source={Mystery} style={styles.img}></Image><Text style={styles.genretext}>Mystery</Text></TouchableOpacity>
                <TouchableOpacity style={styles.genreyellow} onPress={RomanceResult}><Image source={Romance} style={styles.img}></Image><Text style={styles.genretextblack}>Romance</Text></TouchableOpacity>
                <TouchableOpacity style={styles.genreyellow} onPress={ActionResult}><Image source={Action} style={styles.img}></Image><Text style={styles.genretextblack}>Action</Text></TouchableOpacity>
                <TouchableOpacity style={styles.genreblack} onPress={HorrorResult}><Image source={Horror} style={styles.img}></Image><Text style={styles.genretext}>Horror</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.viewmore} onPress={Viewmore}><Text style={styles.viewmoretext}>View more</Text></TouchableOpacity>
        </View>

        <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151718',
        alignItems:'center',
        justifyContent:'center',
        
      },
      wrapper:{
       width:320,
        height:'90%',
    backgroundColor:'#151718',
    
      },
      title:{
        fontSize:40, 
        fontFamily:'Satisfy',
        color:'#FFE895',
      },
      text:{
        fontSize:15, 
        fontFamily:'Raleway-Bold',
        color:'#FFEEEE',
        marginTop:15,
      },
      textyellow:{
        fontSize:15, 
        fontFamily:'Raleway-Bold',
        color:'#FFE895',
        marginTop:15,
      },
      minititle:{
        fontSize:30, 
        fontFamily:'Satisfy',
        color:'#FFE895',
        marginTop:15,
      },
      genreswrapper:{
        marginTop:15,
        width:'100%',
        height:260,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'#151718',
        alignItems:'center',
      },
      genreblack:{
      width:150,
      height:117,
      backgroundColor:'#151718',
      borderRadius:15,
      margin:5,
      borderColor: '#FFE895',
      borderWidth: 2,
      alignItems:'center',
      justifyContent:'center',
      },
      genreyellow:{
        width:150,
        height:117,
        backgroundColor:'#FFE895',
        borderRadius:15,
        margin:5,
        alignItems:'center',
        justifyContent:'center',

      },
      img:{
        height:60,
        width:60,
        marginBottom:-10,
      },
      genretext:{
        fontSize:15, 
        fontFamily:'Raleway-Bold',
        color:'#C5B374',
        marginTop:15,
      },
      genretextblack:{
        fontSize:15, 
        fontFamily:'Raleway-Black',
        color:'#151718',
        marginTop:15, 
      },
      viewmore:{
      width:100,
      height:50,
      backgroundColor:'#151718',
      borderRadius:15,
      margin:5,
      borderColor: '#FFE895',
      borderWidth: 2,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:220,
      },
      viewmoretext:{
        color:'#FFE895',
        fontFamily:'Satisfy',
        fontSize:18,
      }

    })