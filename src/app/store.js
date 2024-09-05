import { configureStore } from '@reduxjs/toolkit'
import infoReducer from "./infoSlice.js"
import mentalReducer from "./mentalSlice.js"

export const store = configureStore({
  reducer: {
    info: infoReducer,
    mental: mentalReducer,
  },
})