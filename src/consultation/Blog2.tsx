// import React from "react";
// import { View, StyleSheet, Image, Text, ImageSourcePropType } from "react-native";

// interface ProfileInfoProps {
//   profileImageUri: ImageSourcePropType;
//   name: string;
//   title: string;
// }

// const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileImageUri, name, title }) => (
//   <View style={styles.profileContainer}>
//     <Image resizeMode="cover" source={profileImageUri} style={styles.profileImage} />
//     <View style={styles.profileTextContainer}>
//       <Text style={styles.profileName}>{name}</Text>
//       <Text style={styles.profileTitle}>{title}</Text>
//     </View>
//   </View>
// );

// interface TipItemProps {
//   tipImageUri: ImageSourcePropType;
//   tipText: string;
// }

// const TipItem: React.FC<TipItemProps> = ({ tipImageUri, tipText }) => (
//   <View style={styles.tipContainer}>
//     <Image resizeMode="cover" source={tipImageUri} style={styles.tipImage} />
//     <View style={styles.tipTextContainer}>
//       <Text>{tipText}</Text>
//     </View>
//   </View>
// );
// 

// const SocialMediaActions: React.FC = () => (
//   <View style={styles.socialMediaContainer}>
//     <Image resizeMode="cover" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f3026f054493c8ba0b3660a4efff31eec228d6dee0f9c6fa824faea2b7d4d7c?apiKey=42bb954c825745999302100cb42c8fd0&" }} style={styles.socialMediaImage} />
//     <Image resizeMode="cover" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/95c8f0dd8b2b971db6197a8581c3ebe98b551f23890792f93b17d5d6b78236a0?apiKey=42bb954c825745999302100cb42c8fd0&" }} style={styles.socialMediaImage} />
//     <Image resizeMode="cover" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d42512f91bb46ea11e86857d2c74a522189ad54b0e86b67cd0c77e386d592b5f?apiKey=42bb954c825745999302100cb42c8fd0&" }} style={styles.socialMediaImage} />
//   </View>
// );

// const ArticleScreen: React.FC = () => (
//   <View style={styles.screenContainer}>
//     <ProfileInfo profileImageUri={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/54aa71ad7638140251d45c2a1cbe31fe5991738fe9b6523e5dc6e0e6faa63ea8?apiKey=42bb954c825745999302100cb42c8fd0&" }} name="Dr. Emilia Clarke" title="Mental Health Counsellor" />
//     <View style={styles.articleContainer}>
//       <Text style={styles.articleTitle}>How to Overcome Anxiety</Text>
//       <Text style={styles.articleContent}>
//         Anxiety is a normal human emotion, but it can become a problem when it's constant and overwhelming. 
//         Here are some tips for overcoming it:
//       </Text>
//     </View>
//     <View style={styles.tipsContainer}>
//       {[
//         { tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac9a22e60e8a037f37c3771df03e00a15a9d13d4de2b5ac042875f3503c895?apiKey=42bb954c825745999302100cb42c8fd0&" },Text: "Understand what's causing the anxiety" },
//         { tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/631cbb89b62539b3a8d6e99ac268fdb86adcdeae33382cb199c1a5636547420f?apiKey=42bb954c825745999302100cb42c8fd0&" }, tipText: "Accept that you're anxious" },
//         { tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e20f30374563ad6ce3640b2fc100d3aca10ce2a9e6c574e169f17f5c90d973f8?apiKey=42bb954c825745999302100cb42c8fd0&" }, tipText: "Question your thoughts" },
//         { tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc173040cc422fa45a7d33c68cfa3295d933490690b58ad30e1a9685bd308866?apiKey=42bb954c825745999302100cb42c8fd0&" }, tipText: "Use a calming strategy" },
//         { tipImageUri: { uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f696a7ea1d89e543c209fdc71807648aa717a0a17a4cc5779aee951796a7800?apiKey=42bb954c825745999302100cb42c8fd0&" }, tipText: "Challenge yourself" },
//       ].map((tip, index) => (
//         <TipItem key={index} tipImageUri={tip.tipImageUri} tipText={tip.tipText} />
//       ))}
//     </View>
//     <SocialMediaActions />
//   </View>
// );

// const styles = StyleSheet.create({
//   screenContainer: {
//     backgroundColor: "#FFF",
//     alignItems: "center",
//     flex: 1,
//   },
//   profileContainer: {
//     flexDirection: "row",
//     padding: 16,
//   },
//   profileImage: {
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     marginRight: 16  },
//   profileTextContainer: {
//     justifyContent: "center",
//   },
//   profileName: {
//     fontWeight: "bold",
//   },
//   profileTitle: {
//     color: "#aaa",
//   },
//   articleContainer: {
//     marginHorizontal: 16,
//     marginTop: 20,
//   },
//   articleTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   articleContent: {
//     marginTop: 8,
//   },
//   tipsContainer: {
//     marginTop: 32,
//     marginHorizontal: 16,
//   },
//   tipContainer: {
//     flexDirection: "row",
//     marginBottom: 16,
//   },
//   tipImage: {
//     width: 100,
//     height: 100,
//     marginRight: 16,
//   },
//   tipTextContainer: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   socialMediaContainer: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     width: "100%",
//     marginBottom: 16,
//   },
//   socialMediaImage: {
//     width: 50,
//     height: 50,
//   },
// });

// export default ArticleScreen;
import React from 'react';
import { View, StyleSheet, Image, Text, ImageSourcePropType, ScrollView,TouchableOpacity } from 'react-native';
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

const TipItem: React.FC<TipItemProps> = ({ tipImageUri, tipText }) => (
  <View style={styles.tipContainer}>
    <Image resizeMode="cover" source={tipImageUri} style={styles.tipImage} />
    <View style={styles.tipTextContainer}>
      <Text>{tipText}</Text>
    </View>
  </View>
);

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
              <Text>Blog</Text>
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
  </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    gap: 20,
    paddingBottom: 12,
    paddingTop:12,
  },
  image1: { position: "relative", width: 24, aspectRatio: 1 },
  view5: {
    
    fontFamily: "Inter, sans-serif",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  screenContainer: {
    backgroundColor: "#FFF",
    alignItems: "center",
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    padding: 16,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  profileTextContainer: {
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
    marginBottom: 16,
  },
  tipImage: {
    width: 100,
    height: 100,
    marginRight: 16,
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