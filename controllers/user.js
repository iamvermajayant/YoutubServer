import { createError } from "../error";
import User from "../models/User";

export const update = async(req, res, next) => {
    if(req.params.id === req.user.id){
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set : res.body
            })
            res.status(200).json(updatedUser);
        } catch (error) {
            next(error)
        }
    }
    else{
        return next(createError(403, "You can update only your account"));
    }
    
};

export const deleteUser = (req, res, next) => {
    
};

export const getUser = (req, res, next) => {
    
};

export const subscribe = (req, res, next) => {
    
};


export const unsubscribe = (req, res, next) => {
    
};


export const likeVideo = (req, res, next) => {
    
};


export const dislikeVideo = (req, res, next) => {
    
};