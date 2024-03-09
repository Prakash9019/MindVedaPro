import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign' 
 
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
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={{backgroundColor:"blue"}}>
    <View style={styles.profileContainer}>
       <TouchableOpacity onPress={() => navigation.goBack()}  >
            <AntDesign size={25} name="arrowleft" style={{marginTop:34,marginLeft:12}}/>
          </TouchableOpacity>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Image
            resizeMode="cover"
            source={require("../n1.jpg")}
            style={styles.profilePicture}
          />
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  
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