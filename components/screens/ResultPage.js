import { StyleSheet, Text, View , TouchableOpacity , Image, Animated} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { useState , useEffect,useRef} from 'react';
import axios from 'axios';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-2731062598987545/1148691839';
const bannerAdUnits = [
  __DEV__ ? TestIds.BANNER : 'ca-app-pub-2731062598987545/5218733121',
  __DEV__ ? TestIds.BANNER : 'ca-app-pub-2731062598987545/5494065290',
  __DEV__ ? TestIds.BANNER : 'ca-app-pub-2731062598987545/7653324771',
  __DEV__ ? TestIds.BANNER : 'ca-app-pub-2731062598987545/5209890619',
  __DEV__ ? TestIds.BANNER : 'ca-app-pub-2731062598987545/8027625645'
];






const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const ResultPage = ({ route,navigation}) => {

    const imageHeight = useRef(new Animated.Value(320)).current;
    const imageWidth = useRef(new Animated.Value(0)).current;
    const titlefontsize = useRef(new Animated.Value(0)).current;
    const genrefontsize = useRef(new Animated.Value(0)).current;
    const [timerheight, settimerheight] = useState(0);
    const [timerwidth, settimerwidth] = useState(0);
    const [updatePage, setUpdatePage] = useState(0);
    const [counter, setCounter] = useState(0);
    const [totalpages, settotalpages] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const imagecontainerheight = useRef(new Animated.Value(0)).current;
    const [BannerCounter, setBannerCounter] = useState(0);
    const { id } = route.params;

    useEffect(() => {
      fetchMovies();
      setUpdatePage(0)
    }, [updatePage])

 
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d92df06e8d58a85b55771aa53444735e&with_genres=${id}&page=${page}&primary_release_date.gte=1995-01-01&primary_release_date.lte=2022-12-31`
      );
      const moviesWithPosterAndTitle = response.data.results.filter(movie => {
        return (movie.poster_path !== null &&
          movie.title !== null &&
          movie.overview !== null &&
          movie.overview.length >= 2);
      });
      setMovie(moviesWithPosterAndTitle);
      settotalmoviesinthisarray(moviesWithPosterAndTitle.length-1)
      if(response.data.total_pages > 500){
      settotalpages(499)}else{
        settotalpages(response.data.total_pages)
      }
    }
    
    //list of movies
    const [Movie, setMovie] = useState([]);
    //random page number
    const [page, setPage] = useState(1);
    //random number
    const [rndmnumber , setrndmnumber] =  useState(() => Math.floor(Math.random() * 11));

    const [totalmoviesinthisarray , settotalmoviesinthisarray] =  useState(1);
    //poster path


    const unlockbutton = () => {
      if (imageHeight._value === 320 && imageWidth._value === 250) {
        Animated.timing(imageHeight, {
          toValue: 320,
          duration: 0,
          useNativeDriver: false,
        }).start(() => {
          settimerheight(0);
        });
        Animated.timing(imageWidth, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start(() => {
          settimerwidth(0);
        });
        Animated.timing(imagecontainerheight, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }).start();
        setTimeout(() => {
          Animated.timing(titlefontsize, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          }).start(() => {
            settimerwidth(18);
          });
        },0);
        setTimeout(() => {
          Animated.timing(genrefontsize, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          }).start(() => {
            settimerwidth(18);
          });
        },0);
      } else {
        setTimeout(() => {
        Animated.timing(imageHeight, {
          toValue: 320,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {
          settimerheight(18);
        });},1000);
        setTimeout(() => {
        Animated.timing(imageWidth, {
          toValue: 250,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {
          settimerwidth(18);
        });
      },1000);
        Animated.timing(imagecontainerheight, {
          toValue: 325,
          duration: 1000,
          useNativeDriver: false,
        }).start();
        setTimeout(() => {
          Animated.timing(titlefontsize, {
            toValue: 30,
            duration: 0,
            useNativeDriver: false,
          }).start(() => {
            settimerwidth(18);
          });
        },2200);
        setTimeout(() => {
          Animated.timing(genrefontsize, {
            toValue: 18,
            duration: 0,
            useNativeDriver: false,
          }).start(() => {
            settimerwidth(18);
          });
        },2400);


      }
    }      

     //go to home 
    const gohome = () => {
        navigation.navigate ('LandingPage');
      }
      const yearsbutton = () => {

        navigation.navigate ('Years');
      }
      // skip button
      const skipbutton = () => {
        
        if(page === 1 ){

          setPage(Math.floor(Math.random() * totalpages))
          setUpdatePage(1)
        }
        if(rndmnumber < totalmoviesinthisarray){
          setrndmnumber(rndmnumber+1)
        }else{
          setrndmnumber(0)
          setPage(Math.floor(Math.random() * totalpages))
          setUpdatePage(1)
          
        }


        if (imageHeight._value === 320 && imageWidth._value === 250) {
          Animated.timing(imageHeight, {
            toValue: 320,
            duration: 0,
            useNativeDriver: false, // Set this to false to use JavaScript animation
          }).start();
          Animated.timing(imageWidth, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false, // Set this to false to use JavaScript animation
          }).start();
          Animated.timing(imagecontainerheight, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false, // Set this to false to use JavaScript animation
          }).start();
          settimerheight(0);
          settimerwidth:(0);

          setTimeout(() => {
            Animated.timing(titlefontsize, {
              toValue: 0,
              duration: 0,
              useNativeDriver: false,
            }).start(() => {
              settimerwidth(18);
            });
          },0);
          setTimeout(() => {
            Animated.timing(genrefontsize, {
              toValue: 0,
              duration: 0,
              useNativeDriver: false,
            }).start(() => {
              settimerwidth(18);
            });
          },0);
        } 
        if(BannerCounter>=4){
          setBannerCounter(0)
        }else{
       
    
        if(counter>=4){

          interstitial.show();
          setCounter(1)
          setBannerCounter(BannerCounter+1)
        }else{
          setCounter(counter+1)
      const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setLoaded(true);
          });
      
          // Start loading the interstitial straight away
          interstitial.load();
      
          // Unsubscribe from events on unmount
          return unsubscribe;
        }  }

      }



    

      const back = require('../../assets/home.png');
      const upgrade =  require('../../assets/upgrade.jpg');
      const hour = require('../../assets/hour.png');
      const skip = require('../../assets/forward.png');
      const unlock = require('../../assets/unlocked-padlock.png')
      const date = require('../../assets/calendrier.png')

  return (
    <View style={styles.container}>
         
         <View style={styles.section}>
             <TouchableOpacity onPress={gohome}><Image source={back} style={styles.backbutton}></Image></TouchableOpacity>
            
             </View>
             <BannerAd
      unitId={bannerAdUnits[BannerCounter]}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
         <ScrollView style={styles.wrapper}>
             
             <Animated.View style={{
                 alignItems:'center',
                 backgroundColor:'#151718',
                 height:imagecontainerheight,
             }}>
              {Movie.length > 0 ? <Animated.Image  source={{ uri: 'https://image.tmdb.org/t/p/original/'+ Movie[rndmnumber].poster_path}}
             style={{
             height:imageHeight,
             width:imageWidth,
             borderRadius:15,
            marginTop:15, 
             }}/>
             : <Animated.Image  source={{ uri: 'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg'}}
             style={{
             height:imageHeight,
             width:imageWidth,
             borderRadius:15,
            marginTop:15, 
             }}/>}
            
             <Animated.Text style={{ 
              fontSize:titlefontsize,
                fontFamily:'Raleway-Bold',
               color:'#FFEEEE',
               }}>{Movie.length > 0 ? Movie[rndmnumber].title : ''}</Animated.Text>
             <Animated.View style={{
              marginTop:15,
              height:genrefontsize,}}>
             
             <Text style={styles.subtitleyellow}>{Movie.length > 0 ? Movie[rndmnumber].release_date : ''}</Text>
             </Animated.View>
             </Animated.View>
             <View  style={styles.textcontainer}>
             <Text style={styles.Synopsis}>Synopsis</Text>




             <Text style={{  fontSize:15, 
            fontFamily:'Raleway-Bold',
            color:'#FFEEEE',
            marginTop:15,
            marginBottom:50,
  }}>{Movie.length > 0 ? Movie[rndmnumber].overview : ''} </Text>
             </View>
           
         </ScrollView>
         <View style={styles.twotwocontainer}>
         <View style={styles.twobuttonsContainer}>
         <TouchableOpacity style={styles.button} onPress={unlockbutton}><Image source={unlock} style={styles.buttonimage}/></TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={skipbutton}><Image source={skip} style={styles.buttonimage}/></TouchableOpacity>

         </View>
         </View>
        
    </View>
  )
}

export default ResultPage

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
        width:320,
        backgroundColor:'#151718',
        flexDirection:'row',
        marginTop:20,
       
       },
       backbutton:{
        height:40,
        width:40,
       },
       separator:{
        height:2,
        width:'100%',
        backgroundColor:'#282A2C',
        },
        image:{
        height:320,
        width:250,
        borderRadius:15,
        marginTop:15, 
        
        },
       
        title:{
        fontSize:30,
        fontFamily:'Raleway-Bold',
        color:'#FFEEEE',
        },
        subtitle:{
        fontSize:15,
        fontFamily:'Raleway-Bold',
        color:'#FFEEEE',
        textAlign:'center',

        },
        subtitleyellow:{
            fontSize:15,
            fontFamily:'Raleway-Bold',
            color:'#FFE895',
            textAlign:'center',

        },
        minititlescontainer:{
          
        },
        hourcontainer:{
            flexDirection:'row',
            justifyContent:'center',
         },
        
         textcontainer:{
         marginTop:'50%'         },
         Synopsis:{
            fontSize:40,
            fontFamily:'Satisfy',
            color:'#FFE895',
            
            
         },
         text:{
            fontSize:15, 
            fontFamily:'Raleway-Bold',
            color:'#FFEEEE',
            marginTop:15,
            marginBottom:50,
         },
         twobuttonsContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            width:320,
            height:50,
            backgroundColor:'#282A2C',
            
           
         },
        
         button:{
            width:100,
            height:50,
            backgroundColor:'#FFE895',
            borderRadius:15,
            justifyContent:'center',
            alignItems:'center',
         },
         
         years:{
          width:50,
          height:50,
          backgroundColor:'#FFE895',
          borderRadius:15,
          justifyContent:'center',
          alignItems:'center',
       },
         buttonimage:{
            height:30,
            width:30,
            resizeMode:'contain',
         },
         twotwocontainer:{
            
            width:'100%',
            height:60,
            backgroundColor:'#282A2C',
            alignItems:'center',
            justifyContent:'center',
         }
        }) 