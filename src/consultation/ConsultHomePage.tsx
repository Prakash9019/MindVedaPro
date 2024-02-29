import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
const ConsultHomePage = () => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View style={styles.view4}>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/132baa1df6f30d0a8c73b7f9afc76febecd0eabc376b27d9a9239566186648fb?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image1}
            />
            <View style={styles.view5}>
              <Text>Consult with Experts</Text>
            </View>
          </View>
        </View>
        <Image
          resizeMode="cover"
          fitContent={true}
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f078080d01d8acbc0ecba8e717b4c2c6e1cb7a9dd4c64e1f5c4b820d5d3d451d?apiKey=42bb954c825745999302100cb42c8fd0&",
          }}
          style={styles.image2}
        >
          <View style={styles.view6}>
            <Text>Expert advice, whenever you need it</Text>
          </View>
          <View style={styles.view7}>
            <Text>
              Get advice from licensed therapists and counselors. Start your
              journey to a happier and healthier life.
            </Text>
          </View>
        </Image>
        <View style={styles.view8}>
          <View style={styles.view9}>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab6611e4a573cbdd3b14f41123fbcac6dad6856e7d79a3cc7de8fb238c8594af?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image3}
            />
            <View style={styles.view10}>
              <Text>Search by expertise or condition</Text>
            </View>
          </View>
          <View style={styles.view11}>
            <Text>Top experts</Text>
          </View>
        </View>
        <View style={styles.view12}>
          <View style={styles.view13}>
            <View style={styles.view14}>
              <View style={styles.view15}>
                <Text>Dr. Laura</Text>
              </View>
              <View style={styles.view16}>
                <Text>PhD in Psychology, Anxiety specialist · Rating: 4.5</Text>
              </View>
            </View>
          </View>
        </View>
        {/* <View style={styles.view17}>
          <View style={styles.view18}>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bbdf272996ad4266972bf8af6c85ab8769008aa3378bd5d8e1a93a4aebb5cc3?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image5}
            />
            <View style={styles.view19}>
              <View style={styles.view20}>
                <Text>Dr. Laura</Text>
              </View>
              <View style={styles.view21}>
                <Text>PhD in Psychology, Anxiety specialist · Rating: 4.5</Text>
              </View>
            </View>
          </View>
        </View> */}
     
        <View style={styles.view32}>
          <View style={styles.view33}>
            <Text>Consult with Experts</Text>
          </View>
        </View>
      
      </View>
    </View>
  );
}

export default ConsultHomePage;
const styles = StyleSheet.create({
  view1: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
  },
  view2: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFA",
    display: "flex",
    width: "100%",
    paddingBottom: 30,
    flexDirection: "column",
  },
  view3: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFA",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: 28,
    color: "#0D171C",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },
  view4: {
    alignItems: "start",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: "28px 80px 8px 16px",
  },
  image1: { position: "relative", width: 24, aspectRatio: "1" },
  view5: {
    fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    marginTop: 20,
  },
  image2: {
    justifyContent: "center",
    alignItems: "stretch",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    aspectRatio: "0.81",
    width: "100%",
    flexDirection: "column",
    color: "#FFF",
    textAlign: "center",
    padding: "50px 17px",
  },
  view6: {
    fontFeatureSettings: "'dlig' on",
    position: "relative",
    marginTop: 87,
    font: "700 36px Epilogue, sans-serif ",
  },
  view7: {
    fontFeatureSettings: "'dlig' on",
    position: "relative",
    margin: "98px 0 93px",
    font: "400 14px/150% Epilogue, sans-serif ",
  },
  view8: {
    display: "flex",
    marginTop: 12,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "0 16px",
  },
  view9: {
    alignItems: "stretch",
    borderRadius: 12,
    backgroundColor: "#E8F0F2",
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    fontSize: 16,
    color: "#4F8296",
    fontWeight: "400",
    padding: "12px 16px",
  },
  image3: { position: "relative", width: 24, aspectRatio: "1" },
  view10: {
    fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "auto",
  },
  view11: {
    color: "#0D171C",
    fontFeatureSettings: "'dlig' on",
    marginTop: 28,
    font: "700 18px Epilogue, sans-serif ",
  },
  view12: {
    alignItems: "start",
    backgroundColor: "#F7FAFA",
    display: "flex",
    marginTop: 8,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    padding: "16px 60px 16px 16px",
  },
  view13: {
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    gap: 10,
  },
  image4: {
    alignSelf: "start",
    position: "relative",
    width: 55,
    aspectRatio: "0.95",
  },
  view14: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
  },
  view15: {
    color: "#0D171C",
    fontFeatureSettings: "'dlig' on",
    font: "700 16px Epilogue, sans-serif ",
  },
  view16: {
    color: "#4F8296",
    fontFeatureSettings: "'dlig' on",
    marginTop: 4,
    font: "400 14px/21px Epilogue, sans-serif ",
  },
  view32: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#1CABE3",
    alignSelf: "center",
    display: "flex",
    marginTop: 52,
    width: "100%",
    maxWidth: 358,
    fontSize: 16,
    color: "#0D171C",
    fontWeight: "700",
    whiteSpace: "nowrap",
    letterSpacing: 0.24,
    padding: "12px 60px",
  },
  view33: {
    fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    alignItems: "stretch",
    backgroundColor: "#1CABE3",
    justifyContent: "center",
  },
  view34: {
    backgroundColor: "#F7FAFA",
    minHeight: 20,
    marginTop: 12,
    width: "100%",
  },
  view35: {
    display: "flex",
    alignItems: "start",
    fontSize: 12,
    color: "#706387",
    fontWeight: "500",
    whiteSpace: "nowrap",
    textAlign: "center",
    letterSpacing: 0.18,
    padding: "0 20px",
  },
  view36: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    padding: "2px 16px",
  },
  image8: {
    alignSelf: "center",
    position: "relative",
    width: 36,
    aspectRatio: "1.49",
  },
  view37: {
    fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    marginTop: 8,
  },
  view38: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    padding: "2px 13px",
  },
  image9: {
    alignSelf: "center",
    position: "relative",
    width: 24,
    aspectRatio: "1",
  },
  view39: {
    fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    marginTop: 8,
  },
  view40: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    padding: "2px 4px",
  },
  image10: {
    alignSelf: "center",
    position: "relative",
    width: 24,
    aspectRatio: "1",
  },
  view41: {
    fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    marginTop: 8,
  },
  view42: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    padding: "2px 15px",
  },
  image11: {
    alignSelf: "center",
    position: "relative",
    width: 24,
    aspectRatio: "1",
  },
  view43: {
    fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    marginTop: 8,
  },
  view44: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    padding: "2px 17px",
  },
  image12: {
    alignSelf: "center",
    position: "relative",
    width: 41,
    aspectRatio: "1.69",
  },
  view45: {
    fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    marginTop: 8,
  },
});


