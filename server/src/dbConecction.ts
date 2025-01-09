import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || '';

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            authSource: 'admin' 
        });
        console.log('✅ Connected to MongoDB successfully');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
    }
};

export default connectDB;