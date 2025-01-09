import { model, Schema } from "mongoose";
import IUser from "../types/interface/IUser";

const userSchema = new Schema <IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
});

const User = model<IUser>('User', userSchema);
export default User;