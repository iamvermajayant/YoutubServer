import express from "express";
import { addVideo, addView, deleteVideo, getTags, random, search, sub, trend, updateVideo } from "../controllers/video.js";
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

router.put('/view/:id', addView)
router.get('/trend', trend)
router.get('/random', random)
router.get('/tags',verifyToken, getTags)
router.get('/search',verifyToken, search)





export default router;
