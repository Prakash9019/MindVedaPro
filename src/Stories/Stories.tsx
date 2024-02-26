import * as React from "react";
    import {
      FlatList,
      ScrollView,
      View,
      StyleSheet,
      Image,
      Text,
    } from "react-native";

const Stories = () => {
  return (
        <View style={styles.view1}>
          <View style={styles.view2}>
            <View style={styles.view3}>
              <View style={styles.view4}>
                {/* <Image
                  resizeMode="auto"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d329b27758ae0e33459e254879211a33b283ce1be9a87f4b58604852c40b2e58?apiKey=42bb954c825745999302100cb42c8fd0&",
                  }}
                  style={styles.image1}
                /> */}
                <View style={styles.view5}>
                  <Text>Stories</Text>
                </View>
                {/* <Image
                  resizeMode="auto"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/892fa454aa7a764fa50d30b5fce1c02d76b760e85491927f02bb65fbbad1c0c7?apiKey=42bb954c825745999302100cb42c8fd0&",
                  }}
                  style={styles.image2}
                /> */}
              </View>
            </View>
            <View style={styles.view6}>
              <View style={styles.view7}>
                <View style={styles.view8}>
                  <Text>All stories</Text>
                </View>
                <View style={styles.view9}>
                  <Text>Anxiety</Text>
                </View>
                <View style={styles.view10}>
                  <Text>Depression</Text>
                </View>
              </View>
              <View style={styles.view11}>
                <View style={styles.view12}>
                  <Text>Paranoia</Text>
                </View>
                <View style={styles.view13}>
                  <Text>Schizophrenia</Text>
                </View>
              </View>
              <View style={styles.view14}>
                <Text>Bipolar Disorder</Text>
              </View>
            </View>
            <View style={styles.view15}>
              <Text>Positive stories</Text>
            </View>
            <View style={styles.view16}>
              <View style={styles.view17}>
                <View style={styles.view18}>
                  <View style={styles.view19}>
                    <Text>Mental Health</Text>
                  </View>
                  <View style={styles.view20}>
                    <Text>Neeraj Chopra</Text>
                  </View>
                  <View style={styles.view19}>
                    <Text>How I gained confidence and overcame anxiety</Text>
                  </View>
                </View>
                {/* <Image
                  resizeMode="auto"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6c518907f171a0554423d49908dc2d9850f7095ca714a468e7c7768ff799c4a?apiKey=42bb954c825745999302100cb42c8fd0&",
                  }}
                  style={styles.image3}
                /> */}
              </View>
            </View>
            <View style={styles.view16}>
              <View style={styles.view17}>
                <View style={styles.view18}>
                  <View style={styles.view19}>
                    <Text>Bipolar Disorder</Text>
                  </View>
                  <View style={styles.view20}>
                    <Text>Masa Vaishnavi</Text>
                  </View>
                  <View style={styles.view19}>
                    <Text>
                      Riding the waves: My experience with bipolar disorder
                    </Text>
                  </View>
                </View>
                {/* <Image
                  resizeMode="auto"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/755836f84d7656773bdf5e94714c3dc7fa795beb606e61222f406509aadc9c9e?apiKey=42bb954c825745999302100cb42c8fd0&",
                  }}
                  style={styles.image7}
                /> */}
              </View>
            </View>
            <View style={styles.view46}>
              <View style={styles.view47}>
                <View style={styles.view48}>
                  <Text>Do you have a story to share?</Text>
                </View>
                <View style={styles.view49}>
                  <View style={styles.view50}>
                    <Text>Share</Text>
                  </View>
                </View>
              </View>
            </View>
          
          </View>
        </View>
      );
    }

    export default Stories;
    
    const styles = StyleSheet.create({
      view1: {
        alignItems: "stretch",
        backgroundColor: "#FFF",
        display: "flex",
        maxWidth: 480,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        color: "#4F7596",
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
        color: "#0D141C",
        fontWeight: "700",
        padding: "16px 16px 8px",
      },
      view4: {
        justifyContent: "space-between",
        alignItems: "stretch",
        display: "flex",
        gap: 20,
        padding: "12px 0",
      },
      image1: { position: "relative", width: 24, aspectRatio: 1 },
      view5: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
      },
      image2: { position: "relative", width: 24, aspectRatio: 1 },
      view6: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        fontSize: 14,
        color: "#0D141C",
        fontWeight: "500",
        paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 58,
    paddingBottom: 12,
      },
      view7: {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: 12,
      },
      view8: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 12,
        backgroundColor: "#E8EDF2",
        flexGrow: 1,
        padding: "6px 16px",
      },
      view9: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 12,
        backgroundColor: "#E8EDF2",
        flexGrow: 1,
        padding: "6px 16px",
      },
      view10: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 12,
        backgroundColor: "#E8EDF2",
        flexGrow: 1,
        padding: "6px 16px",
      },
      view11: {
        display: "flex",
        marginTop: 12,
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: 12,
      },
      view12: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 12,
        backgroundColor: "#E8EDF2",
        flexGrow: 1,
        padding: "6px 16px",
      },
      view13: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 12,
        backgroundColor: "#E8EDF2",
        flexGrow: 1,
        padding: "6px 16px",
      },
      view14: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 12,
        backgroundColor: "#E8EDF2",
        marginTop: 12,
        padding: "6px 16px",
      },
      view15: {
        color: "#0D141C",
        // fontFeatureSettings: "'dlig' on",
        alignSelf: "flex-start",
        margin: "20px 0 0 16px",
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
        padding: "0 26px 21px 0",
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
      view46: {
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#F7FAFC",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        color: "#0D141C",
        padding: "12px 16px",
      },
      view47: {
        alignItems: "stretch",
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
      },
      view48: {
        // fontFeatureSettings: "'dlig' on",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto",
        margin: "auto 0",
        fontFamily: 'Epilogue, sans-serif',
        fontWeight: '700',
        fontSize: 16,
      },
      view49: {
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 12,
        backgroundColor: "#E8EDF2",
        display: "flex",
        flexBasis: "0%",
        flexDirection: "column",
        fontSize: 14,
        fontWeight: "500",
        padding: "6px 22px",
      },
      view50: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        alignItems: "stretch",
        backgroundColor: "#E8EDF2",
        aspectRatio: "1.9",
        justifyContent: "center",
      },
    });