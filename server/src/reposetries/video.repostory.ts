import { ObjectId } from "mongoose";
import Video from "../models/video.model.js";
import IVideoDTO from "../types/interface/DTO/IVideoDTO.js";
import IVideo from "../types/interface/Ividoe.js";
import Rating from "../types/enum/rating.enum.js";

const createVideo = async (data: IVideoDTO): Promise<IVideo> => {
  if (!data) throw new Error("Data is required");
  const video: IVideo = new Video({
    userId: data.userId,
    projectId: data.projectId,
    GT: data.GT,
    name: data.name,
    chips: data.chips,
  });

  await video.save();

  return video.toObject();
};

const updateVideo = async (_id: ObjectId, data: Object): Promise<IVideo> => {
  if (!data) throw new Error("Data is required");

  const video = await Video.findOneAndUpdate({ _id }, data, { new: true });

  if (!video) throw new Error("Video not found");

  return video.toObject();
};

const getVideos = async (filter: Object): Promise<IVideo[]> => {
  const videos = await Video.find({ ...filter, isDeleted: false });

  return videos ? videos.map((video) => video.toObject()) : [];
};

export default { createVideo, updateVideo, getVideos };
