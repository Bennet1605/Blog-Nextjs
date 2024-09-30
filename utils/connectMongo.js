import mongoose from "mongoose";

const Mongodb = async () => mongoose.connect(process.env.MONGO_URI);

export default Mongodb;