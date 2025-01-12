import { ObjectId, Document } from 'mongoose';

interface IUser extends Document{
    _id: ObjectId;
    name: string;
    email: string;
    password: string; 
    favorites: [ObjectId];
    projects: [ObjectId];
    createdAt: Date;
    loginAt: Date;
    isDeleted: boolean;
}

export default IUser;