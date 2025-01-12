import { Types } from "mongoose";
import videoRepostory from "../reposetries/video.repostory.js";

async function updateStatus(videoId: Types.ObjectId, status: string) {
  console.log(
    `[StatusManager] Video ID: ${videoId} updated to status: ${status}`
  );
  const video = await videoRepostory.updateVideo(videoId, {
    status,
    lastStatusChange: new Date(),
  });
  return video;
}

async function sendToModel(videoUrl: string) {
  console.log(`[ModelService] Sending Video ID: ${videoUrl} to the model...`);
  try {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log(`[ModelService] Video ID: ${videoUrl} processed successfully.`);
    return { success: true };
  } catch (error) {
    console.error(
      `[ModelService] Failed to process Video ID: ${videoUrl}:`,
      error
    );
    return { success: false };
  }
}

export default { updateStatus, sendToModel };
