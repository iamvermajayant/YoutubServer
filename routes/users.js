import express from "express";
import { test, update, deleteUser, getUser, subscribe, unsubscribe, likeVideo, dislikeVideo } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();

//update the user 
router.put("/:id",verifyToken, update);


//delete the user 
router.delete("/:id", deleteUser)

// get user 
router.get("/find/:id", getUser)

//subscribe a user 
router.put("/sub/:id", subscribe)


//unsubscribe a user 
router.put("/unsub/:id", unsubscribe)

//like a video 
router.put("/like/:videoId", likeVideo)


//dislike a video 
router.put("/dislike/:videoId", dislikeVideo)






export default router;

