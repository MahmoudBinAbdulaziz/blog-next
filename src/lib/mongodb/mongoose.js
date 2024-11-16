import mongoose from "mongoose";
let initialized = false;
export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("mongodb connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "next-blog",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    initialized = true;
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
