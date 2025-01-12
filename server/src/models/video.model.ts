import Rating from "../types/enum/rating.enum.js";
import IVideo from "../types/interface/Ividoe.js";
import mongoose, { Schema } from 'mongoose';


const videoSchema = new Schema<IVideo>({
    userId: { type: Schema.Types.ObjectId, required: true },
    projectId: { type: Schema.Types.ObjectId, required: true, ref: 'Project' },
    GT: { type: String, required: true },
    url: { type: String },
    status: { type: String, default:'uploading' },
    createdAt: { type: Date , default: Date.now },
    updateAt: { type: Date, default: Date.now },
    lastStatusChange: { type: Date, default: Date.now  },
    videoName: { type: String, required: true },
    modelOutput: { type: String },
    rating: { type: Number, default: Rating.Four },
    isDeleted: { type: Boolean, default: false  }
});

const Video = mongoose.model<IVideo>('Video', videoSchema);

export default Video;