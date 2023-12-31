import Video from '../models/Video.js'
import { createError } from '../error.js';
import User from '../models/User.js';


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
    try {
        const video = await Video.findById(req.params.id);
        res.status(200).json(video);
    } catch (error) {
        next(error)
    }
}

export const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id,{
            $inc : {views : 1}
        },
        {
            new : true
        });
        res.status(200).json("The views has been increased");
    } catch (error) {
        next(error)
    }
}
export const trend = async (req, res, next) => {
   try {
    const videos = await Video.find().sort({views : -1})
    res.status(200).json(videos);
   } catch (error) {
    next(error)
   }
}
export const random = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{$sample : {size : 40}}])
        res.status(200).json(videos);
    } catch (error) {
        next(error)
    }
}
export const sub = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if(!user) return next(createError(404, "User not found"));
        const subscribedChannels = user.subscribedUsers

        const list = await Promise.all(
            subscribedChannels.map((channelId)=>{
                return Video.find({UserId : channelId})
            })
        )
        res.status(200).json(list.flat());
    } catch (error) {
        next(error)
    }
}


export const getTags = async (req, res, next) => {
    const tags = req.query.tags.split(",")
    try {
        const videos = await Video.find({tags : {$in : tags}}).limit(20);
        res.status(200).json(videos);
    } catch (error) {
        next(error);
    }
}


export const search = async (req, res, next) => {
    const query = req.query.q;
    try {
        const videos = await Video.find({
            title : {$regex : query , $options : "i"},
        }).limit(40)
        res.status(200).json(videos);
    } catch (error) {
        next(error)
    }
}
