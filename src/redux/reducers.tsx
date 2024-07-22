import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store'
import axios from 'axios'; // Import Axios for API calls
import { AppThunk } from './store';

interface AuthState {
    loading: boolean;
    isAuthenticated: boolean;
    user: string ;
    message: string | null;
    error: string | null;
  }

  interface User{
    user:string;
    email:string
  }
  
  const initialState: AuthState = {
    loading: false,
    isAuthenticated: false,
    user: "",
    message: null,
    error: null,
  };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action : PayloadAction<{ user: string; message: string }> ) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      console.log(action.payload.user, action.payload.message,"helllllllloooo");
      state.message = action.payload.message;
    },
      loginFailure: (state, action : PayloadAction<string>) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
  
      registerRequest: (state) => {
        state.loading = true;
      },
      registerSuccess: (state, action: PayloadAction<{ user: string; message: string }>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      },
      registerFailure: (state, action : PayloadAction<string>) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
  
      loadUserRequest: (state) => {
        state.loading = true;
      },
      loadUserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      },
      loadUserFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
  
      logoutRequest: (state) => {
        state.loading = true;
      },
      logoutSuccess: (state,action: PayloadAction<{ user: string; message: string }>) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = action.payload.user;
        state.message = action.payload.message;
        console.log(state.user,state.message);
      },
      logoutFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
      },
  
      verificationRequest: (state) => {
        state.loading = true;
      },
      verificationSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      verificationFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },
  },
});

// interface AuthState1 {
//   loading: boolean;
//   isAuthenticated: boolean;
//   user: string ;
//   message: string | null;
//   error: string | null;
// }

// const initialState1 : AuthState1 = {
//   loading: false,
//   isAuthenticated: false,
//   user: "",
//   message: null,
//   error: null,
// };

// export const UserData = createSlice({
//   name: "userdata",
//   initialState,
//   reducers: {
//     userRequest: (state) => {
//       state.loading = true;
//     },
//     userSuccess: (state, action : PayloadAction<{ user: string; message: string }> ) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.message = action.payload.message;
//     },
//       userFailure: (state, action : PayloadAction<string>) => {
//         state.loading = false;
//         state.isAuthenticated = false;
//         state.error = action.payload;
//       },
//   }
// });

// interface UserState {
//   id: string;
//   name: string;
//   email: string;
//   photo: string;
//   address: string;
//   location: string;
//   // Other user properties...
// }

// const initialState2: UserState = {
//   id: '',
//   name: '',
//   email: '',
//   photo: '',
//   address: '',
//   location: '',
//   // Initialize other properties...
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState2,
//   reducers: {
//     updateFieldSuccess: (state, action: PayloadAction<{ field: keyof UserState; value: string }>) => {
//       const { field, value } = action.payload;
//       state[field] = value;
//     },
//     updateFieldFailure: (state) => {
//       // Handle failure (optional)
//     },
//   },
// });

// export const { updateFieldSuccess, updateFieldFailure } = userSlice.actions;

export const {
  loginRequest,
  loginSuccess,loginFailure,registerFailure,registerSuccess,registerRequest,loadUserFailure,loadUserRequest,loadUserSuccess,
  verificationRequest,verificationSuccess,verificationFailure,logoutFailure,logoutSuccess,logoutRequest,
  // ... other action creators ...
  clearError,
  clearMessage,
} = authSlice.actions;
export const isUser = (state: RootState) => state.userAuth.isAuthenticated;
export default authSlice.reducer;

