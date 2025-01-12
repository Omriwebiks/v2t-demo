import { ObjectId, Document } from 'mongoose';

interface IProject extends Document{
    _id: ObjectId;
    img?: string;
    description: string;
    videos: [ObjectId];
    createdAt: Date;
    updateAt: Date;
    projectName: string;
    isDeleted: boolean;
}

export default IProject;