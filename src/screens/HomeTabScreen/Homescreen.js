import React, { useEffect } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity,Linking, Text,Image,ScrollView,BackHandler } from 'react-native';
import { IMGS } from '../../constants';
import call from 'react-native-phone-call'
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';
const handleBackPress = () => {
  // Perform any cleanup or additional actions before exi
  BackHandler.exitApp();
  // Return true to prevent default back button behavior
  return true;
};
const HomeScreen = () => {
  const makecall =()=>{
    const args = {
      number: '+918380025688', // String value with the number to call
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
  const navigation = useNavigation();
  useEffect(() => {
    // Add the event listener for the back button press
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    // Remove the event listener when the component is unmounted
    return () => backHandler.remove();
  }, []);
  const onDepartmentPress = (department) => {
    navigation.navigate(department);
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom: 30}}>
    <View style={styles.container}>
      <Animated.Image
        source={IMGS.image1}
        sharedTransitionTag="imageUser"
        style={{ height: 250, width: '100%', borderRadius: 0 }}
      />
      <View style={styles.header}>
      <Text style={styles.headerText}>N. B. Navale Sinhgad College of Engineering, Solapur</Text>
      
      <Image
          source={IMGS.user} // Replace 'yourImage' with the appropriate image source
          style={{height:160, width:140}}
          resizeMode="contain" // Adjust the image resizing mode as needed
        />
        <Text style={styles.headert}>
          {`\u2022`} Sinhgad Institute was established in 1993 under the able and dynamic leadership
          of Prof. M. N. Navale, with an objective of providing technical education which was at
          par with the best in the world. In the past two decades, the Sinhgad family has grown
          to 119 Institutes spread all over 12 Campuses and providing education for more than
          1,00,000 students.
        </Text>
        <Text style={styles.headert}>
          {`\u2022`} Savitribai Phule Shikshan Prasarak Mandal (SPSPM) was founded in 2006 under the
          umbrella of Sinhgad Institutes with the goal of providing quality education in the field
          of Engineering, Management and School Education. Being spread over 90 Acres of lush green
          land with all kind of modern amenities and required infrastructure, NBNSCOE has become
          the first choice of Engineering aspirants, which has resulted in the maximum number of
          students' admission amongst any of the other Engineering Colleges in and around Solapur
          region.
        </Text>       
      </View>
      <View style={styles.headerd}>
      <Text style={styles.headerText}>Courses and Departments</Text>
      </View>
      <View style={styles.departmentContainer}>
      <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.GSE)}
        >
          <Text style={styles.departmentText}>General Science and Engineering (First Year)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.CSE)}
        >
          <Text style={styles.departmentText}>Computer Science and Engineering </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.ENTC)}
        >
          <Text style={styles.departmentText}>Electronics & Telecommunication</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.MECH)}
        >
          <Text style={styles.departmentText}>Mechanical Engineering</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.ELECT)}
        >
          <Text style={styles.departmentText}>Electrical Engineering</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 1 }]}
          onPress={() => onDepartmentPress(ROUTES.CIVIL)}
        >
          <Text style={styles.departmentText}>Civil Engineering</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.header}>
      <Text style={styles.headerText}>Objective</Text>
        <Text style={styles.headero}>
          {'\n'}{`\u2022`}To ensure high quality teaching learning process with transparent feedback system from all stake holders to match with the University curriculum
          {'\n'}{`\u2022`}To maintain the innovative and interactive teaching-learning process by inculcating practical and project based approach to match the industry requirements
          {'\n'}{`\u2022`}To promote co-curricular and extra- curricular activities for overall development of the students
          {'\n'}{`\u2022`}To provide appropriate value addition and certification programs for bridging the gap between academia and industry
          {'\n'}{`\u2022`}To train the students with life skill activities for making them globally competent and employable
          {'\n'}{`\u2022`}To strive for continuous improvements in all the institutional endeavors
        </Text>
        </View>
        <View style={styles.headerd}>
      <Text style={styles.headerText}>Contact Details</Text>
      </View>
        <View style={styles.headerd}>
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
    alignItems:'center',
    elevation:5,
    marginTop:5,
    borderRadius:5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor:'#fff',
  },
  headerc: {
    margin:13,
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
    margin:13,
    padding:8,
    fontSize: 14,
    textAlign:'center',
    color: '#000',
  },
  departmentContainer: {
    flexDirection:'column',
    justifyContent:'space-evenly',
    padding: 5,
    marginBottom:2,
  },
  departmentCard: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom:1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  departmentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
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
