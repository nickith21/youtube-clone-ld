import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    
    // bcrypt syntax
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    
    // creates a new user using the given infomation and hashes the password
    const newUser = new User({ ...req.body, password: hash });

    // saves new user to mongoDB
    await newUser.save();

    // sends a success response to user
    res.status(200).send("Successfully create a new user!");
  } catch (err) {

    // custom error
    next(createError(400, "Duplicate was found."));
  }
};

export const signin = async (req, res, next) => {
  try {
    
    // checks if user exists
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "No account found"));

    // checks if password is correct
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong credentials."));

    // deconstructs user into password and other info
    const { password, ...otherUserInfo } = user._doc

    // create a JSON web token using unique id and custom private key
    const token = jwt.sign({ id: user._id }, process.env.JWT);

    // create a cookie and assign the token to "access_token" cookie
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherUserInfo);
  } catch (err) {
    next(err);
  }
};

export const google = (req, res) => {};
