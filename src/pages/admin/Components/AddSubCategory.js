import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteSubCategoryAsync,
  getSubCategoryAsync,
} from "../../../redux/slice/admin/SubCategorySlice";
import { getCategoryAsync } from "../../../redux/slice/admin/CategorySlice";
import { addSubCategoryAsync } from "../../../redux/slice/admin/SubCategorySlice";

import ErrorAndLoader from "../../../components/ErrorAndLoader";
import { doRedirect } from "../../../utils/util";

const AddSubCategory = () => {
  const getSubCategoryFromRedux = useSelector((state) => state.subCategory);
  const getCategoryFromRedux = useSelector((state) => state.category);

  const [subCategoryName, setsubCategoryName] = useState("");
  const [categoryId, setcategoryId] = useState("");

  // console.log( "redux - ",  getSubCategoryFromRedux)

  // console.log(getCategoryFromRedux.data.data)

  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(getCategoryAsync());
    dispatch(getSubCategoryAsync());
  }, [navigation]);

  const addSubCatOnClick = () => {
    const redirect = (msg) => {
      // navigation(msg);
    };

    if (subCategoryName.length !== 0) {
      // console.log("--> ", categoryId, subCategoryName);

      dispatch(
        addSubCategoryAsync({
          cat_Id: categoryId,
          SubCatName: subCategoryName,
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
          <div className="col-12 col-sm-12 col-md-5 col-lg-5  mb-5 mb-md-0">
            <h4 className="text-center mb-3">Add Sub Category</h4>

            <div className="form-group mb-5">
              <label htmlFor="exampleFormControlSelect1">
                Select Category{" "}
              </label>

              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setcategoryId(e.target.value)}
              >
                {(function () {
                  try {
                    if (getCategoryFromRedux.data.data !== undefined) {
                      return getCategoryFromRedux.data.data.map(
                        (data, index) => {
                          return (
                            <option key={index} value={data.id}>
                              {data.name}
                            </option>
                          );
                        }
                      );
                    }
                  } catch (error) {
                    console.log("AddSubCategory.js Error -", error.message);
                  }
                })()}
              </select>
            </div>

            <div className="mb-3 col-12">
              <div className="form-floating  ">
                <input
                  type="text"
                  className="form-control"
                  id="floatingSubCatName"
                  placeholder=""
                  onChange={(e) => setsubCategoryName(e.target.value)}
                />
                <label htmlFor="floatingSubCatName">Sub Category Name</label>
              </div>
            </div>

            <button
              onClick={() => addSubCatOnClick()}
              className="btn btn-md btn-primary px-5 py-2"
            >
              Add Sub Category
            </button>
          </div>

          <div className="col-12 col-sm-12 col-md-7 col-lg-7 ">
            <h4 className="text-center">All Sub Categories List</h4>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.No </th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Sub Cat Name</th>
                </tr>
              </thead>
              <tbody>
                {(function () {
                  try {
                    if (getSubCategoryFromRedux.isLoader !== true) {
                      return getSubCategoryFromRedux.data.data !== undefined
                        ? getSubCategoryFromRedux.data.data.map(
                            (data, index) => {
                              return (
                                <tr key={index}>
                                  <th scope="row">{index + 1}</th>
                                  <td>{data.cat_Id.name}</td>
                                  <td>{data.SubCatName}</td>

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
                                                "Are you sure want to Delete Sub Category? "
                                              )
                                            ) {
                                              return [
                                                dispatch(
                                                  deleteSubCategoryAsync({
                                                    subCategoryId: data.id,
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
                            }
                          )
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
                    console.log("AddSubCategory Error -", error.message);
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

export default AddSubCategory;
