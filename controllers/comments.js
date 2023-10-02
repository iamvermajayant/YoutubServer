import { createError } from "../error.js";
import Comment from "../models/Comment.js"
import Video from "../models/Video.js"


export const addCommnet = async (req, res, next) => {
    const newComment = new Comment({...req.body, UserId : req.user.id})
    try {
        const savedComment = await Comment.save();
        res.status(200).send(savedComment);
    } catch (error) {
        
    }
}


export const deleteCommnet = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        const video = await Video.findById(req.params.id);
        if(req.user.id === comment.UserId || req.user.id === video.UserId){
            await Comment.findByIdAndDelete(req.params.id);
            res.status(200).json("The comment has been deleted")
        }
        else{
            return next(createError(403, "You can only delete your comment"));
        }

    } catch (error) {
        next(error);
    }
}


export const getCommnet = async (req, res, next) => {
    try {
        const comments = await Comment.find({videoId : req.params.videoId});
        res.status(200).json(comments);
    } catch (error) {
        next(error);
    }
}