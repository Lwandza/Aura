import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Svg, {G,Path, SvgXml} from 'react-native-svg';
import shield from '../assets/shield.png'
import userInfo from '../assets/userInfo.png'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 const testMark =`
 <svg xmlns="http://www.w3.org/2000/svg" width="400" height="1104" viewBox="0 0 400 1104" version="1.1">
 <path d="M 30.750 14.080 C 29.103 15.040, 29 20.716, 29 110.895 C 29 205.420, 29.027 206.714, 31 208.500 C 32.892 210.213, 33 211.580, 33 233.914 C 33 256.436, 33.092 257.576, 35 258.768 C 36.910 259.960, 37 261.100, 37 283.959 C 37 304.789, 37.206 308.016, 38.588 308.789 C 39.961 309.558, 40.197 312.883, 40.338 333.419 C 40.484 354.762, 40.677 357.290, 42.250 358.440 C 43.829 359.596, 44 361.977, 44 382.860 C 44 404.667, 44.115 406.115, 46 408 C 47.886 409.886, 48 411.333, 48 433.492 C 48 455.900, 48.092 457.041, 50 458.232 C 51.908 459.424, 52 460.564, 52 483.086 C 52 505.420, 52.108 506.787, 54 508.500 C 55.892 510.213, 56 511.580, 56 533.914 C 56 556.436, 56.092 557.576, 58 558.768 C 59.910 559.960, 60 561.100, 60 583.973 C 60 606.906, 60.085 607.975, 62 609 C 63.914 610.025, 64 611.094, 64 633.985 C 64 654.671, 64.212 658.019, 65.569 658.779 C 66.929 659.539, 67.125 662.747, 67.038 682.797 C 66.943 704.794, 67.038 706.038, 68.969 707.969 C 70.658 709.658, 71.003 711.306, 71.015 717.750 C 71.024 722.012, 71.457 726.175, 71.979 727 C 72.814 728.320, 88.134 728.500, 200 728.500 C 311.866 728.500, 327.186 728.320, 328.021 727 C 328.546 726.170, 328.976 715.303, 328.985 702.658 C 328.999 681.228, 329.126 679.656, 331.030 677.234 C 332.945 674.801, 333.055 673.336, 332.961 651.655 C 332.875 631.734, 333.072 628.539, 334.431 627.779 C 335.788 627.019, 336 623.671, 336 602.985 C 336 580.094, 336.086 579.025, 338 578 C 339.914 576.975, 340 575.906, 340 553 C 340 530.094, 340.086 529.025, 342 528 C 343.914 526.975, 344 525.906, 344 503 C 344 480.094, 344.086 479.025, 346 478 C 347.914 476.976, 348 475.906, 348 453.187 C 348 430.682, 348.104 429.355, 350 427.732 C 351.894 426.110, 352 424.782, 352 402.665 C 352 380.580, 352.109 379.212, 354 377.500 C 355.892 375.788, 356 374.420, 356 352.205 C 356 330.993, 356.169 328.597, 357.750 327.441 C 359.322 326.292, 359.520 323.738, 359.697 302.400 C 359.866 282.098, 360.121 278.512, 361.447 277.770 C 362.783 277.022, 363 273.564, 363 252.985 C 363 230.094, 363.086 229.025, 365 228 C 366.914 226.975, 367 225.906, 367 203 C 367 180.094, 367.086 179.025, 369 178 C 370.975 176.943, 371 175.906, 371 96 C 371 17.011, 370.954 15.046, 369.066 14.035 C 366.394 12.605, 33.206 12.649, 30.750 14.080 M 48.670 32.663 C 48.301 33.032, 48 70.275, 48 115.426 C 48 196.436, 48.026 197.535, 50 198.768 C 51.908 199.959, 52 201.100, 52 223.508 C 52 245.667, 52.114 247.114, 54 249 C 55.886 250.886, 56 252.333, 56 274.450 C 56 295.744, 56.161 297.991, 57.750 298.880 C 59.331 299.765, 59.519 302.153, 59.694 323.652 C 59.859 343.875, 60.122 347.616, 61.444 348.583 C 62.775 349.556, 63 353.110, 63 373.205 C 63 395.420, 63.108 396.788, 65 398.500 C 66.890 400.211, 67 401.580, 67 423.500 C 67 445.420, 67.110 446.789, 69 448.500 C 70.892 450.213, 71 451.580, 71 473.914 C 71 496.436, 71.092 497.576, 73 498.768 C 74.908 499.959, 75 501.100, 75 523.508 C 75 545.667, 75.114 547.114, 77 549 C 78.885 550.885, 79 552.333, 79 574.278 C 79 596.318, 79.106 597.647, 81 599.268 C 82.895 600.890, 83 602.218, 83 624.522 C 83 644.525, 83.225 648.149, 84.500 648.638 C 85.775 649.128, 86 652.785, 86 673.050 C 86 695.495, 86.113 696.966, 87.937 698.243 C 89.314 699.208, 89.965 701.032, 90.187 704.550 L 90.500 709.500 200 709.500 L 309.500 709.500 309.770 689.387 C 310.020 670.803, 310.191 669.137, 312.020 667.482 C 313.884 665.795, 314 664.341, 314 642.674 C 314 623.464, 314.252 619.379, 315.523 617.975 C 316.782 616.583, 317.085 612.186, 317.273 592.575 C 317.478 571.168, 317.670 568.763, 319.250 567.879 C 320.839 566.991, 321 564.744, 321 543.441 C 321 521.218, 321.105 519.890, 323 518.268 C 324.896 516.645, 325 515.318, 325 492.813 C 325 470.094, 325.086 469.024, 327 468 C 328.914 466.975, 329 465.906, 329 443 C 329 420.094, 329.086 419.025, 331 418 C 332.914 416.976, 333 415.906, 333 393.120 C 333 370.580, 333.107 369.213, 335 367.500 C 336.890 365.790, 337 364.420, 337 342.674 C 337 323.336, 337.247 319.385, 338.543 317.953 C 339.828 316.533, 340.120 312.298, 340.293 292.553 C 340.480 271.155, 340.670 268.764, 342.250 267.880 C 343.839 266.991, 344 264.744, 344 243.441 C 344 221.218, 344.105 219.890, 346 218.268 C 347.893 216.647, 348 215.318, 348 193.317 C 348 171.338, 348.109 169.977, 350.007 168.208 C 351.983 166.367, 352.010 165.299, 351.757 99.419 L 351.500 32.500 200.420 32.247 C 117.326 32.108, 49.038 32.295, 48.670 32.663 M 72.200 830.200 C 71.280 831.120, 71 860.226, 71 955.118 C 71 1023.163, 71.273 1079.548, 71.607 1080.418 C 72.156 1081.849, 84.398 1082, 200 1082 C 315.602 1082, 327.844 1081.849, 328.393 1080.418 C 328.727 1079.548, 329 1023.163, 329 955.118 C 329 860.226, 328.720 831.120, 327.800 830.200 C 326.057 828.457, 73.943 828.457, 72.200 830.200 M 90 955.500 C 90 1040.831, 90.258 1063.001, 91.250 1063.005 C 91.938 1063.007, 140.357 1063.011, 198.850 1063.014 L 305.199 1063.018 307.582 1060.759 L 309.965 1058.500 309.983 953.250 L 310 848 200 848 L 90 848 90 955.500" stroke="none" fill="#fffcfc" fill-rule="evenodd"/>
 <path d="" stroke="none" fill="#fcfcfc" fill-rule="evenodd"/>
 </svg>
 
`;


export default function RouteData({data}) {
    const translateY = useSharedValue(0)
    const context = useSharedValue({y:0})
    //control size of callout details
    const gesture = Gesture.Pan().onStart(()=>{
        context.value={y:translateY.value}
    }).onUpdate((event) =>{
     
        translateY.value=event.translationY+ context.value.y;
        //Set max hieght and min height
        translateY.value = Math.max(translateY.value, -windowHeight+250)
        translateY.value = Math.min(translateY.value, -windowHeight/5-10)
    })
    //store previous position of callout details
    const rRouteDataStyle= useAnimatedStyle(() => {
        return{
            transform: [{translateY: translateY.value}]
        }
    })
    //Set default size
    useEffect(() => {
        translateY.value=withSpring(-windowHeight/5-10)
    

    },[])

  return (
    <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.routeContainer, rRouteDataStyle]}>
            <View style={styles.line}></View>
            <View style={{flexDirection:"row",}}>
                <View style={styles.profile}>
                    <View style={styles.userPic}>
                        <Feather name="user" size={49} color="#506583"   />
                    </View>
                </View>
                <View style={{marginLeft:20, flexDirection:'row', marginVertical:-5}}>
                    <SvgXml xml={testMark} width={20} height={25} />
                    <Text style={styles.bigText}>Callout Details</Text>
                </View>
            </View>
            <View style={{height:windowHeight, width:windowWidth, marginVertical:-30, zIndex:-1, backgroundColor:'white'}}>
              {data?.map((item)=>(
                <View>
                    <Text style={styles.bigerText}>{item.victim_information.names}</Text>
                    <View style={{flexDirection:'row', backgroundColor:'#506583', alignSelf:'flex-end', alignItems:'center', marginRight:50, padding:5, borderRadius:10}}>
                        <AntDesign name="clockcircleo" size={20} color="white"   />
                        <Text style={{fontSize:20, color:'white', marginLeft:5}}>ETA:</Text>
                        <Text style={{fontSize:20, color:'white', marginLeft:5, fontWeight:'bold'}}>{item.eta}</Text>
                    </View>
                    <View style={{marginLeft:20}}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={shield} style={{width:30, height:30, resizeMode: 'contain'}} />
                            <View style={{width:'90%'}}>
                                <Text style={styles.titleText}>Emergency: {item.emergency_type}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginVertical:5}}>
                            <Entypo name="location-pin" size={20} color="#506583"   />
                            <View style={{width:'90%'}}>
                                
                                <Text style={styles.normalText}>{item.destination.address}</Text>
                                <Text style={styles.normalText}>{item.destination.latitude} {item.destination.longitude}</Text>
                               
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginVertical:5}}>
                            <AntDesign name="infocirlceo" size={20} color="#506583"   />
                            {item.additional_details != null ?
                                <View style={{width:'90%'}} >
                                    <Text style={styles.titleText}>Additional details: <Text style={styles.normalText}>{item.additional_details}</Text></Text>
                                </View>
                                :
                                <View style={{width:'90%'}} >
                                    <Text style={styles.titleText}>Additional details: <Text style={styles.normalText}>User was unable to breathe and felt a sharp pain down left arm</Text></Text>
                                </View>
                            }
                            
                        </View>
                        <View style={{width:'90%', height:1, backgroundColor:'#506583'}}></View>
                        <View style={{flexDirection:'row', marginVertical:5, alignItems:'center'}}>
                            <Image source={userInfo} style={{width:30, height:30, resizeMode: 'contain'}} />
                            <Text style={styles.titleText}>About:{item.victim_information.names.split(" ")[0]}</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical:5, marginLeft:30, paddingRight:15}}>
                            <Entypo name="dot-single" size={25} color="#506583"   />
                            <View style={{width:'90%'}}>
                                <Text style={styles.titleText}>Medical aid: <Text style={styles.normalText}>{item.victim_information.medical.medical_insurance}</Text></Text>
                                <Text style={styles.titleText}>Allergies: <Text style={styles.normalText}>{item.victim_information.medical.allergies}</Text></Text>
                                <Text style={styles.titleText}>Illnesses: <Text style={styles.normalText}>{item.victim_information.medical.illnesses}</Text></Text>
                                <Text style={styles.titleText}>Medications: <Text style={styles.normalText}>{item.victim_information.medical.medications}</Text></Text>
                     
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginVertical:5, marginLeft:10}}>
                            <Entypo name="dot-single" size={25} color="#506583"   />
                            <View>
                                <Text style={styles.titleText}>Next of kin: <Text style={styles.normalText}>{item.victim_information.next_of_kin.names} - {item.victim_information.next_of_kin.contact}</Text></Text>
                           
                            </View>
                        </View>
                    </View>
                </View>
              ))}
            </View>
        </Animated.View>
        
    </GestureDetector>
 
  )
}

const styles = StyleSheet.create({
    routeContainer:{
        zIndex:1,
        height:windowHeight,
        width:'100%',
        backgroundColor:'#506583',
        top:windowHeight,
        position:"absolute",
        borderRadius:25,

    },
    line:{
        width:50,
        height:2,
        backgroundColor:'white',
        alignSelf:'center',
        marginVertical:15

    },
    profile:{
        backgroundColor:"white",
        height:70,
        borderRadius:70/2,
        width:70,
        marginTop:-15,
        marginLeft:30,
        justifyContent:'center', 
 

    },
    userPic:{
        alignSelf:'center',
        borderColor:'#506583',
        borderWidth:3,
        height:55,
        width:55,
        borderRadius:55/2
    },
    bigText:{
        color:'white',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:18,
        marginLeft:5
    },
    bigerText:{
        color:'#506583',
       textAlign:'center',
        fontWeight:'bold',
        fontSize:23,
 
    },
    titleText:{
        color:'#506583',
    //    textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        marginLeft:5
 
    },
    normalText:{
        color:'#506583',
    //    textAlign:'center',
        fontWeight:'normal',
        fontSize:18,

        // marginLeft:5
 
    },

})