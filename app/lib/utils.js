import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    await mongoose.connect(process.env.MONGO);
    connection.isConnected = mongoose.connection[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
