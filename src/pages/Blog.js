import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import BlogSubHeader from "../components/BlogSubHeader";
import { useSelector, useDispatch } from "react-redux";

import ErrorAndLoader from "../components/ErrorAndLoader";

// redux
import { getBlogAsync } from "../redux/slice/admin/BlogSlice";

// to append  htmlString into DOM
import parse from "html-react-parser";
import { backendAPIS } from "../utils/APIS";

const Blog = () => {
  const dispatch = useDispatch();
  const getBlogFromRedux = useSelector((state) => state.blog);

  //   console.log(getBlogFromRedux.data.data);

  console.log("backendAPIS - ", backendAPIS.blog.addCategory);

  useEffect(() => {
    // console.log("Blogs");
    dispatch(getBlogAsync());
  }, []);

  // window.onload = function () {

  //   const element = document.querySelector("#BlogDescElement")
  //   var str = '<p>Some more <b>text</b> here</p>'
  //   element.insertAdjacentHTML( 'afterend', str );

  // }

  return (
    <>
      <Header />

      <BlogSubHeader />

      <div id="blogPage">
        <div className="px-5 py-5">
          <div className="mt-0 title">
            <h3 id="myDiv">Crypto Currency Blogs</h3>
          </div>

          <div className="row mt-5  blogContainer">
            {(function () {
              try {
                if (getBlogFromRedux.isLoader !== true) {
                  return getBlogFromRedux.data.data !== undefined
                    ? getBlogFromRedux.data.data.map((data, index) => {
                        if (data.isPublished == 1) {
                          return (
                            <div
                              className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 mb-md-3"
                              key={index}
                            >
                              <article>
                                <div className="title">
                                  <Link
                                    to={`/blogpost/${data.subCatId.cat_Id.name}/${data.subCatId.SubCatName}/${data.id}/${data.heading}`}
                                  >
                                    <h2>
                                      {data.heading.substring(0, 39) + "..."}
                                    </h2>
                                  </Link>
                                </div>

                                <div className="date d-flex flex-row justify-content-start align-items-baseline ">
                                  <div className="avatarImage">
                                    <img
                                      src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                                      alt="Avatar Image"
                                    />{" "}
                                  </div>
                                  <div>
                                    <p>{data.authorId.name}</p>{" "}
                                  </div>
                                  <div>
                                    <p>
                                      {" "}
                                      <span>
                                        <FaRegClock color="#4b5563" size={17} />
                                      </span>{" "}
                                      {Date(data.createdDate).substring(0, 15)}
                                    </p>{" "}
                                  </div>
                                </div>

                                <div
                                  className="description"
                                  id="BlogDescElement"
                                >
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Recusandae et numquam
                                    nihil quos voluptatum officiis reiciendis
                                    explicabo dolore quidem! Incidunt officiis
                                    nesciunt deleniti sint voluptas ipsum
                                    tenetur? Animi, sunt eligendi!{" "}
                                  </p>
                                </div>

                                <Link to="#" className="btn">
                                  Read More
                                </Link>
                              </article>
                            </div>
                          );
                        }
                      })
                    : null;
                } else {
                  <ErrorAndLoader isLoader={true} />;
                }
              } catch (error) {
                console.log("Blog.js Error", error);
              }
            })()}
          </div>
        </div>

        <div></div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
