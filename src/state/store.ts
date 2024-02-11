import { configureStore } from '@reduxjs/toolkit'
import  sideMenuSlice  from './slice-creater/sideMenu'


export const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch