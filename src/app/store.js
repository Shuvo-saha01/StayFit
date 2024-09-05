import { configureStore } from '@reduxjs/toolkit'
import infoReducer from "./infoSlice.js"

export const store = configureStore({
  reducer: {
    info: infoReducer,
  },
})