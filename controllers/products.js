// const products = [];
// admin.js///
const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  console.log("we are going to move to /admin/add-product");
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  console.log("redirect to /");
  const product = new Product(req.body.title);
  // добавляем товар в корзину
  //console.log("postAddProduct:controllers", product);
  product.save();
  res.redirect("/");
};
////
//shop.js//

exports.getProducts = (req, res, next) => {
  console.log("we are going to move to shop");
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
  // const products = Product.fetchAll();
  // // отображаем товар на странице (перешли сюда со страницы покупок)
  // console.log("getProducts:controllers", products);
  // res.render("shop", {
  //   prods: products,
  //   pageTitle: "Shop",
  //   path: "/",
  //   hasProducts: products.length > 0,
  //   activeShop: true,
  //   productCSS: true,
  // });
};
//
