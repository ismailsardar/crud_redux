import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Slice/ProductSlice";
import settingsSlice from "../Slice/settingsSlice";
// import userSlice from "../Slice/userSlice";

export default configureStore({
  reducer: {
    product: ProductSlice,
    settings: settingsSlice
    // users: userSlice,
  }
});
