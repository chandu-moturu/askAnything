import jwt from "jsonwebtoken";
import "dotenv/config";
import asyncHandler from "express-async-handler";
const auth = asyncHandler(async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodeData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
});

export default auth;
