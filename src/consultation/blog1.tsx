// import React from "react";
// import { View, StyleSheet, Image, Text } from "react-native";

// interface Card{
//   name: string;
//   specialization:string;
//   rating :string;
//   imageUri: string;
// }
// const SpecialistCard :React.FC <Card> = ({ name, specialization, rating, imageUri }) => (
//   <View style={styles.cardContainer}>
//     <View style={styles.cardContent}>
//       <Image resizeMode="contain" source={{ uri: imageUri }} style={styles.cardImage} />
//       <View style={styles.cardTextContainer}>
//         <Text style={styles.specialistName}>{name}</Text>
//         <Text style={styles.specialistInfo}>{`${specialization} · Rating: ${rating}`}</Text>
//       </View>
//     </View>
//   </View>
// );

// const App = () => {
//   // This data would ideally come from a backend or be dynamically generated in a real app
//   const specialists = [
//     {
//       id: "1",
//       name: "Dr. Laura",
//       specialization: "PhD in Psychology, Anxiety specialist",
//       rating: "4.5",
//       imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bbdf272996ad4266972bf8af6c85ab8769008aa3378bd5d8e1a93a4aebb5cc3",
//     },
//     // Additional items would be added here
//   ];

//   return (
//     <>
//       {specialists.map((specialist) => (
//         <SpecialistCard
//           key={specialist.id}
//           name={specialist.name}
//           specialization={specialist.specialization}
//           rating={specialist.rating}
//           imageUri={specialist.imageUri}
//         />
//       ))}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     backgroundColor: "#F7FAFA",
//     marginTop: 8,
//     padding: 16,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   cardContent: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   cardImage: {
//     width: 55,
//     height: 55,
//     marginRight: 10,
//   },
//   cardTextContainer: {
//     flex: 1,
//   },
//   specialistName: {
//     fontWeight: "700",
//     fontSize: 16,
//     color: "#0D171C",
//   },
//   specialistInfo: {
//     marginTop: 4,
//     fontSize: 14,
//     lineHeight: 21,
//     color: "#4F8296",
//   },
// });


import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const ShareComponent = () => (
  <View style={styles.shareContainer}>
    <Image
      resizeMode="cover"
      source={{
        uri:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/261a85c8714f1107caa0a6bbad4b8a0503e6ac798a5ae24288fc03c0cda7b0cf?apiKey=42bb954c825745999302100cb42c8fd0",
      }}
      style={styles.shareIcon}
    />
    <Text style={styles.shareText}>Share Link</Text>
  </View>
);

const ShareLinkScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <ShareComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  shareContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  shareIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  shareText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#141217",
  },
});

export default ShareLinkScreen;