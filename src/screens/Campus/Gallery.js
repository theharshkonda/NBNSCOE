import React, { useEffect } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity,Linking, Text,Image,ScrollView,BackHandler } from 'react-native';
import { IMGS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';
const GalleryScreen = () => {

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.navigate(ROUTES.HOME_TAB);
      return true; 
    });
    return () => backHandler.remove(); // Clean up the event listener on unmount
  }, [navigation]);

  const navigation = useNavigation();
  const onDepartmentPress = (department) => {
    navigation.navigate(department);
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom: 30}}>
    <View style={styles.container}>
      <Animated.Image
        source={IMGS.image7}
        sharedTransitionTag="imageUser"
        style={{ height: 250, width: '100%', borderRadius: 0 }}
      />
        <Text style={styles.headerText}>Facilities provided by College and Departments </Text>
      <View style={styles.departmentContainer}>
      <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.CAMPUS)}
        >
          <Text style={styles.departmentText}>Campus Facilities</Text>
          <Image style={styles.image} source={{uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Bus-Facility1.jpg'}} />
        </TouchableOpacity>
      <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.GSEDEPT)}
        >
          <Text style={styles.departmentText}>General Science & Engineering (First Year)</Text>
          <Image style={styles.image} source={{uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/06/ENGG.-CHEMISTRY-LAB-2.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.CSEDEPT)}
        >
          <Text style={styles.departmentText}>Computer Science and Engineering Dept</Text>
          <Image style={styles.image} source={{uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/APL.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.ENTCDEPT)}
        >
          <Text style={styles.departmentText}>ENTC Department</Text>
          <Image style={styles.image} source={{uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/Electronics-Design.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.MECHDEPT)}
        >
          <Text style={styles.departmentText}>Mechanical Engineering Department</Text>
          <Image style={styles.image} source={{uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/automobile-engg-1024x683.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.ELECTDEPT)}
        >
          <Text style={styles.departmentText}>Electrical Engineering Department</Text>
          <Image style={styles.image} source={{uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/2.6-Project-Lab.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 1 }]}
          onPress={() => onDepartmentPress(ROUTES.CIVILDEPT)}
        >
          <Text style={styles.departmentText}>Civil Engineering Department</Text>
          <Image style={styles.image} source={{uri:'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2017/05/RV3A1250.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.departmentCard, { flex: 0.8 }]}
          onPress={() => onDepartmentPress(ROUTES.EVENTGALLERY)}
        >
          <Text style={styles.departmentText}>Events Organized by our College</Text>
          <Image style={styles.image} source={{uri:'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/20230610163356_IMG_0920.JPG'}} />
        </TouchableOpacity>

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
  headerText: {
    backgroundColor:'#fff',
    padding:10,
    fontSize: 22,
    fontWeight: 'bold',
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
    height: 315,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom:15,
    justifyContent: 'center',
    
    elevation: 10,
  },
  image:{
    marginTop:10,
    height:270,
    width:'100%',
  },
  departmentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop:10,
    marginLeft:10,
  },
});
export default GalleryScreen;
