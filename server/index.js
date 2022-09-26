import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// ROUTER

import memoryRouters from "./routers/memoryRouters.js";

dotenv.config();

const app = express();

app.use(cors());


app.use(express.json({ limit: "20mb" }));

// app.use(cors());
app.use("/memories", memoryRouters);

app.listen(process.env.PORT, () => {
  console.log("loascoasdofasd", process.env.PORT);

  mongoose
    .connect(process.env.MONG_URI, {
      useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useFindAndModify: true,
    })
    .then(() => {
      console.log("bağlandı !!!");
    })
    .catch((err) => {
      console.log(err);
    });
});
