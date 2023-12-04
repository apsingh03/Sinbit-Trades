import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendAPIS } from "../../../utils/APIS";
// import { useNavigate } from "react-router-dom";
import { axiosBearerToken } from "../../../utils/headerToken";

const initialState = { data: [], isLoader: false, isError: false };

export const getSubCategoryAsync = createAsyncThunk(
  "admin/getSubCategory",
  async () => {
    try {
      const response = await axios.get(backendAPIS.blog.addSubCategory, {
        headers: {
          Authorization: axiosBearerToken,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const addSubCategoryAsync = createAsyncThunk(
  "admin/addSubCategory",
  async ({ cat_Id, SubCatName, redirect }) => {
    try {
      const response = await axios.post(
        backendAPIS.blog.addSubCategory,
        { cat_Id: cat_Id, SubCatName: SubCatName },
        { headers: { Authorization: axiosBearerToken } }
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const deleteSubCategoryAsync = createAsyncThunk(
  "admin/deleteSubCategory",
  async ({ subCategoryId }) => {
    try {
      let sessionUrl =
        backendAPIS.blog.deleteSubCategoryBy + `${subCategoryId}/`;

      // console.log(" sessionUrl " , sessionUrl )

      const response = await axios.delete(
        sessionUrl,

        { headers: { Authorization: axiosBearerToken } }
      );

      // console.log( "response ",   response.data )
      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const getSubCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getSubCategoryAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(getSubCategoryAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })

      .addCase(getSubCategoryAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      });

    builder
      .addCase(addSubCategoryAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(addSubCategoryAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        // alert(action.payload.message);

        console.log("state", state.data.data);
        console.log("action", action);

        state.data.data.push(action.payload.data[0]);
      });

    builder
      .addCase(deleteSubCategoryAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(deleteSubCategoryAsync.fulfilled, (state, action) => {
        state.isLoader = false;

        const { subCategoryId } = action.meta.arg;

        const subCatIndex = state.data.data.findIndex((data) => {
          return data.id === subCategoryId;
        });

        state.data.data.splice(subCatIndex, 1);
      });
  },
});

export default getSubCategorySlice.reducer;
