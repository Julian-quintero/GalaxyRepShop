import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";




//@desc  Auth the user and get token
//@route POST /api/users/login
//@acess Public

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email: email }); // find user By email
  
    if (user && (await user.matchPassword(password))) { //use matchPassword method from schema to compare password
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      console.log('Error at authUser');
      res.status(404);
      throw new Error("Not valid user found");
    }
  });

//@desc  Register a new user
//@route GET /api/users/profile
//@acess Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email: email }); // Find if user exists

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    //Create is equal to save
    name,
    email,
    password,
  });  

  if (user) {
    //me autentico despues de registrarme inmediatamente
    //201 significa usuario registrado
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

//@desc  Get the user profile
//@route GET /api/users/profile
//@acess Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); // encontrar un documento por email

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    console.log("Problem at getUserProfile");
    res.status(404);
    throw new Error("User not found");
  }
});


export {
    authUser,
    getUserProfile,
    registerUser
  };
  
