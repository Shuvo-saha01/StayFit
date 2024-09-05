import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        sex: "Male",
        age: 25,
        weight: 60,
        height: 170,
        stressed: true,
        bmi: 25,
        time: 1200,
    }
  }

export const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        reduxAge: (state, action) => {
            state.value.age = action.payload
        },
        reduxSex: (state, action) => {
            state.value.sex = action.payload
        },
        reduxWeight: (state, action) => {
            state.value.weight = action.payload
        },
        reduxHeight: (state, action) => {
            state.value.height = action.payload
        },
        reduxStressed: (state, action) => {
            state.value.stressed = action.payload
        },
        reduxBmi:(state,action) => {
            state.value.bmi = action.payload
        },
        reduxTime: (state, action) => {
            state.value.time = action.payload
        }
    }
})

export const {reduxAge, reduxSex, reduxWeight, reduxHeight, reduxStressed,reduxBmi, reduxTime} = infoSlice.actions
export default infoSlice.reducer