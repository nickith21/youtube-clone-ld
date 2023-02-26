import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  randomVideo,
  subscriberVideos,
  trendingVideo,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();
router.post("/", verifyToken, addVideo);
router.delete("/:videoId", verifyToken, deleteVideo);
router.put("/:videoId", verifyToken, updateVideo);
router.get("/find/:videoId", getVideo);
router.put("/view/:videoId", addView);
router.get("/trend", trendingVideo);
router.get("/rand", randomVideo);
router.get("/sub", subscriberVideos);

export default router;
