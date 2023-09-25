import express from "express";
import { signIn, signup } from "../controllers/auth.js";


const router = express.Router();

//create a USER
router.post("/signup", signup)


//Sign in USER
router.post("/signup", signIn)



//Google auth Sign in
router.post("/signup", )




export default router;
