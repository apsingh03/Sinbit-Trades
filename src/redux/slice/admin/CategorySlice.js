import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendAPIS } from "../../../utils/APIS";
// import { redirect } from "react-router-dom";
import { axiosBearerToken } from "../../../utils/headerToken";

const initialState = { data: [], isLoader: false, isError: false };

export const getCategoryAsync = createAsyncThunk(
  "admin/getCategory",

  async () => {
    try {
      // const response = await axios.get(backendAPIS.blog.addCategory

      //   , {

      // });

      const response = await axios.get(
        backendAPIS.blog.addCategory
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const addCategoryAsync = createAsyncThunk(
  "admin/addCategory",
  async ({ CategoryName, redirect }) => {
    try {
      const response = await axios.post(
        backendAPIS.blog.addCategory,
        {
          name: CategoryName,
        },
        { headers: { Authorization: axiosBearerToken } }
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const deleteCategoryAsync = createAsyncThunk(
  "admin/deleteCategory",

  async ({ categoryId }) => {
    try {
      let sessionUrl = backendAPIS.blog.deleteCategoryBy + `${categoryId}/`;

      const response = await axios.delete(
        sessionUrl,

        { headers: { Authorization: axiosBearerToken } }
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const getCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCategoryAsync.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(getCategoryAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })
      .addCase(getCategoryAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      });

    builder
      .addCase(addCategoryAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(addCategoryAsync.fulfilled, (state, action) => {
        state.isLoader = false;

        state.data.data.push(action.payload.data);
      });

    builder
      .addCase(deleteCategoryAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(deleteCategoryAsync.fulfilled, (state, action) => {
        state.isLoader = false;

        const { categoryId } = action.meta.arg;

        const categoryIdx = state.data.data.findIndex((data) => {
          return data.id === categoryId;
        });

        state.data.data.splice(categoryIdx, 1);
      });
  },
});

export default getCategorySlice.reducer;
