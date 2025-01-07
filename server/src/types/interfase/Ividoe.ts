import { ObjectId } from 'mongoose';
import Rating from '../enum/rating.enum';

interface IVideo{
    _id: ObjectId;
    user_id: ObjectId;
    project_id: ObjectId;
    GT: string;
    url?: string;
    status: string;
    created_at: Date;
    update_at: Date;
    last_status_change: Date;
    name: string;
    model_output: string;
    rating: Rating;
    chips:[string];
    is_deleted: boolean;
}

export default IVideo;