import mongoose from "mongoose";

export interface IUser extends Document {
  // So that typescript understands that IUser have methods such as .save() ,etc.
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  }, // As password field is optional in IUser so did not mention it here
  { timestamps: true }
);

//
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
