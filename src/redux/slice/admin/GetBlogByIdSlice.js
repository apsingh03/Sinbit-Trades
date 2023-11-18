import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendAPIS } from "../../../utils/APIS";
// import { axiosBearerToken } from "../../../utils/headerToken";

const initialState = { data: [], isLoader: false, isError: false };

export const getBlogByIdAsync = createAsyncThunk(
  "admin/getBlogById",
  async ({ blogId }) => {
    try {
      let sessionUrl = backendAPIS.blog.getBlogBy + `${blogId}/`;

      const response = await axios.get(sessionUrl);

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const getBlogByIdSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getBlogByIdAsync.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(getBlogByIdAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
        // console.log("payload - ",  action.payload.data)
      })
      .addCase(getBlogByIdAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});

export default getBlogByIdSlice.reducer;
