import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, ImageSourcePropType,TouchableWithoutFeedback,ImageBackground } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface GroupHeaderProps {
  title: {
    name: string;
    imageUri: string;
  };
  memberCount: string;
}

const GroupHeader: React.FC<GroupHeaderProps> = ({ title, memberCount }) => (
  <View style={styles.groupHeader}>
    {/* <Image resizeMode="cover" source={{ uri: title.imageUri }} style={styles.groupHeaderImage} /> */}
    <View style={styles.groupHeaderDetails}>
      <Text style={styles.groupHeaderTitle}>{title.name}</Text>
      <Text style={styles.groupHeaderMembers}>{`${memberCount} Members`}</Text>
    </View>
  </View>
);

interface SectionButtonProps {
  title: string;
}

const SectionButton: React.FC<SectionButtonProps> = ({ title }) => (
  <TouchableOpacity style={styles.sectionButton}>
    <Text style={styles.sectionButtonText}>{title}</Text>
  </TouchableOpacity>
);

interface Icon {
  name: string;
  imageUri: string;
}

interface FooterNavigationProps {
  icons: Icon[];
}



const SupportGroupApp1: React.FC = () => {
  const [isButtonDisabled, setButtonDisabled] = React.useState(false);

  const handleButtonPress = () => {
    setButtonDisabled(true);
  };
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
          <View style={styles.view5}>
          <Text style={styles.groupHeaderTitle}>Bipolar Support Group</Text>
           </View>
          </View>
          <View style={styles.groupHeader}>
    {/* <Image resizeMode="cover" source={{ uri: title.imageUri }} style={styles.groupHeaderImage} /> */}
    <View style={styles.groupHeaderDetails}>
      <Text style={styles.groupHeaderTitle}>Bipolar Support Group</Text>
      <Text style={styles.groupHeaderMembers}>2.1k Members</Text>
    </View>
  </View>
      {/* <GroupHeader title={{ name: "", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/28a13921ae9b0e83392b906639d49f984df1c172c19a91ea246ccf7c572c18b6?apiKey=42bb954c825745999302100cb42c8fd0&" }} memberCount="2.1k" /> */}
      <View style={{display:"flex",flexDirection:"row"}}>
      {/* <TouchableOpacity style={styles.sectionButton1}  onPress={handleButtonPress} disabled={isButtonDisabled}  >
     <Text style={styles.sectionButtonText} >Join</Text>
      </TouchableOpacity> */}
      {/* {isButtonDisabled ? null :
      ( //<TouchableOpacity onPress={handleButtonPress} style={styles.sectionButton1} disabled={isButtonDisabled}>
   <Text style={styles.sectionButtonText}>Join</Text>
)} */}
      <TouchableOpacity
        onPress={handleButtonPress}
        disabled={isButtonDisabled}
        style={[
          styles.sectionButton,
          { backgroundColor: isButtonDisabled ? 'white' : '#1A8AE5',
          borderRadius: 20, margin: 20,    padding: 10,    width: isButtonDisabled ? "15%":"40%",    height: "50%", alignItems: "center",  }
        ]}
        
      >
        {!isButtonDisabled && <Text style={styles.sectionButtonText}>Join</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.sectionButton1} onPress={()=>{navigation.navigate("CommunityInvitation")}} >
      <Text style={styles.sectionButtonText}>Invite</Text>
      </TouchableOpacity>
      </View>
      <ImageBackground source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/28a13921ae9b0e83392b906639d49f984df1c172c19a91ea246ccf7c572c18b6?apiKey=42bb954c825745999302100cb42c8fd0&" }} resizeMode="cover" style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>Bipolar Support Group</Text>
        <Text style={styles.description}>Community for those affected by Bipolar Disorder. Join to connect
            with others, share experiences, and find support.</Text>
        <TouchableOpacity style={styles.readMoreBtn}>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <TouchableOpacity style={styles.sectionButton} onPress={()=>{navigation.navigate("ConsultHomePage")}} >
       <Text style={styles.sectionButtonText}>Consult with Experts</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.sectionButton} onPress={()=>{navigation.navigate("NGOs")}} >
       <Text style={styles.sectionButtonText}>NGOs Working on Bipolar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton} onPress={()=>{navigation.navigate("ChatRoom")}} >
       <Text style={styles.sectionButtonText}>Bipolar Chat Rooms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton} onPress={()=>{navigation.navigate("BipolarStory")}} >
       <Text style={styles.sectionButtonText}>Happy Stories of People with Bipolar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton} onPress={()=>{navigation.navigate("BipolarDisorderResources")}} >
       <Text style={styles.sectionButtonText}>Resources on Bipolar</Text>
        </TouchableOpacity>
   
      {/* <FooterNavigation icons={iconsData} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view4: {
    alignItems: "stretch",
    display: "flex",
    flexDirection:"row",
    gap: 5,
    marginLeft:9,
    paddingBottom: 12,
    paddingTop:12,
  },
  view5: {
    marginLeft:70,
    fontFamily: "Inter, sans-serif",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
  },
  groupHeaderTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  cardContainer: {
    overflow: 'hidden',
    display: 'flex',
    aspectRatio: 0.96,
    width: '100%',
    paddingTop: 80,
    flexDirection: 'column',
  },
  cardContent: {
    justifyContent: 'space-between',
    marginTop: 52,
    padding: 16,
  },
 title: {
    fontWeight: '700',
    fontSize: 24,
    fontFamily: 'Epilogue, sans-serif',
    color: '#FFF',
  },
  description: {
    marginTop: 34,
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFF',
  },
  readMoreBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#1A8AE5',
 alignSelf: 'flex-end',
    marginTop: 168,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  readMoreText: {
    color: '#F7FAFC',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.21,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  groupHeader: {
    alignItems: "center",
    padding: 16,
  },
  groupHeaderImage: {
    width: "100%",
    height: 120,
  },
  groupHeaderDetails: {
    alignItems: "center",
    marginTop: 8,
    borderColor:"black",
    borderStyle:"solid",
  },
 
  groupHeaderMembers: {
    marginTop: 4,
    color: "#4F7596",
    fontSize: 14,
  },
  sectionButton1: {
    borderRadius: 20,
    backgroundColor: "#1A8AE5",
    margin: 20,
    padding: 10,
    width: "40%",
    height: "50%",
    // display:"flex",
    // flexDirection:"row",
    alignItems: "center",
  },
  sectionButton: {
    borderRadius: 20,
    backgroundColor: "#1A8AE5",
    margin: 10,
    padding: 10,
    // display:"flex",
    // flexDirection:"row",
    alignItems: "center",
  },
  sectionButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "700",
  },
  footerNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#E8EDF2",
    backgroundColor: "#F7FAFC",
    paddingVertical: 10,
  },
  footerNavigationItem: {
    alignItems: "center",
  },
  footerNavigationImage: {
    width: 24,
    height: 24,
  },
  footerNavigationText: {
    marginTop: 4,
    fontSize: 12,
    color: "#706387",
  },
});

export default SupportGroupApp1;

