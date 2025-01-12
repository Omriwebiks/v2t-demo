import { model, Schema } from "mongoose";
import IUser from "../types/interface/IUser.js";

const userSchema = new Schema <IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
    createdAt: { type: Date, default: Date.now },
    loginAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
});

const User = model<IUser>('User', userSchema);
export default User;