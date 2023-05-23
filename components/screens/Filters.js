import { StyleSheet, Image, Text, View , TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import React from 'react'

const Filters = ({ navigation}) => {
  const goback = () => {
    navigation.navigate ('LandingPage');
  }

  const ActionResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'28'
    });}
  const AdventureResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'12'
    });}
  const AnimationResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'16'
    });}
  const ComedyResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'35'
    });}
  const CrimeResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'80'
    });}
  const DocumentaryResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'99'
    });}
  const DramaResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'18'
    });}
  const FamilyResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'10751'
    });}
   const FantasyResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'14'
    });}
  const HistoryResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'36'
    });}
  const HorrorResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'27'
    });}
  const MusicResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'10402'
    });}
  const MysteryResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'9648'
    });}
  const RomanceResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'10749'
    });}
  const ScifiResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'878'
    });}
  const TvMovieResult = () => {
    navigation.navigate ('ResultPage' , {
      id:'10770'
    });}
    const ThrillerResult = () => {
      navigation.navigate ('ResultPage' , {
        id:'53'
      });}
    const WarResult = () => {
      navigation.navigate ('ResultPage' , {
        id:'10752'
      });}
    const WesternResult = () => {
      navigation.navigate ('ResultPage' , {
        id:'37'
      });}

  const back = require('../../assets/back.png');




  return (
    <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.section}>
          <TouchableOpacity onPress={goback}><Image source={back} style={styles.backbutton}></Image></TouchableOpacity>
            <Text style={styles.allgenres}> All Genres</Text>
          </View>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section} onPress={ActionResult}><Text style={styles.onegenre}>Action</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={AdventureResult}><Text style={styles.onegenre}>Adventure</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={AnimationResult}><Text style={styles.onegenre}>Animation</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={ComedyResult}><Text style={styles.onegenre}>Comedy</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={CrimeResult}><Text style={styles.onegenre}>Crime</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={DocumentaryResult}><Text style={styles.onegenre}>Documentary</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={DramaResult}><Text style={styles.onegenre}>Drama</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={FamilyResult}><Text style={styles.onegenre}>Family</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={FantasyResult}><Text style={styles.onegenre}>Fantasy</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={HistoryResult}><Text style={styles.onegenre}>History</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={HorrorResult}><Text style={styles.onegenre}>Horror</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={MusicResult}><Text style={styles.onegenre}>Music</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section} onPress={MysteryResult} ><Text style={styles.onegenre}>Mystery</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section}  onPress={RomanceResult}><Text style={styles.onegenre}>Romance</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section} onPress={ScifiResult}><Text style={styles.onegenre}>Sci-fi</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section} onPress={TvMovieResult}><Text style={styles.onegenre}>Tv Movie</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section} onPress={ThrillerResult}><Text style={styles.onegenre}>Thriller</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section} onPress={WarResult}><Text style={styles.onegenre}>War</Text></TouchableOpacity>
          <View style={styles.separator}/>
          <TouchableOpacity style={styles.section} onPress={WesternResult}><Text style={styles.onegenre}>Western</Text></TouchableOpacity>
          
      </ScrollView>
    </View>
  )
}

export default Filters

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