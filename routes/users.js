const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Add new user

router.post("/", (req, res) => {
  let newUser = new User(req.body);
  newUser
    .save()
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: "Server Error " });
    });
});

// Get all users
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: "Server Error " });
    });
});

// Delete User

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      User.find().then((users) => res.send({ msg: "User Deleted !", users }));
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: "Server Error " });
    });
});

//Update User

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        throw err;
      }
      res.send(user);
    }
  );
});

module.exports = router;
