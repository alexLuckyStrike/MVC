exports.errorPage = (req, res, next) => {
  console.log("error");
  res.render("404", { pageTitle: "Page Not Found", path: "/" });
};
