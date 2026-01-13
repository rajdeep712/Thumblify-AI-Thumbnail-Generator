import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
    // console.log(process.env.DB_CONNECTION_URI);
    await mongoose.connect(process.env.DB_CONNECTION_URI as string);
  } catch (error) {
    console.error("Error Connecting to MongoDB: ", error);
  }
};

export default connectDB;
