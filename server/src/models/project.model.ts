import IProject from "../types/interface/IProject";
import mongoose, { Schema } from 'mongoose';


const projectSchema = new Schema<IProject>({
        img: { type: String, required: false },
        description: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        videos: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
        createdAt: { type: Date, default: Date.now },
        updateAt: { type: Date, default: Date.now },
        name: { type: String, required: true },
        isDeleted: { type: Boolean, default: false }
});

const Project = mongoose.model<IProject>('Project', projectSchema);

export default Project;