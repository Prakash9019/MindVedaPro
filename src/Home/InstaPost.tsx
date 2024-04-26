import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import AntDesign from 'react-native-vector-icons/AntDesign'

interface UserInfoProps {
  name: string;
  title: string;
  imageUri: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, title, imageUri }) => (
  <View style={styles.userInfoContainer}>
    <Image resizeMode="cover" source={require("./n1.jpg")} style={styles.userImage} />
    <View style={styles.userInfoTextWrapper}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.userTitle}>{title}</Text>
    </View>
  </View>
);

interface IconCounterProps {
  iconUri: string;
  count: number;
}

const IconCounter: React.FC<IconCounterProps> = ({ iconUri, count }) => (
  <View style={styles.iconCounterContainer}>
    <Image resizeMode="cover" source={require("./n1.jpg")} style={styles.iconImage} />
    <Text>{count}</Text>
  </View>
);

const InstaPost: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = React.useState(false); // State to track bookmark status
   const [issharedmarked,setIsSharedmarked] = React.useState(false);
  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked); // Toggle bookmark status
  };
  const handleShareToggle = () => {
    setIsSharedmarked(!issharedmarked);
  };
  return (
    <View style={styles.mainContainer}>
      <UserInfo
        name="Dr. Rhea Bhatia"
        title="Psychiatrist at Stanford University"
        imageUri="imageUri1"
      />
      <Text style={styles.quoteText}>
        It's okay to not be okay. It's okay to not have everything figured out. It's okay to feel lost and confused. It's okay to cry and feel sad. It's okay to take a break. It's okay to not know what you want. It's okay to say no. It's okay to ask for help. It's to be human.
      </Text>
      <View style={styles.imageGrid}>
        <Image resizeMode="cover" source={require("./n1.jpg")} style={styles.gridImage} />
      </View>
      <View style={styles.iconCounterRow}>
      <TouchableOpacity style={styles.iconCounterContainer} onPress={()=>{handleShareToggle()}}>
          <MaterialCommunityIcons  name={issharedmarked ? 'share-variant' : 'share-variant-outline'}  size={25} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCounterContainer} onPress={()=>{handleBookmarkToggle()}}>
          <MaterialCommunityIcons  name={isBookmarked ? 'bookmark' : 'bookmark-outline'} size={25} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.commentSection}>
        <Text style={styles.commentText}>See 12 comments</Text>
        <Text style={styles.timeText}>2w</Text>
      </View>
      <UserInfo
        name="Dr. Rhea Bhatia"
        title="Psychiatrist at Stanford University"
        imageUri="imageUri3"
      />
      <Text style={styles.questionText}>How do I know if my child has ADHD or is just being a kid?</Text>
      <View style={styles.imageWrapper}>
        <Image resizeMode="cover" source={require("./n1.jpg")} style={styles.fullWidthImage} />
      </View>
      <View style={styles.iconCounterRow}>
        <View style={styles.iconCounterContainer}>
          <MaterialCommunityIcons name="share-variant-outline" size={25} style={styles.iconImage} />
        </View>
        <View style={styles.iconCounterContainer}>
          <MaterialCommunityIcons name="bookmark-outline" size={25} style={styles.iconImage} />
        </View>
      </View>
      <View style={styles.commentSection}>
        <Text style={styles.commentText}>See 7 comments</Text>
        <Text style={styles.timeText}>4d</Text>
      </View>
      <View style={styles.spacingView} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: "#F7FAFC", padding: 20 },
  userInfoContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  userImage: { width: 56, height: 56, borderRadius: 28 },
  userInfoTextWrapper: { marginLeft: 10 },
  userName: { fontWeight: "bold" },
  userTitle: { color: "#666" },
  quoteText: { marginVertical: 20 },
  imageGrid: { flexDirection: "row", justifyContent: "space-between" },
  gridImage: { width: "100%", height: 200, borderRadius: 8 },
  iconCounterContainer: { flexDirection: "row", alignItems: "center" },
  iconImage: { width: 24, height: 24 },
  iconCounterRow: { flexDirection: "row", justifyContent: "space-around", marginVertical: 20 },
  commentSection: { flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: "#eee", paddingTop: 10 },
  commentText: { color: "#888" },
  timeText: { color: "#888" },
  questionText: { fontWeight: "bold", marginVertical: 20 },
  imageWrapper: { marginBottom: 20 },
  fullWidthImage: { width: "100%", height: 200, borderRadius: 8 },
  spacingView: { height: 20 },
});

export default InstaPost;