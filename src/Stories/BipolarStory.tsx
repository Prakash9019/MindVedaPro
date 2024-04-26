import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign'


interface StoryCategoryProps {
  title: string;
}

// const StoryCategory = ({ title }: StoryCategoryProps) => (
//   <View style={styles.storyCategory}>
//     <Text>{title}</Text>
//   </View>
// );

interface StoryPreviewProps {
  title: string;
  author: string;
  summary: string;
  imageUrl: string;
}

const StoryPreview = ({ title, author, summary, imageUrl }: StoryPreviewProps) => (
  <View style={styles.storyPreviewContainer}>
    <View style={styles.storyPreviewTextContainer}>
      <Text style={styles.storyPreviewTitle}>{title}</Text>
      <Text style={styles.storyPreviewAuthor}>{author}</Text>
      <Text>{summary}</Text>
    </View>
    <Image resizeMode="cover" source={require("../n1.jpg")} style={styles.storyPreviewImage} />
  </View>
);

export const BipolarStory = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const storyCategories = ["All stories", "Anxiety", "Depression", "Paranoia", "Schizophrenia", "Bipolar Disorder"];
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
        
          </View>
        {/* <Image resizeMode="cover" source={{ uri: "profileIconUrl" }} style={styles.headerIcon} /> */}
      </View>
      <View style={styles.view8}>
            <AntDesign style={styles.searchIcon} size={25} name="search1"/>
            <TextInput editable multiline={true} numberOfLines={10} placeholder="Search your stories" style={styles.view9}
      />
           </View>
{/*       
      <View style={styles.storyCategoriesContainer}>
        {storyCategories.map((category, index) => (
          <StoryCategory key={index} title={category} />
        ))}
      </View> */}

      <Text style={styles.sectionTitle}>Bipolar Disorder Stories</Text>
      
      <StoryPreview
        title="Bipolar Disorder"
        author="A.Prakash"
        summary="Finding peace: My battle with bipolar disorder"
        imageUrl="storyImageUrl"
      />
      
      <StoryPreview
        title="Bipolar Disorder"
        author="Meesala Pavan"
        summary="Living with bipolar disorder: A personal story"
        imageUrl="anotherStoryImageUrl"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  searchIcon:{
    padding:10,
    marginLeft:20,
},
  view9: {
    borderRadius: 12,
    backgroundColor: "#E8F0F2",
    gap: 2,
     width:"90%",
     marginLeft:12,
     marginRight:12,
    height:60,
    fontSize: 16,
    color: "#4F8296",
    fontWeight: "400",
  //1  //1 padding: "12px 16px",
  },
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
    marginLeft:40,
    fontFamily: "Inter, sans-serif",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
  },
  groupHeaderTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  storyCategoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 16,
  },
  storyCategory: {
    padding: 8,
    backgroundColor: "#E8EDF2",
    borderRadius: 12,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 16,
  },
  storyPreviewContainer: {
    flexDirection: "row",
    padding: 16,
  },
  storyPreviewTextContainer: {
    flex: 1,
  },
  storyPreviewTitle: {
    fontWeight: "bold",
  },
  storyPreviewAuthor: {
    fontStyle: "italic",
  },
  storyPreviewImage: {
    width: 100,
    height: 100,
    marginLeft: 16,
  },
});

export default BipolarStory;



