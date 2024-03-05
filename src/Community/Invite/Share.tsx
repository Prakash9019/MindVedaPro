// import * as React from "react";
// import {
//   FlatList,
//   ScrollView,
//   View,
//   StyleSheet,
//   Image,
//   Text,
// } from "react-native";

// function MyComponent(props) {
//   return (
//     <View style={styles.view1}>
//       <View style={styles.view2}>
//         <View style={styles.view3}>
//           <Image
//             resizeMode="auto"
//             source={{
//               uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/261a85c8714f1107caa0a6bbad4b8a0503e6ac798a5ae24288fc03c0cda7b0cf?apiKey=42bb954c825745999302100cb42c8fd0&",
//             }}
//             style={styles.image1}
//           />
//           <View style={styles.view4}>
//             <Text>Share Link</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.view5}>
//         <Text>Share this link with your community</Text>
//       </View>
//       <View style={styles.view6}>
//         <View style={styles.view7}>
//           <View style={styles.view8}>
//             <Text>https://www.talkspace.com/invite/bipolar-disorder-group</Text>
//           </View>
//           <View style={styles.view9}>
//             <Text>Copy link to clipboard</Text>
//           </View>
//         </View>
//         <View style={styles.view10}>
//           <View style={styles.view11}>
//             <Text>Copy Link</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.view12}>
//         <View style={styles.view13}>
//           <View style={styles.view14}>
//             <Image
//               resizeMode="auto"
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/317d89a4aa0af44dc856b7c0fbc4a5d78180dfb159df684753c358ff9fd9d68b?apiKey=42bb954c825745999302100cb42c8fd0&",
//               }}
//               style={styles.image2}
//             />
//           </View>
//           <View style={styles.view15}>
//             <View style={styles.view16}>
//               <Text>Facebook</Text>
//             </View>
//             <View style={styles.view17}>
//               <Text>Share on Facebook</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.view18}>
//           <View style={styles.view19}>
//             <Text>Share</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.view20}>
//         <View style={styles.view21}>
//           <View style={styles.view22}>
//             <Image
//               resizeMode="auto"
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ba7108ec23498e2c87857353b36e26ae885a2bd37b2ce697f5b0630e7382e22?apiKey=42bb954c825745999302100cb42c8fd0&",
//               }}
//               style={styles.image3}
//             />
//           </View>
//           <View style={styles.view23}>
//             <View style={styles.view24}>
//               <Text>Twitter</Text>
//             </View>
//             <View style={styles.view25}>
//               <Text>Tweet this link</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.view26}>
//           <View style={styles.view27}>
//             <Text>Tweet</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.view28}>
//         <View style={styles.view29}>
//           <View style={styles.view30}>
//             <Image
//               resizeMode="auto"
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/09be4c0e9fda7029c80abce4cf258b891f7e9a2d2dca870aaca252af1aa7fe5b?apiKey=42bb954c825745999302100cb42c8fd0&",
//               }}
//               style={styles.image4}
//             />
//           </View>
//           <View style={styles.view31}>
//             <View style={styles.view32}>
//               <Text>WhatsApp</Text>
//             </View>
//             <View style={styles.view33}>
//               <Text>Send link via WhatsApp</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.view34}>
//           <View style={styles.view35}>
//             <Text>Send</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.view36}>
//         <View style={styles.view37}>
//           <View style={styles.view38}>
//             <Image
//               resizeMode="auto"
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b0852d4dc8a7e310aed2884d63ec3dea62f7e8a0afed89accbdf86c0f3cf0d8?apiKey=42bb954c825745999302100cb42c8fd0&",
//               }}
//               style={styles.image5}
//             />
//           </View>
//           <View style={styles.view39}>
//             <View style={styles.view40}>
//               <Text>Email</Text>
//             </View>
//             <View style={styles.view41}>
//               <Text>Send link via Email</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.view42}>
//           <View style={styles.view43}>
//             <Text>Send</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.view44}>
//         <View style={styles.view45}>
//           <View style={styles.view46}>
//             <Image
//               resizeMode="auto"
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ac4a79feaa62845fe0dd04588f3856978ee8aaaa7af7b7ff5dbe950a49fe5ba?apiKey=42bb954c825745999302100cb42c8fd0&",
//               }}
//               style={styles.image6}
//             />
//           </View>
//           <View style={styles.view47}>
//             <View style={styles.view48}>
//               <Text>Text Message</Text>
//             </View>
//             <View style={styles.view49}>
//               <Text>Send link via Text</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.view50}>
//           <View style={styles.view51}>
//             <Text>Send</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.view52}>
//         <View style={styles.view53}>
//           <Text>Done</Text>
//         </View>
//       </View>
//       <View style={styles.view54} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   view1: {
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     maxWidth: 480,
//     width: "100%",
//     flexDirection: "column",
//     margin: "0 auto",
//   },
//   view2: {
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     width: "100%",
//     flexDirection: "column",
//     fontSize: 18,
//     color: "#141217",
//     fontWeight: "700",
//     padding: "16px 16px 8px",
//   },
//   view3: {
//     justifyContent: "space-between",
//     alignItems: "stretch",
//     display: "flex",
//     gap: 20,
//     padding: "12px 0",
//   },
//   image1: { position: "relative", width: 24, aspectRatio: "1" },
//   view4: {
//     fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     flexGrow: "1",
//     flexShrink: "1",
//     flexBasis: "auto",
//   },
//   view5: {
//     color: "#141217",
//     fontFeatureSettings: "'dlig' on",
//     alignSelf: "start",
//     margin: "20px 0 0 16px",
//     font: "700 22px Inter, sans-serif ",
//   },
//   view6: {
//     justifyContent: "space-between",
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     marginTop: 39,
//     gap: 16,
//     padding: "14px 0 14px 16px",
//   },
//   view7: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     display: "flex",
//     flexGrow: "1",
//     flexBasis: "0%",
//     flexDirection: "column",
//   },
//   view8: {
//     color: "#141217",
//     fontFeatureSettings: "'dlig' on",
//     font: "500 16px Inter, sans-serif ",
//   },
//   view9: {
//     color: "#736387",
//     fontFeatureSettings: "'dlig' on",
//     font: "400 14px Inter, sans-serif ",
//   },
//   view10: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     borderRadius: 12,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     aspectRatio: "1.06",
//     flexDirection: "column",
//     fontSize: 14,
//     color: "#141217",
//     fontWeight: "500",
//     margin: "auto 0",
//     padding: "6px 0 6px 16px",
//   },
//   view11: {
//     fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     alignItems: "stretch",
//     backgroundColor: "#F2F0F5",
//     aspectRatio: "0.86",
//     justifyContent: "center",
//   },
//   view12: {
//     justifyContent: "space-between",
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     gap: 20,
//     padding: "12px 16px",
//   },
//   view13: {
//     alignItems: "stretch",
//     display: "flex",
//     paddingRight: 33,
//     justifyContent: "space-between",
//     gap: 16,
//   },
//   view14: {
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     aspectRatio: "1",
//     width: 48,
//     height: 48,
//     padding: "0 12px",
//   },
//   image2: { position: "relative", width: "100%", aspectRatio: "1" },
//   view15: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     display: "flex",
//     flexGrow: "1",
//     flexBasis: "0%",
//     flexDirection: "column",
//     whiteSpace: "nowrap",
//     margin: "auto 0",
//   },
//   view16: {
//     color: "#141217",
//     fontFeatureSettings: "'dlig' on",
//     font: "500 16px Inter, sans-serif ",
//   },
//   view17: {
//     color: "#736387",
//     fontFeatureSettings: "'dlig' on",
//     font: "400 14px Inter, sans-serif ",
//   },
//   view18: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     borderRadius: 12,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     flexBasis: "0%",
//     flexDirection: "column",
//     fontSize: 14,
//     color: "#141217",
//     fontWeight: "500",
//     whiteSpace: "nowrap",
//     margin: "auto 0",
//     padding: "6px 23px",
//   },
//   view19: {
//     fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     alignItems: "stretch",
//     backgroundColor: "#F2F0F5",
//     aspectRatio: "1.81",
//     justifyContent: "center",
//   },
//   view20: {
//     justifyContent: "space-between",
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     width: "100%",
//     gap: 20,
//     padding: "12px 16px",
//   },
//   view21: {
//     alignItems: "stretch",
//     display: "flex",
//     paddingRight: 50,
//     justifyContent: "space-between",
//     gap: 16,
//   },
//   view22: {
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     aspectRatio: "1",
//     width: 48,
//     height: 48,
//     padding: "0 12px",
//   },
//   image3: { position: "relative", width: "100%", aspectRatio: "1" },
//   view23: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     display: "flex",
//     flexGrow: "1",
//     flexBasis: "0%",
//     flexDirection: "column",
//     whiteSpace: "nowrap",
//     margin: "auto 0",
//   },
//   view24: {
//     color: "#141217",
//     fontFeatureSettings: "'dlig' on",
//     font: "500 16px Inter, sans-serif ",
//   },
//   view25: {
//     color: "#736387",
//     fontFeatureSettings: "'dlig' on",
//     font: "400 14px Inter, sans-serif ",
//   },
//   view26: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     borderRadius: 12,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     flexBasis: "0%",
//     flexDirection: "column",
//     fontSize: 14,
//     color: "#141217",
//     fontWeight: "500",
//     whiteSpace: "nowrap",
//     margin: "auto 0",
//     padding: "6px 21px",
//   },
//   view27: {
//     fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     alignItems: "stretch",
//     backgroundColor: "#F2F0F5",
//     aspectRatio: "2",
//     justifyContent: "center",
//   },
//   view28: {
//     justifyContent: "space-between",
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     gap: 20,
//     padding: "12px 16px",
//   },
//   view29: {
//     alignItems: "stretch",
//     display: "flex",
//     paddingRight: 19,
//     justifyContent: "space-between",
//     gap: 16,
//   },
//   view30: {
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     aspectRatio: "1",
//     width: 48,
//     height: 48,
//     padding: "0 12px",
//   },
//   image4: { position: "relative", width: "100%", aspectRatio: "1" },
//   view31: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     display: "flex",
//     flexGrow: "1",
//     flexBasis: "0%",
//     flexDirection: "column",
//     whiteSpace: "nowrap",
//     margin: "auto 0",
//   },
//   view32: {
//     color: "#141217",
//     fontFeatureSettings: "'dlig' on",
//     font: "500 16px Inter, sans-serif ",
//   },
//   view33: {
//     color: "#736387",
//     fontFeatureSettings: "'dlig' on",
//     font: "400 14px Inter, sans-serif ",
//   },
//   view34: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     borderRadius: 12,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     flexBasis: "0%",
//     flexDirection: "column",
//     fontSize: 14,
//     color: "#141217",
//     fontWeight: "500",
//     whiteSpace: "nowrap",
//     margin: "auto 0",
//     padding: "6px 25px",
//   },
//   view35: {
//     fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     alignItems: "stretch",
//     backgroundColor: "#F2F0F5",
//     aspectRatio: "1.62",
//     justifyContent: "center",
//   },
//   view36: {
//     justifyContent: "space-between",
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     width: "100%",
//     gap: 20,
//     padding: "12px 16px",
//   },
//   view37: {
//     alignItems: "stretch",
//     display: "flex",
//     paddingRight: 36,
//     justifyContent: "space-between",
//     gap: 16,
//   },
//   view38: {
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     aspectRatio: "1",
//     width: 48,
//     height: 48,
//     padding: "0 12px",
//   },
//   image5: { position: "relative", width: "100%", aspectRatio: "1" },
//   view39: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     display: "flex",
//     flexGrow: "1",
//     flexBasis: "0%",
//     flexDirection: "column",
//     whiteSpace: "nowrap",
//     margin: "auto 0",
//   },
//   view40: {
//     color: "#141217",
//     fontFeatureSettings: "'dlig' on",
//     font: "500 16px Inter, sans-serif ",
//   },
//   view41: {
//     color: "#736387",
//     fontFeatureSettings: "'dlig' on",
//     font: "400 14px Inter, sans-serif ",
//   },
//   view42: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     borderRadius: 12,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     flexBasis: "0%",
//     flexDirection: "column",
//     fontSize: 14,
//     color: "#141217",
//     fontWeight: "500",
//     whiteSpace: "nowrap",
//     margin: "auto 0",
//     padding: "6px 25px",
//   },
//   view43: {
//     fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     alignItems: "stretch",
//     backgroundColor: "#F2F0F5",
//     aspectRatio: "1.62",
//     justifyContent: "center",
//   },
//   view44: {
//     justifyContent: "space-between",
//     alignItems: "stretch",
//     backgroundColor: "#FFF",
//     display: "flex",
//     width: "100%",
//     gap: 20,
//     padding: "12px 16px",
//   },
//   view45: {
//     alignItems: "stretch",
//     display: "flex",
//     paddingRight: 39,
//     justifyContent: "space-between",
//     gap: 16,
//   },
//   view46: {
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     aspectRatio: "1",
//     width: 48,
//     height: 48,
//     padding: "0 12px",
//   },
//   image6: { position: "relative", width: "100%", aspectRatio: "1" },
//   view47: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     display: "flex",
//     flexGrow: "1",
//     flexBasis: "0%",
//     flexDirection: "column",
//     whiteSpace: "nowrap",
//     margin: "auto 0",
//   },
//   view48: {
//     color: "#141217",
//     fontFeatureSettings: "'dlig' on",
//     font: "500 16px Inter, sans-serif ",
//   },
//   view49: {
//     color: "#736387",
//     fontFeatureSettings: "'dlig' on",
//     font: "400 14px Inter, sans-serif ",
//   },
//   view50: {
//     justifyContent: "center",
//     alignItems: "stretch",
//     borderRadius: 12,
//     backgroundColor: "#F2F0F5",
//     display: "flex",
//     flexBasis: "0%",
//     flexDirection: "column",
//     fontSize: 14,
//     color: "#141217",
//     fontWeight: "500",
//     whiteSpace: "nowrap",
//     margin: "auto 0",
//     padding: "6px 25px",
//   },
//   view51: {
//     fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     alignItems: "stretch",
//     backgroundColor: "#F2F0F5",
//     aspectRatio: "1.62",
//     justifyContent: "center",
//   },
//   view52: {
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 12,
//     backgroundColor: "#6B1AE5",
//     alignSelf: "center",
//     display: "flex",
//     marginTop: 173,
//     width: "100%",
//     maxWidth: 358,
//     fontSize: 16,
//     color: "#FFF",
//     fontWeight: "700",
//     whiteSpace: "nowrap",
//     letterSpacing: 0.24,
//     padding: "12px 60px",
//   },
//   view53: {
//     fontFeatureSettings: "'dlig' on",
//     fontFamily: "Inter, sans-serif",
//     alignItems: "stretch",
//     backgroundColor: "#6B1AE5",
//     aspectRatio: "1.75",
//     justifyContent: "center",
//   },
//   view54: {
//     backgroundColor: "#FFF",
//     minHeight: 20,
//     marginTop: 12,
//     width: "100%",
//   },
// });

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface ShareProp{
    platform: string;
    details: {
        iconUri :string;
        description: string;
    };
}
const ShareOption : React.FC<ShareProp> = ({ platform, details }) => (
  <View style={styles.shareOptionContainer}>
    <View style={styles.shareOptionImageContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: details.iconUri }}
        style={styles.shareOptionImage}
      />
    </View>
    <View style={styles.shareOptionTextContainer}>
      <Text style={styles.shareOptionTitle}>{platform}</Text>
      <Text style={styles.shareOptionSubtitle}>{details.description}</Text>
    </View>
  </View>
);

const ShareButton = () => (
  <View style={styles.shareButtonContainer}>
    <Text style={styles.shareButtonText}>Share</Text>
  </View>
);

const SocialShareComponent = () => {
  const shareOptions = [
    {
      platform: 'Facebook',
      details: {
        iconUri: 'https://example.com/facebook-icon.png',
        description: 'Share on Facebook',
      },
    },
    {
      platform: 'Twitter',
      details: {
        iconUri: 'https://example.com/twitter-icon.png',
        description: 'Tweet it',
      },
    },
  ];

  return (
    <View style={styles.container}>
      {shareOptions.map((option, index) => (
        <ShareOption key={index} platform={option.platform} details={option.details} />
      ))}
      <ShareButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    padding: 12,
  },
  shareOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  shareOptionImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F2F0F5',
    width: 48,
    height: 48,
    marginRight: 12,
  },
  shareOptionImage: {
    width: '100%',
    height: '100%',
  },
  shareOptionTextContainer: {
    justifyContent: 'center',
  },
  shareOptionTitle: {
    color: '#141217',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  shareOptionSubtitle: {
    color: '#736387',
    fontSize: 14,
  },
  shareButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#F2F0F5',
    padding: 6,
    marginTop: 20,
  },
  shareButtonText: {
    fontSize: 14,
    color: '#141217',
    fontWeight: '500',
  },
});

export default SocialShareComponent;
