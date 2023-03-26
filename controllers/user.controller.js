const User = require("../models/user.model");

const logger = require("../logger/logger");

exports.findAll = function (req, res) {
  console.log("Find all Users");

  User.find({}, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log("Problem in reading Users", err);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in reading Users");
      logger.info("Success in reading all -users");
      logger.warn("warn in reading all users");
      logger.error("error in reading users");
      logger.debug("debug in reading users");
    }
  });
};

exports.findOne = function (req, res) {
  const username = req.params.username;
  console.log("Find User with username ", username);

  User.findOne({ username: username }, (err, results) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in finding user with username:${username}`);
    } else {
      res.status(200).json({ status: true, data: results });
      console.log("Success in finding user");
    }
  });
};

exports.create = function (req, res) {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    adress: req.body.adress,
    phone: req.body.phone,
    products: req.body.products,
  });

  console.log("Insert user with username: ", req.body.username);

  newUser.save((err, result) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in creating user`, err);
    } else {
      res.status(200).json({ status: true, data: result });
      console.log("Success in creating user");
    }
  });
};

exports.update = function (req, res) {
  const username = req.body.username;

  const updateUser = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    adress: req.body.adress,
    phone: req.body.phone,
    products: req.body.products,
  };

  User.findOneAndUpdate(
    { username: username },
    updateUser,
    { new: true },
    (err, result) => {
      if (err) {
        res.status(400).json({ status: false, data: err });
        console.log(`Problem in updating user`, err);
      } else {
        res.status(200).json({ status: true, data: result });
        console.log("Success in updating user");
      }
    }
  );
};

exports.delete = function (req, res) {
  const username = req.params.username;

  console.log("deleting user with username: ", username);

  User.findOneAndDelete({ username: username }, (err, result) => {
    if (err) {
      res.status(400).json({ status: false, data: err });
      console.log(`Problem in deleting user`, err);
    } else {
      res.status(200).json({ status: true, data: result });
      console.log("Success in deleting user");
    }
  });
};
