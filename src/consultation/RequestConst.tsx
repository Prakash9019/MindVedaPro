import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

const RequestConst = () => {
  return (
    <ScrollView>
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/82a8f6a4069aaecb2290702867cfe0f01e2f73cf101a47e09524b0a1f8185a98?apiKey=42bb954c825745999302100cb42c8fd0&",
            }}
            style={styles.image1}
          />
        </View>
        <View style={styles.view4}>
          <View >
            <Text style={styles.view5} >Request a Consultation</Text>
          </View>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Text>Select date and time</Text>
            </View>
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/781e7c67f55f475eb2897edb3fecb01daa0bb79267d827a128555a9cba5acfb6?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image2}
            /> */}
          </View>
          <View style={styles.view8}>
            <Text>Your concerns</Text>
          </View>
          <View style={styles.view9}>
            <Text>What are the main reasons you're seeking help for?</Text>
          </View>
          <View style={styles.view8}>
            <Text>Preferred consultation method</Text>
          </View>
          <View style={styles.view9}>
            <View style={styles.view7}>
              <Text>Video call, in-person, no preference</Text>
            </View>
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fcca66fd698349d85724b20345e679cf2b9cce5034943e7b9f023a7330dedaf?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image3}
            /> */}
          </View>
          <View style={styles.view13}>
            <Text>Additional notes</Text>
          </View>
          <View style={styles.view9}>
            <Text>Anything else you'd like to share with your doctor?</Text>
          </View>
          <View style={styles.view15}>
            <View style={styles.view16}>
              <Text>Submit request</Text>
            </View>
          </View>
        </View>
        <View style={styles.view17} />
      </View>
    </View>
    </ScrollView>
  );
}
export default RequestConst;
const styles = StyleSheet.create({
  view1: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 0,
    marginVertical: "auto",
  },
  view2: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    paddingBottom: 28,
    flexDirection: "column",
  },
  view3: {
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 24,
    paddingRight: 60,
    paddingLeft: 24,
    paddingBottom: 16,
  },
  image1: { position: "relative", width: 24, aspectRatio: "1" },
  view4: {
    display: "flex",
    marginTop: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 16,
    color: "#121217",
    fontWeight: "400",
    paddingHorizontal: 0,
    paddingVertical: "auto",
  },
  view5: {

    fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
    fontSize: 22,
  },
  view6: {
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DBDEE5',
    borderStyle: 'solid',
    backgroundColor: "#FFF",
    display: "flex",
    marginTop: 24,
    gap: 20,
    color: "#637087",
    paddingVertical: 16,
    paddingHorizontal: 15,
  },
  view7: {
   // fontFeatureSettings: "'dlig' on",
    fontFamily: "Inter, sans-serif",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  image2: { position: "relative", width: 24, aspectRatio: "1" },
  view8: {
  //  fontFeatureSettings: "'dlig' on",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    marginTop: 24,
  },
  view9: {

    fontFamily: "Inter, sans-serif",
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DBDEE5',
    borderStyle: 'solid',
    backgroundColor: "#FFF",
    marginTop: 8,
    color: "#637087",
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 84,
  },
  
  
  image3: { position: "relative", width: 24, aspectRatio: "1" },
  view13: {

    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    marginTop: 24,
    // whiteSpace: "nowrap",
  },
  
  view15: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#1A5CE5",
    display: "flex",
    marginTop: 24,
    color: "#FFF",
    fontWeight: "700",
    // whiteSpace: "nowrap",
    letterSpacing: 0.24,
    paddingVertical: 12,
    paddingHorizontal: 60,
  },
  view16: {
    fontFamily: "Inter, sans-serif",
    alignItems: "stretch",
    backgroundColor: "#1A5CE5",
    justifyContent: "center",
  },
  view17: {
    backgroundColor: "#FFF",
    minHeight: 20,
    marginTop: 12,
    width: "100%",
  },
});


