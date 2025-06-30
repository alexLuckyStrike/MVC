exports.cardPage = (req, res, next) => {
  res.render("cart", {
    pageTitle: "Cart",
    path: "/cart",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
