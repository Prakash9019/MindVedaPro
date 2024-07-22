import React,{useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loginFailure, loginRequest, loginSuccess } from '../redux/reducers';

//import { AuthContext } from '../components/context';

//import Users from '../model/users';
type SignUpScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Main'>;
  };

const SignIn : React.FC<SignUpScreenProps> = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    async function getData() {
        const data = await AsyncStorage.getItem('isLoggedIn');
        console.log(AsyncStorage)
        console.log(data, 'at app.jsx');
      
      }
      useEffect(()=>{
        getData();
        console.log("Hii");
      },[])

    const textInputChange = (val : string) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val : string) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val : string) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }
    const dispatch=useDispatch();
   
    const handleSubmit = async (e : any) => {
        e.preventDefault();
        dispatch(loginRequest());            
        // const response = await axios.post('https://mindveda1.vercel.app/api/auth/login', {
        //     email: data.username,
        //     password: data.password,
        //   });
    
        //   const json = response.data;

        try {
            const response = await fetch("https://mindveda1.vercel.app/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: data.username, password: data.password})
            });
            // dispatch(login(username,password));
          
            const json = await response.json();
            console.log(response);
            console.log("hhhhhjson..");

            console.log(json);
            if (json.sucess){
            
                // Save the auth token and redirect
                
                // console.log(store.getState().userAuth.isAuthenticated)
                dispatch(loginSuccess({ user : json.jwtData, message: 'Login successful' }));
                AsyncStorage.setItem('jwtData', json.jwtData); 
            await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
                // console.log(store.getState().userAuth.isAuthenticated)
                console.log("Token saved "+json.jwtData);    
            }
            else{
                dispatch(loginFailure(json.errors[0].msg));
                Alert.alert(json.errors[0].msg);
            }
          } catch (error : any) {
           Alert.alert('Error', error.message);
          }
    }
    // const navigation = useNavigation();

    const navigateToHome = () => {
        // Dispatch the navigation action to Home screen
        navigation.dispatch(
          CommonActions.navigate({
            name: 'BottomTabsNavigation', // Replace with the actual route name for your Home screen
          })
        );
      };
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#7071E8' barStyle="light-content"/>
          <View style={styles.header}>
            <Text style={styles.text_header}>Login Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer }
        >
            <Text style={[styles.text_footer]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
           

            <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={{color: 'black', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>

                <TouchableOpacity
                    onPress={handleSubmit}
                    style={[styles.signIn, {
                        borderColor: '#7071E8',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#7071E8'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
                <Text>Don't have account</Text>
                <TouchableOpacity ><Text>SignUp</Text></TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#7071E8',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });