import { ObjectId } from 'mongoose';

interface IProject{
    _id: ObjectId;
    img?: string;
    description: string;
    user_id: ObjectId;
    videos: [ObjectId];
    created_at: Date;
    update_at: Date;
    name: string;
    is_deleted: boolean;
}

export default IProject;