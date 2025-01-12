import mongoose from "mongoose";
import VideoQueue from "../../src/classes/Queue.js";
import videoRepository from "../../src/reposetries/video.repostory.js";
import Utils from "../../src/worker/utils.js";
import workerLogic from "../../src/worker/worker.logic.js";
import { jest } from "@jest/globals";
import IVideo from "../../src/types/interface/Ividoe.js";
import Video from "../../src/models/video.model.js";

// Mocking dependencies
jest.mock("../../src/reposetries/video.repostory.js");
jest.mock("../../src/classes/Queue.js", () => ({
  enqueue: jest.fn(),
  dequeue: jest.fn(),
  size: jest.fn().mockReturnValue(0),
  isEmpty: jest.fn().mockReturnValue(true),
  queue: [],
}));

jest.mock("../../src/worker/utils.js", () => ({
  updateStatus: jest.fn(),
  sendToModel: jest.fn(),
}));

describe("Worker Logic - Basic Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    VideoQueue.queue = [];
  });

  describe("Queue Functions", () => {
    it("should enqueue a video ID to the queue", () => {
      const mockVideoId = new mongoose.Types.ObjectId(
        "64ef71f5e01ae77d9c3b46cf"
      );
      VideoQueue.enqueue(mockVideoId);
      expect(VideoQueue.enqueue).toHaveBeenCalledWith(mockVideoId);
    });

    it("should dequeue a video ID from the queue", () => {
      const mockVideoId = new mongoose.Types.ObjectId(
        "64ef71f5e01ae77d9c3b46cf"
      );
      VideoQueue.queue = [mockVideoId];
      (VideoQueue.dequeue as jest.Mock).mockReturnValue(mockVideoId);

      const dequeuedId = VideoQueue.dequeue();

      expect(VideoQueue.dequeue).toHaveBeenCalled();
      expect(dequeuedId).toBe(mockVideoId);
    });

    it("should return the correct size of the queue", () => {
      (VideoQueue.size as jest.Mock).mockReturnValue(3);
      expect(VideoQueue.size()).toBe(3);
    });

    it("should return true when the queue is empty", () => {
      (VideoQueue.isEmpty as jest.Mock).mockReturnValue(true);
      expect(VideoQueue.isEmpty()).toBe(true);
    });
  });

  describe("Repository Functions", () => {
    it("should fetch videos with the correct filter", async () => {
      const mockVideos: IVideo[] = [
        {
          _id: new mongoose.Types.ObjectId("64ef71f5e01ae77d9c3b46cf"),
          status: "uploaded",
          userId: new mongoose.Types.ObjectId("677f714de01ae77d9c3b46ce"),
          projectId: new mongoose.Types.ObjectId("677f71f5e01ae77d9c3b46cf"),
          GT: "General",
          videoName: "Sample Video",
          rating: 4,
          isDeleted: false,
          createdAt: new Date(),
          updateAt: new Date(),
          modelOutput: "This is a test",
          lastStatusChange: new Date(),
          url: "https://v2t-demo.s3.amazonaws.com/sample-video.mp4",
        } as IVideo,
      ];

      (
        videoRepository.getVideos as jest.MockedFunction<
          typeof videoRepository.getVideos
        >
      ).mockResolvedValue(mockVideos);

      const videos = await videoRepository.getVideos({
        status: { $in: ["uploaded", "processing"] },
      });

      expect(videoRepository.getVideos).toHaveBeenCalledWith({
        status: { $in: ["uploaded", "processing"] },
      });
      expect(videos).toEqual(mockVideos);
    });

    it("should update a video with the correct data", async () => {
      const mockVideoId = new mongoose.Types.ObjectId(
        "64ef71f5e01ae77d9c3b46cf"
      );
      const mockData = { status: "completed" };
      const mockVideo: IVideo = {
        _id: mockVideoId,
        status: "completed",
        userId: new mongoose.Types.ObjectId("677f714de01ae77d9c3b46ce"),
        projectId: new mongoose.Types.ObjectId("677f71f5e01ae77d9c3b46cf"),
        GT: "General",
        videoName: "Sample Video",
        rating: 4,
        isDeleted: false,
        createdAt: new Date(),
        updateAt: new Date(),
        modelOutput: "This is a test",
        lastStatusChange: new Date(),
        url: "https://v2t-demo.s3.amazonaws.com/sample-video.mp4",
      } as IVideo;

      (
        videoRepository.updateVideo as jest.MockedFunction<
          typeof videoRepository.updateVideo
        >
      ).mockResolvedValue(mockVideo);

      const updatedVideo = await videoRepository.updateVideo(
        mockVideoId,
        mockData
      );

      expect(videoRepository.updateVideo).toHaveBeenCalledWith(
        mockVideoId,
        mockData
      );
      expect(updatedVideo.status).toBe("completed");
    });
  });

  describe("Utils Functions", () => {
    it("should update status and return the video", async () => {
      const mockVideoId = new mongoose.Types.ObjectId(
        "64ef71f5e01ae77d9c3b46cf"
      );
      const mockStatus = "processing";
      const mockVideo: IVideo = {
        _id: mockVideoId,
        status: mockStatus,
        userId: new mongoose.Types.ObjectId("677f714de01ae77d9c3b46ce"),
        projectId: new mongoose.Types.ObjectId("677f71f5e01ae77d9c3b46cf"),
        GT: "General",
        videoName: "Sample Video",
        rating: 4,
        isDeleted: false,
        createdAt: new Date(),
        updateAt: new Date(),
        modelOutput: "This is a test",
        lastStatusChange: new Date(),
        url: "https://v2t-demo.s3.amazonaws.com/sample-video.mp4",
      } as IVideo;

      (
        Utils.updateStatus as jest.MockedFunction<typeof Utils.updateStatus>
      ).mockResolvedValue(mockVideo);

      const video = await Utils.updateStatus(mockVideoId, mockStatus);

      expect(Utils.updateStatus).toHaveBeenCalledWith(mockVideoId, mockStatus);
      expect(video.status).toBe(mockStatus);
    });

    it("should send video to the AI model and return results", async () => {
      const mockUrl = "https://example.com/video.mp4";
      const mockResult = { success: true };

      (
        Utils.sendToModel as jest.MockedFunction<typeof Utils.sendToModel>
      ).mockResolvedValue(mockResult);

      const result = await Utils.sendToModel(mockUrl);

      expect(Utils.sendToModel).toHaveBeenCalledWith(mockUrl);
      expect(result).toEqual(mockResult);
    });
  });

  describe("Worker Logic - Full Flow", () => {
    it("should initialize the queue and process all videos", async () => {
      const mockVideos: IVideo[] = [
        {
          _id: new mongoose.Types.ObjectId("64ef71f5e01ae77d9c3b46cf"),
          status: "uploaded",
          userId: new mongoose.Types.ObjectId("677f714de01ae77d9c3b46ce"),
          projectId: new mongoose.Types.ObjectId("677f71f5e01ae77d9c3b46cf"),
          GT: "General",
          videoName: "Sample Video",
          rating: 4,
          isDeleted: false,
          createdAt: new Date(),
          updateAt: new Date(),
          modelOutput: "This is a test",
          lastStatusChange: new Date(),
          url: "https://v2t-demo.s3.amazonaws.com/sample-video.mp4",
        } as IVideo,
      ];

      (
        videoRepository.getVideos as jest.MockedFunction<
          typeof videoRepository.getVideos
        >
      ).mockResolvedValue(mockVideos);

      (
        Utils.updateStatus as jest.MockedFunction<typeof Utils.updateStatus>
      ).mockResolvedValue(mockVideos[0]);

      (
        Utils.sendToModel as jest.MockedFunction<typeof Utils.sendToModel>
      ).mockResolvedValue({ success: true });

      await workerLogic.initializeQueue();

      expect(VideoQueue.enqueue).toHaveBeenCalledTimes(1);
      expect(VideoQueue.dequeue).toHaveBeenCalledTimes(1);
      expect(Utils.updateStatus).toHaveBeenCalledWith(
        mockVideos[0]._id,
        "processing"
      );
    });
  });
});
