import Video from '../models/Video.js'

export const addVideo = async (req, res, next) => {
    const newVideo = new Video({UserId : req.user.id, ...req.user.body})
    const savedVideo = await newVideo.save();

    res.status(200).json(savedVideo);
}


export const updateVideo = async (req, res, next) => {

}


export const deleteVideo = async (req, res, next) => {

}


export const getVideo = async (req, res, next) => {

}