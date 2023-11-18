import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ErrorAndLoader from "../../../components/ErrorAndLoader";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteCategoryAsync,
  getCategoryAsync,
} from "../../../redux/slice/admin/CategorySlice";
import { addCategoryAsync } from "../../../redux/slice/admin/CategorySlice";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AddCategory = () => {
  const getCategoryFromRedux = useSelector((state) => state.category);

  // console.log( "redux - ",  getCategoryFromRedux)

  const [CategoryName, setCategoryName] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(getCategoryAsync());
  }, []);

  const addCatOnClickHandler = () => {
    if (CategoryName.length !== 0) {
      const alert = (msg) => {
        return (
          <Alert variant="filled" severity="success">
            {msg}
          </Alert>
        );
      };

      const redirect = (msg) => {
        // navigation(msg);
      };

      dispatch(
        addCategoryAsync({
          CategoryName: CategoryName,
          alert: alert,
          redirect: redirect,
        })
      );
      navigation("/adminPanel/");
    }
  };

  return (
    <>
      <div className="bg-white py-5 px-5 ">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6  mb-5 mb-md-0 ">
            <h4 className="text-center mb-5">Add Category</h4>
            <div className="mb-3 col-12">
              <div className="form-floating  ">
                <input
                  type="text"
                  className="form-control"
                  id="floatingfname"
                  required
                  placeholder=""
                  onChange={(e) => setCategoryName(e.target.value)}
                />
                <label htmlFor="floatingfname">Category Name</label>
              </div>
            </div>

            <button
              onClick={() => addCatOnClickHandler()}
              className="btn btn-md btn-primary px-5 py-2"
            >
              Add Category
            </button>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <h4 className="text-center">All Category List</h4>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(function () {
                  try {
                    if (getCategoryFromRedux.isLoader !== true) {
                      return getCategoryFromRedux.data.data !== undefined
                        ? getCategoryFromRedux.data.data.map((data, index) => {
                            return (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.name}</td>
                                <td>
                                  <div className="row">
                                    <div className="col-6">
                                      {/* <button className="btn btn-primary">
                                        Update
                                      </button> */}
                                    </div>
                                    <div className="col-6">
                                      <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                          if (
                                            window.confirm(
                                              "Are you sure want to Delete Category? "
                                            )
                                          ) {
                                            return [
                                              dispatch(
                                                deleteCategoryAsync({
                                                  categoryId: data.id,
                                                })
                                              ),

                                              navigation("/adminPanel"),
                                            ];
                                          }
                                        }}
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        : null;
                    } else {
                      return (
                        <tr>
                          <td>
                            {" "}
                            <ErrorAndLoader isLoader={true} />{" "}
                          </td>
                        </tr>
                      );
                    }
                  } catch (error) {
                    console.log("AddCategory.js Error - ", error.message);
                  }
                })()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
