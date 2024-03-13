import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign'

// const BipolarStory = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   return (
//     <View style={styles.view1}>
//       <View style={styles.view2}>
//         <View style={styles.view3}>
//           <View style={styles.view4}>
//           <TouchableOpacity onPress={() => navigation.goBack()} >
//             <AntDesign size={25} name="arrowleft"/>
//           </TouchableOpacity>
//             <View>
//               <Text  style={styles.view5}>Stories</Text>
//             </View>
//             {/* <Image
//               resizeMode="auto"
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ad74b22413ab39e2e1ba6f1097ec856aca9ce306093d609b472004a13bd8b54?apiKey=42bb954c825745999302100cb42c8fd0&",
//               }}
//               style={styles.image2}
//             /> */}
//           </View>
//         </View>
//         <View style={styles.view15}>
//           <Text>Bipolar Disorder Stories</Text>
//         </View>
//         <View style={styles.view16}>
//           <View style={styles.view17}>
//             <View style={styles.view18}>
//               <View >
//                 <Text style={styles.view19} >Bipolar Disorder</Text>
//               </View>
//               <View >
//                 <Text style={styles.view20}>A.Prakash</Text>
//               </View>
//               <View style={styles.view21}>
//                 <Text>Finding peace: My battle with bipolar disorder</Text>
//               </View>
//             </View>
//             {/* <Image
//               resizeMode="auto"
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/585db41f865b6587aedbfa28100005b344f3cdf64a19307cb96791a07c67e552?apiKey=42bb954c825745999302100cb42c8fd0&",
//               }}
//               style={styles.image3}
//             /> */}
//           </View>
//         </View>
//         <View style={styles.view16}>
//           <View style={styles.view17}>
//             <View style={styles.view18}>
//               <View >
//                 <Text style={styles.view19}>Bipolar Disorder</Text>
//               </View>
//               <View >
//                 <Text style={styles.view20} >Pavan Kumar</Text>
//               </View>
//               <View style={styles.view21}>
//                 <Text>
//                   Riding the waves: My experience with bipolar disorder
//                 </Text>
//               </View>
//             </View>
//             {/* <Image
//               resizeMode="auto"
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4311c00cbc38fda4b6a9f82435e6992c096a648028f47889688420b17334c08b?apiKey=42bb954c825745999302100cb42c8fd0&",
//               }}
//               style={styles.image4}
//             /> */}
//           </View>
//         </View>
//         <View style={styles.view28}>
//           <View style={styles.view29}>
//             <View >
//               <Text style={styles.view30} >Do you have a story to share?</Text>
//             </View>
//             <View style={styles.view31}>
//               <View style={styles.view32}>
//                 <Text>Share</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// export default BipolarStory;

// const styles = StyleSheet.create({
//   view1: {
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     maxWidth: 480,
//     width: "100%",
//     flexDirection: "column",
//     justifyContent: "center",
//     color: "#0D141C",
//     marginHorizontal: 0,
//     marginVertical: "auto",
//   },
//   view2: {
//     alignItems: "stretch",
//     backgroundColor: "#F7FAFC",
//     display: "flex",
//     width: "100%",
//     flexDirection: "column",
//   },
//   view3: {
//     alignItems: "stretch",
//     backgroundColor: "#F7FAFC",
//     display: "flex",
//     width: "100%",
//     flexDirection: "column",
//     fontSize: 18,
//     fontWeight: "700",
//     paddingLeft: 16,
//     paddingRight: 16,
//     paddingTop: 16,
//     paddingBottom: 8,
//   },
//   view4: {
//     justifyContent: "space-between",
//     alignItems: "stretch",
//     display: "flex",
//     gap: 20,
//     padding: 12,
//     paddingLeft: 0,
//     paddingRight: 0,
//   },
//   image1: { position: "relative", width: 24, aspectRatio: 1 },
//   view5: {
//     // fontFeatureSettings: "'dlig' on",
//     fontFamily: "Epilogue, sans-serif",
//   },
//   image2: { position: "relative", width: 24, aspectRatio: 1 },
//   view15: {
//     // fontFeatureSettings: "'dlig' on",
//     alignSelf: "flex-start",
//     marginTop: 20,
//     marginLeft: 16,
//     fontFamily: 'Epilogue, sans-serif',
//     fontWeight: '700',
//     fontSize: 22,
//   },
//   view16: {
//     alignItems: "stretch",
//     backgroundColor: "#F7FAFC",
//     display: "flex",
//     marginTop: 12,
//     width: "100%",
//     flexDirection: "column",
//     justifyContent: "center",
//     fontSize: 14,
//     color: "#4F7596",
//     fontWeight: "400",
//     padding: 16,
//   },
//   view17: {
//     justifyContent: "space-between",
//     alignItems: "stretch",
//     display: "flex",
//     gap: 16,
//   },
//   view18: {
//     alignItems: "stretch",
//     display: "flex",
//     flexGrow: 1,
//     flexBasis: "0%",
//     flexDirection: "column",
//     paddingLeft: 0,
//     paddingRight: 25,
//     paddingTop: 0,
//     paddingBottom: 21,
//   },
//   view19: {
//     // fontFeatureSettings: "'dlig' on",
//     fontFamily: "Epilogue, sans-serif",
//   },
//   view20: {
//     color: "#0D141C",
//     // fontFeatureSettings: "'dlig' on",
//     marginTop: 4,
//     fontFamily: 'Epilogue, sans-serif',
//     fontWeight: '700',
//     fontSize: 16,
//   },
//   view21: {
//     // fontFeatureSettings: "'dlig' on",
//     fontFamily: "Epilogue, sans-serif",
//     marginTop: 4,
//   },
//   image3: {
//     position: "relative",
//     width: 114,
//     maxWidth: "100%",
//     aspectRatio: "1.25",
//   },
//   view28: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     backgroundColor: "#F7FAFC",
//     display: "flex",
//     marginTop: 193,
//     width: "100%",
//     flexDirection: "column",
//     padding: 12,
//     paddingLeft: 16,
//     paddingRight: 16,
//   },
//   view29: {
//     alignItems: "stretch",
//     display: "flex",
//     justifyContent: "space-between",
//     gap: 20,
//   },
//   view30: {
//     // fontFeatureSettings: "'dlig' on",
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: "auto",
//     // margin: "auto 0",
//     flexDirection: 'row', // Assuming you want to center horizontally
//     justifyContent: 'center', // Center horizontally
//     alignItems: 'center', // Center vertically
//     flex: 1,
//     fontFamily: 'Epilogue, sans-serif',
//     fontWeight: '400',
//     fontSize: 16,
//   },
//   view31: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     borderRadius: 12,
//     backgroundColor: "#E8EDF2",
//     display: "flex",
//     flexBasis: "0%",
//     flexDirection: "column",
//     fontSize: 14,
//     fontWeight: "500",
//     padding: 6,
//     paddingLeft: 22,
//     paddingRight: 22,
//   },
//   view32: {
//     // fontFeatureSettings: "'dlig' on",
//     fontFamily: "Epilogue, sans-serif",
//     alignItems: "stretch",
//     backgroundColor: "#E8EDF2",
//     aspectRatio: "1.9",
//     justifyContent: "center",
//   },
// });

interface StoryCategoryProps {
  title: string;
}

const StoryCategory = ({ title }: StoryCategoryProps) => (
  <View style={styles.storyCategory}>
    <Text>{title}</Text>
  </View>
);

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
          <View style={styles.view5}>
          <Text style={styles.groupHeaderTitle}>Bipolar Support Group</Text>
           </View>
          </View>
        {/* <Image resizeMode="cover" source={{ uri: "profileIconUrl" }} style={styles.headerIcon} /> */}
      </View>
      
      <View style={styles.storyCategoriesContainer}>
        {storyCategories.map((category, index) => (
          <StoryCategory key={index} title={category} />
        ))}
      </View>

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



