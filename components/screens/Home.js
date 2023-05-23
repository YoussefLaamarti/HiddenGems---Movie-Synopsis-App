import {  StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const Home = ({ navigation}) => {


    const LandingPage = () => {
        navigation.navigate ('LandingPage');
      }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MovieOrSkip</Text>
      <Text style={styles.littletitle}>Find your next favorite movie with ease.</Text>
      <TouchableOpacity style={styles.button} onPress={LandingPage}>
    <Text style={{ fontSize:17, fontFamily: 'Satisfy',color:'#FFE895'}}>Getting Started</Text>
  </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
        alignItems:'center',
      },
      title:{
        marginTop:170,
        fontSize:60, 
        fontFamily:'Satisfy',
        color:'#FFE895',
      },
      littletitle:{
        fontSize:20, 
        fontFamily:'Satisfy',
        color:'#797676',
      },
      button:{
        width: 175,
         height: 50, 
         backgroundColor: '#282A2C' ,
          borderRadius:40, 
          justifyContent: 'center',
           alignItems: 'center',
           marginTop:200,
      }


})