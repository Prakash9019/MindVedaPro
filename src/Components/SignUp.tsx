import React,{useEffect} from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
 import { UseDispatch, useDispatch } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { registerFailure, registerRequest, registerSuccess } from '../redux/reducers';

const SignUp = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch=useDispatch();
    const [data, setData] = React.useState({
        username: '',
        email: '',
        password: '',
        cpassword:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });
    const handleSubmit1 = async ( e :any) => {
        dispatch(registerRequest());

        e.preventDefault();
        try {
            console.log(data);
            const response = await axios.post('https://mindveda1.vercel.app/api/auth/user', {
                username:data.username,
              email: data.email,
              password: data.password,
            });
            console.log("hellllooooo")
            const json = response.data;
            console.log(json);
            // Save the token to AsyncStorage
            dispatch(registerSuccess({user:json.jwtData , message : "Register Successfully" }))
            
            await AsyncStorage.setItem('jwtData', json.jwtData);
            await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
            // Navigate to the next screen or perform other actions
            console.log('Token saved:', json.jwtData);
          } catch (error : any) {
            dispatch(registerFailure(error.message));
            console.error('Error during login:', error.message);
           Alert.alert('Error', 'Login failed');
          }
    }
    async function getData() {
        const data = await AsyncStorage.getItem('isLoggedIn');
        console.log(AsyncStorage)
        console.log(data, 'at app.jsx');
      
      }
      useEffect(()=>{
        getData();
        console.log("Hii");
      },[])
    

    const textInputChange = (val : string ) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
   //emailInputChange
   const emailInputChange = (val : string) => {
    setData({
        ...data,
        email: val
    });
}

    const handlePasswordChange = (val : string) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val : string) => {
        setData({
            ...data,
            cpassword: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#7071E8' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Username
            </Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
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

            <Text style={styles.text_footer}>Email
            </Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => emailInputChange(val)}
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

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
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

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                //    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                     onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
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
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            
            <View style={styles.button}>
            <Text style={ { color:'#111'}}>Already have an account  
                <TouchableOpacity 
                    onPress={()=> {navigation.navigate("SignUp")}}>
                    <Text style={ {color:'#111' ,fontSize:16,fontWeight:"bold",}}>{" "}SignIn</Text>
                </TouchableOpacity> </Text>

                <TouchableOpacity
                    onPress={()=> {handleSubmit1}}
                    style={[styles.signIn, {
                        borderColor: '#7071E8',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#7071E8'
                    }]} >Sign Up</Text>
                </TouchableOpacity> 
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#7071E8'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
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
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // backgroundColor:"blue",
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });