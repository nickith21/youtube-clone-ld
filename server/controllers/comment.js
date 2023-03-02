import { createError } from "../error.js";
import Comment from "../models/comment.js";
import Video from "../models/video.js";

export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    const video = await Video.findById(comment.videoId)
    if (comment.userId === req.user.id || video.userId === req.user.id) {
        await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json("Comment has been deleted.")
    } else {
        return next(createError(403,"Can only delete your own comment or a comment on your own video."))
    }
  } catch (err) {
    next(err);
  }
};

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({videoId:req.params.videoId})
    res.status(200).json(comments)
  } catch (err) {
    next(err);
  }
};
