import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {


    try {
      token = req.headers.authorization.split(" ")[1]; //get the token and remove "Bearer"


      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password"); //-password Flag is to remove password from res
      next();
    } catch (error) {
      console.error("Error at authMiddleware", error);
      res.status(401);
      throw new Error("not authorized,token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, not token");
  }
});

export {protect}
