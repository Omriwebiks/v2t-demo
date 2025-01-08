import { ObjectId,Document } from 'mongoose';
import Rating from '../enum/rating.enum';

interface IVideo extends Document{
    _id: ObjectId;
    userId: ObjectId;
    projectId: ObjectId;
    GT: string;
    url?: string;
    status: string;
    createdAt: Date;
    updateAt: Date;
    lastStatusChange: Date;
    name: string;
    modelOutput: string;
    rating: Rating;
    chips:[string];
    isDeleted: boolean;
}

export default IVideo;