import { Types } from 'mongoose';
import Video from '../models/video.model.js';
import IVideoDTO from '../types/interface/DTO/IVideoDTO.js';
import IVideo from '../types/interface/Ividoe.js';

const createVideo = async (data: IVideoDTO): Promise<IVideo> => {
  if (!data || Object.keys(data).length === 0) throw new Error('Data is required');
  const video: IVideo = new Video({
    ...data
  });
  await video.save();
  return video.toObject();
};

const updateVideo = async (_id: Types.ObjectId, data: Object): Promise<IVideo> => {
  if (!data) throw new Error('Data is required');
  const video = await Video.findOneAndUpdate({ _id }, data, { new: true });
  if (!video) throw new Error('Video not found');
  return video.toObject();
};

const getVideos = async (filter: Object): Promise<IVideo[]> => {
  const videos = await Video.find({ ...filter, isDeleted: false });
  return videos ? videos.map((video) => video.toObject()) : [];
};

const getVideo = async (filter: Object): Promise<IVideo> => {
  const video = await Video.findOne({ ...filter, isDeleted: false });
  if (!video) throw new Error('Video not found');
  return video.toObject();
};

const deleteVideo = async (filter: Object): Promise<boolean> => {
  const video = await Video.deleteOne({ ...filter, isDeleted: false });
  if (!video || video.deletedCount === 0) throw new Error('Video not found');
  return true;
};

export default { createVideo, updateVideo, getVideos, getVideo, deleteVideo };