const fs = require("fs");
const path = require("path");
// const products = [];

const getProductsFromFile = (cb) => {
  const filePath = path.join(__dirname, "../", "data", "products.json");

  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      // console.log("1");
      return cb([]);
    }

    if (fileContent) {
      // console.log("2");
      cb(JSON.parse(fileContent));
    }
    //       Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // Это значит, что res.render() (или res.send()) вызывается дважды или больше — а этого делать нельзя, потому что HTTP-заголовки уже отправлены.
    // обработка на случай если удалить файл products.json
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log("err:writeFile", err);
      });
    });
    const filePath = path.join(__dirname, "../", "data", "products.json");
    // __dirname указывает на папку откуда был вызов
    // здесь нужно использовать стрелочную функцию так как она ссылается на контекст класса
    // обычная функция будетт ссылаться на свой контекст и произойдет потеря контекста

    // fs.readFile(filePath, (err, fileContent) => {
    //   // let products = [];
    //   // if (!err) {
    //   //   products = JSON.parse(fileContent);
    //   // }
    //   //
    //   // products.push(this);
    //   // fs.writeFile(filePath, JSON.stringify(products), (err) => {
    //   //   console.log("err:writeFile", err);
    //   // });
    // });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
