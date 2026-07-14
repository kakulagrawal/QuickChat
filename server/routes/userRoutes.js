import express from "express"
import { checkAuth, loginUser, signUp, updateProfile } from "../controllers/userController.js";
import { ProtectedRoute } from "../middlewares/auth.js";

const userRouter=express.Router();

userRouter.post('/signup',signUp);
userRouter.post('/login',loginUser);
userRouter.put('/update-profile',ProtectedRoute,updateProfile);
userRouter.get('/check',ProtectedRoute,checkAuth);

export default userRouter;

