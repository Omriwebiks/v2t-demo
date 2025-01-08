import { ObjectId, Document } from 'mongoose';

interface IProject extends Document{
    _id: ObjectId;
    img?: string;
    description: string;
    userId: ObjectId;
    videos: [ObjectId];
    createdAt: Date;
    updateAt: Date;
    name: string;
    isDeleted: boolean;
}

export default IProject;