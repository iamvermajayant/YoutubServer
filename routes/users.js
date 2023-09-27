import express from "express";
import { update, deleteUser, getUser, subscribe, unsubscribe, likeVideo, dislikeVideo } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();

//update the user 
router.put("/:id",verifyToken, update);


//delete the user 
router.delete("/:id",verifyToken, deleteUser)

// get user 
router.get("/find/:id", getUser)

//subscribe a user 
router.put("/sub/:id",verifyToken, subscribe)


//unsubscribe a user 
router.put("/unsub/:id",verifyToken, unsubscribe)

//like a video 
router.put("/like/:videoId", verifyToken, likeVideo)


//dislike a video 
router.put("/dislike/:videoId", verifyToken, dislikeVideo)






export default router;

