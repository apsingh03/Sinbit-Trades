import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { adminLoginAsync } from "../../redux/slice/admin/LoginSlice";

const AdminSignIn = () => {
  const dispatch = useDispatch();

  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const adminLoginOnSubmit = (e) => {
    e.preventDefault();
    // console.log("00000000");

    dispatch(
      adminLoginAsync({
        email: loginEmail,
        password: loginPassword,
      })
    );
  };

  return (
    <>
      <Header />

      <div className=" bg-white py-5 px-5  d-flex flex-column justify-content-center align-items-center ">
        <div className="col-12 bg-white px-3 py-3 rounded-3 text-center ">
          <form onSubmit={adminLoginOnSubmit}>
            <div className="form-floating mb-3 ">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Password"
                required
                onChange={(e) => setloginEmail(e.target.value)}
              />
              <label htmlFor="floatingEmail">Your Email</label>
            </div>

            <div className="form-floating mb-3 ">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
                onChange={(e) => setloginPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-md btn-primary px-5 py-2">
              Admin Sign In
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminSignIn;
