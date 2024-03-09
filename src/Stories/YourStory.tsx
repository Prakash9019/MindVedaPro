import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

interface StoryCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  content: string;
  publishDate: string;
  readTime: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  subtitle,
  imageUrl,
  content,
  publishDate,
  readTime,
}) => (
  <View style={styles.container}>
    <Image resizeMode="cover" source={{ uri: imageUrl }} style={styles.storyImage} />
    <Text style={styles.title}>{title}</Text>
    <View style={styles.tagContainer}>
      <Text style={styles.tag}>{subtitle}</Text>
    </View>
    <Text style={styles.publishDetails}>{`Published on ${publishDate} · ${readTime} read`}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  storyImage: {
    alignSelf: "center",
    width: "100%",
    height: 200,
    marginVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0D141C",
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tag: {
    backgroundColor: "#E8EDF2",
    borderRadius: 12,
    padding: 6,
    marginRight: 8,
    fontSize: 14 ,   fontWeight: "500",
  },
  publishDetails: {
    fontSize: 14,
    color: "#4F759B",
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#0D141C",
  },
});

const MentalHealthJourneyScreen: React.FC = () => {
  const storyDetails = {
    title: "Mental Health Journey",
    subtitle: "ADHD - Personal Journey",
    imageUrl: "https://example.com/story-image.jpg",
    content: "This page is to enable the users to share their mental health journeys to instill hope in the readers.",
    publishDate: "Dec 1, 2023",
    readTime: "5 min",
  };

  return <StoryCard {...storyDetails} />;
};

export default MentalHealthJourneyScreen;