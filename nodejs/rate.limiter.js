import rateLimit from "express-rate-limit";
// console.log(rateLimit);

const message = (action) => {
  success: false;
  message: `too many ${action} attempts, please try again later`;
};

export const loginLimiter = rateLimit({
  windowMs: 1080 * 60 * 60 * 1000, //45 days
  max: 1,
  message: message("login"),
});

export const updateLimit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 1,
  message: message("update"),
});
