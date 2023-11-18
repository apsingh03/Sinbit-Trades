import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsStar, BsFillStarFill } from "react-icons/bs";

// redux
import ErrorAndLoader from "../../../components/ErrorAndLoader";
import {
  deleteBlogByAsync,
  getBlogAsync,
} from "../../../redux/slice/admin/BlogSlice";
import { blogIsFeaturedByAsync } from "../../../redux/slice/admin/BlogSlice";
import { blogIsPublishedByAsync } from "../../../redux/slice/admin/BlogSlice";

import { Link, useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch();
  const getBlogFromRedux = useSelector((state) => state.blog);
  const loggedAdminFromRedux = useSelector((state) => state.adminLogin);

  // console.log(getBlogFromRedux);

  useEffect(() => {
    dispatch(getBlogAsync());
  }, [navigation]);

  return (
    <div className="bg-white py-5 px-2 " id="allBlogs">
      <div className="table-responsive">
        <table
          className="table table-hover table-sm "
          style={{ border: "1px solid #ddd" }}
        >
          <thead
            className=""
            style={{ backgroundColor: "#000", color: "#fff" }}
          >
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Heading</th>
              <th scope="col">Cat | SubCat</th>
              <th scope="col">Author Name</th>
              <th scope="col">Is Featured</th>
              <th scope="col">Is Published</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {(function () {
              try {
                if (getBlogFromRedux.isLoader !== true) {
                  return getBlogFromRedux.data.data !== undefined
                    ? getBlogFromRedux.data.data.map((data, index) => {
                        if (
                          data.authorId.id ===
                            loggedAdminFromRedux.loggedAdminInfo.user.id &&
                          data.isRecycle == 0
                        ) {
                          return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td> {data.heading.substring(0, 30) + "..."} </td>
                              <td>
                                {data.subCatId.cat_Id.name} |{" "}
                                {data.subCatId.SubCatName}{" "}
                              </td>
                              <td>{data.authorId.name} </td>

                              {(() => {
                                if (data.isFeatured === false) {
                                  // not featured
                                  return (
                                    <td
                                      title="Not Featured"
                                      style={{
                                        cursor: "pointer",
                                        color: "blue",
                                      }}
                                      onClick={() => [
                                        dispatch(
                                          blogIsFeaturedByAsync({
                                            blogId: data.id,
                                            authorId:
                                              loggedAdminFromRedux
                                                .loggedAdminInfo.user.id,
                                            msg: "notFeatured",
                                          })
                                        ),

                                        navigation("/adminPanel/allBlogs"),
                                      ]}
                                    >
                                      <BsStar size={15} />
                                    </td>
                                  );
                                } else {
                                  // featured
                                  return (
                                    <td
                                      title="Featured Blog"
                                      style={{ cursor: "pointer" }}
                                      onClick={() =>
                                        dispatch(
                                          blogIsFeaturedByAsync({
                                            blogId: data.id,
                                            authorId:
                                              loggedAdminFromRedux
                                                .loggedAdminInfo.user.id,
                                            msg: "featured",
                                          })
                                        )
                                      }
                                    >
                                      <BsFillStarFill size={15} color="green" />
                                    </td>
                                  );
                                }
                              })()}

                              {(() => {
                                if (data.isPublished === false) {
                                  // not featured
                                  return (
                                    <td
                                      title="Not Published"
                                      style={{
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                        color: "blue",
                                        fontWeight: "bold",
                                      }}
                                      onClick={(e) =>
                                        dispatch(
                                          blogIsPublishedByAsync({
                                            blogId: data.id,
                                            authorId:
                                              loggedAdminFromRedux
                                                .loggedAdminInfo.user.id,
                                            msg: "notPublished",
                                          })
                                        )
                                      }
                                    >
                                      Publish It
                                    </td>
                                  );
                                } else {
                                  // featured
                                  return (
                                    <td
                                      title="Published Blog"
                                      style={{
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                        color: "green",
                                        fontWeight: "bold",
                                      }}
                                      onClick={(e) =>
                                        dispatch(
                                          blogIsPublishedByAsync({
                                            blogId: data.id,
                                            authorId:
                                              loggedAdminFromRedux
                                                .loggedAdminInfo.user.id,
                                            msg: "published",
                                          })
                                        )
                                      }
                                    >
                                      Published
                                    </td>
                                  );
                                }
                              })()}

                              <td>{Date(data.createdDate).substring(0, 24)}</td>

                              <td>
                                <div className="row container">
                                  <div className="col-12 col-sm-12 col-md-4 mb-1 mb-md-0">
                                    <Link
                                      target="_blank"
                                      title="View"
                                      to={`/blogpost/${data.subCatId.cat_Id.name}/${data.subCatId.SubCatName}/${data.id}/${data.heading}`}
                                      className="btn btn-sm btn-primary"
                                    >
                                      {" "}
                                      View{" "}
                                    </Link>
                                  </div>

                                  <div className="col-12 col-sm-12 col-md-4 mb-1 mb-md-0">
                                    <Link
                                      to={`/adminPanel/editBlog/${data.subCatId.cat_Id.name}/${data.subCatId.SubCatName}/${data.id}/`}
                                      className="btn btn-sm btn-primary"
                                      title="Update"
                                    >
                                      {" "}
                                      Update{" "}
                                    </Link>
                                  </div>

                                  <div className="col-12 col-sm-12 col-md-4 mb-1 mb-md-0">
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-danger"
                                      title="Delete"
                                      onClick={(e) => {
                                        if (
                                          window.confirm(
                                            "Are you sure want to Delete this Blog? "
                                          )
                                        ) {
                                          dispatch(
                                            deleteBlogByAsync({
                                              blogId: data.id,
                                              authorId:
                                                loggedAdminFromRedux
                                                  .loggedAdminInfo.user.id,
                                            })
                                          );
                                        }
                                      }}
                                    >
                                      {" "}
                                      Delete{" "}
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        }
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
  );
};

export default AllBlogs;
