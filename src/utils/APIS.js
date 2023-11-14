const websiteUrl = "http://localhost:8000/";

export const backendAPIS = {
  blog: {
    addCategory: websiteUrl + "blog/addCategory/",
    addSubCategory: websiteUrl + "blog/addSubCategory/",
  },

  adminPanel: {
    login: websiteUrl + "adminpanel/adminLogin/",
  },
};
