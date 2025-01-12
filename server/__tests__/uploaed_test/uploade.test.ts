import fs from "fs/promises";
import path from "path";
import uploadeService from "../../src/services/uploade.service.js";
import videoRepostory from "../../src/reposetries/video.repostory.js";
import {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";
import { IMulterFile } from "../../src/types/interface/IMulterFile.js";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

jest.mock("../../src/reposetries/video.repostory.js");
jest.mock("../../src/classes/Queue.js");
jest.mock("../../src/openWorker.js");
jest.mock("@aws-sdk/client-s3");

describe("Application Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Video Upload Tests", () => {
    it("should upload video from 'uploads' directory to S3 and update the video record", async () => {
      const videoPath = path.join(
        __dirname,
        "../../uploads/1736423233209-video.mp4"
      );
      const videoBuffer = await fs.readFile(videoPath);

      const mockFile: IMulterFile = {
        fieldname: "video",
        originalname: "test-video.mp4",
        encoding: "7bit",
        mimetype: "video/mp4",
        size: videoBuffer.length,
        buffer: videoBuffer,
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
        url: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${mockVideo._id}-test-video.mp4`,
        status: "uploaded",
      });

      const sendMock = jest.fn();
      S3Client.prototype.send = sendMock;
      sendMock.mockResolvedValueOnce({});
      sendMock.mockResolvedValueOnce({});

      const result = await uploadeService.uploadeVideoToS3(
        mockFile,
        mockVideo as any
      );

      expect(result).toBe(mockVideo._id);
      expect(videoRepostory.updateVideo).toHaveBeenCalledWith(mockVideo._id, {
        url: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${mockVideo._id}-test-video.mp4`,
        status: "uploaded",
      });
      expect(sendMock).toHaveBeenCalledTimes(2);
      expect(sendMock.mock.calls[0][0]).toBeInstanceOf(PutObjectCommand);
      expect(sendMock.mock.calls[1][0]).toBeInstanceOf(HeadObjectCommand);
    });
  });
});
