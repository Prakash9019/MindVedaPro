import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

const BipolarStory = () => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View style={styles.view4}>
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/59fc2b66a76306731c8224630caf8ffbd716761ecdba7b2c8b927bf12ea1e114?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image1}
            /> */}
            <View>
              <Text  style={styles.view5}>Stories</Text>
            </View>
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ad74b22413ab39e2e1ba6f1097ec856aca9ce306093d609b472004a13bd8b54?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image2}
            /> */}
          </View>
        </View>
        <View style={styles.view15}>
          <Text>Bipolar Disorder Stories</Text>
        </View>
        <View style={styles.view16}>
          <View style={styles.view17}>
            <View style={styles.view18}>
              <View >
                <Text style={styles.view19} >Bipolar Disorder</Text>
              </View>
              <View >
                <Text style={styles.view20}>A.Prakash</Text>
              </View>
              <View style={styles.view21}>
                <Text>Finding peace: My battle with bipolar disorder</Text>
              </View>
            </View>
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/585db41f865b6587aedbfa28100005b344f3cdf64a19307cb96791a07c67e552?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image3}
            /> */}
          </View>
        </View>
        <View style={styles.view16}>
          <View style={styles.view17}>
            <View style={styles.view18}>
              <View >
                <Text style={styles.view19}>Bipolar Disorder</Text>
              </View>
              <View >
                <Text style={styles.view20} >Pavan Kumar</Text>
              </View>
              <View style={styles.view21}>
                <Text>
                  Riding the waves: My experience with bipolar disorder
                </Text>
              </View>
            </View>
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4311c00cbc38fda4b6a9f82435e6992c096a648028f47889688420b17334c08b?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image4}
            /> */}
          </View>
        </View>
        <View style={styles.view28}>
          <View style={styles.view29}>
            <View >
              <Text style={styles.view30} >Do you have a story to share?</Text>
            </View>
            <View style={styles.view31}>
              <View style={styles.view32}>
                <Text>Share</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default BipolarStory;

const styles = StyleSheet.create({
  view1: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    color: "#0D141C",
    marginHorizontal: 0,
    marginVertical: "auto",
  },
  view2: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFC",
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  view3: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFC",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: 18,
    fontWeight: "700",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  view4: {
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    gap: 20,
    padding: 12,
    paddingLeft: 0,
    paddingRight: 0,
  },
  image1: { position: "relative", width: 24, aspectRatio: 1 },
  view5: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
  },
  image2: { position: "relative", width: 24, aspectRatio: 1 },
  view15: {
    // fontFeatureSettings: "'dlig' on",
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 16,
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '700',
    fontSize: 22,
  },
  view16: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFC",
    display: "flex",
    marginTop: 12,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: 14,
    color: "#4F7596",
    fontWeight: "400",
    padding: 16,
  },
  view17: {
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    gap: 16,
  },
  view18: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: 1,
    flexBasis: "0%",
    flexDirection: "column",
    paddingLeft: 0,
    paddingRight: 25,
    paddingTop: 0,
    paddingBottom: 21,
  },
  view19: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
  },
  view20: {
    color: "#0D141C",
    // fontFeatureSettings: "'dlig' on",
    marginTop: 4,
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '700',
    fontSize: 16,
  },
  view21: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    marginTop: 4,
  },
  image3: {
    position: "relative",
    width: 114,
    maxWidth: "100%",
    aspectRatio: "1.25",
  },
  view28: {
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#F7FAFC",
    display: "flex",
    marginTop: 193,
    width: "100%",
    flexDirection: "column",
    padding: 12,
    paddingLeft: 16,
    paddingRight: 16,
  },
  view29: {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
  },
  view30: {
    // fontFeatureSettings: "'dlig' on",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    // margin: "auto 0",
    flexDirection: 'row', // Assuming you want to center horizontally
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    flex: 1,
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '400',
    fontSize: 16,
  },
  view31: {
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 12,
    backgroundColor: "#E8EDF2",
    display: "flex",
    flexBasis: "0%",
    flexDirection: "column",
    fontSize: 14,
    fontWeight: "500",
    padding: 6,
    paddingLeft: 22,
    paddingRight: 22,
  },
  view32: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    alignItems: "stretch",
    backgroundColor: "#E8EDF2",
    aspectRatio: "1.9",
    justifyContent: "center",
  },
});




