import IProject from "../types/interfase/IProject";
import mongoose, { Schema } from 'mongoose';


const projectSchema = new Schema<IProject>({
        img: { type: String, required: false },
        description: { type: String, required: true },
        user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
        videos: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
        created_at: { type: Date, default: Date.now },
        update_at: { type: Date, default: Date.now },
        name: { type: String, required: true },
        is_deleted: { type: Boolean, default: false }
});

const Project = mongoose.model<IProject>('Project', projectSchema);

export default Project;