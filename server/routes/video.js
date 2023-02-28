import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getTags,
  getVideo,
  randomVideo,
  search,
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
router.get("/rand", randomVideo);
router.get("/trend", trendingVideo);
router.get("/sub", verifyToken, subscriberVideos);
router.get("/tags", getTags);
router.get("/search", search);

export default router;
