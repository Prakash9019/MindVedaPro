import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  ImageStyle,
  Image,
  Text,
  TextInput,
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'


const SearchPage = () => {
  return (
    <ScrollView>
    <View style={styles.view1}>
      <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          {/* <Image   
            source={{
              uri: `https://cdn.builder.io/api/v1/image/assets/TEMP/2fe6238cae16bee719b5431619bced28b7eb02e6a193a55920a1961936296431?apiKey=42bb954c825745999302100cb42c8fd0&`,
            }}
            style={styles.image1 as ImageStyle}
          /> */}
          <View style={styles.view4}>
            <Text>Search</Text>
          </View>
        </View>
      </View>
      <View style={styles.view5}>
        {/* <Image
           
          source={{
            uri: `https://cdn.builder.io/api/v1/image/assets/TEMP/fa2c6a261a92cb26dc7384595f18b312e18bb1bd2ee58852d1bb8b7e19d76c17?apiKey=42bb954c825745999302100cb42c8fd0&`,
          }}
          
        /> */}
        <View style={styles.view6}>
          <TextInput>Search for mental health support</TextInput>
        </View>
      </View>
      <View style={styles.view7}>
        <Text>Trending Communities</Text>
      </View>
      <View style={styles.view8}>
        <View style={styles.view9}>
          <Text>Anxiety Support Group</Text>
        </View>
        <View style={styles.view10}>
          <Text>Depression Chat Room</Text>
        </View>
        <View style={styles.view11}>
          <Text>Stress Management</Text>
        </View>
      </View>
      <View style={styles.view12}>
        <Text>Popular Experts</Text>
      </View>
      <View style={styles.view13}>
        <View style={styles.view14}>
          <View>
            <Text>Dr. Chandana Reddy</Text>
          </View>
          <View >
            <Text>Psychologist</Text>
          </View>
        </View>
        {/* <Image
           
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c3b361e53bb9be6dbeee212eabc873be3cf52ade18e50657e4679280c420603?apiKey=42bb954c825745999302100cb42c8fd0&",
          }}
          style={styles.image3 as ImageStyle }
        /> */}
        <View style={styles.image3} >
          <AntDesign size={25} name="home" color={"black"}/>
        </View>
        
      </View>
      <View style={styles.view17}>
        <View style={styles.view18}>
          <View >
            <Text>Dr. Harshi Singh</Text>
          </View>
          <View >
            <Text>Bipolar Expert</Text>
          </View>
        </View>
        {/* <Image
         style={styles.image4 as ImageStyle}
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/04d62e7f677bf95b5626b043e264a3f528d4dbbcdcdb0b277bd843d231a7d16c?apiKey=42bb954c825745999302100cb42c8fd0&",
          }}
          
        /> */}
      </View>
      <View style={styles.view21}>
        <View style={styles.view22}>
          <View >
            <Text>Dr. Emilia Clarke</Text>
          </View>
          <View>
            <Text>
              Mental Health Counselor, specializes in stress management
            </Text>
          </View>
        </View>
        {/* <Image
           
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9f07632e8f3b77342fa34c60d2accccffc814f54aefda12918566addc4f920e?apiKey=42bb954c825745999302100cb42c8fd0&",
          }}
          style={styles.image5 as ImageStyle}
        /> */}
      </View>
      <View style={styles.view25}>
        <Text>Trending</Text>
      </View>
      <View style={styles.view26}>
        <View style={styles.view27}>
          <View >
            <Text>Cognitive behavioral therapy</Text>
          </View>
          <View >
            <Text>Explore the benefits of CBT</Text>
          </View>
        </View>
        {/* <Image
           
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/497bd5cfba3b3a21acb8b0057a9ea526d3967a5d7b3a78735f7420ef2060ee30?apiKey=42bb954c825745999302100cb42c8fd0&",
          }}
          style={styles.image6 as ImageStyle}
        /> */}
      </View>
      <View style={styles.view30}>
        <View style={styles.view31}>
          <View >
            <Text>Mindfulness meditation</Text>
          </View>
          <View >
            <Text>Find peace in the present moment</Text>
          </View>
        </View>
        {/* <Image
           
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b46fb8911c1dbad54792735ca93ede1ca29be805da693fe2e63eece881410cae?apiKey=42bb954c825745999302100cb42c8fd0&",
          }}
          style={styles.image7 as ImageStyle}
        /> */}
      </View>
      <View style={styles.view34}>
        <View style={styles.view35}>
          <View >
            <Text>Self care tips</Text>
          </View>
          <View >
            <Text>Simple tips for self care</Text>
          </View>
        </View>
        {/* <Image
           
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6410c444c4ede83897912036c3165c62fb2a05ec98a625ce8d3e2a6af4711911?apiKey=42bb954c825745999302100cb42c8fd0&",
          }}
          style={styles.image8 as ImageStyle}
        /> */}
      </View>
      <View style={styles.view38}>
        <View style={styles.view39}>
          <View >
            <Text>Social anxiety</Text>
          </View>
          <View > 
            {/* style={styles.view41} */}
            <Text>Connect with others with similar experiences</Text>
          </View>
        </View>
        {/* <Image
           
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8570eb378adfb42eb3dc7a9878b8d2f0ea34d8c5a0a7c2bb04ca59910b059c25?apiKey=42bb954c825745999302100cb42c8fd0&",
          }}
          style={styles.image9 as ImageStyle}
        /> */}
      </View>
      </View>
    </View>
    </ScrollView>
  );
}

export default SearchPage;

const styles = StyleSheet.create({
  view1: {
    alignItems: "stretch",
    backgroundColor: "#grey",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
  marginHorizontal: 0,
 marginVertical: "auto",
  },
  view2: {
    alignItems: "stretch",
    backgroundColor: "#grey",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: 18,
    color: "#0D141C",
    fontWeight: "700",
    paddingTop: 12,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 12,
  },
  view3: {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    paddingVertical: 6,
    paddingHorizontal: "auto",
  },
  image1: { position: "relative", width: 24, aspectRatio: 1 },
  view4: {

    fontFamily: "Epilogue, sans-serif",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  view5: {
    alignItems: "stretch",
    borderRadius: 48,
    backgroundColor: "#E8EDF2",
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    fontSize: 16,
    color: "#4F7596",
    fontWeight: "400",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  image2: { position: "relative", width: 24, aspectRatio: 1 },
  view6: {

    fontFamily: "Epilogue, sans-serif",
    flexGrow: 1,
  },
  view7: {
    color: "#0D141C",

    marginTop: 12,
    width: "100%",
    alignItems: "stretch",
    paddingVertical: 6,
    paddingHorizontal: 16,
    // font: "700 18px Epilogue, sans-serif ",
  },
  view8: {
     alignItems: 'flex-start',
    display: "flex",
    marginTop: 8,
    width: "100%",
    flexDirection: "column",
    fontSize: 14,
    color: "#0D141C",
    fontWeight: "500",
    paddingTop: 12,
    paddingRight: 80,
    paddingLeft: 12,
    paddingBottom: 12,
  },
  view9: {

    fontFamily: "Epilogue, sans-serif",
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 16,
    backgroundColor: "#E8EDF2",
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  view10: {

    fontFamily: "Epilogue, sans-serif",
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 16,
    backgroundColor: "#E8EDF2",
    marginTop: 12,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  view11: {

    fontFamily: "Epilogue, sans-serif",
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 16,
    backgroundColor: "#E8EDF2",
    marginTop: 12,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  div1: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flexShrink: 0,
    marginTop: 20,
  },
  view12: {
    color: "#0D141C",

    alignSelf: "auto",
   //11 margin: "16px 0 0 16px",
    // font: "700 18px Epilogue, sans-serif ",
  },
  view13: {
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#grey",
    display: "flex",
    marginTop: 8,
    width: "100%",
    gap: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  view14: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
  },
  view15: {
    color: "#0D141C", 
    // font: "500 16px Epilogue, sans-serif ",
  },
  view16: {
    color: "#4F7596",
    // font: "400 14px Epilogue, sans-serif ",
  },
  image3: {
    position: "relative",
    width: 24,
   marginHorizontal: 'auto',
    marginTop: 0,
    aspectRatio: 1,
  },
  view17: {
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#grey",
    display: "flex",
    width: "100%",
    gap: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  view18: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
  },
  view19: {
    color: "#0D141C",
    // font: "500 16px Epilogue, sans-serif ",
  },
  view20: {
    color: "#4F7596",
    // font: "400 14px Epilogue, sans-serif ",
  },
  image4: {
    position: 'relative',
    width: 24,
    marginTop: 'auto',
    marginHorizontal: 0,
    aspectRatio: 1,
  },
  view21: {
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#grey",
    display: "flex",
    gap: 18,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  view22: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexGrow: 1,
    flexBasis: "0%",
    flexDirection: "column",
    paddingTop: 0,
    paddingRight: 80,
    paddingLeft: 12,
    paddingBottom: 0,
  },
  view23: {
    color: "#0D141C",

    // font: "500 16px Epilogue, sans-serif ",
  },
  view24: {
    color: "#4F7596",

    // font: "400 14px Epilogue, sans-serif ",
  },
  image5: {
    position: "relative",
    width: 24,
   marginHorizontal: 'auto',
    marginTop: 0,
    aspectRatio: 1,
  },
  view25: {
    color: "#0D141C",

    alignSelf: 'flex-start',
   //11 margin: "16px 0 0 16px",
    // font: "700 18px Epilogue, sans-serif ",
  },
  view26: {
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#grey",
    display: "flex",
    marginTop: 8,
    width: "100%",
    gap: 20,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  view27: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
  },
  view28: {
    color: "#0D141C",

    // font: "500 16px Epilogue, sans-serif ",
  },
  view29: {
    color: "#4F7596",

    // font: "400 14px Epilogue, sans-serif ",
  },
  image6: {
    position: "relative",
    width: 24,
   marginHorizontal: 'auto',
    marginTop: 0,
    aspectRatio: 1,
  },
  view30: {
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#grey",
    display: "flex",
    width: "100%",
    gap: 20,
    paddingTop: 7,
    paddingRight: 18,
    paddingLeft: 18,
    paddingBottom: 20,
  },
  view31: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
  },
  view32: {
    color: "#0D141C",

    // font: "500 16px Epilogue, sans-serif ",
  },
  view33: {
    color: "#4F7596",

    // font: "400 14px Epilogue, sans-serif ",
  },
  image7: {
    alignSelf: 'flex-start',
    position: "relative",
    marginTop: 11,
    width: 24,
    aspectRatio: 1,
  },
  view34: {
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#grey",
    display: "flex",
    width: "100%",
    gap: 20,
    paddingVertical: 14,
    paddingHorizontal: 17,
  },
  view35: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
  },
  view36: {
    color: "#0D141C",

    // font: "500 16px Epilogue, sans-serif ",
  },
  view37: {
    color: "#4F7596",

    // font: "400 14px Epilogue, sans-serif ",
  },
  image8: {
    position: "relative",
    width: 24,
   marginHorizontal: 'auto',
    marginTop: 0,
    aspectRatio: 1,
  },
  view38: {
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#grey",
    display: "flex",
    gap: 19,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  view39: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    flexGrow: 1,
    flexBasis: "0%",
    flexDirection: "column",
  },
  
  image9: {
    position: "relative",
    width: 24,
   marginHorizontal: 'auto',
    marginTop: 0,
    aspectRatio: 1,
  },
});


