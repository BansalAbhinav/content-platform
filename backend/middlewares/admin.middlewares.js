import { errorHandling } from "../helpers/helper_functions";

export const isAdminUser = (req, res, next) => {
  if (req.userInfo.role !== "ADMIN") {
    errorHandling(new Error("Access Denied! You are not a ADMIN"));
  }
  next();
};
