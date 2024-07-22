import { useDispatch } from "react-redux";
import { registerRequest, registerSuccess, registerFailure,loginRequest,loginSuccess,loginFailure } from "./reducers"; // Update the path
import {updateFieldSuccess,updateFieldFailure} from "./userreducers"
import axios from "axios";
import { AppThunk } from './store';
// Inside your component name, age,email,gender,location,image
// interface User{
//   name: string | "";
//   email: string | "";
//   age: string | "";
//   gender:string | "";
//   location:string | "";
//   image:string | "";
// }
const dispatch = useDispatch();
const serverUrl="https://mindveda1.vercel.app/api/auth";

export const handleRegister = async (formData : object) => {
  try {
    dispatch(registerRequest());
    const response = await axios.post(`${serverUrl}/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(registerSuccess(response.data));
    // Registration successful
  } catch (error:any ) {
    dispatch(registerFailure(error.response.data.message));
    // Handle registration failure
  }
};
export const login = async (username :string , password :string) => {
  try {
    dispatch(loginRequest());

    const { data } = await axios.post(
      `${serverUrl}/login`,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("dataa in action");
    console.log(data);
    dispatch(loginSuccess(data));
  } catch (error : any ) {
    dispatch(loginFailure(error.response.data.message));
  }
};

export const getUser = async (username :string , password :string) => {
    try {
      dispatch(loginRequest());
  
      const { data } = await axios.post(
        `${serverUrl}/login`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(loginSuccess(data));
    } catch (error : any ) {
      dispatch(loginFailure(error.response.data.message));
    }
  };

  // export const updateUser = async (req : any,res : any) => {
  //   try {
  //     const { data } = await axios.post(
  //       `${serverUrl}/updatenote/${userId}`,
  //       req.body,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //   } catch (error : any ) {
  //     dispatch(loginFailure(error.response.data.message));
  //   }
  // };
  interface UserState {
    id: string;
    name: string;
    email: string;
    image: string;
    address: string;
    location: string;
    // Other user properties...
  }

  export const updateUserField = (
    userId: string,
    field: keyof UserState,
    newValue: string
  ): AppThunk => async (dispatch) => {
    try {
      const response = await axios.put(`${serverUrl}/updatefield/${userId}`, {
        [field]: newValue,
      });
      console.log("helllo");
      console.log(response);
      dispatch(updateFieldSuccess({ field, value: newValue }));
    } catch (error) {
      dispatch(updateFieldFailure());
    }
  };