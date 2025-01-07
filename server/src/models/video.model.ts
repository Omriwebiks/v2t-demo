import Rating from "../types/enum/rating.enum";
import IVideo from "../types/interfase/Ividoe";
import mongoose, { Schema } from 'mongoose';


const videoSchema = new Schema<IVideo>({
    user_id: { type: Schema.Types.ObjectId, required: true },
    project_id: { type: Schema.Types.ObjectId, required: true },
    GT: { type: String, required: true },
    url: { type: String },
    status: { type: String, required: true },
    created_at: { type: Date, required: true },
    update_at: { type: Date, required: true },
    last_status_change: { type: Date, required: true },
    name: { type: String, required: true },
    model_output: { type: String, required: true },
    rating: { enum: Rating, required: true },
    chips: { type: [String], required: true },
    is_deleted: { type: Boolean, required: true }
});

const Video = mongoose.model<IVideo>('Video', videoSchema);

export default Video;