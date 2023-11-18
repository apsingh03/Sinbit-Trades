import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// redux
import { getCategoryAsync } from "../../../redux/slice/admin/CategorySlice";

import { getSubCategoryAsync } from "../../../redux/slice/admin/SubCategorySlice";

import { getBlogAsync } from "../../../redux/slice/admin/BlogSlice";

import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  // try {

  // } catch (error) {
  //   console.log("Admin Dashboard.js Error " , error )
  // }

  const getCategoryFromRedux = useSelector((state) => state.category.data.data);
  const getSubCategoryFromRedux = useSelector(
    (state) => state.subCategory.data.data
  );
  const getBlogFromRedux = useSelector((state) => state.blog.data.data);

  const publishedBlogs =
    getBlogFromRedux &&
    getBlogFromRedux.filter((data) => {
      return data.isPublished === true ? data : null;
    });

  const unPublishedBlogs =
    getBlogFromRedux &&
    getBlogFromRedux.filter((data) => {
      return data.isPublished === true ? data : null;
    });

  const recycleBlogs =
    getBlogFromRedux &&
    getBlogFromRedux.filter((data) => {
      return data.isRecycle === true ? data : null;
    });

  const isFeaturedBlogs =
    getBlogFromRedux &&
    getBlogFromRedux.filter((data) => {
      return data.isFeatured === true ? data : null;
    });

  useEffect(() => {
    dispatch(getCategoryAsync());
    dispatch(getSubCategoryAsync());
    dispatch(getBlogAsync());
  }, []);

  return (
    <>
      <h1 className="mt-4">Dashboard</h1>
      <ol className="breadcrumb mb-4">
        {/* <li className="breadcrumb-item active">Dashboard</li> */}
      </ol>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">
              Category
              <b>
                -{" "}
                {getCategoryFromRedux &&
                  Object.keys(getCategoryFromRedux).length}
              </b>
            </div>

            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link
                className="small text-white stretched-link"
                to="/adminPanel/category"
              >
                View Details
              </Link>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">
              Sub Category
              <b>
                -{" "}
                {getSubCategoryFromRedux &&
                  Object.keys(getSubCategoryFromRedux).length}
              </b>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link
                className="small text-white stretched-link"
                to="/adminPanel/subCategory"
              >
                View Details
              </Link>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">
              Featured Blogs
              <b>- {isFeaturedBlogs && Object.keys(isFeaturedBlogs).length}</b>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link
                className="small text-white stretched-link"
                to="/adminPanel/subCategory"
              >
                View Details
              </Link>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white mb-4">
            <div className="card-body">
              Un Published Blogs
              <b>
                - {unPublishedBlogs && Object.keys(unPublishedBlogs).length}
              </b>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link
                className="small text-white stretched-link"
                to="/adminPanel/allBlogs"
              >
                View Details
              </Link>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white mb-4">
            <div className="card-body">
              Published Blogs
              <b>- {publishedBlogs && Object.keys(publishedBlogs).length}</b>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link
                className="small text-white stretched-link"
                to="/adminPanel/allBlogs"
              >
                View Details
              </Link>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-white mb-4">
            <div className="card-body">
              Deleted Blogs
              <b>- {recycleBlogs && Object.keys(recycleBlogs).length}</b>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link
                className="small text-white stretched-link"
                to="/adminPanel/recycleBin"
              >
                View Details
              </Link>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
