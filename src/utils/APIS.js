// const websiteUrl = "http://localhost:8000/";

const websiteUrl = "https://hukum.pythonanywhere.com/";

export const backendAPIS = {
  blog: {
    addCategory: websiteUrl + "blog/addCategory/",
    addSubCategory: websiteUrl + "blog/addSubCategory/",
    getSubCategoryBy: websiteUrl + "blog/getSubCategoryBy/",
    createBlog: websiteUrl + "blog/createBlog/",
    getBlogBy: websiteUrl + "blog/getBlogBy/",
    updateBlogBy: websiteUrl + "blog/updateBlogBy/",
    blogIsFeaturedBy: websiteUrl + "blog/blogIsFeaturedBy/",
    blogIsPublishedBy: websiteUrl + "blog/blogIsPublishedBy/",
    deleteBlogBy: websiteUrl + "blog/deleteBlogBy/",
    permanentDeleteBlogBy: websiteUrl + "blog/permanentDeleteBlogBy/",
    deleteCategoryBy: websiteUrl + "blog/deleteCategoryBy/",
    deleteSubCategoryBy: websiteUrl + "blog/deleteSubCategoryBy/",
  },

  adminPanel: {
    login: websiteUrl + "adminpanel/adminLogin/",
  },
};
