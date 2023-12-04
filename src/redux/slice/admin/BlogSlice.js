import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendAPIS } from "../../../utils/APIS";
// import { redirect } from "react-router-dom";
import { axiosBearerToken } from "../../../utils/headerToken";

const initialState = { data: [], isLoader: false, isError: false };

export const getBlogAsync = createAsyncThunk(
  "admin/getBlog",

  async () => {
    try {
      const response = await axios.get(backendAPIS.blog.createBlog);

      // console.log("GET Blog ", response.data)
      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }

    // console.log("Blog Slice ", backendAPIS.blog.createBlog);
  }
);

export const addBlogAsync = createAsyncThunk(
  "admin/addBlog",
  async ({ catId, subCatId, authorId, heading, description }) => {
    try {
      const response = await axios.post(
        backendAPIS.blog.createBlog,

        {
          catId: catId,
          subCatId: subCatId,
          authorId: authorId,
          heading: heading,
          description: description,
        },

        { headers: { Authorization: axiosBearerToken } }
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const updateBlogAsync = createAsyncThunk(
  "admin/updateBlog",
  async ({ catId, subCatId, authorId, heading, description }) => {
    try {
      const response = await axios.put(
        backendAPIS.blog.createBlog,

        {
          catId: catId,
          subCatId: subCatId,
          authorId: authorId,
          heading: heading,
          description: description,
        },

        { headers: { Authorization: axiosBearerToken } }
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const blogIsFeaturedByAsync = createAsyncThunk(
  "admin/isFeatured",
  async ({ blogId, authorId, msg }) => {
    try {
      let sessionUrl =
        backendAPIS.blog.blogIsFeaturedBy + `${blogId}/${authorId}/`;
      // console.log("slice " ,sessionUrl , blogId, authorId , msg )

      const response = await axios.patch(
        sessionUrl,

        {
          actionMsg: msg,
        },

        { headers: { Authorization: axiosBearerToken } }
      );

      // console.log("is Featured - " , response.data )

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const blogIsPublishedByAsync = createAsyncThunk(
  "admin/IsPublished",
  async ({ blogId, authorId, msg }) => {
    try {
      let sessionUrl =
        backendAPIS.blog.blogIsPublishedBy + `${blogId}/${authorId}/`;
      // console.log("slice " ,sessionUrl , blogId, authorId , msg )

      const response = await axios.patch(
        sessionUrl,

        {
          actionMsg: msg,
        },

        { headers: { Authorization: axiosBearerToken } }
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const deleteBlogByAsync = createAsyncThunk(
  "admin/delete",
  async ({ blogId, authorId }) => {
    try {
      let sessionUrl = backendAPIS.blog.deleteBlogBy + `${blogId}/${authorId}/`;
      // console.log("slice " ,sessionUrl , blogId, authorId  )

      const response = await axios.patch(
        sessionUrl,
        {},

        { headers: { Authorization: axiosBearerToken } }
      );

      // console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const permanentDeleteBlogByAsync = createAsyncThunk(
  "admin/permanentDelete",
  async ({ blogId, authorId }) => {
    try {
      let sessionUrl =
        backendAPIS.blog.permanentDeleteBlogBy + `${blogId}/${authorId}/`;
      // console.log("slice " ,sessionUrl , blogId, authorId  )

      const response = await axios.delete(
        sessionUrl,

        { headers: { Authorization: axiosBearerToken } }
      );

      // console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error.response.data.detail, " -> ", error);
    }
  }
);

export const BlogSlice = createSlice({
  name: "blog",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getBlogAsync.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(getBlogAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;

        // console.log("GET state - " , state.data )
        // console.log("action - " , action )
      })
      .addCase(getBlogAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      })

      .addCase(addBlogAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(addBlogAsync.fulfilled, (state, action) => {
        state.isLoader = false;

        alert(action.payload.message);

        // const data = state.data.find((data) => {
        //   console.log(data);
        // });

        // state.data = action.payload;
      })

      .addCase(updateBlogAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(updateBlogAsync.fulfilled, (state, action) => {
        state.isLoader = false;

        // console.log("state - ", state )
        // console.log("action - ", action )
        // alert(action.payload.message);
        // console.log( "payload - ",  action.payload)
        state.data = action.payload;
      })

      // isFeatured

      .addCase(blogIsFeaturedByAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(blogIsFeaturedByAsync.fulfilled, (state, action) => {
        state.isLoader = false;

        const { authorId, blogId } = action.meta.arg;

        state.data.data.filter((data) => {
          if (data.id === blogId && data.authorId.id === authorId) {
            data.isFeatured = !data.isFeatured;
          }
        });
      })

      // isPublished
      .addCase(blogIsPublishedByAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(blogIsPublishedByAsync.fulfilled, (state, action) => {
        state.isLoader = false;

        const { authorId, blogId } = action.meta.arg;

        state.data.data.filter((data) => {
          if (data.id === blogId && data.authorId.id === authorId) {
            data.isPublished = !data.isPublished;
          }
        });
      })

      .addCase(deleteBlogByAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(deleteBlogByAsync.fulfilled, (state, action) => {
        state.isLoader = false;

        const { authorId, blogId } = action.meta.arg;

        const blogIdx = state.data.data.findIndex((data) => {
          return data.id === blogId && data.authorId.id === authorId;
        });

        state.data.data.splice(blogIdx, 1);
      })

      .addCase(permanentDeleteBlogByAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(permanentDeleteBlogByAsync.fulfilled, (state, action) => {
        state.isLoader = false;

        const { authorId, blogId } = action.meta.arg;

        const blogIdx = state.data.data.findIndex((data) => {
          return data.id === blogId && data.authorId.id === authorId;
        });

        state.data.data.splice(blogIdx, 1);
      });
  },
});

export default BlogSlice.reducer;
