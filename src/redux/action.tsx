// import { useDispatch } from "react-redux";
// import { registerRequest, registerSuccess, registerFailure,loginRequest,loginSuccess,loginFailure } from "./reducers"; // Update the path
// import axios from "axios";
// // Inside your component
// const dispatch = useDispatch();
// const serverUrl="https://notes-application-api-pi.vercel.app/api/auth";

// const handleRegister = async (formData : object) => {
//   try {
//     dispatch(registerRequest());
//     const response = await axios.post(`${serverUrl}/register`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     dispatch(registerSuccess(response.data));
//     // Registration successful
//   } catch (error:any ) {
//     dispatch(registerFailure(error.response.data.message));
//     // Handle registration failure
//   }
// };
// export const login = async (username :string , password :string) => {
//   try {
//     dispatch(loginRequest());

//     const { data } = await axios.post(
//       `${serverUrl}/login`,
//       { username, password },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     dispatch(loginSuccess(data));
//   } catch (error : any ) {
//     dispatch(loginFailure(error.response.data.message));
//   }
// };


// export default handleRegister;