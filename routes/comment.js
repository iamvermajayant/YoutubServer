import express from "express";
import { addCommnet, deleteCommnet, getCommnet } from "../controllers/comments.js";
import { verifyToken } from "../utils/verifyToken.js";


const router = express.Router();

//create a comment

router.post("/", verifyToken,addCommnet)

//Delete a comment
router.post("/:id", verifyToken, deleteCommnet)

//get a comment 

router.get("/:videoId", getCommnet)


export default router;
