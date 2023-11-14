import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendAPIS } from "../../../utils/APIS";
import { useNavigate } from "react-router-dom";

const initialState = {
  data: [],
  isLoader: false,
  isError: false,
  loggedAdminInfo: {
    user:
      localStorage.getItem("adminLogin") !== null
        ? JSON.parse(localStorage.getItem("adminLogin")).user[0]
        : "",
    token:
      localStorage.getItem("adminLogin") !== null
        ? JSON.parse(localStorage.getItem("adminLogin")).token
        : "",
  },
};
// localStorage.getItem("adminLogin") !== null ? JSON.parse(localStorage.getItem("adminLogin")).token.access : ""

export const adminLoginAsync = createAsyncThunk(
  "admin/login",
  async ({ email, password }) => {
    // console.log( "url - " , backendAPIS.adminPanel.login )

    const response = await axios.post(backendAPIS.adminPanel.login, {
      email: email,
      password: password,
    });

    return response.data;
  }
);

export const adminLogout = createAsyncThunk("admin/logout", async () => {
  try {
    if (localStorage.getItem("adminLogin")) {
      console.log("called logout");
      localStorage.removeItem("adminLogin");
    }
  } catch (error) {
    console.log("Error - ", error);
  }
});

export const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(adminLoginAsync.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(adminLoginAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
        // console.log("state - ", state);
        // console.log("action - ", action);

        if (action.payload.message === "Login Success") {
          alert(action.payload.message);

          try {
            const loggedAdminInfo = {
              user: action.payload.userData,
              token: action.payload.token,
            };

            const convert = JSON.stringify(loggedAdminInfo);
            localStorage.setItem("adminLogin", convert);
          } catch (error) {
            console.log("Error - ", error);
          }

          window.location.replace("/adminPanel/");
        } else {
          alert(action.payload.message);
        }
      })

      .addCase(adminLoginAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      });

    builder
      .addCase(adminLogout.pending, (state, action) => {
        state.isLoader = true;
      })

      .addCase(adminLogout.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      });
  },
});

export default loginSlice.reducer;
