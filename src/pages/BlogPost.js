import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogSubHeader from "../components/BlogSubHeader";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ErrorAndLoader from "../components/ErrorAndLoader";

// to append  htmlString into DOM
import parse from "html-react-parser";

// redux
import { getBlogByIdAsync } from "../redux/slice/admin/GetBlogByIdSlice";
// import DescriptionAppended from "../components/DescriptionAppended";

const BlogPost = () => {
  const dispatch = useDispatch();

  const getBlogbyIdRedux = useSelector((state) => state.blogById);

  // console.log("redux", getBlogbyIdRedux);

  useEffect(() => {
    // console.log("Blog Post");

    const blogIdFromUrl = window.location.href.split("/")[6];

    dispatch(getBlogByIdAsync({ blogId: blogIdFromUrl }));
  }, [dispatch]);

  //   const parser = new DOMParser();

  //   const chatContainer = document.querySelector("#chatContainer")

  //   chatContainer.appendChild(parser.parseFromString(`
  //   <div class="message-data align-center">
  //       <span class="message-data-name" >User joined</span>
  //   </div>
  // `, 'text/xml').firstChild)

  return (
    <>
      <Header />

      {/* <BlogSubHeader /> */}

      <div id="blogPostPage">
        <div className="px-5 py-5">
          {(function () {
            try {
              if (getBlogbyIdRedux.isLoader !== true) {
                return getBlogbyIdRedux.data.data !== undefined
                  ? getBlogbyIdRedux.data.data.map((data, index) => {
                      // console.log("articleDesc -" , articleDesc)

                      return (
                        <div
                          className="bg-white rounded-3 px-5 py-5"
                          key={index}
                        >
                          <div className="text-center">
                            <div className="title">
                              <h1>{data.heading}</h1>
                            </div>

                            <div className="date d-flex flex-row justify-content-center align-items-baseline ">
                              {/* <div className='avatarImage' ><img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt='Avatar Image'  /> </div> */}
                              <div>
                                <p>By - {data.authorId.name}</p>
                              </div>
                              <div>
                                <p>
                                  <span style={{ paddingRight: "5px" }}>
                                    <FaRegClock color="#4b5563" size={17} />
                                  </span>
                                  {Date(data.createdDate).substring(0, 15)}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            className="articleDescription mt-5"
                            id="articleDesc"
                          >
                            <p>{parse(data.description)}</p>
                          </div>
                        </div>
                      );
                    })
                  : null;
              } else {
                return <ErrorAndLoader isLoader={true} />;
              }
            } catch (error) {
              console.log("Error - ", error);
            }
          })()}

          <div className="mt-5 bg-white rounded-3 px-5 py-3 commentContainer">
            <div>
              <h3>Add a new comment</h3>
            </div>

            <div>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Type Your Comment"
                rows="3"
              ></textarea>
              <button className="btn btn-primary btn-md mt-3">
                Post Comment
              </button>
            </div>
          </div>

          <div className="mt-5 userComments">
            <div>
              <h3>Comments (12) </h3>
            </div>

            <div className=" d-flex flex-row mt-3">
              <div className="avatarImage" style={{ marginRight: "10px" }}>
                <img
                  src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="pr-5  "
                />{" "}
              </div>

              <div
                className="bg-white rounded-3 py-2 px-2"
                style={{ border: "0.5px solid #ddd" }}
              >
                <div className="  date d-flex flex-row justify-content-start align-items-baseline">
                  {/* <div className='avatarImage' ><img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt='Avatar Image'  /> </div> */}
                  <div>
                    <p>Name  </p>
                  </div>
                  <div>
                    <p>
                      <span>
                        <FaRegClock color="#4b5563" size={17} />
                      </span>
                      Sept 29 2023
                    </p>
                  </div>
                </div>

                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta consectetur, iste deserunt labore assumenda animi quam
                    quidem aliquam nulla ut ad amet minima ipsum mollitia aut
                    saepe? Id, ipsum. Quam.
                  </p>
                </div>

                <Link className="btn btn-sm btn-primary "> Reply </Link>
              </div>
            </div>

            <div className=" d-flex flex-row mt-3">
              <div className="avatarImage" style={{ marginRight: "10px" }}>
                <img
                  src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                  alt="Avatar "
                  width={50}
                  height={50}
                  className="pr-5  "
                />{" "}
              </div>

              <div
                className="bg-white rounded-3 py-2 px-2"
                style={{ border: "0.5px solid #ddd" }}
              >
                <div className="  date d-flex flex-row justify-content-start align-items-baseline">
                  {/* <div className='avatarImage' ><img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt='Avatar Image'  /> </div> */}
                  <div>
                    <p>Name</p>
                  </div>
                  <div>
                    <p>
                      <span>
                        <FaRegClock color="#4b5563" size={17} />
                      </span>
                      Sept 29 2023
                    </p>
                  </div>
                </div>

                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta consectetur, iste deserunt labore assumenda animi quam
                    quidem aliquam nulla ut ad amet minima ipsum mollitia aut
                    saepe? Id, ipsum. Quam.
                  </p>
                </div>

                <Link className="btn btn-sm btn-primary "> Reply </Link>
              </div>
            </div>

            <div className=" d-flex flex-row mt-3">
              <div className="avatarImage" style={{ marginRight: "10px" }}>
                <img
                  src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                  alt="Avatar "
                  width={50}
                  height={50}
                  className="pr-5  "
                />{" "}
              </div>

              <div
                className="bg-white rounded-3 py-2 px-2"
                style={{ border: "0.5px solid #ddd" }}
              >
                <div className="  date d-flex flex-row justify-content-start align-items-baseline">
                  {/* <div className='avatarImage' ><img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt='Avatar Image'  /> </div> */}
                  <div>
                    <p>Name</p>
                  </div>
                  <div>
                    <p>
                      <span>
                        <FaRegClock color="#4b5563" size={17} />
                      </span>
                      Sept 29 2023
                    </p>
                  </div>
                </div>

                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta consectetur, iste deserunt labore assumenda animi quam
                    quidem aliquam nulla ut ad amet minima ipsum mollitia aut
                    saepe? Id, ipsum. Quam.
                  </p>
                </div>

                <Link className="btn btn-sm btn-primary "> Reply </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPost;
