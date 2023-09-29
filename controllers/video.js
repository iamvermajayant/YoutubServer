import Video from '../models/Video.js'
import { createError } from '../error.js';


export const addVideo = async (req, res, next) => {
    try {
        const newVideo = new Video({UserId : req.user.id, ...req.body})
        const savedVideo = await newVideo.save();
    
        res.status(200).json(savedVideo);
    } catch (error) {
        next(error)
    }
   
}


export const updateVideo = async (req, res, next) => {
     try {
        const video = await Video.findById(req.params.id);
     if(!video) return next(createError(404, "Video not found"));

     if(req.user.id === video.UserId){
        const updatedUser = await Video.findByIdAndUpdate(req.params.id, {
            $set : req.body
        }, 
        {
            new : true
        })

        res.status(200).json(updateVideo);
     }
     } catch (error) {
        next(error);
     }
}


export const deleteVideo = async (req, res, next) => {
    try {
        const video = Video.findById(req.params.id)
        if(!video) return next(createError(400, "video not found"))

        if(req.params.id === video.UserId){
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json("Your Video is delted");
        }
        else{
            return next(createError(403, "You can only delete your video"))
        }

    } catch (error) {
        next(error);
    }
}


export const getVideo = async (req, res, next) => {

}