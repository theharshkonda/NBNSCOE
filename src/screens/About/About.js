import React, { useEffect } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity, Text, Image, ScrollView, BackHandler, Linking } from 'react-native';
import { IMGS } from '../../constants';
import call from 'react-native-phone-call'
const HomeScreen = () => {
const makecall =()=>{
  const args = {
    number: '+918380025630', // String value with the number to call
    prompt: true, // Optional boolean property. Determines if the user should be prompted prior to the call 
    skipCanOpen: true // Skip the canOpenURL check
  }
  call(args).catch(console.error)
};
const latitude = 17.727918602439576;
  const longitude = 75.85047281685031;

  // Function to open Google Maps
  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/place/${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}>
      <View style={styles.container}>
        <Animated.Image
          source={IMGS.image2}
          sharedTransitionTag="imageUser"
          style={{ height: 250, width: '100%', borderRadius: 0 }}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>NAAC Accredited With A Grade</Text>
          <Image
            source={IMGS.image5}
            style={{ height: 160, width: 140 }}
            resizeMode="contain"
          />
          {/* Vision */}
          <Text style={styles.headerText}>Vision</Text>
          <Text style={styles.headert}>
            {'\u2022'} To be an excellent technical institute producing competent technocrats for the betterment of society,
            through research and value-based education.
          </Text>
        </View>
        
        {/* Mission */}
        <View style={styles.headerd}>
          <Text style={styles.headerText}>Mission</Text>
          <Text style={styles.headert}>
            {'\u2022'} To develop a state of the art academic and research environment by promoting ideas, innovations through
            project-based learning for enhancing career opportunities. {'\n'}
            {'\u2022'} To inculcate high moral and ethical values by practicing a professional code of conduct. {'\n'}
            {'\u2022'} To be recognized as one of the top-ranked institutes at national
            and international levels.
          </Text>
        </View>
        {/* Goals */}
        <View style={styles.headerd}>
          <Text style={styles.headerText}>Goals</Text>
          <Text style={styles.headert}>
            {'\u2022'} To produce Professionals having Innovative thinking, Technical skills and Leadership qualities to adapt
            to the ever-changing needs of society. {'\n'}
            {'\u2022'} To develop ICT enabled infrastructure equipped with modern aids. {'\n'}
            {'\u2022'} To provide the environment for the up-gradation of skill sets and knowledge through continuing education programs. {'\n'}
            {'\u2022'} To have the Centre for Research and Technology Development with multidisciplinary incubation laboratories. {'\n'}
            {'\u2022'} Every department to be recognized as the Centre of Excellence with cutting-edge technologies. {'\n'}
            {'\u2022'} To develop association with external organizations and reputed Industries for mutual benefits. {'\n'}
          </Text>
        </View>
        <View style={styles.headerd}>
          <Text style={styles.headerText}>Contact Details & Admission Enquiry</Text>
        </View>
        <View style={styles.container}>
         <View style={styles.headerd}>
         <View style={styles.container}>
    </View>
          <View style={{width:'100%',justifyContent:'center',flexDirection:'row',}}>
          <TouchableOpacity style={{flexDirection:'row'}}onPress={openGoogleMaps}>
            <Image style={{height:20,width:20}} source={{uri:'https://cdn-icons-png.flaticon.com/128/2875/2875433.png'}}></Image>
            <Text style={{fontWeight:'bold',color:'#000'}}> Open in Google Maps</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.headerc}>
          Gat No. 38/1 B, Kegaon, Solapur Pune Highway, Solapur-413255 , MH, INDIA.
          {'\n'}Contact : +91-8380025630, 8380025688
          </Text>
          <View style={styles.social}>
           <TouchableOpacity style={styles.buttonstyle}
           onPress={() => Linking.openURL("https://cdn-icons-png.flaticon.com/128/3955/3955024.png") }>
            <Image style={styles.iconstyle} source={{uri:"https://cdn-icons-png.flaticon.com/128/4138/4138124.png"}}></Image>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonstyle}
           onPress={() => Linking.openURL("https://www.facebook.com/nbnscoe/") }>
            <Image style={styles.iconstyle} source={{uri:"https://cdn-icons-png.flaticon.com/128/5968/5968764.png"}}></Image>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonstyle}
           onPress={() => Linking.openURL("mailto:principal.nbnscoe@sinhgad.edu") }>
            <Image style={styles.iconstyle} source={{uri:"https://cdn-icons-png.flaticon.com/128/732/732200.png"}}></Image>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonstyle} 
           onPress={makecall}>
            <Image style={styles.iconstyle} source={{uri:"https://cdn-icons-png.flaticon.com/128/724/724664.png"}}></Image>
           </TouchableOpacity>
           
        </View>
        <Text style={{textAlign:'center',fontWeight:'bold',color:'#000'}}> © N B Navale Sinhgad College of Engineering, Kegaon-Solapur </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',color:'#000'}}> 2023 Copyright. All rights reserved.</Text>
      </View>
    </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
  },
  header: {
    alignItems:'center',
    elevation:5,
    borderRadius:5,
    borderBottomEndRadius:30,
    borderBottomStartRadius:30,
    paddingVertical: 10,
    backgroundColor:'#fff',
  },
  headerd: {
    elevation:5,
    marginTop:5,
    borderRadius:5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor:'#fff',
  },
  headerc: {
    margin:8,
    padding:8,
    fontSize: 14,
    fontWeight:'bold',
    textAlign:'center',
    color: '#000',
  },
  headero: {
    alignItems:'center',
    elevation:0,
    color:'#000',
    borderRadius:5,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor:'#fff',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#000',
  },
  headert: {
    margin:5,
    padding:5,
    fontSize: 14,
    textAlign:'left',
    color: '#000',
  },
  social:{
    width:"100%",
    flexDirection:'row',
    justifyContent:'center',
  },
  iconstyle:{
    marginHorizontal:10,
    marginBottom:15,
    width:'100%',
    height:35,
    aspectRatio:1,
  },
  buttonstyle:{
    
  },
});
export default HomeScreen;
