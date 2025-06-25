const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    console.log("Product save");
    products.push(this);
  }

  static fetchAll() {
    console.log("Product fetchAll");
    return products;
  }
};
