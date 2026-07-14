import express from "express"
import { ProtectedRoute } from "../middlewares/auth.js";
import { getMessages, getUsersForSidebar, markMessageSeen, sendMessages } from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.get("/users", ProtectedRoute, getUsersForSidebar);
messageRouter.get("/:id", ProtectedRoute, getMessages);
messageRouter.put("/mark/:id", ProtectedRoute, markMessageSeen);
messageRouter.post("/send/:id",ProtectedRoute,sendMessages);

export default messageRouter;