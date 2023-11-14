import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// components imports
import Dashboard from "./Components/Dashboard";
import AddCategory from "./Components/AddCategory";
import AddSubCategory from "./Components/AddSubCategory";

import AllBlog from "./Components/AllBlogs";
import EditBlog from "./Components/EditBlog";
import AddBlog from "./Components/AddBlog";
import { useSelector, useDispatch } from "react-redux";
import { adminLogout } from "../../redux/slice/admin/LoginSlice";

const AdminJunction = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const loggedAdminFromRedux = useSelector((state) => state.adminLogin);

  useEffect(() => {
    try {
      if (localStorage.getItem("adminLogin") === null) {
        navigation("/");
      }
    } catch (error) {
      console.log("Error - ", error);
    }
  }, [navigation]);

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <!-- Navbar Brand--> */}
        <Link className="navbar-brand ps-3" to="/">
          Sinbit Trades
        </Link>
        {/* <!-- Sidebar Toggle--> */}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* <!-- Navbar Search--> */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></form>
        {/* <!-- Navbar--> */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>{" "}
              {loggedAdminFromRedux.loggedAdminInfo.user.name}{" "}
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link className="dropdown-item" to="#!">
                  Email -{" "}
                  <b>{loggedAdminFromRedux.loggedAdminInfo.user.email}</b>{" "}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  Activity Log
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li onClick={() => dispatch(adminLogout())}>
                <Link className="dropdown-item" to="#!">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* side nav  */}
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div>
                  {/* <div className="sb-sidenav-menu-heading">  <Link className="nav-link" to="/adminPanel/">Home</Link> </div> */}
                  <div className="sb-sidenav-menu-heading">
                    {" "}
                    <Link className="nav-link" to="/adminPanel">
                      Home
                    </Link>
                  </div>
                  <div className="sb-sidenav-menu-heading">Category</div>
                  <Link
                    className="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseCategory"
                    aria-expanded="false"
                    aria-controls="collapseCategory"
                  >
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-columns"></i>
                    </div>
                    Add
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </Link>

                  <div
                    className="collapse"
                    id="collapseCategory"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="/adminPanel/category">
                        Add Category
                      </Link>
                      <Link className="nav-link" to="/adminPanel/subCategory">
                        Add Sub Category
                      </Link>
                    </nav>
                  </div>
                </div>

                <div>
                  <div className="sb-sidenav-menu-heading">ALL Blogs</div>
                  <Link
                    className="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBlogs"
                    aria-expanded="false"
                    aria-controls="collapseBlogs"
                  >
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-columns"></i>
                    </div>
                    Blog
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </Link>

                  <div
                    className="collapse"
                    id="collapseBlogs"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="/adminPanel/allBlogs">
                        All Blogs
                      </Link>
                      <Link className="nav-link" to="/adminPanel/addBlog">
                        Add Blog
                      </Link>
                      <Link className="nav-link" to="/adminPanel/editBlog">
                        Update Blog
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootsadfsadfstrap
                    </div> */}
          </nav>
        </div>

        <div id="layoutSidenav_content">
          <main style={{ backgroundColor: "#f5f7fa", height: "100%" }}>
            <div className="container-fluid px-4 py-4 ">
              <Routes>
                <Route path="/" element={<Dashboard />} />

                {/* CATEgory  */}
                <Route path="/category" element={<AddCategory />} />
                <Route path="/subCategory" element={<AddSubCategory />} />

                {/* BLOGS AllBlog */}

                <Route path="/allBlogs" element={<AllBlog />} />
                <Route path="/editBlog" element={<EditBlog />} />
                <Route path="/addBlog" element={<AddBlog />} />

                {/* <Route path="/" element={<Demo  />} />
                        <Route path="/" element={<Calculator  />} />
                        <Route path="/" element={<UserSignIn  />} /> */}
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminJunction;
