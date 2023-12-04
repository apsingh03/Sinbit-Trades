import React, { useEffect, useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

// editor for blogging
import JoditEditor from "jodit-react";

// import ErrorAndLoader from "../../../components/ErrorAndLoader";

// redux imports
import { subCategoryFromCatIdAsync } from "../../../redux/slice/admin/SubCategoryByCategory";
import { getCategoryAsync } from "../../../redux/slice/admin/CategorySlice";
import { getBlogByIdAsync } from "../../../redux/slice/admin/GetBlogByIdSlice";
import { updateBlogAsync } from "../../../redux/slice/admin/BlogSlice";

// redux

const EditBlog = () => {
  const getSubCategoryFromCatRedux = useSelector(
    (state) => state.subCatByCatId
  );

  const getCategoryFromRedux = useSelector((state) => state.category);
  const getBlogbyIdRedux = useSelector((state) => state.blogById);

  //   console.log( "redux " , getBlogbyIdRedux.data.data )

  const editor = useRef(null);
  const [BlogHeading, setBlogHeading] = useState("");
  const [categoryId, setcategoryId] = useState("");
  const [SubcategoryId, setSubcategoryId] = useState("");
  const [BlogDescription, setBlogDescription] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigate();

  //   setTimeout(() => {

  //   }, 500);

  const dsafsadfas = () => {
    try {
      setTimeout(() => {
        // console.log( calculateCondition )

        if (getBlogbyIdRedux.isLoading !== false) {
          if (getBlogbyIdRedux.data.data !== undefined) {
            setBlogHeading(getBlogbyIdRedux.data.data[0].heading);
            setBlogDescription(getBlogbyIdRedux.data.data[0].description);
            // setBlogHeading( "getBlogbyIdRedux.data.data[0].heading" )
            // setBlogDescription( "getBlogbyIdRedux.data.data[0].description" )
          }
        }
      }, 1000);
    } catch (error) {
      console.log("Edit Blog Error - ");
    }
  };

  useEffect(() => {
    dispatch(getCategoryAsync());

    const blogIdFromUrl = window.location.href.split("/")[7];

    dispatch(getBlogByIdAsync({ blogId: blogIdFromUrl }));

    dsafsadfas();
  }, []);

  const fetchSubCategoryFromCategory = () => {
    if (categoryId !== "") {
      dispatch(
        subCategoryFromCatIdAsync({
          cat_Id: categoryId,
        })
      );
    }
  };

  const updateBlogOnSubmit = (e) => {
    e.preventDefault();

    console.log("clicked ");
    console.log(BlogHeading);
    console.log(categoryId, " - ", SubcategoryId);
    console.log(BlogDescription);

    if (categoryId === "") {
      alert("Please Select Category");
    } else if (SubcategoryId === "") {
      alert("Please Select Subcategory");
    } else {
      dispatch(
        updateBlogAsync({
          catId: categoryId,
          subCatId: SubcategoryId,
          authorId: 1,
          heading: BlogHeading,
          description: BlogDescription,
        })
      );
    }
  };

  return (
    <>
      <div className="bg-white py-5 px-5 ">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12  mb-5 mb-md-0">
            <h4 className="text-center"> Update Blog </h4>

            <form onSubmit={updateBlogOnSubmit}>
              <div className="form-floating mb-4 ">
                <input
                  type="text"
                  className="form-control"
                  id="floatingSubCatName"
                  name="sdfsdfdfasfsa"
                  // placeholder={ getBlogbyIdRedux.data.data !== undefined ? getBlogbyIdRedux.data.data[0].heading : null  }
                  required
                  value={BlogHeading}
                  onChange={(e) => setBlogHeading(e.target.value)}
                />
                <label htmlFor="floatingSubCatName">Blog Title</label>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="selectCategory">Select Category </label>

                    <select
                      className="form-control"
                      id="selectCategory"
                      onChange={(e) => setcategoryId(e.target.value)}
                      onClick={() => fetchSubCategoryFromCategory()}
                      required
                    >
                      <option value="">Select</option>
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
                          console.log(
                            "AddSubCategory.js Error -",
                            error.message
                          );
                        }
                      })()}
                    </select>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="selectSubCategory">
                      Select Sub Category{" "}
                    </label>

                    <select
                      className="form-control"
                      id="selectSubCategory"
                      required
                      onChange={(e) => setSubcategoryId(e.target.value)}
                    >
                      <option value="">Select</option>
                      {(function () {
                        try {
                          if (
                            getSubCategoryFromCatRedux.data.data !== undefined
                          ) {
                            return getSubCategoryFromCatRedux.data.data.map(
                              (data, index) => {
                                return (
                                  <option key={index} value={data.id}>
                                    {data.SubCatName}
                                  </option>
                                );
                              }
                            );
                          }
                        } catch (error) {
                          console.log(
                            "AddSubCategory.js Error -",
                            error.message
                          );
                        }
                      })()}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <JoditEditor
                  ref={editor}
                  value={BlogDescription}
                  onChange={(newContent) => setBlogDescription(newContent)}
                />
              </div>

              <button className="btn btn-lg btn-primary mt-3 px-5">
                {" "}
                Update Blog{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
