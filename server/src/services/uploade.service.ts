import Video from "../models/video.model";
import IVideo from "../types/interface/Ividoe";
import IVideoDTO from "../types/interface/DTO/IVideoDTO";
import videoRepostory from "../reposetries/video.repostory";
import { IMulterFile } from "../types/interface/IMulterFile";
import mongoose,{ ObjectId } from "mongoose";
import VideoQueue from "../classes/Queue";
import worker from "../openWorker";
import AWS from "aws-sdk";
const s3 = new AWS.S3({ region: "us-east-1" });


const uploadVideo = async (
  file: IMulterFile,
  data: IVideoDTO
): Promise<string> => {
  const video: IVideo = await videoRepostory.createVideo(data);
  const videoId = await uploadVideoToS3(file, video);
  VideoQueue.enqueue(videoId);
  if(VideoQueue.size() === 1){
    worker.postMessage("processQueue");
  }

  return "the video is being processed";
};

export const uploadVideoToS3 = async (
  file: IMulterFile,
  video: IVideo
): Promise<mongoose.Types.ObjectId> => {
  if (!file) throw new Error("File is required");
  if (!video) throw new Error("Video is required");
  const Bucket = process.env.AWS_BUCKET_NAME;
  if (!Bucket) throw new Error("AWS_BUCKET_NAME is not defined");

  const uploadParams = {
    Bucket,
    Key: `${video._id}-${file.originalname}`,
    Body: file.buffer,
  };

  try {
    await s3.putObject(uploadParams).promise();

    const headParams = {
      Bucket,
      Key: `${video._id}-${file.originalname}`,
    };

    const headData = await s3.headObject(headParams).promise();

    if (headData) {
      const updatedVideo = await videoRepostory.updateVideo(video._id, {
        url: `https://${uploadParams.Bucket}.s3.amazonaws.com/${uploadParams.Key}`,
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
