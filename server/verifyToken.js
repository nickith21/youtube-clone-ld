import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  // accesses the token through the cookies
  const token = req.cookies.access_token;

  if (!token) return next(createError(401, "You are not authenticated."));

  // verifies if the access_token cookie is valid through jwt
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid."));

    // add the "user" that is verified by the JWT to to user prop on the request
    req.user = user;

    // continue executing the next function in the route
    next();
  });
};
