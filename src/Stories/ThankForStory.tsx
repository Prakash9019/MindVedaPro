import * as React from "react";
    import {
      FlatList,
      ScrollView,
      View,
      StyleSheet,
      TouchableOpacity,
      Image,
      Text,     
    } from "react-native";
    import {NativeStackNavigationProp} from '@react-navigation/native-stack';
    import {RootStackParamList} from '../type';
   import {  useNavigation } from '@react-navigation/native';
     import AntDesign from 'react-native-vector-icons/AntDesign'

const ThankForStory = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
        <View style={styles.view1}>
          <View style={styles.view2}>
            <View style={styles.view3}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
            </View>
            <View style={styles.view4}>
              <Image
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d78d64acc8a37e683ea32482205de8c727f48ed17dcd5b2d28110133d140853?apiKey=42bb954c825745999302100cb42c8fd0&",
                }}
                style={styles.image1}
              />
            </View>
            <View style={styles.view5}>
              <Text>Thank you for sharing your journey</Text>
            </View>
            <View style={styles.view6}>
              <Text>
                Your story has the power to inspire others. We're grateful for your
                trust.
              </Text>
            </View>
            <View style={styles.view7}>
              <View style={styles.view8}>
                <Text>Back to Home</Text>
              </View>
            </View>
            <View style={styles.view9} />
          </View>
        </View>
      );
    }
    export default ThankForStory;
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
        backgroundColor: "#F7FAFC",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 50,
    paddingLeft: 20,
      },
      view3: {
        alignItems: 'flex-start',
        backgroundColor: "#F7FAFC",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 24,
    paddingRight: 60,
    paddingBottom: 24,
    paddingLeft: 16,
      },
      image1: { position: "relative", width: 24, aspectRatio: 1 },
      view4: {
        alignItems: "stretch",
        backgroundColor: "#F7FAFC",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
      },
      image2: { position: "relative", width: "100%", aspectRatio: "1.79" },
      view5: {
        color: "#0D141C",
        textAlign: "center",
        // fontFeatureSettings: "'dlig' on",
        alignSelf: "center",
        marginTop: 20,
         fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
    fontSize: 28,
      },
      view6: {
        color: "#0D141C",
        textAlign: "center",
        // fontFeatureSettings: "'dlig' on",
        alignSelf: "center",
        marginTop: 51,
        fontFamily: 'Epilogue, sans-serif',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24, 
      },
      view7: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: "#1A8AE5",
        alignSelf: "center",
        display: "flex",
        marginTop: 48,
        fontSize: 16,
        color: "#F7FAFC",
        fontWeight: "700",
        letterSpacing: 0.24,
        paddingVertical: 12, // Padding for top and bottom
        paddingHorizontal: 60, // Padding for left and right
      },
      view8: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        alignItems: "stretch",
        backgroundColor: "#1A8AE5",
        justifyContent: "center",
      },
      view9: {
        backgroundColor: "#F7FAFC",
        minHeight: 20,
        width: "100%",
        marginTop: 12,
    marginBottom: 187,
      },
    });
    

