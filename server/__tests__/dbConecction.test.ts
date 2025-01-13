import mongoose from 'mongoose';
import connectDB from '../src/dbConecction.js';

jest.mock('mongoose', () => ({
  connect: jest.fn(),
}));

describe('connectDB', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should connect to MongoDB successfully', async () => {
    (mongoose.connect as jest.Mock).mockResolvedValueOnce(undefined);
    await connectDB();
    expect(mongoose.connect).toHaveBeenCalledWith(expect.any(String), { authSource: 'admin' });
  });

  it('should log an error if connection fails', async () => {
    const error = new Error('Connection failed');
    console.error = jest.fn();
    (mongoose.connect as jest.Mock).mockRejectedValueOnce(error);
    await connectDB();
    expect(console.error).toHaveBeenCalledWith('❌ MongoDB connection error:', error);
  });
});