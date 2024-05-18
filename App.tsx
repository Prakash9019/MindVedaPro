/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigator/RootNavigator';
import { createNativeStackNavigator, } from '@react-navigation/native-stack'
import HomePage from './src/Home/HomePage';
import Main from './src/Components/Main';
import SignUp from './src/Components/SignUp';
import SignIn from './src/Components/SignIn';
// import {loadUserSuccess} from "./src/redux/reducers";
const Stack = createNativeStackNavigator();
import type { RootState } from './src/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { store } from './src/redux/store'
// import { Provider } from 'react-redux'
// import store from "./src/redux/store"
// import {isAuthenticated} from "./src/redux/reducers";
import { useAppSelector } from './src/redux/hooks';
import { Provider } from 'react-redux';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

  // const dispatch = useAppDispatch();
function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const AuthenticationStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

// Set up AuthenticationStack
function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
      <AuthenticationStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <AuthenticationStack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
    </AuthenticationStack.Navigator>
  );
}

// Set up RootStack
function RootNavigate() {
  return (
    <RootNavigator/>
  );
}



function App(): JSX.Element {
  
  // const {isAuthenticated}  = useAppSelector(state => state.userAuth);
  const isUser = useSelector((state: RootState) => state.userAuth.isAuthenticated)
  const dispatch = useDispatch()
  const isDarkMode = useColorScheme() === 'dark';
    const AppNavigation =isUser? RootNavigate : AuthenticationNavigator;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Conditionally render the appropriate navigator based on authentication state
  // console.log(isAuthenticated);
  return (
    <NavigationContainer>
       {/* <ToastProvider ref={(ref) => Toast.setRef(ref)} /> */}
     <AppNavigation/>
    </NavigationContainer>
  )

}




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
