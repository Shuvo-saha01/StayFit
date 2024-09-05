import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input1: 3,
  input2: 3,
  input3: 3,
  input4: 3,
  input5: 3,
  input6: 3,
  input7: 3,
  input8: 3,
  input9: 3,
  input10: 3,
};

export const mentalSlice = createSlice({
    name: "mental question",
    initialState,
    reducers:{
        reduxInput1: (state, action) => {
            state.input1 = action.payload;
        },
        reduxInput2: (state, action) => {
            state.input2 = action.payload;
        },
        reduxInput3: (state, action) => {
            state.input3 = action.payload;
        },
        reduxInput4: (state, action) => {
            state.input4 = action.payload;
        },
        reduxInput5: (state, action) => {
            state.input5 = action.payload;
        },
        reduxInput6: (state, action) => {
            state.input6 = action.payload;
        },
        reduxInput7: (state, action) => {
            state.input7 = action.payload;
        },
        reduxInput8: (state, action) => {
            state.input8 = action.payload;
        },
        reduxInput9: (state, action) => {
            state.input9 = action.payload;
        },
        reduxInput10: (state, action) => {
            state.input10 = action.payload;
        },
    }

});

export const {reduxInput1, reduxInput2, reduxInput3, reduxInput4, reduxInput5, reduxInput6, reduxInput7, reduxInput8, reduxInput9, reduxInput10} = mentalSlice.actions;
export default mentalSlice.reducer