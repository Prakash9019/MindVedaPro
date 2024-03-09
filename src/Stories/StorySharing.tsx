// import * as React from "react";
// import {
//   FlatList,
//   ScrollView,
//   View,
//   StyleSheet,
//   TextInput,
//   Image,
//   Text,
//   TouchableOpacity,
// } from "react-native";
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../type';
//  import {  useNavigation } from '@react-navigation/native';
//  import AntDesign from 'react-native-vector-icons/AntDesign'

// const StorySharing = () => {
//   const [value, onChangeText] =React.useState("");
//  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   return (
//     <ScrollView>
//     <View style={styles.view1}>
//       <View style={styles.view2}>
//         <View style={styles.view3}>
//           <View style={styles.view4}>
//           <TouchableOpacity onPress={() => navigation.goBack()} >
//             <AntDesign size={25} name="arrowleft"/>
//           </TouchableOpacity>
//             <View style={styles.view5}>
//               <Text>Create a story</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.view6}>
//         <Image
//             source={{
//               uri: "../img1.png",
//             }}
//             style={styles.image2}
//           />
//           {/* <View style={styles.view7}> */}
//           <TextInput
//         editable
//         multiline={true}
//         numberOfLines={10}
//         onChangeText={text => onChangeText(text)}
//         value={value}
//         placeholder="What's your story?" style={styles.view7}
//       />
//             {/* <TextInput  placeholder="What's your story?" style={styles.view7}/> */}
//           {/* </View> */}
//         </View>
       
//         <View style={styles.view8}>
//           <View style={styles.view9}>
//             <View style={styles.view10}>
//               <View style={styles.view11} />
//               <View style={styles.view12} />
//               <View style={styles.view13} />
//             </View>
//             <View style={styles.view14}>
//               <Text>When did you start to feel better?</Text>
//             </View>
//           </View>
//           <View style={styles.view9}>
//             <View style={styles.view10}>
//               <View style={styles.view11} />
//               <View style={styles.view12} />
//               <View style={styles.view13} />
//             </View>
//             <View style={styles.view20}>
//               <Text>How would you describe the recovery process?</Text>
//             </View>
//           </View>
//           <View style={styles.view9}>
//             <View style={styles.view10}>
//               <View style={styles.view11} />
//               <View style={styles.view12} />
//               <View style={styles.view13} />
//             </View>
//             <View style={styles.view26}>
//               <Text>What are some tips you'd like to share?</Text>
//             </View>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.postButton}>
//         <Text style={styles.postButtonText}>Post story</Text>
//       </TouchableOpacity>

//         {/* <View style={styles.view27}>
//           <TouchableOpacity style={styles.view28}>
//             <Text>Post story</Text>
//           </TouchableOpacity>
//         </View> */}
//         <View style={styles.view29} />
//       </View>
//     </View>
//     </ScrollView>
//   );
// }
// export default StorySharing;
// const styles = StyleSheet.create({
//   view1: {
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     maxWidth: 480,
//     width: "100%",
//     flexDirection: "column",
//     justifyContent: "center",
//     marginHorizontal: 0,
//     marginVertical: "auto",
//   },
//   view2: {
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     width: "100%",
//     flexDirection: "column",
//   },
//   view3: {
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     width: "100%",
//     flexDirection: "column",
//     fontSize: 18,
//     color: "#121217",
//     fontWeight: "700",
//     paddingTop: 16,
//     paddingRight: 16,
//     paddingBottom: 8,
//     paddingLeft: 16,
//   },
//   view4: {
//     justifyContent: "space-between",
//     alignItems: "stretch",
//     display: "flex",
//     gap: 20,
//     paddingVertical: 12, // Padding for top and bottom
//     paddingHorizontal: 0, // Padding for left and right
//   },
//   image1: { position: "relative", width: 24, aspectRatio: 1 },
//   view5: {
//     // fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: "auto",
//   },
//   view6: {
//     justifyContent: "space-between",
//     alignItems: 'flex-start',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#DEDBE5',
//     borderStyle: 'solid',
//     backgroundColor: "#FFF",
//     alignSelf: "center",
//     display: "flex",
//     marginTop: 12,
//     width: "100%",
//     maxWidth: 358,
//     flexDirection: "column",
//     fontSize: 16,
//     color: "#BFBACF",
//     fontWeight: "400",
//     paddingTop: 16,
//     paddingRight: 80,
//     paddingBottom: 16,
//     paddingLeft: 17,
//   },
//   image2: { position: "relative", width: 40, aspectRatio: 1 },
//   view7: {
//     // fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     marginTop: 368,
//   },
//   view8: {
//     // alignItems: "stretch",
//     display: "flex",
//     marginTop: 12,
//     // width: "100%",
//     // flexDirection: "column",
//     paddingVertical: 0, // Padding for top and bottom
//     paddingHorizontal: 16, // Padding for left and right
//   },
//   view9: {
//   //  alignItems: "stretch",
//     display: "flex",
//      flexDirection:"row",
//     justifyContent: "space-between",
//     // gap: 2,
//   },
//   view10: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     display: "flex",
//     flexBasis: "0%",
//     flexDirection: "column",
//   },
//   view11: { backgroundColor:"blue", flexShrink: 0, height: 16 },
//   view12: {
//     borderRadius: 4,
//     backgroundColor:"blue",
//     marginTop: 4,
//     flexShrink: 0,
//     // marginRight:325,
//     height: 8,
//   },
//   view13: {
//     backgroundColor:"blue",
//     marginTop: 4,
//     flexShrink: 0,
//     height: 14,
//     // marginRight:325,
//   },
//   view14: {
//     color: "#121217",
//     // fontFeatureSettings: "'dlig' on",
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: "auto",
//     // margin: "auto 0",
//     fontFamily: 'Epilogue, sans-serif',
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 24, 
//   },
  
//   view20: {
//     backgroundColor:"blue",
//     // fontFeatureSettings: "'dlig' on",
//     alignSelf: "flex-start",
//     marginTop: 12,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: "auto",
//     fontFamily: 'Epilogue, sans-serif',
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 24, 
//   },
//   view26: {
//     color: "#121217",
//     // fontFeatureSettings: "'dlig' on",
//     flexGrow: 1,
//     // margin: "auto 0",
//     fontFamily: 'Epilogue, sans-serif',
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 24, 
//   },
//   view27: {
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 12,
//     backgroundColor: "#421AE5",
//     alignSelf: "center",
//     display: "flex",
//     marginTop: 12,
//     width: "100%",
//     maxWidth: 358,
//     fontSize: 16,
//     color: "#FFF",
//     fontWeight: "700",
//     letterSpacing: 0.24,
//     paddingVertical: 12, // Padding for top and bottom
//     paddingHorizontal: 60, // Padding for left and right
//   },
//   view28: {
//     // fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     alignItems: "stretch",
//     backgroundColor: "#421AE5",
//     justifyContent: "center",
//   },
//   view29: {
//     backgroundColor: "#FFF",
//     minHeight: 20,
//     marginTop: 12,
//     width: "100%",
//   },
//   postButton: {
//     marginTop: 12,
//     marginLeft: 12,
//     marginRight: 12,
//     backgroundColor: "#421AE5",
//     borderRadius: 12,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//   },
//   postButtonText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "700",
//   },
//   progressBarSection: {
//     marginTop: 12,
//     paddingVertical: 12,
//   },
//   progressBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#DEDBE5",
//     height: 8,
//     borderRadius: 4,
//   },
//   progressBarComplete: {
//     backgroundColor: "#141414",
//     height: 8,
//     flex: 2,
//   },
//   progressIndicator: {
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     backgroundColor: "#141414",
//     marginHorizontal: 4,
//   },
//   progressBarRemaining: {
//     flex: 3,
//     height: 8,
//     backgroundColor: "#DEDBE5",
//   },
//   questionText: {
//     marginTop: 8,
//   },

// });

import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView ,TextInput } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const StoryHeader = () => (
  <View style={styles.headerContainer}>
    <Image
      resizeMode="cover"
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0e34ffdba38061f3b26d2a43bae1e648d07cc208537a86428cafb3c4ded1a33?apiKey=42bb954c825745999302100cb42c8fd0&",
      }}
      style={styles.headerImage}
    />
    <View style={styles.headerTextContainer}>
      <Text>Create a story</Text>
    </View>
  </View>
);

interface StoryInputSectionProps {
  title: string;
}

const StorySection: React.FC<StoryInputSectionProps> = ({ title }) => (
  <View style={styles.storyInputSectionContainer}>
    <View style={styles.storyInputIndicatorContainer}>
      <View style={styles.storyInputIndicator} />
      <View style={{display:"flex" , flexDirection:"row",marginTop:0,alignItems:"center",}}>
      <View style={styles.storyInputIndicatorActive} />
      <View style={styles.storyInputTitleContainer}>
         <Text>{title}</Text>
         </View>
      </View>
      <View style={styles.storyInputIndicator} />
    </View>
    
  </View>
);


const StoryCreationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [value, onChangeText] =React.useState("");
  return (
    <ScrollView>
    <View style={styles.screenContainer}>
         {/* <View style={styles.view3}> */}
            <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
          <View style={styles.view5}>
          <Text style={styles.groupHeaderTitle}>Stories</Text>
           </View>
          </View>
        {/* </View> */}
      <StoryHeader />
      <View style={styles.storyContent}>
        <View style={styles.storyQuestionContainer}>
          <Image
            resizeMode="cover"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ab555df0b2e44c85e54dd36aaf74b7cf724cc212ddabc4b782c612d0343d903?apiKey=42bb954c825745999302100cb42c8fd0&",
            }}
            style={styles.storyQuestionImage}
          />
          <View style={styles.storyQuestionTextContainer}>
          <TextInput
        editable
        multiline={true}
        numberOfLines={10}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder="What's your story?" style={styles.view7}
      />
          </View>
        </View>
        {["When did you start to feel better?", "How would you describe the recovery process?", "What are some tips you'd like to share?"].map((title, index) => (
          <StorySection key={index} title={title} />
        ))}
      </View>
      <TouchableOpacity style={styles.postButton}  onPress={()=>{navigation.navigate("ThankForStory")}}>
        <Text style={styles.postButtonText}>Post Your Story</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view7: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Inter, sans-serif",
        // marginTop: 368,

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
    marginLeft:110,
    fontFamily: "Inter, sans-serif",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
  },
  groupHeaderTitle: {
    fontSize: 19,
    fontWeight: "700",
  },
  screenContainer: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // margin: "0 auto",
  },
  headerContainer: {
    marginLeft:9,
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    gap: 20,
    // padding: "12px 0",
  },
  headerImage: {
    marginLeft:9,
    position: "relative",
    width: 24,
    flexShrink: 0,
    aspectRatio: "1",
  },
  headerTextContainer: {
    fontFamily: "Inter, sans-serif",
    flexGrow: 1,
    flexShrink: 1,
    fontWeight:"bold",
    flexBasis: "auto",
  },
  storyContent: {
    // alignItems: "stretch",
    display: "flex",
    marginTop: 12,
    // backgroundColor:"grey",
    // marginLeft:12,
    // marginRight:162,
    width: "100%",
    flexDirection: "column",
    // padding: "0 16px",
  },
  storyQuestionContainer: {
    justifyContent: "space-between",
    // alignItems: "start",
    borderRadius: 12,
    borderColor: "rgba(222, 219, 229, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#FFF",
    alignSelf: "center",
    display: "flex",
    marginTop: 12,
    marginBottom:12,
    marginLeft: 12,
    marginRight:15,
    width: "94%",
    maxWidth: 358,
    flexDirection: "column",
    fontSize: 16,
    color: "#BFBACF",
    // whiteSpace: "nowrap",
    // padding: "16px 80px 16px 17px",
  },
  storyQuestionImage: {
    position: "relative",
    width: 40,
    aspectRatio: "1",
  },
  storyQuestionTextContainer: {
    fontFamily: "Inter, sans-serif",
    // backgroundColor:"grey",
    marginBottom: 50,
  },
  storyInputSectionContainer: {
    // alignItems: "stretch",
    display: "flex",
    marginLeft:15,
    // marginTop: 12,
    // gap: 8,
  },
  storyInputIndicatorContainer: {
    justifyContent: "center",
    // alignItems: "stretch",
    display: "flex",
    // flexDirection: "column",
    // backgroundColor:"yellow",
    // flexBasis: "0%",
    // padding: "0 16px",
  },
  storyInputIndicator: {
    backgroundColor: "#DEDBE5",
    flexShrink: 0,
    height: 19,
    marginLeft:5,
    // marginTop: 4,
    width: 3,
  },
  storyInputIndicatorActive: {
    borderRadius: 12,
    // backgroundColor: "#141414",
    backgroundColor: "#141414",
    // marginTop: 4,
    width: 12,
    height: 12,
    // flexShrink: 0,
  },
  storyInputTitleContainer: {
    marginLeft:23,
    fontFamily: "Inter, sans-serif",
    marginTop: 4,
  },
  postButton: {
    marginTop: 12,
    marginLeft: 53,
    marginRight: 53,
    backgroundColor: "#421AE5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 12,
  },
  postButtonText: {
    paddingRight:12,
    paddingLeft:12,
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  spacer: {
    backgroundColor: "#FFF",
    minHeight: 20,
    marginTop: 12,
    width: "100%",
  },
});

export default StoryCreationScreen;
