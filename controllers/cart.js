exports.cardPage = (req, res, next) => {
  console.log("cart");
  res.render("cart", {
    pageTitle: "Cart",
    path: "/cart",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
