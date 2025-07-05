exports.adminProducts = (req, res, next) => {
  res.render("adminProducts", {
    pageTitle: "adminProducts",
    path: "admin/add-products",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
