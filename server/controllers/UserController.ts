import { Request, Response } from "express";
import Thumbnail from "../models/Thumbnail.js";

// get all thumbnails for an user
export const getUsersThumbnails = async (req: Request, res: Response) => {
  try {
    const { userId } = req.session;
    const thumbnails = await Thumbnail.find({ userId }).sort({ createdAt: -1 });
    res.json({ thumbnails });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// controller to get a single thumbnail of a user
export const getThumbnailById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.session;

    const thumbnail = await Thumbnail.findOne({ _id: id, userId });

    return res.json({ thumbnail });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
