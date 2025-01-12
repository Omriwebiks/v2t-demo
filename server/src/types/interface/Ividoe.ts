import { Types,Document } from 'mongoose';
import Rating from '../enum/rating.enum.js';

interface IVideo extends Document{
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    projectId: Types.ObjectId;
    GT: string;
    url?: string;
    status: string;
    createdAt: Date;
    updateAt: Date;
    lastStatusChange: Date;
    videoName: string;
    modelOutput: string;
    rating: Rating;
    isDeleted: boolean;
}

export default IVideo;