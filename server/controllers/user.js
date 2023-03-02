import User from "../models/user.js";
import Video from "../models/video.js";
import { createError } from "../error.js";

export const update = async (req, res, next) => {
  const userId = req.params.id;
  const verifiedUserId = req.user.id;

  if (userId === verifiedUserId) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    next(createError(403, "You can only update your own account."));
  }
};
export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  const verifiedUserId = req.user.id;

  if (userId === verifiedUserId) {
    try {
      await User.findByIdAndDelete(userId);
      res.status(200).json("User has been deleted");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only delete your own account."));
  }
};
export const findUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const subscribe = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const subscribedChannels = user.subscribedUsers;
  const channel = subscribedChannels.indexOf(req.params.id);
  if (channel !== -1) {
    return next(createError(403, "Already subscribed to this user."));
  }
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: {
        subscribedUsers: req.params.id,
      },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscribe successful.");
  } catch (err) {
    next(err);
  }
};
export const unsubscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: {
        subscribedUsers: req.params.id,
      },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("Unsubscribe successful.");
  } catch (err) {
    next(err);
  }
};
export const like = async (req, res, next) => {
  const userId = req.user.id
  const videoId = req.params.videoId
  try {
    // add a like to the video object with the userId
    await Video.findByIdAndUpdate(videoId,{ $addToSet: {likes: userId} })
    // take away the userId from dislike from the video object
    await Video.findByIdAndUpdate(videoId,{ $pull: {dislikes: userId} })
    res.status(200).json("Video has been liked.")
  } catch (err) {
    next(err);
  }
};
export const dislike = async (req, res, next) => {
  const userId = req.user.id
  const videoId = req.params.videoId
  try {
        // add a dislike to the video object with the userId
        await Video.findByIdAndUpdate(videoId,{ $addToSet: {dislikes: userId} })
        // take away the userId from like from the video object
        await Video.findByIdAndUpdate(videoId,{ $pull: {likes: userId} })
        res.status(200).json("Video has been disliked.")
  } catch (err) {
    next(err);
  }
};
