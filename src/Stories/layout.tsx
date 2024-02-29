import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ height }) => (
  <View style={{ height, backgroundColor: "#DEDBE5", flexShrink: 0 }} />
);

const ContentBlock = ({ style }) => (
  <View style={[styles.contentBlock, style]} />
);

function LayoutComponent() {
  return (
    <View style={styles.container}>
      <Spacer height={16} />
      <ContentBlock style={styles.highlightBlock} />
      <Spacer height={4} />
      <ContentBlock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
    padding: 16,
  },
  contentBlock: {
    backgroundColor: "#DEDBE5",
    height: 48,
  },
  highlightBlock: {
    borderRadius: 4,
    backgroundColor: "#141",
  },
});

export default LayoutComponent;