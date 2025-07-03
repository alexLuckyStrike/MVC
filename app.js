const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorPage = require("./routes/error");
const cartPage = require("./routes/cart");
const productsPage = require("./routes/productsPage");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(productsPage);
//
app.use(cartPage);
/// если ошибку поставить перед роутом все слосается порядок имеет значение
app.use(errorPage);

app.listen(1000);
