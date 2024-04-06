import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity,TextInput } from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface CommunityItemProps {
  imageUrl: string;
  title: string;
  members: number;
  page:string;
}

const CommunityItem: React.FC<CommunityItemProps> = ({ imageUrl, title, members,page }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
  <TouchableOpacity style={styles.communityItemContainer} onPress={()=>{navigation.navigate("SupportGroupApp1")}}>
    <Image resizeMode="cover" source={{ uri: imageUrl }} style={styles.communityItemImage} />
    <View style={styles.communityItemTextContainer}>
      <Text style={styles.communityItemTitle}>{title}</Text>
      <Text style={styles.communityItemMembers}>{members.toLocaleString()} members</Text>
    </View>
  </TouchableOpacity>
)};

const CommunityHomePage : React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const communityData: CommunityItemProps[] = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd5f8ea46d4180afb3a1854693287453fa4147e34c261a9f8ecc82ff4887997?apiKey=42bb954c825745999302100cb42c8fd0&",
      title: "Depression",
      members: 9700,
      page:"CommunityHomePage",
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a0fcc0091e953a17511028afc45d33750851170844fafa6904a313aa4fa9c8e?apiKey=42bb954c825745999302100cb42c8fd0&",
      title: "Anxiety",
      members: 12300,
      page:"CommunityHomePage",      
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/42df165ba779a3685c8b13d3b794a75ed49db40f443b8b824e7e951b1415e395?apiKey=42bb954c825745999302100cb42c8fd0&",
      title: "Bipolar Disorder",
      members: 2100,
      page:"CommunityHomePage",
    },
  ];

  return (
    <View style={styles.container}>
         <View style={styles.view3}>
          <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
            <View style={styles.view5}>
              <Text style={{fontSize:16,fontWeight:"600"}}>Communities</Text>
            </View>
          </View>
        </View>
      <View style={styles.view8}>
            <AntDesign style={styles.searchIcon} size={25} name="search1"/>
            <TextInput editable multiline={true} numberOfLines={10} placeholder="Search by expertise or condition" style={styles.view9}
      />
           </View>
      <View style={styles.communitiesList}>
        {communityData.map((item, index) => (
          <CommunityItem key={index} imageUrl={item.imageUrl} title={item.title} members={item.members} page={item.page}/>
        ))}
      </View>
    </View>
  );
};

export default CommunityHomePage;
const styles = StyleSheet.create({
    searchIcon:{
        padding:10,
    },
    view3: {
        alignItems: "stretch",
        backgroundColor: "#F7FAFC",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        fontSize: 18,
        color: "#0D141C",
        fontWeight: "700",
       
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
      },
      view4: {
        alignItems: "stretch",
        display: "flex",
        flexDirection:"row",
        gap: 5,
        paddingBottom: 12,
        paddingTop:12,
      },
      view5: {
        marginLeft:38,
        fontFamily: "Inter, sans-serif",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
      },
      view8: {
        display: "flex",
        marginTop: 12,
        width: "92%",
        borderRadius: 30,
        paddingLeft:10,
        marginRight:15,
        marginLeft:4,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#E8F0F2",
      //1  //1 padding: "0 16px",
      },
      view9: {
        borderRadius: 12,
        backgroundColor: "#E8F0F2",
        gap: 2,
         width:"90%",
         marginLeft:12,
        height:60,
        fontSize: 16,
        color: "#4F8296",
        fontWeight: "400",
      //1  //1 padding: "12px 16px",
      },
  container: {
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    display: 'flex',
    maxWidth: 480,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    // margin: '0 auto',
  },
  communitiesList: {
    display: 'flex',
    marginTop: 12,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 16,
  },
  communityItemContainer: {
    alignItems: 'stretch',
    borderRadius: 8,
    borderColor: 'rgba(219, 227, 229, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    marginBottom: 12,
  },
  communityItemImage: {
    width: 40,
    height: 40,
  },
  communityItemTextContainer: {
    marginTop: 12,
  },
  communityItemTitle: {
    color: '#121417',
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '700',
  },
  communityItemMembers: {
    color: '#637D87',
    fontFamily: 'Epilogue, sans-serif',
    marginTop: 4,
  },
});