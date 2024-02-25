import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

const SearchPage = () => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View style={styles.view4}>
            <Text>MindVeda</Text>
          </View>
          {/* <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f59cb45b5ab73a20cae0079aab735c0dd21a0eb944e37c9f50f162f15ea1cc5?apiKey=42bb954c825745999302100cb42c8fd0&",
            }}
            style={styles.image1}
          /> */}
        </View>
      </View>
      <View style={styles.view5}>
        <Text>Reflect on your mood</Text>
      </View>
      <View style={styles.view6}>
        <View style={styles.view7}>
          {/* <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1a38dc893bdcf0d5498881416aa69894d381b1ab3d3f8d613afaef747b22594?apiKey=42bb954c825745999302100cb42c8fd0&",
            }}
            style={styles.image2}
          /> */}
          <View style={styles.view8}>
            <Text>😃 Happy</Text>
          </View>
        </View>
        <View style={styles.view7}>
          {/* <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe5ec33382f002ab80e9a3cca46681b49622912dc0b263a26566d98c26cdcc14?apiKey=42bb954c825745999302100cb42c8fd0&",
            }}
            style={styles.image2}
          /> */}
          <View style={styles.view8}>
            <Text>👍 Calm</Text>
          </View>
        </View>
        <View style={styles.view7}>
          {/* <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d06ff655e00fb7e711c4898755ff16296922367e8d63d4005f1f3d51dace696f?apiKey=42bb954c825745999302100cb42c8fd0&",
            }}
            style={styles.image2}
          /> */}
          <View style={styles.view8}>
            <Text>🤔 Anxious</Text>
          </View>
        </View>
        <View style={styles.view13} />
      </View>
      <View style={styles.view14}>
        <Image
          resizeMode="cover"
          fitContent={true}
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3542823bf36bce073c7fb896ca0ff0f6929a92c58827cb11600ba9c9a4b1525?apiKey=42bb954c825745999302100cb42c8fd0&",
          }}
          style={styles.image5}
        >
          <View style={styles.view15}>
            <Text>Be kind to yourself</Text>
          </View>
          <View style={styles.view16}>
            <Text>You're stronger than you think</Text>
          </View>
        </Image>
      </View>
      <View style={styles.view17}>
        <View style={styles.view18}>
          <View style={styles.view19}>
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5448aa4ce8348662abf71400b3e4a573fa6bd4f5809e0915cf6b92687d2f94f?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image6}
            /> */}
          </View>
          <View style={styles.view20}>
            <View style={styles.view21}>
              <Text>Mental Health Test</Text>
            </View>
            <View style={styles.view22}>
              <Text>Take the test now</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view23}>
        <View style={styles.view24}>
          <View style={styles.view25}>
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7063b032227d22684f7c14932ee1695dca0e112847ffffe9c9bb1bc73730d622?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image7}
            /> */}
          </View>
          <View style={styles.view20}>
            <View style={styles.view21}>
              <Text>Crisis Hotline</Text>
            </View>
            <View style={styles.view22}>
              <Text>Talk to someone right now</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view29}>
        <View style={styles.view30}>
          <View style={styles.view31}>
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2890b33f882796568d283973d7fdfd48b00d0942051281a8916eb5860c89865?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image8}
            /> */}
          </View>
          <View style={styles.view32}>
            <View style={styles.view33}>
              <Text>Post of the Day</Text>
            </View>
            <View style={styles.view34}>
              <Text>By Dr. Emilia Clarke</Text>
            </View>
            <View style={styles.view35}>
              <Text>Read now</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view36} />
      <View style={styles.view37} />
    </View>
  );
}
export default SearchPage;
const styles = StyleSheet.create({
  view1: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  view2: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: 18,
    color: "#141217",
    fontWeight: "700",
    padding: "16px 16px 8px",
  },
  view3: {
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    gap: 20,
    padding: "12px 1px 12px 80px",
  },
  view4: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
  },
  image1: { position: "relative", width: 24, aspectRatio: 1 },
  view5: {
    color: "#141217",
    // fontFeatureSettings: "'dlig' on",
    alignSelf: "flex-start",
    margin: "20px 0 0 16px",
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '700',
    fontSize: 22,
  },
  view6: {
    alignItems: "stretch",
    display: "flex",
    marginTop: 12,
    gap: 12,
    fontSize: 14,
    color: "#141217",
    fontWeight: "500",
    padding: "12px 1px 12px 12px",
  },
  view7: {
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: 16,
    backgroundColor: "#F2F0F5",
    display: "flex",
    gap: 8,
    padding: "6px 8px",
  },
  image2: {
    alignSelf: "flex-start",
    position: "relative",
    width: 20,
    aspectRatio: 1,
  },
  view8: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    flexGrow: 1,
  },
  view13: {
    borderRadius: 16,
    backgroundColor: "#F2F0F5",
    width: 7,
    height: 32,
  },
  view14: {
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 12,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.10)",
    backgroundColor: "#FFF",
    alignSelf: "center",
    display: "flex",
    marginTop: 89,
    width: "100%",
    maxWidth: 359,
    flexDirection: "column",
    color: "#FFF",
    padding: "0 1px",
  },
  image5: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    aspectRatio: "1.61",
    flexDirection: "column",
    alignItems: 'flex-start',
    padding: "50px 80px 16px 16px",
  },
  view15: {
    // fontFeatureSettings: "'dlig' on",
    position: "relative",
    marginTop: 98,
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '700',
    fontSize: 24,
  },
  view16: {
    // fontFeatureSettings: "'dlig' on",
    position: "relative",
    marginTop: 4,
    fontFamily: 'Epilogue, sans-serif',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24, 
  },
  view17: {
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    marginTop: 16,
    width: "100%",
    flexDirection: "column",
    padding: "12px 16px",
  },
  view18: {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
  },
  view19: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F2F0F5",
    display: "flex",
    aspectRatio: 1,
    width: 48,
    height: 48,
    padding: "0 12px",
  },
  image6: { position: "relative", width: "100%", aspectRatio: 1 },
  view20: {
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "flex-start",
    display: "flex",
    flexGrow: 1,
    flexBasis: "0%",
    flexDirection: "column",
  },
  view21: {
    color: "#141217",
    // fontFeatureSettings: "'dlig' on",
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '700',
    fontSize: 26,
  },
  view22: {
    color: "#706387",
    // fontFeatureSettings: "'dlig' on",
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '700',
    fontSize: 14,
  },
  view23: {
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: "12px 16px",
  },
  view24: {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
  },
  view25: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F2F0F5",
    display: "flex",
    aspectRatio: 1,
    width: 48,
    height: 48,
    padding: "0 12px",
  },
  image7: { position: "relative", width: "100%", aspectRatio: 1 },
  view29: {
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: "12px 16px",
  },
  view30: {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
  },
  view31: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F2F0F5",
    alignSelf: "flex-start",
    display: "flex",
    aspectRatio: 1,
    width: 48,
    height: 48,
    padding: "0 12px",
  },
  image8: { position: "relative", width: "100%", aspectRatio: 1 },
  view32: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexGrow: 1,
    flexBasis: "0%",
    flexDirection: "column",
    fontSize: 14,
    color: "#706387",
    fontWeight: "400",
  },
  view33: {
    color: "#141217",
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    fontWeight: '500',
    fontSize: 16,
  },
  view34: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
  },
  view35: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
  },
  view36: {
    borderTop: "1px solid #F2F0F5",
    backgroundColor: "#FFF",
    minHeight: 75,
    width: "100%",
  },
  view37: { backgroundColor: "#FFF", minHeight: 20, width: "100%" },
});

