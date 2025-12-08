import { handleResponse } from "../helpers/helper_functions.js";
import { Users } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const userRegister = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const userExist = await Users.findOne({ email });
    //  $or: [{ username }, { email }],
    if (userExist) {
      return next(new Error("User already exists"));
    }
    //hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create a new user
    const newUser = new Users({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    if (newUser) {
      handleResponse(res, 200, "User Created Successfully", newUser);
    }
  } catch (error) {
    next(error);
  }
};
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await Users.findOne({ email });
    if (!userExist) {
      return next(new Error("User not Exist! PLease SignUp."));
    }
    const isPasswordMatch = await bcrypt.compare(password, userExist.password);
    if (!isPasswordMatch) {
      return next(new Error("Password not matched"));
    }
    //create ACCESS TOKEN
    const accessToken = jwt.sign(
      {
        userId: userExist._id,
        username: userExist.username,
        role: userExist.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "60m",
      },
    );
    handleResponse(res, 200, "here is your access token", accessToken);
  } catch (error) {
    next(error);
  }
};
//only username and password is allowed to update
export const userUpdate = async (req, res) => {
  try {
    const { userId } = req.userInfo;
    const { oldpassword, newPassword, username } = req.body;
    const user = await Users.findById(userId);
    if (!user) {
      return next(new Error("User Not Found"));
    }

    //check for username updation
    if (username) {
      user.username = username;
    }
    // check if old password is correct
    const isPasswordMatch = await bcrypt.compare(oldpassword, user.password);
    if (!isPasswordMatch) {
      return next(new Error("Old Password is Wrong"));
    }
    //hash the new password
    const salt = await bcrypt.genSalt(10);
    const newhasedPassword = await bcrypt.hash(newPassword, salt);
    //update user password
    user.password = newhasedPassword;
    await user.save();
    handleResponse(res, 200, "Password Change Successfully");
    //check for forth params
  } catch (error) {
    next(error);
  }
};
