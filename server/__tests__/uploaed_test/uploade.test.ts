import uploadeService from "../../src/services/uploade.service.js";
import videoRepostory from "../../src/reposetries/video.repostory.js";
import VideoQueue from "../../src/classes/Queue.js";
import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import worker from "../../src/openWorker.js";
import { IMulterFile } from "../../src/types/interface/IMulterFile.js";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

jest.mock("../../src/reposetries/video.repostory.js");
jest.mock("../../src/classes/Queue.js");
jest.mock("../../src/openWorker.js");
jest.mock("@aws-sdk/client-s3");


describe("Video Upload Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("uploadeVideoToS3", () => {
    it("should upload video to S3 and update the video record", async () => {
      const mockFile: IMulterFile = {
        fieldname: "video",
        originalname: "test.mp4",
        encoding: "7bit",
        mimetype: "video/mp4",
        size: 1024,
        destination: "/uploads",
        filename: "test.mp4",
        buffer: Buffer.from("test"),
      };

      const mockVideo = {
        _id: "607f1f77bcf86cd799439011",
        userId: "607f1f77bcf86cd799439012",
        projectId: "607f1f77bcf86cd799439013",
        GT: "General",
        name: "Test Video",
        status: "pending",
        createdAt: new Date(),
        updateAt: new Date(),
        lastStatusChange: new Date(),
        modelOutput: "",
        rating: 1,
        chips: ["test"],
        isDeleted: false,
      };

      (videoRepostory.updateVideo as jest.Mock).mockResolvedValue({
        ...mockVideo,
        url: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/test.mp4`,
        status: "uploaded",
      });

      // Mock AWS SDK v3
      const sendMock = jest.fn();
      S3Client.prototype.send = sendMock;
      sendMock.mockResolvedValueOnce({}); // Mock PutObjectCommand response
      sendMock.mockResolvedValueOnce({}); // Mock HeadObjectCommand response

      const result = await uploadeService.uploadeVideoToS3(mockFile, mockVideo as any);

      expect(result).toBe(mockVideo._id);
      expect(videoRepostory.updateVideo).toHaveBeenCalledWith(mockVideo._id, {
        url: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${mockVideo._id}-${mockFile.originalname}`,
        status: "uploaded",
      });
      expect(sendMock).toHaveBeenCalledTimes(2);
      expect(sendMock.mock.calls[0][0]).toBeInstanceOf(PutObjectCommand);
      expect(sendMock.mock.calls[1][0]).toBeInstanceOf(HeadObjectCommand);
    });

    it("should throw an error if file is not provided", async () => {
      await expect(uploadeService.uploadeVideoToS3(null as any, {} as any)).rejects.toThrow(
        "File is required"
      );
    });

    it("should throw an error if video is not provided", async () => {
      const mockFile: IMulterFile = {
        fieldname: "video",
        originalname: "test.mp4",
        encoding: "7bit",
        mimetype: "video/mp4",
        size: 1024,
        destination: "/uploads",
        filename: "test.mp4",
        buffer: Buffer.from("test"),
      };

      await expect(uploadeService.uploadeVideoToS3(mockFile, null as any)).rejects.toThrow(
        "Video is required"
      );
    });
  });

  describe("uploadeVideo", () => {
    it("should enqueue video and trigger worker processing", async () => {
      const mockFile: IMulterFile = {
        fieldname: "video",
        originalname: "test.mp4",
        encoding: "7bit",
        mimetype: "video/mp4",
        size: 1024,
        destination: "/uploads",
        filename: "test.mp4",
        buffer: Buffer.from("test"),
      };

      const mockVideoDTO = {
        userId: "607f1f77bcf86cd799439012",
        projectId: "607f1f77bcf86cd799439013",
        GT: "General",
        name: "Test Video",
        chips: ["test"],
      };

      const mockVideo = {
        _id: "607f1f77bcf86cd799439011",
        ...mockVideoDTO,
      };

      (videoRepostory.createVideo as jest.Mock).mockResolvedValue(mockVideo);

      jest.spyOn(VideoQueue, "enqueue").mockImplementation(jest.fn());
      jest.spyOn(worker, "postMessage").mockImplementation(jest.fn());

      const result = await uploadeService.uploadeVideo(mockFile, mockVideoDTO);

      expect(result).toBe("The video is being processed");
      expect(videoRepostory.createVideo).toHaveBeenCalledWith(mockVideoDTO);
      expect(VideoQueue.enqueue).toHaveBeenCalledWith(mockVideo._id);
      expect(worker.postMessage).toHaveBeenCalledWith("processQueue");
    });

    it("should throw an error if file is not provided", async () => {
      const mockVideoDTO = {
        userId: "607f1f77bcf86cd799439012",
        projectId: "607f1f77bcf86cd799439013",
        GT: "General",
        name: "Test Video",
        chips: ["test"],
      };

      await expect(uploadeService.uploadeVideo(null as any, mockVideoDTO)).rejects.toThrow(
        "File is required"
      );
    });
  });
});
