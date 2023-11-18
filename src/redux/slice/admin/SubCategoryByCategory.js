import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendAPIS } from "../../../utils/APIS";
// import { useNavigate } from "react-router-dom";
import { axiosBearerToken } from "../../../utils/headerToken";

const initialState = { data: [], isLoader: false, isError: false };

export const subCategoryFromCatIdAsync = createAsyncThunk(
  "admin/addSubCategory",
  async ({ cat_Id }) => {
    try {
      let sessionUrl = backendAPIS.blog.getSubCategoryBy + `${cat_Id}/`;

      // console.log( "sessionUrl - " , cat_Id  , sessionUrl )

      const response = await axios.get(sessionUrl, {
        headers: { Authorization: axiosBearerToken },
      });

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const getSubCategoryFromCategorySlice = createSlice({
  name: "subCategoryFromCat",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(subCategoryFromCatIdAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(subCategoryFromCatIdAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })

      .addCase(subCategoryFromCatIdAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});

export default getSubCategoryFromCategorySlice.reducer;
