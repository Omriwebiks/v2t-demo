import Video from "../models/video.model.js";
import IVideo from "../types/interface/Ividoe.js";
import IVideoDTO from "../types/interface/DTO/IVideoDTO.js";
import videoRepostory from "../reposetries/video.repostory.js";
import { IMulterFile } from "../types/interface/IMulterFile.js";
import { ObjectId } from "mongoose";
import VideoQueue from "../classes/Queue.js";
import worker from "../openWorker.js";
import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";

const Bucket = process.env.AWS_BUCKET_NAME;
console.log(Bucket);


const s3Client = new S3Client({ region: "us-east-1" });

const uploadeVideo = async (
  file: IMulterFile,
  data: IVideoDTO
): Promise<string> => {
  const video: IVideo = await videoRepostory.createVideo(data);
  const videoId = await uploadeVideoToS3(file, video);
  VideoQueue.enqueue(videoId);
  if (VideoQueue.size() === 1) {
    worker.postMessage("processQueue");
  }

  return "The video is being processed";
};

export const uploadeVideoToS3 = async (
  file: IMulterFile,
  video: IVideo
): Promise<ObjectId> => {
  if (!file) throw new Error("File is required");
  if (!video) throw new Error("Video is required");
  if (!Bucket) throw new Error("AWS_BUCKET_NAME is not defined");

  const key = `${video._id}-${file.originalname}`;
  const uploadParams = {
    Bucket,
    Key: key,
    Body: file.buffer,
  };

  try {
    const putCommand = new PutObjectCommand(uploadParams);
    await s3Client.send(putCommand);

    const headCommand = new HeadObjectCommand({ Bucket, Key: key });
    const headData = await s3Client.send(headCommand);

    if (headData) {
      const updatedVideo = await videoRepostory.updateVideo(video._id, {
        url: `https://${Bucket}.s3.amazonaws.com/${key}`,
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
