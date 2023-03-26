import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name:"setting",
    initialState:{
        loader:'d-none'
    },
    reducers:{
        ShowLoader:(state,action)=>{
            state.loader = ''
        },
        HideLoader:(state,action)=>{
            state.loader = 'd-none'
        }
    }
});

export const {ShowLoader,HideLoader} = settingsSlice.actions;
export default settingsSlice.reducer;