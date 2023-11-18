import { configureStore } from "@reduxjs/toolkit";

import CategorySlice from "./slice/admin/CategorySlice";
import SubCategorySlice from "./slice/admin/SubCategorySlice";
import LoginSlice from "./slice/admin/LoginSlice";
import getSubCategoryFromCategorySlice from "./slice/admin/SubCategoryByCategory";
import BlogSlice from "./slice/admin/BlogSlice";
import GetBlogByIdSlice from "./slice/admin/GetBlogByIdSlice";

export const store = configureStore({
  reducer: {
    category: CategorySlice,
    subCategory: SubCategorySlice,
    adminLogin: LoginSlice,
    subCatByCatId: getSubCategoryFromCategorySlice,
    blog: BlogSlice,
    blogById: GetBlogByIdSlice,
  },
});
