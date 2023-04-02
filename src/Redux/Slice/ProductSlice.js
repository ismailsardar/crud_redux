import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:"product",
    initialState:{
        List:[],
        FormValue:{
            Img:"",
            ProductCode:"",
            ProductName:"",
            Qty:"",
            TotalPrice:"",
            UnitPrice:""
        }
    },
    reducers:{
        setProductList:(state,action)=>{
            // debugger;
            state.List = action.payload;
        },
        onChangeProductInput:(state,action)=>{
            state.FormValue[`${action.payload.Name}`] = action.payload.Value;
        },
        ResetProductFormValue:(state,action)=>{
            Object.keys(state.FormValue).forEach((i) => state.FormValue[i] = "");
        }
    }
});


export const {setProductList,onChangeProductInput,ResetProductFormValue} = ProductSlice.actions;
export default ProductSlice.reducer;