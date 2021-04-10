import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const mongodb = () => {
  const connection = process.env.MONGO_DB_CONNECTION || "mongodb";
  const host = process.env.MONGO_DB_HOST || "project";
  const port = process.env.MONGO_DB_PORT || "27017";
  const name = process.env.MONGO_DB_DATABASE || "localhost";

  const connectionString = `${connection}://${host}:${port}/${name}`;
  mongoose.Promise = global.Promise;
  mongoose.connect(
    connectionString,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) console.log("MongoDB Connection Succeeded");
      else
        console.log(
          "Error in DB Connection: ".JSON.stringify(err, undefined, 2)
        );
    }
  );
};
