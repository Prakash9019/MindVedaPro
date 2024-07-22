import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authSlice from "./reducers"
export const store = configureStore({
  reducer: {
    userAuth: authSlice,
    user: authSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch