import { StyleSheet, Image, Text, View , TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import React from 'react'

const Years = ({ navigation}) => {
    const back = require('../../assets/back.png');
    const goback = () => {
        navigation.navigate ('ResultPage');
      }
      const y2020 = () => {
        navigation.navigate ('ResultPage' , {
            year:'primary_release_year=2020'
          });
      }
  return (
    <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.section}>
          <TouchableOpacity onPress={goback} ><Image source={back} style={styles.backbutton}></Image></TouchableOpacity>
            <Text style={styles.allgenres}> Filter by Year</Text>
          </View>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section} ><Text style={styles.onegenre}>2020</Text></TouchableOpacity>
          <View style={styles.separator}/>

          
      </ScrollView>
    </View>
  )
}

export default Years


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
     section:{
      height:50,
      width:'100%',
      backgroundColor:'#151718',
      flexDirection:'row',
     
     },
     backbutton:{
      height:40,
      width:40,
     
     },
     allgenres:{
      fontSize:25,
      fontFamily:'Raleway-Bold',
      color:'#FFE895',
      marginLeft:50,
    },
    separator:{
    height:2,
    width:'100%',
    backgroundColor:'#282A2C',
    },
    onegenre:{
    color:'#AEAEAE',
    fontSize:20,
    fontFamily:'Raleway-Bold',
    textAlignVertical:'center',
    }
  })