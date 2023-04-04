const Product = require("../models/product.model");

const logger = require("../logger/logger");

exports.findAll = function (req, res) {
  console.log("Find all Products");

  Product.find({}, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log("Problem in reading Products", err);
      logger.warn("warn in reading all Products");
      logger.error("error in reading Products");
      logger.debug("debug in reading Products");
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in reading Products");
      logger.info("Success in reading all Products");
    }
  });
};

exports.findOne = function (req, res) {
  const product = req.params.product;
  console.log("Find product ", product);

  Product.find({ product: product }, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in finding product:${product}`);
      logger.error(`problem in finding product:${product}`);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in finding product");
      logger.info("Success in finding product");
    }
  });
};

exports.create = function (req, res) {
  const newProduct = new Product({
    product: req.body.product,
    cost: req.body.cost,
    description: req.body.description,
    quantity: req.body.quantity,
  });

  console.log("Insert : ", req.body.product);

  newProduct.save((err, result) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in creating product`, err);
      logger.error("error in creating product");
    } else {
      res.status(200).json({ status: true, data: result });
      console.log("Success in creating product");
      logger.info("Success in creating product");
    }
  });
};

exports.update = function (req, res) {
  const product = req.body.product;

  const updateProduct = {
    product: req.body.product,
    cost: req.body.cost,
    description: req.body.description,
    quantity: req.body.quantity,
  };

  Product.findOneAndUpdate(
    { product: product },
    updateProduct,
    { new: true },
    (err, result) => {
      if (err) {
        res.status(400).json({ status: false, data: err });
        console.log(`Problem in updating product`, err);
        logger.error("error in updating Products");
      } else {
        res.status(200).json({ status: true, data: result });
        console.log("Success in updating product");
        logger.info("Success in updating product");
      }
    }
  );
};

exports.delete = function (req, res) {
  const product = req.params.product;

  console.log("deleting product with name: ", product);

  Product.findOneAndDelete({ product: product }, (err, result) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in deleting product`, err);
      logger.error("Success in deleting product");
    } else {
      res.status(200).json({ status: true, data: result });
      console.log("Success in deleting product");
      logger.info("Success in deleting product");
    }
  });
};
