import mongoose, { Types } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import videoRepostory from '../../src/reposetries/video.repostory.js';
import Video from '../../src/models/video.model.js';
import IVideoDTO from '../../src/types/interface/DTO/IVideoDTO.js';

describe('videoRepostory', () => {
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  afterEach(async () => {
    await Video.deleteMany({});
  });

  describe('createVideo', () => {
    it('should create a new video', async () => {
      const data = {
        userId: '64ef71f5e01ae77d9c3b46cf',
        projectId: '64ef71f5e01ae77d9c3b46ce',
        GT: 'testGT',
        videoName: 'testVideo',
      };
      const result = await videoRepostory.createVideo(data);
      expect(result.userId.toString()).toBe(data.userId);
      expect(result.videoName).toBe(data.videoName);
    });

    it('should throw error if no data is provided', async () => {
      await expect(videoRepostory.createVideo({}as IVideoDTO)).rejects.toThrow('Data is required');
    });
  });

  describe('updateVideo', () => {
    it('should update a video', async () => {
      const created = await Video.create({
        userId: '64ef71f5e01ae77d9c3b46cf',
        projectId: '64ef71f5e01ae77d9c3b46ce',
        GT: 'testGT',
        videoName: 'oldName',
      });
      const updated = await videoRepostory.updateVideo(created._id, { videoName: 'newName' });
      expect(updated.videoName).toBe('newName');
    });

    it('should throw error if video not found', async () => {
      await expect(
        videoRepostory.updateVideo(new Types.ObjectId(), { videoName: 'none' })
      ).rejects.toThrow('Video not found');
    });
  });

  describe('getVideos', () => {
    it('should return an array of videos', async () => {
      await Video.create({
        userId: '64ef71f5e01ae77d9c3b46cf',
        projectId: '64ef71f5e01ae77d9c3b46ce',
        GT: 'testGT',
        videoName: 'listVideo',
      });
      const videos = await videoRepostory.getVideos({});
      expect(videos.length).toBe(1);
      expect(videos[0].videoName).toBe('listVideo');
    });
  });

  describe('getVideo', () => {
    it('should return a single video', async () => {
      const created = await Video.create({
        userId: '64ef71f5e01ae77d9c3b46cf',
        projectId: '64ef71f5e01ae77d9c3b46ce',
        GT: 'testGT',
        videoName: 'singleVideo',
      });
      const found = await videoRepostory.getVideo({ _id: created._id });
      expect(found.videoName).toBe('singleVideo');
    });

    it('should throw error if video not found', async () => {
      await expect(videoRepostory.getVideo({ _id: new Types.ObjectId() })).rejects.toThrow('Video not found');
    });
  });

  describe('deleteVideo', () => {
    it('should delete a video', async () => {
      const created = await Video.create({
        userId: '64ef71f5e01ae77d9c3b46cf',
        projectId: '64ef71f5e01ae77d9c3b46ce',
        GT: 'testGT',
        videoName: 'delVideo',
      });
      const result = await videoRepostory.deleteVideo({ _id: created._id });
      expect(result).toBe(true);
    });

    it('should throw error if video not found', async () => {
      await expect(videoRepostory.deleteVideo({ _id: new Types.ObjectId() })).rejects.toThrow('Video not found');
    });
  });
});
