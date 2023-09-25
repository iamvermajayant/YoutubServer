import mongoose from "mongoose"
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req,res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({...req.body, password : hash});

        await newUser.save();
        res.status(200).send("user has been created");
    } catch (error) { 
        next(error);
    }
}


export const signIn = async (req,res, next) => {
    try {
       const user = await User.findOne({name : req.body.name})
       if(!user) return next(createError(404, "Not Found"));

       const isCorrect = await bcrypt.compare(req.user.password, user.password);

       if(!isCorrect) return next(createError(400, "Wrong password"));

       const token = jwt.sign({id : user._id}, process.env.JWT);

       res.cookie("access token", token, {
        httpOnly: true,
       }).status(200)
       .json(user);

    } catch (error) { 
        next(err);
    }
}