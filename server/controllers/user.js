import User from "../models/user.js";
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
    next(createError(403, "You can only delete your own account."));
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
  console.log(req.user.id, req.params.id);
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
  try {
  } catch (err) {
    next(err);
  }
};
export const dislike = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
