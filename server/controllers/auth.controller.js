import db from "../models/index";
const User = db.User;
const Role = db.Role;

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { Op } from "sequelize";
const authController = {};

authController.signUp = async (req, res) => {
  const { username, name, email, password } = req.body;
  if (!username || !name || !email || !password) {
    res.status(400).send({ message: "Plase provide all required fields" });
    return;
  }

  await User.findOne({ where: { username } }).then((user) => {
    if (user) {
      res.status(400).send({ message: "Username is already existed" });
      return;
    }

    const newUser = {
      username,
      name,
      email,
      password,
    };

    User.create(newUser)
      .then((user) => {
        if (req.body.roles) {
          Role.findAll({
            where: {
              name: { [Op.or]: req.body.roles },
            },
          }).then((roles) => {
            user.setRoles(roles).then(() => {
              res.send({ message: "User registered succesfully" });
            });
          });
        } else {
          user.setRoles([1]).then(() => {
            res.send({ message: "user registered successfully" });
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Something error while registering a new user",
        });
      });
  });
};
