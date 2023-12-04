import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import { CiClock2 } from "react-icons/ci";
// import { FaRegClock } from "react-icons/fa";
// import BlogSubHeader from "../components/BlogSubHeader";
import { useSelector, useDispatch } from "react-redux";

import ErrorAndLoader from "../components/ErrorAndLoader";

// redux
import { getBlogAsync } from "../redux/slice/admin/BlogSlice";
import { getCategoryAsync } from "../redux/slice/admin/CategorySlice";

const Blog = () => {
  const dispatch = useDispatch();
  const getBlogFromRedux = useSelector((state) => state.blog);
  const getCategoryFromRedux = useSelector((state) => state.category);

  //   console.log(getBlogFromRedux.data.data);

  // console.log(getBlogFromRedux && getBlogFromRedux.data.data);

  useEffect(() => {
    // console.log("Blogs");
    dispatch(getCategoryAsync());
    dispatch(getBlogAsync());
  }, [dispatch]);

  // window.onload = function () {

  //   const element = document.querySelector("#BlogDescElement")
  //   var str = '<p>Some more <b>text</b> here</p>'
  //   element.insertAdjacentHTML( 'afterend', str );

  // }

  return (
    <>
      <Header />

      {/* <BlogSubHeader /> */}

      <div id="blogPage">
        <div className="">
          <div className="row mt-0  blogContainer">
            {(function () {
              try {
                if (getBlogFromRedux.isLoader !== true) {
                  return getCategoryFromRedux && getCategoryFromRedux.data.data
                    ? getCategoryFromRedux.data.data.map((catData) => {
                        return (
                          <div
                            key={catData.id}
                            style={{
                              position: "relative",
                              borderLeft: "0px solid red",
                            }}
                          >
                            <div
                              style={{
                                borderLeft: "0px solid black",
                                background:
                                  "url(https://static.thenounproject.com/png/657408-200.png)",
                                backgroundSize: "76px calc(100% - 0.5em)",
                                backgroundPosition: "top -30px left 67px",
                                backgroundRepeat: "no-repeat",
                              }}
                            >
                              <div className="title  ">
                                <h3 className="sectionHeading" id="myDiv">
                                  {catData.name}
                                </h3>
                              </div>

                              <div className="nestedBlogs">
                                {getBlogFromRedux.data.data.map(
                                  (data, index) => {
                                    if (
                                      data.isPublished === true &&
                                      data.isRecycle === false &&
                                      catData.name === data.catId.name
                                    ) {
                                      // console.log(data)
                                      return (
                                        <div
                                          className="col-12 mb-3 mb-md-3"
                                          key={index}
                                        >
                                          <div id="verticalImage"></div>

                                          <article>
                                            <div className="title">
                                              <Link
                                                to={`/blogpost/${data.subCatId.cat_Id.name}/${data.subCatId.SubCatName}/${data.id}/${data.heading}`}
                                              >
                                                <h2>
                                                  {data.heading}

                                                  {/* {data.heading.substring(0, 39) + "..."} */}
                                                </h2>
                                              </Link>
                                            </div>

                                            {/* <div className="date d-flex flex-row justify-content-start align-items-baseline ">
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
                                </div> */}

                                            {/* <div
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
                                </div> */}

                                            <Link to="#" className="btn">
                                              Read More
                                            </Link>
                                          </article>
                                        </div>
                                      );
                                    }
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : null;

                  // getBlogFromRedux && getBlogFromRedux.data.data
                  //   ? getBlogFromRedux.data.data.map((data, index) => {

                  //       if (data.isPublished === true && data.isRecycle === false ) {
                  //         return (

                  //           <div
                  //             className="col-12 mb-3 mb-md-3"
                  //             key={index}
                  //           >

                  //             <h6> {data.catId.name} </h6>

                  //           </div>
                  //         );
                  //       }
                  //     })
                  //   : null;
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
