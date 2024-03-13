import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

interface TitleProps {
  text: string;
  style?: object;
}

const Title: React.FC<TitleProps> = ({ text, style }) => (
  <Text style={[styles.title, style]}>{text}</Text>
);

const ConfirmationScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image resizeMode="cover" source={{ uri: "imageUri" }} style={styles.icon} />
      </View>
      <View style={styles.content}>
        <Title text="Request Sent" style={styles.mainTitle} />
        <Title text="Your message has been sent successfully" style={styles.subtitle} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back to profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 80,
    flexDirection: "column",
    // margin: "0 auto",
  },
  header: {
    // alignItems: "start",
    backgroundColor: "#FFF",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    padding: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
  content: {
    marginTop: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    paddingHorizontal: 36,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#1A5CE5",
    marginTop: 72,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 156,
    alignSelf: "center",
  },
  buttonText: {
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
  title: {
    fontFamily: "Inter, sans-serif",
  },
});

export default ConfirmationScreen;