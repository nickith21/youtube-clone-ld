import express from "express";
import {
  update,
  deleteUser,
  findUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken, update);

router.delete("/:id", verifyToken, deleteUser);

router.get("/find/:id", findUser);

router.patch("/sub/:id", verifyToken, subscribe);

router.patch("/unsub/:id", verifyToken, unsubscribe);

router.patch("/like/:videoId", verifyToken, like);

router.patch("/dislike/:videoId", verifyToken, dislike);

export default router;
