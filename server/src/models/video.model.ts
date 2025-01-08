import Rating from "../types/enum/rating.enum";
import IVideo from "../types/interface/Ividoe";
import mongoose, { Schema } from 'mongoose';


const videoSchema = new Schema<IVideo>({
    userId: { type: Schema.Types.ObjectId, required: true },
    projectId: { type: Schema.Types.ObjectId, required: true },
    GT: { type: String, required: true },
    url: { type: String },
    status: { type: String, default:'uploading' },
    createdAt: { type: Date, required: true },
    updateAt: { type: Date, required: true },
    lastStatusChange: { type: Date, required: true },
    name: { type: String, required: true },
    modelOutput: { type: String, required: true },
    rating: { enum: Rating, required: true },
    chips: { type: [String], required: true },
    isDeleted: { type: Boolean, required: true }
});

const Video = mongoose.model<IVideo>('Video', videoSchema);

export default Video;