import IVideo from "../types/interface/Ividoe.js";
import IVideoDTO from "../types/interface/DTO/IVideoDTO.js";
import videoRepostory from "../reposetries/video.repostory.js";
import { IMulterFile } from "../types/interface/IMulterFile.js";
import { Types } from "mongoose";
import VideoQueue from "../classes/Queue.js";
import uploadToS3 from "./s3.service.js";




const uploadeVideo = async (
  file: IMulterFile,
  data: IVideoDTO
): Promise<string> => {
  const video: IVideo = await videoRepostory.createVideo(data);
  const videoId = await uploadeVideoToS3(file, video);
  VideoQueue.enqueue(videoId);
  return "The video is being processed";
};

export const uploadeVideoToS3 = async (
  file: IMulterFile,
  video: IVideo
): Promise<Types.ObjectId> => {
  if (!file) throw new Error("File is required");
  if (!video) throw new Error("Video is required");

  const key = `${video._id}-${file.originalname}`;

  try {
    const url = await uploadToS3(key,file.buffer);
    if (url) {
      const updatedVideo = await videoRepostory.updateVideo(video._id, {
        url,
        status: "uploaded",
      });
      return updatedVideo._id;
    } else {
      throw new Error("File integrity check failed.");
    }
  } catch (error) {
    console.error("Error uploading video:", error);
    throw new Error("Failed to upload video to S3.");
  }
};

export default { uploadeVideo, uploadeVideoToS3 };
