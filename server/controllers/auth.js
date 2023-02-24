import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send("Successfully create a new user!")
  } catch (err) {
    res.send(err)
  }
};

export const signin = (req, res) => {};

export const google = (req, res) => {};
