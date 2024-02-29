import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const StoryBanner = ({source, text}) => (
  <View style={styles.storyBanner}>
    <Image resizeMode="auto" source={{ uri: source }} style={styles.bannerImage} />
    <View style={styles.bannerContent}>
      <Text>{text}</Text>
    </View>
  </View>
);

const ProgressBarSection = ({question}) => (
  <View style={styles.progressBarSection}>
    <View style={styles.progressBar}>
      <View style={styles.progressBarComplete} />
      <View style={styles.progressIndicator} />
      <View style={styles.progressBarRemaining} />
    </View>
    <View style={styles.questionText}>
      <Text>{question}</Text>
    </View>
  </View>
);

const StorySharingApp = () => {
  const storyBannersData = [
    { source: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0e34ffdba38061f3b26d2a43bae1e648d07cc208537a86428cafb3c4ded1a33?apiKey=42bb954c825745999302100cb42c8fd0&", text: "Create a story" },
    { source: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ab555df0b2e44c85e54dd36aaf74b7cf724cc212ddabc4b782c612d0343d903?apiKey=42bb954c825745999302100cb42c8fd0&", text: "What's your story?" },
  ];

  const questionsData = [
    "When did you start to feel better?",
    "How would you describe the recovery process?",
    "What are some tips you'd like to share?"
  ];

  return (
    <View style={styles.container}>
      {storyBannersData.map((item, index) => (
        <StoryBanner key={index} source={item.source} text={item.text} />
      ))}
      {questionsData.map((question, index) => (
        <ProgressBarSection key={index} question={question} />
      ))}
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post story</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FFF",
    maxWidth: 480,
    alignSelf: "center",
    width: "100%",
  },
  storyBanner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#DEDBE5",
    borderRadius: 12,
    padding: 16,
  },
  bannerImage: {
    width: 40,
    aspectRatio: 1,
  },
  bannerContent: {
    marginLeft: 16,
  },
  progressBarSection: {
    marginTop: 12,
    paddingVertical: 12,
  },
  progressBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DEDBE5",
    height: 8,
    borderRadius: 4,
  },
  progressBarComplete: {
    backgroundColor: "#141414",
    height: 8,
    flex: 2,
  },
  progressIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#141414",
    marginHorizontal: 4,
  },
  progressBarRemaining: {
    flex: 3,
    height: 8,
    backgroundColor: "#DEDBE5",
  },
  questionText: {
    marginTop: 8,
  },
  postButton: {
    marginTop: 12,
    backgroundColor: "#421AE5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  postButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default StorySharingApp;