import rateLimit from "express-rate-limit";

export const createBasicRateLimiter = (maxRequest, time) => {
  return rateLimit({
    max: maxRequest,
    windowMs: time,
    message: "Too Many Request!!... Please try again later",
    standardHeaders: true,
    legacyHeaders: false,
  });
};
