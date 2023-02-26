import { createError } from "../error.js";
import Video from "../models/video.js";
import User from "../models/user.js";

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) return next(createError(404, "Video not found"));
    const ownerId = video.userId;
    if (req.user.id === ownerId) {
      await Video.findByIdAndDelete(req.params.videoId);
      res.status(200).json("Video was deleted.");
    } else {
      return next(createError(403, "Can only delete own videos."));
    }
  } catch (err) {
    next(err);
  }
};
export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) return next(createError(404, "Video not found"));
    const ownerId = video.userId;
    if (req.user.id === ownerId) {
      const updateVideo = await Video.findByIdAndUpdate(
        req.params.videoId,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateVideo);
    } else {
      return next(createError(403, "Can only update own videos."));
    }
  } catch (err) {
    next(err);
  }
};
export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};
export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.videoId, {
      $inc: { views: 1 },
    });
    res.status(200).json("Video has been viewed.");
  } catch (err) {
    next(err);
  }
};
export const randomVideo = async (req, res, next) => {
  try {
    // gets a random set of 40 videos
    const videos = await Video.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
export const trendingVideo = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
export const subscriberVideos = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // find the current user
    const user = await User.findById(userId);

    // gets ids of those that the user is subscribed to
    const subscribedChannels = user.subscribedUsers;
    
    // calls to Video.find method for all items in the given array
    const list = await Promise.all(
      subscribedChannels.map((subscribedChannel) => {
        return Video.find({ userId: subscribedChannel });
      })
    );

    // transforms array from 2D to 1D and sorts by createAt date
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};
