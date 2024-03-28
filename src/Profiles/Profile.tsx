import React from "react";
import { View, Image, SafeAreaView, Text, StyleSheet, TouchableOpacity,Pressable,Alert,PermissionsAndroid, ScrollView } from "react-native";
// import { , Text, Image, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign' 
 import Entypo from 'react-native-vector-icons/Entypo' 
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
 import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
//  import { images } from "./images"; 
//  import { images } from '../../assets'; Entypo MaterialIcons
 
interface UserProfileInfoProps {
  label: string;
  content: string;
}

interface ProfileSectionTitleProps {
  title: string;
  description: string;
}

const UserProfileInfo: React.FC<UserProfileInfoProps> = ({ label, content }) => (
  <View style={styles.infoContainer}>
    <Text style={styles.infoText}>{label}</Text>
    <Text style={styles.infoContent}>{content}</Text>
  </View>
);

const ProfileSectionTitle: React.FC<ProfileSectionTitleProps> = ({ title, description }) => (
  <View style={styles.sectionTitleContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionDescription}>{description}</Text>
  </View>
);

const ProfilePage: React.FC = () => {
  const [image, setImage] = React.useState("");

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message: "App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  


  const handleCamera = async () => {
    // setCount(count + 1);
    requestCameraPermission();
    // const res.assets[0].uri
    Alert.alert('saved to your Gallery')
    try {
      const res = await launchCamera({ mediaType: 'photo', videoQuality: 'high', saveToPhotos: false })
  
      if (res.assets && res.assets.length > 0) {
        // Access the first image URI
        const imageUri = res.assets[0].uri;
        console.log('Image URI:', imageUri);
        if(imageUri){
          setImage(imageUri);
        }
        
        // Now you can use the imageUri as needed
      } else {
        console.log('No image captured.');
      }
    } catch (error) {
      console.error('Error capturing image:', error);
    }
   // setImage(res.assets[0].uri);
    //fetchData(res.assets[0].uri);
  }

  const handleGallery = async () => {
  //  setCount(count + 1);
    requestCameraPermission();
    const res = await launchImageLibrary({ mediaType: 'photo', videoQuality: 'high' });
    //console.log(res);
    if (res.assets && res.assets.length > 0) {
      // Access the first image URI
      const imageUri = res.assets[0].uri;
      console.log('Image URI:', imageUri);
      if(imageUri){
        setImage(imageUri);
      }
      
      // Now you can use the imageUri as needed
    } else {
      console.log('No image captured.');
    }
   // setImage(res.assets[0].uri)
    //fetchData(res.assets[0].uri);
  }
  const [visible, setVisible] = React.useState(false);
  return (
    <ScrollView>
    <View style={styles.profileContainer}>
       <TouchableOpacity onPress={() => navigation.goBack()}  >
            <AntDesign size={25} name="arrowleft" style={{marginTop:34,marginLeft:12}}/>
          </TouchableOpacity>
      <View style={styles.profileHeader}>
      <View style={styles.profileImageContainer}>
        {image? (<Image
          style={styles.profilePicture}
          // source={uri ? { uri } : images.avatar}
          source={{uri:image}}
        />) : (<Image
          style={styles.profilePicture}
          // source={uri ? { uri } : images.avatar}
          source={require("./images/avatar.jpg")}
        />)}
        <TouchableOpacity style={styles.addButton}  onPress={() => setVisible(true)} >
          {/* <Image style={styles.addButtonIcon}  source={require("../n1.jpg") } />  */}
          <AntDesign size={25} name="pluscircleo" style={styles.addButtonIcon}/>
          {/* images.addButton */}
        </TouchableOpacity>
      </View>
     

      <Modal
      isVisible={visible}
      onBackButtonPress={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}
      style={styles.modal}>
      <SafeAreaView style={styles.buttons}>
        <Pressable style={styles.button} onPress={handleGallery}>
          {/* <Image style={styles.buttonIcon} source={require("../n1.jpg")} />  */}
          <MaterialIcons size={40} name="photo-library" style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>Library</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleCamera}>
          {/* <Image style={styles.buttonIcon} source={require("../n1.jpg")} /> */}
          <Entypo size={40} name="camera" style={styles.buttonIcon}/>
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>





        {/* <TouchableOpacity style={styles.profileImageContainer} onPress={()=>{handleGallery();handleCamera()}}>
          <Image
            resizeMode="cover"
            source={require("../n1.jpg")}
            style={styles.profilePicture}
          />
        </TouchableOpacity> */}
        {/* <Image
          resizeMode="cover"
          source={{ uri: "https://example.com/header-image.jpg" }}
          style={styles.headerImage}
        /> */}
        <View style={styles.userInfoSection}>
          <UserProfileInfo label="Neeraj" content="@neera2043" />
          <UserProfileInfo label="Location" content="Vizag, India" />
        </View>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.consultationSection}>
        <ProfileSectionTitle title="My Consultations" description="Your upcoming and past appointments" />
        <AntDesign size={25} name="right"  style={styles.consultationImage} />
      </View>
      <View style={styles.consultationSection}>
        <ProfileSectionTitle title="Following" description="0 experts" />
        <AntDesign size={25} name="right"  style={styles.consultationImage} />
      </View>
      <View style={styles.footerSection} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    marginTop: '40%',
  },
  avatarImage: {
    height: 260,
    width: 260,
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
  addButton: {
    height: 23,
    width: 23,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 119,
    bottom: 40,
  },
  addButtonIcon: {
    height: 26,
    width: 26,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    margin: 10,
  },
  buttons: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },










  
  profileContainer: {
    
    // alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // margin: "0 auto",
  },
  profileHeader: {
    // alignItems: "stretch",
    backgroundColor: "#F7FCFC",
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  profileImageContainer: {
    alignItems: "center",
    backgroundColor: "#F7FCFC",
    display: "flex",
    width: "100%",
    padding : 24,
  },
  profilePicture: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  headerImage: {
    alignSelf: "center",
    marginTop: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  userInfoSection: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    marginTop: 16,
    padding: 0,
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  infoText: {
    color: "#0D1C1C",
    fontWeight: "700",
    fontSize: 22,
  },
  infoContent: {
    color: "#4F9696",
    fontSize: 16,
  },
  editProfileButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#E8F2F2",
    alignSelf: "center",
    display: "flex",
    marginTop: 16,
    padding: 10,
  },
  editProfileButtonText: {
    color: "#0D1C1C",
    fontWeight: "700",
    fontSize: 14,
  },
  consultationSection: {
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#F7FCFC",
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
    padding: 14,
  },
  sectionTitleContainer: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
  },
  sectionTitle: {
    color: "#0D1C1C",
    fontWeight: "500",
    fontSize: 16,
  },
  sectionDescription: {
    color: "#4F9696",
    fontSize: 14,
  },
  consultationImage: {
    marginTop: 10,
    // width: "100%",
    // height: 150,
  },
  followingSection: {
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#F7FCFC",
    display: "flex",
    // flexDirection:"row",
    marginTop: 16,
    padding: 14,
  },
  followingImage: {
    marginTop: 10,
    width: "100%",
    height: 150,
  },
  footerSection: {
    borderColor: "rgba(232, 242, 242, 1)",
    borderStyle: "solid",
    borderTopWidth: 1,
    backgroundColor: "#F7FCFC",
    minHeight: 53,
    marginTop: 24,
    width: "100%",
  },
});

export default ProfilePage;