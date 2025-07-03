exports.productsPage = (req, res, next) => {
  res.render("productsPage", {
    pageTitle: "productsPage",
    path: "/products",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
