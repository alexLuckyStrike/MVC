// const products = [];
// admin.js///
const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  console.log("req.body:", req.body);
  console.log("title:", title);
  console.log("imageUrl:", imageUrl);
  console.log("price:", price);
  console.log("description:", description);

  const product = new Product(title, imageUrl, description, price);
  // добавляем товар в корзину
  //console.log("postAddProduct:controllers", product);
  product.save();
  res.redirect("/");
};
////
//shop.js//

exports.getProducts = (req, res, next) => {
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
