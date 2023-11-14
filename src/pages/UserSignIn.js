import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserSignIn = () => {
  return (
    <>
      <Header />

      <div className="row bg-primary py-5 px-5 ">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6  ">
          <div className="bg-white px-3 py-3 rounded-3 text-center">
            <h3> User Sign Up </h3>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
          <div className="bg-white px-3 py-3 rounded-3">
            <form>
              <div className="row">
                <div className="mb-3 col-6">
                  <div class="form-floating  ">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingfname"
                      placeholder="name@example.com"
                    />
                    <label for="floatingfname">First Name</label>
                  </div>
                </div>

                <div className="mb-3 col-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatinglname"
                      placeholder="name@example.com"
                    />
                    <label for="floatinglname">Last Name</label>
                  </div>
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="Password"
                />
                <label for="floatingEmail">Your Email</label>
              </div>

              <div class="form-floating mb-3 ">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <button className="btn btn-md btn-primary px-5 py-2">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserSignIn;
