import express from "express";
import { addVideo, deleteVideo, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../utils/verifyToken.js";


const router = express.Router();

//create a video 
router.post('/', verifyToken, addVideo)

//update a video
router.put('/:id', verifyToken, updateVideo)

//delete a video 
router.delete('/:id', verifyToken, deleteVideo)

//get a video
router.get('/find/:id', addVideo)




export default router;
