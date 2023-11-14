import { configureStore } from "@reduxjs/toolkit";

import CategorySlice from "./slice/admin/CategorySlice";
import SubCategorySlice from "./slice/admin/SubCategorySlice";
import LoginSlice from "./slice/admin/LoginSlice";

export const store = configureStore({
  reducer: {
    category: CategorySlice,
    subCategory: SubCategorySlice,
    adminLogin: LoginSlice,
  },
});
