import { ObjectId } from "mongoose";
import Video from "../models/video.model";
import IVideoDTO from "../types/interface/DTO/IVideoDTO";
import IVideo from "../types/interface/Ividoe";

const createVideo = async (data: IVideoDTO): Promise<IVideo> => {
  if (!data) throw new Error("Data is required");
  const video: IVideo = new Video({
    userId: data.userId,
    projectId: data.projectId,
    GT: data.GT,
    name: data.name,
    rating: 0,
    chips: data.chips,
  });

  await video.save();

  return video.toObject();
};

const updateVideo = async (_id:ObjectId,data: Object): Promise<IVideo> => {
    if (!data) throw new Error("Data is required");
    
    const video = await Video.findOneAndUpdate({_id},data,{new:true})
    
    if(!video) throw new Error("Video not found")

    return video.toObject();
}

export default { createVideo,updateVideo };
