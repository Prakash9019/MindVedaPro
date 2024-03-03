import * as React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

const ProfileHeader = () => (
  <View style={styles.profileHeaderContainer}>
    <Image
      resizeMode="cover"
      source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0039fa493d745ec2d42d736cd6cb00840c6faa8124d03081b9cc8db125cb8" }}
      style={styles.profileImage}
    />
    <View style={styles.profileInfo}>
      <Text style={styles.profileName}>Dr. Emilia</Text>
      <Text style={styles.profileUniversity}>Stanford University</Text>
      <Text style={styles.profileLocation}>Palo Alto, CA</Text>
    </View>
  </View>
);
interface Action{
    title: string;
    buttonStyle: string;
    textStyle: string;
}

interface Post{
    title: string;
    subtitle: string;
    imageUrl: string;
}
// const ActionButton: React.FC <Action> = ({ title, buttonStyle, textStyle }) => (
//   <View style={[styles.buttonContainer, buttonStyle]}>
//     <Text style={[styles.buttonText, textStyle]}>{title}</Text>
//   </View>
// );

const Post : React.FC<Post> = ({ title, subtitle, imageUrl }) => (
    <View style={styles.articleContainer} >
  <View style={styles.headerContainer}>
    <Text style={styles.postTitle}>{title}</Text>
    <Text style={styles.postSubtitle}>{subtitle}</Text>
    </View>
    <Image resizeMode="cover" source={{ uri: imageUrl }} style={styles.postImage} />
  </View>
);

const ProfileScreen = () => {
  const posts = [
    {
      title: "The secret to managing stress",
      subtitle: "Mental Health · 3d ago · #StressRelief",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/319dc1e48bea128e89302e66ad0758266213944e12c0e857475ad66aaedbaf5d",
    },
    {
      title: "How to overcome anxiety",
      subtitle: "Mental Health · 5d ago · #Anxiety",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ebbe8c7a5a2c4da90d57cf7a37af6a3fe743679e23b26be825512fec8f6fada",
    },
    {
      title: "What is burnout?",
      subtitle: "Mental Health · 8d ago · #Burnout",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d5614b44a9fae83ec40b6b23689ceba6f77ada07188569aca356b634e75ae59",
    },
  ];

  return (
    <ScrollView>
    <View style={styles.container}>
      <ProfileHeader />
      {/* <ActionButton 
        title="Request Consultation" 
        buttonStyle={styles.requestConsultationButton} 
        textStyle={styles.buttonTextWhite} 
      />
      <ActionButton 
        title="Send Query Anonymously" 
        buttonStyle={styles.sendQueryButton} 
        textStyle={styles.buttonTextWhite} 
      /> */}
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.sectionContent}>
        I'm a psychologist and professor at Stanford University. I've been studying stress for over 20 years. My research has shown that stress can actually be good for you, if you know how to manage it.
      </Text>
      <Text style={styles.sectionTitle}>Posts</Text>
      {posts.map((post, index) => (
        <Post key={index} title={post.title} subtitle={post.subtitle} imageUrl={post.imageUrl} />
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "stretch", backgroundColor: "#FFF", display: "flex", flexDirection: "column", justifyContent: "center", padding: 16 },
  profileHeaderContainer: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginRight: 16 },
  profileInfo: { flex: 1 },
  profileName: { fontWeight: "bold", fontSize: 20, marginBottom: 4 },
  profileUniversity: { color: "#666", marginBottom: 2 },
  profileLocation: { color: "#666" },
  buttonContainer: { padding: 12, borderRadius: 8, alignItems: "center", marginBottom: 16 },
  requestConsultationButton: { color: "#1A8AE5" },
  sendQueryButton: { backgroundColor: "#4CAF50" },
  buttonText: { fontSize: 16 },
  buttonTextWhite: { color: "#FFFFFF" },
  sectionTitle: { fontWeight: "bold", fontSize: 18, marginTop: 24, marginBottom: 16 },
  sectionContent: { fontSize: 14, color: "#666", marginBottom: 16 },
  postContainer: { marginBottom: 16 },
  postTitle: { fontWeight: "bold", fontSize: 16 },
  postSubtitle: { fontSize: 14, color: "#999" },
  postImage: {   height: 90,
    width: 90,
    aspectRatio: 1.33,
 marginRight:23, backgroundColor:"green" ,borderRadius:8, },
  articleContainer: {    marginRight:10,  display: "flex", paddingBottom: 16, flexDirection:"row"},
  headerContainer: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    paddingEnd: 12,
    paddingBottom: 21,
  },
});

export default ProfileScreen;