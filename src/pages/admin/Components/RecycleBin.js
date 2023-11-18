import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// redux
import ErrorAndLoader from "../../../components/ErrorAndLoader";
import {
  getBlogAsync,
  permanentDeleteBlogByAsync,
} from "../../../redux/slice/admin/BlogSlice";

import { Link } from "react-router-dom";

const RecycleBin = () => {
  const dispatch = useDispatch();
  const getBlogFromRedux = useSelector((state) => state.blog);
  const loggedAdminFromRedux = useSelector((state) => state.adminLogin);

  // console.log(getBlogFromRedux);

  useEffect(() => {
    // console.log("Blogs");
    dispatch(getBlogAsync());
  }, []);

  return (
    <div className="bg-white py-5 px-2 " id="allBlogs">
      <h4 className="text-center mb-4">Recycle Bin</h4>
      <div className="table-responsive">
        <table
          className="table table-hover table-sm "
          style={{ border: "1px solid #ddd" }}
        >
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Heading</th>
              <th scope="col">Cat | SubCat</th>
              <th scope="col">Author Name</th>

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
                          data.isRecycle == 1
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

                              <td>{data.createdDate}</td>

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
                                            permanentDeleteBlogByAsync({
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

export default RecycleBin;
