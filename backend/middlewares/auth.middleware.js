import jwt from "jsonwebtoken";
import { errorHandling, handleResponse } from "../helpers/helper_functions";
export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return next(new Error("Access Denied. No Token Provided."));
  }
  //decode the token
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodeToken);
    req.userInfo = decodeToken;
    next();
  } catch (error) {
    errorHandling(error);
  }
};
