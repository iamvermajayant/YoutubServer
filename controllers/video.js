import Video from '../models/Video.js'

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

}


export const deleteVideo = async (req, res, next) => {

}


export const getVideo = async (req, res, next) => {

}