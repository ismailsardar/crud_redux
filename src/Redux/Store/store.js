import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Slice/ProductSlice";
// import userSlice from "../Slice/userSlice";

export default configureStore({
  reducer: {
    product: ProductSlice,
    // users: userSlice,
  }
});
