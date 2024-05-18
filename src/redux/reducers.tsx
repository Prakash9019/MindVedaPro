import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store'


interface AuthState {
    loading: boolean;
    isAuthenticated: boolean;
    user: string ;
    message: string | null;
    error: string | null;
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
      logoutSuccess: (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = "";
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

