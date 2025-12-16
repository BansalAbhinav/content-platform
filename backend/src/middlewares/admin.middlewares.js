import { globalErrorHandler } from "./errorHandler.js";

export const isAdminUser = (req, res, next) => {
  if (req.userInfo.role !== "ADMIN") {
    globalErrorHandler(new Error("Access Denied! You are not a ADMIN"));
  }
  next();
};
