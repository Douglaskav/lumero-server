"use strict";

const UserService = require("../services/UserServices");

const createNewUser = async (req, res, next) => {
  try {
    res.json(await generateANewUser(req.body));
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

const authUser = async (req, res, next) => {
  try {
    res.json(await authenticateTheUser(req.body));
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const generateANewUser = async (User) => {
  return await UserService.create(User);
};

const authenticateTheUser = async (UserCredentials) => {
  return await UserService.auth(UserCredentials);
};

module.exports = { createNewUser, authUser };
