// // import React from "react";
// // import { View, StyleSheet, Image, Text, ImageSourcePropType } from "react-native";

// // interface ProfileInfoProps {
// //   profileImageUri: ImageSourcePropType;
// //   name: string;
// //   title: string;
// // }

// // const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileImageUri, name, title }) => (
// //   <View style={styles.profileContainer}>
// //     <Image resizeMode="cover" source={profileImageUri} style={styles.profileImage} />
// //     <View style={styles.profileTextContainer}>
// //       <Text style={styles.profileName}>{name}</Text>
// //       <Text style={styles.profileTitle}>{title}</Text>
// //     </View>
// //   </View>
// // );

// // interface TipItemProps {
// //   tipImageUri: ImageSourcePropType;
// //   tipText: string;
// // }

// // const TipItem: React.FC<TipItemProps> = ({ tipImageUri, tipText }) => (
// //   <View style={styles.tipContainer}>
// //     <Image resizeMode="cover" source={tipImageUri} style={styles.tipImage} />
// //     <View style={styles.tipTextContainer}>
// //       <Text>{tipText}</Text>
// //     </View>
// //   </View>
// // );
// // 

// // const SocialMediaActions: React.FC = () => (
// //   <View style={styles.socialMediaContainer}>
// //     <Image resizeMode="cover" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f3026f054493c8ba0b3660a4efff31eec228d6dee0f9c6fa824faea2b7d4d7c?apiKey=42bb954c825745999302100cb42c8fd0&" }} style={styles.socialMediaImage} />
// //     <Image resizeMode="cover" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/95c8f0dd8b2b971db6197a8581c3ebe98b551f23890792f93b17d5d6b78236a0?apiKey=42bb954c825745999302100cb42c8fd0&" }} style={styles.socialMediaImage} />
// //     <Image resizeMode="cover" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d42512f91bb46ea11e86857d2c74a522189ad54b0e86b67cd0c77e386d592b5f?apiKey=42bb954c825745999302100cb42c8fd0&" }} style={styles.socialMediaImage} />
// //   </View>
// // );

// // const ArticleScreen: React.FC = () => (
// //   <View style={styles.screenContainer}>
// //     <ProfileInfo profileImageUri={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/54aa71ad7638140251d45c2a1cbe31fe5991738fe9b6523e5dc6e0e6faa63ea8?apiKey=42bb954c825745999302100cb42c8fd0&" }} name="Dr. Emilia Clarke" title="Mental Health Counsellor" />
// //     <View style={styles.articleContainer}>
// //       <Text style={styles.articleTitle}>How to Overcome Anxiety</Text>
// //       <Text style={styles.articleContent}>
// //         Anxiety is a normal human emotion, but it can become a problem when it's constant and overwhelming. 
// //         Here are some tips for overcoming it:
// //       </Text>
// //     </View>
// //     <View style={styles.tipsContainer}>
// //       {[
// //         { tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac9a22e60e8a037f37c3771df03e00a15a9d13d4de2b5ac042875f3503c895?apiKey=42bb954c825745999302100cb42c8fd0&" },Text: "Understand what's causing the anxiety" },
// //         { tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/631cbb89b62539b3a8d6e99ac268fdb86adcdeae33382cb199c1a5636547420f?apiKey=42bb954c825745999302100cb42c8fd0&" }, tipText: "Accept that you're anxious" },
// //         { tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e20f30374563ad6ce3640b2fc100d3aca10ce2a9e6c574e169f17f5c90d973f8?apiKey=42bb954c825745999302100cb42c8fd0&" }, tipText: "Question your thoughts" },
// //         { tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc173040cc422fa45a7d33c68cfa3295d933490690b58ad30e1a9685bd308866?apiKey=42bb954c825745999302100cb42c8fd0&" }, tipText: "Use a calming strategy" },
// //         { tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f696a7ea1d89e543c209fdc71807648aa717a0a17a4cc5779aee951796a7800?apiKey=42bb954c825745999302100cb42c8fd0&" }, tipText: "Challenge yourself" },
// //       ].map((tip, index) => (
// //         <TipItem key={index} tipImageUri={tip.tipImageUri} tipText={tip.tipText} />
// //       ))}
// //     </View>
// //     <SocialMediaActions />
// //   </View>
// // );

// // const styles = StyleSheet.create({
// //   screenContainer: {
// //     backgroundColor: "#FFF",
// //     alignItems: "center",
// //     flex: 1,
// //   },
// //   profileContainer: {
// //     flexDirection: "row",
// //     padding: 16,
// //   },
// //   profileImage: {
// //     width: 56,
// //     height: 56,
// //     borderRadius: 28,
// //     marginRight: 16  },
// //   profileTextContainer: {
// //     justifyContent: "center",
// //   },
// //   profileName: {
// //     fontWeight: "bold",
// //   },
// //   profileTitle: {
// //     color: "#aaa",
// //   },
// //   articleContainer: {
// //     marginHorizontal: 16,
// //     marginTop: 20,
// //   },
// //   articleTitle: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //   },
// //   articleContent: {
// //     marginTop: 8,
// //   },
// //   tipsContainer: {
// //     marginTop: 32,
// //     marginHorizontal: 16,
// //   },
// //   tipContainer: {
// //     flexDirection: "row",
// //     marginBottom: 16,
// //   },
// //   tipImage: {
// //     width: 100,
// //     height: 100,
// //     marginRight: 16,
// //   },
// //   tipTextContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //   },
// //   socialMediaContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-evenly",
// //     width: "100%",
// //     marginBottom: 16,
// //   },
// //   socialMediaImage: {
// //     width: 50,
// //     height: 50,
// //   },
// // });

// // export default ArticleScreen;
import React from 'react';
import { View, StyleSheet, Image, Text, ImageSourcePropType, ScrollView,TouchableOpacity,TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign'
 
interface ProfileInfoProps {
  profileImageUri: ImageSourcePropType;
  name: string;
  title: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileImageUri, name, title }) => (
  <View style={styles.profileContainer}>
    <Image resizeMode="cover" source={profileImageUri} style={styles.profileImage} />
    <View style={styles.profileTextContainer}>
      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.profileTitle}>{title}</Text>
    </View>
  </View>
);

interface TipItemProps {
  tipImageUri: ImageSourcePropType;
  tipText: string;
}

const TipItem: React.FC<TipItemProps> = ({ tipImageUri, tipText }) => {
  // const [isSelected, setSelection] = React.useState(false);
  return (
  <View style={styles.tipContainer}>
     <AntDesign size={25} name="caretright" style={styles.tipImage}/>
    {/* <Image resizeMode="cover" source={tipImageUri} style={styles.tipImage} /> */}
    <View style={styles.tipTextContainer}>
      <Text>{tipText}</Text>
    </View>
  </View>
)};

const SocialMediaActions: React.FC = () => (
  <View style={styles.socialMediaContainer}>
    <Image
      resizeMode="cover"
      source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f3026f054493c8ba0b3660a4efff31eec228d6dee0f9c6fa824faea2b7d4d7c?apiKey=42bb954c825745999302100cb42c8fd0&" }}
      style={styles.socialMediaImage}
    />
    <Image
      resizeMode="cover"
      source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/95c8f0dd8b2b971db6197a8581c3ebe98b551f23890792f93b17d5d6b78236a0?apiKey=42bb954c825745999302100cb42c8fd0&" }}
      style={styles.socialMediaImage}
    />
    <Image
      resizeMode="cover"
      source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d42512f91bb46ea11e86857d2c74a522189ad54b0e86b67cd0c77e386d592b5f?apiKey=42bb954c825745999302100cb42c8fd0&" }}
      style={styles.socialMediaImage}
    />
  </View>
);

const ArticleScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
return (
  <ScrollView>
     <View style={styles.view3}>
          <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
            <View style={styles.view5}>
              <Text style={{fontSize:16,fontWeight:"600"}}> Blog</Text>
            </View>
          </View>
        </View>
  <View style={styles.screenContainer}>
    <ProfileInfo
      profileImageUri={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/54aa71ad7638140251d45c2a1cbe31fe5991738fe9b6523e5dc6e0e6faa63ea8?apiKey=42bb954c825745999302100cb42c8fd0&" }}
      name="Dr. Emilia Clarke"
      title="Mental Health Counsellor"
    />
    <View style={styles.articleContainer}>
      <Text style={styles.articleTitle}>How to Overcome Anxiety</Text>
      <Text style={styles.articleContent}>
        Anxiety is a normal human emotion, but it can become a problem when it's constant and overwhelming. Here are some tips for overcoming it:
      </Text>
    </View>
    <View style={styles.tipsContainer}>
      {[
        {
          tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac9a22e60e8a037f37c3771df03e00a15a9d13d4de2b5ac042875f3503c895?apiKey=42bb954c825745999302100cb42c8fd0&" },
          tipText: "Understand what's causing the anxiety"
        },
        {
          tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/631cbb89b62539b3a8d6e99ac268fdb86adcdeae33382cb199c1a5636547420f?apiKey=42bb954c825745999302100cb42c8fd0&" },
          tipText: "Accept that you're anxious"
        },
        {
          tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e20f30374563ad6ce3640b2fc100d3aca10ce2a9e6c574e169f17f5c90d973f8?apiKey=42bb954c825745999302100cb42c8fd0&" },
          tipText: "Question your thoughts"
        },
        {
          tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc173040cc422fa45a7d33c68cfa3295d933490690b58ad30e1a9685bd308866?apiKey=42bb954c825745999302100cb42c8fd0&" },
          tipText: "Use a calming strategy"
        },
        {
          tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f696a7ea1d89e543c209fdc71807648aa717a0a17a4cc5779aee951796a7800?apiKey=42bb954c825745999302100cb42c8fd0&" },
          tipText: "Challenge yourself"
        },
      ].map((tip, index) => (
        <TipItem key={index.toString()} tipImageUri={tip.tipImageUri} tipText={tip.tipText} />
      ))}
    </View>
    <SocialMediaActions />
    
    <View style={styles.commentSection}>
        <Image
          resizeMode="cover"
          source={require("../n1.jpg")}
          style={styles.commentProfileImage}
        />
        <TextInput
          style={styles.commentInput}
          placeholder="Write a comment..."
          placeholderTextColor="#4F7596"
        />
        <TouchableOpacity>
          <Image
            resizeMode="cover"
            source={require("../n1.jpg")}
            style={styles.commentButtonImage}
          />
        </TouchableOpacity>
      </View>
  </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
  commentSection: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 16,
  },
  commentProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commentInput: {
    marginLeft: 16,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#E8EDF2",
    paddingVertical: 8,
  },
  commentButtonImage: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
      sendButton: {
        justifyContent: "center",
        alignItems: "center",
      },
      sendIcon: {
        width: 30,
        height: 30,
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
    marginLeft:118,
    fontFamily: "Inter, sans-serif",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
  },
  image1: { position: "relative", width: 24, aspectRatio: 1 },

  screenContainer: {
    backgroundColor: "#FFF",
    alignItems: "center",
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    padding: 6,
  },
  profileImage: {
    width: 76,
    height: 76,
    borderRadius: 28,
    marginRight: 16,
  },
  profileTextContainer: {
    fontSize: 18,
    justifyContent: "center",
  },
  profileName: {
    fontWeight: "bold",
  },
  profileTitle: {
    color: "#aaa",
  },
  articleContainer: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  articleTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  articleContent: {
    marginTop: 8,
  },
  tipsContainer: {
    width:500,
    // marginLeft:2,
    // backgroundColor:"green",
    marginTop: 32,
    marginHorizontal: 16,
  },
  tipContainer: {
    flexDirection: "row",
    marginBottom: 6,
  },
  tipImage: {
    width: 30,
    height: 30,
    marginLeft:90,
    borderColor:"black",
    marginRight: 8,
    borderStyle:"solid",
    // backgroundColor:"grey"
  },
  tipTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 16,
  },
  socialMediaImage: {
    width: 50,
    height: 50,
  },
});

export default ArticleScreen;
// import React from "react";
// import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ImageSourcePropType } from "react-native";

// interface ProfileSectionProps {
//   profileImageUri: ImageSourcePropType;
//   name: string;
//   title: string;
// }

// const ProfileSection: React.FC<ProfileSectionProps> = ({ profileImageUri, name, title }) => {
//   return (
//     <View style={styles.profileSectionContainer}>
//       <Image resizeMode="cover" source={profileImageUri} style={styles.profileImage} />
//       <View style={styles.profileTextContainer}>
//         <Text style={styles.profileName}>{name}</Text>
//         <Text style={styles.profileTitle}>{title}</Text>
//       </View>
//     </View>
//   );
// };

// interface TipProps {
//   imageUri: ImageSourcePropType;
//   text: string;
// }

// interface TipsSectionProps {
//   tips: TipProps[];
// }

// const TipsSection: React.FC<TipsSectionProps> = ({ tips }) => {
//   return (
//     <View>
//       {tips.map((tip, index) => (
//         <View key={index} style={styles.tipContainer}>
//           <Image resizeMode="cover" source={tip.imageUri} style={styles.tipImage} />
//           <View style={styles.tipTextContainer}>
//             <Text>{tip.text}</Text>
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// };

// interface IconProps {
//   uri: ImageSourcePropType;
// }

// interface FooterIconsProps {
//   icons: IconProps[];
// }

// const FooterIcons: React.FC<FooterIconsProps> = ({ icons }) => {
//   return (
//     <View style={styles.footerIconsContainer}>
//       {icons.map((icon, index) => (
//         <Image key={index} resizeMode="cover" source={icon.uri} style={styles.footerIcon} />
//       ))}
//     </View>
//   );
// };

// const ArticleScreen: React.FC = () => {
//   const tips: TipProps[] = [
//     {
//       imageUri: { uri: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1ac9a22e60e8a037f37c3771df03e00a15a9d13d4de2b5ac042875f3503c895" },
//       text: "Understand what's causing the anxiety",
//     },
//     {
//       imageUri: { uri: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F631cbb89b62539b3a8d6e99ac268fdb86adcdeae33382cb199c1a5636547420f" },
//       text: "Accept that you're anxious",
//     },
//     // Add more tips as required...
//   ];

//   const footerIcons: IconProps[] = [
//     {
//       uri: { uri: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f3026f054493c8ba0b3660a4efff31eec228d6dee0f9c6fa824faea2b7d4d7c" },
//     },
//     // Add more icons as required...
//   ];

//   return (
//     <View style={styles.container}>
//       <ProfileSection
//         profileImageUri={{ uri: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F54aa71ad7638140251d45c2a1cbe31fe5991738fe9b6523e5dc6e0e6faa63ea8" }}
//         name="Dr. Emilia Clarke"
//         title="Mental Health Counsellor"
//       />
//       <View style={styles.articleSection}>
//         <Text style={styles.articleTitle}>How to Overcome Anxiety</Text>
//         <Text style={styles.articleContent}>
//           Anxiety is a normal human emotion, but it can become a problem when it's constant and overwhelming. Here are some tips for overcoming it:
//         </Text>
//       </View>
//       <TipsSection tips={tips} />
      // <FooterIcons icons={footerIcons} />
      // <View style={styles.commentSection}>
      //   <TextInput style={styles.commentInput} placeholder="Write a comment..." />
      //   <TouchableOpacity style={styles.sendButton}>
      //     <Image
      //       resizeMode="cover"
      //       source={{ uri: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2FsendIconUri" }}
      //       style={styles.sendIcon}
      //     />
      //   </TouchableOpacity>
      // </View>
    // </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F7FAFC",
//     padding: 16,
//   },
//   profileSectionContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 12,
//   },
//   profileTextContainer: {
//     justifyContent: "center",
//   },
//   profileName: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   profileTitle: {
//     fontSize: 14,
//     color: "#4F7596",
//   },
//   articleSection: {
//     marginBottom: 20,
//   },
//   articleTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   articleContent: {
//     fontSize: 16,
//   },
//   tipContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   tipImage: {
//     width: 60,
//     height: 60,
//     marginRight: 12,
//   },
//   tipTextContainer: {
//     justifyContent: "center",
//     flex: 1,
//   },
//   footerIconsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   footerIcon: {
//     width: 30,
//     height: 30,
//   },
//   commentSection: {
//     flexDirection: "row",
//     marginTop: 20,
//   },
//   commentInput: {
//     flex: 1,
//     borderColor: "#E8EDF2",
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingHorizontal: 12,
//     height: 40,
//     marginRight: 8,
//   },
//   sendButton: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   sendIcon: {
//     width: 30,
//     height: 30,
//   },
// });

// export default ArticleScreen;