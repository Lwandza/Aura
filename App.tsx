/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import logo from './assets/logo.png';
import fourbox from './assets/fourbox.png'
type SectionProps = PropsWithChildren<{
  title: string;
}>;
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import RouteData from './components/RouteData';
import Geolocation from '@react-native-community/geolocation';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data =[
  {
    victim_information: {
      names: "Sam Roux",
      surname: "Jones",
      vehicle: {
        model: "Toyota Corolla Cross",
        color: "White",
        reg_number: "LMB 933 EC"
      },
      medical: {
        medical_insurance: "Yes",
        allergies: "None",
        illnesses: "Epilepsy, Chronic Migraines and low blood pressure",
        medications: "Epitec 400mg, Tanagril"
      },
      next_of_kin: {
        names: "Kaitlin Roux",
        contact: "061 992 3045"
      }
    },
    destination: {
      address: "53 Pine Avenue, Ferndale, Johannesburg",
      latitude: "-26.459607",
      longitude: "28.594385"
    },
    emergency_type: "Medical - User Collapse",
    eta: "14 min (3 km)" ,
    additional_details: "User was unable to breathe and felt a sharp pain down left arm",
  }
]



function App(): JSX.Element {
  const [userLocationLatitude, setUserLocationLatitude] = useState('');
  const [userLocationLongitude, setUserLocationLongitude] = useState('');
  const [userHelpInfo, setUserHelpInfo] = useState([]);
  useEffect(() => {
   requestLocationPermission()
  
  //  Comment out line below and uncomment addApi
   setUserHelpInfo(data)
    // addApi()

    
   
},[])

//Please add Api info
const addApi =async () => {
  try{    
    console.log(locations)

          let d = new Date()
          let formdata = new FormData();
          console.log(d)
       
       await fetch(`addUrlHere`,{
                  
            method:"GET",
            headers:{
                'Accept' : 'application/json',
                'Content-Type':'multipart/form-data',
                // 'Content-Type':'application/json',

            }, 
   
                  
                
          })
          .then(sendMessage =>sendMessage.json())
          // .then( test => console.log('passed'))
          .then(sendMessageJson =>{
            if(sendMessageJson.length !=0){
              setUserHelpInfo(sendMessageJson)
            }
            else{
              setUserHelpInfo(data)
            }

            
              
          
          })
          .catch((error) => {
              console.error(error);
          });
  
  } 
  catch(e){
    console.error(e)
  }           
    
}

// get location permisisson and get user location
async function requestLocationPermission(){
  
  if(Platform.OS === 'android'){
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      console.log(granted)
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (pos) => {
            // setPosition(JSON.stringify(pos));
            // console.log(pos)
            setUserLocationLatitude(pos.coords.latitude)
            setUserLocationLongitude(pos.coords.longitude)
            
          },
          (error) =>console.log(error),
          // { enableHighAccuracy: true }
        );
      } else {
        return false
      }
    } catch (err) {
      console.warn(err.message)
      return false
    }
  }
}


  return (
    <SafeAreaView>
      <GestureHandlerRootView>
        <View style={styles.container}>
          <View style={{flexDirection:'row', justifyContent:'space-between', height:100}}>
            <Image source={logo} style={{width:100, height:100, resizeMode: 'contain',marginLeft:20}} />
            
          </View>
          <View style={{marginTop:-25}}>
            {userLocationLongitude !="" ?
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={{
                  latitude:parseFloat(userLocationLatitude),
                  longitude: parseFloat(userLocationLongitude),
                  // latitude: -26.459607,
                  // longitude: 28.594385,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
                  
                >
  
                </MapView>:
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={{
                  latitude: -26.459607,
                  longitude: 28.594385,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
                  
                >
  
                </MapView>
            }
          </View>
          <View style={styles.searchBox}>
            <TouchableOpacity style={{backgroundColor:'#713066', flexDirection:'row', padding:10, borderRadius:10, marginLeft:'25%'}}>
              <Image source={fourbox} style={{width:25, height:25, resizeMode: 'contain'}} />
              <Text style={{fontSize:20, color:'white', textTransform:'uppercase' ,marginLeft:10}}>More</Text>
            </TouchableOpacity>
        
          </View>
          {userHelpInfo.length != 0 ?
            // Send user info to dragable component
           <RouteData data={userHelpInfo}/>:null
          }
        </View>
      </GestureHandlerRootView>
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{

    backgroundColor:'white'
  },
  map:{
    height: windowHeight-175,
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex:0
  },
  searchBox: {
    position:'absolute', 

    marginTop:  100,
    marginRight:50 ,
    // flexDirection:"row",
    // backgroundColor: '#713066',
    width: "50%",
    alignSelf:'flex-end',
    alignItems:'center',
    borderRadius: 5,
    // padding: 10,
    
  },
});

export default App;
